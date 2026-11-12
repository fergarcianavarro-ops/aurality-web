var Dh=0,Pl=1,Uh=2;var Qi=1,Oh=2,Ws=3,Ri=0,qt=1,qn=2,$n=0,qs=1,Ll=2,Nl=3,Dl=4,Fh=5;var es=100,Bh=101,zh=102,Vh=103,kh=104,Gh=200,Hh=201,Wh=202,qh=203,Ul=204,Ol=205,$h=206,Xh=207,Yh=208,Zh=209,Jh=210,jh=211,Kh=212,Qh=213,ed=214,Xr=0,Yr=1,Zr=2,Is=3,Jr=4,jr=5,Kr=6,Qr=7,Co=0,td=1,nd=2,Dn=0,Fl=1,Bl=2,zl=3,Vl=4,kl=5,Gl=6,Ya=7;var Hl=300,Ii=301,ts=302,Ro=303,Io=304,Za=306,Ps=1e3,kn=1001,eo=1002,Ft=1003,id=1004;var Ja=1005;var Ht=1006,Po=1007;var Pi=1008;var cn=1009,Wl=1010,ql=1011,$s=1012,Lo=1013,Un=1014,Mn=1015,On=1016,No=1017,Do=1018,Xs=1020,$l=35902,Xl=35899,Yl=1021,Zl=1022,bn=1023,Gn=1026,Li=1027,Uo=1028,Oo=1029,Ni=1030,Fo=1031;var Bo=1033,ja=33776,Ka=33777,Qa=33778,er=33779,zo=35840,Vo=35841,ko=35842,Go=35843,Ho=36196,Wo=37492,qo=37496,$o=37488,Xo=37489,tr=37490,Yo=37491,Zo=37808,Jo=37809,jo=37810,Ko=37811,Qo=37812,ec=37813,tc=37814,nc=37815,ic=37816,sc=37817,ac=37818,rc=37819,oc=37820,cc=37821,lc=36492,uc=36494,hc=36495,dc=36283,fc=36284,nr=36285,pc=36286;var xa=2300,to=2301,qr=2302,xl=2303,_l=2400,yl=2401,Al=2402;var sd=3200;var ir=0,ad=1,li="",Ot="srgb",_a="srgb-linear",ya="linear",mt="srgb";var $r=7680;var rd=519,od=512,cd=513,ld=514,mc=515,ud=516,hd=517,gc=518,dd=519,fd=35044;var Jl="300 es",Nn=2e3,Ls=2001;function gp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pd(){let n=Aa("canvas");return n.style.display="block",n}var nh={},Ns=null;function jl(...n){let e="THREE."+n.shift();Ns?Ns("log",e,...n):console.log(e,...n)}function md(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=md(n);let e="THREE."+n.shift();if(Ns)Ns("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ke(...n){n=md(n);let e="THREE."+n.shift();if(Ns)Ns("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Yi(...n){let e=n.join(" ");e in nh||(nh[e]=!0,je(...n))}function gd(n,e,t){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}var vd={[Xr]:Yr,[Zr]:Kr,[Jr]:Qr,[Is]:jr,[Yr]:Xr,[Kr]:Zr,[Qr]:Jr,[jr]:Is},Hn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ih=1234567,pa=Math.PI/180,Ds=180/Math.PI;function ns(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Kl(n,e){return(n%e+e)%e}function xp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function _p(n,e,t){return n!==e?(t-n)/(e-n):0}function ma(n,e,t){return(1-t)*n+t*e}function yp(n,e,t,i){return ma(n,e,1-Math.exp(-t*i))}function Ap(n,e=1){return e-Math.abs(Kl(n,e*2)-e)}function Sp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Mp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function bp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Tp(n,e){return n+Math.random()*(e-n)}function Ep(n){return n*(.5-Math.random())}function wp(n){n!==void 0&&(ih=n);let e=ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cp(n){return n*pa}function Rp(n){return n*Ds}function Ip(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Pp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Np(n,e,t,i,s){let a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+i)/2),u=r((e+i)/2),h=a((e-i)/2),d=r((e-i)/2),f=a((i-e)/2),g=r((i-e)/2);switch(s){case"XYX":n.set(o*u,c*h,c*d,o*l);break;case"YZY":n.set(c*d,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*d,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*u,o*l);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Tn={DEG2RAD:pa,RAD2DEG:Ds,generateUUID:ns,clamp:rt,euclideanModulo:Kl,mapLinear:xp,inverseLerp:_p,lerp:ma,damp:yp,pingpong:Ap,smoothstep:Sp,smootherstep:Mp,randInt:bp,randFloat:Tp,randFloatSpread:Ep,seededRandom:wp,degToRad:Cp,radToDeg:Rp,isPowerOfTwo:Ip,ceilPowerOfTwo:Pp,floorPowerOfTwo:Lp,setQuaternionFromProperEuler:Np,normalize:Kt,denormalize:Cs},Ie=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*s+e.x,this.y=a*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,r,o){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],d=a[r+0],f=a[r+1],g=a[r+2],A=a[r+3];if(h!==A||c!==d||l!==f||u!==g){let p=c*d+l*f+u*g+h*A;p<0&&(d=-d,f=-f,g=-g,A=-A,p=-p);let m=1-o;if(p<.9995){let y=Math.acos(p),E=Math.sin(y);m=Math.sin(m*y)/E,o=Math.sin(o*y)/E,c=c*m+d*o,l=l*m+f*o,u=u*m+g*o,h=h*m+A*o}else{c=c*m+d*o,l=l*m+f*o,u=u*m+g*o,h=h*m+A*o;let y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,a,r){let o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=a[r],d=a[r+1],f=a[r+2],g=a[r+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),h=o(a/2),d=c(i/2),f=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(a-l)*f,this._z=(r-s)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(a-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(r-s)/f,this._x=(a+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+r*o+s*l-a*c,this._y=s*u+r*c+a*o-i*l,this._z=a*u+r*l+i*c-s*o,this._w=r*u-i*o-s*c-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+a*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+a*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},j=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*s-o*i),u=2*(o*t-a*s),h=2*(a*i-r*t);return this.x=t+c*l+r*h-o*u,this.y=i+c*u+o*l-a*h,this.z=s+c*h+a*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-a*o,this.y=a*r-i*c,this.z=i*o-s*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yc=new j,sh=new Bt,nt=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,a,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,c,l)}set(e,t,i,s,a,r,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=i,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],A=s[0],p=s[3],m=s[6],y=s[1],E=s[4],v=s[7],S=s[2],w=s[5],L=s[8];return a[0]=r*A+o*y+c*S,a[3]=r*p+o*E+c*w,a[6]=r*m+o*v+c*L,a[1]=l*A+u*y+h*S,a[4]=l*p+u*E+h*w,a[7]=l*m+u*v+h*L,a[2]=d*A+f*y+g*S,a[5]=d*p+f*E+g*w,a[8]=d*m+f*v+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*o*l-i*a*u+i*o*c+s*a*l-s*r*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*r-o*l,d=o*c-u*a,f=l*a-r*c,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/g;return e[0]=h*A,e[1]=(s*l-u*i)*A,e[2]=(o*i-s*r)*A,e[3]=d*A,e[4]=(u*t-s*c)*A,e[5]=(s*a-o*t)*A,e[6]=f*A,e[7]=(i*c-l*t)*A,e[8]=(r*t-i*a)*A,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,r,o){let c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*r+l*o)+r+e,-s*l,s*c,-s*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(e,t)),this}rotate(e){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-e)),this}translate(e,t){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zc=new nt,ah=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dp(){let n={enabled:!0,workingColorSpace:_a,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===mt&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===mt&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_a]:{primaries:e,whitePoint:i,transfer:ya,toXYZ:ah,fromXYZ:rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:ah,fromXYZ:rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),n}var lt=Dp();function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ps,no=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ps===void 0&&(ps=Aa("canvas")),ps.width=e.width,ps.height=e.height;let s=ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Aa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ai(a[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Up=0,Us=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Jc(s[r].image)):a.push(Jc(s[r]))}else a=Jc(s);i.url=a}return t||(e.images[this.uuid]=i),i}};function Jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?no.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var Op=0,jc=new j,en=class n extends Hn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=kn,s=kn,a=Ht,r=Pi,o=bn,c=cn,l=n.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=ns(),this.name="",this.source=new Us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Hl;en.DEFAULT_ANISOTROPY=1;var St=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],A=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-A)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+A)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,v=(f+1)/2,S=(m+1)/2,w=(u+d)/4,L=(h+A)/4,_=(g+p)/4;return E>v&&E>S?E<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(E),s=w/i,a=L/i):v>S?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=w/s,a=_/s):S<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(S),i=L/a,s=_/a),this.set(i,s,a,t),this}let y=Math.sqrt((p-g)*(p-g)+(h-A)*(h-A)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-A)/y,this.z=(d-u)/y,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},io=class extends Hn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},a=new en(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Us(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends io{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Sa=class extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var so=class extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ht=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,a,r,o,c,l,u,h,d,f,g,A,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,c,l,u,h,d,f,g,A,p)}set(e,t,i,s,a,r,o,c,l,u,h,d,f,g,A,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=a,m[5]=r,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=A,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),a=1/ms.setFromMatrixColumn(e,1).length(),r=1/ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,a=e.z,r=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){let d=r*u,f=r*h,g=o*u,A=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-A*l,t[9]=-o*c,t[2]=A-d*l,t[6]=g+f*l,t[10]=r*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,A=l*h;t[0]=d+A*o,t[4]=g*o-f,t[8]=r*l,t[1]=r*h,t[5]=r*u,t[9]=-o,t[2]=f*o-g,t[6]=A+d*o,t[10]=r*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,A=l*h;t[0]=d-A*o,t[4]=-r*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*u,t[9]=A-d*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){let d=r*u,f=r*h,g=o*u,A=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+A,t[1]=c*h,t[5]=A*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){let d=r*c,f=r*l,g=o*c,A=o*l;t[0]=c*u,t[4]=A-d*h,t[8]=g*h+f,t[1]=h,t[5]=r*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-A*h}else if(e.order==="XZY"){let d=r*c,f=r*l,g=o*c,A=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+A,t[5]=r*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=A*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fp,e,Bp)}lookAt(e,t,i){let s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),vi.crossVectors(i,un),vi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),vi.crossVectors(i,un)),vi.normalize(),Mr.crossVectors(un,vi),s[0]=vi.x,s[4]=Mr.x,s[8]=un.x,s[1]=vi.y,s[5]=Mr.y,s[9]=un.y,s[2]=vi.z,s[6]=Mr.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],A=i[6],p=i[10],m=i[14],y=i[3],E=i[7],v=i[11],S=i[15],w=s[0],L=s[4],_=s[8],R=s[12],U=s[1],z=s[5],k=s[9],ie=s[13],V=s[2],Y=s[6],ce=s[10],le=s[14],se=s[3],W=s[7],Z=s[11],N=s[15];return a[0]=r*w+o*U+c*V+l*se,a[4]=r*L+o*z+c*Y+l*W,a[8]=r*_+o*k+c*ce+l*Z,a[12]=r*R+o*ie+c*le+l*N,a[1]=u*w+h*U+d*V+f*se,a[5]=u*L+h*z+d*Y+f*W,a[9]=u*_+h*k+d*ce+f*Z,a[13]=u*R+h*ie+d*le+f*N,a[2]=g*w+A*U+p*V+m*se,a[6]=g*L+A*z+p*Y+m*W,a[10]=g*_+A*k+p*ce+m*Z,a[14]=g*R+A*ie+p*le+m*N,a[3]=y*w+E*U+v*V+S*se,a[7]=y*L+E*z+v*Y+S*W,a[11]=y*_+E*k+v*ce+S*Z,a[15]=y*R+E*ie+v*le+S*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],A=e[7],p=e[11],m=e[15],y=c*f-l*d,E=o*f-l*h,v=o*d-c*h,S=r*f-l*u,w=r*d-c*u,L=r*h-o*u;return t*(A*y-p*E+m*v)-i*(g*y-p*S+m*w)+s*(g*E-A*S+m*L)-a*(g*v-A*w+p*L)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],a=e[1],r=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(r*u-o*l)-i*(a*u-o*c)+s*(a*l-r*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],A=e[13],p=e[14],m=e[15],y=t*o-i*r,E=t*c-s*r,v=t*l-a*r,S=i*c-s*o,w=i*l-a*o,L=s*l-a*c,_=u*A-h*g,R=u*p-d*g,U=u*m-f*g,z=h*p-d*A,k=h*m-f*A,ie=d*m-f*p,V=y*ie-E*k+v*z+S*U-w*R+L*_;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/V;return e[0]=(o*ie-c*k+l*z)*Y,e[1]=(s*k-i*ie-a*z)*Y,e[2]=(A*L-p*w+m*S)*Y,e[3]=(d*w-h*L-f*S)*Y,e[4]=(c*U-r*ie-l*R)*Y,e[5]=(t*ie-s*U+a*R)*Y,e[6]=(p*v-g*L-m*E)*Y,e[7]=(u*L-d*v+f*E)*Y,e[8]=(r*k-o*U+l*_)*Y,e[9]=(i*U-t*k-a*_)*Y,e[10]=(g*w-A*v+m*y)*Y,e[11]=(h*v-u*w-f*y)*Y,e[12]=(o*R-r*z-c*_)*Y,e[13]=(t*z-i*R+s*_)*Y,e[14]=(A*E-g*S-p*y)*Y,e[15]=(u*S-h*E+d*y)*Y,this}scale(e){let t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),a=1-i,r=e.x,o=e.y,c=e.z,l=a*r,u=a*o;return this.set(l*r+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*r,0,l*c-s*o,u*c+s*r,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,r){return this.set(1,i,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,u=r+r,h=o+o,d=a*l,f=a*u,g=a*h,A=r*u,p=r*h,m=o*h,y=c*l,E=c*u,v=c*h,S=i.x,w=i.y,L=i.z;return s[0]=(1-(A+m))*S,s[1]=(f+v)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(d+m))*w,s[6]=(p+y)*w,s[7]=0,s[8]=(g+E)*L,s[9]=(p-y)*L,s[10]=(1-(d+A))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let r=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),c=ms.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Rn.copy(this);let l=1/r,u=1/o,h=1/c;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),i.x=r,i.y=o,i.z=c,this}makePerspective(e,t,i,s,a,r,o=Nn,c=!1){let l=this.elements,u=2*a/(t-e),h=2*a/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),g,A;if(c)g=a/(r-a),A=r*a/(r-a);else if(o===Nn)g=-(r+a)/(r-a),A=-2*r*a/(r-a);else if(o===Ls)g=-r/(r-a),A=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=A,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,a,r,o=Nn,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),g,A;if(c)g=1/(r-a),A=r/(r-a);else if(o===Nn)g=-2/(r-a),A=-(r+a)/(r-a);else if(o===Ls)g=-1/(r-a),A=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=A,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ms=new j,Rn=new ht,Fp=new j(0,0,0),Bp=new j(1,1,1),vi=new j,Mr=new j,un=new j,oh=new ht,ch=new Bt,Zt=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ch.setFromEuler(this),this.setFromQuaternion(ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zt.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zp=0,lh=new j,gs=new Bt,ei=new ht,br=new j,oa=new j,Vp=new j,kp=new Bt,uh=new j(1,0,0),hh=new j(0,1,0),dh=new j(0,0,1),fh={type:"added"},Gp={type:"removed"},vs={type:"childadded",child:null},Kc={type:"childremoved",child:null},Wt=class n extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new j,t=new Zt,i=new Bt,s=new j(1,1,1);function a(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new nt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(uh,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(dh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uh,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?br.copy(e):br.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(oa,br,this.up):ei.lookAt(br,oa,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(ei),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),vs.child=e,this.dispatchEvent(vs),vs.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gp),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,Vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,kp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*s,a[13]+=i-a[1]*t-a[5]*i-a[9]*s,a[14]+=s-a[2]*t-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(a(e.animations,c))}}if(t){let o=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),h=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Wt.DEFAULT_UP=new j(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hp={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,r=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let A of e.hand.values()){let p=t.getJointPose(A,i),m=this._getHandJoint(l,A);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new an;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Qc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Kl(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,r=2*i-a;this.r=Qc(r,a,e+1/3),this.g=Qc(r,a,e),this.b=Qc(r,a,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ot){function i(a){a!==void 0&&parseFloat(a)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let i=xd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return lt.workingToColorSpace(Yt.copy(this),e),Math.round(rt(Yt.r*255,0,255))*65536+Math.round(rt(Yt.g*255,0,255))*256+Math.round(rt(Yt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Yt.copy(this),t);let i=Yt.r,s=Yt.g,a=Yt.b,r=Math.max(i,s,a),o=Math.min(i,s,a),c,l,u=(o+r)/2;if(o===r)c=0,l=0;else{let h=r-o;switch(l=u<=.5?h/(r+o):h/(2-r-o),r){case i:c=(s-a)/h+(s<a?6:0);break;case s:c=(a-i)/h+2;break;case a:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Ot){lt.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,i=Yt.g,s=Yt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Tr);let i=ma(xi.h,Tr.h,t),s=ma(xi.s,Tr.s,t),a=ma(xi.l,Tr.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new it;it.NAMES=xd;var Ma=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new it(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zi=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},In=new j,ti=new j,el=new j,ni=new j,xs=new j,_s=new j,ph=new j,tl=new j,nl=new j,il=new j,sl=new St,al=new St,rl=new St,Si=class n{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),In.subVectors(e,t),s.cross(In);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){In.subVectors(s,t),ti.subVectors(i,t),el.subVectors(e,t);let r=In.dot(In),o=In.dot(ti),c=In.dot(el),l=ti.dot(ti),u=ti.dot(el),h=r*l-o*o;if(h===0)return a.set(0,0,0),null;let d=1/h,f=(l*c-o*u)*d,g=(r*u-o*c)*d;return a.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,i,s,a,r,o,c){return this.getBarycoord(e,t,i,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ni.x),c.addScaledVector(r,ni.y),c.addScaledVector(o,ni.z),c)}static getInterpolatedAttribute(e,t,i,s,a,r){return sl.setScalar(0),al.setScalar(0),rl.setScalar(0),sl.fromBufferAttribute(e,t),al.fromBufferAttribute(e,i),rl.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(sl,a.x),r.addScaledVector(al,a.y),r.addScaledVector(rl,a.z),r}static isFrontFacing(e,t,i,s){return In.subVectors(i,t),ti.subVectors(e,t),In.cross(ti).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),In.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,a=this.c,r,o;xs.subVectors(s,i),_s.subVectors(a,i),tl.subVectors(e,i);let c=xs.dot(tl),l=_s.dot(tl);if(c<=0&&l<=0)return t.copy(i);nl.subVectors(e,s);let u=xs.dot(nl),h=_s.dot(nl);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(i).addScaledVector(xs,r);il.subVectors(e,a);let f=xs.dot(il),g=_s.dot(il);if(g>=0&&f<=g)return t.copy(a);let A=f*l-c*g;if(A<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(_s,o);let p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return ph.subVectors(a,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(ph,o);let m=1/(p+A+d);return r=A*m,o=d*m,t.copy(i).addScaledVector(xs,r).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sn=class{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Pn):Pn.fromBufferAttribute(a,r),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Er.copy(i.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}let s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),wr.subVectors(this.max,ca),ys.subVectors(e.a,ca),As.subVectors(e.b,ca),Ss.subVectors(e.c,ca),_i.subVectors(As,ys),yi.subVectors(Ss,As),Hi.subVectors(ys,Ss);let t=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-Hi.z,Hi.y,_i.z,0,-_i.x,yi.z,0,-yi.x,Hi.z,0,-Hi.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-Hi.y,Hi.x,0];return!ol(t,ys,As,Ss,wr)||(t=[1,0,0,0,1,0,0,0,1],!ol(t,ys,As,Ss,wr))?!1:(Cr.crossVectors(_i,yi),t=[Cr.x,Cr.y,Cr.z],ol(t,ys,As,Ss,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ii=[new j,new j,new j,new j,new j,new j,new j,new j],Pn=new j,Er=new Sn,ys=new j,As=new j,Ss=new j,_i=new j,yi=new j,Hi=new j,ca=new j,wr=new j,Cr=new j,Wi=new j;function ol(n,e,t,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){Wi.fromArray(n,a);let o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),c=e.dot(Wi),l=t.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var It=new j,Rr=new Ie,Wp=0,Qt=class extends Hn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fd,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),s=Kt(s,this.array),a=Kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ba=class extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ta=class extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Et=class extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}},qp=new Sn,la=new j,cl=new j,Mi=class{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):qp.setFromPoints(e).getCenter(i);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);let t=la.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(la,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(cl)),this.expandByPoint(la.copy(e.center).sub(cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$p=0,An=new ht,ll=new Wt,Ms=new j,hn=new Sn,ua=new Sn,Ut=new j,on=class n extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gp(e)?Ta:ba)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new nt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,a=e.length;s<a;s++){let r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Et(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let a=t[i];hn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){let o=t[a];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(hn.min,ua.min),hn.expandByPoint(Ut),Ut.addVectors(hn.max,ua.max),hn.expandByPoint(Ut)):(hn.expandByPoint(ua.min),hn.expandByPoint(ua.max))}hn.getCenter(i);let s=0;for(let a=0,r=e.count;a<r;a++)Ut.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let a=0,r=t.length;a<r;a++){let o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ut.fromBufferAttribute(o,l),c&&(Ms.fromBufferAttribute(e,l),Ut.add(Ms)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,a=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new j,c[_]=new j;let l=new j,u=new j,h=new j,d=new Ie,f=new Ie,g=new Ie,A=new j,p=new j;function m(_,R,U){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,U),d.fromBufferAttribute(a,_),f.fromBufferAttribute(a,R),g.fromBufferAttribute(a,U),u.sub(l),h.sub(l),f.sub(d),g.sub(d);let z=1/(f.x*g.y-g.x*f.y);isFinite(z)&&(A.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(z),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(z),o[_].add(A),o[R].add(A),o[U].add(A),c[_].add(p),c[R].add(p),c[U].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,R=y.length;_<R;++_){let U=y[_],z=U.start,k=U.count;for(let ie=z,V=z+k;ie<V;ie+=3)m(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}let E=new j,v=new j,S=new j,w=new j;function L(_){S.fromBufferAttribute(s,_),w.copy(S);let R=o[_];E.copy(R),E.sub(S.multiplyScalar(S.dot(R))).normalize(),v.crossVectors(w,R);let z=v.dot(c[_])<0?-1:1;r.setXYZW(_,E.x,E.y,E.z,z)}for(let _=0,R=y.length;_<R;++_){let U=y[_],z=U.start,k=U.count;for(let ie=z,V=z+k;ie<V;ie+=3)L(e.getX(ie+0)),L(e.getX(ie+1)),L(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new j,a=new j,r=new j,o=new j,c=new j,l=new j,u=new j,h=new j;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),A=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,A),r.fromBufferAttribute(t,p),u.subVectors(r,a),h.subVectors(s,a),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,A),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(A,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,a),h.subVectors(s,a),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let A=0,p=c.length;A<p;A++){o.isInterleavedBufferAttribute?f=c[A]*o.data.stride+o.offset:f=c[A]*u;for(let m=0;m<u;m++)d[g++]=l[f++]}return new Qt(d,u,h)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let a=this.morphAttributes;for(let o in a){let c=[],l=a[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,c=r.length;o<c;o++){let l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},a=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let a=e.morphAttributes;for(let l in a){let u=[],h=a[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,u=r.length;l<u;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ul=new j,Xp=new j,Yp=new nt,Ln=class{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ul.subVectors(i,t).cross(Xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ul),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Yp.getNormalMatrix(e),s=this.coplanarPoint(ul).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Zp=0,ri=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=qs,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Ol,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let c=a[o];delete c.metadata,r.push(c)}return r}if(t){let a=s(e.textures),r=s(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ln().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ie().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var si=new j,hl=new j,Ir=new j,Pr=new j,Ea=class{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hl.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(hl);let a=e.distanceTo(t)*.5,r=-this.direction.dot(Ir),o=Pr.dot(this.direction),c=-Pr.dot(Ir),l=Pr.lengthSq(),u=Math.abs(1-r*r),h,d,f,g;if(u>0)if(h=r*c-o,d=r*o-c,g=a*u,h>=0)if(d>=-g)if(d<=g){let A=1/u;h*=A,d*=A,f=h*(h+r*d+2*o)+d*(r*h+d+2*c)+l}else d=a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*c)+l;else d=-a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-r*a+o)),d=h>0?-a:Math.min(Math.max(-a,-c),a),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-a,-c),a),f=d*(d+2*c)+l):(h=Math.max(0,-(r*a+o)),d=h>0?a:Math.min(Math.max(-a,-c),a),f=-h*h+d*(d+2*c)+l);else d=r>0?-a:a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(hl).addScaledVector(Ir,d),f}intersectSphere(e,t){if(e.radius<0)return null;si.subVectors(e.center,this.origin);let i=si.dot(this.direction),s=si.dot(si)-i*i,a=e.radius*e.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,c=i+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,r,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(a=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,s,a){let r=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-r.x,d=e.y-r.y,f=e.z-r.z,g=t.x-r.x,A=t.y-r.y,p=t.z-r.z,m=i.x-r.x,y=i.y-r.y,E=i.z-r.z,v=Math.abs(c),S=Math.abs(l),w=Math.abs(u),L,_,R,U,z,k,ie,V,Y,ce,le,se;if(v>=S&&v>=w?(R=c,k=h,Y=g,se=m,c>=0?(L=l,_=u,U=d,z=f,ie=A,V=p,ce=y,le=E):(L=u,_=l,U=f,z=d,ie=p,V=A,ce=E,le=y)):S>=w?(R=l,k=d,Y=A,se=y,l>=0?(L=u,_=c,U=f,z=h,ie=p,V=g,ce=E,le=m):(L=c,_=u,U=h,z=f,ie=g,V=p,ce=m,le=E)):(R=u,k=f,Y=p,se=E,u>=0?(L=c,_=l,U=h,z=d,ie=g,V=A,ce=m,le=y):(L=l,_=c,U=d,z=h,ie=A,V=g,ce=y,le=m)),R===0)return null;let W=L/R,Z=_/R,N=1/R,ee=U-W*k,O=z-Z*k,H=ie-W*Y,$=V-Z*Y,F=ce-W*se,T=le-Z*se,M=F*$-T*H,C=ee*T-O*F,P=H*O-$*ee;if(s){if(M<0||C<0||P<0)return null}else if((M<0||C<0||P<0)&&(M>0||C>0||P>0))return null;let D=M+C+P;if(D===0)return null;let J=N*(M*k+C*Y+P*se);return(D>0?J<0:J>0)?null:this.at(J/D,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wa=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mh=new ht,qi=new Ea,Lr=new Mi,gh=new j,Nr=new j,Dr=new j,Ur=new j,dl=new j,Or=new j,vh=new j,Fr=new j,vt=class extends Wt{constructor(e=new on,t=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(a&&o){Or.set(0,0,0);for(let c=0,l=a.length;c<l;c++){let u=o[c],h=a[c];u!==0&&(dl.fromBufferAttribute(h,e),r?Or.addScaledVector(dl,u):Or.addScaledVector(dl.sub(t),u))}t.add(Or)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(a),qi.copy(e.ray).recast(e.near),!(Lr.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Lr,gh)===null||qi.origin.distanceToSquared(gh)>(e.far-e.near)**2))&&(mh.copy(a).invert(),qi.copy(e.ray).applyMatrix4(mh),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,i){let s,a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,A=d.length;g<A;g++){let p=d[g],m=r[p.materialIndex],y=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,S=E;v<S;v+=3){let w=o.getX(v),L=o.getX(v+1),_=o.getX(v+2);s=Br(this,m,e,i,l,u,h,w,L,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),A=Math.min(o.count,f.start+f.count);for(let p=g,m=A;p<m;p+=3){let y=o.getX(p),E=o.getX(p+1),v=o.getX(p+2);s=Br(this,r,e,i,l,u,h,y,E,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,A=d.length;g<A;g++){let p=d[g],m=r[p.materialIndex],y=Math.max(p.start,f.start),E=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,S=E;v<S;v+=3){let w=v,L=v+1,_=v+2;s=Br(this,m,e,i,l,u,h,w,L,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),A=Math.min(c.count,f.start+f.count);for(let p=g,m=A;p<m;p+=3){let y=p,E=p+1,v=p+2;s=Br(this,r,e,i,l,u,h,y,E,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Jp(n,e,t,i,s,a,r,o){let c;if(e.side===qt?c=i.intersectTriangle(r,a,s,!0,o):c=i.intersectTriangle(s,a,r,e.side===Ri,o),c===null)return null;Fr.copy(o),Fr.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Fr);return l<t.near||l>t.far?null:{distance:l,point:Fr.clone(),object:n}}function Br(n,e,t,i,s,a,r,o,c,l){n.getVertexPosition(o,Nr),n.getVertexPosition(c,Dr),n.getVertexPosition(l,Ur);let u=Jp(n,e,t,i,Nr,Dr,Ur,vh);if(u){let h=new j;Si.getBarycoord(vh,Nr,Dr,Ur,h),s&&(u.uv=Si.getInterpolatedAttribute(s,o,c,l,h,new Ie)),a&&(u.uv1=Si.getInterpolatedAttribute(a,o,c,l,h,new Ie)),r&&(u.normal=Si.getInterpolatedAttribute(r,o,c,l,h,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new j,materialIndex:0};Si.getNormal(Nr,Dr,Ur,d.normal),u.face=d,u.barycoord=h}return u}var Ca=class extends en{constructor(e=null,t=1,i=1,s,a,r,o,c,l=Ft,u=Ft,h,d){super(null,r,o,c,l,u,s,a,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bs=class extends Qt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},bs=new ht,xh=new ht,zr=[],_h=new Sn,jp=new ht,ha=new vt,da=new Mi,Ji=class extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,jp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),_h.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(_h)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),da.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=e*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(i),e.ray.intersectsSphere(da)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,bs),xh.multiplyMatrices(i,bs),ha.matrixWorld=xh,ha.raycast(e,zr);for(let r=0,o=zr.length;r<o;r++){let c=zr[r];c.instanceId=a,c.object=this,t.push(c)}zr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ca(new Float32Array(s*this.count),s,this.count,Uo,Mn));let a=this.morphTexture.source.data.data,r=0;for(let l=0;l<i.length;l++)r+=i[l];let o=this.geometry.morphTargetsRelative?1:1-r,c=s*e;return a[c]=o,a.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$i=new Mi,Kp=new Ie(.5,.5),Vr=new j,zs=class{constructor(e=new Ln,t=new Ln,i=new Ln,s=new Ln,a=new Ln,r=new Ln){this.planes=[e,t,i,s,a,r]}set(e,t,i,s,a,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nn,i=!1){let s=this.planes,a=e.elements,r=a[0],o=a[1],c=a[2],l=a[3],u=a[4],h=a[5],d=a[6],f=a[7],g=a[8],A=a[9],p=a[10],m=a[11],y=a[12],E=a[13],v=a[14],S=a[15];if(s[0].setComponents(l-r,f-u,m-g,S-y).normalize(),s[1].setComponents(l+r,f+u,m+g,S+y).normalize(),s[2].setComponents(l+o,f+h,m+A,S+E).normalize(),s[3].setComponents(l-o,f-h,m-A,S-E).normalize(),i)s[4].setComponents(c,d,p,v).normalize(),s[5].setComponents(l-c,f-d,m-p,S-v).normalize();else if(s[4].setComponents(l-c,f-d,m-p,S-v).normalize(),t===Nn)s[5].setComponents(l+c,f+d,m+p,S+v).normalize();else if(t===Ls)s[5].setComponents(c,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);let t=Kp.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Vr.x=s.normal.x>0?e.max.x:e.min.x,Vr.y=s.normal.y>0?e.max.y:e.min.y,Vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ra=class extends en{constructor(e=[],t=Ii,i,s,a,r,o,c,l,u){super(e,t,i,s,a,r,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bi=class extends en{constructor(e,t,i,s,a,r,o,c,l){super(e,t,i,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ti=class extends en{constructor(e,t,i=Un,s,a,r,o=Ft,c=Ft,l,u=Gn,h=1){if(u!==Gn&&u!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,a,r,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ao=class extends Ti{constructor(e,t=Un,i=Ii,s,a,r=Ft,o=Ft,c,l=Gn){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,a,r,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ia=class extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},oi=class n extends on{constructor(e=1,t=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,r,a,0),g("z","y","x",1,-1,i,t,-e,r,a,1),g("x","z","y",1,1,e,i,t,s,r,2),g("x","z","y",1,-1,e,i,-t,s,r,3),g("x","y","z",1,-1,e,t,i,s,a,4),g("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(c),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(h,2));function g(A,p,m,y,E,v,S,w,L,_,R){let U=v/L,z=S/_,k=v/2,ie=S/2,V=w/2,Y=L+1,ce=_+1,le=0,se=0,W=new j;for(let Z=0;Z<ce;Z++){let N=Z*z-ie;for(let ee=0;ee<Y;ee++){let O=ee*U-k;W[A]=O*y,W[p]=N*E,W[m]=V,l.push(W.x,W.y,W.z),W[A]=0,W[p]=0,W[m]=w>0?1:-1,u.push(W.x,W.y,W.z),h.push(ee/L),h.push(1-Z/_),le+=1}}for(let Z=0;Z<_;Z++)for(let N=0;N<L;N++){let ee=d+N+Y*Z,O=d+N+Y*(Z+1),H=d+(N+1)+Y*(Z+1),$=d+(N+1)+Y*Z;c.push(ee,O,$),c.push(O,H,$),se+=6}o.addGroup(f,se,R),f+=se,d+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Pa=class n extends on{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let a=[],r=[],o=[],c=[],l=new j,u=new Ie;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=i+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),r.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(r[d]/e+1)/2,u.y=(r[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new Et(r,3)),this.setAttribute("normal",new Et(o,3)),this.setAttribute("uv",new Et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},La=class n extends on{constructor(e=1,t=1,i=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),a=Math.floor(a);let u=[],h=[],d=[],f=[],g=0,A=[],p=i/2,m=0;y(),r===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(f,2));function y(){let v=new j,S=new j,w=0,L=(t-e)/i;for(let _=0;_<=a;_++){let R=[],U=_/a,z=U*(t-e)+e;for(let k=0;k<=s;k++){let ie=k/s,V=ie*c+o,Y=Math.sin(V),ce=Math.cos(V);S.x=z*Y,S.y=-U*i+p,S.z=z*ce,h.push(S.x,S.y,S.z),v.set(Y,L,ce).normalize(),d.push(v.x,v.y,v.z),f.push(ie,1-U),R.push(g++)}A.push(R)}for(let _=0;_<s;_++)for(let R=0;R<a;R++){let U=A[R][_],z=A[R+1][_],k=A[R+1][_+1],ie=A[R][_+1];(e>0||R!==0)&&(u.push(U,z,ie),w+=3),(t>0||R!==a-1)&&(u.push(z,k,ie),w+=3)}l.addGroup(m,w,0),m+=w}function E(v){let S=g,w=new Ie,L=new j,_=0,R=v===!0?e:t,U=v===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,p*U,0),d.push(0,U,0),f.push(.5,.5),g++;let z=g;for(let k=0;k<=s;k++){let V=k/s*c+o,Y=Math.cos(V),ce=Math.sin(V);L.x=R*ce,L.y=p*U,L.z=R*Y,h.push(L.x,L.y,L.z),d.push(0,U,0),w.x=Y*.5+.5,w.y=ce*.5*U+.5,f.push(w.x,w.y),g++}for(let k=0;k<s;k++){let ie=S+k,V=z+k;v===!0?u.push(V,V+1,ie):u.push(V+1,V,ie),_+=3}l.addGroup(m,_,v===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),a+=i.distanceTo(s),t.push(a),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,a=i.length,r;t?r=t:r=e*i[a-1];let o=0,c=a-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-r,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(a-1);let u=i[s],d=i[s+1]-u,f=(r-u)/d;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),c=t||(r.isVector2?new Ie:new j);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new j,s=[],a=[],r=[],o=new j,c=new ht;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new j)}a[0]=new j,r[0]=new j;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(rt(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(c.makeRotationAxis(o,g))}r[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(rt(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Vs=class extends dn{constructor(e=0,t=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ie){let i=t,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+e*a,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ro=class extends Vs{constructor(e,t,i,s,a,r){super(e,t,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Ql(){let n=0,e=0,t=0,i=0;function s(a,r,o,c){n=a,e=o,t=-3*a+3*r-2*o-c,i=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){s(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,u,h){let d=(r-a)/l-(o-a)/(l+u)+(o-r)/u,f=(o-r)/u-(c-r)/(u+h)+(c-o)/h;d*=u,f*=u,s(r,o,d,f)},calc:function(a){let r=a*a,o=r*a;return n+e*a+t*r+i*o}}}var yh=new j,Ah=new j,fl=new Ql,pl=new Ql,ml=new Ql,oo=class extends dn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new j){let i=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e,o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%a]:(Ah.subVectors(s[0],s[1]).add(s[0]),l=Ah);let h=s[o%a],d=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(yh.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=yh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),f),A=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);A<1e-4&&(A=1),g<1e-4&&(g=A),p<1e-4&&(p=A),fl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,A,p),pl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,A,p),ml.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,A,p)}else this.curveType==="catmullrom"&&(fl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),pl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),ml.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(fl.calc(c),pl.calc(c),ml.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new j().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sh(n,e,t,i,s){let a=(i-e)*.5,r=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+a+r)*c+(-3*t+3*i-2*a-r)*o+a*n+t}function Qp(n,e){let t=1-n;return t*t*e}function em(n,e){return 2*(1-n)*n*e}function tm(n,e){return n*n*e}function ga(n,e,t,i){return Qp(n,e)+em(n,t)+tm(n,i)}function nm(n,e){let t=1-n;return t*t*t*e}function im(n,e){let t=1-n;return 3*t*t*n*e}function sm(n,e){return 3*(1-n)*n*n*e}function am(n,e){return n*n*n*e}function va(n,e,t,i,s){return nm(n,e)+im(n,t)+sm(n,i)+am(n,s)}var Na=class extends dn{constructor(e=new Ie,t=new Ie,i=new Ie,s=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ie){let i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(va(e,s.x,a.x,r.x,o.x),va(e,s.y,a.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},co=class extends dn{constructor(e=new j,t=new j,i=new j,s=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new j){let i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(va(e,s.x,a.x,r.x,o.x),va(e,s.y,a.y,r.y,o.y),va(e,s.z,a.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Da=class extends dn{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lo=class extends dn{constructor(e=new j,t=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new j){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends dn{constructor(e=new Ie,t=new Ie,i=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ie){let i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(ga(e,s.x,a.x,r.x),ga(e,s.y,a.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends dn{constructor(e=new j,t=new j,i=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new j){let i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(ga(e,s.x,a.x,r.x),ga(e,s.y,a.y,r.y),ga(e,s.z,a.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let i=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return i.set(Sh(o,c.x,l.x,u.x,h.x),Sh(o,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ie().fromArray(s))}return this}},Sl=Object.freeze({__proto__:null,ArcCurve:ro,CatmullRomCurve3:oo,CubicBezierCurve:Na,CubicBezierCurve3:co,EllipseCurve:Vs,LineCurve:Da,LineCurve3:lo,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:uo,SplineCurve:Oa}),ho=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let r=s[a]-i,o=this.curves[a],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Sl[s.type]().fromJSON(s))}return this}},Wn=class extends ho{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Da(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let a=new Ua(this.currentPoint.clone(),new Ie(e,t),new Ie(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,a,r){let o=new Na(this.currentPoint.clone(),new Ie(e,t),new Ie(i,s),new Ie(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Oa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,a,r){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,a,r),this}absarc(e,t,i,s,a,r){return this.absellipse(e,t,i,i,s,a,r),this}ellipse(e,t,i,s,a,r,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,a,r,o,c),this}absellipse(e,t,i,s,a,r,o,c){let l=new Vs(e,t,i,s,a,r,o,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},tn=class extends Wn{constructor(e){super(e),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Wn().fromJSON(s))}return this}};function rm(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,a=_d(n,0,s,t,!0),r=[];if(!a||a.next===a.prev)return r;let o,c,l;if(i&&(a=hm(n,e,a,t)),n.length>80*t){o=n[0],c=n[1];let u=o,h=c;for(let d=t;d<s;d+=t){let f=n[d],g=n[d+1];f<o&&(o=f),g<c&&(c=g),f>u&&(u=f),g>h&&(h=g)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return Fa(a,r,t,o,c,l,0),r}function _d(n,e,t,i,s){let a;if(s===Sm(n,e,t,i)>0)for(let r=e;r<t;r+=i)a=Mh(r/i|0,n[r],n[r+1],a);else for(let r=t-i;r>=e;r-=i)a=Mh(r/i|0,n[r],n[r+1],a);return a&&ks(a,a.next)&&(za(a),a=a.next),a}function ji(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ks(t,t.next)||Mt(t.prev,t,t.next)===0)){if(za(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Fa(n,e,t,i,s,a,r){if(!n)return;!r&&a&&gm(n,i,s,a);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(a?cm(n,i,s,a):om(n)){e.push(c.i,n.i,l.i),za(n),n=l.next,o=l.next;continue}if(n=l,n===o){r?r===1?(n=lm(ji(n),e),Fa(n,e,t,i,s,a,2)):r===2&&um(n,e,t,i,s,a):Fa(ji(n),e,t,i,s,a,1);break}}}function om(n){let e=n.prev,t=n,i=n.next;if(Mt(e,t,i)>=0)return!1;let s=e.x,a=t.x,r=i.x,o=e.y,c=t.y,l=i.y,u=Math.min(s,a,r),h=Math.min(o,c,l),d=Math.max(s,a,r),f=Math.max(o,c,l),g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&fa(s,o,a,c,r,l,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cm(n,e,t,i){let s=n.prev,a=n,r=n.next;if(Mt(s,a,r)>=0)return!1;let o=s.x,c=a.x,l=r.x,u=s.y,h=a.y,d=r.y,f=Math.min(o,c,l),g=Math.min(u,h,d),A=Math.max(o,c,l),p=Math.max(u,h,d),m=Ml(f,g,e,t,i),y=Ml(A,p,e,t,i),E=n.prevZ,v=n.nextZ;for(;E&&E.z>=m&&v&&v.z<=y;){if(E.x>=f&&E.x<=A&&E.y>=g&&E.y<=p&&E!==s&&E!==r&&fa(o,u,c,h,l,d,E.x,E.y)&&Mt(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=f&&v.x<=A&&v.y>=g&&v.y<=p&&v!==s&&v!==r&&fa(o,u,c,h,l,d,v.x,v.y)&&Mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=A&&E.y>=g&&E.y<=p&&E!==s&&E!==r&&fa(o,u,c,h,l,d,E.x,E.y)&&Mt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=A&&v.y>=g&&v.y<=p&&v!==s&&v!==r&&fa(o,u,c,h,l,d,v.x,v.y)&&Mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function lm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!ks(i,s)&&Ad(i,t,t.next,s)&&Ba(i,s)&&Ba(s,i)&&(e.push(i.i,t.i,s.i),za(t),za(t.next),t=n=s),t=t.next}while(t!==n);return ji(t)}function um(n,e,t,i,s,a){let r=n;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&_m(r,o)){let c=Sd(r,o);r=ji(r,r.next),c=ji(c,c.next),Fa(r,e,t,i,s,a,0),Fa(c,e,t,i,s,a,0);return}o=o.next}r=r.next}while(r!==n)}function hm(n,e,t,i){let s=[];for(let a=0,r=e.length;a<r;a++){let o=e[a]*i,c=a<r-1?e[a+1]*i:n.length,l=_d(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(xm(l))}s.sort(dm);for(let a=0;a<s.length;a++)t=fm(s[a],t);return t}function dm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function fm(n,e){let t=pm(n,e);if(!t)return e;let i=Sd(t,n);return ji(i,i.next),ji(t,t.next)}function pm(n,e){let t=e,i=n.x,s=n.y,a=-1/0,r;if(ks(n,t))return t;do{if(ks(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>a&&(a=h,r=t.x<t.next.x?t:t.next,h===i))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,c=r.x,l=r.y,u=1/0;t=r;do{if(i>=t.x&&t.x>=c&&i!==t.x&&yd(s<l?i:a,s,c,l,s<l?a:i,s,t.x,t.y)){let h=Math.abs(s-t.y)/(i-t.x);Ba(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&mm(r,t)))&&(r=t,u=h)}t=t.next}while(t!==o);return r}function mm(n,e){return Mt(n.prev,n,e.prev)<0&&Mt(e.next,n,n.next)<0}function gm(n,e,t,i){let s=n;do s.z===0&&(s.z=Ml(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,vm(s)}function vm(n){let e,t=1;do{let i=n,s;n=null;let a=null;for(e=0;i;){e++;let r=i,o=0;for(let l=0;l<t&&(o++,r=r.nextZ,!!r);l++);let c=t;for(;o>0||c>0&&r;)o!==0&&(c===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,c--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;i=r}a.nextZ=null,t*=2}while(e>1);return n}function Ml(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function xm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function yd(n,e,t,i,s,a,r,o){return(s-r)*(e-o)>=(n-r)*(a-o)&&(n-r)*(i-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(i-o)}function fa(n,e,t,i,s,a,r,o){return!(n===r&&e===o)&&yd(n,e,t,i,s,a,r,o)}function _m(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ym(n,e)&&(Ba(n,e)&&Ba(e,n)&&Am(n,e)&&(Mt(n.prev,n,e.prev)||Mt(n,e.prev,e))||ks(n,e)&&Mt(n.prev,n,n.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ks(n,e){return n.x===e.x&&n.y===e.y}function Ad(n,e,t,i){let s=Gr(Mt(n,e,t)),a=Gr(Mt(n,e,i)),r=Gr(Mt(t,i,n)),o=Gr(Mt(t,i,e));return!!(s!==a&&r!==o||s===0&&kr(n,t,e)||a===0&&kr(n,i,e)||r===0&&kr(t,n,i)||o===0&&kr(t,e,i))}function kr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Gr(n){return n>0?1:n<0?-1:0}function ym(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ad(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ba(n,e){return Mt(n.prev,n,n.next)<0?Mt(n,e,n.next)>=0&&Mt(n,n.prev,e)>=0:Mt(n,e,n.prev)<0||Mt(n,n.next,e)<0}function Am(n,e){let t=n,i=!1,s=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Sd(n,e){let t=bl(n.i,n.x,n.y),i=bl(e.i,e.x,e.y),s=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Mh(n,e,t,i){let s=bl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function za(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sm(n,e,t,i){let s=0;for(let a=e,r=t-i;a<t;a+=i)s+=(n[r]-n[a])*(n[a+1]+n[r+1]),r=a;return s}var Tl=class{static triangulate(e,t,i=2){return rm(e,t,i)}},Xi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,a=0;a<t;s=a++)i+=e[s].x*e[a].y-e[a].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],a=[];bh(e),Th(i,e);let r=e.length;t.forEach(bh);for(let c=0;c<t.length;c++)s.push(r),r+=t[c].length,Th(i,t[c]);let o=Tl.triangulate(i,s);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}};function bh(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Th(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Va=class n extends on{constructor(e=new tn([new Ie(.5,.5),new Ie(-.5,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];r(l)}this.setAttribute("position",new Et(s,3)),this.setAttribute("uv",new Et(a,2)),this.computeVertexNormals();function r(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,A=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Mm,E,v=!1,S,w,L,_;if(m){E=m.getSpacedPoints(u),v=!0,d=!1;let q=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(u,q),w=new j,L=new j,_=new j}d||(p=0,f=0,g=0,A=0);let R=o.extractPoints(l),U=R.shape,z=R.holes;if(!Xi.isClockWise(U)){U=U.reverse();for(let q=0,ae=z.length;q<ae;q++){let re=z[q];Xi.isClockWise(re)&&(z[q]=re.reverse())}}function ie(q){let re=10000000000000001e-36,G=q[0];for(let X=1;X<=q.length;X++){let ve=X%q.length,Ae=q[ve],Me=Ae.x-G.x,we=Ae.y-G.y,B=Me*Me+we*we,ze=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(G.x),Math.abs(G.y)),De=re*ze*ze;if(B<=De){q.splice(ve,1),X--;continue}G=Ae}}ie(U),z.forEach(ie);let V=z.length,Y=U;for(let q=0;q<V;q++){let ae=z[q];U=U.concat(ae)}function ce(q,ae,re){return ae||Ke("ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(ae,re)}let le=U.length;function se(q,ae,re){let G,X,ve,Ae=q.x-ae.x,Me=q.y-ae.y,we=re.x-q.x,B=re.y-q.y,ze=Ae*Ae+Me*Me,De=Ae*B-Me*we;if(Math.abs(De)>Number.EPSILON){let I=Math.sqrt(ze),x=Math.sqrt(we*we+B*B),ne=ae.x-Me/I,oe=ae.y+Ae/I,de=re.x-B/x,Ee=re.y+we/x,Pe=((de-ne)*B-(Ee-oe)*we)/(Ae*B-Me*we);G=ne+Ae*Pe-q.x,X=oe+Me*Pe-q.y;let _e=G*G+X*X;if(_e<=2)return new Ie(G,X);ve=Math.sqrt(_e/2)}else{let I=!1;Ae>Number.EPSILON?we>Number.EPSILON&&(I=!0):Ae<-Number.EPSILON?we<-Number.EPSILON&&(I=!0):Math.sign(Me)===Math.sign(B)&&(I=!0),I?(G=-Me,X=Ae,ve=Math.sqrt(ze)):(G=Ae,X=Me,ve=Math.sqrt(ze/2))}return new Ie(G/ve,X/ve)}let W=[];for(let q=0,ae=Y.length,re=ae-1,G=q+1;q<ae;q++,re++,G++)re===ae&&(re=0),G===ae&&(G=0),W[q]=se(Y[q],Y[re],Y[G]);let Z=[],N,ee=W.concat();for(let q=0,ae=V;q<ae;q++){let re=z[q];N=[];for(let G=0,X=re.length,ve=X-1,Ae=G+1;G<X;G++,ve++,Ae++)ve===X&&(ve=0),Ae===X&&(Ae=0),N[G]=se(re[G],re[ve],re[Ae]);Z.push(N),ee=ee.concat(N)}let O;if(p===0)O=Xi.triangulateShape(Y,z);else{let q=[],ae=[];for(let re=0;re<p;re++){let G=re/p,X=f*Math.cos(G*Math.PI/2),ve=g*Math.sin(G*Math.PI/2)+A;for(let Ae=0,Me=Y.length;Ae<Me;Ae++){let we=ce(Y[Ae],W[Ae],ve);C(we.x,we.y,-X),G===0&&q.push(we)}for(let Ae=0,Me=V;Ae<Me;Ae++){let we=z[Ae];N=Z[Ae];let B=[];for(let ze=0,De=we.length;ze<De;ze++){let I=ce(we[ze],N[ze],ve);C(I.x,I.y,-X),G===0&&B.push(I)}G===0&&ae.push(B)}}O=Xi.triangulateShape(q,ae)}let H=O.length,$=g+A;for(let q=0;q<le;q++){let ae=d?ce(U[q],ee[q],$):U[q];v?(L.copy(S.normals[0]).multiplyScalar(ae.x),w.copy(S.binormals[0]).multiplyScalar(ae.y),_.copy(E[0]).add(L).add(w),C(_.x,_.y,_.z)):C(ae.x,ae.y,0)}for(let q=1;q<=u;q++)for(let ae=0;ae<le;ae++){let re=d?ce(U[ae],ee[ae],$):U[ae];v?(L.copy(S.normals[q]).multiplyScalar(re.x),w.copy(S.binormals[q]).multiplyScalar(re.y),_.copy(E[q]).add(L).add(w),C(_.x,_.y,_.z)):C(re.x,re.y,h/u*q)}for(let q=p-1;q>=0;q--){let ae=q/p,re=f*Math.cos(ae*Math.PI/2),G=g*Math.sin(ae*Math.PI/2)+A;for(let X=0,ve=Y.length;X<ve;X++){let Ae=ce(Y[X],W[X],G);C(Ae.x,Ae.y,h+re)}for(let X=0,ve=z.length;X<ve;X++){let Ae=z[X];N=Z[X];for(let Me=0,we=Ae.length;Me<we;Me++){let B=ce(Ae[Me],N[Me],G);v?C(B.x,B.y+E[u-1].y,E[u-1].x+re):C(B.x,B.y,h+re)}}}F(),T();function F(){let q=s.length/3;if(d){let ae=0,re=le*ae;for(let G=0;G<H;G++){let X=O[G];P(X[2]+re,X[1]+re,X[0]+re)}ae=u+p*2,re=le*ae;for(let G=0;G<H;G++){let X=O[G];P(X[0]+re,X[1]+re,X[2]+re)}}else{for(let ae=0;ae<H;ae++){let re=O[ae];P(re[2],re[1],re[0])}for(let ae=0;ae<H;ae++){let re=O[ae];P(re[0]+le*u,re[1]+le*u,re[2]+le*u)}}i.addGroup(q,s.length/3-q,0)}function T(){let q=s.length/3,ae=0;M(Y,ae),ae+=Y.length;for(let re=0,G=z.length;re<G;re++){let X=z[re];M(X,ae),ae+=X.length}i.addGroup(q,s.length/3-q,1)}function M(q,ae){let re=q.length;for(;--re>=0;){let G=re,X=re-1;X<0&&(X=q.length-1);for(let ve=0,Ae=u+p*2;ve<Ae;ve++){let Me=le*ve,we=le*(ve+1),B=ae+G+Me,ze=ae+X+Me,De=ae+X+we,I=ae+G+we;D(B,ze,De,I)}}}function C(q,ae,re){c.push(q),c.push(ae),c.push(re)}function P(q,ae,re){J(q),J(ae),J(re);let G=s.length/3,X=y.generateTopUV(i,s,G-3,G-2,G-1);te(X[0]),te(X[1]),te(X[2])}function D(q,ae,re,G){J(q),J(ae),J(G),J(ae),J(re),J(G);let X=s.length/3,ve=y.generateSideWallUV(i,s,X-6,X-3,X-2,X-1);te(ve[0]),te(ve[1]),te(ve[3]),te(ve[1]),te(ve[2]),te(ve[3])}function J(q){s.push(c[q*3+0]),s.push(c[q*3+1]),s.push(c[q*3+2])}function te(q){a.push(q.x),a.push(q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return bm(t,i,e)}static fromJSON(e,t){let i=[];for(let a=0,r=e.shapes.length;a<r;a++){let o=t[e.shapes[a]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Sl[s.type]().fromJSON(s)),new n(i,e.options)}},Mm={generateTopUV:function(n,e,t,i,s){let a=e[t*3],r=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new Ie(a,r),new Ie(o,c),new Ie(l,u)]},generateSideWallUV:function(n,e,t,i,s,a){let r=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],A=e[a*3],p=e[a*3+1],m=e[a*3+2];return Math.abs(o-u)<Math.abs(r-l)?[new Ie(r,1-c),new Ie(l,1-h),new Ie(d,1-g),new Ie(A,1-m)]:[new Ie(o,1-c),new Ie(u,1-h),new Ie(f,1-g),new Ie(p,1-m)]}};function bm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let a=n[i];t.shapes.push(a.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ci=class n extends on{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let a=e/2,r=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],A=[],p=[];for(let m=0;m<u;m++){let y=m*d-r;for(let E=0;E<l;E++){let v=E*h-a;g.push(v,-y,0),A.push(0,0,1),p.push(E/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){let E=y+l*m,v=y+l*(m+1),S=y+1+l*(m+1),w=y+1+l*m;f.push(E,v,w),f.push(v,S,w)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(A,3)),this.setAttribute("uv",new Et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function is(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Eh(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Eh(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][i]=a}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Jt(n){let e={};for(let t=0;t<n.length;t++){let i=is(n[t]);for(let s in i)e[s]=i[s]}return e}function Eh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Tm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Md={clone:is,merge:Jt},Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ie().fromArray(s.value);break;case"v3":this.uniforms[i].value=new j().fromArray(s.value);break;case"v4":this.uniforms[i].value=new St().fromArray(s.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ht().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fo=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pn=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ki=class extends pn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ka=class extends ri{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Co,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},po=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mo=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ts(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function gl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ei=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],a=t[i-1];n:{e:{let r;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=t[++i],e<s)break e}r=t.length;break t}if(!(e>=a)){let o=t[1];e<o&&(i=2,a=o);for(let c=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=a,a=t[--i-1],e>=a)break e}r=i,i=0;break t}break n}for(;i<r;){let o=i+r>>>1;e<t[o]?r=o:i=o+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=i[a+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},go=class extends Ei{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_l,endingEnd:_l}}intervalChanged_(e,t,i){let s=this.parameterPositions,a=e-2,r=e+1,o=s[a],c=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case yl:a=e,o=2*t-i;break;case Al:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case yl:r=e,c=2*i-t;break;case Al:r=1,c=i+s[1]-s[0];break;default:r=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),A=g*g,p=A*g,m=-d*p+2*d*A-d*g,y=(1+d)*p+(-1.5-2*d)*A+(-.5+d)*g+1,E=(-1-f)*p+(1.5+f)*A+.5*g,v=f*p-f*A;for(let S=0;S!==o;++S)a[S]=m*r[u+S]+y*r[l+S]+E*r[c+S]+v*r[h+S];return a}},vo=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)a[d]=r[l+d]*h+r[c+d]*u;return a}},xo=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_o=class extends Ei{interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(i-t)/(s-t),A=1-g;for(let p=0;p!==o;++p)a[p]=r[l+p]*A+r[c+p]*g;return a}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let A=r[l+g],p=r[c+g],m=f*d+g*2,y=h[m],E=h[m+1],v=e*d+g*2,S=u[v],w=u[v+1],L=Rm(i,t,y,S,s);a[g]=bd(L,A,E,w,p)}return a}};function bd(n,e,t,i,s){let a=1-n;return a*a*a*e+3*a*a*n*t+3*a*n*n*i+n*n*n*s}function Cm(n,e,t,i,s){let a=1-n;return 3*a*a*(t-e)+6*a*n*(i-t)+3*n*n*(s-i)}function Rm(n,e,t,i,s){let a=(n-e)/(s-e);for(let r=0;r<8;r++){let o=bd(a,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=Cm(a,e,t,i,s);if(Math.abs(c)<1e-10)break;a=Math.max(0,Math.min(1,a-o/c))}return a}var mn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ts(t,this.TimeBufferType),this.values=Ts(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ts(e.times,Array),values:Ts(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),gl(e.settings)&&(i.settings={inTangents:Ts(e.settings.inTangents,Array),outTangents:Ts(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _o(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xa:t=this.InterpolantFactoryMethodDiscrete;break;case to:t=this.InterpolantFactoryMethodLinear;break;case qr:t=this.InterpolantFactoryMethodSmooth;break;case xl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return je("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return qr;case this.InterpolantFactoryMethodBezier:return xl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;gl(this.settings)&&(wh(this.settings.inTangents,e),wh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<e;)++a;for(;r!==-1&&i[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Ke("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){Ke("KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(s!==void 0&&vp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ke("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qr,a=e.length-1,r=1;for(let o=1;o<a;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let h=o*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){let A=t[h+g];if(A!==t[d+g]||A!==t[f+g]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];let h=o*i,d=r*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++r}}if(a>0){e[r]=e[a];for(let o=a*i,c=r*i,l=0;l!==i;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,gl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function wh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=to;var wi=class extends mn{constructor(e,t,i){super(e,t,i)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=xa;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};yo.prototype.ValueTypeName="color";var Ao=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};Ao.prototype.ValueTypeName="number";var So=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)Bt.slerpFlat(a,0,r,l-o,r,l,c);return a}},Ga=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new So(this.times,this.values,this.getValueSize(),e)}};Ga.prototype.ValueTypeName="quaternion";Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends mn{constructor(e,t,i){super(e,t,i)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=xa;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};Mo.prototype.ValueTypeName="vector";var bo=class{constructor(e,t,i){let s=this,a=!1,r=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Td=new bo,To=class{constructor(e){this.manager=e!==void 0?e:Td,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};To.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ha=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var vl=new ht,Ch=new j,Rh=new j,Wa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ch.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ch),Rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(vl,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,c=s?s.x/a.x:0,l=s?s.y/a.y:0;e.coordinateSystem===Ls||e.reversedDepth?t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hr=new j,Wr=new Bt,Vn=new j,qa=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hr,Wr,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Hr,Wr,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ai=new j,Ih=new Ie,Ph=new Ie,Gt=class extends qa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Ih,Ph),t.subVectors(Ph,Ih)}setViewOffset(e,t,i,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,t-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var El=class extends Wa{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0}},$a=class extends Ha{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new El}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Gs=class extends qa{constructor(e=-1,t=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-e,r=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wl=class extends Wa{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new wl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Es=-90,ws=1,Eo=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(Es,ws,e,t);s.layers=this.layers,this.add(s);let a=new Gt(Es,ws,e,t);a.layers=this.layers,this.add(a);let r=new Gt(Es,ws,e,t);r.layers=this.layers,this.add(r);let o=new Gt(Es,ws,e,t);o.layers=this.layers,this.add(o);let c=new Gt(Es,ws,e,t);c.layers=this.layers,this.add(c);let l=new Gt(Es,ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,a,r,o,c]=t;for(let l of t)this.remove(l);if(e===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},wo=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var tu="\\[\\]\\.:\\/",Im=new RegExp("["+tu+"]","g"),nu="[^"+tu+"]",Pm="[^"+tu.replace("\\.","")+"]",Lm=/((?:WC+[\/:])*)/.source.replace("WC",nu),Nm=/(WCOD+)?/.source.replace("WCOD",Pm),Dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),Um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),Om=new RegExp("^"+Lm+Nm+Dm+Um+"$"),Fm=["material","materials","bones","map"],Cl=class{constructor(e,t,i){let s=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},At=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Im,"")}static parseTrackName(e){let t=Om.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Fm.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,a=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[s];if(r===void 0){let l=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Cl;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Y_=new Float32Array(1);var Lh=new ht,Xa=class{constructor(e,t,i=0,s=1/0){this.ray=new Ea(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lh),this}intersectObject(e,t=!0,i=[]){return Rl(e,this,i,t),i.sort(Nh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,a=e.length;s<a;s++)Rl(e[s],this,i,t);return i.sort(Nh),i}};function Nh(n,e){return n.distance-e.distance}function Rl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let a=n.children;for(let r=0,o=a.length;r<o;r++)Rl(a[r],e,t,!0)}}var Il=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=s,this}};function iu(n,e,t,i){let s=Bm(i);switch(t){case Yl:return n*e;case Uo:return n*e/s.components*s.byteLength;case Oo:return n*e/s.components*s.byteLength;case Ni:return n*e*2/s.components*s.byteLength;case Fo:return n*e*2/s.components*s.byteLength;case Zl:return n*e*3/s.components*s.byteLength;case bn:return n*e*4/s.components*s.byteLength;case Bo:return n*e*4/s.components*s.byteLength;case ja:case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qa:case er:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vo:case Go:return Math.max(n,16)*Math.max(e,8)/4;case zo:case ko:return Math.max(n,8)*Math.max(e,8)/2;case Ho:case Wo:case $o:case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qo:case tr:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lc:case uc:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dc:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case nr:case pc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bm(n){switch(n){case cn:case Wl:return{byteLength:1,components:1};case $s:case ql:case On:return{byteLength:2,components:1};case No:case Do:return{byteLength:2,components:4};case Un:case Lo:case Mn:return{byteLength:4,components:1};case $l:case Xl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Xd(){let n=null,e=!1,t=null,i=null;function s(a,r){i=n.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function qm(n){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],A=h[f];A.start<=g.start+g.count+1?g.count=Math.max(g.count,A.start+A.count-g.start):(++d,h[d]=A)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let A=h[f];n.bufferSubData(l,A.start*u.BYTES_PER_ELEMENT,u,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}var $m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
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
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
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
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e0=`#ifdef USE_BATCHING
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
#endif`,t0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,r0=`#ifdef USE_BUMPMAP
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
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,m0=`#define PI 3.141592653589793
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
} // validated`,g0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v0=`vec3 transformedNormal = objectNormal;
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
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",M0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N0=`#ifdef USE_GRADIENTMAP
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
}`,D0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H0=`PhysicalMaterial material;
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
#endif`,W0=`uniform sampler2D dfgLUT;
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
}`,q0=`
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
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
#endif`,X0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ng=`#if defined( USE_POINTS_UV )
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
#endif`,ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mg=`#ifdef USE_NORMALMAP
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
#endif`,gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pg=`float getShadowMask() {
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
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
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
#endif`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xg=`uniform sampler2D t2D;
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
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
}`,Qg=`#if DEPTH_PACKING == 3200
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
}`,ev=`#define DISTANCE
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
}`,tv=`#define DISTANCE
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
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`uniform float scale;
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
}`,av=`uniform vec3 diffuse;
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
}`,rv=`#include <common>
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
}`,ov=`uniform vec3 diffuse;
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
}`,cv=`#define LAMBERT
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
}`,lv=`#define LAMBERT
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
}`,uv=`#define MATCAP
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
}`,hv=`#define MATCAP
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
}`,dv=`#define NORMAL
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
}`,fv=`#define NORMAL
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
}`,pv=`#define PHONG
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
}`,mv=`#define PHONG
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
}`,gv=`#define STANDARD
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
}`,vv=`#define STANDARD
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
}`,xv=`#define TOON
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
}`,_v=`#define TOON
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
}`,yv=`uniform float size;
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
}`,Av=`uniform vec3 diffuse;
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
}`,Sv=`#include <common>
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
}`,Mv=`uniform vec3 color;
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
}`,bv=`uniform float rotation;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:$m,alphahash_pars_fragment:Xm,alphamap_fragment:Ym,alphamap_pars_fragment:Zm,alphatest_fragment:Jm,alphatest_pars_fragment:jm,aomap_fragment:Km,aomap_pars_fragment:Qm,batching_pars_vertex:e0,batching_vertex:t0,begin_vertex:n0,beginnormal_vertex:i0,bsdfs:s0,iridescence_fragment:a0,bumpmap_pars_fragment:r0,clipping_planes_fragment:o0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:l0,clipping_planes_vertex:u0,color_fragment:h0,color_pars_fragment:d0,color_pars_vertex:f0,color_vertex:p0,common:m0,cube_uv_reflection_fragment:g0,defaultnormal_vertex:v0,displacementmap_pars_vertex:x0,displacementmap_vertex:_0,emissivemap_fragment:y0,emissivemap_pars_fragment:A0,colorspace_fragment:S0,colorspace_pars_fragment:M0,envmap_fragment:b0,envmap_common_pars_fragment:T0,envmap_pars_fragment:E0,envmap_pars_vertex:w0,envmap_physical_pars_fragment:B0,envmap_vertex:C0,fog_vertex:R0,fog_pars_vertex:I0,fog_fragment:P0,fog_pars_fragment:L0,gradientmap_pars_fragment:N0,lightmap_pars_fragment:D0,lights_lambert_fragment:U0,lights_lambert_pars_fragment:O0,lights_pars_begin:F0,lights_toon_fragment:z0,lights_toon_pars_fragment:V0,lights_phong_fragment:k0,lights_phong_pars_fragment:G0,lights_physical_fragment:H0,lights_physical_pars_fragment:W0,lights_fragment_begin:q0,lights_fragment_maps:$0,lights_fragment_end:X0,lightprobes_pars_fragment:Y0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:J0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:K0,map_fragment:Q0,map_pars_fragment:eg,map_particle_fragment:tg,map_particle_pars_fragment:ng,metalnessmap_fragment:ig,metalnessmap_pars_fragment:sg,morphinstance_vertex:ag,morphcolor_vertex:rg,morphnormal_vertex:og,morphtarget_pars_vertex:cg,morphtarget_vertex:lg,normal_fragment_begin:ug,normal_fragment_maps:hg,normal_pars_fragment:dg,normal_pars_vertex:fg,normal_vertex:pg,normalmap_pars_fragment:mg,clearcoat_normal_fragment_begin:gg,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:xg,iridescence_pars_fragment:_g,opaque_fragment:yg,packing:Ag,premultiplied_alpha_fragment:Sg,project_vertex:Mg,dithering_fragment:bg,dithering_pars_fragment:Tg,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Rg,shadowmap_vertex:Ig,shadowmask_pars_fragment:Pg,skinbase_vertex:Lg,skinning_pars_vertex:Ng,skinning_vertex:Dg,skinnormal_vertex:Ug,specularmap_fragment:Og,specularmap_pars_fragment:Fg,tonemapping_fragment:Bg,tonemapping_pars_fragment:zg,transmission_fragment:Vg,transmission_pars_fragment:kg,uv_pars_fragment:Gg,uv_pars_vertex:Hg,uv_vertex:Wg,worldpos_vertex:qg,background_vert:$g,background_frag:Xg,backgroundCube_vert:Yg,backgroundCube_frag:Zg,cube_vert:Jg,cube_frag:jg,depth_vert:Kg,depth_frag:Qg,distance_vert:ev,distance_frag:tv,equirect_vert:nv,equirect_frag:iv,linedashed_vert:sv,linedashed_frag:av,meshbasic_vert:rv,meshbasic_frag:ov,meshlambert_vert:cv,meshlambert_frag:lv,meshmatcap_vert:uv,meshmatcap_frag:hv,meshnormal_vert:dv,meshnormal_frag:fv,meshphong_vert:pv,meshphong_frag:mv,meshphysical_vert:gv,meshphysical_frag:vv,meshtoon_vert:xv,meshtoon_frag:_v,points_vert:yv,points_frag:Av,shadow_vert:Sv,shadow_frag:Mv,sprite_vert:bv,sprite_frag:Tv},Ue={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Yn={basic:{uniforms:Jt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Jt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Jt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Jt([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Jt([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new it(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Jt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Jt([Ue.points,Ue.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Jt([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Jt([Ue.common,Ue.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Jt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Jt([Ue.sprite,Ue.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Jt([Ue.common,Ue.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Jt([Ue.lights,Ue.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Yn.physical={uniforms:Jt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var vc={r:0,b:0,g:0},Ev=new ht,Yd=new nt;Yd.set(-1,0,0,0,1,0,0,0,1);function wv(n,e,t,i,s,a){let r=new it(0),o=s===!0?0:1,c,l,u=null,h=0,d=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let v=y.backgroundBlurriness>0;E=e.get(E,v)}return E}function g(y){let E=!1,v=f(y);v===null?p(r,o):v&&v.isColor&&(p(v,1),E=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(y,E){let v=f(E);v&&(v.isCubeTexture||v.mapping===Za)?(l===void 0&&(l=new vt(new oi(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:is(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Yd),l.material.toneMapped=lt.getTransfer(v.colorSpace)!==mt,(u!==v||h!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new vt(new ci(2,2),new fn({name:"BackgroundMaterial",uniforms:is(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=lt.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,E){y.getRGB(vc,eu(n)),t.buffers.color.setClear(vc.r,vc.g,vc.b,E,a)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,E=1){r.set(y),o=E,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(r,o)},render:g,addToRenderList:A,dispose:m}}function Cv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),a=s,r=!1;function o(z,k,ie,V,Y){let ce=!1,le=h(z,V,ie,k);a!==le&&(a=le,l(a.object)),ce=f(z,V,ie,Y),ce&&g(z,V,ie,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(ce||r)&&(r=!1,v(z,k,ie,V),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function l(z){return n.bindVertexArray(z)}function u(z){return n.deleteVertexArray(z)}function h(z,k,ie,V){let Y=V.wireframe===!0,ce=i[k.id];ce===void 0&&(ce={},i[k.id]=ce);let le=z.isInstancedMesh===!0?z.id:0,se=ce[le];se===void 0&&(se={},ce[le]=se);let W=se[ie.id];W===void 0&&(W={},se[ie.id]=W);let Z=W[Y];return Z===void 0&&(Z=d(c()),W[Y]=Z),Z}function d(z){let k=[],ie=[],V=[];for(let Y=0;Y<t;Y++)k[Y]=0,ie[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ie,attributeDivisors:V,object:z,attributes:{},index:null}}function f(z,k,ie,V){let Y=a.attributes,ce=k.attributes,le=0,se=ie.getAttributes();for(let W in se)if(se[W].location>=0){let N=Y[W],ee=ce[W];if(ee===void 0&&(W==="instanceMatrix"&&z.instanceMatrix&&(ee=z.instanceMatrix),W==="instanceColor"&&z.instanceColor&&(ee=z.instanceColor)),N===void 0||N.attribute!==ee||ee&&N.data!==ee.data)return!0;le++}return a.attributesNum!==le||a.index!==V}function g(z,k,ie,V){let Y={},ce=k.attributes,le=0,se=ie.getAttributes();for(let W in se)if(se[W].location>=0){let N=ce[W];N===void 0&&(W==="instanceMatrix"&&z.instanceMatrix&&(N=z.instanceMatrix),W==="instanceColor"&&z.instanceColor&&(N=z.instanceColor));let ee={};ee.attribute=N,N&&N.data&&(ee.data=N.data),Y[W]=ee,le++}a.attributes=Y,a.attributesNum=le,a.index=V}function A(){let z=a.newAttributes;for(let k=0,ie=z.length;k<ie;k++)z[k]=0}function p(z){m(z,0)}function m(z,k){let ie=a.newAttributes,V=a.enabledAttributes,Y=a.attributeDivisors;ie[z]=1,V[z]===0&&(n.enableVertexAttribArray(z),V[z]=1),Y[z]!==k&&(n.vertexAttribDivisor(z,k),Y[z]=k)}function y(){let z=a.newAttributes,k=a.enabledAttributes;for(let ie=0,V=k.length;ie<V;ie++)k[ie]!==z[ie]&&(n.disableVertexAttribArray(ie),k[ie]=0)}function E(z,k,ie,V,Y,ce,le){le===!0?n.vertexAttribIPointer(z,k,ie,Y,ce):n.vertexAttribPointer(z,k,ie,V,Y,ce)}function v(z,k,ie,V){A();let Y=V.attributes,ce=ie.getAttributes(),le=k.defaultAttributeValues;for(let se in ce){let W=ce[se];if(W.location>=0){let Z=Y[se];if(Z===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(Z=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(Z=z.instanceColor)),Z!==void 0){let N=Z.normalized,ee=Z.itemSize,O=e.get(Z);if(O===void 0)continue;let H=O.buffer,$=O.type,F=O.bytesPerElement,T=$===n.INT||$===n.UNSIGNED_INT||Z.gpuType===Lo;if(Z.isInterleavedBufferAttribute){let M=Z.data,C=M.stride,P=Z.offset;if(M.isInstancedInterleavedBuffer){for(let D=0;D<W.locationSize;D++)m(W.location+D,M.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=M.meshPerAttribute*M.count)}else for(let D=0;D<W.locationSize;D++)p(W.location+D);n.bindBuffer(n.ARRAY_BUFFER,H);for(let D=0;D<W.locationSize;D++)E(W.location+D,ee/W.locationSize,$,N,C*F,(P+ee/W.locationSize*D)*F,T)}else{if(Z.isInstancedBufferAttribute){for(let M=0;M<W.locationSize;M++)m(W.location+M,Z.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let M=0;M<W.locationSize;M++)p(W.location+M);n.bindBuffer(n.ARRAY_BUFFER,H);for(let M=0;M<W.locationSize;M++)E(W.location+M,ee/W.locationSize,$,N,ee*F,ee/W.locationSize*M*F,T)}}else if(le!==void 0){let N=le[se];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(W.location,N);break;case 3:n.vertexAttrib3fv(W.location,N);break;case 4:n.vertexAttrib4fv(W.location,N);break;default:n.vertexAttrib1fv(W.location,N)}}}}y()}function S(){R();for(let z in i){let k=i[z];for(let ie in k){let V=k[ie];for(let Y in V){let ce=V[Y];for(let le in ce)u(ce[le].object),delete ce[le];delete V[Y]}}delete i[z]}}function w(z){if(i[z.id]===void 0)return;let k=i[z.id];for(let ie in k){let V=k[ie];for(let Y in V){let ce=V[Y];for(let le in ce)u(ce[le].object),delete ce[le];delete V[Y]}}delete i[z.id]}function L(z){for(let k in i){let ie=i[k];for(let V in ie){let Y=ie[V];if(Y[z.id]===void 0)continue;let ce=Y[z.id];for(let le in ce)u(ce[le].object),delete ce[le];delete Y[z.id]}}}function _(z){for(let k in i){let ie=i[k],V=z.isInstancedMesh===!0?z.id:0,Y=ie[V];if(Y!==void 0){for(let ce in Y){let le=Y[ce];for(let se in le)u(le[se].object),delete le[se];delete Y[ce]}delete ie[V],Object.keys(ie).length===0&&delete i[k]}}}function R(){U(),r=!0,a!==s&&(a=s,l(a.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:A,enableAttribute:p,disableUnusedAttributes:y}}function Rv(n,e,t){let i;function s(c){i=c}function a(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function r(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Iv(n,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(L){return!(L!==bn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let _=L===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==cn&&L!==Mn&&!_&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(je("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:A,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:v,maxSamples:S,samples:w}}function Pv(n){let e=this,t=null,i=0,s=!1,a=!1,r=new Ln,o=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,A=h.clipIntersection,p=h.clipShadows,m=n.get(h);if(!s||g===null||g.length===0||a&&!p)a?u(null):l();else{let y=a?0:i,E=y*4,v=m.clippingState||null;c.value=v,v=u(g,d,E,f);for(let S=0;S!==E;++S)v[S]=t[S];m.clippingState=v,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){let A=h!==null?h.length:0,p=null;if(A!==0){if(p=c.value,g!==!0||p===null){let m=f+A*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,v=f;E!==A;++E,v+=4)r.copy(h[E]).applyMatrix4(y,o),r.normal.toArray(p,v),p[v+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,p}}var Zs=4,Lv=6,Nv=20,Dv=256,sr=new Gs,Ed=new it,su=null,au=0,ru=0,ou=!1,Uv=new j,ss=new j,js=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){let{size:r=256,position:o=Uv}=a;su=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(su,au,ru),this._renderer.xr.enabled=ou,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),su=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:On,format:bn,colorSpace:_a,depthBuffer:!1},s=wd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wd(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ov(a)),this._blurMaterial=Bv(a,e,t),this._ggxMaterial=Fv(a,e,t)}return s}_compileMaterial(e){let t=new vt(new on,e);this._renderer.compile(t,sr)}_sceneToCubeUV(e,t,i,s,a){let c=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ed),h.toneMapping=Dn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vt(new oi,new wa({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));let A=this._backgroundBox,p=A.material,m=!1,y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,m=!0):(p.color.copy(Ed),m=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(c.up.set(0,l[E],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+u[E],a.y,a.z)):v===1?(c.up.set(0,0,l[E]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+u[E],a.z)):(c.up.set(0,l[E],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+u[E]));let S=this._cubeSize;Ys(s,v*S,E>2?S:0,S,S),h.setRenderTarget(s),m&&h.render(A,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ii||e.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=e;let c=this._cubeSize;Ys(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(r,sr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let c=r.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=l*1.25,f=h*d,{_lodMax:g}=this,A=this._sizeLods[i],p=3*A*(i>g-Zs?i-g+Zs:0),m=4*(this._cubeSize-A);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Ys(a,p,m,3*A,2*A),s.setRenderTarget(a),s.render(o,sr),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=g-i,Ys(e,p,m,3*A,2*A),s.setRenderTarget(e),s.render(o,sr)}_blur(e,t,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,r),this._blurPass(a,e,i,i,r)}_blurPass(e,t,i,s,a){let r=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Zs?s-this._lodMax+Zs:0),d=4*(this._cubeSize-u);Ys(t,h,d,3*u,2*u),r.setRenderTarget(t),r.render(c,sr)}};function Ov(n){let e=[],t=[],i=n,s=n-Zs+1+Lv;for(let a=0;a<s;a++){let r=Math.pow(2,i);e.push(r);let o=1/(r-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,f=3,g=new Float32Array(f*d*h),A=new Float32Array(f*d*h);for(let m=0;m<h;m++){let y=m%3*2/3-1,E=m>2?0:-1,v=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];g.set(v,f*d*m);for(let S=0;S<d;S++){let w=u[S*2]*2-1,L=u[S*2+1]*2-1;m===0?ss.set(1,L,w):m===1?ss.set(-w,1,-L):m===2?ss.set(-w,L,1):m===3?ss.set(-1,L,-w):m===4?ss.set(-w,-1,L):ss.set(w,L,-1),ss.toArray(A,(m*d+S)*f)}}let p=new on;p.setAttribute("position",new Qt(g,f)),p.setAttribute("outputDirection",new Qt(A,f)),t.push(new vt(p,null)),i>Zs&&i--}return{lodMeshes:t,sizeLods:e}}function wd(n,e,t){let i=new rn(n,e,t);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ys(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Fv(n,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Bv(n,e,t){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:Nv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Cd(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Rd(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _c=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ra(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oi(5,5,5),a=new fn({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:$n});a.uniforms.tEquirect.value=t;let r=new vt(s,a),o=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Ht),new Eo(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(a)}};function zv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?r(d):a(d)}function a(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ro||f===Io)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let A=new _c(g.height);return A.fromEquirectangularTexture(n,d),e.set(d,A),d.addEventListener("dispose",l),o(A.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){let f=d.mapping,g=f===Ro||f===Io,A=f===Ii||f===ts;if(g||A){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new js(n)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let y=d.image;return g&&y&&y.height>0||A&&y&&c(y)?(i===null&&(i=new js(n)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,f){return f===Ro?d.mapping=Ii:f===Io&&(d.mapping=ts),d}function c(d){let f=0,g=6;for(let A=0;A<g;A++)d[A]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Vv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Yi("WebGLRenderer: "+i+" extension not supported."),s}}}function kv(n,e,t,i){let s={},a=new WeakMap;function r(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete s[d.id];let f=a.get(d);f&&(e.remove(f),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,g=h.attributes.position,A=0;if(g===void 0)return;if(f!==null){let y=f.array;A=f.version;for(let E=0,v=y.length;E<v;E+=3){let S=y[E+0],w=y[E+1],L=y[E+2];d.push(S,w,w,L,L,S)}}else{let y=g.array;A=g.version;for(let E=0,v=y.length/3-1;E<v;E+=3){let S=E+0,w=E+1,L=E+2;d.push(S,w,w,L,L,S)}}let p=new(g.count>=65535?Ta:ba)(d,1);p.version=A;let m=a.get(h);m&&e.remove(m),a.set(h,p)}function u(h){let d=a.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return a.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Gv(n,e,t){let i;function s(h){i=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function c(h,d){n.drawElements(i,d,a,h*r),t.update(d,i,1)}function l(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,a,h*r,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,a,h,0,f);let A=0;for(let p=0;p<f;p++)A+=d[p];t.update(A,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Hv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:Ke("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Wv(n,e,t){let i=new WeakMap,s=new St;function a(r,o,c){let l=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let R=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),A===!0&&(E=3);let v=o.attributes.position.count*E,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*S*4*h),L=new Sa(w,v,S,h);L.type=Mn,L.needsUpdate=!0;let _=E*4;for(let U=0;U<h;U++){let z=p[U],k=m[U],ie=y[U],V=v*S*4*U;for(let Y=0;Y<z.count;Y++){let ce=Y*_;f===!0&&(s.fromBufferAttribute(z,Y),w[V+ce+0]=s.x,w[V+ce+1]=s.y,w[V+ce+2]=s.z,w[V+ce+3]=0),g===!0&&(s.fromBufferAttribute(k,Y),w[V+ce+4]=s.x,w[V+ce+5]=s.y,w[V+ce+6]=s.z,w[V+ce+7]=0),A===!0&&(s.fromBufferAttribute(ie,Y),w[V+ce+8]=s.x,w[V+ce+9]=s.y,w[V+ce+10]=s.z,w[V+ce+11]=ie.itemSize===4?s.w:1)}}d={count:h,texture:L,size:new Ie(v,S)},i.set(o,d),o.addEventListener("dispose",R)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let f=0;for(let A=0;A<l.length;A++)f+=l[A];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:a}}function qv(n,e,t,i,s){let a=new WeakMap;function r(l){let u=s.render.frame,h=l.geometry,d=e.get(l,h);if(a.get(d)!==u&&(e.update(d),a.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),a.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;a.get(f)!==u&&(f.update(),a.set(f,u))}return d}function o(){a=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}var $v={[Fl]:"LINEAR_TONE_MAPPING",[Bl]:"REINHARD_TONE_MAPPING",[zl]:"CINEON_TONE_MAPPING",[Vl]:"ACES_FILMIC_TONE_MAPPING",[Gl]:"AGX_TONE_MAPPING",[Ya]:"NEUTRAL_TONE_MAPPING",[kl]:"CUSTOM_TONE_MAPPING"};function Xv(n,e,t,i,s,a){let r=new rn(e,t,{type:n,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new on;l.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Et([0,2,0,0,2,0],2));let u=new fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new vt(l,u),d=new Gs(-1,1,1,-1,0,1),f=null,g=null,A=!1,p,m=null,y=[],E=!1;this.setSize=function(v,S){r.setSize(v,S),o!==null&&o.setSize(v,S),c!==null&&c.setSize(v,S);for(let w=0;w<y.length;w++){let L=y[w];L.setSize&&L.setSize(v,S)}},this.setEffects=function(v){y=v,E=y.length>0&&y[0].isRenderPass===!0;let S=r.width,w=r.height;y.length>0&&o===null&&(o=new rn(S,w,{type:On,depthBuffer:!1,stencilBuffer:!1}),c=new rn(S,w,{type:On,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<y.length;L++){let _=y[L];_.setSize&&_.setSize(S,w)}},this.begin=function(v,S){if(A||v.toneMapping===Dn&&y.length===0)return!1;if(m=S,S!==null){let w=S.width,L=S.height;(r.width!==w||r.height!==L)&&this.setSize(w,L)}return E===!1&&v.setRenderTarget(r),p=v.toneMapping,v.toneMapping=Dn,!0},this.hasRenderPass=function(){return E},this.end=function(v,S){v.toneMapping=p,A=!0;let w=r,L=o;for(let _=0;_<y.length;_++){let R=y[_];R.enabled!==!1&&(R.render(v,L,w,S),R.needsSwap!==!1&&(w=L,L=L===o?c:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,u.defines={},lt.getTransfer(f)===mt&&(u.defines.SRGB_TRANSFER="");let _=$v[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(h,d),m=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Zd=new en,uu=new Ti(1,1),Jd=new Sa,jd=new so,Kd=new Ra,Id=[],Pd=[],Ld=new Float32Array(16),Nd=new Float32Array(9),Dd=new Float32Array(4);function Ks(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,a=Id[s];if(a===void 0&&(a=new Float32Array(s),Id[s]=a),e!==0){i.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(a,o)}return a}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sc(n,e){let t=Pd[e];t===void 0&&(t=new Int32Array(e),Pd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Yv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function Jv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function jv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function Kv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,i))return;Dd.set(i),n.uniformMatrix2fv(this.addr,!1,Dd),Nt(t,i)}}function Qv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,i))return;Nd.set(i),n.uniformMatrix3fv(this.addr,!1,Nd),Nt(t,i)}}function e1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,i))return;Ld.set(i),n.uniformMatrix4fv(this.addr,!1,Ld),Nt(t,i)}}function t1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function n1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function i1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function s1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function a1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function r1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function o1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function c1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function l1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(uu.compareFunction=t.isReversedDepthBuffer()?gc:mc,a=uu):a=Zd,t.setTexture2D(e||a,s)}function u1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jd,s)}function h1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Kd,s)}function d1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Jd,s)}function f1(n){switch(n){case 5126:return Yv;case 35664:return Zv;case 35665:return Jv;case 35666:return jv;case 35674:return Kv;case 35675:return Qv;case 35676:return e1;case 5124:case 35670:return t1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return s1;case 5125:return a1;case 36294:return r1;case 36295:return o1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return d1}}function p1(n,e){n.uniform1fv(this.addr,e)}function m1(n,e){let t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function g1(n,e){let t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function v1(n,e){let t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function x1(n,e){let t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _1(n,e){let t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function y1(n,e){let t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function A1(n,e){n.uniform1iv(this.addr,e)}function S1(n,e){n.uniform2iv(this.addr,e)}function M1(n,e){n.uniform3iv(this.addr,e)}function b1(n,e){n.uniform4iv(this.addr,e)}function T1(n,e){n.uniform1uiv(this.addr,e)}function E1(n,e){n.uniform2uiv(this.addr,e)}function w1(n,e){n.uniform3uiv(this.addr,e)}function C1(n,e){n.uniform4uiv(this.addr,e)}function R1(n,e,t){let i=this.cache,s=e.length,a=Sc(t,s);Lt(i,a)||(n.uniform1iv(this.addr,a),Nt(i,a));let r;this.type===n.SAMPLER_2D_SHADOW?r=uu:r=Zd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function I1(n,e,t){let i=this.cache,s=e.length,a=Sc(t,s);Lt(i,a)||(n.uniform1iv(this.addr,a),Nt(i,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||jd,a[r])}function P1(n,e,t){let i=this.cache,s=e.length,a=Sc(t,s);Lt(i,a)||(n.uniform1iv(this.addr,a),Nt(i,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Kd,a[r])}function L1(n,e,t){let i=this.cache,s=e.length,a=Sc(t,s);Lt(i,a)||(n.uniform1iv(this.addr,a),Nt(i,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Jd,a[r])}function N1(n){switch(n){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return v1;case 35674:return x1;case 35675:return _1;case 35676:return y1;case 5124:case 35670:return A1;case 35667:case 35671:return S1;case 35668:case 35672:return M1;case 35669:case 35673:return b1;case 5125:return T1;case 36294:return E1;case 36295:return w1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return L1}}var hu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=f1(t.type)}},du=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N1(t.type)}},fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(e,t[o.id],i)}}},cu=/(\w+)(\])?(\[|\.)?/g;function Ud(n,e){n.seq.push(e),n.map[e.id]=e}function D1(n,e,t){let i=n.name,s=i.length;for(cu.lastIndex=0;;){let a=cu.exec(i),r=cu.lastIndex,o=a[1],c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){Ud(t,l===void 0?new hu(o,n,e):new du(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new fu(o),Ud(t,h)),t=h}}}var Js=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);D1(o,c,this)}let s=[],a=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){let a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,r=t.length;a!==r;++a){let o=t[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,a=e.length;s!==a;++s){let r=e[s];r.id in t&&i.push(r)}return i}};function Od(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var U1=37297,O1=0;function F1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}var Fd=new nt;function B1(n){lt._getMatrix(Fd,lt.workingColorSpace,n);let e=`mat3( ${Fd.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case ya:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+F1(n.getShaderSource(e),o)}else return a}function z1(n,e){let t=B1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var V1={[Fl]:"Linear",[Bl]:"Reinhard",[zl]:"Cineon",[Vl]:"ACESFilmic",[Gl]:"AgX",[Ya]:"Neutral",[kl]:"Custom"};function k1(n,e){let t=V1[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xc=new j;function G1(){lt.getLuminanceCoefficients(xc);let n=xc.x.toFixed(4),e=xc.y.toFixed(4),t=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function W1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function q1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=n.getActiveAttrib(e,s),r=a.name,o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function rr(n){return n!==""}function zd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $1=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(n){return n.replace($1,Y1)}var X1=new Map;function Y1(n,e){let t=at[e];if(t===void 0){let i=X1.get(e);if(i!==void 0)t=at[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return pu(t)}var Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kd(n){return n.replace(Z1,J1)}function J1(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Gd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var j1={[Qi]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function K1(n){return j1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Q1={[Ii]:"ENVMAP_TYPE_CUBE",[ts]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE_UV"};function ex(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Q1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var tx={[ts]:"ENVMAP_MODE_REFRACTION"};function nx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":tx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ix={[Co]:"ENVMAP_BLENDING_MULTIPLY",[td]:"ENVMAP_BLENDING_MIX",[nd]:"ENVMAP_BLENDING_ADD"};function sx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ix[n.combine]||"ENVMAP_BLENDING_NONE"}function ax(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function rx(n,e,t,i){let s=n.getContext(),a=t.defines,r=t.vertexShader,o=t.fragmentShader,c=K1(t),l=ex(t),u=nx(t),h=sx(t),d=ax(t),f=H1(t),g=W1(a),A=s.createProgram(),p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),m.length>0&&(m+=`
`)):(p=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),m=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?at.tonemapping_pars_fragment:"",t.toneMapping!==Dn?k1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,z1("linearToOutputTexel",t.outputColorSpace),G1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),r=pu(r),r=zd(r,t),r=Vd(r,t),o=pu(o),o=zd(o,t),o=Vd(o,t),r=kd(r),o=kd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=y+p+r,v=y+m+o,S=Od(s,s.VERTEX_SHADER,E),w=Od(s,s.FRAGMENT_SHADER,v);s.attachShader(A,S),s.attachShader(A,w),t.index0AttributeName!==void 0?s.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function L(z){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(A)||"",ie=s.getShaderInfoLog(S)||"",V=s.getShaderInfoLog(w)||"",Y=k.trim(),ce=ie.trim(),le=V.trim(),se=!0,W=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,A,S,w);else{let Z=Bd(s,S,"vertex"),N=Bd(s,w,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Y+`
`+Z+`
`+N)}else Y!==""?je("WebGLProgram: Program Info Log:",Y):(ce===""||le==="")&&(W=!1);W&&(z.diagnostics={runnable:se,programLog:Y,vertexShader:{log:ce,prefix:p},fragmentShader:{log:le,prefix:m}})}s.deleteShader(S),s.deleteShader(w),_=new Js(s,A),R=q1(s,A)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(A,U1)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=S,this.fragmentShader=w,this}var ox=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new gu(e),t.set(e,i)),i}},gu=class{constructor(e){this.id=ox++,this.code=e,this.usedTimes=0}};function cx(n){return n===Ni||n===tr||n===nr}function lx(n,e,t,i,s,a){let r=new Os,o=new mu,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function A(_,R,U,z,k,ie){let V=z.fog,Y=k.geometry,ce=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?z.environment:null,le=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,se=e.get(_.envMap||ce,le),W=se&&se.mapping===Za?se.image.height:null,Z=f[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&je("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ee=N!==void 0?N.length:0,O=0;Y.morphAttributes.position!==void 0&&(O=1),Y.morphAttributes.normal!==void 0&&(O=2),Y.morphAttributes.color!==void 0&&(O=3);let H,$,F,T;if(Z){let ut=Yn[Z];H=ut.vertexShader,$=ut.fragmentShader}else{H=_.vertexShader,$=_.fragmentShader;let ut=o.getVertexShaderStage(_),dt=o.getFragmentShaderStage(_);o.update(_,ut,dt),F=ut.id,T=dt.id}let M=n.getRenderTarget(),C=n.state.buffers.depth.getReversed(),P=k.isInstancedMesh===!0,D=k.isBatchedMesh===!0,J=!!_.map,te=!!_.matcap,q=!!se,ae=!!_.aoMap,re=!!_.lightMap,G=!!_.bumpMap&&_.wireframe===!1,X=!!_.normalMap,ve=!!_.displacementMap,Ae=!!_.emissiveMap,Me=!!_.metalnessMap,we=!!_.roughnessMap,B=_.anisotropy>0,ze=_.clearcoat>0,De=_.dispersion>0,I=_.retroreflectivity>0,x=_.iridescence>0,ne=_.sheen>0,oe=_.transmission>0,de=B&&!!_.anisotropyMap,Ee=ze&&!!_.clearcoatMap,Pe=ze&&!!_.clearcoatNormalMap,_e=ze&&!!_.clearcoatRoughnessMap,ye=x&&!!_.iridescenceMap,ge=x&&!!_.iridescenceThicknessMap,Le=ne&&!!_.sheenColorMap,Te=ne&&!!_.sheenRoughnessMap,Ce=!!_.specularMap,ke=!!_.specularColorMap,Ze=!!_.specularIntensityMap,Je=oe&&!!_.transmissionMap,K=oe&&!!_.thicknessMap,be=!!_.gradientMap,xe=!!_.alphaMap,Re=_.alphaTest>0,Ne=!!_.alphaHash,Se=!!_.extensions,Ye=Dn;_.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Ye=n.toneMapping);let We={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:H,fragmentShader:$,defines:_.defines,customVertexShaderID:F,customFragmentShaderID:T,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:D,batchingColor:D&&k._colorsTexture!==null,instancing:P,instancingColor:P&&k.instanceColor!==null,instancingMorph:P&&k.morphTexture!==null,outputColorSpace:M===null?n.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:J,matcap:te,envMap:q,envMapMode:q&&se.mapping,envMapCubeUVHeight:W,aoMap:ae,lightMap:re,bumpMap:G,normalMap:X,displacementMap:ve,emissiveMap:Ae,normalMapObjectSpace:X&&_.normalMapType===ad,normalMapTangentSpace:X&&_.normalMapType===ir,packedNormalMap:X&&_.normalMapType===ir&&cx(_.normalMap.format),metalnessMap:Me,roughnessMap:we,anisotropy:B,anisotropyMap:de,clearcoat:ze,clearcoatMap:Ee,clearcoatNormalMap:Pe,clearcoatRoughnessMap:_e,dispersion:De,retroreflection:I,iridescence:x,iridescenceMap:ye,iridescenceThicknessMap:ge,sheen:ne,sheenColorMap:Le,sheenRoughnessMap:Te,specularMap:Ce,specularColorMap:ke,specularIntensityMap:Ze,transmission:oe,transmissionMap:Je,thicknessMap:K,gradientMap:be,opaque:_.transparent===!1&&_.blending===qs&&_.alphaToCoverage===!1,alphaMap:xe,alphaTest:Re,alphaHash:Ne,combine:_.combine,mapUv:J&&g(_.map.channel),aoMapUv:ae&&g(_.aoMap.channel),lightMapUv:re&&g(_.lightMap.channel),bumpMapUv:G&&g(_.bumpMap.channel),normalMapUv:X&&g(_.normalMap.channel),displacementMapUv:ve&&g(_.displacementMap.channel),emissiveMapUv:Ae&&g(_.emissiveMap.channel),metalnessMapUv:Me&&g(_.metalnessMap.channel),roughnessMapUv:we&&g(_.roughnessMap.channel),anisotropyMapUv:de&&g(_.anisotropyMap.channel),clearcoatMapUv:Ee&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(_.sheenRoughnessMap.channel),specularMapUv:Ce&&g(_.specularMap.channel),specularColorMapUv:ke&&g(_.specularColorMap.channel),specularIntensityMapUv:Ze&&g(_.specularIntensityMap.channel),transmissionMapUv:Je&&g(_.transmissionMap.channel),thicknessMapUv:K&&g(_.thicknessMap.channel),alphaMapUv:xe&&g(_.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(X||B),vertexNormals:!!Y.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(J||xe),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||Y.attributes.normal===void 0&&X===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:C,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:O,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:J&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===mt,decodeVideoTextureEmissive:Ae&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qn,flipSided:_.side===qt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&_.extensions.multiDraw===!0||D)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function p(_){let R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)R.push(U),R.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(m(R,_),y(R,_),R.push(n.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function m(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numSunLights),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numSunLightShadows),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function y(_,R){r.disableAll(),R.instancing&&r.enable(0),R.instancingColor&&r.enable(1),R.instancingMorph&&r.enable(2),R.matcap&&r.enable(3),R.envMap&&r.enable(4),R.normalMapObjectSpace&&r.enable(5),R.normalMapTangentSpace&&r.enable(6),R.clearcoat&&r.enable(7),R.iridescence&&r.enable(8),R.alphaTest&&r.enable(9),R.vertexColors&&r.enable(10),R.vertexAlphas&&r.enable(11),R.vertexUv1s&&r.enable(12),R.vertexUv2s&&r.enable(13),R.vertexUv3s&&r.enable(14),R.vertexTangents&&r.enable(15),R.anisotropy&&r.enable(16),R.alphaHash&&r.enable(17),R.batching&&r.enable(18),R.dispersion&&r.enable(19),R.retroreflection&&r.enable(24),R.batchingColor&&r.enable(20),R.gradientMap&&r.enable(21),R.packedNormalMap&&r.enable(22),R.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),R.fog&&r.enable(0),R.useFog&&r.enable(1),R.flatShading&&r.enable(2),R.logarithmicDepthBuffer&&r.enable(3),R.reversedDepthBuffer&&r.enable(4),R.skinning&&r.enable(5),R.morphTargets&&r.enable(6),R.morphNormals&&r.enable(7),R.morphColors&&r.enable(8),R.premultipliedAlpha&&r.enable(9),R.shadowMapEnabled&&r.enable(10),R.doubleSided&&r.enable(11),R.flipSided&&r.enable(12),R.useDepthPacking&&r.enable(13),R.dithering&&r.enable(14),R.transmission&&r.enable(15),R.sheen&&r.enable(16),R.opaque&&r.enable(17),R.pointsUvs&&r.enable(18),R.decodeVideoTexture&&r.enable(19),R.decodeVideoTextureEmissive&&r.enable(20),R.alphaToCoverage&&r.enable(21),R.numLightProbeGrids>0&&r.enable(22),R.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function E(_){let R=f[_.type],U;if(R){let z=Yn[R];U=Md.clone(z.uniforms)}else U=_.uniforms;return U}function v(_,R){let U=u.get(R);return U!==void 0?++U.usedTimes:(U=new rx(n,R,_,s),l.push(U),u.set(R,U)),U}function S(_){if(--_.usedTimes===0){let R=l.indexOf(_);l[R]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function L(){o.dispose()}return{getParameters:A,getProgramCacheKey:p,getUniforms:E,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:L}}function ux(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,c){n.get(r)[o]=c}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function hx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Hd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wd(){let n=[],e=0,t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function r(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,A,p,m){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:r(d),groupOrder:A,renderOrder:d.renderOrder,z:p,group:m},n[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=r(d),y.groupOrder=A,y.renderOrder=d.renderOrder,y.z=p,y.group=m),e++,y}function c(d,f,g,A,p,m,y){y.reversedDepth===!0&&(p=-p);let E=o(d,f,g,A,p,m);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):t.push(E)}function l(d,f,g,A,p,m){let y=o(d,f,g,A,p,m);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,f){t.length>1&&t.sort(d||hx),i.length>1&&i.sort(f||Hd),s.length>1&&s.sort(f||Hd)}function h(){for(let d=e,f=n.length;d<f;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:c,unshift:l,finish:h,sort:u}}function dx(){let n=new WeakMap;function e(i,s){let a=n.get(i),r;return a===void 0?(r=new Wd,n.set(i,[r])):s>=a.length?(r=new Wd,a.push(r)):r=a[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function fx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new j,color:new it};break;case"SpotLight":t={position:new j,direction:new j,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function px(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var mx=0;function gx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vx(n){let e=new fx,t=px(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new j);let s=new j,a=new ht,r=new ht;function o(l){let u=0,h=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,g=0,A=0,p=0,m=0,y=0,E=0,v=0,S=0,w=0,L=0,_=0,R=0,U=0;l.sort(gx);for(let k=0,ie=l.length;k<ie;k++){let V=l[k],Y=V.color,ce=V.intensity,le=V.distance,se=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ni?se=V.shadow.map.texture:se=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)u+=Y.r*ce,h+=Y.g*ce,d+=Y.b*ce;else if(V.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(V.sh.coefficients[W],ce);U++}else if(V.isSunLight){let W=e.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let Z=V.shadow,N=t.get(V);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[g]=N,i.sunShadowMap[g]=se;let ee=Z.getViewportCount();for(let O=0;O<ee;O++)i.sunShadowMatrix[A+O]=Z.getMatrix(O),i.sunShadowCascade[A+O]=Z._cascadeData[O];A+=ee,g++}i.sun[f]=W,f++}else if(V.isDirectionalLight){let W=e.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let Z=V.shadow,N=t.get(V);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=se,i.directionalShadowMatrix[p]=V.shadow.matrix,S++}i.directional[p]=W,p++}else if(V.isSpotLight){let W=e.get(V);W.position.setFromMatrixPosition(V.matrixWorld),W.color.copy(Y).multiplyScalar(ce),W.distance=le,W.coneCos=Math.cos(V.angle),W.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),W.decay=V.decay,i.spot[y]=W;let Z=V.shadow;if(V.map&&(i.spotLightMap[_]=V.map,_++,Z.updateMatrices(V),V.castShadow&&R++),i.spotLightMatrix[y]=Z.matrix,V.castShadow){let N=t.get(V);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=se,L++}y++}else if(V.isRectAreaLight){let W=e.get(V);W.color.copy(Y).multiplyScalar(ce),W.halfWidth.set(V.width*.5,0,0),W.halfHeight.set(0,V.height*.5,0),i.rectArea[E]=W,E++}else if(V.isPointLight){let W=e.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity),W.distance=V.distance,W.decay=V.decay,V.castShadow){let Z=V.shadow,N=t.get(V);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,i.pointShadow[m]=N,i.pointShadowMap[m]=se,i.pointShadowMatrix[m]=V.shadow.matrix,w++}i.point[m]=W,m++}else if(V.isHemisphereLight){let W=e.get(V);W.skyColor.copy(V.color).multiplyScalar(ce),W.groundColor.copy(V.groundColor).multiplyScalar(ce),i.hemi[v]=W,v++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let z=i.hash;(z.sunLength!==f||z.directionalLength!==p||z.pointLength!==m||z.spotLength!==y||z.rectAreaLength!==E||z.hemiLength!==v||z.numSunShadows!==g||z.numDirectionalShadows!==S||z.numPointShadows!==w||z.numSpotShadows!==L||z.numSpotMaps!==_||z.numLightProbes!==U)&&(i.sun.length=f,i.directional.length=p,i.spot.length=y,i.rectArea.length=E,i.point.length=m,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=A,i.sunShadowCascade.length=A,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=L,i.spotShadowMap.length=L,i.spotLightMatrix.length=L+_-R,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=U,z.sunLength=f,z.directionalLength=p,z.pointLength=m,z.spotLength=y,z.rectAreaLength=E,z.hemiLength=v,z.numSunShadows=g,z.numDirectionalShadows=S,z.numPointShadows=w,z.numSpotShadows=L,z.numSpotMaps=_,z.numLightProbes=U,i.version=mx++)}function c(l,u){let h=0,d=0,f=0,g=0,A=0,p=0,m=u.matrixWorldInverse;for(let y=0,E=l.length;y<E;y++){let v=l[y];if(v.isSunLight){let S=i.sun[h];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),h++}else if(v.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(v.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let S=i.rectArea[A];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),A++}else if(v.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let S=i.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:i}}function qd(n){let e=new vx(n),t=[],i=[],s=[];function a(d){h.camera=d,t.length=0,i.length=0,s.length=0}function r(d){t.push(d)}function o(d){i.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:u,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function xx(n){let e=new WeakMap;function t(s,a=0){let r=e.get(s),o;return r===void 0?(o=new qd(n),e.set(s,[o])):a>=r.length?(o=new qd(n),r.push(o)):o=r[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yx=`uniform sampler2D shadow_pass;
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
}`,Ax=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],Sx=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],$d=new ht,ar=new j,lu=new j;function Mx(n,e,t){let i=new zs,s=new Ie,a=new Ie,r=new St,o=new po,c=new mo,l={},u=t.maxTextureSize,h={[Ri]:qt,[qt]:Ri,[qn]:qn},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:_x,fragmentShader:yx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new on;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new vt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qi;let m=this.type;this.render=function(w,L,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Oh&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qi);let R=n.getRenderTarget(),U=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),k=n.state;k.setBlending($n),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let ie=m!==this.type;ie&&L.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(Y=>Y.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,Y=w.length;V<Y;V++){let ce=w[V],le=ce.shadow;if(le===void 0){je("WebGLShadowMap:",ce,"has no shadow.");continue}if(le.autoUpdate===!1&&le.needsUpdate===!1)continue;s.copy(le.mapSize);let se=le.getFrameExtents();s.multiply(se),a.copy(le.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/se.x),s.x=a.x*se.x,le.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/se.y),s.y=a.y*se.y,le.mapSize.y=a.y));let W=n.state.buffers.depth.getReversed();if(le.camera._reversedDepth=W,le.map===null||ie===!0){if(le.map!==null&&(le.map.depthTexture!==null&&(le.map.depthTexture.dispose(),le.map.depthTexture=null),le.map.dispose()),this.type===Ws){if(ce.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}le.map=new rn(s.x,s.y,{format:Ni,type:On,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),le.map.texture.name=ce.name+".shadowMap",le.map.depthTexture=new Ti(s.x,s.y,Mn),le.map.depthTexture.name=ce.name+".shadowMapDepth",le.map.depthTexture.format=Gn,le.map.depthTexture.compareFunction=null,le.map.depthTexture.minFilter=Ft,le.map.depthTexture.magFilter=Ft}else ce.isPointLight?(le.map=new _c(s.x),le.map.depthTexture=new ao(s.x,Un)):(le.map=new rn(s.x,s.y),le.map.depthTexture=new Ti(s.x,s.y,Un)),le.map.depthTexture.name=ce.name+".shadowMap",le.map.depthTexture.format=Gn,this.type===Qi?(le.map.depthTexture.compareFunction=W?gc:mc,le.map.depthTexture.minFilter=Ht,le.map.depthTexture.magFilter=Ht):(le.map.depthTexture.compareFunction=null,le.map.depthTexture.minFilter=Ft,le.map.depthTexture.magFilter=Ft);le.camera.updateProjectionMatrix()}le.map.isWebGLCubeRenderTarget!==!0&&(le.map.width!==s.x||le.map.height!==s.y)&&le.map.setSize(s.x,s.y);let Z=le.map.isWebGLCubeRenderTarget?6:le.getViewportCount();ce.isPointLight!==!0&&le.updateMatrices(ce,_);for(let N=0;N<Z;N++){let ee=le.getCamera(N);if(ce.isPointLight){let O=le.camera,H=le.matrix,$=ce.distance||O.far;$!==O.far&&(O.far=$,O.updateProjectionMatrix()),ar.setFromMatrixPosition(ce.matrixWorld),O.position.copy(ar),lu.copy(O.position),lu.add(Ax[N]),O.up.copy(Sx[N]),O.lookAt(lu),O.updateMatrixWorld(),H.makeTranslation(-ar.x,-ar.y,-ar.z),$d.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),le._frustum.setFromProjectionMatrix($d,O.coordinateSystem,O.reversedDepth)}if(le.map.isWebGLCubeRenderTarget)n.setRenderTarget(le.map,N),n.clear();else{N===0&&(n.setRenderTarget(le.map),n.clear());let O=le.getViewport(N);r.set(a.x*O.x,a.y*O.y,a.x*O.z,a.y*O.w),k.viewport(r)}i=le.getFrustum(N),v(L,_,ee,ce,this.type)}le.isPointLightShadow!==!0&&this.type===Ws&&y(le,_),le.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(R,U,z)};function y(w,L){let _=e.update(A);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new rn(s.x,s.y,{format:Ni,type:On}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(L,null,_,d,A,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(L,null,_,f,A,null)}function E(w,L,_,R){let U=null,z=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)U=z;else if(U=_.isPointLight===!0?c:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let k=U.uuid,ie=L.uuid,V=l[k];V===void 0&&(V={},l[k]=V);let Y=V[ie];Y===void 0&&(Y=U.clone(),V[ie]=Y,L.addEventListener("dispose",S)),U=Y}if(U.visible=L.visible,U.wireframe=L.wireframe,R===Ws?U.side=L.shadowSide!==null?L.shadowSide:L.side:U.side=L.shadowSide!==null?L.shadowSide:h[L.side],U.alphaMap=L.alphaMap,U.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,U.map=L.map,U.clipShadows=L.clipShadows,U.clippingPlanes=L.clippingPlanes,U.clipIntersection=L.clipIntersection,U.displacementMap=L.displacementMap,U.displacementScale=L.displacementScale,U.displacementBias=L.displacementBias,U.wireframeLinewidth=L.wireframeLinewidth,U.linewidth=L.linewidth,_.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let k=n.properties.get(U);k.light=_}return U}function v(w,L,_,R,U){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===Ws)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let ie=e.update(w),V=w.material;if(Array.isArray(V)){let Y=ie.groups;for(let ce=0,le=Y.length;ce<le;ce++){let se=Y[ce],W=V[se.materialIndex];if(W&&W.visible){let Z=E(w,W,R,U);w.onBeforeShadow(n,w,L,_,ie,Z,se),n.renderBufferDirect(_,null,ie,Z,w,se),w.onAfterShadow(n,w,L,_,ie,Z,se)}}}else if(V.visible){let Y=E(w,V,R,U);w.onBeforeShadow(n,w,L,_,ie,Y,null),n.renderBufferDirect(_,null,ie,Y,w,null),w.onAfterShadow(n,w,L,_,ie,Y,null)}}let k=w.children;for(let ie=0,V=k.length;ie<V;ie++)v(k[ie],L,_,R,U)}function S(w){w.target.removeEventListener("dispose",S);for(let _ in l){let R=l[_],U=w.target.uuid;U in R&&(R[U].dispose(),delete R[U])}}}function bx(n,e){function t(){let K=!1,be=new St,xe=null,Re=new St(0,0,0,0);return{setMask:function(Ne){xe!==Ne&&!K&&(n.colorMask(Ne,Ne,Ne,Ne),xe=Ne)},setLocked:function(Ne){K=Ne},setClear:function(Ne,Se,Ye,We,ut){ut===!0&&(Ne*=We,Se*=We,Ye*=We),be.set(Ne,Se,Ye,We),Re.equals(be)===!1&&(n.clearColor(Ne,Se,Ye,We),Re.copy(be))},reset:function(){K=!1,xe=null,Re.set(-1,0,0,0)}}}function i(){let K=!1,be=!1,xe=null,Re=null,Ne=null;return{setReversed:function(Se){if(be!==Se){let Ye=e.get("EXT_clip_control");Se?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),be=Se;let We=Ne;Ne=null,this.setClear(We)}},getReversed:function(){return be},setTest:function(Se){Se?M(n.DEPTH_TEST):C(n.DEPTH_TEST)},setMask:function(Se){xe!==Se&&!K&&(n.depthMask(Se),xe=Se)},setFunc:function(Se){if(be&&(Se=vd[Se]),Re!==Se){switch(Se){case Xr:n.depthFunc(n.NEVER);break;case Yr:n.depthFunc(n.ALWAYS);break;case Zr:n.depthFunc(n.LESS);break;case Is:n.depthFunc(n.LEQUAL);break;case Jr:n.depthFunc(n.EQUAL);break;case jr:n.depthFunc(n.GEQUAL);break;case Kr:n.depthFunc(n.GREATER);break;case Qr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=Se}},setLocked:function(Se){K=Se},setClear:function(Se){Ne!==Se&&(Ne=Se,be&&(Se=1-Se),n.clearDepth(Se))},reset:function(){K=!1,xe=null,Re=null,Ne=null,be=!1}}}function s(){let K=!1,be=null,xe=null,Re=null,Ne=null,Se=null,Ye=null,We=null,ut=null;return{setTest:function(dt){K||(dt?M(n.STENCIL_TEST):C(n.STENCIL_TEST))},setMask:function(dt){be!==dt&&!K&&(n.stencilMask(dt),be=dt)},setFunc:function(dt,sn,_n){(xe!==dt||Re!==sn||Ne!==_n)&&(n.stencilFunc(dt,sn,_n),xe=dt,Re=sn,Ne=_n)},setOp:function(dt,sn,_n){(Se!==dt||Ye!==sn||We!==_n)&&(n.stencilOp(dt,sn,_n),Se=dt,Ye=sn,We=_n)},setLocked:function(dt){K=dt},setClear:function(dt){ut!==dt&&(n.clearStencil(dt),ut=dt)},reset:function(){K=!1,be=null,xe=null,Re=null,Ne=null,Se=null,Ye=null,We=null,ut=null}}}let a=new t,r=new i,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},d={},f=new WeakMap,g=[],A=null,p=!1,m=null,y=null,E=null,v=null,S=null,w=null,L=null,_=new it(0,0,0),R=0,U=!1,z=null,k=null,ie=null,V=null,Y=null,ce=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),le=!1,se=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(W)[1]),le=se>=1):W.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),le=se>=2);let Z=null,N={},ee=n.getParameter(n.SCISSOR_BOX),O=n.getParameter(n.VIEWPORT),H=new St().fromArray(ee),$=new St().fromArray(O);function F(K,be,xe,Re){let Ne=new Uint8Array(4),Se=n.createTexture();n.bindTexture(K,Se),n.texParameteri(K,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(K,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<xe;Ye++)K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(be+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return Se}let T={};T[n.TEXTURE_2D]=F(n.TEXTURE_2D,n.TEXTURE_2D,1),T[n.TEXTURE_CUBE_MAP]=F(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),T[n.TEXTURE_2D_ARRAY]=F(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),T[n.TEXTURE_3D]=F(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),M(n.DEPTH_TEST),r.setFunc(Is),G(!1),X(Pl),M(n.CULL_FACE),ae($n);function M(K){u[K]!==!0&&(n.enable(K),u[K]=!0)}function C(K){u[K]!==!1&&(n.disable(K),u[K]=!1)}function P(K,be){return d[K]!==be?(n.bindFramebuffer(K,be),d[K]=be,K===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=be),K===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=be),!0):!1}function D(K,be){let xe=g,Re=!1;if(K){xe=f.get(be),xe===void 0&&(xe=[],f.set(be,xe));let Ne=K.textures;if(xe.length!==Ne.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Ye=Ne.length;Se<Ye;Se++)xe[Se]=n.COLOR_ATTACHMENT0+Se;xe.length=Ne.length,Re=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,Re=!0);Re&&n.drawBuffers(xe)}function J(K){return A!==K?(n.useProgram(K),A=K,!0):!1}let te={[es]:n.FUNC_ADD,[Bh]:n.FUNC_SUBTRACT,[zh]:n.FUNC_REVERSE_SUBTRACT};te[Vh]=n.MIN,te[kh]=n.MAX;let q={[Gh]:n.ZERO,[Hh]:n.ONE,[Wh]:n.SRC_COLOR,[Ul]:n.SRC_ALPHA,[Jh]:n.SRC_ALPHA_SATURATE,[Yh]:n.DST_COLOR,[$h]:n.DST_ALPHA,[qh]:n.ONE_MINUS_SRC_COLOR,[Ol]:n.ONE_MINUS_SRC_ALPHA,[Zh]:n.ONE_MINUS_DST_COLOR,[Xh]:n.ONE_MINUS_DST_ALPHA,[jh]:n.CONSTANT_COLOR,[Kh]:n.ONE_MINUS_CONSTANT_COLOR,[Qh]:n.CONSTANT_ALPHA,[ed]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(K,be,xe,Re,Ne,Se,Ye,We,ut,dt){if(K===$n){p===!0&&(C(n.BLEND),p=!1);return}if(p===!1&&(M(n.BLEND),p=!0),K!==Fh){if(K!==m||dt!==U){if((y!==es||S!==es)&&(n.blendEquation(n.FUNC_ADD),y=es,S=es),dt)switch(K){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ll:n.blendFunc(n.ONE,n.ONE);break;case Nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ke("WebGLState: Invalid blending: ",K);break}else switch(K){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ll:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nl:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",K);break}E=null,v=null,w=null,L=null,_.set(0,0,0),R=0,m=K,U=dt}return}Ne=Ne||be,Se=Se||xe,Ye=Ye||Re,(be!==y||Ne!==S)&&(n.blendEquationSeparate(te[be],te[Ne]),y=be,S=Ne),(xe!==E||Re!==v||Se!==w||Ye!==L)&&(n.blendFuncSeparate(q[xe],q[Re],q[Se],q[Ye]),E=xe,v=Re,w=Se,L=Ye),(We.equals(_)===!1||ut!==R)&&(n.blendColor(We.r,We.g,We.b,ut),_.copy(We),R=ut),m=K,U=!1}function re(K,be){K.side===qn?C(n.CULL_FACE):M(n.CULL_FACE);let xe=K.side===qt;be&&(xe=!xe),G(xe),K.blending===qs&&K.transparent===!1?ae($n):ae(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),r.setFunc(K.depthFunc),r.setTest(K.depthTest),r.setMask(K.depthWrite),a.setMask(K.colorWrite);let Re=K.stencilWrite;o.setTest(Re),Re&&(o.setMask(K.stencilWriteMask),o.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),o.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Ae(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?M(n.SAMPLE_ALPHA_TO_COVERAGE):C(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(K){z!==K&&(K?n.frontFace(n.CW):n.frontFace(n.CCW),z=K)}function X(K){K!==Dh?(M(n.CULL_FACE),K!==k&&(K===Pl?n.cullFace(n.BACK):K===Uh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):C(n.CULL_FACE),k=K}function ve(K){K!==ie&&(le&&n.lineWidth(K),ie=K)}function Ae(K,be,xe){K?(M(n.POLYGON_OFFSET_FILL),(V!==be||Y!==xe)&&(V=be,Y=xe,r.getReversed()&&(be=-be),n.polygonOffset(be,xe))):C(n.POLYGON_OFFSET_FILL)}function Me(K){K?M(n.SCISSOR_TEST):C(n.SCISSOR_TEST)}function we(K){K===void 0&&(K=n.TEXTURE0+ce-1),Z!==K&&(n.activeTexture(K),Z=K)}function B(K,be,xe){xe===void 0&&(Z===null?xe=n.TEXTURE0+ce-1:xe=Z);let Re=N[xe];Re===void 0&&(Re={type:void 0,texture:void 0},N[xe]=Re),(Re.type!==K||Re.texture!==be)&&(Z!==xe&&(n.activeTexture(xe),Z=xe),n.bindTexture(K,be||T[K]),Re.type=K,Re.texture=be)}function ze(){let K=N[Z];K!==void 0&&K.type!==void 0&&(n.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function De(){try{n.compressedTexImage2D(...arguments)}catch(K){Ke("WebGLState:",K)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(K){Ke("WebGLState:",K)}}function x(){try{n.texSubImage2D(...arguments)}catch(K){Ke("WebGLState:",K)}}function ne(){try{n.texSubImage3D(...arguments)}catch(K){Ke("WebGLState:",K)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(K){Ke("WebGLState:",K)}}function de(){try{n.compressedTexSubImage3D(...arguments)}catch(K){Ke("WebGLState:",K)}}function Ee(){try{n.texStorage2D(...arguments)}catch(K){Ke("WebGLState:",K)}}function Pe(){try{n.texStorage3D(...arguments)}catch(K){Ke("WebGLState:",K)}}function _e(){try{n.texImage2D(...arguments)}catch(K){Ke("WebGLState:",K)}}function ye(){try{n.texImage3D(...arguments)}catch(K){Ke("WebGLState:",K)}}function ge(K){return h[K]!==void 0?h[K]:n.getParameter(K)}function Le(K,be){h[K]!==be&&(n.pixelStorei(K,be),h[K]=be)}function Te(K){H.equals(K)===!1&&(n.scissor(K.x,K.y,K.z,K.w),H.copy(K))}function Ce(K){$.equals(K)===!1&&(n.viewport(K.x,K.y,K.z,K.w),$.copy(K))}function ke(K,be){let xe=l.get(be);xe===void 0&&(xe=new WeakMap,l.set(be,xe));let Re=xe.get(K);Re===void 0&&(Re=n.getUniformBlockIndex(be,K.name),xe.set(K,Re))}function Ze(K,be){let Re=l.get(be).get(K);c.get(be)!==Re&&(n.uniformBlockBinding(be,Re,K.__bindingPointIndex),c.set(be,Re))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},Z=null,N={},d={},f=new WeakMap,g=[],A=null,p=!1,m=null,y=null,E=null,v=null,S=null,w=null,L=null,_=new it(0,0,0),R=0,U=!1,z=null,k=null,ie=null,V=null,Y=null,H.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:M,disable:C,bindFramebuffer:P,drawBuffers:D,useProgram:J,setBlending:ae,setMaterial:re,setFlipSided:G,setCullFace:X,setLineWidth:ve,setPolygonOffset:Ae,setScissorTest:Me,activeTexture:we,bindTexture:B,unbindTexture:ze,compressedTexImage2D:De,compressedTexImage3D:I,texImage2D:_e,texImage3D:ye,pixelStorei:Le,getParameter:ge,updateUBOMapping:ke,uniformBlockBinding:Ze,texStorage2D:Ee,texStorage3D:Pe,texSubImage2D:x,texSubImage3D:ne,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:Te,viewport:Ce,reset:Je}}function Tx(n,e,t,i,s,a,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,u=new WeakMap,h=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(I,x){return g?new OffscreenCanvas(I,x):Aa("canvas")}function p(I,x,ne){let oe=1,de=De(I);if((de.width>ne||de.height>ne)&&(oe=ne/Math.max(de.width,de.height)),oe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Ee=Math.floor(oe*de.width),Pe=Math.floor(oe*de.height);d===void 0&&(d=A(Ee,Pe));let _e=x?A(Ee,Pe):d;return _e.width=Ee,_e.height=Pe,_e.getContext("2d").drawImage(I,0,0,Ee,Pe),je("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Ee+"x"+Pe+")."),_e}else return"data"in I&&je("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),I;return I}function m(I){return I.generateMipmaps}function y(I){n.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(I,x,ne,oe,de,Ee=!1){if(I!==null){if(n[I]!==void 0)return n[I];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Pe;oe&&(Pe=e.get("EXT_texture_norm16"),Pe||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=x;if(x===n.RED&&(ne===n.FLOAT&&(_e=n.R32F),ne===n.HALF_FLOAT&&(_e=n.R16F),ne===n.UNSIGNED_BYTE&&(_e=n.R8),ne===n.UNSIGNED_SHORT&&Pe&&(_e=Pe.R16_EXT),ne===n.SHORT&&Pe&&(_e=Pe.R16_SNORM_EXT)),x===n.RED_INTEGER&&(ne===n.UNSIGNED_BYTE&&(_e=n.R8UI),ne===n.UNSIGNED_SHORT&&(_e=n.R16UI),ne===n.UNSIGNED_INT&&(_e=n.R32UI),ne===n.BYTE&&(_e=n.R8I),ne===n.SHORT&&(_e=n.R16I),ne===n.INT&&(_e=n.R32I)),x===n.RG&&(ne===n.FLOAT&&(_e=n.RG32F),ne===n.HALF_FLOAT&&(_e=n.RG16F),ne===n.UNSIGNED_BYTE&&(_e=n.RG8),ne===n.UNSIGNED_SHORT&&Pe&&(_e=Pe.RG16_EXT),ne===n.SHORT&&Pe&&(_e=Pe.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(ne===n.UNSIGNED_BYTE&&(_e=n.RG8UI),ne===n.UNSIGNED_SHORT&&(_e=n.RG16UI),ne===n.UNSIGNED_INT&&(_e=n.RG32UI),ne===n.BYTE&&(_e=n.RG8I),ne===n.SHORT&&(_e=n.RG16I),ne===n.INT&&(_e=n.RG32I)),x===n.RGB_INTEGER&&(ne===n.UNSIGNED_BYTE&&(_e=n.RGB8UI),ne===n.UNSIGNED_SHORT&&(_e=n.RGB16UI),ne===n.UNSIGNED_INT&&(_e=n.RGB32UI),ne===n.BYTE&&(_e=n.RGB8I),ne===n.SHORT&&(_e=n.RGB16I),ne===n.INT&&(_e=n.RGB32I)),x===n.RGBA_INTEGER&&(ne===n.UNSIGNED_BYTE&&(_e=n.RGBA8UI),ne===n.UNSIGNED_SHORT&&(_e=n.RGBA16UI),ne===n.UNSIGNED_INT&&(_e=n.RGBA32UI),ne===n.BYTE&&(_e=n.RGBA8I),ne===n.SHORT&&(_e=n.RGBA16I),ne===n.INT&&(_e=n.RGBA32I)),x===n.RGB&&(ne===n.UNSIGNED_SHORT&&Pe&&(_e=Pe.RGB16_EXT),ne===n.SHORT&&Pe&&(_e=Pe.RGB16_SNORM_EXT),ne===n.UNSIGNED_INT_5_9_9_9_REV&&(_e=n.RGB9_E5),ne===n.UNSIGNED_INT_10F_11F_11F_REV&&(_e=n.R11F_G11F_B10F)),x===n.RGBA){let ye=Ee?ya:lt.getTransfer(de);ne===n.FLOAT&&(_e=n.RGBA32F),ne===n.HALF_FLOAT&&(_e=n.RGBA16F),ne===n.UNSIGNED_BYTE&&(_e=ye===mt?n.SRGB8_ALPHA8:n.RGBA8),ne===n.UNSIGNED_SHORT&&Pe&&(_e=Pe.RGBA16_EXT),ne===n.SHORT&&Pe&&(_e=Pe.RGBA16_SNORM_EXT),ne===n.UNSIGNED_SHORT_4_4_4_4&&(_e=n.RGBA4),ne===n.UNSIGNED_SHORT_5_5_5_1&&(_e=n.RGB5_A1)}return(_e===n.R16F||_e===n.R32F||_e===n.RG16F||_e===n.RG32F||_e===n.RGBA16F||_e===n.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function S(I,x){let ne;return I?x===null||x===Un||x===Xs?ne=n.DEPTH24_STENCIL8:x===Mn?ne=n.DEPTH32F_STENCIL8:x===$s&&(ne=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Un||x===Xs?ne=n.DEPTH_COMPONENT24:x===Mn?ne=n.DEPTH_COMPONENT32F:x===$s&&(ne=n.DEPTH_COMPONENT16),ne}function w(I,x){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ft&&I.minFilter!==Ht?Math.log2(Math.max(x.width,x.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?x.mipmaps.length:1}function L(I){let x=I.target;x.removeEventListener("dispose",L),R(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&h.delete(x)}function _(I){let x=I.target;x.removeEventListener("dispose",_),z(x)}function R(I){let x=i.get(I);if(x.__webglInit===void 0)return;let ne=I.source,oe=f.get(ne);if(oe){let de=oe[x.__cacheKey];de.usedTimes--,de.usedTimes===0&&U(I),Object.keys(oe).length===0&&f.delete(ne)}i.remove(I)}function U(I){let x=i.get(I);n.deleteTexture(x.__webglTexture);let ne=I.source,oe=f.get(ne);delete oe[x.__cacheKey],r.memory.textures--}function z(I){let x=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(x.__webglFramebuffer[oe]))for(let de=0;de<x.__webglFramebuffer[oe].length;de++)n.deleteFramebuffer(x.__webglFramebuffer[oe][de]);else n.deleteFramebuffer(x.__webglFramebuffer[oe]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[oe])}else{if(Array.isArray(x.__webglFramebuffer))for(let oe=0;oe<x.__webglFramebuffer.length;oe++)n.deleteFramebuffer(x.__webglFramebuffer[oe]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let oe=0;oe<x.__webglColorRenderbuffer.length;oe++)x.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[oe]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ne=I.textures;for(let oe=0,de=ne.length;oe<de;oe++){let Ee=i.get(ne[oe]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),r.memory.textures--),i.remove(ne[oe])}i.remove(I)}let k=0;function ie(){k=0}function V(){return k}function Y(I){k=I}function ce(){let I=k;return I>=s.maxTextures&&je("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,I}function le(I){let x=[];return x.push(I.wrapS),x.push(I.wrapT),x.push(I.wrapR||0),x.push(I.magFilter),x.push(I.minFilter),x.push(I.anisotropy),x.push(I.internalFormat),x.push(I.format),x.push(I.type),x.push(I.generateMipmaps),x.push(I.premultiplyAlpha),x.push(I.flipY),x.push(I.unpackAlignment),x.push(I.colorSpace),x.join()}function se(I,x){let ne=i.get(I);if(I.isVideoTexture&&B(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ne.__version!==I.version){let oe=I.image;if(oe===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{C(ne,I,x);return}}else I.isExternalTexture&&(ne.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture,n.TEXTURE0+x)}function W(I,x){let ne=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){C(ne,I,x);return}else I.isExternalTexture&&(ne.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ne.__webglTexture,n.TEXTURE0+x)}function Z(I,x){let ne=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){C(ne,I,x);return}t.bindTexture(n.TEXTURE_3D,ne.__webglTexture,n.TEXTURE0+x)}function N(I,x){let ne=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&ne.__version!==I.version){P(ne,I,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture,n.TEXTURE0+x)}let ee={[Ps]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[eo]:n.MIRRORED_REPEAT},O={[Ft]:n.NEAREST,[id]:n.NEAREST_MIPMAP_NEAREST,[Ja]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[Po]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},H={[od]:n.NEVER,[dd]:n.ALWAYS,[cd]:n.LESS,[mc]:n.LEQUAL,[ld]:n.EQUAL,[gc]:n.GEQUAL,[ud]:n.GREATER,[hd]:n.NOTEQUAL};function $(I,x){if(x.type===Mn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ht||x.magFilter===Po||x.magFilter===Ja||x.magFilter===Pi||x.minFilter===Ht||x.minFilter===Po||x.minFilter===Ja||x.minFilter===Pi)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,ee[x.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ee[x.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ee[x.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,O[x.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,O[x.minFilter]),x.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,H[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ft||x.minFilter!==Ja&&x.minFilter!==Pi||x.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let ne=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function F(I,x){let ne=!1;I.__webglInit===void 0&&(I.__webglInit=!0,x.addEventListener("dispose",L));let oe=x.source,de=f.get(oe);de===void 0&&(de={},f.set(oe,de));let Ee=le(x);if(Ee!==I.__cacheKey){de[Ee]===void 0&&(de[Ee]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,ne=!0),de[Ee].usedTimes++;let Pe=de[I.__cacheKey];Pe!==void 0&&(de[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&U(x)),I.__cacheKey=Ee,I.__webglTexture=de[Ee].texture}return ne}function T(I,x,ne){return Math.floor(Math.floor(I/ne)/x)}function M(I,x,ne,oe){let Ee=I.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,ne,oe,x.data);else{Ee.sort((Le,Te)=>Le.start-Te.start);let Pe=0;for(let Le=1;Le<Ee.length;Le++){let Te=Ee[Pe],Ce=Ee[Le],ke=Te.start+Te.count,Ze=T(Ce.start,x.width,4),Je=T(Te.start,x.width,4);Ce.start<=ke+1&&Ze===Je&&T(Ce.start+Ce.count-1,x.width,4)===Ze?Te.count=Math.max(Te.count,Ce.start+Ce.count-Te.start):(++Pe,Ee[Pe]=Ce)}Ee.length=Pe+1;let _e=t.getParameter(n.UNPACK_ROW_LENGTH),ye=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Le=0,Te=Ee.length;Le<Te;Le++){let Ce=Ee[Le],ke=Math.floor(Ce.start/4),Ze=Math.ceil(Ce.count/4),Je=ke%x.width,K=Math.floor(ke/x.width),be=Ze,xe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(n.UNPACK_SKIP_ROWS,K),t.texSubImage2D(n.TEXTURE_2D,0,Je,K,be,xe,ne,oe,x.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,_e),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function C(I,x,ne){let oe=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(oe=n.TEXTURE_3D);let de=F(I,x),Ee=x.source;t.bindTexture(oe,I.__webglTexture,n.TEXTURE0+ne);let Pe=i.get(Ee);if(Ee.version!==Pe.__version||de===!0){if(t.activeTexture(n.TEXTURE0+ne),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let xe=lt.getPrimaries(lt.workingColorSpace),Re=x.colorSpace===li?null:lt.getPrimaries(x.colorSpace),Ne=x.colorSpace===li||xe===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let ye=p(x.image,!1,s.maxTextureSize);ye=ze(x,ye);let ge=a.convert(x.format,x.colorSpace),Le=a.convert(x.type),Te=v(x.internalFormat,ge,Le,x.normalized,x.colorSpace,x.isVideoTexture);$(oe,x);let Ce,ke=x.mipmaps,Ze=x.isVideoTexture!==!0,Je=Pe.__version===void 0||de===!0,K=Ee.dataReady,be=w(x,ye);if(x.isDepthTexture)Te=S(x.format===Li,x.type),Je&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,Te,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,Te,ye.width,ye.height,0,ge,Le,null));else if(x.isDataTexture)if(ke.length>0){Ze&&Je&&t.texStorage2D(n.TEXTURE_2D,be,Te,ke[0].width,ke[0].height);for(let xe=0,Re=ke.length;xe<Re;xe++)Ce=ke[xe],Ze?K&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,ge,Le,Ce.data):t.texImage2D(n.TEXTURE_2D,xe,Te,Ce.width,Ce.height,0,ge,Le,Ce.data);x.generateMipmaps=!1}else Ze?(Je&&t.texStorage2D(n.TEXTURE_2D,be,Te,ye.width,ye.height),K&&M(x,ye,ge,Le)):t.texImage2D(n.TEXTURE_2D,0,Te,ye.width,ye.height,0,ge,Le,ye.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ze&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Te,ke[0].width,ke[0].height,ye.depth);for(let xe=0,Re=ke.length;xe<Re;xe++)if(Ce=ke[xe],x.format!==bn)if(ge!==null)if(Ze){if(K)if(x.layerUpdates.size>0){let Ne=iu(Ce.width,Ce.height,x.format,x.type);for(let Se of x.layerUpdates){let Ye=Ce.data.subarray(Se*Ne/Ce.data.BYTES_PER_ELEMENT,(Se+1)*Ne/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,Se,Ce.width,Ce.height,1,ge,Ye)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ce.width,Ce.height,ye.depth,ge,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Te,Ce.width,Ce.height,ye.depth,0,Ce.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?K&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ce.width,Ce.height,ye.depth,ge,Le,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Te,Ce.width,Ce.height,ye.depth,0,ge,Le,Ce.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ze&&Je&&t.texStorage2D(n.TEXTURE_2D,be,Te,ke[0].width,ke[0].height);for(let xe=0,Re=ke.length;xe<Re;xe++)Ce=ke[xe],x.format!==bn?ge!==null?Ze?K&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,ge,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Te,Ce.width,Ce.height,0,Ce.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?K&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,ge,Le,Ce.data):t.texImage2D(n.TEXTURE_2D,xe,Te,Ce.width,Ce.height,0,ge,Le,Ce.data)}else if(x.isDataArrayTexture)if(Ze){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Te,ye.width,ye.height,ye.depth),K)if(x.layerUpdates.size>0){let xe=iu(ye.width,ye.height,x.format,x.type);for(let Re of x.layerUpdates){let Ne=ye.data.subarray(Re*xe/ye.data.BYTES_PER_ELEMENT,(Re+1)*xe/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,ye.width,ye.height,1,ge,Le,Ne)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ge,Le,ye.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ye.width,ye.height,ye.depth,0,ge,Le,ye.data);else if(x.isData3DTexture)Ze?(Je&&t.texStorage3D(n.TEXTURE_3D,be,Te,ye.width,ye.height,ye.depth),K&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ge,Le,ye.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ye.width,ye.height,ye.depth,0,ge,Le,ye.data);else if(x.isFramebufferTexture){if(Je)if(Ze)t.texStorage2D(n.TEXTURE_2D,be,Te,ye.width,ye.height);else{let xe=ye.width,Re=ye.height;for(let Ne=0;Ne<be;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Te,xe,Re,0,ge,Le,null),xe>>=1,Re>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let xe=n.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),ye.parentNode!==xe){xe.appendChild(ye),h.add(x),xe.onpaint=Re=>{let Ne=Re.changedElements;for(let Se of h)Ne.includes(Se.image)&&(Se.needsUpdate=!0)},xe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ye);else{let Ne=n.RGBA,Se=n.RGBA,Ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ne,Se,Ye,ye)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Ze&&Je){let xe=De(ke[0]);t.texStorage2D(n.TEXTURE_2D,be,Te,xe.width,xe.height)}for(let xe=0,Re=ke.length;xe<Re;xe++)Ce=ke[xe],Ze?K&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,ge,Le,Ce):t.texImage2D(n.TEXTURE_2D,xe,Te,ge,Le,Ce);x.generateMipmaps=!1}else if(Ze){if(Je){let xe=De(ye);t.texStorage2D(n.TEXTURE_2D,be,Te,xe.width,xe.height)}K&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Le,ye)}else t.texImage2D(n.TEXTURE_2D,0,Te,ge,Le,ye);m(x)&&y(oe),Pe.__version=Ee.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function P(I,x,ne){if(x.image.length!==6)return;let oe=F(I,x),de=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+ne);let Ee=i.get(de);if(de.version!==Ee.__version||oe===!0){t.activeTexture(n.TEXTURE0+ne);let Pe=lt.getPrimaries(lt.workingColorSpace),_e=x.colorSpace===li?null:lt.getPrimaries(x.colorSpace),ye=x.colorSpace===li||Pe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ge=x.isCompressedTexture||x.image[0].isCompressedTexture,Le=x.image[0]&&x.image[0].isDataTexture,Te=[];for(let Se=0;Se<6;Se++)!ge&&!Le?Te[Se]=p(x.image[Se],!0,s.maxCubemapSize):Te[Se]=Le?x.image[Se].image:x.image[Se],Te[Se]=ze(x,Te[Se]);let Ce=Te[0],ke=a.convert(x.format,x.colorSpace),Ze=a.convert(x.type),Je=v(x.internalFormat,ke,Ze,x.normalized,x.colorSpace),K=x.isVideoTexture!==!0,be=Ee.__version===void 0||oe===!0,xe=de.dataReady,Re=w(x,Ce);$(n.TEXTURE_CUBE_MAP,x);let Ne;if(ge){K&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Je,Ce.width,Ce.height);for(let Se=0;Se<6;Se++){Ne=Te[Se].mipmaps;for(let Ye=0;Ye<Ne.length;Ye++){let We=Ne[Ye];x.format!==bn?ke!==null?K?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,0,0,We.width,We.height,ke,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,Je,We.width,We.height,0,We.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,0,0,We.width,We.height,ke,Ze,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,Je,We.width,We.height,0,ke,Ze,We.data)}}}else{if(Ne=x.mipmaps,K&&be){Ne.length>0&&Re++;let Se=De(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Je,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Le){K?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Te[Se].width,Te[Se].height,ke,Ze,Te[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Je,Te[Se].width,Te[Se].height,0,ke,Ze,Te[Se].data);for(let Ye=0;Ye<Ne.length;Ye++){let ut=Ne[Ye].image[Se].image;K?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,0,0,ut.width,ut.height,ke,Ze,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,Je,ut.width,ut.height,0,ke,Ze,ut.data)}}else{K?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ke,Ze,Te[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Je,ke,Ze,Te[Se]);for(let Ye=0;Ye<Ne.length;Ye++){let We=Ne[Ye];K?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,0,0,ke,Ze,We.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,Je,ke,Ze,We.image[Se])}}}m(x)&&y(n.TEXTURE_CUBE_MAP),Ee.__version=de.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function D(I,x,ne,oe,de,Ee){let Pe=a.convert(ne.format,ne.colorSpace),_e=a.convert(ne.type),ye=v(ne.internalFormat,Pe,_e,ne.normalized,ne.colorSpace),ge=i.get(x),Le=i.get(ne);if(Le.__renderTarget=x,!ge.__hasExternalTextures){let Te=Math.max(1,x.width>>Ee),Ce=Math.max(1,x.height>>Ee);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,Ee,ye,Te,Ce,x.depth,0,Pe,_e,null):t.texImage2D(de,Ee,ye,Te,Ce,0,Pe,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),we(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,de,Le.__webglTexture,0,Me(x)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,de,Le.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function J(I,x,ne){if(n.bindRenderbuffer(n.RENDERBUFFER,I),x.depthBuffer){let oe=x.depthTexture,de=oe&&oe.isDepthTexture?oe.type:null,Ee=S(x.stencilBuffer,de),Pe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;we(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me(x),Ee,x.width,x.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me(x),Ee,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,I)}else{let oe=x.textures;for(let de=0;de<oe.length;de++){let Ee=oe[de],Pe=a.convert(Ee.format,Ee.colorSpace),_e=a.convert(Ee.type),ye=v(Ee.internalFormat,Pe,_e,Ee.normalized,Ee.colorSpace);we(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me(x),ye,x.width,x.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me(x),ye,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ye,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function te(I,x,ne){let oe=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let de=i.get(x.depthTexture);if(de.__renderTarget=x,(!de.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),oe){if(de.__webglInit===void 0&&(de.__webglInit=!0,x.depthTexture.addEventListener("dispose",L)),de.__webglTexture===void 0){de.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),$(n.TEXTURE_CUBE_MAP,x.depthTexture);let ge=a.convert(x.depthTexture.format),Le=a.convert(x.depthTexture.type),Te;x.depthTexture.format===Gn?Te=n.DEPTH_COMPONENT24:x.depthTexture.format===Li&&(Te=n.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Te,x.width,x.height,0,ge,Le,null)}}else se(x.depthTexture,0);let Ee=de.__webglTexture,Pe=Me(x),_e=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+ne:n.TEXTURE_2D,ye=x.depthTexture.format===Li?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Gn)we(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ye,_e,Ee,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,ye,_e,Ee,0);else if(x.depthTexture.format===Li)we(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ye,_e,Ee,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,ye,_e,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function q(I){let x=i.get(I),ne=I.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==I.depthTexture){let oe=I.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),oe){let de=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,oe.removeEventListener("dispose",de)};oe.addEventListener("dispose",de),x.__depthDisposeCallback=de}x.__boundDepthTexture=oe}if(I.depthTexture&&!x.__autoAllocateDepthBuffer)if(ne)for(let oe=0;oe<6;oe++)te(x.__webglFramebuffer[oe],I,oe);else{let oe=I.texture.mipmaps;oe&&oe.length>0?te(x.__webglFramebuffer[0],I,0):te(x.__webglFramebuffer,I,0)}else if(ne){x.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[oe]),x.__webglDepthbuffer[oe]===void 0)x.__webglDepthbuffer[oe]=n.createRenderbuffer(),J(x.__webglDepthbuffer[oe],I,!1);else{let de=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=x.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,Ee)}}else{let oe=I.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),J(x.__webglDepthbuffer,I,!1);else{let de=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,Ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(I,x,ne){let oe=i.get(I);x!==void 0&&D(oe.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ne!==void 0&&q(I)}function re(I){let x=I.texture,ne=i.get(I),oe=i.get(x);I.addEventListener("dispose",_);let de=I.textures,Ee=I.isWebGLCubeRenderTarget===!0,Pe=de.length>1;if(Pe||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=x.version,r.memory.textures++),Ee){ne.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0){ne.__webglFramebuffer[_e]=[];for(let ye=0;ye<x.mipmaps.length;ye++)ne.__webglFramebuffer[_e][ye]=n.createFramebuffer()}else ne.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){ne.__webglFramebuffer=[];for(let _e=0;_e<x.mipmaps.length;_e++)ne.__webglFramebuffer[_e]=n.createFramebuffer()}else ne.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let _e=0,ye=de.length;_e<ye;_e++){let ge=i.get(de[_e]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),r.memory.textures++)}if(I.samples>0&&we(I)===!1){ne.__webglMultisampledFramebuffer=n.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let _e=0;_e<de.length;_e++){let ye=de[_e];ne.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ne.__webglColorRenderbuffer[_e]);let ge=a.convert(ye.format,ye.colorSpace),Le=a.convert(ye.type),Te=v(ye.internalFormat,ge,Le,ye.normalized,ye.colorSpace,I.isXRRenderTarget===!0),Ce=Me(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Te,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,ne.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(ne.__webglDepthRenderbuffer=n.createRenderbuffer(),J(ne.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),$(n.TEXTURE_CUBE_MAP,x);for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)D(ne.__webglFramebuffer[_e][ye],I,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ye);else D(ne.__webglFramebuffer[_e],I,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(x)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let _e=0,ye=de.length;_e<ye;_e++){let ge=de[_e],Le=i.get(ge),Te=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Te=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,Le.__webglTexture),$(Te,ge),D(ne.__webglFramebuffer,I,ge,n.COLOR_ATTACHMENT0+_e,Te,0),m(ge)&&y(Te)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_e=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,oe.__webglTexture),$(_e,x),x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)D(ne.__webglFramebuffer[ye],I,x,n.COLOR_ATTACHMENT0,_e,ye);else D(ne.__webglFramebuffer,I,x,n.COLOR_ATTACHMENT0,_e,0);m(x)&&y(_e),t.unbindTexture()}I.depthBuffer&&q(I)}function G(I){let x=I.textures;for(let ne=0,oe=x.length;ne<oe;ne++){let de=x[ne];if(m(de)){let Ee=E(I),Pe=i.get(de).__webglTexture;t.bindTexture(Ee,Pe),y(Ee),t.unbindTexture()}}}let X=[],ve=[];function Ae(I){if(I.samples>0){if(we(I)===!1){let x=I.textures,ne=I.width,oe=I.height,de=n.COLOR_BUFFER_BIT,Ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(I),_e=x.length>1;if(_e)for(let ge=0;ge<x.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);let ye=I.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[ge]);let Le=i.get(x[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,ne,oe,0,0,ne,oe,de,n.NEAREST),c===!0&&(X.length=0,ve.length=0,X.push(n.COLOR_ATTACHMENT0+ge),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(X.push(Ee),ve.push(Ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let ge=0;ge<x.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[ge]);let Le=i.get(x[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let x=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Me(I){return Math.min(s.maxSamples,I.samples)}function we(I){let x=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function B(I){let x=r.render.frame;u.get(I)!==x&&(u.set(I,x),I.update())}function ze(I,x){let ne=I.colorSpace,oe=I.format,de=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ne!==_a&&ne!==li&&(lt.getTransfer(ne)===mt?(oe!==bn||de!==cn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",ne)),x}function De(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=ce,this.resetTextureUnits=ie,this.getTextureUnits=V,this.setTextureUnits=Y,this.setTexture2D=se,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=N,this.rebindTextures=ae,this.setupRenderTarget=re,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=D,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ex(n,e){function t(i,s=li){let a,r=lt.getTransfer(s);if(i===cn)return n.UNSIGNED_BYTE;if(i===No)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Do)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$l)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wl)return n.BYTE;if(i===ql)return n.SHORT;if(i===$s)return n.UNSIGNED_SHORT;if(i===Lo)return n.INT;if(i===Un)return n.UNSIGNED_INT;if(i===Mn)return n.FLOAT;if(i===On)return n.HALF_FLOAT;if(i===Yl)return n.ALPHA;if(i===Zl)return n.RGB;if(i===bn)return n.RGBA;if(i===Gn)return n.DEPTH_COMPONENT;if(i===Li)return n.DEPTH_STENCIL;if(i===Uo)return n.RED;if(i===Oo)return n.RED_INTEGER;if(i===Ni)return n.RG;if(i===Fo)return n.RG_INTEGER;if(i===Bo)return n.RGBA_INTEGER;if(i===ja||i===Ka||i===Qa||i===er)if(r===mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ja)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ja)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===er)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zo||i===Vo||i===ko||i===Go)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===zo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ko)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Go)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ho||i===Wo||i===qo||i===$o||i===Xo||i===tr||i===Yo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ho||i===Wo)return r===mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===qo)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===$o)return a.COMPRESSED_R11_EAC;if(i===Xo)return a.COMPRESSED_SIGNED_R11_EAC;if(i===tr)return a.COMPRESSED_RG11_EAC;if(i===Yo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zo||i===Jo||i===jo||i===Ko||i===Qo||i===ec||i===tc||i===nc||i===ic||i===sc||i===ac||i===rc||i===oc||i===cc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Zo)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jo)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jo)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ko)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qo)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ec)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ic)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ac)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lc||i===uc||i===hc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===lc)return r===mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dc||i===fc||i===nr||i===pc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===dc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cx=`
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

}`,vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new fn({vertexShader:wx,fragmentShader:Cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xu=class extends Hn{constructor(e,t){super();let i=this,s=null,a=1,r=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null,A=typeof XRWebGLBinding<"u",p=new vu,m={},y=t.getContextAttributes(),E=null,v=null,S=[],w=[],L=new Ie,_=null,R=null,U=new Gt;U.viewport=new St;let z=new Gt;z.viewport=new St;let k=[U,z],ie=new wo,V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let M=S[T];return M===void 0&&(M=new Fs,S[T]=M),M.getTargetRaySpace()},this.getControllerGrip=function(T){let M=S[T];return M===void 0&&(M=new Fs,S[T]=M),M.getGripSpace()},this.getHand=function(T){let M=S[T];return M===void 0&&(M=new Fs,S[T]=M),M.getHandSpace()};function ce(T){let M=w.indexOf(T.inputSource);if(M===-1)return;let C=S[M];C!==void 0&&(C.update(T.inputSource,T.frame,l||r),C.dispatchEvent({type:T.type,data:T.inputSource}))}function le(){s.removeEventListener("select",ce),s.removeEventListener("selectstart",ce),s.removeEventListener("selectend",ce),s.removeEventListener("squeeze",ce),s.removeEventListener("squeezestart",ce),s.removeEventListener("squeezeend",ce),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",se);for(let T=0;T<S.length;T++){let M=w[T];M!==null&&(w[T]=null,S[T].disconnect(M))}V=null,Y=null,p.reset();for(let T in m)delete m[T];if(e.setRenderTarget(E),f=null,d=null,h=null,s=null,v=null,F.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(L.width,L.height,!1),R!==null){let T=R.camera;T.fov=R.fov,T.zoom=R.zoom,T.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){a=T,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){o=T,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(T){l=T},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&A&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(T){if(s=T,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",ce),s.addEventListener("selectstart",ce),s.addEventListener("selectend",ce),s.addEventListener("squeeze",ce),s.addEventListener("squeezestart",ce),s.addEventListener("squeezeend",ce),s.addEventListener("end",le),s.addEventListener("inputsourceschange",se),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(L),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let C=null,P=null,D=null;y.depth&&(D=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,C=y.stencil?Li:Gn,P=y.stencil?Xs:Un);let J={colorFormat:t.RGBA8,depthFormat:D,scaleFactor:a};h=this.getBinding(),d=h.createProjectionLayer(J),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new rn(d.textureWidth,d.textureHeight,{format:bn,type:cn,depthTexture:new Ti(d.textureWidth,d.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let C={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,C),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new rn(f.framebufferWidth,f.framebufferHeight,{format:bn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),F.setContext(s),F.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function se(T){for(let M=0;M<T.removed.length;M++){let C=T.removed[M],P=w.indexOf(C);P>=0&&(w[P]=null,S[P].disconnect(C))}for(let M=0;M<T.added.length;M++){let C=T.added[M],P=w.indexOf(C);if(P===-1){for(let J=0;J<S.length;J++)if(J>=w.length){w.push(C),P=J;break}else if(w[J]===null){w[J]=C,P=J;break}if(P===-1)break}let D=S[P];D&&D.connect(C)}}let W=new j,Z=new j;function N(T,M,C){W.setFromMatrixPosition(M.matrixWorld),Z.setFromMatrixPosition(C.matrixWorld);let P=W.distanceTo(Z),D=M.projectionMatrix.elements,J=C.projectionMatrix.elements,te=D[14]/(D[10]-1),q=D[14]/(D[10]+1),ae=(D[9]+1)/D[5],re=(D[9]-1)/D[5],G=(D[8]-1)/D[0],X=(J[8]+1)/J[0],ve=te*G,Ae=te*X,Me=P/(-G+X),we=Me*-G;if(M.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(we),T.translateZ(Me),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),D[10]===-1)T.projectionMatrix.copy(M.projectionMatrix),T.projectionMatrixInverse.copy(M.projectionMatrixInverse);else{let B=te+Me,ze=q+Me,De=ve-we,I=Ae+(P-we),x=ae*q/ze*B,ne=re*q/ze*B;T.projectionMatrix.makePerspective(De,I,x,ne,B,ze),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}function ee(T,M){M===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(M.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(s===null)return;let M=T.near,C=T.far;p.texture!==null&&(p.depthNear>0&&(M=p.depthNear),p.depthFar>0&&(C=p.depthFar)),ie.near=z.near=U.near=M,ie.far=z.far=U.far=C,(V!==ie.near||Y!==ie.far)&&(s.updateRenderState({depthNear:ie.near,depthFar:ie.far}),V=ie.near,Y=ie.far),ie.layers.mask=T.layers.mask|6,U.layers.mask=ie.layers.mask&-5,z.layers.mask=ie.layers.mask&-3;let P=T.parent,D=ie.cameras;ee(ie,P);for(let J=0;J<D.length;J++)ee(D[J],P);D.length===2?N(ie,U,z):ie.projectionMatrix.copy(U.projectionMatrix),R===null&&T.isPerspectiveCamera&&(R={camera:T,fov:T.fov,zoom:T.zoom}),O(T,ie,P)};function O(T,M,C){C===null?T.matrix.copy(M.matrixWorld):(T.matrix.copy(C.matrixWorld),T.matrix.invert(),T.matrix.multiply(M.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(M.projectionMatrix),T.projectionMatrixInverse.copy(M.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=Ds*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(T){c=T,d!==null&&(d.fixedFoveation=T),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=T)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(ie)},this.getCameraTexture=function(T){return m[T]};let H=null;function $(T,M){if(u=M.getViewerPose(l||r),g=M,u!==null){let C=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let P=!1;C.length!==ie.cameras.length&&(ie.cameras.length=0,P=!0);for(let q=0;q<C.length;q++){let ae=C[q],re=null;if(f!==null)re=f.getViewport(ae);else{let X=h.getViewSubImage(d,ae);re=X.viewport,q===0&&(e.setRenderTargetTextures(v,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(v))}let G=k[q];G===void 0&&(G=new Gt,G.layers.enable(q),G.viewport=new St,k[q]=G),G.matrix.fromArray(ae.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(ae.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(re.x,re.y,re.width,re.height),q===0&&(ie.matrix.copy(G.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),P===!0&&ie.cameras.push(G)}let D=s.enabledFeatures;if(D&&D.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&A){h=i.getBinding();let q=h.getDepthInformation(C[0]);q&&q.isValid&&q.texture&&p.init(q,s.renderState)}if(D&&D.includes("camera-access")&&A){e.state.unbindTexture(),h=i.getBinding();for(let q=0;q<C.length;q++){let ae=C[q].camera;if(ae){let re=m[ae];re||(re=new Ia,m[ae]=re);let G=h.getCameraImage(ae);re.sourceTexture=G}}}}for(let C=0;C<S.length;C++){let P=w[C],D=S[C];P!==null&&D!==void 0&&D.update(P,M,l||r)}H&&H(T,M),M.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:M}),g=null}let F=new Xd;F.setAnimationLoop($),this.setAnimationLoop=function(T){H=T},this.dispose=function(){}}},Rx=new ht,Qd=new nt;Qd.set(-1,0,0,0,1,0,0,0,1);function Ix(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,eu(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,E,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(p,m):m.isMeshLambertMaterial?(a(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(p,m),h(p,m)):m.isMeshPhongMaterial?(a(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(a(p,m),g(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),A(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,y,E):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=e.get(m),E=y.envMap,v=y.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(Rx.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Qd),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function A(p,m){let y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Px(n,e,t,i){let s={},a={},r=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){let w=S.program;i.uniformBlockBinding(v,w)}function l(v,S){let w=s[v.id];w===void 0&&(p(v),w=u(v),s[v.id]=w,v.addEventListener("dispose",y));let L=S.program;i.updateUBOMapping(v,L);let _=e.render.frame;a[v.id]!==_&&(d(v),a[v.id]=_)}function u(v){let S=h();v.__bindingPointIndex=S;let w=n.createBuffer(),L=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,L,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}function h(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let S=s[v.id],w=v.uniforms,L=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let _=0,R=w.length;_<R;_++){let U=w[_];if(Array.isArray(U))for(let z=0,k=U.length;z<k;z++)f(U[z],_,z,L);else f(U,_,0,L)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,S,w,L){if(A(v,S,w,L)===!0){let _=v.__offset,R=v.value;if(Array.isArray(R)){let U=0;for(let z=0;z<R.length;z++){let k=R[z],ie=m(k);g(k,v.__data,U),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(U+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,v.__data)}}function g(v,S,w){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,w)}function A(v,S,w,L){let _=v.value,R=S+"_"+w;if(L[R]===void 0)return typeof _=="number"||typeof _=="boolean"?L[R]=_:ArrayBuffer.isView(_)?L[R]=_.slice():L[R]=_.clone(),!0;{let U=L[R];if(typeof _=="number"||typeof _=="boolean"){if(U!==_)return L[R]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(U.equals(_)===!1)return U.copy(_),!0}}return!1}function p(v){let S=v.uniforms,w=0,L=16;for(let R=0,U=S.length;R<U;R++){let z=Array.isArray(S[R])?S[R]:[S[R]];for(let k=0,ie=z.length;k<ie;k++){let V=z[k],Y=Array.isArray(V.value)?V.value:[V.value];for(let ce=0,le=Y.length;ce<le;ce++){let se=Y[ce],W=m(se),Z=w%L,N=Z%W.boundary,ee=Z+N;w+=N,ee!==0&&L-ee<W.storage&&(w+=L-ee),V.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=W.storage}}}let _=w%L;return _>0&&(w+=L-_),v.__size=w,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):je("WebGLRenderer: Unsupported uniform value type.",v),S}function y(v){let S=v.target;S.removeEventListener("dispose",y);let w=r.indexOf(S.__bindingPointIndex);r.splice(w,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete a[S.id]}function E(){for(let v in s)n.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:c,update:l,dispose:E}}var Lx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function Nx(){return Xn===null&&(Xn=new Ca(Lx,16,16,Ni,On),Xn.name="DFG_LUT",Xn.minFilter=Ht,Xn.magFilter=Ht,Xn.wrapS=kn,Xn.wrapT=kn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var yc=class{constructor(e={}){let{canvas:t=pd(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=cn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let A=f,p=new Set([Bo,Fo,Oo]),m=new Set([cn,Un,$s,Xs,No,Do]),y=new Uint32Array(4),E=new Int32Array(4),v=new j,S=null,w=null,L=[],_=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,z=!1,k=null,ie=null,V=null,Y=null;this._outputColorSpace=Ot;let ce=0,le=0,se=null,W=-1,Z=null,N=new St,ee=new St,O=null,H=new it(0),$=0,F=t.width,T=t.height,M=1,C=null,P=null,D=new St(0,0,F,T),J=new St(0,0,F,T),te=!1,q=new zs,ae=!1,re=!1,G=new ht,X=new j,ve=new St,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function we(){return se===null?M:1}let B=i;function ze(b,Q){return t.getContext(b,Q)}let De,I,x,ne,oe,de,Ee,Pe,_e,ye,ge,Le,Te,Ce,ke,Ze,Je,K,be,xe,Re,Ne,Se;try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",sn,!1),B===null){let Q="webgl2";if(B=ze(Q,b),B===null)throw ze(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(b){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",sn,!1),Ke("WebGLRenderer: "+b.message),b}function Ye(){De=new Vv(B),De.init(),Re=new Ex(B,De),I=new Iv(B,De,e,Re),x=new bx(B,De),I.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),ie=B.createFramebuffer(),V=B.createFramebuffer(),Y=B.createFramebuffer(),ne=new Hv(B),oe=new ux,de=new Tx(B,De,x,oe,I,Re,ne),Ee=new zv(U),Pe=new qm(B),Ne=new Cv(B,Pe),_e=new kv(B,Pe,ne,Ne),ye=new qv(B,_e,Pe,Ne,ne),K=new Wv(B,I,de),ke=new Pv(oe),ge=new lx(U,Ee,De,I,Ne,ke),Le=new Ix(U,oe),Te=new dx,Ce=new xx(De),Je=new wv(U,Ee,x,ye,g,c),Ze=new Mx(U,ye,I),Se=new Px(B,ne,I,x),be=new Rv(B,De,ne),xe=new Gv(B,De,ne),ne.programs=ge.programs,U.capabilities=I,U.extensions=De,U.properties=oe,U.renderLists=Te,U.shadowMap=Ze,U.state=x,U.info=ne}A!==cn&&(R=new Xv(A,t.width,t.height,o,s,a));let We=new xu(U,B);this.xr=We,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=De.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=De.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(b){b!==void 0&&(M=b,this.setSize(F,T,!1))},this.getSize=function(b){return b.set(F,T)},this.setSize=function(b,Q,pe=!0){if(We.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,T=Q,t.width=Math.floor(b*M),t.height=Math.floor(Q*M),pe===!0&&(t.style.width=b+"px",t.style.height=Q+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,b,Q)},this.getDrawingBufferSize=function(b){return b.set(F*M,T*M).floor()},this.setDrawingBufferSize=function(b,Q,pe){F=b,T=Q,M=pe,t.width=Math.floor(b*pe),t.height=Math.floor(Q*pe),this.setViewport(0,0,b,Q)},this.setEffects=function(b){if(A===cn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let Q=0;Q<b.length;Q++)if(b[Q].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(N)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,Q,pe,ue){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,Q,pe,ue),x.viewport(N.copy(D).multiplyScalar(M).round())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,Q,pe,ue){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,Q,pe,ue),x.scissor(ee.copy(J).multiplyScalar(M).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(b){x.setScissorTest(te=b)},this.setOpaqueSort=function(b){C=b},this.setTransparentSort=function(b){P=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(b=!0,Q=!0,pe=!0){let ue=0;if(b){let he=!1;if(se!==null){let Fe=se.texture.format;he=p.has(Fe)}if(he){let Fe=se.texture.type,He=m.has(Fe),Oe=Je.getClearColor(),qe=Je.getClearAlpha(),Xe=Oe.r,st=Oe.g,ct=Oe.b;He?(y[0]=Xe,y[1]=st,y[2]=ct,y[3]=qe,B.clearBufferuiv(B.COLOR,0,y)):(E[0]=Xe,E[1]=st,E[2]=ct,E[3]=qe,B.clearBufferiv(B.COLOR,0,E))}else ue|=B.COLOR_BUFFER_BIT}Q&&(ue|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(ue|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&B.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),k=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",sn,!1),Je.dispose(),Te.dispose(),Ce.dispose(),oe.dispose(),Ee.dispose(),ye.dispose(),Ne.dispose(),Se.dispose(),ge.dispose(),We.dispose(),We.removeEventListener("sessionstart",Xu),We.removeEventListener("sessionend",Yu),Gi.stop()};function ut(b){b.preventDefault(),jl("WebGLRenderer: Context Lost."),z=!0}function dt(){jl("WebGLRenderer: Context Restored."),z=!1;let b=ne.autoReset,Q=Ze.enabled,pe=Ze.autoUpdate,ue=Ze.needsUpdate,he=Ze.type;Ye(),ne.autoReset=b,Ze.enabled=Q,Ze.autoUpdate=pe,Ze.needsUpdate=ue,Ze.type=he}function sn(b){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function _n(b){let Q=b.target;Q.removeEventListener("dispose",_n),Wc(Q)}function Wc(b){qc(b),oe.remove(b)}function qc(b){let Q=oe.get(b).programs;Q!==void 0&&(Q.forEach(function(pe){ge.releaseProgram(pe)}),b.isShaderMaterial&&ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,Q,pe,ue,he,Fe){Q===null&&(Q=Ae);let He=he.isMesh&&he.matrixWorld.determinantAffine()<0,Oe=fp(b,Q,pe,ue,he);x.setMaterial(ue,He);let qe=pe.index,Xe=1;if(ue.wireframe===!0){if(qe=_e.getWireframeAttribute(pe),qe===void 0)return;Xe=2}let st=pe.drawRange,ct=pe.attributes.position,$e=st.start*Xe,pt=(st.start+st.count)*Xe;Fe!==null&&($e=Math.max($e,Fe.start*Xe),pt=Math.min(pt,(Fe.start+Fe.count)*Xe)),qe!==null?($e=Math.max($e,0),pt=Math.min(pt,qe.count)):ct!=null&&($e=Math.max($e,0),pt=Math.min(pt,ct.count));let Rt=pt-$e;if(Rt<0||Rt===1/0)return;Ne.setup(he,ue,Oe,pe,qe);let yt,xt=be;if(qe!==null&&(yt=Pe.get(qe),xt=xe,xt.setIndex(yt)),he.isMesh)ue.wireframe===!0?(x.setLineWidth(ue.wireframeLinewidth*we()),xt.setMode(B.LINES)):xt.setMode(B.TRIANGLES);else if(he.isLine){let $t=ue.linewidth;$t===void 0&&($t=1),x.setLineWidth($t*we()),he.isLineSegments?xt.setMode(B.LINES):he.isLineLoop?xt.setMode(B.LINE_LOOP):xt.setMode(B.LINE_STRIP)}else he.isPoints?xt.setMode(B.POINTS):he.isSprite&&xt.setMode(B.TRIANGLES);if(he.isBatchedMesh)if(De.get("WEBGL_multi_draw"))xt.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{let $t=he._multiDrawStarts,Ge=he._multiDrawCounts,jt=he._multiDrawCount,ft=qe?Pe.get(qe).bytesPerElement:1,yn=oe.get(ue).currentProgram.getUniforms();for(let zn=0;zn<jt;zn++)yn.setValue(B,"_gl_DrawID",zn),xt.render($t[zn]/ft,Ge[zn])}else if(he.isInstancedMesh)xt.renderInstances($e,Rt,he.count);else if(pe.isInstancedBufferGeometry){let $t=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Ge=Math.min(pe.instanceCount,$t);xt.renderInstances($e,Rt,Ge)}else xt.render($e,Rt)};function $u(b,Q,pe,ue){k!==null&&b.isNodeMaterial&&k.setObject(ue,b),ae===!0&&ke.setState(b,pe,!1),b.transparent===!0&&b.side===qn&&b.forceSinglePass===!1?(b.side=qt,b.needsUpdate=!0,Sr(b,Q,ue),b.side=Ri,b.needsUpdate=!0,Sr(b,Q,ue),b.side=qn):Sr(b,Q,ue)}this.compile=function(b,Q,pe=null){pe===null&&(pe=b),k!==null&&k.renderStart(b,Q,pe),w=Ce.get(pe),w.init(Q),_.push(w),pe.traverseVisible(function(he){he.isLight&&he.layers.test(Q.layers)&&(w.pushLight(he),he.castShadow&&w.pushShadow(he))}),b!==pe&&b.traverseVisible(function(he){he.isLight&&he.layers.test(Q.layers)&&(w.pushLight(he),he.castShadow&&w.pushShadow(he))}),w.setupLights(),k!==null&&k.updateLights(w.state.lightsArray),re=this.localClippingEnabled,ae=ke.init(this.clippingPlanes,re),ae===!0&&ke.setGlobalState(this.clippingPlanes,Q),k!==null&&Ze.render(w.state.shadowsArray,pe,Q);let ue=new Set;return b.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;let Fe=he.material;if(Fe)if(Array.isArray(Fe))for(let He=0;He<Fe.length;He++){let Oe=Fe[He];$u(Oe,pe,Q,he),ue.add(Oe)}else $u(Fe,pe,Q,he),ue.add(Fe)}),w=_.pop(),k!==null&&k.renderEnd(),ue},this.compileAsync=function(b,Q,pe=null){let ue=this.compile(b,Q,pe);return new Promise(he=>{function Fe(){if(ue.forEach(function(He){let qe=oe.get(He).currentProgram;(qe===void 0||qe.isReady())&&ue.delete(He)}),ue.size===0){he(b);return}setTimeout(Fe,10)}De.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let $c=null;function hp(b){$c&&$c(b)}function Xu(){Gi.stop()}function Yu(){Gi.start()}let Gi=new Xd;Gi.setAnimationLoop(hp),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(b){$c=b,We.setAnimationLoop(b),b===null?Gi.stop():Gi.start()},We.addEventListener("sessionstart",Xu),We.addEventListener("sessionend",Yu),this.render=function(b,Q){if(Q!==void 0&&Q.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;k!==null&&k.renderStart(b,Q);let pe=We.enabled===!0&&We.isPresenting===!0,ue=R!==null&&(se===null||pe)&&R.begin(U,se);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(Q),Q=We.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,Q,se),w=Ce.get(b,_.length),w.init(Q),w.state.textureUnits=de.getTextureUnits(),_.push(w),G.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),q.setFromProjectionMatrix(G,Nn,Q.reversedDepth),re=this.localClippingEnabled,ae=ke.init(this.clippingPlanes,re),S=Te.get(b,L.length),S.init(),L.push(S),We.enabled===!0&&We.isPresenting===!0){let He=U.xr.getDepthSensingMesh();He!==null&&Xc(He,Q,-1/0,U.sortObjects)}Xc(b,Q,0,U.sortObjects),S.finish(),k!==null&&k.updateLights(w.state.lightsArray),U.sortObjects===!0&&S.sort(C,P),Me=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Me&&Je.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&ke.beginShadows();let he=w.state.shadowsArray;if(Ze.render(he,b,Q),ae===!0&&ke.endShadows(),(ue&&R.hasRenderPass())===!1){let He=S.opaque,Oe=S.transmissive;if(w.setupLights(),Q.isArrayCamera){let qe=Q.cameras;if(Oe.length>0)for(let Xe=0,st=qe.length;Xe<st;Xe++){let ct=qe[Xe];Ju(He,Oe,b,ct)}Me&&Je.render(b);for(let Xe=0,st=qe.length;Xe<st;Xe++){let ct=qe[Xe];Zu(S,b,ct,ct.viewport)}}else Oe.length>0&&Ju(He,Oe,b,Q),Me&&Je.render(b),Zu(S,b,Q)}se!==null&&le===0&&(de.updateMultisampleRenderTarget(se),de.updateRenderTargetMipmap(se)),ue&&R.end(U),b.isScene===!0&&b.onAfterRender(U,b,Q),Ne.resetDefaultState(),W=-1,Z=null,_.pop(),_.length>0?(w=_[_.length-1],de.setTextureUnits(w.state.textureUnits),ae===!0&&ke.setGlobalState(U.clippingPlanes,w.state.camera)):w=null,L.pop(),L.length>0?S=L[L.length-1]:S=null,k!==null&&k.renderEnd()};function Xc(b,Q,pe,ue){if(b.visible===!1)return;if(b.layers.test(Q.layers)){if(b.isGroup)pe=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Q);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(q)){ue&&ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(G);let He=ye.update(b),Oe=b.material;Oe.visible&&S.push(b,He,Oe,pe,ve.z,null,Q)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(q))){let He=ye.update(b),Oe=b.material;if(ue&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ve.copy(b.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ve.copy(He.boundingSphere.center)),ve.applyMatrix4(b.matrixWorld).applyMatrix4(G)),Array.isArray(Oe)){let qe=He.groups;for(let Xe=0,st=qe.length;Xe<st;Xe++){let ct=qe[Xe],$e=Oe[ct.materialIndex];$e&&$e.visible&&S.push(b,He,$e,pe,ve.z,ct,Q)}}else Oe.visible&&S.push(b,He,Oe,pe,ve.z,null,Q)}}let Fe=b.children;for(let He=0,Oe=Fe.length;He<Oe;He++)Xc(Fe[He],Q,pe,ue)}function Zu(b,Q,pe,ue){let{opaque:he,transmissive:Fe,transparent:He}=b;w.setupLightsView(pe),ae===!0&&ke.setGlobalState(U.clippingPlanes,pe),ue&&x.viewport(N.copy(ue)),he.length>0&&Ar(he,Q,pe),Fe.length>0&&Ar(Fe,Q,pe),He.length>0&&Ar(He,Q,pe),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Ju(b,Q,pe,ue){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ue.id]===void 0){let $e=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ue.id]=new rn(1,1,{generateMipmaps:!0,type:$e?On:cn,minFilter:Pi,samples:Math.max(4,I.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Fe=w.state.transmissionRenderTarget[ue.id],He=ue.viewport||N;Fe.setSize(He.z*U.transmissionResolutionScale,He.w*U.transmissionResolutionScale);let Oe=U.getRenderTarget(),qe=U.getActiveCubeFace(),Xe=U.getActiveMipmapLevel();U.setRenderTarget(Fe),U.getClearColor(H),$=U.getClearAlpha(),$<1&&U.setClearColor(16777215,.5),U.clear(),Me&&Je.render(pe);let st=U.toneMapping;U.toneMapping=Dn;let ct=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),w.setupLightsView(ue),ae===!0&&ke.setGlobalState(U.clippingPlanes,ue),Ar(b,pe,ue),de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe),De.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let pt=0,Rt=Q.length;pt<Rt;pt++){let yt=Q[pt],{object:xt,geometry:$t,material:Ge,group:jt}=yt;if(Ge.side===qn&&xt.layers.test(ue.layers)){let ft=Ge.side;Ge.side=qt,Ge.needsUpdate=!0,ju(xt,pe,ue,$t,Ge,jt),Ge.side=ft,Ge.needsUpdate=!0,$e=!0}}$e===!0&&(de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe))}U.setRenderTarget(Oe,qe,Xe),U.setClearColor(H,$),ct!==void 0&&(ue.viewport=ct),U.toneMapping=st}function Ar(b,Q,pe){let ue=Q.isScene===!0?Q.overrideMaterial:null;for(let he=0,Fe=b.length;he<Fe;he++){let He=b[he],{object:Oe,geometry:qe,group:Xe}=He,st=He.material;st.allowOverride===!0&&ue!==null&&(st=ue),Oe.layers.test(pe.layers)&&ju(Oe,Q,pe,qe,st,Xe)}}function ju(b,Q,pe,ue,he,Fe){k!==null&&he.isNodeMaterial&&k.setObject(b,he),b.onBeforeRender(U,Q,pe,ue,he,Fe),b.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),he.onBeforeRender(U,Q,pe,ue,b,Fe),he.transparent===!0&&he.side===qn&&he.forceSinglePass===!1?(he.side=qt,he.needsUpdate=!0,U.renderBufferDirect(pe,Q,ue,he,b,Fe),he.side=Ri,he.needsUpdate=!0,U.renderBufferDirect(pe,Q,ue,he,b,Fe),he.side=qn):U.renderBufferDirect(pe,Q,ue,he,b,Fe),b.onAfterRender(U,Q,pe,ue,he,Fe)}function Sr(b,Q,pe){Q.isScene!==!0&&(Q=Ae);let ue=oe.get(b),he=w.state.lights,Fe=w.state.shadowsArray,He=he.state.version,Oe=ge.getParameters(b,he.state,Fe,Q,pe,w.state.lightProbeGridArray),qe=ge.getProgramCacheKey(Oe),Xe=ue.programs;ue.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?Q.environment:null,ue.fog=Q.fog;let st=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ue.envMap=Ee.get(b.envMap||ue.environment,st),ue.envMapRotation=ue.environment!==null&&b.envMap===null?Q.environmentRotation:b.envMapRotation,Xe===void 0&&(b.addEventListener("dispose",_n),Xe=new Map,ue.programs=Xe);let ct=Xe.get(qe);if(ct!==void 0){if(ue.currentProgram===ct&&ue.lightsStateVersion===He)return Qu(b,Oe),ct}else Oe.uniforms=ge.getUniforms(b),k!==null&&b.isNodeMaterial&&k.build(b,pe,Oe),b.onBeforeCompile(Oe,U),ct=ge.acquireProgram(Oe,qe),Xe.set(qe,ct),ue.uniforms=Oe.uniforms;let $e=ue.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&($e.clippingPlanes=ke.uniform),Qu(b,Oe),ue.needsLights=mp(b),ue.lightsStateVersion=He,ue.needsLights&&($e.ambientLightColor.value=he.state.ambient,$e.lightProbe.value=he.state.probe,$e.sunLights.value=he.state.sun,$e.sunLightShadows.value=he.state.sunShadow,$e.directionalLights.value=he.state.directional,$e.directionalLightShadows.value=he.state.directionalShadow,$e.spotLights.value=he.state.spot,$e.spotLightShadows.value=he.state.spotShadow,$e.rectAreaLights.value=he.state.rectArea,$e.ltc_1.value=he.state.rectAreaLTC1,$e.ltc_2.value=he.state.rectAreaLTC2,$e.pointLights.value=he.state.point,$e.pointLightShadows.value=he.state.pointShadow,$e.hemisphereLights.value=he.state.hemi,$e.sunShadowMatrix.value=he.state.sunShadowMatrix,$e.sunShadowCascade.value=he.state.sunShadowCascade,$e.directionalShadowMatrix.value=he.state.directionalShadowMatrix,$e.spotLightMatrix.value=he.state.spotLightMatrix,$e.spotLightMap.value=he.state.spotLightMap,$e.pointShadowMatrix.value=he.state.pointShadowMatrix),ue.lightProbeGrid=w.state.lightProbeGridArray.length>0,ue.currentProgram=ct,ue.uniformsList=null,ct}function Ku(b){if(b.uniformsList===null){let Q=b.currentProgram.getUniforms();b.uniformsList=Js.seqWithValue(Q.seq,b.uniforms)}return b.uniformsList}function Qu(b,Q){let pe=oe.get(b);pe.outputColorSpace=Q.outputColorSpace,pe.batching=Q.batching,pe.batchingColor=Q.batchingColor,pe.instancing=Q.instancing,pe.instancingColor=Q.instancingColor,pe.instancingMorph=Q.instancingMorph,pe.skinning=Q.skinning,pe.morphTargets=Q.morphTargets,pe.morphNormals=Q.morphNormals,pe.morphColors=Q.morphColors,pe.morphTargetsCount=Q.morphTargetsCount,pe.numClippingPlanes=Q.numClippingPlanes,pe.numIntersection=Q.numClipIntersection,pe.vertexAlphas=Q.vertexAlphas,pe.vertexTangents=Q.vertexTangents,pe.toneMapping=Q.toneMapping}function dp(b,Q){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(Q.matrixWorld);for(let pe=0,ue=b.length;pe<ue;pe++){let he=b[pe];if(he.texture!==null&&he.boundingBox.containsPoint(v))return he}return null}function fp(b,Q,pe,ue,he){Q.isScene!==!0&&(Q=Ae),de.resetTextureUnits();let Fe=Q.fog,He=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?Q.environment:null,Oe=se===null?U.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:lt.workingColorSpace,qe=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,Xe=Ee.get(ue.envMap||He,qe),st=ue.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,ct=!!pe.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),$e=!!pe.morphAttributes.position,pt=!!pe.morphAttributes.normal,Rt=!!pe.morphAttributes.color,yt=Dn;ue.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(yt=U.toneMapping);let xt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,$t=xt!==void 0?xt.length:0,Ge=oe.get(ue),jt=w.state.lights;if(ae===!0&&(re===!0||b!==Z)){let _t=b===Z&&ue.id===W;ke.setState(ue,b,_t)}let ft=!1;ue.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==jt.state.version||Ge.outputColorSpace!==Oe||he.isBatchedMesh&&Ge.batching===!1||!he.isBatchedMesh&&Ge.batching===!0||he.isBatchedMesh&&Ge.batchingColor===!0&&he._colorsTexture===null||he.isBatchedMesh&&Ge.batchingColor===!1&&he._colorsTexture!==null||he.isInstancedMesh&&Ge.instancing===!1||!he.isInstancedMesh&&Ge.instancing===!0||he.isSkinnedMesh&&Ge.skinning===!1||!he.isSkinnedMesh&&Ge.skinning===!0||he.isInstancedMesh&&Ge.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&Ge.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&Ge.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&Ge.instancingMorph===!1&&he.morphTexture!==null||Ge.envMap!==Xe||ue.fog===!0&&Ge.fog!==Fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ke.numPlanes||Ge.numIntersection!==ke.numIntersection)||Ge.vertexAlphas!==st||Ge.vertexTangents!==ct||Ge.morphTargets!==$e||Ge.morphNormals!==pt||Ge.morphColors!==Rt||Ge.toneMapping!==yt||Ge.morphTargetsCount!==$t||!!Ge.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Ge.__version=ue.version);let yn=Ge.currentProgram;ft===!0&&(yn=Sr(ue,Q,he),k&&ue.isNodeMaterial&&k.onUpdateProgram(ue,yn,Ge));let zn=!1,pi=!1,ds=!1,gt=yn.getUniforms(),Tt=Ge.uniforms;if(x.useProgram(yn.program)&&(zn=!0,pi=!0,ds=!0),ue.id!==W&&(W=ue.id,pi=!0),Ge.needsLights){let _t=dp(w.state.lightProbeGridArray,he);Ge.lightProbeGrid!==_t&&(Ge.lightProbeGrid=_t,pi=!0)}if(zn||Z!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),gt.setValue(B,"projectionMatrix",b.projectionMatrix),gt.setValue(B,"viewMatrix",b.matrixWorldInverse);let gi=gt.map.cameraPosition;gi!==void 0&&gi.setValue(B,X.setFromMatrixPosition(b.matrixWorld)),I.logarithmicDepthBuffer&&gt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&gt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),Z!==b&&(Z=b,pi=!0,ds=!0)}if(Ge.needsLights&&(jt.state.sunShadowMap.length>0&&gt.setValue(B,"sunShadowMap",jt.state.sunShadowMap,de),jt.state.directionalShadowMap.length>0&&gt.setValue(B,"directionalShadowMap",jt.state.directionalShadowMap,de),jt.state.spotShadowMap.length>0&&gt.setValue(B,"spotShadowMap",jt.state.spotShadowMap,de),jt.state.pointShadowMap.length>0&&gt.setValue(B,"pointShadowMap",jt.state.pointShadowMap,de)),he.isSkinnedMesh){gt.setOptional(B,he,"bindMatrix"),gt.setOptional(B,he,"bindMatrixInverse");let _t=he.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),gt.setValue(B,"boneTexture",_t.boneTexture,de))}he.isBatchedMesh&&(gt.setOptional(B,he,"batchingTexture"),gt.setValue(B,"batchingTexture",he._matricesTexture,de),gt.setOptional(B,he,"batchingIdTexture"),gt.setValue(B,"batchingIdTexture",he._indirectTexture,de),gt.setOptional(B,he,"batchingColorTexture"),he._colorsTexture!==null&&gt.setValue(B,"batchingColorTexture",he._colorsTexture,de));let mi=pe.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&K.update(he,pe,yn),(pi||Ge.receiveShadow!==he.receiveShadow)&&(Ge.receiveShadow=he.receiveShadow,gt.setValue(B,"receiveShadow",he.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&Q.environment!==null&&(Tt.envMapIntensity.value=Q.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=Nx()),pi){if(gt.setValue(B,"toneMappingExposure",U.toneMappingExposure),Ge.needsLights&&pp(Tt,ds),Fe&&ue.fog===!0&&Le.refreshFogUniforms(Tt,Fe),Le.refreshMaterialUniforms(Tt,ue,M,T,w.state.transmissionRenderTarget[b.id]),Ge.needsLights&&Ge.lightProbeGrid){let _t=Ge.lightProbeGrid;Tt.probesSH.value=_t.texture,Tt.probesMin.value.copy(_t.boundingBox.min),Tt.probesMax.value.copy(_t.boundingBox.max),Tt.probesResolution.value.copy(_t.resolution)}Js.upload(B,Ku(Ge),Tt,de)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Js.upload(B,Ku(Ge),Tt,de),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&gt.setValue(B,"center",he.center),gt.setValue(B,"modelViewMatrix",he.modelViewMatrix),gt.setValue(B,"normalMatrix",he.normalMatrix),gt.setValue(B,"modelMatrix",he.matrixWorld),ue.uniformsGroups!==void 0){let _t=ue.uniformsGroups;for(let gi=0,fs=_t.length;gi<fs;gi++){let th=_t[gi];Se.update(th,yn),Se.bind(th,yn)}}return yn}function pp(b,Q){b.ambientLightColor.needsUpdate=Q,b.lightProbe.needsUpdate=Q,b.sunLights.needsUpdate=Q,b.sunLightShadows.needsUpdate=Q,b.directionalLights.needsUpdate=Q,b.directionalLightShadows.needsUpdate=Q,b.pointLights.needsUpdate=Q,b.pointLightShadows.needsUpdate=Q,b.spotLights.needsUpdate=Q,b.spotLightShadows.needsUpdate=Q,b.rectAreaLights.needsUpdate=Q,b.hemisphereLights.needsUpdate=Q}function mp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(b,Q,pe){let ue=oe.get(b);ue.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),oe.get(b.texture).__webglTexture=Q,oe.get(b.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:pe,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Q){let pe=oe.get(b);pe.__webglFramebuffer=Q,pe.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(b,Q=0,pe=0){se=b,ce=Q,le=pe;let ue=null,he=!1,Fe=!1;if(b){let Oe=oe.get(b);if(Oe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(B.FRAMEBUFFER,Oe.__webglFramebuffer),N.copy(b.viewport),ee.copy(b.scissor),O=b.scissorTest,x.viewport(N),x.scissor(ee),x.setScissorTest(O),W=-1;return}else if(Oe.__webglFramebuffer===void 0)de.setupRenderTarget(b);else if(Oe.__hasExternalTextures)de.rebindTextures(b,oe.get(b.texture).__webglTexture,oe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let st=b.depthTexture;if(Oe.__boundDepthTexture!==st){if(st!==null&&oe.has(st)&&(b.width!==st.image.width||b.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(b)}}let qe=b.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Fe=!0);let Xe=oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xe[Q])?ue=Xe[Q][pe]:ue=Xe[Q],he=!0):b.samples>0&&de.useMultisampledRTT(b)===!1?ue=oe.get(b).__webglMultisampledFramebuffer:Array.isArray(Xe)?ue=Xe[pe]:ue=Xe,N.copy(b.viewport),ee.copy(b.scissor),O=b.scissorTest}else N.copy(D).multiplyScalar(M).floor(),ee.copy(J).multiplyScalar(M).floor(),O=te;if(pe!==0&&(ue=ie),x.bindFramebuffer(B.FRAMEBUFFER,ue)&&x.drawBuffers(b,ue),x.viewport(N),x.scissor(ee),x.setScissorTest(O),he){let Oe=oe.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Oe.__webglTexture,pe)}else if(Fe){let Oe=Q;for(let qe=0;qe<b.textures.length;qe++){let Xe=oe.get(b.textures[qe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+qe,Xe.__webglTexture,pe,Oe)}}else if(b!==null&&pe!==0){let Oe=oe.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oe.__webglTexture,pe)}W=-1};function eh(b){let Q=oe.get(b);return(Q.__readFormat!==b.format||Q.__readType!==b.type)&&(Q.__readFormat=b.format,Q.__readType=b.type,Q.__formatReadable=I.textureFormatReadable(b.format),Q.__typeReadable=I.textureTypeReadable(b.type)),Q}this.readRenderTargetPixels=function(b,Q,pe,ue,he,Fe,He,Oe=0){if(!(b&&b.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe){x.bindFramebuffer(B.FRAMEBUFFER,qe);try{let Xe=b.textures[Oe],st=Xe.format,ct=Xe.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Oe);let $e=eh(Xe);if($e.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=b.width-ue&&pe>=0&&pe<=b.height-he&&B.readPixels(Q,pe,ue,he,Re.convert(st),Re.convert(ct),Fe)}finally{let Xe=se!==null?oe.get(se).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(b,Q,pe,ue,he,Fe,He,Oe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe)if(Q>=0&&Q<=b.width-ue&&pe>=0&&pe<=b.height-he){x.bindFramebuffer(B.FRAMEBUFFER,qe);let Xe=b.textures[Oe],st=Xe.format,ct=Xe.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Oe);let $e=eh(Xe);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,pt),B.bufferData(B.PIXEL_PACK_BUFFER,Fe.byteLength,B.STREAM_READ),B.readPixels(Q,pe,ue,he,Re.convert(st),Re.convert(ct),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Rt=se!==null?oe.get(se).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,Rt);let yt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await gd(B,yt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,pt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Fe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(pt),B.deleteSync(yt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Q=null,pe=0){let ue=Math.pow(2,-pe),he=Math.floor(b.image.width*ue),Fe=Math.floor(b.image.height*ue),He=Q!==null?Q.x:0,Oe=Q!==null?Q.y:0;de.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,pe,0,0,He,Oe,he,Fe),x.unbindTexture()},this.copyTextureToTexture=function(b,Q,pe=null,ue=null,he=0,Fe=0){let He,Oe,qe,Xe,st,ct,$e,pt,Rt,yt=b.isCompressedTexture?b.mipmaps[Fe]:b.image;if(pe!==null)He=pe.max.x-pe.min.x,Oe=pe.max.y-pe.min.y,qe=pe.isBox3?pe.max.z-pe.min.z:1,Xe=pe.min.x,st=pe.min.y,ct=pe.isBox3?pe.min.z:0;else{let Tt=Math.pow(2,-he);He=Math.floor(yt.width*Tt),Oe=Math.floor(yt.height*Tt),b.isDataArrayTexture?qe=yt.depth:b.isData3DTexture?qe=Math.floor(yt.depth*Tt):qe=1,Xe=0,st=0,ct=0}ue!==null?($e=ue.x,pt=ue.y,Rt=ue.z):($e=0,pt=0,Rt=0);let xt=Re.convert(Q.format),$t=Re.convert(Q.type),Ge;Q.isData3DTexture?(de.setTexture3D(Q,0),Ge=B.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(de.setTexture2DArray(Q,0),Ge=B.TEXTURE_2D_ARRAY):(de.setTexture2D(Q,0),Ge=B.TEXTURE_2D),x.activeTexture(B.TEXTURE0),x.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Q.flipY),x.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),x.pixelStorei(B.UNPACK_ALIGNMENT,Q.unpackAlignment);let jt=x.getParameter(B.UNPACK_ROW_LENGTH),ft=x.getParameter(B.UNPACK_IMAGE_HEIGHT),yn=x.getParameter(B.UNPACK_SKIP_PIXELS),zn=x.getParameter(B.UNPACK_SKIP_ROWS),pi=x.getParameter(B.UNPACK_SKIP_IMAGES);x.pixelStorei(B.UNPACK_ROW_LENGTH,yt.width),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yt.height),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Xe),x.pixelStorei(B.UNPACK_SKIP_ROWS,st),x.pixelStorei(B.UNPACK_SKIP_IMAGES,ct);let ds=b.isDataArrayTexture||b.isData3DTexture,gt=Q.isDataArrayTexture||Q.isData3DTexture;if(b.isDepthTexture){let Tt=oe.get(b),mi=oe.get(Q),_t=oe.get(Tt.__renderTarget),gi=oe.get(mi.__renderTarget);x.bindFramebuffer(B.READ_FRAMEBUFFER,_t.__webglFramebuffer),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let fs=0;fs<qe;fs++)ds&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,oe.get(b).__webglTexture,he,ct+fs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,oe.get(Q).__webglTexture,Fe,Rt+fs)),B.blitFramebuffer(Xe,st,He,Oe,$e,pt,He,Oe,B.DEPTH_BUFFER_BIT,B.NEAREST);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(he!==0||b.isRenderTargetTexture||oe.has(b)){let Tt=oe.get(b),mi=oe.get(Q);x.bindFramebuffer(B.READ_FRAMEBUFFER,V),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,Y);for(let _t=0;_t<qe;_t++)ds?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tt.__webglTexture,he,ct+_t):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tt.__webglTexture,he),gt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mi.__webglTexture,Fe,Rt+_t):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mi.__webglTexture,Fe),he!==0?B.blitFramebuffer(Xe,st,He,Oe,$e,pt,He,Oe,B.COLOR_BUFFER_BIT,B.NEAREST):gt?B.copyTexSubImage3D(Ge,Fe,$e,pt,Rt+_t,Xe,st,He,Oe):B.copyTexSubImage2D(Ge,Fe,$e,pt,Xe,st,He,Oe);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else gt?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Ge,Fe,$e,pt,Rt,He,Oe,qe,xt,$t,yt.data):Q.isCompressedArrayTexture?B.compressedTexSubImage3D(Ge,Fe,$e,pt,Rt,He,Oe,qe,xt,yt.data):B.texSubImage3D(Ge,Fe,$e,pt,Rt,He,Oe,qe,xt,$t,yt):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Fe,$e,pt,He,Oe,xt,$t,yt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Fe,$e,pt,yt.width,yt.height,xt,yt.data):B.texSubImage2D(B.TEXTURE_2D,Fe,$e,pt,He,Oe,xt,$t,yt);x.pixelStorei(B.UNPACK_ROW_LENGTH,jt),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ft),x.pixelStorei(B.UNPACK_SKIP_PIXELS,yn),x.pixelStorei(B.UNPACK_SKIP_ROWS,zn),x.pixelStorei(B.UNPACK_SKIP_IMAGES,pi),Fe===0&&Q.generateMipmaps&&B.generateMipmap(Ge),x.unbindTexture()},this.initRenderTarget=function(b){oe.get(b).__webglFramebuffer===void 0&&de.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?de.setTextureCube(b,0):b.isData3DTexture?de.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?de.setTexture2DArray(b,0):de.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){ce=0,le=0,se=null,x.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var Mc=class extends Zi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new oi;e.deleteAttribute("uv");let t=new pn({side:qt}),i=new pn,s=new $a(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let a=new vt(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let r=new Ji(e,i,6),o=new Wt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let c=new vt(e,Qs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new vt(e,Qs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new vt(e,Qs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new vt(e,Qs(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new vt(e,Qs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new vt(e,Qs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Qs(n){return new ka({color:0,emissive:16777215,emissiveIntensity:n})}function tf(n,e=Math.PI/3){let t=n.index?n.toNonIndexed():n,i=t.attributes.position,s=i.count,a;if(i.isBufferAttribute===!0&&i.itemSize===3&&i.normalized===!1)a=i.array;else{a=new Float64Array(s*3);for(let v=0;v<s;v++)a[3*v+0]=i.getX(v),a[3*v+1]=i.getY(v),a[3*v+2]=i.getZ(v)}let r=Math.cos(e),o=(1+1e-10)*100,c=s/3,l=new Float64Array(c*3);for(let v=0;v<c;v++){let S=9*v,w=a[S+0],L=a[S+1],_=a[S+2],R=a[S+3],U=a[S+4],z=a[S+5],k=a[S+6],ie=a[S+7],V=a[S+8],Y=k-R,ce=ie-U,le=V-z,se=w-R,W=L-U,Z=_-z,N=ce*Z-le*W,ee=le*se-Y*Z,O=Y*W-ce*se,H=1/(Math.sqrt(N*N+ee*ee+O*O)||1);l[3*v+0]=N*H,l[3*v+1]=ee*H,l[3*v+2]=O*H}let u=new Int32Array(s),h=new Float64Array(s*3),d=1;for(;d<s*2;)d<<=1;let f=d-1,g=new Int32Array(d),A=0;for(let v=0;v<s;v++){let S=3*v,w=Math.trunc(a[S+0]*o),L=Math.trunc(a[S+1]*o),_=Math.trunc(a[S+2]*o),R=(Math.imul(w,73856093)^Math.imul(L,19349663)^Math.imul(_,83492791))&f;for(;;){let U=g[R];if(U===0){let k=3*A;h[k+0]=w,h[k+1]=L,h[k+2]=_,g[R]=A+1,u[v]=A++;break}let z=3*(U-1);if(h[z+0]===w&&h[z+1]===L&&h[z+2]===_){u[v]=U-1;break}R=R+1&f}}let p=new Int32Array(A+1);for(let v=0;v<s;v++)p[u[v]+1]++;for(let v=0;v<A;v++)p[v+1]+=p[v];let m=new Int32Array(s),y=p.slice(0,A);for(let v=0;v<c;v++){let S=3*v;m[y[u[S+0]]++]=v,m[y[u[S+1]]++]=v,m[y[u[S+2]]++]=v}let E=new Float32Array(s*3);for(let v=0;v<c;v++){let S=3*v,w=l[S+0],L=l[S+1],_=l[S+2];for(let R=0;R<3;R++){let U=S+R,z=u[U],k=0,ie=0,V=0;for(let ce=p[z],le=p[z+1];ce<le;ce++){let se=3*m[ce],W=l[se+0],Z=l[se+1],N=l[se+2];w*W+L*Z+_*N>r&&(k+=W,ie+=Z,V+=N)}let Y=1/(Math.sqrt(k*k+ie*ie+V*V)||1);E[3*U+0]=k*Y,E[3*U+1]=ie*Y,E[3*U+2]=V*Y}}return t.setAttribute("normal",new Qt(E,3,!1)),t}var nf="data:font/woff2;base64,d09GMgABAAAAAFVIABAAAAAA4dAAAFTlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGoEOG4ZQHIGacgZgP1NUQVRMAIUiEQgKgdw0gatRC4YWAAE2AiQDjBoEIAWFHgejDAwHGzvFF9g2jR5edwJat/qq512YcGPcwHkUJPDRLxiJsFeTlDT7//97cmOISBuo9b29D0jMaWabOaRT1dk911o91ShpCpaEFgxJaH0S06iRh+m6nszGZF+R/bhEUtZFJSYY74eYzJAWGqtUVBV/oTy8IXb44XnbOfLDZsJmus3/kq1Q4v94ooI9ugcest9cLPl7p+fwM3aKSlR3OGjWHj1YCuuKoqsAd34xSRnn8fy72c85NyQhxhBDDClFGmOMacQ0TSlimo1II0bM0pjmYR6PRkQMiJQiRYoYkdKUQsTIrwgsRX6LiDTlUbSUUqTU4ncpZSmPpSzmUZbyWJbyKLI0wA38/7f2n/vcqgZ6XdX8ut9MENQgvW9MkHVs9KhZPuCiRFgYlmEZFZUV6J+/N2fO3VbRFnxR08QaSDpYONYsGIH3C//Q36fn/lg4HAtQNBSNBqQTLXa8HOBuuJsUgx1fdXv57w+AbM6DuYbn59YzKUV00GPDNQzY+v+/YttfNLCA3vb/YAy2EakenFhx2Heip2Bcip6KUXF3NkaeV+olXqh3U3N6vspM2LHxszoAVIIQFDD0cFucQ5MVkxTHXQ9M9kag++CcjrhIO9mhumTySSF7U+Jp98M1jevqAgWmg/zzGDQpMzknJwUat8M1vdikc/88QFYlTckYPQk/oQrAAwA1/tEt/3HCfRPaIBpxAkkINRumtePmQmiMWvG7cHEuHgH+l87qf8lQ1U+yhyA7hog4wwaNe0AwtMReKZFTOwXaZduzkN5xSpUDZcnNv02t9v/50lqyFyR7wd4jexGLZrSogwqwvaKlP39GGvgz0Wg0TkaWKVJgTBvJDsjxgeWx8jSyknO85OSAaWQnWS8rR0AVAPS3RbX99RVxe0XZXX/+o5pZC3yC3sfB4pKdeSFWqXSdeDm3ueg+SHBnJJKrrwFWO85yuJRrB+6sg1ZzgZKddSnKTXOhdVscPNVeZ/fN5Gb2oDtslKNZkdIuyRJSqeNBFVfqJeZTqsS5Uh1IBoXy+H1rJYQHgoqk2LkXK/ZNVU8l292ZDSggkFS/6qAXhEncKZuTMlBtRVI9oJ/xIcviJSIdEblH/Heo2ffJWL5l+bjUwuSLI4jQH+I66R6W3QHqMgpLkG3SmDDlc/QPXxN9knl7Sb86KU04pZllMcIIIz7C/CubNW0kwwImWiDHMrc9eN3vpv20/jAxW7N7c7mtVuwIGKpAFEnu+9XNAQHAZPGXDrMVgg6CgQRCSgoRJBxC4yCElg4iShSEngkiRgxErASI05IhUpyFeNe7EOdkQfzmN4hVq5BOoVNAKBElAaEzKBUIZaFsIJSD3ocAAcBARAHfidAZgfX+iYxUYEEBAF5HkaNbB3TAMKA4BMk/FrYUKWBzwOT09CCD5ekAvGAON3nc1RpTBZ7G5RjD1M3dxmUXyi9bgPJ9RC3aTxT6Oxx1euwC0K/BE9/OSPc3JwD0g0NtjwD7KxecBSOGOeNbwl677LANQJ+7FwIgyALfFYCUBNB8IQEsTvFRzYR1CPAvyBZWASAVfRFIjl4OhQGkaPKlSaByaLcjwfHMywAYGQfDvlgoXOSIjnYhCdqPDqAIdAjp0VEUg2JRPDqJEguTsAAwP9AEDU3mUyN0ACJgGFQ2RRA+g8SSSiMrX1AKgENiRkyQhaVTL0lcsVLQ241T+DzKti6h3Bajo+Lq8kdcXxB8+4BRAIF7wxEBsF+uGMrjQuBlIAokfFicQ7RvL6EezoKipTzYYdKCq+l/iMX5Wvzz2A5a2ZQhmiYDnYGpFi4hswDY6797efHGsgVBgiQp0pBQ0DBlyZaLTwQhpaCmZWBmVcDBpVgZNy+cX62gsEYt2kzR6X3d8th8xK7IVSXKXVOtxnWNmrVo1eYzHe7o0u1r3zjljPMuueJr19w05L6HHnvquR+88Mpvlv2bGzE2AuQQFXkjJmKhLcgX8RAf+aNtSICESITESIJ2oz1IjhQoGIWgUKREKqRGYSgcaVAE0qJIpENRSI8MyIiikQnFoFhkRnEoHr1zJPqIKnLaNGp6YDJFRqrzgbHrcCu/eU+A9s0wYrBq47XsQyt69SFRxLCuK8ISoTs4pR3RDmijD2opHiid5pnmgkanEXJQ6Cl0J7oZTVS/VbeqcdXvqmeqm714tqpdFVD+rfxJXPVerpyijFeOzVvNm583DY5QtGKxEYVdIVQw5HvkH8t7ZM9l12VVMhtiSI9JN8qrQCqWPJCcksgkuYdB5AiyHa56KxEKvBNeCY+EZg3X+yBUBdl5s8T/iV+I54vrRf+JnoluiuwipZqexcHNW3l0x/l1MFpjamJ9WMJqmAxFId2P+V6v9TJ53+p8cqxSOf/1z6VlsS/+L4Hs2zlchhPKuDLqXDHbtivM3D3449Mm2WizZKaj3eiMGmutHtSd5a3Qa/WL82pcFahMxXmRIldkrSyWeZIjqb1XRJ3IFzzxKi/gmZFl0+yR4HYWwYKL6BQdomaqo52Mkz5PEkui8Bwew/HYWDwwbP9+Fm9PmcwvV99c5kiOi2PRmD1KBKyhZ2gdDINmCAkc7rt6ba+suL4F22a7wc7apbqllmznP2RrbZOfHI27mQ3L1Ghsbd1XOzm32j/o1dGqp2oNKZ+TdJRdZXO+nB/o50Q1+WYhhR8/M8BrmMqn/Im3dTUhb0zbCtz3q44hh5vC75V+nTDZp/rqOa6uvzNwgre0x9opPyq3CNjtoWLKDxq2wse1H9xbfeJ9GKzFXe4unsXevLJt2tq3/sz1TeumeKNmijZ1rivWmk1SxtiqdxXFkHtPLu8t071N3lT6/KJ6kbuQ0Fm0nnnDXE0TUYdnXTMLVeflnrqmaV4GL6D8OYkkVnu4u4pfmpUIJaREAHa9tSavhV5neBggKFyGoIpLMCyoFBp9F9mZDAK/PCdQ2GIdqupSo0Edwogw2BLBhZDpLkAfAKKBrObPUH+g9+nHVWVMtAwVL0ro7aeDWcB6/Xoj5vmBNj80348sSO4PgKJMP5hp77zGlNuhHGvkbcDg930gMAViihe+GNtRpjQyOu9N79hr/+XT0FmUjt5FGegcypSyPwrpTKRYEGk1mZyuNwGDBpSA93PgG5TyvhoCPxpLQ5lAy2NLFQxXUByAupXKUuFGmO2BoMrjQsGSp2cqM57MNxWqvkoaBB8fTkFwfgB0xw7oRJJ+DYgpJ8UAD8AibtsC+ITShUzMO9Glflxmepo0E6LQfxSQyHzCjfm+vDDTCSXCnk853gF8IsPuOfNK8Li8yR+QzdgWPro6lwPDAJGw/Gwgjksje8Odj8CmSyr95Z8Y2QZk7Rt4GX7W7ZI4yuyNQHoJx1R3g2lewpEh191t1bt95PW5nAv8vcOf3kGl6rdneroXpLA70zq8IFUrZyrbqnf46DMFOflklRIVbS8w6DncqXDnV/PnlELOz9iqF8Zx50f7Z6bnJ/meRhrBhLstNZz9rov7tnvaR0uGqCTzhPBeGalGRNat7rw6SJPN0zf56CjgkPnTCmUIUyz46wdWtw10mQeEWtmttM3pQ33cbibyocPXocAKTXanwpxQmDsEE68XApCRgidEwdaLI/FJWn7vdjcgcFgvl24QDDovNb9RyeLFtlUf4+M83cHyu4f35WhhVpxd6fg8x1wVPrlIaVDyF8z/u47sx09bBf6HQ7fLKbqAv+KWQ+YCdlqWvQ1KdsRHL51aVHxBH34EUBRra7IzZXfWnp8pl9isthqGfEjSZHMjKr+CKvA/Ara0tFLB6O4kT/O8Li4Wt7vYT5/DRIn85KejwShe4J+jfdlpfNpInuDv6XB2u8I18KBdWNVRONkLi2SZI3CrLEwNSlztoxda5WiFa+Bay/F0AE/kWG8OwNnCatucITkOk0WuqXgNHFTSIm89xXDbQRN2bqdY3Bq9DZmYGLS4T508nKBIkz5lJDXwCmRHsCq4QTl2zqMQrtTNKSYExchsyTapj4yjZ1ORWyq4QaGWOOTD6XUExgdxBRdsc3pKHIeTkVsruoEDJdZxYXLhRAKL7ExErjghehvYGBdo38cEzluCImb5tJFo4PykjF7hGWDeTtvJwt5z01pjAQ9kWmRQgq44empVbqzwDDBsIZcI1uQg1RDAKRBrmzPUxmG6yE0VnwHiSgDKkg3TRVyZxgW3fbaXLsqVIb0NrZiLuCjavzD8bAVtjY7jf40v9D1ri+HkoT8tGQVo7HkWnccVszu3bs4DgZyba1CC7XhuXC+ORDlTOv5lhZE3cqadZ+RRSgkP8+6RbxIus/JIbVC6jHnysKIii9Xmdfvj0mLdShZVgXPTeVQ2ccNt1Wd44vpVQGqVOKWxMzvzSuQsmXslEDtvq54dR9uJE8rjT+CxUUE+ykTbIFpw34m831oHObmvW29DNsYhr+YTazEQ8wIUPsYaL6SFnhM0auTah7na5jqyuA9yudJYzJllLtm9XLfasuA3kOZoT3K64tk2Nl15Ivu/0sWJoiTGebm7y86LkTYZnRp51ZHOffau9Qrf1a7Poa2KUT+VlsCdK/mWSQBAu7bz1YinG/TKzhmuu8x5qm6s0ONGVdo8A+fFlRSbGqvnScgtqbdhDCNwA/s2Qt8jKO4LPs1ssLSjSE6tSGJ3ljFEmk4Mt7YiCjNzxhZpevJIw7Cn7we3DkkrHafivlyY1SJOn6+PSNjSy9CyC4jgZgWh3O5MInIzFY5Lq4YUW8gqJU0nKG4icz59TBrOFBUbEadLPZZKs0klQd+zKSebFkY9ebKZEFv2dU2KTlCMFf4nrO1JoxvbJ2AbcNPhK8sYH+Opxz6TYhQeGmQfXm+DEtPDxy6jmKDoI73CkcuImez6COArqBEJrjTKGpWQwhN7snahl+NCl2mgKpehSUFR5XuFQyljspCsm/lZi2gRQlrOqfftYoOqIk3dFwmw2QJ9NwhwCG1IKUT1VsBFL2mLwNdMw09y3UcH+lDomGyB9lQ4wD8qszShIoQUhSzWCgkhScr1NnAxCN6xnwXvAtoz0VZl/cJMKF4QlN1TPmr+InDzUm8STOGhK2z9DoZMAejlfOtRO0CrnZzeGVhXl1CroD1waN0iRqVPK4OZj9VpwUj/sAU7CDf/sNrfCPLV+mTNvhfHNTnm+oAMz3rD08gEZwLWVArxzib6g3gHgmNZMf2W2FBvgxXzGyxJ+NxjA5FFe4X5mKMOFN3QQvFd1kmACSxvoJ+IwY4Xm5+g66/lOUvb6vmt1Pec9MTVZm7m6Z94yqMqaK3et74LoNVM5AGi7whtoPmW0+mbhMr15MvmG6iZFeaize50KDxhgy+Lqq+aUvOv5gdNZF+0VFGsfZBdFjy9DZ2YC8gEn9g6A5E8QtnUOtSpB6ECBFIhNuY1ojN8C2yEJXl0El9eb0Mq5gQSIzbwsW261iqtWCYj2bKnAgdmTAjXRlmmxAWBDLLDghOOw/Mmg6lZ4jEFRWP3CuMBxmTKjXJWIRgj2+HRX4KHrTXFhGWGrTMgZXXUW5/EWSBh+HwiNNrmd1QUTjh8g3kFepkzxfLB7OYesDuFV+TmVkmM1CRi8yO6p3Fa/Q/bazsVK103x+ZplhWwvsLLkn73g2JA05PPs7XFBN7uuwPwRb3jd+VA0RYxNYRy0QZ4RWgDB6fBsVf6Cg6YGdEBr9YMfseSDE2fmeEZrMoSrbf7egG+8AHTKsr1+Gt7pitVpahBRul2UlVRqgTBpjSiFbjZAmsyPT0TN1JPrsqfKYngAJkWzVM8wQxGsmK2Ag+KLzo7jbLflAXaYhUlW1oYynFy0SxBTohWywSifOSV6SAfy6nIhcKhO1NyouDMYBHz/FnHOQu/wsHrHcjszYtad1PJBjYoetIPljST8hn8C3MuZGDYBIFpRDIblFiwf1Os62UAR4qHzV2EdAxPA/0TzwQkheKhOXmGLsdJZP4PYrM1gQiJxlcmD7nDv8NvwHg0g/7ZY5oZ/IKny/GYImyCQO0bHxMExgKHPMZuUCLHk8fg2H+IxaXmRCbMZwg9ydk/FO8qdqYVFoGx5roFAz1SG3sa4q93btT9Z83yGUzFYdvM78EmgNqKNNMalGozPq4ZNzrZzQplqDlte5FcGIa59qRxoWaX9hPbnD47Ju0eIZG4K0bq+lNDTWsL5TSJwfhQOIyDSSUqC2l0f91q7iKubWJP8aSgP7UvqM6D11+2OgnUqfpIHprAINZVu8xPqDZzeAJ7VSuqYJT0F3U5wHlMobMwPA30N6iV1Bnw0JioKb0Nasz/oJPy1RGIHR+FmQBE5H5HBQJm0tjqPNTOQez3h/h/L7Uj4aEfoSyu7TcjaNs5PCFhr61jtPtfJMKBsSwmIeVBABjeX2En+OYHCConCdAuzyVb6fkr8BkOT8vOKKMh1ksbCQcLvMmSIPoe0uqIv/kePFcIvfNElfYGvFoH93Ge4Nn4S/5LITNNKWyTlf1FMVxjyf+iWG9sjNUwGCmNpkGJLfjoJviy7ghm4OXc7ME62SVWaQaPIexgdTMsmcEjEZnr7T4uwBc+wLL4eC5gqNBZUIRMC4xqFP+CdOBl5Gv51XL/zOyBpqoAW8fTfeFLeBuiMPdBl/nYVCuJdArlpJYwosgoG4gmJKjTlun0HXi+K+PMd6B2KaNoM/psT0t16Lqt7fVyLjVoBBtLhuhb8ABQhUUr1C+cvt6GKUw/KINP0KAB4EiQVSahHkUyI2VHo9YhyF/IPf+CCjmS11CQFoYnohSoD8wKUspEFC26K8yi3/l9RGGhe+8kmD6+BQhJX5peED0fA8RtS3YqFMFM/KAmTlofGzwcEhSVfHFwiHpAJ1DY7JBNXwl9sN4GC+YrFLF8MhgMxCIShY8dwp6KWXj8FTgow4OCcVPVe62awZegUahaL15LtitMlfV57tqYLwGbGXxHPi8RJEbT49NG5tMSXj1y6UJTY/38gMm1+WD6As0BlxeaL2Biyzw7oadutW4PUrJ7lae5xYl1AhGQHBuGxfA00G00DUm78VCnNNVynJ4xn0MPszWBqPtQIxnETGtU5L8XR8n8d3Tj0cVuP0JcfWqkFeBN80iIANJt2ZJm2UNONIxOrZtPoeY4e8RHghrn8AT21CNGZ22V6dArh4SqtpUYuoW6y1W05hZUplRC2u7fWzypiGX3Nt7+ZRViTVJ2U1mdic5vKo4Yja16HBOTNTdYltwNnnQOYchuA92Nl4rntk5zA6FNtoYGpVDjtJW2xZbXFf146YvifHEDcmyxactgeF5Lf8b9FQhquwVTk9yfV2+DANOEjSmB99hAXN1e4UBxxIOrC1nyK9DIJ0M8PRWJZ5BYB/j69fDUgPu5ae3QgwDUp78GBNxaa+qw2jk834oDwEZnbWcp1CkOcmXhY9qCnRGFmTEnUMKe00mrKDxUi/sy3Moxn2CFcoUtG86b0X4RYJ7A3t7FSDYtDX3593TsZEsWI5KyGt4v7FtAYVr0J5xe/VYYBjbhr79rA4e+znNVhoT2F1QcJlRCCnVtEYq10RQXe43WmNziEKKDD6TVtLJuIB0g7HEZB/aYqnBaj9hhlwWqlNOqctwybiqxDEi0PyYQl06vcMxyPMrkfhoMpyNqyiV3yaWPcWqwWFKyFKqQU9315CbzMSJ9uWgUFMOKV3hR8Fj49/kTrDYvOcj+iZFCtz1UhlMRLrSYUoQKDk+btZPPmgdd9sNnUAKJoLNzARXjMObmTFOMIJE5wZBUzMaO/2NI7umezpq7z4t0MlWj5F8VbnRjdcbBVq4ZAbbO8VJFyhoXe0ijK3IIqbchFnMFB62soY+dD2DtFV7FXnoZOaj9YEyFfncJ5eqZppUuF1uPGrZNBV2WraXehjzM5WJeX7U2qQTFec6cT6psYgsJNtSvt5g7ZZxrIyrAFprGUXuoUDaR3oZ+TAHmLBmdfKueA9CW7RrNT7H2Co92RoUK7PpY6MknxYrELGDj1mhRPtYmzEw7hncfbreK1+fJAL6I04wV3hsDymAa4cjImEsP7U7UTWsjuOFiqrDDE/oAa4Abus0HmNJlaHnztO34hZe/CNTpDb44FHy7FX568Sy/xW/z4BM34Jm1qDLs3ErvY1/g5krzPiq9zPkN+RgtqQq7cE2rJQW5s5COwEWTBTsV4SsAzg+p617FMWjKMDQoH9i8gi5hmXC5zVxC2SR5eoNSWe6j83idDzmrj4gHpcn2AXQRS4rrGeYiyuCyW43vr1stun62FGnuYqxtlZ7i3+we6GWgYh7VdUYxyvA00AXMs6nox0PZMo/obXBizqOo5qsjEIsCFGbGySdOhX3DkQpDPAjAe+naMoSxnbkpeuO2LAKIU7EI1AD/fcUCnD1GcYuc5Fw89ksvbC20WvehfDJGc0fH8GzcVROlxObNlIGpG3n5Yzapm+v+xTyv1oHlYcFQa4vpUKM+eDfyY+hgd8/814QX/aruPKCoaXFudGdGoshl45wUpWNio0ix2RydlXF9vQ2jmLMoNHxC67ct0ylQ+AKt/aVOWAkA5zdptS//Ncps2B+12ZcbNd5xkY+WmZFmPJ969XXG10DvyGhYb0MQJhV59TLjExTzAq9wRmUd2RefQaO+yHW2p1IKhknXLZsU5BLpptKOoBIh55+7Z6ac7mnXP1JETR5M9OXAgBCmbFecJeukPMckF6H3mhSqPAWnj+5inwx9RoVGIGSXnYQjoUT0ZOq48lCS9HPLcR2YRAS1xPl8K2kHNjpoe1xtnc7fKxwfsO6+RIeepuDJENqJZbTTiE6iNyNm8DENdEp6bfyuM7sOSlj2ivAxaDEn0dpSVBAU2zTfScRA1j2Xeer+Ty2rAFrZg6mQUic6ga4DKcv6IjohXa0c57PMCeyW9pOZSUKC4s7l03AyMjEUyQ0VSezqynp0wsmOKxHqfuvI7PiCLce5ufy4Stivq2s0rbRBGb6wLqh7/HuSUDAlKyEfTwO9hdicdiw8FCuxVI5r3Oa/0MywNYHYjKAwM6JsuvmPV6KRJYmJVigx7g59XTwAwH+qiOLB8V8H01+vrID91qYOoNUpi5QNmUVVuh0bIQof1ukUKu2odMmxPn9gmfiwAhqKRUPRCHaHwkRPatezo1QPxVxXcqTlxgoe1KXWKJlR8Z2WcqNKfYNcunozx2lo9PIjV1fSuP7iog58pzaB4BAcOoq2Dm2U2Hrnf7DCrT0PgGzGDcrAzNoMn+fSh6Mr4c8PQGmZuDvaU+o6/F1it5pmxhNWGzf6wwcAUFnF0mhEUWghWaw99Ibs5uU405ooVGFLC1ab38m8wiZklF4wnKtOo1NJweqglq1mSYddttPooPvrhw+BdY9w0Oq+6zs3qbp90fTmengdhMrh4wxL52Gw/sV388DKbLsa9umeyKI/VcZA4YDl0Rs1ThyUUjaiQFEkGidKnhWDDktTvRzHijmMYsHHYopALCbQ+MCQ/jR3mBnGPLxyCYqidyKfXHIpAg0LpJUkS6YIqVfLAUaLkQ4t6ylxHGoTgSL4QWQkCrU7gb9L4I9L2/2s8coly0d2b6OifsJrSq+hj5IGdQy83Ob99LrUEXJc7jSvw9P5hF5NILoVFJ4sCvQXuAn2JsMNMDwNdADVRHIdeChMqgdynKs1++HsbE1Ll4XCzJjnm2GjOYEeQtaw5JT20B9QGZyTGBUcj/MtWgvQauqCuiH2bCXWLYHDd5+kcrtlsF6LhpQoRx0Ko5xY9bxOZo+5zpS9DJSOsafXSPsZngYKRZmSUice2iulSY5Lq00I0ny2JhDTDBRmRvxhGgNXm5fUQdBhUxpqDwWjmHap2LyClMvhabPOUxh9+4fJKEvNCR4QdmgkHSxPA72MIj0ltXhILoVZb4Md8xKSTL46AjFJQGFmfMpZ04Z/WxmQBNkEaA/yBecXzB4kdPET75zgV8U/aZAGftb5nq22pxv7MbTDA65YM34lMxXec42qct8sRyqzKHiz9fZst9blWWZ34ZU7lqEbiv5Ai7b07wCt5i7C2lbSck3p5SS37IkXnOQfWjZcfrRq4WdQyGzhOq82YANJiqxOqzM1vShZUT251EgKl7XNU1uks5hdUFxzu/mI+CecvHRyNEhiZAFbLqK6RTslo8txajY7YcusWErIh3JhU0wydxNtSAofZ+o0yX7ZqOqJMqzcSkE7kOY5CcwOWNrrxUIsQMLizkIm0zNhQSexUPi0ymTC5aQRbUfK6syNSCCJezlObvMCNMPWBKJGUJh5DE1Pn7rY3N3G0Rr1wjM6eKGKrIK2FYktt5kAKJ1vPsKGhGI5PG2FHR2X7P75gCeRx+o73eCk1onIHwl2jvNU/0fHpwKC21vMvv701/VV96z1Eh++wllbzld1YtVtNRT7MHtO1nd1vfD/0GmgFCsL/UoJjVhqiAcvdNgND2q/SFZ38ypVfZH4P8ifadsZXX5Np54Jyd0HTI/BKK3nOkSHyXvXdw5iWOUSF87klGq4E2YGIjHqdcqfr1AHcS0a4sDmHQrDAYueXqCES/PjP7VuUf2U/TIdd7v6oQy6uY00MTRkBbytot7lq/PZtasvM8Ssq3kasW80DdaciSGfpcnePlbGx3ALmcZwxp8aonx/fer1C30iG5ELNpTCV3/eQJuhFiiaYRqI2UzVu5DCooY2LWX9luMkNQyIywYCUYAiasb3gxNMOzz9wKCPblBEh5iJbnmItstq3oNolqGCUrYmEMllEYir5X4CSeT/XxwtQ4nGdvGJapVD7d965A29+bVGVBA9imRQEI4/lCJMJ2uFXm5xSshj8+iNwtsbKGZCy3gB+O4Ph3pk8wWEXgRFYQAY8AYAAHKBRADJAOgAQOQWAPps/n8kumEkIP4zSADosz8MgB/F4wAIeIHyygBwN0A05cPEpAwEAIN82AL5AILbcidisQEofkgnaFmZLwBZArOKeO3B6zDFHHJYp14X6efOS/bJ4UFBL6M3cU8GMp6JQgSF8CZ2CLgCf0GgQCgQC14RKAUaQdsDwu0lD5Q9yBFuJf/3CGAzAnJKdcFNhi4gHEE/3lfAFwTcLYVg363PNIAjAMCDRgFA3v/p1VedSAYAyJ1rOQCA68JV53roes+lcZmevnya+bRt8sfJafQbCAA1gBhTAAB9DBBFYc8kuqcxV1r9n+2vlulQ6VkCMeBzn6h1jdsVjYpUcbgaAJIHyooChGGTzXxwJUiUhCgdCVkGiizZcuTi4BIRg8AkNqjW0Gi4URMplIaOgZVNvgLFSpUpV8HNL6BWnZCwZi1atZkC3HV9oU4Mi0r5zb8tW42LmCgNbYbznBLQJAtlIjZCkM9HpiMvtAk+1vwd5sj2FbtCl5WjwijovNB4Y/IVZ6JJ0iRLkSrWdgxUNCx0b+0ixMMngGALyiMjp6KgpKZlYWRiVsTOwUmvEs7DqwrmnZOa1GvQqF2NDpmqqy5swKdatLrlJgQNfAAAOgIAYgHgOUDgD5CcAK8lQFwBAFh7yfjElJeAOqyFiW7BlLkKvqUzufW9acuQAPIL0L4pM1a7S3mqp9rYgWyVldyGtGLG0shLJInnEiLYEh0UFzp62zLp4sq2bw54bBG2afMN4u4tW108/hg28mIp4UbynSVREBpLcDu+gn1PPRR6lhvcU8iSC0XYR8cZeAH0kAparU8RW46bF1shKQSBaNSSidv9A6GH/84P/5vZKkUq7SFpvZpW0QAaNJuIkcQSI0PkVSbNemCnD1SkrcGZxV6h7rmm2vM6TSavcG+Y3G7XmEdN2buXgMdVfnd0lCKtGLqJJDF6oZ1XcaNDPZfOtmOBJaWAEbAAYC2zlsULtjo+MhjPntLurlJwiGDAyynn0Fq1ugth8iCVNUmcSQYazEXCqT+SLaVG3nNixIsumNZeAx9m0sfuic9hMdtX4SxRwhGo7eqG31TqdAcPTxvG9wORr4ImYMPYdWe8ay08+RhLhGi1WkPsTqDGpj1hPVImUIk+Qn5K4+8AWftEqVxOzhHrkhL8LuVZR88bbmJNvhYsnCNN+uTxIz0QVTK8OcKXDSdK3SM27AJIWOFkkxoO9gjhu+lv18xSX6jq6gf717YbB6AiOZFxmBKVY9s2BD+F+t//+bq6E+5gS2ghLfQdJLRBOXZ8EoST4XGp7orYfaEFIQefmH+Dn5K2OjFqIIwBjGAojproG7kN/NNyYVkM45odOHlfJyM+YGXgF9+wwUuT6zkgPsuJeJxYJZzRFDd+xpZ9CqABFE2PTmJSs0PUKAsGYfFy4KIgXOGAjUmCfRIFUBmGVA6Rc7ZZyFvlWQQboqa4h1IYxxvqusr39DKDgmCJQS8LfPp1OCvwbGwNR+f65PYASmkRyLdoa9QiTc9KS4a6qa+w1j1tGJfB8rL6wVEirEEFC63kIdn3C8eVGufQ6A5LSDEZPl29aCcw7l6jqnEYdxAk4HDUyAThKGiAyK21japXGwICzcr0dXnZo+iIc5gcMkUUhMF/Yqy7jY3rUB7hMovNxzJbA9EOI9mp7hx88mu9KbaHkkNoCzZpE7YGNZjyvblq5GLp4Yy1A0nCla0bAxHYpR3wCY99OvRJNYnqIeD7zEMS9NUHR7B4Nge0hRFzFJisoUZg1pGAaIy/xmWM5q+tbRKUp4cS6yrGJW4JRfSDJ9rK++oBqGTIipiMTFF/WuDEIkjiqQauFOUy9TEgZl7kFrpBiStXoAzzZ/aNCT6Vx5nwDDSjcG5OkbC/8esxj+5qVEs2Gu8ZklKiVJDKh9ixLCEv9wXkYQq2qjnJqjGRDFzBYJlEOu0AbYpDeDZHbEZ3Y5qw5Cx37cVFONTtCKUn8xK6eFcI0arRHCmOBaGnBfm/XQyaTQlomCxWGuOevvIZGw7MKgNA2jhgKzlTXlYzxc98wwkcmnpBf2pxdeauqLilupoy4OTpsVJRxc9gXov2oshieNIZZPTLif+AZ7on+PxyvmBOdJZi8CRSa2vZ3EbEGkZYgcQfAhxjB9kn9IvG7oJjAWmg4FOkMBSKYuYTt2u6sNLkU3AJgcGyZa1yD6BCXYyW2RS1oab0FSlwBoEOeygvBrrcUzOcVKaPdNgyB2A3dMBiRQ83HU7cbEnrCSSbL0tr1dfIXc3l7kX9y+oj5oLAFJMRNuZK3XqpzcxjzQw1ck82hTxZYtZKNpA5sPnddXIJa8TfHFtvkT5ZU54BGOGgGGq7JSvCUkXs8QF2CQzR5CiuP5vFXJpkweWpQWymT+iyCBZv4RBnt4r2WXJCkFXWNptdxsxPNXLbvgGhrTbo2EVK6fd903ap5R+rtHxxe2CRZycZ7qSBA6x5NGcdAcIaI9svQQxWYBxyHiATDgsGf7TJCRz6lvwwC0Tg4LsLinzq7QnofDXKbYf7HL0cxLptIb3B4lAkvwzyBpqepfujghDEFxTBMSWSHqhhOWK1CA40RJBmYiwR4OqOpIVYwkW6hxTwdRfU7o4mE0me92KNQYE8Pm/FFhu0XXQZD0yQ4gJa6hK37OsNDCXbakCgJpdB/uw+7kybUX4pLk1PD7XaqEl4zC8PNQ9iUK64pMVefFpnlBw3d9ULnfRcVlIPVxlF9BcpCUbwqQWyhURAGNmyD6ky1KMUVyNHOcToZ/Cp8uCXTvFvJjdhp67np6ikuSpzMzuv0bxU38ELyZJJiboNMLdgubxm21epqkWEmo1VCESAlanK3pyqPDu9ZImhIZerpPahyCLwoNoBmJhoA6m8w+kTo6GkJ8CoSewDzSDgd8gSpNoMcjkliDd1BxuBMD1aTDnrUoJyK1x1USoLz/Csor9b53iec24H89AXu7PGJJno5EkG8nOlPtOJwncGNfthmyZq9ULCJcW4vFxgBLsNsmfH4ezsycLM5VBGKSz75BX8JM4sLWWe7NvkpMAF8WAWotYu9vk+H+HkyBa7u9qYI6prXZWampapyX01rnYX9pUTiWx1ax49sEqsHrayFXnScAyTOWteSBFjeEbO2pqPfBWfxZh9qmN+eMUz47KIk6M9B9wVIxHI5EiM5rhqHA7NhTMTwSwlu8X1xVs3/RKXh1e7JOLKA7ZWjiU7s2PgSWOZcYFsztQR00JTqb8zp9tXrdRVfuo1mFoK7mJ+pdvr5T4nnGoeCgdcwk50RhzBqOocP8QPx74JD4gowr7xRFBjiqp8lM6onXbEscCwLHmkQps416erlOqLWr+c+W5V5DsMxzxLp42xMEM95YyIT6QQNspzFGq7stmoLeVZuYL161wto1SlkzxP0Vm73sB8nBf1uMHNU6380gxXqLFWtVFHZ9J6N1/IgQq5Iqm41WZRY/WBm48ryMv3ef4LUeR9Dz/hv2QZ9Of2M1f10uvPWQvxdyvPIf26gb9ON6HOy88IximmfOkKcQcByIBExAe1HlW4BT4JH7W3zcZVJpFpGaNbz6czGWHsrdqn/QVACU8zBKJrDK9202T0CyggFd20Vmkl40O5jDvRz8TG10zheMN1tjURGGhzIMNbj57zeHjzyHH8RtW4SPi6w0AJewQaFiEzkICwmyquuvmGUxTRYu2ygv9T4v0maUtiyck5/2CGAyvnt7XYkEXR/pKcRKQfeILoiFCIYlb3XR5dKeR//gQOvV9D/vM24lHxbN4FKnYPa9CQQFch9gTZ9XcsWLcMC06cdsVHmXmJ42KQLxvUkr2M0H/oVtumx0FzzUVsoLTYzSLAeSoDT283gQ68gYc/HdbS5HnN0pydxNmbHq/Q9JCCvKxJNoYxPwcPsblUwXhmioY8aC4lCdqpL1lvzNzfpK731osF3SCQvDNl3Zsr5KZW46oj8j1ZNHAEN2Sn2Fc4KXRXU1yPbQc6WP+R60bCHsvKyVXQZFVGybpwNmmnQ/E0Vff8WTrvO112c3kv9qInzsgv7bR84JsTlmOSk4n7lWWr5AV//MH2+yvGyJcqw6lSxUmLIJ8xodeQVwVJv7fYK6Mk2S96lCxV7vhwBIA6XwTVuufoLCdHsdiNavf9kPhTvEmNfkQIU+fv8+eAs8c+y/HpZa2Pp2FzJ5e8xwQOXCj29uOt1j439WqxRdN8q4aNAY/SYimMPwlthZ0rsZS8D8kRPF3jni9Z2kY+hXOlmzL7PM9THYSFL7YALjYmZYDBGVcU43vGi9xFwEnazKF5Dmb09g2jS0iDGfx8WvFnp/mycDZxuo+i8hVp2jWvMZk5GXPB4GY8/hSd5TOU3iaJi26e0VBDFZQglr0D+/g0mNeVtP1zSkxPuk1wCWMdklfprjWjlB5ccexJlYh4uJrhUNNW6vyVGXUus+Q9h+tMG1TMVfJZ6sTqMoPTi/bqCpdHKS58ZB+OTSgugVPXKaXyUuf5Akq6uDs+eIywxl3OVck7lPVJPjCPtXyO6m6N7pW9xs9V8a9o8PSIe34DdeuaC4Om3p0Iu7q/Mb47c3p62LLmJfSi88lTGc+vOUt8G3fMdodSJz7mktN85ilJLSU5hnpKW3htwu16nXEKzkSpVBmJuoW93UbHcb0WiyVap2jj6jFyvC6hYZgKrCnh2OA6Zs3pVhJEyN6BY+PpeVIVlfht2yW/yT56+upfPVLJy1dfqz929pRsbYRCR9UqhvKB+i7A/Ws80j81baELRneIpDQpn0JnUGkx0sXKnCfh8Z1A/WSudBNQeKibt4uLk/9+wjT5OHB+bORo4/4I74FFD4/8JERJH0UlDFLeH43252eJB+KmXsYLysw0ikQCk6HobJ3ZMT48Dh/XLS44tl2tBfPMxZ6YfYJ9s6ciIjmrRKnTZH3fLsM+eXp4TbtXkpH3Pj84sXhVapKIzUINtWMgaZMSWp5Y+Qk3soU9lti1JoqcNRiTYVhSns6ibpZ92vlqJHgVk57W4rd3I+ROf6SqJSPK3tdQWYwpM0IwiLd8JRTMiqyLug/377LsgwYm/hv/T78c9MY7/xt8jp794f/g3b79bFf7P0t+Z6f9SMb79mycPTd3gn0UJPTc6fXs+HY1tvrHHZ5Jx+ZTjvIIU2vEwDV0K9DmK+FnGcxMQbT3zSyOQ6IQV1TxtO9VtEhQOQSjqKSlLCy+w+PdFtUDTpQmgS/2qjRqsaeKr9H4BGK3OoQchKCLsBa+BEGH4JBK7PEJwJVvZMakPeMJhQJKuVyycVMrkarhI6PP9m3IMXTJUCuW+DRpqKS6VmzwYF6ZsKRpkuVbXOYFUSdHkwuvmOt/3biHtnrRqxmejBeoF5Tc3V9VMCSuEiL0g8ubH4bt8z1/7qAh3zUUyr2ZG1qXM9w0ANy7InWFd+WbNxifDF3oqAnKVWqplL6KZJsGfElja6ztwDkU4mIrOe1bKgffm7rW4DGC8FCoI88H1ENzDD/2v81VvFiq/XHOkP81Z3Szd6t33d4gHgjjuig/rcWr9ZXXoHBo/nU3cUw+du2YWjU0/5o7ZbQVO0TTATtKE88XUh0WenAMeLdUWpWFu4NDPdBiWIMsgsRrEQ38MThLHJVoFle4Pb05HABb4MEVDoFDERxNDrVIGpRTXfj7h0N9MZ86poDtGbi2wrPipwFPnH0MpfDFiArxytwgZyWDvpkTzPkEOId+0QdEMI6qEV+NSD+LMmsWrFbDiFoFzwLOodDyJRqcJypXuDvC1Uu2j58P3xUIf4Lmg/WDwZ1/jU5FaE6JIK9KoYY81SKNtkoEedQKNewztJ/4KRJSqyAFrFBC4jwlrDC+MoFz6DtttRD2qIymuuGVyHuz2TXZi6aK85Ri+P99F+RGmU5zkbK8IF8LKyQqiJd5cU15an5iUb1VJir18TRVU4KgLMQ9A4l25mZeXFuRlp/garDJkYoaPnjdcbLq96qTHYAdVXu22RcbYkHvwNB0CCTf8JUOnu2709D63ZdxTgiKdd5qeRbafwdU2e5g3BjCSzkT4+T5VEVMlTKG8EYlAHvyCLwY99E7XZJJ8QoZKVampikmAcrlluPV06rPzEwwIgkza860Hccud0xrvLU80SRJmNl8G7we/3upsZtw4b9sYuyBLkLj7UvjgaFWPJ53cvP6h1t1EvwZReNLrLZASUWvIKdJkLMnvy7SmFlcjjfhrim11ZMIsnId2y4xSXINH2WNZ0mXgi+jFIetKkThNBqUFuZJcuqIdLPanC9nsjZnjMmwJdNRq9Owaig4OTktnUx0K/NtKnry7IwxGSMlBDuRNTmYl/4bCSFO2P2200qJIAVEUMAepXnDpAok1QaHQutGTn8uoCowoQ5fg3etx9fQUSk6JFkqOSQSbIOXwtsAJ0pjMTO4FPgb9HXUjCxNyR0UQG/hZfA7SDCYGxpZyuwOLjqK0M4Vs9u1fHhs+T2LRicdJxs8a70LddB1zpSR0z8JDQVrk/DTJFXSoQqo+gMOssbqz8ASvwYV4G6xgjQqxzqOuRw98maftqSeq/O8N3+1qiSQrfNxNcLFKoO0rk5iqJDpjfLMmA0sid4kk+uNgB2FJghFHuVSlchdJUQ1PqHIrcKdufKrEs7ShmCM9j17OkqRSVUSRKaSp/wBwI8LP8Y/LtUW51s2ePuIP6eWDOFDC8HawcovsuYxoRHVfo48mx51YQ2eRg/W4EJthjxnIggEufm+stI0vmAbXE3+8GJJNfKBSR3ELhBIXa22GrV2LFBaH8LFa8Of+ZJyUIgfxz/HJ57agQPHYNVC6C7U/9hnHe17r9kPiodCy7Bl96Zti9iR3rn8Z+wFeE9gZmWZ+d/swjMEGULylziQMsp08c9yE7NyuFp5M+PPXAZbgFiUm7z95A0pKUt+YX/G9tSU7uPpACcjWIsf9MIBT3ak5qRA5FH1qEVuINYViPQelYXx9Ubd0CGkR3IQEl+U9CCXwLvdQXxP8EuChYpY6ls2yQ2/gpbCL+F3w0uhV2AwSh3l0gODzalmslaCsdLGYooVnYbeoRpKBPG5WJa53mKW8nVnx40F5axUOzGCAjq5LWmzk/a+6bRJJb1oOAZ1g+htu8aB1z+EMruigA+jhZpTrz5C1CZZKhkQCY7o5Y6Agi+e1D1Z2acp0HpUB/gRhUjoF5ofDc6MrnyTxoFt9GL1jlmz+k6EPsLFv58XAz8jUJuaoSy1lllL/CEPvYEo3SYSfSUpB8mRUhOdr5aHJHGZbF7S5IxTu3XRxZvtWoMFt2OMIr9trCoFusxkcDZSSJVthpgKZpHOmO8v9gP7xDyxBxOo0apsyCHjsy0FWd0T+otzuE6pHKqsEmoUHjGsVIrFSjmcU8wWfMUTXxKK7osngoDZUWjMXI2vXhtaewu/lYlAH+IgK8p3rtlXFipD1guE25CjEV97M/huN72+0bMtlncgtqfeEzb+JIMmJ72cXweHCIRFCFxXDtUhiwnxi2FBXUkxvVnkl66fROmRQn7APpa2K6oz7qPgEMwaCno/6twVfTS1s25z8D4Mv3wvuBlsGbRduzSmI13ku6Xi3fIFRS0xd4DTz/JkeD/2Z3tgL6g/A41aHP9XWvIfuVLXTzzx//r2o9E5ZhZzHd/D9iStio//PoU2gxiTs2ktGbAPQyo5V89TSSFIJeXpuSq5lzgxTZ82kfg8CthR2oSFCIoDWh0UWyrIK2xNBaxGWwlaNDjCUHiXSE0nUoj6j3o6FRR7TxBPLG37dOr8aeu8wBV8/IOIW8SGr4okarUkNALdh9eIdKhPIKpUqtTvmc2bP83DASVKe0ogdueFoJcw8lAkhu8hNv8XGzI8Pf5zh1IDU5u8UB7k9gvA0tX6jWl9U9j7mQ+3BDeDzCjPOe/YwjP6tQJkANLDHyM07qHg6OU9OHPEE+J5jlGkKMVDPj3W1gSyowxnpNKQXpwReryDNOVavlqmJmVKiyFOlVYnra11bJZVqSRN9nFrD74c0+7xg1duBN42AXaU7hQHKpGq9ZUmSoDbfISRs4LP35xDP1IY4NhoOreqbFptoBJWSbhMthoP8o0UfWkeJHR4ctVqT67AASl1xSZaiF+YpWLwVFKwA/t21Rq9NFAn0VPXFTSIMsILjqwj5U/LRyt1s0nTil2Y3u+r0YENK8s+6bBNS6TNmzy5g2YboTZY1bp8q4qWZSidVnRTB9IWah0WpXXyXCrFT6EUUUhoiWOv7m97S4iksurlKrsFOIN3NME7QKLvMjy6Fp8am/r8hFTNSJ0aRrRS3uTzewtzoje0EuqQ9JVI2wMd4/NrNr3EPc6/7+eVnRQy7Dg9/Ytr+a+HZ1//SnSgqGuLbe7+uBqX9uuLLdxDL++X2UukeoSjTUwlEmMS/WLSAmVmyRrxfSRQSBCrYQ5HJ+le0iefHcUiWZm/vt/qR5msV2BdX7546QwxYC9lxtBE0UzJvzTaG+YaZgx1Z2qUTn0DNlZPzuBSD1EplyjxxJ11wY9RyU9T0dSHySlX692vrspEflIERn8lTJkxbUY/JHpG5BP1R59EmpRGFBDBq8F5CS22hJZ5eoysTieqyIlkZXq6mgzOfwsOKyVquVCIyiXzq+cYA0LEo5Zyy4uEG3DlrXQEvvSvqHRQ8IWhVoBUKiXc0mL+MrxqxGEVokYEAjUiWVA9p4iMEtMLSEmkgnSigwTYv4q1WjGk1YghjQYSa7Rgf2khkote65j5hs7VlBZb0ia7LWk1b668QNFnq1McVY6U1dd96Nsjb2qsPKb3oL5Uw2W8mdl+koMWIlzNiRaKPUKtaPkW5FOOOMxeymnc3Dj5SCHlyIeVQ97iRK0yJ60CaDhx1ECjMMDGL6ap4Wcdy2kbLq3chZnWLax3JwUelNq4baZdhi6/1PIANHeEPoAlbNhlyrc9CHiSFtQnWdiulekfKXApjDhZ2RZh1Pr0CrgZb4bLSVF9NLbFwZQgODfzRlJUn9xoRMeoI03yqL4xZzO5OCgMO4O3EjBjqcegPg5DSaezdESSQ9B09JGC0CmhUHrUemG2F0sCToQHxuJ/+mFtIeghHx5jB8CiZFyJA5sGB6wUvERej7Td/cgNoL588bIZYhuwQM7XIHku2h1hd8TXg6eZh395bTPl+Mvjv/m/tgMR3bu/Hn01JZfwAxsUMI//IqS2IDilL2duPad/m5IrArVbYw41NDb0Bnvcx8FEHwJvt45b3tvYG70cZCfjffhq0kHsMHwY9wBw/NDg+3CwpXH6E8ZTxvs7v6P2Tq7YDvCKfiDoFYI/nfW9eG9LEK0Fg8sVUxvxBmpACOZQMuEP8VXW9qfTR+sZY1eVV3EERY93mXzjOqCDcmT4MH746HCelSdGOR08+Wi7h98LckTKgT5izVtWep2jo3BP4uNjJr+SnhaWHhrI5upoTHW20iMjWdffZR4YANqwxMliW2hR63NCYkkFc0UMnMe9j7dlnYYmhL5WCWez2vAvBoIDoDA8sBAn/0DGv8qoLrFNjBho7wcDEc9DRQOhgdtEFDjUap5xj20271x9UC5+j3I/u8fwZsfxtJTdI7DnepNjRxr1EuVtUeMpCkOWQlhD3ZF0gEI1ug6bJ5nbmDjsm2uojbYoFi7DVbcshEoGB8pfjjEwgUrAfMn8dXpGJvMFk/kq/eL5j6GVQOzbdQzbULHsP0xetzkEVg326cMahb3OeQON0DW/KX+jse2FjbRYgfzep1TZhJrzNzW9fANA+NuswH1lHH70d/wYLgR/AOpaUTkSDgglbbzyohLrYxPBamlh3DrsWs1y5xEI0jGJoLWpqimofiOUY2hFucwAirVo8BuyC5uvDeJ+dg9LumyZJZmF3SDqebHP3CSJULt51l351LzrkRVuNDzOZpjQJfOduzLC7LNOQFEgOjZ+U3oFbMfttiSwRtjkXHYNbV9T05gdSrM4avOPHUfnaqbchsxnfybG+YxMAT/aRMfet6b5lx7ypyR3T3v/JuWegj8jnjCbd6aRyBtN5ZuID0ajmM0UblGOxqFyrFFotTSKZDiq4LqLxBvdVSMOwHmaPAliUqo1JgUki6B812DuGuzBm6+TCtLT7aSkxe3ywc+EVD5PnKtK0Q2eOP0d5W1OOr2IOLeee3RSfrPSUcCowCjuTNETBrUFAA07du4Y4NzlosRUjSUFjD9svARELxwNRYMgfx/+Su79p3m0qeKOSj0Lt8Oiytm3n8i49dotaZpx/6gjcR3xduVTJU5yWH50Vh4Vdifv56ie01Jiu+Ip34HogH0YDbv2O3YdU4wcsTKohzzqx0q6Aebo/oOyAKvaWM400V98hjdLuRUZ33T7eiDrA7hu2YY61tW77z4D/X1YB8ZvjN/AxNSUgyb8+M0ByB91uDsjQrROM0hrd8NukLBIIVdQZtwKeU+8bCgqqqwkkcJhp/P/b8fzSPILEX+5XEplcXHYSlK8czheOTq/J5H+fu49UrfD+xeN9peXSm2MwNchohEmfMzyRISTQVGQrXv+ovrW2evkqK4tjpgtn1UcUZMEHKHMXXMfS+49XaFwReSsp2cS2Nlhb0OX/6/6mVyFchXIi9JZRDCmJpvmgNu0IhmFvTUirdrHQ8psIf7f7kkqJULuN/W76TOIjCiViFAJ80M2SRnOA+b26WRaSlb5r+8eGLDY5cvVoniuuJjYMO6WQLQ7l2S6/TBexWUzNNO/bMavZFUEK4A02ulyPlytLo/edAttykrlwf34/oN1b42AjZ0q9Zy5c+apVPPmzl+gVi9YUOmo2rwu4CO6l7q/vUJWphNRcuKadJ2SnNDl7WqJjqHQsRzbjn31++IJCqT+rB5YOmOZJXkvDOy+3gTGksa1XM0BGTDXXQK09sGL+7B9h4KH8B25uN0OkP9McpNewTTqz/4Un1CarPeYZEZDXvbDX5KiB1+cnF2FXfoOGB1fzfFvneOr/qN1V2bmqdk1fwD74FDQDZthpBx2B914qAHj/KNTjh3xcXvcuE/BmP87DlHkG62MMihUispU5n1i0A2yfTBPJs976E/MjKRHcm/k5T9hSCv0cvH+kae/ylBlvAL/0yfVuOj1Z/atq6W8zhiu3b/OvkUbTQxKjATSqGznQVH0OJlUlnRoEPE/VaAZLO7WaWeWOMvUM6Zpi2yNUmnY9JWDkT6WWcdVagqsbVZNgZLbz7qeNk5DE4gMWqaw2Buucnr9wXJd0WiuWMZvyDbR6ebstlwjeB5VdLzSEZbJbJ2rf0y3MHg5RgcLlhaxOVYokFbUQkzB+SnJtdI1txQtofC5pvWNYrPeVV5OnsP74NSquaQw6xL4d/AnV6DSUmANVLhKelw9JT2A2CutoCOa6Y1dK1gk0SLa5B9/rJhkiC0+JkUM1s0RO44s4VtCJT6SqzE/Sp1Wkk8n8SAK6fwXlQTzBFe0XGKwPIr45rejAltzeU1U6Y97Z1EoyxM143fvxSbTW54DdtjSLM0LGj405AWbpRZr0wtoWoknK83luZAPEZ6zlCOTEd5JJLkckvKwdUpRp2ixEEQLg/rUVyl9MrWTpBTQ9aLPWaN85cUtUvSiqt4ZpUN/JgpL3W2QEuHylBAkWHRckHIwOflgigA0NfF94jHiBP7sgD2j2rowPX2anFxdEJCcJ+TaJqAz8tRKcbrbet3BkeYSLgL2cdSer1LZ81FN4Y7pBjVi5m+szN+YjMeZrMdg3dch6gwhgzEc9lYLh493hjqDnOUAYFJ7cbdJO7c0VkXuLqa0dIKWKtBoCftgLHZfOO6naZf8uYimK0Uu795sV6eMF/tF7L/qwZe4H0NGZUXsP7rjo1LCAQLj6hgqXIVp1lhWFZN5f2VOXi3aZ5+EPVwaS9OEDBujcup/JFkZvFyjgwXJiti5VqgmrWgWSjj1dSf0YXcxgDnRUMsafE09QOOottBrBwAh1/RN2SvmiAOvARLG20PZu68dn66sUJ4UFN4W9Swc2Hyn7MFkH8YP16fuQyhAMlySvHoNo0FLXbOletrn/xVNWLHCYf58VLuhfw9jh5cTHW7bLOACrRAd/dl/FcyJtWuwNctRHT6LdV3fejsngPdfqm+7HjgywEcnk1AUuXnAEQeA1omtNtGl851RzH5qSuKXcJu2XA9kfIDEzFiWkvLrOwWaHmcto7Cc2XOG13Pu/3/YvirzwiV1k/i1EQi3ux+EqCQzFcizX/yA//Ci7rggL3bLMom8HGNh/u4/IMn8XY6L4e96yWCt6BdgMTZu4BlgzdhWSdo9MqLtymtGUkRsexymAni1gW7E/fwiCVBgxoJgNwictl0zsIEtFG9n0VKAVSzlqF7R/QRFMYbztf0TsabH/kZsIhTOORrCPgp/iEHOAb7sSLLzsdGQ9mWNxvR3PKyP/GQFq79vJXa9chkfa6rdHHpfz0fYrYplQqzV3wdGNTqHg994dh8evoBfODIMNL9S87QQRJr+sZdOQYmuN951dBhwVwVu9ia4lkZGu7be/NiP3WnGDlavSnXPl/Kc/pw53dvZqVtn6fJ2DtxfttlSyAD43CZTjgz/iP94dPjLFCFZhOL4Hj32dlqht5hheuW8LAoZHl7cIwjQtj8FcME0SJ2KbuCu6AfCaVrnutC01yGTNXuH782jw035b9P+K0w8llRIXU32/Sf0JyTKnezqyu0j/Eop76MKlnVtfzpqGJ+If4gfxst+RXRlV6wKzZtjiu9XHb24RPP48acw7nvRHcM+OlL/OR3049YZVM8CC96t8fyu677TUt1sqQuidVMtn48yO4NXyALqnWgIJZUy1FpSK1aY53r/MyDFN23ysT8fM0UVNCOFNRZ/DOZCY9gn3xR71ucjw45poWng3aJZG+qSnrJ+puxnsFzKPHkg3xXHe1VtSywJ2xz+lbvklK2D7Y+k+iANu5qWM2OaLlMtMvgH2NPF7mHJlvlPdeQnFNeHAsWRhXMIliQ1xomJ2ZaX25wC/h+czXyMeovQX4tl+a83BqJ6/EQ7OmzDrUeG+cde40LcX5iyDXRdc20Lr4sVuauyDn5SluAM7irTVO4Ya6emPyJGa68zYkM+S1DzmP1XQ8vBNW25X/g1WF74CIj1VYIle8jyAiDSi43lSismThSLVKjfqokpMkRhexxA9BLj5hK9VjQ3UpoPLQVLOVE6mtSF699/Sn9qRTAonXZA7vLnUS6+arr4y+t1bjo/U7ZRcqGw8HyK6jN4c/JPhQUvkkEBxe1NOTr8oXv18X92DLThGf0ZsxR3HmlYDaxHjH4s7RbqyBhxh/LhecnNa/2Ec2TCWPpOVsLu/ZPi939CT6bTkses2k9IqEtmethSk0FOj0z4834C4fzuhGQGLZku9hsf1+fvTWjb+hAseNSQmXoumVEnY7Doq3JfrBoTOYh+Pt7Ng06jXsZk0fPgUfxbtFmIK/K2f0ePJDSejac4KPS/4gcPj/i9m+KTaPQI2rf3tRNuDcYzaTSm5uT3k+JvnRQyXdc+esVeQmJtMr0iU2LQyWiRozI5d5GAxaCxBCdvpVtnB6nDED2ZOnj2fnqbCJGLj9u31xWQwuwWWnTTnesB9gfJMTO6Y5K/vEl4tJG3CeGsFjoPbjNZHTOik78aapRthhIZkfJb9MuPRmwDpdfZA1ssXWnpApLMo8xmqvU0TvbAQVk4jcQgxUyMP5+npYJ68SpZCKXyefpssT636PVbCxmMbAH9NnpqdULi2mSlB5VbDHmM2+j11fHUNLae7RI4NQZ3ljJAWyBWu7JeYgtl68O2hF5/X5xsaaScQ+cJBCnh9lCZ9VK2h5k8Nd4cWTUmWUTf6ZP2i32y6IzXE84zNlfF/sK9+Nolj+mRYwJTCPELkxmeLJkwPRJX7YsnfD5nbCS9x7dyjvNE0J0GvZwBB/fHrzAcCbcoP9BzCGeWTUyktalRmwSXIAgB60q+IJlBgwXXZn782U2jImkqLElmxcFragJh74o/k2iMJCES4ca6JmROPYImTumTtAi1jN60jv95/9fyGryw/EKVe8Wordh3LXdmbE1MPLys407K7y2BfUwzbt1ssoaccSdlfPyjCWzAnk1duegrqS+m0ZWAPLtl0ZTgInBhdu2i1sZFoGH2gkVVYdXbzKUIsCsQjVIkejRE2wvSQBoxQmmAeP3g7Byyo7c1bvyIic/ryRwd2+iI/TUu/c0Vgzm9LosLvJs9/vF4wgsF+trMFFoGswCwh6grMsj/TNLf+Apw7huZMXHPeMJ5IaVcYdr5LXdbgZSnOWRUOEAPeX0UBZNGZT2zveM+s6ZShE1frzjpJM1cnq920i7SmRdpTvV8RID9TwaBtBHBEWmPtB+VPe2JfA6f/uAm/JHvXYuJD7Tqijm9NFJyBlsw/Vrwo4AAoCo7sI6yAvsCOyvq/FTURUA5yCcqWxF1gcvOaj6/ovmlj0FMyfZj+1UK0lQKw9hCtpAtZAvZcracLWfLK0OBXpuXtKOOOu3FPhWV+EtlMkfPAGmjkgKjTgP7FE1Mj47Os7ARlSRTTyuBamD7NicuqSZiTJWxUthmtplt9punAZ2pfDuM/Tb7bfbbled8E+fcoQyKLFTDOP7j4SAAaM7hFBpn4EoAfOy8hRP7GqAtM76xs7BLff9NeCdU7mGX0f9uHEvRk0D7jGd8N+HDaOAJx9F1LQCa9kcP1BIsu9VVRMj9NJMyjn6VTzme0N0WGdgCaL2jl3lbCuwNvwR7w+TIoeJoMk103DjUU6O1+DEtOYEnI1y7mgRdzZT006q55KOtbGDfUdFji+PT7P8unPnOXWtZoE/Rt1QHVf2l9nHtoVXkq8KbU4xXyEMM3iFN/c0xvz3w4O6Vmw5YVdAZ+Dac773byHfj2T48ZAAfqDR8GcYZQI+DvdkyI12eje95+jzrS0Frt+IxNgbkmjjMje8ONf4KgbU7nvG9KN1V8ylAiSgJnUbJ6AxKQe+gLHQeZaML6CLKObFc+uv9l/8smnOz3uibctdrtr4FgLLQi4C7/2IYloAeAAVg3jsB5SPAc/tPANgN8DPEneK822ZjhsNMFdNpSPz96F80bkOONnG2pvVjxegxFSgmjkKL6TSltwF8GdVDVGILzmPBHZ5kQxSMPmiwkJNYeXotqDJiLnZtGofOH8BYiJ36d6zPY9E6GwzS+lGDRVuyYYkUGXaPhJHNjjEF73koUxWkyxRpf/vEC1A7es2BazxtyLtFgyp/8DxBJy8sd73U5GUrCoYb3QcgJjl9GB8jO58uzvhQAnWhoOXhic8Ulq+fajLNUSXsKS+J5DaEzpXGHHFhYy2vr2oHedya9p9qS0MLCkOo3Mn9b7TeYiYfAm80T2m4hHrjBeKlJKQe+vVxUpNvw4q/LeW0SA6hxEpi3pmvzWlPtiSSDHitn3JsvRZUE210yVlcBV218ebab5JvHoFz04f+XCxoG+ni2gKPuUkas5858xZqrcOQn3yHiz2k+kf5lYdDZiN+zs32oJ/rNm0lRcV1h8eDm6Qxu90Zt601843W7sxNVoT/7hoIAHyO8m1Kz8d9VM8iCWIWAPjptbla7z0NLf3zmoce03cvA1DBAAAg4BcjZ3aZg5LJCii6aSIkvnsoi6uwSxJwuQIcRM/lthI3rotwwMBJGLUrnKvA0hV0c8JMGhWCCwpRlgvF0oF9vjKoOKfbanI1ACBW4HvZQjinFadPSO3BMWsZKMsot4n5Oew1nh5QwoEIe3ouTgYYxESRUyWNOaIzQ81qVtqsUMtQJHHd1ms2Adt90G3VPNuZDBnNJgqA5znsPJItsjnJEltM5ANMlgaj5Wke0mup5JawUH5VUujX7slmJSvaG2/rMjXJ8SJPtunvf3hyNpBc9uuzpM6TnZTIJb9+qq709esMLNYJ1spx3fhb1/pHyaVUil3Xev3GSd7M56x811r74KXzlN1cawh50SWjY9bj5Pm13xgXKMizHoBSAYrdSBYq4jCQjhMFi8HOq7psUSJBhwkHYyyaYMJDDupymJD8sHvqr+E3rso7XTvsyQlh/eQqO8M2ZEjX17bdx3SG5GU3exkn6br2trMxlH9G5TaOurJANtcMOwTGHLuKKkMXyuZ67Q2/n7MGSs5q/q7e85NsV3KZrjc23R2Sp54E5x10L1wNLXDlOEGoJBrbfkuX2t4hGXaHHN/t1Y06lIkVInoE1gMA5wCApw9tPCYNp8u3713h4a21vWxzkUa21eeqTCgA/WJQmfPDOAS4cGe5cY/mApzRNwjdpQQ6nVDfarxhBBgAFk4IkPcGgB6D6xMR0hgyDv/6iQRK/WzKiV74azmRikTuiSxCRJ7IFkB2whZMhEkE+HmVXhz08TNkdv7uY5cBDBqEYeoZtcKE1PIpVq1WjYBWVtWq1GoTZlKtlVozTK16LTJYNajXIKBVq0YtJDg4Wvg0q9WoVYtcLWqF5GrQrAZHPh1LNHHmzkkKi+TmA6q1MvCDexbz8LZDUibqtkPiQbtco2c+BNOclzsjREZtU6OpmtuHSKHcMp3BGbC6jFjpAs0h1xXqC02rtA0aaBniVZ3Vlpkatc50Gzypr8vm4iSolZO7lvnezwB4TvWGUXrzKURHACLnC9yH2+qkbYrtxFCF6Ucs1c654KJMWdiyXXLZFVf7I3jTefz4vvaNGtcs85l2r3hJ2FNBvetuCLgJISmFMj+T0wgGX7c69cL6HaTTQO8nBo3toTX1AjDZ4pZW7To0do610f0bfCgLTWE31Xs6TbPBRTu86RUnlyILHFPifd3ed6knhJEXDnirJ4aEbz8LQh8F/71IQ6xBVESDHsueWbHFBNuQbEHRSGijb82zGRVHXgp5wyZMZl4KSnEZ6PC5cKectsttd3zhpla97vLCOLZKtRrt1Cr8/fe/uLpGZVU3bdcP44QJZVxIpY2d3bL6ELe039ze3T88Pj2/vPIFQpF46sSBQ6Bm+xqtw+aoyCTWr37VRWAyshVO2OxAZpHpsqKKUiDfZXZFPtusgPw5bjaokJ2Dk0uRYiVKlSlXoZKbhxcG51Olml+NgFp1g4ut0jDv1jFA2WfiPZ26hin7xweCERTDCRqdwWSxOVweXyAUiSVSmVyhJFVqjVannx6oK267744hDxqMJrOFstrsDqfL7fH6/NTaIw5YGarQGK+C2A5+v1+GZYQ3OwGkj9qoL/07c68MvDvUbI+3nPa5e3P1+491W4Pneb/PVbe0e0xcErifthf4z5SaDruNHIZPTtOWuGOZ5irGvUSxkW/JfoTh1JjkFNPyh5i5jXGBAwdNb9HWEMX7YYHLwWds808fFfPtLrhkm0YWTh4dTg67oBYZjGJ8OlN0cG7hBO75FEIT2a6gomd2M4x8nBYtRWNC59ME/xX6CCpC5hs73aX3bRg8wBLFNjrF3Lum0d0QksV7MUchtmXLYd+jxg7MEFzx0Q1NwYJgae4GKw1OZGZ2YNZiDw/G43S8uWGWGRq++3KgyHWGg1xHhpnnwW9yu1qdDwn802z6c8dm6SwVTCrh3JLiDIfHpRg4gaW4xnwLuTAv16UXhe9xtRv/0ZOctDFKoEHB0+jpj6w+3221X2ROstEtkbT1AUq+oXc1tDz3ZD+5EuwkmulZ6hJPWmY2hWyau8Pr3Kebzs3307f3d/f3vb/VsZ+/2O14olfn0zE3sz+e1WUyRj/c+TQYen4ajL/+r7RZkA77RDTDxLxmOkbwRa/dU7/6DKsnfp34u8D2F0LWMITBgZbo4DvVNHO30MUYvhLDCZ8yXQK2wG1zagGykzS2qEgkn//NAMYw/V9cfwZ+czWnsVhR2CHxI5nuMglltp0rST2FvuauIyJPnHxXxvKaNZdTLjHVPjOdQDRLlCK+ZinlSDzTUOYI5sE5IDBIds9D6PBoFDTOGK26Aw+EuALqrnMAa1n0d0rxBYec5BTPIwFR/Ih6ltXDG6+m0fotynmMqrlQVVMw80au4EJcjpBxwCS9+RJPgbhy13+Mi2oxnpFP4yAVAYqosgahtpEs1SCIshK84yQrwqkobFIttH8qaUcvfOKNrhVrrmOXqSWIe5lRYXasCL1EFULWcFCqD6oXIE1F751QsaZMwOrTcg83/m8eaQZxiHNBffNgz4U/5lBU2aFmhew4tMamXRbHAM/83S3VGANAfxSOd+PYN62417OZExf//gj1cIUPjYtwkDQuMHCaxhGQZ7jguSOuVeOCBIDXwpEmRupKiiIuHJw7GP0P5FEUJ/Twd08Lg0Rw7dkhQE12Nv5HZtBXnIxNT/NpGH05i6N/dX8+b/49cxRcAQ==";var zt=16,Di=2.4,Fn=4,_u=1.1,Bn={body:new Ki({color:15131870,roughness:.6,metalness:0,clearcoat:.12,clearcoatRoughness:.6}),key:new Ki({color:15526886,roughness:.32,metalness:0,clearcoat:.5,clearcoatRoughness:.25}),hole:new pn({color:1513499,roughness:.9}),graphite:new Ki({color:3422012,roughness:.5,metalness:.15})},as="#2a2b2e",Ux="#6f6d68";async function af(){let n=new FontFace("JBM","url("+nf+")");await n.load(),document.fonts.add(n)}function Zn(n,e,t,i,s=96){let a=new Va(n,{depth:e-2*t,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelOffset:-t,bevelSegments:6,steps:1,curveSegments:s});a.translate(0,0,-(e-2*t)/2);let r=a.attributes.normal.clone(),o=tf(a,Tn.degToRad(32)),c=a.groups[0];for(let u=c.start;u<c.start+c.count;u++)o.attributes.normal.setXYZ(u,r.getX(u),r.getY(u),r.getZ(u));let l=new vt(o,i);return l.castShadow=!0,l.receiveShadow=!0,l}function ea(n,e){let t=new Ji(new Pa(_u,20),Bn.hole,n.length),i=new ht;return n.forEach((s,a)=>{let r=(s[2]||_u)/_u;i.makeScale(r,r,1),i.setPosition(s[0],s[1],e),t.setMatrixAt(a,i)}),t}function rf(n,e,t,i){let s=document.createElement("canvas");s.width=Math.round(n*t),s.height=Math.round(e*t);let a=s.getContext("2d");a.scale(t,t),i(a);let r=new bi(s);return r.colorSpace=Ot,r.anisotropy=8,r}function ui(n,e,t,i){return new vt(new ci(n,e),new pn({map:rf(n,e,t,i),transparent:!0,depthWrite:!1,roughness:.8}))}function or(n,e,t,i=40){n.setTransform(1,0,0,1,0,0),n.font=`500 ${Math.round(t*1.32*i)}px JBM`,n.textBaseline="middle",n.fillStyle=Ux,n.letterSpacing=`${.5*i}px`,n.fillText(e,0,3.5*i)}function of(n){let e=new an;for(let c of n.arms)e.add(Zn(new tn(c.pts.map(l=>new Ie(l[0],l[1]))),zt,Di,Bn.body));let t=Zn(new tn(n.tri.pts.map(c=>new Ie(c[0],c[1]))),zt,1.6,Bn.key);t.position.z=3.5,e.add(t),e.add(ea(n.holes,zt/2+.06));let i=ea(n.holes,0);i.rotation.x=Math.PI,i.position.z=-zt/2-.06,e.add(i);let s=n.arms.slice().sort((c,l)=>c.centroid[1]-l.centroid[1])[0],a=Math.min(...s.pts.filter(c=>c[1]>-108&&c[1]<-42).map(c=>c[0])),r=ui(62,7,40,c=>or(c,"AURALITY  AU-01",4));r.matrixAutoUpdate=!1;let o=new ht().makeBasis(new j(0,1,0),new j(0,0,-1),new j(-1,0,0));return o.setPosition(a-.05,-78,0),r.matrix.copy(o),e.add(r),e}function cf(n=10){let a=new an,r=new tn;r.absarc(0,0,90,0,Math.PI*2,!1);let o=new Wn;o.absarc(0,0,62,0,Math.PI*2,!0),r.holes.push(o),a.add(Zn(r,zt,Di,Bn.body));let c=ui(180,180,12,y=>{y.translate(90,90),y.strokeStyle=as,y.fillStyle=as,y.lineCap="butt";for(let E=0;E<60;E++){let v=(E*6-90)*Math.PI/180,S=E%5===0,w=66,L=w+(S?5:2.5);y.lineWidth=S?.8:.45,y.globalAlpha=S?1:.7,y.beginPath(),y.moveTo(w*Math.cos(v),w*Math.sin(v)),y.lineTo(L*Math.cos(v),L*Math.sin(v)),y.stroke()}y.globalAlpha=1,y.font="500 5.2px JBM",y.textAlign="center",y.textBaseline="middle";for(let E=1;E<=12;E++){let v=(E*30-90)*Math.PI/180;y.fillText(String(E).padStart(2,"0"),79.5*Math.cos(v),79.5*Math.sin(v)+.3)}});c.position.z=zt/2+.05,a.add(c);let l=new an,u=new tn;u.absarc(0,0,59,0,Math.PI*2,!1),l.add(Zn(u,zt+4,Di,Bn.key));let h=(zt+4)/2+.05,d=ui(118,118,14,y=>{y.translate(59,59),y.fillStyle=as,y.fillRect(-.7,-52,1.4,20)});d.position.z=h,l.add(d);let f=[],g=[Fn*Math.cos(Math.PI/6),Fn*Math.sin(Math.PI/6)];for(let y=-3;y<=3;y++)for(let E=-3;E<=3;E++){let v=E*g[0],S=y*Fn+E*g[1];Math.hypot(v,S)<=2*Fn+.1&&f.push([v,S])}l.add(ea(f,h+.01)),l.position.z=4/2,l.rotation.z=-n*Math.PI/6,a.add(l);let A=Tn.degToRad(315-17.5),p=Tn.degToRad(35),m=new La(90+.12,90+.12,7,64,1,!0,A,p);return m.rotateX(Math.PI/2),a.add(new vt(m,new pn({map:rf(55,7,40,y=>or(y,"AURALITY  AU-02",4)),transparent:!0,depthWrite:!1,roughness:.8}))),a}function hi(n,e,t){let i=e.length,s=(a,r)=>new Ie(r[0]-a[0],r[1]-a[1]);for(let a=0;a<i;a++){let r=e[(a+i-1)%i],o=e[a],c=e[(a+1)%i],l=s(o,r).normalize(),u=s(o,c).normalize(),h=t/Math.tan(Math.acos(l.dot(u))/2),d=[o[0]+l.x*h,o[1]+l.y*h],f=[o[0]+u.x*h,o[1]+u.y*h];a===0?n.moveTo(d[0],d[1]):n.lineTo(d[0],d[1]),n.quadraticCurveTo(o[0],o[1],f[0],f[1])}return n.closePath(),n}var sf=n=>[0,1,2,3,4,5].map(e=>[n*Math.cos(Math.PI/2+e*Math.PI/3),n*Math.sin(Math.PI/2+e*Math.PI/3)]);function lf(){let a=15*Fn,r=a+5.6/Math.cos(Math.PI/6),o=r+3/Math.cos(Math.PI/6),c=new an,l=hi(new tn,[[-84,-84],[84,-84],[84,84],[-84,84]],8);l.holes.push(hi(new Wn,sf(o).reverse(),5.5)),c.add(Zn(l,zt,Di,Bn.body,24));let u=Zn(hi(new tn,sf(r),4),zt,Di,Bn.body,24);u.position.z=-2,c.add(u);let h=[],d=[Fn*Math.cos(Math.PI/6),Fn*Math.sin(Math.PI/6)];for(let A=-15;A<=15;A++)for(let p=-15;p<=15;p++){let m=Math.max(Math.abs(A),Math.abs(p),Math.abs(A+p));m>15||h.push([p*d[0],A*Fn+p*d[1],m<=10?1.1:m<=13?.8:.5])}c.add(ea(h,zt/2-2+.06));let f=ui(62,7,40,A=>or(A,"AURALITY  AU-03",4));f.matrixAutoUpdate=!1;let g=new ht().makeBasis(new j(0,1,0),new j(0,0,-1),new j(-1,0,0));return g.setPosition(-84-.05,-41,0),f.matrix.copy(g),c.add(f),c.userData={Rf:a,Rp:r,Ro:o,holes:h.length},c}function uf(n=[4,9,7]){let i=[-24,0,24],s=3,a=-86,r=74,o=-78,c=12,l=new an,u=hi(new tn,[[-40,-110],[40,-110],[40,110],[-40,110]],8);for(let p of i)u.holes.push(hi(new Wn,[[p-s,r],[p+s,r],[p+s,a],[p-s,a]],2.9));l.add(Zn(u,zt,Di,Bn.body,24));let h=ui(80,220,12,p=>{p.translate(40,110),p.scale(1,-1),p.strokeStyle=as,p.lineCap="butt";for(let m of i)for(let y=0;y<=12;y++){let E=y%6===0,v=o+y*c;p.lineWidth=E?.8:.45,p.globalAlpha=E?1:.7,p.beginPath(),p.moveTo(m-6,v),p.lineTo(m-6-(E?5:2.5),v),p.stroke()}p.globalAlpha=1,p.scale(1,-1),p.fillStyle=as,p.font="500 5.2px JBM",p.textAlign="center",p.textBaseline="middle",["L","H","O"].forEach((m,y)=>p.fillText(m,i[y],98.3))});h.position.z=zt/2+.05,l.add(h);let d=[[0,92]],f=Fn;for(let p=0;p<6;p++)d.push([f*Math.cos(Math.PI/2+p*Math.PI/3),92+f*Math.sin(Math.PI/2+p*Math.PI/3)]);l.add(ea(d,zt/2+.06)),i.forEach((p,m)=>{let y=Zn(hi(new tn,[[-11,-5],[11,-5],[11,5],[-11,5]],2.4),8,1.6,Bn.key,12),E=zt/2+1.5+4;y.position.set(p,o+n[m]*c,E),l.add(y);let v=ui(22,10,20,S=>{S.fillStyle=as,S.fillRect(2.5,4.45,17,1.1)});v.position.set(p,o+n[m]*c,E+4.05),l.add(v),(l.userData.cursores||=[]).push([y,v])}),l.userData.TR0=o,l.userData.STEP=c;let g=ui(62,7,40,p=>or(p,"AURALITY  AU-04",4));g.matrixAutoUpdate=!1;let A=new ht().makeBasis(new j(0,1,0),new j(0,0,-1),new j(-1,0,0));return A.setPosition(-40-.05,-67,0),g.matrix.copy(A),l.add(g),l}function hf(n,e=2){let h=new an,d=hi(new tn,[[-100,-34],[100,-34],[100,34],[-100,34]],8);d.holes.push(hi(new Wn,[[-178/2,46/2],[178/2,46/2],[178/2,-46/2],[-178/2,-46/2]],5.5)),h.add(Zn(d,zt,Di,Bn.body,24));let f=n.tri.centroid,g=n.tri.pts.map(v=>[v[0]-f[0],v[1]-f[1]]),A=Math.max(...g.map(v=>v[1]))-Math.min(...g.map(v=>v[1])),p=13/A,m=[null,v=>v.fillRect(-5.5,-5.5,11,11),v=>{v.beginPath(),g.forEach((S,w)=>w?v.lineTo(S[0]*p,-S[1]*p):v.moveTo(S[0]*p,-S[1]*p)),v.closePath(),v.fill()},v=>{v.fillRect(-5.5,-6,3.6,12),v.fillRect(1.9,-6,3.6,12)},v=>{v.beginPath(),v.arc(0,0,6,0,Math.PI*2),v.fill()}];for(let v=0;v<5;v++){let S=v===e,w=S?zt:zt+4,L=S?-2:2,_=-178/2+3+32/2+v*35,R=Zn(hi(new tn,[[-32/2,-40/2],[32/2,-40/2],[32/2,40/2],[-32/2,40/2]],4),w,Di,Bn.key,16);R.position.set(_,0,L),h.add(R);let U=L+w/2+.05;if(m[v]){let z=ui(32,40,16,k=>{k.translate(16,20),k.fillStyle=as,m[v](k)});z.position.set(_,0,U),h.add(z)}else{let z=[[_,0]];for(let k=0;k<6;k++)z.push([_+Fn*Math.cos(Math.PI/2+k*Math.PI/3),Fn*Math.sin(Math.PI/2+k*Math.PI/3)]);h.add(ea(z,U+.01))}}let y=ui(52,7,40,v=>or(v,"AURALITY  AU-05",3.6));y.matrixAutoUpdate=!1;let E=new ht().makeBasis(new j(0,1,0),new j(0,0,-1),new j(-1,0,0));return E.setPosition(-100-.05,.5,0),y.matrix.copy(E),h.add(y),h.userData={ancho:200,alto:68},h}var df={height:240,width:207.6,stroke:27,pitch:4,inset:5.6,arms:[{area:3966.4,centroid:[33.297,-58.997],pts:[[36.965,-18.184],[35.78,-18.397],[34.594,-18.781],[33.409,-19.326],[32.223,-19.953],[31.037,-20.632],[29.852,-21.314],[28.666,-21.999],[27.481,-22.685],[26.295,-23.365],[25.109,-24.042],[23.924,-24.718],[22.738,-25.405],[21.553,-26.094],[20.367,-26.786],[19.181,-27.477],[17.996,-28.164],[16.81,-28.841],[15.625,-29.524],[14.439,-30.211],[13.253,-30.902],[12.068,-31.581],[10.882,-32.263],[9.697,-32.936],[8.511,-33.627],[7.325,-34.318],[6.14,-35.008],[4.954,-35.691],[3.769,-36.367],[2.583,-37.052],[1.397,-37.739],[.212,-38.43],[-.972,-39.177],[-2.129,-40.057],[-3.206,-41.079],[-4.124,-42.216],[-4.86,-43.402],[-5.387,-44.587],[-5.746,-45.773],[-5.993,-46.958],[-6.147,-48.144],[-6.247,-49.33],[-6.298,-50.515],[-6.309,-51.701],[-6.309,-52.886],[-6.309,-54.072],[-6.309,-55.258],[-6.309,-56.443],[-6.309,-57.629],[-6.309,-58.814],[-6.309,-60],[-6.309,-61.186],[-6.309,-62.371],[-6.309,-63.557],[-6.309,-64.742],[-6.309,-65.928],[-6.309,-67.114],[-6.309,-68.299],[-6.309,-69.485],[-6.309,-70.67],[-6.309,-71.856],[-6.309,-73.042],[-6.309,-74.227],[-6.309,-75.413],[-6.309,-76.598],[-6.309,-77.784],[-6.309,-78.97],[-6.309,-80.155],[-6.309,-81.341],[-6.309,-82.526],[-6.309,-83.712],[-6.309,-84.898],[-6.309,-86.083],[-6.309,-87.269],[-6.309,-88.454],[-6.309,-89.64],[-6.309,-90.826],[-6.309,-92.011],[-6.309,-93.197],[-6.309,-94.382],[-6.309,-95.568],[-6.309,-96.754],[-6.309,-97.939],[-6.309,-99.125],[-6.309,-100.311],[-6.309,-101.496],[-6.309,-102.682],[-6.309,-103.867],[-6.309,-105.053],[-6.309,-106.239],[-6.309,-107.424],[-6.309,-108.61],[-6.309,-109.795],[-6.309,-110.981],[-6.292,-112.167],[-6.238,-113.352],[-6.093,-114.538],[-5.799,-115.723],[-5.248,-116.905],[-4.41,-117.989],[-3.339,-118.847],[-2.159,-119.382],[-.974,-119.596],[.212,-119.641],[1.397,-119.651],[2.583,-119.67],[3.769,-119.7],[4.954,-119.773],[6.14,-119.839],[7.325,-119.843],[8.511,-119.773],[9.697,-119.64],[10.882,-119.436],[12.068,-119.073],[13.235,-118.42],[14.236,-117.511],[14.93,-116.401],[15.307,-115.215],[15.491,-114.03],[15.632,-112.844],[15.737,-111.658],[15.788,-110.473],[15.794,-109.287],[15.794,-108.102],[15.794,-106.916],[15.794,-105.73],[15.794,-104.545],[15.79,-103.359],[15.743,-102.174],[15.69,-100.988],[15.625,-99.802],[15.538,-98.617],[15.459,-97.431],[15.378,-96.246],[15.337,-95.06],[15.31,-93.874],[15.271,-92.689],[15.244,-91.503],[15.218,-90.318],[15.167,-89.132],[15.115,-87.946],[15.062,-86.761],[15.032,-85.575],[15.032,-84.39],[15.032,-83.204],[15.032,-82.018],[15.032,-80.833],[15.032,-79.647],[15.032,-78.462],[15.032,-77.276],[15.068,-76.09],[15.12,-74.905],[15.194,-73.719],[15.259,-72.534],[15.325,-71.348],[15.448,-70.162],[15.615,-68.977],[15.788,-67.791],[15.967,-66.606],[16.174,-65.42],[16.422,-64.234],[16.718,-63.049],[17.025,-61.863],[17.382,-60.677],[17.77,-59.492],[18.223,-58.306],[18.733,-57.121],[19.319,-55.935],[19.987,-54.749],[20.747,-53.564],[21.622,-52.378],[22.64,-51.202],[23.762,-50.094],[24.94,-49.098],[26.126,-48.24],[27.311,-47.523],[28.497,-46.917],[29.682,-46.403],[30.868,-45.987],[32.054,-45.643],[33.239,-45.387],[34.425,-45.197],[35.61,-45.046],[36.796,-44.939],[37.982,-44.836],[39.167,-44.815],[40.353,-44.894],[41.538,-45.078],[42.724,-45.34],[43.91,-45.671],[45.095,-46.072],[46.281,-46.529],[47.466,-47.013],[48.652,-47.54],[49.838,-48.074],[51.023,-48.643],[52.209,-49.209],[53.394,-49.8],[54.58,-50.415],[55.766,-51.05],[56.951,-51.695],[58.137,-52.339],[59.323,-52.994],[60.508,-53.647],[61.694,-54.322],[62.879,-54.994],[64.065,-55.696],[65.251,-56.389],[66.436,-57.083],[67.622,-57.793],[68.807,-58.504],[69.993,-59.219],[71.179,-59.93],[72.364,-60.649],[73.55,-61.363],[74.735,-62.089],[75.921,-62.808],[77.107,-63.534],[78.292,-64.257],[79.478,-64.97],[80.663,-65.693],[81.849,-66.406],[83.035,-67.131],[84.22,-67.829],[85.406,-68.523],[86.591,-69.193],[87.777,-69.842],[88.963,-70.469],[90.148,-71.041],[91.334,-71.495],[92.519,-71.736],[93.705,-71.689],[94.891,-71.299],[96.048,-70.576],[97.128,-69.596],[98.084,-68.465],[98.895,-67.283],[99.603,-66.097],[100.256,-64.912],[100.881,-63.726],[101.519,-62.541],[102.194,-61.355],[102.832,-60.169],[103.339,-58.984],[103.613,-57.798],[103.626,-56.613],[103.382,-55.427],[102.8,-54.255],[101.92,-53.193],[100.819,-52.284],[99.633,-51.533],[98.447,-50.848],[97.262,-50.159],[96.076,-49.461],[94.891,-48.774],[93.705,-48.089],[92.519,-47.408],[91.334,-46.733],[90.148,-46.044],[88.963,-45.359],[87.777,-44.664],[86.591,-43.991],[85.406,-43.313],[84.22,-42.634],[83.035,-41.949],[81.849,-41.245],[80.663,-40.56],[79.478,-39.873],[78.292,-39.195],[77.107,-38.516],[75.921,-37.827],[74.735,-37.146],[73.55,-36.463],[72.364,-35.785],[71.179,-35.099],[69.993,-34.408],[68.807,-33.723],[67.622,-33.028],[66.436,-32.343],[65.251,-31.662],[64.065,-30.985],[62.879,-30.303],[61.694,-29.607],[60.508,-28.926],[59.323,-28.247],[58.137,-27.573],[56.951,-26.882],[55.766,-26.193],[54.58,-25.508],[53.394,-24.82],[52.209,-24.14],[51.023,-23.448],[49.838,-22.759],[48.652,-22.066],[47.466,-21.387],[46.281,-20.717],[45.095,-20.036],[43.91,-19.4],[42.724,-18.841],[41.538,-18.43],[40.353,-18.199],[39.167,-18.094],[37.982,-18.099]]},{area:3960.7,centroid:[-62.05,.124],pts:[[-93.112,62.667],[-94.213,62.454],[-95.307,61.946],[-96.345,61.204],[-97.296,60.269],[-98.137,59.227],[-98.876,58.137],[-99.55,57.036],[-100.164,55.935],[-100.736,54.834],[-101.31,53.733],[-101.918,52.632],[-102.539,51.531],[-103.064,50.43],[-103.44,49.33],[-103.572,48.229],[-103.504,47.128],[-103.192,46.027],[-102.578,44.937],[-101.701,43.96],[-100.649,43.117],[-99.548,42.402],[-98.447,41.762],[-97.347,41.117],[-96.246,40.483],[-95.145,39.852],[-94.044,39.214],[-92.943,38.58],[-91.842,37.94],[-90.741,37.3],[-89.64,36.674],[-88.539,36.04],[-87.438,35.417],[-86.337,34.784],[-85.236,34.141],[-84.135,33.505],[-83.035,32.863],[-81.934,32.229],[-80.833,31.589],[-79.732,30.951],[-78.631,30.315],[-77.53,29.673],[-76.429,29.041],[-75.328,28.423],[-74.227,27.789],[-73.126,27.157],[-72.025,26.515],[-70.924,25.87],[-69.824,25.235],[-68.723,24.605],[-67.622,23.975],[-66.521,23.331],[-65.42,22.689],[-64.319,22.048],[-63.218,21.406],[-62.117,20.785],[-61.016,20.152],[-59.915,19.486],[-58.814,18.76],[-57.713,17.937],[-56.635,17.012],[-55.606,16.007],[-54.663,14.945],[-53.818,13.846],[-53.069,12.745],[-52.414,11.644],[-51.836,10.543],[-51.343,9.442],[-50.914,8.342],[-50.543,7.241],[-50.225,6.14],[-49.986,5.039],[-49.791,3.938],[-49.672,2.837],[-49.54,1.736],[-49.467,.635],[-49.467,-.466],[-49.544,-1.567],[-49.676,-2.668],[-49.802,-3.769],[-49.998,-4.869],[-50.239,-5.97],[-50.562,-7.071],[-50.939,-8.172],[-51.373,-9.273],[-51.866,-10.374],[-52.448,-11.475],[-53.114,-12.576],[-53.861,-13.671],[-54.699,-14.748],[-55.625,-15.794],[-56.641,-16.78],[-57.713,-17.702],[-58.814,-18.523],[-59.915,-19.264],[-61.016,-19.932],[-62.117,-20.566],[-63.218,-21.187],[-64.319,-21.825],[-65.42,-22.469],[-66.521,-23.105],[-67.622,-23.739],[-68.723,-24.372],[-69.824,-24.993],[-70.924,-25.633],[-72.025,-26.274],[-73.126,-26.91],[-74.227,-27.556],[-75.328,-28.188],[-76.429,-28.824],[-77.53,-29.457],[-78.631,-30.1],[-79.732,-30.736],[-80.833,-31.369],[-81.934,-32.005],[-83.035,-32.628],[-84.135,-33.258],[-85.236,-33.911],[-86.337,-34.551],[-87.438,-35.195],[-88.539,-35.823],[-89.64,-36.448],[-90.741,-37.084],[-91.842,-37.724],[-92.943,-38.366],[-94.044,-39.004],[-95.145,-39.634],[-96.246,-40.266],[-97.347,-40.889],[-98.447,-41.525],[-99.548,-42.173],[-100.649,-42.876],[-101.703,-43.721],[-102.58,-44.693],[-103.195,-45.773],[-103.515,-46.874],[-103.583,-47.975],[-103.455,-49.076],[-103.077,-50.176],[-102.548,-51.277],[-101.927,-52.378],[-101.319,-53.479],[-100.741,-54.58],[-100.167,-55.681],[-99.558,-56.782],[-98.886,-57.883],[-98.148,-58.972],[-97.301,-60.028],[-96.343,-60.971],[-95.303,-61.703],[-94.213,-62.168],[-93.112,-62.356],[-92.011,-62.281],[-90.91,-61.995],[-89.809,-61.522],[-88.709,-60.924],[-87.608,-60.295],[-86.507,-59.652],[-85.406,-59.021],[-84.305,-58.383],[-83.204,-57.757],[-82.103,-57.13],[-81.002,-56.494],[-79.901,-55.86],[-78.8,-55.212],[-77.699,-54.573],[-76.598,-53.942],[-75.498,-53.304],[-74.397,-52.681],[-73.296,-52.04],[-72.195,-51.394],[-71.094,-50.756],[-69.993,-50.122],[-68.892,-49.493],[-67.791,-48.872],[-66.69,-48.232],[-65.589,-47.594],[-64.488,-46.947],[-63.387,-46.311],[-62.287,-45.673],[-61.186,-45.041],[-60.085,-44.414],[-58.984,-43.772],[-57.883,-43.132],[-56.782,-42.502],[-55.681,-41.864],[-54.58,-41.239],[-53.479,-40.607],[-52.378,-39.963],[-51.277,-39.325],[-50.176,-38.684],[-49.076,-38.049],[-47.975,-37.413],[-46.874,-36.781],[-45.773,-36.145],[-44.672,-35.496],[-43.571,-34.861],[-42.47,-34.229],[-41.369,-33.595],[-40.268,-32.976],[-39.167,-32.342],[-38.066,-31.702],[-36.965,-31.064],[-35.865,-30.426],[-34.764,-29.792],[-33.663,-29.146],[-32.562,-28.423],[-31.489,-27.573],[-30.503,-26.598],[-29.671,-25.533],[-29.007,-24.432],[-28.521,-23.331],[-28.149,-22.23],[-27.889,-21.129],[-27.737,-20.028],[-27.669,-18.927],[-27.65,-17.826],[-27.65,-16.725],[-27.65,-15.625],[-27.65,-14.524],[-27.65,-13.423],[-27.65,-12.322],[-27.65,-11.221],[-27.65,-10.12],[-27.65,-9.019],[-27.65,-7.918],[-27.65,-6.817],[-27.65,-5.716],[-27.65,-4.615],[-27.65,-3.514],[-27.65,-2.414],[-27.65,-1.313],[-27.65,-.212],[-27.65,.889],[-27.65,1.99],[-27.65,3.091],[-27.65,4.192],[-27.65,5.293],[-27.65,6.394],[-27.65,7.495],[-27.65,8.596],[-27.65,9.697],[-27.65,10.797],[-27.65,11.898],[-27.65,12.999],[-27.65,14.1],[-27.65,15.201],[-27.65,16.302],[-27.65,17.403],[-27.65,18.504],[-27.68,19.605],[-27.787,20.706],[-27.968,21.807],[-28.277,22.908],[-28.689,24.008],[-29.242,25.109],[-29.972,26.197],[-30.868,27.23],[-31.897,28.149],[-32.985,28.941],[-34.086,29.635],[-35.187,30.27],[-36.288,30.894],[-37.389,31.529],[-38.49,32.176],[-39.591,32.816],[-40.692,33.45],[-41.793,34.088],[-42.893,34.718],[-43.994,35.358],[-45.095,36],[-46.196,36.632],[-47.297,37.265],[-48.398,37.893],[-49.499,38.526],[-50.6,39.169],[-51.701,39.803],[-52.802,40.447],[-53.903,41.074],[-55.004,41.704],[-56.104,42.333],[-57.205,42.971],[-58.306,43.624],[-59.407,44.265],[-60.508,44.896],[-61.609,45.528],[-62.71,46.153],[-63.811,46.785],[-64.912,47.423],[-66.013,48.061],[-67.114,48.707],[-68.215,49.339],[-69.315,49.973],[-70.416,50.606],[-71.517,51.242],[-72.618,51.893],[-73.719,52.527],[-74.82,53.159],[-75.921,53.786],[-77.022,54.407],[-78.123,55.045],[-79.224,55.687],[-80.325,56.319],[-81.426,56.963],[-82.526,57.593],[-83.627,58.233],[-84.728,58.869],[-85.829,59.509],[-86.93,60.151],[-88.031,60.781],[-89.132,61.404],[-90.233,61.957],[-91.334,62.413],[-92.435,62.653]]},{area:3954.3,centroid:[33.425,59.188],pts:[[.127,119.877],[-1.059,119.739],[-2.244,119.453],[-3.417,118.936],[-4.495,118.121],[-5.321,117.069],[-5.85,115.893],[-6.11,114.707],[-6.236,113.522],[-6.292,112.336],[-6.309,111.15],[-6.309,109.965],[-6.309,108.779],[-6.309,107.594],[-6.309,106.408],[-6.309,105.222],[-6.309,104.037],[-6.309,102.851],[-6.309,101.665],[-6.309,100.48],[-6.309,99.294],[-6.309,98.109],[-6.309,96.923],[-6.309,95.737],[-6.309,94.552],[-6.309,93.366],[-6.309,92.181],[-6.309,90.995],[-6.309,89.809],[-6.309,88.624],[-6.309,87.438],[-6.309,86.253],[-6.309,85.067],[-6.309,83.881],[-6.309,82.696],[-6.309,81.51],[-6.309,80.325],[-6.309,79.139],[-6.309,77.953],[-6.309,76.768],[-6.309,75.582],[-6.309,74.397],[-6.309,73.211],[-6.309,72.025],[-6.309,70.84],[-6.309,69.654],[-6.309,68.469],[-6.309,67.283],[-6.309,66.097],[-6.309,64.912],[-6.309,63.726],[-6.309,62.541],[-6.309,61.355],[-6.309,60.169],[-6.309,58.984],[-6.309,57.798],[-6.309,56.613],[-6.309,55.427],[-6.309,54.241],[-6.279,53.056],[-6.206,51.87],[-6.098,50.685],[-5.95,49.499],[-5.752,48.313],[-5.453,47.128],[-5.061,45.942],[-4.553,44.757],[-3.94,43.571],[-3.181,42.385],[-2.28,41.22],[-1.249,40.127],[-.12,39.135],[1.059,38.296],[2.244,37.551],[3.43,36.877],[4.615,36.203],[5.801,35.52],[6.987,34.828],[8.172,34.114],[9.358,33.412],[10.543,32.699],[11.729,31.999],[12.915,31.286],[14.1,30.571],[15.286,29.859],[16.471,29.146],[17.657,28.455],[18.843,27.752],[20.028,27.061],[21.214,26.361],[22.399,25.672],[23.585,24.991],[24.771,24.325],[25.956,23.662],[27.142,22.996],[28.327,22.341],[29.513,21.701],[30.699,21.086],[31.884,20.497],[33.07,19.934],[34.255,19.402],[35.441,18.912],[36.627,18.504],[37.812,18.244],[38.998,18.231],[40.183,18.459],[41.369,18.871],[42.555,19.383],[43.74,19.934],[44.926,20.514],[46.112,21.093],[47.297,21.699],[48.483,22.32],[49.668,22.964],[50.854,23.611],[52.04,24.251],[53.225,24.889],[54.411,25.548],[55.596,26.21],[56.782,26.893],[57.968,27.563],[59.153,28.237],[60.339,28.894],[61.524,29.566],[62.71,30.251],[63.896,30.936],[65.081,31.628],[66.267,32.315],[67.452,32.998],[68.638,33.683],[69.824,34.367],[71.009,35.068],[72.195,35.763],[73.38,36.457],[74.566,37.146],[75.752,37.842],[76.937,38.542],[78.123,39.237],[79.308,39.935],[80.494,40.629],[81.68,41.335],[82.865,42.035],[84.051,42.739],[85.236,43.443],[86.422,44.134],[87.608,44.834],[88.793,45.53],[89.979,46.243],[91.164,46.945],[92.35,47.636],[93.536,48.321],[94.721,49.002],[95.907,49.702],[97.092,50.397],[98.278,51.078],[99.464,51.742],[100.642,52.427],[101.756,53.267],[102.674,54.273],[103.301,55.427],[103.606,56.613],[103.634,57.798],[103.414,58.984],[102.934,60.169],[102.32,61.355],[101.65,62.541],[101.016,63.726],[100.388,64.912],[99.748,66.097],[99.055,67.283],[98.278,68.461],[97.352,69.603],[96.296,70.627],[95.145,71.386],[93.959,71.818],[92.773,71.931],[91.588,71.756],[90.402,71.344],[89.217,70.744],[88.031,70.072],[86.845,69.381],[85.66,68.706],[84.474,68.028],[83.289,67.345],[82.103,66.66],[80.917,65.966],[79.732,65.283],[78.546,64.598],[77.361,63.914],[76.175,63.227],[74.989,62.529],[73.804,61.85],[72.618,61.172],[71.433,60.499],[70.247,59.819],[69.061,59.131],[67.876,58.447],[66.69,57.753],[65.505,57.074],[64.319,56.389],[63.133,55.704],[61.948,55.011],[60.762,54.315],[59.577,53.639],[58.391,52.96],[57.205,52.284],[56.02,51.599],[54.834,50.914],[53.649,50.233],[52.463,49.544],[51.277,48.863],[50.092,48.178],[48.906,47.53],[47.721,46.936],[46.535,46.435],[45.349,46.029],[44.164,45.705],[42.978,45.425],[41.793,45.242],[40.607,45.129],[39.421,45.095],[38.236,45.095],[37.05,45.137],[35.865,45.265],[34.679,45.455],[33.493,45.731],[32.308,46.04],[31.122,46.418],[29.936,46.885],[28.751,47.436],[27.565,48.057],[26.38,48.759],[25.196,49.538],[24.037,50.419],[22.891,51.402],[21.786,52.491],[20.745,53.649],[19.802,54.834],[18.98,56.02],[18.271,57.205],[17.655,58.391],[17.126,59.577],[16.671,60.762],[16.3,61.948],[16.022,63.133],[15.8,64.319],[15.623,65.505],[15.482,66.69],[15.395,67.876],[15.371,69.061],[15.371,70.247],[15.371,71.433],[15.371,72.618],[15.371,73.804],[15.371,74.989],[15.371,76.175],[15.371,77.361],[15.371,78.546],[15.371,79.732],[15.371,80.917],[15.371,82.103],[15.371,83.289],[15.371,84.474],[15.371,85.66],[15.371,86.845],[15.371,88.031],[15.371,89.217],[15.371,90.402],[15.371,91.588],[15.371,92.773],[15.371,93.959],[15.371,95.145],[15.371,96.33],[15.371,97.516],[15.371,98.701],[15.371,99.887],[15.371,101.073],[15.371,102.258],[15.371,103.444],[15.371,104.629],[15.371,105.815],[15.371,107.001],[15.371,108.186],[15.371,109.372],[15.371,110.558],[15.371,111.743],[15.371,112.929],[15.361,114.114],[15.265,115.3],[14.943,116.486],[14.302,117.635],[13.353,118.62],[12.235,119.323],[11.052,119.698],[9.866,119.813],[8.68,119.835],[7.495,119.856],[6.309,119.901],[5.124,119.946],[3.938,119.958],[2.752,119.958],[1.567,119.948],[.381,119.897]]}],tri:{area:542.7,centroid:[4.408,.118],pts:[[-2.159,14.84],[-2.414,14.793],[-2.668,14.725],[-2.922,14.635],[-3.174,14.533],[-3.422,14.414],[-3.665,14.279],[-3.904,14.127],[-4.137,13.959],[-4.359,13.78],[-4.568,13.59],[-4.766,13.389],[-4.952,13.176],[-5.127,12.95],[-5.289,12.715],[-5.436,12.472],[-5.57,12.226],[-5.688,11.977],[-5.79,11.729],[-5.876,11.475],[-5.953,11.221],[-6.021,10.967],[-6.076,10.713],[-6.119,10.459],[-6.157,10.205],[-6.191,9.951],[-6.219,9.697],[-6.241,9.442],[-6.258,9.188],[-6.271,8.934],[-6.283,8.68],[-6.29,8.426],[-6.296,8.172],[-6.302,7.918],[-6.307,7.664],[-6.309,7.41],[-6.309,7.156],[-6.309,6.902],[-6.309,6.648],[-6.309,6.394],[-6.309,6.14],[-6.309,5.886],[-6.309,5.632],[-6.309,5.378],[-6.309,5.124],[-6.309,4.869],[-6.309,4.615],[-6.309,4.361],[-6.309,4.107],[-6.309,3.853],[-6.309,3.599],[-6.309,3.345],[-6.309,3.091],[-6.309,2.837],[-6.309,2.583],[-6.309,2.329],[-6.309,2.075],[-6.309,1.821],[-6.309,1.567],[-6.309,1.313],[-6.309,1.059],[-6.309,.805],[-6.309,.55],[-6.309,.296],[-6.309,.042],[-6.309,-.212],[-6.309,-.466],[-6.309,-.72],[-6.309,-.974],[-6.309,-1.228],[-6.309,-1.482],[-6.309,-1.736],[-6.309,-1.99],[-6.309,-2.244],[-6.309,-2.498],[-6.309,-2.752],[-6.309,-3.006],[-6.309,-3.26],[-6.309,-3.514],[-6.309,-3.769],[-6.309,-4.023],[-6.309,-4.277],[-6.309,-4.531],[-6.309,-4.785],[-6.309,-5.039],[-6.309,-5.293],[-6.309,-5.547],[-6.309,-5.801],[-6.309,-6.055],[-6.309,-6.309],[-6.309,-6.563],[-6.309,-6.817],[-6.309,-7.071],[-6.309,-7.325],[-6.303,-7.579],[-6.298,-7.833],[-6.292,-8.088],[-6.285,-8.342],[-6.273,-8.596],[-6.258,-8.85],[-6.241,-9.104],[-6.219,-9.358],[-6.194,-9.612],[-6.164,-9.866],[-6.13,-10.12],[-6.089,-10.374],[-6.04,-10.628],[-5.978,-10.882],[-5.904,-11.136],[-5.82,-11.39],[-5.724,-11.644],[-5.611,-11.898],[-5.483,-12.151],[-5.342,-12.397],[-5.187,-12.636],[-5.018,-12.866],[-4.837,-13.088],[-4.642,-13.299],[-4.435,-13.496],[-4.215,-13.682],[-3.985,-13.852],[-3.746,-14.004],[-3.503,-14.14],[-3.255,-14.258],[-3.006,-14.36],[-2.752,-14.445],[-2.498,-14.512],[-2.244,-14.565],[-1.99,-14.603],[-1.736,-14.627],[-1.482,-14.638],[-1.228,-14.633],[-.974,-14.612],[-.72,-14.582],[-.466,-14.535],[-.212,-14.478],[.042,-14.413],[.296,-14.337],[.55,-14.253],[.805,-14.157],[1.059,-14.048],[1.313,-13.929],[1.567,-13.803],[1.821,-13.669],[2.075,-13.532],[2.329,-13.391],[2.583,-13.248],[2.837,-13.103],[3.091,-12.95],[3.345,-12.802],[3.599,-12.653],[3.853,-12.504],[4.107,-12.35],[4.361,-12.196],[4.615,-12.047],[4.869,-11.904],[5.124,-11.759],[5.378,-11.612],[5.632,-11.467],[5.886,-11.319],[6.14,-11.166],[6.394,-11.018],[6.648,-10.873],[6.902,-10.73],[7.156,-10.583],[7.41,-10.436],[7.664,-10.291],[7.918,-10.15],[8.172,-10.007],[8.426,-9.86],[8.68,-9.713],[8.934,-9.565],[9.188,-9.414],[9.442,-9.264],[9.697,-9.119],[9.951,-8.976],[10.205,-8.829],[10.459,-8.678],[10.713,-8.532],[10.967,-8.387],[11.221,-8.24],[11.475,-8.089],[11.729,-7.943],[11.983,-7.798],[12.237,-7.649],[12.491,-7.498],[12.745,-7.354],[12.999,-7.211],[13.253,-7.069],[13.507,-6.924],[13.761,-6.78],[14.016,-6.635],[14.27,-6.49],[14.524,-6.343],[14.778,-6.196],[15.032,-6.053],[15.286,-5.908],[15.54,-5.761],[15.794,-5.615],[16.048,-5.47],[16.302,-5.325],[16.556,-5.178],[16.81,-5.031],[17.064,-4.881],[17.318,-4.725],[17.572,-4.568],[17.826,-4.408],[18.077,-4.245],[18.323,-4.073],[18.564,-3.895],[18.799,-3.706],[19.027,-3.514],[19.245,-3.315],[19.452,-3.108],[19.646,-2.895],[19.827,-2.675],[19.996,-2.447],[20.152,-2.212],[20.294,-1.971],[20.418,-1.729],[20.525,-1.48],[20.615,-1.228],[20.687,-.974],[20.741,-.72],[20.783,-.466],[20.807,-.212],[20.821,.042],[20.821,.296],[20.807,.55],[20.779,.805],[20.736,1.059],[20.674,1.313],[20.591,1.567],[20.489,1.821],[20.371,2.073],[20.235,2.319],[20.083,2.56],[19.919,2.796],[19.742,3.023],[19.55,3.242],[19.347,3.454],[19.129,3.663],[18.899,3.865],[18.66,4.058],[18.415,4.243],[18.165,4.42],[17.911,4.591],[17.657,4.753],[17.403,4.907],[17.149,5.056],[16.895,5.206],[16.641,5.353],[16.387,5.498],[16.133,5.645],[15.879,5.795],[15.625,5.942],[15.371,6.085],[15.116,6.23],[14.862,6.375],[14.608,6.52],[14.354,6.663],[14.1,6.808],[13.846,6.955],[13.592,7.101],[13.338,7.246],[13.084,7.391],[12.83,7.54],[12.576,7.689],[12.322,7.835],[12.068,7.982],[11.814,8.133],[11.56,8.281],[11.306,8.428],[11.052,8.575],[10.797,8.725],[10.543,8.878],[10.289,9.027],[10.035,9.175],[9.781,9.324],[9.527,9.476],[9.273,9.625],[9.019,9.772],[8.765,9.919],[8.511,10.062],[8.257,10.203],[8.003,10.344],[7.749,10.491],[7.495,10.637],[7.241,10.782],[6.987,10.925],[6.733,11.07],[6.478,11.213],[6.224,11.356],[5.97,11.501],[5.716,11.646],[5.462,11.793],[5.208,11.938],[4.954,12.083],[4.7,12.233],[4.446,12.386],[4.192,12.534],[3.938,12.681],[3.684,12.828],[3.43,12.977],[3.176,13.124],[2.922,13.268],[2.668,13.417],[2.414,13.564],[2.159,13.705],[1.905,13.839],[1.651,13.967],[1.397,14.093],[1.143,14.215],[.889,14.332],[.635,14.437],[.381,14.535],[.127,14.622],[-.127,14.699],[-.381,14.765],[-.635,14.817],[-.889,14.855],[-1.143,14.876],[-1.397,14.883],[-1.651,14.881],[-1.905,14.868]]},holes:[[3.464,-114],[6.928,-112],[90.067,-64],[93.531,-62],[0,-112],[3.464,-110],[6.928,-108],[86.603,-62],[90.067,-60],[93.531,-58],[0,-108],[3.464,-106],[6.928,-104],[83.138,-60],[86.603,-58],[90.067,-56],[0,-104],[3.464,-102],[6.928,-100],[79.674,-58],[83.138,-56],[86.603,-54],[0,-100],[3.464,-98],[6.928,-96],[76.21,-56],[79.674,-54],[83.138,-52],[0,-96],[3.464,-94],[6.928,-92],[72.746,-54],[76.21,-52],[79.674,-50],[0,-92],[3.464,-90],[6.928,-88],[69.282,-52],[72.746,-50],[76.21,-48],[0,-88],[3.464,-86],[6.928,-84],[65.818,-50],[69.282,-48],[72.746,-46],[0,-84],[3.464,-82],[6.928,-80],[62.354,-48],[65.818,-46],[69.282,-44],[0,-80],[3.464,-78],[6.928,-76],[58.89,-46],[62.354,-44],[65.818,-42],[0,-76],[3.464,-74],[6.928,-72],[55.426,-44],[58.89,-42],[62.354,-40],[0,-72],[3.464,-70],[6.928,-68],[10.392,-66],[51.962,-42],[55.426,-40],[58.89,-38],[0,-68],[3.464,-66],[6.928,-64],[10.392,-62],[48.497,-40],[51.962,-38],[55.426,-36],[0,-64],[3.464,-62],[6.928,-60],[10.392,-58],[45.033,-38],[48.497,-36],[51.962,-34],[0,-60],[3.464,-58],[6.928,-56],[10.392,-54],[13.856,-52],[38.105,-38],[41.569,-36],[45.033,-34],[48.497,-32],[0,-56],[3.464,-54],[6.928,-52],[10.392,-50],[13.856,-48],[17.321,-46],[20.785,-44],[24.249,-42],[27.713,-40],[31.177,-38],[34.641,-36],[38.105,-34],[41.569,-32],[45.033,-30],[0,-52],[3.464,-50],[6.928,-48],[10.392,-46],[13.856,-44],[17.321,-42],[20.785,-40],[24.249,-38],[27.713,-36],[31.177,-34],[34.641,-32],[38.105,-30],[41.569,-28],[0,-48],[3.464,-46],[6.928,-44],[10.392,-42],[13.856,-40],[17.321,-38],[20.785,-36],[24.249,-34],[27.713,-32],[31.177,-30],[34.641,-28],[38.105,-26],[-93.531,-54],[-90.067,-52],[-86.603,-50],[-83.138,-48],[-79.674,-46],[-76.21,-44],[-72.746,-42],[-69.282,-40],[-65.818,-38],[-62.354,-36],[-58.89,-34],[-55.426,-32],[-51.962,-30],[-48.497,-28],[-45.033,-26],[-41.569,-24],[-38.105,-22],[-34.641,-20],[-93.531,-50],[-90.067,-48],[-86.603,-46],[-83.138,-44],[-79.674,-42],[-76.21,-40],[-72.746,-38],[-69.282,-36],[-65.818,-34],[-62.354,-32],[-58.89,-30],[-55.426,-28],[-51.962,-26],[-48.497,-24],[-45.033,-22],[-41.569,-20],[-38.105,-18],[-34.641,-16],[38.105,26],[41.569,28],[45.033,30],[48.497,32],[51.962,34],[55.426,36],[58.89,38],[62.354,40],[65.818,42],[69.282,44],[72.746,46],[76.21,48],[79.674,50],[83.138,52],[86.603,54],[90.067,56],[93.531,58],[-96.995,-48],[-93.531,-46],[-90.067,-44],[-86.603,-42],[-83.138,-40],[-79.674,-38],[-76.21,-36],[-72.746,-34],[-69.282,-32],[-65.818,-30],[-62.354,-28],[-58.89,-26],[-55.426,-24],[-51.962,-22],[-48.497,-20],[-45.033,-18],[-41.569,-16],[-38.105,-14],[-34.641,-12],[34.641,28],[38.105,30],[41.569,32],[45.033,34],[48.497,36],[51.962,38],[55.426,40],[58.89,42],[62.354,44],[65.818,46],[69.282,48],[72.746,50],[76.21,52],[79.674,54],[83.138,56],[86.603,58],[90.067,60],[93.531,62],[-48.497,-16],[-45.033,-14],[-41.569,-12],[-38.105,-10],[-34.641,-8],[31.177,30],[34.641,32],[38.105,34],[41.569,36],[45.033,38],[48.497,40],[51.962,42],[55.426,44],[58.89,46],[62.354,48],[65.818,50],[69.282,52],[72.746,54],[76.21,56],[79.674,58],[83.138,60],[86.603,62],[90.067,64],[-45.033,-10],[-41.569,-8],[-38.105,-6],[-34.641,-4],[27.713,32],[31.177,34],[34.641,36],[38.105,38],[-41.569,-4],[-38.105,-2],[-34.641,0],[24.249,34],[27.713,36],[31.177,38],[-41.569,0],[-38.105,2],[-34.641,4],[20.785,36],[24.249,38],[27.713,40],[-41.569,4],[-38.105,6],[-34.641,8],[17.321,38],[20.785,40],[24.249,42],[-41.569,8],[-38.105,10],[-34.641,12],[13.856,40],[17.321,42],[20.785,44],[-45.033,10],[-41.569,12],[-38.105,14],[-34.641,16],[10.392,42],[13.856,44],[17.321,46],[-45.033,14],[-41.569,16],[-38.105,18],[-34.641,20],[6.928,44],[10.392,46],[13.856,48],[-45.033,18],[-41.569,20],[-38.105,22],[3.464,46],[6.928,48],[10.392,50],[13.856,52],[-48.497,20],[-45.033,22],[-41.569,24],[3.464,50],[6.928,52],[10.392,54],[-51.962,22],[-48.497,24],[-45.033,26],[0,52],[3.464,54],[6.928,56],[10.392,58],[-55.426,24],[-51.962,26],[-48.497,28],[0,56],[3.464,58],[6.928,60],[10.392,62],[-58.89,26],[-55.426,28],[-51.962,30],[0,60],[3.464,62],[6.928,64],[-62.354,28],[-58.89,30],[-55.426,32],[0,64],[3.464,66],[6.928,68],[-65.818,30],[-62.354,32],[-58.89,34],[0,68],[3.464,70],[6.928,72],[-69.282,32],[-65.818,34],[-62.354,36],[0,72],[3.464,74],[6.928,76],[-72.746,34],[-69.282,36],[-65.818,38],[0,76],[3.464,78],[6.928,80],[-76.21,36],[-72.746,38],[-69.282,40],[0,80],[3.464,82],[6.928,84],[-79.674,38],[-76.21,40],[-72.746,42],[0,84],[3.464,86],[6.928,88],[-83.138,40],[-79.674,42],[-76.21,44],[0,88],[3.464,90],[6.928,92],[-86.603,42],[-83.138,44],[-79.674,46],[0,92],[3.464,94],[6.928,96],[-90.067,44],[-86.603,46],[-83.138,48],[0,96],[3.464,98],[6.928,100],[-93.531,46],[-90.067,48],[-86.603,50],[0,100],[3.464,102],[6.928,104],[-96.995,48],[-93.531,50],[-90.067,52],[0,104],[3.464,106],[6.928,108],[-93.531,54],[0,108],[3.464,110],[6.928,112],[0,112],[3.464,114]]};var ff={fov:62,cam:[0,-150,1e3],look:[0,-150,0],p:{hero:[[0,40,0],1.75],p2:[[-175,420,-420],1],p3:[[185,390,-520],.95],p4:[[185,-235,-420],.9],p5:[[-185,-195,-160],.75]}};var pf={releases:[{code:"AU0125",artist:"AURALITY",participantes:[],title:"aurality archives vol. 1",edicion:!0,format:"REMIXES",genre:"REMIX",year:2025,fecha:"2025-11-30",presave:"",fragmentos:[],destacado:!1,cover:"/covers/saveclip.app_587700334_18086309051095107_7291393043367421422_n-1.webp",soundcloud:"https://soundcloud.com/aurality-group/sets/aurality-archives-vol-1",fragmento:"",spotify:"",bandcamp:"",historia:"aurality archives es un recopilatorio que re\xFAne los remixes y mashups creados por los productores del colectivo a lo largo del \xFAltimo a\xF1o. Una colecci\xF3n que funciona como bit\xE1cora sonora de nuestro laboratorio interno: reinterpretaciones, ejercicios de estilo y relecturas que exploran la frontera entre el reggaet\xF3n, el hip-hop y la electr\xF3nica contempor\xE1nea. Un archivo vivo que refleja c\xF3mo dialogamos con la cultura club, el perreo, el sampleo y la energ\xEDa h\xEDbrida que define nuestra identidad creativa.",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM \xB7 UFISI \xB7 MXNCHV"},{rol:"ARTE",nombre:"CUTEXICO"}],tracks:["do you remember xiyo y fernandezz aurality remix (prod. Paranoid Realm)","children x toyota aurality remix (prod. Paranoid Realm)","olympique hoke \xE9bano louis amoeba aurality remix (prod. mxnchv)","mercadona x sin ti aurality mashup (prod. Ufisi)","blam blam cosculluela rompediskotekas aurality remix (prod. Ufisi)","taylor swift i knew you were trouble aurality remix (prod. mxnchv)","bery jr ski ski aurality remix (prod. Ufisi)","soniquete aurality remix (prod. Paranoid Realm)","icy vedo mr bag vedo aurality remix (prod. Ufisi)","limonada coco aurality remix (prod. Paranoid Realm)","infierno x more aurality mashup (yung beef x zion x kerry x jory boy) (prod. Ufisi)","bajo la luna xiyo y fernandezz electro aurality remix (prod. Ufisi)","mushka habibi x una vaina loca aurality remix (prod. Ufisi)","justin bieber company aurality remix (prod. Paranoid Realm)","bad bunny pa que le de reggaeton aurality remix (prod. Ufisi)","hotline bling aurality remix (prod. mxnchv)","chulo bad gyal hard techno aurality remix (prod. Paranoid Realm y Chico Liotta)"]},{code:"AU0342",artist:"AURALITY x PARANOID REALM",participantes:[],title:"do you remember xiyo y fernandezz aurality remix",edicion:!0,format:"SINGLE",genre:"",year:2025,fecha:"2025-11-18",presave:"",fragmentos:[],destacado:!1,cover:"/covers/do-you-remember-xiyo-y-fernandezz-aurality-remix-prod.-paranoid-realm-cover.webp",soundcloud:"https://soundcloud.com/aurality-group/do-you-remember-xiyo-y-fernandezz-aurality-remix-prod-paranoid-realm-85bpm-emin",fragmento:"",spotify:"",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:[]},{code:"AU0123",artist:"941SONE x PARANOID REALM",participantes:[{artista:"PARANOID REALM",rol:"PRODUCCI\xD3N"}],title:"SHORY DE GIMNASIA",edicion:!1,format:"SINGLE",genre:"JERK",year:2026,fecha:"2026-07-30",presave:"",fragmentos:[],destacado:!1,cover:"/covers/saveclip.app_760147604_18607201774028034_1024075395652998516_n.webp",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/7F4zyae5oT4OrsaCQK8p0L?si=chkvMg9DTbOih7-no4NzQQ",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:""},{rol:"M\xC1STER",nombre:""},{rol:"ARTE",nombre:""}],tracks:[]},{code:"AU0111",artist:"PARANOID REALM",participantes:[{artista:"UFISI",rol:"CO-PRODUCCI\xD3N \xB7 TIEMPOS Y ALL ALONE WITH YOU"}],title:"ESTIU 2025: EDICI\xD3 COSTA BRAVA",edicion:!1,format:"REMIXES",genre:"REMIXES",year:2025,fecha:"2025-08-18",presave:"",fragmentos:[],destacado:!1,cover:"/covers/saveclip.app_532661953_18302911807221429_400752346296299478_n-1.webp",soundcloud:"https://soundcloud.com/paranoidrealm/sets/estiu-2025-edicio-costa-brava",fragmento:"",spotify:"",bandcamp:"",historia:`De peque\xF1o mis veranos eran siempre los mismos: coche hasta Tossa de Mar, CD del Caribe Mix 2004 rayado en la guantera y yo mirando por la ventana las luces de Lloret.

A\xF1os despu\xE9s he querido transformar todos esos recuerdos en m\xFAsica. As\xED nace esta mixtape de remixes: un homenaje a la Costa Brava y a todo lo que marc\xF3 nuestra infancia.

Estos remixes traen sonidos, ritmos, texturas y colores actuales y vanguardistas, pero manteniendo la vibra de viajes en coche con el aire a tope, olor a salitre y a crema solar y noches que duran hasta que alguien dice \u201Cva, el \xFAltimo y nos vamos\u201D.`,video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["Farruko, Music\xF3logo, Menes - Tiempos (Paranoid Realm & Ufisi Remix)","ladiferencia2006, Juanma! - encima (Paranoid Realm Remix)","Daddy Yankee - La Despedida (Paranoid Realm Remix)","EGOIST- All Alone With You (Paranoid Realm & Ufisi Remix)","LOWLIGHT, Bad Gyal, Demaro Small - Commotion (Paranoid Realm Remix)","Diego 900 - T4 Barajas (Paranoid Realm Remix)"]},{code:"AU0110",artist:"PARANOID REALM",participantes:[],title:"LA ESPA\xD1A VACIADA",edicion:!1,format:"REMIXES",genre:"REMIXES",year:2026,fecha:"2026-05-04",presave:"",fragmentos:[],destacado:!1,cover:"/covers/1-levportada.webp",soundcloud:"https://soundcloud.com/paranoidrealm/sets/la-espana-vaciada",fragmento:"",spotify:"",bandcamp:"",historia:"La Espa\xF1a Vaciada es un EP de remixes que toma la idea del \xE9xodo rural y la traslada a la m\xFAsica. Mientras gran parte de la escena urbana tiende a concentrarse en f\xF3rmulas que funcionan y sonidos cada vez m\xE1s parecidos entre s\xED, este proyecto se sit\xFAa fuera de ese flujo. Parte de la decisi\xF3n de no seguir ese camino y trabajar desde otro lugar: m\xE1s lento, m\xE1s t\xE9cnico y m\xE1s centrado en el sonido y la identidad propia.",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM \xB7 MXNCHV"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["Diego 900 - Dam (Paranoid Realm Remix)","mvrk - YOTMB (Paranoid Realm Remix)","Juicy Bae, TAICHU, PMP - Rojo Sangre (Paranoid Realm & mxnchv Remix)","Claudio Montana - 55 Rayuelas (Paranoid Realm Remix)"]},{code:"AU0212",artist:"PARANOID REALM",participantes:[],title:"ESTIU 2026: EDICI\xD3 SAINT-TROPEZ",edicion:!1,format:"REMIXES",genre:"CLUB",year:2026,fecha:"2026-08-05",presave:"",fragmentos:[],destacado:!0,cover:"covers/AU0212.jpg",soundcloud:"https://soundcloud.com/paranoidrealm/sets/estiu-2026-edicio-saint-tropez",fragmento:"",spotify:"",bandcamp:"",historia:`ESTIU es una mixtape anual de remixes concebida como un viaje sonoro a un territorio concreto. Cada edici\xF3n se traslada a un lugar con una identidad musical propia \u2014una ciudad, una regi\xF3n o un enclave cultural\u2014 para investigar c\xF3mo la m\xFAsica electr\xF3nica ha dialogado con su historia, su cultura popular y sus clubes. Los vinilos se convierten en la materia prima de cuatro remixes originales, compuestos exclusivamente a partir de samples extra\xEDdos de esos discos.

En la edici\xF3n 2026 viajamos a Francia, cuna del French Touch: una corriente surgida a finales de los 90 que mezcla house y disco con producci\xF3n basada en samples y filtros; sus referentes clave incluyen a Daft Punk, Air, \xC9tienne de Cr\xE9cy, Cassius, DJ Mehdi, Justice y Busy P (Pedro Winter) \u2014 s/o Ed Banger \u2014 mientras el imaginario visual recorre la Riviera, el cine, el deporte, la moda y el patrimonio cultural del pa\xEDs. El resultado no pretende representar Francia, sino reinterpretar una de sus identidades sonoras m\xE1s influyentes desde el lenguaje del sample y la cultura del remix.`,video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["Nico Miseria, alba calva - EL CORAZ\xD3N MANDA (Paranoid Realm Remix)","Guxo - CEO (Paranoid Realm Remix)","caos! - kim k (Paranoid Realm Remix)","Ralphie Choo, Barry B, DRUMMIE - ROOKIES (Paranoid Realm Remix)"]},{code:"AU0211",artist:"TRANKILOTE EL KILATE x PARANOID REALM",participantes:[],title:"VAYVIENE",edicion:!1,format:"SINGLE",genre:"RAP",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/vayviene-portada.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/track/0GEkQXoWJTEJToBNLqSdHN?si=54344f43d01241a0",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:[]},{code:"AU0210",artist:"PARANOID REALM",participantes:[],title:"NEW JERK",edicion:!1,format:"EP",genre:"JERK",year:2025,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/newjerk-portada.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/1PeJBkR4vvxYp1i0GM8RB6?si=UwCN7MlaRq6_rAnpQMlSyw",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["PARANOID REALM, UNOMAEL - TENGO TODO","PARANOID REALM, UFISI - TELAS DE DISE\xD1ADOR","PARANOID REALM, TRANKILOTE EL KILATE - PICK UP THE PHONE","PARANOID REALM, SHAY B - HYPERACID","PARANOID REALM, UFISI - DEO JUVANTE","PARANOID REALM, SHAY B - BBQ"]},{code:"AU0209",artist:"ANY1N3 x UFISI",participantes:[],title:"EL CIELO QUE NOS QUEDA",edicion:!1,format:"SINGLE",genre:"LOGOBI",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!0,cover:"covers/portada_3000x3000.jpg.jpeg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/3i9pZTYe7QaxsdXWBb9Yha?si=f07fd7a20cdc4eb1",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"UFISI"},{rol:"MEZCLA",nombre:""},{rol:"M\xC1STER",nombre:""},{rol:"ARTE",nombre:""}],tracks:[]},{code:"AU0205",artist:"ANY1N3 \xD7 PARANOID REALM",participantes:[],title:"ROTOR BRAKE RELEASE",edicion:!1,format:"EP",genre:"DUBSTEP",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/rbr-portada.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/12asQkQ16JdNEZzbEXS5iq?si=ZxGrrLFpSTy0f4NcakFcMA",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:""}],tracks:["ANY1N3, PARANOID REALM - ANY","ANY1N3, PARANOID REALM - DURANKI","ANY1N3, PARANOID REALM - EOLIC DUB","ANY1N3, PARANOID REALM - GLITCH IN THE NACELLE"]},{code:"AU0204",artist:"C.EME",participantes:[{artista:"UFISI",rol:"PRODUCCI\xD3N \xB7 CLOSEFRIENDS\u2606, PETER PARKER Y UBER"}],title:"SUPERSEXYDRILL",edicion:!1,format:"EP",genre:"SEXY DRILL",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/delete.jpeg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/4tJx2RpRQPpbg3bO3XkTqN?si=qHIT0-ymSDW5hZ6JIcJnnA",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"UFISI"}],tracks:["C.EME, SHODA MONKAS - CLOSEFRIENDS\u2606","C.EME, SARA VERA - PETER PARKER","C.EME - UBER"]},{code:"AU0202",artist:"ANY1N3",participantes:[],title:"OTRA L\xC1GRIMA",edicion:!1,format:"SINGLE",genre:"PLUGGNB",year:2025,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/otra-lagrima-definitivojpg.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/track/0upi8DNB3ElXbbljzPfNl9?si=81afb9f6f6e3467a",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM \xB7 SUI \xB7 YIIO \xB7 XHARLIE"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"CUTEXICO"}],tracks:[]},{code:"AU0201",artist:"TRANKILOTE EL KILATE x PARANOID REALM",participantes:[],title:"EL PALACIO DE LA MEMORIA",edicion:!1,format:"\xC1LBUM",genre:"RAP",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!0,cover:"covers/palaciomemoria2.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/4kQ2nMyoE94xDQdr5OiEYn?si=Fq36lBzjSN69oypH__Bxlg",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM \xB7 WAX"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["PARANOID REALM, ALBA CALVA - ADOLIN","TRANKILOTE EL KILATE, PARANOID REALM - KRAINT SAINT","TRANKILOTE EL KILATE, PARANOID REALM - BENDICE MI NOMBRE","TRANKILOTE EL KILATE, PARANOID REALM - LAYLA Y MAJN\xDAN","PARANOID REALM, WAX - DONDE MUERE LA LUZ"]},{code:"AU0200",artist:"UFISI",participantes:[],title:"INTENSITAT",edicion:!1,format:"SINGLE",genre:"REGGAETON",year:2024,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/delete2.jpeg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/0ht07dk2jiuSZOckxxFzuq?si=Ta0dL8m4RrmvhC-S2wWuHw",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"UFISI"}],tracks:[]}]};var mf={artists:[{name:"TRANKILOTE EL KILATE",role:"ARTISTA",bio:"",photo:"covers/dsc00394.jpg",instagram:"https://www.instagram.com/babypanchixoxo/",spotify:"https://open.spotify.com/intl-es/artist/4TZBjh3rOh4S5AZk9pzgkZ?si=JWAZsHifSv6mEZfcA-ba0A",soundcloud:""},{name:"PARANOID REALM",role:"DIRECTOR MUSICAL \xB7 PRODUCTOR",bio:"",photo:"",instagram:"https://www.instagram.com/paranoidrealm/",spotify:"https://open.spotify.com/intl-es/track/0GEkQXoWJTEJToBNLqSdHN?si=41f15bfc61264207",soundcloud:"https://soundcloud.com/paranoidrealm"},{name:"UFISI",role:"PRODUCTOR",bio:"",photo:"",instagram:"https://www.instagram.com/ufisi__/",spotify:"https://open.spotify.com/intl-es/artist/6cvbtmRKj4XLUIGygv1Yao?si=r_TQODlkRRCcEC42tZkdMQ",soundcloud:""},{name:"ANY1N3",role:"",bio:"",photo:"",instagram:"https://www.instagram.com/anyy1n3/",spotify:"https://open.spotify.com/intl-es/artist/40wD0x7OYWbz9UMcdMlP5g?si=Yb7JJ6-nQ8qx0Sk1vlkNaA",soundcloud:""}]};var gf={senal_playlist:"https://open.spotify.com/playlist/62bELlnb4xBNBX2etnHpB8",senal:[{code:"10_26",mes:10,anio:2026,cover:"senal/10_26.jpg",temas:null,duracion:"\u2248 1 h",descripcion:"Lanzamientos, hallazgos y obsesiones del mes. Una selecci\xF3n curada por aurality: m\xFAsica ajena que nos mira de cerca.",destacados:[{artista:"ALBERRRT",tema:"HAAT IST LIEFDE.",prod:""},{artista:"SLIKBACK",tema:"ANVIL",prod:""},{artista:"ROBERT DINERO",tema:"NEVERA",prod:"MYTO"},{artista:"METH MATH",tema:"",prod:""},{artista:"BAMBINODJ",tema:"",prod:""},{artista:"SWIPER",tema:"",prod:""},{artista:"DUNA",tema:"F.M.K.",prod:""},{artista:"1111",tema:"QUE ME BAILE",prod:""},{artista:"FLAKO NKO",tema:"",prod:""},{artista:"28MINIMAL",tema:"",prod:""}]}]};var vf={contacto:{email:"auralitygroup@gmail.com",instagram:"https://www.instagram.com/aurality/",nota:"Para demos, mejor un enlace privado que un archivo adjunto.",intro_demo:"",intro_contratacion:"",intro_prensa:""},editorial:null,kit:null,manifiesto:{titular:"Un sello no es un sonido. Es un criterio.",parrafos:["aurality no es un cat\xE1logo de artistas: es una l\xEDnea editorial. Lo que une a los proyectos que pasan por aqu\xED no es un g\xE9nero ni una est\xE9tica com\xFAn, sino una misma manera de entender la creaci\xF3n.","Por eso el nombre funciona como un aval. Aspiramos a que \xABeditado por aurality\xBB diga algo antes incluso de darle al play: que ah\xED hay una decisi\xF3n, un punto de vista, alguien que se ha jugado algo. No prometemos un sonido; prometemos un est\xE1ndar.","La vanguardia rara vez nace dentro de una escena; nace en los bordes, cuando dos que se ignoraban se tocan. La mayor\xEDa de las estructuras de la industria trabajan hacia dentro de un nicho, porque es m\xE1s c\xF3modo y m\xE1s medible. aurality se define por lo contrario: por su capacidad de juntar lo que nadie m\xE1s sabr\xEDa juntar. Existen escenas que hablan idiomas distintos pero comparten c\xF3digos subterr\xE1neos \u2014la misma relaci\xF3n con el riesgo, con la imagen, con lo digital, con la calle\u2014 y El sello act\xFAa ah\xED como traductor y como celestina: identifica esos parentescos invisibles y los pone en la misma habitaci\xF3n.","Por eso aspiramos a ser el lugar donde se juntan artistas que nadie m\xE1s sabr\xEDa juntar: la mano que tiende puentes entre escenas que hablan idiomas distintos pero comparten c\xF3digos y est\xE1n condenadas a entenderse aunque todav\xEDa no se hayan cruzado. Ese cruce no es una an\xE9cdota de reparto; es la tesis. La marca no colecciona artistas: provoca encuentros.","Cuando un artista entra en aurality, entra en una conversaci\xF3n m\xE1s amplia que su propia m\xFAsica. No acumulamos referencias: construimos un contexto. Cada lanzamiento es una frase dentro de un discurso m\xE1s largo, el de un sello que entiende la realidad como material y el aura como firma."],cierre:"La realidad como materia prima. El aura como identidad."}};window.__carga?.mark("motor","THREE.JS");document.getElementById("estatico")?.remove();var xf=["DO","DO\u266F","RE","MI\u266D","MI","FA","FA\u266F","SOL","LA\u266D","LA","SI\u266D","SI"],Gx={lidio:[0,2,4,6,7,9,11],dorico:[0,2,3,5,7,9,10],eolico:[0,2,3,5,7,8,10],penta:[0,2,4,7,9],jonico:[0,2,4,5,7,9,11],frigio:[0,1,3,5,7,8,10]},Hx={lidio:"lidio",dorico:"d\xF3rico",eolico:"e\xF3lico",penta:"pentat\xF3nico",jonico:"j\xF3nico",frigio:"frigio"},Cc={aeropuerto:"bucles de aeropuerto",dron:"dron",kankyo:"kanky\u014D ongaku",analogico:"ambient anal\xF3gico",dub:"dub t\xE9cnico",garaje:"garage nocturno",perreo:"guayeteo inocente",trance:"ambient trance",rave:"garage rave",dnb:"ltj bukem amen break",galore:"arpegios acu\xE1ticos",triphop:"trip-hop"},mr=[["PANEL",53,"jonico","aeropuerto"],["NIEBLA",45,"eolico","dron"],["HORIZONTE",48,"lidio","kankyo"],["REJILLA",43,"dorico","analogico"],["CROMO",52,"eolico","dub"],["SINTON\xCDA",47,"eolico","garaje"],["ESCALA",44,"frigio","perreo"],["TESTIGO",45,"eolico","trance"],["PLETINA",49,"jonico","rave"],["RANURA",44,"dorico","dnb"],["GALORE",51,"jonico","galore"],["SE\xD1AL",42,"eolico","triphop"]],Qe=n=>440*Math.pow(2,(n-69)/12),Ve=(n,e)=>n+Math.random()*(e-n),ot=n=>n[Math.floor(Math.random()*n.length)],Wx={aeropuerto:{seco:.35,sala:.95,cuarto:0,eco:.08,tono:6e3,nivel:1.33},dron:{seco:.45,sala:.85,cuarto:0,eco:0,tono:2600,nivel:.6},kankyo:{seco:.7,sala:.25,cuarto:.45,eco:.3,tono:9e3,nivel:.95},analogico:{seco:.72,sala:.22,cuarto:.38,eco:.14,tono:7500,nivel:.236},dub:{seco:.75,sala:.2,cuarto:.25,eco:.6,tono:2800,nivel:.275},garaje:{seco:.7,sala:.16,cuarto:.28,eco:0,tono:6200,nivel:.3},perreo:{seco:.75,sala:.14,cuarto:.22,eco:0,tono:9500,nivel:.39},trance:{seco:.75,sala:.12,cuarto:.2,eco:0,tono:11e3,nivel:.44},rave:{seco:.8,sala:.08,cuarto:.22,eco:0,tono:12e3,nivel:.29},dnb:{seco:.75,sala:.12,cuarto:.25,eco:0,tono:1e4,nivel:.36},galore:{seco:.75,sala:.12,cuarto:.22,eco:0,tono:11e3,nivel:.27},triphop:{seco:.75,sala:.14,cuarto:.3,eco:0,tono:8e3,nivel:.33}},Vi=/iP(hone|ad|od)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||matchMedia("(pointer: coarse) and (hover: none)").matches,Dt=(()=>{let n=new Set,e=new Map,t=1,i=()=>{let s=performance.now();for(let[a,r]of e)if(s>=r.at){r.cada?r.at=s+r.cada:e.delete(a);try{r.f()}catch(o){console.error(o)}}n.forEach(a=>{try{a()}catch(r){console.error(r)}})};try{let s=new Worker(URL.createObjectURL(new Blob(["setInterval(function(){postMessage(0)},25)"],{type:"text/javascript"})));s.onmessage=i}catch{setInterval(i,25)}return{suma:s=>n.add(s),quita:s=>n.delete(s),espera:(s,a)=>{let r=t++;return e.set(r,{f:s,at:performance.now()+(a||0)}),r},cada:(s,a)=>{let r=t++;return e.set(r,{f:s,at:performance.now()+a,cada:a}),r},anula:s=>{e.delete(s)}}})(),qx=Date.UTC(2026,9,1)/1e3,bu=class{constructor(){this.canal=2,this.amb=2,this.on=!1,this.ctx=null,this.gen=null,this.cat=null}init(){let e=window.AudioContext||window.webkitAudioContext,t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=0,this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-18,this.comp.ratio.value=3,this.comp.attack.value=.02,this.comp.release.value=.4,this.analyser=t.createAnalyser(),this.analyser.fftSize=1024,this.buf=new Float32Array(this.analyser.fftSize),this.subida=t.createGain(),this.subida.gain.value=3.6,this.limite=t.createDynamicsCompressor(),this.limite.threshold.value=-4,this.limite.knee.value=0,this.limite.ratio.value=20,this.limite.attack.value=.002,this.limite.release.value=.15,this.senal=t.createGain(),this.master.connect(this.senal),this.senal.connect(this.comp),this.comp.connect(this.subida),this.subida.connect(this.limite),this.limite.connect(this.analyser),this.analyser.connect(t.destination);let i=(l,u)=>{let h=t.sampleRate*l,d=t.createBuffer(2,h,t.sampleRate);for(let f=0;f<2;f++){let g=d.getChannelData(f);for(let A=0;A<h;A++)g[A]=(Math.random()*2-1)*Math.pow(1-A/h,u)}return d};this.sala=t.createConvolver(),this.sala.buffer=i(7,2.6),this.sala.connect(this.master),this.cuarto=t.createConvolver(),this.cuarto.buffer=i(1.6,3.2),this.cuarto.connect(this.master),this.eco=t.createDelay(3),this.eco.delayTime.value=.42;let s=t.createGain();s.gain.value=.42;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=2600,this.eco.connect(a),a.connect(s),s.connect(this.eco),a.connect(this.master),a.connect(this.sala);let r=t.createBuffer(1,t.sampleRate*3,t.sampleRate),o=r.getChannelData(0);for(let l=0;l<o.length;l++)o[l]=Math.random()*2-1;this.ruido=r,this.estFino=t.createGain(),this.estFino.gain.value=0,this.estBp=t.createBiquadFilter(),this.estBp.type="bandpass",this.estBp.frequency.value=1700,this.estBp.Q.value=.6;let c=t.createBufferSource();c.buffer=r,c.loop=!0,c.connect(this.estBp),this.estBp.connect(this.estFino),this.estFino.connect(this.comp),c.start(),this.txG=t.createGain(),this.txG.gain.value=0,this.txHp=t.createBiquadFilter(),this.txHp.type="highpass",this.txHp.frequency.value=600,this.txLp=t.createBiquadFilter(),this.txLp.type="lowpass",this.txLp.frequency.value=2400,this.txHp.connect(this.txLp),this.txLp.connect(this.txG),this.txG.connect(this.comp)}txPrepara(){if(this.txEl||!this.ctx)return;let e=this.txEl=new Audio;e.loop=!0,e.preload="auto",e.setAttribute("playsinline",""),e.src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=";let t=e.play();t&&t.then(()=>e.pause()).catch(()=>{});try{this.txSrc=this.ctx.createMediaElementSource(e),this.txSrc.connect(this.txHp)}catch{}}ajustaFino(e){if(!this.ctx)return;let t=this.ctx.currentTime,i=this.on;if(this.senal.gain.setTargetAtTime(i?e.senal:1,t,.05),this.estFino.gain.setTargetAtTime(i?e.ruido:0,t,.05),this.estBp.frequency.setTargetAtTime(900+e.f*160,t,.08),e.tx&&i){this.txPrepara();let s=this.txEl;if(clearTimeout(this.txOff),this.txId!==e.tx.id&&(this.txId=e.tx.id,s.src="/tx/a/"+encodeURIComponent(e.tx.id),s.currentTime=0),s.paused){let a=s.play();a&&a.catch(()=>{})}this.txG.gain.setTargetAtTime(e.txNivel,t,.06),this.txHp.frequency.setTargetAtTime(e.claro?20:650,t,.12),this.txLp.frequency.setTargetAtTime(e.claro?18e3:2200,t,.12)}else this.txG.gain.setTargetAtTime(0,t,.15),this.txEl&&!this.txEl.paused&&(clearTimeout(this.txOff),this.txOff=setTimeout(()=>this.txEl.pause(),900))}nuevaGen(e){let t=this.ctx,i=Wx[e],s=t.currentTime,a={estilo:e,vivo:!0,timers:[],inter:null,nodos:[]};if(a.fader=t.createGain(),a.fader.gain.setValueAtTime(0,s),a.fader.gain.linearRampToValueAtTime(i.nivel,s+3.5),a.tono=t.createBiquadFilter(),a.tono.type="lowpass",a.tono.frequency.value=i.tono,a.tono.Q.value=.2,a.salidas=[],e==="analogico"||e==="garaje"||e==="perreo"||e==="triphop"){let r=t.createWaveShaper(),o=new Float32Array(1024);for(let c=0;c<1024;c++){let l=c/511.5-1;o[c]=Math.tanh(1.8*l)/Math.tanh(1.8)}r.curve=o,r.oversample="2x",a.fader.connect(r),r.connect(a.tono),a.nodos.push(r)}else a.fader.connect(a.tono);return[["seco",this.master],["sala",this.sala],["cuarto",this.cuarto],["eco",this.eco]].forEach(([r,o])=>{if(!i[r])return;let c=t.createGain();c.gain.value=i[r],a.tono.connect(c),c.connect(o),a.nodos.push(c)}),a.nodos.push(a.fader,a.tono),a}matarGen(e,t=2.5){if(!e)return;e.vivo=!1,e.timers.forEach(clearTimeout),clearInterval(e.inter),e.tic&&Dt.quita(e.tic),e.cola=[];let i=this.ctx.currentTime;[e.fader,...e.salidas||[]].forEach(s=>{s.gain.cancelScheduledValues(i),s.gain.setValueAtTime(s.gain.value,i),s.gain.linearRampToValueAtTime(0,i+t)}),setTimeout(()=>e.nodos.forEach(s=>{try{s.disconnect()}catch{}}),(t+10)*1e3)}luego(e,t,i){(e.cola||(e.cola=[])).push([this.ctx.currentTime+t,i]),this.vigila(e)}vigila(e){e.tic||(e.tic=()=>{if(!e.vivo){Dt.quita(e.tic);return}let t=this.ctx.currentTime;if(e.cola&&e.cola.length){let i=e.cola.filter(s=>s[0]<=t);i.length&&(e.cola=e.cola.filter(s=>s[0]>t),i.forEach(([,s])=>{e.vivo&&this.on&&s()}))}e.paso&&e.paso()},Dt.suma(e.tic))}secuenciador(e,t,i){let s=this.ctx,a=60/t/4,r=qx+this.amb*61.7,o=Date.now()/1e3,c=Math.ceil((o+.12-r)/a/16)*16,l=s.currentTime+(r+c*a-o);e.primero=!0,e.paso=()=>{let u=s.currentTime,h=document.hidden?1.2:.35;if(l<u-.25){let d=Math.ceil((u+.05-l)/a);c+=d,l+=d*a}for(;l<u+h;)i(c,Math.max(l,u),a),e.primero=!1,c++,l+=a},this.vigila(e)}nota(e,t=0){let[,i,s]=mr[this.amb],a=Gx[s],r=a.length,o=Math.floor(e/r);return i+a[(e%r+r)%r]+12*(o+t)}env(e,t,i,s,a,r){e.gain.setValueAtTime(0,t),e.gain.linearRampToValueAtTime(s,t+i),a&&e.gain.setValueAtTime(s,t+i+a),e.gain.linearRampToValueAtTime(1e-4,r)}pad(e,t,i,s,a={}){let r=this.ctx,o=a.att??4,c=a.rel??6,l=a.gain??.04,u=r.createBiquadFilter();u.type="lowpass",u.Q.value=.5,u.frequency.setValueAtTime((a.corte??1200)*.4,i),u.frequency.linearRampToValueAtTime(a.corte??1200,i+o+1);let h=r.createGain();this.env(h,i,o,l,Math.max(0,s-o-c),i+s+c),u.connect(h),h.connect(e.fader),t.forEach(d=>[-7,7].forEach(f=>{let g=r.createOscillator();g.type=a.onda||"sawtooth",g.frequency.value=Qe(d),g.detune.value=f+Ve(-3,3),e.vaiven&&e.vaiven.connect(g.detune),g.connect(u),g.start(i),g.stop(i+s+c+.1)}))}fm(e,t,i,s={}){let a=this.ctx,r=Qe(t),o=s.dec??1.6,c=s.gain??.05,l=a.createOscillator(),u=a.createOscillator(),h=a.createGain(),d=a.createGain();if(l.frequency.value=r,u.frequency.value=r*(s.ratio??2),h.gain.setValueAtTime(r*(s.indice??1.5),i),h.gain.exponentialRampToValueAtTime(r*.01+.01,i+o*.5),d.gain.setValueAtTime(0,i),d.gain.linearRampToValueAtTime(c,i+(s.att??.004)),d.gain.exponentialRampToValueAtTime(1e-4,i+o),u.connect(h),h.connect(l.frequency),l.connect(d),d.connect(e.fader),s.eco){let f=a.createGain();f.gain.value=s.eco,d.connect(f),f.connect(this.eco)}l.start(i),u.start(i),l.stop(i+o+.1),u.stop(i+o+.1)}piano(e,t,i,s={}){let a=this.ctx,r=s.dec??7,o=s.gain??.06;[[1,1],[2,.22],[3,.06]].forEach(([c,l])=>{let u=a.createOscillator(),h=a.createGain();u.type="sine",u.frequency.value=Qe(t)*c*(c>1?1.0015:1),h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(o*l,i+.03),h.gain.exponentialRampToValueAtTime(1e-4,i+r/c),u.connect(h),h.connect(e.fader),u.start(i),u.stop(i+r+.1)})}voz(e,t,i,s,a=.02){let r=this.ctx,o=r.createOscillator(),c=r.createGain();o.type="sawtooth",o.frequency.value=Qe(t),this.env(c,i,s*.4,a,s*.2,i+s),[[750,6],[1150,8]].forEach(([l,u])=>{let h=r.createBiquadFilter();h.type="bandpass",h.frequency.value=l,h.Q.value=u,o.connect(h),h.connect(c)}),c.connect(e.fader),o.start(i),o.stop(i+s+.1)}bombo(e,t,i=.5){let s=this.ctx,a=s.createOscillator(),r=s.createGain();a.frequency.setValueAtTime(110,t),a.frequency.exponentialRampToValueAtTime(42,t+.12),r.gain.setValueAtTime(i,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.45),a.connect(r),r.connect(e.fader),a.start(t),a.stop(t+.5)}ruidoCorto(e,t,i,s,a,r,o=.8){let c=this.ctx,l=c.createBufferSource(),u=c.createBiquadFilter(),h=c.createGain();l.buffer=this.ruido,u.type=a,u.frequency.value=r,u.Q.value=o,h.gain.setValueAtTime(s,t),h.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(u),u.connect(h),h.connect(e.fader),l.start(t,Math.random()*2),l.stop(t+i+.05)}fondo(e,t,i,s,a,r=0){let o=this.ctx,c=o.createBufferSource(),l=o.createBiquadFilter(),u=o.createGain();if(c.buffer=this.ruido,c.loop=!0,l.type=i,l.frequency.value=s,l.Q.value=a,u.gain.value=t,c.connect(l),l.connect(u),u.connect(e.fader),c.start(),r){let h=o.createOscillator(),d=o.createGain();h.frequency.value=r,d.gain.value=s*.7,h.connect(d),d.connect(l.frequency),h.start(),e.nodos.push(h)}e.nodos.push(c,l,u)}aeropuerto(e){[[0,0],[2,0],[4,0],[6,0],[1,1],[4,1],[2,-1]].forEach(([i,s],a)=>{let r=13+a*2.9+Ve(0,2.5),o=()=>{this.piano(e,this.nota(i,s),this.ctx.currentTime+.05,{dec:8,gain:.055}),this.luego(e,r,o)};this.luego(e,Ve(.5,r),o)}),[[0,-1],[4,-1]].forEach(([i,s],a)=>{let r=23+a*8.3,o=()=>{this.voz(e,this.nota(i,s),this.ctx.currentTime+.05,9,.018),this.luego(e,r,o)};this.luego(e,4+a*6,o)}),this.fondo(e,.006,"bandpass",500,.5)}dron(e){let t=[[0,-1],[4,-1],[0,0],[8,0],[2,1]],i=r=>{let[o,c]=t[r%t.length],l=Ve(26,40);this.pad(e,[this.nota(o,c)],this.ctx.currentTime+.05,l,{att:12,rel:14,gain:.05,corte:700+r*120,onda:r%2?"triangle":"sawtooth"}),this.luego(e,l*.55,()=>i(r+1+Math.floor(Math.random()*2)))};i(0),this.luego(e,9,()=>i(2));let s=this.ctx.createOscillator(),a=this.ctx.createGain();s.frequency.value=Qe(this.nota(0,-2)),a.gain.value=.05,s.connect(a),a.connect(e.fader),s.start(),e.nodos.push(s,a),this.fondo(e,.03,"bandpass",600,1.2,.02)}kankyo(e){let t=[],i=()=>{t=[0,6,10,16,22,26].filter(()=>Math.random()<.8).map(c=>[c,ot([0,1,2,3,4,5,7])])};i();let s=0,a=!1,r=0;this.secuenciador(e,72,(c,l)=>{let u=c%32;if(u===0){if(s=Math.floor(c/32)+1,s%4===0){let h=Math.floor(Math.random()*t.length);t[h]&&(t[h][1]=ot([0,1,2,3,4,5,7]))}s%8===0&&(a=Math.random()<.3,r=1-r),s%16===0&&i(),s%4===1&&this.pad(e,[this.nota(0,-1),this.nota(4,-1)],l,13,{onda:"sine",att:3,rel:5,gain:.03,corte:2400})}a||t.forEach(([h,d])=>{h===u&&(r?this.fm(e,this.nota(d,1),l,{ratio:1,indice:2.4,dec:2.4,gain:.05,eco:.25}):this.fm(e,this.nota(d,1),l,{ratio:4,indice:1.6,dec:.7,gain:.06,eco:.25}))})});let o=()=>{let c=this.ctx,l=c.currentTime+.05,u=c.createOscillator(),h=c.createGain(),d=Qe(this.nota(ot([0,2,4]),3));u.frequency.setValueAtTime(d,l),u.frequency.exponentialRampToValueAtTime(d*1.6,l+.06),h.gain.setValueAtTime(.025,l),h.gain.exponentialRampToValueAtTime(1e-4,l+.18),u.connect(h),h.connect(e.fader),u.start(l),u.stop(l+.2),this.luego(e,Ve(3,9),o)};this.luego(e,5,o),this.ctx&&this.eco.delayTime.setTargetAtTime(60/72/4*3,this.ctx.currentTime,.2)}analogico(e){let t=this.ctx,i=122,s=.06,a=60/i/4;this.eco.delayTime.setTargetAtTime(60/i*.75,t.currentTime,.2),e.vaiven=t.createGain();let r=t.createOscillator(),o=t.createGain(),c=t.createOscillator(),l=t.createGain();r.frequency.value=.55,o.gain.value=5,c.frequency.value=6.3,l.gain.value=1.6,r.connect(o),o.connect(e.vaiven),c.connect(l),l.connect(e.vaiven),r.start(),c.start(),e.nodos.push(r,o,c,l,e.vaiven),this.fondo(e,.007,"highpass",4500,.4);let u=t.createWaveShaper(),h=new Float32Array(4096);for(let se=0;se<4096;se++){let W=se/2047.5-1;h[se]=Math.round(W*96)/96}u.curve=h;let d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=4200,d.Q.value=.6;let f=t.createStereoPanner(),g=t.createOscillator(),A=t.createGain();g.frequency.value=.07,A.gain.value=.55,g.connect(A),A.connect(f.pan),g.start();let p=t.createGain();p.gain.value=.32,u.connect(d),d.connect(f),f.connect(e.fader),d.connect(p),p.connect(this.eco),e.nodos.push(u,d,f,g,A,p);let m=(se,W)=>{let Z=t.createGain(),N=t.createBiquadFilter();N.type="lowpass",N.Q.value=4,N.frequency.setValueAtTime(2800,W),N.frequency.exponentialRampToValueAtTime(520,W+.2),Z.gain.setValueAtTime(0,W),Z.gain.linearRampToValueAtTime(.05,W+.003),Z.gain.exponentialRampToValueAtTime(1e-4,W+.3),N.connect(Z),Z.connect(u),[0,3,7,10].forEach(ee=>{let O=t.createOscillator();O.type="square",O.frequency.value=Qe(se+ee),O.detune.setValueAtTime(38,W),O.detune.exponentialRampToValueAtTime(1,W+.07),e.vaiven.connect(O.detune),O.connect(N),O.start(W),O.stop(W+.32)})},y=t.createBiquadFilter(),E=t.createBiquadFilter();y.type="highpass",y.frequency.value=38,y.Q.value=.7,E.type="peaking",E.frequency.value=420,E.Q.value=1.2,E.gain.value=-4,y.connect(E),E.connect(e.fader),e.nodos.push(y,E);let v=(se,W,Z)=>{let N=t.createBiquadFilter(),ee=t.createBiquadFilter(),O=t.createGain(),H=.026;N.type="peaking",N.frequency.value=700,N.Q.value=3,N.gain.value=4,ee.type="lowpass",ee.Q.value=2.5,ee.frequency.setValueAtTime(1e3,W),ee.frequency.exponentialRampToValueAtTime(220,W+Z*.8),O.gain.setValueAtTime(0,W),O.gain.linearRampToValueAtTime(H,W+.008),O.gain.setValueAtTime(H,W+Z*.55),O.gain.exponentialRampToValueAtTime(1e-4,W+Z+.04),N.connect(ee),ee.connect(O),O.connect(y),[[-13,"sawtooth",.32],[11,"sawtooth",.32],[0,"sine",.55]].forEach(([$,F,T])=>{let M=t.createOscillator(),C=t.createGain();M.type=F,M.frequency.value=Qe(se),M.detune.value=$,C.gain.value=T,e.vaiven.connect(M.detune),M.connect(C),C.connect(N),M.start(W),M.stop(W+Z+.1)})},S=(se,W,Z,N=.028)=>{let ee=t.createBiquadFilter(),O=t.createGain();ee.type="lowpass",ee.frequency.value=1500,ee.Q.value=.4,O.gain.setValueAtTime(0,W),O.gain.linearRampToValueAtTime(N,W+.35),O.gain.setValueAtTime(N,W+Z),O.gain.linearRampToValueAtTime(1e-4,W+Z+1.2),ee.connect(O),O.connect(e.fader);let H=t.createGain();H.gain.value=.25,O.connect(H),H.connect(this.eco),[[1,1,-6],[1.002,2,6]].forEach(([$,F,T])=>{let M=t.createOscillator(),C=t.createOscillator(),P=t.createGain();M.frequency.value=Qe(se)*$,C.frequency.value=Qe(se)*F,P.gain.setValueAtTime(Qe(se)*.2,W),P.gain.linearRampToValueAtTime(Qe(se)*.9,W+.5),M.detune.value=T,e.vaiven.connect(M.detune),C.connect(P),P.connect(M.frequency),M.connect(ee),M.start(W),C.start(W),M.stop(W+Z+1.3),C.stop(W+Z+1.3)})},w=[205.3,304.4,369.6,522.7,540,800],L=(se,W,Z)=>{let N=t.createBiquadFilter(),ee=t.createBiquadFilter(),O=t.createGain();N.type="bandpass",N.frequency.value=1e4,N.Q.value=1,ee.type="highpass",ee.frequency.value=7e3,O.gain.setValueAtTime(Z,se),O.gain.exponentialRampToValueAtTime(1e-4,se+W),N.connect(ee),ee.connect(O),O.connect(e.fader),w.forEach(H=>{let $=t.createOscillator();$.type="square",$.frequency.value=H*1.7,$.connect(N),$.start(se),$.stop(se+W+.02)})},_=se=>{let W=t.createOscillator(),Z=t.createGain();W.frequency.setValueAtTime(96,se),W.frequency.exponentialRampToValueAtTime(47,se+.09),Z.gain.setValueAtTime(.62,se),Z.gain.exponentialRampToValueAtTime(1e-4,se+.34),W.connect(Z),Z.connect(e.fader),W.start(se),W.stop(se+.36),this.ruidoCorto(e,se,.006,.05,"highpass",2e3)},R=(se,W,Z,N,ee="sine")=>{let O=t.createOscillator(),H=t.createGain();O.type=ee,O.frequency.setValueAtTime(W*1.08,se),O.frequency.exponentialRampToValueAtTime(W,se+.02),H.gain.setValueAtTime(N,se),H.gain.exponentialRampToValueAtTime(1e-4,se+Z),O.connect(H),H.connect(e.fader),O.start(se),O.stop(se+Z+.02)},U=[0,3,6,10,12],z=[[0,0],[3,0],[6,12],[8,0],[11,7],[14,10]],k=0,ie=0,V=U.slice(),Y=[],ce=[],le=()=>{Y=[0,4,8,12].map(()=>ot([0,2,4,6,7,9])),ce=Array.from({length:8},()=>Math.random()<.55?ot([4,6,7,9,11]):null)};le(),this.secuenciador(e,i,(se,W)=>{let Z=se%16,N=W+(Z%2?a*s:0);if(Z===0){if(k=Math.floor(se/16)+1,ie=this.nota(k%8>=6?3:0,-1),k%4===0&&(V=U.slice(),Math.random()<.5)){let T=1+Math.floor(Math.random()*4);V[T]=(V[T]+ot([-1,1,2])+16)%16}k%16===1&&le()}let ee=(k-1)%48,O=ee>=32&&ee<36,H=k>4,$=k>16&&!(ee>=32&&ee<34),F=k>24;if(!O&&Z%4===0&&_(W),Z%4===2?L(N,.26,.05):(Z%2===0||Math.random()<.35)&&L(N,.04,Z%4===0?.03:.022),(Z===3||Z===10)&&k>2&&R(N,1700,.03,.035,"triangle"),(Z===6||Z===13||Z===15&&Math.random()<.4)&&k>8&&R(N,Z===13?220:330,.22,.07),Z===12&&k>8&&!O&&(this.ruidoCorto(e,W,.12,.045,"bandpass",1300,1.4),this.ruidoCorto(e,W+.012,.1,.035,"bandpass",1300,1.4)),V.includes(Z)&&m(ie+12,N),H&&z.forEach(([T,M])=>{T===Z&&v(ie+M,N,a*1.8)}),$&&Z%4===0){let T=Z/4|0,M=Y[T];(T%2===0||Math.random()<.5)&&S(this.nota(M,1),W,a*(T%2?3.5:7.5))}if(F&&Z%2===1){let T=ce[(Z-1)/2];T!=null&&this.fm(e,this.nota(T,1),N,{ratio:3.5,indice:.7,dec:.45,gain:.018,eco:.35})}})}dub(e){let t=this.ctx,i=116;this.eco.delayTime.setTargetAtTime(60/i*.75,t.currentTime,.2);let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=1200,s.Q.value=2,s.connect(e.fader);let a=t.createOscillator(),r=t.createGain();a.frequency.value=.035,r.gain.value=900,a.connect(r),r.connect(s.frequency),a.start(),e.nodos.push(a,r,s);let o=t.createGain();o.gain.value=.5,s.connect(o),o.connect(this.eco),e.nodos.push(o),this.fondo(e,.012,"bandpass",3200,.7);let c=0,l=0;this.secuenciador(e,i,(u,h)=>{let d=u%16;if(d===0&&(c=Math.floor(u/16)+1,(c%8===1||e.primero)&&(l=ot([0,0,3,5])),c%2===1&&this.fm(e,this.nota(l,-2),h,{ratio:1,indice:.2,dec:2.2,gain:.12})),d%4===0&&this.bombo(e,h,.5),d%4===2&&this.ruidoCorto(e,h,.03,.02,"highpass",8e3),(d===2||d===10)&&Math.random()<.8){let f=t.createGain();f.gain.setValueAtTime(0,h),f.gain.linearRampToValueAtTime(.045,h+.005),f.gain.exponentialRampToValueAtTime(1e-4,h+.2),f.connect(s),[0,2,4,6,8].forEach(g=>{let A=t.createOscillator();A.type="sawtooth",A.frequency.value=Qe(this.nota(l+g,0)),A.connect(f),A.start(h),A.stop(h+.22)})}Math.random()<.12&&this.ruidoCorto(e,h+Math.random()*.1,.004,Ve(.02,.06),"highpass",2500)})}garaje(e){let t=this.ctx,i=134,s=60/i/4,a=.17,r=(N,ee,O)=>{let H=t.createGain();H.gain.value=O,N.connect(H),H.connect(ee),e.salidas.push(H),e.nodos.push(H)},o=(N,ee)=>{let O=t.createStereoPanner();return O.pan.value=ee,N.connect(O),O};e.vaiven=t.createGain();let c=t.createOscillator(),l=t.createGain();c.frequency.value=.31,l.gain.value=7,c.connect(l),l.connect(e.vaiven),c.start(),e.nodos.push(c,l,e.vaiven),this.fondo(e,.006,"highpass",6500,.4),this.fondo(e,.016,"bandpass",2300,.25,.017);let u=()=>{let N=t.currentTime+.05;for(let ee=0;ee<7;ee++)Math.random()<.55&&this.ruidoCorto(e,N+Math.random()*.6,Ve(.003,.012),Ve(.012,.06),"highpass",Ve(2200,7e3));this.luego(e,.6,u)};u();let h=t.createBiquadFilter(),d=t.createGain();h.type="lowpass",h.frequency.value=7200,h.Q.value=.4,d.gain.value=1.6,h.connect(d),d.connect(e.fader),e.nodos.push(h,d);let f=t.createBiquadFilter(),g=t.createBiquadFilter(),A=t.createGain();f.type="highpass",f.frequency.value=240,f.Q.value=.5,g.type="lowpass",g.frequency.value=1900,g.Q.value=.5,f.connect(g),g.connect(A),A.connect(e.fader),r(A,this.sala,.42),e.nodos.push(f,g,A);let p=(N,ee)=>{A.gain.cancelScheduledValues(N),A.gain.setValueAtTime(1-ee,N+.005),A.gain.setTargetAtTime(1,N+.04,.09)},m=t.createBiquadFilter();m.type="bandpass",m.frequency.value=1600,m.Q.value=.5;let y=t.createBiquadFilter();y.type="lowpass",y.frequency.value=3200,m.connect(y),y.connect(e.fader),r(y,this.sala,1.45),r(y,this.eco,.45);let E=(N,ee,O,H,$,F,T,M=0)=>{let C=t.createBufferSource(),P=t.createBiquadFilter(),D=t.createGain();C.buffer=this.ruido,P.type=H,P.frequency.value=$,P.Q.value=F,D.gain.setValueAtTime(O,N),D.gain.exponentialRampToValueAtTime(1e-4,N+ee),C.connect(P),P.connect(D),(M?o(D,M):D).connect(T),C.start(N,Math.random()*2),C.stop(N+ee+.05)},v=(N,ee,O,H,$,F,T)=>{let M=t.createOscillator(),C=t.createGain();M.type=F,M.frequency.setValueAtTime(ee,N),M.frequency.exponentialRampToValueAtTime(O,N+H*.4),C.gain.setValueAtTime($,N),C.gain.exponentialRampToValueAtTime(1e-4,N+H),M.connect(C),C.connect(T),M.start(N),M.stop(N+H+.02)},S=(N,ee=1)=>{p(N,.55),v(N,82,46,.3,.42*ee,"sine",h),E(N,.012,.05*ee,"lowpass",1400,.5,h)},w=(N,ee=1)=>{ee>.5&&p(N,.4),E(N,.17,.2*ee,"bandpass",Ve(1650,2100),.8,h),E(N,.06,.07*ee,"highpass",3800,.5,h),v(N,210,180,.07,.07*ee,"triangle",h)},L=(N,ee=1,O=!1)=>E(N,O?.16:Ve(.025,.045),.05*ee,"bandpass",Ve(7800,9800),.6,h,Ve(-.3,.3)),_=(N,ee=1)=>{v(N,1250,1180,.035,.05*ee,"triangle",h),E(N,.03,.04*ee,"bandpass",2900,3,h)},R=[0,5,3,4],U=N=>[0,2,4,6,8].map(ee=>this.nota(N+ee,0)),z=(N,ee,O)=>N.forEach((H,$)=>{let F=t.createOscillator(),T=t.createOscillator(),M=t.createGain(),C=t.createGain(),P=Qe(H);F.frequency.value=P,T.frequency.value=P,F.detune.value=Ve(-9,9),e.vaiven.connect(F.detune),M.gain.setValueAtTime(P*.9,ee),M.gain.exponentialRampToValueAtTime(P*.05,ee+1.2),C.gain.value=0,C.gain.setValueAtTime(0,ee+$*.012),C.gain.linearRampToValueAtTime(.012,ee+$*.012+.01),C.gain.exponentialRampToValueAtTime(1e-4,ee+O),T.connect(M),M.connect(F.frequency),F.connect(C),C.connect(f),F.start(ee),T.start(ee),F.stop(ee+O+.1),T.stop(ee+O+.1)}),k=(N,ee,O)=>{let H=t.createOscillator(),$=t.createOscillator(),F=t.createGain(),T=t.createGain();H.frequency.value=Qe(N),$.type="triangle",$.frequency.value=Qe(N)*2,F.gain.setValueAtTime(0,ee),F.gain.linearRampToValueAtTime(.035,ee+.25),F.gain.setValueAtTime(.035,ee+O-.3),F.gain.linearRampToValueAtTime(1e-4,ee+O+.2),T.gain.value=.12,H.connect(F),$.connect(T),T.connect(F),F.connect(e.fader),H.start(ee),$.start(ee),H.stop(ee+O+.3),$.stop(ee+O+.3)},ie=[[800,1150,2900],[450,800,2830],[400,2e3,2550],[350,1700,2700],[600,1e3,2600]],V=(N,ee,O,H,$=!1)=>{let F=t.createOscillator(),T=t.createOscillator(),M=t.createGain(),C=t.createGain(),P=t.createOscillator(),D=t.createGain();F.type="sawtooth",T.type="sawtooth";let J=Qe(N),te=Ve(-35,35);if(F.frequency.setValueAtTime(J*($?1:Math.pow(2,Ve(-1,1)/12)),ee),F.frequency.exponentialRampToValueAtTime(J*($?Math.pow(2,-Ve(.5,2.5)/12):1),ee+O),T.frequency.value=J*1.004,F.detune.value=te,T.detune.value=te,P.frequency.value=$?Ve(4.5,6):0,D.gain.value=$?22:0,P.connect(D),D.connect(F.detune),D.connect(T.detune),C.gain.value=1,F.connect(C),T.connect(C),ot(ie).forEach((ae,re)=>{let G=t.createBiquadFilter();G.type="bandpass",G.frequency.value=ae*Ve(1,1.14),G.Q.value=[9,11,13][re];let X=t.createGain();X.gain.value=[1,.55,.25][re],C.connect(G),G.connect(X),X.connect(M)}),E(ee,Math.min(O,.18),H*.25,"bandpass",4200,1.2,m),M.gain.setValueAtTime(0,ee),M.gain.linearRampToValueAtTime(H,ee+($?.15:.022)),$){let ae=t.createOscillator(),re=t.createGain();ae.frequency.value=Ve(16,26),re.gain.value=H*.35,ae.connect(re),re.connect(M.gain),ae.start(ee),ae.stop(ee+O+.1)}M.gain.setValueAtTime(H,ee+O*($?.35:.6)),M.gain.exponentialRampToValueAtTime(1e-4,ee+O),o(M,Ve(-.45,.45)).connect(m),[F,T,P].forEach(ae=>{ae.start(ee),ae.stop(ee+O+.05)})},Y=[],ce=()=>{let N=ot([4,5,6,7]);Y=[2,3,6,7,10,11,13,14].filter(()=>Math.random()<.45).map(ee=>[ee,N+ot([0,0,1,2,-1,3])])};ce();let le=()=>{let N=t.currentTime+.05,ee=Math.random();if(ee<.4)E(N,Ve(.3,1.4),Ve(.01,.022),"bandpass",Ve(1500,4e3),Ve(1.5,4),e.fader,Ve(-.8,.8));else if(ee<.75){let O=t.createOscillator(),H=t.createOscillator(),$=t.createGain(),F=t.createGain(),T=t.createGain(),M=Ve(1800,3400);O.frequency.value=M,H.frequency.value=M*2.76,$.gain.setValueAtTime(M*1.8,N),$.gain.exponentialRampToValueAtTime(M*.08,N+1.2),F.gain.setValueAtTime(0,N),F.gain.linearRampToValueAtTime(.009,N+.01),F.gain.exponentialRampToValueAtTime(1e-4,N+2.4),H.connect($),$.connect(O.frequency),O.connect(F);let C=o(F,Ve(-.9,.9));T.gain.value=.45,C.connect(T),T.connect(e.fader),r(C,this.sala,1.8),r(C,this.eco,.55),e.nodos.push(T),O.start(N),H.start(N),O.stop(N+2.5),H.stop(N+2.5)}else{let O=t.createOscillator(),H=t.createBiquadFilter(),$=t.createGain(),F=Ve(3,7);O.type="sawtooth",O.frequency.value=50,H.type="lowpass",H.frequency.value=380,$.gain.setValueAtTime(0,N),$.gain.linearRampToValueAtTime(.006,N+1),$.gain.linearRampToValueAtTime(1e-4,N+F),O.connect(H),H.connect($),$.connect(e.fader),O.start(N),O.stop(N+F+.1)}this.luego(e,Ve(4,11),le)};this.luego(e,3,le);let se=0,W=0,Z=0;this.secuenciador(e,i,(N,ee)=>{let O=N%16,H=O%2?s*a:0,$=Ve(-.006,.006),F=ee+H+$;if(O===0){se=Math.floor(N/16)+1;let te=(se-1)%32;if((se-1)%2===0||e.primero){W=R[((se-1)/2|0)%4];let q=U(W);z(q.slice(0,4),ee+.01,s*30),k(this.nota(W,-1),ee,s*31),se>2&&this.pad(e,[this.nota(W,0),this.nota(W+4,0)],ee,s*32,{att:1.5,rel:3,gain:.005,corte:650,onda:"sawtooth"})}se%4===1&&ce(),Z=Math.random()}let T=(se-1)%32,M=se<=2,C=T>=28&&T<30,P=!M&&!C,D=se%4===0&&O>=13&&Z<.35;P&&!D?((O===0||O===10&&Z>.25||O===7&&Z<.18)&&S(F,O===0?1:.8),(O===4||O===12)&&w(F+Ve(.008,.024)),(O===3||O===9||O===15)&&Math.random()<.28&&w(F+Ve(.004,.02),Ve(.18,.32)),O===11&&Z>.7&&(w(F,.3),w(F+s*.5,.45)),O%4===2?L(F,Math.random()<.85?1:.4,O===14&&Z>.6):O%2===1&&Math.random()<.38&&L(F,.45),(O===6||O===14)&&Math.random()<.45&&_(F,.8)):C&&O%4===2&&L(F,.35);let J=Y.find(([te])=>te===O);J&&se>1&&Math.random()<(C?.9:.62)&&V(this.nota(J[1],1),F,Ve(.1,.24),.24),O===8&&(se%4===2||C)&&Math.random()<.6&&V(this.nota(ot([4,6,7,9]),1),F,Ve(1.6,3.2),.18,!0)})}perreo(e){let t=this.ctx,i=88,s=60/i/4;this.eco.delayTime.setTargetAtTime(60/i*.5,t.currentTime,.2);let a=(G,X,ve)=>{let Ae=t.createGain();return Ae.gain.value=ve,G.connect(Ae),Ae.connect(X),e.salidas.push(Ae),e.nodos.push(Ae),Ae},r=(G,X)=>{let ve=t.createStereoPanner();return ve.pan.value=X,G.connect(ve),ve},o=t.createGain();o.connect(e.fader),e.nodos.push(o);let c=(G,X)=>{o.gain.setValueAtTime(1,G-.002),o.gain.linearRampToValueAtTime(0,G+.004),o.gain.setValueAtTime(0,G+X-.004),o.gain.linearRampToValueAtTime(1,G+X)},l=t.createWaveShaper(),u=new Float32Array(2048);for(let G=0;G<2048;G++){let X=G/1023.5-1;u[G]=Math.round(X*14)/14}l.curve=u;let h=t.createGain(),d=t.createGain();h.gain.value=1,d.gain.value=0;let f=t.createGain();f.connect(h),h.connect(o),f.connect(l),l.connect(d),d.connect(o),e.nodos.push(l,h,d,f);let g=(G,X)=>{h.gain.setValueAtTime(0,G),d.gain.setValueAtTime(.8,G),h.gain.setValueAtTime(1,G+X),d.gain.setValueAtTime(0,G+X)};this.fondo(e,.004,"highpass",9e3,.4);let A=t.createGain();A.gain.value=1.4,A.connect(f),e.nodos.push(A);let p=t.createGain(),m=t.createGain();p.connect(m),m.connect(f),a(m,this.sala,.85),a(m,this.eco,.12),e.nodos.push(p,m);let y=(G,X)=>{m.gain.cancelScheduledValues(G),m.gain.setValueAtTime(1-X,G+.004),m.gain.setTargetAtTime(1,G+.05,.12)},E=t.createBiquadFilter();E.type="highpass",E.frequency.value=180,E.connect(f),a(E,this.sala,.9),a(E,this.eco,.5),e.nodos.push(E);let v=(G,X,ve,Ae,Me,we,B,ze=0)=>{let De=t.createBufferSource(),I=t.createBiquadFilter(),x=t.createGain();De.buffer=this.ruido,I.type=Ae,I.frequency.value=Me,I.Q.value=we,x.gain.setValueAtTime(ve,G),x.gain.exponentialRampToValueAtTime(1e-4,G+X),De.connect(I),I.connect(x),(ze?r(x,ze):x).connect(B),De.start(G,Math.random()*2),De.stop(G+X+.05)},S=(G,X,ve,Ae,Me,we,B,ze=.4)=>{let De=t.createOscillator(),I=t.createGain();De.type=we,De.frequency.setValueAtTime(X,G),De.frequency.exponentialRampToValueAtTime(ve,G+Ae*ze),I.gain.setValueAtTime(Me,G),I.gain.exponentialRampToValueAtTime(1e-4,G+Ae),De.connect(I),I.connect(B),De.start(G),De.stop(G+Ae+.02)},w=(G,X=1,ve=1)=>{y(G,.6),S(G,120*ve,44*ve,.2,.5*X,"sine",A,.3),v(G,.006,.08*X,"highpass",3e3,.5,A)},L=(G,X=1)=>{S(G,420,260,.09,.12*X,"triangle",A),v(G,.09,.16*X,"bandpass",2600,1.4,A),v(G,.03,.06*X,"highpass",6e3,.6,A)},_=(G,X=1)=>{let ve=t.createOscillator(),Ae=t.createOscillator(),Me=t.createGain(),we=t.createBiquadFilter(),B=t.createGain();ve.type="square",Ae.type="square",ve.frequency.value=3300,Ae.frequency.value=4650,Me.gain.value=6e3,we.type="highpass",we.frequency.value=7e3,B.gain.setValueAtTime(.03*X,G),B.gain.exponentialRampToValueAtTime(1e-4,G+.035),Ae.connect(Me),Me.connect(ve.frequency),ve.connect(we),we.connect(B),r(B,Ve(-.5,.5)).connect(A),ve.start(G),Ae.start(G),ve.stop(G+.05),Ae.stop(G+.05)},R=G=>S(G,ot([900,1250,1700]),600,.06,.05,"sine",A),U=t.createWaveShaper(),z=new Float32Array(1024);for(let G=0;G<1024;G++){let X=G/511.5-1;z[G]=Math.tanh(3*X)/Math.tanh(3)}U.curve=z;let k=t.createBiquadFilter(),ie=t.createGain();k.type="lowpass",k.frequency.value=700,ie.gain.value=.065,U.connect(k),k.connect(ie),ie.connect(f),e.nodos.push(U,k,ie);let V=(G,X,ve,Ae)=>{let Me=t.createOscillator(),we=t.createGain();Me.frequency.setValueAtTime(Qe(Ae??G),X),Ae!=null&&Me.frequency.exponentialRampToValueAtTime(Qe(G),X+.09),we.gain.setValueAtTime(0,X),we.gain.linearRampToValueAtTime(.32,X+.01),we.gain.setValueAtTime(.32,X+ve*.7),we.gain.exponentialRampToValueAtTime(1e-4,X+ve),Me.connect(we),we.connect(U),Me.start(X),Me.stop(X+ve+.05)},Y=t.createBiquadFilter(),ce=t.createOscillator(),le=t.createGain();Y.type="lowpass",Y.frequency.value=900,Y.Q.value=7,ce.frequency.value=.045,le.gain.value=600,ce.connect(le),le.connect(Y.frequency),ce.start(),Y.connect(p),e.nodos.push(Y,ce,le);let se=(G,X,ve)=>G.forEach(Ae=>[-11,0,12].forEach(Me=>{let we=t.createOscillator(),B=t.createGain();we.type="sawtooth",we.frequency.value=Qe(Ae),we.detune.value=Me+Ve(-4,4),this.env(B,X,1.8,.0075,Math.max(0,ve-4),X+ve+2),we.connect(B),B.connect(Y),we.start(X),we.stop(X+ve+2.1)})),W=t.createOscillator(),Z=t.createGain();W.type="triangle",W.frequency.value=Qe(this.nota(0,-1)),Z.gain.value=.02,W.connect(Z),Z.connect(p),W.start(),e.nodos.push(W,Z);let N=(G,X,ve=.016)=>{let Ae=t.createOscillator(),Me=t.createOscillator(),we=t.createGain(),B=t.createGain(),ze=Qe(G);Ae.frequency.value=ze,Me.frequency.value=ze*ot([3.5,4.2,2.01]),we.gain.setValueAtTime(ze*2.2,X),we.gain.exponentialRampToValueAtTime(ze*.05,X+.6),B.gain.setValueAtTime(ve,X),B.gain.exponentialRampToValueAtTime(1e-4,X+1.4),Me.connect(we),we.connect(Ae.frequency),Ae.connect(B),r(B,Ve(-.8,.8)).connect(p),Ae.start(X),Me.start(X),Ae.stop(X+1.5),Me.stop(X+1.5)},ee=t.createBiquadFilter();ee.type="bandpass",ee.frequency.value=2200,ee.Q.value=2.5,ee.connect(p),e.nodos.push(ee);let O=(G,X)=>{let ve=t.createOscillator(),Ae=t.createGain();ve.type="square",ve.frequency.value=Qe(G),Ae.gain.setValueAtTime(.012,X),Ae.gain.exponentialRampToValueAtTime(1e-4,X+s*.8),ve.connect(Ae),Ae.connect(ee),ve.start(X),ve.stop(X+s)},H={a:[800,1150,2900],e:[400,2e3,2550],i:[300,2300,3e3],o:[450,800,2830],u:[325,700,2530]},$=Object.keys(H),F=(G,X,ve=!1)=>{let Ae=X+Math.max(...G.map(([ne,,oe])=>(ne+oe)*s))+.2,Me=t.createOscillator(),we=t.createOscillator(),B=t.createGain(),ze=t.createGain();Me.type="sawtooth",we.type="square",we.detune.value=7,B.gain.value=.6;let De=ve?.5:1,I=[0,1,2].map(ne=>{let oe=t.createBiquadFilter();oe.type="bandpass",oe.Q.value=[8,10,12][ne];let de=t.createGain();return de.gain.value=[1,.5,.22][ne],B.connect(oe),oe.connect(de),de.connect(ze),oe});Me.connect(B),we.connect(B),ze.gain.setValueAtTime(0,X),G.forEach(([ne,oe,de])=>{let Ee=X+ne*s,Pe=Qe(oe)*De,_e=H[ot($)];Me.frequency.setTargetAtTime(Pe,Ee,.008),we.frequency.setTargetAtTime(Pe,Ee,.008),I.forEach((ye,ge)=>ye.frequency.setTargetAtTime(_e[ge]*(ve?.8:1.08),Ee,.02)),ze.gain.setTargetAtTime(.16,Ee,.012),ze.gain.setTargetAtTime(1e-4,Ee+de*s*.85,.04)}),r(ze,Ve(-.25,.25)).connect(E),[Me,we].forEach(ne=>{ne.start(X),ne.stop(Ae+.3)})},T=(G,X)=>{let ve=t.createOscillator(),Ae=t.createGain(),Me=t.createBiquadFilter(),we=t.createGain();ve.type="sawtooth",Me.type="bandpass",Me.frequency.value=1400,Me.Q.value=1.1;let B=[0,1,2].map(ze=>{let De=t.createBiquadFilter();return De.type="bandpass",De.Q.value=[6,8,10][ze],ve.connect(De),De.connect(we),De});we.connect(Me),Me.connect(Ae),Ae.gain.setValueAtTime(0,G);for(let ze=G;ze<G+X;ze+=Ve(.09,.16)){let De=H[ot($)];ve.frequency.setTargetAtTime(Qe(Ve(55,61)),ze,.03),B.forEach((I,x)=>I.frequency.setTargetAtTime(De[x],ze,.015)),Ae.gain.setTargetAtTime(Math.random()<.18?1e-4:.21,ze,.01)}Ae.gain.setTargetAtTime(1e-4,G+X,.03),v(G,X,.012,"bandpass",3e3,1,E,Ve(-.4,.4)),r(Ae,Ve(-.6,.6)).connect(E),ve.start(G),ve.stop(G+X+.3)},M=(G,X)=>{let[ve,Ae]=G[0];for(let Me=0;Me<4;Me++)F([[0,Ae+(Me===3?12:0),.4]],X+ve*s+Me*s*.5)},C=[0,1,0,5],P=[0,2,3,4,6,7],D=[],J=()=>{let G=ot([[0,3,6,10,12],[2,4,7,10,14],[0,2,6,8,11,14],[3,6,10,12,13]]),X=ot(P);D=G.map((ve,Ae)=>(X=Math.max(0,Math.min(9,X+ot([-2,-1,0,1,1,2]))),[ve,X,Ae===G.length-1?4:ot([1,2,2,3])]))};J();let te=0,q=0,ae=[],re=0;this.secuenciador(e,i,(G,X)=>{let ve=G%16;if(ve===0){te=Math.floor(G/16)+1,re=Math.random();let ze=(te-1)%48;((te-1)%2===0||e.primero)&&(q=C[((te-1)/2|0)%4],se([this.nota(q,0),this.nota(q+2,0),this.nota(q+4,1)],X,s*32),ae=[0,2,4,7].map(De=>this.nota(q+De,2))),te%8===1&&J(),ze>4&&ze%8===7&&re<.5&&c(X+s*12,s*4),re>.85&&g(X+s*8,s*8)}let Ae=(te-1)%48,Me=te<=4,we=Ae>=36&&Ae<40;if(!Me&&!we&&(ve%4===0&&!(ve===8&&re<.3)&&w(X,ve===0?1:.85,re>.9&&ve===12?.7:1),[3,6,11,14].includes(ve)&&!(ve===11&&re>.75)&&L(X,ve===6||ve===14?1:.8),ve%2===0&&Math.random()<.3&&_(X,ve%4===2?1:.6),ve===15&&re>.6&&R(X),ve===0&&V(this.nota(q,-1),X,s*5.5,re>.5?this.nota(q+4,-1):null),ve===8&&re>.35&&V(this.nota(q,-1),X,s*3),ve===13&&re<.4&&V(this.nota(q+ot([2,4,-1]),-1),X,s*2.5,this.nota(q,-1))),te>2&&ve%2===0&&Math.random()<.55&&O(ae[ve/2%ae.length]+(re>.8&&ve>8?12:0),X),Math.random()<.035&&N(this.nota(ot([0,2,4,7]),3),X+Math.random()*.1),ve===0){let ze=(te-1)%8;(ze===2||ze===6)&&te>4&&(re<.12?M(D.map(([De,I,x])=>[De,this.nota(I,2),x]),X):F(D.map(([De,I,x])=>[De,this.nota(I,2),x]),X)),ze===3&&re<.5&&F(D.slice(0,3).map(([De,I,x])=>[De,this.nota(I,2),x]),X,!0),(ze===0||we)&&re>.55&&T(X+s*2,Ve(1.2,2.2))}})}trance(e){let t=this.ctx,i=128,s=60/i/4;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let a=(H,$,F)=>{let T=t.createGain();return T.gain.value=F,H.connect(T),T.connect($),e.salidas.push(T),e.nodos.push(T),T},r=(H,$)=>{let F=t.createStereoPanner();return F.pan.value=$,H.connect(F),F};e.vaiven=t.createGain();let o=t.createOscillator(),c=t.createGain();o.frequency.value=.21,c.gain.value=4,o.connect(c),c.connect(e.vaiven),o.start(),e.nodos.push(o,c,e.vaiven),this.fondo(e,.0012,"highpass",8e3,.4);let l=t.createGain();l.gain.value=.98;let u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=6e3,l.connect(u),u.connect(e.fader),e.nodos.push(l,u);let h=t.createBiquadFilter(),d=t.createGain();h.type="lowpass",h.frequency.value=900,h.Q.value=1.2;let f=t.createBiquadFilter();f.type="highpass",f.frequency.value=160,f.connect(h),h.connect(d),d.connect(e.fader),a(d,this.sala,.75),e.nodos.push(h,f,d);let g=(H,$)=>{d.gain.cancelScheduledValues(H),d.gain.setValueAtTime(1-$,H+.004),d.gain.setTargetAtTime(1,H+.04,.1)},A=t.createBiquadFilter(),p=t.createGain();A.type="lowpass",A.frequency.value=3400,A.Q.value=2,p.gain.value=0,A.connect(p),p.connect(e.fader),a(p,this.sala,.35),a(p,this.eco,.25),e.nodos.push(A,p);let m=t.createGain();m.connect(e.fader),a(m,this.eco,.55),a(m,this.sala,.6),e.nodos.push(m);let y=t.createBiquadFilter();y.type="highpass",y.frequency.value=220;let E=t.createBiquadFilter();E.type="lowpass",E.frequency.value=5200,y.connect(E),E.connect(e.fader),a(E,this.sala,1.5),a(E,this.eco,.5),e.nodos.push(y,E);let v=(H,$,F,T,M=3,C=.006,P=1.4)=>H.forEach(D=>{for(let J=0;J<M;J++){let te=t.createOscillator(),q=t.createGain(),ae=M>1?J/(M-1)*2-1:0;te.type="sawtooth",te.frequency.value=Qe(D),te.detune.value=ae*22+Ve(-3,3),e.vaiven.connect(te.detune),this.env(q,$,P,C,Math.max(0,F-P-1.5),$+F+1.5),te.connect(q),r(q,ae*.85).connect(T),te.start($),te.stop($+F+1.6)}}),S=H=>[this.nota(H,0),this.nota(H+4,0),this.nota(H+1,1),this.nota(H+4,1),this.nota(H+3,1)],w=[1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1],L=(H,$,F,T)=>{let M=t.createOscillator(),C=t.createOscillator(),P=t.createGain(),D=t.createGain(),J=Qe(H);M.type="triangle",M.frequency.value=J,C.frequency.value=J*4,P.gain.setValueAtTime(J*1.3,$),P.gain.exponentialRampToValueAtTime(J*.02,$+.3),D.gain.setValueAtTime(0,$),D.gain.linearRampToValueAtTime(F,$+.004),D.gain.exponentialRampToValueAtTime(1e-4,$+.7),C.connect(P),P.connect(M.frequency),M.connect(D),r(D,T).connect(m),M.start($),C.start($),M.stop($+.75),C.stop($+.75)},_=(H,$,F)=>{let T=t.createOscillator(),M=t.createOscillator(),C=t.createGain(),P=t.createBiquadFilter();M.type="triangle",T.frequency.value=Qe(H),M.frequency.value=Qe(H),P.type="lowpass",P.frequency.value=420,C.gain.setValueAtTime(0,$),C.gain.linearRampToValueAtTime(.064,$+.012),C.gain.setValueAtTime(.064,$+F*.6),C.gain.exponentialRampToValueAtTime(1e-4,$+F),T.connect(P),M.connect(P),P.connect(C),C.connect(e.fader),T.start($),M.start($),T.stop($+F+.05),M.stop($+F+.05)},R=(H,$,F,T,M,C,P=0)=>{let D=t.createBufferSource(),J=t.createBiquadFilter(),te=t.createGain();D.buffer=this.ruido,J.type=T,J.frequency.value=M,J.Q.value=C,te.gain.setValueAtTime(F,H),te.gain.exponentialRampToValueAtTime(1e-4,H+$),D.connect(J),J.connect(te),(P?r(te,P):te).connect(l),D.start(H,Math.random()*2),D.stop(H+$+.05)},U=(H,$=1)=>{g(H,.45*$);let F=t.createOscillator(),T=t.createGain();F.frequency.setValueAtTime(105,H),F.frequency.exponentialRampToValueAtTime(48,H+.08),T.gain.setValueAtTime(.45*$,H),T.gain.exponentialRampToValueAtTime(1e-4,H+.32),F.connect(T),T.connect(l),F.start(H),F.stop(H+.35)},z=(H,$=1)=>{R(H,.15,.11*$,"bandpass",1900,.9),R(H,.05,.04*$,"highpass",5e3,.5)},k=(H,$=1,F=!1)=>R(H,F?.14:.035,.035*$,"highpass",8500,.7,Ve(-.35,.35)),ie={a:[800,1150,2900],o:[450,800,2830],u:[325,700,2530],e:[400,2e3,2550]},V=Object.keys(ie),Y=(H,$,F,T,M)=>{let C=t.createOscillator(),P=t.createGain(),D=t.createGain(),J=t.createOscillator(),te=t.createGain(),q=ie[ot(V)];C.type="sawtooth",C.frequency.value=Qe(H),C.detune.value=Ve(-8,8),J.frequency.value=Ve(4.8,5.6),te.gain.value=9,J.connect(te),te.connect(C.detune),C.connect(D),q.forEach((X,ve)=>{let Ae=t.createBiquadFilter();Ae.type="bandpass",Ae.frequency.value=X*1.12,Ae.Q.value=[7,9,11][ve];let Me=t.createGain();Me.gain.value=[1,.5,.3][ve],D.connect(Ae),Ae.connect(Me),Me.connect(P)});let ae=t.createBufferSource(),re=t.createBiquadFilter(),G=t.createGain();ae.buffer=this.ruido,re.type="bandpass",re.frequency.value=q[1]*1.6,re.Q.value=1.5,G.gain.value=.28,ae.connect(re),re.connect(G),G.connect(P),P.gain.setValueAtTime(0,$),P.gain.linearRampToValueAtTime(T,$+Math.min(.12,F*.3)),P.gain.setValueAtTime(T,$+F*.7),P.gain.exponentialRampToValueAtTime(1e-4,$+F),r(P,M).connect(y),[C,J].forEach(X=>{X.start($),X.stop($+F+.05)}),ae.start($,Math.random()*2),ae.stop($+F+.05)},ce=(H,$,F,T)=>{Y(H,$,F,T,-.35),Y(H,$+.012,F,T*.8,.35)},le=[],se=()=>{let H=ot([2,4,6]);le=[0,4,6,10,14,18,22,26].filter(()=>Math.random()<.7).map($=>(H=Math.max(0,Math.min(9,H+ot([-2,-1,1,1,2,0]))),[$,H,ot([2,3,4])]))};se();let W=[0,5,2,6],Z=0,N=0,ee=0,O=[];this.secuenciador(e,i,(H,$)=>{let F=H%16;if(F===0){Z=Math.floor(H/16)+1,ee=Math.random();let q=(Z-1)%64;if((Z-1)%2===0||e.primero){N=W[((Z-1)/2|0)%4];let re=S(N);v(re,$,s*32,f,3,.0062),v([re[2],re[3],re[4]],$,s*32,A,2,.05,.02),O=[this.nota(N,2),this.nota(N+4,2),this.nota(N+1,3),this.nota(N+4,2),this.nota(N+2,3),this.nota(N+4,2)]}let ae=Math.sin(Math.PI*((Z-1)%16/16));h.frequency.setTargetAtTime(700+ae*2600,$,2.5),Z%4===1&&se()}let T=(Z-1)%64,M=T<8,C=T>=40&&T<48,P=T>=24&&T<40||T>=56,D=T>=16&&!C;p.gain.setValueAtTime(D&&w[F]?1:0,$),D&&w[F]&&p.gain.setTargetAtTime(0,$+s*.55,.012),!M&&!C?(P?(F%4===0&&U($,.9),F%4===2&&k($,1,F===14&&ee>.5),(F===4||F===12)&&z($,.55)):((F===0||F===10||F===7&&ee>.6)&&U($,F===0?1:.8),(F===4||F===12)&&z($),F===15&&ee>.7&&z($,.35),F%2===0&&k($,F%4===2?.9:.5)),F%4===2&&_(this.nota(N,-1),$,s*1.6)):F===0&&_(this.nota(N,-1),$,s*14),T>=8&&O.length&&Math.random()<(C?.9:.7)&&L(O[H%O.length]+(ee>.85&&F>=12?12:0),$,C?.03:.022,H%2?.6:-.6);let J=(Z-1)%2*16+F,te=le.find(([q])=>q===J);if(te&&Z>2&&((Z-1)%8<6||C)){let q=this.nota(te[1],2),ae=te[2]*s;if(ee>.78&&J>=14)for(let re=0;re<4;re++)Y(q+(re===3?12:0),$+re*s,s*.9,.065,re%2?.4:-.4);else ce(q,$,ae*1.6,.07)}})}rave(e){let t=this.ctx,i=132,s=60/i/4;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let a=(C,P,D)=>{let J=t.createGain();return J.gain.value=D,C.connect(J),J.connect(P),e.salidas.push(J),e.nodos.push(J),J},r=(C,P)=>{let D=t.createStereoPanner();return D.pan.value=P,C.connect(D),D},o=t.createBiquadFilter(),c=t.createGain();o.type="highpass",o.frequency.value=20,o.Q.value=.8,o.connect(c),c.connect(e.fader),e.nodos.push(o,c);let l=(C,P)=>{c.gain.setValueAtTime(1,C-.002),c.gain.linearRampToValueAtTime(0,C+.003),c.gain.setValueAtTime(0,C+P-.003),c.gain.linearRampToValueAtTime(1,C+P)},u=t.createGain();u.gain.value=1.25,u.connect(o),e.nodos.push(u);let h=t.createGain();h.connect(o),e.nodos.push(h);let d=(C,P)=>{h.gain.setValueAtTime(1,C-.002),h.gain.linearRampToValueAtTime(0,C+.004),h.gain.setValueAtTime(0,C+P-.004),h.gain.linearRampToValueAtTime(1,C+P)},f=t.createBiquadFilter(),g=t.createGain();f.type="lowpass",f.frequency.value=1500,f.Q.value=1.5,f.connect(g),g.connect(h),a(g,this.sala,.45),e.nodos.push(f,g);let A=.5,p=C=>{g.gain.cancelScheduledValues(C),g.gain.setValueAtTime(1-A,C+.003),g.gain.setTargetAtTime(1,C+.02,s*.9)},m=t.createBiquadFilter();m.type="highpass",m.frequency.value=240;let y=t.createDynamicsCompressor();y.threshold.value=-26,y.ratio.value=5,y.attack.value=.002,y.release.value=.07,m.connect(y),y.connect(o),a(y,this.cuarto,.45),a(y,this.eco,.2),a(y,this.sala,.35),e.nodos.push(m,y);let E=(C,P)=>[C+(Math.random()+Math.random()-1)*.011,P*Ve(.62,1.05)],v=(C,P,D,J,te,q,ae=0)=>{let re=t.createBufferSource(),G=t.createBiquadFilter(),X=t.createGain();re.buffer=this.ruido,G.type=J,G.frequency.value=te,G.Q.value=q,X.gain.setValueAtTime(Math.min(D,.4),C),X.gain.exponentialRampToValueAtTime(1e-4,C+P),re.connect(G),G.connect(X),(ae?r(X,ae):X).connect(u),re.start(C,Math.random()*2),re.stop(C+P+.05)},S=(C,P,D,J,te,q,ae=.35)=>{let re=t.createOscillator(),G=t.createGain();re.type=q,re.frequency.setValueAtTime(P,C),re.frequency.exponentialRampToValueAtTime(D,C+J*ae),G.gain.setValueAtTime(te,C),G.gain.exponentialRampToValueAtTime(1e-4,C+J),re.connect(G),G.connect(u),re.start(C),re.stop(C+J+.02)},w=(C,P=1,D=!1)=>{let[J,te]=D?[C,P]:E(C,P);p(J),S(J,D?170:140,46,D?.3:.24,.75*te,"sine"),v(J,.01,.14*te,"highpass",2200,.6)},L=(C,P=1)=>{let[D,J]=E(C+.004,P);[0,.008,.017,.029].forEach((te,q)=>v(D+te,q===3?.16:.011,.17*J,"bandpass",1450,1.2,q%2?.25:-.25))},_=(C,P=1)=>{let[D,J]=E(C,P);S(D,240,185,.08,.13*J,"triangle"),v(D,.12,.22*J,"bandpass",2300,.9),v(D,.04,.08*J,"highpass",6e3,.6)},R=(C,P=1,D=!1)=>{let[J,te]=E(C,P);v(J,D?.13:Ve(.022,.045),.06*te,"highpass",Ve(7200,9600),.7,Ve(-.35,.35))},U=[[1,0,.45,.3,.9,0,.5,.25,1,.35,.45,0,.85,.3,.55,.4],[.9,.3,0,.5,1,0,.4,.3,.8,0,.6,.35,1,.25,0,.6],[1,.4,.6,0,.9,.35,0,.5,1,.3,.7,.2,.8,0,.5,.45]],z=U[0],k=t.createWaveShaper(),ie=new Float32Array(1024);for(let C=0;C<1024;C++){let P=C/511.5-1;ie[C]=Math.tanh(2.2*P)/Math.tanh(2.2)}k.curve=ie;let V=t.createBiquadFilter(),Y=t.createGain();V.type="lowpass",V.frequency.value=300,Y.gain.value=.085,k.connect(V),V.connect(Y),Y.connect(h),e.nodos.push(k,V,Y);let ce=(C,P,D)=>{let J=t.createOscillator(),te=t.createGain();J.frequency.value=Qe(C),te.gain.setValueAtTime(0,P),te.gain.linearRampToValueAtTime(.5,P+.006),te.gain.setValueAtTime(.5,P+D*.75),te.gain.linearRampToValueAtTime(1e-4,P+D),J.connect(te),te.connect(k),J.start(P),J.stop(P+D+.02)},le=C=>[this.nota(C,0),this.nota(C+2,0),this.nota(C+4,0),this.nota(C+2,1)],se=(C,P,D)=>C.forEach((J,te)=>[[1,1],[2,.3],[3,.08]].forEach(([q,ae])=>{let re=t.createOscillator(),G=t.createGain();re.frequency.value=Qe(J)*q*(q>1?1.002:1),G.gain.value=0,G.gain.setValueAtTime(0,P+te*.008),G.gain.linearRampToValueAtTime(.011*ae,P+te*.008+.006),G.gain.exponentialRampToValueAtTime(1e-4,P+D/q),re.connect(G),G.connect(f),re.start(P),re.stop(P+D+.05)})),W=(C,P,D)=>C.forEach(J=>[-12,0,12].forEach(te=>{let q=t.createOscillator(),ae=t.createGain();q.type="sawtooth",q.frequency.value=Qe(J+12),q.detune.value=te+Ve(-4,4),ae.gain.setValueAtTime(0,P),ae.gain.linearRampToValueAtTime(.0042,P+.02),ae.gain.setValueAtTime(.0042,P+D-.05),ae.gain.linearRampToValueAtTime(1e-4,P+D),q.connect(ae),r(ae,te/16).connect(f),q.start(P),q.stop(P+D+.02)})),Z={a:[850,1250,3e3],e:[500,2100,2850],i:[330,2500,3300],o:[500,900,2900],u:[350,800,2600]},N=(C,P,D,J,te="a",q=null,ae=0)=>{let re=t.createOscillator(),G=t.createOscillator(),X=t.createGain(),ve=t.createGain(),Ae=t.createOscillator(),Me=t.createGain(),we=Z[te],B=Z[q||te];re.type="sawtooth",G.type="sawtooth";let ze=Qe(C);re.frequency.setValueAtTime(ze*.955,P),re.frequency.exponentialRampToValueAtTime(ze,P+.06),G.frequency.setValueAtTime(ze*.958,P),G.frequency.exponentialRampToValueAtTime(ze*1.003,P+.06),Ae.frequency.value=5.4,Me.gain.setValueAtTime(0,P),Me.gain.linearRampToValueAtTime(D>.4?24:0,P+Math.max(.05,D*.6)),Ae.connect(Me),Me.connect(re.detune),Me.connect(G.detune),re.connect(X),G.connect(X),X.gain.value=.6,we.forEach((ne,oe)=>{let de=t.createBiquadFilter();de.type="bandpass",de.Q.value=[6,8,9][oe],de.frequency.setValueAtTime(ne*1.12,P),de.frequency.linearRampToValueAtTime(B[oe]*1.12,P+D*.8);let Ee=t.createGain();Ee.gain.value=[1,.75,.5][oe],X.connect(de),de.connect(Ee),Ee.connect(ve)});let De=t.createBufferSource(),I=t.createBiquadFilter(),x=t.createGain();De.buffer=this.ruido,I.type="bandpass",I.frequency.value=4800,I.Q.value=.8,x.gain.setValueAtTime(J*1.4,P),x.gain.exponentialRampToValueAtTime(J*.08,P+.04),De.connect(I),I.connect(x),x.connect(m),ve.gain.setValueAtTime(0,P),ve.gain.linearRampToValueAtTime(J,P+.008),ve.gain.setValueAtTime(J,P+D*.85),ve.gain.linearRampToValueAtTime(1e-4,P+D),r(ve,ae).connect(m),[re,G,Ae].forEach(ne=>{ne.start(P),ne.stop(P+D+.02)}),De.start(P,Math.random()*2),De.stop(P+D+.02)},ee=[[0,4,3,"a","i"],[3,4,2,"o"],[6,5,2,"e"],[8,4,5,"a","o"],[14,2,2,"i"],[16,2,3,"u","a"],[19,1,2,"o"],[22,2,2,"e"],[24,0,7,"a","e"]],O=[[0,4,"a"],[2,4,"i"],[3,5,"e"],[6,4,"a"],[8,4,"a"],[10,2,"o"],[11,4,"i"],[14,5,"e"]],H=[5,3,0,4],$=0,F=0,T=0,M="intro";this.secuenciador(e,i,(C,P)=>{let D=C%16;if(D===0){$=Math.floor(C/16)+1,T=Math.random();let te=($-1)%32;M=te<4?"intro":te<12?"garage":te<14?"subida":te===14?"capela":te<23?"drop":te<27?"garage":te<31?"drop":"capela",F=H[(($-1)/2|0)%4],z=ot(U),A=M==="drop"?.85:.45,f.frequency.setTargetAtTime(M==="drop"?3800:M==="subida"?2600:1500,P,.4),(M==="intro"||M==="garage")&&(($-1)%2===0||e.primero)&&se(le(F),P,s*30),M==="drop"&&W(le(F),P,s*16),te===12&&(o.frequency.setValueAtTime(20,P),o.frequency.exponentialRampToValueAtTime(1200,P+s*32)),M==="capela"&&(o.frequency.setValueAtTime(20,P),d(P,s*16)),M==="garage"&&T>.85&&l(P+s*14,s*2),M==="drop"&&T>.8&&l(P+s*7,s)}let J=($-1)%32;if(M==="intro")$>1&&z[D]&&R(P,z[D]*.5);else if(M==="garage")(D===0||D===10||D===7&&T<.3)&&w(P,D===0?1:.8),D===11&&T>.6&&w(P,.35),(D===4||D===12)&&L(P),z[D]&&R(P,z[D]),D===15&&T>.5&&(_(P,.3),_(P+s*.5,.45));else if(M==="subida"){let te=J-12;D%4===0&&w(P,.9,!0),te===0&&D%2===0&&_(P,.35+D*.02),te===1&&(_(P,.5+D*.03),D>=8&&_(P+s*.5,.5+D*.03)),D%2===0&&v(P,s*2,.006+(te*16+D)*9e-4,"highpass",2e3+(te*16+D)*180,.7)}else M==="drop"&&(D%4===0&&w(P,1,!0),(D===4||D===12)&&(L(P,1),_(P,.75)),D%4===2?R(P,1,!0):z[D]&&R(P,z[D]*.7),D===15&&T>.4&&(R(P,.7),R(P+s/3,.8),R(P+s*2/3,.9)));if(M==="garage"&&(D===0&&ce(this.nota(F,-1),P,s*2.6),(D===3||D===10)&&ce(this.nota(F,-1),P,s*1.6)),M==="drop"&&D%4===2&&ce(this.nota(F,-1),P,s*1.8),M==="subida"&&D===0&&ce(this.nota(F,-1),P,s*14),M==="intro"||M==="garage"||M==="capela"){let te=($-1)%2*16+D,q=ee.find(([ae])=>ae===te);q&&N(this.nota(q[1],1),P,q[2]*s*1.05,.26,q[3],q[4],0)}else if(M==="drop"){let te=O.find(([q])=>q===D);if(te)if(T>.7&&D>=8)for(let q=0;q<2;q++)N(this.nota(te[1],1),P+q*s/2,s/2*.8,.26,te[2],null,q?.3:-.3);else N(this.nota(te[1],1)+(D===14&&T<.25?12:0),P,s*.85,.28,te[2])}else if(M==="subida"){let te=J-12,q=te===0?4:2;D%q===0&&N(this.nota(4,1),P,s*q*.7,.22+(te*16+D)*.003,"a","i")}})}dnb(e){let t=this.ctx,i=172,s=60/i/4;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let a=(O,H,$)=>{let F=t.createGain();return F.gain.value=$,O.connect(F),F.connect(H),e.salidas.push(F),e.nodos.push(F),F},r=(O,H)=>{let $=t.createStereoPanner();return $.pan.value=H,O.connect($),$};e.vaiven=t.createGain();let o=t.createOscillator(),c=t.createGain();o.frequency.value=.17,c.gain.value=5,o.connect(c),c.connect(e.vaiven),o.start(),e.nodos.push(o,c,e.vaiven),this.fondo(e,.006,"bandpass",900,.35,.013);let l=t.createGain(),u=t.createBiquadFilter();l.gain.value=1,u.type="lowpass",u.frequency.value=7500,l.connect(u),u.connect(e.fader),a(u,this.cuarto,.3),e.nodos.push(l,u);let h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=1600,h.Q.value=.6,h.connect(e.fader),a(h,this.sala,1.2),e.nodos.push(h);let d=t.createOscillator(),f=t.createGain();d.frequency.value=.03,f.gain.value=700,d.connect(f),f.connect(h.frequency),d.start(),e.nodos.push(d,f);let g=t.createGain(),A=t.createStereoPanner(),p=t.createOscillator(),m=t.createGain();p.frequency.value=3.2,m.gain.value=.45,p.connect(m),m.connect(A.pan),p.start(),g.connect(A),A.connect(e.fader),a(A,this.sala,.55),a(A,this.eco,.28),e.nodos.push(g,A,p,m);let y=(O,H,$,F,T,M,C=0)=>{let P=t.createBufferSource(),D=t.createBiquadFilter(),J=t.createGain();P.buffer=this.ruido,D.type=F,D.frequency.value=T,D.Q.value=M,J.gain.setValueAtTime($,O),J.gain.exponentialRampToValueAtTime(1e-4,O+H),P.connect(D),D.connect(J),(C?r(J,C):J).connect(l),P.start(O,Math.random()*2),P.stop(O+H+.05)},E=(O,H,$,F,T,M)=>{let C=t.createOscillator(),P=t.createGain();C.type=M,C.frequency.setValueAtTime(H,O),C.frequency.exponentialRampToValueAtTime($,O+F*.35),P.gain.setValueAtTime(T,O),P.gain.exponentialRampToValueAtTime(1e-4,O+F),C.connect(P),P.connect(l),C.start(O),C.stop(O+F+.02)},v=O=>O+Ve(-.004,.004),S=(O,H=1)=>{E(O,120,50,.2,.55*H,"sine"),y(O,.006,.06*H,"highpass",2500,.6)},w=(O,H=1)=>{E(O,260,200,.07,.1*H,"triangle"),y(O,H>.6?.14:.07,.17*H,"bandpass",2e3,.8),y(O,.03,.06*H,"highpass",5500,.6)},L=(O,H=1)=>y(O,.03,.04*H,"highpass",8500,.7,Ve(-.3,.3)),_=(O,H=1)=>{let $=t.createOscillator(),F=t.createOscillator(),T=t.createGain(),M=t.createBiquadFilter(),C=t.createGain();$.type="square",F.type="square",$.frequency.value=520,F.frequency.value=1407,T.gain.value=2600,M.type="highpass",M.frequency.value=5200,C.gain.setValueAtTime(.018*H,O),C.gain.exponentialRampToValueAtTime(1e-4,O+.9),F.connect(T),T.connect($.frequency),$.connect(M),M.connect(C),r(C,.35).connect(l),$.start(O),F.start(O),$.stop(O+1),F.stop(O+1),y(O,.4,.012*H,"bandpass",9e3,1.2,.35)},R=[{b:[0,10,16,26,27],s:[4,12,20,28],g:[7,9,14,23,25,30,31]},{b:[0,10,18,26],s:[4,12,20,28],g:[6,9,15,22,25,29]},{b:[0,3,10,16,19,26],s:[4,12,20,28],g:[7,14,15,23,30]},{b:[0,10,16,24,26],s:[4,13,20,28],g:[2,7,11,18,23,31]}],U=R[0],z=t.createGain();z.gain.value=1,z.connect(e.fader),e.nodos.push(z);let k=(O,H,$,F)=>{let T=t.createOscillator(),M=t.createGain();T.frequency.setValueAtTime(Qe(F??O),H),F!=null&&T.frequency.exponentialRampToValueAtTime(Qe(O),H+.12),M.gain.setValueAtTime(0,H),M.gain.linearRampToValueAtTime(.05,H+.03),M.gain.setValueAtTime(.05,H+$-.12),M.gain.linearRampToValueAtTime(1e-4,H+$),T.connect(M),M.connect(z),T.start(H),T.stop(H+$+.02)},ie=[0,3,6,4],V=O=>[2,4,6,8].map(H=>this.nota(O+H,1)),Y=(O,H,$)=>O.forEach(F=>[-8,8].forEach(T=>{let M=t.createOscillator(),C=t.createGain();M.type="sawtooth",M.frequency.value=Qe(F),M.detune.value=T+Ve(-3,3),e.vaiven.connect(M.detune),this.env(C,H,2.2,.018,Math.max(0,$-4.5),H+$+2.5),M.connect(C),r(C,T/14).connect(h),M.start(H),M.stop(H+$+2.6)})),ce=(O,H,$=1.6,F=.03)=>{let T=Qe(O),M=t.createOscillator(),C=t.createOscillator(),P=t.createGain(),D=t.createGain();M.frequency.value=T,C.frequency.value=T,M.detune.value=Ve(-4,4),P.gain.setValueAtTime(T*1.4,H),P.gain.exponentialRampToValueAtTime(T*.15,H+.35);let J=t.createOscillator(),te=t.createGain();J.frequency.value=T*14,te.gain.setValueAtTime(F*.25,H),te.gain.exponentialRampToValueAtTime(1e-4,H+.05),D.gain.setValueAtTime(0,H),D.gain.linearRampToValueAtTime(F,H+.004),D.gain.exponentialRampToValueAtTime(1e-4,H+$),C.connect(P),P.connect(M.frequency),M.connect(D),J.connect(te),te.connect(D),D.connect(g),[M,C,J].forEach(q=>{q.start(H),q.stop(H+$+.05)})},le=[[0,1],[6,.7],[10,.6],[16,.9],[22,.6],[27,.7]],se=0,W=0,Z=0,N=[],ee=()=>{let O=ot([4,6,7]);N=[2,5,8,11,14,18,21,24,29].filter(()=>Math.random()<.55).map(H=>(O=Math.max(2,Math.min(11,O+ot([-2,-1,1,2,0]))),[H,O]))};ee(),this.secuenciador(e,i,(O,H)=>{let $=O%16,F=O%32;if($===0){se=Math.floor(O/16)+1,Z=Math.random();let te=(se-1)%64;((se-1)%4===0||e.primero)&&(W=ie[((se-1)/4|0)%4],Y(V(W),H,s*64)),((se-1)%2===0||e.primero)&&(U=Math.random()<.6?R[0]:ot(R)),se%8===1&&ee()}let T=(se-1)%64,M=T<8,C=T>=40&&T<48;!M&&!C?(U.b.includes(F)&&S(v(H),F%16===0?1:.85),U.s.includes(F)&&w(v(H)+.003,1),U.g.includes(F)&&Math.random()<.8&&w(v(H),Ve(.18,.32)),$%2===0?_(v(H),$%4===0?1:.6):Math.random()<.5&&L(v(H),.6),T%8===7&&$>=12&&w(v(H),.3+($-12)*.12)):M&&se>4&&$%4===0&&_(H,.5),!M&&F===0&&k(this.nota(W,-1),H,s*14,Z>.7?this.nota(W+4,-1):null),!M&&F===16&&Z>.3&&k(this.nota(W+ot([0,4,6]),-1),H,s*12);let D=le.find(([te])=>te===F);D&&Math.random()<.85&&V(W).slice(0,3).forEach((te,q)=>ce(te-12,H+q*.012,1.4,.07*D[1]));let J=N.find(([te])=>te===F);J&&(T%16>=8||C)&&ce(this.nota(J[1],1),v(H),2.2,.125)})}galore(e){let t=this.ctx,i=96,s=60/i/4;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let a=(T,M,C)=>{let P=t.createGain();return P.gain.value=C,T.connect(P),P.connect(M),e.salidas.push(P),e.nodos.push(P),P},r=(T,M)=>{let C=t.createStereoPanner();return C.pan.value=M,T.connect(C),C};e.vaiven=t.createGain();let o=t.createOscillator(),c=t.createGain(),l=t.createOscillator(),u=t.createGain();o.frequency.value=.09,c.gain.value=6,l.frequency.value=4.3,u.gain.value=3.5,o.connect(c),c.connect(e.vaiven),l.connect(u),u.connect(e.vaiven),o.start(),l.start(),e.nodos.push(o,c,l,u,e.vaiven);let h=t.createGain(),d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=2600,d.Q.value=1.6,h.connect(d);let f=(T,M,C)=>{let P=t.createDelay(.05),D=t.createOscillator(),J=t.createGain(),te=t.createGain();return P.delayTime.value=M,D.frequency.value=.7+C,J.gain.value=.0025,D.connect(J),J.connect(P.delayTime),D.start(),te.gain.value=.55,d.connect(P),P.connect(te),r(te,T).connect(e.fader),e.nodos.push(P,D,J,te),te};f(-.7,.014,0),f(.7,.019,.13);let g=t.createGain();g.gain.value=.6,d.connect(g),g.connect(e.fader),a(d,this.sala,.6),a(d,this.eco,.22),e.nodos.push(h,d,g);let A=t.createOscillator(),p=t.createGain();A.frequency.value=.05,p.gain.value=900,A.connect(p),p.connect(d.frequency),A.start(),e.nodos.push(A,p);let m=(T,M,C,P=1.1,D=1)=>{let J=t.createGain(),te=Qe(T);[["triangle",1,-6],["triangle",1,7],["sine",2,3]].forEach(([q,ae,re])=>{let G=t.createOscillator(),X=t.createGain();G.type=q,G.frequency.value=te*ae,G.detune.value=re+Ve(-2,2),e.vaiven.connect(G.detune),X.gain.value=ae>1?.35*D:.5,G.connect(X),X.connect(J),G.start(M),G.stop(M+P+.05)}),J.gain.value=0,J.gain.setValueAtTime(0,M),J.gain.linearRampToValueAtTime(C,M+.018),J.gain.exponentialRampToValueAtTime(1e-4,M+P),J.connect(h)},y=t.createBiquadFilter();y.type="lowpass",y.frequency.value=1100,y.connect(e.fader),a(y,this.sala,.9),e.nodos.push(y);let E=(T,M,C)=>T.forEach(P=>[-9,9].forEach(D=>{let J=t.createOscillator(),te=t.createGain();J.type="sawtooth",J.frequency.value=Qe(P),J.detune.value=D,e.vaiven.connect(J.detune),this.env(te,M,1.5,.015,Math.max(0,C-3),M+C+1.5),J.connect(te),r(te,D/12).connect(y),J.start(M),J.stop(M+C+1.6)})),v=t.createGain();v.gain.value=1,v.connect(e.fader),e.nodos.push(v);let S=(T,M,C,P)=>{let D=t.createOscillator(),J=t.createOscillator(),te=t.createGain(),q=t.createGain();D.frequency.setValueAtTime(Qe(P??T),M),P!=null&&D.frequency.exponentialRampToValueAtTime(Qe(T),M+.08),J.type="triangle",J.frequency.value=Qe(T)*2,q.gain.value=.15,J.connect(q),q.connect(te),te.gain.value=0,te.gain.setValueAtTime(0,M),te.gain.linearRampToValueAtTime(.105,M+.012),te.gain.setValueAtTime(.105,M+C*.7),te.gain.linearRampToValueAtTime(1e-4,M+C),D.connect(te),te.connect(v),[D,J].forEach(ae=>{ae.start(M),ae.stop(M+C+.02)})},w=t.createGain();w.gain.value=1.35,w.connect(e.fader),a(w,this.cuarto,.25),e.nodos.push(w);let L=(T,M,C,P,D,J,te=0)=>{let q=t.createBufferSource(),ae=t.createBiquadFilter(),re=t.createGain();q.buffer=this.ruido,ae.type=P,ae.frequency.value=D,ae.Q.value=J,re.gain.setValueAtTime(C,T),re.gain.exponentialRampToValueAtTime(1e-4,T+M),q.connect(ae),ae.connect(re),(te?r(re,te):re).connect(w),q.start(T,Math.random()*2),q.stop(T+M+.05)},_=(T,M,C,P,D,J="sine",te=0)=>{let q=t.createOscillator(),ae=t.createGain();q.type=J,q.frequency.setValueAtTime(M,T),q.frequency.exponentialRampToValueAtTime(C,T+P*.35),ae.gain.setValueAtTime(D,T),ae.gain.exponentialRampToValueAtTime(1e-4,T+P),q.connect(ae),(te?r(ae,te):ae).connect(w),q.start(T),q.stop(T+P+.02)},R=(T,M=1)=>{_(T,110,52,.18,.5*M),L(T,.006,.05*M,"highpass",3e3,.6)},U=(T,M=1)=>{_(T,1900,1750,.03,.05*M,"triangle"),L(T,.04,.09*M,"bandpass",2600,2.5)},z=(T,M=1)=>_(T,ot([820,1040,1240]),700,.05,.05*M,"sine",Ve(-.5,.5)),k=(T,M=1)=>L(T,.04,.025*M,"bandpass",7e3,1.4,.3),ie=[[600,1e3,2600],[400,1600,2500],[450,850,2550],[380,2e3,2700]],V=(T,M,C,P=.05)=>{let D=t.createOscillator(),J=t.createGain(),te=t.createGain(),q=ot(ie),ae=t.createBiquadFilter();D.type="sawtooth",D.frequency.value=Qe(T),e.vaiven.connect(D.detune),D.connect(J),q.forEach((Ae,Me)=>{let we=t.createBiquadFilter();we.type="bandpass",we.frequency.value=Ae,we.Q.value=[6,8,10][Me];let B=t.createGain();B.gain.value=[1,.45,.2][Me],J.connect(we),we.connect(B),B.connect(te)});let re=t.createBufferSource(),G=t.createBiquadFilter(),X=t.createGain();re.buffer=this.ruido,G.type="bandpass",G.frequency.value=q[1]*1.5,G.Q.value=1.2,X.gain.value=.6,re.connect(G),G.connect(X),X.connect(te),ae.type="lowpass",ae.frequency.value=3e3,te.connect(ae),te.gain.value=0,te.gain.setValueAtTime(0,M),te.gain.linearRampToValueAtTime(P,M+.12),te.gain.setValueAtTime(P,M+C*.65),te.gain.exponentialRampToValueAtTime(1e-4,M+C);let ve=r(ae,Ve(-.2,.2));ve.connect(e.fader),a(ve,this.sala,.8),a(ve,this.eco,.35),D.start(M),D.stop(M+C+.05),re.start(M,Math.random()*2),re.stop(M+C+.05)},Y=[0,2,5,3],ce=T=>[0,2,4,6].map(M=>this.nota(T+M,1)),le=[0,1,2,3,2,1],se=[1,.55,.8,.65,.9,.5,.75],W=[3,1,2],Z=[2,5,9,12,14],N=0,ee=0,O=[],H=0,$=[],F=()=>{let T=ot([2,4,5]);$=[0,3,6,10,16,19,22].filter(()=>Math.random()<.6).map(M=>(T=Math.max(0,Math.min(7,T+ot([-1,1,0,2,-2]))),[M,T]))};F(),this.secuenciador(e,i,(T,M)=>{let C=T%16,P=T%32;C===0&&(N=Math.floor(T/16)+1,H=Math.random(),((N-1)%2===0||e.primero)&&(ee=Y[((N-1)/2|0)%4],O=ce(ee),E([O[0],O[1],O[3]].map(te=>te-12),M,s*32)),N%8===1&&F());let D=(N-1)%32;if(O.length){let te=T%le.length,q=se[T%se.length]*Ve(.85,1.05);m(O[le[te]]+(le[te]===3&&T%12===9?12:0),M,.09*q,Ve(.8,1.3),q)}O.length&&Z.includes(C)&&N>2&&Math.random()<.75&&m(O[W[(T>>1)%W.length]]+12,M+s*.02,.05,1.6,.6),N>2&&((C===0||C===8&&H>.25||C===11&&H<.3)&&R(M,C===0?1:.85),(C===4||C===12)&&U(M,1),[3,6,10,14].includes(C)&&Math.random()<.7&&z(M,C===6||C===14?1:.7),C%2===1&&Math.random()<.5&&k(M,.6+Math.random()*.4),C===0&&S(this.nota(ee,-1),M,s*2.6),C===6&&S(this.nota(ee,-1),M,s*2.5),C===12&&S(this.nota(ee+(H>.5?4:2),-1),M,s*3,this.nota(ee,-1)));let J=$.find(([te])=>te===P);J&&N>4&&D%8>=4&&V(this.nota(J[1],1),M,s*Ve(3,6),.11)})}triphop(e){let t=this.ctx,i=80,s=60/i/4,a=.1;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let r=(F,T,M)=>{let C=t.createGain();return C.gain.value=M,F.connect(C),C.connect(T),e.salidas.push(C),e.nodos.push(C),C},o=(F,T)=>{let M=t.createStereoPanner();return M.pan.value=T,F.connect(M),M};e.vaiven=t.createGain();let c=t.createOscillator(),l=t.createGain();c.frequency.value=.33,l.gain.value=6,c.connect(l),l.connect(e.vaiven),c.start(),e.nodos.push(c,l,e.vaiven),this.fondo(e,.006,"highpass",5e3,.4);let u=()=>{let F=t.currentTime+.05;for(let T=0;T<5;T++)Math.random()<.6&&this.ruidoCorto(e,F+Math.random()*.6,Ve(.003,.01),Ve(.015,.05),"highpass",Ve(2e3,6e3));this.luego(e,.6,u)};u();let h=t.createWaveShaper(),d=new Float32Array(4096);for(let F=0;F<4096;F++){let T=F/2047.5-1;d[F]=Math.round(T*48)/48}h.curve=d;let f=t.createGain(),g=t.createBiquadFilter();f.gain.value=.6,g.type="lowpass",g.frequency.value=5200,f.connect(h),h.connect(g),g.connect(e.fader),r(g,this.cuarto,.45),e.nodos.push(h,f,g);let A=(F,T,M,C,P,D,J=0)=>{let te=t.createBufferSource(),q=t.createBiquadFilter(),ae=t.createGain();te.buffer=this.ruido,q.type=C,q.frequency.value=P,q.Q.value=D,ae.gain.setValueAtTime(M,F),ae.gain.exponentialRampToValueAtTime(1e-4,F+T),te.connect(q),q.connect(ae),(J?o(ae,J):ae).connect(f),te.start(F,Math.random()*2),te.stop(F+T+.05)},p=(F,T,M,C,P,D="sine")=>{let J=t.createOscillator(),te=t.createGain();J.type=D,J.frequency.setValueAtTime(T,F),J.frequency.exponentialRampToValueAtTime(M,F+C*.3),te.gain.setValueAtTime(P,F),te.gain.exponentialRampToValueAtTime(1e-4,F+C),J.connect(te),te.connect(f),J.start(F),J.stop(F+C+.02)},m=(F,T=1)=>{p(F,95,44,.45,.55*T),A(F,.012,.08*T,"lowpass",1200,.6)},y=(F,T=1)=>{p(F,190,150,.12,.14*T,"triangle"),A(F,.32,.22*T,"bandpass",1700,.7),A(F,.08,.07*T,"highpass",4500,.6)},E=(F,T=1,M=!1)=>A(F,M?.2:.05,.045*T,"highpass",7e3,.6,Ve(-.3,.3)),v=t.createWaveShaper(),S=new Float32Array(1024);for(let F=0;F<1024;F++){let T=F/511.5-1;S[F]=Math.tanh(1.6*T)/Math.tanh(1.6)}v.curve=S;let w=t.createBiquadFilter(),L=t.createGain();w.type="lowpass",w.frequency.value=380,L.gain.value=.1,v.connect(w),w.connect(L),L.connect(e.fader),e.nodos.push(v,w,L);let _=(F,T,M)=>{let C=t.createOscillator(),P=t.createOscillator(),D=t.createGain();P.type="triangle",C.frequency.value=Qe(F),P.frequency.value=Qe(F)*1.003,D.gain.value=0,D.gain.setValueAtTime(0,T),D.gain.linearRampToValueAtTime(.16,T+.04),D.gain.setValueAtTime(.16,T+M*.8),D.gain.linearRampToValueAtTime(1e-4,T+M),C.connect(D),P.connect(D),D.connect(v),[C,P].forEach(J=>{J.start(T),J.stop(T+M+.02)})},R=t.createBiquadFilter();R.type="lowpass",R.frequency.value=1800,R.Q.value=.5,R.connect(e.fader),r(R,this.sala,1),e.nodos.push(R);let U=(F,T,M,C=.011)=>F.forEach(P=>[-10,0,10].forEach(D=>{let J=t.createOscillator(),te=t.createGain(),q=t.createOscillator(),ae=t.createGain();J.type="sawtooth",J.frequency.value=Qe(P),J.detune.value=D+Ve(-3,3),q.frequency.value=Ve(4.8,5.6),ae.gain.value=9,q.connect(ae),ae.connect(J.detune),e.vaiven.connect(J.detune),this.env(te,T,2.4,C,Math.max(0,M-5),T+M+2.6),J.connect(te),o(te,D/14).connect(R),[J,q].forEach(re=>{re.start(T),re.stop(T+M+2.7)})})),z=t.createGain(),k=t.createOscillator(),ie=t.createOscillator(),V=t.createGain(),Y=t.createBiquadFilter();k.type="sine",Y.type="lowpass",Y.frequency.value=2400,ie.frequency.value=5.8,V.gain.value=22,ie.connect(V),V.connect(k.detune),k.frequency.value=Qe(this.nota(4,1)),z.gain.value=0,k.connect(Y),Y.connect(z);let ce=o(z,.2);ce.connect(e.fader),r(ce,this.sala,.9),r(ce,this.eco,.35),k.start(),ie.start(),e.nodos.push(z,k,ie,V,Y);let le=(F,T,M,C=.035)=>{k.frequency.setTargetAtTime(Qe(F),T,.07),z.gain.setTargetAtTime(C,T,.06),z.gain.setTargetAtTime(1e-4,T+M,.18)},se=(F,T,M=.08)=>{let C=t.createGain();C.gain.value=0,[[1,1,"triangle"],[2,.4,"square"],[3,.12,"sine"]].forEach(([J,te,q])=>{let ae=t.createOscillator(),re=t.createGain();ae.type=q,ae.frequency.value=Qe(F)*J,re.gain.value=te,ae.connect(re),re.connect(C),ae.start(T),ae.stop(T+1.3)}),C.gain.setValueAtTime(M,T),C.gain.exponentialRampToValueAtTime(1e-4,T+1.2);let P=t.createBiquadFilter();P.type="lowpass",P.frequency.value=3e3,C.connect(P);let D=o(P,-.3);D.connect(e.fader),r(D,this.sala,.5),r(D,this.eco,.2)},W=(F,T=3)=>{for(let M=0;M<T;M++){let C=F+M*s*.5,P=t.createBufferSource(),D=t.createBiquadFilter(),J=t.createGain();P.buffer=this.ruido,D.type="bandpass",D.Q.value=6,D.frequency.setValueAtTime(400,C),D.frequency.exponentialRampToValueAtTime(M%2?500:2600,C+s*.22),D.frequency.exponentialRampToValueAtTime(300,C+s*.45),J.gain.setValueAtTime(1e-4,C),J.gain.linearRampToValueAtTime(.16,C+.01),J.gain.exponentialRampToValueAtTime(1e-4,C+s*.45),P.connect(D),D.connect(J),o(J,.35).connect(f),P.start(C,Math.random()*2),P.stop(C+s*.5)}},Z=[0,5,3,4],N=0,ee=0,O=0,H=[],$=()=>{let F=ot([4,6,7]);H=[0,6,10,16,22,26].filter(()=>Math.random()<.7).map(T=>(F=Math.max(2,Math.min(9,F+ot([-2,-1,1,2,0]))),[T,F,ot([4,6,8])]))};$(),this.secuenciador(e,i,(F,T)=>{let M=F%16,C=F%32,P=T+(M%2?s*a:0);M===0&&(N=Math.floor(F/16)+1,O=Math.random(),((N-1)%2===0||e.primero)&&(ee=Z[((N-1)/2|0)%4],U([this.nota(ee,0),this.nota(ee+2,0),this.nota(ee+4,0),this.nota(ee,1)],T,s*32)),N%4===1&&$());let D=(N-1)%32,J=N<=2,te=D>=20&&D<22;!J&&!te&&((M===0||M===7||M===10&&O>.3||M===15&&O<.2)&&m(P,M===0?1:.85),(M===4||M===12)&&y(P+.008),(M===9||M===14)&&Math.random()<.25&&y(P,.25),M%2===0&&E(P,M%4===2?.9:.55,M===14&&O>.6),M===0&&_(this.nota(ee,-1),T,s*7),M===8&&_(this.nota(ee+(O>.5?4:0),-1),T,s*6)),N%8===0&&M===12&&!J&&W(P,3);let ae=H.find(([re])=>re===C);ae&&N>4&&D%8>=4&&le(this.nota(ae[1],1),P,ae[2]*s),N>2&&D%8<4&&(M===2||M===6||M===11)&&Math.random()<.55&&se(this.nota(ee+ot([0,2,4,7]),1),P)})}arrancar(){if(this.canal<0){this.gen=null,window.__finoActivo||this.estatica(2.4,.03),this.cat&&this.cat.empieza();return}this.amb=this.canal;let e=mr[this.canal][3],t=this.nuevaGen(e);this.gen=t,this[e](t)}estatica(e,t){let i=this.ctx;if(!i||!this.on)return;let s=i.currentTime,a=i.createBufferSource(),r=i.createBiquadFilter(),o=i.createGain();a.buffer=this.ruido,a.loop=!0,a.playbackRate.value=.85+Math.random()*.3,r.type="bandpass",r.frequency.setValueAtTime(900+Math.random()*1400,s),r.frequency.linearRampToValueAtTime(1400+Math.random()*1800,s+e),r.Q.value=.9,o.gain.setValueAtTime(0,s),o.gain.linearRampToValueAtTime(t,s+Math.min(.3,e/4)),o.gain.setValueAtTime(t,s+e*.55),o.gain.linearRampToValueAtTime(0,s+e),a.connect(r),r.connect(o),o.connect(this.master),a.start(s,Math.random()*2),a.stop(s+e+.05),a.onended=()=>{try{a.disconnect(),r.disconnect(),o.disconnect()}catch{}}}desbloquear(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}if(!this.mudo){let t=this.mudo=new Audio("data:audio/wav;base64,UklGRvQHAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YdAHAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==");t.loop=!0,t.setAttribute("playsinline",""),t.preload="auto"}let e=this.mudo.play();e&&e.catch(()=>{})}async encender(){this.desbloquear(),this.ctx||this.init();let e=this.ctx.resume();if(this.on){await e;return}this.on=!0,this.arrancar(),await e;let t=this.master.gain,i=this.ctx.currentTime;t.cancelScheduledValues(i),t.setValueAtTime(t.value,i),t.linearRampToValueAtTime(.9,i+4)}apagar(){if(!this.ctx)return;this.on=!1,this.matarGen(this.gen,1.2),this.gen=null,this.cat&&this.cat.para(1.2),this.estFino.gain.setTargetAtTime(0,this.ctx.currentTime,.2),this.txG.gain.setTargetAtTime(0,this.ctx.currentTime,.2),this.txEl&&setTimeout(()=>{this.on||this.txEl.pause()},1200),this.mudo&&setTimeout(()=>{this.on||this.mudo.pause()},1500);let e=this.master.gain,t=this.ctx.currentTime;e.cancelScheduledValues(t),e.setValueAtTime(e.value,t),e.linearRampToValueAtTime(0,t+1.4)}sintonizar(e,t){let i=this.canal;this.canal=((e+1)%13+13)%13-1,Vi&&this.canal<0&&(this.canal=i===0?11:0),this.on&&(this.matarGen(this.gen,2.5),this.gen=null,this.cat&&this.canal>=0&&this.cat.para(2.5),t||this.estatica(1.8,.03),this.arrancar())}nivel(){if(!this.ctx||!this.on)return 0;this.analyser.getFloatTimeDomainData(this.buf);let e=0;for(let t of this.buf)e+=t*t;return Math.sqrt(e/this.buf.length)+(this.canal<0&&this.cat?this.cat.nivel():0)}},Be=new bu;window.__radio=Be;var Du=()=>{Be.on&&Be.ctx&&Be.ctx.state!=="running"&&(Be.desbloquear(),Be.ctx.resume().catch(()=>{}))};addEventListener("pointerdown",Du,!0);addEventListener("touchend",Du,!0);document.addEventListener("visibilitychange",()=>{document.hidden||Du()});var fe=n=>document.getElementById(n),zf=fe("vu");for(let n=0;n<24;n++)zf.appendChild(document.createElement("i"));var bt=fe("casillas"),rs=matchMedia("(max-width:820px)");{let n=document.querySelector(".pletina"),e=fe("bAbre"),t=document.querySelector(".barra");e.onclick=()=>{let s=!n.classList.contains("abierta");n.classList.toggle("abierta",s),e.setAttribute("aria-expanded",s),e.setAttribute("aria-label",s?"Plegar la radio":"Desplegar la radio")};let i=0;addEventListener("scroll",()=>{if(!rs.matches)return;let s=scrollY;Math.abs(s-i)<6||(t.classList.toggle("oculta",s>80&&s>i),i=s)},{passive:!0})}{let n=document.querySelector(".pletina"),e=matchMedia("(max-width:820px)"),t=()=>{let i=n.getBoundingClientRect().width,s=e.matches;n.classList.toggle("p-m",!s&&i<1e3),n.classList.toggle("p-s",!s&&i<760)};new ResizeObserver(t).observe(n),e.addEventListener("change",t),t()}{let n=document.createElement("button");n.id="canal0",n.className="c00",n.title="aurality \xB7 fragmentos del cat\xE1logo",n.setAttribute("aria-label","Canal 00, aurality, fragmentos del cat\xE1logo"),n.onclick=()=>ki(-1),Vi&&(n.disabled=!0,n.style.visibility="hidden",n.setAttribute("aria-hidden","true")),bt.appendChild(n)}mr.forEach(([n,,,e],t)=>{let i=document.createElement("button");i.id="canal"+(t+1),i.title=n+" \xB7 "+Cc[e],i.setAttribute("aria-label","Canal "+String(t+1).padStart(2,"0")+", "+n+", "+Cc[e]),i.onclick=()=>ki(t),bt.appendChild(i)});function $x(){if("mediaSession"in navigator)try{let n=Be.canal,e=n<0?"CANAL 00 \xB7 aurality":`CANAL ${String(n+1).padStart(2,"0")} \xB7 ${mr[n][0]}`;navigator.mediaSession.metadata=new MediaMetadata({title:e,artist:"aurality \xB7 radio AU-00",album:"Broadcasted from Elda",artwork:[{src:"/apple-touch-icon.png",sizes:"180x180",type:"image/png"},{src:"/icono-512.png",sizes:"512x512",type:"image/png"}]}),navigator.mediaSession.playbackState=Be.on?"playing":"paused"}catch{}}if("mediaSession"in navigator)try{navigator.mediaSession.setActionHandler("play",()=>{Be.on||gr()}),navigator.mediaSession.setActionHandler("pause",()=>{Be.on&&gr()}),navigator.mediaSession.setActionHandler("nexttrack",()=>fe("bNext").click()),navigator.mediaSession.setActionHandler("previoustrack",()=>fe("bPrev").click())}catch{}function wt(){if($x(),bt.querySelectorAll("button").forEach((a,r)=>a.setAttribute("aria-pressed",r-1===Be.canal?"true":"false")),window.__fino&&window.__fino.pinta())return;if(Be.canal<0){fe("canalK").textContent="Radio \xB7 cat\xE1logo",fe("canalNom").textContent="CANAL 00 \xB7 aurality",fe("canalNum").textContent="00 / 12",fe("canalSub").innerHTML=Be.cat?Be.cat.rotulo():"Fragmentos del cat\xE1logo";return}fe("canalK").textContent="Radio ambient \xB7 en directo";let[n,e,t,i]=mr[Be.canal],s=String(Be.canal+1).padStart(2,"0");fe("canalNom").textContent="CANAL "+s+" \xB7 "+n,fe("canalNum").textContent=s+" / 12",fe("canalSub").textContent=Cc[i].charAt(0).toUpperCase()+Cc[i].slice(1)+" \xB7 "+xf[e%12].charAt(0)+xf[e%12].slice(1).toLowerCase()+" "+Hx[t]+" \xB7 en directo"}function Qn(){let n=Be.on;fe("bPlay").setAttribute("aria-pressed",n),fe("bPlay").setAttribute("aria-label",n?"Pausar":"Reproducir"),fe("icoPlay").innerHTML=n?'<path d="M3 2h3.5v12H3zM9.5 2H13v12H9.5z"/>':'<path d="M3 1.5v13L14.5 8z"/>',fe("led").classList.toggle("on",n),Tu(),fe("estadoTxt").textContent=n?"En directo":Fi?"En pausa":"En espera"}var Fi=!1,na=0;async function gr(){Be.on?Be.apagar():await Be.encender(),Qn(),wt()}var Dc=n=>n<0?-Math.PI/12:-(n+1)*Math.PI/6;function ki(n){Be.sintonizar(n),wt(),na=1,us=Dc(Be.canal);try{localStorage.setItem("au-canal",Be.canal)}catch{}}var ia=fe("escalaDial"),_f=fe("escAguja"),Xx=fe("escLect");fe("escMarcas").innerHTML=Array.from({length:121},(n,e)=>`<i class="${e%10?e%5?"":"m":"c"}" style="left:${(e/120*100).toFixed(3)}%"></i>${e%10?"":`<b style="left:${(e/120*100).toFixed(3)}%">${String(e/10).padStart(2,"0")}</b>`}`).join("");var yu=n=>{if(n){let e=document.querySelector(".pletina").getBoundingClientRect(),t=innerWidth<821?10:20,i=document.querySelector(".pletina");Object.assign(ia.style,{left:e.left+t+"px",width:e.width-2*t+"px",bottom:`calc(${getComputedStyle(i).bottom} + ${i.offsetHeight+10}px)`,top:"auto"})}else ia.classList.remove("desliza"),os.style.left=os.style.width="";ia.classList.toggle("on",n)},Rc=64,os=fe("escMarcas"),Uu=Vi?1:0;var Vf=n=>{if(ia.classList.contains("desliza")){let e=ia.clientWidth/2;os.style.width=12*Rc+"px",os.style.left=e-n*Rc+"px",_f.style.left=e+"px"}else _f.style.left=os.offsetLeft+n/12*os.offsetWidth+"px";Xx.textContent=n.toFixed(1).padStart(4,"0")},Ou=[],xn=null,Uc=document.createElement("i");Uc.className="aguja";Uc.setAttribute("aria-hidden","true");bt.appendChild(Uc);var kf=()=>[...bt.querySelectorAll("button")].map(n=>n.offsetLeft+n.offsetWidth/2);var Yx=n=>{let e=kf(),t=Math.max(0,Math.min(11,Math.floor(n)));return e[t]+(e[t+1]-e[t])*(n-t)};async function Gf(){if(aa)try{let n=await fetch("/tx/activas",{cache:"no-store"});n.ok&&(Ou=await n.json())}catch{}}var yf=n=>{let e=Math.round(n),t=Math.abs(n-e),i=null,s=9;return Ou.forEach(a=>{let r=Math.abs(n-a.f);r<s&&(s=r,i=a)}),{f:n,n:e,dC:t,tx:s<.45?i:null,dT:s,fijado:s<=.06,cerca:s<.45&&s>.06}},vr=null;function ln(n,e){if(n==null){clearTimeout(ln.t),xn=null,bt.classList.remove("fino"),vr=null,Be.ajustaFino({f:Be.canal+1,senal:1,ruido:0,tx:null}),Tu(),wt();return}n=Math.round(Math.max(Uu,Math.min(12,n))*100)/100;let t=yf(n);if(e){if(clearTimeout(ln.t),t.tx&&t.dT<=.12)n=t.tx.f;else if(t.dC<=.12){ln(null),t.n-1!==Be.canal&&ki(t.n-1);return}t=yf(n)}xn=n,bt.classList.add("fino"),Uc.style.left=Yx(n)+"px",Vf(n),clearTimeout(ln.t);let i=t.dC<=.12&&t.n-1!==Be.canal&&!t.tx;i&&(ln.t=setTimeout(()=>{xn!=null&&Math.abs(xn-t.n)<=.12&&(window.__finoActivo=!0,Be.sintonizar(t.n-1,!0),window.__finoActivo=!1,us=Dc(Be.canal),na=.6,ln(xn))},300));let s=i?0:t.dC<=.12?1-t.dC*2.5:Math.max(0,1-(t.dC-.12)/.22),a=t.tx?1-t.dT/.45:0;vr=t,Be.ajustaFino({f:n,senal:s*(1-a),ruido:t.fijado?0:Math.min(.036,(1-s)*.032+a*.012+.003),tx:t.tx,txNivel:t.fijado?.3:Math.pow(a,1.6)*.2,claro:t.fijado}),Tu(),wt(),t.fijado&&e&&Zx(t.tx)}function Tu(){let n=xn==null?null:vr,e=Be.on&&(!n||n.dC<=.12||n.cerca||n.fijado);["tAzul","tAzulM"].forEach(t=>{let i=fe(t);i.classList.toggle("on",e),i.classList.toggle("cerca",!!(Be.on&&n&&n.cerca)),i.classList.toggle("fijo",!!(Be.on&&n&&n.fijado))})}window.__fino={pinta(){if(xn==null||!vr)return!1;let n=vr,e=xn.toFixed(1).padStart(4,"0");return fe("canalNum").textContent=e,fe("canalK").textContent="Sinton\xEDa fina",n.dC<=.12&&!n.tx&&n.n-1===Be.canal?!1:n.dC<=.12&&!n.tx?(fe("canalNom").textContent="SINTONIZANDO \xB7 "+En(n.n),fe("canalSub").textContent="Canal "+En(n.n)+" \xB7 "+e,!0):(fe("canalNom").textContent=n.fijado?`${n.tx.id} \xB7 TRANSMISI\xD3N`:n.cerca?"SE\xD1AL D\xC9BIL\u2026":"SIN SE\xD1AL",fe("canalSub").innerHTML=n.fijado?`Frecuencia ${e} \xB7 <a href="#registro">registro de escucha</a>`:`Entre canales \xB7 ${e}`,!0)}};{let n=0,e=0,t=!1,i=!1,s=Rc,a=o=>Math.max(Uu,Math.min(12,e+(o.clientX-n)/s));bt.addEventListener("pointerdown",o=>{if(!(o.pointerType==="mouse"&&o.button!==0)){n=o.clientX,e=xn??Be.canal+1,i=o.pointerType!=="touch",t=!1;try{bt.setPointerCapture(o.pointerId)}catch{}!Be.on&&Fi&&gr(),Be.txPrepara()}}),bt.addEventListener("pointermove",o=>{!bt.hasPointerCapture||!bt.hasPointerCapture(o.pointerId)||!t&&Math.abs(o.clientX-n)<(i?10:6)||(t||(n=o.clientX,yu(!0),ia.classList.toggle("desliza",!i),s=i?os.getBoundingClientRect().width/12:Rc,Vf(e)),t=!0,o.preventDefault(),ln(a(o)))});let r=o=>{let c=o.clientX-bt.getBoundingClientRect().left;if(t)ln(a(o),!0);else{let l=kf(),u=l.reduce((h,d,f)=>Math.abs(d-c)<Math.abs(l[h]-c)?f:h,0);ln(null),ki(u-1)}bt.dataset.arr="1",setTimeout(()=>delete bt.dataset.arr,0),t=!1,yu(!1)};bt.addEventListener("pointerup",r),bt.addEventListener("pointercancel",()=>{t=!1,yu(!1)}),bt.addEventListener("click",o=>{bt.dataset.arr?(o.stopPropagation(),o.preventDefault()):o.target.closest("button")&&ln(null)},!0),bt.addEventListener("keydown",o=>{if(o.key!=="ArrowLeft"&&o.key!=="ArrowRight")return;o.preventDefault();let c=(xn??Be.canal+1)+(o.key==="ArrowRight"?.1:-.1);clearTimeout(bt.tk),ln(c),bt.tk=setTimeout(()=>ln(xn,!0),700)})}var Hf="au-registro",Eu=()=>{try{return JSON.parse(localStorage.getItem(Hf)||"[]")}catch{return[]}};async function Zx(n){let e=Eu().find(s=>s.id===n.id);if(e){wu(e,!0);return}let t={id:n.id,f:n.f,texto:""};try{let s=await fetch("/tx/i/"+encodeURIComponent(n.id),{cache:"no-store"});s.ok&&(t=await s.json())}catch{}let i={id:t.id,f:t.f,texto:t.texto||"",t:Date.now()};try{localStorage.setItem(Hf,JSON.stringify([i,...Eu()]))}catch{}wu(i,!1)}var Fu=n=>{let e=new Date(n);return[En(e.getDate())+"."+En(e.getMonth()+1)+"."+String(e.getFullYear()).slice(-2),En(e.getHours())+":"+En(e.getMinutes())]};function wu(n,e){let[t,i]=Fu(n.t),s=document.createElement("div");s.className="qsl-velo",s.innerHTML=`<div class="qsl" role="dialog" aria-modal="true" aria-label="Tarjeta de escucha ${me(n.id)}">
    <div class="k"><span>Tarjeta de escucha \xB7 AU-00</span><span>${me(n.id)}</span></div>
    <div class="fq">${n.f.toFixed(1).padStart(4,"0")}<small>DIAL</small></div>
    <div class="cap">${e?"YA LA TEN\xCDAS":"TRANSMISI\xD3N CAPTADA"}</div>
    <div class="dat"><span><b>FECHA</b>${t}</span><span><b>HORA</b>${i}</span><span><b>DESDE</b>Elda \xB7 38.48\xB0N</span></div>
    ${n.texto?`<p>${me(n.texto)}</p>`:""}
    <div class="acciones"><button class="tecla oscura" type="button" data-a="guarda">Guardar tarjeta</button><a class="tecla" href="#registro" data-a="reg">Registro</a><button class="tecla" type="button" data-a="cierra">Seguir escuchando</button></div></div>`,document.body.appendChild(s);let a=()=>s.remove();s.addEventListener("click",r=>{let o=r.target.closest("[data-a]");(r.target===s||o&&o.dataset.a!=="guarda")&&a(),o&&o.dataset.a==="guarda"&&Jx(n)}),s.addEventListener("keydown",r=>{r.key==="Escape"&&a()}),s.querySelector('[data-a="cierra"]').focus()}function Jx(n){let i=document.createElement("canvas");i.width=1200,i.height=750;let s=i.getContext("2d"),[a,r]=Fu(n.t),o="JetBrains Mono, monospace",c=34;s.fillStyle="#9DAFC5",s.fillRect(0,0,1200,750),s.beginPath(),[[c,0],[1200-c,0],[1200,c],[1200,750-c],[1200-c,750],[c,750],[0,750-c],[0,c]].forEach(([u,h],d)=>d?s.lineTo(u,h):s.moveTo(u,h)),s.closePath();let l=s.createLinearGradient(0,0,0,750);if(l.addColorStop(0,"#f0efea"),l.addColorStop(1,"#dad8d1"),s.fillStyle=l,s.fill(),s.fillStyle="#4a5060",s.font=`700 22px ${o}`,s.fillText("TARJETA DE ESCUCHA \xB7 AU-00 \xB7 RECEPTOR",70,96),s.textAlign="right",s.fillText(n.id,1130,96),s.textAlign="left",s.fillStyle="#0E0F12",s.font=`800 230px ${o}`,s.fillText(n.f.toFixed(1).padStart(4,"0"),62,330),s.fillStyle="#D62C2C",s.fillRect(70,372,64,8),s.fillStyle="#0E0F12",s.font=`800 40px ${o}`,s.fillText("TRANSMISI\xD3N CAPTADA",70,450),s.fillStyle="#3b4150",s.font=`500 26px ${o}`,s.fillText(`${a}  \xB7  ${r}  \xB7  ELDA 38.48\xB0N 0.79\xB0O`,70,500),n.texto){s.font=`500 25px ${o}`;let u="",h=570;n.texto.split(" ").forEach(d=>{s.measureText(u+d).width>1060&&(s.fillText(u,70,h),u="",h+=36),u+=d+" "}),h<680&&s.fillText(u,70,h)}s.fillStyle="#6F6D68",s.font=`700 20px ${o}`,s.textAlign="right",s.fillText("aurality \xB7 frecuencias ocultas",1130,694),i.toBlob(async u=>{let h=`aurality-${n.id.toLowerCase()}-${n.f.toFixed(1)}.png`,d=new File([u],h,{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[d]})){await navigator.share({files:[d],title:"aurality \xB7 "+n.id});return}}catch(g){if(g&&g.name==="AbortError")return}let f=document.createElement("a");f.href=URL.createObjectURL(u),f.download=h,document.body.appendChild(f),f.click(),setTimeout(()=>{URL.revokeObjectURL(f.href),f.remove()},1e3)},"image/png")}function Wf(n){n===void 0&&(n=[],aa&&fetch("/tx/registro",{cache:"no-store"}).then(r=>r.ok?r.json():[]).then(r=>{tt==="registro"&&r.length&&Wf(r)}).catch(()=>{}));let e=fe("panel"),t=Eu(),i=n.filter(r=>!t.some(o=>o.id===r.id)),s=new Set([...t.map(r=>r.id),...n.map(r=>r.id)]).size,a=r=>r?r.slice(8,10)+"."+r.slice(5,7):"";e.innerHTML=`<header class="panel-cab"><div><h2>REGISTRO DE ESCUCHA</h2><div class="sub">Frecuencias ocultas \xB7 ${t.length} de ${s} transmisiones captadas en este aparato</div></div></header>
    <div class="panel-cuerpo"><div class="registro">
      ${t.length?t.map(r=>{let[o,c]=Fu(r.t);return`<div class="ent"><span class="fq">${r.f.toFixed(1).padStart(4,"0")}</span><span class="id">${me(r.id)} \xB7 CAPTADA EL ${o} A LAS ${c}</span><button class="tecla" type="button" data-id="${me(r.id)}">Tarjeta</button><span class="tx">${me(r.texto||"")}</span></div>`}).join(""):'<p class="bio">Todav\xEDa no has captado ninguna transmisi\xF3n. Hay se\xF1ales escondidas entre los canales: arrastra sobre las casillas de la pletina para sintonizar fino y vigila el piloto azul.</p>'}
      ${i.length?`<div class="sub2">SE TE ESCAPARON</div>${i.map(r=>`<div class="ent perdida"><span class="fq">${r.f.toFixed(1).padStart(4,"0")}</span><span class="id">${me(r.id)} \xB7 EMITIDA DEL ${a(r.desde)} AL ${a(r.hasta)}${r.noche?" \xB7 SOLO DE NOCHE":""}</span><span></span><span class="tx">No volver\xE1 a emitirse.</span></div>`).join("")}`:""}
    </div></div>`,e.querySelectorAll("[data-id]").forEach(r=>r.onclick=()=>wu(t.find(o=>o.id===r.dataset.id),!0))}fe("bPlay").onclick=gr;fe("bPrev").onclick=()=>{ln(null),ki(Be.canal-1)};fe("bNext").onclick=()=>{ln(null),ki(Be.canal+1)};async function Oc(n){Fi=!0,fe("encendido").classList.add("fuera"),up=performance.now(),n&&await Be.encender(),Qn()}fe("bOn").onclick=()=>Oc(!0);fe("bMudo").onclick=()=>Oc(!1);wt();Qn();var qf=()=>{fe("hora").textContent=new Intl.DateTimeFormat("es-ES",{hour:"2-digit",minute:"2-digit",timeZone:"Europe/Madrid"}).format(new Date)+" CET"};qf();setInterval(qf,15e3);function Fc(){let n=document.querySelector('.placa[aria-current="page"]');if(!n)return;let e=fe("punta");e.style.top=`calc(${parseFloat(n.style.top)+8.673/2}% - ${e.offsetHeight/2}px)`}var Vt=await(async()=>{let n={...pf,...mf,...gf,...vf},e=async a=>{try{let r=await fetch("contenido/"+a,{cache:"no-store"});if(r.ok)return await r.json()}catch{}return null},t=await Promise.all(["lanzamientos.json","artistas.json","senal.json","textos.json"].map(e)),i=Object.assign({},n,...t.filter(Boolean));Array.isArray(i.artists)&&(i.artists=Object.fromEntries(i.artists.filter(a=>a&&a.name).map(({name:a,...r})=>[a.trim().toUpperCase(),r]))),i.releases=(i.releases||[]).filter(a=>a&&a.code&&a.artist).map(a=>({...a,artist:a.artist.trim().toUpperCase(),title:a.title||"[ S/T ]",destacado:a.destacado===!0||a.destacado==="true",edicion:a.edicion===!0||a.edicion==="true",historia:String(a.historia||"").trim(),video:String(a.video||"").trim(),fotos:(a.fotos||[]).map(r=>typeof r=="string"?{img:r,pie:""}:{img:r&&(r.imagen||r.img)||"",pie:r&&r.pie||""}).filter(r=>r.img),fecha:/^\d{4}-\d{2}-\d{2}/.test(String(a.fecha||""))?String(a.fecha).slice(0,10):"",presave:a.presave||"",fragmentos:(a.fragmentos||[]).map(r=>typeof r=="string"?r:r&&(r.archivo||r.file)).filter(Boolean),format:(a.format||"SINGLE").toUpperCase(),genre:(a.genre||"\u2014").toUpperCase().trim(),cover:a.cover||"",soundcloud:a.soundcloud||"",audio:a.audio?"/"+String(typeof a.audio=="string"?a.audio:a.audio.archivo||a.audio.file||"").replace(/^\/+/,""):"",spotify:a.spotify||"",bandcamp:a.bandcamp||"",year:+a.year||a.year||"",credits:(a.credits||[]).map(r=>Array.isArray(r)?r:[r.rol||"",r.nombre||""]).filter(([r])=>r),tracks:(a.tracks||[]).map(r=>typeof r=="string"?r:r&&r.titulo||"").filter(Boolean),participantes:(a.participantes||[]).map(r=>Array.isArray(r)?r:[r&&r.artista||"",r&&r.rol||""]).map(([r,o])=>[String(r).trim().toUpperCase(),String(o||"").trim()]).filter(([r])=>r)})).sort((a,r)=>r.code.localeCompare(a.code,"es",{numeric:!0})),i.senal=(i.senal||[]).filter(a=>a&&a.mes&&a.anio).map(a=>({...a,mes:+a.mes,anio:+a.anio,temas:+a.temas||null,code:a.code||String(a.mes).padStart(2,"0")+"_"+String(a.anio).slice(-2),destacados:(a.destacados||[]).map(r=>Array.isArray(r)?r:[r.artista||"",r.tema||"",r.prod||""]).filter(([r])=>r)}));let s=a=>a.fecha&&new Date(a.fecha+"T00:00:00")>Date.now();return i.proximos=i.releases.filter(s).sort((a,r)=>a.fecha.localeCompare(r.fecha)),i.releases=i.releases.filter(a=>!s(a)),i})(),aa=window.AU_DEPLOY===!0,et=Vt.releases,jx=["SINGLE","EP","REMIXES","\xC1LBUM","EDIT"],di=n=>[...new Set(n)],Bc=n=>n.artist.split(/\s+[×x]\s+/i).map(e=>e.trim()),$f=Object.keys(Vt.artists||{}).length?new Set(Object.keys(Vt.artists)):new Set(et.flatMap(Bc)),zc=n=>$f.has(n),Ic=n=>Bc(n).filter(zc),ra=n=>(n.participantes||[]).filter(([e])=>zc(e)),sa=n=>!n.edicion&&!Ic(n).length&&ra(n).length>0,Vc=n=>di([...Ic(n),...ra(n).map(([e])=>e)]),Xf=[...$f].filter(n=>et.some(e=>Vc(e).includes(n))),Kx=et.some(sa),Qx=et.some(n=>n.edicion),xr=[["art","Cat\xE1logo de artistas"],...Kx?[["part","Participaciones"]]:[],...Qx?[["ed","Ediciones del sello"]]:[]],Yf=n=>sa(n)?"part":n.edicion?"ed":"art",cs=new Set(xr.map(([n])=>n)),Kn=new Set,gn=new Set,zi=di(et.map(n=>n.genre)).sort(),ls=[{k:"format",lbl:"FORMATO",ops:["TODOS",...jx.filter(n=>et.some(e=>e.format===n))]},{k:"year",lbl:"A\xD1O",ops:["TODOS",...di(et.map(n=>n.year)).sort((n,e)=>e-n).map(String)]}],Pc=(()=>{try{return localStorage.getItem("au-orden")||"recientes"}catch{return"recientes"}})(),bc=n=>n.fecha?Date.parse(n.fecha):Date.UTC(+n.year||0,0,1),Af={recientes:(n,e)=>bc(e)-bc(n)||e.code.localeCompare(n.code,"es",{numeric:!0}),antiguos:(n,e)=>bc(n)-bc(e)||n.code.localeCompare(e.code,"es",{numeric:!0}),az:(n,e)=>kt(n).replace(/^[^\p{L}\p{N}]+/u,"").localeCompare(kt(e).replace(/^[^\p{L}\p{N}]+/u,""),"es",{sensitivity:"base",numeric:!0})},kc=(n,e)=>(e==="tipo"||cs.has(Yf(n)))&&(e==="art"||!Kn.size||Vc(n).some(t=>Kn.has(t)))&&(e==="gen"||!gn.size||gn.has(n.genre))&&ls.every((t,i)=>vn[i]===0||String(n[t.k])===t.ops[vn[i]]),Gc=()=>{vn.fill(0),Kn.clear(),gn.clear(),xr.forEach(([n])=>cs.add(n))},vn=ls.map(()=>0),Bi="rejilla";try{Bi=localStorage.getItem("au-vista")||"rejilla"}catch{}fe("nRefs").textContent=et.length+" referencias";var me=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),e_=n=>!n||/POR DEFINIR/i.test(n)||/S\/T/.test(n),t_=[320,640,1280],Cu=(n,e)=>{let t=/^\/?(covers|senal)\/([^/?#\s,]+)$/.exec(n||"");return t?`/${t[1]}/v/${encodeURI(t[2])}-${e}.webp`:""},yr=(n,e)=>Cu(n,320)?` srcset="${t_.map(t=>me(Cu(n,t))+" "+t+"w").join(", ")}" sizes="${e}" onerror="this.onerror=null;this.removeAttribute('srcset');this.removeAttribute('sizes')"`:"",n_="(max-width:599px) 46vw, (max-width:820px) 31vw, 190px",Bu="(max-width:599px) 92vw, (max-width:820px) 40vw, 480px",Zf=(n,e,t=n_)=>n.cover?`<img class="${e}" src="${me(n.cover)}"${yr(n.cover,t)} alt="Portada de ${me(n.title)}" loading="lazy" decoding="async">`:`<div class="${e} sinp" role="img" aria-label="Sin portada todav\xEDa"><b>${n.code}</b><span>SIN PORTADA</span></div>`,kt=n=>/S\/T/.test(n.title)?"Sin t\xEDtulo":n.title,Jf=n=>ra(n).map(([e,t])=>`<span class="part"><i aria-hidden="true"></i><span>${me(e)}${t?" \xB7 "+me(t):""}</span></span>`).join("");function jf(){return et.filter(n=>kc(n,null))}var Kf=()=>{};function Jn(){if(document.querySelectorAll(".selector").forEach(o_),document.querySelectorAll(".llave").forEach(n=>{let e=n.dataset.t?cs.has(n.dataset.t):Kn.has(n.dataset.a);n.setAttribute("aria-pressed",e);let t=et.filter(i=>kc(i,n.dataset.t?"tipo":"art")&&(n.dataset.t?Yf(i)===n.dataset.t:Vc(i).includes(n.dataset.a))).length;n.querySelector(".n").textContent=t,n.classList.toggle("cero",!t)}),document.querySelectorAll(".orden button").forEach(n=>n.setAttribute("aria-pressed",n.dataset.o===Pc)),fe("nFil")){let n=(cs.size<xr.length?1:0)+Kn.size+gn.size+vn.filter(Boolean).length;fe("nFil").textContent=n?"\xB7 "+n:"",fe("bLimpia").hidden=!n}document.querySelectorAll(".riel").forEach(n=>{let e=+n.dataset.i,t=n.querySelectorAll("button");t.forEach((s,a)=>s.setAttribute("aria-pressed",a===vn[e]));let i=t[vn[e]];n.querySelector(".cursor").style.left=i.offsetLeft+i.offsetWidth/2+"px"}),Qf()}function Qf(){let n=gn.size?zi.indexOf([...gn][0])+1:0;Kf([...["format","year"].map(e=>{let t=ls.findIndex(i=>i.k===e);return ls[t].ops.length>1?vn[t]/(ls[t].ops.length-1):0}),zi.length?n/zi.length:0])}var ep=n=>`<a class="ref" href="#${n.code}" data-c="${n.code}">${Zf(n,"portada")}${sa(n)?'<span class="marca">PARTICIPACI\xD3N</span>':n.edicion?'<span class="marca sello">EDICI\xD3N DEL SELLO</span>':""}
      <span class="c">${n.code} \xB7 ${me(n.format)} \xB7 ${n.year}</span><span class="a">${me(n.artist)}</span><span class="t">${me(kt(n))}</span>${Jf(n)}</a>`,i_=n=>`<a class="fila" href="#${n.code}" data-c="${n.code}"><span class="x">${n.code}</span><span class="a">${me(n.artist)}${sa(n)?"<small>PART.</small>":n.edicion?"<small>SELLO</small>":""}</span><span class="t">${me(kt(n))}</span><span class="f x">${me(n.format)}</span><span class="g x">${me(n.genre)}</span><span class="y x">${n.year}</span><span aria-hidden="true">\u2192</span></a>`,hs=matchMedia("(prefers-reduced-motion: reduce)"),Ru=null;function jn(){s_(),fi&&fi.mide()}function s_(){let n=jf(),e=new Set(n.map(u=>u.code)),t=fe("resultados");fe("conteo").textContent=`Mostrando ${n.length} de ${et.length}`;let i=new Map([...et].sort(Af[Pc]||Af.recientes).map((u,h)=>[u.code,h])),s=()=>t.querySelectorAll("[data-c]").forEach(u=>{u.style.order=i.get(u.dataset.c)}),a=Bi==="rejilla"?".ref":".fila[data-c]";if(Ru!==Bi||!t.querySelector(a)){t.innerHTML=(Bi==="rejilla"?`<div class="rejilla">${et.map(ep).join("")}</div>`:`<div class="lista"><div class="fila cab" aria-hidden="true"><span>C\xD3DIGO</span><span>ARTISTA</span><span class="t">T\xCDTULO</span><span class="f">FORMATO</span><span class="g">G\xC9NERO</span><span class="y">A\xD1O</span><span></span></div>${et.map(i_).join("")}</div>`)+'<div class="vacio" id="vacioC" hidden>Ninguna referencia con estos filtros.<button class="tecla" id="bLimpiar">Quitar filtros</button></div>',fe("bLimpiar").onclick=()=>{Gc(),Jn(),jn()},Ru=Bi,t.querySelectorAll(a).forEach(u=>{u.hidden=!e.has(u.dataset.c)}),s(),fe("vacioC").hidden=n.length>0;return}let r=[...t.querySelectorAll(a)];t.querySelectorAll(".fantasma").forEach(u=>u.remove()),r.forEach(u=>u.getAnimations().forEach(h=>h.cancel()));let o=t.getBoundingClientRect(),c=new Map;if(r.forEach(u=>{u.hidden||c.set(u,u.getBoundingClientRect())}),r.forEach(u=>{let h=!e.has(u.dataset.c);if(h&&!u.hidden&&!hs.matches){let d=c.get(u),f=u.cloneNode(!0);f.classList.add("fantasma"),f.removeAttribute("href"),f.setAttribute("aria-hidden","true"),Object.assign(f.style,{position:"absolute",left:d.left-o.left+"px",top:d.top-o.top+"px",width:d.width+"px",height:d.height+"px",margin:0,pointerEvents:"none"}),t.appendChild(f),f.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(.9)"}],{duration:240,easing:"cubic-bezier(.4,0,.2,1)"}).onfinish=()=>f.remove()}u.hidden=h}),s(),fe("vacioC").hidden=n.length>0,hs.matches)return;let l=0;r.forEach(u=>{if(u.hidden)return;let h=c.get(u),d=u.getBoundingClientRect();if(h){let f=h.left-d.left,g=h.top-d.top;(f||g)&&u.animate([{transform:`translate(${f}px,${g}px)`},{transform:"none"}],{duration:420,easing:"cubic-bezier(.2,.7,.2,1)"})}else u.animate([{opacity:0,transform:"translateY(12px) scale(.95)"},{opacity:1,transform:"none"}],{duration:380,delay:Math.min(l++,10)*28,easing:"cubic-bezier(.2,.7,.2,1)",fill:"backwards"})})}var a_=n=>et.filter(e=>kc(e,"gen")&&e.genre===n).length,r_=()=>`<div class="fader"><span class="lbl">G\xC9NERO</span><div class="selector">
  <button class="visor" id="visG" aria-haspopup="listbox" aria-expanded="false"><span class="v"></span><span class="nn"></span><span class="tri" aria-hidden="true"></span></button>
  <div class="desp" hidden><input id="busG" type="search" placeholder="Buscar g\xE9nero\u2026" autocomplete="off" aria-label="Buscar g\xE9nero"><ul role="listbox" aria-multiselectable="true" aria-label="G\xE9neros"></ul></div></div></div>`;function o_(n){let e=[...gn];n.querySelector(".v").textContent=e.length?e.length<=2?e.join(" + "):e.length+" G\xC9NEROS":"TODOS",n.querySelector(".nn").textContent=e.length?jf().length+" ref.":zi.length+" en total"}function c_(n){let e=n.querySelector(".visor"),t=n.querySelector(".desp"),i=n.querySelector("input"),s=n.querySelector("ul"),a=0,r=[],o=()=>{let u=i.value.trim().toLowerCase();r=[null,...zi].filter(h=>h===null?!u:h.toLowerCase().includes(u)),a=Math.min(a,Math.max(0,r.length-1)),s.innerHTML=r.length?r.map((h,d)=>{let f=h===null?!gn.size:gn.has(h),g=h===null?et.filter(A=>kc(A,"gen")).length:a_(h);return`<li role="option" data-g="${h===null?"":me(h)}" aria-selected="${f}" class="${g||f?"":"cero"}${d===a?" act":""}"><span><i class="caja" aria-hidden="true"></i>${h===null?"TODOS":me(h)}</span><span>${g}</span></li>`}).join(""):'<li class="nada">Sin resultados</li>',s.querySelector(".act")?.scrollIntoView({block:"nearest"})},c=u=>{t.hidden=!u,e.setAttribute("aria-expanded",u),u&&(i.value="",a=0,o(),i.focus({preventScroll:!0}),requestAnimationFrame(()=>t.scrollIntoView({block:"nearest",behavior:hs.matches?"auto":"smooth"})))},l=u=>{u===null?gn.clear():gn.has(u)?gn.delete(u):gn.add(u),o(),Jn(),jn()};e.onclick=()=>c(t.hidden),i.oninput=()=>{a=0,o()},i.onkeydown=u=>{u.key==="ArrowDown"||u.key==="ArrowUp"?(u.preventDefault(),a=Math.max(0,Math.min(r.length-1,a+(u.key==="ArrowDown"?1:-1))),o()):u.key==="Enter"?(u.preventDefault(),a<r.length&&l(r[a])):u.key==="Escape"&&(c(!1),e.focus())},s.onclick=u=>{let h=u.target.closest("li[data-g]");h&&l(h.dataset.g||null)},n._cierra&&document.removeEventListener("pointerdown",n._cierra),n._cierra=u=>{if(!n.isConnected)return document.removeEventListener("pointerdown",n._cierra);!t.hidden&&!n.contains(u.target)&&c(!1)},document.addEventListener("pointerdown",n._cierra)}var l_=(n,e)=>n.length<=e?n:n.split(" ")[0].length<=e?n.split(" ")[0]:n.slice(0,e-1)+".";function u_(){let n=fe("panel");n.innerHTML=`<header class="panel-cab"><div><h2>CAT\xC1LOGO</h2><div class="sub">${et.length} referencias \xB7 ${et[et.length-1].code}\u2013${et[0].code} \xB7 Broadcasted from Elda</div></div>
    <div class="vista" role="group" aria-label="Vista"><button class="tecla" id="vRej" aria-pressed="${Bi==="rejilla"}">Rejilla</button><button class="tecla" id="vLis" aria-pressed="${Bi==="lista"}">Lista</button></div></header>
    <div class="panel-cuerpo"><div class="filtrosM"><button class="tecla" type="button" id="bFil" aria-expanded="false" aria-controls="faders">Filtros<b id="nFil"></b><i aria-hidden="true"></i></button><button class="tecla" type="button" id="bLimpia" hidden>Limpiar</button></div><div class="faders" id="faders" aria-label="Filtros \xB7 corredor AU-04">
      ${xr.length>1?`<div class="fader"><span class="lbl">TIPO</span><div class="llaves" role="group" aria-label="Tipo">${xr.map(([t,i])=>`<button class="llave" type="button" data-t="${t}" aria-pressed="true"><i aria-hidden="true"></i>${i}<span class="n"></span></button>`).join("")}</div></div>`:""}
      <div class="fader"><span class="lbl">ARTISTA</span><div class="llaves" role="group" aria-label="Artistas (varios a la vez; ninguno = todos)">${Xf.map(t=>`<button class="llave" type="button" data-a="${me(t)}" aria-pressed="false"><i aria-hidden="true"></i>${me(t)}<span class="n"></span></button>`).join("")}</div></div>
      ${ls.map((t,i)=>`<div class="fader"><span class="lbl">${t.lbl}</span>
      <div class="riel" data-i="${i}" role="group" aria-label="${t.lbl}">${t.ops.map((s,a)=>`<button id="f${i}_${a}" aria-pressed="false" aria-label="${s}"><span class="l">${s}</span><span class="s" aria-hidden="true">${l_(s,Math.max(5,Math.floor(60/t.ops.length)))}</span></button>`).join("")}<span class="cursor" aria-hidden="true"></span></div></div>`).join("")}
      ${zi.length>1?r_():""}</div>
      <p class="conteo"><span id="conteo"></span><span class="orden" role="group" aria-label="Orden">ORDEN<button type="button" data-o="recientes">Recientes</button><button type="button" data-o="antiguos">Antiguos</button><button type="button" data-o="az">A\u2013Z</button></span></p><div id="resultados"></div></div>`,n.querySelectorAll(".selector").forEach(c_),fe("bFil").onclick=()=>{let t=n.querySelector(".panel-cuerpo"),i=!t.classList.contains("fil-abiertos");t.classList.toggle("fil-abiertos",i),fe("bFil").setAttribute("aria-expanded",i),Jn()},fe("bLimpia").onclick=()=>{Gc(),Jn(),jn()},n.querySelectorAll(".llave").forEach(t=>t.onclick=()=>{if(t.dataset.t){let i=t.dataset.t;cs.has(i)?cs.delete(i):cs.add(i)}else{let i=t.dataset.a;Kn.has(i)?Kn.delete(i):Kn.add(i)}Jn(),jn()}),n.querySelectorAll(".orden button").forEach(t=>t.onclick=()=>{Pc=t.dataset.o;try{localStorage.setItem("au-orden",Pc)}catch{}Jn(),jn()}),n.querySelectorAll(".riel").forEach(t=>{let i=+t.dataset.i;t.querySelectorAll("button").forEach((a,r)=>a.onclick=()=>{t.dataset.arr||(vn[i]=r,Jn(),jn())});let s=t.querySelector(".cursor");t.addEventListener("pointerdown",a=>{if(a.pointerType==="mouse"&&a.button!==0)return;a.preventDefault();let r=[...t.querySelectorAll("button")],o=r.map(p=>p.offsetLeft+p.offsetWidth/2),c=a.clientX,l=t.getBoundingClientRect(),u=p=>Math.max(o[0],Math.min(o[o.length-1],p.clientX-l.left)),h=p=>o.reduce((m,y,E)=>Math.abs(y-p)<Math.abs(o[m]-p)?E:m,0),d=p=>{p!==vn[i]&&(vn[i]=p,r.forEach((m,y)=>m.setAttribute("aria-pressed",y===p)),jn(),Qf())},f=!1;try{t.setPointerCapture(a.pointerId)}catch{}let g=p=>{if(!f&&Math.abs(p.clientX-c)<4)return;f||(f=!0,t.classList.add("arrastra"));let m=u(p);s.style.left=m+"px",d(h(m))},A=p=>{t.removeEventListener("pointermove",g),t.removeEventListener("pointerup",A),t.removeEventListener("pointercancel",A),t.classList.remove("arrastra"),!f&&p.type==="pointerup"&&d(h(u(p))),t.dataset.arr="1",setTimeout(()=>delete t.dataset.arr,0),Jn()};t.addEventListener("pointermove",g),t.addEventListener("pointerup",A),t.addEventListener("pointercancel",A)}),t.addEventListener("keydown",a=>{let r=a.key==="ArrowRight"?1:a.key==="ArrowLeft"?-1:0;r&&(a.preventDefault(),vn[i]=Math.max(0,Math.min(ls[i].ops.length-1,vn[i]+r)),Jn(),jn(),t.querySelectorAll("button")[vn[i]].focus())})}),Ru=null;let e=t=>{Bi=t;try{localStorage.setItem("au-vista",t)}catch{}fe("vRej").setAttribute("aria-pressed",t==="rejilla"),fe("vLis").setAttribute("aria-pressed",t==="lista"),jn()};fe("vRej").onclick=()=>e("rejilla"),fe("vLis").onclick=()=>e("lista"),jn(),requestAnimationFrame(Jn)}var Sf=null,fr=!1;function tp(){return Sf||(Sf=new Promise((n,e)=>{let t=document.createElement("script");t.src="https://w.soundcloud.com/player/api.js",t.onload=()=>n(window.SC),t.onerror=e,document.head.appendChild(t)}))}var h_=/[?&]diag\b/.test(location.search),ur=[],nn=n=>{let e=new Date().toTimeString().slice(3,8);if(ur.push(e+" "+n),ur.length>40&&ur.shift(),!h_)return;let t=fe("diag00");t||(t=document.createElement("pre"),t.id="diag00",t.style.cssText="position:fixed;left:6px;right:6px;top:6px;z-index:99;max-height:38vh;overflow:auto;margin:0;padding:6px 8px;background:rgba(14,15,18,.88);color:#cfe0ff;font:10px/1.35 monospace;white-space:pre-wrap;pointer-events:none",document.body.appendChild(t)),t.textContent=ur.join(`
`),t.scrollTop=1e6};window.__diag00=ur;var Au=75,cr=7,d_=n=>{let e=String(n||"").trim().match(/^(\d+):(\d{1,2})$/);return e?+e[1]*60+ +e[2]:null};addEventListener("resize",()=>{fe("tira00").classList.contains("on")&&_r.muestraTira(!0)});var f_={cola:et.filter(n=>n.soundcloud),w:[],vol:[0,0],iv:[],act:-1,prep:null,ahora:null,timers:[],ult:[],pedido:null,id:0,vivo:!1,bloqueo:!1,fallo:!1,SC:null,sonando:!1,tira:/iP(hone|ad|od)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,luego(n,e){this.timers.push(Dt.espera(n,e*1e3))},async monta(){if(this.w.length===(this.tira?1:2))return!0;try{nn("monta \xB7 modo "+(this.tira?"tira":"oculto")+" \xB7 "+(navigator.userAgent.match(/(CriOS|GSA|FxiOS|EdgiOS|Version)\/[\d.]+/)||["?"])[0]);let n=this.SC=await Promise.race([tp(),new Promise((t,i)=>Dt.espera(()=>i(new Error("sin respuesta")),9e3))]);nn("api de soundcloud cargada");let e=this.tira?1:2;for(let t=this.w.length;t<e;t++){let i=document.createElement("iframe");i.allow="autoplay",i.title="Canal 00 \xB7 reproductor de SoundCloud",this.tira?fe("tira00f").appendChild(i):(i.className="sc00",i.tabIndex=-1,i.setAttribute("aria-hidden","true"),document.body.appendChild(i)),i.src="https://w.soundcloud.com/player/?url="+encodeURIComponent(this.cola[0].soundcloud)+"&color=%230e0f12&auto_play=false&single_active=false&visual=false&show_artwork=false&buying=false&sharing=false&download=false&show_comments=false&show_user=false&hide_related=true&show_teaser=false";let s=n.Widget(i);await new Promise(a=>{let r=!1;s.bind(n.Widget.Events.READY,()=>{r=!0,nn("reproductor listo"),a()}),Dt.espera(()=>{r||nn("reproductor: sin READY en 9 s"),a()},9e3)}),s.setVolume(0),this.w.push(s),s.bind(n.Widget.Events.PLAY,()=>nn("aviso PLAY")),s.bind(n.Widget.Events.PLAY_PROGRESS,a=>this.progreso(t,a&&a.currentPosition)),s.bind(n.Widget.Events.PAUSE,()=>{nn("aviso PAUSE"),this.pausado(t)}),s.bind(n.Widget.Events.FINISH,()=>{nn("aviso FINISH"),!this.tira&&this.vivo&&t===this.act&&this.ahora&&this.cruza(this.id)})}return!0}catch(n){return nn("fallo al montar: "+(n&&n.message)),!1}},progreso(n,e){if(!this.tira||n!==0)return;let t=performance.now();if(this.sonando){this.vistoProg=t;return}if(!this.ahora||!this.vivo||typeof e!="number")return;let i=this.prog;this.prog={ms:e,t},i&&e>i.ms+150&&t-i.t<3e3&&(nn("suena de verdad \xB7 "+Math.round(e/1e3)+" s"),this.alSonar(0))},pausado(n){!this.tira||n!==0||!this.sonando||!this.ahora||!this.vivo||(this.sonando=!1,this.bloqueo=!0,this.prog=null,this.timers.forEach(Dt.anula),this.timers=[],this.rotuloTira("CANAL 00 \xB7 TOCA \u25B6 PARA SEGUIR"),this.muestraTira(!0),wt())},siguiente(){if(this.pedido){let t=this.pedido;return this.pedido=null,t}let n=this.cola.filter(t=>!this.ult.includes(t.code)),e=(n.length?n:this.cola)[Math.floor(Math.random()*(n.length||this.cola.length))];return this.ult=[e.code,...this.ult].slice(0,Math.max(0,Math.min(2,this.cola.length-1))),e},prepara(n,e){let t=this.w[n];return new Promise(i=>{let s=!1,a=r=>{s||(s=!0,i(r))};Dt.espera(()=>{s||nn("preparar "+e.code+": sin respuesta en 12 s"),a(null)},12e3),t.setVolume(0),t.load(e.soundcloud,{auto_play:!1,single_active:!1,visual:!1,show_artwork:!1,buying:!1,sharing:!1,download:!1,show_comments:!1,show_user:!1,hide_related:!0,callback:()=>t.getSounds(r=>{let o=r&&r.length||1,c=Math.floor(Math.random()*o),l=()=>t.getCurrentSound(u=>t.getDuration(h=>{let d=(h||0)/1e3,f=d_(e.fragmento);(f==null||f>d-30)&&(f=d*.42),f=Math.max(0,Math.min(f,d-Au-cr)),nn("preparado "+e.code+" \xB7 "+Math.round(d)+" s, desde "+Math.round(f)),a({r:e,k:n,ini:f,dur:d,tema:u&&u.title||kt(e),url:u&&u.permalink_url||e.soundcloud})}));o>1?(t.setVolume(0),t.skip(c),Dt.espera(()=>{t.pause(),l()},700)):l()})})})},funde(n,e,t,i){Dt.anula(this.iv[n]);let s=this.w[n],a=this.vol[n],r=performance.now();this.iv[n]=Dt.cada(()=>{let o=Math.min(1,(performance.now()-r)/(t*1e3)),c=e>a?a+(e-a)*Math.sin(o*Math.PI/2):a*Math.cos(o*Math.PI/2);this.vol[n]=c,s.setVolume(Math.round(c)),o>=1&&(Dt.anula(this.iv[n]),i&&i())},80)},suena(n,e){if(e!==this.id)return;if(this.tira){let i=this.w[0];this.act=0,this.ahora=n,this.sonando=!1,this.prog=null,this.fallo=!1,this.vol[0]=100,i.setVolume(100),nn("play (por c\xF3digo)"),i.seekTo(n.ini*1e3),i.play(),wt(),fe("tira00").classList.contains("on")&&this.rotuloTira("CANAL 00 \xB7 TOCA \u25B6 PARA SINTONIZAR"),this.luego(()=>{e===this.id&&this.ahora===n&&!this.sonando&&(this.bloqueo=!0,this.rotuloTira("CANAL 00 \xB7 TOCA \u25B6 PARA SINTONIZAR"),this.muestraTira(!0),wt())},1.5);return}let t=this.w[n.k];this.act=n.k,this.ahora=n,this.bloqueo=!1,this.fallo=!1,t.setVolume(0),t.seekTo(n.ini*1e3),t.play(),Dt.espera(()=>t.seekTo(n.ini*1e3),400),this.funde(n.k,100,cr),wt(),this.luego(()=>t.isPaused(i=>{i&&e===this.id&&this.ahora===n&&this.pasaATira()}),5),this.luego(async()=>{let i=await this.prepara(1-n.k,this.siguiente());e===this.id&&(this.prep=i)},12),this.luego(()=>{this.ahora===n&&this.cruza(e)},Math.max(20,Math.min(Au,n.dur-n.ini)-cr))},alSonar(n){if(!this.tira||n!==0||!this.ahora||this.sonando||!this.vivo)return;let e=this.ahora,t=this.id,i=this.w[0];this.sonando=!0,this.bloqueo=!1,this.muestraTira(!1),wt(),i.getPosition(a=>{a/1e3<e.ini-3&&i.seekTo(e.ini*1e3)}),this.luego(()=>this.cruzaTira(t),Math.max(20,Math.min(Au,e.dur-e.ini))),this.vistoProg=performance.now();let s=()=>{t!==this.id||this.ahora!==e||!this.sonando||(performance.now()-this.vistoProg>4e3?(nn("sin progreso 4 s \u2192 tira"),this.pausado(0)):this.luego(s,1))};this.luego(s,1)},async cruzaTira(n){if(n!==this.id)return;Be.estatica(3.2,.035),this.w[0].pause(),this.ahora=null,wt();let e=await this.prepara(0,this.siguiente());n===this.id&&(e?this.suena(e,n):(this.fallo=!0,wt()))},pasaATira(){this.tira||(this.tira=!0,this.w=[],this.act=-1,document.querySelectorAll("iframe.sc00").forEach(n=>n.remove()),this.empieza(this.ahora&&this.ahora.r))},rotuloTira(n){let e=fe("tira00k");e&&(e.textContent=n)},muestraTira(n){let e=fe("tira00");if(e){if(n){let t=document.querySelector(".pletina"),i=t.getBoundingClientRect();e.style.bottom=`calc(${getComputedStyle(t).bottom} + ${t.offsetHeight+8}px)`,e.style.left=i.left+"px",e.style.width=i.width+"px"}e.classList.contains("on")!==n&&nn(n?"tira a la vista":"tira recogida"),e.classList.toggle("on",n),e.setAttribute("aria-hidden",!n)}},async cruza(n){if(n!==this.id||!this.ahora||this.cruzandoDe===this.ahora)return;this.cruzandoDe=this.ahora;let e=this.act,t=this.prep;if(this.prep=null,Be.estatica(cr*.9,.022),this.funde(e,0,cr,()=>this.w[e].pause()),t)this.suena(t,n);else{let i=await this.prepara(1-e,this.siguiente());i?this.suena(i,n):n===this.id&&(this.fallo=!0,wt())}},async empieza(n){n&&(this.pedido=n);let e=++this.id;if(this.timers.forEach(Dt.anula),this.timers=[],this.prep=null,this.vivo=!0,this.ahora=null,this.fallo=!1,this.bloqueo=!1,this.sonando=!1,wt(),this.tira&&this.w[0]&&this.w[0].pause(),!this.cola.length)return;if(nn("canal 00 \xB7 empieza"),this.tira&&!this.w.length&&(this.rotuloTira("CANAL 00 \xB7 CARGANDO SOUNDCLOUD\u2026"),this.muestraTira(!0)),!await this.monta()){e===this.id&&(this.fallo=!0,this.muestraTira(!1),wt());return}if(e!==this.id)return;let t=this.tira?0:this.act>=0?1-this.act:0;if(!this.tira&&this.act>=0){let s=this.act;this.funde(s,0,2.5,()=>this.w[s].pause())}let i=await this.prepara(t,this.siguiente());e===this.id&&(i?this.suena(i,e):(this.fallo=!0,this.muestraTira(!1),wt()))},para(n=2.5){this.id++,this.vivo=!1,this.timers.forEach(Dt.anula),this.timers=[],this.prep=null,this.ahora=null,this.act=-1,this.sonando=!1,this.muestraTira(!1),this.w.forEach((e,t)=>this.funde(t,0,n,()=>e.pause()))},nivel(){if(!this.ahora||this.bloqueo||this.tira&&!this.sonando)return 0;let n=performance.now()/1e3;return Math.max(...this.vol)/100*(.13+.035*Math.sin(n*7.3)+.03*Math.sin(n*2.1)+.035*Math.random())},rotulo(){let n=this.ahora;if(!this.cola.length)return"Todav\xEDa no hay lanzamientos con SoundCloud en el panel";if(n){let e=n.r.spotify||n.url,t=`<a href="${me(e)}" target="_blank" rel="noopener">entero \u2197</a>`;return this.bloqueo?"Toca \u25B6 en la tira de arriba":`<a href="#${n.r.code}">${me(n.r.artist)} \u2014 ${me(n.tema)}</a> \xB7 `+t}return this.fallo?"Sin se\xF1al de SoundCloud \xB7 prueba en un rato u otro canal":Be.on?"Sintonizando el cat\xE1logo\u2026":`Fragmentos del cat\xE1logo \xB7 ${wn(this.cola.length,"lanzamiento","lanzamientos")}`}},zu=et.some(n=>n.audio),lr=3,p_=.8,m_="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",g_={cola:et.filter(n=>n.audio),el:[],g:[],act:-1,ahora:null,id:0,vivo:!1,fallo:!1,bloqueo:!1,tira:!1,pedido:null,ult:[],timers:[],luego(n,e){this.timers.push(Dt.espera(n,e*1e3))},monta(){if(this.el.length||!Be.ctx)return;let n=Be.ctx;for(let e=0;e<2;e++){let t=new Audio;t.preload="auto",t.setAttribute("playsinline","");let i=n.createGain();i.gain.value=0;try{n.createMediaElementSource(t).connect(i),i.connect(Be.limite)}catch{}this.el.push(t),this.g.push(i)}},rampa(n,e,t){let i=this.g[n].gain,s=Be.ctx.currentTime;i.cancelScheduledValues(s),i.setValueAtTime(i.value,s),i.linearRampToValueAtTime(e,s+t)},siguiente(){if(this.pedido&&this.pedido.audio){let t=this.pedido;return this.pedido=null,t}this.pedido=null;let n=this.cola.filter(t=>!this.ult.includes(t.code)),e=(n.length?n:this.cola)[Math.floor(Math.random()*(n.length||this.cola.length))];return this.ult=[e.code,...this.ult].slice(0,Math.max(0,Math.min(2,this.cola.length-1))),e},suena(n,e){if(e!==this.id)return;let t=this.act,i=t===0?1:0,s=this.el[i];s.onended=s.ontimeupdate=null,s.dataset.ok=1,s.src=n.audio,s.currentTime=0;let a=()=>{e!==this.id||this.act!==i||(s.onended=s.ontimeupdate=null,Be.estatica(lr*.9,.022),this.suena(this.siguiente(),e))};s.onended=a,s.ontimeupdate=()=>{s.duration&&s.duration-s.currentTime<lr+.3&&a()},this.act=i,this.ahora={r:n,tema:kt(n)},this.fallo=!1,this.bloqueo=!1,wt();let r=s.play();if(r&&r.catch(()=>{e===this.id&&this.act===i&&(this.bloqueo=!0,wt())}),this.rampa(i,p_,t<0?1.5:lr),t>=0){this.rampa(t,0,lr);let o=this.el[t];this.luego(()=>{this.act!==t&&o.pause()},lr+.2)}s.onerror=()=>{e===this.id&&this.act===i&&(this.fallo=!0,wt(),this.luego(()=>a(),2))}},empieza(n){n&&(this.pedido=n);let e=++this.id;if(this.timers.forEach(Dt.anula),this.timers=[],this.vivo=!0,this.fallo=!1,!this.cola.length||!Be.ctx)return;this.monta();let t=this.el[this.act===0?0:1];if(!t.dataset.ok){t.dataset.ok=1,t.src=m_;let i=t.play();i&&i.then(()=>{this.el[this.act]!==t&&t.pause()}).catch(()=>{})}this.suena(this.siguiente(),e)},para(n=2.5){this.id++,this.vivo=!1,this.timers.forEach(Dt.anula),this.timers=[],this.ahora=null,this.act=-1,this.el.length&&this.el.forEach((e,t)=>{e.onended=e.ontimeupdate=e.onerror=null,this.rampa(t,0,n),Dt.espera(()=>{this.vivo||e.pause()},n*1e3+200)})},nivel(){return 0},muestraTira(){},rotulo(){let n=this.ahora;if(n){if(this.bloqueo)return"Toca \u25B6 para sintonizar";if(this.fallo)return"Sin se\xF1al \xB7 pasando al siguiente";let e=n.r.spotify||n.r.soundcloud||n.r.bandcamp;return`<a href="#${n.r.code}">${me(n.r.artist)} \u2014 ${me(n.tema)}</a>`+(e?` \xB7 <a href="${me(e)}" target="_blank" rel="noopener">entero \u2197</a>`:"")}return Be.on?"Sintonizando el cat\xE1logo\u2026":`Fragmentos del cat\xE1logo \xB7 ${wn(this.cola.length,"lanzamiento","lanzamientos")}`}},_r=Be.cat=zu?g_:f_;if(zu&&Vi){Vi=!1,Uu=0;let n=fe("canal0");n&&(n.disabled=!1,n.style.visibility="",n.removeAttribute("aria-hidden"))}async function v_(n){Fi||await Oc(!1),_r.pedido=n,Be.canal===-1&&Be.on?_r.empieza():(ki(-1),Be.on||(await Be.encender(),Qn()))}function x_(n){let e=n.querySelector("iframe.sc");e&&tp().then(t=>{let i=t.Widget(e);i.bind(t.Widget.Events.PLAY,()=>{Be.on&&(Be.apagar(),fr=!0,Qn())});let s=()=>{fr&&(fr=!1,Be.encender().then(Qn))};i.bind(t.Widget.Events.PAUSE,s),i.bind(t.Widget.Events.FINISH,s)}).catch(()=>{})}function __(n){let e=et.indexOf(n),t=et[e+1],i=et[e-1],s=fe("panel"),a=[["SoundCloud",n.soundcloud],["Spotify",n.spotify],["Bandcamp",n.bandcamp]];setTimeout(()=>s.querySelectorAll("[data-art]").forEach(o=>o.addEventListener("click",()=>{Gc(),Kn.add(o.dataset.art)}))),s.innerHTML=`<header class="panel-cab"><div><h2>${n.code}</h2><div class="sub">${sa(n)?"Participaci\xF3n":n.edicion?"Edici\xF3n del sello":"Ficha de lanzamiento"} \xB7 ${me(n.format)} \xB7 ${me(n.genre)} \xB7 ${n.year}</div></div>
    <a class="tecla" href="#catalogo">\u2190 Cat\xE1logo</a></header>
    <div class="panel-cuerpo"><div class="fl">${Zf(n,"portada",Bu)}
      <div class="datos"><div class="cod">${n.code} \xB7 ${me(n.format)} \xB7 ${n.fecha?n.fecha.split("-").reverse().join("."):n.year} \xB7 ${me(n.genre)}</div><h3>${me(n.artist)}</h3><p class="tit">${me(kt(n))}</p>
        ${ra(n).length?`<div class="aqui"><span class="k">${sa(n)?"AURALITY EN ESTE LANZAMIENTO":"TAMBI\xC9N DE AURALITY"}</span>${Jf(n)}</div>`:""}
        <div class="enlaces mas">${Vc(n).map(o=>`<a class="tecla oscura" href="#a-${Vu(o)}">${me(o)} \xB7 perfil</a>`).join("")}</div>
        <div class="enlaces">${(zu?n.audio:n.soundcloud)&&!Vi?'<button class="tecla oscura" type="button" id="bRadio00">Escuchar en la radio \xB7 canal 00</button>':""}${a.map(([o,c])=>c?`<a class="tecla" href="${me(c)}" target="_blank" rel="noopener">${o} \u2197</a>`:`<span class="tecla" aria-disabled="true">${o} \xB7 sin enlace</span>`).join("")}<button class="tecla oscura compartir" type="button" id="bComp">Compartir</button></div>
        ${aa&&n.soundcloud?`<iframe class="sc" title="Reproductor de SoundCloud: ${me(n.title)}" allow="autoplay" loading="lazy"
          src="https://w.soundcloud.com/player/?url=${encodeURIComponent(n.soundcloud)}&color=%230e0f12&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>`:""}
        <table class="creditos"><tbody>${n.credits.map(([o,c])=>`<tr><th scope="row">${me(o)}</th>${e_(c)?'<td class="pend">Por definir</td>':`<td>${me(c)}</td>`}</tr>`).join("")}</tbody></table>
        ${n.tracks&&n.tracks.length?`<div class="escala"><span class="k">TRACKLIST</span>${n.tracks.map((o,c)=>`<p>${String(c+1).padStart(2,"0")} \xB7 ${me(o)}</p>`).join("")}</div>`:n.format==="SINGLE"?"":'<div class="escala"><span class="k">TRACKLIST</span><p>Tracklist por publicar.</p></div>'}
      </div></div>
      ${A_(n)}
      <nav class="pasos" aria-label="Otras referencias">${t?`<a class="tecla" href="#${t.code}">\u2190 ${t.code}</a>`:"<span></span>"}${i?`<a class="tecla" href="#${i.code}">${i.code} \u2192</a>`:"<span></span>"}</nav></div>`,fe("bRadio00")&&(fe("bRadio00").onclick=()=>v_(n)),fe("bComp").onclick=async()=>{let o=location.origin+"/"+n.code,c=`${n.artist} \u2014 ${kt(n)} \xB7 aurality`;try{navigator.share?await navigator.share({title:c,url:o}):(await navigator.clipboard.writeText(o),fe("bComp").textContent="Enlace copiado")}catch{}};let r=fe("bVideo");r&&(r.onclick=()=>{Be.on&&(Be.apagar(),Qn());let o=document.createElement("iframe");o.className="vid",o.src=r.dataset.src,o.title="V\xEDdeo de "+n.code,o.allow="autoplay; fullscreen; picture-in-picture",o.allowFullscreen=!0,r.replaceWith(o)}),s.querySelectorAll(".foto").forEach(o=>o.onclick=()=>S_(n.fotos,+o.dataset.i))}var y_=n=>{if(!n)return null;let e=n.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([\w-]{11})/);return e?{src:`https://www.youtube-nocookie.com/embed/${e[1]}?autoplay=1&rel=0`,img:`https://i.ytimg.com/vi/${e[1]}/hqdefault.jpg`}:(e=n.match(/vimeo\.com\/(?:video\/)?(\d+)/),e?{src:`https://player.vimeo.com/video/${e[1]}?autoplay=1`,img:""}:null)};function A_(n){let e=n.historia?n.historia.split(/\n\s*\n/).map(r=>r.trim()).filter(Boolean):[],t=e.length?`<section class="historia"><div class="sub2">HISTORIA</div>${e.map(r=>`<p>${me(r).replace(/\n/g,"<br>")}</p>`).join("")}</section>`:"",i=y_(n.video),s=i?`<section><div class="sub2">V\xCDDEO</div><button class="video" type="button" id="bVideo" data-src="${me(i.src)}" aria-label="Reproducir el v\xEDdeo">${i.img?`<img src="${me(i.img)}" alt="" loading="lazy">`:""}<span class="pl" aria-hidden="true">\u25B6</span></button></section>`:"",a=n.fotos.length?`<section><div class="sub2">FOTOS \xB7 ${n.fotos.length}</div><div class="fotos">${n.fotos.map((r,o)=>`<button class="foto" type="button" data-i="${o}" aria-label="Ampliar foto ${o+1}${r.pie?": "+me(r.pie):""}"><img src="${me(r.img)}" alt="${me(r.pie)}" loading="lazy"></button>`).join("")}</div></section>`:"";return t||s||a?`<div class="extra">${t}${s}${a}</div>`:""}function S_(n,e){let t=document.createElement("div");t.className="visorfoto",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Fotos");let i=()=>{let o=n[e];t.innerHTML=`<img src="${me(o.img)}" alt="${me(o.pie)}"><div class="pie">${String(e+1).padStart(2,"0")} / ${String(n.length).padStart(2,"0")}${o.pie?" \xB7 "+me(o.pie):""}</div>
    <div class="bts">${n.length>1?'<button class="tecla" data-a="-1" aria-label="Anterior">\u2190</button><button class="tecla" data-a="1" aria-label="Siguiente">\u2192</button>':""}<button class="tecla oscura" data-a="x">Cerrar</button></div>`,t.querySelector('[data-a="x"]').focus()},s=o=>{e=(e+o+n.length)%n.length,i()},a=()=>{t.remove(),removeEventListener("keydown",r)},r=o=>{o.key==="Escape"&&a(),o.key==="ArrowRight"&&s(1),o.key==="ArrowLeft"&&s(-1)};t.addEventListener("click",o=>{let c=o.target.closest("[data-a]");o.target===t||c&&c.dataset.a==="x"?a():c&&s(+c.dataset.a)}),addEventListener("keydown",r),document.body.appendChild(t),i()}var Vu=n=>n.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),Cn=Xf.map(n=>{let e=et.filter(a=>Ic(a).includes(n)),t=et.filter(a=>!Ic(a).includes(n)&&ra(a).some(([r])=>r===n)),i=[...e,...t].map(a=>+a.year).filter(Boolean),s=(Vt.artists||{})[n]||{};return{n,s:Vu(n),rs:e,ps:t,info:s,colab:di(e.flatMap(Bc)).filter(a=>a!==n),y0:Math.min(...i),y1:Math.max(...i)}});fe("nArt").textContent=Cn.length+" artistas";var M_=n=>n.split(/\s+/).filter(e=>!/^(el|la|de|del|y)$/i.test(e)).map(e=>e[0]).join("").slice(0,3),ku=n=>n.info.photo?`<img class="retrato" src="${me(n.info.photo)}"${yr(n.info.photo,Bu)} alt="Retrato de ${me(n.n)}" loading="lazy" decoding="async">`:`<div class="sinf" role="img" aria-label="Sin foto todav\xEDa"><b>${me(M_(n.n))}</b><span>SIN FOTO</span></div>`,Gu=n=>n.y0===n.y1?String(n.y0):n.y0+"\u2013"+n.y1,wn=(n,e,t)=>n+" "+(n===1?e:t),ta=(()=>{try{return localStorage.getItem("au-vistaR")||"lista"}catch{return"lista"}})();function np(){fe("panel").innerHTML=`<header class="panel-cab"><div><h2>ROSTER</h2><div class="sub">${wn(Cn.length,"artista","artistas")} \xB7 ${et.length} referencias \xB7 Broadcasted from Elda</div></div>
    <div class="vista" role="group" aria-label="Vista"><button class="tecla" id="vRL" aria-pressed="${ta==="lista"}">Lista</button><button class="tecla" id="vRR" aria-pressed="${ta==="red"}">Red</button></div></header>
    <div class="panel-cuerpo" id="rosterC">${ta==="red"?"":b_()}</div>`;let n=e=>{ta=e;try{localStorage.setItem("au-vistaR",e)}catch{}np()};fe("vRL").onclick=()=>n("lista"),fe("vRR").onclick=()=>n("red"),ta==="red"&&ip(fe("rosterC"))}function b_(){return`<div class="modulos">${Cn.map(n=>`<a class="modulo" href="#a-${n.s}">${ku(n)}
      <span class="rol">${me(n.info.role||"ARTISTA")}</span><span class="nom">${me(n.n)}</span>
      <span class="st">${wn(n.rs.length,"lanzamiento","lanzamientos")}${n.ps.length?" \xB7 "+wn(n.ps.length,"participaci\xF3n","participaciones"):""} \xB7 <span style="white-space:nowrap">${Gu(n)}</span></span></a>`).join("")}</div>`}var T_=n=>!/arte|artwork|foto|dise|v[ií]deo|portada|gr[aá]fic|estilismo/i.test(n),E_=n=>String(n||"").split(/\s*[·,\/&+]\s*|\s+[×x]\s+/i).map(e=>e.trim().toUpperCase()).filter(e=>e&&!/^(POR DEFINIR|—|-)$/.test(e));function w_(){let n=new Map,e=new Map,t=o=>(n.has(o)||n.set(o,{n:o,m:zc(o)}),n.get(o)),i=(o,c,l,u,h)=>{if(o===c)return;t(o),t(c);let[d,f]=[o,c].sort(),g=d+"|"+f;e.has(g)||e.set(g,{k:g,a:d,b:f,obras:new Map});let A=e.get(g).obras,p=A.get(l.code)||{r:l,tipos:new Set,roles:new Set};p.tipos.add(u),h&&p.roles.add(h.toLowerCase()),A.set(l.code,p)};et.forEach(o=>{let c=Bc(o).map(l=>l.toUpperCase());c.forEach(t),c.forEach((l,u)=>c.slice(u+1).forEach(h=>i(l,h,o,"firma"))),(o.participantes||[]).forEach(([l,u])=>c.forEach(h=>i(l,h,o,"trabajo",u||"participaci\xF3n"))),(o.credits||[]).forEach(([l,u])=>{T_(l)&&E_(u).forEach(h=>c.forEach(d=>i(h,d,o,"trabajo",l)))})});let s="AURALITY",a=[...e.values()].filter(o=>o.a!==s&&o.b!==s).map(o=>({...o,peso:o.obras.size,firma:[...o.obras.values()].some(c=>c.tipos.has("firma"))})),r=new Set(a.flatMap(o=>[o.a,o.b]));return{nodos:[...n.values()].filter(o=>o.n!==s&&(o.m||r.has(o.n))),aristas:a}}function ip(n){let{nodos:e,aristas:t}=w_(),i=Math.max(300,n.clientWidth-2),s=Math.round(Math.min(560,Math.max(340,innerHeight*.52,i<500?i*1.15:0))),a=new Map(e.map(p=>[p.n,p])),r=p=>p.n.length*7.2+16;e.sort((p,m)=>m.m-p.m||p.n.localeCompare(m.n)).forEach((p,m)=>{let y=m/e.length*Math.PI*2+.6,E=p.m?.18:.38;p.x=i/2+Math.cos(y)*i*E,p.y=s/2+Math.sin(y)*s*E,p.vx=p.vy=0});let o=Math.min(150,Math.max(80,Math.sqrt(i*s/Math.max(4,e.length))*.62));for(let p=0;p<420;p++){let m=1-p/420;for(let y=0;y<e.length;y++)for(let E=y+1;E<e.length;E++){let v=e[y],S=e[E],w=S.x-v.x,L=S.y-v.y,_=w*w+L*L+.01,R=Math.sqrt(_),U=o*o*.9/_;w/=R,L/=R,v.vx-=w*U,v.vy-=L*U,S.vx+=w*U,S.vy+=L*U}t.forEach(y=>{let E=a.get(y.a),v=a.get(y.b),S=v.x-E.x,w=v.y-E.y,L=Math.hypot(S,w)||1,_=(L-o/Math.min(1.6,1+(y.peso-1)*.15))*.05;S/=L,w/=L,E.vx+=S*_,E.vy+=w*_,v.vx-=S*_,v.vy-=w*_}),e.forEach(y=>{y.vx+=(i/2-y.x)*.008,y.vy+=(s/2-y.y)*.008*(i/s),y.x+=y.vx*m,y.y+=y.vy*m,y.vx*=.55,y.vy*=.55,y.x=Math.max(18,Math.min(i-18,y.x)),y.y=Math.max(22,Math.min(s-18,y.y))})}e.forEach(p=>{p.izq=p.x+r(p)>i-6}),n.innerHTML=`<svg class="mapa" id="mapaR" viewBox="0 0 ${i} ${s}" width="${i}" height="${s}" role="group" aria-label="Mapa de conexiones entre artistas">
      <g>${t.map(p=>{let m=a.get(p.a),y=a.get(p.b);return`<g class="ar ${p.firma?"firma":"trabajo"}" data-k="${me(p.k)}"><line class="hit" x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${y.x.toFixed(1)}" y2="${y.y.toFixed(1)}"/><line class="ln" x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${y.x.toFixed(1)}" y2="${y.y.toFixed(1)}" stroke-width="${(1.4+Math.min(4,p.peso-1)*.9).toFixed(1)}"/></g>`}).join("")}</g>
      <g>${e.map(p=>`<g class="nd ${p.m?"miembro":"fuera"}" data-n="${me(p.n)}" tabindex="0" role="button" aria-label="${me(p.n)}${p.m?", miembro de aurality":""}" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})">
        ${p.m?'<rect x="-7" y="-7" width="14" height="14"/>':'<circle r="6"/>'}<text x="${p.izq?-13:13}" y="4" text-anchor="${p.izq?"end":"start"}">${me(p.n)}</text></g>`).join("")}</g></svg>
    <div class="leyenda"><span><i class="m"></i>Miembro</span><span><i class="f"></i>De fuera</span><span><i class="l1"></i>Firman juntos</span><span><i class="l2"></i>Producci\xF3n, mezcla o participaci\xF3n</span></div>
    <div class="fichared" id="fichaRed" aria-live="polite"><span class="tp">Toca un artista o una l\xEDnea para ver qu\xE9 los une.</span></div>`;let c=fe("mapaR"),l=fe("fichaRed"),u=p=>t.filter(m=>m.a===p||m.b===p),h=(p,m)=>{c.classList.toggle("foco",!!p),c.querySelectorAll(".nd").forEach(y=>y.classList.toggle("on",!!p&&p.has(y.dataset.n))),c.querySelectorAll(".ar").forEach(y=>y.classList.toggle("on",!!m&&m.has(y.dataset.k)))},d=p=>{let m=[...p.roles];return m.filter(y=>!m.some(E=>E!==y&&E.startsWith(y))).join(", ")},f=p=>[...p.obras.values()].map(m=>`<a href="#${m.r.code}">${m.r.code}</a> ${m.tipos.has("firma")?"firman juntos":d(m)}`).join(" \xB7 "),g=null,A=(p,m)=>{if(c.querySelectorAll(".nd").forEach(y=>y.classList.toggle("sel",p==="n"&&y.dataset.n===m)),!p||g&&g.tipo===p&&g.id===m){g=null,h(null),l.innerHTML='<span class="tp">Toca un artista o una l\xEDnea para ver qu\xE9 los une.</span>';return}if(g={tipo:p,id:m},p==="n"){let y=a.get(m),E=u(m),v=y.m&&Cn.find(S=>S.n===m);h(new Set([m,...E.map(S=>S.a===m?S.b:S.a)]),new Set(E.map(S=>S.k))),l.innerHTML=`<div class="nom">${me(m)}</div><div class="tp">${y.m?"Miembro del sello":"Artista de fuera"} \xB7 ${wn(E.length,"conexi\xF3n","conexiones")}</div>
        <ul>${E.map(S=>`<li><b>\xD7 ${me(S.a===m?S.b:S.a)}</b> \u2014 ${f(S)}</li>`).join("")}</ul>${v?`<div class="enlaces"><a class="tecla oscura" href="#a-${v.s}">${me(v.n)} \xB7 perfil</a></div>`:""}`}else{let y=t.find(E=>E.k===m);h(new Set([y.a,y.b]),new Set([m])),l.innerHTML=`<div class="nom">${me(y.a)} \xD7 ${me(y.b)}</div><div class="tp">${wn(y.peso,"lanzamiento","lanzamientos")} en com\xFAn</div><ul>${[...y.obras.values()].map(E=>`<li><a href="#${E.r.code}"><b>${E.r.code}</b> \xB7 ${me(E.r.artist)} \u2014 ${me(kt(E.r))}</a><br>${E.tipos.has("firma")?"Firman juntos":"Trabajo: "+me(d(E))}</li>`).join("")}</ul>`}};c.querySelectorAll(".nd").forEach(p=>{p.onclick=()=>A("n",p.dataset.n),p.onkeydown=m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),A("n",p.dataset.n))},p.onpointerenter=m=>{if(m.pointerType==="mouse"&&!g){let y=u(p.dataset.n);h(new Set([p.dataset.n,...y.map(E=>E.a===p.dataset.n?E.b:E.a)]),new Set(y.map(E=>E.k)))}},p.onpointerleave=m=>{m.pointerType==="mouse"&&!g&&h(null)}}),c.querySelectorAll(".ar").forEach(p=>p.onclick=()=>A("a",p.dataset.k)),c.addEventListener("click",p=>{p.target===c&&A(null)}),hs.matches||(c.querySelectorAll(".ar").forEach((p,m)=>p.animate([{opacity:0},{opacity:1}],{duration:500,delay:250+m*40,fill:"backwards"})),c.querySelectorAll(".nd").forEach((p,m)=>p.firstElementChild.animate([{transform:"scale(0)"},{transform:"scale(1)"}],{duration:380,delay:m*55,easing:"cubic-bezier(.3,1.6,.5,1)",fill:"backwards"})))}var Mf=0;addEventListener("resize",()=>{clearTimeout(Mf),Mf=setTimeout(()=>{tt==="roster"&&ta==="red"&&fe("rosterC")&&ip(fe("rosterC"))},250)});document.addEventListener("click",n=>{let e=n.target.closest("[data-contrata]");e&&(wc=1,hr=e.dataset.contrata)});function C_(n){let e=n.info.bio&&!/por definir/i.test(n.info.bio)?`<p class="bio">${me(n.info.bio)}</p>`:'<p class="bio pend">Biograf\xEDa por definir.</p>',t=di([...n.rs,...n.ps].map(r=>r.format)).join(" \xB7 "),i=(r,o)=>`<a class="fila" href="#${r.code}"><span class="x">${r.code}</span><span class="a">${me(r.artist)}</span><span class="t">${me(o||kt(r))}</span><span class="f x">${me(r.format)}</span><span class="g x">${me(r.genre)}</span><span class="y x">${r.year}</span><span aria-hidden="true">\u2192</span></a>`,s=[["Instagram",n.info.instagram],["Spotify",n.info.spotify],["SoundCloud",n.info.soundcloud]],a=fe("panel");a.innerHTML=`<header class="panel-cab"><div><h2>${me(n.n)}</h2><div class="sub">${me(n.info.role||"Artista")} \xB7 aurality</div></div><a class="tecla" href="#roster">\u2190 Roster</a></header>
    <div class="panel-cuerpo"><div class="fl">${ku(n)}<div class="datos">${e}
      <div class="cifras"><div><span>${n.ps.length?"LANZ. \xB7 PART.":"REFERENCIAS"}</span><b>${n.rs.length}${n.ps.length?" \xB7 "+n.ps.length:""}</b></div><div><span>A\xD1OS</span><b>${Gu(n)}</b></div><div><span>FORMATOS</span><b class="lst">${t}</b></div></div>
      <div class="enlaces">${s.map(([r,o])=>o?`<a class="tecla" href="${me(o)}" target="_blank" rel="noopener">${r} \u2197</a>`:`<span class="tecla" aria-disabled="true">${r} \xB7 sin enlace</span>`).join("")}<a class="tecla oscura" href="#contacto" data-contrata="${me(n.n)}">Contratar</a><a class="tecla" href="#kit-${n.s}">Kit de prensa</a>
        <a class="tecla oscura" href="#catalogo" id="verCat">Ver en el cat\xE1logo</a></div>
      ${n.colab.length?`<div><div class="sub2">COLABORACIONES</div><div class="enlaces">${n.colab.map(r=>zc(r)?`<a class="tecla" href="#a-${Vu(r)}">\xD7 ${me(r)}</a>`:`<span class="tecla" aria-disabled="true">\xD7 ${me(r)}</span>`).join("")}</div></div>`:""}
    </div></div>
    ${n.rs.length?`<div class="sub2">LANZAMIENTOS</div><div class="lista">${n.rs.map(r=>i(r)).join("")}</div>`:""}
    ${n.ps.length?`<div class="sub2">PARTICIPACIONES</div><div class="lista">${n.ps.map(r=>i(r,kt(r)+" \u2014 "+(ra(r).filter(([o])=>o===n.n).map(([,o])=>o).filter(Boolean).join(", ")||"participaci\xF3n"))).join("")}</div>`:""}</div>`,fe("verCat").addEventListener("click",()=>{Gc(),Kn.add(n.n)})}var Ct=(Vt.senal||[]).slice().sort((n,e)=>e.anio-n.anio||e.mes-n.mes),bf=Vt.senal_playlist||"",Iu=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],Oi=Ct.length?Ct[0].anio:2026,R_=`Adem\xE1s de los discos de sus artistas, aurality publica con su propio nombre. Son las ediciones del sello: discos de remixes, recopilatorios y encargos en los que el autor no es un artista, sino el criterio que los junta.

Aqu\xED el trabajo del sello es la curadur\xEDa: elegir a qui\xE9n invitar, qu\xE9 poner al lado de qu\xE9 y en qu\xE9 orden. Es nuestra manera de hacer un disco sin firmar ning\xFAn tema, y la forma m\xE1s directa de ense\xF1ar qu\xE9 entendemos por aurality.

La Se\xF1al mensual nace del mismo sitio: cada mes, una playlist con lo que nos ha mirado de cerca, sea nuestro o no.`;function I_(){let n=fe("panel"),e=Vt.editorial||{},t=et.filter(r=>r.edicion),i=(Vt.proximos||[]).filter(r=>r.edicion),s=Ct[0],a=String((e.texto||"").trim()||R_).split(/\n\s*\n/).map(r=>r.trim()).filter(Boolean);n.innerHTML=`<header class="panel-cab"><div><h2>L\xCDNEA EDITORIAL</h2><div class="sub">Lo que firma el sello \xB7 ediciones y Se\xF1al mensual</div></div></header>
    <div class="panel-cuerpo"><div class="editorial">
      <section class="ed-intro">${a.map((r,o)=>`<p${o?"":' class="lead"'}>${me(r).replace(/\n/g,"<br>")}</p>`).join("")}</section>
      <section><div class="sub2">EDICIONES DEL SELLO${t.length?" \xB7 "+t.length:""}</div>
        ${t.length?`<div class="rejilla">${t.map(ep).join("")}</div>`:`<div class="ed-vacio"><span class="c">AU-ED \xB7 01</span><span>La primera edici\xF3n del sello est\xE1 en preparaci\xF3n.${i.length?" La cuenta atr\xE1s est\xE1 en la portada.":""}</span></div>`}</section>
      ${s?`<section><div class="sub2">SE\xD1AL MENSUAL \xB7 ${wn(Ct.length,"edici\xF3n","ediciones")}</div>
        <a class="ed-senal" href="#senal">${s.cover?`<img src="${me(s.cover)}"${yr(s.cover,"150px")} alt="Portada de la Se\xF1al ${me(s.code)}" loading="lazy" decoding="async">`:""}
          <span class="txt"><span class="k">EN ANTENA \xB7 ${me(Iu[s.mes-1])} ${s.anio}</span><span class="nom">SE\xD1AL MENSUAL <b>${me(s.code)}</b></span><span class="des">${me(s.descripcion||"Lanzamientos, hallazgos y obsesiones del mes.")}</span><span class="tecla">Abrir la Se\xF1al y el archivo \u2192</span></span></a>
        ${Hc("altaE")}</section>`:""}
    </div></div>`,Hu("altaE")}function sp(n){let e=fe("panel"),t=di(Ct.map(r=>r.anio)).sort(),i=r=>Ct.find(o=>o.anio===Oi&&o.mes===r),s=n===Ct[0];e.innerHTML=`<header class="panel-cab"><div><h2>SE\xD1AL MENSUAL</h2><div class="sub">Una playlist que se renueva cada mes \xB7 ${wn(Ct.length,"edici\xF3n","ediciones")} en el registro</div></div>
    ${bf?`<a class="tecla" href="${me(bf)}" target="_blank" rel="noopener">${s?"Escuchar en Spotify \u2197":"Escuchar la edici\xF3n actual \u2197"}</a>`:""}</header>
    <div class="panel-cuerpo">
      <div class="meses" aria-label="Registro \xB7 sintonizador AU-02"><div class="k"><span>REGISTRO \xB7 SINTONIZADOR AU-02</span>
        <span class="anio"><button class="tecla" id="aAnt" aria-label="A\xF1o anterior" ${t[0]<Oi?"":"disabled"}>\u2039</button><b>${Oi}</b><button class="tecla" id="aSig" aria-label="A\xF1o siguiente" ${t[t.length-1]>Oi?"":"disabled"}>\u203A</button></span></div>
        <div class="cas12">${Iu.map((r,o)=>{let c=i(o+1);return`<button ${c?`class="hay" data-c="${c.code}"`:"disabled"} aria-pressed="${c===n}" aria-label="${r} ${Oi}${c?"":", sin edici\xF3n"}"><i></i>${String(o+1).padStart(2,"0")}</button>`}).join("")}</div></div>
      <div class="fl"><img class="portada" src="${me(n.cover)}"${yr(n.cover,Bu)} alt="Portada de SE\xD1AL MENSUAL ${n.code}" decoding="async">
        <div class="datos"><div class="cod">SE\xD1AL MENSUAL \xB7 ${n.code} \xB7 AU-SE\xD1AL-${n.code.replace("_","")}</div>
          <div class="antena ${s?"on":""}"><i></i>${s?"En antena \xB7 es lo que suena ahora en la playlist":"Archivada \xB7 la playlist ya suena con una edici\xF3n posterior"}</div>
          <h3>${Iu[n.mes-1]} ${n.anio}</h3>
          <p class="bio">${me(n.descripcion||"")}</p>
          <div class="cifras"><div><span>TEMAS</span><b>${n.temas||"\u2014"}</b></div><div><span>DURACI\xD3N</span><b>${me(n.duracion||"\u2014")}</b></div><div><span>DESTACADOS</span><b>${(n.destacados||[]).length}</b></div></div>
          ${n.temas?"":'<p class="bio pend">N\xFAmero de temas por confirmar.</p>'}
        </div></div>
      <div class="sub2">${s?"SUENAN ESTE MES":"SONARON ESE MES"}</div>
      <div class="destacados">${(n.destacados||[]).map(([r,o,c],l)=>`<div><span class="n">${String(l+1).padStart(2,"0")}</span><span><span class="a">${me(r)}</span>
        <span class="t">${o?`\xAB${me(o)}\xBB${c?" \xB7 prod. "+me(c):""}`:"Tema por confirmar"}</span></span></div>`).join("")}</div>
      ${Hc("altaS")}
    </div>`,Hu("altaS"),e.querySelectorAll(".cas12 button.hay").forEach(r=>r.onclick=()=>{location.hash="s-"+r.dataset.c});let a=r=>{Oi+=r;let o=Ct.find(c=>c.anio===Oi);o?location.hash="s-"+o.code:sp(n)};fe("aAnt").onclick=()=>a(-1),fe("aSig").onclick=()=>a(1)}var P_=(()=>{try{return localStorage.getItem("au-alta")==="1"}catch{return!1}})(),Lc=P_,Hc=n=>`<form class="alta${Lc?" hecha":""}" id="${n}" novalidate aria-label="Recibe la Se\xF1al">
    <div class="k"><i aria-hidden="true"></i>RECIBE LA SE\xD1AL</div>
    ${Lc?'<p class="bio">Est\xE1s en la lista. La pr\xF3xima Se\xF1al te llega al correo.</p>':`<p class="bio">Una vez al mes, en tu correo: la Se\xF1al, los lanzamientos del sello y lo pr\xF3ximo.</p>
    <div class="linea"><label class="trampa" for="${n}M">Tu email</label><input id="${n}M" type="email" autocomplete="email" placeholder="tu@correo.com" required>
      <button class="tecla oscura" type="submit">Apuntarme</button></div>
    <div class="trampa" aria-hidden="true"><input id="${n}B" tabindex="-1" autocomplete="off"></div>
    <span class="err" id="${n}E" role="alert"></span>
    <p class="nota">Solo para enviarte la Se\xF1al. Te das de baja cuando quieras.</p>`}</form>`;function Hu(n){let e=fe(n);!e||Lc||(e.onsubmit=t=>{t.preventDefault();let i=fe(n+"M").value.trim(),s=e.querySelector("button");if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i)){fe(n+"E").textContent="El email no parece v\xE1lido.";return}fe(n+"E").textContent="",s.disabled=!0,s.textContent="Apuntando\u2026";let a=Vt.contacto||{},r=o=>{if(!o){s.disabled=!1,s.textContent="Apuntarme",fe(n+"E").textContent="No se ha podido apuntar. Prueba otra vez en un rato.";return}Lc=!0;try{localStorage.setItem("au-alta","1")}catch{}e.outerHTML=Hc(n)};if(!aa||!a.email){r(!0);return}fetch("https://formsubmit.co/ajax/"+encodeURIComponent(a.email),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:"aurality \xB7 alta en la Se\xF1al \xB7 "+i,_template:"table",_captcha:"false",_honey:fe(n+"B").value,_replyto:i,alta:"Recibe la Se\xF1al",email:i})}).then(o=>o.json()).then(o=>r(o&&(o.success===!0||o.success==="true"))).catch(()=>r(!1))})}var L_=["El riesgo","La imagen","Lo digital","La calle"];function N_(){let n=Vt.manifiesto||{},e=n.parrafos||[],t=n.codigos&&n.codigos.length?n.codigos:L_,i=zi.length>1?zi:["Escena A","Escena B"],s=y=>me(y).replace(/«([^»]+)»/g,"<q>$1</q>"),a=y=>{let E=y.match(/[^.!?]+[.!?]+/g)||[y],v=E.filter(S=>/[:;]/.test(S)&&S.length<120);return(v.length?v:E).reduce((S,w)=>w.trim().length<S.trim().length?w:S).trim()},r=y=>{let E=y%2===1,v=i[2*y%i.length],S=i[(2*y+1)%i.length];return`<div class="cruce" aria-hidden="true"><span class="pin a e ${E?"de":"iz"}"><i></i>${me(v)}<small>escena</small></span><span class="codigo">${me(t[y%t.length])}</span><span class="pin b x ${E?"iz":"de"}"><i></i>${me(S)}<small>escena</small></span></div>`};fe("panel").innerHTML=`<header class="panel-cab"><div><h2>MANIFIESTO</h2><div class="sub">aura-of-reality \xB7 Broadcasted from Elda</div></div></header>
    <div class="panel-cuerpo"><article class="puente"><svg class="hilo" aria-hidden="true"><path class="guia"/><path class="h"/></svg>
      <h3>${me(n.titular||"")}</h3><div class="ini"><i></i>aurality tiende el hilo</div>
      ${e.map((y,E)=>`${E?r(E-1):""}<section class="tramo"><span class="n">${String(E+1).padStart(2,"0")} / ${String(e.length).padStart(2,"0")}</span><p class="clave">${s(a(y))}</p><p>${s(y.replace(a(y),"").replace(/\s+/g," ").trim())}</p></section>`).join("")}
      <div class="fin"><i></i><p>${me(n.cierre||"")}</p></div><div class="firma"><i></i><s></s><span>aurality \xB7 Elda</span></div></article></div>`;let o=fe("panel").querySelector(".puente"),c=o.querySelector(".hilo"),l=c.querySelector(".h"),u=c.querySelector(".guia"),h=o.parentElement,d=[],f=[],g=0,A=y=>{let E=y.getBoundingClientRect(),v=o.getBoundingClientRect();return[E.left+E.width/2-v.left,E.top+E.height/2-v.top]},p=()=>{d=[A(o.querySelector(".ini i"))],o.querySelectorAll(".cruce").forEach(S=>{d.push(A(S.querySelector(".pin.e i")),A(S.querySelector(".pin.x i")))});let y=A(o.querySelector(".fin i")),E=d[d.length-1];d.push([E[0],y[1]-(matchMedia("(max-width:820px)").matches?78:104)],y);let v="M"+d.map(S=>S[0].toFixed(1)+" "+S[1].toFixed(1)).join("L");l.setAttribute("d",v),u.setAttribute("d",v),f=[0];for(let S=1;S<d.length;S++)f.push(f[S-1]+Math.hypot(d[S][0]-d[S-1][0],d[S][1]-d[S-1][1]));g=f[f.length-1],l.style.strokeDasharray=g,m()},m=()=>{if(!o.isConnected){removeEventListener("scroll",m),removeEventListener("resize",p);return}let y=o.getBoundingClientRect(),E=h.scrollHeight>h.clientHeight+4?h.scrollTop+h.clientHeight>=h.scrollHeight-4:scrollY+innerHeight>=document.documentElement.scrollHeight-4,v=hs.matches||E?1/0:innerHeight*.72-y.top,S=0;for(let w=1;w<d.length;w++){let[,L]=d[w-1],[,_]=d[w];if(v>=_)S=f[w];else{v>L&&(S=f[w-1]+(f[w]-f[w-1])*(v-L)/(_-L));break}}l.style.strokeDashoffset=g-S,o.querySelectorAll(".pin,.codigo,.tramo,.ini,.fin").forEach(w=>{let L=w.matches(".pin,.ini,.fin")?w.querySelector("i"):w,_=L.getBoundingClientRect();w.classList.toggle("on",v>=(w.matches(".tramo")?_.top+30:_.top+_.height/2)-y.top)})};o.classList.add("vivo"),p(),h.addEventListener("scroll",m,{passive:!0}),addEventListener("scroll",m,{passive:!0}),addEventListener("resize",p),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>o.isConnected&&p()),new ResizeObserver(()=>o.isConnected&&p()).observe(o)}var Tf=n=>String(n||"").split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean).map(e=>`<p>${me(e).replace(/\n/g,"<br>")}</p>`).join(""),Ef=()=>{let n=new Date;return En(n.getDate())+"."+En(n.getMonth()+1)+"."+n.getFullYear()};function D_(n){let e=fe("panel"),t=Vt.contacto||{},i=Vt.kit||{},s='<button class="tecla oscura" type="button" id="bImprime">Imprimir / guardar PDF</button>',a=t.email?`<p>${n?"Contrataci\xF3n y prensa":"Prensa y contrataci\xF3n"}: <b class="dato">${me(t.email)}</b>${t.instagram?` \xB7 Instagram @${me(t.instagram.replace(/\/$/,"").split("/").pop())}`:""}</p>`:"";if(n){let r=n.info,o=r.bio&&!/por definir/i.test(r.bio)?r.bio:"",c=(r.bio_corta||"").trim()||(o?o.split(/(?<=[.!?])\s/)[0]:""),l=(r.fotos_prensa||[]).map(f=>typeof f=="string"?{img:f,cr:""}:{img:f&&f.imagen||"",cr:f&&f.credito||""}).filter(f=>f.img);!l.length&&r.photo&&l.push({img:r.photo,cr:""});let u=[...n.rs,...n.ps],h=di(u.map(f=>f.genre).filter(f=>f&&f!=="\u2014")).slice(0,4).join(" \xB7 "),d=[["Instagram",r.instagram],["Spotify",r.spotify],["SoundCloud",r.soundcloud]].filter(([,f])=>f);e.innerHTML=`<header class="panel-cab"><div><h2>KIT DE PRENSA</h2><div class="sub">${me(n.n)} \xB7 aurality \xB7 ${Ef()}</div></div><a class="tecla" href="#a-${n.s}">\u2190 Perfil</a></header>
      <div class="panel-cuerpo"><article class="kit">
        <div class="kit-cab">${ku(n)}<div><div class="cod">ARTISTA \xB7 AURALITY${r.origen?" \xB7 "+me(r.origen):""}</div><h3>${me(n.n)}</h3>${r.role?`<div class="rol">${me(r.role)}</div>`:""}${c?`<p class="lead">${me(c)}</p>`:""}</div></div>
        <div class="cifras"><div><span>REFERENCIAS</span><b>${n.rs.length}${n.ps.length?" + "+n.ps.length:""}</b></div><div><span>A\xD1OS</span><b>${Gu(n)}</b></div>${h?`<div><span>G\xC9NEROS</span><b class="x">${me(h)}</b></div>`:""}</div>
        ${o?`<section><div class="sub2">BIOGRAF\xCDA</div>${Tf(o)}</section>`:""}
        ${u.length?`<section><div class="sub2">DISCOGRAF\xCDA EN AURALITY</div><ul class="kit-lista">${u.map(f=>`<li><a href="#${f.code}"><b>${f.code}</b> \xB7 ${me(f.artist)} \u2014 ${me(kt(f))} \xB7 ${me(f.format)} \xB7 ${f.year}${n.ps.includes(f)?" \xB7 participaci\xF3n":""}</a></li>`).join("")}</ul></section>`:""}
        ${l.length?`<section><div class="sub2">FOTOS DE PRENSA</div><div class="fotos">${l.map(f=>`<a class="foto" href="${me(f.img)}" download target="_blank" rel="noopener" aria-label="Descargar foto${f.cr?" \xB7 "+me(f.cr):""}"><img src="${me(f.img)}" alt="${me(n.n)}" loading="lazy"></a>`).join("")}</div>${l.some(f=>f.cr)?`<div class="credito">Fotos: ${me(di(l.map(f=>f.cr).filter(Boolean)).join(" \xB7 "))}</div>`:""}</section>`:""}
        ${d.length?`<section><div class="sub2">ESCUCHAR Y SEGUIR</div><div class="enlaces">${d.map(([f,g])=>`<a class="tecla" href="${me(g)}" target="_blank" rel="noopener">${f} \u2197</a>`).join("")}</div></section>`:""}
        <section><div class="sub2">MATERIAL Y CONTRATACI\xD3N</div>${a}<div class="enlaces">${r.kit_enlace?`<a class="tecla" href="${me(r.kit_enlace)}" target="_blank" rel="noopener">Fotos en alta y material \u2197</a>`:""}${r.rider?`<a class="tecla" href="${me(r.rider)}" target="_blank" rel="noopener">Rider t\xE9cnico (PDF) \u2197</a>`:""}<a class="tecla oscura no-imprime" href="#contacto" data-contrata="${me(n.n)}">Contratar</a><span class="no-imprime">${s}</span></div></section>
      </article></div>`}else{let r=Math.min(...et.map(l=>+l.year).filter(Boolean)),o=Vt.manifiesto||{},c=(i.texto||"").trim()||[o.titular,(o.parrafos||[])[0]].filter(Boolean).join(`

`);e.innerHTML=`<header class="panel-cab"><div><h2>KIT DE PRENSA</h2><div class="sub">El sello \xB7 aurality \xB7 ${Ef()}</div></div><a class="tecla" href="#contacto">\u2190 Contacto</a></header>
      <div class="panel-cuerpo"><article class="kit">
        <div><img class="logo" src="img/lettering.png" alt="aurality" width="802" height="245"><div class="rol" style="margin-top:12px;font:500 12px/1.4 var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:#3b4150">Sello y plataforma creativa \xB7 Elda</div>${c?`<div class="lead-bloque">${Tf(c).replace("<p>",'<p class="lead">')}</div>`:""}</div>
        <div class="cifras"><div><span>ARTISTAS</span><b>${Cn.length}</b></div><div><span>REFERENCIAS</span><b>${et.length}</b></div>${isFinite(r)?`<div><span>DESDE</span><b>${r}</b></div>`:""}<div><span>BASE</span><b>ELDA</b></div></div>
        <section><div class="sub2">ROSTER</div><ul class="kit-lista">${Cn.map(l=>`<li><a href="#kit-${l.s}"><b>${me(l.n)}</b>${l.info.role?" \xB7 "+me(l.info.role):""} \xB7 kit de prensa \u2192</a></li>`).join("")}</ul></section>
        <section><div class="sub2">\xDALTIMOS LANZAMIENTOS</div><ul class="kit-lista">${et.slice(0,6).map(l=>`<li><a href="#${l.code}"><b>${l.code}</b> \xB7 ${me(l.artist)} \u2014 ${me(kt(l))} \xB7 ${l.year}</a></li>`).join("")}</ul></section>
        <section><div class="sub2">LOGOS</div><div class="logos"><a href="img/lettering.png" download="aurality-lettering.png"><img class="logo" src="img/lettering.png" alt="Lettering de aurality" style="width:220px"></a><a href="apple-touch-icon.png" download="aurality-isotipo.png"><img class="isotipo" src="apple-touch-icon.png" alt="Isotipo de aurality"></a></div>
          <div class="credito no-imprime">Pulsa un logo para descargarlo. \xDAsalo tal cual: sin recomponer el lettering con otra tipograf\xEDa.</div></section>
        <section><div class="sub2">MATERIAL Y CONTACTO</div>${a}<div class="enlaces">${i.enlace?`<a class="tecla" href="${me(i.enlace)}" target="_blank" rel="noopener">Logos en alta y fotos \u2197</a>`:""}<a class="tecla oscura no-imprime" href="#contacto">Escribir</a><span class="no-imprime">${s}</span></div></section>
      </article></div>`}fe("bImprime").onclick=()=>print()}var wf=[{k:"demo",n:"Demos",d:"Mandar m\xFAsica",intro:"Escuchamos todo lo que llega. M\xE1ndanos un enlace privado (SoundCloud, Drive, Dropbox), no archivos adjuntos: dos o tres temas bastan. Si encaja, te escribimos."},{k:"contratacion",n:"Contrataci\xF3n",d:"Bolos, festivales, sesiones",intro:"Para contratar a un artista de aurality o un showcase del sello. Cu\xE9ntanos fecha, ciudad y qu\xE9 tienes en mente."},{k:"prensa",n:"Prensa",d:"Medios y entrevistas",intro:"Entrevistas, rese\xF1as, estrenos y material para medios. Te contestamos con lo que necesites."}],wc=0,hr="",Cf=n=>{let e=Cn.find(t=>t.n===n)||(n?null:Cn[0]);return e?"#kit-"+e.s:"#kit"};function ap(){let n=Vt.contacto||{},e=wf[wc],t=(n["intro_"+e.k]||"").trim()||e.intro,i=(r,o,c="",l="text")=>`<div class="campo"><label for="${r}">${o}</label><input id="${r}" type="${l}" ${c}></div>`,s={demo:`<div class="dos">${i("cNom","Nombre o proyecto",'autocomplete="name"')}${i("cMail","Email",'autocomplete="email"',"email")}</div>
      ${i("cLink","Enlace a la m\xFAsica (privado)",'inputmode="url" placeholder="https://"',"url")}`,contratacion:`<div class="dos">${i("cNom","Nombre y promotora o sala",'autocomplete="name"')}${i("cMail","Email",'autocomplete="email"',"email")}</div>
      <div class="dos"><div class="campo"><label for="cArt">Artista</label><select id="cArt">${[...Cn.map(r=>r.n),"SHOWCASE AURALITY (VARIOS)"].map(r=>`<option${r===hr?" selected":""}>${me(r)}</option>`).join("")}</select></div>
        ${i("cFecha","Fecha (si la hay)","","date")}</div>${i("cCiudad","Ciudad y sala o festival")}`,prensa:`<div class="dos">${i("cNom","Nombre",'autocomplete="name"')}${i("cMedio","Medio")}</div>${i("cMail","Email",'autocomplete="email"',"email")}`}[e.k];fe("panel").innerHTML=`<header class="panel-cab"><div><h2>CONTACTO</h2><div class="sub">Enviar se\xF1al \xB7 demos, contrataci\xF3n y prensa</div></div></header>
    <div class="panel-cuerpo">
      <div class="caminos" role="group" aria-label="\xBFQu\xE9 nos quieres mandar?">${wf.map((r,o)=>`<button class="camino" type="button" data-i="${o}" aria-pressed="${o===wc}"><span class="n">${String(o+1).padStart(2,"0")} \xB7 ${r.n}</span><span class="d">${r.d}</span></button>`).join("")}</div>
      <p class="bio intro">${me(t)}</p>
      <form class="form" id="formC" novalidate>${s}
      <div class="campo"><label for="cMsg">Mensaje</label><textarea id="cMsg" required placeholder="${e.k==="demo"?"Qui\xE9n eres, qu\xE9 nos mandas y por qu\xE9 aurality.":e.k==="contratacion"?"Tipo de evento, horario, condiciones\u2026":"Qu\xE9 preparas y para cu\xE1ndo."}"></textarea></div>
      <div class="trampa" aria-hidden="true"><label for="cBot">No rellenar</label><input id="cBot" tabindex="-1" autocomplete="off"></div>
      <div class="campo"><span class="err" id="cErr" role="alert"></span></div>
      <div class="enlaces"><button class="tecla oscura" type="submit">Enviar ${e.k==="demo"?"demo":e.k==="contratacion"?"petici\xF3n":"mensaje"}</button>
        ${e.k==="contratacion"?`<a class="tecla" id="kitArt" href="${Cf(hr)}">Kit de prensa del artista</a>`:e.k==="prensa"?'<a class="tecla" href="#kit">Kit de prensa del sello</a>':""}</div>
      ${n.nota&&e.k==="demo"?`<p class="bio pend">${me(n.nota)}</p>`:""}
    </form><div id="cListo"></div>
    <div class="sub2">DIRECTO</div><div class="enlaces">
      ${n.email?`<span class="tecla">Email \xB7 <span class="dato" id="cEmail">${me(n.email)}</span></span><button class="tecla oscura" type="button" id="cCopEmail">Copiar email</button>`:'<span class="tecla" aria-disabled="true">Email \xB7 por definir</span>'}
      ${n.instagram?`<a class="tecla" href="${me(n.instagram)}" target="_blank" rel="noopener">Instagram \xB7 @${me(n.instagram.replace(/\/$/,"").split("/").pop())} \u2197</a>`:'<span class="tecla" aria-disabled="true">Instagram \xB7 por definir</span>'}</div>
    ${Hc("altaC")}</div>`,Hu("altaC"),fe("panel").querySelectorAll(".camino").forEach(r=>r.onclick=()=>{wc=+r.dataset.i,ap()}),fe("cArt")&&(fe("cArt").onchange=r=>{hr=r.target.value,fe("kitArt").href=Cf(hr)});let a=fe("cCopEmail");a&&(a.onclick=()=>navigator.clipboard.writeText(n.email).then(()=>{a.textContent="Copiado"},()=>{let r=document.createRange();r.selectNodeContents(fe("cEmail"));let o=getSelection();o.removeAllRanges(),o.addRange(r),a.textContent="Seleccionado"})),fe("formC").onsubmit=r=>{r.preventDefault();let o=_=>fe(_)?fe(_).value.trim():"",c=o("cNom"),l=o("cMail"),u=o("cMsg"),h=o("cLink"),d=o("cMedio"),f=o("cArt"),g=o("cFecha"),A=o("cCiudad"),p=c?/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(l)?e.k==="demo"&&!/^https?:\/\/\S+/.test(h)?"Falta el enlace a la m\xFAsica (tiene que empezar por https://).":e.k==="prensa"&&!d?"Falta el medio.":u?"":"Falta el mensaje.":"El email no parece v\xE1lido.":"Falta el nombre.";if(fe("cErr").textContent=p,p)return;let m={camino:e.n,nombre:c,email:l,...e.k==="demo"?{enlace:h}:{},...e.k==="contratacion"?{artista:f,fecha:g||"\u2014",lugar:A||"\u2014"}:{},...e.k==="prensa"?{medio:d}:{},mensaje:u},y=`aurality \xB7 ${e.n.toUpperCase()} \xB7 ${e.k==="contratacion"?f+" \xB7 ":e.k==="prensa"?d+" \xB7 ":""}${c}`,E=y+`
`+Object.entries(m).filter(([_])=>_!=="mensaje"&&_!=="camino").map(([_,R])=>`${_}: ${R}`).join(`
`)+`

`+u,v=fe("formC").querySelector("button[type=submit]"),S=v.textContent,w=(_,R)=>{fe("cListo").innerHTML=`<div class="listo" role="status"><b class="dato">${_}</b><span class="bio">${R}</span><pre id="cTexto">${me(E)}</pre><div><button class="tecla" id="cCopiar" type="button">Copiar mensaje</button></div></div>`,fe("cCopiar").onclick=()=>navigator.clipboard.writeText(E).then(()=>{fe("cCopiar").textContent="Copiado"},()=>{let U=document.createRange();U.selectNodeContents(fe("cTexto"));let z=getSelection();z.removeAllRanges(),z.addRange(U),fe("cCopiar").textContent="Selecci\xF3nalo y copia"}),fe("cListo").scrollIntoView({block:"nearest"})},L=n.email?`C\xF3piala y env\xEDala a <span class="dato">${me(n.email)}</span>.`:"Copia el mensaje y env\xEDalo por Instagram.";if(!aa||!n.email){w("Se\xF1al preparada",L);return}v.disabled=!0,v.textContent="Enviando\u2026",fetch("https://formsubmit.co/ajax/"+encodeURIComponent(n.email),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:y,_template:"table",_captcha:"false",_honey:fe("cBot").value,_replyto:l,...m})}).then(_=>_.json().catch(()=>({}))).then(_=>{if(String(_.success)!=="true")throw new Error(_.message||"error");fe("formC").reset(),fe("cListo").innerHTML='<div class="listo" role="status"><b class="dato">Se\xF1al enviada</b><span class="bio">Ha llegado a aurality. Gracias por escribir.</span></div>',fe("cListo").scrollIntoView({block:"nearest"})}).catch(()=>w("No se ha podido enviar","Ha fallado la conexi\xF3n. "+L)).finally(()=>{v.disabled=!1,v.textContent=S})}}var tt="escucha",dr=null,Pu=0,Rf={escucha:["01 \xB7 SECCI\xD3N","ESCUCHA"],catalogo:["02 \xB7 SECCI\xD3N","CAT\xC1LOGO"],roster:["03 \xB7 SECCI\xD3N","ROSTER"],senal:["04 \xB7 SECCI\xD3N","SE\xD1AL"],editorial:["04 \xB7 SECCI\xD3N","EDITORIAL"],manifiesto:["05 \xB7 SECCI\xD3N","MANIFIESTO"],contacto:["06 \xB7 SECCI\xD3N","CONTACTO"]},rp=n=>{n=n.replace(/\/+$/,"");let e=n.toLowerCase();return/^archivo(-au\d+)?$/.test(e)?"archivo"+(e.length>7?"-"+e.slice(8).toUpperCase():""):e.startsWith("senal-")?"s-"+n.slice(6):Cn.some(t=>t.s===e)?"a-"+e:n},fi=null;function U_(){let n=fe("panel"),e=n.querySelector(".panel-cuerpo"),t=fe("resultados");n.querySelector(".panel-cab h2").textContent="ARCHIVO";let i=document.createElement("div");i.className="mesa-mandos",[n.querySelector(".filtrosM"),n.querySelector(".conteo"),fe("faders")].forEach(h=>h&&i.appendChild(h)),n.insertBefore(i,e);let s=document.createElement("div");s.className="lector",s.innerHTML='<span class="k">FICHA EN LECTURA</span><b class="cod"></b><span class="dat"></span><span class="art"></span><span class="tit"></span>',n.appendChild(s);let a=document.createElement("div"),r=document.createElement("div");a.className="mesa-escena",r.className="mesa-plano",a.appendChild(r),t.classList.add("pista"),t.insertBefore(a,t.firstChild);let o=null,c="",l=h=>{if(!h||h===c)return;c=h;let d=et.find(g=>g.code===h);if(!d)return;s.querySelector(".cod").textContent=d.code,s.querySelector(".dat").textContent=[d.format,d.genre,d.year].filter(Boolean).join(" \xB7 "),s.querySelector(".art").textContent=d.artist,s.querySelector(".tit").textContent=kt(d),t.querySelectorAll(".ref.leida").forEach(g=>g.classList.remove("leida"));let f=t.querySelector(`.ref[data-c="${h}"]`);f&&f.classList.add("leida")},u=fi={cols:4,filaH:300,vis:[],s(){return rs.matches?Math.max(0,-t.getBoundingClientRect().top+a.offsetTop):e.scrollTop},mide(){let h=t.querySelector(".rejilla");if(!h)return;h.parentNode!==r&&r.appendChild(h),t.querySelectorAll("a.ref").forEach(A=>{let p="#archivo-"+A.dataset.c;A.getAttribute("href")!==p&&A.setAttribute("href",p)}),this.vis=[...h.querySelectorAll(".ref:not([hidden])")].sort((A,p)=>(+A.style.order||0)-(+p.style.order||0)),this.cols=rs.matches?innerWidth>=600?3:2:e.clientWidth<760?3:4,h.style.setProperty("--cols",this.cols);let d=rs.matches?Math.max(360,innerHeight-(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--dock"))||132)-56):e.clientHeight;a.style.height=d+"px";let f=this.vis[0];this.filaH=f?f.offsetHeight+(parseFloat(getComputedStyle(h).rowGap)||0):300;let g=Math.ceil(this.vis.length/this.cols);t.style.height=d+Math.max(0,g-1)*this.filaH+"px",this.mueve()},mueve(){let h=this.s();if(r.style.setProperty("--s",h.toFixed(1)),!o){let d=Math.max(0,Math.round(h/this.filaH)),f=this.vis[Math.min(this.vis.length-1,d*this.cols)];f&&l(f.dataset.c)}}};e.addEventListener("scroll",()=>u.mueve(),{passive:!0}),t.addEventListener("pointerover",h=>{let d=h.target.closest&&h.target.closest(".ref");d&&h.pointerType==="mouse"&&(o=d,l(d.dataset.c))}),t.addEventListener("pointerleave",()=>{o=null,u.mueve()}),t.addEventListener("focusin",h=>{let d=h.target.closest&&h.target.closest(".ref");if(!d)return;l(d.dataset.c);let f=u.vis.indexOf(d),g=Math.floor(f/u.cols)*u.filaH;f>=0&&!rs.matches&&(e.scrollTop=g)}),u.mide(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{fi===u&&u.mide()})}addEventListener("scroll",()=>{fi&&rs.matches&&fi.mueve()},{passive:!0});addEventListener("resize",()=>{fi&&fi.mide()});function O_(){let n=fe("panel");n.querySelectorAll('a[href="#catalogo"]').forEach(e=>{e.setAttribute("href","#archivo"),/cat[aá]logo/i.test(e.textContent)&&e.children.length===0&&(e.textContent=e.textContent.replace(/cat[aá]logo/i,t=>t[0]==="C"?"ARCHIVO":"Archivo"))}),n.querySelectorAll('a[href^="#AU"]').forEach(e=>e.setAttribute("href","#archivo-"+e.getAttribute("href").slice(1)))}var Tc={ficha:"catalogo",artista:"roster",senal:"editorial"},If=0,Pf=0,op="",F_=".portada, .retrato, .sinf, .sinp, .ed-senal img",B_=".fl > .portada, .fl > .retrato, .fl > .sinf, .fl > .sinp",Lf=n=>{let e=fe("panel");if(e.hidden)return null;let t=null;try{t=n&&e.querySelector(`a[href="#${CSS.escape(n)}"]`)}catch{}let i=t&&t.querySelector(F_)||e.querySelector(B_);if(!i)return null;let s=i.getBoundingClientRect();return s.bottom>0&&s.top<innerHeight&&s.width>0?i:null};function Wu(n){let e=location.hash.length>1?decodeURIComponent(location.hash.slice(1)):rp(decodeURIComponent(location.pathname.slice(1))),t=op,i=n&&document.startViewTransition&&!hs.matches&&!document.hidden?Lf(e):null;if(!i)return Nf(n);i.style.viewTransitionName="viajero",document.documentElement.classList.add("vt");let s=null;document.startViewTransition(()=>{i.style.viewTransitionName="",Nf(n),s=Lf(t),s&&(s.style.viewTransitionName="viajero")}).finished.catch(()=>{}).then(()=>{s&&(s.style.viewTransitionName=""),document.documentElement.classList.remove("vt")})}function Nf(n){let e=tt,t=scrollY,i=fe("panel").querySelector(".panel-cuerpo"),s=i?i.scrollTop:0,r=n&&n.type==="hashchange"||location.hash.length>1?decodeURIComponent(location.hash.slice(1)):rp(decodeURIComponent(location.pathname.slice(1))),o=/^archivo(-|$)/i.test(r),c=et.find(m=>m.code===(o?r.slice(8):r).toUpperCase()),l=r.startsWith("a-")&&Cn.find(m=>m.s===r.slice(2)),u=r==="senal"?Ct[0]:r.startsWith("s-")?Ct.find(m=>m.code===r.slice(2)):null,h=r.startsWith("kit-")?Cn.find(m=>m.s===r.slice(4)):null;tt=o?c?"ficha":"catalogo":["catalogo","roster","manifiesto","contacto","registro","kit","editorial"].includes(r)||h?h?"kit":r:u?"senal":c?"ficha":l?"artista":"escucha";let d="/"+(o?"archivo"+(c?"-"+c.code:""):tt==="escucha"?"":tt==="ficha"?c.code:tt==="artista"?l.s:tt==="senal"?r==="senal"?"senal":"senal-"+u.code:tt==="kit"?h?"kit-"+h.s:"kit":r);if(location.pathname+location.hash!==d)try{history.replaceState(history.state,"",d)}catch{}let f=tt==="ficha"?"catalogo":tt==="artista"?"roster":tt==="registro"?"escucha":tt==="kit"?h?"roster":"contacto":tt==="senal"?"editorial":tt;document.querySelectorAll(".placa,.teclado a").forEach(m=>m.setAttribute("aria-current",m.dataset.s===f?"page":"false")),Fc(),fe("menuN").textContent=Rf[f][0],fe("menuT").textContent=Rf[f][1];let g=document.querySelector(".lateral"),A=g.hidden&&tt==="escucha";g.hidden=tt!=="escucha",A&&(g.scrollLeft=0),document.querySelector(".estado").hidden=tt!=="escucha",fe("lema").hidden=tt!=="escucha";let p=fe("panel");p.hidden=tt==="escucha",fr&&(fr=!1,Be.encender().then(Qn)),tt==="catalogo"&&u_(),tt==="ficha"&&(__(c),x_(fe("panel"))),tt==="roster"&&np(),tt==="artista"&&C_(l),tt==="senal"&&(Oi=u.anio,sp(u)),tt==="manifiesto"&&N_(),tt==="contacto"&&ap(),tt==="registro"&&Wf(),tt==="editorial"&&I_(),tt==="kit"&&D_(h),fi=null,p.classList.toggle("abierta",o),p.classList.toggle("depie",o&&tt==="ficha"),document.body.classList.toggle("con-depie",o&&tt==="ficha"),o&&(tt==="ficha"?O_():U_()),tt!=="escucha"&&(p.style.animation="none",p.offsetWidth,p.style.animation="",Tc[tt]===e&&(Pf=s),p.querySelector(".panel-cuerpo").scrollTop=Tc[e]===tt?Pf:0),rs.matches&&(Tc[tt]===e&&(If=t),scrollTo(0,Tc[e]===tt?If:0),document.querySelector(".barra").classList.remove("oculta")),dr={catalogo:"p4",ficha:"hero",roster:"p3",artista:"p3",senal:"p2",registro:"p2",kit:"hero",editorial:"p2",manifiesto:"hero",contacto:"p5"}[tt]||null,Pu=tt==="senal"?u.mes:0,na=.6,op=o?"archivo"+(c?"-"+c.code:""):tt==="escucha"?"":tt==="ficha"?c.code:tt==="artista"?"a-"+l.s:tt==="senal"?"s-"+u.code:r}var z_=(()=>{let n=et.filter(t=>t.fecha&&Date.now()-new Date(t.fecha+"T00:00:00")<6048e5),e=di([...n,...et.filter(t=>t.destacado)]).slice(0,3);return e.length?e:et.slice(0,1)})(),pr=(()=>{try{return JSON.parse(sessionStorage.getItem("au-cerrados")||"[]")}catch{return[]}})(),Pt=(()=>{let n=Date.now(),e=(()=>{try{return new URLSearchParams(location.search).get("demo")==="visita"}catch{return!1}})(),t=null;try{t=JSON.parse(sessionStorage.getItem("au-novedades")||"null")}catch{}if(t&&!e)return t;let i=null;try{i=JSON.parse(localStorage.getItem("au-visita")||"null")}catch{}try{localStorage.setItem("au-visita",JSON.stringify({t:n,rel:et.map(a=>a.code),sen:Ct[0]?Ct[0].code:""}))}catch{}if(e&&(i={t:n-12*864e5,rel:et.slice(1).map(a=>a.code),sen:"\u2014"}),!i||!i.t||n-i.t<6*36e5)return null;let s={desde:i.t,nuevos:et.filter(a=>!(i.rel||[]).includes(a.code)).map(a=>a.code).slice(0,3),sen:Ct[0]&&i.sen&&Ct[0].code!==i.sen?Ct[0].code:null,emitidas:0,ahora:0,demo:e};try{sessionStorage.setItem("au-novedades",JSON.stringify(s))}catch{}return s})();async function V_(){if(!Pt)return;let n=[];if(aa)try{let i=await fetch("/tx/registro",{cache:"no-store"});i.ok&&(n=await i.json())}catch{}let e=n.filter(i=>new Date(i.hasta).getTime()>Pt.desde).length+(Pt.demo?2:0),t=Ou.filter(i=>!i.b).length+(Pt.demo?1:0);if(!(e===Pt.emitidas&&t===Pt.ahora)){Pt.emitidas=e,Pt.ahora=t;try{sessionStorage.setItem("au-novedades",JSON.stringify(Pt))}catch{}pr.includes("visita")||cp()}}var k_=n=>{let e=Math.round(n/36e5),t=Math.round(n/864e5);return e<36?wn(e,"hora","horas"):t<60?wn(t,"d\xEDa","d\xEDas"):wn(Math.round(t/30),"mes","meses")};function G_(){if(!Pt||pr.includes("visita"))return"";let n=[...Pt.nuevos.map(e=>{let t=et.find(i=>i.code===e);return t?`<li><i></i><a href="#${t.code}">Nuevo \xB7 ${t.code} \xB7 ${me(t.artist)} \u2014 ${me(kt(t))}</a></li>`:""}),Pt.sen?`<li><i></i><a href="#senal">Se\xF1al ${me(Pt.sen)} en antena</a></li>`:"",Pt.emitidas?`<li><i></i><a href="#registro">${Pt.emitidas===1?"Se emiti\xF3 una transmisi\xF3n":`Se emitieron ${Pt.emitidas} transmisiones`} mientras no estabas</a></li>`:"",Pt.ahora?`<li><i></i><span>${Pt.ahora===1?"Hay una transmisi\xF3n":`Hay ${Pt.ahora} transmisiones`} emitiendo ahora mismo, en alg\xFAn punto del dial</span></li>`:""].filter(Boolean);return n.length?`<article class="ficha nota visita" data-c="visita" aria-label="Desde tu \xFAltima visita">
      <div class="eti"><span>Desde tu \xFAltima visita \xB7 hace ${k_(Date.now()-Pt.desde)}</span><span class="der"><button class="cierra" aria-label="Cerrar aviso">\xD7</button></span></div>
      <ul class="nov">${n.join("")}</ul></article>`:""}function cp(){let n=fe("notas"),e=z_.filter(t=>!pr.includes(t.code));n.innerHTML=G_()+e.map((t,i)=>`<article class="ficha nota" data-c="${t.code}" style="--o:${i}" aria-label="${i?"Lanzamiento destacado":"\xDAltimo lanzamiento destacado"}: ${me(t.artist)}">
      <div class="eti"><span>${t===et[0]?"\xDAltimo lanzamiento":"Lanzamiento"}</span><span class="der"><span class="dest"><i></i>Destacado</span><button class="cierra" aria-label="Cerrar aviso">\xD7</button></span></div>
      <div class="cuerpo">${t.cover?`<img src="${me(t.cover)}"${yr(t.cover,"96px")} alt="Portada de ${me(t.title)}" width="96" height="96" decoding="async">`:`<span class="placa-cod" style="width:96px;height:96px;display:grid;place-items:center;background:#2c3242;font:700 11px var(--f-mono)">${t.code}</span>`}
        <div><div class="cod">${t.code} \xB7 ${me(t.format)} \xB7 ${t.year}</div><div class="art">${me(t.artist)}</div><div class="tit">${me(kt(t))}</div></div></div>
      <div class="acciones">${t.soundcloud?`<a class="tecla" href="${me(t.soundcloud)}" target="_blank" rel="noopener">Escuchar en SoundCloud \u2197</a>`:t.spotify?`<a class="tecla" href="${me(t.spotify)}" target="_blank" rel="noopener">Escuchar en Spotify \u2197</a>`:""}<a class="tecla oscura" href="#${t.code}">Ficha</a></div></article>`).join(""),Su(),n.parentNode.scrollLeft=0,n.querySelectorAll(".cierra").forEach(t=>t.onclick=()=>{let i=t.closest(".nota");pr.push(i.dataset.c);try{sessionStorage.setItem("au-cerrados",JSON.stringify(pr))}catch{}i.classList.add("fuera"),i.style.zIndex=20,setTimeout(()=>{i.remove(),Su()},380),Su(i)})}function Su(n){let e=fe("notas"),t=[...e.querySelectorAll(".nota")].filter(i=>i!==n);e.style.setProperty("--n",t.length||1),t.forEach((i,s)=>{i.style.setProperty("--i",s),i.classList.toggle("atras",s>0)})}var Nc=864e5,Ec=n=>new Date(n+"T00:00:00"),Lu=(()=>{try{return new URLSearchParams(location.search).get("demo")}catch{return null}})(),H_=(()=>{if(!Lu||!et[0])return Vt.proximos||[];let n={anuncio:22.4,revelado:8.6,fragmento:1.6}[Lu],e=new Date(Date.now()+(n||0)*Nc),t=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return n?[{...et[0],code:"AU0213",artist:"ARTISTA DE PRUEBA",title:"T\xCDTULO DE PRUEBA",fecha:t,presave:"#",fragmentos:et[0].fragmentos||[]}]:[]})();function W_(){let n=Date.now(),e=H_[0];if(e){let o=(Ec(e.fecha)-n)/Nc;if(o<=30)return{fase:o>14?"anuncio":o>3?"revelado":"fragmento",r:e,obj:Ec(e.fecha),d:o}}let t=Lu==="salida"?et[0]:et.find(o=>o.fecha&&n-Ec(o.fecha)>=0&&n-Ec(o.fecha)<Nc);if(t)return{fase:"salida",r:t};let i=Ct[0];if(!i)return null;let s=i.mes%12+1,a=i.anio+(i.mes===12?1:0),r=new Date(a,s-1,1);return{fase:"reposo",obj:r>n?r:null,code:String(s).padStart(2,"0")+"_"+String(a).slice(-2)}}var Df="",Nu=null,Uf=null,En=n=>String(n).padStart(2,"0"),Of=n=>n?n.split("-").reverse().join("."):"";function Ff(n){if(!n.obj)return`<div class="reloj msg" id="proxReloj"><b>${n.fase==="salida"?"YA DISPONIBLE":"EN PREPARACI\xD3N"}</b></div>`;let e=Math.max(0,n.obj-Date.now()),t=Math.floor(e/Nc),i=Math.floor(e/36e5)%24,s=Math.floor(e/6e4)%60,a=Math.floor(e/1e3)%60;return`<div class="reloj${t<1?" rojo":""}" id="proxReloj" role="timer" aria-label="Faltan ${t} d\xEDas, ${i} horas y ${s} minutos"><b data-g="88">${En(t)}</b><small>D</small><b data-g="88:88:88">${En(i)}:${En(s)}:${En(a)}</b></div>`}var q_=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function $_(n){let e=fe("proxImg");if(!e)return;let t=e.getContext("2d");clearInterval(Uf);let i=n.fase==="reposo"?Ct[0]&&Ct[0].cover:n.fase!=="anuncio"&&n.r.cover;if(!i){let o=()=>{let c=t.createImageData(48,48);for(let l=0;l<c.data.length;l+=4)c.data[l]=207,c.data[l+1]=224,c.data[l+2]=255,c.data[l+3]=Math.random()<.33?190:0;t.putImageData(c,0,0)};o(),Uf=setInterval(()=>{!document.hidden&&tt==="escucha"&&o()},140);return}let s=n.fase==="revelado"?Math.round(6+(1-Math.max(0,Math.min(1,(n.d-4)/10)))*42):48,a=new Image;a.onload=()=>{let o=document.createElement("canvas");o.width=o.height=s;let c=o.getContext("2d",{willReadFrequently:!0});c.drawImage(a,0,0,s,s);let l=c.getImageData(0,0,s,s).data,u=t.createImageData(48,48);for(let h=0;h<48;h++)for(let d=0;d<48;d++){let f=(Math.floor(h*s/48)*s+Math.floor(d*s/48))*4;if((.3*l[f]+.59*l[f+1]+.11*l[f+2])/255>(q_[h%4*4+d%4]+.5)/16){let A=(h*48+d)*4;u.data[A]=207,u.data[A+1]=224,u.data[A+2]=255,u.data[A+3]=235}}t.putImageData(u,0,0)};let r=Cu(i,320);r&&(a.onerror=()=>{a.onerror=null,a.src=i}),a.src=r||i}function lp(){let n=fe("proximo"),e=W_();if(!e){n.innerHTML="",n.hidden=!0;return}let t=e.fase+(e.r?e.r.code:"")+(e.fase==="fragmento"||e.fase==="revelado"?Math.ceil(e.d):"");if(t===Df){let d=fe("proxReloj");d&&e.obj&&(d.outerHTML=Ff(e));return}Df=t;let i=e.r,s=e.fase!=="reposo",a=i&&i.fragmentos?i.fragmentos.length:0,r=e.fase==="fragmento"&&a?Math.min(a-1,e.d>2?0:e.d>1?1:2):-1;Nu=r>=0?i.fragmentos[r]:null;let o=e.fase==="reposo"?`PR\xD3XIMA SE\xD1AL \xB7 ${e.code} \xB7 LANZAMIENTOS, HALLAZGOS Y OBSESIONES DEL MES`:e.fase==="anuncio"?`SE\xD1AL ENTRANTE \xB7 ${i.code} \xB7 SALE EL ${Of(i.fecha)}`:e.fase==="salida"?`${i.code} \xB7 ${i.artist} \u2014 ${kt(i)} \xB7 DESDE HOY`:`${i.code} \xB7 ${i.artist} \u2014 ${kt(i)} \xB7 ${Of(i.fecha)}`,c=(d,f,g="")=>f?`<a class="bt" href="${me(f)}"${/^https?:/.test(f)?' target="_blank" rel="noopener"':""}${g}>${d}</a>`:`<span class="bt" aria-disabled="true">${d}</span>`,l=Nu?`<button class="bt" type="button" id="bFrag">\u25B6 FRAG ${r+1}/${a}</button>`:e.fase==="salida"?c("ESCUCHAR \u2197",i.soundcloud||i.spotify):c("FRAGMENTO"),u=c("PRESAVE"+((e.fase==="revelado"||e.fase==="fragmento")&&i.presave?" \u2197":""),(e.fase==="revelado"||e.fase==="fragmento")&&i.presave),h=e.fase==="reposo"?c("SE\xD1AL","#senal"):e.fase==="salida"?c("FICHA","#"+i.code):c("FICHA");n.classList.toggle("activo",s),n.innerHTML=`<div class="cab"><span>AU-06 \xB7 ${{anuncio:"Anuncio",revelado:"Revelado",fragmento:"Fragmento",salida:"Salida",reposo:"Reposo"}[e.fase]}</span><i class="piloto${s?" on":""}" aria-hidden="true"></i></div>
    <div class="lcd"><canvas id="proxImg" width="48" height="48" aria-hidden="true"></canvas><div><div class="lin" id="proxLin"><span>${me(o)}</span></div>${Ff(e)}</div></div>
    <div class="teclas">${l}${u}${h}<span class="altavoz" aria-hidden="true"></span></div>`,fe("bFrag")&&(fe("bFrag").onclick=X_),$_(e),requestAnimationFrame(()=>{let d=fe("proxLin");if(d&&d.scrollWidth>d.clientWidth+2){let f=d.firstChild;f.textContent=f.textContent+" \xB7 "+f.textContent+" \xB7 ",d.classList.add("mueve"),d.style.setProperty("--dur",Math.round(f.scrollWidth/2/26)+"s")}}),n.hidden=!1}var Ui=null,Mu=!1;function X_(){let n=fe("bFrag");if(Ui&&!Ui.paused){Ui.pause();return}Ui=new Audio(Nu),Ui.preload="auto",Be.on&&(Be.apagar(),Mu=!0,Qn());let e=()=>{n&&(n.textContent=n.textContent.replace("\u25A0","\u25B6")),Mu&&(Mu=!1,Be.encender().then(Qn))};Ui.onended=e,Ui.onpause=e,Ui.play().then(()=>{n&&(n.textContent=n.textContent.replace("\u25B6","\u25A0"))}).catch(e)}lp();setInterval(()=>{tt==="escucha"&&!document.hidden&&lp()},1e3);Gf().then(V_);setInterval(Gf,300*1e3);cp();{let n=fe("bIG"),e=(Vt.contacto||{}).instagram||n.href,t=e.replace(/\/+$/,"").split("/").pop();n.href=e,n.querySelector("small").textContent="@"+t+" \u2197",/Android/i.test(navigator.userAgent)&&n.addEventListener("click",i=>{i.preventDefault(),location.href=`intent://instagram.com/_u/${t}/#Intent;package=com.instagram.android;scheme=https;S.browser_fallback_url=${encodeURIComponent(e)};end`})}(Vt.manifiesto||{}).titular&&(fe("lemaT").textContent=Vt.manifiesto.titular);{let n=fe("panel"),e=null,t=()=>{e&&(e.classList.remove("en-mano"),e.style.removeProperty("--rx"),e.style.removeProperty("--ry"),e=null)};n.addEventListener("pointermove",i=>{if(i.pointerType!=="mouse"||hs.matches)return;let s=i.target instanceof Element&&i.target.matches(".fl > img.portada")?i.target:null;if(s!==e&&t(),!s)return;let a=s.getBoundingClientRect(),r=(i.clientX-a.left)/a.width-.5,o=(i.clientY-a.top)/a.height-.5;e=s,s.classList.add("en-mano"),s.style.setProperty("--ry",(r*9).toFixed(2)+"deg"),s.style.setProperty("--rx",(-o*9).toFixed(2)+"deg")}),n.addEventListener("pointerleave",t)}new MutationObserver(()=>{matchMedia("(max-width:820px)").matches||fe("panel").querySelectorAll(":scope > .panel-cuerpo:not([tabindex])").forEach(n=>{n.tabIndex=0})}).observe(fe("panel"),{childList:!0});addEventListener("hashchange",Wu);addEventListener("popstate",n=>{location.hash||Wu(n)});Wu();window.__directo&&tt!=="escucha"&&Oc(!1);window.__carga?.mark("datos",et.length+" REF. \xB7 SE\xD1AL "+(Ct[0]?Ct[0].code:"\u2014"));addEventListener("resize",Fc);requestAnimationFrame(Fc);var qu=n=>{fe("faja").classList.toggle("abierta",n),fe("velo").classList.toggle("on",n),fe("bMenu").setAttribute("aria-expanded",n),n&&Fc()};fe("bMenu").onclick=()=>qu(!fe("faja").classList.contains("abierta"));fe("velo").onclick=()=>qu(!1);document.querySelectorAll(".faja a").forEach(n=>n.addEventListener("click",()=>setTimeout(()=>qu(!1),250)));var Bf=matchMedia("(pointer: coarse)").matches||innerWidth<821,us=-3*Math.PI/6,up=0;_r.cola.length>=3&&!Be.on&&!Vi&&(Be.canal=-1,us=Dc(-1),wt());try{let n=localStorage.getItem("au-canal"),e=+n;n!==null&&!Be.on&&Number.isInteger(e)&&e<=11&&e>=(Vi||!_r.cola.length?0:-1)&&(Be.canal=e,us=Dc(e),wt())}catch{}await new Promise(n=>{let e=()=>requestAnimationFrame(()=>setTimeout(n,0));window.__directo?setTimeout(e,500):e()});{let le=function(ge,Le){let Te=Le*400/2160,Ce=Math.min(460,Math.max(240,ge*.26)),ke=Te+Ce/2;O.position.copy(H),O.lookAt($),O.updateMatrixWorld();let Ze=Math.tan(Tn.degToRad(O.fov/2));for(let[Je,K]of Object.entries(k)){let be=S[Je][0];ce[Je]||(be.updateMatrixWorld(!0),V.setFromObject(be).getSize(Y),ce[Je]=[Y.x/be.scale.x,Y.y/be.scale.x]),ie.copy(K.p0).project(O),ie.x=ke/ge*2-1,ie.unproject(O),K.p.copy(ie);let xe=Le/2/((O.position.z-K.p.z)*Ze);K.s=Math.min(K.s0,Ce*.86/(ce[Je][0]*xe),(Le-170)*.72/(ce[Je][1]*xe))}},T=function(){let ge=innerWidth,Le=innerHeight;Z=ge/Le<.85?"alto":"ancho";let Te=w[Z];e.setSize(ge,Le,!1),O.aspect=ge/Le,O.fov=Te.fov,O.updateProjectionMatrix(),H.set(...Te.cam),$.set(...Te.look);for(let[Ce,[ke]]of Object.entries(S)){let[Ze,Je]=Te.p[Ce];ke.position.set(...Ze),ke.scale.setScalar(Je),F[Ce]={q:F[Ce]?.q||ke.quaternion.clone(),p:ke.position.clone(),s:Je}}Z==="ancho"&&le(ge,Le)},we=function(ge){re.set(ge.clientX/innerWidth*2-1,-(ge.clientY/innerHeight)*2+1),G.setFromCamera(re,O);for(let[Le,[Te]]of Object.entries(S))if(G.intersectObject(Te,!0).length)return Le;return null},ye=function(ge){if(Pe.matches&&!_e.hidden&&ye.uno){if(ye.tap||(ye.tap=ge),ge-ye.tap>1600){ne=ge,document.hidden||requestAnimationFrame(ye);return}}else ye.tap=0;let Le=Math.max(0,(ge-ne)/1e3),Te=Math.min(.05,Le);ne=ge,!De&&Fi&&ge-up>3e3&&Le<.5&&(B++,ze+=Le,B===120&&(ze/B>1/28?(t=Math.max(1,t*.8),e.setPixelRatio(t),De=t<=1):De=!0,B=0,ze=0));let Ce=Fi,ke=q?0:(ge-x)/1e3,Ze=ke/30%1;Ee+=((Ce?1:.45)-Ee)*Math.min(1,Te*1.6),e.toneMappingExposure=Ee,oe+=(Be.nivel()-oe)*Math.min(1,Te*12),na=Math.max(0,na-Te*.9),I=Math.max(0,I-Te*4),X.x+=(ae.x-X.x)*Math.min(1,Te*2.5),X.y+=(ae.y-X.y)*Math.min(1,Te*2.5);let Je=Ce?1:.12;for(let[be,[xe]]of Object.entries(S)){let Re=M[be],Ne=F[be],Se=Ze*Je,Ye=Se-Re.warp*(Math.sin(C*(Se-Re.ph))+Math.sin(C*Re.ph))/C;P.setFromAxisAngle(new j(...Re.axis),Re.dir*C*Ye),D.setFromAxisAngle(new j(...Re.sway),v(Re.sa)*Math.sin(C*(Re.bk*Se)+Re.bp)),xe.quaternion.copy(Ne.q).multiply(D).multiply(P),be==="hero"&&(te.set(X.y*.12,X.x*.22,0),J.setFromEuler(te),xe.quaternion.premultiply(J));let We=be==="p2"||be==="hero"?Math.sin(na*Math.PI)*(be==="hero"?.35:.6):0;We&&(J.setFromAxisAngle(new j(0,1,0),We),xe.quaternion.multiply(J)),xe.position.set(Ne.p.x,Ne.p.y+Re.bob*(Math.sin(C*Re.bk*Se+Re.bp)-Math.sin(Re.bp))-(be==="p5"?I*10:0),Ne.p.z);let ut=k[be],dt=dr&&Z==="ancho";if(se[be]=Tn.clamp(se[be]+((dt&&dr===be?1:0)-se[be])*Math.min(1,Te*2.2),0,1),se[be]>.001&&ut?(xe.position.lerp(ut.p,se[be]),ut.q&&xe.quaternion.slerp(ut.q,se[be]),xe.scale.setScalar(Tn.lerp(Ne.s,ut.s,se[be]))):dt&&dr!==be&&(xe.position.z-=1300*W),be==="p3"){let sn=Math.min(1,oe*6),_n=se[be]>.001&&ut?Tn.lerp(Ne.s,ut.s,se[be]):Ne.s;R.forEach(([Wc,qc])=>{Wc.position.z=qc+sn*9}),xe.scale.setScalar(_n*(1+sn*.025))}}W=Tn.clamp(W+((dr&&Z==="ancho"?1:0)-W)*Math.min(1,Te*1.8),0,1),U.cursores&&U.cursores.forEach(([be,xe],Re)=>{let Ne=U.TR0+Math.round(z[Re]*12)*U.STEP;be.position.y+=(Ne-be.position.y)*Math.min(1,Te*6),xe.position.y=be.position.y});let K=Pu?-Pu*Math.PI/6:us;de+=(K-de)*Math.min(1,Te*3),L&&(L.rotation.z=de),O.position.set(H.x+X.x*40,H.y-X.y*22,H.z),O.lookAt($),e.render(i,O),ye.uno||(ye.uno=!0,window.__carga?.mark("escena","EN DIRECTO")),document.hidden||requestAnimationFrame(ye)},n=fe("escena"),e=new yc({canvas:n,antialias:!0,alpha:!0}),t=Math.min(devicePixelRatio,Bf?2:1.75);e.setPixelRatio(t),e.setClearColor(0,0),e.toneMapping=Ya,e.toneMappingExposure=.45,e.shadowMap.enabled=!0,e.shadowMap.type=Qi;let i=new Zi;i.environment=new js(e).fromScene(new Mc,.04).texture,i.environmentIntensity=.5,i.fog=new Ma(13883872,900,5600);let s=document.createElement("canvas");s.width=4,s.height=512;let a=s.getContext("2d"),r=a.createLinearGradient(0,0,0,512);r.addColorStop(0,"#9dafc5"),r.addColorStop(.7,"#d3d9e0"),r.addColorStop(1,"#d3d9e0"),a.fillStyle=r,a.fillRect(0,0,4,512);let o=new bi(s);o.colorSpace=Ot,i.background=o;let c=170,l=16,u=2048,h=u/(c*l),d=document.createElement("canvas");d.width=d.height=u;let f=d.getContext("2d");f.fillStyle="#93a3b8",f.fillRect(0,0,u,u);let g=26,A=()=>(g=g*16807%2147483647)/2147483647;for(let ge=0;ge<l;ge++)for(let Le=0;Le<l;Le++){let Te=(ge+.5)*c*h,Ce=(Le+.5)*c*h,ke=27*h;A()<.2?(f.fillStyle="rgba(40,58,88,0.35)",f.beginPath(),f.arc(Te+3*h,Ce+5*h,ke*1.06,0,7),f.fill(),f.fillStyle="#f6f6f3",f.beginPath(),f.arc(Te,Ce,ke,0,7),f.fill()):(f.strokeStyle="rgba(40,58,88,0.16)",f.lineWidth=2.2*h,f.beginPath(),f.arc(Te,Ce,ke,0,7),f.stroke())}let p=new bi(d);p.colorSpace=Ot,p.wrapS=p.wrapT=Ps,p.anisotropy=e.capabilities.getMaxAnisotropy();let m=6e4;p.repeat.set(m/(c*l),m/(c*l));let y=new vt(new ci(m,m),new pn({map:p,roughness:.85}));y.rotation.x=-Math.PI/2,y.position.y=-400,y.receiveShadow=!0,i.add(y),await af();let E=df,v=Tn.degToRad,S={hero:[of(E),[-150,-40,0],[-16,28,0],1.45],p2:[cf(10),[-560,250,-520],[22,18,-6],1.05],p3:[lf(),[230,230,-620],[20,-14,10],1.05],p4:[uf(),[150,-250,-760],[-8,16,96],1.1],p5:[hf(E),[-560,-235,-260],[6,-14,-5],.9]},w={ancho:{fov:42,cam:[-120,-150,1150],look:[-120,-90,0],p:{hero:[[-150,-40,0],1.45],p2:[[-560,250,-520],1.05],p3:[[230,230,-620],1.05],p4:[[150,-250,-760],1.1],p5:[[-560,-235,-260],.9]}},alto:ff};for(let[,[ge,Le,Te,Ce]]of Object.entries(S))ge.position.set(...Le),ge.rotation.set(v(Te[0]),v(Te[1]),v(Te[2])),ge.scale.setScalar(Ce),i.add(ge);window.__carga?.mark("piezas","5 \xB7 OK");let L=S.p2[0].children.find(ge=>ge.isGroup);L&&(L.rotation.z=us);let _=null;S.p3[0].traverse(ge=>{!_&&ge.userData&&ge.userData.Rp&&(_=ge)});let R=_?[1,2].map(ge=>_.children[ge]).filter(Boolean).map(ge=>[ge,ge.position.z]):[],U=S.p4[0].userData,z=[4,9,7].map(ge=>ge/12);Kf=ge=>{z=ge};let k={p4:{p:new j(-520,-40,140),q:new Bt().setFromEuler(new Zt(-.06,.32,0)),s:1.4},hero:{p:new j(-470,10,40),q:null,s:.82},p5:{p:new j(-500,-10,200),q:new Bt().setFromEuler(new Zt(-.1,.34,.02)),s:1.15},p2:{p:new j(-500,0,160),q:new Bt().setFromEuler(new Zt(-.05,.36,0)),s:1.15},p3:{p:new j(-505,-10,140),q:new Bt().setFromEuler(new Zt(-.08,.34,.04)),s:1.25}};for(let ge of Object.values(k))ge.p0=ge.p.clone(),ge.s0=ge.s;let ie=new j,V=new Sn,Y=new j,ce={},se={hero:0,p2:0,p3:0,p4:0,p5:0},W=0,Z="ancho",N=new Hs(16777215,1.7);N.position.set(-500,1300,700),N.target.position.set(0,-400,-300),i.add(N.target),N.castShadow=!0,N.shadow.mapSize.set(2048,2048),N.shadow.radius=6,N.shadow.bias=-4e-4,N.shadow.normalBias=.8,Object.assign(N.shadow.camera,{left:-1400,right:1400,top:1400,bottom:-1400,near:100,far:4500}),i.add(N);let ee=new Hs(14674165,.5);ee.position.set(300,-120,260),i.add(ee);let O=new Gt(42,1,5,4e4),H=new j,$=new j,F={};T(),addEventListener("resize",T);let M={hero:{axis:[0,0,1],dir:-1,warp:0,ph:0,bob:9,bk:1,bp:0,sway:[0,0,1],sa:1.5},p2:{axis:[0,1,0],dir:-1,warp:.55,ph:.18,bob:16,bk:2,bp:1.3,sway:[1,0,0],sa:3},p3:{axis:[1,0,0],dir:-1,warp:.5,ph:.62,bob:14,bk:1,bp:2.6,sway:[0,0,1],sa:3},p4:{axis:[0,1,0],dir:1,warp:.6,ph:.4,bob:12,bk:3,bp:4.1,sway:[0,0,1],sa:2.5},p5:{axis:[0,1,0],dir:1,warp:.45,ph:.85,bob:15,bk:2,bp:5.2,sway:[1,0,0],sa:3}},C=Math.PI*2,P=new Bt,D=new Bt,J=new Bt,te=new Zt,q=matchMedia("(prefers-reduced-motion: reduce)").matches,ae=new Ie(0,0),re=new Ie,G=new Xa,X={x:0,y:0},ve={p5:"AU-05 \xB7 Pulsador \xB7 reproducir / pausar",p2:"AU-02 \xB7 Sintonizador \xB7 cambiar de canal",hero:"AU-01 \xB7 aurality",p3:"AU-03 \xB7 Altavoz \xB7 late con la radio",p4:"AU-04 \xB7 Corredor \xB7 filtros del cat\xE1logo (fase 2)"},Ae=fe("rotulo"),Me=null;addEventListener("pointermove",ge=>{if(ae.set(ge.clientX/innerWidth*2-1,ge.clientY/innerHeight*2-1),!Fi||ge.target!==document.body&&ge.target!==n&&!ge.target.classList.contains("grano")){Me=null,Ae.classList.remove("on"),n.style.cursor="";return}Me=we(ge),n.style.cursor=Me==="p5"||Me==="p2"?"pointer":"",Me?(Ae.textContent=ve[Me],Ae.style.left=ge.clientX+"px",Ae.style.top=ge.clientY+"px",Ae.classList.add("on")):Ae.classList.remove("on")}),n.style.pointerEvents="auto",addEventListener("click",ge=>{if(!Fi||ge.target!==n&&ge.target!==document.body)return;let Le=we(ge);Le==="p5"&&(gr(),I=1),Le==="p2"&&ki(Be.canal+1),Bf&&Le&&(Ae.textContent=ve[Le],Ae.style.left=Math.min(ge.clientX,innerWidth-260)+"px",Ae.style.top=ge.clientY+"px",Ae.classList.add("on"),clearTimeout(Ae.t),Ae.t=setTimeout(()=>Ae.classList.remove("on"),1800))});let B=0,ze=0,De=!1,I=0,x=performance.now(),ne=x,oe=0,de=us,Ee=.45,Pe=matchMedia("(max-width:820px)"),_e=document.getElementById("panel");requestAnimationFrame(ye),document.addEventListener("visibilitychange",()=>{document.hidden||(ne=performance.now(),requestAnimationFrame(ye))}),window.__listo=!0}(function n(){let e=Be.nivel(),t=Math.min(24,Math.round(Math.pow(Math.min(1,e*3.2),.85)*24)),i=zf.children;for(let s=0;s<24;s++)i[s].classList.toggle("on",s<t),i[s].classList.toggle("pico",s>=21);requestAnimationFrame(n)})();
