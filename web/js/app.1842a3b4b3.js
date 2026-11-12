var Fh=0,Ol=1,Bh=2;var Qi=1,zh=2,Hs=3,Ri=0,$t=1,$n=2,Xn=0,Ws=1,Fl=2,Bl=3,zl=4,Vh=5;var es=100,kh=101,Gh=102,Hh=103,Wh=104,qh=200,$h=201,Xh=202,Yh=203,Vl=204,kl=205,Zh=206,Jh=207,jh=208,Kh=209,Qh=210,ed=211,td=212,nd=213,id=214,Jr=0,jr=1,Kr=2,Rs=3,Qr=4,eo=5,to=6,no=7,Po=0,sd=1,ad=2,Un=0,Gl=1,Hl=2,Wl=3,ql=4,$l=5,Xl=6,Ya=7;var Yl=300,Ii=301,ts=302,Lo=303,No=304,Za=306,Is=1e3,Gn=1001,io=1002,Bt=1003,rd=1004;var Ja=1005;var Wt=1006,Do=1007;var Pi=1008;var cn=1009,Zl=1010,Jl=1011,qs=1012,Uo=1013,On=1014,Mn=1015,Fn=1016,Oo=1017,Fo=1018,$s=1020,jl=35902,Kl=35899,Ql=1021,eu=1022,bn=1023,Hn=1026,Li=1027,Bo=1028,zo=1029,Ni=1030,Vo=1031;var ko=1033,ja=33776,Ka=33777,Qa=33778,er=33779,Go=35840,Ho=35841,Wo=35842,qo=35843,$o=36196,Xo=37492,Yo=37496,Zo=37488,Jo=37489,tr=37490,jo=37491,Ko=37808,Qo=37809,ec=37810,tc=37811,nc=37812,ic=37813,sc=37814,ac=37815,rc=37816,oc=37817,cc=37818,lc=37819,uc=37820,hc=37821,dc=36492,fc=36494,pc=36495,mc=36283,gc=36284,nr=36285,vc=36286;var xa=2300,so=2301,Yr=2302,Ml=2303,bl=2400,Tl=2401,El=2402;var od=3200;var ir=0,cd=1,ui="",Ft="srgb",_a="srgb-linear",ya="linear",pt="srgb";var Zr=7680;var ld=519,ud=512,hd=513,dd=514,xc=515,fd=516,pd=517,_c=518,md=519,gd=35044;var tu="300 es",Dn=2e3,Ps=2001;function yp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ap(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vd(){let n=Aa("canvas");return n.style.display="block",n}var ah={},Ls=null;function nu(...n){let e="THREE."+n.shift();Ls?Ls("log",e,...n):console.log(e,...n)}function xd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=xd(n);let e="THREE."+n.shift();if(Ls)Ls("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ke(...n){n=xd(n);let e="THREE."+n.shift();if(Ls)Ls("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Yi(...n){let e=n.join(" ");e in ah||(ah[e]=!0,je(...n))}function _d(n,e,t){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}var yd={[Jr]:jr,[Kr]:to,[Qr]:no,[Rs]:eo,[jr]:Jr,[to]:Kr,[no]:Qr,[eo]:Rs},Wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rh=1234567,pa=Math.PI/180,Ns=180/Math.PI;function ns(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function iu(n,e){return(n%e+e)%e}function Sp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Mp(n,e,t){return n!==e?(t-n)/(e-n):0}function ma(n,e,t){return(1-t)*n+t*e}function bp(n,e,t,i){return ma(n,e,1-Math.exp(-t*i))}function Tp(n,e=1){return e-Math.abs(iu(n,e*2)-e)}function Ep(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function wp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Cp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Rp(n,e){return n+Math.random()*(e-n)}function Ip(n){return n*(.5-Math.random())}function Pp(n){n!==void 0&&(rh=n);let e=rh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lp(n){return n*pa}function Np(n){return n*Ns}function Dp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Up(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Op(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fp(n,e,t,i,s){let a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+i)/2),u=r((e+i)/2),d=a((e-i)/2),h=r((e-i)/2),f=a((i-e)/2),g=r((i-e)/2);switch(s){case"XYX":n.set(o*u,c*d,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*d,o*l);break;case"ZXZ":n.set(c*d,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*u,o*l);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Tn={DEG2RAD:pa,RAD2DEG:Ns,generateUUID:ns,clamp:rt,euclideanModulo:iu,mapLinear:Sp,inverseLerp:Mp,lerp:ma,damp:bp,pingpong:Tp,smoothstep:Ep,smootherstep:wp,randInt:Cp,randFloat:Rp,randFloatSpread:Ip,seededRandom:Pp,degToRad:Lp,radToDeg:Np,isPowerOfTwo:Dp,ceilPowerOfTwo:Up,floorPowerOfTwo:Op,setQuaternionFromProperEuler:Fp,normalize:Qt,denormalize:ws},Pe=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*s+e.x,this.y=a*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,r,o){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=a[r+0],f=a[r+1],g=a[r+2],y=a[r+3];if(d!==y||c!==h||l!==f||u!==g){let p=c*h+l*f+u*g+d*y;p<0&&(h=-h,f=-f,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let A=Math.acos(p),M=Math.sin(A);m=Math.sin(m*A)/M,o=Math.sin(o*A)/M,c=c*m+h*o,l=l*m+f*o,u=u*m+g*o,d=d*m+y*o}else{c=c*m+h*o,l=l*m+f*o,u=u*m+g*o,d=d*m+y*o;let A=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=A,l*=A,u*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,a,r){let o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=a[r],h=a[r+1],f=a[r+2],g=a[r+3];return e[t]=o*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-o*f,e[t+2]=l*g+u*f+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),d=o(a/2),h=c(i/2),f=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(a-l)*f,this._z=(r-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(a-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(r-s)/f,this._x=(a+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+r*o+s*l-a*c,this._y=s*u+r*c+a*o-i*l,this._z=a*u+r*l+i*c-s*o,this._w=r*u-i*o-s*c-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+a*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+a*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*s-o*i),u=2*(o*t-a*s),d=2*(a*i-r*t);return this.x=t+c*l+r*d-o*u,this.y=i+c*u+o*l-a*d,this.z=s+c*d+a*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-a*o,this.y=a*r-i*c,this.z=i*o-s*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qc=new Z,oh=new zt,nt=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,a,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,c,l)}set(e,t,i,s,a,r,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=i,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],y=s[0],p=s[3],m=s[6],A=s[1],M=s[4],v=s[7],S=s[2],w=s[5],L=s[8];return a[0]=r*y+o*A+c*S,a[3]=r*p+o*M+c*w,a[6]=r*m+o*v+c*L,a[1]=l*y+u*A+d*S,a[4]=l*p+u*M+d*w,a[7]=l*m+u*v+d*L,a[2]=h*y+f*A+g*S,a[5]=h*p+f*M+g*w,a[8]=h*m+f*v+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*o*l-i*a*u+i*o*c+s*a*l-s*r*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*r-o*l,h=o*c-u*a,f=l*a-r*c,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*l-u*i)*y,e[2]=(o*i-s*r)*y,e[3]=h*y,e[4]=(u*t-s*c)*y,e[5]=(s*a-o*t)*y,e[6]=f*y,e[7]=(i*c-l*t)*y,e[8]=(r*t-i*a)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,r,o){let c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*r+l*o)+r+e,-s*l,s*c,-s*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(el.makeScale(e,t)),this}rotate(e){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(el.makeRotation(-e)),this}translate(e,t){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},el=new nt,ch=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lh=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bp(){let n={enabled:!0,workingColorSpace:_a,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===pt&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pt&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_a]:{primaries:e,whitePoint:i,transfer:ya,toXYZ:ch,fromXYZ:lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:ch,fromXYZ:lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),n}var lt=Bp();function ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fs,ao=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fs===void 0&&(fs=Aa("canvas")),fs.width=e.width,fs.height=e.height;let s=fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=fs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Aa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ri(a[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ri(t[i]/255)*255):t[i]=ri(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zp=0,Ds=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(tl(s[r].image)):a.push(tl(s[r]))}else a=tl(s);i.url=a}return t||(e.images[this.uuid]=i),i}};function tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ao.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var Vp=0,nl=new Z,tn=class n extends Wn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Gn,s=Gn,a=Wt,r=Pi,o=bn,c=cn,l=n.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=ns(),this.name="",this.source=new Ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nl).x}get height(){return this.source.getSize(nl).y}get depth(){return this.source.getSize(nl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Yl;tn.DEFAULT_ANISOTROPY=1;var St=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,v=(f+1)/2,S=(m+1)/2,w=(u+h)/4,L=(d+y)/4,_=(g+p)/4;return M>v&&M>S?M<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(M),s=w/i,a=L/i):v>S?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=w/s,a=_/s):S<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(S),i=L/a,s=_/a),this.set(i,s,a,t),this}let A=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(d-y)/A,this.z=(h-u)/A,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ro=class extends Wn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},a=new tn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ds(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends ro{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Sa=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var oo=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ut=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,a,r,o,c,l,u,d,h,f,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,c,l,u,d,h,f,g,y,p)}set(e,t,i,s,a,r,o,c,l,u,d,h,f,g,y,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=a,m[5]=r,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/ps.setFromMatrixColumn(e,0).length(),a=1/ps.setFromMatrixColumn(e,1).length(),r=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,a=e.z,r=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){let h=r*u,f=r*d,g=o*u,y=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-y*l,t[9]=-o*c,t[2]=y-h*l,t[6]=g+f*l,t[10]=r*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,g=l*u,y=l*d;t[0]=h+y*o,t[4]=g*o-f,t[8]=r*l,t[1]=r*d,t[5]=r*u,t[9]=-o,t[2]=f*o-g,t[6]=y+h*o,t[10]=r*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,g=l*u,y=l*d;t[0]=h-y*o,t[4]=-r*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*u,t[9]=y-h*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){let h=r*u,f=r*d,g=o*u,y=o*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+y,t[1]=c*d,t[5]=y*l+h,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){let h=r*c,f=r*l,g=o*c,y=o*l;t[0]=c*u,t[4]=y-h*d,t[8]=g*d+f,t[1]=d,t[5]=r*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-y*d}else if(e.order==="XZY"){let h=r*c,f=r*l,g=o*c,y=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+y,t[5]=r*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kp,e,Gp)}lookAt(e,t,i){let s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),vi.crossVectors(i,hn),vi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),vi.crossVectors(i,hn)),vi.normalize(),Er.crossVectors(hn,vi),s[0]=vi.x,s[4]=Er.x,s[8]=hn.x,s[1]=vi.y,s[5]=Er.y,s[9]=hn.y,s[2]=vi.z,s[6]=Er.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],y=i[6],p=i[10],m=i[14],A=i[3],M=i[7],v=i[11],S=i[15],w=s[0],L=s[4],_=s[8],C=s[12],U=s[1],z=s[5],k=s[9],ie=s[13],V=s[2],Y=s[6],le=s[10],ce=s[14],ae=s[3],$=s[7],X=s[11],D=s[15];return a[0]=r*w+o*U+c*V+l*ae,a[4]=r*L+o*z+c*Y+l*$,a[8]=r*_+o*k+c*le+l*X,a[12]=r*C+o*ie+c*ce+l*D,a[1]=u*w+d*U+h*V+f*ae,a[5]=u*L+d*z+h*Y+f*$,a[9]=u*_+d*k+h*le+f*X,a[13]=u*C+d*ie+h*ce+f*D,a[2]=g*w+y*U+p*V+m*ae,a[6]=g*L+y*z+p*Y+m*$,a[10]=g*_+y*k+p*le+m*X,a[14]=g*C+y*ie+p*ce+m*D,a[3]=A*w+M*U+v*V+S*ae,a[7]=A*L+M*z+v*Y+S*$,a[11]=A*_+M*k+v*le+S*X,a[15]=A*C+M*ie+v*ce+S*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],y=e[7],p=e[11],m=e[15],A=c*f-l*h,M=o*f-l*d,v=o*h-c*d,S=r*f-l*u,w=r*h-c*u,L=r*d-o*u;return t*(y*A-p*M+m*v)-i*(g*A-p*S+m*w)+s*(g*M-y*S+m*L)-a*(g*v-y*w+p*L)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],a=e[1],r=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(r*u-o*l)-i*(a*u-o*c)+s*(a*l-r*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],y=e[13],p=e[14],m=e[15],A=t*o-i*r,M=t*c-s*r,v=t*l-a*r,S=i*c-s*o,w=i*l-a*o,L=s*l-a*c,_=u*y-d*g,C=u*p-h*g,U=u*m-f*g,z=d*p-h*y,k=d*m-f*y,ie=h*m-f*p,V=A*ie-M*k+v*z+S*U-w*C+L*_;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/V;return e[0]=(o*ie-c*k+l*z)*Y,e[1]=(s*k-i*ie-a*z)*Y,e[2]=(y*L-p*w+m*S)*Y,e[3]=(h*w-d*L-f*S)*Y,e[4]=(c*U-r*ie-l*C)*Y,e[5]=(t*ie-s*U+a*C)*Y,e[6]=(p*v-g*L-m*M)*Y,e[7]=(u*L-h*v+f*M)*Y,e[8]=(r*k-o*U+l*_)*Y,e[9]=(i*U-t*k-a*_)*Y,e[10]=(g*w-y*v+m*A)*Y,e[11]=(d*v-u*w-f*A)*Y,e[12]=(o*C-r*z-c*_)*Y,e[13]=(t*z-i*C+s*_)*Y,e[14]=(y*M-g*S-p*A)*Y,e[15]=(u*S-d*M+h*A)*Y,this}scale(e){let t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),a=1-i,r=e.x,o=e.y,c=e.z,l=a*r,u=a*o;return this.set(l*r+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*r,0,l*c-s*o,u*c+s*r,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,r){return this.set(1,i,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,u=r+r,d=o+o,h=a*l,f=a*u,g=a*d,y=r*u,p=r*d,m=o*d,A=c*l,M=c*u,v=c*d,S=i.x,w=i.y,L=i.z;return s[0]=(1-(y+m))*S,s[1]=(f+v)*S,s[2]=(g-M)*S,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(h+m))*w,s[6]=(p+A)*w,s[7]=0,s[8]=(g+M)*L,s[9]=(p-A)*L,s[10]=(1-(h+y))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let r=ps.set(s[0],s[1],s[2]).length(),o=ps.set(s[4],s[5],s[6]).length(),c=ps.set(s[8],s[9],s[10]).length();a<0&&(r=-r),In.copy(this);let l=1/r,u=1/o,d=1/c;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,t.setFromRotationMatrix(In),i.x=r,i.y=o,i.z=c,this}makePerspective(e,t,i,s,a,r,o=Dn,c=!1){let l=this.elements,u=2*a/(t-e),d=2*a/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),g,y;if(c)g=a/(r-a),y=r*a/(r-a);else if(o===Dn)g=-(r+a)/(r-a),y=-2*r*a/(r-a);else if(o===Ps)g=-r/(r-a),y=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,a,r,o=Dn,c=!1){let l=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),g,y;if(c)g=1/(r-a),y=r/(r-a);else if(o===Dn)g=-2/(r-a),y=-(r+a)/(r-a);else if(o===Ps)g=-1/(r-a),y=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ps=new Z,In=new ut,kp=new Z(0,0,0),Gp=new Z(1,1,1),vi=new Z,Er=new Z,hn=new Z,uh=new ut,hh=new zt,Jt=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hh.setFromEuler(this),this.setFromQuaternion(hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jt.DEFAULT_ORDER="XYZ";var Us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hp=0,dh=new Z,ms=new zt,ti=new ut,wr=new Z,oa=new Z,Wp=new Z,qp=new zt,fh=new Z(1,0,0),ph=new Z(0,1,0),mh=new Z(0,0,1),gh={type:"added"},$p={type:"removed"},gs={type:"childadded",child:null},il={type:"childremoved",child:null},qt=class n extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new Z,t=new Jt,i=new zt,s=new Z(1,1,1);function a(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new nt}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(fh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return dh.copy(e).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wr.copy(e):wr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(oa,wr,this.up):ti.lookAt(wr,oa,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(ti),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gh),gs.child=e,this.dispatchEvent(gs),gs.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($p),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gh),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,Wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*s,a[13]+=i-a[1]*t-a[5]*i-a[9]*s,a[14]+=s-a[2]*t-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(a(e.animations,c))}}if(t){let o=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),d=r(e.shapes),h=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qt.DEFAULT_UP=new Z(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xp={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,r=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new an;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function sl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=iu(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,r=2*i-a;this.r=sl(r,a,e+1/3),this.g=sl(r,a,e),this.b=sl(r,a,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function i(a){a!==void 0&&parseFloat(a)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let i=Ad[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return lt.workingToColorSpace(Zt.copy(this),e),Math.round(rt(Zt.r*255,0,255))*65536+Math.round(rt(Zt.g*255,0,255))*256+Math.round(rt(Zt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Zt.copy(this),t);let i=Zt.r,s=Zt.g,a=Zt.b,r=Math.max(i,s,a),o=Math.min(i,s,a),c,l,u=(o+r)/2;if(o===r)c=0,l=0;else{let d=r-o;switch(l=u<=.5?d/(r+o):d/(2-r-o),r){case i:c=(s-a)/d+(s<a?6:0);break;case s:c=(a-i)/d+2;break;case a:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Ft){lt.workingToColorSpace(Zt.copy(this),e);let t=Zt.r,i=Zt.g,s=Zt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Cr);let i=ma(xi.h,Cr.h,t),s=ma(xi.s,Cr.s,t),a=ma(xi.l,Cr.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new it;it.NAMES=Ad;var Ma=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new it(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zi=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new Z,ni=new Z,al=new Z,ii=new Z,vs=new Z,xs=new Z,vh=new Z,rl=new Z,ol=new Z,cl=new Z,ll=new St,ul=new St,hl=new St,Si=class n{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Pn.subVectors(s,t),ni.subVectors(i,t),al.subVectors(e,t);let r=Pn.dot(Pn),o=Pn.dot(ni),c=Pn.dot(al),l=ni.dot(ni),u=ni.dot(al),d=r*l-o*o;if(d===0)return a.set(0,0,0),null;let h=1/d,f=(l*c-o*u)*h,g=(r*u-o*c)*h;return a.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,i,s,a,r,o,c){return this.getBarycoord(e,t,i,s,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ii.x),c.addScaledVector(r,ii.y),c.addScaledVector(o,ii.z),c)}static getInterpolatedAttribute(e,t,i,s,a,r){return ll.setScalar(0),ul.setScalar(0),hl.setScalar(0),ll.fromBufferAttribute(e,t),ul.fromBufferAttribute(e,i),hl.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(ll,a.x),r.addScaledVector(ul,a.y),r.addScaledVector(hl,a.z),r}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),ni.subVectors(e,t),Pn.cross(ni).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Pn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,a=this.c,r,o;vs.subVectors(s,i),xs.subVectors(a,i),rl.subVectors(e,i);let c=vs.dot(rl),l=xs.dot(rl);if(c<=0&&l<=0)return t.copy(i);ol.subVectors(e,s);let u=vs.dot(ol),d=xs.dot(ol);if(u>=0&&d<=u)return t.copy(s);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(i).addScaledVector(vs,r);cl.subVectors(e,a);let f=vs.dot(cl),g=xs.dot(cl);if(g>=0&&f<=g)return t.copy(a);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(xs,o);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return vh.subVectors(a,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(vh,o);let m=1/(p+y+h);return r=y*m,o=h*m,t.copy(i).addScaledVector(vs,r).addScaledVector(xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sn=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Ln):Ln.fromBufferAttribute(a,r),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}let s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),Ir.subVectors(this.max,ca),_s.subVectors(e.a,ca),ys.subVectors(e.b,ca),As.subVectors(e.c,ca),_i.subVectors(ys,_s),yi.subVectors(As,ys),Hi.subVectors(_s,As);let t=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-Hi.z,Hi.y,_i.z,0,-_i.x,yi.z,0,-yi.x,Hi.z,0,-Hi.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-Hi.y,Hi.x,0];return!dl(t,_s,ys,As,Ir)||(t=[1,0,0,0,1,0,0,0,1],!dl(t,_s,ys,As,Ir))?!1:(Pr.crossVectors(_i,yi),t=[Pr.x,Pr.y,Pr.z],dl(t,_s,ys,As,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},si=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ln=new Z,Rr=new Sn,_s=new Z,ys=new Z,As=new Z,_i=new Z,yi=new Z,Hi=new Z,ca=new Z,Ir=new Z,Pr=new Z,Wi=new Z;function dl(n,e,t,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){Wi.fromArray(n,a);let o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),c=e.dot(Wi),l=t.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var It=new Z,Lr=new Pe,Yp=0,en=class extends Wn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gd,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),s=Qt(s,this.array),a=Qt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ba=class extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ta=class extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Et=class extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}},Zp=new Sn,la=new Z,fl=new Z,Mi=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Zp.setFromPoints(e).getCenter(i);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);let t=la.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(la,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(fl)),this.expandByPoint(la.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jp=0,An=new ut,pl=new qt,Ss=new Z,dn=new Sn,ua=new Sn,Ot=new Z,on=class n extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yp(e)?Ta:ba)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new nt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,a=e.length;s<a;s++){let r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Et(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let a=t[i];dn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){let i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){let o=t[a];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(dn.min,ua.min),dn.expandByPoint(Ot),Ot.addVectors(dn.max,ua.max),dn.expandByPoint(Ot)):(dn.expandByPoint(ua.min),dn.expandByPoint(ua.max))}dn.getCenter(i);let s=0;for(let a=0,r=e.count;a<r;a++)Ot.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let a=0,r=t.length;a<r;a++){let o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ot.fromBufferAttribute(o,l),c&&(Ss.fromBufferAttribute(e,l),Ot.add(Ss)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,a=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new en(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new Z,c[_]=new Z;let l=new Z,u=new Z,d=new Z,h=new Pe,f=new Pe,g=new Pe,y=new Z,p=new Z;function m(_,C,U){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,U),h.fromBufferAttribute(a,_),f.fromBufferAttribute(a,C),g.fromBufferAttribute(a,U),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let z=1/(f.x*g.y-g.x*f.y);isFinite(z)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(z),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(z),o[_].add(y),o[C].add(y),o[U].add(y),c[_].add(p),c[C].add(p),c[U].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let _=0,C=A.length;_<C;++_){let U=A[_],z=U.start,k=U.count;for(let ie=z,V=z+k;ie<V;ie+=3)m(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}let M=new Z,v=new Z,S=new Z,w=new Z;function L(_){S.fromBufferAttribute(s,_),w.copy(S);let C=o[_];M.copy(C),M.sub(S.multiplyScalar(S.dot(C))).normalize(),v.crossVectors(w,C);let z=v.dot(c[_])<0?-1:1;r.setXYZW(_,M.x,M.y,M.z,z)}for(let _=0,C=A.length;_<C;++_){let U=A[_],z=U.start,k=U.count;for(let ie=z,V=z+k;ie<V;ie+=3)L(e.getX(ie+0)),L(e.getX(ie+1)),L(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new Z,a=new Z,r=new Z,o=new Z,c=new Z,l=new Z,u=new Z,d=new Z;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,y),r.fromBufferAttribute(t,p),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*u;for(let m=0;m<u;m++)h[g++]=l[f++]}return new en(h,u,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let a=this.morphAttributes;for(let o in a){let c=[],l=a[o];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,c=r.length;o<c;o++){let l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},a=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let a=e.morphAttributes;for(let l in a){let u=[],d=a[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,u=r.length;l<u;l++){let d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ml=new Z,jp=new Z,Kp=new nt,Nn=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ml.subVectors(i,t).cross(jp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ml),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Kp.getNormalMatrix(e),s=this.coplanarPoint(ml).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Qp=0,oi=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Ws,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=kl,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let c=a[o];delete c.metadata,r.push(c)}return r}if(t){let a=s(e.textures),r=s(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Nn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Pe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ai=new Z,gl=new Z,Nr=new Z,Dr=new Z,Ea=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){gl.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(gl);let a=e.distanceTo(t)*.5,r=-this.direction.dot(Nr),o=Dr.dot(this.direction),c=-Dr.dot(Nr),l=Dr.lengthSq(),u=Math.abs(1-r*r),d,h,f,g;if(u>0)if(d=r*c-o,h=r*o-c,g=a*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,f=d*(d+r*h+2*o)+h*(r*d+h+2*c)+l}else h=a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*c)+l;else h=-a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-c),a),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-a,-c),a),f=h*(h+2*c)+l):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-c),a),f=-d*d+h*(h+2*c)+l);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gl).addScaledVector(Nr,h),f}intersectSphere(e,t){if(e.radius<0)return null;ai.subVectors(e.center,this.origin);let i=ai.dot(this.direction),s=ai.dot(ai)-i*i,a=e.radius*e.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,c=i+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,r,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(a=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,s,a){let r=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-r.x,h=e.y-r.y,f=e.z-r.z,g=t.x-r.x,y=t.y-r.y,p=t.z-r.z,m=i.x-r.x,A=i.y-r.y,M=i.z-r.z,v=Math.abs(c),S=Math.abs(l),w=Math.abs(u),L,_,C,U,z,k,ie,V,Y,le,ce,ae;if(v>=S&&v>=w?(C=c,k=d,Y=g,ae=m,c>=0?(L=l,_=u,U=h,z=f,ie=y,V=p,le=A,ce=M):(L=u,_=l,U=f,z=h,ie=p,V=y,le=M,ce=A)):S>=w?(C=l,k=h,Y=y,ae=A,l>=0?(L=u,_=c,U=f,z=d,ie=p,V=g,le=M,ce=m):(L=c,_=u,U=d,z=f,ie=g,V=p,le=m,ce=M)):(C=u,k=f,Y=p,ae=M,u>=0?(L=c,_=l,U=d,z=h,ie=g,V=y,le=m,ce=A):(L=l,_=c,U=h,z=d,ie=y,V=g,le=A,ce=m)),C===0)return null;let $=L/C,X=_/C,D=1/C,K=U-$*k,F=z-X*k,q=ie-$*Y,W=V-X*Y,O=le-$*ae,E=ce-X*ae,b=O*W-E*q,R=K*E-F*O,P=q*F-W*K;if(s){if(b<0||R<0||P<0)return null}else if((b<0||R<0||P<0)&&(b>0||R>0||P>0))return null;let N=b+R+P;if(N===0)return null;let J=D*(b*k+R*Y+P*ae);return(N>0?J<0:J>0)?null:this.at(J/N,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wa=class extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xh=new ut,qi=new Ea,Ur=new Mi,_h=new Z,Or=new Z,Fr=new Z,Br=new Z,vl=new Z,zr=new Z,yh=new Z,Vr=new Z,vt=class extends qt{constructor(e=new on,t=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(a&&o){zr.set(0,0,0);for(let c=0,l=a.length;c<l;c++){let u=o[c],d=a[c];u!==0&&(vl.fromBufferAttribute(d,e),r?zr.addScaledVector(vl,u):zr.addScaledVector(vl.sub(t),u))}t.add(zr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(a),qi.copy(e.ray).recast(e.near),!(Ur.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Ur,_h)===null||qi.origin.distanceToSquared(_h)>(e.far-e.near)**2))&&(xh.copy(a).invert(),qi.copy(e.ray).applyMatrix4(xh),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,i){let s,a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,y=h.length;g<y;g++){let p=h[g],m=r[p.materialIndex],A=Math.max(p.start,f.start),M=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=A,S=M;v<S;v+=3){let w=o.getX(v),L=o.getX(v+1),_=o.getX(v+2);s=kr(this,m,e,i,l,u,d,w,L,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let A=o.getX(p),M=o.getX(p+1),v=o.getX(p+2);s=kr(this,r,e,i,l,u,d,A,M,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,y=h.length;g<y;g++){let p=h[g],m=r[p.materialIndex],A=Math.max(p.start,f.start),M=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=A,S=M;v<S;v+=3){let w=v,L=v+1,_=v+2;s=kr(this,m,e,i,l,u,d,w,L,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let A=p,M=p+1,v=p+2;s=kr(this,r,e,i,l,u,d,A,M,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function em(n,e,t,i,s,a,r,o){let c;if(e.side===$t?c=i.intersectTriangle(r,a,s,!0,o):c=i.intersectTriangle(s,a,r,e.side===Ri,o),c===null)return null;Vr.copy(o),Vr.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Vr);return l<t.near||l>t.far?null:{distance:l,point:Vr.clone(),object:n}}function kr(n,e,t,i,s,a,r,o,c,l){n.getVertexPosition(o,Or),n.getVertexPosition(c,Fr),n.getVertexPosition(l,Br);let u=em(n,e,t,i,Or,Fr,Br,yh);if(u){let d=new Z;Si.getBarycoord(yh,Or,Fr,Br,d),s&&(u.uv=Si.getInterpolatedAttribute(s,o,c,l,d,new Pe)),a&&(u.uv1=Si.getInterpolatedAttribute(a,o,c,l,d,new Pe)),r&&(u.normal=Si.getInterpolatedAttribute(r,o,c,l,d,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new Z,materialIndex:0};Si.getNormal(Or,Fr,Br,h.normal),u.face=h,u.barycoord=d}return u}var Ca=class extends tn{constructor(e=null,t=1,i=1,s,a,r,o,c,l=Bt,u=Bt,d,h){super(null,r,o,c,l,u,s,a,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fs=class extends en{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ms=new ut,Ah=new ut,Gr=[],Sh=new Sn,tm=new ut,ha=new vt,da=new Mi,Ji=class extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,tm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ms),Sh.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Sh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ms),da.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=e*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(i),e.ray.intersectsSphere(da)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Ms),Ah.multiplyMatrices(i,Ms),ha.matrixWorld=Ah,ha.raycast(e,Gr);for(let r=0,o=Gr.length;r<o;r++){let c=Gr[r];c.instanceId=a,c.object=this,t.push(c)}Gr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ca(new Float32Array(s*this.count),s,this.count,Bo,Mn));let a=this.morphTexture.source.data.data,r=0;for(let l=0;l<i.length;l++)r+=i[l];let o=this.geometry.morphTargetsRelative?1:1-r,c=s*e;return a[c]=o,a.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$i=new Mi,nm=new Pe(.5,.5),Hr=new Z,Bs=class{constructor(e=new Nn,t=new Nn,i=new Nn,s=new Nn,a=new Nn,r=new Nn){this.planes=[e,t,i,s,a,r]}set(e,t,i,s,a,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn,i=!1){let s=this.planes,a=e.elements,r=a[0],o=a[1],c=a[2],l=a[3],u=a[4],d=a[5],h=a[6],f=a[7],g=a[8],y=a[9],p=a[10],m=a[11],A=a[12],M=a[13],v=a[14],S=a[15];if(s[0].setComponents(l-r,f-u,m-g,S-A).normalize(),s[1].setComponents(l+r,f+u,m+g,S+A).normalize(),s[2].setComponents(l+o,f+d,m+y,S+M).normalize(),s[3].setComponents(l-o,f-d,m-y,S-M).normalize(),i)s[4].setComponents(c,h,p,v).normalize(),s[5].setComponents(l-c,f-h,m-p,S-v).normalize();else if(s[4].setComponents(l-c,f-h,m-p,S-v).normalize(),t===Dn)s[5].setComponents(l+c,f+h,m+p,S+v).normalize();else if(t===Ps)s[5].setComponents(c,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);let t=nm.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Hr.x=s.normal.x>0?e.max.x:e.min.x,Hr.y=s.normal.y>0?e.max.y:e.min.y,Hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ra=class extends tn{constructor(e=[],t=Ii,i,s,a,r,o,c,l,u){super(e,t,i,s,a,r,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bi=class extends tn{constructor(e,t,i,s,a,r,o,c,l){super(e,t,i,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ti=class extends tn{constructor(e,t,i=On,s,a,r,o=Bt,c=Bt,l,u=Hn,d=1){if(u!==Hn&&u!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,a,r,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},co=class extends Ti{constructor(e,t=On,i=Ii,s,a,r=Bt,o=Bt,c,l=Hn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,a,r,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ia=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ci=class n extends on{constructor(e=1,t=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,r,a,0),g("z","y","x",1,-1,i,t,-e,r,a,1),g("x","z","y",1,1,e,i,t,s,r,2),g("x","z","y",1,-1,e,i,-t,s,r,3),g("x","y","z",1,-1,e,t,i,s,a,4),g("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(c),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(d,2));function g(y,p,m,A,M,v,S,w,L,_,C){let U=v/L,z=S/_,k=v/2,ie=S/2,V=w/2,Y=L+1,le=_+1,ce=0,ae=0,$=new Z;for(let X=0;X<le;X++){let D=X*z-ie;for(let K=0;K<Y;K++){let F=K*U-k;$[y]=F*A,$[p]=D*M,$[m]=V,l.push($.x,$.y,$.z),$[y]=0,$[p]=0,$[m]=w>0?1:-1,u.push($.x,$.y,$.z),d.push(K/L),d.push(1-X/_),ce+=1}}for(let X=0;X<_;X++)for(let D=0;D<L;D++){let K=h+D+Y*X,F=h+D+Y*(X+1),q=h+(D+1)+Y*(X+1),W=h+(D+1)+Y*X;c.push(K,F,W),c.push(F,q,W),ae+=6}o.addGroup(f,ae,C),f+=ae,h+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Pa=class n extends on{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let a=[],r=[],o=[],c=[],l=new Z,u=new Pe;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),r.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(r[h]/e+1)/2,u.y=(r[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new Et(r,3)),this.setAttribute("normal",new Et(o,3)),this.setAttribute("uv",new Et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},La=class n extends on{constructor(e=1,t=1,i=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),a=Math.floor(a);let u=[],d=[],h=[],f=[],g=0,y=[],p=i/2,m=0;A(),r===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(f,2));function A(){let v=new Z,S=new Z,w=0,L=(t-e)/i;for(let _=0;_<=a;_++){let C=[],U=_/a,z=U*(t-e)+e;for(let k=0;k<=s;k++){let ie=k/s,V=ie*c+o,Y=Math.sin(V),le=Math.cos(V);S.x=z*Y,S.y=-U*i+p,S.z=z*le,d.push(S.x,S.y,S.z),v.set(Y,L,le).normalize(),h.push(v.x,v.y,v.z),f.push(ie,1-U),C.push(g++)}y.push(C)}for(let _=0;_<s;_++)for(let C=0;C<a;C++){let U=y[C][_],z=y[C+1][_],k=y[C+1][_+1],ie=y[C][_+1];(e>0||C!==0)&&(u.push(U,z,ie),w+=3),(t>0||C!==a-1)&&(u.push(z,k,ie),w+=3)}l.addGroup(m,w,0),m+=w}function M(v){let S=g,w=new Pe,L=new Z,_=0,C=v===!0?e:t,U=v===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,p*U,0),h.push(0,U,0),f.push(.5,.5),g++;let z=g;for(let k=0;k<=s;k++){let V=k/s*c+o,Y=Math.cos(V),le=Math.sin(V);L.x=C*le,L.y=p*U,L.z=C*Y,d.push(L.x,L.y,L.z),h.push(0,U,0),w.x=Y*.5+.5,w.y=le*.5*U+.5,f.push(w.x,w.y),g++}for(let k=0;k<s;k++){let ie=S+k,V=z+k;v===!0?u.push(V,V+1,ie):u.push(V+1,V,ie),_+=3}l.addGroup(m,_,v===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),a+=i.distanceTo(s),t.push(a),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,a=i.length,r;t?r=t:r=e*i[a-1];let o=0,c=a-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-r,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(a-1);let u=i[s],h=i[s+1]-u,f=(r-u)/h;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),c=t||(r.isVector2?new Pe:new Z);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new Z,s=[],a=[],r=[],o=new Z,c=new ut;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new Z)}a[0]=new Z,r[0]=new Z;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(rt(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(c.makeRotationAxis(o,g))}r[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(rt(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},zs=class extends fn{constructor(e=0,t=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Pe){let i=t,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+e*a,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},lo=class extends zs{constructor(e,t,i,s,a,r){super(e,t,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function su(){let n=0,e=0,t=0,i=0;function s(a,r,o,c){n=a,e=o,t=-3*a+3*r-2*o-c,i=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){s(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,u,d){let h=(r-a)/l-(o-a)/(l+u)+(o-r)/u,f=(o-r)/u-(c-r)/(u+d)+(c-o)/d;h*=u,f*=u,s(r,o,h,f)},calc:function(a){let r=a*a,o=r*a;return n+e*a+t*r+i*o}}}var Mh=new Z,bh=new Z,xl=new su,_l=new su,yl=new su,uo=class extends fn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new Z){let i=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e,o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%a]:(bh.subVectors(s[0],s[1]).add(s[0]),l=bh);let d=s[o%a],h=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(Mh.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=Mh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),xl.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,y,p),_l.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,y,p),yl.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,y,p)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),_l.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),yl.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(xl.calc(c),_l.calc(c),yl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Th(n,e,t,i,s){let a=(i-e)*.5,r=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+a+r)*c+(-3*t+3*i-2*a-r)*o+a*n+t}function im(n,e){let t=1-n;return t*t*e}function sm(n,e){return 2*(1-n)*n*e}function am(n,e){return n*n*e}function ga(n,e,t,i){return im(n,e)+sm(n,t)+am(n,i)}function rm(n,e){let t=1-n;return t*t*t*e}function om(n,e){let t=1-n;return 3*t*t*n*e}function cm(n,e){return 3*(1-n)*n*n*e}function lm(n,e){return n*n*n*e}function va(n,e,t,i,s){return rm(n,e)+om(n,t)+cm(n,i)+lm(n,s)}var Na=class extends fn{constructor(e=new Pe,t=new Pe,i=new Pe,s=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Pe){let i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(va(e,s.x,a.x,r.x,o.x),va(e,s.y,a.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ho=class extends fn{constructor(e=new Z,t=new Z,i=new Z,s=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Z){let i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(va(e,s.x,a.x,r.x,o.x),va(e,s.y,a.y,r.y,o.y),va(e,s.z,a.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Da=class extends fn{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends fn{constructor(e=new Z,t=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Z){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends fn{constructor(e=new Pe,t=new Pe,i=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Pe){let i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(ga(e,s.x,a.x,r.x),ga(e,s.y,a.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends fn{constructor(e=new Z,t=new Z,i=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Z){let i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(ga(e,s.x,a.x,r.x),ga(e,s.y,a.y,r.y),ga(e,s.z,a.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){let i=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(Th(o,c.x,l.x,u.x,d.x),Th(o,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Pe().fromArray(s))}return this}},wl=Object.freeze({__proto__:null,ArcCurve:lo,CatmullRomCurve3:uo,CubicBezierCurve:Na,CubicBezierCurve3:ho,EllipseCurve:zs,LineCurve:Da,LineCurve3:fo,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:po,SplineCurve:Oa}),mo=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let r=s[a]-i,o=this.curves[a],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new wl[s.type]().fromJSON(s))}return this}},qn=class extends mo{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Da(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let a=new Ua(this.currentPoint.clone(),new Pe(e,t),new Pe(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,a,r){let o=new Na(this.currentPoint.clone(),new Pe(e,t),new Pe(i,s),new Pe(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Oa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,a,r){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,a,r),this}absarc(e,t,i,s,a,r){return this.absellipse(e,t,i,i,s,a,r),this}ellipse(e,t,i,s,a,r,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,a,r,o,c),this}absellipse(e,t,i,s,a,r,o,c){let l=new zs(e,t,i,s,a,r,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},nn=class extends qn{constructor(e){super(e),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new qn().fromJSON(s))}return this}};function um(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,a=Sd(n,0,s,t,!0),r=[];if(!a||a.next===a.prev)return r;let o,c,l;if(i&&(a=mm(n,e,a,t)),n.length>80*t){o=n[0],c=n[1];let u=o,d=c;for(let h=t;h<s;h+=t){let f=n[h],g=n[h+1];f<o&&(o=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-o,d-c),l=l!==0?32767/l:0}return Fa(a,r,t,o,c,l,0),r}function Sd(n,e,t,i,s){let a;if(s===Em(n,e,t,i)>0)for(let r=e;r<t;r+=i)a=Eh(r/i|0,n[r],n[r+1],a);else for(let r=t-i;r>=e;r-=i)a=Eh(r/i|0,n[r],n[r+1],a);return a&&Vs(a,a.next)&&(za(a),a=a.next),a}function ji(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Vs(t,t.next)||Mt(t.prev,t,t.next)===0)){if(za(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Fa(n,e,t,i,s,a,r){if(!n)return;!r&&a&&ym(n,i,s,a);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(a?dm(n,i,s,a):hm(n)){e.push(c.i,n.i,l.i),za(n),n=l.next,o=l.next;continue}if(n=l,n===o){r?r===1?(n=fm(ji(n),e),Fa(n,e,t,i,s,a,2)):r===2&&pm(n,e,t,i,s,a):Fa(ji(n),e,t,i,s,a,1);break}}}function hm(n){let e=n.prev,t=n,i=n.next;if(Mt(e,t,i)>=0)return!1;let s=e.x,a=t.x,r=i.x,o=e.y,c=t.y,l=i.y,u=Math.min(s,a,r),d=Math.min(o,c,l),h=Math.max(s,a,r),f=Math.max(o,c,l),g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&fa(s,o,a,c,r,l,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dm(n,e,t,i){let s=n.prev,a=n,r=n.next;if(Mt(s,a,r)>=0)return!1;let o=s.x,c=a.x,l=r.x,u=s.y,d=a.y,h=r.y,f=Math.min(o,c,l),g=Math.min(u,d,h),y=Math.max(o,c,l),p=Math.max(u,d,h),m=Cl(f,g,e,t,i),A=Cl(y,p,e,t,i),M=n.prevZ,v=n.nextZ;for(;M&&M.z>=m&&v&&v.z<=A;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==r&&fa(o,u,c,d,l,h,M.x,M.y)&&Mt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==r&&fa(o,u,c,d,l,h,v.x,v.y)&&Mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==r&&fa(o,u,c,d,l,h,M.x,M.y)&&Mt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=A;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==r&&fa(o,u,c,d,l,h,v.x,v.y)&&Mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function fm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Vs(i,s)&&bd(i,t,t.next,s)&&Ba(i,s)&&Ba(s,i)&&(e.push(i.i,t.i,s.i),za(t),za(t.next),t=n=s),t=t.next}while(t!==n);return ji(t)}function pm(n,e,t,i,s,a){let r=n;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&Mm(r,o)){let c=Td(r,o);r=ji(r,r.next),c=ji(c,c.next),Fa(r,e,t,i,s,a,0),Fa(c,e,t,i,s,a,0);return}o=o.next}r=r.next}while(r!==n)}function mm(n,e,t,i){let s=[];for(let a=0,r=e.length;a<r;a++){let o=e[a]*i,c=a<r-1?e[a+1]*i:n.length,l=Sd(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Sm(l))}s.sort(gm);for(let a=0;a<s.length;a++)t=vm(s[a],t);return t}function gm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function vm(n,e){let t=xm(n,e);if(!t)return e;let i=Td(t,n);return ji(i,i.next),ji(t,t.next)}function xm(n,e){let t=e,i=n.x,s=n.y,a=-1/0,r;if(Vs(n,t))return t;do{if(Vs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>a&&(a=d,r=t.x<t.next.x?t:t.next,d===i))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,c=r.x,l=r.y,u=1/0;t=r;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Md(s<l?i:a,s,c,l,s<l?a:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Ba(t,n)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&_m(r,t)))&&(r=t,u=d)}t=t.next}while(t!==o);return r}function _m(n,e){return Mt(n.prev,n,e.prev)<0&&Mt(e.next,n,n.next)<0}function ym(n,e,t,i){let s=n;do s.z===0&&(s.z=Cl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Am(s)}function Am(n){let e,t=1;do{let i=n,s;n=null;let a=null;for(e=0;i;){e++;let r=i,o=0;for(let l=0;l<t&&(o++,r=r.nextZ,!!r);l++);let c=t;for(;o>0||c>0&&r;)o!==0&&(c===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,c--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;i=r}a.nextZ=null,t*=2}while(e>1);return n}function Cl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Sm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Md(n,e,t,i,s,a,r,o){return(s-r)*(e-o)>=(n-r)*(a-o)&&(n-r)*(i-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(i-o)}function fa(n,e,t,i,s,a,r,o){return!(n===r&&e===o)&&Md(n,e,t,i,s,a,r,o)}function Mm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!bm(n,e)&&(Ba(n,e)&&Ba(e,n)&&Tm(n,e)&&(Mt(n.prev,n,e.prev)||Mt(n,e.prev,e))||Vs(n,e)&&Mt(n.prev,n,n.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Vs(n,e){return n.x===e.x&&n.y===e.y}function bd(n,e,t,i){let s=qr(Mt(n,e,t)),a=qr(Mt(n,e,i)),r=qr(Mt(t,i,n)),o=qr(Mt(t,i,e));return!!(s!==a&&r!==o||s===0&&Wr(n,t,e)||a===0&&Wr(n,i,e)||r===0&&Wr(t,n,i)||o===0&&Wr(t,e,i))}function Wr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qr(n){return n>0?1:n<0?-1:0}function bm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&bd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ba(n,e){return Mt(n.prev,n,n.next)<0?Mt(n,e,n.next)>=0&&Mt(n,n.prev,e)>=0:Mt(n,e,n.prev)<0||Mt(n,n.next,e)<0}function Tm(n,e){let t=n,i=!1,s=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Td(n,e){let t=Rl(n.i,n.x,n.y),i=Rl(e.i,e.x,e.y),s=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Eh(n,e,t,i){let s=Rl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function za(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Rl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Em(n,e,t,i){let s=0;for(let a=e,r=t-i;a<t;a+=i)s+=(n[r]-n[a])*(n[a+1]+n[r+1]),r=a;return s}var Il=class{static triangulate(e,t,i=2){return um(e,t,i)}},Xi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,a=0;a<t;s=a++)i+=e[s].x*e[a].y-e[a].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],a=[];wh(e),Ch(i,e);let r=e.length;t.forEach(wh);for(let c=0;c<t.length;c++)s.push(r),r+=t[c].length,Ch(i,t[c]);let o=Il.triangulate(i,s);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}};function wh(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ch(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Va=class n extends on{constructor(e=new nn([new Pe(.5,.5),new Pe(-.5,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];r(l)}this.setAttribute("position",new Et(s,3)),this.setAttribute("uv",new Et(a,2)),this.computeVertexNormals();function r(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:wm,M,v=!1,S,w,L,_;if(m){M=m.getSpacedPoints(u),v=!0,h=!1;let H=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(u,H),w=new Z,L=new Z,_=new Z}h||(p=0,f=0,g=0,y=0);let C=o.extractPoints(l),U=C.shape,z=C.holes;if(!Xi.isClockWise(U)){U=U.reverse();for(let H=0,se=z.length;H<se;H++){let re=z[H];Xi.isClockWise(re)&&(z[H]=re.reverse())}}function ie(H){let re=10000000000000001e-36,G=H[0];for(let j=1;j<=H.length;j++){let ve=j%H.length,ye=H[ve],Ee=ye.x-G.x,Te=ye.y-G.y,B=Ee*Ee+Te*Te,Ve=Math.max(Math.abs(ye.x),Math.abs(ye.y),Math.abs(G.x),Math.abs(G.y)),De=re*Ve*Ve;if(B<=De){H.splice(ve,1),j--;continue}G=ye}}ie(U),z.forEach(ie);let V=z.length,Y=U;for(let H=0;H<V;H++){let se=z[H];U=U.concat(se)}function le(H,se,re){return se||Ke("ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(se,re)}let ce=U.length;function ae(H,se,re){let G,j,ve,ye=H.x-se.x,Ee=H.y-se.y,Te=re.x-H.x,B=re.y-H.y,Ve=ye*ye+Ee*Ee,De=ye*B-Ee*Te;if(Math.abs(De)>Number.EPSILON){let I=Math.sqrt(Ve),x=Math.sqrt(Te*Te+B*B),ne=se.x-Ee/I,oe=se.y+ye/I,pe=re.x-B/x,we=re.y+Te/x,Ce=((pe-ne)*B-(we-oe)*Te)/(ye*B-Ee*Te);G=ne+ye*Ce-H.x,j=oe+Ee*Ce-H.y;let xe=G*G+j*j;if(xe<=2)return new Pe(G,j);ve=Math.sqrt(xe/2)}else{let I=!1;ye>Number.EPSILON?Te>Number.EPSILON&&(I=!0):ye<-Number.EPSILON?Te<-Number.EPSILON&&(I=!0):Math.sign(Ee)===Math.sign(B)&&(I=!0),I?(G=-Ee,j=ye,ve=Math.sqrt(Ve)):(G=ye,j=Ee,ve=Math.sqrt(Ve/2))}return new Pe(G/ve,j/ve)}let $=[];for(let H=0,se=Y.length,re=se-1,G=H+1;H<se;H++,re++,G++)re===se&&(re=0),G===se&&(G=0),$[H]=ae(Y[H],Y[re],Y[G]);let X=[],D,K=$.concat();for(let H=0,se=V;H<se;H++){let re=z[H];D=[];for(let G=0,j=re.length,ve=j-1,ye=G+1;G<j;G++,ve++,ye++)ve===j&&(ve=0),ye===j&&(ye=0),D[G]=ae(re[G],re[ve],re[ye]);X.push(D),K=K.concat(D)}let F;if(p===0)F=Xi.triangulateShape(Y,z);else{let H=[],se=[];for(let re=0;re<p;re++){let G=re/p,j=f*Math.cos(G*Math.PI/2),ve=g*Math.sin(G*Math.PI/2)+y;for(let ye=0,Ee=Y.length;ye<Ee;ye++){let Te=le(Y[ye],$[ye],ve);R(Te.x,Te.y,-j),G===0&&H.push(Te)}for(let ye=0,Ee=V;ye<Ee;ye++){let Te=z[ye];D=X[ye];let B=[];for(let Ve=0,De=Te.length;Ve<De;Ve++){let I=le(Te[Ve],D[Ve],ve);R(I.x,I.y,-j),G===0&&B.push(I)}G===0&&se.push(B)}}F=Xi.triangulateShape(H,se)}let q=F.length,W=g+y;for(let H=0;H<ce;H++){let se=h?le(U[H],K[H],W):U[H];v?(L.copy(S.normals[0]).multiplyScalar(se.x),w.copy(S.binormals[0]).multiplyScalar(se.y),_.copy(M[0]).add(L).add(w),R(_.x,_.y,_.z)):R(se.x,se.y,0)}for(let H=1;H<=u;H++)for(let se=0;se<ce;se++){let re=h?le(U[se],K[se],W):U[se];v?(L.copy(S.normals[H]).multiplyScalar(re.x),w.copy(S.binormals[H]).multiplyScalar(re.y),_.copy(M[H]).add(L).add(w),R(_.x,_.y,_.z)):R(re.x,re.y,d/u*H)}for(let H=p-1;H>=0;H--){let se=H/p,re=f*Math.cos(se*Math.PI/2),G=g*Math.sin(se*Math.PI/2)+y;for(let j=0,ve=Y.length;j<ve;j++){let ye=le(Y[j],$[j],G);R(ye.x,ye.y,d+re)}for(let j=0,ve=z.length;j<ve;j++){let ye=z[j];D=X[j];for(let Ee=0,Te=ye.length;Ee<Te;Ee++){let B=le(ye[Ee],D[Ee],G);v?R(B.x,B.y+M[u-1].y,M[u-1].x+re):R(B.x,B.y,d+re)}}}O(),E();function O(){let H=s.length/3;if(h){let se=0,re=ce*se;for(let G=0;G<q;G++){let j=F[G];P(j[2]+re,j[1]+re,j[0]+re)}se=u+p*2,re=ce*se;for(let G=0;G<q;G++){let j=F[G];P(j[0]+re,j[1]+re,j[2]+re)}}else{for(let se=0;se<q;se++){let re=F[se];P(re[2],re[1],re[0])}for(let se=0;se<q;se++){let re=F[se];P(re[0]+ce*u,re[1]+ce*u,re[2]+ce*u)}}i.addGroup(H,s.length/3-H,0)}function E(){let H=s.length/3,se=0;b(Y,se),se+=Y.length;for(let re=0,G=z.length;re<G;re++){let j=z[re];b(j,se),se+=j.length}i.addGroup(H,s.length/3-H,1)}function b(H,se){let re=H.length;for(;--re>=0;){let G=re,j=re-1;j<0&&(j=H.length-1);for(let ve=0,ye=u+p*2;ve<ye;ve++){let Ee=ce*ve,Te=ce*(ve+1),B=se+G+Ee,Ve=se+j+Ee,De=se+j+Te,I=se+G+Te;N(B,Ve,De,I)}}}function R(H,se,re){c.push(H),c.push(se),c.push(re)}function P(H,se,re){J(H),J(se),J(re);let G=s.length/3,j=A.generateTopUV(i,s,G-3,G-2,G-1);te(j[0]),te(j[1]),te(j[2])}function N(H,se,re,G){J(H),J(se),J(G),J(se),J(re),J(G);let j=s.length/3,ve=A.generateSideWallUV(i,s,j-6,j-3,j-2,j-1);te(ve[0]),te(ve[1]),te(ve[3]),te(ve[1]),te(ve[2]),te(ve[3])}function J(H){s.push(c[H*3+0]),s.push(c[H*3+1]),s.push(c[H*3+2])}function te(H){a.push(H.x),a.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Cm(t,i,e)}static fromJSON(e,t){let i=[];for(let a=0,r=e.shapes.length;a<r;a++){let o=t[e.shapes[a]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wl[s.type]().fromJSON(s)),new n(i,e.options)}},wm={generateTopUV:function(n,e,t,i,s){let a=e[t*3],r=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new Pe(a,r),new Pe(o,c),new Pe(l,u)]},generateSideWallUV:function(n,e,t,i,s,a){let r=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[a*3],p=e[a*3+1],m=e[a*3+2];return Math.abs(o-u)<Math.abs(r-l)?[new Pe(r,1-c),new Pe(l,1-d),new Pe(h,1-g),new Pe(y,1-m)]:[new Pe(o,1-c),new Pe(u,1-d),new Pe(f,1-g),new Pe(p,1-m)]}};function Cm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let a=n[i];t.shapes.push(a.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var li=class n extends on{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let a=e/2,r=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,d=e/o,h=t/c,f=[],g=[],y=[],p=[];for(let m=0;m<u;m++){let A=m*h-r;for(let M=0;M<l;M++){let v=M*d-a;g.push(v,-A,0),y.push(0,0,1),p.push(M/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let A=0;A<o;A++){let M=A+l*m,v=A+l*(m+1),S=A+1+l*(m+1),w=A+1+l*m;f.push(M,v,w),f.push(v,S,w)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(y,3)),this.setAttribute("uv",new Et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function is(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Rh(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Rh(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][i]=a}else e[t][i]=s.slice();else e[t][i]=s}}return e}function jt(n){let e={};for(let t=0;t<n.length;t++){let i=is(n[t]);for(let s in i)e[s]=i[s]}return e}function Rh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Rm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function au(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Ed={clone:is,merge:jt},Im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Im,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Rm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(s.value);break;case"v2":this.uniforms[i].value=new Pe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new St().fromArray(s.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},go=class extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},mn=class extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ki=class extends mn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ka=class extends oi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=Po,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vo=class extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xo=class extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Al(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ei=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let r;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=t[++i],e<s)break t}r=t.length;break n}if(!(e>=a)){let o=t[1];e<o&&(i=2,a=o);for(let c=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=a,a=t[--i-1],e>=a)break t}r=i,i=0;break n}break e}for(;i<r;){let o=i+r>>>1;e<t[o]?r=o:i=o+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=i[a+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_o=class extends Ei{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bl,endingEnd:bl}}intervalChanged_(e,t,i){let s=this.parameterPositions,a=e-2,r=e+1,o=s[a],c=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Tl:a=e,o=2*t-i;break;case El:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Tl:r=e,c=2*i-t;break;case El:r=1,c=i+s[1]-s[0];break;default:r=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,p=y*g,m=-h*p+2*h*y-h*g,A=(1+h)*p+(-1.5-2*h)*y+(-.5+h)*g+1,M=(-1-f)*p+(1.5+f)*y+.5*g,v=f*p-f*y;for(let S=0;S!==o;++S)a[S]=m*r[u+S]+A*r[l+S]+M*r[c+S]+v*r[d+S];return a}},yo=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)a[h]=r[l+h]*d+r[c+h]*u;return a}},Ao=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},So=class extends Ei{interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-t)/(s-t),y=1-g;for(let p=0;p!==o;++p)a[p]=r[l+p]*y+r[c+p]*g;return a}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let y=r[l+g],p=r[c+g],m=f*h+g*2,A=d[m],M=d[m+1],v=e*h+g*2,S=u[v],w=u[v+1],L=Nm(i,t,A,S,s);a[g]=wd(L,y,M,w,p)}return a}};function wd(n,e,t,i,s){let a=1-n;return a*a*a*e+3*a*a*n*t+3*a*n*n*i+n*n*n*s}function Lm(n,e,t,i,s){let a=1-n;return 3*a*a*(t-e)+6*a*n*(i-t)+3*n*n*(s-i)}function Nm(n,e,t,i,s){let a=(n-e)/(s-e);for(let r=0;r<8;r++){let o=wd(a,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=Lm(a,e,t,i,s);if(Math.abs(c)<1e-10)break;a=Math.max(0,Math.min(1,a-o/c))}return a}var gn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bs(t,this.TimeBufferType),this.values=bs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:bs(e.times,Array),values:bs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Al(e.settings)&&(i.settings={inTangents:bs(e.settings.inTangents,Array),outTangents:bs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new So(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xa:t=this.InterpolantFactoryMethodDiscrete;break;case so:t=this.InterpolantFactoryMethodLinear;break;case Yr:t=this.InterpolantFactoryMethodSmooth;break;case Ml:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return je("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return so;case this.InterpolantFactoryMethodSmooth:return Yr;case this.InterpolantFactoryMethodBezier:return Ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Al(this.settings)&&(Ih(this.settings.inTangents,e),Ih(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<e;)++a;for(;r!==-1&&i[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Ke("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){Ke("KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(s!==void 0&&Ap(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ke("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Yr,a=e.length-1,r=1;for(let o=1;o<a;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[f+g]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];let d=o*i,h=r*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++r}}if(a>0){e[r]=e[a];for(let o=a*i,c=r*i,l=0;l!==i;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Al(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ih(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=so;var wi=class extends gn{constructor(e,t,i){super(e,t,i)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=xa;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};Mo.prototype.ValueTypeName="color";var bo=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};bo.prototype.ValueTypeName="number";var To=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)zt.slerpFlat(a,0,r,l-o,r,l,c);return a}},Ga=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}};Ga.prototype.ValueTypeName="quaternion";Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends gn{constructor(e,t,i){super(e,t,i)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=xa;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};Eo.prototype.ValueTypeName="vector";var wo=class{constructor(e,t,i){let s=this,a=!1,r=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cd=new wo,Co=class{constructor(e){this.manager=e!==void 0?e:Cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Co.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ha=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Sl=new ut,Ph=new Z,Lh=new Z,Wa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ph),Lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Sl,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,c=s?s.x/a.x:0,l=s?s.y/a.y:0;e.coordinateSystem===Ps||e.reversedDepth?t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$r=new Z,Xr=new zt,kn=new Z,qa=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($r,Xr,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($r,Xr,kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose($r,Xr,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($r,Xr,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ai=new Z,Nh=new Pe,Dh=new Pe,Ht=class extends qa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Nh,Dh),t.subVectors(Dh,Nh)}setViewOffset(e,t,i,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,t-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Pl=class extends Wa{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},$a=class extends Ha{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Pl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ks=class extends qa{constructor(e=-1,t=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-e,r=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ll=class extends Wa{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gs=class extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Ll}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ts=-90,Es=1,Ro=class extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(Ts,Es,e,t);s.layers=this.layers,this.add(s);let a=new Ht(Ts,Es,e,t);a.layers=this.layers,this.add(a);let r=new Ht(Ts,Es,e,t);r.layers=this.layers,this.add(r);let o=new Ht(Ts,Es,e,t);o.layers=this.layers,this.add(o);let c=new Ht(Ts,Es,e,t);c.layers=this.layers,this.add(c);let l=new Ht(Ts,Es,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,a,r,o,c]=t;for(let l of t)this.remove(l);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Io=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ru="\\[\\]\\.:\\/",Dm=new RegExp("["+ru+"]","g"),ou="[^"+ru+"]",Um="[^"+ru.replace("\\.","")+"]",Om=/((?:WC+[\/:])*)/.source.replace("WC",ou),Fm=/(WCOD+)?/.source.replace("WCOD",Um),Bm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ou),zm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ou),Vm=new RegExp("^"+Om+Fm+Bm+zm+"$"),km=["material","materials","bones","map"],Nl=class{constructor(e,t,i){let s=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},At=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dm,"")}static parseTrackName(e){let t=Vm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);km.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,a=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[s];if(r===void 0){let l=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Nl;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J_=new Float32Array(1);var Uh=new ut,Xa=class{constructor(e,t,i=0,s=1/0){this.ray=new Ea(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uh),this}intersectObject(e,t=!0,i=[]){return Dl(e,this,i,t),i.sort(Oh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,a=e.length;s<a;s++)Dl(e[s],this,i,t);return i.sort(Oh),i}};function Oh(n,e){return n.distance-e.distance}function Dl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let a=n.children;for(let r=0,o=a.length;r<o;r++)Dl(a[r],e,t,!0)}}var Ul=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=s,this}};function cu(n,e,t,i){let s=Gm(i);switch(t){case Ql:return n*e;case Bo:return n*e/s.components*s.byteLength;case zo:return n*e/s.components*s.byteLength;case Ni:return n*e*2/s.components*s.byteLength;case Vo:return n*e*2/s.components*s.byteLength;case eu:return n*e*3/s.components*s.byteLength;case bn:return n*e*4/s.components*s.byteLength;case ko:return n*e*4/s.components*s.byteLength;case ja:case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qa:case er:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ho:case qo:return Math.max(n,16)*Math.max(e,8)/4;case Go:case Wo:return Math.max(n,8)*Math.max(e,8)/2;case $o:case Xo:case Zo:case Jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yo:case tr:case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ec:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ic:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case uc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case dc:case fc:case pc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case mc:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case nr:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gm(n){switch(n){case cn:case Zl:return{byteLength:1,components:1};case qs:case Jl:case Fn:return{byteLength:2,components:1};case Oo:case Fo:return{byteLength:2,components:4};case On:case Uo:case Mn:return{byteLength:4,components:1};case jl:case Kl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Jd(){let n=null,e=!1,t=null,i=null;function s(a,r){i=n.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Zm(n){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jm=`#ifdef USE_ALPHAHASH
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
#endif`,Km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
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
#endif`,s0=`#ifdef USE_BATCHING
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
#endif`,a0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l0=`#ifdef USE_IRIDESCENCE
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_0=`#define PI 3.141592653589793
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
} // validated`,y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,A0=`vec3 transformedNormal = objectNormal;
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
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
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
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,N0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F0=`#ifdef USE_GRADIENTMAP
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
}`,B0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,G0=`#ifdef USE_ENVMAP
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
#endif`,H0=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
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
#endif`,Y0=`uniform sampler2D dfgLUT;
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
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
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rg=`#if defined( USE_POINTS_UV )
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
#endif`,og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`#ifdef USE_MORPHTARGETS
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
#endif`,fg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
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
#endif`,yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ug=`float getShadowMask() {
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
}`,Og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zg=`#ifdef USE_SKINNING
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
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jg=`uniform sampler2D t2D;
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`#include <common>
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
}`,iv=`#if DEPTH_PACKING == 3200
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
}`,sv=`#define DISTANCE
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
}`,av=`#define DISTANCE
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
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`uniform float scale;
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
}`,lv=`uniform vec3 diffuse;
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
}`,uv=`#include <common>
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
}`,hv=`uniform vec3 diffuse;
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
}`,dv=`#define LAMBERT
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
}`,fv=`#define LAMBERT
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
}`,pv=`#define MATCAP
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
}`,mv=`#define MATCAP
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
}`,gv=`#define NORMAL
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
}`,vv=`#define NORMAL
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
}`,xv=`#define PHONG
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
}`,_v=`#define PHONG
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
}`,yv=`#define STANDARD
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
}`,Av=`#define STANDARD
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
}`,Sv=`#define TOON
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
}`,Mv=`#define TOON
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
}`,bv=`uniform float size;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,Ev=`#include <common>
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
}`,wv=`uniform vec3 color;
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
}`,Cv=`uniform float rotation;
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
}`,Rv=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:Jm,alphahash_pars_fragment:jm,alphamap_fragment:Km,alphamap_pars_fragment:Qm,alphatest_fragment:e0,alphatest_pars_fragment:t0,aomap_fragment:n0,aomap_pars_fragment:i0,batching_pars_vertex:s0,batching_vertex:a0,begin_vertex:r0,beginnormal_vertex:o0,bsdfs:c0,iridescence_fragment:l0,bumpmap_pars_fragment:u0,clipping_planes_fragment:h0,clipping_planes_pars_fragment:d0,clipping_planes_pars_vertex:f0,clipping_planes_vertex:p0,color_fragment:m0,color_pars_fragment:g0,color_pars_vertex:v0,color_vertex:x0,common:_0,cube_uv_reflection_fragment:y0,defaultnormal_vertex:A0,displacementmap_pars_vertex:S0,displacementmap_vertex:M0,emissivemap_fragment:b0,emissivemap_pars_fragment:T0,colorspace_fragment:E0,colorspace_pars_fragment:w0,envmap_fragment:C0,envmap_common_pars_fragment:R0,envmap_pars_fragment:I0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:G0,envmap_vertex:L0,fog_vertex:N0,fog_pars_vertex:D0,fog_fragment:U0,fog_pars_fragment:O0,gradientmap_pars_fragment:F0,lightmap_pars_fragment:B0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:V0,lights_pars_begin:k0,lights_toon_fragment:H0,lights_toon_pars_fragment:W0,lights_phong_fragment:q0,lights_phong_pars_fragment:$0,lights_physical_fragment:X0,lights_physical_pars_fragment:Y0,lights_fragment_begin:Z0,lights_fragment_maps:J0,lights_fragment_end:j0,lightprobes_pars_fragment:K0,logdepthbuf_fragment:Q0,logdepthbuf_pars_fragment:eg,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:ng,map_fragment:ig,map_pars_fragment:sg,map_particle_fragment:ag,map_particle_pars_fragment:rg,metalnessmap_fragment:og,metalnessmap_pars_fragment:cg,morphinstance_vertex:lg,morphcolor_vertex:ug,morphnormal_vertex:hg,morphtarget_pars_vertex:dg,morphtarget_vertex:fg,normal_fragment_begin:pg,normal_fragment_maps:mg,normal_pars_fragment:gg,normal_pars_vertex:vg,normal_vertex:xg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:yg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:Sg,iridescence_pars_fragment:Mg,opaque_fragment:bg,packing:Tg,premultiplied_alpha_fragment:Eg,project_vertex:wg,dithering_fragment:Cg,dithering_pars_fragment:Rg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Pg,shadowmap_pars_fragment:Lg,shadowmap_pars_vertex:Ng,shadowmap_vertex:Dg,shadowmask_pars_fragment:Ug,skinbase_vertex:Og,skinning_pars_vertex:Fg,skinning_vertex:Bg,skinnormal_vertex:zg,specularmap_fragment:Vg,specularmap_pars_fragment:kg,tonemapping_fragment:Gg,tonemapping_pars_fragment:Hg,transmission_fragment:Wg,transmission_pars_fragment:qg,uv_pars_fragment:$g,uv_pars_vertex:Xg,uv_vertex:Yg,worldpos_vertex:Zg,background_vert:Jg,background_frag:jg,backgroundCube_vert:Kg,backgroundCube_frag:Qg,cube_vert:ev,cube_frag:tv,depth_vert:nv,depth_frag:iv,distance_vert:sv,distance_frag:av,equirect_vert:rv,equirect_frag:ov,linedashed_vert:cv,linedashed_frag:lv,meshbasic_vert:uv,meshbasic_frag:hv,meshlambert_vert:dv,meshlambert_frag:fv,meshmatcap_vert:pv,meshmatcap_frag:mv,meshnormal_vert:gv,meshnormal_frag:vv,meshphong_vert:xv,meshphong_frag:_v,meshphysical_vert:yv,meshphysical_frag:Av,meshtoon_vert:Sv,meshtoon_frag:Mv,points_vert:bv,points_frag:Tv,shadow_vert:Ev,shadow_frag:wv,sprite_vert:Cv,sprite_frag:Rv},Ue={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Zn={basic:{uniforms:jt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:jt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:jt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:jt([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:jt([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new it(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:jt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:jt([Ue.points,Ue.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:jt([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:jt([Ue.common,Ue.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:jt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:jt([Ue.sprite,Ue.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:jt([Ue.common,Ue.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:jt([Ue.lights,Ue.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Zn.physical={uniforms:jt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var yc={r:0,b:0,g:0},Iv=new ut,jd=new nt;jd.set(-1,0,0,0,1,0,0,0,1);function Pv(n,e,t,i,s,a){let r=new it(0),o=s===!0?0:1,c,l,u=null,d=0,h=null;function f(A){let M=A.isScene===!0?A.background:null;if(M&&M.isTexture){let v=A.backgroundBlurriness>0;M=e.get(M,v)}return M}function g(A){let M=!1,v=f(A);v===null?p(r,o):v&&v.isColor&&(p(v,1),M=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(A,M){let v=f(M);v&&(v.isCubeTexture||v.mapping===Za)?(l===void 0&&(l=new vt(new ci(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:is(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(jd),l.material.toneMapped=lt.getTransfer(v.colorSpace)!==pt,(u!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new vt(new li(2,2),new pn({name:"BackgroundMaterial",uniforms:is(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=lt.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,M){A.getRGB(yc,au(n)),t.buffers.color.setClear(yc.r,yc.g,yc.b,M,a)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(A,M=1){r.set(A),o=M,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,p(r,o)},render:g,addToRenderList:y,dispose:m}}function Lv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(z,k,ie,V,Y){let le=!1,ce=d(z,V,ie,k);a!==ce&&(a=ce,l(a.object)),le=f(z,V,ie,Y),le&&g(z,V,ie,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(le||r)&&(r=!1,v(z,k,ie,V),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function l(z){return n.bindVertexArray(z)}function u(z){return n.deleteVertexArray(z)}function d(z,k,ie,V){let Y=V.wireframe===!0,le=i[k.id];le===void 0&&(le={},i[k.id]=le);let ce=z.isInstancedMesh===!0?z.id:0,ae=le[ce];ae===void 0&&(ae={},le[ce]=ae);let $=ae[ie.id];$===void 0&&($={},ae[ie.id]=$);let X=$[Y];return X===void 0&&(X=h(c()),$[Y]=X),X}function h(z){let k=[],ie=[],V=[];for(let Y=0;Y<t;Y++)k[Y]=0,ie[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ie,attributeDivisors:V,object:z,attributes:{},index:null}}function f(z,k,ie,V){let Y=a.attributes,le=k.attributes,ce=0,ae=ie.getAttributes();for(let $ in ae)if(ae[$].location>=0){let D=Y[$],K=le[$];if(K===void 0&&($==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),$==="instanceColor"&&z.instanceColor&&(K=z.instanceColor)),D===void 0||D.attribute!==K||K&&D.data!==K.data)return!0;ce++}return a.attributesNum!==ce||a.index!==V}function g(z,k,ie,V){let Y={},le=k.attributes,ce=0,ae=ie.getAttributes();for(let $ in ae)if(ae[$].location>=0){let D=le[$];D===void 0&&($==="instanceMatrix"&&z.instanceMatrix&&(D=z.instanceMatrix),$==="instanceColor"&&z.instanceColor&&(D=z.instanceColor));let K={};K.attribute=D,D&&D.data&&(K.data=D.data),Y[$]=K,ce++}a.attributes=Y,a.attributesNum=ce,a.index=V}function y(){let z=a.newAttributes;for(let k=0,ie=z.length;k<ie;k++)z[k]=0}function p(z){m(z,0)}function m(z,k){let ie=a.newAttributes,V=a.enabledAttributes,Y=a.attributeDivisors;ie[z]=1,V[z]===0&&(n.enableVertexAttribArray(z),V[z]=1),Y[z]!==k&&(n.vertexAttribDivisor(z,k),Y[z]=k)}function A(){let z=a.newAttributes,k=a.enabledAttributes;for(let ie=0,V=k.length;ie<V;ie++)k[ie]!==z[ie]&&(n.disableVertexAttribArray(ie),k[ie]=0)}function M(z,k,ie,V,Y,le,ce){ce===!0?n.vertexAttribIPointer(z,k,ie,Y,le):n.vertexAttribPointer(z,k,ie,V,Y,le)}function v(z,k,ie,V){y();let Y=V.attributes,le=ie.getAttributes(),ce=k.defaultAttributeValues;for(let ae in le){let $=le[ae];if($.location>=0){let X=Y[ae];if(X===void 0&&(ae==="instanceMatrix"&&z.instanceMatrix&&(X=z.instanceMatrix),ae==="instanceColor"&&z.instanceColor&&(X=z.instanceColor)),X!==void 0){let D=X.normalized,K=X.itemSize,F=e.get(X);if(F===void 0)continue;let q=F.buffer,W=F.type,O=F.bytesPerElement,E=W===n.INT||W===n.UNSIGNED_INT||X.gpuType===Uo;if(X.isInterleavedBufferAttribute){let b=X.data,R=b.stride,P=X.offset;if(b.isInstancedInterleavedBuffer){for(let N=0;N<$.locationSize;N++)m($.location+N,b.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let N=0;N<$.locationSize;N++)p($.location+N);n.bindBuffer(n.ARRAY_BUFFER,q);for(let N=0;N<$.locationSize;N++)M($.location+N,K/$.locationSize,W,D,R*O,(P+K/$.locationSize*N)*O,E)}else{if(X.isInstancedBufferAttribute){for(let b=0;b<$.locationSize;b++)m($.location+b,X.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let b=0;b<$.locationSize;b++)p($.location+b);n.bindBuffer(n.ARRAY_BUFFER,q);for(let b=0;b<$.locationSize;b++)M($.location+b,K/$.locationSize,W,D,K*O,K/$.locationSize*b*O,E)}}else if(ce!==void 0){let D=ce[ae];if(D!==void 0)switch(D.length){case 2:n.vertexAttrib2fv($.location,D);break;case 3:n.vertexAttrib3fv($.location,D);break;case 4:n.vertexAttrib4fv($.location,D);break;default:n.vertexAttrib1fv($.location,D)}}}}A()}function S(){C();for(let z in i){let k=i[z];for(let ie in k){let V=k[ie];for(let Y in V){let le=V[Y];for(let ce in le)u(le[ce].object),delete le[ce];delete V[Y]}}delete i[z]}}function w(z){if(i[z.id]===void 0)return;let k=i[z.id];for(let ie in k){let V=k[ie];for(let Y in V){let le=V[Y];for(let ce in le)u(le[ce].object),delete le[ce];delete V[Y]}}delete i[z.id]}function L(z){for(let k in i){let ie=i[k];for(let V in ie){let Y=ie[V];if(Y[z.id]===void 0)continue;let le=Y[z.id];for(let ce in le)u(le[ce].object),delete le[ce];delete Y[z.id]}}}function _(z){for(let k in i){let ie=i[k],V=z.isInstancedMesh===!0?z.id:0,Y=ie[V];if(Y!==void 0){for(let le in Y){let ce=Y[le];for(let ae in ce)u(ce[ae].object),delete ce[ae];delete Y[le]}delete ie[V],Object.keys(ie).length===0&&delete i[k]}}}function C(){U(),r=!0,a!==s&&(a=s,l(a.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:p,disableUnusedAttributes:A}}function Nv(n,e,t){let i;function s(c){i=c}function a(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function r(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Dv(n,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(L){return!(L!==bn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let _=L===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==cn&&L!==Mn&&!_&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(je("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:A,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:w}}function Uv(n){let e=this,t=null,i=0,s=!1,a=!1,r=new Nn,o=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||a&&!p)a?u(null):l();else{let A=a?0:i,M=A*4,v=m.clippingState||null;c.value=v,v=u(g,h,M,f);for(let S=0;S!==M;++S)v[S]=t[S];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let m=f+y*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=f;M!==y;++M,v+=4)r.copy(d[M]).applyMatrix4(A,o),r.normal.toArray(p,v),p[v+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var Ys=4,Ov=6,Fv=20,Bv=256,sr=new ks,Rd=new it,lu=null,uu=0,hu=0,du=!1,zv=new Z,ss=new Z,Js=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){let{size:r=256,position:o=zv}=a;lu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lu,uu,hu),this._renderer.xr.enabled=du,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Fn,format:bn,colorSpace:_a,depthBuffer:!1},s=Id(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Id(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vv(a)),this._blurMaterial=Gv(a,e,t),this._ggxMaterial=kv(a,e,t)}return s}_compileMaterial(e){let t=new vt(new on,e);this._renderer.compile(t,sr)}_sceneToCubeUV(e,t,i,s,a){let c=new Ht(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Rd),d.toneMapping=Un,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vt(new ci,new wa({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,A=e.background;A?A.isColor&&(p.color.copy(A),e.background=null,m=!0):(p.color.copy(Rd),m=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+u[M],a.y,a.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+u[M],a.z)):(c.up.set(0,l[M],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+u[M]));let S=this._cubeSize;Xs(s,v*S,M>2?S:0,S,S),d.setRenderTarget(s),m&&d.render(y,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=A}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ii||e.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pd());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=e;let c=this._cubeSize;Xs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(r,sr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let c=r.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:g}=this,y=this._sizeLods[i],p=3*y*(i>g-Ys?i-g+Ys:0),m=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Xs(a,p,m,3*y,2*y),s.setRenderTarget(a),s.render(o,sr),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=g-i,Xs(e,p,m,3*y,2*y),s.setRenderTarget(e),s.render(o,sr)}_blur(e,t,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,r),this._blurPass(a,e,i,i,r)}_blurPass(e,t,i,s,a){let r=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Ys?s-this._lodMax+Ys:0),h=4*(this._cubeSize-u);Xs(t,d,h,3*u,2*u),r.setRenderTarget(t),r.render(c,sr)}};function Vv(n){let e=[],t=[],i=n,s=n-Ys+1+Ov;for(let a=0;a<s;a++){let r=Math.pow(2,i);e.push(r);let o=1/(r-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),y=new Float32Array(f*h*d);for(let m=0;m<d;m++){let A=m%3*2/3-1,M=m>2?0:-1,v=[A,M,0,A+2/3,M,0,A+2/3,M+1,0,A,M,0,A+2/3,M+1,0,A,M+1,0];g.set(v,f*h*m);for(let S=0;S<h;S++){let w=u[S*2]*2-1,L=u[S*2+1]*2-1;m===0?ss.set(1,L,w):m===1?ss.set(-w,1,-L):m===2?ss.set(-w,L,1):m===3?ss.set(-1,L,-w):m===4?ss.set(-w,-1,L):ss.set(w,L,-1),ss.toArray(y,(m*h+S)*f)}}let p=new on;p.setAttribute("position",new en(g,f)),p.setAttribute("outputDirection",new en(y,f)),t.push(new vt(p,null)),i>Ys&&i--}return{lodMeshes:t,sizeLods:e}}function Id(n,e,t){let i=new rn(n,e,t);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function kv(n,e,t){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Gv(n,e,t){return new pn({name:"SphericalGaussianBlur",defines:{SAMPLES:Fv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Pd(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ld(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Sc=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ra(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ci(5,5,5),a=new pn({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Xn});a.uniforms.tEquirect.value=t;let r=new vt(s,a),o=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Wt),new Ro(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(a)}};function Hv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?r(h):a(h)}function a(h){if(h&&h.isTexture){let f=h.mapping;if(f===Lo||f===No)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new Sc(g.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",l),o(y.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){let f=h.mapping,g=f===Lo||f===No,y=f===Ii||f===ts;if(g||y){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new Js(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let A=h.image;return g&&A&&A.height>0||y&&A&&c(A)?(i===null&&(i=new Js(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Lo?h.mapping=Ii:f===No&&(h.mapping=ts),h}function c(h){let f=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&f++;return f===g}function l(h){let f=h.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Wv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Yi("WebGLRenderer: "+i+" extension not supported."),s}}}function qv(n,e,t,i){let s={},a=new WeakMap;function r(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete s[h.id];let f=a.get(h);f&&(e.remove(f),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let A=f.array;y=f.version;for(let M=0,v=A.length;M<v;M+=3){let S=A[M+0],w=A[M+1],L=A[M+2];h.push(S,w,w,L,L,S)}}else{let A=g.array;y=g.version;for(let M=0,v=A.length/3-1;M<v;M+=3){let S=M+0,w=M+1,L=M+2;h.push(S,w,w,L,L,S)}}let p=new(g.count>=65535?Ta:ba)(h,1);p.version=y;let m=a.get(d);m&&e.remove(m),a.set(d,p)}function u(d){let h=a.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function $v(n,e,t){let i;function s(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function c(d,h){n.drawElements(i,h,a,d*r),t.update(h,i,1)}function l(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,a,d*r,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,a,d,0,f);let y=0;for(let p=0;p<f;p++)y+=h[p];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Xv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:Ke("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Yv(n,e,t){let i=new WeakMap,s=new St;function a(r,o,c){let l=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let C=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let v=o.attributes.position.count*M,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*S*4*d),L=new Sa(w,v,S,d);L.type=Mn,L.needsUpdate=!0;let _=M*4;for(let U=0;U<d;U++){let z=p[U],k=m[U],ie=A[U],V=v*S*4*U;for(let Y=0;Y<z.count;Y++){let le=Y*_;f===!0&&(s.fromBufferAttribute(z,Y),w[V+le+0]=s.x,w[V+le+1]=s.y,w[V+le+2]=s.z,w[V+le+3]=0),g===!0&&(s.fromBufferAttribute(k,Y),w[V+le+4]=s.x,w[V+le+5]=s.y,w[V+le+6]=s.z,w[V+le+7]=0),y===!0&&(s.fromBufferAttribute(ie,Y),w[V+le+8]=s.x,w[V+le+9]=s.y,w[V+le+10]=s.z,w[V+le+11]=ie.itemSize===4?s.w:1)}}h={count:d,texture:L,size:new Pe(v,S)},i.set(o,h),o.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:a}}function Zv(n,e,t,i,s){let a=new WeakMap;function r(l){let u=s.render.frame,d=l.geometry,h=e.get(l,d);if(a.get(h)!==u&&(e.update(h),a.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),a.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;a.get(f)!==u&&(f.update(),a.set(f,u))}return h}function o(){a=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}var Jv={[Gl]:"LINEAR_TONE_MAPPING",[Hl]:"REINHARD_TONE_MAPPING",[Wl]:"CINEON_TONE_MAPPING",[ql]:"ACES_FILMIC_TONE_MAPPING",[Xl]:"AGX_TONE_MAPPING",[Ya]:"NEUTRAL_TONE_MAPPING",[$l]:"CUSTOM_TONE_MAPPING"};function jv(n,e,t,i,s,a){let r=new rn(e,t,{type:n,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new on;l.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Et([0,2,0,0,2,0],2));let u=new go({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new vt(l,u),h=new ks(-1,1,1,-1,0,1),f=null,g=null,y=!1,p,m=null,A=[],M=!1;this.setSize=function(v,S){r.setSize(v,S),o!==null&&o.setSize(v,S),c!==null&&c.setSize(v,S);for(let w=0;w<A.length;w++){let L=A[w];L.setSize&&L.setSize(v,S)}},this.setEffects=function(v){A=v,M=A.length>0&&A[0].isRenderPass===!0;let S=r.width,w=r.height;A.length>0&&o===null&&(o=new rn(S,w,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),c=new rn(S,w,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<A.length;L++){let _=A[L];_.setSize&&_.setSize(S,w)}},this.begin=function(v,S){if(y||v.toneMapping===Un&&A.length===0)return!1;if(m=S,S!==null){let w=S.width,L=S.height;(r.width!==w||r.height!==L)&&this.setSize(w,L)}return M===!1&&v.setRenderTarget(r),p=v.toneMapping,v.toneMapping=Un,!0},this.hasRenderPass=function(){return M},this.end=function(v,S){v.toneMapping=p,y=!0;let w=r,L=o;for(let _=0;_<A.length;_++){let C=A[_];C.enabled!==!1&&(C.render(v,L,w,S),C.needsSwap!==!1&&(w=L,L=L===o?c:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,u.defines={},lt.getTransfer(f)===pt&&(u.defines.SRGB_TRANSFER="");let _=Jv[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(d,h),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Kd=new tn,mu=new Ti(1,1),Qd=new Sa,ef=new oo,tf=new Ra,Nd=[],Dd=[],Ud=new Float32Array(16),Od=new Float32Array(9),Fd=new Float32Array(4);function js(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,a=Nd[s];if(a===void 0&&(a=new Float32Array(s),Nd[s]=a),e!==0){i.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(a,o)}return a}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tc(n,e){let t=Dd[e];t===void 0&&(t=new Int32Array(e),Dd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function e1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function t1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function n1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;Fd.set(i),n.uniformMatrix2fv(this.addr,!1,Fd),Ut(t,i)}}function i1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;Od.set(i),n.uniformMatrix3fv(this.addr,!1,Od),Ut(t,i)}}function s1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;Ud.set(i),n.uniformMatrix4fv(this.addr,!1,Ud),Ut(t,i)}}function a1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function r1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function o1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function c1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function l1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function u1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function h1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function d1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function f1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(mu.compareFunction=t.isReversedDepthBuffer()?_c:xc,a=mu):a=Kd,t.setTexture2D(e||a,s)}function p1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ef,s)}function m1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||tf,s)}function g1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Qd,s)}function v1(n){switch(n){case 5126:return Kv;case 35664:return Qv;case 35665:return e1;case 35666:return t1;case 35674:return n1;case 35675:return i1;case 35676:return s1;case 5124:case 35670:return a1;case 35667:case 35671:return r1;case 35668:case 35672:return o1;case 35669:case 35673:return c1;case 5125:return l1;case 36294:return u1;case 36295:return h1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}function x1(n,e){n.uniform1fv(this.addr,e)}function _1(n,e){let t=js(e,this.size,2);n.uniform2fv(this.addr,t)}function y1(n,e){let t=js(e,this.size,3);n.uniform3fv(this.addr,t)}function A1(n,e){let t=js(e,this.size,4);n.uniform4fv(this.addr,t)}function S1(n,e){let t=js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function M1(n,e){let t=js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function b1(n,e){let t=js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function T1(n,e){n.uniform1iv(this.addr,e)}function E1(n,e){n.uniform2iv(this.addr,e)}function w1(n,e){n.uniform3iv(this.addr,e)}function C1(n,e){n.uniform4iv(this.addr,e)}function R1(n,e){n.uniform1uiv(this.addr,e)}function I1(n,e){n.uniform2uiv(this.addr,e)}function P1(n,e){n.uniform3uiv(this.addr,e)}function L1(n,e){n.uniform4uiv(this.addr,e)}function N1(n,e,t){let i=this.cache,s=e.length,a=Tc(t,s);Dt(i,a)||(n.uniform1iv(this.addr,a),Ut(i,a));let r;this.type===n.SAMPLER_2D_SHADOW?r=mu:r=Kd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function D1(n,e,t){let i=this.cache,s=e.length,a=Tc(t,s);Dt(i,a)||(n.uniform1iv(this.addr,a),Ut(i,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||ef,a[r])}function U1(n,e,t){let i=this.cache,s=e.length,a=Tc(t,s);Dt(i,a)||(n.uniform1iv(this.addr,a),Ut(i,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||tf,a[r])}function O1(n,e,t){let i=this.cache,s=e.length,a=Tc(t,s);Dt(i,a)||(n.uniform1iv(this.addr,a),Ut(i,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Qd,a[r])}function F1(n){switch(n){case 5126:return x1;case 35664:return _1;case 35665:return y1;case 35666:return A1;case 35674:return S1;case 35675:return M1;case 35676:return b1;case 5124:case 35670:return T1;case 35667:case 35671:return E1;case 35668:case 35672:return w1;case 35669:case 35673:return C1;case 5125:return R1;case 36294:return I1;case 36295:return P1;case 36296:return L1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return O1}}var gu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=v1(t.type)}},vu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=F1(t.type)}},xu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(e,t[o.id],i)}}},fu=/(\w+)(\])?(\[|\.)?/g;function Bd(n,e){n.seq.push(e),n.map[e.id]=e}function B1(n,e,t){let i=n.name,s=i.length;for(fu.lastIndex=0;;){let a=fu.exec(i),r=fu.lastIndex,o=a[1],c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){Bd(t,l===void 0?new gu(o,n,e):new vu(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new xu(o),Bd(t,d)),t=d}}}var Zs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);B1(o,c,this)}let s=[],a=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){let a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,r=t.length;a!==r;++a){let o=t[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,a=e.length;s!==a;++s){let r=e[s];r.id in t&&i.push(r)}return i}};function zd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var z1=37297,V1=0;function k1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}var Vd=new nt;function G1(n){lt._getMatrix(Vd,lt.workingColorSpace,n);let e=`mat3( ${Vd.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case ya:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function kd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+k1(n.getShaderSource(e),o)}else return a}function H1(n,e){let t=G1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var W1={[Gl]:"Linear",[Hl]:"Reinhard",[Wl]:"Cineon",[ql]:"ACESFilmic",[Xl]:"AgX",[Ya]:"Neutral",[$l]:"Custom"};function q1(n,e){let t=W1[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ac=new Z;function $1(){lt.getLuminanceCoefficients(Ac);let n=Ac.x.toFixed(4),e=Ac.y.toFixed(4),t=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function Y1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Z1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=n.getActiveAttrib(e,s),r=a.name,o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function rr(n){return n!==""}function Gd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var J1=/^[ \t]*#include +<([\w\d./]+)>/gm;function _u(n){return n.replace(J1,K1)}var j1=new Map;function K1(n,e){let t=at[e];if(t===void 0){let i=j1.get(e);if(i!==void 0)t=at[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _u(t)}var Q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wd(n){return n.replace(Q1,ex)}function ex(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function qd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var tx={[Qi]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function nx(n){return tx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ix={[Ii]:"ENVMAP_TYPE_CUBE",[ts]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE_UV"};function sx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ix[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var ax={[ts]:"ENVMAP_MODE_REFRACTION"};function rx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ax[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ox={[Po]:"ENVMAP_BLENDING_MULTIPLY",[sd]:"ENVMAP_BLENDING_MIX",[ad]:"ENVMAP_BLENDING_ADD"};function cx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ox[n.combine]||"ENVMAP_BLENDING_NONE"}function lx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ux(n,e,t,i){let s=n.getContext(),a=t.defines,r=t.vertexShader,o=t.fragmentShader,c=nx(t),l=sx(t),u=rx(t),d=cx(t),h=lx(t),f=X1(t),g=Y1(a),y=s.createProgram(),p,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),m.length>0&&(m+=`
`)):(p=[qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),m=[qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?at.tonemapping_pars_fragment:"",t.toneMapping!==Un?q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,H1("linearToOutputTexel",t.outputColorSpace),$1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),r=_u(r),r=Gd(r,t),r=Hd(r,t),o=_u(o),o=Gd(o,t),o=Hd(o,t),r=Wd(r),o=Wd(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=A+p+r,v=A+m+o,S=zd(s,s.VERTEX_SHADER,M),w=zd(s,s.FRAGMENT_SHADER,v);s.attachShader(y,S),s.attachShader(y,w),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(z){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(y)||"",ie=s.getShaderInfoLog(S)||"",V=s.getShaderInfoLog(w)||"",Y=k.trim(),le=ie.trim(),ce=V.trim(),ae=!0,$=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,S,w);else{let X=kd(s,S,"vertex"),D=kd(s,w,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Y+`
`+X+`
`+D)}else Y!==""?je("WebGLProgram: Program Info Log:",Y):(le===""||ce==="")&&($=!1);$&&(z.diagnostics={runnable:ae,programLog:Y,vertexShader:{log:le,prefix:p},fragmentShader:{log:ce,prefix:m}})}s.deleteShader(S),s.deleteShader(w),_=new Zs(s,y),C=Z1(s,y)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let C;this.getAttributes=function(){return C===void 0&&L(this),C};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(y,z1)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=w,this}var hx=0,yu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Au(e),t.set(e,i)),i}},Au=class{constructor(e){this.id=hx++,this.code=e,this.usedTimes=0}};function dx(n){return n===Ni||n===tr||n===nr}function fx(n,e,t,i,s,a){let r=new Us,o=new yu,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,C,U,z,k,ie){let V=z.fog,Y=k.geometry,le=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?z.environment:null,ce=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ae=e.get(_.envMap||le,ce),$=ae&&ae.mapping===Za?ae.image.height:null,X=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&je("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let D=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,K=D!==void 0?D.length:0,F=0;Y.morphAttributes.position!==void 0&&(F=1),Y.morphAttributes.normal!==void 0&&(F=2),Y.morphAttributes.color!==void 0&&(F=3);let q,W,O,E;if(X){let mt=Zn[X];q=mt.vertexShader,W=mt.fragmentShader}else{q=_.vertexShader,W=_.fragmentShader;let mt=o.getVertexShaderStage(_),ht=o.getFragmentShaderStage(_);o.update(_,mt,ht),O=mt.id,E=ht.id}let b=n.getRenderTarget(),R=n.state.buffers.depth.getReversed(),P=k.isInstancedMesh===!0,N=k.isBatchedMesh===!0,J=!!_.map,te=!!_.matcap,H=!!ae,se=!!_.aoMap,re=!!_.lightMap,G=!!_.bumpMap&&_.wireframe===!1,j=!!_.normalMap,ve=!!_.displacementMap,ye=!!_.emissiveMap,Ee=!!_.metalnessMap,Te=!!_.roughnessMap,B=_.anisotropy>0,Ve=_.clearcoat>0,De=_.dispersion>0,I=_.retroreflectivity>0,x=_.iridescence>0,ne=_.sheen>0,oe=_.transmission>0,pe=B&&!!_.anisotropyMap,we=Ve&&!!_.clearcoatMap,Ce=Ve&&!!_.clearcoatNormalMap,xe=Ve&&!!_.clearcoatRoughnessMap,Ae=x&&!!_.iridescenceMap,Ne=x&&!!_.iridescenceThicknessMap,ke=ne&&!!_.sheenColorMap,de=ne&&!!_.sheenRoughnessMap,Me=!!_.specularMap,Ie=!!_.specularColorMap,Ge=!!_.specularIntensityMap,Je=oe&&!!_.transmissionMap,Q=oe&&!!_.thicknessMap,Re=!!_.gradientMap,_e=!!_.alphaMap,be=_.alphaTest>0,Le=!!_.alphaHash,Se=!!_.extensions,We=Un;_.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(We=n.toneMapping);let $e={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:W,defines:_.defines,customVertexShaderID:O,customFragmentShaderID:E,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:N,batchingColor:N&&k._colorsTexture!==null,instancing:P,instancingColor:P&&k.instanceColor!==null,instancingMorph:P&&k.morphTexture!==null,outputColorSpace:b===null?n.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:J,matcap:te,envMap:H,envMapMode:H&&ae.mapping,envMapCubeUVHeight:$,aoMap:se,lightMap:re,bumpMap:G,normalMap:j,displacementMap:ve,emissiveMap:ye,normalMapObjectSpace:j&&_.normalMapType===cd,normalMapTangentSpace:j&&_.normalMapType===ir,packedNormalMap:j&&_.normalMapType===ir&&dx(_.normalMap.format),metalnessMap:Ee,roughnessMap:Te,anisotropy:B,anisotropyMap:pe,clearcoat:Ve,clearcoatMap:we,clearcoatNormalMap:Ce,clearcoatRoughnessMap:xe,dispersion:De,retroreflection:I,iridescence:x,iridescenceMap:Ae,iridescenceThicknessMap:Ne,sheen:ne,sheenColorMap:ke,sheenRoughnessMap:de,specularMap:Me,specularColorMap:Ie,specularIntensityMap:Ge,transmission:oe,transmissionMap:Je,thicknessMap:Q,gradientMap:Re,opaque:_.transparent===!1&&_.blending===Ws&&_.alphaToCoverage===!1,alphaMap:_e,alphaTest:be,alphaHash:Le,combine:_.combine,mapUv:J&&g(_.map.channel),aoMapUv:se&&g(_.aoMap.channel),lightMapUv:re&&g(_.lightMap.channel),bumpMapUv:G&&g(_.bumpMap.channel),normalMapUv:j&&g(_.normalMap.channel),displacementMapUv:ve&&g(_.displacementMap.channel),emissiveMapUv:ye&&g(_.emissiveMap.channel),metalnessMapUv:Ee&&g(_.metalnessMap.channel),roughnessMapUv:Te&&g(_.roughnessMap.channel),anisotropyMapUv:pe&&g(_.anisotropyMap.channel),clearcoatMapUv:we&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(_.sheenRoughnessMap.channel),specularMapUv:Me&&g(_.specularMap.channel),specularColorMapUv:Ie&&g(_.specularColorMap.channel),specularIntensityMapUv:Ge&&g(_.specularIntensityMap.channel),transmissionMapUv:Je&&g(_.transmissionMap.channel),thicknessMapUv:Q&&g(_.thicknessMap.channel),alphaMapUv:_e&&g(_.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(j||B),vertexNormals:!!Y.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(J||_e),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||Y.attributes.normal===void 0&&j===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:R,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:F,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:We,decodeVideoTexture:J&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===pt,decodeVideoTextureEmissive:ye&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===$n,flipSided:_.side===$t,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&_.extensions.multiDraw===!0||N)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function p(_){let C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)C.push(U),C.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(m(C,_),A(C,_),C.push(n.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function m(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function A(_,C){r.disableAll(),C.instancing&&r.enable(0),C.instancingColor&&r.enable(1),C.instancingMorph&&r.enable(2),C.matcap&&r.enable(3),C.envMap&&r.enable(4),C.normalMapObjectSpace&&r.enable(5),C.normalMapTangentSpace&&r.enable(6),C.clearcoat&&r.enable(7),C.iridescence&&r.enable(8),C.alphaTest&&r.enable(9),C.vertexColors&&r.enable(10),C.vertexAlphas&&r.enable(11),C.vertexUv1s&&r.enable(12),C.vertexUv2s&&r.enable(13),C.vertexUv3s&&r.enable(14),C.vertexTangents&&r.enable(15),C.anisotropy&&r.enable(16),C.alphaHash&&r.enable(17),C.batching&&r.enable(18),C.dispersion&&r.enable(19),C.retroreflection&&r.enable(24),C.batchingColor&&r.enable(20),C.gradientMap&&r.enable(21),C.packedNormalMap&&r.enable(22),C.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),C.fog&&r.enable(0),C.useFog&&r.enable(1),C.flatShading&&r.enable(2),C.logarithmicDepthBuffer&&r.enable(3),C.reversedDepthBuffer&&r.enable(4),C.skinning&&r.enable(5),C.morphTargets&&r.enable(6),C.morphNormals&&r.enable(7),C.morphColors&&r.enable(8),C.premultipliedAlpha&&r.enable(9),C.shadowMapEnabled&&r.enable(10),C.doubleSided&&r.enable(11),C.flipSided&&r.enable(12),C.useDepthPacking&&r.enable(13),C.dithering&&r.enable(14),C.transmission&&r.enable(15),C.sheen&&r.enable(16),C.opaque&&r.enable(17),C.pointsUvs&&r.enable(18),C.decodeVideoTexture&&r.enable(19),C.decodeVideoTextureEmissive&&r.enable(20),C.alphaToCoverage&&r.enable(21),C.numLightProbeGrids>0&&r.enable(22),C.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function M(_){let C=f[_.type],U;if(C){let z=Zn[C];U=Ed.clone(z.uniforms)}else U=_.uniforms;return U}function v(_,C){let U=u.get(C);return U!==void 0?++U.usedTimes:(U=new ux(n,C,_,s),l.push(U),u.set(C,U)),U}function S(_){if(--_.usedTimes===0){let C=l.indexOf(_);l[C]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function L(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:M,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:L}}function px(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,c){n.get(r)[o]=c}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function mx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $d(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xd(){let n=[],e=0,t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function r(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,y,p,m){let A=n[e];return A===void 0?(A={id:h.id,object:h,geometry:f,material:g,materialVariant:r(h),groupOrder:y,renderOrder:h.renderOrder,z:p,group:m},n[e]=A):(A.id=h.id,A.object=h,A.geometry=f,A.material=g,A.materialVariant=r(h),A.groupOrder=y,A.renderOrder=h.renderOrder,A.z=p,A.group=m),e++,A}function c(h,f,g,y,p,m,A){A.reversedDepth===!0&&(p=-p);let M=o(h,f,g,y,p,m);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):t.push(M)}function l(h,f,g,y,p,m){let A=o(h,f,g,y,p,m);g.transmission>0?i.unshift(A):g.transparent===!0?s.unshift(A):t.unshift(A)}function u(h,f){t.length>1&&t.sort(h||mx),i.length>1&&i.sort(f||$d),s.length>1&&s.sort(f||$d)}function d(){for(let h=e,f=n.length;h<f;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:c,unshift:l,finish:d,sort:u}}function gx(){let n=new WeakMap;function e(i,s){let a=n.get(i),r;return a===void 0?(r=new Xd,n.set(i,[r])):s>=a.length?(r=new Xd,a.push(r)):r=a[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function vx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new it};break;case"SpotLight":t={position:new Z,direction:new Z,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function xx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var _x=0;function yx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ax(n){let e=new vx,t=xx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Z);let s=new Z,a=new ut,r=new ut;function o(l){let u=0,d=0,h=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,A=0,M=0,v=0,S=0,w=0,L=0,_=0,C=0,U=0;l.sort(yx);for(let k=0,ie=l.length;k<ie;k++){let V=l[k],Y=V.color,le=V.intensity,ce=V.distance,ae=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ni?ae=V.shadow.map.texture:ae=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)u+=Y.r*le,d+=Y.g*le,h+=Y.b*le;else if(V.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(V.sh.coefficients[$],le);U++}else if(V.isSunLight){let $=e.get(V);if($.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let X=V.shadow,D=t.get(V);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[g]=D,i.sunShadowMap[g]=ae;let K=X.getViewportCount();for(let F=0;F<K;F++)i.sunShadowMatrix[y+F]=X.getMatrix(F),i.sunShadowCascade[y+F]=X._cascadeData[F];y+=K,g++}i.sun[f]=$,f++}else if(V.isDirectionalLight){let $=e.get(V);if($.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let X=V.shadow,D=t.get(V);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=V.shadow.matrix,S++}i.directional[p]=$,p++}else if(V.isSpotLight){let $=e.get(V);$.position.setFromMatrixPosition(V.matrixWorld),$.color.copy(Y).multiplyScalar(le),$.distance=ce,$.coneCos=Math.cos(V.angle),$.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),$.decay=V.decay,i.spot[A]=$;let X=V.shadow;if(V.map&&(i.spotLightMap[_]=V.map,_++,X.updateMatrices(V),V.castShadow&&C++),i.spotLightMatrix[A]=X.matrix,V.castShadow){let D=t.get(V);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,i.spotShadow[A]=D,i.spotShadowMap[A]=ae,L++}A++}else if(V.isRectAreaLight){let $=e.get(V);$.color.copy(Y).multiplyScalar(le),$.halfWidth.set(V.width*.5,0,0),$.halfHeight.set(0,V.height*.5,0),i.rectArea[M]=$,M++}else if(V.isPointLight){let $=e.get(V);if($.color.copy(V.color).multiplyScalar(V.intensity),$.distance=V.distance,$.decay=V.decay,V.castShadow){let X=V.shadow,D=t.get(V);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,D.shadowCameraNear=X.camera.near,D.shadowCameraFar=X.camera.far,i.pointShadow[m]=D,i.pointShadowMap[m]=ae,i.pointShadowMatrix[m]=V.shadow.matrix,w++}i.point[m]=$,m++}else if(V.isHemisphereLight){let $=e.get(V);$.skyColor.copy(V.color).multiplyScalar(le),$.groundColor.copy(V.groundColor).multiplyScalar(le),i.hemi[v]=$,v++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let z=i.hash;(z.sunLength!==f||z.directionalLength!==p||z.pointLength!==m||z.spotLength!==A||z.rectAreaLength!==M||z.hemiLength!==v||z.numSunShadows!==g||z.numDirectionalShadows!==S||z.numPointShadows!==w||z.numSpotShadows!==L||z.numSpotMaps!==_||z.numLightProbes!==U)&&(i.sun.length=f,i.directional.length=p,i.spot.length=A,i.rectArea.length=M,i.point.length=m,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=L,i.spotShadowMap.length=L,i.spotLightMatrix.length=L+_-C,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=U,z.sunLength=f,z.directionalLength=p,z.pointLength=m,z.spotLength=A,z.rectAreaLength=M,z.hemiLength=v,z.numSunShadows=g,z.numDirectionalShadows=S,z.numPointShadows=w,z.numSpotShadows=L,z.numSpotMaps=_,z.numLightProbes=U,i.version=_x++)}function c(l,u){let d=0,h=0,f=0,g=0,y=0,p=0,m=u.matrixWorldInverse;for(let A=0,M=l.length;A<M;A++){let v=l[A];if(v.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let S=i.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(v.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let S=i.rectArea[y];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),y++}else if(v.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let S=i.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:i}}function Yd(n){let e=new Ax(n),t=[],i=[],s=[];function a(h){d.camera=h,t.length=0,i.length=0,s.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function Sx(n){let e=new WeakMap;function t(s,a=0){let r=e.get(s),o;return r===void 0?(o=new Yd(n),e.set(s,[o])):a>=r.length?(o=new Yd(n),r.push(o)):o=r[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bx=`uniform sampler2D shadow_pass;
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
}`,Tx=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Ex=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Zd=new ut,ar=new Z,pu=new Z;function wx(n,e,t){let i=new Bs,s=new Pe,a=new Pe,r=new St,o=new vo,c=new xo,l={},u=t.maxTextureSize,d={[Ri]:$t,[$t]:Ri,[$n]:$n},h=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Mx,fragmentShader:bx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new on;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new vt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qi;let m=this.type;this.render=function(w,L,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===zh&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qi);let C=n.getRenderTarget(),U=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Xn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let ie=m!==this.type;ie&&L.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(Y=>Y.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,Y=w.length;V<Y;V++){let le=w[V],ce=le.shadow;if(ce===void 0){je("WebGLShadowMap:",le,"has no shadow.");continue}if(ce.autoUpdate===!1&&ce.needsUpdate===!1)continue;s.copy(ce.mapSize);let ae=ce.getFrameExtents();s.multiply(ae),a.copy(ce.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/ae.x),s.x=a.x*ae.x,ce.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/ae.y),s.y=a.y*ae.y,ce.mapSize.y=a.y));let $=n.state.buffers.depth.getReversed();if(ce.camera._reversedDepth=$,ce.map===null||ie===!0){if(ce.map!==null&&(ce.map.depthTexture!==null&&(ce.map.depthTexture.dispose(),ce.map.depthTexture=null),ce.map.dispose()),this.type===Hs){if(le.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ce.map=new rn(s.x,s.y,{format:Ni,type:Fn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),ce.map.texture.name=le.name+".shadowMap",ce.map.depthTexture=new Ti(s.x,s.y,Mn),ce.map.depthTexture.name=le.name+".shadowMapDepth",ce.map.depthTexture.format=Hn,ce.map.depthTexture.compareFunction=null,ce.map.depthTexture.minFilter=Bt,ce.map.depthTexture.magFilter=Bt}else le.isPointLight?(ce.map=new Sc(s.x),ce.map.depthTexture=new co(s.x,On)):(ce.map=new rn(s.x,s.y),ce.map.depthTexture=new Ti(s.x,s.y,On)),ce.map.depthTexture.name=le.name+".shadowMap",ce.map.depthTexture.format=Hn,this.type===Qi?(ce.map.depthTexture.compareFunction=$?_c:xc,ce.map.depthTexture.minFilter=Wt,ce.map.depthTexture.magFilter=Wt):(ce.map.depthTexture.compareFunction=null,ce.map.depthTexture.minFilter=Bt,ce.map.depthTexture.magFilter=Bt);ce.camera.updateProjectionMatrix()}ce.map.isWebGLCubeRenderTarget!==!0&&(ce.map.width!==s.x||ce.map.height!==s.y)&&ce.map.setSize(s.x,s.y);let X=ce.map.isWebGLCubeRenderTarget?6:ce.getViewportCount();le.isPointLight!==!0&&ce.updateMatrices(le,_);for(let D=0;D<X;D++){let K=ce.getCamera(D);if(le.isPointLight){let F=ce.camera,q=ce.matrix,W=le.distance||F.far;W!==F.far&&(F.far=W,F.updateProjectionMatrix()),ar.setFromMatrixPosition(le.matrixWorld),F.position.copy(ar),pu.copy(F.position),pu.add(Tx[D]),F.up.copy(Ex[D]),F.lookAt(pu),F.updateMatrixWorld(),q.makeTranslation(-ar.x,-ar.y,-ar.z),Zd.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ce._frustum.setFromProjectionMatrix(Zd,F.coordinateSystem,F.reversedDepth)}if(ce.map.isWebGLCubeRenderTarget)n.setRenderTarget(ce.map,D),n.clear();else{D===0&&(n.setRenderTarget(ce.map),n.clear());let F=ce.getViewport(D);r.set(a.x*F.x,a.y*F.y,a.x*F.z,a.y*F.w),k.viewport(r)}i=ce.getFrustum(D),v(L,_,K,le,this.type)}ce.isPointLightShadow!==!0&&this.type===Hs&&A(ce,_),ce.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(C,U,z)};function A(w,L){let _=e.update(y);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new rn(s.x,s.y,{format:Ni,type:Fn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(L,null,_,h,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(L,null,_,f,y,null)}function M(w,L,_,C){let U=null,z=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)U=z;else if(U=_.isPointLight===!0?c:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let k=U.uuid,ie=L.uuid,V=l[k];V===void 0&&(V={},l[k]=V);let Y=V[ie];Y===void 0&&(Y=U.clone(),V[ie]=Y,L.addEventListener("dispose",S)),U=Y}if(U.visible=L.visible,U.wireframe=L.wireframe,C===Hs?U.side=L.shadowSide!==null?L.shadowSide:L.side:U.side=L.shadowSide!==null?L.shadowSide:d[L.side],U.alphaMap=L.alphaMap,U.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,U.map=L.map,U.clipShadows=L.clipShadows,U.clippingPlanes=L.clippingPlanes,U.clipIntersection=L.clipIntersection,U.displacementMap=L.displacementMap,U.displacementScale=L.displacementScale,U.displacementBias=L.displacementBias,U.wireframeLinewidth=L.wireframeLinewidth,U.linewidth=L.linewidth,_.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let k=n.properties.get(U);k.light=_}return U}function v(w,L,_,C,U){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===Hs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let ie=e.update(w),V=w.material;if(Array.isArray(V)){let Y=ie.groups;for(let le=0,ce=Y.length;le<ce;le++){let ae=Y[le],$=V[ae.materialIndex];if($&&$.visible){let X=M(w,$,C,U);w.onBeforeShadow(n,w,L,_,ie,X,ae),n.renderBufferDirect(_,null,ie,X,w,ae),w.onAfterShadow(n,w,L,_,ie,X,ae)}}}else if(V.visible){let Y=M(w,V,C,U);w.onBeforeShadow(n,w,L,_,ie,Y,null),n.renderBufferDirect(_,null,ie,Y,w,null),w.onAfterShadow(n,w,L,_,ie,Y,null)}}let k=w.children;for(let ie=0,V=k.length;ie<V;ie++)v(k[ie],L,_,C,U)}function S(w){w.target.removeEventListener("dispose",S);for(let _ in l){let C=l[_],U=w.target.uuid;U in C&&(C[U].dispose(),delete C[U])}}}function Cx(n,e){function t(){let Q=!1,Re=new St,_e=null,be=new St(0,0,0,0);return{setMask:function(Le){_e!==Le&&!Q&&(n.colorMask(Le,Le,Le,Le),_e=Le)},setLocked:function(Le){Q=Le},setClear:function(Le,Se,We,$e,mt){mt===!0&&(Le*=$e,Se*=$e,We*=$e),Re.set(Le,Se,We,$e),be.equals(Re)===!1&&(n.clearColor(Le,Se,We,$e),be.copy(Re))},reset:function(){Q=!1,_e=null,be.set(-1,0,0,0)}}}function i(){let Q=!1,Re=!1,_e=null,be=null,Le=null;return{setReversed:function(Se){if(Re!==Se){let We=e.get("EXT_clip_control");Se?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Re=Se;let $e=Le;Le=null,this.setClear($e)}},getReversed:function(){return Re},setTest:function(Se){Se?b(n.DEPTH_TEST):R(n.DEPTH_TEST)},setMask:function(Se){_e!==Se&&!Q&&(n.depthMask(Se),_e=Se)},setFunc:function(Se){if(Re&&(Se=yd[Se]),be!==Se){switch(Se){case Jr:n.depthFunc(n.NEVER);break;case jr:n.depthFunc(n.ALWAYS);break;case Kr:n.depthFunc(n.LESS);break;case Rs:n.depthFunc(n.LEQUAL);break;case Qr:n.depthFunc(n.EQUAL);break;case eo:n.depthFunc(n.GEQUAL);break;case to:n.depthFunc(n.GREATER);break;case no:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=Se}},setLocked:function(Se){Q=Se},setClear:function(Se){Le!==Se&&(Le=Se,Re&&(Se=1-Se),n.clearDepth(Se))},reset:function(){Q=!1,_e=null,be=null,Le=null,Re=!1}}}function s(){let Q=!1,Re=null,_e=null,be=null,Le=null,Se=null,We=null,$e=null,mt=null;return{setTest:function(ht){Q||(ht?b(n.STENCIL_TEST):R(n.STENCIL_TEST))},setMask:function(ht){Re!==ht&&!Q&&(n.stencilMask(ht),Re=ht)},setFunc:function(ht,Nt,un){(_e!==ht||be!==Nt||Le!==un)&&(n.stencilFunc(ht,Nt,un),_e=ht,be=Nt,Le=un)},setOp:function(ht,Nt,un){(Se!==ht||We!==Nt||$e!==un)&&(n.stencilOp(ht,Nt,un),Se=ht,We=Nt,$e=un)},setLocked:function(ht){Q=ht},setClear:function(ht){mt!==ht&&(n.clearStencil(ht),mt=ht)},reset:function(){Q=!1,Re=null,_e=null,be=null,Le=null,Se=null,We=null,$e=null,mt=null}}}let a=new t,r=new i,o=new s,c=new WeakMap,l=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],y=null,p=!1,m=null,A=null,M=null,v=null,S=null,w=null,L=null,_=new it(0,0,0),C=0,U=!1,z=null,k=null,ie=null,V=null,Y=null,le=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ce=!1,ae=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec($)[1]),ce=ae>=1):$.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ce=ae>=2);let X=null,D={},K=n.getParameter(n.SCISSOR_BOX),F=n.getParameter(n.VIEWPORT),q=new St().fromArray(K),W=new St().fromArray(F);function O(Q,Re,_e,be){let Le=new Uint8Array(4),Se=n.createTexture();n.bindTexture(Q,Se),n.texParameteri(Q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<_e;We++)Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(Re+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return Se}let E={};E[n.TEXTURE_2D]=O(n.TEXTURE_2D,n.TEXTURE_2D,1),E[n.TEXTURE_CUBE_MAP]=O(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),E[n.TEXTURE_2D_ARRAY]=O(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),E[n.TEXTURE_3D]=O(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),b(n.DEPTH_TEST),r.setFunc(Rs),G(!1),j(Ol),b(n.CULL_FACE),se(Xn);function b(Q){u[Q]!==!0&&(n.enable(Q),u[Q]=!0)}function R(Q){u[Q]!==!1&&(n.disable(Q),u[Q]=!1)}function P(Q,Re){return h[Q]!==Re?(n.bindFramebuffer(Q,Re),h[Q]=Re,Q===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Re),Q===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function N(Q,Re){let _e=g,be=!1;if(Q){_e=f.get(Re),_e===void 0&&(_e=[],f.set(Re,_e));let Le=Q.textures;if(_e.length!==Le.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,We=Le.length;Se<We;Se++)_e[Se]=n.COLOR_ATTACHMENT0+Se;_e.length=Le.length,be=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,be=!0);be&&n.drawBuffers(_e)}function J(Q){return y!==Q?(n.useProgram(Q),y=Q,!0):!1}let te={[es]:n.FUNC_ADD,[kh]:n.FUNC_SUBTRACT,[Gh]:n.FUNC_REVERSE_SUBTRACT};te[Hh]=n.MIN,te[Wh]=n.MAX;let H={[qh]:n.ZERO,[$h]:n.ONE,[Xh]:n.SRC_COLOR,[Vl]:n.SRC_ALPHA,[Qh]:n.SRC_ALPHA_SATURATE,[jh]:n.DST_COLOR,[Zh]:n.DST_ALPHA,[Yh]:n.ONE_MINUS_SRC_COLOR,[kl]:n.ONE_MINUS_SRC_ALPHA,[Kh]:n.ONE_MINUS_DST_COLOR,[Jh]:n.ONE_MINUS_DST_ALPHA,[ed]:n.CONSTANT_COLOR,[td]:n.ONE_MINUS_CONSTANT_COLOR,[nd]:n.CONSTANT_ALPHA,[id]:n.ONE_MINUS_CONSTANT_ALPHA};function se(Q,Re,_e,be,Le,Se,We,$e,mt,ht){if(Q===Xn){p===!0&&(R(n.BLEND),p=!1);return}if(p===!1&&(b(n.BLEND),p=!0),Q!==Vh){if(Q!==m||ht!==U){if((A!==es||S!==es)&&(n.blendEquation(n.FUNC_ADD),A=es,S=es),ht)switch(Q){case Ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fl:n.blendFunc(n.ONE,n.ONE);break;case Bl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ke("WebGLState: Invalid blending: ",Q);break}else switch(Q){case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bl:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zl:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",Q);break}M=null,v=null,w=null,L=null,_.set(0,0,0),C=0,m=Q,U=ht}return}Le=Le||Re,Se=Se||_e,We=We||be,(Re!==A||Le!==S)&&(n.blendEquationSeparate(te[Re],te[Le]),A=Re,S=Le),(_e!==M||be!==v||Se!==w||We!==L)&&(n.blendFuncSeparate(H[_e],H[be],H[Se],H[We]),M=_e,v=be,w=Se,L=We),($e.equals(_)===!1||mt!==C)&&(n.blendColor($e.r,$e.g,$e.b,mt),_.copy($e),C=mt),m=Q,U=!1}function re(Q,Re){Q.side===$n?R(n.CULL_FACE):b(n.CULL_FACE);let _e=Q.side===$t;Re&&(_e=!_e),G(_e),Q.blending===Ws&&Q.transparent===!1?se(Xn):se(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),r.setFunc(Q.depthFunc),r.setTest(Q.depthTest),r.setMask(Q.depthWrite),a.setMask(Q.colorWrite);let be=Q.stencilWrite;o.setTest(be),be&&(o.setMask(Q.stencilWriteMask),o.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),o.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),ye(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?b(n.SAMPLE_ALPHA_TO_COVERAGE):R(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(Q){z!==Q&&(Q?n.frontFace(n.CW):n.frontFace(n.CCW),z=Q)}function j(Q){Q!==Fh?(b(n.CULL_FACE),Q!==k&&(Q===Ol?n.cullFace(n.BACK):Q===Bh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):R(n.CULL_FACE),k=Q}function ve(Q){Q!==ie&&(ce&&n.lineWidth(Q),ie=Q)}function ye(Q,Re,_e){Q?(b(n.POLYGON_OFFSET_FILL),(V!==Re||Y!==_e)&&(V=Re,Y=_e,r.getReversed()&&(Re=-Re),n.polygonOffset(Re,_e))):R(n.POLYGON_OFFSET_FILL)}function Ee(Q){Q?b(n.SCISSOR_TEST):R(n.SCISSOR_TEST)}function Te(Q){Q===void 0&&(Q=n.TEXTURE0+le-1),X!==Q&&(n.activeTexture(Q),X=Q)}function B(Q,Re,_e){_e===void 0&&(X===null?_e=n.TEXTURE0+le-1:_e=X);let be=D[_e];be===void 0&&(be={type:void 0,texture:void 0},D[_e]=be),(be.type!==Q||be.texture!==Re)&&(X!==_e&&(n.activeTexture(_e),X=_e),n.bindTexture(Q,Re||E[Q]),be.type=Q,be.texture=Re)}function Ve(){let Q=D[X];Q!==void 0&&Q.type!==void 0&&(n.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function De(){try{n.compressedTexImage2D(...arguments)}catch(Q){Ke("WebGLState:",Q)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(Q){Ke("WebGLState:",Q)}}function x(){try{n.texSubImage2D(...arguments)}catch(Q){Ke("WebGLState:",Q)}}function ne(){try{n.texSubImage3D(...arguments)}catch(Q){Ke("WebGLState:",Q)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(Q){Ke("WebGLState:",Q)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(Q){Ke("WebGLState:",Q)}}function we(){try{n.texStorage2D(...arguments)}catch(Q){Ke("WebGLState:",Q)}}function Ce(){try{n.texStorage3D(...arguments)}catch(Q){Ke("WebGLState:",Q)}}function xe(){try{n.texImage2D(...arguments)}catch(Q){Ke("WebGLState:",Q)}}function Ae(){try{n.texImage3D(...arguments)}catch(Q){Ke("WebGLState:",Q)}}function Ne(Q){return d[Q]!==void 0?d[Q]:n.getParameter(Q)}function ke(Q,Re){d[Q]!==Re&&(n.pixelStorei(Q,Re),d[Q]=Re)}function de(Q){q.equals(Q)===!1&&(n.scissor(Q.x,Q.y,Q.z,Q.w),q.copy(Q))}function Me(Q){W.equals(Q)===!1&&(n.viewport(Q.x,Q.y,Q.z,Q.w),W.copy(Q))}function Ie(Q,Re){let _e=l.get(Re);_e===void 0&&(_e=new WeakMap,l.set(Re,_e));let be=_e.get(Q);be===void 0&&(be=n.getUniformBlockIndex(Re,Q.name),_e.set(Q,be))}function Ge(Q,Re){let be=l.get(Re).get(Q);c.get(Re)!==be&&(n.uniformBlockBinding(Re,be,Q.__bindingPointIndex),c.set(Re,be))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},X=null,D={},h={},f=new WeakMap,g=[],y=null,p=!1,m=null,A=null,M=null,v=null,S=null,w=null,L=null,_=new it(0,0,0),C=0,U=!1,z=null,k=null,ie=null,V=null,Y=null,q.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:b,disable:R,bindFramebuffer:P,drawBuffers:N,useProgram:J,setBlending:se,setMaterial:re,setFlipSided:G,setCullFace:j,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:Ee,activeTexture:Te,bindTexture:B,unbindTexture:Ve,compressedTexImage2D:De,compressedTexImage3D:I,texImage2D:xe,texImage3D:Ae,pixelStorei:ke,getParameter:Ne,updateUBOMapping:Ie,uniformBlockBinding:Ge,texStorage2D:we,texStorage3D:Ce,texSubImage2D:x,texSubImage3D:ne,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:de,viewport:Me,reset:Je}}function Rx(n,e,t,i,s,a,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pe,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,x){return g?new OffscreenCanvas(I,x):Aa("canvas")}function p(I,x,ne){let oe=1,pe=De(I);if((pe.width>ne||pe.height>ne)&&(oe=ne/Math.max(pe.width,pe.height)),oe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let we=Math.floor(oe*pe.width),Ce=Math.floor(oe*pe.height);h===void 0&&(h=y(we,Ce));let xe=x?y(we,Ce):h;return xe.width=we,xe.height=Ce,xe.getContext("2d").drawImage(I,0,0,we,Ce),je("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+we+"x"+Ce+")."),xe}else return"data"in I&&je("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),I;return I}function m(I){return I.generateMipmaps}function A(I){n.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(I,x,ne,oe,pe,we=!1){if(I!==null){if(n[I]!==void 0)return n[I];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ce;oe&&(Ce=e.get("EXT_texture_norm16"),Ce||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=x;if(x===n.RED&&(ne===n.FLOAT&&(xe=n.R32F),ne===n.HALF_FLOAT&&(xe=n.R16F),ne===n.UNSIGNED_BYTE&&(xe=n.R8),ne===n.UNSIGNED_SHORT&&Ce&&(xe=Ce.R16_EXT),ne===n.SHORT&&Ce&&(xe=Ce.R16_SNORM_EXT)),x===n.RED_INTEGER&&(ne===n.UNSIGNED_BYTE&&(xe=n.R8UI),ne===n.UNSIGNED_SHORT&&(xe=n.R16UI),ne===n.UNSIGNED_INT&&(xe=n.R32UI),ne===n.BYTE&&(xe=n.R8I),ne===n.SHORT&&(xe=n.R16I),ne===n.INT&&(xe=n.R32I)),x===n.RG&&(ne===n.FLOAT&&(xe=n.RG32F),ne===n.HALF_FLOAT&&(xe=n.RG16F),ne===n.UNSIGNED_BYTE&&(xe=n.RG8),ne===n.UNSIGNED_SHORT&&Ce&&(xe=Ce.RG16_EXT),ne===n.SHORT&&Ce&&(xe=Ce.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(ne===n.UNSIGNED_BYTE&&(xe=n.RG8UI),ne===n.UNSIGNED_SHORT&&(xe=n.RG16UI),ne===n.UNSIGNED_INT&&(xe=n.RG32UI),ne===n.BYTE&&(xe=n.RG8I),ne===n.SHORT&&(xe=n.RG16I),ne===n.INT&&(xe=n.RG32I)),x===n.RGB_INTEGER&&(ne===n.UNSIGNED_BYTE&&(xe=n.RGB8UI),ne===n.UNSIGNED_SHORT&&(xe=n.RGB16UI),ne===n.UNSIGNED_INT&&(xe=n.RGB32UI),ne===n.BYTE&&(xe=n.RGB8I),ne===n.SHORT&&(xe=n.RGB16I),ne===n.INT&&(xe=n.RGB32I)),x===n.RGBA_INTEGER&&(ne===n.UNSIGNED_BYTE&&(xe=n.RGBA8UI),ne===n.UNSIGNED_SHORT&&(xe=n.RGBA16UI),ne===n.UNSIGNED_INT&&(xe=n.RGBA32UI),ne===n.BYTE&&(xe=n.RGBA8I),ne===n.SHORT&&(xe=n.RGBA16I),ne===n.INT&&(xe=n.RGBA32I)),x===n.RGB&&(ne===n.UNSIGNED_SHORT&&Ce&&(xe=Ce.RGB16_EXT),ne===n.SHORT&&Ce&&(xe=Ce.RGB16_SNORM_EXT),ne===n.UNSIGNED_INT_5_9_9_9_REV&&(xe=n.RGB9_E5),ne===n.UNSIGNED_INT_10F_11F_11F_REV&&(xe=n.R11F_G11F_B10F)),x===n.RGBA){let Ae=we?ya:lt.getTransfer(pe);ne===n.FLOAT&&(xe=n.RGBA32F),ne===n.HALF_FLOAT&&(xe=n.RGBA16F),ne===n.UNSIGNED_BYTE&&(xe=Ae===pt?n.SRGB8_ALPHA8:n.RGBA8),ne===n.UNSIGNED_SHORT&&Ce&&(xe=Ce.RGBA16_EXT),ne===n.SHORT&&Ce&&(xe=Ce.RGBA16_SNORM_EXT),ne===n.UNSIGNED_SHORT_4_4_4_4&&(xe=n.RGBA4),ne===n.UNSIGNED_SHORT_5_5_5_1&&(xe=n.RGB5_A1)}return(xe===n.R16F||xe===n.R32F||xe===n.RG16F||xe===n.RG32F||xe===n.RGBA16F||xe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function S(I,x){let ne;return I?x===null||x===On||x===$s?ne=n.DEPTH24_STENCIL8:x===Mn?ne=n.DEPTH32F_STENCIL8:x===qs&&(ne=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===On||x===$s?ne=n.DEPTH_COMPONENT24:x===Mn?ne=n.DEPTH_COMPONENT32F:x===qs&&(ne=n.DEPTH_COMPONENT16),ne}function w(I,x){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Bt&&I.minFilter!==Wt?Math.log2(Math.max(x.width,x.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?x.mipmaps.length:1}function L(I){let x=I.target;x.removeEventListener("dispose",L),C(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function _(I){let x=I.target;x.removeEventListener("dispose",_),z(x)}function C(I){let x=i.get(I);if(x.__webglInit===void 0)return;let ne=I.source,oe=f.get(ne);if(oe){let pe=oe[x.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&U(I),Object.keys(oe).length===0&&f.delete(ne)}i.remove(I)}function U(I){let x=i.get(I);n.deleteTexture(x.__webglTexture);let ne=I.source,oe=f.get(ne);delete oe[x.__cacheKey],r.memory.textures--}function z(I){let x=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(x.__webglFramebuffer[oe]))for(let pe=0;pe<x.__webglFramebuffer[oe].length;pe++)n.deleteFramebuffer(x.__webglFramebuffer[oe][pe]);else n.deleteFramebuffer(x.__webglFramebuffer[oe]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[oe])}else{if(Array.isArray(x.__webglFramebuffer))for(let oe=0;oe<x.__webglFramebuffer.length;oe++)n.deleteFramebuffer(x.__webglFramebuffer[oe]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let oe=0;oe<x.__webglColorRenderbuffer.length;oe++)x.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[oe]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ne=I.textures;for(let oe=0,pe=ne.length;oe<pe;oe++){let we=i.get(ne[oe]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),r.memory.textures--),i.remove(ne[oe])}i.remove(I)}let k=0;function ie(){k=0}function V(){return k}function Y(I){k=I}function le(){let I=k;return I>=s.maxTextures&&je("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,I}function ce(I){let x=[];return x.push(I.wrapS),x.push(I.wrapT),x.push(I.wrapR||0),x.push(I.magFilter),x.push(I.minFilter),x.push(I.anisotropy),x.push(I.internalFormat),x.push(I.format),x.push(I.type),x.push(I.generateMipmaps),x.push(I.premultiplyAlpha),x.push(I.flipY),x.push(I.unpackAlignment),x.push(I.colorSpace),x.join()}function ae(I,x){let ne=i.get(I);if(I.isVideoTexture&&B(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ne.__version!==I.version){let oe=I.image;if(oe===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{R(ne,I,x);return}}else I.isExternalTexture&&(ne.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture,n.TEXTURE0+x)}function $(I,x){let ne=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){R(ne,I,x);return}else I.isExternalTexture&&(ne.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ne.__webglTexture,n.TEXTURE0+x)}function X(I,x){let ne=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){R(ne,I,x);return}t.bindTexture(n.TEXTURE_3D,ne.__webglTexture,n.TEXTURE0+x)}function D(I,x){let ne=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&ne.__version!==I.version){P(ne,I,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture,n.TEXTURE0+x)}let K={[Is]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[io]:n.MIRRORED_REPEAT},F={[Bt]:n.NEAREST,[rd]:n.NEAREST_MIPMAP_NEAREST,[Ja]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[Do]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},q={[ud]:n.NEVER,[md]:n.ALWAYS,[hd]:n.LESS,[xc]:n.LEQUAL,[dd]:n.EQUAL,[_c]:n.GEQUAL,[fd]:n.GREATER,[pd]:n.NOTEQUAL};function W(I,x){if(x.type===Mn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Wt||x.magFilter===Do||x.magFilter===Ja||x.magFilter===Pi||x.minFilter===Wt||x.minFilter===Do||x.minFilter===Ja||x.minFilter===Pi)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,K[x.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,K[x.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,K[x.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,F[x.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,F[x.minFilter]),x.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,q[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bt||x.minFilter!==Ja&&x.minFilter!==Pi||x.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let ne=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function O(I,x){let ne=!1;I.__webglInit===void 0&&(I.__webglInit=!0,x.addEventListener("dispose",L));let oe=x.source,pe=f.get(oe);pe===void 0&&(pe={},f.set(oe,pe));let we=ce(x);if(we!==I.__cacheKey){pe[we]===void 0&&(pe[we]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,ne=!0),pe[we].usedTimes++;let Ce=pe[I.__cacheKey];Ce!==void 0&&(pe[I.__cacheKey].usedTimes--,Ce.usedTimes===0&&U(x)),I.__cacheKey=we,I.__webglTexture=pe[we].texture}return ne}function E(I,x,ne){return Math.floor(Math.floor(I/ne)/x)}function b(I,x,ne,oe){let we=I.updateRanges;if(we.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,ne,oe,x.data);else{we.sort((ke,de)=>ke.start-de.start);let Ce=0;for(let ke=1;ke<we.length;ke++){let de=we[Ce],Me=we[ke],Ie=de.start+de.count,Ge=E(Me.start,x.width,4),Je=E(de.start,x.width,4);Me.start<=Ie+1&&Ge===Je&&E(Me.start+Me.count-1,x.width,4)===Ge?de.count=Math.max(de.count,Me.start+Me.count-de.start):(++Ce,we[Ce]=Me)}we.length=Ce+1;let xe=t.getParameter(n.UNPACK_ROW_LENGTH),Ae=t.getParameter(n.UNPACK_SKIP_PIXELS),Ne=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ke=0,de=we.length;ke<de;ke++){let Me=we[ke],Ie=Math.floor(Me.start/4),Ge=Math.ceil(Me.count/4),Je=Ie%x.width,Q=Math.floor(Ie/x.width),Re=Ge,_e=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(n.UNPACK_SKIP_ROWS,Q),t.texSubImage2D(n.TEXTURE_2D,0,Je,Q,Re,_e,ne,oe,x.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,xe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function R(I,x,ne){let oe=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(oe=n.TEXTURE_3D);let pe=O(I,x),we=x.source;t.bindTexture(oe,I.__webglTexture,n.TEXTURE0+ne);let Ce=i.get(we);if(we.version!==Ce.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+ne),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let _e=lt.getPrimaries(lt.workingColorSpace),be=x.colorSpace===ui?null:lt.getPrimaries(x.colorSpace),Le=x.colorSpace===ui||_e===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let Ae=p(x.image,!1,s.maxTextureSize);Ae=Ve(x,Ae);let Ne=a.convert(x.format,x.colorSpace),ke=a.convert(x.type),de=v(x.internalFormat,Ne,ke,x.normalized,x.colorSpace,x.isVideoTexture);W(oe,x);let Me,Ie=x.mipmaps,Ge=x.isVideoTexture!==!0,Je=Ce.__version===void 0||pe===!0,Q=we.dataReady,Re=w(x,Ae);if(x.isDepthTexture)de=S(x.format===Li,x.type),Je&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,de,Ae.width,Ae.height):t.texImage2D(n.TEXTURE_2D,0,de,Ae.width,Ae.height,0,Ne,ke,null));else if(x.isDataTexture)if(Ie.length>0){Ge&&Je&&t.texStorage2D(n.TEXTURE_2D,Re,de,Ie[0].width,Ie[0].height);for(let _e=0,be=Ie.length;_e<be;_e++)Me=Ie[_e],Ge?Q&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Me.width,Me.height,Ne,ke,Me.data):t.texImage2D(n.TEXTURE_2D,_e,de,Me.width,Me.height,0,Ne,ke,Me.data);x.generateMipmaps=!1}else Ge?(Je&&t.texStorage2D(n.TEXTURE_2D,Re,de,Ae.width,Ae.height),Q&&b(x,Ae,Ne,ke)):t.texImage2D(n.TEXTURE_2D,0,de,Ae.width,Ae.height,0,Ne,ke,Ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ge&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,de,Ie[0].width,Ie[0].height,Ae.depth);for(let _e=0,be=Ie.length;_e<be;_e++)if(Me=Ie[_e],x.format!==bn)if(Ne!==null)if(Ge){if(Q)if(x.layerUpdates.size>0){let Le=cu(Me.width,Me.height,x.format,x.type);for(let Se of x.layerUpdates){let We=Me.data.subarray(Se*Le/Me.data.BYTES_PER_ELEMENT,(Se+1)*Le/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,Se,Me.width,Me.height,1,Ne,We)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Me.width,Me.height,Ae.depth,Ne,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,de,Me.width,Me.height,Ae.depth,0,Me.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?Q&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Me.width,Me.height,Ae.depth,Ne,ke,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,de,Me.width,Me.height,Ae.depth,0,Ne,ke,Me.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ge&&Je&&t.texStorage2D(n.TEXTURE_2D,Re,de,Ie[0].width,Ie[0].height);for(let _e=0,be=Ie.length;_e<be;_e++)Me=Ie[_e],x.format!==bn?Ne!==null?Ge?Q&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Me.width,Me.height,Ne,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,de,Me.width,Me.height,0,Me.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?Q&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Me.width,Me.height,Ne,ke,Me.data):t.texImage2D(n.TEXTURE_2D,_e,de,Me.width,Me.height,0,Ne,ke,Me.data)}else if(x.isDataArrayTexture)if(Ge){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,de,Ae.width,Ae.height,Ae.depth),Q)if(x.layerUpdates.size>0){let _e=cu(Ae.width,Ae.height,x.format,x.type);for(let be of x.layerUpdates){let Le=Ae.data.subarray(be*_e/Ae.data.BYTES_PER_ELEMENT,(be+1)*_e/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,be,Ae.width,Ae.height,1,Ne,ke,Le)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ne,ke,Ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,Ae.width,Ae.height,Ae.depth,0,Ne,ke,Ae.data);else if(x.isData3DTexture)Ge?(Je&&t.texStorage3D(n.TEXTURE_3D,Re,de,Ae.width,Ae.height,Ae.depth),Q&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ne,ke,Ae.data)):t.texImage3D(n.TEXTURE_3D,0,de,Ae.width,Ae.height,Ae.depth,0,Ne,ke,Ae.data);else if(x.isFramebufferTexture){if(Je)if(Ge)t.texStorage2D(n.TEXTURE_2D,Re,de,Ae.width,Ae.height);else{let _e=Ae.width,be=Ae.height;for(let Le=0;Le<Re;Le++)t.texImage2D(n.TEXTURE_2D,Le,de,_e,be,0,Ne,ke,null),_e>>=1,be>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let _e=n.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),Ae.parentNode!==_e){_e.appendChild(Ae),d.add(x),_e.onpaint=be=>{let Le=be.changedElements;for(let Se of d)Le.includes(Se.image)&&(Se.needsUpdate=!0)},_e.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Ae);else{let Le=n.RGBA,Se=n.RGBA,We=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Le,Se,We,Ae)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ge&&Je){let _e=De(Ie[0]);t.texStorage2D(n.TEXTURE_2D,Re,de,_e.width,_e.height)}for(let _e=0,be=Ie.length;_e<be;_e++)Me=Ie[_e],Ge?Q&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ne,ke,Me):t.texImage2D(n.TEXTURE_2D,_e,de,Ne,ke,Me);x.generateMipmaps=!1}else if(Ge){if(Je){let _e=De(Ae);t.texStorage2D(n.TEXTURE_2D,Re,de,_e.width,_e.height)}Q&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,ke,Ae)}else t.texImage2D(n.TEXTURE_2D,0,de,Ne,ke,Ae);m(x)&&A(oe),Ce.__version=we.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function P(I,x,ne){if(x.image.length!==6)return;let oe=O(I,x),pe=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+ne);let we=i.get(pe);if(pe.version!==we.__version||oe===!0){t.activeTexture(n.TEXTURE0+ne);let Ce=lt.getPrimaries(lt.workingColorSpace),xe=x.colorSpace===ui?null:lt.getPrimaries(x.colorSpace),Ae=x.colorSpace===ui||Ce===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Ne=x.isCompressedTexture||x.image[0].isCompressedTexture,ke=x.image[0]&&x.image[0].isDataTexture,de=[];for(let Se=0;Se<6;Se++)!Ne&&!ke?de[Se]=p(x.image[Se],!0,s.maxCubemapSize):de[Se]=ke?x.image[Se].image:x.image[Se],de[Se]=Ve(x,de[Se]);let Me=de[0],Ie=a.convert(x.format,x.colorSpace),Ge=a.convert(x.type),Je=v(x.internalFormat,Ie,Ge,x.normalized,x.colorSpace),Q=x.isVideoTexture!==!0,Re=we.__version===void 0||oe===!0,_e=pe.dataReady,be=w(x,Me);W(n.TEXTURE_CUBE_MAP,x);let Le;if(Ne){Q&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Je,Me.width,Me.height);for(let Se=0;Se<6;Se++){Le=de[Se].mipmaps;for(let We=0;We<Le.length;We++){let $e=Le[We];x.format!==bn?Ie!==null?Q?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,0,0,$e.width,$e.height,Ie,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,Je,$e.width,$e.height,0,$e.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,0,0,$e.width,$e.height,Ie,Ge,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,Je,$e.width,$e.height,0,Ie,Ge,$e.data)}}}else{if(Le=x.mipmaps,Q&&Re){Le.length>0&&be++;let Se=De(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Je,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(ke){Q?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,de[Se].width,de[Se].height,Ie,Ge,de[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Je,de[Se].width,de[Se].height,0,Ie,Ge,de[Se].data);for(let We=0;We<Le.length;We++){let mt=Le[We].image[Se].image;Q?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,0,0,mt.width,mt.height,Ie,Ge,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,Je,mt.width,mt.height,0,Ie,Ge,mt.data)}}else{Q?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ie,Ge,de[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Je,Ie,Ge,de[Se]);for(let We=0;We<Le.length;We++){let $e=Le[We];Q?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,0,0,Ie,Ge,$e.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,Je,Ie,Ge,$e.image[Se])}}}m(x)&&A(n.TEXTURE_CUBE_MAP),we.__version=pe.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function N(I,x,ne,oe,pe,we){let Ce=a.convert(ne.format,ne.colorSpace),xe=a.convert(ne.type),Ae=v(ne.internalFormat,Ce,xe,ne.normalized,ne.colorSpace),Ne=i.get(x),ke=i.get(ne);if(ke.__renderTarget=x,!Ne.__hasExternalTextures){let de=Math.max(1,x.width>>we),Me=Math.max(1,x.height>>we);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,we,Ae,de,Me,x.depth,0,Ce,xe,null):t.texImage2D(pe,we,Ae,de,Me,0,Ce,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Te(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,pe,ke.__webglTexture,0,Ee(x)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,pe,ke.__webglTexture,we),t.bindFramebuffer(n.FRAMEBUFFER,null)}function J(I,x,ne){if(n.bindRenderbuffer(n.RENDERBUFFER,I),x.depthBuffer){let oe=x.depthTexture,pe=oe&&oe.isDepthTexture?oe.type:null,we=S(x.stencilBuffer,pe),Ce=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Te(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee(x),we,x.width,x.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee(x),we,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,we,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,I)}else{let oe=x.textures;for(let pe=0;pe<oe.length;pe++){let we=oe[pe],Ce=a.convert(we.format,we.colorSpace),xe=a.convert(we.type),Ae=v(we.internalFormat,Ce,xe,we.normalized,we.colorSpace);Te(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee(x),Ae,x.width,x.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee(x),Ae,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function te(I,x,ne){let oe=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pe=i.get(x.depthTexture);if(pe.__renderTarget=x,(!pe.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),oe){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,x.depthTexture.addEventListener("dispose",L)),pe.__webglTexture===void 0){pe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),W(n.TEXTURE_CUBE_MAP,x.depthTexture);let Ne=a.convert(x.depthTexture.format),ke=a.convert(x.depthTexture.type),de;x.depthTexture.format===Hn?de=n.DEPTH_COMPONENT24:x.depthTexture.format===Li&&(de=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,de,x.width,x.height,0,Ne,ke,null)}}else ae(x.depthTexture,0);let we=pe.__webglTexture,Ce=Ee(x),xe=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+ne:n.TEXTURE_2D,Ae=x.depthTexture.format===Li?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Hn)Te(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,xe,we,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,xe,we,0);else if(x.depthTexture.format===Li)Te(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,xe,we,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,xe,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function H(I){let x=i.get(I),ne=I.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==I.depthTexture){let oe=I.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),oe){let pe=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,oe.removeEventListener("dispose",pe)};oe.addEventListener("dispose",pe),x.__depthDisposeCallback=pe}x.__boundDepthTexture=oe}if(I.depthTexture&&!x.__autoAllocateDepthBuffer)if(ne)for(let oe=0;oe<6;oe++)te(x.__webglFramebuffer[oe],I,oe);else{let oe=I.texture.mipmaps;oe&&oe.length>0?te(x.__webglFramebuffer[0],I,0):te(x.__webglFramebuffer,I,0)}else if(ne){x.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[oe]),x.__webglDepthbuffer[oe]===void 0)x.__webglDepthbuffer[oe]=n.createRenderbuffer(),J(x.__webglDepthbuffer[oe],I,!1);else{let pe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=x.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,we)}}else{let oe=I.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),J(x.__webglDepthbuffer,I,!1);else{let pe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,we)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(I,x,ne){let oe=i.get(I);x!==void 0&&N(oe.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ne!==void 0&&H(I)}function re(I){let x=I.texture,ne=i.get(I),oe=i.get(x);I.addEventListener("dispose",_);let pe=I.textures,we=I.isWebGLCubeRenderTarget===!0,Ce=pe.length>1;if(Ce||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=x.version,r.memory.textures++),we){ne.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(x.mipmaps&&x.mipmaps.length>0){ne.__webglFramebuffer[xe]=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)ne.__webglFramebuffer[xe][Ae]=n.createFramebuffer()}else ne.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){ne.__webglFramebuffer=[];for(let xe=0;xe<x.mipmaps.length;xe++)ne.__webglFramebuffer[xe]=n.createFramebuffer()}else ne.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let xe=0,Ae=pe.length;xe<Ae;xe++){let Ne=i.get(pe[xe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),r.memory.textures++)}if(I.samples>0&&Te(I)===!1){ne.__webglMultisampledFramebuffer=n.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let xe=0;xe<pe.length;xe++){let Ae=pe[xe];ne.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ne.__webglColorRenderbuffer[xe]);let Ne=a.convert(Ae.format,Ae.colorSpace),ke=a.convert(Ae.type),de=v(Ae.internalFormat,Ne,ke,Ae.normalized,Ae.colorSpace,I.isXRRenderTarget===!0),Me=Ee(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,de,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,ne.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(ne.__webglDepthRenderbuffer=n.createRenderbuffer(),J(ne.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(we){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),W(n.TEXTURE_CUBE_MAP,x);for(let xe=0;xe<6;xe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)N(ne.__webglFramebuffer[xe][Ae],I,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ae);else N(ne.__webglFramebuffer[xe],I,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(x)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let xe=0,Ae=pe.length;xe<Ae;xe++){let Ne=pe[xe],ke=i.get(Ne),de=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(de=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ke.__webglTexture),W(de,Ne),N(ne.__webglFramebuffer,I,Ne,n.COLOR_ATTACHMENT0+xe,de,0),m(Ne)&&A(de)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,oe.__webglTexture),W(xe,x),x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)N(ne.__webglFramebuffer[Ae],I,x,n.COLOR_ATTACHMENT0,xe,Ae);else N(ne.__webglFramebuffer,I,x,n.COLOR_ATTACHMENT0,xe,0);m(x)&&A(xe),t.unbindTexture()}I.depthBuffer&&H(I)}function G(I){let x=I.textures;for(let ne=0,oe=x.length;ne<oe;ne++){let pe=x[ne];if(m(pe)){let we=M(I),Ce=i.get(pe).__webglTexture;t.bindTexture(we,Ce),A(we),t.unbindTexture()}}}let j=[],ve=[];function ye(I){if(I.samples>0){if(Te(I)===!1){let x=I.textures,ne=I.width,oe=I.height,pe=n.COLOR_BUFFER_BIT,we=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(I),xe=x.length>1;if(xe)for(let Ne=0;Ne<x.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);let Ae=I.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ne=0;Ne<x.length;Ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ne]);let ke=i.get(x[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,ne,oe,0,0,ne,oe,pe,n.NEAREST),c===!0&&(j.length=0,ve.length=0,j.push(n.COLOR_ATTACHMENT0+Ne),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(j.push(we),ve.push(we),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Ne=0;Ne<x.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ne]);let ke=i.get(x[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let x=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Ee(I){return Math.min(s.maxSamples,I.samples)}function Te(I){let x=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function B(I){let x=r.render.frame;u.get(I)!==x&&(u.set(I,x),I.update())}function Ve(I,x){let ne=I.colorSpace,oe=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ne!==_a&&ne!==ui&&(lt.getTransfer(ne)===pt?(oe!==bn||pe!==cn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",ne)),x}function De(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=le,this.resetTextureUnits=ie,this.getTextureUnits=V,this.setTextureUnits=Y,this.setTexture2D=ae,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=D,this.rebindTextures=se,this.setupRenderTarget=re,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=N,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ix(n,e){function t(i,s=ui){let a,r=lt.getTransfer(s);if(i===cn)return n.UNSIGNED_BYTE;if(i===Oo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zl)return n.BYTE;if(i===Jl)return n.SHORT;if(i===qs)return n.UNSIGNED_SHORT;if(i===Uo)return n.INT;if(i===On)return n.UNSIGNED_INT;if(i===Mn)return n.FLOAT;if(i===Fn)return n.HALF_FLOAT;if(i===Ql)return n.ALPHA;if(i===eu)return n.RGB;if(i===bn)return n.RGBA;if(i===Hn)return n.DEPTH_COMPONENT;if(i===Li)return n.DEPTH_STENCIL;if(i===Bo)return n.RED;if(i===zo)return n.RED_INTEGER;if(i===Ni)return n.RG;if(i===Vo)return n.RG_INTEGER;if(i===ko)return n.RGBA_INTEGER;if(i===ja||i===Ka||i===Qa||i===er)if(r===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ja)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ja)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===er)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Go||i===Ho||i===Wo||i===qo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Go)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ho)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$o||i===Xo||i===Yo||i===Zo||i===Jo||i===tr||i===jo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===$o||i===Xo)return r===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Yo)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zo)return a.COMPRESSED_R11_EAC;if(i===Jo)return a.COMPRESSED_SIGNED_R11_EAC;if(i===tr)return a.COMPRESSED_RG11_EAC;if(i===jo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ko||i===Qo||i===ec||i===tc||i===nc||i===ic||i===sc||i===ac||i===rc||i===oc||i===cc||i===lc||i===uc||i===hc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ko)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qo)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ec)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ic)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ac)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===oc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dc||i===fc||i===pc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===dc)return r===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mc||i===gc||i===nr||i===vc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===mc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===gc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
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

}`,Su=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new pn({vertexShader:Px,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mu=class extends Wn{constructor(e,t){super();let i=this,s=null,a=1,r=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,y=typeof XRWebGLBinding<"u",p=new Su,m={},A=t.getContextAttributes(),M=null,v=null,S=[],w=[],L=new Pe,_=null,C=null,U=new Ht;U.viewport=new St;let z=new Ht;z.viewport=new St;let k=[U,z],ie=new Io,V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let b=S[E];return b===void 0&&(b=new Os,S[E]=b),b.getTargetRaySpace()},this.getControllerGrip=function(E){let b=S[E];return b===void 0&&(b=new Os,S[E]=b),b.getGripSpace()},this.getHand=function(E){let b=S[E];return b===void 0&&(b=new Os,S[E]=b),b.getHandSpace()};function le(E){let b=w.indexOf(E.inputSource);if(b===-1)return;let R=S[b];R!==void 0&&(R.update(E.inputSource,E.frame,l||r),R.dispatchEvent({type:E.type,data:E.inputSource}))}function ce(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",ce),s.removeEventListener("inputsourceschange",ae);for(let E=0;E<S.length;E++){let b=w[E];b!==null&&(w[E]=null,S[E].disconnect(b))}V=null,Y=null,p.reset();for(let E in m)delete m[E];if(e.setRenderTarget(M),f=null,h=null,d=null,s=null,v=null,O.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(L.width,L.height,!1),C!==null){let E=C.camera;E.fov=C.fov,E.zoom=C.zoom,E.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){a=E,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){o=E,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(E){l=E},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(E){if(s=E,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",ce),s.addEventListener("inputsourceschange",ae),A.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let R=null,P=null,N=null;A.depth&&(N=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,R=A.stencil?Li:Hn,P=A.stencil?$s:On);let J={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer(J),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new rn(h.textureWidth,h.textureHeight,{format:bn,type:cn,depthTexture:new Ti(h.textureWidth,h.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let R={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,R),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new rn(f.framebufferWidth,f.framebufferHeight,{format:bn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),O.setContext(s),O.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ae(E){for(let b=0;b<E.removed.length;b++){let R=E.removed[b],P=w.indexOf(R);P>=0&&(w[P]=null,S[P].disconnect(R))}for(let b=0;b<E.added.length;b++){let R=E.added[b],P=w.indexOf(R);if(P===-1){for(let J=0;J<S.length;J++)if(J>=w.length){w.push(R),P=J;break}else if(w[J]===null){w[J]=R,P=J;break}if(P===-1)break}let N=S[P];N&&N.connect(R)}}let $=new Z,X=new Z;function D(E,b,R){$.setFromMatrixPosition(b.matrixWorld),X.setFromMatrixPosition(R.matrixWorld);let P=$.distanceTo(X),N=b.projectionMatrix.elements,J=R.projectionMatrix.elements,te=N[14]/(N[10]-1),H=N[14]/(N[10]+1),se=(N[9]+1)/N[5],re=(N[9]-1)/N[5],G=(N[8]-1)/N[0],j=(J[8]+1)/J[0],ve=te*G,ye=te*j,Ee=P/(-G+j),Te=Ee*-G;if(b.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(Te),E.translateZ(Ee),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert(),N[10]===-1)E.projectionMatrix.copy(b.projectionMatrix),E.projectionMatrixInverse.copy(b.projectionMatrixInverse);else{let B=te+Ee,Ve=H+Ee,De=ve-Te,I=ye+(P-Te),x=se*H/Ve*B,ne=re*H/Ve*B;E.projectionMatrix.makePerspective(De,I,x,ne,B,Ve),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}}function K(E,b){b===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(b.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(s===null)return;let b=E.near,R=E.far;p.texture!==null&&(p.depthNear>0&&(b=p.depthNear),p.depthFar>0&&(R=p.depthFar)),ie.near=z.near=U.near=b,ie.far=z.far=U.far=R,(V!==ie.near||Y!==ie.far)&&(s.updateRenderState({depthNear:ie.near,depthFar:ie.far}),V=ie.near,Y=ie.far),ie.layers.mask=E.layers.mask|6,U.layers.mask=ie.layers.mask&-5,z.layers.mask=ie.layers.mask&-3;let P=E.parent,N=ie.cameras;K(ie,P);for(let J=0;J<N.length;J++)K(N[J],P);N.length===2?D(ie,U,z):ie.projectionMatrix.copy(U.projectionMatrix),C===null&&E.isPerspectiveCamera&&(C={camera:E,fov:E.fov,zoom:E.zoom}),F(E,ie,P)};function F(E,b,R){R===null?E.matrix.copy(b.matrixWorld):(E.matrix.copy(R.matrixWorld),E.matrix.invert(),E.matrix.multiply(b.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(b.projectionMatrix),E.projectionMatrixInverse.copy(b.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=Ns*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(E){c=E,h!==null&&(h.fixedFoveation=E),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=E)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(ie)},this.getCameraTexture=function(E){return m[E]};let q=null;function W(E,b){if(u=b.getViewerPose(l||r),g=b,u!==null){let R=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let P=!1;R.length!==ie.cameras.length&&(ie.cameras.length=0,P=!0);for(let H=0;H<R.length;H++){let se=R[H],re=null;if(f!==null)re=f.getViewport(se);else{let j=d.getViewSubImage(h,se);re=j.viewport,H===0&&(e.setRenderTargetTextures(v,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(v))}let G=k[H];G===void 0&&(G=new Ht,G.layers.enable(H),G.viewport=new St,k[H]=G),G.matrix.fromArray(se.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(se.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(re.x,re.y,re.width,re.height),H===0&&(ie.matrix.copy(G.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),P===!0&&ie.cameras.push(G)}let N=s.enabledFeatures;if(N&&N.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let H=d.getDepthInformation(R[0]);H&&H.isValid&&H.texture&&p.init(H,s.renderState)}if(N&&N.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let H=0;H<R.length;H++){let se=R[H].camera;if(se){let re=m[se];re||(re=new Ia,m[se]=re);let G=d.getCameraImage(se);re.sourceTexture=G}}}}for(let R=0;R<S.length;R++){let P=w[R],N=S[R];P!==null&&N!==void 0&&N.update(P,b,l||r)}q&&q(E,b),b.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:b}),g=null}let O=new Jd;O.setAnimationLoop(W),this.setAnimationLoop=function(E){q=E},this.dispose=function(){}}},Nx=new ut,nf=new nt;nf.set(-1,0,0,0,1,0,0,0,1);function Dx(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,au(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,A,M,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(p,m):m.isMeshLambertMaterial?(a(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(p,m),d(p,m)):m.isMeshPhongMaterial?(a(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(a(p,m),g(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),y(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,A,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===$t&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===$t&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let A=e.get(m),M=A.envMap,v=A.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(nf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,A,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*A,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,A){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$t&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let A=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ux(n,e,t,i){let s={},a={},r=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){let w=S.program;i.uniformBlockBinding(v,w)}function l(v,S){let w=s[v.id];w===void 0&&(p(v),w=u(v),s[v.id]=w,v.addEventListener("dispose",A));let L=S.program;i.updateUBOMapping(v,L);let _=e.render.frame;a[v.id]!==_&&(h(v),a[v.id]=_)}function u(v){let S=d();v.__bindingPointIndex=S;let w=n.createBuffer(),L=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,L,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let S=s[v.id],w=v.uniforms,L=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let _=0,C=w.length;_<C;_++){let U=w[_];if(Array.isArray(U))for(let z=0,k=U.length;z<k;z++)f(U[z],_,z,L);else f(U,_,0,L)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,S,w,L){if(y(v,S,w,L)===!0){let _=v.__offset,C=v.value;if(Array.isArray(C)){let U=0;for(let z=0;z<C.length;z++){let k=C[z],ie=m(k);g(k,v.__data,U),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(U+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,v.__data)}}function g(v,S,w){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,w)}function y(v,S,w,L){let _=v.value,C=S+"_"+w;if(L[C]===void 0)return typeof _=="number"||typeof _=="boolean"?L[C]=_:ArrayBuffer.isView(_)?L[C]=_.slice():L[C]=_.clone(),!0;{let U=L[C];if(typeof _=="number"||typeof _=="boolean"){if(U!==_)return L[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(U.equals(_)===!1)return U.copy(_),!0}}return!1}function p(v){let S=v.uniforms,w=0,L=16;for(let C=0,U=S.length;C<U;C++){let z=Array.isArray(S[C])?S[C]:[S[C]];for(let k=0,ie=z.length;k<ie;k++){let V=z[k],Y=Array.isArray(V.value)?V.value:[V.value];for(let le=0,ce=Y.length;le<ce;le++){let ae=Y[le],$=m(ae),X=w%L,D=X%$.boundary,K=X+D;w+=D,K!==0&&L-K<$.storage&&(w+=L-K),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=$.storage}}}let _=w%L;return _>0&&(w+=L-_),v.__size=w,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):je("WebGLRenderer: Unsupported uniform value type.",v),S}function A(v){let S=v.target;S.removeEventListener("dispose",A);let w=r.indexOf(S.__bindingPointIndex);r.splice(w,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete a[S.id]}function M(){for(let v in s)n.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:c,update:l,dispose:M}}var Ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function Fx(){return Yn===null&&(Yn=new Ca(Ox,16,16,Ni,Fn),Yn.name="DFG_LUT",Yn.minFilter=Wt,Yn.magFilter=Wt,Yn.wrapS=Gn,Yn.wrapT=Gn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var Mc=class{constructor(e={}){let{canvas:t=vd(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=cn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let y=f,p=new Set([ko,Vo,zo]),m=new Set([cn,On,qs,$s,Oo,Fo]),A=new Uint32Array(4),M=new Int32Array(4),v=new Z,S=null,w=null,L=[],_=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,z=!1,k=null,ie=null,V=null,Y=null;this._outputColorSpace=Ft;let le=0,ce=0,ae=null,$=-1,X=null,D=new St,K=new St,F=null,q=new it(0),W=0,O=t.width,E=t.height,b=1,R=null,P=null,N=new St(0,0,O,E),J=new St(0,0,O,E),te=!1,H=new Bs,se=!1,re=!1,G=new ut,j=new Z,ve=new St,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function Te(){return ae===null?b:1}let B=i;function Ve(T,ee){return t.getContext(T,ee)}let De,I,x,ne,oe,pe,we,Ce,xe,Ae,Ne,ke,de,Me,Ie,Ge,Je,Q,Re,_e,be,Le,Se;try{let T={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Nt,!1),B===null){let ee="webgl2";if(B=Ve(ee,T),B===null)throw Ve(ee)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(T){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Nt,!1),Ke("WebGLRenderer: "+T.message),T}function We(){De=new Wv(B),De.init(),be=new Ix(B,De),I=new Dv(B,De,e,be),x=new Cx(B,De),I.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),ie=B.createFramebuffer(),V=B.createFramebuffer(),Y=B.createFramebuffer(),ne=new Xv(B),oe=new px,pe=new Rx(B,De,x,oe,I,be,ne),we=new Hv(U),Ce=new Zm(B),Le=new Lv(B,Ce),xe=new qv(B,Ce,ne,Le),Ae=new Zv(B,xe,Ce,Le,ne),Q=new Yv(B,I,pe),Ie=new Uv(oe),Ne=new fx(U,we,De,I,Le,Ie),ke=new Dx(U,oe),de=new gx,Me=new Sx(De),Je=new Pv(U,we,x,Ae,g,c),Ge=new wx(U,Ae,I),Se=new Ux(B,ne,I,x),Re=new Nv(B,De,ne),_e=new $v(B,De,ne),ne.programs=Ne.programs,U.capabilities=I,U.extensions=De,U.properties=oe,U.renderLists=de,U.shadowMap=Ge,U.state=x,U.info=ne}y!==cn&&(C=new jv(y,t.width,t.height,o,s,a));let $e=new Mu(U,B);this.xr=$e,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=De.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=De.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return b},this.setPixelRatio=function(T){T!==void 0&&(b=T,this.setSize(O,E,!1))},this.getSize=function(T){return T.set(O,E)},this.setSize=function(T,ee,me=!0){if($e.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,E=ee,t.width=Math.floor(T*b),t.height=Math.floor(ee*b),me===!0&&(t.style.width=T+"px",t.style.height=ee+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,T,ee)},this.getDrawingBufferSize=function(T){return T.set(O*b,E*b).floor()},this.setDrawingBufferSize=function(T,ee,me){O=T,E=ee,b=me,t.width=Math.floor(T*me),t.height=Math.floor(ee*me),this.setViewport(0,0,T,ee)},this.setEffects=function(T){if(y===cn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let ee=0;ee<T.length;ee++)if(T[ee].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,ee,me,ue){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,ee,me,ue),x.viewport(D.copy(N).multiplyScalar(b).round())},this.getScissor=function(T){return T.copy(J)},this.setScissor=function(T,ee,me,ue){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,ee,me,ue),x.scissor(K.copy(J).multiplyScalar(b).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(T){x.setScissorTest(te=T)},this.setOpaqueSort=function(T){R=T},this.setTransparentSort=function(T){P=T},this.getClearColor=function(T){return T.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(T=!0,ee=!0,me=!0){let ue=0;if(T){let he=!1;if(ae!==null){let Fe=ae.texture.format;he=p.has(Fe)}if(he){let Fe=ae.texture.type,qe=m.has(Fe),Oe=Je.getClearColor(),Xe=Je.getClearAlpha(),Ze=Oe.r,st=Oe.g,ct=Oe.b;qe?(A[0]=Ze,A[1]=st,A[2]=ct,A[3]=Xe,B.clearBufferuiv(B.COLOR,0,A)):(M[0]=Ze,M[1]=st,M[2]=ct,M[3]=Xe,B.clearBufferiv(B.COLOR,0,M))}else ue|=B.COLOR_BUFFER_BIT}ee&&(ue|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(ue|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&B.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),k=T},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Nt,!1),Je.dispose(),de.dispose(),Me.dispose(),oe.dispose(),we.dispose(),Ae.dispose(),Le.dispose(),Se.dispose(),Ne.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",Ju),$e.removeEventListener("sessionend",ju),Gi.stop()};function mt(T){T.preventDefault(),nu("WebGLRenderer: Context Lost."),z=!0}function ht(){nu("WebGLRenderer: Context Restored."),z=!1;let T=ne.autoReset,ee=Ge.enabled,me=Ge.autoUpdate,ue=Ge.needsUpdate,he=Ge.type;We(),ne.autoReset=T,Ge.enabled=ee,Ge.autoUpdate=me,Ge.needsUpdate=ue,Ge.type=he}function Nt(T){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function un(T){let ee=T.target;ee.removeEventListener("dispose",un),Sr(ee)}function Sr(T){jc(T),oe.remove(T)}function jc(T){let ee=oe.get(T).programs;ee!==void 0&&(ee.forEach(function(me){Ne.releaseProgram(me)}),T.isShaderMaterial&&Ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,ee,me,ue,he,Fe){ee===null&&(ee=ye);let qe=he.isMesh&&he.matrixWorld.determinantAffine()<0,Oe=vp(T,ee,me,ue,he);x.setMaterial(ue,qe);let Xe=me.index,Ze=1;if(ue.wireframe===!0){if(Xe=xe.getWireframeAttribute(me),Xe===void 0)return;Ze=2}let st=me.drawRange,ct=me.attributes.position,Ye=st.start*Ze,ft=(st.start+st.count)*Ze;Fe!==null&&(Ye=Math.max(Ye,Fe.start*Ze),ft=Math.min(ft,(Fe.start+Fe.count)*Ze)),Xe!==null?(Ye=Math.max(Ye,0),ft=Math.min(ft,Xe.count)):ct!=null&&(Ye=Math.max(Ye,0),ft=Math.min(ft,ct.count));let Rt=ft-Ye;if(Rt<0||Rt===1/0)return;Le.setup(he,ue,Oe,me,Xe);let yt,xt=Re;if(Xe!==null&&(yt=Ce.get(Xe),xt=_e,xt.setIndex(yt)),he.isMesh)ue.wireframe===!0?(x.setLineWidth(ue.wireframeLinewidth*Te()),xt.setMode(B.LINES)):xt.setMode(B.TRIANGLES);else if(he.isLine){let Xt=ue.linewidth;Xt===void 0&&(Xt=1),x.setLineWidth(Xt*Te()),he.isLineSegments?xt.setMode(B.LINES):he.isLineLoop?xt.setMode(B.LINE_LOOP):xt.setMode(B.LINE_STRIP)}else he.isPoints?xt.setMode(B.POINTS):he.isSprite&&xt.setMode(B.TRIANGLES);if(he.isBatchedMesh)if(De.get("WEBGL_multi_draw"))xt.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{let Xt=he._multiDrawStarts,He=he._multiDrawCounts,Kt=he._multiDrawCount,dt=Xe?Ce.get(Xe).bytesPerElement:1,yn=oe.get(ue).currentProgram.getUniforms();for(let Vn=0;Vn<Kt;Vn++)yn.setValue(B,"_gl_DrawID",Vn),xt.render(Xt[Vn]/dt,He[Vn])}else if(he.isInstancedMesh)xt.renderInstances(Ye,Rt,he.count);else if(me.isInstancedBufferGeometry){let Xt=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,He=Math.min(me.instanceCount,Xt);xt.renderInstances(Ye,Rt,He)}else xt.render(Ye,Rt)};function Mr(T,ee,me,ue){k!==null&&T.isNodeMaterial&&k.setObject(ue,T),se===!0&&Ie.setState(T,me,!1),T.transparent===!0&&T.side===$n&&T.forceSinglePass===!1?(T.side=$t,T.needsUpdate=!0,Tr(T,ee,ue),T.side=Ri,T.needsUpdate=!0,Tr(T,ee,ue),T.side=$n):Tr(T,ee,ue)}this.compile=function(T,ee,me=null){me===null&&(me=T),k!==null&&k.renderStart(T,ee,me),w=Me.get(me),w.init(ee),_.push(w),me.traverseVisible(function(he){he.isLight&&he.layers.test(ee.layers)&&(w.pushLight(he),he.castShadow&&w.pushShadow(he))}),T!==me&&T.traverseVisible(function(he){he.isLight&&he.layers.test(ee.layers)&&(w.pushLight(he),he.castShadow&&w.pushShadow(he))}),w.setupLights(),k!==null&&k.updateLights(w.state.lightsArray),re=this.localClippingEnabled,se=Ie.init(this.clippingPlanes,re),se===!0&&Ie.setGlobalState(this.clippingPlanes,ee),k!==null&&Ge.render(w.state.shadowsArray,me,ee);let ue=new Set;return T.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;let Fe=he.material;if(Fe)if(Array.isArray(Fe))for(let qe=0;qe<Fe.length;qe++){let Oe=Fe[qe];Mr(Oe,me,ee,he),ue.add(Oe)}else Mr(Fe,me,ee,he),ue.add(Fe)}),w=_.pop(),k!==null&&k.renderEnd(),ue},this.compileAsync=function(T,ee,me=null){let ue=this.compile(T,ee,me);return new Promise(he=>{function Fe(){if(ue.forEach(function(qe){let Xe=oe.get(qe).currentProgram;(Xe===void 0||Xe.isReady())&&ue.delete(qe)}),ue.size===0){he(T);return}setTimeout(Fe,10)}De.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let ra=null;function mp(T){ra&&ra(T)}function Ju(){Gi.stop()}function ju(){Gi.start()}let Gi=new Jd;Gi.setAnimationLoop(mp),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(T){ra=T,$e.setAnimationLoop(T),T===null?Gi.stop():Gi.start()},$e.addEventListener("sessionstart",Ju),$e.addEventListener("sessionend",ju),this.render=function(T,ee){if(ee!==void 0&&ee.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;k!==null&&k.renderStart(T,ee);let me=$e.enabled===!0&&$e.isPresenting===!0,ue=C!==null&&(ae===null||me)&&C.begin(U,ae);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(ee),ee=$e.getCamera()),T.isScene===!0&&T.onBeforeRender(U,T,ee,ae),w=Me.get(T,_.length),w.init(ee),w.state.textureUnits=pe.getTextureUnits(),_.push(w),G.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),H.setFromProjectionMatrix(G,Dn,ee.reversedDepth),re=this.localClippingEnabled,se=Ie.init(this.clippingPlanes,re),S=de.get(T,L.length),S.init(),L.push(S),$e.enabled===!0&&$e.isPresenting===!0){let qe=U.xr.getDepthSensingMesh();qe!==null&&Kc(qe,ee,-1/0,U.sortObjects)}Kc(T,ee,0,U.sortObjects),S.finish(),k!==null&&k.updateLights(w.state.lightsArray),U.sortObjects===!0&&S.sort(R,P),Ee=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,Ee&&Je.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ie.beginShadows();let he=w.state.shadowsArray;if(Ge.render(he,T,ee),se===!0&&Ie.endShadows(),(ue&&C.hasRenderPass())===!1){let qe=S.opaque,Oe=S.transmissive;if(w.setupLights(),ee.isArrayCamera){let Xe=ee.cameras;if(Oe.length>0)for(let Ze=0,st=Xe.length;Ze<st;Ze++){let ct=Xe[Ze];Qu(qe,Oe,T,ct)}Ee&&Je.render(T);for(let Ze=0,st=Xe.length;Ze<st;Ze++){let ct=Xe[Ze];Ku(S,T,ct,ct.viewport)}}else Oe.length>0&&Qu(qe,Oe,T,ee),Ee&&Je.render(T),Ku(S,T,ee)}ae!==null&&ce===0&&(pe.updateMultisampleRenderTarget(ae),pe.updateRenderTargetMipmap(ae)),ue&&C.end(U),T.isScene===!0&&T.onAfterRender(U,T,ee),Le.resetDefaultState(),$=-1,X=null,_.pop(),_.length>0?(w=_[_.length-1],pe.setTextureUnits(w.state.textureUnits),se===!0&&Ie.setGlobalState(U.clippingPlanes,w.state.camera)):w=null,L.pop(),L.length>0?S=L[L.length-1]:S=null,k!==null&&k.renderEnd()};function Kc(T,ee,me,ue){if(T.visible===!1)return;if(T.layers.test(ee.layers)){if(T.isGroup)me=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(ee);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(H)){ue&&ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(G);let qe=Ae.update(T),Oe=T.material;Oe.visible&&S.push(T,qe,Oe,me,ve.z,null,ee)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(H))){let qe=Ae.update(T),Oe=T.material;if(ue&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ve.copy(T.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),ve.copy(qe.boundingSphere.center)),ve.applyMatrix4(T.matrixWorld).applyMatrix4(G)),Array.isArray(Oe)){let Xe=qe.groups;for(let Ze=0,st=Xe.length;Ze<st;Ze++){let ct=Xe[Ze],Ye=Oe[ct.materialIndex];Ye&&Ye.visible&&S.push(T,qe,Ye,me,ve.z,ct,ee)}}else Oe.visible&&S.push(T,qe,Oe,me,ve.z,null,ee)}}let Fe=T.children;for(let qe=0,Oe=Fe.length;qe<Oe;qe++)Kc(Fe[qe],ee,me,ue)}function Ku(T,ee,me,ue){let{opaque:he,transmissive:Fe,transparent:qe}=T;w.setupLightsView(me),se===!0&&Ie.setGlobalState(U.clippingPlanes,me),ue&&x.viewport(D.copy(ue)),he.length>0&&br(he,ee,me),Fe.length>0&&br(Fe,ee,me),qe.length>0&&br(qe,ee,me),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Qu(T,ee,me,ue){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ue.id]===void 0){let Ye=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ue.id]=new rn(1,1,{generateMipmaps:!0,type:Ye?Fn:cn,minFilter:Pi,samples:Math.max(4,I.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Fe=w.state.transmissionRenderTarget[ue.id],qe=ue.viewport||D;Fe.setSize(qe.z*U.transmissionResolutionScale,qe.w*U.transmissionResolutionScale);let Oe=U.getRenderTarget(),Xe=U.getActiveCubeFace(),Ze=U.getActiveMipmapLevel();U.setRenderTarget(Fe),U.getClearColor(q),W=U.getClearAlpha(),W<1&&U.setClearColor(16777215,.5),U.clear(),Ee&&Je.render(me);let st=U.toneMapping;U.toneMapping=Un;let ct=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),w.setupLightsView(ue),se===!0&&Ie.setGlobalState(U.clippingPlanes,ue),br(T,me,ue),pe.updateMultisampleRenderTarget(Fe),pe.updateRenderTargetMipmap(Fe),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let ft=0,Rt=ee.length;ft<Rt;ft++){let yt=ee[ft],{object:xt,geometry:Xt,material:He,group:Kt}=yt;if(He.side===$n&&xt.layers.test(ue.layers)){let dt=He.side;He.side=$t,He.needsUpdate=!0,eh(xt,me,ue,Xt,He,Kt),He.side=dt,He.needsUpdate=!0,Ye=!0}}Ye===!0&&(pe.updateMultisampleRenderTarget(Fe),pe.updateRenderTargetMipmap(Fe))}U.setRenderTarget(Oe,Xe,Ze),U.setClearColor(q,W),ct!==void 0&&(ue.viewport=ct),U.toneMapping=st}function br(T,ee,me){let ue=ee.isScene===!0?ee.overrideMaterial:null;for(let he=0,Fe=T.length;he<Fe;he++){let qe=T[he],{object:Oe,geometry:Xe,group:Ze}=qe,st=qe.material;st.allowOverride===!0&&ue!==null&&(st=ue),Oe.layers.test(me.layers)&&eh(Oe,ee,me,Xe,st,Ze)}}function eh(T,ee,me,ue,he,Fe){k!==null&&he.isNodeMaterial&&k.setObject(T,he),T.onBeforeRender(U,ee,me,ue,he,Fe),T.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),he.onBeforeRender(U,ee,me,ue,T,Fe),he.transparent===!0&&he.side===$n&&he.forceSinglePass===!1?(he.side=$t,he.needsUpdate=!0,U.renderBufferDirect(me,ee,ue,he,T,Fe),he.side=Ri,he.needsUpdate=!0,U.renderBufferDirect(me,ee,ue,he,T,Fe),he.side=$n):U.renderBufferDirect(me,ee,ue,he,T,Fe),T.onAfterRender(U,ee,me,ue,he,Fe)}function Tr(T,ee,me){ee.isScene!==!0&&(ee=ye);let ue=oe.get(T),he=w.state.lights,Fe=w.state.shadowsArray,qe=he.state.version,Oe=Ne.getParameters(T,he.state,Fe,ee,me,w.state.lightProbeGridArray),Xe=Ne.getProgramCacheKey(Oe),Ze=ue.programs;ue.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?ee.environment:null,ue.fog=ee.fog;let st=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ue.envMap=we.get(T.envMap||ue.environment,st),ue.envMapRotation=ue.environment!==null&&T.envMap===null?ee.environmentRotation:T.envMapRotation,Ze===void 0&&(T.addEventListener("dispose",un),Ze=new Map,ue.programs=Ze);let ct=Ze.get(Xe);if(ct!==void 0){if(ue.currentProgram===ct&&ue.lightsStateVersion===qe)return nh(T,Oe),ct}else Oe.uniforms=Ne.getUniforms(T),k!==null&&T.isNodeMaterial&&k.build(T,me,Oe),T.onBeforeCompile(Oe,U),ct=Ne.acquireProgram(Oe,Xe),Ze.set(Xe,ct),ue.uniforms=Oe.uniforms;let Ye=ue.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=Ie.uniform),nh(T,Oe),ue.needsLights=_p(T),ue.lightsStateVersion=qe,ue.needsLights&&(Ye.ambientLightColor.value=he.state.ambient,Ye.lightProbe.value=he.state.probe,Ye.sunLights.value=he.state.sun,Ye.sunLightShadows.value=he.state.sunShadow,Ye.directionalLights.value=he.state.directional,Ye.directionalLightShadows.value=he.state.directionalShadow,Ye.spotLights.value=he.state.spot,Ye.spotLightShadows.value=he.state.spotShadow,Ye.rectAreaLights.value=he.state.rectArea,Ye.ltc_1.value=he.state.rectAreaLTC1,Ye.ltc_2.value=he.state.rectAreaLTC2,Ye.pointLights.value=he.state.point,Ye.pointLightShadows.value=he.state.pointShadow,Ye.hemisphereLights.value=he.state.hemi,Ye.sunShadowMatrix.value=he.state.sunShadowMatrix,Ye.sunShadowCascade.value=he.state.sunShadowCascade,Ye.directionalShadowMatrix.value=he.state.directionalShadowMatrix,Ye.spotLightMatrix.value=he.state.spotLightMatrix,Ye.spotLightMap.value=he.state.spotLightMap,Ye.pointShadowMatrix.value=he.state.pointShadowMatrix),ue.lightProbeGrid=w.state.lightProbeGridArray.length>0,ue.currentProgram=ct,ue.uniformsList=null,ct}function th(T){if(T.uniformsList===null){let ee=T.currentProgram.getUniforms();T.uniformsList=Zs.seqWithValue(ee.seq,T.uniforms)}return T.uniformsList}function nh(T,ee){let me=oe.get(T);me.outputColorSpace=ee.outputColorSpace,me.batching=ee.batching,me.batchingColor=ee.batchingColor,me.instancing=ee.instancing,me.instancingColor=ee.instancingColor,me.instancingMorph=ee.instancingMorph,me.skinning=ee.skinning,me.morphTargets=ee.morphTargets,me.morphNormals=ee.morphNormals,me.morphColors=ee.morphColors,me.morphTargetsCount=ee.morphTargetsCount,me.numClippingPlanes=ee.numClippingPlanes,me.numIntersection=ee.numClipIntersection,me.vertexAlphas=ee.vertexAlphas,me.vertexTangents=ee.vertexTangents,me.toneMapping=ee.toneMapping}function gp(T,ee){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(ee.matrixWorld);for(let me=0,ue=T.length;me<ue;me++){let he=T[me];if(he.texture!==null&&he.boundingBox.containsPoint(v))return he}return null}function vp(T,ee,me,ue,he){ee.isScene!==!0&&(ee=ye),pe.resetTextureUnits();let Fe=ee.fog,qe=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?ee.environment:null,Oe=ae===null?U.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:lt.workingColorSpace,Xe=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,Ze=we.get(ue.envMap||qe,Xe),st=ue.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,ct=!!me.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ye=!!me.morphAttributes.position,ft=!!me.morphAttributes.normal,Rt=!!me.morphAttributes.color,yt=Un;ue.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(yt=U.toneMapping);let xt=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Xt=xt!==void 0?xt.length:0,He=oe.get(ue),Kt=w.state.lights;if(se===!0&&(re===!0||T!==X)){let _t=T===X&&ue.id===$;Ie.setState(ue,T,_t)}let dt=!1;ue.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Kt.state.version||He.outputColorSpace!==Oe||he.isBatchedMesh&&He.batching===!1||!he.isBatchedMesh&&He.batching===!0||he.isBatchedMesh&&He.batchingColor===!0&&he._colorsTexture===null||he.isBatchedMesh&&He.batchingColor===!1&&he._colorsTexture!==null||he.isInstancedMesh&&He.instancing===!1||!he.isInstancedMesh&&He.instancing===!0||he.isSkinnedMesh&&He.skinning===!1||!he.isSkinnedMesh&&He.skinning===!0||he.isInstancedMesh&&He.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&He.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&He.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&He.instancingMorph===!1&&he.morphTexture!==null||He.envMap!==Ze||ue.fog===!0&&He.fog!==Fe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ie.numPlanes||He.numIntersection!==Ie.numIntersection)||He.vertexAlphas!==st||He.vertexTangents!==ct||He.morphTargets!==Ye||He.morphNormals!==ft||He.morphColors!==Rt||He.toneMapping!==yt||He.morphTargetsCount!==Xt||!!He.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,He.__version=ue.version);let yn=He.currentProgram;dt===!0&&(yn=Tr(ue,ee,he),k&&ue.isNodeMaterial&&k.onUpdateProgram(ue,yn,He));let Vn=!1,pi=!1,hs=!1,gt=yn.getUniforms(),Tt=He.uniforms;if(x.useProgram(yn.program)&&(Vn=!0,pi=!0,hs=!0),ue.id!==$&&($=ue.id,pi=!0),He.needsLights){let _t=gp(w.state.lightProbeGridArray,he);He.lightProbeGrid!==_t&&(He.lightProbeGrid=_t,pi=!0)}if(Vn||X!==T){x.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),gt.setValue(B,"projectionMatrix",T.projectionMatrix),gt.setValue(B,"viewMatrix",T.matrixWorldInverse);let gi=gt.map.cameraPosition;gi!==void 0&&gi.setValue(B,j.setFromMatrixPosition(T.matrixWorld)),I.logarithmicDepthBuffer&&gt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&gt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,pi=!0,hs=!0)}if(He.needsLights&&(Kt.state.sunShadowMap.length>0&&gt.setValue(B,"sunShadowMap",Kt.state.sunShadowMap,pe),Kt.state.directionalShadowMap.length>0&&gt.setValue(B,"directionalShadowMap",Kt.state.directionalShadowMap,pe),Kt.state.spotShadowMap.length>0&&gt.setValue(B,"spotShadowMap",Kt.state.spotShadowMap,pe),Kt.state.pointShadowMap.length>0&&gt.setValue(B,"pointShadowMap",Kt.state.pointShadowMap,pe)),he.isSkinnedMesh){gt.setOptional(B,he,"bindMatrix"),gt.setOptional(B,he,"bindMatrixInverse");let _t=he.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),gt.setValue(B,"boneTexture",_t.boneTexture,pe))}he.isBatchedMesh&&(gt.setOptional(B,he,"batchingTexture"),gt.setValue(B,"batchingTexture",he._matricesTexture,pe),gt.setOptional(B,he,"batchingIdTexture"),gt.setValue(B,"batchingIdTexture",he._indirectTexture,pe),gt.setOptional(B,he,"batchingColorTexture"),he._colorsTexture!==null&&gt.setValue(B,"batchingColorTexture",he._colorsTexture,pe));let mi=me.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&Q.update(he,me,yn),(pi||He.receiveShadow!==he.receiveShadow)&&(He.receiveShadow=he.receiveShadow,gt.setValue(B,"receiveShadow",he.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&ee.environment!==null&&(Tt.envMapIntensity.value=ee.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=Fx()),pi){if(gt.setValue(B,"toneMappingExposure",U.toneMappingExposure),He.needsLights&&xp(Tt,hs),Fe&&ue.fog===!0&&ke.refreshFogUniforms(Tt,Fe),ke.refreshMaterialUniforms(Tt,ue,b,E,w.state.transmissionRenderTarget[T.id]),He.needsLights&&He.lightProbeGrid){let _t=He.lightProbeGrid;Tt.probesSH.value=_t.texture,Tt.probesMin.value.copy(_t.boundingBox.min),Tt.probesMax.value.copy(_t.boundingBox.max),Tt.probesResolution.value.copy(_t.resolution)}Zs.upload(B,th(He),Tt,pe)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Zs.upload(B,th(He),Tt,pe),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&gt.setValue(B,"center",he.center),gt.setValue(B,"modelViewMatrix",he.modelViewMatrix),gt.setValue(B,"normalMatrix",he.normalMatrix),gt.setValue(B,"modelMatrix",he.matrixWorld),ue.uniformsGroups!==void 0){let _t=ue.uniformsGroups;for(let gi=0,ds=_t.length;gi<ds;gi++){let sh=_t[gi];Se.update(sh,yn),Se.bind(sh,yn)}}return yn}function xp(T,ee){T.ambientLightColor.needsUpdate=ee,T.lightProbe.needsUpdate=ee,T.sunLights.needsUpdate=ee,T.sunLightShadows.needsUpdate=ee,T.directionalLights.needsUpdate=ee,T.directionalLightShadows.needsUpdate=ee,T.pointLights.needsUpdate=ee,T.pointLightShadows.needsUpdate=ee,T.spotLights.needsUpdate=ee,T.spotLightShadows.needsUpdate=ee,T.rectAreaLights.needsUpdate=ee,T.hemisphereLights.needsUpdate=ee}function _p(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(T,ee,me){let ue=oe.get(T);ue.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),oe.get(T.texture).__webglTexture=ee,oe.get(T.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:me,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,ee){let me=oe.get(T);me.__webglFramebuffer=ee,me.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(T,ee=0,me=0){ae=T,le=ee,ce=me;let ue=null,he=!1,Fe=!1;if(T){let Oe=oe.get(T);if(Oe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(B.FRAMEBUFFER,Oe.__webglFramebuffer),D.copy(T.viewport),K.copy(T.scissor),F=T.scissorTest,x.viewport(D),x.scissor(K),x.setScissorTest(F),$=-1;return}else if(Oe.__webglFramebuffer===void 0)pe.setupRenderTarget(T);else if(Oe.__hasExternalTextures)pe.rebindTextures(T,oe.get(T.texture).__webglTexture,oe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let st=T.depthTexture;if(Oe.__boundDepthTexture!==st){if(st!==null&&oe.has(st)&&(T.width!==st.image.width||T.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(T)}}let Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Fe=!0);let Ze=oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ze[ee])?ue=Ze[ee][me]:ue=Ze[ee],he=!0):T.samples>0&&pe.useMultisampledRTT(T)===!1?ue=oe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ze)?ue=Ze[me]:ue=Ze,D.copy(T.viewport),K.copy(T.scissor),F=T.scissorTest}else D.copy(N).multiplyScalar(b).floor(),K.copy(J).multiplyScalar(b).floor(),F=te;if(me!==0&&(ue=ie),x.bindFramebuffer(B.FRAMEBUFFER,ue)&&x.drawBuffers(T,ue),x.viewport(D),x.scissor(K),x.setScissorTest(F),he){let Oe=oe.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Oe.__webglTexture,me)}else if(Fe){let Oe=ee;for(let Xe=0;Xe<T.textures.length;Xe++){let Ze=oe.get(T.textures[Xe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Xe,Ze.__webglTexture,me,Oe)}}else if(T!==null&&me!==0){let Oe=oe.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oe.__webglTexture,me)}$=-1};function ih(T){let ee=oe.get(T);return(ee.__readFormat!==T.format||ee.__readType!==T.type)&&(ee.__readFormat=T.format,ee.__readType=T.type,ee.__formatReadable=I.textureFormatReadable(T.format),ee.__typeReadable=I.textureTypeReadable(T.type)),ee}this.readRenderTargetPixels=function(T,ee,me,ue,he,Fe,qe,Oe=0){if(!(T&&T.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&qe!==void 0&&(Xe=Xe[qe]),Xe){x.bindFramebuffer(B.FRAMEBUFFER,Xe);try{let Ze=T.textures[Oe],st=Ze.format,ct=Ze.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Oe);let Ye=ih(Ze);if(Ye.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=T.width-ue&&me>=0&&me<=T.height-he&&B.readPixels(ee,me,ue,he,be.convert(st),be.convert(ct),Fe)}finally{let Ze=ae!==null?oe.get(ae).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(T,ee,me,ue,he,Fe,qe,Oe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&qe!==void 0&&(Xe=Xe[qe]),Xe)if(ee>=0&&ee<=T.width-ue&&me>=0&&me<=T.height-he){x.bindFramebuffer(B.FRAMEBUFFER,Xe);let Ze=T.textures[Oe],st=Ze.format,ct=Ze.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Oe);let Ye=ih(Ze);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ft),B.bufferData(B.PIXEL_PACK_BUFFER,Fe.byteLength,B.STREAM_READ),B.readPixels(ee,me,ue,he,be.convert(st),be.convert(ct),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Rt=ae!==null?oe.get(ae).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,Rt);let yt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await _d(B,yt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ft),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Fe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ft),B.deleteSync(yt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,ee=null,me=0){let ue=Math.pow(2,-me),he=Math.floor(T.image.width*ue),Fe=Math.floor(T.image.height*ue),qe=ee!==null?ee.x:0,Oe=ee!==null?ee.y:0;pe.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,me,0,0,qe,Oe,he,Fe),x.unbindTexture()},this.copyTextureToTexture=function(T,ee,me=null,ue=null,he=0,Fe=0){let qe,Oe,Xe,Ze,st,ct,Ye,ft,Rt,yt=T.isCompressedTexture?T.mipmaps[Fe]:T.image;if(me!==null)qe=me.max.x-me.min.x,Oe=me.max.y-me.min.y,Xe=me.isBox3?me.max.z-me.min.z:1,Ze=me.min.x,st=me.min.y,ct=me.isBox3?me.min.z:0;else{let Tt=Math.pow(2,-he);qe=Math.floor(yt.width*Tt),Oe=Math.floor(yt.height*Tt),T.isDataArrayTexture?Xe=yt.depth:T.isData3DTexture?Xe=Math.floor(yt.depth*Tt):Xe=1,Ze=0,st=0,ct=0}ue!==null?(Ye=ue.x,ft=ue.y,Rt=ue.z):(Ye=0,ft=0,Rt=0);let xt=be.convert(ee.format),Xt=be.convert(ee.type),He;ee.isData3DTexture?(pe.setTexture3D(ee,0),He=B.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(pe.setTexture2DArray(ee,0),He=B.TEXTURE_2D_ARRAY):(pe.setTexture2D(ee,0),He=B.TEXTURE_2D),x.activeTexture(B.TEXTURE0),x.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ee.flipY),x.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),x.pixelStorei(B.UNPACK_ALIGNMENT,ee.unpackAlignment);let Kt=x.getParameter(B.UNPACK_ROW_LENGTH),dt=x.getParameter(B.UNPACK_IMAGE_HEIGHT),yn=x.getParameter(B.UNPACK_SKIP_PIXELS),Vn=x.getParameter(B.UNPACK_SKIP_ROWS),pi=x.getParameter(B.UNPACK_SKIP_IMAGES);x.pixelStorei(B.UNPACK_ROW_LENGTH,yt.width),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yt.height),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Ze),x.pixelStorei(B.UNPACK_SKIP_ROWS,st),x.pixelStorei(B.UNPACK_SKIP_IMAGES,ct);let hs=T.isDataArrayTexture||T.isData3DTexture,gt=ee.isDataArrayTexture||ee.isData3DTexture;if(T.isDepthTexture){let Tt=oe.get(T),mi=oe.get(ee),_t=oe.get(Tt.__renderTarget),gi=oe.get(mi.__renderTarget);x.bindFramebuffer(B.READ_FRAMEBUFFER,_t.__webglFramebuffer),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let ds=0;ds<Xe;ds++)hs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,oe.get(T).__webglTexture,he,ct+ds),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,oe.get(ee).__webglTexture,Fe,Rt+ds)),B.blitFramebuffer(Ze,st,qe,Oe,Ye,ft,qe,Oe,B.DEPTH_BUFFER_BIT,B.NEAREST);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(he!==0||T.isRenderTargetTexture||oe.has(T)){let Tt=oe.get(T),mi=oe.get(ee);x.bindFramebuffer(B.READ_FRAMEBUFFER,V),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,Y);for(let _t=0;_t<Xe;_t++)hs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tt.__webglTexture,he,ct+_t):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tt.__webglTexture,he),gt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mi.__webglTexture,Fe,Rt+_t):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mi.__webglTexture,Fe),he!==0?B.blitFramebuffer(Ze,st,qe,Oe,Ye,ft,qe,Oe,B.COLOR_BUFFER_BIT,B.NEAREST):gt?B.copyTexSubImage3D(He,Fe,Ye,ft,Rt+_t,Ze,st,qe,Oe):B.copyTexSubImage2D(He,Fe,Ye,ft,Ze,st,qe,Oe);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else gt?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(He,Fe,Ye,ft,Rt,qe,Oe,Xe,xt,Xt,yt.data):ee.isCompressedArrayTexture?B.compressedTexSubImage3D(He,Fe,Ye,ft,Rt,qe,Oe,Xe,xt,yt.data):B.texSubImage3D(He,Fe,Ye,ft,Rt,qe,Oe,Xe,xt,Xt,yt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Fe,Ye,ft,qe,Oe,xt,Xt,yt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Fe,Ye,ft,yt.width,yt.height,xt,yt.data):B.texSubImage2D(B.TEXTURE_2D,Fe,Ye,ft,qe,Oe,xt,Xt,yt);x.pixelStorei(B.UNPACK_ROW_LENGTH,Kt),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dt),x.pixelStorei(B.UNPACK_SKIP_PIXELS,yn),x.pixelStorei(B.UNPACK_SKIP_ROWS,Vn),x.pixelStorei(B.UNPACK_SKIP_IMAGES,pi),Fe===0&&ee.generateMipmaps&&B.generateMipmap(He),x.unbindTexture()},this.initRenderTarget=function(T){oe.get(T).__webglFramebuffer===void 0&&pe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?pe.setTextureCube(T,0):T.isData3DTexture?pe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?pe.setTexture2DArray(T,0):pe.setTexture2D(T,0),x.unbindTexture()},this.resetState=function(){le=0,ce=0,ae=null,x.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var Ec=class extends Zi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ci;e.deleteAttribute("uv");let t=new mn({side:$t}),i=new mn,s=new $a(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let a=new vt(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let r=new Ji(e,i,6),o=new qt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let c=new vt(e,Ks(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new vt(e,Ks(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new vt(e,Ks(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new vt(e,Ks(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new vt(e,Ks(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new vt(e,Ks(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ks(n){return new ka({color:0,emissive:16777215,emissiveIntensity:n})}function af(n,e=Math.PI/3){let t=n.index?n.toNonIndexed():n,i=t.attributes.position,s=i.count,a;if(i.isBufferAttribute===!0&&i.itemSize===3&&i.normalized===!1)a=i.array;else{a=new Float64Array(s*3);for(let v=0;v<s;v++)a[3*v+0]=i.getX(v),a[3*v+1]=i.getY(v),a[3*v+2]=i.getZ(v)}let r=Math.cos(e),o=(1+1e-10)*100,c=s/3,l=new Float64Array(c*3);for(let v=0;v<c;v++){let S=9*v,w=a[S+0],L=a[S+1],_=a[S+2],C=a[S+3],U=a[S+4],z=a[S+5],k=a[S+6],ie=a[S+7],V=a[S+8],Y=k-C,le=ie-U,ce=V-z,ae=w-C,$=L-U,X=_-z,D=le*X-ce*$,K=ce*ae-Y*X,F=Y*$-le*ae,q=1/(Math.sqrt(D*D+K*K+F*F)||1);l[3*v+0]=D*q,l[3*v+1]=K*q,l[3*v+2]=F*q}let u=new Int32Array(s),d=new Float64Array(s*3),h=1;for(;h<s*2;)h<<=1;let f=h-1,g=new Int32Array(h),y=0;for(let v=0;v<s;v++){let S=3*v,w=Math.trunc(a[S+0]*o),L=Math.trunc(a[S+1]*o),_=Math.trunc(a[S+2]*o),C=(Math.imul(w,73856093)^Math.imul(L,19349663)^Math.imul(_,83492791))&f;for(;;){let U=g[C];if(U===0){let k=3*y;d[k+0]=w,d[k+1]=L,d[k+2]=_,g[C]=y+1,u[v]=y++;break}let z=3*(U-1);if(d[z+0]===w&&d[z+1]===L&&d[z+2]===_){u[v]=U-1;break}C=C+1&f}}let p=new Int32Array(y+1);for(let v=0;v<s;v++)p[u[v]+1]++;for(let v=0;v<y;v++)p[v+1]+=p[v];let m=new Int32Array(s),A=p.slice(0,y);for(let v=0;v<c;v++){let S=3*v;m[A[u[S+0]]++]=v,m[A[u[S+1]]++]=v,m[A[u[S+2]]++]=v}let M=new Float32Array(s*3);for(let v=0;v<c;v++){let S=3*v,w=l[S+0],L=l[S+1],_=l[S+2];for(let C=0;C<3;C++){let U=S+C,z=u[U],k=0,ie=0,V=0;for(let le=p[z],ce=p[z+1];le<ce;le++){let ae=3*m[le],$=l[ae+0],X=l[ae+1],D=l[ae+2];w*$+L*X+_*D>r&&(k+=$,ie+=X,V+=D)}let Y=1/(Math.sqrt(k*k+ie*ie+V*V)||1);M[3*U+0]=k*Y,M[3*U+1]=ie*Y,M[3*U+2]=V*Y}}return t.setAttribute("normal",new en(M,3,!1)),t}var rf="data:font/woff2;base64,d09GMgABAAAAAFVIABAAAAAA4dAAAFTlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGoEOG4ZQHIGacgZgP1NUQVRMAIUiEQgKgdw0gatRC4YWAAE2AiQDjBoEIAWFHgejDAwHGzvFF9g2jR5edwJat/qq512YcGPcwHkUJPDRLxiJsFeTlDT7//97cmOISBuo9b29D0jMaWabOaRT1dk911o91ShpCpaEFgxJaH0S06iRh+m6nszGZF+R/bhEUtZFJSYY74eYzJAWGqtUVBV/oTy8IXb44XnbOfLDZsJmus3/kq1Q4v94ooI9ugcest9cLPl7p+fwM3aKSlR3OGjWHj1YCuuKoqsAd34xSRnn8fy72c85NyQhxhBDDClFGmOMacQ0TSlimo1II0bM0pjmYR6PRkQMiJQiRYoYkdKUQsTIrwgsRX6LiDTlUbSUUqTU4ncpZSmPpSzmUZbyWJbyKLI0wA38/7f2n/vcqgZ6XdX8ut9MENQgvW9MkHVs9KhZPuCiRFgYlmEZFZUV6J+/N2fO3VbRFnxR08QaSDpYONYsGIH3C//Q36fn/lg4HAtQNBSNBqQTLXa8HOBuuJsUgx1fdXv57w+AbM6DuYbn59YzKUV00GPDNQzY+v+/YttfNLCA3vb/YAy2EakenFhx2Heip2Bcip6KUXF3NkaeV+olXqh3U3N6vspM2LHxszoAVIIQFDD0cFucQ5MVkxTHXQ9M9kag++CcjrhIO9mhumTySSF7U+Jp98M1jevqAgWmg/zzGDQpMzknJwUat8M1vdikc/88QFYlTckYPQk/oQrAAwA1/tEt/3HCfRPaIBpxAkkINRumtePmQmiMWvG7cHEuHgH+l87qf8lQ1U+yhyA7hog4wwaNe0AwtMReKZFTOwXaZduzkN5xSpUDZcnNv02t9v/50lqyFyR7wd4jexGLZrSogwqwvaKlP39GGvgz0Wg0TkaWKVJgTBvJDsjxgeWx8jSyknO85OSAaWQnWS8rR0AVAPS3RbX99RVxe0XZXX/+o5pZC3yC3sfB4pKdeSFWqXSdeDm3ueg+SHBnJJKrrwFWO85yuJRrB+6sg1ZzgZKddSnKTXOhdVscPNVeZ/fN5Gb2oDtslKNZkdIuyRJSqeNBFVfqJeZTqsS5Uh1IBoXy+H1rJYQHgoqk2LkXK/ZNVU8l292ZDSggkFS/6qAXhEncKZuTMlBtRVI9oJ/xIcviJSIdEblH/Heo2ffJWL5l+bjUwuSLI4jQH+I66R6W3QHqMgpLkG3SmDDlc/QPXxN9knl7Sb86KU04pZllMcIIIz7C/CubNW0kwwImWiDHMrc9eN3vpv20/jAxW7N7c7mtVuwIGKpAFEnu+9XNAQHAZPGXDrMVgg6CgQRCSgoRJBxC4yCElg4iShSEngkiRgxErASI05IhUpyFeNe7EOdkQfzmN4hVq5BOoVNAKBElAaEzKBUIZaFsIJSD3ocAAcBARAHfidAZgfX+iYxUYEEBAF5HkaNbB3TAMKA4BMk/FrYUKWBzwOT09CCD5ekAvGAON3nc1RpTBZ7G5RjD1M3dxmUXyi9bgPJ9RC3aTxT6Oxx1euwC0K/BE9/OSPc3JwD0g0NtjwD7KxecBSOGOeNbwl677LANQJ+7FwIgyALfFYCUBNB8IQEsTvFRzYR1CPAvyBZWASAVfRFIjl4OhQGkaPKlSaByaLcjwfHMywAYGQfDvlgoXOSIjnYhCdqPDqAIdAjp0VEUg2JRPDqJEguTsAAwP9AEDU3mUyN0ACJgGFQ2RRA+g8SSSiMrX1AKgENiRkyQhaVTL0lcsVLQ241T+DzKti6h3Bajo+Lq8kdcXxB8+4BRAIF7wxEBsF+uGMrjQuBlIAokfFicQ7RvL6EezoKipTzYYdKCq+l/iMX5Wvzz2A5a2ZQhmiYDnYGpFi4hswDY6797efHGsgVBgiQp0pBQ0DBlyZaLTwQhpaCmZWBmVcDBpVgZNy+cX62gsEYt2kzR6X3d8th8xK7IVSXKXVOtxnWNmrVo1eYzHe7o0u1r3zjljPMuueJr19w05L6HHnvquR+88Mpvlv2bGzE2AuQQFXkjJmKhLcgX8RAf+aNtSICESITESIJ2oz1IjhQoGIWgUKREKqRGYSgcaVAE0qJIpENRSI8MyIiikQnFoFhkRnEoHr1zJPqIKnLaNGp6YDJFRqrzgbHrcCu/eU+A9s0wYrBq47XsQyt69SFRxLCuK8ISoTs4pR3RDmijD2opHiid5pnmgkanEXJQ6Cl0J7oZTVS/VbeqcdXvqmeqm714tqpdFVD+rfxJXPVerpyijFeOzVvNm583DY5QtGKxEYVdIVQw5HvkH8t7ZM9l12VVMhtiSI9JN8qrQCqWPJCcksgkuYdB5AiyHa56KxEKvBNeCY+EZg3X+yBUBdl5s8T/iV+I54vrRf+JnoluiuwipZqexcHNW3l0x/l1MFpjamJ9WMJqmAxFId2P+V6v9TJ53+p8cqxSOf/1z6VlsS/+L4Hs2zlchhPKuDLqXDHbtivM3D3449Mm2WizZKaj3eiMGmutHtSd5a3Qa/WL82pcFahMxXmRIldkrSyWeZIjqb1XRJ3IFzzxKi/gmZFl0+yR4HYWwYKL6BQdomaqo52Mkz5PEkui8Bwew/HYWDwwbP9+Fm9PmcwvV99c5kiOi2PRmD1KBKyhZ2gdDINmCAkc7rt6ba+suL4F22a7wc7apbqllmznP2RrbZOfHI27mQ3L1Ghsbd1XOzm32j/o1dGqp2oNKZ+TdJRdZXO+nB/o50Q1+WYhhR8/M8BrmMqn/Im3dTUhb0zbCtz3q44hh5vC75V+nTDZp/rqOa6uvzNwgre0x9opPyq3CNjtoWLKDxq2wse1H9xbfeJ9GKzFXe4unsXevLJt2tq3/sz1TeumeKNmijZ1rivWmk1SxtiqdxXFkHtPLu8t071N3lT6/KJ6kbuQ0Fm0nnnDXE0TUYdnXTMLVeflnrqmaV4GL6D8OYkkVnu4u4pfmpUIJaREAHa9tSavhV5neBggKFyGoIpLMCyoFBp9F9mZDAK/PCdQ2GIdqupSo0Edwogw2BLBhZDpLkAfAKKBrObPUH+g9+nHVWVMtAwVL0ro7aeDWcB6/Xoj5vmBNj80348sSO4PgKJMP5hp77zGlNuhHGvkbcDg930gMAViihe+GNtRpjQyOu9N79hr/+XT0FmUjt5FGegcypSyPwrpTKRYEGk1mZyuNwGDBpSA93PgG5TyvhoCPxpLQ5lAy2NLFQxXUByAupXKUuFGmO2BoMrjQsGSp2cqM57MNxWqvkoaBB8fTkFwfgB0xw7oRJJ+DYgpJ8UAD8AibtsC+ITShUzMO9Glflxmepo0E6LQfxSQyHzCjfm+vDDTCSXCnk853gF8IsPuOfNK8Li8yR+QzdgWPro6lwPDAJGw/Gwgjksje8Odj8CmSyr95Z8Y2QZk7Rt4GX7W7ZI4yuyNQHoJx1R3g2lewpEh191t1bt95PW5nAv8vcOf3kGl6rdneroXpLA70zq8IFUrZyrbqnf46DMFOflklRIVbS8w6DncqXDnV/PnlELOz9iqF8Zx50f7Z6bnJ/meRhrBhLstNZz9rov7tnvaR0uGqCTzhPBeGalGRNat7rw6SJPN0zf56CjgkPnTCmUIUyz46wdWtw10mQeEWtmttM3pQ33cbibyocPXocAKTXanwpxQmDsEE68XApCRgidEwdaLI/FJWn7vdjcgcFgvl24QDDovNb9RyeLFtlUf4+M83cHyu4f35WhhVpxd6fg8x1wVPrlIaVDyF8z/u47sx09bBf6HQ7fLKbqAv+KWQ+YCdlqWvQ1KdsRHL51aVHxBH34EUBRra7IzZXfWnp8pl9isthqGfEjSZHMjKr+CKvA/Ara0tFLB6O4kT/O8Li4Wt7vYT5/DRIn85KejwShe4J+jfdlpfNpInuDv6XB2u8I18KBdWNVRONkLi2SZI3CrLEwNSlztoxda5WiFa+Bay/F0AE/kWG8OwNnCatucITkOk0WuqXgNHFTSIm89xXDbQRN2bqdY3Bq9DZmYGLS4T508nKBIkz5lJDXwCmRHsCq4QTl2zqMQrtTNKSYExchsyTapj4yjZ1ORWyq4QaGWOOTD6XUExgdxBRdsc3pKHIeTkVsruoEDJdZxYXLhRAKL7ExErjghehvYGBdo38cEzluCImb5tJFo4PykjF7hGWDeTtvJwt5z01pjAQ9kWmRQgq44empVbqzwDDBsIZcI1uQg1RDAKRBrmzPUxmG6yE0VnwHiSgDKkg3TRVyZxgW3fbaXLsqVIb0NrZiLuCjavzD8bAVtjY7jf40v9D1ri+HkoT8tGQVo7HkWnccVszu3bs4DgZyba1CC7XhuXC+ORDlTOv5lhZE3cqadZ+RRSgkP8+6RbxIus/JIbVC6jHnysKIii9Xmdfvj0mLdShZVgXPTeVQ2ccNt1Wd44vpVQGqVOKWxMzvzSuQsmXslEDtvq54dR9uJE8rjT+CxUUE+ykTbIFpw34m831oHObmvW29DNsYhr+YTazEQ8wIUPsYaL6SFnhM0auTah7na5jqyuA9yudJYzJllLtm9XLfasuA3kOZoT3K64tk2Nl15Ivu/0sWJoiTGebm7y86LkTYZnRp51ZHOffau9Qrf1a7Poa2KUT+VlsCdK/mWSQBAu7bz1YinG/TKzhmuu8x5qm6s0ONGVdo8A+fFlRSbGqvnScgtqbdhDCNwA/s2Qt8jKO4LPs1ssLSjSE6tSGJ3ljFEmk4Mt7YiCjNzxhZpevJIw7Cn7we3DkkrHafivlyY1SJOn6+PSNjSy9CyC4jgZgWh3O5MInIzFY5Lq4YUW8gqJU0nKG4icz59TBrOFBUbEadLPZZKs0klQd+zKSebFkY9ebKZEFv2dU2KTlCMFf4nrO1JoxvbJ2AbcNPhK8sYH+Opxz6TYhQeGmQfXm+DEtPDxy6jmKDoI73CkcuImez6COArqBEJrjTKGpWQwhN7snahl+NCl2mgKpehSUFR5XuFQyljspCsm/lZi2gRQlrOqfftYoOqIk3dFwmw2QJ9NwhwCG1IKUT1VsBFL2mLwNdMw09y3UcH+lDomGyB9lQ4wD8qszShIoQUhSzWCgkhScr1NnAxCN6xnwXvAtoz0VZl/cJMKF4QlN1TPmr+InDzUm8STOGhK2z9DoZMAejlfOtRO0CrnZzeGVhXl1CroD1waN0iRqVPK4OZj9VpwUj/sAU7CDf/sNrfCPLV+mTNvhfHNTnm+oAMz3rD08gEZwLWVArxzib6g3gHgmNZMf2W2FBvgxXzGyxJ+NxjA5FFe4X5mKMOFN3QQvFd1kmACSxvoJ+IwY4Xm5+g66/lOUvb6vmt1Pec9MTVZm7m6Z94yqMqaK3et74LoNVM5AGi7whtoPmW0+mbhMr15MvmG6iZFeaize50KDxhgy+Lqq+aUvOv5gdNZF+0VFGsfZBdFjy9DZ2YC8gEn9g6A5E8QtnUOtSpB6ECBFIhNuY1ojN8C2yEJXl0El9eb0Mq5gQSIzbwsW261iqtWCYj2bKnAgdmTAjXRlmmxAWBDLLDghOOw/Mmg6lZ4jEFRWP3CuMBxmTKjXJWIRgj2+HRX4KHrTXFhGWGrTMgZXXUW5/EWSBh+HwiNNrmd1QUTjh8g3kFepkzxfLB7OYesDuFV+TmVkmM1CRi8yO6p3Fa/Q/bazsVK103x+ZplhWwvsLLkn73g2JA05PPs7XFBN7uuwPwRb3jd+VA0RYxNYRy0QZ4RWgDB6fBsVf6Cg6YGdEBr9YMfseSDE2fmeEZrMoSrbf7egG+8AHTKsr1+Gt7pitVpahBRul2UlVRqgTBpjSiFbjZAmsyPT0TN1JPrsqfKYngAJkWzVM8wQxGsmK2Ag+KLzo7jbLflAXaYhUlW1oYynFy0SxBTohWywSifOSV6SAfy6nIhcKhO1NyouDMYBHz/FnHOQu/wsHrHcjszYtad1PJBjYoetIPljST8hn8C3MuZGDYBIFpRDIblFiwf1Os62UAR4qHzV2EdAxPA/0TzwQkheKhOXmGLsdJZP4PYrM1gQiJxlcmD7nDv8NvwHg0g/7ZY5oZ/IKny/GYImyCQO0bHxMExgKHPMZuUCLHk8fg2H+IxaXmRCbMZwg9ydk/FO8qdqYVFoGx5roFAz1SG3sa4q93btT9Z83yGUzFYdvM78EmgNqKNNMalGozPq4ZNzrZzQplqDlte5FcGIa59qRxoWaX9hPbnD47Ju0eIZG4K0bq+lNDTWsL5TSJwfhQOIyDSSUqC2l0f91q7iKubWJP8aSgP7UvqM6D11+2OgnUqfpIHprAINZVu8xPqDZzeAJ7VSuqYJT0F3U5wHlMobMwPA30N6iV1Bnw0JioKb0Nasz/oJPy1RGIHR+FmQBE5H5HBQJm0tjqPNTOQez3h/h/L7Uj4aEfoSyu7TcjaNs5PCFhr61jtPtfJMKBsSwmIeVBABjeX2En+OYHCConCdAuzyVb6fkr8BkOT8vOKKMh1ksbCQcLvMmSIPoe0uqIv/kePFcIvfNElfYGvFoH93Ge4Nn4S/5LITNNKWyTlf1FMVxjyf+iWG9sjNUwGCmNpkGJLfjoJviy7ghm4OXc7ME62SVWaQaPIexgdTMsmcEjEZnr7T4uwBc+wLL4eC5gqNBZUIRMC4xqFP+CdOBl5Gv51XL/zOyBpqoAW8fTfeFLeBuiMPdBl/nYVCuJdArlpJYwosgoG4gmJKjTlun0HXi+K+PMd6B2KaNoM/psT0t16Lqt7fVyLjVoBBtLhuhb8ABQhUUr1C+cvt6GKUw/KINP0KAB4EiQVSahHkUyI2VHo9YhyF/IPf+CCjmS11CQFoYnohSoD8wKUspEFC26K8yi3/l9RGGhe+8kmD6+BQhJX5peED0fA8RtS3YqFMFM/KAmTlofGzwcEhSVfHFwiHpAJ1DY7JBNXwl9sN4GC+YrFLF8MhgMxCIShY8dwp6KWXj8FTgow4OCcVPVe62awZegUahaL15LtitMlfV57tqYLwGbGXxHPi8RJEbT49NG5tMSXj1y6UJTY/38gMm1+WD6As0BlxeaL2Biyzw7oadutW4PUrJ7lae5xYl1AhGQHBuGxfA00G00DUm78VCnNNVynJ4xn0MPszWBqPtQIxnETGtU5L8XR8n8d3Tj0cVuP0JcfWqkFeBN80iIANJt2ZJm2UNONIxOrZtPoeY4e8RHghrn8AT21CNGZ22V6dArh4SqtpUYuoW6y1W05hZUplRC2u7fWzypiGX3Nt7+ZRViTVJ2U1mdic5vKo4Yja16HBOTNTdYltwNnnQOYchuA92Nl4rntk5zA6FNtoYGpVDjtJW2xZbXFf146YvifHEDcmyxactgeF5Lf8b9FQhquwVTk9yfV2+DANOEjSmB99hAXN1e4UBxxIOrC1nyK9DIJ0M8PRWJZ5BYB/j69fDUgPu5ae3QgwDUp78GBNxaa+qw2jk834oDwEZnbWcp1CkOcmXhY9qCnRGFmTEnUMKe00mrKDxUi/sy3Moxn2CFcoUtG86b0X4RYJ7A3t7FSDYtDX3593TsZEsWI5KyGt4v7FtAYVr0J5xe/VYYBjbhr79rA4e+znNVhoT2F1QcJlRCCnVtEYq10RQXe43WmNziEKKDD6TVtLJuIB0g7HEZB/aYqnBaj9hhlwWqlNOqctwybiqxDEi0PyYQl06vcMxyPMrkfhoMpyNqyiV3yaWPcWqwWFKyFKqQU9315CbzMSJ9uWgUFMOKV3hR8Fj49/kTrDYvOcj+iZFCtz1UhlMRLrSYUoQKDk+btZPPmgdd9sNnUAKJoLNzARXjMObmTFOMIJE5wZBUzMaO/2NI7umezpq7z4t0MlWj5F8VbnRjdcbBVq4ZAbbO8VJFyhoXe0ijK3IIqbchFnMFB62soY+dD2DtFV7FXnoZOaj9YEyFfncJ5eqZppUuF1uPGrZNBV2WraXehjzM5WJeX7U2qQTFec6cT6psYgsJNtSvt5g7ZZxrIyrAFprGUXuoUDaR3oZ+TAHmLBmdfKueA9CW7RrNT7H2Co92RoUK7PpY6MknxYrELGDj1mhRPtYmzEw7hncfbreK1+fJAL6I04wV3hsDymAa4cjImEsP7U7UTWsjuOFiqrDDE/oAa4Abus0HmNJlaHnztO34hZe/CNTpDb44FHy7FX568Sy/xW/z4BM34Jm1qDLs3ErvY1/g5krzPiq9zPkN+RgtqQq7cE2rJQW5s5COwEWTBTsV4SsAzg+p617FMWjKMDQoH9i8gi5hmXC5zVxC2SR5eoNSWe6j83idDzmrj4gHpcn2AXQRS4rrGeYiyuCyW43vr1stun62FGnuYqxtlZ7i3+we6GWgYh7VdUYxyvA00AXMs6nox0PZMo/obXBizqOo5qsjEIsCFGbGySdOhX3DkQpDPAjAe+naMoSxnbkpeuO2LAKIU7EI1AD/fcUCnD1GcYuc5Fw89ksvbC20WvehfDJGc0fH8GzcVROlxObNlIGpG3n5Yzapm+v+xTyv1oHlYcFQa4vpUKM+eDfyY+hgd8/814QX/aruPKCoaXFudGdGoshl45wUpWNio0ix2RydlXF9vQ2jmLMoNHxC67ct0ylQ+AKt/aVOWAkA5zdptS//Ncps2B+12ZcbNd5xkY+WmZFmPJ969XXG10DvyGhYb0MQJhV59TLjExTzAq9wRmUd2RefQaO+yHW2p1IKhknXLZsU5BLpptKOoBIh55+7Z6ac7mnXP1JETR5M9OXAgBCmbFecJeukPMckF6H3mhSqPAWnj+5inwx9RoVGIGSXnYQjoUT0ZOq48lCS9HPLcR2YRAS1xPl8K2kHNjpoe1xtnc7fKxwfsO6+RIeepuDJENqJZbTTiE6iNyNm8DENdEp6bfyuM7sOSlj2ivAxaDEn0dpSVBAU2zTfScRA1j2Xeer+Ty2rAFrZg6mQUic6ga4DKcv6IjohXa0c57PMCeyW9pOZSUKC4s7l03AyMjEUyQ0VSezqynp0wsmOKxHqfuvI7PiCLce5ufy4Stivq2s0rbRBGb6wLqh7/HuSUDAlKyEfTwO9hdicdiw8FCuxVI5r3Oa/0MywNYHYjKAwM6JsuvmPV6KRJYmJVigx7g59XTwAwH+qiOLB8V8H01+vrID91qYOoNUpi5QNmUVVuh0bIQof1ukUKu2odMmxPn9gmfiwAhqKRUPRCHaHwkRPatezo1QPxVxXcqTlxgoe1KXWKJlR8Z2WcqNKfYNcunozx2lo9PIjV1fSuP7iog58pzaB4BAcOoq2Dm2U2Hrnf7DCrT0PgGzGDcrAzNoMn+fSh6Mr4c8PQGmZuDvaU+o6/F1it5pmxhNWGzf6wwcAUFnF0mhEUWghWaw99Ibs5uU405ooVGFLC1ab38m8wiZklF4wnKtOo1NJweqglq1mSYddttPooPvrhw+BdY9w0Oq+6zs3qbp90fTmengdhMrh4wxL52Gw/sV388DKbLsa9umeyKI/VcZA4YDl0Rs1ThyUUjaiQFEkGidKnhWDDktTvRzHijmMYsHHYopALCbQ+MCQ/jR3mBnGPLxyCYqidyKfXHIpAg0LpJUkS6YIqVfLAUaLkQ4t6ylxHGoTgSL4QWQkCrU7gb9L4I9L2/2s8coly0d2b6OifsJrSq+hj5IGdQy83Ob99LrUEXJc7jSvw9P5hF5NILoVFJ4sCvQXuAn2JsMNMDwNdADVRHIdeChMqgdynKs1++HsbE1Ll4XCzJjnm2GjOYEeQtaw5JT20B9QGZyTGBUcj/MtWgvQauqCuiH2bCXWLYHDd5+kcrtlsF6LhpQoRx0Ko5xY9bxOZo+5zpS9DJSOsafXSPsZngYKRZmSUice2iulSY5Lq00I0ny2JhDTDBRmRvxhGgNXm5fUQdBhUxpqDwWjmHap2LyClMvhabPOUxh9+4fJKEvNCR4QdmgkHSxPA72MIj0ltXhILoVZb4Md8xKSTL46AjFJQGFmfMpZ04Z/WxmQBNkEaA/yBecXzB4kdPET75zgV8U/aZAGftb5nq22pxv7MbTDA65YM34lMxXec42qct8sRyqzKHiz9fZst9blWWZ34ZU7lqEbiv5Ai7b07wCt5i7C2lbSck3p5SS37IkXnOQfWjZcfrRq4WdQyGzhOq82YANJiqxOqzM1vShZUT251EgKl7XNU1uks5hdUFxzu/mI+CecvHRyNEhiZAFbLqK6RTslo8txajY7YcusWErIh3JhU0wydxNtSAofZ+o0yX7ZqOqJMqzcSkE7kOY5CcwOWNrrxUIsQMLizkIm0zNhQSexUPi0ymTC5aQRbUfK6syNSCCJezlObvMCNMPWBKJGUJh5DE1Pn7rY3N3G0Rr1wjM6eKGKrIK2FYktt5kAKJ1vPsKGhGI5PG2FHR2X7P75gCeRx+o73eCk1onIHwl2jvNU/0fHpwKC21vMvv701/VV96z1Eh++wllbzld1YtVtNRT7MHtO1nd1vfD/0GmgFCsL/UoJjVhqiAcvdNgND2q/SFZ38ypVfZH4P8ifadsZXX5Np54Jyd0HTI/BKK3nOkSHyXvXdw5iWOUSF87klGq4E2YGIjHqdcqfr1AHcS0a4sDmHQrDAYueXqCES/PjP7VuUf2U/TIdd7v6oQy6uY00MTRkBbytot7lq/PZtasvM8Ssq3kasW80DdaciSGfpcnePlbGx3ALmcZwxp8aonx/fer1C30iG5ELNpTCV3/eQJuhFiiaYRqI2UzVu5DCooY2LWX9luMkNQyIywYCUYAiasb3gxNMOzz9wKCPblBEh5iJbnmItstq3oNolqGCUrYmEMllEYir5X4CSeT/XxwtQ4nGdvGJapVD7d965A29+bVGVBA9imRQEI4/lCJMJ2uFXm5xSshj8+iNwtsbKGZCy3gB+O4Ph3pk8wWEXgRFYQAY8AYAAHKBRADJAOgAQOQWAPps/n8kumEkIP4zSADosz8MgB/F4wAIeIHyygBwN0A05cPEpAwEAIN82AL5AILbcidisQEofkgnaFmZLwBZArOKeO3B6zDFHHJYp14X6efOS/bJ4UFBL6M3cU8GMp6JQgSF8CZ2CLgCf0GgQCgQC14RKAUaQdsDwu0lD5Q9yBFuJf/3CGAzAnJKdcFNhi4gHEE/3lfAFwTcLYVg363PNIAjAMCDRgFA3v/p1VedSAYAyJ1rOQCA68JV53roes+lcZmevnya+bRt8sfJafQbCAA1gBhTAAB9DBBFYc8kuqcxV1r9n+2vlulQ6VkCMeBzn6h1jdsVjYpUcbgaAJIHyooChGGTzXxwJUiUhCgdCVkGiizZcuTi4BIRg8AkNqjW0Gi4URMplIaOgZVNvgLFSpUpV8HNL6BWnZCwZi1atZkC3HV9oU4Mi0r5zb8tW42LmCgNbYbznBLQJAtlIjZCkM9HpiMvtAk+1vwd5sj2FbtCl5WjwijovNB4Y/IVZ6JJ0iRLkSrWdgxUNCx0b+0ixMMngGALyiMjp6KgpKZlYWRiVsTOwUmvEs7DqwrmnZOa1GvQqF2NDpmqqy5swKdatLrlJgQNfAAAOgIAYgHgOUDgD5CcAK8lQFwBAFh7yfjElJeAOqyFiW7BlLkKvqUzufW9acuQAPIL0L4pM1a7S3mqp9rYgWyVldyGtGLG0shLJInnEiLYEh0UFzp62zLp4sq2bw54bBG2afMN4u4tW108/hg28mIp4UbynSVREBpLcDu+gn1PPRR6lhvcU8iSC0XYR8cZeAH0kAparU8RW46bF1shKQSBaNSSidv9A6GH/84P/5vZKkUq7SFpvZpW0QAaNJuIkcQSI0PkVSbNemCnD1SkrcGZxV6h7rmm2vM6TSavcG+Y3G7XmEdN2buXgMdVfnd0lCKtGLqJJDF6oZ1XcaNDPZfOtmOBJaWAEbAAYC2zlsULtjo+MhjPntLurlJwiGDAyynn0Fq1ugth8iCVNUmcSQYazEXCqT+SLaVG3nNixIsumNZeAx9m0sfuic9hMdtX4SxRwhGo7eqG31TqdAcPTxvG9wORr4ImYMPYdWe8ay08+RhLhGi1WkPsTqDGpj1hPVImUIk+Qn5K4+8AWftEqVxOzhHrkhL8LuVZR88bbmJNvhYsnCNN+uTxIz0QVTK8OcKXDSdK3SM27AJIWOFkkxoO9gjhu+lv18xSX6jq6gf717YbB6AiOZFxmBKVY9s2BD+F+t//+bq6E+5gS2ghLfQdJLRBOXZ8EoST4XGp7orYfaEFIQefmH+Dn5K2OjFqIIwBjGAojproG7kN/NNyYVkM45odOHlfJyM+YGXgF9+wwUuT6zkgPsuJeJxYJZzRFDd+xpZ9CqABFE2PTmJSs0PUKAsGYfFy4KIgXOGAjUmCfRIFUBmGVA6Rc7ZZyFvlWQQboqa4h1IYxxvqusr39DKDgmCJQS8LfPp1OCvwbGwNR+f65PYASmkRyLdoa9QiTc9KS4a6qa+w1j1tGJfB8rL6wVEirEEFC63kIdn3C8eVGufQ6A5LSDEZPl29aCcw7l6jqnEYdxAk4HDUyAThKGiAyK21japXGwICzcr0dXnZo+iIc5gcMkUUhMF/Yqy7jY3rUB7hMovNxzJbA9EOI9mp7hx88mu9KbaHkkNoCzZpE7YGNZjyvblq5GLp4Yy1A0nCla0bAxHYpR3wCY99OvRJNYnqIeD7zEMS9NUHR7B4Nge0hRFzFJisoUZg1pGAaIy/xmWM5q+tbRKUp4cS6yrGJW4JRfSDJ9rK++oBqGTIipiMTFF/WuDEIkjiqQauFOUy9TEgZl7kFrpBiStXoAzzZ/aNCT6Vx5nwDDSjcG5OkbC/8esxj+5qVEs2Gu8ZklKiVJDKh9ixLCEv9wXkYQq2qjnJqjGRDFzBYJlEOu0AbYpDeDZHbEZ3Y5qw5Cx37cVFONTtCKUn8xK6eFcI0arRHCmOBaGnBfm/XQyaTQlomCxWGuOevvIZGw7MKgNA2jhgKzlTXlYzxc98wwkcmnpBf2pxdeauqLilupoy4OTpsVJRxc9gXov2oshieNIZZPTLif+AZ7on+PxyvmBOdJZi8CRSa2vZ3EbEGkZYgcQfAhxjB9kn9IvG7oJjAWmg4FOkMBSKYuYTt2u6sNLkU3AJgcGyZa1yD6BCXYyW2RS1oab0FSlwBoEOeygvBrrcUzOcVKaPdNgyB2A3dMBiRQ83HU7cbEnrCSSbL0tr1dfIXc3l7kX9y+oj5oLAFJMRNuZK3XqpzcxjzQw1ck82hTxZYtZKNpA5sPnddXIJa8TfHFtvkT5ZU54BGOGgGGq7JSvCUkXs8QF2CQzR5CiuP5vFXJpkweWpQWymT+iyCBZv4RBnt4r2WXJCkFXWNptdxsxPNXLbvgGhrTbo2EVK6fd903ap5R+rtHxxe2CRZycZ7qSBA6x5NGcdAcIaI9svQQxWYBxyHiATDgsGf7TJCRz6lvwwC0Tg4LsLinzq7QnofDXKbYf7HL0cxLptIb3B4lAkvwzyBpqepfujghDEFxTBMSWSHqhhOWK1CA40RJBmYiwR4OqOpIVYwkW6hxTwdRfU7o4mE0me92KNQYE8Pm/FFhu0XXQZD0yQ4gJa6hK37OsNDCXbakCgJpdB/uw+7kybUX4pLk1PD7XaqEl4zC8PNQ9iUK64pMVefFpnlBw3d9ULnfRcVlIPVxlF9BcpCUbwqQWyhURAGNmyD6ky1KMUVyNHOcToZ/Cp8uCXTvFvJjdhp67np6ikuSpzMzuv0bxU38ELyZJJiboNMLdgubxm21epqkWEmo1VCESAlanK3pyqPDu9ZImhIZerpPahyCLwoNoBmJhoA6m8w+kTo6GkJ8CoSewDzSDgd8gSpNoMcjkliDd1BxuBMD1aTDnrUoJyK1x1USoLz/Csor9b53iec24H89AXu7PGJJno5EkG8nOlPtOJwncGNfthmyZq9ULCJcW4vFxgBLsNsmfH4ezsycLM5VBGKSz75BX8JM4sLWWe7NvkpMAF8WAWotYu9vk+H+HkyBa7u9qYI6prXZWampapyX01rnYX9pUTiWx1ax49sEqsHrayFXnScAyTOWteSBFjeEbO2pqPfBWfxZh9qmN+eMUz47KIk6M9B9wVIxHI5EiM5rhqHA7NhTMTwSwlu8X1xVs3/RKXh1e7JOLKA7ZWjiU7s2PgSWOZcYFsztQR00JTqb8zp9tXrdRVfuo1mFoK7mJ+pdvr5T4nnGoeCgdcwk50RhzBqOocP8QPx74JD4gowr7xRFBjiqp8lM6onXbEscCwLHmkQps416erlOqLWr+c+W5V5DsMxzxLp42xMEM95YyIT6QQNspzFGq7stmoLeVZuYL161wto1SlkzxP0Vm73sB8nBf1uMHNU6380gxXqLFWtVFHZ9J6N1/IgQq5Iqm41WZRY/WBm48ryMv3ef4LUeR9Dz/hv2QZ9Of2M1f10uvPWQvxdyvPIf26gb9ON6HOy88IximmfOkKcQcByIBExAe1HlW4BT4JH7W3zcZVJpFpGaNbz6czGWHsrdqn/QVACU8zBKJrDK9202T0CyggFd20Vmkl40O5jDvRz8TG10zheMN1tjURGGhzIMNbj57zeHjzyHH8RtW4SPi6w0AJewQaFiEzkICwmyquuvmGUxTRYu2ygv9T4v0maUtiyck5/2CGAyvnt7XYkEXR/pKcRKQfeILoiFCIYlb3XR5dKeR//gQOvV9D/vM24lHxbN4FKnYPa9CQQFch9gTZ9XcsWLcMC06cdsVHmXmJ42KQLxvUkr2M0H/oVtumx0FzzUVsoLTYzSLAeSoDT283gQ68gYc/HdbS5HnN0pydxNmbHq/Q9JCCvKxJNoYxPwcPsblUwXhmioY8aC4lCdqpL1lvzNzfpK731osF3SCQvDNl3Zsr5KZW46oj8j1ZNHAEN2Sn2Fc4KXRXU1yPbQc6WP+R60bCHsvKyVXQZFVGybpwNmmnQ/E0Vff8WTrvO112c3kv9qInzsgv7bR84JsTlmOSk4n7lWWr5AV//MH2+yvGyJcqw6lSxUmLIJ8xodeQVwVJv7fYK6Mk2S96lCxV7vhwBIA6XwTVuufoLCdHsdiNavf9kPhTvEmNfkQIU+fv8+eAs8c+y/HpZa2Pp2FzJ5e8xwQOXCj29uOt1j439WqxRdN8q4aNAY/SYimMPwlthZ0rsZS8D8kRPF3jni9Z2kY+hXOlmzL7PM9THYSFL7YALjYmZYDBGVcU43vGi9xFwEnazKF5Dmb09g2jS0iDGfx8WvFnp/mycDZxuo+i8hVp2jWvMZk5GXPB4GY8/hSd5TOU3iaJi26e0VBDFZQglr0D+/g0mNeVtP1zSkxPuk1wCWMdklfprjWjlB5ccexJlYh4uJrhUNNW6vyVGXUus+Q9h+tMG1TMVfJZ6sTqMoPTi/bqCpdHKS58ZB+OTSgugVPXKaXyUuf5Akq6uDs+eIywxl3OVck7lPVJPjCPtXyO6m6N7pW9xs9V8a9o8PSIe34DdeuaC4Om3p0Iu7q/Mb47c3p62LLmJfSi88lTGc+vOUt8G3fMdodSJz7mktN85ilJLSU5hnpKW3htwu16nXEKzkSpVBmJuoW93UbHcb0WiyVap2jj6jFyvC6hYZgKrCnh2OA6Zs3pVhJEyN6BY+PpeVIVlfht2yW/yT56+upfPVLJy1dfqz929pRsbYRCR9UqhvKB+i7A/Ws80j81baELRneIpDQpn0JnUGkx0sXKnCfh8Z1A/WSudBNQeKibt4uLk/9+wjT5OHB+bORo4/4I74FFD4/8JERJH0UlDFLeH43252eJB+KmXsYLysw0ikQCk6HobJ3ZMT48Dh/XLS44tl2tBfPMxZ6YfYJ9s6ciIjmrRKnTZH3fLsM+eXp4TbtXkpH3Pj84sXhVapKIzUINtWMgaZMSWp5Y+Qk3soU9lti1JoqcNRiTYVhSns6ibpZ92vlqJHgVk57W4rd3I+ROf6SqJSPK3tdQWYwpM0IwiLd8JRTMiqyLug/377LsgwYm/hv/T78c9MY7/xt8jp794f/g3b79bFf7P0t+Z6f9SMb79mycPTd3gn0UJPTc6fXs+HY1tvrHHZ5Jx+ZTjvIIU2vEwDV0K9DmK+FnGcxMQbT3zSyOQ6IQV1TxtO9VtEhQOQSjqKSlLCy+w+PdFtUDTpQmgS/2qjRqsaeKr9H4BGK3OoQchKCLsBa+BEGH4JBK7PEJwJVvZMakPeMJhQJKuVyycVMrkarhI6PP9m3IMXTJUCuW+DRpqKS6VmzwYF6ZsKRpkuVbXOYFUSdHkwuvmOt/3biHtnrRqxmejBeoF5Tc3V9VMCSuEiL0g8ubH4bt8z1/7qAh3zUUyr2ZG1qXM9w0ANy7InWFd+WbNxifDF3oqAnKVWqplL6KZJsGfElja6ztwDkU4mIrOe1bKgffm7rW4DGC8FCoI88H1ENzDD/2v81VvFiq/XHOkP81Z3Szd6t33d4gHgjjuig/rcWr9ZXXoHBo/nU3cUw+du2YWjU0/5o7ZbQVO0TTATtKE88XUh0WenAMeLdUWpWFu4NDPdBiWIMsgsRrEQ38MThLHJVoFle4Pb05HABb4MEVDoFDERxNDrVIGpRTXfj7h0N9MZ86poDtGbi2wrPipwFPnH0MpfDFiArxytwgZyWDvpkTzPkEOId+0QdEMI6qEV+NSD+LMmsWrFbDiFoFzwLOodDyJRqcJypXuDvC1Uu2j58P3xUIf4Lmg/WDwZ1/jU5FaE6JIK9KoYY81SKNtkoEedQKNewztJ/4KRJSqyAFrFBC4jwlrDC+MoFz6DtttRD2qIymuuGVyHuz2TXZi6aK85Ri+P99F+RGmU5zkbK8IF8LKyQqiJd5cU15an5iUb1VJir18TRVU4KgLMQ9A4l25mZeXFuRlp/garDJkYoaPnjdcbLq96qTHYAdVXu22RcbYkHvwNB0CCTf8JUOnu2709D63ZdxTgiKdd5qeRbafwdU2e5g3BjCSzkT4+T5VEVMlTKG8EYlAHvyCLwY99E7XZJJ8QoZKVampikmAcrlluPV06rPzEwwIgkza860Hccud0xrvLU80SRJmNl8G7we/3upsZtw4b9sYuyBLkLj7UvjgaFWPJ53cvP6h1t1EvwZReNLrLZASUWvIKdJkLMnvy7SmFlcjjfhrim11ZMIsnId2y4xSXINH2WNZ0mXgi+jFIetKkThNBqUFuZJcuqIdLPanC9nsjZnjMmwJdNRq9Owaig4OTktnUx0K/NtKnry7IwxGSMlBDuRNTmYl/4bCSFO2P2200qJIAVEUMAepXnDpAok1QaHQutGTn8uoCowoQ5fg3etx9fQUSk6JFkqOSQSbIOXwtsAJ0pjMTO4FPgb9HXUjCxNyR0UQG/hZfA7SDCYGxpZyuwOLjqK0M4Vs9u1fHhs+T2LRicdJxs8a70LddB1zpSR0z8JDQVrk/DTJFXSoQqo+gMOssbqz8ASvwYV4G6xgjQqxzqOuRw98maftqSeq/O8N3+1qiSQrfNxNcLFKoO0rk5iqJDpjfLMmA0sid4kk+uNgB2FJghFHuVSlchdJUQ1PqHIrcKdufKrEs7ShmCM9j17OkqRSVUSRKaSp/wBwI8LP8Y/LtUW51s2ePuIP6eWDOFDC8HawcovsuYxoRHVfo48mx51YQ2eRg/W4EJthjxnIggEufm+stI0vmAbXE3+8GJJNfKBSR3ELhBIXa22GrV2LFBaH8LFa8Of+ZJyUIgfxz/HJ57agQPHYNVC6C7U/9hnHe17r9kPiodCy7Bl96Zti9iR3rn8Z+wFeE9gZmWZ+d/swjMEGULylziQMsp08c9yE7NyuFp5M+PPXAZbgFiUm7z95A0pKUt+YX/G9tSU7uPpACcjWIsf9MIBT3ak5qRA5FH1qEVuINYViPQelYXx9Ubd0CGkR3IQEl+U9CCXwLvdQXxP8EuChYpY6ls2yQ2/gpbCL+F3w0uhV2AwSh3l0gODzalmslaCsdLGYooVnYbeoRpKBPG5WJa53mKW8nVnx40F5axUOzGCAjq5LWmzk/a+6bRJJb1oOAZ1g+htu8aB1z+EMruigA+jhZpTrz5C1CZZKhkQCY7o5Y6Agi+e1D1Z2acp0HpUB/gRhUjoF5ofDc6MrnyTxoFt9GL1jlmz+k6EPsLFv58XAz8jUJuaoSy1lllL/CEPvYEo3SYSfSUpB8mRUhOdr5aHJHGZbF7S5IxTu3XRxZvtWoMFt2OMIr9trCoFusxkcDZSSJVthpgKZpHOmO8v9gP7xDyxBxOo0apsyCHjsy0FWd0T+otzuE6pHKqsEmoUHjGsVIrFSjmcU8wWfMUTXxKK7osngoDZUWjMXI2vXhtaewu/lYlAH+IgK8p3rtlXFipD1guE25CjEV97M/huN72+0bMtlncgtqfeEzb+JIMmJ72cXweHCIRFCFxXDtUhiwnxi2FBXUkxvVnkl66fROmRQn7APpa2K6oz7qPgEMwaCno/6twVfTS1s25z8D4Mv3wvuBlsGbRduzSmI13ku6Xi3fIFRS0xd4DTz/JkeD/2Z3tgL6g/A41aHP9XWvIfuVLXTzzx//r2o9E5ZhZzHd/D9iStio//PoU2gxiTs2ktGbAPQyo5V89TSSFIJeXpuSq5lzgxTZ82kfg8CthR2oSFCIoDWh0UWyrIK2xNBaxGWwlaNDjCUHiXSE0nUoj6j3o6FRR7TxBPLG37dOr8aeu8wBV8/IOIW8SGr4okarUkNALdh9eIdKhPIKpUqtTvmc2bP83DASVKe0ogdueFoJcw8lAkhu8hNv8XGzI8Pf5zh1IDU5u8UB7k9gvA0tX6jWl9U9j7mQ+3BDeDzCjPOe/YwjP6tQJkANLDHyM07qHg6OU9OHPEE+J5jlGkKMVDPj3W1gSyowxnpNKQXpwReryDNOVavlqmJmVKiyFOlVYnra11bJZVqSRN9nFrD74c0+7xg1duBN42AXaU7hQHKpGq9ZUmSoDbfISRs4LP35xDP1IY4NhoOreqbFptoBJWSbhMthoP8o0UfWkeJHR4ctVqT67AASl1xSZaiF+YpWLwVFKwA/t21Rq9NFAn0VPXFTSIMsILjqwj5U/LRyt1s0nTil2Y3u+r0YENK8s+6bBNS6TNmzy5g2YboTZY1bp8q4qWZSidVnRTB9IWah0WpXXyXCrFT6EUUUhoiWOv7m97S4iksurlKrsFOIN3NME7QKLvMjy6Fp8am/r8hFTNSJ0aRrRS3uTzewtzoje0EuqQ9JVI2wMd4/NrNr3EPc6/7+eVnRQy7Dg9/Ytr+a+HZ1//SnSgqGuLbe7+uBqX9uuLLdxDL++X2UukeoSjTUwlEmMS/WLSAmVmyRrxfSRQSBCrYQ5HJ+le0iefHcUiWZm/vt/qR5msV2BdX7546QwxYC9lxtBE0UzJvzTaG+YaZgx1Z2qUTn0DNlZPzuBSD1EplyjxxJ11wY9RyU9T0dSHySlX692vrspEflIERn8lTJkxbUY/JHpG5BP1R59EmpRGFBDBq8F5CS22hJZ5eoysTieqyIlkZXq6mgzOfwsOKyVquVCIyiXzq+cYA0LEo5Zyy4uEG3DlrXQEvvSvqHRQ8IWhVoBUKiXc0mL+MrxqxGEVokYEAjUiWVA9p4iMEtMLSEmkgnSigwTYv4q1WjGk1YghjQYSa7Rgf2khkote65j5hs7VlBZb0ia7LWk1b668QNFnq1McVY6U1dd96Nsjb2qsPKb3oL5Uw2W8mdl+koMWIlzNiRaKPUKtaPkW5FOOOMxeymnc3Dj5SCHlyIeVQ97iRK0yJ60CaDhx1ECjMMDGL6ap4Wcdy2kbLq3chZnWLax3JwUelNq4baZdhi6/1PIANHeEPoAlbNhlyrc9CHiSFtQnWdiulekfKXApjDhZ2RZh1Pr0CrgZb4bLSVF9NLbFwZQgODfzRlJUn9xoRMeoI03yqL4xZzO5OCgMO4O3EjBjqcegPg5DSaezdESSQ9B09JGC0CmhUHrUemG2F0sCToQHxuJ/+mFtIeghHx5jB8CiZFyJA5sGB6wUvERej7Td/cgNoL588bIZYhuwQM7XIHku2h1hd8TXg6eZh395bTPl+Mvjv/m/tgMR3bu/Hn01JZfwAxsUMI//IqS2IDilL2duPad/m5IrArVbYw41NDb0Bnvcx8FEHwJvt45b3tvYG70cZCfjffhq0kHsMHwY9wBw/NDg+3CwpXH6E8ZTxvs7v6P2Tq7YDvCKfiDoFYI/nfW9eG9LEK0Fg8sVUxvxBmpACOZQMuEP8VXW9qfTR+sZY1eVV3EERY93mXzjOqCDcmT4MH746HCelSdGOR08+Wi7h98LckTKgT5izVtWep2jo3BP4uNjJr+SnhaWHhrI5upoTHW20iMjWdffZR4YANqwxMliW2hR63NCYkkFc0UMnMe9j7dlnYYmhL5WCWez2vAvBoIDoDA8sBAn/0DGv8qoLrFNjBho7wcDEc9DRQOhgdtEFDjUap5xj20271x9UC5+j3I/u8fwZsfxtJTdI7DnepNjRxr1EuVtUeMpCkOWQlhD3ZF0gEI1ug6bJ5nbmDjsm2uojbYoFi7DVbcshEoGB8pfjjEwgUrAfMn8dXpGJvMFk/kq/eL5j6GVQOzbdQzbULHsP0xetzkEVg326cMahb3OeQON0DW/KX+jse2FjbRYgfzep1TZhJrzNzW9fANA+NuswH1lHH70d/wYLgR/AOpaUTkSDgglbbzyohLrYxPBamlh3DrsWs1y5xEI0jGJoLWpqimofiOUY2hFucwAirVo8BuyC5uvDeJ+dg9LumyZJZmF3SDqebHP3CSJULt51l351LzrkRVuNDzOZpjQJfOduzLC7LNOQFEgOjZ+U3oFbMfttiSwRtjkXHYNbV9T05gdSrM4avOPHUfnaqbchsxnfybG+YxMAT/aRMfet6b5lx7ypyR3T3v/JuWegj8jnjCbd6aRyBtN5ZuID0ajmM0UblGOxqFyrFFotTSKZDiq4LqLxBvdVSMOwHmaPAliUqo1JgUki6B812DuGuzBm6+TCtLT7aSkxe3ywc+EVD5PnKtK0Q2eOP0d5W1OOr2IOLeee3RSfrPSUcCowCjuTNETBrUFAA07du4Y4NzlosRUjSUFjD9svARELxwNRYMgfx/+Su79p3m0qeKOSj0Lt8Oiytm3n8i49dotaZpx/6gjcR3xduVTJU5yWH50Vh4Vdifv56ie01Jiu+Ip34HogH0YDbv2O3YdU4wcsTKohzzqx0q6Aebo/oOyAKvaWM400V98hjdLuRUZ33T7eiDrA7hu2YY61tW77z4D/X1YB8ZvjN/AxNSUgyb8+M0ByB91uDsjQrROM0hrd8NukLBIIVdQZtwKeU+8bCgqqqwkkcJhp/P/b8fzSPILEX+5XEplcXHYSlK8czheOTq/J5H+fu49UrfD+xeN9peXSm2MwNchohEmfMzyRISTQVGQrXv+ovrW2evkqK4tjpgtn1UcUZMEHKHMXXMfS+49XaFwReSsp2cS2Nlhb0OX/6/6mVyFchXIi9JZRDCmJpvmgNu0IhmFvTUirdrHQ8psIf7f7kkqJULuN/W76TOIjCiViFAJ80M2SRnOA+b26WRaSlb5r+8eGLDY5cvVoniuuJjYMO6WQLQ7l2S6/TBexWUzNNO/bMavZFUEK4A02ulyPlytLo/edAttykrlwf34/oN1b42AjZ0q9Zy5c+apVPPmzl+gVi9YUOmo2rwu4CO6l7q/vUJWphNRcuKadJ2SnNDl7WqJjqHQsRzbjn31++IJCqT+rB5YOmOZJXkvDOy+3gTGksa1XM0BGTDXXQK09sGL+7B9h4KH8B25uN0OkP9McpNewTTqz/4Un1CarPeYZEZDXvbDX5KiB1+cnF2FXfoOGB1fzfFvneOr/qN1V2bmqdk1fwD74FDQDZthpBx2B914qAHj/KNTjh3xcXvcuE/BmP87DlHkG62MMihUispU5n1i0A2yfTBPJs976E/MjKRHcm/k5T9hSCv0cvH+kae/ylBlvAL/0yfVuOj1Z/atq6W8zhiu3b/OvkUbTQxKjATSqGznQVH0OJlUlnRoEPE/VaAZLO7WaWeWOMvUM6Zpi2yNUmnY9JWDkT6WWcdVagqsbVZNgZLbz7qeNk5DE4gMWqaw2Buucnr9wXJd0WiuWMZvyDbR6ebstlwjeB5VdLzSEZbJbJ2rf0y3MHg5RgcLlhaxOVYokFbUQkzB+SnJtdI1txQtofC5pvWNYrPeVV5OnsP74NSquaQw6xL4d/AnV6DSUmANVLhKelw9JT2A2CutoCOa6Y1dK1gk0SLa5B9/rJhkiC0+JkUM1s0RO44s4VtCJT6SqzE/Sp1Wkk8n8SAK6fwXlQTzBFe0XGKwPIr45rejAltzeU1U6Y97Z1EoyxM143fvxSbTW54DdtjSLM0LGj405AWbpRZr0wtoWoknK83luZAPEZ6zlCOTEd5JJLkckvKwdUpRp2ixEEQLg/rUVyl9MrWTpBTQ9aLPWaN85cUtUvSiqt4ZpUN/JgpL3W2QEuHylBAkWHRckHIwOflgigA0NfF94jHiBP7sgD2j2rowPX2anFxdEJCcJ+TaJqAz8tRKcbrbet3BkeYSLgL2cdSer1LZ81FN4Y7pBjVi5m+szN+YjMeZrMdg3dch6gwhgzEc9lYLh493hjqDnOUAYFJ7cbdJO7c0VkXuLqa0dIKWKtBoCftgLHZfOO6naZf8uYimK0Uu795sV6eMF/tF7L/qwZe4H0NGZUXsP7rjo1LCAQLj6hgqXIVp1lhWFZN5f2VOXi3aZ5+EPVwaS9OEDBujcup/JFkZvFyjgwXJiti5VqgmrWgWSjj1dSf0YXcxgDnRUMsafE09QOOottBrBwAh1/RN2SvmiAOvARLG20PZu68dn66sUJ4UFN4W9Swc2Hyn7MFkH8YP16fuQyhAMlySvHoNo0FLXbOletrn/xVNWLHCYf58VLuhfw9jh5cTHW7bLOACrRAd/dl/FcyJtWuwNctRHT6LdV3fejsngPdfqm+7HjgywEcnk1AUuXnAEQeA1omtNtGl851RzH5qSuKXcJu2XA9kfIDEzFiWkvLrOwWaHmcto7Cc2XOG13Pu/3/YvirzwiV1k/i1EQi3ux+EqCQzFcizX/yA//Ci7rggL3bLMom8HGNh/u4/IMn8XY6L4e96yWCt6BdgMTZu4BlgzdhWSdo9MqLtymtGUkRsexymAni1gW7E/fwiCVBgxoJgNwictl0zsIEtFG9n0VKAVSzlqF7R/QRFMYbztf0TsabH/kZsIhTOORrCPgp/iEHOAb7sSLLzsdGQ9mWNxvR3PKyP/GQFq79vJXa9chkfa6rdHHpfz0fYrYplQqzV3wdGNTqHg994dh8evoBfODIMNL9S87QQRJr+sZdOQYmuN951dBhwVwVu9ia4lkZGu7be/NiP3WnGDlavSnXPl/Kc/pw53dvZqVtn6fJ2DtxfttlSyAD43CZTjgz/iP94dPjLFCFZhOL4Hj32dlqht5hheuW8LAoZHl7cIwjQtj8FcME0SJ2KbuCu6AfCaVrnutC01yGTNXuH782jw035b9P+K0w8llRIXU32/Sf0JyTKnezqyu0j/Eop76MKlnVtfzpqGJ+If4gfxst+RXRlV6wKzZtjiu9XHb24RPP48acw7nvRHcM+OlL/OR3049YZVM8CC96t8fyu677TUt1sqQuidVMtn48yO4NXyALqnWgIJZUy1FpSK1aY53r/MyDFN23ysT8fM0UVNCOFNRZ/DOZCY9gn3xR71ucjw45poWng3aJZG+qSnrJ+puxnsFzKPHkg3xXHe1VtSywJ2xz+lbvklK2D7Y+k+iANu5qWM2OaLlMtMvgH2NPF7mHJlvlPdeQnFNeHAsWRhXMIliQ1xomJ2ZaX25wC/h+czXyMeovQX4tl+a83BqJ6/EQ7OmzDrUeG+cde40LcX5iyDXRdc20Lr4sVuauyDn5SluAM7irTVO4Ya6emPyJGa68zYkM+S1DzmP1XQ8vBNW25X/g1WF74CIj1VYIle8jyAiDSi43lSismThSLVKjfqokpMkRhexxA9BLj5hK9VjQ3UpoPLQVLOVE6mtSF699/Sn9qRTAonXZA7vLnUS6+arr4y+t1bjo/U7ZRcqGw8HyK6jN4c/JPhQUvkkEBxe1NOTr8oXv18X92DLThGf0ZsxR3HmlYDaxHjH4s7RbqyBhxh/LhecnNa/2Ec2TCWPpOVsLu/ZPi939CT6bTkses2k9IqEtmethSk0FOj0z4834C4fzuhGQGLZku9hsf1+fvTWjb+hAseNSQmXoumVEnY7Doq3JfrBoTOYh+Pt7Ng06jXsZk0fPgUfxbtFmIK/K2f0ePJDSejac4KPS/4gcPj/i9m+KTaPQI2rf3tRNuDcYzaTSm5uT3k+JvnRQyXdc+esVeQmJtMr0iU2LQyWiRozI5d5GAxaCxBCdvpVtnB6nDED2ZOnj2fnqbCJGLj9u31xWQwuwWWnTTnesB9gfJMTO6Y5K/vEl4tJG3CeGsFjoPbjNZHTOik78aapRthhIZkfJb9MuPRmwDpdfZA1ssXWnpApLMo8xmqvU0TvbAQVk4jcQgxUyMP5+npYJ68SpZCKXyefpssT636PVbCxmMbAH9NnpqdULi2mSlB5VbDHmM2+j11fHUNLae7RI4NQZ3ljJAWyBWu7JeYgtl68O2hF5/X5xsaaScQ+cJBCnh9lCZ9VK2h5k8Nd4cWTUmWUTf6ZP2i32y6IzXE84zNlfF/sK9+Nolj+mRYwJTCPELkxmeLJkwPRJX7YsnfD5nbCS9x7dyjvNE0J0GvZwBB/fHrzAcCbcoP9BzCGeWTUyktalRmwSXIAgB60q+IJlBgwXXZn782U2jImkqLElmxcFragJh74o/k2iMJCES4ca6JmROPYImTumTtAi1jN60jv95/9fyGryw/EKVe8Wordh3LXdmbE1MPLys407K7y2BfUwzbt1ssoaccSdlfPyjCWzAnk1duegrqS+m0ZWAPLtl0ZTgInBhdu2i1sZFoGH2gkVVYdXbzKUIsCsQjVIkejRE2wvSQBoxQmmAeP3g7Byyo7c1bvyIic/ryRwd2+iI/TUu/c0Vgzm9LosLvJs9/vF4wgsF+trMFFoGswCwh6grMsj/TNLf+Apw7huZMXHPeMJ5IaVcYdr5LXdbgZSnOWRUOEAPeX0UBZNGZT2zveM+s6ZShE1frzjpJM1cnq920i7SmRdpTvV8RID9TwaBtBHBEWmPtB+VPe2JfA6f/uAm/JHvXYuJD7Tqijm9NFJyBlsw/Vrwo4AAoCo7sI6yAvsCOyvq/FTURUA5yCcqWxF1gcvOaj6/ovmlj0FMyfZj+1UK0lQKw9hCtpAtZAvZcracLWfLK0OBXpuXtKOOOu3FPhWV+EtlMkfPAGmjkgKjTgP7FE1Mj47Os7ARlSRTTyuBamD7NicuqSZiTJWxUthmtplt9punAZ2pfDuM/Tb7bfbbled8E+fcoQyKLFTDOP7j4SAAaM7hFBpn4EoAfOy8hRP7GqAtM76xs7BLff9NeCdU7mGX0f9uHEvRk0D7jGd8N+HDaOAJx9F1LQCa9kcP1BIsu9VVRMj9NJMyjn6VTzme0N0WGdgCaL2jl3lbCuwNvwR7w+TIoeJoMk103DjUU6O1+DEtOYEnI1y7mgRdzZT006q55KOtbGDfUdFji+PT7P8unPnOXWtZoE/Rt1QHVf2l9nHtoVXkq8KbU4xXyEMM3iFN/c0xvz3w4O6Vmw5YVdAZ+Dac773byHfj2T48ZAAfqDR8GcYZQI+DvdkyI12eje95+jzrS0Frt+IxNgbkmjjMje8ONf4KgbU7nvG9KN1V8ylAiSgJnUbJ6AxKQe+gLHQeZaML6CLKObFc+uv9l/8smnOz3uibctdrtr4FgLLQi4C7/2IYloAeAAVg3jsB5SPAc/tPANgN8DPEneK822ZjhsNMFdNpSPz96F80bkOONnG2pvVjxegxFSgmjkKL6TSltwF8GdVDVGILzmPBHZ5kQxSMPmiwkJNYeXotqDJiLnZtGofOH8BYiJ36d6zPY9E6GwzS+lGDRVuyYYkUGXaPhJHNjjEF73koUxWkyxRpf/vEC1A7es2BazxtyLtFgyp/8DxBJy8sd73U5GUrCoYb3QcgJjl9GB8jO58uzvhQAnWhoOXhic8Ulq+fajLNUSXsKS+J5DaEzpXGHHFhYy2vr2oHedya9p9qS0MLCkOo3Mn9b7TeYiYfAm80T2m4hHrjBeKlJKQe+vVxUpNvw4q/LeW0SA6hxEpi3pmvzWlPtiSSDHitn3JsvRZUE210yVlcBV218ebab5JvHoFz04f+XCxoG+ni2gKPuUkas5858xZqrcOQn3yHiz2k+kf5lYdDZiN+zs32oJ/rNm0lRcV1h8eDm6Qxu90Zt601843W7sxNVoT/7hoIAHyO8m1Kz8d9VM8iCWIWAPjptbla7z0NLf3zmoce03cvA1DBAAAg4BcjZ3aZg5LJCii6aSIkvnsoi6uwSxJwuQIcRM/lthI3rotwwMBJGLUrnKvA0hV0c8JMGhWCCwpRlgvF0oF9vjKoOKfbanI1ACBW4HvZQjinFadPSO3BMWsZKMsot4n5Oew1nh5QwoEIe3ouTgYYxESRUyWNOaIzQ81qVtqsUMtQJHHd1ms2Adt90G3VPNuZDBnNJgqA5znsPJItsjnJEltM5ANMlgaj5Wke0mup5JawUH5VUujX7slmJSvaG2/rMjXJ8SJPtunvf3hyNpBc9uuzpM6TnZTIJb9+qq709esMLNYJ1spx3fhb1/pHyaVUil3Xev3GSd7M56x811r74KXzlN1cawh50SWjY9bj5Pm13xgXKMizHoBSAYrdSBYq4jCQjhMFi8HOq7psUSJBhwkHYyyaYMJDDupymJD8sHvqr+E3rso7XTvsyQlh/eQqO8M2ZEjX17bdx3SG5GU3exkn6br2trMxlH9G5TaOurJANtcMOwTGHLuKKkMXyuZ67Q2/n7MGSs5q/q7e85NsV3KZrjc23R2Sp54E5x10L1wNLXDlOEGoJBrbfkuX2t4hGXaHHN/t1Y06lIkVInoE1gMA5wCApw9tPCYNp8u3713h4a21vWxzkUa21eeqTCgA/WJQmfPDOAS4cGe5cY/mApzRNwjdpQQ6nVDfarxhBBgAFk4IkPcGgB6D6xMR0hgyDv/6iQRK/WzKiV74azmRikTuiSxCRJ7IFkB2whZMhEkE+HmVXhz08TNkdv7uY5cBDBqEYeoZtcKE1PIpVq1WjYBWVtWq1GoTZlKtlVozTK16LTJYNajXIKBVq0YtJDg4Wvg0q9WoVYtcLWqF5GrQrAZHPh1LNHHmzkkKi+TmA6q1MvCDexbz8LZDUibqtkPiQbtco2c+BNOclzsjREZtU6OpmtuHSKHcMp3BGbC6jFjpAs0h1xXqC02rtA0aaBniVZ3Vlpkatc50Gzypr8vm4iSolZO7lvnezwB4TvWGUXrzKURHACLnC9yH2+qkbYrtxFCF6Ucs1c654KJMWdiyXXLZFVf7I3jTefz4vvaNGtcs85l2r3hJ2FNBvetuCLgJISmFMj+T0wgGX7c69cL6HaTTQO8nBo3toTX1AjDZ4pZW7To0do610f0bfCgLTWE31Xs6TbPBRTu86RUnlyILHFPifd3ed6knhJEXDnirJ4aEbz8LQh8F/71IQ6xBVESDHsueWbHFBNuQbEHRSGijb82zGRVHXgp5wyZMZl4KSnEZ6PC5cKectsttd3zhpla97vLCOLZKtRrt1Cr8/fe/uLpGZVU3bdcP44QJZVxIpY2d3bL6ELe039ze3T88Pj2/vPIFQpF46sSBQ6Bm+xqtw+aoyCTWr37VRWAyshVO2OxAZpHpsqKKUiDfZXZFPtusgPw5bjaokJ2Dk0uRYiVKlSlXoZKbhxcG51Olml+NgFp1g4ut0jDv1jFA2WfiPZ26hin7xweCERTDCRqdwWSxOVweXyAUiSVSmVyhJFVqjVannx6oK267744hDxqMJrOFstrsDqfL7fH6/NTaIw5YGarQGK+C2A5+v1+GZYQ3OwGkj9qoL/07c68MvDvUbI+3nPa5e3P1+491W4Pneb/PVbe0e0xcErifthf4z5SaDruNHIZPTtOWuGOZ5irGvUSxkW/JfoTh1JjkFNPyh5i5jXGBAwdNb9HWEMX7YYHLwWds808fFfPtLrhkm0YWTh4dTg67oBYZjGJ8OlN0cG7hBO75FEIT2a6gomd2M4x8nBYtRWNC59ME/xX6CCpC5hs73aX3bRg8wBLFNjrF3Lum0d0QksV7MUchtmXLYd+jxg7MEFzx0Q1NwYJgae4GKw1OZGZ2YNZiDw/G43S8uWGWGRq++3KgyHWGg1xHhpnnwW9yu1qdDwn802z6c8dm6SwVTCrh3JLiDIfHpRg4gaW4xnwLuTAv16UXhe9xtRv/0ZOctDFKoEHB0+jpj6w+3221X2ROstEtkbT1AUq+oXc1tDz3ZD+5EuwkmulZ6hJPWmY2hWyau8Pr3Kebzs3307f3d/f3vb/VsZ+/2O14olfn0zE3sz+e1WUyRj/c+TQYen4ajL/+r7RZkA77RDTDxLxmOkbwRa/dU7/6DKsnfp34u8D2F0LWMITBgZbo4DvVNHO30MUYvhLDCZ8yXQK2wG1zagGykzS2qEgkn//NAMYw/V9cfwZ+czWnsVhR2CHxI5nuMglltp0rST2FvuauIyJPnHxXxvKaNZdTLjHVPjOdQDRLlCK+ZinlSDzTUOYI5sE5IDBIds9D6PBoFDTOGK26Aw+EuALqrnMAa1n0d0rxBYec5BTPIwFR/Ih6ltXDG6+m0fotynmMqrlQVVMw80au4EJcjpBxwCS9+RJPgbhy13+Mi2oxnpFP4yAVAYqosgahtpEs1SCIshK84yQrwqkobFIttH8qaUcvfOKNrhVrrmOXqSWIe5lRYXasCL1EFULWcFCqD6oXIE1F751QsaZMwOrTcg83/m8eaQZxiHNBffNgz4U/5lBU2aFmhew4tMamXRbHAM/83S3VGANAfxSOd+PYN62417OZExf//gj1cIUPjYtwkDQuMHCaxhGQZ7jguSOuVeOCBIDXwpEmRupKiiIuHJw7GP0P5FEUJ/Twd08Lg0Rw7dkhQE12Nv5HZtBXnIxNT/NpGH05i6N/dX8+b/49cxRcAQ==";var Vt=16,Di=2.4,Bn=4,bu=1.1,zn={body:new Ki({color:15131870,roughness:.6,metalness:0,clearcoat:.12,clearcoatRoughness:.6}),key:new Ki({color:15526886,roughness:.32,metalness:0,clearcoat:.5,clearcoatRoughness:.25}),hole:new mn({color:1513499,roughness:.9}),graphite:new Ki({color:3422012,roughness:.5,metalness:.15})},as="#2a2b2e",zx="#6f6d68";async function cf(){let n=new FontFace("JBM","url("+rf+")");await n.load(),document.fonts.add(n)}function Jn(n,e,t,i,s=96){let a=new Va(n,{depth:e-2*t,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelOffset:-t,bevelSegments:6,steps:1,curveSegments:s});a.translate(0,0,-(e-2*t)/2);let r=a.attributes.normal.clone(),o=af(a,Tn.degToRad(32)),c=a.groups[0];for(let u=c.start;u<c.start+c.count;u++)o.attributes.normal.setXYZ(u,r.getX(u),r.getY(u),r.getZ(u));let l=new vt(o,i);return l.castShadow=!0,l.receiveShadow=!0,l}function Qs(n,e){let t=new Ji(new Pa(bu,20),zn.hole,n.length),i=new ut;return n.forEach((s,a)=>{let r=(s[2]||bu)/bu;i.makeScale(r,r,1),i.setPosition(s[0],s[1],e),t.setMatrixAt(a,i)}),t}function lf(n,e,t,i){let s=document.createElement("canvas");s.width=Math.round(n*t),s.height=Math.round(e*t);let a=s.getContext("2d");a.scale(t,t),i(a);let r=new bi(s);return r.colorSpace=Ft,r.anisotropy=8,r}function hi(n,e,t,i){return new vt(new li(n,e),new mn({map:lf(n,e,t,i),transparent:!0,depthWrite:!1,roughness:.8}))}function or(n,e,t,i=40){n.setTransform(1,0,0,1,0,0),n.font=`500 ${Math.round(t*1.32*i)}px JBM`,n.textBaseline="middle",n.fillStyle=zx,n.letterSpacing=`${.5*i}px`,n.fillText(e,0,3.5*i)}function uf(n){let e=new an;for(let c of n.arms)e.add(Jn(new nn(c.pts.map(l=>new Pe(l[0],l[1]))),Vt,Di,zn.body));let t=Jn(new nn(n.tri.pts.map(c=>new Pe(c[0],c[1]))),Vt,1.6,zn.key);t.position.z=3.5,e.add(t),e.add(Qs(n.holes,Vt/2+.06));let i=Qs(n.holes,0);i.rotation.x=Math.PI,i.position.z=-Vt/2-.06,e.add(i);let s=n.arms.slice().sort((c,l)=>c.centroid[1]-l.centroid[1])[0],a=Math.min(...s.pts.filter(c=>c[1]>-108&&c[1]<-42).map(c=>c[0])),r=hi(62,7,40,c=>or(c,"AURALITY  AU-01",4));r.matrixAutoUpdate=!1;let o=new ut().makeBasis(new Z(0,1,0),new Z(0,0,-1),new Z(-1,0,0));return o.setPosition(a-.05,-78,0),r.matrix.copy(o),e.add(r),e}function hf(n=10){let a=new an,r=new nn;r.absarc(0,0,90,0,Math.PI*2,!1);let o=new qn;o.absarc(0,0,62,0,Math.PI*2,!0),r.holes.push(o),a.add(Jn(r,Vt,Di,zn.body));let c=hi(180,180,12,A=>{A.translate(90,90),A.strokeStyle=as,A.fillStyle=as,A.lineCap="butt";for(let M=0;M<60;M++){let v=(M*6-90)*Math.PI/180,S=M%5===0,w=66,L=w+(S?5:2.5);A.lineWidth=S?.8:.45,A.globalAlpha=S?1:.7,A.beginPath(),A.moveTo(w*Math.cos(v),w*Math.sin(v)),A.lineTo(L*Math.cos(v),L*Math.sin(v)),A.stroke()}A.globalAlpha=1,A.font="500 5.2px JBM",A.textAlign="center",A.textBaseline="middle";for(let M=1;M<=12;M++){let v=(M*30-90)*Math.PI/180;A.fillText(String(M).padStart(2,"0"),79.5*Math.cos(v),79.5*Math.sin(v)+.3)}});c.position.z=Vt/2+.05,a.add(c);let l=new an,u=new nn;u.absarc(0,0,59,0,Math.PI*2,!1),l.add(Jn(u,Vt+4,Di,zn.key));let d=(Vt+4)/2+.05,h=hi(118,118,14,A=>{A.translate(59,59),A.fillStyle=as,A.fillRect(-.7,-52,1.4,20)});h.position.z=d,l.add(h);let f=[],g=[Bn*Math.cos(Math.PI/6),Bn*Math.sin(Math.PI/6)];for(let A=-3;A<=3;A++)for(let M=-3;M<=3;M++){let v=M*g[0],S=A*Bn+M*g[1];Math.hypot(v,S)<=2*Bn+.1&&f.push([v,S])}l.add(Qs(f,d+.01)),l.position.z=4/2,l.rotation.z=-n*Math.PI/6,a.add(l);let y=Tn.degToRad(315-17.5),p=Tn.degToRad(35),m=new La(90+.12,90+.12,7,64,1,!0,y,p);return m.rotateX(Math.PI/2),a.add(new vt(m,new mn({map:lf(55,7,40,A=>or(A,"AURALITY  AU-02",4)),transparent:!0,depthWrite:!1,roughness:.8}))),a}function di(n,e,t){let i=e.length,s=(a,r)=>new Pe(r[0]-a[0],r[1]-a[1]);for(let a=0;a<i;a++){let r=e[(a+i-1)%i],o=e[a],c=e[(a+1)%i],l=s(o,r).normalize(),u=s(o,c).normalize(),d=t/Math.tan(Math.acos(l.dot(u))/2),h=[o[0]+l.x*d,o[1]+l.y*d],f=[o[0]+u.x*d,o[1]+u.y*d];a===0?n.moveTo(h[0],h[1]):n.lineTo(h[0],h[1]),n.quadraticCurveTo(o[0],o[1],f[0],f[1])}return n.closePath(),n}var of=n=>[0,1,2,3,4,5].map(e=>[n*Math.cos(Math.PI/2+e*Math.PI/3),n*Math.sin(Math.PI/2+e*Math.PI/3)]);function df(){let a=15*Bn,r=a+5.6/Math.cos(Math.PI/6),o=r+3/Math.cos(Math.PI/6),c=new an,l=di(new nn,[[-84,-84],[84,-84],[84,84],[-84,84]],8);l.holes.push(di(new qn,of(o).reverse(),5.5)),c.add(Jn(l,Vt,Di,zn.body,24));let u=Jn(di(new nn,of(r),4),Vt,Di,zn.body,24);u.position.z=-2,c.add(u);let d=[],h=[Bn*Math.cos(Math.PI/6),Bn*Math.sin(Math.PI/6)];for(let y=-15;y<=15;y++)for(let p=-15;p<=15;p++){let m=Math.max(Math.abs(y),Math.abs(p),Math.abs(y+p));m>15||d.push([p*h[0],y*Bn+p*h[1],m<=10?1.1:m<=13?.8:.5])}c.add(Qs(d,Vt/2-2+.06));let f=hi(62,7,40,y=>or(y,"AURALITY  AU-03",4));f.matrixAutoUpdate=!1;let g=new ut().makeBasis(new Z(0,1,0),new Z(0,0,-1),new Z(-1,0,0));return g.setPosition(-84-.05,-41,0),f.matrix.copy(g),c.add(f),c.userData={Rf:a,Rp:r,Ro:o,holes:d.length},c}function ff(n=[4,9,7]){let i=[-24,0,24],s=3,a=-86,r=74,o=-78,c=12,l=new an,u=di(new nn,[[-40,-110],[40,-110],[40,110],[-40,110]],8);for(let p of i)u.holes.push(di(new qn,[[p-s,r],[p+s,r],[p+s,a],[p-s,a]],2.9));l.add(Jn(u,Vt,Di,zn.body,24));let d=hi(80,220,12,p=>{p.translate(40,110),p.scale(1,-1),p.strokeStyle=as,p.lineCap="butt";for(let m of i)for(let A=0;A<=12;A++){let M=A%6===0,v=o+A*c;p.lineWidth=M?.8:.45,p.globalAlpha=M?1:.7,p.beginPath(),p.moveTo(m-6,v),p.lineTo(m-6-(M?5:2.5),v),p.stroke()}p.globalAlpha=1,p.scale(1,-1),p.fillStyle=as,p.font="500 5.2px JBM",p.textAlign="center",p.textBaseline="middle",["L","H","O"].forEach((m,A)=>p.fillText(m,i[A],98.3))});d.position.z=Vt/2+.05,l.add(d);let h=[[0,92]],f=Bn;for(let p=0;p<6;p++)h.push([f*Math.cos(Math.PI/2+p*Math.PI/3),92+f*Math.sin(Math.PI/2+p*Math.PI/3)]);l.add(Qs(h,Vt/2+.06)),i.forEach((p,m)=>{let A=Jn(di(new nn,[[-11,-5],[11,-5],[11,5],[-11,5]],2.4),8,1.6,zn.key,12),M=Vt/2+1.5+4;A.position.set(p,o+n[m]*c,M),l.add(A);let v=hi(22,10,20,S=>{S.fillStyle=as,S.fillRect(2.5,4.45,17,1.1)});v.position.set(p,o+n[m]*c,M+4.05),l.add(v),(l.userData.cursores||=[]).push([A,v])}),l.userData.TR0=o,l.userData.STEP=c;let g=hi(62,7,40,p=>or(p,"AURALITY  AU-04",4));g.matrixAutoUpdate=!1;let y=new ut().makeBasis(new Z(0,1,0),new Z(0,0,-1),new Z(-1,0,0));return y.setPosition(-40-.05,-67,0),g.matrix.copy(y),l.add(g),l}function pf(n,e=2){let d=new an,h=di(new nn,[[-100,-34],[100,-34],[100,34],[-100,34]],8);h.holes.push(di(new qn,[[-178/2,46/2],[178/2,46/2],[178/2,-46/2],[-178/2,-46/2]],5.5)),d.add(Jn(h,Vt,Di,zn.body,24));let f=n.tri.centroid,g=n.tri.pts.map(v=>[v[0]-f[0],v[1]-f[1]]),y=Math.max(...g.map(v=>v[1]))-Math.min(...g.map(v=>v[1])),p=13/y,m=[null,v=>v.fillRect(-5.5,-5.5,11,11),v=>{v.beginPath(),g.forEach((S,w)=>w?v.lineTo(S[0]*p,-S[1]*p):v.moveTo(S[0]*p,-S[1]*p)),v.closePath(),v.fill()},v=>{v.fillRect(-5.5,-6,3.6,12),v.fillRect(1.9,-6,3.6,12)},v=>{v.beginPath(),v.arc(0,0,6,0,Math.PI*2),v.fill()}];for(let v=0;v<5;v++){let S=v===e,w=S?Vt:Vt+4,L=S?-2:2,_=-178/2+3+32/2+v*35,C=Jn(di(new nn,[[-32/2,-40/2],[32/2,-40/2],[32/2,40/2],[-32/2,40/2]],4),w,Di,zn.key,16);C.position.set(_,0,L),d.add(C);let U=L+w/2+.05;if(m[v]){let z=hi(32,40,16,k=>{k.translate(16,20),k.fillStyle=as,m[v](k)});z.position.set(_,0,U),d.add(z)}else{let z=[[_,0]];for(let k=0;k<6;k++)z.push([_+Bn*Math.cos(Math.PI/2+k*Math.PI/3),Bn*Math.sin(Math.PI/2+k*Math.PI/3)]);d.add(Qs(z,U+.01))}}let A=hi(52,7,40,v=>or(v,"AURALITY  AU-05",3.6));A.matrixAutoUpdate=!1;let M=new ut().makeBasis(new Z(0,1,0),new Z(0,0,-1),new Z(-1,0,0));return M.setPosition(-100-.05,.5,0),A.matrix.copy(M),d.add(A),d.userData={ancho:200,alto:68},d}var mf={height:240,width:207.6,stroke:27,pitch:4,inset:5.6,arms:[{area:3966.4,centroid:[33.297,-58.997],pts:[[36.965,-18.184],[35.78,-18.397],[34.594,-18.781],[33.409,-19.326],[32.223,-19.953],[31.037,-20.632],[29.852,-21.314],[28.666,-21.999],[27.481,-22.685],[26.295,-23.365],[25.109,-24.042],[23.924,-24.718],[22.738,-25.405],[21.553,-26.094],[20.367,-26.786],[19.181,-27.477],[17.996,-28.164],[16.81,-28.841],[15.625,-29.524],[14.439,-30.211],[13.253,-30.902],[12.068,-31.581],[10.882,-32.263],[9.697,-32.936],[8.511,-33.627],[7.325,-34.318],[6.14,-35.008],[4.954,-35.691],[3.769,-36.367],[2.583,-37.052],[1.397,-37.739],[.212,-38.43],[-.972,-39.177],[-2.129,-40.057],[-3.206,-41.079],[-4.124,-42.216],[-4.86,-43.402],[-5.387,-44.587],[-5.746,-45.773],[-5.993,-46.958],[-6.147,-48.144],[-6.247,-49.33],[-6.298,-50.515],[-6.309,-51.701],[-6.309,-52.886],[-6.309,-54.072],[-6.309,-55.258],[-6.309,-56.443],[-6.309,-57.629],[-6.309,-58.814],[-6.309,-60],[-6.309,-61.186],[-6.309,-62.371],[-6.309,-63.557],[-6.309,-64.742],[-6.309,-65.928],[-6.309,-67.114],[-6.309,-68.299],[-6.309,-69.485],[-6.309,-70.67],[-6.309,-71.856],[-6.309,-73.042],[-6.309,-74.227],[-6.309,-75.413],[-6.309,-76.598],[-6.309,-77.784],[-6.309,-78.97],[-6.309,-80.155],[-6.309,-81.341],[-6.309,-82.526],[-6.309,-83.712],[-6.309,-84.898],[-6.309,-86.083],[-6.309,-87.269],[-6.309,-88.454],[-6.309,-89.64],[-6.309,-90.826],[-6.309,-92.011],[-6.309,-93.197],[-6.309,-94.382],[-6.309,-95.568],[-6.309,-96.754],[-6.309,-97.939],[-6.309,-99.125],[-6.309,-100.311],[-6.309,-101.496],[-6.309,-102.682],[-6.309,-103.867],[-6.309,-105.053],[-6.309,-106.239],[-6.309,-107.424],[-6.309,-108.61],[-6.309,-109.795],[-6.309,-110.981],[-6.292,-112.167],[-6.238,-113.352],[-6.093,-114.538],[-5.799,-115.723],[-5.248,-116.905],[-4.41,-117.989],[-3.339,-118.847],[-2.159,-119.382],[-.974,-119.596],[.212,-119.641],[1.397,-119.651],[2.583,-119.67],[3.769,-119.7],[4.954,-119.773],[6.14,-119.839],[7.325,-119.843],[8.511,-119.773],[9.697,-119.64],[10.882,-119.436],[12.068,-119.073],[13.235,-118.42],[14.236,-117.511],[14.93,-116.401],[15.307,-115.215],[15.491,-114.03],[15.632,-112.844],[15.737,-111.658],[15.788,-110.473],[15.794,-109.287],[15.794,-108.102],[15.794,-106.916],[15.794,-105.73],[15.794,-104.545],[15.79,-103.359],[15.743,-102.174],[15.69,-100.988],[15.625,-99.802],[15.538,-98.617],[15.459,-97.431],[15.378,-96.246],[15.337,-95.06],[15.31,-93.874],[15.271,-92.689],[15.244,-91.503],[15.218,-90.318],[15.167,-89.132],[15.115,-87.946],[15.062,-86.761],[15.032,-85.575],[15.032,-84.39],[15.032,-83.204],[15.032,-82.018],[15.032,-80.833],[15.032,-79.647],[15.032,-78.462],[15.032,-77.276],[15.068,-76.09],[15.12,-74.905],[15.194,-73.719],[15.259,-72.534],[15.325,-71.348],[15.448,-70.162],[15.615,-68.977],[15.788,-67.791],[15.967,-66.606],[16.174,-65.42],[16.422,-64.234],[16.718,-63.049],[17.025,-61.863],[17.382,-60.677],[17.77,-59.492],[18.223,-58.306],[18.733,-57.121],[19.319,-55.935],[19.987,-54.749],[20.747,-53.564],[21.622,-52.378],[22.64,-51.202],[23.762,-50.094],[24.94,-49.098],[26.126,-48.24],[27.311,-47.523],[28.497,-46.917],[29.682,-46.403],[30.868,-45.987],[32.054,-45.643],[33.239,-45.387],[34.425,-45.197],[35.61,-45.046],[36.796,-44.939],[37.982,-44.836],[39.167,-44.815],[40.353,-44.894],[41.538,-45.078],[42.724,-45.34],[43.91,-45.671],[45.095,-46.072],[46.281,-46.529],[47.466,-47.013],[48.652,-47.54],[49.838,-48.074],[51.023,-48.643],[52.209,-49.209],[53.394,-49.8],[54.58,-50.415],[55.766,-51.05],[56.951,-51.695],[58.137,-52.339],[59.323,-52.994],[60.508,-53.647],[61.694,-54.322],[62.879,-54.994],[64.065,-55.696],[65.251,-56.389],[66.436,-57.083],[67.622,-57.793],[68.807,-58.504],[69.993,-59.219],[71.179,-59.93],[72.364,-60.649],[73.55,-61.363],[74.735,-62.089],[75.921,-62.808],[77.107,-63.534],[78.292,-64.257],[79.478,-64.97],[80.663,-65.693],[81.849,-66.406],[83.035,-67.131],[84.22,-67.829],[85.406,-68.523],[86.591,-69.193],[87.777,-69.842],[88.963,-70.469],[90.148,-71.041],[91.334,-71.495],[92.519,-71.736],[93.705,-71.689],[94.891,-71.299],[96.048,-70.576],[97.128,-69.596],[98.084,-68.465],[98.895,-67.283],[99.603,-66.097],[100.256,-64.912],[100.881,-63.726],[101.519,-62.541],[102.194,-61.355],[102.832,-60.169],[103.339,-58.984],[103.613,-57.798],[103.626,-56.613],[103.382,-55.427],[102.8,-54.255],[101.92,-53.193],[100.819,-52.284],[99.633,-51.533],[98.447,-50.848],[97.262,-50.159],[96.076,-49.461],[94.891,-48.774],[93.705,-48.089],[92.519,-47.408],[91.334,-46.733],[90.148,-46.044],[88.963,-45.359],[87.777,-44.664],[86.591,-43.991],[85.406,-43.313],[84.22,-42.634],[83.035,-41.949],[81.849,-41.245],[80.663,-40.56],[79.478,-39.873],[78.292,-39.195],[77.107,-38.516],[75.921,-37.827],[74.735,-37.146],[73.55,-36.463],[72.364,-35.785],[71.179,-35.099],[69.993,-34.408],[68.807,-33.723],[67.622,-33.028],[66.436,-32.343],[65.251,-31.662],[64.065,-30.985],[62.879,-30.303],[61.694,-29.607],[60.508,-28.926],[59.323,-28.247],[58.137,-27.573],[56.951,-26.882],[55.766,-26.193],[54.58,-25.508],[53.394,-24.82],[52.209,-24.14],[51.023,-23.448],[49.838,-22.759],[48.652,-22.066],[47.466,-21.387],[46.281,-20.717],[45.095,-20.036],[43.91,-19.4],[42.724,-18.841],[41.538,-18.43],[40.353,-18.199],[39.167,-18.094],[37.982,-18.099]]},{area:3960.7,centroid:[-62.05,.124],pts:[[-93.112,62.667],[-94.213,62.454],[-95.307,61.946],[-96.345,61.204],[-97.296,60.269],[-98.137,59.227],[-98.876,58.137],[-99.55,57.036],[-100.164,55.935],[-100.736,54.834],[-101.31,53.733],[-101.918,52.632],[-102.539,51.531],[-103.064,50.43],[-103.44,49.33],[-103.572,48.229],[-103.504,47.128],[-103.192,46.027],[-102.578,44.937],[-101.701,43.96],[-100.649,43.117],[-99.548,42.402],[-98.447,41.762],[-97.347,41.117],[-96.246,40.483],[-95.145,39.852],[-94.044,39.214],[-92.943,38.58],[-91.842,37.94],[-90.741,37.3],[-89.64,36.674],[-88.539,36.04],[-87.438,35.417],[-86.337,34.784],[-85.236,34.141],[-84.135,33.505],[-83.035,32.863],[-81.934,32.229],[-80.833,31.589],[-79.732,30.951],[-78.631,30.315],[-77.53,29.673],[-76.429,29.041],[-75.328,28.423],[-74.227,27.789],[-73.126,27.157],[-72.025,26.515],[-70.924,25.87],[-69.824,25.235],[-68.723,24.605],[-67.622,23.975],[-66.521,23.331],[-65.42,22.689],[-64.319,22.048],[-63.218,21.406],[-62.117,20.785],[-61.016,20.152],[-59.915,19.486],[-58.814,18.76],[-57.713,17.937],[-56.635,17.012],[-55.606,16.007],[-54.663,14.945],[-53.818,13.846],[-53.069,12.745],[-52.414,11.644],[-51.836,10.543],[-51.343,9.442],[-50.914,8.342],[-50.543,7.241],[-50.225,6.14],[-49.986,5.039],[-49.791,3.938],[-49.672,2.837],[-49.54,1.736],[-49.467,.635],[-49.467,-.466],[-49.544,-1.567],[-49.676,-2.668],[-49.802,-3.769],[-49.998,-4.869],[-50.239,-5.97],[-50.562,-7.071],[-50.939,-8.172],[-51.373,-9.273],[-51.866,-10.374],[-52.448,-11.475],[-53.114,-12.576],[-53.861,-13.671],[-54.699,-14.748],[-55.625,-15.794],[-56.641,-16.78],[-57.713,-17.702],[-58.814,-18.523],[-59.915,-19.264],[-61.016,-19.932],[-62.117,-20.566],[-63.218,-21.187],[-64.319,-21.825],[-65.42,-22.469],[-66.521,-23.105],[-67.622,-23.739],[-68.723,-24.372],[-69.824,-24.993],[-70.924,-25.633],[-72.025,-26.274],[-73.126,-26.91],[-74.227,-27.556],[-75.328,-28.188],[-76.429,-28.824],[-77.53,-29.457],[-78.631,-30.1],[-79.732,-30.736],[-80.833,-31.369],[-81.934,-32.005],[-83.035,-32.628],[-84.135,-33.258],[-85.236,-33.911],[-86.337,-34.551],[-87.438,-35.195],[-88.539,-35.823],[-89.64,-36.448],[-90.741,-37.084],[-91.842,-37.724],[-92.943,-38.366],[-94.044,-39.004],[-95.145,-39.634],[-96.246,-40.266],[-97.347,-40.889],[-98.447,-41.525],[-99.548,-42.173],[-100.649,-42.876],[-101.703,-43.721],[-102.58,-44.693],[-103.195,-45.773],[-103.515,-46.874],[-103.583,-47.975],[-103.455,-49.076],[-103.077,-50.176],[-102.548,-51.277],[-101.927,-52.378],[-101.319,-53.479],[-100.741,-54.58],[-100.167,-55.681],[-99.558,-56.782],[-98.886,-57.883],[-98.148,-58.972],[-97.301,-60.028],[-96.343,-60.971],[-95.303,-61.703],[-94.213,-62.168],[-93.112,-62.356],[-92.011,-62.281],[-90.91,-61.995],[-89.809,-61.522],[-88.709,-60.924],[-87.608,-60.295],[-86.507,-59.652],[-85.406,-59.021],[-84.305,-58.383],[-83.204,-57.757],[-82.103,-57.13],[-81.002,-56.494],[-79.901,-55.86],[-78.8,-55.212],[-77.699,-54.573],[-76.598,-53.942],[-75.498,-53.304],[-74.397,-52.681],[-73.296,-52.04],[-72.195,-51.394],[-71.094,-50.756],[-69.993,-50.122],[-68.892,-49.493],[-67.791,-48.872],[-66.69,-48.232],[-65.589,-47.594],[-64.488,-46.947],[-63.387,-46.311],[-62.287,-45.673],[-61.186,-45.041],[-60.085,-44.414],[-58.984,-43.772],[-57.883,-43.132],[-56.782,-42.502],[-55.681,-41.864],[-54.58,-41.239],[-53.479,-40.607],[-52.378,-39.963],[-51.277,-39.325],[-50.176,-38.684],[-49.076,-38.049],[-47.975,-37.413],[-46.874,-36.781],[-45.773,-36.145],[-44.672,-35.496],[-43.571,-34.861],[-42.47,-34.229],[-41.369,-33.595],[-40.268,-32.976],[-39.167,-32.342],[-38.066,-31.702],[-36.965,-31.064],[-35.865,-30.426],[-34.764,-29.792],[-33.663,-29.146],[-32.562,-28.423],[-31.489,-27.573],[-30.503,-26.598],[-29.671,-25.533],[-29.007,-24.432],[-28.521,-23.331],[-28.149,-22.23],[-27.889,-21.129],[-27.737,-20.028],[-27.669,-18.927],[-27.65,-17.826],[-27.65,-16.725],[-27.65,-15.625],[-27.65,-14.524],[-27.65,-13.423],[-27.65,-12.322],[-27.65,-11.221],[-27.65,-10.12],[-27.65,-9.019],[-27.65,-7.918],[-27.65,-6.817],[-27.65,-5.716],[-27.65,-4.615],[-27.65,-3.514],[-27.65,-2.414],[-27.65,-1.313],[-27.65,-.212],[-27.65,.889],[-27.65,1.99],[-27.65,3.091],[-27.65,4.192],[-27.65,5.293],[-27.65,6.394],[-27.65,7.495],[-27.65,8.596],[-27.65,9.697],[-27.65,10.797],[-27.65,11.898],[-27.65,12.999],[-27.65,14.1],[-27.65,15.201],[-27.65,16.302],[-27.65,17.403],[-27.65,18.504],[-27.68,19.605],[-27.787,20.706],[-27.968,21.807],[-28.277,22.908],[-28.689,24.008],[-29.242,25.109],[-29.972,26.197],[-30.868,27.23],[-31.897,28.149],[-32.985,28.941],[-34.086,29.635],[-35.187,30.27],[-36.288,30.894],[-37.389,31.529],[-38.49,32.176],[-39.591,32.816],[-40.692,33.45],[-41.793,34.088],[-42.893,34.718],[-43.994,35.358],[-45.095,36],[-46.196,36.632],[-47.297,37.265],[-48.398,37.893],[-49.499,38.526],[-50.6,39.169],[-51.701,39.803],[-52.802,40.447],[-53.903,41.074],[-55.004,41.704],[-56.104,42.333],[-57.205,42.971],[-58.306,43.624],[-59.407,44.265],[-60.508,44.896],[-61.609,45.528],[-62.71,46.153],[-63.811,46.785],[-64.912,47.423],[-66.013,48.061],[-67.114,48.707],[-68.215,49.339],[-69.315,49.973],[-70.416,50.606],[-71.517,51.242],[-72.618,51.893],[-73.719,52.527],[-74.82,53.159],[-75.921,53.786],[-77.022,54.407],[-78.123,55.045],[-79.224,55.687],[-80.325,56.319],[-81.426,56.963],[-82.526,57.593],[-83.627,58.233],[-84.728,58.869],[-85.829,59.509],[-86.93,60.151],[-88.031,60.781],[-89.132,61.404],[-90.233,61.957],[-91.334,62.413],[-92.435,62.653]]},{area:3954.3,centroid:[33.425,59.188],pts:[[.127,119.877],[-1.059,119.739],[-2.244,119.453],[-3.417,118.936],[-4.495,118.121],[-5.321,117.069],[-5.85,115.893],[-6.11,114.707],[-6.236,113.522],[-6.292,112.336],[-6.309,111.15],[-6.309,109.965],[-6.309,108.779],[-6.309,107.594],[-6.309,106.408],[-6.309,105.222],[-6.309,104.037],[-6.309,102.851],[-6.309,101.665],[-6.309,100.48],[-6.309,99.294],[-6.309,98.109],[-6.309,96.923],[-6.309,95.737],[-6.309,94.552],[-6.309,93.366],[-6.309,92.181],[-6.309,90.995],[-6.309,89.809],[-6.309,88.624],[-6.309,87.438],[-6.309,86.253],[-6.309,85.067],[-6.309,83.881],[-6.309,82.696],[-6.309,81.51],[-6.309,80.325],[-6.309,79.139],[-6.309,77.953],[-6.309,76.768],[-6.309,75.582],[-6.309,74.397],[-6.309,73.211],[-6.309,72.025],[-6.309,70.84],[-6.309,69.654],[-6.309,68.469],[-6.309,67.283],[-6.309,66.097],[-6.309,64.912],[-6.309,63.726],[-6.309,62.541],[-6.309,61.355],[-6.309,60.169],[-6.309,58.984],[-6.309,57.798],[-6.309,56.613],[-6.309,55.427],[-6.309,54.241],[-6.279,53.056],[-6.206,51.87],[-6.098,50.685],[-5.95,49.499],[-5.752,48.313],[-5.453,47.128],[-5.061,45.942],[-4.553,44.757],[-3.94,43.571],[-3.181,42.385],[-2.28,41.22],[-1.249,40.127],[-.12,39.135],[1.059,38.296],[2.244,37.551],[3.43,36.877],[4.615,36.203],[5.801,35.52],[6.987,34.828],[8.172,34.114],[9.358,33.412],[10.543,32.699],[11.729,31.999],[12.915,31.286],[14.1,30.571],[15.286,29.859],[16.471,29.146],[17.657,28.455],[18.843,27.752],[20.028,27.061],[21.214,26.361],[22.399,25.672],[23.585,24.991],[24.771,24.325],[25.956,23.662],[27.142,22.996],[28.327,22.341],[29.513,21.701],[30.699,21.086],[31.884,20.497],[33.07,19.934],[34.255,19.402],[35.441,18.912],[36.627,18.504],[37.812,18.244],[38.998,18.231],[40.183,18.459],[41.369,18.871],[42.555,19.383],[43.74,19.934],[44.926,20.514],[46.112,21.093],[47.297,21.699],[48.483,22.32],[49.668,22.964],[50.854,23.611],[52.04,24.251],[53.225,24.889],[54.411,25.548],[55.596,26.21],[56.782,26.893],[57.968,27.563],[59.153,28.237],[60.339,28.894],[61.524,29.566],[62.71,30.251],[63.896,30.936],[65.081,31.628],[66.267,32.315],[67.452,32.998],[68.638,33.683],[69.824,34.367],[71.009,35.068],[72.195,35.763],[73.38,36.457],[74.566,37.146],[75.752,37.842],[76.937,38.542],[78.123,39.237],[79.308,39.935],[80.494,40.629],[81.68,41.335],[82.865,42.035],[84.051,42.739],[85.236,43.443],[86.422,44.134],[87.608,44.834],[88.793,45.53],[89.979,46.243],[91.164,46.945],[92.35,47.636],[93.536,48.321],[94.721,49.002],[95.907,49.702],[97.092,50.397],[98.278,51.078],[99.464,51.742],[100.642,52.427],[101.756,53.267],[102.674,54.273],[103.301,55.427],[103.606,56.613],[103.634,57.798],[103.414,58.984],[102.934,60.169],[102.32,61.355],[101.65,62.541],[101.016,63.726],[100.388,64.912],[99.748,66.097],[99.055,67.283],[98.278,68.461],[97.352,69.603],[96.296,70.627],[95.145,71.386],[93.959,71.818],[92.773,71.931],[91.588,71.756],[90.402,71.344],[89.217,70.744],[88.031,70.072],[86.845,69.381],[85.66,68.706],[84.474,68.028],[83.289,67.345],[82.103,66.66],[80.917,65.966],[79.732,65.283],[78.546,64.598],[77.361,63.914],[76.175,63.227],[74.989,62.529],[73.804,61.85],[72.618,61.172],[71.433,60.499],[70.247,59.819],[69.061,59.131],[67.876,58.447],[66.69,57.753],[65.505,57.074],[64.319,56.389],[63.133,55.704],[61.948,55.011],[60.762,54.315],[59.577,53.639],[58.391,52.96],[57.205,52.284],[56.02,51.599],[54.834,50.914],[53.649,50.233],[52.463,49.544],[51.277,48.863],[50.092,48.178],[48.906,47.53],[47.721,46.936],[46.535,46.435],[45.349,46.029],[44.164,45.705],[42.978,45.425],[41.793,45.242],[40.607,45.129],[39.421,45.095],[38.236,45.095],[37.05,45.137],[35.865,45.265],[34.679,45.455],[33.493,45.731],[32.308,46.04],[31.122,46.418],[29.936,46.885],[28.751,47.436],[27.565,48.057],[26.38,48.759],[25.196,49.538],[24.037,50.419],[22.891,51.402],[21.786,52.491],[20.745,53.649],[19.802,54.834],[18.98,56.02],[18.271,57.205],[17.655,58.391],[17.126,59.577],[16.671,60.762],[16.3,61.948],[16.022,63.133],[15.8,64.319],[15.623,65.505],[15.482,66.69],[15.395,67.876],[15.371,69.061],[15.371,70.247],[15.371,71.433],[15.371,72.618],[15.371,73.804],[15.371,74.989],[15.371,76.175],[15.371,77.361],[15.371,78.546],[15.371,79.732],[15.371,80.917],[15.371,82.103],[15.371,83.289],[15.371,84.474],[15.371,85.66],[15.371,86.845],[15.371,88.031],[15.371,89.217],[15.371,90.402],[15.371,91.588],[15.371,92.773],[15.371,93.959],[15.371,95.145],[15.371,96.33],[15.371,97.516],[15.371,98.701],[15.371,99.887],[15.371,101.073],[15.371,102.258],[15.371,103.444],[15.371,104.629],[15.371,105.815],[15.371,107.001],[15.371,108.186],[15.371,109.372],[15.371,110.558],[15.371,111.743],[15.371,112.929],[15.361,114.114],[15.265,115.3],[14.943,116.486],[14.302,117.635],[13.353,118.62],[12.235,119.323],[11.052,119.698],[9.866,119.813],[8.68,119.835],[7.495,119.856],[6.309,119.901],[5.124,119.946],[3.938,119.958],[2.752,119.958],[1.567,119.948],[.381,119.897]]}],tri:{area:542.7,centroid:[4.408,.118],pts:[[-2.159,14.84],[-2.414,14.793],[-2.668,14.725],[-2.922,14.635],[-3.174,14.533],[-3.422,14.414],[-3.665,14.279],[-3.904,14.127],[-4.137,13.959],[-4.359,13.78],[-4.568,13.59],[-4.766,13.389],[-4.952,13.176],[-5.127,12.95],[-5.289,12.715],[-5.436,12.472],[-5.57,12.226],[-5.688,11.977],[-5.79,11.729],[-5.876,11.475],[-5.953,11.221],[-6.021,10.967],[-6.076,10.713],[-6.119,10.459],[-6.157,10.205],[-6.191,9.951],[-6.219,9.697],[-6.241,9.442],[-6.258,9.188],[-6.271,8.934],[-6.283,8.68],[-6.29,8.426],[-6.296,8.172],[-6.302,7.918],[-6.307,7.664],[-6.309,7.41],[-6.309,7.156],[-6.309,6.902],[-6.309,6.648],[-6.309,6.394],[-6.309,6.14],[-6.309,5.886],[-6.309,5.632],[-6.309,5.378],[-6.309,5.124],[-6.309,4.869],[-6.309,4.615],[-6.309,4.361],[-6.309,4.107],[-6.309,3.853],[-6.309,3.599],[-6.309,3.345],[-6.309,3.091],[-6.309,2.837],[-6.309,2.583],[-6.309,2.329],[-6.309,2.075],[-6.309,1.821],[-6.309,1.567],[-6.309,1.313],[-6.309,1.059],[-6.309,.805],[-6.309,.55],[-6.309,.296],[-6.309,.042],[-6.309,-.212],[-6.309,-.466],[-6.309,-.72],[-6.309,-.974],[-6.309,-1.228],[-6.309,-1.482],[-6.309,-1.736],[-6.309,-1.99],[-6.309,-2.244],[-6.309,-2.498],[-6.309,-2.752],[-6.309,-3.006],[-6.309,-3.26],[-6.309,-3.514],[-6.309,-3.769],[-6.309,-4.023],[-6.309,-4.277],[-6.309,-4.531],[-6.309,-4.785],[-6.309,-5.039],[-6.309,-5.293],[-6.309,-5.547],[-6.309,-5.801],[-6.309,-6.055],[-6.309,-6.309],[-6.309,-6.563],[-6.309,-6.817],[-6.309,-7.071],[-6.309,-7.325],[-6.303,-7.579],[-6.298,-7.833],[-6.292,-8.088],[-6.285,-8.342],[-6.273,-8.596],[-6.258,-8.85],[-6.241,-9.104],[-6.219,-9.358],[-6.194,-9.612],[-6.164,-9.866],[-6.13,-10.12],[-6.089,-10.374],[-6.04,-10.628],[-5.978,-10.882],[-5.904,-11.136],[-5.82,-11.39],[-5.724,-11.644],[-5.611,-11.898],[-5.483,-12.151],[-5.342,-12.397],[-5.187,-12.636],[-5.018,-12.866],[-4.837,-13.088],[-4.642,-13.299],[-4.435,-13.496],[-4.215,-13.682],[-3.985,-13.852],[-3.746,-14.004],[-3.503,-14.14],[-3.255,-14.258],[-3.006,-14.36],[-2.752,-14.445],[-2.498,-14.512],[-2.244,-14.565],[-1.99,-14.603],[-1.736,-14.627],[-1.482,-14.638],[-1.228,-14.633],[-.974,-14.612],[-.72,-14.582],[-.466,-14.535],[-.212,-14.478],[.042,-14.413],[.296,-14.337],[.55,-14.253],[.805,-14.157],[1.059,-14.048],[1.313,-13.929],[1.567,-13.803],[1.821,-13.669],[2.075,-13.532],[2.329,-13.391],[2.583,-13.248],[2.837,-13.103],[3.091,-12.95],[3.345,-12.802],[3.599,-12.653],[3.853,-12.504],[4.107,-12.35],[4.361,-12.196],[4.615,-12.047],[4.869,-11.904],[5.124,-11.759],[5.378,-11.612],[5.632,-11.467],[5.886,-11.319],[6.14,-11.166],[6.394,-11.018],[6.648,-10.873],[6.902,-10.73],[7.156,-10.583],[7.41,-10.436],[7.664,-10.291],[7.918,-10.15],[8.172,-10.007],[8.426,-9.86],[8.68,-9.713],[8.934,-9.565],[9.188,-9.414],[9.442,-9.264],[9.697,-9.119],[9.951,-8.976],[10.205,-8.829],[10.459,-8.678],[10.713,-8.532],[10.967,-8.387],[11.221,-8.24],[11.475,-8.089],[11.729,-7.943],[11.983,-7.798],[12.237,-7.649],[12.491,-7.498],[12.745,-7.354],[12.999,-7.211],[13.253,-7.069],[13.507,-6.924],[13.761,-6.78],[14.016,-6.635],[14.27,-6.49],[14.524,-6.343],[14.778,-6.196],[15.032,-6.053],[15.286,-5.908],[15.54,-5.761],[15.794,-5.615],[16.048,-5.47],[16.302,-5.325],[16.556,-5.178],[16.81,-5.031],[17.064,-4.881],[17.318,-4.725],[17.572,-4.568],[17.826,-4.408],[18.077,-4.245],[18.323,-4.073],[18.564,-3.895],[18.799,-3.706],[19.027,-3.514],[19.245,-3.315],[19.452,-3.108],[19.646,-2.895],[19.827,-2.675],[19.996,-2.447],[20.152,-2.212],[20.294,-1.971],[20.418,-1.729],[20.525,-1.48],[20.615,-1.228],[20.687,-.974],[20.741,-.72],[20.783,-.466],[20.807,-.212],[20.821,.042],[20.821,.296],[20.807,.55],[20.779,.805],[20.736,1.059],[20.674,1.313],[20.591,1.567],[20.489,1.821],[20.371,2.073],[20.235,2.319],[20.083,2.56],[19.919,2.796],[19.742,3.023],[19.55,3.242],[19.347,3.454],[19.129,3.663],[18.899,3.865],[18.66,4.058],[18.415,4.243],[18.165,4.42],[17.911,4.591],[17.657,4.753],[17.403,4.907],[17.149,5.056],[16.895,5.206],[16.641,5.353],[16.387,5.498],[16.133,5.645],[15.879,5.795],[15.625,5.942],[15.371,6.085],[15.116,6.23],[14.862,6.375],[14.608,6.52],[14.354,6.663],[14.1,6.808],[13.846,6.955],[13.592,7.101],[13.338,7.246],[13.084,7.391],[12.83,7.54],[12.576,7.689],[12.322,7.835],[12.068,7.982],[11.814,8.133],[11.56,8.281],[11.306,8.428],[11.052,8.575],[10.797,8.725],[10.543,8.878],[10.289,9.027],[10.035,9.175],[9.781,9.324],[9.527,9.476],[9.273,9.625],[9.019,9.772],[8.765,9.919],[8.511,10.062],[8.257,10.203],[8.003,10.344],[7.749,10.491],[7.495,10.637],[7.241,10.782],[6.987,10.925],[6.733,11.07],[6.478,11.213],[6.224,11.356],[5.97,11.501],[5.716,11.646],[5.462,11.793],[5.208,11.938],[4.954,12.083],[4.7,12.233],[4.446,12.386],[4.192,12.534],[3.938,12.681],[3.684,12.828],[3.43,12.977],[3.176,13.124],[2.922,13.268],[2.668,13.417],[2.414,13.564],[2.159,13.705],[1.905,13.839],[1.651,13.967],[1.397,14.093],[1.143,14.215],[.889,14.332],[.635,14.437],[.381,14.535],[.127,14.622],[-.127,14.699],[-.381,14.765],[-.635,14.817],[-.889,14.855],[-1.143,14.876],[-1.397,14.883],[-1.651,14.881],[-1.905,14.868]]},holes:[[3.464,-114],[6.928,-112],[90.067,-64],[93.531,-62],[0,-112],[3.464,-110],[6.928,-108],[86.603,-62],[90.067,-60],[93.531,-58],[0,-108],[3.464,-106],[6.928,-104],[83.138,-60],[86.603,-58],[90.067,-56],[0,-104],[3.464,-102],[6.928,-100],[79.674,-58],[83.138,-56],[86.603,-54],[0,-100],[3.464,-98],[6.928,-96],[76.21,-56],[79.674,-54],[83.138,-52],[0,-96],[3.464,-94],[6.928,-92],[72.746,-54],[76.21,-52],[79.674,-50],[0,-92],[3.464,-90],[6.928,-88],[69.282,-52],[72.746,-50],[76.21,-48],[0,-88],[3.464,-86],[6.928,-84],[65.818,-50],[69.282,-48],[72.746,-46],[0,-84],[3.464,-82],[6.928,-80],[62.354,-48],[65.818,-46],[69.282,-44],[0,-80],[3.464,-78],[6.928,-76],[58.89,-46],[62.354,-44],[65.818,-42],[0,-76],[3.464,-74],[6.928,-72],[55.426,-44],[58.89,-42],[62.354,-40],[0,-72],[3.464,-70],[6.928,-68],[10.392,-66],[51.962,-42],[55.426,-40],[58.89,-38],[0,-68],[3.464,-66],[6.928,-64],[10.392,-62],[48.497,-40],[51.962,-38],[55.426,-36],[0,-64],[3.464,-62],[6.928,-60],[10.392,-58],[45.033,-38],[48.497,-36],[51.962,-34],[0,-60],[3.464,-58],[6.928,-56],[10.392,-54],[13.856,-52],[38.105,-38],[41.569,-36],[45.033,-34],[48.497,-32],[0,-56],[3.464,-54],[6.928,-52],[10.392,-50],[13.856,-48],[17.321,-46],[20.785,-44],[24.249,-42],[27.713,-40],[31.177,-38],[34.641,-36],[38.105,-34],[41.569,-32],[45.033,-30],[0,-52],[3.464,-50],[6.928,-48],[10.392,-46],[13.856,-44],[17.321,-42],[20.785,-40],[24.249,-38],[27.713,-36],[31.177,-34],[34.641,-32],[38.105,-30],[41.569,-28],[0,-48],[3.464,-46],[6.928,-44],[10.392,-42],[13.856,-40],[17.321,-38],[20.785,-36],[24.249,-34],[27.713,-32],[31.177,-30],[34.641,-28],[38.105,-26],[-93.531,-54],[-90.067,-52],[-86.603,-50],[-83.138,-48],[-79.674,-46],[-76.21,-44],[-72.746,-42],[-69.282,-40],[-65.818,-38],[-62.354,-36],[-58.89,-34],[-55.426,-32],[-51.962,-30],[-48.497,-28],[-45.033,-26],[-41.569,-24],[-38.105,-22],[-34.641,-20],[-93.531,-50],[-90.067,-48],[-86.603,-46],[-83.138,-44],[-79.674,-42],[-76.21,-40],[-72.746,-38],[-69.282,-36],[-65.818,-34],[-62.354,-32],[-58.89,-30],[-55.426,-28],[-51.962,-26],[-48.497,-24],[-45.033,-22],[-41.569,-20],[-38.105,-18],[-34.641,-16],[38.105,26],[41.569,28],[45.033,30],[48.497,32],[51.962,34],[55.426,36],[58.89,38],[62.354,40],[65.818,42],[69.282,44],[72.746,46],[76.21,48],[79.674,50],[83.138,52],[86.603,54],[90.067,56],[93.531,58],[-96.995,-48],[-93.531,-46],[-90.067,-44],[-86.603,-42],[-83.138,-40],[-79.674,-38],[-76.21,-36],[-72.746,-34],[-69.282,-32],[-65.818,-30],[-62.354,-28],[-58.89,-26],[-55.426,-24],[-51.962,-22],[-48.497,-20],[-45.033,-18],[-41.569,-16],[-38.105,-14],[-34.641,-12],[34.641,28],[38.105,30],[41.569,32],[45.033,34],[48.497,36],[51.962,38],[55.426,40],[58.89,42],[62.354,44],[65.818,46],[69.282,48],[72.746,50],[76.21,52],[79.674,54],[83.138,56],[86.603,58],[90.067,60],[93.531,62],[-48.497,-16],[-45.033,-14],[-41.569,-12],[-38.105,-10],[-34.641,-8],[31.177,30],[34.641,32],[38.105,34],[41.569,36],[45.033,38],[48.497,40],[51.962,42],[55.426,44],[58.89,46],[62.354,48],[65.818,50],[69.282,52],[72.746,54],[76.21,56],[79.674,58],[83.138,60],[86.603,62],[90.067,64],[-45.033,-10],[-41.569,-8],[-38.105,-6],[-34.641,-4],[27.713,32],[31.177,34],[34.641,36],[38.105,38],[-41.569,-4],[-38.105,-2],[-34.641,0],[24.249,34],[27.713,36],[31.177,38],[-41.569,0],[-38.105,2],[-34.641,4],[20.785,36],[24.249,38],[27.713,40],[-41.569,4],[-38.105,6],[-34.641,8],[17.321,38],[20.785,40],[24.249,42],[-41.569,8],[-38.105,10],[-34.641,12],[13.856,40],[17.321,42],[20.785,44],[-45.033,10],[-41.569,12],[-38.105,14],[-34.641,16],[10.392,42],[13.856,44],[17.321,46],[-45.033,14],[-41.569,16],[-38.105,18],[-34.641,20],[6.928,44],[10.392,46],[13.856,48],[-45.033,18],[-41.569,20],[-38.105,22],[3.464,46],[6.928,48],[10.392,50],[13.856,52],[-48.497,20],[-45.033,22],[-41.569,24],[3.464,50],[6.928,52],[10.392,54],[-51.962,22],[-48.497,24],[-45.033,26],[0,52],[3.464,54],[6.928,56],[10.392,58],[-55.426,24],[-51.962,26],[-48.497,28],[0,56],[3.464,58],[6.928,60],[10.392,62],[-58.89,26],[-55.426,28],[-51.962,30],[0,60],[3.464,62],[6.928,64],[-62.354,28],[-58.89,30],[-55.426,32],[0,64],[3.464,66],[6.928,68],[-65.818,30],[-62.354,32],[-58.89,34],[0,68],[3.464,70],[6.928,72],[-69.282,32],[-65.818,34],[-62.354,36],[0,72],[3.464,74],[6.928,76],[-72.746,34],[-69.282,36],[-65.818,38],[0,76],[3.464,78],[6.928,80],[-76.21,36],[-72.746,38],[-69.282,40],[0,80],[3.464,82],[6.928,84],[-79.674,38],[-76.21,40],[-72.746,42],[0,84],[3.464,86],[6.928,88],[-83.138,40],[-79.674,42],[-76.21,44],[0,88],[3.464,90],[6.928,92],[-86.603,42],[-83.138,44],[-79.674,46],[0,92],[3.464,94],[6.928,96],[-90.067,44],[-86.603,46],[-83.138,48],[0,96],[3.464,98],[6.928,100],[-93.531,46],[-90.067,48],[-86.603,50],[0,100],[3.464,102],[6.928,104],[-96.995,48],[-93.531,50],[-90.067,52],[0,104],[3.464,106],[6.928,108],[-93.531,54],[0,108],[3.464,110],[6.928,112],[0,112],[3.464,114]]};var gf={fov:62,cam:[0,-150,1e3],look:[0,-150,0],p:{hero:[[0,40,0],1.75],p2:[[-175,420,-420],1],p3:[[185,390,-520],.95],p4:[[185,-235,-420],.9],p5:[[-185,-195,-160],.75]}};var vf={releases:[{code:"AU0125",artist:"AURALITY",participantes:[],title:"aurality archives vol. 1",edicion:!0,format:"REMIXES",genre:"REMIX",year:2025,fecha:"2025-11-30",presave:"",fragmentos:[],destacado:!1,cover:"/covers/saveclip.app_587700334_18086309051095107_7291393043367421422_n-1.webp",soundcloud:"https://soundcloud.com/aurality-group/sets/aurality-archives-vol-1",fragmento:"",spotify:"",bandcamp:"",historia:"aurality archives es un recopilatorio que re\xFAne los remixes y mashups creados por los productores del colectivo a lo largo del \xFAltimo a\xF1o. Una colecci\xF3n que funciona como bit\xE1cora sonora de nuestro laboratorio interno: reinterpretaciones, ejercicios de estilo y relecturas que exploran la frontera entre el reggaet\xF3n, el hip-hop y la electr\xF3nica contempor\xE1nea. Un archivo vivo que refleja c\xF3mo dialogamos con la cultura club, el perreo, el sampleo y la energ\xEDa h\xEDbrida que define nuestra identidad creativa.",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM \xB7 UFISI \xB7 MXNCHV"},{rol:"ARTE",nombre:"CUTEXICO"}],tracks:["do you remember xiyo y fernandezz aurality remix (prod. Paranoid Realm)","children x toyota aurality remix (prod. Paranoid Realm)","olympique hoke \xE9bano louis amoeba aurality remix (prod. mxnchv)","mercadona x sin ti aurality mashup (prod. Ufisi)","blam blam cosculluela rompediskotekas aurality remix (prod. Ufisi)","taylor swift i knew you were trouble aurality remix (prod. mxnchv)","bery jr ski ski aurality remix (prod. Ufisi)","soniquete aurality remix (prod. Paranoid Realm)","icy vedo mr bag vedo aurality remix (prod. Ufisi)","limonada coco aurality remix (prod. Paranoid Realm)","infierno x more aurality mashup (yung beef x zion x kerry x jory boy) (prod. Ufisi)","bajo la luna xiyo y fernandezz electro aurality remix (prod. Ufisi)","mushka habibi x una vaina loca aurality remix (prod. Ufisi)","justin bieber company aurality remix (prod. Paranoid Realm)","bad bunny pa que le de reggaeton aurality remix (prod. Ufisi)","hotline bling aurality remix (prod. mxnchv)","chulo bad gyal hard techno aurality remix (prod. Paranoid Realm y Chico Liotta)"]},{code:"AU0342",artist:"AURALITY x PARANOID REALM",participantes:[],title:"do you remember xiyo y fernandezz aurality remix",edicion:!0,format:"SINGLE",genre:"",year:2025,fecha:"2025-11-18",presave:"",fragmentos:[],destacado:!1,cover:"/covers/do-you-remember-xiyo-y-fernandezz-aurality-remix-prod.-paranoid-realm-cover.webp",soundcloud:"https://soundcloud.com/aurality-group/do-you-remember-xiyo-y-fernandezz-aurality-remix-prod-paranoid-realm-85bpm-emin",fragmento:"",spotify:"",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:[]},{code:"AU0123",artist:"941SONE x PARANOID REALM",participantes:[{artista:"PARANOID REALM",rol:"PRODUCCI\xD3N"}],title:"SHORY DE GIMNASIA",edicion:!1,format:"SINGLE",genre:"JERK",year:2026,fecha:"2026-07-30",presave:"",fragmentos:[],destacado:!1,cover:"/covers/saveclip.app_760147604_18607201774028034_1024075395652998516_n.webp",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/7F4zyae5oT4OrsaCQK8p0L?si=chkvMg9DTbOih7-no4NzQQ",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:""},{rol:"M\xC1STER",nombre:""},{rol:"ARTE",nombre:""}],tracks:[]},{code:"AU0111",artist:"PARANOID REALM",participantes:[{artista:"UFISI",rol:"CO-PRODUCCI\xD3N \xB7 TIEMPOS Y ALL ALONE WITH YOU"}],title:"ESTIU 2025: EDICI\xD3 COSTA BRAVA",edicion:!1,format:"REMIXES",genre:"REMIXES",year:2025,fecha:"2025-08-18",presave:"",fragmentos:[],destacado:!1,cover:"/covers/saveclip.app_532661953_18302911807221429_400752346296299478_n-1.webp",soundcloud:"https://soundcloud.com/paranoidrealm/sets/estiu-2025-edicio-costa-brava",fragmento:"",spotify:"",bandcamp:"",historia:`De peque\xF1o mis veranos eran siempre los mismos: coche hasta Tossa de Mar, CD del Caribe Mix 2004 rayado en la guantera y yo mirando por la ventana las luces de Lloret.

A\xF1os despu\xE9s he querido transformar todos esos recuerdos en m\xFAsica. As\xED nace esta mixtape de remixes: un homenaje a la Costa Brava y a todo lo que marc\xF3 nuestra infancia.

Estos remixes traen sonidos, ritmos, texturas y colores actuales y vanguardistas, pero manteniendo la vibra de viajes en coche con el aire a tope, olor a salitre y a crema solar y noches que duran hasta que alguien dice \u201Cva, el \xFAltimo y nos vamos\u201D.`,video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["Farruko, Music\xF3logo, Menes - Tiempos (Paranoid Realm & Ufisi Remix)","ladiferencia2006, Juanma! - encima (Paranoid Realm Remix)","Daddy Yankee - La Despedida (Paranoid Realm Remix)","EGOIST- All Alone With You (Paranoid Realm & Ufisi Remix)","LOWLIGHT, Bad Gyal, Demaro Small - Commotion (Paranoid Realm Remix)","Diego 900 - T4 Barajas (Paranoid Realm Remix)"]},{code:"AU0110",artist:"PARANOID REALM",participantes:[],title:"LA ESPA\xD1A VACIADA",edicion:!1,format:"REMIXES",genre:"REMIXES",year:2026,fecha:"2026-05-04",presave:"",fragmentos:[],destacado:!1,cover:"/covers/1-levportada.webp",soundcloud:"https://soundcloud.com/paranoidrealm/sets/la-espana-vaciada",fragmento:"",spotify:"",bandcamp:"",historia:"La Espa\xF1a Vaciada es un EP de remixes que toma la idea del \xE9xodo rural y la traslada a la m\xFAsica. Mientras gran parte de la escena urbana tiende a concentrarse en f\xF3rmulas que funcionan y sonidos cada vez m\xE1s parecidos entre s\xED, este proyecto se sit\xFAa fuera de ese flujo. Parte de la decisi\xF3n de no seguir ese camino y trabajar desde otro lugar: m\xE1s lento, m\xE1s t\xE9cnico y m\xE1s centrado en el sonido y la identidad propia.",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM \xB7 MXNCHV"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["Diego 900 - Dam (Paranoid Realm Remix)","mvrk - YOTMB (Paranoid Realm Remix)","Juicy Bae, TAICHU, PMP - Rojo Sangre (Paranoid Realm & mxnchv Remix)","Claudio Montana - 55 Rayuelas (Paranoid Realm Remix)"]},{code:"AU0212",artist:"PARANOID REALM",participantes:[],title:"ESTIU 2026: EDICI\xD3 SAINT-TROPEZ",edicion:!1,format:"REMIXES",genre:"CLUB",year:2026,fecha:"2026-08-05",presave:"",fragmentos:[],destacado:!0,cover:"covers/AU0212.jpg",soundcloud:"https://soundcloud.com/paranoidrealm/sets/estiu-2026-edicio-saint-tropez",fragmento:"",spotify:"",bandcamp:"",historia:`ESTIU es una mixtape anual de remixes concebida como un viaje sonoro a un territorio concreto. Cada edici\xF3n se traslada a un lugar con una identidad musical propia \u2014una ciudad, una regi\xF3n o un enclave cultural\u2014 para investigar c\xF3mo la m\xFAsica electr\xF3nica ha dialogado con su historia, su cultura popular y sus clubes. Los vinilos se convierten en la materia prima de cuatro remixes originales, compuestos exclusivamente a partir de samples extra\xEDdos de esos discos.

En la edici\xF3n 2026 viajamos a Francia, cuna del French Touch: una corriente surgida a finales de los 90 que mezcla house y disco con producci\xF3n basada en samples y filtros; sus referentes clave incluyen a Daft Punk, Air, \xC9tienne de Cr\xE9cy, Cassius, DJ Mehdi, Justice y Busy P (Pedro Winter) \u2014 s/o Ed Banger \u2014 mientras el imaginario visual recorre la Riviera, el cine, el deporte, la moda y el patrimonio cultural del pa\xEDs. El resultado no pretende representar Francia, sino reinterpretar una de sus identidades sonoras m\xE1s influyentes desde el lenguaje del sample y la cultura del remix.`,video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["Nico Miseria, alba calva - EL CORAZ\xD3N MANDA (Paranoid Realm Remix)","Guxo - CEO (Paranoid Realm Remix)","caos! - kim k (Paranoid Realm Remix)","Ralphie Choo, Barry B, DRUMMIE - ROOKIES (Paranoid Realm Remix)"]},{code:"AU0211",artist:"TRANKILOTE EL KILATE x PARANOID REALM",participantes:[],title:"VAYVIENE",edicion:!1,format:"SINGLE",genre:"RAP",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/vayviene-portada.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/track/0GEkQXoWJTEJToBNLqSdHN?si=54344f43d01241a0",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:[]},{code:"AU0210",artist:"PARANOID REALM",participantes:[],title:"NEW JERK",edicion:!1,format:"EP",genre:"JERK",year:2025,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/newjerk-portada.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/1PeJBkR4vvxYp1i0GM8RB6?si=UwCN7MlaRq6_rAnpQMlSyw",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["PARANOID REALM, UNOMAEL - TENGO TODO","PARANOID REALM, UFISI - TELAS DE DISE\xD1ADOR","PARANOID REALM, TRANKILOTE EL KILATE - PICK UP THE PHONE","PARANOID REALM, SHAY B - HYPERACID","PARANOID REALM, UFISI - DEO JUVANTE","PARANOID REALM, SHAY B - BBQ"]},{code:"AU0209",artist:"ANY1N3 x UFISI",participantes:[],title:"EL CIELO QUE NOS QUEDA",edicion:!1,format:"SINGLE",genre:"LOGOBI",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!0,cover:"covers/portada_3000x3000.jpg.jpeg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/3i9pZTYe7QaxsdXWBb9Yha?si=f07fd7a20cdc4eb1",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"UFISI"},{rol:"MEZCLA",nombre:""},{rol:"M\xC1STER",nombre:""},{rol:"ARTE",nombre:""}],tracks:[]},{code:"AU0205",artist:"ANY1N3 \xD7 PARANOID REALM",participantes:[],title:"ROTOR BRAKE RELEASE",edicion:!1,format:"EP",genre:"DUBSTEP",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/rbr-portada.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/12asQkQ16JdNEZzbEXS5iq?si=ZxGrrLFpSTy0f4NcakFcMA",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:""}],tracks:["ANY1N3, PARANOID REALM - ANY","ANY1N3, PARANOID REALM - DURANKI","ANY1N3, PARANOID REALM - EOLIC DUB","ANY1N3, PARANOID REALM - GLITCH IN THE NACELLE"]},{code:"AU0204",artist:"C.EME",participantes:[{artista:"UFISI",rol:"PRODUCCI\xD3N \xB7 CLOSEFRIENDS\u2606, PETER PARKER Y UBER"}],title:"SUPERSEXYDRILL",edicion:!1,format:"EP",genre:"SEXY DRILL",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/delete.jpeg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/4tJx2RpRQPpbg3bO3XkTqN?si=qHIT0-ymSDW5hZ6JIcJnnA",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"UFISI"}],tracks:["C.EME, SHODA MONKAS - CLOSEFRIENDS\u2606","C.EME, SARA VERA - PETER PARKER","C.EME - UBER"]},{code:"AU0202",artist:"ANY1N3",participantes:[],title:"OTRA L\xC1GRIMA",edicion:!1,format:"SINGLE",genre:"PLUGGNB",year:2025,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/otra-lagrima-definitivojpg.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/track/0upi8DNB3ElXbbljzPfNl9?si=81afb9f6f6e3467a",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM \xB7 SUI \xB7 YIIO \xB7 XHARLIE"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"CUTEXICO"}],tracks:[]},{code:"AU0201",artist:"TRANKILOTE EL KILATE x PARANOID REALM",participantes:[],title:"EL PALACIO DE LA MEMORIA",edicion:!1,format:"\xC1LBUM",genre:"RAP",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!0,cover:"covers/palaciomemoria2.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/4kQ2nMyoE94xDQdr5OiEYn?si=Fq36lBzjSN69oypH__Bxlg",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM \xB7 WAX"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["PARANOID REALM, ALBA CALVA - ADOLIN","TRANKILOTE EL KILATE, PARANOID REALM - KRAINT SAINT","TRANKILOTE EL KILATE, PARANOID REALM - BENDICE MI NOMBRE","TRANKILOTE EL KILATE, PARANOID REALM - LAYLA Y MAJN\xDAN","PARANOID REALM, WAX - DONDE MUERE LA LUZ"]},{code:"AU0200",artist:"UFISI",participantes:[],title:"INTENSITAT",edicion:!1,format:"SINGLE",genre:"REGGAETON",year:2024,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/delete2.jpeg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/0ht07dk2jiuSZOckxxFzuq?si=Ta0dL8m4RrmvhC-S2wWuHw",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"UFISI"}],tracks:[]}]};var xf={artists:[{name:"TRANKILOTE EL KILATE",role:"ARTISTA",bio:"",photo:"covers/dsc00394.jpg",instagram:"https://www.instagram.com/babypanchixoxo/",spotify:"https://open.spotify.com/intl-es/artist/4TZBjh3rOh4S5AZk9pzgkZ?si=JWAZsHifSv6mEZfcA-ba0A",soundcloud:""},{name:"PARANOID REALM",role:"DIRECTOR MUSICAL \xB7 PRODUCTOR",bio:"",photo:"",instagram:"https://www.instagram.com/paranoidrealm/",spotify:"https://open.spotify.com/intl-es/track/0GEkQXoWJTEJToBNLqSdHN?si=41f15bfc61264207",soundcloud:"https://soundcloud.com/paranoidrealm"},{name:"UFISI",role:"PRODUCTOR",bio:"",photo:"",instagram:"https://www.instagram.com/ufisi__/",spotify:"https://open.spotify.com/intl-es/artist/6cvbtmRKj4XLUIGygv1Yao?si=r_TQODlkRRCcEC42tZkdMQ",soundcloud:""},{name:"ANY1N3",role:"",bio:"",photo:"",instagram:"https://www.instagram.com/anyy1n3/",spotify:"https://open.spotify.com/intl-es/artist/40wD0x7OYWbz9UMcdMlP5g?si=Yb7JJ6-nQ8qx0Sk1vlkNaA",soundcloud:""}]};var _f={senal_playlist:"https://open.spotify.com/playlist/62bELlnb4xBNBX2etnHpB8",senal:[{code:"10_26",mes:10,anio:2026,cover:"senal/10_26.jpg",temas:null,duracion:"\u2248 1 h",descripcion:"Lanzamientos, hallazgos y obsesiones del mes. Una selecci\xF3n curada por aurality: m\xFAsica ajena que nos mira de cerca.",destacados:[{artista:"ALBERRRT",tema:"HAAT IST LIEFDE.",prod:""},{artista:"SLIKBACK",tema:"ANVIL",prod:""},{artista:"ROBERT DINERO",tema:"NEVERA",prod:"MYTO"},{artista:"METH MATH",tema:"",prod:""},{artista:"BAMBINODJ",tema:"",prod:""},{artista:"SWIPER",tema:"",prod:""},{artista:"DUNA",tema:"F.M.K.",prod:""},{artista:"1111",tema:"QUE ME BAILE",prod:""},{artista:"FLAKO NKO",tema:"",prod:""},{artista:"28MINIMAL",tema:"",prod:""}]}]};var yf={contacto:{email:"auralitygroup@gmail.com",instagram:"https://www.instagram.com/aurality/",nota:"Para demos, mejor un enlace privado que un archivo adjunto.",intro_demo:"",intro_contratacion:"",intro_prensa:""},editorial:null,kit:null,manifiesto:{titular:"Un sello no es un sonido. Es un criterio.",parrafos:["aurality no es un cat\xE1logo de artistas: es una l\xEDnea editorial. Lo que une a los proyectos que pasan por aqu\xED no es un g\xE9nero ni una est\xE9tica com\xFAn, sino una misma manera de entender la creaci\xF3n.","Por eso el nombre funciona como un aval. Aspiramos a que \xABeditado por aurality\xBB diga algo antes incluso de darle al play: que ah\xED hay una decisi\xF3n, un punto de vista, alguien que se ha jugado algo. No prometemos un sonido; prometemos un est\xE1ndar.","La vanguardia rara vez nace dentro de una escena; nace en los bordes, cuando dos que se ignoraban se tocan. La mayor\xEDa de las estructuras de la industria trabajan hacia dentro de un nicho, porque es m\xE1s c\xF3modo y m\xE1s medible. aurality se define por lo contrario: por su capacidad de juntar lo que nadie m\xE1s sabr\xEDa juntar. Existen escenas que hablan idiomas distintos pero comparten c\xF3digos subterr\xE1neos \u2014la misma relaci\xF3n con el riesgo, con la imagen, con lo digital, con la calle\u2014 y El sello act\xFAa ah\xED como traductor y como celestina: identifica esos parentescos invisibles y los pone en la misma habitaci\xF3n.","Por eso aspiramos a ser el lugar donde se juntan artistas que nadie m\xE1s sabr\xEDa juntar: la mano que tiende puentes entre escenas que hablan idiomas distintos pero comparten c\xF3digos y est\xE1n condenadas a entenderse aunque todav\xEDa no se hayan cruzado. Ese cruce no es una an\xE9cdota de reparto; es la tesis. La marca no colecciona artistas: provoca encuentros.","Cuando un artista entra en aurality, entra en una conversaci\xF3n m\xE1s amplia que su propia m\xFAsica. No acumulamos referencias: construimos un contexto. Cada lanzamiento es una frase dentro de un discurso m\xE1s largo, el de un sello que entiende la realidad como material y el aura como firma."],cierre:"La realidad como materia prima. El aura como identidad."}};window.__carga?.mark("motor","THREE.JS");document.getElementById("estatico")?.remove();var Af=["DO","DO\u266F","RE","MI\u266D","MI","FA","FA\u266F","SOL","LA\u266D","LA","SI\u266D","SI"],$x={lidio:[0,2,4,6,7,9,11],dorico:[0,2,3,5,7,9,10],eolico:[0,2,3,5,7,8,10],penta:[0,2,4,7,9],jonico:[0,2,4,5,7,9,11],frigio:[0,1,3,5,7,8,10]},Xx={lidio:"lidio",dorico:"d\xF3rico",eolico:"e\xF3lico",penta:"pentat\xF3nico",jonico:"j\xF3nico",frigio:"frigio"},Lc={aeropuerto:"bucles de aeropuerto",dron:"dron",kankyo:"kanky\u014D ongaku",analogico:"ambient anal\xF3gico",dub:"dub t\xE9cnico",garaje:"garage nocturno",perreo:"guayeteo inocente",trance:"ambient trance",rave:"garage rave",dnb:"ltj bukem amen break",galore:"arpegios acu\xE1ticos",triphop:"trip-hop"},mr=[["PANEL",53,"jonico","aeropuerto"],["NIEBLA",45,"eolico","dron"],["HORIZONTE",48,"lidio","kankyo"],["REJILLA",43,"dorico","analogico"],["CROMO",52,"eolico","dub"],["SINTON\xCDA",47,"eolico","garaje"],["ESCALA",44,"frigio","perreo"],["TESTIGO",45,"eolico","trance"],["PLETINA",49,"jonico","rave"],["RANURA",44,"dorico","dnb"],["GALORE",51,"jonico","galore"],["SE\xD1AL",42,"eolico","triphop"]],Qe=n=>440*Math.pow(2,(n-69)/12),ze=(n,e)=>n+Math.random()*(e-n),ot=n=>n[Math.floor(Math.random()*n.length)],Yx={aeropuerto:{seco:.35,sala:.95,cuarto:0,eco:.08,tono:6e3,nivel:1.33},dron:{seco:.45,sala:.85,cuarto:0,eco:0,tono:2600,nivel:.6},kankyo:{seco:.7,sala:.25,cuarto:.45,eco:.3,tono:9e3,nivel:.95},analogico:{seco:.72,sala:.22,cuarto:.38,eco:.14,tono:7500,nivel:.236},dub:{seco:.75,sala:.2,cuarto:.25,eco:.6,tono:2800,nivel:.275},garaje:{seco:.7,sala:.16,cuarto:.28,eco:0,tono:6200,nivel:.3},perreo:{seco:.75,sala:.14,cuarto:.22,eco:0,tono:9500,nivel:.39},trance:{seco:.75,sala:.12,cuarto:.2,eco:0,tono:11e3,nivel:.44},rave:{seco:.8,sala:.08,cuarto:.22,eco:0,tono:12e3,nivel:.29},dnb:{seco:.75,sala:.12,cuarto:.25,eco:0,tono:1e4,nivel:.36},galore:{seco:.75,sala:.12,cuarto:.22,eco:0,tono:11e3,nivel:.27},triphop:{seco:.75,sala:.14,cuarto:.3,eco:0,tono:8e3,nivel:.33}},zi=/iP(hone|ad|od)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||matchMedia("(pointer: coarse) and (hover: none)").matches,Pt=(()=>{let n=new Set,e=new Map,t=1,i=()=>{let s=performance.now();for(let[a,r]of e)if(s>=r.at){r.cada?r.at=s+r.cada:e.delete(a);try{r.f()}catch(o){console.error(o)}}n.forEach(a=>{try{a()}catch(r){console.error(r)}})};try{let s=new Worker(URL.createObjectURL(new Blob(["setInterval(function(){postMessage(0)},25)"],{type:"text/javascript"})));s.onmessage=i}catch{setInterval(i,25)}return{suma:s=>n.add(s),quita:s=>n.delete(s),espera:(s,a)=>{let r=t++;return e.set(r,{f:s,at:performance.now()+(a||0)}),r},cada:(s,a)=>{let r=t++;return e.set(r,{f:s,at:performance.now()+a,cada:a}),r},anula:s=>{e.delete(s)}}})(),Zx=Date.UTC(2026,9,1)/1e3,Iu=class{constructor(){this.canal=2,this.amb=2,this.on=!1,this.ctx=null,this.gen=null,this.cat=null}init(){let e=window.AudioContext||window.webkitAudioContext,t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=0,this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-18,this.comp.ratio.value=3,this.comp.attack.value=.02,this.comp.release.value=.4,this.analyser=t.createAnalyser(),this.analyser.fftSize=1024,this.buf=new Float32Array(this.analyser.fftSize),this.subida=t.createGain(),this.subida.gain.value=3.6,this.limite=t.createDynamicsCompressor(),this.limite.threshold.value=-4,this.limite.knee.value=0,this.limite.ratio.value=20,this.limite.attack.value=.002,this.limite.release.value=.15,this.senal=t.createGain(),this.master.connect(this.senal),this.senal.connect(this.comp),this.comp.connect(this.subida),this.subida.connect(this.limite),this.limite.connect(this.analyser),this.analyser.connect(t.destination);let i=(l,u)=>{let d=t.sampleRate*l,h=t.createBuffer(2,d,t.sampleRate);for(let f=0;f<2;f++){let g=h.getChannelData(f);for(let y=0;y<d;y++)g[y]=(Math.random()*2-1)*Math.pow(1-y/d,u)}return h};this.sala=t.createConvolver(),this.sala.buffer=i(7,2.6),this.sala.connect(this.master),this.cuarto=t.createConvolver(),this.cuarto.buffer=i(1.6,3.2),this.cuarto.connect(this.master),this.eco=t.createDelay(3),this.eco.delayTime.value=.42;let s=t.createGain();s.gain.value=.42;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=2600,this.eco.connect(a),a.connect(s),s.connect(this.eco),a.connect(this.master),a.connect(this.sala);let r=t.createBuffer(1,t.sampleRate*3,t.sampleRate),o=r.getChannelData(0);for(let l=0;l<o.length;l++)o[l]=Math.random()*2-1;this.ruido=r,this.estFino=t.createGain(),this.estFino.gain.value=0,this.estBp=t.createBiquadFilter(),this.estBp.type="bandpass",this.estBp.frequency.value=1700,this.estBp.Q.value=.6;let c=t.createBufferSource();c.buffer=r,c.loop=!0,c.connect(this.estBp),this.estBp.connect(this.estFino),this.estFino.connect(this.comp),c.start(),this.txG=t.createGain(),this.txG.gain.value=0,this.txHp=t.createBiquadFilter(),this.txHp.type="highpass",this.txHp.frequency.value=600,this.txLp=t.createBiquadFilter(),this.txLp.type="lowpass",this.txLp.frequency.value=2400,this.txHp.connect(this.txLp),this.txLp.connect(this.txG),this.txG.connect(this.comp)}txPrepara(){if(this.txEl||!this.ctx)return;let e=this.txEl=new Audio;e.loop=!0,e.preload="auto",e.setAttribute("playsinline",""),e.src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=";let t=e.play();t&&t.then(()=>e.pause()).catch(()=>{});try{this.txSrc=this.ctx.createMediaElementSource(e),this.txSrc.connect(this.txHp)}catch{}}ajustaFino(e){if(!this.ctx)return;let t=this.ctx.currentTime,i=this.on;if(this.senal.gain.setTargetAtTime(i?e.senal:1,t,.05),this.estFino.gain.setTargetAtTime(i?e.ruido:0,t,.05),this.estBp.frequency.setTargetAtTime(900+e.f*160,t,.08),e.tx&&i){this.txPrepara();let s=this.txEl;if(clearTimeout(this.txOff),this.txId!==e.tx.id&&(this.txId=e.tx.id,s.src="/tx/a/"+encodeURIComponent(e.tx.id),s.currentTime=0),s.paused){let a=s.play();a&&a.catch(()=>{})}this.txG.gain.setTargetAtTime(e.txNivel,t,.06),this.txHp.frequency.setTargetAtTime(e.claro?20:650,t,.12),this.txLp.frequency.setTargetAtTime(e.claro?18e3:2200,t,.12)}else this.txG.gain.setTargetAtTime(0,t,.15),this.txEl&&!this.txEl.paused&&(clearTimeout(this.txOff),this.txOff=setTimeout(()=>this.txEl.pause(),900))}nuevaGen(e){let t=this.ctx,i=Yx[e],s=t.currentTime,a={estilo:e,vivo:!0,timers:[],inter:null,nodos:[]};if(a.fader=t.createGain(),a.fader.gain.setValueAtTime(0,s),a.fader.gain.linearRampToValueAtTime(i.nivel,s+3.5),a.tono=t.createBiquadFilter(),a.tono.type="lowpass",a.tono.frequency.value=i.tono,a.tono.Q.value=.2,a.salidas=[],e==="analogico"||e==="garaje"||e==="perreo"||e==="triphop"){let r=t.createWaveShaper(),o=new Float32Array(1024);for(let c=0;c<1024;c++){let l=c/511.5-1;o[c]=Math.tanh(1.8*l)/Math.tanh(1.8)}r.curve=o,r.oversample="2x",a.fader.connect(r),r.connect(a.tono),a.nodos.push(r)}else a.fader.connect(a.tono);return[["seco",this.master],["sala",this.sala],["cuarto",this.cuarto],["eco",this.eco]].forEach(([r,o])=>{if(!i[r])return;let c=t.createGain();c.gain.value=i[r],a.tono.connect(c),c.connect(o),a.nodos.push(c)}),a.nodos.push(a.fader,a.tono),a}matarGen(e,t=2.5){if(!e)return;e.vivo=!1,e.timers.forEach(clearTimeout),clearInterval(e.inter),e.tic&&Pt.quita(e.tic),e.cola=[];let i=this.ctx.currentTime;[e.fader,...e.salidas||[]].forEach(s=>{s.gain.cancelScheduledValues(i),s.gain.setValueAtTime(s.gain.value,i),s.gain.linearRampToValueAtTime(0,i+t)}),setTimeout(()=>e.nodos.forEach(s=>{try{s.disconnect()}catch{}}),(t+10)*1e3)}luego(e,t,i){(e.cola||(e.cola=[])).push([this.ctx.currentTime+t,i]),this.vigila(e)}vigila(e){e.tic||(e.tic=()=>{if(!e.vivo){Pt.quita(e.tic);return}let t=this.ctx.currentTime;if(e.cola&&e.cola.length){let i=e.cola.filter(s=>s[0]<=t);i.length&&(e.cola=e.cola.filter(s=>s[0]>t),i.forEach(([,s])=>{e.vivo&&this.on&&s()}))}e.paso&&e.paso()},Pt.suma(e.tic))}secuenciador(e,t,i){let s=this.ctx,a=60/t/4,r=Zx+this.amb*61.7,o=Date.now()/1e3,c=Math.ceil((o+.12-r)/a/16)*16,l=s.currentTime+(r+c*a-o);e.primero=!0,e.paso=()=>{let u=s.currentTime,d=document.hidden?1.2:.35;if(l<u-.25){let h=Math.ceil((u+.05-l)/a);c+=h,l+=h*a}for(;l<u+d;)i(c,Math.max(l,u),a),e.primero=!1,c++,l+=a},this.vigila(e)}nota(e,t=0){let[,i,s]=mr[this.amb],a=$x[s],r=a.length,o=Math.floor(e/r);return i+a[(e%r+r)%r]+12*(o+t)}env(e,t,i,s,a,r){e.gain.setValueAtTime(0,t),e.gain.linearRampToValueAtTime(s,t+i),a&&e.gain.setValueAtTime(s,t+i+a),e.gain.linearRampToValueAtTime(1e-4,r)}pad(e,t,i,s,a={}){let r=this.ctx,o=a.att??4,c=a.rel??6,l=a.gain??.04,u=r.createBiquadFilter();u.type="lowpass",u.Q.value=.5,u.frequency.setValueAtTime((a.corte??1200)*.4,i),u.frequency.linearRampToValueAtTime(a.corte??1200,i+o+1);let d=r.createGain();this.env(d,i,o,l,Math.max(0,s-o-c),i+s+c),u.connect(d),d.connect(e.fader),t.forEach(h=>[-7,7].forEach(f=>{let g=r.createOscillator();g.type=a.onda||"sawtooth",g.frequency.value=Qe(h),g.detune.value=f+ze(-3,3),e.vaiven&&e.vaiven.connect(g.detune),g.connect(u),g.start(i),g.stop(i+s+c+.1)}))}fm(e,t,i,s={}){let a=this.ctx,r=Qe(t),o=s.dec??1.6,c=s.gain??.05,l=a.createOscillator(),u=a.createOscillator(),d=a.createGain(),h=a.createGain();if(l.frequency.value=r,u.frequency.value=r*(s.ratio??2),d.gain.setValueAtTime(r*(s.indice??1.5),i),d.gain.exponentialRampToValueAtTime(r*.01+.01,i+o*.5),h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(c,i+(s.att??.004)),h.gain.exponentialRampToValueAtTime(1e-4,i+o),u.connect(d),d.connect(l.frequency),l.connect(h),h.connect(e.fader),s.eco){let f=a.createGain();f.gain.value=s.eco,h.connect(f),f.connect(this.eco)}l.start(i),u.start(i),l.stop(i+o+.1),u.stop(i+o+.1)}piano(e,t,i,s={}){let a=this.ctx,r=s.dec??7,o=s.gain??.06;[[1,1],[2,.22],[3,.06]].forEach(([c,l])=>{let u=a.createOscillator(),d=a.createGain();u.type="sine",u.frequency.value=Qe(t)*c*(c>1?1.0015:1),d.gain.setValueAtTime(0,i),d.gain.linearRampToValueAtTime(o*l,i+.03),d.gain.exponentialRampToValueAtTime(1e-4,i+r/c),u.connect(d),d.connect(e.fader),u.start(i),u.stop(i+r+.1)})}voz(e,t,i,s,a=.02){let r=this.ctx,o=r.createOscillator(),c=r.createGain();o.type="sawtooth",o.frequency.value=Qe(t),this.env(c,i,s*.4,a,s*.2,i+s),[[750,6],[1150,8]].forEach(([l,u])=>{let d=r.createBiquadFilter();d.type="bandpass",d.frequency.value=l,d.Q.value=u,o.connect(d),d.connect(c)}),c.connect(e.fader),o.start(i),o.stop(i+s+.1)}bombo(e,t,i=.5){let s=this.ctx,a=s.createOscillator(),r=s.createGain();a.frequency.setValueAtTime(110,t),a.frequency.exponentialRampToValueAtTime(42,t+.12),r.gain.setValueAtTime(i,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.45),a.connect(r),r.connect(e.fader),a.start(t),a.stop(t+.5)}ruidoCorto(e,t,i,s,a,r,o=.8){let c=this.ctx,l=c.createBufferSource(),u=c.createBiquadFilter(),d=c.createGain();l.buffer=this.ruido,u.type=a,u.frequency.value=r,u.Q.value=o,d.gain.setValueAtTime(s,t),d.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(u),u.connect(d),d.connect(e.fader),l.start(t,Math.random()*2),l.stop(t+i+.05)}fondo(e,t,i,s,a,r=0){let o=this.ctx,c=o.createBufferSource(),l=o.createBiquadFilter(),u=o.createGain();if(c.buffer=this.ruido,c.loop=!0,l.type=i,l.frequency.value=s,l.Q.value=a,u.gain.value=t,c.connect(l),l.connect(u),u.connect(e.fader),c.start(),r){let d=o.createOscillator(),h=o.createGain();d.frequency.value=r,h.gain.value=s*.7,d.connect(h),h.connect(l.frequency),d.start(),e.nodos.push(d)}e.nodos.push(c,l,u)}aeropuerto(e){[[0,0],[2,0],[4,0],[6,0],[1,1],[4,1],[2,-1]].forEach(([i,s],a)=>{let r=13+a*2.9+ze(0,2.5),o=()=>{this.piano(e,this.nota(i,s),this.ctx.currentTime+.05,{dec:8,gain:.055}),this.luego(e,r,o)};this.luego(e,ze(.5,r),o)}),[[0,-1],[4,-1]].forEach(([i,s],a)=>{let r=23+a*8.3,o=()=>{this.voz(e,this.nota(i,s),this.ctx.currentTime+.05,9,.018),this.luego(e,r,o)};this.luego(e,4+a*6,o)}),this.fondo(e,.006,"bandpass",500,.5)}dron(e){let t=[[0,-1],[4,-1],[0,0],[8,0],[2,1]],i=r=>{let[o,c]=t[r%t.length],l=ze(26,40);this.pad(e,[this.nota(o,c)],this.ctx.currentTime+.05,l,{att:12,rel:14,gain:.05,corte:700+r*120,onda:r%2?"triangle":"sawtooth"}),this.luego(e,l*.55,()=>i(r+1+Math.floor(Math.random()*2)))};i(0),this.luego(e,9,()=>i(2));let s=this.ctx.createOscillator(),a=this.ctx.createGain();s.frequency.value=Qe(this.nota(0,-2)),a.gain.value=.05,s.connect(a),a.connect(e.fader),s.start(),e.nodos.push(s,a),this.fondo(e,.03,"bandpass",600,1.2,.02)}kankyo(e){let t=[],i=()=>{t=[0,6,10,16,22,26].filter(()=>Math.random()<.8).map(c=>[c,ot([0,1,2,3,4,5,7])])};i();let s=0,a=!1,r=0;this.secuenciador(e,72,(c,l)=>{let u=c%32;if(u===0){if(s=Math.floor(c/32)+1,s%4===0){let d=Math.floor(Math.random()*t.length);t[d]&&(t[d][1]=ot([0,1,2,3,4,5,7]))}s%8===0&&(a=Math.random()<.3,r=1-r),s%16===0&&i(),s%4===1&&this.pad(e,[this.nota(0,-1),this.nota(4,-1)],l,13,{onda:"sine",att:3,rel:5,gain:.03,corte:2400})}a||t.forEach(([d,h])=>{d===u&&(r?this.fm(e,this.nota(h,1),l,{ratio:1,indice:2.4,dec:2.4,gain:.05,eco:.25}):this.fm(e,this.nota(h,1),l,{ratio:4,indice:1.6,dec:.7,gain:.06,eco:.25}))})});let o=()=>{let c=this.ctx,l=c.currentTime+.05,u=c.createOscillator(),d=c.createGain(),h=Qe(this.nota(ot([0,2,4]),3));u.frequency.setValueAtTime(h,l),u.frequency.exponentialRampToValueAtTime(h*1.6,l+.06),d.gain.setValueAtTime(.025,l),d.gain.exponentialRampToValueAtTime(1e-4,l+.18),u.connect(d),d.connect(e.fader),u.start(l),u.stop(l+.2),this.luego(e,ze(3,9),o)};this.luego(e,5,o),this.ctx&&this.eco.delayTime.setTargetAtTime(60/72/4*3,this.ctx.currentTime,.2)}analogico(e){let t=this.ctx,i=122,s=.06,a=60/i/4;this.eco.delayTime.setTargetAtTime(60/i*.75,t.currentTime,.2),e.vaiven=t.createGain();let r=t.createOscillator(),o=t.createGain(),c=t.createOscillator(),l=t.createGain();r.frequency.value=.55,o.gain.value=5,c.frequency.value=6.3,l.gain.value=1.6,r.connect(o),o.connect(e.vaiven),c.connect(l),l.connect(e.vaiven),r.start(),c.start(),e.nodos.push(r,o,c,l,e.vaiven),this.fondo(e,.007,"highpass",4500,.4);let u=t.createWaveShaper(),d=new Float32Array(4096);for(let ae=0;ae<4096;ae++){let $=ae/2047.5-1;d[ae]=Math.round($*96)/96}u.curve=d;let h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=4200,h.Q.value=.6;let f=t.createStereoPanner(),g=t.createOscillator(),y=t.createGain();g.frequency.value=.07,y.gain.value=.55,g.connect(y),y.connect(f.pan),g.start();let p=t.createGain();p.gain.value=.32,u.connect(h),h.connect(f),f.connect(e.fader),h.connect(p),p.connect(this.eco),e.nodos.push(u,h,f,g,y,p);let m=(ae,$)=>{let X=t.createGain(),D=t.createBiquadFilter();D.type="lowpass",D.Q.value=4,D.frequency.setValueAtTime(2800,$),D.frequency.exponentialRampToValueAtTime(520,$+.2),X.gain.setValueAtTime(0,$),X.gain.linearRampToValueAtTime(.05,$+.003),X.gain.exponentialRampToValueAtTime(1e-4,$+.3),D.connect(X),X.connect(u),[0,3,7,10].forEach(K=>{let F=t.createOscillator();F.type="square",F.frequency.value=Qe(ae+K),F.detune.setValueAtTime(38,$),F.detune.exponentialRampToValueAtTime(1,$+.07),e.vaiven.connect(F.detune),F.connect(D),F.start($),F.stop($+.32)})},A=t.createBiquadFilter(),M=t.createBiquadFilter();A.type="highpass",A.frequency.value=38,A.Q.value=.7,M.type="peaking",M.frequency.value=420,M.Q.value=1.2,M.gain.value=-4,A.connect(M),M.connect(e.fader),e.nodos.push(A,M);let v=(ae,$,X)=>{let D=t.createBiquadFilter(),K=t.createBiquadFilter(),F=t.createGain(),q=.026;D.type="peaking",D.frequency.value=700,D.Q.value=3,D.gain.value=4,K.type="lowpass",K.Q.value=2.5,K.frequency.setValueAtTime(1e3,$),K.frequency.exponentialRampToValueAtTime(220,$+X*.8),F.gain.setValueAtTime(0,$),F.gain.linearRampToValueAtTime(q,$+.008),F.gain.setValueAtTime(q,$+X*.55),F.gain.exponentialRampToValueAtTime(1e-4,$+X+.04),D.connect(K),K.connect(F),F.connect(A),[[-13,"sawtooth",.32],[11,"sawtooth",.32],[0,"sine",.55]].forEach(([W,O,E])=>{let b=t.createOscillator(),R=t.createGain();b.type=O,b.frequency.value=Qe(ae),b.detune.value=W,R.gain.value=E,e.vaiven.connect(b.detune),b.connect(R),R.connect(D),b.start($),b.stop($+X+.1)})},S=(ae,$,X,D=.028)=>{let K=t.createBiquadFilter(),F=t.createGain();K.type="lowpass",K.frequency.value=1500,K.Q.value=.4,F.gain.setValueAtTime(0,$),F.gain.linearRampToValueAtTime(D,$+.35),F.gain.setValueAtTime(D,$+X),F.gain.linearRampToValueAtTime(1e-4,$+X+1.2),K.connect(F),F.connect(e.fader);let q=t.createGain();q.gain.value=.25,F.connect(q),q.connect(this.eco),[[1,1,-6],[1.002,2,6]].forEach(([W,O,E])=>{let b=t.createOscillator(),R=t.createOscillator(),P=t.createGain();b.frequency.value=Qe(ae)*W,R.frequency.value=Qe(ae)*O,P.gain.setValueAtTime(Qe(ae)*.2,$),P.gain.linearRampToValueAtTime(Qe(ae)*.9,$+.5),b.detune.value=E,e.vaiven.connect(b.detune),R.connect(P),P.connect(b.frequency),b.connect(K),b.start($),R.start($),b.stop($+X+1.3),R.stop($+X+1.3)})},w=[205.3,304.4,369.6,522.7,540,800],L=(ae,$,X)=>{let D=t.createBiquadFilter(),K=t.createBiquadFilter(),F=t.createGain();D.type="bandpass",D.frequency.value=1e4,D.Q.value=1,K.type="highpass",K.frequency.value=7e3,F.gain.setValueAtTime(X,ae),F.gain.exponentialRampToValueAtTime(1e-4,ae+$),D.connect(K),K.connect(F),F.connect(e.fader),w.forEach(q=>{let W=t.createOscillator();W.type="square",W.frequency.value=q*1.7,W.connect(D),W.start(ae),W.stop(ae+$+.02)})},_=ae=>{let $=t.createOscillator(),X=t.createGain();$.frequency.setValueAtTime(96,ae),$.frequency.exponentialRampToValueAtTime(47,ae+.09),X.gain.setValueAtTime(.62,ae),X.gain.exponentialRampToValueAtTime(1e-4,ae+.34),$.connect(X),X.connect(e.fader),$.start(ae),$.stop(ae+.36),this.ruidoCorto(e,ae,.006,.05,"highpass",2e3)},C=(ae,$,X,D,K="sine")=>{let F=t.createOscillator(),q=t.createGain();F.type=K,F.frequency.setValueAtTime($*1.08,ae),F.frequency.exponentialRampToValueAtTime($,ae+.02),q.gain.setValueAtTime(D,ae),q.gain.exponentialRampToValueAtTime(1e-4,ae+X),F.connect(q),q.connect(e.fader),F.start(ae),F.stop(ae+X+.02)},U=[0,3,6,10,12],z=[[0,0],[3,0],[6,12],[8,0],[11,7],[14,10]],k=0,ie=0,V=U.slice(),Y=[],le=[],ce=()=>{Y=[0,4,8,12].map(()=>ot([0,2,4,6,7,9])),le=Array.from({length:8},()=>Math.random()<.55?ot([4,6,7,9,11]):null)};ce(),this.secuenciador(e,i,(ae,$)=>{let X=ae%16,D=$+(X%2?a*s:0);if(X===0){if(k=Math.floor(ae/16)+1,ie=this.nota(k%8>=6?3:0,-1),k%4===0&&(V=U.slice(),Math.random()<.5)){let E=1+Math.floor(Math.random()*4);V[E]=(V[E]+ot([-1,1,2])+16)%16}k%16===1&&ce()}let K=(k-1)%48,F=K>=32&&K<36,q=k>4,W=k>16&&!(K>=32&&K<34),O=k>24;if(!F&&X%4===0&&_($),X%4===2?L(D,.26,.05):(X%2===0||Math.random()<.35)&&L(D,.04,X%4===0?.03:.022),(X===3||X===10)&&k>2&&C(D,1700,.03,.035,"triangle"),(X===6||X===13||X===15&&Math.random()<.4)&&k>8&&C(D,X===13?220:330,.22,.07),X===12&&k>8&&!F&&(this.ruidoCorto(e,$,.12,.045,"bandpass",1300,1.4),this.ruidoCorto(e,$+.012,.1,.035,"bandpass",1300,1.4)),V.includes(X)&&m(ie+12,D),q&&z.forEach(([E,b])=>{E===X&&v(ie+b,D,a*1.8)}),W&&X%4===0){let E=X/4|0,b=Y[E];(E%2===0||Math.random()<.5)&&S(this.nota(b,1),$,a*(E%2?3.5:7.5))}if(O&&X%2===1){let E=le[(X-1)/2];E!=null&&this.fm(e,this.nota(E,1),D,{ratio:3.5,indice:.7,dec:.45,gain:.018,eco:.35})}})}dub(e){let t=this.ctx,i=116;this.eco.delayTime.setTargetAtTime(60/i*.75,t.currentTime,.2);let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=1200,s.Q.value=2,s.connect(e.fader);let a=t.createOscillator(),r=t.createGain();a.frequency.value=.035,r.gain.value=900,a.connect(r),r.connect(s.frequency),a.start(),e.nodos.push(a,r,s);let o=t.createGain();o.gain.value=.5,s.connect(o),o.connect(this.eco),e.nodos.push(o),this.fondo(e,.012,"bandpass",3200,.7);let c=0,l=0;this.secuenciador(e,i,(u,d)=>{let h=u%16;if(h===0&&(c=Math.floor(u/16)+1,(c%8===1||e.primero)&&(l=ot([0,0,3,5])),c%2===1&&this.fm(e,this.nota(l,-2),d,{ratio:1,indice:.2,dec:2.2,gain:.12})),h%4===0&&this.bombo(e,d,.5),h%4===2&&this.ruidoCorto(e,d,.03,.02,"highpass",8e3),(h===2||h===10)&&Math.random()<.8){let f=t.createGain();f.gain.setValueAtTime(0,d),f.gain.linearRampToValueAtTime(.045,d+.005),f.gain.exponentialRampToValueAtTime(1e-4,d+.2),f.connect(s),[0,2,4,6,8].forEach(g=>{let y=t.createOscillator();y.type="sawtooth",y.frequency.value=Qe(this.nota(l+g,0)),y.connect(f),y.start(d),y.stop(d+.22)})}Math.random()<.12&&this.ruidoCorto(e,d+Math.random()*.1,.004,ze(.02,.06),"highpass",2500)})}garaje(e){let t=this.ctx,i=134,s=60/i/4,a=.17,r=(D,K,F)=>{let q=t.createGain();q.gain.value=F,D.connect(q),q.connect(K),e.salidas.push(q),e.nodos.push(q)},o=(D,K)=>{let F=t.createStereoPanner();return F.pan.value=K,D.connect(F),F};e.vaiven=t.createGain();let c=t.createOscillator(),l=t.createGain();c.frequency.value=.31,l.gain.value=7,c.connect(l),l.connect(e.vaiven),c.start(),e.nodos.push(c,l,e.vaiven),this.fondo(e,.006,"highpass",6500,.4),this.fondo(e,.016,"bandpass",2300,.25,.017);let u=()=>{let D=t.currentTime+.05;for(let K=0;K<7;K++)Math.random()<.55&&this.ruidoCorto(e,D+Math.random()*.6,ze(.003,.012),ze(.012,.06),"highpass",ze(2200,7e3));this.luego(e,.6,u)};u();let d=t.createBiquadFilter(),h=t.createGain();d.type="lowpass",d.frequency.value=7200,d.Q.value=.4,h.gain.value=1.6,d.connect(h),h.connect(e.fader),e.nodos.push(d,h);let f=t.createBiquadFilter(),g=t.createBiquadFilter(),y=t.createGain();f.type="highpass",f.frequency.value=240,f.Q.value=.5,g.type="lowpass",g.frequency.value=1900,g.Q.value=.5,f.connect(g),g.connect(y),y.connect(e.fader),r(y,this.sala,.42),e.nodos.push(f,g,y);let p=(D,K)=>{y.gain.cancelScheduledValues(D),y.gain.setValueAtTime(1-K,D+.005),y.gain.setTargetAtTime(1,D+.04,.09)},m=t.createBiquadFilter();m.type="bandpass",m.frequency.value=1600,m.Q.value=.5;let A=t.createBiquadFilter();A.type="lowpass",A.frequency.value=3200,m.connect(A),A.connect(e.fader),r(A,this.sala,1.45),r(A,this.eco,.45);let M=(D,K,F,q,W,O,E,b=0)=>{let R=t.createBufferSource(),P=t.createBiquadFilter(),N=t.createGain();R.buffer=this.ruido,P.type=q,P.frequency.value=W,P.Q.value=O,N.gain.setValueAtTime(F,D),N.gain.exponentialRampToValueAtTime(1e-4,D+K),R.connect(P),P.connect(N),(b?o(N,b):N).connect(E),R.start(D,Math.random()*2),R.stop(D+K+.05)},v=(D,K,F,q,W,O,E)=>{let b=t.createOscillator(),R=t.createGain();b.type=O,b.frequency.setValueAtTime(K,D),b.frequency.exponentialRampToValueAtTime(F,D+q*.4),R.gain.setValueAtTime(W,D),R.gain.exponentialRampToValueAtTime(1e-4,D+q),b.connect(R),R.connect(E),b.start(D),b.stop(D+q+.02)},S=(D,K=1)=>{p(D,.55),v(D,82,46,.3,.42*K,"sine",d),M(D,.012,.05*K,"lowpass",1400,.5,d)},w=(D,K=1)=>{K>.5&&p(D,.4),M(D,.17,.2*K,"bandpass",ze(1650,2100),.8,d),M(D,.06,.07*K,"highpass",3800,.5,d),v(D,210,180,.07,.07*K,"triangle",d)},L=(D,K=1,F=!1)=>M(D,F?.16:ze(.025,.045),.05*K,"bandpass",ze(7800,9800),.6,d,ze(-.3,.3)),_=(D,K=1)=>{v(D,1250,1180,.035,.05*K,"triangle",d),M(D,.03,.04*K,"bandpass",2900,3,d)},C=[0,5,3,4],U=D=>[0,2,4,6,8].map(K=>this.nota(D+K,0)),z=(D,K,F)=>D.forEach((q,W)=>{let O=t.createOscillator(),E=t.createOscillator(),b=t.createGain(),R=t.createGain(),P=Qe(q);O.frequency.value=P,E.frequency.value=P,O.detune.value=ze(-9,9),e.vaiven.connect(O.detune),b.gain.setValueAtTime(P*.9,K),b.gain.exponentialRampToValueAtTime(P*.05,K+1.2),R.gain.value=0,R.gain.setValueAtTime(0,K+W*.012),R.gain.linearRampToValueAtTime(.012,K+W*.012+.01),R.gain.exponentialRampToValueAtTime(1e-4,K+F),E.connect(b),b.connect(O.frequency),O.connect(R),R.connect(f),O.start(K),E.start(K),O.stop(K+F+.1),E.stop(K+F+.1)}),k=(D,K,F)=>{let q=t.createOscillator(),W=t.createOscillator(),O=t.createGain(),E=t.createGain();q.frequency.value=Qe(D),W.type="triangle",W.frequency.value=Qe(D)*2,O.gain.setValueAtTime(0,K),O.gain.linearRampToValueAtTime(.035,K+.25),O.gain.setValueAtTime(.035,K+F-.3),O.gain.linearRampToValueAtTime(1e-4,K+F+.2),E.gain.value=.12,q.connect(O),W.connect(E),E.connect(O),O.connect(e.fader),q.start(K),W.start(K),q.stop(K+F+.3),W.stop(K+F+.3)},ie=[[800,1150,2900],[450,800,2830],[400,2e3,2550],[350,1700,2700],[600,1e3,2600]],V=(D,K,F,q,W=!1)=>{let O=t.createOscillator(),E=t.createOscillator(),b=t.createGain(),R=t.createGain(),P=t.createOscillator(),N=t.createGain();O.type="sawtooth",E.type="sawtooth";let J=Qe(D),te=ze(-35,35);if(O.frequency.setValueAtTime(J*(W?1:Math.pow(2,ze(-1,1)/12)),K),O.frequency.exponentialRampToValueAtTime(J*(W?Math.pow(2,-ze(.5,2.5)/12):1),K+F),E.frequency.value=J*1.004,O.detune.value=te,E.detune.value=te,P.frequency.value=W?ze(4.5,6):0,N.gain.value=W?22:0,P.connect(N),N.connect(O.detune),N.connect(E.detune),R.gain.value=1,O.connect(R),E.connect(R),ot(ie).forEach((se,re)=>{let G=t.createBiquadFilter();G.type="bandpass",G.frequency.value=se*ze(1,1.14),G.Q.value=[9,11,13][re];let j=t.createGain();j.gain.value=[1,.55,.25][re],R.connect(G),G.connect(j),j.connect(b)}),M(K,Math.min(F,.18),q*.25,"bandpass",4200,1.2,m),b.gain.setValueAtTime(0,K),b.gain.linearRampToValueAtTime(q,K+(W?.15:.022)),W){let se=t.createOscillator(),re=t.createGain();se.frequency.value=ze(16,26),re.gain.value=q*.35,se.connect(re),re.connect(b.gain),se.start(K),se.stop(K+F+.1)}b.gain.setValueAtTime(q,K+F*(W?.35:.6)),b.gain.exponentialRampToValueAtTime(1e-4,K+F),o(b,ze(-.45,.45)).connect(m),[O,E,P].forEach(se=>{se.start(K),se.stop(K+F+.05)})},Y=[],le=()=>{let D=ot([4,5,6,7]);Y=[2,3,6,7,10,11,13,14].filter(()=>Math.random()<.45).map(K=>[K,D+ot([0,0,1,2,-1,3])])};le();let ce=()=>{let D=t.currentTime+.05,K=Math.random();if(K<.4)M(D,ze(.3,1.4),ze(.01,.022),"bandpass",ze(1500,4e3),ze(1.5,4),e.fader,ze(-.8,.8));else if(K<.75){let F=t.createOscillator(),q=t.createOscillator(),W=t.createGain(),O=t.createGain(),E=t.createGain(),b=ze(1800,3400);F.frequency.value=b,q.frequency.value=b*2.76,W.gain.setValueAtTime(b*1.8,D),W.gain.exponentialRampToValueAtTime(b*.08,D+1.2),O.gain.setValueAtTime(0,D),O.gain.linearRampToValueAtTime(.009,D+.01),O.gain.exponentialRampToValueAtTime(1e-4,D+2.4),q.connect(W),W.connect(F.frequency),F.connect(O);let R=o(O,ze(-.9,.9));E.gain.value=.45,R.connect(E),E.connect(e.fader),r(R,this.sala,1.8),r(R,this.eco,.55),e.nodos.push(E),F.start(D),q.start(D),F.stop(D+2.5),q.stop(D+2.5)}else{let F=t.createOscillator(),q=t.createBiquadFilter(),W=t.createGain(),O=ze(3,7);F.type="sawtooth",F.frequency.value=50,q.type="lowpass",q.frequency.value=380,W.gain.setValueAtTime(0,D),W.gain.linearRampToValueAtTime(.006,D+1),W.gain.linearRampToValueAtTime(1e-4,D+O),F.connect(q),q.connect(W),W.connect(e.fader),F.start(D),F.stop(D+O+.1)}this.luego(e,ze(4,11),ce)};this.luego(e,3,ce);let ae=0,$=0,X=0;this.secuenciador(e,i,(D,K)=>{let F=D%16,q=F%2?s*a:0,W=ze(-.006,.006),O=K+q+W;if(F===0){ae=Math.floor(D/16)+1;let te=(ae-1)%32;if((ae-1)%2===0||e.primero){$=C[((ae-1)/2|0)%4];let H=U($);z(H.slice(0,4),K+.01,s*30),k(this.nota($,-1),K,s*31),ae>2&&this.pad(e,[this.nota($,0),this.nota($+4,0)],K,s*32,{att:1.5,rel:3,gain:.005,corte:650,onda:"sawtooth"})}ae%4===1&&le(),X=Math.random()}let E=(ae-1)%32,b=ae<=2,R=E>=28&&E<30,P=!b&&!R,N=ae%4===0&&F>=13&&X<.35;P&&!N?((F===0||F===10&&X>.25||F===7&&X<.18)&&S(O,F===0?1:.8),(F===4||F===12)&&w(O+ze(.008,.024)),(F===3||F===9||F===15)&&Math.random()<.28&&w(O+ze(.004,.02),ze(.18,.32)),F===11&&X>.7&&(w(O,.3),w(O+s*.5,.45)),F%4===2?L(O,Math.random()<.85?1:.4,F===14&&X>.6):F%2===1&&Math.random()<.38&&L(O,.45),(F===6||F===14)&&Math.random()<.45&&_(O,.8)):R&&F%4===2&&L(O,.35);let J=Y.find(([te])=>te===F);J&&ae>1&&Math.random()<(R?.9:.62)&&V(this.nota(J[1],1),O,ze(.1,.24),.24),F===8&&(ae%4===2||R)&&Math.random()<.6&&V(this.nota(ot([4,6,7,9]),1),O,ze(1.6,3.2),.18,!0)})}perreo(e){let t=this.ctx,i=88,s=60/i/4;this.eco.delayTime.setTargetAtTime(60/i*.5,t.currentTime,.2);let a=(G,j,ve)=>{let ye=t.createGain();return ye.gain.value=ve,G.connect(ye),ye.connect(j),e.salidas.push(ye),e.nodos.push(ye),ye},r=(G,j)=>{let ve=t.createStereoPanner();return ve.pan.value=j,G.connect(ve),ve},o=t.createGain();o.connect(e.fader),e.nodos.push(o);let c=(G,j)=>{o.gain.setValueAtTime(1,G-.002),o.gain.linearRampToValueAtTime(0,G+.004),o.gain.setValueAtTime(0,G+j-.004),o.gain.linearRampToValueAtTime(1,G+j)},l=t.createWaveShaper(),u=new Float32Array(2048);for(let G=0;G<2048;G++){let j=G/1023.5-1;u[G]=Math.round(j*14)/14}l.curve=u;let d=t.createGain(),h=t.createGain();d.gain.value=1,h.gain.value=0;let f=t.createGain();f.connect(d),d.connect(o),f.connect(l),l.connect(h),h.connect(o),e.nodos.push(l,d,h,f);let g=(G,j)=>{d.gain.setValueAtTime(0,G),h.gain.setValueAtTime(.8,G),d.gain.setValueAtTime(1,G+j),h.gain.setValueAtTime(0,G+j)};this.fondo(e,.004,"highpass",9e3,.4);let y=t.createGain();y.gain.value=1.4,y.connect(f),e.nodos.push(y);let p=t.createGain(),m=t.createGain();p.connect(m),m.connect(f),a(m,this.sala,.85),a(m,this.eco,.12),e.nodos.push(p,m);let A=(G,j)=>{m.gain.cancelScheduledValues(G),m.gain.setValueAtTime(1-j,G+.004),m.gain.setTargetAtTime(1,G+.05,.12)},M=t.createBiquadFilter();M.type="highpass",M.frequency.value=180,M.connect(f),a(M,this.sala,.9),a(M,this.eco,.5),e.nodos.push(M);let v=(G,j,ve,ye,Ee,Te,B,Ve=0)=>{let De=t.createBufferSource(),I=t.createBiquadFilter(),x=t.createGain();De.buffer=this.ruido,I.type=ye,I.frequency.value=Ee,I.Q.value=Te,x.gain.setValueAtTime(ve,G),x.gain.exponentialRampToValueAtTime(1e-4,G+j),De.connect(I),I.connect(x),(Ve?r(x,Ve):x).connect(B),De.start(G,Math.random()*2),De.stop(G+j+.05)},S=(G,j,ve,ye,Ee,Te,B,Ve=.4)=>{let De=t.createOscillator(),I=t.createGain();De.type=Te,De.frequency.setValueAtTime(j,G),De.frequency.exponentialRampToValueAtTime(ve,G+ye*Ve),I.gain.setValueAtTime(Ee,G),I.gain.exponentialRampToValueAtTime(1e-4,G+ye),De.connect(I),I.connect(B),De.start(G),De.stop(G+ye+.02)},w=(G,j=1,ve=1)=>{A(G,.6),S(G,120*ve,44*ve,.2,.5*j,"sine",y,.3),v(G,.006,.08*j,"highpass",3e3,.5,y)},L=(G,j=1)=>{S(G,420,260,.09,.12*j,"triangle",y),v(G,.09,.16*j,"bandpass",2600,1.4,y),v(G,.03,.06*j,"highpass",6e3,.6,y)},_=(G,j=1)=>{let ve=t.createOscillator(),ye=t.createOscillator(),Ee=t.createGain(),Te=t.createBiquadFilter(),B=t.createGain();ve.type="square",ye.type="square",ve.frequency.value=3300,ye.frequency.value=4650,Ee.gain.value=6e3,Te.type="highpass",Te.frequency.value=7e3,B.gain.setValueAtTime(.03*j,G),B.gain.exponentialRampToValueAtTime(1e-4,G+.035),ye.connect(Ee),Ee.connect(ve.frequency),ve.connect(Te),Te.connect(B),r(B,ze(-.5,.5)).connect(y),ve.start(G),ye.start(G),ve.stop(G+.05),ye.stop(G+.05)},C=G=>S(G,ot([900,1250,1700]),600,.06,.05,"sine",y),U=t.createWaveShaper(),z=new Float32Array(1024);for(let G=0;G<1024;G++){let j=G/511.5-1;z[G]=Math.tanh(3*j)/Math.tanh(3)}U.curve=z;let k=t.createBiquadFilter(),ie=t.createGain();k.type="lowpass",k.frequency.value=700,ie.gain.value=.065,U.connect(k),k.connect(ie),ie.connect(f),e.nodos.push(U,k,ie);let V=(G,j,ve,ye)=>{let Ee=t.createOscillator(),Te=t.createGain();Ee.frequency.setValueAtTime(Qe(ye??G),j),ye!=null&&Ee.frequency.exponentialRampToValueAtTime(Qe(G),j+.09),Te.gain.setValueAtTime(0,j),Te.gain.linearRampToValueAtTime(.32,j+.01),Te.gain.setValueAtTime(.32,j+ve*.7),Te.gain.exponentialRampToValueAtTime(1e-4,j+ve),Ee.connect(Te),Te.connect(U),Ee.start(j),Ee.stop(j+ve+.05)},Y=t.createBiquadFilter(),le=t.createOscillator(),ce=t.createGain();Y.type="lowpass",Y.frequency.value=900,Y.Q.value=7,le.frequency.value=.045,ce.gain.value=600,le.connect(ce),ce.connect(Y.frequency),le.start(),Y.connect(p),e.nodos.push(Y,le,ce);let ae=(G,j,ve)=>G.forEach(ye=>[-11,0,12].forEach(Ee=>{let Te=t.createOscillator(),B=t.createGain();Te.type="sawtooth",Te.frequency.value=Qe(ye),Te.detune.value=Ee+ze(-4,4),this.env(B,j,1.8,.0075,Math.max(0,ve-4),j+ve+2),Te.connect(B),B.connect(Y),Te.start(j),Te.stop(j+ve+2.1)})),$=t.createOscillator(),X=t.createGain();$.type="triangle",$.frequency.value=Qe(this.nota(0,-1)),X.gain.value=.02,$.connect(X),X.connect(p),$.start(),e.nodos.push($,X);let D=(G,j,ve=.016)=>{let ye=t.createOscillator(),Ee=t.createOscillator(),Te=t.createGain(),B=t.createGain(),Ve=Qe(G);ye.frequency.value=Ve,Ee.frequency.value=Ve*ot([3.5,4.2,2.01]),Te.gain.setValueAtTime(Ve*2.2,j),Te.gain.exponentialRampToValueAtTime(Ve*.05,j+.6),B.gain.setValueAtTime(ve,j),B.gain.exponentialRampToValueAtTime(1e-4,j+1.4),Ee.connect(Te),Te.connect(ye.frequency),ye.connect(B),r(B,ze(-.8,.8)).connect(p),ye.start(j),Ee.start(j),ye.stop(j+1.5),Ee.stop(j+1.5)},K=t.createBiquadFilter();K.type="bandpass",K.frequency.value=2200,K.Q.value=2.5,K.connect(p),e.nodos.push(K);let F=(G,j)=>{let ve=t.createOscillator(),ye=t.createGain();ve.type="square",ve.frequency.value=Qe(G),ye.gain.setValueAtTime(.012,j),ye.gain.exponentialRampToValueAtTime(1e-4,j+s*.8),ve.connect(ye),ye.connect(K),ve.start(j),ve.stop(j+s)},q={a:[800,1150,2900],e:[400,2e3,2550],i:[300,2300,3e3],o:[450,800,2830],u:[325,700,2530]},W=Object.keys(q),O=(G,j,ve=!1)=>{let ye=j+Math.max(...G.map(([ne,,oe])=>(ne+oe)*s))+.2,Ee=t.createOscillator(),Te=t.createOscillator(),B=t.createGain(),Ve=t.createGain();Ee.type="sawtooth",Te.type="square",Te.detune.value=7,B.gain.value=.6;let De=ve?.5:1,I=[0,1,2].map(ne=>{let oe=t.createBiquadFilter();oe.type="bandpass",oe.Q.value=[8,10,12][ne];let pe=t.createGain();return pe.gain.value=[1,.5,.22][ne],B.connect(oe),oe.connect(pe),pe.connect(Ve),oe});Ee.connect(B),Te.connect(B),Ve.gain.setValueAtTime(0,j),G.forEach(([ne,oe,pe])=>{let we=j+ne*s,Ce=Qe(oe)*De,xe=q[ot(W)];Ee.frequency.setTargetAtTime(Ce,we,.008),Te.frequency.setTargetAtTime(Ce,we,.008),I.forEach((Ae,Ne)=>Ae.frequency.setTargetAtTime(xe[Ne]*(ve?.8:1.08),we,.02)),Ve.gain.setTargetAtTime(.16,we,.012),Ve.gain.setTargetAtTime(1e-4,we+pe*s*.85,.04)}),r(Ve,ze(-.25,.25)).connect(M),[Ee,Te].forEach(ne=>{ne.start(j),ne.stop(ye+.3)})},E=(G,j)=>{let ve=t.createOscillator(),ye=t.createGain(),Ee=t.createBiquadFilter(),Te=t.createGain();ve.type="sawtooth",Ee.type="bandpass",Ee.frequency.value=1400,Ee.Q.value=1.1;let B=[0,1,2].map(Ve=>{let De=t.createBiquadFilter();return De.type="bandpass",De.Q.value=[6,8,10][Ve],ve.connect(De),De.connect(Te),De});Te.connect(Ee),Ee.connect(ye),ye.gain.setValueAtTime(0,G);for(let Ve=G;Ve<G+j;Ve+=ze(.09,.16)){let De=q[ot(W)];ve.frequency.setTargetAtTime(Qe(ze(55,61)),Ve,.03),B.forEach((I,x)=>I.frequency.setTargetAtTime(De[x],Ve,.015)),ye.gain.setTargetAtTime(Math.random()<.18?1e-4:.21,Ve,.01)}ye.gain.setTargetAtTime(1e-4,G+j,.03),v(G,j,.012,"bandpass",3e3,1,M,ze(-.4,.4)),r(ye,ze(-.6,.6)).connect(M),ve.start(G),ve.stop(G+j+.3)},b=(G,j)=>{let[ve,ye]=G[0];for(let Ee=0;Ee<4;Ee++)O([[0,ye+(Ee===3?12:0),.4]],j+ve*s+Ee*s*.5)},R=[0,1,0,5],P=[0,2,3,4,6,7],N=[],J=()=>{let G=ot([[0,3,6,10,12],[2,4,7,10,14],[0,2,6,8,11,14],[3,6,10,12,13]]),j=ot(P);N=G.map((ve,ye)=>(j=Math.max(0,Math.min(9,j+ot([-2,-1,0,1,1,2]))),[ve,j,ye===G.length-1?4:ot([1,2,2,3])]))};J();let te=0,H=0,se=[],re=0;this.secuenciador(e,i,(G,j)=>{let ve=G%16;if(ve===0){te=Math.floor(G/16)+1,re=Math.random();let Ve=(te-1)%48;((te-1)%2===0||e.primero)&&(H=R[((te-1)/2|0)%4],ae([this.nota(H,0),this.nota(H+2,0),this.nota(H+4,1)],j,s*32),se=[0,2,4,7].map(De=>this.nota(H+De,2))),te%8===1&&J(),Ve>4&&Ve%8===7&&re<.5&&c(j+s*12,s*4),re>.85&&g(j+s*8,s*8)}let ye=(te-1)%48,Ee=te<=4,Te=ye>=36&&ye<40;if(!Ee&&!Te&&(ve%4===0&&!(ve===8&&re<.3)&&w(j,ve===0?1:.85,re>.9&&ve===12?.7:1),[3,6,11,14].includes(ve)&&!(ve===11&&re>.75)&&L(j,ve===6||ve===14?1:.8),ve%2===0&&Math.random()<.3&&_(j,ve%4===2?1:.6),ve===15&&re>.6&&C(j),ve===0&&V(this.nota(H,-1),j,s*5.5,re>.5?this.nota(H+4,-1):null),ve===8&&re>.35&&V(this.nota(H,-1),j,s*3),ve===13&&re<.4&&V(this.nota(H+ot([2,4,-1]),-1),j,s*2.5,this.nota(H,-1))),te>2&&ve%2===0&&Math.random()<.55&&F(se[ve/2%se.length]+(re>.8&&ve>8?12:0),j),Math.random()<.035&&D(this.nota(ot([0,2,4,7]),3),j+Math.random()*.1),ve===0){let Ve=(te-1)%8;(Ve===2||Ve===6)&&te>4&&(re<.12?b(N.map(([De,I,x])=>[De,this.nota(I,2),x]),j):O(N.map(([De,I,x])=>[De,this.nota(I,2),x]),j)),Ve===3&&re<.5&&O(N.slice(0,3).map(([De,I,x])=>[De,this.nota(I,2),x]),j,!0),(Ve===0||Te)&&re>.55&&E(j+s*2,ze(1.2,2.2))}})}trance(e){let t=this.ctx,i=128,s=60/i/4;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let a=(q,W,O)=>{let E=t.createGain();return E.gain.value=O,q.connect(E),E.connect(W),e.salidas.push(E),e.nodos.push(E),E},r=(q,W)=>{let O=t.createStereoPanner();return O.pan.value=W,q.connect(O),O};e.vaiven=t.createGain();let o=t.createOscillator(),c=t.createGain();o.frequency.value=.21,c.gain.value=4,o.connect(c),c.connect(e.vaiven),o.start(),e.nodos.push(o,c,e.vaiven),this.fondo(e,.0012,"highpass",8e3,.4);let l=t.createGain();l.gain.value=.98;let u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=6e3,l.connect(u),u.connect(e.fader),e.nodos.push(l,u);let d=t.createBiquadFilter(),h=t.createGain();d.type="lowpass",d.frequency.value=900,d.Q.value=1.2;let f=t.createBiquadFilter();f.type="highpass",f.frequency.value=160,f.connect(d),d.connect(h),h.connect(e.fader),a(h,this.sala,.75),e.nodos.push(d,f,h);let g=(q,W)=>{h.gain.cancelScheduledValues(q),h.gain.setValueAtTime(1-W,q+.004),h.gain.setTargetAtTime(1,q+.04,.1)},y=t.createBiquadFilter(),p=t.createGain();y.type="lowpass",y.frequency.value=3400,y.Q.value=2,p.gain.value=0,y.connect(p),p.connect(e.fader),a(p,this.sala,.35),a(p,this.eco,.25),e.nodos.push(y,p);let m=t.createGain();m.connect(e.fader),a(m,this.eco,.55),a(m,this.sala,.6),e.nodos.push(m);let A=t.createBiquadFilter();A.type="highpass",A.frequency.value=220;let M=t.createBiquadFilter();M.type="lowpass",M.frequency.value=5200,A.connect(M),M.connect(e.fader),a(M,this.sala,1.5),a(M,this.eco,.5),e.nodos.push(A,M);let v=(q,W,O,E,b=3,R=.006,P=1.4)=>q.forEach(N=>{for(let J=0;J<b;J++){let te=t.createOscillator(),H=t.createGain(),se=b>1?J/(b-1)*2-1:0;te.type="sawtooth",te.frequency.value=Qe(N),te.detune.value=se*22+ze(-3,3),e.vaiven.connect(te.detune),this.env(H,W,P,R,Math.max(0,O-P-1.5),W+O+1.5),te.connect(H),r(H,se*.85).connect(E),te.start(W),te.stop(W+O+1.6)}}),S=q=>[this.nota(q,0),this.nota(q+4,0),this.nota(q+1,1),this.nota(q+4,1),this.nota(q+3,1)],w=[1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1],L=(q,W,O,E)=>{let b=t.createOscillator(),R=t.createOscillator(),P=t.createGain(),N=t.createGain(),J=Qe(q);b.type="triangle",b.frequency.value=J,R.frequency.value=J*4,P.gain.setValueAtTime(J*1.3,W),P.gain.exponentialRampToValueAtTime(J*.02,W+.3),N.gain.setValueAtTime(0,W),N.gain.linearRampToValueAtTime(O,W+.004),N.gain.exponentialRampToValueAtTime(1e-4,W+.7),R.connect(P),P.connect(b.frequency),b.connect(N),r(N,E).connect(m),b.start(W),R.start(W),b.stop(W+.75),R.stop(W+.75)},_=(q,W,O)=>{let E=t.createOscillator(),b=t.createOscillator(),R=t.createGain(),P=t.createBiquadFilter();b.type="triangle",E.frequency.value=Qe(q),b.frequency.value=Qe(q),P.type="lowpass",P.frequency.value=420,R.gain.setValueAtTime(0,W),R.gain.linearRampToValueAtTime(.064,W+.012),R.gain.setValueAtTime(.064,W+O*.6),R.gain.exponentialRampToValueAtTime(1e-4,W+O),E.connect(P),b.connect(P),P.connect(R),R.connect(e.fader),E.start(W),b.start(W),E.stop(W+O+.05),b.stop(W+O+.05)},C=(q,W,O,E,b,R,P=0)=>{let N=t.createBufferSource(),J=t.createBiquadFilter(),te=t.createGain();N.buffer=this.ruido,J.type=E,J.frequency.value=b,J.Q.value=R,te.gain.setValueAtTime(O,q),te.gain.exponentialRampToValueAtTime(1e-4,q+W),N.connect(J),J.connect(te),(P?r(te,P):te).connect(l),N.start(q,Math.random()*2),N.stop(q+W+.05)},U=(q,W=1)=>{g(q,.45*W);let O=t.createOscillator(),E=t.createGain();O.frequency.setValueAtTime(105,q),O.frequency.exponentialRampToValueAtTime(48,q+.08),E.gain.setValueAtTime(.45*W,q),E.gain.exponentialRampToValueAtTime(1e-4,q+.32),O.connect(E),E.connect(l),O.start(q),O.stop(q+.35)},z=(q,W=1)=>{C(q,.15,.11*W,"bandpass",1900,.9),C(q,.05,.04*W,"highpass",5e3,.5)},k=(q,W=1,O=!1)=>C(q,O?.14:.035,.035*W,"highpass",8500,.7,ze(-.35,.35)),ie={a:[800,1150,2900],o:[450,800,2830],u:[325,700,2530],e:[400,2e3,2550]},V=Object.keys(ie),Y=(q,W,O,E,b)=>{let R=t.createOscillator(),P=t.createGain(),N=t.createGain(),J=t.createOscillator(),te=t.createGain(),H=ie[ot(V)];R.type="sawtooth",R.frequency.value=Qe(q),R.detune.value=ze(-8,8),J.frequency.value=ze(4.8,5.6),te.gain.value=9,J.connect(te),te.connect(R.detune),R.connect(N),H.forEach((j,ve)=>{let ye=t.createBiquadFilter();ye.type="bandpass",ye.frequency.value=j*1.12,ye.Q.value=[7,9,11][ve];let Ee=t.createGain();Ee.gain.value=[1,.5,.3][ve],N.connect(ye),ye.connect(Ee),Ee.connect(P)});let se=t.createBufferSource(),re=t.createBiquadFilter(),G=t.createGain();se.buffer=this.ruido,re.type="bandpass",re.frequency.value=H[1]*1.6,re.Q.value=1.5,G.gain.value=.28,se.connect(re),re.connect(G),G.connect(P),P.gain.setValueAtTime(0,W),P.gain.linearRampToValueAtTime(E,W+Math.min(.12,O*.3)),P.gain.setValueAtTime(E,W+O*.7),P.gain.exponentialRampToValueAtTime(1e-4,W+O),r(P,b).connect(A),[R,J].forEach(j=>{j.start(W),j.stop(W+O+.05)}),se.start(W,Math.random()*2),se.stop(W+O+.05)},le=(q,W,O,E)=>{Y(q,W,O,E,-.35),Y(q,W+.012,O,E*.8,.35)},ce=[],ae=()=>{let q=ot([2,4,6]);ce=[0,4,6,10,14,18,22,26].filter(()=>Math.random()<.7).map(W=>(q=Math.max(0,Math.min(9,q+ot([-2,-1,1,1,2,0]))),[W,q,ot([2,3,4])]))};ae();let $=[0,5,2,6],X=0,D=0,K=0,F=[];this.secuenciador(e,i,(q,W)=>{let O=q%16;if(O===0){X=Math.floor(q/16)+1,K=Math.random();let H=(X-1)%64;if((X-1)%2===0||e.primero){D=$[((X-1)/2|0)%4];let re=S(D);v(re,W,s*32,f,3,.0062),v([re[2],re[3],re[4]],W,s*32,y,2,.05,.02),F=[this.nota(D,2),this.nota(D+4,2),this.nota(D+1,3),this.nota(D+4,2),this.nota(D+2,3),this.nota(D+4,2)]}let se=Math.sin(Math.PI*((X-1)%16/16));d.frequency.setTargetAtTime(700+se*2600,W,2.5),X%4===1&&ae()}let E=(X-1)%64,b=E<8,R=E>=40&&E<48,P=E>=24&&E<40||E>=56,N=E>=16&&!R;p.gain.setValueAtTime(N&&w[O]?1:0,W),N&&w[O]&&p.gain.setTargetAtTime(0,W+s*.55,.012),!b&&!R?(P?(O%4===0&&U(W,.9),O%4===2&&k(W,1,O===14&&K>.5),(O===4||O===12)&&z(W,.55)):((O===0||O===10||O===7&&K>.6)&&U(W,O===0?1:.8),(O===4||O===12)&&z(W),O===15&&K>.7&&z(W,.35),O%2===0&&k(W,O%4===2?.9:.5)),O%4===2&&_(this.nota(D,-1),W,s*1.6)):O===0&&_(this.nota(D,-1),W,s*14),E>=8&&F.length&&Math.random()<(R?.9:.7)&&L(F[q%F.length]+(K>.85&&O>=12?12:0),W,R?.03:.022,q%2?.6:-.6);let J=(X-1)%2*16+O,te=ce.find(([H])=>H===J);if(te&&X>2&&((X-1)%8<6||R)){let H=this.nota(te[1],2),se=te[2]*s;if(K>.78&&J>=14)for(let re=0;re<4;re++)Y(H+(re===3?12:0),W+re*s,s*.9,.065,re%2?.4:-.4);else le(H,W,se*1.6,.07)}})}rave(e){let t=this.ctx,i=132,s=60/i/4;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let a=(R,P,N)=>{let J=t.createGain();return J.gain.value=N,R.connect(J),J.connect(P),e.salidas.push(J),e.nodos.push(J),J},r=(R,P)=>{let N=t.createStereoPanner();return N.pan.value=P,R.connect(N),N},o=t.createBiquadFilter(),c=t.createGain();o.type="highpass",o.frequency.value=20,o.Q.value=.8,o.connect(c),c.connect(e.fader),e.nodos.push(o,c);let l=(R,P)=>{c.gain.setValueAtTime(1,R-.002),c.gain.linearRampToValueAtTime(0,R+.003),c.gain.setValueAtTime(0,R+P-.003),c.gain.linearRampToValueAtTime(1,R+P)},u=t.createGain();u.gain.value=1.25,u.connect(o),e.nodos.push(u);let d=t.createGain();d.connect(o),e.nodos.push(d);let h=(R,P)=>{d.gain.setValueAtTime(1,R-.002),d.gain.linearRampToValueAtTime(0,R+.004),d.gain.setValueAtTime(0,R+P-.004),d.gain.linearRampToValueAtTime(1,R+P)},f=t.createBiquadFilter(),g=t.createGain();f.type="lowpass",f.frequency.value=1500,f.Q.value=1.5,f.connect(g),g.connect(d),a(g,this.sala,.45),e.nodos.push(f,g);let y=.5,p=R=>{g.gain.cancelScheduledValues(R),g.gain.setValueAtTime(1-y,R+.003),g.gain.setTargetAtTime(1,R+.02,s*.9)},m=t.createBiquadFilter();m.type="highpass",m.frequency.value=240;let A=t.createDynamicsCompressor();A.threshold.value=-26,A.ratio.value=5,A.attack.value=.002,A.release.value=.07,m.connect(A),A.connect(o),a(A,this.cuarto,.45),a(A,this.eco,.2),a(A,this.sala,.35),e.nodos.push(m,A);let M=(R,P)=>[R+(Math.random()+Math.random()-1)*.011,P*ze(.62,1.05)],v=(R,P,N,J,te,H,se=0)=>{let re=t.createBufferSource(),G=t.createBiquadFilter(),j=t.createGain();re.buffer=this.ruido,G.type=J,G.frequency.value=te,G.Q.value=H,j.gain.setValueAtTime(Math.min(N,.4),R),j.gain.exponentialRampToValueAtTime(1e-4,R+P),re.connect(G),G.connect(j),(se?r(j,se):j).connect(u),re.start(R,Math.random()*2),re.stop(R+P+.05)},S=(R,P,N,J,te,H,se=.35)=>{let re=t.createOscillator(),G=t.createGain();re.type=H,re.frequency.setValueAtTime(P,R),re.frequency.exponentialRampToValueAtTime(N,R+J*se),G.gain.setValueAtTime(te,R),G.gain.exponentialRampToValueAtTime(1e-4,R+J),re.connect(G),G.connect(u),re.start(R),re.stop(R+J+.02)},w=(R,P=1,N=!1)=>{let[J,te]=N?[R,P]:M(R,P);p(J),S(J,N?170:140,46,N?.3:.24,.75*te,"sine"),v(J,.01,.14*te,"highpass",2200,.6)},L=(R,P=1)=>{let[N,J]=M(R+.004,P);[0,.008,.017,.029].forEach((te,H)=>v(N+te,H===3?.16:.011,.17*J,"bandpass",1450,1.2,H%2?.25:-.25))},_=(R,P=1)=>{let[N,J]=M(R,P);S(N,240,185,.08,.13*J,"triangle"),v(N,.12,.22*J,"bandpass",2300,.9),v(N,.04,.08*J,"highpass",6e3,.6)},C=(R,P=1,N=!1)=>{let[J,te]=M(R,P);v(J,N?.13:ze(.022,.045),.06*te,"highpass",ze(7200,9600),.7,ze(-.35,.35))},U=[[1,0,.45,.3,.9,0,.5,.25,1,.35,.45,0,.85,.3,.55,.4],[.9,.3,0,.5,1,0,.4,.3,.8,0,.6,.35,1,.25,0,.6],[1,.4,.6,0,.9,.35,0,.5,1,.3,.7,.2,.8,0,.5,.45]],z=U[0],k=t.createWaveShaper(),ie=new Float32Array(1024);for(let R=0;R<1024;R++){let P=R/511.5-1;ie[R]=Math.tanh(2.2*P)/Math.tanh(2.2)}k.curve=ie;let V=t.createBiquadFilter(),Y=t.createGain();V.type="lowpass",V.frequency.value=300,Y.gain.value=.085,k.connect(V),V.connect(Y),Y.connect(d),e.nodos.push(k,V,Y);let le=(R,P,N)=>{let J=t.createOscillator(),te=t.createGain();J.frequency.value=Qe(R),te.gain.setValueAtTime(0,P),te.gain.linearRampToValueAtTime(.5,P+.006),te.gain.setValueAtTime(.5,P+N*.75),te.gain.linearRampToValueAtTime(1e-4,P+N),J.connect(te),te.connect(k),J.start(P),J.stop(P+N+.02)},ce=R=>[this.nota(R,0),this.nota(R+2,0),this.nota(R+4,0),this.nota(R+2,1)],ae=(R,P,N)=>R.forEach((J,te)=>[[1,1],[2,.3],[3,.08]].forEach(([H,se])=>{let re=t.createOscillator(),G=t.createGain();re.frequency.value=Qe(J)*H*(H>1?1.002:1),G.gain.value=0,G.gain.setValueAtTime(0,P+te*.008),G.gain.linearRampToValueAtTime(.011*se,P+te*.008+.006),G.gain.exponentialRampToValueAtTime(1e-4,P+N/H),re.connect(G),G.connect(f),re.start(P),re.stop(P+N+.05)})),$=(R,P,N)=>R.forEach(J=>[-12,0,12].forEach(te=>{let H=t.createOscillator(),se=t.createGain();H.type="sawtooth",H.frequency.value=Qe(J+12),H.detune.value=te+ze(-4,4),se.gain.setValueAtTime(0,P),se.gain.linearRampToValueAtTime(.0042,P+.02),se.gain.setValueAtTime(.0042,P+N-.05),se.gain.linearRampToValueAtTime(1e-4,P+N),H.connect(se),r(se,te/16).connect(f),H.start(P),H.stop(P+N+.02)})),X={a:[850,1250,3e3],e:[500,2100,2850],i:[330,2500,3300],o:[500,900,2900],u:[350,800,2600]},D=(R,P,N,J,te="a",H=null,se=0)=>{let re=t.createOscillator(),G=t.createOscillator(),j=t.createGain(),ve=t.createGain(),ye=t.createOscillator(),Ee=t.createGain(),Te=X[te],B=X[H||te];re.type="sawtooth",G.type="sawtooth";let Ve=Qe(R);re.frequency.setValueAtTime(Ve*.955,P),re.frequency.exponentialRampToValueAtTime(Ve,P+.06),G.frequency.setValueAtTime(Ve*.958,P),G.frequency.exponentialRampToValueAtTime(Ve*1.003,P+.06),ye.frequency.value=5.4,Ee.gain.setValueAtTime(0,P),Ee.gain.linearRampToValueAtTime(N>.4?24:0,P+Math.max(.05,N*.6)),ye.connect(Ee),Ee.connect(re.detune),Ee.connect(G.detune),re.connect(j),G.connect(j),j.gain.value=.6,Te.forEach((ne,oe)=>{let pe=t.createBiquadFilter();pe.type="bandpass",pe.Q.value=[6,8,9][oe],pe.frequency.setValueAtTime(ne*1.12,P),pe.frequency.linearRampToValueAtTime(B[oe]*1.12,P+N*.8);let we=t.createGain();we.gain.value=[1,.75,.5][oe],j.connect(pe),pe.connect(we),we.connect(ve)});let De=t.createBufferSource(),I=t.createBiquadFilter(),x=t.createGain();De.buffer=this.ruido,I.type="bandpass",I.frequency.value=4800,I.Q.value=.8,x.gain.setValueAtTime(J*1.4,P),x.gain.exponentialRampToValueAtTime(J*.08,P+.04),De.connect(I),I.connect(x),x.connect(m),ve.gain.setValueAtTime(0,P),ve.gain.linearRampToValueAtTime(J,P+.008),ve.gain.setValueAtTime(J,P+N*.85),ve.gain.linearRampToValueAtTime(1e-4,P+N),r(ve,se).connect(m),[re,G,ye].forEach(ne=>{ne.start(P),ne.stop(P+N+.02)}),De.start(P,Math.random()*2),De.stop(P+N+.02)},K=[[0,4,3,"a","i"],[3,4,2,"o"],[6,5,2,"e"],[8,4,5,"a","o"],[14,2,2,"i"],[16,2,3,"u","a"],[19,1,2,"o"],[22,2,2,"e"],[24,0,7,"a","e"]],F=[[0,4,"a"],[2,4,"i"],[3,5,"e"],[6,4,"a"],[8,4,"a"],[10,2,"o"],[11,4,"i"],[14,5,"e"]],q=[5,3,0,4],W=0,O=0,E=0,b="intro";this.secuenciador(e,i,(R,P)=>{let N=R%16;if(N===0){W=Math.floor(R/16)+1,E=Math.random();let te=(W-1)%32;b=te<4?"intro":te<12?"garage":te<14?"subida":te===14?"capela":te<23?"drop":te<27?"garage":te<31?"drop":"capela",O=q[((W-1)/2|0)%4],z=ot(U),y=b==="drop"?.85:.45,f.frequency.setTargetAtTime(b==="drop"?3800:b==="subida"?2600:1500,P,.4),(b==="intro"||b==="garage")&&((W-1)%2===0||e.primero)&&ae(ce(O),P,s*30),b==="drop"&&$(ce(O),P,s*16),te===12&&(o.frequency.setValueAtTime(20,P),o.frequency.exponentialRampToValueAtTime(1200,P+s*32)),b==="capela"&&(o.frequency.setValueAtTime(20,P),h(P,s*16)),b==="garage"&&E>.85&&l(P+s*14,s*2),b==="drop"&&E>.8&&l(P+s*7,s)}let J=(W-1)%32;if(b==="intro")W>1&&z[N]&&C(P,z[N]*.5);else if(b==="garage")(N===0||N===10||N===7&&E<.3)&&w(P,N===0?1:.8),N===11&&E>.6&&w(P,.35),(N===4||N===12)&&L(P),z[N]&&C(P,z[N]),N===15&&E>.5&&(_(P,.3),_(P+s*.5,.45));else if(b==="subida"){let te=J-12;N%4===0&&w(P,.9,!0),te===0&&N%2===0&&_(P,.35+N*.02),te===1&&(_(P,.5+N*.03),N>=8&&_(P+s*.5,.5+N*.03)),N%2===0&&v(P,s*2,.006+(te*16+N)*9e-4,"highpass",2e3+(te*16+N)*180,.7)}else b==="drop"&&(N%4===0&&w(P,1,!0),(N===4||N===12)&&(L(P,1),_(P,.75)),N%4===2?C(P,1,!0):z[N]&&C(P,z[N]*.7),N===15&&E>.4&&(C(P,.7),C(P+s/3,.8),C(P+s*2/3,.9)));if(b==="garage"&&(N===0&&le(this.nota(O,-1),P,s*2.6),(N===3||N===10)&&le(this.nota(O,-1),P,s*1.6)),b==="drop"&&N%4===2&&le(this.nota(O,-1),P,s*1.8),b==="subida"&&N===0&&le(this.nota(O,-1),P,s*14),b==="intro"||b==="garage"||b==="capela"){let te=(W-1)%2*16+N,H=K.find(([se])=>se===te);H&&D(this.nota(H[1],1),P,H[2]*s*1.05,.26,H[3],H[4],0)}else if(b==="drop"){let te=F.find(([H])=>H===N);if(te)if(E>.7&&N>=8)for(let H=0;H<2;H++)D(this.nota(te[1],1),P+H*s/2,s/2*.8,.26,te[2],null,H?.3:-.3);else D(this.nota(te[1],1)+(N===14&&E<.25?12:0),P,s*.85,.28,te[2])}else if(b==="subida"){let te=J-12,H=te===0?4:2;N%H===0&&D(this.nota(4,1),P,s*H*.7,.22+(te*16+N)*.003,"a","i")}})}dnb(e){let t=this.ctx,i=172,s=60/i/4;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let a=(F,q,W)=>{let O=t.createGain();return O.gain.value=W,F.connect(O),O.connect(q),e.salidas.push(O),e.nodos.push(O),O},r=(F,q)=>{let W=t.createStereoPanner();return W.pan.value=q,F.connect(W),W};e.vaiven=t.createGain();let o=t.createOscillator(),c=t.createGain();o.frequency.value=.17,c.gain.value=5,o.connect(c),c.connect(e.vaiven),o.start(),e.nodos.push(o,c,e.vaiven),this.fondo(e,.006,"bandpass",900,.35,.013);let l=t.createGain(),u=t.createBiquadFilter();l.gain.value=1,u.type="lowpass",u.frequency.value=7500,l.connect(u),u.connect(e.fader),a(u,this.cuarto,.3),e.nodos.push(l,u);let d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=1600,d.Q.value=.6,d.connect(e.fader),a(d,this.sala,1.2),e.nodos.push(d);let h=t.createOscillator(),f=t.createGain();h.frequency.value=.03,f.gain.value=700,h.connect(f),f.connect(d.frequency),h.start(),e.nodos.push(h,f);let g=t.createGain(),y=t.createStereoPanner(),p=t.createOscillator(),m=t.createGain();p.frequency.value=3.2,m.gain.value=.45,p.connect(m),m.connect(y.pan),p.start(),g.connect(y),y.connect(e.fader),a(y,this.sala,.55),a(y,this.eco,.28),e.nodos.push(g,y,p,m);let A=(F,q,W,O,E,b,R=0)=>{let P=t.createBufferSource(),N=t.createBiquadFilter(),J=t.createGain();P.buffer=this.ruido,N.type=O,N.frequency.value=E,N.Q.value=b,J.gain.setValueAtTime(W,F),J.gain.exponentialRampToValueAtTime(1e-4,F+q),P.connect(N),N.connect(J),(R?r(J,R):J).connect(l),P.start(F,Math.random()*2),P.stop(F+q+.05)},M=(F,q,W,O,E,b)=>{let R=t.createOscillator(),P=t.createGain();R.type=b,R.frequency.setValueAtTime(q,F),R.frequency.exponentialRampToValueAtTime(W,F+O*.35),P.gain.setValueAtTime(E,F),P.gain.exponentialRampToValueAtTime(1e-4,F+O),R.connect(P),P.connect(l),R.start(F),R.stop(F+O+.02)},v=F=>F+ze(-.004,.004),S=(F,q=1)=>{M(F,120,50,.2,.55*q,"sine"),A(F,.006,.06*q,"highpass",2500,.6)},w=(F,q=1)=>{M(F,260,200,.07,.1*q,"triangle"),A(F,q>.6?.14:.07,.17*q,"bandpass",2e3,.8),A(F,.03,.06*q,"highpass",5500,.6)},L=(F,q=1)=>A(F,.03,.04*q,"highpass",8500,.7,ze(-.3,.3)),_=(F,q=1)=>{let W=t.createOscillator(),O=t.createOscillator(),E=t.createGain(),b=t.createBiquadFilter(),R=t.createGain();W.type="square",O.type="square",W.frequency.value=520,O.frequency.value=1407,E.gain.value=2600,b.type="highpass",b.frequency.value=5200,R.gain.setValueAtTime(.018*q,F),R.gain.exponentialRampToValueAtTime(1e-4,F+.9),O.connect(E),E.connect(W.frequency),W.connect(b),b.connect(R),r(R,.35).connect(l),W.start(F),O.start(F),W.stop(F+1),O.stop(F+1),A(F,.4,.012*q,"bandpass",9e3,1.2,.35)},C=[{b:[0,10,16,26,27],s:[4,12,20,28],g:[7,9,14,23,25,30,31]},{b:[0,10,18,26],s:[4,12,20,28],g:[6,9,15,22,25,29]},{b:[0,3,10,16,19,26],s:[4,12,20,28],g:[7,14,15,23,30]},{b:[0,10,16,24,26],s:[4,13,20,28],g:[2,7,11,18,23,31]}],U=C[0],z=t.createGain();z.gain.value=1,z.connect(e.fader),e.nodos.push(z);let k=(F,q,W,O)=>{let E=t.createOscillator(),b=t.createGain();E.frequency.setValueAtTime(Qe(O??F),q),O!=null&&E.frequency.exponentialRampToValueAtTime(Qe(F),q+.12),b.gain.setValueAtTime(0,q),b.gain.linearRampToValueAtTime(.05,q+.03),b.gain.setValueAtTime(.05,q+W-.12),b.gain.linearRampToValueAtTime(1e-4,q+W),E.connect(b),b.connect(z),E.start(q),E.stop(q+W+.02)},ie=[0,3,6,4],V=F=>[2,4,6,8].map(q=>this.nota(F+q,1)),Y=(F,q,W)=>F.forEach(O=>[-8,8].forEach(E=>{let b=t.createOscillator(),R=t.createGain();b.type="sawtooth",b.frequency.value=Qe(O),b.detune.value=E+ze(-3,3),e.vaiven.connect(b.detune),this.env(R,q,2.2,.018,Math.max(0,W-4.5),q+W+2.5),b.connect(R),r(R,E/14).connect(d),b.start(q),b.stop(q+W+2.6)})),le=(F,q,W=1.6,O=.03)=>{let E=Qe(F),b=t.createOscillator(),R=t.createOscillator(),P=t.createGain(),N=t.createGain();b.frequency.value=E,R.frequency.value=E,b.detune.value=ze(-4,4),P.gain.setValueAtTime(E*1.4,q),P.gain.exponentialRampToValueAtTime(E*.15,q+.35);let J=t.createOscillator(),te=t.createGain();J.frequency.value=E*14,te.gain.setValueAtTime(O*.25,q),te.gain.exponentialRampToValueAtTime(1e-4,q+.05),N.gain.setValueAtTime(0,q),N.gain.linearRampToValueAtTime(O,q+.004),N.gain.exponentialRampToValueAtTime(1e-4,q+W),R.connect(P),P.connect(b.frequency),b.connect(N),J.connect(te),te.connect(N),N.connect(g),[b,R,J].forEach(H=>{H.start(q),H.stop(q+W+.05)})},ce=[[0,1],[6,.7],[10,.6],[16,.9],[22,.6],[27,.7]],ae=0,$=0,X=0,D=[],K=()=>{let F=ot([4,6,7]);D=[2,5,8,11,14,18,21,24,29].filter(()=>Math.random()<.55).map(q=>(F=Math.max(2,Math.min(11,F+ot([-2,-1,1,2,0]))),[q,F]))};K(),this.secuenciador(e,i,(F,q)=>{let W=F%16,O=F%32;if(W===0){ae=Math.floor(F/16)+1,X=Math.random();let te=(ae-1)%64;((ae-1)%4===0||e.primero)&&($=ie[((ae-1)/4|0)%4],Y(V($),q,s*64)),((ae-1)%2===0||e.primero)&&(U=Math.random()<.6?C[0]:ot(C)),ae%8===1&&K()}let E=(ae-1)%64,b=E<8,R=E>=40&&E<48;!b&&!R?(U.b.includes(O)&&S(v(q),O%16===0?1:.85),U.s.includes(O)&&w(v(q)+.003,1),U.g.includes(O)&&Math.random()<.8&&w(v(q),ze(.18,.32)),W%2===0?_(v(q),W%4===0?1:.6):Math.random()<.5&&L(v(q),.6),E%8===7&&W>=12&&w(v(q),.3+(W-12)*.12)):b&&ae>4&&W%4===0&&_(q,.5),!b&&O===0&&k(this.nota($,-1),q,s*14,X>.7?this.nota($+4,-1):null),!b&&O===16&&X>.3&&k(this.nota($+ot([0,4,6]),-1),q,s*12);let N=ce.find(([te])=>te===O);N&&Math.random()<.85&&V($).slice(0,3).forEach((te,H)=>le(te-12,q+H*.012,1.4,.07*N[1]));let J=D.find(([te])=>te===O);J&&(E%16>=8||R)&&le(this.nota(J[1],1),v(q),2.2,.125)})}galore(e){let t=this.ctx,i=96,s=60/i/4;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let a=(E,b,R)=>{let P=t.createGain();return P.gain.value=R,E.connect(P),P.connect(b),e.salidas.push(P),e.nodos.push(P),P},r=(E,b)=>{let R=t.createStereoPanner();return R.pan.value=b,E.connect(R),R};e.vaiven=t.createGain();let o=t.createOscillator(),c=t.createGain(),l=t.createOscillator(),u=t.createGain();o.frequency.value=.09,c.gain.value=6,l.frequency.value=4.3,u.gain.value=3.5,o.connect(c),c.connect(e.vaiven),l.connect(u),u.connect(e.vaiven),o.start(),l.start(),e.nodos.push(o,c,l,u,e.vaiven);let d=t.createGain(),h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=2600,h.Q.value=1.6,d.connect(h);let f=(E,b,R)=>{let P=t.createDelay(.05),N=t.createOscillator(),J=t.createGain(),te=t.createGain();return P.delayTime.value=b,N.frequency.value=.7+R,J.gain.value=.0025,N.connect(J),J.connect(P.delayTime),N.start(),te.gain.value=.55,h.connect(P),P.connect(te),r(te,E).connect(e.fader),e.nodos.push(P,N,J,te),te};f(-.7,.014,0),f(.7,.019,.13);let g=t.createGain();g.gain.value=.6,h.connect(g),g.connect(e.fader),a(h,this.sala,.6),a(h,this.eco,.22),e.nodos.push(d,h,g);let y=t.createOscillator(),p=t.createGain();y.frequency.value=.05,p.gain.value=900,y.connect(p),p.connect(h.frequency),y.start(),e.nodos.push(y,p);let m=(E,b,R,P=1.1,N=1)=>{let J=t.createGain(),te=Qe(E);[["triangle",1,-6],["triangle",1,7],["sine",2,3]].forEach(([H,se,re])=>{let G=t.createOscillator(),j=t.createGain();G.type=H,G.frequency.value=te*se,G.detune.value=re+ze(-2,2),e.vaiven.connect(G.detune),j.gain.value=se>1?.35*N:.5,G.connect(j),j.connect(J),G.start(b),G.stop(b+P+.05)}),J.gain.value=0,J.gain.setValueAtTime(0,b),J.gain.linearRampToValueAtTime(R,b+.018),J.gain.exponentialRampToValueAtTime(1e-4,b+P),J.connect(d)},A=t.createBiquadFilter();A.type="lowpass",A.frequency.value=1100,A.connect(e.fader),a(A,this.sala,.9),e.nodos.push(A);let M=(E,b,R)=>E.forEach(P=>[-9,9].forEach(N=>{let J=t.createOscillator(),te=t.createGain();J.type="sawtooth",J.frequency.value=Qe(P),J.detune.value=N,e.vaiven.connect(J.detune),this.env(te,b,1.5,.015,Math.max(0,R-3),b+R+1.5),J.connect(te),r(te,N/12).connect(A),J.start(b),J.stop(b+R+1.6)})),v=t.createGain();v.gain.value=1,v.connect(e.fader),e.nodos.push(v);let S=(E,b,R,P)=>{let N=t.createOscillator(),J=t.createOscillator(),te=t.createGain(),H=t.createGain();N.frequency.setValueAtTime(Qe(P??E),b),P!=null&&N.frequency.exponentialRampToValueAtTime(Qe(E),b+.08),J.type="triangle",J.frequency.value=Qe(E)*2,H.gain.value=.15,J.connect(H),H.connect(te),te.gain.value=0,te.gain.setValueAtTime(0,b),te.gain.linearRampToValueAtTime(.105,b+.012),te.gain.setValueAtTime(.105,b+R*.7),te.gain.linearRampToValueAtTime(1e-4,b+R),N.connect(te),te.connect(v),[N,J].forEach(se=>{se.start(b),se.stop(b+R+.02)})},w=t.createGain();w.gain.value=1.35,w.connect(e.fader),a(w,this.cuarto,.25),e.nodos.push(w);let L=(E,b,R,P,N,J,te=0)=>{let H=t.createBufferSource(),se=t.createBiquadFilter(),re=t.createGain();H.buffer=this.ruido,se.type=P,se.frequency.value=N,se.Q.value=J,re.gain.setValueAtTime(R,E),re.gain.exponentialRampToValueAtTime(1e-4,E+b),H.connect(se),se.connect(re),(te?r(re,te):re).connect(w),H.start(E,Math.random()*2),H.stop(E+b+.05)},_=(E,b,R,P,N,J="sine",te=0)=>{let H=t.createOscillator(),se=t.createGain();H.type=J,H.frequency.setValueAtTime(b,E),H.frequency.exponentialRampToValueAtTime(R,E+P*.35),se.gain.setValueAtTime(N,E),se.gain.exponentialRampToValueAtTime(1e-4,E+P),H.connect(se),(te?r(se,te):se).connect(w),H.start(E),H.stop(E+P+.02)},C=(E,b=1)=>{_(E,110,52,.18,.5*b),L(E,.006,.05*b,"highpass",3e3,.6)},U=(E,b=1)=>{_(E,1900,1750,.03,.05*b,"triangle"),L(E,.04,.09*b,"bandpass",2600,2.5)},z=(E,b=1)=>_(E,ot([820,1040,1240]),700,.05,.05*b,"sine",ze(-.5,.5)),k=(E,b=1)=>L(E,.04,.025*b,"bandpass",7e3,1.4,.3),ie=[[600,1e3,2600],[400,1600,2500],[450,850,2550],[380,2e3,2700]],V=(E,b,R,P=.05)=>{let N=t.createOscillator(),J=t.createGain(),te=t.createGain(),H=ot(ie),se=t.createBiquadFilter();N.type="sawtooth",N.frequency.value=Qe(E),e.vaiven.connect(N.detune),N.connect(J),H.forEach((ye,Ee)=>{let Te=t.createBiquadFilter();Te.type="bandpass",Te.frequency.value=ye,Te.Q.value=[6,8,10][Ee];let B=t.createGain();B.gain.value=[1,.45,.2][Ee],J.connect(Te),Te.connect(B),B.connect(te)});let re=t.createBufferSource(),G=t.createBiquadFilter(),j=t.createGain();re.buffer=this.ruido,G.type="bandpass",G.frequency.value=H[1]*1.5,G.Q.value=1.2,j.gain.value=.6,re.connect(G),G.connect(j),j.connect(te),se.type="lowpass",se.frequency.value=3e3,te.connect(se),te.gain.value=0,te.gain.setValueAtTime(0,b),te.gain.linearRampToValueAtTime(P,b+.12),te.gain.setValueAtTime(P,b+R*.65),te.gain.exponentialRampToValueAtTime(1e-4,b+R);let ve=r(se,ze(-.2,.2));ve.connect(e.fader),a(ve,this.sala,.8),a(ve,this.eco,.35),N.start(b),N.stop(b+R+.05),re.start(b,Math.random()*2),re.stop(b+R+.05)},Y=[0,2,5,3],le=E=>[0,2,4,6].map(b=>this.nota(E+b,1)),ce=[0,1,2,3,2,1],ae=[1,.55,.8,.65,.9,.5,.75],$=[3,1,2],X=[2,5,9,12,14],D=0,K=0,F=[],q=0,W=[],O=()=>{let E=ot([2,4,5]);W=[0,3,6,10,16,19,22].filter(()=>Math.random()<.6).map(b=>(E=Math.max(0,Math.min(7,E+ot([-1,1,0,2,-2]))),[b,E]))};O(),this.secuenciador(e,i,(E,b)=>{let R=E%16,P=E%32;R===0&&(D=Math.floor(E/16)+1,q=Math.random(),((D-1)%2===0||e.primero)&&(K=Y[((D-1)/2|0)%4],F=le(K),M([F[0],F[1],F[3]].map(te=>te-12),b,s*32)),D%8===1&&O());let N=(D-1)%32;if(F.length){let te=E%ce.length,H=ae[E%ae.length]*ze(.85,1.05);m(F[ce[te]]+(ce[te]===3&&E%12===9?12:0),b,.09*H,ze(.8,1.3),H)}F.length&&X.includes(R)&&D>2&&Math.random()<.75&&m(F[$[(E>>1)%$.length]]+12,b+s*.02,.05,1.6,.6),D>2&&((R===0||R===8&&q>.25||R===11&&q<.3)&&C(b,R===0?1:.85),(R===4||R===12)&&U(b,1),[3,6,10,14].includes(R)&&Math.random()<.7&&z(b,R===6||R===14?1:.7),R%2===1&&Math.random()<.5&&k(b,.6+Math.random()*.4),R===0&&S(this.nota(K,-1),b,s*2.6),R===6&&S(this.nota(K,-1),b,s*2.5),R===12&&S(this.nota(K+(q>.5?4:2),-1),b,s*3,this.nota(K,-1)));let J=W.find(([te])=>te===P);J&&D>4&&N%8>=4&&V(this.nota(J[1],1),b,s*ze(3,6),.11)})}triphop(e){let t=this.ctx,i=80,s=60/i/4,a=.1;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let r=(O,E,b)=>{let R=t.createGain();return R.gain.value=b,O.connect(R),R.connect(E),e.salidas.push(R),e.nodos.push(R),R},o=(O,E)=>{let b=t.createStereoPanner();return b.pan.value=E,O.connect(b),b};e.vaiven=t.createGain();let c=t.createOscillator(),l=t.createGain();c.frequency.value=.33,l.gain.value=6,c.connect(l),l.connect(e.vaiven),c.start(),e.nodos.push(c,l,e.vaiven),this.fondo(e,.006,"highpass",5e3,.4);let u=()=>{let O=t.currentTime+.05;for(let E=0;E<5;E++)Math.random()<.6&&this.ruidoCorto(e,O+Math.random()*.6,ze(.003,.01),ze(.015,.05),"highpass",ze(2e3,6e3));this.luego(e,.6,u)};u();let d=t.createWaveShaper(),h=new Float32Array(4096);for(let O=0;O<4096;O++){let E=O/2047.5-1;h[O]=Math.round(E*48)/48}d.curve=h;let f=t.createGain(),g=t.createBiquadFilter();f.gain.value=.6,g.type="lowpass",g.frequency.value=5200,f.connect(d),d.connect(g),g.connect(e.fader),r(g,this.cuarto,.45),e.nodos.push(d,f,g);let y=(O,E,b,R,P,N,J=0)=>{let te=t.createBufferSource(),H=t.createBiquadFilter(),se=t.createGain();te.buffer=this.ruido,H.type=R,H.frequency.value=P,H.Q.value=N,se.gain.setValueAtTime(b,O),se.gain.exponentialRampToValueAtTime(1e-4,O+E),te.connect(H),H.connect(se),(J?o(se,J):se).connect(f),te.start(O,Math.random()*2),te.stop(O+E+.05)},p=(O,E,b,R,P,N="sine")=>{let J=t.createOscillator(),te=t.createGain();J.type=N,J.frequency.setValueAtTime(E,O),J.frequency.exponentialRampToValueAtTime(b,O+R*.3),te.gain.setValueAtTime(P,O),te.gain.exponentialRampToValueAtTime(1e-4,O+R),J.connect(te),te.connect(f),J.start(O),J.stop(O+R+.02)},m=(O,E=1)=>{p(O,95,44,.45,.55*E),y(O,.012,.08*E,"lowpass",1200,.6)},A=(O,E=1)=>{p(O,190,150,.12,.14*E,"triangle"),y(O,.32,.22*E,"bandpass",1700,.7),y(O,.08,.07*E,"highpass",4500,.6)},M=(O,E=1,b=!1)=>y(O,b?.2:.05,.045*E,"highpass",7e3,.6,ze(-.3,.3)),v=t.createWaveShaper(),S=new Float32Array(1024);for(let O=0;O<1024;O++){let E=O/511.5-1;S[O]=Math.tanh(1.6*E)/Math.tanh(1.6)}v.curve=S;let w=t.createBiquadFilter(),L=t.createGain();w.type="lowpass",w.frequency.value=380,L.gain.value=.1,v.connect(w),w.connect(L),L.connect(e.fader),e.nodos.push(v,w,L);let _=(O,E,b)=>{let R=t.createOscillator(),P=t.createOscillator(),N=t.createGain();P.type="triangle",R.frequency.value=Qe(O),P.frequency.value=Qe(O)*1.003,N.gain.value=0,N.gain.setValueAtTime(0,E),N.gain.linearRampToValueAtTime(.16,E+.04),N.gain.setValueAtTime(.16,E+b*.8),N.gain.linearRampToValueAtTime(1e-4,E+b),R.connect(N),P.connect(N),N.connect(v),[R,P].forEach(J=>{J.start(E),J.stop(E+b+.02)})},C=t.createBiquadFilter();C.type="lowpass",C.frequency.value=1800,C.Q.value=.5,C.connect(e.fader),r(C,this.sala,1),e.nodos.push(C);let U=(O,E,b,R=.011)=>O.forEach(P=>[-10,0,10].forEach(N=>{let J=t.createOscillator(),te=t.createGain(),H=t.createOscillator(),se=t.createGain();J.type="sawtooth",J.frequency.value=Qe(P),J.detune.value=N+ze(-3,3),H.frequency.value=ze(4.8,5.6),se.gain.value=9,H.connect(se),se.connect(J.detune),e.vaiven.connect(J.detune),this.env(te,E,2.4,R,Math.max(0,b-5),E+b+2.6),J.connect(te),o(te,N/14).connect(C),[J,H].forEach(re=>{re.start(E),re.stop(E+b+2.7)})})),z=t.createGain(),k=t.createOscillator(),ie=t.createOscillator(),V=t.createGain(),Y=t.createBiquadFilter();k.type="sine",Y.type="lowpass",Y.frequency.value=2400,ie.frequency.value=5.8,V.gain.value=22,ie.connect(V),V.connect(k.detune),k.frequency.value=Qe(this.nota(4,1)),z.gain.value=0,k.connect(Y),Y.connect(z);let le=o(z,.2);le.connect(e.fader),r(le,this.sala,.9),r(le,this.eco,.35),k.start(),ie.start(),e.nodos.push(z,k,ie,V,Y);let ce=(O,E,b,R=.035)=>{k.frequency.setTargetAtTime(Qe(O),E,.07),z.gain.setTargetAtTime(R,E,.06),z.gain.setTargetAtTime(1e-4,E+b,.18)},ae=(O,E,b=.08)=>{let R=t.createGain();R.gain.value=0,[[1,1,"triangle"],[2,.4,"square"],[3,.12,"sine"]].forEach(([J,te,H])=>{let se=t.createOscillator(),re=t.createGain();se.type=H,se.frequency.value=Qe(O)*J,re.gain.value=te,se.connect(re),re.connect(R),se.start(E),se.stop(E+1.3)}),R.gain.setValueAtTime(b,E),R.gain.exponentialRampToValueAtTime(1e-4,E+1.2);let P=t.createBiquadFilter();P.type="lowpass",P.frequency.value=3e3,R.connect(P);let N=o(P,-.3);N.connect(e.fader),r(N,this.sala,.5),r(N,this.eco,.2)},$=(O,E=3)=>{for(let b=0;b<E;b++){let R=O+b*s*.5,P=t.createBufferSource(),N=t.createBiquadFilter(),J=t.createGain();P.buffer=this.ruido,N.type="bandpass",N.Q.value=6,N.frequency.setValueAtTime(400,R),N.frequency.exponentialRampToValueAtTime(b%2?500:2600,R+s*.22),N.frequency.exponentialRampToValueAtTime(300,R+s*.45),J.gain.setValueAtTime(1e-4,R),J.gain.linearRampToValueAtTime(.16,R+.01),J.gain.exponentialRampToValueAtTime(1e-4,R+s*.45),P.connect(N),N.connect(J),o(J,.35).connect(f),P.start(R,Math.random()*2),P.stop(R+s*.5)}},X=[0,5,3,4],D=0,K=0,F=0,q=[],W=()=>{let O=ot([4,6,7]);q=[0,6,10,16,22,26].filter(()=>Math.random()<.7).map(E=>(O=Math.max(2,Math.min(9,O+ot([-2,-1,1,2,0]))),[E,O,ot([4,6,8])]))};W(),this.secuenciador(e,i,(O,E)=>{let b=O%16,R=O%32,P=E+(b%2?s*a:0);b===0&&(D=Math.floor(O/16)+1,F=Math.random(),((D-1)%2===0||e.primero)&&(K=X[((D-1)/2|0)%4],U([this.nota(K,0),this.nota(K+2,0),this.nota(K+4,0),this.nota(K,1)],E,s*32)),D%4===1&&W());let N=(D-1)%32,J=D<=2,te=N>=20&&N<22;!J&&!te&&((b===0||b===7||b===10&&F>.3||b===15&&F<.2)&&m(P,b===0?1:.85),(b===4||b===12)&&A(P+.008),(b===9||b===14)&&Math.random()<.25&&A(P,.25),b%2===0&&M(P,b%4===2?.9:.55,b===14&&F>.6),b===0&&_(this.nota(K,-1),E,s*7),b===8&&_(this.nota(K+(F>.5?4:0),-1),E,s*6)),D%8===0&&b===12&&!J&&$(P,3);let se=q.find(([re])=>re===R);se&&D>4&&N%8>=4&&ce(this.nota(se[1],1),P,se[2]*s),D>2&&N%8<4&&(b===2||b===6||b===11)&&Math.random()<.55&&ae(this.nota(K+ot([0,2,4,7]),1),P)})}arrancar(){if(this.canal<0){this.gen=null,window.__finoActivo||this.estatica(2.4,.03),this.cat&&this.cat.empieza();return}this.amb=this.canal;let e=mr[this.canal][3],t=this.nuevaGen(e);this.gen=t,this[e](t)}estatica(e,t){let i=this.ctx;if(!i||!this.on)return;let s=i.currentTime,a=i.createBufferSource(),r=i.createBiquadFilter(),o=i.createGain();a.buffer=this.ruido,a.loop=!0,a.playbackRate.value=.85+Math.random()*.3,r.type="bandpass",r.frequency.setValueAtTime(900+Math.random()*1400,s),r.frequency.linearRampToValueAtTime(1400+Math.random()*1800,s+e),r.Q.value=.9,o.gain.setValueAtTime(0,s),o.gain.linearRampToValueAtTime(t,s+Math.min(.3,e/4)),o.gain.setValueAtTime(t,s+e*.55),o.gain.linearRampToValueAtTime(0,s+e),a.connect(r),r.connect(o),o.connect(this.master),a.start(s,Math.random()*2),a.stop(s+e+.05),a.onended=()=>{try{a.disconnect(),r.disconnect(),o.disconnect()}catch{}}}desbloquear(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}if(!this.mudo){let t=this.mudo=new Audio("data:audio/wav;base64,UklGRvQHAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YdAHAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==");t.loop=!0,t.setAttribute("playsinline",""),t.preload="auto"}let e=this.mudo.play();e&&e.catch(()=>{})}async encender(){this.desbloquear(),this.ctx||this.init();let e=this.ctx.resume();if(this.on){await e;return}this.on=!0,this.arrancar(),await e;let t=this.master.gain,i=this.ctx.currentTime;t.cancelScheduledValues(i),t.setValueAtTime(t.value,i),t.linearRampToValueAtTime(.9,i+4)}apagar(){if(!this.ctx)return;this.on=!1,this.matarGen(this.gen,1.2),this.gen=null,this.cat&&this.cat.para(1.2),this.estFino.gain.setTargetAtTime(0,this.ctx.currentTime,.2),this.txG.gain.setTargetAtTime(0,this.ctx.currentTime,.2),this.txEl&&setTimeout(()=>{this.on||this.txEl.pause()},1200),this.mudo&&setTimeout(()=>{this.on||this.mudo.pause()},1500);let e=this.master.gain,t=this.ctx.currentTime;e.cancelScheduledValues(t),e.setValueAtTime(e.value,t),e.linearRampToValueAtTime(0,t+1.4)}sintonizar(e,t){let i=this.canal;this.canal=((e+1)%13+13)%13-1,zi&&this.canal<0&&(this.canal=i===0?11:0),this.on&&(this.matarGen(this.gen,2.5),this.gen=null,this.cat&&this.canal>=0&&this.cat.para(2.5),t||this.estatica(1.8,.03),this.arrancar())}nivel(){if(!this.ctx||!this.on)return 0;this.analyser.getFloatTimeDomainData(this.buf);let e=0;for(let t of this.buf)e+=t*t;return Math.sqrt(e/this.buf.length)+(this.canal<0&&this.cat?this.cat.nivel():0)}},Be=new Iu;window.__radio=Be;var zu=()=>{Be.on&&Be.ctx&&Be.ctx.state!=="running"&&(Be.desbloquear(),Be.ctx.resume().catch(()=>{}))};addEventListener("pointerdown",zu,!0);addEventListener("touchend",zu,!0);document.addEventListener("visibilitychange",()=>{document.hidden||zu()});var fe=n=>document.getElementById(n),kf=fe("vu");for(let n=0;n<24;n++)kf.appendChild(document.createElement("i"));var bt=fe("casillas"),Gf=matchMedia("(max-width:820px)");{let n=document.querySelector(".pletina"),e=fe("bAbre"),t=document.querySelector(".barra");e.onclick=()=>{let s=!n.classList.contains("abierta");n.classList.toggle("abierta",s),e.setAttribute("aria-expanded",s),e.setAttribute("aria-label",s?"Plegar la radio":"Desplegar la radio")};let i=0;addEventListener("scroll",()=>{if(!Gf.matches)return;let s=scrollY;Math.abs(s-i)<6||(t.classList.toggle("oculta",s>80&&s>i),i=s)},{passive:!0})}{let n=document.querySelector(".pletina"),e=matchMedia("(max-width:820px)"),t=()=>{let i=n.getBoundingClientRect().width,s=e.matches;n.classList.toggle("p-m",!s&&i<1e3),n.classList.toggle("p-s",!s&&i<760)};new ResizeObserver(t).observe(n),e.addEventListener("change",t),t()}{let n=document.createElement("button");n.id="canal0",n.className="c00",n.title="aurality \xB7 fragmentos del cat\xE1logo",n.setAttribute("aria-label","Canal 00, aurality, fragmentos del cat\xE1logo"),n.onclick=()=>ki(-1),zi&&(n.disabled=!0,n.style.visibility="hidden",n.setAttribute("aria-hidden","true")),bt.appendChild(n)}mr.forEach(([n,,,e],t)=>{let i=document.createElement("button");i.id="canal"+(t+1),i.title=n+" \xB7 "+Lc[e],i.setAttribute("aria-label","Canal "+String(t+1).padStart(2,"0")+", "+n+", "+Lc[e]),i.onclick=()=>ki(t),bt.appendChild(i)});function Jx(){if("mediaSession"in navigator)try{let n=Be.canal,e=n<0?"CANAL 00 \xB7 aurality":`CANAL ${String(n+1).padStart(2,"0")} \xB7 ${mr[n][0]}`;navigator.mediaSession.metadata=new MediaMetadata({title:e,artist:"aurality \xB7 radio AU-00",album:"Broadcasted from Elda",artwork:[{src:"/apple-touch-icon.png",sizes:"180x180",type:"image/png"},{src:"/icono-512.png",sizes:"512x512",type:"image/png"}]}),navigator.mediaSession.playbackState=Be.on?"playing":"paused"}catch{}}if("mediaSession"in navigator)try{navigator.mediaSession.setActionHandler("play",()=>{Be.on||gr()}),navigator.mediaSession.setActionHandler("pause",()=>{Be.on&&gr()}),navigator.mediaSession.setActionHandler("nexttrack",()=>fe("bNext").click()),navigator.mediaSession.setActionHandler("previoustrack",()=>fe("bPrev").click())}catch{}function wt(){if(Jx(),bt.querySelectorAll("button").forEach((a,r)=>a.setAttribute("aria-pressed",r-1===Be.canal?"true":"false")),window.__fino&&window.__fino.pinta())return;if(Be.canal<0){fe("canalK").textContent="Radio \xB7 cat\xE1logo",fe("canalNom").textContent="CANAL 00 \xB7 aurality",fe("canalNum").textContent="00 / 12",fe("canalSub").innerHTML=Be.cat?Be.cat.rotulo():"Fragmentos del cat\xE1logo";return}fe("canalK").textContent="Radio ambient \xB7 en directo";let[n,e,t,i]=mr[Be.canal],s=String(Be.canal+1).padStart(2,"0");fe("canalNom").textContent="CANAL "+s+" \xB7 "+n,fe("canalNum").textContent=s+" / 12",fe("canalSub").textContent=Lc[i].charAt(0).toUpperCase()+Lc[i].slice(1)+" \xB7 "+Af[e%12].charAt(0)+Af[e%12].slice(1).toLowerCase()+" "+Xx[t]+" \xB7 en directo"}function ei(){let n=Be.on;fe("bPlay").setAttribute("aria-pressed",n),fe("bPlay").setAttribute("aria-label",n?"Pausar":"Reproducir"),fe("icoPlay").innerHTML=n?'<path d="M3 2h3.5v12H3zM9.5 2H13v12H9.5z"/>':'<path d="M3 1.5v13L14.5 8z"/>',fe("led").classList.toggle("on",n),Pu(),fe("estadoTxt").textContent=n?"En directo":Fi?"En pausa":"En espera"}var Fi=!1,ta=0;async function gr(){Be.on?Be.apagar():await Be.encender(),ei(),wt()}var Vc=n=>n<0?-Math.PI/12:-(n+1)*Math.PI/6;function ki(n){Be.sintonizar(n),wt(),ta=1,ls=Vc(Be.canal);try{localStorage.setItem("au-canal",Be.canal)}catch{}}var na=fe("escalaDial"),Sf=fe("escAguja"),jx=fe("escLect");fe("escMarcas").innerHTML=Array.from({length:121},(n,e)=>`<i class="${e%10?e%5?"":"m":"c"}" style="left:${(e/120*100).toFixed(3)}%"></i>${e%10?"":`<b style="left:${(e/120*100).toFixed(3)}%">${String(e/10).padStart(2,"0")}</b>`}`).join("");var Tu=n=>{if(n){let e=document.querySelector(".pletina").getBoundingClientRect(),t=innerWidth<821?10:20,i=document.querySelector(".pletina");Object.assign(na.style,{left:e.left+t+"px",width:e.width-2*t+"px",bottom:`calc(${getComputedStyle(i).bottom} + ${i.offsetHeight+10}px)`,top:"auto"})}else na.classList.remove("desliza"),rs.style.left=rs.style.width="";na.classList.toggle("on",n)},Nc=64,rs=fe("escMarcas"),Vu=zi?1:0;var Hf=n=>{if(na.classList.contains("desliza")){let e=na.clientWidth/2;rs.style.width=12*Nc+"px",rs.style.left=e-n*Nc+"px",Sf.style.left=e+"px"}else Sf.style.left=rs.offsetLeft+n/12*rs.offsetWidth+"px";jx.textContent=n.toFixed(1).padStart(4,"0")},ku=[],_n=null,kc=document.createElement("i");kc.className="aguja";kc.setAttribute("aria-hidden","true");bt.appendChild(kc);var Wf=()=>[...bt.querySelectorAll("button")].map(n=>n.offsetLeft+n.offsetWidth/2);var Kx=n=>{let e=Wf(),t=Math.max(0,Math.min(11,Math.floor(n)));return e[t]+(e[t+1]-e[t])*(n-t)};async function qf(){if(sa)try{let n=await fetch("/tx/activas",{cache:"no-store"});n.ok&&(ku=await n.json())}catch{}}var Mf=n=>{let e=Math.round(n),t=Math.abs(n-e),i=null,s=9;return ku.forEach(a=>{let r=Math.abs(n-a.f);r<s&&(s=r,i=a)}),{f:n,n:e,dC:t,tx:s<.45?i:null,dT:s,fijado:s<=.06,cerca:s<.45&&s>.06}},vr=null;function ln(n,e){if(n==null){clearTimeout(ln.t),_n=null,bt.classList.remove("fino"),vr=null,Be.ajustaFino({f:Be.canal+1,senal:1,ruido:0,tx:null}),Pu(),wt();return}n=Math.round(Math.max(Vu,Math.min(12,n))*100)/100;let t=Mf(n);if(e){if(clearTimeout(ln.t),t.tx&&t.dT<=.12)n=t.tx.f;else if(t.dC<=.12){ln(null),t.n-1!==Be.canal&&ki(t.n-1);return}t=Mf(n)}_n=n,bt.classList.add("fino"),kc.style.left=Kx(n)+"px",Hf(n),clearTimeout(ln.t);let i=t.dC<=.12&&t.n-1!==Be.canal&&!t.tx;i&&(ln.t=setTimeout(()=>{_n!=null&&Math.abs(_n-t.n)<=.12&&(window.__finoActivo=!0,Be.sintonizar(t.n-1,!0),window.__finoActivo=!1,ls=Vc(Be.canal),ta=.6,ln(_n))},300));let s=i?0:t.dC<=.12?1-t.dC*2.5:Math.max(0,1-(t.dC-.12)/.22),a=t.tx?1-t.dT/.45:0;vr=t,Be.ajustaFino({f:n,senal:s*(1-a),ruido:t.fijado?0:Math.min(.036,(1-s)*.032+a*.012+.003),tx:t.tx,txNivel:t.fijado?.3:Math.pow(a,1.6)*.2,claro:t.fijado}),Pu(),wt(),t.fijado&&e&&Qx(t.tx)}function Pu(){let n=_n==null?null:vr,e=Be.on&&(!n||n.dC<=.12||n.cerca||n.fijado);["tAzul","tAzulM"].forEach(t=>{let i=fe(t);i.classList.toggle("on",e),i.classList.toggle("cerca",!!(Be.on&&n&&n.cerca)),i.classList.toggle("fijo",!!(Be.on&&n&&n.fijado))})}window.__fino={pinta(){if(_n==null||!vr)return!1;let n=vr,e=_n.toFixed(1).padStart(4,"0");return fe("canalNum").textContent=e,fe("canalK").textContent="Sinton\xEDa fina",n.dC<=.12&&!n.tx&&n.n-1===Be.canal?!1:n.dC<=.12&&!n.tx?(fe("canalNom").textContent="SINTONIZANDO \xB7 "+wn(n.n),fe("canalSub").textContent="Canal "+wn(n.n)+" \xB7 "+e,!0):(fe("canalNom").textContent=n.fijado?`${n.tx.id} \xB7 TRANSMISI\xD3N`:n.cerca?"SE\xD1AL D\xC9BIL\u2026":"SIN SE\xD1AL",fe("canalSub").innerHTML=n.fijado?`Frecuencia ${e} \xB7 <a href="#registro">registro de escucha</a>`:`Entre canales \xB7 ${e}`,!0)}};{let n=0,e=0,t=!1,i=!1,s=Nc,a=o=>Math.max(Vu,Math.min(12,e+(o.clientX-n)/s));bt.addEventListener("pointerdown",o=>{if(!(o.pointerType==="mouse"&&o.button!==0)){n=o.clientX,e=_n??Be.canal+1,i=o.pointerType!=="touch",t=!1;try{bt.setPointerCapture(o.pointerId)}catch{}!Be.on&&Fi&&gr(),Be.txPrepara()}}),bt.addEventListener("pointermove",o=>{!bt.hasPointerCapture||!bt.hasPointerCapture(o.pointerId)||!t&&Math.abs(o.clientX-n)<(i?10:6)||(t||(n=o.clientX,Tu(!0),na.classList.toggle("desliza",!i),s=i?rs.getBoundingClientRect().width/12:Nc,Hf(e)),t=!0,o.preventDefault(),ln(a(o)))});let r=o=>{let c=o.clientX-bt.getBoundingClientRect().left;if(t)ln(a(o),!0);else{let l=Wf(),u=l.reduce((d,h,f)=>Math.abs(h-c)<Math.abs(l[d]-c)?f:d,0);ln(null),ki(u-1)}bt.dataset.arr="1",setTimeout(()=>delete bt.dataset.arr,0),t=!1,Tu(!1)};bt.addEventListener("pointerup",r),bt.addEventListener("pointercancel",()=>{t=!1,Tu(!1)}),bt.addEventListener("click",o=>{bt.dataset.arr?(o.stopPropagation(),o.preventDefault()):o.target.closest("button")&&ln(null)},!0),bt.addEventListener("keydown",o=>{if(o.key!=="ArrowLeft"&&o.key!=="ArrowRight")return;o.preventDefault();let c=(_n??Be.canal+1)+(o.key==="ArrowRight"?.1:-.1);clearTimeout(bt.tk),ln(c),bt.tk=setTimeout(()=>ln(_n,!0),700)})}var $f="au-registro",Lu=()=>{try{return JSON.parse(localStorage.getItem($f)||"[]")}catch{return[]}};async function Qx(n){let e=Lu().find(s=>s.id===n.id);if(e){Nu(e,!0);return}let t={id:n.id,f:n.f,texto:""};try{let s=await fetch("/tx/i/"+encodeURIComponent(n.id),{cache:"no-store"});s.ok&&(t=await s.json())}catch{}let i={id:t.id,f:t.f,texto:t.texto||"",t:Date.now()};try{localStorage.setItem($f,JSON.stringify([i,...Lu()]))}catch{}Nu(i,!1)}var Gu=n=>{let e=new Date(n);return[wn(e.getDate())+"."+wn(e.getMonth()+1)+"."+String(e.getFullYear()).slice(-2),wn(e.getHours())+":"+wn(e.getMinutes())]};function Nu(n,e){let[t,i]=Gu(n.t),s=document.createElement("div");s.className="qsl-velo",s.innerHTML=`<div class="qsl" role="dialog" aria-modal="true" aria-label="Tarjeta de escucha ${ge(n.id)}">
    <div class="k"><span>Tarjeta de escucha \xB7 AU-00</span><span>${ge(n.id)}</span></div>
    <div class="fq">${n.f.toFixed(1).padStart(4,"0")}<small>DIAL</small></div>
    <div class="cap">${e?"YA LA TEN\xCDAS":"TRANSMISI\xD3N CAPTADA"}</div>
    <div class="dat"><span><b>FECHA</b>${t}</span><span><b>HORA</b>${i}</span><span><b>DESDE</b>Elda \xB7 38.48\xB0N</span></div>
    ${n.texto?`<p>${ge(n.texto)}</p>`:""}
    <div class="acciones"><button class="tecla oscura" type="button" data-a="guarda">Guardar tarjeta</button><a class="tecla" href="#registro" data-a="reg">Registro</a><button class="tecla" type="button" data-a="cierra">Seguir escuchando</button></div></div>`,document.body.appendChild(s);let a=()=>s.remove();s.addEventListener("click",r=>{let o=r.target.closest("[data-a]");(r.target===s||o&&o.dataset.a!=="guarda")&&a(),o&&o.dataset.a==="guarda"&&e_(n)}),s.addEventListener("keydown",r=>{r.key==="Escape"&&a()}),s.querySelector('[data-a="cierra"]').focus()}function e_(n){let i=document.createElement("canvas");i.width=1200,i.height=750;let s=i.getContext("2d"),[a,r]=Gu(n.t),o="JetBrains Mono, monospace",c=34;s.fillStyle="#9DAFC5",s.fillRect(0,0,1200,750),s.beginPath(),[[c,0],[1200-c,0],[1200,c],[1200,750-c],[1200-c,750],[c,750],[0,750-c],[0,c]].forEach(([u,d],h)=>h?s.lineTo(u,d):s.moveTo(u,d)),s.closePath();let l=s.createLinearGradient(0,0,0,750);if(l.addColorStop(0,"#f0efea"),l.addColorStop(1,"#dad8d1"),s.fillStyle=l,s.fill(),s.fillStyle="#4a5060",s.font=`700 22px ${o}`,s.fillText("TARJETA DE ESCUCHA \xB7 AU-00 \xB7 RECEPTOR",70,96),s.textAlign="right",s.fillText(n.id,1130,96),s.textAlign="left",s.fillStyle="#0E0F12",s.font=`800 230px ${o}`,s.fillText(n.f.toFixed(1).padStart(4,"0"),62,330),s.fillStyle="#D62C2C",s.fillRect(70,372,64,8),s.fillStyle="#0E0F12",s.font=`800 40px ${o}`,s.fillText("TRANSMISI\xD3N CAPTADA",70,450),s.fillStyle="#3b4150",s.font=`500 26px ${o}`,s.fillText(`${a}  \xB7  ${r}  \xB7  ELDA 38.48\xB0N 0.79\xB0O`,70,500),n.texto){s.font=`500 25px ${o}`;let u="",d=570;n.texto.split(" ").forEach(h=>{s.measureText(u+h).width>1060&&(s.fillText(u,70,d),u="",d+=36),u+=h+" "}),d<680&&s.fillText(u,70,d)}s.fillStyle="#6F6D68",s.font=`700 20px ${o}`,s.textAlign="right",s.fillText("aurality \xB7 frecuencias ocultas",1130,694),i.toBlob(async u=>{let d=`aurality-${n.id.toLowerCase()}-${n.f.toFixed(1)}.png`,h=new File([u],d,{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[h]})){await navigator.share({files:[h],title:"aurality \xB7 "+n.id});return}}catch(g){if(g&&g.name==="AbortError")return}let f=document.createElement("a");f.href=URL.createObjectURL(u),f.download=d,document.body.appendChild(f),f.click(),setTimeout(()=>{URL.revokeObjectURL(f.href),f.remove()},1e3)},"image/png")}function Xf(n){n===void 0&&(n=[],sa&&fetch("/tx/registro",{cache:"no-store"}).then(r=>r.ok?r.json():[]).then(r=>{tt==="registro"&&r.length&&Xf(r)}).catch(()=>{}));let e=fe("panel"),t=Lu(),i=n.filter(r=>!t.some(o=>o.id===r.id)),s=new Set([...t.map(r=>r.id),...n.map(r=>r.id)]).size,a=r=>r?r.slice(8,10)+"."+r.slice(5,7):"";e.innerHTML=`<header class="panel-cab"><div><h2>REGISTRO DE ESCUCHA</h2><div class="sub">Frecuencias ocultas \xB7 ${t.length} de ${s} transmisiones captadas en este aparato</div></div></header>
    <div class="panel-cuerpo"><div class="registro">
      ${t.length?t.map(r=>{let[o,c]=Gu(r.t);return`<div class="ent"><span class="fq">${r.f.toFixed(1).padStart(4,"0")}</span><span class="id">${ge(r.id)} \xB7 CAPTADA EL ${o} A LAS ${c}</span><button class="tecla" type="button" data-id="${ge(r.id)}">Tarjeta</button><span class="tx">${ge(r.texto||"")}</span></div>`}).join(""):'<p class="bio">Todav\xEDa no has captado ninguna transmisi\xF3n. Hay se\xF1ales escondidas entre los canales: arrastra sobre las casillas de la pletina para sintonizar fino y vigila el piloto azul.</p>'}
      ${i.length?`<div class="sub2">SE TE ESCAPARON</div>${i.map(r=>`<div class="ent perdida"><span class="fq">${r.f.toFixed(1).padStart(4,"0")}</span><span class="id">${ge(r.id)} \xB7 EMITIDA DEL ${a(r.desde)} AL ${a(r.hasta)}${r.noche?" \xB7 SOLO DE NOCHE":""}</span><span></span><span class="tx">No volver\xE1 a emitirse.</span></div>`).join("")}`:""}
    </div></div>`,e.querySelectorAll("[data-id]").forEach(r=>r.onclick=()=>Nu(t.find(o=>o.id===r.dataset.id),!0))}fe("bPlay").onclick=gr;fe("bPrev").onclick=()=>{ln(null),ki(Be.canal-1)};fe("bNext").onclick=()=>{ln(null),ki(Be.canal+1)};async function Gc(n){Fi=!0,fe("encendido").classList.add("fuera"),pp=performance.now(),n&&await Be.encender(),ei()}fe("bOn").onclick=()=>Gc(!0);fe("bMudo").onclick=()=>Gc(!1);wt();ei();var Yf=()=>{fe("hora").textContent=new Intl.DateTimeFormat("es-ES",{hour:"2-digit",minute:"2-digit",timeZone:"Europe/Madrid"}).format(new Date)+" CET"};Yf();setInterval(Yf,15e3);function Hc(){let n=document.querySelector('.placa[aria-current="page"]');if(!n)return;let e=fe("punta");e.style.top=`calc(${parseFloat(n.style.top)+8.673/2}% - ${e.offsetHeight/2}px)`}var kt=await(async()=>{let n={...vf,...xf,..._f,...yf},e=async a=>{try{let r=await fetch("contenido/"+a,{cache:"no-store"});if(r.ok)return await r.json()}catch{}return null},t=await Promise.all(["lanzamientos.json","artistas.json","senal.json","textos.json"].map(e)),i=Object.assign({},n,...t.filter(Boolean));Array.isArray(i.artists)&&(i.artists=Object.fromEntries(i.artists.filter(a=>a&&a.name).map(({name:a,...r})=>[a.trim().toUpperCase(),r]))),i.releases=(i.releases||[]).filter(a=>a&&a.code&&a.artist).map(a=>({...a,artist:a.artist.trim().toUpperCase(),title:a.title||"[ S/T ]",destacado:a.destacado===!0||a.destacado==="true",edicion:a.edicion===!0||a.edicion==="true",historia:String(a.historia||"").trim(),video:String(a.video||"").trim(),fotos:(a.fotos||[]).map(r=>typeof r=="string"?{img:r,pie:""}:{img:r&&(r.imagen||r.img)||"",pie:r&&r.pie||""}).filter(r=>r.img),fecha:/^\d{4}-\d{2}-\d{2}/.test(String(a.fecha||""))?String(a.fecha).slice(0,10):"",presave:a.presave||"",fragmentos:(a.fragmentos||[]).map(r=>typeof r=="string"?r:r&&(r.archivo||r.file)).filter(Boolean),format:(a.format||"SINGLE").toUpperCase(),genre:(a.genre||"\u2014").toUpperCase().trim(),cover:a.cover||"",soundcloud:a.soundcloud||"",audio:a.audio?"/"+String(typeof a.audio=="string"?a.audio:a.audio.archivo||a.audio.file||"").replace(/^\/+/,""):"",spotify:a.spotify||"",bandcamp:a.bandcamp||"",year:+a.year||a.year||"",credits:(a.credits||[]).map(r=>Array.isArray(r)?r:[r.rol||"",r.nombre||""]).filter(([r])=>r),tracks:(a.tracks||[]).map(r=>typeof r=="string"?r:r&&r.titulo||"").filter(Boolean),participantes:(a.participantes||[]).map(r=>Array.isArray(r)?r:[r&&r.artista||"",r&&r.rol||""]).map(([r,o])=>[String(r).trim().toUpperCase(),String(o||"").trim()]).filter(([r])=>r)})).sort((a,r)=>r.code.localeCompare(a.code,"es",{numeric:!0})),i.senal=(i.senal||[]).filter(a=>a&&a.mes&&a.anio).map(a=>({...a,mes:+a.mes,anio:+a.anio,temas:+a.temas||null,code:a.code||String(a.mes).padStart(2,"0")+"_"+String(a.anio).slice(-2),destacados:(a.destacados||[]).map(r=>Array.isArray(r)?r:[r.artista||"",r.tema||"",r.prod||""]).filter(([r])=>r)}));let s=a=>a.fecha&&new Date(a.fecha+"T00:00:00")>Date.now();return i.proximos=i.releases.filter(s).sort((a,r)=>a.fecha.localeCompare(r.fecha)),i.releases=i.releases.filter(a=>!s(a)),i})(),sa=window.AU_DEPLOY===!0,et=kt.releases,t_=["SINGLE","EP","REMIXES","\xC1LBUM","EDIT"],fi=n=>[...new Set(n)],Wc=n=>n.artist.split(/\s+[×x]\s+/i).map(e=>e.trim()),Zf=Object.keys(kt.artists||{}).length?new Set(Object.keys(kt.artists)):new Set(et.flatMap(Wc)),qc=n=>Zf.has(n),Dc=n=>Wc(n).filter(qc),aa=n=>(n.participantes||[]).filter(([e])=>qc(e)),ia=n=>!n.edicion&&!Dc(n).length&&aa(n).length>0,$c=n=>fi([...Dc(n),...aa(n).map(([e])=>e)]),Jf=[...Zf].filter(n=>et.some(e=>$c(e).includes(n))),n_=et.some(ia),i_=et.some(n=>n.edicion),xr=[["art","Cat\xE1logo de artistas"],...n_?[["part","Participaciones"]]:[],...i_?[["ed","Ediciones del sello"]]:[]],jf=n=>ia(n)?"part":n.edicion?"ed":"art",os=new Set(xr.map(([n])=>n)),Qn=new Set,vn=new Set,Bi=fi(et.map(n=>n.genre)).sort(),cs=[{k:"format",lbl:"FORMATO",ops:["TODOS",...t_.filter(n=>et.some(e=>e.format===n))]},{k:"year",lbl:"A\xD1O",ops:["TODOS",...fi(et.map(n=>n.year)).sort((n,e)=>e-n).map(String)]}],Uc=(()=>{try{return localStorage.getItem("au-orden")||"recientes"}catch{return"recientes"}})(),wc=n=>n.fecha?Date.parse(n.fecha):Date.UTC(+n.year||0,0,1),bf={recientes:(n,e)=>wc(e)-wc(n)||e.code.localeCompare(n.code,"es",{numeric:!0}),antiguos:(n,e)=>wc(n)-wc(e)||n.code.localeCompare(e.code,"es",{numeric:!0}),az:(n,e)=>Gt(n).replace(/^[^\p{L}\p{N}]+/u,"").localeCompare(Gt(e).replace(/^[^\p{L}\p{N}]+/u,""),"es",{sensitivity:"base",numeric:!0})},Xc=(n,e)=>(e==="tipo"||os.has(jf(n)))&&(e==="art"||!Qn.size||$c(n).some(t=>Qn.has(t)))&&(e==="gen"||!vn.size||vn.has(n.genre))&&cs.every((t,i)=>xn[i]===0||String(n[t.k])===t.ops[xn[i]]),Yc=()=>{xn.fill(0),Qn.clear(),vn.clear(),xr.forEach(([n])=>os.add(n))},xn=cs.map(()=>0),En="rejilla",_r=matchMedia("(min-width:821px) and (hover:hover) and (pointer:fine)");try{En=localStorage.getItem("au-vista")||"rejilla"}catch{}var Eu=()=>En==="mesa"&&!_r.matches?"rejilla":En;fe("nRefs").textContent=et.length+" referencias";var ge=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),s_=n=>!n||/POR DEFINIR/i.test(n)||/S\/T/.test(n),a_=[320,640,1280],Du=(n,e)=>{let t=/^\/?(covers|senal)\/([^/?#\s,]+)$/.exec(n||"");return t?`/${t[1]}/v/${encodeURI(t[2])}-${e}.webp`:""},Ar=(n,e)=>Du(n,320)?` srcset="${a_.map(t=>ge(Du(n,t))+" "+t+"w").join(", ")}" sizes="${e}" onerror="this.onerror=null;this.removeAttribute('srcset');this.removeAttribute('sizes')"`:"",r_="(max-width:599px) 46vw, (max-width:820px) 31vw, 190px",Hu="(max-width:599px) 92vw, (max-width:820px) 40vw, 480px",Kf=(n,e,t=r_)=>n.cover?`<img class="${e}" src="${ge(n.cover)}"${Ar(n.cover,t)} alt="Portada de ${ge(n.title)}" loading="lazy" decoding="async">`:`<div class="${e} sinp" role="img" aria-label="Sin portada todav\xEDa"><b>${n.code}</b><span>SIN PORTADA</span></div>`,Gt=n=>/S\/T/.test(n.title)?"Sin t\xEDtulo":n.title,Qf=n=>aa(n).map(([e,t])=>`<span class="part"><i aria-hidden="true"></i><span>${ge(e)}${t?" \xB7 "+ge(t):""}</span></span>`).join("");function ep(){return et.filter(n=>Xc(n,null))}var tp=()=>{};function jn(){if(document.querySelectorAll(".selector").forEach(u_),document.querySelectorAll(".llave").forEach(n=>{let e=n.dataset.t?os.has(n.dataset.t):Qn.has(n.dataset.a);n.setAttribute("aria-pressed",e);let t=et.filter(i=>Xc(i,n.dataset.t?"tipo":"art")&&(n.dataset.t?jf(i)===n.dataset.t:$c(i).includes(n.dataset.a))).length;n.querySelector(".n").textContent=t,n.classList.toggle("cero",!t)}),document.querySelectorAll(".orden button").forEach(n=>n.setAttribute("aria-pressed",n.dataset.o===Uc)),fe("nFil")){let n=(os.size<xr.length?1:0)+Qn.size+vn.size+xn.filter(Boolean).length;fe("nFil").textContent=n?"\xB7 "+n:"",fe("bLimpia").hidden=!n}document.querySelectorAll(".riel").forEach(n=>{let e=+n.dataset.i,t=n.querySelectorAll("button");t.forEach((s,a)=>s.setAttribute("aria-pressed",a===xn[e]));let i=t[xn[e]];n.querySelector(".cursor").style.left=i.offsetLeft+i.offsetWidth/2+"px"}),np()}function np(){let n=vn.size?Bi.indexOf([...vn][0])+1:0;tp([...["format","year"].map(e=>{let t=cs.findIndex(i=>i.k===e);return cs[t].ops.length>1?xn[t]/(cs[t].ops.length-1):0}),Bi.length?n/Bi.length:0])}var ip=n=>`<a class="ref" href="#${n.code}" data-c="${n.code}">${Kf(n,"portada")}${ia(n)?'<span class="marca">PARTICIPACI\xD3N</span>':n.edicion?'<span class="marca sello">EDICI\xD3N DEL SELLO</span>':""}
      <span class="c">${n.code} \xB7 ${ge(n.format)} \xB7 ${n.year}</span><span class="a">${ge(n.artist)}</span><span class="t">${ge(Gt(n))}</span>${Qf(n)}</a>`,o_=n=>`<a class="fila" href="#${n.code}" data-c="${n.code}"><span class="x">${n.code}</span><span class="a">${ge(n.artist)}${ia(n)?"<small>PART.</small>":n.edicion?"<small>SELLO</small>":""}</span><span class="t">${ge(Gt(n))}</span><span class="f x">${ge(n.format)}</span><span class="g x">${ge(n.genre)}</span><span class="y x">${n.year}</span><span aria-hidden="true">\u2192</span></a>`,us=matchMedia("(prefers-reduced-motion: reduce)"),Oc=null;function Kn(){sp(),Vi&&Vi.mide()}function sp(){let n=ep(),e=new Set(n.map(u=>u.code)),t=fe("resultados");fe("conteo").textContent=`Mostrando ${n.length} de ${et.length}`;let i=new Map([...et].sort(bf[Uc]||bf.recientes).map((u,d)=>[u.code,d])),s=()=>t.querySelectorAll("[data-c]").forEach(u=>{u.style.order=i.get(u.dataset.c)}),a=En!=="lista"?".ref":".fila[data-c]";if(Oc!==En||!t.querySelector(a)){t.innerHTML=(En!=="lista"?`<div class="rejilla">${et.map(ip).join("")}</div>`:`<div class="lista"><div class="fila cab" aria-hidden="true"><span>C\xD3DIGO</span><span>ARTISTA</span><span class="t">T\xCDTULO</span><span class="f">FORMATO</span><span class="g">G\xC9NERO</span><span class="y">A\xD1O</span><span></span></div>${et.map(o_).join("")}</div>`)+'<div class="vacio" id="vacioC" hidden>Ninguna referencia con estos filtros.<button class="tecla" id="bLimpiar">Quitar filtros</button></div>',fe("bLimpiar").onclick=()=>{Yc(),jn(),Kn()},Oc=En,t.querySelectorAll(a).forEach(u=>{u.hidden=!e.has(u.dataset.c)}),s(),fe("vacioC").hidden=n.length>0;return}let r=[...t.querySelectorAll(a)];t.querySelectorAll(".fantasma").forEach(u=>u.remove()),r.forEach(u=>u.getAnimations().forEach(d=>d.cancel()));let o=t.getBoundingClientRect(),c=new Map;if(r.forEach(u=>{u.hidden||c.set(u,u.getBoundingClientRect())}),r.forEach(u=>{let d=!e.has(u.dataset.c);if(d&&!u.hidden&&!us.matches){let h=c.get(u),f=u.cloneNode(!0);f.classList.add("fantasma"),f.removeAttribute("href"),f.setAttribute("aria-hidden","true"),Object.assign(f.style,{position:"absolute",left:h.left-o.left+"px",top:h.top-o.top+"px",width:h.width+"px",height:h.height+"px",margin:0,pointerEvents:"none"}),t.appendChild(f),f.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(.9)"}],{duration:240,easing:"cubic-bezier(.4,0,.2,1)"}).onfinish=()=>f.remove()}u.hidden=d}),s(),fe("vacioC").hidden=n.length>0,us.matches)return;let l=0;r.forEach(u=>{if(u.hidden)return;let d=c.get(u),h=u.getBoundingClientRect();if(d){let f=d.left-h.left,g=d.top-h.top;(f||g)&&u.animate([{transform:`translate(${f}px,${g}px)`},{transform:"none"}],{duration:420,easing:"cubic-bezier(.2,.7,.2,1)"})}else u.animate([{opacity:0,transform:"translateY(12px) scale(.95)"},{opacity:1,transform:"none"}],{duration:380,delay:Math.min(l++,10)*28,easing:"cubic-bezier(.2,.7,.2,1)",fill:"backwards"})})}var c_=n=>et.filter(e=>Xc(e,"gen")&&e.genre===n).length,l_=()=>`<div class="fader"><span class="lbl">G\xC9NERO</span><div class="selector">
  <button class="visor" id="visG" aria-haspopup="listbox" aria-expanded="false"><span class="v"></span><span class="nn"></span><span class="tri" aria-hidden="true"></span></button>
  <div class="desp" hidden><input id="busG" type="search" placeholder="Buscar g\xE9nero\u2026" autocomplete="off" aria-label="Buscar g\xE9nero"><ul role="listbox" aria-multiselectable="true" aria-label="G\xE9neros"></ul></div></div></div>`;function u_(n){let e=[...vn];n.querySelector(".v").textContent=e.length?e.length<=2?e.join(" + "):e.length+" G\xC9NEROS":"TODOS",n.querySelector(".nn").textContent=e.length?ep().length+" ref.":Bi.length+" en total"}function h_(n){let e=n.querySelector(".visor"),t=n.querySelector(".desp"),i=n.querySelector("input"),s=n.querySelector("ul"),a=0,r=[],o=()=>{let u=i.value.trim().toLowerCase();r=[null,...Bi].filter(d=>d===null?!u:d.toLowerCase().includes(u)),a=Math.min(a,Math.max(0,r.length-1)),s.innerHTML=r.length?r.map((d,h)=>{let f=d===null?!vn.size:vn.has(d),g=d===null?et.filter(y=>Xc(y,"gen")).length:c_(d);return`<li role="option" data-g="${d===null?"":ge(d)}" aria-selected="${f}" class="${g||f?"":"cero"}${h===a?" act":""}"><span><i class="caja" aria-hidden="true"></i>${d===null?"TODOS":ge(d)}</span><span>${g}</span></li>`}).join(""):'<li class="nada">Sin resultados</li>',s.querySelector(".act")?.scrollIntoView({block:"nearest"})},c=u=>{t.hidden=!u,e.setAttribute("aria-expanded",u),u&&(i.value="",a=0,o(),i.focus({preventScroll:!0}),requestAnimationFrame(()=>t.scrollIntoView({block:"nearest",behavior:us.matches?"auto":"smooth"})))},l=u=>{u===null?vn.clear():vn.has(u)?vn.delete(u):vn.add(u),o(),jn(),Kn()};e.onclick=()=>c(t.hidden),i.oninput=()=>{a=0,o()},i.onkeydown=u=>{u.key==="ArrowDown"||u.key==="ArrowUp"?(u.preventDefault(),a=Math.max(0,Math.min(r.length-1,a+(u.key==="ArrowDown"?1:-1))),o()):u.key==="Enter"?(u.preventDefault(),a<r.length&&l(r[a])):u.key==="Escape"&&(c(!1),e.focus())},s.onclick=u=>{let d=u.target.closest("li[data-g]");d&&l(d.dataset.g||null)},n._cierra&&document.removeEventListener("pointerdown",n._cierra),n._cierra=u=>{if(!n.isConnected)return document.removeEventListener("pointerdown",n._cierra);!t.hidden&&!n.contains(u.target)&&c(!1)},document.addEventListener("pointerdown",n._cierra)}var d_=(n,e)=>n.length<=e?n:n.split(" ")[0].length<=e?n.split(" ")[0]:n.slice(0,e-1)+".";function f_(){let n=fe("panel");n.innerHTML=`<header class="panel-cab"><div><h2>CAT\xC1LOGO</h2><div class="sub">${et.length} referencias \xB7 ${et[et.length-1].code}\u2013${et[0].code} \xB7 Broadcasted from Elda</div></div>
    <div class="vista" role="group" aria-label="Vista"><button class="tecla" id="vMes" aria-pressed="${Eu()==="mesa"}">Mesa</button><button class="tecla" id="vRej" aria-pressed="${Eu()==="rejilla"}">Rejilla</button><button class="tecla" id="vLis" aria-pressed="${Eu()==="lista"}">Lista</button></div></header>
    <div class="panel-cuerpo"><div class="filtrosM"><button class="tecla" type="button" id="bFil" aria-expanded="false" aria-controls="faders">Filtros<b id="nFil"></b><i aria-hidden="true"></i></button><button class="tecla" type="button" id="bLimpia" hidden>Limpiar</button></div><div class="faders" id="faders" aria-label="Filtros \xB7 corredor AU-04">
      ${xr.length>1?`<div class="fader"><span class="lbl">TIPO</span><div class="llaves" role="group" aria-label="Tipo">${xr.map(([t,i])=>`<button class="llave" type="button" data-t="${t}" aria-pressed="true"><i aria-hidden="true"></i>${i}<span class="n"></span></button>`).join("")}</div></div>`:""}
      <div class="fader"><span class="lbl">ARTISTA</span><div class="llaves" role="group" aria-label="Artistas (varios a la vez; ninguno = todos)">${Jf.map(t=>`<button class="llave" type="button" data-a="${ge(t)}" aria-pressed="false"><i aria-hidden="true"></i>${ge(t)}<span class="n"></span></button>`).join("")}</div></div>
      ${cs.map((t,i)=>`<div class="fader"><span class="lbl">${t.lbl}</span>
      <div class="riel" data-i="${i}" role="group" aria-label="${t.lbl}">${t.ops.map((s,a)=>`<button id="f${i}_${a}" aria-pressed="false" aria-label="${s}"><span class="l">${s}</span><span class="s" aria-hidden="true">${d_(s,Math.max(5,Math.floor(60/t.ops.length)))}</span></button>`).join("")}<span class="cursor" aria-hidden="true"></span></div></div>`).join("")}
      ${Bi.length>1?l_():""}</div>
      <p class="conteo"><span id="conteo"></span><span class="orden" role="group" aria-label="Orden">ORDEN<button type="button" data-o="recientes">Recientes</button><button type="button" data-o="antiguos">Antiguos</button><button type="button" data-o="az">A\u2013Z</button></span></p><div id="resultados"></div></div>`,n.querySelectorAll(".selector").forEach(h_),fe("bFil").onclick=()=>{let t=n.querySelector(".panel-cuerpo"),i=!t.classList.contains("fil-abiertos");t.classList.toggle("fil-abiertos",i),fe("bFil").setAttribute("aria-expanded",i),jn()},fe("bLimpia").onclick=()=>{Yc(),jn(),Kn()},n.querySelectorAll(".llave").forEach(t=>t.onclick=()=>{if(t.dataset.t){let i=t.dataset.t;os.has(i)?os.delete(i):os.add(i)}else{let i=t.dataset.a;Qn.has(i)?Qn.delete(i):Qn.add(i)}jn(),Kn()}),n.querySelectorAll(".orden button").forEach(t=>t.onclick=()=>{Uc=t.dataset.o;try{localStorage.setItem("au-orden",Uc)}catch{}jn(),Kn()}),n.querySelectorAll(".riel").forEach(t=>{let i=+t.dataset.i;t.querySelectorAll("button").forEach((a,r)=>a.onclick=()=>{t.dataset.arr||(xn[i]=r,jn(),Kn())});let s=t.querySelector(".cursor");t.addEventListener("pointerdown",a=>{if(a.pointerType==="mouse"&&a.button!==0)return;a.preventDefault();let r=[...t.querySelectorAll("button")],o=r.map(p=>p.offsetLeft+p.offsetWidth/2),c=a.clientX,l=t.getBoundingClientRect(),u=p=>Math.max(o[0],Math.min(o[o.length-1],p.clientX-l.left)),d=p=>o.reduce((m,A,M)=>Math.abs(A-p)<Math.abs(o[m]-p)?M:m,0),h=p=>{p!==xn[i]&&(xn[i]=p,r.forEach((m,A)=>m.setAttribute("aria-pressed",A===p)),Kn(),np())},f=!1;try{t.setPointerCapture(a.pointerId)}catch{}let g=p=>{if(!f&&Math.abs(p.clientX-c)<4)return;f||(f=!0,t.classList.add("arrastra"));let m=u(p);s.style.left=m+"px",h(d(m))},y=p=>{t.removeEventListener("pointermove",g),t.removeEventListener("pointerup",y),t.removeEventListener("pointercancel",y),t.classList.remove("arrastra"),!f&&p.type==="pointerup"&&h(d(u(p))),t.dataset.arr="1",setTimeout(()=>delete t.dataset.arr,0),jn()};t.addEventListener("pointermove",g),t.addEventListener("pointerup",y),t.addEventListener("pointercancel",y)}),t.addEventListener("keydown",a=>{let r=a.key==="ArrowRight"?1:a.key==="ArrowLeft"?-1:0;r&&(a.preventDefault(),xn[i]=Math.max(0,Math.min(cs[i].ops.length-1,xn[i]+r)),jn(),Kn(),t.querySelectorAll("button")[xn[i]].focus())})}),Oc=null;let e=t=>{let i=!!Vi;En=t;try{localStorage.setItem("au-vista",t)}catch{}fe("vMes").setAttribute("aria-pressed",t==="mesa"),fe("vRej").setAttribute("aria-pressed",t==="rejilla"),fe("vLis").setAttribute("aria-pressed",t==="lista"),i||t==="mesa"&&_r.matches?Bc():Kn()};fe("vMes").onclick=()=>e("mesa"),fe("vRej").onclick=()=>e("rejilla"),fe("vLis").onclick=()=>e("lista"),Kn(),requestAnimationFrame(jn)}var Tf=null,fr=!1;function ap(){return Tf||(Tf=new Promise((n,e)=>{let t=document.createElement("script");t.src="https://w.soundcloud.com/player/api.js",t.onload=()=>n(window.SC),t.onerror=e,document.head.appendChild(t)}))}var p_=/[?&]diag\b/.test(location.search),ur=[],sn=n=>{let e=new Date().toTimeString().slice(3,8);if(ur.push(e+" "+n),ur.length>40&&ur.shift(),!p_)return;let t=fe("diag00");t||(t=document.createElement("pre"),t.id="diag00",t.style.cssText="position:fixed;left:6px;right:6px;top:6px;z-index:99;max-height:38vh;overflow:auto;margin:0;padding:6px 8px;background:rgba(14,15,18,.88);color:#cfe0ff;font:10px/1.35 monospace;white-space:pre-wrap;pointer-events:none",document.body.appendChild(t)),t.textContent=ur.join(`
`),t.scrollTop=1e6};window.__diag00=ur;var wu=75,cr=7,m_=n=>{let e=String(n||"").trim().match(/^(\d+):(\d{1,2})$/);return e?+e[1]*60+ +e[2]:null};addEventListener("resize",()=>{fe("tira00").classList.contains("on")&&yr.muestraTira(!0)});var Ic={cebado:[!1,!1],cola:et.filter(n=>n.soundcloud),w:[],vol:[0,0],iv:[],act:-1,prep:null,ahora:null,timers:[],ult:[],pedido:null,id:0,vivo:!1,bloqueo:!1,fallo:!1,SC:null,sonando:!1,tira:/iP(hone|ad|od)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,luego(n,e){this.timers.push(Pt.espera(n,e*1e3))},async monta(){if(this.w.length===(this.tira?1:2))return!0;try{sn("monta \xB7 modo "+(this.tira?"tira":"oculto")+" \xB7 "+(navigator.userAgent.match(/(CriOS|GSA|FxiOS|EdgiOS|Version)\/[\d.]+/)||["?"])[0]);let n=this.SC=await Promise.race([ap(),new Promise((t,i)=>Pt.espera(()=>i(new Error("sin respuesta")),9e3))]);sn("api de soundcloud cargada");let e=this.tira?1:2;for(let t=this.w.length;t<e;t++){let i=document.createElement("iframe");i.allow="autoplay",i.title="Canal 00 \xB7 reproductor de SoundCloud",this.tira?fe("tira00f").appendChild(i):(i.className="sc00",i.tabIndex=-1,i.setAttribute("aria-hidden","true"),document.body.appendChild(i)),i.src="https://w.soundcloud.com/player/?url="+encodeURIComponent(this.cola[0].soundcloud)+"&color=%230e0f12&auto_play=false&single_active=false&visual=false&show_artwork=false&buying=false&sharing=false&download=false&show_comments=false&show_user=false&hide_related=true&show_teaser=false";let s=n.Widget(i);await new Promise(a=>{let r=!1;s.bind(n.Widget.Events.READY,()=>{r=!0,sn("reproductor listo"),a()}),Pt.espera(()=>{r||sn("reproductor: sin READY en 9 s"),a()},9e3)}),s.setVolume(0),this.w.push(s),s.bind(n.Widget.Events.PLAY,()=>sn("aviso PLAY")),s.bind(n.Widget.Events.PLAY_PROGRESS,a=>this.progreso(t,a&&a.currentPosition)),s.bind(n.Widget.Events.PAUSE,()=>{sn("aviso PAUSE"),this.pausado(t)}),s.bind(n.Widget.Events.FINISH,()=>{sn("aviso FINISH"),!this.tira&&this.vivo&&t===this.act&&this.ahora&&this.cruza(this.id)})}return!0}catch(n){return sn("fallo al montar: "+(n&&n.message)),!1}},progreso(n,e){if(!this.tira||n!==0)return;let t=performance.now();if(this.sonando){this.vistoProg=t;return}if(!this.ahora||!this.vivo||typeof e!="number")return;let i=this.prog;this.prog={ms:e,t},i&&e>i.ms+150&&t-i.t<3e3&&(sn("suena de verdad \xB7 "+Math.round(e/1e3)+" s"),this.alSonar(0))},pausado(n){!this.tira||n!==0||!this.sonando||!this.ahora||!this.vivo||(this.sonando=!1,this.bloqueo=!0,this.prog=null,this.timers.forEach(Pt.anula),this.timers=[],this.rotuloTira("CANAL 00 \xB7 TOCA \u25B6 PARA SEGUIR"),this.muestraTira(!0),wt())},siguiente(){if(this.pedido){let t=this.pedido;return this.pedido=null,t}let n=this.cola.filter(t=>!this.ult.includes(t.code)),e=(n.length?n:this.cola)[Math.floor(Math.random()*(n.length||this.cola.length))];return this.ult=[e.code,...this.ult].slice(0,Math.max(0,Math.min(2,this.cola.length-1))),e},prepara(n,e){let t=this.w[n];return new Promise(i=>{let s=!1,a=r=>{s||(s=!0,i(r))};Pt.espera(()=>{s||sn("preparar "+e.code+": sin respuesta en 12 s"),a(null)},12e3),t.setVolume(0),t.load(e.soundcloud,{auto_play:!1,single_active:!1,visual:!1,show_artwork:!1,buying:!1,sharing:!1,download:!1,show_comments:!1,show_user:!1,hide_related:!0,callback:()=>t.getSounds(r=>{let o=r&&r.length||1,c=Math.floor(Math.random()*o),l=()=>t.getCurrentSound(u=>t.getDuration(d=>{let h=(d||0)/1e3,f=m_(e.fragmento);(f==null||f>h-30)&&(f=h*.42),f=Math.max(0,Math.min(f,h-wu-cr)),sn("preparado "+e.code+" \xB7 "+Math.round(h)+" s, desde "+Math.round(f)),a({r:e,k:n,ini:f,dur:h,tema:u&&u.title||Gt(e),url:u&&u.permalink_url||e.soundcloud})}));o>1?(t.setVolume(0),t.skip(c),Pt.espera(()=>{t.pause(),l()},700)):l()})})})},funde(n,e,t,i){Pt.anula(this.iv[n]);let s=this.w[n],a=this.vol[n],r=performance.now();this.iv[n]=Pt.cada(()=>{let o=Math.min(1,(performance.now()-r)/(t*1e3)),c=e>a?a+(e-a)*Math.sin(o*Math.PI/2):a*Math.cos(o*Math.PI/2);this.vol[n]=c,s.setVolume(Math.round(c)),o>=1&&(Pt.anula(this.iv[n]),i&&i())},80)},suena(n,e){if(e!==this.id)return;if(this.tira){let i=this.w[0];this.act=0,this.ahora=n,this.sonando=!1,this.prog=null,this.fallo=!1,this.vol[0]=100,i.setVolume(100),sn("play (por c\xF3digo)"),i.seekTo(n.ini*1e3),i.play(),wt(),fe("tira00").classList.contains("on")&&this.rotuloTira("CANAL 00 \xB7 TOCA \u25B6 PARA SINTONIZAR"),this.luego(()=>{e===this.id&&this.ahora===n&&!this.sonando&&(this.bloqueo=!0,this.rotuloTira("CANAL 00 \xB7 TOCA \u25B6 PARA SINTONIZAR"),this.muestraTira(!0),wt())},1.5);return}let t=this.w[n.k];this.act=n.k,this.ahora=n,this.bloqueo=!1,this.fallo=!1,t.setVolume(0),t.seekTo(n.ini*1e3),t.play(),Pt.espera(()=>t.seekTo(n.ini*1e3),400),this.funde(n.k,100,cr),wt(),this.luego(()=>t.isPaused(i=>{i&&e===this.id&&this.ahora===n&&this.pasaATira()}),5),this.cebado[n.k]=!0,this.luego(async()=>{let i=await this.prepara(1-n.k,this.siguiente());e===this.id&&(this.prep=i,this.ceba(i))},this.cebado[1-n.k]?12:4),this.luego(()=>{this.ahora===n&&this.cruza(e)},Math.max(20,Math.min(wu,n.dur-n.ini)-cr))},ceba(n){if(!n||this.tira||this.cebado[n.k]||document.hidden||this.act===n.k||!this.vivo)return;let e=n.k,t=this.w[e];this.cebado[e]=!0,t.setVolume(0),this.vol[e]=0,t.play(),Pt.espera(()=>{this.act!==e&&(t.pause(),t.seekTo(n.ini*1e3))},900)},alSonar(n){if(!this.tira||n!==0||!this.ahora||this.sonando||!this.vivo)return;let e=this.ahora,t=this.id,i=this.w[0];this.sonando=!0,this.bloqueo=!1,this.muestraTira(!1),wt(),i.getPosition(a=>{a/1e3<e.ini-3&&i.seekTo(e.ini*1e3)}),this.luego(()=>this.cruzaTira(t),Math.max(20,Math.min(wu,e.dur-e.ini))),this.vistoProg=performance.now();let s=()=>{t!==this.id||this.ahora!==e||!this.sonando||(performance.now()-this.vistoProg>4e3?(sn("sin progreso 4 s \u2192 tira"),this.pausado(0)):this.luego(s,1))};this.luego(s,1)},async cruzaTira(n){if(n!==this.id)return;Be.estatica(3.2,.035),this.w[0].pause(),this.ahora=null,wt();let e=await this.prepara(0,this.siguiente());n===this.id&&(e?this.suena(e,n):(this.fallo=!0,wt()))},pasaATira(){this.tira||(this.tira=!0,this.w=[],this.act=-1,document.querySelectorAll("iframe.sc00").forEach(n=>n.remove()),this.empieza(this.ahora&&this.ahora.r))},rotuloTira(n){let e=fe("tira00k");e&&(e.textContent=n)},muestraTira(n){let e=fe("tira00");if(e){if(n){let t=document.querySelector(".pletina"),i=t.getBoundingClientRect();e.style.bottom=`calc(${getComputedStyle(t).bottom} + ${t.offsetHeight+8}px)`,e.style.left=i.left+"px",e.style.width=i.width+"px"}e.classList.contains("on")!==n&&sn(n?"tira a la vista":"tira recogida"),e.classList.toggle("on",n),e.setAttribute("aria-hidden",!n)}},async cruza(n){if(n!==this.id||!this.ahora||this.cruzandoDe===this.ahora)return;this.cruzandoDe=this.ahora;let e=this.act,t=this.prep;if(this.prep=null,Be.estatica(cr*.9,.022),this.funde(e,0,cr,()=>this.w[e].pause()),t)this.suena(t,n);else{let i=await this.prepara(1-e,this.siguiente());i?this.suena(i,n):n===this.id&&(this.fallo=!0,wt())}},async empieza(n){n&&(this.pedido=n);let e=++this.id;if(this.timers.forEach(Pt.anula),this.timers=[],this.prep=null,this.vivo=!0,this.ahora=null,this.fallo=!1,this.bloqueo=!1,this.sonando=!1,wt(),this.tira&&this.w[0]&&this.w[0].pause(),!this.cola.length)return;if(sn("canal 00 \xB7 empieza"),this.tira&&!this.w.length&&(this.rotuloTira("CANAL 00 \xB7 CARGANDO SOUNDCLOUD\u2026"),this.muestraTira(!0)),!await this.monta()){e===this.id&&(this.fallo=!0,this.muestraTira(!1),wt());return}if(e!==this.id)return;let t=this.tira?0:this.act>=0?1-this.act:0;if(!this.tira&&this.act>=0){let s=this.act;this.funde(s,0,2.5,()=>this.w[s].pause())}let i=await this.prepara(t,this.siguiente());e===this.id&&(i?this.suena(i,e):(this.fallo=!0,this.muestraTira(!1),wt()))},para(n=2.5){this.id++,this.vivo=!1,this.timers.forEach(Pt.anula),this.timers=[],this.prep=null,this.ahora=null,this.act=-1,this.sonando=!1,this.muestraTira(!1),this.w.forEach((e,t)=>this.funde(t,0,n,()=>e.pause()))},nivel(){if(!this.ahora||this.bloqueo||this.tira&&!this.sonando)return 0;let n=performance.now()/1e3;return Math.max(...this.vol)/100*(.13+.035*Math.sin(n*7.3)+.03*Math.sin(n*2.1)+.035*Math.random())},rotulo(){let n=this.ahora;if(!this.cola.length)return"Todav\xEDa no hay lanzamientos con SoundCloud en el panel";if(n){let e=n.r.spotify||n.url,t=`<a href="${ge(e)}" target="_blank" rel="noopener">entero \u2197</a>`;return this.bloqueo?"Toca \u25B6 en la tira de arriba":`<a href="#${n.r.code}">${ge(n.r.artist)} \u2014 ${ge(n.tema)}</a> \xB7 `+t}return this.fallo?"Sin se\xF1al de SoundCloud \xB7 prueba en un rato u otro canal":Be.on?"Sintonizando el cat\xE1logo\u2026":`Fragmentos del cat\xE1logo \xB7 ${Cn(this.cola.length,"lanzamiento","lanzamientos")}`}},Zc=et.some(n=>n.audio),lr=3,g_=.8,v_="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",x_={cola:et.filter(n=>n.audio),el:[],g:[],act:-1,ahora:null,id:0,vivo:!1,fallo:!1,bloqueo:!1,tira:!1,pedido:null,ult:[],timers:[],luego(n,e){this.timers.push(Pt.espera(n,e*1e3))},monta(){if(this.el.length||!Be.ctx)return;let n=Be.ctx;for(let e=0;e<2;e++){let t=new Audio;t.preload="auto",t.setAttribute("playsinline","");let i=n.createGain();i.gain.value=0;try{n.createMediaElementSource(t).connect(i),i.connect(Be.limite)}catch{}this.el.push(t),this.g.push(i)}},rampa(n,e,t){let i=this.g[n].gain,s=Be.ctx.currentTime;i.cancelScheduledValues(s),i.setValueAtTime(i.value,s),i.linearRampToValueAtTime(e,s+t)},siguiente(){if(this.pedido&&this.pedido.audio){let t=this.pedido;return this.pedido=null,t}this.pedido=null;let n=this.cola.filter(t=>!this.ult.includes(t.code)),e=(n.length?n:this.cola)[Math.floor(Math.random()*(n.length||this.cola.length))];return this.ult=[e.code,...this.ult].slice(0,Math.max(0,Math.min(2,this.cola.length-1))),e},suena(n,e){if(e!==this.id)return;let t=this.act,i=t===0?1:0,s=this.el[i];s.onended=s.ontimeupdate=null,s.dataset.ok=1,s.src=n.audio,s.currentTime=0;let a=()=>{e!==this.id||this.act!==i||(s.onended=s.ontimeupdate=null,Be.estatica(lr*.9,.022),this.suena(this.siguiente(),e))};s.onended=a,s.ontimeupdate=()=>{s.duration&&s.duration-s.currentTime<lr+.3&&a()},this.act=i,this.ahora={r:n,tema:Gt(n)},this.fallo=!1,this.bloqueo=!1,wt();let r=s.play();if(r&&r.catch(()=>{e===this.id&&this.act===i&&(this.bloqueo=!0,wt())}),this.rampa(i,g_,t<0?1.5:lr),t>=0){this.rampa(t,0,lr);let o=this.el[t];this.luego(()=>{this.act!==t&&o.pause()},lr+.2)}s.onerror=()=>{e===this.id&&this.act===i&&(this.fallo=!0,wt(),this.luego(()=>a(),2))}},empieza(n){n&&(this.pedido=n);let e=++this.id;if(this.timers.forEach(Pt.anula),this.timers=[],this.vivo=!0,this.fallo=!1,!this.cola.length||!Be.ctx)return;this.monta();let t=this.el[this.act===0?0:1];if(!t.dataset.ok){t.dataset.ok=1,t.src=v_;let i=t.play();i&&i.then(()=>{this.el[this.act]!==t&&t.pause()}).catch(()=>{})}this.suena(this.siguiente(),e)},para(n=2.5){this.id++,this.vivo=!1,this.timers.forEach(Pt.anula),this.timers=[],this.ahora=null,this.act=-1,this.el.length&&this.el.forEach((e,t)=>{e.onended=e.ontimeupdate=e.onerror=null,this.rampa(t,0,n),Pt.espera(()=>{this.vivo||e.pause()},n*1e3+200)})},nivel(){return 0},muestraTira(){},rotulo(){let n=this.ahora;if(n){if(this.bloqueo)return"Toca \u25B6 para sintonizar";if(this.fallo)return"Sin se\xF1al \xB7 pasando al siguiente";let e=n.r.spotify||n.r.soundcloud||n.r.bandcamp;return`<a href="#${n.r.code}">${ge(n.r.artist)} \u2014 ${ge(n.tema)}</a>`+(e?` \xB7 <a href="${ge(e)}" target="_blank" rel="noopener">entero \u2197</a>`:"")}return Be.on?"Sintonizando el cat\xE1logo\u2026":`Fragmentos del cat\xE1logo \xB7 ${Cn(this.cola.length,"lanzamiento","lanzamientos")}`}},yr=Be.cat=Zc?x_:Ic;document.addEventListener("visibilitychange",()=>{!document.hidden&&!Zc&&Ic.prep&&Ic.ceba(Ic.prep)});if(Zc&&zi){zi=!1,Vu=0;let n=fe("canal0");n&&(n.disabled=!1,n.style.visibility="",n.removeAttribute("aria-hidden"))}async function __(n){Fi||await Gc(!1),yr.pedido=n,Be.canal===-1&&Be.on?yr.empieza():(ki(-1),Be.on||(await Be.encender(),ei()))}function y_(n){let e=n.querySelector("iframe.sc");e&&ap().then(t=>{let i=t.Widget(e);i.bind(t.Widget.Events.PLAY,()=>{Be.on&&(Be.apagar(),fr=!0,ei())});let s=()=>{fr&&(fr=!1,Be.encender().then(ei))};i.bind(t.Widget.Events.PAUSE,s),i.bind(t.Widget.Events.FINISH,s)}).catch(()=>{})}function A_(n){let e=et.indexOf(n),t=et[e+1],i=et[e-1],s=fe("panel"),a=[["SoundCloud",n.soundcloud],["Spotify",n.spotify],["Bandcamp",n.bandcamp]];setTimeout(()=>s.querySelectorAll("[data-art]").forEach(o=>o.addEventListener("click",()=>{Yc(),Qn.add(o.dataset.art)}))),s.innerHTML=`<header class="panel-cab"><div><h2>${n.code}</h2><div class="sub">${ia(n)?"Participaci\xF3n":n.edicion?"Edici\xF3n del sello":"Ficha de lanzamiento"} \xB7 ${ge(n.format)} \xB7 ${ge(n.genre)} \xB7 ${n.year}</div></div>
    <a class="tecla" href="#catalogo">\u2190 Cat\xE1logo</a></header>
    <div class="panel-cuerpo"><div class="fl">${Kf(n,"portada",Hu)}
      <div class="datos"><div class="cod">${n.code} \xB7 ${ge(n.format)} \xB7 ${n.fecha?n.fecha.split("-").reverse().join("."):n.year} \xB7 ${ge(n.genre)}</div><h3>${ge(n.artist)}</h3><p class="tit">${ge(Gt(n))}</p>
        ${aa(n).length?`<div class="aqui"><span class="k">${ia(n)?"AURALITY EN ESTE LANZAMIENTO":"TAMBI\xC9N DE AURALITY"}</span>${Qf(n)}</div>`:""}
        <div class="enlaces mas">${$c(n).map(o=>`<a class="tecla oscura" href="#a-${Wu(o)}">${ge(o)} \xB7 perfil</a>`).join("")}</div>
        <div class="enlaces">${(Zc?n.audio:n.soundcloud)&&!zi?'<button class="tecla oscura" type="button" id="bRadio00">Escuchar en la radio \xB7 canal 00</button>':""}${a.map(([o,c])=>c?`<a class="tecla" href="${ge(c)}" target="_blank" rel="noopener">${o} \u2197</a>`:`<span class="tecla" aria-disabled="true">${o} \xB7 sin enlace</span>`).join("")}<button class="tecla oscura compartir" type="button" id="bComp">Compartir</button></div>
        ${sa&&n.soundcloud?`<iframe class="sc" title="Reproductor de SoundCloud: ${ge(n.title)}" allow="autoplay" loading="lazy"
          src="https://w.soundcloud.com/player/?url=${encodeURIComponent(n.soundcloud)}&color=%230e0f12&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>`:""}
        <table class="creditos"><tbody>${n.credits.map(([o,c])=>`<tr><th scope="row">${ge(o)}</th>${s_(c)?'<td class="pend">Por definir</td>':`<td>${ge(c)}</td>`}</tr>`).join("")}</tbody></table>
        ${n.tracks&&n.tracks.length?`<div class="escala"><span class="k">TRACKLIST</span>${n.tracks.map((o,c)=>`<p>${String(c+1).padStart(2,"0")} \xB7 ${ge(o)}</p>`).join("")}</div>`:n.format==="SINGLE"?"":'<div class="escala"><span class="k">TRACKLIST</span><p>Tracklist por publicar.</p></div>'}
      </div></div>
      ${M_(n)}
      <nav class="pasos" aria-label="Otras referencias">${t?`<a class="tecla" href="#${t.code}">\u2190 ${t.code}</a>`:"<span></span>"}${i?`<a class="tecla" href="#${i.code}">${i.code} \u2192</a>`:"<span></span>"}</nav></div>`,fe("bRadio00")&&(fe("bRadio00").onclick=()=>__(n)),fe("bComp").onclick=async()=>{let o=location.origin+"/"+n.code,c=`${n.artist} \u2014 ${Gt(n)} \xB7 aurality`;try{navigator.share?await navigator.share({title:c,url:o}):(await navigator.clipboard.writeText(o),fe("bComp").textContent="Enlace copiado")}catch{}};let r=fe("bVideo");r&&(r.onclick=()=>{Be.on&&(Be.apagar(),ei());let o=document.createElement("iframe");o.className="vid",o.src=r.dataset.src,o.title="V\xEDdeo de "+n.code,o.allow="autoplay; fullscreen; picture-in-picture",o.allowFullscreen=!0,r.replaceWith(o)}),s.querySelectorAll(".foto").forEach(o=>o.onclick=()=>b_(n.fotos,+o.dataset.i))}var S_=n=>{if(!n)return null;let e=n.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([\w-]{11})/);return e?{src:`https://www.youtube-nocookie.com/embed/${e[1]}?autoplay=1&rel=0`,img:`https://i.ytimg.com/vi/${e[1]}/hqdefault.jpg`}:(e=n.match(/vimeo\.com\/(?:video\/)?(\d+)/),e?{src:`https://player.vimeo.com/video/${e[1]}?autoplay=1`,img:""}:null)};function M_(n){let e=n.historia?n.historia.split(/\n\s*\n/).map(r=>r.trim()).filter(Boolean):[],t=e.length?`<section class="historia"><div class="sub2">HISTORIA</div>${e.map(r=>`<p>${ge(r).replace(/\n/g,"<br>")}</p>`).join("")}</section>`:"",i=S_(n.video),s=i?`<section><div class="sub2">V\xCDDEO</div><button class="video" type="button" id="bVideo" data-src="${ge(i.src)}" aria-label="Reproducir el v\xEDdeo">${i.img?`<img src="${ge(i.img)}" alt="" loading="lazy">`:""}<span class="pl" aria-hidden="true">\u25B6</span></button></section>`:"",a=n.fotos.length?`<section><div class="sub2">FOTOS \xB7 ${n.fotos.length}</div><div class="fotos">${n.fotos.map((r,o)=>`<button class="foto" type="button" data-i="${o}" aria-label="Ampliar foto ${o+1}${r.pie?": "+ge(r.pie):""}"><img src="${ge(r.img)}" alt="${ge(r.pie)}" loading="lazy"></button>`).join("")}</div></section>`:"";return t||s||a?`<div class="extra">${t}${s}${a}</div>`:""}function b_(n,e){let t=document.createElement("div");t.className="visorfoto",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Fotos");let i=()=>{let o=n[e];t.innerHTML=`<img src="${ge(o.img)}" alt="${ge(o.pie)}"><div class="pie">${String(e+1).padStart(2,"0")} / ${String(n.length).padStart(2,"0")}${o.pie?" \xB7 "+ge(o.pie):""}</div>
    <div class="bts">${n.length>1?'<button class="tecla" data-a="-1" aria-label="Anterior">\u2190</button><button class="tecla" data-a="1" aria-label="Siguiente">\u2192</button>':""}<button class="tecla oscura" data-a="x">Cerrar</button></div>`,t.querySelector('[data-a="x"]').focus()},s=o=>{e=(e+o+n.length)%n.length,i()},a=()=>{t.remove(),removeEventListener("keydown",r)},r=o=>{o.key==="Escape"&&a(),o.key==="ArrowRight"&&s(1),o.key==="ArrowLeft"&&s(-1)};t.addEventListener("click",o=>{let c=o.target.closest("[data-a]");o.target===t||c&&c.dataset.a==="x"?a():c&&s(+c.dataset.a)}),addEventListener("keydown",r),document.body.appendChild(t),i()}var Wu=n=>n.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),Rn=Jf.map(n=>{let e=et.filter(a=>Dc(a).includes(n)),t=et.filter(a=>!Dc(a).includes(n)&&aa(a).some(([r])=>r===n)),i=[...e,...t].map(a=>+a.year).filter(Boolean),s=(kt.artists||{})[n]||{};return{n,s:Wu(n),rs:e,ps:t,info:s,colab:fi(e.flatMap(Wc)).filter(a=>a!==n),y0:Math.min(...i),y1:Math.max(...i)}});fe("nArt").textContent=Rn.length+" artistas";var T_=n=>n.split(/\s+/).filter(e=>!/^(el|la|de|del|y)$/i.test(e)).map(e=>e[0]).join("").slice(0,3),qu=n=>n.info.photo?`<img class="retrato" src="${ge(n.info.photo)}"${Ar(n.info.photo,Hu)} alt="Retrato de ${ge(n.n)}" loading="lazy" decoding="async">`:`<div class="sinf" role="img" aria-label="Sin foto todav\xEDa"><b>${ge(T_(n.n))}</b><span>SIN FOTO</span></div>`,$u=n=>n.y0===n.y1?String(n.y0):n.y0+"\u2013"+n.y1,Cn=(n,e,t)=>n+" "+(n===1?e:t),ea=(()=>{try{return localStorage.getItem("au-vistaR")||"lista"}catch{return"lista"}})();function rp(){fe("panel").innerHTML=`<header class="panel-cab"><div><h2>ROSTER</h2><div class="sub">${Cn(Rn.length,"artista","artistas")} \xB7 ${et.length} referencias \xB7 Broadcasted from Elda</div></div>
    <div class="vista" role="group" aria-label="Vista"><button class="tecla" id="vRL" aria-pressed="${ea==="lista"}">Lista</button><button class="tecla" id="vRR" aria-pressed="${ea==="red"}">Red</button></div></header>
    <div class="panel-cuerpo" id="rosterC">${ea==="red"?"":E_()}</div>`;let n=e=>{ea=e;try{localStorage.setItem("au-vistaR",e)}catch{}rp()};fe("vRL").onclick=()=>n("lista"),fe("vRR").onclick=()=>n("red"),ea==="red"&&op(fe("rosterC"))}function E_(){return`<div class="modulos">${Rn.map(n=>`<a class="modulo" href="#a-${n.s}">${qu(n)}
      <span class="rol">${ge(n.info.role||"ARTISTA")}</span><span class="nom">${ge(n.n)}</span>
      <span class="st">${Cn(n.rs.length,"lanzamiento","lanzamientos")}${n.ps.length?" \xB7 "+Cn(n.ps.length,"participaci\xF3n","participaciones"):""} \xB7 <span style="white-space:nowrap">${$u(n)}</span></span></a>`).join("")}</div>`}var w_=n=>!/arte|artwork|foto|dise|v[ií]deo|portada|gr[aá]fic|estilismo/i.test(n),C_=n=>String(n||"").split(/\s*[·,\/&+]\s*|\s+[×x]\s+/i).map(e=>e.trim().toUpperCase()).filter(e=>e&&!/^(POR DEFINIR|—|-)$/.test(e));function R_(){let n=new Map,e=new Map,t=o=>(n.has(o)||n.set(o,{n:o,m:qc(o)}),n.get(o)),i=(o,c,l,u,d)=>{if(o===c)return;t(o),t(c);let[h,f]=[o,c].sort(),g=h+"|"+f;e.has(g)||e.set(g,{k:g,a:h,b:f,obras:new Map});let y=e.get(g).obras,p=y.get(l.code)||{r:l,tipos:new Set,roles:new Set};p.tipos.add(u),d&&p.roles.add(d.toLowerCase()),y.set(l.code,p)};et.forEach(o=>{let c=Wc(o).map(l=>l.toUpperCase());c.forEach(t),c.forEach((l,u)=>c.slice(u+1).forEach(d=>i(l,d,o,"firma"))),(o.participantes||[]).forEach(([l,u])=>c.forEach(d=>i(l,d,o,"trabajo",u||"participaci\xF3n"))),(o.credits||[]).forEach(([l,u])=>{w_(l)&&C_(u).forEach(d=>c.forEach(h=>i(d,h,o,"trabajo",l)))})});let s="AURALITY",a=[...e.values()].filter(o=>o.a!==s&&o.b!==s).map(o=>({...o,peso:o.obras.size,firma:[...o.obras.values()].some(c=>c.tipos.has("firma"))})),r=new Set(a.flatMap(o=>[o.a,o.b]));return{nodos:[...n.values()].filter(o=>o.n!==s&&(o.m||r.has(o.n))),aristas:a}}function op(n){let{nodos:e,aristas:t}=R_(),i=Math.max(300,n.clientWidth-2),s=Math.round(Math.min(560,Math.max(340,innerHeight*.52,i<500?i*1.15:0))),a=new Map(e.map(p=>[p.n,p])),r=p=>p.n.length*7.2+16;e.sort((p,m)=>m.m-p.m||p.n.localeCompare(m.n)).forEach((p,m)=>{let A=m/e.length*Math.PI*2+.6,M=p.m?.18:.38;p.x=i/2+Math.cos(A)*i*M,p.y=s/2+Math.sin(A)*s*M,p.vx=p.vy=0});let o=Math.min(150,Math.max(80,Math.sqrt(i*s/Math.max(4,e.length))*.62));for(let p=0;p<420;p++){let m=1-p/420;for(let A=0;A<e.length;A++)for(let M=A+1;M<e.length;M++){let v=e[A],S=e[M],w=S.x-v.x,L=S.y-v.y,_=w*w+L*L+.01,C=Math.sqrt(_),U=o*o*.9/_;w/=C,L/=C,v.vx-=w*U,v.vy-=L*U,S.vx+=w*U,S.vy+=L*U}t.forEach(A=>{let M=a.get(A.a),v=a.get(A.b),S=v.x-M.x,w=v.y-M.y,L=Math.hypot(S,w)||1,_=(L-o/Math.min(1.6,1+(A.peso-1)*.15))*.05;S/=L,w/=L,M.vx+=S*_,M.vy+=w*_,v.vx-=S*_,v.vy-=w*_}),e.forEach(A=>{A.vx+=(i/2-A.x)*.008,A.vy+=(s/2-A.y)*.008*(i/s),A.x+=A.vx*m,A.y+=A.vy*m,A.vx*=.55,A.vy*=.55,A.x=Math.max(18,Math.min(i-18,A.x)),A.y=Math.max(22,Math.min(s-18,A.y))})}e.forEach(p=>{p.izq=p.x+r(p)>i-6}),n.innerHTML=`<svg class="mapa" id="mapaR" viewBox="0 0 ${i} ${s}" width="${i}" height="${s}" role="group" aria-label="Mapa de conexiones entre artistas">
      <g>${t.map(p=>{let m=a.get(p.a),A=a.get(p.b);return`<g class="ar ${p.firma?"firma":"trabajo"}" data-k="${ge(p.k)}"><line class="hit" x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${A.x.toFixed(1)}" y2="${A.y.toFixed(1)}"/><line class="ln" x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${A.x.toFixed(1)}" y2="${A.y.toFixed(1)}" stroke-width="${(1.4+Math.min(4,p.peso-1)*.9).toFixed(1)}"/></g>`}).join("")}</g>
      <g>${e.map(p=>`<g class="nd ${p.m?"miembro":"fuera"}" data-n="${ge(p.n)}" tabindex="0" role="button" aria-label="${ge(p.n)}${p.m?", miembro de aurality":""}" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})">
        ${p.m?'<rect x="-7" y="-7" width="14" height="14"/>':'<circle r="6"/>'}<text x="${p.izq?-13:13}" y="4" text-anchor="${p.izq?"end":"start"}">${ge(p.n)}</text></g>`).join("")}</g></svg>
    <div class="leyenda"><span><i class="m"></i>Miembro</span><span><i class="f"></i>De fuera</span><span><i class="l1"></i>Firman juntos</span><span><i class="l2"></i>Producci\xF3n, mezcla o participaci\xF3n</span></div>
    <div class="fichared" id="fichaRed" aria-live="polite"><span class="tp">Toca un artista o una l\xEDnea para ver qu\xE9 los une.</span></div>`;let c=fe("mapaR"),l=fe("fichaRed"),u=p=>t.filter(m=>m.a===p||m.b===p),d=(p,m)=>{c.classList.toggle("foco",!!p),c.querySelectorAll(".nd").forEach(A=>A.classList.toggle("on",!!p&&p.has(A.dataset.n))),c.querySelectorAll(".ar").forEach(A=>A.classList.toggle("on",!!m&&m.has(A.dataset.k)))},h=p=>{let m=[...p.roles];return m.filter(A=>!m.some(M=>M!==A&&M.startsWith(A))).join(", ")},f=p=>[...p.obras.values()].map(m=>`<a href="#${m.r.code}">${m.r.code}</a> ${m.tipos.has("firma")?"firman juntos":h(m)}`).join(" \xB7 "),g=null,y=(p,m)=>{if(c.querySelectorAll(".nd").forEach(A=>A.classList.toggle("sel",p==="n"&&A.dataset.n===m)),!p||g&&g.tipo===p&&g.id===m){g=null,d(null),l.innerHTML='<span class="tp">Toca un artista o una l\xEDnea para ver qu\xE9 los une.</span>';return}if(g={tipo:p,id:m},p==="n"){let A=a.get(m),M=u(m),v=A.m&&Rn.find(S=>S.n===m);d(new Set([m,...M.map(S=>S.a===m?S.b:S.a)]),new Set(M.map(S=>S.k))),l.innerHTML=`<div class="nom">${ge(m)}</div><div class="tp">${A.m?"Miembro del sello":"Artista de fuera"} \xB7 ${Cn(M.length,"conexi\xF3n","conexiones")}</div>
        <ul>${M.map(S=>`<li><b>\xD7 ${ge(S.a===m?S.b:S.a)}</b> \u2014 ${f(S)}</li>`).join("")}</ul>${v?`<div class="enlaces"><a class="tecla oscura" href="#a-${v.s}">${ge(v.n)} \xB7 perfil</a></div>`:""}`}else{let A=t.find(M=>M.k===m);d(new Set([A.a,A.b]),new Set([m])),l.innerHTML=`<div class="nom">${ge(A.a)} \xD7 ${ge(A.b)}</div><div class="tp">${Cn(A.peso,"lanzamiento","lanzamientos")} en com\xFAn</div><ul>${[...A.obras.values()].map(M=>`<li><a href="#${M.r.code}"><b>${M.r.code}</b> \xB7 ${ge(M.r.artist)} \u2014 ${ge(Gt(M.r))}</a><br>${M.tipos.has("firma")?"Firman juntos":"Trabajo: "+ge(h(M))}</li>`).join("")}</ul>`}};c.querySelectorAll(".nd").forEach(p=>{p.onclick=()=>y("n",p.dataset.n),p.onkeydown=m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),y("n",p.dataset.n))},p.onpointerenter=m=>{if(m.pointerType==="mouse"&&!g){let A=u(p.dataset.n);d(new Set([p.dataset.n,...A.map(M=>M.a===p.dataset.n?M.b:M.a)]),new Set(A.map(M=>M.k)))}},p.onpointerleave=m=>{m.pointerType==="mouse"&&!g&&d(null)}}),c.querySelectorAll(".ar").forEach(p=>p.onclick=()=>y("a",p.dataset.k)),c.addEventListener("click",p=>{p.target===c&&y(null)}),us.matches||(c.querySelectorAll(".ar").forEach((p,m)=>p.animate([{opacity:0},{opacity:1}],{duration:500,delay:250+m*40,fill:"backwards"})),c.querySelectorAll(".nd").forEach((p,m)=>p.firstElementChild.animate([{transform:"scale(0)"},{transform:"scale(1)"}],{duration:380,delay:m*55,easing:"cubic-bezier(.3,1.6,.5,1)",fill:"backwards"})))}var Ef=0;addEventListener("resize",()=>{clearTimeout(Ef),Ef=setTimeout(()=>{tt==="roster"&&ea==="red"&&fe("rosterC")&&op(fe("rosterC"))},250)});document.addEventListener("click",n=>{let e=n.target.closest("[data-contrata]");e&&(Pc=1,hr=e.dataset.contrata)});function I_(n){let e=n.info.bio&&!/por definir/i.test(n.info.bio)?`<p class="bio">${ge(n.info.bio)}</p>`:'<p class="bio pend">Biograf\xEDa por definir.</p>',t=fi([...n.rs,...n.ps].map(r=>r.format)).join(" \xB7 "),i=(r,o)=>`<a class="fila" href="#${r.code}"><span class="x">${r.code}</span><span class="a">${ge(r.artist)}</span><span class="t">${ge(o||Gt(r))}</span><span class="f x">${ge(r.format)}</span><span class="g x">${ge(r.genre)}</span><span class="y x">${r.year}</span><span aria-hidden="true">\u2192</span></a>`,s=[["Instagram",n.info.instagram],["Spotify",n.info.spotify],["SoundCloud",n.info.soundcloud]],a=fe("panel");a.innerHTML=`<header class="panel-cab"><div><h2>${ge(n.n)}</h2><div class="sub">${ge(n.info.role||"Artista")} \xB7 aurality</div></div><a class="tecla" href="#roster">\u2190 Roster</a></header>
    <div class="panel-cuerpo"><div class="fl">${qu(n)}<div class="datos">${e}
      <div class="cifras"><div><span>${n.ps.length?"LANZ. \xB7 PART.":"REFERENCIAS"}</span><b>${n.rs.length}${n.ps.length?" \xB7 "+n.ps.length:""}</b></div><div><span>A\xD1OS</span><b>${$u(n)}</b></div><div><span>FORMATOS</span><b class="lst">${t}</b></div></div>
      <div class="enlaces">${s.map(([r,o])=>o?`<a class="tecla" href="${ge(o)}" target="_blank" rel="noopener">${r} \u2197</a>`:`<span class="tecla" aria-disabled="true">${r} \xB7 sin enlace</span>`).join("")}<a class="tecla oscura" href="#contacto" data-contrata="${ge(n.n)}">Contratar</a><a class="tecla" href="#kit-${n.s}">Kit de prensa</a>
        <a class="tecla oscura" href="#catalogo" id="verCat">Ver en el cat\xE1logo</a></div>
      ${n.colab.length?`<div><div class="sub2">COLABORACIONES</div><div class="enlaces">${n.colab.map(r=>qc(r)?`<a class="tecla" href="#a-${Wu(r)}">\xD7 ${ge(r)}</a>`:`<span class="tecla" aria-disabled="true">\xD7 ${ge(r)}</span>`).join("")}</div></div>`:""}
    </div></div>
    ${n.rs.length?`<div class="sub2">LANZAMIENTOS</div><div class="lista">${n.rs.map(r=>i(r)).join("")}</div>`:""}
    ${n.ps.length?`<div class="sub2">PARTICIPACIONES</div><div class="lista">${n.ps.map(r=>i(r,Gt(r)+" \u2014 "+(aa(r).filter(([o])=>o===n.n).map(([,o])=>o).filter(Boolean).join(", ")||"participaci\xF3n"))).join("")}</div>`:""}</div>`,fe("verCat").addEventListener("click",()=>{Yc(),Qn.add(n.n)})}var Ct=(kt.senal||[]).slice().sort((n,e)=>e.anio-n.anio||e.mes-n.mes),wf=kt.senal_playlist||"",Uu=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],Oi=Ct.length?Ct[0].anio:2026,P_=`Adem\xE1s de los discos de sus artistas, aurality publica con su propio nombre. Son las ediciones del sello: discos de remixes, recopilatorios y encargos en los que el autor no es un artista, sino el criterio que los junta.

Aqu\xED el trabajo del sello es la curadur\xEDa: elegir a qui\xE9n invitar, qu\xE9 poner al lado de qu\xE9 y en qu\xE9 orden. Es nuestra manera de hacer un disco sin firmar ning\xFAn tema, y la forma m\xE1s directa de ense\xF1ar qu\xE9 entendemos por aurality.

La Se\xF1al mensual nace del mismo sitio: cada mes, una playlist con lo que nos ha mirado de cerca, sea nuestro o no.`;function L_(){let n=fe("panel"),e=kt.editorial||{},t=et.filter(r=>r.edicion),i=(kt.proximos||[]).filter(r=>r.edicion),s=Ct[0],a=String((e.texto||"").trim()||P_).split(/\n\s*\n/).map(r=>r.trim()).filter(Boolean);n.innerHTML=`<header class="panel-cab"><div><h2>L\xCDNEA EDITORIAL</h2><div class="sub">Lo que firma el sello \xB7 ediciones y Se\xF1al mensual</div></div></header>
    <div class="panel-cuerpo"><div class="editorial">
      <section class="ed-intro">${a.map((r,o)=>`<p${o?"":' class="lead"'}>${ge(r).replace(/\n/g,"<br>")}</p>`).join("")}</section>
      <section><div class="sub2">EDICIONES DEL SELLO${t.length?" \xB7 "+t.length:""}</div>
        ${t.length?`<div class="rejilla">${t.map(ip).join("")}</div>`:`<div class="ed-vacio"><span class="c">AU-ED \xB7 01</span><span>La primera edici\xF3n del sello est\xE1 en preparaci\xF3n.${i.length?" La cuenta atr\xE1s est\xE1 en la portada.":""}</span></div>`}</section>
      ${s?`<section><div class="sub2">SE\xD1AL MENSUAL \xB7 ${Cn(Ct.length,"edici\xF3n","ediciones")}</div>
        <a class="ed-senal" href="#senal">${s.cover?`<img src="${ge(s.cover)}"${Ar(s.cover,"150px")} alt="Portada de la Se\xF1al ${ge(s.code)}" loading="lazy" decoding="async">`:""}
          <span class="txt"><span class="k">EN ANTENA \xB7 ${ge(Uu[s.mes-1])} ${s.anio}</span><span class="nom">SE\xD1AL MENSUAL <b>${ge(s.code)}</b></span><span class="des">${ge(s.descripcion||"Lanzamientos, hallazgos y obsesiones del mes.")}</span><span class="tecla">Abrir la Se\xF1al y el archivo \u2192</span></span></a>
        ${Jc("altaE")}</section>`:""}
    </div></div>`,Xu("altaE")}function cp(n){let e=fe("panel"),t=fi(Ct.map(r=>r.anio)).sort(),i=r=>Ct.find(o=>o.anio===Oi&&o.mes===r),s=n===Ct[0];e.innerHTML=`<header class="panel-cab"><div><h2>SE\xD1AL MENSUAL</h2><div class="sub">Una playlist que se renueva cada mes \xB7 ${Cn(Ct.length,"edici\xF3n","ediciones")} en el registro</div></div>
    ${wf?`<a class="tecla" href="${ge(wf)}" target="_blank" rel="noopener">${s?"Escuchar en Spotify \u2197":"Escuchar la edici\xF3n actual \u2197"}</a>`:""}</header>
    <div class="panel-cuerpo">
      <div class="meses" aria-label="Registro \xB7 sintonizador AU-02"><div class="k"><span>REGISTRO \xB7 SINTONIZADOR AU-02</span>
        <span class="anio"><button class="tecla" id="aAnt" aria-label="A\xF1o anterior" ${t[0]<Oi?"":"disabled"}>\u2039</button><b>${Oi}</b><button class="tecla" id="aSig" aria-label="A\xF1o siguiente" ${t[t.length-1]>Oi?"":"disabled"}>\u203A</button></span></div>
        <div class="cas12">${Uu.map((r,o)=>{let c=i(o+1);return`<button ${c?`class="hay" data-c="${c.code}"`:"disabled"} aria-pressed="${c===n}" aria-label="${r} ${Oi}${c?"":", sin edici\xF3n"}"><i></i>${String(o+1).padStart(2,"0")}</button>`}).join("")}</div></div>
      <div class="fl"><img class="portada" src="${ge(n.cover)}"${Ar(n.cover,Hu)} alt="Portada de SE\xD1AL MENSUAL ${n.code}" decoding="async">
        <div class="datos"><div class="cod">SE\xD1AL MENSUAL \xB7 ${n.code} \xB7 AU-SE\xD1AL-${n.code.replace("_","")}</div>
          <div class="antena ${s?"on":""}"><i></i>${s?"En antena \xB7 es lo que suena ahora en la playlist":"Archivada \xB7 la playlist ya suena con una edici\xF3n posterior"}</div>
          <h3>${Uu[n.mes-1]} ${n.anio}</h3>
          <p class="bio">${ge(n.descripcion||"")}</p>
          <div class="cifras"><div><span>TEMAS</span><b>${n.temas||"\u2014"}</b></div><div><span>DURACI\xD3N</span><b>${ge(n.duracion||"\u2014")}</b></div><div><span>DESTACADOS</span><b>${(n.destacados||[]).length}</b></div></div>
          ${n.temas?"":'<p class="bio pend">N\xFAmero de temas por confirmar.</p>'}
        </div></div>
      <div class="sub2">${s?"SUENAN ESTE MES":"SONARON ESE MES"}</div>
      <div class="destacados">${(n.destacados||[]).map(([r,o,c],l)=>`<div><span class="n">${String(l+1).padStart(2,"0")}</span><span><span class="a">${ge(r)}</span>
        <span class="t">${o?`\xAB${ge(o)}\xBB${c?" \xB7 prod. "+ge(c):""}`:"Tema por confirmar"}</span></span></div>`).join("")}</div>
      ${Jc("altaS")}
    </div>`,Xu("altaS"),e.querySelectorAll(".cas12 button.hay").forEach(r=>r.onclick=()=>{location.hash="s-"+r.dataset.c});let a=r=>{Oi+=r;let o=Ct.find(c=>c.anio===Oi);o?location.hash="s-"+o.code:cp(n)};fe("aAnt").onclick=()=>a(-1),fe("aSig").onclick=()=>a(1)}var N_=(()=>{try{return localStorage.getItem("au-alta")==="1"}catch{return!1}})(),Fc=N_,Jc=n=>`<form class="alta${Fc?" hecha":""}" id="${n}" novalidate aria-label="Recibe la Se\xF1al">
    <div class="k"><i aria-hidden="true"></i>RECIBE LA SE\xD1AL</div>
    ${Fc?'<p class="bio">Est\xE1s en la lista. La pr\xF3xima Se\xF1al te llega al correo.</p>':`<p class="bio">Una vez al mes, en tu correo: la Se\xF1al, los lanzamientos del sello y lo pr\xF3ximo.</p>
    <div class="linea"><label class="trampa" for="${n}M">Tu email</label><input id="${n}M" type="email" autocomplete="email" placeholder="tu@correo.com" required>
      <button class="tecla oscura" type="submit">Apuntarme</button></div>
    <div class="trampa" aria-hidden="true"><input id="${n}B" tabindex="-1" autocomplete="off"></div>
    <span class="err" id="${n}E" role="alert"></span>
    <p class="nota">Solo para enviarte la Se\xF1al. Te das de baja cuando quieras.</p>`}</form>`;function Xu(n){let e=fe(n);!e||Fc||(e.onsubmit=t=>{t.preventDefault();let i=fe(n+"M").value.trim(),s=e.querySelector("button");if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i)){fe(n+"E").textContent="El email no parece v\xE1lido.";return}fe(n+"E").textContent="",s.disabled=!0,s.textContent="Apuntando\u2026";let a=kt.contacto||{},r=o=>{if(!o){s.disabled=!1,s.textContent="Apuntarme",fe(n+"E").textContent="No se ha podido apuntar. Prueba otra vez en un rato.";return}Fc=!0;try{localStorage.setItem("au-alta","1")}catch{}e.outerHTML=Jc(n)};if(!sa||!a.email){r(!0);return}fetch("https://formsubmit.co/ajax/"+encodeURIComponent(a.email),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:"aurality \xB7 alta en la Se\xF1al \xB7 "+i,_template:"table",_captcha:"false",_honey:fe(n+"B").value,_replyto:i,alta:"Recibe la Se\xF1al",email:i})}).then(o=>o.json()).then(o=>r(o&&(o.success===!0||o.success==="true"))).catch(()=>r(!1))})}var D_=["El riesgo","La imagen","Lo digital","La calle"];function U_(){let n=kt.manifiesto||{},e=n.parrafos||[],t=n.codigos&&n.codigos.length?n.codigos:D_,i=Bi.length>1?Bi:["Escena A","Escena B"],s=A=>ge(A).replace(/«([^»]+)»/g,"<q>$1</q>"),a=A=>{let M=A.match(/[^.!?]+[.!?]+/g)||[A],v=M.filter(S=>/[:;]/.test(S)&&S.length<120);return(v.length?v:M).reduce((S,w)=>w.trim().length<S.trim().length?w:S).trim()},r=A=>{let M=A%2===1,v=i[2*A%i.length],S=i[(2*A+1)%i.length];return`<div class="cruce" aria-hidden="true"><span class="pin a e ${M?"de":"iz"}"><i></i>${ge(v)}<small>escena</small></span><span class="codigo">${ge(t[A%t.length])}</span><span class="pin b x ${M?"iz":"de"}"><i></i>${ge(S)}<small>escena</small></span></div>`};fe("panel").innerHTML=`<header class="panel-cab"><div><h2>MANIFIESTO</h2><div class="sub">aura-of-reality \xB7 Broadcasted from Elda</div></div></header>
    <div class="panel-cuerpo"><article class="puente"><svg class="hilo" aria-hidden="true"><path class="guia"/><path class="h"/></svg>
      <h3>${ge(n.titular||"")}</h3><div class="ini"><i></i>aurality tiende el hilo</div>
      ${e.map((A,M)=>`${M?r(M-1):""}<section class="tramo"><span class="n">${String(M+1).padStart(2,"0")} / ${String(e.length).padStart(2,"0")}</span><p class="clave">${s(a(A))}</p><p>${s(A.replace(a(A),"").replace(/\s+/g," ").trim())}</p></section>`).join("")}
      <div class="fin"><i></i><p>${ge(n.cierre||"")}</p></div><div class="firma"><i></i><s></s><span>aurality \xB7 Elda</span></div></article></div>`;let o=fe("panel").querySelector(".puente"),c=o.querySelector(".hilo"),l=c.querySelector(".h"),u=c.querySelector(".guia"),d=o.parentElement,h=[],f=[],g=0,y=A=>{let M=A.getBoundingClientRect(),v=o.getBoundingClientRect();return[M.left+M.width/2-v.left,M.top+M.height/2-v.top]},p=()=>{h=[y(o.querySelector(".ini i"))],o.querySelectorAll(".cruce").forEach(S=>{h.push(y(S.querySelector(".pin.e i")),y(S.querySelector(".pin.x i")))});let A=y(o.querySelector(".fin i")),M=h[h.length-1];h.push([M[0],A[1]-(matchMedia("(max-width:820px)").matches?78:104)],A);let v="M"+h.map(S=>S[0].toFixed(1)+" "+S[1].toFixed(1)).join("L");l.setAttribute("d",v),u.setAttribute("d",v),f=[0];for(let S=1;S<h.length;S++)f.push(f[S-1]+Math.hypot(h[S][0]-h[S-1][0],h[S][1]-h[S-1][1]));g=f[f.length-1],l.style.strokeDasharray=g,m()},m=()=>{if(!o.isConnected){removeEventListener("scroll",m),removeEventListener("resize",p);return}let A=o.getBoundingClientRect(),M=d.scrollHeight>d.clientHeight+4?d.scrollTop+d.clientHeight>=d.scrollHeight-4:scrollY+innerHeight>=document.documentElement.scrollHeight-4,v=us.matches||M?1/0:innerHeight*.72-A.top,S=0;for(let w=1;w<h.length;w++){let[,L]=h[w-1],[,_]=h[w];if(v>=_)S=f[w];else{v>L&&(S=f[w-1]+(f[w]-f[w-1])*(v-L)/(_-L));break}}l.style.strokeDashoffset=g-S,o.querySelectorAll(".pin,.codigo,.tramo,.ini,.fin").forEach(w=>{let L=w.matches(".pin,.ini,.fin")?w.querySelector("i"):w,_=L.getBoundingClientRect();w.classList.toggle("on",v>=(w.matches(".tramo")?_.top+30:_.top+_.height/2)-A.top)})};o.classList.add("vivo"),p(),d.addEventListener("scroll",m,{passive:!0}),addEventListener("scroll",m,{passive:!0}),addEventListener("resize",p),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>o.isConnected&&p()),new ResizeObserver(()=>o.isConnected&&p()).observe(o)}var Cf=n=>String(n||"").split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean).map(e=>`<p>${ge(e).replace(/\n/g,"<br>")}</p>`).join(""),Rf=()=>{let n=new Date;return wn(n.getDate())+"."+wn(n.getMonth()+1)+"."+n.getFullYear()};function O_(n){let e=fe("panel"),t=kt.contacto||{},i=kt.kit||{},s='<button class="tecla oscura" type="button" id="bImprime">Imprimir / guardar PDF</button>',a=t.email?`<p>${n?"Contrataci\xF3n y prensa":"Prensa y contrataci\xF3n"}: <b class="dato">${ge(t.email)}</b>${t.instagram?` \xB7 Instagram @${ge(t.instagram.replace(/\/$/,"").split("/").pop())}`:""}</p>`:"";if(n){let r=n.info,o=r.bio&&!/por definir/i.test(r.bio)?r.bio:"",c=(r.bio_corta||"").trim()||(o?o.split(/(?<=[.!?])\s/)[0]:""),l=(r.fotos_prensa||[]).map(f=>typeof f=="string"?{img:f,cr:""}:{img:f&&f.imagen||"",cr:f&&f.credito||""}).filter(f=>f.img);!l.length&&r.photo&&l.push({img:r.photo,cr:""});let u=[...n.rs,...n.ps],d=fi(u.map(f=>f.genre).filter(f=>f&&f!=="\u2014")).slice(0,4).join(" \xB7 "),h=[["Instagram",r.instagram],["Spotify",r.spotify],["SoundCloud",r.soundcloud]].filter(([,f])=>f);e.innerHTML=`<header class="panel-cab"><div><h2>KIT DE PRENSA</h2><div class="sub">${ge(n.n)} \xB7 aurality \xB7 ${Rf()}</div></div><a class="tecla" href="#a-${n.s}">\u2190 Perfil</a></header>
      <div class="panel-cuerpo"><article class="kit">
        <div class="kit-cab">${qu(n)}<div><div class="cod">ARTISTA \xB7 AURALITY${r.origen?" \xB7 "+ge(r.origen):""}</div><h3>${ge(n.n)}</h3>${r.role?`<div class="rol">${ge(r.role)}</div>`:""}${c?`<p class="lead">${ge(c)}</p>`:""}</div></div>
        <div class="cifras"><div><span>REFERENCIAS</span><b>${n.rs.length}${n.ps.length?" + "+n.ps.length:""}</b></div><div><span>A\xD1OS</span><b>${$u(n)}</b></div>${d?`<div><span>G\xC9NEROS</span><b class="x">${ge(d)}</b></div>`:""}</div>
        ${o?`<section><div class="sub2">BIOGRAF\xCDA</div>${Cf(o)}</section>`:""}
        ${u.length?`<section><div class="sub2">DISCOGRAF\xCDA EN AURALITY</div><ul class="kit-lista">${u.map(f=>`<li><a href="#${f.code}"><b>${f.code}</b> \xB7 ${ge(f.artist)} \u2014 ${ge(Gt(f))} \xB7 ${ge(f.format)} \xB7 ${f.year}${n.ps.includes(f)?" \xB7 participaci\xF3n":""}</a></li>`).join("")}</ul></section>`:""}
        ${l.length?`<section><div class="sub2">FOTOS DE PRENSA</div><div class="fotos">${l.map(f=>`<a class="foto" href="${ge(f.img)}" download target="_blank" rel="noopener" aria-label="Descargar foto${f.cr?" \xB7 "+ge(f.cr):""}"><img src="${ge(f.img)}" alt="${ge(n.n)}" loading="lazy"></a>`).join("")}</div>${l.some(f=>f.cr)?`<div class="credito">Fotos: ${ge(fi(l.map(f=>f.cr).filter(Boolean)).join(" \xB7 "))}</div>`:""}</section>`:""}
        ${h.length?`<section><div class="sub2">ESCUCHAR Y SEGUIR</div><div class="enlaces">${h.map(([f,g])=>`<a class="tecla" href="${ge(g)}" target="_blank" rel="noopener">${f} \u2197</a>`).join("")}</div></section>`:""}
        <section><div class="sub2">MATERIAL Y CONTRATACI\xD3N</div>${a}<div class="enlaces">${r.kit_enlace?`<a class="tecla" href="${ge(r.kit_enlace)}" target="_blank" rel="noopener">Fotos en alta y material \u2197</a>`:""}${r.rider?`<a class="tecla" href="${ge(r.rider)}" target="_blank" rel="noopener">Rider t\xE9cnico (PDF) \u2197</a>`:""}<a class="tecla oscura no-imprime" href="#contacto" data-contrata="${ge(n.n)}">Contratar</a><span class="no-imprime">${s}</span></div></section>
      </article></div>`}else{let r=Math.min(...et.map(l=>+l.year).filter(Boolean)),o=kt.manifiesto||{},c=(i.texto||"").trim()||[o.titular,(o.parrafos||[])[0]].filter(Boolean).join(`

`);e.innerHTML=`<header class="panel-cab"><div><h2>KIT DE PRENSA</h2><div class="sub">El sello \xB7 aurality \xB7 ${Rf()}</div></div><a class="tecla" href="#contacto">\u2190 Contacto</a></header>
      <div class="panel-cuerpo"><article class="kit">
        <div><img class="logo" src="img/lettering.png" alt="aurality" width="802" height="245"><div class="rol" style="margin-top:12px;font:500 12px/1.4 var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:#3b4150">Sello y plataforma creativa \xB7 Elda</div>${c?`<div class="lead-bloque">${Cf(c).replace("<p>",'<p class="lead">')}</div>`:""}</div>
        <div class="cifras"><div><span>ARTISTAS</span><b>${Rn.length}</b></div><div><span>REFERENCIAS</span><b>${et.length}</b></div>${isFinite(r)?`<div><span>DESDE</span><b>${r}</b></div>`:""}<div><span>BASE</span><b>ELDA</b></div></div>
        <section><div class="sub2">ROSTER</div><ul class="kit-lista">${Rn.map(l=>`<li><a href="#kit-${l.s}"><b>${ge(l.n)}</b>${l.info.role?" \xB7 "+ge(l.info.role):""} \xB7 kit de prensa \u2192</a></li>`).join("")}</ul></section>
        <section><div class="sub2">\xDALTIMOS LANZAMIENTOS</div><ul class="kit-lista">${et.slice(0,6).map(l=>`<li><a href="#${l.code}"><b>${l.code}</b> \xB7 ${ge(l.artist)} \u2014 ${ge(Gt(l))} \xB7 ${l.year}</a></li>`).join("")}</ul></section>
        <section><div class="sub2">LOGOS</div><div class="logos"><a href="img/lettering.png" download="aurality-lettering.png"><img class="logo" src="img/lettering.png" alt="Lettering de aurality" style="width:220px"></a><a href="apple-touch-icon.png" download="aurality-isotipo.png"><img class="isotipo" src="apple-touch-icon.png" alt="Isotipo de aurality"></a></div>
          <div class="credito no-imprime">Pulsa un logo para descargarlo. \xDAsalo tal cual: sin recomponer el lettering con otra tipograf\xEDa.</div></section>
        <section><div class="sub2">MATERIAL Y CONTACTO</div>${a}<div class="enlaces">${i.enlace?`<a class="tecla" href="${ge(i.enlace)}" target="_blank" rel="noopener">Logos en alta y fotos \u2197</a>`:""}<a class="tecla oscura no-imprime" href="#contacto">Escribir</a><span class="no-imprime">${s}</span></div></section>
      </article></div>`}fe("bImprime").onclick=()=>print()}var If=[{k:"demo",n:"Demos",d:"Mandar m\xFAsica",intro:"Escuchamos todo lo que llega. M\xE1ndanos un enlace privado (SoundCloud, Drive, Dropbox), no archivos adjuntos: dos o tres temas bastan. Si encaja, te escribimos."},{k:"contratacion",n:"Contrataci\xF3n",d:"Bolos, festivales, sesiones",intro:"Para contratar a un artista de aurality o un showcase del sello. Cu\xE9ntanos fecha, ciudad y qu\xE9 tienes en mente."},{k:"prensa",n:"Prensa",d:"Medios y entrevistas",intro:"Entrevistas, rese\xF1as, estrenos y material para medios. Te contestamos con lo que necesites."}],Pc=0,hr="",Pf=n=>{let e=Rn.find(t=>t.n===n)||(n?null:Rn[0]);return e?"#kit-"+e.s:"#kit"};function lp(){let n=kt.contacto||{},e=If[Pc],t=(n["intro_"+e.k]||"").trim()||e.intro,i=(r,o,c="",l="text")=>`<div class="campo"><label for="${r}">${o}</label><input id="${r}" type="${l}" ${c}></div>`,s={demo:`<div class="dos">${i("cNom","Nombre o proyecto",'autocomplete="name"')}${i("cMail","Email",'autocomplete="email"',"email")}</div>
      ${i("cLink","Enlace a la m\xFAsica (privado)",'inputmode="url" placeholder="https://"',"url")}`,contratacion:`<div class="dos">${i("cNom","Nombre y promotora o sala",'autocomplete="name"')}${i("cMail","Email",'autocomplete="email"',"email")}</div>
      <div class="dos"><div class="campo"><label for="cArt">Artista</label><select id="cArt">${[...Rn.map(r=>r.n),"SHOWCASE AURALITY (VARIOS)"].map(r=>`<option${r===hr?" selected":""}>${ge(r)}</option>`).join("")}</select></div>
        ${i("cFecha","Fecha (si la hay)","","date")}</div>${i("cCiudad","Ciudad y sala o festival")}`,prensa:`<div class="dos">${i("cNom","Nombre",'autocomplete="name"')}${i("cMedio","Medio")}</div>${i("cMail","Email",'autocomplete="email"',"email")}`}[e.k];fe("panel").innerHTML=`<header class="panel-cab"><div><h2>CONTACTO</h2><div class="sub">Enviar se\xF1al \xB7 demos, contrataci\xF3n y prensa</div></div></header>
    <div class="panel-cuerpo">
      <div class="caminos" role="group" aria-label="\xBFQu\xE9 nos quieres mandar?">${If.map((r,o)=>`<button class="camino" type="button" data-i="${o}" aria-pressed="${o===Pc}"><span class="n">${String(o+1).padStart(2,"0")} \xB7 ${r.n}</span><span class="d">${r.d}</span></button>`).join("")}</div>
      <p class="bio intro">${ge(t)}</p>
      <form class="form" id="formC" novalidate>${s}
      <div class="campo"><label for="cMsg">Mensaje</label><textarea id="cMsg" required placeholder="${e.k==="demo"?"Qui\xE9n eres, qu\xE9 nos mandas y por qu\xE9 aurality.":e.k==="contratacion"?"Tipo de evento, horario, condiciones\u2026":"Qu\xE9 preparas y para cu\xE1ndo."}"></textarea></div>
      <div class="trampa" aria-hidden="true"><label for="cBot">No rellenar</label><input id="cBot" tabindex="-1" autocomplete="off"></div>
      <div class="campo"><span class="err" id="cErr" role="alert"></span></div>
      <div class="enlaces"><button class="tecla oscura" type="submit">Enviar ${e.k==="demo"?"demo":e.k==="contratacion"?"petici\xF3n":"mensaje"}</button>
        ${e.k==="contratacion"?`<a class="tecla" id="kitArt" href="${Pf(hr)}">Kit de prensa del artista</a>`:e.k==="prensa"?'<a class="tecla" href="#kit">Kit de prensa del sello</a>':""}</div>
      ${n.nota&&e.k==="demo"?`<p class="bio pend">${ge(n.nota)}</p>`:""}
    </form><div id="cListo"></div>
    <div class="sub2">DIRECTO</div><div class="enlaces">
      ${n.email?`<span class="tecla">Email \xB7 <span class="dato" id="cEmail">${ge(n.email)}</span></span><button class="tecla oscura" type="button" id="cCopEmail">Copiar email</button>`:'<span class="tecla" aria-disabled="true">Email \xB7 por definir</span>'}
      ${n.instagram?`<a class="tecla" href="${ge(n.instagram)}" target="_blank" rel="noopener">Instagram \xB7 @${ge(n.instagram.replace(/\/$/,"").split("/").pop())} \u2197</a>`:'<span class="tecla" aria-disabled="true">Instagram \xB7 por definir</span>'}</div>
    ${Jc("altaC")}</div>`,Xu("altaC"),fe("panel").querySelectorAll(".camino").forEach(r=>r.onclick=()=>{Pc=+r.dataset.i,lp()}),fe("cArt")&&(fe("cArt").onchange=r=>{hr=r.target.value,fe("kitArt").href=Pf(hr)});let a=fe("cCopEmail");a&&(a.onclick=()=>navigator.clipboard.writeText(n.email).then(()=>{a.textContent="Copiado"},()=>{let r=document.createRange();r.selectNodeContents(fe("cEmail"));let o=getSelection();o.removeAllRanges(),o.addRange(r),a.textContent="Seleccionado"})),fe("formC").onsubmit=r=>{r.preventDefault();let o=_=>fe(_)?fe(_).value.trim():"",c=o("cNom"),l=o("cMail"),u=o("cMsg"),d=o("cLink"),h=o("cMedio"),f=o("cArt"),g=o("cFecha"),y=o("cCiudad"),p=c?/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(l)?e.k==="demo"&&!/^https?:\/\/\S+/.test(d)?"Falta el enlace a la m\xFAsica (tiene que empezar por https://).":e.k==="prensa"&&!h?"Falta el medio.":u?"":"Falta el mensaje.":"El email no parece v\xE1lido.":"Falta el nombre.";if(fe("cErr").textContent=p,p)return;let m={camino:e.n,nombre:c,email:l,...e.k==="demo"?{enlace:d}:{},...e.k==="contratacion"?{artista:f,fecha:g||"\u2014",lugar:y||"\u2014"}:{},...e.k==="prensa"?{medio:h}:{},mensaje:u},A=`aurality \xB7 ${e.n.toUpperCase()} \xB7 ${e.k==="contratacion"?f+" \xB7 ":e.k==="prensa"?h+" \xB7 ":""}${c}`,M=A+`
`+Object.entries(m).filter(([_])=>_!=="mensaje"&&_!=="camino").map(([_,C])=>`${_}: ${C}`).join(`
`)+`

`+u,v=fe("formC").querySelector("button[type=submit]"),S=v.textContent,w=(_,C)=>{fe("cListo").innerHTML=`<div class="listo" role="status"><b class="dato">${_}</b><span class="bio">${C}</span><pre id="cTexto">${ge(M)}</pre><div><button class="tecla" id="cCopiar" type="button">Copiar mensaje</button></div></div>`,fe("cCopiar").onclick=()=>navigator.clipboard.writeText(M).then(()=>{fe("cCopiar").textContent="Copiado"},()=>{let U=document.createRange();U.selectNodeContents(fe("cTexto"));let z=getSelection();z.removeAllRanges(),z.addRange(U),fe("cCopiar").textContent="Selecci\xF3nalo y copia"}),fe("cListo").scrollIntoView({block:"nearest"})},L=n.email?`C\xF3piala y env\xEDala a <span class="dato">${ge(n.email)}</span>.`:"Copia el mensaje y env\xEDalo por Instagram.";if(!sa||!n.email){w("Se\xF1al preparada",L);return}v.disabled=!0,v.textContent="Enviando\u2026",fetch("https://formsubmit.co/ajax/"+encodeURIComponent(n.email),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:A,_template:"table",_captcha:"false",_honey:fe("cBot").value,_replyto:l,...m})}).then(_=>_.json().catch(()=>({}))).then(_=>{if(String(_.success)!=="true")throw new Error(_.message||"error");fe("formC").reset(),fe("cListo").innerHTML='<div class="listo" role="status"><b class="dato">Se\xF1al enviada</b><span class="bio">Ha llegado a aurality. Gracias por escribir.</span></div>',fe("cListo").scrollIntoView({block:"nearest"})}).catch(()=>w("No se ha podido enviar","Ha fallado la conexi\xF3n. "+L)).finally(()=>{v.disabled=!1,v.textContent=S})}}var tt="escucha",dr=null,Ou=0,Lf={escucha:["01 \xB7 SECCI\xD3N","ESCUCHA"],catalogo:["02 \xB7 SECCI\xD3N","CAT\xC1LOGO"],roster:["03 \xB7 SECCI\xD3N","ROSTER"],senal:["04 \xB7 SECCI\xD3N","SE\xD1AL"],editorial:["04 \xB7 SECCI\xD3N","EDITORIAL"],manifiesto:["05 \xB7 SECCI\xD3N","MANIFIESTO"],contacto:["06 \xB7 SECCI\xD3N","CONTACTO"]},up=n=>{n=n.replace(/\/+$/,"");let e=n.toLowerCase();return/^archivo(-au\d+)?$/.test(e)?"archivo"+(e.length>7?"-"+e.slice(8).toUpperCase():""):e.startsWith("senal-")?"s-"+n.slice(6):Rn.some(t=>t.s===e)?"a-"+e:n},Vi=null;function F_(n){let e=fe("panel"),t=e.querySelector(".panel-cuerpo"),i=fe("resultados");En==="lista"&&(En="mesa",Oc=null,sp());let s=document.createElement("div");s.className="mesa-mandos",[e.querySelector(".filtrosM"),e.querySelector(".conteo"),fe("faders")].forEach(h=>h&&s.appendChild(h)),e.insertBefore(s,t);let a=document.createElement("div");a.className="lector",a.innerHTML='<span class="k">FICHA EN LECTURA</span><b class="cod"></b><span class="dat"></span><span class="art"></span><span class="tit"></span>',e.appendChild(a);let r=document.createElement("div"),o=document.createElement("div");r.className="mesa-escena",o.className="mesa-plano",r.appendChild(o),i.classList.add("pista"),i.insertBefore(r,i.firstChild);let c=null,l="",u=h=>{if(!h||h===l)return;l=h;let f=et.find(y=>y.code===h);if(!f)return;a.querySelector(".cod").textContent=f.code,a.querySelector(".dat").textContent=[f.format,f.genre,f.year].filter(Boolean).join(" \xB7 "),a.querySelector(".art").textContent=f.artist,a.querySelector(".tit").textContent=Gt(f),i.querySelectorAll(".ref.leida").forEach(y=>y.classList.remove("leida"));let g=i.querySelector(`.ref[data-c="${h}"]`);g&&g.classList.add("leida")},d=Vi={cols:4,filaH:300,vis:[],s(){return t.scrollTop},mide(){let h=i.querySelector(".rejilla");if(!h)return;h.parentNode!==o&&o.appendChild(h),n&&i.querySelectorAll("a.ref").forEach(p=>{let m="#archivo-"+p.dataset.c;p.getAttribute("href")!==m&&p.setAttribute("href",m)}),this.vis=[...h.querySelectorAll(".ref:not([hidden])")].sort((p,m)=>(+p.style.order||0)-(+m.style.order||0)),this.cols=t.clientWidth<760?3:4,h.style.setProperty("--cols",this.cols);let f=t.clientHeight;r.style.height=f+"px";let g=this.vis[0];this.filaH=g?g.offsetHeight+(parseFloat(getComputedStyle(h).rowGap)||0):300;let y=Math.ceil(this.vis.length/this.cols);i.style.height=f+Math.max(0,y-1)*this.filaH+"px",this.mueve()},mueve(){let h=this.s();if(o.style.setProperty("--s",h.toFixed(1)),!c){let f=Math.max(0,Math.round(h/this.filaH)),g=this.vis[Math.min(this.vis.length-1,f*this.cols)];g&&u(g.dataset.c)}}};t.addEventListener("scroll",()=>d.mueve(),{passive:!0}),i.addEventListener("pointerover",h=>{let f=h.target.closest&&h.target.closest(".ref");f&&h.pointerType==="mouse"&&(c=f,u(f.dataset.c))}),i.addEventListener("pointerleave",()=>{c=null,d.mueve()}),i.addEventListener("focusin",h=>{let f=h.target.closest&&h.target.closest(".ref");if(!f)return;u(f.dataset.c);let g=d.vis.indexOf(f),y=Math.floor(g/d.cols)*d.filaH;g>=0&&(t.scrollTop=y)}),d.mide(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{Vi===d&&d.mide()})}addEventListener("resize",()=>{Vi&&(_r.matches?Vi.mide():Bc())});function B_(){let n=fe("panel");n.querySelectorAll('a[href="#catalogo"]').forEach(e=>{e.setAttribute("href","#archivo"),/cat[aá]logo/i.test(e.textContent)&&e.children.length===0&&(e.textContent=e.textContent.replace(/cat[aá]logo/i,t=>t[0]==="C"?"ARCHIVO":"Archivo"))}),n.querySelectorAll('a[href^="#AU"]').forEach(e=>e.setAttribute("href","#archivo-"+e.getAttribute("href").slice(1)))}var Cc={ficha:"catalogo",artista:"roster",senal:"editorial"},Nf=0,Df=0,hp="",z_=".portada, .retrato, .sinf, .sinp, .ed-senal img",V_=".fl > .portada, .fl > .retrato, .fl > .sinf, .fl > .sinp",Uf=n=>{let e=fe("panel");if(e.hidden)return null;let t=null;try{t=n&&e.querySelector(`a[href="#${CSS.escape(n)}"]`)}catch{}let i=t&&t.querySelector(z_)||e.querySelector(V_);if(!i)return null;let s=i.getBoundingClientRect();return s.bottom>0&&s.top<innerHeight&&s.width>0?i:null};function Yu(n){let e=location.hash.length>1?decodeURIComponent(location.hash.slice(1)):up(decodeURIComponent(location.pathname.slice(1))),t=hp,i=n&&document.startViewTransition&&!us.matches&&!document.hidden?Uf(e):null;if(!i)return Bc(n);i.style.viewTransitionName="viajero",document.documentElement.classList.add("vt");let s=null;document.startViewTransition(()=>{i.style.viewTransitionName="",Bc(n),s=Uf(t),s&&(s.style.viewTransitionName="viajero")}).finished.catch(()=>{}).then(()=>{s&&(s.style.viewTransitionName=""),document.documentElement.classList.remove("vt")})}function Bc(n){let e=tt,t=scrollY,i=fe("panel").querySelector(".panel-cuerpo"),s=i?i.scrollTop:0,r=n&&n.type==="hashchange"||location.hash.length>1?decodeURIComponent(location.hash.slice(1)):up(decodeURIComponent(location.pathname.slice(1))),o=/^archivo(-|$)/i.test(r),c=et.find(M=>M.code===(o?r.slice(8):r).toUpperCase()),l=r.startsWith("a-")&&Rn.find(M=>M.s===r.slice(2)),u=r==="senal"?Ct[0]:r.startsWith("s-")?Ct.find(M=>M.code===r.slice(2)):null,d=r.startsWith("kit-")?Rn.find(M=>M.s===r.slice(4)):null;tt=o?c?"ficha":"catalogo":["catalogo","roster","manifiesto","contacto","registro","kit","editorial"].includes(r)||d?d?"kit":r:u?"senal":c?"ficha":l?"artista":"escucha";let h="/"+(o?"archivo"+(c?"-"+c.code:""):tt==="escucha"?"":tt==="ficha"?c.code:tt==="artista"?l.s:tt==="senal"?r==="senal"?"senal":"senal-"+u.code:tt==="kit"?d?"kit-"+d.s:"kit":r);if(location.pathname+location.hash!==h)try{history.replaceState(history.state,"",h)}catch{}let f=tt==="ficha"?"catalogo":tt==="artista"?"roster":tt==="registro"?"escucha":tt==="kit"?d?"roster":"contacto":tt==="senal"?"editorial":tt;document.querySelectorAll(".placa,.teclado a").forEach(M=>M.setAttribute("aria-current",M.dataset.s===f?"page":"false")),Hc(),fe("menuN").textContent=Lf[f][0],fe("menuT").textContent=Lf[f][1];let g=document.querySelector(".lateral"),y=g.hidden&&tt==="escucha";g.hidden=tt!=="escucha",y&&(g.scrollLeft=0),document.querySelector(".estado").hidden=tt!=="escucha",fe("lema").hidden=tt!=="escucha";let p=fe("panel");p.hidden=tt==="escucha",fr&&(fr=!1,Be.encender().then(ei)),tt==="catalogo"&&f_(),tt==="ficha"&&(A_(c),y_(fe("panel"))),tt==="roster"&&rp(),tt==="artista"&&I_(l),tt==="senal"&&(Oi=u.anio,cp(u)),tt==="manifiesto"&&U_(),tt==="contacto"&&lp(),tt==="registro"&&Xf(),tt==="editorial"&&L_(),tt==="kit"&&O_(d);let m=tt==="catalogo"&&_r.matches&&(o||En==="mesa"),A=tt==="ficha"&&_r.matches&&(o||En==="mesa");Vi=null,p.classList.toggle("abierta",m||A),p.classList.toggle("depie",A),document.body.classList.toggle("con-depie",A),m&&F_(o),o&&tt==="ficha"&&B_(),tt!=="escucha"&&(p.style.animation="none",p.offsetWidth,p.style.animation="",Cc[tt]===e&&(Df=s),p.querySelector(".panel-cuerpo").scrollTop=Cc[e]===tt?Df:0),Gf.matches&&(Cc[tt]===e&&(Nf=t),scrollTo(0,Cc[e]===tt?Nf:0),document.querySelector(".barra").classList.remove("oculta")),dr={catalogo:"p4",ficha:"hero",roster:"p3",artista:"p3",senal:"p2",registro:"p2",kit:"hero",editorial:"p2",manifiesto:"hero",contacto:"p5"}[tt]||null,Ou=tt==="senal"?u.mes:0,ta=.6,hp=o?"archivo"+(c?"-"+c.code:""):tt==="escucha"?"":tt==="ficha"?c.code:tt==="artista"?"a-"+l.s:tt==="senal"?"s-"+u.code:r}var k_=(()=>{let n=et.filter(t=>t.fecha&&Date.now()-new Date(t.fecha+"T00:00:00")<6048e5),e=fi([...n,...et.filter(t=>t.destacado)]).slice(0,3);return e.length?e:et.slice(0,1)})(),pr=(()=>{try{return JSON.parse(sessionStorage.getItem("au-cerrados")||"[]")}catch{return[]}})(),Lt=(()=>{let n=Date.now(),e=(()=>{try{return new URLSearchParams(location.search).get("demo")==="visita"}catch{return!1}})(),t=null;try{t=JSON.parse(sessionStorage.getItem("au-novedades")||"null")}catch{}if(t&&!e)return t;let i=null;try{i=JSON.parse(localStorage.getItem("au-visita")||"null")}catch{}try{localStorage.setItem("au-visita",JSON.stringify({t:n,rel:et.map(a=>a.code),sen:Ct[0]?Ct[0].code:""}))}catch{}if(e&&(i={t:n-12*864e5,rel:et.slice(1).map(a=>a.code),sen:"\u2014"}),!i||!i.t||n-i.t<6*36e5)return null;let s={desde:i.t,nuevos:et.filter(a=>!(i.rel||[]).includes(a.code)).map(a=>a.code).slice(0,3),sen:Ct[0]&&i.sen&&Ct[0].code!==i.sen?Ct[0].code:null,emitidas:0,ahora:0,demo:e};try{sessionStorage.setItem("au-novedades",JSON.stringify(s))}catch{}return s})();async function G_(){if(!Lt)return;let n=[];if(sa)try{let i=await fetch("/tx/registro",{cache:"no-store"});i.ok&&(n=await i.json())}catch{}let e=n.filter(i=>new Date(i.hasta).getTime()>Lt.desde).length+(Lt.demo?2:0),t=ku.filter(i=>!i.b).length+(Lt.demo?1:0);if(!(e===Lt.emitidas&&t===Lt.ahora)){Lt.emitidas=e,Lt.ahora=t;try{sessionStorage.setItem("au-novedades",JSON.stringify(Lt))}catch{}pr.includes("visita")||dp()}}var H_=n=>{let e=Math.round(n/36e5),t=Math.round(n/864e5);return e<36?Cn(e,"hora","horas"):t<60?Cn(t,"d\xEDa","d\xEDas"):Cn(Math.round(t/30),"mes","meses")};function W_(){if(!Lt||pr.includes("visita"))return"";let n=[...Lt.nuevos.map(e=>{let t=et.find(i=>i.code===e);return t?`<li><i></i><a href="#${t.code}">Nuevo \xB7 ${t.code} \xB7 ${ge(t.artist)} \u2014 ${ge(Gt(t))}</a></li>`:""}),Lt.sen?`<li><i></i><a href="#senal">Se\xF1al ${ge(Lt.sen)} en antena</a></li>`:"",Lt.emitidas?`<li><i></i><a href="#registro">${Lt.emitidas===1?"Se emiti\xF3 una transmisi\xF3n":`Se emitieron ${Lt.emitidas} transmisiones`} mientras no estabas</a></li>`:"",Lt.ahora?`<li><i></i><span>${Lt.ahora===1?"Hay una transmisi\xF3n":`Hay ${Lt.ahora} transmisiones`} emitiendo ahora mismo, en alg\xFAn punto del dial</span></li>`:""].filter(Boolean);return n.length?`<article class="ficha nota visita" data-c="visita" aria-label="Desde tu \xFAltima visita">
      <div class="eti"><span>Desde tu \xFAltima visita \xB7 hace ${H_(Date.now()-Lt.desde)}</span><span class="der"><button class="cierra" aria-label="Cerrar aviso">\xD7</button></span></div>
      <ul class="nov">${n.join("")}</ul></article>`:""}function dp(){let n=fe("notas"),e=k_.filter(t=>!pr.includes(t.code));n.innerHTML=W_()+e.map((t,i)=>`<article class="ficha nota" data-c="${t.code}" style="--o:${i}" aria-label="${i?"Lanzamiento destacado":"\xDAltimo lanzamiento destacado"}: ${ge(t.artist)}">
      <div class="eti"><span>${t===et[0]?"\xDAltimo lanzamiento":"Lanzamiento"}</span><span class="der"><span class="dest"><i></i>Destacado</span><button class="cierra" aria-label="Cerrar aviso">\xD7</button></span></div>
      <div class="cuerpo">${t.cover?`<img src="${ge(t.cover)}"${Ar(t.cover,"96px")} alt="Portada de ${ge(t.title)}" width="96" height="96" decoding="async">`:`<span class="placa-cod" style="width:96px;height:96px;display:grid;place-items:center;background:#2c3242;font:700 11px var(--f-mono)">${t.code}</span>`}
        <div><div class="cod">${t.code} \xB7 ${ge(t.format)} \xB7 ${t.year}</div><div class="art">${ge(t.artist)}</div><div class="tit">${ge(Gt(t))}</div></div></div>
      <div class="acciones">${t.soundcloud?`<a class="tecla" href="${ge(t.soundcloud)}" target="_blank" rel="noopener">Escuchar en SoundCloud \u2197</a>`:t.spotify?`<a class="tecla" href="${ge(t.spotify)}" target="_blank" rel="noopener">Escuchar en Spotify \u2197</a>`:""}<a class="tecla oscura" href="#${t.code}">Ficha</a></div></article>`).join(""),Cu(),n.parentNode.scrollLeft=0,n.querySelectorAll(".cierra").forEach(t=>t.onclick=()=>{let i=t.closest(".nota");pr.push(i.dataset.c);try{sessionStorage.setItem("au-cerrados",JSON.stringify(pr))}catch{}i.classList.add("fuera"),i.style.zIndex=20,setTimeout(()=>{i.remove(),Cu()},380),Cu(i)})}function Cu(n){let e=fe("notas"),t=[...e.querySelectorAll(".nota")].filter(i=>i!==n);e.style.setProperty("--n",t.length||1),t.forEach((i,s)=>{i.style.setProperty("--i",s),i.classList.toggle("atras",s>0)})}var zc=864e5,Rc=n=>new Date(n+"T00:00:00"),Fu=(()=>{try{return new URLSearchParams(location.search).get("demo")}catch{return null}})(),q_=(()=>{if(!Fu||!et[0])return kt.proximos||[];let n={anuncio:22.4,revelado:8.6,fragmento:1.6}[Fu],e=new Date(Date.now()+(n||0)*zc),t=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return n?[{...et[0],code:"AU0213",artist:"ARTISTA DE PRUEBA",title:"T\xCDTULO DE PRUEBA",fecha:t,presave:"#",fragmentos:et[0].fragmentos||[]}]:[]})();function $_(){let n=Date.now(),e=q_[0];if(e){let o=(Rc(e.fecha)-n)/zc;if(o<=30)return{fase:o>14?"anuncio":o>3?"revelado":"fragmento",r:e,obj:Rc(e.fecha),d:o}}let t=Fu==="salida"?et[0]:et.find(o=>o.fecha&&n-Rc(o.fecha)>=0&&n-Rc(o.fecha)<zc);if(t)return{fase:"salida",r:t};let i=Ct[0];if(!i)return null;let s=i.mes%12+1,a=i.anio+(i.mes===12?1:0),r=new Date(a,s-1,1);return{fase:"reposo",obj:r>n?r:null,code:String(s).padStart(2,"0")+"_"+String(a).slice(-2)}}var Of="",Bu=null,Ff=null,wn=n=>String(n).padStart(2,"0"),Bf=n=>n?n.split("-").reverse().join("."):"";function zf(n){if(!n.obj)return`<div class="reloj msg" id="proxReloj"><b>${n.fase==="salida"?"YA DISPONIBLE":"EN PREPARACI\xD3N"}</b></div>`;let e=Math.max(0,n.obj-Date.now()),t=Math.floor(e/zc),i=Math.floor(e/36e5)%24,s=Math.floor(e/6e4)%60,a=Math.floor(e/1e3)%60;return`<div class="reloj${t<1?" rojo":""}" id="proxReloj" role="timer" aria-label="Faltan ${t} d\xEDas, ${i} horas y ${s} minutos"><b data-g="88">${wn(t)}</b><small>D</small><b data-g="88:88:88">${wn(i)}:${wn(s)}:${wn(a)}</b></div>`}var X_=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function Y_(n){let e=fe("proxImg");if(!e)return;let t=e.getContext("2d");clearInterval(Ff);let i=n.fase==="reposo"?Ct[0]&&Ct[0].cover:n.fase!=="anuncio"&&n.r.cover;if(!i){let o=()=>{let c=t.createImageData(48,48);for(let l=0;l<c.data.length;l+=4)c.data[l]=207,c.data[l+1]=224,c.data[l+2]=255,c.data[l+3]=Math.random()<.33?190:0;t.putImageData(c,0,0)};o(),Ff=setInterval(()=>{!document.hidden&&tt==="escucha"&&o()},140);return}let s=n.fase==="revelado"?Math.round(6+(1-Math.max(0,Math.min(1,(n.d-4)/10)))*42):48,a=new Image;a.onload=()=>{let o=document.createElement("canvas");o.width=o.height=s;let c=o.getContext("2d",{willReadFrequently:!0});c.drawImage(a,0,0,s,s);let l=c.getImageData(0,0,s,s).data,u=t.createImageData(48,48);for(let d=0;d<48;d++)for(let h=0;h<48;h++){let f=(Math.floor(d*s/48)*s+Math.floor(h*s/48))*4;if((.3*l[f]+.59*l[f+1]+.11*l[f+2])/255>(X_[d%4*4+h%4]+.5)/16){let y=(d*48+h)*4;u.data[y]=207,u.data[y+1]=224,u.data[y+2]=255,u.data[y+3]=235}}t.putImageData(u,0,0)};let r=Du(i,320);r&&(a.onerror=()=>{a.onerror=null,a.src=i}),a.src=r||i}function fp(){let n=fe("proximo"),e=$_();if(!e){n.innerHTML="",n.hidden=!0;return}let t=e.fase+(e.r?e.r.code:"")+(e.fase==="fragmento"||e.fase==="revelado"?Math.ceil(e.d):"");if(t===Of){let h=fe("proxReloj");h&&e.obj&&(h.outerHTML=zf(e));return}Of=t;let i=e.r,s=e.fase!=="reposo",a=i&&i.fragmentos?i.fragmentos.length:0,r=e.fase==="fragmento"&&a?Math.min(a-1,e.d>2?0:e.d>1?1:2):-1;Bu=r>=0?i.fragmentos[r]:null;let o=e.fase==="reposo"?`PR\xD3XIMA SE\xD1AL \xB7 ${e.code} \xB7 LANZAMIENTOS, HALLAZGOS Y OBSESIONES DEL MES`:e.fase==="anuncio"?`SE\xD1AL ENTRANTE \xB7 ${i.code} \xB7 SALE EL ${Bf(i.fecha)}`:e.fase==="salida"?`${i.code} \xB7 ${i.artist} \u2014 ${Gt(i)} \xB7 DESDE HOY`:`${i.code} \xB7 ${i.artist} \u2014 ${Gt(i)} \xB7 ${Bf(i.fecha)}`,c=(h,f,g="")=>f?`<a class="bt" href="${ge(f)}"${/^https?:/.test(f)?' target="_blank" rel="noopener"':""}${g}>${h}</a>`:`<span class="bt" aria-disabled="true">${h}</span>`,l=Bu?`<button class="bt" type="button" id="bFrag">\u25B6 FRAG ${r+1}/${a}</button>`:e.fase==="salida"?c("ESCUCHAR \u2197",i.soundcloud||i.spotify):c("FRAGMENTO"),u=c("PRESAVE"+((e.fase==="revelado"||e.fase==="fragmento")&&i.presave?" \u2197":""),(e.fase==="revelado"||e.fase==="fragmento")&&i.presave),d=e.fase==="reposo"?c("SE\xD1AL","#senal"):e.fase==="salida"?c("FICHA","#"+i.code):c("FICHA");n.classList.toggle("activo",s),n.innerHTML=`<div class="cab"><span>AU-06 \xB7 ${{anuncio:"Anuncio",revelado:"Revelado",fragmento:"Fragmento",salida:"Salida",reposo:"Reposo"}[e.fase]}</span><i class="piloto${s?" on":""}" aria-hidden="true"></i></div>
    <div class="lcd"><canvas id="proxImg" width="48" height="48" aria-hidden="true"></canvas><div><div class="lin" id="proxLin"><span>${ge(o)}</span></div>${zf(e)}</div></div>
    <div class="teclas">${l}${u}${d}<span class="altavoz" aria-hidden="true"></span></div>`,fe("bFrag")&&(fe("bFrag").onclick=Z_),Y_(e),requestAnimationFrame(()=>{let h=fe("proxLin");if(h&&h.scrollWidth>h.clientWidth+2){let f=h.firstChild;f.textContent=f.textContent+" \xB7 "+f.textContent+" \xB7 ",h.classList.add("mueve"),h.style.setProperty("--dur",Math.round(f.scrollWidth/2/26)+"s")}}),n.hidden=!1}var Ui=null,Ru=!1;function Z_(){let n=fe("bFrag");if(Ui&&!Ui.paused){Ui.pause();return}Ui=new Audio(Bu),Ui.preload="auto",Be.on&&(Be.apagar(),Ru=!0,ei());let e=()=>{n&&(n.textContent=n.textContent.replace("\u25A0","\u25B6")),Ru&&(Ru=!1,Be.encender().then(ei))};Ui.onended=e,Ui.onpause=e,Ui.play().then(()=>{n&&(n.textContent=n.textContent.replace("\u25B6","\u25A0"))}).catch(e)}fp();setInterval(()=>{tt==="escucha"&&!document.hidden&&fp()},1e3);qf().then(G_);setInterval(qf,300*1e3);dp();{let n=fe("bIG"),e=(kt.contacto||{}).instagram||n.href,t=e.replace(/\/+$/,"").split("/").pop();n.href=e,n.querySelector("small").textContent="@"+t+" \u2197",/Android/i.test(navigator.userAgent)&&n.addEventListener("click",i=>{i.preventDefault(),location.href=`intent://instagram.com/_u/${t}/#Intent;package=com.instagram.android;scheme=https;S.browser_fallback_url=${encodeURIComponent(e)};end`})}(kt.manifiesto||{}).titular&&(fe("lemaT").textContent=kt.manifiesto.titular);{let n=fe("panel"),e=null,t=()=>{e&&(e.classList.remove("en-mano"),e.style.removeProperty("--rx"),e.style.removeProperty("--ry"),e=null)};n.addEventListener("pointermove",i=>{if(i.pointerType!=="mouse"||us.matches)return;let s=i.target instanceof Element&&i.target.matches(".fl > img.portada")?i.target:null;if(s!==e&&t(),!s)return;let a=s.getBoundingClientRect(),r=(i.clientX-a.left)/a.width-.5,o=(i.clientY-a.top)/a.height-.5;e=s,s.classList.add("en-mano"),s.style.setProperty("--ry",(r*9).toFixed(2)+"deg"),s.style.setProperty("--rx",(-o*9).toFixed(2)+"deg")}),n.addEventListener("pointerleave",t)}new MutationObserver(()=>{matchMedia("(max-width:820px)").matches||fe("panel").querySelectorAll(":scope > .panel-cuerpo:not([tabindex])").forEach(n=>{n.tabIndex=0})}).observe(fe("panel"),{childList:!0});addEventListener("hashchange",Yu);addEventListener("popstate",n=>{location.hash||Yu(n)});Yu();window.__directo&&tt!=="escucha"&&(fe("encendido").style.transition="none",Gc(!1));window.__carga?.mark("datos",et.length+" REF. \xB7 SE\xD1AL "+(Ct[0]?Ct[0].code:"\u2014"));addEventListener("resize",Hc);requestAnimationFrame(Hc);var Zu=n=>{fe("faja").classList.toggle("abierta",n),fe("velo").classList.toggle("on",n),fe("bMenu").setAttribute("aria-expanded",n),n&&Hc()};fe("bMenu").onclick=()=>Zu(!fe("faja").classList.contains("abierta"));fe("velo").onclick=()=>Zu(!1);document.querySelectorAll(".faja a").forEach(n=>n.addEventListener("click",()=>setTimeout(()=>Zu(!1),250)));var Vf=matchMedia("(pointer: coarse)").matches||innerWidth<821,ls=-3*Math.PI/6,pp=0;yr.cola.length>=3&&!Be.on&&!zi&&(Be.canal=-1,ls=Vc(-1),wt());try{let n=localStorage.getItem("au-canal"),e=+n;n!==null&&!Be.on&&Number.isInteger(e)&&e<=11&&e>=(zi||!yr.cola.length?0:-1)&&(Be.canal=e,ls=Vc(e),wt())}catch{}await new Promise(n=>{let e=()=>requestAnimationFrame(()=>setTimeout(n,0));window.__directo?setTimeout(e,500):e()});e:{let $=function(de,Me){let Ie=Me*400/2160,Ge=Math.min(460,Math.max(240,de*.26)),Je=Ie+Ge/2;W.position.copy(O),W.lookAt(E),W.updateMatrixWorld();let Q=Math.tan(Tn.degToRad(W.fov/2));for(let[Re,_e]of Object.entries(V)){let be=L[Re][0];ae[Re]||(be.updateMatrixWorld(!0),le.setFromObject(be).getSize(ce),ae[Re]=[ce.x/be.scale.x,ce.y/be.scale.x]),Y.copy(_e.p0).project(W),Y.x=Je/de*2-1,Y.unproject(W),_e.p.copy(Y);let Le=Me/2/((W.position.z-_e.p.z)*Q);_e.s=Math.min(_e.s0,Ge*.86/(ae[Re][0]*Le),(Me-170)*.72/(ae[Re][1]*Le))}},R=function(){let de=innerWidth,Me=innerHeight;K=de/Me<.85?"alto":"ancho";let Ie=_[K];i.setSize(de,Me,!1),W.aspect=de/Me,W.fov=Ie.fov,W.updateProjectionMatrix(),O.set(...Ie.cam),E.set(...Ie.look);for(let[Ge,[Je]]of Object.entries(L)){let[Q,Re]=Ie.p[Ge];Je.position.set(...Q),Je.scale.setScalar(Re),b[Ge]={q:b[Ge]?.q||Je.quaternion.clone(),p:Je.position.clone(),s:Re}}K==="ancho"&&$(de,Me)},Ve=function(de){j.set(de.clientX/innerWidth*2-1,-(de.clientY/innerHeight)*2+1),ve.setFromCamera(j,W);for(let[Me,[Ie]]of Object.entries(L))if(ve.intersectObject(Ie,!0).length)return Me;return null},ke=function(de){if(Ae.matches&&!Ne.hidden&&ke.uno){if(ke.tap||(ke.tap=de),de-ke.tap>1600){pe=de,document.hidden||requestAnimationFrame(ke);return}}else ke.tap=0;let Me=Math.max(0,(de-pe)/1e3),Ie=Math.min(.05,Me);pe=de,!x&&Fi&&de-pp>3e3&&Me<.5&&(De++,I+=Me,De===120&&(I/De>1/28?(s=Math.max(1,s*.8),i.setPixelRatio(s),x=s<=1):x=!0,De=0,I=0));let Ge=Fi,Je=re?0:(de-oe)/1e3,Q=Je/30%1;xe+=((Ge?1:.45)-xe)*Math.min(1,Ie*1.6),i.toneMappingExposure=xe,we+=(Be.nivel()-we)*Math.min(1,Ie*12),ta=Math.max(0,ta-Ie*.9),ne=Math.max(0,ne-Ie*4),ye.x+=(G.x-ye.x)*Math.min(1,Ie*2.5),ye.y+=(G.y-ye.y)*Math.min(1,Ie*2.5);let Re=Ge?1:.12;for(let[be,[Le]]of Object.entries(L)){let Se=P[be],We=b[be],$e=Q*Re,mt=$e-Se.warp*(Math.sin(N*($e-Se.ph))+Math.sin(N*Se.ph))/N;J.setFromAxisAngle(new Z(...Se.axis),Se.dir*N*mt),te.setFromAxisAngle(new Z(...Se.sway),w(Se.sa)*Math.sin(N*(Se.bk*$e)+Se.bp)),Le.quaternion.copy(We.q).multiply(te).multiply(J),be==="hero"&&(se.set(ye.y*.12,ye.x*.22,0),H.setFromEuler(se),Le.quaternion.premultiply(H));let ht=be==="p2"||be==="hero"?Math.sin(ta*Math.PI)*(be==="hero"?.35:.6):0;ht&&(H.setFromAxisAngle(new Z(0,1,0),ht),Le.quaternion.multiply(H)),Le.position.set(We.p.x,We.p.y+Se.bob*(Math.sin(N*Se.bk*$e+Se.bp)-Math.sin(Se.bp))-(be==="p5"?ne*10:0),We.p.z);let Nt=V[be],un=dr&&K==="ancho";if(X[be]=Tn.clamp(X[be]+((un&&dr===be?1:0)-X[be])*Math.min(1,Ie*2.2),0,1),X[be]>.001&&Nt?(Le.position.lerp(Nt.p,X[be]),Nt.q&&Le.quaternion.slerp(Nt.q,X[be]),Le.scale.setScalar(Tn.lerp(We.s,Nt.s,X[be]))):un&&dr!==be&&(Le.position.z-=1300*D),be==="p3"){let Sr=Math.min(1,we*6),jc=X[be]>.001&&Nt?Tn.lerp(We.s,Nt.s,X[be]):We.s;z.forEach(([Mr,ra])=>{Mr.position.z=ra+Sr*9}),Le.scale.setScalar(jc*(1+Sr*.025))}}D=Tn.clamp(D+((dr&&K==="ancho"?1:0)-D)*Math.min(1,Ie*1.8),0,1),k.cursores&&k.cursores.forEach(([be,Le],Se)=>{let We=k.TR0+Math.round(ie[Se]*12)*k.STEP;be.position.y+=(We-be.position.y)*Math.min(1,Ie*6),Le.position.y=be.position.y});let _e=Ou?-Ou*Math.PI/6:ls;Ce+=(_e-Ce)*Math.min(1,Ie*3),C&&(C.rotation.z=Ce),W.position.set(O.x+ye.x*40,O.y-ye.y*22,O.z),W.lookAt(E),i.render(a,W),ke.uno||(ke.uno=!0,window.__carga?.mark("escena","EN DIRECTO")),document.hidden||requestAnimationFrame(ke)},n=fe("escena"),e=de=>{try{return de&&localStorage.setItem("au-grafica",de),localStorage.getItem("au-grafica")}catch{return null}},t=e(/[?&]grafica=si/.test(location.search)?"si":"")==="si"||/[?&]grafica=si/.test(location.search),i=null;if(t||!(navigator.webdriver||e()==="no"))try{if(i=new Mc({canvas:n,antialias:!0,alpha:!0,failIfMajorPerformanceCaveat:!t}),!t){let de=i.getContext(),Me=de.getExtension("WEBGL_debug_renderer_info"),Ie=Me?String(de.getParameter(Me.UNMASKED_RENDERER_WEBGL)):"";/swiftshader|llvmpipe|software|basic render/i.test(Ie)&&(i.dispose(),i=null,e("no"))}}catch{i=null,e("no")}if(!i){document.body.classList.add("sin-escena"),window.__carga?.mark("piezas","SIN GR\xC1FICA"),window.__carga?.mark("escena","IMAGEN FIJA"),window.__listo=!0;let de=document.createElement("button");de.type="button",de.className="tecla",de.id="bGrafica",de.textContent="Escena 3D en pausa \xB7 Activar",de.onclick=()=>{try{localStorage.setItem("au-grafica","si")}catch{}location.reload()},document.body.appendChild(de);break e}let s=Math.min(devicePixelRatio,Vf?2:1.75);i.setPixelRatio(s),i.setClearColor(0,0),i.toneMapping=Ya,i.toneMappingExposure=.45,i.shadowMap.enabled=!0,i.shadowMap.type=Qi;let a=new Zi;a.environment=new Js(i).fromScene(new Ec,.04).texture,a.environmentIntensity=.5,a.fog=new Ma(13883872,900,5600);let r=document.createElement("canvas");r.width=4,r.height=512;let o=r.getContext("2d"),c=o.createLinearGradient(0,0,0,512);c.addColorStop(0,"#9dafc5"),c.addColorStop(.7,"#d3d9e0"),c.addColorStop(1,"#d3d9e0"),o.fillStyle=c,o.fillRect(0,0,4,512);let l=new bi(r);l.colorSpace=Ft,a.background=l;let u=170,d=16,h=2048,f=h/(u*d),g=document.createElement("canvas");g.width=g.height=h;let y=g.getContext("2d");y.fillStyle="#93a3b8",y.fillRect(0,0,h,h);let p=26,m=()=>(p=p*16807%2147483647)/2147483647;for(let de=0;de<d;de++)for(let Me=0;Me<d;Me++){let Ie=(de+.5)*u*f,Ge=(Me+.5)*u*f,Je=27*f;m()<.2?(y.fillStyle="rgba(40,58,88,0.35)",y.beginPath(),y.arc(Ie+3*f,Ge+5*f,Je*1.06,0,7),y.fill(),y.fillStyle="#f6f6f3",y.beginPath(),y.arc(Ie,Ge,Je,0,7),y.fill()):(y.strokeStyle="rgba(40,58,88,0.16)",y.lineWidth=2.2*f,y.beginPath(),y.arc(Ie,Ge,Je,0,7),y.stroke())}let A=new bi(g);A.colorSpace=Ft,A.wrapS=A.wrapT=Is,A.anisotropy=i.capabilities.getMaxAnisotropy();let M=6e4;A.repeat.set(M/(u*d),M/(u*d));let v=new vt(new li(M,M),new mn({map:A,roughness:.85}));v.rotation.x=-Math.PI/2,v.position.y=-400,v.receiveShadow=!0,a.add(v),await cf();let S=mf,w=Tn.degToRad,L={hero:[uf(S),[-150,-40,0],[-16,28,0],1.45],p2:[hf(10),[-560,250,-520],[22,18,-6],1.05],p3:[df(),[230,230,-620],[20,-14,10],1.05],p4:[ff(),[150,-250,-760],[-8,16,96],1.1],p5:[pf(S),[-560,-235,-260],[6,-14,-5],.9]},_={ancho:{fov:42,cam:[-120,-150,1150],look:[-120,-90,0],p:{hero:[[-150,-40,0],1.45],p2:[[-560,250,-520],1.05],p3:[[230,230,-620],1.05],p4:[[150,-250,-760],1.1],p5:[[-560,-235,-260],.9]}},alto:gf};for(let[,[de,Me,Ie,Ge]]of Object.entries(L))de.position.set(...Me),de.rotation.set(w(Ie[0]),w(Ie[1]),w(Ie[2])),de.scale.setScalar(Ge),a.add(de);window.__carga?.mark("piezas","5 \xB7 OK");let C=L.p2[0].children.find(de=>de.isGroup);C&&(C.rotation.z=ls);let U=null;L.p3[0].traverse(de=>{!U&&de.userData&&de.userData.Rp&&(U=de)});let z=U?[1,2].map(de=>U.children[de]).filter(Boolean).map(de=>[de,de.position.z]):[],k=L.p4[0].userData,ie=[4,9,7].map(de=>de/12);tp=de=>{ie=de};let V={p4:{p:new Z(-520,-40,140),q:new zt().setFromEuler(new Jt(-.06,.32,0)),s:1.4},hero:{p:new Z(-470,10,40),q:null,s:.82},p5:{p:new Z(-500,-10,200),q:new zt().setFromEuler(new Jt(-.1,.34,.02)),s:1.15},p2:{p:new Z(-500,0,160),q:new zt().setFromEuler(new Jt(-.05,.36,0)),s:1.15},p3:{p:new Z(-505,-10,140),q:new zt().setFromEuler(new Jt(-.08,.34,.04)),s:1.25}};for(let de of Object.values(V))de.p0=de.p.clone(),de.s0=de.s;let Y=new Z,le=new Sn,ce=new Z,ae={},X={hero:0,p2:0,p3:0,p4:0,p5:0},D=0,K="ancho",F=new Gs(16777215,1.7);F.position.set(-500,1300,700),F.target.position.set(0,-400,-300),a.add(F.target),F.castShadow=!0,F.shadow.mapSize.set(2048,2048),F.shadow.radius=6,F.shadow.bias=-4e-4,F.shadow.normalBias=.8,Object.assign(F.shadow.camera,{left:-1400,right:1400,top:1400,bottom:-1400,near:100,far:4500}),a.add(F);let q=new Gs(14674165,.5);q.position.set(300,-120,260),a.add(q);let W=new Ht(42,1,5,4e4),O=new Z,E=new Z,b={};R(),addEventListener("resize",R);let P={hero:{axis:[0,0,1],dir:-1,warp:0,ph:0,bob:9,bk:1,bp:0,sway:[0,0,1],sa:1.5},p2:{axis:[0,1,0],dir:-1,warp:.55,ph:.18,bob:16,bk:2,bp:1.3,sway:[1,0,0],sa:3},p3:{axis:[1,0,0],dir:-1,warp:.5,ph:.62,bob:14,bk:1,bp:2.6,sway:[0,0,1],sa:3},p4:{axis:[0,1,0],dir:1,warp:.6,ph:.4,bob:12,bk:3,bp:4.1,sway:[0,0,1],sa:2.5},p5:{axis:[0,1,0],dir:1,warp:.45,ph:.85,bob:15,bk:2,bp:5.2,sway:[1,0,0],sa:3}},N=Math.PI*2,J=new zt,te=new zt,H=new zt,se=new Jt,re=matchMedia("(prefers-reduced-motion: reduce)").matches,G=new Pe(0,0),j=new Pe,ve=new Xa,ye={x:0,y:0},Ee={p5:"AU-05 \xB7 Pulsador \xB7 reproducir / pausar",p2:"AU-02 \xB7 Sintonizador \xB7 cambiar de canal",hero:"AU-01 \xB7 aurality",p3:"AU-03 \xB7 Altavoz \xB7 late con la radio",p4:"AU-04 \xB7 Corredor \xB7 filtros del cat\xE1logo (fase 2)"},Te=fe("rotulo"),B=null;addEventListener("pointermove",de=>{if(G.set(de.clientX/innerWidth*2-1,de.clientY/innerHeight*2-1),!Fi||de.target!==document.body&&de.target!==n&&!de.target.classList.contains("grano")){B=null,Te.classList.remove("on"),n.style.cursor="";return}B=Ve(de),n.style.cursor=B==="p5"||B==="p2"?"pointer":"",B?(Te.textContent=Ee[B],Te.style.left=de.clientX+"px",Te.style.top=de.clientY+"px",Te.classList.add("on")):Te.classList.remove("on")}),n.style.pointerEvents="auto",addEventListener("click",de=>{if(!Fi||de.target!==n&&de.target!==document.body)return;let Me=Ve(de);Me==="p5"&&(gr(),ne=1),Me==="p2"&&ki(Be.canal+1),Vf&&Me&&(Te.textContent=Ee[Me],Te.style.left=Math.min(de.clientX,innerWidth-260)+"px",Te.style.top=de.clientY+"px",Te.classList.add("on"),clearTimeout(Te.t),Te.t=setTimeout(()=>Te.classList.remove("on"),1800))});let De=0,I=0,x=!1,ne=0,oe=performance.now(),pe=oe,we=0,Ce=ls,xe=.45,Ae=matchMedia("(max-width:820px)"),Ne=document.getElementById("panel");requestAnimationFrame(ke),document.addEventListener("visibilitychange",()=>{document.hidden||(pe=performance.now(),requestAnimationFrame(ke))}),window.__listo=!0}(function n(){let e=Be.nivel(),t=Math.min(24,Math.round(Math.pow(Math.min(1,e*3.2),.85)*24)),i=kf.children;for(let s=0;s<24;s++)i[s].classList.toggle("on",s<t),i[s].classList.toggle("pico",s>=21);requestAnimationFrame(n)})();
