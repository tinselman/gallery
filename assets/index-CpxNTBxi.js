var Sf=Object.defineProperty;var wf=(s,t,e)=>t in s?Sf(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var I=(s,t,e)=>wf(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vl="186",bf=0,lc=1,Ef=2,Wr=1,Tf=2,Gs=3,Ii=0,rn=1,Qn=2,ni=0,Ws=1,cc=2,hc=3,uc=4,Af=5,ls=100,Rf=101,Cf=102,Lf=103,Pf=104,If=200,Df=201,Uf=202,Nf=203,jh=204,tu=205,Ff=206,zf=207,Of=208,kf=209,Bf=210,Hf=211,Gf=212,Vf=213,Wf=214,Ea=0,Ta=1,Aa=2,Js=3,Ra=4,Ca=5,La=6,Pa=7,Ml=0,Xf=1,qf=2,On=0,eu=1,nu=2,iu=3,su=4,ru=5,ou=6,yl=7,au=300,Di=301,gs=302,Lo=303,Po=304,Mo=306,Ia=1e3,ei=1001,Da=1002,ke=1003,Yf=1004,cr=1005,Be=1006,Io=1007,Si=1008,sn=1009,lu=1010,cu=1011,Qs=1012,Sl=1013,kn=1014,An=1015,Mn=1016,wl=1017,bl=1018,js=1020,hu=35902,uu=35899,fu=1021,du=1022,fn=1023,ri=1026,Pi=1027,yo=1028,El=1029,Ui=1030,Tl=1031,Al=1033,Xr=33776,qr=33777,Yr=33778,$r=33779,Ua=35840,Na=35841,Fa=35842,za=35843,Oa=36196,ka=37492,Ba=37496,Ha=37488,Ga=37489,jr=37490,Va=37491,Wa=37808,Xa=37809,qa=37810,Ya=37811,$a=37812,Ka=37813,Za=37814,Ja=37815,Qa=37816,ja=37817,tl=37818,el=37819,nl=37820,il=37821,sl=36492,rl=36494,ol=36495,al=36283,ll=36284,to=36285,cl=36286,$f=3200,hl=0,Kf=1,Mi="",Ie="srgb",eo="srgb-linear",no="linear",he="srgb",Do=7680,Zf=519,Jf=512,Qf=513,jf=514,Rl=515,td=516,ed=517,Cl=518,nd=519,pu=35044,fc="300 es",Fn=2e3,tr=2001;function id(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sd(){const s=er("canvas");return s.style.display="block",s}const dc={};function io(...s){const t="THREE."+s.shift();console.log(t,...s)}function mu(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Gt(...s){s=mu(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function se(...s){s=mu(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ps(...s){const t=s.join(" ");t in dc||(dc[t]=!0,Gt(...s))}function rd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const od={[Ea]:Ta,[Aa]:La,[Ra]:Pa,[Js]:Ca,[Ta]:Ea,[La]:Aa,[Pa]:Ra,[Ca]:Js};class Fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pc=1234567;const Xs=Math.PI/180,nr=180/Math.PI;function ii(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function Ll(s,t){return(s%t+t)%t}function ad(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function ld(s,t,e){return s!==t?(e-s)/(t-s):0}function qs(s,t,e){return(1-e)*s+e*t}function cd(s,t,e,n){return qs(s,t,1-Math.exp(-e*n))}function hd(s,t=1){return t-Math.abs(Ll(s,t*2)-t)}function ud(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function fd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function dd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function pd(s,t){return s+Math.random()*(t-s)}function md(s){return s*(.5-Math.random())}function gd(s){s!==void 0&&(pc=s);let t=pc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xd(s){return s*Xs}function _d(s){return s*nr}function vd(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Md(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function yd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sd(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*h,a*l);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const en={DEG2RAD:Xs,RAD2DEG:nr,generateUUID:ii,clamp:jt,euclideanModulo:Ll,mapLinear:ad,inverseLerp:ld,lerp:qs,damp:cd,pingpong:hd,smoothstep:ud,smootherstep:fd,randInt:dd,randFloat:pd,randFloatSpread:md,seededRandom:gd,degToRad:xd,radToDeg:_d,isPowerOfTwo:vd,ceilPowerOfTwo:Md,floorPowerOfTwo:yd,setQuaternionFromProperEuler:Sd,normalize:ue,denormalize:Tn},Yl=class Yl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yl.prototype.isVector2=!0;let Bt=Yl;class ve{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||c!==f||l!==d||h!==p){let g=c*f+l*d+h*p+u*x;g<0&&(f=-f,d=-d,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){const S=Math.acos(g),E=Math.sin(S);m=Math.sin(m*S)/E,a=Math.sin(a*S)/E,c=c*m+f*a,l=l*m+d*a,h=h*m+p*a,u=u*m+x*a}else{c=c*m+f*a,l=l*m+d*a,h=h*m+p*a,u=u*m+x*a;const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+c*d-l*f,t[e+1]=c*p+h*f+l*u-a*d,t[e+2]=l*p+h*d+a*f-c*u,t[e+3]=h*p-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $l=class $l{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Uo.copy(this).projectOnVector(t),this.sub(Uo)}reflect(t){return this.sub(Uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$l.prototype.isVector3=!0;let F=$l;const Uo=new F,mc=new ve,Kl=class Kl{constructor(t,e,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=i[0],g=i[3],m=i[6],S=i[1],E=i[4],v=i[7],y=i[2],b=i[5],C=i[8];return r[0]=o*x+a*S+c*y,r[3]=o*g+a*E+c*b,r[6]=o*m+a*v+c*C,r[1]=l*x+h*S+u*y,r[4]=l*g+h*E+u*b,r[7]=l*m+h*v+u*C,r[2]=f*x+d*S+p*y,r[5]=f*g+d*E+p*b,r[8]=f*m+d*v+p*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(No.makeScale(t,e)),this}rotate(t){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(No.makeRotation(-t)),this}translate(t,e){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(No.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Kl.prototype.isMatrix3=!0;let Xt=Kl;const No=new Xt,gc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wd(){const s={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mi?no:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[eo]:{primaries:t,whitePoint:n,transfer:no,toXYZ:gc,fromXYZ:xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:he,toXYZ:gc,fromXYZ:xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),s}const ie=wd();function si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hi;class bd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hi===void 0&&(Hi=er("canvas")),Hi.width=t.width,Hi.height=t.height;const i=Hi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ed=0;class Pl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Fo(i[o].image)):r.push(Fo(i[o]))}else r=Fo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let Td=0;const zo=new F;class Ge extends Fi{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=ei,i=ei,r=Be,o=Si,a=fn,c=sn,l=Ge.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=ii(),this.name="",this.source=new Pl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zo).x}get height(){return this.source.getSize(zo).y}get depth(){return this.source.getSize(zo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==au)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ia:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ia:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=au;Ge.DEFAULT_ANISOTROPY=1;const Zl=class Zl{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,v=(d+1)/2,y=(m+1)/2,b=(h+f)/4,C=(u+x)/4,_=(p+g)/4;return E>v&&E>y?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=b/n,r=C/n):v>y?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=_/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=C/r,i=_/r),this.set(n,i,r,e),this}let S=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zl.prototype.isVector4=!0;let xe=Zl;class Ad extends Fi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Ge(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Pl(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends Ad{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gu extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rd extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const vo=class vo{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,p,x,g)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,p,x,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),o=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,p=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+p*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=p+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,p=l*h,x=l*u;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,p=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,p=a*h,x=a*u;e[0]=c*h,e[4]=p*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,p=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*c,d=o*l,p=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cd,t,Ld)}lookAt(t,e,n){const i=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ci.crossVectors(n,an),ci.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ci.crossVectors(n,an)),ci.normalize(),hr.crossVectors(an,ci),i[0]=ci.x,i[4]=hr.x,i[8]=an.x,i[1]=ci.y,i[5]=hr.y,i[9]=an.y,i[2]=ci.z,i[6]=hr.z,i[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],S=n[3],E=n[7],v=n[11],y=n[15],b=i[0],C=i[4],_=i[8],M=i[12],T=i[1],L=i[5],D=i[9],B=i[13],H=i[2],G=i[6],J=i[10],W=i[14],tt=i[3],k=i[7],Z=i[11],et=i[15];return r[0]=o*b+a*T+c*H+l*tt,r[4]=o*C+a*L+c*G+l*k,r[8]=o*_+a*D+c*J+l*Z,r[12]=o*M+a*B+c*W+l*et,r[1]=h*b+u*T+f*H+d*tt,r[5]=h*C+u*L+f*G+d*k,r[9]=h*_+u*D+f*J+d*Z,r[13]=h*M+u*B+f*W+d*et,r[2]=p*b+x*T+g*H+m*tt,r[6]=p*C+x*L+g*G+m*k,r[10]=p*_+x*D+g*J+m*Z,r[14]=p*M+x*B+g*W+m*et,r[3]=S*b+E*T+v*H+y*tt,r[7]=S*C+E*L+v*G+y*k,r[11]=S*_+E*D+v*J+y*Z,r[15]=S*M+E*B+v*W+y*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15],S=c*d-l*f,E=a*d-l*u,v=a*f-c*u,y=o*d-l*h,b=o*f-c*h,C=o*u-a*h;return e*(x*S-g*E+m*v)-n*(p*S-g*y+m*b)+i*(p*E-x*y+m*C)-r*(p*v-x*b+g*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+i*(r*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],S=e*a-n*o,E=e*c-i*o,v=e*l-r*o,y=n*c-i*a,b=n*l-r*a,C=i*l-r*c,_=h*x-u*p,M=h*g-f*p,T=h*m-d*p,L=u*g-f*x,D=u*m-d*x,B=f*m-d*g,H=S*B-E*D+v*L+y*T-b*M+C*_;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/H;return t[0]=(a*B-c*D+l*L)*G,t[1]=(i*D-n*B-r*L)*G,t[2]=(x*C-g*b+m*y)*G,t[3]=(f*b-u*C-d*y)*G,t[4]=(c*T-o*B-l*M)*G,t[5]=(e*B-i*T+r*M)*G,t[6]=(g*v-p*C-m*E)*G,t[7]=(h*C-f*v+d*E)*G,t[8]=(o*D-a*T+l*_)*G,t[9]=(n*T-e*D-r*_)*G,t[10]=(p*b-x*v+m*S)*G,t[11]=(u*v-h*b-d*S)*G,t[12]=(a*M-o*L-c*_)*G,t[13]=(e*L-n*M+i*_)*G,t[14]=(x*E-p*y-g*S)*G,t[15]=(h*y-u*E+f*S)*G,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,S=c*l,E=c*h,v=c*u,y=n.x,b=n.y,C=n.z;return i[0]=(1-(x+m))*y,i[1]=(d+v)*y,i[2]=(p-E)*y,i[3]=0,i[4]=(d-v)*b,i[5]=(1-(f+m))*b,i[6]=(g+S)*b,i[7]=0,i[8]=(p+E)*C,i[9]=(g-S)*C,i[10]=(1-(f+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Gi.set(i[0],i[1],i[2]).length();const a=Gi.set(i[4],i[5],i[6]).length(),c=Gi.set(i[8],i[9],i[10]).length();r<0&&(o=-o),wn.copy(this);const l=1/o,h=1/a,u=1/c;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,e.setFromRotationMatrix(wn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,r,o,a=Fn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===Fn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===tr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Fn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===Fn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===tr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};vo.prototype.isMatrix4=!0;let ne=vo;const Gi=new F,wn=new ne,Cd=new F(0,0,0),Ld=new F(1,1,1),ci=new F,hr=new F,an=new F,_c=new ne,vc=new ve;class yn{constructor(t=0,e=0,n=0,i=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _c.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_c,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Il{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pd=0;const Mc=new F,Vi=new ve,Hn=new ne,ur=new F,ys=new F,Id=new F,Dd=new ve,yc=new F(1,0,0),Sc=new F(0,1,0),wc=new F(0,0,1),bc={type:"added"},Ud={type:"removed"},Wi={type:"childadded",child:null},Oo={type:"childremoved",child:null};class De extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new F,e=new yn,n=new ve,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Xt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(yc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(wc,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(ys,ur,this.up):Hn.lookAt(ur,ys,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),Vi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ud),Oo.child=t,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,Id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}De.DEFAULT_UP=new F(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pe extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nd={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nd)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Bo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Ll(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Bo(o,r,t+1/3),this.g=Bo(o,r,t),this.b=Bo(o,r,t-1/3)}return ie.colorSpaceToWorking(this,i),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=xu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ie.workingToColorSpace(qe.copy(this),t),Math.round(jt(qe.r*255,0,255))*65536+Math.round(jt(qe.g*255,0,255))*256+Math.round(jt(qe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(qe.copy(this),e);const n=qe.r,i=qe.g,r=qe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ie){ie.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,i=qe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(fr);const n=qs(hi.h,fr.h,e),i=qs(hi.s,fr.s,e),r=qs(hi.l,fr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new kt;kt.NAMES=xu;class So extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const bn=new F,Gn=new F,Ho=new F,Vn=new F,Xi=new F,qi=new F,Ec=new F,Go=new F,Vo=new F,Wo=new F,Xo=new xe,qo=new xe,Yo=new xe;class gn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bn.subVectors(t,e),i.cross(bn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){bn.subVectors(i,e),Gn.subVectors(n,e),Ho.subVectors(t,e);const o=bn.dot(bn),a=bn.dot(Gn),c=bn.dot(Ho),l=Gn.dot(Gn),h=Gn.dot(Ho),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(a,Vn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Xo.setScalar(0),qo.setScalar(0),Yo.setScalar(0),Xo.fromBufferAttribute(t,e),qo.fromBufferAttribute(t,n),Yo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Xo,r.x),o.addScaledVector(qo,r.y),o.addScaledVector(Yo,r.z),o}static isFrontFacing(t,e,n,i){return bn.subVectors(n,e),Gn.subVectors(t,e),bn.cross(Gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),bn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Xi.subVectors(i,n),qi.subVectors(r,n),Go.subVectors(t,n);const c=Xi.dot(Go),l=qi.dot(Go);if(c<=0&&l<=0)return e.copy(n);Vo.subVectors(t,i);const h=Xi.dot(Vo),u=qi.dot(Vo);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Xi,o);Wo.subVectors(t,r);const d=Xi.dot(Wo),p=qi.dot(Wo);if(p>=0&&d<=p)return e.copy(r);const x=d*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(qi,a);const g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Ec.subVectors(r,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(Ec,a);const m=1/(g+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class zi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),pr.subVectors(this.max,Ss),Yi.subVectors(t.a,Ss),$i.subVectors(t.b,Ss),Ki.subVectors(t.c,Ss),ui.subVectors($i,Yi),fi.subVectors(Ki,$i),Ei.subVectors(Yi,Ki);let e=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Ei.z,Ei.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Ei.z,0,-Ei.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Ei.y,Ei.x,0];return!$o(e,Yi,$i,Ki,pr)||(e=[1,0,0,0,1,0,0,0,1],!$o(e,Yi,$i,Ki,pr))?!1:(mr.crossVectors(ui,fi),e=[mr.x,mr.y,mr.z],$o(e,Yi,$i,Ki,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wn=[new F,new F,new F,new F,new F,new F,new F,new F],En=new F,dr=new zi,Yi=new F,$i=new F,Ki=new F,ui=new F,fi=new F,Ei=new F,Ss=new F,pr=new F,mr=new F,Ti=new F;function $o(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ti.fromArray(s,r);const a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),c=t.dot(Ti),l=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const jn=Fd();function Fd(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function zd(s){Math.abs(s)>65504&&Gt("DataUtils.toHalfFloat(): Value out of range."),s=jt(s,-65504,65504),jn.floatView[0]=s;const t=jn.uint32View[0],e=t>>23&511;return jn.baseTable[e]+((t&8388607)>>jn.shiftTable[e])}function Od(s){const t=s>>10;return jn.uint32View[0]=jn.mantissaTable[jn.offsetTable[t]+(s&1023)]+jn.exponentTable[t],jn.floatView[0]}class kd{static toHalfFloat(t){return zd(t)}static fromHalfFloat(t){return Od(t)}}const Le=new F,gr=new Bt;let Bd=0;class _n extends Fi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pu,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class _u extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vu extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Hd=new zi,ws=new F,Ko=new F;class vs{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);const e=ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ws,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(Ko)),this.expandByPoint(ws.copy(t.center).sub(Ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Gd=0;const pn=new ne,Zo=new De,Zi=new F,ln=new zi,bs=new zi,ze=new F;class Ee extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(id(t)?vu:_u)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Zo.lookAt(t),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(ln.min,bs.min),ln.expandByPoint(ze),ze.addVectors(ln.max,bs.max),ln.expandByPoint(ze)):(ln.expandByPoint(bs.min),ln.expandByPoint(bs.max))}ln.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ze.fromBufferAttribute(a,l),c&&(Zi.fromBufferAttribute(t,l),ze.add(Zi)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new _n(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new F,c[_]=new F;const l=new F,h=new F,u=new F,f=new Bt,d=new Bt,p=new Bt,x=new F,g=new F;function m(_,M,T){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,T),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,T),h.sub(l),u.sub(l),d.sub(f),p.sub(f);const L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(L),a[_].add(x),a[M].add(x),a[T].add(x),c[_].add(g),c[M].add(g),c[T].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,M=S.length;_<M;++_){const T=S[_],L=T.start,D=T.count;for(let B=L,H=L+D;B<H;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const E=new F,v=new F,y=new F,b=new F;function C(_){y.fromBufferAttribute(i,_),b.copy(y);const M=a[_];E.copy(M),E.sub(y.multiplyScalar(y.dot(M))).normalize(),v.crossVectors(b,M);const L=v.dot(c[_])<0?-1:1;o.setXYZW(_,E.x,E.y,E.z,L)}for(let _=0,M=S.length;_<M;++_){const T=S[_],L=T.start,D=T.count;for(let B=L,H=L+D;B<H;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,o=new F,a=new F,c=new F,l=new F,h=new F,u=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new _n(f,h,u)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=pu,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Ke=new F;class so{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){io("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new _n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new so(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){io("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Jo=new F,Wd=new F,Xd=new Xt;class Kn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Jo.subVectors(n,e).cross(Wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Jo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xd.getNormalMatrix(t),i=this.coplanarPoint(Jo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let qd=0;class Oi extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Ws,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jh,this.blendDst=tu,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Mu extends Oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ji;const Es=new F,Qi=new F,ji=new F,ts=new Bt,Ts=new Bt,yu=new ne,xr=new F,As=new F,_r=new F,Tc=new Bt,Qo=new Bt,Ac=new Bt;class Yd extends De{constructor(t=new Mu){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vd(e,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new so(n,3,0,!1)),Ji.setAttribute("uv",new so(n,2,3,!1))}this.geometry=Ji,this.material=t,this.center=new Bt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),yu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-ji.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;vr(xr.set(-.5,-.5,0),ji,o,Qi,i,r),vr(As.set(.5,-.5,0),ji,o,Qi,i,r),vr(_r.set(.5,.5,0),ji,o,Qi,i,r),Tc.set(0,0),Qo.set(1,0),Ac.set(1,1);let a=t.ray.intersectTriangle(xr,As,_r,!1,Es);if(a===null&&(vr(As.set(-.5,.5,0),ji,o,Qi,i,r),Qo.set(0,1),a=t.ray.intersectTriangle(xr,_r,As,!1,Es),a===null))return;const c=t.ray.origin.distanceTo(Es);c<t.near||c>t.far||e.push({distance:c,point:Es.clone(),uv:gn.getInterpolation(Es,xr,As,_r,Tc,Qo,Ac,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function vr(s,t,e,n,i,r){ts.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ts.x=r*ts.x-i*ts.y,Ts.y=i*ts.x+r*ts.y):Ts.copy(ts),s.copy(t),s.x+=Ts.x,s.y+=Ts.y,s.applyMatrix4(yu)}const Xn=new F,jo=new F,Mr=new F,yr=new F;class Dl{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){jo.copy(t).add(e).multiplyScalar(.5),Mr.copy(e).sub(t).normalize(),yr.copy(this.origin).sub(jo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Mr),a=yr.dot(this.direction),c=-yr.dot(Mr),l=yr.lengthSq(),h=Math.abs(1-o*o);let u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(jo).addScaledVector(Mr,f),d}intersectSphere(t,e){if(t.radius<0)return null;Xn.subVectors(t.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=n.x-o.x,S=n.y-o.y,E=n.z-o.z,v=Math.abs(c),y=Math.abs(l),b=Math.abs(h);let C,_,M,T,L,D,B,H,G,J,W,tt;if(v>=y&&v>=b?(M=c,D=u,G=p,tt=m,c>=0?(C=l,_=h,T=f,L=d,B=x,H=g,J=S,W=E):(C=h,_=l,T=d,L=f,B=g,H=x,J=E,W=S)):y>=b?(M=l,D=f,G=x,tt=S,l>=0?(C=h,_=c,T=d,L=u,B=g,H=p,J=E,W=m):(C=c,_=h,T=u,L=d,B=p,H=g,J=m,W=E)):(M=h,D=d,G=g,tt=E,h>=0?(C=c,_=l,T=u,L=f,B=p,H=x,J=m,W=S):(C=l,_=c,T=f,L=u,B=x,H=p,J=S,W=m)),M===0)return null;const k=C/M,Z=_/M,et=1/M,ft=T-k*D,N=L-Z*D,X=B-k*G,O=H-Z*G,z=J-k*tt,R=W-Z*tt,P=z*O-R*X,V=ft*R-N*z,j=X*N-O*ft;if(i){if(P<0||V<0||j<0)return null}else if((P<0||V<0||j<0)&&(P>0||V>0||j>0))return null;const st=P+V+j;if(st===0)return null;const K=et*(P*D+V*G+j*tt);return(st>0?K<0:K>0)?null:this.at(K/st,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zn extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Rc=new ne,Ai=new Dl,Sr=new vs,Cc=new F,wr=new F,br=new F,Er=new F,ta=new F,Tr=new F,Lc=new F,Ar=new F;class Te extends De{constructor(t=new Ee,e=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Tr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ta.fromBufferAttribute(u,t),o?Tr.addScaledVector(ta,h):Tr.addScaledVector(ta.sub(e),h))}e.add(Tr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Sr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Sr,Cc)===null||Ai.origin.distanceToSquared(Cc)>(t.far-t.near)**2))&&(Rc.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Rc),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const g=f[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),E=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=S,y=E;v<y;v+=3){const b=a.getX(v),C=a.getX(v+1),_=a.getX(v+2);i=Rr(this,m,t,n,l,h,u,b,C,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){const S=a.getX(g),E=a.getX(g+1),v=a.getX(g+2);i=Rr(this,o,t,n,l,h,u,S,E,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const g=f[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),E=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=S,y=E;v<y;v+=3){const b=v,C=v+1,_=v+2;i=Rr(this,m,t,n,l,h,u,b,C,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){const S=g,E=g+1,v=g+2;i=Rr(this,o,t,n,l,h,u,S,E,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function $d(s,t,e,n,i,r,o,a){let c;if(t.side===rn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Ii,a),c===null)return null;Ar.copy(a),Ar.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ar);return l<e.near||l>e.far?null:{distance:l,point:Ar.clone(),object:s}}function Rr(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,wr),s.getVertexPosition(c,br),s.getVertexPosition(l,Er);const h=$d(s,t,e,n,wr,br,Er,Lc);if(h){const u=new F;gn.getBarycoord(Lc,wr,br,Er,u),i&&(h.uv=gn.getInterpolatedAttribute(i,a,c,l,u,new Bt)),r&&(h.uv1=gn.getInterpolatedAttribute(r,a,c,l,u,new Bt)),o&&(h.normal=gn.getInterpolatedAttribute(o,a,c,l,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new F,materialIndex:0};gn.getNormal(wr,br,Er,f.normal),h.face=f,h.barycoord=u}return h}class xs extends Ge{constructor(t=null,e=1,n=1,i,r,o,a,c,l=ke,h=ke,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pc extends _n{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const es=new ne,Ic=new ne,Cr=[],Dc=new zi,Kd=new ne,Rs=new Te,Cs=new vs;class Kr extends Te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Kd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),Dc.copy(t.boundingBox).applyMatrix4(es),this.boundingBox.union(Dc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),Cs.copy(t.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),t.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,es),Ic.multiplyMatrices(n,es),Rs.matrixWorld=Ic,Rs.raycast(t,Cr);for(let o=0,a=Cr.length;o<a;o++){const c=Cr[o];c.instanceId=r,c.object=this,e.push(c)}Cr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xs(new Float32Array(i*this.count),i,this.count,yo,An));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ri=new vs,Zd=new Bt(.5,.5),Lr=new F;class Ul{constructor(t=new Kn,e=new Kn,n=new Kn,i=new Kn,r=new Kn,o=new Kn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],S=r[12],E=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-o,d-h,m-p,y-S).normalize(),i[1].setComponents(l+o,d+h,m+p,y+S).normalize(),i[2].setComponents(l+a,d+u,m+x,y+E).normalize(),i[3].setComponents(l-a,d-u,m-x,y-E).normalize(),n)i[4].setComponents(c,f,g,v).normalize(),i[5].setComponents(l-c,d-f,m-g,y-v).normalize();else if(i[4].setComponents(l-c,d-f,m-g,y-v).normalize(),e===Fn)i[5].setComponents(l+c,d+f,m+g,y+v).normalize();else if(e===tr)i[5].setComponents(c,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){Ri.center.set(0,0,0);const e=Zd.distanceTo(t.center);return Ri.radius=.7071067811865476+e,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Lr.x=i.normal.x>0?t.max.x:t.min.x,Lr.y=i.normal.y>0?t.max.y:t.min.y,Lr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Su extends Oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ro=new F,oo=new F,Uc=new ne,Ls=new Dl,Pr=new vs,ea=new F,Nc=new F;class Jd extends De{constructor(t=new Ee,e=new Su){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ro.fromBufferAttribute(e,i-1),oo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ro.distanceTo(oo);t.setAttribute("lineDistance",new qt(n,1))}else Gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Pr.radius+=r,t.ray.intersectsSphere(Pr)===!1)return;Uc.copy(i).invert(),Ls.copy(t.ray).applyMatrix4(Uc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=l){const m=h.getX(x),S=h.getX(x+1),E=Ir(this,t,Ls,c,m,S,x);E&&e.push(E)}if(this.isLineLoop){const x=h.getX(p-1),g=h.getX(d),m=Ir(this,t,Ls,c,x,g,p-1);m&&e.push(m)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=l){const m=Ir(this,t,Ls,c,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){const x=Ir(this,t,Ls,c,p-1,d,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ir(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(ro.fromBufferAttribute(a,i),oo.fromBufferAttribute(a,r),e.distanceSqToSegment(ro,oo,ea,Nc)>n)return;ea.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ea);if(!(l<t.near||l>t.far))return{distance:l,point:Nc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Fc=new F,zc=new F;class Qd extends Jd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Fc.fromBufferAttribute(e,i),zc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fc.distanceTo(zc);t.setAttribute("lineDistance",new qt(n,1))}else Gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wu extends Ge{constructor(t=[],e=Di,n,i,r,o,a,c,l,h){super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wo extends Ge{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ir extends Ge{constructor(t,e,n=kn,i,r,o,a=ke,c=ke,l,h=ri,u=1){if(h!==ri&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class jd extends ir{constructor(t,e=kn,n=Di,i,r,o=ke,a=ke,c,l=ri){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class bu extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vn extends Ee{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function p(x,g,m,S,E,v,y,b,C,_,M){const T=v/C,L=y/_,D=v/2,B=y/2,H=b/2,G=C+1,J=_+1;let W=0,tt=0;const k=new F;for(let Z=0;Z<J;Z++){const et=Z*L-B;for(let ft=0;ft<G;ft++){const N=ft*T-D;k[x]=N*S,k[g]=et*E,k[m]=H,l.push(k.x,k.y,k.z),k[x]=0,k[g]=0,k[m]=b>0?1:-1,h.push(k.x,k.y,k.z),u.push(ft/C),u.push(1-Z/_),W+=1}}for(let Z=0;Z<_;Z++)for(let et=0;et<C;et++){const ft=f+et+G*Z,N=f+et+G*(Z+1),X=f+(et+1)+G*(Z+1),O=f+(et+1)+G*Z;c.push(ft,N,O),c.push(N,X,O),tt+=6}a.addGroup(d,tt,M),d+=tt,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ys extends Ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new F,h=new Bt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ys(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Bn extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){const S=m*f-o;for(let E=0;E<l;E++){const v=E*u-r;p.push(v,-S,0),x.push(0,0,1),g.push(E/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){const E=S+l*m,v=S+l*(m+1),y=S+1+l*(m+1),b=S+1+l*m;d.push(E,v,b),d.push(v,y,b)}this.setIndex(d),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.widthSegments,t.heightSegments)}}function _s(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Oc(i))i.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Oc(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Je(s){const t={};for(let e=0;e<s.length;e++){const n=_s(s[e]);for(const i in n)t[i]=n[i]}return t}function Oc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function tp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Eu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const ep={clone:_s,merge:Je};var np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class sp extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ao extends Oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Ml,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rp extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class op extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const na={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(kc(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!kc(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function kc(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class ap{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const lp=new ap;class Nl{constructor(t){this.manager=t!==void 0?t:lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Nl.DEFAULT_MATERIAL_NAME="__DEFAULT";const ns=new WeakMap;class cp extends Nl{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=na.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=ns.get(o);u===void 0&&(u=[],ns.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=er("img");function c(){h(),e&&e(this);const u=ns.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}ns.delete(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),na.remove(`image:${t}`);const f=ns.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}ns.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),na.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class ul extends Nl{constructor(t){super(t)}load(t,e,n,i){const r=new Ge,o=new cp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Tu extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Au extends Tu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ia=new ne,Bc=new F,Hc=new F;class hp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ul,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bc),Hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ia,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;t.coordinateSystem===tr||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Dr=new F,Ur=new ve,Ln=new F;class Ru extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Dr,Ur,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Ur,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Dr,Ur,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Ur,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const di=new F,Gc=new Bt,Vc=new Bt;class Ye extends Ru{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Vc),e.subVectors(Vc,Gc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class bo extends Ru{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class up extends hp{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cu extends Tu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new up}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const is=-90,ss=1;class fp extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ye(is,ss,t,e);i.layers=this.layers,this.add(i);const r=new Ye(is,ss,t,e);r.layers=this.layers,this.add(r);const o=new Ye(is,ss,t,e);o.layers=this.layers,this.add(o);const a=new Ye(is,ss,t,e);a.layers=this.layers,this.add(a);const c=new Ye(is,ss,t,e);c.layers=this.layers,this.add(c);const l=new Ye(is,ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class dp extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Wc=new ne;class lo{constructor(t,e,n=0,i=1/0){this.ray=new Dl(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wc),this}intersectObject(t,e=!0,n=[]){return fl(t,this,n,e),n.sort(Xc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)fl(t[i],this,n,e);return n.sort(Xc),n}}function Xc(s,t){return s.distance-t.distance}function fl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)fl(r[o],t,e,!0)}}const Jl=class Jl{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Jl.prototype.isMatrix2=!0;let qc=Jl;function Yc(s,t,e,n){const i=pp(n);switch(e){case fu:return s*t;case yo:return s*t/i.components*i.byteLength;case El:return s*t/i.components*i.byteLength;case Ui:return s*t*2/i.components*i.byteLength;case Tl:return s*t*2/i.components*i.byteLength;case du:return s*t*3/i.components*i.byteLength;case fn:return s*t*4/i.components*i.byteLength;case Al:return s*t*4/i.components*i.byteLength;case Xr:case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yr:case $r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Na:case za:return Math.max(s,16)*Math.max(t,8)/4;case Ua:case Fa:return Math.max(s,8)*Math.max(t,8)/2;case Oa:case ka:case Ha:case Ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ba:case jr:case Va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case $a:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ja:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case el:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case nl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case il:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case sl:case rl:case ol:return Math.ceil(s/4)*Math.ceil(t/4)*16;case al:case ll:return Math.ceil(s/4)*Math.ceil(t/4)*8;case to:case cl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pp(s){switch(s){case sn:case lu:return{byteLength:1,components:1};case Qs:case cu:case Mn:return{byteLength:2,components:1};case wl:case bl:return{byteLength:2,components:4};case kn:case Sl:case An:return{byteLength:4,components:1};case hu:case uu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lu(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function mp(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const x=u[d];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xp=`#ifdef USE_ALPHAHASH
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
#endif`,_p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sp=`#ifdef USE_AOMAP
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
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bp=`#ifdef USE_BATCHING
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
#endif`,Ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
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
#endif`,Lp=`#ifdef USE_BUMPMAP
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kp=`#define PI 3.141592653589793
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
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hp=`vec3 transformedNormal = objectNormal;
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
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$p=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
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
}`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
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
#endif`,pm=`uniform sampler2D dfgLUT;
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
}`,mm=`
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_m=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tm=`#if defined( USE_POINTS_UV )
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
#endif`,Am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
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
#endif`,Dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,km=`#ifdef USE_NORMALMAP
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
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e0=`float getShadowMask() {
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
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x0=`uniform sampler2D t2D;
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`#include <common>
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
}`,w0=`#if DEPTH_PACKING == 3200
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
}`,b0=`#define DISTANCE
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
}`,E0=`#define DISTANCE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
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
}`,C0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,P0=`uniform vec3 diffuse;
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
}`,I0=`#define LAMBERT
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
}`,D0=`#define LAMBERT
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
}`,U0=`#define MATCAP
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
}`,N0=`#define MATCAP
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
}`,F0=`#define NORMAL
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
}`,z0=`#define NORMAL
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
}`,O0=`#define PHONG
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
}`,k0=`#define PHONG
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
}`,B0=`#define STANDARD
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
}`,H0=`#define STANDARD
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
}`,G0=`#define TOON
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
}`,V0=`#define TOON
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
}`,W0=`uniform float size;
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,Y0=`uniform vec3 color;
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
}`,$0=`uniform float rotation;
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
}`,K0=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:gp,alphahash_pars_fragment:xp,alphamap_fragment:_p,alphamap_pars_fragment:vp,alphatest_fragment:Mp,alphatest_pars_fragment:yp,aomap_fragment:Sp,aomap_pars_fragment:wp,batching_pars_vertex:bp,batching_vertex:Ep,begin_vertex:Tp,beginnormal_vertex:Ap,bsdfs:Rp,iridescence_fragment:Cp,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Up,color_fragment:Np,color_pars_fragment:Fp,color_pars_vertex:zp,color_vertex:Op,common:kp,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:Hp,displacementmap_pars_vertex:Gp,displacementmap_vertex:Vp,emissivemap_fragment:Wp,emissivemap_pars_fragment:Xp,colorspace_fragment:qp,colorspace_pars_fragment:Yp,envmap_fragment:$p,envmap_common_pars_fragment:Kp,envmap_pars_fragment:Zp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:lm,envmap_vertex:Qp,fog_vertex:jp,fog_pars_vertex:tm,fog_fragment:em,fog_pars_fragment:nm,gradientmap_pars_fragment:im,lightmap_pars_fragment:sm,lights_lambert_fragment:rm,lights_lambert_pars_fragment:om,lights_pars_begin:am,lights_toon_fragment:cm,lights_toon_pars_fragment:hm,lights_phong_fragment:um,lights_phong_pars_fragment:fm,lights_physical_fragment:dm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:xm,lightprobes_pars_fragment:_m,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:ym,logdepthbuf_vertex:Sm,map_fragment:wm,map_pars_fragment:bm,map_particle_fragment:Em,map_particle_pars_fragment:Tm,metalnessmap_fragment:Am,metalnessmap_pars_fragment:Rm,morphinstance_vertex:Cm,morphcolor_vertex:Lm,morphnormal_vertex:Pm,morphtarget_pars_vertex:Im,morphtarget_vertex:Dm,normal_fragment_begin:Um,normal_fragment_maps:Nm,normal_pars_fragment:Fm,normal_pars_vertex:zm,normal_vertex:Om,normalmap_pars_fragment:km,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Vm,opaque_fragment:Wm,packing:Xm,premultiplied_alpha_fragment:qm,project_vertex:Ym,dithering_fragment:$m,dithering_pars_fragment:Km,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:jm,shadowmap_vertex:t0,shadowmask_pars_fragment:e0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:s0,skinnormal_vertex:r0,specularmap_fragment:o0,specularmap_pars_fragment:a0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:h0,transmission_pars_fragment:u0,uv_pars_fragment:f0,uv_pars_vertex:d0,uv_vertex:p0,worldpos_vertex:m0,background_vert:g0,background_frag:x0,backgroundCube_vert:_0,backgroundCube_frag:v0,cube_vert:M0,cube_frag:y0,depth_vert:S0,depth_frag:w0,distance_vert:b0,distance_frag:E0,equirect_vert:T0,equirect_frag:A0,linedashed_vert:R0,linedashed_frag:C0,meshbasic_vert:L0,meshbasic_frag:P0,meshlambert_vert:I0,meshlambert_frag:D0,meshmatcap_vert:U0,meshmatcap_frag:N0,meshnormal_vert:F0,meshnormal_frag:z0,meshphong_vert:O0,meshphong_frag:k0,meshphysical_vert:B0,meshphysical_frag:H0,meshtoon_vert:G0,meshtoon_frag:V0,points_vert:W0,points_frag:X0,shadow_vert:q0,shadow_frag:Y0,sprite_vert:$0,sprite_frag:K0},wt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Un={basic:{uniforms:Je([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Je([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Je([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Je([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Je([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Je([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Je([wt.points,wt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Je([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Je([wt.common,wt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Je([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Je([wt.sprite,wt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Je([wt.common,wt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Je([wt.lights,wt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Un.physical={uniforms:Je([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Nr={r:0,b:0,g:0},Z0=new ne,Pu=new Xt;Pu.set(-1,0,0,0,1,0,0,0,1);function J0(s,t,e,n,i,r){const o=new kt(0);let a=i===!0?0:1,c,l,h=null,u=0,f=null;function d(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const v=S.backgroundBlurriness>0;E=t.get(E,v)}return E}function p(S){let E=!1;const v=d(S);v===null?g(o,a):v&&v.isColor&&(g(v,1),E=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(S,E){const v=d(E);v&&(v.isCubeTexture||v.mapping===Mo)?(l===void 0&&(l=new Te(new vn(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:_s(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Pu),l.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,(h!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Te(new Bn(2,2),new on({name:"BackgroundMaterial",uniforms:_s(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,E){S.getRGB(Nr,Eu(s)),e.buffers.color.setClear(Nr.r,Nr.g,Nr.b,E,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:p,addToRenderList:x,dispose:m}}function Q0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(L,D,B,H,G){let J=!1;const W=u(L,H,B,D);r!==W&&(r=W,l(r.object)),J=d(L,H,B,G),J&&p(L,H,B,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(L,D,B,H),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return s.createVertexArray()}function l(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,D,B,H){const G=H.wireframe===!0;let J=n[D.id];J===void 0&&(J={},n[D.id]=J);const W=L.isInstancedMesh===!0?L.id:0;let tt=J[W];tt===void 0&&(tt={},J[W]=tt);let k=tt[B.id];k===void 0&&(k={},tt[B.id]=k);let Z=k[G];return Z===void 0&&(Z=f(c()),k[G]=Z),Z}function f(L){const D=[],B=[],H=[];for(let G=0;G<e;G++)D[G]=0,B[G]=0,H[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:H,object:L,attributes:{},index:null}}function d(L,D,B,H){const G=r.attributes,J=D.attributes;let W=0;const tt=B.getAttributes();for(const k in tt)if(tt[k].location>=0){const et=G[k];let ft=J[k];if(ft===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor)),et===void 0||et.attribute!==ft||ft&&et.data!==ft.data)return!0;W++}return r.attributesNum!==W||r.index!==H}function p(L,D,B,H){const G={},J=D.attributes;let W=0;const tt=B.getAttributes();for(const k in tt)if(tt[k].location>=0){let et=J[k];et===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));const ft={};ft.attribute=et,et&&et.data&&(ft.data=et.data),G[k]=ft,W++}r.attributes=G,r.attributesNum=W,r.index=H}function x(){const L=r.newAttributes;for(let D=0,B=L.length;D<B;D++)L[D]=0}function g(L){m(L,0)}function m(L,D){const B=r.newAttributes,H=r.enabledAttributes,G=r.attributeDivisors;B[L]=1,H[L]===0&&(s.enableVertexAttribArray(L),H[L]=1),G[L]!==D&&(s.vertexAttribDivisor(L,D),G[L]=D)}function S(){const L=r.newAttributes,D=r.enabledAttributes;for(let B=0,H=D.length;B<H;B++)D[B]!==L[B]&&(s.disableVertexAttribArray(B),D[B]=0)}function E(L,D,B,H,G,J,W){W===!0?s.vertexAttribIPointer(L,D,B,G,J):s.vertexAttribPointer(L,D,B,H,G,J)}function v(L,D,B,H){x();const G=H.attributes,J=B.getAttributes(),W=D.defaultAttributeValues;for(const tt in J){const k=J[tt];if(k.location>=0){let Z=G[tt];if(Z===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){const et=Z.normalized,ft=Z.itemSize,N=t.get(Z);if(N===void 0)continue;const X=N.buffer,O=N.type,z=N.bytesPerElement,R=O===s.INT||O===s.UNSIGNED_INT||Z.gpuType===Sl;if(Z.isInterleavedBufferAttribute){const P=Z.data,V=P.stride,j=Z.offset;if(P.isInstancedInterleavedBuffer){for(let st=0;st<k.locationSize;st++)m(k.location+st,P.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let st=0;st<k.locationSize;st++)g(k.location+st);s.bindBuffer(s.ARRAY_BUFFER,X);for(let st=0;st<k.locationSize;st++)E(k.location+st,ft/k.locationSize,O,et,V*z,(j+ft/k.locationSize*st)*z,R)}else{if(Z.isInstancedBufferAttribute){for(let P=0;P<k.locationSize;P++)m(k.location+P,Z.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let P=0;P<k.locationSize;P++)g(k.location+P);s.bindBuffer(s.ARRAY_BUFFER,X);for(let P=0;P<k.locationSize;P++)E(k.location+P,ft/k.locationSize,O,et,ft*z,ft/k.locationSize*P*z,R)}}else if(W!==void 0){const et=W[tt];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(k.location,et);break;case 3:s.vertexAttrib3fv(k.location,et);break;case 4:s.vertexAttrib4fv(k.location,et);break;default:s.vertexAttrib1fv(k.location,et)}}}}S()}function y(){M();for(const L in n){const D=n[L];for(const B in D){const H=D[B];for(const G in H){const J=H[G];for(const W in J)h(J[W].object),delete J[W];delete H[G]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const D=n[L.id];for(const B in D){const H=D[B];for(const G in H){const J=H[G];for(const W in J)h(J[W].object),delete J[W];delete H[G]}}delete n[L.id]}function C(L){for(const D in n){const B=n[D];for(const H in B){const G=B[H];if(G[L.id]===void 0)continue;const J=G[L.id];for(const W in J)h(J[W].object),delete J[W];delete G[L.id]}}}function _(L){for(const D in n){const B=n[D],H=L.isInstancedMesh===!0?L.id:0,G=B[H];if(G!==void 0){for(const J in G){const W=G[J];for(const tt in W)h(W[tt].object),delete W[tt];delete G[J]}delete B[H],Object.keys(B).length===0&&delete n[D]}}}function M(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:M,resetDefaultState:T,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function j0(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function tg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==fn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const _=C===Mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==sn&&C!==An&&!_&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Gt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:v,maxSamples:y,samples:b}}function eg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Kn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{const S=r?0:n,E=S*4;let v=m.clippingState||null;c.value=v,v=h(p,f,E,d);for(let y=0;y!==E;++y)v[y]=e[y];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=c.value,p!==!0||g===null){const m=d+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,v=d;E!==x;++E,v+=4)o.copy(u[E]).applyMatrix4(S,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}const hs=4,ng=6,ig=20,sg=256,Ps=new bo,$c=new kt;let sa=null,ra=0,oa=0,aa=!1;const rg=new F,Ci=new F;class Kc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=rg}=r;sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sa,ra,oa),this._renderer.xr.enabled=aa,t.scissorTest=!1,rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:Mn,format:fn,colorSpace:eo,depthBuffer:!1},i=Zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=og(r)),this._blurMaterial=lg(r,t,e),this._ggxMaterial=ag(r,t,e)}return i}_compileMaterial(t){const e=new Te(new Ee,t);this._renderer.compile(e,Ps)}_sceneToCubeUV(t,e,n,i,r){const c=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor($c),u.toneMapping=On,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new vn,new zn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let m=!1;const S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,m=!0):(g.color.copy($c),m=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):v===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const y=this._cubeSize;rs(i,v*y,E>2?y:0,y,y),u.setRenderTarget(i),m&&u.render(x,c),u.render(t,c)}u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Di||t.mapping===gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;rs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ps)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=l*1.25,d=u*f,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-hs?n-p+hs:0),m=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=p-e,rs(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(a,Ps),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,rs(t,g,m,3*x,2*x),i.setRenderTarget(t),i.render(a,Ps)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[i];c.material=a;const l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],u=3*h*(i>this._lodMax-hs?i-this._lodMax+hs:0),f=4*(this._cubeSize-h);rs(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(c,Ps)}}function og(s){const t=[],e=[];let n=s;const i=s-hs+1+ng;for(let r=0;r<i;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,d=3,p=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let m=0;m<u;m++){const S=m%3*2/3-1,E=m>2?0:-1,v=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];p.set(v,d*f*m);for(let y=0;y<f;y++){const b=h[y*2]*2-1,C=h[y*2+1]*2-1;m===0?Ci.set(1,C,b):m===1?Ci.set(-b,1,-C):m===2?Ci.set(-b,C,1):m===3?Ci.set(-1,C,-b):m===4?Ci.set(-b,-1,C):Ci.set(b,C,-1),Ci.toArray(x,(m*f+y)*d)}}const g=new Ee;g.setAttribute("position",new _n(p,d)),g.setAttribute("outputDirection",new _n(x,d)),e.push(new Te(g,null)),n>hs&&n--}return{lodMeshes:e,sizeLods:t}}function Zc(s,t,e){const n=new xn(s,t,e);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ag(s,t,e){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Eo(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function lg(s,t,e){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:ig,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Eo(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Jc(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eo(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Qc(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Eo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Iu extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wu(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new vn(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ni});r.uniforms.tEquirect.value=e;const o=new Te(i,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=Be),new fp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}function cg(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Lo||d===Po)if(t.has(f)){const p=t.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const x=new Iu(p.height);return x.fromEquirectangularTexture(s,f),t.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,p=d===Lo||d===Po,x=d===Di||d===gs;if(p||x){let g=e.get(f);const m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Kc(s)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return p&&S&&S.height>0||x&&S&&c(S)?(n===null&&(n=new Kc(s)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Lo?f.mapping=Di:d===Po&&(f.mapping=gs),f}function c(f){let d=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function hg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ps("WebGLRenderer: "+n+" extension not supported."),i}}}function ug(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,p=u.attributes.position;let x=0;if(p===void 0)return;if(d!==null){const S=d.array;x=d.version;for(let E=0,v=S.length;E<v;E+=3){const y=S[E+0],b=S[E+1],C=S[E+2];f.push(y,b,b,C,C,y)}}else{const S=p.array;x=p.version;for(let E=0,v=S.length/3-1;E<v;E+=3){const y=E+0,b=E+1,C=E+2;f.push(y,b,b,C,C,y)}}const g=new(p.count>=65535?vu:_u)(f,1);g.version=x;const m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function fg(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function dg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:se("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function pg(s,t,e){const n=new WeakMap,i=new xe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let T=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var d=T;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let y=a.attributes.position.count*v,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const C=new Float32Array(y*b*4*u),_=new gu(C,y,b,u);_.type=An,_.needsUpdate=!0;const M=v*4;for(let L=0;L<u;L++){const D=m[L],B=S[L],H=E[L],G=y*b*4*L;for(let J=0;J<D.count;J++){const W=J*M;p===!0&&(i.fromBufferAttribute(D,J),C[G+W+0]=i.x,C[G+W+1]=i.y,C[G+W+2]=i.z,C[G+W+3]=0),x===!0&&(i.fromBufferAttribute(B,J),C[G+W+4]=i.x,C[G+W+5]=i.y,C[G+W+6]=i.z,C[G+W+7]=0),g===!0&&(i.fromBufferAttribute(H,J),C[G+W+8]=i.x,C[G+W+9]=i.y,C[G+W+10]=i.z,C[G+W+11]=H.itemSize===4?i.w:1)}}f={count:u,texture:_,size:new Bt(y,b)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function mg(s,t,e,n,i){let r=new WeakMap;function o(l){const h=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const gg={[eu]:"LINEAR_TONE_MAPPING",[nu]:"REINHARD_TONE_MAPPING",[iu]:"CINEON_TONE_MAPPING",[su]:"ACES_FILMIC_TONE_MAPPING",[ou]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[ru]:"CUSTOM_TONE_MAPPING"};function xg(s,t,e,n,i,r){const o=new xn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Ee;l.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new qt([0,2,0,0,2,0],2));const h=new sp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Te(l,h),f=new bo(-1,1,1,-1,0,1);let d=null,p=null,x=!1,g,m=null,S=[],E=!1;this.setSize=function(v,y){o.setSize(v,y),a!==null&&a.setSize(v,y),c!==null&&c.setSize(v,y);for(let b=0;b<S.length;b++){const C=S[b];C.setSize&&C.setSize(v,y)}},this.setEffects=function(v){S=v,E=S.length>0&&S[0].isRenderPass===!0;const y=o.width,b=o.height;S.length>0&&a===null&&(a=new xn(y,b,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),c=new xn(y,b,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){const _=S[C];_.setSize&&_.setSize(y,b)}},this.begin=function(v,y){if(x||v.toneMapping===On&&S.length===0)return!1;if(m=y,y!==null){const b=y.width,C=y.height;(o.width!==b||o.height!==C)&&this.setSize(b,C)}return E===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=On,!0},this.hasRenderPass=function(){return E},this.end=function(v,y){v.toneMapping=g,x=!0;let b=o,C=a;for(let _=0;_<S.length;_++){const M=S[_];M.enabled!==!1&&(M.render(v,C,b,y),M.needsSwap!==!1&&(b=C,C=C===a?c:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},ie.getTransfer(d)===he&&(h.defines.SRGB_TRANSFER="");const _=gg[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(m),v.render(u,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Du=new Ge,dl=new ir(1,1),Uu=new gu,Nu=new Rd,Fu=new wu,jc=[],th=[],eh=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function Ms(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=jc[i];if(r===void 0&&(r=new Float32Array(i),jc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function To(s,t){let e=th[t];e===void 0&&(e=new Int32Array(t),th[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function _g(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function vg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function Mg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function yg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function Sg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;ih.set(n),s.uniformMatrix2fv(this.addr,!1,ih),Ne(e,n)}}function wg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;nh.set(n),s.uniformMatrix3fv(this.addr,!1,nh),Ne(e,n)}}function bg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;eh.set(n),s.uniformMatrix4fv(this.addr,!1,eh),Ne(e,n)}}function Eg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Tg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function Ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function Rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function Cg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function Pg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function Ig(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function Dg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(dl.compareFunction=e.isReversedDepthBuffer()?Cl:Rl,r=dl):r=Du,e.setTexture2D(t||r,i)}function Ug(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Nu,i)}function Ng(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Fu,i)}function Fg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Uu,i)}function zg(s){switch(s){case 5126:return _g;case 35664:return vg;case 35665:return Mg;case 35666:return yg;case 35674:return Sg;case 35675:return wg;case 35676:return bg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Lg;case 36295:return Pg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}function Og(s,t){s.uniform1fv(this.addr,t)}function kg(s,t){const e=Ms(t,this.size,2);s.uniform2fv(this.addr,e)}function Bg(s,t){const e=Ms(t,this.size,3);s.uniform3fv(this.addr,e)}function Hg(s,t){const e=Ms(t,this.size,4);s.uniform4fv(this.addr,e)}function Gg(s,t){const e=Ms(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Vg(s,t){const e=Ms(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Wg(s,t){const e=Ms(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Xg(s,t){s.uniform1iv(this.addr,t)}function qg(s,t){s.uniform2iv(this.addr,t)}function Yg(s,t){s.uniform3iv(this.addr,t)}function $g(s,t){s.uniform4iv(this.addr,t)}function Kg(s,t){s.uniform1uiv(this.addr,t)}function Zg(s,t){s.uniform2uiv(this.addr,t)}function Jg(s,t){s.uniform3uiv(this.addr,t)}function Qg(s,t){s.uniform4uiv(this.addr,t)}function jg(s,t,e){const n=this.cache,i=t.length,r=To(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=dl:o=Du;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function tx(s,t,e){const n=this.cache,i=t.length,r=To(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Nu,r[o])}function ex(s,t,e){const n=this.cache,i=t.length,r=To(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Fu,r[o])}function nx(s,t,e){const n=this.cache,i=t.length,r=To(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Uu,r[o])}function ix(s){switch(s){case 5126:return Og;case 35664:return kg;case 35665:return Bg;case 35666:return Hg;case 35674:return Gg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return $g;case 5125:return Kg;case 36294:return Zg;case 36295:return Jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return nx}}class sx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}}class rx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ix(e.type)}}class ox{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function sh(s,t){s.seq.push(t),s.map[t.id]=t}function ax(s,t,e){const n=s.name,i=n.length;for(la.lastIndex=0;;){const r=la.exec(n),o=la.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){sh(e,l===void 0?new sx(a,s,t):new rx(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new ox(a),sh(e,u)),e=u}}}class Zr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);ax(a,c,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function rh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const lx=37297;let cx=0;function hx(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const oh=new Xt;function ux(s){ie._getMatrix(oh,ie.workingColorSpace,s);const t=`mat3( ${oh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case no:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ah(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+hx(s.getShaderSource(t),a)}else return r}function fx(s,t){const e=ux(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const dx={[eu]:"Linear",[nu]:"Reinhard",[iu]:"Cineon",[su]:"ACESFilmic",[ou]:"AgX",[yl]:"Neutral",[ru]:"Custom"};function px(s,t){const e=dx[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fr=new F;function mx(){ie.getLuminanceCoefficients(Fr);const s=Fr.x.toFixed(4),t=Fr.y.toFixed(4),e=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function xx(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _x(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Vs(s){return s!==""}function lh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ch(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(s){return s.replace(vx,yx)}const Mx=new Map;function yx(s,t){let e=Zt[t];if(e===void 0){const n=Mx.get(t);if(n!==void 0)e=Zt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return pl(e)}const Sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(s){return s.replace(Sx,wx)}function wx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function uh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const bx={[Wr]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function Ex(s){return bx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Tx={[Di]:"ENVMAP_TYPE_CUBE",[gs]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE_UV"};function Ax(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Tx[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Rx={[gs]:"ENVMAP_MODE_REFRACTION"};function Cx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Rx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Lx={[Ml]:"ENVMAP_BLENDING_MULTIPLY",[Xf]:"ENVMAP_BLENDING_MIX",[qf]:"ENVMAP_BLENDING_ADD"};function Px(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Lx[s.combine]||"ENVMAP_BLENDING_NONE"}function Ix(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Dx(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Ex(e),l=Ax(e),h=Cx(e),u=Px(e),f=Ix(e),d=gx(e),p=xx(r),x=i.createProgram();let g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Vs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Vs).join(`
`),m.length>0&&(m+=`
`)):(g=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),m=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Zt.tonemapping_pars_fragment:"",e.toneMapping!==On?px("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,fx("linearToOutputTexel",e.outputColorSpace),mx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),o=pl(o),o=lh(o,e),o=ch(o,e),a=pl(a),a=lh(a,e),a=ch(a,e),o=hh(o),a=hh(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=S+g+o,v=S+m+a,y=rh(i,i.VERTEX_SHADER,E),b=rh(i,i.FRAGMENT_SHADER,v);i.attachShader(x,y),i.attachShader(x,b),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(L){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(x)||"",B=i.getShaderInfoLog(y)||"",H=i.getShaderInfoLog(b)||"",G=D.trim(),J=B.trim(),W=H.trim();let tt=!0,k=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(tt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,y,b);else{const Z=ah(i,y,"vertex"),et=ah(i,b,"fragment");se("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+Z+`
`+et)}else G!==""?Gt("WebGLProgram: Program Info Log:",G):(J===""||W==="")&&(k=!1);k&&(L.diagnostics={runnable:tt,programLog:G,vertexShader:{log:J,prefix:g},fragmentShader:{log:W,prefix:m}})}i.deleteShader(y),i.deleteShader(b),_=new Zr(i,x),M=_x(i,x)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(x,lx)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=b,this}let Ux=0;class Nx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fx(t),e.set(t,n)),n}}class Fx{constructor(t){this.id=Ux++,this.code=t,this.usedTimes=0}}function zx(s){return s===Ui||s===jr||s===to}function Ox(s,t,e,n,i,r){const o=new Il,a=new Nx,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,M,T,L,D,B){const H=L.fog,G=D.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,tt=t.get(_.envMap||J,W),k=tt&&tt.mapping===Mo?tt.image.height:null,Z=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Gt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const et=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ft=et!==void 0?et.length:0;let N=0;G.morphAttributes.position!==void 0&&(N=1),G.morphAttributes.normal!==void 0&&(N=2),G.morphAttributes.color!==void 0&&(N=3);let X,O,z,R;if(Z){const me=Un[Z];X=me.vertexShader,O=me.fragmentShader}else{X=_.vertexShader,O=_.fragmentShader;const me=a.getVertexShaderStage(_),ae=a.getFragmentShaderStage(_);a.update(_,me,ae),z=me.id,R=ae.id}const P=s.getRenderTarget(),V=s.state.buffers.depth.getReversed(),j=D.isInstancedMesh===!0,st=D.isBatchedMesh===!0,K=!!_.map,at=!!_.matcap,dt=!!tt,gt=!!_.aoMap,Ct=!!_.lightMap,Vt=!!_.bumpMap&&_.wireframe===!1,oe=!!_.normalMap,Ae=!!_.displacementMap,Fe=!!_.emissiveMap,Me=!!_.metalnessMap,Re=!!_.roughnessMap,$=_.anisotropy>0,Ve=_.clearcoat>0,ce=_.dispersion>0,U=_.retroreflectivity>0,w=_.iridescence>0,Q=_.sheen>0,rt=_.transmission>0,lt=$&&!!_.anisotropyMap,mt=Ve&&!!_.clearcoatMap,xt=Ve&&!!_.clearcoatNormalMap,ct=Ve&&!!_.clearcoatRoughnessMap,ut=w&&!!_.iridescenceMap,_t=w&&!!_.iridescenceThicknessMap,Ft=Q&&!!_.sheenColorMap,St=Q&&!!_.sheenRoughnessMap,vt=!!_.specularMap,zt=!!_.specularColorMap,Ht=!!_.specularIntensityMap,$t=rt&&!!_.transmissionMap,Y=rt&&!!_.thicknessMap,Mt=!!_.gradientMap,ht=!!_.alphaMap,yt=_.alphaTest>0,Tt=!!_.alphaHash,pt=!!_.extensions;let Ot=On;_.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const Ut={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:O,defines:_.defines,customVertexShaderID:z,customFragmentShaderID:R,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:st,batchingColor:st&&D._colorsTexture!==null,instancing:j,instancingColor:j&&D.instanceColor!==null,instancingMorph:j&&D.morphTexture!==null,outputColorSpace:P===null?s.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:K,matcap:at,envMap:dt,envMapMode:dt&&tt.mapping,envMapCubeUVHeight:k,aoMap:gt,lightMap:Ct,bumpMap:Vt,normalMap:oe,displacementMap:Ae,emissiveMap:Fe,normalMapObjectSpace:oe&&_.normalMapType===Kf,normalMapTangentSpace:oe&&_.normalMapType===hl,packedNormalMap:oe&&_.normalMapType===hl&&zx(_.normalMap.format),metalnessMap:Me,roughnessMap:Re,anisotropy:$,anisotropyMap:lt,clearcoat:Ve,clearcoatMap:mt,clearcoatNormalMap:xt,clearcoatRoughnessMap:ct,dispersion:ce,retroreflection:U,iridescence:w,iridescenceMap:ut,iridescenceThicknessMap:_t,sheen:Q,sheenColorMap:Ft,sheenRoughnessMap:St,specularMap:vt,specularColorMap:zt,specularIntensityMap:Ht,transmission:rt,transmissionMap:$t,thicknessMap:Y,gradientMap:Mt,opaque:_.transparent===!1&&_.blending===Ws&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:yt,alphaHash:Tt,combine:_.combine,mapUv:K&&p(_.map.channel),aoMapUv:gt&&p(_.aoMap.channel),lightMapUv:Ct&&p(_.lightMap.channel),bumpMapUv:Vt&&p(_.bumpMap.channel),normalMapUv:oe&&p(_.normalMap.channel),displacementMapUv:Ae&&p(_.displacementMap.channel),emissiveMapUv:Fe&&p(_.emissiveMap.channel),metalnessMapUv:Me&&p(_.metalnessMap.channel),roughnessMapUv:Re&&p(_.roughnessMap.channel),anisotropyMapUv:lt&&p(_.anisotropyMap.channel),clearcoatMapUv:mt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:xt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:St&&p(_.sheenRoughnessMap.channel),specularMapUv:vt&&p(_.specularMap.channel),specularColorMapUv:zt&&p(_.specularColorMap.channel),specularIntensityMapUv:Ht&&p(_.specularIntensityMap.channel),transmissionMapUv:$t&&p(_.transmissionMap.channel),thicknessMapUv:Y&&p(_.thicknessMap.channel),alphaMapUv:ht&&p(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(oe||$),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(K||ht),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&oe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:V,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:N,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:K&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===he,decodeVideoTextureEmissive:Fe&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===he,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Qn,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&_.extensions.multiDraw===!0||st)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function g(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const T in _.defines)M.push(T),M.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(m(M,_),S(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function S(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function E(_){const M=d[_.type];let T;if(M){const L=Un[M];T=ep.clone(L.uniforms)}else T=_.uniforms;return T}function v(_,M){let T=h.get(M);return T!==void 0?++T.usedTimes:(T=new Dx(s,M,_,i),l.push(T),h.set(M,T)),T}function y(_){if(--_.usedTimes===0){const M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:v,releaseProgram:y,releaseShaderCache:b,programs:l,dispose:C}}function kx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Bx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function fh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function dh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,g,m){let S=s[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},s[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=p,S.materialVariant=o(f),S.groupOrder=x,S.renderOrder=f.renderOrder,S.z=g,S.group=m),t++,S}function c(f,d,p,x,g,m,S){S.reversedDepth===!0&&(g=-g);const E=a(f,d,p,x,g,m);p.transmission>0?n.push(E):p.transparent===!0?i.push(E):e.push(E)}function l(f,d,p,x,g,m){const S=a(f,d,p,x,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):e.unshift(S)}function h(f,d){e.length>1&&e.sort(f||Bx),n.length>1&&n.sort(d||fh),i.length>1&&i.sort(d||fh)}function u(){for(let f=t,d=s.length;f<d;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:h}}function Hx(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new dh,s.set(n,[o])):i>=r.length?(o=new dh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Gx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new kt};break;case"SpotLight":e={position:new F,direction:new F,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function Vx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Wx=0;function Xx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function qx(s){const t=new Gx,e=Vx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const i=new F,r=new ne,o=new ne;function a(l){let h=0,u=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,S=0,E=0,v=0,y=0,b=0,C=0,_=0,M=0,T=0;l.sort(Xx);for(let D=0,B=l.length;D<B;D++){const H=l[D],G=H.color,J=H.intensity,W=H.distance;let tt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ui?tt=H.shadow.map.texture:tt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)h+=G.r*J,u+=G.g*J,f+=G.b*J;else if(H.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(H.sh.coefficients[k],J);T++}else if(H.isSunLight){const k=t.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,et=e.get(H);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[p]=et,n.sunShadowMap[p]=tt;const ft=Z.getViewportCount();for(let N=0;N<ft;N++)n.sunShadowMatrix[x+N]=Z.getMatrix(N),n.sunShadowCascade[x+N]=Z._cascadeData[N];x+=ft,p++}n.sun[d]=k,d++}else if(H.isDirectionalLight){const k=t.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,et=e.get(H);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,n.directionalShadow[g]=et,n.directionalShadowMap[g]=tt,n.directionalShadowMatrix[g]=H.shadow.matrix,y++}n.directional[g]=k,g++}else if(H.isSpotLight){const k=t.get(H);k.position.setFromMatrixPosition(H.matrixWorld),k.color.copy(G).multiplyScalar(J),k.distance=W,k.coneCos=Math.cos(H.angle),k.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),k.decay=H.decay,n.spot[S]=k;const Z=H.shadow;if(H.map&&(n.spotLightMap[_]=H.map,_++,Z.updateMatrices(H),H.castShadow&&M++),n.spotLightMatrix[S]=Z.matrix,H.castShadow){const et=e.get(H);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,n.spotShadow[S]=et,n.spotShadowMap[S]=tt,C++}S++}else if(H.isRectAreaLight){const k=t.get(H);k.color.copy(G).multiplyScalar(J),k.halfWidth.set(H.width*.5,0,0),k.halfHeight.set(0,H.height*.5,0),n.rectArea[E]=k,E++}else if(H.isPointLight){const k=t.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),k.distance=H.distance,k.decay=H.decay,H.castShadow){const Z=H.shadow,et=e.get(H);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,et.shadowCameraNear=Z.camera.near,et.shadowCameraFar=Z.camera.far,n.pointShadow[m]=et,n.pointShadowMap[m]=tt,n.pointShadowMatrix[m]=H.shadow.matrix,b++}n.point[m]=k,m++}else if(H.isHemisphereLight){const k=t.get(H);k.skyColor.copy(H.color).multiplyScalar(J),k.groundColor.copy(H.groundColor).multiplyScalar(J),n.hemi[v]=k,v++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==S||L.rectAreaLength!==E||L.hemiLength!==v||L.numSunShadows!==p||L.numDirectionalShadows!==y||L.numPointShadows!==b||L.numSpotShadows!==C||L.numSpotMaps!==_||L.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=g,n.spot.length=S,n.rectArea.length=E,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-M,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,L.sunLength=d,L.directionalLength=g,L.pointLength=m,L.spotLength=S,L.rectAreaLength=E,L.hemiLength=v,L.numSunShadows=p,L.numDirectionalShadows=y,L.numPointShadows=b,L.numSpotShadows=C,L.numSpotMaps=_,L.numLightProbes=T,n.version=Wx++)}function c(l,h){let u=0,f=0,d=0,p=0,x=0,g=0;const m=h.matrixWorldInverse;for(let S=0,E=l.length;S<E;S++){const v=l[S];if(v.isSunLight){const y=n.sun[u];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),u++}else if(v.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(v.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function ph(s){const t=new qx(s),e=[],n=[],i=[];function r(f){u.camera=f,e.length=0,n.length=0,i.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function c(f){i.push(f)}function l(){t.setup(e)}function h(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Yx(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new ph(s),t.set(i,[a])):r>=o.length?(a=new ph(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const $x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kx=`uniform sampler2D shadow_pass;
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
}`,Zx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Jx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],mh=new ne,Is=new F,ca=new F;function Qx(s,t,e){let n=new Ul;const i=new Bt,r=new Bt,o=new xe,a=new rp,c=new op,l={},h=e.maxTextureSize,u={[Ii]:rn,[rn]:Ii,[Qn]:Qn},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:$x,fragmentShader:Kx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Ee;p.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Te(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wr;let m=this.type;this.render=function(b,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Tf&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wr);const M=s.getRenderTarget(),T=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),D=s.state;D.setBlending(ni),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=m!==this.type;B&&C.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(G=>G.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,G=b.length;H<G;H++){const J=b[H],W=J.shadow;if(W===void 0){Gt("WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const tt=W.getFrameExtents();i.multiply(tt),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,W.mapSize.y=r.y));const k=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=k,W.map===null||B===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Gs){if(J.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new xn(i.x,i.y,{format:Ui,type:Mn,minFilter:Be,magFilter:Be,generateMipmaps:!1}),W.map.texture.name=J.name+".shadowMap",W.map.depthTexture=new ir(i.x,i.y,An),W.map.depthTexture.name=J.name+".shadowMapDepth",W.map.depthTexture.format=ri,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ke,W.map.depthTexture.magFilter=ke}else J.isPointLight?(W.map=new Iu(i.x),W.map.depthTexture=new jd(i.x,kn)):(W.map=new xn(i.x,i.y),W.map.depthTexture=new ir(i.x,i.y,kn)),W.map.depthTexture.name=J.name+".shadowMap",W.map.depthTexture.format=ri,this.type===Wr?(W.map.depthTexture.compareFunction=k?Cl:Rl,W.map.depthTexture.minFilter=Be,W.map.depthTexture.magFilter=Be):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ke,W.map.depthTexture.magFilter=ke);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const Z=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();J.isPointLight!==!0&&W.updateMatrices(J,_);for(let et=0;et<Z;et++){const ft=W.getCamera(et);if(J.isPointLight){const N=W.camera,X=W.matrix,O=J.distance||N.far;O!==N.far&&(N.far=O,N.updateProjectionMatrix()),Is.setFromMatrixPosition(J.matrixWorld),N.position.copy(Is),ca.copy(N.position),ca.add(Zx[et]),N.up.copy(Jx[et]),N.lookAt(ca),N.updateMatrixWorld(),X.makeTranslation(-Is.x,-Is.y,-Is.z),mh.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W._frustum.setFromProjectionMatrix(mh,N.coordinateSystem,N.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,et),s.clear();else{et===0&&(s.setRenderTarget(W.map),s.clear());const N=W.getViewport(et);o.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),D.viewport(o)}n=W.getFrustum(et),v(C,_,ft,J,this.type)}W.isPointLightShadow!==!0&&this.type===Gs&&S(W,_),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(M,T,L)};function S(b,C){const _=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new xn(i.x,i.y,{format:Ui,type:Mn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(C,null,_,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(C,null,_,d,x,null)}function E(b,C,_,M){let T=null;const L=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)T=L;else if(T=_.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=T.uuid,B=C.uuid;let H=l[D];H===void 0&&(H={},l[D]=H);let G=H[B];G===void 0&&(G=T.clone(),H[B]=G,C.addEventListener("dispose",y)),T=G}if(T.visible=C.visible,T.wireframe=C.wireframe,M===Gs?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:u[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,_.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const D=s.properties.get(T);D.light=_}return T}function v(b,C,_,M,T){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===Gs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const B=t.update(b),H=b.material;if(Array.isArray(H)){const G=B.groups;for(let J=0,W=G.length;J<W;J++){const tt=G[J],k=H[tt.materialIndex];if(k&&k.visible){const Z=E(b,k,M,T);b.onBeforeShadow(s,b,C,_,B,Z,tt),s.renderBufferDirect(_,null,B,Z,b,tt),b.onAfterShadow(s,b,C,_,B,Z,tt)}}}else if(H.visible){const G=E(b,H,M,T);b.onBeforeShadow(s,b,C,_,B,G,null),s.renderBufferDirect(_,null,B,G,b,null),b.onAfterShadow(s,b,C,_,B,G,null)}}const D=b.children;for(let B=0,H=D.length;B<H;B++)v(D[B],C,_,M,T)}function y(b){b.target.removeEventListener("dispose",y);for(const _ in l){const M=l[_],T=b.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function jx(s,t){function e(){let Y=!1;const Mt=new xe;let ht=null;const yt=new xe(0,0,0,0);return{setMask:function(Tt){ht!==Tt&&!Y&&(s.colorMask(Tt,Tt,Tt,Tt),ht=Tt)},setLocked:function(Tt){Y=Tt},setClear:function(Tt,pt,Ot,Ut,me){me===!0&&(Tt*=Ut,pt*=Ut,Ot*=Ut),Mt.set(Tt,pt,Ot,Ut),yt.equals(Mt)===!1&&(s.clearColor(Tt,pt,Ot,Ut),yt.copy(Mt))},reset:function(){Y=!1,ht=null,yt.set(-1,0,0,0)}}}function n(){let Y=!1,Mt=!1,ht=null,yt=null,Tt=null;return{setReversed:function(pt){if(Mt!==pt){const Ot=t.get("EXT_clip_control");pt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),Mt=pt;const Ut=Tt;Tt=null,this.setClear(Ut)}},getReversed:function(){return Mt},setTest:function(pt){pt?P(s.DEPTH_TEST):V(s.DEPTH_TEST)},setMask:function(pt){ht!==pt&&!Y&&(s.depthMask(pt),ht=pt)},setFunc:function(pt){if(Mt&&(pt=od[pt]),yt!==pt){switch(pt){case Ea:s.depthFunc(s.NEVER);break;case Ta:s.depthFunc(s.ALWAYS);break;case Aa:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case Ra:s.depthFunc(s.EQUAL);break;case Ca:s.depthFunc(s.GEQUAL);break;case La:s.depthFunc(s.GREATER);break;case Pa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=pt}},setLocked:function(pt){Y=pt},setClear:function(pt){Tt!==pt&&(Tt=pt,Mt&&(pt=1-pt),s.clearDepth(pt))},reset:function(){Y=!1,ht=null,yt=null,Tt=null,Mt=!1}}}function i(){let Y=!1,Mt=null,ht=null,yt=null,Tt=null,pt=null,Ot=null,Ut=null,me=null;return{setTest:function(ae){Y||(ae?P(s.STENCIL_TEST):V(s.STENCIL_TEST))},setMask:function(ae){Mt!==ae&&!Y&&(s.stencilMask(ae),Mt=ae)},setFunc:function(ae,Sn,Rn){(ht!==ae||yt!==Sn||Tt!==Rn)&&(s.stencilFunc(ae,Sn,Rn),ht=ae,yt=Sn,Tt=Rn)},setOp:function(ae,Sn,Rn){(pt!==ae||Ot!==Sn||Ut!==Rn)&&(s.stencilOp(ae,Sn,Rn),pt=ae,Ot=Sn,Ut=Rn)},setLocked:function(ae){Y=ae},setClear:function(ae){me!==ae&&(s.clearStencil(ae),me=ae)},reset:function(){Y=!1,Mt=null,ht=null,yt=null,Tt=null,pt=null,Ot=null,Ut=null,me=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,S=null,E=null,v=null,y=null,b=null,C=null,_=new kt(0,0,0),M=0,T=!1,L=null,D=null,B=null,H=null,G=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,tt=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=tt>=1):k.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=tt>=2);let Z=null,et={};const ft=s.getParameter(s.SCISSOR_BOX),N=s.getParameter(s.VIEWPORT),X=new xe().fromArray(ft),O=new xe().fromArray(N);function z(Y,Mt,ht,yt){const Tt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(Y,pt),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<ht;Ot++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Mt,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(Mt+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return pt}const R={};R[s.TEXTURE_2D]=z(s.TEXTURE_2D,s.TEXTURE_2D,1),R[s.TEXTURE_CUBE_MAP]=z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[s.TEXTURE_2D_ARRAY]=z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),R[s.TEXTURE_3D]=z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(s.DEPTH_TEST),o.setFunc(Js),Vt(!1),oe(lc),P(s.CULL_FACE),gt(ni);function P(Y){h[Y]!==!0&&(s.enable(Y),h[Y]=!0)}function V(Y){h[Y]!==!1&&(s.disable(Y),h[Y]=!1)}function j(Y,Mt){return f[Y]!==Mt?(s.bindFramebuffer(Y,Mt),f[Y]=Mt,Y===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Mt),Y===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Mt),!0):!1}function st(Y,Mt){let ht=p,yt=!1;if(Y){ht=d.get(Mt),ht===void 0&&(ht=[],d.set(Mt,ht));const Tt=Y.textures;if(ht.length!==Tt.length||ht[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,Ot=Tt.length;pt<Ot;pt++)ht[pt]=s.COLOR_ATTACHMENT0+pt;ht.length=Tt.length,yt=!0}}else ht[0]!==s.BACK&&(ht[0]=s.BACK,yt=!0);yt&&s.drawBuffers(ht)}function K(Y){return x!==Y?(s.useProgram(Y),x=Y,!0):!1}const at={[ls]:s.FUNC_ADD,[Rf]:s.FUNC_SUBTRACT,[Cf]:s.FUNC_REVERSE_SUBTRACT};at[Lf]=s.MIN,at[Pf]=s.MAX;const dt={[If]:s.ZERO,[Df]:s.ONE,[Uf]:s.SRC_COLOR,[jh]:s.SRC_ALPHA,[Bf]:s.SRC_ALPHA_SATURATE,[Of]:s.DST_COLOR,[Ff]:s.DST_ALPHA,[Nf]:s.ONE_MINUS_SRC_COLOR,[tu]:s.ONE_MINUS_SRC_ALPHA,[kf]:s.ONE_MINUS_DST_COLOR,[zf]:s.ONE_MINUS_DST_ALPHA,[Hf]:s.CONSTANT_COLOR,[Gf]:s.ONE_MINUS_CONSTANT_COLOR,[Vf]:s.CONSTANT_ALPHA,[Wf]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(Y,Mt,ht,yt,Tt,pt,Ot,Ut,me,ae){if(Y===ni){g===!0&&(V(s.BLEND),g=!1);return}if(g===!1&&(P(s.BLEND),g=!0),Y!==Af){if(Y!==m||ae!==T){if((S!==ls||y!==ls)&&(s.blendEquation(s.FUNC_ADD),S=ls,y=ls),ae)switch(Y){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cc:s.blendFunc(s.ONE,s.ONE);break;case hc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:se("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case hc:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uc:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",Y);break}E=null,v=null,b=null,C=null,_.set(0,0,0),M=0,m=Y,T=ae}return}Tt=Tt||Mt,pt=pt||ht,Ot=Ot||yt,(Mt!==S||Tt!==y)&&(s.blendEquationSeparate(at[Mt],at[Tt]),S=Mt,y=Tt),(ht!==E||yt!==v||pt!==b||Ot!==C)&&(s.blendFuncSeparate(dt[ht],dt[yt],dt[pt],dt[Ot]),E=ht,v=yt,b=pt,C=Ot),(Ut.equals(_)===!1||me!==M)&&(s.blendColor(Ut.r,Ut.g,Ut.b,me),_.copy(Ut),M=me),m=Y,T=!1}function Ct(Y,Mt){Y.side===Qn?V(s.CULL_FACE):P(s.CULL_FACE);let ht=Y.side===rn;Mt&&(ht=!ht),Vt(ht),Y.blending===Ws&&Y.transparent===!1?gt(ni):gt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const yt=Y.stencilWrite;a.setTest(yt),yt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Fe(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?P(s.SAMPLE_ALPHA_TO_COVERAGE):V(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(Y){L!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),L=Y)}function oe(Y){Y!==bf?(P(s.CULL_FACE),Y!==D&&(Y===lc?s.cullFace(s.BACK):Y===Ef?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):V(s.CULL_FACE),D=Y}function Ae(Y){Y!==B&&(W&&s.lineWidth(Y),B=Y)}function Fe(Y,Mt,ht){Y?(P(s.POLYGON_OFFSET_FILL),(H!==Mt||G!==ht)&&(H=Mt,G=ht,o.getReversed()&&(Mt=-Mt),s.polygonOffset(Mt,ht))):V(s.POLYGON_OFFSET_FILL)}function Me(Y){Y?P(s.SCISSOR_TEST):V(s.SCISSOR_TEST)}function Re(Y){Y===void 0&&(Y=s.TEXTURE0+J-1),Z!==Y&&(s.activeTexture(Y),Z=Y)}function $(Y,Mt,ht){ht===void 0&&(Z===null?ht=s.TEXTURE0+J-1:ht=Z);let yt=et[ht];yt===void 0&&(yt={type:void 0,texture:void 0},et[ht]=yt),(yt.type!==Y||yt.texture!==Mt)&&(Z!==ht&&(s.activeTexture(ht),Z=ht),s.bindTexture(Y,Mt||R[Y]),yt.type=Y,yt.texture=Mt)}function Ve(){const Y=et[Z];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ce(){try{s.compressedTexImage2D(...arguments)}catch(Y){se("WebGLState:",Y)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(Y){se("WebGLState:",Y)}}function w(){try{s.texSubImage2D(...arguments)}catch(Y){se("WebGLState:",Y)}}function Q(){try{s.texSubImage3D(...arguments)}catch(Y){se("WebGLState:",Y)}}function rt(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){se("WebGLState:",Y)}}function lt(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){se("WebGLState:",Y)}}function mt(){try{s.texStorage2D(...arguments)}catch(Y){se("WebGLState:",Y)}}function xt(){try{s.texStorage3D(...arguments)}catch(Y){se("WebGLState:",Y)}}function ct(){try{s.texImage2D(...arguments)}catch(Y){se("WebGLState:",Y)}}function ut(){try{s.texImage3D(...arguments)}catch(Y){se("WebGLState:",Y)}}function _t(Y){return u[Y]!==void 0?u[Y]:s.getParameter(Y)}function Ft(Y,Mt){u[Y]!==Mt&&(s.pixelStorei(Y,Mt),u[Y]=Mt)}function St(Y){X.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),X.copy(Y))}function vt(Y){O.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),O.copy(Y))}function zt(Y,Mt){let ht=l.get(Mt);ht===void 0&&(ht=new WeakMap,l.set(Mt,ht));let yt=ht.get(Y);yt===void 0&&(yt=s.getUniformBlockIndex(Mt,Y.name),ht.set(Y,yt))}function Ht(Y,Mt){const yt=l.get(Mt).get(Y);c.get(Mt)!==yt&&(s.uniformBlockBinding(Mt,yt,Y.__bindingPointIndex),c.set(Mt,yt))}function $t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,et={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,S=null,E=null,v=null,y=null,b=null,C=null,_=new kt(0,0,0),M=0,T=!1,L=null,D=null,B=null,H=null,G=null,X.set(0,0,s.canvas.width,s.canvas.height),O.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:P,disable:V,bindFramebuffer:j,drawBuffers:st,useProgram:K,setBlending:gt,setMaterial:Ct,setFlipSided:Vt,setCullFace:oe,setLineWidth:Ae,setPolygonOffset:Fe,setScissorTest:Me,activeTexture:Re,bindTexture:$,unbindTexture:Ve,compressedTexImage2D:ce,compressedTexImage3D:U,texImage2D:ct,texImage3D:ut,pixelStorei:Ft,getParameter:_t,updateUBOMapping:zt,uniformBlockBinding:Ht,texStorage2D:mt,texStorage3D:xt,texSubImage2D:w,texSubImage3D:Q,compressedTexSubImage2D:rt,compressedTexSubImage3D:lt,scissor:St,viewport:vt,reset:$t}}function t_(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Bt,h=new WeakMap,u=new Set;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(U,w){return p?new OffscreenCanvas(U,w):er("canvas")}function g(U,w,Q){let rt=1;const lt=ce(U);if((lt.width>Q||lt.height>Q)&&(rt=Q/Math.max(lt.width,lt.height)),rt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const mt=Math.floor(rt*lt.width),xt=Math.floor(rt*lt.height);f===void 0&&(f=x(mt,xt));const ct=w?x(mt,xt):f;return ct.width=mt,ct.height=xt,ct.getContext("2d").drawImage(U,0,0,mt,xt),Gt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+mt+"x"+xt+")."),ct}else return"data"in U&&Gt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),U;return U}function m(U){return U.generateMipmaps}function S(U){s.generateMipmap(U)}function E(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(U,w,Q,rt,lt,mt=!1){if(U!==null){if(s[U]!==void 0)return s[U];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let xt;rt&&(xt=t.get("EXT_texture_norm16"),xt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=w;if(w===s.RED&&(Q===s.FLOAT&&(ct=s.R32F),Q===s.HALF_FLOAT&&(ct=s.R16F),Q===s.UNSIGNED_BYTE&&(ct=s.R8),Q===s.UNSIGNED_SHORT&&xt&&(ct=xt.R16_EXT),Q===s.SHORT&&xt&&(ct=xt.R16_SNORM_EXT)),w===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ct=s.R8UI),Q===s.UNSIGNED_SHORT&&(ct=s.R16UI),Q===s.UNSIGNED_INT&&(ct=s.R32UI),Q===s.BYTE&&(ct=s.R8I),Q===s.SHORT&&(ct=s.R16I),Q===s.INT&&(ct=s.R32I)),w===s.RG&&(Q===s.FLOAT&&(ct=s.RG32F),Q===s.HALF_FLOAT&&(ct=s.RG16F),Q===s.UNSIGNED_BYTE&&(ct=s.RG8),Q===s.UNSIGNED_SHORT&&xt&&(ct=xt.RG16_EXT),Q===s.SHORT&&xt&&(ct=xt.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ct=s.RG8UI),Q===s.UNSIGNED_SHORT&&(ct=s.RG16UI),Q===s.UNSIGNED_INT&&(ct=s.RG32UI),Q===s.BYTE&&(ct=s.RG8I),Q===s.SHORT&&(ct=s.RG16I),Q===s.INT&&(ct=s.RG32I)),w===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ct=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(ct=s.RGB16UI),Q===s.UNSIGNED_INT&&(ct=s.RGB32UI),Q===s.BYTE&&(ct=s.RGB8I),Q===s.SHORT&&(ct=s.RGB16I),Q===s.INT&&(ct=s.RGB32I)),w===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ct=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(ct=s.RGBA16UI),Q===s.UNSIGNED_INT&&(ct=s.RGBA32UI),Q===s.BYTE&&(ct=s.RGBA8I),Q===s.SHORT&&(ct=s.RGBA16I),Q===s.INT&&(ct=s.RGBA32I)),w===s.RGB&&(Q===s.UNSIGNED_SHORT&&xt&&(ct=xt.RGB16_EXT),Q===s.SHORT&&xt&&(ct=xt.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(ct=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ct=s.R11F_G11F_B10F)),w===s.RGBA){const ut=mt?no:ie.getTransfer(lt);Q===s.FLOAT&&(ct=s.RGBA32F),Q===s.HALF_FLOAT&&(ct=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(ct=ut===he?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&xt&&(ct=xt.RGBA16_EXT),Q===s.SHORT&&xt&&(ct=xt.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function y(U,w){let Q;return U?w===null||w===kn||w===js?Q=s.DEPTH24_STENCIL8:w===An?Q=s.DEPTH32F_STENCIL8:w===Qs&&(Q=s.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===kn||w===js?Q=s.DEPTH_COMPONENT24:w===An?Q=s.DEPTH_COMPONENT32F:w===Qs&&(Q=s.DEPTH_COMPONENT16),Q}function b(U,w){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==ke&&U.minFilter!==Be?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function C(U){const w=U.target;w.removeEventListener("dispose",C),M(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function _(U){const w=U.target;w.removeEventListener("dispose",_),L(w)}function M(U){const w=n.get(U);if(w.__webglInit===void 0)return;const Q=U.source,rt=d.get(Q);if(rt){const lt=rt[w.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&T(U),Object.keys(rt).length===0&&d.delete(Q)}n.remove(U)}function T(U){const w=n.get(U);s.deleteTexture(w.__webglTexture);const Q=U.source,rt=d.get(Q);delete rt[w.__cacheKey],o.memory.textures--}function L(U){const w=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(w.__webglFramebuffer[rt]))for(let lt=0;lt<w.__webglFramebuffer[rt].length;lt++)s.deleteFramebuffer(w.__webglFramebuffer[rt][lt]);else s.deleteFramebuffer(w.__webglFramebuffer[rt]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[rt])}else{if(Array.isArray(w.__webglFramebuffer))for(let rt=0;rt<w.__webglFramebuffer.length;rt++)s.deleteFramebuffer(w.__webglFramebuffer[rt]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let rt=0;rt<w.__webglColorRenderbuffer.length;rt++)w.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[rt]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=U.textures;for(let rt=0,lt=Q.length;rt<lt;rt++){const mt=n.get(Q[rt]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(Q[rt])}n.remove(U)}let D=0;function B(){D=0}function H(){return D}function G(U){D=U}function J(){const U=D;return U>=i.maxTextures&&Gt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,U}function W(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function tt(U,w){const Q=n.get(U);if(U.isVideoTexture&&$(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const rt=U.image;if(rt===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{V(Q,U,w);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+w)}function k(U,w){const Q=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){V(Q,U,w);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+w)}function Z(U,w){const Q=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){V(Q,U,w);return}e.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+w)}function et(U,w){const Q=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Q.__version!==U.version){j(Q,U,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+w)}const ft={[Ia]:s.REPEAT,[ei]:s.CLAMP_TO_EDGE,[Da]:s.MIRRORED_REPEAT},N={[ke]:s.NEAREST,[Yf]:s.NEAREST_MIPMAP_NEAREST,[cr]:s.NEAREST_MIPMAP_LINEAR,[Be]:s.LINEAR,[Io]:s.LINEAR_MIPMAP_NEAREST,[Si]:s.LINEAR_MIPMAP_LINEAR},X={[Jf]:s.NEVER,[nd]:s.ALWAYS,[Qf]:s.LESS,[Rl]:s.LEQUAL,[jf]:s.EQUAL,[Cl]:s.GEQUAL,[td]:s.GREATER,[ed]:s.NOTEQUAL};function O(U,w){if(w.type===An&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Be||w.magFilter===Io||w.magFilter===cr||w.magFilter===Si||w.minFilter===Be||w.minFilter===Io||w.minFilter===cr||w.minFilter===Si)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,ft[w.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,ft[w.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,ft[w.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,N[w.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,N[w.minFilter]),w.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,X[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ke||w.minFilter!==cr&&w.minFilter!==Si||w.type===An&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function z(U,w){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",C));const rt=w.source;let lt=d.get(rt);lt===void 0&&(lt={},d.set(rt,lt));const mt=W(w);if(mt!==U.__cacheKey){lt[mt]===void 0&&(lt[mt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),lt[mt].usedTimes++;const xt=lt[U.__cacheKey];xt!==void 0&&(lt[U.__cacheKey].usedTimes--,xt.usedTimes===0&&T(w)),U.__cacheKey=mt,U.__webglTexture=lt[mt].texture}return Q}function R(U,w,Q){return Math.floor(Math.floor(U/Q)/w)}function P(U,w,Q,rt){const mt=U.updateRanges;if(mt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,Q,rt,w.data);else{mt.sort((Ft,St)=>Ft.start-St.start);let xt=0;for(let Ft=1;Ft<mt.length;Ft++){const St=mt[xt],vt=mt[Ft],zt=St.start+St.count,Ht=R(vt.start,w.width,4),$t=R(St.start,w.width,4);vt.start<=zt+1&&Ht===$t&&R(vt.start+vt.count-1,w.width,4)===Ht?St.count=Math.max(St.count,vt.start+vt.count-St.start):(++xt,mt[xt]=vt)}mt.length=xt+1;const ct=e.getParameter(s.UNPACK_ROW_LENGTH),ut=e.getParameter(s.UNPACK_SKIP_PIXELS),_t=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Ft=0,St=mt.length;Ft<St;Ft++){const vt=mt[Ft],zt=Math.floor(vt.start/4),Ht=Math.ceil(vt.count/4),$t=zt%w.width,Y=Math.floor(zt/w.width),Mt=Ht,ht=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(s.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(s.TEXTURE_2D,0,$t,Y,Mt,ht,Q,rt,w.data)}U.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,ct),e.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(s.UNPACK_SKIP_ROWS,_t)}}function V(U,w,Q){let rt=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(rt=s.TEXTURE_3D);const lt=z(U,w),mt=w.source;e.bindTexture(rt,U.__webglTexture,s.TEXTURE0+Q);const xt=n.get(mt);if(mt.version!==xt.__version||lt===!0){if(e.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ht=ie.getPrimaries(ie.workingColorSpace),yt=w.colorSpace===Mi?null:ie.getPrimaries(w.colorSpace),Tt=w.colorSpace===Mi||ht===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let ut=g(w.image,!1,i.maxTextureSize);ut=Ve(w,ut);const _t=r.convert(w.format,w.colorSpace),Ft=r.convert(w.type);let St=v(w.internalFormat,_t,Ft,w.normalized,w.colorSpace,w.isVideoTexture);O(rt,w);let vt;const zt=w.mipmaps,Ht=w.isVideoTexture!==!0,$t=xt.__version===void 0||lt===!0,Y=mt.dataReady,Mt=b(w,ut);if(w.isDepthTexture)St=y(w.format===Pi,w.type),$t&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,St,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,St,ut.width,ut.height,0,_t,Ft,null));else if(w.isDataTexture)if(zt.length>0){Ht&&$t&&e.texStorage2D(s.TEXTURE_2D,Mt,St,zt[0].width,zt[0].height);for(let ht=0,yt=zt.length;ht<yt;ht++)vt=zt[ht],Ht?Y&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,vt.width,vt.height,_t,Ft,vt.data):e.texImage2D(s.TEXTURE_2D,ht,St,vt.width,vt.height,0,_t,Ft,vt.data);w.generateMipmaps=!1}else Ht?($t&&e.texStorage2D(s.TEXTURE_2D,Mt,St,ut.width,ut.height),Y&&P(w,ut,_t,Ft)):e.texImage2D(s.TEXTURE_2D,0,St,ut.width,ut.height,0,_t,Ft,ut.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ht&&$t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,St,zt[0].width,zt[0].height,ut.depth);for(let ht=0,yt=zt.length;ht<yt;ht++)if(vt=zt[ht],w.format!==fn)if(_t!==null)if(Ht){if(Y)if(w.layerUpdates.size>0){const Tt=Yc(vt.width,vt.height,w.format,w.type);for(const pt of w.layerUpdates){const Ot=vt.data.subarray(pt*Tt/vt.data.BYTES_PER_ELEMENT,(pt+1)*Tt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,pt,vt.width,vt.height,1,_t,Ot)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,vt.width,vt.height,ut.depth,_t,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,St,vt.width,vt.height,ut.depth,0,vt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?Y&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,vt.width,vt.height,ut.depth,_t,Ft,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,St,vt.width,vt.height,ut.depth,0,_t,Ft,vt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ht&&$t&&e.texStorage2D(s.TEXTURE_2D,Mt,St,zt[0].width,zt[0].height);for(let ht=0,yt=zt.length;ht<yt;ht++)vt=zt[ht],w.format!==fn?_t!==null?Ht?Y&&e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,St,vt.width,vt.height,0,vt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?Y&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,vt.width,vt.height,_t,Ft,vt.data):e.texImage2D(s.TEXTURE_2D,ht,St,vt.width,vt.height,0,_t,Ft,vt.data)}else if(w.isDataArrayTexture)if(Ht){if($t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,St,ut.width,ut.height,ut.depth),Y)if(w.layerUpdates.size>0){const ht=Yc(ut.width,ut.height,w.format,w.type);for(const yt of w.layerUpdates){const Tt=ut.data.subarray(yt*ht/ut.data.BYTES_PER_ELEMENT,(yt+1)*ht/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,ut.width,ut.height,1,_t,Ft,Tt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,_t,Ft,ut.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,ut.width,ut.height,ut.depth,0,_t,Ft,ut.data);else if(w.isData3DTexture)Ht?($t&&e.texStorage3D(s.TEXTURE_3D,Mt,St,ut.width,ut.height,ut.depth),Y&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,_t,Ft,ut.data)):e.texImage3D(s.TEXTURE_3D,0,St,ut.width,ut.height,ut.depth,0,_t,Ft,ut.data);else if(w.isFramebufferTexture){if($t)if(Ht)e.texStorage2D(s.TEXTURE_2D,Mt,St,ut.width,ut.height);else{let ht=ut.width,yt=ut.height;for(let Tt=0;Tt<Mt;Tt++)e.texImage2D(s.TEXTURE_2D,Tt,St,ht,yt,0,_t,Ft,null),ht>>=1,yt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const ht=s.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),ut.parentNode!==ht){ht.appendChild(ut),u.add(w),ht.onpaint=yt=>{const Tt=yt.changedElements;for(const pt of u)Tt.includes(pt.image)&&(pt.needsUpdate=!0)},ht.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ut);else{const Tt=s.RGBA,pt=s.RGBA,Ot=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Tt,pt,Ot,ut)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Ht&&$t){const ht=ce(zt[0]);e.texStorage2D(s.TEXTURE_2D,Mt,St,ht.width,ht.height)}for(let ht=0,yt=zt.length;ht<yt;ht++)vt=zt[ht],Ht?Y&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,_t,Ft,vt):e.texImage2D(s.TEXTURE_2D,ht,St,_t,Ft,vt);w.generateMipmaps=!1}else if(Ht){if($t){const ht=ce(ut);e.texStorage2D(s.TEXTURE_2D,Mt,St,ht.width,ht.height)}Y&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Ft,ut)}else e.texImage2D(s.TEXTURE_2D,0,St,_t,Ft,ut);m(w)&&S(rt),xt.__version=mt.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function j(U,w,Q){if(w.image.length!==6)return;const rt=z(U,w),lt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+Q);const mt=n.get(lt);if(lt.version!==mt.__version||rt===!0){e.activeTexture(s.TEXTURE0+Q);const xt=ie.getPrimaries(ie.workingColorSpace),ct=w.colorSpace===Mi?null:ie.getPrimaries(w.colorSpace),ut=w.colorSpace===Mi||xt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const _t=w.isCompressedTexture||w.image[0].isCompressedTexture,Ft=w.image[0]&&w.image[0].isDataTexture,St=[];for(let pt=0;pt<6;pt++)!_t&&!Ft?St[pt]=g(w.image[pt],!0,i.maxCubemapSize):St[pt]=Ft?w.image[pt].image:w.image[pt],St[pt]=Ve(w,St[pt]);const vt=St[0],zt=r.convert(w.format,w.colorSpace),Ht=r.convert(w.type),$t=v(w.internalFormat,zt,Ht,w.normalized,w.colorSpace),Y=w.isVideoTexture!==!0,Mt=mt.__version===void 0||rt===!0,ht=lt.dataReady;let yt=b(w,vt);O(s.TEXTURE_CUBE_MAP,w);let Tt;if(_t){Y&&Mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,$t,vt.width,vt.height);for(let pt=0;pt<6;pt++){Tt=St[pt].mipmaps;for(let Ot=0;Ot<Tt.length;Ot++){const Ut=Tt[Ot];w.format!==fn?zt!==null?Y?ht&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot,0,0,Ut.width,Ut.height,zt,Ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot,$t,Ut.width,Ut.height,0,Ut.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot,0,0,Ut.width,Ut.height,zt,Ht,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot,$t,Ut.width,Ut.height,0,zt,Ht,Ut.data)}}}else{if(Tt=w.mipmaps,Y&&Mt){Tt.length>0&&yt++;const pt=ce(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,$t,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Ft){Y?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,St[pt].width,St[pt].height,zt,Ht,St[pt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,$t,St[pt].width,St[pt].height,0,zt,Ht,St[pt].data);for(let Ot=0;Ot<Tt.length;Ot++){const me=Tt[Ot].image[pt].image;Y?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot+1,0,0,me.width,me.height,zt,Ht,me.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot+1,$t,me.width,me.height,0,zt,Ht,me.data)}}else{Y?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,zt,Ht,St[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,$t,zt,Ht,St[pt]);for(let Ot=0;Ot<Tt.length;Ot++){const Ut=Tt[Ot];Y?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot+1,0,0,zt,Ht,Ut.image[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot+1,$t,zt,Ht,Ut.image[pt])}}}m(w)&&S(s.TEXTURE_CUBE_MAP),mt.__version=lt.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function st(U,w,Q,rt,lt,mt){const xt=r.convert(Q.format,Q.colorSpace),ct=r.convert(Q.type),ut=v(Q.internalFormat,xt,ct,Q.normalized,Q.colorSpace),_t=n.get(w),Ft=n.get(Q);if(Ft.__renderTarget=w,!_t.__hasExternalTextures){const St=Math.max(1,w.width>>mt),vt=Math.max(1,w.height>>mt);lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?e.texImage3D(lt,mt,ut,St,vt,w.depth,0,xt,ct,null):e.texImage2D(lt,mt,ut,St,vt,0,xt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,U),Re(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,lt,Ft.__webglTexture,0,Me(w)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,lt,Ft.__webglTexture,mt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function K(U,w,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,U),w.depthBuffer){const rt=w.depthTexture,lt=rt&&rt.isDepthTexture?rt.type:null,mt=y(w.stencilBuffer,lt),xt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Re(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me(w),mt,w.width,w.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me(w),mt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,mt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,U)}else{const rt=w.textures;for(let lt=0;lt<rt.length;lt++){const mt=rt[lt],xt=r.convert(mt.format,mt.colorSpace),ct=r.convert(mt.type),ut=v(mt.internalFormat,xt,ct,mt.normalized,mt.colorSpace);Re(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me(w),ut,w.width,w.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me(w),ut,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ut,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function at(U,w,Q){const rt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const lt=n.get(w.depthTexture);if(lt.__renderTarget=w,(!lt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),rt){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,w.depthTexture.addEventListener("dispose",C)),lt.__webglTexture===void 0){lt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,lt.__webglTexture),O(s.TEXTURE_CUBE_MAP,w.depthTexture);const _t=r.convert(w.depthTexture.format),Ft=r.convert(w.depthTexture.type);let St;w.depthTexture.format===ri?St=s.DEPTH_COMPONENT24:w.depthTexture.format===Pi&&(St=s.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,St,w.width,w.height,0,_t,Ft,null)}}else tt(w.depthTexture,0);const mt=lt.__webglTexture,xt=Me(w),ct=rt?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,ut=w.depthTexture.format===Pi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===ri)Re(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,ct,mt,0,xt):s.framebufferTexture2D(s.FRAMEBUFFER,ut,ct,mt,0);else if(w.depthTexture.format===Pi)Re(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,ct,mt,0,xt):s.framebufferTexture2D(s.FRAMEBUFFER,ut,ct,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(U){const w=n.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const rt=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),rt){const lt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,rt.removeEventListener("dispose",lt)};rt.addEventListener("dispose",lt),w.__depthDisposeCallback=lt}w.__boundDepthTexture=rt}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(Q)for(let rt=0;rt<6;rt++)at(w.__webglFramebuffer[rt],U,rt);else{const rt=U.texture.mipmaps;rt&&rt.length>0?at(w.__webglFramebuffer[0],U,0):at(w.__webglFramebuffer,U,0)}else if(Q){w.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[rt]),w.__webglDepthbuffer[rt]===void 0)w.__webglDepthbuffer[rt]=s.createRenderbuffer(),K(w.__webglDepthbuffer[rt],U,!1);else{const lt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=w.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,mt)}}else{const rt=U.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),K(w.__webglDepthbuffer,U,!1);else{const lt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,mt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(U,w,Q){const rt=n.get(U);w!==void 0&&st(rt.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&dt(U)}function Ct(U){const w=U.texture,Q=n.get(U),rt=n.get(w);U.addEventListener("dispose",_);const lt=U.textures,mt=U.isWebGLCubeRenderTarget===!0,xt=lt.length>1;if(xt||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=w.version,o.memory.textures++),mt){Q.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[ct]=[];for(let ut=0;ut<w.mipmaps.length;ut++)Q.__webglFramebuffer[ct][ut]=s.createFramebuffer()}else Q.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ct=0;ct<w.mipmaps.length;ct++)Q.__webglFramebuffer[ct]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(xt)for(let ct=0,ut=lt.length;ct<ut;ct++){const _t=n.get(lt[ct]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),o.memory.textures++)}if(U.samples>0&&Re(U)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ct=0;ct<lt.length;ct++){const ut=lt[ct];Q.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[ct]);const _t=r.convert(ut.format,ut.colorSpace),Ft=r.convert(ut.type),St=v(ut.internalFormat,_t,Ft,ut.normalized,ut.colorSpace,U.isXRRenderTarget===!0),vt=Me(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,St,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,Q.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),K(Q.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),O(s.TEXTURE_CUBE_MAP,w);for(let ct=0;ct<6;ct++)if(w.mipmaps&&w.mipmaps.length>0)for(let ut=0;ut<w.mipmaps.length;ut++)st(Q.__webglFramebuffer[ct][ut],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ut);else st(Q.__webglFramebuffer[ct],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(w)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ct=0,ut=lt.length;ct<ut;ct++){const _t=lt[ct],Ft=n.get(_t);let St=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(St=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(St,Ft.__webglTexture),O(St,_t),st(Q.__webglFramebuffer,U,_t,s.COLOR_ATTACHMENT0+ct,St,0),m(_t)&&S(St)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ct=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,rt.__webglTexture),O(ct,w),w.mipmaps&&w.mipmaps.length>0)for(let ut=0;ut<w.mipmaps.length;ut++)st(Q.__webglFramebuffer[ut],U,w,s.COLOR_ATTACHMENT0,ct,ut);else st(Q.__webglFramebuffer,U,w,s.COLOR_ATTACHMENT0,ct,0);m(w)&&S(ct),e.unbindTexture()}U.depthBuffer&&dt(U)}function Vt(U){const w=U.textures;for(let Q=0,rt=w.length;Q<rt;Q++){const lt=w[Q];if(m(lt)){const mt=E(U),xt=n.get(lt).__webglTexture;e.bindTexture(mt,xt),S(mt),e.unbindTexture()}}}const oe=[],Ae=[];function Fe(U){if(U.samples>0){if(Re(U)===!1){const w=U.textures,Q=U.width,rt=U.height;let lt=s.COLOR_BUFFER_BIT;const mt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(U),ct=w.length>1;if(ct)for(let _t=0;_t<w.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const ut=U.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let _t=0;_t<w.length;_t++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[_t]);const Ft=n.get(w[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ft,0)}s.blitFramebuffer(0,0,Q,rt,0,0,Q,rt,lt,s.NEAREST),c===!0&&(oe.length=0,Ae.length=0,oe.push(s.COLOR_ATTACHMENT0+_t),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(oe.push(mt),Ae.push(mt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ae)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let _t=0;_t<w.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,xt.__webglColorRenderbuffer[_t]);const Ft=n.get(w[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,Ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){const w=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Me(U){return Math.min(i.maxSamples,U.samples)}function Re(U){const w=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $(U){const w=o.render.frame;h.get(U)!==w&&(h.set(U,w),U.update())}function Ve(U,w){const Q=U.colorSpace,rt=U.format,lt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==eo&&Q!==Mi&&(ie.getTransfer(Q)===he?(rt!==fn||lt!==sn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",Q)),w}function ce(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=B,this.getTextureUnits=H,this.setTextureUnits=G,this.setTexture2D=tt,this.setTexture2DArray=k,this.setTexture3D=Z,this.setTextureCube=et,this.rebindTextures=gt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function e_(s,t){function e(n,i=Mi){let r;const o=ie.getTransfer(i);if(n===sn)return s.UNSIGNED_BYTE;if(n===wl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===bl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===hu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===uu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===lu)return s.BYTE;if(n===cu)return s.SHORT;if(n===Qs)return s.UNSIGNED_SHORT;if(n===Sl)return s.INT;if(n===kn)return s.UNSIGNED_INT;if(n===An)return s.FLOAT;if(n===Mn)return s.HALF_FLOAT;if(n===fu)return s.ALPHA;if(n===du)return s.RGB;if(n===fn)return s.RGBA;if(n===ri)return s.DEPTH_COMPONENT;if(n===Pi)return s.DEPTH_STENCIL;if(n===yo)return s.RED;if(n===El)return s.RED_INTEGER;if(n===Ui)return s.RG;if(n===Tl)return s.RG_INTEGER;if(n===Al)return s.RGBA_INTEGER;if(n===Xr||n===qr||n===Yr||n===$r)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Na||n===Fa||n===za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===ka||n===Ba||n===Ha||n===Ga||n===jr||n===Va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===ka)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ha)return r.COMPRESSED_R11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jr)return r.COMPRESSED_RG11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Ka||n===Za||n===Ja||n===Qa||n===ja||n===tl||n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===rl||n===ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sl)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ll||n===to||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===al)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
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

}`;class s_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new bu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new on({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r_ extends Fi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null;const x=typeof XRWebGLBinding<"u",g=new s_,m={},S=e.getContextAttributes();let E=null,v=null;const y=[],b=[],C=new Bt;let _=null,M=null;const T=new Ye;T.viewport=new xe;const L=new Ye;L.viewport=new xe;const D=[T,L],B=new dp;let H=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let P=y[R];return P===void 0&&(P=new ko,y[R]=P),P.getTargetRaySpace()},this.getControllerGrip=function(R){let P=y[R];return P===void 0&&(P=new ko,y[R]=P),P.getGripSpace()},this.getHand=function(R){let P=y[R];return P===void 0&&(P=new ko,y[R]=P),P.getHandSpace()};function J(R){const P=b.indexOf(R.inputSource);if(P===-1)return;const V=y[P];V!==void 0&&(V.update(R.inputSource,R.frame,l||o),V.dispatchEvent({type:R.type,data:R.inputSource}))}function W(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",tt);for(let R=0;R<y.length;R++){const P=b[R];P!==null&&(b[R]=null,y[R].disconnect(P))}H=null,G=null,g.reset();for(const R in m)delete m[R];if(t.setRenderTarget(E),d=null,f=null,u=null,i=null,v=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),M!==null){const R=M.camera;R.fov=M.fov,R.zoom=M.zoom,R.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(R){if(i=R,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",W),i.addEventListener("inputsourceschange",tt),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,j=null,st=null;S.depth&&(st=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=S.stencil?Pi:ri,j=S.stencil?js:kn);const K={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(K),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new xn(f.textureWidth,f.textureHeight,{format:fn,type:sn,depthTexture:new ir(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const V={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,V),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new xn(d.framebufferWidth,d.framebufferHeight,{format:fn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),z.setContext(i),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(R){for(let P=0;P<R.removed.length;P++){const V=R.removed[P],j=b.indexOf(V);j>=0&&(b[j]=null,y[j].disconnect(V))}for(let P=0;P<R.added.length;P++){const V=R.added[P];let j=b.indexOf(V);if(j===-1){for(let K=0;K<y.length;K++)if(K>=b.length){b.push(V),j=K;break}else if(b[K]===null){b[K]=V,j=K;break}if(j===-1)break}const st=y[j];st&&st.connect(V)}}const k=new F,Z=new F;function et(R,P,V){k.setFromMatrixPosition(P.matrixWorld),Z.setFromMatrixPosition(V.matrixWorld);const j=k.distanceTo(Z),st=P.projectionMatrix.elements,K=V.projectionMatrix.elements,at=st[14]/(st[10]-1),dt=st[14]/(st[10]+1),gt=(st[9]+1)/st[5],Ct=(st[9]-1)/st[5],Vt=(st[8]-1)/st[0],oe=(K[8]+1)/K[0],Ae=at*Vt,Fe=at*oe,Me=j/(-Vt+oe),Re=Me*-Vt;if(P.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Re),R.translateZ(Me),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),st[10]===-1)R.projectionMatrix.copy(P.projectionMatrix),R.projectionMatrixInverse.copy(P.projectionMatrixInverse);else{const $=at+Me,Ve=dt+Me,ce=Ae-Re,U=Fe+(j-Re),w=gt*dt/Ve*$,Q=Ct*dt/Ve*$;R.projectionMatrix.makePerspective(ce,U,w,Q,$,Ve),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function ft(R,P){P===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(P.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(i===null)return;let P=R.near,V=R.far;g.texture!==null&&(g.depthNear>0&&(P=g.depthNear),g.depthFar>0&&(V=g.depthFar)),B.near=L.near=T.near=P,B.far=L.far=T.far=V,(H!==B.near||G!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,G=B.far),B.layers.mask=R.layers.mask|6,T.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const j=R.parent,st=B.cameras;ft(B,j);for(let K=0;K<st.length;K++)ft(st[K],j);st.length===2?et(B,T,L):B.projectionMatrix.copy(T.projectionMatrix),M===null&&R.isPerspectiveCamera&&(M={camera:R,fov:R.fov,zoom:R.zoom}),N(R,B,j)};function N(R,P,V){V===null?R.matrix.copy(P.matrixWorld):(R.matrix.copy(V.matrixWorld),R.matrix.invert(),R.matrix.multiply(P.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(P.projectionMatrix),R.projectionMatrixInverse.copy(P.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=nr*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(R){c=R,f!==null&&(f.fixedFoveation=R),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=R)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(R){return m[R]};let X=null;function O(R,P){if(h=P.getViewerPose(l||o),p=P,h!==null){const V=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let j=!1;V.length!==B.cameras.length&&(B.cameras.length=0,j=!0);for(let dt=0;dt<V.length;dt++){const gt=V[dt];let Ct=null;if(d!==null)Ct=d.getViewport(gt);else{const oe=u.getViewSubImage(f,gt);Ct=oe.viewport,dt===0&&(t.setRenderTargetTextures(v,oe.colorTexture,oe.depthStencilTexture),t.setRenderTarget(v))}let Vt=D[dt];Vt===void 0&&(Vt=new Ye,Vt.layers.enable(dt),Vt.viewport=new xe,D[dt]=Vt),Vt.matrix.fromArray(gt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(gt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),dt===0&&(B.matrix.copy(Vt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),j===!0&&B.cameras.push(Vt)}const st=i.enabledFeatures;if(st&&st.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const dt=u.getDepthInformation(V[0]);dt&&dt.isValid&&dt.texture&&g.init(dt,i.renderState)}if(st&&st.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let dt=0;dt<V.length;dt++){const gt=V[dt].camera;if(gt){let Ct=m[gt];Ct||(Ct=new bu,m[gt]=Ct);const Vt=u.getCameraImage(gt);Ct.sourceTexture=Vt}}}}for(let V=0;V<y.length;V++){const j=b[V],st=y[V];j!==null&&st!==void 0&&st.update(j,P,l||o)}X&&X(R,P),P.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:P}),p=null}const z=new Lu;z.setAnimationLoop(O),this.setAnimationLoop=function(R){X=R},this.dispose=function(){}}}const o_=new ne,zu=new Xt;zu.set(-1,0,0,0,1,0,0,0,1);function a_(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Eu(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,S,E,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,S,E):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=t.get(m),E=S.envMap,v=S.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(zu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,S,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=E*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function l_(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const b=y.program;n.uniformBlockBinding(v,b)}function l(v,y){let b=i[v.id];b===void 0&&(g(v),b=h(v),i[v.id]=b,v.addEventListener("dispose",S));const C=y.program;n.updateUBOMapping(v,C);const _=t.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){const y=u();v.__bindingPointIndex=y;const b=s.createBuffer(),C=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,C,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=i[v.id],b=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let _=0,M=b.length;_<M;_++){const T=b[_];if(Array.isArray(T))for(let L=0,D=T.length;L<D;L++)d(T[L],_,L,C);else d(T,_,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,y,b,C){if(x(v,y,b,C)===!0){const _=v.__offset,M=v.value;if(Array.isArray(M)){let T=0;for(let L=0;L<M.length;L++){const D=M[L],B=m(D);p(D,v.__data,T),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(T+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(M,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function p(v,y,b){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,b)}function x(v,y,b,C){const _=v.value,M=y+"_"+b;if(C[M]===void 0)return typeof _=="number"||typeof _=="boolean"?C[M]=_:ArrayBuffer.isView(_)?C[M]=_.slice():C[M]=_.clone(),!0;{const T=C[M];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return C[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function g(v){const y=v.uniforms;let b=0;const C=16;for(let M=0,T=y.length;M<T;M++){const L=Array.isArray(y[M])?y[M]:[y[M]];for(let D=0,B=L.length;D<B;D++){const H=L[D],G=Array.isArray(H.value)?H.value:[H.value];for(let J=0,W=G.length;J<W;J++){const tt=G[J],k=m(tt),Z=b%C,et=Z%k.boundary,ft=Z+et;b+=et,ft!==0&&C-ft<k.storage&&(b+=C-ft),H.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=k.storage}}}const _=b%C;return _>0&&(b+=C-_),v.__size=b,v.__cache={},this}function m(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",v),y}function S(v){const y=v.target;y.removeEventListener("dispose",S);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function E(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:E}}const c_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function h_(){return Pn===null&&(Pn=new xs(c_,16,16,Ui,Mn),Pn.name="DFG_LUT",Pn.minFilter=Be,Pn.magFilter=Be,Pn.wrapS=ei,Pn.wrapT=ei,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class Ou{constructor(t={}){const{canvas:e=sd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=sn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=d,g=new Set([Al,Tl,El]),m=new Set([sn,kn,Qs,js,wl,bl]),S=new Uint32Array(4),E=new Int32Array(4),v=new F;let y=null,b=null;const C=[],_=[];let M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let L=!1,D=null,B=null,H=null,G=null;this._outputColorSpace=Ie;let J=0,W=0,tt=null,k=-1,Z=null;const et=new xe,ft=new xe;let N=null;const X=new kt(0);let O=0,z=e.width,R=e.height,P=1,V=null,j=null;const st=new xe(0,0,z,R),K=new xe(0,0,z,R);let at=!1;const dt=new Ul;let gt=!1,Ct=!1;const Vt=new ne,oe=new F,Ae=new xe,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Re(){return tt===null?P:1}let $=n;function Ve(A,q){return e.getContext(A,q)}let ce,U,w,Q,rt,lt,mt,xt,ct,ut,_t,Ft,St,vt,zt,Ht,$t,Y,Mt,ht,yt,Tt,pt;try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vl}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",Sn,!1),$===null){const q="webgl2";if($=Ve(q,A),$===null)throw Ve(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(A){throw e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),se("WebGLRenderer: "+A.message),A}function Ot(){ce=new hg($),ce.init(),yt=new e_($,ce),U=new tg($,ce,t,yt),w=new jx($,ce),U.reversedDepthBuffer&&f&&w.buffers.depth.setReversed(!0),B=$.createFramebuffer(),H=$.createFramebuffer(),G=$.createFramebuffer(),Q=new dg($),rt=new kx,lt=new t_($,ce,w,rt,U,yt,Q),mt=new cg(T),xt=new mp($),Tt=new Q0($,xt),ct=new ug($,xt,Q,Tt),ut=new mg($,ct,xt,Tt,Q),Y=new pg($,U,lt),zt=new eg(rt),_t=new Ox(T,mt,ce,U,Tt,zt),Ft=new a_(T,rt),St=new Hx,vt=new Yx(ce),$t=new J0(T,mt,w,ut,p,c),Ht=new Qx(T,ut,U),pt=new l_($,Q,U,w),Mt=new j0($,ce,Q),ht=new fg($,ce,Q),Q.programs=_t.programs,T.capabilities=U,T.extensions=ce,T.properties=rt,T.renderLists=St,T.shadowMap=Ht,T.state=w,T.info=Q}x!==sn&&(M=new xg(x,e.width,e.height,a,i,r));const Ut=new r_(T,$);this.xr=Ut,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(A){A!==void 0&&(P=A,this.setSize(z,R,!1))},this.getSize=function(A){return A.set(z,R)},this.setSize=function(A,q,ot=!0){if(Ut.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,R=q,e.width=Math.floor(A*P),e.height=Math.floor(q*P),ot===!0&&(e.style.width=A+"px",e.style.height=q+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(z*P,R*P).floor()},this.setDrawingBufferSize=function(A,q,ot){z=A,R=q,P=ot,e.width=Math.floor(A*ot),e.height=Math.floor(q*ot),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(x===sn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(et)},this.getViewport=function(A){return A.copy(st)},this.setViewport=function(A,q,ot,nt){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,q,ot,nt),w.viewport(et.copy(st).multiplyScalar(P).round())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,q,ot,nt){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,q,ot,nt),w.scissor(ft.copy(K).multiplyScalar(P).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(A){w.setScissorTest(at=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ot=!0){let nt=0;if(A){let it=!1;if(tt!==null){const Et=tt.texture.format;it=g.has(Et)}if(it){const Et=tt.texture.type,Lt=m.has(Et),bt=$t.getClearColor(),Pt=$t.getClearAlpha(),Nt=bt.r,Kt=bt.g,Qt=bt.b;Lt?(S[0]=Nt,S[1]=Kt,S[2]=Qt,S[3]=Pt,$.clearBufferuiv($.COLOR,0,S)):(E[0]=Nt,E[1]=Kt,E[2]=Qt,E[3]=Pt,$.clearBufferiv($.COLOR,0,E))}else nt|=$.COLOR_BUFFER_BIT}q&&(nt|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(nt|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&$.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),$t.dispose(),St.dispose(),vt.dispose(),rt.dispose(),mt.dispose(),ut.dispose(),Tt.dispose(),pt.dispose(),_t.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",jl),Ut.removeEventListener("sessionend",tc),bi.stop()};function me(A){A.preventDefault(),io("WebGLRenderer: Context Lost."),L=!0}function ae(){io("WebGLRenderer: Context Restored."),L=!1;const A=Q.autoReset,q=Ht.enabled,ot=Ht.autoUpdate,nt=Ht.needsUpdate,it=Ht.type;Ot(),Q.autoReset=A,Ht.enabled=q,Ht.autoUpdate=ot,Ht.needsUpdate=nt,Ht.type=it}function Sn(A){se("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Rn(A){const q=A.target;q.removeEventListener("dispose",Rn),mf(q)}function mf(A){gf(A),rt.remove(A)}function gf(A){const q=rt.get(A).programs;q!==void 0&&(q.forEach(function(ot){_t.releaseProgram(ot)}),A.isShaderMaterial&&_t.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ot,nt,it,Et){q===null&&(q=Fe);const Lt=it.isMesh&&it.matrixWorld.determinantAffine()<0,bt=vf(A,q,ot,nt,it);w.setMaterial(nt,Lt);let Pt=ot.index,Nt=1;if(nt.wireframe===!0){if(Pt=ct.getWireframeAttribute(ot),Pt===void 0)return;Nt=2}const Kt=ot.drawRange,Qt=ot.attributes.position;let It=Kt.start*Nt,le=(Kt.start+Kt.count)*Nt;Et!==null&&(It=Math.max(It,Et.start*Nt),le=Math.min(le,(Et.start+Et.count)*Nt)),Pt!==null?(It=Math.max(It,0),le=Math.min(le,Pt.count)):Qt!=null&&(It=Math.max(It,0),le=Math.min(le,Qt.count));const Ce=le-It;if(Ce<0||Ce===1/0)return;Tt.setup(it,nt,bt,ot,Pt);let _e,pe=Mt;if(Pt!==null&&(_e=xt.get(Pt),pe=ht,pe.setIndex(_e)),it.isMesh)nt.wireframe===!0?(w.setLineWidth(nt.wireframeLinewidth*Re()),pe.setMode($.LINES)):pe.setMode($.TRIANGLES);else if(it.isLine){let We=nt.linewidth;We===void 0&&(We=1),w.setLineWidth(We*Re()),it.isLineSegments?pe.setMode($.LINES):it.isLineLoop?pe.setMode($.LINE_LOOP):pe.setMode($.LINE_STRIP)}else it.isPoints?pe.setMode($.POINTS):it.isSprite&&pe.setMode($.TRIANGLES);if(it.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))pe.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const We=it._multiDrawStarts,Rt=it._multiDrawCounts,$e=it._multiDrawCount,re=Pt?xt.get(Pt).bytesPerElement:1,dn=rt.get(nt).currentProgram.getUniforms();for(let Cn=0;Cn<$e;Cn++)dn.setValue($,"_gl_DrawID",Cn),pe.render(We[Cn]/re,Rt[Cn])}else if(it.isInstancedMesh)pe.renderInstances(It,Ce,it.count);else if(ot.isInstancedBufferGeometry){const We=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Rt=Math.min(ot.instanceCount,We);pe.renderInstances(It,Ce,Rt)}else pe.render(It,Ce)};function Ql(A,q,ot,nt){D!==null&&A.isNodeMaterial&&D.setObject(nt,A),gt===!0&&zt.setState(A,ot,!1),A.transparent===!0&&A.side===Qn&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,lr(A,q,nt),A.side=Ii,A.needsUpdate=!0,lr(A,q,nt),A.side=Qn):lr(A,q,nt)}this.compile=function(A,q,ot=null){ot===null&&(ot=A),D!==null&&D.renderStart(A,q,ot),b=vt.get(ot),b.init(q),_.push(b),ot.traverseVisible(function(it){it.isLight&&it.layers.test(q.layers)&&(b.pushLight(it),it.castShadow&&b.pushShadow(it))}),A!==ot&&A.traverseVisible(function(it){it.isLight&&it.layers.test(q.layers)&&(b.pushLight(it),it.castShadow&&b.pushShadow(it))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),Ct=this.localClippingEnabled,gt=zt.init(this.clippingPlanes,Ct),gt===!0&&zt.setGlobalState(this.clippingPlanes,q),D!==null&&Ht.render(b.state.shadowsArray,ot,q);const nt=new Set;return A.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Et=it.material;if(Et)if(Array.isArray(Et))for(let Lt=0;Lt<Et.length;Lt++){const bt=Et[Lt];Ql(bt,ot,q,it),nt.add(bt)}else Ql(Et,ot,q,it),nt.add(Et)}),b=_.pop(),D!==null&&D.renderEnd(),nt},this.compileAsync=function(A,q,ot=null){const nt=this.compile(A,q,ot);return new Promise(it=>{function Et(){if(nt.forEach(function(Lt){const Pt=rt.get(Lt).currentProgram;(Pt===void 0||Pt.isReady())&&nt.delete(Lt)}),nt.size===0){it(A);return}setTimeout(Et,10)}ce.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Ro=null;function xf(A){Ro&&Ro(A)}function jl(){bi.stop()}function tc(){bi.start()}const bi=new Lu;bi.setAnimationLoop(xf),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){Ro=A,Ut.setAnimationLoop(A),A===null?bi.stop():bi.start()},Ut.addEventListener("sessionstart",jl),Ut.addEventListener("sessionend",tc),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(A,q);const ot=Ut.enabled===!0&&Ut.isPresenting===!0,nt=M!==null&&(tt===null||ot)&&M.begin(T,tt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(q),q=Ut.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,q,tt),b=vt.get(A,_.length),b.init(q),b.state.textureUnits=lt.getTextureUnits(),_.push(b),Vt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),dt.setFromProjectionMatrix(Vt,Fn,q.reversedDepth),Ct=this.localClippingEnabled,gt=zt.init(this.clippingPlanes,Ct),y=St.get(A,C.length),y.init(),C.push(y),Ut.enabled===!0&&Ut.isPresenting===!0){const Lt=T.xr.getDepthSensingMesh();Lt!==null&&Co(Lt,q,-1/0,T.sortObjects)}Co(A,q,0,T.sortObjects),y.finish(),D!==null&&D.updateLights(b.state.lightsArray),T.sortObjects===!0&&y.sort(V,j),Me=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Me&&$t.addToRenderList(y,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),gt===!0&&zt.beginShadows();const it=b.state.shadowsArray;if(Ht.render(it,A,q),gt===!0&&zt.endShadows(),(nt&&M.hasRenderPass())===!1){const Lt=y.opaque,bt=y.transmissive;if(b.setupLights(),q.isArrayCamera){const Pt=q.cameras;if(bt.length>0)for(let Nt=0,Kt=Pt.length;Nt<Kt;Nt++){const Qt=Pt[Nt];nc(Lt,bt,A,Qt)}Me&&$t.render(A);for(let Nt=0,Kt=Pt.length;Nt<Kt;Nt++){const Qt=Pt[Nt];ec(y,A,Qt,Qt.viewport)}}else bt.length>0&&nc(Lt,bt,A,q),Me&&$t.render(A),ec(y,A,q)}tt!==null&&W===0&&(lt.updateMultisampleRenderTarget(tt),lt.updateRenderTargetMipmap(tt)),nt&&M.end(T),A.isScene===!0&&A.onAfterRender(T,A,q),Tt.resetDefaultState(),k=-1,Z=null,_.pop(),_.length>0?(b=_[_.length-1],lt.setTextureUnits(b.state.textureUnits),gt===!0&&zt.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,D!==null&&D.renderEnd()};function Co(A,q,ot,nt){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ot=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(dt)){nt&&Ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Vt);const Lt=ut.update(A),bt=A.material;bt.visible&&y.push(A,Lt,bt,ot,Ae.z,null,q)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(dt))){const Lt=ut.update(A),bt=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ae.copy(A.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Ae.copy(Lt.boundingSphere.center)),Ae.applyMatrix4(A.matrixWorld).applyMatrix4(Vt)),Array.isArray(bt)){const Pt=Lt.groups;for(let Nt=0,Kt=Pt.length;Nt<Kt;Nt++){const Qt=Pt[Nt],It=bt[Qt.materialIndex];It&&It.visible&&y.push(A,Lt,It,ot,Ae.z,Qt,q)}}else bt.visible&&y.push(A,Lt,bt,ot,Ae.z,null,q)}}const Et=A.children;for(let Lt=0,bt=Et.length;Lt<bt;Lt++)Co(Et[Lt],q,ot,nt)}function ec(A,q,ot,nt){const{opaque:it,transmissive:Et,transparent:Lt}=A;b.setupLightsView(ot),gt===!0&&zt.setGlobalState(T.clippingPlanes,ot),nt&&w.viewport(et.copy(nt)),it.length>0&&ar(it,q,ot),Et.length>0&&ar(Et,q,ot),Lt.length>0&&ar(Lt,q,ot),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function nc(A,q,ot,nt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[nt.id]===void 0){const It=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[nt.id]=new xn(1,1,{generateMipmaps:!0,type:It?Mn:sn,minFilter:Si,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}const Et=b.state.transmissionRenderTarget[nt.id],Lt=nt.viewport||et;Et.setSize(Lt.z*T.transmissionResolutionScale,Lt.w*T.transmissionResolutionScale);const bt=T.getRenderTarget(),Pt=T.getActiveCubeFace(),Nt=T.getActiveMipmapLevel();T.setRenderTarget(Et),T.getClearColor(X),O=T.getClearAlpha(),O<1&&T.setClearColor(16777215,.5),T.clear(),Me&&$t.render(ot);const Kt=T.toneMapping;T.toneMapping=On;const Qt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),b.setupLightsView(nt),gt===!0&&zt.setGlobalState(T.clippingPlanes,nt),ar(A,ot,nt),lt.updateMultisampleRenderTarget(Et),lt.updateRenderTargetMipmap(Et),ce.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let le=0,Ce=q.length;le<Ce;le++){const _e=q[le],{object:pe,geometry:We,material:Rt,group:$e}=_e;if(Rt.side===Qn&&pe.layers.test(nt.layers)){const re=Rt.side;Rt.side=rn,Rt.needsUpdate=!0,ic(pe,ot,nt,We,Rt,$e),Rt.side=re,Rt.needsUpdate=!0,It=!0}}It===!0&&(lt.updateMultisampleRenderTarget(Et),lt.updateRenderTargetMipmap(Et))}T.setRenderTarget(bt,Pt,Nt),T.setClearColor(X,O),Qt!==void 0&&(nt.viewport=Qt),T.toneMapping=Kt}function ar(A,q,ot){const nt=q.isScene===!0?q.overrideMaterial:null;for(let it=0,Et=A.length;it<Et;it++){const Lt=A[it],{object:bt,geometry:Pt,group:Nt}=Lt;let Kt=Lt.material;Kt.allowOverride===!0&&nt!==null&&(Kt=nt),bt.layers.test(ot.layers)&&ic(bt,q,ot,Pt,Kt,Nt)}}function ic(A,q,ot,nt,it,Et){D!==null&&it.isNodeMaterial&&D.setObject(A,it),A.onBeforeRender(T,q,ot,nt,it,Et),A.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),it.onBeforeRender(T,q,ot,nt,A,Et),it.transparent===!0&&it.side===Qn&&it.forceSinglePass===!1?(it.side=rn,it.needsUpdate=!0,T.renderBufferDirect(ot,q,nt,it,A,Et),it.side=Ii,it.needsUpdate=!0,T.renderBufferDirect(ot,q,nt,it,A,Et),it.side=Qn):T.renderBufferDirect(ot,q,nt,it,A,Et),A.onAfterRender(T,q,ot,nt,it,Et)}function lr(A,q,ot){q.isScene!==!0&&(q=Fe);const nt=rt.get(A),it=b.state.lights,Et=b.state.shadowsArray,Lt=it.state.version,bt=_t.getParameters(A,it.state,Et,q,ot,b.state.lightProbeGridArray),Pt=_t.getProgramCacheKey(bt);let Nt=nt.programs;nt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,nt.fog=q.fog;const Kt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;nt.envMap=mt.get(A.envMap||nt.environment,Kt),nt.envMapRotation=nt.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Nt===void 0&&(A.addEventListener("dispose",Rn),Nt=new Map,nt.programs=Nt);let Qt=Nt.get(Pt);if(Qt!==void 0){if(nt.currentProgram===Qt&&nt.lightsStateVersion===Lt)return rc(A,bt),Qt}else bt.uniforms=_t.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,ot,bt),A.onBeforeCompile(bt,T),Qt=_t.acquireProgram(bt,Pt),Nt.set(Pt,Qt),nt.uniforms=bt.uniforms;const It=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=zt.uniform),rc(A,bt),nt.needsLights=yf(A),nt.lightsStateVersion=Lt,nt.needsLights&&(It.ambientLightColor.value=it.state.ambient,It.lightProbe.value=it.state.probe,It.sunLights.value=it.state.sun,It.sunLightShadows.value=it.state.sunShadow,It.directionalLights.value=it.state.directional,It.directionalLightShadows.value=it.state.directionalShadow,It.spotLights.value=it.state.spot,It.spotLightShadows.value=it.state.spotShadow,It.rectAreaLights.value=it.state.rectArea,It.ltc_1.value=it.state.rectAreaLTC1,It.ltc_2.value=it.state.rectAreaLTC2,It.pointLights.value=it.state.point,It.pointLightShadows.value=it.state.pointShadow,It.hemisphereLights.value=it.state.hemi,It.sunShadowMatrix.value=it.state.sunShadowMatrix,It.sunShadowCascade.value=it.state.sunShadowCascade,It.directionalShadowMatrix.value=it.state.directionalShadowMatrix,It.spotLightMatrix.value=it.state.spotLightMatrix,It.spotLightMap.value=it.state.spotLightMap,It.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=b.state.lightProbeGridArray.length>0,nt.currentProgram=Qt,nt.uniformsList=null,Qt}function sc(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Zr.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function rc(A,q){const ot=rt.get(A);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function _f(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(q.matrixWorld);for(let ot=0,nt=A.length;ot<nt;ot++){const it=A[ot];if(it.texture!==null&&it.boundingBox.containsPoint(v))return it}return null}function vf(A,q,ot,nt,it){q.isScene!==!0&&(q=Fe),lt.resetTextureUnits();const Et=q.fog,Lt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?q.environment:null,bt=tt===null?T.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ie.workingColorSpace,Pt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Nt=mt.get(nt.envMap||Lt,Pt),Kt=nt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Qt=!!ot.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),It=!!ot.morphAttributes.position,le=!!ot.morphAttributes.normal,Ce=!!ot.morphAttributes.color;let _e=On;nt.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(_e=T.toneMapping);const pe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,We=pe!==void 0?pe.length:0,Rt=rt.get(nt),$e=b.state.lights;if(gt===!0&&(Ct===!0||A!==Z)){const ge=A===Z&&nt.id===k;zt.setState(nt,A,ge)}let re=!1;nt.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==$e.state.version||Rt.outputColorSpace!==bt||it.isBatchedMesh&&Rt.batching===!1||!it.isBatchedMesh&&Rt.batching===!0||it.isBatchedMesh&&Rt.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&Rt.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&Rt.instancing===!1||!it.isInstancedMesh&&Rt.instancing===!0||it.isSkinnedMesh&&Rt.skinning===!1||!it.isSkinnedMesh&&Rt.skinning===!0||it.isInstancedMesh&&Rt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Rt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Rt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Rt.instancingMorph===!1&&it.morphTexture!==null||Rt.envMap!==Nt||nt.fog===!0&&Rt.fog!==Et||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==zt.numPlanes||Rt.numIntersection!==zt.numIntersection)||Rt.vertexAlphas!==Kt||Rt.vertexTangents!==Qt||Rt.morphTargets!==It||Rt.morphNormals!==le||Rt.morphColors!==Ce||Rt.toneMapping!==_e||Rt.morphTargetsCount!==We||!!Rt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,Rt.__version=nt.version);let dn=Rt.currentProgram;re===!0&&(dn=lr(nt,q,it),D&&nt.isNodeMaterial&&D.onUpdateProgram(nt,dn,Rt));let Cn=!1,oi=!1,ki=!1;const fe=dn.getUniforms(),we=Rt.uniforms;if(w.useProgram(dn.program)&&(Cn=!0,oi=!0,ki=!0),nt.id!==k&&(k=nt.id,oi=!0),Rt.needsLights){const ge=_f(b.state.lightProbeGridArray,it);Rt.lightProbeGrid!==ge&&(Rt.lightProbeGrid=ge,oi=!0)}if(Cn||Z!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),fe.setValue($,"projectionMatrix",A.projectionMatrix),fe.setValue($,"viewMatrix",A.matrixWorldInverse);const li=fe.map.cameraPosition;li!==void 0&&li.setValue($,oe.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&fe.setValue($,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&fe.setValue($,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,oi=!0,ki=!0)}if(Rt.needsLights&&($e.state.sunShadowMap.length>0&&fe.setValue($,"sunShadowMap",$e.state.sunShadowMap,lt),$e.state.directionalShadowMap.length>0&&fe.setValue($,"directionalShadowMap",$e.state.directionalShadowMap,lt),$e.state.spotShadowMap.length>0&&fe.setValue($,"spotShadowMap",$e.state.spotShadowMap,lt),$e.state.pointShadowMap.length>0&&fe.setValue($,"pointShadowMap",$e.state.pointShadowMap,lt)),it.isSkinnedMesh){fe.setOptional($,it,"bindMatrix"),fe.setOptional($,it,"bindMatrixInverse");const ge=it.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),fe.setValue($,"boneTexture",ge.boneTexture,lt))}it.isBatchedMesh&&(fe.setOptional($,it,"batchingTexture"),fe.setValue($,"batchingTexture",it._matricesTexture,lt),fe.setOptional($,it,"batchingIdTexture"),fe.setValue($,"batchingIdTexture",it._indirectTexture,lt),fe.setOptional($,it,"batchingColorTexture"),it._colorsTexture!==null&&fe.setValue($,"batchingColorTexture",it._colorsTexture,lt));const ai=ot.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Y.update(it,ot,dn),(oi||Rt.receiveShadow!==it.receiveShadow)&&(Rt.receiveShadow=it.receiveShadow,fe.setValue($,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&q.environment!==null&&(we.envMapIntensity.value=q.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=h_()),oi){if(fe.setValue($,"toneMappingExposure",T.toneMappingExposure),Rt.needsLights&&Mf(we,ki),Et&&nt.fog===!0&&Ft.refreshFogUniforms(we,Et),Ft.refreshMaterialUniforms(we,nt,P,R,b.state.transmissionRenderTarget[A.id]),Rt.needsLights&&Rt.lightProbeGrid){const ge=Rt.lightProbeGrid;we.probesSH.value=ge.texture,we.probesMin.value.copy(ge.boundingBox.min),we.probesMax.value.copy(ge.boundingBox.max),we.probesResolution.value.copy(ge.resolution)}Zr.upload($,sc(Rt),we,lt)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Zr.upload($,sc(Rt),we,lt),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&fe.setValue($,"center",it.center),fe.setValue($,"modelViewMatrix",it.modelViewMatrix),fe.setValue($,"normalMatrix",it.normalMatrix),fe.setValue($,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const ge=nt.uniformsGroups;for(let li=0,Bi=ge.length;li<Bi;li++){const ac=ge[li];pt.update(ac,dn),pt.bind(ac,dn)}}return dn}function Mf(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.sunLights.needsUpdate=q,A.sunLightShadows.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function yf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(A,q,ot){const nt=rt.get(A);nt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),rt.get(A.texture).__webglTexture=q,rt.get(A.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ot,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const ot=rt.get(A);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,ot=0){tt=A,J=q,W=ot;let nt=null,it=!1,Et=!1;if(A){const bt=rt.get(A);if(bt.__useDefaultFramebuffer!==void 0){w.bindFramebuffer($.FRAMEBUFFER,bt.__webglFramebuffer),et.copy(A.viewport),ft.copy(A.scissor),N=A.scissorTest,w.viewport(et),w.scissor(ft),w.setScissorTest(N),k=-1;return}else if(bt.__webglFramebuffer===void 0)lt.setupRenderTarget(A);else if(bt.__hasExternalTextures)lt.rebindTextures(A,rt.get(A.texture).__webglTexture,rt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Kt=A.depthTexture;if(bt.__boundDepthTexture!==Kt){if(Kt!==null&&rt.has(Kt)&&(A.width!==Kt.image.width||A.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(A)}}const Pt=A.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Et=!0);const Nt=rt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Nt[q])?nt=Nt[q][ot]:nt=Nt[q],it=!0):A.samples>0&&lt.useMultisampledRTT(A)===!1?nt=rt.get(A).__webglMultisampledFramebuffer:Array.isArray(Nt)?nt=Nt[ot]:nt=Nt,et.copy(A.viewport),ft.copy(A.scissor),N=A.scissorTest}else et.copy(st).multiplyScalar(P).floor(),ft.copy(K).multiplyScalar(P).floor(),N=at;if(ot!==0&&(nt=B),w.bindFramebuffer($.FRAMEBUFFER,nt)&&w.drawBuffers(A,nt),w.viewport(et),w.scissor(ft),w.setScissorTest(N),it){const bt=rt.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+q,bt.__webglTexture,ot)}else if(Et){const bt=q;for(let Pt=0;Pt<A.textures.length;Pt++){const Nt=rt.get(A.textures[Pt]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Pt,Nt.__webglTexture,ot,bt)}}else if(A!==null&&ot!==0){const bt=rt.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,bt.__webglTexture,ot)}k=-1};function oc(A){const q=rt.get(A);return(q.__readFormat!==A.format||q.__readType!==A.type)&&(q.__readFormat=A.format,q.__readType=A.type,q.__formatReadable=U.textureFormatReadable(A.format),q.__typeReadable=U.textureTypeReadable(A.type)),q}this.readRenderTargetPixels=function(A,q,ot,nt,it,Et,Lt,bt=0){if(!(A&&A.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Pt=Pt[Lt]),Pt){w.bindFramebuffer($.FRAMEBUFFER,Pt);try{const Nt=A.textures[bt],Kt=Nt.format,Qt=Nt.type;A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+bt);const It=oc(Nt);if(It.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-nt&&ot>=0&&ot<=A.height-it&&$.readPixels(q,ot,nt,it,yt.convert(Kt),yt.convert(Qt),Et)}finally{const Nt=tt!==null?rt.get(tt).__webglFramebuffer:null;w.bindFramebuffer($.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,q,ot,nt,it,Et,Lt,bt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Pt=Pt[Lt]),Pt)if(q>=0&&q<=A.width-nt&&ot>=0&&ot<=A.height-it){w.bindFramebuffer($.FRAMEBUFFER,Pt);const Nt=A.textures[bt],Kt=Nt.format,Qt=Nt.type;A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+bt);const It=oc(Nt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,le),$.bufferData($.PIXEL_PACK_BUFFER,Et.byteLength,$.STREAM_READ),$.readPixels(q,ot,nt,it,yt.convert(Kt),yt.convert(Qt),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const Ce=tt!==null?rt.get(tt).__webglFramebuffer:null;w.bindFramebuffer($.FRAMEBUFFER,Ce);const _e=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await rd($,_e,4),$.bindBuffer($.PIXEL_PACK_BUFFER,le),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Et),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(le),$.deleteSync(_e),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ot=0){const nt=Math.pow(2,-ot),it=Math.floor(A.image.width*nt),Et=Math.floor(A.image.height*nt),Lt=q!==null?q.x:0,bt=q!==null?q.y:0;lt.setTexture2D(A,0),$.copyTexSubImage2D($.TEXTURE_2D,ot,0,0,Lt,bt,it,Et),w.unbindTexture()},this.copyTextureToTexture=function(A,q,ot=null,nt=null,it=0,Et=0){let Lt,bt,Pt,Nt,Kt,Qt,It,le,Ce;const _e=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(ot!==null)Lt=ot.max.x-ot.min.x,bt=ot.max.y-ot.min.y,Pt=ot.isBox3?ot.max.z-ot.min.z:1,Nt=ot.min.x,Kt=ot.min.y,Qt=ot.isBox3?ot.min.z:0;else{const we=Math.pow(2,-it);Lt=Math.floor(_e.width*we),bt=Math.floor(_e.height*we),A.isDataArrayTexture?Pt=_e.depth:A.isData3DTexture?Pt=Math.floor(_e.depth*we):Pt=1,Nt=0,Kt=0,Qt=0}nt!==null?(It=nt.x,le=nt.y,Ce=nt.z):(It=0,le=0,Ce=0);const pe=yt.convert(q.format),We=yt.convert(q.type);let Rt;q.isData3DTexture?(lt.setTexture3D(q,0),Rt=$.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(lt.setTexture2DArray(q,0),Rt=$.TEXTURE_2D_ARRAY):(lt.setTexture2D(q,0),Rt=$.TEXTURE_2D),w.activeTexture($.TEXTURE0),w.pixelStorei($.UNPACK_FLIP_Y_WEBGL,q.flipY),w.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),w.pixelStorei($.UNPACK_ALIGNMENT,q.unpackAlignment);const $e=w.getParameter($.UNPACK_ROW_LENGTH),re=w.getParameter($.UNPACK_IMAGE_HEIGHT),dn=w.getParameter($.UNPACK_SKIP_PIXELS),Cn=w.getParameter($.UNPACK_SKIP_ROWS),oi=w.getParameter($.UNPACK_SKIP_IMAGES);w.pixelStorei($.UNPACK_ROW_LENGTH,_e.width),w.pixelStorei($.UNPACK_IMAGE_HEIGHT,_e.height),w.pixelStorei($.UNPACK_SKIP_PIXELS,Nt),w.pixelStorei($.UNPACK_SKIP_ROWS,Kt),w.pixelStorei($.UNPACK_SKIP_IMAGES,Qt);const ki=A.isDataArrayTexture||A.isData3DTexture,fe=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const we=rt.get(A),ai=rt.get(q),ge=rt.get(we.__renderTarget),li=rt.get(ai.__renderTarget);w.bindFramebuffer($.READ_FRAMEBUFFER,ge.__webglFramebuffer),w.bindFramebuffer($.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let Bi=0;Bi<Pt;Bi++)ki&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,rt.get(A).__webglTexture,it,Qt+Bi),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,rt.get(q).__webglTexture,Et,Ce+Bi)),$.blitFramebuffer(Nt,Kt,Lt,bt,It,le,Lt,bt,$.DEPTH_BUFFER_BIT,$.NEAREST);w.bindFramebuffer($.READ_FRAMEBUFFER,null),w.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(it!==0||A.isRenderTargetTexture||rt.has(A)){const we=rt.get(A),ai=rt.get(q);w.bindFramebuffer($.READ_FRAMEBUFFER,H),w.bindFramebuffer($.DRAW_FRAMEBUFFER,G);for(let ge=0;ge<Pt;ge++)ki?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,we.__webglTexture,it,Qt+ge):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,we.__webglTexture,it),fe?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ai.__webglTexture,Et,Ce+ge):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,ai.__webglTexture,Et),it!==0?$.blitFramebuffer(Nt,Kt,Lt,bt,It,le,Lt,bt,$.COLOR_BUFFER_BIT,$.NEAREST):fe?$.copyTexSubImage3D(Rt,Et,It,le,Ce+ge,Nt,Kt,Lt,bt):$.copyTexSubImage2D(Rt,Et,It,le,Nt,Kt,Lt,bt);w.bindFramebuffer($.READ_FRAMEBUFFER,null),w.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else fe?A.isDataTexture||A.isData3DTexture?$.texSubImage3D(Rt,Et,It,le,Ce,Lt,bt,Pt,pe,We,_e.data):q.isCompressedArrayTexture?$.compressedTexSubImage3D(Rt,Et,It,le,Ce,Lt,bt,Pt,pe,_e.data):$.texSubImage3D(Rt,Et,It,le,Ce,Lt,bt,Pt,pe,We,_e):A.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Et,It,le,Lt,bt,pe,We,_e.data):A.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Et,It,le,_e.width,_e.height,pe,_e.data):$.texSubImage2D($.TEXTURE_2D,Et,It,le,Lt,bt,pe,We,_e);w.pixelStorei($.UNPACK_ROW_LENGTH,$e),w.pixelStorei($.UNPACK_IMAGE_HEIGHT,re),w.pixelStorei($.UNPACK_SKIP_PIXELS,dn),w.pixelStorei($.UNPACK_SKIP_ROWS,Cn),w.pixelStorei($.UNPACK_SKIP_IMAGES,oi),Et===0&&q.generateMipmaps&&$.generateMipmap(Rt),w.unbindTexture()},this.initRenderTarget=function(A){rt.get(A).__webglFramebuffer===void 0&&lt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?lt.setTextureCube(A,0):A.isData3DTexture?lt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?lt.setTexture2DArray(A,0):lt.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){J=0,W=0,tt=null,w.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const u_="#d8231b",f_=.006,ku="#f7f7f7",je=.0254,Fl={canvas:.038,panel:.022,paper:.012,digital:.012},co={face:.75*je,depth:1.5*je,mat:3*je,lip:.25*je,bevel:.125*je},d_={black:"#161616",white:"#efeee9"},p_={white:"#f4f2ec",black:"#1c1c1c"},m_="#faf9f4",ho={strip:.25*je,depth:2*je,gap:.25*je,below:.25*je},g_="#e3cba2",x_="#111111";function zl(s){const t=s.frame??{on:s.kind==="paper",color:"black",mat:"white"};return t.on?t:null}const Ol=s=>!!s&&s.style==="float";function __(s){const t=zl(s),e=t?Ol(t)?2*(ho.gap+ho.strip):2*(co.mat+co.face):0;return[s.w*je+e,s.h*je+e]}const v_=s=>{const t=zl(s);return t?Ol(t)?ho.depth:co.depth:Fl[s.kind]};async function M_(){const s={},t=async r=>{const o=await fetch(`data/${r}.json?${Date.now()}`,{cache:"no-store"});if(!o.ok)throw new Error(`data/${r}.json: ${o.status}`);return s[r]=o.headers.get("x-rev")??"",o.json()},[e,n,i]=await Promise.all([t("catalogue"),t("layout"),t("images")]);return{catalogue:e,layout:n,images:i,revs:s}}const y_=(s,t)=>`${s}:${t}`,ha=(s,t,e)=>s.paint[y_(t,e)]??s.defaultPaint;function uo(s){if(s.guess)return"";const t=e=>{const n=Math.floor(e+1e-6),i=e-n,r=Math.round(i*8);return r===0?`${n}`:r===8?`${n+1}`:`${n||""}${{1:"⅛",2:"¼",3:"⅜",4:"½",5:"⅝",6:"¾",7:"⅞"}[r]}`};return`${t(s.w)}″ × ${t(s.h)}″`}const sr=s=>s.title.trim()||"Untitled",gh=.004;function S_(s){const t=s.outline,e=t.t,n=[{id:"N",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z0-e,z1:t.z0},a0:t.x0,a1:t.x1,sides:[1]},{id:"S",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z1,z1:t.z1+e},a0:t.x0,a1:t.x1,sides:[-1]},{id:"W",outer:!0,axis:"z",t:e,rect:{x0:t.x0-e,x1:t.x0,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[1]},{id:"E",outer:!0,axis:"z",t:e,rect:{x0:t.x1,x1:t.x1+e,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[-1]}];for(const i of s.walls)if(Math.abs(i.z1-i.z0)<1e-6){const o=Math.min(i.x0,i.x1),a=Math.max(i.x0,i.x1);n.push({id:i.id,outer:!1,axis:"x",t:i.t,rect:{x0:o,x1:a,z0:i.z0-i.t/2,z1:i.z0+i.t/2},a0:o,a1:a,sides:[1,-1]})}else{const o=Math.min(i.z0,i.z1),a=Math.max(i.z0,i.z1);n.push({id:i.id,outer:!1,axis:"z",t:i.t,rect:{x0:i.x0-i.t/2,x1:i.x0+i.t/2,z0:o,z1:a},a0:o,a1:a,sides:[1,-1]})}return n}const w_=(s,t,e)=>t>s.x0+1e-6&&t<s.x1-1e-6&&e>s.z0+1e-6&&e<s.z1-1e-6,xh=(s,t,e,n)=>s.some(i=>i.id!==n&&w_(i.rect,t,e));function _h(s,t,e){let n=[[s,t]];for(const[i,r]of e){const o=[];for(const[a,c]of n){if(r<=a||i>=c){o.push([a,c]);continue}i>a&&o.push([a,i]),r<c&&o.push([r,c])}n=o}return n.filter(([i,r])=>r-i>.05)}function b_(s){var d;const t=S_(s),e=s.outline,n={x0:e.x0,x1:e.x1,z0:e.z0,z1:e.z1},i=s.ceiling,r=s.doorHeight,o={a:s.entrance.x-s.entrance.w/2,b:s.entrance.x+s.entrance.w/2,z:e.z1},a=p=>{const x=s.doors.filter(g=>g.wall===p).map(g=>[Math.min(g.a,g.b),Math.max(g.a,g.b)]);return p==="S"&&x.push([o.a,o.b]),x},c=[],l=[];for(const p of t){for(const g of p.sides){const m=p.rect,S=p.axis==="x"?g>0?m.z1:m.z0:g>0?m.x1:m.x0,E=p.axis==="x"?[0,g]:[g,0],v=[E[1],-E[0]],y=[];for(const M of t){if(M===p)continue;const T=M.rect,L=p.axis==="x"?T.z0:T.x0,D=p.axis==="x"?T.z1:T.x1;if(!(g>0?L<=S+gh&&D>=S+.01:D>=S-gh&&L<=S-.01))continue;const H=p.axis==="x"?T.x0:T.z0,G=p.axis==="x"?T.x1:T.z1;y.push([H,G])}const b=p.outer?p.a0:Math.max(p.a0,p.axis==="x"?n.x0:n.z0),C=p.outer?p.a1:Math.min(p.a1,p.axis==="x"?n.x1:n.z1),_=a(p.id);for(const[M,T]of _h(b,C,y)){const L=D=>{const B=p.axis==="x"?D:S+E[0]*.02,H=p.axis==="x"?S+E[1]*.02:D;return xh(t,B,H,p.id)};c.push({key:`${p.id}:${g}:${M.toFixed(3)}`,wall:p.id,side:g,axis:p.axis,plane:S,u0:M,u1:T,n:E,right:v,cornerA:L(M-.02),cornerB:L(T+.02),freeA:!p.outer&&!L(M-.02)&&Math.abs(M-p.a0)<1e-6,freeB:!p.outer&&!L(T+.02)&&Math.abs(T-p.a1)<1e-6,outer:p.outer,t:p.t,doors:_.map(([D,B])=>[Math.max(D,M),Math.min(B,T)]).filter(([D,B])=>B-D>.01),color:((d=(s.paintAt??[]).find(D=>D.wall===p.id&&D.side===g&&D.u>=M-1e-6&&D.u<=T+1e-6))==null?void 0:d.color)??ha(s,p.id,g)})}}if(p.outer)continue;const x=ha(s,p.id,1);for(const g of[p.a0,p.a1]){const m=g===p.a0?-1:1,S=p.axis==="x"?g+m*.02:(p.rect.x0+p.rect.x1)/2,E=p.axis==="x"?(p.rect.z0+p.rect.z1)/2:g+m*.02;xh(t,S,E,p.id)||(p.axis==="x"?l.push(pi(g,p.rect.z0,g,p.rect.z1,[m,0,0],i,x)):l.push(pi(p.rect.x0,g,p.rect.x1,g,[0,0,m],i,x)))}for(const[g,m]of a(p.id)){const S=p.rect;p.axis==="x"?(l.push(pi(g,S.z0,g,S.z1,[1,0,0],r,x)),l.push(pi(m,S.z0,m,S.z1,[-1,0,0],r,x)),l.push(ua(g,m,S.z0,S.z1,"x",r,x))):(l.push(pi(S.x0,g,S.x1,g,[0,0,1],r,x)),l.push(pi(S.x0,m,S.x1,m,[0,0,-1],r,x)),l.push(ua(g,m,S.x0,S.x1,"z",r,x)))}}const h=.04,u=ha(s,"S",-1);l.push(pi(o.a,e.z1,o.a,e.z1+h,[1,0,0],r,u)),l.push(pi(o.b,e.z1,o.b,e.z1+h,[-1,0,0],r,u)),l.push(ua(o.a,o.b,e.z1,e.z1+h,"x",r,u));const f=[];for(const p of t){const x=p.rect,g=p.axis==="x"?[x.x0,x.x1]:[x.z0,x.z1];for(const[m,S]of _h(g[0],g[1],a(p.id)))f.push(p.axis==="x"?{x0:m,x1:S,z0:x.z0,z1:x.z1}:{x0:x.x0,x1:x.x1,z0:m,z1:S})}return{inner:n,H:i,doorH:r,walls:t,faces:c,extra:l,solids:f,entrance:o,ceilColor:s.ceilingPaint??ku,ceilAt:s.ceilingAt??[]}}function pi(s,t,e,n,i,r,o){const a=e-s,c=n-t,l=a*i[2]-c*i[0],[h,u]=l>0?[[s,t],[e,n]]:[[e,n],[s,t]];return{p:[[h[0],0,h[1]],[u[0],0,u[1]],[u[0],r,u[1]],[h[0],r,h[1]]],n:i,color:o}}function ua(s,t,e,n,i,r,o){const a=(l,h)=>i==="x"?[l,r,h]:[h,r,l];return{p:i==="x"?[a(s,e),a(t,e),a(t,n),a(s,n)]:[a(s,e),a(s,n),a(t,n),a(t,e)],n:[0,-1,0],color:o}}const wi=(s,t,e)=>s.axis==="x"?[t,e,s.plane]:[s.plane,e,t],kl=s=>s.axis==="x"?s.right[0]:s.right[1];function Ni(s,t,e,n,i,r=0){const o=n-t,a=i-e;for(const c of s){let l=0,h=1;const u=(f,d)=>{if(Math.abs(f)<1e-12)return d>=0;const p=d/f;if(f<0){if(p>h)return!1;p>l&&(l=p)}else{if(p<l)return!1;p<h&&(h=p)}return!0};if(u(-o,t-c.x0)&&u(o,c.x1-t)&&u(-a,e-c.z0)&&u(a,c.z1-e)&&h-l>1e-4&&h>r&&l<1-r)return!0}return!1}function E_(s,t=.1){const e=s.inner,n=Math.ceil((e.x1-e.x0)/t),i=Math.ceil((e.z1-e.z0)/t),r=t/2,o=new Int32Array(n*i).fill(-2);for(const l of s.walls){const h=l.rect,u=Math.max(0,Math.floor((h.x0-r-e.x0)/t)),f=Math.min(n-1,Math.floor((h.x1+r-e.x0)/t)),d=Math.max(0,Math.floor((h.z0-r-e.z0)/t)),p=Math.min(i-1,Math.floor((h.z1+r-e.z0)/t));for(let x=d;x<=p;x++)for(let g=u;g<=f;g++)o[x*n+g]=-1}let a=0;const c=[];for(let l=0;l<n*i;l++)if(o[l]===-2){for(o[l]=a,c.push(l);c.length;){const h=c.pop(),u=h%n,f=(h-u)/n;u>0&&o[h-1]===-2&&(o[h-1]=a,c.push(h-1)),u<n-1&&o[h+1]===-2&&(o[h+1]=a,c.push(h+1)),f>0&&o[h-n]===-2&&(o[h-n]=a,c.push(h-n)),f<i-1&&o[h+n]===-2&&(o[h+n]=a,c.push(h+n))}a++}return{x0:e.x0,z0:e.z0,c:t,nx:n,nz:i,id:o,rooms:a}}function T_(s,t,e){const n=Math.floor((t-s.x0)/s.c),i=Math.floor((e-s.z0)/s.c);return n<0||i<0||n>=s.nx||i>=s.nz?-1:s.id[i*s.nx+n]}function A_(s,t){const e=new Array(t.rooms).fill(s.ceilColor);for(const n of s.ceilAt){const i=T_(t,n.x,n.z);i>=0&&(e[i]=n.color)}return e}const us=.125,$s=.086,vh=.12,fo=1e3,po='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',Ks=140,mo=62,Bu=46;let Ds=null;function R_(s){Ds??(Ds=document.createElement("canvas").getContext("2d")),Ds.font=`300 ${Ks}px ${po}`;const t=Ds.measureText(s.title).width;Ds.font=`400 ${mo}px ${po}`;const e=s.sub?Ds.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/fo,h:(Ks+(s.sub?Bu+mo:0)+30)/fo}}const ml=.03,C_=.35,Mh=1.1;function L_(s,t){if(s.text){const n=R_(s.text);return[n.w,n.h]}const e=t.get(s.id);return e?__(e):[.3,.3]}function P_(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function I_(s,t,e,n,i,r){const o=s.u0+i/2+ml,a=s.u1-i/2-ml,c=o>a?(s.u0+s.u1)/2:Math.max(o,Math.min(a,e)),l=r/2+.05,h=t-.12-r/2,u=l>h?t/2:Math.max(l,Math.min(h,n));return{u:c,y:u}}function D_(s,t,e,n,i){const r=kl(s),o=t*r,a=r>0?s.u1:-s.u0;let c=o+n/2+vh+us/2;c+us/2>a-ml&&(c=o-n/2-vh-us/2);const l=Math.max(.2+$s/2,e-i/2+$s/2);return{pos:wi(s,c*r,l),w:us,h:$s}}function U_(s,t,e){const n=[],i=[];for(const c of s.hang){if(!c.text&&(!e.has(c.id)||e.get(c.id).off))continue;const l=P_(t,c);if(!l){n.push(c);continue}const[h,u]=L_(c,e),f=I_(l,t.H,c.u,c.y,h,u);c.u=+f.u.toFixed(4),c.y=+f.y.toFixed(4);const d=c.text?void 0:e.get(c.id);i.push({id:c.id,work:d,text:c.text,place:c,face:l,pos:wi(l,f.u,f.y),w:h,h:u,depth:d?v_(d):.001,label:d?D_(l,f.u,f.y,h,u):null,over:!1})}const r=c=>c.face.axis==="x"?c.pos[0]:c.pos[2];for(let c=0;c<i.length;c++){const l=i[c];for(const[h,u]of l.face.doors)r(l)+l.w/2>h&&r(l)-l.w/2<u&&l.pos[1]-l.h/2<t.doorH&&(l.over=!0);for(let h=c+1;h<i.length;h++){const u=i[h];if(u.face!==l.face)continue;const f=Math.abs(r(l)-r(u))<(l.w+u.w)/2-.005,d=Math.abs(l.pos[1]-u.pos[1])<(l.h+u.h)/2-.005;f&&d&&(l.over=!0,u.over=!0)}}const o=[],a=new Map;for(const c of i)a.has(c.face)||a.set(c.face,[]),a.get(c.face).push(c);for(const[c,l]of a){const h=l.map((x,g)=>g),u=x=>h[x]===x?x:h[x]=u(h[x]);for(let x=0;x<l.length;x++)for(let g=x+1;g<l.length;g++){const m=l[x],S=l[g];if(m.text||S.text)continue;const E=Math.abs(r(m)-r(S))-(m.w+S.w)/2,v=Math.abs(m.pos[1]-S.pos[1])-(m.h+S.h)/2;Math.max(E,v)<C_&&(h[u(x)]=u(g))}const f=new Map;l.forEach((x,g)=>{const m=u(g);f.has(m)||f.set(m,[]),f.get(m).push(x)});const d=[c.n[0],0,c.n[1]],p=[c.right[0],0,c.right[1]];for(const x of f.values()){const g=Math.min(...x.map(b=>r(b)-b.w/2)),m=Math.max(...x.map(b=>r(b)+b.w/2)),S=Math.min(...x.map(b=>b.pos[1]-b.h/2)),E=Math.max(...x.map(b=>b.pos[1]+b.h/2)),v=wi(c,(g+m)/2,(S+E)/2),y={w:m-g,h:E-S};o.push({face:c,centre:v,normal:d,right:p,w:y.w,h:y.h,items:x,lamp:N_(v,d,p,y,x,t)})}}return{placed:o,items:i,homeless:n}}function N_(s,t,e,n,i,r){const o=r.H-.03;let a=Mh;for(let S=.2;S<=Mh+.25;S+=.05)if(Ni(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*S,s[2]+t[2]*S)){a=Math.max(.35,(S-.25)*.8);break}const c=[s[0]+t[0]*a,o,s[2]+t[2]*a],l=i.reduce((S,E)=>S+E.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*l,s[1],s[2]+t[2]*l],u=[h[0]-c[0],h[1]-c[1],h[2]-c[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let p=0;for(const[S,E]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*S*n.w/2-c[0],s[1]+E*n.h/2-c[1],s[2]+e[2]*S*n.w/2-c[2]],y=Math.hypot(v[0],v[1],v[2]);p=Math.max(p,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/y)))}p+=1.5*Math.PI/180;const x=p+6*Math.PI/180,g=[-u[0]/f,-u[1]/f,-u[2]/f],m=g[0]*t[0]+g[2]*t[2];return{p:c,d,cOuter:Math.cos(x),cInner:Math.cos(p),i:f*f/Math.max(.2,m)}}const F_=1.45,Hu=.07,Gu=.07,Vu=.125,z_=.086,Wu=.12,O_=1.3,Xu=.16,yh=1e3,Sh='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',wh=140,bh=62,k_=46,B_=1.6;let Us=null;function qu(s){Us??(Us=document.createElement("canvas").getContext("2d")),Us.font=`300 ${wh}px ${Sh}`;const t=Us.measureText(s.title).width;Us.font=`400 ${bh}px ${Sh}`;const e=s.sub?Us.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/yh,h:(wh+(s.sub?k_+bh:0)+30)/yh,colW:[],colH:[]}}const H_=6400;function G_(s){return s.map(t=>({title:sr(t),detail:[t.medium,uo(t),t.year].filter(Boolean).join(", ")}))}const V_=s=>(150+G_(s).reduce((t,e)=>t+92+(e.detail?58:0),0))/H_,Eh=.45,Th=.25,fa=.4,Ah=.12,Rh=1.1,gl=s=>[s.w*je,s.h*je];function Yu(s,t){const e=[],n=[];for(const o of s){const a=o.map(c=>t.get(c)).filter(Boolean);e.push(Math.max(0,...a.map(c=>gl(c)[0]))),n.push(a.reduce((c,l)=>c+gl(l)[1],0)+Gu*Math.max(0,a.length-1))}const i=e.reduce((o,a)=>o+a,0)+Hu*Math.max(0,s.length-1),r=Math.max(0,...n);return{w:i,h:r,colW:e,colH:n}}const W_=s=>s.cols.reduce((t,e)=>t+e.length,0),X_=s=>W_(s)>1?Xu:Vu,q_=(s,t)=>s.text?qu(s.text).w:Yu(s.cols,t).w+Wu+X_(s);function Y_(s){const t=[];let e=s.u0+(s.cornerA?Eh:Th);const n=s.u1-(s.cornerB?Eh:Th);for(const[i,r]of[...s.doors].sort((o,a)=>o[0]-a[0]))i-fa-e>.3&&t.push([e,i-fa]),e=Math.max(e,r+fa);return n-e>.3&&t.push([e,n]),t}function $_(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function K_(s,t,e){const n=new Map,i=[];for(const o of s.hang){if(!o.text&&(o.cols=o.cols.map(c=>c.filter(l=>e.has(l))).filter(c=>c.length),!o.cols.length))continue;const a=$_(t,o);if(!a){i.push(o);continue}n.has(a)||n.set(a,[]),n.get(a).push(o)}const r=[];for(const[o,a]of n){const c=Y_(o);if(!c.length){i.push(...a);continue}const l=c.map(()=>[]);for(const u of a){let f=0,d=1/0;c.forEach(([p,x],g)=>{const m=u.u<p?p-u.u:u.u>x?u.u-x:0;m<d&&(d=m,f=g)}),l[f].push(u)}const h=kl(o);c.forEach(([u,f],d)=>{const p=l[d].sort((b,C)=>(b.u-C.u)*h);if(!p.length)return;const x=p.map(b=>q_(b,e)),g=f-u,m=x.reduce((b,C)=>b+C,0);let S=(g-m)/(p.length+1);const E=S<Ah;E&&(S=Ah);const v=m+S*(p.length+1);let y=(h>0?u:-f)+(g-v)/2+S;p.forEach((b,C)=>{const _=b.text?qu(b.text):Yu(b.cols,e),T=(y+_.w/2)*h;b.u=+T.toFixed(4),r.push(Z_(b,o,T,_,e,t,E)),y+=x[C]+S})})}return{placed:r,homeless:i}}function Z_(s,t,e,n,i,r,o){const a=kl(t),c=[t.n[0],0,t.n[1]],l=[t.right[0],0,t.right[1]];let h=s.text?B_:F_;h-n.h/2<.35&&(h=.35+n.h/2),h+n.h/2>r.H-.3&&(h=Math.max(n.h/2+.1,r.H-.3-n.h/2));const u=[];let f=-n.w/2;s.cols.forEach((E,v)=>{const y=n.colW[v],b=n.colH[v];let C=h+b/2;for(const _ of E){const M=i.get(_),[T,L]=gl(M),D=f+y/2;u.push({work:M,pos:wi(t,e+D*a,C-L/2),w:T,h:L,depth:Fl[M.kind]}),C-=L+Gu}f+=y+Hu});const d=s.cols.flat().map(E=>i.get(E)),p=d.length>1?Xu:Vu,x=d.length>1?V_(d):z_,g=e+(n.w/2+Wu+p/2)*a,m=Math.min(O_,h+n.h/2-x/2),S=wi(t,e,h);return{def:s,face:t,centre:S,normal:c,right:l,w:n.w,h:n.h,items:u,label:{pos:wi(t,g,Math.max(m,.3+x/2)),w:p,h:x,works:d},lamp:J_(S,c,l,n,u,r),over:o,text:s.text}}function J_(s,t,e,n,i,r){const o=r.H-.03;let a=Rh;for(let S=.2;S<=Rh+.25;S+=.05)if(Ni(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*S,s[2]+t[2]*S)){a=Math.max(.35,(S-.25)*.8);break}const c=[s[0]+t[0]*a,o,s[2]+t[2]*a],l=i.reduce((S,E)=>S+E.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*l,s[1],s[2]+t[2]*l],u=[h[0]-c[0],h[1]-c[1],h[2]-c[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let p=0;for(const[S,E]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*S*n.w/2-c[0],s[1]+E*n.h/2-c[1],s[2]+e[2]*S*n.w/2-c[2]],y=Math.hypot(v[0],v[1],v[2]);p=Math.max(p,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/y)))}p+=1.5*Math.PI/180;const x=p+6*Math.PI/180,g=[-u[0]/f,-u[1]/f,-u[2]/f],m=g[0]*t[0]+g[2]*t[2];return{p:c,d,cOuter:Math.cos(x),cInner:Math.cos(p),i:f*f/Math.max(.2,m)}}function Q_(s,t,e){if(s.version===2||!s.hang.some(o=>"cols"in o))return!1;const{placed:n}=K_(s,t,e),i=[],r=(o,a)=>+(o.axis==="x"?a[0]:a[2]).toFixed(4);for(const o of n){const a=o.face;o.text&&i.push({id:o.def.id,wall:a.wall,side:a.side,u:r(a,o.centre),y:+o.centre[1].toFixed(4),text:o.text});for(const c of o.items)i.push({id:c.work.id,wall:a.wall,side:a.side,u:r(a,c.pos),y:+c.pos[1].toFixed(4)})}return s.hang=i,s.version=2,!0}const j_=["b","c","s","t","sh","hl"],$u=s=>!s||j_.every(t=>!s[t]);function Ku(s){const t=e=>(s==null?void 0:s[e])??0;return{warm:[1+.1*t("t"),1,1-.1*t("t")],gamma:2**(-.8*t("b")),contrast:2**(.8*t("c")),sh:t("sh"),hl:t("hl"),sat:1+t("s")}}const Ch=s=>Math.min(1,Math.max(0,s));function tv(s,t){let e=Math.pow(s,t.gamma);e=Ch(.5+(e-.5)*t.contrast);const n=e*(1-e)*(1-e)*6.75,i=e*e*(1-e)*6.75;return Ch(e+t.sh*.25*n+t.hl*.25*i)}const ev=`
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
  }`;function nv(s){const t=Ku(s);return{uAdj:{value:$u(s)?0:1},uWarm:{value:new F(...t.warm)},uGamma:{value:t.gamma},uContrast:{value:t.contrast},uShadows:{value:t.sh},uHigh:{value:t.hl},uSat:{value:t.sat}}}let mi=null;const Lh="http://www.w3.org/2000/svg";function iv(s,t){if($u(t))return"";mi||(mi=document.createElementNS(Lh,"svg"),mi.setAttribute("width","0"),mi.setAttribute("height","0"),mi.style.position="absolute",document.body.append(mi));const e=`adj-${s}`;let n=mi.querySelector(`#${CSS.escape(e)}`);n||(n=document.createElementNS(Lh,"filter"),n.id=e,n.setAttribute("color-interpolation-filters","sRGB"),mi.append(n));const i=Ku(t),[r,,o]=i.warm,a=[.2126,.7152,.0722],c=i.sat,l=Array.from({length:65},(u,f)=>tv(f/64,i).toFixed(4)).join(" "),h=[0,1,2].map(u=>[0,1,2].map(f=>((1-c)*a[f]+(u===f?c:0)).toFixed(4)).join(" ")+" 0 0").join("  ")+"  0 0 0 1 0";return n.innerHTML=`<feColorMatrix type="matrix" values="${r} 0 0 0 0  0 1 0 0 0  0 0 ${o} 0 0  0 0 0 1 0"/><feComponentTransfer><feFuncR type="table" tableValues="${l}"/><feFuncG type="table" tableValues="${l}"/><feFuncB type="table" tableValues="${l}"/></feComponentTransfer><feColorMatrix type="matrix" values="${h}"/>`,`url(#${e})`}const Zn=16,cs=48,Bl=new kt(1,.965,.915),Zu=.72,sv=.55,Ju=1,Hl=4,rv=.6,Qu=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int k = 0; k < 4; k++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,Gl=`
uniform sampler2D uAO;
uniform sampler2D uLT;
uniform vec2 uBO;
uniform vec4 uAoXf;
uniform vec4 uLtXf;
vec2 bakeUv(vec2 xz, vec4 xf) { return (xz - uBO) * xf.xy + xf.zw; }
float bakedAO(vec2 xz) { return texture2D(uAO, bakeUv(xz, uAoXf)).r; }
vec3 bakedLight(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).rgb; }
float bakedSpill(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).a; }
`,ju=`
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
`,Vl=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`,Wl=s=>({uAO:{value:s.ao},uLT:{value:s.light},uBO:{value:s.origin},uAoXf:{value:s.aoXf},uLtXf:{value:s.lightXf}}),tf=s=>({uCeilTex:{value:s.tex},uCeilO:{value:s.origin},uCeilS:{value:s.scale}}),ef=`
  uniform sampler2D uCeilTex; uniform vec2 uCeilO; uniform vec2 uCeilS;
  vec3 ceilingAt(vec2 xz) { return texture2D(uCeilTex, (xz - uCeilO) * uCeilS).rgb; }
`;function Ph(s,t,e,n,i){const r=(o,a,c)=>{const l=o.slice(0,a);for(;l.length<a;)l.push(c());return l};return new on({uniforms:{uN:{value:Math.min(s.lamps.length,Zn)},uLP:{value:r(s.lamps.map(o=>o.p),Zn,()=>new F)},uLD:{value:r(s.lamps.map(o=>o.d),Zn,()=>new F(0,-1,0))},uLC:{value:r(s.lamps.map(o=>o.c),Zn,()=>new Bt(1,1))},uLI:{value:r(s.lamps.map(o=>o.i),Zn,()=>0)},uB:{value:Math.min(s.boxes.length,cs)},uBC:{value:r(s.boxes.map(o=>o.c),cs,()=>new F(0,-99,0))},uBS:{value:r(s.boxes.map(o=>o.s),cs,()=>new F)},uBL:{value:r(s.boxes.map(o=>o.lamp),cs,()=>0)},uFN:{value:s.normal},uFR:{value:s.right},uAxisX:{value:s.axisX?1:0},uU0:{value:s.u0},uU1:{value:s.u1},uCA:{value:s.cornerA?1:0},uCB:{value:s.cornerB?1:0},uH:{value:e},uAlb:{value:t},uAmb:{value:Zu},uBounceK:{value:Hl},uLampK:{value:sv},uCeilK:{value:Ju},...tf(i),uLCol:{value:Bl},...Wl(n)},vertexShader:ju,fragmentShader:`
      #define MAXL ${Zn}
      #define MAXB ${cs}
      uniform int uN;
      uniform vec3 uLP[MAXL]; uniform vec3 uLD[MAXL]; uniform vec2 uLC[MAXL]; uniform float uLI[MAXL];
      uniform int uB;
      uniform vec3 uBC[MAXB]; uniform vec3 uBS[MAXB]; uniform float uBL[MAXB];
      uniform vec3 uFN; uniform vec3 uFR;
      uniform float uAxisX, uU0, uU1, uCA, uCB, uH;
      uniform vec3 uAlb; uniform float uAmb; uniform float uBounceK; uniform float uLampK; uniform float uCeilK; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${ef}
      ${Gl}
      ${Qu}
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
        ${Vl}
      }`})}function ov(s,t){return new on({uniforms:{uAmb:{value:Ju},uBounceK:{value:Hl},...tf(t),...Wl(s)},vertexShader:ju,fragmentShader:`
      uniform float uAmb; uniform float uBounceK;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${Gl}
      ${ef}
      void main() {
        float ao = mix(1.0, bakedAO(vW.xz), 0.3);
        vec3 l = vec3(uAmb) * ao + uBounceK * 0.5 * bakedLight(vW.xz) * ao;
        gl_FragColor = vec4(ceilingAt(vW.xz) * l, 1.0);
        ${Vl}
      }`})}function av(s,t,e){return new on({uniforms:{uRefl:{value:s},uTexMat:{value:t},uAmb:{value:Zu},uBounceK:{value:Hl},uSpillK:{value:rv},...Wl(e)},vertexShader:`
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
      ${Gl}
      ${Qu}
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
        ${Vl}
      }`})}function da(s,t,e,n){return new on({uniforms:{uMap:{value:s},...nv(n),uLP:{value:t.p},uLD:{value:t.d},uLC:{value:t.c},uLI:{value:t.i},uSide:{value:e??new kt(1,1,1)},uSideMode:{value:e?1:0},uLCol:{value:Bl}},toneMapped:!1,vertexShader:`
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
      ${ev}
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
        // light on the front is ~1 at the centre; mix a touch of the lamp's warmth in. A frame's sides,
        // turned from the lamp, still get the room's light (wood there isn't black)
        float amb = vSide > 1.5 ? mix(0.24, 0.07, clamp(e, 0.0, 1.0)) : 0.07;
        vec3 lit = c * (amb + 0.95 * e * mix(vec3(1.0), uLCol, 0.35));
        gl_FragColor = vec4(lit, 1.0);
        #include <colorspace_fragment>
      }`})}const Ns=.05,Fs=.2;function lv(s,t,e){const n=s.inner,i=n.x1-n.x0,r=n.z1-n.z0,o=Math.ceil(i/Ns)+1,a=Math.ceil(r/Ns)+1,c=new Uint8Array(o*a),l=s.solids;for(let E=0;E<a;E++){const v=n.z0+E*Ns;for(let y=0;y<o;y++){const b=n.x0+y*Ns;let C=1;for(const _ of l){const M=Math.max(_.x0-b,0,b-_.x1),T=Math.max(_.z0-v,0,v-_.z1),L=M*M+T*T;L>1.44||(C*=1-.42*Math.exp(-Math.sqrt(L)/.28))}c[E*o+y]=Math.round(Math.max(0,Math.min(1,C))*255)}}const h=Math.ceil(i/Fs)+1,u=Math.ceil(r/Fs)+1,f=new Float32Array(h*u*4),d=Bl,p=t.map(E=>{const v=new kt(E.face.color),b=(E.w+.5)*(E.h+1)*.7*.55;return{c:[E.centre[0]+E.normal[0]*.05,1.2,E.centre[2]+E.normal[2]*.05],n:E.normal,rgb:[v.r*d.r*b,v.g*d.g*b,v.b*d.b*b],lamp:E.lamp}});for(let E=0;E<u;E++){const v=n.z0+E*Fs;for(let y=0;y<h;y++){const b=n.x0+y*Fs;let C=0,_=0,M=0,T=0;for(const D of p){const B=b-D.c[0],H=v-D.c[2],G=B*B+H*H;if(G>64)continue;const J=B*D.n[0]+H*D.n[2];if(J>.02){const X=Math.max(G+D.c[1]*D.c[1],.3),O=Math.sqrt(X),z=J/O*(D.c[1]/O)/(Math.PI*X);z>5e-4&&!Ni(s.solids,D.c[0],D.c[2],b,v)&&(C+=D.rgb[0]*z,_+=D.rgb[1]*z,M+=D.rgb[2]*z)}const W=D.lamp,tt=b-W.p[0],k=-W.p[1],Z=v-W.p[2],et=tt*tt+k*k+Z*Z,ft=Math.sqrt(et),N=(tt*W.d[0]+k*W.d[1]+Z*W.d[2])/ft;if(N>W.cOuter){const X=Math.min(1,(N-W.cOuter)/(W.cInner-W.cOuter)),O=X*X*(3-2*X),z=W.i*O*(W.p[1]/ft)/et;z>.002&&!Ni(s.solids,W.p[0],W.p[2],b,v)&&(T+=z)}}const L=(E*h+y)*4;f[L]=C,f[L+1]=_,f[L+2]=M,f[L+3]=T}}e==null||e.ao.dispose(),e==null||e.light.dispose();const x=new xs(c,o,a,yo,sn);x.magFilter=x.minFilter=Be,x.needsUpdate=!0;const g=new Uint16Array(f.length);for(let E=0;E<f.length;E++)g[E]=kd.toHalfFloat(f[E]);const m=new xs(g,h,u,fn,Mn);m.magFilter=m.minFilter=Be,m.needsUpdate=!0;const S=(E,v,y)=>new xe(1/(E*v),1/(E*y),.5/v,.5/y);return{ao:x,light:m,origin:new Bt(n.x0,n.z0),aoXf:S(Ns,o,a),lightXf:S(Fs,h,u)}}const Oe=.15,He=8,Jn=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],qn=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],zr=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],Ih=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],Dh=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],cv=[0,1,0];class nf{constructor(){I(this,"pos",[]);I(this,"nor",[]);I(this,"idx",[])}v(t,e){return this.pos.push(t[0],t[1],t[2]),this.nor.push(e[0],e[1],e[2]),this.pos.length/3-1}quad(t,e){const n=t.map((o,a)=>this.v(o,e[a])),i=Ih(zr(t[2],t[0]),zr(t[3],t[1])),r=Jn(Jn(e[0],e[1]),Jn(e[2],e[3]));Dh(i,r)>=0?this.idx.push(n[0],n[1],n[2],n[0],n[2],n[3]):this.idx.push(n[0],n[2],n[1],n[0],n[3],n[2])}tri(t,e){const n=t.map(i=>this.v(i,e));Dh(Ih(zr(t[1],t[0]),zr(t[2],t[0])),e)>=0?this.idx.push(n[0],n[1],n[2]):this.idx.push(n[0],n[2],n[1])}get empty(){return this.idx.length===0}geometry(){const t=new Ee;return t.setAttribute("position",new qt(this.pos,3)),t.setAttribute("normal",new qt(this.nor,3)),t.setAttribute("uv",new qt(new Array(this.pos.length/3*2).fill(0),2)),t.setIndex(this.idx),t}}const sf=(s,t)=>s?Oe:Math.max(0,Math.min(Oe,t/2-.002));function hv(s,t,e){const n=new nf,i=[s.n[0],0,s.n[1]],r=s.axis==="x"?[1,0,0]:[0,0,1],o=(_,M,T)=>{const L=wi(s,_,T);return[L[0]+i[0]*M,T,L[2]+i[2]*M]},a=sf(s.outer,s.t),c=t-Oe,l=Math.min(e,c),h=s.cornerA?"in":s.freeA?"free":"flat",u=s.cornerB?"in":s.freeB?"free":"flat",f=s.u0+(h==="in"?Oe:h==="free"?a:0),d=s.u1-(u==="in"?Oe:u==="free"?a:0);if(d-f<.01)return n;const p=(_,M,T,L)=>{M-_<1e-4||L-T<1e-4||n.quad([o(_,0,T),o(M,0,T),o(M,0,L),o(_,0,L)],[i,i,i,i])},x=[...s.doors].sort((_,M)=>_[0]-M[0]);if(!x.length)p(f,d,0,c);else{let _=f;for(const[M,T]of x)p(_,Math.min(d,M-a),0,l),_=Math.max(_,T+a);p(_,d,0,l),p(f,d,l,c)}const g=(_,M,T,L)=>{if(a<.01)return;const D=B=>Jn(qn(i,Math.cos(B)),qn(M,Math.sin(B)));for(let B=0;B<He;B++){const H=B/He*Math.PI/2,G=(B+1)/He*Math.PI/2,J=(W,tt)=>Jn(o(_,-a,tt),qn(D(W),a));n.quad([J(H,T),J(G,T),J(G,L),J(H,L)],[D(H),D(G),D(G),D(H)])}},m=_=>[-_[0],-_[1],-_[2]];for(const[_,M]of x)_-s.u0>a+.01&&g(_-a,r,0,l),s.u1-M>a+.01&&g(M+a,m(r),0,l);h==="free"&&g(s.u0+a,m(r),0,t),u==="free"&&g(s.u1-a,r,0,t);const S=(_,M)=>{const T=Jn(Jn(o(_,0,0),qn(i,Oe)),qn(M,Oe)),L=B=>Jn(qn(i,Math.cos(B)),qn(M,Math.sin(B))),D=Math.PI/4;for(let B=0;B<He/2;B++){const H=B/(He/2)*D,G=(B+1)/(He/2)*D,J=(W,tt)=>[T[0]-Oe*L(W)[0],tt,T[2]-Oe*L(W)[2]];n.quad([J(H,0),J(G,0),J(G,c),J(H,c)],[L(H),L(G),L(G),L(H)]);for(let W=0;W<He;W++){const tt=W/He*Math.PI/2,k=(W+1)/He*Math.PI/2,Z=(ft,N)=>{const X=L(ft);return[T[0]-Oe*Math.cos(N)*X[0],c+Oe*Math.sin(N),T[2]-Oe*Math.cos(N)*X[2]]},et=(ft,N)=>{const X=L(ft);return[Math.cos(N)*X[0],-Math.sin(N),Math.cos(N)*X[2]]};n.quad([Z(H,tt),Z(G,tt),Z(G,k),Z(H,k)],[et(H,tt),et(G,tt),et(G,k),et(H,k)])}}};h==="in"&&S(s.u0,r),u==="in"&&S(s.u1,m(r));const E=h==="in"?s.u0+Oe:f,v=u==="in"?s.u1-Oe:d,y=(_,M)=>o(_,Oe-Oe*Math.cos(M),c+Oe*Math.sin(M)),b=_=>Jn(qn(i,Math.cos(_)),qn(cv,-Math.sin(_)));for(let _=0;_<He;_++){const M=_/He*Math.PI/2,T=(_+1)/He*Math.PI/2;n.quad([y(E,M),y(v,M),y(v,T),y(E,T)],[b(M),b(M),b(T),b(T)])}const C=(_,M)=>{const T=o(_,0,t);for(let L=0;L<He;L++){const D=L/He*Math.PI/2,B=(L+1)/He*Math.PI/2;n.tri([T,y(_,D),y(_,B)],M)}};return h!=="in"&&C(E,m(r)),u!=="in"&&C(v,r),n}function uv(s,t){const e=new Map,n=a=>(e.has(a)||e.set(a,new nf),e.get(a)),i=s.H,r=Math.min(s.doorH,i-Oe),o=a=>{var c,l;return((c=s.faces.find(h=>h.wall===a&&h.side===1))==null?void 0:c.color)??((l=s.faces.find(h=>h.wall===a))==null?void 0:l.color)??"#f2f1ee"};for(const a of s.walls){const c=a.id==="S";if(a.outer&&!c)continue;const l=n(o(a.id)),h=(E,v,y)=>a.axis==="x"?[E,y,v]:[v,y,E],u=a.axis==="x"?[1,0,0]:[0,0,1];a.axis;const[f,d]=a.axis==="x"?[a.rect.z0,a.rect.z1]:[a.rect.x0,a.rect.x1],p=sf(a.outer,a.t),x=c?[{c:f,s:-1}]:[{c:f,s:-1},{c:d,s:1}],g=f+p,m=c?f+t:d-p,S=c?[[s.entrance.a,s.entrance.b]]:s.faces.filter(E=>E.wall===a.id).flatMap(E=>E.doors).filter((E,v,y)=>y.findIndex(b=>Math.abs(b[0]-E[0])<1e-6)===v);for(const[E,v]of S){const y=(_,M)=>{m-g>.001&&l.quad([h(_,g,0),h(_,m,0),h(_,m,r),h(_,g,r)],[M,M,M,M])};y(E,u),y(v,[-u[0],0,-u[2]]);const b=[0,-1,0],C=c?f+t:d;l.quad([h(E,f,r),h(v,f,r),h(v,C,r),h(E,C,r)],[b,b,b,b]);for(const{c:_,s:M}of x)for(const[T,L]of[[E,1],[v,-1]]){if(p<.01)continue;const D=T-L*p,B=_-M*p,H=h(T,_,r);for(let G=0;G<He;G++){const J=W=>{const tt=W/He*Math.PI/2;return h(D+L*p*Math.sin(tt),B+M*p*Math.cos(tt),r)};l.tri([H,J(G),J(G+1)],b)}}}if(!a.outer)for(const E of s.faces.filter(v=>v.wall===a.id&&v.side===1)){const v=(y,b)=>{d-p-(f+p)>.001&&l.quad([h(y,f+p,0),h(y,d-p,0),h(y,d-p,i),h(y,f+p,i)],[b,b,b,b])};E.freeA&&v(E.u0,[-u[0],0,-u[2]]),E.freeB&&v(E.u1,u)}}return e}const Uh=new kt(1,1,1),rf=.2;function fv(s,t,e,n){const i=new Pe;s.background=Uh,s.fog=null;const r=n.outline,o=r.t-rf,a=r.x0-r.t,c=r.x1+r.t,l=r.z0-r.t,h=r.z1+r.t,u=n.ceiling,f=n.doorHeight,d=u+1.4,p=n.entrance.x-n.entrance.w/2,x=n.entrance.x+n.entrance.w/2,g=n.entrance.x,m=new zn({color:Uh,toneMapped:!1}),S=(_,M,T,L,D,B)=>{const H=new Te(new vn(L,D,B),m);return H.position.set(_,M,T),H.userData.outside=!0,i.add(H),H},E=-.5,v=d,y=(E+v)/2,b=v-E;S((a+p)/2,y,h-o/2,p-a,b,o),S((x+c)/2,y,h-o/2,c-x,b,o),S(g,(f+v)/2,h-o/2,x-p,v-f,o),S((a+c)/2,y,l+o/2,c-a,b,o),S(a+o/2,y,(l+h)/2,o,b,h-l-2*o),S(c-o/2,y,(l+h)/2,o,b,h-l-2*o),S((a+c)/2,(u+v)/2+.05,(l+h)/2,c-a-.02,v-u-.1,h-l-.02);const C=new Te(new Bn(400,400).rotateX(-Math.PI/2),m);return C.position.y=-.002,i.add(C),s.add(i),{group:i,dispose(){s.remove(i),i.traverse(_=>{var L;const M=_;M.geometry&&M.geometry.dispose();const T=Array.isArray(M.material)?M.material:M.material?[M.material]:[];for(const D of T)(L=D.map)==null||L.dispose(),D.dispose()})}}}class Nh{constructor(){I(this,"pos",[]);I(this,"nor",[]);I(this,"uv",[]);I(this,"idx",[])}add(t,e){const n=this.pos.length/3;for(const i of t)this.pos.push(i[0],i[1],i[2]),this.nor.push(e[0],e[1],e[2]);this.uv.push(0,0,1,0,1,1,0,1),this.idx.push(n,n+1,n+2,n,n+2,n+3)}geometry(){const t=new Ee;return t.setAttribute("position",new qt(this.pos,3)),t.setAttribute("normal",new qt(this.nor,3)),t.setAttribute("uv",new qt(this.uv,2)),t.setIndex(this.idx),t}}const rr=s=>new F(s[0],s[1],s[2]),of=s=>({p:rr(s.p),d:rr(s.d),c:new Bt(s.cOuter,s.cInner),i:s.i});function dv(s,t,e){const n=t.filter(l=>l.face===s),i=n.map(l=>l.lamp),r=[],o=[],a=Math.min(40,Math.max(2,Math.ceil((s.u1-s.u0)/.5)));for(let l=0;l<=a;l++){const h=s.u0+(s.u1-s.u0)*l/a;for(const u of[.4,1.4,2.4])o.push(wi(s,h,u))}for(const l of t){if(l.face===s)continue;const h=l.lamp,u=o[0];if((h.p[0]-u[0])*s.n[0]+(h.p[2]-u[2])*s.n[1]<.1)continue;let d=1/0;for(const p of o){const x=p[0]-h.p[0],g=p[1]-h.p[1],m=p[2]-h.p[2],S=Math.hypot(x,g,m);S>7||(x*h.d[0]+g*h.d[1]+m*h.d[2])/S<=h.cOuter||Ni(e.solids,h.p[0],h.p[2],p[0]+s.n[0]*.03,p[2]+s.n[1]*.03)||(d=Math.min(d,S))}d<1/0&&r.push({L:h,d})}r.sort((l,h)=>l.d-h.d);for(const l of r){if(i.length>=Zn)break;i.push(l.L)}const c=[];return n.forEach((l,h)=>{if(!(h>=Zn))for(const u of l.items)c.length>=cs||u.text||c.push({c:rr(u.pos),s:new F(u.w/2,u.h/2,u.depth),lamp:h})}),{lamps:i.slice(0,Zn).map(of),boxes:c,normal:new F(s.n[0],0,s.n[1]),right:new F(s.right[0],0,s.right[1]),axisX:s.axis==="x",u0:s.u0,u1:s.u1,cornerA:s.cornerA,cornerB:s.cornerB}}const pv={lamps:[],boxes:[],normal:new F(0,0,1),right:new F(1,0,0),axisX:!0,u0:0,u1:0,cornerA:!1,cornerB:!1};function Fh(s,t,e,n=[0,1,0,1]){const[i,r,o,a]=n,c=[],l=[],h=[],u=[],f=[],d=(b,C,_,M)=>{const T=c.length/3;b.forEach((L,D)=>{c.push(...L),l.push(...C),h.push(..._[D]),u.push(M)}),f.push(T,T+1,T+2,T,T+2,T+3)},p=s/2,x=t/2,g=.004,m=i+g,S=r-g,E=o+g,v=a-g;d([[-p,-x,e],[p,-x,e],[p,x,e],[-p,x,e]],[0,0,1],[[i,o],[r,o],[r,a],[i,a]],0),d([[-p,x,e],[p,x,e],[p,x,0],[-p,x,0]],[0,1,0],[[i,v],[r,v],[r,v],[i,v]],1),d([[-p,-x,0],[p,-x,0],[p,-x,e],[-p,-x,e]],[0,-1,0],[[i,E],[r,E],[r,E],[i,E]],1),d([[-p,-x,0],[-p,-x,e],[-p,x,e],[-p,x,0]],[-1,0,0],[[m,o],[m,o],[m,a],[m,a]],1),d([[p,-x,e],[p,-x,0],[p,x,0],[p,x,e]],[1,0,0],[[S,o],[S,o],[S,a],[S,a]],1);const y=new Ee;return y.setAttribute("position",new qt(c,3)),y.setAttribute("normal",new qt(l,3)),y.setAttribute("uv",new qt(h,2)),y.setAttribute("aSide",new qt(u,1)),y.setIndex(f),y}function mv(s,t,e,n=[0,1,0,1]){const{face:i,depth:r,mat:o,lip:a,bevel:c}=co,l=s/2,h=t/2,u=l+o+i,f=h+o+i,d=l+o,p=h+o,x=l+c,g=h+c,m=r-a,S=m-c,E=new kt(d_[e.color]),v=new kt(p_[e.mat]),y=new kt(m_),b=[],C=[],_=[],M=[],T=[],L=[],D=k=>new F(k[0],k[1],k[2]),B=(k,Z,et,ft=[[0,0],[0,0],[0,0],[0,0]])=>{const N=new F().crossVectors(D(k[1]).sub(D(k[0])),D(k[3]).sub(D(k[0]))).normalize();N.dot(D(Z))<0&&(k=[k[0],k[3],k[2],k[1]],ft=[ft[0],ft[3],ft[2],ft[1]],N.negate());const X=b.length/3;k.forEach((O,z)=>{b.push(...O),C.push(N.x,N.y,N.z),_.push(...ft[z]),M.push(et?2:0),T.push(...et?[et.r,et.g,et.b]:[0,0,0])}),L.push(X,X+1,X+2,X,X+2,X+3)};B([[-u,p,r],[u,p,r],[u,f,r],[-u,f,r]],[0,0,1],E),B([[-u,-f,r],[u,-f,r],[u,-p,r],[-u,-p,r]],[0,0,1],E),B([[-u,-p,r],[-d,-p,r],[-d,p,r],[-u,p,r]],[0,0,1],E),B([[d,-p,r],[u,-p,r],[u,p,r],[d,p,r]],[0,0,1],E),B([[-u,f,0],[u,f,0],[u,f,r],[-u,f,r]],[0,1,0],E),B([[-u,-f,0],[u,-f,0],[u,-f,r],[-u,-f,r]],[0,-1,0],E),B([[-u,-f,0],[-u,f,0],[-u,f,r],[-u,-f,r]],[-1,0,0],E),B([[u,-f,0],[u,f,0],[u,f,r],[u,-f,r]],[1,0,0],E),B([[-d,p,m],[d,p,m],[d,p,r],[-d,p,r]],[0,-1,0],E),B([[-d,-p,m],[d,-p,m],[d,-p,r],[-d,-p,r]],[0,1,0],E),B([[-d,-p,m],[-d,p,m],[-d,p,r],[-d,-p,r]],[1,0,0],E),B([[d,-p,m],[d,p,m],[d,p,r],[d,-p,r]],[-1,0,0],E),B([[-d,g,m],[d,g,m],[d,p,m],[-d,p,m]],[0,0,1],v),B([[-d,-p,m],[d,-p,m],[d,-g,m],[-d,-g,m]],[0,0,1],v),B([[-d,-g,m],[-x,-g,m],[-x,g,m],[-d,g,m]],[0,0,1],v),B([[x,-g,m],[d,-g,m],[d,g,m],[x,g,m]],[0,0,1],v),B([[-x,g,m],[x,g,m],[l,h,S],[-l,h,S]],[0,-1,1],y),B([[-x,-g,m],[x,-g,m],[l,-h,S],[-l,-h,S]],[0,1,1],y),B([[-x,-g,m],[-x,g,m],[-l,h,S],[-l,-h,S]],[1,0,1],y),B([[x,-g,m],[x,g,m],[l,h,S],[l,-h,S]],[-1,0,1],y);const[H,G,J,W]=n;B([[-l,-h,S],[l,-h,S],[l,h,S],[-l,h,S]],[0,0,1],null,[[H,J],[G,J],[G,W],[H,W]]);const tt=new Ee;return tt.setAttribute("position",new qt(b,3)),tt.setAttribute("normal",new qt(C,3)),tt.setAttribute("uv",new qt(_,2)),tt.setAttribute("aSide",new qt(M,1)),tt.setAttribute("aCol",new qt(T,3)),tt.setIndex(L),tt}function gv(s,t,e,n=[0,1,0,1]){const{strip:i,depth:r,gap:o,below:a}=ho,c=s/2,l=t/2,h=c+o,u=l+o,f=h+i,d=u+i,p=r-a,x=Math.max(.004,p-e),g=new kt(g_),m=new kt(x_),S=[],E=[],v=[],y=[],b=[],C=[],_=Z=>new F(Z[0],Z[1],Z[2]),M=(Z,et,ft,N,X=[[0,0],[0,0],[0,0],[0,0]])=>{const O=new F().crossVectors(_(Z[1]).sub(_(Z[0])),_(Z[3]).sub(_(Z[0]))).normalize();O.dot(_(et))<0&&(Z=[Z[0],Z[3],Z[2],Z[1]],X=[X[0],X[3],X[2],X[1]],O.negate());const z=S.length/3;Z.forEach((R,P)=>{S.push(...R),E.push(O.x,O.y,O.z),v.push(...X[P]),y.push(ft),b.push(...N?[N.r,N.g,N.b]:[0,0,0])}),C.push(z,z+1,z+2,z,z+2,z+3)};M([[-f,u,r],[f,u,r],[f,d,r],[-f,d,r]],[0,0,1],2,g),M([[-f,-d,r],[f,-d,r],[f,-u,r],[-f,-u,r]],[0,0,1],2,g),M([[-f,-u,r],[-h,-u,r],[-h,u,r],[-f,u,r]],[0,0,1],2,g),M([[h,-u,r],[f,-u,r],[f,u,r],[h,u,r]],[0,0,1],2,g),M([[-f,d,0],[f,d,0],[f,d,r],[-f,d,r]],[0,1,0],2,g),M([[-f,-d,0],[f,-d,0],[f,-d,r],[-f,-d,r]],[0,-1,0],2,g),M([[-f,-d,0],[-f,d,0],[-f,d,r],[-f,-d,r]],[-1,0,0],2,g),M([[f,-d,0],[f,d,0],[f,d,r],[f,-d,r]],[1,0,0],2,g),M([[-h,u,0],[h,u,0],[h,u,r],[-h,u,r]],[0,-1,0],2,m),M([[-h,-u,0],[h,-u,0],[h,-u,r],[-h,-u,r]],[0,1,0],2,m),M([[-h,-u,0],[-h,u,0],[-h,u,r],[-h,-u,r]],[1,0,0],2,m),M([[h,-u,0],[h,u,0],[h,u,r],[h,-u,r]],[-1,0,0],2,m),M([[-h,l,x],[h,l,x],[h,u,x],[-h,u,x]],[0,0,1],2,m),M([[-h,-u,x],[h,-u,x],[h,-l,x],[-h,-l,x]],[0,0,1],2,m),M([[-h,-l,x],[-c,-l,x],[-c,l,x],[-h,l,x]],[0,0,1],2,m),M([[c,-l,x],[h,-l,x],[h,l,x],[c,l,x]],[0,0,1],2,m);const[T,L,D,B]=n,H=.004,G=T+H,J=L-H,W=D+H,tt=B-H;M([[-c,-l,p],[c,-l,p],[c,l,p],[-c,l,p]],[0,0,1],0,null,[[T,D],[L,D],[L,B],[T,B]]),M([[-c,l,p],[c,l,p],[c,l,x],[-c,l,x]],[0,1,0],1,null,[[T,tt],[L,tt],[L,tt],[T,tt]]),M([[-c,-l,x],[c,-l,x],[c,-l,p],[-c,-l,p]],[0,-1,0],1,null,[[T,W],[L,W],[L,W],[T,W]]),M([[-c,-l,x],[-c,-l,p],[-c,l,p],[-c,l,x]],[-1,0,0],1,null,[[G,D],[G,D],[G,B],[G,B]]),M([[c,-l,p],[c,-l,x],[c,l,x],[c,l,p]],[1,0,0],1,null,[[J,D],[J,D],[J,B],[J,B]]);const k=new Ee;return k.setAttribute("position",new qt(S,3)),k.setAttribute("normal",new qt(E,3)),k.setAttribute("uv",new qt(v,2)),k.setAttribute("aSide",new qt(y,1)),k.setAttribute("aCol",new qt(b,3)),k.setIndex(C),k}function xv(){const t=f_,e=new kt(u_),n=.0015,i=[0,0,n],r=[0,0,1],o=[0,0],a=[2],c=[e.r,e.g,e.b],l=[];for(let u=0;u<=24;u++){const f=u/24*Math.PI*2;i.push(Math.cos(f)*t,Math.sin(f)*t,n),r.push(0,0,1),o.push(0,0),a.push(2),c.push(e.r,e.g,e.b),u&&l.push(0,u,u+1)}const h=new Ee;return h.setAttribute("position",new qt(i,3)),h.setAttribute("normal",new qt(r,3)),h.setAttribute("uv",new qt(o,2)),h.setAttribute("aSide",new qt(a,1)),h.setAttribute("aCol",new qt(c,3)),h.setIndex(l),h}function _v(s,t,e,n){const[i,r,o,a]=n??[0,0,1,1];let c=i,l=o,h=1-a,u=1-r;if(!e)return[c,l,h,u];const f=s/t,d=e[0]*(o-i)/(e[1]*(a-r));if(d>f){const p=f/d,x=(c+l)/2,g=(l-c)*p/2;c=x-g,l=x+g}else{const p=d/f,x=(h+u)/2,g=(u-h)*p/2;h=x-g,u=x+g}return[c,l,h,u]}const Or=(s,t,e,n)=>{const i=new ne().makeBasis(rr(e),new F(0,1,0),rr(t));s.quaternion.setFromRotationMatrix(i),s.position.set(n[0],n[1],n[2])};class vv{constructor(t,e){I(this,"map",new Map);I(this,"used",new Set);this.font=t,this.aniso=e}begin(){this.used.clear()}end(){for(const[t,e]of this.map)this.used.has(t)||(e.dispose(),this.map.delete(t))}single(t){const e=`1|${sr(t)}|${t.medium}|${uo(t)}|${t.year}`;return this.get(e,()=>{const i=Math.round(1024*$s/us),r=af(1024,i),o=r.getContext("2d");o.fillStyle="#f6f5f1",o.fillRect(0,0,1024,i),o.fillStyle="#121212";const a=70;let c=160;const l=[[`italic 500 84px ${this.font}`,sr(t)]];for(const h of[t.medium,uo(t),t.year])h&&l.push([`400 62px ${this.font}`,h]);for(const[h,u]of l)o.font=h,c=Mv(o,u,a,c,1024-2*a,h.startsWith("italic")?92:74),c+=h.startsWith("italic")?20:8;return r})}get(t,e){this.used.add(t);let n=this.map.get(t);return n||(n=new wo(e()),n.colorSpace=Ie,n.anisotropy=this.aniso,this.map.set(t,n)),n}}const af=(s,t)=>{const e=document.createElement("canvas");return e.width=s,e.height=t,e};function Mv(s,t,e,n,i,r){let o="";for(const a of t.split(" ")){const c=o?o+" "+a:a;s.measureText(c).width>i&&o?(s.fillText(o,e,n),n+=r,o=a):o=c}return s.fillText(o,e,n),n+r}const yv=s=>{const t=new kt(s);return .2126*t.r+.7152*t.g+.0722*t.b<.12};function Sv(s,t,e,n){const i=af(Math.ceil(t*fo),Math.ceil(e*fo)),r=i.getContext("2d");r.fillStyle=yv(n)?"#eeede8":"#262625",r.textBaseline="alphabetic",r.font=`300 ${Ks}px ${po}`,r.fillText(s.title,8,Ks*.8),s.sub&&(r.font=`400 ${mo}px ${po}`,r.fillText(s.sub,10,Ks+Bu+mo*.8));const o=new wo(i);return o.colorSpace=Ie,o.anisotropy=8,o}function wv(s){const t=E_(s),e=A_(s,t).map(l=>new kt(l)),n=Int32Array.from(t.id),i=t.nx*t.nz;let r=[];for(let l=0;l<i;l++)n[l]>=0&&r.push(l);for(;r.length;){const l=[];for(const h of r){const u=h%t.nx;for(const f of[u>0?h-1:-1,u<t.nx-1?h+1:-1,h-t.nx,h+t.nx])f>=0&&f<i&&n[f]<0&&(n[f]=n[h],l.push(f))}r=l}const o=new Uint8Array(i*4),a=new kt(ku);for(let l=0;l<i;l++){const h=e[n[l]]??a;o[l*4]=Math.round(h.r*255),o[l*4+1]=Math.round(h.g*255),o[l*4+2]=Math.round(h.b*255),o[l*4+3]=255}const c=new xs(o,t.nx,t.nz,fn);return c.magFilter=c.minFilter=ke,c.needsUpdate=!0,{tex:c,origin:new Bt(t.x0,t.z0),scale:new Bt(1/(t.nx*t.c),1/(t.nz*t.c))}}function bv(s,t,e,n,i,r,o,a){const c=new Pe,l=s.H,h=wv(s),u=[],f=[],d=[h.tex],p=(_,M)=>{f.push(_),u.push(M);const T=new Te(_,M);return c.add(T),T},x=[];for(const _ of s.faces){const M=hv(_,l,s.doorH);if(M.empty)continue;const T=p(M.geometry(),Ph(dv(_,t,s),new kt(_.color),l,e,h));T.userData.face=_,x.push(T)}for(const[_,M]of uv(s,rf))M.empty||p(M.geometry(),Ph(pv,new kt(_),l,e,h));const g=s.inner,m=s.entrance,S=new Nh;S.add([[g.x0,0,g.z1],[g.x1,0,g.z1],[g.x1,0,g.z0],[g.x0,0,g.z0]],[0,1,0]),S.add([[m.a,0,m.z+.4],[m.b,0,m.z+.4],[m.b,0,m.z],[m.a,0,m.z]],[0,1,0]),p(S.geometry(),av(o,a,e)).layers.set(1);const v=new Nh;v.add([[g.x0,l,g.z0],[g.x1,l,g.z0],[g.x1,l,g.z1],[g.x0,l,g.z1]],[0,-1,0]),p(v.geometry(),ov(e,h));const y=t.length;if(y){const _=new Ys(.068,28).rotateX(Math.PI/2).translate(0,l-.0015,0),M=new Ys(.05,24).rotateX(Math.PI/2).translate(0,l-.0025,0),T=new Ys(.026,20).rotateX(Math.PI/2).translate(0,l-.0035,0),L=new zn({color:14276820,toneMapped:!1}),D=new zn({color:11842479,toneMapped:!1}),B=new zn({color:16777215,toneMapped:!1});f.push(_,M,T),u.push(L,D,B);const H=new Kr(_,L,y),G=new Kr(M,D,y),J=new Kr(T,B,y),W=new ne;t.forEach((tt,k)=>{W.makeTranslation(tt.lamp.p[0],0,tt.lamp.p[2]),H.setMatrixAt(k,W),G.setMatrixAt(k,W),J.setMatrixAt(k,W)}),c.add(H,G,J)}const b=[],C=[];r.begin();for(const _ of t){const M=of(_.lamp);for(const T of _.items){if(T.text){const et=Sv(T.text,T.w,T.h,T.face.color);d.push(et);const ft=p(new Bn(T.w,T.h),new zn({map:et,transparent:!0,depthWrite:!1,toneMapped:!1}));Or(ft,_.normal,_.right,[T.pos[0]+_.normal[0]*.002,T.pos[1],T.pos[2]+_.normal[2]*.002]),ft.userData.title=T.id;continue}const L=T.work,D=L.kind==="paper"||L.kind==="digital"?new kt().setRGB(.92,.91,.88):null,B=da(n(L.id),M,D,L.adjust),H=zl(L),G=L.w*je,J=L.h*je,W=_v(G,J,i(L.id),L.crop),tt=H?Ol(H)?gv(G,J,Fl[L.kind],W):mv(G,J,H,W):Fh(T.w,T.h,T.depth,W),k=p(tt,B);Or(k,_.normal,_.right,T.pos),k.userData.work=L.id;const Z={work:L,placed:_,mesh:k,mat:B,w:T.w,h:T.h,label:null,dot:null};if(b.push(Z),L.sold){const et=_.right,ft=p(xv(),da(n(L.id),M,null));Or(ft,_.normal,_.right,[T.pos[0]+et[0]*(T.w/2+.022),T.pos[1]-T.h/2+.012,T.pos[2]+et[2]*(T.w/2+.022)]),ft.userData.work=L.id,Z.dot=ft}if(T.label){const et=p(Fh(us,$s,.003),da(r.single(L),M,new kt(.95,.95,.93)));Or(et,_.normal,_.right,T.label.pos),et.userData.work=L.id,et.userData.label=!0,C.push(et),Z.label=et}}}return r.end(),{group:c,pictures:b,labels:C,faceMeshes:x,dispose(){for(const _ of f)_.dispose();for(const _ of u)_.dispose();for(const _ of d)_.dispose();c.traverse(_=>{const M=_;M.isInstancedMesh&&M.dispose()})}}}const Zs=class Zs{constructor(t,e,n,i,r,o){I(this,"cat",new Map);I(this,"arch");I(this,"placed",[]);I(this,"items",[]);I(this,"migrated",!1);I(this,"interior",null);I(this,"outside",null);I(this,"sharp",new Map);I(this,"small",new Map);I(this,"baked");I(this,"labels");I(this,"outsideKey","");I(this,"blank",new xs(new Uint8Array([128,128,128,255]),1,1));I(this,"onRebuilt",()=>{});I(this,"prepTex",t=>(t.colorSpace=Ie,t.anisotropy=this.aniso,t.minFilter=Si,t));I(this,"texture",t=>this.sharp.get(t)??this.small.get(t)??this.blank);I(this,"px",t=>this.data.images[t]);this.data=t,this.scene=e,this.renderer=n,this.mirror=i,this.font=r,this.aniso=o,this.labels=new vv(r,o),this.blank.needsUpdate=!0}async loadSmall(){const t=new ul;await Promise.all(this.data.catalogue.map(e=>t.loadAsync(Zs.url(e.id,"s")).then(n=>{this.small.set(e.id,this.prepTex(n))}).catch(()=>{})))}async loadOne(t){const e=await new ul().loadAsync(`${Zs.url(t,"s")}?${Date.now()}`);this.small.set(t,this.prepTex(e))}rebuild(){var a;const t=this.data.layout;this.cat=new Map(this.data.catalogue.map(c=>[c.id,c])),this.arch=b_(t),Q_(t,this.arch,this.cat)&&(this.migrated=!0);const{placed:e,items:n,homeless:i}=U_(t,this.arch,this.cat);i.length&&(t.hang=t.hang.filter(c=>!i.includes(c))),this.placed=e,this.items=n,this.baked=lv(this.arch,e,this.baked);const r=this.interior;this.interior=bv(this.arch,e,this.baked,this.texture,this.px,this.labels,this.mirror.target.texture,this.mirror.texMat),this.scene.add(this.interior.group),r&&(this.scene.remove(r.group),r.dispose());const o=JSON.stringify([t.outline,t.entrance,t.ceiling,t.doorHeight]);o!==this.outsideKey&&((a=this.outside)==null||a.dispose(),this.outside=fv(this.scene,this.font,this.aniso,t),this.outsideKey=o),this.onRebuilt(i)}hung(){return new Set(this.data.layout.hang.filter(t=>!t.text).map(t=>t.id))}storage(){const t=this.hung();return this.data.catalogue.filter(e=>!t.has(e.id)&&!e.off)}placementOf(t){return this.data.layout.hang.find(e=>e.id===t)}};I(Zs,"url",(t,e)=>`art/${t}-${e}.jpg`);let fs=Zs;class Ev{constructor(t,e){I(this,"target");I(this,"texMat",new ne);I(this,"cam",new Ye);I(this,"plane",new Kn);I(this,"clip",new xe);I(this,"q",new xe);I(this,"n",new F(0,1,0));I(this,"p0",new F(0,0,0));I(this,"camPos",new F);I(this,"rot",new ne);I(this,"look",new F);I(this,"view",new F);I(this,"tgt",new F);this.target=new xn(t,e,{type:Mn,depthBuffer:!0}),this.target.texture.generateMipmaps=!1,this.cam.layers.set(0)}setSize(t,e){this.target.setSize(Math.max(2,t),Math.max(2,e))}render(t,e,n,i){if(this.camPos.setFromMatrixPosition(n.matrixWorld),this.view.subVectors(this.p0,this.camPos),this.view.dot(this.n)>0)return;this.view.reflect(this.n).negate().add(this.p0),this.rot.extractRotation(n.matrixWorld),this.look.set(0,0,-1).applyMatrix4(this.rot).add(this.camPos),this.tgt.subVectors(this.p0,this.look).reflect(this.n).negate().add(this.p0);const r=this.cam;r.position.copy(this.view),r.up.set(0,1,0).applyMatrix4(this.rot).reflect(this.n),r.lookAt(this.tgt),r.far=n.far,r.near=n.near,r.updateMatrixWorld(),r.projectionMatrix.copy(n.projectionMatrix),this.texMat.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMat.multiply(r.projectionMatrix).multiply(r.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(this.n,this.p0).applyMatrix4(r.matrixWorldInverse),this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant);const o=r.projectionMatrix.elements;this.q.x=(Math.sign(this.clip.x)+o[8])/o[0],this.q.y=(Math.sign(this.clip.y)+o[9])/o[5],this.q.z=-1,this.q.w=(1+o[10])/o[14],this.clip.multiplyScalar(2/this.clip.dot(this.q)),o[2]=this.clip.x,o[6]=this.clip.y,o[10]=this.clip.z+1-.003,o[14]=this.clip.w;const a=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(e,r),i==null||i(t,r),t.setRenderTarget(a)}}const Jr=1.62,Tv=12,Av=6.5,Rv=2,Cv=1.7,gi=1.15,zh=.0022,Lv=2.6,Pv=4.6,cn=.3;class Iv{constructor(t){I(this,"pos",new F(6.6,Jr,10.2));I(this,"vel",new F);I(this,"yaw",Math.atan2(6.6-4.2,10.2-.4));I(this,"pitch",.05);I(this,"yawVel",0);I(this,"pitchVel",0);I(this,"keys",new Set);I(this,"taps",new Map);I(this,"frozen",!1);I(this,"moved",!1);I(this,"glide",new Bt);I(this,"spin",0);I(this,"goal",null);I(this,"solids",[]);I(this,"obstacles",[]);I(this,"world",{x0:-22,x1:39,z0:-38,z1:30});this.canvas=t,addEventListener("keydown",e=>{var n,i;e.metaKey||e.ctrlKey||e.altKey||(i=(n=e.target).closest)!=null&&i.call(n,"input, textarea, select")||(this.keys.add(e.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault())}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",e=>{document.pointerLockElement!==this.canvas||this.frozen||(this.yaw-=e.movementX*zh,this.pitch=Math.max(-gi,Math.min(gi,this.pitch-e.movementY*zh)),this.moved=!0)})}get locked(){return document.pointerLockElement===this.canvas}drag(t,e){this.pos.x+=t,this.pos.z+=e,this.collide(),this.moved=!0,this.goal=null}turnBy(t,e){this.yaw+=t,this.pitch=Math.max(-gi,Math.min(gi,this.pitch+e)),this.moved=!0,this.goal=null}tap(t,e){this.taps.set(t,e)}update(t){const e=this.frozen?new Set:this.taps.size?new Set([...this.keys,...this.taps.keys()]):this.keys;for(const[h,u]of this.taps)u-t<=0?this.taps.delete(h):this.taps.set(h,u-t);let n=0;e.has("ArrowLeft")&&(n+=1),e.has("ArrowRight")&&(n-=1),this.yawVel+=(n*Rv-this.yawVel)*(1-Math.exp(-9*t)),this.yaw+=this.yawVel*t;let i=0;e.has("ArrowUp")&&(i+=1),e.has("ArrowDown")&&(i-=1),this.pitchVel+=(i*Cv-this.pitchVel)*(1-Math.exp(-9*t)),this.pitch+=this.pitchVel*t,(this.pitch>gi||this.pitch<-gi)&&(this.pitch=Math.max(-gi,Math.min(gi,this.pitch)),this.pitchVel=0);let r=0,o=0;e.has("KeyW")&&(r+=1),e.has("KeyS")&&(r-=1),e.has("KeyD")&&(o+=1),e.has("KeyA")&&(o-=1),(r||o||n||i)&&(this.moved=!0);let a=0,c=0;if(r||o){const h=e.has("ShiftLeft")||e.has("ShiftRight")?Pv:Lv,u=Math.hypot(r,o),f=Math.sin(this.yaw),d=Math.cos(this.yaw);a=(-f*r+d*o)/u*h,c=(-d*r-f*o)/u*h}const l=1-Math.exp(-(r||o?Tv:Av)*t);if(this.vel.x+=(a-this.vel.x)*l,this.vel.z+=(c-this.vel.z)*l,this.frozen||this.coast(t),this.vel.lengthSq()>1e-8){const h=this.pos.x,u=this.pos.z;this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.collide();const f=this.pos.x-(h+this.vel.x*t),d=this.pos.z-(u+this.vel.z*t),p=Math.hypot(f,d);if(p>1e-9){const x=f/p,g=d/p,m=this.vel.x*x+this.vel.z*g;m<0&&(this.vel.x-=x*m,this.vel.z-=g*m)}}}coast(t){const e=this.goal;if(e){const n=e.x-this.pos.x,i=e.z-this.pos.z,r=Math.hypot(n,i),o=1-Math.exp(-2.6*t),a=Math.min(r,Math.max(r*o,Math.min(r,.9*t)));if(r>1e-4){const c=this.pos.x,l=this.pos.z;this.pos.x+=n/r*a,this.pos.z+=i/r*a,this.collide(),Math.hypot(this.pos.x-c,this.pos.z-l)<a*.2&&(this.goal=null)}e.yaw!==void 0&&(this.yaw+=Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw))*o),e.pitch!==void 0&&(this.pitch+=(e.pitch-this.pitch)*o),r<.02&&(e.yaw===void 0||Math.abs(Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw)))<.01)&&(this.goal=null);return}if(this.glide.lengthSq()>1e-6){const n=this.pos.x,i=this.pos.z;this.pos.x+=this.glide.x*t,this.pos.z+=this.glide.y*t,this.collide();const r=(this.pos.x-n)/Math.max(t,1e-6),o=(this.pos.z-i)/Math.max(t,1e-6);this.glide.set(r,o).multiplyScalar(Math.exp(-2.4*t)),this.glide.lengthSq()<4e-4&&this.glide.set(0,0)}Math.abs(this.spin)>.001?(this.yaw+=this.spin*t,this.spin*=Math.exp(-3.2*t)):this.spin=0}collide(){const t=this.pos;for(let e=0;e<2;e++)for(const n of this.solids){const i=Math.max(n.x0,Math.min(t.x,n.x1)),r=Math.max(n.z0,Math.min(t.z,n.z1)),o=t.x-i,a=t.z-r,c=o*o+a*a;if(!(c>=cn*cn))if(c>1e-12){const l=Math.sqrt(c);t.x+=o/l*(cn-l),t.z+=a/l*(cn-l)}else{const l=[t.x-n.x0+cn,n.x1-t.x+cn,t.z-n.z0+cn,n.z1-t.z+cn],h=Math.min(...l);h===l[0]?t.x=n.x0-cn:h===l[1]?t.x=n.x1+cn:h===l[2]?t.z=n.z0-cn:t.z=n.z1+cn}}for(const e of this.obstacles){const n=t.x-e.x,i=t.z-e.z,r=Math.hypot(n,i),o=cn*.7+e.r;r<o&&r>1e-6&&(t.x=e.x+n/r*o,t.z=e.z+i/r*o)}t.x=Math.max(this.world.x0,Math.min(this.world.x1,t.x)),t.z=Math.max(this.world.z0,Math.min(this.world.z1,t.z))}apply(t){t.position.copy(this.pos),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}}class Dv{constructor(){I(this,"el");I(this,"tools");I(this,"low");I(this,"high");I(this,"cap");I(this,"frame");I(this,"open",!1);I(this,"_busy",!1);I(this,"ask",null);I(this,"work",null);I(this,"px",[1,1]);I(this,"crop",[0,0,1,1]);I(this,"onClose",()=>{});I(this,"onShow",()=>{});I(this,"reserveRight",0);I(this,"relock",()=>!0);this.el=document.getElementById("view"),this.frame=this.el.querySelector(".frame"),this.low=this.el.querySelector("img.low"),this.high=this.el.querySelector("img.high"),this.cap=this.el.querySelector(".cap"),this.tools=document.createElement("div"),this.tools.className="view-tools",this.el.prepend(this.tools),this.high.addEventListener("load",()=>{this.open&&this.high.classList.add("in")}),addEventListener("resize",()=>{this.work&&this.fit()})}get busy(){return this._busy}set busy(t){this._busy=t,this.el.classList.toggle("busy",t)}show(t,e,n,i){var r;this.work=t,this.px=e??[1200,1200],this.crop=t.crop??[0,0,1,1],this.open=!0,this.busy=!1,this.high.classList.remove("in"),this.low.src=n,this.high.src=i,this.caption(),this.setFilter(iv(t.id,t.adjust)),this.fit(),this.el.classList.add("on"),(r=this.ask)==null||r.reset(t),this.onShow(t)}caption(){const t=this.work;if(!t)return;const e=[`<i>${Oh(sr(t))}</i>`],n=[t.medium,uo(t),t.year].filter(Boolean).map(i=>Oh(i));n.length&&e.push(n.join(" &nbsp;·&nbsp; ")),this.cap.innerHTML=e.join("<br>")}hide(){var t;!this.open||this.busy||(this.open=!1,this.work=null,this.el.classList.remove("on"),(t=this.ask)==null||t.close(),this.onClose())}setFilter(t){this.low.style.filter=t,this.high.style.filter=t}refit(){this.el.style.paddingRight=this.reserveRight?`${this.reserveRight}px`:"",this.fit()}setCrop(t){this.crop=t,this.fit()}get frameEl(){return this.frame}fit(){const n=this.tools.childElementCount?56:0,[i,r,o,a]=this.crop,c=this.px[0]*(o-i),l=this.px[1]*(a-r),h=innerWidth-2*28-this.reserveRight,u=innerHeight-2*28-64-n,f=Math.min(1,h/c,u/l),d=Math.round(c*f),p=Math.round(l*f);this.frame.style.width=`${d}px`,this.frame.style.height=`${p}px`;const x=d/(o-i),g=p/(a-r);for(const m of[this.low,this.high])Object.assign(m.style,{width:`${x}px`,height:`${g}px`,left:`${-i*x}px`,top:`${-r*g}px`})}}const Oh=s=>s.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Uv=4.5,Nv=380,Fv=10;class zv{constructor(t,e,n,i,r,o){I(this,"ndc",new Bt);I(this,"ray",new lo);I(this,"v",new F);I(this,"d",null);I(this,"trail",[]);this.canvas=t,this.camera=e,this.player=n,this.pick=i,this.tap=r,this.enabled=o,t.addEventListener("pointerdown",a=>this.start(a)),t.addEventListener("pointermove",a=>this.move(a)),t.addEventListener("pointerup",a=>this.end(a)),t.addEventListener("pointercancel",()=>{this.d=null})}at(t){const e=this.canvas.getBoundingClientRect();return this.ndc.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1)}floorAt(t){this.player.apply(this.camera),this.camera.updateMatrixWorld(),this.ray.setFromCamera(t,this.camera);const e=this.ray.ray.origin,n=this.ray.ray.direction;if(n.y>-.03)return null;const i=-e.y/n.y;return i>30?null:new F(e.x+n.x*i,0,e.z+n.z*i)}start(t){if(t.pointerType!=="touch"||!this.enabled()||this.d)return;t.preventDefault(),this.canvas.setPointerCapture(t.pointerId),this.player.glide.set(0,0),this.player.spin=0,this.player.goal=null;const e=this.at(t),n=this.pick(e),i=this.floorAt(e),r=!!i&&(n.kind==="floor"||n.kind==="none"||(n.dist??1/0)>this.camera.position.distanceTo(i)-.05),o=r||(n.kind==="wall"||n.kind==="work")&&(n.dist??99)<=Uv?1:.6;this.d={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now(),mode:r?"ground":"turn",grip:o,p0:r?i:null,moved:!1,lx:t.clientX,ly:t.clientY},this.trail=[]}move(t){const e=this.d;if(!e||t.pointerId!==e.id)return;t.preventDefault(),!e.moved&&Math.hypot(t.clientX-e.x,t.clientY-e.y)>Fv&&(e.moved=!0);const n=t.clientX-e.lx,i=t.clientY-e.ly;if(e.lx=t.clientX,e.ly=t.clientY,!e.moved)return;const r=performance.now();if(e.mode==="ground"&&e.p0){const o=this.floorAt(this.at(t));if(!o)return;let a=e.p0.x-o.x,c=e.p0.z-o.z;const l=Math.hypot(a,c);l>1.2&&(a*=1.2/l,c*=1.2/l);const h=this.player.pos.x,u=this.player.pos.z;this.player.drag(a,c),this.trail.push({t:r,dx:this.player.pos.x-h,dz:this.player.pos.z-u,dyaw:0})}else{const o=en.degToRad(this.camera.fov)/this.canvas.clientHeight*e.grip;this.player.turnBy(n*o,i*o),this.trail.push({t:r,dx:0,dz:0,dyaw:n*o})}for(;this.trail.length&&r-this.trail[0].t>120;)this.trail.shift()}end(t){const e=this.d;if(!e||t.pointerId!==e.id)return;this.d=null;const n=performance.now();if(!e.moved&&n-e.t<Nv){this.tap(this.pick(this.at(t)));return}const i=this.trail.filter(l=>n-l.t<120);if(!i.length||n-i[i.length-1].t>70)return;const r=Math.max(.03,(n-i[0].t)/1e3+1/60);let o=0,a=0,c=0;for(const l of i)o+=l.dx,a+=l.dz,c+=l.dyaw;e.mode==="ground"?(this.player.glide.set(o/r,a/r),this.player.glide.length()>7&&this.player.glide.setLength(7)):this.player.spin=en.clamp(c/r,-7,7)}}const Ov=[[233,196,106],[237,214,197],[247,74,158],[124,196,124],[56,134,232],[150,106,76]],kv=[[18,20,26],[198,44,48],[240,241,246],[72,178,96]],lf=[[255,196,160],[255,132,112],[236,92,124],[255,110,178]],or=.12,Xl=[58,44,40],pa=s=>{const t=s/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4},Bv=s=>{const t=s<=.0031308?s*12.92:1.055*s**.4166666666666667-.055;return Math.round(Math.max(0,Math.min(1,t))*255)};function Ao(s,t){const e=Math.max(0,Math.min(1,t))*(s.length-1),n=Math.min(s.length-2,Math.floor(e)),i=e-n,r=s[n],o=s[n+1];return[0,1,2].map(a=>Bv(pa(r[a])+(pa(o[a])-pa(r[a]))*i))}function go([s,t,e]){const n=s/255,i=t/255,r=e/255,o=Math.max(n,i,r),a=Math.min(n,i,r),c=(o+a)/2,l=o-a;if(!l)return[0,0,c];const h=c>.5?l/(2-o-a):l/(o+a);let u;return o===n?u=(i-r)/l+(i<r?6:0):o===i?u=(r-n)/l+2:u=(n-i)/l+4,[u*60,h,c]}function Hv(s,t,e){if(s=(s%360+360)%360,t<=0){const l=Math.round(e*255);return[l,l,l]}const n=(1-Math.abs(2*e-1))*t,i=n*(1-Math.abs(s/60%2-1)),r=e-n/2;let o=0,a=0,c=0;return s<60?(o=n,a=i):s<120?(o=i,a=n):s<180?(a=n,c=i):s<240?(a=i,c=n):s<300?(o=i,c=n):(o=n,c=i),[Math.round((o+r)*255),Math.round((a+r)*255),Math.round((c+r)*255)]}function Gv(s,t){const[e,n,i]=go(s);return n<.02?s:Hv(e+t,n,i)}(()=>{const s=[];for(let t=0;t<=24;t++)s.push(`hsl(${t/24*360}, 72%, 56%) ${(t/24*100).toFixed(1)}%`);return`linear-gradient(90deg, ${s.join(", ")})`})();const ql=s=>Ao(Ov,s.skin),Vv=s=>Ao(kv,s.mouthColor),Wv=s=>Ao(lf,(s.cheeks-or)/(1-or)),Xv=s=>{const t=Math.max(0,Math.min(1,s.cheeks/or));return t*t*(3-2*t)};(()=>{const s=["rgb(255,255,255) 0%"];for(let t=0;t<=16;t++){const[e,n,i]=Ao(lf,t/16);s.push(`rgb(${e},${n},${i}) ${((or+t/16*(1-or))*100).toFixed(1)}%`)}return`linear-gradient(90deg, ${s.join(", ")})`})();const qv={shape:.35,eyeSize:.6,eyeSpacing:.5,eyeHeight:.5,browWeight:.5,browHeight:.5,noseLength:.5,noseHeight:.5,mouthWidth:.5,mouthColor:0,cheeks:0,skin:0,hairColor:go(Xl)[0]/360,hat:"none"},Wt=16,Yt=16,Jt=16,zs=[26,32,42],kh=[236,240,246],hn=(s,t)=>[Math.max(0,Math.min(255,Math.round(s[0]*t))),Math.max(0,Math.min(255,Math.round(s[1]*t))),Math.max(0,Math.min(255,Math.round(s[2]*t)))],At={felt:[44,52,66],leather:[122,84,56],band:[188,76,76],party:[226,120,92],partyAlt:[240,214,120],hair:Xl,glass:[120,176,208],brass:[186,156,96],steel:[124,134,150],red:[190,58,54],gold:[216,178,82],leaf:[94,158,82],cream:[234,228,208],plum:[124,70,132]},Yn=(s,t)=>Math.round(Math.max(0,Math.min(1,s))*t),Bh=2.2,Yv=18,$v=6,Hh=.55;function Kv(s){const t=Bh*Math.pow(Yv/Bh,Math.max(0,Math.min(1,s))),e=Wt/2,n=Yt/2,i=Jt/2;return(r,o,a)=>{const c=Math.abs(r+.5-e)/e,l=Math.abs(o+.5-n)/n,h=c**t+l**t;if(h>1)return!1;const u=Math.abs(a+.5-i)/i;if(a>=Jt-$v){const f=h<=Hh?1:((1-h)/(1-Hh))**(1/t);return u<=f}return h+u**t<=1}}function Zv(s){const t=ql(s),e=Kv(s.shape),n=new Map,i=(N,X,O)=>`${N},${X},${O}`;let r=null;const o=new Set,a=new Set;let c;const l=(N,X,O,z)=>{const R=i(N,X,O);n.set(R,c?{x:N,y:X,z:O,c:z,part:c}:{x:N,y:X,z:O,c:z}),r&&r.add(R)},h=(N,X,O,z)=>{const R=i(N,X,O);n.set(R,{x:N,y:X,z:O,c:z}),o.delete(R),a.delete(R)},u=(N,X,O)=>n.has(i(N,X,O));for(let N=0;N<Wt;N++)for(let X=0;X<Yt;X++)for(let O=0;O<Jt;O++)e(N,X,O)&&l(N,X,O,t);const f=(N,X)=>{for(let O=Yt-1;O>=0;O--)if(u(N,O,X))return O;return-1},d=(N,X)=>{for(let O=Jt-1;O>=0;O--)if(u(N,X,O))return O;return-1},p=(N,X,O)=>{if(N<0||N>=Wt||X<0||X>=Yt)return;const z=d(N,X);z>=0&&l(N,X,z,O)},x=Wt/2,g=1+Yn(s.eyeSize,3),m=1+Yn(s.eyeSize,3),S=Math.max(1,6-g),E=1+Yn(s.eyeSpacing,S-1),v=8+Yn(s.eyeHeight,4)-2-Math.floor((m-1)/2),y=v+m-1,b=[[x-E-g,x-E-1],[x+E,x+E+g-1]],C=g>=3&&m>=3;for(const[N,X]of b)for(let O=N;O<=X;O++)for(let z=v;z<=y;z++){const R=!!(C&&O>N&&O<X&&z>v&&z<y);c=C&&!R?"eye":"pupil",p(O,z,C?R?zs:kh:zs)}c=void 0,r=o;const _=Yn(s.browWeight,3),M=y+2+(Yn(s.browHeight,4)-2);if(_>0){c="brow";for(const[N,X]of b)for(let O=N-1;O<=X+1;O++)for(let z=0;z<_;z++)p(O,M+z,At.hair);c=void 0}r=null;const T=Yn(s.noseLength,8),L=5+(Yn(s.noseHeight,6)-3);if(T>0){const N=hn(t,.9);c="nose";for(let X=x-1;X<=x;X++)for(let O=L;O<=L+1;O++){const z=d(X,O);if(!(z<0))for(let R=1;R<=T;R++)l(X,O,z+R,N)}c=void 0}const D=2*Yn(s.mouthWidth,4),B=3;if(D>0){const N=Vv(s),X=D>=6?2:1;c="mouth";for(let O=x-D/2;O<=x+D/2-1;O++)for(let z=B;z<B+X;z++)p(O,z,N);c=void 0}const H=Xv(s);if(H>0){const N=Wv(s),X=(P,V)=>P[0]===V[0]&&P[1]===V[1]&&P[2]===V[2],O=v-1,z=B+(D>=6?2:1),R=Math.max(z+.5,O-.5);for(const[P,V]of b){const j=V<x,st=(P+V)/2,K=st+.35*((j?x-1.5:x+.5)-st);for(let at=Math.floor(K-2);at<=Math.ceil(K+2);at++)if(!(j?at>x-2:at<x+1))for(let dt=z;dt<=O;dt++){const gt=1-((at-K)/1.9)**2-((dt-R)/1.3)**2;if(gt<=0)continue;const Ct=d(at,dt),Vt=Ct>=0?n.get(i(at,dt,Ct)):void 0;if(!Vt||Vt.part||!X(Vt.c,t))continue;const oe=H*.72*Math.pow(gt,.8),Ae=[0,1,2].map(Fe=>Math.round(t[Fe]+(N[Fe]-t[Fe])*oe));n.set(i(at,dt,Ct),{x:at,y:dt,z:Ct,c:Ae,blend:t})}}}const G=(N,X=1)=>{for(let O=0;O<Wt;O++)for(let z=0;z<Jt;z++){const R=f(O,z);if(!(R<0))for(let P=1;P<=X;P++)l(O,R+P,z,N)}},J=(N,X,O)=>{const z=Math.ceil(X)+1;for(let R=x-z;R<x+z;R++)for(let P=x-z;P<x+z;P++)Math.hypot(R+.5-x,P+.5-x)<=X&&l(R,N,P,O)},W=(N,X,O,z)=>{for(let R=N;R<=X;R++)for(let P=0;P<Wt;P++)for(let V=0;V<Jt;V++)Math.hypot(P+.5-x,V+.5-x)<=O&&l(P,R,V,z)},tt=(N,X,O,z,R)=>{const P=Math.ceil(z)+1;for(let V=Math.floor(N-P);V<=N+P;V++)for(let j=Math.floor(X-P);j<=X+P;j++)for(let st=Math.floor(O-P);st<=O+P;st++)Math.hypot(V+.5-N,j+.5-X,st+.5-O)<=z&&l(V,j,st,R)},k=(N,X,O,z=1)=>{for(let R=N;R<=X;R++)for(let P=0;P<Wt;P++){const V=d(P,R);V>=0&&l(P,R,V+z,O)}};switch(r=a,s.hat){case"birthday":{for(let N=0;N<9;N++)W(Yt+N,Yt+N,5.4-N*.62,N%2?At.partyAlt:At.party);tt(x,Yt+9.5,x,1.6,kh);break}case"mickey":{const N=f(x,x)+2;for(const X of[-.5,Wt+.5])tt(X,N,x,4.2,zs);break}case"tophat":{J(Yt,8.6,At.felt),W(Yt+1,Yt+10,5,At.felt),W(Yt+3,Yt+4,5.05,At.band);break}case"gangster":{J(Yt,9.6,At.felt),W(Yt+1,Yt+5,5,At.felt),W(Yt+1,Yt+2,5.05,At.band);break}case"goggles":{k(v,y,At.brass);for(const[N,X]of b)for(let O=N;O<=X;O++)for(let z=v;z<=y;z++){const R=d(O,z);R>=0&&l(O,z,R+1,At.glass)}break}case"pilot":{G(At.leather,2),k(Yt-4,Yt-3,At.brass);for(let N=Yt-4;N>=4;N--)for(const X of[0,1,Wt-2,Wt-1])for(let O=0;O<Jt;O++)u(X,N,O)&&l(X,N,O,At.leather);break}case"model":{J(Yt,12.5,At.partyAlt),W(Yt+1,Yt+2,4.4,At.partyAlt);break}case"curls":{let N=7;const X=()=>(N=(N*1103515245+12345)%2147483648)/2147483648;for(let O=-2;O<Wt+2;O++)for(let z=-2;z<Jt+2;z++){const R=f(Math.max(0,Math.min(Wt-1,O)),Math.max(0,Math.min(Jt-1,z)));R<0||(X()<.6&&l(O,R+1,z,At.hair),X()<.34&&l(O,R+2,z,At.hair),X()<.14&&l(O,R+3,z,At.hair))}break}case"bob":{G(At.hair,2);for(let N=y+1;N<Yt;N++)for(let X=0;X<Wt;X++)for(let O=0;O<Jt;O++)(X<=1||X>=Wt-2||O<=1)&&u(X,N,O)&&l(X,N,O,At.hair);break}case"pigtails":{G(At.hair,2);for(const N of[-1.5,Wt+1.5])tt(N,Yt-5,x,3.4,At.hair);break}case"crown":{const N=At.gold,X=hn(N,1.15),O=At.band,z=(V,j)=>{const st=Math.hypot(V+.5-x,j+.5-x);return st>=5.1&&st<=6.9};let R=0;for(let V=0;V<Wt;V++)for(let j=0;j<Jt;j++)z(V,j)&&(R=Math.max(R,f(V,j)+3));for(let V=0;V<Wt;V++)for(let j=0;j<Jt;j++){if(!z(V,j))continue;const st=f(V,j);if(!(st<0))for(let K=st+1;K<=R;K++)l(V,K,j,K===R?X:N)}const P=[[7,13],[12,10],[2,10],[12,4],[2,4]];for(const[V,j]of P){const st=Math.hypot(V+1-x,j+1-x);for(let K=V;K<=V+1;K++)for(let at=j;at<=j+1;at++){const dt=Math.hypot(K+.5-x,at+.5-x)>st;for(let gt=1;gt<=(dt?5:3);gt++)l(K,R+gt,at,dt&&gt===5?X:N)}}for(let V=x-1;V<=x;V++)for(let j=R+2;j<=R+3;j++)for(let st=14;st<=15;st++)l(V,j,st,O);break}case"beanie":{const N=At.red,X=At.cream,O=Math.max(y+1,Yt-6),z=Math.min(O+2,Yt-1),R=[];for(let P=O;P<=z;P++)for(let V=-1;V<=Wt;V++)for(let j=-1;j<=Jt;j++)u(V,P,j)?l(V,P,j,X):(u(V-1,P,j)||u(V+1,P,j)||u(V,P,j-1)||u(V,P,j+1))&&R.push([V,P,j]);for(const[P,V,j]of R)l(P,V,j,X);for(let P=z+1;P<Yt;P++)for(let V=0;V<Wt;V++)for(let j=0;j<Jt;j++)u(V,P,j)&&l(V,P,j,P===z+1?hn(N,.82):N);for(let P=0;P<Wt;P++)for(let V=0;V<Jt;V++){const j=f(P,V);j<=z||(l(P,j+1,V,N),l(P,j+2,V,N))}tt(x,f(x,x)+4.5,x,1.9,X);break}case"cowboy":{let N=0;for(let X=0;X<Wt;X++)for(let O=0;O<Jt;O++)N=Math.max(N,f(X,O)+1);for(let X=0;X<Wt;X++)for(let O=0;O<Jt;O++){const z=f(X,O);if(!(z<0||Math.hypot(X+.5-x,O+.5-x)>5))for(let R=z+1;R<N;R++)l(X,R,O,At.leather)}for(let X=x-11;X<x+11;X++)for(let O=x-11;O<x+11;O++){const z=Math.abs(X+.5-x);if(Math.hypot(z,O+.5-x)>10.7)continue;const R=z>7.5?2:z>5.5?1:0;for(let P=0;P<=R;P++)l(X,N+P,O,At.leather)}for(let X=0;X<Wt;X++)for(let O=0;O<Jt;O++){const z=Math.abs(X+.5-x);if(Math.hypot(z,O+.5-x)>5)continue;const R=z<1?2:z<2?1:0;for(let P=N+1;P<=N+7-R;P++)l(X,P,O,At.leather);R>0&&l(X,N+7-R,O,hn(At.leather,.8))}W(N+1,N+2,5.05,At.felt);break}case"wizard":{const N=At.plum,X=hn(N,.82),O=f(x,x)+1;for(let V=x-6;V<x+6;V++)for(let j=x-6;j<x+6;j++){if(Math.hypot(V+.5-x,j+.5-x)>5.2)continue;const st=f(V,j);if(!(st<0))for(let K=st+1;K<=O;K++)l(V,K,j,N)}const z=11;for(let V=x-12;V<x+12;V++)for(let j=x-12;j<x+12;j++){const st=Math.hypot(V+.5-x,j+.5-x);if(st<=5.2||st>z)continue;const K=V>=0&&V<Wt&&j>=0&&j<Jt?f(V,j):-1;l(V,Math.max(O-Math.max(0,Math.round(st)-8),K+1,y+2),j,X)}const R=13;for(let V=0;V<=R;V++){const j=V/R,st=5-4.1*j,K=x-6.5*j*j;for(let at=x-6;at<x+6;at++)for(let dt=-2;dt<Jt;dt++)Math.hypot(at+.5-x,dt+.5-K)<=st&&l(at,O+V,dt,N)}const P=(V,j)=>{for(let st=x-j;st<x+j;st++){const K=d(st,V);K>=0&&l(st,V,K,At.gold)}};P(O+3,1),P(O+4,2),P(O+5,1),P(O+8,1),P(O+11,1);break}case"halo":{let N=-1;for(let V=0;V<Wt;V++)for(let j=0;j<Jt;j++)N=Math.max(N,f(V,j));const X=N+3,O=hn(At.gold,1.15),z=4.9,R=6.7,P=Math.ceil(R)+1;for(let V=x-P;V<x+P;V++)for(let j=x-P;j<x+P;j++){const st=Math.hypot(V+.5-x,j+.5-x);st<z||st>R||l(V,X,j,j>=x?O:At.gold)}break}case"headphones":{const N=Math.min(y+1,10),X=x-2,O=x+1;for(let z=0;z<Wt;z++)for(let R=X;R<=O;R++){const P=f(z,R);P<0||(l(z,P+1,R,At.steel),l(z,P+2,R,At.steel))}for(let z=N+3;z<Yt;z++)for(const R of[0,Wt-1])for(let P=X;P<=O;P++)u(R,z,P)&&l(R,z,P,At.steel);for(let z=0;z<3;z++)for(let R=N-4;R<=N+3;R++)for(let P=x-4;P<=x+3;P++)Math.hypot(R+.5-N,P+.5-x)>3.6||(l(-z,R,P,zs),l(Wt-1+z,R,P,zs));for(let z=N-2;z<=N+1;z++)for(let R=x-2;R<=x+1;R++)Math.hypot(z+.5-N,R+.5-x)<=1.6&&(l(-2,z,R,At.steel),l(Wt+1,z,R,At.steel));break}case"viking":{const N=hn(At.steel,.78),X=Math.max(y+2,Yt-5);for(let R=X;R<Yt;R++)for(let P=0;P<Wt;P++)for(let V=0;V<Jt;V++)u(P,R,V)&&l(P,R,V,R===X?N:At.steel);for(let R=0;R<Wt;R++)for(let P=0;P<Jt;P++){const V=f(R,P);V<X||(l(R,V+1,P,At.steel),l(R,V+2,P,At.steel))}const O=Math.max(y+1,X-1);for(let R=O;R<=Yt;R++)for(let P=x-1;P<=x;P++){const V=d(P,R);V>=0&&l(P,R,V+1,N)}const z=Math.max(f(5,x)-4,y+4);for(const R of[-1,1])for(let P=0;P<=18;P++){const V=P/18,j=V*2.05,st=x+R*(6.2+6*Math.sin(j));tt(st,z+8.4-8.4*Math.cos(j),x,2.6-1.6*V,At.cream)}break}case"flowers":{const N=Math.max(y+1,Math.min(y+3,Yt-4)),X=At.leaf,O=hn(At.leaf,.82),z=(st,K)=>Math.floor(x+st*K),R=[[0,1],[.87,.5],[.87,-.5],[0,-1]],P=[];for(const[st,K]of R){let at=2;for(;at<12&&u(z(st,at),N,z(K,at));)at+=.5;P.push(at)}const V=[];for(let st=N;st<=N+1;st++)for(let K=0;K<Wt;K++)for(let at=0;at<Jt;at++){if(!u(K,st,at))continue;let dt=!1;for(let gt=-1;gt<=1;gt++)for(let Ct=-1;Ct<=1;Ct++)u(K+gt,st,at+Ct)||(dt=!0,V.push([K+gt,st,at+Ct]));dt&&V.push([K,st,at])}for(const[st,K,at]of V)l(st,K,at,K===N?O:X);const j=[At.red,At.gold,At.cream];for(let st=0;st<R.length;st++){const[K,at]=R[st],dt=Math.round(x+K*(P[st]+1)),gt=Math.round(x+at*(P[st]+1)),Ct=j[st%j.length];tt(dt,N+1.5,gt,1.5,Ct),K>0&&tt(2*x-dt,N+1.5,gt,1.5,Ct)}break}case"afro":{const O=f(x,x),z=Math.max(y+2,Yt-3);for(let R=x-10;R<x+10;R++)for(let P=x-10;P<x+10;P++){const V=Math.abs(R+.5-x),j=Math.abs(P+.5-x),st=(V*V+j*j)/(10*10),K=f(R,P);if(st>1&&K<0)continue;const at=st>1?0:7.5*Math.sqrt(1-st),gt=P>=Jt-6?Math.max(y+1,z-Math.max(0,V-4.5)):y+1,Ct=K>=0?gt:Math.max(gt,Math.ceil(O+.5-at)),Vt=st>1?K:Math.max(K,Math.floor(O-.5+at));for(let oe=Ct;oe<=Vt;oe++)l(R,oe,P,oe<gt+2?hn(At.hair,.8):At.hair)}break}case"mohawk":{const N=At.hair,X=hn(t,.74);for(let z=0;z<Wt;z++)for(let R=0;R<Jt;R++){const P=f(z,R);if(!(P<0))for(let V=y+2;V<=P;V++)u(z,V,R)&&h(z,V,R,X)}const O=f(x,x);for(let z=1;z<Jt-1;z++){if(f(x,z)<O-4)continue;const P=(z-1)/(Jt-3),V=2+Math.round(4*Math.sin(Math.PI*P));for(const j of[x-1,x])for(let st=f(j,z)+1;st<=f(j,z)+V;st++)l(j,st,z,N)}break}case"ponytail":{const N=At.hair,X=Math.max(f(x-1,2),f(x,2))-2;for(let O=0;O<Wt;O++)for(let z=0;z<Jt;z++){const R=f(O,z);R>y&&l(O,R,z,N)}G(N,2);for(let O=y+1;O<Yt;O++)for(let z=0;z<Wt;z++)for(let R=0;R<Jt;R++)(z<=1||z>=Wt-2||R<=3)&&u(z,O,R)&&l(z,O,R,N);for(let O=3;O<=y;O++){const z=6-Math.max(0,Math.min(3,y-O));for(let R=x-z;R<x+z;R++)for(let P=0;P<=2;P++)u(R,O,P)&&l(R,O,P,N)}for(let O=0;O<=14;O++){const z=O/14;tt(x,X-10*z*z,1.5-4.4*Math.sqrt(z),2.7-1.3*z,N)}tt(x,X-.5,-.6,2.1,At.band);break}case"longhair":{const N=At.hair,X=Jt-5,O=2;G(N,2);for(let z=0;z<Yt;z++)for(let R=0;R<Wt;R++)for(let P=0;P<Jt;P++){if(!u(R,z,P))continue;const V=P>=X,j=R<O||R>=Wt-O;V&&!j||V&&j&&z>=v&&z<=y||l(R,z,P,N)}for(let z=Math.max(Yt-3,y+2);z<Yt;z++)for(let R=0;R<Wt;R++)for(let P=X;P<Jt;P++)u(R,z,P)&&l(R,z,P,N);for(let z=0;z<Wt;z++)for(let R=0;R<Jt;R++){if(!(z<O||z>=Wt-O||R<O)||f(z,R)<0)continue;let V=0;for(;!u(z,V,R);)V++;for(let j=V-1;j>=V-3;j--)l(z,j,R,N)}break}case"buzz":{const N=At.hair,X=hn(At.hair,1.75),O=Math.min(Yt-2,Math.max(y+3,Yt-3));for(let z=0;z<Wt;z++)for(let R=0;R<Jt;R++){const P=f(z,R);if(P<0)continue;const V=Math.abs(z+.5-x),st=R>=Jt-6?V<5.5?0:V<6.5?1:2:3,K=Math.max(y+1,Math.min(O-st,P-1));for(let at=K;at<=P;at++)u(z,at,R)&&l(z,at,R,at<O?X:N)}break}case"bun":{const N=hn(At.hair,.74),X=y+2;for(let R=0;R<Wt;R++)for(let P=0;P<Jt;P++){const V=f(R,P);if(V<X)continue;const j=P<=5?5:P<=9?3:2;for(let st=V;st>V-j&&st>=X;st--)u(R,st,P)&&l(R,st,P,At.hair);l(R,V+1,P,At.hair)}const O=4.5,z=f(x,4);tt(x,z+3,O,3.1,At.hair);for(let R=x-4;R<x+4;R++)for(let P=1;P<=8;P++)if(Math.hypot(R+.5-x,P+.5-O)<=2.6)for(let V=z+1;V<=z+2;V++)l(R,V,P,N);break}case"braids":{G(At.hair,2);for(let O=y+1;O<Yt;O++)for(let z=0;z<Wt;z++)for(let R=0;R<Jt;R++)(z<=1||z>=Wt-2||R<=1)&&u(z,O,R)&&l(z,O,R,At.hair);const N=hn(At.hair,1.3),X=-5;for(const O of[-1,Wt]){const z=Math.max(0,Math.min(Wt-1,O)),R=Math.min(f(z,6),Yt-4);if(!(R<0)){for(let P=X;P<=R;P++){const V=P<=X+3,j=P<=X+1;let st=(P%4+4)%4<2?At.hair:N;j&&(st=At.band);for(let K=-1;K<=1;K++)for(let at=-1;at<=1;at++)(!V||Math.abs(K)+Math.abs(at)<2)&&l(O+K,P,6+at,st)}tt(O+.5,X-2,6.5,1.9,At.band)}}break}}r=null;const Z=.18,et=.25;let ft=-1;if(a.size){const N=new Map;let X=0,O=0;for(const P of a){const V=n.get(P);if(!V)continue;O++;const j=`${V.c[0]},${V.c[1]},${V.c[2]}`,st=N.get(j);st?st.n++:N.set(j,{n:1,c:V.c,chroma:(Math.max(...V.c)-Math.min(...V.c))/255}),N.get(j).chroma>=Z&&X++}const z=O>0&&X/O<et;let R=null;for(const P of N.values())!z&&P.chroma<Z||(!R||P.n>R.n)&&(R=P);R&&(ft=go(R.c)[0])}else o.size&&(ft=go(Xl)[0]);if(ft>=0){const N=s.hairColor*360-ft;if(Math.abs(N)>.5)for(const X of[...a,...o]){const O=n.get(X);O&&(O.c=Gv(O.c,N))}}return{voxels:[...n.values()],anchor:ft}}function Jv(s){return Zv(s).voxels}const Qv=[{n:[1,0,0],t1:[0,1,0],t2:[0,0,1]},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0]},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0]},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1]},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0]},{n:[0,0,-1],t1:[0,1,0],t2:[1,0,0]}],ma=.42,kr=new kt,Gh=(s,t,e)=>(kr.setRGB(s/255,t/255,e/255,Ie),[kr.r,kr.g,kr.b]);function jv(s,t){const e=new Map;for(const M of s)e.set(`${M.x},${M.y},${M.z}`,M);const n=(M,T,L)=>e.get(`${M},${T},${L}`),i=(M,T)=>M[0]===T[0]&&M[1]===T[1]&&M[2]===T[2],r=(M,T)=>i(M.c,T.c)||!!M.blend&&(!!T.blend||i(M.blend,T.c))||!!T.blend&&i(T.blend,M.c);let o=1/0,a=1/0,c=1/0,l=-1/0,h=-1/0,u=-1/0;for(const M of s)M.x<o&&(o=M.x),M.y<a&&(a=M.y),M.z<c&&(c=M.z),M.x>l&&(l=M.x),M.y>h&&(h=M.y),M.z>u&&(u=M.z);const f=t?t[0]:(o+l)/2,d=t?t[1]:(a+h)/2,p=t?t[2]:(c+u)/2,x=[],g=[],m=[],S=[],E=[],v=new Set;for(const M of s){const T=M.x-f,L=M.y-d,D=M.z-p,B=Gh(M.c[0],M.c[1],M.c[2]),H=Gh(M.c[0]*ma,M.c[1]*ma,M.c[2]*ma);for(const{n:G,t1:J,t2:W}of Qv){if(n(M.x+G[0],M.y+G[1],M.z+G[2]))continue;const tt=(N,X)=>[T+G[0]/2+J[0]*N+W[0]*X,L+G[1]/2+J[1]*N+W[1]*X,D+G[2]/2+J[2]*N+W[2]*X],k=tt(-.5,-.5),Z=tt(.5,-.5),et=tt(.5,.5),ft=tt(-.5,.5);for(const N of[k,Z,et,k,et,ft])x.push(N[0],N[1],N[2]),g.push(G[0],G[1],G[2]),m.push(B[0],B[1],B[2]);for(const[N,X,O]of[[J,W,1],[J,W,-1],[W,J,1],[W,J,-1]]){const z=n(M.x+N[0]*O,M.y+N[1]*O,M.z+N[2]*O);if(z&&r(z,M)&&!n(M.x+N[0]*O+G[0],M.y+N[1]*O+G[1],M.z+N[2]*O+G[2]))continue;const R=dt=>[T+G[0]/2+N[0]*O/2+X[0]*dt/2,L+G[1]/2+N[1]*O/2+X[1]*dt/2,D+G[2]/2+N[2]*O/2+X[2]*dt/2],P=R(1),V=R(-1),j=P.map(dt=>dt.toFixed(2)).join(),st=V.map(dt=>dt.toFixed(2)).join(),K=j<st?`${j}|${st}`:`${st}|${j}`;if(v.has(K))continue;v.add(K);const at=.006;S.push(P[0]+G[0]*at,P[1]+G[1]*at,P[2]+G[2]*at,V[0]+G[0]*at,V[1]+G[1]*at,V[2]+G[2]*at),E.push(H[0],H[1],H[2],H[0],H[1],H[2])}}}const y=new Ee;y.setAttribute("position",new qt(x,3)),y.setAttribute("normal",new qt(g,3)),y.setAttribute("color",new qt(m,3));const b=new Ee;b.setAttribute("position",new qt(S,3)),b.setAttribute("color",new qt(E,3));const C=[(l-o)/2+.5,(h-a)/2+.5,(u-c)/2+.5],_=Math.max(C[0],C[1],C[2])*1.15;return{faces:y,edges:b,radius:_}}const cf=["raise0","raise1","inner0","inner1","arch0","arch1","lid0","lid1","tilt0","tilt1","low0","low1","pupil","smile","open","skew","round","roll","nod"],te=(s,t)=>({[s+"0"]:t,[s+"1"]:t}),tM={calm:{...te("lid",.1),smile:.08},pleased:{...te("lid",.2),...te("low",.3),...te("raise",.1),smile:.65},happy:{...te("raise",.35),...te("arch",.25),...te("low",.42),smile:.9,open:.16},joy:{...te("raise",.85),...te("arch",.4),...te("low",.55),smile:1,open:.6,roll:.06},surprised:{...te("raise",1.5),...te("arch",.45),...te("lid",-.14),pupil:.7,open:.8,round:1},curious:{raise0:.2,raise1:1.05,arch0:.2,arch1:.75,lid0:.16,lid1:-.04,roll:.17,round:.4,open:.12,smile:.1},doubt:{raise0:-.55,raise1:1,inner0:-.38,lid0:.42,tilt0:.3,lid1:.04,skew:.65,smile:-.08,roll:-.07},thinking:{raise0:.55,inner1:.35,raise1:-.1,...te("lid",.2),skew:.42},sad:{...te("inner",.95),...te("raise",-.1),...te("lid",.36),...te("tilt",-.5),smile:-.75,nod:.08},bored:{...te("lid",.5),...te("raise",-.28),smile:-.15,skew:.25,nod:.05},sleepy:{...te("lid",.72),...te("tilt",-.25),...te("raise",-.2),...te("inner",.2),smile:-.05,nod:.18},yawn:{...te("lid",1),...te("raise",.75),...te("inner",.3),open:1,round:.55,nod:-.14},asleep:{...te("lid",1.05),...te("raise",-.12),...te("inner",.12),smile:.05,open:.06},excited:{...te("raise",.9),...te("inner",-.1),...te("lid",-.06),smile:.95,open:.38,pupil:1.12},asking:{...te("raise",.85),...te("arch",.3),...te("lid",.04),roll:.12,smile:.25}},eM={surprised:24,excited:14,joy:12,doubt:10,curious:9,sad:4,sleepy:3,bored:4,yawn:5,asleep:2.5},Vh=()=>Object.fromEntries(cf.map(s=>[s,s==="pupil"?1:0])),nM=s=>new kt().setRGB(s[0]/255,s[1]/255,s[2]/255,Ie);class iM{constructor(t){I(this,"head",new Pe);I(this,"solid",[]);I(this,"drop");I(this,"roll",0);I(this,"nod",0);I(this,"own",[]);I(this,"brows",[]);I(this,"eyes",[]);I(this,"mouth",[]);I(this,"seam",0);I(this,"lipH",.5);I(this,"browLo",0);I(this,"browHi",0);I(this,"d",Vh());I(this,"mood","calm");I(this,"feeling",null);I(this,"feelFor",0);I(this,"blinkIn",1.5);I(this,"blinkT",-1);I(this,"blinkLen",.13);I(this,"glance",new Bt);I(this,"glanceIn",1);I(this,"micro",new Bt);I(this,"microIn",.5);I(this,"talkT",0);I(this,"syl",0);I(this,"sylLen",.16);I(this,"sylAmp",0);I(this,"sylRound",0);I(this,"pause",0);I(this,"beat",0);I(this,"wasTalking",!1);I(this,"lookX",0);I(this,"lookY",0);const e=Jv(t);let n=1/0,i=1/0,r=1/0,o=-1/0,a=-1/0,c=-1/0;for(const k of e)n=Math.min(n,k.x),o=Math.max(o,k.x),i=Math.min(i,k.y),a=Math.max(a,k.y),r=Math.min(r,k.z),c=Math.max(c,k.z);const l=(n+o)/2,h=(i+a)/2,u=(r+c)/2;this.drop=(h-(Yt-1)/2)/16;const f=ql(t),d=8,p=k=>k<d?0:1,x=[!1,!1];for(const k of e)k.part==="eye"&&(x[p(k.x)]=!0);const g=[236,240,246],m=e.map(k=>k.part==="brow"||k.part==="mouth"?{...k,c:f,part:void 0}:k.part==="pupil"&&x[p(k.x)]?{...k,c:g}:k),{faces:S,edges:E}=jv(m,[l,h,u]),v=new ao({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),y=new Su({vertexColors:!0});this.own.push(S,E,v,y);const b=new Te(S,v);this.head.add(b,new Qd(E,y)),this.solid.push(b);const C=new vn(1,1,1);this.own.push(C);const _=new Map,M=k=>{const Z=k.join();let et=_.get(Z);return et||(et=new ao({color:nM(k)}),_.set(Z,et),this.own.push(et)),et},T=k=>{const Z=new Te(C,M(k));return this.head.add(Z),this.solid.push(Z),Z},L=k=>k.z-u+.5,D=e.filter(k=>k.part==="brow");for(const k of[0,1]){const Z=D.filter(z=>p(z.x)===k);if(!Z.length)continue;const et=Z.map(z=>z.x),ft=Math.min(...et),N=Math.max(...et),X=(ft+N)/2,O=Math.max(.5,(N-ft)/2);for(const z of Z){const R=k===0?(X-z.x)/O:(z.x-X)/O;this.brows.push({m:T(z.c),x:z.x-l,y:z.y-h,z:L(z),xn:R,side:k})}}const B=e.filter(k=>k.part==="eye"||k.part==="pupil"),H=f.map(k=>Math.round(k*.88));let G=-1/0;for(const k of[0,1]){const Z=B.filter(Ct=>p(Ct.x)===k);if(!Z.length)continue;const et=Z.map(Ct=>Ct.x),ft=Z.map(Ct=>Ct.y),N=Math.min(...et),X=Math.max(...et),O=Math.min(...ft),z=Math.max(...ft);G=Math.max(G,z);const R=Math.max(...Z.map(L)),P=(N+X)/2-l,V=(O+z)/2-h,j=X-N+1,st=z-O+1;let K=null;const at=Math.max(1,j-2),dt=Math.max(1,st-2);if(x[k]){const Ct=Z.find(Vt=>Vt.part==="pupil").c;K=T(Ct),K.scale.set(at,dt,.05)}const gt=[];for(let Ct=N;Ct<=X;Ct++){const Vt=j>1?k===0?(Ct-N)/(j-1):(X-Ct)/(j-1):.5;gt.push({x:Ct-l,k:Vt,up:T(H),low:T(H)})}this.eyes.push({side:k,y0:O-h-.5,y1:z-h+.5,z:R,cx:P,cy:V,pupil:K,pw:at,ph:dt,reach:(j-at)/2,cols:gt})}const J=e.filter(k=>k.part==="mouth");if(J.length){const k=[...new Set(J.map(R=>R.x))].sort((R,P)=>R-P),Z=J.map(R=>R.y),et=Math.min(...Z),ft=Math.max(...Z),N=ft-et+1;this.seam=N>=2?(et+ft)/2-h:et-h,this.lipH=N>=2?1:.5;const X=(k[0]+k[k.length-1])/2,O=Math.max(.5,(k[k.length-1]-k[0])/2),z=J[0].c;for(const R of k){const P=Math.max(...J.filter(V=>V.x===R).map(L));this.mouth.push({x:R-l,z:P,xn:(R-X)/O,top:T(z),bot:T(z),inside:T([46,22,28])})}}const W=this.brows.map(k=>k.y),tt=Math.max(...e.filter(k=>k.c[0]===f[0]&&k.c[1]===f[1]&&k.c[2]===f[2]).map(k=>k.y));this.browLo=G===-1/0?-2:G-h+.85-(W.length?Math.min(...W):0),this.browHi=tt-h-.8-(W.length?Math.max(...W):0),this.apply()}setMood(t){this.mood=t}feel(t,e=2.4){this.feeling=t,this.feelFor=e}blink(t=!1){this.blinkT<0&&(this.blinkT=0,this.blinkLen=t?.38:.13)}get current(){return this.feeling??this.mood}update(t,e,n,i=null){this.feeling&&(this.feelFor-=t,this.feelFor<=0&&(this.feeling=null));const r=this.current,o={...Vh(),...tM[r]};if(i!==null&&(o.open=.05+.2*Math.max(0,Math.sin(Math.PI*2*(i-.5))),o.round=.6),n!==null){if(this.talkT+=t,this.syl-=t,this.pause>0&&(this.pause-=t),this.syl<=0){this.sylLen=.13+Math.random()*.08,this.syl=this.sylLen;const d=n.toLowerCase();".!?".includes(d)?(this.pause=.22,this.sylAmp=0):",;:".includes(d)?(this.pause=.1,this.sylAmp=.1):d===" "?this.sylAmp=.15:"aeiouy".includes(d)?this.sylAmp=.6+Math.random()*.35:this.sylAmp=.28+Math.random()*.2,this.sylRound="ou".includes(d)?.8:0,Math.random()<.16&&(this.beat=1),Math.random()<.05&&this.blink()}const u=1-this.syl/this.sylLen,f=this.pause>0?0:this.sylAmp*Math.pow(Math.sin(Math.PI*u),.65);o.open=Math.max(o.open*.6,f),o.round=Math.max(o.round,this.sylRound*f),o.lid0-=.05,o.lid1-=.05,this.wasTalking=!0}else this.wasTalking&&(this.wasTalking=!1,this.blink());this.beat=Math.max(0,this.beat-t*4),o.raise0+=.42*this.beat,o.raise1+=.42*this.beat,o.nod+=.05*this.beat;const a=eM[r]??8;for(const u of cf){const f=u==="open"||u==="round"?30:u.startsWith("raise")?Math.max(a,12):a;this.d[u]+=(o[u]-this.d[u])*Math.min(1,t*f)}this.blinkIn-=r==="asleep"?0:t,this.blinkIn<=0&&(this.blink(r==="sleepy"),this.blinkIn=(r==="sleepy"?3:1.8)+Math.random()*3.6,Math.random()<.18&&(this.blinkIn=.28));let c=0;if(this.blinkT>=0){this.blinkT+=t;const u=this.blinkT/this.blinkLen;c=u<.4?u/.4:u<.55?1:1-(u-.55)/.45,u>=1&&(this.blinkT=-1)}this.glanceIn-=t,this.glanceIn<=0&&(this.glance.set((Math.random()-.5)*1.2,(Math.random()-.5)*.7),this.glanceIn=1.4+Math.random()*2.4),this.microIn-=t,this.microIn<=0&&(this.micro.set((Math.random()-.5)*.24,(Math.random()-.5)*.16),this.microIn=.35+Math.random()*.9);let l=this.glance.x,h=this.glance.y;if(e){const u=Math.max(.4,Math.abs(e.z));l=e.x/u*1.6,h=e.y/u*1.6}r==="thinking"&&(l=.7,h=.6),this.lookX+=(en.clamp(l+this.micro.x,-1,1)-this.lookX)*Math.min(1,t*16),this.lookY+=(en.clamp(h+this.micro.y,-1,1)-this.lookY)*Math.min(1,t*16),this.roll=this.d.roll,this.nod=this.d.nod,this.apply(c)}apply(t=0){const e=this.d,n=r=>e[r],i=.1;for(const r of this.brows){const o=r.side;let a=n("raise"+o)+n("inner"+o)*-r.xn*.65+n("arch"+o)*(1-r.xn*r.xn)*.9;a=en.clamp(a,this.browLo,this.browHi),r.m.position.set(r.x,r.y+a,r.z+.14+i/2),r.m.scale.set(1.001,1,i)}for(const r of this.eyes){const o=r.side,a=r.y1-r.y0;for(const c of r.cols){const l=en.clamp(Math.max(t*1.05,n("lid"+o)+n("tilt"+o)*(c.k-.5)*1.2),0,1.05)*a,h=.75+.5*(1-Math.abs(2*c.k-1)),u=t>.5?0:en.clamp(n("low"+o)*h,0,1)*a*.6;this.lid(c.up,c.x,r.y1+.08,-(l+(l>.01?.08:0)),r.z),this.lid(c.low,c.x,r.y0-.08,u+(u>.01?.08:0),r.z)}if(r.pupil){const c=en.clamp(e.pupil,.6,1.25);r.pupil.scale.set(r.pw*c,r.ph*c,.05),r.pupil.position.set(r.cx+this.lookX*r.reach*.95,r.cy+this.lookY*r.reach*.7,r.z+.02)}}for(const r of this.mouth){const o=r.xn,a=e.smile*(1.25*o*o-.25)+e.skew*o*.7,c=en.clamp(e.round,0,1),l=Math.max(0,e.open)*(1-.55*o*o)*(1-c*.75*o*o)*2.4,h=1-c*.35*Math.max(0,Math.abs(o)-.5)*2,u=this.seam+a;r.top.position.set(r.x,u+this.lipH/2,r.z+.01+i/2),r.top.scale.set(h,this.lipH,i),r.bot.position.set(r.x,u-l-this.lipH/2,r.z+.01+i/2),r.bot.scale.set(h,this.lipH,i),r.inside.visible=l>.02,r.inside.position.set(r.x,u-l/2,r.z+.005+i/4),r.inside.scale.set(h*.98,Math.max(.001,l),i/2)}}lid(t,e,n,i,r){const o=Math.abs(i);t.visible=o>.01,t.visible&&(t.position.set(e,n+i/2,r+.07+.03),t.scale.set(1.001,o,.06))}dispose(){for(const t of this.own)t.dispose()}}function sM(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Ee;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Wh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const p=Wh(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Wh(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new _n(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){const x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const ye=22,hf=.6,Ze=Math.PI*2,be=(s,t,e)=>s<t?t:s>e?e:s,Dn=s=>s<0?0:s>1?1:s,Dt=(s,t,e)=>s+(t-s)*e,ee=s=>{const t=Dn(s);return t*t*(3-2*t)},rM=s=>{const t=Dn(s);return t*t*t*(t*(t*6-15)+10)},os=s=>s-Math.floor(s),mn=s=>Math.atan2(Math.sin(s),Math.cos(s)),uf=(s,t)=>.05+.4*Math.max(0,1-s/(.55*t)),ti=-.06,nn=.11,Qe=.19;class oM{constructor(t){I(this,"xs",[]);I(this,"zs",[]);I(this,"cum",[]);I(this,"total",0);const e=[];for(const i of t)(!e.length||Math.hypot(i.x-e[e.length-1].x,i.z-e[e.length-1].z)>1e-4)&&e.push(i);const n=(i,r)=>{const o=this.xs.length;if(o){const a=Math.hypot(i-this.xs[o-1],r-this.zs[o-1]);if(a<1e-5)return;this.total+=a}this.xs.push(i),this.zs.push(r),this.cum.push(this.total)};n(e[0].x,e[0].z);for(let i=1;i<e.length-1;i++){const r=e[i-1],o=e[i],a=e[i+1],c=Math.hypot(o.x-r.x,o.z-r.z),l=Math.hypot(a.x-o.x,a.z-o.z),h=(o.x-r.x)/c,u=(o.z-r.z)/c,f=(a.x-o.x)/l,d=(a.z-o.z)/l;if(h*f+u*d>.999){n(o.x,o.z);continue}const p=Math.min(.42,c*.5,l*.5),x=o.x-h*p,g=o.z-u*p,m=o.x+f*p,S=o.z+d*p;for(let E=0;E<=8;E++){const v=E/8,y=1-v;n(y*y*x+2*y*v*o.x+v*v*m,y*y*g+2*y*v*o.z+v*v*S)}}e.length>1&&n(e[e.length-1].x,e[e.length-1].z)}seg(t){const e=this.cum;if(t<=0||e.length<2)return 0;if(t>=this.total)return e.length-2;let n=0,i=e.length-1;for(;i-n>1;){const r=n+i>>1;e[r]<=t?n=r:i=r}return n}at(t,e){if(this.xs.length<2)return e.x=this.xs[0],e.z=this.zs[0],e;const n=this.seg(t),i=this.cum[n+1]-this.cum[n],r=i>0?Dn((t-this.cum[n])/i):0;return e.x=Dt(this.xs[n],this.xs[n+1],r),e.z=Dt(this.zs[n],this.zs[n+1],r),e}yawAt(t){if(this.xs.length<2)return 0;const e=this.seg(be(t,0,this.total-1e-4));return Math.atan2(this.xs[e+1]-this.xs[e],this.zs[e+1]-this.zs[e])}}const Br=.05,Hr=.12;class aM{constructor(t,e){I(this,"L");I(this,"thigh");I(this,"shin");I(this,"footH",.06);I(this,"hipX",.17);I(this,"armLen");I(this,"legless");I(this,"pos",new F);I(this,"yaw",0);I(this,"lean",0);I(this,"roll",0);I(this,"twist",0);I(this,"swayRoll",0);I(this,"squash",0);I(this,"stretch",0);I(this,"feet");I(this,"arms");I(this,"onPuff",null);I(this,"onPrint",null);I(this,"airborne",!1);I(this,"rest","stand");I(this,"breath",0);I(this,"asleep",!1);I(this,"headDrop",0);I(this,"hipDrop",0);I(this,"scratch",null);I(this,"scratchIn",5);I(this,"world");I(this,"base",new F);I(this,"vy",0);I(this,"qv",0);I(this,"qRest",0);I(this,"leanV",0);I(this,"leanRest",0);I(this,"sv",0);I(this,"stretchRest",0);I(this,"speed",0);I(this,"accel",0);I(this,"lastSpeed",0);I(this,"wantYaw",null);I(this,"trip",null);I(this,"pending",null);I(this,"act",null);I(this,"phase",0);I(this,"running",0);I(this,"clockOn",!1);I(this,"gRef",0);I(this,"held",!1);I(this,"wallSide",0);I(this,"sway",0);I(this,"swayV",0);I(this,"shift",0);I(this,"shiftIn",3);I(this,"clock",0);I(this,"tapT",-1);I(this,"seq",null);I(this,"queued",[]);I(this,"restYaw",null);I(this,"anchor",{x:0,z:0,g:0,yaw:0});I(this,"t1",new F);I(this,"t2",new F);I(this,"t3",new F);I(this,"e1",new yn);this.world=e,this.L=Math.max(0,t-1),this.legless=this.L<.3;const n=Math.max(.3,this.L)-this.footH;this.thigh=n/2,this.shin=n/2,this.armLen=this.legless?.34:Math.min(3,Math.max(.6,this.L))*.85;const i=o=>({side:o,mode:"ground",sole:new F,yaw:0,pitch:0,from:new F,to:new F,fromYaw:0,toYaw:0,s:0,dur:.3,clocked:!1,apex:0,rel:new F,kneeOut:0,sy:0,ankle:new F,q:new ve,toe:0});this.feet=[i(-1),i(1)];const r=o=>({side:o,pitch:0,out:.08,elbow:.2,vp:0,vo:0,ve:0,tp:0,to:.08,te:.2,reach:null,reachW:0,flat:!1});this.arms=[r(-1),r(1)]}get legW(){return Math.max(.5,this.L)}gaitSpeed(t){const e=this.legW;return this.legless?t==="bound"?4.5:t==="run"?3.2:1.6:t==="walk"?Math.sqrt(.09*ye*e):t==="run"?Math.sqrt(.45*ye*e):Math.min(9,Math.sqrt(1.15*ye*e))}get boundFreq(){return Math.max(.85,1/(2*.43*Math.sqrt(this.legW/2)))}strideAt(t){const e=this.legW,n=Math.max(.02,t*t/(ye*e)),i=be(2*n**.3*e,.35*e,2.6*e),r=Math.max(i,t/this.boundFreq);return Dt(i,r,this.running)}get duty(){return Dt(.6,.2,this.running)}standY(t){return this.legless?t+.5:t+this.footH+(this.thigh+this.shin)*.975+.5}stepUpMax(){return .42*this.L+.02}stepDownMax(){return .7*this.L+.02}jumpUpMax(){return .82*this.L}place(t,e,n){this.trip=null,this.act=null,this.pending=null,this.seq=null,this.queued=[],this.rest="stand",this.asleep=!1,this.clockOn=!1,this.speed=0,this.yaw=n,this.wantYaw=null,this.base.set(t,0,e),this.pos.set(t,this.standY(this.world.groundAt(t,e)),e),this.gRef=this.world.groundAt(t,e),this.vy=0,this.lean=0,this.roll=0;for(const i of this.feet)this.neutral(i,this.base,n,i.sole),i.mode="ground",i.yaw=n,i.pitch=0;this.resolveFeet()}busy(){return!!this.trip||!!this.act||!!this.pending||!!this.seq||this.rest!=="stand"}travel(t,e,n,i="stroll"){if(this.act&&this.act.kind==="leap"||this.rest!=="stand"||this.seq){this.trip=null,this.pending={cells:t,gait:e,onArrive:n,stride:i},(this.rest!=="stand"||this.seq)&&this.setRest("stand");return}if(this.act=null,this.feetDown(),!t.length){this.trip=null,n==null||n();return}const r={x:this.base.x,z:this.base.z},o=this.legless?[{kind:"path",pts:[r,...t]}]:this.split(r,t);this.trip={gait:e,stride:i,legs:o,path:null,s:0,ground:null,settle:0,onArrive:n},this.nextLeg()}stop(){this.trip=null,this.pending=null}turnTo(t){this.wantYaw=t}perform(t,e){if(this.act||this.rest!=="stand"||this.seq)return!1;const n={wave:1.3,cheer:1,spin:1.15,jump:1,sigh:1.4,tap:1.6}[t];return this.act={kind:t,t:0,dur:n,then:e,yaw0:this.yaw},(t==="jump"||t==="cheer")&&(this.act.jump=this.makeJump(!1,this.pos.clone(),t==="jump"?.5+.12*this.L:.28+.06*this.L,this.yaw)),t==="tap"&&(this.tapT=0),!0}setRest(t,e){if(this.legless&&t!=="stand")return!1;const n=this.queued.length?this.queued[this.queued.length-1]:this.seq?this.seq.to:this.rest;if(n===t)return!0;if(n==="stand"&&t!=="stand"){const r=this.restWay(this.base.x,this.base.z,e??this.yaw);if(!r)return!1;t==="lie"&&!r.lie&&(t="kneel"),this.restYaw=r.yaw}else if(t==="lie"&&!this.roomToRest(this.seq||this.rest!=="stand"?this.anchor.yaw:this.restYaw??this.yaw,!0))return!1;const i=[];return t==="lie"&&n==="stand"?i.push("kneel","lie"):t==="kneel"&&n==="lie"?i.push("stand","kneel"):i.push(t),this.queued.push(...i),t!=="stand"&&(this.trip=null,this.act=null),!0}restWay(t,e,n){const i=[0,.4,-.4,.8,-.8,1.2,-1.2,1.6,-1.6,2.1,-2.1,Math.PI].map(a=>n+a),r=i.find(a=>this.roomToRest(a,!0,t,e));if(r!==void 0)return{yaw:r,lie:!0};const o=i.find(a=>this.roomToRest(a,!1,t,e));return o===void 0?null:{yaw:o,lie:!1}}roomAt(t,e,n){return this.legless?null:this.restWay(t,e,n)}roomToRest(t,e,n=this.base.x,i=this.base.z){const r=this.world.groundAt(n,i),o=this.thigh+this.shin,a=Math.cos(t),c=Math.sin(t),l=(u,f)=>Math.abs(this.world.groundAt(n+a*u+c*f,i-c*u+a*f)-r)<.25,h=this.thigh+.4;for(let u=.3;u<h;u+=.3)if(!l(-.45,u)||!l(.45,u))return!1;if(!l(-.45,h)||!l(.45,h)||!l(0,-.45))return!1;if(!e)return!0;for(let u=.3;u<=o*.95+.35;u+=.3)if(!l(-.3,u)||!l(.3,u))return!1;if(!l(-.7,-.5)||!l(.7,-.5)||!l(0,-.6))return!1;for(let u=.1;u<=1.05;u+=.16)for(let f=.5;f<=o*.92+.35;f+=.3)if(!l(.25+Math.sin(u)*f,Math.cos(u)*f))return!1;for(const[u,f]of[[-.8,-.5],[-.8,0],[-.8,.5],[-.6,1.1],[-.3,.9]])if(!l(u,f))return!1;return!0}get lyingStill(){return this.rest==="lie"&&!this.seq}get idle(){return!this.trip&&!this.act&&!this.pending&&!this.seq&&this.rest==="stand"}split(t,e){const n=[];let i=[t],r={x:Math.round(t.x),z:Math.round(t.z)},o=this.world.groundAt(r.x,r.z);for(const a of e){const c=this.world.groundAt(a.x,a.z),l=c-o,h=l>this.stepUpMax()?l>this.jumpUpMax()?"climb":"jump":-l>this.stepDownMax()?"drop":null;if(h){const u={x:Math.sign(a.x-r.x),z:Math.sign(a.z-r.z)},f=h==="climb"?l>this.L?0:.12:h==="jump"?.14:.12;i.push({x:r.x+u.x*f,z:r.z+u.z*f}),n.push({kind:"path",pts:i}),n.push({kind:"edge",type:h,a:r,b:a,ha:o,hb:c}),i=[{x:a.x,z:a.z}]}else i.push(a);r=a,o=c}return i.length>1&&n.push({kind:"path",pts:i}),n}nextLeg(){var n;const t=this.trip,e=t.legs.shift();if(t.settle=0,!e){this.trip=null,(n=t.onArrive)==null||n.call(t);return}if(e.kind==="path"){const i=new oM(e.pts);if(t.path=i,t.s=0,this.legless){t.ground=[];for(let r=0;r<=i.total+Br;r+=Br)i.at(r,this.t1),t.ground.push(this.world.groundAt(this.t1.x,this.t1.z))}else this.clockOn||this.startClock(i.yawAt(.05))}else{t.path=null,this.clockOn=!1;const i={x:Math.sign(e.b.x-e.a.x),z:Math.sign(e.b.z-e.a.z)},r=new F(e.b.x-i.x*.05,this.standY(e.hb),e.b.z-i.z*.05),o=e.type==="climb",a=o?.3+.05*this.L:e.hb>e.ha?.22+.04*this.L:.06+.03*this.L;if(this.act={kind:"leap",t:0,dur:9,yaw0:this.yaw},this.act.jump=this.makeJump(e.type==="drop",r,a,Math.atan2(i.x,i.z)),o){const c={x:(e.a.x+e.b.x)/2,z:(e.a.z+e.b.z)/2},l={x:i.z,z:-i.x};this.act.jump.grip=[-1,1].map(h=>new F(c.x+l.x*h*.3+i.x*.14,e.hb+.01,c.z+l.z*h*.3+i.z*.14))}}}startClock(t){const e=Math.sin(t),n=Math.cos(t),i=o=>(o.sole.x-this.base.x)*e+(o.sole.z-this.base.z)*n;for(const o of this.feet)o.mode==="swing"&&!o.clocked&&(o.mode="ground",o.sole.copy(o.to),o.yaw=o.toYaw);const r=i(this.feet[0])<=i(this.feet[1])?0:1;this.phase=r*.5+this.duty+.001,this.clockOn=!0}update(t){const e=Math.min(t,.05),n=Math.max(1,Math.ceil(e/(1/120)));for(let i=0;i<n;i++)this.step(e/n)}step(t){this.clock+=t,this.airborne=!1;for(const n of this.arms)n.reach=null,n.flat=!1;const e=this.trip;!this.seq&&this.queued.length&&!this.act&&!e&&this.readyToRest()&&this.beginRest(),this.seq||this.rest!=="stand"?this.stepRest(t):this.asleep?this.breath=os(this.breath+t/3.6):this.act?this.stepAct(t):e&&e.path?this.legless?this.stepHopper(t,e):this.stepWalk(t,e):this.stepStand(t),this.stepSprings(t),this.resolveFeet(t)}stepWalk(t,e){const n=e.path,i=this.gaitSpeed(e.gait),r=e.gait==="bound",o=r?4.5:e.gait==="run"?4:3,a=r?4.5:e.gait==="run"?5:4.5,c=n.total-e.s;let l=Math.min(i,Math.sqrt(2*a*.7*Math.max(0,c-.03))),h=1/0;this.held=!1;for(const b of this.feet)b.mode==="ground"&&(h=Math.min(h,b.sole.y));if(h<1/0){const b=Math.sin(this.yaw),C=Math.cos(this.yaw),_=this.world.groundAt(this.base.x,this.base.z);for(let M=0;M<=.8;M+=.05){const T=this.world.groundAt(this.base.x+b*M,this.base.z+C*M);if(T>Math.max(h,_)+.2){T<=h+this.stepUpMax()+.05&&(l=Math.min(l,Math.sqrt(2*a*2*Math.max(0,M-.18))),this.held=M<.45);break}}}const u=Math.abs(mn(n.yawAt(Math.min(n.total,e.s+.25))-this.yaw));l*=Dn((1.6-u)/1.1);const f=be((l-this.speed)*3,-a*1.6,o);this.accel+=(f-this.accel)*Math.min(1,t*5),this.speed=Math.max(0,this.speed+this.accel*t),c<=.01&&(this.speed=0,this.accel=0);const d=this.gaitSpeed("walk"),p=this.gaitSpeed("bound"),x=Dn((this.speed-d*1.05)/(p*.85-d*1.05));this.running+=(x-this.running)*Math.min(1,t*6),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base);const g=n.yawAt(Math.min(n.total,e.s+.25+.3*this.running)),m=Dt(4.5,8,this.running)*t;this.yaw+=be(mn(g-this.yaw),-m,m);const S=d/this.strideAt(d),E=Math.max(S*Dt(.75,1.5,ee((u-.3)/.6)),this.speed/this.strideAt(Math.max(this.speed,.15))),v=this.duty,y=this.running>.45;if(this.clockOn){this.phase+=E*t;for(let b=0;b<2;b++){const C=this.feet[b],_=os(this.phase-b*.5);_<v?C.mode==="swing"&&C.clocked&&this.touchDown(C,y?1:.55):(C.mode!=="swing"&&(this.liftOff(C,!0,0),this.feet.every(M=>M.mode!=="ground")&&(this.qv+=1.6*this.running)),C.s=(_-v)/(1-v),C.s<.7&&this.aimSwing(C,e,(1-_)/E,v/2/E)),this.footPitch(C,_,v,y)}}if(this.airborne=this.clockOn&&this.feet.every(b=>b.mode==="swing"),this.stretchRest=this.airborne?.09*this.running:0,c<=.01){if(this.clockOn){for(const C of this.feet)C.mode!=="swing"||!C.clocked||(C.clocked=!1,C.dur=Math.max(.08,(1-C.s)*((1-v)/E)),C.s=0,C.from.set(C.ankle.x,C.ankle.y-this.footH,C.ankle.z),C.fromYaw=C.yaw,C.apex=Math.max(C.from.y,C.to.y)+.02);this.clockOn=!1}this.stepStand(t,!0),e.settle+=t,(this.feet.every(C=>C.mode==="ground")&&e.settle>.12||e.settle>.9)&&this.nextLeg();return}this.bodyOver(t,y?"run":"walk",E,v,e.stride)}liftOff(t,e,n){t.from.copy(t.sole),t.fromYaw=t.yaw,t.to.copy(t.sole),t.toYaw=t.yaw,t.mode="swing",t.clocked=e,t.s=0,t.dur=n,t.apex=t.sole.y+.1,t.sy=t.sole.y}touchDown(t,e){var n;t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,(n=this.onPrint)==null||n.call(this,t.sole,t.yaw),this.qv-=(.9+2.1*this.running)*e,this.vy-=(.3+.8*this.running)*e*Math.sqrt(this.legW/2)}aimSwing(t,e,n,i){const r=e.path,o=this.held?Math.max(this.speed,this.gaitSpeed("walk")*.8):this.speed,a=Math.min(r.total,e.s+Math.max(o*(n+i),this.held?.55:0)),c=r.at(a,this.t1),l=r.yawAt(a>=r.total-.01?r.total:a),h=Math.abs(mn(l-this.yaw))>1.2?this.yaw:l;this.neutral(t,c,h,t.to),t.toYaw=h,this.safeFoot(t.to,h),this.planApex(t,Dt(.06+.1*this.legW,.12+.2*this.legW,this.running)*(e.stride==="strut"?1.5:1))}neutral(t,e,n,i){const r=(this.hipX+.015)*t.side;return i.x=e.x+Math.cos(n)*r,i.z=e.z-Math.sin(n)*r,i.y=this.world.groundAt(i.x,i.z),i}safeFoot(t,e){const n=Math.sin(e),i=Math.cos(e),r=be(.3+.08*this.legW,.35,.55);for(let o=0;o<10;o++){const a=this.world.groundAt(t.x,t.z),c=this.world.groundAt(t.x+n*(Qe+.01),t.z+i*(Qe+.01)),l=this.world.groundAt(t.x+n*r,t.z+i*r),h=this.world.groundAt(t.x+n*(ti-.02),t.z+i*(ti-.02));if(c>a+.05||l>a+.25)t.x-=n*.06,t.z-=i*.06;else if(h<a-.05)t.x+=n*.05,t.z+=i*.05;else break}t.y=this.world.groundAt(t.x,t.z)}planApex(t,e){const n=e*be(Math.hypot(t.to.x-t.from.x,t.to.z-t.from.z)/(.45*this.legW),.3,1);let i=Math.max(t.from.y,t.to.y);for(let r=1;r<6;r++){const o=r/6;i=Math.max(i,this.world.groundAt(Dt(t.from.x,t.to.x,o),Dt(t.from.z,t.to.z,o)))}t.apex=i+n}footPitch(t,e,n,i){if(t.mode==="ground"){const r=e/n;i?t.pitch=r<.5?0:-.85*ee((r-.5)/.5):t.pitch=r<.12?.22*(1-ee(r/.12)):r<.6?0:-.7*ee((r-.6)/.4)}else if(t.mode==="swing"){const r=t.s;t.pitch=r<.3?Dt(-.7,-.8,r/.3):r<.82?Dt(-.8,0,ee((r-.3)/.52)):(i?-.05:.22)*ee((r-.82)/.18)}}bodyOver(t,e,n,i,r="stroll"){let o=this.shift;const a=r==="strut"?1:0,c=e!=="stand"&&this.clockOn,l=c?Math.min(1,this.speed/Math.max(.5,this.gaitSpeed("walk"))):0;let h=0;if(c)o=-(Dt(Dt(.95,1.2,a),.1,this.running)*(this.hipX+.015)*l)*Math.cos(Ze*(this.phase-i/2)),h=Dt(Dt(.09,.15,a),.04,this.running)*l*Math.sin(Ze*(this.phase-i/2));else{const E=this.feet.filter(v=>v.mode==="ground");E.length===1&&(o=E[0].side*this.hipX*.85)}o+=this.wallNudge();const u=e==="stand"?40:150;this.swayV+=(u*(o-this.sway)-2*Math.sqrt(u)*.9*this.swayV)*t,this.sway+=this.swayV*t,this.twist+=(h-this.twist)*Math.min(1,t*12),this.swayRoll+=((c?-.13*this.sway/Math.max(.1,this.hipX+.015):0)-this.swayRoll)*Math.min(1,t*10),this.pos.x=this.base.x+Math.cos(this.yaw)*this.sway,this.pos.z=this.base.z-Math.sin(this.yaw)*this.sway;const f=this.world.groundAt(this.pos.x,this.pos.z);if(this.legless){this.pos.y+=(f+.5+.006*Math.sin(this.clock*1.7)-this.pos.y)*Math.min(1,t*12);return}const d=this.reachTop();let p=d.soft-.012*this.legW;if(e!=="stand"){let E=-1/0,v=!1;for(const y of this.feet)y.mode==="ground"&&(E=Math.max(E,y.sole.y));for(const y of this.feet)y.mode==="swing"&&y.to.y>E+.2&&(v=!0);E>-1/0&&!v&&(p=Math.min(p,E+this.footH+(this.thigh+this.shin)*.955+.5))}if(c&&this.running<.45){const E=Dt(.045,.085,a)*this.legW*l*(1-this.running/.45),v=os(this.phase*2);p-=E*(.5-.5*Math.cos(Ze*(v-i)))}let x=p;if(this.gRef+=(this.world.groundAt(this.base.x,this.base.z)-this.gRef)*Math.min(1,t*12),e==="run"&&this.clockOn){const E=.5/n,v=i/n,y=Math.max(0,E-v),b=ye*y*v/Ze,C=this.speed*v/2,_=(this.thigh+this.shin)*.985,M=this.gRef+this.footH+Math.sqrt(Math.max(.25*_*_,_*_-C*C))+.5,T=os(this.phase*2),L=v/E;let D;if(T<L)D=M-b*Math.sin(Math.PI*(T/L));else{const B=(T-L)*E;D=M+ye*y/2*B-ye/2*B*B}x=Dt(p,D,ee((this.running-.45)/.25))}e==="stand"&&(x-=.006*this.legW*(1+Math.sin(this.clock*1.7)));for(const E of this.feet){if(E.mode!=="ground")continue;const v=this.kneeAt(E,this.t2),y=Math.sin(E.yaw)*.06,b=Math.cos(E.yaw)*.06;(this.world.solidAt(v.x,v.y,v.z)||this.world.solidAt(v.x+y,v.y-.06,v.z+b))&&(x=Math.max(x,d.hard))}const g=e==="run"?Ze*7:Ze*4.2,m=e==="run"?.9:.72;this.vy+=(g*g*(x-this.pos.y)-2*m*g*this.vy)*t,this.pos.y+=this.vy*t,this.pos.y>d.hard&&(this.pos.y=d.hard,this.vy>0&&(this.vy=0));const S=f+this.footH+.45*this.legW+.5;this.pos.y<S&&(this.pos.y=S,this.vy<0&&(this.vy=0))}plantedAnkle(t,e){const n=Math.sin(t.yaw),i=Math.cos(t.yaw),r=t.pitch,o=r>0?ti:r<0?nn:0,a=-o,c=this.footH,l=Math.cos(r),h=Math.sin(r),u=o+a*l-c*h;return e.set(t.sole.x+n*u,t.sole.y+a*h+c*l,t.sole.z+i*u)}kneeAt(t,e){const n=Math.cos(this.yaw),i=Math.sin(this.yaw),r=this.pos.x+n*t.side*this.hipX,o=this.pos.y-.5,a=this.pos.z-i*t.side*this.hipX,c=t.ankle.x-r,l=t.ankle.y-o,h=t.ankle.z-a,u=Math.hypot(c,l,h)||1e-6,f=this.thigh,d=this.shin,p=be(u,Math.abs(f-d)+.001,f+d-1e-4),x=c/u,g=l/u,m=h/u,S=be((f*f+p*p-d*d)/(2*f*p),-1,1),E=Math.sqrt(1-S*S),v=t.kneeOut,y=n*t.side,b=-i*t.side;let C=Math.sin(t.yaw)*(1-v*1.3)+y*(.12+1.2*v),_=uf(-l,this.legW),M=Math.cos(t.yaw)*(1-v*1.3)+b*(.12+1.2*v);const T=C*x+_*g+M*m;C-=x*T,_-=g*T,M-=m*T;const L=Math.hypot(C,_,M)||1;return e.set(r+f*(S*x+E*C/L),o+f*(S*g+E*_/L),a+f*(S*m+E*M/L))}kneeClear(t,e){const n=Math.sin(t.yaw)*.07,i=Math.cos(t.yaw)*.07,r=a=>{t.kneeOut=a;const c=this.kneeAt(t,this.t2);return this.world.solidAt(c.x,c.y,c.z)||this.world.solidAt(c.x+n,c.y-.07,c.z+i)},o=t.kneeOut;if(!r(o)){t.kneeOut=Math.max(0,o-e*2),r(t.kneeOut)&&(t.kneeOut=o);return}for(let a=.2;a<=1.001;a+=.2)if(o+a<=1.001&&!r(Math.min(1,o+a))||o-a>=-.001&&!r(Math.max(0,o-a)))return;t.kneeOut=o}wallNudge(){const t=-Math.cos(this.yaw),e=Math.sin(this.yaw),n=this.pos.y-.1,i=this.pos.y-.1-this.armLen*.5,r=.5+.14,o=.45+.45*this.running,a=Math.sin(this.yaw)*o,c=Math.cos(this.yaw)*o,l=(g,m)=>this.world.solidAt(g,n,m)||this.world.solidAt(g,i,m),h=g=>l(this.base.x+t*r*g,this.base.z+e*r*g),u=g=>l(this.base.x+t*r*g+a,this.base.z+e*r*g+c),f=h(1),d=h(-1),p=f||u(1)&&!d,x=d||u(-1)&&!f;return this.wallSide=p&&!x?-1:x&&!p?1:0,p&&!x?.22:x&&!p?-.22:0}reachTop(){const t=(this.thigh+this.shin)*.995,e=Math.cos(this.yaw),n=Math.sin(this.yaw),i=(c,l)=>{const h=this.pos.x+e*c.side*this.hipX,u=this.pos.z-n*c.side*this.hipX,f=l.x-h,d=l.z-u,p=t*t-f*f-d*d;return l.y+this.footH+(p>0?Math.sqrt(p):0)+.5};let r=1/0;for(const c of this.feet)c.mode==="ground"&&(r=Math.min(r,i(c,this.plantedAnkle(c,this.t1).setY(this.t1.y-this.footH))));let o=r;for(const c of this.feet){if(c.mode!=="swing")continue;const l=i(c,c.to),h=ee((c.s-.55)/.4);h>0&&(o=Math.min(o,o===1/0?l+.3*(1-h):Dt(o,l,h))),c.s>.88&&(r=Math.min(r,l+.02))}const a=this.standY(this.world.groundAt(this.pos.x,this.pos.z));return r===1/0&&(r=a+2),o===1/0&&(o=a),{hard:r,soft:Math.min(o,r)}}stepStand(t,e=!1){if(!e){this.speed=0,this.running+=(0-this.running)*Math.min(1,t*4);const i=this.queued.length&&this.restYaw!==null?this.restYaw:this.wantYaw;i!==null&&(this.yaw+=be(mn(i-this.yaw),-3*t,3*t)),this.shiftIn-=t,this.shiftIn<=0&&(this.shiftIn=3.5+Math.random()*5,this.shift=(Math.random()*2-1)*this.hipX*.55)}let n=!1;for(const i of this.feet)i.mode!=="swing"||i.clocked||(n=!0,i.s=Math.min(1,i.s+t/i.dur),i.pitch=Math.sin(Math.PI*i.s)*-.45,i.s>=1&&this.touchDown(i,.35));if(!n&&!this.legless&&this.feet.every(i=>i.mode==="ground")){let i=null,r=0;for(const o of this.feet){const a=this.neutral(o,this.base,this.yaw,this.t2),c=Math.hypot(a.x-o.sole.x,a.z-o.sole.z)+Math.abs(mn(this.yaw-o.yaw))*.35;c>r&&(r=c,i=o)}if(i&&r>.09+.03*this.legW){const o=i;this.liftOff(o,!1,.2+.06*Math.sqrt(this.legW)),this.neutral(o,this.base,this.yaw,o.to),o.toYaw=this.yaw,this.safeFoot(o.to,this.yaw),this.planApex(o,.05+.04*this.legW)}}if(!e){for(const i of this.feet)i.mode==="ground"&&(i.pitch*=1-Math.min(1,t*8));this.footTap(t)}this.bodyOver(t,"stand",1,.5)}footTap(t){if(this.tapT<0)return;this.tapT+=t;const e=this.feet[0];e.mode==="ground"&&(e.pitch=Math.max(0,Math.sin(this.tapT*Ze*2.6))*.42),this.tapT>1.5&&(this.tapT=-1,e.pitch=0)}oneLegPose(t){const e=this.feet[1];if(t>.02&&!this.legless){const n=this.legW;e.mode="body",e.rel.set(-.05*t,Dt(-n*.97,-n*.55,ee(t)),Dt(0,.1*n,ee(t))),e.pitch=-.75*t}else e.mode==="body"&&this.footDown(e)}footDown(t){t.mode="ground",this.neutral(t,this.base,this.yaw,t.sole),t.yaw=this.yaw,t.pitch=0}feetDown(){for(const t of this.feet)(t.mode==="body"||t.mode==="free")&&this.footDown(t)}pose(t){const e=(o,a,c)=>new F(o,a,c),n=this.thigh+this.shin,i=this.footH,r=this.hipX+.015;switch(t){case"stand":return{head:e(0,i+n*.975+.5,0),lean:0,roll:0,ankles:[e(-r,i,0),e(r,i,0)],feet:[0,0],hands:[null,null],hips:0};case"kneel":{const o=Hr/2,a=Qe-.02,c=a+.07,l=Math.asin(be((a-o)/this.shin,-1,1)),h=Math.max(o+this.thigh*Math.sin(l+.19),c),u=Math.asin(be((h-o)/this.thigh,-1,1)),f=this.thigh*Math.cos(u),d=f-this.shin*Math.cos(l),p=this.hipX+.03,x=-.08,g=e(0,h,0).add(e(0,this.headDrop,0).applyEuler(this.e1.set(x,0,0))),m=this.fromPivot(g,x,0,[e(-p,a,d),e(p,a,d)],[-Math.PI/2,-Math.PI/2],[null,null],1),S=2*Math.max(.12,this.armLen/2-.05)*.92,E=m.head.y-.08-.04;return S*S-E*E>.35*.35&&(m.hands=[this.palm(m.head,x,0,0,-.12,.92),this.palm(m.head,x,0,1,.12,.92)]),m}case"lie":{const a=Math.PI/2,c=e(-.25,.5+Hr,0),l=this.onGround(c,0,a,1,.62,.84,i+.2),h=new ve().setFromEuler(this.e1.set(0,0,a)),f=this.hipOf(c,h,1,1).lerp(l,Math.min(.45,.55/n));return f.y+=Hr/2+.03,{head:c,lean:0,roll:a,ankles:[this.onGround(c,0,a,0,.85,.84,i+.04),l],feet:[-.35,-.35],hands:[this.palm(c,0,a,0,-.3,.8,.05),f],hips:1}}}}restOn(t,e){const n=new ve().setFromEuler(this.e1.set(t,0,e));let i=1/0;for(const r of[-.5,.5])for(const o of[-.5-this.headDrop,.5-this.headDrop])for(const a of[-.5,.5])i=Math.min(i,this.t1.set(r,o,a).applyQuaternion(n).y);return .005-i}onGround(t,e,n,i,r,o,a){const c=new ve().setFromEuler(this.e1.set(e,0,n)),l=this.hipOf(t,c,i,1),h=o*(this.thigh+this.shin),u=l.y-a,f=Math.sqrt(Math.max(0,h*h-u*u));return new F(l.x+Math.sin(r)*f,Math.max(a,l.y-h),l.z+Math.cos(r)*f)}palm(t,e,n,i,r,o,a=.04){const c=new ve().setFromEuler(this.e1.set(e,0,n)),l=this.arms[i].side,h=t.clone().add(new F(l*(.5+Hr/2),-.08,0).applyQuaternion(c)),u=2*Math.max(.12,this.armLen/2-.05)*o,f=h.y-a,d=Math.sqrt(Math.max(0,u*u-f*f));return new F(h.x+Math.sin(r)*d,a,h.z+Math.cos(r)*d)}readyToRest(){return this.rest!=="stand"?!0:(this.restYaw===null||Math.abs(mn(this.restYaw-this.yaw))<.12)&&this.feet.every(e=>e.mode==="ground")}beginRest(){const t=this.queued.shift(),e=this.rest;if(e===t)return;e==="stand"&&(this.landSwings(),this.feetDown(),this.anchor={x:this.base.x,z:this.base.z,g:this.world.groundAt(this.base.x,this.base.z),yaw:this.yaw},this.clockOn=!1);let n;e==="stand"&&t==="kneel"?n=this.kneelDown():e==="kneel"&&t==="lie"?n=this.flopDown():n=this.springUp(e==="lie"?"lie":"kneel"),this.seq=n,this.asleep=!1,this.scratch=null,t==="kneel"&&(this.scratchIn=4+Math.random()*5)}pivotOf(t){return t.head.clone().sub(new F(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll)))}fromPivot(t,e,n,i,r,o,a=0){return{head:t.clone().add(new F(0,.5,0).applyEuler(this.e1.set(e,0,n))),lean:e,roll:n,ankles:i,feet:r,hands:o,hips:a}}kneelDown(){var x,g;const t=Math.sqrt(this.legW/2),e=this.thigh+this.shin,n=this.pose("stand"),i=this.pose("kneel"),r=this.pivotOf(n),o=this.pivotOf(i),a=.14*e,c=r.y+.03*e,l=.12*t,h=Math.sqrt(2*ye*(c-(r.y-a))),u=l+h/ye+Math.sqrt(2*(c-o.y)/ye),f=u+.12*t,d=[],p=[];for(let m=0;;m=Math.min(f,m+1/40)){if(m<=l){const S=ee(m/l);d.push(this.fromPivot(new F(0,r.y-a*S,0),.08*S,0,[n.ankles[0].clone(),n.ankles[1].clone()],[0,0],[null,null]))}else if(m<u){const S=m-l,E=S/(u-l),v=ee(E),y=new F(0,r.y-a+h*S-.5*ye*S*S,o.z*v),b=[0,1].map(M=>n.ankles[M].clone().lerp(i.ankles[M],v)),C=Dt(0,i.feet[0],v),_=E>.5?[((x=i.hands[0])==null?void 0:x.clone())??null,((g=i.hands[1])==null?void 0:g.clone())??null]:[null,null];d.push(this.fromPivot(y,Dt(.08,i.lean,v),0,b,[C,C],_,v))}else d.push(i);if(p.push(m/f),m>=f)break}return{keys:d,at:p,dur:f,t:0,to:"kneel",thud:u/f,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:l/f,pushDone:!1}}flopDown(){var E,v;const t=Math.sqrt(this.legW/2),e=this.pose("kneel"),n=this.pose("lie"),i=this.pivotOf(e),r=this.pivotOf(n),o=(y,b)=>new ve().setFromEuler(this.e1.set(y,0,b)),a=o(e.lean,e.roll),c=o(n.lean,n.roll),l=[0,1].map(y=>e.ankles[y].clone().sub(this.hipOf(e.head,a,y,1)).applyQuaternion(a.clone().invert())),h=[0,1].map(y=>n.ankles[y].clone().sub(this.hipOf(n.head,c,y,1)).applyQuaternion(c.clone().invert())),u=e.lean+.14,f=Math.max(i.y,r.y)+.2,d=.14*t,p=Math.sqrt(2*ye*(f-i.y)),x=d+p/ye+Math.sqrt(2*(f-r.y)/ye),g=x+.2*t,m=[],S=[];for(let y=0;;y=Math.min(g,y+1/40)){if(y<=d){const b=ee(y/d);m.push(this.fromPivot(i.clone(),Dt(e.lean,u,b),0,[e.ankles[0].clone(),e.ankles[1].clone()],[e.feet[0],e.feet[1]],[((E=e.hands[0])==null?void 0:E.clone())??null,((v=e.hands[1])==null?void 0:v.clone())??null],1))}else if(y<x){const b=y-d,C=b/(x-d),_=ee(C),M=new F(Dt(i.x,r.x,_),i.y+p*b-.5*ye*b*b,Dt(i.z,r.z,_)),T=Dt(u,n.lean,_),L=Dt(0,n.roll,_),D=o(T,L),B=M.clone().add(new F(0,.5,0).applyQuaternion(D)),H=[0,1].map(W=>{const tt=Dt(l[W].length(),h[W].length(),_),k=l[W].clone().normalize().lerp(h[W].clone().normalize(),_).normalize().multiplyScalar(tt).applyQuaternion(D),Z=this.hipOf(B,D,W,1).add(k);return Z.y=Math.max(Z.y,this.footH+.02),Z}),G=[0,1].map(W=>Dt(e.feet[W],n.feet[W],_)),J=[0,1].map(W=>{const tt=e.hands[W],k=n.hands[W];return tt&&k?tt.clone().lerp(k,_):k&&C>.5?k.clone():null});m.push(this.fromPivot(M,T,L,H,G,J,1))}else m.push(n);if(S.push(y/g),y>=g)break}return{keys:m,at:S,dur:g,t:0,to:"lie",thud:x/g,thudDone:!1,linear:!0,hit:1.6,dust:!0,push:d/g,pushDone:!1}}springUp(t){var b,C;const e=Math.sqrt(this.legW/2),n=this.thigh+this.shin,i=this.pose(t),r=this.pose("stand"),o=this.pivotOf(i),a=this.pivotOf(r),c=.12*n,l=a.y+.05*n,h=(t==="lie"?.16:.1)*e,u=Math.sqrt(2*ye*(l-o.y)),f=h+u/ye+Math.sqrt(2*(l-(a.y-c))/ye),d=f+.16*e,p=t==="kneel"?i.lean+.15:i.lean,x=t==="lie"?i.roll-.35:i.roll,g=new ve().setFromEuler(this.e1.set(i.lean,0,i.roll)),m=[0,1].map(_=>i.ankles[_].clone().sub(this.hipOf(i.head,g,_,i.hips))),S=new F(a.x,a.y-c,a.z),E=[0,1].map(_=>r.ankles[_].clone().sub(S.clone().add(new F(this.feet[_].side*this.hipX,0,0)))),v=[],y=[];for(let _=0;;_=Math.min(d,_+1/40)){if(_<=h){const M=ee(_/h);v.push(this.fromPivot(o.clone(),Dt(i.lean,p,M),Dt(i.roll,x,M),[i.ankles[0].clone(),i.ankles[1].clone()],[i.feet[0],i.feet[1]],[((b=i.hands[0])==null?void 0:b.clone())??null,((C=i.hands[1])==null?void 0:C.clone())??null],i.hips))}else if(_<f){const M=_-h,T=M/(f-h),L=new F(Dt(o.x,a.x,ee(T)),o.y+u*M-.5*ye*M*M,Dt(o.z,a.z,ee(T))),D=Dt(p,0,ee(T)),B=Dt(x,0,ee(Math.min(1,T*1.4))),H=new ve().setFromEuler(this.e1.set(D,0,B)),G=L.clone().add(new F(0,.5,0).applyQuaternion(H)),J=ee(Math.min(1,T*1.3)),W=Dt(i.hips,0,J),tt=[0,1].map(ft=>{const N=Dt(m[ft].length(),E[ft].length(),T)-.08*n*Math.sin(Math.PI*T),X=m[ft].clone().normalize().lerp(E[ft].clone().normalize(),J).normalize(),O=this.hipOf(G,H,ft,W).addScaledVector(X,N);return O.y=Math.max(O.y,this.footH+.02),O}),k=[0,1].map(ft=>Dt(i.feet[ft],0,ee(T))),Z=G.y-.08<this.armLen*.92,et=[0,1].map(ft=>Z&&i.hands[ft]&&i.hands[ft].y<.15?i.hands[ft].clone():null);v.push(this.fromPivot(L,D,B,tt,k,et,W))}else{const M=ee((_-f)/(d-f));v.push(this.fromPivot(new F(a.x,Dt(a.y-c,a.y,M),a.z),0,0,[r.ankles[0].clone(),r.ankles[1].clone()],[0,0],[null,null]))}if(y.push(_/d),_>=d)break}return{keys:v,at:y,dur:d,t:0,to:"stand",thud:f/d,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:h/d,pushDone:!1}}stepRest(t){var o;const e=this.seq;let n;if(e){e.t+=t;const a=Dn(e.t/e.dur),c=e.linear?a:ee(a);let l=0;for(;l<e.at.length-2&&c>e.at[l+1];)l++;const h=Dn((c-e.at[l])/(e.at[l+1]-e.at[l]));if(n=this.mix(e.keys[l],e.keys[l+1],h),e.push!==void 0&&!e.pushDone&&a>=e.push&&(e.pushDone=!0,this.qv+=1.8),!e.thudDone&&a>=e.thud){if(e.thudDone=!0,this.qv-=e.hit??(e.to==="lie"?1.5:2),e.dust)for(let u=0;u<3;u++)this.puffAt(this.pos.x,this.anchor.g,this.pos.z,.08+.04*Math.random());if(e.to==="stand")for(const u of this.feet)(o=this.onPrint)==null||o.call(this,this.t1.set(u.ankle.x,this.anchor.g,u.ankle.z),this.anchor.yaw)}a>=1&&(this.seq=null,this.rest=e.to,e.to==="stand"&&this.standUp())}else n=this.pose(this.rest==="lie"?"lie":"kneel");if(this.rest==="stand"&&!this.seq)return;const i=!e&&this.rest!=="stand";i&&this.rest==="kneel"&&!this.asleep&&n.hands[0]?this.stepScratch(t):this.scratch=null,this.breath=os(this.breath+t/(this.rest==="lie"?3.6:4));const r=Math.sin(Ze*this.breath);if(this.qRest=i?(this.rest==="lie"?.035:.045)*r:0,i&&this.rest==="lie"&&(n.head.y+=.012*r),i&&this.rest==="kneel"){const a=.5+.5*r;n.head.y+=.05*a,n.lean-=.035*a}this.applyPose(n)}stepScratch(t){const e=this.scratch;if(!e){(this.scratchIn-=t)<=0&&(this.scratch={side:Math.random()<.5?0:1,kind:Math.random()<.5?"chin":"head",t:0,dur:2+.5*this.armLen+Math.random()*.8,w:0,wiggle:0});return}e.t+=t;const n=.5+.25*this.armLen,i=n,r=e.dur-n-i;e.w=e.t<n?ee(e.t/n):e.t>e.dur-i?ee((e.dur-e.t)/i):1;const o=e.t-n;e.wiggle=o>0&&o<r?Math.sin(Ze*(e.kind==="chin"?4.5:5.5)*o)*ee(o/.15)*ee((r-o)/.15):0,e.t>=e.dur&&(this.scratch=null,this.scratchIn=6+Math.random()*9)}mix(t,e,n){const i=(g,m)=>g&&m?g.clone().lerp(m,n):n<.5?g?g.clone():null:m?m.clone():null,r=Dt(t.lean,e.lean,n),o=Dt(t.roll,e.roll,n),a=(g,m)=>new ve().setFromEuler(this.e1.set(g,0,m)),c=a(t.lean,t.roll),l=a(e.lean,e.roll),h=a(r,o),u=t.head.clone().lerp(e.head,n);u.y=Math.max(u.y,this.restOn(r,o));const f=Dt(t.hips,e.hips,n),d=[0,1].map(g=>{const m=t.ankles[g].clone().sub(this.hipOf(t.head,c,g,t.hips)),S=e.ankles[g].clone().sub(this.hipOf(e.head,l,g,e.hips)),E=Dt(m.length(),S.length(),n),v=Dt(t.ankles[g].y,e.ankles[g].y,n),y=this.hipOf(u,h,g,f),b=Dt(m.x,S.x,n),C=Dt(m.z,S.z,n),_=Math.hypot(b,C),M=y.y-v,T=Math.sqrt(Math.max(0,E*E-M*M)),L=new F(y.x,Math.max(v,y.y-E),y.z);return _>1e-4&&(L.x+=b/_*T,L.z+=C/_*T),L.y=Math.max(L.y,this.footH+.02),L}),p=g=>{const m=t.hands[g],S=e.hands[g];if(!m||!S)return i(m,S);const E=Math.atan2(m.x-t.head.x,m.z-t.head.z),v=Math.atan2(S.x-e.head.x,S.z-e.head.z),y=E+mn(v-E)*n,b=Dt(Math.hypot(m.x-t.head.x,m.z-t.head.z),Math.hypot(S.x-e.head.x,S.z-e.head.z),n);return new F(u.x+Math.sin(y)*b,Dt(m.y,S.y,n),u.z+Math.cos(y)*b)},x=[p(0),p(1)];return x.forEach((g,m)=>{g&&(this.outsideBody(g,u,h,this.arms[m].side),g.y=Math.max(g.y,.03))}),{head:u,lean:r,roll:o,ankles:d,feet:[Dt(t.feet[0],e.feet[0],n),Dt(t.feet[1],e.feet[1],n)],hands:x,hips:f}}outsideBody(t,e,n,i){const r=t.clone().sub(e).applyQuaternion(n.clone().invert()),o=.5+.12;if(Math.abs(r.x)>=o||Math.abs(r.y)>=o||Math.abs(r.z)>=o)return;let a=1/0,c=-1,l=0;for(let h=0;h<3;h++)for(const u of[-1,1]){if(this.t1.set(0,0,0).setComponent(h,u).applyQuaternion(n).y<-.6)continue;const f=o-u*r.getComponent(h)-(h===0&&u===i?.25:0);f<a&&(a=f,c=h,l=u)}c<0||(r.setComponent(c,l*o),t.copy(r.applyQuaternion(n).add(e)))}hipOf(t,e,n,i=0){const r=this.feet[n].side;return t.clone().add(new F(r*this.hipX,-.5-i*this.headDrop,0).applyQuaternion(e))}applyPose(t){const e=this.anchor,n=Math.cos(e.yaw),i=Math.sin(e.yaw),r=(a,c)=>c.set(e.x+n*a.x+i*a.z,e.g+a.y,e.z-i*a.x+n*a.z);this.yaw=e.yaw,this.lean=t.lean,this.leanV=0,this.roll=t.roll,this.hipDrop=t.hips*this.headDrop;const o=this.t2.set(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll));r(this.t1.copy(t.head).sub(o).add(this.t2.set(0,.5,0)),this.pos),this.base.set(e.x,0,e.z),this.feet.forEach((a,c)=>{a.mode="free",r(t.ankles[c],a.ankle),a.q.setFromAxisAngle(this.t2.set(0,1,0),e.yaw).multiply(new ve().setFromAxisAngle(this.t2.set(0,0,1),t.roll)).multiply(new ve().setFromAxisAngle(this.t2.set(1,0,0),-t.feet[c])),a.toe=t.feet[c]<-.9?-1.1*ee((-t.feet[c]-.9)/.5):t.feet[c]<-.2?.2:0,a.yaw=e.yaw}),this.arms.forEach((a,c)=>{const l=t.hands[c];l&&(a.reach=r(l,new F),a.reachW=1,a.flat=!0)})}standUp(){this.asleep=!1,this.hipDrop=0;for(const t of this.feet)t.mode="ground",t.sole.set(t.ankle.x,this.world.groundAt(t.ankle.x,t.ankle.z),t.ankle.z),t.pitch=0;if(this.lean=0,this.roll=0,this.vy=0,this.pending){const t=this.pending;this.pending=null,this.travel(t.cells,t.gait,t.onArrive,t.stride)}}envAt(t,e,n=.25,i=.55){const r=t.ground;let o=-1/0;for(let a=Math.max(0,Math.floor((e-n)/Br));a<=Math.min(r.length-1,Math.ceil((e+i)/Br));a++)o=Math.max(o,r[a]);return o===-1/0?this.world.groundAt(this.base.x,this.base.z):o}stepHopper(t,e){var l;const n=e.path,i=this.gaitSpeed(e.gait),r=n.total-e.s;this.speed+=be(Math.min(i,Math.sqrt(2*6*Math.max(0,r)))-this.speed,-8*t,6*t),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base),this.yaw+=be(mn(n.yawAt(e.s+.2)-this.yaw),-8*t,8*t);const o=this.phase;this.phase+=t/(e.gait==="bound"?.22:.3),Math.floor(this.phase)!==Math.floor(o)&&(this.qv-=2.6);const a=os(this.phase),c=this.envAt(e,e.s,.1,.3);this.pos.set(this.base.x,c+.5+Math.sin(Math.PI*a)*(e.gait==="bound"?.3:.16),this.base.z),this.qRest=.12*Math.sin(Math.PI*a),r<=.01&&(this.trip=null,this.speed=0,this.qRest=0,(l=e.onArrive)==null||l.call(e))}landSwings(){for(const t of this.feet)t.mode==="swing"&&(t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,t.pitch=0)}makeJump(t,e,n,i){this.landSwings();const r=this.feet.map(o=>{const a=this.neutral(o,e,i,new F);return this.safeFoot(a,i),a});return{phase:"gather",t:0,drop:t,to:e.clone(),apex:n,vx:0,vz:0,feet:r,y0:this.pos.y,air:1,yawTo:i,grip:null}}stepAct(t){const e=this.act;e.t+=t;for(const i of this.arms)i.tp=.02,i.to=.07,i.te=.16;if(e.jump){const i=this.stepJump(t,e.jump);e.kind==="cheer"&&this.armsTo(-2.75,.45,.3),i&&this.endAct();return}const n=e.t/e.dur;if(e.kind==="wave"){const i=this.arms[0];i.tp=-2.55,i.to=.42,i.te=.55+.42*Math.sin(e.t*Ze*2.6),this.shift=this.hipX*.5}else if(e.kind==="spin"){const i=ee(n/.15)*(1-ee((n-.86)/.14));this.oneLegPose(i),this.yaw=e.yaw0+rM((n-.12)/.74)*Ze,this.feet[0].mode==="ground"&&(this.feet[0].yaw=this.yaw),this.armsTo(-.35,1.25*i+.08,.25)}else if(e.kind==="sigh"){const i=n<.45?Math.sin(Math.PI*Dn(n/.45)):0,r=n>.4?Math.sin(Math.PI*Dn((n-.4)/.6)):0;this.qRest=.08*i-.12*r,this.armsTo(.12*r,.06,.15)}else e.kind==="tap"&&this.tapT<0&&(this.tapT=0);this.stepStand(t),e.t>=e.dur&&(e.kind==="spin"&&(this.yaw=mn(this.yaw),this.feet[0].yaw=this.yaw),this.endAct())}endAct(){var e;const t=this.act;if(this.act=null,this.qRest=0,this.leanRest=0,(e=t.then)==null||e.call(t),t.kind==="leap")if(this.pending){const n=this.pending;this.pending=null,this.travel(n.cells,n.gait,n.onArrive,n.stride)}else this.trip&&this.nextLeg()}stepJump(t,e){e.t+=t;const n=this.legW,i=e.drop?.1:.14+.05*Math.sqrt(n),r=.08+.02*Math.sqrt(n);if(e.phase==="gather"){const o=ee(e.t/i);this.vy=0,this.pos.y=Dt(e.y0,this.reachTop().hard-(e.drop?.08:.22)*n,o),this.leanRest=.16*o,this.qRest=-.24*o,this.armsTo(.95*o,.12,.3),this.yaw+=be(mn(e.yawTo-this.yaw),-9*t,9*t);for(const a of this.feet)a.mode==="ground"&&(a.pitch*=.8);return e.t>=i&&(e.phase="push",e.t=0,e.y0=this.pos.y),!1}if(e.phase==="push"){const o=ee(e.t/r);for(const a of this.feet)a.mode==="ground"&&(a.pitch=-.6*o);if(this.pos.y=Dt(e.y0,this.reachTop().hard,o),this.qRest=.22*o,this.armsTo(-1.5*o,.15,.25),e.t>=r){e.phase="air",e.t=0;const a=Math.max(.05,Math.max(this.pos.y,e.to.y)+e.apex+(e.grip?.2*this.L:0)-this.pos.y),c=Math.sqrt(2*a/ye),l=Math.sqrt(2*Math.max(.01,this.pos.y+a-e.to.y)/ye);this.vy=ye*c,e.air=c+l,e.vx=(e.to.x-this.pos.x)/e.air,e.vz=(e.to.z-this.pos.z)/e.air,this.qv+=3.2;for(const h of this.feet)h.mode="body"}return!1}if(e.phase==="air"){this.airborne=!0,this.vy-=ye*t,this.pos.x+=e.vx*t,this.pos.z+=e.vz*t,this.pos.y+=this.vy*t,this.base.x=this.pos.x,this.base.z=this.pos.z,this.sway=0,this.yaw+=be(mn(e.yawTo-this.yaw),-6*t,6*t);const o=e.t/e.air,a=Math.sin(Math.PI*Dn(o*1.15));for(const h of this.feet)h.mode="body",h.rel.set(0,-n*Dt(.97,e.grip?.68:.62,a),n*(e.grip?-.04:.16)*a),h.kneeOut=e.grip?.7*a:0,h.pitch=-.65*a;this.armsTo(-.55,.85,.35),e.grip&&o>.12&&o<.92&&this.arms.forEach((h,u)=>{h.reach=e.grip[u],h.flat=!0,h.reachW=Math.min(1,h.reachW+t*9)}),this.leanRest=e.grip?.18:.05,this.qRest=be(this.vy*.022,-.14,.18);const c=this.world.groundAt(e.to.x,e.to.z),l=this.standY(c);if(e.t>=e.air||this.vy<0&&this.pos.y<=l&&Math.hypot(this.pos.x-e.to.x,this.pos.z-e.to.z)<.3){this.pos.set(e.to.x,l,e.to.z),e.phase="land",e.t=0,this.feet.forEach((u,f)=>{var d;u.mode="ground",u.sole.copy(e.feet[f]).setY(this.world.groundAt(e.feet[f].x,e.feet[f].z)),u.yaw=e.yawTo,(d=this.onPrint)==null||d.call(this,u.sole,u.yaw),u.pitch=0,u.kneeOut=0});const h=Math.abs(this.vy);this.qv-=2.2+.8*h,this.qRest=0,this.leanV+=.6+.15*h;for(let u=0;u<(h>4?5:2);u++)this.puffAt(this.pos.x,c,this.pos.z,.08+.04*Math.random())}return!1}return this.leanRest=0,this.armsTo(-.45,.35,.4),this.base.x+=(e.to.x-this.base.x)*Math.min(1,t*10),this.base.z+=(e.to.z-this.base.z)*Math.min(1,t*10),this.bodyOver(t,"stand",1,.5),e.t>.32}puffAt(t,e,n,i){if(!this.onPuff)return;const r=new F((Math.random()-.5)*1.2,.5+Math.random()*.6,(Math.random()-.5)*1.2);this.onPuff(new F(t+(Math.random()-.5)*.2,e+.06,n+(Math.random()-.5)*.2),r,i)}armsTo(t,e,n){for(const i of this.arms)i.tp=t,i.to=e,i.te=n}stepSprings(t){const e=Ze*3.1,n=.34;this.qv+=(e*e*(this.qRest-this.squash)-2*n*e*this.qv)*t,this.squash=be(this.squash+this.qv*t,-.45,.45);const i=220;if(this.sv+=(i*(this.stretchRest-this.stretch)-2*Math.sqrt(i)*.8*this.sv)*t,this.stretch+=this.sv*t,this.seq||this.rest!=="stand")return;const o=!!this.trip&&!this.act,a=(this.speed-this.lastSpeed)/Math.max(t,1e-4);this.lastSpeed=this.speed;const c=o?Dt(.035,.2,this.running)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk"))):0,l=Ze*2.4,h=.5;if(this.leanV+=(l*l*(c+this.leanRest-this.lean)-2*h*l*this.leanV-(o?3.5*be(a,-12,12):0))*t,this.lean=be(this.lean+this.leanV*t,-.6,.7),this.roll=be(-(this.sway/this.hipX)*.045,-.08,.08),o&&this.clockOn){const d=this.running,p=Dt(.3,1,d)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk")));for(const x of this.arms)x.tp=(x.side===-1?1:-1)*p*Math.cos(Ze*(this.phase-.04)),x.to=x.side===this.wallSide?.03:Dt(.07,.2,d),x.te=Dt(.24,1.55,d)+Math.max(0,-x.tp)*.35}else if(!this.act)for(const d of this.arms)d.tp=.02,d.to=.07,d.te=.16;const u=Ze*2.3,f=.42;for(const d of this.arms)d.vp+=(u*u*(d.tp-d.pitch)-2*f*u*d.vp)*t,d.vo+=(u*u*(d.to-d.out)-2*f*u*d.vo)*t,d.ve+=(u*u*(d.te-d.elbow)-2*f*u*d.ve)*t,d.pitch+=d.vp*t,d.out+=d.vo*t,d.elbow=Math.max(0,d.elbow+d.ve*t),d.reach||(d.reachW=Math.max(0,d.reachW-t*3))}resolveFeet(t=0){const e=Math.cos(this.yaw),n=Math.sin(this.yaw);for(const i of this.feet){if(i.mode==="swing"){const r=i.s,o=ee(r),a=Dt(i.from.x,i.to.x,o),c=Dt(i.from.z,i.to.z,o),l=Math.max(.04,i.apex-Math.max(i.from.y,i.to.y)),h=Dt(i.from.y,i.to.y,ee((r-.15)/.75))+l*Math.pow(Math.sin(Math.PI*r),1.3),u=i.to.x-i.from.x,f=i.to.z-i.from.z,d=Math.hypot(u,f)||1,p=u/d,x=f/d,g=Math.min(Qe+.08+.35*(1-r),(1-o)*d+Qe+.04);let m=-1/0;for(let C=0;C<=4;C++){const _=ti-.04+(g-ti+.04)*(C/4);m=Math.max(m,this.world.groundAt(a+p*_,c+x*_))}const S=m+.07*(1-ee((r-.82)/.18)),E=Math.max(h,r>.97?i.to.y:S);i.sy=E>i.sy?E:i.sy+(E-i.sy)*Math.min(1,t*30),r<.02&&(i.sy=Math.max(E,i.from.y)),i.ankle.set(a,i.sy+this.footH,c),i.yaw=i.fromYaw+mn(i.toYaw-i.fromYaw)*o,this.kneeClear(i,t);const v=Math.sin(i.yaw),y=Math.cos(i.yaw),b=i.ankle.y;for(let C=0;C<8;C++){const _=i.ankle.y-this.footH*.5,M=this.kneeAt(i,this.t2),T=M.x+v*.07,L=M.z+y*.07,D=(this.world.solidAt(M.x,M.y,M.z)||this.world.solidAt(T,M.y-.07,L))&&this.world.groundAt(T,L)<M.y+.4;if(!this.world.solidAt(i.ankle.x,_,i.ankle.z)&&!this.world.solidAt(i.ankle.x+v*Qe,_,i.ankle.z+y*Qe)&&!D||i.ankle.y-b>.45)break;i.ankle.y+=.06}i.toe=Dt(i.pitch<0?i.pitch:0,.28*Math.sin(Math.PI*r),ee(r/.35))}else if(i.mode==="ground"){this.plantedAnkle(i,i.ankle),this.kneeClear(i,t);for(let r=0;r<2;r++){const o=this.kneeAt(i,this.t3),a=(o.x-i.ankle.x)*Math.sin(i.yaw)+(o.z-i.ankle.z)*Math.cos(i.yaw),c=Math.atan2(a,o.y-i.ankle.y),l=hf-.05-c;if(i.pitch<=l)break;i.pitch=l,this.plantedAnkle(i,i.ankle)}i.toe=i.pitch<0?i.pitch:0}else if(i.mode==="body"){const r=i.side*(this.hipX+i.rel.x),o=i.rel.z;i.ankle.set(this.pos.x+e*r+n*o,this.pos.y-.5+i.rel.y,this.pos.z-n*r+e*o),i.ankle.y=Math.max(i.ankle.y,this.world.groundAt(i.ankle.x,i.ankle.z)+this.footH+.01),i.yaw=this.yaw,i.toe=.2;const a=Math.sin(this.yaw),c=Math.cos(this.yaw),l=Math.cos(i.pitch),h=Math.sin(i.pitch);for(let u=0;u<8;u++){const f=i.ankle.x+a*l*Qe,d=i.ankle.y-this.footH+h*Qe,p=i.ankle.z+c*l*Qe;if(!this.world.solidAt(f,d,p)&&!this.world.solidAt(i.ankle.x,i.ankle.y-this.footH,i.ankle.z))break;i.ankle.x-=a*.05,i.ankle.z-=c*.05}}if(i.mode!=="free"){i.q.setFromEuler(this.e1.set(-i.pitch,i.yaw,0,"YXZ"));const r=i.pitch,o=Math.cos(r),a=Math.sin(r),c=Math.sin(i.yaw),l=Math.cos(i.yaw),h=i.ankle.x+c*o*nn,u=i.ankle.z+l*o*nn,f=i.ankle.y-this.footH*o+nn*a,d=(this.world.groundAt(h+c*(Qe-nn),u+l*(Qe-nn))+.005-f)/(Qe-nn);d>-1&&(i.toe=Math.min(i.toe,r-Math.asin(be(d,-1,1))))}}}}const ga=5,lM=4935768,Xh=.3,cM=14;function hM(){const s=new Bn(.11,nn-ti-.01).rotateX(-Math.PI/2).translate(0,0,(nn+ti)/2-.005),t=new Bn(.11,Qe-nn-.02).rotateX(-Math.PI/2).translate(0,0,(Qe+nn)/2+.01),e=sM([s,t]);return s.dispose(),t.dispose(),e}const qh=72,uM=2.6;let Os=null;function fM(){if(Os)return Os;const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");return t.fillStyle="#111",t.font='700 54px "Space Mono", "Courier New", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("Z",32,34),Os=new wo(s),Os.colorSpace=Ie,Os}class dM{constructor(){I(this,"group",new Pe);I(this,"puffs",[]);I(this,"dust");I(this,"zeds",[]);I(this,"prints",[]);I(this,"printGeo",hM());I(this,"own",[]);I(this,"m",new ne);I(this,"q",new ve);I(this,"s",new F);const t=new vn(1,1,1),e=new ao({color:15987958});this.dust=new Kr(t,e,qh),this.dust.count=0,this.dust.frustumCulled=!1,this.group.add(this.dust),this.own.push(t,e,this.printGeo)}print(t,e){const n=new zn({color:lM,transparent:!0,opacity:Xh,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new Te(this.printGeo,n);if(i.position.set(t.x,t.y+.004,t.z),i.rotation.y=e,i.renderOrder=1,this.group.add(i),this.prints.push({m:i,mat:n,age:0}),this.prints.length>ga+6){const r=this.prints.shift();r.m.removeFromParent(),r.mat.dispose()}}puff(t,e,n){this.puffs.length>=qh&&this.puffs.shift(),this.puffs.push({p:t.clone(),v:e.clone(),age:0,life:.45+Math.random()*.3,size:n,spin:new yn(Math.random(),Math.random(),Math.random())})}z(t){const e=new Mu({map:fM(),transparent:!0,depthWrite:!1,opacity:0}),n=new Yd(e);this.group.add(n),this.zeds.push({s:n,age:0,life:uM,x0:t.x,y0:t.y,z0:t.z,drift:Math.random()<.5?-1:1})}update(t){let e=0;this.puffs=this.puffs.filter(i=>(i.age+=t)<i.life);for(const i of this.puffs){i.v.multiplyScalar(Math.exp(-3.2*t)),i.v.y-=.6*t,i.p.addScaledVector(i.v,t);const r=i.age/i.life,o=r<.18?r/.18:1-(r-.18)/.82;this.s.setScalar(Math.max(.001,i.size*Math.pow(o,.8))),i.spin.x+=t*1.5,this.q.setFromEuler(i.spin),this.m.compose(i.p,this.q,this.s),this.dust.setMatrixAt(e++,this.m)}this.dust.count=e,this.dust.instanceMatrix.needsUpdate=!0;const n=this.prints.length;this.prints=this.prints.filter((i,r)=>{i.age+=t;const o=n-1-r,a=o<ga?1:Math.max(0,1-(o-ga+1)/3),c=1-Math.min(1,Math.max(0,(i.age-cM)/3)),l=Xh*a*c;return i.mat.opacity+=(l-i.mat.opacity)*Math.min(1,t*5),l<=0&&i.mat.opacity<.005?(i.m.removeFromParent(),i.mat.dispose(),!1):!0}),this.zeds=this.zeds.filter(i=>{i.age+=t;const r=i.age/i.life;return r>=1?(i.s.removeFromParent(),i.s.material.dispose(),!1):(i.s.position.set(i.x0+i.drift*(.25*r+.06*Math.sin(r*7)),i.y0+.75*r,i.z0),i.s.scale.setScalar(.14+.2*r),i.s.material.opacity=Math.min(1,r*5)*(1-Math.max(0,(r-.6)/.4)),!0)})}dispose(){for(const t of this.zeds)t.s.material.dispose();for(const t of this.prints)t.mat.dispose();this.group.removeFromParent();for(const t of this.own)t.dispose()}}const vi=.12,ks={thick:.07,long:.15,wide:.135},Yh=2.6,pM=2.9,Bs=2.5,Gr={back:-.55,fwd:2.1,inward:-.22,out:1},as={up:-hf,down:.95,side:.3,twist:.35},xa={flex:1.55,side:.45,turn:1.6},Se=(s,t,e)=>s<t?t:s>e?e:s,_a=(s,t,e)=>s+(t-s)*e;function Vr(s,t,e,n){const i=new vn(vi,s-t,vi).translate(0,(s+t)/2,0);return n.push(i),new Te(i,e)}function va(s,t,e){return e.push(s),new Te(s,t)}const un=new F,tn=new F,Nn=new F,xo=new ne;function _o(s,t,e){return tn.copy(s).negate().normalize(),Nn.copy(t).addScaledVector(tn,-t.dot(tn)),Nn.lengthSq()<1e-8&&Nn.set(1,0,0).cross(tn),Nn.normalize(),un.crossVectors(tn,Nn),xo.makeBasis(un,tn,Nn),e.setFromRotationMatrix(xo)}const ds=new F,In=new F,yi=new F,Qr=new F,xl=new F,$h=new ve;function Li(s,t,e,n,i,r,o,a=Math.PI){ds.subVectors(t,s);const c=ds.length(),l=Math.sqrt(Math.max(0,e*e+n*n-2*e*n*Math.cos(Math.PI-a))),h=Se(c,Math.max(Math.abs(e-n)+.001,l),e+n-1e-4);c<1e-6?In.set(0,-1,0):In.copy(ds).divideScalar(c);const u=Se((e*e+h*h-n*n)/(2*e*h),-1,1),f=Math.sqrt(1-u*u);yi.copy(i).addScaledVector(In,-i.dot(In)),yi.lengthSq()<1e-8&&yi.set(0,0,1).addScaledVector(In,-In.z),yi.normalize(),Qr.copy(s).addScaledVector(In,e*u).addScaledVector(yi,e*f),xl.copy(s).addScaledVector(In,h),_o(ds.subVectors(Qr,s),i,r),_o(xl.sub(Qr),i,$h),o.copy(r).invert().multiply($h)}const xi=new yn,mM=new F;function Kh(s,t,e,n,i="XYZ"){xi.setFromQuaternion(s,i);const r=Se(xi.x,t[0],t[1]),o=Se(xi.y,e[0],e[1]),a=Se(xi.z,n[0],n[1]);(r!==xi.x||o!==xi.y||a!==xi.z)&&s.setFromEuler(xi.set(r,o,a,i))}class ff{constructor(t,e,n){I(this,"root",new Pe);I(this,"fx",new dM);I(this,"motion");I(this,"placed",!1);I(this,"face");I(this,"world");I(this,"pelvis",new Pe);I(this,"turn",new Pe);I(this,"squash",new Pe);I(this,"legs",[]);I(this,"arms",[]);I(this,"solid",[]);I(this,"own",[]);I(this,"look",null);I(this,"targets",[null,null]);I(this,"talkCh",null);I(this,"clock",0);I(this,"lastBreath",0);I(this,"showing",null);I(this,"yawLook",0);I(this,"pitchLook",0);I(this,"a2");I(this,"v1",new F);I(this,"v2",new F);I(this,"v3",new F);I(this,"v4",new F);I(this,"v5",new F);I(this,"qa",new ve);I(this,"qb",new ve);I(this,"qc",new ve);I(this,"qd",new ve);I(this,"qm",new ne);I(this,"headCap",0);I(this,"scratchSeen",null);I(this,"sc1",new F);I(this,"sc2",new F);I(this,"sc3",new F);I(this,"qf",new ve);I(this,"pts",[0,1,2,3,4].map(()=>new F));I(this,"kg",[0,1,2,3,4,5].map(()=>new F));this.world=n,this.motion=new aM(e,n),this.motion.onPuff=(c,l,h)=>this.fx.puff(c,l,h),this.motion.onPrint=(c,l)=>this.fx.print(c,l),this.a2=Math.max(.12,this.motion.armLen/2-.05),this.face=new iM(t),this.motion.headDrop=this.face.drop,this.root.add(this.pelvis),this.pelvis.add(this.turn),this.turn.add(this.squash),this.face.head.scale.setScalar(1/16),this.face.head.position.y=.5,this.squash.add(this.face.head),this.solid.push(...this.face.solid);const[i,r,o]=ql(t),a=new kt().setRGB(i/255,r/255,o/255,Ie);this.buildLimbs(a)}buildLimbs(t){const e=this.motion,n=new ao({color:t});this.own.push(n);const i=vi/2;if(!e.legless)for(const o of[-1,1]){const a=new Pe,c=new Pe,l=new Pe,h=new Pe;a.position.set(o*e.hipX,0,0);const u=Vr(0,-e.thigh,n,this.own);a.add(u),c.position.y=-e.thigh;const f=Vr(i,-e.shin-i,n,this.own);c.add(f),l.position.y=-e.shin;const d=va(new vn(vi,e.footH,nn-ti).translate(0,-e.footH/2,(nn+ti)/2),n,this.own);h.position.set(0,-e.footH,nn);const p=va(new vn(vi,e.footH*.75,.08).translate(0,e.footH*.375,.04),n,this.own);h.add(p),l.add(d,h),c.add(l),a.add(c),this.pelvis.add(a),this.legs.push({hip:a,knee:c,ankle:l,toes:h,side:o}),this.solid.push(u,f,d,p)}const r=this.a2;for(const o of[-1,1]){const a=new Pe,c=new Pe,l=new Pe,h=Vr(i,-r,n,this.own);a.add(h),c.position.y=-r;const u=Vr(i,-r-i,n,this.own);c.add(u),l.position.y=-r;const f=va(new vn(ks.thick,ks.long,ks.wide).translate(0,-.15/2-.02,0),n,this.own);l.add(f),c.add(l),a.add(c),this.turn.add(a);const d=()=>new ve;this.arms.push({shoulder:a,elbow:c,wrist:l,side:o,aimW:0,fk:[d(),d()],ik:[d(),d()],push:0,pushTo:new F,pushE:0,pushETo:new F,pushN:new F,flatW:0,palm:new F,palmDir:new F(0,0,1)}),this.solid.push(h,u,f)}}get pos(){return this.motion.pos}get yaw(){return this.motion.yaw}headCentre(t=new F){return this.squash.localToWorld(t.set(0,.5,0))}headTop(t=new F){return this.headCentre(t).add(this.v4.set(0,.85,0))}hit(t){return t.intersectObjects(this.solid,!1).some(e=>{for(let n=e.object;n;n=n.parent)if(!n.visible)return!1;return!0})}place(t,e,n){this.motion.place(t,e,n),this.placed=!0}travel(t,e,n,i="stroll"){this.motion.travel(t,e,n,i)}stop(){this.motion.stop()}busy(){return this.motion.busy()}turnTo(t){this.motion.turnTo(t)}perform(t,e){return this.motion.perform(t,e)}rest(t,e){return this.motion.setRest(t,e)}roomAt(t,e,n){return this.motion.roomAt(t,e,n)}get resting(){return this.motion.rest}sleep(t){this.motion.asleep=t}lookAt(t){this.look=t?(this.look??new F).copy(t):null}point(t,e){this.targets=[t,e]}talk(t){this.talkCh=t}feel(t,e){this.face.feel(t,e)}mood(t){this.face.setMood(t)}blink(){this.face.blink()}get feeling(){return this.face.current}update(t){const e=this.motion;this.clock+=t,e.update(t);const n=this.root.parent??this.root;n.position.copy(e.pos),n.rotation.set(0,e.yaw,0),this.pelvis.position.set(0,-.5,0),this.pelvis.rotation.set(e.lean,e.twist,e.roll+e.swayRoll);for(const d of this.legs)d.hip.position.y=-e.hipDrop;n.updateMatrixWorld(!0);let i=null;this.look?(i=this.pelvis.worldToLocal(this.v1.copy(this.look)).sub(this.v2.set(0,.5,0)),this.yawLook+=(Se(Math.atan2(i.x,i.z),-.55,.55)-this.yawLook)*Math.min(1,t*6),this.pitchLook+=(Se(-Math.atan2(i.y,Math.hypot(i.x,i.z)),-.35,.3)-this.pitchLook)*Math.min(1,t*6)):(this.yawLook*=1-Math.min(1,t*3),this.pitchLook*=1-Math.min(1,t*3)),e.airborne&&(this.yawLook*=.9,this.pitchLook*=.9),e.scratch&&e.scratch!==this.scratchSeen&&this.feel(e.scratch.kind==="chin"?"thinking":"doubt",e.scratch.dur),this.scratchSeen=e.scratch,this.face.update(t,i?i.applyAxisAngle(this.v2.set(0,1,0),-this.yawLook):null,this.talkCh,e.asleep?e.breath:null),this.headCap+=((e.feet.some(d=>d.mode==="free")&&!e.lyingStill?1:0)-this.headCap)*Math.min(1,t*5);const r=_a(this.pitchLook+this.face.nod,Math.min(this.pitchLook+this.face.nod,.03),this.headCap),o=_a(this.face.roll,Se(this.face.roll,-.03,.03),this.headCap),a=1-Se(Math.abs(e.roll)/.6,0,1);this.turn.rotation.set(r*a,this.yawLook*a,o*a,"YXZ");const c=1+e.squash,l=1+e.stretch,h=c/Math.sqrt(l),u=l/Math.sqrt(c),f=1/(Math.sqrt(c)*Math.sqrt(l));this.squash.scale.set(f,h,u);for(const d of this.arms)d.shoulder.position.set(d.side*(.5*f+vi/2),.42*h,0);this.pelvis.updateMatrixWorld(!0),this.solveLegs(),this.solveArms(t),e.asleep&&(this.lastBreath<.55&&e.breath>=.55&&this.fx.z(this.headCentre(this.v1).add(this.v2.set(0,.62,0))),this.lastBreath=e.breath),this.fx.update(t)}inHead(t,e,n=!1){const i=this.squash.worldToLocal(this.v4.copy(t)),r=n?this.motion.headDrop:this.motion.hipDrop;return Math.abs(i.x)<.5+e&&i.y>.02-r&&i.y<1+e-r&&Math.abs(i.z)<.5+e}outOfBody(t,e,n,i){const r=t.parent,o=i?this.motion.hipDrop:this.motion.headDrop;for(let a=0;a<24;a++){let c=-1,l=0;const h=e(),u=this.v3;for(let x=0;x<h.length;x++){const g=this.squash.worldToLocal(this.v4.copy(h[x]));if(!(Math.abs(g.x)<.5+n&&g.y>.02-o&&g.y<1+n-o&&Math.abs(g.z)<.5+n))continue;const m=[[.5+n-g.x,1,0,0],[g.x+.5+n,-1,0,0],[.5+n-g.z,0,0,1],[g.z+.5+n,0,0,-1],[1+n-o-g.y,0,1,0]];i&&m.push([g.y+o,0,-1,0]);let S=null;for(const E of m)!i&&this.v2.set(E[1],E[2],E[3]).transformDirection(this.squash.matrixWorld).y<-.6||(!S||E[0]<S[0])&&(S=E);S&&S[0]>l&&(l=S[0],c=x,u.set(S[1],S[2],S[3]))}if(c<0)return;u.transformDirection(this.squash.matrixWorld);const f=r.worldToLocal(this.v1.copy(h[c])),d=this.v2.copy(u).transformDirection(this.qm.copy(r.matrixWorld).invert()),p=yi.subVectors(f,t.position).cross(d);if(p.lengthSq()<1e-8)return;t.quaternion.premultiply(this.qb.setFromAxisAngle(p.normalize(),.07))}}legPoints(t,e){const n=this.motion;return t.hip.updateMatrixWorld(!0),t.hip.localToWorld(e[0].set(0,-.4*n.thigh,0)),t.hip.localToWorld(e[1].set(0,-.75*n.thigh,0)),t.knee.getWorldPosition(e[2]),t.knee.localToWorld(e[3].set(0,-.5*n.shin,0)),t.ankle.getWorldPosition(e[4]),e}solveLegs(){const t=this.motion,e=this.pelvis.getWorldQuaternion(this.qa),n=this.qc.copy(e).invert();this.legs.forEach((i,r)=>{const o=t.feet[r],a=this.pelvis.worldToLocal(this.v1.copy(o.ankle)),c=this.v3.set(0,0,1).applyQuaternion(o.q).applyQuaternion(n),l=Math.atan2(c.x,c.z),h=i.side>0?Se(l,-.2,.7):Se(l,-.7,.2);if(h!==l){const b=Math.hypot(c.x,c.z);c.x=Math.sin(h)*b,c.z=Math.cos(h)*b}let u=o.q;if(o.mode!=="free"&&Math.abs(l-h)>as.twist*.85){const b=l-h-Math.sign(l-h)*as.twist*.85;u=this.qf.setFromAxisAngle(Nn.set(0,1,0),-b).multiply(o.q)}const f=o.kneeOut,d=this.v2.copy(c).multiplyScalar(1-f*1.3).add(un.set(i.side*(.12+1.2*f),uf(-a.y,t.L),0)),p=mM.set(0,1,0).applyQuaternion(n);if(o.mode==="free"){const b=Se(Math.abs(t.roll)/(Math.PI/2),0,1);d.set(0,0,_a(.6,1,b)).addScaledVector(p,1-.85*b);const C=Se(-a.z/.25,0,1);d.z+=1.6*C,d.addScaledVector(p,-.9*C)}const x=o.mode==="free"?pM:Yh;Li(i.hip.position,a,t.thigh,t.shin,d,i.hip.quaternion,i.knee.quaternion,x),o.mode!=="free"?this.kneeBelowHip(i,a,i.hip.position.y-.1,p.set(i.side,0,0)):this.kneeBelowHip(i,a,i.hip.position.y+.02,p.add(un.set(i.side*.3,0,0)),x);const g=this.v3.set(0,-1,0).applyQuaternion(i.hip.quaternion),m=Math.atan2(g.z,-g.y),S=Math.asin(Se(g.x*i.side,-1,1)),E=Se(m,Gr.back,Gr.fwd),v=Se(S,o.mode==="free"?-.45:Gr.inward,Gr.out);if(E!==m||v!==S){const b=tn.set(i.side*Math.sin(v),-Math.cos(v)*Math.cos(E),Math.cos(v)*Math.sin(E));i.hip.quaternion.premultiply(this.qb.setFromUnitVectors(g,b))}o.mode==="free"&&this.kneeOverGround(i,a,x),this.outOfBody(i.hip,()=>this.legPoints(i,this.pts),.075,!0);const y=this.qb.copy(e).multiply(i.hip.quaternion).multiply(i.knee.quaternion);i.ankle.quaternion.copy(y.invert()).multiply(u),Kh(i.ankle.quaternion,[as.up,as.down],[-.35,as.twist],[-.3,as.side]),i.toes.rotation.set(Se(o.toe,-1.2,.5),0,0)})}kneeBelowHip(t,e,n,i,r=Yh){const o=this.motion,a=t.hip.position,c=this.v5.copy(e),l=this.v4.set(0,-o.thigh,0).applyQuaternion(t.hip.quaternion).add(a);if(l.y<=n)return;const h=this.v3.subVectors(c,a),u=h.length();if(u<1e-4)return;h.divideScalar(u);const f=this.v2.copy(a).addScaledVector(h,h.dot(this.v1.subVectors(l,a))),d=this.v1.subVectors(l,f),p=d.length();if(p<1e-4)return;d.divideScalar(p);const x=this.v4.crossVectors(h,d).normalize();x.dot(i)<0&&x.negate();let g=Math.PI/2;for(let S=1;S<=18;S++){const E=S/18*(Math.PI/2);if(f.y+p*(Math.cos(E)*d.y+Math.sin(E)*x.y)<=n){g=E;break}}const m=d.multiplyScalar(Math.cos(g)).addScaledVector(x,Math.sin(g));Li(a,c,o.thigh,o.shin,m,t.hip.quaternion,t.knee.quaternion,r)}kneeOverGround(t,e,n){const i=this.motion,[r,o,a,c,l,h]=this.kg;if(t.hip.updateMatrixWorld(!0),t.knee.getWorldPosition(r),r.y>=this.world.groundAt(r.x,r.z)+vi/2)return;const u=t.hip.position,f=h.set(0,-i.thigh,0).applyQuaternion(t.hip.quaternion).add(u);l.subVectors(e,u);const d=l.length();if(d<1e-4)return;l.divideScalar(d),o.copy(u).addScaledVector(l,l.dot(a.subVectors(f,u))),a.subVectors(f,o);const p=a.length();if(p<1e-4)return;a.divideScalar(p),c.crossVectors(l,a).normalize(),c.dot(r.set(0,1,0).applyQuaternion(this.pelvis.getWorldQuaternion(this.qd).invert()))<0&&c.negate();let x=-1;for(let m=1;m<=24&&x<0;m++){const S=m/24*Math.PI;this.pelvis.localToWorld(h.copy(o).addScaledVector(a,p*Math.cos(S)).addScaledVector(c,p*Math.sin(S))),h.y>=this.world.groundAt(h.x,h.z)+vi/2&&(x=S)}if(x<0)return;const g=h.copy(a).multiplyScalar(Math.cos(x)).addScaledVector(c,Math.sin(x));Li(u,e,i.thigh,i.shin,g,t.hip.quaternion,t.knee.quaternion,n)}armPoints(t,e){const n=this.a2;return t.shoulder.updateMatrixWorld(!0),t.shoulder.localToWorld(e[0].set(0,-.6*n,0)),t.elbow.getWorldPosition(e[1]),t.elbow.localToWorld(e[2].set(0,-.5*n,0)),t.wrist.getWorldPosition(e[3]),t.wrist.localToWorld(e[4].set(0,-.15/2-.02,0)),e}solveArms(t){const e=this.motion,n=this.a2,i=this.a2,r=n+i,o=d=>this.turn.worldToLocal(this.v1.copy(d)).x<0?0:1,a=[null,null],[c,l]=this.targets;if(c&&(a[o(c)]=c),l){const d=o(l);a[d]?Math.abs(this.turn.worldToLocal(this.v1.copy(l)).x)<.8?a[1-d]=l:Math.floor(this.clock/2.6)%2===1&&(a[d]=l):a[d]=l}this.showing=c&&a.includes(c)?a.includes(l)&&Math.floor(this.clock/2.6)%2===1?l:c:l;const h=e.idle,f=e.feet.some(d=>d.mode==="free")?this.turn.getWorldQuaternion(this.qd).invert():null;this.arms.forEach((d,p)=>{const x=e.arms[p],g=this.v2.set(d.side*.5,-.35,-1);if(f){g.set(0,1,0).applyQuaternion(f);const M=this.v3.set(0,.5,0).sub(d.shoulder.position).normalize();g.dot(M)>.3&&g.set(0,1,0),g.multiplyScalar(.45).add(tn.set(0,0,-1))}d.fk[0].setFromEuler(new yn(x.pitch,0,d.side*Math.max(.04,x.out))),d.fk[1].setFromAxisAngle(un.set(1,0,0),-Se(x.elbow,0,Bs));let m=0,S=!1;const E=x.reach??(h?a[p]:null);if(E){const M=d.shoulder.position;if(x.reach&&x.flat){S=!0;const T=d.shoulder.getWorldPosition(this.v3),L=d.elbow.getWorldPosition(Qr);d.palm.copy(E);const D=ds.set(E.x-T.x,0,E.z-T.z);D.lengthSq()>1e-6&&D.normalize();const B=In.set(E.x-L.x,0,E.z-L.z).addScaledVector(D,.25);B.lengthSq()<1e-4&&B.set(Math.sin(e.yaw),0,Math.cos(e.yaw)),B.normalize(),d.palmDir.lerp(B,d.flatW<.05?1:Math.min(1,t*10)).normalize();const H=this.v1.copy(E).add(tn.set(0,ks.thick/2+.01,0)).addScaledVector(d.palmDir,-.095),G=this.turn.worldToLocal(H);Li(M,G,n,i,g,d.ik[0],d.ik[1],Bs)}else{const T=this.turn.worldToLocal(this.v1.copy(E));if(x.reach||E===l){if(E===l){const L=d.shoulder.getWorldPosition(xl),D=ds.set(Se(L.x,l.x-.5,l.x+.5),Se(L.y,l.y-.5,l.y+.5),Se(L.z,l.z-.5,l.z+.5));D.addScaledVector(In.subVectors(L,D).normalize(),.06),this.turn.worldToLocal(T.copy(D))}T.distanceTo(M)<=r*.98||x.reach?Li(M,T,n,i,g,d.ik[0],d.ik[1],Bs):this.pointAlong(d,T)}else this.pointAlong(d,T)}m=x.reach?x.reachW:1}const v=e.scratch;if(v&&v.side===p&&v.w>0&&x.reach){const M=d.shoulder.position,T=e.headDrop,L=this.turn.worldToLocal(this.sc1.copy(x.reach).add(tn.set(0,ks.thick/2+.01,0)).addScaledVector(d.palmDir,-.095)),D=v.kind==="chin"?this.sc2.set(d.side*(.14+.03*v.wiggle),-T-.15,.62):this.sc2.set(d.side*.4,1.14-T,-.04+.05*v.wiggle);let B=L;if(v.kind==="chin")B=L.lerp(D,v.w);else{const H=this.sc3.set(d.side*.9,1.25-T,.1),G=v.w,J=1-G;B=L.multiplyScalar(J*J).addScaledVector(H,2*G*J).addScaledVector(D,G*G)}g.lerp(v.kind==="chin"?un.set(d.side,-.3,.1):un.set(d.side,.35,-.15),v.w),Li(M,B,n,i,g,d.ik[0],d.ik[1],Bs),S=v.w<.05,m=1}d.aimW+=((E?m:0)-d.aimW)*Math.min(1,t*(x.reach?30:7)),d.flatW+=((S?1:0)-d.flatW)*Math.min(1,t*12),d.shoulder.quaternion.slerpQuaternions(d.fk[0],d.ik[0],d.aimW),d.elbow.quaternion.slerpQuaternions(d.fk[1],d.ik[1],d.aimW),d.shoulder.updateMatrixWorld(!0);const y=this.pushOut(d.elbow.getWorldPosition(this.v1),.09,d.shoulder.getWorldPosition(this.v3));if(d.pushE=y?1:0,y&&d.pushETo.copy(y),d.pushE>0){const M=this.turn.worldToLocal(this.v1.copy(d.pushETo)).sub(d.shoulder.position);_o(M,g,this.qa),d.shoulder.quaternion.slerp(this.qa,d.pushE)}d.shoulder.updateMatrixWorld(!0);const b=d.wrist.localToWorld(this.v1.set(0,-.15/2-.02,0)),C=S?null:this.pushOut(b,.13,d.shoulder.getWorldPosition(this.v3));if(C?(d.pushTo.copy(C),d.pushN.subVectors(C,b).normalize(),d.push=1):d.push=0,d.push>0){const M=this.turn.worldToLocal(this.v3.copy(d.pushTo).add(d.pushN)).sub(this.turn.worldToLocal(this.v1.copy(d.pushTo)));M.multiplyScalar(2).add(this.v1.set(0,-.3,-.6));const T=this.turn.worldToLocal(this.v1.copy(d.pushTo));Li(d.shoulder.position,T,n,i,M,this.qa,this.qb,Bs),d.shoulder.quaternion.slerp(this.qa,d.push),d.elbow.quaternion.slerp(this.qb,d.push)}d.aimW>.5&&this.elbowClear(d),this.outOfBody(d.shoulder,()=>this.armPoints(d,this.pts),.045,!1);const _=this.qa.setFromAxisAngle(un.set(1,0,0),Se(-.1-.05*x.vp,-.35,.35));if(d.flatW>.01){d.elbow.updateMatrixWorld(!0);const M=d.elbow.getWorldQuaternion(this.qb);un.set(0,this.v3.set(1,0,0).applyQuaternion(M).y<0?-1:1,0),tn.copy(d.palmDir).negate(),Nn.crossVectors(un,tn).normalize(),tn.crossVectors(Nn,un).normalize(),xo.makeBasis(un,tn,Nn);const T=this.qc.setFromRotationMatrix(xo),L=M.invert().multiply(T);Kh(L,[-.45,xa.side],[-1.6,xa.turn],[-1.55,xa.flex],"YZX"),d.wrist.quaternion.slerpQuaternions(_,L,d.flatW)}else d.wrist.quaternion.copy(d.aimW>.5?d.wrist.quaternion.identity():_)})}elbowClear(t){const e=()=>this.armPoints(t,this.pts).some(c=>this.inHead(c,.01,!0));if(!e())return;const n=t.shoulder.position,i=this.turn.worldToLocal(t.wrist.getWorldPosition(this.v4)),r=this.v5.subVectors(i,n);if(r.lengthSq()<1e-6)return;r.normalize();const o=this.turn.worldToLocal(t.elbow.getWorldPosition(this.v3)).sub(n),a=yi.crossVectors(r,o).x*t.side>=0?1:-1;for(let c=0;c<12;c++){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,a*.13));const l=t.elbow.getWorldPosition(this.v3);if(l.y<this.world.groundAt(l.x,l.z)+.08){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,-a*.13));return}if(!e())return}}pointAlong(t,e){const n=yi.subVectors(e,t.shoulder.position);_o(n,this.v2.set(t.side*.5,-.35,-1),t.ik[0]),t.ik[1].setFromAxisAngle(un.set(1,0,0),-.08)}pushOut(t,e=.07,n){if(!this.world.solidAt(t.x,t.y,t.z))return null;const i=Math.round(t.x),r=Math.round(t.y),o=Math.round(t.z);let a=null,c=1/0;for(const[l,h,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,0,1],[0,0,-1]]){if(this.world.solidAt(i+l,r+h,o+u))continue;const f=l?(i+l*.5-t.x)*l:h?r+.5-t.y:(o+u*.5-t.z)*u,d=n?l*(n.x-t.x)+h*(n.y-t.y)+u*(n.z-t.z):0,p=f-Math.max(0,d)*.8;p<c&&(c=p,a=new F(t.x+l*(f+e),t.y+h*(f+e),t.z+u*(f+e)))}return a}debug(){const t=this.motion,e=this.legs.map((a,c)=>a.ankle.getWorldPosition(new F).distanceTo(t.feet[c].ankle));let n=0,i=0;const r=a=>{this.world.solidAt(a.x,a.y,a.z)&&n++},o=[0,1,2,3,4].map(()=>new F);for(const a of this.legs)this.legPoints(a,o),[o[2],o[3],o[4]].forEach(r),i+=o.filter(c=>this.inHead(c,0)).length;for(const a of this.arms)this.armPoints(a,o),[o[1],o[4]].forEach(r),i+=o.filter(c=>this.inHead(c,0)).length;return{footErr:e,inside:n,self:i,modes:t.feet.map(a=>a.mode)}}dispose(){this.face.dispose(),this.fx.dispose();for(const t of this.own)t.dispose()}}const gM="Welcome to Robyn Miller's Popup Portrait Gallery! I'm your host. Getting around is easy—just use the {W} key to move forward. To look around, use your mouse! Or the {LEFT} and {RIGHT} keys.",xM="Welcome to Robyn Miller's Popup Portrait Gallery! I'm your host. Getting around is easy—drag the floor to move, and drag the walls to look around.",_M="Pull the floor toward you to walk. The door is right behind me.",vM="Walk up close to a painting and tap it to see it full screen. Tap beside it to put it back.",MM="Click anywhere to look around.",yM="Just click anywhere. Nothing will break. Probably.",SM="Press {W} to walk. The door is right behind me.",wM="Click anywhere to carry on.",bM="That's it! This way.",EM="Walk up close to a painting and click to see it full screen. Click again to put it back.",TM="Hi, Welcome to Robyn Miller's gallery. Feel free to take a look around.",AM="You are currently one of {x} people in the gallery.",RM="Things are quiet. You are the only person in the gallery.",CM=["You may think that I'm not an appropriate host for an art gallery? Hm. Well maybe you're not an appropriate guest for our gallery!","My hat? I'm celebrating life!","Music? I'll see what I can find.","Take your time. The paintings aren't going anywhere. Neither am I.","Robyn painted every one of these. I just stand near them looking important.","Click on a painting to see it up close. I recommend it. I've seen them all up close. Very close.","Some people walk through a gallery in five minutes. Some take five hours. I've timed them.","Do you see the faces? I see faces everywhere. Even in the floor.","Between you and me, that one over there looked at me funny this morning.","Shh. The paintings are thinking.","I polished this floor myself. With my feet.","Every gallery needs a host. This one got me. Lucky gallery.","Art is long and I am short.","Stand back a little. Some paintings like their space.","I'm not allowed to touch the paintings. I'm barely allowed to touch the walls.","That one's my favourite. They're all my favourite.","Is it just me, or did that painting blink?","The lights in here are very flattering. To the paintings. And to me.","I've been told I have an excellent eye for art. I have two, actually.","Feel free to linger. Lingering is encouraged here.","If anyone asks, I'm security.","You can tell a lot from a face. Mine says 'party'.","There's no gift shop. I asked.","If you get lost, follow the walls. That's what I do.","Look closer. Then look from farther away. Then closer again. That's the trick.","Quiet in here, isn't it? I like it that way. Mostly.","Paintings get lonely if nobody looks at them. I made that up. But still.","Mind the doorways. They're bigger than they look. Or I'm smaller.","All the walls in here are white. I campaigned for polka dots. I lost.","Hm. You have good taste. I can tell by the way you stand.","This is the part where I say something profound. ... I'll get back to you.","I've counted the paintings twice. I got two different answers.","If you need me, I'll be right behind you. Always. Right behind you.","Sometimes I sit and stare at one for an hour. It doesn't mind.","Do you think they can see us? I think they can see us.","Not to brag, but I've been in every room of this gallery. Several times. Today.","Art is best enjoyed slowly. Like soup.","I'm told I add a certain something to the place. Nobody has said what.","Go ahead and stare. That's what they're for.","What do you think that one is about? I have a theory, but it's mostly about sandwiches.","I used to be just a block. Now I'm a block with legs. That's progress.","Every time someone visits, I feel taller. I'm not, though.","Close your eyes. Now open them. See? Still art.","Please don't lick the paintings. I'm not saying you would. I'm just saying.","I like this room. I like the other rooms too. I'm very agreeable.","That's a nice one. I'd hang it in my house, if I had a house. Or walls.","Some galleries have audio guides. You have me. You're welcome.","Ah, I was hoping you'd come this way.","Hmm-hmm-hmmm. Sorry. I hum when I'm happy.","Do you paint? You have a painter's way of squinting.","If these walls could talk... well, they'd probably just say 'white'.","Look at that brushwork! I think. I'm not entirely sure what brushwork is.","Did you see the little card next to each one? I read them all. Twice.","No hurry. I'm on gallery time.","The floor reflects the paintings. So technically you're seeing everything twice. You're welcome again.","I can't decide if that one is smiling or frowning. Maybe both. Like me before breakfast.","If you like one, stand in front of it a little longer. It'll like you back.","Some visitors talk to the paintings. I don't judge. I talk to them too.","I'm a professional. I've hosted at least one visitor before. Possibly two.","The best spot in the house is wherever you happen to be standing.","Squint a little. Go on. See how the colours move? That's free. No extra charge.","I tried painting once. It painted me back.","Don't mind me. I'm just here for the ambience. I am the ambience.",'Did you know the word "gallery" means a long room? I looked it up. I had time.',"If you hear snoring later, that wasn't me.","I'd tell you which one is the most famous, but they'd all get jealous.","This one was hung at exactly the right height. I checked with my hat.","You walk very gracefully. For a visitor.","Every painting here is somebody. Even the ones that look like nobody.","I like to think the paintings look forward to visitors. I know I do."],LM=["Yes? Can I help you?","Hey! Look at the art, not at me.","That tickles.","I'm working, you know.","Hello again!","Personal space! I'm very small. I need a lot of it.","Ooh. A fan.","Careful. I'm delicate. Like a watercolour.","Me? I'm not part of the exhibition. Or am I?","You found me! I wasn't hiding. Much.","Hmm? Oh, sorry. I was admiring that one.","My hat? I'm celebrating life!","Please do not poke the host.","Is this about the hat? It's about the hat, isn't it.","I'm flattered. Truly.","Music? I'll see what I can find."],PM=["Hm? Oh! I wasn't asleep. I was resting my eyes.","I'm up! I'm up!","Was I snoring? I don't snore. That was the ventilation.","Huh? Who? Oh. You. Welcome back."],IM=["Back again! I knew you would be.","Welcome back. I kept everything just where it was.","Oh good, you're back. It's lonely in here without you."],DM=["Leaving already? Come back soon!","Goodbye! Thank you for visiting.","Off you go, then. I'll keep an eye on things.","Bye! The paintings will miss you. So will I. A little.","Thanks for coming. Mind the white out there. There is a lot of it."],UM=["Lovely, isn't it?","Up close they get even stranger. In the best way.","Good choice.","That's one of my favourites. Don't tell the others.","I always see something new in that one."],NM=["Oh! Someone else just came in. There are {x} of you now.","Another visitor! That makes {x} of you."],FM=["Somebody just left. Now there are {x} of you."],zM=["Somebody just left. It's just you and me now."];function _i(s,t){let e=s.filter(i=>!t.has(i));if(!e.length){for(const i of s)t.delete(i);e=s}const n=e[Math.floor(Math.random()*e.length)];return t.add(n),n}const de=.2,df=Math.sqrt(9.81/(22*de)),pf={...qv,shape:1,eyeSize:0,eyeSpacing:1,eyeHeight:.23,browWeight:0,browHeight:1,noseLength:0,noseHeight:.49,mouthWidth:.28,mouthColor:.22,cheeks:.46,skin:0,hairColor:.03482587064676617,hat:"birthday"},Hs=(s,t,e,n=new F)=>n.set(s/de,t/de-.5,e/de),Zh=(s,t=new F)=>t.set(s.x*de,(s.y+.5)*de,s.z*de);class OM{constructor(t,e,n,i=!1){I(this,"scene",new So);I(this,"cam",new Ye);I(this,"mcam",new Ye);I(this,"shadow");I(this,"rig");I(this,"count",null);I(this,"onEnter",()=>{});I(this,"onLeave",()=>{});I(this,"el");I(this,"textEl");I(this,"bubble",null);I(this,"onKey",()=>{});I(this,"hidden",!1);I(this,"wasLocked",!1);I(this,"queue",[]);I(this,"used",new Set);I(this,"grid",null);I(this,"stage","waiting");I(this,"inv",{hello:!1,lookSaid:!1,lookAt:0,lockedAt:0,nudgedClick:!1,nudgedWalk:!1,leading:!1,startD:-1});I(this,"inside",!1);I(this,"wasInside",!1);I(this,"wasOut",!0);I(this,"quiet",0);I(this,"resting","no");I(this,"soughtRest",!1);I(this,"idleIn",6);I(this,"remarkIn",45);I(this,"followIn",0);I(this,"glanceIn",2);I(this,"glanceAt",null);I(this,"dest",null);I(this,"last",{x:0,z:0,yaw:0,pitch:0});I(this,"countSaid",0);I(this,"lastCrowd",-999);I(this,"clock",0);I(this,"standH",0);I(this,"v1",new F);I(this,"v2",new F);I(this,"scaleM",new ne().makeScale(de,de,de));this.gallery=t,this.player=e,this.main=n,this.touch=i;const r={groundAt:(f,d)=>this.wallAt(f*de,d*de)?this.gallery.arch.H/de:-.5,solidAt:(f,d,p)=>{const x=(d+.5)*de;return x<0?!0:x<this.gallery.arch.H&&this.wallAt(f*de,p*de)}};this.rig=new ff(pf,3,r),this.scene.add(this.rig.root,this.rig.fx.group),this.scene.add(new Au(16777215,13815492,1.9));const o=new Cu(16777215,1.5);o.position.set(.4,1,.7),this.scene.add(o.target),this.scene.add(o);const a=document.createElement("canvas");a.width=a.height=64;const c=a.getContext("2d"),l=c.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(0,0,0,0.62)"),l.addColorStop(.55,"rgba(0,0,0,0.3)"),l.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=l,c.fillRect(0,0,64,64);const h=new wo(a);this.shadow=new Te(new Bn(1.5,1.2),new zn({map:h,transparent:!0,depthWrite:!1,toneMapped:!1,color:0})),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=-1,this.shadow.layers.set(1),this.scene.add(this.shadow),this.cam.layers.enable(1),this.placeOutside(),this.el=document.createElement("div"),this.el.className="host-bubble";const u=document.createElement("div");u.className="hb",this.textEl=document.createElement("span"),u.append(this.textEl),this.el.append(u),this.textEl.addEventListener("click",f=>{var p;const d=(p=f.target.closest(".hk"))==null?void 0:p.dataset.k;d&&(f.preventDefault(),f.stopPropagation(),this.onKey(d),this.endBubble())}),document.body.append(this.el),this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch}}get arch(){return this.gallery.arch}wallAt(t,e){return this.arch.solids.some(n=>t>n.x0-.01&&t<n.x1+.01&&e>n.z0-.01&&e<n.z1+.01)}get at(){return{x:this.rig.pos.x*de,z:this.rig.pos.z*de}}doorSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.6,z:t.z-1.4}}outsideSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.7,z:t.z+this.gallery.data.layout.outline.t+3.2}}placeOutside(){const t=this.outsideSpot();this.rig.place(t.x/de,t.z/de,0),this.dest=null}gridFor(){if(this.grid&&this.grid.arch===this.arch)return this.grid;const t=this.arch,e=t.inner,n=.25,i=.32,r=this.gallery.data.layout.outline.t,o=7,a=e.x0-r-2.5,c=e.z0,l=Math.ceil((e.x1-e.x0+2*(r+2.5))/n),h=Math.ceil((e.z1-e.z0+r+o)/n),u=new Uint8Array(l*h);for(let f=0;f<h;f++)for(let d=0;d<l;d++){const p=a+(d+.5)*n,x=c+(f+.5)*n,g=p>e.x0+i&&p<e.x1-i&&x>e.z0+i&&x<e.z1-i,m=x>e.z1+r+i,S=p>t.entrance.a+i&&p<t.entrance.b-i&&x>e.z1-i-.01&&x<e.z1+r+i+.01;!g&&!m&&!S||t.solids.some(E=>p>E.x0-i&&p<E.x1+i&&x>E.z0-i&&x<E.z1+i)||(u[f*l+d]=1)}return this.grid={arch:t,x0:a,z0:c,nx:l,nz:h,c:n,free:u},this.grid}freeAt(t,e){const n=this.gridFor(),i=Math.floor((t-n.x0)/n.c),r=Math.floor((e-n.z0)/n.c);return i>=0&&r>=0&&i<n.nx&&r<n.nz&&n.free[r*n.nx+i]===1}clear(t,e,n,i){const r=Math.hypot(n-t,i-e),o=Math.max(1,Math.ceil(r/.1));for(let a=0;a<=o;a++)if(!this.freeAt(t+(n-t)*a/o,e+(i-e)*a/o))return!1;return!0}route(t,e){const n=this.gridFor(),i=this.at,r=(v,y)=>[Math.floor((v-n.x0)/n.c),Math.floor((y-n.z0)/n.c)];let[o,a]=r(i.x,i.z);const[c,l]=r(t,e),h=(v,y)=>v>=0&&y>=0&&v<n.nx&&y<n.nz&&n.free[y*n.nx+v]===1;if(!h(c,l))return null;if(!h(o,a)){let v=null,y=1/0;for(let b=-4;b<=4;b++)for(let C=-4;C<=4;C++)h(o+C,a+b)&&C*C+b*b<y&&(y=C*C+b*b,v=[o+C,a+b]);if(!v)return null;[o,a]=v}const u=n.nx*n.nz,f=new Float32Array(u).fill(1/0),d=new Int32Array(u).fill(-1),p=(v,y)=>{const b=Math.abs(v-c),C=Math.abs(y-l);return Math.max(b,C)+.414*Math.min(b,C)},x=[[p(o,a),a*n.nx+o]];f[a*n.nx+o]=0;const g=l*n.nx+c;for(;x.length;){let v=0;for(let _=1;_<x.length;_++)x[_][0]<x[v][0]&&(v=_);const[,y]=x.splice(v,1)[0];if(y===g)break;const b=y%n.nx,C=Math.floor(y/n.nx);for(const[_,M]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const T=b+_,L=C+M;if(!h(T,L)||_&&M&&(!h(b+_,C)||!h(b,C+M)))continue;const D=L*n.nx+T,B=f[y]+(_&&M?1.414:1);B<f[D]&&(f[D]=B,d[D]=y,x.push([B+p(T,L),D]))}}if(!isFinite(f[g]))return null;const m=[];for(let v=g;v!==-1;v=d[v])m.unshift({x:n.x0+(v%n.nx+.5)*n.c,z:n.z0+(Math.floor(v/n.nx)+.5)*n.c});m[m.length-1]={x:t,z:e};const S=[i];let E=0;for(;E<m.length-1;){let v=m.length-1;const y=S[S.length-1];for(;v>E+1&&!this.clear(y.x,y.z,m[v].x,m[v].z);)v--;S.push(m[v]),E=v}return S}goTo(t,e,n){const i=this.route(t,e);if(!i||i.length<2)return!1;let r=0;for(let c=1;c<i.length;c++)r+=Math.hypot(i[c].x-i[c-1].x,i[c].z-i[c-1].z);if(r<.25)return!1;const o=r>3.2?"bound":r>1.6?"run":"walk",a=n??(Math.random()<.3?"strut":"stroll");return this.rig.travel(i.slice(1).map(c=>({x:c.x/de,z:c.z/de})),o,()=>{this.dest=null},a),this.dest={x:t,z:e},!0}seen(t,e){const n=this.player.pos;return!Ni(this.arch.solids,n.x,n.z,t,e)}goodSpot(t,e){const n=this.player.pos,i=Math.hypot(t-n.x,e-n.z),r=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),a=((t-n.x)*r+(e-n.z)*o)/Math.max(i,1e-6);return i>.75&&i<3.4&&a>-.2&&this.seen(t,e)}follow(){const t=this.player.pos,e=this.at;if(this.goodSpot(e.x,e.z)&&!this.dest)return;const n=-Math.sin(this.player.yaw),i=-Math.cos(this.player.yaw),r=Math.cos(this.player.yaw),o=-Math.sin(this.player.yaw),a=[[1.5,.9],[1.5,-.9],[1,1.4],[1,-1.4],[.3,1.3],[.3,-1.3],[2.2,0],[2.4,1.2],[2.4,-1.2],[-.6,1],[-.6,-1]];let c=null,l=1/0;if(a.forEach(([u,f],d)=>{const p=t.x+n*u+r*f,x=t.z+i*u+o*f;if(!this.freeAt(p,x)||!this.seen(p,x))return;const g=Math.hypot(p-e.x,x-e.z)+d*.15;g<l&&(l=g,c={x:p,z:x})}),!c)return;const h=c;this.dest&&Math.hypot(this.dest.x-h.x,this.dest.z-h.z)<.8||this.goTo(h.x,h.z)}say(t,e){this.bubble||this.queue.length?this.queue.push({text:t,feel:e}):this.start(t,e)}start(t,e){if(t==="{count}"&&(t=this.count===null?"{x}":this.count<=1?RM:AM),t.includes("{x}")&&this.count===null){const r=this.queue.shift();r&&this.start(r.text,r.feel);return}const n=t.replace("{x}",String(this.count)).split(/\{(W|LEFT|RIGHT)\}/).map((r,o)=>(o%2,r)).filter(r=>r!==""),i=n.map(r=>Ma(r)?"o":r).join("");this.bubble={text:i,segs:n,shown:0,drawn:0,until:1/0},this.textEl.textContent="",this.grow(this.bubble,i.length),this.el.classList.remove("pop"),this.el.offsetWidth,this.el.classList.add("pop"),this.el.classList.add("on"),e&&this.rig.feel(e,2.5)}endBubble(){if(this.bubble=null,this.el.classList.contains("on")&&!this.hidden){const e=this.el.cloneNode(!0);e.className="host-bubble-ghost"+(this.el.classList.contains("free")?" free":""),e.style.visibility="",document.body.append(e),setTimeout(()=>e.remove(),1300)}this.el.classList.remove("on","pop");const t=this.queue.shift();t&&this.start(t.text,t.feel)}grow(t,e){let n=0;for(const i of t.segs){const r=Ma(i)?1:i.length,o=Math.max(t.drawn,n),a=Math.min(e,n+r);if(a>o)if(Ma(i)){const c=document.createElement("button");c.className="hk",c.dataset.k=i,c.tabIndex=-1,c.title=BM[i],c.textContent=kM[i],this.textEl.append(c)}else{const c=i.slice(o-n,a-n),l=this.textEl.lastChild;l&&l.nodeType===Node.TEXT_NODE?l.appendData(c):this.textEl.append(c)}n+=r}t.drawn=e}countLine(){return"{count}"}poke(){this.quiet=0,this.wake(),!this.bubble&&(this.say(_i(LM,this.used),Math.random()<.5?"pleased":"surprised"),this.rig.busy()||this.rig.perform(Math.random()<.5?"wave":"spin"))}looked(){this.stage!=="company"||this.bubble||Math.random()>.35||!this.visible(6)||this.say(_i(UM,this.used),"pleased")}setCount(t){const e=this.count;this.count=t,!(e===null||t===e||this.stage!=="company"||this.clock-this.lastCrowd<60||this.resting!=="no")&&(this.lastCrowd=this.clock,t>e?this.say(_i(NM,this.used),"excited"):this.say(t<=1?zM[0]:_i(FM,this.used),"curious"))}hit(t){const e=new lo(Hs(t.ray.origin.x,t.ray.origin.y,t.ray.origin.z),t.ray.direction.clone(),0,t.far/de);return this.rig.hit(e)}visible(t){const e=this.player.pos,n=this.at;if(Math.hypot(n.x-e.x,n.z-e.z)>t||!this.seen(n.x,n.z))return!1;const i=Zh(this.rig.headCentre(this.v1),this.v2).project(this.main);return i.z<1&&Math.abs(i.x)<.95&&Math.abs(i.y)<.95}wake(){this.resting==="no"&&this.rig.resting==="stand"||(this.resting==="asleep"&&(this.rig.feel("surprised",1.2),this.rig.blink(),Math.random()<.6&&this.say(_i(PM,this.used))),this.resting="no",this.soughtRest=!1,this.rig.sleep(!1),this.rig.rest("stand"),this.rig.mood("calm"))}update(t){this.clock+=t;const e=this.player,n=this.rig,i=this.arch,r=Math.hypot(e.pos.x-this.last.x,e.pos.z-this.last.z)>.004||Math.abs(e.yaw-this.last.yaw)+Math.abs(e.pitch-this.last.pitch)>.003;this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch},this.quiet=r?0:this.quiet+t;const o=i.inner;this.inside=e.pos.x>o.x0&&e.pos.x<o.x1&&e.pos.z>o.z0&&e.pos.z<o.z1-.1,this.inside&&!this.wasInside&&(this.onEnter(),this.wake(),this.stage==="waiting"&&!this.countSaid?(this.stage="greeting",this.queue=[],n.turnTo(Math.atan2(e.pos.x-this.at.x,e.pos.z-this.at.z)),n.perform("wave"),this.say(TM,"happy"),this.say(this.countLine(),"pleased"),this.say(this.touch?vM:EM,"pleased"),this.countSaid=1):this.stage==="waiting"&&(this.stage="company",this.say(_i(IM,this.used),"happy")));const a=e.pos.z>o.z1+.3;if(a&&!this.wasOut&&this.stage!=="waiting"){this.onLeave(),this.stage==="company"&&(this.queue=[],this.wake(),this.say(_i(DM,this.used),"happy"),this.rig.perform("wave")),this.stage="waiting";const f=this.outsideSpot();this.goTo(f.x,f.z)}this.wasInside=this.inside,this.wasOut=a,this.stage==="waiting"&&!this.inside&&this.invite();const c=e.locked;this.wasLocked&&!c&&!this.hidden&&!this.bubble&&this.say(wM,"pleased"),this.wasLocked=c,this.stage==="greeting"&&!this.bubble&&!this.queue.length&&(this.stage="company",this.remarkIn=35+Math.random()*30);const l=this.bubble;l&&(l.shown=Math.min(l.text.length,l.shown+t*34),l.until===1/0&&l.shown>=l.text.length&&(l.until=this.clock+Math.max(3.2,l.text.length*.06)),this.clock>l.until&&this.endBubble());const h=!!l&&l.shown<l.text.length;n.talk(h?l.text[Math.max(0,Math.ceil(l.shown)-1)]:null),r&&(this.resting!=="no"||n.resting!=="stand")&&this.wake();const u=Hs(this.main.position.x,this.main.position.y,this.main.position.z,new F);if(this.stage==="company"&&this.resting==="no"&&((this.followIn-=t)<=0&&(this.followIn=.45,n.resting==="stand"&&this.follow()),!this.bubble&&(this.remarkIn-=t)<=0&&(this.remarkIn=45+Math.random()*45,this.visible(5.5)&&this.quiet<50&&this.say(_i(CM,this.used),Math.random()<.5?"pleased":"curious"))),this.resting!=="no"||n.resting!=="stand")(this.glanceIn-=t)<=0&&(this.glanceIn=3+Math.random()*4,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(this.resting==="asleep"?null:h?u:this.glanceAt),this.resting==="kneeling"&&(this.quiet>=180?(this.resting="asleep",n.resting==="kneel"&&n.rest("lie",Math.atan2(u.x-n.pos.x,u.z-n.pos.z))?n.mood("sleepy"):(n.mood("asleep"),n.sleep(!0))):this.quiet>120&&(this.idleIn-=t)<=0&&(this.idleIn=9+Math.random()*6,n.feel("yawn",1.8))),this.resting==="asleep"&&n.resting==="lie"&&n.feeling!=="asleep"&&(n.mood("asleep"),n.sleep(!0));else if(n.busy())n.lookAt(h?u:null);else if(n.turnTo(Math.atan2(u.x-n.pos.x,u.z-n.pos.z)),(this.glanceIn-=t)<=0&&(this.glanceIn=2.2+Math.random()*3.5,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(h?u:this.glanceAt),this.stage==="company"||this.stage==="waiting"){if(this.quiet>9&&this.quiet<25&&(this.idleIn-=t)<=0)this.idleIn=7+Math.random()*4,Math.random()<.35&&n.perform(Math.random()<.5?"spin":"jump");else if(this.quiet>=25&&this.quiet<60)n.mood("bored"),(this.idleIn-=t)<=0&&(this.idleIn=6+Math.random()*5,n.perform(Math.random()<.5?"sigh":"tap"));else if(this.quiet>=60&&!this.bubble){const f=Math.atan2(u.x-n.pos.x,u.z-n.pos.z),d=n.roomAt(n.pos.x,n.pos.z,f);if(!(d!=null&&d.lie)&&!this.soughtRest){this.soughtRest=!0;const p=this.restSpot(f);if(p&&this.goTo(p.x,p.z))return this.after(t)}this.resting="kneeling",n.mood("calm"),n.rest("kneel",f)}}this.after(t)}invite(){const t=this.player,e=this.inv,n=t.locked;if(this.countSaid||e.leading||(!e.hello&&this.clock>1.2&&(e.hello=!0,this.rig.perform("wave"),this.say(this.touch?xM:gM,"happy")),!e.hello))return;const i=!this.bubble&&!this.queue.length;(this.touch?t.moved:n)&&!e.lockedAt&&(e.lockedAt=this.clock),this.touch&&!e.lockedAt&&(e.lookSaid=e.nudgedClick=!0),!n&&!e.lockedAt&&!e.lookSaid&&i&&(e.lookSaid=!0,e.lookAt=this.clock,this.say(MM,"pleased")),!n&&!e.lockedAt&&e.lookSaid&&!e.nudgedClick&&this.clock-e.lookAt>20&&i&&(e.nudgedClick=!0,this.say(yM,"curious"));const r=this.arch.entrance,o=Math.hypot(t.pos.x-(r.a+r.b)/2,t.pos.z-r.z);if(e.startD<0&&(e.startD=o),o<e.startD-1.2){e.leading=!0,this.wake(),this.queue=[],this.bubble&&(this.bubble.until=Math.min(this.bubble.until,this.clock+.5)),this.say(bM,"excited");const a=this.doorSpot();this.goTo(a.x,a.z,"strut");return}e.lockedAt&&!e.nudgedWalk&&this.clock-e.lockedAt>16&&o>e.startD-.3&&i&&(e.nudgedWalk=!0,this.say(this.touch?_M:SM,"curious"))}after(t){this.rig.update(t*df);const e=this.rig.pos,n=-.5,i=Math.max(0,e.y-this.standH);(!this.standH||!this.rig.busy()&&this.rig.resting==="stand")&&(this.standH=this.standH?this.standH+(e.y-this.standH)*.02:e.y),this.shadow.position.set(0,n-e.y+.03,0);const r=Math.max(.35,1-i/1.6);this.shadow.scale.set(r,r,1),this.shadow.material.opacity=.5*r*(this.rig.resting==="lie"?1.25:1),this.place()}restSpot(t){var n;const e=this.at;for(let i=.4;i<=2.4;i+=.4)for(let r=0;r<12;r++){const o=r/12*Math.PI*2,a=e.x+Math.cos(o)*i,c=e.z+Math.sin(o)*i;if(!(!this.freeAt(a,c)||!this.seen(a,c))&&(n=this.rig.roomAt(a/de,c/de,t))!=null&&n.lie)return{x:a,z:c}}return null}somethingToLookAt(t){const e=Math.random();if(e<.45)return t.clone();const n=this.at;let i=null,r=e<.75?2.5:6;for(const o of this.gallery.placed){const a=Math.hypot(o.centre[0]-n.x,o.centre[2]-n.z);a<r&&this.seen(o.centre[0],o.centre[2])&&(r=a,i=Hs(o.centre[0],o.centre[1],o.centre[2]))}return i??t.clone()}place(){const t=this.main;if(Hs(t.position.x,t.position.y,t.position.z,this.cam.position),this.cam.quaternion.copy(t.quaternion),(this.cam.fov!==t.fov||this.cam.aspect!==t.aspect||this.cam.near!==t.near/de)&&(this.cam.fov=t.fov,this.cam.aspect=t.aspect,this.cam.near=t.near/de,this.cam.far=t.far/de,this.cam.updateProjectionMatrix()),this.cam.updateMatrixWorld(),this.bubble){const e=Zh(this.rig.headTop(this.v1),this.v2).project(t),n=innerWidth,i=innerHeight;let r=(e.x*.5+.5)*n,o=(-e.y*.5+.5)*i;const a=e.z>1;a&&(r=n/2,o=i-120),r=Math.max(170,Math.min(n-170,r)),o=Math.max(90,Math.min(i-30,o)),this.el.style.left=`${r}px`,this.el.style.top=`${o}px`,this.el.classList.toggle("free",a||!this.visible(30))}}renderMirror(t,e){const n=this.mcam;Hs(e.position.x,e.position.y,e.position.z,n.position),n.quaternion.copy(e.quaternion),n.updateMatrixWorld(),n.projectionMatrix.copy(e.projectionMatrix).multiply(this.scaleM),n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),t.autoClear=!1,t.render(this.scene,n),t.autoClear=!0}render(t){t.autoClear=!1,t.render(this.scene,this.cam),t.autoClear=!0}hide(t){this.hidden=t,this.el.style.visibility=t?"hidden":""}get obstacle(){const t=this.at;return{x:t.x,z:t.z,r:.22}}}const Ma=s=>s==="W"||s==="LEFT"||s==="RIGHT",kM={W:"W",LEFT:"←",RIGHT:"→"},BM={W:"Step forward",LEFT:"Turn left",RIGHT:"Turn right"},HM="Do you have a question about that piece? If so, I can take your info and someone at the gallery can get back to you.",GM="I've opened the gallery's contact page in a new tab. Mention {work} so they know which piece.",VM="Enjoy the painting!",Jh="https://www.robynmiller.net/contact",ya=150,Sa=176;let _l=null;addEventListener("message",s=>{var t;(t=s.data)!=null&&t.rmiContactHost&&/^https:\/\/(www\.)?robynmiller\.net$/.test(s.origin)&&(_l=s.origin)});parent!==window&&parent.postMessage({rmiHello:!0},"*");class WM{constructor(t){I(this,"btn");I(this,"box");I(this,"textEl");I(this,"choices");I(this,"canvas");I(this,"renderer",null);I(this,"scene",new So);I(this,"cam",new Ye(28,ya/Sa,.5,100));I(this,"rig",null);I(this,"raf",0);I(this,"last",0);I(this,"line",null);I(this,"away",0);I(this,"work",null);I(this,"sent",{});this.viewer=t;const e=o=>o.stopPropagation();this.btn=document.createElement("button"),this.btn.className="ask-btn",this.btn.textContent="?",this.btn.title="A question about this piece?",this.btn.addEventListener("mousedown",e),this.btn.addEventListener("click",o=>{o.stopPropagation(),this.open()}),this.box=document.createElement("div"),this.box.className="ask-box",this.box.addEventListener("mousedown",e),this.box.addEventListener("click",e);const n=document.createElement("div");n.className="ask-bubble",this.textEl=document.createElement("p"),this.choices=document.createElement("div"),this.choices.className="ask-choices";const i=document.createElement("button"),r=document.createElement("button");i.textContent="Yes please.",r.textContent="No, thank you.",i.className="yes",i.addEventListener("click",()=>this.yes()),r.addEventListener("click",()=>this.no()),this.choices.append(i,r),n.append(this.textEl,this.choices),this.canvas=document.createElement("canvas"),this.canvas.className="ask-host",this.canvas.style.width=`${ya}px`,this.canvas.style.height=`${Sa}px`,this.box.append(n,this.canvas),t.el.append(this.btn,this.box),t.ask=this}reset(t){this.work=t,this.close()}close(){if(clearTimeout(this.away),this.box.classList.contains("on")){const t=this.box.querySelector(".ask-bubble"),e=t.getBoundingClientRect(),n=t.cloneNode(!0);n.classList.add("ask-ghost"),Object.assign(n.style,{left:`${e.left}px`,top:`${e.top}px`,width:`${e.width}px`}),document.body.append(n),setTimeout(()=>n.remove(),1300)}this.box.classList.remove("on"),this.line=null,cancelAnimationFrame(this.raf),this.raf=0}open(){this.box.classList.contains("on")||(this.setup(),this.box.classList.add("on"),this.rig.place(0,0,0),this.rig.perform("wave"),this.rig.feel("happy",2.5),this.say(HM,()=>this.choices.classList.add("on")),this.last=performance.now(),this.raf||(this.raf=requestAnimationFrame(t=>this.frame(t))))}yes(){var n;this.choices.classList.remove("on");const t=this.work,e=t?`No. ${+t.id+1}, “${sr(t)}”`:"";if(_l){this.sent.host={rmiContact:{about:e}},parent.postMessage({rmiContact:{about:e}},_l),this.close();return}this.sent.tab=Jh,window.open(Jh,"_blank","noopener"),(n=this.rig)==null||n.feel("pleased",2),this.say(GM.replace("{work}",t?t.title?`“${t.title}” (No. ${+t.id+1})`:`No. ${+t.id+1}`:"the painting"),()=>{this.away=window.setTimeout(()=>this.close(),6e3)})}no(){var t;this.choices.classList.remove("on"),(t=this.rig)==null||t.perform("wave"),this.say(VM,()=>{this.away=window.setTimeout(()=>this.close(),1600)})}say(t,e){this.line={text:t,shown:0,then:e},this.textEl.textContent=t,this.choices.classList.remove("on");const n=this.box.querySelector(".ask-bubble");n.classList.remove("pop"),n.offsetWidth,n.classList.add("pop")}setup(){if(this.renderer)return;this.renderer=new Ou({canvas:this.canvas,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Math.min(2,devicePixelRatio)),this.renderer.setSize(ya,Sa,!1);const t={groundAt:()=>-.5,solidAt:(n,i)=>i+.5<0};this.rig=new ff(pf,3,t),this.scene.add(this.rig.root,this.rig.fx.group),this.scene.add(new Au(16777215,13815492,1.9));const e=new Cu(16777215,1.5);e.position.set(.4,1,.7),this.scene.add(e),this.cam.position.set(0,2,8.4),this.cam.lookAt(0,1.5,0)}frame(t){const e=Math.min(.05,(t-this.last)/1e3);this.last=t;const n=this.line;if(n&&(n.shown=Math.min(n.text.length,n.shown+e*34),n.shown>=n.text.length)){const r=n.then;this.line=null,r==null||r()}const i=this.rig;i.talk(n&&n.shown<n.text.length?n.text[Math.max(0,Math.ceil(n.shown)-1)]:null),i.lookAt(this.cam.position.clone()),i.update(e*df),this.renderer.render(this.scene,this.cam),this.box.classList.contains("on")?this.raf=requestAnimationFrame(r=>this.frame(r)):this.raf=0}}const XM=.62,wa=5,qM=.18;class YM{constructor(t=!0,e=!1){I(this,"pic",null);I(this,"lit",null);I(this,"dark",0);I(this,"veil");I(this,"vScene",new So);I(this,"vCam",new bo(-1,1,1,-1,0,1));I(this,"hintEl");I(this,"hinted",null);I(this,"hintDone",!1);I(this,"v",new F);I(this,"f",new F);this.veil=new Te(new Bn(2,2),new zn({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.vScene.add(this.veil),this.hintEl=document.createElement("div"),this.hintEl.id="focus-hint",this.hintEl.textContent=e?"TAP FOR FULL SCREEN":"CLICK FOR FULL SCREEN",t||(this.hintEl.style.display="none"),document.body.append(this.hintEl)}reach(t){return Math.min(6,Math.max(2.6,1.8+2.4*Math.max(t.w,t.h)))}update(t,e,n,i,r){let o=null,a=1/0,c=1/0;if(r){const u=e.getWorldPosition(this.v),f=e.getWorldDirection(this.f);for(const d of n){const p=d.mesh.position,x=d.placed.normal,g=p.x-u.x,m=p.y-u.y,S=p.z-u.z,E=Math.hypot(g,m,S);if(E>this.reach(d)||x[0]*-g+x[2]*-S<=0)continue;const v=Math.acos(Math.min(1,(g*f.x+m*f.y+S*f.z)/E)),y=Math.atan2(Math.max(d.w,d.h)*.5,E)+.17;if(v>y||Ni(i,u.x,u.z,p.x+x[0]*.05,p.z+x[2]*.05))continue;const b=v/y;b<a&&(a=b,o=d),d===this.pic&&(c=b)}this.pic&&c<a+.15&&(o=this.pic)}this.pic=o,o&&(this.lit=o);let l=0;if(o){const u=o.mesh.position.distanceTo(e.getWorldPosition(this.v)),f=this.reach(o),d=f*.4,p=Math.min(1,Math.max(0,(f-u)/(f-d)));l=XM*p*p*(3-2*p)}this.dark+=(l-this.dark)*(1-Math.exp(-t/qM)),this.dark<.003&&!o&&(this.lit=null),!this.hintDone&&o&&this.dark>.12&&!this.hinted&&(this.hinted=o);const h=!!this.hinted&&o===this.hinted&&this.dark>.08;this.hinted&&!h&&this.hintEl.classList.contains("on")&&(this.hintDone=!0,this.hinted=null),this.hintEl.classList.toggle("on",h)}opened(){this.hintDone=!0,this.hinted=null,this.hintEl.classList.remove("on")}clear(){this.pic=null,this.lit=null,this.dark=0,this.hintEl.classList.remove("on")}render(t,e,n){const i=this.lit;if(!i||this.dark<.003)return;this.veil.material.opacity=this.dark,t.autoClear=!1,t.render(this.vScene,this.vCam);const r=[i.mesh,i.label,i.dot].filter(c=>!!c);for(const c of r)c.layers.enable(wa);const o=n.layers.mask,a=e.background;n.layers.set(wa),e.background=null,t.render(e,n),e.background=a,n.layers.mask=o;for(const c of r)c.layers.disable(wa);t.autoClear=!0}}var Qh;class $M{constructor(t){I(this,"count",null);I(this,"onCount",()=>{});I(this,"id",(((Qh=crypto.randomUUID)==null?void 0:Qh.call(crypto))??String(Math.random()).slice(2)).slice(0,36));I(this,"inside",!1);I(this,"timer",0);I(this,"room","");this.url=t,t&&addEventListener("pagehide",()=>{this.inside&&this.beacon()})}enter(){!this.url||this.inside||(this.inside=!0,this.ping(),this.timer=window.setInterval(()=>this.ping(),2e4))}exit(){!this.url||!this.inside||(this.inside=!1,clearInterval(this.timer),this.beacon())}async ping(){try{const t=await fetch(`${this.url}/ping${this.room}`,{method:"POST",headers:{"content-type":"text/plain"},body:this.id});if(!t.ok||!this.inside)return;const e=await t.json();typeof e.count=="number"&&e.count!==this.count&&(this.count=e.count,this.onCount(e.count))}catch{}}beacon(){var e;const t=`${this.url}/leave${this.room}`;(e=navigator.sendBeacon)!=null&&e.call(navigator,t,this.id)||fetch(t,{method:"POST",body:this.id,keepalive:!0}).catch(()=>{})}}const $n=new URLSearchParams(location.search),ba=matchMedia("(hover: none) and (pointer: coarse)").matches&&!$n.has("desk")||$n.has("touch");KM().catch(s=>{console.error(s),document.getElementById("cover").classList.add("gone"),document.getElementById("mobile").classList.add("on")});async function KM(){const s='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',[t]=await Promise.all([M_(),Promise.race([Promise.all(['300 40px "Inter Tight"','400 40px "Inter Tight"','italic 500 40px "Inter Tight"'].map(K=>document.fonts.load(K))),new Promise(K=>setTimeout(K,2500))])]),e=new Ou({antialias:!0,powerPreference:"high-performance"});let i=Math.min(devicePixelRatio||1,ba?1.5:2);e.setPixelRatio(i),e.setSize(innerWidth,innerHeight),e.toneMapping=yl,e.toneMappingExposure=1;const r=e.domElement;document.getElementById("stage").appendChild(r);const o=e.capabilities.getMaxAnisotropy(),a=new So,c=new Ye(62,innerWidth/innerHeight,.05,900);c.layers.enable(1);const l=new Ev(1,1),h=()=>{e.setPixelRatio(i),e.setSize(innerWidth,innerHeight),c.aspect=innerWidth/innerHeight,c.fov=c.aspect<1?en.radToDeg(2*Math.atan(Math.tan(en.degToRad(31))*Math.min(1.45,.82/c.aspect))):62,c.updateProjectionMatrix();const K=e.getDrawingBufferSize(new Bt);l.setSize(Math.round(K.x/2),Math.round(K.y/2))};h(),addEventListener("resize",h);const u=new fs(t,a,e,l,s,o);await u.loadSmall();const f=new Iv(r),d=t.layout,p=d.entrance;f.pos.set(p.x+2.4,Jr,d.outline.z1+d.outline.t+9.8),f.yaw=Math.atan2(2.4,9.8),f.pitch=.05;const x=$n.get("at");if(x){const[K,at,dt,gt]=x.split(",").map(Number);f.pos.set(K,Jr,at),f.yaw=en.degToRad(dt||0),f.pitch=en.degToRad(gt||0)}const g=$n.get("hud")!=="0",m=document.getElementById("dot");m.style.display="none";const S=new YM(g,ba),E=new lo;E.far=14,E.layers.enableAll();let v=[];const y=()=>{v=[],u.interior.group.traverse(K=>{K.isMesh&&!K.isInstancedMesh&&v.push(K)}),u.outside.group.traverse(K=>{K.isMesh&&K.userData.outside&&v.push(K)})},b=()=>{E.setFromCamera(new Bt(0,0),c);const K=E.intersectObjects(v,!1)[0];if(!K)return{kind:"none"};const at=K.object.userData;return at.label?{kind:"label",work:at.work,point:K.point,dist:K.distance}:at.work?{kind:"work",work:at.work,point:K.point,dist:K.distance}:at.face?{kind:"face",face:at.face,point:K.point,dist:K.distance}:{kind:"none",point:K.point,dist:K.distance}},C=new ul,_=new Set;let M=1;const T=K=>{let at=99;for(const dt of u.interior.pictures)dt.work.id===K&&(at=Math.min(at,Math.hypot(dt.mesh.position.x-f.pos.x,dt.mesh.position.z-f.pos.z)));return at};function L(){M=0;for(const[K,at]of u.sharp)if(!(T(K)<=14)){u.sharp.delete(K);for(const dt of u.interior.pictures)dt.work.id===K&&(dt.mat.uniforms.uMap.value=u.texture(K));at.dispose()}for(const K of u.interior.pictures){const at=K.work.id;u.sharp.has(at)||T(at)>7.5||(M++,!(_.has(at)||_.size>=4)&&(_.add(at),C.loadAsync(fs.url(at,"m")).then(dt=>{_.delete(at),u.sharp.set(at,u.prepTex(dt));for(const gt of u.interior.pictures)gt.work.id===at&&(gt.mat.uniforms.uMap.value=dt)}).catch(()=>_.delete(at))))}}const D=new Dv,B=new WM(D);let H=!0,G=-1e9,J=!1;const W=K=>{const at=u.cat.get(K);at&&(H=f.locked,f.locked&&(J=!0,document.exitPointerLock()),f.frozen=!0,D.show(at,t.images[K],fs.url(K,u.sharp.has(K)?"m":"s"),fs.url(K,"l")),S.opened())};D.onClose=()=>{f.frozen=!1,Z.looked()};let tt=0;const k={gallery:u,player:f,camera:c,renderer:e,canvas:r,viewer:D,scene:a,aim:b,openWork:W,dot:m};u.onRebuilt=()=>{f.solids=u.arch.solids;const K=t.layout.outline;f.world={x0:K.x0-30,x1:K.x1+30,z0:K.z0-30,z1:K.z1+30},f.collide(),y(),tt=0},u.rebuild();const Z=new OM(u,f,c,ba),et=new $M($n.get("count")?void 0:"https://gallery-presence.robynmiller.workers.dev");et.onCount=K=>Z.setCount(K),$n.get("count")&&(Z.count=+$n.get("count")),Z.onEnter=()=>et.enter(),Z.onKey=K=>{f.tap(K==="W"?"KeyW":K==="LEFT"?"ArrowLeft":"ArrowRight",K==="W"?.3:.4),f.locked||r.requestPointerLock()},Z.onLeave=()=>et.exit();const ft=new lo;ft.far=12;let N=null;const X=K=>{if(K.button!==0&&K.button!==2||performance.now()-G<900)return;if(D.open){D.hide();return}if(!f.locked){if(S.pic){W(S.pic.work.id);return}r.requestPointerLock();return}if(ft.setFromCamera(new Bt(0,0),c),Z.hit(ft)){Z.poke();return}if(S.pic){W(S.pic.work.id);return}const at=b();(at.kind==="work"||at.kind==="label")&&W(at.work)};r.addEventListener("mousedown",X),addEventListener("pointerdown",K=>{K.pointerType==="touch"&&(G=performance.now())},!0);const O=K=>{E.setFromCamera(K,c);const at=E.intersectObjects(v,!1)[0];if(!at)return{kind:"none"};const dt=at.object.userData,gt={point:at.point,dist:at.distance};return dt.work?{kind:"work",work:dt.work,...gt}:dt.face?{kind:"wall",...gt}:at.point.y<.02?{kind:"floor",...gt}:{kind:"other",...gt}};new zv(r,c,f,O,K=>{if(K.kind==="work"&&K.work){const at=u.interior.pictures.find(Vt=>Vt.work.id===K.work);if(!at||S.pic===at||(K.dist??99)<3.2){W(K.work);return}const dt=at.mesh.position,gt=at.placed.normal,Ct=en.clamp(.9+1.4*Math.max(at.w,at.h),1.3,3.2);f.goal={x:dt.x+gt[0]*Ct,z:dt.z+gt[2]*Ct,yaw:Math.atan2(gt[0],gt[2]),pitch:Math.atan2(dt.y-Jr,Ct)}}else if(K.kind==="floor"&&K.point){const at=K.point.x-f.pos.x,dt=K.point.z-f.pos.z,gt=Math.hypot(at,dt),Ct=Math.max(0,gt-.5)/Math.max(gt,1e-6);f.goal={x:f.pos.x+at*Ct,z:f.pos.z+dt*Ct}}},()=>!D.open&&!document.body.classList.contains("ed-page")),addEventListener("mouseup",K=>N==null?void 0:N.release(K)),D.relock=()=>H&&!document.body.classList.contains("ed-page"),D.el.addEventListener("mousedown",K=>{var at;if(!(D.busy||K.target.closest(".view-tools"))){if(performance.now()-G<900){if(K.target.closest(".frame"))return;const dt=(at=D.work)==null?void 0:at.id,gt=u.interior.pictures.find(Ct=>Ct.work.id===dt);D.hide(),gt&&f.glide.set(gt.placed.normal[0],gt.placed.normal[2]).multiplyScalar(2.4);return}K.preventDefault(),D.hide(),!D.open&&!f.locked&&D.relock()&&r.requestPointerLock()}}),document.addEventListener("contextmenu",K=>{K.target.closest("input, textarea, select")||K.preventDefault()}),addEventListener("keydown",K=>{var dt,gt;if((gt=(dt=K.target).closest)!=null&&gt.call(dt,"input, textarea, select, button"))return;const at=K.code==="Enter"||K.code==="Space";if(D.open){(at||K.code==="Escape")&&!D.busy&&(K.preventDefault(),D.hide(),at&&H&&!document.body.classList.contains("ed-page")&&r.requestPointerLock());return}at&&S.pic&&!document.body.classList.contains("ed-page")&&(K.preventDefault(),W(S.pic.work.id))}),document.addEventListener("pointerlockchange",()=>{if(J){J=!1;return}!f.locked&&D.open&&D.hide()});const z=$n.get("open");z!==null&&W(z.padStart(2,"0"));let R=performance.now(),P=0,V=0;const j=$n.get("near")==="1";function st(){const K=performance.now(),at=Math.min((K-R)/1e3,.05);R=K,f.update(at),f.apply(c),c.updateMatrixWorld();const dt=document.body.classList.contains("ed-page");Z.hide(dt||D.open),Z.update(at),f.obstacles=[Z.obstacle],(tt-=at)<=0&&(tt=.3,L()),dt||D.open?S.clear():S.update(at,c,u.interior.pictures,u.arch.solids,!0),l.render(e,a,c,dt?void 0:(gt,Ct)=>Z.renderMirror(gt,Ct)),e.render(a,c),dt||Z.render(e),dt||S.render(e,a,c),P++,at>.024?V+=at:V=Math.max(0,V-at*.5),V>1.5&&i>1&&(i=Math.max(1,i-.25),V=0,h()),!window.__gReady&&P>3&&(!j||M===0)&&(window.__gReady=!0,document.getElementById("cover").classList.add("gone")),requestAnimationFrame(st)}requestAnimationFrame(st),window.__g={...k,data:t,editor:N,host:Z,presence:et,focus:S,ask:B}}
