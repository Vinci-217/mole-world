(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="180",Is={ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ef=0,ih=1,Af=2,Ku=1,$u=2,mi=3,ri=0,$e=1,Ce=2,We=0,Ns=1,Or=2,sh=3,rh=4,Ju=5,Gn=100,Rf=101,Cf=102,Pf=103,Lf=104,Sr=200,Df=201,If=202,Nf=203,ml=204,gl=205,_l=206,Uf=207,vl=208,Of=209,Ff=210,kf=211,Bf=212,zf=213,Vf=214,xl=0,Ml=1,yl=2,ks=3,Sl=4,wl=5,Tl=6,bl=7,xc=0,Hf=1,Gf=2,ki=0,Qu=1,td=2,ed=3,Mc=4,nd=5,id=6,sd=7,oh="attached",Wf="detached",rd=300,Bs=301,zs=302,El=303,Al=304,sa=306,Yn=1e3,Fi=1001,Zo=1002,Ye=1003,od=1004,wr=1005,Mn=1006,Vo=1007,Mi=1008,jn=1009,ad=1010,ld=1011,Fr=1012,yc=1013,is=1014,qn=1015,Un=1016,Sc=1017,wc=1018,Vs=1020,cd=35902,hd=35899,ud=1021,dd=1022,yn=1023,kr=1026,Hs=1027,Tc=1028,bc=1029,fd=1030,Ec=1031,Ac=1033,Ho=33776,Go=33777,Wo=33778,Xo=33779,Rl=35840,Cl=35841,Pl=35842,Ll=35843,Dl=36196,Il=37492,Nl=37496,Ul=37808,Ol=37809,Fl=37810,kl=37811,Bl=37812,zl=37813,Vl=37814,Hl=37815,Gl=37816,Wl=37817,Xl=37818,ql=37819,Yl=37820,jl=37821,Zl=36492,Kl=36494,$l=36495,Jl=36283,Ql=36284,tc=36285,ec=36286,Br=2300,zr=2301,va=2302,ah=2400,lh=2401,ch=2402,Xf=2500,qf=0,pd=1,nc=2,Yf=3200,md=3201,ra=0,jf=1,_i="",Ie="srgb",on="srgb-linear",Ko="linear",ue="srgb",cs=7680,hh=519,Zf=512,Kf=513,$f=514,gd=515,Jf=516,Qf=517,tp=518,ep=519,ic=35044,uh="300 es",ii=2e3,$o=2001;class os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dh=1234567;const Cr=Math.PI/180,Gs=180/Math.PI;function On(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[s&255]+Ze[s>>8&255]+Ze[s>>16&255]+Ze[s>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Yt(s,t,e){return Math.max(t,Math.min(e,s))}function Rc(s,t){return(s%t+t)%t}function np(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function ip(s,t,e){return s!==t?(e-s)/(t-s):0}function Pr(s,t,e){return(1-e)*s+e*t}function sp(s,t,e,n){return Pr(s,t,1-Math.exp(-e*n))}function rp(s,t=1){return t-Math.abs(Rc(s,t*2)-t)}function op(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ap(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function lp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function cp(s,t){return s+Math.random()*(t-s)}function hp(s){return s*(.5-Math.random())}function up(s){s!==void 0&&(dh=s);let t=dh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dp(s){return s*Cr}function fp(s){return s*Gs}function pp(s){return(s&s-1)===0&&s!==0}function mp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function gp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _p(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function de(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Je={DEG2RAD:Cr,RAD2DEG:Gs,generateUUID:On,clamp:Yt,euclideanModulo:Rc,mapLinear:np,inverseLerp:ip,lerp:Pr,damp:sp,pingpong:rp,smoothstep:op,smootherstep:ap,randInt:lp,randFloat:cp,randFloatSpread:hp,seededRandom:up,degToRad:dp,radToDeg:fp,isPowerOfTwo:pp,ceilPowerOfTwo:mp,floorPowerOfTwo:gp,setQuaternionFromProperEuler:_p,normalize:de,denormalize:Wn};class ${constructor(t=0,e=0){$.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const b=Math.sqrt(M),A=Math.atan2(b,p*x);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const v=a*x;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xa.copy(this).projectOnVector(t),this.sub(xa)}reflect(t){return this.sub(xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new E,fh=new wn;class qt{constructor(t,e,n,i,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],M=i[4],v=i[7],b=i[2],A=i[5],C=i[8];return r[0]=o*_+a*x+l*b,r[3]=o*m+a*M+l*A,r[6]=o*p+a*v+l*C,r[1]=c*_+h*x+u*b,r[4]=c*m+h*M+u*A,r[7]=c*p+h*v+u*C,r[2]=d*_+f*x+g*b,r[5]=d*m+f*M+g*A,r[8]=d*p+f*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new qt;function _d(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Vr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vp(){const s=Vr("canvas");return s.style.display="block",s}const ph={};function Hr(s){s in ph||(ph[s]=!0,console.warn(s))}function xp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const mh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mp(){const s={enabled:!0,workingColorSpace:on,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_i?Ko:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Hr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Hr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[on]:{primaries:t,whitePoint:n,transfer:Ko,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),s}const ne=Mp();function wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hs;class yp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hs===void 0&&(hs=Vr("canvas")),hs.width=t.width,hs.height=t.height;const i=hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sp=0;class Cc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=On(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ya(i[o].image)):r.push(ya(i[o]))}else r=ya(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ya(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wp=0;const Sa=new E;class Ue extends os{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=Fi,i=Fi,r=Mn,o=Mi,a=yn,l=jn,c=Ue.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=On(),this.name="",this.source=new Cc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sa).x}get height(){return this.source.getSize(Sa).y}get depth(){return this.source.getSize(Sa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yn:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yn:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=rd;Ue.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(f+1)/2,b=(p+1)/2,A=(h+d)/4,C=(u+_)/4,L=(g+m)/4;return M>v&&M>b?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=C/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=L/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=C/r,i=L/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tp extends os{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Ue(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Cc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends Tp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vd extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bp extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),eo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(t.matrixWorld),this.union(eo)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),no.subVectors(this.max,lr),us.subVectors(t.a,lr),ds.subVectors(t.b,lr),fs.subVectors(t.c,lr),Ai.subVectors(ds,us),Ri.subVectors(fs,ds),Xi.subVectors(us,fs);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Xi.z,Xi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Xi.z,0,-Xi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Xi.y,Xi.x,0];return!wa(e,us,ds,fs,no)||(e=[1,0,0,0,1,0,0,0,1],!wa(e,us,ds,fs,no))?!1:(io.crossVectors(Ai,Ri),e=[io.x,io.y,io.z],wa(e,us,ds,fs,no))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ci=[new E,new E,new E,new E,new E,new E,new E,new E],kn=new E,eo=new Zn,us=new E,ds=new E,fs=new E,Ai=new E,Ri=new E,Xi=new E,lr=new E,no=new E,io=new E,qi=new E;function wa(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){qi.fromArray(s,r);const a=i.x*Math.abs(qi.x)+i.y*Math.abs(qi.y)+i.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ep=new Zn,cr=new E,Ta=new E;class oi{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ep.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);const e=cr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(cr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(Ta)),this.expandByPoint(cr.copy(t.center).sub(Ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const hi=new E,ba=new E,so=new E,Ci=new E,Ea=new E,ro=new E,Aa=new E;class tr{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ba.copy(t).add(e).multiplyScalar(.5),so.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(ba);const r=t.distanceTo(e)*.5,o=-this.direction.dot(so),a=Ci.dot(this.direction),l=-Ci.dot(so),c=Ci.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ba).addScaledVector(so,d),f}intersectSphere(t,e){hi.subVectors(t.center,this.origin);const n=hi.dot(this.direction),i=hi.dot(hi)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,i,r){Ea.subVectors(e,t),ro.subVectors(n,t),Aa.crossVectors(Ea,ro);let o=this.direction.dot(Aa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);const l=a*this.direction.dot(ro.crossVectors(Ci,ro));if(l<0)return null;const c=a*this.direction.dot(Ea.cross(Ci));if(c<0||l+c>o)return null;const h=-a*Ci.dot(Aa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ap,t,Rp)}lookAt(t,e,n){const i=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Pi.crossVectors(n,gn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Pi.crossVectors(n,gn)),Pi.normalize(),oo.crossVectors(gn,Pi),i[0]=Pi.x,i[4]=oo.x,i[8]=gn.x,i[1]=Pi.y,i[5]=oo.y,i[9]=gn.y,i[2]=Pi.z,i[6]=oo.z,i[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],M=n[7],v=n[11],b=n[15],A=i[0],C=i[4],L=i[8],w=i[12],S=i[1],P=i[5],N=i[9],k=i[13],q=i[2],z=i[6],X=i[10],Z=i[14],G=i[3],it=i[7],pt=i[11],yt=i[15];return r[0]=o*A+a*S+l*q+c*G,r[4]=o*C+a*P+l*z+c*it,r[8]=o*L+a*N+l*X+c*pt,r[12]=o*w+a*k+l*Z+c*yt,r[1]=h*A+u*S+d*q+f*G,r[5]=h*C+u*P+d*z+f*it,r[9]=h*L+u*N+d*X+f*pt,r[13]=h*w+u*k+d*Z+f*yt,r[2]=g*A+_*S+m*q+p*G,r[6]=g*C+_*P+m*z+p*it,r[10]=g*L+_*N+m*X+p*pt,r[14]=g*w+_*k+m*Z+p*yt,r[3]=x*A+M*S+v*q+b*G,r[7]=x*C+M*P+v*z+b*it,r[11]=x*L+M*N+v*X+b*pt,r[15]=x*w+M*k+v*Z+b*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,M=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,v=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,b=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,A=e*x+n*M+i*v+r*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=x*C,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*C,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*C,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*C,t[4]=M*C,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*C,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*C,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*C,t[8]=v*C,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*C,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*C,t[12]=b*C,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*C,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*C,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,x=l*c,M=l*h,v=l*u,b=n.x,A=n.y,C=n.z;return i[0]=(1-(_+p))*b,i[1]=(f+v)*b,i[2]=(g-M)*b,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(d+p))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(g+M)*C,i[9]=(m-x)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ps.set(i[0],i[1],i[2]).length();const o=ps.set(i[4],i[5],i[6]).length(),a=ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Bn.copy(this);const c=1/r,h=1/o,u=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ii,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===ii)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===$o)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ii,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===ii)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===$o)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ps=new E,Bn=new zt,Ap=new E(0,0,0),Rp=new E(1,1,1),Pi=new E,oo=new E,gn=new E,_h=new zt,vh=new wn;class Fn{constructor(t=0,e=0,n=0,i=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _h.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_h,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vh.setFromEuler(this),this.setFromQuaternion(vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Pc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cp=0;const xh=new E,ms=new wn,ui=new zt,ao=new E,hr=new E,Pp=new E,Lp=new wn,Mh=new E(1,0,0),yh=new E(0,1,0),Sh=new E(0,0,1),wh={type:"added"},Dp={type:"removed"},gs={type:"childadded",child:null},Ra={type:"childremoved",child:null};class me extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new E,e=new Fn,n=new wn,i=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new qt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Mh,t)}rotateY(t){return this.rotateOnAxis(yh,t)}rotateZ(t){return this.rotateOnAxis(Sh,t)}translateOnAxis(t,e){return xh.copy(t).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mh,t)}translateY(t){return this.translateOnAxis(yh,t)}translateZ(t){return this.translateOnAxis(Sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ao.copy(t):ao.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(hr,ao,this.up):ui.lookAt(ao,hr,this.up),this.quaternion.setFromRotationMatrix(ui),i&&(ui.extractRotation(i.matrixWorld),ms.setFromRotationMatrix(ui),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wh),gs.child=t,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dp),Ra.child=t,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wh),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,Pp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Lp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new E(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new E,di=new E,Ca=new E,fi=new E,_s=new E,vs=new E,Th=new E,Pa=new E,La=new E,Da=new E,Ia=new le,Na=new le,Ua=new le;class Ln{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),zn.subVectors(t,e),i.cross(zn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){zn.subVectors(i,e),di.subVectors(n,e),Ca.subVectors(t,e);const o=zn.dot(zn),a=zn.dot(di),l=zn.dot(Ca),c=di.dot(di),h=di.dot(Ca),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ia.setScalar(0),Na.setScalar(0),Ua.setScalar(0),Ia.fromBufferAttribute(t,e),Na.fromBufferAttribute(t,n),Ua.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ia,r.x),o.addScaledVector(Na,r.y),o.addScaledVector(Ua,r.z),o}static isFrontFacing(t,e,n,i){return zn.subVectors(n,e),di.subVectors(t,e),zn.cross(di).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),zn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ln.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;_s.subVectors(i,n),vs.subVectors(r,n),Pa.subVectors(t,n);const l=_s.dot(Pa),c=vs.dot(Pa);if(l<=0&&c<=0)return e.copy(n);La.subVectors(t,i);const h=_s.dot(La),u=vs.dot(La);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(_s,o);Da.subVectors(t,r);const f=_s.dot(Da),g=vs.dot(Da);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(vs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Th.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Th,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(_s,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},lo={h:0,s:0,l:0};function Oa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=Rc(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Oa(o,r,t+1/3),this.g=Oa(o,r,t),this.b=Oa(o,r,t-1/3)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=xd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ne.workingToColorSpace(Ke.copy(this),t),Math.round(Yt(Ke.r*255,0,255))*65536+Math.round(Yt(Ke.g*255,0,255))*256+Math.round(Yt(Ke.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ke.copy(this),e);const n=Ke.r,i=Ke.g,r=Ke.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ie){ne.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,i=Ke.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(lo);const n=Pr(Li.h,lo.h,e),i=Pr(Li.s,lo.s,e),r=Pr(Li.l,lo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new mt;mt.NAMES=xd;let Ip=0;class Sn extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Ns,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ml&&(n.blendSrc=this.blendSrc),this.blendDst!==gl&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class yi extends Sn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new E,co=new $;let Np=0;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Np++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ic,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)co.fromBufferAttribute(this,e),co.applyMatrix3(t),this.setXY(e,co.x,co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ic&&(t.usage=this.usage),t}}class Md extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yd extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xt extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Up=0;const En=new zt,Fa=new me,xs=new E,_n=new Zn,ur=new Zn,ze=new E;class pe extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_d(t)?yd:Md)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(_n.min,ur.min),_n.expandByPoint(ze),ze.addVectors(_n.max,ur.max),_n.expandByPoint(ze)):(_n.expandByPoint(ur.min),_n.expandByPoint(ur.max))}_n.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(t,c),ze.add(xs)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new E,l[L]=new E;const c=new E,h=new E,u=new E,d=new $,f=new $,g=new $,_=new E,m=new E;function p(L,w,S){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[L].add(_),a[w].add(_),a[S].add(_),l[L].add(m),l[w].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,w=x.length;L<w;++L){const S=x[L],P=S.start,N=S.count;for(let k=P,q=P+N;k<q;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new E,v=new E,b=new E,A=new E;function C(L){b.fromBufferAttribute(i,L),A.copy(b);const w=a[L];M.copy(w),M.sub(b.multiplyScalar(b.dot(w))).normalize(),v.crossVectors(A,w);const P=v.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,P)}for(let L=0,w=x.length;L<w;++L){const S=x[L],P=S.start,N=S.count;for(let k=P,q=P+N;k<q;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,r=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Oe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bh=new zt,Yi=new tr,ho=new oi,Eh=new E,uo=new E,fo=new E,po=new E,ka=new E,mo=new E,Ah=new E,go=new E;class At extends me{constructor(t=new pe,e=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ka.fromBufferAttribute(u,t),o?mo.addScaledVector(ka,h):mo.addScaledVector(ka.sub(e),h))}e.add(mo)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(ho.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(ho,Eh)===null||Yi.origin.distanceToSquared(Eh)>(t.far-t.near)**2))&&(bh.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(bh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,b=M;v<b;v+=3){const A=a.getX(v),C=a.getX(v+1),L=a.getX(v+2);i=_o(this,p,t,n,c,h,u,A,C,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=_o(this,o,t,n,c,h,u,x,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,b=M;v<b;v+=3){const A=v,C=v+1,L=v+2;i=_o(this,p,t,n,c,h,u,A,C,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,M=m+1,v=m+2;i=_o(this,o,t,n,c,h,u,x,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Op(s,t,e,n,i,r,o,a){let l;if(t.side===$e?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===ri,a),l===null)return null;go.copy(a),go.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(go);return c<e.near||c>e.far?null:{distance:c,point:go.clone(),object:s}}function _o(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,uo),s.getVertexPosition(l,fo),s.getVertexPosition(c,po);const h=Op(s,t,e,n,uo,fo,po,Ah);if(h){const u=new E;Ln.getBarycoord(Ah,uo,fo,po,u),i&&(h.uv=Ln.getInterpolatedAttribute(i,a,l,c,u,new $)),r&&(h.uv1=Ln.getInterpolatedAttribute(r,a,l,c,u,new $)),o&&(h.normal=Ln.getInterpolatedAttribute(o,a,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new E,materialIndex:0};Ln.getNormal(uo,fo,po,d.normal),h.face=d,h.barycoord=u}return h}class Qe extends pe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(_,m,p,x,M,v,b,A,C,L,w){const S=v/C,P=b/L,N=v/2,k=b/2,q=A/2,z=C+1,X=L+1;let Z=0,G=0;const it=new E;for(let pt=0;pt<X;pt++){const yt=pt*P-k;for(let Ot=0;Ot<z;Ot++){const Zt=Ot*S-N;it[_]=Zt*x,it[m]=yt*M,it[p]=q,c.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[p]=A>0?1:-1,h.push(it.x,it.y,it.z),u.push(Ot/C),u.push(1-pt/L),Z+=1}}for(let pt=0;pt<L;pt++)for(let yt=0;yt<C;yt++){const Ot=d+yt+z*pt,Zt=d+yt+z*(pt+1),se=d+(yt+1)+z*(pt+1),$t=d+(yt+1)+z*pt;l.push(Ot,Zt,$t),l.push(Zt,se,$t),G+=6}a.addGroup(f,G,w),f+=G,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ws(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function nn(s){const t={};for(let e=0;e<s.length;e++){const n=Ws(s[e]);for(const i in n)t[i]=n[i]}return t}function Fp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Sd(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const ni={clone:Ws,merge:nn};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pe extends Sn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=Fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}let wd=class extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Di=new E,Rh=new $,Ch=new $;class sn extends wd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Rh,Ch),e.subVectors(Ch,Rh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ms=-90,ys=1;class zp extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sn(Ms,ys,t,e);i.layers=this.layers,this.add(i);const r=new sn(Ms,ys,t,e);r.layers=this.layers,this.add(r);const o=new sn(Ms,ys,t,e);o.layers=this.layers,this.add(o);const a=new sn(Ms,ys,t,e);a.layers=this.layers,this.add(a);const l=new sn(Ms,ys,t,e);l.layers=this.layers,this.add(l);const c=new sn(Ms,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$o)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Td extends Ue{constructor(t=[],e=Bs,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vp extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Td(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qe(5,5,5),r=new Pe({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:We});r.uniforms.tEquirect.value=e;const o=new At(i,r),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Mn),new zp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class re extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hp={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Lc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new mt(t),this.density=e}clone(){return new Lc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bd extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ed{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ic,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new E;class Gr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Gr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ad extends Sn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ss;const dr=new E,ws=new E,Ts=new E,bs=new $,fr=new $,Rd=new zt,vo=new E,pr=new E,xo=new E,Ph=new $,za=new $,Lh=new $;class Cd extends me{constructor(t=new Ad){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ed(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Gr(n,3,0,!1)),Ss.setAttribute("uv",new Gr(n,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new $(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),Rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Ts.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Mo(vo.set(-.5,-.5,0),Ts,o,ws,i,r),Mo(pr.set(.5,-.5,0),Ts,o,ws,i,r),Mo(xo.set(.5,.5,0),Ts,o,ws,i,r),Ph.set(0,0),za.set(1,0),Lh.set(1,1);let a=t.ray.intersectTriangle(vo,pr,xo,!1,dr);if(a===null&&(Mo(pr.set(-.5,.5,0),Ts,o,ws,i,r),za.set(0,1),a=t.ray.intersectTriangle(vo,xo,pr,!1,dr),a===null))return;const l=t.ray.origin.distanceTo(dr);l<t.near||l>t.far||e.push({distance:l,point:dr.clone(),uv:Ln.getInterpolation(dr,vo,pr,xo,Ph,za,Lh,new $),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Mo(s,t,e,n,i,r){bs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(fr.x=r*bs.x-i*bs.y,fr.y=i*bs.x+r*bs.y):fr.copy(bs),s.copy(t),s.x+=fr.x,s.y+=fr.y,s.applyMatrix4(Rd)}const Dh=new E,Ih=new le,Nh=new le,Gp=new E,Uh=new zt,yo=new E,Va=new oi,Oh=new zt,Ha=new tr;class Wp extends At{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=oh,this.bindMatrix=new zt,this.bindMatrixInverse=new zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,yo),this.boundingBox.expandByPoint(yo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,yo),this.boundingSphere.expandByPoint(yo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(i),t.ray.intersectsSphere(Va)!==!1&&(Oh.copy(i).invert(),Ha.copy(t.ray).applyMatrix4(Oh),!(this.boundingBox!==null&&Ha.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ha)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new le,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===oh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Ih.fromBufferAttribute(i.attributes.skinIndex,t),Nh.fromBufferAttribute(i.attributes.skinWeight,t),Dh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Nh.getComponent(r);if(o!==0){const a=Ih.getComponent(r);Uh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Gp.copy(Dh).applyMatrix4(Uh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Pd extends me{constructor(){super(),this.isBone=!0,this.type="Bone"}}class oa extends Ue{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Ye,h=Ye,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fh=new zt,Xp=new zt;class Dc{constructor(t=[],e=[]){this.uuid=On(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new zt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Xp;Fh.multiplyMatrices(a,e[r]),Fh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Dc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new oa(e,t,t,yn,qn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Pd),this.bones.push(o),this.boneInverses.push(new zt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class sc extends Oe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Es=new zt,kh=new zt,So=[],Bh=new Zn,qp=new zt,mr=new At,gr=new oi;class vi extends At{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Bh.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Bh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),gr.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),t.ray.intersectsSphere(gr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Es),kh.multiplyMatrices(n,Es),mr.matrixWorld=kh,mr.raycast(t,So);for(let o=0,a=So.length;o<a;o++){const l=So[o];l.instanceId=r,l.object=this,e.push(l)}So.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new oa(new Float32Array(i*this.count),i,this.count,Tc,qn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ga=new E,Yp=new E,jp=new qt;class Ni{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ga.subVectors(n,e).cross(Yp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jp.getNormalMatrix(t),i=this.coplanarPoint(Ga).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new oi,Zp=new $(.5,.5),wo=new E;class Ic{constructor(t=new Ni,e=new Ni,n=new Ni,i=new Ni,r=new Ni,o=new Ni){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],x=r[12],M=r[13],v=r[14],b=r[15];if(i[0].setComponents(c-o,f-h,p-g,b-x).normalize(),i[1].setComponents(c+o,f+h,p+g,b+x).normalize(),i[2].setComponents(c+a,f+u,p+_,b+M).normalize(),i[3].setComponents(c-a,f-u,p-_,b-M).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,f-d,p-m,b-v).normalize();else if(i[4].setComponents(c-l,f-d,p-m,b-v).normalize(),e===ii)i[5].setComponents(c+l,f+d,p+m,b+v).normalize();else if(e===$o)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){ji.center.set(0,0,0);const e=Zp.distanceTo(t.center);return ji.radius=.7071067811865476+e,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(wo.x=i.normal.x>0?t.max.x:t.min.x,wo.y=i.normal.y>0?t.max.y:t.min.y,wo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xs extends Sn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jo=new E,Qo=new E,zh=new zt,_r=new tr,To=new oi,Wa=new E,Vh=new E;class qs extends me{constructor(t=new pe,e=new Xs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Jo.fromBufferAttribute(e,i-1),Qo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Jo.distanceTo(Qo);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(i),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;zh.copy(i).invert(),_r.copy(t.ray).applyMatrix4(zh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),x=h.getX(_+1),M=bo(this,t,_r,l,p,x,_);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=bo(this,t,_r,l,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=bo(this,t,_r,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=bo(this,t,_r,l,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bo(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Jo.fromBufferAttribute(a,i),Qo.fromBufferAttribute(a,r),e.distanceSqToSegment(Jo,Qo,Wa,Vh)>n)return;Wa.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Wa);if(!(c<t.near||c>t.far))return{distance:c,point:Vh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Hh=new E,Gh=new E;class Ld extends qs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Hh.fromBufferAttribute(e,i),Gh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hh.distanceTo(Gh);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kp extends qs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ui extends Sn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wh=new zt,rc=new tr,Eo=new oi,Ao=new E;class Nc extends me{constructor(t=new pe,e=new Ui){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=r,t.ray.intersectsSphere(Eo)===!1)return;Wh.copy(i).invert(),rc.copy(t.ray).applyMatrix4(Wh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Ao.fromBufferAttribute(u,m),Xh(Ao,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Ao.fromBufferAttribute(u,g),Xh(Ao,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xh(s,t,e,n,i,r,o){const a=rc.distanceSqToPoint(s);if(a<e){const l=new E;rc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class jr extends Ue{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Uc extends Ue{constructor(t,e,n=is,i,r,o,a=Ye,l=Ye,c,h=kr,u=1){if(h!==kr&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Dd extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vi extends pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new E,h=new $;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xe extends pe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function x(){const v=new E,b=new E;let A=0;const C=(e-t)/n;for(let L=0;L<=r;L++){const w=[],S=L/r,P=S*(e-t)+t;for(let N=0;N<=i;N++){const k=N/i,q=k*l+a,z=Math.sin(q),X=Math.cos(q);b.x=P*z,b.y=-S*n+m,b.z=P*X,u.push(b.x,b.y,b.z),v.set(z,C,X).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-S),w.push(g++)}_.push(w)}for(let L=0;L<i;L++)for(let w=0;w<r;w++){const S=_[w][L],P=_[w+1][L],N=_[w+1][L+1],k=_[w][L+1];(t>0||w!==0)&&(h.push(S,P,k),A+=3),(e>0||w!==r-1)&&(h.push(P,N,k),A+=3)}c.addGroup(p,A,0),p+=A}function M(v){const b=g,A=new $,C=new E;let L=0;const w=v===!0?t:e,S=v===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const P=g;for(let N=0;N<=i;N++){const q=N/i*l+a,z=Math.cos(q),X=Math.sin(q);C.x=w*X,C.y=m*S,C.z=w*z,u.push(C.x,C.y,C.z),d.push(0,S,0),A.x=z*.5+.5,A.y=X*.5*S+.5,f.push(A.x,A.y),g++}for(let N=0;N<i;N++){const k=b+N,q=P+N;v===!0?h.push(q,q+1,k):h.push(q+1,q,k),L+=3}c.addGroup(p,L,v===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ei extends Xe{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ei(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zr extends pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new E,v=new E,b=new E;for(let A=0;A<e.length;A+=3)f(e[A+0],M),f(e[A+1],v),f(e[A+2],b),l(M,v,b,x)}function l(x,M,v,b){const A=b+1,C=[];for(let L=0;L<=A;L++){C[L]=[];const w=x.clone().lerp(v,L/A),S=M.clone().lerp(v,L/A),P=A-L;for(let N=0;N<=P;N++)N===0&&L===A?C[L][N]=w:C[L][N]=w.clone().lerp(S,N/P)}for(let L=0;L<A;L++)for(let w=0;w<2*(A-L)-1;w++){const S=Math.floor(w/2);w%2===0?(d(C[L][S+1]),d(C[L+1][S]),d(C[L][S])):(d(C[L][S+1]),d(C[L+1][S+1]),d(C[L+1][S]))}}function c(x){const M=new E;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(x),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const x=new E;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const v=m(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;o.push(v,1-b)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const M=o[x+0],v=o[x+2],b=o[x+4],A=Math.max(M,v,b),C=Math.min(M,v,b);A>.9&&C<.1&&(M<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const x=new E,M=new E,v=new E,b=new E,A=new $,C=new $,L=new $;for(let w=0,S=0;w<r.length;w+=9,S+=6){x.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),A.set(o[S+0],o[S+1]),C.set(o[S+2],o[S+3]),L.set(o[S+4],o[S+5]),b.copy(x).add(M).add(v).divideScalar(3);const P=m(b);_(A,S+0,x,P),_(C,S+2,M,P),_(L,S+4,v,P)}}function _(x,M,v,b){b<0&&x.x===1&&(o[M]=x.x-1),v.x===0&&v.z===0&&(o[M]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.vertices,t.indices,t.radius,t.details)}}class Oc extends Zr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oc(t.radius,t.detail)}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new $:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new E,i=[],r=[],o=[],a=new E,l=new zt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Yt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Yt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fc extends ai{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new $){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $p extends Fc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function kc(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Ro=new E,Xa=new kc,qa=new kc,Ya=new kc;class Id extends ai{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new E){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ro.subVectors(i[0],i[1]).add(i[0]),c=Ro);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ro.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ro),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Xa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),qa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Ya.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),qa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ya.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Xa.calc(l),qa.calc(l),Ya.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new E().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qh(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Jp(s,t){const e=1-s;return e*e*t}function Qp(s,t){return 2*(1-s)*s*t}function tm(s,t){return s*s*t}function Lr(s,t,e,n){return Jp(s,t)+Qp(s,e)+tm(s,n)}function em(s,t){const e=1-s;return e*e*e*t}function nm(s,t){const e=1-s;return 3*e*e*s*t}function im(s,t){return 3*(1-s)*s*s*t}function sm(s,t){return s*s*s*t}function Dr(s,t,e,n,i){return em(s,t)+nm(s,e)+im(s,n)+sm(s,i)}class Nd extends ai{constructor(t=new $,e=new $,n=new $,i=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new $){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dr(t,i.x,r.x,o.x,a.x),Dr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rm extends ai{constructor(t=new E,e=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new E){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dr(t,i.x,r.x,o.x,a.x),Dr(t,i.y,r.y,o.y,a.y),Dr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ud extends ai{constructor(t=new $,e=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class om extends ai{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Od extends ai{constructor(t=new $,e=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Lr(t,i.x,r.x,o.x),Lr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fd extends ai{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Lr(t,i.x,r.x,o.x),Lr(t,i.y,r.y,o.y),Lr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kd extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(qh(a,l.x,c.x,h.x,u.x),qh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new $().fromArray(i))}return this}}var ta=Object.freeze({__proto__:null,ArcCurve:$p,CatmullRomCurve3:Id,CubicBezierCurve:Nd,CubicBezierCurve3:rm,EllipseCurve:Fc,LineCurve:Ud,LineCurve3:om,QuadraticBezierCurve:Od,QuadraticBezierCurve3:Fd,SplineCurve:kd});class am extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ta[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ta[i.type]().fromJSON(i))}return this}}class Yh extends am{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ud(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Od(this.currentPoint.clone(),new $(t,e),new $(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Nd(this.currentPoint.clone(),new $(t,e),new $(n,i),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new kd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Fc(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class aa extends Yh{constructor(t){super(t),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Yh().fromJSON(i))}return this}}function lm(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Bd(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=fm(s,t,r,e)),s.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<i;d+=e){const f=s[d],g=s[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Wr(r,o,e,a,l,c,0),o}function Bd(s,t,e,n,i){let r;if(i===Tm(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=jh(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=jh(o/n|0,s[o],s[o+1],r);return r&&Ys(r,r.next)&&(qr(r),r=r.next),r}function ss(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ys(e,e.next)||Le(e.prev,e,e.next)===0)){if(qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&vm(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?hm(s,n,i,r):cm(s)){t.push(l.i,s.i,c.i),qr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=um(ss(s),t),Wr(s,t,e,n,i,r,2)):o===2&&dm(s,t,e,n,i,r):Wr(ss(s),t,e,n,i,r,1);break}}}function cm(s){const t=s.prev,e=s,n=s.next;if(Le(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Tr(i,a,r,l,o,c,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hm(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Le(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),_=Math.max(a,l,c),m=Math.max(h,u,d),p=oc(f,g,t,e,n),x=oc(_,m,t,e,n);let M=s.prevZ,v=s.nextZ;for(;M&&M.z>=p&&v&&v.z<=x;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Tr(a,h,l,u,c,d,M.x,M.y)&&Le(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Tr(a,h,l,u,c,d,v.x,v.y)&&Le(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Tr(a,h,l,u,c,d,M.x,M.y)&&Le(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Tr(a,h,l,u,c,d,v.x,v.y)&&Le(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function um(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Ys(n,i)&&Vd(n,e,e.next,i)&&Xr(n,i)&&Xr(i,n)&&(t.push(n.i,e.i,i.i),qr(e),qr(e.next),e=s=i),e=e.next}while(e!==s);return ss(e)}function dm(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ym(o,a)){let l=Hd(o,a);o=ss(o,o.next),l=ss(l,l.next),Wr(o,t,e,n,i,r,0),Wr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function fm(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Bd(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Mm(c))}i.sort(pm);for(let r=0;r<i.length;r++)e=mm(i[r],e);return e}function pm(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function mm(s,t){const e=gm(s,t);if(!e)return t;const n=Hd(e,s);return ss(n,n.next),ss(e,e.next)}function gm(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(Ys(s,e))return e;do{if(Ys(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&zd(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Xr(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&_m(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function _m(s,t){return Le(s.prev,s,t.prev)<0&&Le(t.next,s,s.next)<0}function vm(s,t,e,n){let i=s;do i.z===0&&(i.z=oc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,xm(i)}function xm(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function oc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Mm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function zd(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Tr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&zd(s,t,e,n,i,r,o,a)}function ym(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Sm(s,t)&&(Xr(s,t)&&Xr(t,s)&&wm(s,t)&&(Le(s.prev,s,t.prev)||Le(s,t.prev,t))||Ys(s,t)&&Le(s.prev,s,s.next)>0&&Le(t.prev,t,t.next)>0)}function Le(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ys(s,t){return s.x===t.x&&s.y===t.y}function Vd(s,t,e,n){const i=Po(Le(s,t,e)),r=Po(Le(s,t,n)),o=Po(Le(e,n,s)),a=Po(Le(e,n,t));return!!(i!==r&&o!==a||i===0&&Co(s,e,t)||r===0&&Co(s,n,t)||o===0&&Co(e,s,n)||a===0&&Co(e,t,n))}function Co(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Po(s){return s>0?1:s<0?-1:0}function Sm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Vd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Xr(s,t){return Le(s.prev,s,s.next)<0?Le(s,t,s.next)>=0&&Le(s,s.prev,t)>=0:Le(s,t,s.prev)<0||Le(s,s.next,t)<0}function wm(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Hd(s,t){const e=ac(s.i,s.x,s.y),n=ac(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function jh(s,t,e,n){const i=ac(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ac(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tm(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class bm{static triangulate(t,e,n=2){return lm(t,e,n)}}class Ls{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Ls.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Zh(t),Kh(n,t);let o=t.length;e.forEach(Zh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Kh(n,e[l]);const a=bm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Zh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Kh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Kr extends pe{constructor(t=new aa([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Xt(i,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Em;let M,v=!1,b,A,C,L;p&&(M=p.getSpacedPoints(h),v=!0,d=!1,b=p.computeFrenetFrames(h,!1),A=new E,C=new E,L=new E),d||(m=0,f=0,g=0,_=0);const w=a.extractPoints(c);let S=w.shape;const P=w.holes;if(!Ls.isClockWise(S)){S=S.reverse();for(let nt=0,J=P.length;nt<J;nt++){const K=P[nt];Ls.isClockWise(K)&&(P[nt]=K.reverse())}}function k(nt){const K=10000000000000001e-36;let j=nt[0];for(let ut=1;ut<=nt.length;ut++){const st=ut%nt.length,dt=nt[st],Vt=dt.x-j.x,kt=dt.y-j.y,R=Vt*Vt+kt*kt,y=Math.max(Math.abs(dt.x),Math.abs(dt.y),Math.abs(j.x),Math.abs(j.y)),F=K*y*y;if(R<=F){nt.splice(st,1),ut--;continue}j=dt}}k(S),P.forEach(k);const q=P.length,z=S;for(let nt=0;nt<q;nt++){const J=P[nt];S=S.concat(J)}function X(nt,J,K){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(J,K)}const Z=S.length;function G(nt,J,K){let j,ut,st;const dt=nt.x-J.x,Vt=nt.y-J.y,kt=K.x-nt.x,R=K.y-nt.y,y=dt*dt+Vt*Vt,F=dt*R-Vt*kt;if(Math.abs(F)>Number.EPSILON){const H=Math.sqrt(y),et=Math.sqrt(kt*kt+R*R),W=J.x-Vt/H,Tt=J.y+dt/H,lt=K.x-R/et,wt=K.y+kt/et,Ct=((lt-W)*R-(wt-Tt)*kt)/(dt*R-Vt*kt);j=W+dt*Ct-nt.x,ut=Tt+Vt*Ct-nt.y;const ot=j*j+ut*ut;if(ot<=2)return new $(j,ut);st=Math.sqrt(ot/2)}else{let H=!1;dt>Number.EPSILON?kt>Number.EPSILON&&(H=!0):dt<-Number.EPSILON?kt<-Number.EPSILON&&(H=!0):Math.sign(Vt)===Math.sign(R)&&(H=!0),H?(j=-Vt,ut=dt,st=Math.sqrt(y)):(j=dt,ut=Vt,st=Math.sqrt(y/2))}return new $(j/st,ut/st)}const it=[];for(let nt=0,J=z.length,K=J-1,j=nt+1;nt<J;nt++,K++,j++)K===J&&(K=0),j===J&&(j=0),it[nt]=G(z[nt],z[K],z[j]);const pt=[];let yt,Ot=it.concat();for(let nt=0,J=q;nt<J;nt++){const K=P[nt];yt=[];for(let j=0,ut=K.length,st=ut-1,dt=j+1;j<ut;j++,st++,dt++)st===ut&&(st=0),dt===ut&&(dt=0),yt[j]=G(K[j],K[st],K[dt]);pt.push(yt),Ot=Ot.concat(yt)}let Zt;if(m===0)Zt=Ls.triangulateShape(z,P);else{const nt=[],J=[];for(let K=0;K<m;K++){const j=K/m,ut=f*Math.cos(j*Math.PI/2),st=g*Math.sin(j*Math.PI/2)+_;for(let dt=0,Vt=z.length;dt<Vt;dt++){const kt=X(z[dt],it[dt],st);Et(kt.x,kt.y,-ut),j===0&&nt.push(kt)}for(let dt=0,Vt=q;dt<Vt;dt++){const kt=P[dt];yt=pt[dt];const R=[];for(let y=0,F=kt.length;y<F;y++){const H=X(kt[y],yt[y],st);Et(H.x,H.y,-ut),j===0&&R.push(H)}j===0&&J.push(R)}}Zt=Ls.triangulateShape(nt,J)}const se=Zt.length,$t=g+_;for(let nt=0;nt<Z;nt++){const J=d?X(S[nt],Ot[nt],$t):S[nt];v?(C.copy(b.normals[0]).multiplyScalar(J.x),A.copy(b.binormals[0]).multiplyScalar(J.y),L.copy(M[0]).add(C).add(A),Et(L.x,L.y,L.z)):Et(J.x,J.y,0)}for(let nt=1;nt<=h;nt++)for(let J=0;J<Z;J++){const K=d?X(S[J],Ot[J],$t):S[J];v?(C.copy(b.normals[nt]).multiplyScalar(K.x),A.copy(b.binormals[nt]).multiplyScalar(K.y),L.copy(M[nt]).add(C).add(A),Et(L.x,L.y,L.z)):Et(K.x,K.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){const J=nt/m,K=f*Math.cos(J*Math.PI/2),j=g*Math.sin(J*Math.PI/2)+_;for(let ut=0,st=z.length;ut<st;ut++){const dt=X(z[ut],it[ut],j);Et(dt.x,dt.y,u+K)}for(let ut=0,st=P.length;ut<st;ut++){const dt=P[ut];yt=pt[ut];for(let Vt=0,kt=dt.length;Vt<kt;Vt++){const R=X(dt[Vt],yt[Vt],j);v?Et(R.x,R.y+M[h-1].y,M[h-1].x+K):Et(R.x,R.y,u+K)}}}Y(),Q();function Y(){const nt=i.length/3;if(d){let J=0,K=Z*J;for(let j=0;j<se;j++){const ut=Zt[j];St(ut[2]+K,ut[1]+K,ut[0]+K)}J=h+m*2,K=Z*J;for(let j=0;j<se;j++){const ut=Zt[j];St(ut[0]+K,ut[1]+K,ut[2]+K)}}else{for(let J=0;J<se;J++){const K=Zt[J];St(K[2],K[1],K[0])}for(let J=0;J<se;J++){const K=Zt[J];St(K[0]+Z*h,K[1]+Z*h,K[2]+Z*h)}}n.addGroup(nt,i.length/3-nt,0)}function Q(){const nt=i.length/3;let J=0;_t(z,J),J+=z.length;for(let K=0,j=P.length;K<j;K++){const ut=P[K];_t(ut,J),J+=ut.length}n.addGroup(nt,i.length/3-nt,1)}function _t(nt,J){let K=nt.length;for(;--K>=0;){const j=K;let ut=K-1;ut<0&&(ut=nt.length-1);for(let st=0,dt=h+m*2;st<dt;st++){const Vt=Z*st,kt=Z*(st+1),R=J+j+Vt,y=J+ut+Vt,F=J+ut+kt,H=J+j+kt;Kt(R,y,F,H)}}}function Et(nt,J,K){l.push(nt),l.push(J),l.push(K)}function St(nt,J,K){ce(nt),ce(J),ce(K);const j=i.length/3,ut=x.generateTopUV(n,i,j-3,j-2,j-1);D(ut[0]),D(ut[1]),D(ut[2])}function Kt(nt,J,K,j){ce(nt),ce(J),ce(j),ce(J),ce(K),ce(j);const ut=i.length/3,st=x.generateSideWallUV(n,i,ut-6,ut-3,ut-2,ut-1);D(st[0]),D(st[1]),D(st[3]),D(st[1]),D(st[2]),D(st[3])}function ce(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function D(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Am(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ta[i.type]().fromJSON(i)),new Kr(n,t.options)}}const Em={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new $(r,o),new $(a,l),new $(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new $(o,1-l),new $(c,1-u),new $(d,1-g),new $(_,1-p)]:[new $(a,1-l),new $(h,1-u),new $(f,1-g),new $(m,1-p)]}};function Am(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class es extends Zr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new es(t.radius,t.detail)}}class Bc extends Zr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bc(t.radius,t.detail)}}class qe extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let M=0;M<c;M++){const v=M*u-r;g.push(v,-x,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const M=x+c*p,v=x+c*(p+1),b=x+1+c*(p+1),A=x+1+c*p;f.push(M,v,A),f.push(v,b,A)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.widthSegments,t.heightSegments)}}class Nn extends pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new E,d=new E,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const A=b/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+v,1-M),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=h[p][x+1],v=h[p][x],b=h[p+1][x],A=h[p+1][x+1];(p!==0||o>0)&&f.push(M,v,A),(p!==n-1||l<Math.PI)&&f.push(v,b,A)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ti extends pe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class zc extends pe{constructor(t=new Fd(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new E,l=new E,c=new $;let h=new E;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function _(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),x(),p()}function m(M){h=t.getPointAt(M/e,h);const v=o.normals[M],b=o.binormals[M];for(let A=0;A<=i;A++){const C=A/i*Math.PI*2,L=Math.sin(C),w=-Math.cos(C);l.x=w*v.x+L*b.x,l.y=w*v.y+L*b.y,l.z=w*v.z+L*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let v=1;v<=i;v++){const b=(i+1)*(M-1)+(v-1),A=(i+1)*M+(v-1),C=(i+1)*M+v,L=(i+1)*(M-1)+v;g.push(b,A,L),g.push(A,C,L)}}function x(){for(let M=0;M<=e;M++)for(let v=0;v<=i;v++)c.x=M/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new zc(new ta[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Rm extends Pe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ie extends Sn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class an extends ie{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Cm extends Sn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Pm extends Sn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gd extends Sn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wd extends Sn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Lm extends Xs{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Lo(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Dm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Im(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function $h(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function Xd(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class $r{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nm extends $r{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case lh:r=t,a=2*e-n;break;case ch:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lh:o=t,l=2*n-e;break;case ch:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+x*o[c+b]+M*o[l+b]+v*o[u+b];return r}}class Um extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Om extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Kn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Lo(e,this.TimeBufferType),this.values=Lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Lo(t.times,Array),values:Lo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Om(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Um(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nm(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Br:e=this.InterpolantFactoryMethodDiscrete;break;case zr:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return va}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Dm(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===va,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=zr;class er extends Kn{constructor(t,e,n){super(t,e,n)}}er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Br;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class qd extends Kn{constructor(t,e,n,i){super(t,e,n,i)}}qd.prototype.ValueTypeName="color";class js extends Kn{constructor(t,e,n,i){super(t,e,n,i)}}js.prototype.ValueTypeName="number";class Fm extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)wn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Zs extends Kn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Fm(this.times,this.values,this.getValueSize(),t)}}Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends Kn{constructor(t,e,n){super(t,e,n)}}nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Br;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends Kn{constructor(t,e,n,i){super(t,e,n,i)}}Ks.prototype.ValueTypeName="vector";class km{constructor(t="",e=-1,n=[],i=Xf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=On(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(zm(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(Kn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Im(l);l=$h(l,1,h),c=$h(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new js(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Xd(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const M=d[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}i.push(new js(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+e[u].name+"]";n(Ks,f+".position",d,"pos",i),n(Zs,f+".quaternion",d,"rot",i),n(Ks,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Bm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return js;case"vector":case"vector2":case"vector3":case"vector4":return Ks;case"color":return qd;case"quaternion":return Zs;case"bool":case"boolean":return er;case"string":return nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function zm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Bm(s.type);if(s.times===void 0){const e=[],n=[];Xd(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Si={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Vm{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Hm=new Vm;class ir{constructor(t){this.manager=t!==void 0?t:Hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ir.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={};class Gm extends Error{constructor(t,e){super(t),this.response=e}}class Yd extends ir{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Si.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(pi[t]!==void 0){pi[t].push({onLoad:e,onProgress:n,onError:i});return}pi[t]=[],pi[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=pi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:M,value:v})=>{if(M)p.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,C=h.length;A<C;A++){const L=h[A];L.onProgress&&L.onProgress(b)}p.enqueue(v),x()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Gm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Si.add(`file:${t}`,c);const h=pi[t];delete pi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=pi[t];if(h===void 0)throw this.manager.itemError(t),c;delete pi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const As=new WeakMap;class Wm extends ir{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Si.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=As.get(o);u===void 0&&(u=[],As.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=Vr("img");function l(){h(),e&&e(this);const u=As.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}As.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),Si.remove(`image:${t}`);const d=As.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}As.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Si.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class jd extends ir{constructor(t){super(t)}load(t,e,n,i){const r=new Ue,o=new Wm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class la extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xm extends la{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ja=new zt,Jh=new E,Qh=new E;class Vc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ic,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jh),Qh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qh),e.updateMatrixWorld(),ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class qm extends Vc{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Gs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ym extends la{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const tu=new zt,vr=new E,Za=new E;class jm extends Vc{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vr.setFromMatrixPosition(t.matrixWorld),n.position.copy(vr),Za.copy(n.position),Za.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Za),n.updateMatrixWorld(),i.makeTranslation(-vr.x,-vr.y,-vr.z),tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu,n.coordinateSystem,n.reversedDepth)}}class Jr extends la{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ca extends wd{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zm extends Vc{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zd extends la{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new Zm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ir{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Ka=new WeakMap;class Km extends ir{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Si.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{if(Ka.has(o)===!0)i&&i(Ka.get(o)),r.manager.itemError(t),r.manager.itemEnd(t);else return e&&e(c),r.manager.itemEnd(t),c});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Si.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Ka.set(l,c),Si.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Si.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class $m extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Kd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Hc="\\[\\]\\.:\\/",Jm=new RegExp("["+Hc+"]","g"),Gc="[^"+Hc+"]",Qm="[^"+Hc.replace("\\.","")+"]",t0=/((?:WC+[\/:])*)/.source.replace("WC",Gc),e0=/(WCOD+)?/.source.replace("WCOD",Qm),n0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),i0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),s0=new RegExp("^"+t0+e0+n0+i0+"$"),r0=["material","materials","bones","map"];class o0{constructor(t,e,n){const i=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class fe{constructor(t,e,n){this.path=e,this.parsedPath=n||fe.parseTrackName(e),this.node=fe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new fe.Composite(t,e,n):new fe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jm,"")}static parseTrackName(t){const e=s0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);r0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=fe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}fe.Composite=o0;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const eu=new zt;class a0{constructor(t,e,n=0,i=1/0){this.ray=new tr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Pc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return eu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eu),this}intersectObject(t,e=!0,n=[]){return lc(t,this,n,e),n.sort(nu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)lc(t[i],this,n,e);return n.sort(nu),n}}function nu(s,t){return s.distance-t.distance}function lc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)lc(r[o],t,e,!0)}}class iu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class l0 extends os{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function su(s,t,e,n){const i=c0(n);switch(e){case ud:return s*t;case Tc:return s*t/i.components*i.byteLength;case bc:return s*t/i.components*i.byteLength;case fd:return s*t*2/i.components*i.byteLength;case Ec:return s*t*2/i.components*i.byteLength;case dd:return s*t*3/i.components*i.byteLength;case yn:return s*t*4/i.components*i.byteLength;case Ac:return s*t*4/i.components*i.byteLength;case Ho:case Go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wo:case Xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cl:case Ll:return Math.max(s,16)*Math.max(t,8)/4;case Rl:case Pl:return Math.max(s,8)*Math.max(t,8)/2;case Dl:case Il:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Nl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case kl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case zl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case jl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Zl:case Kl:case $l:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Jl:case Ql:return Math.ceil(s/4)*Math.ceil(t/4)*8;case tc:case ec:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function c0(s){switch(s){case jn:case ad:return{byteLength:1,components:1};case Fr:case ld:case Un:return{byteLength:2,components:1};case Sc:case wc:return{byteLength:2,components:4};case is:case yc:case qn:return{byteLength:4,components:1};case cd:case hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $d(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function h0(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var u0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d0=`#ifdef USE_ALPHAHASH
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
#endif`,f0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
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
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
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
#endif`,M0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T0=`#ifdef USE_IRIDESCENCE
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
#endif`,b0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,N0=`#define PI 3.141592653589793
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
} // validated`,U0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O0=`vec3 transformedNormal = objectNormal;
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
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
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
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lg=`PhysicalMaterial material;
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
#endif`,cg=`struct PhysicalMaterial {
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
}`,hg=`
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zg=`float getShadowMask() {
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
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,t1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#ifdef USE_TRANSMISSION
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u1=`uniform sampler2D t2D;
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`#include <common>
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
}`,_1=`#if DEPTH_PACKING == 3200
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
}`,v1=`#define DISTANCE
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
}`,x1=`#define DISTANCE
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`uniform float scale;
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
}`,w1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,b1=`uniform vec3 diffuse;
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
}`,E1=`#define LAMBERT
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
}`,A1=`#define LAMBERT
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
}`,R1=`#define MATCAP
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
}`,C1=`#define MATCAP
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
}`,P1=`#define NORMAL
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
}`,L1=`#define NORMAL
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
}`,D1=`#define PHONG
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
}`,I1=`#define PHONG
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
}`,N1=`#define STANDARD
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
}`,U1=`#define STANDARD
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
}`,O1=`#define TOON
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
}`,F1=`#define TOON
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
}`,k1=`uniform float size;
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
}`,B1=`uniform vec3 diffuse;
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
}`,z1=`#include <common>
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
}`,V1=`uniform vec3 color;
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
}`,H1=`uniform float rotation;
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
}`,G1=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:u0,alphahash_pars_fragment:d0,alphamap_fragment:f0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:_0,aomap_pars_fragment:v0,batching_pars_vertex:x0,batching_vertex:M0,begin_vertex:y0,beginnormal_vertex:S0,bsdfs:w0,iridescence_fragment:T0,bumpmap_pars_fragment:b0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:C0,color_fragment:P0,color_pars_fragment:L0,color_pars_vertex:D0,color_vertex:I0,common:N0,cube_uv_reflection_fragment:U0,defaultnormal_vertex:O0,displacementmap_pars_vertex:F0,displacementmap_vertex:k0,emissivemap_fragment:B0,emissivemap_pars_fragment:z0,colorspace_fragment:V0,colorspace_pars_fragment:H0,envmap_fragment:G0,envmap_common_pars_fragment:W0,envmap_pars_fragment:X0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:ig,envmap_vertex:Y0,fog_vertex:j0,fog_pars_vertex:Z0,fog_fragment:K0,fog_pars_fragment:$0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:Q0,lights_lambert_fragment:tg,lights_lambert_pars_fragment:eg,lights_pars_begin:ng,lights_toon_fragment:sg,lights_toon_pars_fragment:rg,lights_phong_fragment:og,lights_phong_pars_fragment:ag,lights_physical_fragment:lg,lights_physical_pars_fragment:cg,lights_fragment_begin:hg,lights_fragment_maps:ug,lights_fragment_end:dg,logdepthbuf_fragment:fg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:_g,map_pars_fragment:vg,map_particle_fragment:xg,map_particle_pars_fragment:Mg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:Sg,morphinstance_vertex:wg,morphcolor_vertex:Tg,morphnormal_vertex:bg,morphtarget_pars_vertex:Eg,morphtarget_vertex:Ag,normal_fragment_begin:Rg,normal_fragment_maps:Cg,normal_pars_fragment:Pg,normal_pars_vertex:Lg,normal_vertex:Dg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Ug,clearcoat_pars_fragment:Og,iridescence_pars_fragment:Fg,opaque_fragment:kg,packing:Bg,premultiplied_alpha_fragment:zg,project_vertex:Vg,dithering_fragment:Hg,dithering_pars_fragment:Gg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:qg,shadowmap_pars_vertex:Yg,shadowmap_vertex:jg,shadowmask_pars_fragment:Zg,skinbase_vertex:Kg,skinning_pars_vertex:$g,skinning_vertex:Jg,skinnormal_vertex:Qg,specularmap_fragment:t1,specularmap_pars_fragment:e1,tonemapping_fragment:n1,tonemapping_pars_fragment:i1,transmission_fragment:s1,transmission_pars_fragment:r1,uv_pars_fragment:o1,uv_pars_vertex:a1,uv_vertex:l1,worldpos_vertex:c1,background_vert:h1,background_frag:u1,backgroundCube_vert:d1,backgroundCube_frag:f1,cube_vert:p1,cube_frag:m1,depth_vert:g1,depth_frag:_1,distanceRGBA_vert:v1,distanceRGBA_frag:x1,equirect_vert:M1,equirect_frag:y1,linedashed_vert:S1,linedashed_frag:w1,meshbasic_vert:T1,meshbasic_frag:b1,meshlambert_vert:E1,meshlambert_frag:A1,meshmatcap_vert:R1,meshmatcap_frag:C1,meshnormal_vert:P1,meshnormal_frag:L1,meshphong_vert:D1,meshphong_frag:I1,meshphysical_vert:N1,meshphysical_frag:U1,meshtoon_vert:O1,meshtoon_frag:F1,points_vert:k1,points_frag:B1,shadow_vert:z1,shadow_frag:V1,sprite_vert:H1,sprite_frag:G1},gt={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},ei={basic:{uniforms:nn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:nn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new mt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:nn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:nn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:nn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new mt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:nn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:nn([gt.points,gt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:nn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:nn([gt.common,gt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:nn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:nn([gt.sprite,gt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:nn([gt.common,gt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:nn([gt.lights,gt.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};ei.physical={uniforms:nn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Do={r:0,b:0,g:0},Zi=new Fn,W1=new zt;function X1(s,t,e,n,i,r,o){const a=new mt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const b=g(M);b===null?p(a,l):b&&b.isColor&&(p(b,1),v=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===sa)?(h===void 0&&(h=new At(new Qe(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:Ws(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Zi.copy(v.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(W1.makeRotationFromEuler(Zi)),h.material.toneMapped=ne.getTransfer(b.colorSpace)!==ue,(u!==b||d!==b.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new At(new qe(2,2),new Pe({name:"BackgroundMaterial",uniforms:Ws(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ne.getTransfer(b.colorSpace)!==ue,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(Do,Sd(s)),n.buffers.color.setClear(Do.r,Do.g,Do.b,v,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m,dispose:x}}function q1(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(S,P,N,k,q){let z=!1;const X=u(k,N,P);r!==X&&(r=X,c(r.object)),z=f(S,k,N,q),z&&g(S,k,N,q),q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(S,P,N,k),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,P,N){const k=N.wireframe===!0;let q=n[S.id];q===void 0&&(q={},n[S.id]=q);let z=q[P.id];z===void 0&&(z={},q[P.id]=z);let X=z[k];return X===void 0&&(X=d(l()),z[k]=X),X}function d(S){const P=[],N=[],k=[];for(let q=0;q<e;q++)P[q]=0,N[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:k,object:S,attributes:{},index:null}}function f(S,P,N,k){const q=r.attributes,z=P.attributes;let X=0;const Z=N.getAttributes();for(const G in Z)if(Z[G].location>=0){const pt=q[G];let yt=z[G];if(yt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor)),pt===void 0||pt.attribute!==yt||yt&&pt.data!==yt.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(S,P,N,k){const q={},z=P.attributes;let X=0;const Z=N.getAttributes();for(const G in Z)if(Z[G].location>=0){let pt=z[G];pt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor));const yt={};yt.attribute=pt,pt&&pt.data&&(yt.data=pt.data),q[G]=yt,X++}r.attributes=q,r.attributesNum=X,r.index=k}function _(){const S=r.newAttributes;for(let P=0,N=S.length;P<N;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const N=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;N[S]=1,k[S]===0&&(s.enableVertexAttribArray(S),k[S]=1),q[S]!==P&&(s.vertexAttribDivisor(S,P),q[S]=P)}function x(){const S=r.newAttributes,P=r.enabledAttributes;for(let N=0,k=P.length;N<k;N++)P[N]!==S[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function M(S,P,N,k,q,z,X){X===!0?s.vertexAttribIPointer(S,P,N,q,z):s.vertexAttribPointer(S,P,N,k,q,z)}function v(S,P,N,k){_();const q=k.attributes,z=N.getAttributes(),X=P.defaultAttributeValues;for(const Z in z){const G=z[Z];if(G.location>=0){let it=q[Z];if(it===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){const pt=it.normalized,yt=it.itemSize,Ot=t.get(it);if(Ot===void 0)continue;const Zt=Ot.buffer,se=Ot.type,$t=Ot.bytesPerElement,Y=se===s.INT||se===s.UNSIGNED_INT||it.gpuType===yc;if(it.isInterleavedBufferAttribute){const Q=it.data,_t=Q.stride,Et=it.offset;if(Q.isInstancedInterleavedBuffer){for(let St=0;St<G.locationSize;St++)p(G.location+St,Q.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let St=0;St<G.locationSize;St++)m(G.location+St);s.bindBuffer(s.ARRAY_BUFFER,Zt);for(let St=0;St<G.locationSize;St++)M(G.location+St,yt/G.locationSize,se,pt,_t*$t,(Et+yt/G.locationSize*St)*$t,Y)}else{if(it.isInstancedBufferAttribute){for(let Q=0;Q<G.locationSize;Q++)p(G.location+Q,it.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Q=0;Q<G.locationSize;Q++)m(G.location+Q);s.bindBuffer(s.ARRAY_BUFFER,Zt);for(let Q=0;Q<G.locationSize;Q++)M(G.location+Q,yt/G.locationSize,se,pt,yt*$t,yt/G.locationSize*Q*$t,Y)}}else if(X!==void 0){const pt=X[Z];if(pt!==void 0)switch(pt.length){case 2:s.vertexAttrib2fv(G.location,pt);break;case 3:s.vertexAttrib3fv(G.location,pt);break;case 4:s.vertexAttrib4fv(G.location,pt);break;default:s.vertexAttrib1fv(G.location,pt)}}}}x()}function b(){L();for(const S in n){const P=n[S];for(const N in P){const k=P[N];for(const q in k)h(k[q].object),delete k[q];delete P[N]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const N in P){const k=P[N];for(const q in k)h(k[q].object),delete k[q];delete P[N]}delete n[S.id]}function C(S){for(const P in n){const N=n[P];if(N[S.id]===void 0)continue;const k=N[S.id];for(const q in k)h(k[q].object),delete k[q];delete N[S.id]}}function L(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Y1(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function j1(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==yn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==jn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==qn&&!L)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:b,maxSamples:A}}function Z1(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Ni,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,M=x*4;let v=p.clippingState||null;l.value=v,v=h(g,d,M,f);for(let b=0;b!==M;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)o.copy(u[M]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function K1(s){let t=new WeakMap;function e(o,a){return a===El?o.mapping=Bs:a===Al&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===El||a===Al)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vp(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ds=4,ru=[.125,.215,.35,.446,.526,.582],ts=20,$a=new ca,ou=new mt;let Ja=null,Qa=0,tl=0,el=!1;const Ji=(1+Math.sqrt(5))/2,Rs=1/Ji,au=[new E(-Ji,Rs,0),new E(Ji,Rs,0),new E(-Rs,0,Ji),new E(Rs,0,Ji),new E(0,Ji,-Rs),new E(0,Ji,Rs),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],$1=new E;class cc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=$1}=r;Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ja,Qa,tl),this._renderer.xr.enabled=el,t.scissorTest=!1,Io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bs||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Un,format:yn,colorSpace:on,depthBuffer:!1},i=lu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J1(r)),this._blurMaterial=Q1(r,t,e)}return i}_compileMaterial(t){const e=new At(this._lodPlanes[0],t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,n,i,r){const l=new sn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ou),u.toneMapping=ki,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new yi({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),m=new At(new Qe,_);let p=!1;const x=t.background;x?x.isColor&&(_.color.copy(x),t.background=null,p=!0):(_.color.copy(ou),p=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const b=this._cubeSize;Io(i,v*b,M>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Bs||t.mapping===zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Io(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$a)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=au[(i-r-1)%au.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new At(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ts-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ts;m>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);const p=[];let x=0;for(let C=0;C<ts;++C){const L=C/_,w=Math.exp(-L*L/2);p.push(w),C===0?x+=w:C<m&&(x+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const v=this._sizeLods[i],b=3*v*(i>M-Ds?i-M+Ds:0),A=4*(this._cubeSize-v);Io(e,b,A,3*v,2*v),l.setRenderTarget(e),l.render(u,$a)}}function J1(s){const t=[],e=[],n=[];let i=s;const r=s-Ds+1+ru.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ds?l=ru[o-s+Ds-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,L=A>2?0:-1,w=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];x.set(w,_*g*A),M.set(d,m*g*A);const S=[A,A,A,A,A,A];v.set(S,p*g*A)}const b=new pe;b.setAttribute("position",new Oe(x,_)),b.setAttribute("uv",new Oe(M,m)),b.setAttribute("faceIndex",new Oe(v,p)),t.push(b),i>Ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lu(s,t,e){const n=new fn(s,t,e);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Io(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Q1(s,t,e){const n=new Float32Array(ts),i=new E(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:We,depthTest:!1,depthWrite:!1})}function cu(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:We,depthTest:!1,depthWrite:!1})}function hu(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:We,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}function t_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===El||l===Al,h=l===Bs||l===zs;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new cc(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new cc(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function e_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Hr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function n_(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let M=0,v=x.length;M<v;M+=3){const b=x[M+0],A=x[M+1],C=x[M+2];d.push(b,A,A,C,C,b)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const b=M+0,A=M+1,C=M+2;d.push(b,A,A,C,C,b)}}else return;const m=new(_d(d)?yd:Md)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function i_(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function s_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function r_(s,t,e){const n=new WeakMap,i=new le;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let b=a.attributes.position.count*v,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const C=new Float32Array(b*A*4*u),L=new vd(C,b,A,u);L.type=qn,L.needsUpdate=!0;const w=v*4;for(let P=0;P<u;P++){const N=p[P],k=x[P],q=M[P],z=b*A*4*P;for(let X=0;X<N.count;X++){const Z=X*w;g===!0&&(i.fromBufferAttribute(N,X),C[z+Z+0]=i.x,C[z+Z+1]=i.y,C[z+Z+2]=i.z,C[z+Z+3]=0),_===!0&&(i.fromBufferAttribute(k,X),C[z+Z+4]=i.x,C[z+Z+5]=i.y,C[z+Z+6]=i.z,C[z+Z+7]=0),m===!0&&(i.fromBufferAttribute(q,X),C[z+Z+8]=i.x,C[z+Z+9]=i.y,C[z+Z+10]=i.z,C[z+Z+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:L,size:new $(b,A)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function o_(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Jd=new Ue,uu=new Uc(1,1),Qd=new vd,tf=new bp,ef=new Td,du=[],fu=[],pu=new Float32Array(16),mu=new Float32Array(9),gu=new Float32Array(4);function sr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=du[i];if(r===void 0&&(r=new Float32Array(i),du[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ke(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Be(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ha(s,t){let e=fu[t];e===void 0&&(e=new Int32Array(t),fu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function a_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function l_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2fv(this.addr,t),Be(e,t)}}function c_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;s.uniform3fv(this.addr,t),Be(e,t)}}function h_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4fv(this.addr,t),Be(e,t)}}function u_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;gu.set(n),s.uniformMatrix2fv(this.addr,!1,gu),Be(e,n)}}function d_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;mu.set(n),s.uniformMatrix3fv(this.addr,!1,mu),Be(e,n)}}function f_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;pu.set(n),s.uniformMatrix4fv(this.addr,!1,pu),Be(e,n)}}function p_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function m_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2iv(this.addr,t),Be(e,t)}}function g_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3iv(this.addr,t),Be(e,t)}}function __(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4iv(this.addr,t),Be(e,t)}}function v_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function x_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2uiv(this.addr,t),Be(e,t)}}function M_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3uiv(this.addr,t),Be(e,t)}}function y_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4uiv(this.addr,t),Be(e,t)}}function S_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(uu.compareFunction=gd,r=uu):r=Jd,e.setTexture2D(t||r,i)}function w_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||tf,i)}function T_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ef,i)}function b_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Qd,i)}function E_(s){switch(s){case 5126:return a_;case 35664:return l_;case 35665:return c_;case 35666:return h_;case 35674:return u_;case 35675:return d_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return __;case 5125:return v_;case 36294:return x_;case 36295:return M_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return b_}}function A_(s,t){s.uniform1fv(this.addr,t)}function R_(s,t){const e=sr(t,this.size,2);s.uniform2fv(this.addr,e)}function C_(s,t){const e=sr(t,this.size,3);s.uniform3fv(this.addr,e)}function P_(s,t){const e=sr(t,this.size,4);s.uniform4fv(this.addr,e)}function L_(s,t){const e=sr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function D_(s,t){const e=sr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function I_(s,t){const e=sr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function N_(s,t){s.uniform1iv(this.addr,t)}function U_(s,t){s.uniform2iv(this.addr,t)}function O_(s,t){s.uniform3iv(this.addr,t)}function F_(s,t){s.uniform4iv(this.addr,t)}function k_(s,t){s.uniform1uiv(this.addr,t)}function B_(s,t){s.uniform2uiv(this.addr,t)}function z_(s,t){s.uniform3uiv(this.addr,t)}function V_(s,t){s.uniform4uiv(this.addr,t)}function H_(s,t,e){const n=this.cache,i=t.length,r=ha(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Jd,r[o])}function G_(s,t,e){const n=this.cache,i=t.length,r=ha(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||tf,r[o])}function W_(s,t,e){const n=this.cache,i=t.length,r=ha(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ef,r[o])}function X_(s,t,e){const n=this.cache,i=t.length,r=ha(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Qd,r[o])}function q_(s){switch(s){case 5126:return A_;case 35664:return R_;case 35665:return C_;case 35666:return P_;case 35674:return L_;case 35675:return D_;case 35676:return I_;case 5124:case 35670:return N_;case 35667:case 35671:return U_;case 35668:case 35672:return O_;case 35669:case 35673:return F_;case 5125:return k_;case 36294:return B_;case 36295:return z_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return X_}}class Y_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=E_(e.type)}}class j_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q_(e.type)}}class Z_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function _u(s,t){s.seq.push(t),s.map[t.id]=t}function K_(s,t,e){const n=s.name,i=n.length;for(nl.lastIndex=0;;){const r=nl.exec(n),o=nl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){_u(e,c===void 0?new Y_(a,s,t):new j_(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Z_(a),_u(e,u)),e=u}}}class qo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);K_(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function vu(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const $_=37297;let J_=0;function Q_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const xu=new qt;function tv(s){ne._getMatrix(xu,ne.workingColorSpace,s);const t=`mat3( ${xu.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case Ko:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Mu(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Q_(s.getShaderSource(t),a)}else return r}function ev(s,t){const e=tv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function nv(s,t){let e;switch(t){case Qu:e="Linear";break;case td:e="Reinhard";break;case ed:e="Cineon";break;case Mc:e="ACESFilmic";break;case id:e="AgX";break;case sd:e="Neutral";break;case nd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const No=new E;function iv(){ne.getLuminanceCoefficients(No);const s=No.x.toFixed(4),t=No.y.toFixed(4),e=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function rv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ov(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function br(s){return s!==""}function yu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Su(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const av=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(s){return s.replace(av,cv)}const lv=new Map;function cv(s,t){let e=jt[t];if(e===void 0){const n=lv.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hc(e)}const hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(s){return s.replace(hv,uv)}function uv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Tu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function dv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ku?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function fv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bs:case zs:t="ENVMAP_TYPE_CUBE";break;case sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zs:t="ENVMAP_MODE_REFRACTION";break}return t}function mv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xc:t="ENVMAP_BLENDING_MULTIPLY";break;case Hf:t="ENVMAP_BLENDING_MIX";break;case Gf:t="ENVMAP_BLENDING_ADD";break}return t}function gv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _v(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=dv(e),c=fv(e),h=pv(e),u=mv(e),d=gv(e),f=sv(e),g=rv(r),_=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),p.length>0&&(p+=`
`)):(m=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?jt.tonemapping_pars_fragment:"",e.toneMapping!==ki?nv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,ev("linearToOutputTexel",e.outputColorSpace),iv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),o=hc(o),o=yu(o,e),o=Su(o,e),a=hc(a),a=yu(a,e),a=Su(a,e),o=wu(o),a=wu(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+o,v=x+p+a,b=vu(i,i.VERTEX_SHADER,M),A=vu(i,i.FRAGMENT_SHADER,v);i.attachShader(_,b),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(P){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(b)||"",q=i.getShaderInfoLog(A)||"",z=N.trim(),X=k.trim(),Z=q.trim();let G=!0,it=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,A);else{const pt=Mu(i,b,"vertex"),yt=Mu(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+pt+`
`+yt)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(X===""||Z==="")&&(it=!1);it&&(P.diagnostics={runnable:G,programLog:z,vertexShader:{log:X,prefix:m},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(b),i.deleteShader(A),L=new qo(i,_),w=ov(i,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,$_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}let vv=0;class xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mv(t),e.set(t,n)),n}}class Mv{constructor(t){this.id=vv++,this.code=t,this.usedTimes=0}}function yv(s,t,e,n,i,r,o){const a=new Pc,l=new xv,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,P,N,k){const q=N.fog,z=k.geometry,X=w.isMeshStandardMaterial?N.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||X),G=Z&&Z.mapping===sa?Z.image.height:null,it=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const pt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,yt=pt!==void 0?pt.length:0;let Ot=0;z.morphAttributes.position!==void 0&&(Ot=1),z.morphAttributes.normal!==void 0&&(Ot=2),z.morphAttributes.color!==void 0&&(Ot=3);let Zt,se,$t,Y;if(it){const he=ei[it];Zt=he.vertexShader,se=he.fragmentShader}else Zt=w.vertexShader,se=w.fragmentShader,l.update(w),$t=l.getVertexShaderID(w),Y=l.getFragmentShaderID(w);const Q=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),Et=k.isInstancedMesh===!0,St=k.isBatchedMesh===!0,Kt=!!w.map,ce=!!w.matcap,D=!!Z,nt=!!w.aoMap,J=!!w.lightMap,K=!!w.bumpMap,j=!!w.normalMap,ut=!!w.displacementMap,st=!!w.emissiveMap,dt=!!w.metalnessMap,Vt=!!w.roughnessMap,kt=w.anisotropy>0,R=w.clearcoat>0,y=w.dispersion>0,F=w.iridescence>0,H=w.sheen>0,et=w.transmission>0,W=kt&&!!w.anisotropyMap,Tt=R&&!!w.clearcoatMap,lt=R&&!!w.clearcoatNormalMap,wt=R&&!!w.clearcoatRoughnessMap,Ct=F&&!!w.iridescenceMap,ot=F&&!!w.iridescenceThicknessMap,vt=H&&!!w.sheenColorMap,Ft=H&&!!w.sheenRoughnessMap,Dt=!!w.specularMap,ft=!!w.specularColorMap,Ht=!!w.specularIntensityMap,I=et&&!!w.transmissionMap,rt=et&&!!w.thicknessMap,ht=!!w.gradientMap,Rt=!!w.alphaMap,at=w.alphaTest>0,tt=!!w.alphaHash,Lt=!!w.extensions;let Wt=ki;w.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Wt=s.toneMapping);const ye={shaderID:it,shaderType:w.type,shaderName:w.name,vertexShader:Zt,fragmentShader:se,defines:w.defines,customVertexShaderID:$t,customFragmentShaderID:Y,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:St,batchingColor:St&&k._colorsTexture!==null,instancing:Et,instancingColor:Et&&k.instanceColor!==null,instancingMorph:Et&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:on,alphaToCoverage:!!w.alphaToCoverage,map:Kt,matcap:ce,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:G,aoMap:nt,lightMap:J,bumpMap:K,normalMap:j,displacementMap:d&&ut,emissiveMap:st,normalMapObjectSpace:j&&w.normalMapType===jf,normalMapTangentSpace:j&&w.normalMapType===ra,metalnessMap:dt,roughnessMap:Vt,anisotropy:kt,anisotropyMap:W,clearcoat:R,clearcoatMap:Tt,clearcoatNormalMap:lt,clearcoatRoughnessMap:wt,dispersion:y,iridescence:F,iridescenceMap:Ct,iridescenceThicknessMap:ot,sheen:H,sheenColorMap:vt,sheenRoughnessMap:Ft,specularMap:Dt,specularColorMap:ft,specularIntensityMap:Ht,transmission:et,transmissionMap:I,thicknessMap:rt,gradientMap:ht,opaque:w.transparent===!1&&w.blending===Ns&&w.alphaToCoverage===!1,alphaMap:Rt,alphaTest:at,alphaHash:tt,combine:w.combine,mapUv:Kt&&_(w.map.channel),aoMapUv:nt&&_(w.aoMap.channel),lightMapUv:J&&_(w.lightMap.channel),bumpMapUv:K&&_(w.bumpMap.channel),normalMapUv:j&&_(w.normalMap.channel),displacementMapUv:ut&&_(w.displacementMap.channel),emissiveMapUv:st&&_(w.emissiveMap.channel),metalnessMapUv:dt&&_(w.metalnessMap.channel),roughnessMapUv:Vt&&_(w.roughnessMap.channel),anisotropyMapUv:W&&_(w.anisotropyMap.channel),clearcoatMapUv:Tt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:lt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&_(w.sheenRoughnessMap.channel),specularMapUv:Dt&&_(w.specularMap.channel),specularColorMapUv:ft&&_(w.specularColorMap.channel),specularIntensityMapUv:Ht&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:rt&&_(w.thicknessMap.channel),alphaMapUv:Rt&&_(w.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(j||kt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(Kt||Rt),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:k.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ot,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Kt&&w.map.isVideoTexture===!0&&ne.getTransfer(w.map.colorSpace)===ue,decodeVideoTextureEmissive:st&&w.emissiveMap.isVideoTexture===!0&&ne.getTransfer(w.emissiveMap.colorSpace)===ue,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ce,flipSided:w.side===$e,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Lt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&w.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)S.push(P),S.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(x(S,w),M(S,w),S.push(s.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function x(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function M(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const S=g[w.type];let P;if(S){const N=ei[S];P=ni.clone(N.uniforms)}else P=w.uniforms;return P}function b(w,S){let P;for(let N=0,k=h.length;N<k;N++){const q=h[N];if(q.cacheKey===S){P=q,++P.usedTimes;break}}return P===void 0&&(P=new _v(s,S,w,r),h.push(P)),P}function A(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:L}}function Sv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function wv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function bu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Eu(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||wv),n.length>1&&n.sort(d||bu),i.length>1&&i.sort(d||bu)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Tv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Eu,s.set(n,[o])):i>=r.length?(o=new Eu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function bv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new mt};break;case"SpotLight":e={position:new E,direction:new E,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new E,halfWidth:new E,halfHeight:new E};break}return s[t.id]=e,e}}}function Ev(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Av=0;function Rv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Cv(s){const t=new bv,e=Ev(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const i=new E,r=new zt,o=new zt;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,M=0,v=0,b=0,A=0,C=0;c.sort(Rv);for(let w=0,S=c.length;w<S;w++){const P=c[w],N=P.color,k=P.intensity,q=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*k,u+=N.g*k,d+=N.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],k);C++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(N).multiplyScalar(k),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[_]=X;const Z=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,Z.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=z,v++}_++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(N).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Z=P.shadow,G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=X,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==x||L.numPointShadows!==M||L.numSpotShadows!==v||L.numSpotMaps!==b||L.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=x,L.numPointShadows=M,L.numSpotShadows=v,L.numSpotMaps=b,L.numLightProbes=C,n.version=Av++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Au(s){const t=new Cv(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Pv(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Au(s),t.set(i,[a])):r>=o.length?(a=new Au(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
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
}`;function Iv(s,t,e){let n=new Ic;const i=new $,r=new $,o=new le,a=new Gd({depthPacking:md}),l=new Wd,c={},h=e.maxTextureSize,u={[ri]:$e,[$e]:ri,[Ce]:Ce},d=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:Lv,fragmentShader:Dv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let p=this.type;this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(We),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=p!==mi&&this.type===mi,q=p===mi&&this.type!==mi;for(let z=0,X=A.length;z<X;z++){const Z=A[z],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const it=G.getFrameExtents();if(i.multiply(it),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/it.x),i.x=r.x*it.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/it.y),i.y=r.y*it.y,G.mapSize.y=r.y)),G.map===null||k===!0||q===!0){const yt=this.type!==mi?{minFilter:Ye,magFilter:Ye}:{};G.map!==null&&G.map.dispose(),G.map=new fn(i.x,i.y,yt),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const pt=G.getViewportCount();for(let yt=0;yt<pt;yt++){const Ot=G.getViewport(yt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),N.viewport(o),G.updateMatrices(Z,yt),n=G.getFrustum(),v(C,L,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===mi&&x(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,S,P)};function x(A,C){const L=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,L,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,L,f,_,null)}function M(A,C,L,w){let S=null;const P=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=S.uuid,k=C.uuid;let q=c[N];q===void 0&&(q={},c[N]=q);let z=q[k];z===void 0&&(z=S.clone(),q[k]=z,C.addEventListener("dispose",b)),S=z}if(S.visible=C.visible,S.wireframe=C.wireframe,w===mi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=s.properties.get(S);N.light=L}return S}function v(A,C,L,w,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===mi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const k=t.update(A),q=A.material;if(Array.isArray(q)){const z=k.groups;for(let X=0,Z=z.length;X<Z;X++){const G=z[X],it=q[G.materialIndex];if(it&&it.visible){const pt=M(A,it,w,S);A.onBeforeShadow(s,A,C,L,k,pt,G),s.renderBufferDirect(L,null,k,pt,A,G),A.onAfterShadow(s,A,C,L,k,pt,G)}}}else if(q.visible){const z=M(A,q,w,S);A.onBeforeShadow(s,A,C,L,k,z,null),s.renderBufferDirect(L,null,k,z,A,null),A.onAfterShadow(s,A,C,L,k,z,null)}}const N=A.children;for(let k=0,q=N.length;k<q;k++)v(N[k],C,L,w,S)}function b(A){A.target.removeEventListener("dispose",b);for(const L in c){const w=c[L],S=A.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const Nv={[xl]:Ml,[yl]:Tl,[Sl]:bl,[ks]:wl,[Ml]:xl,[Tl]:yl,[bl]:Sl,[wl]:ks};function Uv(s,t){function e(){let I=!1;const rt=new le;let ht=null;const Rt=new le(0,0,0,0);return{setMask:function(at){ht!==at&&!I&&(s.colorMask(at,at,at,at),ht=at)},setLocked:function(at){I=at},setClear:function(at,tt,Lt,Wt,ye){ye===!0&&(at*=Wt,tt*=Wt,Lt*=Wt),rt.set(at,tt,Lt,Wt),Rt.equals(rt)===!1&&(s.clearColor(at,tt,Lt,Wt),Rt.copy(rt))},reset:function(){I=!1,ht=null,Rt.set(-1,0,0,0)}}}function n(){let I=!1,rt=!1,ht=null,Rt=null,at=null;return{setReversed:function(tt){if(rt!==tt){const Lt=t.get("EXT_clip_control");tt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),rt=tt;const Wt=at;at=null,this.setClear(Wt)}},getReversed:function(){return rt},setTest:function(tt){tt?Q(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(tt){ht!==tt&&!I&&(s.depthMask(tt),ht=tt)},setFunc:function(tt){if(rt&&(tt=Nv[tt]),Rt!==tt){switch(tt){case xl:s.depthFunc(s.NEVER);break;case Ml:s.depthFunc(s.ALWAYS);break;case yl:s.depthFunc(s.LESS);break;case ks:s.depthFunc(s.LEQUAL);break;case Sl:s.depthFunc(s.EQUAL);break;case wl:s.depthFunc(s.GEQUAL);break;case Tl:s.depthFunc(s.GREATER);break;case bl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Rt=tt}},setLocked:function(tt){I=tt},setClear:function(tt){at!==tt&&(rt&&(tt=1-tt),s.clearDepth(tt),at=tt)},reset:function(){I=!1,ht=null,Rt=null,at=null,rt=!1}}}function i(){let I=!1,rt=null,ht=null,Rt=null,at=null,tt=null,Lt=null,Wt=null,ye=null;return{setTest:function(he){I||(he?Q(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(he){rt!==he&&!I&&(s.stencilMask(he),rt=he)},setFunc:function(he,li,$n){(ht!==he||Rt!==li||at!==$n)&&(s.stencilFunc(he,li,$n),ht=he,Rt=li,at=$n)},setOp:function(he,li,$n){(tt!==he||Lt!==li||Wt!==$n)&&(s.stencilOp(he,li,$n),tt=he,Lt=li,Wt=$n)},setLocked:function(he){I=he},setClear:function(he){ye!==he&&(s.clearStencil(he),ye=he)},reset:function(){I=!1,rt=null,ht=null,Rt=null,at=null,tt=null,Lt=null,Wt=null,ye=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,M=null,v=null,b=null,A=null,C=new mt(0,0,0),L=0,w=!1,S=null,P=null,N=null,k=null,q=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Z>=2);let it=null,pt={};const yt=s.getParameter(s.SCISSOR_BOX),Ot=s.getParameter(s.VIEWPORT),Zt=new le().fromArray(yt),se=new le().fromArray(Ot);function $t(I,rt,ht,Rt){const at=new Uint8Array(4),tt=s.createTexture();s.bindTexture(I,tt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<ht;Lt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(rt,0,s.RGBA,1,1,Rt,0,s.RGBA,s.UNSIGNED_BYTE,at):s.texImage2D(rt+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,at);return tt}const Y={};Y[s.TEXTURE_2D]=$t(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=$t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=$t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=$t(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(ks),K(!1),j(ih),Q(s.CULL_FACE),nt(We);function Q(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function _t(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Et(I,rt){return u[I]!==rt?(s.bindFramebuffer(I,rt),u[I]=rt,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=rt),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=rt),!0):!1}function St(I,rt){let ht=f,Rt=!1;if(I){ht=d.get(rt),ht===void 0&&(ht=[],d.set(rt,ht));const at=I.textures;if(ht.length!==at.length||ht[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,Lt=at.length;tt<Lt;tt++)ht[tt]=s.COLOR_ATTACHMENT0+tt;ht.length=at.length,Rt=!0}}else ht[0]!==s.BACK&&(ht[0]=s.BACK,Rt=!0);Rt&&s.drawBuffers(ht)}function Kt(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const ce={[Gn]:s.FUNC_ADD,[Rf]:s.FUNC_SUBTRACT,[Cf]:s.FUNC_REVERSE_SUBTRACT};ce[Pf]=s.MIN,ce[Lf]=s.MAX;const D={[Sr]:s.ZERO,[Df]:s.ONE,[If]:s.SRC_COLOR,[ml]:s.SRC_ALPHA,[Ff]:s.SRC_ALPHA_SATURATE,[vl]:s.DST_COLOR,[_l]:s.DST_ALPHA,[Nf]:s.ONE_MINUS_SRC_COLOR,[gl]:s.ONE_MINUS_SRC_ALPHA,[Of]:s.ONE_MINUS_DST_COLOR,[Uf]:s.ONE_MINUS_DST_ALPHA,[kf]:s.CONSTANT_COLOR,[Bf]:s.ONE_MINUS_CONSTANT_COLOR,[zf]:s.CONSTANT_ALPHA,[Vf]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(I,rt,ht,Rt,at,tt,Lt,Wt,ye,he){if(I===We){_===!0&&(_t(s.BLEND),_=!1);return}if(_===!1&&(Q(s.BLEND),_=!0),I!==Ju){if(I!==m||he!==w){if((p!==Gn||v!==Gn)&&(s.blendEquation(s.FUNC_ADD),p=Gn,v=Gn),he)switch(I){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Or:s.blendFunc(s.ONE,s.ONE);break;case sh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Or:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case sh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,M=null,b=null,A=null,C.set(0,0,0),L=0,m=I,w=he}return}at=at||rt,tt=tt||ht,Lt=Lt||Rt,(rt!==p||at!==v)&&(s.blendEquationSeparate(ce[rt],ce[at]),p=rt,v=at),(ht!==x||Rt!==M||tt!==b||Lt!==A)&&(s.blendFuncSeparate(D[ht],D[Rt],D[tt],D[Lt]),x=ht,M=Rt,b=tt,A=Lt),(Wt.equals(C)===!1||ye!==L)&&(s.blendColor(Wt.r,Wt.g,Wt.b,ye),C.copy(Wt),L=ye),m=I,w=!1}function J(I,rt){I.side===Ce?_t(s.CULL_FACE):Q(s.CULL_FACE);let ht=I.side===$e;rt&&(ht=!ht),K(ht),I.blending===Ns&&I.transparent===!1?nt(We):nt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Rt=I.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),st(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function K(I){S!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),S=I)}function j(I){I!==Ef?(Q(s.CULL_FACE),I!==P&&(I===ih?s.cullFace(s.BACK):I===Af?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),P=I}function ut(I){I!==N&&(X&&s.lineWidth(I),N=I)}function st(I,rt,ht){I?(Q(s.POLYGON_OFFSET_FILL),(k!==rt||q!==ht)&&(s.polygonOffset(rt,ht),k=rt,q=ht)):_t(s.POLYGON_OFFSET_FILL)}function dt(I){I?Q(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function Vt(I){I===void 0&&(I=s.TEXTURE0+z-1),it!==I&&(s.activeTexture(I),it=I)}function kt(I,rt,ht){ht===void 0&&(it===null?ht=s.TEXTURE0+z-1:ht=it);let Rt=pt[ht];Rt===void 0&&(Rt={type:void 0,texture:void 0},pt[ht]=Rt),(Rt.type!==I||Rt.texture!==rt)&&(it!==ht&&(s.activeTexture(ht),it=ht),s.bindTexture(I,rt||Y[I]),Rt.type=I,Rt.texture=rt)}function R(){const I=pt[it];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(I){Zt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Zt.copy(I))}function Ft(I){se.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),se.copy(I))}function Dt(I,rt){let ht=c.get(rt);ht===void 0&&(ht=new WeakMap,c.set(rt,ht));let Rt=ht.get(I);Rt===void 0&&(Rt=s.getUniformBlockIndex(rt,I.name),ht.set(I,Rt))}function ft(I,rt){const Rt=c.get(rt).get(I);l.get(rt)!==Rt&&(s.uniformBlockBinding(rt,Rt,I.__bindingPointIndex),l.set(rt,Rt))}function Ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},it=null,pt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,M=null,v=null,b=null,A=null,C=new mt(0,0,0),L=0,w=!1,S=null,P=null,N=null,k=null,q=null,Zt.set(0,0,s.canvas.width,s.canvas.height),se.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:_t,bindFramebuffer:Et,drawBuffers:St,useProgram:Kt,setBlending:nt,setMaterial:J,setFlipSided:K,setCullFace:j,setLineWidth:ut,setPolygonOffset:st,setScissorTest:dt,activeTexture:Vt,bindTexture:kt,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:Ct,texImage3D:ot,updateUBOMapping:Dt,uniformBlockBinding:ft,texStorage2D:lt,texStorage3D:wt,texSubImage2D:H,texSubImage3D:et,compressedTexSubImage2D:W,compressedTexSubImage3D:Tt,scissor:vt,viewport:Ft,reset:Ht}}function Ov(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return f?new OffscreenCanvas(R,y):Vr("canvas")}function _(R,y,F){let H=1;const et=kt(R);if((et.width>F||et.height>F)&&(H=F/Math.max(et.width,et.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const W=Math.floor(H*et.width),Tt=Math.floor(H*et.height);u===void 0&&(u=g(W,Tt));const lt=y?g(W,Tt):u;return lt.width=W,lt.height=Tt,lt.getContext("2d").drawImage(R,0,0,W,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+W+"x"+Tt+")."),lt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,y,F,H,et=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let W=y;if(y===s.RED&&(F===s.FLOAT&&(W=s.R32F),F===s.HALF_FLOAT&&(W=s.R16F),F===s.UNSIGNED_BYTE&&(W=s.R8)),y===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(W=s.R8UI),F===s.UNSIGNED_SHORT&&(W=s.R16UI),F===s.UNSIGNED_INT&&(W=s.R32UI),F===s.BYTE&&(W=s.R8I),F===s.SHORT&&(W=s.R16I),F===s.INT&&(W=s.R32I)),y===s.RG&&(F===s.FLOAT&&(W=s.RG32F),F===s.HALF_FLOAT&&(W=s.RG16F),F===s.UNSIGNED_BYTE&&(W=s.RG8)),y===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(W=s.RG8UI),F===s.UNSIGNED_SHORT&&(W=s.RG16UI),F===s.UNSIGNED_INT&&(W=s.RG32UI),F===s.BYTE&&(W=s.RG8I),F===s.SHORT&&(W=s.RG16I),F===s.INT&&(W=s.RG32I)),y===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(W=s.RGB8UI),F===s.UNSIGNED_SHORT&&(W=s.RGB16UI),F===s.UNSIGNED_INT&&(W=s.RGB32UI),F===s.BYTE&&(W=s.RGB8I),F===s.SHORT&&(W=s.RGB16I),F===s.INT&&(W=s.RGB32I)),y===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),F===s.UNSIGNED_INT&&(W=s.RGBA32UI),F===s.BYTE&&(W=s.RGBA8I),F===s.SHORT&&(W=s.RGBA16I),F===s.INT&&(W=s.RGBA32I)),y===s.RGB&&(F===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),y===s.RGBA){const Tt=et?Ko:ne.getTransfer(H);F===s.FLOAT&&(W=s.RGBA32F),F===s.HALF_FLOAT&&(W=s.RGBA16F),F===s.UNSIGNED_BYTE&&(W=Tt===ue?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(R,y){let F;return R?y===null||y===is||y===Vs?F=s.DEPTH24_STENCIL8:y===qn?F=s.DEPTH32F_STENCIL8:y===Fr&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===is||y===Vs?F=s.DEPTH_COMPONENT24:y===qn?F=s.DEPTH_COMPONENT32F:y===Fr&&(F=s.DEPTH_COMPONENT16),F}function b(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ye&&R.minFilter!==Mn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){const y=R.target;y.removeEventListener("dispose",A),L(y),y.isVideoTexture&&h.delete(y)}function C(R){const y=R.target;y.removeEventListener("dispose",C),S(y)}function L(R){const y=n.get(R);if(y.__webglInit===void 0)return;const F=R.source,H=d.get(F);if(H){const et=H[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&w(R),Object.keys(H).length===0&&d.delete(F)}n.remove(R)}function w(R){const y=n.get(R);s.deleteTexture(y.__webglTexture);const F=R.source,H=d.get(F);delete H[y.__cacheKey],o.memory.textures--}function S(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let et=0;et<y.__webglFramebuffer[H].length;et++)s.deleteFramebuffer(y.__webglFramebuffer[H][et]);else s.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)s.deleteFramebuffer(y.__webglFramebuffer[H]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=R.textures;for(let H=0,et=F.length;H<et;H++){const W=n.get(F[H]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(F[H])}n.remove(R)}let P=0;function N(){P=0}function k(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function q(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function z(R,y){const F=n.get(R);if(R.isVideoTexture&&dt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const H=R.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,R,y);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+y)}function X(R,y){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){Y(F,R,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+y)}function Z(R,y){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){Y(F,R,y);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+y)}function G(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){Q(F,R,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+y)}const it={[Yn]:s.REPEAT,[Fi]:s.CLAMP_TO_EDGE,[Zo]:s.MIRRORED_REPEAT},pt={[Ye]:s.NEAREST,[od]:s.NEAREST_MIPMAP_NEAREST,[wr]:s.NEAREST_MIPMAP_LINEAR,[Mn]:s.LINEAR,[Vo]:s.LINEAR_MIPMAP_NEAREST,[Mi]:s.LINEAR_MIPMAP_LINEAR},yt={[Zf]:s.NEVER,[ep]:s.ALWAYS,[Kf]:s.LESS,[gd]:s.LEQUAL,[$f]:s.EQUAL,[tp]:s.GEQUAL,[Jf]:s.GREATER,[Qf]:s.NOTEQUAL};function Ot(R,y){if(y.type===qn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Mn||y.magFilter===Vo||y.magFilter===wr||y.magFilter===Mi||y.minFilter===Mn||y.minFilter===Vo||y.minFilter===wr||y.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,it[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,it[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,it[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,pt[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,pt[y.minFilter]),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,yt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ye||y.minFilter!==wr&&y.minFilter!==Mi||y.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Zt(R,y){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));const H=y.source;let et=d.get(H);et===void 0&&(et={},d.set(H,et));const W=q(y);if(W!==R.__cacheKey){et[W]===void 0&&(et[W]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),et[W].usedTimes++;const Tt=et[R.__cacheKey];Tt!==void 0&&(et[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&w(y)),R.__cacheKey=W,R.__webglTexture=et[W].texture}return F}function se(R,y,F){return Math.floor(Math.floor(R/F)/y)}function $t(R,y,F,H){const W=R.updateRanges;if(W.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,F,H,y.data);else{W.sort((ot,vt)=>ot.start-vt.start);let Tt=0;for(let ot=1;ot<W.length;ot++){const vt=W[Tt],Ft=W[ot],Dt=vt.start+vt.count,ft=se(Ft.start,y.width,4),Ht=se(vt.start,y.width,4);Ft.start<=Dt+1&&ft===Ht&&se(Ft.start+Ft.count-1,y.width,4)===ft?vt.count=Math.max(vt.count,Ft.start+Ft.count-vt.start):(++Tt,W[Tt]=Ft)}W.length=Tt+1;const lt=s.getParameter(s.UNPACK_ROW_LENGTH),wt=s.getParameter(s.UNPACK_SKIP_PIXELS),Ct=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let ot=0,vt=W.length;ot<vt;ot++){const Ft=W[ot],Dt=Math.floor(Ft.start/4),ft=Math.ceil(Ft.count/4),Ht=Dt%y.width,I=Math.floor(Dt/y.width),rt=ft,ht=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,Ht,I,rt,ht,F,H,y.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,lt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ct)}}function Y(R,y,F){let H=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=s.TEXTURE_3D);const et=Zt(R,y),W=y.source;e.bindTexture(H,R.__webglTexture,s.TEXTURE0+F);const Tt=n.get(W);if(W.version!==Tt.__version||et===!0){e.activeTexture(s.TEXTURE0+F);const lt=ne.getPrimaries(ne.workingColorSpace),wt=y.colorSpace===_i?null:ne.getPrimaries(y.colorSpace),Ct=y.colorSpace===_i||lt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let ot=_(y.image,!1,i.maxTextureSize);ot=Vt(y,ot);const vt=r.convert(y.format,y.colorSpace),Ft=r.convert(y.type);let Dt=M(y.internalFormat,vt,Ft,y.colorSpace,y.isVideoTexture);Ot(H,y);let ft;const Ht=y.mipmaps,I=y.isVideoTexture!==!0,rt=Tt.__version===void 0||et===!0,ht=W.dataReady,Rt=b(y,ot);if(y.isDepthTexture)Dt=v(y.format===Hs,y.type),rt&&(I?e.texStorage2D(s.TEXTURE_2D,1,Dt,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Dt,ot.width,ot.height,0,vt,Ft,null));else if(y.isDataTexture)if(Ht.length>0){I&&rt&&e.texStorage2D(s.TEXTURE_2D,Rt,Dt,Ht[0].width,Ht[0].height);for(let at=0,tt=Ht.length;at<tt;at++)ft=Ht[at],I?ht&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,ft.width,ft.height,vt,Ft,ft.data):e.texImage2D(s.TEXTURE_2D,at,Dt,ft.width,ft.height,0,vt,Ft,ft.data);y.generateMipmaps=!1}else I?(rt&&e.texStorage2D(s.TEXTURE_2D,Rt,Dt,ot.width,ot.height),ht&&$t(y,ot,vt,Ft)):e.texImage2D(s.TEXTURE_2D,0,Dt,ot.width,ot.height,0,vt,Ft,ot.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){I&&rt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Rt,Dt,Ht[0].width,Ht[0].height,ot.depth);for(let at=0,tt=Ht.length;at<tt;at++)if(ft=Ht[at],y.format!==yn)if(vt!==null)if(I){if(ht)if(y.layerUpdates.size>0){const Lt=su(ft.width,ft.height,y.format,y.type);for(const Wt of y.layerUpdates){const ye=ft.data.subarray(Wt*Lt/ft.data.BYTES_PER_ELEMENT,(Wt+1)*Lt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,Wt,ft.width,ft.height,1,vt,ye)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,ft.width,ft.height,ot.depth,vt,ft.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,Dt,ft.width,ft.height,ot.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ht&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,ft.width,ft.height,ot.depth,vt,Ft,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,Dt,ft.width,ft.height,ot.depth,0,vt,Ft,ft.data)}else{I&&rt&&e.texStorage2D(s.TEXTURE_2D,Rt,Dt,Ht[0].width,Ht[0].height);for(let at=0,tt=Ht.length;at<tt;at++)ft=Ht[at],y.format!==yn?vt!==null?I?ht&&e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,ft.width,ft.height,vt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,at,Dt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ht&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,ft.width,ft.height,vt,Ft,ft.data):e.texImage2D(s.TEXTURE_2D,at,Dt,ft.width,ft.height,0,vt,Ft,ft.data)}else if(y.isDataArrayTexture)if(I){if(rt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Rt,Dt,ot.width,ot.height,ot.depth),ht)if(y.layerUpdates.size>0){const at=su(ot.width,ot.height,y.format,y.type);for(const tt of y.layerUpdates){const Lt=ot.data.subarray(tt*at/ot.data.BYTES_PER_ELEMENT,(tt+1)*at/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,ot.width,ot.height,1,vt,Ft,Lt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,vt,Ft,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,ot.width,ot.height,ot.depth,0,vt,Ft,ot.data);else if(y.isData3DTexture)I?(rt&&e.texStorage3D(s.TEXTURE_3D,Rt,Dt,ot.width,ot.height,ot.depth),ht&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,vt,Ft,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,ot.width,ot.height,ot.depth,0,vt,Ft,ot.data);else if(y.isFramebufferTexture){if(rt)if(I)e.texStorage2D(s.TEXTURE_2D,Rt,Dt,ot.width,ot.height);else{let at=ot.width,tt=ot.height;for(let Lt=0;Lt<Rt;Lt++)e.texImage2D(s.TEXTURE_2D,Lt,Dt,at,tt,0,vt,Ft,null),at>>=1,tt>>=1}}else if(Ht.length>0){if(I&&rt){const at=kt(Ht[0]);e.texStorage2D(s.TEXTURE_2D,Rt,Dt,at.width,at.height)}for(let at=0,tt=Ht.length;at<tt;at++)ft=Ht[at],I?ht&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,vt,Ft,ft):e.texImage2D(s.TEXTURE_2D,at,Dt,vt,Ft,ft);y.generateMipmaps=!1}else if(I){if(rt){const at=kt(ot);e.texStorage2D(s.TEXTURE_2D,Rt,Dt,at.width,at.height)}ht&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Ft,ot)}else e.texImage2D(s.TEXTURE_2D,0,Dt,vt,Ft,ot);m(y)&&p(H),Tt.__version=W.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Q(R,y,F){if(y.image.length!==6)return;const H=Zt(R,y),et=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+F);const W=n.get(et);if(et.version!==W.__version||H===!0){e.activeTexture(s.TEXTURE0+F);const Tt=ne.getPrimaries(ne.workingColorSpace),lt=y.colorSpace===_i?null:ne.getPrimaries(y.colorSpace),wt=y.colorSpace===_i||Tt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Ct=y.isCompressedTexture||y.image[0].isCompressedTexture,ot=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let tt=0;tt<6;tt++)!Ct&&!ot?vt[tt]=_(y.image[tt],!0,i.maxCubemapSize):vt[tt]=ot?y.image[tt].image:y.image[tt],vt[tt]=Vt(y,vt[tt]);const Ft=vt[0],Dt=r.convert(y.format,y.colorSpace),ft=r.convert(y.type),Ht=M(y.internalFormat,Dt,ft,y.colorSpace),I=y.isVideoTexture!==!0,rt=W.__version===void 0||H===!0,ht=et.dataReady;let Rt=b(y,Ft);Ot(s.TEXTURE_CUBE_MAP,y);let at;if(Ct){I&&rt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,Ht,Ft.width,Ft.height);for(let tt=0;tt<6;tt++){at=vt[tt].mipmaps;for(let Lt=0;Lt<at.length;Lt++){const Wt=at[Lt];y.format!==yn?Dt!==null?I?ht&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt,0,0,Wt.width,Wt.height,Dt,Wt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt,Ht,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt,0,0,Wt.width,Wt.height,Dt,ft,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt,Ht,Wt.width,Wt.height,0,Dt,ft,Wt.data)}}}else{if(at=y.mipmaps,I&&rt){at.length>0&&Rt++;const tt=kt(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,Ht,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ot){I?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,vt[tt].width,vt[tt].height,Dt,ft,vt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ht,vt[tt].width,vt[tt].height,0,Dt,ft,vt[tt].data);for(let Lt=0;Lt<at.length;Lt++){const ye=at[Lt].image[tt].image;I?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt+1,0,0,ye.width,ye.height,Dt,ft,ye.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt+1,Ht,ye.width,ye.height,0,Dt,ft,ye.data)}}else{I?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,ft,vt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ht,Dt,ft,vt[tt]);for(let Lt=0;Lt<at.length;Lt++){const Wt=at[Lt];I?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt+1,0,0,Dt,ft,Wt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt+1,Ht,Dt,ft,Wt.image[tt])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),W.__version=et.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function _t(R,y,F,H,et,W){const Tt=r.convert(F.format,F.colorSpace),lt=r.convert(F.type),wt=M(F.internalFormat,Tt,lt,F.colorSpace),Ct=n.get(y),ot=n.get(F);if(ot.__renderTarget=y,!Ct.__hasExternalTextures){const vt=Math.max(1,y.width>>W),Ft=Math.max(1,y.height>>W);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,W,wt,vt,Ft,y.depth,0,Tt,lt,null):e.texImage2D(et,W,wt,vt,Ft,0,Tt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),st(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,et,ot.__webglTexture,0,ut(y)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,et,ot.__webglTexture,W),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(R,y,F){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer){const H=y.depthTexture,et=H&&H.isDepthTexture?H.type:null,W=v(y.stencilBuffer,et),Tt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=ut(y);st(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,W,y.width,y.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,W,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,W,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,R)}else{const H=y.textures;for(let et=0;et<H.length;et++){const W=H[et],Tt=r.convert(W.format,W.colorSpace),lt=r.convert(W.type),wt=M(W.internalFormat,Tt,lt,W.colorSpace),Ct=ut(y);F&&st(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,wt,y.width,y.height):st(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,wt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,wt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=n.get(y.depthTexture);H.__renderTarget=y,(!H.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const et=H.__webglTexture,W=ut(y);if(y.depthTexture.format===kr)st(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(y.depthTexture.format===Hs)st(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Kt(R){const y=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const H=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",et)};H.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=H}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const H=R.texture.mipmaps;H&&H.length>0?St(y.__webglFramebuffer[0],R):St(y.__webglFramebuffer,R)}else if(F){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=s.createRenderbuffer(),Et(y.__webglDepthbuffer[H],R,!1);else{const et=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,W)}}else{const H=R.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Et(y.__webglDepthbuffer,R,!1);else{const et=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,W)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(R,y,F){const H=n.get(R);y!==void 0&&_t(H.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Kt(R)}function D(R){const y=R.texture,F=n.get(R),H=n.get(y);R.addEventListener("dispose",C);const et=R.textures,W=R.isWebGLCubeRenderTarget===!0,Tt=et.length>1;if(Tt||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=y.version,o.memory.textures++),W){F.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[lt]=[];for(let wt=0;wt<y.mipmaps.length;wt++)F.__webglFramebuffer[lt][wt]=s.createFramebuffer()}else F.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)F.__webglFramebuffer[lt]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let lt=0,wt=et.length;lt<wt;lt++){const Ct=n.get(et[lt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&st(R)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let lt=0;lt<et.length;lt++){const wt=et[lt];F.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[lt]);const Ct=r.convert(wt.format,wt.colorSpace),ot=r.convert(wt.type),vt=M(wt.internalFormat,Ct,ot,wt.colorSpace,R.isXRRenderTarget===!0),Ft=ut(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,vt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,F.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Et(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0)for(let wt=0;wt<y.mipmaps.length;wt++)_t(F.__webglFramebuffer[lt][wt],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt);else _t(F.__webglFramebuffer[lt],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(y)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let lt=0,wt=et.length;lt<wt;lt++){const Ct=et[lt],ot=n.get(Ct);let vt=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(vt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,ot.__webglTexture),Ot(vt,Ct),_t(F.__webglFramebuffer,R,Ct,s.COLOR_ATTACHMENT0+lt,vt,0),m(Ct)&&p(vt)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,H.__webglTexture),Ot(lt,y),y.mipmaps&&y.mipmaps.length>0)for(let wt=0;wt<y.mipmaps.length;wt++)_t(F.__webglFramebuffer[wt],R,y,s.COLOR_ATTACHMENT0,lt,wt);else _t(F.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,lt,0);m(y)&&p(lt),e.unbindTexture()}R.depthBuffer&&Kt(R)}function nt(R){const y=R.textures;for(let F=0,H=y.length;F<H;F++){const et=y[F];if(m(et)){const W=x(R),Tt=n.get(et).__webglTexture;e.bindTexture(W,Tt),p(W),e.unbindTexture()}}}const J=[],K=[];function j(R){if(R.samples>0){if(st(R)===!1){const y=R.textures,F=R.width,H=R.height;let et=s.COLOR_BUFFER_BIT;const W=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(R),lt=y.length>1;if(lt)for(let Ct=0;Ct<y.length;Ct++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const wt=R.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ct=0;Ct<y.length;Ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ct]);const ot=n.get(y[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ot,0)}s.blitFramebuffer(0,0,F,H,0,0,F,H,et,s.NEAREST),l===!0&&(J.length=0,K.length=0,J.push(s.COLOR_ATTACHMENT0+Ct),R.depthBuffer&&R.resolveDepthBuffer===!1&&(J.push(W),K.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,K)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let Ct=0;Ct<y.length;Ct++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ct]);const ot=n.get(y[Ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function ut(R){return Math.min(i.maxSamples,R.samples)}function st(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function dt(R){const y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Vt(R,y){const F=R.colorSpace,H=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==on&&F!==_i&&(ne.getTransfer(F)===ue?(H!==yn||et!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function kt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=ce,this.setupRenderTarget=D,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=st}function Fv(s,t){function e(n,i=_i){let r;const o=ne.getTransfer(i);if(n===jn)return s.UNSIGNED_BYTE;if(n===Sc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===cd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ad)return s.BYTE;if(n===ld)return s.SHORT;if(n===Fr)return s.UNSIGNED_SHORT;if(n===yc)return s.INT;if(n===is)return s.UNSIGNED_INT;if(n===qn)return s.FLOAT;if(n===Un)return s.HALF_FLOAT;if(n===ud)return s.ALPHA;if(n===dd)return s.RGB;if(n===yn)return s.RGBA;if(n===kr)return s.DEPTH_COMPONENT;if(n===Hs)return s.DEPTH_STENCIL;if(n===Tc)return s.RED;if(n===bc)return s.RED_INTEGER;if(n===fd)return s.RG;if(n===Ec)return s.RG_INTEGER;if(n===Ac)return s.RGBA_INTEGER;if(n===Ho||n===Go||n===Wo||n===Xo)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rl||n===Cl||n===Pl||n===Ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Il||n===Nl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dl||n===Il)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ul||n===Ol||n===Fl||n===kl||n===Bl||n===zl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ul)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ol)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ql)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zl||n===Kl||n===$l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zl)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jl||n===Ql||n===tc||n===ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
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

}`;class zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Dd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pe({vertexShader:kv,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vv extends os{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new zv,p={},x=e.getContextAttributes();let M=null,v=null;const b=[],A=[],C=new $;let L=null;const w=new sn;w.viewport=new le;const S=new sn;S.viewport=new le;const P=[w,S],N=new $m;let k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=b[Y];return Q===void 0&&(Q=new Ba,b[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=b[Y];return Q===void 0&&(Q=new Ba,b[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=b[Y];return Q===void 0&&(Q=new Ba,b[Y]=Q),Q.getHandSpace()};function z(Y){const Q=A.indexOf(Y.inputSource);if(Q===-1)return;const _t=b[Q];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||o),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<b.length;Y++){const Q=A[Y];Q!==null&&(A[Y]=null,b[Y].disconnect(Q))}k=null,q=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(M),f=null,d=null,u=null,i=null,v=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",X),i.addEventListener("inputsourceschange",Z),x.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Et=null,St=null;x.depth&&(St=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=x.stencil?Hs:kr,Et=x.stencil?Vs:is);const Kt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Kt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new fn(d.textureWidth,d.textureHeight,{format:yn,type:jn,depthTexture:new Uc(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _t={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new fn(f.framebufferWidth,f.framebufferHeight,{format:yn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(Y){for(let Q=0;Q<Y.removed.length;Q++){const _t=Y.removed[Q],Et=A.indexOf(_t);Et>=0&&(A[Et]=null,b[Et].disconnect(_t))}for(let Q=0;Q<Y.added.length;Q++){const _t=Y.added[Q];let Et=A.indexOf(_t);if(Et===-1){for(let Kt=0;Kt<b.length;Kt++)if(Kt>=A.length){A.push(_t),Et=Kt;break}else if(A[Kt]===null){A[Kt]=_t,Et=Kt;break}if(Et===-1)break}const St=b[Et];St&&St.connect(_t)}}const G=new E,it=new E;function pt(Y,Q,_t){G.setFromMatrixPosition(Q.matrixWorld),it.setFromMatrixPosition(_t.matrixWorld);const Et=G.distanceTo(it),St=Q.projectionMatrix.elements,Kt=_t.projectionMatrix.elements,ce=St[14]/(St[10]-1),D=St[14]/(St[10]+1),nt=(St[9]+1)/St[5],J=(St[9]-1)/St[5],K=(St[8]-1)/St[0],j=(Kt[8]+1)/Kt[0],ut=ce*K,st=ce*j,dt=Et/(-K+j),Vt=dt*-K;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Vt),Y.translateZ(dt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),St[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const kt=ce+dt,R=D+dt,y=ut-Vt,F=st+(Et-Vt),H=nt*D/R*kt,et=J*D/R*kt;Y.projectionMatrix.makePerspective(y,F,H,et,kt,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function yt(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,_t=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),N.near=S.near=w.near=Q,N.far=S.far=w.far=_t,(k!==N.near||q!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,q=N.far),N.layers.mask=Y.layers.mask|6,w.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;const Et=Y.parent,St=N.cameras;yt(N,Et);for(let Kt=0;Kt<St.length;Kt++)yt(St[Kt],Et);St.length===2?pt(N,w,S):N.projectionMatrix.copy(w.projectionMatrix),Ot(Y,N,Et)};function Ot(Y,Q,_t){_t===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Gs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return p[Y]};let Zt=null;function se(Y,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Et=!1;_t.length!==N.cameras.length&&(N.cameras.length=0,Et=!0);for(let D=0;D<_t.length;D++){const nt=_t[D];let J=null;if(f!==null)J=f.getViewport(nt);else{const j=u.getViewSubImage(d,nt);J=j.viewport,D===0&&(t.setRenderTargetTextures(v,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(v))}let K=P[D];K===void 0&&(K=new sn,K.layers.enable(D),K.viewport=new le,P[D]=K),K.matrix.fromArray(nt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(nt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(J.x,J.y,J.width,J.height),D===0&&(N.matrix.copy(K.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Et===!0&&N.cameras.push(K)}const St=i.enabledFeatures;if(St&&St.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const D=u.getDepthInformation(_t[0]);D&&D.isValid&&D.texture&&m.init(D,i.renderState)}if(St&&St.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let D=0;D<_t.length;D++){const nt=_t[D].camera;if(nt){let J=p[nt];J||(J=new Dd,p[nt]=J);const K=u.getCameraImage(nt);J.sourceTexture=K}}}}for(let _t=0;_t<b.length;_t++){const Et=A[_t],St=b[_t];Et!==null&&St!==void 0&&St.update(Et,Q,c||o)}Zt&&Zt(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const $t=new $d;$t.setAnimationLoop(se),this.setAnimationLoop=function(Y){Zt=Y},this.dispose=function(){}}}const Ki=new Fn,Hv=new zt;function Gv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,Ki.copy(v),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(Ki)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wv(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function c(x,M){let v=i[x.id];v===void 0&&(g(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(x,b);const A=t.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function h(x){const M=u();x.__bindingPointIndex=M;const v=s.createBuffer(),b=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,b,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=i[x.id],v=x.uniforms,b=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,C=v.length;A<C;A++){const L=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,S=L.length;w<S;w++){const P=L[w];if(f(P,A,w,b)===!0){const N=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let z=0;z<k.length;z++){const X=k[z],Z=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,N+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,M,v,b){const A=x.value,C=M+"_"+v;if(b[C]===void 0)return typeof A=="number"||typeof A=="boolean"?b[C]=A:b[C]=A.clone(),!0;{const L=b[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return b[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(x){const M=x.uniforms;let v=0;const b=16;for(let C=0,L=M.length;C<L;C++){const w=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,P=w.length;S<P;S++){const N=w[S],k=Array.isArray(N.value)?N.value:[N.value];for(let q=0,z=k.length;q<z;q++){const X=k[q],Z=_(X),G=v%b,it=G%Z.boundary,pt=G+it;v+=it,pt!==0&&b-pt<Z.storage&&(v+=b-pt),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Z.storage}}}const A=v%b;return A>0&&(v+=b-A),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Xv{constructor(t={}){const{canvas:e=vp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=Ie;let A=0,C=0,L=null,w=-1,S=null;const P=new le,N=new le;let k=null;const q=new mt(0);let z=0,X=e.width,Z=e.height,G=1,it=null,pt=null;const yt=new le(0,0,X,Z),Ot=new le(0,0,X,Z);let Zt=!1;const se=new Ic;let $t=!1,Y=!1;const Q=new zt,_t=new E,Et=new le,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function ce(){return L===null?G:1}let D=n;function nt(T,U){return e.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",at,!1),D===null){const U="webgl2";if(D=nt(U,T),D===null)throw nt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let J,K,j,ut,st,dt,Vt,kt,R,y,F,H,et,W,Tt,lt,wt,Ct,ot,vt,Ft,Dt,ft,Ht;function I(){J=new e_(D),J.init(),Dt=new Fv(D,J),K=new j1(D,J,t,Dt),j=new Uv(D,J),K.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),ut=new s_(D),st=new Sv,dt=new Ov(D,J,j,st,K,Dt,ut),Vt=new K1(v),kt=new t_(v),R=new h0(D),ft=new q1(D,R),y=new n_(D,R,ut,ft),F=new o_(D,y,R,ut),ot=new r_(D,K,dt),lt=new Z1(st),H=new yv(v,Vt,kt,J,K,ft,lt),et=new Gv(v,st),W=new Tv,Tt=new Pv(J),Ct=new X1(v,Vt,kt,j,F,f,l),wt=new Iv(v,F,K),Ht=new Wv(D,ut,K,j),vt=new Y1(D,J,ut),Ft=new i_(D,J,ut),ut.programs=H.programs,v.capabilities=K,v.extensions=J,v.properties=st,v.renderLists=W,v.shadowMap=wt,v.state=j,v.info=ut}I();const rt=new Vv(v,D);this.xr=rt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=J.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=J.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(X,Z,!1))},this.getSize=function(T){return T.set(X,Z)},this.setSize=function(T,U,B=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,Z=U,e.width=Math.floor(T*G),e.height=Math.floor(U*G),B===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(X*G,Z*G).floor()},this.setDrawingBufferSize=function(T,U,B){X=T,Z=U,G=B,e.width=Math.floor(T*B),e.height=Math.floor(U*B),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(yt)},this.setViewport=function(T,U,B,V){T.isVector4?yt.set(T.x,T.y,T.z,T.w):yt.set(T,U,B,V),j.viewport(P.copy(yt).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(Ot)},this.setScissor=function(T,U,B,V){T.isVector4?Ot.set(T.x,T.y,T.z,T.w):Ot.set(T,U,B,V),j.scissor(N.copy(Ot).multiplyScalar(G).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(T){j.setScissorTest(Zt=T)},this.setOpaqueSort=function(T){it=T},this.setTransparentSort=function(T){pt=T},this.getClearColor=function(T){return T.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,B=!0){let V=0;if(T){let O=!1;if(L!==null){const ct=L.texture.format;O=ct===Ac||ct===Ec||ct===bc}if(O){const ct=L.texture.type,xt=ct===jn||ct===is||ct===Fr||ct===Vs||ct===Sc||ct===wc,Pt=Ct.getClearColor(),bt=Ct.getClearAlpha(),Bt=Pt.r,Gt=Pt.g,Nt=Pt.b;xt?(g[0]=Bt,g[1]=Gt,g[2]=Nt,g[3]=bt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Bt,_[1]=Gt,_[2]=Nt,_[3]=bt,D.clearBufferiv(D.COLOR,0,_))}else V|=D.COLOR_BUFFER_BIT}U&&(V|=D.DEPTH_BUFFER_BIT),B&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Ct.dispose(),W.dispose(),Tt.dispose(),st.dispose(),Vt.dispose(),kt.dispose(),F.dispose(),ft.dispose(),Ht.dispose(),H.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",$n),rt.removeEventListener("sessionend",$c),Gi.stop()};function ht(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=ut.autoReset,U=wt.enabled,B=wt.autoUpdate,V=wt.needsUpdate,O=wt.type;I(),ut.autoReset=T,wt.enabled=U,wt.autoUpdate=B,wt.needsUpdate=V,wt.type=O}function at(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function tt(T){const U=T.target;U.removeEventListener("dispose",tt),Lt(U)}function Lt(T){Wt(T),st.remove(T)}function Wt(T){const U=st.get(T).programs;U!==void 0&&(U.forEach(function(B){H.releaseProgram(B)}),T.isShaderMaterial&&H.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,B,V,O,ct){U===null&&(U=St);const xt=O.isMesh&&O.matrixWorld.determinant()<0,Pt=Mf(T,U,B,V,O);j.setMaterial(V,xt);let bt=B.index,Bt=1;if(V.wireframe===!0){if(bt=y.getWireframeAttribute(B),bt===void 0)return;Bt=2}const Gt=B.drawRange,Nt=B.attributes.position;let Qt=Gt.start*Bt,ge=(Gt.start+Gt.count)*Bt;ct!==null&&(Qt=Math.max(Qt,ct.start*Bt),ge=Math.min(ge,(ct.start+ct.count)*Bt)),bt!==null?(Qt=Math.max(Qt,0),ge=Math.min(ge,bt.count)):Nt!=null&&(Qt=Math.max(Qt,0),ge=Math.min(ge,Nt.count));const De=ge-Qt;if(De<0||De===1/0)return;ft.setup(O,V,Pt,B,bt);let Se,xe=vt;if(bt!==null&&(Se=R.get(bt),xe=Ft,xe.setIndex(Se)),O.isMesh)V.wireframe===!0?(j.setLineWidth(V.wireframeLinewidth*ce()),xe.setMode(D.LINES)):xe.setMode(D.TRIANGLES);else if(O.isLine){let Ut=V.linewidth;Ut===void 0&&(Ut=1),j.setLineWidth(Ut*ce()),O.isLineSegments?xe.setMode(D.LINES):O.isLineLoop?xe.setMode(D.LINE_LOOP):xe.setMode(D.LINE_STRIP)}else O.isPoints?xe.setMode(D.POINTS):O.isSprite&&xe.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Hr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))xe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ut=O._multiDrawStarts,Ee=O._multiDrawCounts,oe=O._multiDrawCount,pn=bt?R.get(bt).bytesPerElement:1,ls=st.get(V).currentProgram.getUniforms();for(let mn=0;mn<oe;mn++)ls.setValue(D,"_gl_DrawID",mn),xe.render(Ut[mn]/pn,Ee[mn])}else if(O.isInstancedMesh)xe.renderInstances(Qt,De,O.count);else if(B.isInstancedBufferGeometry){const Ut=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ee=Math.min(B.instanceCount,Ut);xe.renderInstances(Qt,De,Ee)}else xe.render(Qt,De)};function ye(T,U,B){T.transparent===!0&&T.side===Ce&&T.forceSinglePass===!1?(T.side=$e,T.needsUpdate=!0,to(T,U,B),T.side=ri,T.needsUpdate=!0,to(T,U,B),T.side=Ce):to(T,U,B)}this.compile=function(T,U,B=null){B===null&&(B=T),p=Tt.get(B),p.init(U),M.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==B&&T.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ct=O.material;if(ct)if(Array.isArray(ct))for(let xt=0;xt<ct.length;xt++){const Pt=ct[xt];ye(Pt,B,O),V.add(Pt)}else ye(ct,B,O),V.add(ct)}),p=M.pop(),V},this.compileAsync=function(T,U,B=null){const V=this.compile(T,U,B);return new Promise(O=>{function ct(){if(V.forEach(function(xt){st.get(xt).currentProgram.isReady()&&V.delete(xt)}),V.size===0){O(T);return}setTimeout(ct,10)}J.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let he=null;function li(T){he&&he(T)}function $n(){Gi.stop()}function $c(){Gi.start()}const Gi=new $d;Gi.setAnimationLoop(li),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(T){he=T,rt.setAnimationLoop(T),T===null?Gi.stop():Gi.start()},rt.addEventListener("sessionstart",$n),rt.addEventListener("sessionend",$c),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,L),p=Tt.get(T,M.length),p.init(U),M.push(p),Q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),se.setFromProjectionMatrix(Q,ii,U.reversedDepth),Y=this.localClippingEnabled,$t=lt.init(this.clippingPlanes,Y),m=W.get(T,x.length),m.init(),x.push(m),rt.enabled===!0&&rt.isPresenting===!0){const ct=v.xr.getDepthSensingMesh();ct!==null&&ga(ct,U,-1/0,v.sortObjects)}ga(T,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,pt),Kt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Kt&&Ct.addToRenderList(m,T),this.info.render.frame++,$t===!0&&lt.beginShadows();const B=p.state.shadowsArray;wt.render(B,T,U),$t===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,O=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ct=U.cameras;if(O.length>0)for(let xt=0,Pt=ct.length;xt<Pt;xt++){const bt=ct[xt];Qc(V,O,T,bt)}Kt&&Ct.render(T);for(let xt=0,Pt=ct.length;xt<Pt;xt++){const bt=ct[xt];Jc(m,T,bt,bt.viewport)}}else O.length>0&&Qc(V,O,T,U),Kt&&Ct.render(T),Jc(m,T,U);L!==null&&C===0&&(dt.updateMultisampleRenderTarget(L),dt.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(v,T,U),ft.resetDefaultState(),w=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],$t===!0&&lt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ga(T,U,B,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||se.intersectsSprite(T)){V&&Et.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const xt=F.update(T),Pt=T.material;Pt.visible&&m.push(T,xt,Pt,B,Et.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||se.intersectsObject(T))){const xt=F.update(T),Pt=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Et.copy(T.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Et.copy(xt.boundingSphere.center)),Et.applyMatrix4(T.matrixWorld).applyMatrix4(Q)),Array.isArray(Pt)){const bt=xt.groups;for(let Bt=0,Gt=bt.length;Bt<Gt;Bt++){const Nt=bt[Bt],Qt=Pt[Nt.materialIndex];Qt&&Qt.visible&&m.push(T,xt,Qt,B,Et.z,Nt)}}else Pt.visible&&m.push(T,xt,Pt,B,Et.z,null)}}const ct=T.children;for(let xt=0,Pt=ct.length;xt<Pt;xt++)ga(ct[xt],U,B,V)}function Jc(T,U,B,V){const O=T.opaque,ct=T.transmissive,xt=T.transparent;p.setupLightsView(B),$t===!0&&lt.setGlobalState(v.clippingPlanes,B),V&&j.viewport(P.copy(V)),O.length>0&&Qr(O,U,B),ct.length>0&&Qr(ct,U,B),xt.length>0&&Qr(xt,U,B),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Qc(T,U,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new fn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Un:jn,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const ct=p.state.transmissionRenderTarget[V.id],xt=V.viewport||P;ct.setSize(xt.z*v.transmissionResolutionScale,xt.w*v.transmissionResolutionScale);const Pt=v.getRenderTarget(),bt=v.getActiveCubeFace(),Bt=v.getActiveMipmapLevel();v.setRenderTarget(ct),v.getClearColor(q),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),Kt&&Ct.render(B);const Gt=v.toneMapping;v.toneMapping=ki;const Nt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),$t===!0&&lt.setGlobalState(v.clippingPlanes,V),Qr(T,B,V),dt.updateMultisampleRenderTarget(ct),dt.updateRenderTargetMipmap(ct),J.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let ge=0,De=U.length;ge<De;ge++){const Se=U[ge],xe=Se.object,Ut=Se.geometry,Ee=Se.material,oe=Se.group;if(Ee.side===Ce&&xe.layers.test(V.layers)){const pn=Ee.side;Ee.side=$e,Ee.needsUpdate=!0,th(xe,B,V,Ut,Ee,oe),Ee.side=pn,Ee.needsUpdate=!0,Qt=!0}}Qt===!0&&(dt.updateMultisampleRenderTarget(ct),dt.updateRenderTargetMipmap(ct))}v.setRenderTarget(Pt,bt,Bt),v.setClearColor(q,z),Nt!==void 0&&(V.viewport=Nt),v.toneMapping=Gt}function Qr(T,U,B){const V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ct=T.length;O<ct;O++){const xt=T[O],Pt=xt.object,bt=xt.geometry,Bt=xt.group;let Gt=xt.material;Gt.allowOverride===!0&&V!==null&&(Gt=V),Pt.layers.test(B.layers)&&th(Pt,U,B,bt,Gt,Bt)}}function th(T,U,B,V,O,ct){T.onBeforeRender(v,U,B,V,O,ct),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,U,B,V,T,ct),O.transparent===!0&&O.side===Ce&&O.forceSinglePass===!1?(O.side=$e,O.needsUpdate=!0,v.renderBufferDirect(B,U,V,O,T,ct),O.side=ri,O.needsUpdate=!0,v.renderBufferDirect(B,U,V,O,T,ct),O.side=Ce):v.renderBufferDirect(B,U,V,O,T,ct),T.onAfterRender(v,U,B,V,O,ct)}function to(T,U,B){U.isScene!==!0&&(U=St);const V=st.get(T),O=p.state.lights,ct=p.state.shadowsArray,xt=O.state.version,Pt=H.getParameters(T,O.state,ct,U,B),bt=H.getProgramCacheKey(Pt);let Bt=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?kt:Vt).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",tt),Bt=new Map,V.programs=Bt);let Gt=Bt.get(bt);if(Gt!==void 0){if(V.currentProgram===Gt&&V.lightsStateVersion===xt)return nh(T,Pt),Gt}else Pt.uniforms=H.getUniforms(T),T.onBeforeCompile(Pt,v),Gt=H.acquireProgram(Pt,bt),Bt.set(bt,Gt),V.uniforms=Pt.uniforms;const Nt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Nt.clippingPlanes=lt.uniform),nh(T,Pt),V.needsLights=Sf(T),V.lightsStateVersion=xt,V.needsLights&&(Nt.ambientLightColor.value=O.state.ambient,Nt.lightProbe.value=O.state.probe,Nt.directionalLights.value=O.state.directional,Nt.directionalLightShadows.value=O.state.directionalShadow,Nt.spotLights.value=O.state.spot,Nt.spotLightShadows.value=O.state.spotShadow,Nt.rectAreaLights.value=O.state.rectArea,Nt.ltc_1.value=O.state.rectAreaLTC1,Nt.ltc_2.value=O.state.rectAreaLTC2,Nt.pointLights.value=O.state.point,Nt.pointLightShadows.value=O.state.pointShadow,Nt.hemisphereLights.value=O.state.hemi,Nt.directionalShadowMap.value=O.state.directionalShadowMap,Nt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Nt.spotShadowMap.value=O.state.spotShadowMap,Nt.spotLightMatrix.value=O.state.spotLightMatrix,Nt.spotLightMap.value=O.state.spotLightMap,Nt.pointShadowMap.value=O.state.pointShadowMap,Nt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Gt,V.uniformsList=null,Gt}function eh(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=qo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function nh(T,U){const B=st.get(T);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Mf(T,U,B,V,O){U.isScene!==!0&&(U=St),dt.resetTextureUnits();const ct=U.fog,xt=V.isMeshStandardMaterial?U.environment:null,Pt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:on,bt=(V.isMeshStandardMaterial?kt:Vt).get(V.envMap||xt),Bt=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Gt=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Nt=!!B.morphAttributes.position,Qt=!!B.morphAttributes.normal,ge=!!B.morphAttributes.color;let De=ki;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(De=v.toneMapping);const Se=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,xe=Se!==void 0?Se.length:0,Ut=st.get(V),Ee=p.state.lights;if($t===!0&&(Y===!0||T!==S)){const tn=T===S&&V.id===w;lt.setState(V,T,tn)}let oe=!1;V.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Ee.state.version||Ut.outputColorSpace!==Pt||O.isBatchedMesh&&Ut.batching===!1||!O.isBatchedMesh&&Ut.batching===!0||O.isBatchedMesh&&Ut.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ut.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ut.instancing===!1||!O.isInstancedMesh&&Ut.instancing===!0||O.isSkinnedMesh&&Ut.skinning===!1||!O.isSkinnedMesh&&Ut.skinning===!0||O.isInstancedMesh&&Ut.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ut.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ut.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ut.instancingMorph===!1&&O.morphTexture!==null||Ut.envMap!==bt||V.fog===!0&&Ut.fog!==ct||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==lt.numPlanes||Ut.numIntersection!==lt.numIntersection)||Ut.vertexAlphas!==Bt||Ut.vertexTangents!==Gt||Ut.morphTargets!==Nt||Ut.morphNormals!==Qt||Ut.morphColors!==ge||Ut.toneMapping!==De||Ut.morphTargetsCount!==xe)&&(oe=!0):(oe=!0,Ut.__version=V.version);let pn=Ut.currentProgram;oe===!0&&(pn=to(V,U,O));let ls=!1,mn=!1,ar=!1;const Ae=pn.getUniforms(),Tn=Ut.uniforms;if(j.useProgram(pn.program)&&(ls=!0,mn=!0,ar=!0),V.id!==w&&(w=V.id,mn=!0),ls||S!==T){j.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ae.setValue(D,"projectionMatrix",T.projectionMatrix),Ae.setValue(D,"viewMatrix",T.matrixWorldInverse);const ln=Ae.map.cameraPosition;ln!==void 0&&ln.setValue(D,_t.setFromMatrixPosition(T.matrixWorld)),K.logarithmicDepthBuffer&&Ae.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ae.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,mn=!0,ar=!0)}if(O.isSkinnedMesh){Ae.setOptional(D,O,"bindMatrix"),Ae.setOptional(D,O,"bindMatrixInverse");const tn=O.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ae.setValue(D,"boneTexture",tn.boneTexture,dt))}O.isBatchedMesh&&(Ae.setOptional(D,O,"batchingTexture"),Ae.setValue(D,"batchingTexture",O._matricesTexture,dt),Ae.setOptional(D,O,"batchingIdTexture"),Ae.setValue(D,"batchingIdTexture",O._indirectTexture,dt),Ae.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Ae.setValue(D,"batchingColorTexture",O._colorsTexture,dt));const bn=B.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&ot.update(O,B,pn),(mn||Ut.receiveShadow!==O.receiveShadow)&&(Ut.receiveShadow=O.receiveShadow,Ae.setValue(D,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Tn.envMap.value=bt,Tn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Tn.envMapIntensity.value=U.environmentIntensity),mn&&(Ae.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ut.needsLights&&yf(Tn,ar),ct&&V.fog===!0&&et.refreshFogUniforms(Tn,ct),et.refreshMaterialUniforms(Tn,V,G,Z,p.state.transmissionRenderTarget[T.id]),qo.upload(D,eh(Ut),Tn,dt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(qo.upload(D,eh(Ut),Tn,dt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ae.setValue(D,"center",O.center),Ae.setValue(D,"modelViewMatrix",O.modelViewMatrix),Ae.setValue(D,"normalMatrix",O.normalMatrix),Ae.setValue(D,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const tn=V.uniformsGroups;for(let ln=0,_a=tn.length;ln<_a;ln++){const Wi=tn[ln];Ht.update(Wi,pn),Ht.bind(Wi,pn)}}return pn}function yf(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Sf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,U,B){const V=st.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),st.get(T.texture).__webglTexture=U,st.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:B,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const B=st.get(T);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const wf=D.createFramebuffer();this.setRenderTarget=function(T,U=0,B=0){L=T,A=U,C=B;let V=!0,O=null,ct=!1,xt=!1;if(T){const bt=st.get(T);if(bt.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(bt.__webglFramebuffer===void 0)dt.setupRenderTarget(T);else if(bt.__hasExternalTextures)dt.rebindTextures(T,st.get(T.texture).__webglTexture,st.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Nt=T.depthTexture;if(bt.__boundDepthTexture!==Nt){if(Nt!==null&&st.has(Nt)&&(T.width!==Nt.image.width||T.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(T)}}const Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(xt=!0);const Gt=st.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Gt[U])?O=Gt[U][B]:O=Gt[U],ct=!0):T.samples>0&&dt.useMultisampledRTT(T)===!1?O=st.get(T).__webglMultisampledFramebuffer:Array.isArray(Gt)?O=Gt[B]:O=Gt,P.copy(T.viewport),N.copy(T.scissor),k=T.scissorTest}else P.copy(yt).multiplyScalar(G).floor(),N.copy(Ot).multiplyScalar(G).floor(),k=Zt;if(B!==0&&(O=wf),j.bindFramebuffer(D.FRAMEBUFFER,O)&&V&&j.drawBuffers(T,O),j.viewport(P),j.scissor(N),j.setScissorTest(k),ct){const bt=st.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,B)}else if(xt){const bt=U;for(let Bt=0;Bt<T.textures.length;Bt++){const Gt=st.get(T.textures[Bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Bt,Gt.__webglTexture,B,bt)}}else if(T!==null&&B!==0){const bt=st.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bt.__webglTexture,B)}w=-1},this.readRenderTargetPixels=function(T,U,B,V,O,ct,xt,Pt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=st.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt){j.bindFramebuffer(D.FRAMEBUFFER,bt);try{const Bt=T.textures[Pt],Gt=Bt.format,Nt=Bt.type;if(!K.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&B>=0&&B<=T.height-O&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Pt),D.readPixels(U,B,V,O,Dt.convert(Gt),Dt.convert(Nt),ct))}finally{const Bt=L!==null?st.get(L).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(T,U,B,V,O,ct,xt,Pt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=st.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt)if(U>=0&&U<=T.width-V&&B>=0&&B<=T.height-O){j.bindFramebuffer(D.FRAMEBUFFER,bt);const Bt=T.textures[Pt],Gt=Bt.format,Nt=Bt.type;if(!K.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Qt),D.bufferData(D.PIXEL_PACK_BUFFER,ct.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Pt),D.readPixels(U,B,V,O,Dt.convert(Gt),Dt.convert(Nt),0);const ge=L!==null?st.get(L).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,ge);const De=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await xp(D,De,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Qt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ct),D.deleteBuffer(Qt),D.deleteSync(De),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,B=0){const V=Math.pow(2,-B),O=Math.floor(T.image.width*V),ct=Math.floor(T.image.height*V),xt=U!==null?U.x:0,Pt=U!==null?U.y:0;dt.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,xt,Pt,O,ct),j.unbindTexture()};const Tf=D.createFramebuffer(),bf=D.createFramebuffer();this.copyTextureToTexture=function(T,U,B=null,V=null,O=0,ct=null){ct===null&&(O!==0?(Hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=O,O=0):ct=0);let xt,Pt,bt,Bt,Gt,Nt,Qt,ge,De;const Se=T.isCompressedTexture?T.mipmaps[ct]:T.image;if(B!==null)xt=B.max.x-B.min.x,Pt=B.max.y-B.min.y,bt=B.isBox3?B.max.z-B.min.z:1,Bt=B.min.x,Gt=B.min.y,Nt=B.isBox3?B.min.z:0;else{const bn=Math.pow(2,-O);xt=Math.floor(Se.width*bn),Pt=Math.floor(Se.height*bn),T.isDataArrayTexture?bt=Se.depth:T.isData3DTexture?bt=Math.floor(Se.depth*bn):bt=1,Bt=0,Gt=0,Nt=0}V!==null?(Qt=V.x,ge=V.y,De=V.z):(Qt=0,ge=0,De=0);const xe=Dt.convert(U.format),Ut=Dt.convert(U.type);let Ee;U.isData3DTexture?(dt.setTexture3D(U,0),Ee=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(dt.setTexture2DArray(U,0),Ee=D.TEXTURE_2D_ARRAY):(dt.setTexture2D(U,0),Ee=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const oe=D.getParameter(D.UNPACK_ROW_LENGTH),pn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ls=D.getParameter(D.UNPACK_SKIP_PIXELS),mn=D.getParameter(D.UNPACK_SKIP_ROWS),ar=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Nt);const Ae=T.isDataArrayTexture||T.isData3DTexture,Tn=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const bn=st.get(T),tn=st.get(U),ln=st.get(bn.__renderTarget),_a=st.get(tn.__renderTarget);j.bindFramebuffer(D.READ_FRAMEBUFFER,ln.__webglFramebuffer),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,_a.__webglFramebuffer);for(let Wi=0;Wi<bt;Wi++)Ae&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.get(T).__webglTexture,O,Nt+Wi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.get(U).__webglTexture,ct,De+Wi)),D.blitFramebuffer(Bt,Gt,xt,Pt,Qt,ge,xt,Pt,D.DEPTH_BUFFER_BIT,D.NEAREST);j.bindFramebuffer(D.READ_FRAMEBUFFER,null),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||T.isRenderTargetTexture||st.has(T)){const bn=st.get(T),tn=st.get(U);j.bindFramebuffer(D.READ_FRAMEBUFFER,Tf),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,bf);for(let ln=0;ln<bt;ln++)Ae?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bn.__webglTexture,O,Nt+ln):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bn.__webglTexture,O),Tn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tn.__webglTexture,ct,De+ln):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,tn.__webglTexture,ct),O!==0?D.blitFramebuffer(Bt,Gt,xt,Pt,Qt,ge,xt,Pt,D.COLOR_BUFFER_BIT,D.NEAREST):Tn?D.copyTexSubImage3D(Ee,ct,Qt,ge,De+ln,Bt,Gt,xt,Pt):D.copyTexSubImage2D(Ee,ct,Qt,ge,Bt,Gt,xt,Pt);j.bindFramebuffer(D.READ_FRAMEBUFFER,null),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Tn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ee,ct,Qt,ge,De,xt,Pt,bt,xe,Ut,Se.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,ct,Qt,ge,De,xt,Pt,bt,xe,Se.data):D.texSubImage3D(Ee,ct,Qt,ge,De,xt,Pt,bt,xe,Ut,Se):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ct,Qt,ge,xt,Pt,xe,Ut,Se.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ct,Qt,ge,Se.width,Se.height,xe,Se.data):D.texSubImage2D(D.TEXTURE_2D,ct,Qt,ge,xt,Pt,xe,Ut,Se);D.pixelStorei(D.UNPACK_ROW_LENGTH,oe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ls),D.pixelStorei(D.UNPACK_SKIP_ROWS,mn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ar),ct===0&&U.generateMipmaps&&D.generateMipmap(Ee),j.unbindTexture()},this.initRenderTarget=function(T){st.get(T).__webglFramebuffer===void 0&&dt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?dt.setTextureCube(T,0):T.isData3DTexture?dt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?dt.setTexture2DArray(T,0):dt.setTexture2D(T,0),j.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,j.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=(s,t,e=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",s);return Object.keys(t).forEach(i=>{n.setAttribute(i,String(t[i]))}),e.length&&e.forEach(i=>{const r=nf(...i);n.appendChild(r)}),n};var qv=([s,t,e])=>nf(s,t,e);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=s=>Array.from(s.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),jv=s=>typeof s=="string"?s:!s||!s.class?"":s.class&&typeof s.class=="string"?s.class.split(" "):s.class&&Array.isArray(s.class)?s.class:"",Zv=s=>s.flatMap(jv).map(e=>e.trim()).filter(Boolean).filter((e,n,i)=>i.indexOf(e)===n).join(" "),Kv=s=>s.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,n)=>e.toUpperCase()+n.toLowerCase()),Ru=(s,{nameAttr:t,icons:e,attrs:n})=>{const i=s.getAttribute(t);if(i==null)return;const r=Kv(i),o=e[r];if(!o)return console.warn(`${s.outerHTML} icon name was not found in the provided icons object.`);const a=Yv(s),[l,c,h]=o,u={...c,"data-lucide":i,...n,...a},d=Zv(["lucide",`lucide-${i}`,a,n]);d&&Object.assign(u,{class:d});const f=qv([l,u,h]);return s.parentNode?.replaceChild(f,s)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=["svg",je,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=["svg",je,[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=["svg",je,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=["svg",je,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=["svg",je,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=["svg",je,[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=["svg",je,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=["svg",je,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=["svg",je,[["circle",{cx:"8",cy:"18",r:"4"}],["path",{d:"M12 18V2l7 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=["svg",je,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=["svg",je,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=["svg",je,[["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"m20 16-4-4 4-4"}],["path",{d:"m4 8 4 4-4 4"}],["path",{d:"m16 4-4 4-4-4"}],["path",{d:"m8 20 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=["svg",je,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=["svg",je,[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=["svg",je,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=["svg",je,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=["svg",je,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=({icons:s={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(s).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${t}]`);if(Array.from(n).forEach(i=>Ru(i,{nameAttr:t,icons:s,attrs:e})),t==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(r=>Ru(r,{nameAttr:"icon-name",icons:s,attrs:e})))}},Cu={type:"change"},Xc={type:"start"},sf={type:"end"},Uo=new tr,Pu=new Ni,mx=Math.cos(70*Je.DEG2RAD),Fe=new E,cn=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},il=1e-6;class gx extends l0{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new wn,this._lastTargetPosition=new E,this._quat=new wn().setFromUnitVectors(t.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new iu,this._sphericalDelta=new iu,this._scale=1,this._panOffset=new E,this._rotateStart=new $,this._rotateEnd=new $,this._rotateDelta=new $,this._panStart=new $,this._panEnd=new $,this._panDelta=new $,this._dollyStart=new $,this._dollyEnd=new $,this._dollyDelta=new $,this._dollyDirection=new E,this._mouse=new $,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vx.bind(this),this._onPointerDown=_x.bind(this),this._onPointerUp=xx.bind(this),this._onContextMenu=Ex.bind(this),this._onMouseWheel=Sx.bind(this),this._onKeyDown=wx.bind(this),this._onTouchStart=Tx.bind(this),this._onTouchMove=bx.bind(this),this._onMouseDown=Mx.bind(this),this._onMouseMove=yx.bind(this),this._interceptControlDown=Ax.bind(this),this._interceptControlUp=Rx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cu),this.update(),this.state=ve.NONE}update(t=null){const e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),i<-Math.PI?i+=cn:i>Math.PI&&(i-=cn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Fe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new E(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new E(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Uo.origin.copy(this.object.position),Uo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uo.direction))<mx?this.object.lookAt(this.target):(Pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uo.intersectPlane(Pu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>il||this._lastTargetPosition.distanceToSquared(this.target)>il?(this.dispatchEvent(Cu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?cn/60*this.autoRotateSpeed*t:cn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Fe.copy(i).sub(this.target);let r=Fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function _x(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function vx(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function xx(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sf),this.state=ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Mx(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ve.DOLLY;break;case Is.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ve.ROTATE}break;case Is.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Xc)}function yx(s){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Sx(s){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(s.preventDefault(),this.dispatchEvent(Xc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(sf))}function wx(s){this.enabled!==!1&&this._handleKeyDown(s)}function Tx(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ve.TOUCH_ROTATE;break;case Ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case Ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ve.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Xc)}function bx(s){switch(this._trackPointer(s),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ve.NONE}}function Ex(s){this.enabled!==!1&&s.preventDefault()}function Ax(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Cx extends bd{constructor(){super();const t=new Qe;t.deleteAttribute("uv");const e=new ie({side:$e}),n=new ie,i=new Jr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new At(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new vi(t,n,6),a=new me;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new At(t,Cs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new At(t,Cs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new At(t,Cs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new At(t,Cs(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new At(t,Cs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new At(t,Cs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Cs(s){return new Pm({color:0,emissive:16777215,emissiveIntensity:s})}const ns={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class as{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Px=new ca(-1,1,1,-1,0,1);class Lx extends pe{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}}const Dx=new Lx;class ua{constructor(t){this._mesh=new At(Dx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Px)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class rf extends as{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ni.clone(t.uniforms),this.material=new Pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ua(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Lu extends as{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Ix extends as{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Nx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new $);this._width=n.width,this._height=n.height,e=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rf(ns),this.copyPass.material.blending=We,this.clock=new Kd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Lu!==void 0&&(o instanceof Lu?n=!0:o instanceof Ix&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ux extends as{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new mt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Ox={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class $s extends as{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new $(t.x,t.y):new $(256,256),this.clearColor=new mt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(r,o,{type:Un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new fn(r,o,{type:Un});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new fn(r,o,{type:Un});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=Ox;this.highPassUniforms=ni.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ni.clone(ns.uniforms),this.blendMaterial=new Pe({uniforms:this.copyUniforms,vertexShader:ns.vertexShader,fragmentShader:ns.fragmentShader,blending:Or,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new mt,this._oldClearAlpha=1,this._basic=new yi,this._fsQuad=new ua(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=$s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=$s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new Pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}$s.BlurDirectionX=new $(1,0);$s.BlurDirectionY=new $(0,1);const Oo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Fx extends as{constructor(){super(),this.uniforms=ni.clone(Oo.uniforms),this.material=new Rm({name:Oo.name,uniforms:this.uniforms,vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader}),this._fsQuad=new ua(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===td?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ed?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===id?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sd?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nd&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Bi(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new pe;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Du(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=Du(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Du(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Oe(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Iu(s,t){if(t===qf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===nc||t===pd){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===nc)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class of extends ir{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Hx(e)}),this.register(function(e){return new Gx(e)}),this.register(function(e){return new Jx(e)}),this.register(function(e){return new Qx(e)}),this.register(function(e){return new tM(e)}),this.register(function(e){return new Xx(e)}),this.register(function(e){return new qx(e)}),this.register(function(e){return new Yx(e)}),this.register(function(e){return new jx(e)}),this.register(function(e){return new Vx(e)}),this.register(function(e){return new Zx(e)}),this.register(function(e){return new Wx(e)}),this.register(function(e){return new $x(e)}),this.register(function(e){return new Kx(e)}),this.register(function(e){return new Bx(e)}),this.register(function(e){return new eM(e)}),this.register(function(e){return new nM(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ir.extractUrlBase(t);o=Ir.resolveURL(c,this.path)}else o=Ir.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Yd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===af){try{o[Jt.KHR_BINARY_GLTF]=new iM(t)}catch(u){i&&i(u);return}r=JSON.parse(o[Jt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new gM(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Jt.KHR_MATERIALS_UNLIT:o[u]=new zx;break;case Jt.KHR_DRACO_MESH_COMPRESSION:o[u]=new sM(r,this.dracoLoader);break;case Jt.KHR_TEXTURE_TRANSFORM:o[u]=new rM;break;case Jt.KHR_MESH_QUANTIZATION:o[u]=new oM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function kx(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Jt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Bx{constructor(t){this.parser=t,this.name=Jt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new mt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],on);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zd(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Jr(h),c.distance=u;break;case"spot":c=new Ym(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class zx{constructor(){this.name=Jt.KHR_MATERIALS_UNLIT}getMaterialType(){return yi}extendParams(t,e,n){const i=[];t.color=new mt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],on),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Ie))}return Promise.all(i)}}class Vx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class Hx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new $(a,a)}return Promise.all(r)}}class Gx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Wx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Xx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new mt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],on)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ie)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class qx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Yx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new mt().setRGB(a[0],a[1],a[2],on),Promise.all(r)}}class jx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Zx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new mt().setRGB(a[0],a[1],a[2],on),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ie)),Promise.all(r)}}class Kx{constructor(t){this.parser=t,this.name=Jt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class $x{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Jx{constructor(t){this.parser=t,this.name=Jt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class Qx{constructor(t){this.parser=t,this.name=Jt.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class tM{constructor(t){this.parser=t,this.name=Jt.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class eM{constructor(t){this.name=Jt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class nM{constructor(t){this.name=Jt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Cn.TRIANGLES&&c.mode!==Cn.TRIANGLE_STRIP&&c.mode!==Cn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new zt,m=new E,p=new wn,x=new E(1,1,1),M=new vi(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,_.compose(m,p,x));for(const v in l)if(v==="_COLOR_0"){const b=l[v];M.instanceColor=new sc(b.array,b.itemSize,b.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);me.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const af="glTF",xr=12,Nu={JSON:1313821514,BIN:5130562};class iM{constructor(t){this.name=Jt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,xr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==af)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-xr,r=new DataView(t,xr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Nu.JSON){const c=new Uint8Array(t,xr+o,a);this.content=n.decode(c)}else if(l===Nu.BIN){const c=xr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sM{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Jt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=uc[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=uc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Os[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},a,c,on,d)})})}}class rM{constructor(){this.name=Jt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class oM{constructor(){this.name=Jt.KHR_MESH_QUANTIZATION}}class lf extends $r{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,g=t*c,_=g-c,m=-2*f+3*d,p=f-d,x=1-m,M=p-d+u;for(let v=0;v!==a;v++){const b=o[_+v+a],A=o[_+v+l]*h,C=o[g+v+a],L=o[g+v]*h;r[v]=x*b+M*A+m*C+p*L}return r}}const aM=new wn;class lM extends lf{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return aM.fromArray(r).normalize().toArray(r),r}}const Cn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Uu={9728:Ye,9729:Mn,9984:od,9985:Vo,9986:wr,9987:Mi},Ou={33071:Fi,33648:Zo,10497:Yn},sl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cM={CUBICSPLINE:void 0,LINEAR:zr,STEP:Br},rl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ie({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),s.DefaultMaterial}function $i(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Qn(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function uM(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function dM(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fM(s){let t;const e=s.extensions&&s.extensions[Jt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ol(e.attributes):t=s.indices+":"+ol(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+ol(s.targets[n]);return t}function ol(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function dc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function pM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const mM=new zt;class gM{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new kx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new jd(this.options.manager):this.textureLoader=new Km(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return $i(r,a,i),Qn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Jt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Ir.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=sl[i.type],a=Os[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Oe(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=sl[i.type],c=Os[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=e.cache.get(x);M||(_=new c(a,p*f,i.count*f/h),M=new Ed(_,f/h),e.cache.add(x,M)),m=new Gr(M,l,d%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Oe(_,l,g);if(i.sparse!==void 0){const p=sl.SCALAR,x=Os[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new x(o[1],M,i.sparse.count*p),A=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Oe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,L=b.length;C<L;C++){const w=b[C];if(m.setX(w,A[C*l]),l>=2&&m.setY(w,A[C*l+1]),l>=3&&m.setZ(w,A[C*l+2]),l>=4&&m.setW(w,A[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Uu[d.magFilter]||Mn,h.minFilter=Uu[d.minFilter]||Mi,h.wrapS=Ou[d.wrapS]||Yn,h.wrapT=Ou[d.wrapT]||Yn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ye&&h.minFilter!==Mn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){const m=new Ue(_);m.needsUpdate=!0,d(m)}),e.load(Ir.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Qn(u,o),u.userData.mimeType=o.mimeType||pM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Jt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Jt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Jt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ui,Sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Xs,Sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return ie}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[Jt.KHR_MATERIALS_UNLIT]){const u=i[Jt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new mt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],on),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,Ie)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Ce);const h=r.alphaMode||rl.OPAQUE;if(h===rl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===rl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==yi&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new $(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==yi&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==yi){const u=r.emissiveFactor;a.emissive=new mt().setRGB(u[0],u[1],u[2],on)}return r.emissiveTexture!==void 0&&o!==yi&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ie)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Qn(u,r),e.associations.set(u,{materials:t}),r.extensions&&$i(i,u,r),u})}createUniqueName(t){const e=fe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Jt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Fu(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=fM(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Jt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Fu(new pe,c,e),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?hM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const x=c[f];if(m.mode===Cn.TRIANGLES||m.mode===Cn.TRIANGLE_STRIP||m.mode===Cn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Wp(_,x):new At(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Cn.TRIANGLE_STRIP?p.geometry=Iu(p.geometry,pd):m.mode===Cn.TRIANGLE_FAN&&(p.geometry=Iu(p.geometry,nc));else if(m.mode===Cn.LINES)p=new Ld(_,x);else if(m.mode===Cn.LINE_STRIP)p=new qs(_,x);else if(m.mode===Cn.LINE_LOOP)p=new Kp(_,x);else if(m.mode===Cn.POINTS)p=new Nc(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&dM(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Qn(p,r),m.extensions&&$i(i,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&$i(i,u[0],r),u[0];const d=new re;r.extensions&&$i(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new sn(Je.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new ca(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Qn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new zt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Dc(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let M=0,v=d.length;M<v;M++){const b=d[M],A=f[M],C=g[M],L=_[M],w=m[M];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const S=n._createAnimationTracks(b,A,C,L,w);if(S)for(let P=0;P<S.length;P++)p.push(S[P])}const x=new km(r,void 0,p);return Qn(x,i),x})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,mM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Pd:c.length>1?h=new re:c.length===1?h=c[0]:h=new me,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Qn(h,r),r.extensions&&$i(n,h,r),r.matrix!==void 0){const u=new zt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new re;n.name&&(r.name=i.createUniqueName(n.name)),Qn(r,n),n.extensions&&$i(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Sn||d instanceof Ue)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,l=[];Ii[r.path]===Ii.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ii[r.path]){case Ii.weights:c=js;break;case Ii.rotation:c=Zs;break;case Ii.translation:case Ii.scale:c=Ks;break;default:switch(n.itemSize){case 1:c=js;break;case 2:case 3:default:c=Ks;break}break}const h=i.interpolation!==void 0?cM[i.interpolation]:zr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Ii[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=dc(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Zs?lM:lf;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _M(s,t,e){const n=t.attributes,i=new Zn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),a.normalized){const h=dc(Os[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new E,l=new E;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=dc(Os[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new oi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Fu(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=uc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return ne.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ne.workingColorSpace}" not supported.`),Qn(s,t),_M(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?uM(s,t.targets,e):s})}function rr(s=217){let t=s;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function vM(s,t,e){const n=rr(e),i=document.createElement("canvas");i.width=i.height=512;const r=i.getContext("2d");if(r.fillStyle=t,r.fillRect(0,0,512,512),s==="stone"||s==="path"||s==="roof"){const c=s==="roof"||s==="path"?16:9,h=512/c,u=s==="roof"?46:s==="path"?42:100;r.fillStyle=s==="roof"?"#272f32":"#444641",r.fillRect(0,0,512,512);const d=new mt(t);for(let f=-1;f<=c;f++)for(let g=-2;g<512/u+2;g++){const _=g*u+f%2*u/2,m=f*h,p=d.clone().multiplyScalar(.7+n()*.6);r.fillStyle=`#${p.getHexString()}`;const x=s==="path"?2.5:2;r.beginPath(),r.roundRect(_+x,m+x,u-x*2,h-x*2,2+n()*3),r.fill(),r.strokeStyle="#e0d7b61c",r.lineWidth=1,r.beginPath(),r.moveTo(_+x+1,m+h-x),r.lineTo(_+x+1,m+x+1),r.lineTo(_+u-x,m+x+1),r.stroke(),n()>.7&&s!=="roof"&&(r.strokeStyle="#36452e55",r.lineWidth=n()*6,r.beginPath(),r.moveTo(_+3,m+h-4),r.lineTo(_+u*n(),m+h-4),r.stroke())}}else if(s==="wood"){for(let c=0;c<1300;c++){const h=n()*512;r.strokeStyle=n()>.5?"#171d1740":"#a28c611f",r.lineWidth=n()*2,r.beginPath(),r.moveTo(h,0),r.bezierCurveTo(h+9,170,h-7,350,h,512),r.stroke()}for(let c=0;c<512;c+=85)r.strokeStyle="#23251f99",r.lineWidth=3,r.beginPath(),r.moveTo(c,0),r.lineTo(c,512),r.stroke()}const o=r.getImageData(0,0,512,512);for(let c=0;c<o.data.length;c+=4){const h=(n()-.5)*(s==="ground"?38:20);o.data[c]+=h,o.data[c+1]+=h,o.data[c+2]+=h}if(r.putImageData(o,0,0),s==="ground")for(let c=0;c<8e3;c++)r.fillStyle=n()>.6?"#a2ac6533":"#60713e33",r.fillRect(n()*512,n()*512,n()*7+1,n()*3+1);const a=new jr(i);a.colorSpace=Ie,a.wrapS=a.wrapT=Yn,a.anisotropy=8;const l=a.clone();return l.colorSpace=_i,{map:a,bumpMap:l}}function da(){const s=(_,m,p,x=1)=>{const M=vM(_,m,p);return M.map.repeat.setScalar(x),M.bumpMap.repeat.setScalar(x),new ie({...M,roughness:.94,bumpScale:_==="wood"?.035:.085})},t=s("stone","#c0ae88",2),e=s("stone","#e0d1aa",3),n=s("roof","#c8c0b2",4);n.color.set("#a44d3a");const i=s("wood","#7a593c",5),r=s("wood","#4b3929",6),o=s("plaster","#e5d8b8",7),a=s("ground","#a3ac77",8,55),l=s("path","#aa9d83",9,7),c=s("wood","#6a593e",10),h=[4218424,5731908,7440717,8624985,8944198,10192727].map(_=>new ie({color:_,roughness:1})),u=new ie({color:3423542,metalness:.65,roughness:.5}),d=new ie({color:13609557,metalness:.65,roughness:.42}),f=new ie({color:14921044,emissive:16758357,emissiveIntensity:.8,roughness:.4}),g=new ie({color:7698775,roughness:.95,side:Ce});return{stone:t,lightStone:e,roof:n,wood:i,darkWood:r,plaster:o,ground:a,path:l,bark:c,foliage:h,iron:u,gold:d,window:f,canvas:g}}function Er(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"#ffffff"),e.addColorStop(.15,"#ffffffd0"),e.addColorStop(.4,"#ffffff35"),e.addColorStop(1,"#ffffff00"),t.fillStyle=e,t.fillRect(0,0,64,64),new jr(s)}const Vn=(s,t=.68)=>new ie({color:s,roughness:t});class cf{group=new re;villagers=[];rams=[];face=Vn(16773579);nose=Vn(14235960,.26);eyes=Vn(2697770,.2);light=Vn(16777215,.3);constructor(t=!1){t||(this.mole(-7,11,14985797,5867441,!1,.45),this.mole(7,13,15243916,8560228,!1,-.7),this.mole(3,17,13337431,11036503,!0,.25),this.mole(-6,-16,15381606,12010813,!1,0,!0),this.mole(6,-16,15381606,12010813,!1,0,!0)),this.ram(-9,12,10798949,0),this.ram(9,13.5,15185777,2),this.ram(-16,-1,11642067,4)}sphere(t,e,n,i,r=[1,1,1]){const o=new At(new Nn(e,24,16),n);return o.position.set(...i),o.scale.set(...r),o.castShadow=!0,o.receiveShadow=!0,t.add(o),o}mole(t,e,n,i,r,o,a=!1){const l=new re;l.position.set(t,.1,e),l.rotation.y=o,l.scale.setScalar(1.4),this.group.add(l);const c=Vn(n),h=Vn(i),u=Vn(5915704),d=Vn(13937232,.4);this.sphere(l,.42,h,[0,.64,0],[.94,1.12,.7]),this.sphere(l,.49,c,[0,1.43,0],[1.04,.98,.85]),this.sphere(l,.405,this.face,[0,1.35,.23],[1.05,.75,.6]),this.sphere(l,.17,this.nose,[0,1.4,.49],[1,1,.9]);for(const m of[-1,1])this.sphere(l,.065,this.eyes,[m*.19,1.56,.39],[.72,1.2,.48]),this.sphere(l,.016,this.light,[m*.19-.014,1.58,.419]);const f=new At(new Ti(.115,.012,5,20,Math.PI),this.eyes);f.position.set(0,1.24,.46),f.rotation.z=Math.PI,l.add(f);const g=[],_=[];for(const m of[-1,1]){const p=new re;p.position.set(m*.38,.83,0),l.add(p),g.push(p),this.sphere(p,.14,h,[m*.1,-.15,0],[.9,1.4,1]),this.sphere(p,.14,c,[m*.12,-.37,.02]);const x=new re;x.position.set(m*.2,.19,.04),l.add(x),_.push(x),this.sphere(x,.18,u,[0,-.03,.08],[.88,.7,1.35])}if(a){this.sphere(l,.51,d,[0,1.72,-.03],[1,.65,.9]),this.sphere(l,.13,this.nose,[0,2.05,-.04],[.55,1.5,.6]);const m=new At(new Xe(.41,.41,.08,24),d);m.position.y=.6,l.add(m);const p=new At(new Xe(.022,.022,2.1,8),Vn(7164476));p.position.set(.69,1.1,0),l.add(p);const x=new At(new Ei(.09,.28,6),d);x.position.set(.69,2.26,0),l.add(x)}else{for(let p=0;p<3;p++)this.sphere(l,.11,c,[(p-1)*.11,1.91+(.1-Math.abs(p-1)*.06),-.02],[.48,1.3,.7]);const m=new At(new Nn(.035,8,8),d);m.position.set(0,.81,.3),l.add(m)}this.villagers.push({root:l,arms:g,feet:_,phase:this.villagers.length*1.4,route:r}),this.batchDirectChildren(l)}ram(t,e,n,i){const r=new re;r.position.set(t,1.3,e),r.userData={x:t,z:e,phase:i},r.scale.setScalar(1.1),this.group.add(r);const o=Vn(n,.38),a=Vn(6986563,.6);this.sphere(r,.36,o,[0,0,0],[1,.78,.9]);for(const c of[-1,1])this.sphere(r,.14,this.light,[c*.12,.02,.28],[.8,1,.4]),this.sphere(r,.06,this.eyes,[c*.12,.02,.33],[.75,1,.3]),this.sphere(r,.16,a,[c*.22,.45,-.01],[1.5,.44,.7]);this.sphere(r,.05,this.nose,[0,-.14,.31],[1,.65,.4]);const l=new At(new Xe(.024,.03,.27,8),a);l.position.y=.29,l.rotation.z=.15,r.add(l),this.rams.push(r),this.batchDirectChildren(r)}batchDirectChildren(t){const e=new Map,n=[];for(const i of t.children){if(!(i instanceof At)||Array.isArray(i.material))continue;i.updateMatrix();const r=i.geometry.clone().applyMatrix4(i.matrix),o=r.index?r.toNonIndexed():r;o!==r&&r.dispose(),e.has(i.material)||e.set(i.material,[]),e.get(i.material).push(o),n.push(i)}for(const i of n)t.remove(i),i.geometry.dispose();for(const[i,r]of e){const o=Bi(r,!1);if(o){const a=new At(o,i);a.castShadow=a.receiveShadow=!0,t.add(a)}for(const a of r)a.dispose()}}update(t){for(const e of this.villagers){e.route&&(e.root.position.set(Math.sin(t*.055)*6,.1,14+Math.cos(t*.055)*3),e.root.rotation.y=Math.atan2(Math.cos(t*.055)*.33,-Math.sin(t*.055)*.165));const n=e.route?Math.sin(t*3.4):Math.sin(t*.9+e.phase)*.09;e.arms.forEach((i,r)=>i.rotation.x=n*(r===0?1:-1)*.45),e.feet.forEach((i,r)=>i.rotation.x=e.route?n*(r===0?-1:1)*.3:0)}for(const e of this.rams){const{x:n,z:i,phase:r}=e.userData;e.position.set(n+Math.sin(t*.4+r)*.35,1.25+Math.sin(t*1.5+r)*.15,i+Math.cos(t*.3+r)*.25),e.rotation.y=Math.sin(t*.25+r)*.4}}}const xM={oak:"assets/nature/oak.glb",oakDetailed:"assets/nature/oak-detailed.glb",pine:"assets/nature/pine.glb",grass:"assets/nature/meadow-grass.png",fern:"assets/nature/woodland-fern.png"},al=new Map,ll=new Map;let Mr;function hf(s){if(!Mr){const e=document.getElementById("offline-nature");Mr=e?JSON.parse(e.textContent||"{}"):{}}const t=xM[s];return Mr[s]||Mr[t]||Mr["/"+t]||new URL(t,document.baseURI).href}function MM(s){let t=al.get(s);return t||(t=new of().loadAsync(hf(s)).then(e=>{e.scene.updateMatrixWorld(!0);const n=[];return e.scene.traverse(i=>{if(!(i instanceof At))return;const r=Array.isArray(i.material)?i.material:[i.material];for(let o=0;o<r.length;o++){const a=r[o];let l=i.geometry.clone().applyMatrix4(i.matrixWorld);if(r.length>1){const h=l.groups.filter(d=>d.materialIndex===o),u=[];for(const d of h)for(let f=d.start;f<d.start+d.count;f++)u.push(l.index?l.index.getX(f):f);l.setIndex(u),l.clearGroups()}const c=a.alphaTest>0||/foliage|leaf|needle/i.test(a.name);n.push({geometry:l,material:a,foliage:c})}}),n}),al.set(s,t),t.catch(()=>al.delete(s))),t}function ku(s){let t=ll.get(s);return t||(t=new jd().loadAsync(hf(s)).then(e=>(e.colorSpace=Ie,e.anisotropy=4,e)),ll.set(s,t),t.catch(()=>ll.delete(s))),t}function yM(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class fa{group=new re;loadedAssets=[];rand;trees=new Map;grasses=[];ferns=[];flowers=[];wind={value:0};windStrength={value:.16};ownedGeometries=new Set;ownedMaterials=new Set;treeRoot=new re;meadowRoot=new re;disposed=!1;loading;detailedTrees=0;constructor(t=217){this.rand=yM(t),this.group.name="Detailed woodland and meadow vegetation",this.group.add(this.treeRoot,this.meadowRoot)}addTree(t,e,n,i=1,r="oak"){const o=r==="oak-detailed"||r!=="pine"&&i>=1&&Math.hypot(t,n)<45&&this.detailedTrees<8,a=r==="pine"?"pine":o?"oakDetailed":"oak";a==="oakDetailed"&&this.detailedTrees++,this.trees.has(a)||this.trees.set(a,[]);const l=r==="birch"?.65:1;return this.trees.get(a).push({position:new E(t,e,n),rotation:this.rand()*Math.PI*2,scale:new E(i*l*(.9+this.rand()*.2),i*(.94+this.rand()*.12),i*l),color:new mt().setHSL(.24+this.rand()*.035,.13+this.rand()*.09,.67+this.rand()*.09)}),this}addMeadow(t,e,n,i=3,r=35){for(let o=0;o<r;o++){const a=this.rand()*Math.PI*2,l=Math.sqrt(this.rand())*i,c={position:new E(t+Math.cos(a)*l,e,n+Math.sin(a)*l),scale:.45+this.rand()*.65,rotation:this.rand()*Math.PI*2,color:new mt().setHSL(.19+this.rand()*.06,.17,.68+this.rand()*.14)};this.grasses.push(c),o%14===0&&this.ferns.push({...c,position:c.position.clone(),scale:.55+this.rand()*.7}),o%9===0&&this.flowers.push({...c,position:c.position.clone(),scale:.55+this.rand()*.6})}return this}addFlowerPatch(t,e,n,i=1.4,r=32){for(let o=0;o<r;o++){const a=this.rand()*Math.PI*2,l=Math.sqrt(this.rand())*i;this.flowers.push({position:new E(t+Math.cos(a)*l,e,n+Math.sin(a)*l),scale:.65+this.rand()*.7,rotation:this.rand()*Math.PI*2,color:new mt().setHSL(o%3===0?.075:o%3===1?.87:.13,.2,.85+this.rand()*.1)})}return this}finalize(){return this}async loadAssets(){if(!this.disposed)return this.loading?this.loading:(this.loading=this.build(),this.loading)}async build(){if(await Promise.all([...this.trees].map(async([n,i])=>{const r=await MM(n);if(!this.disposed){for(const o of r){const a=o.geometry.clone(),l=o.material.clone();l.roughness=1,l.envMapIntensity=.6,o.foliage&&(l.side=Ce,l.alphaTest=.4,l.transparent=!1,l.alphaToCoverage=!0,l.emissive.set(2372884),l.emissiveIntensity=.045,this.animateMaterial(l,.025)),this.ownedGeometries.add(a),this.ownedMaterials.add(l);const c=new vi(a,l,i.length),h=new me;i.forEach((u,d)=>{h.position.copy(u.position),h.rotation.set(0,u.rotation,0),h.scale.copy(u.scale),h.updateMatrix(),c.setMatrixAt(d,h.matrix),c.setColorAt(d,o.foliage?u.color:new mt(15130058))}),c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0),c.name=`${n} ${o.foliage?"leaf sprays":"branching trunks"}`,c.castShadow=c.receiveShadow=!0,o.foliage&&this.cutoutShadow(c,l),c.computeBoundingBox(),c.computeBoundingSphere(),this.treeRoot.add(c)}this.loadedAssets.push(n)}})),this.disposed)return;const[t,e]=await Promise.all([ku("grass"),ku("fern")]);if(!this.disposed){if(this.plantBatch(this.grassGeometry(),t,this.grasses,"Meadow grass clumps",.07),this.plantBatch(this.fernGeometry(),e,this.ferns,"Woodland fern fronds",.035),this.flowers.length){const n=this.flowerGeometry(),i=new ie({vertexColors:!0,roughness:.92,side:Ce});this.instances(n,i,this.flowers,"Meadow daisies and wildflowers")}this.partitionLargeBatches(),this.loadedAssets.push("meadow")}}partitionLargeBatches(){const t=new zt,e=new mt;for(const n of[this.treeRoot,this.meadowRoot])for(const i of[...n.children]){if(!(i instanceof vi)||!i.boundingSphere||i.boundingSphere.radius<85)continue;const r=new Map;for(let o=0;o<i.count;o++){i.getMatrixAt(o,t);const a=t.elements,l=`${Math.floor(a[12]/80)},${Math.floor(a[14]/80)}`;r.has(l)||r.set(l,[]),r.get(l).push(o)}if(!(r.size<2)){for(const[o,a]of r){const l=new vi(i.geometry,i.material,a.length);l.name=`${i.name} · cell ${o}`,l.castShadow=i.castShadow,l.receiveShadow=i.receiveShadow,l.customDepthMaterial=i.customDepthMaterial,l.customDistanceMaterial=i.customDistanceMaterial,a.forEach((c,h)=>{i.getMatrixAt(c,t),l.setMatrixAt(h,t),i.instanceColor&&(i.getColorAt(c,e),l.setColorAt(h,e))}),l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),l.computeBoundingBox(),l.computeBoundingSphere(),n.add(l)}i.removeFromParent(),i.dispose()}}}instances(t,e,n,i){this.ownedGeometries.add(t),this.ownedMaterials.add(e);const r=new vi(t,e,n.length),o=new me;return n.forEach((a,l)=>{o.position.copy(a.position),o.rotation.set(0,a.rotation,0),o.scale.setScalar(a.scale),o.updateMatrix(),r.setMatrixAt(l,o.matrix),r.setColorAt(l,a.color)}),r.name=i,r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r.castShadow=r.receiveShadow=!0,r.computeBoundingBox(),r.computeBoundingSphere(),this.meadowRoot.add(r),r}plantBatch(t,e,n,i,r){if(!n.length){t.dispose();return}const o=new ie({map:e,alphaTest:.45,alphaToCoverage:!0,side:Ce,roughness:1,emissive:1581065,emissiveIntensity:.04});this.animateMaterial(o,r);const a=this.instances(t,o,n,i);this.cutoutShadow(a,o)}cutoutShadow(t,e){const n=new Gd({map:e.map,alphaTest:e.alphaTest,depthPacking:md,side:Ce}),i=new Wd({map:e.map,alphaTest:e.alphaTest,side:Ce});t.customDepthMaterial=n,t.customDistanceMaterial=i,this.ownedMaterials.add(n),this.ownedMaterials.add(i)}animateMaterial(t,e){t.onBeforeCompile=n=>{n.uniforms.woodlandTime=this.wind,n.uniforms.woodlandStrength=this.windStrength,n.vertexShader=`uniform float woodlandTime; uniform float woodlandStrength;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`
        #include <begin_vertex>
        #ifdef USE_INSTANCING
          float phase = instanceMatrix[3].x * .31 + instanceMatrix[3].z * .23;
        #else
          float phase = 0.;
        #endif
        float sway = sin(woodlandTime * 1.3 + phase + position.y * .8);
        transformed.x += sway * ${e.toFixed(3)} * woodlandStrength * max(0., position.y);
        transformed.z += cos(woodlandTime * .9 + phase) * ${(.45*e).toFixed(3)} * woodlandStrength * max(0., position.y);
      `)},t.customProgramCacheKey=()=>`woodland-wind-${e}`}grassGeometry(){const t=[];for(let n=0;n<3;n++){const i=new qe(.85,.78,1,2);i.translate(0,.39,0);const r=i.attributes.position;for(let o=0;o<r.count;o++)r.setZ(o,r.getZ(o)+r.getY(o)**2*.13);i.rotateY(n*Math.PI/3),i.computeVertexNormals(),t.push(i)}const e=Bi(t);return t.forEach(n=>n.dispose()),e}fernGeometry(){const t=[];for(let n=0;n<6;n++){const i=new qe(.46,1,1,3);i.translate(0,.5,0);const r=i.attributes.position;for(let o=0;o<r.count;o++){const a=r.getY(o);r.setZ(o,a**1.3*.8),r.setY(o,Math.sin(a*1.7)*.68)}i.rotateY(n*Math.PI/3),i.computeVertexNormals(),t.push(i)}const e=Bi(t);return t.forEach(n=>n.dispose()),e}flowerGeometry(){const t=[],e=(a,l)=>{const c=new mt(l),h=new Float32Array(a.attributes.position.count*3);for(let u=0;u<h.length;u+=3)h[u]=c.r,h[u+1]=c.g,h[u+2]=c.b;a.setAttribute("color",new Oe(h,3)),t.push(a)},n=new Xe(.012,.016,.62,3,1);n.translate(0,.31,0),e(n,5533740);for(let a=0;a<5;a++){const l=new Vi(.105,5);l.scale(.6,1,1),l.rotateX(-Math.PI/2+.18),l.translate(0,.64,.09),l.rotateY(a*Math.PI*2/5),e(l,16775911)}const i=new Ei(.052,.045,6);i.translate(0,.658,0),e(i,13935932);for(const a of[-1,1]){const l=new Vi(.14,4);l.scale(.38,1,1),l.rotateX(-Math.PI/3),l.rotateZ(a*.8),l.translate(a*.075,.3+a*.06,0),e(l,5405995)}const r=t.map(a=>a.index?a.toNonIndexed():a),o=Bi(r);return t.forEach(a=>a.dispose()),r.forEach(a=>a.dispose()),o}update(t,e=.7){this.wind.value=t,this.windStrength.value=e}dispose(){this.disposed||(this.disposed=!0,this.group.removeFromParent(),this.group.traverse(t=>{t instanceof vi&&t.dispose()}),this.treeRoot.clear(),this.meadowRoot.clear(),this.group.clear(),this.ownedGeometries.forEach(t=>t.dispose()),this.ownedMaterials.forEach(t=>t.dispose()),this.ownedGeometries.clear(),this.ownedMaterials.clear())}}const Bu=[50,50],zu=[12,9];function SM([s,,t]){return[Bu[0]+s/zu[0],Bu[1]+t/zu[1]]}const wM=new Set(["rainbow-falls","strength-spring","berry-passage","moraya-rink","moraya-summit","ram-sports","knight-training","race-track"]),ae=(s,t,e)=>({id:s,label:t,classicMapId:e,status:wM.has(s)?"outdoor-prototype":"not-built"}),An=s=>({...s,label:s.name,mapPosition:SM(s.worldPosition)}),vn=[An({id:"castle",name:"摩尔城堡",subtitle:"红瓦尖塔 · 王冠大门",biome:"town",color:"#c58b65",description:"以经典城堡轮廓为参考的前庭原型。现有花园、喷泉与石桥是本项目的空间安排；城堡室内尚未建成。",worldPosition:[0,0,0],landmarks:["红瓦尖塔","金色钟面","王冠入口"],status:"courtyard-prototype",evidence:"name-listed",sublocations:[ae("castle-hall","城堡大厅",15),ae("castle-study","城堡书房",32),ae("castle-underground","城堡地下",14)]}),An({id:"taotao-street",name:"淘淘乐街",subtitle:"商店街 · 橱窗与招牌",biome:"town",color:"#cc966f",description:"经典页游商店街主题的户外重构区域。店铺外形与街巷布局仍待逐项核对，室内商店尚未建成。",worldPosition:[-180,0,0],landmarks:["商店橱窗","街边招牌"],status:"under-construction",evidence:"name-listed",sublocations:[ae("item-shop","道具店",19),ae("clothes-shop","服装店",20),ae("pet-shop","宠物店",21)]}),An({id:"love-church",name:"爱心教堂",subtitle:"爱心街区 · 温暖的钟声",biome:"town",color:"#d1b29c",description:"以爱心教堂及公共服务地点为主题的重构区域。关联地点采用项目导览分组，不能据此判断原版街区的精确位置。",worldPosition:[180,0,0],landmarks:["教堂轮廓","花园步道"],status:"under-construction",evidence:"name-listed",sublocations:[ae("church-interior","爱心教堂内",18),ae("police-station","摩尔庄园警署",44),ae("guide-club","爱心向导社",46),ae("care-room","爱心救治室",70)]}),An({id:"happy-farm",name:"开心农场",subtitle:"田垄 · 农场发明屋",biome:"farmland",color:"#c5ac68",description:"以耕地、农场工具与发明屋为主题的户外原型。种植玩法及屋内场景尚未建成。",worldPosition:[-180,0,180],landmarks:["田垄","农场工具"],status:"under-construction",evidence:"name-listed",sublocations:[ae("invention-house","农场发明屋",27),ae("mason-house","梅森小屋",56)]}),An({id:"sunshine-ranch",name:"阳光牧场",subtitle:"草坡 · 木栅栏",biome:"meadow",color:"#b0bb78",description:"以开阔草场和木栅栏为主题的牧场原型。动物养成及阳光草舍室内尚未建成。",worldPosition:[0,0,180],landmarks:["草场","木栅栏"],status:"under-construction",evidence:"name-listed",sublocations:[ae("sunshine-cottage","阳光草舍",79)]}),An({id:"berry-jungle",name:"浆果丛林",subtitle:"林间浆果 · 瀑布水声",biome:"forest",color:"#849e7d",description:"以浆果、浓密植被与林间水体为主题的原型。已补入相连的秘道、瀑布与泉水初版，原版布局与美术仍待核对。",worldPosition:[180,0,180],landmarks:["浆果灌木","林间水体"],status:"under-construction",evidence:"name-listed",sublocations:[ae("berry-passage","浆果秘道",40),ae("rainbow-falls","彩虹瀑布",42),ae("strength-spring","力量之泉",43)]}),An({id:"moraya-mountain",name:"摩尔拉雅雪山",subtitle:"山脚 · 冰场 · 雪峰",biome:"snow",color:"#b5ced2",description:"把山脚、滑冰场与山顶归入同一导览区域的雪山原型。各层之间的原版路线及季节差异尚待核对。",worldPosition:[0,0,-180],landmarks:["雪松","雪峰","冰面"],status:"under-construction",evidence:"name-listed",sublocations:[ae("moraya-foot","摩尔拉雅山脚",4),ae("moraya-rink","摩尔拉雅滑冰场",5),ae("moraya-summit","摩尔拉雅山顶",37),ae("hunter-cabin","猎人小屋",34)]}),An({id:"mystery-lake",name:"神秘湖",subtitle:"湖面 · 木码头",biome:"lake",color:"#83b1b1",description:"以湖水、岸边植被和码头为主题的原型。湖区的版本差异、钓鱼玩法与子地图尚未完成。",worldPosition:[360,0,180],landmarks:["湖面","木码头"],status:"under-construction",evidence:"name-listed",sublocations:[ae("mystery-dock","神秘湖码头",176)]}),An({id:"ram-academy",name:"拉姆学院",subtitle:"校园 · 拉姆课堂",biome:"town",color:"#c6b1cc",description:"以拉姆校园为主题的户外原型。运动场已连接到校园东侧；课程、课堂和教导处仍待制作。",worldPosition:[180,0,-180],landmarks:["校园入口","拉姆主题庭园"],status:"under-construction",evidence:"name-listed",sublocations:[ae("ram-classroom","拉姆课堂",52),ae("academy-office","学院教导处",53),ae("ram-sports","拉姆运动场",68)]}),An({id:"outpost",name:"前哨站",subtitle:"骑士主题 · 边境瞭望",biome:"meadow",color:"#a3a284",description:"以前哨与骑士设施为主题的户外原型。要塞、训练玩法和秘密基地尚未建成。",worldPosition:[-180,0,-180],landmarks:["瞭望设施","骑士旗帜"],status:"under-construction",evidence:"name-listed",sublocations:[ae("knight-training","骑士训练场",62),ae("fortress-top","骑士要塞塔顶",63),ae("knight-base","骑士秘密基地",64)]}),An({id:"black-forest",name:"黑森林",subtitle:"幽深林地 · 年代待核对",biome:"forest",color:"#667d78",description:"经典故事中的黑森林主题预留区域。当前查看的地图名表未确认该名称及子地图，不能认定为所有年代常驻可达区域。",worldPosition:[-360,0,-180],landmarks:["幽深树林","林间雾气"],status:"under-construction",evidence:"version-uncertain",sublocations:[]}),An({id:"amusement-park",name:"游乐场",subtitle:"西部与东部 · 游戏时光",biome:"town",color:"#ccad82",description:"西部与东部游乐场的合并导览入口。该分区是项目组织方式，原版分图、小游戏和设施尚未分别建成。",worldPosition:[-360,0,0],landmarks:["游乐设施","彩色旗帜"],status:"under-construction",evidence:"name-listed",sublocations:[ae("west-playground","西部游乐场",6),ae("east-playground","东部游乐场",7),ae("game-cabin","游戏小屋",22),ae("race-track","摩摩赛车场",36)]})],si=Object.fromEntries(vn.map(s=>[s.id,s]));function Vu(s,t=[0,0,0]){const e=si[s].worldPosition;return[e[0]+t[0],e[1]+t[1],e[2]+t[2]]}const Hi=[{id:"rainbow-falls",name:"彩虹瀑布",region:"berry-jungle",position:[242,264],classicMapId:42,kind:"falls"},{id:"strength-spring",name:"力量之泉",region:"berry-jungle",position:[119,267],classicMapId:43,kind:"spring"},{id:"berry-passage",name:"浆果秘道",region:"berry-jungle",position:[127,137],classicMapId:40,kind:"passage"},{id:"moraya-rink",name:"摩尔拉雅滑冰场",region:"moraya-mountain",position:[-57,-187],classicMapId:5,kind:"rink"},{id:"moraya-summit",name:"摩尔拉雅山顶",region:"moraya-mountain",position:[5,-288],classicMapId:37,kind:"summit"},{id:"ram-sports",name:"拉姆运动场",region:"ram-academy",position:[250,-200],classicMapId:68,kind:"sports"},{id:"knight-training",name:"骑士训练场",region:"outpost",position:[-244,-237],classicMapId:62,kind:"training"},{id:"race-track",name:"摩摩赛车场",region:"amusement-park",position:[-425,101],classicMapId:36,kind:"race"}],ea=Object.fromEntries(Hi.map(s=>[s.id,s])),pa=[{site:"rainbow-falls",points:[[180,210],[213,230],[224,248],[226,278],[242,279]]},{site:"strength-spring",points:[[180,210],[149,235],[140,249],[139,281],[119,280]]},{site:"berry-passage",points:[[180,210],[142,213],[118,180],[120,151],[127,150]]},{site:"moraya-rink",points:[[0,-150],[-38,-151],[-57,-163],[-57,-172]]},{site:"moraya-summit",points:[[0,-150],[35,-185],[62,-223],[56,-248],[29,-267],[5,-288]]},{site:"ram-sports",points:[[180,-150],[221,-148],[250,-168],[250,-176]]},{site:"knight-training",points:[[-180,-150],[-222,-161],[-244,-191],[-244,-218]]},{site:"race-track",points:[[-360,30],[-390,54],[-425,63],[-425,81]]}];function uf(s){const t=pa.find(e=>e.site===s.id);return[...t.points[t.points.length-1]]}const Te={minX:-540,maxX:540,minZ:-430,maxZ:390},Yr=[{a:"castle",b:"taotao-street",points:[[-10,11],[-45,11],[-91,19],[-135,30],[-180,30]]},{a:"castle",b:"love-church",points:[[10,11],[45,11],[92,21],[135,30],[180,30]]},{a:"castle",b:"sunshine-ranch",points:[[0,36],[0,63],[-9,108],[0,148],[0,210]]},{a:"castle",b:"moraya-mountain",points:[[10,11],[45,11],[62,-46],[47,-86],[0,-125],[0,-150]]},{a:"taotao-street",b:"amusement-park",points:[[-180,30],[-224,30],[-269,34],[-314,30],[-360,30]]},{a:"taotao-street",b:"happy-farm",points:[[-180,30],[-180,76],[-171,118],[-180,147],[-180,210]]},{a:"taotao-street",b:"outpost",points:[[-180,30],[-218,30],[-226,-37],[-220,-94],[-180,-150]]},{a:"love-church",b:"ram-academy",points:[[180,30],[222,30],[231,-31],[218,-92],[180,-150]]},{a:"love-church",b:"berry-jungle",points:[[180,30],[180,82],[170,126],[180,165],[180,210]]},{a:"sunshine-ranch",b:"happy-farm",points:[[0,210],[-45,210],[-91,224],[-135,210],[-180,210]]},{a:"sunshine-ranch",b:"berry-jungle",points:[[0,210],[45,210],[91,220],[135,210],[180,210]]},{a:"berry-jungle",b:"mystery-lake",points:[[180,210],[220,220],[267,225],[315,210],[360,210]]},{a:"moraya-mountain",b:"outpost",points:[[0,-150],[-46,-150],[-90,-138],[-136,-150],[-180,-150]]},{a:"moraya-mountain",b:"ram-academy",points:[[0,-150],[47,-145],[90,-132],[136,-150],[180,-150]]},{a:"outpost",b:"black-forest",points:[[-180,-150],[-228,-150],[-271,-140],[-315,-150],[-360,-150]]},{a:"black-forest",b:"amusement-park",points:[[-360,-150],[-401,-126],[-414,-72],[-400,-14],[-360,30]]}],rn=(s,t,e)=>{const n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)};function TM(s,t,e,n){const i=n[0]-e[0],r=n[1]-e[1],o=Math.max(0,Math.min(1,((s-e[0])*i+(t-e[1])*r)/(i*i+r*r||1)));return Math.hypot(s-e[0]-i*o,t-e[1]-r*o)}function xi(s,t){let e=1/0;for(const n of[...Yr,...pa])for(let i=1;i<n.points.length;i++)e=Math.min(e,TM(s,t,n.points[i-1],n.points[i]));return e}function Nr(s,t){return vn.reduce((e,n)=>Math.hypot(s-e.worldPosition[0],t-e.worldPosition[2])<Math.hypot(s-n.worldPosition[0],t-n.worldPosition[2])?e:n)}function fc(s,t){t+=180;const e=(o,a,l,c,h)=>h*Math.exp(-(((s-o)/l)**2+((t-a)/c)**2)),n=Math.max(e(-43,-88,26,31,47),e(1,-109,31,32,59),e(51,-90,28,29,48)),i=1-Math.abs(Math.sin(s*.113+Math.sin(t*.067)*1.9)*Math.cos(t*.097+Math.sin(s*.042))),r=1-Math.abs(Math.sin(s*.29+t*.17+Math.sin(t*.11)));return rn(0,23,-t-47)*(1-rn(81,110,Math.abs(s)))*(1-rn(143,172,-t))*Math.max(0,n+(i*6.5+r*2.7)*Math.min(1,n/18)-3)}function Ar(s,t){let e=1/0;for(const o of vn)e=Math.min(e,Math.max(Math.abs(s-o.worldPosition[0]),Math.abs(t-o.worldPosition[2])));for(const o of Hi)o.kind!=="summit"&&(e=Math.min(e,Math.max(Math.abs(s-o.position[0]),Math.abs(t-o.position[1]))));let i=-.13+(3+Math.sin(s*.028)*Math.cos(t*.023)*3+Math.sin(s*.063+t*.039)*1.4)*rn(48,88,e)*rn(5,13,xi(s,t))+fc(s,t);Math.abs(s)<77&&t>19&&t<31&&(i-=1.4*(1-rn(68,77,Math.abs(s)))*rn(19,21,t)*(1-rn(29,31,t)));const r=((s-377)/27)**2+((t-165)/22)**2;return r<1.05&&(i-=1.7*(1-rn(.84,1.05,r))),i}const na=(s,t)=>[90+s*.145,75+t*.145];function Re(s,t){const e=Te.minX+Math.min(8,Math.max(0,Math.floor((s-Te.minX)/120)))*120,n=Te.minZ+Math.min(6,Math.max(0,Math.floor((t-Te.minZ)/120)))*120,i=Math.min(120,Te.maxX-e),r=Math.min(120,Te.maxZ-n),o=i/Math.ceil(i/3),a=r/Math.ceil(r/3),l=Math.max(0,Math.min(Math.ceil(i/3)-1,Math.floor((s-e)/o))),c=Math.max(0,Math.min(Math.ceil(r/3)-1,Math.floor((t-n)/a))),h=e+l*o,u=n+c*a,d=Math.max(0,Math.min(1,(s-h)/o)),f=Math.max(0,Math.min(1,(t-u)/a)),g=Ar(h,u),_=Ar(h+o,u),m=Ar(h,u+a),p=Ar(h+o,u+a);return d+f<=1?g+(_-g)*d+(m-g)*f:p+(m-p)*(1-d)+(_-p)*(1-f)}const Js=[{name:"城堡前庭",description:"红瓦、金色钟面，还有熟悉的摩尔身影。",position:[17,13,38],target:[0,7,-15],walk:[0,13]},{name:"摩尔城堡",description:"沿着中央步道，走近红色尖塔与王冠大门。",position:[23,12,-6],target:[0,9,-29],walk:[0,-13]},{name:"花园步道",description:"修剪整齐的绿篱之间，拉姆正轻轻浮动。",position:[28,9,17],target:[11,1.5,2],walk:[15,8]},{name:"石桥入口",description:"跨过溪水，前庭与城堡在眼前展开。",position:[-16,8,39],target:[0,4,3],walk:[0,27]}];function bM(s,t){const e=Math.max(0,Math.max(Math.abs(s)-34,Math.abs(t)-42)),n=Math.max(0,Math.max(Math.abs(s)-45,Math.abs(t)-55));return-.08+Math.sin(s*.11)*Math.cos(t*.13)*Math.min(.12,e*.03)+Math.min(5,e*.14)+Math.sin(s*.065+1)*Math.cos(t*.07)*Math.min(9,n*.23)}class EM{constructor(t=bM,e=!1){this.surfaceHeight=t,this.connected=e,this.group.add(this.staticRoot,this.assetRoot,this.vegetation.group),this.foliageMaterial=this.materials.foliage[0],e||this.terrain(),this.courtyard(),this.gardens(),this.nature(),this.details(),this.flushBatch(),this.group.add(this.life.group),this.water=this.createWater(),this.group.add(this.water),this.fireflies=this.particles(190,new Ui({map:Er(),color:14804890,size:.22,transparent:!0,opacity:.8,blending:Or,depthWrite:!1}),55,5,5);for(let i=0;i<190;i++)this.fireflySeeds.push(this.rand()*100);this.rain=this.createRain(),this.group.add(this.rain),this.snow=this.particles(1800,new Ui({map:Er(),color:15199982,size:.12,transparent:!0,opacity:.7,depthWrite:!1}),110,55,-3),this.smoke=this.particles(90,new Ui({map:Er(),color:9870219,size:2.7,transparent:!0,opacity:.09,depthWrite:!1}),3,10,0),this.smoke.visible=!1;const n=this.smoke.geometry.attributes.position;for(let i=0;i<n.count;i++)n.setXYZ(i,18+this.rand()*2,8+this.rand()*10,-4+this.rand()*2);this.fountainDrops=this.particles(240,new Ui({color:13164247,size:.065,transparent:!0,opacity:.75,depthWrite:!1}),1,1,0),this.leafParticles=this.particles(90,new Ui({color:12887900,size:.09,transparent:!0,opacity:.65}),80,20,0),this.fireflies.renderOrder=3}group=new re;materials=da();collisions=[];lamps=[];staticRoot=new re;assetRoot=new re;fireflies;rain;snow;smoke;fountainDrops;water;flags=[];mills=[];birds=[];externalAssets=[];life=new cf;vegetation=new fa(217);courtyardVisible=!0;rand=rr(217);fireflySeeds=[];leafParticles;shadowed=new Set;foliageMaterial;lanternSprites=[];flowerMaterials=[14195592,15390124,12749985].map(t=>new ie({color:t,roughness:.9}));batch=new Map;replacements=new Map;mesh(t,e,n,i,r){const o=new At(t,e);if(o.position.set(...n),i&&o.rotation.set(...i),o.castShadow=!0,o.receiveShadow=!0,r)r.add(o);else{o.updateMatrix();const a=t.clone().applyMatrix4(o.matrix);this.batch.has(e)||this.batch.set(e,[]),this.batch.get(e).push(a),t.dispose()}return o}box(t,e,n,i,r,o,a){return this.mesh(new Qe(t,e,n),i,r,a,o)}cylinder(t,e,n,i,r,o=14,a){return this.mesh(new Xe(t,e,n,o),i,r,void 0,a)}beam(t,e,n,i,r){const o=new Qe(n,t.distanceTo(e),n),a=new At(o,i);if(a.position.copy(t).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new E(0,1,0),e.clone().sub(t).normalize()),a.castShadow=a.receiveShadow=!0,r)r.add(a);else{a.updateMatrix();const l=o.applyMatrix4(a.matrix);this.batch.has(i)||this.batch.set(i,[]),this.batch.get(i).push(l)}return a}flushBatch(){for(const[t,e]of this.batch){if(!e.length)continue;const n=e.map(r=>r.index?r.toNonIndexed():r),i=Bi(n,!1);if(i){this.projectSurfaceUVs(i,t);const r=new At(i,t);r.castShadow=t!==this.materials.ground,r.receiveShadow=!0,this.staticRoot.add(r)}for(const r of e)r.dispose();for(const r of n)r.dispose()}this.batch.clear()}projectSurfaceUVs(t,e){if(e!==this.materials.path&&e!==this.materials.ground)return;const n=t.attributes.position,i=t.attributes.uv,r=e===this.materials.path?1/7:1/340;for(let o=0;o<n.count;o++)i.setXY(o,n.getX(o)*r,n.getZ(o)*r);i.needsUpdate=!0}collide(t,e,n,i){this.collisions.push({x:t,z:e,w:n,d:i})}terrain(){const t=new qe(340,340,110,110);t.rotateX(-Math.PI/2);const e=t.attributes.position,n=[],i=new mt;for(let l=0;l<e.count;l++){const c=e.getX(l),h=e.getZ(l);e.setY(l,this.surfaceHeight(c,h));const u=(Math.sin(c*.075+Math.sin(h*.1))*Math.cos(h*.06)+1)*.5;i.setHex(7440466).lerp(new mt(11644531),u*.42),n.push(i.r,i.g,i.b)}t.setAttribute("color",new Xt(n,3));const r=this.materials.ground.clone();r.vertexColors=!0,t.computeVertexNormals();const o=new At(t,r);o.receiveShadow=!0,this.staticRoot.add(o);const a=new ie({color:4348753,roughness:1});for(let l=0;l<18;l++){const c=l/18*Math.PI*2,h=174+this.rand()*16,u=12+this.rand()*22,d=new Nn(1,24,16);d.scale(37+this.rand()*23,u,35+this.rand()*25),this.mesh(d,a,[Math.cos(c)*h,-5,Math.sin(c)*h])}}courtyard(){const{path:t,lightStone:e,stone:n,gold:i}=this.materials;this.cylinder(10.8,10.8,.16,t,[0,0,0],64),this.box(6,.1,75,t,[0,.04,-1]),this.box(51,.1,4.5,t,[0,.04,-.3]),this.box(30,.08,3,t,[-10,.03,11],void 0,[0,-.25,0]);const r=new Ti(9.8,.12,5,90);this.mesh(r,e,[0,.13,0],[Math.PI/2,0,0]);const o=new re;this.cylinder(3.4,3.6,.18,e,[0,.17,0],40,o),this.mesh(new Xe(3,3.25,.42,40,1,!0),n,[0,.4,0],void 0,o),this.cylinder(3.2,3.2,.1,n,[0,.24,0],40,o),this.mesh(new Ti(3.1,.15,6,60),e,[0,.65,0],[Math.PI/2,0,0],o),this.cylinder(.43,.68,2.2,n,[0,1.5,0],14,o),this.cylinder(1.45,.25,.45,e,[0,2.6,0],30,o),this.mesh(new Ti(1.45,.1,6,40),e,[0,2.83,0],[Math.PI/2,0,0],o),this.cylinder(.16,.27,.75,n,[0,3,0],12,o),this.mesh(new Nn(.23,12,8),i,[0,3.5,0],void 0,o),o.name="fountain",this.staticRoot.add(o),this.replacements.set("fountain",o),this.collide(0,0,6.7,6.7);const a=new an({color:3768185,roughness:.13,metalness:.18,transparent:!0,opacity:.88,clearcoat:1,clearcoatRoughness:.1}),l=new At(new Vi(2.95,48),a);l.rotation.x=-Math.PI/2,l.position.y=.59,o.add(l);const c=new At(new Vi(1.25,32),a);c.rotation.x=-Math.PI/2,c.position.y=2.84,o.add(c);const h=new an({color:9161163,roughness:.08,transparent:!0,opacity:.4,metalness:.08});for(let u=0;u<12;u++){const d=u/12*Math.PI*2,f=[];for(let g=0;g<=12;g++){const _=g/12,m=.2+_*2.05;f.push(new E(Math.cos(d)*m,2.97+_*1.2-_*_*3.58,Math.sin(d)*m))}this.mesh(new zc(new Id(f),16,.022,4,!1),h,[0,0,0],void 0,o)}for(let u=0;u<40;u++){const d=u/40*Math.PI*2;this.box(.28,.12,.35,e,[Math.sin(d)*10.5,.12,Math.cos(d)*10.5],void 0,[0,d,0])}for(const u of[-1,1])for(const d of[-1,1])this.flowerBed(u*8.5,d*8.5)}archedWindow(t,e,n,i,r=.7,o=1.4){const{darkWood:a,lightStone:l,window:c,iron:h}=this.materials;this.box(r+.25,o+.25,.18,l,[t,e,n],i),this.box(r,o,.2,a,[t,e,n+.04],i),this.box(r-.12,o-.12,.08,c,[t,e,n+.16],i),this.box(.045,o,.09,h,[t,e,n+.23],i),this.box(r,.05,.09,h,[t,e,n+.23],i),this.box(r+.4,.12,.42,l,[t,e-o/2-.12,n+.14],i)}castle(){const{stone:t,lightStone:e,roof:n,darkWood:i,gold:r}=this.materials,o=new re;o.position.set(0,0,-30),this.staticRoot.add(o),this.replacements.set("castle",o),this.box(22,8,9,t,[0,4,0],o),this.box(22.4,.35,9.4,e,[0,.3,0],o),this.box(22.4,.35,9.4,e,[0,7.9,0],o);for(let a=-10;a<=10;a+=2)this.box(1.1,1.2,1,t,[a,8.55,4.15],o),this.box(1.1,1.2,1,t,[a,8.55,-4.15],o);for(const a of[-10.5,10.5]){this.cylinder(2.6,2.9,12,t,[a,6,1],20,o);for(const l of[1.5,8.5,11.7])this.cylinder(2.78,2.78,.3,e,[a,l,1],20,o);this.cylinder(.05,3.4,6.1,n,[a,15,1],20,o),this.cylinder(.08,.08,1.8,r,[a,18.8,1],8,o),this.flag(a,18.4,1,o),this.archedWindow(a,8.8,3.55,o,.65,1.7),this.archedWindow(a,5.5,3.55,o,.55,1.3)}this.box(8.5,5.5,7,t,[0,10.4,-1.5],o),this.gableRoof(9.6,8.4,4.5,13.1,o,0,-1.5),this.box(3.8,5.1,.4,i,[0,2.55,4.72],o);for(let a=0;a<14;a++){const l=a/13*Math.PI,c=Math.cos(l)*2.2,h=3.5+Math.sin(l)*2.2;this.box(.5,.63,.9,e,[c,h,4.8],o,[0,0,l-Math.PI/2])}for(const a of[-2.2,2.2])this.box(.5,3.7,.85,e,[a,1.85,4.8],o);this.box(.1,4.5,.2,r,[0,2.2,5],o);for(const a of[-7,-4.8,4.8,7])this.archedWindow(a,5.2,4.6,o,.8,1.6);for(const a of[-2.3,0,2.3])this.archedWindow(a,10.8,2.1,o,.65,1.8);for(const a of[-22,22]){this.box(1.1,3.2,22,t,[a,1.6,-27]),this.box(1.4,.3,22.5,e,[a,3.2,-27]);for(let l=-36;l<-15;l+=2)this.box(1.4,.7,.9,t,[a,3.7,l]);this.collide(a,-27,1.5,22)}this.collide(0,-30,27,11);for(const a of[-6,6])this.lantern(a,2.8,-24,!0);for(let a=0;a<4;a++)this.box(6.5,.15,1,e,[0,.06+a*.08,-23+a*.8])}gableRoof(t,e,n,i,r,o=0,a=0){const l=new aa;l.moveTo(-t/2,0),l.lineTo(0,n),l.lineTo(t/2,0),l.closePath();const c=new Kr(l,{depth:e,bevelEnabled:!1});c.translate(o,i,a-e/2),this.mesh(c,this.materials.roof,[0,0,0],void 0,r);const h=E;for(const u of[a-e/2-.03,a+e/2+.03])this.beam(new h(o-t/2,i,u),new h(o,i+n,u),.18,this.materials.darkWood,r),this.beam(new h(o+t/2,i,u),new h(o,i+n,u),.18,this.materials.darkWood,r);this.box(.25,.23,e+.3,this.materials.darkWood,[o,i+n,a],r)}house(t,e,n,i,r,o,a){const{stone:l,plaster:c,darkWood:h,wood:u,roof:d,lightStone:f}=this.materials,g=new re;g.position.set(t,0,e),g.rotation.y=o,this.staticRoot.add(g),a&&this.replacements.set(a,g),this.box(n,1.2,i,l,[0,.6,0],g),this.box(n,r-1.2,i,c,[0,1.2+(r-1.2)/2,0],g),this.gableRoof(n+1.1,i+1,r*.57,r,g);for(const m of[-n/2,0,n/2])this.box(.2,r,i+.1,h,[m,r/2,0],g);for(const m of[1.15,r*.52,r-.1])this.box(n+.1,.2,i+.12,h,[0,m,0],g);const _=E;for(const m of[-n/2,0])this.beam(new _(m,r*.53,i/2+.08),new _(m+n/2,r-.15,i/2+.08),.13,h,g);this.box(1.35,2.1,.18,u,[0,1.05,i/2+.06],g),this.box(1.65,.14,.4,f,[0,2.14,i/2+.07],g);for(const m of[-n*.3,n*.3])this.archedWindow(m,r*.72,i/2+.06,g,.75,1.1),n>6&&this.archedWindow(m,1.85,i/2+.06,g,.7,1);return this.box(.8,r*.7,.8,l,[n*.3,r+.4,-.5],g),this.box(1,.2,1,f,[n*.3,r*1.35+.5,-.5],g),this.collide(t,e,Math.abs(Math.cos(o))*n+Math.abs(Math.sin(o))*i,Math.abs(Math.cos(o))*i+Math.abs(Math.sin(o))*n),g}village(){const t=this.house(18,-3,8,7,5.7,-.18,"tavern");this.box(9,.15,2.5,this.materials.roof,[0,2.8,4.5],t,[-.15,0,0]);for(const e of[-3.8,3.8])this.box(.15,2.9,.15,this.materials.darkWood,[e,1.45,5.2],t);this.box(1.2,.8,.12,this.materials.wood,[-4.6,3.7,3.7],t,[0,0,-.06]),this.box(1.3,.09,.12,this.materials.darkWood,[-4.4,4.3,3.7],t),this.lantern(14.2,2.7,1.8,!0),this.house(-18,-5,7,7,5.2,.12,"cottage"),this.house(-20,12,6.2,5.8,4.2,.5),this.house(20,14,6,5,4.5,-.5),this.house(-16,-17,5.6,6,4.4,.08),this.house(16,-17,5,5,4.6,-.25),this.house(29,-10,5,5,3.8,-.4);for(const e of[-11,11]){this.box(3.6,.15,1.7,this.materials.wood,[e,1.1,6]);for(const i of[-1.5,1.5])for(const r of[-.6,.6])this.box(.12,2.7,.12,this.materials.darkWood,[e+i,1.35,6+r]);this.box(3.9,.1,2.3,this.materials.canvas,[e,2.75,6],void 0,[0,0,-.07]);for(let i=0;i<15;i++)this.mesh(new Nn(.13,7,5),this.materials.foliage[4+i%2],[e-1.3+i%6*.42,1.3+Math.floor(i/6)*.1,6+(Math.floor(i/6)-1)*.35]);this.collide(e,6,3.8,2)}this.windmill(-34,-18)}gardens(){const{stone:t,lightStone:e,gold:n,darkWood:i,foliage:r}=this.materials;this.box(11,.13,17,this.materials.path,[0,.05,-15]);for(const o of[-16,16]){this.box(1.6,.4,24,e,[o,.2,-5]),this.box(1.4,1,24,r[1],[o,.85,-5]),this.collide(o,-5,1.6,24);for(const a of[-15,-7,1,7])this.box(2.1,1.7,1.8,t,[o,.85,a]),this.box(2.35,.16,2.05,e,[o,1.74,a]),this.cylinder(.32,.32,.15,n,[o,1.91,a],16)}for(const o of[-24,24]){this.box(7,.25,12,e,[o,.12,-1]),this.box(6.5,.35,11.5,this.materials.ground,[o,.36,-1]);for(let a=0;a<3;a++)this.flowerBed(o,-5+a*5)}for(const o of[-8,8]){this.cylinder(.06,.09,5.3,n,[o,2.65,-17],10),this.mesh(new Nn(.13,12,8),n,[o,5.45,-17]);const l=new re;l.position.set(o+1.1,3.7,-17),this.staticRoot.add(l);const c=new ie({color:11354940,roughness:.88,side:Ce});this.box(1.8,2.1,.06,c,[0,0,0],l),this.box(1.8,.08,.09,n,[0,-1,0],l),this.box(.8,.16,.1,n,[0,-.1,.06],l);for(const h of[-.3,0,.3])this.mesh(new Ei(.15,.38,4),n,[h,.16,.09],void 0,l)}for(const o of[-24,24]){for(const l of[-2.5,2.5])for(const c of[-1.5,1.5])this.box(.22,3,.22,i,[o+l,1.5,12+c]);for(let l=0;l<8;l++)this.box(.18,.18,4,i,[o-2.8+l*.8,3,12]);this.box(6,.16,.18,i,[o,2.9,12-1.5]),this.box(6,.16,.18,i,[o,2.9,12+1.5])}}flag(t,e,n,i){const r=new ie({color:5859156,roughness:1,side:Ce}),o=new qe(1.8,.85,12,4);o.translate(.9,-.4,0);const a=new At(o,r);a.position.set(t,e,n),a.userData.seed=this.rand()*10,this.flags.push(a),(i??this.staticRoot).add(a)}windmill(t,e){this.cylinder(1.6,2.5,8,this.materials.stone,[t,4,e],16),this.cylinder(.01,2.3,3.5,this.materials.roof,[t,9.6,e],16);const n=new re;n.position.set(t,6.7,e+2),this.staticRoot.add(n),this.mills.push(n);for(let i=0;i<4;i++){const r=new re;r.rotation.z=i*Math.PI/2,n.add(r),this.box(.13,5.2,.16,this.materials.darkWood,[0,1.7,0],r),this.box(.8,3,.08,this.materials.canvas,[.3,2.7,0],r);for(let o=0;o<7;o++)this.box(.9,.05,.11,this.materials.darkWood,[.3,1.3+o*.45,.06],r)}this.collide(t,e,5,5)}tree(t,e,n,i=!1){const r=this.surfaceHeight(t,e),{bark:o,foliage:a}=this.materials;this.cylinder(.12*n,.23*n,2.8*n,o,[t,r+1.4*n,e],7);const l=a[i?4+Math.floor(this.rand()*2):Math.floor(this.rand()*4)];for(let c=0;c<11;c++){const h=c*2.4,u=.3+this.rand()*1.2,d=Math.cos(h)*n*u,f=Math.sin(h)*n*u,g=new es(n*(.65+this.rand()*.4),1);g.scale(1,.85,1),this.mesh(g,l,[t+d,r+n*(2.8+this.rand()*1.9),e+f])}Math.abs(t)<42&&Math.abs(e)<47&&this.collide(t,e,.5*n,.5*n)}pine(t,e,n){const i=this.surfaceHeight(t,e);this.cylinder(.09*n,.18*n,n*5,this.materials.bark,[t,i+2.5*n,e],5);for(let r=0;r<4;r++)this.mesh(new Ei(n*(1.7-r*.3),n*2.6,9),this.materials.foliage[r%3],[t,i+n*(2+r*.9),e])}nature(){for(let e=0;e<95;e++){const n=this.rand()*Math.PI*2,i=46+this.rand()*88,r=Math.sin(n)*i,o=Math.cos(n)*i;o>19&&o<31&&Math.abs(r)<75||xi(r,o)>5&&this.vegetation.addTree(r,this.surfaceHeight(r,o),o,.7+this.rand()*.55,this.rand()>.8?"pine":"oak")}for(const[e,n,i]of[[-32,2,1.1],[35,6,1],[-21,18,.75],[23,18,.7],[-29,-29,1.1],[30,-29,1.2],[-34,35,1],[34,37,.8]])this.vegetation.addTree(e,this.surfaceHeight(e,n),n,i,"oak"),this.collide(e,n,.7,.7);for(let e=0;e<65;e++){const n=(this.rand()-.5)*110,i=(this.rand()-.5)*100;Math.hypot(n,i)<12||Math.abs(n)<18&&i<12&&i>-43||Math.abs(n)<4||Math.abs(i)<4||i>18&&i<32||this.vegetation.addMeadow(n,this.surfaceHeight(n,i),i,3+this.rand()*3,65)}for(const e of[-20,20,-30,30])for(const n of[-11,10,34])this.vegetation.addFlowerPatch(e,this.surfaceHeight(e,n),n,2,25);this.vegetation.finalize();const t=new ie({color:7567724,roughness:1,bumpMap:this.materials.bark.bumpMap,bumpScale:.12});for(let e=0;e<90;e++){const n=(this.rand()-.5)*140,i=24+(this.rand()-.5)*10;if(Math.abs(n)<5)continue;const r=new es(.4+this.rand()*1.1,0);r.scale(1.5,.7,1),this.mesh(r,t,[n,-.1,i])}for(let e=0;e<7;e++){const n=new re,i=new yi({color:3030066,side:Ce});for(const r of[-1,1]){const o=new qe(.7,.17);o.translate(r*.35,0,0);const a=new At(o,i);a.rotation.x=Math.PI/2,n.add(a)}n.userData.seed=this.rand()*Math.PI*2,this.birds.push(n),this.group.add(n)}}flowerBed(t,e){this.cylinder(1.7,1.7,.35,this.materials.stone,[t,.17,e],12),this.cylinder(1.5,1.5,.12,this.materials.ground,[t,.4,e],14);const n=this.flowerMaterials;for(let i=0;i<28;i++){const r=this.rand()*Math.PI*2,o=this.rand()*1.4,a=t+Math.cos(r)*o,l=e+Math.sin(r)*o;this.cylinder(.02,.02,.35,this.materials.foliage[0],[a,.6,l],4),this.mesh(new es(.12,0),n[i%3],[a,.8+this.rand()*.2,l])}this.collide(t,e,3.2,3.2)}lantern(t,e,n,i=!1){const{iron:r,window:o,roof:a}=this.materials;i||(this.cylinder(.055,.1,e,r,[t,e/2,n],8),this.cylinder(.17,.28,.2,r,[t,.13,n],8)),this.box(.35,.5,.35,o,[t,e+.2,n]),this.cylinder(0,.32,.28,a,[t,e+.6,n],4);for(const h of[-.19,.19])for(const u of[-.19,.19])this.box(.03,.56,.03,r,[t+h,e+.2,n+u]);const l=new Jr(16760168,3,10,2);l.position.set(t,e+.3,n),this.group.add(l),this.lamps.push(l);const c=new Cd(new Ad({map:Er(),color:15970650,blending:Or,transparent:!0,opacity:.38,depthWrite:!1}));c.position.copy(l.position),c.scale.setScalar(1.8),this.group.add(c),this.lanternSprites.push(c)}details(){for(const t of[-5,5])for(const e of[-17,12,31])this.lantern(t,2.8,e);this.box(5.8,.4,11,this.materials.stone,[0,.18,25]),this.box(5.3,.12,11,this.materials.path,[0,.43,25]);for(const t of[-3.05,3.05]){this.box(.5,.8,11,this.materials.stone,[t,.85,25]),this.box(.65,.14,11.4,this.materials.lightStone,[t,1.33,25]),this.collide(t,25,.65,11.5);for(const e of[19.5,25,30.5])this.box(.85,1.5,.9,this.materials.lightStone,[t,.75,e])}for(const[t,e,n]of[[-6,-7,.6],[6,-7,-.6],[-6,7,-.6],[6,7,.6]]){const i=new re;i.position.set(t,0,e),i.rotation.y=n,this.staticRoot.add(i),this.box(2.4,.12,.65,this.materials.wood,[0,.62,0],i),this.box(2.4,.55,.1,this.materials.wood,[0,1,-.3],i);for(const r of[-.9,.9])this.box(.1,.65,.5,this.materials.iron,[r,.32,0],i);this.collide(t,e,2.5,1)}for(let t=0;t<15;t++){const n=11+t*1.1;if(this.box(.12,1.1,.12,this.materials.darkWood,[28,.55,n]),t<14)for(const i of[.4,.85])this.box(.1,.08,1.15,this.materials.wood,[28,i,n+.55])}}createWater(){const t=new Pe({transparent:!0,uniforms:{uTime:{value:0},uLight:{value:1},uRain:{value:0},uColor:{value:new mt(4880240)}},vertexShader:"varying vec2 vUv; varying vec3 vPos; uniform float uTime; void main(){vUv=uv; vec3 p=position; p.z+=sin(p.x*.5+uTime*.7)*.025+cos(p.y*.8+uTime*.5)*.025;vPos=p;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:`varying vec2 vUv;varying vec3 vPos;uniform float uTime;uniform float uLight;uniform float uRain;uniform vec3 uColor; void main(){float waves=sin(vPos.x*2.+vPos.y*3.+uTime*1.2)*sin(vPos.x*.7-vPos.y*2.-uTime*.7);float ripple=pow(abs(sin(vPos.x*6.+vPos.y*8.+uTime*5.)),20.)*uRain; vec3 color=uColor*(.65+.35*uLight)+waves*.035+ripple*.06;float sheen=pow(max(0.,sin(vPos.y*.6+vPos.x*.15+uTime*.3)),18.);color+=vec3(.26,.29,.24)*sheen*.5*uLight;gl_FragColor=vec4(color,.9);
#include <tonemapping_fragment>
#include <colorspace_fragment>}`,side:Ce}),e=new At(new qe(160,8,160,12),t);return e.rotation.x=-Math.PI/2,e.position.set(0,-.035,25),e}particles(t,e,n,i,r){const o=new pe,a=new Float32Array(t*3);for(let c=0;c<t;c++)a[c*3]=(this.rand()-.5)*n,a[c*3+1]=this.rand()*i,a[c*3+2]=(this.rand()-.5)*n+r;o.setAttribute("position",new Oe(a,3));const l=new Nc(o,e);return l.frustumCulled=!1,this.group.add(l),l}createRain(){const t=new Float32Array(10200);for(let i=0;i<1700;i++){const r=(this.rand()-.5)*110,o=this.rand()*50,a=(this.rand()-.5)*110;t.set([r,o,a,r-.12,o+.65,a],i*6)}const e=new pe;e.setAttribute("position",new Oe(t,3));const n=new Ld(e,new Xs({color:12637904,transparent:!0,opacity:.3,depthWrite:!1}));return n.frustumCulled=!1,n}async loadAssets(t){const e=new of,n=document.getElementById("offline-assets");let i;if(n)i=JSON.parse(n.textContent||"{}");else{const o=await fetch(new URL("assets/manifest.json",document.baseURI));if(!o.ok)throw new Error(`Asset manifest: HTTP ${o.status}`);i=await o.json()}const r=i;for(const o of r.assets)try{t(`正在布置${o.id==="castle"?"北境古堡":"庄园建筑"}`);const a=o.path.startsWith("data:")?o.path:new URL(o.path.replace(/^\/+/,""),document.baseURI).href,c=(await e.loadAsync(a)).scene,h=new Zn().setFromObject(c),u=h.getSize(new E),d=h.getCenter(new E),f=o.width/Math.max(u.x,u.z);c.position.set(-d.x,-h.min.y,-d.z);const g=new re;g.add(c),g.scale.setScalar(f),g.position.set(...o.position),g.rotation.y=o.rotation??0,c.traverse(x=>{x instanceof At&&(x.castShadow=!0,x.receiveShadow=!0)}),this.assetRoot.add(g),this.externalAssets.push(o.id);const _=new Zn().setFromObject(g),m=_.getSize(new E),p=_.getCenter(new E);if(this.collide(p.x,p.z,m.x,m.z),o.replace){const x=this.replacements.get(o.replace);x&&(x.visible=!1)}}catch(a){console.warn(`Asset unavailable: ${o.id}`,a)}if(!this.externalAssets.includes("mole-castle"))throw new Error("The referenced Mole Manor castle model could not be loaded.");t("正在栽种树林与草地"),await this.vegetation.loadAssets(),this.optimizeStaticGeometry()}optimizeStaticGeometry(){this.staticRoot.updateMatrixWorld(!0);const t=new Set([...this.flags,...this.mills]),e=new Map,n=[];this.staticRoot.traverse(i=>{if(!(i instanceof At)||i instanceof vi||Array.isArray(i.material))return;let r=i;for(;r&&r!==this.staticRoot;){if(!r.visible||t.has(r))return;r=r.parent}const o=i.geometry.clone().applyMatrix4(i.matrixWorld),a=o.index?o.toNonIndexed():o;a!==o&&o.dispose(),e.has(i.material)||e.set(i.material,[]),e.get(i.material).push(a),n.push(i)});for(const i of n)i.removeFromParent(),i.geometry.dispose();for(const[i,r]of e){const o=Bi(r,!1);if(o){this.projectSurfaceUVs(o,i);const a=new At(o,i);a.castShadow=i!==this.materials.ground,a.receiveShadow=!0,this.staticRoot.add(a)}for(const a of r)a.dispose()}}setCourtyardVisible(t){if(this.courtyardVisible!==t){this.courtyardVisible=t;for(const e of[this.staticRoot,this.assetRoot,this.vegetation.group,this.life.group,this.water,this.fountainDrops,...this.birds,...this.lamps,...this.lanternSprites])e.visible=t}}update(t,e,n,i,r){if(r)for(const d of[this.rain,this.snow,this.fireflies,this.leafParticles])d.position.set(r.x,this.surfaceHeight(r.x,r.z),r.z);this.life.update(t),this.vegetation.update(t,n==="rain"?1.3:.7),this.water.material.uniforms.uTime.value=t,this.water.material.uniforms.uLight.value=i,this.water.material.uniforms.uRain.value=n==="rain"?1:0,this.materials.window.emissiveIntensity=.2+(1-i)*1.8;for(const d of this.lamps)r&&(d.visible=this.courtyardVisible&&Math.hypot(d.position.x-r.x,d.position.z-r.z)<45);for(const d of this.lamps)d.intensity=(.6+(1-i)*7)*(1+Math.sin(t*3+d.position.x)*.035);for(const d of this.lanternSprites)d.material.opacity=.1+(1-i)*.4;this.materials.path.roughness=Je.damp(this.materials.path.roughness,n==="rain"?.3:.92,1,e),this.materials.path.metalness=n==="rain"?.18:.02,this.rain.visible=n==="rain",this.snow.visible=n==="snow";const o=this.rain.geometry.attributes.position;if(this.rain.visible)for(let d=0;d<o.count;d+=2){let f=o.getY(d)-e*22;f<0&&(f+=50);const g=o.getX(d)-e*1.4;o.setXYZ(d,g<-55?g+110:g,f,o.getZ(d)),o.setXYZ(d+1,g-.12,f+.65,o.getZ(d))}this.rain.visible&&(o.needsUpdate=!0);const a=this.snow.geometry.attributes.position;if(this.snow.visible)for(let d=0;d<a.count;d++){let f=a.getY(d)-e*(1+d%5*.15);f<0&&(f=40),a.setY(d,f),a.setX(d,a.getX(d)+Math.sin(t*.6+d)*e*.6)}this.snow.visible&&(a.needsUpdate=!0);const l=this.fireflies.geometry.attributes.position;for(let d=0;d<l.count;d++){const f=this.fireflySeeds[d];l.setY(d,1+Math.sin(t*.45+f)*.8+f%3),l.setX(d,Math.sin(f*5)*28+Math.sin(t*.3+f)*1.5)}l.needsUpdate=!0,this.fireflies.material.opacity=(1-i)**2*.7;const c=this.smoke.geometry.attributes.position;for(let d=0;d<c.count;d++){const f=(t*.025+d/c.count)%1;c.setXYZ(d,19.6+f*5+Math.sin(d*.7+t*.2)*f,8+f*12,-4+Math.cos(d+t*.3)*f)}c.needsUpdate=!0;const h=this.fountainDrops.geometry.attributes.position;for(let d=0;d<h.count;d++){const f=(t*.8+d/h.count)%1,g=d*2.4,_=Math.sin(f*Math.PI/2)*1.9;h.setXYZ(d,Math.cos(g)*_,2.95+f*1.6-f*f*4,Math.sin(g)*_)}h.needsUpdate=!0;const u=this.leafParticles.geometry.attributes.position;for(let d=0;d<u.count;d++){let f=u.getY(d)-e*.25;f<0&&(f=15),u.setY(d,f),u.setX(d,u.getX(d)+Math.sin(t+d)*e*.15)}u.needsUpdate=!0;for(const d of this.flags){const f=d.geometry.attributes.position;for(let g=0;g<f.count;g++)f.setZ(g,Math.sin(f.getX(g)*3-t*2.5+d.userData.seed)*.15*f.getX(g));f.needsUpdate=!0,d.geometry.computeVertexNormals()}for(const d of this.mills)d.rotation.z=t*.12;for(let d=0;d<this.birds.length;d++){const f=this.birds[d],g=t*.06+f.userData.seed;f.position.set(Math.cos(g)*40,22+d*.6+Math.sin(g*3),Math.sin(g)*35-12),f.rotation.y=-g,f.children.forEach((_,m)=>{_.rotation.z=Math.sin(t*3.5+d)*.3*(m===0?-1:1)})}}canMove(t,e){return!this.connected&&(Math.abs(t)>46||e<-43||e>48)||e>19.4&&e<30.6&&Math.abs(t)>2.7&&Math.abs(t)<76?!1:!this.collisions.some(n=>Math.abs(t-n.x)<n.w/2+.32&&Math.abs(e-n.z)<n.d/2+.32)}heightAt(t,e){return e>19.4&&e<30.6&&Math.abs(t)<2.8?.48:this.surfaceHeight(t,e)+.12}}class AM{context;master;rain;wind;brook;reverb;timer;nextNote=0;step=0;volume=.45;weather="mist";active=!1;lastStep=0;get playing(){return this.active}get state(){return this.context?.state??"uninitialized"}async toggle(){return this.context||this.init(),await this.context.resume(),this.active=!this.active,this.master.gain.setTargetAtTime(this.active?this.volume*.55:0,this.context.currentTime,.4),this.active&&(this.nextNote=this.context.currentTime+.1,this.schedule()),this.active}setVolume(t){this.volume=t,this.master&&this.context&&this.master.gain.setTargetAtTime(this.active?t*.55:0,this.context.currentTime,.2)}setWeather(t){if(this.weather=t,!this.context)return;const e=this.context.currentTime;this.rain.gain.setTargetAtTime(t==="rain"?.11:0,e,1.5),this.wind.gain.setTargetAtTime(t==="snow"?.05:t==="rain"?.035:.018,e,2),this.brook.gain.setTargetAtTime(t==="rain"?.025:.014,e,2)}init(){const t=this.context=new AudioContext;this.master=t.createGain(),this.master.gain.value=0,this.master.connect(t.destination),this.reverb=t.createConvolver();const e=t.createBuffer(2,t.sampleRate*3,t.sampleRate);for(let l=0;l<2;l++){const c=e.getChannelData(l);for(let h=0;h<c.length;h++)c[h]=(Math.random()*2-1)*Math.pow(1-h/c.length,3)*.55}this.reverb.buffer=e;const n=t.createGain();n.gain.value=.24,this.reverb.connect(n),n.connect(this.master);const i=t.createBuffer(1,t.sampleRate*6,t.sampleRate),r=i.getChannelData(0);let o=0;for(let l=0;l<r.length;l++)o=(o+(Math.random()*2-1)*.02)/1.02,r[l]=o*3.5;const a=(l,c)=>{const h=t.createBufferSource();h.buffer=i,h.loop=!0;const u=t.createBiquadFilter();u.type=c,u.frequency.value=l;const d=t.createGain();return d.gain.value=0,h.connect(u),u.connect(d),d.connect(this.master),h.start(),d};this.rain=a(1800,"highpass"),this.wind=a(420,"lowpass"),this.brook=a(650,"bandpass"),this.setWeather(this.weather);for(const l of[73.416,110,146.832]){const c=t.createOscillator();c.type="sine",c.frequency.value=l;const h=t.createGain();h.gain.value=.016,c.connect(h),h.connect(this.master),c.start()}this.timer=setInterval(()=>this.schedule(),200)}schedule(){if(!this.active||!this.context)return;const t=[[50,57,62,65,69,64,65,57],[46,53,58,62,65,62,58,53],[41,53,57,60,65,60,57,53],[48,55,60,64,67,64,60,55]],e=[0,2,3,1,4,2,3,1];for(;this.nextNote<this.context.currentTime+.6;){const n=t[Math.floor(this.step/16)%4],i=n[e[this.step%e.length]];this.pluck(440*2**((i-69)/12),this.nextNote,this.step%4===0?.075:.043),this.step%8===0&&this.pluck(440*2**((n[3]+12-69)/12),this.nextNote+.12,.018),this.nextNote+=60/56/2,this.step++}}pluck(t,e,n){const i=this.context,r=i.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(n,e+.018),r.gain.exponentialRampToValueAtTime(1e-4,e+3.5);const o=i.createBiquadFilter();o.type="lowpass",o.frequency.value=1400;const a=i.createStereoPanner();a.pan.value=Math.sin(this.step*1.3)*.35,r.connect(o),o.connect(a),a.connect(this.master),a.connect(this.reverb);for(const[l,c]of[[1,1],[2,.22],[3,.07]]){const h=i.createOscillator();h.type="sine",h.frequency.value=t*l;const u=i.createGain();u.gain.value=c,h.connect(u),u.connect(r),h.start(e),h.stop(e+3.6)}}footstep(){if(!this.context||!this.active||this.context.currentTime-this.lastStep<.4)return;const t=this.context;this.lastStep=t.currentTime;const e=t.createOscillator();e.type="triangle",e.frequency.setValueAtTime(110,t.currentTime),e.frequency.exponentialRampToValueAtTime(40,t.currentTime+.08);const n=t.createGain();n.gain.setValueAtTime(.035,t.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.1),e.connect(n),n.connect(this.master),e.start(),e.stop(t.currentTime+.12)}dispose(){this.timer&&clearInterval(this.timer),this.context?.close()}}const Fo={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new zt},cameraProjectionMatrixInverse:{value:new zt},cameraWorldMatrix:{value:new zt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new E(-1,-1,-1)},sceneBoxMax:{value:new E(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},ko={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},cl={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function RM(s=5){const t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=CM(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=e[o],l=2*Math.PI*a/n,c=new E(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}const r=new oa(i,t,t);return r.wrapS=Yn,r.wrapT=Yn,r.needsUpdate=!0,r}function CM(s){const t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,n=Array(e).fill(0);let i=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(i===-1&&r===t?(r=t-2,i=0):(r===t&&(r=0),i<0&&(i=t-1)),n[i*t+r]!==0){r-=2,i++;continue}else n[i*t+r]=o++;r++,i--}return n}const Bo={defines:{SAMPLES:16,SAMPLE_VECTORS:df(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraProjectionMatrixInverse:{value:new zt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function df(s,t,e){const n=PM(s,t,e);let i="vec3[SAMPLES](";for(let r=0;r<s;r++){const o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function PM(s,t,e){const n=[];for(let i=0;i<s;i++){const r=2*Math.PI*t*i/s,o=Math.pow(i/(s-1),e);n.push(new E(Math.cos(r),Math.sin(r),o))}return n}class LM{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,r;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=t-d,_=e-f;let m,p;g>_?(m=1,p=0):(m=0,p=1);const x=g-m+h,M=_-p+h,v=g-1+2*h,b=_-1+2*h,A=l&255,C=c&255,L=this.perm[A+this.perm[C]]%12,w=this.perm[A+m+this.perm[C+p]]%12,S=this.perm[A+1+this.perm[C+1]]%12;let P=.5-g*g-_*_;P<0?n=0:(P*=P,n=P*P*this._dot(this.grad3[L],g,_));let N=.5-x*x-M*M;N<0?i=0:(N*=N,i=N*N*this._dot(this.grad3[w],x,M));let k=.5-v*v-b*b;return k<0?r=0:(k*=k,r=k*k*this._dot(this.grad3[S],v,b)),70*(n+i+r)}noise3d(t,e,n){let i,r,o,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,_=h-g,m=u-g,p=d-g,x=t-_,M=e-m,v=n-p;let b,A,C,L,w,S;x>=M?M>=v?(b=1,A=0,C=0,L=1,w=1,S=0):x>=v?(b=1,A=0,C=0,L=1,w=0,S=1):(b=0,A=0,C=1,L=1,w=0,S=1):M<v?(b=0,A=0,C=1,L=0,w=1,S=1):x<v?(b=0,A=1,C=0,L=0,w=1,S=1):(b=0,A=1,C=0,L=1,w=1,S=0);const P=x-b+f,N=M-A+f,k=v-C+f,q=x-L+2*f,z=M-w+2*f,X=v-S+2*f,Z=x-1+3*f,G=M-1+3*f,it=v-1+3*f,pt=h&255,yt=u&255,Ot=d&255,Zt=this.perm[pt+this.perm[yt+this.perm[Ot]]]%12,se=this.perm[pt+b+this.perm[yt+A+this.perm[Ot+C]]]%12,$t=this.perm[pt+L+this.perm[yt+w+this.perm[Ot+S]]]%12,Y=this.perm[pt+1+this.perm[yt+1+this.perm[Ot+1]]]%12;let Q=.6-x*x-M*M-v*v;Q<0?i=0:(Q*=Q,i=Q*Q*this._dot3(this.grad3[Zt],x,M,v));let _t=.6-P*P-N*N-k*k;_t<0?r=0:(_t*=_t,r=_t*_t*this._dot3(this.grad3[se],P,N,k));let Et=.6-q*q-z*z-X*X;Et<0?o=0:(Et*=Et,o=Et*Et*this._dot3(this.grad3[$t],q,z,X));let St=.6-Z*Z-G*G-it*it;return St<0?a=0:(St*=St,a=St*St*this._dot3(this.grad3[Y],Z,G,it)),32*(i+r+o+a)}noise4d(t,e,n,i){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,g;const _=(t+e+n+i)*l,m=Math.floor(t+_),p=Math.floor(e+_),x=Math.floor(n+_),M=Math.floor(i+_),v=(m+p+x+M)*c,b=m-v,A=p-v,C=x-v,L=M-v,w=t-b,S=e-A,P=n-C,N=i-L,k=w>S?32:0,q=w>P?16:0,z=S>P?8:0,X=w>N?4:0,Z=S>N?2:0,G=P>N?1:0,it=k+q+z+X+Z+G,pt=o[it][0]>=3?1:0,yt=o[it][1]>=3?1:0,Ot=o[it][2]>=3?1:0,Zt=o[it][3]>=3?1:0,se=o[it][0]>=2?1:0,$t=o[it][1]>=2?1:0,Y=o[it][2]>=2?1:0,Q=o[it][3]>=2?1:0,_t=o[it][0]>=1?1:0,Et=o[it][1]>=1?1:0,St=o[it][2]>=1?1:0,Kt=o[it][3]>=1?1:0,ce=w-pt+c,D=S-yt+c,nt=P-Ot+c,J=N-Zt+c,K=w-se+2*c,j=S-$t+2*c,ut=P-Y+2*c,st=N-Q+2*c,dt=w-_t+3*c,Vt=S-Et+3*c,kt=P-St+3*c,R=N-Kt+3*c,y=w-1+4*c,F=S-1+4*c,H=P-1+4*c,et=N-1+4*c,W=m&255,Tt=p&255,lt=x&255,wt=M&255,Ct=a[W+a[Tt+a[lt+a[wt]]]]%32,ot=a[W+pt+a[Tt+yt+a[lt+Ot+a[wt+Zt]]]]%32,vt=a[W+se+a[Tt+$t+a[lt+Y+a[wt+Q]]]]%32,Ft=a[W+_t+a[Tt+Et+a[lt+St+a[wt+Kt]]]]%32,Dt=a[W+1+a[Tt+1+a[lt+1+a[wt+1]]]]%32;let ft=.6-w*w-S*S-P*P-N*N;ft<0?h=0:(ft*=ft,h=ft*ft*this._dot4(r[Ct],w,S,P,N));let Ht=.6-ce*ce-D*D-nt*nt-J*J;Ht<0?u=0:(Ht*=Ht,u=Ht*Ht*this._dot4(r[ot],ce,D,nt,J));let I=.6-K*K-j*j-ut*ut-st*st;I<0?d=0:(I*=I,d=I*I*this._dot4(r[vt],K,j,ut,st));let rt=.6-dt*dt-Vt*Vt-kt*kt-R*R;rt<0?f=0:(rt*=rt,f=rt*rt*this._dot4(r[Ft],dt,Vt,kt,R));let ht=.6-y*y-F*F-H*H-et*et;return ht<0?g=0:(ht*=ht,g=ht*ht*this._dot4(r[Dt],y,F,H,et)),27*(h+u+d+f+g)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}}class ti extends as{constructor(t,e,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=RM(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new fn(this.width,this.height,{type:Un}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Pe({defines:Object.assign({},Fo.defines),uniforms:ni.clone(Fo.uniforms),vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader,blending:We,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Cm,this.normalMaterial.blending=We,this.pdMaterial=new Pe({defines:Object.assign({},Bo.defines),uniforms:ni.clone(Bo.uniforms),vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Pe({defines:Object.assign({},ko.defines),uniforms:ni.clone(ko.uniforms),vertexShader:ko.vertexShader,fragmentShader:ko.fragmentShader,blending:We}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Pe({uniforms:ni.clone(ns.uniforms),vertexShader:ns.vertexShader,fragmentShader:ns.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:vl,blendDst:Sr,blendEquation:Gn,blendSrcAlpha:_l,blendDstAlpha:Sr,blendEquationAlpha:Gn}),this.blendMaterial=new Pe({uniforms:ni.clone(cl.uniforms),vertexShader:cl.vertexShader,fragmentShader:cl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ju,blendSrc:vl,blendDst:Sr,blendEquation:Gn,blendSrcAlpha:_l,blendDstAlpha:Sr,blendEquationAlpha:Gn}),this._fsQuad=new ua(null),this._originalClearColor=new mt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Uc,this.depthTexture.format=Hs,this.depthTexture.type=Vs,this.normalRenderTarget=new fn(this.width,this.height,{minFilter:Ye,magFilter:Ye,type:Un,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=df(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case ti.OUTPUT.Off:break;case ti.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ti.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ti.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ti.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case ti.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ti.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,r){t.getClearColor(this._originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,i,r){t.getClearColor(this._originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){const t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){const e=new LM,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){const l=o,c=a;i[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new oa(i,t,t,yn,jn);return r.wrapS=Yn,r.wrapT=Yn,r.needsUpdate=!0,r}}ti.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};class DM extends ti{constructor(t,e){super(t,e,640,480),this.blendIntensity=.62,this.updateGtaoMaterial({radius:1.1,thickness:.65,scale:1.1,samples:12,screenSpaceRadius:!1}),this.updatePdMaterial({radius:6,samples:8,rings:2});const n=this,i=n._overrideVisibility.bind(this);n._overrideVisibility=()=>{i(),t.traverse(r=>{if(!r.visible)return;const o=r,a=o.isMesh?Array.isArray(o.material)?o.material:[o.material]:[];(r.userData.excludeFromAO||r instanceof Cd||a.some(l=>l.transparent||l.alphaTest>0))&&(r.visible=!1,n._visibilityCache.push(r))})}}setSize(t,e){const n=Math.min(.65,960/t);super.setSize(Math.ceil(t*n),Math.ceil(e*n))}}const yr=new E;function Rn(s,t,e,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;yr.copy(t),yr[n]=0,yr.normalize();const c=.5*o/(o+a),h=1-yr.angleTo(s)/l;return Math.sign(yr[e])===1?h*c:a/(o+a)+c+c*(1-h)}class qc extends Qe{constructor(t=1,e=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new E,c=new E,h=new E(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,_=new E,m=.5/o;for(let p=0,x=0;p<u.length;p+=3,x+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[x+0]=Rn(_,c,"z","y",r,n),f[x+1]=1-Rn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[x+0]=1-Rn(_,c,"z","y",r,n),f[x+1]=1-Rn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[x+0]=1-Rn(_,c,"x","z",r,t),f[x+1]=Rn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[x+0]=1-Rn(_,c,"x","z",r,t),f[x+1]=1-Rn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[x+0]=1-Rn(_,c,"x","y",r,t),f[x+1]=1-Rn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[x+0]=Rn(_,c,"x","y",r,t),f[x+1]=1-Rn(_,c,"y","x",r,e);break}}static fromJSON(t){return new qc(t.width,t.height,t.depth,t.segments,t.radius)}}const IM=new WeakMap;function ia(s,t){const e=Math.max(0,Math.max(Math.abs(s),Math.abs(t))-46);return-.13+Math.sin(s*.18)*Math.cos(t*.13)*Math.min(e,1.6)+e*.14}class NM{constructor(t,e=!1){this.id=t,this.sharedTerrain=e,this.rock.bumpMap=this.m.plaster.bumpMap,this.rock.bumpScale=.16,this.group.name=`region:${t}`,this.extraMaterials.add(this.water),this.water.onBeforeCompile=n=>{n.uniforms.manorWaterTime=this.waterTime,n.vertexShader=`varying vec2 manorWaterXZ;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 manorWaterXZ=(modelMatrix*vec4(transformed,1.)).xz;`),n.fragmentShader=`uniform float manorWaterTime;varying vec2 manorWaterXZ;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal=normalize(normal+vec3(sin(manorWaterXZ.x*2.3+manorWaterXZ.y*.8+manorWaterTime*1.4)*.065,cos(manorWaterXZ.y*2.7-manorWaterTime)*.04,0.));`)},this.water.customProgramCacheKey=()=>"manor-ripple-water",this.animations.push(n=>{this.waterTime.value=n})}group=new re;m=da();collisions=[];heroTrees=[];batches=new Map;extraMaterials=new Set;geometryResources=new Set;random=rr(817);animations=[];lamps=[];water=new an({color:4096392,roughness:.18,metalness:.22,clearcoat:1,clearcoatRoughness:.12});waterTime={value:0};rock=this.paint(7635573);white=this.paint(16773580);red=this.paint(14244168,this.m.roof);teal=this.paint(4689546,this.m.roof);blue=this.paint(5081021,this.m.roof);pink=this.paint(14982053);leaf=this.paint(6133308);yellow=this.paint(15779947);mushroomCap=this.paint(11947068);paint(t,e,n=.86){const i=e?e.clone():new ie;return i.color.set(t),i.roughness=n,this.extraMaterials.add(i),i}add(t,e,n,i=[0,0,0],r=[1,1,1]){const o=new zt().compose(new E(...n),new wn().setFromEuler(new Fn(...i)),new E(...r));t.applyMatrix4(o),this.batches.has(e)||this.batches.set(e,[]),this.batches.get(e).push(t)}box(t,e,n,i,r,o){this.add(t>5&&e>3&&n>3?new qc(t,e,n,2,.085):new Qe(t,e,n),i,r,o)}cyl(t,e,n,i,r,o=16){this.add(new Xe(t,e,n,o),i,r)}ball(t,e,n,i=[1,1,1]){this.add(new Nn(t,12,8),e,n,void 0,i)}ring(t,e,n,i,r=[Math.PI/2,0,0]){this.add(new Ti(t,e,6,40),n,i,r)}beam(t,e,n,i=this.m.wood){const r=new E(...t),o=new E(...e),a=r.clone().add(o).multiplyScalar(.5),l=new Qe(n,r.distanceTo(o),n);l.applyQuaternion(new wn().setFromUnitVectors(new E(0,1,0),o.sub(r).normalize())),this.add(l,i,a.toArray())}block(t,e,n,i){this.collisions.push({x:t,z:e,w:n,d:i})}ground(t,e=!1){if(this.sharedTerrain)return;const n=new qe(240,240,96,96);n.rotateX(-Math.PI/2);const i=n.attributes.position,r=[],o=new mt(t);for(let c=0;c<i.count;c++){const h=i.getX(c),u=i.getZ(c);i.setY(c,ia(h,u));const d=o.clone().multiplyScalar(.91+this.random()*.16);r.push(d.r,d.g,d.b)}n.setAttribute("color",new Xt(r,3)),n.computeVertexNormals();const a=this.m.ground.clone();a.vertexColors=!0,e&&(a.map=null,a.bumpMap=null),this.extraMaterials.add(a);const l=new At(n,a);l.receiveShadow=!0,l.name="walkable terrain",this.geometryResources.add(n),this.group.add(l)}path(t,e,n=6,i=this.m.path){const r=e[0]-t[0],o=e[1]-t[1];this.box(n,.1,Math.hypot(r,o),i,[(t[0]+e[0])/2,-.015,(t[1]+e[1])/2],[0,Math.atan2(r,o),0])}roof(t,e,n,i,r,o,a=this.red){const l=new aa;l.moveTo(-n/2,0),l.lineTo(0,o),l.lineTo(n/2,0),l.closePath();const c=new Kr(l,{depth:i,bevelEnabled:!1});c.translate(t,r,e-i/2),this.add(c,a,[0,0,0]);for(const h of[-i/2,i/2])this.beam([t-n/2,r,e+h],[t,r+o,e+h],.2,this.m.lightStone),this.beam([t+n/2,r,e+h],[t,r+o,e+h],.2,this.m.lightStone)}window(t,e,n,i=1.5,r=2){this.box(i+.3,r+.3,.19,this.m.darkWood,[t,e,n]),this.box(i,r,.23,this.m.window,[t,e,n+.03]),this.box(.1,r,.26,this.white,[t,e,n+.06]),this.box(i,.1,.26,this.white,[t,e,n+.06])}door(t,e,n=3,i=1.9,r=0){this.box(i+.45,n+.25,.3,this.m.lightStone,[t,r+n/2,e]),this.box(i,n,.35,this.m.darkWood,[t,r+n/2,e+.06]),this.ball(.11,this.m.gold,[t+i*.32,r+n*.46,e+.27])}sign(t,e,n=7,i="#315d55",r){if(e[1]<=3.5){e=[e[0]===0?-8:e[0],2.25,e[2]],n=Math.min(4,n*.48);for(const h of[-1,1]){const u=e[0]+h*n*.35;this.box(.16,2.45,.16,this.m.darkWood,[u,1.1,e[2]-.12]),this.block(u,e[2],.2,.2)}}const o=document.createElement("canvas");o.width=1024,o.height=256;const a=o.getContext("2d");a.fillStyle="#f7edcd",a.fillRect(0,0,1024,256),a.strokeStyle=i,a.lineWidth=12,a.strokeRect(14,14,996,228),a.lineWidth=3,a.strokeRect(30,30,964,196),r&&this.drawIcon(a,r,i),a.fillStyle=i,a.font=`bold ${t.length>5?80:90}px "Noto Sans SC", "Microsoft YaHei", sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(t,r?600:512,128,r?730:920);const l=new jr(o);l.colorSpace=Ie;const c=new ie({map:l,roughness:.9,side:Ce});this.extraMaterials.add(c),this.box(n+.26,n*.25+.2,.18,this.m.darkWood,[e[0],e[1],e[2]-.04]),this.add(new qe(n,n*.25),c,[e[0],e[1],e[2]+.065])}drawIcon(t,e,n){if(t.save(),t.translate(158,128),t.scale(.65,.65),t.fillStyle=n,t.strokeStyle=n,t.lineWidth=14,e==="dress")t.beginPath(),t.moveTo(-35,-87),t.lineTo(-73,-32),t.lineTo(-47,-8),t.lineTo(-25,-29),t.lineTo(-66,86),t.lineTo(66,86),t.lineTo(25,-29),t.lineTo(47,-8),t.lineTo(73,-32),t.lineTo(35,-87),t.lineTo(18,-65),t.lineTo(-18,-65),t.closePath(),t.fill();else if(e==="potion")t.fillRect(-24,-92,48,23),t.beginPath(),t.moveTo(-20,-70),t.lineTo(-20,-20),t.bezierCurveTo(-98,55,-55,94,0,94),t.bezierCurveTo(55,94,98,55,20,-20),t.lineTo(20,-70),t.closePath(),t.stroke(),t.fillStyle="#ba73b1",t.beginPath(),t.ellipse(0,44,48,32,0,0,Math.PI*2),t.fill();else if(e==="sword")t.beginPath(),t.moveTo(-14,36),t.lineTo(-14,-60),t.lineTo(0,-98),t.lineTo(14,-60),t.lineTo(14,36),t.closePath(),t.fill(),t.fillRect(-57,30,114,16),t.fillRect(-10,46,20,55);else if(e==="heart")t.beginPath(),t.moveTo(0,78),t.bezierCurveTo(-145,-10,-48,-112,0,-42),t.bezierCurveTo(48,-112,145,-10,0,78),t.fill();else if(e==="carrot")t.fillStyle="#e77f3d",t.beginPath(),t.moveTo(-45,-42),t.lineTo(48,-40),t.lineTo(-8,99),t.closePath(),t.fill(),t.strokeStyle="#529153",t.beginPath(),t.moveTo(0,-40),t.lineTo(-30,-100),t.moveTo(0,-40),t.lineTo(18,-110),t.moveTo(0,-40),t.lineTo(52,-87),t.stroke();else if(e==="ram")t.beginPath(),t.ellipse(0,15,62,67,0,0,Math.PI*2),t.fill(),t.fillStyle="#f7edcd",t.beginPath(),t.arc(-20,0,8,0,Math.PI*2),t.arc(20,0,8,0,Math.PI*2),t.fill(),t.strokeStyle="#5d963c",t.beginPath(),t.moveTo(0,-48),t.quadraticCurveTo(-50,-110,-64,-72),t.moveTo(0,-48),t.quadraticCurveTo(48,-121,63,-83),t.stroke();else{t.beginPath();for(let i=0;i<10;i++){const r=-Math.PI/2+i*Math.PI/5,o=i%2?36:86;t.lineTo(Math.cos(r)*o,Math.sin(r)*o)}t.closePath(),t.fill()}t.restore()}fence(t,e,n=1.7,i=this.m.wood){const r=Math.hypot(e[0]-t[0],e[1]-t[1]),o=Math.ceil(r/3);for(let a=0;a<=o;a++){const l=a/o;this.box(.25,n,.25,i,[t[0]+(e[0]-t[0])*l,n/2,t[1]+(e[1]-t[1])*l])}for(const a of[n*.37,n*.78])this.beam([t[0],a,t[1]],[e[0],a,e[1]],.16,i)}pond(t,e,n,i){this.add(new Vi(1,56),this.water,[t,.015,e],[-Math.PI/2,0,0],[n,i,1]),this.block(t,e,n*1.68,i*1.68);for(let r=0;r<18;r++){const o=r/18*Math.PI*2;this.ball(.6+r%3*.13,this.rock,[t+Math.cos(o)*n,.08,e+Math.sin(o)*i],[1.3,.55,.9])}}lamp(t,e){const n=new Jr(16758373,0,14,2);n.position.set(t,3.9,e),this.group.add(n),this.lamps.push(n),this.cyl(.11,.16,3.8,this.m.iron,[t,1.9,e],8),this.box(.7,.9,.7,this.m.window,[t,4,e]),this.cyl(0,.65,.55,this.m.iron,[t,4.7,e],4),this.cyl(.48,.48,.15,this.m.iron,[t,3.5,e],4)}crate(t,e,n=1.25){this.box(n,n,n,this.m.wood,[t,n/2,e]);for(const i of[.15,n-.15])this.box(n+.1,.12,n+.1,this.m.darkWood,[t,i,e])}ownMesh(t){this.geometryResources.add(t.geometry),this.group.add(t)}moving(t,e,n){const i=this.group,r=this.batches;this.group=new re,this.batches=new Map,n(),this.flush();const o=this.group;o.position.set(-e[0],-e[1],-e[2]);const a=new re;return a.name=t,a.position.set(...e),a.add(o),i.add(a),this.group=i,this.batches=r,a}flush(){for(const[t,e]of this.batches){const n=e.map(r=>r.index?r.toNonIndexed():r),i=Bi(n,!1);if(i){if(t instanceof ie&&t.map===this.m.path.map){const o=i.attributes.position,a=i.attributes.uv;for(let l=0;l<o.count;l++)a.setXY(l,o.getX(l)/7,o.getZ(l)/7)}const r=new At(i,t);r.castShadow=t!==this.water,r.receiveShadow=!0,this.geometryResources.add(i),this.group.add(r)}new Set([...e,...n]).forEach(r=>r.dispose())}this.batches.clear()}dispose(){const t=new Set,e=new Set(this.extraMaterials);for(const n of Object.values(this.m))Array.isArray(n)?n.forEach(i=>e.add(i)):e.add(n);this.geometryResources.forEach(n=>n.dispose()),this.geometryResources.clear();for(const n of e){for(const i of Object.values(n))i instanceof Ue&&t.add(i);n.dispose()}t.forEach(n=>n.dispose()),this.group.clear()}}function UM(s){s.ground(9547633),s.path([0,38],[0,-32],9),s.path([-34,0],[34,0],7),s.cyl(7.4,7.4,.1,s.m.path,[0,0,0],40),s.ring(6.5,.14,s.white,[0,.08,0]),s.cyl(5.9,6.3,7.4,s.pink,[-18,3.7,-12],24),s.block(-18,-12,12,12),s.cyl(7.4,7.4,.55,s.red,[-18,7.5,-12],32),s.cyl(3.7,5.5,4,s.red,[-18,9.7,-12],24),s.cyl(3.8,4.2,.45,s.white,[-18,8.8,-12],24),s.ball(1.2,s.yellow,[-14.1,9.3,-8.8]),s.door(-18,-5.5),s.window(-21.5,3.5,-6.4,1.5,1.4),s.window(-14.5,3.5,-6.4,1.5,1.4),s.sign("丝尔特服装店",[-18,5.65,-5.3],9,"#a64a71","dress"),s.box(11,7,10,s.paint(11064269),[18,3.5,-14]),s.block(18,-14,11,10),s.roof(18,-14,13,12,7,4.5,s.blue),s.cyl(1.4,2.2,3.6,s.teal,[18,12.1,-14]),s.cyl(1.75,1.75,.7,s.yellow,[18,14.1,-14]),s.ball(.7,s.pink,[18,16,-14]),s.door(18,-8.8),s.window(14.2,3.6,-8.8,1.5,1.8),s.window(21.8,3.6,-8.8,1.5,1.8),s.sign("彩虹姐姐宠物店",[18,5.65,-8.3],10,"#416a93","ram"),s.box(11,6.5,8,s.m.stone,[-21,3.25,14]),s.block(-21,14,11,8),s.roof(-21,14,13,10,6.5,3.7,s.teal),s.box(1.8,6,1.8,s.m.stone,[-25,9,13]),s.door(-21,18.2),s.sign("摩尔道具店",[-21,4.9,18.6],8,"#5d6e65","sword"),s.box(10,5.7,8,s.paint(16043386),[22,2.85,15]),s.block(22,15,10,8),s.roof(22,15,12,10,5.7,3.6,s.red),s.door(22,19.2),s.sign("淘淘乐商店",[22,4.25,19.7],8,"#b56433","star");for(const t of[-5.7,5.7])for(const e of[-21,10,29])s.lamp(t,e);for(const[t,e]of[[-11,5],[11,5],[-31,-1],[31,-1]]){s.cyl(1.2,.9,1.15,s.m.lightStone,[t,.57,e]);for(let n=0;n<7;n++)s.ball(.36,n%2?s.pink:s.yellow,[t+Math.cos(n)*.7,1.5,e+Math.sin(n)*.7])}}function OM(s){s.ground(10269039),s.path([0,38],[0,-26],6),s.path([-30,5],[30,5],5),s.box(15,8,11,s.red,[-20,4,-22]),s.roof(-20,-22,17,13,8,5,s.red),s.block(-20,-22,15,11),s.box(6,5,.3,s.m.darkWood,[-20,2.5,-16.3]);for(const o of[-2.5,2.5])s.beam([-20+o,.4,-16.05],[-20-o,4.7,-16.05],.19,s.white);s.window(-20,9.2,-15.4,2,1.7),s.sign("梅森小屋",[-20,6.7,-16],8,"#8a3b29","carrot"),s.cyl(3,4.7,13,s.m.plaster,[20,6.5,-23]),s.cyl(0,4.2,6,s.red,[20,16,-23]),s.block(20,-23,9,9),s.cyl(5,5,.5,s.m.wood,[20,7,-23]),s.door(20,-18.6),s.sign("农场发明屋",[20,5.1,-18.2],7,"#715535","potion");const t=[20,11.4,-18.3];s.cyl(.75,.75,1,s.m.darkWood,t);const e=s.moving("windmill sails",t,()=>{for(let o=0;o<4;o++){const a=Math.PI/4+o*Math.PI/2;s.beam(t,[20+Math.sin(a)*9,11.4+Math.cos(a)*9,-18.3],.3,s.m.wood),s.box(1.7,5.5,.17,s.white,[20+Math.sin(a)*6.2,11.4+Math.cos(a)*6.2,-18.2],[0,0,-a])}});s.animations.push(o=>{e.rotation.z=o*.16});const n=s.paint(7885366),i=s.paint(7974479),r=s.paint(15109686);for(const o of[-1,1])for(const a of[13,-5]){const l=o*20;s.box(20,.1,12,n,[l,.01,a]);for(let c=0;c<4;c++)for(let h=0;h<7;h++){const u=l-8+h*2.6,d=a-4.2+c*2.8;s.box(.15,.13,11.4,s.m.wood,[u-1.2,.07,a]),o<0?(s.ball(.6,i,[u,.47,d],[1,.7,1]),s.ball(.35,s.leaf,[u,.85,d])):(s.ball(.68,r,[u,.54,d],[1,.8,1]),s.cyl(.07,.1,.35,s.leaf,[u,1.12,d],5))}}s.fence([-34,-31],[-6,-31]),s.fence([7,-34],[35,-34]),s.fence([-34,23],[-8,23]),s.fence([8,23],[34,23]);for(let o=0;o<5;o++)s.crate(-33+o*1.5,-11,1.3);s.cyl(1.4,1.4,2,s.m.wood,[32,1,-12]),s.sign("开心农场",[0,3,18],8,"#5a7841","carrot")}function FM(s){s.ground(11388796),s.path([0,38],[0,-28],6),s.path([0,-4],[-27,-4],5);const t=s.paint(15119203);s.box(18,7,13,t,[-20,3.5,-23]),s.roof(-20,-23,20,15,7,5.5,s.red),s.block(-20,-23,18,13),s.box(7,5.2,.25,s.red,[-20,2.6,-16.2]),s.beam([-23,.3,-16],[-17,4.8,-16],.24,s.white),s.beam([-17,.3,-16],[-23,4.8,-16],.24,s.white),s.sign("阳光牧场",[-20,7,-15.7],9,"#a35c2a","star"),s.cyl(3.2,3.2,12,s.paint(11845568,s.m.stone),[-34,6,-24]),s.cyl(0,3.6,4,s.teal,[-34,14,-24]),s.block(-34,-24,6.5,6.5);for(const e of[[8,-31,36,-31],[36,-31,36,4],[8,4,26,4],[-35,7,-8,7],[-35,7,-35,26],[-35,26,-8,26]])s.fence([e[0],e[1]],[e[2],e[3]],1.8,s.white);s.pond(23,21,10,7);for(const[e,n,i]of[[14,-20,0],[27,-13,0],[20,-5,1],[-22,16,1],[-14,21,1]]){const r=i?s.white:s.m.plaster;s.ball(i?1.25:1.5,r,[e,1.8,n],[1.5,1,.8]),s.ball(.72,i?s.m.darkWood:s.white,[e+1.8,2.2,n]);for(const o of[-.8,.8])for(const a of[-.5,.5])s.cyl(.14,.12,1.5,s.m.darkWood,[e+o,.75,n+a],6);i||(s.ball(.45,s.m.darkWood,[e-.3,2.65,n+.7],[1,.3,1]),s.beam([e+1.7,2.6,n-.45],[e+1.6,3.1,n-.7],.1,s.white))}for(const[e,n]of[[-29,-9],[-25,-8],[32,-26]])s.cyl(1.6,1.6,2,s.yellow,[e,1,n],16),s.ring(1.6,.08,s.m.wood,[e,1,n]);s.box(5,1,2,s.m.wood,[12,.5,8]),s.block(12,8,5,2),s.box(4.5,.12,1.5,s.water,[12,1.03,8])}function Fs(s,t,e,n,i=!1){s.block(t,e,n*.34,n*.34),s.heroTrees.push({x:t,z:e,scale:n*.33})}function ff(s,t,e,n,i=s.mushroomCap){s.cyl(n*.16,n*.22,n,s.white,[t,n*.5,e],10),s.ball(n*.75,i,[t,n*1.14,e],[1,.48,1]);for(let r=0;r<4;r++){const o=r*1.6;s.ball(n*.12,s.white,[t+Math.sin(o)*n*.43,n*1.43,e+Math.cos(o)*n*.43],[1,.25,1])}}function kM(s){s.ground(6592364),s.path([0,38],[0,7],5),s.path([0,7],[-15,-23],4),Fs(s,-23,-24,7.5),Fs(s,24,-27,6.5),Fs(s,-34,14,4.7),s.path([9,37],[9,9],5.2,s.water),s.path([9,9],[21,-7],5.2,s.water),s.path([21,-7],[36,-33],5.2,s.water),s.block(9,23,5.1,28);for(let n=0;n<8;n++){const i=1-n*4.6,r=15+n*2.9;s.block(r,i,7,7)}for(let n=0;n<11;n++)s.box(.8,.22,4.5,s.m.wood,[5+n*.75,.16,6]);for(const n of[3.6,8.4]){s.beam([4.5,1.5,n],[13.5,1.5,n],.18);for(const i of[4.5,9,13.5])s.box(.18,1.8,.18,s.m.wood,[i,.9,n])}const t=s.paint(12076917),e=s.paint(5465783);for(let n=0;n<17;n++){const i=n<9?-10-n%3*6:18+n%3*6,r=n<9?8+Math.floor(n/3)*7:12+Math.floor((n-9)/3)*6;s.heroTrees.push({x:i,z:r,scale:.33});for(let o=0;o<5;o++){const a=o*2.4;s.ball(.33,n%2?t:e,[i+Math.sin(a)*1.25,1.6+o%2*.45,r+Math.cos(a)*1.25])}}for(const[n,i,r]of[[-6,-10,2.3],[-9,-7,1.4],[29,3,2.8],[32,6,1.7],[-31,25,2]])ff(s,n,i,r);s.sign("浆果丛林",[-8,3.5,20],8,"#47775d","star")}function BM(s){s.ground(14937585,!0),s.path([0,38],[0,-11],7,s.paint(12900575));const t=s.paint(15922677);if(!s.sharedTerrain){const e=new qe(210,110,130,90);e.rotateX(-Math.PI/2),e.translate(0,0,-101);const n=e.attributes.position,i=e.attributes.uv,r=(_,m,p)=>{const x=Je.clamp((p-_)/(m-_),0,1);return x*x*(3-2*x)},o=(_,m,p,x,M,v,b)=>b*Math.exp(-(((_-p)/M)**2+((m-x)/v)**2)),a=(_,m)=>{const p=1-Math.abs(Math.sin(_*.113+Math.sin(m*.067)*1.9)*Math.cos(m*.097+Math.sin(_*.042))),x=1-Math.abs(Math.sin(_*.29+m*.17+Math.sin(m*.11))),M=Math.sin(_*.73+m*.52)*Math.cos(m*.61-_*.21);return p*6.5+x*2.7+M*.75};for(let _=0;_<n.count;_++){const m=n.getX(_),p=n.getZ(_),x=Math.max(o(m,p,-43,-88,26,31,47),o(m,p,1,-109,31,32,59),o(m,p,51,-90,28,29,48)),M=r(0,23,-p-47),v=(1-r(81,105,Math.abs(m)))*(1-r(143,156,-p)),b=M*v*Math.max(0,x+a(m,p)*Math.min(1,x/18)-3);n.setY(_,ia(m,p)+b+.04),i.setXY(_,m/18,p/18)}e.computeVertexNormals();const l=e.attributes.normal,c=[],h=new mt(6713723),u=new mt(15331569),d=new mt(14017255);for(let _=0;_<n.count;_++){const m=n.getX(_),p=n.getY(_),x=n.getZ(_),M=Math.abs(l.getY(_)),v=Math.sin(m*1.13+x*.91)*Math.sin(x*.83-m*.43),b=Je.clamp(r(20,39,p)*.93+(M-.65)*.6+v*.1-(1-M)*.4,0,1),A=h.clone().lerp(u,b).multiplyScalar(.94+v*.055);A.lerp(d,1-r(0,10,-x-47)),c.push(A.r,A.g,A.b)}e.setAttribute("color",new Xt(c,3));const f=s.paint(16777215);f.vertexColors=!0,f.roughness=1,f.bumpMap=s.m.stone.bumpMap,f.bumpScale=.14;const g=new At(e,f);g.name="sculpted alpine ridge",g.castShadow=g.receiveShadow=!0,s.ownMesh(g)}s.box(15,6,11,s.m.wood,[-22,3,0]),s.roof(-22,0,18,14,6,5,s.m.darkWood),s.roof(-22,0,18.3,14.3,6.25,5,t),s.block(-22,0,16,12);for(let e=0;e<9;e++)for(const n of[-5.65,5.65])s.box(15.4,.4,.45,s.m.wood,[-22,.5+e*.6,n]);s.door(-22,5.8),s.window(-27,3.7,5.8),s.window(-17,3.7,5.8),s.sign("摩尔拉雅山",[-22,6.1,7.3],10,"#486a82","star");for(const[e,n,i]of[[13,17,7],[17,-5,11],[21,-26,16]])s.beam([e-2,0,n],[e-1.5,i,n],.35,s.m.iron),s.beam([e+2,0,n],[e+1.5,i,n],.35,s.m.iron),s.box(7,.4,.6,s.red,[e,i,n]),s.block(e,n,5,1.2);for(const e of[-2.5,2.5])s.beam([13+e,7.5,17],[21+e,16.5,-26],.085,s.m.iron);for(let e=0;e<5;e++){const n=(e+.4)/5,i=13+n*8+2.5,r=17-n*43,o=7.5+n*9;s.beam([i,o,r],[i,o-2,r],.1,s.m.iron),s.box(2.5,.22,1.3,s.red,[i,o-2,r]),s.box(2.5,1,.15,s.blue,[i,o-1.5,r-.5])}s.path([2,17],[2,-25],9,t);for(let e=0;e<7;e++)for(const n of[-1,1]){const i=12-e*5.5;s.box(.1,2.6,.1,s.m.iron,[n*6,1.3,i]),s.box(1.5,.8,.08,e%2?s.blue:s.red,[n*6+.7,2,i])}for(const e of[-11,-8])s.box(.25,.12,5,s.red,[e,.12,13],[0,.22,0]);s.sign("滑雪场",[19,3,24],6,"#426681")}function zM(s){s.ground(9876899),s.path([0,38],[0,4],6),s.path([0,4],[-26,-14],5),s.pond(17,-15,27,22),s.collisions.pop();for(let t=0;t<27;t++)s.box(5.4,.2,.75,s.m.wood,[5,.8,9-t*.75]);for(const t of[2.1,7.9])for(const e of[9,2,-5,-12])s.cyl(.16,.22,2,s.m.wood,[t,.65,e],8),s.ball(.25,s.white,[t,1.75,e]);s.box(11,.25,6,s.m.wood,[5,.85,-13]),s.box(5.4,.18,5.3,s.m.wood,[5,.38,11.5],[Math.atan(.9/5),0,0]),s.cyl(2.6,4.1,17,s.white,[-26,8.5,-25],24),s.cyl(3,3.3,3,s.red,[-26,11,-25],24),s.block(-26,-25,8.5,8.5),s.cyl(4,4,.6,s.m.stone,[-26,17.2,-25],24),s.cyl(2.7,2.7,3,s.m.window,[-26,18.8,-25],16);for(let t=0;t<8;t++){const e=t*Math.PI/4;s.box(.14,3.2,.14,s.m.iron,[-26+Math.sin(e)*2.7,18.8,-25+Math.cos(e)*2.7])}s.cyl(.2,3.7,3.2,s.red,[-26,21.8,-25],16),s.door(-26,-20.8,3.5),s.box(13,5.7,9,s.paint(10996164),[-24,2.85,3]),s.roof(-24,3,15,11,5.7,4,s.blue),s.block(-24,3,13,9),s.door(-24,7.8,3,4),s.sign("神秘湖船屋",[-24,4.35,8.3],9,"#446f87"),s.ball(2.3,s.red,[10.5,.4,-10],[.7,.37,1.9]),s.ball(1.9,s.m.darkWood,[10.5,.7,-10],[.67,.15,1.9]);for(const t of[-12,-10,-8])s.box(2.5,.15,.55,s.m.wood,[10.5,.9,t]);s.beam([8.5,1,-11],[13,1,-8],.1),s.box(.5,.12,1.2,s.m.wood,[13,1,-8],[0,-.8,0]),s.sign("神秘湖",[-5,3,20],7,"#3e7387")}function VM(s){s.ground(10469243),s.path([0,38],[0,-17],7),s.cyl(12,12,.1,s.m.path,[0,0,0],48);const t=s.paint(15916976),e=s.paint(7381318);s.box(23,8,12,t,[0,4,-24]),s.block(0,-24,23,12),s.roof(0,-24,27,15,8,7,e);for(const n of[-17,17])s.cyl(4.5,5,6.5,t,[n,3.25,-20],18),s.block(n,-20,10,10),s.add(new Nn(6,16,10,0,Math.PI*2,0,Math.PI/2),e,[n,6.5,-20],void 0,[1.1,1,1]),s.ball(2.4,s.leaf,[n+(n<0?-2:2),12.1,-20],[1.7,.32,.7]);s.beam([0,14,-24],[0,19,-24],.35,s.leaf),s.ball(2.1,e,[-2,18,-24],[1.5,.35,.7]),s.ball(2.1,s.leaf,[2,19,-24],[1.5,.35,.7]),s.door(0,-17.7,4,3);for(const n of[-8,-4.5,4.5,8])s.window(n,3.6,-17.7,1.8,2.6);s.sign("拉姆学院",[0,6.6,-17.4],10,"#5b813d","ram"),s.cyl(2.8,3.2,.5,s.m.lightStone,[0,.25,0]),s.ball(1.7,s.pink,[0,2.1,0],[1,1.2,1]);for(const n of[-.65,.65])s.ball(.19,s.m.darkWood,[n,2.5,1.45]);s.beam([0,3.7,0],[0,4.8,0],.18,s.leaf),s.ball(.8,s.leaf,[-.6,4.8,0],[1.5,.3,.7]),s.block(0,0,6.3,6.3);for(const n of[-23,23]){s.box(6,.25,1.4,s.m.wood,[n,1.1,6]);for(const i of[-2,2])s.box(.3,1,.8,s.m.darkWood,[n+i,.5,6])}for(const n of[-24,-15])s.beam([n,0,19],[n+.6,5,19],.2,s.teal);s.beam([-23.4,5,19],[-14.4,5,19],.2,s.teal);for(const n of[-21,-17]){for(const i of[-.8,.8])s.beam([n+i,4.9,19],[n+i,1.3,19],.06,s.m.iron);s.box(2,.15,1,s.red,[n,1.3,19])}for(const[n,i]of[[18,16],[24,21],[29,13]])s.cyl(1.7,1.7,.35,s.yellow,[n,.17,i],20),s.ring(1.3,.12,s.white,[n,.38,i])}function HM(s,t,e){s.cyl(4.8,5.2,.65,s.m.lightStone,[t,.32,e],40),s.cyl(4.3,4.3,.12,s.water,[t,.7,e],40),s.cyl(.7,1,3,s.m.stone,[t,1.8,e]),s.cyl(2.2,.8,.5,s.m.lightStone,[t,3.5,e],28),s.ball(.6,s.m.gold,[t,4.3,e]),s.block(t,e,10.2,10.2)}function GM(s){s.ground(10861958),s.path([0,38],[0,-26],7),s.path([-28,4],[29,4],6),HM(s,0,5);const t=s.paint(15916987);s.box(16,10,17,t,[-17,5,-24]),s.roof(-17,-24,18,20,10,7,s.red),s.block(-17,-24,16,17),s.box(6,20,6,t,[-17,10,-12]),s.roof(-17,-12,7.5,7.5,20,6,s.red),s.block(-17,-12,6,6),s.box(.28,4,.28,s.m.gold,[-17,27,-12]),s.box(2.4,.3,.3,s.m.gold,[-17,27.6,-12]),s.door(-17,-8.8,4,2.8),s.window(-17,16,-8.8,2,2.5),s.ring(1.5,.21,s.m.lightStone,[-17,9.5,-8.7],[0,0,0]),s.cyl(.7,.9,.9,s.m.gold,[-17,16,-12],12),s.sign("爱心教堂",[-17,6.3,-8.5],9,"#a96264","heart"),s.box(17,7,12,s.paint(15784145),[22,3.5,-18]),s.roof(22,-18,19,14,7,4.5,s.red),s.block(22,-18,17,12),s.box(3.1,4,.25,s.white,[22,8.6,-10.9]),s.box(.55,2.8,.35,s.red,[22,8.6,-10.7]),s.box(2.2,.55,.35,s.red,[22,8.6,-10.7]),s.door(22,-11.7),s.window(16,4,-11.7),s.window(28,4,-11.7),s.sign("爱心医院",[22,5.8,-11.3],8,"#aa5550"),s.box(11,5,8,s.paint(14272684),[24,2.5,17]),s.roof(24,17,13,10,5,3.8,s.teal),s.block(24,17,11,8),s.door(24,21.2),s.sign("爱心福利社",[24,5,21.5],8,"#4f7f76");for(const[e,n]of[[-25,9],[-25,19],[-14,19],[10,22]]){s.box(4,.6,3,s.m.lightStone,[e,.3,n]);for(let i=0;i<12;i++)s.ball(.3,i%2?s.red:s.pink,[e-1.4+i%4*.9,.9,n-.7+Math.floor(i/4)*.7])}for(const e of[-7,7])s.lamp(e,22)}function WM(s){s.ground(10265719),s.path([0,38],[0,-35],8),s.path([-32,-5],[32,-5],5);const t=s.paint(10713676,s.m.wood),e=s.paint(6195088);for(const n of[-14,14]){for(const i of[-3,3])for(const r of[-3,3])s.beam([n+i*1.2,0,-20+r*1.2],[n+i,12,-20+r],.65,t);s.box(8.5,.7,8.5,s.m.darkWood,[n,10,-20]),s.box(8,2.7,8,t,[n,11.6,-20]),s.roof(n,-20,10,10,13,4,s.red);for(const i of[-23,-17])for(let r=-2;r<=2;r+=2)s.box(.9,1.5,.8,s.m.darkWood,[n+r,12.5,i]);s.block(n,-20,8.5,8.5),s.beam([n-2.5,.1,-15.7],[n-2.5,10,-15.7],.2),s.beam([n-1,.1,-15.7],[n-1,10,-15.7],.2);for(let i=.5;i<10;i+=.8)s.beam([n-2.5,i,-15.7],[n-1,i,-15.7],.12)}s.box(20,2.5,3,t,[0,10,-20]),s.roof(0,-20,22,5,11.3,3,s.red),s.sign("前哨站",[0,10.2,-17.9],9,"#675735","sword");for(const n of[-1,1])for(let i=21;i<=44;i+=1.2)s.cyl(.42,.53,5.5,t,[n*i,2.75,-20],6),s.cyl(0,.42,1.2,t,[n*i,6.1,-20],6);s.block(-32,-20,25,1.4),s.block(32,-20,25,1.4);for(const n of[-24,24]){const i=new aa;i.moveTo(-5,0),i.lineTo(0,5),i.lineTo(5,0),i.closePath(),s.add(new Kr(i,{depth:9,bevelEnabled:!1}),e,[n,0,4]),s.block(n,8,10,9),s.box(.2,5.8,.2,s.m.wood,[n,2.9,4])}s.cyl(2.3,2.5,.4,s.m.stone,[0,.2,-5]);for(let n=0;n<7;n++)s.ball(.35,s.m.stone,[Math.sin(n)*2.1,.4,-5+Math.cos(n)*2.1]);for(let n=0;n<4;n++)s.beam([-1.1,.6,-6+n*.5],[1.1,.6,-4+n*.2],.28,s.m.wood);for(const[n,i]of[[-32,21],[-30,22],[29,-7],[31,-5]])s.crate(n,i,1.8)}function XM(s){s.ground(5072219),s.path([0,38],[0,5],5,s.paint(9144950,s.m.path)),s.path([0,5],[0,-18],4,s.m.stone),Fs(s,0,-29,10.2,!0),Fs(s,-34,-5,6.5,!0),Fs(s,35,-18,6.5,!0),s.box(4.8,6.3,.35,s.m.darkWood,[0,3.15,-22.2]),s.ring(2.55,.45,s.m.bark,[0,5.3,-22],[0,0,0]);const t=s.paint(5401424,s.m.stone),e=s.paint(8435886);for(const n of[-8.5,8.5]){s.box(2.8,8,3.3,t,[n,4,-8]),s.box(3.5,.7,3.8,s.m.stone,[n,8,-8]),s.block(n,-8,3.5,4);for(let i=2;i<7;i+=1.6)s.box(.7,.35,.05,e,[n,i,-6.3],[0,0,i*.7])}for(let n=0;n<=12;n++){const i=n/12*Math.PI;s.box(1.5,2,3,t,[Math.cos(i)*8.5,7+Math.sin(i)*5,-8],[0,0,i-Math.PI/2])}for(let n=0;n<15;n++){const i=n*2.399,r=Math.sin(i)*(17+n%3*5),o=10+Math.cos(i)*12;s.box(1.6,1.8+n%3,1.3,t,[r,.7,o],[.15,i,.2]),n%3===0&&ff(s,r+2,o+1,1.7,e)}s.sign("黑森林入口",[-13,3,23],9,"#42665d");for(const n of[-5,5])s.cyl(.35,.6,3,t,[n,1.5,-1]),s.ball(.6,e,[n,3.3,-1])}function qM(s){s.ground(11387274),s.path([0,38],[0,-30],8),s.path([-32,4],[32,4],7);const t=s.paint(10060213),e=s.paint(14114923),n=s.paint(16770485),i=-21,r=14,o=-18,a=11.5;for(const u of[-5,5])s.beam([i+u,0,o-3],[i,r,o],.65,s.teal),s.beam([i+u,0,o+3],[i,r,o],.65,s.teal);const l=[],c=s.moving("ferris wheel",[i,r,o],()=>{for(const u of[o-.65,o+.65]){s.ring(a,.23,s.white,[i,r,u],[0,0,0]);for(let d=0;d<8;d++){const f=d/8*Math.PI*2;s.beam([i,r,u],[i+Math.sin(f)*a,r+Math.cos(f)*a,u],.13,s.yellow)}}s.ball(1.2,e,[i,r,o],[1,1,.6]);for(let u=0;u<8;u++){const d=u/8*Math.PI*2,f=i+Math.sin(d)*a,g=r+Math.cos(d)*a-1.6;l.push(s.moving(`gondola ${u+1}`,[f,g+1.6,o],()=>{s.box(2.6,1.7,2.6,[e,s.blue,s.yellow,t][u%4],[f,g,o]),s.cyl(0,2,1.3,n,[f,g+2.3,o],8);for(const _ of[-1,1])s.box(.1,1.7,.1,s.m.gold,[f+_,g+1.4,o])}))}});s.animations.push(u=>{c.rotation.z=-u*.065,l.forEach(d=>{d.rotation.z=u*.065})}),s.block(i,o,12,8);const h=s.moving("carousel",[21,0,-13],()=>{s.cyl(8.2,8.7,.7,t,[21,.35,-13],32),s.cyl(.5,.65,8,s.m.gold,[21,4.5,-13]),s.block(21,-13,17,17);const u=new Ei(9.5,5,16,1),d=u.attributes.position,f=[];for(let m=0;m<d.count;m++){const p=Math.atan2(d.getZ(m),d.getX(m)),x=new mt(Math.floor((p+Math.PI)/Math.PI*8)%2?14114923:16770485);f.push(x.r,x.g,x.b)}u.setAttribute("color",new Xt(f,3));const g=s.paint(16777215);g.vertexColors=!0;const _=new At(u,g);_.position.set(21,10,-13),_.castShadow=!0,s.ownMesh(_),s.cyl(.1,.1,2.5,s.m.gold,[21,13.7,-13]),s.ball(.55,s.yellow,[21,15,-13]);for(let m=0;m<6;m++){const p=m*Math.PI/3,x=21+Math.cos(p)*5.8,M=-13+Math.sin(p)*5.8;s.cyl(.08,.08,7.5,s.m.gold,[x,4.3,M],6),s.ball(1,m%2?n:s.pink,[x,2.6,M],[1.5,.65,.65]),s.ball(.5,n,[x+1.15,3.5,M]),s.beam([x+.8,2.6,M],[x+1.1,3.5,M],.4,s.white);for(const v of[-.8,.8])s.beam([x+v,2.4,M],[x+v-.3,1.3,M],.18,s.white)}});s.animations.push(u=>{h.rotation.y=u*.12}),s.box(8,4,7,n,[-24,2,14]),s.roof(-24,14,10,9,4,3,e),s.block(-24,14,8,7),s.window(-24,2.1,17.7,5,2),s.sign("西部游乐场",[-24,4.5,18.8],9,"#9e536a","star");for(const u of[-7,7])s.cyl(.25,.35,7,e,[u,3.5,24]),s.ball(1.3,s.yellow,[u,7.3,24]);s.box(15,1.6,1.1,e,[0,6.1,24]),s.sign("快乐出发",[0,6.5,24.7],8,"#a55268")}function YM(s){const t={"taotao-street":[[18,-14,11,10,7],[-21,14,11,8,6.5],[22,15,10,8,5.7]],"love-church":[[-17,-24,16,17,10],[22,-18,17,12,7],[24,17,11,8,5]],"happy-farm":[[-20,-22,15,11,8]],"sunshine-ranch":[[-20,-19,17,12,8]],"ram-academy":[[0,-24,23,12,8]],"mystery-lake":[[-24,3,13,9,5.7]],"amusement-park":[[-24,14,8,7,4]]};for(const[e,n,i,r,o]of t[s.id]??[]){s.box(i+.3,.45,r+.3,s.m.stone,[e,.18,n]),s.box(i+.6,.25,r+.6,s.m.lightStone,[e,o-.2,n]);for(const a of[-1,1]){for(let l=.8;l<o-.4;l+=.85)s.box(.55,.36,.4,s.m.lightStone,[e+a*(i/2-.14),l,n+r/2+.04]),s.box(.4,.36,.85,s.m.lightStone,[e+a*(i/2+.025),l,n+r/2-.25]);s.box(.15,o-.6,.2,s.m.darkWood,[e+a*(i/2-1),o/2,n+r/2+.12]);for(const l of[-r*.23,r*.23])s.box(.16,2.3,1.65,s.m.darkWood,[e+a*(i/2+.04),3,n+l]),s.box(.19,1.95,1.3,s.m.window,[e+a*(i/2+.08),3,n+l]),s.box(.22,.09,1.4,s.white,[e+a*(i/2+.12),3,n+l]),s.box(.35,.16,1.9,s.m.lightStone,[e+a*(i/2+.1),1.87,n+l])}s.box(i-.4,.18,.28,s.m.wood,[e,1.15,n+r/2+.18]),s.box(i+.3,.15,.4,s.m.darkWood,[e,o-.65,n+r/2+.12]);for(const a of[-i*.34,i*.34]){s.box(2,.5,.8,s.m.wood,[e+a,1.35,n+r/2+.5]);for(let l=0;l<5;l++)s.ball(.3,s.leaf,[e+a-.8+l*.4,1.7,n+r/2+.5],[1,1.1,.8]),s.ball(.16,l%2?s.pink:s.yellow,[e+a-.8+l*.4,1.97,n+r/2+.5])}s.box(1.1,3.3,1.1,s.m.stone,[e-i*.28,o+2,n-r*.22]),s.box(1.35,.22,1.35,s.red,[e-i*.28,o+3.7,n-r*.22])}if(s.id==="taotao-street"){for(const e of[-27,29])for(const n of[-4,29]){s.box(4,.22,1.15,s.m.wood,[e,1.05,n]),s.box(4,1.1,.18,s.m.darkWood,[e,1.65,n-.48]);for(const i of[-1.5,1.5])s.box(.2,1,.7,s.m.iron,[e+i,.5,n])}for(let e=0;e<10;e++){const n=-30+e*6.6,i=7.7-Math.sin(e/9*Math.PI)*1.6;s.beam([n,i,-1],[n+6.6,7.7-Math.sin(Math.min(9,e+1)/9*Math.PI)*1.6,-1],.035,s.m.iron),e<9&&s.add(new Ei(.4,.8,3),[s.red,s.blue,s.yellow,s.teal][e%4],[n+1.3,i-.45,-1],[0,0,Math.PI])}}}const jM={"taotao-street":{name:"淘淘乐街",description:"地图原型 · 服装店、宠物店与道具店围绕彩石广场。",build:UM,camera:[38,22,48]},"happy-farm":{name:"开心农场",description:"地图原型 · 风车、红谷仓与分区菜田。",build:OM},"sunshine-ranch":{name:"阳光牧场",description:"地图原型 · 牧场围栏、谷仓与饮水池。",build:FM},"berry-jungle":{name:"浆果丛林",description:"地图原型 · 巨树、浆果灌木与溪流木桥。",build:kM,camera:[40,28,47]},"moraya-mountain":{name:"摩尔拉雅山",description:"地图原型 · 雪山、缆车与滑雪木屋。",build:BM,camera:[44,34,53],target:[0,9,-12]},"mystery-lake":{name:"神秘湖",description:"地图原型 · 湖面码头、灯塔与停泊的小船。",build:zM},"ram-academy":{name:"拉姆学院",description:"地图原型 · 叶顶学堂、拉姆雕像与游乐庭院。",build:VM},"love-church":{name:"爱心教堂",description:"地图原型 · 红顶教堂、喷泉与爱心医院。",build:GM},outpost:{name:"前哨站",description:"地图原型 · 木制关门、瞭望塔与骑士营地。",build:WM},"black-forest":{name:"黑森林",description:"地图原型 · 古树树洞、遗迹拱门与幽暗林地。",build:XM,camera:[41,31,49],target:[0,7,-10]},"amusement-park":{name:"西部游乐场",description:"地图原型 · 摩天轮、旋转木马与彩色售票亭。",build:qM,camera:[43,33,53]}};function Hu(s,t){return s>=-.5&&s<=10.5&&t>=-16&&t<=-10?.975:s>=2.3&&s<=7.7&&t>=-10&&t<=9?.9:s>=2.3&&s<=7.7&&t>9&&t<14?.9*(14-t)/5:null}function ZM(s,t=!1){const e=jM[s];if(!e)return null;const n=new NM(s,t);e.build(n),YM(n),n.flush(),n.animations.push(a=>{n.water.roughness=.25+Math.sin(a*.7)*.035});const i=s==="mystery-lake"?(a,l)=>Hu(a,l)??ia(a,l):ia,r=s==="mystery-lake"?(a,l)=>Hu(a,l)!==null||((a-17)/27)**2+((l+15)/22)**2>=1:void 0,o={group:n.group,camera:e.camera??[40,29,49],target:e.target??[0,5,-9],spawn:[0,30],bounds:46,heightAt:i,canMove:r,heroTrees:n.heroTrees,collisions:n.collisions,name:e.name,description:e.description,update:(a,l,c=1,h=0,u=0)=>{n.m.window.emissiveIntensity=.12+(1-c)*2;for(const d of n.lamps)d.visible=c<.9&&Math.hypot(d.position.x-h,d.position.z-u)<32,d.intensity=(1-c)*8;for(const d of n.animations)d(a,l)}};return IM.set(o,n),o}class KM{group=new re;vegetation=new fa(8417);materials=da();terrainTiles=[];lights=[];constructor(){this.group.name="connected-world-landscape";const t=new ie({vertexColors:!0,roughness:1,bumpMap:this.materials.ground.bumpMap,bumpScale:.1});t.bumpMap=t.bumpMap.clone(),t.bumpMap.repeat.setScalar(1);const e=new mt(6456137),n=new mt(8097619),i=new mt(4545347),r=new mt(14280427),o=new mt(6846336);for(let a=Te.minX;a<Te.maxX;a+=120)for(let l=Te.minZ;l<Te.maxZ;l+=120){const c=Math.min(120,Te.maxX-a),h=Math.min(120,Te.maxZ-l),u=new qe(c,h,Math.ceil(c/3),Math.ceil(h/3));u.rotateX(-Math.PI/2),u.translate(a+c/2,0,l+h/2);const d=u.attributes.position,f=u.attributes.uv,g=[];for(let m=0;m<d.count;m++){const p=d.getX(m),x=d.getZ(m),M=Ar(p,x);d.setY(m,M),f.setXY(m,p/3,x/3);const v=(Math.sin(p*.073+Math.sin(x*.057))*Math.cos(x*.052)+1)*.5,b=e.clone().lerp(n,v*.5),A=1-rn(54,145,Math.hypot(p,(x+202)*.7)),C=Math.max(1-rn(35,135,Math.hypot(p+360,x+180)),(1-rn(35,100,Math.hypot(p-180,x-180)))*.6);b.lerp(i,C*.6).lerp(r,A);const L=fc(p,x);L>7&&b.lerp(o,rn(7,24,L)*(1-rn(38,49,L))).lerp(r,rn(31,51,L)),b.multiplyScalar(.95+Math.sin(p*2.31+x*3.78)*.035),g.push(b.r,b.g,b.b)}u.setAttribute("color",new Xt(g,3)),u.computeVertexNormals();const _=new At(u,t);_.name="shared terrain tile",_.receiveShadow=!0,this.group.add(_),this.terrainTiles.push(_)}this.buildRoads(),this.plantCountryside(),this.group.add(this.vegetation.group)}buildRoads(){const t=this.materials.path.clone();t.map=t.map.clone(),t.map.repeat.setScalar(1),t.bumpMap=t.bumpMap.clone(),t.bumpMap.repeat.setScalar(1),t.polygonOffset=!0,t.polygonOffsetFactor=-1;const e=this.materials.lightStone,n=[],i=[],r=[];for(const l of Yr){for(let h=1;h<l.points.length;h++){const u=l.points[h-1],d=l.points[h],f=d[0]-u[0],g=d[1]-u[1],_=Math.hypot(f,g),m=-g/_,p=f/_,x=Math.ceil(_/2.5),M=n.length/3;for(let v=0;v<=x;v++)for(const b of[-1,1]){const A=u[0]+f*v/x+m*b*2.7,C=u[1]+g*v/x+p*b*2.7;n.push(A,Re(A,C)+.045,C),i.push(b<0?0:1,v/x*_/5.4)}for(let v=0;v<x;v++){const b=M+v*2;r.push(b,b+1,b+2,b+1,b+3,b+2)}}for(const h of[0,l.points.length-1]){const u=l.points[h],d=l.points[h===0?1:h-1],f=d[0]-u[0],g=d[1]-u[1],_=Math.hypot(f,g),m=u[0]+f/_*18-g/_*4.8,p=u[1]+g/_*18+f/_*4.8;this.signpost(m,p,si[h===0?l.b:l.a].name,Math.atan2(f,g))}const c=l.points;for(let h=1;h<c.length;h++){const u=c[h-1],d=c[h],f=Math.hypot(d[0]-u[0],d[1]-u[1]);if(f<35)continue;const g=(u[0]+d[0])/2-(d[1]-u[1])/f*4.5,_=(u[1]+d[1])/2+(d[0]-u[0])/f*4.5;this.lantern(g,_)}}const o=new pe;o.setAttribute("position",new Xt(n,3)),o.setAttribute("uv",new Xt(i,2)),o.setIndex(r),o.computeVertexNormals();const a=new At(o,t);a.name="continuous inter-district roads",a.receiveShadow=!0,this.group.add(a);for(const l of[-1,1]){const c=new At(new Qe(31,.12,.18),e);c.position.set(l*29,.04,13.85),this.group.add(c)}}signpost(t,e,n,i){const r=new re;r.position.set(t,Re(t,e),e),r.rotation.y=i;const o=new At(new Xe(.13,.19,3.1,8),this.materials.darkWood);o.position.y=1.55,o.castShadow=!0,r.add(o);const a=document.createElement("canvas");a.width=768,a.height=192;const l=a.getContext("2d");l.fillStyle="#384d43",l.fillRect(0,0,768,192),l.strokeStyle="#d9c28a",l.lineWidth=5,l.strokeRect(9,9,750,174),l.font="bold 67px sans-serif",l.fillStyle="#f7e4b8",l.textAlign="center",l.textBaseline="middle",l.fillText(`${n} →`,384,99,715);const c=new jr(a);c.colorSpace=Ie;const h=new At(new Qe(4,.99,.16),this.materials.wood);h.position.y=2.7,r.add(h);const u=new At(new qe(3.94,.94),new ie({map:c,roughness:.9,side:Ce}));u.position.set(0,2.7,.087),r.add(u);const d=u.clone();d.rotation.y=Math.PI,d.position.z=-.087,r.add(d),this.group.add(r)}lantern(t,e){const n=Re(t,e),i=new re;i.position.set(t,n,e);const r=new At(new Xe(.08,.14,3.7,7),this.materials.iron);r.position.y=1.85,i.add(r);const o=new At(new Ei(.55,.6,4),this.materials.iron);o.position.y=4.4,i.add(o);const a=new At(new Qe(.45,.7,.45),this.materials.window);a.position.y=3.8,i.add(a);const l=new Jr(16760174,0,17,2);l.position.y=3.8,i.add(l),this.lights.push(l),this.group.add(i)}plantCountryside(){const t=rr(494);let e=0;for(let l=0;l<2100&&e<230;l++){const c=-470+t()*940,h=-365+t()*675,u=Nr(c,h),d=Math.max(Math.abs(c-u.worldPosition[0]),Math.abs(h-u.worldPosition[2]));if(Hi.some(_=>Math.hypot(c-_.position[0],h-_.position[1])<35)||d<48||xi(c,h)<6||fc(c,h)>8)continue;const f=Re(c,h);if(f<-.5)continue;const g=h<-135&&Math.abs(c)<105;this.vegetation.addTree(c,f,h,.8+t()*.9,g?"pine":l%5===0?"birch":"oak"),e++,!g&&e%3===0&&this.vegetation.addMeadow(c+2,f,h+2,3.6,24)}for(const l of Yr)for(let c=1;c<l.points.length;c++){const h=l.points[c-1],u=l.points[c],d=Math.hypot(u[0]-h[0],u[1]-h[1]);for(let f=10;f<d;f+=10)for(const g of[-1,1]){const _=h[0]+(u[0]-h[0])*f/d-(u[1]-h[1])/d*g*5.8,m=h[1]+(u[1]-h[1])*f/d+(u[0]-h[0])/d*g*5.8;if(m<-125&&Math.abs(_)<100)continue;const p=Nr(_,m);if(Math.max(Math.abs(_-p.worldPosition[0]),Math.abs(m-p.worldPosition[2]))<43)continue;const x=Re(_,m);this.vegetation.addMeadow(_,x,m,2.7,20),t()>.6&&this.vegetation.addFlowerPatch(_,x,m,1.5,12)}}this.vegetation.finalize();const n=new Oc(1,1),i=new ie({color:7438451,roughness:.98,bumpMap:this.materials.plaster.bumpMap,bumpScale:.16}),r=new vi(n,i,180),o=new me;let a=0;for(let l=0;l<1600&&a<180;l++){const c=-470+t()*940,h=-370+t()*690,u=Nr(c,h);Hi.some(d=>Math.hypot(c-d.position[0],h-d.position[1])<35)||Math.max(Math.abs(c-u.worldPosition[0]),Math.abs(h-u.worldPosition[2]))<48||xi(c,h)<7||(o.position.set(c,Re(c,h)-.2,h),o.rotation.set(t(),t()*6,t()),o.scale.set(1+t()*2,.5+t()*1.6,1+t()*2),o.updateMatrix(),r.setMatrixAt(a++,o.matrix))}r.count=a,r.castShadow=r.receiveShadow=!0,r.computeBoundingSphere(),this.group.add(r)}async load(){await this.vegetation.loadAssets()}update(t,e,n,i){this.vegetation.update(t),this.materials.window.emissiveIntensity=.25+(1-e)*2;for(const r of this.lights){const o=r.parent.position;r.visible=Math.hypot(o.x-n,o.z-i)<45,r.intensity=(1-e)*7}}}class $M{group=new re;nature=new fa(9051);collisions=[];m=da();random=rr(9051);batches=new Map;waterfalls=[];spray=[];naturalRock=new ie({color:7898746,roughness:.97,bumpMap:this.m.plaster.bumpMap,bumpScale:.22,vertexColors:!0});water=new an({color:4035225,roughness:.19,metalness:.12,clearcoat:1,clearcoatRoughness:.13,transparent:!0,opacity:.9});ice=new an({color:10998235,roughness:.13,metalness:.18,clearcoat:1,transparent:!0,opacity:.93});constructor(){this.group.name="walkable outdoor submaps";for(const t of Hi){const[e,n]=t.position,i=Re(e,n);if(t.kind==="falls"&&this.falls(e,i,n),t.kind==="spring"&&this.spring(e,i,n),t.kind==="passage"&&this.passage(e,i,n),t.kind==="rink"&&this.rink(e,i,n),t.kind==="summit"&&this.summit(e,i,n),t.kind==="sports"&&this.sports(e,i,n),t.kind==="training"&&this.training(e,i,n),t.kind==="race"&&this.race(e,i,n),this.sign(t,e-6,Re(e-6,n+12),n+12),t.kind!=="summit"&&t.kind!=="race")for(let r=0;r<11;r++){const o=r/11*Math.PI*2,a=t.kind==="sports"?32:24,l=e+Math.cos(o)*a,c=n+Math.sin(o)*a;r>1&&r<5||this.nature.addTree(l,Re(l,c),c,.8+this.random()*.55,t.kind==="rink"?"pine":r%4===0?"birch":"oak")}}this.trails(),this.flush(),this.nature.finalize(),this.group.add(this.nature.group)}add(t,e,n,i,r,o=0){t.rotateY(o),t.translate(n,i,r),this.batches.has(e)||this.batches.set(e,[]),this.batches.get(e).push(t)}box(t,e,n,i,r,o,a=this.m.wood,l=0){this.add(new Qe(i,r,o),a,t,e,n,l)}cylinder(t,e,n,i,r,o,a=this.m.stone){this.add(new Xe(i,r,o,24),a,t,e,n)}rock(t,e,n,i,r,o){const a=new es(1,2),l=a.attributes.position;for(let c=0;c<l.count;c++){const h=1+Math.sin(l.getX(c)*8+l.getY(c)*11+l.getZ(c)*7)*.1;l.setXYZ(c,l.getX(c)*h,l.getY(c)*h,l.getZ(c)*h)}a.scale(i,r,o),a.rotateY(this.random()*6),this.colourRock(a),a.computeVertexNormals(),this.add(a,this.naturalRock,t,e,n)}colourRock(t){const e=t.attributes.position,n=[];for(let i=0;i<e.count;i++){const r=.7+(Math.sin(e.getX(i)*2.1+e.getZ(i)*1.8)*.5+.5)*.25;n.push(r,r+.025,r-.015)}t.setAttribute("color",new Xt(n,3))}beam(t,e,n,i=this.m.wood){const r=new Xe(n,n,t.distanceTo(e),8);r.applyQuaternion(new wn().setFromUnitVectors(new E(0,1,0),e.clone().sub(t).normalize()));const o=t.clone().add(e).multiplyScalar(.5);this.add(r,i,o.x,o.y,o.z)}circle(t,e,n,i,r,o){const a=new Vi(1,64);a.rotateX(-Math.PI/2),a.scale(i,1,r),this.add(a,o,t,e,n)}falls(t,e,n){const i=new Qe(38,16,10,48,24,12),r=i.attributes.position;for(let u=0;u<r.count;u++){const d=r.getX(u),f=r.getY(u),g=r.getZ(u),_=Math.sin(d*.71+f*.5)*Math.cos(f*.93+g*.7)*.6+Math.sin(d*1.73-f*1.18)*.24;r.setXYZ(u,d+_*.35,f+(f>6?Math.sin(d*.4)*.8:_*.3),g+_-(Math.abs(d)<5&&f>6?2:0))}this.colourRock(i),i.computeVertexNormals(),this.add(i,this.naturalRock,t,e+8,n-10),this.collisions.push({x:t,z:n-10,w:39,d:11});for(let u=0;u<15;u++){const d=t-18+this.random()*36,f=n-5+this.random()*4;Math.abs(d-t)<5||this.rock(d,e+.7,f,1.4+this.random()*1.7,.6+this.random(),1.3+this.random())}this.circle(t,e+.12,n+3,14,10,this.water),this.collisions.push({x:t,z:n+2,w:24,d:17});const o=new Pe({transparent:!0,depthWrite:!1,side:Ce,uniforms:{time:{value:0}},vertexShader:"varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 v;uniform float time;void main(){float ribbons=sin(v.x*92.+sin(v.y*20.-time*3.)*2.)*.5+.5;float foam=pow(sin(v.y*58.+time*9.)*.5+.5,6.);float edge=smoothstep(0.,.12,v.x)*smoothstep(0.,.12,1.-v.x);vec3 c=mix(vec3(.19,.54,.62),vec3(.83,.96,.94),ribbons*.6+foam*.4);gl_FragColor=vec4(c,edge*.74);
#include <tonemapping_fragment>
#include <colorspace_fragment>}`}),a=new At(new qe(9,16,20,24),o);a.position.set(t,e+8.2,n-3.5),this.group.add(a),this.waterfalls.push(a);const l=new Float32Array(300*3);for(let u=0;u<300;u++)l[u*3]=t+(this.random()-.5)*14,l[u*3+1]=e+.8+this.random()*3,l[u*3+2]=n-4+this.random()*5;const c=new pe;c.setAttribute("position",new Oe(l,3));const h=new Nc(c,new Ui({map:Er(),color:14218478,size:.9,transparent:!0,opacity:.15,depthWrite:!1}));h.userData.origin=[t,e,n],this.group.add(h),this.spray.push(h);for(let u=0;u<7;u++){const d=[];for(let g=0;g<=60;g++){const _=g/60*Math.PI;d.push(new E(t+Math.cos(_)*(12+u*.15),e+3+Math.sin(_)*(10+u*.15),n+1))}const f=new qs(new pe().setFromPoints(d),new Xs({color:[15304070,15316606,14734992,10471576,8701136,10267872,13215447][u],transparent:!0,opacity:.18}));this.group.add(f)}for(const u of[-1,1])for(let d=0;d<4;d++)this.rock(t+u*(12+d),e+.1,n+6+d,2,.9,1.8)}spring(t,e,n){this.circle(t,e+.08,n,10,8,this.water),this.collisions.push({x:t,z:n,w:17,d:13});const i=new ie({color:6802384,emissive:2989223,emissiveIntensity:.35,roughness:.25,metalness:.12});for(let r=0;r<16;r++){const o=r/16*Math.PI*2;this.rock(t+Math.cos(o)*10.8,e+.4,n+Math.sin(o)*8.8,1.8,1.1,1.8),r%4===0&&(this.cylinder(t+Math.cos(o)*12,e+2,n+Math.sin(o)*10,.65,1,4),this.cylinder(t+Math.cos(o)*12,e+4.15,n+Math.sin(o)*10,.9,.9,.3,this.m.gold))}for(let r=0;r<5;r++){const o=r*2.4,a=new Bc(1.1,0);a.scale(.6,2,.6),this.add(a,i,t+Math.sin(o)*2,e+1,n+Math.cos(o)*2)}this.nature.addMeadow(t-15,e,n+8,7,150),this.nature.addFlowerPatch(t+12,e,n+8,4,55)}passage(t,e,n){for(let i=0;i<9;i++){const r=n-12+i*3.2;for(const c of[-1,1])this.nature.addTree(t+c*5,Re(t+c*5,r),r,1.2,"oak-detailed"),i%2===0&&this.rock(t+c*4,e+.4,r,1,.6,1.3);const o=new E(t-4,Re(t-4,r)+1,r),a=new E(t-1,Re(t-1,r)+5.7,r),l=new E(t+4,Re(t+4,r)+1,r);i%3===0&&(this.beam(o,a,.35),this.beam(a,l,.35))}for(let i=0;i<12;i++){const r=i%2?1:-1,o=t+r*(2.8+this.random()),a=n-12+this.random()*23,l=Re(o,a);this.cylinder(o,l+.4,a,.1,.16,.8,this.m.plaster);const c=new ie({color:i%2?10249120:12474721,roughness:.7,emissive:5453411,emissiveIntensity:.12});this.add(new Nn(.7,16,8,0,Math.PI*2,0,Math.PI/2),c,o,l+.7,a)}}rink(t,e,n){this.circle(t,e+.035,n,19,12,this.ice);const i=new ie({color:15003377,roughness:.88});for(let o=0;o<52;o++){const a=o/52*Math.PI*2,l=t+Math.cos(a)*20,c=n+Math.sin(a)*13,h=Re(l,c);c>n+10&&Math.abs(l-t)<5||this.box(l,h+.5,c,2.2,.6,.5,i,-a)}for(const o of[-1,1]){this.box(t+o*24,e+.8,n,4,.2,9);for(const a of[-3,3])this.box(t+o*24,e+.4,n+a,.3,.8,.5,this.m.iron)}const r=new Xs({color:14808826,transparent:!0,opacity:.32});for(let o=0;o<16;o++){const a=[];for(let l=0;l<35;l++){const c=l/35*1.8+o;a.push(new E(t+Math.cos(c)*(5+o*.5),e+.065,n+Math.sin(c)*(3+o*.25)))}this.group.add(new qs(new pe().setFromPoints(a),r))}}summit(t,e,n){this.rock(t,e-2,n,6,2.2,6),this.cylinder(t,e+.12,n,4,4,.4,this.m.lightStone);for(let r=0;r<16;r++){const o=r/16*Math.PI*2;if(r>2&&r<7)continue;const a=t+Math.cos(o)*4,l=n+Math.sin(o)*4;if(this.box(a,e+.8,l,.15,1.4,.15,this.m.iron),r<15){const c=(r+1)/16*Math.PI*2;this.beam(new E(a,e+1.4,l),new E(t+Math.cos(c)*4,e+1.4,n+Math.sin(c)*4),.06,this.m.iron)}}this.cylinder(t-2,e+2.4,n,.075,.1,4.8,this.m.gold),this.box(t-.5,e+4,n,2.8,1.25,.08,new ie({color:12077893}),.15),this.cylinder(t+1.4,e+1.2,n-1,.1,.18,2.4,this.m.iron);const i=new Xe(.25,.35,1.6,16);i.rotateX(Math.PI/2-.25),this.add(i,this.m.gold,t+1.4,e+2.3,n-1)}sports(t,e,n){const i=new ie({color:7443538,roughness:1});this.box(t,e+.015,n,36,.06,25,i);for(const o of[-17,17])this.box(t+o,e+.06,n,.1,.03,23,this.m.plaster);for(const o of[-11.5,11.5])this.box(t,e+.06,n+o,34,.03,.1,this.m.plaster);this.box(t,e+.065,n,.12,.025,23,this.m.plaster);const r=new Ti(3,.055,6,48);r.rotateX(Math.PI/2),this.add(r,this.m.plaster,t,e+.07,n);for(const o of[-1,1]){for(const a of[-4,4])this.box(t+o*17,e+1.65,n+a,.15,3.3,.15,this.m.plaster);this.box(t+o*17,e+3.3,n,.15,.15,8.2,this.m.plaster);for(let a=-4;a<=4;a+=.5)this.beam(new E(t+o*17,e+3.3,n+a),new E(t+o*20,e+.1,n+a),.018,this.m.plaster);for(let a=0;a<3;a++)this.box(t,e+a*.4+.3,n+o*(16+a),28,.35,1.1)}this.add(new es(.4,1),this.m.plaster,t+5,e+.45,n+2)}training(t,e,n){const i=new ie({color:10258784,roughness:1});this.box(t,e,n,37,.06,29,i);for(const r of[-1,1]){for(let o=0;o<5;o++){const a=n-12+o*6;this.box(t+r*20,e+1,a,.25,2,.25)}for(const o of[.7,1.4])this.beam(new E(t+r*20,e+o,n-13),new E(t+r*20,e+o,n+13),.09)}for(const r of[-12,0,12]){this.box(t+r,e+1.5,n-7,.2,3,.2),this.box(t+r,e+2.4,n-7,2.3,.2,.2);const o=new Xe(1.3,1.3,.3,32);o.rotateX(Math.PI/2),this.add(o,this.m.plaster,t+r,e+2.6,n-6.8);const a=new ie({color:10830392,roughness:.8});for(const l of[.85,.45]){const c=new Ti(l,.12,6,32);this.add(c,a,t+r,e+2.6,n-6.61)}this.collisions.push({x:t+r,z:n-7,w:2.8,d:1})}for(const r of[-8,8])this.cylinder(t+r,e+.75,n+6,.6,.6,1.5,this.m.canvas),this.box(t+r,e+1.8,n+6,.15,1,.15),this.box(t+r,e+1.6,n+6,2,.12,.12);for(let r=0;r<5;r++)this.box(t-18+r*.6,e+1.2,n+10,.08,2.4,.12,this.m.iron),this.box(t-18+r*.6,e+.7,n+10,.55,.1,.14,this.m.gold)}race(t,e,n){const i=new ie({color:5068113,roughness:.92}),r=[],o=[],a=[];for(let h=0;h<=128;h++)for(const u of[1,.73]){const d=h/128*Math.PI*2,f=t+Math.sin(d)*34*u,g=n+Math.cos(d)*20*u;r.push(f,Re(f,g)+.05,g),o.push(u,h/128*15)}for(let h=0;h<128;h++){const u=h*2;a.push(u,u+2,u+1,u+1,u+2,u+3)}const l=new pe;l.setAttribute("position",new Xt(r,3)),l.setAttribute("uv",new Xt(o,2)),l.setIndex(a),l.computeVertexNormals();const c=new At(l,i);c.receiveShadow=!0,this.group.add(c);for(let h=0;h<48;h++){const u=h/48*Math.PI*2;for(const d of[1.02,.71]){const f=t+Math.sin(u)*34*d,g=n+Math.cos(u)*20*d;this.box(f,Re(f,g)+.15,g,2,.25,.8,h%2?this.m.plaster:this.m.roof,u)}}for(let h=0;h<8;h++)this.box(t-4+h,e+.09,n+16.8,1,.05,1.3,h%2?this.m.plaster:this.m.iron);for(const h of[-5,5])this.box(t+h,e+3.5,n+18,.25,7,.25,this.m.iron);this.box(t,e+6.5,n+18,11,1,.6,this.m.roof),this.box(t+16,e+.7,n,2.3,.5,3.7,this.m.roof),this.box(t+16,e+1.1,n-.5,1.4,.6,1.1,this.m.darkWood);for(const h of[-1.2,1.2])for(const u of[-1.2,1.2]){const d=new Xe(.5,.5,.35,16);d.rotateZ(Math.PI/2),this.add(d,this.m.iron,t+16+h,e+.45,n+u)}}trails(){const t=this.m.path.clone();t.map=t.map.clone(),t.map.repeat.setScalar(1),t.bumpMap=t.bumpMap.clone(),t.bumpMap.repeat.setScalar(1);const e=[],n=[],i=[];for(const a of pa)for(let l=1;l<a.points.length;l++){const c=a.points[l-1],h=a.points[l],u=h[0]-c[0],d=h[1]-c[1],f=Math.hypot(u,d),g=Math.ceil(f),_=e.length/3;for(let m=0;m<=g;m++)for(const p of[-1,1]){const x=c[0]+u*m/g-d/f*p*1.6,M=c[1]+d*m/g+u/f*p*1.6;e.push(x,Re(x,M)+.06,M),n.push(p<0?0:1,m/g*f/3.2)}for(let m=0;m<g;m++){const p=_+m*2;i.push(p,p+1,p+2,p+1,p+3,p+2)}}const r=new pe;r.setAttribute("position",new Xt(e,3)),r.setAttribute("uv",new Xt(n,2)),r.setIndex(i),r.computeVertexNormals();const o=new At(r,t);o.receiveShadow=!0,this.group.add(o)}sign(t,e,n,i){const r=document.createElement("canvas");r.width=768,r.height=192;const o=r.getContext("2d");o.fillStyle="#345246",o.fillRect(0,0,768,192),o.strokeStyle="#d9c591",o.lineWidth=6,o.strokeRect(9,9,750,174),o.fillStyle="#f6e5be",o.font="bold 62px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(t.name,384,98,710);const a=new jr(r);a.colorSpace=Ie;const l=new ie({map:a,roughness:.9,side:ri});this.box(e,n+1.3,i,.16,2.6,.16,this.m.darkWood);const c=new At(new qe(5,1.25),l);c.position.set(e,n+2.5,i+.012),this.group.add(c);const h=c.clone();h.rotation.y=Math.PI,h.position.z=i-.012,this.group.add(h)}flush(){for(const[t,e]of this.batches){const n=e.map(r=>r.index?r.toNonIndexed():r),i=Bi(n,!1);if(i){const r=new At(i,t);r.castShadow=r.receiveShadow=!0,this.group.add(r)}e.forEach(r=>r.dispose()),n.forEach(r=>r.dispose())}this.batches.clear()}async load(){await this.nature.loadAssets()}update(t){this.nature.update(t);for(const e of this.waterfalls)e.material.uniforms.time.value=t;for(const e of this.spray){const n=e.geometry.attributes.position,i=e.userData.origin;for(let r=0;r<n.count;r++)n.setY(r,i[1]+.4+(t*.5+r*.018)%1*2.5);n.needsUpdate=!0}}}class JM{constructor(t,e){this.scene=t,this.castle=e,t.add(this.landscape.group,this.extensions.group)}activeId="castle";loading=!1;landscape=new KM;extensions=new $M;districts=new Map;regionalLife=new cf(!0);navigationCost=new Map;get loadedRegions(){return["castle",...this.districts.keys()]}get destination(){return this.destinationFor(this.activeId)}destinationFor(t){if(t==="castle")return Js[0];const e=this.districts.get(t).region,n=si[t].worldPosition;return{name:e.name,description:e.description,position:Vu(t,e.camera),target:Vu(t,e.target),walk:[e.spawn[0]+n[0],e.spawn[1]+n[2]]}}get meshCount(){let t=0;return this.districts.get(this.activeId)?.region.group.traverse(e=>{e instanceof At&&t++}),t}get sceneMeshCount(){return this.districts.get(this.activeId)?.meshes??0}get sceneTriangleCount(){return this.districts.get(this.activeId)?.triangles??0}async loadWorld(t){this.loading=!0;try{await this.landscape.load(),await this.extensions.load();for(const e of vn){if(e.id==="castle")continue;t(`正在连接${e.name} · ${this.districts.size+2} / 12`);const n=ZM(e.id,!0);let i=0,r=0;n.group.traverse(a=>{a instanceof At&&(i++,r+=(a.geometry.index?.count??a.geometry.attributes.position.count)/3)});const o=this.plantRegion(e.id,n);await o.loadAssets(),n.group.add(o.group),n.group.position.set(...e.worldPosition),this.scene.add(n.group),this.districts.set(e.id,{id:e.id,region:n,nature:o,meshes:i,triangles:r}),await new Promise(a=>setTimeout(a,0))}this.castle.setCourtyardVisible(!0)}finally{this.loading=!1}}async travel(t){if(!this.loadedRegions.includes(t))throw new Error(`World district unavailable: ${t}`);this.setActive(t)}setActive(t){t!==this.activeId&&(this.activeId=t,this.regionalLife.group.removeFromParent(),this.districts.get(t)?.region.group.add(this.regionalLife.group))}plantRegion(t,e){const n=si[t],i=n.biome,[r,,o]=n.worldPosition,a=(d,f)=>Re(r+d,o+f),l=new fa(873+t.length*17),c=rr(810+t.length*19);for(const d of e.heroTrees??[])l.addTree(d.x,a(d.x,d.z),d.z,d.scale,"oak-detailed");const h=i==="forest"?68:i==="snow"?42:i==="town"?36:42;for(let d=0;d<h;d++){const f=d/h*Math.PI*2+c()*.18,g=49+c()*33,_=Math.cos(f)*g,m=Math.sin(f)*g;Hi.some(p=>Math.hypot(r+_-p.position[0],o+m-p.position[1])<30)||xi(r+_,o+m)<6||t==="mystery-lake"&&Math.sin(f)>.15||l.addTree(_,a(_,m),m,(i==="forest"?1.1:.7)+c()*.6,i==="snow"?"pine":d%5===0?"birch":"oak")}for(const d of[-38,38])for(const f of[-33,-7,23,36])Hi.some(g=>Math.hypot(r+d-g.position[0],o+f-g.position[1])<30)||xi(r+d,o+f)<5||t==="mystery-lake"&&(d>0||e.canMove?.(d,f)===!1)||e.collisions.some(g=>Math.abs(d-g.x)<g.w/2+3&&Math.abs(f-g.z)<g.d/2+3)||(l.addTree(d,a(d,f),f,.9+c()*.35,i==="snow"?"pine":"oak"),e.collisions.push({x:d,z:f,w:.8,d:.8}));const u=t==="berry-jungle"?[[-9,16],[-11,-4],[15,-14],[15,40]]:t==="black-forest"?[[-9,15],[10,22],[-12,-5],[12,-26]]:t==="taotao-street"?[[-12,27],[12,27],[-8,-28],[8,-28]]:[];for(const[d,f]of u)e.canMove?.(d,f)===!1||e.collisions.some(g=>Math.abs(d-g.x)<g.w/2+1&&Math.abs(f-g.z)<g.d/2+1)||(l.addTree(d,a(d,f),f,i==="forest"?1.5:.7,"oak-detailed"),e.collisions.push({x:d,z:f,w:.65,d:.65}),l.addMeadow(d,a(d,f),f,3.3,95),l.addFlowerPatch(d,a(d,f),f,2.3,24));if(i!=="snow")for(const d of[-13,13,-30,30])for(const f of[-1,19])e.canMove?.(d,f)===!1||e.collisions.some(g=>Math.abs(d-g.x)<g.w/2+2&&Math.abs(f-g.z)<g.d/2+2)||xi(r+d,o+f)<5||l.addMeadow(d,a(d,f),f,3.7,85);if(i!=="snow")for(let d=0;d<34;d++){const f=c()*Math.PI*2,g=34+c()*11,_=Math.cos(f)*g,m=Math.sin(f)*g;xi(r+_,o+m)<4||e.canMove?.(_,m)===!1||(l.addMeadow(_,a(_,m),m,2.5,38),d%3===0&&l.addFlowerPatch(_,a(_,m),m,1.3,15))}return l.finalize(),l}canMove(t,e){if(t<Te.minX+3||t>Te.maxX-3||e<Te.minZ+3||e>Te.maxZ-3||!this.castle.canMove(t,e)||this.extensions.collisions.some(n=>Math.abs(t-n.x)<n.w/2+.35&&Math.abs(e-n.z)<n.d/2+.35))return!1;for(const{id:n,region:i}of this.districts.values()){const r=si[n].worldPosition,o=t-r[0],a=e-r[2];if(!(Math.abs(o)>85||Math.abs(a)>85)&&(i.canMove?.(o,a)===!1||i.collisions.some(l=>Math.abs(o-l.x)<l.w/2+.35&&Math.abs(a-l.z)<l.d/2+.35)))return!1}return!0}heightAt(t,e){if(Math.abs(t)<55&&Math.abs(e)<55)return this.castle.heightAt(t,e);const n=this.districts.get("mystery-lake")?.region;if(n&&Math.abs(t-360)<45&&Math.abs(e-180)<45){const i=n.heightAt(t-360,e-180);if(i>0)return i+.14}return Re(t,e)+.14}route(t,e){const i=Math.ceil((Te.maxX-Te.minX)/2)+1,r=Math.ceil((Te.maxZ-Te.minZ)/2)+1,o=v=>[Te.minX+v%i*2,Te.minZ+Math.floor(v/i)*2],a=v=>Math.round((v[1]-Te.minZ)/2)*i+Math.round((v[0]-Te.minX)/2),l=a(t),c=a(e),h=new Map([[l,0]]),u=new Map,d=new Set,f=[],g=v=>{let b=f.push(v)-1;for(;b>0;){const A=b-1>>1;if(f[A].f<=v.f)break;f[b]=f[A],b=A}f[b]=v},_=()=>{const v=f[0],b=f.pop();if(f.length){let A=0;for(;A*2+1<f.length;){let C=A*2+1;if(C+1<f.length&&f[C+1].f<f[C].f&&C++,f[C].f>=b.f)break;f[A]=f[C],A=C}f[A]=b}return v},m=v=>{if(this.navigationCost.has(v))return this.navigationCost.get(v);const[b,A]=o(v);let C=1/0;if(this.canMove(b,A)){const L=Nr(b,A);C=Math.max(Math.abs(b-L.worldPosition[0]),Math.abs(A-L.worldPosition[2]))<43?1.8:1+Math.min(16,xi(b,A)*2)}return this.navigationCost.set(v,C),C};g({key:l,f:0});let p=!1;for(;f.length&&d.size<11e4;){const v=_().key;if(d.has(v))continue;if(v===c){p=!0;break}d.add(v);const b=v%i,A=Math.floor(v/i);for(const[C,L]of[[0,1],[0,-1],[1,0],[-1,0],[1,1],[-1,1],[1,-1],[-1,-1]]){const w=b+C,S=A+L;if(w<0||w>=i||S<0||S>=r)continue;const P=S*i+w;if(d.has(P))continue;const N=m(P);if(!Number.isFinite(N)||C&&L&&(!Number.isFinite(m(A*i+w))||!Number.isFinite(m(S*i+b))))continue;const k=o(v),q=o(P);if([.25,.5,.75].some(Z=>!this.canMove(k[0]+(q[0]-k[0])*Z,k[1]+(q[1]-k[1])*Z)))continue;const z=h.get(v)+Math.hypot(C,L)*2*N;if(z>=(h.get(P)??1/0))continue;h.set(P,z),u.set(P,v);const X=o(P);g({key:P,f:z+Math.hypot(X[0]-e[0],X[1]-e[1])})}}if(!p)return[];const x=[e];let M=c;for(;M!==l;)x.push(o(M)),M=u.get(M);return x.push(t),x.reverse(),x.filter((v,b)=>b===0||b===x.length-1||Math.abs((v[0]-x[b-1][0])*(x[b+1][1]-v[1])-(v[1]-x[b-1][1])*(x[b+1][0]-v[0]))>.01)}groundClearance(t){const e=new a0(new E(t.x,3e3,t.z),new E(0,-1,0)),n=this.landscape.group.children.filter(r=>r.name==="shared terrain tile"),i=e.intersectObjects(n,!1)[0];return i?t.y-i.point.y:null}inspectRoute(t){let e=0,n=0;for(let i=1;i<t.length;i++){const r=t[i-1],o=t[i],a=Math.hypot(o[0]-r[0],o[1]-r[1]);n+=a;for(let l=0;l<=Math.ceil(a/.25);l++){const c=l/Math.max(1,Math.ceil(a/.25));this.canMove(r[0]+(o[0]-r[0])*c,r[1]+(o[1]-r[1])*c)||e++}}return{blockedSamples:e,distance:n,waypoints:t.length}}update(t,e,n,i,r,o=!1){this.loading||this.setActive(Nr(i,r).id);for(const a of this.districts.values()){const l=si[a.id].worldPosition,c=Math.hypot(i-l[0],r-l[2]);a.region.group.visible=o||c<440,a.nature.group.visible=o||c<205,a.region.update?.(t,e,n,i-l[0],r-l[2]),(o||c<220)&&a.nature.update(t)}this.castle.setCourtyardVisible(o||Math.hypot(i,r)<440),this.regionalLife.update(t),this.extensions.update(t),this.landscape.update(t,n,i,r)}}const Gu={town:"街区与庭园",farmland:"田野与耕地",meadow:"草坡与原野",forest:"树林与秘境",snow:"雪峰与冰原",lake:"湖泊与水岸"},Wu='<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 5 38 26 59 32 38 38 32 59 26 38 5 32 26 26Z" fill="none" stroke="currentColor"/><path d="M32 5 38 26 32 32 26 26Z" fill="currentColor"/><path d="M32 32 38 38 32 59Z" fill="currentColor" opacity=".45"/><circle cx="32" cy="32" r="3" fill="currentColor"/></svg>',Xu='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';class QM{dialog=document.createElement("dialog");selected=vn[0];currentId=vn[0].id;regionButtons=new Map;onTravel;constructor(t,e){this.onTravel=t,this.dialog.id="world-atlas",this.dialog.className="atlas-dialog",this.dialog.setAttribute("aria-labelledby","atlas-title"),this.dialog.setAttribute("aria-describedby","atlas-introduction"),this.dialog.innerHTML=`
      <div class="atlas-shell">
        <header class="atlas-header">
          <div class="atlas-brand-mark">${Wu}</div>
          <div class="atlas-heading"><span class="atlas-overline">MOLE MANOR · WORLD ATLAS</span><h2 id="atlas-title">庄园世界地图</h2><p id="atlas-introduction">循着记忆里的小路，去下一个地方看看。</p></div>
          <div class="atlas-header-note"><span>12 个地区 · 8 处子地点</span><small>同一世界 · 道路相连</small></div>
          <button class="atlas-close dialog-close" type="button" aria-label="关闭世界地图"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
        </header>
        <div class="atlas-content">
          <nav class="atlas-directory" aria-label="选择探索地点">
            <div class="atlas-section-heading"><span>目的地</span><span>01 — 12</span></div>
            <div class="atlas-region-list"></div>
            <p class="atlas-directory-note"><span>✦</span> 选中地点，沿路前往或快速到达。</p>
          </nav>
          <section class="atlas-map-panel" aria-label="庄园连续世界图">
            <div class="atlas-map-top"><span><i></i> 道路连接全部 12 个户外区域</span><span>连续世界</span></div>
            <div class="atlas-map-canvas">
              ${this.mapIllustration()}
              <div class="atlas-map-sites"></div>
            </div>
            <div class="atlas-map-bottom"><div class="atlas-map-key"><span><i class="atlas-key-current"></i> 当前位置</span><span><i class="atlas-key-route"></i> 实际道路</span></div><div class="atlas-compass">${Wu}<span>N</span></div></div>
            <p class="atlas-map-caption">经典地点 · 地形布局为本项目重构，非原版地图</p>
          </section>
          <aside class="atlas-preview" aria-label="选中地点介绍">
            <div class="atlas-preview-art" aria-hidden="true"><span class="atlas-art-orbit"></span><div class="atlas-preview-icon"></div><span class="atlas-art-sprig atlas-art-sprig-left">✧</span><span class="atlas-art-sprig atlas-art-sprig-right">✦</span><span class="atlas-art-horizon"></span><span class="atlas-preview-biome"></span></div>
            <div class="atlas-preview-copy" aria-live="polite" aria-atomic="true">
              <div class="atlas-preview-eyebrow"><span class="atlas-place-number"></span><span class="atlas-phase"></span></div>
              <h3 class="atlas-place-name"></h3><p class="atlas-place-subtitle"></p><div class="atlas-sublocations" aria-label="区域内子地点"></div><p class="atlas-place-description"></p>
              <div class="atlas-landmarks-heading">在这里寻找</div><ul class="atlas-landmarks"></ul>
              <p class="atlas-prototype-note"></p>
            </div>
            <div class="atlas-travel-area"><span class="atlas-current-note"></span><button class="atlas-travel" type="button"><span>沿路前往</span>${Xu}</button><button class="atlas-fast" type="button">快速前往 · 跳过路程</button><p>步行无需加载或切换场景</p></div>
          </aside>
        </div>
        <div class="atlas-footer"><button class="atlas-overview-world" type="button">俯瞰全境 ↗</button><span>把熟悉的地方，一点点重新搭起来。</span><span>地点场景初版 · 持续细化中</span></div>
      </div>`,document.body.append(this.dialog),this.createLocations(),this.dialog.querySelector(".atlas-overview-world").addEventListener("click",()=>{this.close(),e?.()}),this.dialog.querySelector(".atlas-close").addEventListener("click",()=>this.close()),this.dialog.querySelector(".atlas-travel").addEventListener("click",()=>{const n=this.selected.id;this.onTravel(n,"walk"),this.close()}),this.dialog.querySelector(".atlas-fast").addEventListener("click",()=>{this.onTravel(this.selected.id,"fast"),this.close()}),this.select(this.selected)}open(t=this.currentId){this.currentId=vn.find(e=>e.id===t)?.id??vn[0].id,this.select(vn.find(e=>e.id===this.currentId)),this.dialog.open||this.dialog.showModal()}close(){this.dialog.close()}dispose(){this.close(),this.dialog.remove()}createLocations(){const t=this.dialog.querySelector(".atlas-region-list"),e=this.dialog.querySelector(".atlas-map-sites");vn.forEach((n,i)=>{const r=document.createElement("button");r.type="button",r.className="atlas-region",r.dataset.region=n.id,r.innerHTML=`<span class="atlas-region-index">${String(i+1).padStart(2,"0")}</span><span class="atlas-region-copy"><strong></strong><small></small></span><span class="atlas-region-marker" aria-hidden="true">${Xu}</span>`,r.querySelector("strong").textContent=n.name,r.querySelector("small").textContent=Gu[n.biome],r.addEventListener("click",()=>this.select(n)),t.append(r);const o=document.createElement("button");o.type="button",o.className="atlas-pin",o.dataset.region=n.id,o.style.left=`${n.mapPosition[0]}%`,o.style.top=`${n.mapPosition[1]}%`,o.setAttribute("aria-label",`在地图上选择${n.name}`),o.innerHTML=`<span class="atlas-pin-art">${qu(n.id)}</span><span class="atlas-pin-label"></span><span class="atlas-pin-current" aria-hidden="true"></span>`,o.querySelector(".atlas-pin-label").textContent=n.name,o.addEventListener("click",()=>this.select(n)),e.append(o),this.regionButtons.set(n.id,[r,o])})}select(t){this.selected=t;for(const[r,o]of this.regionButtons)for(const a of o)a.classList.toggle("is-selected",r===t.id),a.classList.toggle("is-current",r===this.currentId),a.setAttribute("aria-pressed",String(r===t.id)),r===this.currentId?a.setAttribute("aria-current","location"):a.removeAttribute("aria-current");const e=(r,o)=>{this.dialog.querySelector(r).textContent=o};e(".atlas-place-number",`地点 ${String(vn.indexOf(t)+1).padStart(2,"0")}`),e(".atlas-phase",t.id==="castle"?"城堡细化中":"场景初版"),e(".atlas-place-name",t.name),e(".atlas-place-subtitle",t.subtitle),e(".atlas-place-description",t.description),e(".atlas-preview-biome",Gu[t.biome]),e(".atlas-prototype-note",t.id==="castle"?"城堡前庭已有建筑、花园与石桥，细节仍在完善。":"已连接到连续世界，可沿道路走入。建筑、植被和细节仍在完善。"),e(".atlas-current-note",t.id===this.currentId?"你现在就在这里":"下一站，去看看"),this.dialog.querySelector(".atlas-preview-icon").innerHTML=qu(t.id),this.dialog.querySelector(".atlas-landmarks").replaceChildren(...t.landmarks.slice(0,3).map(r=>{const o=document.createElement("li");return o.textContent=r,o}));const i=this.dialog.querySelector(".atlas-sublocations");i.replaceChildren();for(const r of t.sublocations){const o=document.createElement("div");if(o.className="atlas-sublocation",ea[r.id]){const l=document.createElement("button");l.type="button",l.textContent=`${r.label} →`,l.dataset.site=r.id,l.addEventListener("click",()=>{this.onTravel(r.id,"walk"),this.close()});const c=document.createElement("button");c.type="button",c.className="atlas-site-fast",c.textContent="直达",c.dataset.fastSite=r.id,c.setAttribute("aria-label",`快速前往${r.label}`),c.addEventListener("click",()=>{this.onTravel(r.id,"fast"),this.close()}),o.append(l,c)}else o.textContent=`${r.label} · 待搭建`,o.classList.add("not-built");i.append(o)}this.dialog.querySelector(".atlas-preview").style.setProperty("--region-color",t.color)}mapIllustration(){return`<svg class="atlas-terrain" viewBox="0 0 1000 720" fill="none" aria-hidden="true">
      <defs>
        <pattern id="atlas-paper" width="52" height="52" patternUnits="userSpaceOnUse"><circle cx="8" cy="15" r=".8" fill="#927f55" opacity=".16"/><circle cx="36" cy="39" r=".65" fill="#927f55" opacity=".14"/><path d="m20 6 3 1m24 22 2-1M5 45l3 1" stroke="#927f55" stroke-opacity=".1"/></pattern>
        <pattern id="atlas-waves" width="66" height="30" patternUnits="userSpaceOnUse"><path d="M4 15q8-7 16 0t16 0" stroke="#658984" stroke-opacity=".23" stroke-width="1.3"/></pattern>
        <radialGradient id="atlas-water"><stop stop-color="#c9d8c2"/><stop offset="1" stop-color="#b4ccc2"/></radialGradient>
        <linearGradient id="atlas-land" x1="350" y1="110" x2="650" y2="650" gradientUnits="userSpaceOnUse"><stop stop-color="#d5d8a8"/><stop offset=".52" stop-color="#e5d8a6"/><stop offset="1" stop-color="#d9c998"/></linearGradient>
        <symbol id="atlas-tree" viewBox="0 0 30 44"><path d="M15 29v13" stroke="#667455" stroke-width="3"/><path d="M15 1 3 20h5L0 32h30L22 20h5Z" fill="#73876a" stroke="#536b56" stroke-width="1"/><path d="M15 3v28M9 19l6 4 8-5" stroke="#a9b68b" stroke-opacity=".6" stroke-width="1"/></symbol>
        <symbol id="atlas-hill" viewBox="0 0 55 32"><path d="M2 29Q17 2 28 10 40-8 53 29" fill="#b1ba8a" stroke="#9aaa7b" stroke-width="1.2"/><path d="M11 28q9-18 17-12" stroke="#d1d3a3" stroke-width="2"/></symbol>
        <symbol id="atlas-mountain" viewBox="0 0 70 70"><path d="m3 65 31-59 33 59Z" fill="#9aab99" stroke="#798f82" stroke-width="1.5"/><path d="m18 37 16-31 17 31-12-5-5 9-6-10Z" fill="#ecebd4"/><path d="m34 40 7 25H22Z" fill="#7f9585" opacity=".5"/></symbol>
      </defs>
      <rect x="1" y="1" width="998" height="718" rx="22" fill="url(#atlas-water)"/>
      <rect x="1" y="1" width="998" height="718" rx="22" fill="url(#atlas-waves)"/>
      <path d="M163 411C115 360 131 295 171 258 130 221 188 161 253 149 279 99 347 81 403 101 454 59 531 68 560 112 646 80 702 115 718 156 800 139 860 203 829 264 897 306 881 365 851 405 887 454 856 507 803 516 818 573 761 613 705 604 655 653 589 646 550 620 490 670 413 646 390 613 306 635 267 600 267 562 185 575 130 522 163 470 134 456 139 431 163 411Z" fill="#789b89" opacity=".18" stroke="#6f9588" stroke-width="23"/>
      <path d="M163 401C115 350 131 285 171 248 130 211 188 151 253 139 279 89 347 71 403 91 454 49 531 58 560 102 646 70 702 105 718 146 800 129 860 193 829 254 897 296 881 355 851 395 887 444 856 497 803 506 818 563 761 603 705 594 655 643 589 636 550 610 490 660 413 636 390 603 306 625 267 590 267 552 185 565 130 512 163 460 134 446 139 421 163 401Z" fill="url(#atlas-land)" stroke="#a5ac7d" stroke-width="2"/>
      <path d="M173 395C131 346 143 289 185 250M262 145q70-87 141-42M725 160q67-14 91 38M788 505q31 55-80 77M391 589q-71 24-108-35" stroke="#f0e7ba" stroke-width="3" stroke-linecap="round"/>
      <path d="M740 153q-47 61-8 110c26 40-34 67-17 117s82 54 45 94c-22 25-34 73-5 105" stroke="#91b8ac" stroke-width="25" stroke-linecap="round"/>
      <path d="M740 153q-47 61-8 110c26 40-34 67-17 117s82 54 45 94c-22 25-34 73-5 105" stroke="#c0d3bd" stroke-width="9" stroke-linecap="round" opacity=".6"/>
      <path d="M740 507q-21-39 26-61t62 21q35-1 31 36t-44 35q-30 29-56 3t-19-34Z" fill="#96b9ac" stroke="#7a9c91" stroke-width="1.5"/>
      <path d="M766 466q20-14 38 1m-40 42q18 9 32 1m12-26q15-7 27 4" stroke="#d4dfc5" stroke-width="3" stroke-linecap="round"/>
      <path d="M188 167q54-26 76 22t-12 79q-21-29-56-27t-29-34q-7-25 21-40Z" fill="#8b9c6e" opacity=".5"/>
      <path d="M629 452q-42 34-8 77t69 19q17-30 4-58t-65-38Z" fill="#9eac7a" opacity=".4"/>
      <path d="M403 416q29 1 27 31t-50 38q-31-15-22-43t45-26Z" fill="#d1ba80" opacity=".48"/>
      ${Yr.map(t=>{const e=t.points.map(([n,i])=>`${500+n/1.2},${360+i*.8}`).join(" ");return`<polyline points="${e}" stroke="#aa936c" stroke-opacity=".5" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="${e}" stroke="#f5e5b7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`}).join("")}
      <g opacity=".9"><use href="#atlas-mountain" x="449" y="135" width="56" height="56"/><use href="#atlas-mountain" x="485" y="108" width="78" height="78"/><use href="#atlas-mountain" x="540" y="155" width="50" height="50"/></g>
      <g opacity=".78"><use href="#atlas-tree" x="176" y="155" width="23" height="36"/><use href="#atlas-tree" x="205" y="170" width="30" height="44"/><use href="#atlas-tree" x="155" y="183" width="28" height="42"/><use href="#atlas-tree" x="194" y="209" width="30" height="44"/><use href="#atlas-tree" x="227" y="206" width="25" height="40"/><use href="#atlas-tree" x="174" y="239" width="24" height="38"/><use href="#atlas-tree" x="230" y="259" width="22" height="33"/>
      <use href="#atlas-tree" x="607" y="457" width="23" height="36"/><use href="#atlas-tree" x="627" y="479" width="28" height="43"/><use href="#atlas-tree" x="688" y="530" width="23" height="36"/><use href="#atlas-tree" x="701" y="495" width="25" height="40"/><use href="#atlas-tree" x="671" y="478" width="24" height="38"/>
      <use href="#atlas-hill" x="735" y="312" width="56" height="33"/><use href="#atlas-hill" x="756" y="334" width="50" height="30"/><use href="#atlas-hill" x="351" y="530" width="55" height="33"/><use href="#atlas-hill" x="393" y="550" width="45" height="27"/></g>
      <g stroke="#ad9d6e" stroke-width="1.2" opacity=".55"><path d="m288 465 45 11-10 39-45-11Zm-4 13 45 11m-48 1 45 11m-35-34-10 39m22-36-10 39m22-36-10 39"/><path d="m363 361-11 22m-7-15 26 10m204-98 14-9m-9-2 8 18"/></g>
      <g fill="#8e9b6c" opacity=".65"><path d="m198 270 3-8 4 7 5-5-3 10m570 181 3-8 4 7 5-5-3 10m-370 110 3-8 4 7 5-5-3 10m146-358 3-8 4 7 5-5-3 10"/></g>
      <g fill="#b07e63" opacity=".72"><circle cx="645" cy="480" r="3"/><circle cx="653" cy="472" r="2"/><circle cx="693" cy="510" r="2.5"/><circle cx="617" cy="520" r="2"/></g>
      <path d="m721 493 22 2-2 17-22-2Z" fill="#d4c394" stroke="#b5a377"/><path d="m719 491 26 2m-28 17 26 2" stroke="#eee1b3" stroke-width="3"/>
      <g stroke="#698e84" opacity=".55" stroke-linecap="round"><path d="M75 230q8-8 16 0 8-8 16 0M855 570q8-8 16 0 8-8 16 0M108 546q8-8 16 0 8-8 16 0M833 104q8-8 16 0 8-8 16 0"/></g>
      <g fill="#7d9b8d" opacity=".5"><path d="m115 147 17-5 11 11-12 6-15-3Zm747 312 16-8 9 8-5 12-16-3ZM157 597l19-4 12 7-5 11-21 1Z"/></g>
      <rect x="1" y="1" width="998" height="718" rx="22" fill="url(#atlas-paper)"/>
      <path d="M28 65V28h37m870 0h37v37M28 655v37h37m870 0h37v-37" stroke="#8da28c" stroke-width="1.3" opacity=".8"/>
      <g fill="#6b8276" font-family="Georgia,serif" font-size="15" letter-spacing="5" opacity=".65"><text x="65" y="620" transform="rotate(-12 65 620)">M O L E  M A N O R</text></g>
    </svg>`}}function qu(s){const t={castle:'<path d="M13 45h38V22H13Z" fill="#e9d6ad"/><path d="M9 45h10V18H9Zm36 0h10V18H45ZM26 35h12V11H26Z" fill="#f1dfb9"/><path d="m6 19 8-14 8 14Zm36 0 8-14 8 14ZM23 12l9-11 9 11Z" fill="#a35c51"/><path d="M28 45V34q4-6 8 0v11" fill="#8b7658"/><path d="M14 24v6m36-6v6M32 17v6m-9 4v5m18-5v5" stroke="#9c8867" stroke-width="2"/><path d="M7 46h50" stroke="#8c9271" stroke-width="3"/>',"taotao-street":'<path d="M7 46V24h22v22m4 0V17h22v29" fill="#dfc48d"/><path d="M3 25 17 13l15 12Zm27-7L44 6l15 12Z" fill="#ac7656"/><path d="M11 32h14m12-7h14" stroke="#f3e5bb" stroke-width="5"/><path d="M14 46V35h8v11m16 0V32h11v14" fill="#8b947b"/><path d="M5 47h53" stroke="#a49b70" stroke-width="3"/><path d="M9 29h18m8-8h18" stroke="#f5d6a6" stroke-width="3"/>',"love-church":'<path d="M14 47V27l18-15 18 15v20Z" fill="#e9d9bf"/><path d="m10 29 22-19 22 19" stroke="#bc8d77" stroke-width="5"/><path d="M27 47V34a5 5 0 0 1 10 0v13" fill="#998675"/><circle cx="32" cy="26" r="4" fill="#bfa46f"/><path d="M32 2v10m-4-6h8" stroke="#b28f60" stroke-width="2.5"/><path d="M9 48h46" stroke="#a8a480" stroke-width="3"/><path d="M10 42h7m30 0h7" stroke="#8d9e75" stroke-width="6"/>',"happy-farm":'<path d="M11 45V26h30v19" fill="#d2b679"/><path d="m7 27 19-16 19 16Z" fill="#b57f55"/><path d="M21 45V31h11v14" fill="#8b8060"/><path d="M7 47h49M44 36h15m-15 6h15m-13-12v17m10-17v17" stroke="#a79c6a" stroke-width="2"/><path d="M53 25V10m0 9-6-5m6-1 5-5m-5 16 6-5" stroke="#c29d54" stroke-width="2.5" stroke-linecap="round"/>',"sunshine-ranch":'<path d="m24 45 3-25h14l3 25" fill="#e5d1a4"/><path d="m24 22 10-10 10 10Z" fill="#a48059"/><path d="m34 24-4-17m4 17 17-4M34 24l4 17m-4-17-17 4" stroke="#eee4c1" stroke-width="5"/><circle cx="34" cy="24" r="3" fill="#b49b6f"/><path d="M4 39h20m-20 6h20M8 33v16m12-16v16m22-10h18m-18 6h18m-14-12v16m11-16v16" stroke="#9c9c75" stroke-width="2"/>',"berry-jungle":'<path d="M29 49V29m0 10-11-9m11 5 12-10" stroke="#8e8061" stroke-width="4"/><path d="M14 34C-1 23 12 9 23 13 28-1 46 3 47 16c16-2 19 18 4 22-7 6-16 4-22-1-5 4-11 3-15-3Z" fill="#8eaa78"/><path d="M18 20q10-9 22-3" stroke="#bdc599" stroke-width="2"/><g fill="#b67c78"><circle cx="16" cy="29" r="3.5"/><circle cx="35" cy="15" r="3.5"/><circle cx="45" cy="31" r="3.5"/></g><path d="M17 49h29" stroke="#a4ac7f" stroke-width="3"/>',"moraya-mountain":'<path d="m4 47 21-37 15 26L49 19l13 28Z" fill="#a3b3a7"/><path d="m15 28 10-18 10 18-7-3-3 5-4-6Zm27 4 7-13 7 13-7-3Z" fill="#f0e8ce"/><path d="m25 30 8 17H14Z" fill="#809b90"/><path d="M6 49h53" stroke="#b4bfac" stroke-width="2"/><path d="M48 7V2m-3 3h6" stroke="#e6e4ca" stroke-width="1.5"/>',"mystery-lake":'<path d="M3 37q15-11 29-3t29 2l-3 11H6Z" fill="#93b5a8"/><path d="M6 42q12-5 23 0t28 0" stroke="#c6d7bd" stroke-width="2"/><path d="M19 32h29l-7 8H25Z" fill="#b29468"/><path d="M32 8v24" stroke="#8d8b67" stroke-width="2"/><path d="m30 10-15 19h15Zm4 4 12 15H34Z" fill="#f2dfaf"/><path d="M8 29v-9m0 5-4-4m4 1 5-5m42 13V19" stroke="#8f9e78" stroke-width="2"/>',"ram-academy":'<path d="M11 45V26h42v19" fill="#e3d1a2"/><path d="m6 26 26-15 26 15Z" fill="#9c9f79"/><path d="M18 29v13m12-13v13m12-13v13" stroke="#f5e5ba" stroke-width="4"/><path d="M7 46h50" stroke="#a3a184" stroke-width="4"/><path d="M26 15V5h13l-4 4 4 4H26" stroke="#b79766" stroke-width="1.5" fill="#bd8b62"/><path d="M15 43h34" stroke="#a8a385" stroke-width="2"/>',outpost:'<path d="m16 45 5-23h23l4 23" fill="#c3b28a"/><path d="M18 24V12h28v12Z" fill="#e6d4ab"/><path d="m14 13 18-9 18 9Z" fill="#9c8766"/><path d="M23 16h5v6h-5m13-6h5v6h-5" fill="#8e9781"/><path d="m26 45 3-13h7l3 13" fill="#8e896e"/><path d="M8 46h48" stroke="#a5a584" stroke-width="3"/><path d="M7 33v13m49-13v13M7 36h11m28 0h10" stroke="#a49671" stroke-width="2"/>',"black-forest":'<path d="M18 47V31m27 16V28M33 48V23" stroke="#8c886a" stroke-width="3"/><path d="m4 37 8-14H8l10-17 10 17h-4l8 14Z" fill="#718b70"/><path d="m31 36 8-14h-4L45 5l10 17h-4l8 14Z" fill="#627f69"/><path d="m19 29 8-13h-4L33 0l10 16h-4l8 13Z" fill="#899d7d"/><path d="M5 49h54" stroke="#9dab85" stroke-width="3"/>',"amusement-park":'<circle cx="31" cy="23" r="18" stroke="#bb9b6a" stroke-width="2"/><path d="M31 5v36M13 23h36M18 10l26 26M18 36l26-26m-24 39 9-26h4l9 26" stroke="#bdab7b" stroke-width="2"/><g fill="#bd8b75"><rect x="27" y="1" width="8" height="7" rx="2"/><rect x="10" y="20" width="8" height="7" rx="2"/><rect x="44" y="20" width="8" height="7" rx="2"/></g><g fill="#91a58a"><rect x="15" y="6" width="7" height="7" rx="2"/><rect x="40" y="6" width="7" height="7" rx="2"/><rect x="15" y="34" width="7" height="7" rx="2"/><rect x="40" y="34" width="7" height="7" rx="2"/></g><circle cx="31" cy="23" r="3" fill="#ece0ba"/><path d="M14 49h34" stroke="#a5aa81" stroke-width="3"/>'};return`<svg viewBox="0 0 64 52" fill="none" aria-hidden="true">${t[s]??t.castle}</svg>`}const Mt=s=>document.getElementById(s),ty={Volume2:ux,VolumeX:dx,Maximize:sx,Pause:ox,Play:ax,Sunset:hx,Music2:rx,Sun:cx,CloudFog:tx,CloudRain:ex,Snowflake:lx,Expand:nx,Footprints:ix,ArrowUpRight:$v,Camera:Jv,ChevronDown:Qv,X:fx},Yo=()=>px({icons:ty,attrs:{"stroke-width":1.5}});Yo();let Yu;function Dn(s){Mt("toast").textContent=s,Mt("toast").classList.add("visible"),clearTimeout(Yu),Yu=setTimeout(()=>Mt("toast").classList.remove("visible"),3800)}function ey(){try{const s=JSON.parse(localStorage.getItem("mole-world-v3")||"{}");return s&&typeof s=="object"?s:{}}catch{return{}}}const rs=ey();let hn=["clear","mist","rain","snow"].includes(rs.weather??"")?rs.weather:"clear",In=Number.isFinite(rs.hour)?Je.clamp(rs.hour,0,23.99):16,Ge=rs.highQuality??!0,Qi=!matchMedia("(prefers-reduced-motion: reduce)").matches,dn=!1,ma=0,Yc=1,Qs=!1,pf=0,Jn,te,pc;const _e=new E(0,.48,27);let ee=null,Oi=null,mf="castle",Ve,It,Me,un,jo,Rr,He,we,mc,gi;const zi=new AM,Pn=new E,be=new Set;let xn=0,bi=0,Hn=null,Xn=null,hl=!1;const ju=new mt,ul=new mt,ny={clear:"风吹散了云，石墙上留下一点暖意。",mist:"薄雾沿着河谷，缓缓走进庄园。",rain:"雨敲着旧屋顶，灯火替你守着归途。",snow:"第一片雪落下，世界轻轻安静了。"};function Ur(){try{localStorage.setItem("mole-world-v3",JSON.stringify({weather:hn,hour:In,volume:+Mt("volume").value,highQuality:Ge}))}catch{}}function jc(){const s=Math.floor(In),t=Math.floor(In%1*60);Mt("clock").textContent=`${String(s).padStart(2,"0")}:${String(t).padStart(2,"0")}`,Mt("time").value=String(In),Mt("day-number").textContent=`第 ${String(Yc).padStart(2,"0")} 日`}function gf(s,t=!1){hn=s,document.querySelectorAll("[data-weather]").forEach(e=>{const n=e.dataset.weather===s;e.classList.toggle("selected",n),e.setAttribute("aria-pressed",String(n))}),Mt("weather-description").textContent=ny[s],zi.setWeather(s),Ur(),t||Dn({clear:"云层散去，阳光正穿过树林。",mist:"山谷起雾了。",rain:"雨来了，去灯火下走走吧。",snow:"庄园迎来了第一场雪。"}[s])}function iy(){const s=new Pe({side:$e,depthWrite:!1,uniforms:{uTime:{value:0},uDay:{value:1},uCloud:{value:.5},uSky:{value:new mt(8361094)},uSun:{value:new E(1,.3,-1)}},vertexShader:"varying vec3 vDirection; void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vDirection;uniform float uTime;uniform float uDay;uniform float uCloud;uniform vec3 uSky;uniform vec3 uSun;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}float fbm(vec2 p){float a=.5,v=0.;for(int i=0;i<5;i++){v+=noise(p)*a;p=p*2.03+1.7;a*=.5;}return v;}
void main(){vec3 d=normalize(vDirection);float h=max(d.y,0.);vec3 col=mix(uSky*1.35,uSky*vec3(.58,.75,.95),pow(h,.5));float horizon=pow(1.-abs(d.y),8.);col+=vec3(.15,.12,.07)*horizon*uDay;float sun=pow(max(dot(d,normalize(uSun)),0.),120.);col+=vec3(1.,.69,.35)*sun*uDay*.7;vec2 uv=d.xz/max(d.y+.18,.05)*1.6+uTime*.002;float cloud=fbm(uv);float clouds=smoothstep(.44-.13*uCloud,.68-.1*uCloud,cloud);col=mix(col,mix(vec3(.008,.012,.02),vec3(.89,.9,.87),uDay),clouds*(.4+uCloud*.5)*smoothstep(-.05,.18,d.y));float star=step(.9984,hash(floor(d.xz/(abs(d.y)+.08)*500.)));col+=vec3(star)*(1.-uDay)*smoothstep(.05,.5,d.y)*.7;gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>}`}),t=new At(new Nn(1200,36,20),s);return t.renderOrder=-10,t.userData.excludeFromAO=!0,t}async function sy(){const s=Mt("world");Ve=new Xv({canvas:s,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1}),Ve.setPixelRatio(Math.min(devicePixelRatio,Ge?1.6:1)),Ve.setSize(innerWidth,innerHeight),Ve.shadowMap.enabled=!0,Ve.shadowMap.type=$u,Ve.toneMapping=Mc,Ve.toneMappingExposure=.95,Ve.info.autoReset=!1,He=new bd,He.fog=new Lc(12241872,.004),It=new sn(48,innerWidth/innerHeight,.1,1500),It.position.set(...Js[0].position),Me=new gx(It,s),Me.target.set(...Js[0].target),Me.enableDamping=!0,Me.dampingFactor=.045,Me.minDistance=10,Me.maxDistance=90,Me.maxPolarAngle=Math.PI/2-.03,Me.minPolarAngle=.13,Me.enablePan=!0,Me.panSpeed=.55,Me.rotateSpeed=.45,Me.zoomSpeed=.7,Me.addEventListener("start",()=>{Xn=null});const t=new Cx,e=new cc(Ve),n=e.fromScene(t,.04);He.environment=n.texture,He.environmentIntensity=.2,t.dispose(),e.dispose(),mc=new Xm(14017008,5596742,.75),He.add(mc),we=new Zd(16372634,3),we.position.set(-30,40,5),we.castShadow=!0,we.shadow.mapSize.set(2048,2048),we.shadow.camera.left=-55,we.shadow.camera.right=55,we.shadow.camera.top=55,we.shadow.camera.bottom=-55,we.shadow.camera.near=1,we.shadow.camera.far=180,we.shadow.normalBias=.025,we.shadow.bias=-12e-5,we.shadow.radius=3,we.target.position.set(0,4,-15),He.add(we),He.add(we.target),gi=iy(),He.add(gi),we.shadow.autoUpdate=!1,Mt("loading-detail").textContent="正在展开摩尔城堡与前庭",await new Promise(o=>setTimeout(o,30)),Jn=new EM(Re,!0),He.add(Jn.group),te=new JM(He,Jn),pc=new QM((o,a)=>{a==="fast"?vf(o):ly(o)},ay),oy();const i=new fn(innerWidth,innerHeight,{type:Un});i.samples=Ge?4:0,un=new Nx(Ve,i),un.addPass(new Ux(He,It)),Rr=new DM(He,It),Rr.enabled=Ge,un.addPass(Rr),jo=new $s(new $(innerWidth,innerHeight),.1,.55,1.2),jo.enabled=Ge,we.castShadow=Ge,un.addPass(jo);const r=new rf({uniforms:{tDiffuse:{value:null},uTime:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float uTime;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);float l=dot(c.rgb,vec3(.2126,.7152,.0722));c.rgb=mix(vec3(l),c.rgb,.99);c.rgb*=vec3(1.01,1.,.99);float vig=1.-smoothstep(.2,.85,distance(vUv,vec2(.5)))*.1;c.rgb*=vig;gl_FragColor=c;}"});un.addPass(r),un.addPass(new Fx),ry(),gc(),gf(hn,!0),jc(),xf(),await Jn.loadAssets(o=>{Mt("loading-detail").textContent=o}),await te.loadWorld(o=>{Mt("loading-detail").textContent=o}),Qs=!0,Kc(),Mt("loading").classList.add("done"),setTimeout(()=>Mt("loading").remove(),1100),Object.defineProperty(window,"__estate",{get:()=>({ready:Qs,weather:hn,hour:In,walking:dn,day:Yc,audio:zi.playing,audioState:zi.state,highQuality:Ge,activeDestination:ma,position:It.position.toArray(),loadedAssets:[...Jn.externalAssets],rainVisible:Jn.rain.visible,snowVisible:Jn.snow.visible,daylight:gi.material.uniforms.uDay.value,drawCalls:Ve.info.render.calls,triangles:Ve.info.render.triangles,fps:pf,connectedWorld:!0,outdoorSites:Hi.map(o=>o.id),loadedRegions:te.loadedRegions,playerPosition:_e.toArray(),navigation:ee?{destination:ee.id,remaining:ee.points.length-ee.index,auto:ee.auto}:null,activeRegion:te.activeId,regionLoading:te.loading,regionMeshCount:te.meshCount,sceneMeshCount:te.sceneMeshCount,sceneTriangleCount:te.sceneTriangleCount,cameraTarget:Me.target.toArray(),natureAssets:[...Jn.vegetation.loadedAssets],contactShadows:Rr.enabled,input:[...be],velocity:Pn.toArray(),groundClearance:te.groundClearance(It.position),canWalkForward:te.canMove(It.position.x,It.position.z-.1),navigationRoute:ee?.points??[],navigationValidation:ee?te.inspectRoute(ee.points):null,visibleRegions:[...te.districts.values()].filter(o=>o.region.group.visible).map(o=>o.id),weatherPosition:Jn.rain.position.toArray()})})}function gc(){It.aspect=innerWidth/innerHeight,It.updateProjectionMatrix(),Ve.setSize(innerWidth,innerHeight),un.setSize(innerWidth,innerHeight),!dn&&ma===0&&te.activeId==="castle"&&(innerWidth<760?(It.position.set(32,24,58),Me.target.set(0,7,-10)):(It.position.set(...Js[0].position),Me.target.set(...Js[0].target)))}function ry(){addEventListener("resize",gc),addEventListener("keydown",o=>{if(o.code==="KeyM"){o.preventDefault(),be.clear(),pc.open(te.activeId);return}if(!document.querySelector("dialog[open]")){if(o.code==="Escape"&&dn){_c();return}o.target instanceof HTMLInputElement||o.target instanceof HTMLTextAreaElement||["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(o.code)&&(be.add(o.code),ee&&(ee.auto=!1),dn&&o.preventDefault())}}),addEventListener("keyup",o=>be.delete(o.code)),addEventListener("blur",()=>{be.clear(),Hn=null}),document.addEventListener("visibilitychange",()=>{document.hidden&&be.clear()}),Mt("world").addEventListener("pointerdown",o=>{dn&&(Hn={x:o.clientX,y:o.clientY,id:o.pointerId},Mt("world").setPointerCapture(o.pointerId))}),Mt("world").addEventListener("pointermove",o=>{!dn||!Hn||Hn.id!==o.pointerId||(xn-=(o.clientX-Hn.x)*.0035,bi=Je.clamp(bi-(o.clientY-Hn.y)*.0035,-1.25,1.25),Hn.x=o.clientX,Hn.y=o.clientY)}),Mt("world").addEventListener("pointerup",()=>Hn=null),Mt("world").addEventListener("pointercancel",()=>Hn=null),document.querySelectorAll("[data-move]").forEach(o=>{o.addEventListener("pointerdown",a=>{a.preventDefault(),be.add(o.dataset.move),ee&&(ee.auto=!1),o.setPointerCapture(a.pointerId)});for(const a of["pointerup","pointercancel","lostpointercapture"])o.addEventListener(a,()=>be.delete(o.dataset.move))}),Mt("environment-toggle").addEventListener("click",()=>{const o=document.body.classList.toggle("environment-open");Mt("environment-toggle").setAttribute("aria-expanded",String(o))}),Mt("route-auto").addEventListener("click",()=>{ee&&(ee.auto=!ee.auto,be.clear())}),Mt("route-cancel").addEventListener("click",or),Mt("enter").addEventListener("click",()=>Kc()),Mt("exit-walk").addEventListener("click",_c),document.querySelectorAll("[data-weather]").forEach(o=>o.addEventListener("click",()=>gf(o.dataset.weather))),Mt("time").addEventListener("input",()=>{In=+Mt("time").value,jc(),Ur()}),Mt("auto-time").addEventListener("click",()=>{Qi=!Qi,Mt("auto-time").innerHTML=`<i data-lucide="${Qi?"pause":"play"}"></i> ${Qi?"流转中":"已暂停"}`,Mt("auto-time").setAttribute("aria-pressed",String(Qi)),Mt("auto-time").title=Qi?"暂停昼夜流转":"继续昼夜流转",Yo()});async function s(){try{const o=await zi.toggle();document.body.classList.toggle("audio-playing",o),Mt("audio-toggle").innerHTML=`<i data-lucide="${o?"volume-2":"volume-x"}"></i>`,Mt("audio-toggle").setAttribute("aria-label",o?"关闭音乐":"开启音乐"),Mt("audio-toggle").title=o?"关闭音乐":"开启音乐",Mt("sound-status").textContent=o?"原创环境音乐 · 正在播放":"原创环境音乐 · 点击聆听",Yo()}catch{Dn("声音暂时未能开启，请再次点击。")}}Mt("audio-toggle").addEventListener("click",s),Mt("soundscape").addEventListener("click",s);const t=Mt("volume");t.value=String(Number.isFinite(rs.volume)?Je.clamp(rs.volume,0,1):.45),zi.setVolume(+t.value),t.addEventListener("input",()=>{zi.setVolume(+t.value),Ur()}),Mt("fullscreen").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Dn("当前浏览器暂不支持全屏。")}});const e=o=>{be.clear(),Mt(o).showModal()};Mt("nav-journal").addEventListener("click",()=>e("journal")),Mt("nav-guide").addEventListener("click",()=>e("guide"));const n=()=>{be.clear(),Pn.set(0,0,0),pc.open(te.activeId)};Mt("map-expand").addEventListener("click",n),Mt("nav-world").addEventListener("click",n),document.querySelectorAll("dialog").forEach(o=>{o.querySelector("button.dialog-close").addEventListener("click",()=>o.close()),o.addEventListener("click",a=>{if(a.target===o){const l=o.getBoundingClientRect();(a.clientX<l.left||a.clientX>l.right||a.clientY<l.top||a.clientY>l.bottom)&&o.close()}})}),document.querySelectorAll("[data-destination]").forEach(o=>o.addEventListener("click",()=>{document.querySelectorAll("dialog[open]").forEach(a=>a.close()),_f(Number(o.dataset.destination))}));const i=Mt("quality"),r=()=>{i.innerHTML=`${Ge?"高画质":"流畅画质"} <i data-lucide="chevron-down"></i>`,Yo()};r(),i.addEventListener("click",()=>{Ge=!Ge,Ve.setPixelRatio(Math.min(devicePixelRatio,Ge?1.6:1)),un.setPixelRatio(Ve.getPixelRatio()),jo.enabled=Ge,Rr.enabled=Ge,we.castShadow=Ge,un.renderTarget1.samples=Ge?4:0,un.renderTarget2.samples=Ge?4:0,un.renderTarget1.dispose(),un.renderTarget2.dispose(),gc(),r(),Ur(),Dn(Ge?"已开启接触阴影、抗锯齿与柔和辉光。":"已切换流畅画质。")}),Mt("photo").addEventListener("click",()=>{document.body.classList.add("ui-hidden"),requestAnimationFrame(()=>{un.render(),Ve.domElement.toBlob(o=>{if(document.body.classList.remove("ui-hidden"),!o){Dn("画面保存失败。");return}const a=URL.createObjectURL(o),l=document.createElement("a");l.href=a,l.download=`摩尔庄园-${hn}-${Math.floor(In)}时.png`,l.click(),setTimeout(()=>URL.revokeObjectURL(a),1e3),Dn("此刻的庄园，已为你留存。")})})})}function oy(){const s=t=>na(t[0],t[1]).join(",");Mt("minimap").innerHTML=`<rect width="180" height="140" rx="12" fill="#4b5944" opacity=".6"/>${[...Yr,...pa].map(t=>`<polyline points="${t.points.map(s).join(" ")}" fill="none" stroke="#d2b67f" stroke-width="1.3" opacity=".8"/>`).join("")}${vn.map(t=>{const[e,n]=na(t.worldPosition[0],t.worldPosition[2]);return`<g><circle cx="${e}" cy="${n}" r="3.4" fill="${t.color}" stroke="#f2dcaa" stroke-width=".5"/><text x="${e}" y="${n-6}" fill="#f8e8c5" font-size="4.7" text-anchor="middle">${t.name.replace("摩尔拉雅雪山","雪山").replace("摩尔城堡","城堡")}</text></g>`}).join("")}<polyline id="map-route" fill="none" stroke="#ffe1a0" stroke-width="1.5"/><circle id="map-player" r="2.6" fill="#fff8d8" stroke="#9b783f" stroke-width=".6"/>`,Mt("minimap").setAttribute("aria-label","连续世界地图，全部十二个地区通过道路相连"),Mt("local-map-title").textContent="连续世界",Mt("map-hint").textContent="M 世界地图 · 选择路线"}function Zc(){const s=te.activeId,t=si[s];mf=s,Mt("location-title").textContent=s==="castle"?"城堡前庭":t.name,Mt("location-description").textContent=t.subtitle,document.querySelector("h1 > span").textContent=t.name,document.querySelector(".edition").textContent="CONNECTED WORLD",document.querySelector(".caption-index").innerHTML=`${String(vn.indexOf(t)+1).padStart(2,"0")} <span>/ 12</span>`,Mt("world-status").textContent=`${t.name} · 连续世界`,Mt("walk-location").textContent=t.name}function _f(s){const t=Js[s];if(t){if(te.activeId!=="castle"){vf("castle").then(()=>_f(s));return}or(),ma=s,_e.set(t.walk[0],te.heightAt(...t.walk),t.walk[1]),dn?(It.position.copy(_e).add(new E(0,1.7,0)),xn=0,bi=0):Xn={position:new E(...t.position),target:new E(...t.target)},Mt("location-title").textContent=t.name,Mt("location-description").textContent=t.description}}async function vf(s){if(!(!(s in si)&&!(s in ea)||hl)){hl=!0,document.body.classList.remove("world-overview"),Me.maxDistance=90,be.clear(),or(),Xn=null;try{const t=ea[s],e=t?.region??s;await te.travel(e);const n=t?{...te.destination,walk:uf(t),position:[t.position[0]+24,Re(...t.position)+18,t.position[1]+29],target:[t.position[0],Re(...t.position)+2,t.position[1]]}:te.destination;ma=0,_e.set(n.walk[0],te.heightAt(...n.walk),n.walk[1]),dn?(It.position.copy(_e).add(new E(0,1.7,0)),xn=t?.kind==="summit"?Math.PI:t?Math.atan2(-(t.position[0]-n.walk[0]),-(t.position[1]-n.walk[1])):0,bi=t?.kind==="summit"?-.28:0):(It.position.set(...n.position),Me.target.set(...n.target),Me.update()),Zc(),Dn(`已抵达${si[e].name}，其他地区仍在同一个世界中。`)}catch(t){console.error("World travel failed",t),Dn("未能到达这个地点。")}finally{hl=!1}}}function ay(){Qs&&(dn&&_c(),or(),Xn=null,Me.maxDistance=1250,It.position.set(-65,660,730),Me.target.set(-35,0,-10),Me.update(),document.body.classList.add("world-overview"),He.fog.density=65e-5,Mt("location-title").textContent="连续世界全境",Mt("location-description").textContent="12 个户外地区 · 16 条道路 · 8 处户外子地点")}function Kc(){Qs&&(document.body.classList.remove("world-overview"),Me.maxDistance=90,dn=!0,Xn=null,Me.enabled=!1,be.clear(),Pn.set(0,0,0),It.position.copy(_e),It.position.y=te.heightAt(_e.x,_e.z)+1.7,It.fov=64,It.updateProjectionMatrix(),xn=0,bi=0,It.rotation.order="YXZ",It.rotation.set(0,0,0),document.body.classList.add("walking"),Mt("walk-hud").hidden=!1,Mt("enter").blur(),Zc())}function _c(){if(!dn)return;_e.copy(It.position),_e.y=te.heightAt(It.position.x,It.position.z),dn=!1,be.clear(),Hn=null,ee&&(ee.auto=!1),Me.enabled=!0,document.body.classList.remove("walking"),Mt("walk-hud").hidden=!0,It.rotation.order="XYZ",It.fov=48,It.updateProjectionMatrix();const s=te.destination;Xn={position:new E(...s.position),target:new E(...s.target)}}function or(){ee=null,Mt("route-panel").hidden=!0,Oi&&(He.remove(Oi),Oi.geometry.dispose(),Oi.material.dispose(),Oi=null),Mt("map-route")?.setAttribute("points","")}function ly(s){if(!Qs)return;const t=ea[s],e=t?.name??si[s].name,n=t?{walk:uf(t)}:te.destinationFor(s),i=te.route([_e.x,_e.z],n.walk);if(i.length<2){Dn("当前起点暂时找不到通路，请移动到附近道路后重试。");return}or(),dn||Kc(),ee={id:s,name:e,points:i,index:1,auto:!1},Mt("route-panel").hidden=!1,Mt("route-name").textContent=e,Mt("map-route").setAttribute("points",i.map(o=>na(...o).join(",")).join(" "));const r=[];for(let o=1;o<i.length;o++){const a=i[o-1],l=i[o],c=Math.ceil(Math.hypot(l[0]-a[0],l[1]-a[1])/1.5);for(let h=0;h<c;h++){const u=a[0]+(l[0]-a[0])*h/c,d=a[1]+(l[1]-a[1])*h/c;r.push(new E(u,te.heightAt(u,d)+.045,d))}}Oi=new qs(new pe().setFromPoints(r),new Lm({color:15978890,dashSize:1.3,gapSize:.9,transparent:!0,opacity:.75,depthWrite:!1})),Oi.computeLineDistances(),He.add(Oi),Dn(`前往${e}：沿金色引导线行走，或点击「沿路漫游」。`)}function cy(s){if(!ee)return!1;const t=ee;let e=t.points[t.index];for(;e&&Math.hypot(It.position.x-e[0],It.position.z-e[1])<.13;)t.index++,e=t.points[t.index];if(!e)return Dn(`已沿路抵达${t.name}`),or(),!1;if(!t.auto)return!1;const n=e[0]-It.position.x,i=e[1]-It.position.z,r=Math.hypot(n,i),o=Math.min(r,s*9),a=It.position.x+n/r*o,l=It.position.z+i/r*o;if(!te.canMove(a,l))return t.auto=!1,Dn("前方有障碍，可以手动绕行。"),!1;It.position.set(a,te.heightAt(a,l)+1.7,l),Pn.set(0,0,0);const c=Math.atan2(-n,-i),h=Je.euclideanModulo(c-xn+Math.PI,Math.PI*2)-Math.PI;return xn+=h*(1-Math.exp(-s*3)),bi=Je.damp(bi,0,3,s),It.rotation.set(bi,xn,0),zi.footstep(),!0}function hy(s,t){const e=Number(be.has("KeyW")||be.has("ArrowUp"))-Number(be.has("KeyS")||be.has("ArrowDown")),n=Number(be.has("KeyD")||be.has("ArrowRight"))-Number(be.has("KeyA")||be.has("ArrowLeft")),i=Math.hypot(e,n)||1,r=be.has("ShiftLeft")||be.has("ShiftRight")?11:5,o=(Math.cos(xn)*n-Math.sin(xn)*e)/i*r,a=(-Math.sin(xn)*n-Math.cos(xn)*e)/i*r;Pn.x=Je.damp(Pn.x,o,10,s),Pn.z=Je.damp(Pn.z,a,10,s);const l=It.position.x+Pn.x*s,c=It.position.z+Pn.z*s;te.canMove(l,It.position.z)&&(It.position.x=l),te.canMove(It.position.x,c)&&(It.position.z=c);const h=Math.abs(Pn.x)+Math.abs(Pn.z)>.15,u=h?Math.sin(t*(r===11?12:8))*.025:0;It.position.y=Je.damp(It.position.y,te.heightAt(It.position.x,It.position.z)+1.7+u,9,s),It.rotation.set(bi,xn,0),h&&zi.footstep()}const Zu=new Kd;let dl=0,fl=0,pl=0,zo=0;function xf(){requestAnimationFrame(xf);const s=Zu.getDelta(),t=Math.min(s,.05),e=Zu.elapsedTime;if(document.hidden||!Qs)return;Qi&&(In+=t/30,In>=24&&(In-=24,Yc++));const n=Math.sin((In-6)/24*Math.PI*2),i=Je.smoothstep(n,-.22,.45),r=hn==="rain"?.88:hn==="snow"?.75:hn==="mist"?.55:.15,o=Je.smoothstep(1-Math.abs(n),.35,1)*i;ju.setHex(16774109).lerp(new mt(16767909),o*.6),we.color.copy(ju),we.intensity=i*(3-r*1.5),we.position.set(_e.x+Math.cos((In-6)/24*Math.PI*2)*-55,Math.max(8,n*65)+_e.y,_e.z+38),we.target.position.set(_e.x,_e.y,_e.z-8),mc.intensity=.16+i*.62,He.environmentIntensity=.08+i*.14,ul.setHex(1056298).lerp(new mt(hn==="rain"?8557982:hn==="snow"?11846861:7514310),i),gi.material.uniforms.uTime.value=e,gi.material.uniforms.uDay.value=i,gi.material.uniforms.uCloud.value=r,gi.material.uniforms.uSky.value.copy(ul),gi.material.uniforms.uSun.value.copy(we.position).sub(_e).normalize();const a=He.fog;if(a.color.copy(ul).multiplyScalar(.92),a.density=Je.damp(a.density,hn==="mist"?.004:hn==="rain"?.0045:hn==="snow"?.005:document.body.classList.contains("world-overview")?65e-5:.0019,1,t),Ve.toneMappingExposure=.93+i*.02,Jn.update(e,t,hn,i,_e),te.update(e,t,i,_e.x,_e.z,document.body.classList.contains("world-overview")),dn?(cy(t)||hy(t,e),_e.copy(It.position),_e.y=te.heightAt(It.position.x,It.position.z)):(Xn&&(It.position.lerp(Xn.position,1-Math.exp(-t*2.8)),Me.target.lerp(Xn.target,1-Math.exp(-t*2.8)),It.position.distanceTo(Xn.position)<.03&&(Xn=null)),Me.update()),dl+=t,fl+=t,pl++,zo+=s,zo>1&&(pf=Math.round(pl/zo),pl=0,zo=0),dl>.3){jc(),dl=0;const[l,c]=na(_e.x,_e.z);if(Mt("map-player").setAttribute("cx",String(l)),Mt("map-player").setAttribute("cy",String(c)),mf!==te.activeId&&Zc(),ee){let h=Math.hypot(It.position.x-ee.points[ee.index][0],It.position.z-ee.points[ee.index][1]);for(let f=ee.index+1;f<ee.points.length;f++)h+=Math.hypot(ee.points[f][0]-ee.points[f-1][0],ee.points[f][1]-ee.points[f-1][1]);Mt("route-distance").textContent=`${Math.round(h)} m`,Mt("route-auto").textContent=ee.auto?"暂停漫游":"沿路漫游";const u=ee.points[ee.index],d=Math.atan2(u[0]-_e.x,-(u[1]-_e.z))+xn;Mt("route-arrow").style.transform=`rotate(${d}rad)`}}fl>8&&(Ur(),fl=0),gi.position.copy(It.position),Ve.info.reset(),we.shadow.needsUpdate=!0,un.render()}sy().catch(s=>{console.error("Estate initialization failed",s),Mt("loading").innerHTML='<div class="fatal"><h2>摩尔庄园暂时未能展开</h2><p>请使用支持 WebGL 2 的现代浏览器，并开启硬件加速后刷新。</p><p>如果网络连接不稳定，请稍后重试。</p><button onclick="location.reload()">重新进入 →</button></div>'});
