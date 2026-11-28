var Eh=Object.defineProperty;var Th=(n,e,t)=>e in n?Eh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Il=(n,e,t)=>Th(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ja="170",wh=0,Ul=1,Ah=2,iu=1,ru=2,Gn=3,Kn=0,It=1,St=2,jn=0,ar=1,Nl=2,Fl=3,Ol=4,Rh=5,Mi=100,Ch=101,Dh=102,Ph=103,Lh=104,Ih=200,Uh=201,Nh=202,Fh=203,Ks=204,Js=205,Oh=206,zh=207,Bh=208,kh=209,Hh=210,Vh=211,Gh=212,Wh=213,Xh=214,$s=0,eo=1,to=2,fr=3,no=4,io=5,ro=6,ao=7,au=0,qh=1,Yh=2,oi=0,su=1,ou=2,lu=3,cu=4,jh=5,uu=6,Go=7,hu=300,dr=301,pr=302,so=303,oo=304,Za=306,Ci=1e3,_i=1001,lo=1002,lt=1003,Zh=1004,aa=1005,Mt=1006,ds=1007,bi=1008,Jn=1009,fu=1010,du=1011,Xr=1012,Wo=1013,Dn=1014,mn=1015,dn=1016,Xo=1017,qo=1018,Di=1020,pu=35902,mu=1021,gu=1022,bt=1023,vu=1024,xu=1025,li=1026,Pi=1027,Qr=1028,Yo=1029,Mu=1030,jo=1031,Zo=1033,La=33776,Ia=33777,Ua=33778,Na=33779,co=35840,uo=35841,ho=35842,fo=35843,po=36196,mo=37492,go=37496,vo=37808,xo=37809,Mo=37810,So=37811,yo=37812,_o=37813,bo=37814,Eo=37815,To=37816,wo=37817,Ao=37818,Ro=37819,Co=37820,Do=37821,Fa=36492,Po=36494,Lo=36495,Su=36283,Io=36284,Uo=36285,No=36286,Qh=3200,Kh=3201,yu=0,Jh=1,Wn="",Jt="srgb",vr="srgb-linear",Qa="linear",$e="srgb",zi=7680,zl=519,$h=512,ef=513,tf=514,_u=515,nf=516,rf=517,af=518,sf=519,Bl=35044,Fo="300 es",Xn=2e3,Va=2001;class xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kl=1234567;const Hr=Math.PI/180,qr=180/Math.PI;function Mr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Gt(n,e,t){return Math.max(e,Math.min(t,n))}function Qo(n,e){return(n%e+e)%e}function of(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function lf(n,e,t){return n!==e?(t-n)/(e-n):0}function Vr(n,e,t){return(1-t)*n+t*e}function cf(n,e,t,i){return Vr(n,e,1-Math.exp(-t*i))}function uf(n,e=1){return e-Math.abs(Qo(n,e*2)-e)}function hf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ff(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function df(n,e){return n+Math.floor(Math.random()*(e-n+1))}function pf(n,e){return n+Math.random()*(e-n)}function mf(n){return n*(.5-Math.random())}function gf(n){n!==void 0&&(kl=n);let e=kl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vf(n){return n*Hr}function xf(n){return n*qr}function Mf(n){return(n&n-1)===0&&n!==0}function Sf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _f(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),u=a((e+i)/2),c=s((e+i)/2),f=a((e-i)/2),d=s((e-i)/2),p=a((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(o*c,l*f,l*d,o*u);break;case"YZY":n.set(l*d,o*c,l*f,o*u);break;case"ZXZ":n.set(l*f,l*d,o*c,o*u);break;case"XZX":n.set(o*c,l*g,l*p,o*u);break;case"YXY":n.set(l*p,o*c,l*g,o*u);break;case"ZYZ":n.set(l*g,l*p,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function er(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ko={DEG2RAD:Hr,RAD2DEG:qr,generateUUID:Mr,clamp:Gt,euclideanModulo:Qo,mapLinear:of,inverseLerp:lf,lerp:Vr,damp:cf,pingpong:uf,smoothstep:hf,smootherstep:ff,randInt:df,randFloat:pf,randFloatSpread:mf,seededRandom:gf,degToRad:vf,radToDeg:xf,isPowerOfTwo:Mf,ceilPowerOfTwo:Sf,floorPowerOfTwo:yf,setQuaternionFromProperEuler:_f,normalize:Ht,denormalize:er};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,i,r,a,s,o,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,u)}set(e,t,i,r,a,s,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=a,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],x=r[1],_=r[4],M=r[7],P=r[2],T=r[5],A=r[8];return a[0]=s*v+o*x+l*P,a[3]=s*m+o*_+l*T,a[6]=s*h+o*M+l*A,a[1]=u*v+c*x+f*P,a[4]=u*m+c*_+f*T,a[7]=u*h+c*M+f*A,a[2]=d*v+p*x+g*P,a[5]=d*m+p*_+g*T,a[8]=d*h+p*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*s*c-t*o*u-i*a*c+i*o*l+r*a*u-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*s-o*u,d=o*l-c*a,p=u*a-s*l,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*u-c*i)*v,e[2]=(o*i-r*s)*v,e[3]=d*v,e[4]=(c*t-r*l)*v,e[5]=(r*a-o*t)*v,e[6]=p*v,e[7]=(i*l-u*t)*v,e[8]=(s*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*s+u*o)+s+e,-r*u,r*l,-r*(-u*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ps.makeScale(e,t)),this}rotate(e){return this.premultiply(ps.makeRotation(-e)),this}translate(e,t){return this.premultiply(ps.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ps=new ze;function bu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bf(){const n=Yr("canvas");return n.style.display="block",n}const Hl={};function zr(n){n in Hl||(Hl[n]=!0,console.warn(n))}function Ef(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function Tf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wf(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===$e&&(n.r=Zn(n.r),n.g=Zn(n.g),n.b=Zn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===$e&&(n.r=sr(n.r),n.g=sr(n.g),n.b=sr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Wn?Qa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Vl=[.64,.33,.3,.6,.15,.06],Gl=[.2126,.7152,.0722],Wl=[.3127,.329],Xl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ql=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[vr]:{primaries:Vl,whitePoint:Wl,transfer:Qa,toXYZ:Xl,fromXYZ:ql,luminanceCoefficients:Gl,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:Vl,whitePoint:Wl,transfer:$e,toXYZ:Xl,fromXYZ:ql,luminanceCoefficients:Gl,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}});let Bi;class Af{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=Yr("canvas")),Bi.width=e.width,Bi.height=e.height;const i=Bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Zn(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rf=0;class Eu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(ms(r[s].image)):a.push(ms(r[s]))}else a=ms(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function ms(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Af.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cf=0;class Ut extends xr{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=_i,r=_i,a=Mt,s=bi,o=bt,l=Jn,u=Ut.DEFAULT_ANISOTROPY,c=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Mr(),this.name="",this.source=new Eu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ci:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ci:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=hu;Ut.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,i=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,M=(p+1)/2,P=(h+1)/2,T=(c+d)/4,A=(f+v)/4,R=(g+m)/4;return _>M&&_>P?_<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(_),r=T/i,a=A/i):M>P?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=T/r,a=R/r):P<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(P),i=A/a,r=R/a),this.set(i,r,a,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-c)*(d-c));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-v)/x,this.z=(d-c)/x,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Df extends xr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Ut(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dt extends Df{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Tu extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=lt,this.minFilter=lt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pf extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=lt,this.minFilter=lt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=a[s+0],p=a[s+1],g=a[s+2],v=a[s+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||u!==p||c!==g){let m=1-o;const h=l*d+u*p+c*g+f*v,x=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const P=Math.sqrt(_),T=Math.atan2(P,h*x);m=Math.sin(m*T)/P,o=Math.sin(o*T)/P}const M=o*x;if(l=l*m+d*M,u=u*m+p*M,c=c*m+g*M,f=f*m+v*M,m===1-o){const P=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=P,u*=P,c*=P,f*=P}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=a[s],d=a[s+1],p=a[s+2],g=a[s+3];return e[t]=o*g+c*f+l*p-u*d,e[t+1]=l*g+c*d+u*f-o*p,e[t+2]=u*g+c*p+o*d-l*f,e[t+3]=c*g-o*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(a/2),d=l(i/2),p=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"YXZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"ZXY":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"ZYX":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"YZX":this._x=d*c*f+u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f-d*p*g;break;case"XZY":this._x=d*c*f-u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(a-u)*p,this._z=(s-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(a-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(s-r)/p,this._x=(a+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+s*o+r*u-a*l,this._y=r*c+s*l+a*o-i*u,this._z=a*c+s*u+i*l-r*o,this._w=s*c-i*o-r*l-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=s*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,u=2*(s*r-o*i),c=2*(o*t-a*r),f=2*(a*i-s*t);return this.x=t+l*u+s*f-o*c,this.y=i+l*c+o*u-a*f,this.z=r+l*f+a*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gs.copy(this).projectOnVector(e),this.sub(gs)}reflect(e){return this.sub(gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gs=new D,Yl=new Un;class Ui{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,xn):xn.fromBufferAttribute(a,s),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sa.copy(i.boundingBox)),sa.applyMatrix4(e.matrixWorld),this.union(sa)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),oa.subVectors(this.max,Ar),ki.subVectors(e.a,Ar),Hi.subVectors(e.b,Ar),Vi.subVectors(e.c,Ar),ti.subVectors(Hi,ki),ni.subVectors(Vi,Hi),ui.subVectors(ki,Vi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-ui.z,ui.y,ti.z,0,-ti.x,ni.z,0,-ni.x,ui.z,0,-ui.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-ui.y,ui.x,0];return!vs(t,ki,Hi,Vi,oa)||(t=[1,0,0,0,1,0,0,0,1],!vs(t,ki,Hi,Vi,oa))?!1:(la.crossVectors(ti,ni),t=[la.x,la.y,la.z],vs(t,ki,Hi,Vi,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new D,new D,new D,new D,new D,new D,new D,new D],xn=new D,sa=new Ui,ki=new D,Hi=new D,Vi=new D,ti=new D,ni=new D,ui=new D,Ar=new D,oa=new D,la=new D,hi=new D;function vs(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){hi.fromArray(n,a);const o=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),l=e.dot(hi),u=t.dot(hi),c=i.dot(hi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Lf=new Ui,Rr=new D,xs=new D;class Sr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Lf.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const t=Rr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Rr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(xs)),this.expandByPoint(Rr.copy(e.center).sub(xs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new D,Ms=new D,ca=new D,ii=new D,Ss=new D,ua=new D,ys=new D;class wu{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ms.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Ms);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ca),o=ii.dot(this.direction),l=-ii.dot(ca),u=ii.lengthSq(),c=Math.abs(1-s*s);let f,d,p,g;if(c>0)if(f=s*l-o,d=s*o-l,g=a*c,f>=0)if(d>=-g)if(d<=g){const v=1/c;f*=v,d*=v,p=f*(f+s*d+2*o)+d*(s*f+d+2*l)+u}else d=a,f=Math.max(0,-(s*d+o)),p=-f*f+d*(d+2*l)+u;else d=-a,f=Math.max(0,-(s*d+o)),p=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-s*a+o)),d=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+u):(f=Math.max(0,-(s*a+o)),d=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+u);else d=s>0?-a:a,f=Math.max(0,-(s*d+o)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ms).addScaledVector(ca,d),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),r=Bn.dot(Bn)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(a=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c):(a=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,i,r,a){Ss.subVectors(t,e),ua.subVectors(i,e),ys.crossVectors(Ss,ua);let s=this.direction.dot(ys),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ii.subVectors(this.origin,e);const l=o*this.direction.dot(ua.crossVectors(ii,ua));if(l<0)return null;const u=o*this.direction.dot(Ss.cross(ii));if(u<0||l+u>s)return null;const c=-o*ii.dot(ys);return c<0?null:this.at(c/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(e,t,i,r,a,s,o,l,u,c,f,d,p,g,v,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,u,c,f,d,p,g,v,m)}set(e,t,i,r,a,s,o,l,u,c,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),a=1/Gi.setFromMatrixColumn(e,1).length(),s=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=s*c,p=s*f,g=o*c,v=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+g*u,t[5]=d-v*u,t[9]=-o*l,t[2]=v-d*u,t[6]=g+p*u,t[10]=s*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,g=u*c,v=u*f;t[0]=d+v*o,t[4]=g*o-p,t[8]=s*u,t[1]=s*f,t[5]=s*c,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,g=u*c,v=u*f;t[0]=d-v*o,t[4]=-s*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=s*c,t[9]=v-d*o,t[2]=-s*u,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*c,p=s*f,g=o*c,v=o*f;t[0]=l*c,t[4]=g*u-p,t[8]=d*u+v,t[1]=l*f,t[5]=v*u+d,t[9]=p*u-g,t[2]=-u,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*u,g=o*l,v=o*u;t[0]=l*c,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=s*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=s*l,p=s*u,g=o*l,v=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+v,t[5]=s*c,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*c,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(If,e,Uf)}lookAt(e,t,i){const r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ri.crossVectors(i,nn),ri.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ri.crossVectors(i,nn)),ri.normalize(),ha.crossVectors(nn,ri),r[0]=ri.x,r[4]=ha.x,r[8]=nn.x,r[1]=ri.y,r[5]=ha.y,r[9]=nn.y,r[2]=ri.z,r[6]=ha.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],x=i[3],_=i[7],M=i[11],P=i[15],T=r[0],A=r[4],R=r[8],E=r[12],S=r[1],C=r[5],z=r[9],O=r[13],V=r[2],Y=r[6],H=r[10],ee=r[14],W=r[3],ae=r[7],de=r[11],Ee=r[15];return a[0]=s*T+o*S+l*V+u*W,a[4]=s*A+o*C+l*Y+u*ae,a[8]=s*R+o*z+l*H+u*de,a[12]=s*E+o*O+l*ee+u*Ee,a[1]=c*T+f*S+d*V+p*W,a[5]=c*A+f*C+d*Y+p*ae,a[9]=c*R+f*z+d*H+p*de,a[13]=c*E+f*O+d*ee+p*Ee,a[2]=g*T+v*S+m*V+h*W,a[6]=g*A+v*C+m*Y+h*ae,a[10]=g*R+v*z+m*H+h*de,a[14]=g*E+v*O+m*ee+h*Ee,a[3]=x*T+_*S+M*V+P*W,a[7]=x*A+_*C+M*Y+P*ae,a[11]=x*R+_*z+M*H+P*de,a[15]=x*E+_*O+M*ee+P*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+a*l*f-r*u*f-a*o*d+i*u*d+r*o*p-i*l*p)+v*(+t*l*p-t*u*d+a*s*d-r*s*p+r*u*c-a*l*c)+m*(+t*u*f-t*o*p-a*s*f+i*s*p+a*o*c-i*u*c)+h*(-r*o*c-t*l*f+t*o*d+r*s*f-i*s*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],x=f*m*u-v*d*u+v*l*p-o*m*p-f*l*h+o*d*h,_=g*d*u-c*m*u-g*l*p+s*m*p+c*l*h-s*d*h,M=c*v*u-g*f*u+g*o*p-s*v*p-c*o*h+s*f*h,P=g*f*l-c*v*l-g*o*d+s*v*d+c*o*m-s*f*m,T=t*x+i*_+r*M+a*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(v*d*a-f*m*a-v*r*p+i*m*p+f*r*h-i*d*h)*A,e[2]=(o*m*a-v*l*a+v*r*u-i*m*u-o*r*h+i*l*h)*A,e[3]=(f*l*a-o*d*a-f*r*u+i*d*u+o*r*p-i*l*p)*A,e[4]=_*A,e[5]=(c*m*a-g*d*a+g*r*p-t*m*p-c*r*h+t*d*h)*A,e[6]=(g*l*a-s*m*a-g*r*u+t*m*u+s*r*h-t*l*h)*A,e[7]=(s*d*a-c*l*a+c*r*u-t*d*u-s*r*p+t*l*p)*A,e[8]=M*A,e[9]=(g*f*a-c*v*a-g*i*p+t*v*p+c*i*h-t*f*h)*A,e[10]=(s*v*a-g*o*a+g*i*u-t*v*u-s*i*h+t*o*h)*A,e[11]=(c*o*a-s*f*a-c*i*u+t*f*u+s*i*p-t*o*p)*A,e[12]=P*A,e[13]=(c*v*r-g*f*r+g*i*d-t*v*d-c*i*m+t*f*m)*A,e[14]=(g*o*r-s*v*r-g*i*l+t*v*l+s*i*m-t*o*m)*A,e[15]=(s*f*r-c*o*r+c*i*l-t*f*l-s*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,u=a*s,c=a*o;return this.set(u*s+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*s,0,u*l-r*o,c*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,u=a+a,c=s+s,f=o+o,d=a*u,p=a*c,g=a*f,v=s*c,m=s*f,h=o*f,x=l*u,_=l*c,M=l*f,P=i.x,T=i.y,A=i.z;return r[0]=(1-(v+h))*P,r[1]=(p+M)*P,r[2]=(g-_)*P,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(d+h))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(g+_)*A,r[9]=(m-x)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Gi.set(r[0],r[1],r[2]).length();const s=Gi.set(r[4],r[5],r[6]).length(),o=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const u=1/a,c=1/s,f=1/o;return Mn.elements[0]*=u,Mn.elements[1]*=u,Mn.elements[2]*=u,Mn.elements[4]*=c,Mn.elements[5]*=c,Mn.elements[6]*=c,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,t.setFromRotationMatrix(Mn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=Xn){const l=this.elements,u=2*a/(t-e),c=2*a/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(o===Xn)p=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===Va)p=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=Xn){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(s-a),d=(t+e)*u,p=(i+r)*c;let g,v;if(o===Xn)g=(s+a)*f,v=-2*f;else if(o===Va)g=a*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new D,Mn=new Ae,If=new D(0,0,0),Uf=new D(1,1,1),ri=new D,ha=new D,nn=new D,jl=new Ae,Zl=new Un;class Yt{constructor(e=0,t=0,i=0,r=Yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yt.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nf=0;const Ql=new D,Wi=new Un,kn=new Ae,fa=new D,Cr=new D,Ff=new D,Of=new Un,Kl=new D(1,0,0),Jl=new D(0,1,0),$l=new D(0,0,1),ec={type:"added"},zf={type:"removed"},Xi={type:"childadded",child:null},_s={type:"childremoved",child:null};class Nt extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new D,t=new Yt,i=new Un,r=new D(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new ze}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return Ql.copy(e).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fa.copy(e):fa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Cr,fa,this.up):kn.lookAt(fa,Cr,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(kn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ec),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zf),_s.child=e,this.dispatchEvent(_s),_s.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ec),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,Ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),f=s(e.shapes),d=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new D(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new D,Hn=new D,bs=new D,Vn=new D,qi=new D,Yi=new D,tc=new D,Es=new D,Ts=new D,ws=new D,As=new et,Rs=new et,Cs=new et;class _n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Sn.subVectors(e,t),r.cross(Sn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Sn.subVectors(r,t),Hn.subVectors(i,t),bs.subVectors(e,t);const s=Sn.dot(Sn),o=Sn.dot(Hn),l=Sn.dot(bs),u=Hn.dot(Hn),c=Hn.dot(bs),f=s*u-o*o;if(f===0)return a.set(0,0,0),null;const d=1/f,p=(u*l-o*c)*d,g=(s*c-o*l)*d;return a.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Vn.x),l.addScaledVector(s,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return As.setScalar(0),Rs.setScalar(0),Cs.setScalar(0),As.fromBufferAttribute(e,t),Rs.fromBufferAttribute(e,i),Cs.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(As,a.x),s.addScaledVector(Rs,a.y),s.addScaledVector(Cs,a.z),s}static isFrontFacing(e,t,i,r){return Sn.subVectors(i,t),Hn.subVectors(e,t),Sn.cross(Hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Sn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;qi.subVectors(r,i),Yi.subVectors(a,i),Es.subVectors(e,i);const l=qi.dot(Es),u=Yi.dot(Es);if(l<=0&&u<=0)return t.copy(i);Ts.subVectors(e,r);const c=qi.dot(Ts),f=Yi.dot(Ts);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),t.copy(i).addScaledVector(qi,s);ws.subVectors(e,a);const p=qi.dot(ws),g=Yi.dot(ws);if(g>=0&&p<=g)return t.copy(a);const v=p*u-l*g;if(v<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(i).addScaledVector(Yi,o);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return tc.subVectors(a,r),o=(f-c)/(f-c+(p-g)),t.copy(r).addScaledVector(tc,o);const h=1/(m+v+d);return s=v*h,o=d*h,t.copy(i).addScaledVector(qi,s).addScaledVector(Yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},da={h:0,s:0,l:0};function Ds(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=Qo(e,1),t=Gt(t,0,1),i=Gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Ds(s,a,e+1/3),this.g=Ds(s,a,e),this.b=Ds(s,a,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Jt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=Au[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return qe.fromWorkingColorSpace(zt.copy(this),e),Math.round(Gt(zt.r*255,0,255))*65536+Math.round(Gt(zt.g*255,0,255))*256+Math.round(Gt(zt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(zt.copy(this),t);const i=zt.r,r=zt.g,a=zt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,u;const c=(o+s)/2;if(o===s)l=0,u=0;else{const f=s-o;switch(u=c<=.5?f/(s+o):f/(2-s-o),s){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Jt){qe.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,r=zt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(da);const i=Vr(ai.h,da.h,t),r=Vr(ai.s,da.s,t),a=Vr(ai.l,da.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new ve;ve.NAMES=Au;let Bf=0;class Kr extends xr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Mr(),this.name="",this.blending=ar,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ks,this.blendDst=Js,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==Kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ks&&(i.blendSrc=this.blendSrc),this.blendDst!==Js&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jr extends Kr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new D,pa=new Re;class Pt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bl,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),a=Ht(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bl&&(e.usage=this.usage),e}}class Ru extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cu extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nt extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kf=0;const hn=new Ae,Ps=new Nt,ji=new D,rn=new Ui,Dr=new Ui,Ct=new D;class kt extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bu(e)?Cu:Ru)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ze().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,i){return hn.makeTranslation(e,t,i),this.applyMatrix4(hn),this}scale(e,t,i){return hn.makeScale(e,t,i),this.applyMatrix4(hn),this}lookAt(e){return Ps.lookAt(e),Ps.updateMatrix(),this.applyMatrix4(Ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new nt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];rn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(rn.min,Dr.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,Dr.max),rn.expandByPoint(Ct)):(rn.expandByPoint(Dr.min),rn.expandByPoint(Dr.max))}rn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Ct.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Ct.fromBufferAttribute(o,u),l&&(ji.fromBufferAttribute(e,u),Ct.add(ji)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new D,l[R]=new D;const u=new D,c=new D,f=new D,d=new Re,p=new Re,g=new Re,v=new D,m=new D;function h(R,E,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),d.fromBufferAttribute(a,R),p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,S),c.sub(u),f.sub(u),p.sub(d),g.sub(d);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(C),o[R].add(v),o[E].add(v),o[S].add(v),l[R].add(m),l[E].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,E=x.length;R<E;++R){const S=x[R],C=S.start,z=S.count;for(let O=C,V=C+z;O<V;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const _=new D,M=new D,P=new D,T=new D;function A(R){P.fromBufferAttribute(r,R),T.copy(P);const E=o[R];_.copy(E),_.sub(P.multiplyScalar(P.dot(E))).normalize(),M.crossVectors(T,E);const C=M.dot(l[R])<0?-1:1;s.setXYZW(R,_.x,_.y,_.z,C)}for(let R=0,E=x.length;R<E;++R){const S=x[R],C=S.start,z=S.count;for(let O=C,V=C+z;O<V;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new D,a=new D,s=new D,o=new D,l=new D,u=new D,c=new D,f=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),c.subVectors(s,a),f.subVectors(r,a),c.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),c.subVectors(s,a),f.subVectors(r,a),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let h=0;h<c;h++)d[g++]=u[p++]}return new Pt(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const a=this.morphAttributes;for(const o in a){const l=[],u=a[o];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const u=s[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const a=e.morphAttributes;for(const u in a){const c=[],f=a[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new Ae,fi=new wu,ma=new Sr,ic=new D,ga=new D,va=new D,xa=new D,Ls=new D,Ma=new D,rc=new D,Sa=new D;class ct extends Nt{constructor(e=new kt,t=new Jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Ma.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const c=o[l],f=a[l];c!==0&&(Ls.fromBufferAttribute(f,e),s?Ma.addScaledVector(Ls,c):Ma.addScaledVector(Ls.sub(t),c))}t.add(Ma)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(a),fi.copy(e.ray).recast(e.near),!(ma.containsPoint(fi.origin)===!1&&(fi.intersectSphere(ma,ic)===null||fi.origin.distanceToSquared(ic)>(e.far-e.near)**2))&&(nc.copy(a).invert(),fi.copy(e.ray).applyMatrix4(nc),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,u=a.attributes.uv,c=a.attributes.uv1,f=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=s[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,P=_;M<P;M+=3){const T=o.getX(M),A=o.getX(M+1),R=o.getX(M+2);r=ya(this,h,e,i,u,c,f,T,A,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const x=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);r=ya(this,s,e,i,u,c,f,x,_,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=s[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,P=_;M<P;M+=3){const T=M,A=M+1,R=M+2;r=ya(this,h,e,i,u,c,f,T,A,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const x=m,_=m+1,M=m+2;r=ya(this,s,e,i,u,c,f,x,_,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Hf(n,e,t,i,r,a,s,o){let l;if(e.side===It?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Kn,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Sa);return u<t.near||u>t.far?null:{distance:u,point:Sa.clone(),object:n}}function ya(n,e,t,i,r,a,s,o,l,u){n.getVertexPosition(o,ga),n.getVertexPosition(l,va),n.getVertexPosition(u,xa);const c=Hf(n,e,t,i,ga,va,xa,rc);if(c){const f=new D;_n.getBarycoord(rc,ga,va,xa,f),r&&(c.uv=_n.getInterpolatedAttribute(r,o,l,u,f,new Re)),a&&(c.uv1=_n.getInterpolatedAttribute(a,o,l,u,f,new Re)),s&&(c.normal=_n.getInterpolatedAttribute(s,o,l,u,f,new D),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new D,materialIndex:0};_n.getNormal(ga,va,xa,d.normal),c.face=d,c.barycoord=f}return c}class Tn extends kt{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],u=[],c=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(f,2));function g(v,m,h,x,_,M,P,T,A,R,E){const S=M/A,C=P/R,z=M/2,O=P/2,V=T/2,Y=A+1,H=R+1;let ee=0,W=0;const ae=new D;for(let de=0;de<H;de++){const Ee=de*C-O;for(let He=0;He<Y;He++){const tt=He*S-z;ae[v]=tt*x,ae[m]=Ee*_,ae[h]=V,u.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[h]=T>0?1:-1,c.push(ae.x,ae.y,ae.z),f.push(He/A),f.push(1-de/R),ee+=1}}for(let de=0;de<R;de++)for(let Ee=0;Ee<A;Ee++){const He=d+Ee+Y*de,tt=d+Ee+Y*(de+1),q=d+(Ee+1)+Y*(de+1),ne=d+(Ee+1)+Y*de;l.push(He,tt,ne),l.push(tt,q,ne),W+=6}o.addGroup(p,W,E),p+=W,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=mr(n[t]);for(const r in i)e[r]=i[r]}return e}function Vf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Du(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Ka={clone:mr,merge:Vt};var Gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ft extends Kr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=Vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pu extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new D,ac=new Re,sc=new Re;class on extends Pu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,ac,sc),t.subVectors(sc,ac)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=-90,Qi=1;class Xf extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(Zi,Qi,e,t);r.layers=this.layers,this.add(r);const a=new on(Zi,Qi,e,t);a.layers=this.layers,this.add(a);const s=new on(Zi,Qi,e,t);s.layers=this.layers,this.add(s);const o=new on(Zi,Qi,e,t);o.layers=this.layers,this.add(o);const l=new on(Zi,Qi,e,t);l.layers=this.layers,this.add(l);const u=new on(Zi,Qi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const u of t)this.remove(u);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Lu extends Ut{constructor(e,t,i,r,a,s,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,i,r,a,s,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qf extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Lu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Tn(5,5,5),a=new ft({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:jn});a.uniforms.tEquirect.value=t;const s=new ct(r,a),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=Mt),new Xf(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}const Is=new D,Yf=new D,jf=new ze;class gi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Is.subVectors(i,t).cross(Yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Is),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jf.getNormalMatrix(e),r=this.coplanarPoint(Is).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Sr,_a=new D;class $o{constructor(e=new gi,t=new gi,i=new gi,r=new gi,a=new gi,s=new gi){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xn){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],x=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-a,d-u,m-p,M-h).normalize(),i[1].setComponents(l+a,d+u,m+p,M+h).normalize(),i[2].setComponents(l+s,d+c,m+g,M+x).normalize(),i[3].setComponents(l-s,d-c,m-g,M-x).normalize(),i[4].setComponents(l-o,d-f,m-v,M-_).normalize(),t===Xn)i[5].setComponents(l+o,d+f,m+v,M+_).normalize();else if(t===Va)i[5].setComponents(o,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_a.x=r.normal.x>0?e.max.x:e.min.x,_a.y=r.normal.y>0?e.max.y:e.min.y,_a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Iu(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Zf(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,f=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,o),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:a,update:s}}class Xt extends kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,d=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<c;h++){const x=h*d-s;for(let _=0;_<u;_++){const M=_*f-a;g.push(M,-x,0),v.push(0,0,1),m.push(_/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<o;x++){const _=x+u*h,M=x+u*(h+1),P=x+1+u*(h+1),T=x+1+u*h;p.push(_,M,T),p.push(M,P,T)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
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
#endif`,Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
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
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0=`#ifdef USE_BATCHING
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
#endif`,a0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c0=`#ifdef USE_IRIDESCENCE
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
#endif`,u0=`#ifdef USE_BUMPMAP
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,M0=`#define PI 3.141592653589793
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
} // validated`,S0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y0=`vec3 transformedNormal = objectNormal;
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
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w0="gl_FragColor = linearToOutputTexel( gl_FragColor );",A0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,D0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H0=`uniform bool receiveShadow;
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
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,G0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y0=`PhysicalMaterial material;
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
#endif`,j0=`struct PhysicalMaterial {
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
}`,Z0=`
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
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,td=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ad=`#if defined( USE_POINTS_UV )
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
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
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
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xd=`#ifdef USE_NORMALMAP
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
#endif`,Md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ed=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Id=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ud=`float getShadowMask() {
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
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,Od=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,Bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gd=`#ifdef USE_TRANSMISSION
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
#endif`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qd=`uniform sampler2D t2D;
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`#include <common>
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
}`,np=`#if DEPTH_PACKING == 3200
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
}`,ip=`#define DISTANCE
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
}`,rp=`#define DISTANCE
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`uniform float scale;
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
}`,lp=`uniform vec3 diffuse;
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
}`,cp=`#include <common>
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
}`,up=`uniform vec3 diffuse;
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
}`,hp=`#define LAMBERT
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
}`,fp=`#define LAMBERT
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
}`,dp=`#define MATCAP
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
}`,pp=`#define MATCAP
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
}`,mp=`#define NORMAL
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
}`,gp=`#define NORMAL
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
}`,vp=`#define PHONG
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
}`,xp=`#define PHONG
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
}`,Mp=`#define STANDARD
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
}`,Sp=`#define STANDARD
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
}`,yp=`#define TOON
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
}`,_p=`#define TOON
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
}`,bp=`uniform float size;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Tp=`#include <common>
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
}`,wp=`uniform vec3 color;
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
}`,Ap=`uniform float rotation;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Qf,alphahash_pars_fragment:Kf,alphamap_fragment:Jf,alphamap_pars_fragment:$f,alphatest_fragment:e0,alphatest_pars_fragment:t0,aomap_fragment:n0,aomap_pars_fragment:i0,batching_pars_vertex:r0,batching_vertex:a0,begin_vertex:s0,beginnormal_vertex:o0,bsdfs:l0,iridescence_fragment:c0,bumpmap_pars_fragment:u0,clipping_planes_fragment:h0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:d0,clipping_planes_vertex:p0,color_fragment:m0,color_pars_fragment:g0,color_pars_vertex:v0,color_vertex:x0,common:M0,cube_uv_reflection_fragment:S0,defaultnormal_vertex:y0,displacementmap_pars_vertex:_0,displacementmap_vertex:b0,emissivemap_fragment:E0,emissivemap_pars_fragment:T0,colorspace_fragment:w0,colorspace_pars_fragment:A0,envmap_fragment:R0,envmap_common_pars_fragment:C0,envmap_pars_fragment:D0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:V0,envmap_vertex:L0,fog_vertex:I0,fog_pars_vertex:U0,fog_fragment:N0,fog_pars_fragment:F0,gradientmap_pars_fragment:O0,lightmap_pars_fragment:z0,lights_lambert_fragment:B0,lights_lambert_pars_fragment:k0,lights_pars_begin:H0,lights_toon_fragment:G0,lights_toon_pars_fragment:W0,lights_phong_fragment:X0,lights_phong_pars_fragment:q0,lights_physical_fragment:Y0,lights_physical_pars_fragment:j0,lights_fragment_begin:Z0,lights_fragment_maps:Q0,lights_fragment_end:K0,logdepthbuf_fragment:J0,logdepthbuf_pars_fragment:$0,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:td,map_fragment:nd,map_pars_fragment:id,map_particle_fragment:rd,map_particle_pars_fragment:ad,metalnessmap_fragment:sd,metalnessmap_pars_fragment:od,morphinstance_vertex:ld,morphcolor_vertex:cd,morphnormal_vertex:ud,morphtarget_pars_vertex:hd,morphtarget_vertex:fd,normal_fragment_begin:dd,normal_fragment_maps:pd,normal_pars_fragment:md,normal_pars_vertex:gd,normal_vertex:vd,normalmap_pars_fragment:xd,clearcoat_normal_fragment_begin:Md,clearcoat_normal_fragment_maps:Sd,clearcoat_pars_fragment:yd,iridescence_pars_fragment:_d,opaque_fragment:bd,packing:Ed,premultiplied_alpha_fragment:Td,project_vertex:wd,dithering_fragment:Ad,dithering_pars_fragment:Rd,roughnessmap_fragment:Cd,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:Pd,shadowmap_pars_vertex:Ld,shadowmap_vertex:Id,shadowmask_pars_fragment:Ud,skinbase_vertex:Nd,skinning_pars_vertex:Fd,skinning_vertex:Od,skinnormal_vertex:zd,specularmap_fragment:Bd,specularmap_pars_fragment:kd,tonemapping_fragment:Hd,tonemapping_pars_fragment:Vd,transmission_fragment:Gd,transmission_pars_fragment:Wd,uv_pars_fragment:Xd,uv_pars_vertex:qd,uv_vertex:Yd,worldpos_vertex:jd,background_vert:Zd,background_frag:Qd,backgroundCube_vert:Kd,backgroundCube_frag:Jd,cube_vert:$d,cube_frag:ep,depth_vert:tp,depth_frag:np,distanceRGBA_vert:ip,distanceRGBA_frag:rp,equirect_vert:ap,equirect_frag:sp,linedashed_vert:op,linedashed_frag:lp,meshbasic_vert:cp,meshbasic_frag:up,meshlambert_vert:hp,meshlambert_frag:fp,meshmatcap_vert:dp,meshmatcap_frag:pp,meshnormal_vert:mp,meshnormal_frag:gp,meshphong_vert:vp,meshphong_frag:xp,meshphysical_vert:Mp,meshphysical_frag:Sp,meshtoon_vert:yp,meshtoon_frag:_p,points_vert:bp,points_frag:Ep,shadow_vert:Tp,shadow_frag:wp,sprite_vert:Ap,sprite_frag:Rp},ie={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Rn={basic:{uniforms:Vt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Vt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ve(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Vt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Vt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Vt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ve(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Vt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Vt([ie.points,ie.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Vt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Vt([ie.common,ie.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Vt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Vt([ie.sprite,ie.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Vt([ie.common,ie.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Vt([ie.lights,ie.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Rn.physical={uniforms:Vt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ba={r:0,b:0,g:0},pi=new Yt,Cp=new Ae;function Dp(n,e,t,i,r,a,s){const o=new ve(0);let l=a===!0?0:1,u,c,f=null,d=0,p=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1;const M=g(x);M===null?h(o,l):M&&M.isColor&&(h(M,1),_=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===Za)?(c===void 0&&(c=new ct(new Tn(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:mr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),pi.copy(_.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(pi)),c.material.toneMapped=qe.getTransfer(M.colorSpace)!==$e,(f!==M||d!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new ct(new Xt(2,2),new ft({name:"BackgroundMaterial",uniforms:mr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=qe.getTransfer(M.colorSpace)!==$e,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function h(x,_){x.getRGB(ba,Du(n)),i.buffers.color.setClear(ba.r,ba.g,ba.b,_,s)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(o,l)},render:v,addToRenderList:m}}function Pp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let a=r,s=!1;function o(S,C,z,O,V){let Y=!1;const H=f(O,z,C);a!==H&&(a=H,u(a.object)),Y=p(S,O,z,V),Y&&g(S,O,z,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,M(S,C,z,O),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,C,z){const O=z.wireframe===!0;let V=i[S.id];V===void 0&&(V={},i[S.id]=V);let Y=V[C.id];Y===void 0&&(Y={},V[C.id]=Y);let H=Y[O];return H===void 0&&(H=d(l()),Y[O]=H),H}function d(S){const C=[],z=[],O=[];for(let V=0;V<t;V++)C[V]=0,z[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,C,z,O){const V=a.attributes,Y=C.attributes;let H=0;const ee=z.getAttributes();for(const W in ee)if(ee[W].location>=0){const de=V[W];let Ee=Y[W];if(Ee===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),de===void 0||de.attribute!==Ee||Ee&&de.data!==Ee.data)return!0;H++}return a.attributesNum!==H||a.index!==O}function g(S,C,z,O){const V={},Y=C.attributes;let H=0;const ee=z.getAttributes();for(const W in ee)if(ee[W].location>=0){let de=Y[W];de===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const Ee={};Ee.attribute=de,de&&de.data&&(Ee.data=de.data),V[W]=Ee,H++}a.attributes=V,a.attributesNum=H,a.index=O}function v(){const S=a.newAttributes;for(let C=0,z=S.length;C<z;C++)S[C]=0}function m(S){h(S,0)}function h(S,C){const z=a.newAttributes,O=a.enabledAttributes,V=a.attributeDivisors;z[S]=1,O[S]===0&&(n.enableVertexAttribArray(S),O[S]=1),V[S]!==C&&(n.vertexAttribDivisor(S,C),V[S]=C)}function x(){const S=a.newAttributes,C=a.enabledAttributes;for(let z=0,O=C.length;z<O;z++)C[z]!==S[z]&&(n.disableVertexAttribArray(z),C[z]=0)}function _(S,C,z,O,V,Y,H){H===!0?n.vertexAttribIPointer(S,C,z,V,Y):n.vertexAttribPointer(S,C,z,O,V,Y)}function M(S,C,z,O){v();const V=O.attributes,Y=z.getAttributes(),H=C.defaultAttributeValues;for(const ee in Y){const W=Y[ee];if(W.location>=0){let ae=V[ee];if(ae===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),ae!==void 0){const de=ae.normalized,Ee=ae.itemSize,He=e.get(ae);if(He===void 0)continue;const tt=He.buffer,q=He.type,ne=He.bytesPerElement,ye=q===n.INT||q===n.UNSIGNED_INT||ae.gpuType===Wo;if(ae.isInterleavedBufferAttribute){const se=ae.data,Pe=se.stride,Ne=ae.offset;if(se.isInstancedInterleavedBuffer){for(let Ve=0;Ve<W.locationSize;Ve++)h(W.location+Ve,se.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ve=0;Ve<W.locationSize;Ve++)m(W.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Ve=0;Ve<W.locationSize;Ve++)_(W.location+Ve,Ee/W.locationSize,q,de,Pe*ne,(Ne+Ee/W.locationSize*Ve)*ne,ye)}else{if(ae.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)h(W.location+se,ae.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let se=0;se<W.locationSize;se++)m(W.location+se);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let se=0;se<W.locationSize;se++)_(W.location+se,Ee/W.locationSize,q,de,Ee*ne,Ee/W.locationSize*se*ne,ye)}}else if(H!==void 0){const de=H[ee];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(W.location,de);break;case 3:n.vertexAttrib3fv(W.location,de);break;case 4:n.vertexAttrib4fv(W.location,de);break;default:n.vertexAttrib1fv(W.location,de)}}}}x()}function P(){R();for(const S in i){const C=i[S];for(const z in C){const O=C[z];for(const V in O)c(O[V].object),delete O[V];delete C[z]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const z in C){const O=C[z];for(const V in O)c(O[V].object),delete O[V];delete C[z]}delete i[S.id]}function A(S){for(const C in i){const z=i[C];if(z[S.id]===void 0)continue;const O=z[S.id];for(const V in O)c(O[V].object),delete O[V];delete z[S.id]}}function R(){E(),s=!0,a!==r&&(a=r,u(a.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Lp(n,e,t){let i;function r(u){i=u}function a(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function s(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function o(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];t.update(p,i,1)}function l(u,c,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)s(u[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=c[v]*d[v];t.update(g,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ip(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==bt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Jn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mn&&!R)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:P,maxSamples:T}}function Up(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new gi,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||a&&!m)a?c(null):u();else{const x=a?0:i,_=x*4;let M=h.clippingState||null;l.value=M,M=c(g,d,_,p);for(let P=0;P!==_;++P)M[P]=t[P];h.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,M=p;_!==v;++_,M+=4)s.copy(f[_]).applyMatrix4(x,o),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Np(n){let e=new WeakMap;function t(s,o){return o===so?s.mapping=dr:o===oo&&(s.mapping=pr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===so||o===oo)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new qf(l.height);return u.fromEquirectangularTexture(n,s),e.set(s,u),s.addEventListener("dispose",r),t(u.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Ja extends Pu{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,s=a+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const nr=4,oc=[.125,.215,.35,.446,.526,.582],Si=20,Us=new Ja,lc=new ve;let Ns=null,Fs=0,Os=0,zs=!1;const vi=(1+Math.sqrt(5))/2,Ki=1/vi,cc=[new D(-vi,Ki,0),new D(vi,Ki,0),new D(-Ki,0,vi),new D(Ki,0,vi),new D(0,vi,-Ki),new D(0,vi,Ki),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Oo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ns=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ns,Fs,Os),this._renderer.xr.enabled=zs,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ns=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:dn,format:bt,colorSpace:vr,depthBuffer:!1},r=uc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fp(a)),this._blurMaterial=Op(a,e,t)}return r}_compileMaterial(e){const t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,i,r){const o=new on(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(lc),c.toneMapping=oi,c.autoClear=!1;const p=new Jr({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new ct(new Tn,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(lc),v=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(o.up.set(0,l[h],0),o.lookAt(u[h],0,0)):x===1?(o.up.set(0,0,l[h]),o.lookAt(0,u[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,u[h]));const _=this._cubeSize;Ea(r,x*_,h>2?_:0,_,_),c.setRenderTarget(r),v&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===dr||e.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new ct(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ea(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Us)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=cc[(r-a-1)%cc.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new ct(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Si-1),v=a/g,m=isFinite(a)?1+Math.floor(c*v):Si;m>Si&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const h=[];let x=0;for(let A=0;A<Si;++A){const R=A/v,E=Math.exp(-R*R/2);h.push(E),A===0?x+=E:A<m&&(x+=2*E)}for(let A=0;A<h.length;A++)h[A]=h[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const M=this._sizeLods[r],P=3*M*(r>_-nr?r-_+nr:0),T=4*(this._cubeSize-M);Ea(t,P,T,3*M,2*M),l.setRenderTarget(t),l.render(f,Us)}}function Fp(n){const e=[],t=[],i=[];let r=n;const a=n-nr+1+oc.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-nr?l=oc[s-n+nr-1]:s===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,v=3,m=2,h=1,x=new Float32Array(v*g*p),_=new Float32Array(m*g*p),M=new Float32Array(h*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,R=T>2?0:-1,E=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];x.set(E,v*g*T),_.set(d,m*g*T);const S=[T,T,T,T,T,T];M.set(S,h*g*T)}const P=new kt;P.setAttribute("position",new Pt(x,v)),P.setAttribute("uv",new Pt(_,m)),P.setAttribute("faceIndex",new Pt(M,h)),e.push(P),r>nr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function uc(n,e,t){const i=new Dt(n,e,t);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ea(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Op(n,e,t){const i=new Float32Array(Si),r=new D(0,1,0);return new ft({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:el(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function hc(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function fc(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function zp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===so||l===oo,c=l===dr||l===pr;if(u||c){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Oo(n)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new Oo(n)),f=u?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function a(o){const l=o.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Bp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&zr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kp(n,e,t,i){const r={},a=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}d.removeEventListener("dispose",s),delete r[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,M=x.length;_<M;_+=3){const P=x[_+0],T=x[_+1],A=x[_+2];d.push(P,T,T,A,A,P)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const P=_+0,T=_+1,A=_+2;d.push(P,T,T,A,A,P)}}else return;const m=new(bu(d)?Cu:Ru)(d,1);m.version=v;const h=a.get(f);h&&e.remove(h),a.set(f,m)}function c(f){const d=a.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function Hp(n,e,t){let i;function r(d){i=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function l(d,p){n.drawElements(i,p,a,d*s),t.update(p,i,1)}function u(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,a,d*s,g),t.update(p,i,g))}function c(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function f(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)u(d[h]/s,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,d,0,v,0,g);let h=0;for(let x=0;x<g;x++)h+=p[x]*v[x];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Vp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Gp(n,e,t){const i=new WeakMap,r=new et;function a(s,o,l){const u=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;p===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let M=o.attributes.position.count*_,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*P*4*f),A=new Tu(T,M,P,f);A.type=mn,A.needsUpdate=!0;const R=_*4;for(let S=0;S<f;S++){const C=m[S],z=h[S],O=x[S],V=M*P*4*S;for(let Y=0;Y<C.count;Y++){const H=Y*R;p===!0&&(r.fromBufferAttribute(C,Y),T[V+H+0]=r.x,T[V+H+1]=r.y,T[V+H+2]=r.z,T[V+H+3]=0),g===!0&&(r.fromBufferAttribute(z,Y),T[V+H+4]=r.x,T[V+H+5]=r.y,T[V+H+6]=r.z,T[V+H+7]=0),v===!0&&(r.fromBufferAttribute(O,Y),T[V+H+8]=r.x,T[V+H+9]=r.y,T[V+H+10]=r.z,T[V+H+11]=O.itemSize===4?r.w:1)}}d={count:f,texture:A,size:new Re(M,P)},i.set(o,d),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let p=0;for(let v=0;v<u.length;v++)p+=u[v];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:a}}function Wp(n,e,t,i){let r=new WeakMap;function a(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function s(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:s}}class Gr extends Ut{constructor(e,t,i,r,a,s,o,l,u,c=li){if(c!==li&&c!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===li&&(i=Dn),i===void 0&&c===Pi&&(i=Di),super(null,r,a,s,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:lt,this.minFilter=l!==void 0?l:lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Uu=new Ut,dc=new Gr(1,1),Nu=new Tu,Fu=new Pf,Ou=new Lu,pc=[],mc=[],gc=new Float32Array(16),vc=new Float32Array(9),xc=new Float32Array(4);function yr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=pc[r];if(a===void 0&&(a=new Float32Array(r),pc[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $a(n,e){let t=mc[e];t===void 0&&(t=new Int32Array(e),mc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function Yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function Zp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,i))return;xc.set(i),n.uniformMatrix2fv(this.addr,!1,xc),At(t,i)}}function Qp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,i))return;vc.set(i),n.uniformMatrix3fv(this.addr,!1,vc),At(t,i)}}function Kp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,i))return;gc.set(i),n.uniformMatrix4fv(this.addr,!1,gc),At(t,i)}}function Jp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $p(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function em(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function nm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function rm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function sm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(dc.compareFunction=_u,a=dc):a=Uu,t.setTexture2D(e||a,r)}function om(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Fu,r)}function lm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ou,r)}function cm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Nu,r)}function um(n){switch(n){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return jp;case 35674:return Zp;case 35675:return Qp;case 35676:return Kp;case 5124:case 35670:return Jp;case 35667:case 35671:return $p;case 35668:case 35672:return em;case 35669:case 35673:return tm;case 5125:return nm;case 36294:return im;case 36295:return rm;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}function hm(n,e){n.uniform1fv(this.addr,e)}function fm(n,e){const t=yr(e,this.size,2);n.uniform2fv(this.addr,t)}function dm(n,e){const t=yr(e,this.size,3);n.uniform3fv(this.addr,t)}function pm(n,e){const t=yr(e,this.size,4);n.uniform4fv(this.addr,t)}function mm(n,e){const t=yr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gm(n,e){const t=yr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vm(n,e){const t=yr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xm(n,e){n.uniform1iv(this.addr,e)}function Mm(n,e){n.uniform2iv(this.addr,e)}function Sm(n,e){n.uniform3iv(this.addr,e)}function ym(n,e){n.uniform4iv(this.addr,e)}function _m(n,e){n.uniform1uiv(this.addr,e)}function bm(n,e){n.uniform2uiv(this.addr,e)}function Em(n,e){n.uniform3uiv(this.addr,e)}function Tm(n,e){n.uniform4uiv(this.addr,e)}function wm(n,e,t){const i=this.cache,r=e.length,a=$a(t,r);wt(i,a)||(n.uniform1iv(this.addr,a),At(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Uu,a[s])}function Am(n,e,t){const i=this.cache,r=e.length,a=$a(t,r);wt(i,a)||(n.uniform1iv(this.addr,a),At(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Fu,a[s])}function Rm(n,e,t){const i=this.cache,r=e.length,a=$a(t,r);wt(i,a)||(n.uniform1iv(this.addr,a),At(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Ou,a[s])}function Cm(n,e,t){const i=this.cache,r=e.length,a=$a(t,r);wt(i,a)||(n.uniform1iv(this.addr,a),At(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Nu,a[s])}function Dm(n){switch(n){case 5126:return hm;case 35664:return fm;case 35665:return dm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return vm;case 5124:case 35670:return xm;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return ym;case 5125:return _m;case 36294:return bm;case 36295:return Em;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}class Pm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=um(t.type)}}class Lm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dm(t.type)}}class Im{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const Bs=/(\w+)(\])?(\[|\.)?/g;function Mc(n,e){n.seq.push(e),n.map[e.id]=e}function Um(n,e,t){const i=n.name,r=i.length;for(Bs.lastIndex=0;;){const a=Bs.exec(i),s=Bs.lastIndex;let o=a[1];const l=a[2]==="]",u=a[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===r){Mc(t,u===void 0?new Pm(o,n,e):new Lm(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Im(o),Mc(t,f)),t=f}}}class Oa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Um(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Sc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Nm=37297;let Fm=0;function Om(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const yc=new ze;function zm(n){qe._getMatrix(yc,qe.workingColorSpace,n);const e=`mat3( ${yc.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case Qa:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _c(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Om(n.getShaderSource(e),s)}else return r}function Bm(n,e){const t=zm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function km(n,e){let t;switch(e){case su:t="Linear";break;case ou:t="Reinhard";break;case lu:t="Cineon";break;case cu:t="ACESFilmic";break;case uu:t="AgX";break;case Go:t="Neutral";break;case jh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ta=new D;function Hm(){qe.getLuminanceCoefficients(Ta);const n=Ta.x.toFixed(4),e=Ta.y.toFixed(4),t=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function Gm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Wm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Br(n){return n!==""}function bc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ec(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(n){return n.replace(Xm,Ym)}const qm=new Map;function Ym(n,e){let t=ke[e];if(t===void 0){const i=qm.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zo(t)}const jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(n){return n.replace(jm,Zm)}function Zm(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function wc(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ru?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Km(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function $m(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case au:e="ENVMAP_BLENDING_MULTIPLY";break;case qh:e="ENVMAP_BLENDING_MIX";break;case Yh:e="ENVMAP_BLENDING_ADD";break}return e}function e1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function t1(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Qm(t),u=Km(t),c=Jm(t),f=$m(t),d=e1(t),p=Vm(t),g=Gm(a),v=r.createProgram();let m,h,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Br).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Br).join(`
`),h.length>0&&(h+=`
`)):(m=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),h=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?ke.tonemapping_pars_fragment:"",t.toneMapping!==oi?km("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Bm("linearToOutputTexel",t.outputColorSpace),Hm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),s=zo(s),s=bc(s,t),s=Ec(s,t),o=zo(o),o=bc(o,t),o=Ec(o,t),s=Tc(s),o=Tc(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=x+m+s,M=x+h+o,P=Sc(r,r.VERTEX_SHADER,_),T=Sc(r,r.FRAGMENT_SHADER,M);r.attachShader(v,P),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(C){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(P).trim(),V=r.getShaderInfoLog(T).trim();let Y=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,P,T);else{const ee=_c(r,P,"vertex"),W=_c(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+ee+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||V==="")&&(H=!1);H&&(C.diagnostics={runnable:Y,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:h}})}r.deleteShader(P),r.deleteShader(T),R=new Oa(r,v),E=Wm(r,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,Nm)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=T,this}let n1=0;class i1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new r1(e),t.set(e,i)),i}}class r1{constructor(e){this.id=n1++,this.code=e,this.usedTimes=0}}function a1(n,e,t,i,r,a,s){const o=new Jo,l=new i1,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,S,C,z,O){const V=z.fog,Y=O.geometry,H=E.isMeshStandardMaterial?z.environment:null,ee=(E.isMeshStandardMaterial?t:e).get(E.envMap||H),W=ee&&ee.mapping===Za?ee.image.height:null,ae=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ee=de!==void 0?de.length:0;let He=0;Y.morphAttributes.position!==void 0&&(He=1),Y.morphAttributes.normal!==void 0&&(He=2),Y.morphAttributes.color!==void 0&&(He=3);let tt,q,ne,ye;if(ae){const Je=Rn[ae];tt=Je.vertexShader,q=Je.fragmentShader}else tt=E.vertexShader,q=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),ye=l.getFragmentShaderID(E);const se=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Ne=O.isInstancedMesh===!0,Ve=O.isBatchedMesh===!0,ht=!!E.map,Ye=!!E.matcap,gt=!!ee,N=!!E.aoMap,cn=!!E.lightMap,Ge=!!E.bumpMap,We=!!E.normalMap,Ce=!!E.displacementMap,at=!!E.emissiveMap,we=!!E.metalnessMap,w=!!E.roughnessMap,y=E.anisotropy>0,F=E.clearcoat>0,j=E.dispersion>0,K=E.iridescence>0,X=E.sheen>0,_e=E.transmission>0,oe=y&&!!E.anisotropyMap,pe=F&&!!E.clearcoatMap,je=F&&!!E.clearcoatNormalMap,$=F&&!!E.clearcoatRoughnessMap,me=K&&!!E.iridescenceMap,De=K&&!!E.iridescenceThicknessMap,Le=X&&!!E.sheenColorMap,ge=X&&!!E.sheenRoughnessMap,Xe=!!E.specularMap,Be=!!E.specularColorMap,it=!!E.specularIntensityMap,L=_e&&!!E.transmissionMap,re=_e&&!!E.thicknessMap,G=!!E.gradientMap,Z=!!E.alphaMap,ue=E.alphaTest>0,le=!!E.alphaHash,Fe=!!E.extensions;let dt=oi;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(dt=n.toneMapping);const Ft={shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:tt,fragmentShader:q,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:vr,alphaToCoverage:!!E.alphaToCoverage,map:ht,matcap:Ye,envMap:gt,envMapMode:gt&&ee.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:cn,bumpMap:Ge,normalMap:We,displacementMap:d&&Ce,emissiveMap:at,normalMapObjectSpace:We&&E.normalMapType===Jh,normalMapTangentSpace:We&&E.normalMapType===yu,metalnessMap:we,roughnessMap:w,anisotropy:y,anisotropyMap:oe,clearcoat:F,clearcoatMap:pe,clearcoatNormalMap:je,clearcoatRoughnessMap:$,dispersion:j,iridescence:K,iridescenceMap:me,iridescenceThicknessMap:De,sheen:X,sheenColorMap:Le,sheenRoughnessMap:ge,specularMap:Xe,specularColorMap:Be,specularIntensityMap:it,transmission:_e,transmissionMap:L,thicknessMap:re,gradientMap:G,opaque:E.transparent===!1&&E.blending===ar&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:ue,alphaHash:le,combine:E.combine,mapUv:ht&&v(E.map.channel),aoMapUv:N&&v(E.aoMap.channel),lightMapUv:cn&&v(E.lightMap.channel),bumpMapUv:Ge&&v(E.bumpMap.channel),normalMapUv:We&&v(E.normalMap.channel),displacementMapUv:Ce&&v(E.displacementMap.channel),emissiveMapUv:at&&v(E.emissiveMap.channel),metalnessMapUv:we&&v(E.metalnessMap.channel),roughnessMapUv:w&&v(E.roughnessMap.channel),anisotropyMapUv:oe&&v(E.anisotropyMap.channel),clearcoatMapUv:pe&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(E.sheenRoughnessMap.channel),specularMapUv:Xe&&v(E.specularMap.channel),specularColorMapUv:Be&&v(E.specularColorMap.channel),specularIntensityMapUv:it&&v(E.specularIntensityMap.channel),transmissionMapUv:L&&v(E.transmissionMap.channel),thicknessMapUv:re&&v(E.thicknessMap.channel),alphaMapUv:Z&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(We||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(ht||Z),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Pe,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:He,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,decodeVideoTexture:ht&&E.map.isVideoTexture===!0&&qe.getTransfer(E.map.colorSpace)===$e,decodeVideoTextureEmissive:at&&E.emissiveMap.isVideoTexture===!0&&qe.getTransfer(E.emissiveMap.colorSpace)===$e,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===St,flipSided:E.side===It,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ft.vertexUv1s=u.has(1),Ft.vertexUv2s=u.has(2),Ft.vertexUv3s=u.has(3),u.clear(),Ft}function h(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)S.push(C),S.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(x(S,E),_(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function x(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function _(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){const S=g[E.type];let C;if(S){const z=Rn[S];C=Ka.clone(z.uniforms)}else C=E.uniforms;return C}function P(E,S){let C;for(let z=0,O=c.length;z<O;z++){const V=c[z];if(V.cacheKey===S){C=V,++C.usedTimes;break}}return C===void 0&&(C=new t1(n,S,E,a),c.push(C)),C}function T(E){if(--E.usedTimes===0){const S=c.indexOf(E);c[S]=c[c.length-1],c.pop(),E.destroy()}}function A(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:P,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:R}}function s1(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function o1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ac(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rc(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(f,d,p,g,v,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function o(f,d,p,g,v,m){const h=s(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,g,v,m){const h=s(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||o1),i.length>1&&i.sort(d||Ac),r.length>1&&r.sort(d||Ac)}function c(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:c,sort:u}}function l1(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new Rc,n.set(i,[s])):r>=a.length?(s=new Rc,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function c1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ve};break;case"SpotLight":t={position:new D,direction:new D,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function u1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let h1=0;function f1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function d1(n){const e=new c1,t=u1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new D);const r=new D,a=new Ae,s=new Ae;function o(u){let c=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,x=0,_=0,M=0,P=0,T=0,A=0;u.sort(f1);for(let E=0,S=u.length;E<S;E++){const C=u[E],z=C.color,O=C.intensity,V=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=z.r*O,f+=z.g*O,d+=z.b*O;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],O);A++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,W=t.get(C);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=C.shadow.matrix,x++}i.directional[p]=H,p++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(z).multiplyScalar(O),H.distance=V,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[v]=H;const ee=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,ee.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[v]=ee.matrix,C.castShadow){const W=t.get(C);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=Y,M++}v++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(z).multiplyScalar(O),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const ee=C.shadow,W=t.get(C);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=C.shadow.matrix,_++}i.point[g]=H,g++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(O),H.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[h]=H,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==x||R.numPointShadows!==_||R.numSpotShadows!==M||R.numSpotMaps!==P||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=x,R.numPointShadows=_,R.numSpotShadows=M,R.numSpotMaps=P,R.numLightProbes=A,i.version=h1++)}function l(u,c){let f=0,d=0,p=0,g=0,v=0;const m=c.matrixWorldInverse;for(let h=0,x=u.length;h<x;h++){const _=u[h];if(_.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),s.identity(),a.copy(_.matrixWorld),a.premultiply(m),s.extractRotation(a),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),g++}else if(_.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Cc(n){const e=new d1(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function a(c){t.push(c)}function s(c){i.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function p1(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Cc(n),e.set(r,[o])):a>=s.length?(o=new Cc(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class m1 extends Kr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g1 extends Kr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const v1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x1=`uniform sampler2D shadow_pass;
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
}`;function M1(n,e,t){let i=new $o;const r=new Re,a=new Re,s=new et,o=new m1({depthPacking:Kh}),l=new g1,u={},c=t.maxTextureSize,f={[Kn]:It,[It]:Kn,[St]:St},d=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:v1,fragmentShader:x1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ct(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let h=this.type;this.render=function(T,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(jn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=h!==Gn&&this.type===Gn,V=h===Gn&&this.type!==Gn;for(let Y=0,H=T.length;Y<H;Y++){const ee=T[Y],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ae=W.getFrameExtents();if(r.multiply(ae),a.copy(W.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(a.x=Math.floor(c/ae.x),r.x=a.x*ae.x,W.mapSize.x=a.x),r.y>c&&(a.y=Math.floor(c/ae.y),r.y=a.y*ae.y,W.mapSize.y=a.y)),W.map===null||O===!0||V===!0){const Ee=this.type!==Gn?{minFilter:lt,magFilter:lt}:{};W.map!==null&&W.map.dispose(),W.map=new Dt(r.x,r.y,Ee),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const de=W.getViewportCount();for(let Ee=0;Ee<de;Ee++){const He=W.getViewport(Ee);s.set(a.x*He.x,a.y*He.y,a.x*He.z,a.y*He.w),z.viewport(s),W.updateMatrices(ee,Ee),i=W.getFrustum(),M(A,R,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===Gn&&x(W,R),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,C)};function x(T,A){const R=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Dt(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,R,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,R,p,v,null)}function _(T,A,R,E){let S=null;const C=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)S=C;else if(S=R.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=S.uuid,O=A.uuid;let V=u[z];V===void 0&&(V={},u[z]=V);let Y=V[O];Y===void 0&&(Y=S.clone(),V[O]=Y,A.addEventListener("dispose",P)),S=Y}if(S.visible=A.visible,S.wireframe=A.wireframe,E===Gn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=n.properties.get(S);z.light=R}return S}function M(T,A,R,E,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Gn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const O=e.update(T),V=T.material;if(Array.isArray(V)){const Y=O.groups;for(let H=0,ee=Y.length;H<ee;H++){const W=Y[H],ae=V[W.materialIndex];if(ae&&ae.visible){const de=_(T,ae,E,S);T.onBeforeShadow(n,T,A,R,O,de,W),n.renderBufferDirect(R,null,O,de,T,W),T.onAfterShadow(n,T,A,R,O,de,W)}}}else if(V.visible){const Y=_(T,V,E,S);T.onBeforeShadow(n,T,A,R,O,Y,null),n.renderBufferDirect(R,null,O,Y,T,null),T.onAfterShadow(n,T,A,R,O,Y,null)}}const z=T.children;for(let O=0,V=z.length;O<V;O++)M(z[O],A,R,E,S)}function P(T){T.target.removeEventListener("dispose",P);for(const R in u){const E=u[R],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const S1={[$s]:eo,[to]:ro,[no]:ao,[fr]:io,[eo]:$s,[ro]:to,[ao]:no,[io]:fr};function y1(n,e){function t(){let L=!1;const re=new et;let G=null;const Z=new et(0,0,0,0);return{setMask:function(ue){G!==ue&&!L&&(n.colorMask(ue,ue,ue,ue),G=ue)},setLocked:function(ue){L=ue},setClear:function(ue,le,Fe,dt,Ft){Ft===!0&&(ue*=dt,le*=dt,Fe*=dt),re.set(ue,le,Fe,dt),Z.equals(re)===!1&&(n.clearColor(ue,le,Fe,dt),Z.copy(re))},reset:function(){L=!1,G=null,Z.set(-1,0,0,0)}}}function i(){let L=!1,re=!1,G=null,Z=null,ue=null;return{setReversed:function(le){if(re!==le){const Fe=e.get("EXT_clip_control");re?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const dt=ue;ue=null,this.setClear(dt)}re=le},getReversed:function(){return re},setTest:function(le){le?se(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(le){G!==le&&!L&&(n.depthMask(le),G=le)},setFunc:function(le){if(re&&(le=S1[le]),Z!==le){switch(le){case $s:n.depthFunc(n.NEVER);break;case eo:n.depthFunc(n.ALWAYS);break;case to:n.depthFunc(n.LESS);break;case fr:n.depthFunc(n.LEQUAL);break;case no:n.depthFunc(n.EQUAL);break;case io:n.depthFunc(n.GEQUAL);break;case ro:n.depthFunc(n.GREATER);break;case ao:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=le}},setLocked:function(le){L=le},setClear:function(le){ue!==le&&(re&&(le=1-le),n.clearDepth(le),ue=le)},reset:function(){L=!1,G=null,Z=null,ue=null,re=!1}}}function r(){let L=!1,re=null,G=null,Z=null,ue=null,le=null,Fe=null,dt=null,Ft=null;return{setTest:function(Je){L||(Je?se(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(Je){re!==Je&&!L&&(n.stencilMask(Je),re=Je)},setFunc:function(Je,gn,Fn){(G!==Je||Z!==gn||ue!==Fn)&&(n.stencilFunc(Je,gn,Fn),G=Je,Z=gn,ue=Fn)},setOp:function(Je,gn,Fn){(le!==Je||Fe!==gn||dt!==Fn)&&(n.stencilOp(Je,gn,Fn),le=Je,Fe=gn,dt=Fn)},setLocked:function(Je){L=Je},setClear:function(Je){Ft!==Je&&(n.clearStencil(Je),Ft=Je)},reset:function(){L=!1,re=null,G=null,Z=null,ue=null,le=null,Fe=null,dt=null,Ft=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,x=null,_=null,M=null,P=null,T=null,A=new ve(0,0,0),R=0,E=!1,S=null,C=null,z=null,O=null,V=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ee=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=ee>=2);let ae=null,de={};const Ee=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),tt=new et().fromArray(Ee),q=new et().fromArray(He);function ne(L,re,G,Z){const ue=new Uint8Array(4),le=n.createTexture();n.bindTexture(L,le),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<G;Fe++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(re+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return le}const ye={};ye[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),se(n.DEPTH_TEST),s.setFunc(fr),Ge(!1),We(Ul),se(n.CULL_FACE),N(jn);function se(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function Pe(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function Ne(L,re){return f[L]!==re?(n.bindFramebuffer(L,re),f[L]=re,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=re),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Ve(L,re){let G=p,Z=!1;if(L){G=d.get(re),G===void 0&&(G=[],d.set(re,G));const ue=L.textures;if(G.length!==ue.length||G[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Fe=ue.length;le<Fe;le++)G[le]=n.COLOR_ATTACHMENT0+le;G.length=ue.length,Z=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,Z=!0);Z&&n.drawBuffers(G)}function ht(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const Ye={[Mi]:n.FUNC_ADD,[Ch]:n.FUNC_SUBTRACT,[Dh]:n.FUNC_REVERSE_SUBTRACT};Ye[Ph]=n.MIN,Ye[Lh]=n.MAX;const gt={[Ih]:n.ZERO,[Uh]:n.ONE,[Nh]:n.SRC_COLOR,[Ks]:n.SRC_ALPHA,[Hh]:n.SRC_ALPHA_SATURATE,[Bh]:n.DST_COLOR,[Oh]:n.DST_ALPHA,[Fh]:n.ONE_MINUS_SRC_COLOR,[Js]:n.ONE_MINUS_SRC_ALPHA,[kh]:n.ONE_MINUS_DST_COLOR,[zh]:n.ONE_MINUS_DST_ALPHA,[Vh]:n.CONSTANT_COLOR,[Gh]:n.ONE_MINUS_CONSTANT_COLOR,[Wh]:n.CONSTANT_ALPHA,[Xh]:n.ONE_MINUS_CONSTANT_ALPHA};function N(L,re,G,Z,ue,le,Fe,dt,Ft,Je){if(L===jn){v===!0&&(Pe(n.BLEND),v=!1);return}if(v===!1&&(se(n.BLEND),v=!0),L!==Rh){if(L!==m||Je!==E){if((h!==Mi||M!==Mi)&&(n.blendEquation(n.FUNC_ADD),h=Mi,M=Mi),Je)switch(L){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nl:n.blendFunc(n.ONE,n.ONE);break;case Fl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ol:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Fl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ol:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,_=null,P=null,T=null,A.set(0,0,0),R=0,m=L,E=Je}return}ue=ue||re,le=le||G,Fe=Fe||Z,(re!==h||ue!==M)&&(n.blendEquationSeparate(Ye[re],Ye[ue]),h=re,M=ue),(G!==x||Z!==_||le!==P||Fe!==T)&&(n.blendFuncSeparate(gt[G],gt[Z],gt[le],gt[Fe]),x=G,_=Z,P=le,T=Fe),(dt.equals(A)===!1||Ft!==R)&&(n.blendColor(dt.r,dt.g,dt.b,Ft),A.copy(dt),R=Ft),m=L,E=!1}function cn(L,re){L.side===St?Pe(n.CULL_FACE):se(n.CULL_FACE);let G=L.side===It;re&&(G=!G),Ge(G),L.blending===ar&&L.transparent===!1?N(jn):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),a.setMask(L.colorWrite);const Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),at(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(L){S!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),S=L)}function We(L){L!==wh?(se(n.CULL_FACE),L!==C&&(L===Ul?n.cullFace(n.BACK):L===Ah?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),C=L}function Ce(L){L!==z&&(H&&n.lineWidth(L),z=L)}function at(L,re,G){L?(se(n.POLYGON_OFFSET_FILL),(O!==re||V!==G)&&(n.polygonOffset(re,G),O=re,V=G)):Pe(n.POLYGON_OFFSET_FILL)}function we(L){L?se(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function w(L){L===void 0&&(L=n.TEXTURE0+Y-1),ae!==L&&(n.activeTexture(L),ae=L)}function y(L,re,G){G===void 0&&(ae===null?G=n.TEXTURE0+Y-1:G=ae);let Z=de[G];Z===void 0&&(Z={type:void 0,texture:void 0},de[G]=Z),(Z.type!==L||Z.texture!==re)&&(ae!==G&&(n.activeTexture(G),ae=G),n.bindTexture(L,re||ye[L]),Z.type=L,Z.texture=re)}function F(){const L=de[ae];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(L){tt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),tt.copy(L))}function ge(L){q.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function Xe(L,re){let G=u.get(re);G===void 0&&(G=new WeakMap,u.set(re,G));let Z=G.get(L);Z===void 0&&(Z=n.getUniformBlockIndex(re,L.name),G.set(L,Z))}function Be(L,re){const Z=u.get(re).get(L);l.get(re)!==Z&&(n.uniformBlockBinding(re,Z,L.__bindingPointIndex),l.set(re,Z))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ae=null,de={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,x=null,_=null,M=null,P=null,T=null,A=new ve(0,0,0),R=0,E=!1,S=null,C=null,z=null,O=null,V=null,tt.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:se,disable:Pe,bindFramebuffer:Ne,drawBuffers:Ve,useProgram:ht,setBlending:N,setMaterial:cn,setFlipSided:Ge,setCullFace:We,setLineWidth:Ce,setPolygonOffset:at,setScissorTest:we,activeTexture:w,bindTexture:y,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:K,texImage2D:me,texImage3D:De,updateUBOMapping:Xe,uniformBlockBinding:Be,texStorage2D:je,texStorage3D:$,texSubImage2D:X,texSubImage3D:_e,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:Le,viewport:ge,reset:it}}function Dc(n,e,t,i){const r=_1(i);switch(t){case mu:return n*e;case vu:return n*e;case xu:return n*e*2;case Qr:return n*e/r.components*r.byteLength;case Yo:return n*e/r.components*r.byteLength;case Mu:return n*e*2/r.components*r.byteLength;case jo:return n*e*2/r.components*r.byteLength;case gu:return n*e*3/r.components*r.byteLength;case bt:return n*e*4/r.components*r.byteLength;case Zo:return n*e*4/r.components*r.byteLength;case La:case Ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uo:case fo:return Math.max(n,16)*Math.max(e,8)/4;case co:case ho:return Math.max(n,8)*Math.max(e,8)/2;case po:case mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case So:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _o:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case To:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Co:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Do:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fa:case Po:case Lo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Su:case Io:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Uo:case No:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _1(n){switch(n){case Jn:case fu:return{byteLength:1,components:1};case Xr:case du:case dn:return{byteLength:2,components:1};case Xo:case qo:return{byteLength:2,components:4};case Dn:case Wo:case mn:return{byteLength:4,components:1};case pu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function b1(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Re,c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return p?new OffscreenCanvas(w,y):Yr("canvas")}function v(w,y,F){let j=1;const K=we(w);if((K.width>F||K.height>F)&&(j=F/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor(j*K.width),_e=Math.floor(j*K.height);f===void 0&&(f=g(X,_e));const oe=y?g(X,_e):f;return oe.width=X,oe.height=_e,oe.getContext("2d").drawImage(w,0,0,X,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+_e+")."),oe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function h(w){n.generateMipmap(w)}function x(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(w,y,F,j,K=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=y;if(y===n.RED&&(F===n.FLOAT&&(X=n.R32F),F===n.HALF_FLOAT&&(X=n.R16F),F===n.UNSIGNED_BYTE&&(X=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.R8UI),F===n.UNSIGNED_SHORT&&(X=n.R16UI),F===n.UNSIGNED_INT&&(X=n.R32UI),F===n.BYTE&&(X=n.R8I),F===n.SHORT&&(X=n.R16I),F===n.INT&&(X=n.R32I)),y===n.RG&&(F===n.FLOAT&&(X=n.RG32F),F===n.HALF_FLOAT&&(X=n.RG16F),F===n.UNSIGNED_BYTE&&(X=n.RG8)),y===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RG8UI),F===n.UNSIGNED_SHORT&&(X=n.RG16UI),F===n.UNSIGNED_INT&&(X=n.RG32UI),F===n.BYTE&&(X=n.RG8I),F===n.SHORT&&(X=n.RG16I),F===n.INT&&(X=n.RG32I)),y===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGB8UI),F===n.UNSIGNED_SHORT&&(X=n.RGB16UI),F===n.UNSIGNED_INT&&(X=n.RGB32UI),F===n.BYTE&&(X=n.RGB8I),F===n.SHORT&&(X=n.RGB16I),F===n.INT&&(X=n.RGB32I)),y===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),F===n.UNSIGNED_INT&&(X=n.RGBA32UI),F===n.BYTE&&(X=n.RGBA8I),F===n.SHORT&&(X=n.RGBA16I),F===n.INT&&(X=n.RGBA32I)),y===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),y===n.RGBA){const _e=K?Qa:qe.getTransfer(j);F===n.FLOAT&&(X=n.RGBA32F),F===n.HALF_FLOAT&&(X=n.RGBA16F),F===n.UNSIGNED_BYTE&&(X=_e===$e?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(w,y){let F;return w?y===null||y===Dn||y===Di?F=n.DEPTH24_STENCIL8:y===mn?F=n.DEPTH32F_STENCIL8:y===Xr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Dn||y===Di?F=n.DEPTH_COMPONENT24:y===mn?F=n.DEPTH_COMPONENT32F:y===Xr&&(F=n.DEPTH_COMPONENT16),F}function P(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==lt&&w.minFilter!==Mt?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function T(w){const y=w.target;y.removeEventListener("dispose",T),R(y),y.isVideoTexture&&c.delete(y)}function A(w){const y=w.target;y.removeEventListener("dispose",A),S(y)}function R(w){const y=i.get(w);if(y.__webglInit===void 0)return;const F=w.source,j=d.get(F);if(j){const K=j[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(w),Object.keys(j).length===0&&d.delete(F)}i.remove(w)}function E(w){const y=i.get(w);n.deleteTexture(y.__webglTexture);const F=w.source,j=d.get(F);delete j[y.__cacheKey],s.memory.textures--}function S(w){const y=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let K=0;K<y.__webglFramebuffer[j].length;K++)n.deleteFramebuffer(y.__webglFramebuffer[j][K]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=w.textures;for(let j=0,K=F.length;j<K;j++){const X=i.get(F[j]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),s.memory.textures--),i.remove(F[j])}i.remove(w)}let C=0;function z(){C=0}function O(){const w=C;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),C+=1,w}function V(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function Y(w,y){const F=i.get(w);if(w.isVideoTexture&&Ce(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,w,y);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function H(w,y){const F=i.get(w);if(w.version>0&&F.__version!==w.version){q(F,w,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function ee(w,y){const F=i.get(w);if(w.version>0&&F.__version!==w.version){q(F,w,y);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function W(w,y){const F=i.get(w);if(w.version>0&&F.__version!==w.version){ne(F,w,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}const ae={[Ci]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[lo]:n.MIRRORED_REPEAT},de={[lt]:n.NEAREST,[Zh]:n.NEAREST_MIPMAP_NEAREST,[aa]:n.NEAREST_MIPMAP_LINEAR,[Mt]:n.LINEAR,[ds]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},Ee={[$h]:n.NEVER,[sf]:n.ALWAYS,[ef]:n.LESS,[_u]:n.LEQUAL,[tf]:n.EQUAL,[af]:n.GEQUAL,[nf]:n.GREATER,[rf]:n.NOTEQUAL};function He(w,y){if(y.type===mn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Mt||y.magFilter===ds||y.magFilter===aa||y.magFilter===bi||y.minFilter===Mt||y.minFilter===ds||y.minFilter===aa||y.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ae[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ae[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ae[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,de[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,de[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===lt||y.minFilter!==aa&&y.minFilter!==bi||y.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function tt(w,y){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",T));const j=y.source;let K=d.get(j);K===void 0&&(K={},d.set(j,K));const X=V(y);if(X!==w.__cacheKey){K[X]===void 0&&(K[X]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),K[X].usedTimes++;const _e=K[w.__cacheKey];_e!==void 0&&(K[w.__cacheKey].usedTimes--,_e.usedTimes===0&&E(y)),w.__cacheKey=X,w.__webglTexture=K[X].texture}return F}function q(w,y,F){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);const K=tt(w,y),X=y.source;t.bindTexture(j,w.__webglTexture,n.TEXTURE0+F);const _e=i.get(X);if(X.version!==_e.__version||K===!0){t.activeTexture(n.TEXTURE0+F);const oe=qe.getPrimaries(qe.workingColorSpace),pe=y.colorSpace===Wn?null:qe.getPrimaries(y.colorSpace),je=y.colorSpace===Wn||oe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let $=v(y.image,!1,r.maxTextureSize);$=at(y,$);const me=a.convert(y.format,y.colorSpace),De=a.convert(y.type);let Le=_(y.internalFormat,me,De,y.colorSpace,y.isVideoTexture);He(j,y);let ge;const Xe=y.mipmaps,Be=y.isVideoTexture!==!0,it=_e.__version===void 0||K===!0,L=X.dataReady,re=P(y,$);if(y.isDepthTexture)Le=M(y.format===Pi,y.type),it&&(Be?t.texStorage2D(n.TEXTURE_2D,1,Le,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,Le,$.width,$.height,0,me,De,null));else if(y.isDataTexture)if(Xe.length>0){Be&&it&&t.texStorage2D(n.TEXTURE_2D,re,Le,Xe[0].width,Xe[0].height);for(let G=0,Z=Xe.length;G<Z;G++)ge=Xe[G],Be?L&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ge.width,ge.height,me,De,ge.data):t.texImage2D(n.TEXTURE_2D,G,Le,ge.width,ge.height,0,me,De,ge.data);y.generateMipmaps=!1}else Be?(it&&t.texStorage2D(n.TEXTURE_2D,re,Le,$.width,$.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,me,De,$.data)):t.texImage2D(n.TEXTURE_2D,0,Le,$.width,$.height,0,me,De,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Be&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,Le,Xe[0].width,Xe[0].height,$.depth);for(let G=0,Z=Xe.length;G<Z;G++)if(ge=Xe[G],y.format!==bt)if(me!==null)if(Be){if(L)if(y.layerUpdates.size>0){const ue=Dc(ge.width,ge.height,y.format,y.type);for(const le of y.layerUpdates){const Fe=ge.data.subarray(le*ue/ge.data.BYTES_PER_ELEMENT,(le+1)*ue/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,le,ge.width,ge.height,1,me,Fe)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,ge.width,ge.height,$.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,Le,ge.width,ge.height,$.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,ge.width,ge.height,$.depth,me,De,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,Le,ge.width,ge.height,$.depth,0,me,De,ge.data)}else{Be&&it&&t.texStorage2D(n.TEXTURE_2D,re,Le,Xe[0].width,Xe[0].height);for(let G=0,Z=Xe.length;G<Z;G++)ge=Xe[G],y.format!==bt?me!==null?Be?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,G,Le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?L&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ge.width,ge.height,me,De,ge.data):t.texImage2D(n.TEXTURE_2D,G,Le,ge.width,ge.height,0,me,De,ge.data)}else if(y.isDataArrayTexture)if(Be){if(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,Le,$.width,$.height,$.depth),L)if(y.layerUpdates.size>0){const G=Dc($.width,$.height,y.format,y.type);for(const Z of y.layerUpdates){const ue=$.data.subarray(Z*G/$.data.BYTES_PER_ELEMENT,(Z+1)*G/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,$.width,$.height,1,me,De,ue)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,me,De,$.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,$.width,$.height,$.depth,0,me,De,$.data);else if(y.isData3DTexture)Be?(it&&t.texStorage3D(n.TEXTURE_3D,re,Le,$.width,$.height,$.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,me,De,$.data)):t.texImage3D(n.TEXTURE_3D,0,Le,$.width,$.height,$.depth,0,me,De,$.data);else if(y.isFramebufferTexture){if(it)if(Be)t.texStorage2D(n.TEXTURE_2D,re,Le,$.width,$.height);else{let G=$.width,Z=$.height;for(let ue=0;ue<re;ue++)t.texImage2D(n.TEXTURE_2D,ue,Le,G,Z,0,me,De,null),G>>=1,Z>>=1}}else if(Xe.length>0){if(Be&&it){const G=we(Xe[0]);t.texStorage2D(n.TEXTURE_2D,re,Le,G.width,G.height)}for(let G=0,Z=Xe.length;G<Z;G++)ge=Xe[G],Be?L&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,me,De,ge):t.texImage2D(n.TEXTURE_2D,G,Le,me,De,ge);y.generateMipmaps=!1}else if(Be){if(it){const G=we($);t.texStorage2D(n.TEXTURE_2D,re,Le,G.width,G.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,De,$)}else t.texImage2D(n.TEXTURE_2D,0,Le,me,De,$);m(y)&&h(j),_e.__version=X.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ne(w,y,F){if(y.image.length!==6)return;const j=tt(w,y),K=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);const X=i.get(K);if(K.version!==X.__version||j===!0){t.activeTexture(n.TEXTURE0+F);const _e=qe.getPrimaries(qe.workingColorSpace),oe=y.colorSpace===Wn?null:qe.getPrimaries(y.colorSpace),pe=y.colorSpace===Wn||_e===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const je=y.isCompressedTexture||y.image[0].isCompressedTexture,$=y.image[0]&&y.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!je&&!$?me[Z]=v(y.image[Z],!0,r.maxCubemapSize):me[Z]=$?y.image[Z].image:y.image[Z],me[Z]=at(y,me[Z]);const De=me[0],Le=a.convert(y.format,y.colorSpace),ge=a.convert(y.type),Xe=_(y.internalFormat,Le,ge,y.colorSpace),Be=y.isVideoTexture!==!0,it=X.__version===void 0||j===!0,L=K.dataReady;let re=P(y,De);He(n.TEXTURE_CUBE_MAP,y);let G;if(je){Be&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,re,Xe,De.width,De.height);for(let Z=0;Z<6;Z++){G=me[Z].mipmaps;for(let ue=0;ue<G.length;ue++){const le=G[ue];y.format!==bt?Le!==null?Be?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,le.width,le.height,Le,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Xe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,le.width,le.height,Le,ge,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Xe,le.width,le.height,0,Le,ge,le.data)}}}else{if(G=y.mipmaps,Be&&it){G.length>0&&re++;const Z=we(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,re,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if($){Be?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,Le,ge,me[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,me[Z].width,me[Z].height,0,Le,ge,me[Z].data);for(let ue=0;ue<G.length;ue++){const Fe=G[ue].image[Z].image;Be?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,Fe.width,Fe.height,Le,ge,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Xe,Fe.width,Fe.height,0,Le,ge,Fe.data)}}else{Be?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,ge,me[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,Le,ge,me[Z]);for(let ue=0;ue<G.length;ue++){const le=G[ue];Be?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,Le,ge,le.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Xe,Le,ge,le.image[Z])}}}m(y)&&h(n.TEXTURE_CUBE_MAP),X.__version=K.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ye(w,y,F,j,K,X){const _e=a.convert(F.format,F.colorSpace),oe=a.convert(F.type),pe=_(F.internalFormat,_e,oe,F.colorSpace),je=i.get(y),$=i.get(F);if($.__renderTarget=y,!je.__hasExternalTextures){const me=Math.max(1,y.width>>X),De=Math.max(1,y.height>>X);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,X,pe,me,De,y.depth,0,_e,oe,null):t.texImage2D(K,X,pe,me,De,0,_e,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),We(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,$.__webglTexture,0,Ge(y)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,K,$.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(w,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){const j=y.depthTexture,K=j&&j.isDepthTexture?j.type:null,X=M(y.stencilBuffer,K),_e=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Ge(y);We(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,X,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,X,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,X,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,w)}else{const j=y.textures;for(let K=0;K<j.length;K++){const X=j[K],_e=a.convert(X.format,X.colorSpace),oe=a.convert(X.type),pe=_(X.internalFormat,_e,oe,X.colorSpace),je=Ge(y);F&&We(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,pe,y.width,y.height):We(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,pe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,pe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const K=j.__webglTexture,X=Ge(y);if(y.depthTexture.format===li)We(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(y.depthTexture.format===Pi)We(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ne(w){const y=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const j=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=j}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(y.__webglFramebuffer,w)}else if(F){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=n.createRenderbuffer(),se(y.__webglDepthbuffer[j],w,!1);else{const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),se(y.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,K)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(w,y,F){const j=i.get(w);y!==void 0&&ye(j.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ne(w)}function ht(w){const y=w.texture,F=i.get(w),j=i.get(y);w.addEventListener("dispose",A);const K=w.textures,X=w.isWebGLCubeRenderTarget===!0,_e=K.length>1;if(_e||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,s.memory.textures++),X){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let pe=0;pe<y.mipmaps.length;pe++)F.__webglFramebuffer[oe][pe]=n.createFramebuffer()}else F.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)F.__webglFramebuffer[oe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(_e)for(let oe=0,pe=K.length;oe<pe;oe++){const je=i.get(K[oe]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),s.memory.textures++)}if(w.samples>0&&We(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<K.length;oe++){const pe=K[oe];F.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);const je=a.convert(pe.format,pe.colorSpace),$=a.convert(pe.type),me=_(pe.internalFormat,je,$,pe.colorSpace,w.isXRRenderTarget===!0),De=Ge(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,me,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),se(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),He(n.TEXTURE_CUBE_MAP,y);for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)ye(F.__webglFramebuffer[oe][pe],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else ye(F.__webglFramebuffer[oe],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(y)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let oe=0,pe=K.length;oe<pe;oe++){const je=K[oe],$=i.get(je);t.bindTexture(n.TEXTURE_2D,$.__webglTexture),He(n.TEXTURE_2D,je),ye(F.__webglFramebuffer,w,je,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(je)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(oe=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,j.__webglTexture),He(oe,y),y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)ye(F.__webglFramebuffer[pe],w,y,n.COLOR_ATTACHMENT0,oe,pe);else ye(F.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,oe,0);m(y)&&h(oe),t.unbindTexture()}w.depthBuffer&&Ne(w)}function Ye(w){const y=w.textures;for(let F=0,j=y.length;F<j;F++){const K=y[F];if(m(K)){const X=x(w),_e=i.get(K).__webglTexture;t.bindTexture(X,_e),h(X),t.unbindTexture()}}}const gt=[],N=[];function cn(w){if(w.samples>0){if(We(w)===!1){const y=w.textures,F=w.width,j=w.height;let K=n.COLOR_BUFFER_BIT;const X=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(w),oe=y.length>1;if(oe)for(let pe=0;pe<y.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let pe=0;pe<y.length;pe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);const je=i.get(y[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,F,j,0,0,F,j,K,n.NEAREST),l===!0&&(gt.length=0,N.length=0,gt.push(n.COLOR_ATTACHMENT0+pe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(gt.push(X),N.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let pe=0;pe<y.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);const je=i.get(y[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ge(w){return Math.min(r.maxSamples,w.samples)}function We(w){const y=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ce(w){const y=s.render.frame;c.get(w)!==y&&(c.set(w,y),w.update())}function at(w,y){const F=w.colorSpace,j=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==vr&&F!==Wn&&(qe.getTransfer(F)===$e?(j!==bt||K!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function we(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=ee,this.setTextureCube=W,this.rebindTextures=Ve,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=We}function E1(n,e){function t(i,r=Wn){let a;const s=qe.getTransfer(r);if(i===Jn)return n.UNSIGNED_BYTE;if(i===Xo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fu)return n.BYTE;if(i===du)return n.SHORT;if(i===Xr)return n.UNSIGNED_SHORT;if(i===Wo)return n.INT;if(i===Dn)return n.UNSIGNED_INT;if(i===mn)return n.FLOAT;if(i===dn)return n.HALF_FLOAT;if(i===mu)return n.ALPHA;if(i===gu)return n.RGB;if(i===bt)return n.RGBA;if(i===vu)return n.LUMINANCE;if(i===xu)return n.LUMINANCE_ALPHA;if(i===li)return n.DEPTH_COMPONENT;if(i===Pi)return n.DEPTH_STENCIL;if(i===Qr)return n.RED;if(i===Yo)return n.RED_INTEGER;if(i===Mu)return n.RG;if(i===jo)return n.RG_INTEGER;if(i===Zo)return n.RGBA_INTEGER;if(i===La||i===Ia||i===Ua||i===Na)if(s===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===La)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===La)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ia)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ua)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Na)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===co||i===uo||i===ho||i===fo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===co)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ho)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===po||i===mo||i===go)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===po||i===mo)return s===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===go)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vo||i===xo||i===Mo||i===So||i===yo||i===_o||i===bo||i===Eo||i===To||i===wo||i===Ao||i===Ro||i===Co||i===Do)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===vo)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xo)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mo)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===So)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yo)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_o)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bo)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Eo)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===To)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wo)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ao)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ro)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Co)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Do)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fa||i===Po||i===Lo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Fa)return s===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Po)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Su||i===Io||i===Uo||i===No)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Fa)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Io)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===No)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Di?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class T1 extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ei extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w1={type:"move"};class ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(u,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const A1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R1=`
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

}`;class C1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ut,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ft({vertexShader:A1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Xt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D1 extends xr{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,g=null;const v=new C1,m=t.getContextAttributes();let h=null,x=null;const _=[],M=[],P=new Re;let T=null;const A=new on;A.viewport=new et;const R=new on;R.viewport=new et;const E=[A,R],S=new T1;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=_[q];return ne===void 0&&(ne=new ks,_[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=_[q];return ne===void 0&&(ne=new ks,_[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=_[q];return ne===void 0&&(ne=new ks,_[q]=ne),ne.getHandSpace()};function O(q){const ne=M.indexOf(q.inputSource);if(ne===-1)return;const ye=_[ne];ye!==void 0&&(ye.update(q.inputSource,q.frame,u||s),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Y);for(let q=0;q<_.length;q++){const ne=M[q];ne!==null&&(M[q]=null,_[q].disconnect(ne))}C=null,z=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,x=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Dt(p.framebufferWidth,p.framebufferHeight,{format:bt,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ye=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Pi:li,ye=m.stencil?Di:Dn);const Pe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:a};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Dt(d.textureWidth,d.textureHeight,{format:bt,type:Jn,depthTexture:new Gr(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(o),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(q){for(let ne=0;ne<q.removed.length;ne++){const ye=q.removed[ne],se=M.indexOf(ye);se>=0&&(M[se]=null,_[se].disconnect(ye))}for(let ne=0;ne<q.added.length;ne++){const ye=q.added[ne];let se=M.indexOf(ye);if(se===-1){for(let Ne=0;Ne<_.length;Ne++)if(Ne>=M.length){M.push(ye),se=Ne;break}else if(M[Ne]===null){M[Ne]=ye,se=Ne;break}if(se===-1)break}const Pe=_[se];Pe&&Pe.connect(ye)}}const H=new D,ee=new D;function W(q,ne,ye){H.setFromMatrixPosition(ne.matrixWorld),ee.setFromMatrixPosition(ye.matrixWorld);const se=H.distanceTo(ee),Pe=ne.projectionMatrix.elements,Ne=ye.projectionMatrix.elements,Ve=Pe[14]/(Pe[10]-1),ht=Pe[14]/(Pe[10]+1),Ye=(Pe[9]+1)/Pe[5],gt=(Pe[9]-1)/Pe[5],N=(Pe[8]-1)/Pe[0],cn=(Ne[8]+1)/Ne[0],Ge=Ve*N,We=Ve*cn,Ce=se/(-N+cn),at=Ce*-N;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(at),q.translateZ(Ce),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pe[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const we=Ve+Ce,w=ht+Ce,y=Ge-at,F=We+(se-at),j=Ye*ht/w*we,K=gt*ht/w*we;q.projectionMatrix.makePerspective(y,F,j,K,we,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ae(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ne=q.near,ye=q.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(ye=v.depthFar)),S.near=R.near=A.near=ne,S.far=R.far=A.far=ye,(C!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,z=S.far),A.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,S.layers.mask=A.layers.mask|R.layers.mask;const se=q.parent,Pe=S.cameras;ae(S,se);for(let Ne=0;Ne<Pe.length;Ne++)ae(Pe[Ne],se);Pe.length===2?W(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),de(q,S,se)};function de(q,ne,ye){ye===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let Ee=null;function He(q,ne){if(c=ne.getViewerPose(u||s),g=ne,c!==null){const ye=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let se=!1;ye.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let Ne=0;Ne<ye.length;Ne++){const Ve=ye[Ne];let ht=null;if(p!==null)ht=p.getViewport(Ve);else{const gt=f.getViewSubImage(d,Ve);ht=gt.viewport,Ne===0&&(e.setRenderTargetTextures(x,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(x))}let Ye=E[Ne];Ye===void 0&&(Ye=new on,Ye.layers.enable(Ne),Ye.viewport=new et,E[Ne]=Ye),Ye.matrix.fromArray(Ve.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Ve.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ht.x,ht.y,ht.width,ht.height),Ne===0&&(S.matrix.copy(Ye.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(Ye)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ne=f.getDepthInformation(ye[0]);Ne&&Ne.isValid&&Ne.texture&&v.init(e,Ne,r.renderState)}}for(let ye=0;ye<_.length;ye++){const se=M[ye],Pe=_[ye];se!==null&&Pe!==void 0&&Pe.update(se,ne,u||s)}Ee&&Ee(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const tt=new Iu;tt.setAnimationLoop(He),this.setAnimationLoop=function(q){Ee=q},this.dispose=function(){}}}const mi=new Yt,P1=new Ae;function L1(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Du(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,_,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),c(m,h)):h.isMeshStandardMaterial?(a(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(a(m,h),g(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),v(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,x,_):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===It&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===It&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),_=x.envMap,M=x.envMapRotation;_&&(m.envMap.value=_,mi.copy(M),mi.x*=-1,mi.y*=-1,mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(P1.makeRotationFromEuler(mi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===It&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function I1(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const M=_.program;i.uniformBlockBinding(x,M)}function u(x,_){let M=r[x.id];M===void 0&&(g(x),M=c(x),r[x.id]=M,x.addEventListener("dispose",m));const P=_.program;i.updateUBOMapping(x,P);const T=e.render.frame;a[x.id]!==T&&(d(x),a[x.id]=T)}function c(x){const _=f();x.__bindingPointIndex=_;const M=n.createBuffer(),P=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,P,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function f(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=r[x.id],M=x.uniforms,P=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,A=M.length;T<A;T++){const R=Array.isArray(M[T])?M[T]:[M[T]];for(let E=0,S=R.length;E<S;E++){const C=R[E];if(p(C,T,E,P)===!0){const z=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let Y=0;Y<O.length;Y++){const H=O[Y],ee=v(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,z+V,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,V),V+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,_,M,P){const T=x.value,A=_+"_"+M;if(P[A]===void 0)return typeof T=="number"||typeof T=="boolean"?P[A]=T:P[A]=T.clone(),!0;{const R=P[A];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return P[A]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(x){const _=x.uniforms;let M=0;const P=16;for(let A=0,R=_.length;A<R;A++){const E=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,C=E.length;S<C;S++){const z=E[S],O=Array.isArray(z.value)?z.value:[z.value];for(let V=0,Y=O.length;V<Y;V++){const H=O[V],ee=v(H),W=M%P,ae=W%ee.boundary,de=W+ae;M+=ae,de!==0&&P-de<ee.storage&&(M+=P-de),z.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=ee.storage}}}const T=M%P;return T>0&&(M+=P-T),x.__size=M,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const M=s.indexOf(_.__bindingPointIndex);s.splice(M,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function h(){for(const x in r)n.deleteBuffer(r[x]);s=[],r={},a={}}return{bind:l,update:u,dispose:h}}class U1{constructor(e={}){const{canvas:t=bf(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const x=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this.toneMapping=oi,this.toneMappingExposure=1;const M=this;let P=!1,T=0,A=0,R=null,E=-1,S=null;const C=new et,z=new et;let O=null;const V=new ve(0);let Y=0,H=t.width,ee=t.height,W=1,ae=null,de=null;const Ee=new et(0,0,H,ee),He=new et(0,0,H,ee);let tt=!1;const q=new $o;let ne=!1,ye=!1;const se=new Ae,Pe=new Ae,Ne=new D,Ve=new et,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function gt(){return R===null?W:1}let N=i;function cn(b,I){return t.getContext(b,I)}try{const b={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ja}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",le,!1),N===null){const I="webgl2";if(N=cn(I,b),N===null)throw cn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ge,We,Ce,at,we,w,y,F,j,K,X,_e,oe,pe,je,$,me,De,Le,ge,Xe,Be,it,L;function re(){Ge=new Bp(N),Ge.init(),Be=new E1(N,Ge),We=new Ip(N,Ge,e,Be),Ce=new y1(N,Ge),We.reverseDepthBuffer&&d&&Ce.buffers.depth.setReversed(!0),at=new Vp(N),we=new s1,w=new b1(N,Ge,Ce,we,We,Be,at),y=new Np(M),F=new zp(M),j=new Zf(N),it=new Pp(N,j),K=new kp(N,j,at,it),X=new Wp(N,K,j,at),Le=new Gp(N,We,w),$=new Up(we),_e=new a1(M,y,F,Ge,We,it,$),oe=new L1(M,we),pe=new l1,je=new p1(Ge),De=new Dp(M,y,F,Ce,X,p,l),me=new M1(M,X,We),L=new I1(N,at,We,Ce),ge=new Lp(N,Ge,at),Xe=new Hp(N,Ge,at),at.programs=_e.programs,M.capabilities=We,M.extensions=Ge,M.properties=we,M.renderLists=pe,M.shadowMap=me,M.state=Ce,M.info=at}re();const G=new D1(M,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=Ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(H,ee,!1))},this.getSize=function(b){return b.set(H,ee)},this.setSize=function(b,I,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,ee=I,t.width=Math.floor(b*W),t.height=Math.floor(I*W),B===!0&&(t.style.width=b+"px",t.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(H*W,ee*W).floor()},this.setDrawingBufferSize=function(b,I,B){H=b,ee=I,W=B,t.width=Math.floor(b*B),t.height=Math.floor(I*B),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(Ee)},this.setViewport=function(b,I,B,k){b.isVector4?Ee.set(b.x,b.y,b.z,b.w):Ee.set(b,I,B,k),Ce.viewport(C.copy(Ee).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(He)},this.setScissor=function(b,I,B,k){b.isVector4?He.set(b.x,b.y,b.z,b.w):He.set(b,I,B,k),Ce.scissor(z.copy(He).multiplyScalar(W).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(b){Ce.setScissorTest(tt=b)},this.setOpaqueSort=function(b){ae=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(b=!0,I=!0,B=!0){let k=0;if(b){let U=!1;if(R!==null){const te=R.texture.format;U=te===Zo||te===jo||te===Yo}if(U){const te=R.texture.type,ce=te===Jn||te===Dn||te===Xr||te===Di||te===Xo||te===qo,xe=De.getClearColor(),Me=De.getClearAlpha(),Ue=xe.r,Oe=xe.g,Se=xe.b;ce?(g[0]=Ue,g[1]=Oe,g[2]=Se,g[3]=Me,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=Ue,v[1]=Oe,v[2]=Se,v[3]=Me,N.clearBufferiv(N.COLOR,0,v))}else k|=N.COLOR_BUFFER_BIT}I&&(k|=N.DEPTH_BUFFER_BIT),B&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",le,!1),pe.dispose(),je.dispose(),we.dispose(),y.dispose(),F.dispose(),X.dispose(),it.dispose(),L.dispose(),_e.dispose(),G.dispose(),G.removeEventListener("sessionstart",Tl),G.removeEventListener("sessionend",wl),ci.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=at.autoReset,I=me.enabled,B=me.autoUpdate,k=me.needsUpdate,U=me.type;re(),at.autoReset=b,me.enabled=I,me.autoUpdate=B,me.needsUpdate=k,me.type=U}function le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Fe(b){const I=b.target;I.removeEventListener("dispose",Fe),dt(I)}function dt(b){Ft(b),we.remove(b)}function Ft(b){const I=we.get(b).programs;I!==void 0&&(I.forEach(function(B){_e.releaseProgram(B)}),b.isShaderMaterial&&_e.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,B,k,U,te){I===null&&(I=ht);const ce=U.isMesh&&U.matrixWorld.determinant()<0,xe=yh(b,I,B,k,U);Ce.setMaterial(k,ce);let Me=B.index,Ue=1;if(k.wireframe===!0){if(Me=K.getWireframeAttribute(B),Me===void 0)return;Ue=2}const Oe=B.drawRange,Se=B.attributes.position;let Ze=Oe.start*Ue,rt=(Oe.start+Oe.count)*Ue;te!==null&&(Ze=Math.max(Ze,te.start*Ue),rt=Math.min(rt,(te.start+te.count)*Ue)),Me!==null?(Ze=Math.max(Ze,0),rt=Math.min(rt,Me.count)):Se!=null&&(Ze=Math.max(Ze,0),rt=Math.min(rt,Se.count));const st=rt-Ze;if(st<0||st===1/0)return;it.setup(U,k,xe,B,Me);let Zt,Qe=ge;if(Me!==null&&(Zt=j.get(Me),Qe=Xe,Qe.setIndex(Zt)),U.isMesh)k.wireframe===!0?(Ce.setLineWidth(k.wireframeLinewidth*gt()),Qe.setMode(N.LINES)):Qe.setMode(N.TRIANGLES);else if(U.isLine){let be=k.linewidth;be===void 0&&(be=1),Ce.setLineWidth(be*gt()),U.isLineSegments?Qe.setMode(N.LINES):U.isLineLoop?Qe.setMode(N.LINE_LOOP):Qe.setMode(N.LINE_STRIP)}else U.isPoints?Qe.setMode(N.POINTS):U.isSprite&&Qe.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const be=U._multiDrawStarts,On=U._multiDrawCounts,Ke=U._multiDrawCount,vn=Me?j.get(Me).bytesPerElement:1,Oi=we.get(k).currentProgram.getUniforms();for(let tn=0;tn<Ke;tn++)Oi.setValue(N,"_gl_DrawID",tn),Qe.render(be[tn]/vn,On[tn])}else if(U.isInstancedMesh)Qe.renderInstances(Ze,st,U.count);else if(B.isInstancedBufferGeometry){const be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,On=Math.min(B.instanceCount,be);Qe.renderInstances(Ze,st,On)}else Qe.render(Ze,st)};function Je(b,I,B){b.transparent===!0&&b.side===St&&b.forceSinglePass===!1?(b.side=It,b.needsUpdate=!0,ra(b,I,B),b.side=Kn,b.needsUpdate=!0,ra(b,I,B),b.side=St):ra(b,I,B)}this.compile=function(b,I,B=null){B===null&&(B=b),h=je.get(B),h.init(I),_.push(h),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),b!==B&&b.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();const k=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const te=U.material;if(te)if(Array.isArray(te))for(let ce=0;ce<te.length;ce++){const xe=te[ce];Je(xe,B,U),k.add(xe)}else Je(te,B,U),k.add(te)}),_.pop(),h=null,k},this.compileAsync=function(b,I,B=null){const k=this.compile(b,I,B);return new Promise(U=>{function te(){if(k.forEach(function(ce){we.get(ce).currentProgram.isReady()&&k.delete(ce)}),k.size===0){U(b);return}setTimeout(te,10)}Ge.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let gn=null;function Fn(b){gn&&gn(b)}function Tl(){ci.stop()}function wl(){ci.start()}const ci=new Iu;ci.setAnimationLoop(Fn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(b){gn=b,G.setAnimationLoop(b),b===null?ci.stop():ci.start()},G.addEventListener("sessionstart",Tl),G.addEventListener("sessionend",wl),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,I,R),h=je.get(b,_.length),h.init(I),_.push(h),Pe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(Pe),ye=this.localClippingEnabled,ne=$.init(this.clippingPlanes,ye),m=pe.get(b,x.length),m.init(),x.push(m),G.enabled===!0&&G.isPresenting===!0){const te=M.xr.getDepthSensingMesh();te!==null&&fs(te,I,-1/0,M.sortObjects)}fs(b,I,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ae,de),Ye=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ye&&De.addToRenderList(m,b),this.info.render.frame++,ne===!0&&$.beginShadows();const B=h.state.shadowsArray;me.render(B,b,I),ne===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(h.setupLights(),I.isArrayCamera){const te=I.cameras;if(U.length>0)for(let ce=0,xe=te.length;ce<xe;ce++){const Me=te[ce];Rl(k,U,b,Me)}Ye&&De.render(b);for(let ce=0,xe=te.length;ce<xe;ce++){const Me=te[ce];Al(m,b,Me,Me.viewport)}}else U.length>0&&Rl(k,U,b,I),Ye&&De.render(b),Al(m,b,I);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(M,b,I),it.resetDefaultState(),E=-1,S=null,_.pop(),_.length>0?(h=_[_.length-1],ne===!0&&$.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function fs(b,I,B,k){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){k&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Pe);const ce=X.update(b),xe=b.material;xe.visible&&m.push(b,ce,xe,B,Ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const ce=X.update(b),xe=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ve.copy(ce.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(Pe)),Array.isArray(xe)){const Me=ce.groups;for(let Ue=0,Oe=Me.length;Ue<Oe;Ue++){const Se=Me[Ue],Ze=xe[Se.materialIndex];Ze&&Ze.visible&&m.push(b,ce,Ze,B,Ve.z,Se)}}else xe.visible&&m.push(b,ce,xe,B,Ve.z,null)}}const te=b.children;for(let ce=0,xe=te.length;ce<xe;ce++)fs(te[ce],I,B,k)}function Al(b,I,B,k){const U=b.opaque,te=b.transmissive,ce=b.transparent;h.setupLightsView(B),ne===!0&&$.setGlobalState(M.clippingPlanes,B),k&&Ce.viewport(C.copy(k)),U.length>0&&ia(U,I,B),te.length>0&&ia(te,I,B),ce.length>0&&ia(ce,I,B),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Rl(b,I,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[k.id]===void 0&&(h.state.transmissionRenderTarget[k.id]=new Dt(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?dn:Jn,minFilter:bi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const te=h.state.transmissionRenderTarget[k.id],ce=k.viewport||C;te.setSize(ce.z,ce.w);const xe=M.getRenderTarget();M.setRenderTarget(te),M.getClearColor(V),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),Ye&&De.render(B);const Me=M.toneMapping;M.toneMapping=oi;const Ue=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),h.setupLightsView(k),ne===!0&&$.setGlobalState(M.clippingPlanes,k),ia(b,B,k),w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Se=0,Ze=I.length;Se<Ze;Se++){const rt=I[Se],st=rt.object,Zt=rt.geometry,Qe=rt.material,be=rt.group;if(Qe.side===St&&st.layers.test(k.layers)){const On=Qe.side;Qe.side=It,Qe.needsUpdate=!0,Cl(st,B,k,Zt,Qe,be),Qe.side=On,Qe.needsUpdate=!0,Oe=!0}}Oe===!0&&(w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te))}M.setRenderTarget(xe),M.setClearColor(V,Y),Ue!==void 0&&(k.viewport=Ue),M.toneMapping=Me}function ia(b,I,B){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,te=b.length;U<te;U++){const ce=b[U],xe=ce.object,Me=ce.geometry,Ue=k===null?ce.material:k,Oe=ce.group;xe.layers.test(B.layers)&&Cl(xe,I,B,Me,Ue,Oe)}}function Cl(b,I,B,k,U,te){b.onBeforeRender(M,I,B,k,U,te),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(M,I,B,k,b,te),U.transparent===!0&&U.side===St&&U.forceSinglePass===!1?(U.side=It,U.needsUpdate=!0,M.renderBufferDirect(B,I,k,U,b,te),U.side=Kn,U.needsUpdate=!0,M.renderBufferDirect(B,I,k,U,b,te),U.side=St):M.renderBufferDirect(B,I,k,U,b,te),b.onAfterRender(M,I,B,k,U,te)}function ra(b,I,B){I.isScene!==!0&&(I=ht);const k=we.get(b),U=h.state.lights,te=h.state.shadowsArray,ce=U.state.version,xe=_e.getParameters(b,U.state,te,I,B),Me=_e.getProgramCacheKey(xe);let Ue=k.programs;k.environment=b.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(b.isMeshStandardMaterial?F:y).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Ue===void 0&&(b.addEventListener("dispose",Fe),Ue=new Map,k.programs=Ue);let Oe=Ue.get(Me);if(Oe!==void 0){if(k.currentProgram===Oe&&k.lightsStateVersion===ce)return Pl(b,xe),Oe}else xe.uniforms=_e.getUniforms(b),b.onBeforeCompile(xe,M),Oe=_e.acquireProgram(xe,Me),Ue.set(Me,Oe),k.uniforms=xe.uniforms;const Se=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Se.clippingPlanes=$.uniform),Pl(b,xe),k.needsLights=bh(b),k.lightsStateVersion=ce,k.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Oe,k.uniformsList=null,Oe}function Dl(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=Oa.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Pl(b,I){const B=we.get(b);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function yh(b,I,B,k,U){I.isScene!==!0&&(I=ht),w.resetTextureUnits();const te=I.fog,ce=k.isMeshStandardMaterial?I.environment:null,xe=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:vr,Me=(k.isMeshStandardMaterial?F:y).get(k.envMap||ce),Ue=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Oe=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!B.morphAttributes.position,Ze=!!B.morphAttributes.normal,rt=!!B.morphAttributes.color;let st=oi;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(st=M.toneMapping);const Zt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Qe=Zt!==void 0?Zt.length:0,be=we.get(k),On=h.state.lights;if(ne===!0&&(ye===!0||b!==S)){const un=b===S&&k.id===E;$.setState(k,b,un)}let Ke=!1;k.version===be.__version?(be.needsLights&&be.lightsStateVersion!==On.state.version||be.outputColorSpace!==xe||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==Me||k.fog===!0&&be.fog!==te||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==$.numPlanes||be.numIntersection!==$.numIntersection)||be.vertexAlphas!==Ue||be.vertexTangents!==Oe||be.morphTargets!==Se||be.morphNormals!==Ze||be.morphColors!==rt||be.toneMapping!==st||be.morphTargetsCount!==Qe)&&(Ke=!0):(Ke=!0,be.__version=k.version);let vn=be.currentProgram;Ke===!0&&(vn=ra(k,I,U));let Oi=!1,tn=!1,Tr=!1;const ot=vn.getUniforms(),wn=be.uniforms;if(Ce.useProgram(vn.program)&&(Oi=!0,tn=!0,Tr=!0),k.id!==E&&(E=k.id,tn=!0),Oi||S!==b){Ce.buffers.depth.getReversed()?(se.copy(b.projectionMatrix),Tf(se),wf(se),ot.setValue(N,"projectionMatrix",se)):ot.setValue(N,"projectionMatrix",b.projectionMatrix),ot.setValue(N,"viewMatrix",b.matrixWorldInverse);const $n=ot.map.cameraPosition;$n!==void 0&&$n.setValue(N,Ne.setFromMatrixPosition(b.matrixWorld)),We.logarithmicDepthBuffer&&ot.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ot.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,tn=!0,Tr=!0)}if(U.isSkinnedMesh){ot.setOptional(N,U,"bindMatrix"),ot.setOptional(N,U,"bindMatrixInverse");const un=U.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),ot.setValue(N,"boneTexture",un.boneTexture,w))}U.isBatchedMesh&&(ot.setOptional(N,U,"batchingTexture"),ot.setValue(N,"batchingTexture",U._matricesTexture,w),ot.setOptional(N,U,"batchingIdTexture"),ot.setValue(N,"batchingIdTexture",U._indirectTexture,w),ot.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ot.setValue(N,"batchingColorTexture",U._colorsTexture,w));const wr=B.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0)&&Le.update(U,B,vn),(tn||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,ot.setValue(N,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(wn.envMap.value=Me,wn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(wn.envMapIntensity.value=I.environmentIntensity),tn&&(ot.setValue(N,"toneMappingExposure",M.toneMappingExposure),be.needsLights&&_h(wn,Tr),te&&k.fog===!0&&oe.refreshFogUniforms(wn,te),oe.refreshMaterialUniforms(wn,k,W,ee,h.state.transmissionRenderTarget[b.id]),Oa.upload(N,Dl(be),wn,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Oa.upload(N,Dl(be),wn,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ot.setValue(N,"center",U.center),ot.setValue(N,"modelViewMatrix",U.modelViewMatrix),ot.setValue(N,"normalMatrix",U.normalMatrix),ot.setValue(N,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const un=k.uniformsGroups;for(let $n=0,ei=un.length;$n<ei;$n++){const Ll=un[$n];L.update(Ll,vn),L.bind(Ll,vn)}}return vn}function _h(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function bh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,I,B){we.get(b.texture).__webglTexture=I,we.get(b.depthTexture).__webglTexture=B;const k=we.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,I){const B=we.get(b);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,B=0){R=b,T=I,A=B;let k=!0,U=null,te=!1,ce=!1;if(b){const Me=we.get(b);if(Me.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(Me.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Me.__hasExternalTextures)w.rebindTextures(b,we.get(b.texture).__webglTexture,we.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Se=b.depthTexture;if(Me.__boundDepthTexture!==Se){if(Se!==null&&we.has(Se)&&(b.width!==Se.image.width||b.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ce=!0);const Oe=we.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[I])?U=Oe[I][B]:U=Oe[I],te=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?U=we.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?U=Oe[B]:U=Oe,C.copy(b.viewport),z.copy(b.scissor),O=b.scissorTest}else C.copy(Ee).multiplyScalar(W).floor(),z.copy(He).multiplyScalar(W).floor(),O=tt;if(Ce.bindFramebuffer(N.FRAMEBUFFER,U)&&k&&Ce.drawBuffers(b,U),Ce.viewport(C),Ce.scissor(z),Ce.setScissorTest(O),te){const Me=we.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Me.__webglTexture,B)}else if(ce){const Me=we.get(b.texture),Ue=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.__webglTexture,B||0,Ue)}E=-1},this.readRenderTargetPixels=function(b,I,B,k,U,te,ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ce!==void 0&&(xe=xe[ce]),xe){Ce.bindFramebuffer(N.FRAMEBUFFER,xe);try{const Me=b.texture,Ue=Me.format,Oe=Me.type;if(!We.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-k&&B>=0&&B<=b.height-U&&N.readPixels(I,B,k,U,Be.convert(Ue),Be.convert(Oe),te)}finally{const Me=R!==null?we.get(R).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(b,I,B,k,U,te,ce){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ce!==void 0&&(xe=xe[ce]),xe){const Me=b.texture,Ue=Me.format,Oe=Me.type;if(!We.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=b.width-k&&B>=0&&B<=b.height-U){Ce.bindFramebuffer(N.FRAMEBUFFER,xe);const Se=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.bufferData(N.PIXEL_PACK_BUFFER,te.byteLength,N.STREAM_READ),N.readPixels(I,B,k,U,Be.convert(Ue),Be.convert(Oe),0);const Ze=R!==null?we.get(R).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,Ze);const rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ef(N,rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,te),N.deleteBuffer(Se),N.deleteSync(rt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,I=null,B=0){b.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-B),U=Math.floor(b.image.width*k),te=Math.floor(b.image.height*k),ce=I!==null?I.x:0,xe=I!==null?I.y:0;w.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,ce,xe,U,te),Ce.unbindTexture()},this.copyTextureToTexture=function(b,I,B=null,k=null,U=0){b.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let te,ce,xe,Me,Ue,Oe,Se,Ze,rt;const st=b.isCompressedTexture?b.mipmaps[U]:b.image;B!==null?(te=B.max.x-B.min.x,ce=B.max.y-B.min.y,xe=B.isBox3?B.max.z-B.min.z:1,Me=B.min.x,Ue=B.min.y,Oe=B.isBox3?B.min.z:0):(te=st.width,ce=st.height,xe=st.depth||1,Me=0,Ue=0,Oe=0),k!==null?(Se=k.x,Ze=k.y,rt=k.z):(Se=0,Ze=0,rt=0);const Zt=Be.convert(I.format),Qe=Be.convert(I.type);let be;I.isData3DTexture?(w.setTexture3D(I,0),be=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(w.setTexture2DArray(I,0),be=N.TEXTURE_2D_ARRAY):(w.setTexture2D(I,0),be=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const On=N.getParameter(N.UNPACK_ROW_LENGTH),Ke=N.getParameter(N.UNPACK_IMAGE_HEIGHT),vn=N.getParameter(N.UNPACK_SKIP_PIXELS),Oi=N.getParameter(N.UNPACK_SKIP_ROWS),tn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,st.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Me),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Oe);const Tr=b.isDataArrayTexture||b.isData3DTexture,ot=I.isDataArrayTexture||I.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const wn=we.get(b),wr=we.get(I),un=we.get(wn.__renderTarget),$n=we.get(wr.__renderTarget);Ce.bindFramebuffer(N.READ_FRAMEBUFFER,un.__webglFramebuffer),Ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let ei=0;ei<xe;ei++)Tr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.get(b).__webglTexture,U,Oe+ei),b.isDepthTexture?(ot&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.get(I).__webglTexture,U,rt+ei),N.blitFramebuffer(Me,Ue,te,ce,Se,Ze,te,ce,N.DEPTH_BUFFER_BIT,N.NEAREST)):ot?N.copyTexSubImage3D(be,U,Se,Ze,rt+ei,Me,Ue,te,ce):N.copyTexSubImage2D(be,U,Se,Ze,rt+ei,Me,Ue,te,ce);Ce.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ot?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(be,U,Se,Ze,rt,te,ce,xe,Zt,Qe,st.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(be,U,Se,Ze,rt,te,ce,xe,Zt,st.data):N.texSubImage3D(be,U,Se,Ze,rt,te,ce,xe,Zt,Qe,st):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,Se,Ze,te,ce,Zt,Qe,st.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,Se,Ze,st.width,st.height,Zt,st.data):N.texSubImage2D(N.TEXTURE_2D,U,Se,Ze,te,ce,Zt,Qe,st);N.pixelStorei(N.UNPACK_ROW_LENGTH,On),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ke),N.pixelStorei(N.UNPACK_SKIP_PIXELS,vn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Oi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,tn),U===0&&I.generateMipmaps&&N.generateMipmap(be),Ce.unbindTexture()},this.copyTextureToTexture3D=function(b,I,B=null,k=null,U=0){return b.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,b=arguments[2],I=arguments[3],U=arguments[4]||0),zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,I,B,k,U)},this.initRenderTarget=function(b){we.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),Ce.unbindTexture()},this.resetState=function(){T=0,A=0,R=null,Ce.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class tl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=i}clone(){return new tl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zu extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bu extends Ut{constructor(e=null,t=1,i=1,r,a,s,o,l,u=lt,c=lt,f,d){super(null,s,o,l,u,c,r,a,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pc extends Pt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ji=new Ae,Lc=new Ae,wa=[],Ic=new Ui,N1=new Ae,Pr=new ct,Lr=new Sr;class Ai extends ct{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,N1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ji),Ic.copy(e.boundingBox).applyMatrix4(Ji),this.boundingBox.union(Ic)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ji),Lr.copy(e.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,s=e*a+1;for(let o=0;o<i.length;o++)i[o]=r[s+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(i),e.ray.intersectsSphere(Lr)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Ji),Lc.multiplyMatrices(i,Ji),Pr.matrixWorld=Lc,Pr.raycast(e,wa);for(let s=0,o=wa.length;s<o;s++){const l=wa[s];l.instanceId=a,l.object=this,t.push(l)}wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bu(new Float32Array(r*this.count),r,this.count,Qr,mn));const a=this.morphTexture.source.data.data;let s=0;for(let u=0;u<i.length;u++)s+=i[u];const o=this.geometry.morphTargetsRelative?1:1-s,l=r*e;a[l]=o,a.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class F1 extends Ut{constructor(e,t,i,r,a,s,o,l,u){super(e,t,i,r,a,s,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class es extends kt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const a=[],s=[],o=[],l=[],u=new D,c=new Re;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const p=i+f/t*r;u.x=e*Math.cos(p),u.y=e*Math.sin(p),s.push(u.x,u.y,u.z),o.push(0,0,1),c.x=(s[d]/e+1)/2,c.y=(s[d+1]/e+1)/2,l.push(c.x,c.y)}for(let f=1;f<=t;f++)a.push(f,f+1,0);this.setIndex(a),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Li extends kt{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),a=Math.floor(a);const c=[],f=[],d=[],p=[];let g=0;const v=[],m=i/2;let h=0;x(),s===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new nt(f,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(p,2));function x(){const M=new D,P=new D;let T=0;const A=(t-e)/i;for(let R=0;R<=a;R++){const E=[],S=R/a,C=S*(t-e)+e;for(let z=0;z<=r;z++){const O=z/r,V=O*l+o,Y=Math.sin(V),H=Math.cos(V);P.x=C*Y,P.y=-S*i+m,P.z=C*H,f.push(P.x,P.y,P.z),M.set(Y,A,H).normalize(),d.push(M.x,M.y,M.z),p.push(O,1-S),E.push(g++)}v.push(E)}for(let R=0;R<r;R++)for(let E=0;E<a;E++){const S=v[E][R],C=v[E+1][R],z=v[E+1][R+1],O=v[E][R+1];(e>0||E!==0)&&(c.push(S,C,O),T+=3),(t>0||E!==a-1)&&(c.push(C,z,O),T+=3)}u.addGroup(h,T,0),h+=T}function _(M){const P=g,T=new Re,A=new D;let R=0;const E=M===!0?e:t,S=M===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const C=g;for(let z=0;z<=r;z++){const V=z/r*l+o,Y=Math.cos(V),H=Math.sin(V);A.x=E*H,A.y=m*S,A.z=E*Y,f.push(A.x,A.y,A.z),d.push(0,S,0),T.x=Y*.5+.5,T.y=H*.5*S+.5,p.push(T.x,T.y),g++}for(let z=0;z<r;z++){const O=P+z,V=C+z;M===!0?c.push(V,V+1,O):c.push(V+1,V,O),R+=3}u.addGroup(h,R,M===!0?1:2),h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nl extends kt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const a=[],s=[];o(r),u(i),c(),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(a.slice(),3)),this.setAttribute("uv",new nt(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const _=new D,M=new D,P=new D;for(let T=0;T<t.length;T+=3)p(t[T+0],_),p(t[T+1],M),p(t[T+2],P),l(_,M,P,x)}function l(x,_,M,P){const T=P+1,A=[];for(let R=0;R<=T;R++){A[R]=[];const E=x.clone().lerp(M,R/T),S=_.clone().lerp(M,R/T),C=T-R;for(let z=0;z<=C;z++)z===0&&R===T?A[R][z]=E:A[R][z]=E.clone().lerp(S,z/C)}for(let R=0;R<T;R++)for(let E=0;E<2*(T-R)-1;E++){const S=Math.floor(E/2);E%2===0?(d(A[R][S+1]),d(A[R+1][S]),d(A[R][S])):(d(A[R][S+1]),d(A[R+1][S+1]),d(A[R+1][S]))}}function u(x){const _=new D;for(let M=0;M<a.length;M+=3)_.x=a[M+0],_.y=a[M+1],_.z=a[M+2],_.normalize().multiplyScalar(x),a[M+0]=_.x,a[M+1]=_.y,a[M+2]=_.z}function c(){const x=new D;for(let _=0;_<a.length;_+=3){x.x=a[_+0],x.y=a[_+1],x.z=a[_+2];const M=m(x)/2/Math.PI+.5,P=h(x)/Math.PI+.5;s.push(M,1-P)}g(),f()}function f(){for(let x=0;x<s.length;x+=6){const _=s[x+0],M=s[x+2],P=s[x+4],T=Math.max(_,M,P),A=Math.min(_,M,P);T>.9&&A<.1&&(_<.2&&(s[x+0]+=1),M<.2&&(s[x+2]+=1),P<.2&&(s[x+4]+=1))}}function d(x){a.push(x.x,x.y,x.z)}function p(x,_){const M=x*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function g(){const x=new D,_=new D,M=new D,P=new D,T=new Re,A=new Re,R=new Re;for(let E=0,S=0;E<a.length;E+=9,S+=6){x.set(a[E+0],a[E+1],a[E+2]),_.set(a[E+3],a[E+4],a[E+5]),M.set(a[E+6],a[E+7],a[E+8]),T.set(s[S+0],s[S+1]),A.set(s[S+2],s[S+3]),R.set(s[S+4],s[S+5]),P.copy(x).add(_).add(M).divideScalar(3);const C=m(P);v(T,S+0,x,C),v(A,S+2,_,C),v(R,S+4,M,C)}}function v(x,_,M,P){P<0&&x.x===1&&(s[_]=x.x-1),M.x===0&&M.z===0&&(s[_]=P/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function h(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.vertices,e.indices,e.radius,e.details)}}class il extends nl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new il(e.radius,e.detail)}}class rl extends kt{constructor(e=.5,t=1,i=32,r=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:a,thetaLength:s},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],u=[],c=[];let f=e;const d=(t-e)/r,p=new D,g=new Re;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const h=a+m/i*s;p.x=f*Math.cos(h),p.y=f*Math.sin(h),l.push(p.x,p.y,p.z),u.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,c.push(g.x,g.y)}f+=d}for(let v=0;v<r;v++){const m=v*(i+1);for(let h=0;h<i;h++){const x=h+m,_=x,M=x+i+1,P=x+i+2,T=x+1;o.push(_,M,T),o.push(M,P,T)}}this.setIndex(o),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ts extends kt{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let u=0;const c=[],f=new D,d=new D,p=[],g=[],v=[],m=[];for(let h=0;h<=i;h++){const x=[],_=h/i;let M=0;h===0&&s===0?M=.5/t:h===i&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const T=P/t;f.x=-e*Math.cos(r+T*a)*Math.sin(s+_*o),f.y=e*Math.cos(s+_*o),f.z=e*Math.sin(r+T*a)*Math.sin(s+_*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(T+M,1-_),x.push(u++)}c.push(x)}for(let h=0;h<i;h++)for(let x=0;x<t;x++){const _=c[h][x+1],M=c[h][x],P=c[h+1][x],T=c[h+1][x+1];(h!==0||s>0)&&p.push(_,M,T),(h!==i-1||l<Math.PI)&&p.push(M,P,T)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class al extends kt{constructor(e=1,t=.4,i=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);const s=[],o=[],l=[],u=[],c=new D,f=new D,d=new D;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const v=g/r*a,m=p/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),c.x=e*Math.cos(v),c.y=e*Math.sin(v),d.subVectors(f,c).normalize(),l.push(d.x,d.y,d.z),u.push(g/r),u.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const v=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,x=(r+1)*p+g;s.push(v,m,x),s.push(m,h,x)}this.setIndex(s),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class O1 extends ft{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ln extends Kr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Uc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class z1{constructor(e,t,i){const r=this;let a=!1,s=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){o++,a===!1&&r.onStart!==void 0&&r.onStart(c,s,o),a=!0},this.itemEnd=function(c){s++,r.onProgress!==void 0&&r.onProgress(c,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const B1=new z1;class sl{constructor(e){this.manager=e!==void 0?e:B1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}sl.DEFAULT_MATERIAL_NAME="__DEFAULT";class k1 extends sl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Uc.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=Yr("img");function l(){c(),Uc.add(e,this),t&&t(this),a.manager.itemEnd(e)}function u(f){c(),r&&r(f),a.manager.itemError(e),a.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class H1 extends sl{constructor(e){super(e)}load(e,t,i,r){const a=new Ut,s=new k1(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}class ol extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class V1 extends ol{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Hs=new Ae,Nc=new D,Fc=new D;class ku{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),Hs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oc=new Ae,Ir=new D,Vs=new D;class G1 extends ku{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Ir.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ir),Vs.copy(i.position),Vs.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Vs),i.updateMatrixWorld(),r.makeTranslation(-Ir.x,-Ir.y,-Ir.z),Oc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc)}}class W1 extends ol{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new G1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class X1 extends ku{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class q1 extends ol{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new X1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zc(){return performance.now()}const Bc=new Ae;class Y1{constructor(e,t,i=0,r=1/0){this.ray=new wu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bc),this}intersectObject(e,t=!0,i=[]){return Bo(e,this,i,t),i.sort(kc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Bo(e[r],this,i,t);return i.sort(kc),i}}function kc(n,e){return n.distance-e.distance}function Bo(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)Bo(a[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);const sn=2.4,yt=.12,Vu=1.6,ir={x0:-3.55,x1:3.55,z0:-3.1,z1:3.1},ll={comedor:[{x0:-3.55,x1:1.55,z0:-.1,z1:3.1}],hab1:[{x0:-3.55,x1:.2,z0:-3.1,z1:-.1}],hab2:[{x0:.2,x1:3.55,z0:-3.1,z1:-.1}],bano:[{x0:1.55,x1:3.55,z0:-.1,z1:3.1}]},Gu=[{id:"W",ax:"z",at:-3.55,from:-3.1,to:3.1,ext:-1,openings:[{c:-1.6,w:2,sill:0,head:2.1,kind:"slider"},{c:1,w:.95,sill:0,head:2.1,kind:"door",pass:!0,entrance:!0},{c:2.35,w:1.2,sill:0,head:2.1,kind:"slider"}]},{id:"E",ax:"z",at:3.55,from:-3.1,to:3.1,ext:1,openings:[{c:-1.95,w:1.2,sill:.9,head:2,kind:"window",blind:.4},{c:.6,w:1,sill:1.35,head:1.9,kind:"window"}]},{id:"N",ax:"x",at:-3.1,from:-3.55,to:3.55,ext:-1,openings:[]},{id:"S",ax:"x",at:3.1,from:-3.55,to:3.55,ext:1,openings:[{c:-.35,w:1.2,sill:1,head:1.9,kind:"window",blind:.45}]},{id:"P1",ax:"x",at:-.1,from:-3.55,to:3.55,ext:0,openings:[{c:-.95,w:.85,sill:0,head:2.05,kind:"door",pass:!0,hinge:"end",swing:-1,angle:85},{c:.85,w:.85,sill:0,head:2.05,kind:"door",pass:!0,hinge:"start",swing:-1,angle:80}]},{id:"P2",ax:"z",at:.2,from:-3.1,to:-.1,ext:0,openings:[]},{id:"P3",ax:"z",at:1.55,from:-.1,to:3.1,ext:0,openings:[{c:.7,w:.8,sill:0,head:2.05,kind:"door",pass:!0,hinge:"start",swing:1,angle:96}]}],rr={x0:-9.6,x1:-3.55,z0:-3.9,z1:3.6},Ti={x:-6,z:-5.3,w:2.3,d:2.3},Qn={x:-9.5,z:12.5,r:2.53,h:1.22},An={x0:-13,x1:-4.5,z0:5.9,z1:16.5},cl=[{x0:-14.5,x1:4.5,z0:3.6,z1:5.9},{x0:-4,x1:4.5,z0:5.9,z1:11.5}],ul=[[30,22],[21,17],[11,12.5],[1,8.8]],hl=[[55,-320],[75,-127],[83,-82],[80,-60],[61,-16],[47,0],[28,21],[-6,57],[-50,101],[-120,190],[-200,290]],ns=4.2,Wu=[{x0:-.65,x1:.65,z0:1.35,z1:2.15},{x0:-3.45,x1:-1.55,z0:2.15,z1:3.04},{x0:-1.3,x1:1.5,z0:2.5,z1:3.04},{x0:.79,x1:1.5,z0:1.35,z1:2},{x0:-3.45,x1:-2.55,z0:-.05,z1:.4},{x0:3.05,x1:3.49,z0:.2,z1:1},{x0:2.95,x1:3.49,z0:1.35,z1:1.75},{x0:2.5,x1:3.49,z0:2.05,z1:3.04},{x0:-3.05,x1:-1.55,z0:-3.04,z1:-1.07},{x0:-.9,x1:-.25,z0:-3.04,z1:-2.5},{x0:-.43,x1:.03,z0:-.6,z1:-.2},{x0:1.6,x1:3.05,z0:-3.04,z1:-1.1},{x0:.26,x1:.8,z0:-2.5,z1:-1.95},{x0:.3,x1:.62,z0:-3.04,z1:-2.75},{x0:-7.45,x1:-5.75,z0:1.75,z1:2.65},{x0:-8.5,x1:-7.2,z0:-2,z1:-1.2},{x0:-7.2,x1:-4.8,z0:-6.4,z1:-4.15},{x0:-12,x1:-10,z0:6.3,z1:8.3}],Xu=[{x:Qn.x,z:Qn.z,r:Qn.r+.35}],an={llegada:[11,12.5],grava0:[-13,4.8],grava1:[-6,4.8],gravaE:[.8,5.6],estac:[.8,8.3],cesped:[-9.5,7],piscina:[-9.5,8.4],terrazaS:[-4.6,3.1],terraza:[-4.6,1],parrilla:[-6.6,-.9],tinaja:[-6,-2.9],umbral:[-3.55,1],dentro:[-2.5,1],comedor:[-1.4,1.5],hab1P:[-.95,.35],hab1:[-1.1,-.75],hab2P:[.85,.35],hab2:[1.15,-.8],banoP:[1.1,.7],banoP2:[1.95,.7],bano:[2.4,1]},qu=[["llegada","estac"],["grava0","grava1"],["grava1","gravaE"],["gravaE","estac"],["grava0","cesped"],["grava1","cesped"],["cesped","piscina"],["grava1","terrazaS"],["terrazaS","terraza"],["terraza","parrilla"],["parrilla","tinaja"],["terraza","tinaja"],["terraza","umbral"],["umbral","dentro"],["dentro","comedor"],["comedor","hab1P"],["hab1P","hab1"],["comedor","hab2P"],["hab2P","hab2"],["dentro","banoP"],["comedor","banoP"],["banoP","banoP2"],["banoP2","bano"]],is=[{id:"llegada",node:"llegada",yaw:319,photos:"terraza",ring:!1},{id:"estac",node:"estac",yaw:330,photos:"terraza",ring:!0},{id:"piscina",node:"piscina",yaw:180,photos:"piscina",ring:!0},{id:"terraza",node:"terraza",yaw:262,photos:"terraza",ring:!0},{id:"parrilla",node:"parrilla",yaw:250,photos:"terraza",ring:!0},{id:"tinaja",node:"tinaja",yaw:350,photos:"terraza",ring:!0},{id:"comedor",node:"comedor",yaw:88,photos:"comedor",ring:!0},{id:"bano",node:"bano",yaw:96,photos:"bano",ring:!0},{id:"hab1",node:"hab1",yaw:272,photos:"hab1",ring:!0},{id:"hab2",node:"hab2",yaw:42,photos:"hab2",ring:!0}],qt=["llegada","estac","terraza","parrilla","tinaja","comedor","bano","hab1","hab2","piscina"],fl={comedor:["comedor-1","comedor-2","comedor-3","comedor-4"],bano:["bano-1","bano-2"],hab1:["hab1-1","hab1-2"],hab2:["hab2-1","hab2-2"],terraza:["terraza-1","terraza-2","terraza-3"],piscina:["piscina-1"]};function rs(n,e){for(const[i,r]of Object.entries(ll))for(const a of r)if(n>=a.x0&&n<=a.x1&&e>=a.z0&&e<=a.z1)return i;return Math.hypot(n-Qn.x,e-Qn.z)<8?"piscina":Math.hypot(n-Ti.x,e-Ti.z)<3.2?"tinaja":n>=rr.x0&&n<=rr.x1&&e>=rr.z0&&e<=rr.z1?n<-7&&e<0?"parrilla":"terraza":n>-4&&e>5.5&&n<6&&e<14?"estac":"exterior"}const Yu=Object.freeze(Object.defineProperty({__proto__:null,CAMINO:ul,CESPED:An,COLLIDERS_CIRCLE:Xu,COLLIDERS_RECT:Wu,EDGES:qu,EYE:Vu,GRAVA:cl,H:sn,HOUSE:ir,NODES:an,PHOTOS:fl,PISCINA:Qn,ROOMS:ll,RUTA:hl,RUTA_ANCHO:ns,SPOTS:is,T:yt,TERRAZA:rr,TINAJA:Ti,TOUR:qt,WALLS:Gu,roomAt:rs},Symbol.toStringTag,{value:"Module"}));function ju(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),a={},s={},o=n[0].morphTargetsRelative,l=new kt;let u=0;for(let c=0;c<n.length;++c){const f=n[c];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,c),u+=p}}if(t){let c=0;const f=[];for(let d=0;d<n.length;++d){const p=n[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+c);c+=n[d].attributes.position.count}l.setIndex(f)}for(const c in a){const f=Hc(a[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(const c in s){const f=s[c][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<f;++d){const p=[];for(let v=0;v<s[c].length;++v)p.push(s[c][v][d]);const g=Hc(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Hc(n){let e,t,i,r=-1,a=0;for(let u=0;u<n.length;++u){const c=n[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=c.count*t}const s=new e(a),o=new Pt(s,t,i);let l=0;for(let u=0;u<n.length;++u){const c=n[u];if(c.isInterleavedBufferAttribute){const f=l/t;for(let d=0,p=c.count;d<p;d++)for(let g=0;g<t;g++){const v=c.getComponent(d,g);o.setComponent(d+f,g,v)}}else s.set(c.array,l);l+=c.count*t}return r!==void 0&&(o.gpuType=r),o}const j1=""+new URL("rug-D8My1nxR.jpg",import.meta.url).href,Z1=""+new URL("duvet-red-t1udHyRu.jpg",import.meta.url).href,Q1=""+new URL("duvet-gray-C4A1NHTT.jpg",import.meta.url).href,K1=""+new URL("futon-BYKfWhGU.jpg",import.meta.url).href,J1=""+new URL("gravel-C82NTnYT.jpg",import.meta.url).href,$1=""+new URL("turf-DNZPHq0Y.jpg",import.meta.url).href,e2=""+new URL("red-earth-QwhWXtor.jpg",import.meta.url).href,t2=""+new URL("dirt-A5eNRMa7.jpg",import.meta.url).href,n2=""+new URL("tile-Bjkyzcn6.jpg",import.meta.url).href,i2=""+new URL("sail-beige-DPd-1Bze.jpg",import.meta.url).href,r2=""+new URL("sail-green-zJilJCdG.jpg",import.meta.url).href;let Gs=4242;const fe=()=>(Gs=Gs*1664525+1013904223>>>0,Gs/4294967296),J=(n,e)=>n+fe()*(e-n),a2=n=>[n>>16&255,n>>8&255,n&255],Tt=(n,e)=>{const[t,i,r]=a2(n),a=s=>Math.max(0,Math.min(255,Math.round(s*e)));return`rgb(${a(t)},${a(i)},${a(r)})`};function ut(n,e,t,{repeat:i=!0}={}){const r=document.createElement("canvas");r.width=n,r.height=e,t(r.getContext("2d"),n,e);const a=new F1(r);return a.colorSpace=Jt,i&&(a.wrapS=a.wrapT=Ci),a.anisotropy=4,a}function $r(n,e,t,i,r,a,s){for(let o=0;o<i;o++)n.fillStyle=r[fe()*r.length|0],n.globalAlpha=J(.15,.6),n.beginPath(),n.arc(fe()*e,fe()*t,J(a,s),0,7),n.fill();n.globalAlpha=1}const Te={};Te.dirt=()=>ut(256,256,(n,e,t)=>{n.fillStyle="#a3957c",n.fillRect(0,0,e,t),$r(n,e,t,900,["#a4855f","#c9ad8a","#8f7452","#d4b898"],.6,2.2)});Te.concrete=()=>ut(512,512,(n,e,t)=>{n.fillStyle="#bcb6ab",n.fillRect(0,0,e,t);for(let i=0;i<60;i++)n.fillStyle=Tt(12367531,J(.88,1.08)),n.globalAlpha=.18,n.beginPath(),n.arc(fe()*e,fe()*t,J(20,90),0,7),n.fill();n.globalAlpha=1,$r(n,e,t,2400,["#a39d92","#cdc8be","#948e84","#d8d3ca"],.4,1.4),n.strokeStyle="rgba(70,64,56,.5)",n.lineWidth=2.5,n.strokeRect(0,0,e,t)});Te.gravel=()=>ut(256,256,(n,e,t)=>{n.fillStyle="#6d6d6b",n.fillRect(0,0,e,t);for(let i=0;i<1400;i++){const r=70+fe()*90;n.fillStyle=`rgb(${r},${r},${r-2})`,n.beginPath(),n.ellipse(fe()*e,fe()*t,J(2,5),J(1.5,4),fe()*3,0,7),n.fill()}});Te.turf=()=>ut(256,256,(n,e,t)=>{n.fillStyle="#5f9a3c",n.fillRect(0,0,e,t);for(let i=0;i<2500;i++){n.strokeStyle=["#4f8a30","#73ad4b","#67a040","#82b957"][fe()*4|0],n.globalAlpha=.6;const r=fe()*e,a=fe()*t;n.beginPath(),n.moveTo(r,a),n.lineTo(r+J(-2,2),a-J(3,7)),n.stroke()}n.globalAlpha=1});Te.redEarth=()=>ut(256,256,(n,e,t)=>{n.fillStyle="#93594a",n.fillRect(0,0,e,t),$r(n,e,t,1600,["#7d4a3c","#a8705a","#6a3f34","#b58468"],.8,3.2)});Te.vinyl=n=>ut(512,512,(e,t,i)=>{e.fillStyle=Tt(n,1),e.fillRect(0,0,t,i);const r=7,a=i/r;for(let s=0;s<r;s++){const o=fe()*t;for(const l of[o-t,o]){e.fillStyle=Tt(n,J(.9,1.08)),e.fillRect(l,s*a,t,a);for(let u=0;u<16;u++){e.strokeStyle=Tt(n,J(.8,1.15)),e.globalAlpha=.25,e.beginPath();const c=s*a+fe()*a;e.moveTo(l,c),e.lineTo(l+t,c+J(-2,2)),e.stroke()}e.globalAlpha=1,e.fillStyle="rgba(0,0,0,.28)",e.fillRect(l,s*a,2,a)}e.fillStyle="rgba(0,0,0,.22)",e.fillRect(0,s*a,t,1.5)}});Te.tiles=n=>ut(512,512,(e,t,i)=>{const a=t/3;for(let s=0;s<3;s++)for(let o=0;o<3;o++){e.fillStyle=Tt(n,J(.9,1.1)),e.fillRect(s*a,o*a,a,a);for(let l=0;l<40;l++)e.fillStyle=Tt(n,J(.75,1.25)),e.globalAlpha=.18,e.beginPath(),e.arc(s*a+fe()*a,o*a+fe()*a,J(6,26),0,7),e.fill();e.globalAlpha=1}e.strokeStyle="rgba(25,25,27,.85)",e.lineWidth=3;for(let s=0;s<=3;s++)e.beginPath(),e.moveTo(s*a,0),e.lineTo(s*a,i),e.stroke(),e.beginPath(),e.moveTo(0,s*a),e.lineTo(t,s*a),e.stroke()});Te.cladding=()=>ut(512,640,(n,e,t)=>{const i=t/2.5,r=.1*i,a=[9206119,10127992,8351326,10720386,9075308,9863789];for(let s=0,o=0;s<t;s+=r,o++){let l=-fe()*.6*i;for(;l<e;){const u=J(.45,1.1)*i,c=a[fe()*a.length|0];n.fillStyle=Tt(c,J(.9,1.08)),n.fillRect(l,s,u,r);for(let f=0;f<9;f++){n.strokeStyle=Tt(c,J(.7,1.25)),n.globalAlpha=.28,n.lineWidth=J(.6,1.6);const d=s+fe()*r;n.beginPath(),n.moveTo(l,d),n.lineTo(l+u,d+J(-1.5,1.5)),n.stroke()}n.globalAlpha=.18,n.fillStyle="#e9e2d6",n.fillRect(l,s+r*.15,u,r*.12),n.globalAlpha=1,n.fillStyle="rgba(35,26,18,.55)",n.fillRect(l,s,1.6,r),l+=u}n.fillStyle="rgba(30,22,15,.7)",n.fillRect(0,s+r-2,e,2)}});Te.cabinet=()=>ut(256,256,(n,e,t)=>{n.fillStyle="#b9b0a3",n.fillRect(0,0,e,t);for(let i=0;i<160;i++){n.strokeStyle=fe()>.5?"#d3cbbf":"#8f877b",n.globalAlpha=.35;const r=fe()*e;n.beginPath(),n.moveTo(r,0),n.lineTo(r+J(-6,6),t),n.stroke()}n.globalAlpha=1});Te.wood=n=>ut(256,256,(e,t,i)=>{e.fillStyle=Tt(n,1),e.fillRect(0,0,t,i);for(let r=0;r<200;r++){e.strokeStyle=Tt(n,J(.75,1.2)),e.globalAlpha=.3;const a=fe()*i;e.beginPath(),e.moveTo(0,a),e.lineTo(t,a+J(-3,3)),e.stroke()}e.globalAlpha=1,e.strokeStyle="rgba(0,0,0,.35)",e.lineWidth=2;for(let r=0;r<t;r+=t/4)e.beginPath(),e.moveTo(r,0),e.lineTo(r,i),e.stroke()});Te.rug=()=>ut(512,768,(n,e,t)=>{n.fillStyle="#f3dcc6",n.fillRect(0,0,e,t);const i=(r,a,s,o,l)=>{n.save(),n.translate(r,a),n.rotate(o),n.fillStyle=l,n.beginPath(),n.moveTo(0,0),n.bezierCurveTo(s*.6,-s*.2,s*.9,s*.5,0,s),n.bezierCurveTo(-s*.9,s*.5,-s*.6,-s*.2,0,0),n.fill(),n.strokeStyle="rgba(240,220,190,.7)",n.lineWidth=2;for(let u=-3;u<=3;u++)n.beginPath(),n.moveTo(0,s*.3),n.lineTo(u*s*.13,s*.85),n.stroke();n.restore()};for(let r=0;r<26;r++)i(fe()*e,fe()*t,J(110,190),fe()*6.3,["#3f7c48","#2f6a3d","#5a9a5a"][fe()*3|0]);for(let r=0;r<16;r++){const a=fe()*e,s=fe()*t,o=J(40,70);n.fillStyle=["#e5665b","#ef8a7b","#d9544c"][fe()*3|0],n.beginPath(),n.arc(a,s,o,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(a+o*.2,s-o*.1,o*.22,0,7),n.fill()}n.fillStyle="#efe7da",n.fillRect(0,0,e,10),n.fillRect(0,t-10,e,10)},{repeat:!1});Te.plaster=()=>ut(256,256,(n,e,t)=>{n.fillStyle="#f4f2ec",n.fillRect(0,0,e,t);for(let i=0;i<2600;i++){const r=226+fe()*26;n.fillStyle=`rgb(${r},${r-2},${r-6})`,n.globalAlpha=.5,n.fillRect(fe()*e,fe()*t,J(1,3),J(1,3))}n.globalAlpha=1});Te.fabric=n=>ut(128,128,(e,t,i)=>{e.fillStyle=Tt(n,1),e.fillRect(0,0,t,i);for(let r=0;r<i;r+=2)e.fillStyle=Tt(n,r%4?.9:1.08),e.globalAlpha=.45,e.fillRect(0,r,t,1);for(let r=0;r<t;r+=2)e.fillStyle=Tt(n,r%4?.92:1.06),e.globalAlpha=.35,e.fillRect(r,0,1,i);e.globalAlpha=1,$r(e,t,i,160,[Tt(n,.8),Tt(n,1.2)],.4,1)});Te.tuft=()=>ut(128,128,(n,e,t)=>{n.lineCap="round";for(let i=0;i<46;i++){const r=e/2+J(-26,26),a=J(-20,20),s=J(20,105);n.strokeStyle=["#b8a66a","#a4934f","#c9b982","#8f8d4c","#7f8a48"][fe()*5|0],n.lineWidth=J(1.2,2.6),n.globalAlpha=J(.7,1),n.beginPath(),n.moveTo(r,t-2),n.quadraticCurveTo(r+a*.3,t-s*.6,r+a,t-s),n.stroke()}n.globalAlpha=1},{repeat:!1});function jr(n,e,t,i,r,a,s,o=.5){for(let l=0;l<r;l++){const u=fe()*Math.PI*2,c=Math.sqrt(fe())*i,f=e+Math.cos(u)*c,d=t+Math.sin(u)*c*.8,p=J(a*.6,a),g=u+J(-.6,.6);n.strokeStyle=s[fe()*s.length|0],n.globalAlpha=J(.65,1),n.lineWidth=J(2,4.2),n.beginPath(),n.moveTo(f,d),n.quadraticCurveTo(f+Math.cos(g)*p*.6,d+Math.sin(g)*p*.3+p*o*.5,f+Math.cos(g)*p*.8,d+p*o),n.stroke()}n.globalAlpha=1}Te.treeEucalyptus=()=>ut(512,1024,(n,e,t)=>{n.lineCap="round";const i=e/2;n.strokeStyle="#8b7f6c",n.lineWidth=15,n.beginPath(),n.moveTo(i,t),n.bezierCurveTo(i-10,t*.75,i+14,t*.58,i+4,t*.36),n.stroke(),n.strokeStyle="#a89c88",n.lineWidth=5,n.beginPath(),n.moveTo(i+4,t),n.bezierCurveTo(i-6,t*.75,i+18,t*.58,i+8,t*.36),n.stroke();const r=["#5f7a58","#6d8862","#4d6849","#7f9a72","#8fa583","#56704f"],a=[[-120,.44,90],[110,.4,96],[-60,.3,84],[70,.24,88],[0,.16,100],[-150,.3,70],[150,.28,72],[-20,.36,80]];for(const[s,o,l]of a){const u=i+s,c=t*o;n.strokeStyle="#8b7f6c",n.lineWidth=6,n.beginPath(),n.moveTo(i+6,t*(o+.16)),n.quadraticCurveTo(i+s*.4,c+60,u,c+20),n.stroke(),jr(n,u,c,l,260,50,r,.8)}jr(n,i+4,t*.12,70,200,46,["#8fa583","#a3b696","#7f9a72"],.7)});Te.treePine=()=>ut(512,1024,(n,e,t)=>{n.lineCap="round";const i=e/2;n.strokeStyle="#5a4838",n.lineWidth=16,n.beginPath(),n.moveTo(i,t),n.lineTo(i+6,t*.12),n.stroke();const r=["#2f4a2f","#3a5737","#283f29","#456343","#34502f"],a=[];for(let s=0;s<15;s++){const o=s/14,l=t*(.62-o*.5),u=(.35+Math.sin(o*Math.PI)*.65)*170;a.push([i+J(-u,u),l,J(48,78)]),a.push([i+J(-u*.6,u*.6),l+J(-30,30),J(40,70)])}for(const[s,o]of a)n.strokeStyle="#4e3f31",n.lineWidth=5,n.beginPath(),n.moveTo(i+4,o+40),n.lineTo(s,o),n.stroke();for(const[s,o,l]of a)jr(n,s,o,l,170,26,r,.25);jr(n,i+6,t*.12,60,120,22,["#4c6b47","#557552"],.2)});Te.treeBush=()=>ut(512,512,(n,e,t)=>{n.lineCap="round";const i=e/2;n.strokeStyle="#6b5a47",n.lineWidth=14,n.beginPath(),n.moveTo(i,t),n.quadraticCurveTo(i-12,t*.7,i-30,t*.5),n.moveTo(i,t*.85),n.quadraticCurveTo(i+20,t*.65,i+46,t*.46),n.stroke();const r=["#6e7d48","#7d8a55","#5c6d3f","#8f9a62","#67783f"];for(const[a,s,o]of[[-70,.36,110],[80,.34,105],[0,.22,120],[-20,.5,90],[60,.5,80]])jr(n,i+a,t*s,o,260,30,r,.5)});Te.leafClump=n=>ut(256,256,(e,t,i)=>{e.lineCap="round";const r=n==="pine"?["#26402a","#2f4d31","#3b5c3a","#203823","#456843"]:n==="bush"?["#55653a","#667545","#495a32","#76844f","#3f5030"]:["#5c7754","#6b8661","#4f6a49","#7e9a72","#8ea585","#44603f"],a=n==="pine"?520:n==="bush"?420:300;for(let s=0;s<a;s++){const o=fe()*Math.PI*2,l=Math.pow(fe(),.7)*t*.42,u=t/2+Math.cos(o)*l,c=i/2+Math.sin(o)*l*.85;if(e.strokeStyle=r[fe()*r.length|0],e.globalAlpha=J(.75,1),n==="pine"){e.lineWidth=J(1.4,2.4);const f=J(14,26),d=o+J(-.5,.5);e.beginPath(),e.moveTo(u,c),e.lineTo(u+Math.cos(d)*f,c+Math.sin(d)*f*.7+4),e.stroke()}else{const f=n==="bush"?J(9,16):J(18,34),d=J(4,7),p=n==="euc"?Math.PI/2+J(-.7,.7):fe()*Math.PI*2;e.fillStyle=e.strokeStyle,e.save(),e.translate(u,c),e.rotate(p),e.beginPath(),e.ellipse(f/2,0,f/2,d/2,0,0,Math.PI*2),e.fill(),e.restore()}}e.globalAlpha=1},{repeat:!1});Te.bark=n=>ut(128,256,(e,t,i)=>{e.fillStyle=Tt(n,1),e.fillRect(0,0,t,i);for(let r=0;r<140;r++){e.strokeStyle=Tt(n,J(.65,1.3)),e.globalAlpha=.45,e.lineWidth=J(1,3);const a=fe()*t;e.beginPath(),e.moveTo(a,0),e.lineTo(a+J(-4,4),i),e.stroke()}e.globalAlpha=1});Te.poolWall=()=>ut(512,256,(n,e,t)=>{n.fillStyle="#a7a59c",n.fillRect(0,0,e,t);for(let i=0;i<t;i+=8)for(let r=i/8%2?0:8;r<e;r+=16)n.fillStyle="rgba(255,255,255,0.10)",n.fillRect(r,i,8,8);for(let i=0;i<900;i++)n.fillStyle=fe()<.5?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.07)",n.fillRect(fe()*e,fe()*t,J(1,3),J(1,3));n.fillStyle="rgba(60,60,58,0.55)",n.fillRect(0,t-22,e,22),n.fillStyle="rgba(230,228,220,0.6)",n.fillRect(0,6,e,5)},{repeat:!0});Te.planksV=n=>ut(256,256,(e,t,i)=>{const a=t/6;for(let s=0;s<6;s++){const o=Tt(n,J(.85,1.1));e.fillStyle=o,e.fillRect(s*a,0,a,i);for(let l=0;l<14;l++){e.strokeStyle=Tt(n,J(.7,1.2)),e.globalAlpha=.3,e.lineWidth=J(.6,1.8);const u=s*a+fe()*a;e.beginPath(),e.moveTo(u,0),e.bezierCurveTo(u+J(-3,3),i*.3,u+J(-3,3),i*.7,u+J(-2,2),i),e.stroke()}e.globalAlpha=1,e.fillStyle="rgba(30,20,12,.6)",e.fillRect(s*a,0,2,i)}e.fillStyle="rgba(40,36,32,.85)",e.fillRect(0,i*.18,t,7),e.fillRect(0,i*.78,t,7)});Te.contact=()=>ut(128,128,(n,e,t)=>{const i=n.createRadialGradient(e/2,t/2,4,e/2,t/2,e/2);i.addColorStop(0,"rgba(0,0,0,0.55)"),i.addColorStop(.55,"rgba(0,0,0,0.3)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,e,t)},{repeat:!1});Te.rattan=()=>ut(128,128,(n,e,t)=>{n.fillStyle="#7c6a4f",n.fillRect(0,0,e,t);for(let i=0;i<t;i+=8)for(let r=0;r<e;r+=8){const a=(r+i)/8%2;n.fillStyle=a?"#9b8763":"#8a7656",n.fillRect(r+1,i+1,6,6)}},{repeat:!0});Te.rockTex=()=>ut(128,128,(n,e,t)=>{n.fillStyle="#8b857b",n.fillRect(0,0,e,t),$r(n,e,t,500,["#6e695f","#a39d92","#7a746a","#b3ad9f"],.8,3)});const s2=new H1,Ws=new Map;function yn(n,e=!0){if(Ws.has(n))return Ws.get(n);const t=s2.load(n);return t.colorSpace=Jt,e&&(t.wrapS=t.wrapT=Ci),t.anisotropy=8,Ws.set(n,t),t}const qn={rug:()=>yn(j1,!1),duvetRed:()=>yn(Z1),duvetGray:()=>yn(Q1),futon:()=>yn(K1),gravel:()=>yn(J1),turf:()=>yn($1),redEarth:()=>yn(e2),dirt:()=>yn(t2),tile:()=>yn(n2),sailBeige:()=>yn(i2),sailGreen:()=>yn(r2)},Xs=new Map;function he(n,e={}){const t=JSON.stringify([n,e.map?e.map.uuid:"",e.bump?e.bump.uuid:"",e.bumpScale,e.tile,e.rough,e.metal,e.opacity,e.emissive,e.side,e.keepUV,e.envI]);if(Xs.has(t))return Xs.get(t);const i=new ln({color:n,roughness:e.rough??.85,metalness:e.metal??0,transparent:e.opacity!==void 0,opacity:e.opacity??1,side:e.side??Kn,emissive:e.emissive??0,map:e.map||null,bumpMap:e.bump||null,bumpScale:e.bumpScale??1});return e.opacity!==void 0&&(i.depthWrite=!1),i.userData={tile:e.tile||0,keepUV:!!e.keepUV,noShadow:e.opacity!==void 0,envI:e.envI??1},Xs.set(t,i),i}class o2{constructor(){this.items=[],this.stack=[new Ae]}push(e=0,t=0,i=0,r=0){const a=new Ae().makeRotationY(r).setPosition(e,t,i);this.stack.push(this.stack[this.stack.length-1].clone().multiply(a))}pop(){this.stack.pop()}_add(e,t,i,r,a,s,o,l){const u=new Ae().compose(new D(i,r,a),new Un().setFromEuler(new Yt(s,o,l)),new D(1,1,1));e.applyMatrix4(this.stack[this.stack.length-1].clone().multiply(u));const c=t.userData.tile;if(c&&!t.userData.keepUV){const f=Array.isArray(c)?c[0]:c,d=Array.isArray(c)?c[1]:c,p=e.attributes.position,g=e.attributes.normal,v=e.attributes.uv;for(let m=0;m<p.count;m++){const h=Math.abs(g.getX(m)),x=Math.abs(g.getY(m)),_=Math.abs(g.getZ(m));let M,P;x>h&&x>_?(M=p.getX(m),P=p.getZ(m)):h>_?(M=p.getZ(m),P=p.getY(m)):(M=p.getX(m),P=p.getY(m)),v.setXY(m,M/f,P/d)}}this.items.push({geo:e,material:t})}box(e,t,i,r,a,s,o,l=0,u=0,c=0){this._add(new Tn(e,t,i),r,a,s+t/2,o,u,l,c)}cyl(e,t,i,r,a,s,o,l=12,u=0,c=0){this._add(new Li(e,t,i,l),r,a,s+i/2,o,u,0,c)}sphere(e,t,i,r,a,s=1,o=1,l=1,u=12){const c=new ts(e,u,Math.max(6,u>>1));c.scale(s,o,l),this._add(c,t,i,r,a,0,0,0)}plane(e,t,i,r,a,s,o=0){const l=new Xt(e,t);l.rotateX(-Math.PI/2),l.rotateY(o),this._add(l,i,r,a,s,0,0,0)}geo(e,t,i=0,r=0,a=0,s=0,o=0,l=0){this._add(e,t,i,r,a,s,o,l)}build(){const e=new Map;for(const i of this.items){const r=i.geo.index?i.geo.toNonIndexed():i.geo;for(const a of Object.keys(r.attributes))["position","normal","uv"].includes(a)||r.deleteAttribute(a);r.attributes.uv||r.setAttribute("uv",new Pt(new Float32Array(r.attributes.position.count*2),2)),e.has(i.material)||e.set(i.material,[]),e.get(i.material).push(r)}const t=new Ei;for(const[i,r]of e){const a=ju(r,!1),s=new ct(a,i);s.castShadow=!i.userData.noShadow,s.receiveShadow=!0,t.add(s)}return t}}function l2(){const n=Te.plaster(),e=Te.cladding();return{paint:he(15789800,{map:n,bump:n,bumpScale:.6,tile:1.2,rough:.95}),ceiling:he(16777215,{map:n,bump:n,bumpScale:.4,tile:1.2,rough:1}),skirting:he(16316403,{rough:.5}),gutter:he(7106418,{rough:.5,metal:.4}),roof:he(14144975,{rough:.9}),fascia:he(15329249),foundation:he(16777215,{map:Te.concrete(),tile:3}),floorComedor:he(16777215,{map:Te.vinyl(9799286),tile:1.2,rough:.55}),floorHab1:he(16777215,{map:Te.vinyl(11115919),tile:1.2,rough:.55}),floorHab2:he(16777215,{map:Te.vinyl(8484459),tile:1.2,rough:.55}),floorBano:he(16777215,{map:qn.tile(),tile:1.2,rough:.3,envI:.8}),clad:he(16777215,{map:e,bump:e,bumpScale:2.6,tile:[2,2.5],rough:.92}),frameDark:he(2828841,{rough:.5,metal:.4}),frameWood:he(3878695,{rough:.7}),glass:he(12900578,{opacity:.22,rough:.02,metal:.4,side:St,envI:1.5}),doorWhite:he(16184559,{rough:.6}),doorRustic:he(16777215,{map:Te.wood(11567439),tile:1,rough:.8}),gold:he(13936698,{rough:.3,metal:.5}),blind:he(14207922,{rough:1,side:St}),lamp:he(16774877,{emissive:16773320,rough:.5})}}function c2(n){const e=[...n.openings].sort((r,a)=>r.c-a.c),t=[];let i=n.from;for(const r of e){const a=r.c-r.w/2,s=r.c+r.w/2;a>i&&t.push({a:i,b:a,y0:0,y1:sn,solid:!0}),r.sill>0&&t.push({a,b:s,y0:0,y1:r.sill,solid:!0}),r.head<sn&&t.push({a,b:s,y0:r.head,y1:sn,solid:!1}),i=s}return i<n.to&&t.push({a:i,b:n.to,y0:0,y1:sn,solid:!0}),t}function u2(n,e){const t=[],{x0:i,x1:r,z0:a,z1:s}=ir;n.box(r-i+.5,.1,s-a+.5,e.foundation,0,-.15,0);const o={comedor:e.floorComedor,hab1:e.floorHab1,hab2:e.floorHab2,bano:e.floorBano};for(const[c,f]of Object.entries(ll))for(const d of f)n.box(d.x1-d.x0,.05,d.z1-d.z0,o[c],(d.x0+d.x1)/2,-.05,(d.z0+d.z1)/2);n.box(r-i+.9,.18,s-a+.9,e.roof,0,sn,0),n.box(r-i+.8,.02,s-a+.8,e.ceiling,0,sn-.02,0);const l=(r-i+.9)/2,u=(s-a+.9)/2;n.box(r-i+1,.09,.09,e.gutter,0,sn-.05,-u-.03),n.box(r-i+1,.09,.09,e.gutter,0,sn-.05,u+.03),n.box(.09,.09,s-a+1,e.gutter,-l-.03,sn-.05,0),n.box(.09,.09,s-a+1,e.gutter,l+.03,sn-.05,0),n.box(.08,sn-.1,.08,e.gutter,-l-.03,0,u+.03);for(const c of Gu){const f=c.ext,d=c.ext!==0&&c.ax==="z"?yt/2:0,p=c2({...c,from:c.from-d,to:c.to+d});for(const g of p){const v=g.b-g.a,m=g.y1-g.y0,h=(g.a+g.b)/2;if(c.ax==="x"){if(n.box(v,m,yt,e.paint,h,g.y0,c.at),f&&n.box(v,m,.03,e.clad,h,g.y0,c.at+f*(yt/2+.015)),g.solid&&(t.push({x0:g.a,x1:g.b,z0:c.at-yt/2,z1:c.at+yt/2}),g.y0===0))for(const x of f?[-f]:[-1,1])n.box(v,.08,.014,e.skirting,h,0,c.at+x*(yt/2+.007))}else if(n.box(yt,m,v,e.paint,c.at,g.y0,h),f&&n.box(.03,m,v,e.clad,c.at+f*(yt/2+.015),g.y0,h),g.solid&&(t.push({x0:c.at-yt/2,x1:c.at+yt/2,z0:g.a,z1:g.b}),g.y0===0))for(const x of f?[-f]:[-1,1])n.box(.014,.08,v,e.skirting,c.at+x*(yt/2+.007),0,h)}for(const g of c.openings)if(h2(n,e,c,g),!g.pass&&g.sill===0){const v=g.c-g.w/2,m=g.c+g.w/2;t.push(c.ax==="x"?{x0:v,x1:m,z0:c.at-yt/2,z1:c.at+yt/2}:{x0:c.at-yt/2,x1:c.at+yt/2,z0:v,z1:m})}}for(const[c,f]of[[-1.4,1.5],[.2,1.5],[-1.7,-1.6],[1.9,-1.6],[2.55,1.5]])n.cyl(.14,.14,.02,e.lamp,c,sn-.05,f,16);return t}function h2(n,e,t,i){const r=i.c-i.w/2,a=i.c+i.w/2,s=t.ext?-t.ext:1,o=(c,f,d,p,g,v,m=0)=>{t.ax==="x"?n.box(c,f,d,p,g,v,t.at+m):n.box(d,f,c,p,t.at+m,v,g)};if(i.kind==="door"){const c=i.hinge==="end"?-1:1,f=i.hinge==="end"?a:r,d=(i.angle??(i.entrance?100:80))*Math.PI/180,p=i.entrance?-1:i.swing,g=i.entrance?1:c,v=i.entrance?r:f,m=t.ax==="x"?[g,0]:[0,g],h=t.ax==="x"?[0,p]:[p,0],x=[m[0]*Math.cos(d)+h[0]*Math.sin(d),m[1]*Math.cos(d)+h[1]*Math.sin(d)],_=t.ax==="x"?[v,t.at]:[t.at,v],M=i.w-.03,P=[_[0]+x[0]*(M/2),_[1]+x[1]*(M/2)],T=-Math.atan2(x[1],x[0]),A=i.entrance?e.doorRustic:e.doorWhite;n.box(M,i.head-.02,i.entrance?.06:.04,A,P[0],0,P[1],T);const R=[-x[1],x[0]];for(const S of[-1,1])n.sphere(.035,e.gold,_[0]+x[0]*(M-.08)+R[0]*.05*S,1,_[1]+x[1]*(M-.08)+R[1]*.05*S);const E=i.entrance?e.frameWood:e.doorWhite;o(.05,i.head,yt+.02,E,r-0,0),o(.05,i.head,yt+.02,E,a,0),o(i.w+.05,.05,yt+.02,E,i.c,i.head-.02);return}const l=.05,u=i.head-i.sill;if(i.kind==="slider"){o(i.w,u-.02,.012,e.glass,i.c,i.sill);for(const c of[r+l/2,a-l/2,i.c])o(l,u,.08,e.frameDark,c,i.sill);o(i.w,l,.08,e.frameDark,i.c,i.head-l),o(i.w,l,.08,e.frameDark,i.c,i.sill),o(.03,.22,.05,e.frameDark,i.c+.06,i.sill+.9);return}if(o(i.w,u,.012,e.glass,i.c,i.sill),o(l,u,.09,e.frameWood,r+l/2,i.sill),o(l,u,.09,e.frameWood,a-l/2,i.sill),o(i.w,l,.09,e.frameWood,i.c,i.head-l),o(i.w,l,.09,e.frameWood,i.c,i.sill),i.w>.8&&o(.04,u,.1,e.frameWood,i.c,i.sill),o(i.w+.1,.03,.16,e.paint,i.c,i.sill-.03,s*.06),i.blind){const c=u*i.blind;o(i.w-.04,c,.012,e.blind,i.c,i.head-c,s*.05),o(i.w-.04,.06,.07,e.blind,i.c,i.head-.06,s*.06)}}const Ur=new D;function fn(n,e,t,i,r,a){const s=2*Math.PI*r/4,o=Math.max(a-2*r,0),l=Math.PI/4;Ur.copy(e),Ur[i]=0,Ur.normalize();const u=.5*s/(s+o),c=1-Ur.angleTo(n)/l;return Math.sign(Ur[t])===1?c*u:o/(s+o)+u+u*(1-c)}class Ga extends Tn{constructor(e=1,t=1,i=1,r=2,a=.1){if(r=r*2+1,a=Math.min(e/2,t/2,i/2,a),super(1,1,1,r,r,r),r===1)return;const s=this.toNonIndexed();this.index=null,this.attributes.position=s.attributes.position,this.attributes.normal=s.attributes.normal,this.attributes.uv=s.attributes.uv;const o=new D,l=new D,u=new D(e,t,i).divideScalar(2).subScalar(a),c=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=c.length/6,g=new D,v=.5/r;for(let m=0,h=0;m<c.length;m+=3,h+=2)switch(o.fromArray(c,m),l.copy(o),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),c[m+0]=u.x*Math.sign(o.x)+l.x*a,c[m+1]=u.y*Math.sign(o.y)+l.y*a,c[m+2]=u.z*Math.sign(o.z)+l.z*a,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[h+0]=fn(g,l,"z","y",a,i),d[h+1]=1-fn(g,l,"y","z",a,t);break;case 1:g.set(-1,0,0),d[h+0]=1-fn(g,l,"z","y",a,i),d[h+1]=1-fn(g,l,"y","z",a,t);break;case 2:g.set(0,1,0),d[h+0]=1-fn(g,l,"x","z",a,e),d[h+1]=fn(g,l,"z","x",a,i);break;case 3:g.set(0,-1,0),d[h+0]=1-fn(g,l,"x","z",a,e),d[h+1]=1-fn(g,l,"z","x",a,i);break;case 4:g.set(0,0,1),d[h+0]=1-fn(g,l,"x","y",a,e),d[h+1]=1-fn(g,l,"y","x",a,t);break;case 5:g.set(0,0,-1),d[h+0]=fn(g,l,"x","y",a,e),d[h+1]=1-fn(g,l,"y","x",a,t);break}}}const _t=Math.PI;function f2(){const n={futon:Te.fabric(11060055),linen:Te.fabric(15855593),gray:Te.fabric(9278618),red:Te.fabric(12855876),tableWood:Te.wood(2827810),sailG:Te.fabric(2908496),sailB:Te.fabric(13220760)};return{black:he(1710619,{rough:.6,envI:.12}),blackMatte:he(2500135,{rough:.9,envI:.15}),woodLight:he(13148266,{rough:.7}),woodOak:he(12159573,{rough:.7}),woodDark:he(7031339,{rough:.75}),white:he(16053231,{rough:.8}),steel:he(12830667,{rough:.32,metal:.85,envI:.9}),chrome:he(14869992,{rough:.12,metal:.95,envI:1.3}),cabinet:he(16777215,{map:Te.cabinet(),tile:1}),counter:he(1644826,{rough:.4,metal:.05,envI:.08}),futon:he(16777215,{map:qn.futon(),tile:.45,rough:1}),linen:he(16777215,{map:n.linen,bump:n.linen,bumpScale:.6,tile:.5,rough:1}),tableTop:he(16777215,{map:n.tableWood,tile:1,rough:.5,envI:.08}),rug:he(16777215,{map:qn.rug(),keepUV:!0,rough:1}),grayDuvet:he(16777215,{map:qn.duvetGray(),tile:.6,rough:1,side:St}),redDuvet:he(16777215,{map:qn.duvetRed(),tile:.6,rough:1,side:St}),flower:he(16107471,{rough:1}),dark:he(3026737,{rough:.65,envI:.15}),bowl:he(16316662,{rough:.15}),green:he(4033109,{rough:1}),art:he(5939290,{rough:.9}),red:he(14037066,{rough:1}),stripeB:he(2837644,{rough:1}),glassTop:he(11125964,{opacity:.4,rough:.02,metal:.3,side:St,envI:1.4}),rattan:he(16777215,{map:Te.rattan(),tile:.22,rough:.95}),contact:he(16777215,{map:Te.contact(),keepUV:!0,opacity:1,rough:1}),concrete:he(16777215,{map:Te.concrete(),tile:3}),tinajaWood:he(16777215,{map:Te.planksV(10187848),tile:1,rough:.85}),water:he(4169656,{opacity:.82,rough:.04,metal:.2,envI:1.6}),poolWall:he(16777215,{map:Te.poolWall(),keepUV:!0,rough:.7}),poolPost:he(7828588,{rough:.6,metal:.15}),pink:he(14260896,{rough:.8}),cream:he(14076848,{rough:.9}),teal:he(6262666,{rough:.8}),slateRoof:he(5068129,{rough:.9}),yellow:he(15975971,{rough:.7}),sailGreen:he(16777215,{map:n.sailG,tile:.25,rough:1,side:St}),sailBeige:he(16777215,{map:n.sailB,tile:.25,rough:1,side:St}),pergola:he(16777215,{map:Te.wood(9071176),tile:1.2,rough:.9}),clayPot:he(16119282,{rough:.8}),leaf:he(4614202,{rough:1}),soil:he(4864556,{rough:1}),plant:(()=>{const e=he(16777215,{map:Te.leafClump("bush"),keepUV:!0,rough:1,side:St});return e.alphaTest=.45,e})()}}function Nr(n,e,t,i,r){n.push(t,0,i,r),n.box(.46,.045,.44,e.black,0,.44,0),n.box(.44,.3,.04,e.black,0,.5,-.21,0,-.18);for(const[a,s]of[[-.19,-.17],[.19,-.17],[-.19,.17],[.19,.17]])n.cyl(.012,.012,.44,e.woodLight,a*1.15,0,s*1.15,6,s*.5,-a*.5);n.pop()}function d2(n,e,t,i){const a=-e/2+.5,s=n+2*t,o=e/2-a+t,l=new Xt(s,o,30,36);l.rotateX(-_t/2);const u=l.attributes.position,c=f=>.05*(1-Math.exp(-f/.05));for(let f=0;f<u.count;f++){const d=u.getX(f),p=u.getZ(f)+o/2+a,g=Math.max(0,Math.abs(d)-n/2),v=Math.max(0,p-e/2),m=Math.max(g,v),h=Math.min(1,Math.abs(d)/(n/2)),x=m>0?0:.035*(1-h*h),_=.009*(Math.sin(d*9+p*3.1)+Math.sin(p*7.3-d*4.2))*(m>0?.6:1),M=p<a+.12?.035*(1-(p-a)/.12):0;u.setXYZ(f,Math.sign(d)*(Math.min(Math.abs(d),n/2)+c(g))+(m>0?_*.6:0),i+x+_+M-(m>0?m-c(m):0),Math.min(p,e/2)+c(v))}return l.computeVertexNormals(),l}function Vc(n,e,{x:t,z:i,ry:r,wid:a=1.5,len:s=1.95,duvet:o,legMat:l,frameMat:u}){n.push(t,0,i,r),n.box(a,.2,s,u,0,.1,0),n.geo(new Ga(a-.03,.22,s-.03,3,.05),e.linen,0,.41,0),n.geo(d2(a+.04,s,.3,.535),o,0,0,0);for(const c of[-1,1])n.geo(new Ga(.58,.15,.38,3,.07),e.linen,c*a*.24,.6,-s/2+.27,.12,0,0);for(const c of[-1,1])for(const f of[-1,1])n.box(.1,.12,.1,l,c*(a/2-.08),0,f*(s/2-.08));Kt(n,e,0,0,a+.5,s+.5),n.pop()}function Kt(n,e,t,i,r,a,s=.012,o=0){n.plane(r,a,e.contact,t,s,i,o)}function Aa(n,e,t,i,r,a){n.push(t,i,r,a),n.box(.3,.03,.2,e.woodLight,0,0,.1),n.cyl(.05,.06,.02,e.white,0,.03,.1,10),n.cyl(.008,.008,.28,e.white,0,.05,.1,6),n.sphere(.07,e.white,0,.36,.13,1,.7,1,10),n.pop()}function p2(n,e,t){n.plane(2.1,1.4,t.rug,-1.3,.008,1.5,Math.PI/2),n.push(-2.5,0,2.6,0),n.box(1.9,.14,.86,t.dark,0,.12,0),n.geo(new Ga(1.9,.2,.84,3,.07),t.futon,0,.36,0),n.geo(new Ga(1.9,.52,.2,3,.08),t.futon,0,.6,.36,.22,0,0);for(const i of[-1,1])n.box(.06,.22,.86,t.dark,i*.98,.2,0);Kt(n,t,0,0,2.3,1.2),n.pop(),n.box(.62,.48,.03,t.black,-2.45,1.35,3.03),n.box(.54,.4,.01,t.white,-2.45,1.39,3.015),n.cyl(.13,.13,.01,t.art,-2.45,1.44,3.01,16,_t/2,0),n.box(1,.58,.05,t.black,-2.9,1.2,-.03),n.box(.7,.03,.4,t.woodOak,-2.95,.7,.18);for(const[i,r]of[[-.3,-.17],[.3,-.17],[-.3,.17],[.3,.17]])n.box(.025,.7,.025,t.black,-2.95+i,0,.18+r);n.cyl(.012,.012,1.6,t.black,-3.4,0,.25,6),n.cyl(.13,.19,.22,t.white,-3.4,1.55,.25,14),n.cyl(.16,.16,.02,t.black,-3.4,0,.25,12),n.cyl(.14,.14,.03,t.white,-3.1,.73,.2,10),n.cyl(.02,.02,.35,t.white,-3.1,.73,.2,6),n.cyl(.16,.16,.03,t.white,-3.1,1.08,.2,16,_t/2,0),n.box(1.2,.04,.8,t.tableTop,0,.72,1.75);for(const[i,r]of[[-.5,-.32],[.5,-.32],[-.5,.32],[.5,.32]])n.cyl(.02,.02,.72,t.woodLight,i,0,1.75+r,8,r*.2,-i*.15);Nr(n,t,-.28,1.12,0),Nr(n,t,.28,1.12,0),Nr(n,t,-.28,2.34,_t),Nr(n,t,.28,2.34,_t),Kt(n,t,0,1.75,2,1.7),Kt(n,t,-.2,2.75,2.8,.9),Kt(n,t,1.15,1.68,1,.95),n.box(2.25,.8,.54,t.cabinet,-.175,.06,2.77),n.box(2.3,.04,.62,t.counter,-.175,.86,2.79);for(let i=-1.1;i<.95;i+=.5)n.box(.012,.74,.01,t.black,i,.1,2.495);for(let i=-1.3;i<.9;i+=.5)n.box(.22,.02,.02,t.black,i+.25,.78,2.49);n.box(.6,.012,.4,t.steel,-.35,.9,2.8),n.cyl(.012,.012,.28,t.chrome,-.35,.9,3,8),n.box(.012,.012,.16,t.chrome,-.35,1.17,2.93),n.cyl(.07,.09,.2,t.blackMatte,.5,.9,2.85,10),n.box(.2,.3,.22,t.black,.78,.9,2.88),n.cyl(.055,.055,.2,t.white,.25,.9,2.9,10),n.cyl(.06,.06,.15,t.black,-.9,.9,2.95,8),n.box(.3,.42,.3,t.black,-1.15,0,2.7),n.box(.54,2.15,.54,t.cabinet,1.22,.04,2.77),n.box(.06,.24,.4,t.white,.93,1.5,2.77),n.box(.05,.42,.45,t.black,.95,.95,2.77),n.box(.02,.28,.32,t.red,.92,.85,2.77),n.box(.7,1.85,.65,t.steel,1.13,.03,1.68),n.box(.01,.012,.65,t.dark,.77,.64,1.68),n.box(.02,.5,.02,t.dark,.765,.85,1.42),n.box(.02,.4,.02,t.dark,.765,.1,1.42),n.box(.01,.13,.11,t.dark,.77,1.3,1.7),n.box(.01,.22,.17,he(15266016),.77,1.5,1.85),n.box(.44,.5,.8,t.dark,3.27,.3,.6),n.box(.44,.03,.8,t.woodOak,3.27,.8,.6);for(const[i,r]of[[-.16,-.36],[.16,-.36],[-.16,.36],[.16,.36]])n.box(.03,.3,.03,t.woodLight,3.27+i,0,.6+r);n.cyl(.19,.16,.13,t.bowl,3.25,.83,.6,20),n.cyl(.012,.012,.28,t.black,3.43,.83,.6,8),n.box(.06,.012,.012,t.black,3.4,1.09,.6),Kt(n,t,3.25,.6,.8,1.1),Kt(n,t,3.2,1.55,.7,.7),n.box(.34,.4,.38,t.bowl,3.2,.03,1.55),n.box(.2,.36,.38,t.bowl,3.4,.45,1.55),n.box(.04,.28,.2,t.bowl,3.42,.15,1.55),n.box(.36,.03,.4,t.bowl,3.18,.43,1.55),n.box(.02,2.15,1,e.floorBano,3.485,0,2.55),n.box(.99,2.15,.02,e.floorBano,3,0,3.03),n.box(1,2,.012,e.glass,3,0,2.05),n.box(.012,2,.5,e.glass,2.5,0,2.3),n.cyl(.14,.14,.02,t.chrome,3.2,2.05,2.55,16),n.box(.3,.02,.02,t.chrome,3.35,2.06,2.55),n.cyl(.012,.012,1.1,t.chrome,3.46,.95,2.3,6),n.box(.03,.03,.6,t.chrome,3.46,1,2.7),n.box(.1,.06,.06,t.black,3.44,1.1,2.4),Vc(n,t,{x:-2.3,z:-2.05,ry:0,duvet:t.grayDuvet,legMat:t.dark,frameMat:t.woodLight}),Aa(n,t,-3.3,.5,-3.04,0),Aa(n,t,-1.3,.5,-3.04,0),n.push(-.55,0,-2.78,0),n.box(.6,1.95,.5,t.white,0,.02,0),n.box(.62,.04,.52,t.woodOak,0,1.95,0);for(const i of[-1,1])n.box(.025,1.93,.02,t.woodOak,i*.2875,.03,.255);n.box(.006,1.88,.006,t.dark,0,.06,.256);for(const i of[-1,1])n.box(.016,.32,.022,t.woodDark,i*.04,.9,.265);n.pop(),Kt(n,t,-.55,-2.78,.9,.8),Kt(n,t,-.2,-.4,.7,.6),n.push(-.2,0,-.4,.1),n.box(.42,.42,.34,t.black,0,.02,0);for(let i=0;i<5;i++)n.box(.01,.28,.005,t.dark,-.12+i*.06,.09,-.172);n.box(.03,.02,.25,t.dark,.1,.44,0),n.pop(),n.cyl(.012,.012,1.7,t.black,-3.3,0,-.6,6);for(let i=0;i<4;i++)n.box(.22,.015,.015,t.black,-3.3+Math.cos(i*1.6)*.1,1.5+i%2*.1,-.6+Math.sin(i*1.6)*.1,i*1.6);for(let i=0;i<3;i++)n.box(.25,.015,.015,t.black,-3.3+Math.cos(i*2.1)*.12,.02,-.6+Math.sin(i*2.1)*.12,i*2.1,0,.2);Nr(n,t,-.1,-.85,-_t/2),Vc(n,t,{x:2.32,z:-2.05,ry:0,wid:1.45,len:1.9,duvet:t.redDuvet,legMat:t.woodOak,frameMat:t.dark}),Aa(n,t,1.3,.5,-3.04,0),Aa(n,t,3.3,.5,-3.04,0),Kt(n,t,.55,-2.22,.8,.85),n.box(.5,2,.55,t.woodDark,.55,.02,-2.22),n.box(.02,1.9,.02,t.black,.8,.05,-2.08),n.box(.55,.05,.3,t.stripeB,.55,2.02,-2.22),n.box(.55,.03,.3,t.white,.55,2.07,-2.22),n.box(.3,.62,.12,t.black,.46,.02,-2.9),n.box(.2,.42,.02,he(9409175,{rough:.4,metal:.4}),.46,.14,-2.83)}function $i(n,e,t,i,r){n.push(t,0,i,r),n.box(.46,.05,.46,e.rattan,0,.44,0),n.box(.46,.4,.04,e.rattan,0,.5,-.22,0,-.12);for(const[a,s]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])n.box(.025,.44,.025,e.black,a,0,s);n.box(.03,.2,.44,e.black,-.22,.6,0),n.box(.03,.2,.44,e.black,.22,.6,0),n.pop()}function m2(n,e,t,i){const{TERRAZA:r,TINAJA:a}=i;n.box(r.x1-r.x0,.14,r.z1-r.z0,t.concrete,(r.x0+r.x1)/2,-.16,(r.z0+r.z1)/2);const s=-6.6,o=2.2;n.box(1.6,.03,.9,t.glassTop,s,.72,o),n.box(1.6,.03,.04,t.black,s,.7,o-.43),n.box(1.6,.03,.04,t.black,s,.7,o+.43);for(const[d,p]of[[-.75,-.4],[.75,-.4],[-.75,.4],[.75,.4]])n.box(.035,.7,.035,t.black,s+d,0,o+p);for(const d of[-.4,.4])$i(n,t,s+d,o-.66,0),$i(n,t,s+d,o+.66,_t);$i(n,t,s-1.05,o,_t/2),$i(n,t,s+1.05,o,-_t/2),Kt(n,t,s,o,2.6,2,-.005),Kt(n,t,-7.9,-1.6,1.4,.9,-.005,.3),n.push(-7.9,0,-1.6,.3),n.cyl(.26,.26,.85,t.black,0,.78,0,16,0,_t/2),n.box(.9,.05,.45,t.black,0,.72,0);for(const[d,p]of[[-.35,-.16],[.35,-.16],[-.35,.16],[.35,.16]])n.box(.03,.72,.03,t.black,d,0,p);n.cyl(.13,.13,.05,t.black,.43,.26,-.22,12,_t/2,0),n.cyl(.05,.05,.28,t.black,-.28,1.05,0,8),n.pop(),n.box(.85,.05,.55,t.woodOak,-8.4,.5,-2.5);for(const[d,p]of[[-.35,-.22],[.35,-.22],[-.35,.22],[.35,.22]])n.box(.04,.5,.04,t.steel,-8.4+d,0,-2.5+p);for(const d of[-.3,.4]){n.cyl(.19,.19,.04,t.rattan,-8.8,.45,d,10);for(const p of[0,2.1,4.2])n.cyl(.012,.012,.45,t.steel,-8.8+Math.cos(p)*.14,0,d+Math.sin(p)*.14,6)}$i(n,t,-9,-1.7,_t/2),$i(n,t,-8.3,1,_t*.8),Kt(n,t,a.x,a.z+.3,a.w+.9,a.d*.62+1.6,-.1),n.box(a.w,1,a.d*.62,t.tinajaWood,a.x,0,a.z),n.box(a.w-.12,.02,a.d*.62-.12,t.water,a.x,.9,a.z),n.box(a.w+.12,.06,a.d*.62+.12,t.woodDark,a.x,1,a.z);for(let d=0;d<3;d++)n.box(1,.22,.28,t.woodOak,a.x-.3,d*.31,a.z+.7+(2-d)*.28);n.cyl(.07,.07,1.4,t.black,a.x+.9,.8,a.z-.3,8);const c=r.x0+.5;for(const d of[-3.4,-.1,3.2])n.box(.14,2.75,.14,t.pergola,c,0,d);n.box(.12,.16,7.2,t.pergola,c,2.62,-.1),n.box(.1,.14,7.2,t.pergola,-3.75,2.55,-.1);for(const d of[-3.4,-.1,3.2])n.box((c+3.75>0,5.8),.1,.1,t.pergola,(c+-3.75)/2,2.58,d);const f=(d,p,g,v,m,h,x)=>{const _=new Xt(g-p,m-v,8,8);_.rotateX(-_t/2);const M=_.attributes.position;for(let P=0;P<M.count;P++){const T=M.getX(P)/(g-p)+.5,A=M.getZ(P)/(m-v)+.5;M.setY(P,h+(x-h)*T-Math.sin(T*_t)*Math.sin(A*_t)*.18)}_.computeVertexNormals(),n.geo(_,d,(p+g)/2,0,(v+m)/2)};f(t.sailGreen,c-.1,-3.7,-3.6,-1.2,2.72,2.5),f(t.sailBeige,c+.2,-3.7,-1.5,1.6,2.68,2.5),f(t.sailGreen,c-.1,-4.4,1.3,3.5,2.7,2.55);for(let d=-3.9;d<=3.61;d+=1.25)n.box(.1,1,.1,t.pergola,r.x0-.05,0,d);n.box(.06,.08,7.6,t.pergola,r.x0-.05,.95,-.15),n.box(.06,.08,7.6,t.pergola,r.x0-.05,.5,-.15)}function g2(n,e,t,i){const{PISCINA:r,CESPED:a}=i;n.box(a.x1-a.x0,.12,.12,t.pergola,(a.x0+a.x1)/2,-.1,a.z0-.06);const{x:s,z:o,r:l,h:u}=r,c=new Li(l,l,u,48,1,!0);{const p=c.attributes.uv;for(let g=0;g<p.count;g++)p.setX(g,p.getX(g)*6)}n.geo(c,t.poolWall,s,u/2,o),n.geo(new Li(l-.02,l-.02,u,40,1,!0),he(9341566,{side:It}),s,u/2,o),n.geo(new al(l,.05,6,40),t.poolPost,s,u,o,_t/2),n.cyl(l-.04,l-.04,.02,t.water,s,u*.84,o,40);for(let p=0;p<16;p++){const g=p/16*_t*2;n.box(.06,u+.25,.06,t.poolPost,s+Math.cos(g)*(l+.03),0,o+Math.sin(g)*(l+.03),-g)}Kt(n,t,s,o,l*2+1.2,l*2+1.2,-.08);const f=s+Math.cos(-.9)*(l+.25),d=o+Math.sin(-.9)*(l+.25);n.box(.04,1.6,.04,t.chrome,f-.25,0,d),n.box(.04,1.6,.04,t.chrome,f+.25,0,d);for(let p=0;p<4;p++)n.box(.5,.03,.2,t.chrome,f,.3+p*.3,d);n.box(.34,.6,.34,t.pink,s+Math.cos(-.2)*(l+.5),0,o+Math.sin(-.2)*(l+.5)),n.push(-11,0,7.3,.2),n.box(1.1,1.05,1.2,t.cream,0,0,0),n.box(1.2,.05,1.3,t.slateRoof,0,1.05,0),n.box(1,.05,1.1,t.slateRoof,0,1.12,0,0,0,.5*0),n.box(.3,.4,.02,t.teal,.25,.5,.61),n.box(.3,.55,.02,t.teal,-.25,0,.61),n.pop();for(const[p,g]of[[-4.9,7.3],[-4.9,8.2],[-4.9,9.1],[-4.7,10.2]]){n.cyl(.22,.16,.34,t.clayPot,p,0,g,16),n.cyl(.2,.2,.02,t.soil,p,.31,g,16);for(let v=0;v<3;v++){const m=new Xt(.55,.6);m.translate(0,.3,0),n.geo(m,t.plant,p,.3,g,0,v*_t/3+fe(),0)}}}const Wt=Math.PI,Ra=(n,e)=>{const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)};function En(n,e){const t=Math.floor(n),i=Math.floor(e),r=n-t,a=e-i,s=r*r*(3-2*r),o=a*a*(3-2*a),l=Ra(t,i),u=Ra(t+1,i),c=Ra(t,i+1),f=Ra(t+1,i+1);return l+(u-l)*s+(c-l)*o+(l-u-c+f)*s*o}const or=(n,e)=>En(n,e)*.5+En(n*2.1,e*2.1)*.25+En(n*4.3,e*4.3)*.125+En(n*8.7,e*8.7)*.0625,vt=(n,e,t)=>Ko.smoothstep(n,e,t);function Pn(n,e){const t=Math.hypot(n,e),i=vt(t,18,70),r=or(n*.006+3.1,e*.006+1.7),a=vt(n,45,340)*(95+70*r),s=vt(-e,70,380)*(85+70*r),o=vt(e,220,470)*(70+60*r),l=-.05*Math.max(0,-n-30)*(1-vt(-n,240,330))-.05*210*vt(-n,240,330),u=vt(-n,330,520)*(30+35*or(n*.01,e*.01)),c=(or(n*.02+8,e*.02-3)-.5)*9*vt(t,40,120);return-.15+i*(a+s+o+l+u+c)}const v2=(n,e,t,i,r,a)=>{const s=r-t,o=a-i,l=Math.max(0,Math.min(1,((n-t)*s+(e-i)*o)/(s*s+o*o||1)));return Math.hypot(n-(t+s*l),e-(i+o*l))},Zu=(n,e,t)=>{let i=1e9;for(let r=0;r<n.length-1;r++)i=Math.min(i,v2(e,t,n[r][0],n[r][1],n[r+1][0],n[r+1][1]));return i},dl=(n,e)=>Zu(hl,n,e),Qu=(n,e)=>Zu(ul,n,e);function x2(n){const e=new ve(11970168),t=new ve(11115118),i=new ve(8224076),r=new ve(3821620),a=new ve(10127461),s=new ve(9076588),o=new ve,l=(T,A,R)=>{const E=or(T*.012+20,A*.012-7),S=Math.max(vt(T,30,130),vt(-A,40,150))*(.55+.6*E),C=vt(A,200,380);o.copy(t).lerp(e,vt(E,.4,.6)).lerp(i,vt(En(T*.02,A*.02),.5,.8)*.5),o.lerp(r,Ko.clamp(S,0,.92)).lerp(a,C*.7).lerp(s,vt(En(T*.03+4,A*.03),.66,.85)*.5);const z=.86+En(T*.15,A*.15)*.28;return[o.r*z,o.g*z,o.b*z]},u=new Xt(1100,1100,130,130);u.rotateX(-Wt/2);const c=u.attributes.position,f=new Float32Array(c.count*3);for(let T=0;T<c.count;T++){const A=c.getX(T),R=c.getZ(T),E=Math.hypot(A,R),S=Pn(A,R)-.9*(1-vt(E,88,110));c.setY(T,S);const C=l(A,R);f[T*3]=C[0],f[T*3+1]=C[1],f[T*3+2]=C[2]}u.setAttribute("color",new Pt(f,3)),u.computeVertexNormals();const d=new ct(u,new ln({vertexColors:!0,roughness:1}));d.receiveShadow=!0,n.add(d);const p=qn.dirt();p.repeat.set(110,110);const g=new Xt(200,200,100,100);g.rotateX(-Wt/2);const v=g.attributes.position,m=new Float32Array(v.count*3);for(let T=0;T<v.count;T++){const A=v.getX(T),R=v.getZ(T),E=Math.hypot(A,R),S=vt(E,75,100),[C,z,O]=l(A,R),V=vt(or(A*.09,R*.09),.5,.72)*vt(E,14,30),Y=new ve(14208441).lerp(new ve(11115628),V*.85).lerp(new ve(C*1.35,z*1.35,O*1.35),S),H=.84+En(A*.4,R*.4)*.28;m[T*3]=Y.r*H,m[T*3+1]=Y.g*H,m[T*3+2]=Y.b*H,v.setY(T,Pn(A,R)-.02-.5*vt(E,92,100))}g.setAttribute("color",new Pt(m,3)),g.computeVertexNormals();const h=new ct(g,new ln({map:p,vertexColors:!0,roughness:1}));h.receiveShadow=!0,n.add(h);const x=new Ei,_=Pn(-235,-150)+.5,M=new ct(new Xt(85,42).rotateX(-Wt/2),new ln({color:15000538,roughness:.9}));M.position.set(-205,_,-150);const P=new ct(new Xt(60,42).rotateX(-Wt/2),new ln({color:7314054,roughness:.2,metalness:.1}));P.position.set(-278,_,-150),x.add(M,P),x.rotation.y=.3,n.add(x)}function M2(n){const e=he(16777215,{map:qn.gravel(),tile:1.6,rough:1}),t=he(16777215,{map:qn.turf(),tile:1.4,rough:1}),i=he(14208441,{map:Te.dirt(),tile:3,rough:1});for(const a of cl)n.box(a.x1-a.x0,.03,a.z1-a.z0,e,(a.x0+a.x1)/2,-.15,(a.z0+a.z1)/2);n.box(An.x1-An.x0,.05,An.z1-An.z0,t,(An.x0+An.x1)/2,-.15,(An.z0+An.z1)/2);const r=(a,s,o)=>{for(let l=0;l<a.length-1;l++){const[u,c]=a[l],[f,d]=a[l+1],p=Math.hypot(f-u,d-c),g=-Math.atan2(d-c,f-u),v=(Pn(u,c)+Pn(f,d))/2+o;n.box(p+s*.8,.05,s,i,(u+f)/2,v,(c+d)/2,g)}};r(ul,3.6,-.14),r(hl,ns,-.1)}function S2(n,e=42){const t=new Ai(new Tn(1,1,1),new ln({color:16777215,roughness:.9}),e+1),i=new Ai(new Tn(1,1,1),new ln({color:16777215,roughness:.8}),e+1),r=new Ai(new Tn(1,1,1),new ln({color:5940672,roughness:.2}),12),a=new Un,s=new D,o=new D,l=new Ae,u=[15262938,14275264,15855592,13616301,12101005],c=[9080208,7101005,10506298,8028035,5988195];let f=0,d=0,p=0;for(;f<e&&p++<4e3;){const v=-50-fe()*230,m=-150+fe()*330;if(Math.hypot(v,m)<55||dl(v,m)<8||v>-90&&Math.abs(m)<40)continue;const h=J(6,13),x=J(5,9),_=J(2.6,3.4),M=J(-.4,.4),P=Pn(v,m);a.setFromEuler(new Yt(0,M,0)),o.set(v,P+_/2,m),s.set(h,_,x),l.compose(o,a,s),t.setMatrixAt(f,l),t.setColorAt(f,new ve(u[fe()*u.length|0])),o.set(v,P+_+.2,m),s.set(h+.8,.4,x+.8),l.compose(o,a,s),i.setMatrixAt(f,l),i.setColorAt(f,new ve(c[fe()*c.length|0])),d<12&&fe()<.3&&(o.set(v+h*.9,P+.05,m+x*.6),s.set(J(3,5),.1,J(6,9)),l.compose(o,a,s),r.setMatrixAt(d++,l)),f++}const g=Pn(-24,42);a.setFromEuler(new Yt(0,.5,0)),o.set(-24,g+1.6,42),s.set(24,3.2,6),l.compose(o,a,s),t.setMatrixAt(f,l),t.setColorAt(f,new ve(10987946)),o.set(-24,g+3.4,42),s.set(25,.4,7),l.compose(o,a,s),i.setMatrixAt(f,l),i.setColorAt(f,new ve(10132896)),f++,t.count=i.count=f,r.count=d,t.castShadow=i.castShadow=!0,n.add(t,i,r)}function y2(n){const e=qn.redEarth();e.repeat.set(5,3);const t=new ln({map:e,roughness:1,vertexColors:!0,side:St}),i=(r,a,s,o,l,u,c)=>{const f=new Xt(s,o,40,30);f.rotateX(-Wt/2);const d=f.attributes.position,p=new Float32Array(d.count*3),g=new ve(11116686),v=new ve(12759974),m=new ve;for(let x=0;x<d.count;x++){const _=d.getX(x)/s+.5,M=d.getZ(x)/o+.5;m.copy(g).lerp(v,Ko.smoothstep(M+(En(_*12+c,M*5)-.5)*.4,.2,.85)),p[x*3]=m.r,p[x*3+1]=m.g,p[x*3+2]=m.b;const P=Math.min(1,_*7)*Math.min(1,(1-_)*7),T=.78+.22*En(_*9+c,M*2.5),A=.5+.5*En(_*20+c,M*6),R=l*Math.pow(M,1.15)*P*T*(.82+.18*A);d.setY(x,R)}f.setAttribute("color",new Pt(p,3)),f.computeVertexNormals();const h=new ct(f,t);h.position.set(r,-.15,a),h.rotation.y=u,h.receiveShadow=!0,h.castShadow=!0,n.add(h)};i(-8,-13,26,12,3,0,1.3),i(10.5,-2,12,11,2.8,-Wt/2,4.7)}function _2(n=3){const e=[];for(let t=0;t<n;t++){const i=new Xt(1,1);i.translate(0,.5,0),i.rotateY(t*Wt/n),e.push(i)}return ju(e)}function b2(n,e=500){const t={euc:{h:[15,24],crown:.42,bark:10786692,clumps:30,clumpSize:[2.1,3],crownStart:.45,flat:.75},pine:{h:[12,20],crown:.36,bark:5916214,clumps:26,clumpSize:[2,2.9],crownStart:.5,flat:.6},bush:{h:[3.5,6.5],crown:.62,bark:6179900,clumps:9,clumpSize:[1.6,2.4],crownStart:.28,flat:.8}},i=[],r=(v,m,h,x=1)=>{const _=t[v];i.push({kind:v,x:m,z:h,y:Pn(m,h)-.15,h:J(_.h[0],_.h[1])*x,rot:fe()*Wt*2,tint:J(.84,1.1)})};for(const[v,m,h,x]of[["euc",11.5,-2,1],["euc",9.5,6,.9],["euc",14,-9,1.1],["pine",12,3,.9],["euc",-14.5,-3,.8],["bush",-15,2,1],["euc",-16,-8,.9],["bush",-13,-6.5,1],["pine",-3,-10,.8],["euc",6,-10,1],["bush",-12,20,1],["euc",4,22,.9],["pine",14,16,.9],["bush",3,15,1],["euc",-18,12,1]])r(v,m,h,x);let a=0;for(;i.length<e&&a++<9e4;){const v=fe()*Wt*2,m=11+Math.pow(fe(),1.4)*330,h=Math.cos(v)*m,x=Math.sin(v)*m+6;if(h>-17&&h<9&&x>-11&&x<21||dl(h,x)<ns/2+2.5||Qu(h,x)<4.5)continue;const _=vt(h,22,90),M=vt(-x,25,95),P=Math.max(_,M*.85),T=or(h*.012+20,x*.012-7),A=(.16+.84*P)*(.55+.9*T)*(x>240?.35:1)*(h<-320?.5:1);if(fe()>A)continue;const R=fe(),E=P>.5?R<.5?"euc":R<.85?"pine":"bush":R<.35?"euc":R<.42?"pine":"bush";r(E,h,x,E==="bush"?J(.9,1.3):J(.85,1.2))}const s=new Li(.6,1,1,7,1,!0);s.translate(0,.5,0);const o={euc:[],pine:[],bush:[]},l={euc:[],pine:[],bush:[]},u=new Ae,c=new Un,f=new D;new D;const d=new D(0,1,0),p=new D,g=(v,m,h,x,_)=>{p.subVectors(h,m);const M=p.length();c.setFromUnitVectors(d,p.normalize()),f.set(x,M,x),u.compose(m,c,f),o[v].push({m:u.clone(),t:_})};for(const v of i){const m=t[v.kind],h=new D(v.x,v.y,v.z),x=new D(J(-.06,.06),1,J(-.06,.06)).normalize(),_=h.clone().addScaledVector(x,v.h*.92),M=v.h*(v.kind==="bush"?.018:.014);g(v.kind,h,_,M,v.tint);const P=v.h*m.crown*.5,T=h.clone().addScaledVector(x,v.h*(m.crownStart+(1-m.crownStart)*.5)),A=v.h*(1-m.crownStart)*.55,R=v.kind==="pine"?6:4;for(let S=0;S<R;S++){const C=v.rot+S/R*Wt*2+J(-.4,.4),z=h.clone().addScaledVector(x,v.h*J(m.crownStart*.9,.8)),O=z.clone().add(new D(Math.cos(C)*P*.8,v.kind==="pine"?J(-.3,.6):J(.6,1.6),Math.sin(C)*P*.8));g(v.kind,z,O,M*.4,v.tint)}const E=m.clumps;for(let S=0;S<E;S++){const C=fe()*Wt*2,z=Math.sqrt(fe()),O=J(-1,1),V=new D(T.x+Math.cos(C)*P*z*(v.kind==="pine"?1-(O+1)*.25:1),T.y+O*A*m.flat,T.z+Math.sin(C)*P*z),Y=J(m.clumpSize[0],m.clumpSize[1])*Math.min(1.4,v.h/16+.3)*(v.kind==="bush"?1.6:1),H=V.clone().sub(T);H.y*=.6,H.normalize(),c.setFromUnitVectors(new D(0,0,1),H),c.multiply(new Un().setFromAxisAngle(new D(0,0,1),fe()*Wt*2)),f.set(Y,Y,Y),u.compose(V,c,f);const ee=.7+.45*((O+1)/2);l[v.kind].push({m:u.clone(),t:v.tint*ee})}}for(const v of Object.keys(t)){if(o[v].length){const m=Te.bark(t[v].bark);m.repeat.set(1,3);const h=new Ai(s,new ln({map:m,roughness:1}),o[v].length);o[v].forEach((x,_)=>{h.setMatrixAt(_,x.m),h.setColorAt(_,new ve(x.t,x.t,x.t))}),h.castShadow=!0,h.receiveShadow=!0,n.add(h)}if(l[v].length){const m=new Xt(1,1),h=new ln({map:Te.leafClump(v),alphaTest:.42,side:St,roughness:.95}),x=new Ai(m,h,l[v].length);l[v].forEach((_,M)=>{x.setMatrixAt(M,_.m),x.setColorAt(M,new ve(_.t,_.t*J(.97,1.03),_.t*J(.92,1)))}),x.castShadow=!0,x.receiveShadow=!0,n.add(x)}}}function E2(n,e=900,t=70){const i=(p,g,v,m=0)=>p>v.x0-m&&p<v.x1+m&&g>v.z0-m&&g<v.z1+m,r=(p,g)=>i(p,g,{x0:ir.x0,x1:ir.x1,z0:ir.z0,z1:ir.z1},1.2)||i(p,g,rr,.4)||i(p,g,An,.3)||cl.some(v=>i(p,g,v,.2))||i(p,g,{x0:Ti.x-1.4,x1:Ti.x+1.4,z0:Ti.z-1.4,z1:Ti.z+2.6})||Math.hypot(p-Qn.x,g-Qn.z)<Qn.r+1||Qu(p,g)<2.4||dl(p,g)<ns/2+.5,a=new Un,s=new D,o=new D,l=new Ae,u=new Ai(_2(2),new ln({map:Te.tuft(),alphaTest:.4,side:St,roughness:1}),e);let c=0,f=0;for(;c<e&&f++<8e3;){const p=fe()*Wt*2,g=5+Math.pow(fe(),.8)*55,v=Math.cos(p)*g-4,m=Math.sin(p)*g+6;if(r(v,m))continue;const h=J(.35,.85);a.setFromEuler(new Yt(0,fe()*Wt,0)),o.set(v,Pn(v,m)+.01,m),s.set(h,h*J(.7,1.2),h),l.compose(o,a,s),u.setMatrixAt(c,l);const x=J(.8,1.1);u.setColorAt(c,new ve(x,x,x*.92)),c++}u.count=c,n.add(u);const d=new Ai(new il(1,1),new ln({map:Te.rockTex(),roughness:1,flatShading:!0}),t);for(c=0,f=0;c<t&&f++<4e3;){const p=fe()*Wt*2,g=6+fe()*50,v=Math.cos(p)*g-4,m=Math.sin(p)*g+6;if(r(v,m))continue;const h=J(.15,.6);a.setFromEuler(new Yt(fe()*3,fe()*3,fe()*3)),o.set(v,Pn(v,m)+h*.2,m),s.set(h*J(1,1.6),h*J(.5,.9),h*J(.9,1.4)),l.compose(o,a,s),d.setMatrixAt(c,l);const x=J(.8,1.15);d.setColorAt(c,new ve(x,x*.98,x*.95)),c++}d.count=c,d.castShadow=!0,d.receiveShadow=!0,n.add(d)}function T2(){const n={top:{value:new ve},horizon:{value:new ve},sunDir:{value:new D(0,1,0)},sunColor:{value:new ve},cloudColor:{value:new ve(16777215)},cloudAmount:{value:.8}},e=new ct(new ts(900,32,16),new ft({side:It,depthWrite:!1,transparent:!0,fog:!1,uniforms:n,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunColor; uniform vec3 cloudColor; uniform float cloudAmount;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
          return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y); }
        float fbm(vec2 p){ float v = 0.0, a = 0.5; for(int i = 0; i < 5; i++){ v += a*noise(p); p *= 2.03; a *= 0.5; } return v; }
        void main(){
          vec3 dir = normalize(vP);
          float s = max(dot(dir, normalize(sunDir)), 0.0);
          vec2 uv = dir.xz / (dir.y + 0.22);
          float base = fbm(uv * 0.85 + vec2(4.0, 2.0));
          float cl = smoothstep(0.52, 0.86, base) * smoothstep(0.02, 0.25, dir.y) * cloudAmount;
          float shade = 0.72 + 0.4 * fbm(uv * 2.6 + 7.0);
          vec3 cc = cloudColor * shade * 1.6 + sunColor * pow(s, 5.0) * 0.6;
          gl_FragColor = vec4(cc, clamp(cl, 0.0, 0.85));
        }`}));return e.renderOrder=-10,e.frustumCulled=!1,{mesh:e,uniforms:n}}class ea extends ct{constructor(){const e=ea.SkyShader,t=new ft({name:e.name,uniforms:Ka.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:It,depthWrite:!1});super(new Tn(1,1,1),t),this.isSky=!0}}ea.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const w2={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ta{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const A2=new Ja(-1,1,1,-1,0,1);class R2 extends kt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}}const C2=new R2;class Ku{constructor(e){this._mesh=new ct(C2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,A2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class D2 extends ta{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ka.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ku(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gc extends ta{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class P2 extends ta{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class L2{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Re);this._width=i.width,this._height=i.height,t=new Dt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new D2(w2),this.copyPass.material.blending=jn,this.clock=new Hu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Gc!==void 0&&(s instanceof Gc?i=!0:s instanceof P2&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const I2={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class U2 extends ta{constructor(){super();const e=I2;this.uniforms=Ka.clone(e.uniforms),this.material=new O1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ku(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qe.getTransfer(this._outputColorSpace)===$e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===su?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ou?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Go&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function pt(n){return n&&n.__esModule?n.default:n}class N2 extends kt{constructor(){super();Il(this,"boundingSphere",new Sr);this.setAttribute("position",new Pt(new Float32Array([-1,-1,3,-1,-1,3]),2)),this.setAttribute("uv",new Pt(new Float32Array([0,0,2,0,0,2]),2))}computeBoundingSphere(){}}const F2=new N2,O2=new Ja;class xi{constructor(e){this._mesh=new ct(F2,e),this._mesh.frustumCulled=!1}render(e){e.render(this._mesh,O2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}dispose(){this._mesh.material.dispose(),this._mesh.geometry.dispose()}}const Zr=6,z2=4,B2={uniforms:{sceneDepth:{value:null},levels:{value:[]},baseSize:{value:new Re}},depthWrite:!1,depthTest:!1,vertexShader:`
    void main() {
        gl_Position = vec4(position, 1.0);
    }`,fragmentShader:`
    #define DEPTH_MIP_LEVELS ${Zr}
    uniform highp sampler2D sceneDepth;
    uniform vec4 levels[DEPTH_MIP_LEVELS];
    uniform vec2 baseSize;
    void main() {
        ivec2 atlasTexel = ivec2(gl_FragCoord.xy);
        float depth = 0.0;
        for (int level = DEPTH_MIP_LEVELS - 1; level >= 0; level--) {
            ivec2 texel = atlasTexel - ivec2(levels[level].xy);
            if (any(lessThan(texel, ivec2(0))) || any(greaterThanEqual(texel, ivec2(levels[level].zw)))) {
                continue;
            }
            // Level k + 1 texel (x, y) keeps level k texel (2x + (y & 1 ^ 1), 2y + (x & 1 ^ 1)).
            for (int below = level - 1; below >= -1; below--) {
                ivec2 belowSize = below < 0 ? ivec2(baseSize) : ivec2(levels[max(below, 0)].zw);
                texel = min(2 * texel + ivec2((texel.y & 1) ^ 1, (texel.x & 1) ^ 1), belowSize - 1);
            }
            depth = texelFetch(sceneDepth, texel, 0).x;
            break;
        }
        gl_FragColor = vec4(depth, 0.0, 0.0, 1.0);
    }`};class k2{constructor(){this.levels=Array.from({length:Zr},()=>new et),this.baseSize=new Re,this.target=null,this.quad=new xi(new ft(B2))}resize(e,t){var l;if(e=Math.max(1,Math.floor(e)),t=Math.max(1,Math.floor(t)),this.target&&this.baseSize.x===e&&this.baseSize.y===t)return;this.baseSize.set(e,t);let i=e,r=t,a=0;for(let u=0;u<Zr;u++)i=Math.max(1,i>>1),r=Math.max(1,r>>1),u===0?this.levels[u].set(0,0,i,r):(this.levels[u].set(a,this.levels[0].w,i,r),a+=i);const s=Math.max(this.levels[0].z,a),o=this.levels[0].w+this.levels[1].w;(l=this.target)==null||l.dispose(),this.target=new Dt(s,o,{type:mn,format:Qr,minFilter:lt,magFilter:lt,depthBuffer:!1,generateMipmaps:!1})}update(e,t,i,r){this.resize(i,r);const a=this.quad.material.uniforms;a.sceneDepth.value=t,a.levels.value=this.levels,a.baseSize.value=this.baseSize,e.setRenderTarget(this.target),this.quad.render(e)}dispose(){var e;(e=this.target)==null||e.dispose(),this.target=null,this.quad.dispose()}}const H2={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},sceneNormal:{value:null},projMat:{value:new Ae},viewMat:{value:new Ae},projViewMat:{value:new Ae},projectionMatrixInv:{value:new Ae},viewMatrixInv:{value:new Ae},cameraPos:{value:new D},resolution:{value:new Re},biasAdjustment:{value:new Re},time:{value:0},samples:{value:[]},bluenoise:{value:null},distanceFalloff:{value:1},radius:{value:5},near:{value:.1},far:{value:1e3},ortho:{value:!1},screenSpaceRadius:{value:!1},frame:{value:0},depthMipAtlas:{value:null},depthMipLevels:{value:[]}},depthWrite:!1,depthTest:!1,vertexShader:`
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
#ifdef DEPTH_MIP
uniform highp sampler2D depthMipAtlas;
uniform vec4 depthMipLevels[${Zr}];
#endif
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
      ) / near) * fwidth(length(worldPos)) / radiusToUse;
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
        
        // Every sample reads depth (clamped on screen) and off-screen ones are dropped with a
        // select, not a branch, so the compiler can issue all depth reads up front.
        bool insideScreen = all(greaterThan(offset.xyz * (1.0 - offset.xyz), vec3(0.0)));
        {
          vec2 sampleUv = clamp(offset.xy, 0.0, 1.0);
          #ifdef DEPTH_MIP
          // Far samples read a coarser depth level (see DepthMipAtlas.js) to stay in cache.
          vec2 screenDelta = (offset.xy - vUv) * resolution;
          int mipLevel = int(clamp(
            floor(0.5 * log2(max(dot(screenDelta, screenDelta), 1.0))) - ${z2}.0,
            0.0,
            ${Zr}.0
          ));
          float sampleDepth;
          if (mipLevel == 0) {
            sampleDepth = textureLod(sceneDepth, sampleUv, 0.0).x;
          } else {
            vec4 level = depthMipLevels[mipLevel - 1];
            ivec2 texel = min(ivec2(sampleUv * level.zw), ivec2(level.zw) - 1);
            sampleDepth = texelFetch(depthMipAtlas, ivec2(level.xy) + texel, 0).x;
          }
          #else
          float sampleDepth = textureLod(sceneDepth, sampleUv, 0.0).x;
          #endif

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
          occluded += insideScreen ? rangeCheck * float(distSample != distWorld) * float(sampleDepth != depth) * step(distSample + bias, distWorld) * step(
            1.0,
            dot(diff, diff)
          ) : 0.0;
          
          totalWeight += insideScreen ? 1.0 : 0.0;
        }
      }
      float occ = clamp(1.0 - occluded / (totalWeight == 0.0 ? 1.0 : totalWeight), 0.0, 1.0);
      gl_FragColor = vec4(occ, 0.5 + 0.5 * normal);
}`},V2={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},transparencyDWFalse:{value:null},transparencyDWTrue:{value:null},transparencyDWTrueDepth:{value:null},transparencyAware:{value:!1},projMat:{value:new Ae},viewMat:{value:new Ae},projectionMatrixInv:{value:new Ae},resolution:{value:new Re},color:{value:new D(0,0,0)},blueNoise:{value:null},downsampledDepth:{value:null},time:{value:0},intensity:{value:5},renderMode:{value:0},gammaCorrection:{value:!1},ortho:{value:!1},near:{value:.1},far:{value:1e3},screenSpaceRadius:{value:!1},radius:{value:0},distanceFalloff:{value:1},fog:{value:!1},fogExp:{value:!1},fogDensity:{value:0},fogNear:{value:1/0},fogFar:{value:1/0},colorMultiply:{value:!0},aoTones:{value:0}},depthWrite:!1,depthTest:!1,vertexShader:`
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

#ifdef NEURAL_UPSAMPLE
    __N8AO_NEURAL_UPSAMPLE__
#endif
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
#ifdef NEURAL_UPSAMPLE
        texel = vec4(neuralUpsample(worldPos, normal), 0.0, 0.0, 1.0);
#else
        ivec2 halfSize = textureSize(tDiffuse, 0);
        ivec2 base = min(ivec2(vUv * resolution * 0.5), halfSize - 1);
        for(int x = -1; x <= 1; x++) {
            for(int y = -1; y <= 1; y++) {
                ivec2 p = clamp(base + ivec2(x, y), ivec2(0), halfSize - 1);
                // Half-res depth and normals describe the half-res pixel's center.
                vec2 pUv = (vec2(p) + 0.5) / vec2(halfSize);
                float sampleDepth = texelFetch(downsampledDepth,p, 0).x;
                vec4 sampleInfo = texelFetch(tDiffuse, p, 0);
                // The AO target keeps only the normal's x and y (its alpha is the accumulation
                // weight), so z is rebuilt facing the camera.
                vec2 normalXY = sampleInfo.gb * 2.0 - 1.0;
                vec3 normalSample = vec3(normalXY, sqrt(max(1.0 - dot(normalXY, normalXY), 0.0)));
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
#endif
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
    `},G2={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},projMat:{value:new Ae},viewMat:{value:new Ae},projectionMatrixInv:{value:new Ae},viewMatrixInv:{value:new Ae},cameraPos:{value:new D},resolution:{value:new Re},time:{value:0},r:{value:5},blueNoise:{value:null},radius:{value:12},worldRadius:{value:5},index:{value:0},poissonDisk:{value:[]},distanceFalloff:{value:1},near:{value:.1},far:{value:1e3},screenSpaceRadius:{value:!1}},depthWrite:!1,depthTest:!1,vertexShader:`
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
    __N8AO_NEURAL_DENOISE__

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
        vec3 neuralNormal = neuralSafeNormalize(normal, vec3(0.0, 0.0, 1.0));
        float neuralInverseRadius = 1.0 / max(radiusToUse, 1e-6);
        float neuralInverseDistance = 1.0 / max(distanceFalloffToUse, 1e-6);
        // View direction in the center's tangent frame, as in training.
        vec3 neuralView = neuralLocalFrame(normal)
            * neuralSafeNormalize(-worldPos, vec3(0.0, 0.0, 1.0));
        float neuralLogRadius = log(max(worldRadius, 1e-6));
        float neuralLogFalloff = log(max(distanceFalloff, 1e-6));
        // Queries come from the center's first-pass AO, which is known before the tap loop.
        float neuralToken[NEURAL_TOKEN_WIDTH];
        neuralEncodeCenter(float[6](
            baseOcc,
            neuralLogRadius,
            neuralLogFalloff,
            neuralView.x,
            neuralView.y,
            neuralView.z
        ), neuralToken);
        float neuralQueries[NEURAL_QUERY_WIDTH];
        neuralMakeQueries(neuralToken, neuralQueries);
        float neuralSummary[NEURAL_QUERY_WIDTH] = NEURAL_ZERO_SUMMARY;
        float neuralDenominator[NEURAL_QUERY_COUNT] = NEURAL_ZERO_DENOMINATOR;
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
                vec3 neuralDelta = worldPosSample - worldPos;
                float neuralHeight = dot(neuralDelta, neuralNormal);
                neuralEncodeTap(float[5](
                    sqrt(max(dot(neuralDelta, neuralDelta) - neuralHeight * neuralHeight, 0.0))
                        * neuralInverseRadius,
                    neuralHeight * neuralInverseRadius,
                    dot(neuralSafeNormalize(normalSample, vec3(0.0, 0.0, 1.0)), neuralNormal),
                    occSample,
                    tangentPlaneDist * neuralInverseDistance
                ), neuralToken);
                neuralAttend(neuralToken, neuralQueries, neuralSummary, neuralDenominator);
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
        // The center token sees the final bilateral AO and is attended to last.
        neuralEncodeCenter(float[6](
            occlusion,
            neuralLogRadius,
            neuralLogFalloff,
            neuralView.x,
            neuralView.y,
            neuralView.z
        ), neuralToken);
        neuralAttend(neuralToken, neuralQueries, neuralSummary, neuralDenominator);
        occlusion = clamp(occlusion + neuralHead(neuralSummary, neuralDenominator), 0.0, 1.0);
#endif
        gl_FragColor = vec4(occlusion, 0.5 + 0.5 * normal);
    }
    `};var Ju={};Ju=JSON.parse('{"architecture":"attention-v3-pilot","attention":"softmax","dynamicQueries":true,"formatVersion":5,"globalBias":[0.43783164,0.390473098,-0.366750836,0.457545847,1.24783957,0.00699784793],"globalFeatureInverseStandardDeviation":[10.7762499,1.88629949,1.64968634,3.29934478,3.21772695,4.03633451],"globalFeatureMean":[0.919787943,-0.511195958,0.0420053862,-0.00501916651,0.605369925,0.619415224],"globalWeights":[-0.498237908,0.00670673652,0.00152060343,0.00128561188,0.00402788538,0.00678816251,-0.0771772712,-0.0279826578,0.0977897272,0.00205942709,-0.0353725255,-0.182206243,0.190576792,-0.0336237699,-0.00070780341,0.0742666349,0.173491925,0.145801112,-0.329374939,-0.0119222291,-0.0662056282,0.0013825919,0.00677041663,0.0263287611,0.0992663652,0.0201859679,0.0383115783,-0.000026359543,-0.00154593715,-0.0176638458,0.0704428256,0.0043666712,0.0124633005,-0.0001957161,0.0172951035,0.0125593673],"headBias":[-0.18811132,0.0948965773,-0.150786236,-0.428572297,-0.00361282472,-0.0960760415],"headWeights":[-0.349779695,-0.677614272,-3.78093934,1.48417652,1.78316295,0.60994488,-0.288706988,0.444337457,-3.04828668,0.999919236,0.297454536,2.67425728,1.08167505,-0.211544037,1.94777036,-2.04720473,-1.61533034,-1.81531906,-0.268871456,-1.20682883,0.586696744,0.227941558,1.23713028,-0.84190625,0.180674821,0.381884187,0.599859357,0.418890119,-0.745973527,0.140275851,0.912337899,-0.469980091,-1.29117024,-0.33387661,-0.44176051,-0.569980681,-0.0321310423,-0.940412164,1.12141001,0.311931401,-0.0938786566,-0.372619629,-0.846192956,1.06840897,0.411292642,-0.28959462,0.549422562,0.665704966,-1.43473649,-0.926213086,-3.85320234,2.13647246,4.16946936,2.28430319,0.588012576,0.62458235,0.94133085,-0.169601411,0.492336214,-0.474020123,1.69022059,-0.638055801,-1.68348992,-1.15128028,-2.47793055,-1.34734607,0.529119134,-1.73358035,0.523224115,-0.403759301,3.13058639,0.303418279,-0.56067276,-1.78167748,-2.9246037,1.78488731,2.90296459,0.368824869,0.331644475,0.83219707,-0.573884368,-0.00551610626,-0.354529232,1.12002647,0.302889019,0.321854949,-2.37430382,-0.667644799,-1.48869014,-0.385823399,0.0377837978,-1.04985082,1.54539227,0.000523873721,2.00845528,-0.349108458,-0.870733619,-0.272413194,-1.36521316,1.2990303,1.95638001,-0.188038722,2.37597728,-0.85083878,4.10536909,-2.24729896,-2.61444163,-2.2991221,0.985709906,-0.822150469,1.76610732,0.471102774,-0.672168076,2.13004088,-2.19398046,1.77379632,-2.80547023,0.770871639,0.179960966,0.744262457,-0.174077839,-2.23472333,-0.768576086,1.2851423,0.0923231766,3.01212621,-3.76283717,0.036338076,-1.36663747,1.42400813,-0.524636805,1.24904919,3.52172256,0.470047891,4.02753925,-2.8899672,-0.43113178,-1.76285839,1.62054408,0.93694371,-0.310192972,-0.37270534,-0.217828333,-1.79468119],"headWidth":6,"keyProjectionWeights":[-3.33902812,-0.536267698,2.01714158,1.52569818,0.234675318,-0.0199190751,-0.522996366,0.777009666,-2.96427703,-1.68269777,-1.74668443,-1.21742725,-0.149665803,-0.253768742,-0.130375057,-2.44589424,2.78267646,0.564957738,-0.106041111,1.34391129,2.39121079,-1.09815037,-0.0162310768,-0.94102025,0.592346966,-0.877611339,0.822100461,-0.396209598,1.37087905,0.662701786,-0.33238855,1.07927334,1.17617404,2.15566349,0.447210789,-1.01478684],"name":"frame-invariant-w6-10m","outputBias":-0.000645435241,"outputWeights":[-0.372818261,-0.117125496,-0.0229131225,0.205260545,0.0575807579,0.0352538787],"queryCount":4,"queryFromFirstPassAO":true,"queryProjectionWeights":[0.975692391,-0.855476856,-2.6112597,-1.33616245,0.3828471,3.75650811,-3.08311939,-0.183637097,0.799926639,5.05472469,-0.380684286,1.42757761,-0.550761044,-0.420882851,-2.77289224,0.530017316,0.332260936,6.08533239,-0.96134764,-0.0830586925,-3.43319321,1.98897922,0.527699769,10.3556395,3.0345726,-3.55960488,-1.13525546,-3.76720428,1.21770573,12.4426403,-2.60355425,-2.64093018,0.656545401,4.99599934,1.86864853,-6.22469091,-1.83889711,-0.437748134,0.187218606,4.74110746,2.51226878,8.91660213,-3.11046505,-0.588799357,-0.207253695,2.83699632,0.271253496,18.6212864,1.72839391,-1.38337183,1.96843684,-2.33901262,2.90269828,-1.4839524,-1.8591361,2.04251933,1.77161074,5.4193306,-1.36599183,-3.14757466,-0.182765603,1.29674315,-1.05521429,2.25401402,-0.206811205,-0.963144422,5.71507502,-5.14344263,-0.273849398,-4.3076787,6.69000673,3.99203897,0.315123528,-1.32465971,-3.10114861,-0.0378758125,1.19637573,4.44451952,-3.18032098,1.86546385,-2.12358069,4.2800293,-0.502741039,2.31843925,-6.06618166,2.66684651,4.63418913,9.45241642,-1.13186729,-1.45928359,4.54390574,-3.34962153,4.75198603,-6.77375507,2.47302985,12.7788935,3.34261918,-0.862356305,-1.74229538,-4.1722517,1.20036793,11.4210844,-0.552534938,0.389627963,3.99119306,2.24200583,-0.331534415,-5.28202963,0.189935967,0.173227698,2.12633395,0.24529539,-0.0643746853,3.959975,2.03217721,-1.84745824,0.705346525,-1.83792317,0.959801376,-2.78693771,1.99272621,-1.12983501,1.57759488,-5.68606377,0.390426129,1.56775129,-4.77044725,1.86877048,-1.27339029,8.22656536,-2.00721741,4.65022182,-0.240057006,-1.57647789,0.402640164,1.49630237,1.89653265,-2.45852304,1.37989998,-3.74320769,2.44625449,-2.83335567,6.08127356,-1.23896909],"summaryQueries":[0.105387516,0.454028875,-0.430081159,-0.00702179037,0.264354616,-0.228132203,-0.205108106,-0.776229739,-0.466881812,-0.23857826,0.0964843929,-0.13933751,-0.360518366,-0.146551028,0.245282218,0.021966394,0.156582892,-0.213874325,-0.596480668,-0.122390099,0.559692681,-0.455402851,-0.391503394,0.411942124],"supportedAOSamples":[4,64],"supportedDenoiseSamples":[2,16],"tapCountFeature":false,"tapEncoder":"linear-relu","tapFeatureInverseStandardDeviation":[0.804488063,0.790003598,2.48642254,10.2363062,0.122284018],"tapFeatureMean":[0.467297286,0.156966567,0.804100096,0.919606507,1.74726188],"tapFeatureVersion":5,"tapInputBias":[0.0971546993,-0.196101248,-0.284570098,-0.523338139,0.00586045114,0.0224223025],"tapInputWeights":[0.00661610765,-0.472614795,-0.0546437837,-0.533988655,-1.52223134,-3.41688681,10.5672903,-0.0541227944,0.0142248608,-3.16285706,-0.262887836,-0.757909834,0.036780443,-0.0345010608,-2.91157413,-0.578761101,0.264023542,0.585413754,-0.157820433,-1.02857625,0.0244998131,0.0972569212,0.384179115,0.0317516029,-1.87528634,-2.34754252,11.6873474,-0.0754929557,-0.0365382731,-3.03491616],"tokenWidth":6,"valueProjectionWeights":[1.72991586,0.549711049,-3.3594563,-2.85523748,0.253419191,-1.82095242,1.27579415,0.107942834,-2.52012038,-1.24624097,-0.0739918947,1.59550142,0.0109700505,-0.268934995,0.866448998,0.158989862,0.0336840302,1.64906037,0.925075948,0.61349386,-3.0673039,-2.29413342,0.776243091,-0.186843738,0.648555934,-0.561347127,0.0298922714,-0.641319573,0.356067508,1.07836664,-0.447507739,-0.293157369,0.91070205,0.472602487,-1.01833785,0.504232585],"viewFeatures":true}');var $u={};$u=JSON.parse('{"aoCountFeature":true,"architecture":"attention-v3-pilot","attention":"softmax","dynamicQueries":true,"formatVersion":5,"globalBias":[-0.23487520217895508,0.48950883746147156,-0.30546849966049194,0.3173615634441376,0.40140286087989807,0.13670527935028076],"globalFeatureInverseStandardDeviation":[10.773446083068848,1.9641679525375366,1.6521402597427368,3.2980902194976807,3.2336764335632324,4.083446502685547,2.738823413848877],"globalFeatureMean":[0.9217362403869629,-0.4923144578933716,0.025043003261089325,-0.005237828008830547,0.6033159494400024,0.6232529282569885,2.4497241973876953],"globalWeights":[0.0254850871860981,-0.005317260976880789,-0.007180850952863693,-0.011134599335491657,0.16255147755146027,0.09508438408374786,-0.03838718682527542,-0.3525480031967163,-0.0013057778123766184,-0.16403229534626007,-0.0007288795313797891,0.037009816616773605,-0.009373570792376995,-0.01332339271903038,0.014168626628816128,-0.017612656578421593,-0.03153218328952789,-0.06766011565923691,0.0719003677368164,0.15814851224422455,0.0037323313299566507,-0.07866669446229935,0.06905446946620941,0.19048629701137543,0.02467098832130432,0.16497652232646942,-0.14165738224983215,0.09195740520954132,-0.35943859815597534,0.008146993815898895,0.0015961445169523358,0.0015487642958760262,0.01159310806542635,0.06655143946409225,0.005057391710579395,0.018260549753904343,0.033460550010204315,0.02979891747236252,0.0037130878772586584,0.04297925531864166,0.17526447772979736,0.009302761405706406],"headBias":[-0.49185827374458313,0.01934732310473919,0.0871024876832962,-0.21218806505203247,-0.602699875831604,-0.12136935442686081],"headWeights":[1.1111266613006592,-0.22586572170257568,0.7198730707168579,-1.0440499782562256,0.6581113338470459,-0.5818682909011841,-0.6787620186805725,-0.23400487005710602,1.6469072103500366,0.49851536750793457,-0.30568569898605347,-0.9663941264152527,0.5640100836753845,0.6568309664726257,-1.4944493770599365,-0.6121277809143066,0.026223815977573395,1.0962004661560059,-0.2954123020172119,-0.7416629195213318,-1.0015654563903809,0.1011672243475914,-0.2750880718231201,0.18900208175182343,1.8824331760406494,-0.26637592911720276,1.5055253505706787,-1.4948325157165527,0.7318506240844727,0.6958283185958862,-2.680665969848633,0.649141788482666,-0.4300307631492615,2.736664295196533,-2.1459434032440186,-0.18622294068336487,-0.15705765783786774,0.1756553202867508,-0.8836584687232971,-1.3167157173156738,0.48064854741096497,0.24636563658714294,0.8171942830085754,-0.96866375207901,-0.12311527878046036,0.08907859772443771,1.195731520652771,-0.6010469794273376,-0.31442177295684814,0.06256319582462311,-1.1403552293777466,1.0083950757980347,-0.576816201210022,-0.25378674268722534,0.6654301285743713,0.16491831839084625,-0.6477665305137634,-0.08394690603017807,-1.187951922416687,2.8633618354797363,-1.0537290573120117,-0.6821820735931396,-0.27677592635154724,-0.4933861494064331,0.21415925025939941,-0.6251292824745178,1.0035784244537354,0.8126304745674133,1.3597149848937988,-0.7649092674255371,1.516508936882019,-1.4109125137329102,-0.7758139967918396,-0.0921848714351654,-0.44705119729042053,0.5487695932388306,-0.3681693375110626,-0.3481566309928894,-3.7185323238372803,1.2142832279205322,-0.9279266595840454,2.0219886302948,0.7140060663223267,2.4866034984588623,2.372790575027466,-0.6958968639373779,0.3724961578845978,-0.9226368069648743,-1.1621181964874268,-1.0456132888793945,-0.3726767897605896,-0.6010353565216064,-0.5882084369659424,0.04617524892091751,-1.1128591299057007,-0.7252252697944641,0.13949793577194214,0.21132798492908478,-0.0711992084980011,-0.9696488380432129,0.810234785079956,-0.2613503932952881,-1.744551420211792,-1.3586777448654175,0.23254269361495972,2.1415467262268066,-1.0351390838623047,1.022532343864441,1.313363790512085,0.4526016414165497,-0.748141348361969,-1.034693956375122,0.25396692752838135,-0.07268429547548294,0.5651341676712036,0.349802166223526,0.82906174659729,-0.6540957689285278,1.0928452014923096,-0.6196309924125671,-2.2302732467651367,0.3302135467529297,-2.3436026573181152,2.132598876953125,-0.9235839247703552,-0.6759827136993408,2.1004369258880615,-1.3787437677383423,1.6141383647918701,-3.3350090980529785,3.1086294651031494,0.2884121239185333,0.6482406854629517,-0.13405828177928925,0.6876323819160461,1.7825440168380737,-0.6432068943977356,-0.7366701364517212,0.15928620100021362,1.4169843196868896,0.14321061968803406,-0.9000707268714905,-1.8254214525222778,0.9403988122940063],"headWidth":6,"keyProjectionWeights":[1.968758225440979,0.06029555946588516,1.6496589183807373,0.1969003528356552,0.5812652707099915,-0.49263983964920044,-1.4162286520004272,0.6467267870903015,0.9389017820358276,-0.5666568279266357,0.09210626035928726,0.0154453469440341,1.9790271520614624,-0.6524197459220886,0.3852829337120056,-1.0139862298965454,1.4543485641479492,-1.4742259979248047,0.8402373790740967,-1.6299901008605957,0.5867784023284912,0.180627703666687,0.055871233344078064,-0.4523128867149353,-0.5280774235725403,1.2441636323928833,-1.3873804807662964,0.446940541267395,-1.6125956773757935,0.6829583644866943,-0.19958287477493286,0.5077139139175415,1.8004628419876099,-1.0888164043426514,-2.082960844039917,1.764892339706421],"name":"low-end-ao4-8-taps2-8-w6-10m","outputBias":-0.00394976744428277,"outputWeights":[0.09832457453012466,-0.1482764333486557,-0.08873635530471802,-0.403469443321228,-0.07190576940774918,0.09040576219558716],"queryCount":4,"queryFromFirstPassAO":true,"queryProjectionWeights":[-0.7426049709320068,-0.5719303488731384,-3.193450927734375,-0.9577654600143433,0.40415704250335693,-6.56830358505249,-1.1922619342803955,2.4809250831604004,1.2940878868103027,3.264608383178711,-3.5458452701568604,1.3190993070602417,0.7067117691040039,0.32265281677246094,3.1459200382232666,-2.2284884452819824,1.82660710811615,-2.1711184978485107,-2.0983083248138428,-1.545684814453125,-0.24569042026996613,0.03336392343044281,-0.7557753324508667,-4.336874008178711,0.7772427201271057,1.1340705156326294,0.39808061718940735,-0.6557901501655579,-0.717821478843689,0.36376991868019104,-4.532812595367432,2.2300631999969482,-2.299959421157837,-0.1159333810210228,-1.139514684677124,2.038274049758911,-2.1567769050598145,-1.2255606651306152,-2.2613525390625,-0.06955213844776154,0.686713695526123,-2.4105632305145264,1.5480830669403076,0.08907312154769897,2.8444554805755615,0.7416970729827881,-0.2882023751735687,-0.07773427665233612,1.5392664670944214,1.045050024986267,1.26668119430542,-0.4849325120449066,0.35273799300193787,-0.03617783635854721,-0.13010932505130768,-1.1637448072433472,0.429253488779068,0.06385817378759384,0.2689800560474396,-1.339846134185791,-0.4639604985713959,1.805208683013916,0.8485044836997986,0.4042709171772003,-2.134558916091919,0.14060381054878235,0.7928856015205383,-0.014814537018537521,-0.7591497898101807,-0.09340336173772812,0.33959105610847473,0.3742930293083191,-1.9727059602737427,-0.8598183393478394,-1.752785086631775,0.2700415551662445,1.018426537513733,-2.5465080738067627,0.39994364976882935,-0.2866238057613373,1.853872537612915,-0.18617753684520721,0.3271365165710449,-0.4264972507953644,0.15499892830848694,0.7698414325714111,-2.9017550945281982,-0.3716241717338562,-0.46667245030403137,0.051073987036943436,0.25917312502861023,-0.4696865975856781,-1.3365131616592407,0.13455919921398163,0.09333230555057526,-0.7994267344474792,-1.4478063583374023,1.7429078817367554,0.47980016469955444,0.34636157751083374,-1.822554588317871,-1.5870182514190674,-0.9792371988296509,-0.2771056294441223,-3.4887828826904297,0.16184262931346893,0.11151053011417389,0.016441740095615387,0.4298795163631439,-0.012944431975483894,-2.3875114917755127,0.1880328208208084,-0.6474562883377075,-2.384657621383667,0.10586823523044586,0.09706966578960419,2.174907922744751,0.2628093659877777,-0.39121437072753906,0.8147315382957458,-0.21277876198291779,-0.3848346173763275,2.1808743476867676,-0.6166099309921265,1.595718502998352,0.0595792680978775,-0.6556687951087952,-1.1998558044433594,-1.393308401107788,0.17007943987846375,0.4996064305305481,0.14873987436294556,0.3305904269218445,0.3763549327850342,2.4247405529022217,-0.1099848523736,-0.4249989688396454,-1.2989078760147095,-0.6244494318962097,-0.6966514587402344,-3.378746509552002,-0.09526723623275757,0.9617002606391907,0.18756191432476044],"summaryQueries":[-1.3059139251708984,0.4513107240200043,-2.322615385055542,-0.4083015024662018,0.5291218757629395,-0.4556257128715515,-1.1942349672317505,0.32890892028808594,-0.21246710419654846,0.02615520730614662,0.20038092136383057,-0.6428561210632324,-0.34424054622650146,-0.26338937878608704,-0.0962071642279625,-0.018075427040457726,1.3589818477630615,-0.06518024206161499,-0.22449712455272675,0.1584227979183197,-0.4284190237522125,-0.6464412808418274,-0.17804966866970062,-0.6673154830932617],"supportedAOSamples":[4,8],"supportedDenoiseSamples":[2,8],"tapCountFeature":false,"tapEncoder":"linear-relu","tapFeatureInverseStandardDeviation":[0.8376936316490173,0.8167747855186462,2.484034538269043,10.07677173614502,0.11785588413476944],"tapFeatureMean":[0.46911320090293884,0.15568889677524567,0.8032788038253784,0.9206308126449585,1.809395432472229],"tapFeatureVersion":5,"tapInputBias":[0.5654292702674866,0.7262413501739502,-1.026995301246643,-0.14545153081417084,0.08620049804449081,-0.32537832856178284],"tapInputWeights":[0.017292853444814682,0.769314169883728,-0.2591651678085327,-0.15575125813484192,0.7818280458450317,-0.8210893869400024,0.4458440840244293,-0.06454126536846161,0.030049528926610947,-0.8847028017044067,-0.10588371008634567,-7.126821517944336,0.036367520689964294,0.034571573138237,-1.8666346073150635,-2.680792808532715,2.527808666229248,0.06735005229711533,-0.004615016747266054,1.3495070934295654,-0.0020523848943412304,-2.1540005207061768,-0.04858970269560814,-0.7296149730682373,-1.3557016849517822,-1.03042733669281,-0.8479847311973572,-0.07003267109394073,-0.9329867959022522,-2.451733350753784],"tokenWidth":6,"valueProjectionWeights":[0.8635621070861816,-0.3634067177772522,1.4282466173171997,-0.16784507036209106,0.8722880482673645,-0.7474117279052734,-1.572554349899292,0.011807848699390888,0.14296934008598328,0.8244637250900269,-0.1024855449795723,0.3010793924331665,0.21295760571956635,-0.36780381202697754,1.778749942779541,0.27103766798973083,-0.1235288754105568,0.37399497628211975,1.1257693767547607,-0.9169410467147827,3.380439043045044,0.12439541518688202,-0.1989397555589676,-0.15462400019168854,1.5927190780639648,0.41355714201927185,-0.569654643535614,0.8420050144195557,-0.8163355588912964,0.333870530128479,1.0588184595108032,-1.1987265348434448,0.4775378108024597,-0.05230499058961868,1.1195310354232788,-0.7227171063423157],"viewFeatures":true}');var eh={};eh=JSON.parse('{"aoCountFeature":false,"architecture":"attention-v3-pilot","attention":"softmax","dynamicQueries":true,"formatVersion":5,"globalBias":[0.3415367603302002,0.4082188010215759,-0.16684558987617493,-0.09623096138238907,0.40162110328674316,0.6870759725570679],"globalFeatureInverseStandardDeviation":[14.32778263092041,1.884121298789978,1.652080774307251,3.365184783935547,3.1075286865234375,4.699100494384766],"globalFeatureMean":[0.9555400013923645,-0.5114423036575317,0.04568067193031311,0.001569038606248796,0.5547776818275452,0.6745914220809937],"globalWeights":[-0.22830034792423248,-0.051094744354486465,-0.344512015581131,0.007089327555149794,-0.043348051607608795,-0.09276396036148071,-0.05486375093460083,0.18106424808502197,0.1694583147764206,-0.023197153583168983,0.09547806531190872,0.05922706425189972,-0.15566955506801605,0.0845736637711525,0.11941134184598923,-0.01296475250273943,-0.09078185260295868,-0.4673057794570923,-0.07078322023153305,0.03164277970790863,0.02300436422228813,0.007936311885714531,0.031124748289585114,0.6225715279579163,0.1750756949186325,0.10866374522447586,0.08524356782436371,0.00658439751714468,-0.0668456107378006,-0.13015305995941162,0.3342185914516449,0.1907544583082199,0.20439626276493073,-0.018428325653076172,0.18159537017345428,0.22900885343551636],"halfResolution":true,"headBias":[-0.11416810005903244,0.07964055985212326,-0.06806863099336624,0.0038501343224197626,0.040354009717702866,0.06674038618803024],"headWeights":[-0.4640994369983673,0.018926702439785004,-0.13533449172973633,-0.22938643395900726,0.009525771252810955,-0.3001689016819,0.02202548086643219,0.2453767955303192,0.2933403551578522,0.24952922761440277,-0.7516289949417114,-0.01392917800694704,0.9657450914382935,1.0238590240478516,-0.36432692408561707,-0.06545613706111908,-0.16991490125656128,-0.4894498586654663,-0.3495199680328369,-0.6644460558891296,0.053451452404260635,-0.14739912748336792,0.14740459620952606,1.1581701040267944,-0.9495205879211426,0.30856919288635254,-0.8731852769851685,-0.5671781897544861,0.13287201523780823,-0.2512269616127014,1.2776426076889038,-0.07583127170801163,0.8658038973808289,0.6850570440292358,-0.47873616218566895,0.5940101146697998,-0.3332737684249878,0.5447549819946289,-0.559345543384552,-0.4433456063270569,-0.08191245049238205,-0.4857386350631714,0.235487699508667,-0.7909494042396545,0.661185622215271,-0.09463835507631302,0.4860266149044037,0.06314943730831146,-0.9830819964408875,0.06097106263041496,-0.3883771300315857,-1.0524128675460815,-0.0041238171979784966,-0.5205481052398682,-0.12415190041065216,0.1452372521162033,0.023789944127202034,1.2265452146530151,-0.43104827404022217,-0.2516288161277771,0.15755632519721985,0.11786606907844543,0.20667603611946106,-1.383582353591919,-0.1548992246389389,-0.26000967621803284,0.9690282940864563,-0.5563746094703674,0.43293341994285583,0.9071518778800964,0.69586580991745,0.49070027470588684,0.7428987622261047,-0.08652815222740173,0.7734517455101013,0.4622238278388977,-0.40358197689056396,-0.156002014875412,-0.7825685739517212,-0.23884020745754242,-0.5168832540512085,-0.5263991355895996,0.47761040925979614,0.6888848543167114,1.8525972366333008,0.40238267183303833,-0.10582409799098969,-1.480552315711975,1.047361135482788,-0.19110719859600067,-1.2935211658477783,0.14398373663425446,-0.24178177118301392,0.9450215101242065,-1.0469677448272705,-0.36496612429618835,0.15291893482208252,-0.23055820167064667,0.32076141238212585,-0.0033461370039731264,0.08584912866353989,-0.028479479253292084,-0.7471737265586853,-0.05064994469285011,0.3379823863506317,-0.25828948616981506,-0.6537284851074219,-0.694736123085022,0.4832485318183899,0.840389609336853,-0.45775526762008667,0.10633621364831924,-0.06729532778263092,-0.48524561524391174,0.08653950691223145,-0.44572219252586365,-0.10908707976341248,-0.03414439037442207,0.4199244976043701,1.0342738628387451,0.7314791679382324,-0.13269861042499542,0.4169081747531891,0.5329394340515137,0.0542592778801918,0.1498338282108307,-1.1465983390808105,0.09329517930746078,-0.9296138286590576,-1.5018470287322998,0.35964053869247437,-0.13306088745594025,0.21683169901371002,0.001978742890059948,-0.003005517413839698,0.08595708012580872,0.10927268117666245,0.14567796885967255,0.4596860706806183,-0.017128631472587585,0.4522404074668884,0.40431687235832214,-0.2267376035451889,-0.15480786561965942],"headWidth":6,"keyProjectionWeights":[1.0743968486785889,-0.31522753834724426,-0.13789422810077667,-0.6588653326034546,-0.07561295479536057,-0.9335454702377319,-0.01487213745713234,-1.3802809715270996,0.8195410370826721,1.102952241897583,-0.8498378396034241,0.706190288066864,-1.966288447380066,1.1210136413574219,-0.5516120791435242,-1.0897433757781982,1.0223802328109741,-1.3140889406204224,0.20167534053325653,0.9976780414581299,0.4491519331932068,-0.40820834040641785,0.8151915669441223,-0.7031775116920471,-0.23721280694007874,0.008917578496038914,-1.076572060585022,0.03306635841727257,-0.2085762768983841,-0.43795111775398254,0.09096845239400864,0.8193746209144592,0.09645097702741623,-0.5284878015518188,-0.6070249676704407,0.952181339263916],"name":"halfres-r24-w6-10m","outputBias":-0.001141887973062694,"outputWeights":[-0.08033348619937897,-0.11312445253133774,0.05444560572504997,0.05276890844106674,-0.06606808304786682,0.07891061902046204],"queryCount":4,"queryFromFirstPassAO":true,"queryProjectionWeights":[-0.8364990949630737,-3.0233566761016846,-0.3442854583263397,-1.083615779876709,1.6908210515975952,-0.9886903166770935,1.1950870752334595,0.6742460131645203,-0.6858260035514832,1.6143404245376587,3.0980851650238037,4.898868560791016,0.5032519102096558,-2.0328736305236816,0.0007768122013658285,-0.1973840743303299,2.993817090988159,-0.18793244659900665,-0.6154602766036987,-1.5944818258285522,0.3907843828201294,2.5655364990234375,-1.063948631286621,1.5036771297454834,-1.1844741106033325,-1.8838146924972534,0.6615119576454163,0.5850620269775391,-3.0083751678466797,0.9452061057090759,1.6498812437057495,-0.04793442785739899,-0.6147639155387878,-4.572556018829346,5.464226722717285,1.0062377452850342,0.6215742826461792,-0.7856212854385376,0.41761279106140137,0.1742991805076599,-1.1416757106781006,0.5232507586479187,1.8533458709716797,-0.46134254336357117,-0.436107337474823,0.508152186870575,2.248513698577881,1.1985458135604858,0.44868004322052,-0.4089008867740631,0.447164386510849,0.03767639771103859,0.8541422486305237,0.5278031826019287,0.561639130115509,-1.3058439493179321,0.24192160367965698,0.24033910036087036,0.5725159645080566,1.3959643840789795,-1.3122018575668335,0.684934675693512,0.3693007230758667,-0.02337006852030754,-0.002009764313697815,0.2245292216539383,1.8006508350372314,-0.9181729555130005,0.7256668210029602,-0.5521589517593384,-0.770067572593689,0.5162780284881592,-0.0628119558095932,-0.3567149341106415,0.4567009210586548,-0.09375373274087906,-1.1909592151641846,0.2829681932926178,0.3646962642669678,-0.35244184732437134,-0.7048134803771973,0.274361789226532,1.7396624088287354,0.9223706126213074,-0.07499420642852783,-0.06437613070011139,0.07612618058919907,-0.35587361454963684,-0.9122102856636047,0.38134026527404785,0.00507856672629714,-0.47192129492759705,-0.17764882743358612,-0.5668477416038513,1.3999978303909302,0.4975797235965729,-0.2864972651004791,0.28085026144981384,0.1488514244556427,-0.5350532531738281,-0.4610328674316406,0.3033447265625,1.2363266944885254,-0.5562520027160645,-0.666741132736206,-0.12524576485157013,0.530405580997467,0.3076270520687103,-0.25928106904029846,0.20386068522930145,0.11411076039075851,0.356564998626709,-1.474789023399353,-0.0022542462684214115,0.769967794418335,-0.21853111684322357,-0.16907602548599243,1.2655582427978516,2.348046064376831,0.9514631628990173,-0.002333088079467416,0.2552780508995056,0.07524729520082474,0.3060106039047241,-1.007356882095337,0.39073076844215393,-0.3431692123413086,-0.7208309769630432,-0.07652191072702408,0.8514524698257446,1.5842790603637695,0.7932853102684021,-0.49217814207077026,0.11068519949913025,0.4871797263622284,0.05158176273107529,1.0105245113372803,0.7907965779304504,-0.16744866967201233,0.20696884393692017,-1.7004191875457764,0.5724795460700989,-0.28956687450408936,-0.38299575448036194],"summaryQueries":[-0.6831215620040894,0.6311867833137512,-0.8240194320678711,-0.21020881831645966,0.37452322244644165,0.7811359763145447,-0.8128119111061096,-0.037001919001340866,0.6393308043479919,-0.30988550186157227,-0.293872594833374,-0.6090259552001953,-0.42756932973861694,0.12270799279212952,0.09413067996501923,0.13644303381443024,0.6673937439918518,-0.06420466303825378,-0.04550953954458237,0.7849200963973999,0.11615078151226044,-0.8335475325584412,-0.18970483541488647,-0.8479589223861694],"supportedAOSamples":[4,64],"supportedDenoiseSamples":[2,16],"tapCountFeature":false,"tapEncoder":"linear-relu","tapFeatureInverseStandardDeviation":[1.129726529121399,1.0906636714935303,3.25871205329895,13.365403175354004,0.169048473238945],"tapFeatureMean":[0.393989235162735,0.02706373855471611,0.8846182823181152,0.9539855718612671,0.9779379367828369],"tapFeatureVersion":5,"tapInputBias":[-0.05968135967850685,0.40128645300865173,0.3676106631755829,0.43632081151008606,0.2667112648487091,-0.28360697627067566],"tapInputWeights":[0.1367875188589096,-0.11661709100008011,-0.3707384467124939,-0.08733858168125153,1.951775312423706,-2.295248031616211,3.7642486095428467,-0.14622488617897034,0.2124585211277008,-1.09938383102417,0.27411553263664246,-0.9121370315551758,0.2122669517993927,0.15696923434734344,-4.478344917297363,-3.043544054031372,1.72374427318573,-0.17449459433555603,0.22755563259124756,-1.3451639413833618,0.16430269181728363,-0.37391841411590576,-0.014916449785232544,-0.625052809715271,-1.0245423316955566,-0.9597188234329224,1.5213099718093872,0.1632615476846695,-0.42775213718414307,-0.5722843408584595],"tokenWidth":6,"valueProjectionWeights":[-0.5791106224060059,-0.5383517742156982,-0.42644476890563965,0.8547752499580383,0.13658058643341064,-0.6452930569648743,-0.34030798077583313,0.16021066904067993,-1.0805267095565796,0.5308062434196472,0.2891160547733307,-0.295070081949234,-0.30386441946029663,0.5528252124786377,0.3455732464790344,-0.6142981648445129,-0.011208402924239635,-0.3313365876674652,1.2750017642974854,-0.15464529395103455,0.45798465609550476,0.015851326286792755,-1.2394341230392456,1.51675283908844,0.7760326862335205,-1.568787693977356,0.698053240776062,0.8221307992935181,-0.3420703709125519,0.5127549171447754,-0.6207800507545471,0.027017507702112198,0.4534338414669037,-0.22769692540168762,-0.43250134587287903,0.6465526223182678],"viewFeatures":true}');var th={};th=JSON.parse('{"aoCountFeature":true,"architecture":"attention-v3-pilot","attention":"softmax","dynamicQueries":true,"formatVersion":5,"globalBias":[-0.3198130428791046,0.4621964693069458,0.11979507654905319,-0.3362836241722107,-0.03246693313121796,0.36117494106292725],"globalFeatureInverseStandardDeviation":[13.75318431854248,1.9015464782714844,1.5972281694412231,3.3482253551483154,3.1128716468811035,4.714102745056152,2.82527494430542],"globalFeatureMean":[0.9555054903030396,-0.5014526844024658,0.02391631156206131,0.002844449831172824,0.5547052025794983,0.6744586825370789,2.4688093662261963],"globalWeights":[-0.011659174226224422,0.03575826436281204,0.0659068375825882,-0.005945529788732529,0.09485199302434921,0.7067717909812927,-0.013656503520905972,0.10924661159515381,-0.0021182671189308167,0.0011400303337723017,-0.0005970761412754655,-0.014494558796286583,-0.05558965355157852,-0.009519142098724842,0.13093283772468567,-0.0008799858624115586,-0.06892896443605423,0.006082552019506693,-0.021069327369332314,-0.008815400302410126,-0.031907256692647934,1.0449752807617188,-0.06077992171049118,0.018840966746211052,-0.0030590512324124575,-0.02545272558927536,-0.06604462116956711,-0.01738095097243786,-0.3082149922847748,-0.12470187246799469,-0.3938072621822357,-0.006867499090731144,-0.0894615650177002,-0.1576204150915146,-0.06304008513689041,-0.02727997489273548,-0.09531105309724808,0.16344937682151794,-0.0011814470635727048,-0.11285676062107086,-0.20248013734817505,0.007925343699753284],"halfResolution":true,"headBias":[-0.005491150077432394,0.09067370742559433,0.38472336530685425,0.3219999670982361,-0.3463800251483917,0.1648607850074768],"headWeights":[0.12697002291679382,1.486151933670044,-0.6321180462837219,1.0358647108078003,0.19681382179260254,1.0987634658813477,-2.400468349456787,2.185788869857788,0.3948235809803009,-0.07627931237220764,1.1911675930023193,2.200221300125122,0.6626771092414856,-0.37286797165870667,-1.6102510690689087,0.040450505912303925,-0.7545972466468811,-2.2289867401123047,1.1527806520462036,-0.26928940415382385,0.6136049032211304,-1.1754579544067383,-0.4376399517059326,-0.5459316372871399,0.0010903991060331464,0.6588382124900818,-0.34718120098114014,-0.37239518761634827,0.024124285206198692,0.6609070301055908,-0.710561990737915,0.21747325360774994,0.6900713443756104,0.4795707166194916,0.3859097361564636,0.06570284813642502,0.3022500276565552,0.011044642888009548,-0.07519306242465973,-0.217575803399086,-0.7890531420707703,-0.7999507188796997,0.5893385410308838,-0.840714693069458,-0.12399818748235703,0.07027088850736618,0.12362434715032578,0.1724563091993332,-0.16638433933258057,0.479497492313385,-0.1266680806875229,0.07807710021734238,0.19778770208358765,0.9826390147209167,0.0045632487162947655,-0.9945358037948608,0.4166831076145172,-0.6617562174797058,0.435362845659256,-0.4251214265823364,0.042026881128549576,1.0004266500473022,-0.42482319474220276,0.10521756112575531,-0.6241959929466248,-0.08027149736881256,-0.029701415449380875,-0.001538985874503851,-0.032443657517433167,0.20462368428707123,0.01400839164853096,-0.07756165415048599,-0.35733434557914734,-0.07182656973600388,-0.03510478883981705,-0.03367917984724045,-0.6418298482894897,-0.16706225275993347,0.009849101305007935,0.7374500632286072,-1.7371770143508911,-0.9573900103569031,-1.595025897026062,-0.32510197162628174,0.21796202659606934,-0.061913639307022095,-0.04327717050909996,0.4143458902835846,1.2904736995697021,0.38356146216392517,-0.568250834941864,0.1093679741024971,0.6875637173652649,-0.020610814914107323,0.5238576531410217,0.7289501428604126,-0.09038779139518738,0.7243658900260925,-0.5790347456932068,-0.05818081647157669,-0.21121671795845032,0.2240002304315567,-0.5271614193916321,-0.6503554582595825,0.13784991204738617,0.083452507853508,0.20016145706176758,0.17993955314159393,0.08826418966054916,0.4003436863422394,-0.104472815990448,-0.17553770542144775,-0.38760995864868164,0.03262068331241608,0.8973648548126221,-0.4956895112991333,0.23113630712032318,0.2059357762336731,0.16896586120128632,-0.4677483141422272,0.21322685480117798,-0.19283628463745117,0.4886004626750946,0.2877121567726135,0.229716956615448,-0.4374759793281555,0.43165263533592224,-0.14368227124214172,-0.8074246048927307,0.03832073509693146,0.8028852343559265,-0.4065983295440674,-0.9018722772598267,0.5889996290206909,1.1141420602798462,-0.8406279683113098,-0.581637442111969,1.268032431602478,0.21262231469154358,-0.0448884479701519,-0.5887182354927063,0.20177946984767914,-0.4357456862926483,-0.7045614123344421],"headWidth":6,"keyProjectionWeights":[0.3196025788784027,0.41115787625312805,0.5520728826522827,1.5160213708877563,-0.1650206744670868,-0.6802523136138916,-0.6249227523803711,-0.8044249415397644,0.8723970651626587,-0.1537444293498993,0.978257954120636,0.5356707572937012,0.38293805718421936,-0.7429642081260681,-0.14657729864120483,-0.8046625256538391,0.5713147521018982,-1.272758960723877,-0.8102282881736755,0.2579136788845062,1.8006619215011597,-3.361179828643799,-0.12005804479122162,-0.5009894967079163,-1.1810256242752075,-0.3583584427833557,-0.0739733874797821,0.15955999493598938,0.40309274196624756,-0.37445375323295593,0.3187107741832733,0.6644556522369385,-0.07355386018753052,-1.1062809228897095,0.08947483450174332,0.08639319241046906],"name":"halfres-lowend-ao4-8-taps2-8-r24-w6-10m","outputBias":-0.008064254187047482,"outputWeights":[0.05921441689133644,-0.11912118643522263,0.12144560366868973,0.07663485407829285,-0.15401549637317657,0.08530080318450928],"queryCount":4,"queryFromFirstPassAO":true,"queryProjectionWeights":[0.9439855813980103,0.2634672522544861,-2.798868179321289,1.28986394405365,0.015298767015337944,-1.0957112312316895,0.22253455221652985,-0.9855132102966309,-0.11677511036396027,-0.7050121426582336,-0.5463969111442566,0.36258527636528015,0.404987096786499,0.8095003366470337,-0.3161497712135315,1.5516482591629028,0.3189839720726013,-0.519627571105957,-0.43169212341308594,-2.062901020050049,2.0220491886138916,-2.6193349361419678,-0.5738628506660461,-0.007839156314730644,0.20730368793010712,0.3266517221927643,1.0123913288116455,1.2757887840270996,0.7285013794898987,-1.5216072797775269,-0.18242749571800232,-0.1601787954568863,-0.3352344334125519,1.1276977062225342,0.22801077365875244,-0.19539566338062286,-0.14803293347358704,-2.357962131500244,-2.9891157150268555,0.5116599202156067,-0.505539059638977,-0.28880056738853455,0.14494404196739197,-0.9457935690879822,-2.6363792419433594,-0.03499924764037132,-0.20277877151966095,-0.40832045674324036,0.7324828505516052,0.5909420251846313,0.05086839199066162,0.7301332354545593,0.4303695857524872,0.016722282394766808,-0.8610791563987732,-1.8339946269989014,1.310667634010315,-1.5207628011703491,-0.009985758922994137,0.4485096335411072,-0.04359700158238411,-0.6340705156326294,2.8351168632507324,-0.012090243399143219,0.48313698172569275,-0.5672005414962769,0.2623421251773834,-1.9412641525268555,-4.415369033813477,1.308350920677185,0.34898725152015686,-1.304937720298767,-0.7426295876502991,0.9071046113967896,1.6402188539505005,-0.8991245031356812,-0.5255399346351624,0.2967768609523773,0.17994362115859985,1.6290701627731323,-1.4749226570129395,-0.3682224154472351,0.053420890122652054,-0.5845384001731873,0.8563029170036316,-1.2358616590499878,-0.5046566724777222,0.7880385518074036,0.25138530135154724,0.05738065391778946,-0.46602511405944824,-0.43377381563186646,0.24630382657051086,-0.9830443859100342,0.1665915995836258,0.6318179965019226,-0.5698667168617249,-1.0392647981643677,1.8079851865768433,0.24400252103805542,0.3969854414463043,0.0694936141371727,-0.2979617416858673,-0.1347111314535141,0.014600541442632675,0.20383712649345398,0.4279293417930603,-0.056503064930438995,-0.12996114790439606,-1.782130241394043,-0.10443630814552307,1.2110345363616943,-0.0820847675204277,-0.36476296186447144,0.39254459738731384,0.09328363090753555,-2.6527786254882812,0.05625227466225624,0.027634616941213608,-1.1020320653915405,0.29280638694763184,0.6204910278320312,-1.8372011184692383,0.5345343947410583,0.11145419627428055,0.40972527861595154,0.26381367444992065,0.40174195170402527,0.5196073651313782,-1.3149847984313965,0.133244127035141,-0.14544466137886047,0.18221737444400787,-0.2907179594039917,2.59808611869812,1.2028559446334839,0.16173136234283447,-0.04112636297941208,-0.577499508857727,-0.349185585975647,0.9895521998405457,0.07286140322685242,0.13262540102005005,0.728203296661377],"summaryQueries":[-0.6004841923713684,0.4441118538379669,-0.5248870849609375,-0.4831331670284271,0.3529265820980072,0.4784294664859772,-0.26624274253845215,0.47364991903305054,0.20335544645786285,-0.34292635321617126,0.2609531283378601,-0.9677605628967285,-0.5737055540084839,0.28534114360809326,0.161922886967659,0.3595702052116394,0.8298744559288025,-0.25901392102241516,-0.26474785804748535,0.6882280111312866,0.2539561688899994,-0.7672181725502014,-0.335147887468338,-0.7452542185783386],"supportedAOSamples":[4,8],"supportedDenoiseSamples":[2,8],"tapCountFeature":false,"tapEncoder":"linear-relu","tapFeatureInverseStandardDeviation":[1.1515717506408691,1.0871944427490234,3.143930435180664,12.819302558898926,0.16889989376068115],"tapFeatureMean":[0.4169483482837677,0.027962181717157364,0.8749999403953552,0.9536586403846741,1.0255751609802246],"tapFeatureVersion":5,"tapInputBias":[0.19159507751464844,0.6269030570983887,0.6338620781898499,0.5564900636672974,0.35316258668899536,-0.2602163851261139],"tapInputWeights":[0.896274209022522,-6.723811626434326,-0.5586385726928711,0.18324045836925507,1.0927767753601074,0.07140769809484482,5.00568151473999,-0.27998945116996765,-0.13933396339416504,1.2269103527069092,0.6970008611679077,-5.501674175262451,0.18685966730117798,0.044365085661411285,-1.9498289823532104,0.12290377169847488,-0.9575690627098083,0.41391539573669434,0.32891175150871277,-1.7544350624084473,-3.2326886653900146,5.646435737609863,-0.16970933973789215,-0.040028393268585205,-1.3030297756195068,-5.924145221710205,-0.22688867151737213,-0.05720207467675209,0.27684393525123596,-2.4887847900390625],"tokenWidth":6,"valueProjectionWeights":[-0.17890113592147827,0.035887137055397034,-0.6631529331207275,0.7090420126914978,0.5978066325187683,-0.21369442343711853,-0.248879536986351,-0.4442882537841797,-0.3240104913711548,-0.08670275658369064,0.12696222960948944,0.08949488401412964,-0.6833963990211487,0.1935519278049469,1.2395929098129272,-0.8060399889945984,-0.37402594089508057,-0.0259151142090559,-0.17773492634296417,0.5507774949073792,-0.18875859677791595,0.38419610261917114,-0.5286281704902649,0.39932018518447876,0.47954198718070984,-0.21882106363773346,-0.3402658998966217,0.9642471075057983,-0.10009662806987762,-0.1036665216088295,-0.06740610301494598,0.10254493355751038,-0.5368606448173523,0.5164257884025574,-0.0014515522634610534,-0.30093300342559814],"viewFeatures":true}');const gr=[pt($u),pt(Ju),pt(th),pt(eh)],Wr=5,ko=6,W2=n=>{const e=n.tokenWidth,t=n.queryCount*e,i=ko+(n.aoCountFeature?1:0);return[["tapInputWeights",e*Wr],["tapInputBias",e],["tapFeatureMean",Wr],["tapFeatureInverseStandardDeviation",Wr],["globalWeights",e*i],["globalBias",e],["globalFeatureMean",i],["globalFeatureInverseStandardDeviation",i],["summaryQueries",t],["queryProjectionWeights",t*e],["keyProjectionWeights",e*e],["valueProjectionWeights",e*e],["headWeights",n.headWidth*t],["headBias",n.headWidth],["outputWeights",n.headWidth]]},Wc=n=>(n==null?void 0:n.length)===2&&n.every(Number.isInteger)&&n[0]>=1&&n[0]<=n[1];for(const n of gr)if(n.architecture!=="attention-v3-pilot"||n.formatVersion!==5||n.halfResolution!==void 0&&typeof n.halfResolution!="boolean"||!Wc(n.supportedAOSamples)||!Wc(n.supportedDenoiseSamples)||n.supportedDenoiseSamples[1]>16||!n.dynamicQueries||!n.queryFromFirstPassAO||!n.viewFeatures||n.tapCountFeature||n.tapFeatureVersion!==5||n.tapEncoder!=="linear-relu"||n.attention!=="softmax"||![n.tokenWidth,n.queryCount,n.headWidth].every(e=>Number.isInteger(e)&&e>0)||!Number.isFinite(n.outputBias)||W2(n).some(([e,t])=>{var i;return((i=n[e])==null?void 0:i.length)!==t||n[e].some(r=>!Number.isFinite(r))}))throw new Error(`The bundled N8AO neural denoise model ${n.name} has an unsupported layout.`);const Xc=([n,e],t)=>t>=n&&t<=e,nh=(n,e,t=!1)=>gr.find(i=>!!i.halfResolution==!!t&&Xc(i.supportedAOSamples,n)&&Xc(i.supportedDenoiseSamples,e))??null,ih=n=>{if(!Number.isFinite(n))throw new Error("The bundled N8AO neural model contains a non-finite value.");if(n===0)return"0.0";const e=Math.fround(n).toPrecision(9).replace(/\.?0+(e|$)/,"$1");return/[.eE]/.test(e)?e:`${e}.0`},za=(n,e)=>n===0?null:`${ih(n)} * ${e}`,Ba=n=>n===0?null:ih(n),ka=n=>n.filter(Boolean).join(" + ")||"0.0",Qt=n=>Array.from({length:n},(e,t)=>t),qc=(n,e,t,i,r,a,s=[])=>{const o=a+s.length;return Qt(r).map(l=>{let u=e[l];const c=Qt(o).map(f=>{const d=n[l*o+f]*i[f];return u-=d*t[f],d});return s.forEach((f,d)=>{u+=c[a+d]*f}),{offset:u,coefficients:c.slice(0,a)}})},Yc=(n,e,t)=>`
    void ${n}(float raw[${t}], out float token[NEURAL_TOKEN_WIDTH]) {
${e.map(({offset:i,coefficients:r},a)=>`        token[${a}] = max(${ka([Ba(i),...r.map((s,o)=>za(s,`raw[${o}]`))])}, 0.0);`).join(`
`)}
    }
`,jc=n=>`float[${n}](${new Array(n).fill("0.0").join(", ")})`,X2=(n,e)=>{const t=n.tokenWidth,i=n.queryCount,r=n.headWidth,a=i*t,s=Yc("neuralEncodeTap",qc(n.tapInputWeights,n.tapInputBias,n.tapFeatureMean,n.tapFeatureInverseStandardDeviation,t,Wr),Wr),o=Yc("neuralEncodeCenter",qc(n.globalWeights,n.globalBias,n.globalFeatureMean,n.globalFeatureInverseStandardDeviation,t,ko,n.aoCountFeature?[Math.log2(e)]:[]),ko),l=1/Math.sqrt(t),u=(h,x)=>n.keyProjectionWeights[h*t+x],c=(h,x)=>n.valueProjectionWeights[h*t+x],f=(h,x)=>{const _=Math.floor(h/t),M=h%t;return l*Qt(t).reduce((P,T)=>P+u(T,M)*n.queryProjectionWeights[(_*t+T)*t+x],0)},d=h=>{const x=Math.floor(h/t),_=h%t;return l*Qt(t).reduce((M,P)=>M+u(P,_)*n.summaryQueries[x*t+P],0)},p=(h,x)=>{const _=Math.floor(x/t),M=x%t;return Qt(t).reduce((P,T)=>P+n.headWeights[h*a+_*t+T]*c(T,M),0)},g=`
    void neuralMakeQueries(float token[NEURAL_TOKEN_WIDTH], out float queries[NEURAL_QUERY_WIDTH]) {
${Qt(a).map(h=>`        queries[${h}] = ${ka([Ba(d(h)),...Qt(t).map(x=>za(f(h,x),`token[${x}]`))])};`).join(`
`)}
    }
`,v=`
    void neuralAttend(
        float token[NEURAL_TOKEN_WIDTH],
        float queries[NEURAL_QUERY_WIDTH],
        inout float summary[NEURAL_QUERY_WIDTH],
        inout float denominator[NEURAL_QUERY_COUNT]
    ) {
        float weight;
${Qt(i).map(h=>[`        weight = exp(min(${Qt(t).map(x=>`queries[${h*t+x}] * token[${x}]`).join(" + ")}, 60.0));`,`        denominator[${h}] += weight;`,...Qt(t).map(x=>`        summary[${h*t+x}] += weight * token[${x}];`)].join(`
`)).join(`
`)}
    }
`,m=`
    float neuralHead(float summary[NEURAL_QUERY_WIDTH], float denominator[NEURAL_QUERY_COUNT]) {
${Qt(i).map(h=>`        float inverseDenominator${h} = 1.0 / max(denominator[${h}], 1e-12);`).join(`
`)}
${Qt(r).map(h=>`        float head${h} = max(${ka([Ba(n.headBias[h]),...Qt(a).map(x=>za(p(h,x),`summary[${x}] * inverseDenominator${Math.floor(x/t)}`))])}, 0.0);`).join(`
`)}
        return ${ka([Ba(n.outputBias),...Qt(r).map(h=>za(n.outputWeights[h],`head${h}`))])};
    }
`;return[`
    #define NEURAL_TOKEN_WIDTH ${t}
    #define NEURAL_QUERY_COUNT ${i}
    #define NEURAL_QUERY_WIDTH ${a}
    #define NEURAL_ZERO_SUMMARY ${jc(a)}
    #define NEURAL_ZERO_DENOMINATOR ${jc(i)}
`,s,o,g,v,m].join(`
`)},qs=new Map,q2=(n,e,t=!1)=>{const i=nh(n,e,t);if(!i)return null;const r=`${i.name}:${i.aoCountFeature?n:""}`;return qs.has(r)||qs.set(r,X2(i,n)),qs.get(r)},Y2=[Math.min(...gr.map(n=>n.supportedAOSamples[0])),Math.max(...gr.map(n=>n.supportedAOSamples[1]))],j2=[Math.min(...gr.map(n=>n.supportedDenoiseSamples[0])),Math.max(...gr.map(n=>n.supportedDenoiseSamples[1]))],Wa={aoSamples:{range:Y2,fallback:16},denoiseSamples:{range:j2,fallback:8},denoiseRadius:{range:[12,12],fallback:12},denoiseIterations:{range:[2,2],fallback:2}},rh=(n,e)=>{const[t,i]=Wa[n].range;return e>=t&&e<=i},Z2=(n,e)=>{if(!(n in Wa)||rh(n,e))return null;const[t,i]=Wa[n].range,r=t===i?`stays ${t}`:`is ${t}-${i}`;return`[N8AO] ${n} ${r} while neuralDenoise is on, so ${e} was ignored. Turn neuralDenoise off to change it.`},Q2=n=>{const e={};for(const[t,{fallback:i}]of Object.entries(Wa))rh(t,n[t])||(e[t]={from:n[t],to:i},n[t]=i);return e},K2=(n,e)=>{for(const[t,{from:i,to:r}]of Object.entries(e))n[t]===r&&(n[t]=i)};let Zc=!1;const J2=n=>{!n&&!Zc&&(console.warn("[N8AO] depthAwareUpsampling is always on; setting it to false does nothing."),Zc=!0)},$2=n=>{const e=n.configuration,t=n.shouldUseNeuralDenoise(),i=e.denoiseIterations;return Object.freeze({aoSamples:e.aoSamples,resolution:e.halfRes?"half":"full",denoiser:i<=0?"none":t?"neural":"bilateral",neuralModel:t?nh(e.aoSamples,e.denoiseSamples,e.halfRes).name:null,denoiseSamples:e.denoiseSamples,denoiseIterations:i,denoiseRadius:e.denoiseRadius*(e.halfRes&&t?2:1),upsampling:e.halfRes?t?"learned":"depth-aware":"none",depthMips:n.depthMipsSupported})};var Et={};Et=JSON.parse('{"architecture":"upsample-attention","featureInverseStandardDeviation":[2.15287184715271,2.1782360076904297,1.764146089553833,2.1500561237335205,1.5223102569580078,1.5223102569580078],"featureMean":[0.2157563716173172,-0.009060523472726345,0.4620492160320282,0.2185668796300888,-0.00004641203850042075,-0.00017390046559739858],"features":["neighbour AO","signed log1p height / half-res pixel","log1p in-plane distance / half-res pixel","normal agreement (neighbour z rebuilt from x, y)","screen offset x (half-res pixels)","screen offset y (half-res pixels, image-down)"],"formatVersion":1,"headBias":[-0.49836212396621704,-0.43638864159584045,-0.3448403477668762,0.0033751260489225388],"headWeights":[-0.23859690129756927,-0.2528063654899597,0.22717684507369995,0.08138161152601242,-0.062013860791921616,-0.01890455186367035,0.2710539996623993,-0.27808088064193726,0.3076658844947815,-1.5691200494766235,0.026774078607559204,0.38608577847480774,-0.5885924100875854,-0.40551555156707764,-0.17834876477718353,-0.5946246981620789],"headWidth":4,"logitBias":0.08565108478069305,"logitWeights":[-3.3090972900390625,-1.2691282033920288,-1.1384304761886597,-1.8641293048858643],"name":"upsample-attn-4-4-rebuilt-z-9.6m","outputBias":0.0016174089396372437,"outputWeights":[0.04738158732652664,-0.06951392441987991,-0.3849789500236511,-0.11321425437927246],"tokenBias":[2.5444843769073486,1.410379409790039,0.4129602015018463,-0.38071635365486145],"tokenWeights":[0.3278087079524994,0.14286136627197266,0.2755000591278076,-1.5989429950714111,-0.02162809856235981,0.01151680201292038,-0.4501010775566101,-0.6712762117385864,0.30405083298683167,-0.4180987775325775,0.05493999272584915,-0.054325446486473083,0.28790152072906494,0.27217385172843933,-0.9258096814155579,-0.31214186549186707,0.06527978926897049,0.08434554189443588,0.8333116769790649,-0.9605820178985596,-0.5541027188301086,-0.638063371181488,-0.0674639567732811,0.020165318623185158],"tokenWidth":4,"trainedOn":"600 scenes at half resolution, 4-64 AO samples, 2-16 denoise samples, shipped neural denoisers"}');const Ri=6,pn=pt(Et).tokenWidth,lr=pt(Et).headWidth,eg=[["featureMean",Ri],["featureInverseStandardDeviation",Ri],["tokenWeights",pn*Ri],["tokenBias",pn],["logitWeights",pn],["headWeights",lr*pn],["headBias",lr],["outputWeights",lr]];if(pt(Et).architecture!=="upsample-attention"||pt(Et).formatVersion!==1||![pn,lr].every(n=>Number.isInteger(n)&&n>0)||!Number.isFinite(pt(Et).logitBias)||!Number.isFinite(pt(Et).outputBias)||eg.some(([n,e])=>{var t;return((t=pt(Et)[n])==null?void 0:t.length)!==e||pt(Et)[n].some(i=>!Number.isFinite(i))}))throw new Error("The bundled N8AO neural upsample model has an unsupported layout.");const kr=n=>{if(n===0)return"0.0";const e=Math.fround(n).toPrecision(9).replace(/\.?0+(e|$)/,"$1");return/[.eE]/.test(e)?e:`${e}.0`},Ca=(n,e)=>n===0?null:`${kr(n)} * ${e}`,Da=n=>n.filter(Boolean).join(" + ")||"0.0",yi=n=>Array.from({length:n},(e,t)=>t),tg=yi(pn).map(n=>{let e=pt(Et).tokenBias[n];const t=yi(Ri).map(i=>{const r=pt(Et).tokenWeights[n*Ri+i]*pt(Et).featureInverseStandardDeviation[i];return e-=r*pt(Et).featureMean[i],r});return{offset:e,coefficients:t}}),ng=n=>`float[${n}](${new Array(n).fill("0.0").join(", ")})`,ig=`
    float neuralUpsample(vec3 worldPos, vec3 normal) {
        ivec2 halfSize = textureSize(tDiffuse, 0);
        vec2 pixelCenter = vUv * resolution * 0.5;
        ivec2 base = min(ivec2(pixelCenter), halfSize - 1);
        // View-space width of one half-res pixel at this depth.
        float footprint = max(2.0 * abs(worldPos.z) * projectionMatrixInv[1][1] / float(halfSize.y), 1e-6);
        float total = 0.0;
        float blendedAO = 0.0;
        float summary[${pn}] = ${ng(pn)};
        for (int y = -1; y <= 1; y++) {
            for (int x = -1; x <= 1; x++) {
                ivec2 p = clamp(base + ivec2(x, y), ivec2(0), halfSize - 1);
                vec4 sampleInfo = texelFetch(tDiffuse, p, 0);
                vec3 delta = getWorldPos(texelFetch(downsampledDepth, p, 0).x, (vec2(p) + 0.5) / vec2(halfSize))
                    - worldPos;
                float height = dot(delta, normal) / footprint;
                float inPlane = sqrt(max(dot(delta, delta) / (footprint * footprint) - height * height, 0.0));
                vec2 screen = vec2(p) + 0.5 - pixelCenter;
                vec2 normalXY = sampleInfo.gb * 2.0 - 1.0;
                vec3 sampleNormal = vec3(normalXY, sqrt(max(1.0 - dot(normalXY, normalXY), 0.0)));
                float f[${Ri}] = float[${Ri}](
                    sampleInfo.r,
                    sign(height) * log(1.0 + abs(height)),
                    log(1.0 + inPlane),
                    dot(normal, sampleNormal),
                    screen.x,
                    -screen.y
                );
${tg.map(({offset:n,coefficients:e},t)=>`                float token${t} = max(${Da([kr(n),...e.map((i,r)=>Ca(i,`f[${r}]`))])}, 0.0);`).join(`
`)}
                // Logits stay small, so the softmax needs no running maximum; the clamp only
                // guards against overflow.
                float weight = exp(clamp(${Da([kr(pt(Et).logitBias),...yi(pn).map(n=>Ca(pt(Et).logitWeights[n],`token${n}`))])}, -60.0, 60.0));
                total += weight;
                blendedAO += weight * sampleInfo.r;
${yi(pn).map(n=>`                summary[${n}] += weight * token${n};`).join(`
`)}
            }
        }
        float inverseTotal = 1.0 / total;
${yi(lr).map(n=>`        float head${n} = max(${Da([kr(pt(Et).headBias[n]),...yi(pn).map(e=>Ca(pt(Et).headWeights[n*pn+e],`summary[${e}] * inverseTotal`))])}, 0.0);`).join(`
`)}
        return clamp(blendedAO * inverseTotal + ${Da([kr(pt(Et).outputBias),...yi(lr).map(n=>Ca(pt(Et).outputWeights[n],`head${n}`))])}, 0.0, 1.0);
    }
`,rg={uniforms:{sceneDepth:{value:null},resolution:{value:new Re},near:{value:.1},far:{value:1e3},viewMatrixInv:{value:new Ae},projectionMatrixInv:{value:new Ae},projMat:{value:new Ae},logDepth:{value:!1},ortho:{value:!1}},depthWrite:!1,depthTest:!1,vertexShader:`
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
    uniform mat4 projMat;
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
    bool isBackgroundDepth(float depth) {
      #ifdef REVERSEDEPTH
        return depth == 0.0;
      #else
        return depth == 1.0;
      #endif
    }
    // Later passes rebuild each half-res pixel's position at the pixel's center, but the chosen
    // depth belongs to one of its four full-res samples. On sloped surfaces that puts the position
    // in front of or behind the surface, so the depth is moved along the sample's tangent plane to
    // the center.
    float depthAtCenter(float depth, vec3 position, vec3 normal) {
        if (isBackgroundDepth(depth)) {
            return depth;
        }
        // The center's view ray, through the point at the same depth.
        vec3 center = getWorldPos(depth, vUv);
        vec3 origin = ortho ? center : vec3(0.0);
        vec3 direction = ortho ? vec3(0.0, 0.0, -1.0) : center;
        float facing = dot(direction, normal);
        if (abs(facing) < 1e-6 * length(direction)) {
            return depth;
        }
        vec3 onPlane = origin + direction * (dot(position - origin, normal) / facing);
        // Near grazing angles the plane runs almost along the ray; keep the sample there.
        if (distance(onPlane, center) > 4.0 * distance(position, center)) {
            return depth;
        }
        float centerDepth;
        if (logDepth && !ortho) {
            centerDepth = log2(1.0 - onPlane.z) / log2(far + 1.0);
        } else {
            vec4 clip = projMat * vec4(onPlane, 1.0);
            #ifdef REVERSEDEPTH
            centerDepth = clip.z / clip.w;
            #else
            centerDepth = clip.z / clip.w * 0.5 + 0.5;
            #endif
        }
        // Never move a surface onto or past the near and far planes.
        return centerDepth > 0.0 && centerDepth < 1.0 ? centerDepth : depth;
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
        vec3 chosenPos = getWorldPos(samples[chosenIndex], uvSamples[chosenIndex]);
        vec3 chosenNormal = computeNormal(chosenPos, uvSamples[chosenIndex]);
        gl_FragColor = vec4(depthAtCenter(samples[chosenIndex], chosenPos, chosenNormal), 0.0, 0.0, 1.0);
        gNormal = vec4(chosenNormal, 0.0);
    }`},ag="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",sg=Uint8Array.from(atob(ag),n=>n.charCodeAt(0));var og=sg;const lg=parseInt(ja.replace(/\D+/g,"")),cg=lg>=162?class extends Dt{constructor(n=1,e=1,t=1,i={}){super(n,e,{...i,count:t}),this.isWebGLMultipleRenderTargets=!0}}:class extends Dt{constructor(n=1,e=1,t=1,i={}){super(n,e,i),this.isWebGLMultipleRenderTargets=!0;const r=this.texture;this.texture=[];for(let a=0;a<t;a++)this.texture[a]=r.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(n,e,t=1){if(this.width!==n||this.height!==e||this.depth!==t){this.width=n,this.height=e,this.depth=t;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=n,this.texture[i].image.height=e,this.texture[i].image.depth=t;this.dispose()}this.viewport.set(0,0,n,e),this.scissor.set(0,0,n,e)}copy(n){this.dispose(),this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.texture.length=0;for(let e=0,t=n.texture.length;e<t;e++)this.texture[e]=n.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}};function ah(n,e,t){if(e.getQueryParameter(n,e.QUERY_RESULT_AVAILABLE)){const a=e.getQueryParameter(n,e.QUERY_RESULT)/1e6;t.lastTime=t.lastTime===0?a:t.timeRollingAverage*t.lastTime+(1-t.timeRollingAverage)*a}else setTimeout(()=>{ah(n,e,t)},1)}const Lt={Default:1,Log:2,Reverse:3};class ug extends ta{constructor(e,t,i=512,r=512){super(),this.width=Math.floor(i),this.height=Math.floor(r),this.clear=!0,this._neuralReplaced={},this.camera=t,this.scene=e,this.configuration=new Proxy({aoSamples:16,aoRadius:5,aoTones:0,denoiseSamples:8,denoiseRadius:12,distanceFalloff:1,intensity:5,denoiseIterations:2,renderMode:0,biasOffset:0,biasMultiplier:0,color:new ve(0,0,0),gammaCorrection:!0,depthBufferType:Lt.Default,screenSpaceRadius:!1,halfRes:!1,depthAwareUpsampling:!0,autoRenderBeauty:!0,colorMultiply:!0,transparencyAware:!1,stencil:!1,accumulate:!1,neuralDenoise:!1},{set:(a,s,o)=>{if(s==="depthAwareUpsampling")return J2(o),!0;const l=a.neuralDenoise?Z2(s,o):null;if(l)return console.error(l),!0;const u=a[s];if(a[s]=o,o.equals?o.equals(u)||this.firstFrame():u!==o&&this.firstFrame(),s==="aoSamples"&&u!==o&&(this.configureAOPass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),a.neuralDenoise&&this.configureDenoisePass(this.configuration.depthBufferType,this.camera.isOrthographicCamera)),s==="denoiseSamples"&&u!==o&&this.configureDenoisePass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),s==="neuralDenoise"&&u!==o){const c=a.aoSamples;o?this._neuralReplaced=Q2(a):(K2(a,this._neuralReplaced),this._neuralReplaced={}),a.aoSamples!==c&&this.configureAOPass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.configureDenoisePass(this.configuration.depthBufferType,this.camera.isOrthographicCamera)}return s==="halfRes"&&u!==o&&(this.configureAOPass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),a.neuralDenoise&&this.configureDenoisePass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.configureHalfResTargets(),this.configureEffectCompositer(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.setSize(this.width,this.height)),s==="transparencyAware"&&u!==o&&(this.autoDetectTransparency=!1,this.configureTransparencyTarget()),s==="stencil"&&u!==o&&(this.beautyRenderTarget.dispose(),this.beautyRenderTarget=new Dt(this.width,this.height,{minFilter:Mt,magFilter:lt,type:dn,format:bt,stencilBuffer:o}),this.beautyRenderTarget.depthTexture=new Gr(this.width,this.height,o?Di:Dn),this.beautyRenderTarget.depthTexture.format=o?Pi:li),!0}}),this.depthMipsSupported=!0,this.depthMipAtlas=new k2,this.samples=[],this.samplesDenoise=[],this.autoDetectTransparency=!0,this.frame=0,this.lastViewMatrix=new Ae,this.lastProjectionMatrix=new Ae,this.beautyRenderTarget=new Dt(this.width,this.height,{minFilter:Mt,magFilter:lt,type:dn,format:bt,stencilBuffer:!1}),this.beautyRenderTarget.depthTexture=new Gr(this.width,this.height,Dn),this.beautyRenderTarget.depthTexture.format=li,this.configureEffectCompositer(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.configureSampleDependentPasses(),this.configureHalfResTargets(),this.detectTransparency(),this.configureTransparencyTarget(),this.writeTargetInternal=new Dt(this.width,this.height,{minFilter:Mt,magFilter:Mt,depthBuffer:!1,format:bt}),this.readTargetInternal=new Dt(this.width,this.height,{minFilter:Mt,magFilter:Mt,depthBuffer:!1,format:bt}),this.accumulationRenderTarget=new Dt(this.width,this.height,{minFilter:Mt,magFilter:Mt,depthBuffer:!1,format:bt,type:dn,stencilBuffer:!1,depthBuffer:!1,alpha:!0}),this.bluenoise=new Bu(og,128,128),this.accumulationQuad=new xi(new ft({uniforms:{frame:{value:0},tDiffuse:{value:null}},transparent:!0,opacity:1,vertexShader:`
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
                `})),this.bluenoise.colorSpace=Wn,this.bluenoise.wrapS=Ci,this.bluenoise.wrapT=Ci,this.bluenoise.minFilter=lt,this.bluenoise.magFilter=lt,this.bluenoise.needsUpdate=!0,this.lastTime=0,this.timeRollingAverage=.99,this._r=new Re,this._c=new ve}configureDepthDownsample(){var t;const e={...rg};this.configuration.depthBufferType===Lt.Reverse&&(e.fragmentShader=`#define REVERSEDEPTH
`+e.fragmentShader),(t=this.depthDownsampleQuad)==null||t.dispose(),this.depthDownsampleQuad=new xi(new ft(e))}configureHalfResTargets(){this.firstFrame(),this.configuration.halfRes?(this.depthDownsampleTarget=new cg(Math.floor(this.width/2),Math.floor(this.height/2),2),this.depthDownsampleTarget.textures[0].format=Qr,this.depthDownsampleTarget.textures[0].type=mn,this.depthDownsampleTarget.textures[0].minFilter=lt,this.depthDownsampleTarget.textures[0].magFilter=lt,this.depthDownsampleTarget.textures[0].depthBuffer=!1,this.depthDownsampleTarget.textures[1].format=bt,this.depthDownsampleTarget.textures[1].type=dn,this.depthDownsampleTarget.textures[1].minFilter=lt,this.depthDownsampleTarget.textures[1].magFilter=lt,this.depthDownsampleTarget.textures[1].depthBuffer=!1,this.configureDepthDownsample()):(this.depthDownsampleTarget&&(this.depthDownsampleTarget.dispose(),this.depthDownsampleTarget=null),this.depthDownsampleQuad&&(this.depthDownsampleQuad.dispose(),this.depthDownsampleQuad=null))}detectTransparency(){if(this.autoDetectTransparency){let e=!1;this.scene.traverse(t=>{t.material&&t.material.transparent&&(e=!0)}),this.configuration.transparencyAware=e}}configureTransparencyTarget(){this.configuration.transparencyAware?(this.transparencyRenderTargetDWFalse=new Dt(this.width,this.height,{minFilter:Mt,magFilter:lt,type:dn,format:bt}),this.transparencyRenderTargetDWTrue=new Dt(this.width,this.height,{minFilter:Mt,magFilter:lt,type:dn,format:bt}),this.transparencyRenderTargetDWTrue.depthTexture=new Gr(this.width,this.height,Dn),this.depthCopyPass=new xi(new ft({uniforms:{depthTexture:{value:this.depthTexture},reverseDepthBuffer:{value:this.configuration.depthBufferType===Lt.Reverse}},vertexShader:`
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
                        `}))):(this.transparencyRenderTargetDWFalse&&(this.transparencyRenderTargetDWFalse.dispose(),this.transparencyRenderTargetDWFalse=null),this.transparencyRenderTargetDWTrue&&(this.transparencyRenderTargetDWTrue.dispose(),this.transparencyRenderTargetDWTrue=null),this.depthCopyPass&&(this.depthCopyPass.dispose(),this.depthCopyPass=null))}renderTransparency(e){const t=this.scene.background,i=e.getClearColor(new ve),r=e.getClearAlpha(),a=new Map,s=e.autoClearDepth;this.scene.traverse(o=>{a.set(o,o.visible)}),this.scene.background=null,e.autoClearDepth=!1,e.setClearColor(new ve(0,0,0),0),this.depthCopyPass.material.uniforms.depthTexture.value=this.beautyRenderTarget.depthTexture,this.depthCopyPass.material.uniforms.reverseDepthBuffer.value=this.configuration.depthBufferType===Lt.Reverse,e.setRenderTarget(this.transparencyRenderTargetDWFalse),this.scene.traverse(o=>{o.material&&(o.visible=a.get(o)&&(o.material.transparent&&!o.material.depthWrite&&!o.userData.treatAsOpaque||!!o.userData.cannotReceiveAO))}),e.clear(!0,!0,!0),this.depthCopyPass.render(e),e.render(this.scene,this.camera),e.setRenderTarget(this.transparencyRenderTargetDWTrue),this.scene.traverse(o=>{o.material&&(o.visible=a.get(o)&&o.material.transparent&&o.material.depthWrite&&!o.userData.treatAsOpaque)}),e.clear(!0,!0,!0),this.depthCopyPass.render(e),e.render(this.scene,this.camera),this.scene.traverse(o=>{o.visible=a.get(o)}),e.setClearColor(i,r),this.scene.background=t,e.autoClearDepth=s}configureSampleDependentPasses(){this.firstFrame(),this.configureAOPass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.configureDenoisePass(this.configuration.depthBufferType,this.camera.isOrthographicCamera)}configureAOPass(e=Lt.Default,t=!1){this.firstFrame(),this.samples=this.generateHemisphereSamples(this.configuration.aoSamples);const i={...H2};i.fragmentShader=i.fragmentShader.replace("16",this.configuration.aoSamples).replace("16.0",this.configuration.aoSamples+".0"),e===Lt.Log?i.fragmentShader=`#define LOGDEPTH
`+i.fragmentShader:e===Lt.Reverse&&(i.fragmentShader=`#define REVERSEDEPTH
`+i.fragmentShader),t&&(i.fragmentShader=`#define ORTHO
`+i.fragmentShader),this.configuration.halfRes&&(i.fragmentShader=`#define HALFRES
`+i.fragmentShader),this.depthMipsSupported&&(i.fragmentShader=`#define DEPTH_MIP
`+i.fragmentShader),this.effectShaderQuad?(this.effectShaderQuad.material.dispose(),this.effectShaderQuad.material=new ft(i)):this.effectShaderQuad=new xi(new ft(i))}configureDenoisePass(e=Lt.Default,t=!1){this.firstFrame(),this.samplesDenoise=this.generateDenoiseSamples(this.configuration.denoiseSamples,11);const i={...G2};i.fragmentShader=i.fragmentShader.replace("__N8AO_DENOISE_SAMPLES__",this.configuration.denoiseSamples);const r=this.configuration.neuralDenoise?q2(this.configuration.aoSamples,this.configuration.denoiseSamples,this.configuration.halfRes):null;e===Lt.Log?i.fragmentShader=`#define LOGDEPTH
`+i.fragmentShader:e===Lt.Reverse&&(i.fragmentShader=`#define REVERSEDEPTH
`+i.fragmentShader),t&&(i.fragmentShader=`#define ORTHO
`+i.fragmentShader),this.standardDenoiseMaterial&&this.standardDenoiseMaterial.dispose(),this.neuralDenoiseMaterial&&this.neuralDenoiseMaterial.dispose(),this.standardDenoiseMaterial=new ft({...i,fragmentShader:i.fragmentShader.replace("__N8AO_NEURAL_DENOISE__","")}),this.neuralDenoiseMaterial=r?new ft({...i,glslVersion:Fo,fragmentShader:`#define NEURAL_DENOISE
layout(location = 0) out highp vec4 neuralFragColor;
#define gl_FragColor neuralFragColor
`+i.fragmentShader.replace("__N8AO_NEURAL_DENOISE__",r)}):null,this.poissonBlurQuad?this.poissonBlurQuad.material=this.standardDenoiseMaterial:this.poissonBlurQuad=new xi(this.standardDenoiseMaterial)}shouldUseNeuralDenoise(){return!!this.configuration.neuralDenoise&&this.neuralDenoiseMaterial!==null}get effectiveConfiguration(){return $2(this)}configureEffectCompositer(e=Lt.Default,t=!1){var r,a;this.firstFrame();const i={...V2};e===Lt.Log?i.fragmentShader=`#define LOGDEPTH
`+i.fragmentShader:e===Lt.Reverse&&(i.fragmentShader=`#define REVERSEDEPTH
`+i.fragmentShader),t&&(i.fragmentShader=`#define ORTHO
`+i.fragmentShader),this.configuration.halfRes&&(i.fragmentShader=`#define HALFRES
`+i.fragmentShader),(r=this.standardCompositerMaterial)==null||r.dispose(),(a=this.neuralCompositerMaterial)==null||a.dispose(),this.standardCompositerMaterial=new ft({...i,fragmentShader:i.fragmentShader.replace("__N8AO_NEURAL_UPSAMPLE__","")}),this.neuralCompositerMaterial=this.configuration.halfRes?new ft({...i,fragmentShader:`#define NEURAL_UPSAMPLE
`+i.fragmentShader.replace("__N8AO_NEURAL_UPSAMPLE__",ig)}):null,this.effectCompositerQuad?this.effectCompositerQuad.material=this.standardCompositerMaterial:this.effectCompositerQuad=new xi(this.standardCompositerMaterial)}generateHemisphereSamples(e){const t=[];for(let i=0;i<e;i++){const r=2.399963*i;let a=Math.sqrt(i+.5)/Math.sqrt(e);const s=a*Math.cos(r),o=a*Math.sin(r),l=Math.sqrt(1-(s*s+o*o));t.push(new D(s,o,l))}return t}generateDenoiseSamples(e,t){const i=2*Math.PI*t/e,r=1/e,a=r,s=[];let o=r,l=0;for(let u=0;u<e;u++)s.push(new Re(Math.cos(l),Math.sin(l)).multiplyScalar(Math.pow(o,.75))),o+=a,l+=i;return s}setSize(e,t){this.firstFrame(),this.width=Math.floor(e),this.height=Math.floor(t);const i=this.configuration.halfRes?Math.floor(this.width/2):this.width,r=this.configuration.halfRes?Math.floor(this.height/2):this.height;this.beautyRenderTarget.setSize(this.width,this.height),this.writeTargetInternal.setSize(i,r),this.readTargetInternal.setSize(i,r),this.accumulationRenderTarget.setSize(i,r),this.configuration.halfRes&&this.depthDownsampleTarget.setSize(i,r),this.configuration.transparencyAware&&(this.transparencyRenderTargetDWFalse.setSize(this.width,this.height),this.transparencyRenderTargetDWTrue.setSize(this.width,this.height))}firstFrame(){this.needsFrame=!0}render(e,t,i,r,a){const o=e.capabilities.reversedDepthBuffer===!0||e.capabilities.reverseDepthBuffer===!0?Lt.Reverse:e.capabilities.logarithmicDepthBuffer?Lt.Log:Lt.Default;this.configuration.depthBufferType!==o&&(this.configuration.depthBufferType=o,this.configureAOPass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.configureDenoisePass(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.configureEffectCompositer(this.configuration.depthBufferType,this.camera.isOrthographicCamera),this.configuration.halfRes&&this.configureDepthDownsample());const l=e.extensions.has("EXT_color_buffer_float");this.depthMipsSupported!==l&&(this.depthMipsSupported=l,this.configureAOPass(this.configuration.depthBufferType,this.camera.isOrthographicCamera)),this.detectTransparency(),this.camera.updateMatrixWorld(),this.lastViewMatrix.equals(this.camera.matrixWorldInverse)&&this.lastProjectionMatrix.equals(this.camera.projectionMatrix)&&this.configuration.accumulate&&!this.needsFrame?this.frame++:(this.configuration.accumulate&&(e.setRenderTarget(this.accumulationRenderTarget),e.clear(!0,!0,!0)),this.frame=0,this.needsFrame=!1),this.lastViewMatrix.copy(this.camera.matrixWorldInverse),this.lastProjectionMatrix.copy(this.camera.projectionMatrix);let u,c,f;this.debugMode&&(u=e.getContext(),c=u.getExtension("EXT_disjoint_timer_query_webgl2"),c===null&&(console.error("EXT_disjoint_timer_query_webgl2 not available, disabling debug mode."),this.debugMode=!1)),this.configuration.autoRenderBeauty&&(e.setRenderTarget(this.beautyRenderTarget),e.render(this.scene,this.camera),this.configuration.transparencyAware&&this.renderTransparency(e)),this.debugMode&&(f=u.createQuery(),u.beginQuery(c.TIME_ELAPSED_EXT,f));const d=e.xr.enabled;e.xr.enabled=!1,this._r.set(this.width,this.height);let p=this.configuration.aoRadius;if(this.configuration.halfRes&&this.configuration.screenSpaceRadius&&(p*=.5),this.frame<1024/this.configuration.aoSamples){if(this.configuration.halfRes&&(e.setRenderTarget(this.depthDownsampleTarget),this.depthDownsampleQuad.material.uniforms.sceneDepth.value=this.beautyRenderTarget.depthTexture,this.depthDownsampleQuad.material.uniforms.resolution.value=this._r,this.depthDownsampleQuad.material.uniforms.near.value=this.camera.near,this.depthDownsampleQuad.material.uniforms.far.value=this.camera.far,this.depthDownsampleQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.depthDownsampleQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.depthDownsampleQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.depthDownsampleQuad.material.uniforms.logDepth.value=this.configuration.depthBufferType===Lt.Log,this.depthDownsampleQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.depthDownsampleQuad.render(e)),this.depthMipsSupported){const v=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,m=this.configuration.halfRes?Math.floor(this._r.x/2):this._r.x,h=this.configuration.halfRes?Math.floor(this._r.y/2):this._r.y;this.depthMipAtlas.update(e,v,m,h),this.effectShaderQuad.material.uniforms.depthMipAtlas.value=this.depthMipAtlas.target.texture,this.effectShaderQuad.material.uniforms.depthMipLevels.value=this.depthMipAtlas.levels}this.effectShaderQuad.material.uniforms.sceneDiffuse.value=this.beautyRenderTarget.texture,this.effectShaderQuad.material.uniforms.sceneDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.effectShaderQuad.material.uniforms.sceneNormal.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[1]:null,this.effectShaderQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.effectShaderQuad.material.uniforms.viewMat.value=this.camera.matrixWorldInverse,this.effectShaderQuad.material.uniforms.projViewMat.value=this.camera.projectionMatrix.clone().multiply(this.camera.matrixWorldInverse.clone()),this.effectShaderQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.effectShaderQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.effectShaderQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new D),this.effectShaderQuad.material.uniforms.biasAdjustment.value=new Re(this.configuration.biasOffset,this.configuration.biasMultiplier),this.effectShaderQuad.material.uniforms.resolution.value=this.configuration.halfRes?this._r.clone().multiplyScalar(.5).floor():this._r,this.effectShaderQuad.material.uniforms.time.value=performance.now()/1e3,this.effectShaderQuad.material.uniforms.samples.value=this.samples,this.effectShaderQuad.material.uniforms.bluenoise.value=this.bluenoise,this.effectShaderQuad.material.uniforms.radius.value=p,this.effectShaderQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.effectShaderQuad.material.uniforms.near.value=this.camera.near,this.effectShaderQuad.material.uniforms.far.value=this.camera.far,this.effectShaderQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.effectShaderQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,this.effectShaderQuad.material.uniforms.frame.value=this.frame,e.setRenderTarget(this.writeTargetInternal),this.effectShaderQuad.render(e);const g=this.shouldUseNeuralDenoise();for(let v=0;v<this.configuration.denoiseIterations;v++)[this.writeTargetInternal,this.readTargetInternal]=[this.readTargetInternal,this.writeTargetInternal],this.poissonBlurQuad.material=g&&v===1?this.neuralDenoiseMaterial:this.standardDenoiseMaterial,this.poissonBlurQuad.material.uniforms.tDiffuse.value=this.readTargetInternal.texture,this.poissonBlurQuad.material.uniforms.sceneDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.poissonBlurQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.poissonBlurQuad.material.uniforms.viewMat.value=this.camera.matrixWorldInverse,this.poissonBlurQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.poissonBlurQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.poissonBlurQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new D),this.poissonBlurQuad.material.uniforms.resolution.value=this.configuration.halfRes?this._r.clone().multiplyScalar(.5).floor():this._r,this.poissonBlurQuad.material.uniforms.time.value=performance.now()/1e3,this.poissonBlurQuad.material.uniforms.blueNoise.value=this.bluenoise,this.poissonBlurQuad.material.uniforms.radius.value=this.configuration.denoiseRadius*(this.configuration.halfRes&&!g?.5:1),this.poissonBlurQuad.material.uniforms.worldRadius.value=p,this.poissonBlurQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.poissonBlurQuad.material.uniforms.index.value=v,this.poissonBlurQuad.material.uniforms.poissonDisk.value=this.samplesDenoise,this.poissonBlurQuad.material.uniforms.near.value=this.camera.near,this.poissonBlurQuad.material.uniforms.far.value=this.camera.far,this.poissonBlurQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,e.setRenderTarget(this.writeTargetInternal),this.poissonBlurQuad.render(e);if(this.configuration.accumulate){e.setRenderTarget(this.accumulationRenderTarget);const v=e.autoClear;e.autoClear=!1,this.accumulationQuad.material.uniforms.tDiffuse.value=this.writeTargetInternal.texture,this.accumulationQuad.material.uniforms.frame.value=this.frame,this.accumulationQuad.render(e),e.autoClear=v}}this.effectCompositerQuad.material=this.neuralCompositerMaterial&&this.shouldUseNeuralDenoise()?this.neuralCompositerMaterial:this.standardCompositerMaterial,this.configuration.transparencyAware&&(this.effectCompositerQuad.material.uniforms.transparencyDWFalse.value=this.transparencyRenderTargetDWFalse.texture,this.effectCompositerQuad.material.uniforms.transparencyDWTrue.value=this.transparencyRenderTargetDWTrue.texture,this.effectCompositerQuad.material.uniforms.transparencyDWTrueDepth.value=this.transparencyRenderTargetDWTrue.depthTexture,this.effectCompositerQuad.material.uniforms.transparencyAware.value=!0),this.effectCompositerQuad.material.uniforms.sceneDiffuse.value=this.beautyRenderTarget.texture,this.effectCompositerQuad.material.uniforms.sceneDepth.value=this.beautyRenderTarget.depthTexture,this.effectCompositerQuad.material.uniforms.aoTones.value=this.configuration.aoTones,this.effectCompositerQuad.material.uniforms.near.value=this.camera.near,this.effectCompositerQuad.material.uniforms.far.value=this.camera.far,this.effectCompositerQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.effectCompositerQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.effectCompositerQuad.material.uniforms.downsampledDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.textures[0]:this.beautyRenderTarget.depthTexture,this.effectCompositerQuad.material.uniforms.resolution.value=this._r,this.effectCompositerQuad.material.uniforms.blueNoise.value=this.bluenoise,this.effectCompositerQuad.material.uniforms.intensity.value=this.configuration.intensity,this.effectCompositerQuad.material.uniforms.renderMode.value=this.configuration.renderMode,this.effectCompositerQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,this.effectCompositerQuad.material.uniforms.radius.value=p,this.effectCompositerQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.effectCompositerQuad.material.uniforms.gammaCorrection.value=this.configuration.gammaCorrection,this.effectCompositerQuad.material.uniforms.tDiffuse.value=this.configuration.accumulate?this.accumulationRenderTarget.texture:this.writeTargetInternal.texture,this.effectCompositerQuad.material.uniforms.color.value=this._c.copy(this.configuration.color).convertSRGBToLinear(),this.effectCompositerQuad.material.uniforms.colorMultiply.value=this.configuration.colorMultiply,this.effectCompositerQuad.material.uniforms.fog.value=!!this.scene.fog,this.scene.fog&&(this.scene.fog.isFog?(this.effectCompositerQuad.material.uniforms.fogExp.value=!1,this.effectCompositerQuad.material.uniforms.fogNear.value=this.scene.fog.near,this.effectCompositerQuad.material.uniforms.fogFar.value=this.scene.fog.far):this.scene.fog.isFogExp2?(this.effectCompositerQuad.material.uniforms.fogExp.value=!0,this.effectCompositerQuad.material.uniforms.fogDensity.value=this.scene.fog.density):console.error(`Unsupported fog type ${this.scene.fog.constructor.name} in SSAOPass.`)),e.setRenderTarget(this.renderToScreen?null:t),this.effectCompositerQuad.render(e),this.debugMode&&(u.endQuery(c.TIME_ELAPSED_EXT),ah(f,u,this)),e.xr.enabled=d}enableDebugMode(){this.debugMode=!0}disableDebugMode(){this.debugMode=!1}setDisplayMode(e){this.configuration.renderMode=["Combined","AO","No AO","Split","Split AO"].indexOf(e)}setQualityMode(e){e==="Performance"?(this.configuration.neuralDenoise=!1,this.configuration.aoSamples=8,this.configuration.denoiseSamples=4,this.configuration.denoiseRadius=12,this.configuration.denoiseIterations=2):e==="Low"?(this.configuration.neuralDenoise=!1,this.configuration.aoSamples=16,this.configuration.denoiseSamples=4,this.configuration.denoiseRadius=12,this.configuration.denoiseIterations=2):e==="Medium"?(this.configuration.neuralDenoise=!1,this.configuration.aoSamples=16,this.configuration.denoiseSamples=8,this.configuration.denoiseRadius=12,this.configuration.denoiseIterations=2):e==="High"?(this.configuration.neuralDenoise=!1,this.configuration.aoSamples=64,this.configuration.denoiseSamples=8,this.configuration.denoiseRadius=6,this.configuration.denoiseIterations=2):e==="Ultra"?(this.configuration.neuralDenoise=!1,this.configuration.aoSamples=64,this.configuration.denoiseSamples=16,this.configuration.denoiseRadius=6,this.configuration.denoiseIterations=2):["Neural-Performance","Neural-Low","Neural-Medium","Neural-High"].includes(e)&&(this.configuration.neuralDenoise=!0,[this.configuration.aoSamples,this.configuration.denoiseSamples]={"Neural-Performance":[8,4],"Neural-Low":[16,4],"Neural-Medium":[16,8],"Neural-High":[16,16]}[e])}}const Fr=.28,Qc=Math.PI/180,Ys=(n,e)=>(e-n+Math.PI*3)%(Math.PI*2)-Math.PI;class hg{constructor(e,t,i){this.cam=e,this.dom=t,this.cam.rotation.order="YXZ",this.rects=[...i,...Wu],this.circles=Xu,this.x=an.llegada[0],this.z=an.llegada[1],this.yaw=20*Qc,this.pitch=0,this.stick={x:0,y:0},this.keys=new Set,this.path=null,this.finalYaw=null,this.onArrive=null,this.onTap=null,this.onUserMove=null,this.walking=!1,this.bob=0,this.graph=new Map;for(const[r,a]of qu)this.graph.has(r)||this.graph.set(r,[]),this.graph.has(a)||this.graph.set(a,[]),this.graph.get(r).push(a),this.graph.get(a).push(r);this._bind()}blocked(e,t){for(const i of this.rects)if(e>i.x0-Fr&&e<i.x1+Fr&&t>i.z0-Fr&&t<i.z1+Fr)return!0;for(const i of this.circles)if(Math.hypot(e-i.x,t-i.z)<i.r+Fr)return!0;return!1}clear(e,t,i,r){const a=Math.ceil(Math.hypot(i-e,r-t)/.12);for(let s=0;s<=a;s++){const o=s/a;if(this.blocked(e+(i-e)*o,t+(r-t)*o))return!1}return!0}tryMove(e,t){if(!this.blocked(this.x+e,this.z+t))return this.x+=e,this.z+=t,!0;let i=!1;return this.blocked(this.x+e,this.z)||(this.x+=e,i=!0),this.blocked(this.x,this.z+t)||(this.z+=t,i=!0),i}route(e){let t=null,i=1e9;for(const[l,[u,c]]of Object.entries(an)){const f=Math.hypot(u-this.x,c-this.z);f<i&&this.clear(this.x,this.z,u,c)&&(i=f,t=l)}if(!t)for(const[l,[u,c]]of Object.entries(an)){const f=Math.hypot(u-this.x,c-this.z);f<i&&(i=f,t=l)}const r={[t]:0},a={},s=new Set(Object.keys(an));for(;s.size;){let l=null;for(const u of s)r[u]!==void 0&&(l===null||r[u]<r[l])&&(l=u);if(l===null)break;s.delete(l);for(const u of this.graph.get(l)||[]){const c=Math.hypot(an[l][0]-an[u][0],an[l][1]-an[u][1]);(r[u]===void 0||r[l]+c<r[u])&&(r[u]=r[l]+c,a[u]=l)}}const o=[];for(let l=e;l&&(o.unshift(l),l!==t);l=a[l]);return o.map(l=>an[l])}goTo(e,{instant:t=!1}={}){const i=is.find(s=>s.id===e);if(!i)return;if(this.finalYaw=i.yaw*Qc,t){[this.x,this.z]=an[i.node],this.path=null,this.yaw=this.finalYaw,this.pitch=0,this._apply(0);return}const r=this.route(i.node);this.path=r.map(([s,o])=>({x:s,z:o})),this.path.unshift({x:this.x,z:this.z}),this.pathI=1;let a=0;for(let s=1;s<this.path.length;s++)a+=Math.hypot(this.path[s].x-this.path[s-1].x,this.path[s].z-this.path[s-1].z);this.speed=Math.min(10,Math.max(2.6,a/5)),this.pendingArrive=e}cancelPath(){this.path=null,this.pendingArrive=null,this.finalYaw=null}_bind(){const e=this.dom;let t=null,i=null;e.addEventListener("pointerdown",a=>{t||(t={id:a.pointerId,x:a.clientX,y:a.clientY,t:performance.now(),moved:0},i={x:a.clientX,y:a.clientY},e.setPointerCapture(a.pointerId))}),e.addEventListener("pointermove",a=>{if(!t||a.pointerId!==t.id)return;const s=a.clientX-i.x,o=a.clientY-i.y;i={x:a.clientX,y:a.clientY},t.moved+=Math.abs(s)+Math.abs(o),a.pointerType==="mouse"?(this.yaw+=s*.0042,this.pitch=Math.max(-1.2,Math.min(1.2,this.pitch-o*.0042))):(this.yaw-=s*.0055,this.pitch=Math.max(-1.2,Math.min(1.2,this.pitch+o*.0055))),this.path&&(this.finalYaw=null)});const r=a=>{!t||a.pointerId!==t.id||(t.moved<10&&performance.now()-t.t<400&&this.onTap&&this.onTap(a.clientX,a.clientY),t=null)};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",()=>{t=null}),window.addEventListener("keydown",a=>{a.target&&/INPUT|SELECT|TEXTAREA/.test(a.target.tagName)||(this.keys.add(a.key.toLowerCase()),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(a.key.toLowerCase())&&a.preventDefault())}),window.addEventListener("keyup",a=>this.keys.delete(a.key.toLowerCase())),window.addEventListener("blur",()=>this.keys.clear())}update(e){e=Math.min(e,.05);let t=-this.stick.y,i=this.stick.x;const r=this.keys;(r.has("w")||r.has("arrowup"))&&(t+=1),(r.has("s")||r.has("arrowdown"))&&(t-=1),r.has("d")&&(i+=1),r.has("a")&&(i-=1),(r.has("arrowleft")||r.has("q"))&&(this.yaw-=1.6*e),(r.has("arrowright")||r.has("e"))&&(this.yaw+=1.6*e);const a=Math.min(1,Math.hypot(t,i));if(this.walking=!1,a>.08){this.path&&(this.cancelPath(),this.onUserMove&&this.onUserMove());const s=(r.has("shift")?3.2:1.8)*a,o=Math.sin(this.yaw),l=Math.cos(this.yaw),u=(o*t+l*i)/Math.max(1,Math.hypot(t,i)),c=(-l*t+o*i)/Math.max(1,Math.hypot(t,i));this.tryMove(u*s*e,c*s*e),this.walking=!0}else if(this.path){const s=this.path[this.pathI],o=s.x-this.x,l=s.z-this.z,u=Math.hypot(o,l),c=(this.speed||2.6)*e;if(u<=c)this.x=s.x,this.z=s.z,this.pathI++,this.pathI>=this.path.length&&(this.path=null,this.onArrive&&this.onArrive(this.pendingArrive));else if(this.x+=o/u*c,this.z+=l/u*c,this.finalYaw!==null){const f=Math.atan2(o,-l);this.yaw+=Ys(this.yaw,f)*Math.min(1,e*3)}this.walking=!0}else if(this.finalYaw!==null){const s=Ys(this.yaw,this.finalYaw);this.yaw+=s*Math.min(1,e*4),Math.abs(s)<.01&&(this.finalYaw=null),this.pitch*=1-Math.min(1,e*4)}if(this.path&&this.finalYaw!==null&&this.pathI>=this.path.length-1){const s=Ys(this.yaw,this.finalYaw);this.yaw+=s*Math.min(1,e*2.5)}this.bob=this.walking?this.bob+e*9:this.bob*.9,this._apply(this.walking?Math.sin(this.bob)*.025:0)}_apply(e){this.cam.position.set(this.x,(this.eyeY??Vu)+e,this.z),this.cam.rotation.set(this.pitch,-this.yaw,0,"YXZ")}}const sh={es:"Español",en:"English",pt:"Português"},fg={title:"Refugio Casablanca",tagline:"Recorre la cabaña como si ya estuvieras ahí",welcomeSub:"Cabaña con tinaja y piscina en el valle de Casablanca, Chile",start:"Comenzar recorrido",chooseLang:"Idioma",approx:"Recorrido 3D aproximado, hecho con las fotos reales del alojamiento.",prev:"Anterior",next:"Siguiente",spaces:"Todos los espacios",tabSpaces:"Espacios",tabPhotos:"Fotos reales",tabWalk:"Caminar",tabAuto:"Automático",photos:"Fotos reales",walk:"Caminar libremente",walkBack:"Volver al recorrido",auto:"Recorrido automático",stopAuto:"Detener",info:"Información",day:"Día",sunset:"Atardecer",close:"Cerrar",hintLook:"Desliza el dedo para mirar alrededor",hintWalk:"Usa el círculo para caminar y desliza para mirar",hintKeys:"Flechas o WASD para caminar · arrastra con el mouse para mirar",stepOf:"{n} de {total}",photoOf:"Foto real · {name} · {n}/{total}",loading:"Preparando la cabaña…",tourEnd:"¡Eso es todo! ¿Te gustó?",bookCta:"Reservar en Airbnb",restart:"Volver a empezar",howTo:"Cómo llegar",infoTitle:"Sobre la cabaña",infoFacts:["Cabaña de 1 piso, con acceso exclusivo","4 huéspedes · 2 dormitorios · 2 camas de 2 plazas · 1 baño","Lo Orozco, Casablanca, Región de Valparaíso, Chile","Se llega solo en automóvil (camino de tierra)","Estacionamiento gratuito y privado","Se admiten mascotas"],infoHas:"Incluye",infoList:["Tinaja de madera","Terraza con comedor al aire libre","Parrilla a carbón","Piscina y jardín","Cocina equipada: horno, microondas, jarra eléctrica","Agua caliente y ropa de cama","Televisión"],disclaimer:"Este recorrido es una recreación aproximada basada en fotos reales. Las medidas, la ubicación exacta de los muebles y algunos detalles pueden variar levemente. Revisa siempre la ficha oficial en Airbnb.",guide:{link:"¿Cómo se usa?",help:"Ayuda",skip:"Saltar",next:"Siguiente",back:"Atrás",done:"Entendido, comenzar",close:"Cerrar guía",stepOf:"Paso {n} de {total}",forTouch:"En celular o tablet",forDesk:"En computador",s1:{t:"Bienvenido al recorrido",b:"Aquí puedes conocer la cabaña por dentro y por fuera, como si estuvieras ahí. Te explicamos en pocos pasos cómo usarlo. No necesitas saber de tecnología."},s2:{t:"Mirar a tu alrededor",b:"Puedes girar la vista hacia los lados, hacia arriba y hacia abajo.",bt:"Pon un dedo sobre la imagen y arrástrala, como si movieras una foto.",bd:"Mantén apretado el botón izquierdo del mouse sobre la imagen y mueve el mouse hacia donde quieras mirar: la vista lo sigue."},s3:{t:"Ir de un lugar a otro",b:"Toca el botón naranja «Siguiente» para pasar al próximo lugar. La cámara camina sola hasta allá. Con «Anterior» vuelves al lugar de antes. En cada lugar verás su nombre y una breve descripción.",bd:"En el computador, haz clic en los botones."},s4:{t:"Los círculos blancos",b:"En el suelo verás círculos blancos. Marcan lugares que puedes visitar. Toca uno (o haz clic) y la cámara te lleva hasta ahí."},s5:{t:"Los botones de abajo",b:"Abajo hay cuatro botones. Puedes usarlos cuando quieras.",items:[{k:"spaces",t:"Espacios",d:"Muestra la lista de todos los lugares. Toca uno para ir directo."},{k:"photos",t:"Fotos reales",d:"Muestra fotos verdaderas del lugar donde estás, para comparar."},{k:"walk",t:"Caminar",d:"Te deja moverte tú, con libertad, por la casa y el terreno."},{k:"auto",t:"Automático",d:"Recorre toda la cabaña solo, sin que toques nada. Vuelve a tocarlo para detenerlo."}]},s6:{t:"Caminar por tu cuenta",b:"Toca «Caminar» para moverte libremente. Para volver al recorrido, toca «Volver al recorrido».",bt:"Aparece un círculo abajo a la izquierda. Pon el dedo sobre él y arrástralo hacia donde quieras avanzar. Para mirar alrededor, desliza otro dedo sobre la imagen.",bd:"Usa las teclas W (adelante), S (atrás), A (izquierda) y D (derecha). También sirven las flechas del teclado. Con Q y E giras, y con Shift vas más rápido. Para mirar, mantén apretado el clic izquierdo y mueve el mouse hacia donde quieras mirar."},s7:{t:"Los botones de arriba",b:"Arriba a la derecha hay pequeños botones:",items:[{k:"time",t:"Sol",d:"Cambia entre luz de día y luz de atardecer."},{k:"lang",t:"ES / EN / PT",d:"Cambia el idioma."},{k:"help",t:"?",d:"Vuelve a mostrar esta guía."},{k:"info",t:"i",d:"Datos de la cabaña, cómo llegar y el botón para reservar en Airbnb."}]}},spot:{llegada:"Llegada",estac:"Estacionamiento",terraza:"Terraza",parrilla:"Parrilla",tinaja:"Tinaja",comedor:"Living, comedor y cocina",bano:"Baño",hab1:"Dormitorio 1",hab2:"Dormitorio 2",piscina:"Piscina y jardín"},desc:{llegada:"Llegas en auto por un camino de tierra, entre cerros y árboles del valle de Casablanca.",estac:"Estacionamiento gratuito y privado, a pocos pasos de la cabaña.",terraza:"Amplia terraza con comedor al aire libre bajo mallas de sombra. Mira hacia el poniente: los atardeceres son un espectáculo.",parrilla:"Parrilla a carbón para hacer asados en la terraza.",tinaja:"Tinaja de madera con escalera, ideal para relajarse mirando el cielo.",comedor:"Un solo ambiente cálido: futón para descansar, mesa para 4 personas y cocina con refrigerador, horno y microondas.",bano:"Baño moderno con ducha de lluvia, mampara de vidrio y agua caliente.",hab1:"Cama de 2 plazas, clóset y un gran ventanal que se abre a la terraza y al valle.",hab2:"Cama de 2 plazas, clóset y ventana hacia el cerro. Silencioso y luminoso.",piscina:"Jardín con pasto sintético, zona de juegos y piscina de unos 5 m de diámetro."},photoSet:{comedor:"Comedor",bano:"Baño",hab1:"Dormitorio 1",hab2:"Dormitorio 2",terraza:"Terraza y exterior",piscina:"Piscina y jardín"}},dg={title:"Refugio Casablanca",tagline:"Walk through the cabin as if you were already there",welcomeSub:"Cabin with hot tub and pool in the Casablanca Valley, Chile",start:"Start the tour",chooseLang:"Language",approx:"Approximate 3D tour, built from the real photos of the property.",prev:"Back",next:"Next",spaces:"All spaces",tabSpaces:"Spaces",tabPhotos:"Real photos",tabWalk:"Walk",tabAuto:"Auto tour",photos:"Real photos",walk:"Walk freely",walkBack:"Back to the tour",auto:"Automatic tour",stopAuto:"Stop",info:"Information",day:"Day",sunset:"Sunset",close:"Close",hintLook:"Swipe to look around",hintWalk:"Use the circle to walk and swipe to look around",hintKeys:"Arrow keys or WASD to walk · drag with the mouse to look",stepOf:"{n} of {total}",photoOf:"Real photo · {name} · {n}/{total}",loading:"Getting the cabin ready…",tourEnd:"That's everything! Did you like it?",bookCta:"Book on Airbnb",restart:"Start again",howTo:"Directions",infoTitle:"About the cabin",infoFacts:["1-story cabin, private access","4 guests · 2 bedrooms · 2 double beds · 1 bathroom","Lo Orozco, Casablanca, Valparaíso Region, Chile","Access by car only (dirt road)","Free private parking","Pets allowed"],infoHas:"Includes",infoList:["Wooden hot tub","Terrace with outdoor dining","Charcoal grill","Pool and garden","Equipped kitchen: oven, microwave, electric kettle","Hot water and bed linen","TV"],disclaimer:"This tour is an approximate recreation based on real photos. Measurements, exact furniture placement and some details may differ slightly. Always check the official Airbnb listing.",guide:{link:"How does it work?",help:"Help",skip:"Skip",next:"Next",back:"Back",done:"Got it, start",close:"Close guide",stepOf:"Step {n} of {total}",forTouch:"On a phone or tablet",forDesk:"On a computer",s1:{t:"Welcome to the tour",b:"Here you can see the cabin inside and out, as if you were there. We will show you how it works in a few steps. You do not need to know anything about technology."},s2:{t:"Look around",b:"You can turn the view to the sides, up and down.",bt:"Put one finger on the image and drag it, as if you were moving a photo.",bd:"Hold down the left mouse button on the image and move the mouse where you want to look: the view follows it."},s3:{t:"Go from one place to another",b:'Tap the orange "Next" button to go to the next place. The camera walks there by itself. "Back" takes you to the previous place. In each place you will see its name and a short description.',bd:"On a computer, click the buttons."},s4:{t:"The white circles",b:"On the floor you will see white circles. They mark places you can visit. Tap one (or click it) and the camera takes you there."},s5:{t:"The buttons at the bottom",b:"There are four buttons at the bottom. Use them whenever you like.",items:[{k:"spaces",t:"Spaces",d:"Shows the list of all places. Tap one to go straight there."},{k:"photos",t:"Real photos",d:"Shows real photos of the place where you are, to compare."},{k:"walk",t:"Walk",d:"Lets you move around freely, inside the house and outdoors."},{k:"auto",t:"Auto tour",d:"Tours the whole cabin by itself without you touching anything. Tap again to stop it."}]},s6:{t:"Walk on your own",b:'Tap "Walk" to move freely. To return to the tour, tap "Back to the tour".',bt:"A circle appears at the bottom left. Put your finger on it and drag it in the direction you want to go. To look around, slide another finger on the image.",bd:"Use the W (forward), S (back), A (left) and D (right) keys. The arrow keys work too. Q and E turn, and Shift makes you go faster. To look around, hold the left click and move the mouse where you want to look."},s7:{t:"The buttons at the top",b:"At the top right there are small buttons:",items:[{k:"time",t:"Sun",d:"Switches between daylight and sunset light."},{k:"lang",t:"ES / EN / PT",d:"Changes the language."},{k:"help",t:"?",d:"Shows this guide again."},{k:"info",t:"i",d:"Cabin details, directions and the button to book on Airbnb."}]}},spot:{llegada:"Arrival",estac:"Parking",terraza:"Terrace",parrilla:"Grill",tinaja:"Hot tub",comedor:"Living, dining & kitchen",bano:"Bathroom",hab1:"Bedroom 1",hab2:"Bedroom 2",piscina:"Pool & garden"},desc:{llegada:"You arrive by car along a dirt road, among the hills and trees of the Casablanca Valley.",estac:"Free private parking, just a few steps from the cabin.",terraza:"Large terrace with outdoor dining under shade sails. It faces west: the sunsets are spectacular.",parrilla:"Charcoal grill for cookouts on the terrace.",tinaja:"Wooden hot tub with steps, perfect for relaxing under the open sky.",comedor:"One cozy open space: a futon to relax, a table for 4 and a kitchen with fridge, oven and microwave.",bano:"Modern bathroom with rain shower, glass screen and hot water.",hab1:"Double bed, wardrobe and a large sliding window opening to the terrace and the valley.",hab2:"Double bed, wardrobe and a window facing the hill. Quiet and bright.",piscina:"Garden with artificial turf, a play area and a pool about 5 m (16 ft) wide."},photoSet:{comedor:"Dining area",bano:"Bathroom",hab1:"Bedroom 1",hab2:"Bedroom 2",terraza:"Terrace & outdoors",piscina:"Pool & garden"}},pg={title:"Refugio Casablanca",tagline:"Percorra a cabana como se já estivesse lá",welcomeSub:"Cabana com hidromassagem e piscina no Vale de Casablanca, Chile",start:"Começar o passeio",chooseLang:"Idioma",approx:"Passeio 3D aproximado, feito com as fotos reais da acomodação.",prev:"Voltar",next:"Próximo",spaces:"Todos os espaços",tabSpaces:"Espaços",tabPhotos:"Fotos reais",tabWalk:"Caminhar",tabAuto:"Automático",photos:"Fotos reais",walk:"Caminhar livremente",walkBack:"Voltar ao passeio",auto:"Passeio automático",stopAuto:"Parar",info:"Informações",day:"Dia",sunset:"Pôr do sol",close:"Fechar",hintLook:"Deslize o dedo para olhar ao redor",hintWalk:"Use o círculo para caminhar e deslize para olhar",hintKeys:"Setas ou WASD para caminhar · arraste com o mouse para olhar",stepOf:"{n} de {total}",photoOf:"Foto real · {name} · {n}/{total}",loading:"Preparando a cabana…",tourEnd:"É isso! Gostou?",bookCta:"Reservar no Airbnb",restart:"Recomeçar",howTo:"Como chegar",infoTitle:"Sobre a cabana",infoFacts:["Cabana de 1 andar, acesso exclusivo","4 hóspedes · 2 quartos · 2 camas de casal · 1 banheiro","Lo Orozco, Casablanca, Região de Valparaíso, Chile","Acesso somente de carro (estrada de terra)","Estacionamento gratuito e privativo","Aceita animais de estimação"],infoHas:"Inclui",infoList:["Ofurô de madeira","Terraço com refeições ao ar livre","Churrasqueira a carvão","Piscina e jardim","Cozinha equipada: forno, micro-ondas, chaleira elétrica","Água quente e roupa de cama","TV"],disclaimer:"Este passeio é uma recriação aproximada baseada em fotos reais. Medidas, posição exata dos móveis e alguns detalhes podem variar um pouco. Consulte sempre o anúncio oficial no Airbnb.",guide:{link:"Como usar?",help:"Ajuda",skip:"Pular",next:"Próximo",back:"Voltar",done:"Entendi, começar",close:"Fechar guia",stepOf:"Passo {n} de {total}",forTouch:"No celular ou tablet",forDesk:"No computador",s1:{t:"Bem-vindo ao passeio",b:"Aqui você conhece a cabana por dentro e por fora, como se estivesse lá. Explicamos em poucos passos como usar. Não é preciso saber de tecnologia."},s2:{t:"Olhar ao redor",b:"Você pode girar a vista para os lados, para cima e para baixo.",bt:"Coloque um dedo sobre a imagem e arraste-a, como se movesse uma foto.",bd:"Mantenha apertado o botão esquerdo do mouse sobre a imagem e mova o mouse para onde quiser olhar: a vista acompanha."},s3:{t:"Ir de um lugar a outro",b:"Toque no botão laranja «Próximo» para ir ao próximo lugar. A câmera caminha sozinha até lá. Com «Voltar» você retorna ao lugar anterior. Em cada lugar você vê o nome e uma breve descrição.",bd:"No computador, clique nos botões."},s4:{t:"Os círculos brancos",b:"No chão você verá círculos brancos. Eles marcam lugares que você pode visitar. Toque em um (ou clique) e a câmera leva você até lá."},s5:{t:"Os botões de baixo",b:"Embaixo há quatro botões. Use quando quiser.",items:[{k:"spaces",t:"Espaços",d:"Mostra a lista de todos os lugares. Toque em um para ir direto."},{k:"photos",t:"Fotos reais",d:"Mostra fotos verdadeiras do lugar onde você está, para comparar."},{k:"walk",t:"Caminhar",d:"Deixa você se mover livremente pela casa e pelo terreno."},{k:"auto",t:"Automático",d:"Percorre toda a cabana sozinho, sem você tocar em nada. Toque de novo para parar."}]},s6:{t:"Caminhar por conta própria",b:"Toque em «Caminhar» para se mover livremente. Para voltar ao passeio, toque em «Voltar ao passeio».",bt:"Aparece um círculo embaixo à esquerda. Coloque o dedo nele e arraste para onde quiser avançar. Para olhar ao redor, deslize outro dedo sobre a imagem.",bd:"Use as teclas W (frente), S (trás), A (esquerda) e D (direita). As setas do teclado também funcionam. Com Q e E você gira, e com Shift vai mais rápido. Para olhar ao redor, mantenha o clique esquerdo e mova o mouse para onde quiser olhar."},s7:{t:"Os botões de cima",b:"No canto superior direito há pequenos botões:",items:[{k:"time",t:"Sol",d:"Alterna entre luz do dia e luz do pôr do sol."},{k:"lang",t:"ES / EN / PT",d:"Muda o idioma."},{k:"help",t:"?",d:"Mostra este guia novamente."},{k:"info",t:"i",d:"Dados da cabana, como chegar e o botão para reservar no Airbnb."}]}},spot:{llegada:"Chegada",estac:"Estacionamento",terraza:"Terraço",parrilla:"Churrasqueira",tinaja:"Ofurô",comedor:"Sala, jantar e cozinha",bano:"Banheiro",hab1:"Quarto 1",hab2:"Quarto 2",piscina:"Piscina e jardim"},desc:{llegada:"Você chega de carro por uma estrada de terra, entre morros e árvores do Vale de Casablanca.",estac:"Estacionamento gratuito e privativo, a poucos passos da cabana.",terraza:"Amplo terraço com mesa ao ar livre sob telas de sombra. Voltado para o poente: os pores do sol são um espetáculo.",parrilla:"Churrasqueira a carvão para assados no terraço.",tinaja:"Ofurô de madeira com escada, ideal para relaxar olhando o céu.",comedor:"Um único ambiente aconchegante: futon para descansar, mesa para 4 pessoas e cozinha com geladeira, forno e micro-ondas.",bano:"Banheiro moderno com chuveiro de chuva, box de vidro e água quente.",hab1:"Cama de casal, armário e uma grande janela de correr que se abre para o terraço e o vale.",hab2:"Cama de casal, armário e janela para o morro. Silencioso e iluminado.",piscina:"Jardim com grama sintética, área de brincadeiras e piscina de cerca de 5 m de diâmetro."},photoSet:{comedor:"Sala de jantar",bano:"Banheiro",hab1:"Quarto 1",hab2:"Quarto 2",terraza:"Terraço e exterior",piscina:"Piscina e jardim"}},cr={es:fg,en:dg,pt:pg};let pl="es";function mg(){try{const e=new URLSearchParams(location.search).get("lang");if(e&&cr[e])return e;const t=localStorage.getItem("rc-lang");if(t&&cr[t])return t}catch{}const n=(navigator.language||"es").slice(0,2);return cr[n]?n:"es"}function oh(n){if(cr[n]){pl=n;try{localStorage.setItem("rc-lang",n)}catch{}document.documentElement.lang=n}}const Kc=()=>pl;function Ie(n,e){let t=n.split(".").reduce((i,r)=>i?i[r]:void 0,cr[pl]);if(t===void 0&&(t=n.split(".").reduce((i,r)=>i?i[r]:void 0,cr.es)),typeof t=="string"&&e)for(const[i,r]of Object.entries(e))t=t.replace(`{${i}}`,r);return t??n}const Ni=new URLSearchParams(location.search),Bt=matchMedia("(pointer: coarse)").matches,gg="https://www.airbnb.mx/rooms/1672154212144506888",vg="https://www.google.com/maps/search/?api=1&query=Lo+Orozco+Casablanca+Chile",Q=n=>document.getElementById(n),lh=Q("c"),jt=new U1({canvas:lh,antialias:!0,powerPreference:"high-performance"});jt.setPixelRatio(Math.min(devicePixelRatio,Bt?2:1.75));jt.shadowMap.enabled=!0;jt.shadowMap.type=ru;jt.shadowMap.autoUpdate=!1;jt.toneMapping=Go;const Rt=new zu,xg=new Oo(jt),bn=new on(70,1,.05,2500),Ha=new V1(16777215,12166538,1),$t=new q1(16777215,2);$t.castShadow=!0;$t.shadow.mapSize.set(Bt?2048:3072,Bt?2048:3072);const _r=$t.shadow.camera;_r.left=-30;_r.right=30;_r.top=30;_r.bottom=-30;_r.near=1;_r.far=220;$t.shadow.bias=-3e-4;$t.shadow.normalBias=.025;$t.shadow.radius=3;$t.target.position.set(-5,0,3);Rt.add(Ha,$t,$t.target);const Mg=[[-1,2.2,1.5],[-1.6,2.2,-1.6],[1.9,2.2,-1.6],[2.55,2.2,1.5]].map(([n,e,t])=>{const i=new W1(16769712,0,7,2);return i.position.set(n,e,t),Rt.add(i),i}),as=new ea;as.scale.setScalar(1800);as.renderOrder=-11;Rt.add(as);const tr=T2();Rt.add(tr.mesh);Rt.fog=new tl(14083824,70,760);const ml=new zu,gl=new ea;gl.scale.setScalar(500);ml.add(gl);const vl=new ct(new es(400,32).rotateX(-Math.PI/2),new Jr({color:8219733}));vl.position.y=-5;ml.add(vl);let js=null;function Sg(n){for(const t of[as,gl]){const i=t.material.uniforms;i.turbidity.value=n.turbidity,i.rayleigh.value=n.rayleigh,i.mieCoefficient.value=n.mie,i.mieDirectionalG.value=.82,i.sunPosition.value.set(...n.sunDir).normalize()}vl.material.color.set(n.groundBounce);const e=js;js=xg.fromScene(ml,0,.1,1e3),Rt.traverse(t=>{if(!t.isMesh||!t.material||!t.material.isMeshStandardMaterial)return;const i=t.material;i.envMap||(i.needsUpdate=!0),i.envMap=js.texture,i.envMapIntensity=(i.userData.envI??1)*n.envI}),e&&e.dispose()}const yg={day:{fog:12833759,cloud:16777215,cloudAmt:.75,sunDir:[-.42,.78,-.46],sunCol:16773596,sunI:3,hemiSky:16774890,hemiGround:15789027,hemiI:1.05,lampI:0,exp:.9,turbidity:3.2,rayleigh:1.1,mie:.004,envI:.32,groundBounce:13222840},sunset:{fog:14264707,cloud:16757386,cloudAmt:.7,sunDir:[-1,.06,.18],sunCol:16756075,sunI:3,hemiSky:16767421,hemiGround:13351080,hemiI:.6,lampI:9,exp:.9,turbidity:6,rayleigh:2.2,mie:.006,envI:.28,groundBounce:10848884}};let wi=Ni.get("time")==="sunset"?"sunset":"day";function ch(){const n=yg[wi];Sg(n),tr.uniforms.sunDir.value.set(...n.sunDir).normalize(),tr.uniforms.sunColor.value.set(n.sunCol),tr.uniforms.cloudColor.value.set(n.cloud),tr.uniforms.cloudAmount.value=n.cloudAmt,Rt.fog.color.set(n.fog),Rt.fog.near=wi==="sunset"?35:70,Ha.color.set(n.hemiSky),Ha.groundColor.set(n.hemiGround),Ha.intensity=n.hemiI,$t.color.set(n.sunCol),$t.intensity=n.sunI;const e=tr.uniforms.sunDir.value;$t.position.set($t.target.position.x+e.x*90,e.y*90+2,$t.target.position.z+e.z*90),Mg.forEach(t=>{t.intensity=n.lampI}),jt.toneMappingExposure=n.exp,jt.shadowMap.needsUpdate=!0,Q("bTime").innerHTML=wi==="day"?'<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM11 1h2v3h-2zm0 19h2v3h-2zM3.5 5 5 3.5l2.1 2.1-1.5 1.5zM17 18.9l1.4-1.4 2.1 2.1-1.5 1.4zM1 11h3v2H1zm19 0h3v2h-3zM3.5 19 5.6 17l1.5 1.4L5 20.5zM17 5.1l2.1-2.1 1.4 1.5-2.1 2.1z"/></svg>':'<svg viewBox="0 0 24 24"><path d="M2 18h20v2H2zm5-3a5 5 0 0 1 10 0h-2a3 3 0 0 0-6 0zm4-11h2v3h-2zM4.2 7.6l1.4-1.4 2.1 2.1-1.4 1.4zm14.1.7 2.1-2.1 1.4 1.4-2.1 2.1z"/></svg>',Q("bTime").setAttribute("aria-label",Ie(wi==="day"?"sunset":"day"))}const br=new o2,ss=l2(),xl=f2(),_g=u2(br,ss);p2(br,ss,xl);m2(br,ss,xl,Yu);g2(br,ss,xl,Yu);M2(br);Rt.add(br.build());x2(Rt);y2(Rt);b2(Rt,Bt?380:560);E2(Rt,Bt?450:900,60);S2(Rt,Bt?30:42);const uh=[],Jc=new Jr({color:16777215,transparent:!0,opacity:.7,depthWrite:!1}),bg=new rl(.3,.34,40).rotateX(-Math.PI/2),Eg=new es(.06,16).rotateX(-Math.PI/2),os={};is.forEach((n,e)=>{if(!n.ring)return;const[t,i]=an[n.node],r=new Ei;r.position.set(t,.03,i),r.add(new ct(bg,Jc),new ct(Eg,Jc));const a=new ct(new Li(.75,.75,2.4,10),new Jr({visible:!1}));a.position.y=1.2,a.userData.spot=n.id,r.add(a),uh.push(a),Rt.add(r),os[n.id]=r});const mt=new hg(bn,lh,_g),$c=new Y1;mt.onTap=(n,e)=>{if(!Er)return;$c.setFromCamera(new Re(n/innerWidth*2-1,-(e/innerHeight)*2+1),bn);const t=$c.intersectObjects(uh,!1)[0];if(t){const i=qt.indexOf(t.object.userData.spot);Fi?eu(t.object.userData.spot):i>=0?Nn(i):eu(t.object.userData.spot)}};mt.onUserMove=()=>{na()};mt.onArrive=()=>{hr===null&&In&&ph()};let Ln=null,ur=null,Ii=Ni.get("ao")!=="0"&&(()=>{try{return localStorage.getItem("rc-ao")!=="off"}catch{return!0}})();function Tg(){Ln=new L2(jt),ur=new ug(Rt,bn,innerWidth,innerHeight);const n=ur.configuration;n.aoRadius=.9,n.distanceFalloff=1,n.intensity=3.2,n.color=new ve(0),n.aoSamples=Bt?8:16,n.denoiseSamples=Bt?4:8,n.denoiseRadius=10,n.halfRes=Bt,n.gammaCorrection=!1,Ln.addPass(ur),Ln.addPass(new U2)}if(Ii)try{Tg()}catch(n){Ii=!1,console.warn("AO desactivado:",n)}let Zs=0,Qs=0,Ho=!Ii||Ni.get("ao")==="1";function wg(n){if(!(Ho||!Er)&&(Zs++,Qs+=n,!(Zs<20)&&Qs>3)){if(Qs/Zs>.034){Ii=!1;try{localStorage.setItem("rc-ao","off")}catch{}}Ho=!0}}function ls(){const n=innerWidth,e=innerHeight,t=n/e;Ln&&(Ln.setPixelRatio(jt.getPixelRatio()),Ln.setSize(n,e));const i=!Fi&&t<1.2&&Q("card")&&!Q("card").hidden?Q("card").offsetHeight:0;i?bn.setViewOffset(n,e,0,Math.round(i*.5),n,e):bn.clearViewOffset(),jt.setSize(n,e,!1),bn.aspect=t,bn.fov=t>=1?68:Math.min(80,Math.max(68,2*Math.atan(Math.tan(66*Math.PI/360)/t)*180/Math.PI)),bn.updateProjectionMatrix()}addEventListener("resize",ls);let Er=!1,Fi=!1,en=0,In=!1,hr=null;const Ml=n=>Ie(`spot.${n}`);function hh(){document.querySelectorAll("[data-i18n]").forEach(n=>{n.textContent=Ie(n.dataset.i18n)}),Q("bTime").setAttribute("aria-label",Ie(wi==="day"?"sunset":"day")),Q("bInfo").setAttribute("aria-label",Ie("info")),Q("bHelp").setAttribute("aria-label",Ie("guide.help")),Q("mClose").setAttribute("aria-label",Ie("close")),Q("pClose").setAttribute("aria-label",Ie("close")),Q("autoTxt").textContent=Ie(In?"stopAuto":"tabAuto"),document.querySelectorAll("#langPills button").forEach(n=>n.classList.toggle("on",n.dataset.l===Kc())),Q("lang").value=Kc(),Sl()}function Sl(){requestAnimationFrame(ls);const n=qt[en];Q("stepTxt").textContent=Ie("stepOf",{n:en+1,total:qt.length}),Q("dots").innerHTML=qt.map((e,t)=>`<i class="${t===en?"on":""}"></i>`).join(""),Q("place").textContent=Ml(n),Q("desc").textContent=Ie(`desc.${n}`),Q("prev").style.visibility=en===0?"hidden":"visible",Object.entries(os).forEach(([e,t])=>{t.visible=e!==n})}const Vo=Q("lang");Vo.innerHTML=Object.entries(sh).map(([n])=>`<option value="${n}">${n.toUpperCase()}</option>`).join("");Q("langPills").innerHTML=Object.entries(sh).map(([n,e])=>`<button data-l="${n}">${e}</button>`).join("");function fh(n){oh(n),hh(),Q("modal").hidden||Rg(),Q("guide").hidden||hs()}Vo.addEventListener("change",()=>fh(Vo.value));Q("langPills").addEventListener("click",n=>{const e=n.target.closest("button");e&&fh(e.dataset.l)});function Nn(n){na(!1),us(!1),Q("end").hidden=!0,Q("desc").parentElement.querySelector(".nav-row").hidden=!1,en=Math.max(0,Math.min(qt.length-1,n)),Sl(),mt.goTo(qt[en],{instant:!Er})}function dh(){na(!1),Q("end").hidden=!1,document.querySelectorAll("#card > .nav-row, #card > .tabs, #card > #desc, #card > #place, #card > .step-row").forEach(n=>{n.hidden=!0})}function cs(){Q("end").hidden=!0,document.querySelectorAll("#card > .nav-row, #card > .tabs, #card > #desc, #card > #place, #card > .step-row").forEach(n=>{n.hidden=!1})}Q("next").onclick=()=>{en>=qt.length-1?dh():Nn(en+1)};Q("prev").onclick=()=>Nn(en-1);Q("restart").onclick=()=>{cs(),Nn(0)};Q("endWalk").onclick=()=>{cs(),us(!0)};function eu(n){mt.goTo(n)}function ph(){clearTimeout(hr),hr=setTimeout(()=>{if(hr=null,!!In){if(en>=qt.length-1){dh();return}Nn(en+1),In=!0,Xa()}},5200)}function Xa(){Q("autoTxt").textContent=Ie(In?"stopAuto":"tabAuto"),Q("autoIcon").innerHTML=In?'<path d="M6 5h4v14H6zm8 0h4v14h-4z"/>':'<path d="M8 5v14l11-7z"/>',Q("tAuto").classList.toggle("on",In)}function na(n=!0){In=!1,clearTimeout(hr),hr=null,Xa()}Q("tAuto").onclick=()=>{if(In){na();return}In=!0,Xa(),mt.path||ph()};function us(n){Fi=n,requestAnimationFrame(ls),Q("card").hidden=n,Q("freeBar").hidden=!n,Q("stickWrap").hidden=!(n&&Bt),Q("tWalk").classList.toggle("on",n),n?(na(),Object.values(os).forEach(e=>{e.visible=!0}),mh(Ie(Bt?"hintWalk":"hintKeys"))):(mt.stick.x=mt.stick.y=0,Sl())}Q("tWalk").onclick=()=>us(!0);Q("freeBack").onclick=()=>{cs(),Nn(Ag())};function Ag(){const n=rs(mt.x,mt.z),e=qt.indexOf(n==="exterior"?"llegada":n);return e>=0?e:en}let tu=null;function mh(n){const e=Q("hint");e.hidden=!0,e.offsetWidth,e.textContent=n,e.hidden=!1,clearTimeout(tu),tu=setTimeout(()=>{e.hidden=!0},6e3)}(()=>{const n=Q("stick"),e=Q("knob");let t=null;const i=a=>{const s=n.getBoundingClientRect();let o=a.clientX-(s.left+s.width/2),l=a.clientY-(s.top+s.height/2);const u=s.width/2-8,c=Math.hypot(o,l);c>u&&(o=o/c*u,l=l/c*u),e.style.transform=`translate(${o}px, ${l}px)`,mt.stick.x=o/u,mt.stick.y=l/u};n.addEventListener("pointerdown",a=>{t=a.pointerId,n.setPointerCapture(t),i(a),a.preventDefault()}),n.addEventListener("pointermove",a=>{a.pointerId===t&&i(a)});const r=a=>{a.pointerId===t&&(t=null,e.style.transform="",mt.stick.x=mt.stick.y=0)};n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r)})();function gh(n,e){Q("mTitle").textContent=n,Q("mBody").innerHTML=e,Q("modal").hidden=!1}let yl=null;function Rg(){yl==="spaces"?vh():xh()}function vh(){yl="spaces",gh(Ie("spaces"),qt.map((n,e)=>`<button class="spot-btn ${e===en&&!Fi?"on":""}" data-i="${e}"><b>${e+1}</b><span>${Ml(n)}</span></button>`).join(""))}function xh(){yl="info",gh(Ie("infoTitle"),`
    <ul class="facts">${Ie("infoFacts").map(n=>`<li>${n}</li>`).join("")}</ul>
    <h4>${Ie("infoHas")}</h4>
    <ul class="facts">${Ie("infoList").map(n=>`<li>${n}</li>`).join("")}</ul>
    <div class="btn-row">
      <a class="btn primary" href="${gg}" target="_blank" rel="noopener">${Ie("bookCta")}</a>
      <a class="btn ghost" href="${vg}" target="_blank" rel="noopener">${Ie("howTo")}</a>
    </div>
    <p class="note">${Ie("disclaimer")}</p>`)}Q("tSpaces").onclick=vh;Q("bInfo").onclick=xh;Q("mClose").onclick=()=>{Q("modal").hidden=!0};Q("modal").addEventListener("click",n=>{n.target===Q("modal")&&(Q("modal").hidden=!0);const e=n.target.closest(".spot-btn");e&&(Q("modal").hidden=!0,cs(),Nn(+e.dataset.i))});const Cg={comedor:"comedor",bano:"bano",hab1:"hab1",hab2:"hab2",terraza:"terraza",parrilla:"terraza",tinaja:"terraza",estac:"terraza",exterior:"terraza",piscina:"piscina"};let qa="comedor",Cn=0;function Dg(){return Fi?Cg[rs(mt.x,mt.z)]||"terraza":is.find(n=>n.id===qt[en]).photos}function _l(){const n=fl[qa];Q("pImg").src=window.__PHOTOS&&window.__PHOTOS[n[Cn]]||`./fotos/${n[Cn]}.jpg`,Q("pCap").textContent=Ie("photoOf",{name:Ie(`photoSet.${qa}`),n:Cn+1,total:n.length}),Q("pPrev").disabled=Cn===0,Q("pNext").disabled=Cn===n.length-1}Q("tPhotos").onclick=()=>{qa=Dg(),Cn=0,Q("photos").hidden=!1,_l()};Q("pClose").onclick=()=>{Q("photos").hidden=!0};Q("pPrev").onclick=()=>{Cn>0&&(Cn--,_l())};Q("pNext").onclick=()=>{Cn<fl[qa].length-1&&(Cn++,_l())};(()=>{let n=null;Q("photos").addEventListener("touchstart",e=>{n=e.touches[0].clientX},{passive:!0}),Q("photos").addEventListener("touchend",e=>{if(n===null)return;const t=e.changedTouches[0].clientX-n;n=null,t<-50?Q("pNext").click():t>50&&Q("pPrev").click()})})();Q("bTime").onclick=()=>{wi=wi==="day"?"sunset":"day",ch()};addEventListener("keydown",n=>{n.key==="Escape"&&(Q("modal").hidden=!0,Q("photos").hidden=!0,Q("guide").hidden||El()),!(!Er||Fi)&&(n.key==="Enter"&&Q("next").click(),n.key==="Backspace"&&Q("prev").click())});const Pg={spaces:'<path d="M3 5h4v4H3zm7 0h11v4H10zM3 10h4v4H3zm7 0h11v4H10zM3 15h4v4H3zm7 0h11v4H10z"/>',photos:'<path d="M9 4 7.2 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.2L15 4H9zm3 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>',walk:'<path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3A7.3 7.3 0 0 0 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z"/>',auto:'<path d="M8 5v14l11-7z"/>',time:'<path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM11 1h2v3h-2zm0 19h2v3h-2zM3.5 5 5 3.5l2.1 2.1-1.5 1.5zM17 18.9l1.4-1.4 2.1 2.1-1.5 1.4zM1 11h3v2H1zm19 0h3v2h-3zM3.5 19 5.6 17l1.5 1.4L5 20.5zM17 5.1l2.1-2.1 1.4 1.5-2.1 2.1z"/>',help:'<path d="M11 18h2v-2h-2v2zm1-16a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-14a4 4 0 0 0-4 4h2a2 2 0 1 1 4 0c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4z"/>',info:'<path d="M11 17h2v-6h-2v6zm1-15a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 8a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z"/>'},Or={hello:'<svg viewBox="0 0 200 120"><path d="M28 72 100 18l72 54h-15v40H43V72z" fill="var(--accent)"/><rect x="88" y="74" width="24" height="38" fill="#fff" opacity=".92"/><rect x="52" y="78" width="24" height="18" fill="#fff" opacity=".85"/><rect x="124" y="78" width="24" height="18" fill="#fff" opacity=".85"/></svg>',lookTouch:'<svg viewBox="0 0 200 120"><rect x="72" y="8" width="56" height="104" rx="10" stroke="currentColor" stroke-width="4"/><circle cx="100" cy="66" r="9" fill="var(--accent)"/><path d="M40 66h24m-8-8 8 8-8 8M160 66h-24m8-8-8 8 8 8" stroke="var(--accent)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>',lookDesk:'<svg viewBox="0 0 200 120"><rect x="80" y="10" width="40" height="70" rx="20" stroke="currentColor" stroke-width="4"/><path d="M100 10v30M80 40h40" stroke="currentColor" stroke-width="4"/><path d="M84 30a16 16 0 0 1 16-16v26H80z" fill="var(--accent)"/><path d="M34 96h132m-14-9 14 9-14 9M48 87 34 96l14 9" stroke="var(--accent)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>',rings:'<svg viewBox="0 0 200 120"><ellipse cx="100" cy="88" rx="70" ry="20" fill="#3a332c" opacity=".18"/><ellipse cx="100" cy="82" rx="46" ry="14" stroke="var(--accent)" stroke-width="6"/><ellipse cx="100" cy="82" rx="7" ry="2.5" fill="var(--accent)"/><path d="M100 50v18m-7-8 7 8 7-8" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>',stickTouch:'<svg viewBox="0 0 200 120"><circle cx="100" cy="60" r="48" stroke="currentColor" stroke-width="4" opacity=".55"/><circle cx="118" cy="46" r="20" fill="var(--accent)"/><path d="M100 60l10-8" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/></svg>'},nu=n=>`<span class="ic"><svg viewBox="0 0 24 24">${Pg[n]}</svg></span>`;let Yn=0,Ya=!1;function Mh(){const n=c=>Ie(`guide.${c}`),e=(c,f)=>{const d=c?`<div class="dev ${Bt?"main":""}"><b>${n("forTouch")}</b>${c}</div>`:"",p=f?`<div class="dev ${Bt?"":"main"}"><b>${n("forDesk")}</b>${f}</div>`:"";return Bt?d+p:p+d},t=(c,f)=>`<ul class="g-items">${c.map(d=>`<li>${f(d)}<div><b>${d.t}</b><span>${d.d}</span></div></li>`).join("")}</ul>`,i=Ie("guide.s1"),r=Ie("guide.s2"),a=Ie("guide.s3"),s=Ie("guide.s4"),o=Ie("guide.s5"),l=Ie("guide.s6"),u=Ie("guide.s7");return[{i:Or.hello,t:i.t,h:`<p>${i.b}</p>`},{i:Bt?Or.lookTouch:Or.lookDesk,t:r.t,h:`<p>${r.b}</p>${e(r.bt,r.bd)}`},{i:`<div class="mock"><span class="g">‹ ${Ie("prev")}</span><span class="o">${Ie("next")} ›</span></div>`,t:a.t,h:`<p>${a.b}</p>`},{i:Or.rings,t:s.t,h:`<p>${s.b}</p>`},{i:"",t:o.t,h:`<p>${o.b}</p>${t(o.items,c=>nu(c.k))}`},{i:Bt?Or.stickTouch:'<div class="keys"><i class="e"></i><i>W</i><i class="e"></i><i>A</i><i>S</i><i>D</i></div>',t:l.t,h:`<p>${l.b}</p>${e(l.bt,l.bd)}`},{i:"",t:u.t,h:`<p>${u.b}</p>${t(u.items,c=>c.k==="lang"?'<span class="ic">ES</span>':nu(c.k))}`}]}function hs(){const n=Mh(),e=n.length,t=n[Yn];Q("gIll").innerHTML=t.i,Q("gIll").hidden=!t.i,Q("gStep").textContent=Ie("guide.stepOf",{n:Yn+1,total:e}),Q("gTitle").textContent=t.t,Q("gBody").innerHTML=t.h,Q("gSkip").textContent=Ie("guide.skip"),Q("gBack").textContent=Ie("guide.back"),Q("gBack").style.visibility=Yn===0?"hidden":"visible",Q("gNext").textContent=Yn===e-1?Ie(Ya?"guide.done":"guide.close"):Ie("guide.next"),document.querySelector(".guide-body").scrollTop=0}function bl(n=!1){Yn=0,Ya=n,hs(),Q("guide").hidden=!1}function El(){Q("guide").hidden=!0;try{localStorage.setItem("rc-guide","1")}catch{}Ya&&(Ya=!1,Sh())}Q("gNext").onclick=()=>{Yn>=Mh().length-1?El():(Yn++,hs())};Q("gBack").onclick=()=>{Yn>0&&(Yn--,hs())};Q("gSkip").onclick=El;Q("bHelp").onclick=()=>bl(!1);Q("howto").onclick=()=>bl(!1);const Lg=()=>{try{return localStorage.getItem("rc-guide")==="1"}catch{return!1}};function Sh(){Er=!0,Q("welcome").classList.add("out"),setTimeout(()=>{Q("welcome").hidden=!0},600),Nn(0),mh(Ie("hintLook"))}Q("start").onclick=()=>{Q("start").disabled||(Lg()||Ni.get("skipwelcome")==="1"?Sh():bl(!0))};oh(mg());ch();hh();ls();Ni.get("embed")==="1"&&document.body.classList.add("embed");Q("start").disabled=!0;mt.goTo(qt[0],{instant:!0});jt.render(Rt,bn);Q("start").disabled=!1;Q("loadingTxt").hidden=!0;const Pa=Ni.get("spot");Pa&&qt.includes(Pa)?(Er=!0,Q("welcome").hidden=!0,Nn(qt.indexOf(Pa)),mt.goTo(Pa,{instant:!0})):Ni.get("skipwelcome")==="1"&&Q("start").click();const Ig=new Hu;jt.setAnimationLoop(()=>{const n=Ig.getDelta();mt.update(n);const e=performance.now()/1e3;for(const t of Object.values(os))t.visible&&t.scale.setScalar(1+Math.sin(e*2.4)*.06);Fi&&(Q("freePlace").textContent=(()=>{const t=rs(mt.x,mt.z);return t==="exterior"?"":Ml(t)})()),wg(n),Ii&&Ln?Ln.render(n):jt.render(Rt,bn)});window.__rc={nav:mt,camera:bn,scene:Rt,goStep:Nn,setFree:us,renderer:jt,setAO:n=>{Ii=n&&!!Ln,Ho=!0},aoState:()=>({aoOn:Ii,composer:!!Ln,pass:ur&&ur.configuration,aoPass:ur})};
