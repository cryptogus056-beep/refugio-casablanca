(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ja="170",ru=0,No=1,su=2,Zl=1,Kl=2,Rn=3,Dn=0,be=1,ye=2,qn=0,Fi=1,Oo=2,Fo=3,zo=4,au=5,ri=100,ou=101,lu=102,cu=103,uu=104,hu=200,fu=201,du=202,pu=203,sa=204,aa=205,mu=206,gu=207,_u=208,xu=209,vu=210,Mu=211,Su=212,yu=213,bu=214,oa=0,la=1,ca=2,Wi=3,ua=4,ha=5,fa=6,da=7,Jl=0,Eu=1,Tu=2,Yn=0,Au=1,wu=2,Ru=3,Ql=4,Cu=5,Pu=6,Lu=7,tc=300,Xi=301,qi=302,pa=303,ma=304,fs=306,os=1e3,ai=1001,ga=1002,je=1003,Du=1004,Cr=1005,mn=1006,As=1007,oi=1008,In=1009,ec=1010,nc=1011,xr=1012,$a=1013,hi=1014,gn=1015,Mr=1016,Za=1017,Ka=1018,Yi=1020,ic=35902,rc=1021,sc=1022,ln=1023,ac=1024,oc=1025,zi=1026,ji=1027,Ja=1028,Qa=1029,lc=1030,to=1031,eo=1033,ts=33776,es=33777,ns=33778,is=33779,_a=35840,xa=35841,va=35842,Ma=35843,Sa=36196,ya=37492,ba=37496,Ea=37808,Ta=37809,Aa=37810,wa=37811,Ra=37812,Ca=37813,Pa=37814,La=37815,Da=37816,Ia=37817,Ua=37818,Na=37819,Oa=37820,Fa=37821,rs=36492,za=36494,Ba=36495,cc=36283,ka=36284,Ha=36285,Ga=36286,Iu=3200,Uu=3201,uc=0,Nu=1,Xn="",Xe="srgb",Ki="srgb-linear",ds="linear",Qt="srgb",gi=7680,Bo=519,Ou=512,Fu=513,zu=514,hc=515,Bu=516,ku=517,Hu=518,Gu=519,ko=35044,Ho="300 es",Cn=2e3,ls=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Go=1234567;const gr=Math.PI/180,vr=180/Math.PI;function Qi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]).toLowerCase()}function Ie(n,t,e){return Math.max(t,Math.min(e,n))}function no(n,t){return(n%t+t)%t}function Vu(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Wu(n,t,e){return n!==t?(e-n)/(t-n):0}function _r(n,t,e){return(1-e)*n+e*t}function Xu(n,t,e,i){return _r(n,t,1-Math.exp(-e*i))}function qu(n,t=1){return t-Math.abs(no(n,t*2)-t)}function Yu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ju(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function $u(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Zu(n,t){return n+Math.random()*(t-n)}function Ku(n){return n*(.5-Math.random())}function Ju(n){n!==void 0&&(Go=n);let t=Go+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qu(n){return n*gr}function th(n){return n*vr}function eh(n){return(n&n-1)===0&&n!==0}function nh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ih(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rh(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),u=s((t+i)/2),c=a((t+i)/2),f=s((t-i)/2),h=a((t-i)/2),p=s((i-t)/2),g=a((i-t)/2);switch(r){case"XYX":n.set(o*c,l*f,l*h,o*u);break;case"YZY":n.set(l*h,o*c,l*f,o*u);break;case"ZXZ":n.set(l*f,l*h,o*c,o*u);break;case"XZX":n.set(o*c,l*g,l*p,o*u);break;case"YXY":n.set(l*p,o*c,l*g,o*u);break;case"ZYZ":n.set(l*g,l*p,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ii(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Le(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const io={DEG2RAD:gr,RAD2DEG:vr,generateUUID:Qi,clamp:Ie,euclideanModulo:no,mapLinear:Vu,inverseLerp:Wu,lerp:_r,damp:Xu,pingpong:qu,smoothstep:Yu,smootherstep:ju,randInt:$u,randFloat:Zu,randFloatSpread:Ku,seededRandom:Ju,degToRad:Qu,radToDeg:th,isPowerOfTwo:eh,ceilPowerOfTwo:nh,floorPowerOfTwo:ih,setQuaternionFromProperEuler:rh,normalize:Le,denormalize:Ii};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,i,r,s,a,o,l,u){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,u)}set(t,e,i,r,s,a,o,l,u){const c=this.elements;return c[0]=t,c[1]=r,c[2]=o,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],y=r[1],E=r[4],x=r[7],P=r[2],A=r[5],w=r[8];return s[0]=a*_+o*y+l*P,s[3]=a*m+o*E+l*A,s[6]=a*d+o*x+l*w,s[1]=u*_+c*y+f*P,s[4]=u*m+c*E+f*A,s[7]=u*d+c*x+f*w,s[2]=h*_+p*y+g*P,s[5]=h*m+p*E+g*A,s[8]=h*d+p*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8];return e*a*c-e*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8],f=c*a-o*u,h=o*l-c*s,p=u*s-a*l,g=e*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*u-c*i)*_,t[2]=(o*i-r*a)*_,t[3]=h*_,t[4]=(c*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(i*l-u*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+t,-r*u,r*l,-r*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ws.makeScale(t,e)),this}rotate(t){return this.premultiply(ws.makeRotation(-t)),this}translate(t,e){return this.premultiply(ws.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ws=new Nt;function fc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function cs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sh(){const n=cs("canvas");return n.style.display="block",n}const Vo={};function pr(n){n in Vo||(Vo[n]=!0,console.warn(n))}function ah(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function oh(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lh(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(n.r=Pn(n.r),n.g=Pn(n.g),n.b=Pn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(n.r=Bi(n.r),n.g=Bi(n.g),n.b=Bi(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Xn?ds:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Pn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Wo=[.64,.33,.3,.6,.15,.06],Xo=[.2126,.7152,.0722],qo=[.3127,.329],Yo=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jo=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Ki]:{primaries:Wo,whitePoint:qo,transfer:ds,toXYZ:Yo,fromXYZ:jo,luminanceCoefficients:Xo,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:Wo,whitePoint:qo,transfer:Qt,toXYZ:Yo,fromXYZ:jo,luminanceCoefficients:Xo,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}});let _i;class ch{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=cs("canvas")),_i.width=t.width,_i.height=t.height;const i=_i.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pn(e[i]/255)*255):e[i]=Pn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uh=0;class dc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Rs(r[a].image)):s.push(Rs(r[a]))}else s=Rs(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Rs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ch.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hh=0;class Re extends Ji{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,i=ai,r=ai,s=mn,a=oi,o=ln,l=In,u=Re.DEFAULT_ANISOTROPY,c=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Qi(),this.name="",this.source=new dc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case os:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case os:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=tc;Re.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,i=0,r=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(u+1)/2,x=(p+1)/2,P=(d+1)/2,A=(c+h)/4,w=(f+_)/4,C=(g+m)/4;return E>x&&E>P?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=A/i,s=w/i):x>P?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=C/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=C/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-c)/y,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fh extends Ji{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Re(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new dc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends fh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class pc extends Re{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dh extends Re{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||u!==p||c!==g){let m=1-o;const d=l*h+u*p+c*g+f*_,y=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const P=Math.sqrt(E),A=Math.atan2(P,d*y);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}const x=o*y;if(l=l*m+h*x,u=u*m+p*x,c=c*m+g*x,f=f*m+_*x,m===1-o){const P=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=P,u*=P,c*=P,f*=P}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+c*f+l*p-u*h,t[e+1]=l*g+c*h+u*f-o*p,t[e+2]=u*g+c*p+o*h-l*f,t[e+3]=c*g-o*f-l*h-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"YXZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"ZXY":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"ZYX":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"YZX":this._x=h*c*f+u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f-h*p*g;break;case"XZY":this._x=h*c*f-u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],u=e[2],c=e[6],f=e[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-e)*c)/u,h=Math.sin(e*c)/u;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($o.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($o.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*r-o*i),c=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Cs.copy(this).projectOnVector(t),this.sub(Cs)}reflect(t){return this.sub(Cs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cs=new D,$o=new Nn;class di{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(s,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),Lr.subVectors(this.max,sr),xi.subVectors(t.a,sr),vi.subVectors(t.b,sr),Mi.subVectors(t.c,sr),zn.subVectors(vi,xi),Bn.subVectors(Mi,vi),Zn.subVectors(xi,Mi);let e=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-Zn.z,Zn.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,Zn.z,0,-Zn.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-Zn.y,Zn.x,0];return!Ps(e,xi,vi,Mi,Lr)||(e=[1,0,0,0,1,0,0,0,1],!Ps(e,xi,vi,Mi,Lr))?!1:(Dr.crossVectors(zn,Bn),e=[Dr.x,Dr.y,Dr.z],Ps(e,xi,vi,Mi,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new D,new D,new D,new D,new D,new D,new D,new D],rn=new D,Pr=new di,xi=new D,vi=new D,Mi=new D,zn=new D,Bn=new D,Zn=new D,sr=new D,Lr=new D,Dr=new D,Kn=new D;function Ps(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Kn.fromArray(n,s);const o=r.x*Math.abs(Kn.x)+r.y*Math.abs(Kn.y)+r.z*Math.abs(Kn.z),l=t.dot(Kn),u=e.dot(Kn),c=i.dot(Kn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const ph=new di,ar=new D,Ls=new D;class Sr{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ph.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);const e=ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ar,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ls.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(Ls)),this.expandByPoint(ar.copy(t.center).sub(Ls))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new D,Ds=new D,Ir=new D,kn=new D,Is=new D,Ur=new D,Us=new D;class mc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ds.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Ds);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ir),o=kn.dot(this.direction),l=-kn.dot(Ir),u=kn.lengthSq(),c=Math.abs(1-a*a);let f,h,p,g;if(c>0)if(f=a*l-o,h=a*o-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+u}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ds).addScaledVector(Ir,h),p}intersectSphere(t,e){En.subVectors(t.center,this.origin);const i=En.dot(this.direction),r=En.dot(En)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(t.min.x-h.x)*u,r=(t.max.x-h.x)*u):(i=(t.max.x-h.x)*u,r=(t.min.x-h.x)*u),c>=0?(s=(t.min.y-h.y)*c,a=(t.max.y-h.y)*c):(s=(t.max.y-h.y)*c,a=(t.min.y-h.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,i,r,s){Is.subVectors(e,t),Ur.subVectors(i,t),Us.crossVectors(Is,Ur);let a=this.direction.dot(Us),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,t);const l=o*this.direction.dot(Ur.crossVectors(kn,Ur));if(l<0)return null;const u=o*this.direction.dot(Is.cross(kn));if(u<0||l+u>a)return null;const c=-o*kn.dot(Us);return c<0?null:this.at(c/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,i,r,s,a,o,l,u,c,f,h,p,g,_,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,u,c,f,h,p,g,_,m)}set(t,e,i,r,s,a,o,l,u,c,f,h,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Si.setFromMatrixColumn(t,0).length(),s=1/Si.setFromMatrixColumn(t,1).length(),a=1/Si.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*c,p=a*f,g=o*c,_=o*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=p+g*u,e[5]=h-_*u,e[9]=-o*l,e[2]=_-h*u,e[6]=g+p*u,e[10]=a*l}else if(t.order==="YXZ"){const h=l*c,p=l*f,g=u*c,_=u*f;e[0]=h+_*o,e[4]=g*o-p,e[8]=a*u,e[1]=a*f,e[5]=a*c,e[9]=-o,e[2]=p*o-g,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*c,p=l*f,g=u*c,_=u*f;e[0]=h-_*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*c,e[9]=_-h*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*c,p=a*f,g=o*c,_=o*f;e[0]=l*c,e[4]=g*u-p,e[8]=h*u+_,e[1]=l*f,e[5]=_*u+h,e[9]=p*u-g,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*u,g=o*l,_=o*u;e[0]=l*c,e[4]=_-h*f,e[8]=g*f+p,e[1]=f,e[5]=a*c,e[9]=-o*c,e[2]=-u*c,e[6]=p*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=a*l,p=a*u,g=o*l,_=o*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=h*f+_,e[5]=a*c,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*c,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mh,t,gh)}lookAt(t,e,i){const r=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Hn.crossVectors(i,He),Hn.lengthSq()===0&&(Math.abs(i.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Hn.crossVectors(i,He)),Hn.normalize(),Nr.crossVectors(He,Hn),r[0]=Hn.x,r[4]=Nr.x,r[8]=He.x,r[1]=Hn.y,r[5]=Nr.y,r[9]=He.y,r[2]=Hn.z,r[6]=Nr.z,r[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],y=i[3],E=i[7],x=i[11],P=i[15],A=r[0],w=r[4],C=r[8],b=r[12],M=r[1],R=r[5],F=r[9],B=r[13],W=r[2],Y=r[6],V=r[10],K=r[14],G=r[3],rt=r[7],ht=r[11],bt=r[15];return s[0]=a*A+o*M+l*W+u*G,s[4]=a*w+o*R+l*Y+u*rt,s[8]=a*C+o*F+l*V+u*ht,s[12]=a*b+o*B+l*K+u*bt,s[1]=c*A+f*M+h*W+p*G,s[5]=c*w+f*R+h*Y+p*rt,s[9]=c*C+f*F+h*V+p*ht,s[13]=c*b+f*B+h*K+p*bt,s[2]=g*A+_*M+m*W+d*G,s[6]=g*w+_*R+m*Y+d*rt,s[10]=g*C+_*F+m*V+d*ht,s[14]=g*b+_*B+m*K+d*bt,s[3]=y*A+E*M+x*W+P*G,s[7]=y*w+E*R+x*Y+P*rt,s[11]=y*C+E*F+x*V+P*ht,s[15]=y*b+E*B+x*K+P*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],u=t[13],c=t[2],f=t[6],h=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*f-r*u*f-s*o*h+i*u*h+r*o*p-i*l*p)+_*(+e*l*p-e*u*h+s*a*h-r*a*p+r*u*c-s*l*c)+m*(+e*u*f-e*o*p-s*a*f+i*a*p+s*o*c-i*u*c)+d*(-r*o*c-e*l*f+e*o*h+r*a*f-i*a*h+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8],f=t[9],h=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],y=f*m*u-_*h*u+_*l*p-o*m*p-f*l*d+o*h*d,E=g*h*u-c*m*u-g*l*p+a*m*p+c*l*d-a*h*d,x=c*_*u-g*f*u+g*o*p-a*_*p-c*o*d+a*f*d,P=g*f*l-c*_*l-g*o*h+a*_*h+c*o*m-a*f*m,A=e*y+i*E+r*x+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=y*w,t[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*w,t[2]=(o*m*s-_*l*s+_*r*u-i*m*u-o*r*d+i*l*d)*w,t[3]=(f*l*s-o*h*s-f*r*u+i*h*u+o*r*p-i*l*p)*w,t[4]=E*w,t[5]=(c*m*s-g*h*s+g*r*p-e*m*p-c*r*d+e*h*d)*w,t[6]=(g*l*s-a*m*s-g*r*u+e*m*u+a*r*d-e*l*d)*w,t[7]=(a*h*s-c*l*s+c*r*u-e*h*u-a*r*p+e*l*p)*w,t[8]=x*w,t[9]=(g*f*s-c*_*s-g*i*p+e*_*p+c*i*d-e*f*d)*w,t[10]=(a*_*s-g*o*s+g*i*u-e*_*u-a*i*d+e*o*d)*w,t[11]=(c*o*s-a*f*s-c*i*u+e*f*u+a*i*p-e*o*p)*w,t[12]=P*w,t[13]=(c*_*r-g*f*r+g*i*h-e*_*h-c*i*m+e*f*m)*w,t[14]=(g*o*r-a*_*r-g*i*l+e*_*l+a*i*m-e*o*m)*w,t[15]=(a*f*r-c*o*r+c*i*l-e*f*l-a*i*h+e*o*h)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,u=s+s,c=a+a,f=o+o,h=s*u,p=s*c,g=s*f,_=a*c,m=a*f,d=o*f,y=l*u,E=l*c,x=l*f,P=i.x,A=i.y,w=i.z;return r[0]=(1-(_+d))*P,r[1]=(p+x)*P,r[2]=(g-E)*P,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(h+d))*A,r[6]=(m+y)*A,r[7]=0,r[8]=(g+E)*w,r[9]=(m-y)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Si.set(r[0],r[1],r[2]).length();const a=Si.set(r[4],r[5],r[6]).length(),o=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],sn.copy(this);const u=1/s,c=1/a,f=1/o;return sn.elements[0]*=u,sn.elements[1]*=u,sn.elements[2]*=u,sn.elements[4]*=c,sn.elements[5]*=c,sn.elements[6]*=c,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,e.setFromRotationMatrix(sn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Cn){const l=this.elements,u=2*s/(e-t),c=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let p,g;if(o===Cn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ls)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Cn){const l=this.elements,u=1/(e-t),c=1/(i-r),f=1/(a-s),h=(e+t)*u,p=(i+r)*c;let g,_;if(o===Cn)g=(a+s)*f,_=-2*f;else if(o===ls)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Si=new D,sn=new jt,mh=new D(0,0,0),gh=new D(1,1,1),Hn=new D,Nr=new D,He=new D,Zo=new jt,Ko=new Nn;class Pe{constructor(t=0,e=0,i=0,r=Pe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ie(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Zo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ko.setFromEuler(this),this.setFromQuaternion(Ko,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pe.DEFAULT_ORDER="XYZ";class ro{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _h=0;const Jo=new D,yi=new Nn,Tn=new jt,Or=new D,or=new D,xh=new D,vh=new Nn,Qo=new D(1,0,0),tl=new D(0,1,0),el=new D(0,0,1),nl={type:"added"},Mh={type:"removed"},bi={type:"childadded",child:null},Ns={type:"childremoved",child:null};class Ee extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new D,e=new Pe,i=new Nn,r=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new Nt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(Qo,t)}rotateY(t){return this.rotateOnAxis(tl,t)}rotateZ(t){return this.rotateOnAxis(el,t)}translateOnAxis(t,e){return Jo.copy(t).applyQuaternion(this.quaternion),this.position.add(Jo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qo,t)}translateY(t){return this.translateOnAxis(tl,t)}translateZ(t){return this.translateOnAxis(el,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Or.copy(t):Or.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(or,Or,this.up):Tn.lookAt(Or,or,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(Tn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nl),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mh),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nl),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,xh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,vh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),c=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ee.DEFAULT_UP=new D(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new D,An=new D,Os=new D,wn=new D,Ei=new D,Ti=new D,il=new D,Fs=new D,zs=new D,Bs=new D,ks=new ee,Hs=new ee,Gs=new ee;class on{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),an.subVectors(t,e),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){an.subVectors(r,e),An.subVectors(i,e),Os.subVectors(t,e);const a=an.dot(an),o=an.dot(An),l=an.dot(Os),u=An.dot(An),c=An.dot(Os),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-o*c)*h,g=(a*c-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return ks.setScalar(0),Hs.setScalar(0),Gs.setScalar(0),ks.fromBufferAttribute(t,e),Hs.fromBufferAttribute(t,i),Gs.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ks,s.x),a.addScaledVector(Hs,s.y),a.addScaledVector(Gs,s.z),a}static isFrontFacing(t,e,i,r){return an.subVectors(i,e),An.subVectors(t,e),an.cross(An).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),An.subVectors(this.a,this.b),an.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return on.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Ei.subVectors(r,i),Ti.subVectors(s,i),Fs.subVectors(t,i);const l=Ei.dot(Fs),u=Ti.dot(Fs);if(l<=0&&u<=0)return e.copy(i);zs.subVectors(t,r);const c=Ei.dot(zs),f=Ti.dot(zs);if(c>=0&&f<=c)return e.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(i).addScaledVector(Ei,a);Bs.subVectors(t,s);const p=Ei.dot(Bs),g=Ti.dot(Bs);if(g>=0&&p<=g)return e.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),e.copy(i).addScaledVector(Ti,o);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return il.subVectors(s,r),o=(f-c)/(f-c+(p-g)),e.copy(r).addScaledVector(il,o);const d=1/(m+_+h);return a=_*d,o=h*d,e.copy(i).addScaledVector(Ei,a).addScaledVector(Ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function Vs(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Mt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Yt.workingColorSpace){if(t=no(t,1),e=Ie(e,0,1),i=Ie(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Vs(a,s,t+1/3),this.g=Vs(a,s,t),this.b=Vs(a,s,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,e=Xe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const i=gc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Yt.fromWorkingColorSpace(we.copy(this),t),Math.round(Ie(we.r*255,0,255))*65536+Math.round(Ie(we.g*255,0,255))*256+Math.round(Ie(we.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(we.copy(this),e);const i=we.r,r=we.g,s=we.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Xe){Yt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,i=we.g,r=we.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Fr);const i=_r(Gn.h,Fr.h,e),r=_r(Gn.s,Fr.s,e),s=_r(Gn.l,Fr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Mt;Mt.NAMES=gc;let Sh=0;class yr extends Ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Qi(),this.name="",this.blending=Fi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=aa,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(i.blending=this.blending),this.side!==Dn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sa&&(i.blendSrc=this.blendSrc),this.blendDst!==aa&&(i.blendDst=this.blendDst),this.blendEquation!==ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class br extends yr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new D,zr=new zt;class Ce{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ko,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),r=Le(r,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ko&&(t.usage=this.usage),t}}class _c extends Ce{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class xc extends Ce{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class le extends Ce{constructor(t,e,i){super(new Float32Array(t),e,i)}}let yh=0;const Je=new jt,Ws=new Ee,Ai=new D,Ge=new di,lr=new di,xe=new D;class Be extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fc(t)?xc:_c)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,i){return Je.makeTranslation(t,e,i),this.applyMatrix4(Je),this}scale(t,e,i){return Je.makeScale(t,e,i),this.applyMatrix4(Je),this}lookAt(t){return Ws.lookAt(t),Ws.updateMatrix(),this.applyMatrix4(Ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ge.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Ge.min,lr.min),Ge.expandByPoint(xe),xe.addVectors(Ge.max,lr.max),Ge.expandByPoint(xe)):(Ge.expandByPoint(lr.min),Ge.expandByPoint(lr.max))}Ge.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)xe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(xe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)xe.fromBufferAttribute(o,u),l&&(Ai.fromBufferAttribute(t,u),xe.add(Ai)),r=Math.max(r,i.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new D,l[C]=new D;const u=new D,c=new D,f=new D,h=new zt,p=new zt,g=new zt,_=new D,m=new D;function d(C,b,M){u.fromBufferAttribute(i,C),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),c.sub(u),f.sub(u),p.sub(h),g.sub(h);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(R),o[C].add(_),o[b].add(_),o[M].add(_),l[C].add(m),l[b].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,b=y.length;C<b;++C){const M=y[C],R=M.start,F=M.count;for(let B=R,W=R+F;B<W;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const E=new D,x=new D,P=new D,A=new D;function w(C){P.fromBufferAttribute(r,C),A.copy(P);const b=o[C];E.copy(b),E.sub(P.multiplyScalar(P.dot(b))).normalize(),x.crossVectors(A,b);const R=x.dot(l[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,R)}for(let C=0,b=y.length;C<b;++C){const M=y[C],R=M.start,F=M.count;for(let B=R,W=R+F;B<W;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,u=new D,c=new D,f=new D;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=e.count;h<p;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const u=o.array,c=o.itemSize,f=o.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*c;for(let d=0;d<c;d++)h[g++]=u[p++]}return new Ce(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=t(l,i);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=t(h,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(e))}const s=t.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rl=new jt,Jn=new mc,Br=new Sr,sl=new D,kr=new D,Hr=new D,Gr=new D,Xs=new D,Vr=new D,al=new D,Wr=new D;class Wt extends Ee{constructor(t=new Be,e=new br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Vr.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(Xs.fromBufferAttribute(f,t),a?Vr.addScaledVector(Xs,c):Vr.addScaledVector(Xs.sub(e),c))}e.add(Vr)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(s),Jn.copy(t.ray).recast(t.near),!(Br.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Br,sl)===null||Jn.origin.distanceToSquared(sl)>(t.far-t.near)**2))&&(rl.copy(s).invert(),Jn.copy(t.ray).applyMatrix4(rl),!(i.boundingBox!==null&&Jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,P=E;x<P;x+=3){const A=o.getX(x),w=o.getX(x+1),C=o.getX(x+2);r=Xr(this,d,t,i,u,c,f,A,w,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);r=Xr(this,a,t,i,u,c,f,y,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,P=E;x<P;x+=3){const A=x,w=x+1,C=x+2;r=Xr(this,d,t,i,u,c,f,A,w,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=m,E=m+1,x=m+2;r=Xr(this,a,t,i,u,c,f,y,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function bh(n,t,e,i,r,s,a,o){let l;if(t.side===be?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Dn,o),l===null)return null;Wr.copy(o),Wr.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Wr);return u<e.near||u>e.far?null:{distance:u,point:Wr.clone(),object:n}}function Xr(n,t,e,i,r,s,a,o,l,u){n.getVertexPosition(o,kr),n.getVertexPosition(l,Hr),n.getVertexPosition(u,Gr);const c=bh(n,t,e,i,kr,Hr,Gr,al);if(c){const f=new D;on.getBarycoord(al,kr,Hr,Gr,f),r&&(c.uv=on.getInterpolatedAttribute(r,o,l,u,f,new zt)),s&&(c.uv1=on.getInterpolatedAttribute(s,o,l,u,f,new zt)),a&&(c.normal=on.getInterpolatedAttribute(a,o,l,u,f,new D),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new D,materialIndex:0};on.getNormal(kr,Hr,Gr,h.normal),c.face=h,c.barycoord=f}return c}class _n extends Be{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(f,2));function g(_,m,d,y,E,x,P,A,w,C,b){const M=x/w,R=P/C,F=x/2,B=P/2,W=A/2,Y=w+1,V=C+1;let K=0,G=0;const rt=new D;for(let ht=0;ht<V;ht++){const bt=ht*R-B;for(let Bt=0;Bt<Y;Bt++){const ne=Bt*M-F;rt[_]=ne*y,rt[m]=bt*E,rt[d]=W,u.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[d]=A>0?1:-1,c.push(rt.x,rt.y,rt.z),f.push(Bt/w),f.push(1-ht/C),K+=1}}for(let ht=0;ht<C;ht++)for(let bt=0;bt<w;bt++){const Bt=h+bt+Y*ht,ne=h+bt+Y*(ht+1),q=h+(bt+1)+Y*(ht+1),tt=h+(bt+1)+Y*ht;l.push(Bt,ne,tt),l.push(ne,q,tt),G+=6}o.addGroup(p,G,b),p+=G,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $i(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function De(n){const t={};for(let e=0;e<n.length;e++){const i=$i(n[e]);for(const r in i)t[r]=i[r]}return t}function Eh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function vc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Th={clone:$i,merge:De};var Ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends yr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ah,this.fragmentShader=wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=Eh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Mc extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new D,ol=new zt,ll=new zt;class qe extends Mc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,ol,ll),e.subVectors(ll,ol)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,Ri=1;class Rh extends Ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qe(wi,Ri,t,e);r.layers=this.layers,this.add(r);const s=new qe(wi,Ri,t,e);s.layers=this.layers,this.add(s);const a=new qe(wi,Ri,t,e);a.layers=this.layers,this.add(a);const o=new qe(wi,Ri,t,e);o.layers=this.layers,this.add(o);const l=new qe(wi,Ri,t,e);l.layers=this.layers,this.add(l);const u=new qe(wi,Ri,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const u of e)this.remove(u);if(t===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(f,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sc extends Re{constructor(t,e,i,r,s,a,o,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ch extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Sc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _n(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:$i(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:be,blending:qn});s.uniforms.tEquirect.value=e;const a=new Wt(r,s),o=e.minFilter;return e.minFilter===oi&&(e.minFilter=mn),new Rh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const qs=new D,Ph=new D,Lh=new Nt;class ni{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=qs.subVectors(i,e).cross(Ph.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(qs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Lh.getNormalMatrix(t),r=this.coplanarPoint(qs).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Sr,qr=new D;class so{constructor(t=new ni,e=new ni,i=new ni,r=new ni,s=new ni,a=new ni){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Cn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],y=r[13],E=r[14],x=r[15];if(i[0].setComponents(l-s,h-u,m-p,x-d).normalize(),i[1].setComponents(l+s,h+u,m+p,x+d).normalize(),i[2].setComponents(l+a,h+c,m+g,x+y).normalize(),i[3].setComponents(l-a,h-c,m-g,x-y).normalize(),i[4].setComponents(l-o,h-f,m-_,x-E).normalize(),e===Cn)i[5].setComponents(l+o,h+f,m+_,x+E).normalize();else if(e===ls)i[5].setComponents(o,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(qr.x=r.normal.x>0?t.max.x:t.min.x,qr.y=r.normal.y>0?t.max.y:t.min.y,qr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yc(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Dh(n){const t=new WeakMap;function e(o,l){const u=o.array,c=o.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,o),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class Qe extends Be{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=t/o,h=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const y=d*h-a;for(let E=0;E<u;E++){const x=E*f-s;g.push(x,-y,0),_.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const E=y+u*d,x=y+u*(d+1),P=y+1+u*(d+1),A=y+1+u*d;p.push(E,x,A),p.push(x,P,A)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ih=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uh=`#ifdef USE_ALPHAHASH
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
#endif`,Nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bh=`#ifdef USE_AOMAP
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
#endif`,kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hh=`#ifdef USE_BATCHING
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
#endif`,Gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qh=`#ifdef USE_IRIDESCENCE
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
#endif`,Yh=`#ifdef USE_BUMPMAP
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
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nf=`#define PI 3.141592653589793
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
} // validated`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sf=`vec3 transformedNormal = objectNormal;
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
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tf=`uniform bool receiveShadow;
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
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
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
#endif`,Df=`struct PhysicalMaterial {
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
}`,If=`
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Of=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vf=`#if defined( USE_POINTS_UV )
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
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nd=`#ifdef USE_NORMALMAP
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
#endif`,id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ld=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xd=`float getShadowMask() {
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
}`,vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Md=`#ifdef USE_SKINNING
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
#endif`,Sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yd=`#ifdef USE_SKINNING
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
#endif`,bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wd=`#ifdef USE_TRANSMISSION
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
#endif`,Rd=`#ifdef USE_TRANSMISSION
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Id=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ud=`uniform sampler2D t2D;
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
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`#include <common>
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
}`,kd=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hd=`#define DISTANCE
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
}`,Gd=`#define DISTANCE
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
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`uniform float scale;
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
}`,qd=`uniform vec3 diffuse;
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
}`,Yd=`#include <common>
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
}`,jd=`uniform vec3 diffuse;
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
}`,$d=`#define LAMBERT
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
}`,Zd=`#define LAMBERT
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
}`,Kd=`#define MATCAP
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
}`,Jd=`#define MATCAP
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
}`,Qd=`#define NORMAL
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
}`,tp=`#define NORMAL
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
}`,ep=`#define PHONG
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
}`,np=`#define PHONG
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
}`,ip=`#define STANDARD
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
}`,rp=`#define STANDARD
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
}`,sp=`#define TOON
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
}`,ap=`#define TOON
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
}`,op=`uniform float size;
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
}`,lp=`uniform vec3 diffuse;
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
}`,cp=`#include <common>
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
}`,up=`uniform vec3 color;
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
}`,hp=`uniform float rotation;
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
}`,fp=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:Ih,alphahash_pars_fragment:Uh,alphamap_fragment:Nh,alphamap_pars_fragment:Oh,alphatest_fragment:Fh,alphatest_pars_fragment:zh,aomap_fragment:Bh,aomap_pars_fragment:kh,batching_pars_vertex:Hh,batching_vertex:Gh,begin_vertex:Vh,beginnormal_vertex:Wh,bsdfs:Xh,iridescence_fragment:qh,bumpmap_pars_fragment:Yh,clipping_planes_fragment:jh,clipping_planes_pars_fragment:$h,clipping_planes_pars_vertex:Zh,clipping_planes_vertex:Kh,color_fragment:Jh,color_pars_fragment:Qh,color_pars_vertex:tf,color_vertex:ef,common:nf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:sf,displacementmap_pars_vertex:af,displacementmap_vertex:of,emissivemap_fragment:lf,emissivemap_pars_fragment:cf,colorspace_fragment:uf,colorspace_pars_fragment:hf,envmap_fragment:ff,envmap_common_pars_fragment:df,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Af,envmap_vertex:gf,fog_vertex:_f,fog_pars_vertex:xf,fog_fragment:vf,fog_pars_fragment:Mf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:yf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:Ef,lights_pars_begin:Tf,lights_toon_fragment:wf,lights_toon_pars_fragment:Rf,lights_phong_fragment:Cf,lights_phong_pars_fragment:Pf,lights_physical_fragment:Lf,lights_physical_pars_fragment:Df,lights_fragment_begin:If,lights_fragment_maps:Uf,lights_fragment_end:Nf,logdepthbuf_fragment:Of,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:Bf,map_fragment:kf,map_pars_fragment:Hf,map_particle_fragment:Gf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:qf,morphcolor_vertex:Yf,morphnormal_vertex:jf,morphtarget_pars_vertex:$f,morphtarget_vertex:Zf,normal_fragment_begin:Kf,normal_fragment_maps:Jf,normal_pars_fragment:Qf,normal_pars_vertex:td,normal_vertex:ed,normalmap_pars_fragment:nd,clearcoat_normal_fragment_begin:id,clearcoat_normal_fragment_maps:rd,clearcoat_pars_fragment:sd,iridescence_pars_fragment:ad,opaque_fragment:od,packing:ld,premultiplied_alpha_fragment:cd,project_vertex:ud,dithering_fragment:hd,dithering_pars_fragment:fd,roughnessmap_fragment:dd,roughnessmap_pars_fragment:pd,shadowmap_pars_fragment:md,shadowmap_pars_vertex:gd,shadowmap_vertex:_d,shadowmask_pars_fragment:xd,skinbase_vertex:vd,skinning_pars_vertex:Md,skinning_vertex:Sd,skinnormal_vertex:yd,specularmap_fragment:bd,specularmap_pars_fragment:Ed,tonemapping_fragment:Td,tonemapping_pars_fragment:Ad,transmission_fragment:wd,transmission_pars_fragment:Rd,uv_pars_fragment:Cd,uv_pars_vertex:Pd,uv_vertex:Ld,worldpos_vertex:Dd,background_vert:Id,background_frag:Ud,backgroundCube_vert:Nd,backgroundCube_frag:Od,cube_vert:Fd,cube_frag:zd,depth_vert:Bd,depth_frag:kd,distanceRGBA_vert:Hd,distanceRGBA_frag:Gd,equirect_vert:Vd,equirect_frag:Wd,linedashed_vert:Xd,linedashed_frag:qd,meshbasic_vert:Yd,meshbasic_frag:jd,meshlambert_vert:$d,meshlambert_frag:Zd,meshmatcap_vert:Kd,meshmatcap_frag:Jd,meshnormal_vert:Qd,meshnormal_frag:tp,meshphong_vert:ep,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:rp,meshtoon_vert:sp,meshtoon_frag:ap,points_vert:op,points_frag:lp,shadow_vert:cp,shadow_frag:up,sprite_vert:hp,sprite_frag:fp},nt={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},fn={basic:{uniforms:De([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:De([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:De([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:De([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:De([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:De([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:De([nt.points,nt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:De([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:De([nt.common,nt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:De([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:De([nt.sprite,nt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:De([nt.common,nt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:De([nt.lights,nt.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};fn.physical={uniforms:De([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Yr={r:0,b:0,g:0},ti=new Pe,dp=new jt;function pp(n,t,e,i,r,s,a){const o=new Mt(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function g(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?e:t).get(E)),E}function _(y){let E=!1;const x=g(y);x===null?d(o,l):x&&x.isColor&&(d(x,1),E=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,E){const x=g(E);x&&(x.isCubeTexture||x.mapping===fs)?(c===void 0&&(c=new Wt(new _n(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:$i(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ti.copy(E.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dp.makeRotationFromEuler(ti)),c.material.toneMapped=Yt.getTransfer(x.colorSpace)!==Qt,(f!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Wt(new Qe(2,2),new Un({name:"BackgroundMaterial",uniforms:$i(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=Yt.getTransfer(x.colorSpace)!==Qt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function d(y,E){y.getRGB(Yr,vc(n)),i.buffers.color.setClear(Yr.r,Yr.g,Yr.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:_,addToRenderList:m}}function mp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(M,R,F,B,W){let Y=!1;const V=f(B,F,R);s!==V&&(s=V,u(s.object)),Y=p(M,B,F,W),Y&&g(M,B,F,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(M,R,F,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function u(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function f(M,R,F){const B=F.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let Y=W[R.id];Y===void 0&&(Y={},W[R.id]=Y);let V=Y[B];return V===void 0&&(V=h(l()),Y[B]=V),V}function h(M){const R=[],F=[],B=[];for(let W=0;W<e;W++)R[W]=0,F[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,R,F,B){const W=s.attributes,Y=R.attributes;let V=0;const K=F.getAttributes();for(const G in K)if(K[G].location>=0){const ht=W[G];let bt=Y[G];if(bt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),ht===void 0||ht.attribute!==bt||bt&&ht.data!==bt.data)return!0;V++}return s.attributesNum!==V||s.index!==B}function g(M,R,F,B){const W={},Y=R.attributes;let V=0;const K=F.getAttributes();for(const G in K)if(K[G].location>=0){let ht=Y[G];ht===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const bt={};bt.attribute=ht,ht&&ht.data&&(bt.data=ht.data),W[G]=bt,V++}s.attributes=W,s.attributesNum=V,s.index=B}function _(){const M=s.newAttributes;for(let R=0,F=M.length;R<F;R++)M[R]=0}function m(M){d(M,0)}function d(M,R){const F=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;F[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),W[M]!==R&&(n.vertexAttribDivisor(M,R),W[M]=R)}function y(){const M=s.newAttributes,R=s.enabledAttributes;for(let F=0,B=R.length;F<B;F++)R[F]!==M[F]&&(n.disableVertexAttribArray(F),R[F]=0)}function E(M,R,F,B,W,Y,V){V===!0?n.vertexAttribIPointer(M,R,F,W,Y):n.vertexAttribPointer(M,R,F,B,W,Y)}function x(M,R,F,B){_();const W=B.attributes,Y=F.getAttributes(),V=R.defaultAttributeValues;for(const K in Y){const G=Y[K];if(G.location>=0){let rt=W[K];if(rt===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const ht=rt.normalized,bt=rt.itemSize,Bt=t.get(rt);if(Bt===void 0)continue;const ne=Bt.buffer,q=Bt.type,tt=Bt.bytesPerElement,vt=q===n.INT||q===n.UNSIGNED_INT||rt.gpuType===$a;if(rt.isInterleavedBufferAttribute){const st=rt.data,Rt=st.stride,Dt=rt.offset;if(st.isInstancedInterleavedBuffer){for(let kt=0;kt<G.locationSize;kt++)d(G.location+kt,st.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let kt=0;kt<G.locationSize;kt++)m(G.location+kt);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let kt=0;kt<G.locationSize;kt++)E(G.location+kt,bt/G.locationSize,q,ht,Rt*tt,(Dt+bt/G.locationSize*kt)*tt,vt)}else{if(rt.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)d(G.location+st,rt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let st=0;st<G.locationSize;st++)m(G.location+st);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let st=0;st<G.locationSize;st++)E(G.location+st,bt/G.locationSize,q,ht,bt*tt,bt/G.locationSize*st*tt,vt)}}else if(V!==void 0){const ht=V[K];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(G.location,ht);break;case 3:n.vertexAttrib3fv(G.location,ht);break;case 4:n.vertexAttrib4fv(G.location,ht);break;default:n.vertexAttrib1fv(G.location,ht)}}}}y()}function P(){C();for(const M in i){const R=i[M];for(const F in R){const B=R[F];for(const W in B)c(B[W].object),delete B[W];delete R[F]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const F in R){const B=R[F];for(const W in B)c(B[W].object),delete B[W];delete R[F]}delete i[M.id]}function w(M){for(const R in i){const F=i[R];if(F[M.id]===void 0)continue;const B=F[M.id];for(const W in B)c(B[W].object),delete B[W];delete F[M.id]}}function C(){b(),a=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function gp(n,t,e){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function a(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),e.update(c,i,f))}function o(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];e.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)a(u[g],c[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_]*h[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _p(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==ln&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===Mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==In&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==gn&&!C)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:P,maxSamples:A}}function xp(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new ni,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=c(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const y=s?0:i,E=y*4;let x=d.clippingState||null;l.value=x,x=c(g,h,E,p);for(let P=0;P!==E;++P)x[P]=e[P];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,x=p;E!==_;++E,x+=4)a.copy(f[E]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function vp(n){let t=new WeakMap;function e(a,o){return o===pa?a.mapping=Xi:o===ma&&(a.mapping=qi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===pa||o===ma)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Ch(l.height);return u.fromEquirectangularTexture(n,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class bc extends Mc{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ui=4,cl=[.125,.215,.35,.446,.526,.582],si=20,Ys=new bc,ul=new Mt;let js=null,$s=0,Zs=0,Ks=!1;const ii=(1+Math.sqrt(5))/2,Ci=1/ii,hl=[new D(-ii,Ci,0),new D(ii,Ci,0),new D(-Ci,0,ii),new D(Ci,0,ii),new D(0,ii,-Ci),new D(0,ii,Ci),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Va{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){js=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),Zs=this._renderer.getActiveMipmapLevel(),Ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(js,$s,Zs),this._renderer.xr.enabled=Ks,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),js=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),Zs=this._renderer.getActiveMipmapLevel(),Ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Mr,format:ln,colorSpace:Ki,depthBuffer:!1},r=fl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(s)),this._blurMaterial=Sp(s,t,e)}return r}_compileMaterial(t){const e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,Ys)}_sceneToCubeUV(t,e,i,r){const o=new qe(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(ul),c.toneMapping=Yn,c.autoClear=!1;const p=new br({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new Wt(new _n,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ul),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const E=this._cubeSize;jr(r,y*E,d>2?E:0,E,E),c.setRenderTarget(r),_&&c.render(g,o),c.render(t,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Xi||t.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Wt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;jr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ys)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hl[(r-s-1)%hl.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Wt(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*si-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):si;m>si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const d=[];let y=0;for(let w=0;w<si;++w){const C=w/_,b=Math.exp(-C*C/2);d.push(b),w===0?y+=b:w<m&&(y+=2*b)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const x=this._sizeLods[r],P=3*x*(r>E-Ui?r-E+Ui:0),A=4*(this._cubeSize-x);jr(e,P,A,3*x,2*x),l.setRenderTarget(e),l.render(f,Ys)}}function Mp(n){const t=[],e=[],i=[];let r=n;const s=n-Ui+1+cl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Ui?l=cl[a-n+Ui-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,_=3,m=2,d=1,y=new Float32Array(_*g*p),E=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,C=A>2?0:-1,b=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(b,_*g*A),E.set(h,m*g*A);const M=[A,A,A,A,A,A];x.set(M,d*g*A)}const P=new Be;P.setAttribute("position",new Ce(y,_)),P.setAttribute("uv",new Ce(E,m)),P.setAttribute("faceIndex",new Ce(x,d)),t.push(P),r>Ui&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fl(n,t,e){const i=new fi(n,t,e);return i.texture.mapping=fs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Sp(n,t,e){const i=new Float32Array(si),r=new D(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ao(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function dl(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function pl(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ao(){return`

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
	`}function yp(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===pa||l===ma,c=l===Xi||l===qi;if(u||c){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new Va(n)),f=u?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return u&&p&&p.height>0||c&&p&&r(p)?(e===null&&(e=new Va(n)),f=u?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function bp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&pr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ep(n,t,e,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let E=0,x=y.length;E<x;E+=3){const P=y[E+0],A=y[E+1],w=y[E+2];h.push(P,A,A,w,w,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,x=y.length/3-1;E<x;E+=3){const P=E+0,A=E+1,w=E+2;h.push(P,A,A,w,w,P)}}else return;const m=new(fc(h)?xc:_c)(h,1);m.version=_;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function Tp(n,t,e){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*a),e.update(p,i,1)}function u(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*a,g),e.update(p,i,g))}function c(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function f(h,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,g);let d=0;for(let y=0;y<g;y++)d+=p[y]*_[y];e.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Ap(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function wp(n,t,e){const i=new WeakMap,r=new ee;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let M=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let P=o.attributes.position.count*x,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const w=new Float32Array(P*A*4*f),C=new pc(w,P,A,f);C.type=gn,C.needsUpdate=!0;const b=x*4;for(let R=0;R<f;R++){const F=d[R],B=y[R],W=E[R],Y=P*A*4*R;for(let V=0;V<F.count;V++){const K=V*b;g===!0&&(r.fromBufferAttribute(F,V),w[Y+K+0]=r.x,w[Y+K+1]=r.y,w[Y+K+2]=r.z,w[Y+K+3]=0),_===!0&&(r.fromBufferAttribute(B,V),w[Y+K+4]=r.x,w[Y+K+5]=r.y,w[Y+K+6]=r.z,w[Y+K+7]=0),m===!0&&(r.fromBufferAttribute(W,V),w[Y+K+8]=r.x,w[Y+K+9]=r.y,w[Y+K+10]=r.z,w[Y+K+11]=W.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new zt(P,A)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Rp(n,t,e,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}class Ec extends Re{constructor(t,e,i,r,s,a,o,l,u,c=zi){if(c!==zi&&c!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===zi&&(i=hi),i===void 0&&c===ji&&(i=Yi),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tc=new Re,ml=new Ec(1,1),Ac=new pc,wc=new dh,Rc=new Sc,gl=[],_l=[],xl=new Float32Array(16),vl=new Float32Array(9),Ml=new Float32Array(4);function tr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=gl[r];if(s===void 0&&(s=new Float32Array(r),gl[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function _e(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ps(n,t){let e=_l[t];e===void 0&&(e=new Int32Array(t),_l[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Cp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Pp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2fv(this.addr,t),_e(e,t)}}function Lp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;n.uniform3fv(this.addr,t),_e(e,t)}}function Dp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4fv(this.addr,t),_e(e,t)}}function Ip(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;Ml.set(i),n.uniformMatrix2fv(this.addr,!1,Ml),_e(e,i)}}function Up(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;vl.set(i),n.uniformMatrix3fv(this.addr,!1,vl),_e(e,i)}}function Np(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;xl.set(i),n.uniformMatrix4fv(this.addr,!1,xl),_e(e,i)}}function Op(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Fp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2iv(this.addr,t),_e(e,t)}}function zp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3iv(this.addr,t),_e(e,t)}}function Bp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4iv(this.addr,t),_e(e,t)}}function kp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Hp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2uiv(this.addr,t),_e(e,t)}}function Gp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3uiv(this.addr,t),_e(e,t)}}function Vp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4uiv(this.addr,t),_e(e,t)}}function Wp(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ml.compareFunction=hc,s=ml):s=Tc,e.setTexture2D(t||s,r)}function Xp(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||wc,r)}function qp(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Rc,r)}function Yp(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Ac,r)}function jp(n){switch(n){case 5126:return Cp;case 35664:return Pp;case 35665:return Lp;case 35666:return Dp;case 35674:return Ip;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return Op;case 35667:case 35671:return Fp;case 35668:case 35672:return zp;case 35669:case 35673:return Bp;case 5125:return kp;case 36294:return Hp;case 36295:return Gp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function $p(n,t){n.uniform1fv(this.addr,t)}function Zp(n,t){const e=tr(t,this.size,2);n.uniform2fv(this.addr,e)}function Kp(n,t){const e=tr(t,this.size,3);n.uniform3fv(this.addr,e)}function Jp(n,t){const e=tr(t,this.size,4);n.uniform4fv(this.addr,e)}function Qp(n,t){const e=tr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function tm(n,t){const e=tr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function em(n,t){const e=tr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function nm(n,t){n.uniform1iv(this.addr,t)}function im(n,t){n.uniform2iv(this.addr,t)}function rm(n,t){n.uniform3iv(this.addr,t)}function sm(n,t){n.uniform4iv(this.addr,t)}function am(n,t){n.uniform1uiv(this.addr,t)}function om(n,t){n.uniform2uiv(this.addr,t)}function lm(n,t){n.uniform3uiv(this.addr,t)}function cm(n,t){n.uniform4uiv(this.addr,t)}function um(n,t,e){const i=this.cache,r=t.length,s=ps(e,r);ge(i,s)||(n.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Tc,s[a])}function hm(n,t,e){const i=this.cache,r=t.length,s=ps(e,r);ge(i,s)||(n.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||wc,s[a])}function fm(n,t,e){const i=this.cache,r=t.length,s=ps(e,r);ge(i,s)||(n.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Rc,s[a])}function dm(n,t,e){const i=this.cache,r=t.length,s=ps(e,r);ge(i,s)||(n.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Ac,s[a])}function pm(n){switch(n){case 5126:return $p;case 35664:return Zp;case 35665:return Kp;case 35666:return Jp;case 35674:return Qp;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return rm;case 35669:case 35673:return sm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return dm}}class mm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=jp(e.type)}}class gm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pm(e.type)}}class _m{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Js=/(\w+)(\])?(\[|\.)?/g;function Sl(n,t){n.seq.push(t),n.map[t.id]=t}function xm(n,t,e){const i=n.name,r=i.length;for(Js.lastIndex=0;;){const s=Js.exec(i),a=Js.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Sl(e,u===void 0?new mm(o,n,t):new gm(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new _m(o),Sl(e,f)),e=f}}}class ss{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);xm(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function yl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const vm=37297;let Mm=0;function Sm(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const bl=new Nt;function ym(n){Yt._getMatrix(bl,Yt.workingColorSpace,n);const t=`mat3( ${bl.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case ds:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function El(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Sm(n.getShaderSource(t),a)}else return r}function bm(n,t){const e=ym(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Em(n,t){let e;switch(t){case Au:e="Linear";break;case wu:e="Reinhard";break;case Ru:e="Cineon";break;case Ql:e="ACESFilmic";break;case Pu:e="AgX";break;case Lu:e="Neutral";break;case Cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $r=new D;function Tm(){Yt.getLuminanceCoefficients($r);const n=$r.x.toFixed(4),t=$r.y.toFixed(4),e=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Am(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function wm(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Rm(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function mr(n){return n!==""}function Tl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Al(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(n){return n.replace(Cm,Lm)}const Pm=new Map;function Lm(n,t){let e=Ft[t];if(e===void 0){const i=Pm.get(t);if(i!==void 0)e=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Wa(e)}const Dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(n){return n.replace(Dm,Im)}function Im(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rl(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Um(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kl?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Nm(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xi:case qi:t="ENVMAP_TYPE_CUBE";break;case fs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Om(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qi:t="ENVMAP_MODE_REFRACTION";break}return t}function Fm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Jl:t="ENVMAP_BLENDING_MULTIPLY";break;case Eu:t="ENVMAP_BLENDING_MIX";break;case Tu:t="ENVMAP_BLENDING_ADD";break}return t}function zm(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Bm(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Um(e),u=Nm(e),c=Om(e),f=Fm(e),h=zm(e),p=Am(e),g=wm(s),_=r.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),d.length>0&&(d+=`
`)):(m=[Rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),d=[Rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Em("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,bm("linearToOutputTexel",e.outputColorSpace),Tm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),a=Wa(a),a=Tl(a,e),a=Al(a,e),o=Wa(o),o=Tl(o,e),o=Al(o,e),a=wl(a),o=wl(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=y+m+a,x=y+d+o,P=yl(r,r.VERTEX_SHADER,E),A=yl(r,r.FRAGMENT_SHADER,x);r.attachShader(_,P),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(R){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(P).trim(),W=r.getShaderInfoLog(A).trim();let Y=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,A);else{const K=El(r,P,"vertex"),G=El(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+K+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||W==="")&&(V=!1);V&&(R.diagnostics={runnable:Y,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:d}})}r.deleteShader(P),r.deleteShader(A),C=new ss(r,_),b=Rm(r,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,vm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let km=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Gm(t),e.set(t,i)),i}}class Gm{constructor(t){this.id=km++,this.code=t,this.usedTimes=0}}function Vm(n,t,e,i,r,s,a){const o=new ro,l=new Hm,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return u.add(b),b===0?"uv":`uv${b}`}function m(b,M,R,F,B){const W=F.fog,Y=B.geometry,V=b.isMeshStandardMaterial?F.environment:null,K=(b.isMeshStandardMaterial?e:t).get(b.envMap||V),G=K&&K.mapping===fs?K.image.height:null,rt=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,bt=ht!==void 0?ht.length:0;let Bt=0;Y.morphAttributes.position!==void 0&&(Bt=1),Y.morphAttributes.normal!==void 0&&(Bt=2),Y.morphAttributes.color!==void 0&&(Bt=3);let ne,q,tt,vt;if(rt){const Jt=fn[rt];ne=Jt.vertexShader,q=Jt.fragmentShader}else ne=b.vertexShader,q=b.fragmentShader,l.update(b),tt=l.getVertexShaderID(b),vt=l.getFragmentShaderID(b);const st=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,kt=B.isBatchedMesh===!0,ce=!!b.map,Xt=!!b.matcap,fe=!!K,N=!!b.aoMap,Ze=!!b.lightMap,Ht=!!b.bumpMap,Gt=!!b.normalMap,At=!!b.displacementMap,se=!!b.emissiveMap,Tt=!!b.metalnessMap,T=!!b.roughnessMap,v=b.anisotropy>0,O=b.clearcoat>0,j=b.dispersion>0,Z=b.iridescence>0,X=b.sheen>0,St=b.transmission>0,at=v&&!!b.anisotropyMap,ft=O&&!!b.clearcoatMap,qt=O&&!!b.clearcoatNormalMap,J=O&&!!b.clearcoatRoughnessMap,dt=Z&&!!b.iridescenceMap,wt=Z&&!!b.iridescenceThicknessMap,Pt=X&&!!b.sheenColorMap,pt=X&&!!b.sheenRoughnessMap,Vt=!!b.specularMap,Ot=!!b.specularColorMap,ie=!!b.specularIntensityMap,L=St&&!!b.transmissionMap,it=St&&!!b.thicknessMap,H=!!b.gradientMap,$=!!b.alphaMap,ct=b.alphaTest>0,ot=!!b.alphaHash,It=!!b.extensions;let ue=Yn;b.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ue=n.toneMapping);const Te={shaderID:rt,shaderType:b.type,shaderName:b.name,vertexShader:ne,fragmentShader:q,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:vt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:kt,batchingColor:kt&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ki,alphaToCoverage:!!b.alphaToCoverage,map:ce,matcap:Xt,envMap:fe,envMapMode:fe&&K.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Ze,bumpMap:Ht,normalMap:Gt,displacementMap:h&&At,emissiveMap:se,normalMapObjectSpace:Gt&&b.normalMapType===Nu,normalMapTangentSpace:Gt&&b.normalMapType===uc,metalnessMap:Tt,roughnessMap:T,anisotropy:v,anisotropyMap:at,clearcoat:O,clearcoatMap:ft,clearcoatNormalMap:qt,clearcoatRoughnessMap:J,dispersion:j,iridescence:Z,iridescenceMap:dt,iridescenceThicknessMap:wt,sheen:X,sheenColorMap:Pt,sheenRoughnessMap:pt,specularMap:Vt,specularColorMap:Ot,specularIntensityMap:ie,transmission:St,transmissionMap:L,thicknessMap:it,gradientMap:H,opaque:b.transparent===!1&&b.blending===Fi&&b.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:ot,combine:b.combine,mapUv:ce&&_(b.map.channel),aoMapUv:N&&_(b.aoMap.channel),lightMapUv:Ze&&_(b.lightMap.channel),bumpMapUv:Ht&&_(b.bumpMap.channel),normalMapUv:Gt&&_(b.normalMap.channel),displacementMapUv:At&&_(b.displacementMap.channel),emissiveMapUv:se&&_(b.emissiveMap.channel),metalnessMapUv:Tt&&_(b.metalnessMap.channel),roughnessMapUv:T&&_(b.roughnessMap.channel),anisotropyMapUv:at&&_(b.anisotropyMap.channel),clearcoatMapUv:ft&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(b.sheenRoughnessMap.channel),specularMapUv:Vt&&_(b.specularMap.channel),specularColorMapUv:Ot&&_(b.specularColorMap.channel),specularIntensityMapUv:ie&&_(b.specularIntensityMap.channel),transmissionMapUv:L&&_(b.transmissionMap.channel),thicknessMapUv:it&&_(b.thicknessMap.channel),alphaMapUv:$&&_(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Gt||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(ce||$),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Rt,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:ce&&b.map.isVideoTexture===!0&&Yt.getTransfer(b.map.colorSpace)===Qt,decodeVideoTextureEmissive:se&&b.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(b.emissiveMap.colorSpace)===Qt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ye,flipSided:b.side===be,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:It&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&b.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Te.vertexUv1s=u.has(1),Te.vertexUv2s=u.has(2),Te.vertexUv3s=u.has(3),u.clear(),Te}function d(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)M.push(R),M.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(y(M,b),E(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function E(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){const M=g[b.type];let R;if(M){const F=fn[M];R=Th.clone(F.uniforms)}else R=b.uniforms;return R}function P(b,M){let R;for(let F=0,B=c.length;F<B;F++){const W=c[F];if(W.cacheKey===M){R=W,++R.usedTimes;break}}return R===void 0&&(R=new Bm(n,M,b,s),c.push(R)),R}function A(b){if(--b.usedTimes===0){const M=c.indexOf(b);c[M]=c[c.length-1],c.pop(),b.destroy()}}function w(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:P,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:C}}function Wm(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Xm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Cl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Pl(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f,h,p,g,_,m){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),t++,d}function o(f,h,p,g,_,m){const d=a(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(f,h,p,g,_,m){const d=a(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function u(f,h){e.length>1&&e.sort(f||Xm),i.length>1&&i.sort(h||Cl),r.length>1&&r.sort(h||Cl)}function c(){for(let f=t,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function qm(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Pl,n.set(i,[a])):r>=s.length?(a=new Pl,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ym(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Mt};break;case"SpotLight":e={position:new D,direction:new D,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function jm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let $m=0;function Zm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Km(n){const t=new Ym,e=jm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new D);const r=new D,s=new jt,a=new jt;function o(u){let c=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,y=0,E=0,x=0,P=0,A=0,w=0;u.sort(Zm);for(let b=0,M=u.length;b<M;b++){const R=u[b],F=R.color,B=R.intensity,W=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=F.r*B,f+=F.g*B,h+=F.b*B;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],B);w++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,G=e.get(R);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=R.shadow.matrix,y++}i.directional[p]=V,p++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(F).multiplyScalar(B),V.distance=W,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[_]=V;const K=R.shadow;if(R.map&&(i.spotLightMap[P]=R.map,P++,K.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[_]=K.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=Y,x++}_++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(F).multiplyScalar(B),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=V,m++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const K=R.shadow,G=e.get(R);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=R.shadow.matrix,E++}i.point[g]=V,g++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(B),V.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[d]=V,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==y||C.numPointShadows!==E||C.numSpotShadows!==x||C.numSpotMaps!==P||C.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=y,C.numPointShadows=E,C.numSpotShadows=x,C.numSpotMaps=P,C.numLightProbes=w,i.version=$m++)}function l(u,c){let f=0,h=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let d=0,y=u.length;d<y;d++){const E=u[d];if(E.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Ll(n){const t=new Km(n),e=[],i=[];function r(c){u.camera=c,e.length=0,i.length=0}function s(c){e.push(c)}function a(c){i.push(c)}function o(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Jm(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Ll(n),t.set(r,[o])):s>=a.length?(o=new Ll(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Qm extends yr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class t0 extends yr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
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
}`;function i0(n,t,e){let i=new so;const r=new zt,s=new zt,a=new ee,o=new Qm({depthPacking:Uu}),l=new t0,u={},c=e.maxTextureSize,f={[Dn]:be,[be]:Dn,[ye]:ye},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:e0,fragmentShader:n0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let d=this.type;this.render=function(A,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(qn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=d!==Rn&&this.type===Rn,W=d===Rn&&this.type!==Rn;for(let Y=0,V=A.length;Y<V;Y++){const K=A[Y],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const rt=G.getFrameExtents();if(r.multiply(rt),s.copy(G.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/rt.x),r.x=s.x*rt.x,G.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/rt.y),r.y=s.y*rt.y,G.mapSize.y=s.y)),G.map===null||B===!0||W===!0){const bt=this.type!==Rn?{minFilter:je,magFilter:je}:{};G.map!==null&&G.map.dispose(),G.map=new fi(r.x,r.y,bt),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ht=G.getViewportCount();for(let bt=0;bt<ht;bt++){const Bt=G.getViewport(bt);a.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),F.viewport(a),G.updateMatrices(K,bt),i=G.getFrustum(),x(w,C,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===Rn&&y(G,C),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,R)};function y(A,w){const C=t.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fi(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,C,h,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,C,p,_,null)}function E(A,w,C,b){let M=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)M=R;else if(M=C.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=M.uuid,B=w.uuid;let W=u[F];W===void 0&&(W={},u[F]=W);let Y=W[B];Y===void 0&&(Y=M.clone(),W[B]=Y,w.addEventListener("dispose",P)),M=Y}if(M.visible=w.visible,M.wireframe=w.wireframe,b===Rn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=n.properties.get(M);F.light=C}return M}function x(A,w,C,b,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Rn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const B=t.update(A),W=A.material;if(Array.isArray(W)){const Y=B.groups;for(let V=0,K=Y.length;V<K;V++){const G=Y[V],rt=W[G.materialIndex];if(rt&&rt.visible){const ht=E(A,rt,b,M);A.onBeforeShadow(n,A,w,C,B,ht,G),n.renderBufferDirect(C,null,B,ht,A,G),A.onAfterShadow(n,A,w,C,B,ht,G)}}}else if(W.visible){const Y=E(A,W,b,M);A.onBeforeShadow(n,A,w,C,B,Y,null),n.renderBufferDirect(C,null,B,Y,A,null),A.onAfterShadow(n,A,w,C,B,Y,null)}}const F=A.children;for(let B=0,W=F.length;B<W;B++)x(F[B],w,C,b,M)}function P(A){A.target.removeEventListener("dispose",P);for(const C in u){const b=u[C],M=A.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const r0={[oa]:la,[ca]:fa,[ua]:da,[Wi]:ha,[la]:oa,[fa]:ca,[da]:ua,[ha]:Wi};function s0(n,t){function e(){let L=!1;const it=new ee;let H=null;const $=new ee(0,0,0,0);return{setMask:function(ct){H!==ct&&!L&&(n.colorMask(ct,ct,ct,ct),H=ct)},setLocked:function(ct){L=ct},setClear:function(ct,ot,It,ue,Te){Te===!0&&(ct*=ue,ot*=ue,It*=ue),it.set(ct,ot,It,ue),$.equals(it)===!1&&(n.clearColor(ct,ot,It,ue),$.copy(it))},reset:function(){L=!1,H=null,$.set(-1,0,0,0)}}}function i(){let L=!1,it=!1,H=null,$=null,ct=null;return{setReversed:function(ot){if(it!==ot){const It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const ue=ct;ct=null,this.setClear(ue)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?st(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(ot){H!==ot&&!L&&(n.depthMask(ot),H=ot)},setFunc:function(ot){if(it&&(ot=r0[ot]),$!==ot){switch(ot){case oa:n.depthFunc(n.NEVER);break;case la:n.depthFunc(n.ALWAYS);break;case ca:n.depthFunc(n.LESS);break;case Wi:n.depthFunc(n.LEQUAL);break;case ua:n.depthFunc(n.EQUAL);break;case ha:n.depthFunc(n.GEQUAL);break;case fa:n.depthFunc(n.GREATER);break;case da:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=ot}},setLocked:function(ot){L=ot},setClear:function(ot){ct!==ot&&(it&&(ot=1-ot),n.clearDepth(ot),ct=ot)},reset:function(){L=!1,H=null,$=null,ct=null,it=!1}}}function r(){let L=!1,it=null,H=null,$=null,ct=null,ot=null,It=null,ue=null,Te=null;return{setTest:function(Jt){L||(Jt?st(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(Jt){it!==Jt&&!L&&(n.stencilMask(Jt),it=Jt)},setFunc:function(Jt,en,Sn){(H!==Jt||$!==en||ct!==Sn)&&(n.stencilFunc(Jt,en,Sn),H=Jt,$=en,ct=Sn)},setOp:function(Jt,en,Sn){(ot!==Jt||It!==en||ue!==Sn)&&(n.stencilOp(Jt,en,Sn),ot=Jt,It=en,ue=Sn)},setLocked:function(Jt){L=Jt},setClear:function(Jt){Te!==Jt&&(n.clearStencil(Jt),Te=Jt)},reset:function(){L=!1,it=null,H=null,$=null,ct=null,ot=null,It=null,ue=null,Te=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,y=null,E=null,x=null,P=null,A=null,w=new Mt(0,0,0),C=0,b=!1,M=null,R=null,F=null,B=null,W=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,K=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=K>=2);let rt=null,ht={};const bt=n.getParameter(n.SCISSOR_BOX),Bt=n.getParameter(n.VIEWPORT),ne=new ee().fromArray(bt),q=new ee().fromArray(Bt);function tt(L,it,H,$){const ct=new Uint8Array(4),ot=n.createTexture();n.bindTexture(L,ot),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<H;It++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(it+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return ot}const vt={};vt[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),vt[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),vt[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(n.DEPTH_TEST),a.setFunc(Wi),Ht(!1),Gt(No),st(n.CULL_FACE),N(qn);function st(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function Rt(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function Dt(L,it){return f[L]!==it?(n.bindFramebuffer(L,it),f[L]=it,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=it),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=it),!0):!1}function kt(L,it){let H=p,$=!1;if(L){H=h.get(it),H===void 0&&(H=[],h.set(it,H));const ct=L.textures;if(H.length!==ct.length||H[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,It=ct.length;ot<It;ot++)H[ot]=n.COLOR_ATTACHMENT0+ot;H.length=ct.length,$=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,$=!0);$&&n.drawBuffers(H)}function ce(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const Xt={[ri]:n.FUNC_ADD,[ou]:n.FUNC_SUBTRACT,[lu]:n.FUNC_REVERSE_SUBTRACT};Xt[cu]=n.MIN,Xt[uu]=n.MAX;const fe={[hu]:n.ZERO,[fu]:n.ONE,[du]:n.SRC_COLOR,[sa]:n.SRC_ALPHA,[vu]:n.SRC_ALPHA_SATURATE,[_u]:n.DST_COLOR,[mu]:n.DST_ALPHA,[pu]:n.ONE_MINUS_SRC_COLOR,[aa]:n.ONE_MINUS_SRC_ALPHA,[xu]:n.ONE_MINUS_DST_COLOR,[gu]:n.ONE_MINUS_DST_ALPHA,[Mu]:n.CONSTANT_COLOR,[Su]:n.ONE_MINUS_CONSTANT_COLOR,[yu]:n.CONSTANT_ALPHA,[bu]:n.ONE_MINUS_CONSTANT_ALPHA};function N(L,it,H,$,ct,ot,It,ue,Te,Jt){if(L===qn){_===!0&&(Rt(n.BLEND),_=!1);return}if(_===!1&&(st(n.BLEND),_=!0),L!==au){if(L!==m||Jt!==b){if((d!==ri||x!==ri)&&(n.blendEquation(n.FUNC_ADD),d=ri,x=ri),Jt)switch(L){case Fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oo:n.blendFunc(n.ONE,n.ONE);break;case Fo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Fo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,E=null,P=null,A=null,w.set(0,0,0),C=0,m=L,b=Jt}return}ct=ct||it,ot=ot||H,It=It||$,(it!==d||ct!==x)&&(n.blendEquationSeparate(Xt[it],Xt[ct]),d=it,x=ct),(H!==y||$!==E||ot!==P||It!==A)&&(n.blendFuncSeparate(fe[H],fe[$],fe[ot],fe[It]),y=H,E=$,P=ot,A=It),(ue.equals(w)===!1||Te!==C)&&(n.blendColor(ue.r,ue.g,ue.b,Te),w.copy(ue),C=Te),m=L,b=!1}function Ze(L,it){L.side===ye?Rt(n.CULL_FACE):st(n.CULL_FACE);let H=L.side===be;it&&(H=!H),Ht(H),L.blending===Fi&&L.transparent===!1?N(qn):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const $=L.stencilWrite;o.setTest($),$&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function Gt(L){L!==ru?(st(n.CULL_FACE),L!==R&&(L===No?n.cullFace(n.BACK):L===su?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),R=L}function At(L){L!==F&&(V&&n.lineWidth(L),F=L)}function se(L,it,H){L?(st(n.POLYGON_OFFSET_FILL),(B!==it||W!==H)&&(n.polygonOffset(it,H),B=it,W=H)):Rt(n.POLYGON_OFFSET_FILL)}function Tt(L){L?st(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function T(L){L===void 0&&(L=n.TEXTURE0+Y-1),rt!==L&&(n.activeTexture(L),rt=L)}function v(L,it,H){H===void 0&&(rt===null?H=n.TEXTURE0+Y-1:H=rt);let $=ht[H];$===void 0&&($={type:void 0,texture:void 0},ht[H]=$),($.type!==L||$.texture!==it)&&(rt!==H&&(n.activeTexture(H),rt=H),n.bindTexture(L,it||vt[L]),$.type=L,$.texture=it)}function O(){const L=ht[rt];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(L){ne.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function pt(L){q.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function Vt(L,it){let H=u.get(it);H===void 0&&(H=new WeakMap,u.set(it,H));let $=H.get(L);$===void 0&&($=n.getUniformBlockIndex(it,L.name),H.set(L,$))}function Ot(L,it){const $=u.get(it).get(L);l.get(it)!==$&&(n.uniformBlockBinding(it,$,L.__bindingPointIndex),l.set(it,$))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},rt=null,ht={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,y=null,E=null,x=null,P=null,A=null,w=new Mt(0,0,0),C=0,b=!1,M=null,R=null,F=null,B=null,W=null,ne.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:st,disable:Rt,bindFramebuffer:Dt,drawBuffers:kt,useProgram:ce,setBlending:N,setMaterial:Ze,setFlipSided:Ht,setCullFace:Gt,setLineWidth:At,setPolygonOffset:se,setScissorTest:Tt,activeTexture:T,bindTexture:v,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:dt,texImage3D:wt,updateUBOMapping:Vt,uniformBlockBinding:Ot,texStorage2D:qt,texStorage3D:J,texSubImage2D:X,texSubImage3D:St,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Pt,viewport:pt,reset:ie}}function Dl(n,t,e,i){const r=a0(i);switch(e){case rc:return n*t;case ac:return n*t;case oc:return n*t*2;case Ja:return n*t/r.components*r.byteLength;case Qa:return n*t/r.components*r.byteLength;case lc:return n*t*2/r.components*r.byteLength;case to:return n*t*2/r.components*r.byteLength;case sc:return n*t*3/r.components*r.byteLength;case ln:return n*t*4/r.components*r.byteLength;case eo:return n*t*4/r.components*r.byteLength;case ts:case es:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ns:case is:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xa:case Ma:return Math.max(n,16)*Math.max(t,8)/4;case _a:case va:return Math.max(n,8)*Math.max(t,8)/2;case Sa:case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Da:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Na:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case rs:case za:case Ba:return Math.ceil(n/4)*Math.ceil(t/4)*16;case cc:case ka:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ha:case Ga:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a0(n){switch(n){case In:case ec:return{byteLength:1,components:1};case xr:case nc:case Mr:return{byteLength:2,components:1};case Za:case Ka:return{byteLength:2,components:4};case hi:case $a:case gn:return{byteLength:4,components:1};case ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function o0(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new zt,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):cs("canvas")}function _(T,v,O){let j=1;const Z=Tt(T);if((Z.width>O||Z.height>O)&&(j=O/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(j*Z.width),St=Math.floor(j*Z.height);f===void 0&&(f=g(X,St));const at=v?g(X,St):f;return at.width=X,at.height=St,at.getContext("2d").drawImage(T,0,0,X,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+St+")."),at}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,v,O,j,Z=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=v;if(v===n.RED&&(O===n.FLOAT&&(X=n.R32F),O===n.HALF_FLOAT&&(X=n.R16F),O===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.R8UI),O===n.UNSIGNED_SHORT&&(X=n.R16UI),O===n.UNSIGNED_INT&&(X=n.R32UI),O===n.BYTE&&(X=n.R8I),O===n.SHORT&&(X=n.R16I),O===n.INT&&(X=n.R32I)),v===n.RG&&(O===n.FLOAT&&(X=n.RG32F),O===n.HALF_FLOAT&&(X=n.RG16F),O===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RG8UI),O===n.UNSIGNED_SHORT&&(X=n.RG16UI),O===n.UNSIGNED_INT&&(X=n.RG32UI),O===n.BYTE&&(X=n.RG8I),O===n.SHORT&&(X=n.RG16I),O===n.INT&&(X=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RGB8UI),O===n.UNSIGNED_SHORT&&(X=n.RGB16UI),O===n.UNSIGNED_INT&&(X=n.RGB32UI),O===n.BYTE&&(X=n.RGB8I),O===n.SHORT&&(X=n.RGB16I),O===n.INT&&(X=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),O===n.UNSIGNED_INT&&(X=n.RGBA32UI),O===n.BYTE&&(X=n.RGBA8I),O===n.SHORT&&(X=n.RGBA16I),O===n.INT&&(X=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),v===n.RGBA){const St=Z?ds:Yt.getTransfer(j);O===n.FLOAT&&(X=n.RGBA32F),O===n.HALF_FLOAT&&(X=n.RGBA16F),O===n.UNSIGNED_BYTE&&(X=St===Qt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(T,v){let O;return T?v===null||v===hi||v===Yi?O=n.DEPTH24_STENCIL8:v===gn?O=n.DEPTH32F_STENCIL8:v===xr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hi||v===Yi?O=n.DEPTH_COMPONENT24:v===gn?O=n.DEPTH_COMPONENT32F:v===xr&&(O=n.DEPTH_COMPONENT16),O}function P(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==je&&T.minFilter!==mn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),C(v),v.isVideoTexture&&c.delete(v)}function w(T){const v=T.target;v.removeEventListener("dispose",w),M(v)}function C(T){const v=i.get(T);if(v.__webglInit===void 0)return;const O=T.source,j=h.get(O);if(j){const Z=j[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(T),Object.keys(j).length===0&&h.delete(O)}i.remove(T)}function b(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const O=T.source,j=h.get(O);delete j[v.__cacheKey],a.memory.textures--}function M(T){const v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let Z=0;Z<v.__webglFramebuffer[j].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[j][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)n.deleteFramebuffer(v.__webglFramebuffer[j]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=T.textures;for(let j=0,Z=O.length;j<Z;j++){const X=i.get(O[j]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(O[j])}i.remove(T)}let R=0;function F(){R=0}function B(){const T=R;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),R+=1,T}function W(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Y(T,v){const O=i.get(T);if(T.isVideoTexture&&At(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,T,v);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function V(T,v){const O=i.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function K(T,v){const O=i.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,v);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function G(T,v){const O=i.get(T);if(T.version>0&&O.__version!==T.version){tt(O,T,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const rt={[os]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[ga]:n.MIRRORED_REPEAT},ht={[je]:n.NEAREST,[Du]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[As]:n.LINEAR_MIPMAP_NEAREST,[oi]:n.LINEAR_MIPMAP_LINEAR},bt={[Ou]:n.NEVER,[Gu]:n.ALWAYS,[Fu]:n.LESS,[hc]:n.LEQUAL,[zu]:n.EQUAL,[Hu]:n.GEQUAL,[Bu]:n.GREATER,[ku]:n.NOTEQUAL};function Bt(T,v){if(v.type===gn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===mn||v.magFilter===As||v.magFilter===Cr||v.magFilter===oi||v.minFilter===mn||v.minFilter===As||v.minFilter===Cr||v.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,rt[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,rt[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,rt[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ht[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,bt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==Cr&&v.minFilter!==oi||v.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ne(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const j=v.source;let Z=h.get(j);Z===void 0&&(Z={},h.set(j,Z));const X=W(v);if(X!==T.__cacheKey){Z[X]===void 0&&(Z[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[X].usedTimes++;const St=Z[T.__cacheKey];St!==void 0&&(Z[T.__cacheKey].usedTimes--,St.usedTimes===0&&b(v)),T.__cacheKey=X,T.__webglTexture=Z[X].texture}return O}function q(T,v,O){let j=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=n.TEXTURE_3D);const Z=ne(T,v),X=v.source;e.bindTexture(j,T.__webglTexture,n.TEXTURE0+O);const St=i.get(X);if(X.version!==St.__version||Z===!0){e.activeTexture(n.TEXTURE0+O);const at=Yt.getPrimaries(Yt.workingColorSpace),ft=v.colorSpace===Xn?null:Yt.getPrimaries(v.colorSpace),qt=v.colorSpace===Xn||at===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let J=_(v.image,!1,r.maxTextureSize);J=se(v,J);const dt=s.convert(v.format,v.colorSpace),wt=s.convert(v.type);let Pt=E(v.internalFormat,dt,wt,v.colorSpace,v.isVideoTexture);Bt(j,v);let pt;const Vt=v.mipmaps,Ot=v.isVideoTexture!==!0,ie=St.__version===void 0||Z===!0,L=X.dataReady,it=P(v,J);if(v.isDepthTexture)Pt=x(v.format===ji,v.type),ie&&(Ot?e.texStorage2D(n.TEXTURE_2D,1,Pt,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,Pt,J.width,J.height,0,dt,wt,null));else if(v.isDataTexture)if(Vt.length>0){Ot&&ie&&e.texStorage2D(n.TEXTURE_2D,it,Pt,Vt[0].width,Vt[0].height);for(let H=0,$=Vt.length;H<$;H++)pt=Vt[H],Ot?L&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,pt.width,pt.height,dt,wt,pt.data):e.texImage2D(n.TEXTURE_2D,H,Pt,pt.width,pt.height,0,dt,wt,pt.data);v.generateMipmaps=!1}else Ot?(ie&&e.texStorage2D(n.TEXTURE_2D,it,Pt,J.width,J.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,dt,wt,J.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,J.width,J.height,0,dt,wt,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ot&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,Pt,Vt[0].width,Vt[0].height,J.depth);for(let H=0,$=Vt.length;H<$;H++)if(pt=Vt[H],v.format!==ln)if(dt!==null)if(Ot){if(L)if(v.layerUpdates.size>0){const ct=Dl(pt.width,pt.height,v.format,v.type);for(const ot of v.layerUpdates){const It=pt.data.subarray(ot*ct/pt.data.BYTES_PER_ELEMENT,(ot+1)*ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,ot,pt.width,pt.height,1,dt,It)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,pt.width,pt.height,J.depth,dt,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,Pt,pt.width,pt.height,J.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,pt.width,pt.height,J.depth,dt,wt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,H,Pt,pt.width,pt.height,J.depth,0,dt,wt,pt.data)}else{Ot&&ie&&e.texStorage2D(n.TEXTURE_2D,it,Pt,Vt[0].width,Vt[0].height);for(let H=0,$=Vt.length;H<$;H++)pt=Vt[H],v.format!==ln?dt!==null?Ot?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,H,Pt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?L&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,pt.width,pt.height,dt,wt,pt.data):e.texImage2D(n.TEXTURE_2D,H,Pt,pt.width,pt.height,0,dt,wt,pt.data)}else if(v.isDataArrayTexture)if(Ot){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,Pt,J.width,J.height,J.depth),L)if(v.layerUpdates.size>0){const H=Dl(J.width,J.height,v.format,v.type);for(const $ of v.layerUpdates){const ct=J.data.subarray($*H/J.data.BYTES_PER_ELEMENT,($+1)*H/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,J.width,J.height,1,dt,wt,ct)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,wt,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,J.width,J.height,J.depth,0,dt,wt,J.data);else if(v.isData3DTexture)Ot?(ie&&e.texStorage3D(n.TEXTURE_3D,it,Pt,J.width,J.height,J.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,wt,J.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,J.width,J.height,J.depth,0,dt,wt,J.data);else if(v.isFramebufferTexture){if(ie)if(Ot)e.texStorage2D(n.TEXTURE_2D,it,Pt,J.width,J.height);else{let H=J.width,$=J.height;for(let ct=0;ct<it;ct++)e.texImage2D(n.TEXTURE_2D,ct,Pt,H,$,0,dt,wt,null),H>>=1,$>>=1}}else if(Vt.length>0){if(Ot&&ie){const H=Tt(Vt[0]);e.texStorage2D(n.TEXTURE_2D,it,Pt,H.width,H.height)}for(let H=0,$=Vt.length;H<$;H++)pt=Vt[H],Ot?L&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,dt,wt,pt):e.texImage2D(n.TEXTURE_2D,H,Pt,dt,wt,pt);v.generateMipmaps=!1}else if(Ot){if(ie){const H=Tt(J);e.texStorage2D(n.TEXTURE_2D,it,Pt,H.width,H.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,wt,J)}else e.texImage2D(n.TEXTURE_2D,0,Pt,dt,wt,J);m(v)&&d(j),St.__version=X.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function tt(T,v,O){if(v.image.length!==6)return;const j=ne(T,v),Z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);const X=i.get(Z);if(Z.version!==X.__version||j===!0){e.activeTexture(n.TEXTURE0+O);const St=Yt.getPrimaries(Yt.workingColorSpace),at=v.colorSpace===Xn?null:Yt.getPrimaries(v.colorSpace),ft=v.colorSpace===Xn||St===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const qt=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,dt=[];for(let $=0;$<6;$++)!qt&&!J?dt[$]=_(v.image[$],!0,r.maxCubemapSize):dt[$]=J?v.image[$].image:v.image[$],dt[$]=se(v,dt[$]);const wt=dt[0],Pt=s.convert(v.format,v.colorSpace),pt=s.convert(v.type),Vt=E(v.internalFormat,Pt,pt,v.colorSpace),Ot=v.isVideoTexture!==!0,ie=X.__version===void 0||j===!0,L=Z.dataReady;let it=P(v,wt);Bt(n.TEXTURE_CUBE_MAP,v);let H;if(qt){Ot&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,it,Vt,wt.width,wt.height);for(let $=0;$<6;$++){H=dt[$].mipmaps;for(let ct=0;ct<H.length;ct++){const ot=H[ct];v.format!==ln?Pt!==null?Ot?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,ot.width,ot.height,Pt,ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Vt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,ot.width,ot.height,Pt,pt,ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Vt,ot.width,ot.height,0,Pt,pt,ot.data)}}}else{if(H=v.mipmaps,Ot&&ie){H.length>0&&it++;const $=Tt(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,it,Vt,$.width,$.height)}for(let $=0;$<6;$++)if(J){Ot?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,dt[$].width,dt[$].height,Pt,pt,dt[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,dt[$].width,dt[$].height,0,Pt,pt,dt[$].data);for(let ct=0;ct<H.length;ct++){const It=H[ct].image[$].image;Ot?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,It.width,It.height,Pt,pt,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Vt,It.width,It.height,0,Pt,pt,It.data)}}else{Ot?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Pt,pt,dt[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,Pt,pt,dt[$]);for(let ct=0;ct<H.length;ct++){const ot=H[ct];Ot?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Pt,pt,ot.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Vt,Pt,pt,ot.image[$])}}}m(v)&&d(n.TEXTURE_CUBE_MAP),X.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function vt(T,v,O,j,Z,X){const St=s.convert(O.format,O.colorSpace),at=s.convert(O.type),ft=E(O.internalFormat,St,at,O.colorSpace),qt=i.get(v),J=i.get(O);if(J.__renderTarget=v,!qt.__hasExternalTextures){const dt=Math.max(1,v.width>>X),wt=Math.max(1,v.height>>X);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,X,ft,dt,wt,v.depth,0,St,at,null):e.texImage2D(Z,X,ft,dt,wt,0,St,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Gt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Z,J.__webglTexture,0,Ht(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Z,J.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(T,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){const j=v.depthTexture,Z=j&&j.isDepthTexture?j.type:null,X=x(v.stencilBuffer,Z),St=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=Ht(v);Gt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,X,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,X,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,X,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,T)}else{const j=v.textures;for(let Z=0;Z<j.length;Z++){const X=j[Z],St=s.convert(X.format,X.colorSpace),at=s.convert(X.type),ft=E(X.internalFormat,St,at,X.colorSpace),qt=Ht(v);O&&Gt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,ft,v.width,v.height):Gt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qt,ft,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ft,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const Z=j.__webglTexture,X=Ht(v);if(v.depthTexture.format===zi)Gt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===ji)Gt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Dt(T){const v=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=j}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Rt(v.__webglFramebuffer,T)}else if(O){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=n.createRenderbuffer(),st(v.__webglDepthbuffer[j],T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,X)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),st(v.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(T,v,O){const j=i.get(T);v!==void 0&&vt(j.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Dt(T)}function ce(T){const v=T.texture,O=i.get(T),j=i.get(v);T.addEventListener("dispose",w);const Z=T.textures,X=T.isWebGLCubeRenderTarget===!0,St=Z.length>1;if(St||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=v.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let ft=0;ft<v.mipmaps.length;ft++)O.__webglFramebuffer[at][ft]=n.createFramebuffer()}else O.__webglFramebuffer[at]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)O.__webglFramebuffer[at]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(St)for(let at=0,ft=Z.length;at<ft;at++){const qt=i.get(Z[at]);qt.__webglTexture===void 0&&(qt.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Gt(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const ft=Z[at];O.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[at]);const qt=s.convert(ft.format,ft.colorSpace),J=s.convert(ft.type),dt=E(ft.internalFormat,qt,J,ft.colorSpace,T.isXRRenderTarget===!0),wt=Ht(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,dt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,O.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),st(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)vt(O.__webglFramebuffer[at][ft],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else vt(O.__webglFramebuffer[at],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(v)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let at=0,ft=Z.length;at<ft;at++){const qt=Z[at],J=i.get(qt);e.bindTexture(n.TEXTURE_2D,J.__webglTexture),Bt(n.TEXTURE_2D,qt),vt(O.__webglFramebuffer,T,qt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),m(qt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),Bt(at,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)vt(O.__webglFramebuffer[ft],T,v,n.COLOR_ATTACHMENT0,at,ft);else vt(O.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,at,0);m(v)&&d(at),e.unbindTexture()}T.depthBuffer&&Dt(T)}function Xt(T){const v=T.textures;for(let O=0,j=v.length;O<j;O++){const Z=v[O];if(m(Z)){const X=y(T),St=i.get(Z).__webglTexture;e.bindTexture(X,St),d(X),e.unbindTexture()}}}const fe=[],N=[];function Ze(T){if(T.samples>0){if(Gt(T)===!1){const v=T.textures,O=T.width,j=T.height;let Z=n.COLOR_BUFFER_BIT;const X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=i.get(T),at=v.length>1;if(at)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);const qt=i.get(v[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qt,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,Z,n.NEAREST),l===!0&&(fe.length=0,N.length=0,fe.push(n.COLOR_ATTACHMENT0+ft),T.depthBuffer&&T.resolveDepthBuffer===!1&&(fe.push(X),N.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);const qt=i.get(v[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Ht(T){return Math.min(r.maxSamples,T.samples)}function Gt(T){const v=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(T){const v=a.render.frame;c.get(T)!==v&&(c.set(T,v),T.update())}function se(T,v){const O=T.colorSpace,j=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ki&&O!==Xn&&(Yt.getTransfer(O)===Qt?(j!==ln||Z!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=kt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Gt}function l0(n,t){function e(i,r=Xn){let s;const a=Yt.getTransfer(r);if(i===In)return n.UNSIGNED_BYTE;if(i===Za)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ka)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ic)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ec)return n.BYTE;if(i===nc)return n.SHORT;if(i===xr)return n.UNSIGNED_SHORT;if(i===$a)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===gn)return n.FLOAT;if(i===Mr)return n.HALF_FLOAT;if(i===rc)return n.ALPHA;if(i===sc)return n.RGB;if(i===ln)return n.RGBA;if(i===ac)return n.LUMINANCE;if(i===oc)return n.LUMINANCE_ALPHA;if(i===zi)return n.DEPTH_COMPONENT;if(i===ji)return n.DEPTH_STENCIL;if(i===Ja)return n.RED;if(i===Qa)return n.RED_INTEGER;if(i===lc)return n.RG;if(i===to)return n.RG_INTEGER;if(i===eo)return n.RGBA_INTEGER;if(i===ts||i===es||i===ns||i===is)if(a===Qt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ts)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ts)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===is)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_a||i===xa||i===va||i===Ma)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ma)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sa||i===ya||i===ba)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sa||i===ya)return a===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ba)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ea||i===Ta||i===Aa||i===wa||i===Ra||i===Ca||i===Pa||i===La||i===Da||i===Ia||i===Ua||i===Na||i===Oa||i===Fa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ea)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ta)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Aa)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wa)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ra)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ca)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pa)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===La)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Da)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ia)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ua)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Na)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oa)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fa)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rs||i===za||i===Ba)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===rs)return a===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===za)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ba)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cc||i===ka||i===Ha||i===Ga)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===rs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ka)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ha)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ga)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class c0 extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class li extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u0={type:"move"};class Qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new li;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const h0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
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

}`;class d0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Re,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Un({vertexShader:h0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new Qe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p0 extends Ji{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,g=null;const _=new d0,m=e.getContextAttributes();let d=null,y=null;const E=[],x=[],P=new zt;let A=null;const w=new qe;w.viewport=new ee;const C=new qe;C.viewport=new ee;const b=[w,C],M=new c0;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=E[q];return tt===void 0&&(tt=new Qs,E[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=E[q];return tt===void 0&&(tt=new Qs,E[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=E[q];return tt===void 0&&(tt=new Qs,E[q]=tt),tt.getHandSpace()};function B(q){const tt=x.indexOf(q.inputSource);if(tt===-1)return;const vt=E[tt];vt!==void 0&&(vt.update(q.inputSource,q.frame,u||a),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Y);for(let q=0;q<E.length;q++){const tt=x[q];tt!==null&&(x[q]=null,E[q].disconnect(tt))}R=null,F=null,_.reset(),t.setRenderTarget(d),p=null,h=null,f=null,r=null,y=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new fi(p.framebufferWidth,p.framebufferHeight,{format:ln,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,vt=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?ji:zi,vt=m.stencil?Yi:hi);const Rt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(Rt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new fi(h.textureWidth,h.textureHeight,{format:ln,type:In,depthTexture:new Ec(h.textureWidth,h.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(q){for(let tt=0;tt<q.removed.length;tt++){const vt=q.removed[tt],st=x.indexOf(vt);st>=0&&(x[st]=null,E[st].disconnect(vt))}for(let tt=0;tt<q.added.length;tt++){const vt=q.added[tt];let st=x.indexOf(vt);if(st===-1){for(let Dt=0;Dt<E.length;Dt++)if(Dt>=x.length){x.push(vt),st=Dt;break}else if(x[Dt]===null){x[Dt]=vt,st=Dt;break}if(st===-1)break}const Rt=E[st];Rt&&Rt.connect(vt)}}const V=new D,K=new D;function G(q,tt,vt){V.setFromMatrixPosition(tt.matrixWorld),K.setFromMatrixPosition(vt.matrixWorld);const st=V.distanceTo(K),Rt=tt.projectionMatrix.elements,Dt=vt.projectionMatrix.elements,kt=Rt[14]/(Rt[10]-1),ce=Rt[14]/(Rt[10]+1),Xt=(Rt[9]+1)/Rt[5],fe=(Rt[9]-1)/Rt[5],N=(Rt[8]-1)/Rt[0],Ze=(Dt[8]+1)/Dt[0],Ht=kt*N,Gt=kt*Ze,At=st/(-N+Ze),se=At*-N;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(se),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Tt=kt+At,T=ce+At,v=Ht-se,O=Gt+(st-se),j=Xt*ce/T*Tt,Z=fe*ce/T*Tt;q.projectionMatrix.makePerspective(v,O,j,Z,Tt,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let tt=q.near,vt=q.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),M.near=C.near=w.near=tt,M.far=C.far=w.far=vt,(R!==M.near||F!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,F=M.far),w.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,M.layers.mask=w.layers.mask|C.layers.mask;const st=q.parent,Rt=M.cameras;rt(M,st);for(let Dt=0;Dt<Rt.length;Dt++)rt(Rt[Dt],st);Rt.length===2?G(M,w,C):M.projectionMatrix.copy(w.projectionMatrix),ht(q,M,st)};function ht(q,tt,vt){vt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=vr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let bt=null;function Bt(q,tt){if(c=tt.getViewerPose(u||a),g=tt,c!==null){const vt=c.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let st=!1;vt.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Dt=0;Dt<vt.length;Dt++){const kt=vt[Dt];let ce=null;if(p!==null)ce=p.getViewport(kt);else{const fe=f.getViewSubImage(h,kt);ce=fe.viewport,Dt===0&&(t.setRenderTargetTextures(y,fe.colorTexture,h.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(y))}let Xt=b[Dt];Xt===void 0&&(Xt=new qe,Xt.layers.enable(Dt),Xt.viewport=new ee,b[Dt]=Xt),Xt.matrix.fromArray(kt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(kt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ce.x,ce.y,ce.width,ce.height),Dt===0&&(M.matrix.copy(Xt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(Xt)}const Rt=r.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Dt=f.getDepthInformation(vt[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,r.renderState)}}for(let vt=0;vt<E.length;vt++){const st=x[vt],Rt=E[vt];st!==null&&Rt!==void 0&&Rt.update(st,tt,u||a)}bt&&bt(q,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}const ne=new yc;ne.setAnimationLoop(Bt),this.setAnimationLoop=function(q){bt=q},this.dispose=function(){}}}const ei=new Pe,m0=new jt;function g0(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,vc(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,E,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,E):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===be&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===be&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d),E=y.envMap,x=y.envMapRotation;E&&(m.envMap.value=E,ei.copy(x),ei.x*=-1,ei.y*=-1,ei.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),m.envMapRotation.value.setFromMatrix4(m0.makeRotationFromEuler(ei)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===be&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _0(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const x=E.program;i.uniformBlockBinding(y,x)}function u(y,E){let x=r[y.id];x===void 0&&(g(y),x=c(y),r[y.id]=x,y.addEventListener("dispose",m));const P=E.program;i.updateUBOMapping(y,P);const A=t.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function c(y){const E=f();y.__bindingPointIndex=E;const x=n.createBuffer(),P=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,x),x}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const E=r[y.id],x=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,w=x.length;A<w;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,M=C.length;b<M;b++){const R=C[b];if(p(R,A,b,P)===!0){const F=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let Y=0;Y<B.length;Y++){const V=B[Y],K=_(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,F+W,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,E,x,P){const A=y.value,w=E+"_"+x;if(P[w]===void 0)return typeof A=="number"||typeof A=="boolean"?P[w]=A:P[w]=A.clone(),!0;{const C=P[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return P[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(y){const E=y.uniforms;let x=0;const P=16;for(let w=0,C=E.length;w<C;w++){const b=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,R=b.length;M<R;M++){const F=b[M],B=Array.isArray(F.value)?F.value:[F.value];for(let W=0,Y=B.length;W<Y;W++){const V=B[W],K=_(V),G=x%P,rt=G%K.boundary,ht=G+rt;x+=rt,ht!==0&&P-ht<K.storage&&(x+=P-ht),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=K.storage}}}const A=x%P;return A>0&&(x+=P-A),y.__size=x,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class x0{constructor(t={}){const{canvas:e=sh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const y=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=Yn,this.toneMappingExposure=1;const x=this;let P=!1,A=0,w=0,C=null,b=-1,M=null;const R=new ee,F=new ee;let B=null;const W=new Mt(0);let Y=0,V=e.width,K=e.height,G=1,rt=null,ht=null;const bt=new ee(0,0,V,K),Bt=new ee(0,0,V,K);let ne=!1;const q=new so;let tt=!1,vt=!1;const st=new jt,Rt=new jt,Dt=new D,kt=new ee,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function fe(){return C===null?G:1}let N=i;function Ze(S,I){return e.getContext(S,I)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ja}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),N===null){const I="webgl2";if(N=Ze(I,S),N===null)throw Ze(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ht,Gt,At,se,Tt,T,v,O,j,Z,X,St,at,ft,qt,J,dt,wt,Pt,pt,Vt,Ot,ie,L;function it(){Ht=new bp(N),Ht.init(),Ot=new l0(N,Ht),Gt=new _p(N,Ht,t,Ot),At=new s0(N,Ht),Gt.reverseDepthBuffer&&h&&At.buffers.depth.setReversed(!0),se=new Ap(N),Tt=new Wm,T=new o0(N,Ht,At,Tt,Gt,Ot,se),v=new vp(x),O=new yp(x),j=new Dh(N),ie=new mp(N,j),Z=new Ep(N,j,se,ie),X=new Rp(N,Z,j,se),Pt=new wp(N,Gt,T),J=new xp(Tt),St=new Vm(x,v,O,Ht,Gt,ie,J),at=new g0(x,Tt),ft=new qm,qt=new Jm(Ht),wt=new pp(x,v,O,At,X,p,l),dt=new i0(x,X,Gt),L=new _0(N,se,Gt,At),pt=new gp(N,Ht,se),Vt=new Tp(N,Ht,se),se.programs=St.programs,x.capabilities=Gt,x.extensions=Ht,x.properties=Tt,x.renderLists=ft,x.shadowMap=dt,x.state=At,x.info=se}it();const H=new p0(x,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Ht.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ht.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(V,K,!1))},this.getSize=function(S){return S.set(V,K)},this.setSize=function(S,I,z=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,K=I,e.width=Math.floor(S*G),e.height=Math.floor(I*G),z===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(V*G,K*G).floor()},this.setDrawingBufferSize=function(S,I,z){V=S,K=I,G=z,e.width=Math.floor(S*z),e.height=Math.floor(I*z),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(bt)},this.setViewport=function(S,I,z,k){S.isVector4?bt.set(S.x,S.y,S.z,S.w):bt.set(S,I,z,k),At.viewport(R.copy(bt).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Bt)},this.setScissor=function(S,I,z,k){S.isVector4?Bt.set(S.x,S.y,S.z,S.w):Bt.set(S,I,z,k),At.scissor(F.copy(Bt).multiplyScalar(G).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(S){At.setScissorTest(ne=S)},this.setOpaqueSort=function(S){rt=S},this.setTransparentSort=function(S){ht=S},this.getClearColor=function(S){return S.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(S=!0,I=!0,z=!0){let k=0;if(S){let U=!1;if(C!==null){const Q=C.texture.format;U=Q===eo||Q===to||Q===Qa}if(U){const Q=C.texture.type,lt=Q===In||Q===hi||Q===xr||Q===Yi||Q===Za||Q===Ka,gt=wt.getClearColor(),_t=wt.getClearAlpha(),Lt=gt.r,Ut=gt.g,xt=gt.b;lt?(g[0]=Lt,g[1]=Ut,g[2]=xt,g[3]=_t,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Lt,_[1]=Ut,_[2]=xt,_[3]=_t,N.clearBufferiv(N.COLOR,0,_))}else k|=N.COLOR_BUFFER_BIT}I&&(k|=N.DEPTH_BUFFER_BIT),z&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ft.dispose(),qt.dispose(),Tt.dispose(),v.dispose(),O.dispose(),X.dispose(),ie.dispose(),L.dispose(),St.dispose(),H.dispose(),H.removeEventListener("sessionstart",wo),H.removeEventListener("sessionend",Ro),$n.stop()};function $(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const S=se.autoReset,I=dt.enabled,z=dt.autoUpdate,k=dt.needsUpdate,U=dt.type;it(),se.autoReset=S,dt.enabled=I,dt.autoUpdate=z,dt.needsUpdate=k,dt.type=U}function ot(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function It(S){const I=S.target;I.removeEventListener("dispose",It),ue(I)}function ue(S){Te(S),Tt.remove(S)}function Te(S){const I=Tt.get(S).programs;I!==void 0&&(I.forEach(function(z){St.releaseProgram(z)}),S.isShaderMaterial&&St.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,z,k,U,Q){I===null&&(I=ce);const lt=U.isMesh&&U.matrixWorld.determinant()<0,gt=eu(S,I,z,k,U);At.setMaterial(k,lt);let _t=z.index,Lt=1;if(k.wireframe===!0){if(_t=Z.getWireframeAttribute(z),_t===void 0)return;Lt=2}const Ut=z.drawRange,xt=z.attributes.position;let $t=Ut.start*Lt,re=(Ut.start+Ut.count)*Lt;Q!==null&&($t=Math.max($t,Q.start*Lt),re=Math.min(re,(Q.start+Q.count)*Lt)),_t!==null?($t=Math.max($t,0),re=Math.min(re,_t.count)):xt!=null&&($t=Math.max($t,0),re=Math.min(re,xt.count));const ae=re-$t;if(ae<0||ae===1/0)return;ie.setup(U,k,gt,z,_t);let Oe,Zt=pt;if(_t!==null&&(Oe=j.get(_t),Zt=Vt,Zt.setIndex(Oe)),U.isMesh)k.wireframe===!0?(At.setLineWidth(k.wireframeLinewidth*fe()),Zt.setMode(N.LINES)):Zt.setMode(N.TRIANGLES);else if(U.isLine){let yt=k.linewidth;yt===void 0&&(yt=1),At.setLineWidth(yt*fe()),U.isLineSegments?Zt.setMode(N.LINES):U.isLineLoop?Zt.setMode(N.LINE_LOOP):Zt.setMode(N.LINE_STRIP)}else U.isPoints?Zt.setMode(N.POINTS):U.isSprite&&Zt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Zt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Zt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const yt=U._multiDrawStarts,yn=U._multiDrawCounts,Kt=U._multiDrawCount,nn=_t?j.get(_t).bytesPerElement:1,mi=Tt.get(k).currentProgram.getUniforms();for(let ke=0;ke<Kt;ke++)mi.setValue(N,"_gl_DrawID",ke),Zt.render(yt[ke]/nn,yn[ke])}else if(U.isInstancedMesh)Zt.renderInstances($t,ae,U.count);else if(z.isInstancedBufferGeometry){const yt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,yn=Math.min(z.instanceCount,yt);Zt.renderInstances($t,ae,yn)}else Zt.render($t,ae)};function Jt(S,I,z){S.transparent===!0&&S.side===ye&&S.forceSinglePass===!1?(S.side=be,S.needsUpdate=!0,Rr(S,I,z),S.side=Dn,S.needsUpdate=!0,Rr(S,I,z),S.side=ye):Rr(S,I,z)}this.compile=function(S,I,z=null){z===null&&(z=S),d=qt.get(z),d.init(I),E.push(d),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),S!==z&&S.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const k=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let lt=0;lt<Q.length;lt++){const gt=Q[lt];Jt(gt,z,U),k.add(gt)}else Jt(Q,z,U),k.add(Q)}),E.pop(),d=null,k},this.compileAsync=function(S,I,z=null){const k=this.compile(S,I,z);return new Promise(U=>{function Q(){if(k.forEach(function(lt){Tt.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){U(S);return}setTimeout(Q,10)}Ht.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let en=null;function Sn(S){en&&en(S)}function wo(){$n.stop()}function Ro(){$n.start()}const $n=new yc;$n.setAnimationLoop(Sn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(S){en=S,H.setAnimationLoop(S),S===null?$n.stop():$n.start()},H.addEventListener("sessionstart",wo),H.addEventListener("sessionend",Ro),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(I),I=H.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,I,C),d=qt.get(S,E.length),d.init(I),E.push(d),Rt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(Rt),vt=this.localClippingEnabled,tt=J.init(this.clippingPlanes,vt),m=ft.get(S,y.length),m.init(),y.push(m),H.enabled===!0&&H.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Ts(Q,I,-1/0,x.sortObjects)}Ts(S,I,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(rt,ht),Xt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Xt&&wt.addToRenderList(m,S),this.info.render.frame++,tt===!0&&J.beginShadows();const z=d.state.shadowsArray;dt.render(z,S,I),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(d.setupLights(),I.isArrayCamera){const Q=I.cameras;if(U.length>0)for(let lt=0,gt=Q.length;lt<gt;lt++){const _t=Q[lt];Po(k,U,S,_t)}Xt&&wt.render(S);for(let lt=0,gt=Q.length;lt<gt;lt++){const _t=Q[lt];Co(m,S,_t,_t.viewport)}}else U.length>0&&Po(k,U,S,I),Xt&&wt.render(S),Co(m,S,I);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(x,S,I),ie.resetDefaultState(),b=-1,M=null,E.pop(),E.length>0?(d=E[E.length-1],tt===!0&&J.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ts(S,I,z,k){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){k&&kt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Rt);const lt=X.update(S),gt=S.material;gt.visible&&m.push(S,lt,gt,z,kt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){const lt=X.update(S),gt=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),kt.copy(S.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),kt.copy(lt.boundingSphere.center)),kt.applyMatrix4(S.matrixWorld).applyMatrix4(Rt)),Array.isArray(gt)){const _t=lt.groups;for(let Lt=0,Ut=_t.length;Lt<Ut;Lt++){const xt=_t[Lt],$t=gt[xt.materialIndex];$t&&$t.visible&&m.push(S,lt,$t,z,kt.z,xt)}}else gt.visible&&m.push(S,lt,gt,z,kt.z,null)}}const Q=S.children;for(let lt=0,gt=Q.length;lt<gt;lt++)Ts(Q[lt],I,z,k)}function Co(S,I,z,k){const U=S.opaque,Q=S.transmissive,lt=S.transparent;d.setupLightsView(z),tt===!0&&J.setGlobalState(x.clippingPlanes,z),k&&At.viewport(R.copy(k)),U.length>0&&wr(U,I,z),Q.length>0&&wr(Q,I,z),lt.length>0&&wr(lt,I,z),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Po(S,I,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new fi(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Mr:In,minFilter:oi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const Q=d.state.transmissionRenderTarget[k.id],lt=k.viewport||R;Q.setSize(lt.z,lt.w);const gt=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(W),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Xt&&wt.render(z);const _t=x.toneMapping;x.toneMapping=Yn;const Lt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),tt===!0&&J.setGlobalState(x.clippingPlanes,k),wr(S,z,k),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let xt=0,$t=I.length;xt<$t;xt++){const re=I[xt],ae=re.object,Oe=re.geometry,Zt=re.material,yt=re.group;if(Zt.side===ye&&ae.layers.test(k.layers)){const yn=Zt.side;Zt.side=be,Zt.needsUpdate=!0,Lo(ae,z,k,Oe,Zt,yt),Zt.side=yn,Zt.needsUpdate=!0,Ut=!0}}Ut===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}x.setRenderTarget(gt),x.setClearColor(W,Y),Lt!==void 0&&(k.viewport=Lt),x.toneMapping=_t}function wr(S,I,z){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,Q=S.length;U<Q;U++){const lt=S[U],gt=lt.object,_t=lt.geometry,Lt=k===null?lt.material:k,Ut=lt.group;gt.layers.test(z.layers)&&Lo(gt,I,z,_t,Lt,Ut)}}function Lo(S,I,z,k,U,Q){S.onBeforeRender(x,I,z,k,U,Q),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(x,I,z,k,S,Q),U.transparent===!0&&U.side===ye&&U.forceSinglePass===!1?(U.side=be,U.needsUpdate=!0,x.renderBufferDirect(z,I,k,U,S,Q),U.side=Dn,U.needsUpdate=!0,x.renderBufferDirect(z,I,k,U,S,Q),U.side=ye):x.renderBufferDirect(z,I,k,U,S,Q),S.onAfterRender(x,I,z,k,U,Q)}function Rr(S,I,z){I.isScene!==!0&&(I=ce);const k=Tt.get(S),U=d.state.lights,Q=d.state.shadowsArray,lt=U.state.version,gt=St.getParameters(S,U.state,Q,I,z),_t=St.getProgramCacheKey(gt);let Lt=k.programs;k.environment=S.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(S.isMeshStandardMaterial?O:v).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Lt===void 0&&(S.addEventListener("dispose",It),Lt=new Map,k.programs=Lt);let Ut=Lt.get(_t);if(Ut!==void 0){if(k.currentProgram===Ut&&k.lightsStateVersion===lt)return Io(S,gt),Ut}else gt.uniforms=St.getUniforms(S),S.onBeforeCompile(gt,x),Ut=St.acquireProgram(gt,_t),Lt.set(_t,Ut),k.uniforms=gt.uniforms;const xt=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(xt.clippingPlanes=J.uniform),Io(S,gt),k.needsLights=iu(S),k.lightsStateVersion=lt,k.needsLights&&(xt.ambientLightColor.value=U.state.ambient,xt.lightProbe.value=U.state.probe,xt.directionalLights.value=U.state.directional,xt.directionalLightShadows.value=U.state.directionalShadow,xt.spotLights.value=U.state.spot,xt.spotLightShadows.value=U.state.spotShadow,xt.rectAreaLights.value=U.state.rectArea,xt.ltc_1.value=U.state.rectAreaLTC1,xt.ltc_2.value=U.state.rectAreaLTC2,xt.pointLights.value=U.state.point,xt.pointLightShadows.value=U.state.pointShadow,xt.hemisphereLights.value=U.state.hemi,xt.directionalShadowMap.value=U.state.directionalShadowMap,xt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,xt.spotShadowMap.value=U.state.spotShadowMap,xt.spotLightMatrix.value=U.state.spotLightMatrix,xt.spotLightMap.value=U.state.spotLightMap,xt.pointShadowMap.value=U.state.pointShadowMap,xt.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Ut,k.uniformsList=null,Ut}function Do(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=ss.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Io(S,I){const z=Tt.get(S);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function eu(S,I,z,k,U){I.isScene!==!0&&(I=ce),T.resetTextureUnits();const Q=I.fog,lt=k.isMeshStandardMaterial?I.environment:null,gt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ki,_t=(k.isMeshStandardMaterial?O:v).get(k.envMap||lt),Lt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ut=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),xt=!!z.morphAttributes.position,$t=!!z.morphAttributes.normal,re=!!z.morphAttributes.color;let ae=Yn;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ae=x.toneMapping);const Oe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Zt=Oe!==void 0?Oe.length:0,yt=Tt.get(k),yn=d.state.lights;if(tt===!0&&(vt===!0||S!==M)){const Ke=S===M&&k.id===b;J.setState(k,S,Ke)}let Kt=!1;k.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==yn.state.version||yt.outputColorSpace!==gt||U.isBatchedMesh&&yt.batching===!1||!U.isBatchedMesh&&yt.batching===!0||U.isBatchedMesh&&yt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&yt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&yt.instancing===!1||!U.isInstancedMesh&&yt.instancing===!0||U.isSkinnedMesh&&yt.skinning===!1||!U.isSkinnedMesh&&yt.skinning===!0||U.isInstancedMesh&&yt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&yt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&yt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&yt.instancingMorph===!1&&U.morphTexture!==null||yt.envMap!==_t||k.fog===!0&&yt.fog!==Q||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==J.numPlanes||yt.numIntersection!==J.numIntersection)||yt.vertexAlphas!==Lt||yt.vertexTangents!==Ut||yt.morphTargets!==xt||yt.morphNormals!==$t||yt.morphColors!==re||yt.toneMapping!==ae||yt.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,yt.__version=k.version);let nn=yt.currentProgram;Kt===!0&&(nn=Rr(k,I,U));let mi=!1,ke=!1,ir=!1;const oe=nn.getUniforms(),un=yt.uniforms;if(At.useProgram(nn.program)&&(mi=!0,ke=!0,ir=!0),k.id!==b&&(b=k.id,ke=!0),mi||M!==S){At.buffers.depth.getReversed()?(st.copy(S.projectionMatrix),oh(st),lh(st),oe.setValue(N,"projectionMatrix",st)):oe.setValue(N,"projectionMatrix",S.projectionMatrix),oe.setValue(N,"viewMatrix",S.matrixWorldInverse);const On=oe.map.cameraPosition;On!==void 0&&On.setValue(N,Dt.setFromMatrixPosition(S.matrixWorld)),Gt.logarithmicDepthBuffer&&oe.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&oe.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,ke=!0,ir=!0)}if(U.isSkinnedMesh){oe.setOptional(N,U,"bindMatrix"),oe.setOptional(N,U,"bindMatrixInverse");const Ke=U.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),oe.setValue(N,"boneTexture",Ke.boneTexture,T))}U.isBatchedMesh&&(oe.setOptional(N,U,"batchingTexture"),oe.setValue(N,"batchingTexture",U._matricesTexture,T),oe.setOptional(N,U,"batchingIdTexture"),oe.setValue(N,"batchingIdTexture",U._indirectTexture,T),oe.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&oe.setValue(N,"batchingColorTexture",U._colorsTexture,T));const rr=z.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&Pt.update(U,z,nn),(ke||yt.receiveShadow!==U.receiveShadow)&&(yt.receiveShadow=U.receiveShadow,oe.setValue(N,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(un.envMap.value=_t,un.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(un.envMapIntensity.value=I.environmentIntensity),ke&&(oe.setValue(N,"toneMappingExposure",x.toneMappingExposure),yt.needsLights&&nu(un,ir),Q&&k.fog===!0&&at.refreshFogUniforms(un,Q),at.refreshMaterialUniforms(un,k,G,K,d.state.transmissionRenderTarget[S.id]),ss.upload(N,Do(yt),un,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ss.upload(N,Do(yt),un,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&oe.setValue(N,"center",U.center),oe.setValue(N,"modelViewMatrix",U.modelViewMatrix),oe.setValue(N,"normalMatrix",U.normalMatrix),oe.setValue(N,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ke=k.uniformsGroups;for(let On=0,Fn=Ke.length;On<Fn;On++){const Uo=Ke[On];L.update(Uo,nn),L.bind(Uo,nn)}}return nn}function nu(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function iu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,I,z){Tt.get(S.texture).__webglTexture=I,Tt.get(S.depthTexture).__webglTexture=z;const k=Tt.get(S);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const z=Tt.get(S);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,z=0){C=S,A=I,w=z;let k=!0,U=null,Q=!1,lt=!1;if(S){const _t=Tt.get(S);if(_t.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(_t.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(_t.__hasExternalTextures)T.rebindTextures(S,Tt.get(S.texture).__webglTexture,Tt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const xt=S.depthTexture;if(_t.__boundDepthTexture!==xt){if(xt!==null&&Tt.has(xt)&&(S.width!==xt.image.width||S.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Lt=S.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(lt=!0);const Ut=Tt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ut[I])?U=Ut[I][z]:U=Ut[I],Q=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?U=Tt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ut)?U=Ut[z]:U=Ut,R.copy(S.viewport),F.copy(S.scissor),B=S.scissorTest}else R.copy(bt).multiplyScalar(G).floor(),F.copy(Bt).multiplyScalar(G).floor(),B=ne;if(At.bindFramebuffer(N.FRAMEBUFFER,U)&&k&&At.drawBuffers(S,U),At.viewport(R),At.scissor(F),At.setScissorTest(B),Q){const _t=Tt.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,_t.__webglTexture,z)}else if(lt){const _t=Tt.get(S.texture),Lt=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,_t.__webglTexture,z||0,Lt)}b=-1},this.readRenderTargetPixels=function(S,I,z,k,U,Q,lt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){At.bindFramebuffer(N.FRAMEBUFFER,gt);try{const _t=S.texture,Lt=_t.format,Ut=_t.type;if(!Gt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-k&&z>=0&&z<=S.height-U&&N.readPixels(I,z,k,U,Ot.convert(Lt),Ot.convert(Ut),Q)}finally{const _t=C!==null?Tt.get(C).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(S,I,z,k,U,Q,lt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){const _t=S.texture,Lt=_t.format,Ut=_t.type;if(!Gt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=S.width-k&&z>=0&&z<=S.height-U){At.bindFramebuffer(N.FRAMEBUFFER,gt);const xt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,xt),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(I,z,k,U,Ot.convert(Lt),Ot.convert(Ut),0);const $t=C!==null?Tt.get(C).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,$t);const re=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ah(N,re,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,xt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(xt),N.deleteSync(re),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,I=null,z=0){S.isTexture!==!0&&(pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1]);const k=Math.pow(2,-z),U=Math.floor(S.image.width*k),Q=Math.floor(S.image.height*k),lt=I!==null?I.x:0,gt=I!==null?I.y:0;T.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,lt,gt,U,Q),At.unbindTexture()},this.copyTextureToTexture=function(S,I,z=null,k=null,U=0){S.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let Q,lt,gt,_t,Lt,Ut,xt,$t,re;const ae=S.isCompressedTexture?S.mipmaps[U]:S.image;z!==null?(Q=z.max.x-z.min.x,lt=z.max.y-z.min.y,gt=z.isBox3?z.max.z-z.min.z:1,_t=z.min.x,Lt=z.min.y,Ut=z.isBox3?z.min.z:0):(Q=ae.width,lt=ae.height,gt=ae.depth||1,_t=0,Lt=0,Ut=0),k!==null?(xt=k.x,$t=k.y,re=k.z):(xt=0,$t=0,re=0);const Oe=Ot.convert(I.format),Zt=Ot.convert(I.type);let yt;I.isData3DTexture?(T.setTexture3D(I,0),yt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(T.setTexture2DArray(I,0),yt=N.TEXTURE_2D_ARRAY):(T.setTexture2D(I,0),yt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const yn=N.getParameter(N.UNPACK_ROW_LENGTH),Kt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),nn=N.getParameter(N.UNPACK_SKIP_PIXELS),mi=N.getParameter(N.UNPACK_SKIP_ROWS),ke=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ae.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ae.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_t),N.pixelStorei(N.UNPACK_SKIP_ROWS,Lt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ut);const ir=S.isDataArrayTexture||S.isData3DTexture,oe=I.isDataArrayTexture||I.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const un=Tt.get(S),rr=Tt.get(I),Ke=Tt.get(un.__renderTarget),On=Tt.get(rr.__renderTarget);At.bindFramebuffer(N.READ_FRAMEBUFFER,Ke.__webglFramebuffer),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let Fn=0;Fn<gt;Fn++)ir&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(S).__webglTexture,U,Ut+Fn),S.isDepthTexture?(oe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(I).__webglTexture,U,re+Fn),N.blitFramebuffer(_t,Lt,Q,lt,xt,$t,Q,lt,N.DEPTH_BUFFER_BIT,N.NEAREST)):oe?N.copyTexSubImage3D(yt,U,xt,$t,re+Fn,_t,Lt,Q,lt):N.copyTexSubImage2D(yt,U,xt,$t,re+Fn,_t,Lt,Q,lt);At.bindFramebuffer(N.READ_FRAMEBUFFER,null),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else oe?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(yt,U,xt,$t,re,Q,lt,gt,Oe,Zt,ae.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(yt,U,xt,$t,re,Q,lt,gt,Oe,ae.data):N.texSubImage3D(yt,U,xt,$t,re,Q,lt,gt,Oe,Zt,ae):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,xt,$t,Q,lt,Oe,Zt,ae.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,xt,$t,ae.width,ae.height,Oe,ae.data):N.texSubImage2D(N.TEXTURE_2D,U,xt,$t,Q,lt,Oe,Zt,ae);N.pixelStorei(N.UNPACK_ROW_LENGTH,yn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Kt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,nn),N.pixelStorei(N.UNPACK_SKIP_ROWS,mi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ke),U===0&&I.generateMipmaps&&N.generateMipmap(yt),At.unbindTexture()},this.copyTextureToTexture3D=function(S,I,z=null,k=null,U=0){return S.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,S=arguments[2],I=arguments[3],U=arguments[4]||0),pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,I,z,k,U)},this.initRenderTarget=function(S){Tt.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),At.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,At.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class oo{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Mt(t),this.near=e,this.far=i}clone(){return new oo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cc extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pe,this.environmentIntensity=1,this.environmentRotation=new Pe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class v0 extends Re{constructor(t=null,e=1,i=1,r,s,a,o,l,u=je,c=je,f,h){super(null,a,o,l,u,c,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il extends Ce{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Pi=new jt,Ul=new jt,Zr=[],Nl=new di,M0=new jt,cr=new Wt,ur=new Sr;class ki extends Wt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Il(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,M0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Pi),Nl.copy(t.boundingBox).applyMatrix4(Pi),this.boundingBox.union(Nl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Pi),ur.copy(t.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(i),t.ray.intersectsSphere(ur)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Pi),Ul.multiplyMatrices(i,Pi),cr.matrixWorld=Ul,cr.raycast(t,Zr);for(let a=0,o=Zr.length;a<o;a++){const l=Zr[a];l.instanceId=s,l.object=this,e.push(l)}Zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Il(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new v0(new Float32Array(r*this.count),r,this.count,Ja,gn));const s=this.morphTexture.source.data.data;let a=0;for(let u=0;u<i.length;u++)a+=i[u];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*t;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class S0 extends Re{constructor(t,e,i,r,s,a,o,l,u){super(t,e,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lo extends Be{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],u=new D,c=new zt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const p=i+f/e*r;u.x=t*Math.cos(p),u.y=t*Math.sin(p),a.push(u.x,u.y,u.z),o.push(0,0,1),c.x=(a[h]/t+1)/2,c.y=(a[h+1]/t+1)/2,l.push(c.x,c.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Zi extends Be{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],h=[],p=[];let g=0;const _=[],m=i/2;let d=0;y(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(c),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(p,2));function y(){const x=new D,P=new D;let A=0;const w=(e-t)/i;for(let C=0;C<=s;C++){const b=[],M=C/s,R=M*(e-t)+t;for(let F=0;F<=r;F++){const B=F/r,W=B*l+o,Y=Math.sin(W),V=Math.cos(W);P.x=R*Y,P.y=-M*i+m,P.z=R*V,f.push(P.x,P.y,P.z),x.set(Y,w,V).normalize(),h.push(x.x,x.y,x.z),p.push(B,1-M),b.push(g++)}_.push(b)}for(let C=0;C<r;C++)for(let b=0;b<s;b++){const M=_[b][C],R=_[b+1][C],F=_[b+1][C+1],B=_[b][C+1];(t>0||b!==0)&&(c.push(M,R,B),A+=3),(e>0||b!==s-1)&&(c.push(R,F,B),A+=3)}u.addGroup(d,A,0),d+=A}function E(x){const P=g,A=new zt,w=new D;let C=0;const b=x===!0?t:e,M=x===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),g++;const R=g;for(let F=0;F<=r;F++){const W=F/r*l+o,Y=Math.cos(W),V=Math.sin(W);w.x=b*V,w.y=m*M,w.z=b*Y,f.push(w.x,w.y,w.z),h.push(0,M,0),A.x=Y*.5+.5,A.y=V*.5*M+.5,p.push(A.x,A.y),g++}for(let F=0;F<r;F++){const B=P+F,W=R+F;x===!0?c.push(W,W+1,B):c.push(W+1,W,B),C+=3}u.addGroup(d,C,x===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class co extends Be{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],a=[];o(r),u(i),c(),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(s.slice(),3)),this.setAttribute("uv",new le(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const E=new D,x=new D,P=new D;for(let A=0;A<e.length;A+=3)p(e[A+0],E),p(e[A+1],x),p(e[A+2],P),l(E,x,P,y)}function l(y,E,x,P){const A=P+1,w=[];for(let C=0;C<=A;C++){w[C]=[];const b=y.clone().lerp(x,C/A),M=E.clone().lerp(x,C/A),R=A-C;for(let F=0;F<=R;F++)F===0&&C===A?w[C][F]=b:w[C][F]=b.clone().lerp(M,F/R)}for(let C=0;C<A;C++)for(let b=0;b<2*(A-C)-1;b++){const M=Math.floor(b/2);b%2===0?(h(w[C][M+1]),h(w[C+1][M]),h(w[C][M])):(h(w[C][M+1]),h(w[C+1][M+1]),h(w[C+1][M]))}}function u(y){const E=new D;for(let x=0;x<s.length;x+=3)E.x=s[x+0],E.y=s[x+1],E.z=s[x+2],E.normalize().multiplyScalar(y),s[x+0]=E.x,s[x+1]=E.y,s[x+2]=E.z}function c(){const y=new D;for(let E=0;E<s.length;E+=3){y.x=s[E+0],y.y=s[E+1],y.z=s[E+2];const x=m(y)/2/Math.PI+.5,P=d(y)/Math.PI+.5;a.push(x,1-P)}g(),f()}function f(){for(let y=0;y<a.length;y+=6){const E=a[y+0],x=a[y+2],P=a[y+4],A=Math.max(E,x,P),w=Math.min(E,x,P);A>.9&&w<.1&&(E<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),P<.2&&(a[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function p(y,E){const x=y*3;E.x=t[x+0],E.y=t[x+1],E.z=t[x+2]}function g(){const y=new D,E=new D,x=new D,P=new D,A=new zt,w=new zt,C=new zt;for(let b=0,M=0;b<s.length;b+=9,M+=6){y.set(s[b+0],s[b+1],s[b+2]),E.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),A.set(a[M+0],a[M+1]),w.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),P.copy(y).add(E).add(x).divideScalar(3);const R=m(P);_(A,M+0,y,R),_(w,M+2,E,R),_(C,M+4,x,R)}}function _(y,E,x,P){P<0&&y.x===1&&(a[E]=y.x-1),x.x===0&&x.z===0&&(a[E]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.vertices,t.indices,t.radius,t.details)}}class uo extends co{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new uo(t.radius,t.detail)}}class ho extends Be{constructor(t=.5,e=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],u=[],c=[];let f=t;const h=(e-t)/r,p=new D,g=new zt;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const d=s+m/i*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),u.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,c.push(g.x,g.y)}f+=h}for(let _=0;_<r;_++){const m=_*(i+1);for(let d=0;d<i;d++){const y=d+m,E=y,x=y+i+1,P=y+i+2,A=y+1;o.push(E,x,A),o.push(x,P,A)}}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ms extends Be{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const c=[],f=new D,h=new D,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const y=[],E=d/i;let x=0;d===0&&a===0?x=.5/e:d===i&&l===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const A=P/e;f.x=-t*Math.cos(r+A*s)*Math.sin(a+E*o),f.y=t*Math.cos(a+E*o),f.z=t*Math.sin(r+A*s)*Math.sin(a+E*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(A+x,1-E),y.push(u++)}c.push(y)}for(let d=0;d<i;d++)for(let y=0;y<e;y++){const E=c[d][y+1],x=c[d][y],P=c[d+1][y],A=c[d+1][y+1];(d!==0||a>0)&&p.push(E,x,A),(d!==i-1||l<Math.PI)&&p.push(x,P,A)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fo extends Be{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],u=[],c=new D,f=new D,h=new D;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),h.subVectors(f,c).normalize(),l.push(h.x,h.y,h.z),u.push(g/r),u.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,y=(r+1)*p+g;a.push(_,m,y),a.push(m,d,y)}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Fe extends yr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class po extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class y0 extends po{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ta=new jt,Ol=new D,Fl=new D;class Pc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ol),Fl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fl),e.updateMatrixWorld(),ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const zl=new jt,hr=new D,ea=new D;class b0 extends Pc{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),hr.setFromMatrixPosition(t.matrixWorld),i.position.copy(hr),ea.copy(i.position),ea.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ea),i.updateMatrixWorld(),r.makeTranslation(-hr.x,-hr.y,-hr.z),zl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl)}}class Lc extends po{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new b0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class E0 extends Pc{constructor(){super(new bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class T0 extends po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new E0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class A0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bl(){return performance.now()}const kl=new jt;class w0{constructor(t,e,i=0,r=1/0){this.ray=new mc(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kl),this}intersectObject(t,e=!0,i=[]){return Xa(t,this,i,e),i.sort(Hl),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Xa(t[r],this,i,e);return i.sort(Hl),i}}function Hl(n,t){return n.distance-t.distance}function Xa(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Xa(s[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);const We=2.4,me=.12,Dc=1.6,Ni={x0:-3.55,x1:3.55,z0:-3.1,z1:3.1},mo={comedor:[{x0:-3.55,x1:1.55,z0:-.1,z1:3.1}],hab1:[{x0:-3.55,x1:.2,z0:-3.1,z1:-.1}],hab2:[{x0:.2,x1:3.55,z0:-3.1,z1:-.1}],bano:[{x0:1.55,x1:3.55,z0:-.1,z1:3.1}]},Ic=[{id:"W",ax:"z",at:-3.55,from:-3.1,to:3.1,ext:-1,openings:[{c:-1.6,w:2,sill:0,head:2.1,kind:"slider"},{c:1,w:.95,sill:0,head:2.1,kind:"door",pass:!0,entrance:!0},{c:2.35,w:1.2,sill:0,head:2.1,kind:"slider"}]},{id:"E",ax:"z",at:3.55,from:-3.1,to:3.1,ext:1,openings:[{c:-1.95,w:1.2,sill:.9,head:2,kind:"window",blind:.4},{c:.6,w:1,sill:1.35,head:1.9,kind:"window"}]},{id:"N",ax:"x",at:-3.1,from:-3.55,to:3.55,ext:-1,openings:[]},{id:"S",ax:"x",at:3.1,from:-3.55,to:3.55,ext:1,openings:[{c:-.35,w:1.2,sill:1,head:1.9,kind:"window",blind:.45}]},{id:"P1",ax:"x",at:-.1,from:-3.55,to:3.55,ext:0,openings:[{c:-.95,w:.85,sill:0,head:2.05,kind:"door",pass:!0,hinge:"end",swing:-1,angle:85},{c:.85,w:.85,sill:0,head:2.05,kind:"door",pass:!0,hinge:"start",swing:-1,angle:80}]},{id:"P2",ax:"z",at:.2,from:-3.1,to:-.1,ext:0,openings:[]},{id:"P3",ax:"z",at:1.55,from:-.1,to:3.1,ext:0,openings:[{c:.7,w:.8,sill:0,head:2.05,kind:"door",pass:!0,hinge:"start",swing:1,angle:96}]}],Oi={x0:-9.6,x1:-3.55,z0:-3.9,z1:3.6},ci={x:-6,z:-5.3,w:2.3,d:2.3},Ln={x:-9.5,z:12.5,r:2.53,h:1.22},hn={x0:-13,x1:-4.5,z0:5.9,z1:16.5},go=[{x0:-14.5,x1:4.5,z0:3.6,z1:5.9},{x0:-4,x1:4.5,z0:5.9,z1:11.5}],_o=[[30,22],[21,17],[11,12.5],[1,8.8]],xo=[[55,-320],[75,-127],[83,-82],[80,-60],[61,-16],[47,0],[28,21],[-6,57],[-50,101],[-120,190],[-200,290]],gs=4.2,Uc=[{x0:-.65,x1:.65,z0:1.35,z1:2.15},{x0:-3.45,x1:-1.55,z0:2.15,z1:3.04},{x0:-1.3,x1:1.5,z0:2.5,z1:3.04},{x0:.79,x1:1.5,z0:1.35,z1:2},{x0:-3.45,x1:-2.55,z0:-.05,z1:.4},{x0:3.05,x1:3.49,z0:.2,z1:1},{x0:2.95,x1:3.49,z0:1.35,z1:1.75},{x0:2.5,x1:3.49,z0:2.05,z1:3.04},{x0:-3.05,x1:-1.55,z0:-3.04,z1:-1.07},{x0:-.9,x1:-.25,z0:-3.04,z1:-2.5},{x0:-.43,x1:.03,z0:-.6,z1:-.2},{x0:1.6,x1:3.05,z0:-3.04,z1:-1.1},{x0:.26,x1:.8,z0:-2.5,z1:-1.95},{x0:.3,x1:.62,z0:-3.04,z1:-2.75},{x0:-7.45,x1:-5.75,z0:1.75,z1:2.65},{x0:-8.5,x1:-7.2,z0:-2,z1:-1.2},{x0:-7.2,x1:-4.8,z0:-6.4,z1:-4.15},{x0:-12,x1:-10,z0:6.3,z1:8.3}],Nc=[{x:Ln.x,z:Ln.z,r:Ln.r+.35}],Ve={llegada:[29,21.5],grava0:[-13,4.8],grava1:[-6,4.8],gravaE:[.8,5.6],estac:[.8,8.3],cesped:[-9.5,7],piscina:[-9.5,8.4],terrazaS:[-4.6,3.1],terraza:[-4.6,1],parrilla:[-6.6,-.9],tinaja:[-6,-2.9],umbral:[-3.55,1],dentro:[-2.5,1],comedor:[-1.4,1.5],hab1P:[-.95,.35],hab1:[-1.1,-.75],hab2P:[.85,.35],hab2:[1.15,-.8],banoP:[1.1,.7],banoP2:[1.95,.7],bano:[2.4,1]},Oc=[["llegada","estac"],["grava0","grava1"],["grava1","gravaE"],["gravaE","estac"],["grava0","cesped"],["grava1","cesped"],["cesped","piscina"],["grava1","terrazaS"],["terrazaS","terraza"],["terraza","parrilla"],["parrilla","tinaja"],["terraza","tinaja"],["terraza","umbral"],["umbral","dentro"],["dentro","comedor"],["comedor","hab1P"],["hab1P","hab1"],["comedor","hab2P"],["hab2P","hab2"],["dentro","banoP"],["comedor","banoP"],["banoP","banoP2"],["banoP2","bano"]],_s=[{id:"llegada",node:"llegada",yaw:307,photos:"terraza",ring:!1},{id:"estac",node:"estac",yaw:330,photos:"terraza",ring:!0},{id:"piscina",node:"piscina",yaw:180,photos:"piscina",ring:!0},{id:"terraza",node:"terraza",yaw:262,photos:"terraza",ring:!0},{id:"parrilla",node:"parrilla",yaw:250,photos:"terraza",ring:!0},{id:"tinaja",node:"tinaja",yaw:350,photos:"terraza",ring:!0},{id:"comedor",node:"comedor",yaw:88,photos:"comedor",ring:!0},{id:"bano",node:"bano",yaw:96,photos:"bano",ring:!0},{id:"hab1",node:"hab1",yaw:272,photos:"hab1",ring:!0},{id:"hab2",node:"hab2",yaw:42,photos:"hab2",ring:!0}],Ne=["llegada","estac","terraza","parrilla","tinaja","comedor","bano","hab1","hab2","piscina"],vo={comedor:["comedor-1","comedor-2","comedor-3","comedor-4"],bano:["bano-1","bano-2"],hab1:["hab1-1","hab1-2"],hab2:["hab2-1","hab2-2"],terraza:["terraza-1","terraza-2","terraza-3"],piscina:["piscina-1"]};function xs(n,t){for(const[i,r]of Object.entries(mo))for(const s of r)if(n>=s.x0&&n<=s.x1&&t>=s.z0&&t<=s.z1)return i;return Math.hypot(n-Ln.x,t-Ln.z)<8?"piscina":Math.hypot(n-ci.x,t-ci.z)<3.2?"tinaja":n>=Oi.x0&&n<=Oi.x1&&t>=Oi.z0&&t<=Oi.z1?n<-7&&t<0?"parrilla":"terraza":n>-4&&t>5.5&&n<6&&t<14?"estac":"exterior"}const Fc=Object.freeze(Object.defineProperty({__proto__:null,CAMINO:_o,CESPED:hn,COLLIDERS_CIRCLE:Nc,COLLIDERS_RECT:Uc,EDGES:Oc,EYE:Dc,GRAVA:go,H:We,HOUSE:Ni,NODES:Ve,PHOTOS:vo,PISCINA:Ln,ROOMS:mo,RUTA:xo,RUTA_ANCHO:gs,SPOTS:_s,T:me,TERRAZA:Oi,TINAJA:ci,TOUR:Ne,WALLS:Ic,roomAt:xs},Symbol.toStringTag,{value:"Module"}));function zc(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new Be;let u=0;for(let c=0;c<n.length;++c){const f=n[c];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,c),u+=p}}if(e){let c=0;const f=[];for(let h=0;h<n.length;++h){const p=n[h].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+c);c+=n[h].attributes.position.count}l.setIndex(f)}for(const c in s){const f=Gl(s[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(const c in a){const f=a[c][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let h=0;h<f;++h){const p=[];for(let _=0;_<a[c].length;++_)p.push(a[c][_][h]);const g=Gl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Gl(n){let t,e,i,r=-1,s=0;for(let u=0;u<n.length;++u){const c=n[u];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*e}const a=new t(s),o=new Ce(a,e,i);let l=0;for(let u=0;u<n.length;++u){const c=n[u];if(c.isInterleavedBufferAttribute){const f=l/e;for(let h=0,p=c.count;h<p;h++)for(let g=0;g<e;g++){const _=c.getComponent(h,g);o.setComponent(h+f,g,_)}}else a.set(c.array,l);l+=c.count*e}return r!==void 0&&(o.gpuType=r),o}let na=4242;const Et=()=>(na=na*1664525+1013904223>>>0,na/4294967296),mt=(n,t)=>n+Et()*(t-n),R0=n=>[n>>16&255,n>>8&255,n&255],Ue=(n,t)=>{const[e,i,r]=R0(n),s=a=>Math.max(0,Math.min(255,Math.round(a*t)));return`rgb(${s(e)},${s(i)},${s(r)})`};function Me(n,t,e,{repeat:i=!0}={}){const r=document.createElement("canvas");r.width=n,r.height=t,e(r.getContext("2d"),n,t);const s=new S0(r);return s.colorSpace=Xe,i&&(s.wrapS=s.wrapT=os),s.anisotropy=4,s}function Er(n,t,e,i,r,s,a){for(let o=0;o<i;o++)n.fillStyle=r[Et()*r.length|0],n.globalAlpha=mt(.15,.6),n.beginPath(),n.arc(Et()*t,Et()*e,mt(s,a),0,7),n.fill();n.globalAlpha=1}const Ct={};Ct.dirt=()=>Me(256,256,(n,t,e)=>{n.fillStyle="#a3957c",n.fillRect(0,0,t,e),Er(n,t,e,900,["#a4855f","#c9ad8a","#8f7452","#d4b898"],.6,2.2)});Ct.concrete=()=>Me(256,256,(n,t,e)=>{n.fillStyle="#bdb8ae",n.fillRect(0,0,t,e),Er(n,t,e,700,["#a9a49a","#cbc7bd","#9a958b"],.5,1.8),n.strokeStyle="rgba(70,66,60,.55)",n.lineWidth=2,n.strokeRect(0,0,t,e)});Ct.gravel=()=>Me(256,256,(n,t,e)=>{n.fillStyle="#6d6d6b",n.fillRect(0,0,t,e);for(let i=0;i<1400;i++){const r=70+Et()*90;n.fillStyle=`rgb(${r},${r},${r-2})`,n.beginPath(),n.ellipse(Et()*t,Et()*e,mt(2,5),mt(1.5,4),Et()*3,0,7),n.fill()}});Ct.turf=()=>Me(256,256,(n,t,e)=>{n.fillStyle="#5f9a3c",n.fillRect(0,0,t,e);for(let i=0;i<2500;i++){n.strokeStyle=["#4f8a30","#73ad4b","#67a040","#82b957"][Et()*4|0],n.globalAlpha=.6;const r=Et()*t,s=Et()*e;n.beginPath(),n.moveTo(r,s),n.lineTo(r+mt(-2,2),s-mt(3,7)),n.stroke()}n.globalAlpha=1});Ct.redEarth=()=>Me(256,256,(n,t,e)=>{n.fillStyle="#93594a",n.fillRect(0,0,t,e),Er(n,t,e,1600,["#7d4a3c","#a8705a","#6a3f34","#b58468"],.8,3.2)});Ct.vinyl=n=>Me(512,512,(t,e,i)=>{t.fillStyle=Ue(n,1),t.fillRect(0,0,e,i);const r=7,s=i/r;for(let a=0;a<r;a++){const o=Et()*e;for(const l of[o-e,o]){t.fillStyle=Ue(n,mt(.9,1.08)),t.fillRect(l,a*s,e,s);for(let u=0;u<16;u++){t.strokeStyle=Ue(n,mt(.8,1.15)),t.globalAlpha=.25,t.beginPath();const c=a*s+Et()*s;t.moveTo(l,c),t.lineTo(l+e,c+mt(-2,2)),t.stroke()}t.globalAlpha=1,t.fillStyle="rgba(0,0,0,.28)",t.fillRect(l,a*s,2,s)}t.fillStyle="rgba(0,0,0,.22)",t.fillRect(0,a*s,e,1.5)}});Ct.tiles=n=>Me(512,512,(t,e,i)=>{const s=e/3;for(let a=0;a<3;a++)for(let o=0;o<3;o++){t.fillStyle=Ue(n,mt(.9,1.1)),t.fillRect(a*s,o*s,s,s);for(let l=0;l<40;l++)t.fillStyle=Ue(n,mt(.75,1.25)),t.globalAlpha=.18,t.beginPath(),t.arc(a*s+Et()*s,o*s+Et()*s,mt(6,26),0,7),t.fill();t.globalAlpha=1}t.strokeStyle="rgba(25,25,27,.85)",t.lineWidth=3;for(let a=0;a<=3;a++)t.beginPath(),t.moveTo(a*s,0),t.lineTo(a*s,i),t.stroke(),t.beginPath(),t.moveTo(0,a*s),t.lineTo(e,a*s),t.stroke()});Ct.cladding=()=>Me(512,640,(n,t,e)=>{const i=e/2.5,r=.14*i;for(let u=0;u<e-i;u+=r){n.fillStyle=Ue(10189916,mt(.86,1.1)),n.fillRect(0,u,t,r);for(let c=0;c<10;c++){n.strokeStyle=Ue(7164472,1),n.globalAlpha=.2,n.beginPath();const f=u+Et()*r;n.moveTo(0,f),n.lineTo(t,f+mt(-1,1)),n.stroke()}n.globalAlpha=1,n.fillStyle="rgba(40,28,16,.6)",n.fillRect(0,u,t,1.6)}const s=e-i,a=.075*i*1.6,o=.23*i;n.fillStyle="#d0c7b9",n.fillRect(0,s,t,i);let l=0;for(let u=s;u<e;u+=a,l++)for(let c=-(l%2)*o/2;c<t;c+=o)n.fillStyle=Ue(10251602,mt(.8,1.15)),n.fillRect(c+1.5,u+1.5,o-3,a-3)});Ct.cabinet=()=>Me(256,256,(n,t,e)=>{n.fillStyle="#b9b0a3",n.fillRect(0,0,t,e);for(let i=0;i<160;i++){n.strokeStyle=Et()>.5?"#d3cbbf":"#8f877b",n.globalAlpha=.35;const r=Et()*t;n.beginPath(),n.moveTo(r,0),n.lineTo(r+mt(-6,6),e),n.stroke()}n.globalAlpha=1});Ct.wood=n=>Me(256,256,(t,e,i)=>{t.fillStyle=Ue(n,1),t.fillRect(0,0,e,i);for(let r=0;r<200;r++){t.strokeStyle=Ue(n,mt(.75,1.2)),t.globalAlpha=.3;const s=Et()*i;t.beginPath(),t.moveTo(0,s),t.lineTo(e,s+mt(-3,3)),t.stroke()}t.globalAlpha=1,t.strokeStyle="rgba(0,0,0,.35)",t.lineWidth=2;for(let r=0;r<e;r+=e/4)t.beginPath(),t.moveTo(r,0),t.lineTo(r,i),t.stroke()});Ct.rug=()=>Me(512,768,(n,t,e)=>{n.fillStyle="#f3dcc6",n.fillRect(0,0,t,e);const i=(r,s,a,o,l)=>{n.save(),n.translate(r,s),n.rotate(o),n.fillStyle=l,n.beginPath(),n.moveTo(0,0),n.bezierCurveTo(a*.6,-a*.2,a*.9,a*.5,0,a),n.bezierCurveTo(-a*.9,a*.5,-a*.6,-a*.2,0,0),n.fill(),n.strokeStyle="rgba(240,220,190,.7)",n.lineWidth=2;for(let u=-3;u<=3;u++)n.beginPath(),n.moveTo(0,a*.3),n.lineTo(u*a*.13,a*.85),n.stroke();n.restore()};for(let r=0;r<26;r++)i(Et()*t,Et()*e,mt(110,190),Et()*6.3,["#3f7c48","#2f6a3d","#5a9a5a"][Et()*3|0]);for(let r=0;r<16;r++){const s=Et()*t,a=Et()*e,o=mt(40,70);n.fillStyle=["#e5665b","#ef8a7b","#d9544c"][Et()*3|0],n.beginPath(),n.arc(s,a,o,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(s+o*.2,a-o*.1,o*.22,0,7),n.fill()}n.fillStyle="#efe7da",n.fillRect(0,0,t,10),n.fillRect(0,e-10,t,10)},{repeat:!1});Ct.plaster=()=>Me(256,256,(n,t,e)=>{n.fillStyle="#f4f2ec",n.fillRect(0,0,t,e);for(let i=0;i<2600;i++){const r=226+Et()*26;n.fillStyle=`rgb(${r},${r-2},${r-6})`,n.globalAlpha=.5,n.fillRect(Et()*t,Et()*e,mt(1,3),mt(1,3))}n.globalAlpha=1});Ct.fabric=n=>Me(128,128,(t,e,i)=>{t.fillStyle=Ue(n,1),t.fillRect(0,0,e,i);for(let r=0;r<i;r+=2)t.fillStyle=Ue(n,r%4?.9:1.08),t.globalAlpha=.45,t.fillRect(0,r,e,1);for(let r=0;r<e;r+=2)t.fillStyle=Ue(n,r%4?.92:1.06),t.globalAlpha=.35,t.fillRect(r,0,1,i);t.globalAlpha=1,Er(t,e,i,160,[Ue(n,.8),Ue(n,1.2)],.4,1)});Ct.tuft=()=>Me(128,128,(n,t,e)=>{n.lineCap="round";for(let i=0;i<46;i++){const r=t/2+mt(-26,26),s=mt(-20,20),a=mt(20,105);n.strokeStyle=["#b8a66a","#a4934f","#c9b982","#8f8d4c","#7f8a48"][Et()*5|0],n.lineWidth=mt(1.2,2.6),n.globalAlpha=mt(.7,1),n.beginPath(),n.moveTo(r,e-2),n.quadraticCurveTo(r+s*.3,e-a*.6,r+s,e-a),n.stroke()}n.globalAlpha=1},{repeat:!1});function qa(n,t,e,i,r,s,a,o=.5){for(let l=0;l<r;l++){const u=Et()*Math.PI*2,c=Math.sqrt(Et())*i,f=t+Math.cos(u)*c,h=e+Math.sin(u)*c*.8,p=mt(s*.6,s),g=u+mt(-.6,.6);n.strokeStyle=a[Et()*a.length|0],n.globalAlpha=mt(.65,1),n.lineWidth=mt(2,4.2),n.beginPath(),n.moveTo(f,h),n.quadraticCurveTo(f+Math.cos(g)*p*.6,h+Math.sin(g)*p*.3+p*o*.5,f+Math.cos(g)*p*.8,h+p*o),n.stroke()}n.globalAlpha=1}Ct.treeEucalyptus=()=>Me(512,1024,(n,t,e)=>{n.lineCap="round";const i=t/2;n.strokeStyle="#8b7f6c",n.lineWidth=15,n.beginPath(),n.moveTo(i,e),n.bezierCurveTo(i-10,e*.75,i+14,e*.58,i+4,e*.36),n.stroke(),n.strokeStyle="#a89c88",n.lineWidth=5,n.beginPath(),n.moveTo(i+4,e),n.bezierCurveTo(i-6,e*.75,i+18,e*.58,i+8,e*.36),n.stroke();const r=["#5f7a58","#6d8862","#4d6849","#7f9a72","#8fa583","#56704f"],s=[[-120,.44,90],[110,.4,96],[-60,.3,84],[70,.24,88],[0,.16,100],[-150,.3,70],[150,.28,72],[-20,.36,80]];for(const[a,o,l]of s){const u=i+a,c=e*o;n.strokeStyle="#8b7f6c",n.lineWidth=6,n.beginPath(),n.moveTo(i+6,e*(o+.16)),n.quadraticCurveTo(i+a*.4,c+60,u,c+20),n.stroke(),qa(n,u,c,l,260,50,r,.8)}qa(n,i+4,e*.12,70,200,46,["#8fa583","#a3b696","#7f9a72"],.7)});Ct.treePine=()=>Me(512,1024,(n,t,e)=>{n.lineCap="round";const i=t/2;n.strokeStyle="#5b4a3a",n.lineWidth=14,n.beginPath(),n.moveTo(i,e),n.lineTo(i,e*.1),n.stroke();const r=["#2c4a2e","#345636","#254028","#3d6240","#2f5031"];for(let s=0;s<18;s++){const a=s/17,o=e*(.86-a*.78),l=40+(1-a)*150;for(let u=0;u<150*(1-a*.5);u++){const c=i+mt(-l,l)*(.4+Et()*.6),f=o+mt(-18,18);n.strokeStyle=r[Et()*r.length|0],n.globalAlpha=mt(.7,1),n.lineWidth=mt(2,4),n.beginPath(),n.moveTo(c,f),n.lineTo(c+(c-i)*.12+mt(-6,6),f+mt(16,34)),n.stroke()}}n.globalAlpha=1});Ct.treeBush=()=>Me(512,512,(n,t,e)=>{n.lineCap="round";const i=t/2;n.strokeStyle="#6b5a47",n.lineWidth=14,n.beginPath(),n.moveTo(i,e),n.quadraticCurveTo(i-12,e*.7,i-30,e*.5),n.moveTo(i,e*.85),n.quadraticCurveTo(i+20,e*.65,i+46,e*.46),n.stroke();const r=["#6e7d48","#7d8a55","#5c6d3f","#8f9a62","#67783f"];for(const[s,a,o]of[[-70,.36,110],[80,.34,105],[0,.22,120],[-20,.5,90],[60,.5,80]])qa(n,i+s,e*a,o,260,30,r,.5)});Ct.rockTex=()=>Me(128,128,(n,t,e)=>{n.fillStyle="#8b857b",n.fillRect(0,0,t,e),Er(n,t,e,500,["#6e695f","#a39d92","#7a746a","#b3ad9f"],.8,3)});const ia=new Map;function ut(n,t={}){const e=JSON.stringify([n,t.map?t.map.uuid:"",t.bump?t.bump.uuid:"",t.bumpScale,t.tile,t.rough,t.metal,t.opacity,t.emissive,t.side,t.keepUV]);if(ia.has(e))return ia.get(e);const i=new Fe({color:n,roughness:t.rough??.85,metalness:t.metal??0,transparent:t.opacity!==void 0,opacity:t.opacity??1,side:t.side??Dn,emissive:t.emissive??0,map:t.map||null,bumpMap:t.bump||null,bumpScale:t.bumpScale??1});return t.opacity!==void 0&&(i.depthWrite=!1),i.userData={tile:t.tile||0,keepUV:!!t.keepUV,noShadow:t.opacity!==void 0},ia.set(e,i),i}class C0{constructor(){this.items=[],this.stack=[new jt]}push(t=0,e=0,i=0,r=0){const s=new jt().makeRotationY(r).setPosition(t,e,i);this.stack.push(this.stack[this.stack.length-1].clone().multiply(s))}pop(){this.stack.pop()}_add(t,e,i,r,s,a,o,l){const u=new jt().compose(new D(i,r,s),new Nn().setFromEuler(new Pe(a,o,l)),new D(1,1,1));t.applyMatrix4(this.stack[this.stack.length-1].clone().multiply(u));const c=e.userData.tile;if(c&&!e.userData.keepUV){const f=Array.isArray(c)?c[0]:c,h=Array.isArray(c)?c[1]:c,p=t.attributes.position,g=t.attributes.normal,_=t.attributes.uv;for(let m=0;m<p.count;m++){const d=Math.abs(g.getX(m)),y=Math.abs(g.getY(m)),E=Math.abs(g.getZ(m));let x,P;y>d&&y>E?(x=p.getX(m),P=p.getZ(m)):d>E?(x=p.getZ(m),P=p.getY(m)):(x=p.getX(m),P=p.getY(m)),_.setXY(m,x/f,P/h)}}this.items.push({geo:t,material:e})}box(t,e,i,r,s,a,o,l=0,u=0,c=0){this._add(new _n(t,e,i),r,s,a+e/2,o,u,l,c)}cyl(t,e,i,r,s,a,o,l=12,u=0,c=0){this._add(new Zi(t,e,i,l),r,s,a+i/2,o,u,0,c)}sphere(t,e,i,r,s,a=1,o=1,l=1,u=12){const c=new ms(t,u,Math.max(6,u>>1));c.scale(a,o,l),this._add(c,e,i,r,s,0,0,0)}plane(t,e,i,r,s,a,o=0){const l=new Qe(t,e);l.rotateX(-Math.PI/2),l.rotateY(o),this._add(l,i,r,s,a,0,0,0)}geo(t,e,i=0,r=0,s=0,a=0,o=0,l=0){this._add(t,e,i,r,s,a,o,l)}build(){const t=new Map;for(const i of this.items){const r=i.geo.index?i.geo.toNonIndexed():i.geo;for(const s of Object.keys(r.attributes))["position","normal","uv"].includes(s)||r.deleteAttribute(s);r.attributes.uv||r.setAttribute("uv",new Ce(new Float32Array(r.attributes.position.count*2),2)),t.has(i.material)||t.set(i.material,[]),t.get(i.material).push(r)}const e=new li;for(const[i,r]of t){const s=zc(r,!1),a=new Wt(s,i);a.castShadow=!i.userData.noShadow,a.receiveShadow=!0,e.add(a)}return e}}function P0(){const n=Ct.plaster(),t=Ct.cladding();return{paint:ut(15789800,{map:n,bump:n,bumpScale:.6,tile:1.2,rough:.95}),ceiling:ut(16184816,{map:n,bump:n,bumpScale:.4,tile:1.2,rough:1}),skirting:ut(16316403,{rough:.5}),gutter:ut(7106418,{rough:.5,metal:.4}),roof:ut(14144975,{rough:.9}),fascia:ut(15329249),foundation:ut(16777215,{map:Ct.concrete(),tile:3}),floorComedor:ut(16777215,{map:Ct.vinyl(9274232),tile:1.2,rough:.55}),floorHab1:ut(16777215,{map:Ct.vinyl(11115919),tile:1.2,rough:.55}),floorHab2:ut(16777215,{map:Ct.vinyl(8484459),tile:1.2,rough:.55}),floorBano:ut(16777215,{map:Ct.tiles(6119267),tile:1.2,rough:.35}),clad:ut(16777215,{map:t,bump:t,bumpScale:2.2,tile:[2,2.5],rough:.9}),frameDark:ut(2828841,{rough:.5,metal:.4}),frameWood:ut(3878695,{rough:.7}),glass:ut(13625074,{opacity:.2,rough:.05,metal:.1,side:ye}),doorWhite:ut(16184559,{rough:.6}),doorRustic:ut(16777215,{map:Ct.wood(11567439),tile:1,rough:.8}),gold:ut(13936698,{rough:.3,metal:.5}),blind:ut(14207922,{rough:1,side:ye}),lamp:ut(16774877,{emissive:16773320,rough:.5})}}function L0(n){const t=[...n.openings].sort((r,s)=>r.c-s.c),e=[];let i=n.from;for(const r of t){const s=r.c-r.w/2,a=r.c+r.w/2;s>i&&e.push({a:i,b:s,y0:0,y1:We,solid:!0}),r.sill>0&&e.push({a:s,b:a,y0:0,y1:r.sill,solid:!0}),r.head<We&&e.push({a:s,b:a,y0:r.head,y1:We,solid:!1}),i=a}return i<n.to&&e.push({a:i,b:n.to,y0:0,y1:We,solid:!0}),e}function D0(n,t){const e=[],{x0:i,x1:r,z0:s,z1:a}=Ni;n.box(r-i+.5,.1,a-s+.5,t.foundation,0,-.15,0);const o={comedor:t.floorComedor,hab1:t.floorHab1,hab2:t.floorHab2,bano:t.floorBano};for(const[c,f]of Object.entries(mo))for(const h of f)n.box(h.x1-h.x0,.05,h.z1-h.z0,o[c],(h.x0+h.x1)/2,-.05,(h.z0+h.z1)/2);n.box(r-i+.9,.18,a-s+.9,t.roof,0,We,0),n.box(r-i+.8,.02,a-s+.8,t.ceiling,0,We-.02,0);const l=(r-i+.9)/2,u=(a-s+.9)/2;n.box(r-i+1,.09,.09,t.gutter,0,We-.05,-u-.03),n.box(r-i+1,.09,.09,t.gutter,0,We-.05,u+.03),n.box(.09,.09,a-s+1,t.gutter,-l-.03,We-.05,0),n.box(.09,.09,a-s+1,t.gutter,l+.03,We-.05,0),n.box(.08,We-.1,.08,t.gutter,-l-.03,0,u+.03);for(const c of Ic){const f=c.ext,h=c.ext!==0&&c.ax==="z"?me/2:0,p=L0({...c,from:c.from-h,to:c.to+h});for(const g of p){const _=g.b-g.a,m=g.y1-g.y0,d=(g.a+g.b)/2;if(c.ax==="x"){if(n.box(_,m,me,t.paint,d,g.y0,c.at),f&&n.box(_,m,.03,t.clad,d,g.y0,c.at+f*(me/2+.015)),g.solid&&(e.push({x0:g.a,x1:g.b,z0:c.at-me/2,z1:c.at+me/2}),g.y0===0))for(const y of f?[-f]:[-1,1])n.box(_,.08,.014,t.skirting,d,0,c.at+y*(me/2+.007))}else if(n.box(me,m,_,t.paint,c.at,g.y0,d),f&&n.box(.03,m,_,t.clad,c.at+f*(me/2+.015),g.y0,d),g.solid&&(e.push({x0:c.at-me/2,x1:c.at+me/2,z0:g.a,z1:g.b}),g.y0===0))for(const y of f?[-f]:[-1,1])n.box(.014,.08,_,t.skirting,c.at+y*(me/2+.007),0,d)}for(const g of c.openings)if(I0(n,t,c,g),!g.pass&&g.sill===0){const _=g.c-g.w/2,m=g.c+g.w/2;e.push(c.ax==="x"?{x0:_,x1:m,z0:c.at-me/2,z1:c.at+me/2}:{x0:c.at-me/2,x1:c.at+me/2,z0:_,z1:m})}}for(const[c,f]of[[-1.4,1.5],[.2,1.5],[-1.7,-1.6],[1.9,-1.6],[2.55,1.5]])n.cyl(.14,.14,.02,t.lamp,c,We-.05,f,16);return e}function I0(n,t,e,i){const r=i.c-i.w/2,s=i.c+i.w/2,a=e.ext?-e.ext:1,o=(c,f,h,p,g,_,m=0)=>{e.ax==="x"?n.box(c,f,h,p,g,_,e.at+m):n.box(h,f,c,p,e.at+m,_,g)};if(i.kind==="door"){const c=i.hinge==="end"?-1:1,f=i.hinge==="end"?s:r,h=(i.angle??(i.entrance?100:80))*Math.PI/180,p=i.entrance?-1:i.swing,g=i.entrance?1:c,_=i.entrance?r:f,m=e.ax==="x"?[g,0]:[0,g],d=e.ax==="x"?[0,p]:[p,0],y=[m[0]*Math.cos(h)+d[0]*Math.sin(h),m[1]*Math.cos(h)+d[1]*Math.sin(h)],E=e.ax==="x"?[_,e.at]:[e.at,_],x=i.w-.03,P=[E[0]+y[0]*(x/2),E[1]+y[1]*(x/2)],A=-Math.atan2(y[1],y[0]),w=i.entrance?t.doorRustic:t.doorWhite;n.box(x,i.head-.02,i.entrance?.06:.04,w,P[0],0,P[1],A);const C=[-y[1],y[0]];for(const M of[-1,1])n.sphere(.035,t.gold,E[0]+y[0]*(x-.08)+C[0]*.05*M,1,E[1]+y[1]*(x-.08)+C[1]*.05*M);const b=i.entrance?t.frameWood:t.doorWhite;o(.05,i.head,me+.02,b,r-0,0),o(.05,i.head,me+.02,b,s,0),o(i.w+.05,.05,me+.02,b,i.c,i.head-.02);return}const l=.05,u=i.head-i.sill;if(i.kind==="slider"){o(i.w,u-.02,.012,t.glass,i.c,i.sill);for(const c of[r+l/2,s-l/2,i.c])o(l,u,.08,t.frameDark,c,i.sill);o(i.w,l,.08,t.frameDark,i.c,i.head-l),o(i.w,l,.08,t.frameDark,i.c,i.sill),o(.03,.22,.05,t.frameDark,i.c+.06,i.sill+.9);return}if(o(i.w,u,.012,t.glass,i.c,i.sill),o(l,u,.09,t.frameWood,r+l/2,i.sill),o(l,u,.09,t.frameWood,s-l/2,i.sill),o(i.w,l,.09,t.frameWood,i.c,i.head-l),o(i.w,l,.09,t.frameWood,i.c,i.sill),i.w>.8&&o(.04,u,.1,t.frameWood,i.c,i.sill),o(i.w+.1,.03,.16,t.paint,i.c,i.sill-.03,a*.06),i.blind){const c=u*i.blind;o(i.w-.04,c,.012,t.blind,i.c,i.head-c,a*.05),o(i.w-.04,.06,.07,t.blind,i.c,i.head-.06,a*.06)}}const Se=Math.PI;function U0(){const n={futon:Ct.fabric(11060055),linen:Ct.fabric(15855593),gray:Ct.fabric(9278618),red:Ct.fabric(12855876),tableWood:Ct.wood(2827810)};return{black:ut(1907999,{rough:.5}),blackMatte:ut(2763308,{rough:.9}),woodLight:ut(13148266,{rough:.7}),woodOak:ut(12159573,{rough:.7}),woodDark:ut(7031339,{rough:.75}),white:ut(16053231,{rough:.8}),steel:ut(12172737,{rough:.3,metal:.5}),chrome:ut(14278112,{rough:.15,metal:.6}),cabinet:ut(16777215,{map:Ct.cabinet(),tile:1}),counter:ut(1710620,{rough:.25,metal:.2}),futon:ut(16777215,{map:n.futon,bump:n.futon,bumpScale:.8,tile:.5,rough:1}),linen:ut(16777215,{map:n.linen,bump:n.linen,bumpScale:.6,tile:.5,rough:1}),tableTop:ut(16777215,{map:n.tableWood,tile:1,rough:.35}),rug:ut(16777215,{map:Ct.rug(),keepUV:!0,rough:1}),grayDuvet:ut(16777215,{map:n.gray,bump:n.gray,bumpScale:1,tile:.5,rough:1}),redDuvet:ut(16777215,{map:n.red,bump:n.red,bumpScale:1,tile:.5,rough:1}),flower:ut(16107471,{rough:1}),dark:ut(3816769,{rough:.6}),bowl:ut(16316662,{rough:.15}),green:ut(4033109,{rough:1}),art:ut(5939290,{rough:.9}),red:ut(14037066,{rough:1}),stripeB:ut(2837644,{rough:1}),glassTop:ut(12179166,{opacity:.35,rough:.05,side:ye}),rattan:ut(9403486,{rough:.95}),concrete:ut(16777215,{map:Ct.concrete(),tile:3}),tinajaWood:ut(16777215,{map:Ct.wood(12159573),tile:1,rough:.8}),water:ut(5224399,{opacity:.8,rough:.05,metal:.1}),poolWall:ut(12894126,{rough:.7,metal:.05}),poolPost:ut(7828588,{rough:.6,metal:.15}),pink:ut(14260896,{rough:.8}),cream:ut(14076848,{rough:.9}),teal:ut(6262666,{rough:.8}),slateRoof:ut(5068129,{rough:.9}),yellow:ut(15975971,{rough:.7}),sailGreen:ut(3499341,{rough:1,side:ye}),sailBeige:ut(14207396,{rough:1,side:ye}),pergola:ut(16777215,{map:Ct.wood(9071176),tile:1.2,rough:.9}),clayPot:ut(16119282,{rough:.8}),leaf:ut(4614202,{rough:1})}}function fr(n,t,e,i,r){n.push(e,0,i,r),n.box(.46,.045,.44,t.black,0,.44,0),n.box(.44,.3,.04,t.black,0,.5,-.21,0,-.18);for(const[s,a]of[[-.19,-.17],[.19,-.17],[-.19,.17],[.19,.17]])n.cyl(.012,.012,.44,t.woodLight,s*1.15,0,a*1.15,6,a*.5,-s*.5);n.pop()}function Vl(n,t,{x:e,z:i,ry:r,wid:s=1.5,len:a=1.95,duvet:o,legMat:l,frameMat:u}){n.push(e,0,i,r),n.box(s,.22,a,u,0,.1,0),n.box(s-.04,.2,a-.04,t.linen,0,.3,0);const c=a*.72,f=a/2-c/2;n.box(s+.1,.1,c,o,0,.5,f);for(const h of[-1,1])n.box(.05,.32,c,o,h*(s/2+.05),.2,f);n.box(s+.1,.32,.05,o,0,.2,a/2+.03);for(const h of[-1,1])n.box(.5,.13,.36,t.linen,h*s*.24,.5,-a/2+.28);for(const h of[-1,1])for(const p of[-1,1])n.box(.1,.12,.1,l,h*(s/2-.08),0,p*(a/2-.08));n.pop()}function Kr(n,t,e,i,r,s){n.push(e,i,r,s),n.box(.3,.03,.2,t.woodLight,0,0,.1),n.cyl(.05,.06,.02,t.white,0,.03,.1,10),n.cyl(.008,.008,.28,t.white,0,.05,.1,6),n.sphere(.07,t.white,0,.36,.13,1,.7,1,10),n.pop()}function N0(n,t,e){n.plane(2.1,1.4,e.rug,-1.3,.008,1.5,Math.PI/2),n.push(-2.5,0,2.6,0),n.box(1.9,.14,.86,e.dark,0,.12,0),n.box(1.9,.2,.84,e.futon,0,.26,0),n.box(1.9,.5,.2,e.futon,0,.34,.36,0,.22);for(const i of[-1,1])n.box(.12,.2,.86,e.futon,i*.98,.38,0);n.pop(),n.box(.62,.48,.03,e.black,-2.45,1.35,3.03),n.box(.54,.4,.01,e.white,-2.45,1.39,3.015),n.cyl(.13,.13,.01,e.art,-2.45,1.44,3.01,16,Se/2,0),n.box(1,.58,.05,e.black,-2.9,1.2,-.03),n.box(.7,.03,.4,e.woodOak,-2.95,.7,.18);for(const[i,r]of[[-.3,-.17],[.3,-.17],[-.3,.17],[.3,.17]])n.box(.025,.7,.025,e.black,-2.95+i,0,.18+r);n.cyl(.012,.012,1.6,e.black,-3.4,0,.25,6),n.cyl(.13,.19,.22,e.white,-3.4,1.55,.25,14),n.cyl(.16,.16,.02,e.black,-3.4,0,.25,12),n.cyl(.14,.14,.03,e.white,-3.1,.73,.2,10),n.cyl(.02,.02,.35,e.white,-3.1,.73,.2,6),n.cyl(.16,.16,.03,e.white,-3.1,1.08,.2,16,Se/2,0),n.box(1.2,.04,.8,e.tableTop,0,.72,1.75);for(const[i,r]of[[-.5,-.32],[.5,-.32],[-.5,.32],[.5,.32]])n.cyl(.02,.02,.72,e.woodLight,i,0,1.75+r,8,r*.2,-i*.15);fr(n,e,-.28,1.12,0),fr(n,e,.28,1.12,0),fr(n,e,-.28,2.34,Se),fr(n,e,.28,2.34,Se),n.box(2.25,.8,.54,e.cabinet,-.175,.06,2.77),n.box(2.3,.04,.62,e.counter,-.175,.86,2.79);for(let i=-1.1;i<.95;i+=.5)n.box(.012,.74,.01,e.black,i,.1,2.495);for(let i=-1.3;i<.9;i+=.5)n.box(.22,.02,.02,e.black,i+.25,.78,2.49);n.box(.6,.012,.4,e.steel,-.35,.9,2.8),n.cyl(.012,.012,.28,e.chrome,-.35,.9,3,8),n.box(.012,.012,.16,e.chrome,-.35,1.17,2.93),n.cyl(.07,.09,.2,e.blackMatte,.5,.9,2.85,10),n.box(.2,.3,.22,e.black,.78,.9,2.88),n.cyl(.055,.055,.2,e.white,.25,.9,2.9,10),n.cyl(.06,.06,.15,e.black,-.9,.9,2.95,8),n.box(.3,.42,.3,e.black,-1.15,0,2.7),n.box(.54,2.15,.54,e.cabinet,1.22,.04,2.77),n.box(.06,.24,.4,e.white,.93,1.5,2.77),n.box(.05,.42,.45,e.black,.95,.95,2.77),n.box(.02,.28,.32,e.red,.92,.85,2.77),n.box(.7,1.85,.65,e.steel,1.13,.03,1.68),n.box(.01,.012,.65,e.dark,.77,.64,1.68),n.box(.02,.5,.02,e.dark,.765,.85,1.42),n.box(.02,.4,.02,e.dark,.765,.1,1.42),n.box(.01,.13,.11,e.dark,.77,1.3,1.7),n.box(.01,.22,.17,ut(15266016),.77,1.5,1.85),n.box(.44,.5,.8,e.dark,3.27,.3,.6),n.box(.44,.03,.8,e.woodOak,3.27,.8,.6);for(const[i,r]of[[-.16,-.36],[.16,-.36],[-.16,.36],[.16,.36]])n.box(.03,.3,.03,e.woodLight,3.27+i,0,.6+r);n.cyl(.19,.16,.13,e.bowl,3.25,.83,.6,20),n.cyl(.012,.012,.28,e.black,3.43,.83,.6,8),n.box(.06,.012,.012,e.black,3.4,1.09,.6),n.box(.34,.4,.38,e.bowl,3.2,.03,1.55),n.box(.2,.36,.38,e.bowl,3.4,.45,1.55),n.box(.04,.28,.2,e.bowl,3.42,.15,1.55),n.box(.36,.03,.4,e.bowl,3.18,.43,1.55),n.box(.02,2.15,1,t.floorBano,3.485,0,2.55),n.box(.99,2.15,.02,t.floorBano,3,0,3.03),n.box(1,2,.012,t.glass,3,0,2.05),n.box(.012,2,.5,t.glass,2.5,0,2.3),n.cyl(.14,.14,.02,e.chrome,3.2,2.05,2.55,16),n.box(.3,.02,.02,e.chrome,3.35,2.06,2.55),n.cyl(.012,.012,1.1,e.chrome,3.46,.95,2.3,6),n.box(.03,.03,.6,e.chrome,3.46,1,2.7),n.box(.1,.06,.06,e.black,3.44,1.1,2.4),Vl(n,e,{x:-2.3,z:-2.05,ry:0,duvet:e.grayDuvet,legMat:e.dark,frameMat:e.woodLight}),Kr(n,e,-3.3,.5,-3.04,0),Kr(n,e,-1.3,.5,-3.04,0),n.push(-.55,0,-2.78,0),n.box(.6,1.95,.5,e.white,0,.02,0),n.box(.62,.04,.52,e.woodOak,0,1.95,0);for(const i of[-1,1])n.box(.025,1.93,.02,e.woodOak,i*.2875,.03,.255);n.box(.006,1.88,.006,e.dark,0,.06,.256);for(const i of[-1,1])n.box(.016,.32,.022,e.woodDark,i*.04,.9,.265);n.pop(),n.push(-.2,0,-.4,.1),n.box(.42,.42,.34,e.black,0,.02,0);for(let i=0;i<5;i++)n.box(.01,.28,.005,e.dark,-.12+i*.06,.09,-.172);n.box(.03,.02,.25,e.dark,.1,.44,0),n.pop(),n.cyl(.012,.012,1.7,e.black,-3.3,0,-.6,6);for(let i=0;i<4;i++)n.box(.22,.015,.015,e.black,-3.3+Math.cos(i*1.6)*.1,1.5+i%2*.1,-.6+Math.sin(i*1.6)*.1,i*1.6);for(let i=0;i<3;i++)n.box(.25,.015,.015,e.black,-3.3+Math.cos(i*2.1)*.12,.02,-.6+Math.sin(i*2.1)*.12,i*2.1,0,.2);fr(n,e,-.1,-.85,-Se/2),Vl(n,e,{x:2.32,z:-2.05,ry:0,wid:1.45,len:1.9,duvet:e.redDuvet,legMat:e.woodOak,frameMat:e.dark});for(let i=0;i<9;i++)n.cyl(.075,.075,.006,e.flower,2.32+mt(-.6,.6),.6,-2.05+mt(-.2,.7),10);Kr(n,e,1.3,.5,-3.04,0),Kr(n,e,3.3,.5,-3.04,0),n.box(.5,2,.55,e.woodDark,.55,.02,-2.22),n.box(.02,1.9,.02,e.black,.8,.05,-2.08),n.box(.55,.05,.3,e.stripeB,.55,2.02,-2.22),n.box(.55,.03,.3,e.white,.55,2.07,-2.22),n.box(.3,.62,.12,e.black,.46,.02,-2.9),n.box(.2,.42,.02,ut(9409175,{rough:.4,metal:.4}),.46,.14,-2.83)}function Li(n,t,e,i,r){n.push(e,0,i,r),n.box(.46,.05,.46,t.rattan,0,.44,0),n.box(.46,.4,.04,t.rattan,0,.5,-.22,0,-.12);for(const[s,a]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])n.box(.025,.44,.025,t.black,s,0,a);n.box(.03,.2,.44,t.black,-.22,.6,0),n.box(.03,.2,.44,t.black,.22,.6,0),n.pop()}function O0(n,t,e,i){const{TERRAZA:r,TINAJA:s}=i;n.box(r.x1-r.x0,.14,r.z1-r.z0,e.concrete,(r.x0+r.x1)/2,-.16,(r.z0+r.z1)/2);const a=-6.6,o=2.2;n.box(1.6,.03,.9,e.glassTop,a,.72,o),n.box(1.6,.03,.04,e.black,a,.7,o-.43),n.box(1.6,.03,.04,e.black,a,.7,o+.43);for(const[h,p]of[[-.75,-.4],[.75,-.4],[-.75,.4],[.75,.4]])n.box(.035,.7,.035,e.black,a+h,0,o+p);for(const h of[-.4,.4])Li(n,e,a+h,o-.66,0),Li(n,e,a+h,o+.66,Se);Li(n,e,a-1.05,o,Se/2),Li(n,e,a+1.05,o,-Se/2),n.push(-7.9,0,-1.6,.3),n.cyl(.26,.26,.85,e.black,0,.78,0,16,0,Se/2),n.box(.9,.05,.45,e.black,0,.72,0);for(const[h,p]of[[-.35,-.16],[.35,-.16],[-.35,.16],[.35,.16]])n.box(.03,.72,.03,e.black,h,0,p);n.cyl(.13,.13,.05,e.black,.43,.26,-.22,12,Se/2,0),n.cyl(.05,.05,.28,e.black,-.28,1.05,0,8),n.pop(),n.box(.85,.05,.55,e.woodOak,-8.4,.5,-2.5);for(const[h,p]of[[-.35,-.22],[.35,-.22],[-.35,.22],[.35,.22]])n.box(.04,.5,.04,e.steel,-8.4+h,0,-2.5+p);for(const h of[-.3,.4]){n.cyl(.19,.19,.04,e.rattan,-8.8,.45,h,10);for(const p of[0,2.1,4.2])n.cyl(.012,.012,.45,e.steel,-8.8+Math.cos(p)*.14,0,h+Math.sin(p)*.14,6)}Li(n,e,-9,-1.7,Se/2),Li(n,e,-8.3,1,Se*.8),n.box(s.w,1,s.d*.62,e.tinajaWood,s.x,0,s.z),n.box(s.w-.12,.02,s.d*.62-.12,e.water,s.x,.9,s.z),n.box(s.w+.12,.06,s.d*.62+.12,e.woodDark,s.x,1,s.z);for(let h=0;h<3;h++)n.box(1,.22,.28,e.woodOak,s.x-.3,h*.31,s.z+.7+(2-h)*.28);n.cyl(.07,.07,1.4,e.black,s.x+.9,.8,s.z-.3,8);const c=r.x0+.5;for(const h of[-3.4,-.1,3.2])n.box(.14,2.75,.14,e.pergola,c,0,h);n.box(.12,.16,7.2,e.pergola,c,2.62,-.1),n.box(.1,.14,7.2,e.pergola,-3.75,2.55,-.1);for(const h of[-3.4,-.1,3.2])n.box((c+3.75>0,5.8),.1,.1,e.pergola,(c+-3.75)/2,2.58,h);const f=(h,p,g,_,m,d,y)=>{const E=new Qe(g-p,m-_,8,8);E.rotateX(-Se/2);const x=E.attributes.position;for(let P=0;P<x.count;P++){const A=x.getX(P)/(g-p)+.5,w=x.getZ(P)/(m-_)+.5;x.setY(P,d+(y-d)*A-Math.sin(A*Se)*Math.sin(w*Se)*.18)}E.computeVertexNormals(),n.geo(E,h,(p+g)/2,0,(_+m)/2)};f(e.sailGreen,c-.1,-3.7,-3.6,-1.2,2.72,2.5),f(e.sailBeige,c+.2,-3.7,-1.5,1.6,2.68,2.5),f(e.sailGreen,c-.1,-4.4,1.3,3.5,2.7,2.55);for(let h=-3.9;h<=3.61;h+=1.25)n.box(.1,1,.1,e.pergola,r.x0-.05,0,h);n.box(.06,.08,7.6,e.pergola,r.x0-.05,.95,-.15),n.box(.06,.08,7.6,e.pergola,r.x0-.05,.5,-.15)}function F0(n,t,e,i){const{PISCINA:r,CESPED:s}=i;n.box(s.x1-s.x0,.12,.12,e.pergola,(s.x0+s.x1)/2,-.1,s.z0-.06);const{x:a,z:o,r:l,h:u}=r;n.geo(new Zi(l,l,u,40,1,!0),e.poolWall,a,u/2,o),n.geo(new Zi(l-.02,l-.02,u,40,1,!0),ut(9341566,{side:be}),a,u/2,o),n.geo(new fo(l,.05,6,40),e.poolPost,a,u,o,Se/2),n.cyl(l-.04,l-.04,.02,e.water,a,u*.84,o,40);for(let h=0;h<16;h++){const p=h/16*Se*2;n.box(.06,u+.25,.06,e.poolPost,a+Math.cos(p)*(l+.03),0,o+Math.sin(p)*(l+.03),-p)}const c=a+Math.cos(-.9)*(l+.25),f=o+Math.sin(-.9)*(l+.25);n.box(.04,1.6,.04,e.chrome,c-.25,0,f),n.box(.04,1.6,.04,e.chrome,c+.25,0,f);for(let h=0;h<4;h++)n.box(.5,.03,.2,e.chrome,c,.3+h*.3,f);n.box(.34,.6,.34,e.pink,a+Math.cos(-.2)*(l+.5),0,o+Math.sin(-.2)*(l+.5)),n.push(-11,0,7.3,.2),n.box(1.1,1.05,1.2,e.cream,0,0,0),n.box(1.2,.05,1.3,e.slateRoof,0,1.05,0),n.box(1,.05,1.1,e.slateRoof,0,1.12,0,0,0,.5*0),n.box(.3,.4,.02,e.teal,.25,.5,.61),n.box(.3,.55,.02,e.teal,-.25,0,.61),n.pop();for(const[h,p]of[[-4.9,7.3],[-4.9,8.2],[-4.9,9.1],[-4.7,10.2]])n.cyl(.22,.16,.34,e.clayPot,h,0,p,12),n.sphere(.2,e.leaf,h,.52,p,1,.75,1,8)}const tn=Math.PI,Jr=(n,t)=>{const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function cn(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,a=r*r*(3-2*r),o=s*s*(3-2*s),l=Jr(e,i),u=Jr(e+1,i),c=Jr(e,i+1),f=Jr(e+1,i+1);return l+(u-l)*a+(c-l)*o+(l-u-c+f)*a*o}const Hi=(n,t)=>cn(n,t)*.5+cn(n*2.1,t*2.1)*.25+cn(n*4.3,t*4.3)*.125+cn(n*8.7,t*8.7)*.0625,de=(n,t,e)=>io.smoothstep(n,t,e);function xn(n,t){const e=Math.hypot(n,t),i=de(e,18,70),r=Hi(n*.006+3.1,t*.006+1.7),s=de(n,45,340)*(95+70*r),a=de(-t,70,380)*(85+70*r),o=de(t,220,470)*(70+60*r),l=-.05*Math.max(0,-n-30)*(1-de(-n,240,330))-.05*210*de(-n,240,330),u=de(-n,330,520)*(30+35*Hi(n*.01,t*.01)),c=(Hi(n*.02+8,t*.02-3)-.5)*9*de(e,40,120);return-.15+i*(s+a+o+l+u+c)}const z0=(n,t,e,i,r,s)=>{const a=r-e,o=s-i,l=Math.max(0,Math.min(1,((n-e)*a+(t-i)*o)/(a*a+o*o||1)));return Math.hypot(n-(e+a*l),t-(i+o*l))},Bc=(n,t,e)=>{let i=1e9;for(let r=0;r<n.length-1;r++)i=Math.min(i,z0(t,e,n[r][0],n[r][1],n[r+1][0],n[r+1][1]));return i},Mo=(n,t)=>Bc(xo,n,t),kc=(n,t)=>Bc(_o,n,t);function B0(n){const t=new Mt(11970168),e=new Mt(11115118),i=new Mt(8224076),r=new Mt(3821620),s=new Mt(10127461),a=new Mt(9076588),o=new Mt,l=(A,w,C)=>{const b=Hi(A*.012+20,w*.012-7),M=Math.max(de(A,30,130),de(-w,40,150))*(.55+.6*b),R=de(w,200,380);o.copy(e).lerp(t,de(b,.4,.6)).lerp(i,de(cn(A*.02,w*.02),.5,.8)*.5),o.lerp(r,io.clamp(M,0,.92)).lerp(s,R*.7).lerp(a,de(cn(A*.03+4,w*.03),.66,.85)*.5);const F=.86+cn(A*.15,w*.15)*.28;return[o.r*F,o.g*F,o.b*F]},u=new Qe(1100,1100,130,130);u.rotateX(-tn/2);const c=u.attributes.position,f=new Float32Array(c.count*3);for(let A=0;A<c.count;A++){const w=c.getX(A),C=c.getZ(A),b=Math.hypot(w,C),M=xn(w,C)-.9*(1-de(b,88,110));c.setY(A,M);const R=l(w,C);f[A*3]=R[0],f[A*3+1]=R[1],f[A*3+2]=R[2]}u.setAttribute("color",new Ce(f,3)),u.computeVertexNormals();const h=new Wt(u,new Fe({vertexColors:!0,roughness:1}));h.receiveShadow=!0,n.add(h);const p=Ct.dirt();p.repeat.set(70,70);const g=new Qe(200,200,100,100);g.rotateX(-tn/2);const _=g.attributes.position,m=new Float32Array(_.count*3);for(let A=0;A<_.count;A++){const w=_.getX(A),C=_.getZ(A),b=Math.hypot(w,C),M=de(b,75,100),[R,F,B]=l(w,C),W=de(Hi(w*.09,C*.09),.5,.72)*de(b,14,30),Y=new Mt(14208441).lerp(new Mt(11115628),W*.85).lerp(new Mt(R*1.35,F*1.35,B*1.35),M),V=.84+cn(w*.4,C*.4)*.28;m[A*3]=Y.r*V,m[A*3+1]=Y.g*V,m[A*3+2]=Y.b*V,_.setY(A,xn(w,C)-.02-.5*de(b,92,100))}g.setAttribute("color",new Ce(m,3)),g.computeVertexNormals();const d=new Wt(g,new Fe({map:p,vertexColors:!0,roughness:1}));d.receiveShadow=!0,n.add(d);const y=new li,E=xn(-235,-150)+.5,x=new Wt(new Qe(85,42).rotateX(-tn/2),new Fe({color:15000538,roughness:.9}));x.position.set(-205,E,-150);const P=new Wt(new Qe(60,42).rotateX(-tn/2),new Fe({color:7314054,roughness:.2,metalness:.1}));P.position.set(-278,E,-150),y.add(x,P),y.rotation.y=.3,n.add(y)}function k0(n){const t=ut(16777215,{map:Ct.gravel(),tile:2,rough:1}),e=ut(16777215,{map:Ct.turf(),tile:2,rough:1}),i=ut(14208441,{map:Ct.dirt(),tile:3,rough:1});for(const s of go)n.box(s.x1-s.x0,.03,s.z1-s.z0,t,(s.x0+s.x1)/2,-.15,(s.z0+s.z1)/2);n.box(hn.x1-hn.x0,.05,hn.z1-hn.z0,e,(hn.x0+hn.x1)/2,-.15,(hn.z0+hn.z1)/2);const r=(s,a,o)=>{for(let l=0;l<s.length-1;l++){const[u,c]=s[l],[f,h]=s[l+1],p=Math.hypot(f-u,h-c),g=-Math.atan2(h-c,f-u),_=(xn(u,c)+xn(f,h))/2+o;n.box(p+a*.8,.05,a,i,(u+f)/2,_,(c+h)/2,g)}};r(_o,3.6,-.14),r(xo,gs,-.1)}function H0(n,t=42){const e=new ki(new _n(1,1,1),new Fe({color:16777215,roughness:.9}),t+1),i=new ki(new _n(1,1,1),new Fe({color:16777215,roughness:.8}),t+1),r=new ki(new _n(1,1,1),new Fe({color:5940672,roughness:.2}),12),s=new Nn,a=new D,o=new D,l=new jt,u=[15262938,14275264,15855592,13616301,12101005],c=[9080208,7101005,10506298,8028035,5988195];let f=0,h=0,p=0;for(;f<t&&p++<4e3;){const _=-50-Et()*230,m=-150+Et()*330;if(Math.hypot(_,m)<55||Mo(_,m)<8||_>-90&&Math.abs(m)<40)continue;const d=mt(6,13),y=mt(5,9),E=mt(2.6,3.4),x=mt(-.4,.4),P=xn(_,m);s.setFromEuler(new Pe(0,x,0)),o.set(_,P+E/2,m),a.set(d,E,y),l.compose(o,s,a),e.setMatrixAt(f,l),e.setColorAt(f,new Mt(u[Et()*u.length|0])),o.set(_,P+E+.2,m),a.set(d+.8,.4,y+.8),l.compose(o,s,a),i.setMatrixAt(f,l),i.setColorAt(f,new Mt(c[Et()*c.length|0])),h<12&&Et()<.3&&(o.set(_+d*.9,P+.05,m+y*.6),a.set(mt(3,5),.1,mt(6,9)),l.compose(o,s,a),r.setMatrixAt(h++,l)),f++}const g=xn(-24,42);s.setFromEuler(new Pe(0,.5,0)),o.set(-24,g+1.6,42),a.set(24,3.2,6),l.compose(o,s,a),e.setMatrixAt(f,l),e.setColorAt(f,new Mt(10987946)),o.set(-24,g+3.4,42),a.set(25,.4,7),l.compose(o,s,a),i.setMatrixAt(f,l),i.setColorAt(f,new Mt(10132896)),f++,e.count=i.count=f,r.count=h,e.castShadow=i.castShadow=!0,n.add(e,i,r)}function G0(n){const t=Ct.redEarth();t.repeat.set(4,4);const e=new Fe({map:t,roughness:1,vertexColors:!0,side:ye}),i=(r,s,a,o,l,u,c)=>{const f=new Qe(a,o,40,30);f.rotateX(-tn/2);const h=f.attributes.position,p=new Float32Array(h.count*3),g=new Mt(13813424),_=new Mt(13081222),m=new Mt;for(let y=0;y<h.count;y++){const E=h.getX(y)/a+.5,x=h.getZ(y)/o+.5;m.copy(g).lerp(_,io.smoothstep(x+(cn(E*12+c,x*5)-.5)*.4,.2,.85)),p[y*3]=m.r,p[y*3+1]=m.g,p[y*3+2]=m.b;const P=Math.min(1,E*7)*Math.min(1,(1-E)*7),A=.78+.22*cn(E*9+c,x*2.5),w=.5+.5*cn(E*20+c,x*6),C=l*Math.pow(x,1.15)*P*A*(.82+.18*w);h.setY(y,C)}f.setAttribute("color",new Ce(p,3)),f.computeVertexNormals();const d=new Wt(f,e);d.position.set(r,-.15,s),d.rotation.y=u,d.receiveShadow=!0,d.castShadow=!0,n.add(d)};i(-8,-13,26,12,3,0,1.3),i(10.5,-2,12,11,2.8,-tn/2,4.7)}function Hc(n=3){const t=[];for(let e=0;e<n;e++){const i=new Qe(1,1);i.translate(0,.5,0),i.rotateY(e*tn/n),t.push(i)}return zc(t)}function V0(n,t=500){const e=Hc(3),i={euc:{tex:Ct.treeEucalyptus(),h:[15,24],aspect:.62},pine:{tex:Ct.treePine(),h:[11,19],aspect:.5},bush:{tex:Ct.treeBush(),h:[3.5,6.5],aspect:1}},r={euc:[],pine:[],bush:[]},s=new Nn,a=new D,o=new D,l=new jt,u=(h,p,g,_=1)=>{const m=i[h],d=xn(p,g)-.2,y=mt(m.h[0],m.h[1])*_,E=y*m.aspect*mt(.9,1.15);s.setFromEuler(new Pe(0,Et()*tn,0)),o.set(p,d,g),a.set(E,y,E),l.compose(o,s,a);const x=mt(.82,1.08);r[h].push({m:l.clone(),c:new Mt(x,x*mt(.96,1.04),x*mt(.9,1))})};for(const[h,p,g,_]of[["euc",11.5,-2,1],["euc",9.5,6,.9],["euc",14,-9,1.1],["pine",12,3,.9],["euc",-14.5,-3,.8],["bush",-15,2,1],["euc",-16,-8,.9],["bush",-13,-6.5,1],["pine",-3,-10,.8],["euc",6,-10,1],["bush",-12,20,1],["euc",4,22,.9],["pine",14,16,.9],["bush",3,15,1],["euc",-18,12,1]])u(h,p,g,_);let c=0,f=r.euc.length+r.pine.length+r.bush.length;for(;f<t&&c++<9e4;){const h=Et()*tn*2,p=11+Math.pow(Et(),1.4)*330,g=Math.cos(h)*p,_=Math.sin(h)*p+6;if(g>-17&&g<9&&_>-11&&_<21||Mo(g,_)<gs/2+2.5||kc(g,_)<4.5)continue;const m=de(g,22,90),d=de(-_,25,95),y=Math.max(m,d*.85),E=Hi(g*.012+20,_*.012-7),x=(.16+.84*y)*(.55+.9*E)*(_>240?.35:1)*(g<-320?.5:1);if(Et()>x)continue;let P;const A=Et();y>.5?P=A<.5?"euc":A<.85?"pine":"bush":P=A<.35?"euc":A<.42?"pine":"bush",u(P,g,_,P==="bush"?mt(.9,1.3):mt(.85,1.2)),f++}for(const[h,p]of Object.entries(r)){if(!p.length)continue;const g=new Fe({map:i[h].tex,alphaTest:.45,side:ye,roughness:1,transparent:!1}),_=new ki(e,g,p.length);p.forEach((m,d)=>{_.setMatrixAt(d,m.m),_.setColorAt(d,m.c)}),_.castShadow=!0,_.receiveShadow=!1,n.add(_)}}function W0(n,t=900,e=70){const i=(p,g,_,m=0)=>p>_.x0-m&&p<_.x1+m&&g>_.z0-m&&g<_.z1+m,r=(p,g)=>i(p,g,{x0:Ni.x0,x1:Ni.x1,z0:Ni.z0,z1:Ni.z1},1.2)||i(p,g,Oi,.4)||i(p,g,hn,.3)||go.some(_=>i(p,g,_,.2))||i(p,g,{x0:ci.x-1.4,x1:ci.x+1.4,z0:ci.z-1.4,z1:ci.z+2.6})||Math.hypot(p-Ln.x,g-Ln.z)<Ln.r+1||kc(p,g)<2.4||Mo(p,g)<gs/2+.5,s=new Nn,a=new D,o=new D,l=new jt,u=new ki(Hc(2),new Fe({map:Ct.tuft(),alphaTest:.4,side:ye,roughness:1}),t);let c=0,f=0;for(;c<t&&f++<8e3;){const p=Et()*tn*2,g=5+Math.pow(Et(),.8)*55,_=Math.cos(p)*g-4,m=Math.sin(p)*g+6;if(r(_,m))continue;const d=mt(.35,.85);s.setFromEuler(new Pe(0,Et()*tn,0)),o.set(_,xn(_,m)+.01,m),a.set(d,d*mt(.7,1.2),d),l.compose(o,s,a),u.setMatrixAt(c,l);const y=mt(.8,1.1);u.setColorAt(c,new Mt(y,y,y*.92)),c++}u.count=c,n.add(u);const h=new ki(new uo(1,1),new Fe({map:Ct.rockTex(),roughness:1,flatShading:!0}),e);for(c=0,f=0;c<e&&f++<4e3;){const p=Et()*tn*2,g=6+Et()*50,_=Math.cos(p)*g-4,m=Math.sin(p)*g+6;if(r(_,m))continue;const d=mt(.15,.6);s.setFromEuler(new Pe(Et()*3,Et()*3,Et()*3)),o.set(_,xn(_,m)+d*.2,m),a.set(d*mt(1,1.6),d*mt(.5,.9),d*mt(.9,1.4)),l.compose(o,s,a),h.setMatrixAt(c,l);const y=mt(.8,1.15);h.setColorAt(c,new Mt(y,y*.98,y*.95)),c++}h.count=c,h.castShadow=!0,h.receiveShadow=!0,n.add(h)}function X0(){const n={top:{value:new Mt},horizon:{value:new Mt},sunDir:{value:new D(0,1,0)},sunColor:{value:new Mt},cloudColor:{value:new Mt(16777215)},cloudAmount:{value:.8}},t=new Wt(new ms(900,32,16),new Un({side:be,depthWrite:!1,fog:!1,uniforms:n,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunColor; uniform vec3 cloudColor; uniform float cloudAmount;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
          return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y); }
        float fbm(vec2 p){ float v = 0.0, a = 0.5; for(int i = 0; i < 5; i++){ v += a*noise(p); p *= 2.03; a *= 0.5; } return v; }
        void main(){
          float h = clamp(vP.y, 0.0, 1.0);
          vec3 c = mix(horizon, top, pow(h, 0.5));
          vec3 dir = normalize(vP);
          float s = max(dot(dir, normalize(sunDir)), 0.0);
          c += sunColor * (pow(s, 1200.0) * 4.0 + pow(s, 10.0) * 0.30);
          vec2 uv = dir.xz / (dir.y + 0.22);
          float cl = smoothstep(0.50, 0.82, fbm(uv * 0.9 + vec2(4.0, 2.0)));
          cl *= smoothstep(0.015, 0.22, dir.y) * cloudAmount;
          vec3 cc = cloudColor * (0.82 + 0.25 * fbm(uv * 2.4));
          cc += sunColor * pow(s, 4.0) * 0.35;
          c = mix(c, cc, clamp(cl, 0.0, 0.92));
          gl_FragColor = vec4(c, 1.0);
        }`}));return t.renderOrder=-10,{mesh:t,uniforms:n}}class q0 extends Cc{constructor(){super();const t=new _n;t.deleteAttribute("uv");const e=new Fe({side:be}),i=new Fe,r=new Lc(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Wt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Wt(t,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Wt(t,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Wt(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const u=new Wt(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);const c=new Wt(t,i);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const f=new Wt(t,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const h=new Wt(t,Di(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const p=new Wt(t,Di(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new Wt(t,Di(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Wt(t,Di(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Wt(t,Di(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const d=new Wt(t,Di(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Di(n){const t=new br;return t.color.setScalar(n),t}const dr=.28,Wl=Math.PI/180,ra=(n,t)=>(t-n+Math.PI*3)%(Math.PI*2)-Math.PI;class Y0{constructor(t,e,i){this.cam=t,this.dom=e,this.cam.rotation.order="YXZ",this.rects=[...i,...Uc],this.circles=Nc,this.x=Ve.llegada[0],this.z=Ve.llegada[1],this.yaw=20*Wl,this.pitch=0,this.stick={x:0,y:0},this.keys=new Set,this.path=null,this.finalYaw=null,this.onArrive=null,this.onTap=null,this.onUserMove=null,this.walking=!1,this.bob=0,this.graph=new Map;for(const[r,s]of Oc)this.graph.has(r)||this.graph.set(r,[]),this.graph.has(s)||this.graph.set(s,[]),this.graph.get(r).push(s),this.graph.get(s).push(r);this._bind()}blocked(t,e){for(const i of this.rects)if(t>i.x0-dr&&t<i.x1+dr&&e>i.z0-dr&&e<i.z1+dr)return!0;for(const i of this.circles)if(Math.hypot(t-i.x,e-i.z)<i.r+dr)return!0;return!1}clear(t,e,i,r){const s=Math.ceil(Math.hypot(i-t,r-e)/.12);for(let a=0;a<=s;a++){const o=a/s;if(this.blocked(t+(i-t)*o,e+(r-e)*o))return!1}return!0}tryMove(t,e){if(!this.blocked(this.x+t,this.z+e))return this.x+=t,this.z+=e,!0;let i=!1;return this.blocked(this.x+t,this.z)||(this.x+=t,i=!0),this.blocked(this.x,this.z+e)||(this.z+=e,i=!0),i}route(t){let e=null,i=1e9;for(const[l,[u,c]]of Object.entries(Ve)){const f=Math.hypot(u-this.x,c-this.z);f<i&&this.clear(this.x,this.z,u,c)&&(i=f,e=l)}if(!e)for(const[l,[u,c]]of Object.entries(Ve)){const f=Math.hypot(u-this.x,c-this.z);f<i&&(i=f,e=l)}const r={[e]:0},s={},a=new Set(Object.keys(Ve));for(;a.size;){let l=null;for(const u of a)r[u]!==void 0&&(l===null||r[u]<r[l])&&(l=u);if(l===null)break;a.delete(l);for(const u of this.graph.get(l)||[]){const c=Math.hypot(Ve[l][0]-Ve[u][0],Ve[l][1]-Ve[u][1]);(r[u]===void 0||r[l]+c<r[u])&&(r[u]=r[l]+c,s[u]=l)}}const o=[];for(let l=t;l&&(o.unshift(l),l!==e);l=s[l]);return o.map(l=>Ve[l])}goTo(t,{instant:e=!1}={}){const i=_s.find(a=>a.id===t);if(!i)return;if(this.finalYaw=i.yaw*Wl,e){[this.x,this.z]=Ve[i.node],this.path=null,this.yaw=this.finalYaw,this.pitch=0,this._apply(0);return}const r=this.route(i.node);this.path=r.map(([a,o])=>({x:a,z:o})),this.path.unshift({x:this.x,z:this.z}),this.pathI=1;let s=0;for(let a=1;a<this.path.length;a++)s+=Math.hypot(this.path[a].x-this.path[a-1].x,this.path[a].z-this.path[a-1].z);this.speed=Math.min(10,Math.max(2.6,s/5)),this.pendingArrive=t}cancelPath(){this.path=null,this.pendingArrive=null,this.finalYaw=null}_bind(){const t=this.dom;let e=null,i=null;t.addEventListener("pointerdown",s=>{e||(e={id:s.pointerId,x:s.clientX,y:s.clientY,t:performance.now(),moved:0},i={x:s.clientX,y:s.clientY},t.setPointerCapture(s.pointerId))}),t.addEventListener("pointermove",s=>{if(!e||s.pointerId!==e.id)return;const a=s.clientX-i.x,o=s.clientY-i.y;i={x:s.clientX,y:s.clientY},e.moved+=Math.abs(a)+Math.abs(o);const l=s.pointerType==="mouse"?.0042:.0055;this.yaw-=a*l,this.pitch=Math.max(-1.2,Math.min(1.2,this.pitch+o*l)),this.path&&(this.finalYaw=null)});const r=s=>{!e||s.pointerId!==e.id||(e.moved<10&&performance.now()-e.t<400&&this.onTap&&this.onTap(s.clientX,s.clientY),e=null)};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",()=>{e=null}),window.addEventListener("keydown",s=>{s.target&&/INPUT|SELECT|TEXTAREA/.test(s.target.tagName)||(this.keys.add(s.key.toLowerCase()),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(s.key.toLowerCase())&&s.preventDefault())}),window.addEventListener("keyup",s=>this.keys.delete(s.key.toLowerCase())),window.addEventListener("blur",()=>this.keys.clear())}update(t){t=Math.min(t,.05);let e=-this.stick.y,i=this.stick.x;const r=this.keys;(r.has("w")||r.has("arrowup"))&&(e+=1),(r.has("s")||r.has("arrowdown"))&&(e-=1),r.has("d")&&(i+=1),r.has("a")&&(i-=1),(r.has("arrowleft")||r.has("q"))&&(this.yaw-=1.6*t),(r.has("arrowright")||r.has("e"))&&(this.yaw+=1.6*t);const s=Math.min(1,Math.hypot(e,i));if(this.walking=!1,s>.08){this.path&&(this.cancelPath(),this.onUserMove&&this.onUserMove());const a=(r.has("shift")?3.2:1.8)*s,o=Math.sin(this.yaw),l=Math.cos(this.yaw),u=(o*e+l*i)/Math.max(1,Math.hypot(e,i)),c=(-l*e+o*i)/Math.max(1,Math.hypot(e,i));this.tryMove(u*a*t,c*a*t),this.walking=!0}else if(this.path){const a=this.path[this.pathI],o=a.x-this.x,l=a.z-this.z,u=Math.hypot(o,l),c=(this.speed||2.6)*t;if(u<=c)this.x=a.x,this.z=a.z,this.pathI++,this.pathI>=this.path.length&&(this.path=null,this.onArrive&&this.onArrive(this.pendingArrive));else if(this.x+=o/u*c,this.z+=l/u*c,this.finalYaw!==null){const f=Math.atan2(o,-l);this.yaw+=ra(this.yaw,f)*Math.min(1,t*3)}this.walking=!0}else if(this.finalYaw!==null){const a=ra(this.yaw,this.finalYaw);this.yaw+=a*Math.min(1,t*4),Math.abs(a)<.01&&(this.finalYaw=null),this.pitch*=1-Math.min(1,t*4)}if(this.path&&this.finalYaw!==null&&this.pathI>=this.path.length-1){const a=ra(this.yaw,this.finalYaw);this.yaw+=a*Math.min(1,t*2.5)}this.bob=this.walking?this.bob+t*9:this.bob*.9,this._apply(this.walking?Math.sin(this.bob)*.025:0)}_apply(t){this.cam.position.set(this.x,(this.eyeY??Dc)+t,this.z),this.cam.rotation.set(this.pitch,-this.yaw,0,"YXZ")}}const Gc={es:"Español",en:"English",pt:"Português"},j0={title:"Refugio Casablanca",tagline:"Recorre la cabaña como si ya estuvieras ahí",welcomeSub:"Cabaña con tinaja y piscina en el valle de Casablanca, Chile",start:"Comenzar recorrido",chooseLang:"Idioma",approx:"Recorrido 3D aproximado, hecho con las fotos reales del alojamiento.",prev:"Anterior",next:"Siguiente",spaces:"Todos los espacios",tabSpaces:"Espacios",tabPhotos:"Fotos reales",tabWalk:"Caminar",tabAuto:"Automático",photos:"Fotos reales",walk:"Caminar libremente",walkBack:"Volver al recorrido",auto:"Recorrido automático",stopAuto:"Detener",info:"Información",day:"Día",sunset:"Atardecer",close:"Cerrar",hintLook:"Desliza el dedo para mirar alrededor",hintWalk:"Usa el círculo para caminar y desliza para mirar",hintKeys:"Flechas o WASD para caminar · arrastra con el mouse para mirar",stepOf:"{n} de {total}",photoOf:"Foto real · {name} · {n}/{total}",loading:"Preparando la cabaña…",tourEnd:"¡Eso es todo! ¿Te gustó?",bookCta:"Reservar en Airbnb",restart:"Volver a empezar",howTo:"Cómo llegar",infoTitle:"Sobre la cabaña",infoFacts:["Cabaña de 1 piso, con acceso exclusivo","4 huéspedes · 2 dormitorios · 2 camas de 2 plazas · 1 baño","Lo Orozco, Casablanca, Región de Valparaíso, Chile","Se llega solo en automóvil (camino de tierra)","Estacionamiento gratuito y privado","Se admiten mascotas"],infoHas:"Incluye",infoList:["Tinaja de madera","Terraza con comedor al aire libre","Parrilla a carbón","Piscina y jardín","Cocina equipada: horno, microondas, jarra eléctrica","Agua caliente y ropa de cama","Televisión"],disclaimer:"Este recorrido es una recreación aproximada basada en fotos reales. Las medidas, la ubicación exacta de los muebles y algunos detalles pueden variar levemente. Revisa siempre la ficha oficial en Airbnb.",spot:{llegada:"Llegada",estac:"Estacionamiento",terraza:"Terraza",parrilla:"Parrilla",tinaja:"Tinaja",comedor:"Living, comedor y cocina",bano:"Baño",hab1:"Dormitorio 1",hab2:"Dormitorio 2",piscina:"Piscina y jardín"},desc:{llegada:"Llegas en auto por un camino de tierra, entre cerros y árboles del valle de Casablanca.",estac:"Estacionamiento gratuito y privado, a pocos pasos de la cabaña.",terraza:"Amplia terraza con comedor al aire libre bajo mallas de sombra. Mira hacia el poniente: los atardeceres son un espectáculo.",parrilla:"Parrilla a carbón para hacer asados en la terraza.",tinaja:"Tinaja de madera con escalera, ideal para relajarse mirando el cielo.",comedor:"Un solo ambiente cálido: futón para descansar, mesa para 4 personas y cocina con refrigerador, horno y microondas.",bano:"Baño moderno con ducha de lluvia, mampara de vidrio y agua caliente.",hab1:"Cama de 2 plazas, clóset y un gran ventanal que se abre a la terraza y al valle.",hab2:"Cama de 2 plazas, clóset y ventana hacia el cerro. Silencioso y luminoso.",piscina:"Jardín con pasto sintético, zona de juegos y piscina de unos 5 m de diámetro."},photoSet:{comedor:"Comedor",bano:"Baño",hab1:"Dormitorio 1",hab2:"Dormitorio 2",terraza:"Terraza y exterior",piscina:"Piscina y jardín"}},$0={title:"Refugio Casablanca",tagline:"Walk through the cabin as if you were already there",welcomeSub:"Cabin with hot tub and pool in the Casablanca Valley, Chile",start:"Start the tour",chooseLang:"Language",approx:"Approximate 3D tour, built from the real photos of the property.",prev:"Back",next:"Next",spaces:"All spaces",tabSpaces:"Spaces",tabPhotos:"Real photos",tabWalk:"Walk",tabAuto:"Auto tour",photos:"Real photos",walk:"Walk freely",walkBack:"Back to the tour",auto:"Automatic tour",stopAuto:"Stop",info:"Information",day:"Day",sunset:"Sunset",close:"Close",hintLook:"Swipe to look around",hintWalk:"Use the circle to walk and swipe to look around",hintKeys:"Arrow keys or WASD to walk · drag with the mouse to look",stepOf:"{n} of {total}",photoOf:"Real photo · {name} · {n}/{total}",loading:"Getting the cabin ready…",tourEnd:"That's everything! Did you like it?",bookCta:"Book on Airbnb",restart:"Start again",howTo:"Directions",infoTitle:"About the cabin",infoFacts:["1-story cabin, private access","4 guests · 2 bedrooms · 2 double beds · 1 bathroom","Lo Orozco, Casablanca, Valparaíso Region, Chile","Access by car only (dirt road)","Free private parking","Pets allowed"],infoHas:"Includes",infoList:["Wooden hot tub","Terrace with outdoor dining","Charcoal grill","Pool and garden","Equipped kitchen: oven, microwave, electric kettle","Hot water and bed linen","TV"],disclaimer:"This tour is an approximate recreation based on real photos. Measurements, exact furniture placement and some details may differ slightly. Always check the official Airbnb listing.",spot:{llegada:"Arrival",estac:"Parking",terraza:"Terrace",parrilla:"Grill",tinaja:"Hot tub",comedor:"Living, dining & kitchen",bano:"Bathroom",hab1:"Bedroom 1",hab2:"Bedroom 2",piscina:"Pool & garden"},desc:{llegada:"You arrive by car along a dirt road, among the hills and trees of the Casablanca Valley.",estac:"Free private parking, just a few steps from the cabin.",terraza:"Large terrace with outdoor dining under shade sails. It faces west: the sunsets are spectacular.",parrilla:"Charcoal grill for cookouts on the terrace.",tinaja:"Wooden hot tub with steps, perfect for relaxing under the open sky.",comedor:"One cozy open space: a futon to relax, a table for 4 and a kitchen with fridge, oven and microwave.",bano:"Modern bathroom with rain shower, glass screen and hot water.",hab1:"Double bed, wardrobe and a large sliding window opening to the terrace and the valley.",hab2:"Double bed, wardrobe and a window facing the hill. Quiet and bright.",piscina:"Garden with artificial turf, a play area and a pool about 5 m (16 ft) wide."},photoSet:{comedor:"Dining area",bano:"Bathroom",hab1:"Bedroom 1",hab2:"Bedroom 2",terraza:"Terrace & outdoors",piscina:"Pool & garden"}},Z0={title:"Refugio Casablanca",tagline:"Percorra a cabana como se já estivesse lá",welcomeSub:"Cabana com hidromassagem e piscina no Vale de Casablanca, Chile",start:"Começar o passeio",chooseLang:"Idioma",approx:"Passeio 3D aproximado, feito com as fotos reais da acomodação.",prev:"Voltar",next:"Próximo",spaces:"Todos os espaços",tabSpaces:"Espaços",tabPhotos:"Fotos reais",tabWalk:"Caminhar",tabAuto:"Automático",photos:"Fotos reais",walk:"Caminhar livremente",walkBack:"Voltar ao passeio",auto:"Passeio automático",stopAuto:"Parar",info:"Informações",day:"Dia",sunset:"Pôr do sol",close:"Fechar",hintLook:"Deslize o dedo para olhar ao redor",hintWalk:"Use o círculo para caminhar e deslize para olhar",hintKeys:"Setas ou WASD para caminhar · arraste com o mouse para olhar",stepOf:"{n} de {total}",photoOf:"Foto real · {name} · {n}/{total}",loading:"Preparando a cabana…",tourEnd:"É isso! Gostou?",bookCta:"Reservar no Airbnb",restart:"Recomeçar",howTo:"Como chegar",infoTitle:"Sobre a cabana",infoFacts:["Cabana de 1 andar, acesso exclusivo","4 hóspedes · 2 quartos · 2 camas de casal · 1 banheiro","Lo Orozco, Casablanca, Região de Valparaíso, Chile","Acesso somente de carro (estrada de terra)","Estacionamento gratuito e privativo","Aceita animais de estimação"],infoHas:"Inclui",infoList:["Ofurô de madeira","Terraço com refeições ao ar livre","Churrasqueira a carvão","Piscina e jardim","Cozinha equipada: forno, micro-ondas, chaleira elétrica","Água quente e roupa de cama","TV"],disclaimer:"Este passeio é uma recriação aproximada baseada em fotos reais. Medidas, posição exata dos móveis e alguns detalhes podem variar um pouco. Consulte sempre o anúncio oficial no Airbnb.",spot:{llegada:"Chegada",estac:"Estacionamento",terraza:"Terraço",parrilla:"Churrasqueira",tinaja:"Ofurô",comedor:"Sala, jantar e cozinha",bano:"Banheiro",hab1:"Quarto 1",hab2:"Quarto 2",piscina:"Piscina e jardim"},desc:{llegada:"Você chega de carro por uma estrada de terra, entre morros e árvores do Vale de Casablanca.",estac:"Estacionamento gratuito e privativo, a poucos passos da cabana.",terraza:"Amplo terraço com mesa ao ar livre sob telas de sombra. Voltado para o poente: os pores do sol são um espetáculo.",parrilla:"Churrasqueira a carvão para assados no terraço.",tinaja:"Ofurô de madeira com escada, ideal para relaxar olhando o céu.",comedor:"Um único ambiente aconchegante: futon para descansar, mesa para 4 pessoas e cozinha com geladeira, forno e micro-ondas.",bano:"Banheiro moderno com chuveiro de chuva, box de vidro e água quente.",hab1:"Cama de casal, armário e uma grande janela de correr que se abre para o terraço e o vale.",hab2:"Cama de casal, armário e janela para o morro. Silencioso e iluminado.",piscina:"Jardim com grama sintética, área de brincadeiras e piscina de cerca de 5 m de diâmetro."},photoSet:{comedor:"Sala de jantar",bano:"Banheiro",hab1:"Quarto 1",hab2:"Quarto 2",terraza:"Terraço e exterior",piscina:"Piscina e jardim"}},Gi={es:j0,en:$0,pt:Z0};let So="es";function K0(){try{const t=new URLSearchParams(location.search).get("lang");if(t&&Gi[t])return t;const e=localStorage.getItem("rc-lang");if(e&&Gi[e])return e}catch{}const n=(navigator.language||"es").slice(0,2);return Gi[n]?n:"es"}function Vc(n){if(Gi[n]){So=n;try{localStorage.setItem("rc-lang",n)}catch{}document.documentElement.lang=n}}const Xl=()=>So;function te(n,t){let e=n.split(".").reduce((i,r)=>i?i[r]:void 0,Gi[So]);if(e===void 0&&(e=n.split(".").reduce((i,r)=>i?i[r]:void 0,Gi.es)),typeof e=="string"&&t)for(const[i,r]of Object.entries(t))e=e.replace(`{${i}}`,r);return e??n}const vs=new URLSearchParams(location.search),jn=matchMedia("(pointer: coarse)").matches,J0="https://www.airbnb.mx/rooms/1672154212144506888",Q0="https://www.google.com/maps/search/?api=1&query=Lo+Orozco+Casablanca+Chile",et=n=>document.getElementById(n),Wc=et("c"),$e=new x0({canvas:Wc,antialias:!0,powerPreference:"high-performance"});$e.setPixelRatio(Math.min(devicePixelRatio,jn?2:1.75));$e.shadowMap.enabled=!0;$e.shadowMap.type=Kl;$e.shadowMap.autoUpdate=!1;$e.toneMapping=Ql;const ve=new Cc;ve.environment=new Va($e).fromScene(new q0,.04).texture;ve.environmentIntensity=.45;const dn=new qe(70,1,.05,2500),as=new y0(16777215,12166538,1),Ye=new T0(16777215,2);Ye.castShadow=!0;Ye.shadow.mapSize.set(jn?1536:2048,jn?1536:2048);const er=Ye.shadow.camera;er.left=-30;er.right=30;er.top=30;er.bottom=-30;er.near=1;er.far=220;Ye.shadow.bias=-4e-4;Ye.shadow.normalBias=.03;Ye.target.position.set(-5,0,3);ve.add(as,Ye,Ye.target);const tg=[[-1,2.2,1.5],[-1.6,2.2,-1.6],[1.9,2.2,-1.6],[2.55,2.2,1.5]].map(([n,t,e])=>{const i=new Lc(16769712,0,7,2);return i.position.set(n,t,e),ve.add(i),i}),Wn=X0();ve.add(Wn.mesh);ve.fog=new oo(14083824,70,760);const eg={day:{top:3832004,horizon:12572650,fog:13229032,cloud:16777215,cloudAmt:.8,sunDir:[-.35,.85,-.45],sunCol:16773324,sunI:2.6,hemiSky:14937599,hemiGround:14208962,hemiI:1,lampI:0,exp:.95},sunset:{top:5930936,horizon:16167034,fog:15381646,cloud:16757386,cloudAmt:.75,sunDir:[-1,.12,.2],sunCol:16754788,sunI:3,hemiSky:16765620,hemiGround:10124650,hemiI:.55,lampI:10,exp:.92}};let ui=vs.get("time")==="sunset"?"sunset":"day";function Xc(){const n=eg[ui];Wn.uniforms.top.value.set(n.top),Wn.uniforms.horizon.value.set(n.horizon),Wn.uniforms.sunDir.value.set(...n.sunDir).normalize(),Wn.uniforms.sunColor.value.set(n.sunCol),Wn.uniforms.cloudColor.value.set(n.cloud),Wn.uniforms.cloudAmount.value=n.cloudAmt,ve.fog.color.set(n.fog),ve.fog.near=ui==="sunset"?35:70,as.color.set(n.hemiSky),as.groundColor.set(n.hemiGround),as.intensity=n.hemiI,Ye.color.set(n.sunCol),Ye.intensity=n.sunI;const t=Wn.uniforms.sunDir.value;Ye.position.set(Ye.target.position.x+t.x*90,t.y*90+2,Ye.target.position.z+t.z*90),tg.forEach(e=>{e.intensity=n.lampI}),$e.toneMappingExposure=n.exp,$e.shadowMap.needsUpdate=!0,et("bTime").innerHTML=ui==="day"?'<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM11 1h2v3h-2zm0 19h2v3h-2zM3.5 5 5 3.5l2.1 2.1-1.5 1.5zM17 18.9l1.4-1.4 2.1 2.1-1.5 1.4zM1 11h3v2H1zm19 0h3v2h-3zM3.5 19 5.6 17l1.5 1.4L5 20.5zM17 5.1l2.1-2.1 1.4 1.5-2.1 2.1z"/></svg>':'<svg viewBox="0 0 24 24"><path d="M2 18h20v2H2zm5-3a5 5 0 0 1 10 0h-2a3 3 0 0 0-6 0zm4-11h2v3h-2zM4.2 7.6l1.4-1.4 2.1 2.1-1.4 1.4zm14.1.7 2.1-2.1 1.4 1.4-2.1 2.1z"/></svg>',et("bTime").setAttribute("aria-label",te(ui==="day"?"sunset":"day"))}const nr=new C0,Ms=P0(),yo=U0(),ng=D0(nr,Ms);N0(nr,Ms,yo);O0(nr,Ms,yo,Fc);F0(nr,Ms,yo,Fc);k0(nr);ve.add(nr.build());B0(ve);G0(ve);V0(ve,jn?330:520);W0(ve,jn?450:900,60);H0(ve,jn?30:42);const qc=[],ql=new br({color:16777215,transparent:!0,opacity:.7,depthWrite:!1}),ig=new ho(.3,.34,40).rotateX(-Math.PI/2),rg=new lo(.06,16).rotateX(-Math.PI/2),Ss={};_s.forEach((n,t)=>{if(!n.ring)return;const[e,i]=Ve[n.node],r=new li;r.position.set(e,.03,i),r.add(new Wt(ig,ql),new Wt(rg,ql));const s=new Wt(new Zi(.75,.75,2.4,10),new br({visible:!1}));s.position.y=1.2,s.userData.spot=n.id,r.add(s),qc.push(s),ve.add(r),Ss[n.id]=r});const he=new Y0(dn,Wc,ng),Yl=new w0;he.onTap=(n,t)=>{if(!Tr)return;Yl.setFromCamera(new zt(n/innerWidth*2-1,-(t/innerHeight)*2+1),dn);const e=Yl.intersectObjects(qc,!1)[0];if(e){const i=Ne.indexOf(e.object.userData.spot);pi?jl(e.object.userData.spot):i>=0?Mn(i):jl(e.object.userData.spot)}};he.onUserMove=()=>{Ar()};he.onArrive=()=>{Vi===null&&vn&&Zc()};function ys(){const n=innerWidth,t=innerHeight,e=n/t,i=!pi&&e<1.2&&et("card")&&!et("card").hidden?et("card").offsetHeight:0;i?dn.setViewOffset(n,t,0,Math.round(i*.5),n,t):dn.clearViewOffset(),$e.setSize(n,t,!1),dn.aspect=e,dn.fov=e>=1?68:Math.min(80,Math.max(68,2*Math.atan(Math.tan(66*Math.PI/360)/e)*180/Math.PI)),dn.updateProjectionMatrix()}addEventListener("resize",ys);let Tr=!1,pi=!1,ze=0,vn=!1,Vi=null;const bo=n=>te(`spot.${n}`);function Yc(){document.querySelectorAll("[data-i18n]").forEach(n=>{n.textContent=te(n.dataset.i18n)}),et("bTime").setAttribute("aria-label",te(ui==="day"?"sunset":"day")),et("bInfo").setAttribute("aria-label",te("info")),et("mClose").setAttribute("aria-label",te("close")),et("pClose").setAttribute("aria-label",te("close")),et("autoTxt").textContent=te(vn?"stopAuto":"tabAuto"),document.querySelectorAll("#langPills button").forEach(n=>n.classList.toggle("on",n.dataset.l===Xl())),et("lang").value=Xl(),Eo()}function Eo(){requestAnimationFrame(ys);const n=Ne[ze];et("stepTxt").textContent=te("stepOf",{n:ze+1,total:Ne.length}),et("dots").innerHTML=Ne.map((t,e)=>`<i class="${e===ze?"on":""}"></i>`).join(""),et("place").textContent=bo(n),et("desc").textContent=te(`desc.${n}`),et("prev").style.visibility=ze===0?"hidden":"visible",Object.entries(Ss).forEach(([t,e])=>{e.visible=t!==n})}const Ya=et("lang");Ya.innerHTML=Object.entries(Gc).map(([n])=>`<option value="${n}">${n.toUpperCase()}</option>`).join("");et("langPills").innerHTML=Object.entries(Gc).map(([n,t])=>`<button data-l="${n}">${t}</button>`).join("");function jc(n){Vc(n),Yc(),et("modal").hidden||ag()}Ya.addEventListener("change",()=>jc(Ya.value));et("langPills").addEventListener("click",n=>{const t=n.target.closest("button");t&&jc(t.dataset.l)});function Mn(n){Ar(!1),Es(!1),et("end").hidden=!0,et("desc").parentElement.querySelector(".nav-row").hidden=!1,ze=Math.max(0,Math.min(Ne.length-1,n)),Eo(),he.goTo(Ne[ze],{instant:!Tr})}function $c(){Ar(!1),et("end").hidden=!1,document.querySelectorAll("#card > .nav-row, #card > .tabs, #card > #desc, #card > #place, #card > .step-row").forEach(n=>{n.hidden=!0})}function bs(){et("end").hidden=!0,document.querySelectorAll("#card > .nav-row, #card > .tabs, #card > #desc, #card > #place, #card > .step-row").forEach(n=>{n.hidden=!1})}et("next").onclick=()=>{ze>=Ne.length-1?$c():Mn(ze+1)};et("prev").onclick=()=>Mn(ze-1);et("restart").onclick=()=>{bs(),Mn(0)};et("endWalk").onclick=()=>{bs(),Es(!0)};function jl(n){he.goTo(n)}function Zc(){clearTimeout(Vi),Vi=setTimeout(()=>{if(Vi=null,!!vn){if(ze>=Ne.length-1){$c();return}Mn(ze+1),vn=!0,us()}},5200)}function us(){et("autoTxt").textContent=te(vn?"stopAuto":"tabAuto"),et("autoIcon").innerHTML=vn?'<path d="M6 5h4v14H6zm8 0h4v14h-4z"/>':'<path d="M8 5v14l11-7z"/>',et("tAuto").classList.toggle("on",vn)}function Ar(n=!0){vn=!1,clearTimeout(Vi),Vi=null,us()}et("tAuto").onclick=()=>{if(vn){Ar();return}vn=!0,us(),he.path||Zc()};function Es(n){pi=n,requestAnimationFrame(ys),et("card").hidden=n,et("freeBar").hidden=!n,et("stickWrap").hidden=!(n&&jn),et("tWalk").classList.toggle("on",n),n?(Ar(),Object.values(Ss).forEach(t=>{t.visible=!0}),Kc(te(jn?"hintWalk":"hintKeys"))):(he.stick.x=he.stick.y=0,Eo())}et("tWalk").onclick=()=>Es(!0);et("freeBack").onclick=()=>{bs(),Mn(sg())};function sg(){const n=xs(he.x,he.z),t=Ne.indexOf(n==="exterior"?"llegada":n);return t>=0?t:ze}let $l=null;function Kc(n){const t=et("hint");t.hidden=!0,t.offsetWidth,t.textContent=n,t.hidden=!1,clearTimeout($l),$l=setTimeout(()=>{t.hidden=!0},6e3)}(()=>{const n=et("stick"),t=et("knob");let e=null;const i=s=>{const a=n.getBoundingClientRect();let o=s.clientX-(a.left+a.width/2),l=s.clientY-(a.top+a.height/2);const u=a.width/2-8,c=Math.hypot(o,l);c>u&&(o=o/c*u,l=l/c*u),t.style.transform=`translate(${o}px, ${l}px)`,he.stick.x=o/u,he.stick.y=l/u};n.addEventListener("pointerdown",s=>{e=s.pointerId,n.setPointerCapture(e),i(s),s.preventDefault()}),n.addEventListener("pointermove",s=>{s.pointerId===e&&i(s)});const r=s=>{s.pointerId===e&&(e=null,t.style.transform="",he.stick.x=he.stick.y=0)};n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r)})();function Jc(n,t){et("mTitle").textContent=n,et("mBody").innerHTML=t,et("modal").hidden=!1}let To=null;function ag(){To==="spaces"?Qc():tu()}function Qc(){To="spaces",Jc(te("spaces"),Ne.map((n,t)=>`<button class="spot-btn ${t===ze&&!pi?"on":""}" data-i="${t}"><b>${t+1}</b><span>${bo(n)}</span></button>`).join(""))}function tu(){To="info",Jc(te("infoTitle"),`
    <ul class="facts">${te("infoFacts").map(n=>`<li>${n}</li>`).join("")}</ul>
    <h4>${te("infoHas")}</h4>
    <ul class="facts">${te("infoList").map(n=>`<li>${n}</li>`).join("")}</ul>
    <div class="btn-row">
      <a class="btn primary" href="${J0}" target="_blank" rel="noopener">${te("bookCta")}</a>
      <a class="btn ghost" href="${Q0}" target="_blank" rel="noopener">${te("howTo")}</a>
    </div>
    <p class="note">${te("disclaimer")}</p>`)}et("tSpaces").onclick=Qc;et("bInfo").onclick=tu;et("mClose").onclick=()=>{et("modal").hidden=!0};et("modal").addEventListener("click",n=>{n.target===et("modal")&&(et("modal").hidden=!0);const t=n.target.closest(".spot-btn");t&&(et("modal").hidden=!0,bs(),Mn(+t.dataset.i))});const og={comedor:"comedor",bano:"bano",hab1:"hab1",hab2:"hab2",terraza:"terraza",parrilla:"terraza",tinaja:"terraza",estac:"terraza",exterior:"terraza",piscina:"piscina"};let hs="comedor",pn=0;function lg(){return pi?og[xs(he.x,he.z)]||"terraza":_s.find(n=>n.id===Ne[ze]).photos}function Ao(){const n=vo[hs];et("pImg").src=window.__PHOTOS&&window.__PHOTOS[n[pn]]||`./fotos/${n[pn]}.jpg`,et("pCap").textContent=te("photoOf",{name:te(`photoSet.${hs}`),n:pn+1,total:n.length}),et("pPrev").disabled=pn===0,et("pNext").disabled=pn===n.length-1}et("tPhotos").onclick=()=>{hs=lg(),pn=0,et("photos").hidden=!1,Ao()};et("pClose").onclick=()=>{et("photos").hidden=!0};et("pPrev").onclick=()=>{pn>0&&(pn--,Ao())};et("pNext").onclick=()=>{pn<vo[hs].length-1&&(pn++,Ao())};(()=>{let n=null;et("photos").addEventListener("touchstart",t=>{n=t.touches[0].clientX},{passive:!0}),et("photos").addEventListener("touchend",t=>{if(n===null)return;const e=t.changedTouches[0].clientX-n;n=null,e<-50?et("pNext").click():e>50&&et("pPrev").click()})})();et("bTime").onclick=()=>{ui=ui==="day"?"sunset":"day",Xc()};addEventListener("keydown",n=>{n.key==="Escape"&&(et("modal").hidden=!0,et("photos").hidden=!0),!(!Tr||pi)&&(n.key==="Enter"&&et("next").click(),n.key==="Backspace"&&et("prev").click())});et("start").onclick=()=>{et("start").disabled||(Tr=!0,et("welcome").classList.add("out"),setTimeout(()=>{et("welcome").hidden=!0},600),Mn(0),Kc(te("hintLook")))};Vc(K0());Xc();Yc();ys();vs.get("embed")==="1"&&document.body.classList.add("embed");et("start").disabled=!0;he.goTo(Ne[0],{instant:!0});$e.render(ve,dn);et("start").disabled=!1;et("loadingTxt").hidden=!0;const Qr=vs.get("spot");Qr&&Ne.includes(Qr)?(Tr=!0,et("welcome").hidden=!0,Mn(Ne.indexOf(Qr)),he.goTo(Qr,{instant:!0})):vs.get("skipwelcome")==="1"&&et("start").click();const cg=new A0;$e.setAnimationLoop(()=>{const n=cg.getDelta();he.update(n);const t=performance.now()/1e3;for(const e of Object.values(Ss))e.visible&&e.scale.setScalar(1+Math.sin(t*2.4)*.06);pi&&(et("freePlace").textContent=(()=>{const e=xs(he.x,he.z);return e==="exterior"?"":bo(e)})()),$e.render(ve,dn)});window.__rc={nav:he,camera:dn,scene:ve,goStep:Mn,setFree:Es,renderer:$e};
