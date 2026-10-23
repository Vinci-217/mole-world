(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gr="180",Wi={ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ph=0,Rl=1,mh=2,Xo=1,gh=2,kn=3,Yn=0,qt=1,Zt=2,Wn=0,Xi=1,Ki=2,Cl=3,Dl=4,vh=5,vi=100,xh=101,_h=102,yh=103,Sh=104,Mh=200,Th=201,Eh=202,bh=203,Ga=204,Wa=205,wh=206,Ah=207,Rh=208,Ch=209,Dh=210,Ph=211,Lh=212,Ih=213,Nh=214,Xa=0,Ya=1,qa=2,ji=3,Ka=4,ja=5,Za=6,Qa=7,su=0,Uh=1,Fh=2,si=0,ru=1,au=2,ou=3,lu=4,cu=5,uu=6,Yo=7,Pl="attached",Oh="detached",hu=300,Zi=301,Qi=302,Ja=303,$a=304,Wr=306,Dn=1e3,wn=1001,Ur=1002,_t=1003,fu=1004,Ts=1005,pt=1006,Rr=1007,An=1008,Pn=1009,du=1010,pu=1011,Us=1012,qo=1013,Cn=1014,Yt=1015,Lt=1016,Ko=1017,jo=1018,Ji=1020,mu=35902,gu=35899,vu=1021,xu=1022,Rt=1023,yi=1026,$i=1027,Xr=1028,Zo=1029,_u=1030,Qo=1031,Jo=1033,Cr=33776,Dr=33777,Pr=33778,Lr=33779,eo=35840,to=35841,no=35842,io=35843,so=36196,ro=37492,ao=37496,oo=37808,lo=37809,co=37810,uo=37811,ho=37812,fo=37813,po=37814,mo=37815,go=37816,vo=37817,xo=37818,_o=37819,yo=37820,So=37821,Mo=36492,To=36494,Eo=36495,bo=36283,wo=36284,Ao=36285,Ro=36286,Fs=2300,Os=2301,ea=2302,Ll=2400,Il=2401,Nl=2402,Bh=2500,zh=0,yu=1,Co=2,kh=3200,Hh=3201,Su=0,Vh=1,Hn="",Ct="srgb",kt="srgb-linear",Fr="linear",ut="srgb",bi=7680,Ul=519,Gh=512,Wh=513,Xh=514,Mu=515,Yh=516,qh=517,Kh=518,jh=519,Do=35044,Po="300 es",Rn=2e3,Or=2001;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fl=1234567;const Rs=Math.PI/180,es=180/Math.PI;function xn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[s&255]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function We(s,e,t){return Math.max(e,Math.min(t,s))}function $o(s,e){return(s%e+e)%e}function Zh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Qh(s,e,t){return s!==e?(t-s)/(e-s):0}function Cs(s,e,t){return(1-t)*s+t*e}function Jh(s,e,t,n){return Cs(s,e,1-Math.exp(-t*n))}function $h(s,e=1){return e-Math.abs($o(s,e*2)-e)}function ef(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function tf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function nf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function sf(s,e){return s+Math.random()*(e-s)}function rf(s){return s*(.5-Math.random())}function af(s){s!==void 0&&(Fl=s);let e=Fl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function of(s){return s*Rs}function lf(s){return s*es}function cf(s){return(s&s-1)===0&&s!==0}function uf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function hf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ff(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function dn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Si={DEG2RAD:Rs,RAD2DEG:es,generateUUID:xn,clamp:We,euclideanModulo:$o,mapLinear:Zh,inverseLerp:Qh,lerp:Cs,damp:Jh,pingpong:$h,smoothstep:ef,smootherstep:tf,randInt:nf,randFloat:sf,randFloatSpread:rf,seededRandom:af,degToRad:of,radToDeg:lf,isPowerOfTwo:cf,ceilPowerOfTwo:uf,floorPowerOfTwo:hf,setQuaternionFromProperEuler:ff,normalize:ht,denormalize:dn};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ln{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*v,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),b=Math.atan2(C,p*E);m=Math.sin(m*b)/C,o=Math.sin(o*b)/C}const x=o*E;if(l=l*m+f*x,c=c*m+d*x,u=u*m+g*x,h=h*m+v*x,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ol.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new w,Ol=new Ln;class Xe{constructor(e,t,n,i,r,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],v=i[0],m=i[3],p=i[6],E=i[1],M=i[4],x=i[7],C=i[2],b=i[5],D=i[8];return r[0]=a*v+o*E+l*C,r[3]=a*m+o*M+l*b,r[6]=a*p+o*x+l*D,r[1]=c*v+u*E+h*C,r[4]=c*m+u*M+h*b,r[7]=c*p+u*x+h*D,r[2]=f*v+d*E+g*C,r[5]=f*m+d*M+g*b,r[8]=f*p+d*x+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=f*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Xe;function Tu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function df(){const s=Bs("canvas");return s.style.display="block",s}const Bl={};function zs(s){s in Bl||(Bl[s]=!0,console.warn(s))}function pf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const zl=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mf(){const s={enabled:!0,workingColorSpace:kt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?Fr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[kt]:{primaries:e,whitePoint:n,transfer:Fr,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),s}const $e=mf();function Xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let wi;class gf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wi===void 0&&(wi=Bs("canvas")),wi.width=e.width,wi.height=e.height;const i=wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vf=0;class el{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ia(i[a].image)):r.push(ia(i[a]))}else r=ia(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ia(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xf=0;const sa=new w;class bt extends Mi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=wn,i=wn,r=pt,a=An,o=Rt,l=Pn,c=bt.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=xn(),this.name="",this.source=new el(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dn:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dn:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=hu;bt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(d+1)/2,C=(p+1)/2,b=(u+f)/4,D=(h+v)/4,R=(g+m)/4;return M>x&&M>C?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=b/n,r=D/n):x>C?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=R/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=D/r,i=R/r),this.set(n,i,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-v)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _f extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new bt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new el(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dt extends _f{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Eu extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yf extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ln{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),Qs.subVectors(this.max,ds),Ai.subVectors(e.a,ds),Ri.subVectors(e.b,ds),Ci.subVectors(e.c,ds),Kn.subVectors(Ri,Ai),jn.subVectors(Ci,Ri),oi.subVectors(Ai,Ci);let t=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-oi.z,oi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,oi.z,0,-oi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-oi.y,oi.x,0];return!ra(t,Ai,Ri,Ci,Qs)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,Ai,Ri,Ci,Qs))?!1:(Js.crossVectors(Kn,jn),t=[Js.x,Js.y,Js.z],ra(t,Ai,Ri,Ci,Qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new w,new w,new w,new w,new w,new w,new w,new w],un=new w,Zs=new ln,Ai=new w,Ri=new w,Ci=new w,Kn=new w,jn=new w,oi=new w,ds=new w,Qs=new w,Js=new w,li=new w;function ra(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){li.fromArray(s,r);const o=i.x*Math.abs(li.x)+i.y*Math.abs(li.y)+i.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),u=n.dot(li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Sf=new ln,ps=new w,aa=new w;class Sn{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(aa)),this.expandByPoint(ps.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Un=new w,oa=new w,$s=new w,Zn=new w,la=new w,er=new w,ca=new w;class Gs{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oa.copy(e).add(t).multiplyScalar(.5),$s.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(oa);const r=e.distanceTo(t)*.5,a=-this.direction.dot($s),o=Zn.dot(this.direction),l=-Zn.dot($s),c=Zn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(oa).addScaledVector($s,f),d}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,i,r){la.subVectors(t,e),er.subVectors(n,e),ca.crossVectors(la,er);let a=this.direction.dot(ca),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);const l=o*this.direction.dot(er.crossVectors(Zn,er));if(l<0)return null;const c=o*this.direction.dot(la.cross(Zn));if(c<0||l+c>a)return null;const u=-o*Zn.dot(ca);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(e,t,n,i,r,a,o,l,c,u,h,f,d,g,v,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,f,d,g,v,m)}set(e,t,n,i,r,a,o,l,c,u,h,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Di.setFromMatrixColumn(e,0).length(),r=1/Di.setFromMatrixColumn(e,1).length(),a=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mf,e,Tf)}lookAt(e,t,n){const i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Qn.crossVectors(n,$t),Qn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Qn.crossVectors(n,$t)),Qn.normalize(),tr.crossVectors($t,Qn),i[0]=Qn.x,i[4]=tr.x,i[8]=$t.x,i[1]=Qn.y,i[5]=tr.y,i[9]=$t.y,i[2]=Qn.z,i[6]=tr.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],E=n[3],M=n[7],x=n[11],C=n[15],b=i[0],D=i[4],R=i[8],S=i[12],y=i[1],I=i[5],O=i[9],V=i[13],W=i[2],K=i[6],X=i[10],ce=i[14],Z=i[3],de=i[7],ge=i[11],Te=i[15];return r[0]=a*b+o*y+l*W+c*Z,r[4]=a*D+o*I+l*K+c*de,r[8]=a*R+o*O+l*X+c*ge,r[12]=a*S+o*V+l*ce+c*Te,r[1]=u*b+h*y+f*W+d*Z,r[5]=u*D+h*I+f*K+d*de,r[9]=u*R+h*O+f*X+d*ge,r[13]=u*S+h*V+f*ce+d*Te,r[2]=g*b+v*y+m*W+p*Z,r[6]=g*D+v*I+m*K+p*de,r[10]=g*R+v*O+m*X+p*ge,r[14]=g*S+v*V+m*ce+p*Te,r[3]=E*b+M*y+x*W+C*Z,r[7]=E*D+M*I+x*K+C*de,r[11]=E*R+M*O+x*X+C*ge,r[15]=E*S+M*V+x*ce+C*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*d-n*l*d)+v*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*u-r*l*u)+m*(+t*c*h-t*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],E=h*m*c-v*f*c+v*l*d-o*m*d-h*l*p+o*f*p,M=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,x=u*v*c-g*h*c+g*o*d-a*v*d-u*o*p+a*h*p,C=g*h*l-u*v*l-g*o*f+a*v*f+u*o*m-a*h*m,b=t*E+n*M+i*x+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/b;return e[0]=E*D,e[1]=(v*f*r-h*m*r-v*i*d+n*m*d+h*i*p-n*f*p)*D,e[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*p+n*l*p)*D,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*D,e[4]=M*D,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*p+t*f*p)*D,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*D,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*d+t*l*d)*D,e[8]=x*D,e[9]=(g*h*r-u*v*r-g*n*d+t*v*d+u*n*p-t*h*p)*D,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*p+t*o*p)*D,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*d-t*o*d)*D,e[12]=C*D,e[13]=(u*v*i-g*h*i+g*n*f-t*v*f-u*n*m+t*h*m)*D,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*m-t*o*m)*D,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,g=r*h,v=a*u,m=a*h,p=o*h,E=l*c,M=l*u,x=l*h,C=n.x,b=n.y,D=n.z;return i[0]=(1-(v+p))*C,i[1]=(d+x)*C,i[2]=(g-M)*C,i[3]=0,i[4]=(d-x)*b,i[5]=(1-(f+p))*b,i[6]=(m+E)*b,i[7]=0,i[8]=(g+M)*D,i[9]=(m-E)*D,i[10]=(1-(f+v))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Di.set(i[0],i[1],i[2]).length();const a=Di.set(i[4],i[5],i[6]).length(),o=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);const c=1/r,u=1/a,h=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,t.setFromRotationMatrix(hn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Rn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Rn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Or)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Rn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Rn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Or)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Di=new w,hn=new we,Mf=new w(0,0,0),Tf=new w(1,1,1),Qn=new w,tr=new w,$t=new w,Hl=new we,Vl=new Ln;class yn{constructor(e=0,t=0,n=0,i=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ef=0;const Gl=new w,Pi=new Ln,Fn=new we,nr=new w,ms=new w,bf=new w,wf=new Ln,Wl=new w(1,0,0),Xl=new w(0,1,0),Yl=new w(0,0,1),ql={type:"added"},Af={type:"removed"},Li={type:"childadded",child:null},ua={type:"childremoved",child:null};class yt extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new w,t=new yn,n=new Ln,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new Xe}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Wl,e)}rotateY(e){return this.rotateOnAxis(Xl,e)}rotateZ(e){return this.rotateOnAxis(Yl,e)}translateOnAxis(e,t){return Gl.copy(e).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wl,e)}translateY(e){return this.translateOnAxis(Xl,e)}translateZ(e){return this.translateOnAxis(Yl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(ms,nr,this.up):Fn.lookAt(nr,ms,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Pi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ql),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Af),ua.child=e,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ql),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new w(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new w,On=new w,ha=new w,Bn=new w,Ii=new w,Ni=new w,Kl=new w,fa=new w,da=new w,pa=new w,ma=new lt,ga=new lt,va=new lt;class pn{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fn.subVectors(e,t),i.cross(fn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){fn.subVectors(i,t),On.subVectors(n,t),ha.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(On),l=fn.dot(ha),c=On.dot(On),u=On.dot(ha),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ma.setScalar(0),ga.setScalar(0),va.setScalar(0),ma.fromBufferAttribute(e,t),ga.fromBufferAttribute(e,n),va.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ma,r.x),a.addScaledVector(ga,r.y),a.addScaledVector(va,r.z),a}static isFrontFacing(e,t,n,i){return fn.subVectors(n,t),On.subVectors(e,t),fn.cross(On).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),fn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ii.subVectors(i,n),Ni.subVectors(r,n),fa.subVectors(e,n);const l=Ii.dot(fa),c=Ni.dot(fa);if(l<=0&&c<=0)return t.copy(n);da.subVectors(e,i);const u=Ii.dot(da),h=Ni.dot(da);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ii,a);pa.subVectors(e,r);const d=Ii.dot(pa),g=Ni.dot(pa);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ni,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Kl.subVectors(r,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Kl,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(n).addScaledVector(Ii,a).addScaledVector(Ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function xa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=$o(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xa(a,r,e+1/3),this.g=xa(a,r,e),this.b=xa(a,r,e-1/3)}return $e.colorSpaceToWorking(this,i),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=wu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return $e.workingToColorSpace(zt.copy(this),e),Math.round(We(zt.r*255,0,255))*65536+Math.round(We(zt.g*255,0,255))*256+Math.round(We(zt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,r=zt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ct){$e.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(ir);const n=Cs(Jn.h,ir.h,t),i=Cs(Jn.s,ir.s,t),r=Cs(Jn.l,ir.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Me;Me.NAMES=wu;let Rf=0;class _n extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=Xi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ii extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vn=Cf();function Cf(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Df(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=We(s,-65504,65504),Vn.floatView[0]=s;const e=Vn.uint32View[0],t=e>>23&511;return Vn.baseTable[t]+((e&8388607)>>Vn.shiftTable[t])}function Pf(s){const e=s>>10;return Vn.uint32View[0]=Vn.mantissaTable[Vn.offsetTable[e]+(s&1023)]+Vn.exponentTable[e],Vn.floatView[0]}class sr{static toHalfFloat(e){return Df(e)}static fromHalfFloat(e){return Pf(e)}}const At=new w,rr=new fe;let Lf=0;class wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Do,this.updateRanges=[],this.gpuType=Yt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rr.fromBufferAttribute(this,t),rr.applyMatrix3(e),this.setXY(t,rr.x,rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),e}}class Au extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ru extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let If=0;const rn=new we,_a=new yt,Ui=new w,en=new ln,gs=new ln,Ut=new w;class St extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tu(e)?Ru:Au)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(en.min,gs.min),en.expandByPoint(Ut),Ut.addVectors(en.max,gs.max),en.expandByPoint(Ut)):(en.expandByPoint(gs.min),en.expandByPoint(gs.max))}en.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ut.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(e,c),Ut.add(Ui)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new w,l[R]=new w;const c=new w,u=new w,h=new w,f=new fe,d=new fe,g=new fe,v=new w,m=new w;function p(R,S,y){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),o[R].add(v),o[S].add(v),o[y].add(v),l[R].add(m),l[S].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let R=0,S=E.length;R<S;++R){const y=E[R],I=y.start,O=y.count;for(let V=I,W=I+O;V<W;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new w,x=new w,C=new w,b=new w;function D(R){C.fromBufferAttribute(i,R),b.copy(C);const S=o[R];M.copy(S),M.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(b,S);const I=x.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,I)}for(let R=0,S=E.length;R<S;++R){const y=E[R],I=y.start,O=y.count;for(let V=I,W=I+O;V<W;V+=3)D(e.getX(V+0)),D(e.getX(V+1)),D(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new w,r=new w,a=new w,o=new w,l=new w,c=new w,u=new w,h=new w;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new wt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new we,ci=new Gs,ar=new Sn,Zl=new w,or=new w,lr=new w,cr=new w,ya=new w,ur=new w,Ql=new w,hr=new w;class at extends yt{constructor(e=new St,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(ya.fromBufferAttribute(h,e),a?ur.addScaledVector(ya,u):ur.addScaledVector(ya.sub(t),u))}t.add(ur)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(ar.containsPoint(ci.origin)===!1&&(ci.intersectSphere(ar,Zl)===null||ci.origin.distanceToSquared(Zl)>(e.far-e.near)**2))&&(jl.copy(r).invert(),ci.copy(e.ray).applyMatrix4(jl),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,C=M;x<C;x+=3){const b=o.getX(x),D=o.getX(x+1),R=o.getX(x+2);i=fr(this,p,e,n,c,u,h,b,D,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const E=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);i=fr(this,a,e,n,c,u,h,E,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,C=M;x<C;x+=3){const b=x,D=x+1,R=x+2;i=fr(this,p,e,n,c,u,h,b,D,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const E=m,M=m+1,x=m+2;i=fr(this,a,e,n,c,u,h,E,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Nf(s,e,t,n,i,r,a,o){let l;if(e.side===qt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Yn,o),l===null)return null;hr.copy(o),hr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(hr);return c<t.near||c>t.far?null:{distance:c,point:hr.clone(),object:s}}function fr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,or),s.getVertexPosition(l,lr),s.getVertexPosition(c,cr);const u=Nf(s,e,t,n,or,lr,cr,Ql);if(u){const h=new w;pn.getBarycoord(Ql,or,lr,cr,h),i&&(u.uv=pn.getInterpolatedAttribute(i,o,l,c,h,new fe)),r&&(u.uv1=pn.getInterpolatedAttribute(r,o,l,c,h,new fe)),a&&(u.normal=pn.getInterpolatedAttribute(a,o,l,c,h,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new w,materialIndex:0};pn.getNormal(or,lr,cr,f.normal),u.face=f,u.barycoord=h}return u}class on extends St{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function g(v,m,p,E,M,x,C,b,D,R,S){const y=x/D,I=C/R,O=x/2,V=C/2,W=b/2,K=D+1,X=R+1;let ce=0,Z=0;const de=new w;for(let ge=0;ge<X;ge++){const Te=ge*I-V;for(let Le=0;Le<K;Le++){const Ge=Le*y-O;de[v]=Ge*E,de[m]=Te*M,de[p]=W,c.push(de.x,de.y,de.z),de[v]=0,de[m]=0,de[p]=b>0?1:-1,u.push(de.x,de.y,de.z),h.push(Le/D),h.push(1-ge/R),ce+=1}}for(let ge=0;ge<R;ge++)for(let Te=0;Te<D;Te++){const Le=f+Te+K*ge,Ge=f+Te+K*(ge+1),Je=f+(Te+1)+K*(ge+1),je=f+(Te+1)+K*ge;l.push(Le,Ge,je),l.push(Ge,Je,je),Z+=6}o.addGroup(d,Z,S),d+=Z,f+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(s){const e={};for(let t=0;t<s.length;t++){const n=ts(s[t]);for(const i in n)e[i]=n[i]}return e}function Uf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Cu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const ks={clone:ts,merge:Gt};var Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vt extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=Of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=Uf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Du extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new w,Jl=new fe,$l=new fe;class Xt extends Du{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Jl,$l),t.subVectors($l,Jl)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,Oi=1;class Bf extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt(Fi,Oi,e,t);i.layers=this.layers,this.add(i);const r=new Xt(Fi,Oi,e,t);r.layers=this.layers,this.add(r);const a=new Xt(Fi,Oi,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Fi,Oi,e,t);o.layers=this.layers,this.add(o);const l=new Xt(Fi,Oi,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Fi,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pu extends bt{constructor(e=[],t=Zi,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zf extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Pu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new on(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Wn});r.uniforms.tEquirect.value=t;const a=new at(i,r),o=t.minFilter;return t.minFilter===An&&(t.minFilter=pt),new Bf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class gn extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kf={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class xi{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=t}clone(){return new xi(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hf extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Vf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Do,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new w;class tl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ec=new w,tc=new lt,nc=new lt,Gf=new w,ic=new we,dr=new w,Ma=new Sn,sc=new we,Ta=new Gs;class Wf extends at{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pl,this.bindMatrix=new we,this.bindMatrixInverse=new we,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,dr),this.boundingBox.expandByPoint(dr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,dr),this.boundingSphere.expandByPoint(dr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(i),e.ray.intersectsSphere(Ma)!==!1&&(sc.copy(i).invert(),Ta.copy(e.ray).applyMatrix4(sc),!(this.boundingBox!==null&&Ta.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ta)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Pl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Oh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;tc.fromBufferAttribute(i.attributes.skinIndex,e),nc.fromBufferAttribute(i.attributes.skinWeight,e),ec.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=nc.getComponent(r);if(a!==0){const o=tc.getComponent(r);ic.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Gf.copy(ec).applyMatrix4(ic),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Lu extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yr extends bt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=_t,u=_t,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rc=new we,Xf=new we;class nl{constructor(e=[],t=[]){this.uuid=xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new we;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Xf;rc.multiplyMatrices(o,t[r]),rc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new nl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Yr(t,e,e,Rt,Yt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Lu),this.bones.push(a),this.boneInverses.push(new we().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Lo extends wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bi=new we,ac=new we,pr=[],oc=new ln,Yf=new we,vs=new at,xs=new Sn;class ti extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bi),oc.copy(e.boundingBox).applyMatrix4(Bi),this.boundingBox.union(oc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bi),xs.copy(e.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(n),e.ray.intersectsSphere(xs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Bi),ac.multiplyMatrices(n,Bi),vs.matrixWorld=ac,vs.raycast(e,pr);for(let a=0,o=pr.length;a<o;a++){const l=pr[a];l.instanceId=r,l.object=this,t.push(l)}pr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yr(new Float32Array(i*this.count),i,this.count,Xr,Yt));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ea=new w,qf=new w,Kf=new Xe;class ni{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ea.subVectors(n,t).cross(qf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ea),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kf.getNormalMatrix(e),i=this.coplanarPoint(Ea).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Sn,jf=new fe(.5,.5),mr=new w;class il{constructor(e=new ni,t=new ni,n=new ni,i=new ni,r=new ni,a=new ni){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],E=r[12],M=r[13],x=r[14],C=r[15];if(i[0].setComponents(c-a,d-u,p-g,C-E).normalize(),i[1].setComponents(c+a,d+u,p+g,C+E).normalize(),i[2].setComponents(c+o,d+h,p+v,C+M).normalize(),i[3].setComponents(c-o,d-h,p-v,C-M).normalize(),n)i[4].setComponents(l,f,m,x).normalize(),i[5].setComponents(c-l,d-f,p-m,C-x).normalize();else if(i[4].setComponents(c-l,d-f,p-m,C-x).normalize(),t===Rn)i[5].setComponents(c+l,d+f,p+m,C+x).normalize();else if(t===Or)i[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);const t=jf.distanceTo(e.center);return ui.radius=.7071067811865476+t,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(mr.x=i.normal.x>0?e.max.x:e.min.x,mr.y=i.normal.y>0?e.max.y:e.min.y,mr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sl extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Br=new w,zr=new w,lc=new we,_s=new Gs,gr=new Sn,ba=new w,cc=new w;class rl extends yt{constructor(e=new St,t=new sl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Br.fromBufferAttribute(t,i-1),zr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Br.distanceTo(zr);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(i),gr.radius+=r,e.ray.intersectsSphere(gr)===!1)return;lc.copy(i).invert(),_s.copy(e.ray).applyMatrix4(lc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){const p=u.getX(v),E=u.getX(v+1),M=vr(this,e,_s,l,p,E,v);M&&t.push(M)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),p=vr(this,e,_s,l,v,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){const p=vr(this,e,_s,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=vr(this,e,_s,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function vr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Br.fromBufferAttribute(o,i),zr.fromBufferAttribute(o,r),t.distanceSqToSegment(Br,zr,ba,cc)>n)return;ba.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ba);if(!(c<e.near||c>e.far))return{distance:c,point:cc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const uc=new w,hc=new w;class Io extends rl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)uc.fromBufferAttribute(t,i),hc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+uc.distanceTo(hc);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zf extends rl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class al extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fc=new we,No=new Gs,xr=new Sn,_r=new w;class kr extends yt{constructor(e=new St,t=new al){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(i),xr.radius+=r,e.ray.intersectsSphere(xr)===!1)return;fc.copy(i).invert(),No.copy(e.ray).applyMatrix4(fc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);_r.fromBufferAttribute(h,m),dc(_r,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,v=d;g<v;g++)_r.fromBufferAttribute(h,g),dc(_r,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function dc(s,e,t,n,i,r,a){const o=No.distanceSqToPoint(s);if(o<t){const l=new w;No.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ds extends bt{constructor(e,t,n=Cn,i,r,a,o=_t,l=_t,c,u=yi,h=1){if(u!==yi&&u!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new el(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Iu extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hs extends St{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;E(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function E(){const x=new w,C=new w;let b=0;const D=(t-e)/n;for(let R=0;R<=r;R++){const S=[],y=R/r,I=y*(t-e)+e;for(let O=0;O<=i;O++){const V=O/i,W=V*l+o,K=Math.sin(W),X=Math.cos(W);C.x=I*K,C.y=-y*n+m,C.z=I*X,h.push(C.x,C.y,C.z),x.set(K,D,X).normalize(),f.push(x.x,x.y,x.z),d.push(V,1-y),S.push(g++)}v.push(S)}for(let R=0;R<i;R++)for(let S=0;S<r;S++){const y=v[S][R],I=v[S+1][R],O=v[S+1][R+1],V=v[S][R+1];(e>0||S!==0)&&(u.push(y,I,V),b+=3),(t>0||S!==r-1)&&(u.push(I,O,V),b+=3)}c.addGroup(p,b,0),p+=b}function M(x){const C=g,b=new fe,D=new w;let R=0;const S=x===!0?e:t,y=x===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const I=g;for(let O=0;O<=i;O++){const W=O/i*l+o,K=Math.cos(W),X=Math.sin(W);D.x=S*X,D.y=m*y,D.z=S*K,h.push(D.x,D.y,D.z),f.push(0,y,0),b.x=K*.5+.5,b.y=X*.5*y+.5,d.push(b.x,b.y),g++}for(let O=0;O<i;O++){const V=C+O,W=I+O;x===!0?u.push(W,W+1,V):u.push(W+1,W,V),R+=3}c.addGroup(p,R,x===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hr extends Hs{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Hr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ol extends St{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const M=new w,x=new w,C=new w;for(let b=0;b<t.length;b+=3)d(t[b+0],M),d(t[b+1],x),d(t[b+2],C),l(M,x,C,E)}function l(E,M,x,C){const b=C+1,D=[];for(let R=0;R<=b;R++){D[R]=[];const S=E.clone().lerp(x,R/b),y=M.clone().lerp(x,R/b),I=b-R;for(let O=0;O<=I;O++)O===0&&R===b?D[R][O]=S:D[R][O]=S.clone().lerp(y,O/I)}for(let R=0;R<b;R++)for(let S=0;S<2*(b-R)-1;S++){const y=Math.floor(S/2);S%2===0?(f(D[R][y+1]),f(D[R+1][y]),f(D[R][y])):(f(D[R][y+1]),f(D[R+1][y+1]),f(D[R+1][y]))}}function c(E){const M=new w;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(E),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function u(){const E=new w;for(let M=0;M<r.length;M+=3){E.x=r[M+0],E.y=r[M+1],E.z=r[M+2];const x=m(E)/2/Math.PI+.5,C=p(E)/Math.PI+.5;a.push(x,1-C)}g(),h()}function h(){for(let E=0;E<a.length;E+=6){const M=a[E+0],x=a[E+2],C=a[E+4],b=Math.max(M,x,C),D=Math.min(M,x,C);b>.9&&D<.1&&(M<.2&&(a[E+0]+=1),x<.2&&(a[E+2]+=1),C<.2&&(a[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function d(E,M){const x=E*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function g(){const E=new w,M=new w,x=new w,C=new w,b=new fe,D=new fe,R=new fe;for(let S=0,y=0;S<r.length;S+=9,y+=6){E.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),b.set(a[y+0],a[y+1]),D.set(a[y+2],a[y+3]),R.set(a[y+4],a[y+5]),C.copy(E).add(M).add(x).divideScalar(3);const I=m(C);v(b,y+0,E,I),v(D,y+2,M,I),v(R,y+4,x,I)}}function v(E,M,x,C){C<0&&E.x===1&&(a[M]=E.x-1),x.x===0&&x.z===0&&(a[M]=C/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.vertices,e.indices,e.radius,e.details)}}class ll extends ol{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ll(e.radius,e.detail)}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new fe:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new w,i=[],r=[],a=[],o=new w,l=new we;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(We(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(We(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nu extends qn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new fe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Qf extends Nu{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function cl(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const yr=new w,wa=new cl,Aa=new cl,Ra=new cl;class Ps extends qn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(yr.subVectors(i[0],i[1]).add(i[0]),c=yr);const h=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(yr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=yr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),wa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,v,m),Aa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,v,m),Ra.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(wa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Aa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ra.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(wa.calc(l),Aa.calc(l),Ra.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function pc(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function Jf(s,e){const t=1-s;return t*t*e}function $f(s,e){return 2*(1-s)*s*e}function ed(s,e){return s*s*e}function Ls(s,e,t,n){return Jf(s,e)+$f(s,t)+ed(s,n)}function td(s,e){const t=1-s;return t*t*t*e}function nd(s,e){const t=1-s;return 3*t*t*s*e}function id(s,e){return 3*(1-s)*s*s*e}function sd(s,e){return s*s*s*e}function Is(s,e,t,n,i){return td(s,e)+nd(s,t)+id(s,n)+sd(s,i)}class rd extends qn{constructor(e=new fe,t=new fe,n=new fe,i=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new fe){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Is(e,i.x,r.x,a.x,o.x),Is(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ad extends qn{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Is(e,i.x,r.x,a.x,o.x),Is(e,i.y,r.y,a.y,o.y),Is(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class od extends qn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ld extends qn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cd extends qn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ls(e,i.x,r.x,a.x),Ls(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uu extends qn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ls(e,i.x,r.x,a.x),Ls(e,i.y,r.y,a.y),Ls(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ud extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(pc(o,l.x,c.x,u.x,h.x),pc(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new fe().fromArray(i))}return this}}var hd=Object.freeze({__proto__:null,ArcCurve:Qf,CatmullRomCurve3:Ps,CubicBezierCurve:rd,CubicBezierCurve3:ad,EllipseCurve:Nu,LineCurve:od,LineCurve3:ld,QuadraticBezierCurve:cd,QuadraticBezierCurve3:Uu,SplineCurve:ud});class ns extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const E=p*f-a;for(let M=0;M<c;M++){const x=M*h-r;g.push(x,-E,0),v.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const M=E+c*p,x=E+c*(p+1),C=E+1+c*(p+1),b=E+1+c*p;d.push(M,x,b),d.push(x,C,b)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}class qr extends St{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new w,f=new w,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const E=[],M=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const b=C/t;h.x=-e*Math.cos(i+b*r)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(i+b*r)*Math.sin(a+M*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(b+x,1-M),E.push(c++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){const M=u[p][E+1],x=u[p][E],C=u[p+1][E],b=u[p+1][E+1];(p!==0||a>0)&&d.push(M,x,b),(p!==n-1||l<Math.PI)&&d.push(x,C,b)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ul extends St{constructor(e=new Uu(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new w,l=new w,c=new fe;let u=new w;const h=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function v(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),E(),p()}function m(M){u=e.getPointAt(M/t,u);const x=a.normals[M],C=a.binormals[M];for(let b=0;b<=i;b++){const D=b/i*Math.PI*2,R=Math.sin(D),S=-Math.cos(D);l.x=S*x.x+R*C.x,l.y=S*x.y+R*C.y,l.z=S*x.z+R*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=t;M++)for(let x=1;x<=i;x++){const C=(i+1)*(M-1)+(x-1),b=(i+1)*M+(x-1),D=(i+1)*M+x,R=(i+1)*(M-1)+x;g.push(C,b,R),g.push(b,D,R)}}function E(){for(let M=0;M<=t;M++)for(let x=0;x<=i;x++)c.x=M/t,c.y=x/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ul(new hd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class fd extends vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wt extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cn extends Wt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class dd extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pd extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Sr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function md(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function gd(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function mc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Fu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Ws{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vd extends Ws{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Il:r=e,o=2*t-n;break;case Nl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Il:a=e,l=2*n-t;break;case Nl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,E=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,M=(-1-d)*m+(1.5+d)*v+.5*g,x=d*m-d*v;for(let C=0;C!==o;++C)r[C]=p*a[u+C]+E*a[c+C]+M*a[l+C]+x*a[h+C];return r}}class xd extends Ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class _d extends Ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sr(t,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sr(e.times,Array),values:Sr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _d(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case ea:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return ea}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&md(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ea,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[f+g]||v!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Os;class ls extends Mn{constructor(e,t,n){super(e,t,n)}}ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Fs;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Ou extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}Ou.prototype.ValueTypeName="color";class is extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}is.prototype.ValueTypeName="number";class yd extends Ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ln.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ss extends Mn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new yd(this.times,this.values,this.getValueSize(),e)}}ss.prototype.ValueTypeName="quaternion";ss.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends Mn{constructor(e,t,n){super(e,t,n)}}cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Fs;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class rs extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}rs.prototype.ValueTypeName="vector";class Sd{constructor(e="",t=-1,n=[],i=Bh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=xn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Td(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=gd(l);l=mc(l,1,u),c=mc(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new is(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,v){if(d.length!==0){const m=[],p=[];Fu(d,m,p,g),m.length!==0&&v.push(new h(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)d[f[g].morphTargets[v]]=-1;for(const v in d){const m=[],p=[];for(let E=0;E!==f[g].morphTargets.length;++E){const M=f[g];m.push(M.time),p.push(M.morphTarget===v?1:0)}i.push(new is(".morphTargetInfluence["+v+"]",m,p))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(rs,d+".position",f,"pos",i),n(ss,d+".quaternion",f,"rot",i),n(rs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Md(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return is;case"vector":case"vector2":case"vector3":case"vector4":return rs;case"color":return Ou;case"quaternion":return ss;case"bool":case"boolean":return ls;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Td(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Md(s.type);if(s.times===void 0){const t=[],n=[];Fu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Gn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ed{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const bd=new Ed;class Ti{constructor(e){this.manager=e!==void 0?e:bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ti.DEFAULT_MATERIAL_NAME="__DEFAULT";const zn={};class wd extends Error{constructor(e,t){super(e),this.response=t}}class hl extends Ti{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Gn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:i});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){E();function E(){h.read().then(({done:M,value:x})=>{if(M)p.close();else{v+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let b=0,D=u.length;b<D;b++){const R=u[b];R.onProgress&&R.onProgress(C)}p.enqueue(x),E()}},M=>{p.error(M)})}}});return new Response(m)}else throw new wd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Gn.add(`file:${e}`,c);const u=zn[e];delete zn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const zi=new WeakMap;class Ad extends Ti{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Gn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=zi.get(a);h===void 0&&(h=[],zi.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=Bs("img");function l(){u(),t&&t(this);const h=zi.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}zi.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),Gn.remove(`image:${e}`);const f=zi.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}zi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Gn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Rd extends Ti{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Yr,o=new hl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:wn,a.wrapT=c.wrapT!==void 0?c.wrapT:wn,a.magFilter=c.magFilter!==void 0?c.magFilter:pt,a.minFilter=c.minFilter!==void 0?c.minFilter:pt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=An),c.mipmapCount===1&&(a.minFilter=pt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class fl extends Ti{constructor(e){super(e)}load(e,t,n,i){const r=new bt,a=new Ad(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Kr extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Cd extends Kr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ca=new we,gc=new w,vc=new w;class dl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(gc),vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vc),t.updateMatrixWorld(),Ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dd extends dl{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Pd extends Kr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Dd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xc=new we,ys=new w,Da=new w;class Ld extends dl{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(ys),Da.copy(n.position),Da.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Da),n.updateMatrixWorld(),i.makeTranslation(-ys.x,-ys.y,-ys.z),xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc,n.coordinateSystem,n.reversedDepth)}}class Bu extends Kr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ld}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xs extends Du{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Id extends dl{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uo extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Id}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ns{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Pa=new WeakMap;class Nd extends Ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Gn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(Pa.has(a)===!0)i&&i(Pa.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Gn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Pa.set(l,c),Gn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Gn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ud extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const pl="\\[\\]\\.:\\/",Fd=new RegExp("["+pl+"]","g"),ml="[^"+pl+"]",Od="[^"+pl.replace("\\.","")+"]",Bd=/((?:WC+[\/:])*)/.source.replace("WC",ml),zd=/(WCOD+)?/.source.replace("WCOD",Od),kd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ml),Hd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ml),Vd=new RegExp("^"+Bd+zd+kd+Hd+"$"),Gd=["material","materials","bones","map"];class Wd{constructor(e,t,n){const i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fd,"")}static parseTrackName(e){const t=Vd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Gd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=Wd;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _c{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xd extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function yc(s,e,t,n){const i=Yd(n);switch(t){case vu:return s*e;case Xr:return s*e/i.components*i.byteLength;case Zo:return s*e/i.components*i.byteLength;case _u:return s*e*2/i.components*i.byteLength;case Qo:return s*e*2/i.components*i.byteLength;case xu:return s*e*3/i.components*i.byteLength;case Rt:return s*e*4/i.components*i.byteLength;case Jo:return s*e*4/i.components*i.byteLength;case Cr:case Dr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Lr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case to:case io:return Math.max(s,16)*Math.max(e,8)/4;case eo:case no:return Math.max(s,8)*Math.max(e,8)/2;case so:case ro:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case co:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case uo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case po:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case go:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case vo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _o:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case So:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Mo:case To:case Eo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case bo:case wo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ao:case Ro:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yd(s){switch(s){case Pn:case du:return{byteLength:1,components:1};case Us:case pu:case Lt:return{byteLength:2,components:1};case Ko:case jo:return{byteLength:2,components:4};case Cn:case qo:case Yt:return{byteLength:4,components:1};case mu:case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ku(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qd(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Kd=`#ifdef USE_ALPHAHASH
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
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ep=`#ifdef USE_AOMAP
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
#endif`,tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,np=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,op=`#ifdef USE_IRIDESCENCE
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
#endif`,lp=`#ifdef USE_BUMPMAP
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vp=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_p=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,kp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Yp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,im=`#if defined( USE_POINTS_UV )
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
#endif`,sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
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
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Lm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
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
}`,eg=`#if DEPTH_PACKING == 3200
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
}`,tg=`#define DISTANCE
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
}`,ng=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`uniform float scale;
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#define LAMBERT
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
}`,ug=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,hg=`#define MATCAP
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
}`,fg=`#define MATCAP
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
}`,dg=`#define NORMAL
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
}`,pg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mg=`#define PHONG
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
}`,gg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,vg=`#define STANDARD
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
}`,xg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,_g=`#define TOON
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
}`,yg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Sg=`uniform float size;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Eg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,bg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Kd,alphahash_pars_fragment:jd,alphamap_fragment:Zd,alphamap_pars_fragment:Qd,alphatest_fragment:Jd,alphatest_pars_fragment:$d,aomap_fragment:ep,aomap_pars_fragment:tp,batching_pars_vertex:np,batching_vertex:ip,begin_vertex:sp,beginnormal_vertex:rp,bsdfs:ap,iridescence_fragment:op,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:hp,clipping_planes_vertex:fp,color_fragment:dp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:vp,cube_uv_reflection_fragment:xp,defaultnormal_vertex:_p,displacementmap_pars_vertex:yp,displacementmap_vertex:Sp,emissivemap_fragment:Mp,emissivemap_pars_fragment:Tp,colorspace_fragment:Ep,colorspace_pars_fragment:bp,envmap_fragment:wp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Rp,envmap_pars_vertex:Cp,envmap_physical_pars_fragment:kp,envmap_vertex:Dp,fog_vertex:Pp,fog_pars_vertex:Lp,fog_fragment:Ip,fog_pars_fragment:Np,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Fp,lights_lambert_fragment:Op,lights_lambert_pars_fragment:Bp,lights_pars_begin:zp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Gp,lights_phong_pars_fragment:Wp,lights_physical_fragment:Xp,lights_physical_pars_fragment:Yp,lights_fragment_begin:qp,lights_fragment_maps:Kp,lights_fragment_end:jp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:$p,map_fragment:em,map_pars_fragment:tm,map_particle_fragment:nm,map_particle_pars_fragment:im,metalnessmap_fragment:sm,metalnessmap_pars_fragment:rm,morphinstance_vertex:am,morphcolor_vertex:om,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:um,normal_fragment_begin:hm,normal_fragment_maps:fm,normal_pars_fragment:dm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:ym,opaque_fragment:Sm,packing:Mm,premultiplied_alpha_fragment:Tm,project_vertex:Em,dithering_fragment:bm,dithering_pars_fragment:wm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Cm,shadowmap_pars_vertex:Dm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Lm,skinbase_vertex:Im,skinning_pars_vertex:Nm,skinning_vertex:Um,skinnormal_vertex:Fm,specularmap_fragment:Om,specularmap_pars_fragment:Bm,tonemapping_fragment:zm,tonemapping_pars_fragment:km,transmission_fragment:Hm,transmission_pars_fragment:Vm,uv_pars_fragment:Gm,uv_pars_vertex:Wm,uv_vertex:Xm,worldpos_vertex:Ym,background_vert:qm,background_frag:Km,backgroundCube_vert:jm,backgroundCube_frag:Zm,cube_vert:Qm,cube_frag:Jm,depth_vert:$m,depth_frag:eg,distanceRGBA_vert:tg,distanceRGBA_frag:ng,equirect_vert:ig,equirect_frag:sg,linedashed_vert:rg,linedashed_frag:ag,meshbasic_vert:og,meshbasic_frag:lg,meshlambert_vert:cg,meshlambert_frag:ug,meshmatcap_vert:hg,meshmatcap_frag:fg,meshnormal_vert:dg,meshnormal_frag:pg,meshphong_vert:mg,meshphong_frag:gg,meshphysical_vert:vg,meshphysical_frag:xg,meshtoon_vert:_g,meshtoon_frag:yg,points_vert:Sg,points_frag:Mg,shadow_vert:Tg,shadow_frag:Eg,sprite_vert:bg,sprite_frag:wg},ve={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},bn={basic:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Gt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Gt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Gt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Gt([ve.points,ve.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Gt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Gt([ve.common,ve.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Gt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Gt([ve.sprite,ve.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Gt([ve.common,ve.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Gt([ve.lights,ve.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};bn.physical={uniforms:Gt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Mr={r:0,b:0,g:0},hi=new yn,Ag=new we;function Rg(s,e,t,n,i,r,a){const o=new Me(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function v(M){let x=!1;const C=g(M);C===null?p(o,l):C&&C.isColor&&(p(C,1),x=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,x){const C=g(x);C&&(C.isCubeTexture||C.mapping===Wr)?(u===void 0&&(u=new at(new on(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:ts(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,D,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),hi.copy(x.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(hi)),u.material.toneMapped=$e.getTransfer(C.colorSpace)!==ut,(h!==C||f!==C.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,d=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new at(new ns(2,2),new vt({name:"BackgroundMaterial",uniforms:ts(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=$e.getTransfer(C.colorSpace)!==ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(Mr,Cu(s)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,x,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:v,addToRenderList:m,dispose:E}}function Cg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(y,I,O,V,W){let K=!1;const X=h(V,O,I);r!==X&&(r=X,c(r.object)),K=d(y,V,O,W),K&&g(y,V,O,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,x(y,I,O,V),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,I,O){const V=O.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let K=W[I.id];K===void 0&&(K={},W[I.id]=K);let X=K[V];return X===void 0&&(X=f(l()),K[V]=X),X}function f(y){const I=[],O=[],V=[];for(let W=0;W<t;W++)I[W]=0,O[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:V,object:y,attributes:{},index:null}}function d(y,I,O,V){const W=r.attributes,K=I.attributes;let X=0;const ce=O.getAttributes();for(const Z in ce)if(ce[Z].location>=0){const ge=W[Z];let Te=K[Z];if(Te===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(Te=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(Te=y.instanceColor)),ge===void 0||ge.attribute!==Te||Te&&ge.data!==Te.data)return!0;X++}return r.attributesNum!==X||r.index!==V}function g(y,I,O,V){const W={},K=I.attributes;let X=0;const ce=O.getAttributes();for(const Z in ce)if(ce[Z].location>=0){let ge=K[Z];ge===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor));const Te={};Te.attribute=ge,ge&&ge.data&&(Te.data=ge.data),W[Z]=Te,X++}r.attributes=W,r.attributesNum=X,r.index=V}function v(){const y=r.newAttributes;for(let I=0,O=y.length;I<O;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){const O=r.newAttributes,V=r.enabledAttributes,W=r.attributeDivisors;O[y]=1,V[y]===0&&(s.enableVertexAttribArray(y),V[y]=1),W[y]!==I&&(s.vertexAttribDivisor(y,I),W[y]=I)}function E(){const y=r.newAttributes,I=r.enabledAttributes;for(let O=0,V=I.length;O<V;O++)I[O]!==y[O]&&(s.disableVertexAttribArray(O),I[O]=0)}function M(y,I,O,V,W,K,X){X===!0?s.vertexAttribIPointer(y,I,O,W,K):s.vertexAttribPointer(y,I,O,V,W,K)}function x(y,I,O,V){v();const W=V.attributes,K=O.getAttributes(),X=I.defaultAttributeValues;for(const ce in K){const Z=K[ce];if(Z.location>=0){let de=W[ce];if(de===void 0&&(ce==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),ce==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),de!==void 0){const ge=de.normalized,Te=de.itemSize,Le=e.get(de);if(Le===void 0)continue;const Ge=Le.buffer,Je=Le.type,je=Le.bytesPerElement,ne=Je===s.INT||Je===s.UNSIGNED_INT||de.gpuType===qo;if(de.isInterleavedBufferAttribute){const oe=de.data,Q=oe.stride,me=de.offset;if(oe.isInstancedInterleavedBuffer){for(let ue=0;ue<Z.locationSize;ue++)p(Z.location+ue,oe.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ue=0;ue<Z.locationSize;ue++)m(Z.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let ue=0;ue<Z.locationSize;ue++)M(Z.location+ue,Te/Z.locationSize,Je,ge,Q*je,(me+Te/Z.locationSize*ue)*je,ne)}else{if(de.isInstancedBufferAttribute){for(let oe=0;oe<Z.locationSize;oe++)p(Z.location+oe,de.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let oe=0;oe<Z.locationSize;oe++)m(Z.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let oe=0;oe<Z.locationSize;oe++)M(Z.location+oe,Te/Z.locationSize,Je,ge,Te*je,Te/Z.locationSize*oe*je,ne)}}else if(X!==void 0){const ge=X[ce];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(Z.location,ge);break;case 3:s.vertexAttrib3fv(Z.location,ge);break;case 4:s.vertexAttrib4fv(Z.location,ge);break;default:s.vertexAttrib1fv(Z.location,ge)}}}}E()}function C(){R();for(const y in n){const I=n[y];for(const O in I){const V=I[O];for(const W in V)u(V[W].object),delete V[W];delete I[O]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const I=n[y.id];for(const O in I){const V=I[O];for(const W in V)u(V[W].object),delete V[W];delete I[O]}delete n[y.id]}function D(y){for(const I in n){const O=n[I];if(O[y.id]===void 0)continue;const V=O[y.id];for(const W in V)u(V[W].object),delete V[W];delete O[y.id]}}function R(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function Dg(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Pg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(D){return!(D!==Rt&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const R=D===Lt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Pn&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Yt&&!R)}function l(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:C,maxSamples:b}}function Lg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ni,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const E=r?0:n,M=E*4;let x=p.clippingState||null;l.value=x,x=u(g,f,M,d);for(let C=0;C!==M;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==v;++M,x+=4)a.copy(h[M]).applyMatrix4(E,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Ig(s){let e=new WeakMap;function t(a,o){return o===Ja?a.mapping=Zi:o===$a&&(a.mapping=Qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ja||o===$a)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new zf(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Gi=4,Sc=[.125,.215,.35,.446,.526,.582],_i=20,La=new Xs,Mc=new Me;let Ia=null,Na=0,Ua=0,Fa=!1;const mi=(1+Math.sqrt(5))/2,ki=1/mi,Tc=[new w(-mi,ki,0),new w(mi,ki,0),new w(-ki,0,mi),new w(ki,0,mi),new w(0,mi,-ki),new w(0,mi,ki),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],Ng=new w;class Fo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Ng}=r;Ia=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Na,Ua),this._renderer.xr.enabled=Fa,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:Lt,format:Rt,colorSpace:kt,depthBuffer:!1},i=Ec(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ug(r)),this._blurMaterial=Fg(r,e,t)}return i}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,i,r){const l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Mc),h.toneMapping=si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const v=new ii({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),m=new at(new on,v);let p=!1;const E=e.background;E?E.isColor&&(v.color.copy(E),e.background=null,p=!0):(v.color.copy(Mc),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const C=this._cubeSize;Tr(i,x*C,M>2?C:0,C,C),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zi||e.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,La)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tc[(i-r-1)%Tc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new at(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*_i-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):_i;m>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const p=[];let E=0;for(let D=0;D<_i;++D){const R=D/v,S=Math.exp(-R*R/2);p.push(S),D===0?E+=S:D<m&&(E+=2*S)}for(let D=0;D<p.length;D++)p[D]=p[D]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const x=this._sizeLods[i],C=3*x*(i>M-Gi?i-M+Gi:0),b=4*(this._cubeSize-x);Tr(t,C,b,3*x,2*x),l.setRenderTarget(t),l.render(h,La)}}function Ug(s){const e=[],t=[],n=[];let i=s;const r=s-Gi+1+Sc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Gi?l=Sc[a-s+Gi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,E=new Float32Array(v*g*d),M=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let b=0;b<d;b++){const D=b%3*2/3-1,R=b>2?0:-1,S=[D,R,0,D+2/3,R,0,D+2/3,R+1,0,D,R,0,D+2/3,R+1,0,D,R+1,0];E.set(S,v*g*b),M.set(f,m*g*b);const y=[b,b,b,b,b,b];x.set(y,p*g*b)}const C=new St;C.setAttribute("position",new wt(E,v)),C.setAttribute("uv",new wt(M,m)),C.setAttribute("faceIndex",new wt(x,p)),e.push(C),i>Gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ec(s,e,t){const n=new Dt(s,e,t);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Fg(s,e,t){const n=new Float32Array(_i),i=new w(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function bc(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function wc(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Og(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ja||l===$a,u=l===Zi||l===Qi;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Fo(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Fo(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Bg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&zs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zg(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const E=d.array;v=d.version;for(let M=0,x=E.length;M<x;M+=3){const C=E[M+0],b=E[M+1],D=E[M+2];f.push(C,b,b,D,D,C)}}else if(g!==void 0){const E=g.array;v=g.version;for(let M=0,x=E.length/3-1;M<x;M+=3){const C=M+0,b=M+1,D=M+2;f.push(C,b,b,D,D,C)}}else return;const m=new(Tu(f)?Ru:Au)(f,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function kg(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*a,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*v[E];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Hg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Vg(s,e,t){const n=new WeakMap,i=new lt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let x=o.attributes.position.count*M,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const b=new Float32Array(x*C*4*h),D=new Eu(b,x,C,h);D.type=Yt,D.needsUpdate=!0;const R=M*4;for(let y=0;y<h;y++){const I=m[y],O=p[y],V=E[y],W=x*C*4*y;for(let K=0;K<I.count;K++){const X=K*R;d===!0&&(i.fromBufferAttribute(I,K),b[W+X+0]=i.x,b[W+X+1]=i.y,b[W+X+2]=i.z,b[W+X+3]=0),g===!0&&(i.fromBufferAttribute(O,K),b[W+X+4]=i.x,b[W+X+5]=i.y,b[W+X+6]=i.z,b[W+X+7]=0),v===!0&&(i.fromBufferAttribute(V,K),b[W+X+8]=i.x,b[W+X+9]=i.y,b[W+X+10]=i.z,b[W+X+11]=V.itemSize===4?i.w:1)}}f={count:h,texture:D,size:new fe(x,C)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Gg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Hu=new bt,Ac=new Ds(1,1),Vu=new Eu,Gu=new yf,Wu=new Pu,Rc=[],Cc=[],Dc=new Float32Array(16),Pc=new Float32Array(9),Lc=new Float32Array(4);function us(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Rc[i];if(r===void 0&&(r=new Float32Array(i),Rc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function jr(s,e){let t=Cc[e];t===void 0&&(t=new Int32Array(e),Cc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function Yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function Kg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Lc.set(n),s.uniformMatrix2fv(this.addr,!1,Lc),Nt(t,n)}}function jg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Pc.set(n),s.uniformMatrix3fv(this.addr,!1,Pc),Nt(t,n)}}function Zg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Dc.set(n),s.uniformMatrix4fv(this.addr,!1,Dc),Nt(t,n)}}function Qg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function $g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function e0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function t0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function n0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function i0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function s0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function r0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ac.compareFunction=Mu,r=Ac):r=Hu,t.setTexture2D(e||r,i)}function a0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gu,i)}function o0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wu,i)}function l0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vu,i)}function c0(s){switch(s){case 5126:return Wg;case 35664:return Xg;case 35665:return Yg;case 35666:return qg;case 35674:return Kg;case 35675:return jg;case 35676:return Zg;case 5124:case 35670:return Qg;case 35667:case 35671:return Jg;case 35668:case 35672:return $g;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}function u0(s,e){s.uniform1fv(this.addr,e)}function h0(s,e){const t=us(e,this.size,2);s.uniform2fv(this.addr,t)}function f0(s,e){const t=us(e,this.size,3);s.uniform3fv(this.addr,t)}function d0(s,e){const t=us(e,this.size,4);s.uniform4fv(this.addr,t)}function p0(s,e){const t=us(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function m0(s,e){const t=us(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function g0(s,e){const t=us(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function v0(s,e){s.uniform1iv(this.addr,e)}function x0(s,e){s.uniform2iv(this.addr,e)}function _0(s,e){s.uniform3iv(this.addr,e)}function y0(s,e){s.uniform4iv(this.addr,e)}function S0(s,e){s.uniform1uiv(this.addr,e)}function M0(s,e){s.uniform2uiv(this.addr,e)}function T0(s,e){s.uniform3uiv(this.addr,e)}function E0(s,e){s.uniform4uiv(this.addr,e)}function b0(s,e,t){const n=this.cache,i=e.length,r=jr(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Hu,r[a])}function w0(s,e,t){const n=this.cache,i=e.length,r=jr(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Gu,r[a])}function A0(s,e,t){const n=this.cache,i=e.length,r=jr(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Wu,r[a])}function R0(s,e,t){const n=this.cache,i=e.length,r=jr(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Vu,r[a])}function C0(s){switch(s){case 5126:return u0;case 35664:return h0;case 35665:return f0;case 35666:return d0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return v0;case 35667:case 35671:return x0;case 35668:case 35672:return _0;case 35669:case 35673:return y0;case 5125:return S0;case 36294:return M0;case 36295:return T0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}class D0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=c0(t.type)}}class P0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C0(t.type)}}class L0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Ic(s,e){s.seq.push(e),s.map[e.id]=e}function I0(s,e,t){const n=s.name,i=n.length;for(Oa.lastIndex=0;;){const r=Oa.exec(n),a=Oa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ic(t,c===void 0?new D0(o,s,e):new P0(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new L0(o),Ic(t,h)),t=h}}}class Ir{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);I0(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Nc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const N0=37297;let U0=0;function F0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Uc=new Xe;function O0(s){$e._getMatrix(Uc,$e.workingColorSpace,s);const e=`mat3( ${Uc.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(s)){case Fr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Fc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+F0(s.getShaderSource(e),o)}else return r}function B0(s,e){const t=O0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function z0(s,e){let t;switch(e){case ru:t="Linear";break;case au:t="Reinhard";break;case ou:t="Cineon";break;case lu:t="ACESFilmic";break;case uu:t="AgX";break;case Yo:t="Neutral";break;case cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Er=new w;function k0(){$e.getLuminanceCoefficients(Er);const s=Er.x.toFixed(4),e=Er.y.toFixed(4),t=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function V0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function G0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Es(s){return s!==""}function Oc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(s){return s.replace(W0,Y0)}const X0=new Map;function Y0(s,e){let t=Ye[e];if(t===void 0){const n=X0.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Oo(t)}const q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(s){return s.replace(q0,K0)}function K0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function kc(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===gh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function Z0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zi:case Qi:e="ENVMAP_TYPE_CUBE";break;case Wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function J0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case su:e="ENVMAP_BLENDING_MULTIPLY";break;case Uh:e="ENVMAP_BLENDING_MIX";break;case Fh:e="ENVMAP_BLENDING_ADD";break}return e}function $0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ev(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=j0(t),c=Z0(t),u=Q0(t),h=J0(t),f=$0(t),d=H0(t),g=V0(r),v=i.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(m=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Ye.tonemapping_pars_fragment:"",t.toneMapping!==si?z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,B0("linearToOutputTexel",t.outputColorSpace),k0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),a=Oo(a),a=Oc(a,t),a=Bc(a,t),o=Oo(o),o=Oc(o,t),o=Bc(o,t),a=zc(a),o=zc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=E+m+a,x=E+p+o,C=Nc(i,i.VERTEX_SHADER,M),b=Nc(i,i.FRAGMENT_SHADER,x);i.attachShader(v,C),i.attachShader(v,b),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function D(I){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(v)||"",V=i.getShaderInfoLog(C)||"",W=i.getShaderInfoLog(b)||"",K=O.trim(),X=V.trim(),ce=W.trim();let Z=!0,de=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,C,b);else{const ge=Fc(i,C,"vertex"),Te=Fc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+K+`
`+ge+`
`+Te)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(X===""||ce==="")&&(de=!1);de&&(I.diagnostics={runnable:Z,programLog:K,vertexShader:{log:X,prefix:m},fragmentShader:{log:ce,prefix:p}})}i.deleteShader(C),i.deleteShader(b),R=new Ir(i,v),S=G0(i,v)}let R;this.getUniforms=function(){return R===void 0&&D(this),R};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,N0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=b,this}let tv=0;class nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new iv(e),t.set(e,n)),n}}class iv{constructor(e){this.id=tv++,this.code=e,this.usedTimes=0}}function sv(s,e,t,n,i,r,a){const o=new bu,l=new nv,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,I,O,V){const W=O.fog,K=V.geometry,X=S.isMeshStandardMaterial?O.environment:null,ce=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),Z=ce&&ce.mapping===Wr?ce.image.height:null,de=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ge=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Te=ge!==void 0?ge.length:0;let Le=0;K.morphAttributes.position!==void 0&&(Le=1),K.morphAttributes.normal!==void 0&&(Le=2),K.morphAttributes.color!==void 0&&(Le=3);let Ge,Je,je,ne;if(de){const Ze=bn[de];Ge=Ze.vertexShader,Je=Ze.fragmentShader}else Ge=S.vertexShader,Je=S.fragmentShader,l.update(S),je=l.getVertexShaderID(S),ne=l.getFragmentShaderID(S);const oe=s.getRenderTarget(),Q=s.state.buffers.depth.getReversed(),me=V.isInstancedMesh===!0,ue=V.isBatchedMesh===!0,Ie=!!S.map,Ue=!!S.matcap,L=!!ce,ze=!!S.aoMap,Pe=!!S.lightMap,Ae=!!S.bumpMap,Se=!!S.normalMap,et=!!S.displacementMap,ye=!!S.emissiveMap,be=!!S.metalnessMap,qe=!!S.roughnessMap,it=S.anisotropy>0,A=S.clearcoat>0,_=S.dispersion>0,G=S.iridescence>0,ee=S.sheen>0,le=S.transmission>0,J=it&&!!S.anisotropyMap,De=A&&!!S.clearcoatMap,pe=A&&!!S.clearcoatNormalMap,Re=A&&!!S.clearcoatRoughnessMap,P=G&&!!S.iridescenceMap,U=G&&!!S.iridescenceThicknessMap,k=ee&&!!S.sheenColorMap,B=ee&&!!S.sheenRoughnessMap,F=!!S.specularMap,Y=!!S.specularColorMap,re=!!S.specularIntensityMap,N=le&&!!S.transmissionMap,te=le&&!!S.thicknessMap,ae=!!S.gradientMap,ie=!!S.alphaMap,se=S.alphaTest>0,$=!!S.alphaHash,xe=!!S.extensions;let Fe=si;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Fe=s.toneMapping);const He={shaderID:de,shaderType:S.type,shaderName:S.name,vertexShader:Ge,fragmentShader:Je,defines:S.defines,customVertexShaderID:je,customFragmentShaderID:ne,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:ue,batchingColor:ue&&V._colorsTexture!==null,instancing:me,instancingColor:me&&V.instanceColor!==null,instancingMorph:me&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:kt,alphaToCoverage:!!S.alphaToCoverage,map:Ie,matcap:Ue,envMap:L,envMapMode:L&&ce.mapping,envMapCubeUVHeight:Z,aoMap:ze,lightMap:Pe,bumpMap:Ae,normalMap:Se,displacementMap:f&&et,emissiveMap:ye,normalMapObjectSpace:Se&&S.normalMapType===Vh,normalMapTangentSpace:Se&&S.normalMapType===Su,metalnessMap:be,roughnessMap:qe,anisotropy:it,anisotropyMap:J,clearcoat:A,clearcoatMap:De,clearcoatNormalMap:pe,clearcoatRoughnessMap:Re,dispersion:_,iridescence:G,iridescenceMap:P,iridescenceThicknessMap:U,sheen:ee,sheenColorMap:k,sheenRoughnessMap:B,specularMap:F,specularColorMap:Y,specularIntensityMap:re,transmission:le,transmissionMap:N,thicknessMap:te,gradientMap:ae,opaque:S.transparent===!1&&S.blending===Xi&&S.alphaToCoverage===!1,alphaMap:ie,alphaTest:se,alphaHash:$,combine:S.combine,mapUv:Ie&&v(S.map.channel),aoMapUv:ze&&v(S.aoMap.channel),lightMapUv:Pe&&v(S.lightMap.channel),bumpMapUv:Ae&&v(S.bumpMap.channel),normalMapUv:Se&&v(S.normalMap.channel),displacementMapUv:et&&v(S.displacementMap.channel),emissiveMapUv:ye&&v(S.emissiveMap.channel),metalnessMapUv:be&&v(S.metalnessMap.channel),roughnessMapUv:qe&&v(S.roughnessMap.channel),anisotropyMapUv:J&&v(S.anisotropyMap.channel),clearcoatMapUv:De&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:P&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:U&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:k&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:B&&v(S.sheenRoughnessMap.channel),specularMapUv:F&&v(S.specularMap.channel),specularColorMapUv:Y&&v(S.specularColorMap.channel),specularIntensityMapUv:re&&v(S.specularIntensityMap.channel),transmissionMapUv:N&&v(S.transmissionMap.channel),thicknessMapUv:te&&v(S.thicknessMap.channel),alphaMapUv:ie&&v(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Se||it),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(Ie||ie),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Q,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&$e.getTransfer(S.map.colorSpace)===ut,decodeVideoTextureEmissive:ye&&S.emissiveMap.isVideoTexture===!0&&$e.getTransfer(S.emissiveMap.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zt,flipSided:S.side===qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&S.extensions.multiDraw===!0||ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)y.push(I),y.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(E(y,S),M(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const y=g[S.type];let I;if(y){const O=bn[y];I=ks.clone(O.uniforms)}else I=S.uniforms;return I}function C(S,y){let I;for(let O=0,V=u.length;O<V;O++){const W=u[O];if(W.cacheKey===y){I=W,++I.usedTimes;break}}return I===void 0&&(I=new ev(s,y,S,r),u.push(I)),I}function b(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function D(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:b,releaseShaderCache:D,programs:u,dispose:R}}function rv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function av(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Hc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Vc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,g,v,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||av),n.length>1&&n.sort(f||Hc),i.length>1&&i.sort(f||Hc)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function ov(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Vc,s.set(n,[a])):i>=r.length?(a=new Vc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function lv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Me};break;case"SpotLight":t={position:new w,direction:new w,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function cv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let uv=0;function hv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fv(s){const e=new lv,t=cv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const i=new w,r=new we,a=new we;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,E=0,M=0,x=0,C=0,b=0,D=0;c.sort(hv);for(let S=0,y=c.length;S<y;S++){const I=c[S],O=I.color,V=I.intensity,W=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=O.r*V,h+=O.g*V,f+=O.b*V;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],V);D++}else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ce=I.shadow,Z=t.get(I);Z.shadowIntensity=ce.intensity,Z.shadowBias=ce.bias,Z.shadowNormalBias=ce.normalBias,Z.shadowRadius=ce.radius,Z.shadowMapSize=ce.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=I.shadow.matrix,E++}n.directional[d]=X,d++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(O).multiplyScalar(V),X.distance=W,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[v]=X;const ce=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,ce.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[v]=ce.matrix,I.castShadow){const Z=t.get(I);Z.shadowIntensity=ce.intensity,Z.shadowBias=ce.bias,Z.shadowNormalBias=ce.normalBias,Z.shadowRadius=ce.radius,Z.shadowMapSize=ce.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=K,x++}v++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(O).multiplyScalar(V),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=X,m++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const ce=I.shadow,Z=t.get(I);Z.shadowIntensity=ce.intensity,Z.shadowBias=ce.bias,Z.shadowNormalBias=ce.normalBias,Z.shadowRadius=ce.radius,Z.shadowMapSize=ce.mapSize,Z.shadowCameraNear=ce.camera.near,Z.shadowCameraFar=ce.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=I.shadow.matrix,M++}n.point[g]=X,g++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(V),X.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[p]=X,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==E||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==D)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=D,R.directionalLength=d,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=E,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=D,n.version=uv++)}function l(c,u){let h=0,f=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Gc(s){const e=new fv(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function dv(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Gc(s),e.set(i,[o])):r>=a.length?(o=new Gc(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gv(s,e,t){let n=new il;const i=new fe,r=new fe,a=new lt,o=new dd({depthPacking:Hh}),l=new pd,c={},u=t.maxTextureSize,h={[Yn]:qt,[qt]:Yn,[Zt]:Zt},f=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:pv,fragmentShader:mv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new St;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new at(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xo;let p=this.type;this.render=function(b,D,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=s.getRenderTarget(),y=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Wn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=p!==kn&&this.type===kn,W=p===kn&&this.type!==kn;for(let K=0,X=b.length;K<X;K++){const ce=b[K],Z=ce.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);const de=Z.getFrameExtents();if(i.multiply(de),r.copy(Z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/de.x),i.x=r.x*de.x,Z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/de.y),i.y=r.y*de.y,Z.mapSize.y=r.y)),Z.map===null||V===!0||W===!0){const Te=this.type!==kn?{minFilter:_t,magFilter:_t}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Dt(i.x,i.y,Te),Z.map.texture.name=ce.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const ge=Z.getViewportCount();for(let Te=0;Te<ge;Te++){const Le=Z.getViewport(Te);a.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),O.viewport(a),Z.updateMatrices(ce,Te),n=Z.getFrustum(),x(D,R,Z.camera,ce,this.type)}Z.isPointLightShadow!==!0&&this.type===kn&&E(Z,R),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,y,I)};function E(b,D){const R=e.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Dt(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(D,null,R,f,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(D,null,R,d,v,null)}function M(b,D,R,S){let y=null;const I=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)y=I;else if(y=R.isPointLight===!0?l:o,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const O=y.uuid,V=D.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let K=W[V];K===void 0&&(K=y.clone(),W[V]=K,D.addEventListener("dispose",C)),y=K}if(y.visible=D.visible,y.wireframe=D.wireframe,S===kn?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:h[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=s.properties.get(y);O.light=R}return y}function x(b,D,R,S,y){if(b.visible===!1)return;if(b.layers.test(D.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===kn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const V=e.update(b),W=b.material;if(Array.isArray(W)){const K=V.groups;for(let X=0,ce=K.length;X<ce;X++){const Z=K[X],de=W[Z.materialIndex];if(de&&de.visible){const ge=M(b,de,S,y);b.onBeforeShadow(s,b,D,R,V,ge,Z),s.renderBufferDirect(R,null,V,ge,b,Z),b.onAfterShadow(s,b,D,R,V,ge,Z)}}}else if(W.visible){const K=M(b,W,S,y);b.onBeforeShadow(s,b,D,R,V,K,null),s.renderBufferDirect(R,null,V,K,b,null),b.onAfterShadow(s,b,D,R,V,K,null)}}const O=b.children;for(let V=0,W=O.length;V<W;V++)x(O[V],D,R,S,y)}function C(b){b.target.removeEventListener("dispose",C);for(const R in c){const S=c[R],y=b.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const vv={[Xa]:Ya,[qa]:Za,[Ka]:Qa,[ji]:ja,[Ya]:Xa,[Za]:qa,[Qa]:Ka,[ja]:ji};function xv(s,e){function t(){let N=!1;const te=new lt;let ae=null;const ie=new lt(0,0,0,0);return{setMask:function(se){ae!==se&&!N&&(s.colorMask(se,se,se,se),ae=se)},setLocked:function(se){N=se},setClear:function(se,$,xe,Fe,He){He===!0&&(se*=Fe,$*=Fe,xe*=Fe),te.set(se,$,xe,Fe),ie.equals(te)===!1&&(s.clearColor(se,$,xe,Fe),ie.copy(te))},reset:function(){N=!1,ae=null,ie.set(-1,0,0,0)}}}function n(){let N=!1,te=!1,ae=null,ie=null,se=null;return{setReversed:function($){if(te!==$){const xe=e.get("EXT_clip_control");$?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),te=$;const Fe=se;se=null,this.setClear(Fe)}},getReversed:function(){return te},setTest:function($){$?oe(s.DEPTH_TEST):Q(s.DEPTH_TEST)},setMask:function($){ae!==$&&!N&&(s.depthMask($),ae=$)},setFunc:function($){if(te&&($=vv[$]),ie!==$){switch($){case Xa:s.depthFunc(s.NEVER);break;case Ya:s.depthFunc(s.ALWAYS);break;case qa:s.depthFunc(s.LESS);break;case ji:s.depthFunc(s.LEQUAL);break;case Ka:s.depthFunc(s.EQUAL);break;case ja:s.depthFunc(s.GEQUAL);break;case Za:s.depthFunc(s.GREATER);break;case Qa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ie=$}},setLocked:function($){N=$},setClear:function($){se!==$&&(te&&($=1-$),s.clearDepth($),se=$)},reset:function(){N=!1,ae=null,ie=null,se=null,te=!1}}}function i(){let N=!1,te=null,ae=null,ie=null,se=null,$=null,xe=null,Fe=null,He=null;return{setTest:function(Ze){N||(Ze?oe(s.STENCIL_TEST):Q(s.STENCIL_TEST))},setMask:function(Ze){te!==Ze&&!N&&(s.stencilMask(Ze),te=Ze)},setFunc:function(Ze,In,Tn){(ae!==Ze||ie!==In||se!==Tn)&&(s.stencilFunc(Ze,In,Tn),ae=Ze,ie=In,se=Tn)},setOp:function(Ze,In,Tn){($!==Ze||xe!==In||Fe!==Tn)&&(s.stencilOp(Ze,In,Tn),$=Ze,xe=In,Fe=Tn)},setLocked:function(Ze){N=Ze},setClear:function(Ze){He!==Ze&&(s.clearStencil(Ze),He=Ze)},reset:function(){N=!1,te=null,ae=null,ie=null,se=null,$=null,xe=null,Fe=null,He=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,E=null,M=null,x=null,C=null,b=null,D=new Me(0,0,0),R=0,S=!1,y=null,I=null,O=null,V=null,W=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ce=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=ce>=1):Z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=ce>=2);let de=null,ge={};const Te=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),Ge=new lt().fromArray(Te),Je=new lt().fromArray(Le);function je(N,te,ae,ie){const se=new Uint8Array(4),$=s.createTexture();s.bindTexture(N,$),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<ae;xe++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,ie,0,s.RGBA,s.UNSIGNED_BYTE,se):s.texImage2D(te+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,se);return $}const ne={};ne[s.TEXTURE_2D]=je(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=je(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=je(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=je(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(s.DEPTH_TEST),a.setFunc(ji),Ae(!1),Se(Rl),oe(s.CULL_FACE),ze(Wn);function oe(N){u[N]!==!0&&(s.enable(N),u[N]=!0)}function Q(N){u[N]!==!1&&(s.disable(N),u[N]=!1)}function me(N,te){return h[N]!==te?(s.bindFramebuffer(N,te),h[N]=te,N===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=te),N===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=te),!0):!1}function ue(N,te){let ae=d,ie=!1;if(N){ae=f.get(te),ae===void 0&&(ae=[],f.set(te,ae));const se=N.textures;if(ae.length!==se.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let $=0,xe=se.length;$<xe;$++)ae[$]=s.COLOR_ATTACHMENT0+$;ae.length=se.length,ie=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,ie=!0);ie&&s.drawBuffers(ae)}function Ie(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const Ue={[vi]:s.FUNC_ADD,[xh]:s.FUNC_SUBTRACT,[_h]:s.FUNC_REVERSE_SUBTRACT};Ue[yh]=s.MIN,Ue[Sh]=s.MAX;const L={[Mh]:s.ZERO,[Th]:s.ONE,[Eh]:s.SRC_COLOR,[Ga]:s.SRC_ALPHA,[Dh]:s.SRC_ALPHA_SATURATE,[Rh]:s.DST_COLOR,[wh]:s.DST_ALPHA,[bh]:s.ONE_MINUS_SRC_COLOR,[Wa]:s.ONE_MINUS_SRC_ALPHA,[Ch]:s.ONE_MINUS_DST_COLOR,[Ah]:s.ONE_MINUS_DST_ALPHA,[Ph]:s.CONSTANT_COLOR,[Lh]:s.ONE_MINUS_CONSTANT_COLOR,[Ih]:s.CONSTANT_ALPHA,[Nh]:s.ONE_MINUS_CONSTANT_ALPHA};function ze(N,te,ae,ie,se,$,xe,Fe,He,Ze){if(N===Wn){v===!0&&(Q(s.BLEND),v=!1);return}if(v===!1&&(oe(s.BLEND),v=!0),N!==vh){if(N!==m||Ze!==S){if((p!==vi||x!==vi)&&(s.blendEquation(s.FUNC_ADD),p=vi,x=vi),Ze)switch(N){case Xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ki:s.blendFunc(s.ONE,s.ONE);break;case Cl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Cl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,M=null,C=null,b=null,D.set(0,0,0),R=0,m=N,S=Ze}return}se=se||te,$=$||ae,xe=xe||ie,(te!==p||se!==x)&&(s.blendEquationSeparate(Ue[te],Ue[se]),p=te,x=se),(ae!==E||ie!==M||$!==C||xe!==b)&&(s.blendFuncSeparate(L[ae],L[ie],L[$],L[xe]),E=ae,M=ie,C=$,b=xe),(Fe.equals(D)===!1||He!==R)&&(s.blendColor(Fe.r,Fe.g,Fe.b,He),D.copy(Fe),R=He),m=N,S=!1}function Pe(N,te){N.side===Zt?Q(s.CULL_FACE):oe(s.CULL_FACE);let ae=N.side===qt;te&&(ae=!ae),Ae(ae),N.blending===Xi&&N.transparent===!1?ze(Wn):ze(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ie=N.stencilWrite;o.setTest(ie),ie&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ye(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):Q(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(N){y!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),y=N)}function Se(N){N!==ph?(oe(s.CULL_FACE),N!==I&&(N===Rl?s.cullFace(s.BACK):N===mh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Q(s.CULL_FACE),I=N}function et(N){N!==O&&(X&&s.lineWidth(N),O=N)}function ye(N,te,ae){N?(oe(s.POLYGON_OFFSET_FILL),(V!==te||W!==ae)&&(s.polygonOffset(te,ae),V=te,W=ae)):Q(s.POLYGON_OFFSET_FILL)}function be(N){N?oe(s.SCISSOR_TEST):Q(s.SCISSOR_TEST)}function qe(N){N===void 0&&(N=s.TEXTURE0+K-1),de!==N&&(s.activeTexture(N),de=N)}function it(N,te,ae){ae===void 0&&(de===null?ae=s.TEXTURE0+K-1:ae=de);let ie=ge[ae];ie===void 0&&(ie={type:void 0,texture:void 0},ge[ae]=ie),(ie.type!==N||ie.texture!==te)&&(de!==ae&&(s.activeTexture(ae),de=ae),s.bindTexture(N,te||ne[N]),ie.type=N,ie.texture=te)}function A(){const N=ge[de];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{s.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{s.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{s.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{s.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{s.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{s.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(){try{s.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{s.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(N){Ge.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Ge.copy(N))}function B(N){Je.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Je.copy(N))}function F(N,te){let ae=c.get(te);ae===void 0&&(ae=new WeakMap,c.set(te,ae));let ie=ae.get(N);ie===void 0&&(ie=s.getUniformBlockIndex(te,N.name),ae.set(N,ie))}function Y(N,te){const ie=c.get(te).get(N);l.get(te)!==ie&&(s.uniformBlockBinding(te,ie,N.__bindingPointIndex),l.set(te,ie))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},de=null,ge={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,E=null,M=null,x=null,C=null,b=null,D=new Me(0,0,0),R=0,S=!1,y=null,I=null,O=null,V=null,W=null,Ge.set(0,0,s.canvas.width,s.canvas.height),Je.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:Q,bindFramebuffer:me,drawBuffers:ue,useProgram:Ie,setBlending:ze,setMaterial:Pe,setFlipSided:Ae,setCullFace:Se,setLineWidth:et,setPolygonOffset:ye,setScissorTest:be,activeTexture:qe,bindTexture:it,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:G,texImage2D:P,texImage3D:U,updateUBOMapping:F,uniformBlockBinding:Y,texStorage2D:pe,texStorage3D:Re,texSubImage2D:ee,texSubImage3D:le,compressedTexSubImage2D:J,compressedTexSubImage3D:De,scissor:k,viewport:B,reset:re}}function _v(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return d?new OffscreenCanvas(A,_):Bs("canvas")}function v(A,_,G){let ee=1;const le=it(A);if((le.width>G||le.height>G)&&(ee=G/Math.max(le.width,le.height)),ee<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(ee*le.width),De=Math.floor(ee*le.height);h===void 0&&(h=g(J,De));const pe=_?g(J,De):h;return pe.width=J,pe.height=De,pe.getContext("2d").drawImage(A,0,0,J,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+J+"x"+De+")."),pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(A,_,G,ee,le=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=_;if(_===s.RED&&(G===s.FLOAT&&(J=s.R32F),G===s.HALF_FLOAT&&(J=s.R16F),G===s.UNSIGNED_BYTE&&(J=s.R8)),_===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.R8UI),G===s.UNSIGNED_SHORT&&(J=s.R16UI),G===s.UNSIGNED_INT&&(J=s.R32UI),G===s.BYTE&&(J=s.R8I),G===s.SHORT&&(J=s.R16I),G===s.INT&&(J=s.R32I)),_===s.RG&&(G===s.FLOAT&&(J=s.RG32F),G===s.HALF_FLOAT&&(J=s.RG16F),G===s.UNSIGNED_BYTE&&(J=s.RG8)),_===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RG8UI),G===s.UNSIGNED_SHORT&&(J=s.RG16UI),G===s.UNSIGNED_INT&&(J=s.RG32UI),G===s.BYTE&&(J=s.RG8I),G===s.SHORT&&(J=s.RG16I),G===s.INT&&(J=s.RG32I)),_===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGB8UI),G===s.UNSIGNED_SHORT&&(J=s.RGB16UI),G===s.UNSIGNED_INT&&(J=s.RGB32UI),G===s.BYTE&&(J=s.RGB8I),G===s.SHORT&&(J=s.RGB16I),G===s.INT&&(J=s.RGB32I)),_===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),G===s.UNSIGNED_INT&&(J=s.RGBA32UI),G===s.BYTE&&(J=s.RGBA8I),G===s.SHORT&&(J=s.RGBA16I),G===s.INT&&(J=s.RGBA32I)),_===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),_===s.RGBA){const De=le?Fr:$e.getTransfer(ee);G===s.FLOAT&&(J=s.RGBA32F),G===s.HALF_FLOAT&&(J=s.RGBA16F),G===s.UNSIGNED_BYTE&&(J=De===ut?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(A,_){let G;return A?_===null||_===Cn||_===Ji?G=s.DEPTH24_STENCIL8:_===Yt?G=s.DEPTH32F_STENCIL8:_===Us&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Cn||_===Ji?G=s.DEPTH_COMPONENT24:_===Yt?G=s.DEPTH_COMPONENT32F:_===Us&&(G=s.DEPTH_COMPONENT16),G}function C(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==_t&&A.minFilter!==pt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function b(A){const _=A.target;_.removeEventListener("dispose",b),R(_),_.isVideoTexture&&u.delete(_)}function D(A){const _=A.target;_.removeEventListener("dispose",D),y(_)}function R(A){const _=n.get(A);if(_.__webglInit===void 0)return;const G=A.source,ee=f.get(G);if(ee){const le=ee[_.__cacheKey];le.usedTimes--,le.usedTimes===0&&S(A),Object.keys(ee).length===0&&f.delete(G)}n.remove(A)}function S(A){const _=n.get(A);s.deleteTexture(_.__webglTexture);const G=A.source,ee=f.get(G);delete ee[_.__cacheKey],a.memory.textures--}function y(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(_.__webglFramebuffer[ee]))for(let le=0;le<_.__webglFramebuffer[ee].length;le++)s.deleteFramebuffer(_.__webglFramebuffer[ee][le]);else s.deleteFramebuffer(_.__webglFramebuffer[ee]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[ee])}else{if(Array.isArray(_.__webglFramebuffer))for(let ee=0;ee<_.__webglFramebuffer.length;ee++)s.deleteFramebuffer(_.__webglFramebuffer[ee]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ee=0;ee<_.__webglColorRenderbuffer.length;ee++)_.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[ee]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const G=A.textures;for(let ee=0,le=G.length;ee<le;ee++){const J=n.get(G[ee]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(G[ee])}n.remove(A)}let I=0;function O(){I=0}function V(){const A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function W(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function K(A,_){const G=n.get(A);if(A.isVideoTexture&&be(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(G,A,_);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+_)}function X(A,_){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ne(G,A,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+_)}function ce(A,_){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ne(G,A,_);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+_)}function Z(A,_){const G=n.get(A);if(A.version>0&&G.__version!==A.version){oe(G,A,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+_)}const de={[Dn]:s.REPEAT,[wn]:s.CLAMP_TO_EDGE,[Ur]:s.MIRRORED_REPEAT},ge={[_t]:s.NEAREST,[fu]:s.NEAREST_MIPMAP_NEAREST,[Ts]:s.NEAREST_MIPMAP_LINEAR,[pt]:s.LINEAR,[Rr]:s.LINEAR_MIPMAP_NEAREST,[An]:s.LINEAR_MIPMAP_LINEAR},Te={[Gh]:s.NEVER,[jh]:s.ALWAYS,[Wh]:s.LESS,[Mu]:s.LEQUAL,[Xh]:s.EQUAL,[Kh]:s.GEQUAL,[Yh]:s.GREATER,[qh]:s.NOTEQUAL};function Le(A,_){if(_.type===Yt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===pt||_.magFilter===Rr||_.magFilter===Ts||_.magFilter===An||_.minFilter===pt||_.minFilter===Rr||_.minFilter===Ts||_.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,de[_.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,de[_.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,de[_.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ge[_.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ge[_.minFilter]),_.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===_t||_.minFilter!==Ts&&_.minFilter!==An||_.type===Yt&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ge(A,_){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",b));const ee=_.source;let le=f.get(ee);le===void 0&&(le={},f.set(ee,le));const J=W(_);if(J!==A.__cacheKey){le[J]===void 0&&(le[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),le[J].usedTimes++;const De=le[A.__cacheKey];De!==void 0&&(le[A.__cacheKey].usedTimes--,De.usedTimes===0&&S(_)),A.__cacheKey=J,A.__webglTexture=le[J].texture}return G}function Je(A,_,G){return Math.floor(Math.floor(A/G)/_)}function je(A,_,G,ee){const J=A.updateRanges;if(J.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,G,ee,_.data);else{J.sort((U,k)=>U.start-k.start);let De=0;for(let U=1;U<J.length;U++){const k=J[De],B=J[U],F=k.start+k.count,Y=Je(B.start,_.width,4),re=Je(k.start,_.width,4);B.start<=F+1&&Y===re&&Je(B.start+B.count-1,_.width,4)===Y?k.count=Math.max(k.count,B.start+B.count-k.start):(++De,J[De]=B)}J.length=De+1;const pe=s.getParameter(s.UNPACK_ROW_LENGTH),Re=s.getParameter(s.UNPACK_SKIP_PIXELS),P=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let U=0,k=J.length;U<k;U++){const B=J[U],F=Math.floor(B.start/4),Y=Math.ceil(B.count/4),re=F%_.width,N=Math.floor(F/_.width),te=Y,ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,re),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),t.texSubImage2D(s.TEXTURE_2D,0,re,N,te,ae,G,ee,_.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,pe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Re),s.pixelStorei(s.UNPACK_SKIP_ROWS,P)}}function ne(A,_,G){let ee=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ee=s.TEXTURE_3D);const le=Ge(A,_),J=_.source;t.bindTexture(ee,A.__webglTexture,s.TEXTURE0+G);const De=n.get(J);if(J.version!==De.__version||le===!0){t.activeTexture(s.TEXTURE0+G);const pe=$e.getPrimaries($e.workingColorSpace),Re=_.colorSpace===Hn?null:$e.getPrimaries(_.colorSpace),P=_.colorSpace===Hn||pe===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);let U=v(_.image,!1,i.maxTextureSize);U=qe(_,U);const k=r.convert(_.format,_.colorSpace),B=r.convert(_.type);let F=M(_.internalFormat,k,B,_.colorSpace,_.isVideoTexture);Le(ee,_);let Y;const re=_.mipmaps,N=_.isVideoTexture!==!0,te=De.__version===void 0||le===!0,ae=J.dataReady,ie=C(_,U);if(_.isDepthTexture)F=x(_.format===$i,_.type),te&&(N?t.texStorage2D(s.TEXTURE_2D,1,F,U.width,U.height):t.texImage2D(s.TEXTURE_2D,0,F,U.width,U.height,0,k,B,null));else if(_.isDataTexture)if(re.length>0){N&&te&&t.texStorage2D(s.TEXTURE_2D,ie,F,re[0].width,re[0].height);for(let se=0,$=re.length;se<$;se++)Y=re[se],N?ae&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Y.width,Y.height,k,B,Y.data):t.texImage2D(s.TEXTURE_2D,se,F,Y.width,Y.height,0,k,B,Y.data);_.generateMipmaps=!1}else N?(te&&t.texStorage2D(s.TEXTURE_2D,ie,F,U.width,U.height),ae&&je(_,U,k,B)):t.texImage2D(s.TEXTURE_2D,0,F,U.width,U.height,0,k,B,U.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,F,re[0].width,re[0].height,U.depth);for(let se=0,$=re.length;se<$;se++)if(Y=re[se],_.format!==Rt)if(k!==null)if(N){if(ae)if(_.layerUpdates.size>0){const xe=yc(Y.width,Y.height,_.format,_.type);for(const Fe of _.layerUpdates){const He=Y.data.subarray(Fe*xe/Y.data.BYTES_PER_ELEMENT,(Fe+1)*xe/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Fe,Y.width,Y.height,1,k,He)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,U.depth,k,Y.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,F,Y.width,Y.height,U.depth,0,Y.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,U.depth,k,B,Y.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,F,Y.width,Y.height,U.depth,0,k,B,Y.data)}else{N&&te&&t.texStorage2D(s.TEXTURE_2D,ie,F,re[0].width,re[0].height);for(let se=0,$=re.length;se<$;se++)Y=re[se],_.format!==Rt?k!==null?N?ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,Y.width,Y.height,k,Y.data):t.compressedTexImage2D(s.TEXTURE_2D,se,F,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ae&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Y.width,Y.height,k,B,Y.data):t.texImage2D(s.TEXTURE_2D,se,F,Y.width,Y.height,0,k,B,Y.data)}else if(_.isDataArrayTexture)if(N){if(te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,F,U.width,U.height,U.depth),ae)if(_.layerUpdates.size>0){const se=yc(U.width,U.height,_.format,_.type);for(const $ of _.layerUpdates){const xe=U.data.subarray($*se/U.data.BYTES_PER_ELEMENT,($+1)*se/U.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,U.width,U.height,1,k,B,xe)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,k,B,U.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,F,U.width,U.height,U.depth,0,k,B,U.data);else if(_.isData3DTexture)N?(te&&t.texStorage3D(s.TEXTURE_3D,ie,F,U.width,U.height,U.depth),ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,k,B,U.data)):t.texImage3D(s.TEXTURE_3D,0,F,U.width,U.height,U.depth,0,k,B,U.data);else if(_.isFramebufferTexture){if(te)if(N)t.texStorage2D(s.TEXTURE_2D,ie,F,U.width,U.height);else{let se=U.width,$=U.height;for(let xe=0;xe<ie;xe++)t.texImage2D(s.TEXTURE_2D,xe,F,se,$,0,k,B,null),se>>=1,$>>=1}}else if(re.length>0){if(N&&te){const se=it(re[0]);t.texStorage2D(s.TEXTURE_2D,ie,F,se.width,se.height)}for(let se=0,$=re.length;se<$;se++)Y=re[se],N?ae&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,k,B,Y):t.texImage2D(s.TEXTURE_2D,se,F,k,B,Y);_.generateMipmaps=!1}else if(N){if(te){const se=it(U);t.texStorage2D(s.TEXTURE_2D,ie,F,se.width,se.height)}ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,k,B,U)}else t.texImage2D(s.TEXTURE_2D,0,F,k,B,U);m(_)&&p(ee),De.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function oe(A,_,G){if(_.image.length!==6)return;const ee=Ge(A,_),le=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+G);const J=n.get(le);if(le.version!==J.__version||ee===!0){t.activeTexture(s.TEXTURE0+G);const De=$e.getPrimaries($e.workingColorSpace),pe=_.colorSpace===Hn?null:$e.getPrimaries(_.colorSpace),Re=_.colorSpace===Hn||De===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const P=_.isCompressedTexture||_.image[0].isCompressedTexture,U=_.image[0]&&_.image[0].isDataTexture,k=[];for(let $=0;$<6;$++)!P&&!U?k[$]=v(_.image[$],!0,i.maxCubemapSize):k[$]=U?_.image[$].image:_.image[$],k[$]=qe(_,k[$]);const B=k[0],F=r.convert(_.format,_.colorSpace),Y=r.convert(_.type),re=M(_.internalFormat,F,Y,_.colorSpace),N=_.isVideoTexture!==!0,te=J.__version===void 0||ee===!0,ae=le.dataReady;let ie=C(_,B);Le(s.TEXTURE_CUBE_MAP,_);let se;if(P){N&&te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,re,B.width,B.height);for(let $=0;$<6;$++){se=k[$].mipmaps;for(let xe=0;xe<se.length;xe++){const Fe=se[xe];_.format!==Rt?F!==null?N?ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,0,0,Fe.width,Fe.height,F,Fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,re,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,0,0,Fe.width,Fe.height,F,Y,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,re,Fe.width,Fe.height,0,F,Y,Fe.data)}}}else{if(se=_.mipmaps,N&&te){se.length>0&&ie++;const $=it(k[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,re,$.width,$.height)}for(let $=0;$<6;$++)if(U){N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,k[$].width,k[$].height,F,Y,k[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,re,k[$].width,k[$].height,0,F,Y,k[$].data);for(let xe=0;xe<se.length;xe++){const He=se[xe].image[$].image;N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,0,0,He.width,He.height,F,Y,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,re,He.width,He.height,0,F,Y,He.data)}}else{N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,F,Y,k[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,re,F,Y,k[$]);for(let xe=0;xe<se.length;xe++){const Fe=se[xe];N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,0,0,F,Y,Fe.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,re,F,Y,Fe.image[$])}}}m(_)&&p(s.TEXTURE_CUBE_MAP),J.__version=le.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Q(A,_,G,ee,le,J){const De=r.convert(G.format,G.colorSpace),pe=r.convert(G.type),Re=M(G.internalFormat,De,pe,G.colorSpace),P=n.get(_),U=n.get(G);if(U.__renderTarget=_,!P.__hasExternalTextures){const k=Math.max(1,_.width>>J),B=Math.max(1,_.height>>J);le===s.TEXTURE_3D||le===s.TEXTURE_2D_ARRAY?t.texImage3D(le,J,Re,k,B,_.depth,0,De,pe,null):t.texImage2D(le,J,Re,k,B,0,De,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),ye(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,le,U.__webglTexture,0,et(_)):(le===s.TEXTURE_2D||le>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,le,U.__webglTexture,J),t.bindFramebuffer(s.FRAMEBUFFER,null)}function me(A,_,G){if(s.bindRenderbuffer(s.RENDERBUFFER,A),_.depthBuffer){const ee=_.depthTexture,le=ee&&ee.isDepthTexture?ee.type:null,J=x(_.stencilBuffer,le),De=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=et(_);ye(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,J,_.width,_.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,J,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,J,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,A)}else{const ee=_.textures;for(let le=0;le<ee.length;le++){const J=ee[le],De=r.convert(J.format,J.colorSpace),pe=r.convert(J.type),Re=M(J.internalFormat,De,pe,J.colorSpace),P=et(_);G&&ye(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,P,Re,_.width,_.height):ye(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P,Re,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Re,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ue(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(_.depthTexture);ee.__renderTarget=_,(!ee.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const le=ee.__webglTexture,J=et(_);if(_.depthTexture.format===yi)ye(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0);else if(_.depthTexture.format===$i)ye(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ie(A){const _=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const ee=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ee){const le=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ee.removeEventListener("dispose",le)};ee.addEventListener("dispose",le),_.__depthDisposeCallback=le}_.__boundDepthTexture=ee}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const ee=A.texture.mipmaps;ee&&ee.length>0?ue(_.__webglFramebuffer[0],A):ue(_.__webglFramebuffer,A)}else if(G){_.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[ee]),_.__webglDepthbuffer[ee]===void 0)_.__webglDepthbuffer[ee]=s.createRenderbuffer(),me(_.__webglDepthbuffer[ee],A,!1);else{const le=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,J)}}else{const ee=A.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),me(_.__webglDepthbuffer,A,!1);else{const le=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,J)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(A,_,G){const ee=n.get(A);_!==void 0&&Q(ee.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ie(A)}function L(A){const _=A.texture,G=n.get(A),ee=n.get(_);A.addEventListener("dispose",D);const le=A.textures,J=A.isWebGLCubeRenderTarget===!0,De=le.length>1;if(De||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=_.version,a.memory.textures++),J){G.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer[pe]=[];for(let Re=0;Re<_.mipmaps.length;Re++)G.__webglFramebuffer[pe][Re]=s.createFramebuffer()}else G.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer=[];for(let pe=0;pe<_.mipmaps.length;pe++)G.__webglFramebuffer[pe]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(De)for(let pe=0,Re=le.length;pe<Re;pe++){const P=n.get(le[pe]);P.__webglTexture===void 0&&(P.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&ye(A)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pe=0;pe<le.length;pe++){const Re=le[pe];G.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[pe]);const P=r.convert(Re.format,Re.colorSpace),U=r.convert(Re.type),k=M(Re.internalFormat,P,U,Re.colorSpace,A.isXRRenderTarget===!0),B=et(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,B,k,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,G.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),me(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),Le(s.TEXTURE_CUBE_MAP,_);for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)Q(G.__webglFramebuffer[pe][Re],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re);else Q(G.__webglFramebuffer[pe],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(_)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let pe=0,Re=le.length;pe<Re;pe++){const P=le[pe],U=n.get(P);let k=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(k=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(k,U.__webglTexture),Le(k,P),Q(G.__webglFramebuffer,A,P,s.COLOR_ATTACHMENT0+pe,k,0),m(P)&&p(k)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,ee.__webglTexture),Le(pe,_),_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)Q(G.__webglFramebuffer[Re],A,_,s.COLOR_ATTACHMENT0,pe,Re);else Q(G.__webglFramebuffer,A,_,s.COLOR_ATTACHMENT0,pe,0);m(_)&&p(pe),t.unbindTexture()}A.depthBuffer&&Ie(A)}function ze(A){const _=A.textures;for(let G=0,ee=_.length;G<ee;G++){const le=_[G];if(m(le)){const J=E(A),De=n.get(le).__webglTexture;t.bindTexture(J,De),p(J),t.unbindTexture()}}}const Pe=[],Ae=[];function Se(A){if(A.samples>0){if(ye(A)===!1){const _=A.textures,G=A.width,ee=A.height;let le=s.COLOR_BUFFER_BIT;const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=n.get(A),pe=_.length>1;if(pe)for(let P=0;P<_.length;P++)t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+P,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+P,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Re=A.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let P=0;P<_.length;P++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(le|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(le|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[P]);const U=n.get(_[P]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,G,ee,0,0,G,ee,le,s.NEAREST),l===!0&&(Pe.length=0,Ae.length=0,Pe.push(s.COLOR_ATTACHMENT0+P),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Pe.push(J),Ae.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ae)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let P=0;P<_.length;P++){t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+P,s.RENDERBUFFER,De.__webglColorRenderbuffer[P]);const U=n.get(_[P]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+P,s.TEXTURE_2D,U,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function et(A){return Math.min(i.maxSamples,A.samples)}function ye(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function be(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function qe(A,_){const G=A.colorSpace,ee=A.format,le=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==kt&&G!==Hn&&($e.getTransfer(G)===ut?(ee!==Rt||le!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),_}function it(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=ce,this.setTextureCube=Z,this.rebindTextures=Ue,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ye}function yv(s,e){function t(n,i=Hn){let r;const a=$e.getTransfer(i);if(n===Pn)return s.UNSIGNED_BYTE;if(n===Ko)return s.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===mu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===du)return s.BYTE;if(n===pu)return s.SHORT;if(n===Us)return s.UNSIGNED_SHORT;if(n===qo)return s.INT;if(n===Cn)return s.UNSIGNED_INT;if(n===Yt)return s.FLOAT;if(n===Lt)return s.HALF_FLOAT;if(n===vu)return s.ALPHA;if(n===xu)return s.RGB;if(n===Rt)return s.RGBA;if(n===yi)return s.DEPTH_COMPONENT;if(n===$i)return s.DEPTH_STENCIL;if(n===Xr)return s.RED;if(n===Zo)return s.RED_INTEGER;if(n===_u)return s.RG;if(n===Qo)return s.RG_INTEGER;if(n===Jo)return s.RGBA_INTEGER;if(n===Cr||n===Dr||n===Pr||n===Lr)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===to||n===no||n===io)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ro||n===ao)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===so||n===ro)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ao)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oo||n===lo||n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===vo||n===xo||n===_o||n===yo||n===So)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ho)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_o)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===So)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===To||n===Eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mo)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bo||n===wo||n===Ao||n===Ro)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mv=`
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

}`;class Tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Iu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vt({vertexShader:Sv,fragmentShader:Mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ev extends Mi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Tv,p={},E=t.getContextAttributes();let M=null,x=null;const C=[],b=[],D=new fe;let R=null;const S=new Xt;S.viewport=new lt;const y=new Xt;y.viewport=new lt;const I=[S,y],O=new Ud;let V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let oe=C[ne];return oe===void 0&&(oe=new Sa,C[ne]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ne){let oe=C[ne];return oe===void 0&&(oe=new Sa,C[ne]=oe),oe.getGripSpace()},this.getHand=function(ne){let oe=C[ne];return oe===void 0&&(oe=new Sa,C[ne]=oe),oe.getHandSpace()};function K(ne){const oe=b.indexOf(ne.inputSource);if(oe===-1)return;const Q=C[oe];Q!==void 0&&(Q.update(ne.inputSource,ne.frame,c||a),Q.dispatchEvent({type:ne.type,data:ne.inputSource}))}function X(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",ce);for(let ne=0;ne<C.length;ne++){const oe=b[ne];oe!==null&&(b[ne]=null,C[ne].disconnect(oe))}V=null,W=null,m.reset();for(const ne in p)delete p[ne];e.setRenderTarget(M),d=null,f=null,h=null,i=null,x=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",X),i.addEventListener("inputsourceschange",ce),E.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,me=null,ue=null;E.depth&&(ue=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=E.stencil?$i:yi,me=E.stencil?Ji:Cn);const Ie={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ie),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Dt(f.textureWidth,f.textureHeight,{format:Rt,type:Pn,depthTexture:new Ds(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Q={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Dt(d.framebufferWidth,d.framebufferHeight,{format:Rt,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ce(ne){for(let oe=0;oe<ne.removed.length;oe++){const Q=ne.removed[oe],me=b.indexOf(Q);me>=0&&(b[me]=null,C[me].disconnect(Q))}for(let oe=0;oe<ne.added.length;oe++){const Q=ne.added[oe];let me=b.indexOf(Q);if(me===-1){for(let Ie=0;Ie<C.length;Ie++)if(Ie>=b.length){b.push(Q),me=Ie;break}else if(b[Ie]===null){b[Ie]=Q,me=Ie;break}if(me===-1)break}const ue=C[me];ue&&ue.connect(Q)}}const Z=new w,de=new w;function ge(ne,oe,Q){Z.setFromMatrixPosition(oe.matrixWorld),de.setFromMatrixPosition(Q.matrixWorld);const me=Z.distanceTo(de),ue=oe.projectionMatrix.elements,Ie=Q.projectionMatrix.elements,Ue=ue[14]/(ue[10]-1),L=ue[14]/(ue[10]+1),ze=(ue[9]+1)/ue[5],Pe=(ue[9]-1)/ue[5],Ae=(ue[8]-1)/ue[0],Se=(Ie[8]+1)/Ie[0],et=Ue*Ae,ye=Ue*Se,be=me/(-Ae+Se),qe=be*-Ae;if(oe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(qe),ne.translateZ(be),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ue[10]===-1)ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const it=Ue+be,A=L+be,_=et-qe,G=ye+(me-qe),ee=ze*L/A*it,le=Pe*L/A*it;ne.projectionMatrix.makePerspective(_,G,ee,le,it,A),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Te(ne,oe){oe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(oe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let oe=ne.near,Q=ne.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(Q=m.depthFar)),O.near=y.near=S.near=oe,O.far=y.far=S.far=Q,(V!==O.near||W!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),V=O.near,W=O.far),O.layers.mask=ne.layers.mask|6,S.layers.mask=O.layers.mask&3,y.layers.mask=O.layers.mask&5;const me=ne.parent,ue=O.cameras;Te(O,me);for(let Ie=0;Ie<ue.length;Ie++)Te(ue[Ie],me);ue.length===2?ge(O,S,y):O.projectionMatrix.copy(S.projectionMatrix),Le(ne,O,me)};function Le(ne,oe,Q){Q===null?ne.matrix.copy(oe.matrixWorld):(ne.matrix.copy(Q.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(oe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=es*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(ne){return p[ne]};let Ge=null;function Je(ne,oe){if(u=oe.getViewerPose(c||a),g=oe,u!==null){const Q=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let me=!1;Q.length!==O.cameras.length&&(O.cameras.length=0,me=!0);for(let L=0;L<Q.length;L++){const ze=Q[L];let Pe=null;if(d!==null)Pe=d.getViewport(ze);else{const Se=h.getViewSubImage(f,ze);Pe=Se.viewport,L===0&&(e.setRenderTargetTextures(x,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(x))}let Ae=I[L];Ae===void 0&&(Ae=new Xt,Ae.layers.enable(L),Ae.viewport=new lt,I[L]=Ae),Ae.matrix.fromArray(ze.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ze.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),L===0&&(O.matrix.copy(Ae.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),me===!0&&O.cameras.push(Ae)}const ue=i.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const L=h.getDepthInformation(Q[0]);L&&L.isValid&&L.texture&&m.init(L,i.renderState)}if(ue&&ue.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let L=0;L<Q.length;L++){const ze=Q[L].camera;if(ze){let Pe=p[ze];Pe||(Pe=new Iu,p[ze]=Pe);const Ae=h.getCameraImage(ze);Pe.sourceTexture=Ae}}}}for(let Q=0;Q<C.length;Q++){const me=b[Q],ue=C[Q];me!==null&&ue!==void 0&&ue.update(me,oe,c||a)}Ge&&Ge(ne,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const je=new ku;je.setAnimationLoop(Je),this.setAnimationLoop=function(ne){Ge=ne},this.dispose=function(){}}}const fi=new yn,bv=new we;function wv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Cu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),M=E.envMap,x=E.envMapRotation;M&&(m.envMap.value=M,fi.copy(x),fi.x*=-1,fi.y*=-1,fi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(bv.makeRotationFromEuler(fi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Av(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const x=M.program;n.uniformBlockBinding(E,x)}function c(E,M){let x=i[E.id];x===void 0&&(g(E),x=u(E),i[E.id]=x,E.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(E,C);const b=e.render.frame;r[E.id]!==b&&(f(E),r[E.id]=b)}function u(E){const M=h();E.__bindingPointIndex=M;const x=s.createBuffer(),C=E.__size,b=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,C,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=i[E.id],x=E.uniforms,C=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let b=0,D=x.length;b<D;b++){const R=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,y=R.length;S<y;S++){const I=R[S];if(d(I,b,S,C)===!0){const O=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let K=0;K<V.length;K++){const X=V[K],ce=v(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,O+W,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,W),W+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(E,M,x,C){const b=E.value,D=M+"_"+x;if(C[D]===void 0)return typeof b=="number"||typeof b=="boolean"?C[D]=b:C[D]=b.clone(),!0;{const R=C[D];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return C[D]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(E){const M=E.uniforms;let x=0;const C=16;for(let D=0,R=M.length;D<R;D++){const S=Array.isArray(M[D])?M[D]:[M[D]];for(let y=0,I=S.length;y<I;y++){const O=S[y],V=Array.isArray(O.value)?O.value:[O.value];for(let W=0,K=V.length;W<K;W++){const X=V[W],ce=v(X),Z=x%C,de=Z%ce.boundary,ge=Z+de;x+=de,ge!==0&&C-ge<ce.storage&&(x+=C-ge),O.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=ce.storage}}}const b=x%C;return b>0&&(x+=C-b),E.__size=x,E.__cache={},this}function v(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Rv{constructor(e={}){const{canvas:t=df(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const E=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let C=!1;this._outputColorSpace=Ct;let b=0,D=0,R=null,S=-1,y=null;const I=new lt,O=new lt;let V=null;const W=new Me(0);let K=0,X=t.width,ce=t.height,Z=1,de=null,ge=null;const Te=new lt(0,0,X,ce),Le=new lt(0,0,X,ce);let Ge=!1;const Je=new il;let je=!1,ne=!1;const oe=new we,Q=new w,me=new lt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function Ue(){return R===null?Z:1}let L=n;function ze(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gr}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",se,!1),L===null){const z="webgl2";if(L=ze(z,T),L===null)throw ze(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Pe,Ae,Se,et,ye,be,qe,it,A,_,G,ee,le,J,De,pe,Re,P,U,k,B,F,Y,re;function N(){Pe=new Bg(L),Pe.init(),F=new yv(L,Pe),Ae=new Pg(L,Pe,e,F),Se=new xv(L,Pe),Ae.reversedDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),et=new Hg(L),ye=new rv,be=new _v(L,Pe,Se,ye,Ae,F,et),qe=new Ig(x),it=new Og(x),A=new qd(L),Y=new Cg(L,A),_=new zg(L,A,et,Y),G=new Gg(L,_,A,et),U=new Vg(L,Ae,be),pe=new Lg(ye),ee=new sv(x,qe,it,Pe,Ae,Y,pe),le=new wv(x,ye),J=new ov,De=new dv(Pe),P=new Rg(x,qe,it,Se,G,d,l),Re=new gv(x,G,Ae),re=new Av(L,et,Ae,Se),k=new Dg(L,Pe,et),B=new kg(L,Pe,et),et.programs=ee.programs,x.capabilities=Ae,x.extensions=Pe,x.properties=ye,x.renderLists=J,x.shadowMap=Re,x.state=Se,x.info=et}N();const te=new Ev(x,L);this.xr=te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(X,ce,!1))},this.getSize=function(T){return T.set(X,ce)},this.setSize=function(T,z,q=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,ce=z,t.width=Math.floor(T*Z),t.height=Math.floor(z*Z),q===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(X*Z,ce*Z).floor()},this.setDrawingBufferSize=function(T,z,q){X=T,ce=z,Z=q,t.width=Math.floor(T*q),t.height=Math.floor(z*q),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Te)},this.setViewport=function(T,z,q,j){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,z,q,j),Se.viewport(I.copy(Te).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(Le)},this.setScissor=function(T,z,q,j){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,z,q,j),Se.scissor(O.copy(Le).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(T){Se.setScissorTest(Ge=T)},this.setOpaqueSort=function(T){de=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,q=!0){let j=0;if(T){let H=!1;if(R!==null){const he=R.texture.format;H=he===Jo||he===Qo||he===Zo}if(H){const he=R.texture.type,_e=he===Pn||he===Cn||he===Us||he===Ji||he===Ko||he===jo,Ce=P.getClearColor(),Ee=P.getClearAlpha(),Be=Ce.r,ke=Ce.g,Ne=Ce.b;_e?(g[0]=Be,g[1]=ke,g[2]=Ne,g[3]=Ee,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Be,v[1]=ke,v[2]=Ne,v[3]=Ee,L.clearBufferiv(L.COLOR,0,v))}else j|=L.COLOR_BUFFER_BIT}z&&(j|=L.DEPTH_BUFFER_BIT),q&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",se,!1),P.dispose(),J.dispose(),De.dispose(),ye.dispose(),qe.dispose(),it.dispose(),G.dispose(),Y.dispose(),re.dispose(),ee.dispose(),te.dispose(),te.removeEventListener("sessionstart",Tn),te.removeEventListener("sessionend",Ml),ri.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=et.autoReset,z=Re.enabled,q=Re.autoUpdate,j=Re.needsUpdate,H=Re.type;N(),et.autoReset=T,Re.enabled=z,Re.autoUpdate=q,Re.needsUpdate=j,Re.type=H}function se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $(T){const z=T.target;z.removeEventListener("dispose",$),xe(z)}function xe(T){Fe(T),ye.remove(T)}function Fe(T){const z=ye.get(T).programs;z!==void 0&&(z.forEach(function(q){ee.releaseProgram(q)}),T.isShaderMaterial&&ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,q,j,H,he){z===null&&(z=ue);const _e=H.isMesh&&H.matrixWorld.determinant()<0,Ce=lh(T,z,q,j,H);Se.setMaterial(j,_e);let Ee=q.index,Be=1;if(j.wireframe===!0){if(Ee=_.getWireframeAttribute(q),Ee===void 0)return;Be=2}const ke=q.drawRange,Ne=q.attributes.position;let Qe=ke.start*Be,dt=(ke.start+ke.count)*Be;he!==null&&(Qe=Math.max(Qe,he.start*Be),dt=Math.min(dt,(he.start+he.count)*Be)),Ee!==null?(Qe=Math.max(Qe,0),dt=Math.min(dt,Ee.count)):Ne!=null&&(Qe=Math.max(Qe,0),dt=Math.min(dt,Ne.count));const Et=dt-Qe;if(Et<0||Et===1/0)return;Y.setup(H,j,Ce,q,Ee);let xt,gt=k;if(Ee!==null&&(xt=A.get(Ee),gt=B,gt.setIndex(xt)),H.isMesh)j.wireframe===!0?(Se.setLineWidth(j.wireframeLinewidth*Ue()),gt.setMode(L.LINES)):gt.setMode(L.TRIANGLES);else if(H.isLine){let Oe=j.linewidth;Oe===void 0&&(Oe=1),Se.setLineWidth(Oe*Ue()),H.isLineSegments?gt.setMode(L.LINES):H.isLineLoop?gt.setMode(L.LINE_LOOP):gt.setMode(L.LINE_STRIP)}else H.isPoints?gt.setMode(L.POINTS):H.isSprite&&gt.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Pe.get("WEBGL_multi_draw"))gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Oe=H._multiDrawStarts,Mt=H._multiDrawCounts,st=H._multiDrawCount,Qt=Ee?A.get(Ee).bytesPerElement:1,Ei=ye.get(j).currentProgram.getUniforms();for(let Jt=0;Jt<st;Jt++)Ei.setValue(L,"_gl_DrawID",Jt),gt.render(Oe[Jt]/Qt,Mt[Jt])}else if(H.isInstancedMesh)gt.renderInstances(Qe,Et,H.count);else if(q.isInstancedBufferGeometry){const Oe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Mt=Math.min(q.instanceCount,Oe);gt.renderInstances(Qe,Et,Mt)}else gt.render(Qe,Et)};function He(T,z,q){T.transparent===!0&&T.side===Zt&&T.forceSinglePass===!1?(T.side=qt,T.needsUpdate=!0,js(T,z,q),T.side=Yn,T.needsUpdate=!0,js(T,z,q),T.side=Zt):js(T,z,q)}this.compile=function(T,z,q=null){q===null&&(q=T),p=De.get(q),p.init(z),M.push(p),q.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==q&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const j=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const he=H.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const Ce=he[_e];He(Ce,q,H),j.add(Ce)}else He(he,q,H),j.add(he)}),p=M.pop(),j},this.compileAsync=function(T,z,q=null){const j=this.compile(T,z,q);return new Promise(H=>{function he(){if(j.forEach(function(_e){ye.get(_e).currentProgram.isReady()&&j.delete(_e)}),j.size===0){H(T);return}setTimeout(he,10)}Pe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ze=null;function In(T){Ze&&Ze(T)}function Tn(){ri.stop()}function Ml(){ri.start()}const ri=new ku;ri.setAnimationLoop(In),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(T){Ze=T,te.setAnimationLoop(T),T===null?ri.stop():ri.start()},te.addEventListener("sessionstart",Tn),te.addEventListener("sessionend",Ml),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(z),z=te.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,z,R),p=De.get(T,M.length),p.init(z),M.push(p),oe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Je.setFromProjectionMatrix(oe,Rn,z.reversedDepth),ne=this.localClippingEnabled,je=pe.init(this.clippingPlanes,ne),m=J.get(T,E.length),m.init(),E.push(m),te.enabled===!0&&te.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&Jr(he,z,-1/0,x.sortObjects)}Jr(T,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(de,ge),Ie=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ie&&P.addToRenderList(m,T),this.info.render.frame++,je===!0&&pe.beginShadows();const q=p.state.shadowsArray;Re.render(q,T,z),je===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const he=z.cameras;if(H.length>0)for(let _e=0,Ce=he.length;_e<Ce;_e++){const Ee=he[_e];El(j,H,T,Ee)}Ie&&P.render(T);for(let _e=0,Ce=he.length;_e<Ce;_e++){const Ee=he[_e];Tl(m,T,Ee,Ee.viewport)}}else H.length>0&&El(j,H,T,z),Ie&&P.render(T),Tl(m,T,z);R!==null&&D===0&&(be.updateMultisampleRenderTarget(R),be.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(x,T,z),Y.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],je===!0&&pe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Jr(T,z,q,j){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Je.intersectsSprite(T)){j&&me.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);const _e=G.update(T),Ce=T.material;Ce.visible&&m.push(T,_e,Ce,q,me.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Je.intersectsObject(T))){const _e=G.update(T),Ce=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),me.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),me.copy(_e.boundingSphere.center)),me.applyMatrix4(T.matrixWorld).applyMatrix4(oe)),Array.isArray(Ce)){const Ee=_e.groups;for(let Be=0,ke=Ee.length;Be<ke;Be++){const Ne=Ee[Be],Qe=Ce[Ne.materialIndex];Qe&&Qe.visible&&m.push(T,_e,Qe,q,me.z,Ne)}}else Ce.visible&&m.push(T,_e,Ce,q,me.z,null)}}const he=T.children;for(let _e=0,Ce=he.length;_e<Ce;_e++)Jr(he[_e],z,q,j)}function Tl(T,z,q,j){const H=T.opaque,he=T.transmissive,_e=T.transparent;p.setupLightsView(q),je===!0&&pe.setGlobalState(x.clippingPlanes,q),j&&Se.viewport(I.copy(j)),H.length>0&&Ks(H,z,q),he.length>0&&Ks(he,z,q),_e.length>0&&Ks(_e,z,q),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function El(T,z,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Dt(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float")?Lt:Pn,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const he=p.state.transmissionRenderTarget[j.id],_e=j.viewport||I;he.setSize(_e.z*x.transmissionResolutionScale,_e.w*x.transmissionResolutionScale);const Ce=x.getRenderTarget(),Ee=x.getActiveCubeFace(),Be=x.getActiveMipmapLevel();x.setRenderTarget(he),x.getClearColor(W),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),Ie&&P.render(q);const ke=x.toneMapping;x.toneMapping=si;const Ne=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),je===!0&&pe.setGlobalState(x.clippingPlanes,j),Ks(T,q,j),be.updateMultisampleRenderTarget(he),be.updateRenderTargetMipmap(he),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let dt=0,Et=z.length;dt<Et;dt++){const xt=z[dt],gt=xt.object,Oe=xt.geometry,Mt=xt.material,st=xt.group;if(Mt.side===Zt&&gt.layers.test(j.layers)){const Qt=Mt.side;Mt.side=qt,Mt.needsUpdate=!0,bl(gt,q,j,Oe,Mt,st),Mt.side=Qt,Mt.needsUpdate=!0,Qe=!0}}Qe===!0&&(be.updateMultisampleRenderTarget(he),be.updateRenderTargetMipmap(he))}x.setRenderTarget(Ce,Ee,Be),x.setClearColor(W,K),Ne!==void 0&&(j.viewport=Ne),x.toneMapping=ke}function Ks(T,z,q){const j=z.isScene===!0?z.overrideMaterial:null;for(let H=0,he=T.length;H<he;H++){const _e=T[H],Ce=_e.object,Ee=_e.geometry,Be=_e.group;let ke=_e.material;ke.allowOverride===!0&&j!==null&&(ke=j),Ce.layers.test(q.layers)&&bl(Ce,z,q,Ee,ke,Be)}}function bl(T,z,q,j,H,he){T.onBeforeRender(x,z,q,j,H,he),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,z,q,j,T,he),H.transparent===!0&&H.side===Zt&&H.forceSinglePass===!1?(H.side=qt,H.needsUpdate=!0,x.renderBufferDirect(q,z,j,H,T,he),H.side=Yn,H.needsUpdate=!0,x.renderBufferDirect(q,z,j,H,T,he),H.side=Zt):x.renderBufferDirect(q,z,j,H,T,he),T.onAfterRender(x,z,q,j,H,he)}function js(T,z,q){z.isScene!==!0&&(z=ue);const j=ye.get(T),H=p.state.lights,he=p.state.shadowsArray,_e=H.state.version,Ce=ee.getParameters(T,H.state,he,z,q),Ee=ee.getProgramCacheKey(Ce);let Be=j.programs;j.environment=T.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(T.isMeshStandardMaterial?it:qe).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",$),Be=new Map,j.programs=Be);let ke=Be.get(Ee);if(ke!==void 0){if(j.currentProgram===ke&&j.lightsStateVersion===_e)return Al(T,Ce),ke}else Ce.uniforms=ee.getUniforms(T),T.onBeforeCompile(Ce,x),ke=ee.acquireProgram(Ce,Ee),Be.set(Ee,ke),j.uniforms=Ce.uniforms;const Ne=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=pe.uniform),Al(T,Ce),j.needsLights=uh(T),j.lightsStateVersion=_e,j.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMap.value=H.state.directionalShadowMap,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotShadowMap.value=H.state.spotShadowMap,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMap.value=H.state.pointShadowMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=ke,j.uniformsList=null,ke}function wl(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Ir.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Al(T,z){const q=ye.get(T);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function lh(T,z,q,j,H){z.isScene!==!0&&(z=ue),be.resetTextureUnits();const he=z.fog,_e=j.isMeshStandardMaterial?z.environment:null,Ce=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:kt,Ee=(j.isMeshStandardMaterial?it:qe).get(j.envMap||_e),Be=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ke=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ne=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,dt=!!q.morphAttributes.color;let Et=si;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Et=x.toneMapping);const xt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,gt=xt!==void 0?xt.length:0,Oe=ye.get(j),Mt=p.state.lights;if(je===!0&&(ne===!0||T!==y)){const Ht=T===y&&j.id===S;pe.setState(j,T,Ht)}let st=!1;j.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Mt.state.version||Oe.outputColorSpace!==Ce||H.isBatchedMesh&&Oe.batching===!1||!H.isBatchedMesh&&Oe.batching===!0||H.isBatchedMesh&&Oe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Oe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Oe.instancing===!1||!H.isInstancedMesh&&Oe.instancing===!0||H.isSkinnedMesh&&Oe.skinning===!1||!H.isSkinnedMesh&&Oe.skinning===!0||H.isInstancedMesh&&Oe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Oe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Oe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Oe.instancingMorph===!1&&H.morphTexture!==null||Oe.envMap!==Ee||j.fog===!0&&Oe.fog!==he||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==pe.numPlanes||Oe.numIntersection!==pe.numIntersection)||Oe.vertexAlphas!==Be||Oe.vertexTangents!==ke||Oe.morphTargets!==Ne||Oe.morphNormals!==Qe||Oe.morphColors!==dt||Oe.toneMapping!==Et||Oe.morphTargetsCount!==gt)&&(st=!0):(st=!0,Oe.__version=j.version);let Qt=Oe.currentProgram;st===!0&&(Qt=js(j,z,H));let Ei=!1,Jt=!1,fs=!1;const Tt=Qt.getUniforms(),nn=Oe.uniforms;if(Se.useProgram(Qt.program)&&(Ei=!0,Jt=!0,fs=!0),j.id!==S&&(S=j.id,Jt=!0),Ei||y!==T){Se.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Tt.setValue(L,"projectionMatrix",T.projectionMatrix),Tt.setValue(L,"viewMatrix",T.matrixWorldInverse);const Kt=Tt.map.cameraPosition;Kt!==void 0&&Kt.setValue(L,Q.setFromMatrixPosition(T.matrixWorld)),Ae.logarithmicDepthBuffer&&Tt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Tt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Jt=!0,fs=!0)}if(H.isSkinnedMesh){Tt.setOptional(L,H,"bindMatrix"),Tt.setOptional(L,H,"bindMatrixInverse");const Ht=H.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Tt.setValue(L,"boneTexture",Ht.boneTexture,be))}H.isBatchedMesh&&(Tt.setOptional(L,H,"batchingTexture"),Tt.setValue(L,"batchingTexture",H._matricesTexture,be),Tt.setOptional(L,H,"batchingIdTexture"),Tt.setValue(L,"batchingIdTexture",H._indirectTexture,be),Tt.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&Tt.setValue(L,"batchingColorTexture",H._colorsTexture,be));const sn=q.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&U.update(H,q,Qt),(Jt||Oe.receiveShadow!==H.receiveShadow)&&(Oe.receiveShadow=H.receiveShadow,Tt.setValue(L,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(nn.envMap.value=Ee,nn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(nn.envMapIntensity.value=z.environmentIntensity),Jt&&(Tt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Oe.needsLights&&ch(nn,fs),he&&j.fog===!0&&le.refreshFogUniforms(nn,he),le.refreshMaterialUniforms(nn,j,Z,ce,p.state.transmissionRenderTarget[T.id]),Ir.upload(L,wl(Oe),nn,be)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ir.upload(L,wl(Oe),nn,be),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Tt.setValue(L,"center",H.center),Tt.setValue(L,"modelViewMatrix",H.modelViewMatrix),Tt.setValue(L,"normalMatrix",H.normalMatrix),Tt.setValue(L,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ht=j.uniformsGroups;for(let Kt=0,$r=Ht.length;Kt<$r;Kt++){const ai=Ht[Kt];re.update(ai,Qt),re.bind(ai,Qt)}}return Qt}function ch(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function uh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,z,q){const j=ye.get(T);j.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),ye.get(T.texture).__webglTexture=z,ye.get(T.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const q=ye.get(T);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const hh=L.createFramebuffer();this.setRenderTarget=function(T,z=0,q=0){R=T,b=z,D=q;let j=!0,H=null,he=!1,_e=!1;if(T){const Ee=ye.get(T);if(Ee.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(L.FRAMEBUFFER,null),j=!1;else if(Ee.__webglFramebuffer===void 0)be.setupRenderTarget(T);else if(Ee.__hasExternalTextures)be.rebindTextures(T,ye.get(T.texture).__webglTexture,ye.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ne=T.depthTexture;if(Ee.__boundDepthTexture!==Ne){if(Ne!==null&&ye.has(Ne)&&(T.width!==Ne.image.width||T.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(T)}}const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(_e=!0);const ke=ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[z])?H=ke[z][q]:H=ke[z],he=!0):T.samples>0&&be.useMultisampledRTT(T)===!1?H=ye.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?H=ke[q]:H=ke,I.copy(T.viewport),O.copy(T.scissor),V=T.scissorTest}else I.copy(Te).multiplyScalar(Z).floor(),O.copy(Le).multiplyScalar(Z).floor(),V=Ge;if(q!==0&&(H=hh),Se.bindFramebuffer(L.FRAMEBUFFER,H)&&j&&Se.drawBuffers(T,H),Se.viewport(I),Se.scissor(O),Se.setScissorTest(V),he){const Ee=ye.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ee.__webglTexture,q)}else if(_e){const Ee=z;for(let Be=0;Be<T.textures.length;Be++){const ke=ye.get(T.textures[Be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Be,ke.__webglTexture,q,Ee)}}else if(T!==null&&q!==0){const Ee=ye.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ee.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(T,z,q,j,H,he,_e,Ce=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){Se.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const Be=T.textures[Ce],ke=Be.format,Ne=Be.type;if(!Ae.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-j&&q>=0&&q<=T.height-H&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ce),L.readPixels(z,q,j,H,F.convert(ke),F.convert(Ne),he))}finally{const Be=R!==null?ye.get(R).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,z,q,j,H,he,_e,Ce=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee)if(z>=0&&z<=T.width-j&&q>=0&&q<=T.height-H){Se.bindFramebuffer(L.FRAMEBUFFER,Ee);const Be=T.textures[Ce],ke=Be.format,Ne=Be.type;if(!Ae.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ce),L.readPixels(z,q,j,H,F.convert(ke),F.convert(Ne),0);const dt=R!==null?ye.get(R).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,dt);const Et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await pf(L,Et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.deleteBuffer(Qe),L.deleteSync(Et),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,q=0){const j=Math.pow(2,-q),H=Math.floor(T.image.width*j),he=Math.floor(T.image.height*j),_e=z!==null?z.x:0,Ce=z!==null?z.y:0;be.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,_e,Ce,H,he),Se.unbindTexture()};const fh=L.createFramebuffer(),dh=L.createFramebuffer();this.copyTextureToTexture=function(T,z,q=null,j=null,H=0,he=null){he===null&&(H!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=H,H=0):he=0);let _e,Ce,Ee,Be,ke,Ne,Qe,dt,Et;const xt=T.isCompressedTexture?T.mipmaps[he]:T.image;if(q!==null)_e=q.max.x-q.min.x,Ce=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,Be=q.min.x,ke=q.min.y,Ne=q.isBox3?q.min.z:0;else{const sn=Math.pow(2,-H);_e=Math.floor(xt.width*sn),Ce=Math.floor(xt.height*sn),T.isDataArrayTexture?Ee=xt.depth:T.isData3DTexture?Ee=Math.floor(xt.depth*sn):Ee=1,Be=0,ke=0,Ne=0}j!==null?(Qe=j.x,dt=j.y,Et=j.z):(Qe=0,dt=0,Et=0);const gt=F.convert(z.format),Oe=F.convert(z.type);let Mt;z.isData3DTexture?(be.setTexture3D(z,0),Mt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(be.setTexture2DArray(z,0),Mt=L.TEXTURE_2D_ARRAY):(be.setTexture2D(z,0),Mt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const st=L.getParameter(L.UNPACK_ROW_LENGTH),Qt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ei=L.getParameter(L.UNPACK_SKIP_PIXELS),Jt=L.getParameter(L.UNPACK_SKIP_ROWS),fs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Be),L.pixelStorei(L.UNPACK_SKIP_ROWS,ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ne);const Tt=T.isDataArrayTexture||T.isData3DTexture,nn=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const sn=ye.get(T),Ht=ye.get(z),Kt=ye.get(sn.__renderTarget),$r=ye.get(Ht.__renderTarget);Se.bindFramebuffer(L.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let ai=0;ai<Ee;ai++)Tt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(T).__webglTexture,H,Ne+ai),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(z).__webglTexture,he,Et+ai)),L.blitFramebuffer(Be,ke,_e,Ce,Qe,dt,_e,Ce,L.DEPTH_BUFFER_BIT,L.NEAREST);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||ye.has(T)){const sn=ye.get(T),Ht=ye.get(z);Se.bindFramebuffer(L.READ_FRAMEBUFFER,fh),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,dh);for(let Kt=0;Kt<Ee;Kt++)Tt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,sn.__webglTexture,H,Ne+Kt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,sn.__webglTexture,H),nn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ht.__webglTexture,he,Et+Kt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ht.__webglTexture,he),H!==0?L.blitFramebuffer(Be,ke,_e,Ce,Qe,dt,_e,Ce,L.COLOR_BUFFER_BIT,L.NEAREST):nn?L.copyTexSubImage3D(Mt,he,Qe,dt,Et+Kt,Be,ke,_e,Ce):L.copyTexSubImage2D(Mt,he,Qe,dt,Be,ke,_e,Ce);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else nn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Mt,he,Qe,dt,Et,_e,Ce,Ee,gt,Oe,xt.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Mt,he,Qe,dt,Et,_e,Ce,Ee,gt,xt.data):L.texSubImage3D(Mt,he,Qe,dt,Et,_e,Ce,Ee,gt,Oe,xt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,Qe,dt,_e,Ce,gt,Oe,xt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,Qe,dt,xt.width,xt.height,gt,xt.data):L.texSubImage2D(L.TEXTURE_2D,he,Qe,dt,_e,Ce,gt,Oe,xt);L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ei),L.pixelStorei(L.UNPACK_SKIP_ROWS,Jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,fs),he===0&&z.generateMipmaps&&L.generateMipmap(Mt),Se.unbindTexture()},this.initRenderTarget=function(T){ye.get(T).__webglFramebuffer===void 0&&be.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?be.setTextureCube(T,0):T.isData3DTexture?be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?be.setTexture2DArray(T,0):be.setTexture2D(T,0),Se.unbindTexture()},this.resetState=function(){b=0,D=0,R=null,Se.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class Cv{track=new Audio("./assets/flower-sea/audio/BGM_131.mp3");active=!1;constructor(){this.track.loop=!0,this.track.volume=.48,this.track.preload="metadata"}get playing(){return this.active}get snapshot(){return{playing:this.active,paused:this.track.paused,track:"BGM_131",currentTime:this.track.currentTime,duration:this.track.duration,readyState:this.track.readyState}}async toggle(){return this.active?(this.track.pause(),this.active=!1):(await this.track.play(),this.active=!0),this.active}setWeather(e){}dispose(){this.track.pause(),this.track.removeAttribute("src"),this.track.load()}}const Dv={position:[20,0,-62],rotation:-.3,halfWidth:8.8,halfDepth:6.5},Pv={minX:-66,maxX:73,minZ:-115,maxZ:54},Lv={width:300,depth:300,centerZ:-35},Iv={front:{label:"前视",eye:[1.8,9.4,32],target:[2,4,-23]},left:{label:"左视",eye:[-90,45,-28],target:[2,3,-28]},back:{label:"后视",eye:[12,25,-105],target:[1,3,-12]},top:{label:"俯视",eye:[3,225,-30.9],target:[3,0,-31]}},mn={cottage:Dv,walkBounds:Pv,terrain:Lv,views:Iv},Xu=mn.views;function Bo(s,e,t=0){const[n,,i]=mn.cottage.position,r=mn.cottage.rotation,a=s-n,o=e-i,l=a*Math.cos(r)-o*Math.sin(r),c=a*Math.sin(r)+o*Math.cos(r);return Math.abs(l)<mn.cottage.halfWidth+t&&Math.abs(c)<mn.cottage.halfDepth+t}const tn=s=>-18+Math.sin(s*.16)*2.3,vl=[{id:"entry-bridge",z:1},{id:"valley-bridge",z:-64}];function rt(s,e){const t=(c,u,h,f,d)=>d*Math.exp(-((s-c)**2/h+(e-u)**2/f)),n=-.6+t(-8,-2,75,45,1.25)+t(12,1,70,55,1.55),i=t(-28,-18,95,120,3.8)+t(24,-25,140,110,4.2)+t(0,-36,200,65,3.3),r=t(3,-38,900,600,.9)+t(20,-62,600,700,3.4),o=Math.max(0,Math.min(1,(Math.hypot(s,e*.8)-73)/32))*(1.7+Math.sin(s*.06+e*.04)+.6*Math.cos(e*.09-s*.03)+t(-35,-124,900,500,17)+t(40,-128,750,550,20)),l=.72*Math.exp(-((s-tn(e))**2)/.8);return n+i+r+o-l+.22*Math.sin(s*.19+e*.28)+.09*Math.cos(s*.53-e*.31)}const Yu=[[[2,22],[1,13],[2,7],[0,3],[-4,-1],[-7,-4],[-12,-8],[-14,-4],[-14,1],[-18,1],[-24,1],[-27,-4],[-26,-9],[-29,-2],[-24,6],[-18,1],[-11,7],[-5,14],[2,22]],[[0,3],[6,-1],[9,-5],[12,-12],[17,-15],[24,-19],[28,-13],[25,-5],[22,1],[21,9],[15,14],[7,13],[2,7]],[[6,-1],[8,-12],[5,-23],[10,-35],[17,-47],[20,-53],[29,-51],[34,-60],[31,-73],[17,-78],[7,-71],[7,-59],[6,-51],[10,-47],[17,-47]],[[2,22],[-4,32],[-8,44],[7,50],[27,46],[40,33],[31,20],[21,9]],[[24,-19],[39,-11],[55,-17],[64,-37],[61,-61],[50,-80],[35,-82],[31,-73]],[[-24,1],[-37,5],[-51,-5],[-58,-25],[-53,-45],[-43,-62],[-29,-64],[tn(-64),-64],[-8,-64],[7,-59]],[[17,-78],[14,-91],[1,-102],[-7,-98],[-10,-84],[7,-71]]];function bs(s,e){let t=1/0;for(const n of Yu)for(let i=1;i<n.length;i++){const[r,a]=n[i-1],[o,l]=n[i],c=Math.max(0,Math.min(1,((s-r)*(o-r)+(e-a)*(l-a))/((o-r)**2+(l-a)**2)));t=Math.min(t,Math.hypot(s-r-(o-r)*c,e-a-(l-a)*c))}return t}const Nv=[{id:"south-meadow",label:"南风花海",position:[9,0,45],view:{eye:[4,4.8,51],target:[9,.8,29]}},{id:"east-meadow",label:"东侧花浪坡",position:[61,0,-38],view:{eye:[67,5.5,-30],target:[44,1.2,-48]}},{id:"west-meadow",label:"溪西花谷",position:[-53,0,-43],view:{eye:[-60,5,-35],target:[-39,1,-55]}},{id:"north-lookout",label:"花丘远眺",position:[1,0,-102],view:{eye:[1,22,-110],target:[16,2,-77]}},{id:"flower-path",label:"藤蔓花径",position:[-2,0,5],view:{eye:[-.5,5.2,9],target:[-7,3,-4]}},{id:"brook-bridge",label:"溪畔木桥",position:[-17.6,0,1],view:{eye:[-12,4.4,9],target:[-18,.9,1]}},{id:"secret-grove",label:"林间小憩",position:[-25,0,-9],view:{eye:[-20,4,-1],target:[-25,1.7,-9]}},{id:"cottage-garden",label:"远方花屋",position:[22,0,-51],view:{eye:[5,8,-37],target:[20,4.5,-62]}},{id:"pink-flower",label:"粉花露台",position:[14,0,13],view:{eye:[4,4.8,16],target:[13,2.3,6]}}];function Uv(s,e){for(const t of vl)if(Math.abs(e-t.z)<1.15&&Math.abs(s-tn(t.z))<3.4){const n=Math.max(0,Math.min(1,(s-tn(t.z)+3.25)/6.48));return rt(tn(t.z)+3.4,t.z)+.385+.2*Math.sin(n*Math.PI)}return rt(s,e)}function xl(s,e){const t=mn.walkBounds;return!(s<t.minX||s>t.maxX||e<t.minZ||e>t.maxZ||Math.abs(s-tn(e))<1&&!vl.some(n=>Math.abs(e-n.z)<1.05)||Bo(s,e,.4)||Math.hypot(s-13,e-6)<4.5||Math.hypot(s+15,e-5)<1.25||Math.hypot(s-17,e+2)<1.4)}function Fv(s,e,t,n,i=xl){const r=Math.max(1,Math.ceil(Math.hypot(t,n)/.1));for(let a=0;a<r;a++)i(s+t/r,e)&&(s+=t/r),i(s,e+n/r)&&(e+=n/r);return[s,e]}const Wc={type:"change"},_l={type:"start"},qu={type:"end"},br=new Gs,Xc=new ni,Ov=Math.cos(70*Si.DEG2RAD),Pt=new w,jt=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ba=1e-6;class Bv extends Xd{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new Ln,this._lastTargetPosition=new w,this._quat=new Ln().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _c,this._sphericalDelta=new _c,this._scale=1,this._panOffset=new w,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new w,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kv.bind(this),this._onPointerDown=zv.bind(this),this._onPointerUp=Hv.bind(this),this._onContextMenu=Kv.bind(this),this._onMouseWheel=Wv.bind(this),this._onKeyDown=Xv.bind(this),this._onTouchStart=Yv.bind(this),this._onTouchMove=qv.bind(this),this._onMouseDown=Vv.bind(this),this._onMouseMove=Gv.bind(this),this._interceptControlDown=jv.bind(this),this._interceptControlUp=Zv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wc),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;Pt.copy(t).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=jt:n>Math.PI&&(n-=jt),i<-Math.PI?i+=jt:i>Math.PI&&(i-=jt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new w(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(br.origin.copy(this.object.position),br.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(br.direction))<Ov?this.object.lookAt(this.target):(Xc.setFromNormalAndCoplanarPoint(this.object.up,this.target),br.intersectPlane(Xc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ba||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ba||this._lastTargetPosition.distanceToSquared(this.target)>Ba?(this.dispatchEvent(Wc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jt/60*this.autoRotateSpeed*e:jt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pt.setFromMatrixColumn(t,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,t){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(t,1):(Pt.setFromMatrixColumn(t,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Pt.copy(i).sub(this.target);let r=Pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function zv(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function kv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Hv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qu),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Vv(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=mt.DOLLY;break;case Wi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=mt.ROTATE}break;case Wi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(_l)}function Gv(s){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Wv(s){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(s.preventDefault(),this.dispatchEvent(_l),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(qu))}function Xv(s){this.enabled!==!1&&this._handleKeyDown(s)}function Yv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=mt.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=mt.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(_l)}function qv(s){switch(this._trackPointer(s),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=mt.NONE}}function Kv(s){this.enabled!==!1&&s.preventDefault()}function jv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zo(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new St;let c=0;for(let u=0;u<s.length;++u){const h=s[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const h=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Yc(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let v=0;v<a[u].length;++v)d.push(a[u][v][f]);const g=Yc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Yc(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new wt(a,t,n);let l=0;for(let c=0;c<s.length;++c){const u=s[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){const v=u.getComponent(f,g);o.setComponent(f+h,g,v)}}else a.set(u.array,l);l+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function qc(s,e){if(e===zh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Co||e===yu){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Co)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class gi extends Ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tx(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new mx(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Ns.extractUrlBase(e);a=Ns.resolveURL(c,this.path)}else a=Ns.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new hl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ku){try{a[Ke.KHR_BINARY_GLTF]=new gx(e)}catch(h){i&&i(h);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Cx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ke.KHR_MATERIALS_UNLIT:a[h]=new $v;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[h]=new vx(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[h]=new xx;break;case Ke.KHR_MESH_QUANTIZATION:a[h]=new _x;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Qv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Jv{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Me(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],kt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Uo(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Bu(u),c.distance=h;break;case"spot":c=new Pd(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),En(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class $v{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return ii}extendParams(e,t,n){const i=[];e.color=new Me(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],kt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(i)}}class ex{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class tx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(o,o)}return Promise.all(r)}}class nx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class ix{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class sx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],kt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ct)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class rx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class ax{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(o[0],o[1],o[2],kt),Promise.all(r)}}class ox{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class lx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(o[0],o[1],o[2],kt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ct)),Promise.all(r)}}class cx{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class ux{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class hx{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class fx{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class dx{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class px{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class mx{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==an.TRIANGLES&&c.mode!==an.TRIANGLE_STRIP&&c.mode!==an.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const v=new we,m=new w,p=new Ln,E=new w(1,1,1),M=new ti(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&E.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,v.compose(m,p,E));for(const x in l)if(x==="_COLOR_0"){const C=l[x];M.instanceColor=new Lo(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);yt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Ku="glTF",Ss=12,Kc={JSON:1313821514,BIN:5130562};class gx{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ss),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ku)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ss,r=new DataView(e,Ss);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Kc.JSON){const c=new Uint8Array(e,Ss+a,o);this.content=n.decode(c)}else if(l===Kc.BIN){const c=Ss+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=ko[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=ko[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=qi[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const v=d.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(d)},o,c,kt,f)})})}}class xx{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _x{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class ju extends Ws{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,v=g-c,m=-2*d+3*f,p=d-f,E=1-m,M=p-f+h;for(let x=0;x!==o;x++){const C=a[v+x+o],b=a[v+x+l]*u,D=a[g+x+o],R=a[g+x]*u;r[x]=E*C+M*b+m*D+p*R}return r}}const yx=new Ln;class Sx extends ju{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return yx.fromArray(r).normalize().toArray(r),r}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jc={9728:_t,9729:pt,9984:fu,9985:Rr,9986:Ts,9987:An},Zc={33071:wn,33648:Ur,10497:Dn},za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ko={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Mx={CUBICSPLINE:void 0,LINEAR:Os,STEP:Fs},ka={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Tx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Wt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),s.DefaultMaterial}function di(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function En(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ex(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function bx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wx(s){let e;const t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ha(t.attributes):e=s.indices+":"+Ha(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ha(s.targets[n]);return e}function Ha(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ho(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ax(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Rx=new we;class Cx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new fl(this.options.manager):this.textureLoader=new Nd(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return di(r,o,i),En(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ns.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=za[i.type],o=qi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new wt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=za[i.type],c=qi[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(d&&d!==h){const p=Math.floor(f/d),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(E);M||(v=new c(o,p*d,i.count*d/u),M=new Vf(v,d/u),t.cache.add(E,M)),m=new tl(M,l,f%d/u,g)}else o===null?v=new c(i.count*l):v=new c(o,f,i.count*l),m=new wt(v,l,g);if(i.sparse!==void 0){const p=za.SCALAR,E=qi[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,C=new E(a[1],M,i.sparse.count*p),b=new c(a[2],x,i.sparse.count*l);o!==null&&(m=new wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let D=0,R=C.length;D<R;D++){const S=C[D];if(m.setX(S,b[D*l]),l>=2&&m.setY(S,b[D*l+1]),l>=3&&m.setZ(S,b[D*l+2]),l>=4&&m.setW(S,b[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=jc[f.magFilter]||pt,u.minFilter=jc[f.minFilter]||An,u.wrapS=Zc[f.wrapS]||Dn,u.wrapT=Zc[f.wrapT]||Dn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==_t&&u.minFilter!==pt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){const m=new bt(v);m.needsUpdate=!0,f(m)}),t.load(Ns.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),En(h,a),h.userData.mimeType=a.mimeType||Ax(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new al,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new sl,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Wt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const h=i[Ke.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Me(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],kt),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Ct)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Zt);const u=r.alphaMode||ka.OPAQUE;if(u===ka.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ka.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ii&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new fe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==ii&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ii){const h=r.emissiveFactor;o.emissive=new Me().setRGB(h[0],h[1],h[2],kt)}return r.emissiveTexture!==void 0&&a!==ii&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),En(h,r),t.associations.set(h,{materials:e}),r.extensions&&di(i,h,r),h})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Qc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=wx(c),h=i[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Qc(new St,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Tx(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const v=u[d],m=a[d];let p;const E=c[d];if(m.mode===an.TRIANGLES||m.mode===an.TRIANGLE_STRIP||m.mode===an.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Wf(v,E):new at(v,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===an.TRIANGLE_STRIP?p.geometry=qc(p.geometry,yu):m.mode===an.TRIANGLE_FAN&&(p.geometry=qc(p.geometry,Co));else if(m.mode===an.LINES)p=new Io(v,E);else if(m.mode===an.LINE_STRIP)p=new rl(v,E);else if(m.mode===an.LINE_LOOP)p=new Zf(v,E);else if(m.mode===an.POINTS)p=new kr(v,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&bx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),En(p,r),m.extensions&&di(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&di(i,h[0],r),h[0];const f=new gn;r.extensions&&di(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(Si.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Xs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),En(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new we;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new nl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],v=d.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,E=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",E)),c.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let M=0,x=f.length;M<x;M++){const C=f[M],b=d[M],D=g[M],R=v[M],S=m[M];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const y=n._createAnimationTracks(C,b,D,R,S);if(y)for(let I=0;I<y.length;I++)p.push(y[I])}const E=new Sd(r,void 0,p);return En(E,i),E})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Rx)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Lu:c.length>1?u=new gn:c.length===1?u=c[0]:u=new yt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),En(u,r),r.extensions&&di(n,u,r),r.matrix!==void 0){const h=new we;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new gn;n.name&&(r.name=i.createUniqueName(n.name)),En(r,n),n.extensions&&di(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof _n||f instanceof bt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];ei[r.path]===ei.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(ei[r.path]){case ei.weights:c=is;break;case ei.rotation:c=ss;break;case ei.translation:case ei.scale:c=rs;break;default:switch(n.itemSize){case 1:c=is;break;case 2:case 3:default:c=rs;break}break}const u=i.interpolation!==void 0?Mx[i.interpolation]:Os,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+ei[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ho(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ss?Sx:ju;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Dx(s,e,t){const n=e.attributes,i=new ln;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),o.normalized){const u=Ho(qi[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new w,l=new w;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const v=Ho(qi[f.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Sn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Qc(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=ko[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return $e.workingColorSpace!==kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),En(s,e),Dx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ex(s,e.targets,t):s})}function Px(s){const e=new Map,t=new Map,n=s.clone();return Zu(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Zu(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Zu(s.children[n],e.children[n],t)}const Jc=[{x:-7,z:12,rx:11,rz:11,angle:-.3,palette:[0,1]},{x:12,z:-22,rx:15,rz:18,angle:.2,palette:[1,3]},{x:-2,z:37,rx:12,rz:15,angle:-.3,palette:[0,1]},{x:22,z:38,rx:18,rz:13,angle:.15,palette:[1,3]},{x:45,z:-8,rx:14,rz:17,angle:-.5,palette:[0,1]},{x:51,z:-38,rx:16,rz:20,angle:.15,palette:[1,3]},{x:46,z:-72,rx:16,rz:13,angle:.4,palette:[2,1]},{x:-43,z:-9,rx:14,rz:17,angle:-.2,palette:[1,2]},{x:-48,z:-39,rx:15,rz:21,angle:-.1,palette:[0,1]},{x:-39,z:-65,rx:15,rz:16,angle:-.8,palette:[2,1]},{x:5,z:-94,rx:17,rz:15,angle:-.2,palette:[1,3]},{x:32,z:-88,rx:15,rz:11,angle:.4,palette:[0,1]}],Lx=[3200,4900,600,5300];function Ix(){let s=641275;const e=()=>(s=Math.imul(s,1664525)+1013904223|0,(s>>>0)/4294967296);return Lx.map((t,n)=>{const i=Jc.map(o=>o.rx*o.rz*(o.palette.includes(n)?1:.08)),r=i.reduce((o,l)=>o+l,0),a=[];for(let o=0;o<t*18&&a.length<t;o++){let l=e()*r,c=0;for(;c<i.length-1&&l>i[c];)l-=i[c++];const u=Jc[c],h=e()*Math.PI*2,f=Math.sqrt(e()),d=Math.cos(h)*f*u.rx,g=Math.sin(h)*f*u.rz,v=u.x+d*Math.cos(u.angle)-g*Math.sin(u.angle),m=u.z+d*Math.sin(u.angle)+g*Math.cos(u.angle);!xl(v,m)||Math.abs(v-tn(m))<1.5||bs(v,m)<1.05||f>.75&&e()>.55+.3*Math.sin(v*.75+m*.93)||a.push({x:v,y:rt(v,m)-.015,z:m,scale:.72+e()*.5,rotation:e()*Math.PI*2,lean:(e()-.5)*.16})}return a})}function Qu(s){const e=new al({...s,transparent:!0,depthWrite:!1});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <logdepthbuf_vertex>",`#include <logdepthbuf_vertex>
gl_PointSize=min(gl_PointSize,7.0);`),t.fragmentShader=t.fragmentShader.replace("#include <map_particle_fragment>",`#include <map_particle_fragment>
      float radius=length(gl_PointCoord-.5)*2.;
      diffuseColor.a*=pow(max(0.,1.-radius*radius),2.);
      if(diffuseColor.a<.015)discard;`)},e}function ws(s,e){if(!(s instanceof Wt)||s.userData.gardenFinish||(s.userData.gardenFinish=e,s.envMapIntensity=e==="house"?.85:1,s.metalness=0,s.roughness=e==="leaf"?.8:e==="petal"?.72:e==="bark"?.96:.9,s.normalMap&&s.normalScale.setScalar(e==="house"?.55:e==="bark"?.65:.4),s instanceof cn&&(s.specularColor.setRGB(1,1,1),s.specularIntensity=.65,e==="petal"&&(s.sheen=.3,s.sheenColor.set("#ffdfd4"),s.sheenRoughness=.8)),e==="house"||e==="bark"))return;const t=s.onBeforeCompile,n=s.customProgramCacheKey();s.customProgramCacheKey=()=>n+":garden-finish-"+e,s.onBeforeCompile=(i,r)=>{t.call(s,i,r),e==="organic"&&(i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      // Lift shadows baked into generated albedo; real lighting supplies the
      // shading. Keep whites and the texture's hand-painted vein detail.
      diffuseColor.rgb=mix(diffuseColor.rgb,sqrt(max(diffuseColor.rgb,0.))* .82,.30);`)),i.fragmentShader=i.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
      // Preserve the supplied roughness variation without the wet-looking
      // mid-grey roughness atlas on the generated vine.
      roughnessFactor=clamp(roughnessFactor,${e==="petal"?".66":".74"},.94);`),i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      #if NUM_DIR_LIGHTS > 0
        float gardenBacklight=pow(clamp(dot(-normal,directionalLights[0].direction)*.5+.5,0.,1.),3.);
        // Thin-surface backscatter approximation, tied to the actual sun so it
        // disappears at night. Not an emissive or a screen-space glow.
        reflectedLight.directDiffuse+=diffuseColor.rgb*directionalLights[0].color*gardenBacklight*${e==="petal"?".09":".055"};
      #endif`)},s.needsUpdate=!0}const Ms=s=>()=>(s=Math.imul(s,1664525)+1013904223|0,(s>>>0)/4294967296),Ju=(s=1,e=.22)=>{const t=new St;return t.setAttribute("position",new ct([0,0,0,-e,.3*s,.025*s,-e*.8,.7*s,.1*s,0,s,.17*s,e*.8,.7*s,.1*s,e,.3*s,.025*s,0,.48*s,.14*s],3)),t.setIndex([0,1,6,1,2,6,2,3,6,3,4,6,4,5,6,5,0,6]),t.computeVertexNormals(),t};function Nx(s,e){const t=[],n=[];for(let r=0;r<=5;r++){const a=r/5,o=e*(.035+Math.pow(Math.sin(a*Math.PI),.72));for(let l=0;l<=2;l++){const c=l-1;t.push(c*o,a*s,(Math.sin(a*Math.PI)*.14+a*a*.13+(1-c*c)*.08)*s)}if(r<5)for(let l=0;l<2;l++){const c=r*3+l;n.push(c,c+1,c+3,c+1,c+4,c+3)}}const i=new St;return i.setAttribute("position",new ct(t,3)),i.setIndex(n),i.computeVertexNormals(),i}function Vo(s,e){let t=s.index?s.toNonIndexed():s;t.deleteAttribute("uv");const n=new Me(e),i=[];for(let r=0;r<t.attributes.position.count;r++)i.push(n.r,n.g,n.b);return t.setAttribute("color",new ct(i,3)),t}function Ux(){const s=[];for(let t=0;t<3;t++){const n=t*Math.PI*2/3,i=new Ps([new w,new w(0,.28,.2),new w(0,.4,.48),new w(0,.32,.72)]),r=new ul(i,6,.008,4,!1);r.rotateY(n),s.push(Vo(r,"#6e8a47"));for(let a=0;a<6;a++)for(const o of[-1,1]){const l=.13+a*.14,c=i.getPoint(l),u=new w(o*.8,.15,.35).normalize(),h=new w().crossVectors(u,new w(0,1,0)).normalize(),f=new w().crossVectors(h,u).normalize(),d=Ju(.23*(1-l*.65),.045*(1-l*.55));d.applyMatrix4(new we().makeBasis(h,u,f)),d.translate(c.x,c.y,c.z),d.rotateY(n),s.push(Vo(d,a%2?"#6e944b":"#567f3e"))}}const e=zo(s);return s.forEach(t=>t.dispose()),e}function Fx(s){const e=Ms(918362),t={trees:0,butterflies:0,reusedFlowerClumps:0},n=new gn;n.name="layered-garden-environment",s.add(n);const i=new yt,r=new Me,a=new ns(mn.terrain.width,mn.terrain.depth,220,260);a.rotateX(-Math.PI/2),a.translate(0,0,mn.terrain.centerZ);const o=a.attributes.position,l=[];for(let P=0;P<o.count;P++){const U=o.getX(P),k=o.getZ(P),B=rt(U,k);o.setY(P,B);const F=.38+.22*Math.sin(U*.38+k*.3)+.13*Math.cos(U*.87-k*.61);r.set("#528456").lerp(new Me("#b1c76b"),Si.clamp(F+B*.025,0,1)),r.lerp(new Me("#c1d77b"),.35*Math.exp(-((U-12)**2/100+(k-2)**2/60))),r.lerp(new Me("#639c92"),Si.clamp((Math.hypot(U,k*.9)-42)/36,0,1)*.65),bs(U,k)<1.2&&r.lerp(new Me("#a6a17a"),.35),l.push(r.r,r.g,r.b)}a.setAttribute("color",new ct(l,3)),a.computeVertexNormals();const c=new Wt({vertexColors:!0,roughness:1});wr(c,"earth");const u={value:null},h={value:0},f=c.onBeforeCompile;c.onBeforeCompile=(P,U)=>{f.call(c,P,U),P.uniforms.meadowMap=u,P.uniforms.meadowReady=h,P.fragmentShader=`uniform sampler2D meadowMap;uniform float meadowReady;
`+P.fragmentShader,P.fragmentShader=P.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      vec3 paintedGrass=texture2D(meadowMap,gardenSurface.xz*.22).rgb;
      float paintedLuma=dot(paintedGrass,vec3(.2126,.7152,.0722));
      // Texture supplies fine meadow detail; broad vertex colors keep the
      // light/shade palette readable instead of tiling a flat yellow carpet.
      diffuseColor.rgb*=mix(1.,.80+paintedLuma*.8,.52*meadowReady);`)};const d=new fl().loadAsync("./assets/flower-garden/painted-meadow.png").then(P=>{P.colorSpace=Ct,P.wrapS=P.wrapT=Dn,P.anisotropy=8,u.value=P,h.value=1,c.userData.meadowTexture=P}),g=new at(a,c);g.receiveShadow=!0,n.add(g);const v=new Wt({color:"#b5aa82",roughness:.95,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1});v.onBeforeCompile=P=>{P.vertexShader=`varying vec2 pathUv;
`+P.vertexShader,P.vertexShader=P.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
pathUv=uv;`),P.fragmentShader=`varying vec2 pathUv;
`+P.fragmentShader,P.fragmentShader=P.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.a*=smoothstep(0.,.16,pathUv.x)*smoothstep(0.,.16,1.-pathUv.x);
      diffuseColor.rgb*=.96+.035*sin(pathUv.y*91.+sin(pathUv.x*18.));`)};for(const P of Yu){const U=new Ps(P.map(([N,te])=>new w(N,0,te))),k=[],B=[],F=[];for(let N=0;N<=150;N++){const te=N/150,ae=U.getPoint(te),ie=U.getTangent(te),se=new w(-ie.z,0,ie.x).normalize();for(const $ of[-1,1]){const xe=.7+.12*Math.sin(N*.41)+.08*Math.sin(N*.93),Fe=ae.x+se.x*$*xe,He=ae.z+se.z*$*xe;k.push(Fe,rt(Fe,He)+.027,He),B.push($*.5+.5,te*28)}if(N<150){const $=N*2;F.push($,$+1,$+2,$+1,$+3,$+2)}}const Y=new St;Y.setAttribute("position",new ct(k,3)),Y.setAttribute("uv",new ct(B,2)),Y.setIndex(F),Y.computeVertexNormals();const re=new at(Y,v);re.receiveShadow=!0,n.add(re)}const m=new Wt({color:"#c6bb9f",roughness:.83}),p=new ll(.65,1);p.scale(1,.16,.68),wr(m,"stone");const E=new ti(p,m,140),M=new Ps([[1,20],[1,11],[2,6],[0,3],[-4,-1],[-7,-4]].map(([P,U])=>new w(P,0,U))),x=new Ps([[6,-1],[8,-12],[5,-23],[10,-35],[17,-47],[20,-53]].map(([P,U])=>new w(P,0,U)));for(let P=0;P<140;P++){let U,k,B;if(P<28){const F=M.getPoint(P/27);U=F.x+(P%2?.22:-.22),k=F.z,B=.8+e()*.4}else if(P<92){const F=x.getPoint((P-28)/63);U=F.x+(e()-.5)*.28,k=F.z,B=.7+e()*.35}else k=-94+e()*116,U=tn(k)+(P%2?1:-1)*(1.05+e()*.8),B=.5+e();i.position.set(U,rt(U,k)+.1,k),i.rotation.set(e()*.1,e()*Math.PI,e()*.1),i.scale.set(B,1+e(),B),i.updateMatrix(),E.setMatrixAt(P,i.matrix)}E.castShadow=E.receiveShadow=!0,n.add(E);const C={value:0},b=new Wt({vertexColors:!0,roughness:.86,side:Zt});b.onBeforeCompile=P=>{P.uniforms.gardenTime=C,P.vertexShader=`uniform float gardenTime;
`+P.vertexShader,P.vertexShader=P.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
      float phase=instanceMatrix[3].x*.37+instanceMatrix[3].z*.28;
      transformed.x+=sin(gardenTime*1.1+phase)*.045*pow(max(position.y,0.0),1.7);
      #endif`)};const D=zo([0,1,2,3,4,5].map(P=>{const U=Ju(.15+P*.018,.018);return U.rotateZ((P%2?1:-1)*(.28+P*.08)),U.rotateY(P*2.4),Vo(U,P%2?"#99bd66":"#6d9c5e")})),R=new ti(D,b,6500);let S=0;for(let P=0;P<6e4&&S<6500;P++){const U=mn.walkBounds,k=U.minX+e()*(U.maxX-U.minX),B=U.minZ+e()*(U.maxZ-U.minZ);if(bs(k,B)<.95||Math.abs(k-tn(B))<1.1||Math.hypot(k-13,B-6)<4.6||Bo(k,B,1))continue;const F=.5+.5*Math.sin(k*.45+Math.cos(B*.5)*2);e()>.3+F*.65||(i.position.set(k,rt(k,B)-.02,B),i.rotation.set(0,e()*Math.PI*2,0),i.scale.setScalar(.55+e()*.85),i.updateMatrix(),R.setMatrixAt(S++,i.matrix))}R.count=S,R.receiveShadow=!0,n.add(R);const y=[[-8,8,5],[-5,2,3.6],[6,11,4.5],[7,-3,3.2],[12,-6,2.1],[17,12,4],[-23,-8,4.5],[-27,-1,3.5],[24,-14,4.8],[24,4,3.8],[-3,-11,4.8],[-11,16,4],[1,-25,4],[13,-29,4.5],[6,-41,4.2],[23,-43,4],[13,-51,3],[29,-53,3.2],[11,-72,3.6],[31,-70,3.4]],I=y.map(([P,U,k],B)=>({x:P,z:U,rx:k,rz:k*(B%2?1.65:.66),angle:B*.83,kind:B%4}));let O=0;const V=[],W=new we,K=new w(1/0,1/0,1/0);function X(P){if(!(!V.length||K.distanceToSquared(P)<2.25)){K.copy(P);for(const U of V){let k=0;for(const B of U.matrices){const F=B.elements,Y=(F[12]-P.x)**2+(F[13]-P.y)**2+(F[14]-P.z)**2;Y>=U.min&&Y<U.max&&U.mesh.setMatrixAt(k++,W.multiplyMatrices(B,U.local))}U.mesh.count=k,U.mesh.instanceMatrix.needsUpdate=!0,U.mesh.computeBoundingSphere()}}}function ce(P,U){const k=I.filter(se=>se.kind===P),B=U()<.77?k:I,F=B[Math.floor(U()*B.length)],Y=U()*Math.PI*2,re=Math.sqrt(U()),N=Math.cos(Y)*re*F.rx,te=Math.sin(Y)*re*F.rz,ae=F.x+N*Math.cos(F.angle)-te*Math.sin(F.angle),ie=F.z+N*Math.sin(F.angle)+te*Math.cos(F.angle);return bs(ae,ie)<1||Math.abs(ae-tn(ie))<1.25||Math.hypot(ae-13,ie-6)<4.1||Bo(ae,ie,.7)||re>.77&&U()>.5+.4*Math.sin(ae*2.1+ie*1.7)?null:new w(ae,rt(ae,ie)-.015,ie)}function Z(P,U,k=!0,B){P.updateMatrixWorld(!0),P.traverse(F=>{if(!(F instanceof at))return;for(const re of Array.isArray(F.material)?F.material:[F.material])k&&!re.userData.gardenFinish&&(re.onBeforeCompile=b.onBeforeCompile),ws(re,re.name.includes("petal")?"petal":"leaf");const Y=new ti(F.geometry,F.material,U.length);if(B){Y.count=0;const re={near:[0,7.5**2],meadow:[7.5**2,30**2],distant:[30**2,1/0]},[N,te]=re[B];V.push({mesh:Y,local:F.matrixWorld.clone(),matrices:U,min:N,max:te})}else U.forEach((re,N)=>Y.setMatrixAt(N,new we().multiplyMatrices(re,F.matrixWorld)));Y.castShadow=B!=="distant",Y.receiveShadow=!0,n.add(Y)})}const de=(async()=>{const P=Ms(47281),U=new gi,[k,B]=await Promise.all([U.loadAsync("./assets/flower-garden/sculpted-flowers.glb"),U.loadAsync("./assets/flower-garden/meadow-flower-lods.glb")]),F=new Map;k.scene.traverse(ie=>{if(ie instanceof at)for(const se of Array.isArray(ie.material)?ie.material:[ie.material])F.set(se.name,se)});const Y=ie=>{const se=F.get(ie.name);if(!se)throw new Error(`Missing meadow material: ${ie.name}`);return se};B.scene.traverse(ie=>{ie instanceof at&&(ie.material=Array.isArray(ie.material)?ie.material.map(Y):Y(ie.material))});const re=Ix(),N=["coral-cosmos","ivory-anemone","lilac-spires","meadow-cups"];for(const[ie,se]of N.entries()){const $=k.scene.getObjectByName(se);if(!$)throw new Error(`Missing sculpted species: ${se}`);const xe=[],Fe=[330,500,170,600][ie];for(let He=0;He<Fe*12&&xe.length<Fe;He++){const Ze=ce(ie,P);Ze&&(i.position.copy(Ze),i.rotation.set((P()-.5)*.18,P()*Math.PI*2,(P()-.5)*.2),i.scale.setScalar((ie===0?1.05:.85)+P()*.65),i.updateMatrix(),xe.push(i.matrix.clone()))}for(const He of re[ie])i.position.set(He.x,He.y,He.z),i.rotation.set(He.lean,He.rotation,-He.lean*.6),i.scale.setScalar(He.scale),i.updateMatrix(),xe.push(i.matrix.clone());Z($,xe,!0,"near");for(const He of["meadow","distant"]){const Ze=B.scene.getObjectByName(se+"-"+He);if(!Ze)throw new Error(`Missing meadow LOD: ${se}-${He}`);Z(Ze,xe,!0,He)}O+=xe.length*(ie===2?7:1)}const te=await new gi().loadAsync("./assets/flower-garden/groundcover-rosette.glb"),ae=[];for(let ie=0;ie<2500&&ae.length<300;ie++){const se=ce(ie%4,P);se&&(i.position.copy(se),i.rotation.set(0,P()*Math.PI*2,0),i.scale.setScalar(.9+P()*.6),i.updateMatrix(),ae.push(i.matrix.clone()))}Z(te.scene,ae),K.set(1/0,1/0,1/0),X(new w(1.8,8.5,29))})(),ge=(async()=>{const P=Ms(19354),U=await new gi().loadAsync("./assets/flower-garden/wild-sorrel.glb"),k=[];for(let B=0;B<1e3&&k.length<60;B++){const F=ce(B%4,P);F&&(i.position.copy(F),i.rotation.set(0,P()*Math.PI*2,0),i.scale.setScalar(.85+P()*.55),i.updateMatrix(),k.push(i.matrix.clone()))}Z(U.scene,k),t.reusedFlowerClumps=k.length})(),Te=new ti(Ux(),b,180);let Le=0;for(let P=0;P<3500&&Le<180;P++){const U=y[Math.floor(e()*y.length)],k=e()*Math.PI*2,B=U[2]*(.8+e()*.4),F=U[0]+Math.cos(k)*B,Y=U[1]+Math.sin(k)*B;bs(F,Y)<1||Math.abs(F-tn(Y))<1.1||(i.position.set(F,rt(F,Y),Y),i.rotation.set(0,e()*Math.PI*2,0),i.scale.setScalar(.65+e()*.55),i.updateMatrix(),Te.setMatrixAt(Le++,i.matrix))}Te.count=Le,Te.castShadow=Te.receiveShadow=!0,n.add(Te);const Ge={value:0},Je=new cn({color:"#4babad",roughness:.21,metalness:.05,clearcoat:.6,clearcoatRoughness:.18,transparent:!0,opacity:.92,depthWrite:!1,envMapIntensity:1.2});Je.onBeforeCompile=P=>{P.uniforms.waterTime=Ge,P.vertexShader=`uniform float waterTime;
`+P.vertexShader,P.vertexShader=P.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
      objectNormal=normalize(objectNormal+vec3(-.075*cos(position.x*5.5+position.z*1.3+waterTime),0.,-.045*cos(position.z*4.-waterTime*1.6)));`),P.vertexShader=P.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      transformed.y+=.012*sin(position.x*5.5+position.z*1.3+waterTime)+.011*sin(position.z*4.-waterTime*1.6);`)};const je=[],ne=[],oe=[];for(let P=0;P<=180;P++){const U=-155+P*237/180,k=tn(U),B=rt(k,U)+.4;if(je.push(k-.92,B,U,k+.92,B,U),ne.push(0,P/180,1,P/180),P<180){const F=P*2;oe.push(F,F+2,F+1,F+1,F+2,F+3)}}const Q=new St;Q.setAttribute("position",new ct(je,3)),Q.setAttribute("uv",new ct(ne,2)),Q.setIndex(oe),Q.computeVertexNormals(),n.add(new at(Q,Je));const me=new Wt({color:"#846145",roughness:.9}),ue=new Wt({color:"#384b42",roughness:.6,metalness:.25});wr(me,"wood");const Ie=new Map;function Ue(P,U,k,B,F,Y=0){P.rotateY(Y),P.translate(k,B,F);const re=Ie.get(U)??[];re.push(P),Ie.set(U,re)}for(const P of vl){const U=P.z,k=tn(U),B=rt(k+3.4,U)+.32;for(let F=0;F<25;F++)Ue(new on(.25,.13,2.05),me,k-3.25+F*.27,B+.2*Math.sin(F/24*Math.PI),U);for(const F of[-1,1]){Ue(new on(7.1,.14,.13),me,k,B+1.05,U+F*1.05);for(let Y=0;Y<5;Y++)Ue(new on(.14,1.05,.14),me,k-3.1+Y*1.55,B+.5,U+F*1.05)}}for(const[P,U,k]of[[-25,-10,.8],[24,-17,-1.2],[29,-50,Math.PI]]){const B=rt(P,U);for(let F=0;F<5;F++){const Y=(F-2)*.16,re=new w(0,0,Y).applyAxisAngle(new w(0,1,0),k);Ue(new on(2.1,.09,.13),me,P+re.x,B+.53,U+re.z,k)}for(let F=0;F<3;F++)Ue(new on(2.1,.12,.09),me,P+Math.sin(k)*.39,B+.88+F*.17,U+Math.cos(k)*.39,k);for(const F of[-1,1]){const Y=new w(F*.78,0,0).applyAxisAngle(new w(0,1,0),k);Ue(new on(.11,.65,.65),ue,P+Y.x,B+.3,U+Y.z,k)}}const L=new Wt({color:"#b65a49",roughness:.86});wr(L,"wood");const[ze,,Pe]=mn.cottage.position;function Ae(P,U,k,B){const F=Math.ceil(Math.hypot(k-P,B-U)/2.7),Y=Math.atan2(k-P,B-U);for(let re=0;re<=F;re++){const N=re/F,te=ze+P+(k-P)*N,ae=Pe+U+(B-U)*N,ie=rt(te,ae);if(Ue(new Hs(.08,.1,1.25,8),L,te,ie+.625,ae),Ue(new Hr(.14,.18,8),L,te,ie+1.34,ae),re<F){const se=(re+.5)/F,$=ze+P+(k-P)*se,xe=Pe+U+(B-U)*se,Fe=Math.hypot(k-P,B-U)/F+.04;for(const He of[.47,.93])Ue(new on(.1,.12,Fe),L,$,rt($,xe)+He,xe,Y)}}}Ae(-12,11,-2,11),Ae(2,11,12,11),Ae(-12,11,-12,-12),Ae(12,11,12,-12),Ae(-12,-12,12,-12);for(const[P,U]of Ie){const k=new at(zo(U),P);k.castShadow=k.receiveShadow=!0,n.add(k),U.forEach(B=>B.dispose())}const Se=[],et=new Wt({color:"#ffe0a0",emissive:"#ffb44e",emissiveIntensity:.2,roughness:.6});for(const[P,U]of[[-6,2],[18,-52],[-24,-9],[23,-16],[17,12],[-20,2],[22,-52],[20,-75]]){const k=rt(P,U),B=new at(new Hs(.045,.065,1.3,7),ue);B.position.set(P,k+.65,U),B.castShadow=!0,n.add(B);const F=new at(new qr(.15,8,6),et);F.scale.y=1.4,F.position.set(P,k+1.4,U),n.add(F);const Y=new at(new Hr(.25,.16,8),ue);Y.position.set(P,k+1.7,U),n.add(Y);const re=new Bu("#ffd19a",0,7,2);re.position.copy(F.position),n.add(re),Se.push(re)}const ye=[],be=[],qe=new w(1/0,1/0,1/0);function it(P){if(!(!ye.length||qe.distanceToSquared(P)<2.25)){qe.copy(P);for(const U of ye){let k=0;for(const B of be)B.position.distanceToSquared(P)<400===U.near&&U.mesh.setMatrixAt(k++,new we().multiplyMatrices(B.matrix,U.local));U.mesh.count=k,U.mesh.instanceMatrix.needsUpdate=!0,U.mesh.computeBoundingSphere()}}}const A=(async()=>{const P=Ms(71926),U=new gi,k=await Promise.all(["near","far"].map(B=>U.loadAsync(`./assets/flower-garden/garden-tree-${B}.glb`)));for(let B=0;B<46;B++){const F=B/46*Math.PI*2;let Y=Math.cos(F)*(31+P()*7),re=Math.sin(F)*(27+P()*6)-5;re>17&&Math.abs(Y)<24||re<-22&&Math.abs(Y-20*(20-re)/82)<10||(i.position.set(Y,rt(Y,re)-.08,re),i.rotation.set(0,P()*Math.PI*2,0),i.scale.setScalar(.75+P()*.5),i.updateMatrix(),be.push({matrix:i.matrix.clone(),position:i.position.clone()}))}for(let B=0;B<25;B++){const F=-54+P()*108,Y=-94-P()*21;i.position.set(F,rt(F,Y)-.05,Y),i.rotation.set(0,P()*Math.PI*2,0),i.scale.setScalar(.8+P()*.55),i.updateMatrix(),be.push({matrix:i.matrix.clone(),position:i.position.clone()})}for(let B=0;B<22;B++){const F=-34-P()*53,Y=(B%2?1:-1)*(35+P()*8);i.position.set(Y,rt(Y,F)-.05,F),i.rotation.set(0,P()*Math.PI*2,0),i.scale.setScalar(.65+P()*.65),i.updateMatrix(),be.push({matrix:i.matrix.clone(),position:i.position.clone()})}for(let B=0;B<18;B++){const F=.12+B/18*Math.PI*1.83,Y=Math.cos(F)*(30+P()*5),re=Math.sin(F)*(23+P()*5)-6;re>15&&Math.abs(Y)<24||(i.position.set(Y,rt(Y,re)-1.45,re),i.rotation.set(0,P()*Math.PI*2,0),i.scale.setScalar(.4+P()*.17),i.updateMatrix(),be.push({matrix:i.matrix.clone(),position:i.position.clone()}))}for(let B=0;B<210;B++){const F=B/105*Math.PI*2,Y=B<105?0:1,re=Math.cos(F)*(72+Y*25+(P()-.5)*13),N=-28+Math.sin(F)*(79+Y*29+(P()-.5)*12);i.position.set(re,rt(re,N)-.18,N),i.rotation.set(0,P()*Math.PI*2,0),i.scale.setScalar(.82+P()*.8),i.updateMatrix(),be.push({matrix:i.matrix.clone(),position:i.position.clone()})}t.trees=be.length;for(const[B,F]of k.entries()){const Y=new ln().setFromObject(F.scene),re=Y.getCenter(new w),N=9.5/Y.getSize(new w).y;F.scene.position.set(-re.x*N,-Y.min.y*N,-re.z*N),F.scene.scale.setScalar(N),F.scene.updateMatrixWorld(!0),F.scene.traverse(te=>{if(!(te instanceof at))return;for(const ie of Array.isArray(te.material)?te.material:[te.material])ie instanceof Wt&&ie.name.includes("Foliage")?(ie.alphaTest=.36,ie.transparent=!1,ie.depthWrite=!0,ie.side=Zt,ws(ie,"leaf"),ie.emissive.set("#000000"),ie.emissiveIntensity=0):ie instanceof Wt&&ws(ie,"bark");const ae=new ti(te.geometry,te.material,be.length);ae.count=0,ae.castShadow=ae.receiveShadow=!0,n.add(ae),ye.push({mesh:ae,local:te.matrixWorld.clone(),near:B===0})})}it(new w(1.8,11.8,32.5))})(),_=new gn;n.add(_);const G=[],ee=(async()=>{const P=Ms(81193),U=await new gi().loadAsync("./assets/flower-garden/garden-butterfly.glb");for(let k=0;k<8;k++){const B=new gn,F=U.scene.clone(!0);B.add(F),_.add(B);const Y=F.getObjectByName("wing-left"),re=F.getObjectByName("wing-right");if(!Y||!re)throw new Error("Butterfly wing hinges are missing");const N=y[k],te=new w(N[0],rt(N[0],N[1])+1.1,N[1]);G.push({group:B,left:Y,right:re,origin:te,phase:P()*8}),t.butterflies++}})(),le=(async()=>{const P=await new gi().loadAsync("./assets/flower-garden/garden-bellflowers.glb");P.scene.updateMatrixWorld(!0);const U=[[-10,8],[-8.2,9],[-12,6],[-9,5],[-25,-9],[10,-6],[24,-15],[14,13]];P.scene.traverse(k=>{if(!(k instanceof at))return;const B=new ti(k.geometry,k.material,U.length);for(const F of Array.isArray(k.material)?k.material:[k.material])F.userData.gardenFinish||(F.onBeforeCompile=b.onBeforeCompile),ws(F,F.name.includes("petal")?"petal":"leaf");for(const[F,[Y,re]]of U.entries())i.position.set(Y,rt(Y,re),re),i.rotation.set(0,F*2.4,0),i.scale.setScalar(1.15+F%3*.12),i.updateMatrix(),B.setMatrixAt(F,new we().multiplyMatrices(i.matrix,k.matrixWorld));B.castShadow=B.receiveShadow=!0,n.add(B)})})(),J=new ti(Nx(.1,.045),new Wt({color:"#ffd3d1",side:Zt,roughness:.83}),30),De=Array.from({length:30},()=>[e()*36-18,e()*26-13,e()*10]);n.add(J);const pe=[];function Re(P,U){const k=new vt({transparent:!0,depthWrite:!1,blending:Ki,side:Zt,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float r=length(vUv-.5)*2.;float ring=exp(-abs(r-.67)*70.);float glow=exp(-r*r*5.)*.13;gl_FragColor=vec4(1.,.85,.35,(ring*.8+glow)*(1.-smoothstep(.8,1.,r)));}"}),B=new at(new ns(U*3,U*3),k);B.rotation.x=-Math.PI/2,B.position.copy(P),n.add(B);const F=new Float32Array(84),Y=new Float32Array(28);for(let te=0;te<28;te++)Y[te]=e();const re=new St;re.setAttribute("position",new wt(F,3));const N=new kr(re,Qu({color:"#ffe9a5",size:.065,opacity:.74,blending:Ki}));N.position.copy(P),n.add(N),pe.push({origin:P,points:N,positions:F,phases:Y})}return Re(new w(1,rt(1,17)+.13,17),.6),{ready:Promise.all([A,ee,le,de,ge,d]),stats:t,get flowerTotal(){return O},addPortal:Re,treeSource:"Licensed broadleaf meshes refined in Blender; see flower-garden/SOURCE.txt",update(P,U,k){it(k),X(k),C.value=Ge.value=P,_.visible=U<.7,et.emissiveIntensity=.2+U*2.5;for(const B of Se)B.intensity=U*12;for(const B of G)B.group.position.copy(B.origin).add(new w(Math.sin(P*.31+B.phase)*1.2,Math.sin(P*.8+B.phase)*.3,Math.cos(P*.26+B.phase)*.9)),B.group.rotation.y=P*.3+B.phase,B.left.rotation.z=Math.sin(P*10+B.phase)*1.1,B.right.rotation.z=-B.left.rotation.z;J.visible=U<.7;for(let B=0;B<De.length;B++){const[F,Y,re]=De[B];i.position.set(F+Math.sin(P*.15+re)*1.4,rt(F,Y)+.4+((re-P*.17)%5+5)%5,Y+Math.cos(P*.12+re)),i.rotation.set(P*.7+re,P*.3+re,Math.sin(P*.8+re)),i.scale.setScalar(.65+B%3*.2),i.updateMatrix(),J.setMatrixAt(B,i.matrix)}J.instanceMatrix.needsUpdate=!0;for(const B of pe){for(let F=0;F<28;F++){const Y=(P*.21+B.phases[F])%1,re=F*2.4+P*.14;B.positions.set([Math.cos(re)*(.26+Y*.16),Y*1.6,Math.sin(re)*(.26+Y*.16)],F*3)}B.points.geometry.attributes.position.needsUpdate=!0}}}}function wr(s,e){s.customProgramCacheKey=()=>`garden-surface-${e}`,s.onBeforeCompile=t=>{t.vertexShader=`varying vec3 gardenSurface;
`+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
gardenSurface=position;`),t.fragmentShader=`varying vec3 gardenSurface;
      float gardenHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
      float gardenNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(mix(gardenHash(i),gardenHash(i+vec3(1,0,0)),f.x),mix(gardenHash(i+vec3(0,1,0)),gardenHash(i+vec3(1,1,0)),f.x),f.y),
        mix(mix(gardenHash(i+vec3(0,0,1)),gardenHash(i+vec3(1,0,1)),f.x),mix(gardenHash(i+vec3(0,1,1)),gardenHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
      vec3 gardenSurfaceNormal(vec3 n,float height,vec3 viewPosition){
        vec3 q0=dFdx(viewPosition),q1=dFdy(viewPosition);
        vec3 r0=cross(q1,n),r1=cross(n,q0);float det=dot(q0,r0);
        return normalize(abs(det)*n-sign(det)*(dFdx(height)*r0+dFdy(height)*r1));
      }
      `+t.fragmentShader;const n=e==="wood"?"float grain=.5+.5*sin(gardenSurface.x*5.+gardenNoise(gardenSurface*vec3(.5,8.,9.))*8.);diffuseColor.rgb*=.72+grain*.35;":e==="earth"?"float grain=gardenNoise(gardenSurface*16.);float patches=gardenNoise(gardenSurface*.9);diffuseColor.rgb*=.85+.19*grain+.14*patches;":"float grain=gardenNoise(gardenSurface*24.);diffuseColor.rgb*=.86+.22*grain;";t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${n}`);const i=e==="wood"?".006*sin(gardenSurface.x*5.+gardenNoise(gardenSurface*vec3(.5,8.,9.))*8.)":e==="earth"?".012*gardenNoise(gardenSurface*18.)":".018*gardenNoise(gardenSurface*22.)";t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      normal=gardenSurfaceNormal(normal,${i},-vViewPosition);`)}}function Ox(s,e,t,n={canWalk:xl,height:Uv,spawn:[1,17]}){const i=n.canWalk,r=n.height,a=new AbortController,o=new Set,l=new w(n.spawn[0],r(...n.spawn)+1.62,n.spawn[1]),c=new w,u=new w;let h=!1,f=0,d=-.04,g=!1,v=0,m=0;const p=()=>s.quaternion.setFromEuler(new yn(d,f,0,"YXZ"));function E(){h&&(h=!1,o.clear(),g=!1,e.enabled=!0,s.position.copy(c),e.target.copy(u),e.update())}function M(){h||(c.copy(s.position),u.copy(e.target),h=!0,e.enabled=!1,s.position.copy(l),p())}const x={signal:a.signal};window.addEventListener("keydown",b=>{if(b.code==="Escape"){E();return}h&&["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft"].includes(b.code)&&(o.add(b.code),b.preventDefault())},x),window.addEventListener("keyup",b=>o.delete(b.code),x),window.addEventListener("blur",()=>o.clear(),x),t.addEventListener("pointerdown",b=>{h&&(g=!0,v=b.clientX,m=b.clientY,t.setPointerCapture(b.pointerId))},x),t.addEventListener("pointermove",b=>{!h||!g||(f-=(b.clientX-v)*.003,d=Si.clamp(d-(b.clientY-m)*.003,-1.22,1.22),v=b.clientX,m=b.clientY,p())},x);const C=()=>{g=!1};t.addEventListener("pointerup",C,x),t.addEventListener("pointercancel",C,x);for(const b of document.querySelectorAll("[data-garden-move]")){b.addEventListener("pointerdown",D=>{D.preventDefault(),b.setPointerCapture(D.pointerId),o.add(b.dataset.gardenMove)},x);for(const D of["pointerup","pointercancel","lostpointercapture"])b.addEventListener(D,()=>o.delete(b.dataset.gardenMove),x)}return{get active(){return h},get position(){return l},start:M,stop:E,moveTo(b,D){return i(b,D)?(l.set(b,r(b,D)+1.62,D),h&&s.position.copy(l),!0):!1},lookAt(b){const D=b.clone().sub(l).normalize();f=Math.atan2(-D.x,-D.z),d=Si.clamp(Math.asin(D.y),-1.22,1.22),h&&p()},update(b){if(!h)return;let D=Number(o.has("KeyW")||o.has("ArrowUp"))-Number(o.has("KeyS")||o.has("ArrowDown")),R=Number(o.has("KeyD")||o.has("ArrowRight"))-Number(o.has("KeyA")||o.has("ArrowLeft"));const S=Math.hypot(D,R)||1;D/=S,R/=S;const y=(o.has("ShiftLeft")?5.2:2.8)*Math.min(b,.25),I=(-Math.sin(f)*D+Math.cos(f)*R)*y,O=(-Math.cos(f)*D-Math.sin(f)*R)*y;[l.x,l.z]=Fv(l.x,l.z,I,O,i),l.y=r(l.x,l.z)+1.62,s.position.copy(l),p()},dispose(){a.abort(),o.clear(),e.enabled=!0}}}function Bx(s){const e={paintedSky:{value:null},paintedReady:{value:0},zenith:{value:new Me("#42b9df")},horizon:{value:new Me("#b6e5da")},night:{value:0},dusk:{value:0},overcast:{value:0},time:{value:0}},t=new vt({side:qt,depthWrite:!1,uniforms:e,vertexShader:"varying vec3 direction;void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 direction;uniform sampler2D paintedSky;uniform vec3 zenith,horizon;
      uniform float paintedReady,time,night,dusk,overcast;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      void main(){
        vec3 d=normalize(direction);
        vec2 uv=vec2(fract(atan(d.z,d.x)/6.2831853+.80),asin(clamp(d.y,-1.,1.))/3.14159265+.5);
        vec3 gradient=mix(horizon,zenith,smoothstep(0.,.8,d.y));
        vec3 painted=texture2D(paintedSky,uv).rgb;
        float seam=1.-smoothstep(0.,.035,min(uv.x,1.-uv.x));
        vec3 seamColor=(texture2D(paintedSky,vec2(.01,uv.y)).rgb+texture2D(paintedSky,vec2(.99,uv.y)).rgb)*.5;
        painted=mix(painted,seamColor,seam);
        float cloud=smoothstep(.40,.8,min(painted.r,min(painted.g,painted.b)));
        painted=mix(painted,vec3(.90,.95,.98),cloud*.24);
        painted=mix(painted,horizon,(1.-smoothstep(-.06,.22,d.y))*.32);
        vec3 c=mix(gradient,painted,paintedReady);
        vec3 sunset=c*vec3(1.08,.73,.76)+vec3(.095,.035,.035);
        c=mix(c,sunset,dusk*.72);
        float luminance=dot(c,vec3(.2126,.7152,.0722));
        c=mix(c,vec3(luminance*.65,luminance*.74,luminance*.77),overcast*.83);
        c=mix(c,gradient+painted*vec3(.025,.045,.065)*paintedReady,night);
        vec2 starUv=vec2(atan(d.x,d.z),asin(d.y))*270.;
        float star=step(.9975,hash(floor(starUv)))*pow(max(0.,1.-length(fract(starUv)-.5)*2.),4.);
        c+=star*night*smoothstep(.08,.3,d.y)*.7;
        gl_FragColor=vec4(c,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),n=new at(new qr(300,48,24),t);n.name="painted-garden-sky",n.frustumCulled=!1,n.renderOrder=-100,s.add(n);const i={skyTexture:!1};return{ready:new fl().loadAsync("./assets/flower-garden/painted-sky.png").then(a=>{a.colorSpace=Ct,a.wrapS=Dn,e.paintedSky.value=a,e.paintedReady.value=1,i.skyTexture=!0}),stats:i,update(a,o){n.position.copy(a.position),e.time.value=o},setWeather(a){const o=a==="night"?["#07172d","#142d42"]:["#42b9df","#b6e5da"];e.zenith.value.set(o[0]),e.horizon.value.set(o[1]),e.night.value=a==="night"?1:0,e.dusk.value=a==="dusk"?1:0,e.overcast.value=a==="rain"?1:0}}}class hs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const zx=new Xs(-1,1,1,-1,0,1);class kx extends St{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}}const Hx=new kx;class yl{constructor(e){this._mesh=new at(Hx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}function ot(s){return s&&s.__esModule?s.default:s}class Vx extends St{boundingSphere=new Sn;constructor(){super(),this.setAttribute("position",new wt(new Float32Array([-1,-1,3,-1,-1,3]),2)),this.setAttribute("uv",new wt(new Float32Array([0,0,2,0,0,2]),2))}computeBoundingSphere(){}}const Gx=new Vx,Wx=new Xs;class Hi{constructor(e){this._mesh=new at(Gx,e),this._mesh.frustumCulled=!1}render(e){e.render(this._mesh,Wx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}dispose(){this._mesh.material.dispose(),this._mesh.geometry.dispose()}}const Xx={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},sceneNormal:{value:null},projMat:{value:new we},viewMat:{value:new we},projViewMat:{value:new we},projectionMatrixInv:{value:new we},viewMatrixInv:{value:new we},cameraPos:{value:new w},resolution:{value:new fe},biasAdjustment:{value:new fe},time:{value:0},samples:{value:[]},bluenoise:{value:null},distanceFalloff:{value:1},radius:{value:5},near:{value:.1},far:{value:1e3},ortho:{value:!1},screenSpaceRadius:{value:!1},frame:{value:0}},depthWrite:!1,depthTest:!1,vertexShader:`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1);
}`,fragmentShader:`
    #define SAMPLES 16
    #define FSAMPLES 16.0
uniform sampler2D sceneDiffuse;
uniform highp sampler2D sceneNormal;
uniform highp sampler2D sceneDepth;
uniform mat4 projectionMatrixInv;
uniform mat4 viewMatrixInv;
uniform mat4 projMat;
uniform mat4 viewMat;
uniform mat4 projViewMat;
uniform vec3 cameraPos;
uniform vec2 resolution;
uniform vec2 biasAdjustment;
uniform float time;
uniform vec3[SAMPLES] samples;
uniform float radius;
uniform float distanceFalloff;
uniform float near;
uniform float far;
uniform float frame;
uniform bool ortho;
uniform bool screenSpaceRadius;
uniform sampler2D bluenoise;
    varying vec2 vUv;
    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        return (zFar * zNear) / (zFar - d * (zFar - zNear));
    }
    highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
      return nearZ + (farZ - nearZ) * d;
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
      float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      /*return ortho ? linearize_depth_ortho(
        linDepth,
        nearZ,
        farZ
      ) :linearize_depth(linDepth, nearZ, farZ);*/
       #ifdef ORTHO

       return linearize_depth_ortho(d, nearZ, farZ);

        #else
        return linearize_depth(linDepth, nearZ, farZ);
        #endif
    }

    vec3 getWorldPosLog(vec3 posS) {
      vec2 uv = posS.xy;
      float z = posS.z;
      float nearZ =near;
      float farZ = far;
      float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
      vec4 wpos = projectionMatrixInv * clipVec;
      return wpos.xyz / wpos.w;
    }
    float depthToClipZ(float depth) {
      #ifdef REVERSEDEPTH
        return depth;
      #else
        return depth * 2.0 - 1.0;
      #endif
    }
    bool isBackgroundDepth(float depth) {
      #ifdef REVERSEDEPTH
        return depth == 0.0;
      #else
        return depth == 1.0;
      #endif
    }
    vec3 getWorldPos(float depth, vec2 coord) {
      #ifdef LOGDEPTH
        #ifndef ORTHO
          return getWorldPosLog(vec3(coord, depth));
        #endif
      #endif
      #ifdef ORTHO
        float z = depthToClipZ(depth);
        vec4 clipSpacePosition = vec4(coord * 2. - 1., z, 1.);
        vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
        viewSpacePosition.xyz /= viewSpacePosition.w;
        return viewSpacePosition.xyz;
      #else
        vec2 ndc = coord * 2. - 1.;
        float ndcZ = depthToClipZ(depth);
        mat4 Q = projectionMatrixInv;
        vec3 view = vec3(Q[0][0] * ndc.x + Q[3][0], Q[1][1] * ndc.y + Q[3][1], Q[3][2]);
        float invW = 1. / (Q[2][3] * ndcZ + Q[3][3]);
        return view * invW;
      #endif
  }

  vec3 computeNormal(vec3 worldPos, vec2 vUv) {
    ivec2 p = ivec2(vUv * resolution);
    float c0 = texelFetch(sceneDepth, p, 0).x;
    float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
    float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
    float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
    float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
    float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
    float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
    float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
    float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;

    float dl = abs((2.0 * l1 - l2) - c0);
    float dr = abs((2.0 * r1 - r2) - c0);
    float db = abs((2.0 * b1 - b2) - c0);
    float dt = abs((2.0 * t1 - t2) - c0);

    vec3 ce = getWorldPos(c0, vUv).xyz;

    vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                          : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
    vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                          : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;

    return normalize(cross(dpdx, dpdy));
}

mat3 makeRotationZ(float theta) {
	float c = cos(theta);
	float s = sin(theta);
	return mat3(c, - s, 0,
			s,  c, 0,
			0,  0, 1);
  }

void main() {
      vec4 diffuse = texture2D(sceneDiffuse, vUv);
      float depth = texture2D(sceneDepth, vUv).x;
      if (isBackgroundDepth(depth)) {
        gl_FragColor = vec4(vec3(1.0), 1.0);
        return;
      }
      vec3 worldPos = getWorldPos(depth, vUv);
      #ifdef HALFRES
        vec3 normal = texture2D(sceneNormal, vUv).rgb;
      #else
        vec3 normal = computeNormal(worldPos, vUv);
      #endif
      vec4 noise = texture2D(bluenoise, gl_FragCoord.xy / 128.0);
      vec2 harmoniousNumbers = vec2(
        1.618033988749895,
        1.324717957244746
      );
      noise.rg += harmoniousNumbers * frame;
      noise.rg = fract(noise.rg);
        vec3 helperVec = vec3(0.0, 1.0, 0.0);
        if (dot(helperVec, normal) > 0.99) {
          helperVec = vec3(1.0, 0.0, 0.0);
        }
        vec3 tangent = normalize(cross(helperVec, normal));
        vec3 bitangent = cross(normal, tangent);
        mediump mat3 tbn = mat3(tangent, bitangent, normal) *  makeRotationZ( noise.r * 3.1415962 * 2.0) ;

      mediump float occluded = 0.0;
      mediump float totalWeight = 0.0;
      float radiusToUse = screenSpaceRadius ? distance(
        worldPos,
        getWorldPos(depth, vUv +
          vec2(radius, 0.0) / resolution)
      ) : radius;
      float distanceFalloffToUse =screenSpaceRadius ?
          radiusToUse * distanceFalloff
      : radiusToUse * distanceFalloff * 0.2;
      float bias = (min(
        0.1,
        distanceFalloffToUse * 0.1
      ) / near) * fwidth(distance(worldPos, cameraPos)) / radiusToUse;
      bias = biasAdjustment.x + biasAdjustment.y * bias;
      mediump float offsetMove = noise.g;
      mediump float offsetMoveInv = 1.0 / FSAMPLES;
      float farTimesNear = far * near;
      float farMinusNear = far - near;
      
      for(int i = 0; i < SAMPLES; i++) {
        mediump vec3 sampleDirection = tbn * samples[i];

        float moveAmt = fract(offsetMove);
        offsetMove += offsetMoveInv;
        vec3 samplePos = worldPos + radiusToUse * moveAmt * sampleDirection;
        vec4 offset = projMat * vec4(samplePos, 1.0);
        offset.xyz /= offset.w;
        offset.xy = offset.xy * 0.5 + 0.5;
        #ifndef REVERSEDEPTH
        offset.z = offset.z * 0.5 + 0.5;
        #endif
        
        if (all(greaterThan(offset.xyz * (1.0 - offset.xyz), vec3(0.0)))) {
          float sampleDepth = textureLod(sceneDepth, offset.xy, 0.0).x;

          /*#ifdef LOGDEPTH
          float distSample = linearize_depth_log(sampleDepth, near, far);
      #else
          #ifdef ORTHO
              float distSample = near + farMinusNear * sampleDepth;
          #else
              float distSample = (farTimesNear) / (far - sampleDepth * farMinusNear);
          #endif
      #endif*/
      #ifdef REVERSEDEPTH
          float distSample = -getWorldPos(sampleDepth, offset.xy).z;
      #else
        #ifdef ORTHO
          float distSample = near + sampleDepth * farMinusNear;
        #else
          #ifdef LOGDEPTH
              float distSample = linearize_depth_log(sampleDepth, near, far);
          #else
              float distSample = (farTimesNear) / (far - sampleDepth * farMinusNear);
          #endif
        #endif
      #endif
      
      #ifdef REVERSEDEPTH
          float distWorld = -samplePos.z;
      #else
        #ifdef ORTHO
          float distWorld = near + offset.z * farMinusNear;
        #else
          float distWorld = (farTimesNear) / (far - offset.z * farMinusNear);
        #endif
      #endif
          
          mediump float rangeCheck = smoothstep(0.0, 1.0, distanceFalloffToUse / (abs(distSample - distWorld)));
          vec2 diff = gl_FragCoord.xy - floor(offset.xy * resolution);
          occluded += rangeCheck * float(distSample != distWorld) * float(sampleDepth != depth) * step(distSample + bias, distWorld) * step(
            1.0,
            dot(diff, diff)
          );
          
          totalWeight ++;
        }
      }
      float occ = clamp(1.0 - occluded / (totalWeight == 0.0 ? 1.0 : totalWeight), 0.0, 1.0);
      gl_FragColor = vec4(occ, 0.5 + 0.5 * normal);
}`},Yx={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},transparencyDWFalse:{value:null},transparencyDWTrue:{value:null},transparencyDWTrueDepth:{value:null},transparencyAware:{value:!1},projMat:{value:new we},viewMat:{value:new we},projectionMatrixInv:{value:new we},resolution:{value:new fe},color:{value:new w(0,0,0)},blueNoise:{value:null},downsampledDepth:{value:null},time:{value:0},intensity:{value:10},renderMode:{value:0},gammaCorrection:{value:!1},ortho:{value:!1},near:{value:.1},far:{value:1e3},screenSpaceRadius:{value:!1},radius:{value:0},distanceFalloff:{value:1},fog:{value:!1},fogExp:{value:!1},fogDensity:{value:0},fogNear:{value:1/0},fogFar:{value:1/0},colorMultiply:{value:!0},aoTones:{value:0}},depthWrite:!1,depthTest:!1,vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = vec4(position, 1);
		}`,fragmentShader:`
		uniform sampler2D sceneDiffuse;
    uniform highp sampler2D sceneDepth;
    uniform highp sampler2D downsampledDepth;
    uniform highp sampler2D transparencyDWFalse;
    uniform highp sampler2D transparencyDWTrue;
    uniform highp sampler2D transparencyDWTrueDepth;
    uniform sampler2D tDiffuse;
    uniform sampler2D blueNoise;
    uniform vec2 resolution;
    uniform vec3 color;
    uniform mat4 projectionMatrixInv;
    uniform float intensity;
    uniform float renderMode;
    uniform float near;
    uniform float far;
    uniform float aoTones;
    uniform bool gammaCorrection;
    uniform bool ortho;
    uniform bool screenSpaceRadius;
    uniform bool fog;
    uniform bool fogExp;
    uniform bool colorMultiply;
    uniform bool transparencyAware;
    uniform float fogDensity;
    uniform float fogNear;
    uniform float fogFar;
    uniform float radius;
    uniform float distanceFalloff;
    varying vec2 vUv;
    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        return (zFar * zNear) / (zFar - d * (zFar - zNear));
    }
    highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
      return nearZ + (farZ - nearZ) * d;
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
      float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      return ortho ? linearize_depth_ortho(
        linDepth,
        nearZ,
        farZ
      ) :linearize_depth(linDepth, nearZ, farZ);
    }
    vec3 getWorldPosLog(vec3 posS) {
        vec2 uv = posS.xy;
        float z = posS.z;
        float nearZ =near;
        float farZ = far;
        float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
        float a = farZ / (farZ - nearZ);
        float b = farZ * nearZ / (nearZ - farZ);
        float linDepth = a + b / depth;
        vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
        vec4 wpos = projectionMatrixInv * clipVec;
        return wpos.xyz / wpos.w;
      }
      float depthToClipZ(float depth) {
        #ifdef REVERSEDEPTH
          return depth;
        #else
          return depth * 2.0 - 1.0;
        #endif
      }
      bool isBackgroundDepth(float depth) {
        #ifdef REVERSEDEPTH
          return depth == 0.0;
        #else
          return depth == 1.0;
        #endif
      }
      vec3 getWorldPos(float depth, vec2 coord) {
        #ifdef LOGDEPTH
          #ifndef ORTHO
            return getWorldPosLog(vec3(coord, depth));
          #endif
        #endif
      //  }
        #ifdef ORTHO
          float z = depthToClipZ(depth);
          vec4 clipSpacePosition = vec4(coord * 2. - 1., z, 1.);
          vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
          viewSpacePosition.xyz /= viewSpacePosition.w;
          return viewSpacePosition.xyz;
        #else
          vec2 ndc = coord * 2. - 1.;
          float ndcZ = depthToClipZ(depth);
          mat4 Q = projectionMatrixInv;
          vec3 view = vec3(Q[0][0] * ndc.x + Q[3][0], Q[1][1] * ndc.y + Q[3][1], Q[3][2]);
          float invW = 1. / (Q[2][3] * ndcZ + Q[3][3]);
          return view * invW;
        #endif
    }
  
    vec3 computeNormal(vec3 worldPos, vec2 vUv) {
      ivec2 p = ivec2(vUv * resolution);
      float c0 = texelFetch(sceneDepth, p, 0).x;
      float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
      float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
      float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
      float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
      float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
      float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
      float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
      float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;
  
      float dl = abs((2.0 * l1 - l2) - c0);
      float dr = abs((2.0 * r1 - r2) - c0);
      float db = abs((2.0 * b1 - b2) - c0);
      float dt = abs((2.0 * t1 - t2) - c0);
  
      vec3 ce = getWorldPos(c0, vUv).xyz;
  
      vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                            : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
      vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                            : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;
  
      return normalize(cross(dpdx, dpdy));
  }

    #include <common>
    #include <dithering_pars_fragment>
    void main() {
        //vec4 texel = texture2D(tDiffuse, vUv);//vec3(0.0);
        vec4 sceneTexel = texture2D(sceneDiffuse, vUv);
        float depth = texture2D(sceneDepth, vUv).x;
        #ifdef HALFRES 
        vec4 texel = vec4(0.0);
        if (isBackgroundDepth(depth)) {
            texel = vec4(1.0, 0.0, 0.0, 1.0);
        } else {
        vec3 worldPos = getWorldPos(depth, vUv);
        vec3 normal = computeNormal(getWorldPos(depth, vUv), vUv);
       // vec4 texel = texture2D(tDiffuse, vUv);
       // Find closest depth;
       float totalWeight = 0.0;
       float radiusToUse = screenSpaceRadius ? distance(
        worldPos,
        getWorldPos(depth, vUv +
          vec2(radius, 0.0) / resolution)
      ) : radius;
      float distanceFalloffToUse =screenSpaceRadius ?
          radiusToUse * distanceFalloff
      : distanceFalloff;
        for(float x = -1.0; x <= 1.0; x++) {
            for(float y = -1.0; y <= 1.0; y++) {
                vec2 offset = vec2(x, y);
                ivec2 p = ivec2(
                    (vUv * resolution * 0.5) + offset
                );
                vec2 pUv = vec2(p) / (resolution * 0.5);
                float sampleDepth = texelFetch(downsampledDepth,p, 0).x;
                vec4 sampleInfo = texelFetch(tDiffuse, p, 0);
                vec3 normalSample = sampleInfo.gba * 2.0 - 1.0;
                vec3 worldPosSample = getWorldPos(sampleDepth, pUv);
                float tangentPlaneDist = abs(dot(worldPosSample - worldPos, normal));
                float rangeCheck = exp(-1.0 * tangentPlaneDist * (1.0 / distanceFalloffToUse)) * max(dot(normal, normalSample), 0.0);
                float weight = rangeCheck;
                totalWeight += weight;
                texel += sampleInfo * weight;
            }
        }
        if (totalWeight == 0.0) {
            texel = texture2D(tDiffuse, vUv);
        } else {
            texel /= totalWeight;
        }
    }
        #else
        vec4 texel = texture2D(tDiffuse, vUv);
        #endif

        #ifdef LOGDEPTH
        texel.r = clamp(texel.r, 0.0, 1.0);
        if (texel.r == 0.0) {
          texel.r = 1.0;
        }
        #endif
     
        float finalAo = pow(texel.r, intensity);
        if (aoTones > 0.0) {
            finalAo = ceil(finalAo * aoTones) / aoTones;
        }
        float fogFactor = 0.0;
        if (fog) {
            float fogDepth = -getWorldPos(depth, vUv).z;
            if (fogExp) {
                fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
            } else {
                fogFactor = smoothstep( fogNear, fogFar, fogDepth );
            }
        }
        if (transparencyAware) {
            float transparencyDWOff = texture2D(transparencyDWFalse, vUv).a;
            float transparencyDWOn = texture2D(transparencyDWTrue, vUv).a;
            float adjustmentFactorOff = transparencyDWOff;
            float depthSample = texture2D(sceneDepth, vUv).r;
            float trueDepthSample = texture2D(transparencyDWTrueDepth, vUv).r;
            float adjustmentFactorOn = (1.0 - transparencyDWOn) * (
                trueDepthSample == depthSample ? 1.0 : 0.0
            );
            float adjustmentFactor = max(adjustmentFactorOff, adjustmentFactorOn);
            finalAo = mix(finalAo, 1.0, adjustmentFactor);
        }
        finalAo = mix(finalAo, 1.0, fogFactor);
        vec3 aoApplied = color * mix(vec3(1.0), sceneTexel.rgb, float(colorMultiply));
        if (renderMode == 0.0) {
            gl_FragColor = vec4( mix(sceneTexel.rgb, aoApplied, 1.0 - finalAo), sceneTexel.a);
        } else if (renderMode == 1.0) {
            gl_FragColor = vec4( mix(vec3(1.0), aoApplied, 1.0 - finalAo), sceneTexel.a);
        } else if (renderMode == 2.0) {
            gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
        } else if (renderMode == 3.0) {
            if (vUv.x < 0.5) {
                gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
            } else if (abs(vUv.x - 0.5) < 1.0 / resolution.x) {
                gl_FragColor = vec4(1.0);
            } else {
                gl_FragColor = vec4( mix(sceneTexel.rgb, aoApplied, 1.0 - finalAo), sceneTexel.a);
            }
        } else if (renderMode == 4.0) {
            if (vUv.x < 0.5) {
                gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
            } else if (abs(vUv.x - 0.5) < 1.0 / resolution.x) {
                gl_FragColor = vec4(1.0);
            } else {
                gl_FragColor = vec4( mix(vec3(1.0), aoApplied, 1.0 - finalAo), sceneTexel.a);
            }
        }
        #include <dithering_fragment>
        if (gammaCorrection) {
            gl_FragColor = sRGBTransferOETF(gl_FragColor);
        }
    }
    `};var nt={};nt=JSON.parse('{"architecture":"attention-v3-int8","formatVersion":3,"globalBias":[-0.32877659797668457,0.4370867609977722,-0.05251404270529747,1.3072023391723633,0.0477047860622406,0.24477416276931763,0.009111796505749226,-0.17459993064403534],"globalFeatureInverseStandardDeviation":[10.771836280822754,1.9548665285110474,1.612365484237671],"globalFeatureMean":[0.9198138117790222,-0.49808526039123535,0.03374629095196724],"globalWeights":[101,-4,7,-127,6,-11,3,1,0,-16,-7,8,-8,-1,7,-4,0,0,-12,-3,-13,1,0,2],"headBias":[-0.15895532071590424,0.007501596584916115,-0.47742825746536255,0.01632097363471985,-0.48355796933174133,-0.1052703931927681,-0.8414919376373291,-0.21046382188796997],"headWeights":[-45,-7,-45,-20,7,-13,120,-24,-15,-26,-19,1,27,-48,-4,-10,1,-5,-24,64,91,-1,-68,39,54,39,101,-40,-127,64,-41,-17,-23,-19,3,35,-2,33,3,9,-64,-32,30,42,-112,12,28,-11,15,2,-4,-7,7,-3,-5,1,76,48,-34,-67,103,-40,-26,1,58,-11,46,-41,5,-6,-17,-8,13,17,-35,45,27,-17,-28,7,-53,12,-51,6,-32,-5,58,-9,-28,-21,37,-12,1,20,2,2,11,7,-4,-9,2,-15,-1,-8,16,12,-27,-1,61,-5,-1,4,-7,-2,7,4,1,4,-2,4,-18,-16,28,6,-65,16,3,-3,-5,-2,0,-40,-21,-22,14,30,-21,49,15,-64,43,19,23,18,5,-15,21,21,30,17,-11,-6,22,-38,-20,97,-46,-5,-13,-59,26,-13,11,-2,-10,-8,2,-15,-17,-27,-9,26,7,-7,6,9,-32,5,-9,12,49,17,-1,24,20,35,14,-33,-50,-1,-4,-26,11,11,9,-80,30,9,36,6,-12,-4,-7,39,-10,-30,-49,1,-43,-20,-34,76,-36,-10,15,-8,43,31,38,-42,39,37,-7,7,8,16,28,-83,32,9,23,-13,39,119,23,-127,-24,8,-48,-29,-7,-33,-12,58,-24,-29,-19,12,-55,-90,0,126,26,42,54,22],"keyProjectionWeights":[0,-1,-1,1,1,1,1,1,-64,32,49,23,-25,4,27,-22,0,1,-1,-1,-1,1,1,0,-34,38,64,88,13,-53,-41,58,-7,-4,79,-41,27,26,14,2,-2,1,1,1,-1,-1,1,1,1,-1,-1,-1,-1,-1,1,1,4,-3,126,42,-40,-116,35,20],"name":"residual-attention-v3-50m-qat-int8-epoch-25-zo-278w","outputBias":-0.0005526235327124596,"outputWeights":[11,11,14,-27,9,-22,127,6],"quantization":{"scales":{"globalWeight":0.021090541950849095,"headWeight":0.04935851140909355,"keyWeight":0.1733924937791441,"outputWeight":0.0030087142047955295,"tapInputWeight":0.1096231754049479,"tapOutputWeight":0.017949438644286102,"valueWeight":0.013986751242596301},"scheme":"symmetric-int8-per-tensor","zeroPoint":0},"summaryQueries":[0.0038647791370749474,0.09565000981092453,0.002756686182692647,-0.08183622360229492,-0.15209506452083588,-0.0006105066277086735,0.0010439646430313587,-0.03020688332617283,0.005065929610282183,0.14488759636878967,0.003160916268825531,-0.0855727270245552,-0.3123375475406647,0.00039022407145239413,0.0037786494940519333,0.1451321840286255,-0.002009483054280281,0.0597594790160656,0.0045239729806780815,-0.08765853196382523,-0.13884992897510529,-0.0021647117100656033,0.003985927440226078,0.09727758169174194,0.007170629221946001,0.0786278173327446,0.004103775601834059,-0.1198369711637497,-0.2925199568271637,-0.002055276418104768,0.0030450925696641207,0.14401987195014954],"supportedDenoiseSamples":[4,8,16],"tapFeatureInverseStandardDeviation":[2.283243417739868,0.8810898065567017,0.8210930228233337,3.752316474914551,3.6375720500946045,2.670454978942871,10.249449729919434,0.12639354169368744,100],"tapFeatureMean":[0.010318092070519924,0.01364430133253336,0.13411010801792145,-0.004725644364953041,0.10053129494190216,0.8384788632392883,0.9203217625617981,1.7139031887054443,1],"tapInputBias":[0.4780646860599518,-0.45214661955833435,0.289407879114151,0.34804567694664,-0.1320028454065323,0.17722633481025696,0.011480014771223068,-0.26692497730255127],"tapInputWeights":[0,1,7,0,-1,-7,0,31,-2,-1,14,-126,0,0,-1,2,26,-2,0,66,-73,0,0,0,-12,22,-3,0,-76,-90,0,-1,-7,-3,58,-1,0,2,6,0,0,3,4,-40,0,0,3,-13,0,0,1,-7,-13,0,0,-7,10,0,-2,-7,0,-39,-2,0,-13,-19,0,-2,20,-1,3,-1],"tapOutputBias":[-0.3867710530757904,0.1349504142999649,0.35706064105033875,-0.5938405394554138,-0.031154220923781395,1.4079623222351074,-1.9221038818359375,0.6029739379882812],"tapOutputWeights":[18,-4,47,19,74,-94,-21,-9,73,-59,88,-10,-3,71,-7,24,20,74,24,-31,-12,-10,-15,-45,-126,2,-4,27,-5,24,35,-11,-4,9,-8,26,-10,27,26,-20,17,-50,5,-35,0,-5,12,-71,89,-58,22,-83,-115,7,-16,-89,89,22,1,-20,-22,-25,-26,44],"valueProjectionWeights":[-16,-6,40,-17,84,-76,59,51,-10,-2,-10,-1,-23,74,-70,23,-5,4,4,-7,-77,127,20,-48,-36,4,-17,-12,-4,10,29,-27,-2,11,-47,-50,-54,-3,14,11,-23,-1,109,31,4,-100,-33,-36,-19,0,-8,20,-35,-24,79,2,44,2,5,7,22,-70,-67,-35]}');const Sl=[["tapInputWeight","tapInputWeights",8,9],["tapOutputWeight","tapOutputWeights",8,8],["globalWeight","globalWeights",8,3],["keyWeight","keyProjectionWeights",8,8],["valueWeight","valueProjectionWeights",8,8],["headWeight","headWeights",8,32],["outputWeight","outputWeights",1,8]],Ys=s=>{const e=ot(nt).quantization?.scales?.[s];if(!(e>0)||!Number.isFinite(e))throw new Error(`The bundled N8AO neural model has no valid ${s} scale.`);return e};if(ot(nt).architecture!=="attention-v3-int8"||ot(nt).formatVersion!==3||ot(nt).quantization?.scheme!=="symmetric-int8-per-tensor"||ot(nt).quantization?.zeroPoint!==0||ot(nt).supportedDenoiseSamples?.join(",")!=="4,8,16"||Sl.some(([,s,e,t])=>ot(nt)[s]?.length!==e*t||ot(nt)[s].some(n=>!Number.isInteger(n)||n<-127||n>127)))throw new Error("The bundled N8AO neural denoise model has an unsupported layout.");const as=s=>{if(!Number.isFinite(s))throw new Error("The bundled N8AO neural model contains a non-finite value.");if(Object.is(s,-0))return"0.0";const e=Number(s).toString();return/[.eE]/.test(e)?e:`${e}.0`},Vs=["x","y","z","w"],Zr=s=>[...Vs.map(e=>`${s}.lo.${e}`),...Vs.map(e=>`${s}.hi.${e}`)],qx=(s,e)=>s===0?null:s===1?e:s===-1?`(-${e})`:s<0?`(-${as(-s)} * ${e})`:`${as(s)} * ${e}`,Kx=(s,e)=>s===0?null:`${as(s)} * ${e}`,$u=s=>s.filter(Boolean).join(" + ")||"0.0",qs=(s,e,t,n,i,r)=>{const a=n.map((o,l)=>qx(s[e*t+l],o));return`${as(i)} * (${$u(a)}) + ${as(r[e])}`},vn=(s,e="        ")=>`vec4(
${s.map(t=>`${e}    ${t}`).join(`,
`)}
${e})`,Va=({functionName:s,scaleName:e,weights:t,bias:n,width:i=8,relu:r=!1})=>{const a=Zr("inputToken"),o=Ys(e),l=Array.from({length:8},(f,d)=>qs(t,d,i,a,o,n)),c=vn(l.slice(0,4)),u=vn(l.slice(4)),h=f=>r?`max(${f}, vec4(0.0))`:f;return`
    NeuralToken neural${s[0].toUpperCase()}${s.slice(1)}(NeuralToken inputToken) {
        return NeuralToken(
            ${h(c)},
            ${h(u)}
        );
    }
`},eh=(s,e,t,n,i,r,a,o={})=>Array.from({length:i},(l,c)=>{let u=e[c];for(let h=0;h<r;h++){const f=s[c*r+h]*a;u-=f*n[h]*t[h],Object.hasOwn(o,h)&&(u+=f*n[h]*o[h])}return u}),th=Ys("tapInputWeight"),jx=eh(ot(nt).tapInputWeights,ot(nt).tapInputBias,ot(nt).tapFeatureMean,ot(nt).tapFeatureInverseStandardDeviation,8,9,th,{8:1}),Zx=Zr("scaledInput"),$c=Array.from({length:8},(s,e)=>qs(ot(nt).tapInputWeights,e,9,Zx,th,jx)),Qx=`
    NeuralToken neuralTapInput(NeuralToken raw) {
        NeuralToken scaledInput = NeuralToken(
            raw.lo * ${vn(ot(nt).tapFeatureInverseStandardDeviation.slice(0,4),"            ")},
            raw.hi * ${vn(ot(nt).tapFeatureInverseStandardDeviation.slice(4,8),"            ")}
        );
        return NeuralToken(
            max(${vn($c.slice(0,4))}, vec4(0.0)),
            max(${vn($c.slice(4))}, vec4(0.0))
        );
    }
`,nh=Ys("globalWeight"),Jx=eh(ot(nt).globalWeights,ot(nt).globalBias,ot(nt).globalFeatureMean,ot(nt).globalFeatureInverseStandardDeviation,8,3,nh),$x=Vs.slice(0,3).map(s=>`scaledInput.${s}`),eu=Array.from({length:8},(s,e)=>qs(ot(nt).globalWeights,e,3,$x,nh,Jx)),e_=`
    NeuralToken neuralEncodeGlobal(vec4 raw) {
        vec3 scaledInput = raw.xyz * vec3(
            ${ot(nt).globalFeatureInverseStandardDeviation.map(as).join(", ")}
        );
        return NeuralToken(
            max(${vn(eu.slice(0,4))}, vec4(0.0)),
            max(${vn(eu.slice(4))}, vec4(0.0))
        );
    }
`,t_=Zr("key"),n_=Array.from({length:4},(s,e)=>$u(t_.map((t,n)=>Kx(ot(nt).summaryQueries[e*8+n],t)))),i_=`
    vec4 neuralQueryScores(NeuralToken key) {
        return ${vn(n_)};
    }
`,ih=[];for(let s=0;s<4;s++)ih.push(...Vs.map(e=>`runningSummaryLo[${s}].${e}`),...Vs.map(e=>`runningSummaryHi[${s}].${e}`));const s_=Ys("headWeight"),tu=Array.from({length:8},(s,e)=>qs(ot(nt).headWeights,e,32,ih,s_,ot(nt).headBias)),r_=`
    NeuralToken neuralHead(
        vec4 runningSummaryLo[4],
        vec4 runningSummaryHi[4]
    ) {
        return NeuralToken(
            max(${vn(tu.slice(0,4))}, vec4(0.0)),
            max(${vn(tu.slice(4))}, vec4(0.0))
        );
    }
`,a_=qs(ot(nt).outputWeights,0,8,Zr("head"),Ys("outputWeight"),[ot(nt).outputBias]),o_=`
    float neuralOutput(NeuralToken head) {
        return ${a_};
    }
`,l_=[Qx,Va({functionName:"tapOutput",scaleName:"tapOutputWeight",weights:ot(nt).tapOutputWeights,bias:ot(nt).tapOutputBias,relu:!0}),e_,Va({functionName:"keyProject",scaleName:"keyWeight",weights:ot(nt).keyProjectionWeights,bias:new Array(8).fill(0)}),Va({functionName:"valueProject",scaleName:"valueWeight",weights:ot(nt).valueProjectionWeights,bias:new Array(8).fill(0)}),i_,r_,o_].join(`
`);Sl.reduce((s,[,e])=>s+ot(nt)[e].length,0);Sl.reduce((s,[,e])=>s+ot(nt)[e].filter(t=>t!==0).length,0);const c_={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},projMat:{value:new we},viewMat:{value:new we},projectionMatrixInv:{value:new we},viewMatrixInv:{value:new we},cameraPos:{value:new w},resolution:{value:new fe},time:{value:0},r:{value:5},blueNoise:{value:null},radius:{value:12},worldRadius:{value:5},index:{value:0},poissonDisk:{value:[]},distanceFalloff:{value:1},near:{value:.1},far:{value:1e3},screenSpaceRadius:{value:!1}},depthWrite:!1,depthTest:!1,vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = vec4(position, 1.0);
		}`,fragmentShader:`
		uniform sampler2D sceneDiffuse;
    uniform highp sampler2D sceneDepth;
    uniform sampler2D tDiffuse;
    uniform sampler2D blueNoise;
    uniform mat4 projectionMatrixInv;
    uniform mat4 viewMatrixInv;
    uniform vec2 resolution;
    uniform float r;
    uniform float radius;
     uniform float worldRadius;
    uniform float index;
     uniform float near;
     uniform float far;
     uniform float distanceFalloff;
    uniform bool screenSpaceRadius;
    varying vec2 vUv;

    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        highp float z_n = 2.0 * d - 1.0;
        return 2.0 * zNear * zFar / (zFar + zNear - z_n * (zFar - zNear));
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
     float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
     float a = farZ / (farZ - nearZ);
     float b = farZ * nearZ / (nearZ - farZ);
     float linDepth = a + b / depth;
     return linearize_depth(linDepth, nearZ, farZ);
   }
   highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
     return nearZ + (farZ - nearZ) * d;
   }
   float depthToClipZ(float depth) {
     #ifdef REVERSEDEPTH
       return depth;
     #else
       return depth * 2.0 - 1.0;
     #endif
   }
   bool isBackgroundDepth(float depth) {
     #ifdef REVERSEDEPTH
       return depth == 0.0;
     #else
       return depth == 1.0;
     #endif
   }
   vec3 getWorldPosLog(vec3 posS) {
     vec2 uv = posS.xy;
     float z = posS.z;
     float nearZ =near;
     float farZ = far;
     float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
     float a = farZ / (farZ - nearZ);
     float b = farZ * nearZ / (nearZ - farZ);
     float linDepth = a + b / depth;
     vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
     vec4 wpos = projectionMatrixInv * clipVec;
     return wpos.xyz / wpos.w;
   }
    vec3 getWorldPos(float depth, vec2 coord) {
     #ifdef LOGDEPTH
      #ifndef ORTHO
          return getWorldPosLog(vec3(coord, depth));
      #endif
     #endif
        
        #ifdef ORTHO
          float z = depthToClipZ(depth);
          vec4 clipSpacePosition = vec4(coord * 2. - 1., z, 1.);
          vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
          viewSpacePosition.xyz /= viewSpacePosition.w;
          return viewSpacePosition.xyz;
        #else
          vec2 ndc = coord * 2. - 1.;
          float ndcZ = depthToClipZ(depth);
          mat4 Q = projectionMatrixInv;
          vec3 view = vec3(Q[0][0] * ndc.x + Q[3][0], Q[1][1] * ndc.y + Q[3][1], Q[3][2]);
          float invW = 1.0 / (Q[2][3] * ndcZ + Q[3][3]);
          return view * invW;
        #endif
    }

#ifdef NEURAL_DENOISE
    struct NeuralToken {
        highp vec4 lo;
        highp vec4 hi;
    };

    ${l_}

    vec3 neuralSafeNormalize(vec3 value, vec3 fallback) {
        float lengthSquared = dot(value, value);
        return lengthSquared > 1e-12 ? value * inversesqrt(lengthSquared) : fallback;
    }

    mat3 neuralLocalFrame(vec3 inputNormal) {
        vec3 frameNormal = neuralSafeNormalize(inputNormal, vec3(0.0, 0.0, 1.0));
        vec3 helper = abs(frameNormal.z) < 0.999
            ? vec3(0.0, 0.0, 1.0)
            : vec3(0.0, 1.0, 0.0);
        vec3 tangent = neuralSafeNormalize(
            cross(helper, frameNormal),
            vec3(1.0, 0.0, 0.0)
        );
        vec3 bitangent = cross(frameNormal, tangent);
        return transpose(mat3(tangent, bitangent, frameNormal));
    }

    void neuralConsumeToken(
        NeuralToken token,
        inout vec4 runningMaximum,
        inout vec4 runningDenominator,
        inout vec4 runningSummaryLo[4],
        inout vec4 runningSummaryHi[4]
    ) {
        NeuralToken key = neuralKeyProject(token);
        NeuralToken value = neuralValueProject(token);
        vec4 score = neuralQueryScores(key) * 0.3535533905932738;
        vec4 newMaximum = max(runningMaximum, score);
        vec4 oldScale = exp(runningMaximum - newMaximum);
        vec4 newScale = exp(score - newMaximum);

        runningSummaryLo[0] = runningSummaryLo[0] * oldScale.x + value.lo * newScale.x;
        runningSummaryHi[0] = runningSummaryHi[0] * oldScale.x + value.hi * newScale.x;
        runningSummaryLo[1] = runningSummaryLo[1] * oldScale.y + value.lo * newScale.y;
        runningSummaryHi[1] = runningSummaryHi[1] * oldScale.y + value.hi * newScale.y;
        runningSummaryLo[2] = runningSummaryLo[2] * oldScale.z + value.lo * newScale.z;
        runningSummaryHi[2] = runningSummaryHi[2] * oldScale.z + value.hi * newScale.z;
        runningSummaryLo[3] = runningSummaryLo[3] * oldScale.w + value.lo * newScale.w;
        runningSummaryHi[3] = runningSummaryHi[3] * oldScale.w + value.hi * newScale.w;
        runningDenominator = runningDenominator * oldScale + newScale;
        runningMaximum = newMaximum;
    }

    void neuralEncodeTap(
        NeuralToken raw,
        inout vec4 runningMaximum,
        inout vec4 runningDenominator,
        inout vec4 runningSummaryLo[4],
        inout vec4 runningSummaryHi[4]
    ) {
        NeuralToken first = neuralTapInput(raw);
        NeuralToken token = neuralTapOutput(first);
        neuralConsumeToken(
            token,
            runningMaximum,
            runningDenominator,
            runningSummaryLo,
            runningSummaryHi
        );
    }

    float neuralFinish(
        float baselineAO,
        inout vec4 runningMaximum,
        inout vec4 runningDenominator,
        inout vec4 runningSummaryLo[4],
        inout vec4 runningSummaryHi[4]
    ) {
        vec4 raw = vec4(
            baselineAO,
            log(max(worldRadius, 1e-6)),
            log(max(distanceFalloff, 1e-6)),
            0.0
        );
        NeuralToken token = neuralEncodeGlobal(raw);
        neuralConsumeToken(
            token,
            runningMaximum,
            runningDenominator,
            runningSummaryLo,
            runningSummaryHi
        );

        vec4 inverseDenominator = 1.0 / max(runningDenominator, vec4(1e-12));
        runningSummaryLo[0] *= inverseDenominator.x;
        runningSummaryHi[0] *= inverseDenominator.x;
        runningSummaryLo[1] *= inverseDenominator.y;
        runningSummaryHi[1] *= inverseDenominator.y;
        runningSummaryLo[2] *= inverseDenominator.z;
        runningSummaryHi[2] *= inverseDenominator.z;
        runningSummaryLo[3] *= inverseDenominator.w;
        runningSummaryHi[3] *= inverseDenominator.w;

        NeuralToken head = neuralHead(runningSummaryLo, runningSummaryHi);
        return neuralOutput(head);
    }
#endif

    #include <common>
    #define NUM_SAMPLES __N8AO_DENOISE_SAMPLES__
    uniform vec2 poissonDisk[NUM_SAMPLES];
    void main() {
        const float pi = 3.14159;
        vec2 texelSize = vec2(1.0 / resolution.x, 1.0 / resolution.y);
        vec2 uv = vUv;
        vec4 data = texture2D(tDiffuse, vUv);
        float occlusion = data.r;
        float baseOcc = data.r;
        vec3 normal = data.gba * 2.0 - 1.0;
        float count = 1.0;
        float d = texture2D(sceneDepth, vUv).x;
        if (isBackgroundDepth(d)) {
          gl_FragColor = data;
          return;
        }
        vec3 worldPos = getWorldPos(d, vUv);
        float size = radius;
        float angle;
#ifdef NEURAL_DENOISE
        // The neural material is only bound for denoise iteration two.
        angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).z * PI2;
#else
        if (index == 0.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).w * PI2;
        } else if (index == 1.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).z * PI2;
        } else if (index == 2.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).y * PI2;
        } else {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).x * PI2;
        }
#endif

        mat2 rotationMatrix = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        float radiusToUse = screenSpaceRadius ? distance(
          worldPos,
          getWorldPos(d, vUv +
            vec2(worldRadius, 0.0) / resolution)
        ) : worldRadius;
        float distanceFalloffToUse =screenSpaceRadius ?
        radiusToUse * distanceFalloff
    : radiusToUse * distanceFalloff * 0.2;

        float invDistance = (1.0 / distanceFalloffToUse);
#ifdef NEURAL_DENOISE
        mat3 neuralWorldToLocal = neuralLocalFrame(normal);
        float neuralInverseRadius = 1.0 / max(radiusToUse, 1e-6);
        float neuralInverseDistance = 1.0 / max(distanceFalloffToUse, 1e-6);
        vec4 neuralMaximum = vec4(-1e30);
        vec4 neuralDenominator = vec4(0.0);
        vec4 neuralSummaryLo[4];
        vec4 neuralSummaryHi[4];
        for (int query = 0; query < 4; query++) {
            neuralSummaryLo[query] = vec4(0.0);
            neuralSummaryHi[query] = vec4(0.0);
        }
#endif
        for(int i = 0; i < NUM_SAMPLES; i++) {
            vec2 offset = (rotationMatrix * poissonDisk[i]) * texelSize * size;
            vec4 dataSample = texture2D(tDiffuse, uv + offset);
            float occSample = dataSample.r;
            vec3 normalSample = dataSample.gba * 2.0 - 1.0;
            float dSample = texture2D(sceneDepth, uv + offset).x;
            vec3 worldPosSample = getWorldPos(dSample, uv + offset);
            float tangentPlaneDist = abs(dot(worldPosSample - worldPos, normal));
            float rangeCheck = float(!isBackgroundDepth(dSample)) * exp(-1.0 * tangentPlaneDist * invDistance ) * max(dot(normal, normalSample), 0.0);
            occlusion += occSample * rangeCheck;
            count += rangeCheck;
#ifdef NEURAL_DENOISE
            if (!isBackgroundDepth(dSample)) {
                vec3 localDelta = (neuralWorldToLocal * (worldPosSample - worldPos))
                    * neuralInverseRadius;
                vec3 localNormal = neuralWorldToLocal
                    * neuralSafeNormalize(normalSample, vec3(0.0, 0.0, 1.0));
                NeuralToken rawTap = NeuralToken(
                    vec4(localDelta, localNormal.x),
                    vec4(
                        localNormal.y,
                        localNormal.z,
                        occSample,
                        tangentPlaneDist * neuralInverseDistance
                    )
                );
                neuralEncodeTap(
                    rawTap,
                    neuralMaximum,
                    neuralDenominator,
                    neuralSummaryLo,
                    neuralSummaryHi
                );
            }
#endif
        }
        if (count > 0.0) {
          occlusion /= count;
        }
        occlusion = clamp(occlusion, 0.0, 1.0);
        if (occlusion == 0.0) {
          occlusion = 1.0;
        }
#ifdef NEURAL_DENOISE
        occlusion = clamp(
            occlusion + neuralFinish(
                occlusion,
                neuralMaximum,
                neuralDenominator,
                neuralSummaryLo,
                neuralSummaryHi
            ),
            0.0,
            1.0
        );
#endif
        gl_FragColor = vec4(occlusion, 0.5 + 0.5 * normal);
    }
    `},u_={uniforms:{sceneDepth:{value:null},resolution:{value:new fe},near:{value:.1},far:{value:1e3},viewMatrixInv:{value:new we},projectionMatrixInv:{value:new we},logDepth:{value:!1},ortho:{value:!1}},depthWrite:!1,depthTest:!1,vertexShader:`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 1);
    }`,fragmentShader:`
    uniform highp sampler2D sceneDepth;
    uniform vec2 resolution;
    uniform float near;
    uniform float far;
    uniform bool logDepth;
    uniform bool ortho;
    uniform mat4 viewMatrixInv;
    uniform mat4 projectionMatrixInv;
    varying vec2 vUv;
    layout(location = 1) out vec4 gNormal;
    vec3 getWorldPosLog(vec3 posS) {
        vec2 uv = posS.xy;
        float z = posS.z;
        float nearZ =near;
        float farZ = far;
        float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
        float a = farZ / (farZ - nearZ);
        float b = farZ * nearZ / (nearZ - farZ);
        float linDepth = a + b / depth;
        vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
        vec4 wpos = projectionMatrixInv * clipVec;
        return wpos.xyz / wpos.w;
      }
      vec3 getWorldPos(float depth, vec2 coord) {
        if (logDepth && !ortho) {
          return getWorldPosLog(vec3(coord, depth));
        }
        if (ortho) {
          #ifdef REVERSEDEPTH
          float z = depth;
          #else
          float z = depth * 2. - 1.;
          #endif
          vec4 clipSpacePosition = vec4(coord * 2. - 1., z, 1.);
          vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
          viewSpacePosition.xyz /= viewSpacePosition.w;
          return viewSpacePosition.xyz;
        }
        vec2 ndc = coord * 2. - 1.;
        #ifdef REVERSEDEPTH
        float ndcZ = depth;
        #else
        float ndcZ = depth * 2. - 1.;
        #endif
        mat4 Q = projectionMatrixInv;
        vec3 view = vec3(Q[0][0] * ndc.x + Q[3][0], Q[1][1] * ndc.y + Q[3][1], Q[3][2]);
        float invW = 1. / (Q[2][3] * ndcZ + Q[3][3]);
        return view * invW;
    }
  
    vec3 computeNormal(vec3 worldPos, vec2 vUv) {
      ivec2 p = ivec2(vUv * resolution);
      float c0 = texelFetch(sceneDepth, p, 0).x;
      float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
      float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
      float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
      float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
      float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
      float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
      float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
      float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;
  
      float dl = abs((2.0 * l1 - l2) - c0);
      float dr = abs((2.0 * r1 - r2) - c0);
      float db = abs((2.0 * b1 - b2) - c0);
      float dt = abs((2.0 * t1 - t2) - c0);
  
      vec3 ce = getWorldPos(c0, vUv).xyz;
  
      vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                            : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
      vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                            : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;
  
      return normalize(cross(dpdx, dpdy));
  }
    void main() {
        vec2 uv = vUv - vec2(0.5) / resolution;
        vec2 pixelSize = vec2(1.0) / resolution;
        highp vec2[4] uvSamples;
        uvSamples[0] = uv;
        uvSamples[1] = uv + vec2(pixelSize.x, 0.0);
        uvSamples[2] = uv + vec2(0.0, pixelSize.y);
        uvSamples[3] = uv + pixelSize;
        float depth00 = texture2D(sceneDepth, uvSamples[0]).r;
        float depth10 = texture2D(sceneDepth, uvSamples[1]).r;
        float depth01 = texture2D(sceneDepth, uvSamples[2]).r;
        float depth11 = texture2D(sceneDepth, uvSamples[3]).r;
        float minDepth = min(min(depth00, depth10), min(depth01, depth11));
        float maxDepth = max(max(depth00, depth10), max(depth01, depth11));
        float targetDepth = minDepth;
        // Checkerboard pattern to avoid artifacts
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 2.0) > 0.5) { 
            targetDepth = maxDepth;
        }
        int chosenIndex = 0;
        float[4] samples;
        samples[0] = depth00;
        samples[1] = depth10;
        samples[2] = depth01;
        samples[3] = depth11;
        for(int i = 0; i < 4; ++i) {
            if (samples[i] == targetDepth) {
                chosenIndex = i;
                break;
            }
        }
        gl_FragColor = vec4(samples[chosenIndex], 0.0, 0.0, 1.0);
        gNormal = vec4(computeNormal(
            getWorldPos(samples[chosenIndex], uvSamples[chosenIndex]), uvSamples[chosenIndex]
        ), 0.0);
    }`},h_="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",f_=Uint8Array.from(atob(h_),s=>s.charCodeAt(0));var d_=f_;const p_=parseInt(Gr.replace(/\D+/g,"")),m_=p_>=162?class extends Dt{constructor(s=1,e=1,t=1,n={}){super(s,e,{...n,count:t}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}:class extends Dt{constructor(s=1,e=1,t=1,n={}){super(s,e,n),this.isWebGLMultipleRenderTargets=!0;const i=this.texture;this.texture=[];for(let r=0;r<t;r++)this.texture[r]=i.clone(),this.texture[r].isRenderTargetTexture=!0}setSize(s,e,t=1){if(this.width!==s||this.height!==e||this.depth!==t){this.width=s,this.height=e,this.depth=t;for(let n=0,i=this.texture.length;n<i;n++)this.texture[n].image.width=s,this.texture[n].image.height=e,this.texture[n].image.depth=t;this.dispose()}this.viewport.set(0,0,s,e),this.scissor.set(0,0,s,e)}copy(s){this.dispose(),this.width=s.width,this.height=s.height,this.depth=s.depth,this.scissor.copy(s.scissor),this.scissorTest=s.scissorTest,this.viewport.copy(s.viewport),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,s.depthTexture!==null&&(this.depthTexture=s.depthTexture.clone()),this.texture.length=0;for(let e=0,t=s.texture.length;e<t;e++)this.texture[e]=s.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}};function sh(s,e,t){if(e.getQueryParameter(s,e.QUERY_RESULT_AVAILABLE)){const r=e.getQueryParameter(s,e.QUERY_RESULT)/1e6;t.lastTime=t.lastTime===0?r:t.timeRollingAverage*t.lastTime+(1-t.timeRollingAverage)*r}else setTimeout(()=>{sh(s,e,t)},1)}const Ft={Default:1,Log:2,Reverse:3};class g_ extends hs{constructor(e,t,n=512,i=512){super(),this.width=Math.floor(n),this.height=Math.floor(i),this.clear=!0,this._neuralDenoiseWarningKey=null,this.camera=t,this.scene=e,this.configuration=new Proxy({aoSamples:16,aoRadius:5,aoTones:0,denoiseSamples:8,denoiseRadius:12,distanceFalloff:1,intensity:5,denoiseIterations:2,renderMode:0,biasOffset:0,biasMultiplier:0,color:new Me(0,0,0),gammaCorrection:!0,depthBufferType:Ft.Default,screenSpaceRadius:!1,halfRes:!1,depthAwareUpsampling:!0,autoRenderBeauty:!0,colorMultiply:!0,transparencyAware:!1,stencil:!1,accumulate:!1,neuralDenoise:!1},{set:(r,a,o)=>{const l=r[a];if(r[a]=o,o.equals?o.equals(l)||this.firstFrame():l!==o&&this.firstFrame(),a==="aoSamples"&&l!==o&&this.configureAOPass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),a==="denoiseSamples"&&l!==o&&this.configureDenoisePass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),a==="neuralDenoise"&&l!==o){const c=o&&(r.aoSamples!==16||r.halfRes),u=o&&r.halfRes;o&&(r.aoSamples=16,[4,8,16].includes(r.denoiseSamples)||(r.denoiseSamples=8),r.denoiseRadius=12,r.denoiseIterations=2,r.halfRes=!1),c&&this.configureAOPass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),u&&(this.configureHalfResTargets(),this.configureEffectCompositer(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.setSize(this.width,this.height)),this.configureDenoisePass(this.configuration.depthBufferType,this.camera.isOrthographicCamera)}return a==="halfRes"&&l!==o&&(this.configureAOPass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.configureHalfResTargets(),this.configureEffectCompositer(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.setSize(this.width,this.height)),a==="depthAwareUpsampling"&&l!==o&&this.configureEffectCompositer(this.configuration.depthBufferType,this.camera.isOrthographicCamera),a==="transparencyAware"&&l!==o&&(this.autoDetectTransparency=!1,this.configureTransparencyTarget()),a==="stencil"&&l!==o&&(this.beautyRenderTarget.dispose(),this.beautyRenderTarget=new Dt(this.width,this.height,{minFilter:pt,magFilter:_t,type:Lt,format:Rt,stencilBuffer:o}),this.beautyRenderTarget.depthTexture=new Ds(this.width,this.height,o?Ji:Cn),this.beautyRenderTarget.depthTexture.format=o?$i:yi),!0}}),this.samples=[],this.samplesDenoise=[],this.autoDetectTransparency=!0,this.frame=0,this.lastViewMatrix=new we,this.lastProjectionMatrix=new we,this.beautyRenderTarget=new Dt(this.width,this.height,{minFilter:pt,magFilter:_t,type:Lt,format:Rt,stencilBuffer:!1}),this.beautyRenderTarget.depthTexture=new Ds(this.width,this.height,Cn),this.beautyRenderTarget.depthTexture.format=yi,this.configureEffectCompositer(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.configureSampleDependentPasses(),this.configureHalfResTargets(),this.detectTransparency(),this.configureTransparencyTarget(),this.writeTargetInternal=new Dt(this.width,this.height,{minFilter:pt,magFilter:pt,depthBuffer:!1,format:Rt}),this.readTargetInternal=new Dt(this.width,this.height,{minFilter:pt,magFilter:pt,depthBuffer:!1,format:Rt}),this.accumulationRenderTarget=new Dt(this.width,this.height,{minFilter:pt,magFilter:pt,depthBuffer:!1,format:Rt,type:Lt,stencilBuffer:!1,depthBuffer:!1,alpha:!0}),this.bluenoise=new Yr(d_,128,128),this.accumulationQuad=new Hi(new vt({uniforms:{frame:{value:0},tDiffuse:{value:null}},transparent:!0,opacity:1,vertexShader:`
             varying vec2 vUv;
             void main() {
                 vUv = uv;
                 gl_Position = vec4(position, 1);
             }`,fragmentShader:`
             uniform sampler2D tDiffuse;
             uniform float frame;
                varying vec2 vUv;
                void main() {
                    vec4 color = texture2D(tDiffuse, vUv);
                    gl_FragColor = vec4(color.rgb, 1.0 / (frame + 1.0));
                }
                `})),this.bluenoise.colorSpace=Hn,this.bluenoise.wrapS=Dn,this.bluenoise.wrapT=Dn,this.bluenoise.minFilter=_t,this.bluenoise.magFilter=_t,this.bluenoise.needsUpdate=!0,this.lastTime=0,this.timeRollingAverage=.99,this._r=new fe,this._c=new Me}configureHalfResTargets(){if(this.firstFrame(),this.configuration.halfRes){this.depthDownsampleTarget=new m_(Math.floor(this.width/2),Math.floor(this.height/2),2),this.depthDownsampleTarget.textures[0].format=Xr,this.depthDownsampleTarget.textures[0].type=Yt,this.depthDownsampleTarget.textures[0].minFilter=_t,this.depthDownsampleTarget.textures[0].magFilter=_t,this.depthDownsampleTarget.textures[0].depthBuffer=!1,this.depthDownsampleTarget.textures[1].format=Rt,this.depthDownsampleTarget.textures[1].type=Lt,this.depthDownsampleTarget.textures[1].minFilter=_t,this.depthDownsampleTarget.textures[1].magFilter=_t,this.depthDownsampleTarget.textures[1].depthBuffer=!1;const e={...u_};this.configuration.depthBufferType===Ft.Reverse&&(e.fragmentShader=`#define REVERSEDEPTH
`+e.fragmentShader),this.depthDownsampleQuad=new Hi(new vt(e))}else this.depthDownsampleTarget&&(this.depthDownsampleTarget.dispose(),this.depthDownsampleTarget=null),this.depthDownsampleQuad&&(this.depthDownsampleQuad.dispose(),this.depthDownsampleQuad=null)}detectTransparency(){if(this.autoDetectTransparency){let e=!1;this.scene.traverse(t=>{t.material&&t.material.transparent&&(e=!0)}),this.configuration.transparencyAware=e}}configureTransparencyTarget(){this.configuration.transparencyAware?(this.transparencyRenderTargetDWFalse=new Dt(this.width,this.height,{minFilter:pt,magFilter:_t,type:Lt,format:Rt}),this.transparencyRenderTargetDWTrue=new Dt(this.width,this.height,{minFilter:pt,magFilter:_t,type:Lt,format:Rt}),this.transparencyRenderTargetDWTrue.depthTexture=new Ds(this.width,this.height,Cn),this.depthCopyPass=new Hi(new vt({uniforms:{depthTexture:{value:this.depthTexture},reverseDepthBuffer:{value:this.configuration.depthBufferType===Ft.Reverse}},vertexShader:`
                        varying vec2 vUv;
                        void main() {
                            vUv = uv;
                            gl_Position = vec4(position, 1);
                        }`,fragmentShader:`
                        uniform sampler2D depthTexture;
                        uniform bool reverseDepthBuffer;
                        varying vec2 vUv;
                        void main() {
                            if (reverseDepthBuffer) {
                           float d = 1.0 - texture2D(depthTexture, vUv).r;
                       
                           d += 0.00001;
                           gl_FragDepth = 1.0 - d;
                        } else {
                            float d = texture2D(depthTexture, vUv).r;
                            d += 0.00001;
                            gl_FragDepth = d;
                        }
                           gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
                        }
                        `}))):(this.transparencyRenderTargetDWFalse&&(this.transparencyRenderTargetDWFalse.dispose(),this.transparencyRenderTargetDWFalse=null),this.transparencyRenderTargetDWTrue&&(this.transparencyRenderTargetDWTrue.dispose(),this.transparencyRenderTargetDWTrue=null),this.depthCopyPass&&(this.depthCopyPass.dispose(),this.depthCopyPass=null))}renderTransparency(e){const t=this.scene.background,n=e.getClearColor(new Me),i=e.getClearAlpha(),r=new Map,a=e.autoClearDepth;this.scene.traverse(o=>{r.set(o,o.visible)}),this.scene.background=null,e.autoClearDepth=!1,e.setClearColor(new Me(0,0,0),0),this.depthCopyPass.material.uniforms.depthTexture.value=this.beautyRenderTarget.depthTexture,this.depthCopyPass.material.uniforms.reverseDepthBuffer.value=this.configuration.depthBufferType===Ft.Reverse,e.setRenderTarget(this.transparencyRenderTargetDWFalse),this.scene.traverse(o=>{o.material&&(o.visible=r.get(o)&&(o.material.transparent&&!o.material.depthWrite&&!o.userData.treatAsOpaque||!!o.userData.cannotReceiveAO))}),e.clear(!0,!0,!0),this.depthCopyPass.render(e),e.render(this.scene,this.camera),e.setRenderTarget(this.transparencyRenderTargetDWTrue),this.scene.traverse(o=>{o.material&&(o.visible=r.get(o)&&o.material.transparent&&o.material.depthWrite&&!o.userData.treatAsOpaque)}),e.clear(!0,!0,!0),this.depthCopyPass.render(e),e.render(this.scene,this.camera),this.scene.traverse(o=>{o.visible=r.get(o)}),e.setClearColor(n,i),this.scene.background=t,e.autoClearDepth=a}configureSampleDependentPasses(){this.firstFrame(),this.configureAOPass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.configureDenoisePass(this.configuration.depthBufferType,this.camera.isOrthographicCamera)}configureAOPass(e=Ft.Default,t=!1){this.firstFrame(),this.samples=this.generateHemisphereSamples(this.configuration.aoSamples);const n={...Xx};n.fragmentShader=n.fragmentShader.replace("16",this.configuration.aoSamples).replace("16.0",this.configuration.aoSamples+".0"),e===Ft.Log?n.fragmentShader=`#define LOGDEPTH
`+n.fragmentShader:e===Ft.Reverse&&(n.fragmentShader=`#define REVERSEDEPTH
`+n.fragmentShader),t&&(n.fragmentShader=`#define ORTHO
`+n.fragmentShader),this.configuration.halfRes&&(n.fragmentShader=`#define HALFRES
`+n.fragmentShader),this.effectShaderQuad?(this.effectShaderQuad.material.dispose(),this.effectShaderQuad.material=new vt(n)):this.effectShaderQuad=new Hi(new vt(n))}configureDenoisePass(e=Ft.Default,t=!1){this.firstFrame(),this.samplesDenoise=this.generateDenoiseSamples(this.configuration.denoiseSamples,11);const n={...c_};n.fragmentShader=n.fragmentShader.replace("__N8AO_DENOISE_SAMPLES__",this.configuration.denoiseSamples),e===Ft.Log?n.fragmentShader=`#define LOGDEPTH
`+n.fragmentShader:e===Ft.Reverse&&(n.fragmentShader=`#define REVERSEDEPTH
`+n.fragmentShader),t&&(n.fragmentShader=`#define ORTHO
`+n.fragmentShader),this.standardDenoiseMaterial&&this.standardDenoiseMaterial.dispose(),this.neuralDenoiseMaterial&&this.neuralDenoiseMaterial.dispose(),this.standardDenoiseMaterial=new vt(n),this.neuralDenoiseMaterial=this.configuration.neuralDenoise&&[4,8,16].includes(this.configuration.denoiseSamples)?new vt({...n,glslVersion:Po,fragmentShader:`#define NEURAL_DENOISE
layout(location = 0) out highp vec4 neuralFragColor;
#define gl_FragColor neuralFragColor
`+n.fragmentShader}):null,this.poissonBlurQuad?this.poissonBlurQuad.material=this.standardDenoiseMaterial:this.poissonBlurQuad=new Hi(this.standardDenoiseMaterial)}shouldUseNeuralDenoise(){if(!this.configuration.neuralDenoise)return this._neuralDenoiseWarningKey=null,!1;const e=[];if(this.configuration.aoSamples!==16&&e.push(`aoSamples is ${this.configuration.aoSamples} (expected 16)`),[4,8,16].includes(this.configuration.denoiseSamples)||e.push(`denoiseSamples is ${this.configuration.denoiseSamples} (expected 4, 8, or 16)`),this.configuration.denoiseRadius!==12&&e.push(`denoiseRadius is ${this.configuration.denoiseRadius} (expected 12)`),this.configuration.denoiseIterations!==2&&e.push(`denoiseIterations is ${this.configuration.denoiseIterations} (expected 2)`),this.configuration.halfRes&&e.push("halfRes is enabled (expected full resolution)"),e.length>0){const t=e.join("; ");return t!==this._neuralDenoiseWarningKey&&(console.warn(`[N8AO] neuralDenoise is enabled but cannot run: ${t}. Neural denoising has been disabled; standard denoising will be used.`),this._neuralDenoiseWarningKey=t),!1}return this._neuralDenoiseWarningKey=null,this.neuralDenoiseMaterial!==null}configureEffectCompositer(e=Ft.Default,t=!1){this.firstFrame();const n={...Yx};e===Ft.Log?n.fragmentShader=`#define LOGDEPTH
`+n.fragmentShader:e===Ft.Reverse&&(n.fragmentShader=`#define REVERSEDEPTH
`+n.fragmentShader),t&&(n.fragmentShader=`#define ORTHO
`+n.fragmentShader),this.configuration.halfRes&&this.configuration.depthAwareUpsampling&&(n.fragmentShader=`#define HALFRES
`+n.fragmentShader),this.effectCompositerQuad?(this.effectCompositerQuad.material.dispose(),this.effectCompositerQuad.material=new vt(n)):this.effectCompositerQuad=new Hi(new vt(n))}generateHemisphereSamples(e){const t=[];for(let n=0;n<e;n++){const i=2.399963*n;let r=Math.sqrt(n+.5)/Math.sqrt(e);const a=r*Math.cos(i),o=r*Math.sin(i),l=Math.sqrt(1-(a*a+o*o));t.push(new w(a,o,l))}return t}generateDenoiseSamples(e,t){const n=2*Math.PI*t/e,i=1/e,r=i,a=[];let o=i,l=0;for(let c=0;c<e;c++)a.push(new fe(Math.cos(l),Math.sin(l)).multiplyScalar(Math.pow(o,.75))),o+=r,l+=n;return a}setSize(e,t){this.firstFrame(),this.width=Math.floor(e),this.height=Math.floor(t);const n=this.configuration.halfRes?Math.floor(this.width/2):this.width,i=this.configuration.halfRes?Math.floor(this.height/2):this.height;this.beautyRenderTarget.setSize(this.width,this.height),this.writeTargetInternal.setSize(n,i),this.readTargetInternal.setSize(n,i),this.accumulationRenderTarget.setSize(n,i),this.configuration.halfRes&&this.depthDownsampleTarget.setSize(n,i),this.configuration.transparencyAware&&(this.transparencyRenderTargetDWFalse.setSize(this.width,this.height),this.transparencyRenderTargetDWTrue.setSize(this.width,this.height))}firstFrame(){this.needsFrame=!0}render(e,t,n,i,r){const o=e.capabilities.reversedDepthBuffer===!0||e.capabilities.reverseDepthBuffer===!0?Ft.Reverse:e.capabilities.logarithmicDepthBuffer?Ft.Log:Ft.Default;this.configuration.depthBufferType!==o&&(this.configuration.depthBufferType=o,this.configureAOPass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.configureDenoisePass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.configureEffectCompositer(this.configuration.depthBufferType,this.camera.isOrthographicCamera)),this.detectTransparency(),this.camera.updateMatrixWorld(),this.lastViewMatrix.equals(this.camera.matrixWorldInverse)&&this.lastProjectionMatrix.equals(this.camera.projectionMatrix)&&this.configuration.accumulate&&!this.needsFrame?this.frame++:(this.configuration.accumulate&&(e.setRenderTarget(this.accumulationRenderTarget),e.clear(!0,!0,!0)),this.frame=0,this.needsFrame=!1),this.lastViewMatrix.copy(this.camera.matrixWorldInverse),this.lastProjectionMatrix.copy(this.camera.projectionMatrix);let l,c,u;this.debugMode&&(l=e.getContext(),c=l.getExtension("EXT_disjoint_timer_query_webgl2"),c===null&&(console.error("EXT_disjoint_timer_query_webgl2 not available, disabling debug mode."),this.debugMode=!1)),this.configuration.autoRenderBeauty&&(e.setRenderTarget(this.beautyRenderTarget),e.render(this.scene,this.camera),this.configuration.transparencyAware&&this.renderTransparency(e)),this.debugMode&&(u=l.createQuery(),l.beginQuery(c.TIME_ELAPSED_EXT,u));const h=e.xr.enabled;e.xr.enabled=!1,this._r.set(this.width,this.height);let f=this.configuration.aoRadius;if(this.configuration.halfRes&&this.configuration.screenSpaceRadius&&(f*=.5),this.frame<1024/this.configuration.aoSamples){this.configuration.halfRes&&(e.setRenderTarget(this.depthDownsampleTarget),this.depthDownsampleQuad.material.uniforms.sceneDepth.value=this.beautyRenderTarget.depthTexture,this.depthDownsampleQuad.material.uniforms.resolution.value=this._r,this.depthDownsampleQuad.material.uniforms.near.value=this.camera.near,this.depthDownsampleQuad.material.uniforms.far.value=this.camera.far,this.depthDownsampleQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.depthDownsampleQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.depthDownsampleQuad.material.uniforms.logDepth.value=this.configuration.depthBufferType===Ft.Log,this.depthDownsampleQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.depthDownsampleQuad.render(e)),this.effectShaderQuad.material.uniforms.sceneDiffuse.value=this.beautyRenderTarget.texture,this.effectShaderQuad.material.uniforms.sceneDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.effectShaderQuad.material.uniforms.sceneNormal.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[1]:null,this.effectShaderQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.effectShaderQuad.material.uniforms.viewMat.value=this.camera.matrixWorldInverse,this.effectShaderQuad.material.uniforms.projViewMat.value=this.camera.projectionMatrix.clone().multiply(this.camera.matrixWorldInverse.clone()),this.effectShaderQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.effectShaderQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.effectShaderQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new w),this.effectShaderQuad.material.uniforms.biasAdjustment.value=new fe(this.configuration.biasOffset,this.configuration.biasMultiplier),this.effectShaderQuad.material.uniforms.resolution.value=this.configuration.halfRes?this._r.clone().multiplyScalar(.5).floor():this._r,this.effectShaderQuad.material.uniforms.time.value=performance.now()/1e3,this.effectShaderQuad.material.uniforms.samples.value=this.samples,this.effectShaderQuad.material.uniforms.bluenoise.value=this.bluenoise,this.effectShaderQuad.material.uniforms.radius.value=f,this.effectShaderQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.effectShaderQuad.material.uniforms.near.value=this.camera.near,this.effectShaderQuad.material.uniforms.far.value=this.camera.far,this.effectShaderQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.effectShaderQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,this.effectShaderQuad.material.uniforms.frame.value=this.frame,e.setRenderTarget(this.writeTargetInternal),this.effectShaderQuad.render(e);const d=this.shouldUseNeuralDenoise();for(let v=0;v<this.configuration.denoiseIterations;v++)[this.writeTargetInternal,this.readTargetInternal]=[this.readTargetInternal,this.writeTargetInternal],this.poissonBlurQuad.material=d&&v===1?this.neuralDenoiseMaterial:this.standardDenoiseMaterial,this.poissonBlurQuad.material.uniforms.tDiffuse.value=this.readTargetInternal.texture,this.poissonBlurQuad.material.uniforms.sceneDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.poissonBlurQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.poissonBlurQuad.material.uniforms.viewMat.value=this.camera.matrixWorldInverse,this.poissonBlurQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.poissonBlurQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.poissonBlurQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new w),this.poissonBlurQuad.material.uniforms.resolution.value=this.configuration.halfRes?this._r.clone().multiplyScalar(.5).floor():this._r,this.poissonBlurQuad.material.uniforms.time.value=performance.now()/1e3,this.poissonBlurQuad.material.uniforms.blueNoise.value=this.bluenoise,this.poissonBlurQuad.material.uniforms.radius.value=this.configuration.denoiseRadius*(this.configuration.halfRes?.5:1),this.poissonBlurQuad.material.uniforms.worldRadius.value=f,this.poissonBlurQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.poissonBlurQuad.material.uniforms.index.value=v,this.poissonBlurQuad.material.uniforms.poissonDisk.value=this.samplesDenoise,this.poissonBlurQuad.material.uniforms.near.value=this.camera.near,this.poissonBlurQuad.material.uniforms.far.value=this.camera.far,this.poissonBlurQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,e.setRenderTarget(this.writeTargetInternal),this.poissonBlurQuad.render(e);e.setRenderTarget(this.accumulationRenderTarget);const g=e.autoClear;e.autoClear=!1,this.accumulationQuad.material.uniforms.tDiffuse.value=this.writeTargetInternal.texture,this.accumulationQuad.material.uniforms.frame.value=this.frame,this.accumulationQuad.render(e),e.autoClear=g}this.configuration.transparencyAware&&(this.effectCompositerQuad.material.uniforms.transparencyDWFalse.value=this.transparencyRenderTargetDWFalse.texture,this.effectCompositerQuad.material.uniforms.transparencyDWTrue.value=this.transparencyRenderTargetDWTrue.texture,this.effectCompositerQuad.material.uniforms.transparencyDWTrueDepth.value=this.transparencyRenderTargetDWTrue.depthTexture,this.effectCompositerQuad.material.uniforms.transparencyAware.value=!0),this.effectCompositerQuad.material.uniforms.sceneDiffuse.value=this.beautyRenderTarget.texture,this.effectCompositerQuad.material.uniforms.sceneDepth.value=this.beautyRenderTarget.depthTexture,this.effectCompositerQuad.material.uniforms.aoTones.value=this.configuration.aoTones,this.effectCompositerQuad.material.uniforms.near.value=this.camera.near,this.effectCompositerQuad.material.uniforms.far.value=this.camera.far,this.effectCompositerQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.effectCompositerQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.effectCompositerQuad.material.uniforms.downsampledDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.effectCompositerQuad.material.uniforms.resolution.value=this._r,this.effectCompositerQuad.material.uniforms.blueNoise.value=this.bluenoise,this.effectCompositerQuad.material.uniforms.intensity.value=this.configuration.intensity,this.effectCompositerQuad.material.uniforms.renderMode.value=this.configuration.renderMode,this.effectCompositerQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,this.effectCompositerQuad.material.uniforms.radius.value=f,this.effectCompositerQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.effectCompositerQuad.material.uniforms.gammaCorrection.value=this.configuration.gammaCorrection,this.effectCompositerQuad.material.uniforms.tDiffuse.value=this.accumulationRenderTarget.texture,this.effectCompositerQuad.material.uniforms.color.value=this._c.copy(this.configuration.color).convertSRGBToLinear(),this.effectCompositerQuad.material.uniforms.colorMultiply.value=this.configuration.colorMultiply,this.effectCompositerQuad.material.uniforms.fog.value=!!this.scene.fog,this.scene.fog&&(this.scene.fog.isFog?(this.effectCompositerQuad.material.uniforms.fogExp.value=!1,this.effectCompositerQuad.material.uniforms.fogNear.value=this.scene.fog.near,this.effectCompositerQuad.material.uniforms.fogFar.value=this.scene.fog.far):this.scene.fog.isFogExp2?(this.effectCompositerQuad.material.uniforms.fogExp.value=!0,this.effectCompositerQuad.material.uniforms.fogDensity.value=this.scene.fog.density):console.error(`Unsupported fog type ${this.scene.fog.constructor.name} in SSAOPass.`)),e.setRenderTarget(this.renderToScreen?null:t),this.effectCompositerQuad.render(e),this.debugMode&&(l.endQuery(c.TIME_ELAPSED_EXT),sh(u,l,this)),e.xr.enabled=h}enableDebugMode(){this.debugMode=!0}disableDebugMode(){this.debugMode=!1}setDisplayMode(e){this.configuration.renderMode=["Combined","AO","No AO","Split","Split AO"].indexOf(e)}setQualityMode(e){e==="Performance"?(this.configuration.neuralDenoise=!1,this.configuration.aoSamples=8,this.configuration.denoiseSamples=4,this.configuration.denoiseRadius=12):e==="Low"?(this.configuration.neuralDenoise=!1,this.configuration.aoSamples=16,this.configuration.denoiseSamples=4,this.configuration.denoiseRadius=12):e==="Medium"?(this.configuration.neuralDenoise=!1,this.configuration.aoSamples=16,this.configuration.denoiseSamples=8,this.configuration.denoiseRadius=12):e==="High"?(this.configuration.neuralDenoise=!1,this.configuration.aoSamples=64,this.configuration.denoiseSamples=8,this.configuration.denoiseRadius=6):e==="Ultra"?(this.configuration.neuralDenoise=!1,this.configuration.aoSamples=64,this.configuration.denoiseSamples=16,this.configuration.denoiseRadius=6):["Neural-Low","Neural-Medium","Neural-High"].includes(e)&&(this.configuration.aoSamples=16,this.configuration.denoiseSamples={"Neural-Low":4,"Neural-Medium":8,"Neural-High":16}[e],this.configuration.denoiseRadius=12,this.configuration.denoiseIterations=2,this.configuration.halfRes=!1,this.configuration.neuralDenoise=!0)}}const Nr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Go extends hs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ks.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new yl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class nu extends hs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class v_ extends hs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class x_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new fe);this._width=n.width,this._height=n.height,t=new Dt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Lt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Go(Nr),this.copyPass.material.blending=Wn,this.clock=new zu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}nu!==void 0&&(a instanceof nu?n=!0:a instanceof v_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Ar={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class __ extends hs{constructor(){super(),this.uniforms=ks.clone(Ar.uniforms),this.material=new fd({name:Ar.name,uniforms:this.uniforms,vertexShader:Ar.vertexShader,fragmentShader:Ar.fragmentShader}),this._fsQuad=new yl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},$e.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ru?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===au?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ou?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===lu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===cu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const y_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class os extends hs{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new Me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Dt(r,a,{type:Lt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new Dt(r,a,{type:Lt});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new Dt(r,a,{type:Lt});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=y_;this.highPassUniforms=ks.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new fe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ks.clone(Nr.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:Nr.vertexShader,fragmentShader:Nr.fragmentShader,blending:Ki,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Me,this._oldClearAlpha=1,this._basic=new ii,this._fsQuad=new yl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=os.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=os.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}os.BlurDirectionX=new fe(1,0);os.BlurDirectionY=new fe(0,1);const S_={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new fe(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};class M_ extends Rd{constructor(e){super(e),this.type=Lt}parse(e){const a=function(R,S){switch(R){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(S||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(S||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(S||""))}},h=function(R,S,y){S=S||1024;let O=R.pos,V=-1,W=0,K="",X=String.fromCharCode.apply(null,new Uint16Array(R.subarray(O,O+128)));for(;0>(V=X.indexOf(`
`))&&W<S&&O<R.byteLength;)K+=X,W+=X.length,O+=128,X+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(O,O+128)));return-1<V?(R.pos+=W+V+1,K+X.slice(0,V)):!1},f=function(R){const S=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,V=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,W={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let K,X;for((R.pos>=R.byteLength||!(K=h(R)))&&a(1,"no header found"),(X=K.match(S))||a(3,"bad initial token"),W.valid|=1,W.programtype=X[1],W.string+=K+`
`;K=h(R),K!==!1;){if(W.string+=K+`
`,K.charAt(0)==="#"){W.comments+=K+`
`;continue}if((X=K.match(y))&&(W.gamma=parseFloat(X[1])),(X=K.match(I))&&(W.exposure=parseFloat(X[1])),(X=K.match(O))&&(W.valid|=2,W.format=X[1]),(X=K.match(V))&&(W.valid|=4,W.height=parseInt(X[1],10),W.width=parseInt(X[2],10)),W.valid&2&&W.valid&4)break}return W.valid&2||a(3,"missing format specifier"),W.valid&4||a(3,"missing image size specifier"),W},d=function(R,S,y){const I=S;if(I<8||I>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);I!==(R[2]<<8|R[3])&&a(3,"wrong scanline width");const O=new Uint8Array(4*S*y);O.length||a(4,"unable to allocate buffer space");let V=0,W=0;const K=4*I,X=new Uint8Array(4),ce=new Uint8Array(K);let Z=y;for(;Z>0&&W<R.byteLength;){W+4>R.byteLength&&a(1),X[0]=R[W++],X[1]=R[W++],X[2]=R[W++],X[3]=R[W++],(X[0]!=2||X[1]!=2||(X[2]<<8|X[3])!=I)&&a(3,"bad rgbe scanline format");let de=0,ge;for(;de<K&&W<R.byteLength;){ge=R[W++];const Le=ge>128;if(Le&&(ge-=128),(ge===0||de+ge>K)&&a(3,"bad scanline data"),Le){const Ge=R[W++];for(let Je=0;Je<ge;Je++)ce[de++]=Ge}else ce.set(R.subarray(W,W+ge),de),de+=ge,W+=ge}const Te=I;for(let Le=0;Le<Te;Le++){let Ge=0;O[V]=ce[Le+Ge],Ge+=I,O[V+1]=ce[Le+Ge],Ge+=I,O[V+2]=ce[Le+Ge],Ge+=I,O[V+3]=ce[Le+Ge],V+=4}Z--}return O},g=function(R,S,y,I){const O=R[S+3],V=Math.pow(2,O-128)/255;y[I+0]=R[S+0]*V,y[I+1]=R[S+1]*V,y[I+2]=R[S+2]*V,y[I+3]=1},v=function(R,S,y,I){const O=R[S+3],V=Math.pow(2,O-128)/255;y[I+0]=sr.toHalfFloat(Math.min(R[S+0]*V,65504)),y[I+1]=sr.toHalfFloat(Math.min(R[S+1]*V,65504)),y[I+2]=sr.toHalfFloat(Math.min(R[S+2]*V,65504)),y[I+3]=sr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=f(m),E=p.width,M=p.height,x=d(m.subarray(m.pos),E,M);let C,b,D;switch(this.type){case Yt:D=x.length/4;const R=new Float32Array(D*4);for(let y=0;y<D;y++)g(x,y*4,R,y*4);C=R,b=Yt;break;case Lt:D=x.length/4;const S=new Uint16Array(D*4);for(let y=0;y<D;y++)v(x,y*4,S,y*4);C=S,b=Lt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:E,height:M,data:C,header:p.string,gamma:p.gamma,exposure:p.exposure,type:b}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){switch(a.type){case Yt:case Lt:a.colorSpace=kt,a.minFilter=pt,a.magFilter=pt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,i)}}class T_ extends M_{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}function E_(s,e,t){const n=new x_(s),i=new g_(e,t);i.setQualityMode("Low"),Object.assign(i.configuration,{aoRadius:1.05,distanceFalloff:.65,intensity:1.8,color:new Me("#183c43"),halfRes:!0,gammaCorrection:!1,transparencyAware:!1}),n.addPass(i);const r=new os(new fe(1,1),.13,.4,1.9);n.addPass(r);const a=new Go({uniforms:{tDiffuse:{value:null},warmth:{value:1},saturation:{value:1.04}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float warmth,saturation;varying vec2 vUv;
      void main(){
        vec3 c=texture2D(tDiffuse,vUv).rgb;
        float l=dot(c,vec3(.2126,.7152,.0722));
        c=mix(vec3(l),c,saturation);
        float light=smoothstep(.08,.8,l);
        c*=mix(vec3(.965,1.005,1.035),vec3(1.025,1.01,.975),light*warmth);
        gl_FragColor=vec4(max(c,0.),1.);
      }`});n.addPass(a);const o=new __;n.addPass(o);const l=new Go(S_);n.addPass(l);let c,u=!1;const h={environmentMap:!1,contactShadows:!0,toneMapping:"Khronos PBR Neutral",pipeline:"N8AO / HDR / FXAA"};return{ready:new T_().loadAsync("./assets/flower-garden/lighting/rooitou-park-1k.hdr").then(d=>{if(u){d.dispose();return}const g=new Fo(s);c=g.fromEquirectangular(d),g.dispose(),d.dispose(),e.environment=c.texture,e.environmentRotation.y=.55,h.environmentMap=!0}),stats:h,resize(d,g){n.setSize(d,g);const v=s.getPixelRatio();l.material.uniforms.resolution.value.set(1/(d*v),1/(g*v))},weather(d){e.environmentIntensity=d==="night"?.13:d==="dusk"?.55:.75,a.uniforms.warmth.value=d==="night"?0:d==="rain"?.25:1,a.uniforms.saturation.value=d==="night"?1.025:1.04,r.strength=d==="night"?.23:.13},render(){s.info.reset(),n.render()},dispose(){u=!0,e.environment=null,c?.dispose();const d=new Set;for(const g of Object.values(i))g&&typeof g=="object"&&"dispose"in g&&typeof g.dispose=="function"&&d.add(g),g&&typeof g=="object"&&"material"in g&&g.material instanceof _n&&d.add(g.material);for(const g of d)g.dispose();for(const g of[r,a,o,l])g.dispose();n.dispose()}}}async function b_(s,e,t){const n={ready:!1,loaded:[],pending:e.assets.filter(Q=>Q.state!=="ready").map(Q=>Q.id),failed:[],draws:0,triangles:0,environmentSource:"多视角布局与完整尺度后方建筑",weather:"day",landmarks:[],environment:{ready:!1,failed:[],skyTexture:!1,trees:0,butterflies:0,reusedFlowerClumps:0}};let i=362;const r=()=>(i=Math.imul(i,1664525)+1013904223|0,(i>>>0)/4294967296),a=new Hf,o=new Rv({antialias:!0,powerPreference:"high-performance",alpha:!1});o.setPixelRatio(Math.min(devicePixelRatio,1.5)),o.outputColorSpace=Ct,o.toneMapping=Yo,o.toneMappingExposure=.98,o.info.autoReset=!1,o.shadowMap.enabled=!0,o.shadowMap.type=Xo,o.shadowMap.autoUpdate=!1,s.appendChild(o.domElement);const l=new Xt(45,1,.1,420),c=new Bv(l,o.domElement);c.enableDamping=!0,c.dampingFactor=.065,c.minDistance=8,c.maxDistance=260,c.maxPolarAngle=Math.PI*.485,c.minPolarAngle=1e-4,c.enablePan=!0,c.screenSpacePanning=!1,c.target.set(0,1,0);let u="front";function h(Q){const me=c.enableDamping;c.enableDamping=!1,c.update();const ue=Xu[Q];l.position.fromArray(ue.eye),c.target.fromArray(ue.target),c.update(),u=Q,c.enableDamping=me}const f=()=>h("front");f(),c.addEventListener("start",()=>{u="custom"});const d=new Cd(13101311,6714685,.5);a.add(d);const g=new Uo(16772553,3.1);g.target.position.set(0,0,-25),g.position.set(-84,150,53),g.castShadow=!0,g.shadow.mapSize.set(innerWidth<760?2048:4096,innerWidth<760?2048:4096),Object.assign(g.shadow.camera,{left:-155,right:155,top:175,bottom:-175,near:1,far:600}),g.shadow.bias=-12e-5,g.shadow.normalBias=.035,g.shadow.radius=5,a.add(g),a.add(g.target);const v=new Uo(11656173,.38);v.position.set(20,12,25),a.add(v),a.background=new Me("#b1dce7"),a.fog=new xi("#b1dce7",.0042);let m=.0042;const p=Fx(a),E=Bx(a),M=E_(o,a,l);M.weather("day");const x=Ox(l,c,o.domElement),C=150,b=new Float32Array(C*3),D=new Float32Array(C*3);for(let Q=0;Q<C;Q++)D[Q*3]=(r()-.5)*38,D[Q*3+1]=.5+r()*9,D[Q*3+2]=(r()-.5)*25;b.set(D);const R=new St;R.setAttribute("position",new wt(b,3));const S=Qu({color:"#fff4c7",size:.075,opacity:.65,blending:Ki,sizeAttenuation:!0}),y=new kr(R,S);a.add(y);const I=new Float32Array(320*6);for(let Q=0;Q<320;Q++){const me=(r()-.5)*43,ue=r()*17,Ie=(r()-.5)*33;I.set([me,ue,Ie,me-.04,ue+.4,Ie],Q*6)}const O=new St;O.setAttribute("position",new wt(I,3));const V=new Io(O,new sl({color:"#b7d4d0",transparent:!0,opacity:.34,depthWrite:!1}));V.visible=!1,a.add(V);const W=new gi,K=new Set;let X=!1;const ce=e.assets.filter(Q=>Q.state==="ready").map(async Q=>{try{const me=A_(Q.path),ue=await fetch(me);if(!ue.ok)throw new Error(`模型文件不可用 (${ue.status})`);const Ie=await ue.arrayBuffer();if(Q.sha256){if(!globalThis.crypto?.subtle)throw new Error("浏览器无法校验模型，请使用 HTTPS 或本地预览");if(Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",Ie)),qe=>qe.toString(16).padStart(2,"0")).join("")!==Q.sha256.toLowerCase())throw new Error("模型完整性校验失败")}const Ue=await W.parseAsync(Ie,new URL(".",me).href);if(X){w_(Ue.scene);return}const L=new ln().setFromObject(Ue.scene),ze=L.getSize(new w);if(!Number.isFinite(ze.y)||ze.y<=0)throw new Error("模型没有有效的三维网格");const Pe=Ue.scene;Pe.traverse(be=>{if(be instanceof at){be.castShadow=be.receiveShadow=!0;for(const qe of Array.isArray(be.material)?be.material:[be.material])ws(qe,Q.id==="cottage"?"house":Q.id==="pink-portal"?"petal":"organic")}});const Ae=new gn;Ae.add(Pe);const Se=Math.max(.01,Q.height);Ae.scale.setScalar(Se/ze.y);const et=L.getCenter(new w);Pe.position.sub(new w(et.x,L.min.y,et.z)),K.add(Pe);let ye=!1;for(const be of e.placements.filter(qe=>qe.assetId===Q.id)){const qe=Px(Ae),[it,A,_]=be.position;qe.position.set(it,rt(it,_)+A,_),qe.rotation.y=be.rotation??0,qe.scale.multiplyScalar(be.scale??1),qe.name=`landmark-${Q.id}`,a.add(qe),ye=!0;const G=new ln().setFromObject(qe).getSize(new w);n.landmarks.push({id:Q.id,position:qe.position.toArray(),height:G.y,width:G.x,depth:G.z}),Q.id==="pink-portal"&&Q.portalHeight!==void 0&&p.addPortal(new w(it,rt(it,_)+A+Q.portalHeight*Se/ze.y,_),.57)}if(!ye)throw new Error("模型没有场景放置位置");o.shadowMap.needsUpdate=!0,n.loaded.push(Q.id),t(n)}catch(me){n.failed.push({id:Q.id,message:me instanceof Error?me.message:"模型加载失败"}),t(n)}});function Z(Q){n.weather=Q,E.setWeather(Q),M.weather(Q),o.shadowMap.needsUpdate=!0,V.visible=Q==="rain",y.visible=Q!=="rain",Q==="night"?(g.color.set("#b5d1ff"),g.intensity=.52,g.position.set(-96,132,35),v.intensity=.12,d.color.set("#6c95c4"),d.intensity=.38,d.groundColor.set("#233d48"),a.background=new Me("#142d42"),a.fog=new xi("#142d42",.006),o.toneMappingExposure=1.05,S.opacity=.9):Q==="dusk"?(g.color.set("#ffbf87"),g.intensity=3,g.position.set(-132,54,47),v.intensity=.5,d.color.set("#bbc9ee"),d.intensity=.65,d.groundColor.set("#705e48"),a.background=new Me("#dcc9c1"),a.fog=new xi("#dcc9c1",.0048),o.toneMappingExposure=.98,S.opacity=.7):Q==="rain"?(g.color.set("#d5e1ed"),g.intensity=1.2,g.position.set(-84,150,53),v.intensity=.35,d.color.set("#ccd9df"),d.intensity=.85,d.groundColor.set("#536c50"),a.background=new Me("#afc4ca"),a.fog=new xi("#afc4ca",.01),o.toneMappingExposure=.98):(g.color.set("#ffedc9"),g.intensity=3.1,g.position.set(-84,150,53),v.intensity=.38,d.color.set("#c7e8ff"),d.intensity=.5,d.groundColor.set("#66753d"),a.background=new Me("#b1dce7"),a.fog=new xi("#b1dce7",.0042),o.toneMappingExposure=.98,S.opacity=.54),m=a.fog.density}const de=()=>{const{width:Q,height:me}=s.getBoundingClientRect();o.setSize(Q,me,!1),l.aspect=Q/Math.max(me,1),l.updateProjectionMatrix(),M.resize(Q,me)},ge=new ResizeObserver(de);ge.observe(s),de();const Te=new zu,Le=matchMedia("(prefers-reduced-motion: reduce)").matches;let Ge=0;const Je=new Set,je=()=>{if(X)return;Ge=requestAnimationFrame(je);const Q=Te.getDelta(),me=Te.elapsedTime;if(x.update(Q),p.update(me,n.weather==="night"?1:n.weather==="dusk"?.35:0,l.position),x.active){const ue=rt(l.position.x,l.position.z);y.position.set(l.position.x,ue,l.position.z-5),V.position.copy(y.position)}else y.position.set(0,0,0),V.position.set(0,0,0);if(!Le){for(let ue=0;ue<C;ue++)b[ue*3]=D[ue*3]+Math.sin(me*.16+ue)*.35,b[ue*3+1]=D[ue*3+1]+Math.sin(me*.24+ue*.2)*.4;if(R.attributes.position.needsUpdate=!0,V.visible){for(let ue=0;ue<320;ue++){const Ie=(me*6.5+ue*.19)%17;I[ue*6+1]=17-Ie,I[ue*6+4]=17.4-Ie}O.attributes.position.needsUpdate=!0}}x.active||c.update(),a.fog.density=m*Si.clamp(1-(l.position.y-30)/150,.24,1),E.update(l,me),M.render(),n.draws=o.info.render.calls,n.triangles=o.info.render.triangles;for(const ue of Je)ue()};je();const oe=(await Promise.allSettled([...ce,p.ready,E.ready,M.ready])).slice(ce.length);return n.environment={ready:oe.every(Q=>Q.status==="fulfilled"),failed:oe.flatMap((Q,me)=>Q.status==="rejected"?["花园植被与蝴蝶","天空云层","环境照明"][me]:[]),skyTexture:E.stats.skyTexture,trees:p.stats.trees,butterflies:p.stats.butterflies,reusedFlowerClumps:p.stats.reusedFlowerClumps},o.shadowMap.needsUpdate=!0,n.ready=!0,t(n),{renderer:o,scene:a,camera:l,controls:c,stats:n,walk:x,rendering:M.stats,resetView:()=>{x.stop(),f()},setWeather:Z,setView(Q){x.stop(),h(Q)},get viewId(){return u},flowerCount:p.flowerTotal,onFrame(Q){return Je.add(Q),()=>Je.delete(Q)},focus(Q,me){const[ue,Ie,Ue]=Q;if(x.active){if(x.moveTo(ue,Ue)&&me){const[Ae,Se,et]=me.target,ye=new w(Ae,rt(Ae,et)+Se,et);if(Math.hypot(Ae-ue,et-Ue)<2){const[be,qe,it]=me.eye,A=ye.clone().sub(new w(be,rt(be,it)+qe,it)).normalize();ye.copy(x.position).addScaledVector(A,8)}x.lookAt(ye)}return}const L=c.enableDamping;c.enableDamping=!1,c.update(),u="custom";const ze=me?.eye??[ue+2,Ie+7,Ue+12],Pe=me?.target??[ue,Ie+1,Ue];l.position.set(ze[0],rt(ze[0],ze[2])+ze[1],ze[2]),c.target.set(Pe[0],rt(Pe[0],Pe[2])+Pe[1],Pe[2]),c.update(),c.enableDamping=L},dispose(){X=!0,cancelAnimationFrame(Ge),x.dispose(),ge.disconnect(),Je.clear(),c.dispose();const Q=new Set,me=new Set,ue=new Set,Ie=Ue=>{if(Ue instanceof at||Ue instanceof kr||Ue instanceof Io){Ue.geometry&&Q.add(Ue.geometry);for(const L of Array.isArray(Ue.material)?Ue.material:[Ue.material]){me.add(L);for(const ze of Object.values(L))ze instanceof bt&&ue.add(ze);for(const ze of Object.values(L.userData))ze instanceof bt&&ue.add(ze);if(L instanceof vt)for(const ze of Object.values(L.uniforms))ze.value instanceof bt&&ue.add(ze.value)}}};a.traverse(Ie);for(const Ue of K)Ue.traverse(Ie);for(const Ue of Q)Ue.dispose();for(const Ue of me)Ue.dispose();for(const Ue of ue)Ue.dispose();M.dispose(),a.clear(),o.dispose(),o.domElement.remove()}}}function w_(s){s.traverse(e=>{if(e instanceof at){e.geometry.dispose();for(const t of Array.isArray(e.material)?e.material:[e.material]){for(const n of Object.values(t))n instanceof bt&&n.dispose();t.dispose()}}})}function A_(s){if(!s||/^(?:[a-z]+:|\/\/)/i.test(s)||s.split("/").includes(".."))throw new Error("模型路径必须是站内相对路径");return new URL(s.replace(/^\.\//,"").replace(/^\//,""),new URL("./",location.href)).href}const Ve=s=>document.getElementById(s),Ot=new AbortController,Qr=new Cv;let tt,Vr=!1,As;const Wo=[],pi=new w;for(const[s,e]of Object.entries(Xu)){const t=document.createElement("button");t.textContent=e.label,t.dataset.gardenView=s,t.addEventListener("click",()=>{tt?.setView(s),Ve("garden-location").textContent=`${e.label} · 全景`},{signal:Ot.signal}),Ve("garden-views").append(t)}for(const[s,e]of Nv.entries()){const t=document.createElement("button");t.textContent=`0${s+1}  ${e.label}`,t.dataset.gardenPlace=e.id,t.addEventListener("click",()=>{tt?.focus(e.position,e.view),Ve("garden-location").textContent=e.label},{signal:Ot.signal}),Ve("garden-places").append(t)}const R_=[["巨型粉花",new URL(""+new URL("pink-portal-BD3mn3bv.png",import.meta.url).href,import.meta.url).href],["藤蔓拱门",new URL(""+new URL("vine-arch-Jd0JTRRw.png",import.meta.url).href,import.meta.url).href],["远方花屋",new URL(""+new URL("cottage-ySeVGLrO.png",import.meta.url).href,import.meta.url).href],["框景古树",new URL(""+new URL("ancient-tree-BlOj_Sq5.png",import.meta.url).href,import.meta.url).href],["空中花藤",new URL(""+new URL("flowering-vine-BEAcVUAE.png",import.meta.url).href,import.meta.url).href]];for(const[s,e]of R_){const t=document.createElement("figure"),n=document.createElement("a");n.href=e,n.target="_blank",n.rel="noopener";const i=document.createElement("img");i.src=e,i.alt=`${s}独立建模参考，非3D模型`,i.loading="lazy",n.append(i);const r=document.createElement("figcaption");r.textContent=s,t.append(n,r),Ve("flower-input-grid").append(t)}function iu(s){Ve("flower-error").textContent=s,Ve("flower-error").hidden=!1,Ve("flower-loading").hidden=!0}function rh(s){Ve("flower-reference").hidden=!s,Ve("flower-reference-toggle").setAttribute("aria-pressed",String(s))}function ah(s){Ve("flower-models").hidden=!s,Ve("flower-models-toggle").setAttribute("aria-pressed",String(s)),Ve("flower-markers").hidden=!s}function C_(s){if(!As)return;const e=As.assets.length,t=e-s.loaded.length,n=As.assets.filter(a=>a.generationState==="generated"&&!s.loaded.includes(a.id)).length,i=s.loaded.length?"3D 场景":"布局预览";Ve("flower-progress").textContent=t>0?`${i} · 地标模型 ${s.loaded.length}/${e} 就绪${n?` · ${n} 项已生成待下载`:""}${s.failed.length?` · ${s.failed.length} 项加载失败`:""}`:`3D 场景 · ${s.loaded.length} 项地标模型已就绪`,s.ready&&s.environment.failed.length&&(Ve("flower-progress").textContent+=" · 部分环境未载入，请刷新"),Ve("flower-progress").hidden=s.ready&&t===0&&s.failed.length===0&&s.environment.ready;const r=Ve("flower-model-list");r.replaceChildren();for(const a of As.assets){const o=s.loaded.includes(a.id),l=s.failed.find(d=>d.id===a.id),c=document.createElement("li");c.dataset.assetId=a.id,c.dataset.state=o?"ready":l?"error":"pending";const u=document.createElement("span");u.textContent=a.label;const h={"not-submitted":"待生成",submitted:"任务已提交",generating:"混元生成中",generated:"已生成 · 待下载",downloaded:"待整理模型",failed:"生成失败","needs-review":"提交结果待核对"},f=document.createElement("span");f.textContent=o?"模型就绪":l?"加载失败":a.state==="ready"?"加载中":h[a.generationState??"not-submitted"],l&&(c.title=l.message),c.append(u,f),r.append(c)}for(const a of Wo)a.element.dataset.loaded=String(s.loaded.includes(a.assetId))}function D_(s){if(!s||typeof s!="object")throw new Error("地图清单格式不正确");const e=s;if(e.version!==1||!Array.isArray(e.assets)||!Array.isArray(e.placements)||!e.sourceReference?.path)throw new Error("地图清单缺少必要内容");const t=new Set;for(const n of e.assets){if(!n.id||!n.label||!["ready","pending"].includes(n.state)||!Number.isFinite(n.height)||n.height<=0||t.has(n.id))throw new Error("地图模型条目不正确");if(t.add(n.id),n.state==="ready"&&!n.path)throw new Error("就绪的模型缺少文件路径")}for(const n of e.placements)if(!t.has(n.assetId)||n.position?.length!==3||!n.position.every(Number.isFinite))throw new Error("地图地标位置不正确")}async function P_(){try{const s=await fetch("./assets/flower-sea/manifest.json",{signal:Ot.signal});if(!s.ok)throw new Error(`地图清单暂时无法读取 (${s.status})`);const e=await s.json();D_(e),As=e;const t=new URL(e.sourceReference.path,new URL("./",location.href));if(t.origin!==location.origin)throw new Error("原图路径必须在当前网站内");Ve("flower-reference-image").src=t.href,Ve("flower-reference-caption").textContent=e.sourceReference.title;for(const i of e.assets){const r=e.placements.find(u=>u.assetId===i.id);if(!r||i.state==="ready")continue;const a=document.createElement("span");a.className="flower-marker",a.textContent=i.label,a.dataset.loaded="false",Ve("flower-markers").append(a);const[o,l,c]=r.position;Wo.push({element:a,position:new w(o,rt(o,c)+l+.7,c),assetId:i.id})}if(Ve("flower-markers").hidden=!0,tt=await b_(Ve("flower-canvas"),e,C_),Vr){tt.dispose();return}let n;tt.onFrame(()=>{const i=tt.walk.active;i!==n&&(n=i,Ve("garden-walk").setAttribute("aria-pressed",String(i)),Ve("garden-walk").innerHTML=i?"↗ <span>返回鸟瞰</span>":"♧ <span>走入花园</span>",Ve("garden-help").textContent=i?"W A S D 行走 · Shift 快走 · 拖动环顾 · Esc 返回":"拖动环绕 · 滚轮缩放 · 走入花园可自由探索",Ve("garden-touch").hidden=!i);const r=Ve("flower-canvas").getBoundingClientRect();for(const a of Wo)pi.copy(a.position).project(tt.camera),a.element.hidden=a.element.dataset.loaded==="true"||pi.z>1||pi.z<-1||Math.abs(pi.x)>1.15||Math.abs(pi.y)>1.15,a.element.style.left=`${(pi.x*.5+.5)*r.width}px`,a.element.style.top=`${(-pi.y*.5+.5)*r.height}px`}),tt.renderer.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),iu("浏览器的三维渲染已暂停。请刷新页面；若仍然无法打开，请在 Chrome 或 Edge 中开启硬件加速。")},{signal:Ot.signal}),Ve("flower-loading").hidden=!0,Object.defineProperty(window,"__flowerSea",{configurable:!0,get:()=>Object.freeze({ready:tt?.stats.ready??!1,loaded:[...tt?.stats.loaded??[]],pending:[...tt?.stats.pending??[]],failed:tt?.stats.failed.map(i=>({...i}))??[],triangles:tt?.stats.triangles??0,draws:tt?.stats.draws??0,weather:tt?.stats.weather??"day",camera:tt?.camera.position.toArray(),target:tt?.controls.target.toArray(),view:tt?.viewId,landmarks:tt?.stats.landmarks.map(i=>({...i,position:[...i.position]})),assetCount:e.assets.length,walking:tt?.walk.active,player:tt?.walk.position.toArray(),flowerCount:tt?.flowerCount,music:Qr.snapshot,environment:tt?{...tt.stats.environment,failed:[...tt.stats.environment.failed]}:void 0,rendering:tt?{...tt.rendering}:void 0})})}catch(s){if(Vr)return;Ve("flower-progress").textContent="场景尚未载入",iu(`${s instanceof Error?s.message:"场景加载失败"}。请刷新重试。此场景需要支持 WebGL 2 的浏览器。`),console.error("Flower sea scene:",s)}}Ve("flower-reference-toggle").addEventListener("click",()=>rh(Ve("flower-reference").hidden),{signal:Ot.signal});Ve("flower-inputs-toggle").addEventListener("click",()=>Ve("flower-inputs").showModal(),{signal:Ot.signal});Ve("flower-inputs-close").addEventListener("click",()=>Ve("flower-inputs").close(),{signal:Ot.signal});Ve("flower-reference-close").addEventListener("click",()=>rh(!1),{signal:Ot.signal});Ve("flower-models-toggle").addEventListener("click",()=>ah(Ve("flower-models").hidden),{signal:Ot.signal});Ve("flower-models-close").addEventListener("click",()=>ah(!1),{signal:Ot.signal});Ve("flower-reset").addEventListener("click",()=>tt?.resetView(),{signal:Ot.signal});Ve("garden-walk").addEventListener("click",()=>{tt&&(tt.walk.active?tt.walk.stop():tt.walk.start())},{signal:Ot.signal});Ve("flower-weather").addEventListener("change",s=>{const e=s.target.value;["day","dusk","rain","night"].includes(e)&&(tt?.setWeather(e),Qr.setWeather(e==="rain"?"rain":"clear"))},{signal:Ot.signal});Ve("flower-sound").addEventListener("click",async()=>{const s=Ve("flower-sound");s.disabled=!0;try{const e=await Qr.toggle();s.setAttribute("aria-pressed",String(e)),s.innerHTML=e?"♪ <span>原版 BGM 已开启</span>":"♪ <span>原版 BGM</span>"}catch{s.textContent="音乐暂不可用"}finally{s.disabled=!1}},{signal:Ot.signal});function oh(){Vr||(Vr=!0,Ot.abort(),tt?.dispose(),Qr.dispose(),delete window.__flowerSea)}window.addEventListener("pagehide",s=>{s.persisted||oh()},{signal:Ot.signal});window.addEventListener("beforeunload",oh,{signal:Ot.signal});P_();
