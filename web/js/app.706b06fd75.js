var qh=0,Jl=1,$h=2;var ys=1,Xh=2,ua=3,Ji=0,rn=1,fi=2,pi=0,ha=1,jl=2,Kl=3,Ql=4,Yh=5;var As=100,Zh=101,Jh=102,jh=103,Kh=104,Qh=200,ed=201,td=202,nd=203,eu=204,tu=205,id=206,sd=207,ad=208,rd=209,od=210,cd=211,ld=212,ud=213,hd=214,fo=0,po=1,mo=2,Js=3,go=4,vo=5,xo=6,_o=7,Xo=0,dd=1,fd=2,ti=0,nu=1,iu=2,su=3,au=4,ru=5,ou=6,pr=7;var cu=300,ji=301,Ms=302,Yo=303,Zo=304,mr=306,js=1e3,li=1001,yo=1002,Zt=1003,pd=1004;var gr=1005;var nn=1006,Jo=1007;var Ki=1008;var bn=1009,lu=1010,uu=1011,da=1012,jo=1013,ni=1014,Hn=1015,ii=1016,Ko=1017,Qo=1018,fa=1020,hu=35902,du=35899,fu=1021,pu=1022,Wn=1023,ui=1026,Qi=1027,ec=1028,tc=1029,es=1030,nc=1031;var ic=1033,vr=33776,xr=33777,_r=33778,yr=33779,sc=35840,ac=35841,rc=35842,oc=35843,cc=36196,lc=37492,uc=37496,hc=37488,dc=37489,Ar=37490,fc=37491,pc=37808,mc=37809,gc=37810,vc=37811,xc=37812,_c=37813,yc=37814,Ac=37815,Mc=37816,Sc=37817,bc=37818,Tc=37819,Ec=37820,wc=37821,Cc=36492,Rc=36494,Ic=36495,Pc=36283,Lc=36284,Mr=36285,Nc=36286;var Ba=2300,Ao=2301,uo=2302,Fl=2303,Bl=2400,zl=2401,Vl=2402;var md=3200;var Sr=0,gd=1,Pi="",Yt="srgb",za="srgb-linear",Va="linear",Mt="srgb";var ho=7680;var vd=519,xd=512,_d=513,yd=514,Dc=515,Ad=516,Md=517,Uc=518,Sd=519,bd=35044;var mu="300 es",ei=2e3,Ks=2001;function Ap(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Mp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ka(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Td(){let n=ka("canvas");return n.style.display="block",n}var fh={},Qs=null;function gu(...n){let e="THREE."+n.shift();Qs?Qs("log",e,...n):console.log(e,...n)}function Ed(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Qe(...n){n=Ed(n);let e="THREE."+n.shift();if(Qs)Qs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function et(...n){n=Ed(n);let e="THREE."+n.shift();if(Qs)Qs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ms(...n){let e=n.join(" ");e in fh||(fh[e]=!0,Qe(...n))}function wd(n,e,t){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}var Cd={[fo]:po,[mo]:xo,[go]:_o,[Js]:vo,[po]:fo,[xo]:mo,[_o]:go,[vo]:Js},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=1234567,Da=Math.PI/180,ea=180/Math.PI;function Ss(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function vu(n,e){return(n%e+e)%e}function Sp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function bp(n,e,t){return n!==e?(t-n)/(e-n):0}function Ua(n,e,t){return(1-t)*n+t*e}function Tp(n,e,t,i){return Ua(n,e,1-Math.exp(-t*i))}function Ep(n,e=1){return e-Math.abs(vu(n,e*2)-e)}function wp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Cp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Rp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ip(n,e){return n+Math.random()*(e-n)}function Pp(n){return n*(.5-Math.random())}function Lp(n){n!==void 0&&(ph=n);let e=ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Np(n){return n*Da}function Dp(n){return n*ea}function Up(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Op(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bp(n,e,t,i,s){let a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+i)/2),u=r((e+i)/2),d=a((e-i)/2),h=r((e-i)/2),f=a((i-e)/2),g=r((i-e)/2);switch(s){case"XYX":n.set(o*u,c*d,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*d,o*l);break;case"ZXZ":n.set(c*d,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*u,o*l);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ys(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var on={DEG2RAD:Da,RAD2DEG:ea,generateUUID:Ss,clamp:ht,euclideanModulo:vu,mapLinear:Sp,inverseLerp:bp,lerp:Ua,damp:Tp,pingpong:Ep,smoothstep:wp,smootherstep:Cp,randInt:Rp,randFloat:Ip,randFloatSpread:Pp,seededRandom:Lp,degToRad:Np,radToDeg:Dp,isPowerOfTwo:Up,ceilPowerOfTwo:Op,floorPowerOfTwo:Fp,setQuaternionFromProperEuler:Bp,normalize:mn,denormalize:Ys},Ce=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*s+e.x,this.y=a*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,r,o){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=a[r+0],f=a[r+1],g=a[r+2],y=a[r+3];if(d!==y||c!==h||l!==f||u!==g){let p=c*h+l*f+u*g+d*y;p<0&&(h=-h,f=-f,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let A=Math.acos(p),S=Math.sin(A);m=Math.sin(m*A)/S,o=Math.sin(o*A)/S,c=c*m+h*o,l=l*m+f*o,u=u*m+g*o,d=d*m+y*o}else{c=c*m+h*o,l=l*m+f*o,u=u*m+g*o,d=d*m+y*o;let A=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=A,l*=A,u*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,a,r){let o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=a[r],h=a[r+1],f=a[r+2],g=a[r+3];return e[t]=o*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-o*f,e[t+2]=l*g+u*f+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),d=o(a/2),h=c(i/2),f=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(a-l)*f,this._z=(r-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(a-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(r-s)/f,this._x=(a+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+r*o+s*l-a*c,this._y=s*u+r*c+a*o-i*l,this._z=a*u+r*l+i*c-s*o,this._w=r*u-i*o-s*c-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+a*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+a*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*s-o*i),u=2*(o*t-a*s),d=2*(a*i-r*t);return this.x=t+c*l+r*d-o*u,this.y=i+c*u+o*l-a*d,this.z=s+c*d+a*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-a*o,this.y=a*r-i*c,this.z=i*o-s*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fl.copy(this).projectOnVector(e),this.sub(fl)}reflect(e){return this.sub(fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fl=new Z,mh=new Wt,st=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,a,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,c,l)}set(e,t,i,s,a,r,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=i,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],y=s[0],p=s[3],m=s[6],A=s[1],S=s[4],v=s[7],M=s[2],w=s[5],L=s[8];return a[0]=r*y+o*A+c*M,a[3]=r*p+o*S+c*w,a[6]=r*m+o*v+c*L,a[1]=l*y+u*A+d*M,a[4]=l*p+u*S+d*w,a[7]=l*m+u*v+d*L,a[2]=h*y+f*A+g*M,a[5]=h*p+f*S+g*w,a[8]=h*m+f*v+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*o*l-i*a*u+i*o*c+s*a*l-s*r*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*r-o*l,h=o*c-u*a,f=l*a-r*c,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*l-u*i)*y,e[2]=(o*i-s*r)*y,e[3]=h*y,e[4]=(u*t-s*c)*y,e[5]=(s*a-o*t)*y,e[6]=f*y,e[7]=(i*c-l*t)*y,e[8]=(r*t-i*a)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,r,o){let c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*r+l*o)+r+e,-s*l,s*c,-s*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pl.makeScale(e,t)),this}rotate(e){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pl.makeRotation(-e)),this}translate(e,t){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pl=new st,gh=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zp(){let n={enabled:!0,workingColorSpace:za,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Mt&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Mt&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?Va:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[za]:{primaries:e,whitePoint:i,transfer:Va,toXYZ:gh,fromXYZ:vh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:gh,fromXYZ:vh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}var pt=zp();function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ds,Mo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=ka("canvas")),Ds.width=e.width,Ds.height=e.height;let s=Ds.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ka("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=wi(a[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vp=0,ta=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ml(s[r].image)):a.push(ml(s[r]))}else a=ml(s);i.url=a}return t||(e.images[this.uuid]=i),i}};function ml(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var kp=0,gl=new Z,vn=class n extends hi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=li,s=li,a=nn,r=Ki,o=Wn,c=bn,l=n.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Ss(),this.name="",this.source=new ta(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gl).x}get height(){return this.source.getSize(gl).y}get depth(){return this.source.getSize(gl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=cu;vn.DEFAULT_ANISOTROPY=1;var Pt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,v=(f+1)/2,M=(m+1)/2,w=(u+h)/4,L=(d+y)/4,_=(g+p)/4;return S>v&&S>M?S<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(S),s=w/i,a=L/i):v>M?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=w/s,a=_/s):M<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(M),i=L/a,s=_/a),this.set(i,s,a,t),this}let A=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(d-y)/A,this.z=(h-u)/A,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},So=class extends hi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},a=new vn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ta(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends So{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ga=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bo=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var vt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,a,r,o,c,l,u,d,h,f,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,c,l,u,d,h,f,g,y,p)}set(e,t,i,s,a,r,o,c,l,u,d,h,f,g,y,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=a,m[5]=r,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),a=1/Us.setFromMatrixColumn(e,1).length(),r=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,a=e.z,r=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){let h=r*u,f=r*d,g=o*u,y=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-y*l,t[9]=-o*c,t[2]=y-h*l,t[6]=g+f*l,t[10]=r*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,g=l*u,y=l*d;t[0]=h+y*o,t[4]=g*o-f,t[8]=r*l,t[1]=r*d,t[5]=r*u,t[9]=-o,t[2]=f*o-g,t[6]=y+h*o,t[10]=r*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,g=l*u,y=l*d;t[0]=h-y*o,t[4]=-r*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*u,t[9]=y-h*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){let h=r*u,f=r*d,g=o*u,y=o*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+y,t[1]=c*d,t[5]=y*l+h,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){let h=r*c,f=r*l,g=o*c,y=o*l;t[0]=c*u,t[4]=y-h*d,t[8]=g*d+f,t[1]=d,t[5]=r*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-y*d}else if(e.order==="XZY"){let h=r*c,f=r*l,g=o*c,y=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+y,t[5]=r*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gp,e,Hp)}lookAt(e,t,i){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Bi.crossVectors(i,Cn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Bi.crossVectors(i,Cn)),Bi.normalize(),Gr.crossVectors(Cn,Bi),s[0]=Bi.x,s[4]=Gr.x,s[8]=Cn.x,s[1]=Bi.y,s[5]=Gr.y,s[9]=Cn.y,s[2]=Bi.z,s[6]=Gr.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],y=i[6],p=i[10],m=i[14],A=i[3],S=i[7],v=i[11],M=i[15],w=s[0],L=s[4],_=s[8],R=s[12],O=s[1],z=s[5],G=s[9],se=s[13],k=s[2],$=s[6],le=s[10],ce=s[14],ae=s[3],q=s[7],J=s[11],U=s[15];return a[0]=r*w+o*O+c*k+l*ae,a[4]=r*L+o*z+c*$+l*q,a[8]=r*_+o*G+c*le+l*J,a[12]=r*R+o*se+c*ce+l*U,a[1]=u*w+d*O+h*k+f*ae,a[5]=u*L+d*z+h*$+f*q,a[9]=u*_+d*G+h*le+f*J,a[13]=u*R+d*se+h*ce+f*U,a[2]=g*w+y*O+p*k+m*ae,a[6]=g*L+y*z+p*$+m*q,a[10]=g*_+y*G+p*le+m*J,a[14]=g*R+y*se+p*ce+m*U,a[3]=A*w+S*O+v*k+M*ae,a[7]=A*L+S*z+v*$+M*q,a[11]=A*_+S*G+v*le+M*J,a[15]=A*R+S*se+v*ce+M*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],y=e[7],p=e[11],m=e[15],A=c*f-l*h,S=o*f-l*d,v=o*h-c*d,M=r*f-l*u,w=r*h-c*u,L=r*d-o*u;return t*(y*A-p*S+m*v)-i*(g*A-p*M+m*w)+s*(g*S-y*M+m*L)-a*(g*v-y*w+p*L)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],a=e[1],r=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(r*u-o*l)-i*(a*u-o*c)+s*(a*l-r*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],y=e[13],p=e[14],m=e[15],A=t*o-i*r,S=t*c-s*r,v=t*l-a*r,M=i*c-s*o,w=i*l-a*o,L=s*l-a*c,_=u*y-d*g,R=u*p-h*g,O=u*m-f*g,z=d*p-h*y,G=d*m-f*y,se=h*m-f*p,k=A*se-S*G+v*z+M*O-w*R+L*_;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/k;return e[0]=(o*se-c*G+l*z)*$,e[1]=(s*G-i*se-a*z)*$,e[2]=(y*L-p*w+m*M)*$,e[3]=(h*w-d*L-f*M)*$,e[4]=(c*O-r*se-l*R)*$,e[5]=(t*se-s*O+a*R)*$,e[6]=(p*v-g*L-m*S)*$,e[7]=(u*L-h*v+f*S)*$,e[8]=(r*G-o*O+l*_)*$,e[9]=(i*O-t*G-a*_)*$,e[10]=(g*w-y*v+m*A)*$,e[11]=(d*v-u*w-f*A)*$,e[12]=(o*R-r*z-c*_)*$,e[13]=(t*z-i*R+s*_)*$,e[14]=(y*S-g*M-p*A)*$,e[15]=(u*M-d*S+h*A)*$,this}scale(e){let t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),a=1-i,r=e.x,o=e.y,c=e.z,l=a*r,u=a*o;return this.set(l*r+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*r,0,l*c-s*o,u*c+s*r,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,r){return this.set(1,i,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,u=r+r,d=o+o,h=a*l,f=a*u,g=a*d,y=r*u,p=r*d,m=o*d,A=c*l,S=c*u,v=c*d,M=i.x,w=i.y,L=i.z;return s[0]=(1-(y+m))*M,s[1]=(f+v)*M,s[2]=(g-S)*M,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(h+m))*w,s[6]=(p+A)*w,s[7]=0,s[8]=(g+S)*L,s[9]=(p-A)*L,s[10]=(1-(h+y))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let r=Us.set(s[0],s[1],s[2]).length(),o=Us.set(s[4],s[5],s[6]).length(),c=Us.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Jn.copy(this);let l=1/r,u=1/o,d=1/c;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,t.setFromRotationMatrix(Jn),i.x=r,i.y=o,i.z=c,this}makePerspective(e,t,i,s,a,r,o=ei,c=!1){let l=this.elements,u=2*a/(t-e),d=2*a/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),g,y;if(c)g=a/(r-a),y=r*a/(r-a);else if(o===ei)g=-(r+a)/(r-a),y=-2*r*a/(r-a);else if(o===Ks)g=-r/(r-a),y=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,a,r,o=ei,c=!1){let l=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),g,y;if(c)g=1/(r-a),y=r/(r-a);else if(o===ei)g=-2/(r-a),y=-(r+a)/(r-a);else if(o===Ks)g=-1/(r-a),y=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Us=new Z,Jn=new vt,Gp=new Z(0,0,0),Hp=new Z(1,1,1),Bi=new Z,Gr=new Z,Cn=new Z,xh=new vt,_h=new Wt,sn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ht(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _h.setFromEuler(this),this.setFromQuaternion(_h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var na=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wp=0,yh=new Z,Os=new Wt,Mi=new vt,Hr=new Z,wa=new Z,qp=new Z,$p=new Wt,Ah=new Z(1,0,0),Mh=new Z(0,1,0),Sh=new Z(0,0,1),bh={type:"added"},Xp={type:"removed"},Fs={type:"childadded",child:null},vl={type:"childremoved",child:null},an=class n extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new Z,t=new sn,i=new Wt,s=new Z(1,1,1);function a(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new st}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(Mh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return yh.copy(e).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(Mh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hr.copy(e):Hr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(wa,Hr,this.up):Mi.lookAt(Hr,wa,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(Mi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xp),vl.child=e,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,$p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*s,a[13]+=i-a[1]*t-a[5]*i-a[9]*s,a[14]+=s-a[2]*t-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(a(e.animations,c))}}if(t){let o=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),d=r(e.shapes),h=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new Z(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yp={type:"move"},ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,r=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new An;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function xl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ot=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=vu(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,r=2*i-a;this.r=xl(r,a,e+1/3),this.g=xl(r,a,e),this.b=xl(r,a,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function i(a){a!==void 0&&parseFloat(a)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let i=Rd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return pt.workingToColorSpace(hn.copy(this),e),Math.round(ht(hn.r*255,0,255))*65536+Math.round(ht(hn.g*255,0,255))*256+Math.round(ht(hn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(hn.copy(this),t);let i=hn.r,s=hn.g,a=hn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),c,l,u=(o+r)/2;if(o===r)c=0,l=0;else{let d=r-o;switch(l=u<=.5?d/(r+o):d/(2-r-o),r){case i:c=(s-a)/d+(s<a?6:0);break;case s:c=(a-i)/d+2;break;case a:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Yt){pt.workingToColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,s=hn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Wr);let i=Ua(zi.h,Wr.h,t),s=Ua(zi.s,Wr.s,t),a=Ua(zi.l,Wr.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ot;ot.NAMES=Rd;var Ha=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ot(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gs=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},jn=new Z,Si=new Z,_l=new Z,bi=new Z,Bs=new Z,zs=new Z,Th=new Z,yl=new Z,Al=new Z,Ml=new Z,Sl=new Pt,bl=new Pt,Tl=new Pt,Hi=class n{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),jn.subVectors(e,t),s.cross(jn);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){jn.subVectors(s,t),Si.subVectors(i,t),_l.subVectors(e,t);let r=jn.dot(jn),o=jn.dot(Si),c=jn.dot(_l),l=Si.dot(Si),u=Si.dot(_l),d=r*l-o*o;if(d===0)return a.set(0,0,0),null;let h=1/d,f=(l*c-o*u)*h,g=(r*u-o*c)*h;return a.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,i,s,a,r,o,c){return this.getBarycoord(e,t,i,s,bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,bi.x),c.addScaledVector(r,bi.y),c.addScaledVector(o,bi.z),c)}static getInterpolatedAttribute(e,t,i,s,a,r){return Sl.setScalar(0),bl.setScalar(0),Tl.setScalar(0),Sl.fromBufferAttribute(e,t),bl.fromBufferAttribute(e,i),Tl.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Sl,a.x),r.addScaledVector(bl,a.y),r.addScaledVector(Tl,a.z),r}static isFrontFacing(e,t,i,s){return jn.subVectors(i,t),Si.subVectors(e,t),jn.cross(Si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),jn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,a=this.c,r,o;Bs.subVectors(s,i),zs.subVectors(a,i),yl.subVectors(e,i);let c=Bs.dot(yl),l=zs.dot(yl);if(c<=0&&l<=0)return t.copy(i);Al.subVectors(e,s);let u=Bs.dot(Al),d=zs.dot(Al);if(u>=0&&d<=u)return t.copy(s);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(i).addScaledVector(Bs,r);Ml.subVectors(e,a);let f=Bs.dot(Ml),g=zs.dot(Ml);if(g>=0&&f<=g)return t.copy(a);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(zs,o);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Th.subVectors(a,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(Th,o);let m=1/(p+y+h);return r=y*m,o=h*m,t.copy(i).addScaledVector(Bs,r).addScaledVector(zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gn=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Kn):Kn.fromBufferAttribute(a,r),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}let s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ca),$r.subVectors(this.max,Ca),Vs.subVectors(e.a,Ca),ks.subVectors(e.b,Ca),Gs.subVectors(e.c,Ca),Vi.subVectors(ks,Vs),ki.subVectors(Gs,ks),us.subVectors(Vs,Gs);let t=[0,-Vi.z,Vi.y,0,-ki.z,ki.y,0,-us.z,us.y,Vi.z,0,-Vi.x,ki.z,0,-ki.x,us.z,0,-us.x,-Vi.y,Vi.x,0,-ki.y,ki.x,0,-us.y,us.x,0];return!El(t,Vs,ks,Gs,$r)||(t=[1,0,0,0,1,0,0,0,1],!El(t,Vs,ks,Gs,$r))?!1:(Xr.crossVectors(Vi,ki),t=[Xr.x,Xr.y,Xr.z],El(t,Vs,ks,Gs,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Kn=new Z,qr=new Gn,Vs=new Z,ks=new Z,Gs=new Z,Vi=new Z,ki=new Z,us=new Z,Ca=new Z,$r=new Z,Xr=new Z,hs=new Z;function El(n,e,t,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){hs.fromArray(n,a);let o=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),c=e.dot(hs),l=t.dot(hs),u=i.dot(hs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Vt=new Z,Yr=new Ce,Zp=0,gn=class extends hi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bd,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),s=mn(s,this.array),a=mn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Wa=class extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var qa=class extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ut=class extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Jp=new Gn,Ra=new Z,wl=new Z,Wi=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Jp.setFromPoints(e).getCenter(i);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);let t=Ra.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ra,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(wl)),this.expandByPoint(Ra.copy(e.center).sub(wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jp=0,kn=new vt,Cl=new an,Hs=new Z,Rn=new Gn,Ia=new Gn,Xt=new Z,Sn=class n extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ap(e)?qa:Wa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new st().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,a=e.length;s<a;s++){let r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ut(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let a=t[i];Rn.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){let i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){let o=t[a];Ia.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(Rn.min,Ia.min),Rn.expandByPoint(Xt),Xt.addVectors(Rn.max,Ia.max),Rn.expandByPoint(Xt)):(Rn.expandByPoint(Ia.min),Rn.expandByPoint(Ia.max))}Rn.getCenter(i);let s=0;for(let a=0,r=e.count;a<r;a++)Xt.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(Xt));if(t)for(let a=0,r=t.length;a<r;a++){let o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Xt.fromBufferAttribute(o,l),c&&(Hs.fromBufferAttribute(e,l),Xt.add(Hs)),s=Math.max(s,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,a=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new gn(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new Z,c[_]=new Z;let l=new Z,u=new Z,d=new Z,h=new Ce,f=new Ce,g=new Ce,y=new Z,p=new Z;function m(_,R,O){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,O),h.fromBufferAttribute(a,_),f.fromBufferAttribute(a,R),g.fromBufferAttribute(a,O),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let z=1/(f.x*g.y-g.x*f.y);isFinite(z)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(z),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(z),o[_].add(y),o[R].add(y),o[O].add(y),c[_].add(p),c[R].add(p),c[O].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let _=0,R=A.length;_<R;++_){let O=A[_],z=O.start,G=O.count;for(let se=z,k=z+G;se<k;se+=3)m(e.getX(se+0),e.getX(se+1),e.getX(se+2))}let S=new Z,v=new Z,M=new Z,w=new Z;function L(_){M.fromBufferAttribute(s,_),w.copy(M);let R=o[_];S.copy(R),S.sub(M.multiplyScalar(M.dot(R))).normalize(),v.crossVectors(w,R);let z=v.dot(c[_])<0?-1:1;r.setXYZW(_,S.x,S.y,S.z,z)}for(let _=0,R=A.length;_<R;++_){let O=A[_],z=O.start,G=O.count;for(let se=z,k=z+G;se<k;se+=3)L(e.getX(se+0)),L(e.getX(se+1)),L(e.getX(se+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new Z,a=new Z,r=new Z,o=new Z,c=new Z,l=new Z,u=new Z,d=new Z;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,y),r.fromBufferAttribute(t,p),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*u;for(let m=0;m<u;m++)h[g++]=l[f++]}return new gn(h,u,d)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let a=this.morphAttributes;for(let o in a){let c=[],l=a[o];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,c=r.length;o<c;o++){let l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},a=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let a=e.morphAttributes;for(let l in a){let u=[],d=a[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,u=r.length;l<u;l++){let d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Rl=new Z,Kp=new Z,Qp=new st,Qn=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Rl.subVectors(i,t).cross(Kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Rl),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Qp.getNormalMatrix(e),s=this.coplanarPoint(Rl).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},em=0,Ci=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=ha,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let c=a[o];delete c.metadata,r.push(c)}return r}if(t){let a=s(e.textures),r=s(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Qn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ei=new Z,Il=new Z,Zr=new Z,Jr=new Z,$a=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Il.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Jr.copy(this.origin).sub(Il);let a=e.distanceTo(t)*.5,r=-this.direction.dot(Zr),o=Jr.dot(this.direction),c=-Jr.dot(Zr),l=Jr.lengthSq(),u=Math.abs(1-r*r),d,h,f,g;if(u>0)if(d=r*c-o,h=r*o-c,g=a*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,f=d*(d+r*h+2*o)+h*(r*d+h+2*c)+l}else h=a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*c)+l;else h=-a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-c),a),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-a,-c),a),f=h*(h+2*c)+l):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-c),a),f=-d*d+h*(h+2*c)+l);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Il).addScaledVector(Zr,h),f}intersectSphere(e,t){if(e.radius<0)return null;Ei.subVectors(e.center,this.origin);let i=Ei.dot(this.direction),s=Ei.dot(Ei)-i*i,a=e.radius*e.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,c=i+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,r,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(a=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,s,a){let r=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-r.x,h=e.y-r.y,f=e.z-r.z,g=t.x-r.x,y=t.y-r.y,p=t.z-r.z,m=i.x-r.x,A=i.y-r.y,S=i.z-r.z,v=Math.abs(c),M=Math.abs(l),w=Math.abs(u),L,_,R,O,z,G,se,k,$,le,ce,ae;if(v>=M&&v>=w?(R=c,G=d,$=g,ae=m,c>=0?(L=l,_=u,O=h,z=f,se=y,k=p,le=A,ce=S):(L=u,_=l,O=f,z=h,se=p,k=y,le=S,ce=A)):M>=w?(R=l,G=h,$=y,ae=A,l>=0?(L=u,_=c,O=f,z=d,se=p,k=g,le=S,ce=m):(L=c,_=u,O=d,z=f,se=g,k=p,le=m,ce=S)):(R=u,G=f,$=p,ae=S,u>=0?(L=c,_=l,O=d,z=h,se=g,k=y,le=m,ce=A):(L=l,_=c,O=h,z=d,se=y,k=g,le=A,ce=m)),R===0)return null;let q=L/R,J=_/R,U=1/R,Q=O-q*G,F=z-J*G,W=se-q*$,X=k-J*$,D=le-q*ae,E=ce-J*ae,b=D*X-E*W,C=Q*E-F*D,P=W*F-X*Q;if(s){if(b<0||C<0||P<0)return null}else if((b<0||C<0||P<0)&&(b>0||C>0||P>0))return null;let N=b+C+P;if(N===0)return null;let Y=U*(b*G+C*$+P*ae);return(N>0?Y<0:Y>0)?null:this.at(Y/N,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xa=class extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Eh=new vt,ds=new $a,jr=new Wi,wh=new Z,Kr=new Z,Qr=new Z,eo=new Z,Pl=new Z,to=new Z,Ch=new Z,no=new Z,bt=class extends an{constructor(e=new Sn,t=new Xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(a&&o){to.set(0,0,0);for(let c=0,l=a.length;c<l;c++){let u=o[c],d=a[c];u!==0&&(Pl.fromBufferAttribute(d,e),r?to.addScaledVector(Pl,u):to.addScaledVector(Pl.sub(t),u))}t.add(to)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(a),ds.copy(e.ray).recast(e.near),!(jr.containsPoint(ds.origin)===!1&&(ds.intersectSphere(jr,wh)===null||ds.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Eh.copy(a).invert(),ds.copy(e.ray).applyMatrix4(Eh),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let s,a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,y=h.length;g<y;g++){let p=h[g],m=r[p.materialIndex],A=Math.max(p.start,f.start),S=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=A,M=S;v<M;v+=3){let w=o.getX(v),L=o.getX(v+1),_=o.getX(v+2);s=io(this,m,e,i,l,u,d,w,L,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let A=o.getX(p),S=o.getX(p+1),v=o.getX(p+2);s=io(this,r,e,i,l,u,d,A,S,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,y=h.length;g<y;g++){let p=h[g],m=r[p.materialIndex],A=Math.max(p.start,f.start),S=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=A,M=S;v<M;v+=3){let w=v,L=v+1,_=v+2;s=io(this,m,e,i,l,u,d,w,L,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let A=p,S=p+1,v=p+2;s=io(this,r,e,i,l,u,d,A,S,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function tm(n,e,t,i,s,a,r,o){let c;if(e.side===rn?c=i.intersectTriangle(r,a,s,!0,o):c=i.intersectTriangle(s,a,r,e.side===Ji,o),c===null)return null;no.copy(o),no.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(no);return l<t.near||l>t.far?null:{distance:l,point:no.clone(),object:n}}function io(n,e,t,i,s,a,r,o,c,l){n.getVertexPosition(o,Kr),n.getVertexPosition(c,Qr),n.getVertexPosition(l,eo);let u=tm(n,e,t,i,Kr,Qr,eo,Ch);if(u){let d=new Z;Hi.getBarycoord(Ch,Kr,Qr,eo,d),s&&(u.uv=Hi.getInterpolatedAttribute(s,o,c,l,d,new Ce)),a&&(u.uv1=Hi.getInterpolatedAttribute(a,o,c,l,d,new Ce)),r&&(u.normal=Hi.getInterpolatedAttribute(r,o,c,l,d,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new Z,materialIndex:0};Hi.getNormal(Kr,Qr,eo,h.normal),u.face=h,u.barycoord=d}return u}var Ya=class extends vn{constructor(e=null,t=1,i=1,s,a,r,o,c,l=Zt,u=Zt,d,h){super(null,r,o,c,l,u,s,a,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sa=class extends gn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ws=new vt,Rh=new vt,so=[],Ih=new Gn,nm=new vt,Pa=new bt,La=new Wi,vs=class extends bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,nm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ws),Ih.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(Ih)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ws),La.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=e*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(i),e.ray.intersectsSphere(La)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Ws),Rh.multiplyMatrices(i,Ws),Pa.matrixWorld=Rh,Pa.raycast(e,so);for(let r=0,o=so.length;r<o;r++){let c=so[r];c.instanceId=a,c.object=this,t.push(c)}so.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new sa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ya(new Float32Array(s*this.count),s,this.count,ec,Hn));let a=this.morphTexture.source.data.data,r=0;for(let l=0;l<i.length;l++)r+=i[l];let o=this.geometry.morphTargetsRelative?1:1-r,c=s*e;return a[c]=o,a.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fs=new Wi,im=new Ce(.5,.5),ao=new Z,aa=class{constructor(e=new Qn,t=new Qn,i=new Qn,s=new Qn,a=new Qn,r=new Qn){this.planes=[e,t,i,s,a,r]}set(e,t,i,s,a,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei,i=!1){let s=this.planes,a=e.elements,r=a[0],o=a[1],c=a[2],l=a[3],u=a[4],d=a[5],h=a[6],f=a[7],g=a[8],y=a[9],p=a[10],m=a[11],A=a[12],S=a[13],v=a[14],M=a[15];if(s[0].setComponents(l-r,f-u,m-g,M-A).normalize(),s[1].setComponents(l+r,f+u,m+g,M+A).normalize(),s[2].setComponents(l+o,f+d,m+y,M+S).normalize(),s[3].setComponents(l-o,f-d,m-y,M-S).normalize(),i)s[4].setComponents(c,h,p,v).normalize(),s[5].setComponents(l-c,f-h,m-p,M-v).normalize();else if(s[4].setComponents(l-c,f-h,m-p,M-v).normalize(),t===ei)s[5].setComponents(l+c,f+h,m+p,M+v).normalize();else if(t===Ks)s[5].setComponents(c,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);let t=im.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ao.x=s.normal.x>0?e.max.x:e.min.x,ao.y=s.normal.y>0?e.max.y:e.min.y,ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Za=class extends vn{constructor(e=[],t=ji,i,s,a,r,o,c,l,u){super(e,t,i,s,a,r,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qi=class extends vn{constructor(e,t,i,s,a,r,o,c,l){super(e,t,i,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class extends vn{constructor(e,t,i=ni,s,a,r,o=Zt,c=Zt,l,u=ui,d=1){if(u!==ui&&u!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,a,r,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ta(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},To=class extends $i{constructor(e,t=ni,i=ji,s,a,r=Zt,o=Zt,c,l=ui){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,a,r,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ja=class extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ri=class n extends Sn{constructor(e=1,t=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,r,a,0),g("z","y","x",1,-1,i,t,-e,r,a,1),g("x","z","y",1,1,e,i,t,s,r,2),g("x","z","y",1,-1,e,i,-t,s,r,3),g("x","y","z",1,-1,e,t,i,s,a,4),g("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(c),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(d,2));function g(y,p,m,A,S,v,M,w,L,_,R){let O=v/L,z=M/_,G=v/2,se=M/2,k=w/2,$=L+1,le=_+1,ce=0,ae=0,q=new Z;for(let J=0;J<le;J++){let U=J*z-se;for(let Q=0;Q<$;Q++){let F=Q*O-G;q[y]=F*A,q[p]=U*S,q[m]=k,l.push(q.x,q.y,q.z),q[y]=0,q[p]=0,q[m]=w>0?1:-1,u.push(q.x,q.y,q.z),d.push(Q/L),d.push(1-J/_),ce+=1}}for(let J=0;J<_;J++)for(let U=0;U<L;U++){let Q=h+U+$*J,F=h+U+$*(J+1),W=h+(U+1)+$*(J+1),X=h+(U+1)+$*J;c.push(Q,F,X),c.push(F,W,X),ae+=6}o.addGroup(f,ae,R),f+=ae,h+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ja=class n extends Sn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let a=[],r=[],o=[],c=[],l=new Z,u=new Ce;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),r.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(r[h]/e+1)/2,u.y=(r[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new Ut(r,3)),this.setAttribute("normal",new Ut(o,3)),this.setAttribute("uv",new Ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ka=class n extends Sn{constructor(e=1,t=1,i=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),a=Math.floor(a);let u=[],d=[],h=[],f=[],g=0,y=[],p=i/2,m=0;A(),r===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ut(d,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(f,2));function A(){let v=new Z,M=new Z,w=0,L=(t-e)/i;for(let _=0;_<=a;_++){let R=[],O=_/a,z=O*(t-e)+e;for(let G=0;G<=s;G++){let se=G/s,k=se*c+o,$=Math.sin(k),le=Math.cos(k);M.x=z*$,M.y=-O*i+p,M.z=z*le,d.push(M.x,M.y,M.z),v.set($,L,le).normalize(),h.push(v.x,v.y,v.z),f.push(se,1-O),R.push(g++)}y.push(R)}for(let _=0;_<s;_++)for(let R=0;R<a;R++){let O=y[R][_],z=y[R+1][_],G=y[R+1][_+1],se=y[R][_+1];(e>0||R!==0)&&(u.push(O,z,se),w+=3),(t>0||R!==a-1)&&(u.push(z,G,se),w+=3)}l.addGroup(m,w,0),m+=w}function S(v){let M=g,w=new Ce,L=new Z,_=0,R=v===!0?e:t,O=v===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,p*O,0),h.push(0,O,0),f.push(.5,.5),g++;let z=g;for(let G=0;G<=s;G++){let k=G/s*c+o,$=Math.cos(k),le=Math.sin(k);L.x=R*le,L.y=p*O,L.z=R*$,d.push(L.x,L.y,L.z),h.push(0,O,0),w.x=$*.5+.5,w.y=le*.5*O+.5,f.push(w.x,w.y),g++}for(let G=0;G<s;G++){let se=M+G,k=z+G;v===!0?u.push(k,k+1,se):u.push(k+1,k,se),_+=3}l.addGroup(m,_,v===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),a+=i.distanceTo(s),t.push(a),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,a=i.length,r;t?r=t:r=e*i[a-1];let o=0,c=a-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-r,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(a-1);let u=i[s],h=i[s+1]-u,f=(r-u)/h;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),c=t||(r.isVector2?new Ce:new Z);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new Z,s=[],a=[],r=[],o=new Z,c=new vt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new Z)}a[0]=new Z,r[0]=new Z;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ht(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(c.makeRotationAxis(o,g))}r[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(ht(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ra=class extends In{constructor(e=0,t=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ce){let i=t,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+e*a,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Eo=class extends ra{constructor(e,t,i,s,a,r){super(e,t,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function xu(){let n=0,e=0,t=0,i=0;function s(a,r,o,c){n=a,e=o,t=-3*a+3*r-2*o-c,i=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){s(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,u,d){let h=(r-a)/l-(o-a)/(l+u)+(o-r)/u,f=(o-r)/u-(c-r)/(u+d)+(c-o)/d;h*=u,f*=u,s(r,o,h,f)},calc:function(a){let r=a*a,o=r*a;return n+e*a+t*r+i*o}}}var Ph=new Z,Lh=new Z,Ll=new xu,Nl=new xu,Dl=new xu,wo=class extends In{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new Z){let i=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e,o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%a]:(Lh.subVectors(s[0],s[1]).add(s[0]),l=Lh);let d=s[o%a],h=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(Ph.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=Ph),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Ll.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,y,p),Nl.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,y,p),Dl.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,y,p)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Nl.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Dl.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(Ll.calc(c),Nl.calc(c),Dl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Nh(n,e,t,i,s){let a=(i-e)*.5,r=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+a+r)*c+(-3*t+3*i-2*a-r)*o+a*n+t}function sm(n,e){let t=1-n;return t*t*e}function am(n,e){return 2*(1-n)*n*e}function rm(n,e){return n*n*e}function Oa(n,e,t,i){return sm(n,e)+am(n,t)+rm(n,i)}function om(n,e){let t=1-n;return t*t*t*e}function cm(n,e){let t=1-n;return 3*t*t*n*e}function lm(n,e){return 3*(1-n)*n*n*e}function um(n,e){return n*n*n*e}function Fa(n,e,t,i,s){return om(n,e)+cm(n,t)+lm(n,i)+um(n,s)}var Qa=class extends In{constructor(e=new Ce,t=new Ce,i=new Ce,s=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ce){let i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Fa(e,s.x,a.x,r.x,o.x),Fa(e,s.y,a.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Co=class extends In{constructor(e=new Z,t=new Z,i=new Z,s=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Z){let i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Fa(e,s.x,a.x,r.x,o.x),Fa(e,s.y,a.y,r.y,o.y),Fa(e,s.z,a.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},er=class extends In{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ro=class extends In{constructor(e=new Z,t=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Z){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tr=class extends In{constructor(e=new Ce,t=new Ce,i=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ce){let i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(Oa(e,s.x,a.x,r.x),Oa(e,s.y,a.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends In{constructor(e=new Z,t=new Z,i=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Z){let i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(Oa(e,s.x,a.x,r.x),Oa(e,s.y,a.y,r.y),Oa(e,s.z,a.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nr=class extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){let i=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(Nh(o,c.x,l.x,u.x,d.x),Nh(o,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ce().fromArray(s))}return this}},kl=Object.freeze({__proto__:null,ArcCurve:Eo,CatmullRomCurve3:wo,CubicBezierCurve:Qa,CubicBezierCurve3:Co,EllipseCurve:ra,LineCurve:er,LineCurve3:Ro,QuadraticBezierCurve:tr,QuadraticBezierCurve3:Io,SplineCurve:nr}),Po=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let r=s[a]-i,o=this.curves[a],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new kl[s.type]().fromJSON(s))}return this}},di=class extends Po{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new er(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let a=new tr(this.currentPoint.clone(),new Ce(e,t),new Ce(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,a,r){let o=new Qa(this.currentPoint.clone(),new Ce(e,t),new Ce(i,s),new Ce(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new nr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,a,r){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,a,r),this}absarc(e,t,i,s,a,r){return this.absellipse(e,t,i,i,s,a,r),this}ellipse(e,t,i,s,a,r,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,a,r,o,c),this}absellipse(e,t,i,s,a,r,o,c){let l=new ra(e,t,i,s,a,r,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xn=class extends di{constructor(e){super(e),this.uuid=Ss(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new di().fromJSON(s))}return this}};function hm(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,a=Id(n,0,s,t,!0),r=[];if(!a||a.next===a.prev)return r;let o,c,l;if(i&&(a=gm(n,e,a,t)),n.length>80*t){o=n[0],c=n[1];let u=o,d=c;for(let h=t;h<s;h+=t){let f=n[h],g=n[h+1];f<o&&(o=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-o,d-c),l=l!==0?32767/l:0}return ir(a,r,t,o,c,l,0),r}function Id(n,e,t,i,s){let a;if(s===wm(n,e,t,i)>0)for(let r=e;r<t;r+=i)a=Dh(r/i|0,n[r],n[r+1],a);else for(let r=t-i;r>=e;r-=i)a=Dh(r/i|0,n[r],n[r+1],a);return a&&oa(a,a.next)&&(ar(a),a=a.next),a}function xs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(oa(t,t.next)||Lt(t.prev,t,t.next)===0)){if(ar(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ir(n,e,t,i,s,a,r){if(!n)return;!r&&a&&Am(n,i,s,a);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(a?fm(n,i,s,a):dm(n)){e.push(c.i,n.i,l.i),ar(n),n=l.next,o=l.next;continue}if(n=l,n===o){r?r===1?(n=pm(xs(n),e),ir(n,e,t,i,s,a,2)):r===2&&mm(n,e,t,i,s,a):ir(xs(n),e,t,i,s,a,1);break}}}function dm(n){let e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;let s=e.x,a=t.x,r=i.x,o=e.y,c=t.y,l=i.y,u=Math.min(s,a,r),d=Math.min(o,c,l),h=Math.max(s,a,r),f=Math.max(o,c,l),g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Na(s,o,a,c,r,l,g.x,g.y)&&Lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fm(n,e,t,i){let s=n.prev,a=n,r=n.next;if(Lt(s,a,r)>=0)return!1;let o=s.x,c=a.x,l=r.x,u=s.y,d=a.y,h=r.y,f=Math.min(o,c,l),g=Math.min(u,d,h),y=Math.max(o,c,l),p=Math.max(u,d,h),m=Gl(f,g,e,t,i),A=Gl(y,p,e,t,i),S=n.prevZ,v=n.nextZ;for(;S&&S.z>=m&&v&&v.z<=A;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==r&&Na(o,u,c,d,l,h,S.x,S.y)&&Lt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==r&&Na(o,u,c,d,l,h,v.x,v.y)&&Lt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==r&&Na(o,u,c,d,l,h,S.x,S.y)&&Lt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=A;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==r&&Na(o,u,c,d,l,h,v.x,v.y)&&Lt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function pm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!oa(i,s)&&Ld(i,t,t.next,s)&&sr(i,s)&&sr(s,i)&&(e.push(i.i,t.i,s.i),ar(t),ar(t.next),t=n=s),t=t.next}while(t!==n);return xs(t)}function mm(n,e,t,i,s,a){let r=n;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&bm(r,o)){let c=Nd(r,o);r=xs(r,r.next),c=xs(c,c.next),ir(r,e,t,i,s,a,0),ir(c,e,t,i,s,a,0);return}o=o.next}r=r.next}while(r!==n)}function gm(n,e,t,i){let s=[];for(let a=0,r=e.length;a<r;a++){let o=e[a]*i,c=a<r-1?e[a+1]*i:n.length,l=Id(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Sm(l))}s.sort(vm);for(let a=0;a<s.length;a++)t=xm(s[a],t);return t}function vm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function xm(n,e){let t=_m(n,e);if(!t)return e;let i=Nd(t,n);return xs(i,i.next),xs(t,t.next)}function _m(n,e){let t=e,i=n.x,s=n.y,a=-1/0,r;if(oa(n,t))return t;do{if(oa(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>a&&(a=d,r=t.x<t.next.x?t:t.next,d===i))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,c=r.x,l=r.y,u=1/0;t=r;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Pd(s<l?i:a,s,c,l,s<l?a:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);sr(t,n)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&ym(r,t)))&&(r=t,u=d)}t=t.next}while(t!==o);return r}function ym(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function Am(n,e,t,i){let s=n;do s.z===0&&(s.z=Gl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Mm(s)}function Mm(n){let e,t=1;do{let i=n,s;n=null;let a=null;for(e=0;i;){e++;let r=i,o=0;for(let l=0;l<t&&(o++,r=r.nextZ,!!r);l++);let c=t;for(;o>0||c>0&&r;)o!==0&&(c===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,c--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;i=r}a.nextZ=null,t*=2}while(e>1);return n}function Gl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Sm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Pd(n,e,t,i,s,a,r,o){return(s-r)*(e-o)>=(n-r)*(a-o)&&(n-r)*(i-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(i-o)}function Na(n,e,t,i,s,a,r,o){return!(n===r&&e===o)&&Pd(n,e,t,i,s,a,r,o)}function bm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Tm(n,e)&&(sr(n,e)&&sr(e,n)&&Em(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||oa(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function oa(n,e){return n.x===e.x&&n.y===e.y}function Ld(n,e,t,i){let s=oo(Lt(n,e,t)),a=oo(Lt(n,e,i)),r=oo(Lt(t,i,n)),o=oo(Lt(t,i,e));return!!(s!==a&&r!==o||s===0&&ro(n,t,e)||a===0&&ro(n,i,e)||r===0&&ro(t,n,i)||o===0&&ro(t,e,i))}function ro(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function oo(n){return n>0?1:n<0?-1:0}function Tm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ld(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function sr(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function Em(n,e){let t=n,i=!1,s=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Nd(n,e){let t=Hl(n.i,n.x,n.y),i=Hl(e.i,e.x,e.y),s=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Dh(n,e,t,i){let s=Hl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ar(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Hl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wm(n,e,t,i){let s=0;for(let a=e,r=t-i;a<t;a+=i)s+=(n[r]-n[a])*(n[a+1]+n[r+1]),r=a;return s}var Wl=class{static triangulate(e,t,i=2){return hm(e,t,i)}},ps=class n{static area(e){let t=e.length,i=0;for(let s=t-1,a=0;a<t;s=a++)i+=e[s].x*e[a].y-e[a].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],a=[];Uh(e),Oh(i,e);let r=e.length;t.forEach(Uh);for(let c=0;c<t.length;c++)s.push(r),r+=t[c].length,Oh(i,t[c]);let o=Wl.triangulate(i,s);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}};function Uh(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Oh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var rr=class n extends Sn{constructor(e=new xn([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];r(l)}this.setAttribute("position",new Ut(s,3)),this.setAttribute("uv",new Ut(a,2)),this.computeVertexNormals();function r(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:Cm,S,v=!1,M,w,L,_;if(m){S=m.getSpacedPoints(u),v=!0,h=!1;let V=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(u,V),w=new Z,L=new Z,_=new Z}h||(p=0,f=0,g=0,y=0);let R=o.extractPoints(l),O=R.shape,z=R.holes;if(!ps.isClockWise(O)){O=O.reverse();for(let V=0,ne=z.length;V<ne;V++){let re=z[V];ps.isClockWise(re)&&(z[V]=re.reverse())}}function se(V){let re=10000000000000001e-36,H=V[0];for(let j=1;j<=V.length;j++){let ge=j%V.length,ye=V[ge],be=ye.x-H.x,Te=ye.y-H.y,B=be*be+Te*Te,Ve=Math.max(Math.abs(ye.x),Math.abs(ye.y),Math.abs(H.x),Math.abs(H.y)),De=re*Ve*Ve;if(B<=De){V.splice(ge,1),j--;continue}H=ye}}se(O),z.forEach(se);let k=z.length,$=O;for(let V=0;V<k;V++){let ne=z[V];O=O.concat(ne)}function le(V,ne,re){return ne||et("ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(ne,re)}let ce=O.length;function ae(V,ne,re){let H,j,ge,ye=V.x-ne.x,be=V.y-ne.y,Te=re.x-V.x,B=re.y-V.y,Ve=ye*ye+be*be,De=ye*B-be*Te;if(Math.abs(De)>Number.EPSILON){let I=Math.sqrt(Ve),x=Math.sqrt(Te*Te+B*B),ie=ne.x-be/I,oe=ne.y+ye/I,fe=re.x-B/x,Me=re.y+Te/x,Ee=((fe-ie)*B-(Me-oe)*Te)/(ye*B-be*Te);H=ie+ye*Ee-V.x,j=oe+be*Ee-V.y;let ve=H*H+j*j;if(ve<=2)return new Ce(H,j);ge=Math.sqrt(ve/2)}else{let I=!1;ye>Number.EPSILON?Te>Number.EPSILON&&(I=!0):ye<-Number.EPSILON?Te<-Number.EPSILON&&(I=!0):Math.sign(be)===Math.sign(B)&&(I=!0),I?(H=-be,j=ye,ge=Math.sqrt(Ve)):(H=ye,j=be,ge=Math.sqrt(Ve/2))}return new Ce(H/ge,j/ge)}let q=[];for(let V=0,ne=$.length,re=ne-1,H=V+1;V<ne;V++,re++,H++)re===ne&&(re=0),H===ne&&(H=0),q[V]=ae($[V],$[re],$[H]);let J=[],U,Q=q.concat();for(let V=0,ne=k;V<ne;V++){let re=z[V];U=[];for(let H=0,j=re.length,ge=j-1,ye=H+1;H<j;H++,ge++,ye++)ge===j&&(ge=0),ye===j&&(ye=0),U[H]=ae(re[H],re[ge],re[ye]);J.push(U),Q=Q.concat(U)}let F;if(p===0)F=ps.triangulateShape($,z);else{let V=[],ne=[];for(let re=0;re<p;re++){let H=re/p,j=f*Math.cos(H*Math.PI/2),ge=g*Math.sin(H*Math.PI/2)+y;for(let ye=0,be=$.length;ye<be;ye++){let Te=le($[ye],q[ye],ge);C(Te.x,Te.y,-j),H===0&&V.push(Te)}for(let ye=0,be=k;ye<be;ye++){let Te=z[ye];U=J[ye];let B=[];for(let Ve=0,De=Te.length;Ve<De;Ve++){let I=le(Te[Ve],U[Ve],ge);C(I.x,I.y,-j),H===0&&B.push(I)}H===0&&ne.push(B)}}F=ps.triangulateShape(V,ne)}let W=F.length,X=g+y;for(let V=0;V<ce;V++){let ne=h?le(O[V],Q[V],X):O[V];v?(L.copy(M.normals[0]).multiplyScalar(ne.x),w.copy(M.binormals[0]).multiplyScalar(ne.y),_.copy(S[0]).add(L).add(w),C(_.x,_.y,_.z)):C(ne.x,ne.y,0)}for(let V=1;V<=u;V++)for(let ne=0;ne<ce;ne++){let re=h?le(O[ne],Q[ne],X):O[ne];v?(L.copy(M.normals[V]).multiplyScalar(re.x),w.copy(M.binormals[V]).multiplyScalar(re.y),_.copy(S[V]).add(L).add(w),C(_.x,_.y,_.z)):C(re.x,re.y,d/u*V)}for(let V=p-1;V>=0;V--){let ne=V/p,re=f*Math.cos(ne*Math.PI/2),H=g*Math.sin(ne*Math.PI/2)+y;for(let j=0,ge=$.length;j<ge;j++){let ye=le($[j],q[j],H);C(ye.x,ye.y,d+re)}for(let j=0,ge=z.length;j<ge;j++){let ye=z[j];U=J[j];for(let be=0,Te=ye.length;be<Te;be++){let B=le(ye[be],U[be],H);v?C(B.x,B.y+S[u-1].y,S[u-1].x+re):C(B.x,B.y,d+re)}}}D(),E();function D(){let V=s.length/3;if(h){let ne=0,re=ce*ne;for(let H=0;H<W;H++){let j=F[H];P(j[2]+re,j[1]+re,j[0]+re)}ne=u+p*2,re=ce*ne;for(let H=0;H<W;H++){let j=F[H];P(j[0]+re,j[1]+re,j[2]+re)}}else{for(let ne=0;ne<W;ne++){let re=F[ne];P(re[2],re[1],re[0])}for(let ne=0;ne<W;ne++){let re=F[ne];P(re[0]+ce*u,re[1]+ce*u,re[2]+ce*u)}}i.addGroup(V,s.length/3-V,0)}function E(){let V=s.length/3,ne=0;b($,ne),ne+=$.length;for(let re=0,H=z.length;re<H;re++){let j=z[re];b(j,ne),ne+=j.length}i.addGroup(V,s.length/3-V,1)}function b(V,ne){let re=V.length;for(;--re>=0;){let H=re,j=re-1;j<0&&(j=V.length-1);for(let ge=0,ye=u+p*2;ge<ye;ge++){let be=ce*ge,Te=ce*(ge+1),B=ne+H+be,Ve=ne+j+be,De=ne+j+Te,I=ne+H+Te;N(B,Ve,De,I)}}}function C(V,ne,re){c.push(V),c.push(ne),c.push(re)}function P(V,ne,re){Y(V),Y(ne),Y(re);let H=s.length/3,j=A.generateTopUV(i,s,H-3,H-2,H-1);ee(j[0]),ee(j[1]),ee(j[2])}function N(V,ne,re,H){Y(V),Y(ne),Y(H),Y(ne),Y(re),Y(H);let j=s.length/3,ge=A.generateSideWallUV(i,s,j-6,j-3,j-2,j-1);ee(ge[0]),ee(ge[1]),ee(ge[3]),ee(ge[1]),ee(ge[2]),ee(ge[3])}function Y(V){s.push(c[V*3+0]),s.push(c[V*3+1]),s.push(c[V*3+2])}function ee(V){a.push(V.x),a.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Rm(t,i,e)}static fromJSON(e,t){let i=[];for(let a=0,r=e.shapes.length;a<r;a++){let o=t[e.shapes[a]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new kl[s.type]().fromJSON(s)),new n(i,e.options)}},Cm={generateTopUV:function(n,e,t,i,s){let a=e[t*3],r=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new Ce(a,r),new Ce(o,c),new Ce(l,u)]},generateSideWallUV:function(n,e,t,i,s,a){let r=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[a*3],p=e[a*3+1],m=e[a*3+2];return Math.abs(o-u)<Math.abs(r-l)?[new Ce(r,1-c),new Ce(l,1-d),new Ce(h,1-g),new Ce(y,1-m)]:[new Ce(o,1-c),new Ce(u,1-d),new Ce(f,1-g),new Ce(p,1-m)]}};function Rm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let a=n[i];t.shapes.push(a.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ii=class n extends Sn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let a=e/2,r=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,d=e/o,h=t/c,f=[],g=[],y=[],p=[];for(let m=0;m<u;m++){let A=m*h-r;for(let S=0;S<l;S++){let v=S*d-a;g.push(v,-A,0),y.push(0,0,1),p.push(S/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let A=0;A<o;A++){let S=A+l*m,v=A+l*(m+1),M=A+1+l*(m+1),w=A+1+l*m;f.push(S,v,w),f.push(v,M,w)}this.setIndex(f),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(y,3)),this.setAttribute("uv",new Ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function bs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Fh(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Fh(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][i]=a}else e[t][i]=s.slice();else e[t][i]=s}}return e}function dn(n){let e={};for(let t=0;t<n.length;t++){let i=bs(n[t]);for(let s in i)e[s]=i[s]}return e}function Fh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Im(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _u(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var Dd={clone:bs,merge:dn},Pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pm,this.fragmentShader=Lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=Im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new st().fromArray(s.value);break;case"m4":this.uniforms[i].value=new vt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Lo=class extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ln=class extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_s=class extends Ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var or=class extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Xo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},No=class extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Do=class extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ul(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Xi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let r;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=t[++i],e<s)break t}r=t.length;break n}if(!(e>=a)){let o=t[1];e<o&&(i=2,a=o);for(let c=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=a,a=t[--i-1],e>=a)break t}r=i,i=0;break n}break e}for(;i<r;){let o=i+r>>>1;e<t[o]?r=o:i=o+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=i[a+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Uo=class extends Xi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bl,endingEnd:Bl}}intervalChanged_(e,t,i){let s=this.parameterPositions,a=e-2,r=e+1,o=s[a],c=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case zl:a=e,o=2*t-i;break;case Vl:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case zl:r=e,c=2*i-t;break;case Vl:r=1,c=i+s[1]-s[0];break;default:r=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,p=y*g,m=-h*p+2*h*y-h*g,A=(1+h)*p+(-1.5-2*h)*y+(-.5+h)*g+1,S=(-1-f)*p+(1.5+f)*y+.5*g,v=f*p-f*y;for(let M=0;M!==o;++M)a[M]=m*r[u+M]+A*r[l+M]+S*r[c+M]+v*r[d+M];return a}},Oo=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)a[h]=r[l+h]*d+r[c+h]*u;return a}},Fo=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bo=class extends Xi{interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-t)/(s-t),y=1-g;for(let p=0;p!==o;++p)a[p]=r[l+p]*y+r[c+p]*g;return a}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let y=r[l+g],p=r[c+g],m=f*h+g*2,A=d[m],S=d[m+1],v=e*h+g*2,M=u[v],w=u[v+1],L=Dm(i,t,A,M,s);a[g]=Ud(L,y,S,w,p)}return a}};function Ud(n,e,t,i,s){let a=1-n;return a*a*a*e+3*a*a*n*t+3*a*n*n*i+n*n*n*s}function Nm(n,e,t,i,s){let a=1-n;return 3*a*a*(t-e)+6*a*n*(i-t)+3*n*n*(s-i)}function Dm(n,e,t,i,s){let a=(n-e)/(s-e);for(let r=0;r<8;r++){let o=Ud(a,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=Nm(a,e,t,i,s);if(Math.abs(c)<1e-10)break;a=Math.max(0,Math.min(1,a-o/c))}return a}var Nn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qs(t,this.TimeBufferType),this.values=qs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:qs(e.times,Array),values:qs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Ul(e.settings)&&(i.settings={inTangents:qs(e.settings.inTangents,Array),outTangents:qs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ba:t=this.InterpolantFactoryMethodDiscrete;break;case Ao:t=this.InterpolantFactoryMethodLinear;break;case uo:t=this.InterpolantFactoryMethodSmooth;break;case Fl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ba;case this.InterpolantFactoryMethodLinear:return Ao;case this.InterpolantFactoryMethodSmooth:return uo;case this.InterpolantFactoryMethodBezier:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Ul(this.settings)&&(Bh(this.settings.inTangents,e),Bh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<e;)++a;for(;r!==-1&&i[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,a=i.length;a===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){et("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){et("KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(s!==void 0&&Mp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){et("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===uo,a=e.length-1,r=1;for(let o=1;o<a;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[f+g]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];let d=o*i,h=r*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++r}}if(a>0){e[r]=e[a];for(let o=a*i,c=r*i,l=0;l!==i;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ul(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Ao;var Yi=class extends Nn{constructor(e,t,i){super(e,t,i)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Ba;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}};zo.prototype.ValueTypeName="color";var Vo=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}};Vo.prototype.ValueTypeName="number";var ko=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)Wt.slerpFlat(a,0,r,l-o,r,l,c);return a}},cr=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}};cr.prototype.ValueTypeName="quaternion";cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Nn{constructor(e,t,i){super(e,t,i)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Ba;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}};Go.prototype.ValueTypeName="vector";var Ho=class{constructor(e,t,i){let s=this,a=!1,r=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Od=new Ho,Wo=class{constructor(e){this.manager=e!==void 0?e:Od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Ol=new vt,zh=new Z,Vh=new Z,ur=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new aa,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(zh),Vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ol,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,c=s?s.x/a.x:0,l=s?s.y/a.y:0;e.coordinateSystem===Ks||e.reversedDepth?t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},co=new Z,lo=new Wt,ci=new Z,hr=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(co,lo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,lo,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(co,lo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,lo,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new Z,kh=new Ce,Gh=new Ce,tn=class extends hr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,kh,Gh),t.subVectors(Gh,kh)}setViewOffset(e,t,i,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Da*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,t-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ql=class extends ur{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},dr=class extends lr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ql}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ca=class extends hr{constructor(e=-1,t=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-e,r=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$l=class extends ur{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},la=class extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new $l}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var $s=-90,Xs=1,qo=class extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn($s,Xs,e,t);s.layers=this.layers,this.add(s);let a=new tn($s,Xs,e,t);a.layers=this.layers,this.add(a);let r=new tn($s,Xs,e,t);r.layers=this.layers,this.add(r);let o=new tn($s,Xs,e,t);o.layers=this.layers,this.add(o);let c=new tn($s,Xs,e,t);c.layers=this.layers,this.add(c);let l=new tn($s,Xs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,a,r,o,c]=t;for(let l of t)this.remove(l);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},$o=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var yu="\\[\\]\\.:\\/",Um=new RegExp("["+yu+"]","g"),Au="[^"+yu+"]",Om="[^"+yu.replace("\\.","")+"]",Fm=/((?:WC+[\/:])*)/.source.replace("WC",Au),Bm=/(WCOD+)?/.source.replace("WCOD",Om),zm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Au),Vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Au),km=new RegExp("^"+Fm+Bm+zm+Vm+"$"),Gm=["material","materials","bones","map"],Xl=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Um,"")}static parseTrackName(e){let t=km.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Gm.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,a=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[s];if(r===void 0){let l=t.nodeName;et("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Xl;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j_=new Float32Array(1);var Hh=new vt,fr=class{constructor(e,t,i=0,s=1/0){this.ray=new $a(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(e,t=!0,i=[]){return Yl(e,this,i,t),i.sort(Wh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,a=e.length;s<a;s++)Yl(e[s],this,i,t);return i.sort(Wh),i}};function Wh(n,e){return n.distance-e.distance}function Yl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let a=n.children;for(let r=0,o=a.length;r<o;r++)Yl(a[r],e,t,!0)}}var Zl=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=s,this}};function Mu(n,e,t,i){let s=Hm(i);switch(t){case fu:return n*e;case ec:return n*e/s.components*s.byteLength;case tc:return n*e/s.components*s.byteLength;case es:return n*e*2/s.components*s.byteLength;case nc:return n*e*2/s.components*s.byteLength;case pu:return n*e*3/s.components*s.byteLength;case Wn:return n*e*4/s.components*s.byteLength;case ic:return n*e*4/s.components*s.byteLength;case vr:case xr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _r:case yr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ac:case oc:return Math.max(n,16)*Math.max(e,8)/4;case sc:case rc:return Math.max(n,8)*Math.max(e,8)/2;case cc:case lc:case hc:case dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uc:case Ar:case fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Cc:case Rc:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pc:case Lc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mr:case Nc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hm(n){switch(n){case bn:case lu:return{byteLength:1,components:1};case da:case uu:case ii:return{byteLength:2,components:1};case Ko:case Qo:return{byteLength:2,components:4};case ni:case jo:case Hn:return{byteLength:4,components:1};case hu:case du:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function af(){let n=null,e=!1,t=null,i=null;function s(a,r){i=n.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Jm(n){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}var jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Km=`#ifdef USE_ALPHAHASH
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
#endif`,Qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
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
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
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
#endif`,r0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c0=`vec3 objectNormal = vec3( normal );
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
} // validated`,u0=`#ifdef USE_IRIDESCENCE
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
#endif`,h0=`#ifdef USE_BUMPMAP
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,y0=`#define PI 3.141592653589793
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
} // validated`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M0=`vec3 transformedNormal = objectNormal;
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
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w0="gl_FragColor = linearToOutputTexel( gl_FragColor );",C0=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O0=`#ifdef USE_FOG
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
#endif`,B0=`#ifdef USE_GRADIENTMAP
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
#endif`,V0=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,H0=`#ifdef USE_ENVMAP
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
#endif`,W0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#endif`,Z0=`uniform sampler2D dfgLUT;
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
}`,J0=`
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
#endif`,j0=`#if defined( RE_IndirectDiffuse )
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,og=`#if defined( USE_POINTS_UV )
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
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`#ifdef USE_MORPHTARGETS
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
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yg=`#ifdef USE_NORMALMAP
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
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Og=`float getShadowMask() {
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
}`,Fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`#include <common>
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
}`,sv=`#if DEPTH_PACKING == 3200
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
}`,av=`#define DISTANCE
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
}`,rv=`#define DISTANCE
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
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`uniform float scale;
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
}`,uv=`uniform vec3 diffuse;
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
}`,hv=`#include <common>
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
}`,dv=`uniform vec3 diffuse;
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
}`,fv=`#define LAMBERT
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
}`,pv=`#define LAMBERT
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
}`,mv=`#define MATCAP
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
}`,gv=`#define MATCAP
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
}`,vv=`#define NORMAL
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
}`,xv=`#define NORMAL
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
}`,_v=`#define PHONG
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
}`,yv=`#define PHONG
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
}`,Av=`#define STANDARD
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
}`,Mv=`#define STANDARD
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
}`,bv=`#define TOON
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
}`,Tv=`uniform float size;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,Cv=`uniform vec3 color;
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
}`,Rv=`uniform float rotation;
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
}`,Iv=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:jm,alphahash_pars_fragment:Km,alphamap_fragment:Qm,alphamap_pars_fragment:e0,alphatest_fragment:t0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:s0,batching_pars_vertex:a0,batching_vertex:r0,begin_vertex:o0,beginnormal_vertex:c0,bsdfs:l0,iridescence_fragment:u0,bumpmap_pars_fragment:h0,clipping_planes_fragment:d0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:p0,clipping_planes_vertex:m0,color_fragment:g0,color_pars_fragment:v0,color_pars_vertex:x0,color_vertex:_0,common:y0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:M0,displacementmap_pars_vertex:S0,displacementmap_vertex:b0,emissivemap_fragment:T0,emissivemap_pars_fragment:E0,colorspace_fragment:w0,colorspace_pars_fragment:C0,envmap_fragment:R0,envmap_common_pars_fragment:I0,envmap_pars_fragment:P0,envmap_pars_vertex:L0,envmap_physical_pars_fragment:H0,envmap_vertex:N0,fog_vertex:D0,fog_pars_vertex:U0,fog_fragment:O0,fog_pars_fragment:F0,gradientmap_pars_fragment:B0,lightmap_pars_fragment:z0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:k0,lights_pars_begin:G0,lights_toon_fragment:W0,lights_toon_pars_fragment:q0,lights_phong_fragment:$0,lights_phong_pars_fragment:X0,lights_physical_fragment:Y0,lights_physical_pars_fragment:Z0,lights_fragment_begin:J0,lights_fragment_maps:j0,lights_fragment_end:K0,lightprobes_pars_fragment:Q0,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:sg,map_pars_fragment:ag,map_particle_fragment:rg,map_particle_pars_fragment:og,metalnessmap_fragment:cg,metalnessmap_pars_fragment:lg,morphinstance_vertex:ug,morphcolor_vertex:hg,morphnormal_vertex:dg,morphtarget_pars_vertex:fg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:gg,normal_pars_fragment:vg,normal_pars_vertex:xg,normal_vertex:_g,normalmap_pars_fragment:yg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:Sg,iridescence_pars_fragment:bg,opaque_fragment:Tg,packing:Eg,premultiplied_alpha_fragment:wg,project_vertex:Cg,dithering_fragment:Rg,dithering_pars_fragment:Ig,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Dg,shadowmap_vertex:Ug,shadowmask_pars_fragment:Og,skinbase_vertex:Fg,skinning_pars_vertex:Bg,skinning_vertex:zg,skinnormal_vertex:Vg,specularmap_fragment:kg,specularmap_pars_fragment:Gg,tonemapping_fragment:Hg,tonemapping_pars_fragment:Wg,transmission_fragment:qg,transmission_pars_fragment:$g,uv_pars_fragment:Xg,uv_pars_vertex:Yg,uv_vertex:Zg,worldpos_vertex:Jg,background_vert:jg,background_frag:Kg,backgroundCube_vert:Qg,backgroundCube_frag:ev,cube_vert:tv,cube_frag:nv,depth_vert:iv,depth_frag:sv,distance_vert:av,distance_frag:rv,equirect_vert:ov,equirect_frag:cv,linedashed_vert:lv,linedashed_frag:uv,meshbasic_vert:hv,meshbasic_frag:dv,meshlambert_vert:fv,meshlambert_frag:pv,meshmatcap_vert:mv,meshmatcap_frag:gv,meshnormal_vert:vv,meshnormal_frag:xv,meshphong_vert:_v,meshphong_frag:yv,meshphysical_vert:Av,meshphysical_frag:Mv,meshtoon_vert:Sv,meshtoon_frag:bv,points_vert:Tv,points_frag:Ev,shadow_vert:wv,shadow_frag:Cv,sprite_vert:Rv,sprite_frag:Iv},Ue={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},gi={basic:{uniforms:dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:dn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:dn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:dn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:dn([Ue.points,Ue.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:dn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:dn([Ue.common,Ue.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:dn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:dn([Ue.sprite,Ue.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:dn([Ue.common,Ue.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:dn([Ue.lights,Ue.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};gi.physical={uniforms:dn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Oc={r:0,b:0,g:0},Pv=new vt,rf=new st;rf.set(-1,0,0,0,1,0,0,0,1);function Lv(n,e,t,i,s,a){let r=new ot(0),o=s===!0?0:1,c,l,u=null,d=0,h=null;function f(A){let S=A.isScene===!0?A.background:null;if(S&&S.isTexture){let v=A.backgroundBlurriness>0;S=e.get(S,v)}return S}function g(A){let S=!1,v=f(A);v===null?p(r,o):v&&v.isColor&&(p(v,1),S=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(A,S){let v=f(S);v&&(v.isCubeTexture||v.mapping===mr)?(l===void 0&&(l=new bt(new Ri(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:bs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(rf),l.material.toneMapped=pt.getTransfer(v.colorSpace)!==Mt,(u!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new bt(new Ii(2,2),new Pn({name:"BackgroundMaterial",uniforms:bs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=pt.getTransfer(v.colorSpace)!==Mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,S){A.getRGB(Oc,_u(n)),t.buffers.color.setClear(Oc.r,Oc.g,Oc.b,S,a)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(A,S=1){r.set(A),o=S,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,p(r,o)},render:g,addToRenderList:y,dispose:m}}function Nv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(z,G,se,k,$){let le=!1,ce=d(z,k,se,G);a!==ce&&(a=ce,l(a.object)),le=f(z,k,se,$),le&&g(z,k,se,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(le||r)&&(r=!1,v(z,G,se,k),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(z){return n.bindVertexArray(z)}function u(z){return n.deleteVertexArray(z)}function d(z,G,se,k){let $=k.wireframe===!0,le=i[G.id];le===void 0&&(le={},i[G.id]=le);let ce=z.isInstancedMesh===!0?z.id:0,ae=le[ce];ae===void 0&&(ae={},le[ce]=ae);let q=ae[se.id];q===void 0&&(q={},ae[se.id]=q);let J=q[$];return J===void 0&&(J=h(c()),q[$]=J),J}function h(z){let G=[],se=[],k=[];for(let $=0;$<t;$++)G[$]=0,se[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:se,attributeDivisors:k,object:z,attributes:{},index:null}}function f(z,G,se,k){let $=a.attributes,le=G.attributes,ce=0,ae=se.getAttributes();for(let q in ae)if(ae[q].location>=0){let U=$[q],Q=le[q];if(Q===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor)),U===void 0||U.attribute!==Q||Q&&U.data!==Q.data)return!0;ce++}return a.attributesNum!==ce||a.index!==k}function g(z,G,se,k){let $={},le=G.attributes,ce=0,ae=se.getAttributes();for(let q in ae)if(ae[q].location>=0){let U=le[q];U===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(U=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(U=z.instanceColor));let Q={};Q.attribute=U,U&&U.data&&(Q.data=U.data),$[q]=Q,ce++}a.attributes=$,a.attributesNum=ce,a.index=k}function y(){let z=a.newAttributes;for(let G=0,se=z.length;G<se;G++)z[G]=0}function p(z){m(z,0)}function m(z,G){let se=a.newAttributes,k=a.enabledAttributes,$=a.attributeDivisors;se[z]=1,k[z]===0&&(n.enableVertexAttribArray(z),k[z]=1),$[z]!==G&&(n.vertexAttribDivisor(z,G),$[z]=G)}function A(){let z=a.newAttributes,G=a.enabledAttributes;for(let se=0,k=G.length;se<k;se++)G[se]!==z[se]&&(n.disableVertexAttribArray(se),G[se]=0)}function S(z,G,se,k,$,le,ce){ce===!0?n.vertexAttribIPointer(z,G,se,$,le):n.vertexAttribPointer(z,G,se,k,$,le)}function v(z,G,se,k){y();let $=k.attributes,le=se.getAttributes(),ce=G.defaultAttributeValues;for(let ae in le){let q=le[ae];if(q.location>=0){let J=$[ae];if(J===void 0&&(ae==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),ae==="instanceColor"&&z.instanceColor&&(J=z.instanceColor)),J!==void 0){let U=J.normalized,Q=J.itemSize,F=e.get(J);if(F===void 0)continue;let W=F.buffer,X=F.type,D=F.bytesPerElement,E=X===n.INT||X===n.UNSIGNED_INT||J.gpuType===jo;if(J.isInterleavedBufferAttribute){let b=J.data,C=b.stride,P=J.offset;if(b.isInstancedInterleavedBuffer){for(let N=0;N<q.locationSize;N++)m(q.location+N,b.meshPerAttribute);z.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let N=0;N<q.locationSize;N++)p(q.location+N);n.bindBuffer(n.ARRAY_BUFFER,W);for(let N=0;N<q.locationSize;N++)S(q.location+N,Q/q.locationSize,X,U,C*D,(P+Q/q.locationSize*N)*D,E)}else{if(J.isInstancedBufferAttribute){for(let b=0;b<q.locationSize;b++)m(q.location+b,J.meshPerAttribute);z.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let b=0;b<q.locationSize;b++)p(q.location+b);n.bindBuffer(n.ARRAY_BUFFER,W);for(let b=0;b<q.locationSize;b++)S(q.location+b,Q/q.locationSize,X,U,Q*D,Q/q.locationSize*b*D,E)}}else if(ce!==void 0){let U=ce[ae];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(q.location,U);break;case 3:n.vertexAttrib3fv(q.location,U);break;case 4:n.vertexAttrib4fv(q.location,U);break;default:n.vertexAttrib1fv(q.location,U)}}}}A()}function M(){R();for(let z in i){let G=i[z];for(let se in G){let k=G[se];for(let $ in k){let le=k[$];for(let ce in le)u(le[ce].object),delete le[ce];delete k[$]}}delete i[z]}}function w(z){if(i[z.id]===void 0)return;let G=i[z.id];for(let se in G){let k=G[se];for(let $ in k){let le=k[$];for(let ce in le)u(le[ce].object),delete le[ce];delete k[$]}}delete i[z.id]}function L(z){for(let G in i){let se=i[G];for(let k in se){let $=se[k];if($[z.id]===void 0)continue;let le=$[z.id];for(let ce in le)u(le[ce].object),delete le[ce];delete $[z.id]}}}function _(z){for(let G in i){let se=i[G],k=z.isInstancedMesh===!0?z.id:0,$=se[k];if($!==void 0){for(let le in $){let ce=$[le];for(let ae in ce)u(ce[ae].object),delete ce[ae];delete $[le]}delete se[k],Object.keys(se).length===0&&delete i[G]}}}function R(){O(),r=!0,a!==s&&(a=s,l(a.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:O,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:p,disableUnusedAttributes:A}}function Dv(n,e,t){let i;function s(c){i=c}function a(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function r(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Uv(n,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(L){return!(L!==Wn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let _=L===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==bn&&L!==Hn&&!_&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Qe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:A,maxVaryings:S,maxFragmentUniforms:v,maxSamples:M,samples:w}}function Ov(n){let e=this,t=null,i=0,s=!1,a=!1,r=new Qn,o=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||a&&!p)a?u(null):l();else{let A=a?0:i,S=A*4,v=m.clippingState||null;c.value=v,v=u(g,h,S,f);for(let M=0;M!==S;++M)v[M]=t[M];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let m=f+y*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,v=f;S!==y;++S,v+=4)r.copy(d[S]).applyMatrix4(A,o),r.normal.toArray(p,v),p[v+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var ma=4,Fv=6,Bv=20,zv=256,br=new ca,Fd=new ot,Su=null,bu=0,Tu=0,Eu=!1,Vv=new Z,Ts=new Z,va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){let{size:r=256,position:o=Vv}=a;Su=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Su,bu,Tu),this._renderer.xr.enabled=Eu,e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ii,format:Wn,colorSpace:za,depthBuffer:!1},s=Bd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bd(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kv(a)),this._blurMaterial=Hv(a,e,t),this._ggxMaterial=Gv(a,e,t)}return s}_compileMaterial(e){let t=new bt(new Sn,e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,i,s,a){let c=new tn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Fd),d.toneMapping=ti,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new Ri,new Xa({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,A=e.background;A?A.isColor&&(p.color.copy(A),e.background=null,m=!0):(p.color.copy(Fd),m=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(c.up.set(0,l[S],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+u[S],a.y,a.z)):v===1?(c.up.set(0,0,l[S]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+u[S],a.z)):(c.up.set(0,l[S],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+u[S]));let M=this._cubeSize;pa(s,v*M,S>2?M:0,M,M),d.setRenderTarget(s),m&&d.render(y,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=A}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ji||e.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=e;let c=this._cubeSize;pa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(r,br)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let c=r.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:g}=this,y=this._sizeLods[i],p=3*y*(i>g-ma?i-g+ma:0),m=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,pa(a,p,m,3*y,2*y),s.setRenderTarget(a),s.render(o,br),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=g-i,pa(e,p,m,3*y,2*y),s.setRenderTarget(e),s.render(o,br)}_blur(e,t,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,r),this._blurPass(a,e,i,i,r)}_blurPass(e,t,i,s,a){let r=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-ma?s-this._lodMax+ma:0),h=4*(this._cubeSize-u);pa(t,d,h,3*u,2*u),r.setRenderTarget(t),r.render(c,br)}};function kv(n){let e=[],t=[],i=n,s=n-ma+1+Fv;for(let a=0;a<s;a++){let r=Math.pow(2,i);e.push(r);let o=1/(r-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),y=new Float32Array(f*h*d);for(let m=0;m<d;m++){let A=m%3*2/3-1,S=m>2?0:-1,v=[A,S,0,A+2/3,S,0,A+2/3,S+1,0,A,S,0,A+2/3,S+1,0,A,S+1,0];g.set(v,f*h*m);for(let M=0;M<h;M++){let w=u[M*2]*2-1,L=u[M*2+1]*2-1;m===0?Ts.set(1,L,w):m===1?Ts.set(-w,1,-L):m===2?Ts.set(-w,L,1):m===3?Ts.set(-1,L,-w):m===4?Ts.set(-w,-1,L):Ts.set(w,L,-1),Ts.toArray(y,(m*h+M)*f)}}let p=new Sn;p.setAttribute("position",new gn(g,f)),p.setAttribute("outputDirection",new gn(y,f)),t.push(new bt(p,null)),i>ma&&i--}return{lodMeshes:t,sizeLods:e}}function Bd(n,e,t){let i=new Mn(n,e,t);return i.texture.mapping=mr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Gv(n,e,t){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Hv(n,e,t){return new Pn({name:"SphericalGaussianBlur",defines:{SAMPLES:Bv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function zd(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Vd(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bc=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Za(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ri(5,5,5),a=new Pn({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:pi});a.uniforms.tEquirect.value=t;let r=new bt(s,a),o=t.minFilter;return t.minFilter===Ki&&(t.minFilter=nn),new qo(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(a)}};function Wv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?r(h):a(h)}function a(h){if(h&&h.isTexture){let f=h.mapping;if(f===Yo||f===Zo)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new Bc(g.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",l),o(y.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){let f=h.mapping,g=f===Yo||f===Zo,y=f===ji||f===Ms;if(g||y){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new va(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let A=h.image;return g&&A&&A.height>0||y&&A&&c(A)?(i===null&&(i=new va(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Yo?h.mapping=ji:f===Zo&&(h.mapping=Ms),h}function c(h){let f=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&f++;return f===g}function l(h){let f=h.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function qv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ms("WebGLRenderer: "+i+" extension not supported."),s}}}function $v(n,e,t,i){let s={},a=new WeakMap;function r(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete s[h.id];let f=a.get(h);f&&(e.remove(f),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let A=f.array;y=f.version;for(let S=0,v=A.length;S<v;S+=3){let M=A[S+0],w=A[S+1],L=A[S+2];h.push(M,w,w,L,L,M)}}else{let A=g.array;y=g.version;for(let S=0,v=A.length/3-1;S<v;S+=3){let M=S+0,w=S+1,L=S+2;h.push(M,w,w,L,L,M)}}let p=new(g.count>=65535?qa:Wa)(h,1);p.version=y;let m=a.get(d);m&&e.remove(m),a.set(d,p)}function u(d){let h=a.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Xv(n,e,t){let i;function s(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function c(d,h){n.drawElements(i,h,a,d*r),t.update(h,i,1)}function l(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,a,d*r,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,a,d,0,f);let y=0;for(let p=0;p<f;p++)y+=h[p];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Yv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:et("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Zv(n,e,t){let i=new WeakMap,s=new Pt;function a(r,o,c){let l=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let R=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),y===!0&&(S=3);let v=o.attributes.position.count*S,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*M*4*d),L=new Ga(w,v,M,d);L.type=Hn,L.needsUpdate=!0;let _=S*4;for(let O=0;O<d;O++){let z=p[O],G=m[O],se=A[O],k=v*M*4*O;for(let $=0;$<z.count;$++){let le=$*_;f===!0&&(s.fromBufferAttribute(z,$),w[k+le+0]=s.x,w[k+le+1]=s.y,w[k+le+2]=s.z,w[k+le+3]=0),g===!0&&(s.fromBufferAttribute(G,$),w[k+le+4]=s.x,w[k+le+5]=s.y,w[k+le+6]=s.z,w[k+le+7]=0),y===!0&&(s.fromBufferAttribute(se,$),w[k+le+8]=s.x,w[k+le+9]=s.y,w[k+le+10]=s.z,w[k+le+11]=se.itemSize===4?s.w:1)}}h={count:d,texture:L,size:new Ce(v,M)},i.set(o,h),o.addEventListener("dispose",R)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:a}}function Jv(n,e,t,i,s){let a=new WeakMap;function r(l){let u=s.render.frame,d=l.geometry,h=e.get(l,d);if(a.get(h)!==u&&(e.update(h),a.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),a.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;a.get(f)!==u&&(f.update(),a.set(f,u))}return h}function o(){a=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}var jv={[nu]:"LINEAR_TONE_MAPPING",[iu]:"REINHARD_TONE_MAPPING",[su]:"CINEON_TONE_MAPPING",[au]:"ACES_FILMIC_TONE_MAPPING",[ou]:"AGX_TONE_MAPPING",[pr]:"NEUTRAL_TONE_MAPPING",[ru]:"CUSTOM_TONE_MAPPING"};function Kv(n,e,t,i,s,a){let r=new Mn(e,t,{type:n,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Sn;l.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ut([0,2,0,0,2,0],2));let u=new Lo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new bt(l,u),h=new ca(-1,1,1,-1,0,1),f=null,g=null,y=!1,p,m=null,A=[],S=!1;this.setSize=function(v,M){r.setSize(v,M),o!==null&&o.setSize(v,M),c!==null&&c.setSize(v,M);for(let w=0;w<A.length;w++){let L=A[w];L.setSize&&L.setSize(v,M)}},this.setEffects=function(v){A=v,S=A.length>0&&A[0].isRenderPass===!0;let M=r.width,w=r.height;A.length>0&&o===null&&(o=new Mn(M,w,{type:ii,depthBuffer:!1,stencilBuffer:!1}),c=new Mn(M,w,{type:ii,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<A.length;L++){let _=A[L];_.setSize&&_.setSize(M,w)}},this.begin=function(v,M){if(y||v.toneMapping===ti&&A.length===0)return!1;if(m=M,M!==null){let w=M.width,L=M.height;(r.width!==w||r.height!==L)&&this.setSize(w,L)}return S===!1&&v.setRenderTarget(r),p=v.toneMapping,v.toneMapping=ti,!0},this.hasRenderPass=function(){return S},this.end=function(v,M){v.toneMapping=p,y=!0;let w=r,L=o;for(let _=0;_<A.length;_++){let R=A[_];R.enabled!==!1&&(R.render(v,L,w,M),R.needsSwap!==!1&&(w=L,L=L===o?c:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,u.defines={},pt.getTransfer(f)===Mt&&(u.defines.SRGB_TRANSFER="");let _=jv[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(d,h),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var of=new vn,Ru=new $i(1,1),cf=new Ga,lf=new bo,uf=new Za,kd=[],Gd=[],Hd=new Float32Array(16),Wd=new Float32Array(9),qd=new Float32Array(4);function xa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,a=kd[s];if(a===void 0&&(a=new Float32Array(s),kd[s]=a),e!==0){i.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(a,o)}return a}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function kc(n,e){let t=Gd[e];t===void 0&&(t=new Int32Array(e),Gd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Qv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function e1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function t1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function n1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function i1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;qd.set(i),n.uniformMatrix2fv(this.addr,!1,qd),$t(t,i)}}function s1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;Wd.set(i),n.uniformMatrix3fv(this.addr,!1,Wd),$t(t,i)}}function a1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;Hd.set(i),n.uniformMatrix4fv(this.addr,!1,Hd),$t(t,i)}}function r1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function o1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function c1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function l1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function u1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function h1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function d1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function f1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function p1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(Ru.compareFunction=t.isReversedDepthBuffer()?Uc:Dc,a=Ru):a=of,t.setTexture2D(e||a,s)}function m1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||lf,s)}function g1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||uf,s)}function v1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||cf,s)}function x1(n){switch(n){case 5126:return Qv;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return s1;case 35676:return a1;case 5124:case 35670:return r1;case 35667:case 35671:return o1;case 35668:case 35672:return c1;case 35669:case 35673:return l1;case 5125:return u1;case 36294:return h1;case 36295:return d1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return v1}}function _1(n,e){n.uniform1fv(this.addr,e)}function y1(n,e){let t=xa(e,this.size,2);n.uniform2fv(this.addr,t)}function A1(n,e){let t=xa(e,this.size,3);n.uniform3fv(this.addr,t)}function M1(n,e){let t=xa(e,this.size,4);n.uniform4fv(this.addr,t)}function S1(n,e){let t=xa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function b1(n,e){let t=xa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function T1(n,e){let t=xa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function E1(n,e){n.uniform1iv(this.addr,e)}function w1(n,e){n.uniform2iv(this.addr,e)}function C1(n,e){n.uniform3iv(this.addr,e)}function R1(n,e){n.uniform4iv(this.addr,e)}function I1(n,e){n.uniform1uiv(this.addr,e)}function P1(n,e){n.uniform2uiv(this.addr,e)}function L1(n,e){n.uniform3uiv(this.addr,e)}function N1(n,e){n.uniform4uiv(this.addr,e)}function D1(n,e,t){let i=this.cache,s=e.length,a=kc(t,s);qt(i,a)||(n.uniform1iv(this.addr,a),$t(i,a));let r;this.type===n.SAMPLER_2D_SHADOW?r=Ru:r=of;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function U1(n,e,t){let i=this.cache,s=e.length,a=kc(t,s);qt(i,a)||(n.uniform1iv(this.addr,a),$t(i,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||lf,a[r])}function O1(n,e,t){let i=this.cache,s=e.length,a=kc(t,s);qt(i,a)||(n.uniform1iv(this.addr,a),$t(i,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||uf,a[r])}function F1(n,e,t){let i=this.cache,s=e.length,a=kc(t,s);qt(i,a)||(n.uniform1iv(this.addr,a),$t(i,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||cf,a[r])}function B1(n){switch(n){case 5126:return _1;case 35664:return y1;case 35665:return A1;case 35666:return M1;case 35674:return S1;case 35675:return b1;case 35676:return T1;case 5124:case 35670:return E1;case 35667:case 35671:return w1;case 35668:case 35672:return C1;case 35669:case 35673:return R1;case 5125:return I1;case 36294:return P1;case 36295:return L1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return F1}}var Iu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=x1(t.type)}},Pu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B1(t.type)}},Lu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(e,t[o.id],i)}}},wu=/(\w+)(\])?(\[|\.)?/g;function $d(n,e){n.seq.push(e),n.map[e.id]=e}function z1(n,e,t){let i=n.name,s=i.length;for(wu.lastIndex=0;;){let a=wu.exec(i),r=wu.lastIndex,o=a[1],c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){$d(t,l===void 0?new Iu(o,n,e):new Pu(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Lu(o),$d(t,d)),t=d}}}var ga=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);z1(o,c,this)}let s=[],a=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){let a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,r=t.length;a!==r;++a){let o=t[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,a=e.length;s!==a;++s){let r=e[s];r.id in t&&i.push(r)}return i}};function Xd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var V1=37297,k1=0;function G1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}var Yd=new st;function H1(n){pt._getMatrix(Yd,pt.workingColorSpace,n);let e=`mat3( ${Yd.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case Va:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Zd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+G1(n.getShaderSource(e),o)}else return a}function W1(n,e){let t=H1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var q1={[nu]:"Linear",[iu]:"Reinhard",[su]:"Cineon",[au]:"ACESFilmic",[ou]:"AgX",[pr]:"Neutral",[ru]:"Custom"};function $1(n,e){let t=q1[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fc=new Z;function X1(){pt.getLuminanceCoefficients(Fc);let n=Fc.x.toFixed(4),e=Fc.y.toFixed(4),t=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function Z1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function J1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=n.getActiveAttrib(e,s),r=a.name,o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function Er(n){return n!==""}function Jd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var j1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(n){return n.replace(j1,Q1)}var K1=new Map;function Q1(n,e){let t=ut[e];if(t===void 0){let i=K1.get(e);if(i!==void 0)t=ut[i],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Nu(t)}var ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(n){return n.replace(ex,tx)}function tx(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Qd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var nx={[ys]:"SHADOWMAP_TYPE_PCF",[ua]:"SHADOWMAP_TYPE_VSM"};function ix(n){return nx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sx={[ji]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[mr]:"ENVMAP_TYPE_CUBE_UV"};function ax(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":sx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var rx={[Ms]:"ENVMAP_MODE_REFRACTION"};function ox(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":rx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cx={[Xo]:"ENVMAP_BLENDING_MULTIPLY",[dd]:"ENVMAP_BLENDING_MIX",[fd]:"ENVMAP_BLENDING_ADD"};function lx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cx[n.combine]||"ENVMAP_BLENDING_NONE"}function ux(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function hx(n,e,t,i){let s=n.getContext(),a=t.defines,r=t.vertexShader,o=t.fragmentShader,c=ix(t),l=ax(t),u=ox(t),d=lx(t),h=ux(t),f=Y1(t),g=Z1(a),y=s.createProgram(),p,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Er).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Er).join(`
`),m.length>0&&(m+=`
`)):(p=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),m=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?ut.tonemapping_pars_fragment:"",t.toneMapping!==ti?$1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,W1("linearToOutputTexel",t.outputColorSpace),X1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),r=Nu(r),r=Jd(r,t),r=jd(r,t),o=Nu(o),o=Jd(o,t),o=jd(o,t),r=Kd(r),o=Kd(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=A+p+r,v=A+m+o,M=Xd(s,s.VERTEX_SHADER,S),w=Xd(s,s.FRAGMENT_SHADER,v);s.attachShader(y,M),s.attachShader(y,w),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(z){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(y)||"",se=s.getShaderInfoLog(M)||"",k=s.getShaderInfoLog(w)||"",$=G.trim(),le=se.trim(),ce=k.trim(),ae=!0,q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,M,w);else{let J=Zd(s,M,"vertex"),U=Zd(s,w,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+$+`
`+J+`
`+U)}else $!==""?Qe("WebGLProgram: Program Info Log:",$):(le===""||ce==="")&&(q=!1);q&&(z.diagnostics={runnable:ae,programLog:$,vertexShader:{log:le,prefix:p},fragmentShader:{log:ce,prefix:m}})}s.deleteShader(M),s.deleteShader(w),_=new ga(s,y),R=J1(s,y)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(y,V1)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=w,this}var dx=0,Du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Uu(e),t.set(e,i)),i}},Uu=class{constructor(e){this.id=dx++,this.code=e,this.usedTimes=0}};function fx(n){return n===es||n===Ar||n===Mr}function px(n,e,t,i,s,a){let r=new na,o=new Du,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,R,O,z,G,se){let k=z.fog,$=G.geometry,le=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?z.environment:null,ce=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ae=e.get(_.envMap||le,ce),q=ae&&ae.mapping===mr?ae.image.height:null,J=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Qe("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let U=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Q=U!==void 0?U.length:0,F=0;$.morphAttributes.position!==void 0&&(F=1),$.morphAttributes.normal!==void 0&&(F=2),$.morphAttributes.color!==void 0&&(F=3);let W,X,D,E;if(J){let yt=gi[J];W=yt.vertexShader,X=yt.fragmentShader}else{W=_.vertexShader,X=_.fragmentShader;let yt=o.getVertexShaderStage(_),mt=o.getFragmentShaderStage(_);o.update(_,yt,mt),D=yt.id,E=mt.id}let b=n.getRenderTarget(),C=n.state.buffers.depth.getReversed(),P=G.isInstancedMesh===!0,N=G.isBatchedMesh===!0,Y=!!_.map,ee=!!_.matcap,V=!!ae,ne=!!_.aoMap,re=!!_.lightMap,H=!!_.bumpMap&&_.wireframe===!1,j=!!_.normalMap,ge=!!_.displacementMap,ye=!!_.emissiveMap,be=!!_.metalnessMap,Te=!!_.roughnessMap,B=_.anisotropy>0,Ve=_.clearcoat>0,De=_.dispersion>0,I=_.retroreflectivity>0,x=_.iridescence>0,ie=_.sheen>0,oe=_.transmission>0,fe=B&&!!_.anisotropyMap,Me=Ve&&!!_.clearcoatMap,Ee=Ve&&!!_.clearcoatNormalMap,ve=Ve&&!!_.clearcoatRoughnessMap,Ae=x&&!!_.iridescenceMap,we=x&&!!_.iridescenceThicknessMap,He=ie&&!!_.sheenColorMap,Le=ie&&!!_.sheenRoughnessMap,Re=!!_.specularMap,Xe=!!_.specularColorMap,Je=!!_.specularIntensityMap,it=oe&&!!_.transmissionMap,te=oe&&!!_.thicknessMap,Ie=!!_.gradientMap,_e=!!_.alphaMap,Pe=_.alphaTest>0,Ne=!!_.alphaHash,Se=!!_.extensions,Ye=ti;_.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ye=n.toneMapping);let We={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:W,fragmentShader:X,defines:_.defines,customVertexShaderID:D,customFragmentShaderID:E,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:N,batchingColor:N&&G._colorsTexture!==null,instancing:P,instancingColor:P&&G.instanceColor!==null,instancingMorph:P&&G.morphTexture!==null,outputColorSpace:b===null?n.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Y,matcap:ee,envMap:V,envMapMode:V&&ae.mapping,envMapCubeUVHeight:q,aoMap:ne,lightMap:re,bumpMap:H,normalMap:j,displacementMap:ge,emissiveMap:ye,normalMapObjectSpace:j&&_.normalMapType===gd,normalMapTangentSpace:j&&_.normalMapType===Sr,packedNormalMap:j&&_.normalMapType===Sr&&fx(_.normalMap.format),metalnessMap:be,roughnessMap:Te,anisotropy:B,anisotropyMap:fe,clearcoat:Ve,clearcoatMap:Me,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ve,dispersion:De,retroreflection:I,iridescence:x,iridescenceMap:Ae,iridescenceThicknessMap:we,sheen:ie,sheenColorMap:He,sheenRoughnessMap:Le,specularMap:Re,specularColorMap:Xe,specularIntensityMap:Je,transmission:oe,transmissionMap:it,thicknessMap:te,gradientMap:Ie,opaque:_.transparent===!1&&_.blending===ha&&_.alphaToCoverage===!1,alphaMap:_e,alphaTest:Pe,alphaHash:Ne,combine:_.combine,mapUv:Y&&g(_.map.channel),aoMapUv:ne&&g(_.aoMap.channel),lightMapUv:re&&g(_.lightMap.channel),bumpMapUv:H&&g(_.bumpMap.channel),normalMapUv:j&&g(_.normalMap.channel),displacementMapUv:ge&&g(_.displacementMap.channel),emissiveMapUv:ye&&g(_.emissiveMap.channel),metalnessMapUv:be&&g(_.metalnessMap.channel),roughnessMapUv:Te&&g(_.roughnessMap.channel),anisotropyMapUv:fe&&g(_.anisotropyMap.channel),clearcoatMapUv:Me&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:we&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(_.sheenRoughnessMap.channel),specularMapUv:Re&&g(_.specularMap.channel),specularColorMapUv:Xe&&g(_.specularColorMap.channel),specularIntensityMapUv:Je&&g(_.specularIntensityMap.channel),transmissionMapUv:it&&g(_.transmissionMap.channel),thicknessMapUv:te&&g(_.thicknessMap.channel),alphaMapUv:_e&&g(_.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(j||B),vertexNormals:!!$.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(Y||_e),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||$.attributes.normal===void 0&&j===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:C,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:F,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Y&&_.map.isVideoTexture===!0&&pt.getTransfer(_.map.colorSpace)===Mt,decodeVideoTextureEmissive:ye&&_.emissiveMap.isVideoTexture===!0&&pt.getTransfer(_.emissiveMap.colorSpace)===Mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fi,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&_.extensions.multiDraw===!0||N)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function p(_){let R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(let O in _.defines)R.push(O),R.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(m(R,_),A(R,_),R.push(n.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function m(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numSunLights),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numSunLightShadows),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function A(_,R){r.disableAll(),R.instancing&&r.enable(0),R.instancingColor&&r.enable(1),R.instancingMorph&&r.enable(2),R.matcap&&r.enable(3),R.envMap&&r.enable(4),R.normalMapObjectSpace&&r.enable(5),R.normalMapTangentSpace&&r.enable(6),R.clearcoat&&r.enable(7),R.iridescence&&r.enable(8),R.alphaTest&&r.enable(9),R.vertexColors&&r.enable(10),R.vertexAlphas&&r.enable(11),R.vertexUv1s&&r.enable(12),R.vertexUv2s&&r.enable(13),R.vertexUv3s&&r.enable(14),R.vertexTangents&&r.enable(15),R.anisotropy&&r.enable(16),R.alphaHash&&r.enable(17),R.batching&&r.enable(18),R.dispersion&&r.enable(19),R.retroreflection&&r.enable(24),R.batchingColor&&r.enable(20),R.gradientMap&&r.enable(21),R.packedNormalMap&&r.enable(22),R.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),R.fog&&r.enable(0),R.useFog&&r.enable(1),R.flatShading&&r.enable(2),R.logarithmicDepthBuffer&&r.enable(3),R.reversedDepthBuffer&&r.enable(4),R.skinning&&r.enable(5),R.morphTargets&&r.enable(6),R.morphNormals&&r.enable(7),R.morphColors&&r.enable(8),R.premultipliedAlpha&&r.enable(9),R.shadowMapEnabled&&r.enable(10),R.doubleSided&&r.enable(11),R.flipSided&&r.enable(12),R.useDepthPacking&&r.enable(13),R.dithering&&r.enable(14),R.transmission&&r.enable(15),R.sheen&&r.enable(16),R.opaque&&r.enable(17),R.pointsUvs&&r.enable(18),R.decodeVideoTexture&&r.enable(19),R.decodeVideoTextureEmissive&&r.enable(20),R.alphaToCoverage&&r.enable(21),R.numLightProbeGrids>0&&r.enable(22),R.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function S(_){let R=f[_.type],O;if(R){let z=gi[R];O=Dd.clone(z.uniforms)}else O=_.uniforms;return O}function v(_,R){let O=u.get(R);return O!==void 0?++O.usedTimes:(O=new hx(n,R,_,s),l.push(O),u.set(R,O)),O}function M(_){if(--_.usedTimes===0){let R=l.indexOf(_);l[R]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function L(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:S,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:l,dispose:L}}function mx(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,c){n.get(r)[o]=c}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function gx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ef(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tf(){let n=[],e=0,t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function r(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,y,p,m){let A=n[e];return A===void 0?(A={id:h.id,object:h,geometry:f,material:g,materialVariant:r(h),groupOrder:y,renderOrder:h.renderOrder,z:p,group:m},n[e]=A):(A.id=h.id,A.object=h,A.geometry=f,A.material=g,A.materialVariant=r(h),A.groupOrder=y,A.renderOrder=h.renderOrder,A.z=p,A.group=m),e++,A}function c(h,f,g,y,p,m,A){A.reversedDepth===!0&&(p=-p);let S=o(h,f,g,y,p,m);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):t.push(S)}function l(h,f,g,y,p,m){let A=o(h,f,g,y,p,m);g.transmission>0?i.unshift(A):g.transparent===!0?s.unshift(A):t.unshift(A)}function u(h,f){t.length>1&&t.sort(h||gx),i.length>1&&i.sort(f||ef),s.length>1&&s.sort(f||ef)}function d(){for(let h=e,f=n.length;h<f;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:c,unshift:l,finish:d,sort:u}}function vx(){let n=new WeakMap;function e(i,s){let a=n.get(i),r;return a===void 0?(r=new tf,n.set(i,[r])):s>=a.length?(r=new tf,a.push(r)):r=a[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function xx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new ot};break;case"SpotLight":t={position:new Z,direction:new Z,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function _x(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var yx=0;function Ax(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Mx(n){let e=new xx,t=_x(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Z);let s=new Z,a=new vt,r=new vt;function o(l){let u=0,d=0,h=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,A=0,S=0,v=0,M=0,w=0,L=0,_=0,R=0,O=0;l.sort(Ax);for(let G=0,se=l.length;G<se;G++){let k=l[G],$=k.color,le=k.intensity,ce=k.distance,ae=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===es?ae=k.shadow.map.texture:ae=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)u+=$.r*le,d+=$.g*le,h+=$.b*le;else if(k.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(k.sh.coefficients[q],le);O++}else if(k.isSunLight){let q=e.get(k);if(q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let J=k.shadow,U=t.get(k);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[g]=U,i.sunShadowMap[g]=ae;let Q=J.getViewportCount();for(let F=0;F<Q;F++)i.sunShadowMatrix[y+F]=J.getMatrix(F),i.sunShadowCascade[y+F]=J._cascadeData[F];y+=Q,g++}i.sun[f]=q,f++}else if(k.isDirectionalLight){let q=e.get(k);if(q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let J=k.shadow,U=t.get(k);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=k.shadow.matrix,M++}i.directional[p]=q,p++}else if(k.isSpotLight){let q=e.get(k);q.position.setFromMatrixPosition(k.matrixWorld),q.color.copy($).multiplyScalar(le),q.distance=ce,q.coneCos=Math.cos(k.angle),q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),q.decay=k.decay,i.spot[A]=q;let J=k.shadow;if(k.map&&(i.spotLightMap[_]=k.map,_++,J.updateMatrices(k),k.castShadow&&R++),i.spotLightMatrix[A]=J.matrix,k.castShadow){let U=t.get(k);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,i.spotShadow[A]=U,i.spotShadowMap[A]=ae,L++}A++}else if(k.isRectAreaLight){let q=e.get(k);q.color.copy($).multiplyScalar(le),q.halfWidth.set(k.width*.5,0,0),q.halfHeight.set(0,k.height*.5,0),i.rectArea[S]=q,S++}else if(k.isPointLight){let q=e.get(k);if(q.color.copy(k.color).multiplyScalar(k.intensity),q.distance=k.distance,q.decay=k.decay,k.castShadow){let J=k.shadow,U=t.get(k);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,U.shadowCameraNear=J.camera.near,U.shadowCameraFar=J.camera.far,i.pointShadow[m]=U,i.pointShadowMap[m]=ae,i.pointShadowMatrix[m]=k.shadow.matrix,w++}i.point[m]=q,m++}else if(k.isHemisphereLight){let q=e.get(k);q.skyColor.copy(k.color).multiplyScalar(le),q.groundColor.copy(k.groundColor).multiplyScalar(le),i.hemi[v]=q,v++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let z=i.hash;(z.sunLength!==f||z.directionalLength!==p||z.pointLength!==m||z.spotLength!==A||z.rectAreaLength!==S||z.hemiLength!==v||z.numSunShadows!==g||z.numDirectionalShadows!==M||z.numPointShadows!==w||z.numSpotShadows!==L||z.numSpotMaps!==_||z.numLightProbes!==O)&&(i.sun.length=f,i.directional.length=p,i.spot.length=A,i.rectArea.length=S,i.point.length=m,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=L,i.spotShadowMap.length=L,i.spotLightMatrix.length=L+_-R,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=O,z.sunLength=f,z.directionalLength=p,z.pointLength=m,z.spotLength=A,z.rectAreaLength=S,z.hemiLength=v,z.numSunShadows=g,z.numDirectionalShadows=M,z.numPointShadows=w,z.numSpotShadows=L,z.numSpotMaps=_,z.numLightProbes=O,i.version=yx++)}function c(l,u){let d=0,h=0,f=0,g=0,y=0,p=0,m=u.matrixWorldInverse;for(let A=0,S=l.length;A<S;A++){let v=l[A];if(v.isSunLight){let M=i.sun[d];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let M=i.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(v.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let M=i.rectArea[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),y++}else if(v.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let M=i.hemi[p];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:i}}function nf(n){let e=new Mx(n),t=[],i=[],s=[];function a(h){d.camera=h,t.length=0,i.length=0,s.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function Sx(n){let e=new WeakMap;function t(s,a=0){let r=e.get(s),o;return r===void 0?(o=new nf(n),e.set(s,[o])):a>=r.length?(o=new nf(n),r.push(o)):o=r[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tx=`uniform sampler2D shadow_pass;
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
}`,Ex=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],wx=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],sf=new vt,Tr=new Z,Cu=new Z;function Cx(n,e,t){let i=new aa,s=new Ce,a=new Ce,r=new Pt,o=new No,c=new Do,l={},u=t.maxTextureSize,d={[Ji]:rn,[rn]:Ji,[fi]:fi},h=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:bx,fragmentShader:Tx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Sn;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new bt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let m=this.type;this.render=function(w,L,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Xh&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ys);let R=n.getRenderTarget(),O=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),G=n.state;G.setBlending(pi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let se=m!==this.type;se&&L.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach($=>$.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,$=w.length;k<$;k++){let le=w[k],ce=le.shadow;if(ce===void 0){Qe("WebGLShadowMap:",le,"has no shadow.");continue}if(ce.autoUpdate===!1&&ce.needsUpdate===!1)continue;s.copy(ce.mapSize);let ae=ce.getFrameExtents();s.multiply(ae),a.copy(ce.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/ae.x),s.x=a.x*ae.x,ce.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/ae.y),s.y=a.y*ae.y,ce.mapSize.y=a.y));let q=n.state.buffers.depth.getReversed();if(ce.camera._reversedDepth=q,ce.map===null||se===!0){if(ce.map!==null&&(ce.map.depthTexture!==null&&(ce.map.depthTexture.dispose(),ce.map.depthTexture=null),ce.map.dispose()),this.type===ua){if(le.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ce.map=new Mn(s.x,s.y,{format:es,type:ii,minFilter:nn,magFilter:nn,generateMipmaps:!1}),ce.map.texture.name=le.name+".shadowMap",ce.map.depthTexture=new $i(s.x,s.y,Hn),ce.map.depthTexture.name=le.name+".shadowMapDepth",ce.map.depthTexture.format=ui,ce.map.depthTexture.compareFunction=null,ce.map.depthTexture.minFilter=Zt,ce.map.depthTexture.magFilter=Zt}else le.isPointLight?(ce.map=new Bc(s.x),ce.map.depthTexture=new To(s.x,ni)):(ce.map=new Mn(s.x,s.y),ce.map.depthTexture=new $i(s.x,s.y,ni)),ce.map.depthTexture.name=le.name+".shadowMap",ce.map.depthTexture.format=ui,this.type===ys?(ce.map.depthTexture.compareFunction=q?Uc:Dc,ce.map.depthTexture.minFilter=nn,ce.map.depthTexture.magFilter=nn):(ce.map.depthTexture.compareFunction=null,ce.map.depthTexture.minFilter=Zt,ce.map.depthTexture.magFilter=Zt);ce.camera.updateProjectionMatrix()}ce.map.isWebGLCubeRenderTarget!==!0&&(ce.map.width!==s.x||ce.map.height!==s.y)&&ce.map.setSize(s.x,s.y);let J=ce.map.isWebGLCubeRenderTarget?6:ce.getViewportCount();le.isPointLight!==!0&&ce.updateMatrices(le,_);for(let U=0;U<J;U++){let Q=ce.getCamera(U);if(le.isPointLight){let F=ce.camera,W=ce.matrix,X=le.distance||F.far;X!==F.far&&(F.far=X,F.updateProjectionMatrix()),Tr.setFromMatrixPosition(le.matrixWorld),F.position.copy(Tr),Cu.copy(F.position),Cu.add(Ex[U]),F.up.copy(wx[U]),F.lookAt(Cu),F.updateMatrixWorld(),W.makeTranslation(-Tr.x,-Tr.y,-Tr.z),sf.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ce._frustum.setFromProjectionMatrix(sf,F.coordinateSystem,F.reversedDepth)}if(ce.map.isWebGLCubeRenderTarget)n.setRenderTarget(ce.map,U),n.clear();else{U===0&&(n.setRenderTarget(ce.map),n.clear());let F=ce.getViewport(U);r.set(a.x*F.x,a.y*F.y,a.x*F.z,a.y*F.w),G.viewport(r)}i=ce.getFrustum(U),v(L,_,Q,le,this.type)}ce.isPointLightShadow!==!0&&this.type===ua&&A(ce,_),ce.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(R,O,z)};function A(w,L){let _=e.update(y);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Mn(s.x,s.y,{format:es,type:ii}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(L,null,_,h,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(L,null,_,f,y,null)}function S(w,L,_,R){let O=null,z=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)O=z;else if(O=_.isPointLight===!0?c:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let G=O.uuid,se=L.uuid,k=l[G];k===void 0&&(k={},l[G]=k);let $=k[se];$===void 0&&($=O.clone(),k[se]=$,L.addEventListener("dispose",M)),O=$}if(O.visible=L.visible,O.wireframe=L.wireframe,R===ua?O.side=L.shadowSide!==null?L.shadowSide:L.side:O.side=L.shadowSide!==null?L.shadowSide:d[L.side],O.alphaMap=L.alphaMap,O.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,O.map=L.map,O.clipShadows=L.clipShadows,O.clippingPlanes=L.clippingPlanes,O.clipIntersection=L.clipIntersection,O.displacementMap=L.displacementMap,O.displacementScale=L.displacementScale,O.displacementBias=L.displacementBias,O.wireframeLinewidth=L.wireframeLinewidth,O.linewidth=L.linewidth,_.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let G=n.properties.get(O);G.light=_}return O}function v(w,L,_,R,O){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===ua)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let se=e.update(w),k=w.material;if(Array.isArray(k)){let $=se.groups;for(let le=0,ce=$.length;le<ce;le++){let ae=$[le],q=k[ae.materialIndex];if(q&&q.visible){let J=S(w,q,R,O);w.onBeforeShadow(n,w,L,_,se,J,ae),n.renderBufferDirect(_,null,se,J,w,ae),w.onAfterShadow(n,w,L,_,se,J,ae)}}}else if(k.visible){let $=S(w,k,R,O);w.onBeforeShadow(n,w,L,_,se,$,null),n.renderBufferDirect(_,null,se,$,w,null),w.onAfterShadow(n,w,L,_,se,$,null)}}let G=w.children;for(let se=0,k=G.length;se<k;se++)v(G[se],L,_,R,O)}function M(w){w.target.removeEventListener("dispose",M);for(let _ in l){let R=l[_],O=w.target.uuid;O in R&&(R[O].dispose(),delete R[O])}}}function Rx(n,e){function t(){let te=!1,Ie=new Pt,_e=null,Pe=new Pt(0,0,0,0);return{setMask:function(Ne){_e!==Ne&&!te&&(n.colorMask(Ne,Ne,Ne,Ne),_e=Ne)},setLocked:function(Ne){te=Ne},setClear:function(Ne,Se,Ye,We,yt){yt===!0&&(Ne*=We,Se*=We,Ye*=We),Ie.set(Ne,Se,Ye,We),Pe.equals(Ie)===!1&&(n.clearColor(Ne,Se,Ye,We),Pe.copy(Ie))},reset:function(){te=!1,_e=null,Pe.set(-1,0,0,0)}}}function i(){let te=!1,Ie=!1,_e=null,Pe=null,Ne=null;return{setReversed:function(Se){if(Ie!==Se){let Ye=e.get("EXT_clip_control");Se?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ie=Se;let We=Ne;Ne=null,this.setClear(We)}},getReversed:function(){return Ie},setTest:function(Se){Se?b(n.DEPTH_TEST):C(n.DEPTH_TEST)},setMask:function(Se){_e!==Se&&!te&&(n.depthMask(Se),_e=Se)},setFunc:function(Se){if(Ie&&(Se=Cd[Se]),Pe!==Se){switch(Se){case fo:n.depthFunc(n.NEVER);break;case po:n.depthFunc(n.ALWAYS);break;case mo:n.depthFunc(n.LESS);break;case Js:n.depthFunc(n.LEQUAL);break;case go:n.depthFunc(n.EQUAL);break;case vo:n.depthFunc(n.GEQUAL);break;case xo:n.depthFunc(n.GREATER);break;case _o:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=Se}},setLocked:function(Se){te=Se},setClear:function(Se){Ne!==Se&&(Ne=Se,Ie&&(Se=1-Se),n.clearDepth(Se))},reset:function(){te=!1,_e=null,Pe=null,Ne=null,Ie=!1}}}function s(){let te=!1,Ie=null,_e=null,Pe=null,Ne=null,Se=null,Ye=null,We=null,yt=null;return{setTest:function(mt){te||(mt?b(n.STENCIL_TEST):C(n.STENCIL_TEST))},setMask:function(mt){Ie!==mt&&!te&&(n.stencilMask(mt),Ie=mt)},setFunc:function(mt,En,Fn){(_e!==mt||Pe!==En||Ne!==Fn)&&(n.stencilFunc(mt,En,Fn),_e=mt,Pe=En,Ne=Fn)},setOp:function(mt,En,Fn){(Se!==mt||Ye!==En||We!==Fn)&&(n.stencilOp(mt,En,Fn),Se=mt,Ye=En,We=Fn)},setLocked:function(mt){te=mt},setClear:function(mt){yt!==mt&&(n.clearStencil(mt),yt=mt)},reset:function(){te=!1,Ie=null,_e=null,Pe=null,Ne=null,Se=null,Ye=null,We=null,yt=null}}}let a=new t,r=new i,o=new s,c=new WeakMap,l=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],y=null,p=!1,m=null,A=null,S=null,v=null,M=null,w=null,L=null,_=new ot(0,0,0),R=0,O=!1,z=null,G=null,se=null,k=null,$=null,le=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ce=!1,ae=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(q)[1]),ce=ae>=1):q.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ce=ae>=2);let J=null,U={},Q=n.getParameter(n.SCISSOR_BOX),F=n.getParameter(n.VIEWPORT),W=new Pt().fromArray(Q),X=new Pt().fromArray(F);function D(te,Ie,_e,Pe){let Ne=new Uint8Array(4),Se=n.createTexture();n.bindTexture(te,Se),n.texParameteri(te,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(te,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<_e;Ye++)te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?n.texImage3D(Ie,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(Ie+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return Se}let E={};E[n.TEXTURE_2D]=D(n.TEXTURE_2D,n.TEXTURE_2D,1),E[n.TEXTURE_CUBE_MAP]=D(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),E[n.TEXTURE_2D_ARRAY]=D(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),E[n.TEXTURE_3D]=D(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),b(n.DEPTH_TEST),r.setFunc(Js),H(!1),j(Jl),b(n.CULL_FACE),ne(pi);function b(te){u[te]!==!0&&(n.enable(te),u[te]=!0)}function C(te){u[te]!==!1&&(n.disable(te),u[te]=!1)}function P(te,Ie){return h[te]!==Ie?(n.bindFramebuffer(te,Ie),h[te]=Ie,te===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ie),te===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ie),!0):!1}function N(te,Ie){let _e=g,Pe=!1;if(te){_e=f.get(Ie),_e===void 0&&(_e=[],f.set(Ie,_e));let Ne=te.textures;if(_e.length!==Ne.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Ye=Ne.length;Se<Ye;Se++)_e[Se]=n.COLOR_ATTACHMENT0+Se;_e.length=Ne.length,Pe=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(_e)}function Y(te){return y!==te?(n.useProgram(te),y=te,!0):!1}let ee={[As]:n.FUNC_ADD,[Zh]:n.FUNC_SUBTRACT,[Jh]:n.FUNC_REVERSE_SUBTRACT};ee[jh]=n.MIN,ee[Kh]=n.MAX;let V={[Qh]:n.ZERO,[ed]:n.ONE,[td]:n.SRC_COLOR,[eu]:n.SRC_ALPHA,[od]:n.SRC_ALPHA_SATURATE,[ad]:n.DST_COLOR,[id]:n.DST_ALPHA,[nd]:n.ONE_MINUS_SRC_COLOR,[tu]:n.ONE_MINUS_SRC_ALPHA,[rd]:n.ONE_MINUS_DST_COLOR,[sd]:n.ONE_MINUS_DST_ALPHA,[cd]:n.CONSTANT_COLOR,[ld]:n.ONE_MINUS_CONSTANT_COLOR,[ud]:n.CONSTANT_ALPHA,[hd]:n.ONE_MINUS_CONSTANT_ALPHA};function ne(te,Ie,_e,Pe,Ne,Se,Ye,We,yt,mt){if(te===pi){p===!0&&(C(n.BLEND),p=!1);return}if(p===!1&&(b(n.BLEND),p=!0),te!==Yh){if(te!==m||mt!==O){if((A!==As||M!==As)&&(n.blendEquation(n.FUNC_ADD),A=As,M=As),mt)switch(te){case ha:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFunc(n.ONE,n.ONE);break;case Kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ql:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:et("WebGLState: Invalid blending: ",te);break}else switch(te){case ha:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Kl:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",te);break}S=null,v=null,w=null,L=null,_.set(0,0,0),R=0,m=te,O=mt}return}Ne=Ne||Ie,Se=Se||_e,Ye=Ye||Pe,(Ie!==A||Ne!==M)&&(n.blendEquationSeparate(ee[Ie],ee[Ne]),A=Ie,M=Ne),(_e!==S||Pe!==v||Se!==w||Ye!==L)&&(n.blendFuncSeparate(V[_e],V[Pe],V[Se],V[Ye]),S=_e,v=Pe,w=Se,L=Ye),(We.equals(_)===!1||yt!==R)&&(n.blendColor(We.r,We.g,We.b,yt),_.copy(We),R=yt),m=te,O=!1}function re(te,Ie){te.side===fi?C(n.CULL_FACE):b(n.CULL_FACE);let _e=te.side===rn;Ie&&(_e=!_e),H(_e),te.blending===ha&&te.transparent===!1?ne(pi):ne(te.blending,te.blendEquation,te.blendSrc,te.blendDst,te.blendEquationAlpha,te.blendSrcAlpha,te.blendDstAlpha,te.blendColor,te.blendAlpha,te.premultipliedAlpha),r.setFunc(te.depthFunc),r.setTest(te.depthTest),r.setMask(te.depthWrite),a.setMask(te.colorWrite);let Pe=te.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(te.stencilWriteMask),o.setFunc(te.stencilFunc,te.stencilRef,te.stencilFuncMask),o.setOp(te.stencilFail,te.stencilZFail,te.stencilZPass)),ye(te.polygonOffset,te.polygonOffsetFactor,te.polygonOffsetUnits),te.alphaToCoverage===!0?b(n.SAMPLE_ALPHA_TO_COVERAGE):C(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(te){z!==te&&(te?n.frontFace(n.CW):n.frontFace(n.CCW),z=te)}function j(te){te!==qh?(b(n.CULL_FACE),te!==G&&(te===Jl?n.cullFace(n.BACK):te===$h?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):C(n.CULL_FACE),G=te}function ge(te){te!==se&&(ce&&n.lineWidth(te),se=te)}function ye(te,Ie,_e){te?(b(n.POLYGON_OFFSET_FILL),(k!==Ie||$!==_e)&&(k=Ie,$=_e,r.getReversed()&&(Ie=-Ie),n.polygonOffset(Ie,_e))):C(n.POLYGON_OFFSET_FILL)}function be(te){te?b(n.SCISSOR_TEST):C(n.SCISSOR_TEST)}function Te(te){te===void 0&&(te=n.TEXTURE0+le-1),J!==te&&(n.activeTexture(te),J=te)}function B(te,Ie,_e){_e===void 0&&(J===null?_e=n.TEXTURE0+le-1:_e=J);let Pe=U[_e];Pe===void 0&&(Pe={type:void 0,texture:void 0},U[_e]=Pe),(Pe.type!==te||Pe.texture!==Ie)&&(J!==_e&&(n.activeTexture(_e),J=_e),n.bindTexture(te,Ie||E[te]),Pe.type=te,Pe.texture=Ie)}function Ve(){let te=U[J];te!==void 0&&te.type!==void 0&&(n.bindTexture(te.type,null),te.type=void 0,te.texture=void 0)}function De(){try{n.compressedTexImage2D(...arguments)}catch(te){et("WebGLState:",te)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(te){et("WebGLState:",te)}}function x(){try{n.texSubImage2D(...arguments)}catch(te){et("WebGLState:",te)}}function ie(){try{n.texSubImage3D(...arguments)}catch(te){et("WebGLState:",te)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(te){et("WebGLState:",te)}}function fe(){try{n.compressedTexSubImage3D(...arguments)}catch(te){et("WebGLState:",te)}}function Me(){try{n.texStorage2D(...arguments)}catch(te){et("WebGLState:",te)}}function Ee(){try{n.texStorage3D(...arguments)}catch(te){et("WebGLState:",te)}}function ve(){try{n.texImage2D(...arguments)}catch(te){et("WebGLState:",te)}}function Ae(){try{n.texImage3D(...arguments)}catch(te){et("WebGLState:",te)}}function we(te){return d[te]!==void 0?d[te]:n.getParameter(te)}function He(te,Ie){d[te]!==Ie&&(n.pixelStorei(te,Ie),d[te]=Ie)}function Le(te){W.equals(te)===!1&&(n.scissor(te.x,te.y,te.z,te.w),W.copy(te))}function Re(te){X.equals(te)===!1&&(n.viewport(te.x,te.y,te.z,te.w),X.copy(te))}function Xe(te,Ie){let _e=l.get(Ie);_e===void 0&&(_e=new WeakMap,l.set(Ie,_e));let Pe=_e.get(te);Pe===void 0&&(Pe=n.getUniformBlockIndex(Ie,te.name),_e.set(te,Pe))}function Je(te,Ie){let Pe=l.get(Ie).get(te);c.get(Ie)!==Pe&&(n.uniformBlockBinding(Ie,Pe,te.__bindingPointIndex),c.set(Ie,Pe))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},J=null,U={},h={},f=new WeakMap,g=[],y=null,p=!1,m=null,A=null,S=null,v=null,M=null,w=null,L=null,_=new ot(0,0,0),R=0,O=!1,z=null,G=null,se=null,k=null,$=null,W.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:b,disable:C,bindFramebuffer:P,drawBuffers:N,useProgram:Y,setBlending:ne,setMaterial:re,setFlipSided:H,setCullFace:j,setLineWidth:ge,setPolygonOffset:ye,setScissorTest:be,activeTexture:Te,bindTexture:B,unbindTexture:Ve,compressedTexImage2D:De,compressedTexImage3D:I,texImage2D:ve,texImage3D:Ae,pixelStorei:He,getParameter:we,updateUBOMapping:Xe,uniformBlockBinding:Je,texStorage2D:Me,texStorage3D:Ee,texSubImage2D:x,texSubImage3D:ie,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Le,viewport:Re,reset:it}}function Ix(n,e,t,i,s,a,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ce,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,x){return g?new OffscreenCanvas(I,x):ka("canvas")}function p(I,x,ie){let oe=1,fe=De(I);if((fe.width>ie||fe.height>ie)&&(oe=ie/Math.max(fe.width,fe.height)),oe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Me=Math.floor(oe*fe.width),Ee=Math.floor(oe*fe.height);h===void 0&&(h=y(Me,Ee));let ve=x?y(Me,Ee):h;return ve.width=Me,ve.height=Ee,ve.getContext("2d").drawImage(I,0,0,Me,Ee),Qe("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Me+"x"+Ee+")."),ve}else return"data"in I&&Qe("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),I;return I}function m(I){return I.generateMipmaps}function A(I){n.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(I,x,ie,oe,fe,Me=!1){if(I!==null){if(n[I]!==void 0)return n[I];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ee;oe&&(Ee=e.get("EXT_texture_norm16"),Ee||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=x;if(x===n.RED&&(ie===n.FLOAT&&(ve=n.R32F),ie===n.HALF_FLOAT&&(ve=n.R16F),ie===n.UNSIGNED_BYTE&&(ve=n.R8),ie===n.UNSIGNED_SHORT&&Ee&&(ve=Ee.R16_EXT),ie===n.SHORT&&Ee&&(ve=Ee.R16_SNORM_EXT)),x===n.RED_INTEGER&&(ie===n.UNSIGNED_BYTE&&(ve=n.R8UI),ie===n.UNSIGNED_SHORT&&(ve=n.R16UI),ie===n.UNSIGNED_INT&&(ve=n.R32UI),ie===n.BYTE&&(ve=n.R8I),ie===n.SHORT&&(ve=n.R16I),ie===n.INT&&(ve=n.R32I)),x===n.RG&&(ie===n.FLOAT&&(ve=n.RG32F),ie===n.HALF_FLOAT&&(ve=n.RG16F),ie===n.UNSIGNED_BYTE&&(ve=n.RG8),ie===n.UNSIGNED_SHORT&&Ee&&(ve=Ee.RG16_EXT),ie===n.SHORT&&Ee&&(ve=Ee.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(ie===n.UNSIGNED_BYTE&&(ve=n.RG8UI),ie===n.UNSIGNED_SHORT&&(ve=n.RG16UI),ie===n.UNSIGNED_INT&&(ve=n.RG32UI),ie===n.BYTE&&(ve=n.RG8I),ie===n.SHORT&&(ve=n.RG16I),ie===n.INT&&(ve=n.RG32I)),x===n.RGB_INTEGER&&(ie===n.UNSIGNED_BYTE&&(ve=n.RGB8UI),ie===n.UNSIGNED_SHORT&&(ve=n.RGB16UI),ie===n.UNSIGNED_INT&&(ve=n.RGB32UI),ie===n.BYTE&&(ve=n.RGB8I),ie===n.SHORT&&(ve=n.RGB16I),ie===n.INT&&(ve=n.RGB32I)),x===n.RGBA_INTEGER&&(ie===n.UNSIGNED_BYTE&&(ve=n.RGBA8UI),ie===n.UNSIGNED_SHORT&&(ve=n.RGBA16UI),ie===n.UNSIGNED_INT&&(ve=n.RGBA32UI),ie===n.BYTE&&(ve=n.RGBA8I),ie===n.SHORT&&(ve=n.RGBA16I),ie===n.INT&&(ve=n.RGBA32I)),x===n.RGB&&(ie===n.UNSIGNED_SHORT&&Ee&&(ve=Ee.RGB16_EXT),ie===n.SHORT&&Ee&&(ve=Ee.RGB16_SNORM_EXT),ie===n.UNSIGNED_INT_5_9_9_9_REV&&(ve=n.RGB9_E5),ie===n.UNSIGNED_INT_10F_11F_11F_REV&&(ve=n.R11F_G11F_B10F)),x===n.RGBA){let Ae=Me?Va:pt.getTransfer(fe);ie===n.FLOAT&&(ve=n.RGBA32F),ie===n.HALF_FLOAT&&(ve=n.RGBA16F),ie===n.UNSIGNED_BYTE&&(ve=Ae===Mt?n.SRGB8_ALPHA8:n.RGBA8),ie===n.UNSIGNED_SHORT&&Ee&&(ve=Ee.RGBA16_EXT),ie===n.SHORT&&Ee&&(ve=Ee.RGBA16_SNORM_EXT),ie===n.UNSIGNED_SHORT_4_4_4_4&&(ve=n.RGBA4),ie===n.UNSIGNED_SHORT_5_5_5_1&&(ve=n.RGB5_A1)}return(ve===n.R16F||ve===n.R32F||ve===n.RG16F||ve===n.RG32F||ve===n.RGBA16F||ve===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function M(I,x){let ie;return I?x===null||x===ni||x===fa?ie=n.DEPTH24_STENCIL8:x===Hn?ie=n.DEPTH32F_STENCIL8:x===da&&(ie=n.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ni||x===fa?ie=n.DEPTH_COMPONENT24:x===Hn?ie=n.DEPTH_COMPONENT32F:x===da&&(ie=n.DEPTH_COMPONENT16),ie}function w(I,x){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Zt&&I.minFilter!==nn?Math.log2(Math.max(x.width,x.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?x.mipmaps.length:1}function L(I){let x=I.target;x.removeEventListener("dispose",L),R(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function _(I){let x=I.target;x.removeEventListener("dispose",_),z(x)}function R(I){let x=i.get(I);if(x.__webglInit===void 0)return;let ie=I.source,oe=f.get(ie);if(oe){let fe=oe[x.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&O(I),Object.keys(oe).length===0&&f.delete(ie)}i.remove(I)}function O(I){let x=i.get(I);n.deleteTexture(x.__webglTexture);let ie=I.source,oe=f.get(ie);delete oe[x.__cacheKey],r.memory.textures--}function z(I){let x=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(x.__webglFramebuffer[oe]))for(let fe=0;fe<x.__webglFramebuffer[oe].length;fe++)n.deleteFramebuffer(x.__webglFramebuffer[oe][fe]);else n.deleteFramebuffer(x.__webglFramebuffer[oe]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[oe])}else{if(Array.isArray(x.__webglFramebuffer))for(let oe=0;oe<x.__webglFramebuffer.length;oe++)n.deleteFramebuffer(x.__webglFramebuffer[oe]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let oe=0;oe<x.__webglColorRenderbuffer.length;oe++)x.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[oe]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ie=I.textures;for(let oe=0,fe=ie.length;oe<fe;oe++){let Me=i.get(ie[oe]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),r.memory.textures--),i.remove(ie[oe])}i.remove(I)}let G=0;function se(){G=0}function k(){return G}function $(I){G=I}function le(){let I=G;return I>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,I}function ce(I){let x=[];return x.push(I.wrapS),x.push(I.wrapT),x.push(I.wrapR||0),x.push(I.magFilter),x.push(I.minFilter),x.push(I.anisotropy),x.push(I.internalFormat),x.push(I.format),x.push(I.type),x.push(I.generateMipmaps),x.push(I.premultiplyAlpha),x.push(I.flipY),x.push(I.unpackAlignment),x.push(I.colorSpace),x.join()}function ae(I,x){let ie=i.get(I);if(I.isVideoTexture&&B(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ie.__version!==I.version){let oe=I.image;if(oe===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{C(ie,I,x);return}}else I.isExternalTexture&&(ie.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture,n.TEXTURE0+x)}function q(I,x){let ie=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ie.__version!==I.version){C(ie,I,x);return}else I.isExternalTexture&&(ie.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ie.__webglTexture,n.TEXTURE0+x)}function J(I,x){let ie=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ie.__version!==I.version){C(ie,I,x);return}t.bindTexture(n.TEXTURE_3D,ie.__webglTexture,n.TEXTURE0+x)}function U(I,x){let ie=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&ie.__version!==I.version){P(ie,I,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture,n.TEXTURE0+x)}let Q={[js]:n.REPEAT,[li]:n.CLAMP_TO_EDGE,[yo]:n.MIRRORED_REPEAT},F={[Zt]:n.NEAREST,[pd]:n.NEAREST_MIPMAP_NEAREST,[gr]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[Jo]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},W={[xd]:n.NEVER,[Sd]:n.ALWAYS,[_d]:n.LESS,[Dc]:n.LEQUAL,[yd]:n.EQUAL,[Uc]:n.GEQUAL,[Ad]:n.GREATER,[Md]:n.NOTEQUAL};function X(I,x){if(x.type===Hn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===nn||x.magFilter===Jo||x.magFilter===gr||x.magFilter===Ki||x.minFilter===nn||x.minFilter===Jo||x.minFilter===gr||x.minFilter===Ki)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Q[x.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Q[x.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Q[x.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,F[x.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,F[x.minFilter]),x.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,W[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Zt||x.minFilter!==gr&&x.minFilter!==Ki||x.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let ie=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function D(I,x){let ie=!1;I.__webglInit===void 0&&(I.__webglInit=!0,x.addEventListener("dispose",L));let oe=x.source,fe=f.get(oe);fe===void 0&&(fe={},f.set(oe,fe));let Me=ce(x);if(Me!==I.__cacheKey){fe[Me]===void 0&&(fe[Me]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,ie=!0),fe[Me].usedTimes++;let Ee=fe[I.__cacheKey];Ee!==void 0&&(fe[I.__cacheKey].usedTimes--,Ee.usedTimes===0&&O(x)),I.__cacheKey=Me,I.__webglTexture=fe[Me].texture}return ie}function E(I,x,ie){return Math.floor(Math.floor(I/ie)/x)}function b(I,x,ie,oe){let Me=I.updateRanges;if(Me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,ie,oe,x.data);else{Me.sort((He,Le)=>He.start-Le.start);let Ee=0;for(let He=1;He<Me.length;He++){let Le=Me[Ee],Re=Me[He],Xe=Le.start+Le.count,Je=E(Re.start,x.width,4),it=E(Le.start,x.width,4);Re.start<=Xe+1&&Je===it&&E(Re.start+Re.count-1,x.width,4)===Je?Le.count=Math.max(Le.count,Re.start+Re.count-Le.start):(++Ee,Me[Ee]=Re)}Me.length=Ee+1;let ve=t.getParameter(n.UNPACK_ROW_LENGTH),Ae=t.getParameter(n.UNPACK_SKIP_PIXELS),we=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let He=0,Le=Me.length;He<Le;He++){let Re=Me[He],Xe=Math.floor(Re.start/4),Je=Math.ceil(Re.count/4),it=Xe%x.width,te=Math.floor(Xe/x.width),Ie=Je,_e=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,it),t.pixelStorei(n.UNPACK_SKIP_ROWS,te),t.texSubImage2D(n.TEXTURE_2D,0,it,te,Ie,_e,ie,oe,x.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ve),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function C(I,x,ie){let oe=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(oe=n.TEXTURE_3D);let fe=D(I,x),Me=x.source;t.bindTexture(oe,I.__webglTexture,n.TEXTURE0+ie);let Ee=i.get(Me);if(Me.version!==Ee.__version||fe===!0){if(t.activeTexture(n.TEXTURE0+ie),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let _e=pt.getPrimaries(pt.workingColorSpace),Pe=x.colorSpace===Pi?null:pt.getPrimaries(x.colorSpace),Ne=x.colorSpace===Pi||_e===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let Ae=p(x.image,!1,s.maxTextureSize);Ae=Ve(x,Ae);let we=a.convert(x.format,x.colorSpace),He=a.convert(x.type),Le=v(x.internalFormat,we,He,x.normalized,x.colorSpace,x.isVideoTexture);X(oe,x);let Re,Xe=x.mipmaps,Je=x.isVideoTexture!==!0,it=Ee.__version===void 0||fe===!0,te=Me.dataReady,Ie=w(x,Ae);if(x.isDepthTexture)Le=M(x.format===Qi,x.type),it&&(Je?t.texStorage2D(n.TEXTURE_2D,1,Le,Ae.width,Ae.height):t.texImage2D(n.TEXTURE_2D,0,Le,Ae.width,Ae.height,0,we,He,null));else if(x.isDataTexture)if(Xe.length>0){Je&&it&&t.texStorage2D(n.TEXTURE_2D,Ie,Le,Xe[0].width,Xe[0].height);for(let _e=0,Pe=Xe.length;_e<Pe;_e++)Re=Xe[_e],Je?te&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,we,He,Re.data):t.texImage2D(n.TEXTURE_2D,_e,Le,Re.width,Re.height,0,we,He,Re.data);x.generateMipmaps=!1}else Je?(it&&t.texStorage2D(n.TEXTURE_2D,Ie,Le,Ae.width,Ae.height),te&&b(x,Ae,we,He)):t.texImage2D(n.TEXTURE_2D,0,Le,Ae.width,Ae.height,0,we,He,Ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Je&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Le,Xe[0].width,Xe[0].height,Ae.depth);for(let _e=0,Pe=Xe.length;_e<Pe;_e++)if(Re=Xe[_e],x.format!==Wn)if(we!==null)if(Je){if(te)if(x.layerUpdates.size>0){let Ne=Mu(Re.width,Re.height,x.format,x.type);for(let Se of x.layerUpdates){let Ye=Re.data.subarray(Se*Ne/Re.data.BYTES_PER_ELEMENT,(Se+1)*Ne/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,Se,Re.width,Re.height,1,we,Ye)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,Ae.depth,we,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Le,Re.width,Re.height,Ae.depth,0,Re.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,Ae.depth,we,He,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Le,Re.width,Re.height,Ae.depth,0,we,He,Re.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Je&&it&&t.texStorage2D(n.TEXTURE_2D,Ie,Le,Xe[0].width,Xe[0].height);for(let _e=0,Pe=Xe.length;_e<Pe;_e++)Re=Xe[_e],x.format!==Wn?we!==null?Je?te&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,we,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Le,Re.width,Re.height,0,Re.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?te&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,we,He,Re.data):t.texImage2D(n.TEXTURE_2D,_e,Le,Re.width,Re.height,0,we,He,Re.data)}else if(x.isDataArrayTexture)if(Je){if(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Le,Ae.width,Ae.height,Ae.depth),te)if(x.layerUpdates.size>0){let _e=Mu(Ae.width,Ae.height,x.format,x.type);for(let Pe of x.layerUpdates){let Ne=Ae.data.subarray(Pe*_e/Ae.data.BYTES_PER_ELEMENT,(Pe+1)*_e/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,Ae.width,Ae.height,1,we,He,Ne)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,we,He,Ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,Ae.width,Ae.height,Ae.depth,0,we,He,Ae.data);else if(x.isData3DTexture)Je?(it&&t.texStorage3D(n.TEXTURE_3D,Ie,Le,Ae.width,Ae.height,Ae.depth),te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,we,He,Ae.data)):t.texImage3D(n.TEXTURE_3D,0,Le,Ae.width,Ae.height,Ae.depth,0,we,He,Ae.data);else if(x.isFramebufferTexture){if(it)if(Je)t.texStorage2D(n.TEXTURE_2D,Ie,Le,Ae.width,Ae.height);else{let _e=Ae.width,Pe=Ae.height;for(let Ne=0;Ne<Ie;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Le,_e,Pe,0,we,He,null),_e>>=1,Pe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let _e=n.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),Ae.parentNode!==_e){_e.appendChild(Ae),d.add(x),_e.onpaint=Pe=>{let Ne=Pe.changedElements;for(let Se of d)Ne.includes(Se.image)&&(Se.needsUpdate=!0)},_e.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Ae);else{let Ne=n.RGBA,Se=n.RGBA,Ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ne,Se,Ye,Ae)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(Je&&it){let _e=De(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Le,_e.width,_e.height)}for(let _e=0,Pe=Xe.length;_e<Pe;_e++)Re=Xe[_e],Je?te&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,we,He,Re):t.texImage2D(n.TEXTURE_2D,_e,Le,we,He,Re);x.generateMipmaps=!1}else if(Je){if(it){let _e=De(Ae);t.texStorage2D(n.TEXTURE_2D,Ie,Le,_e.width,_e.height)}te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,He,Ae)}else t.texImage2D(n.TEXTURE_2D,0,Le,we,He,Ae);m(x)&&A(oe),Ee.__version=Me.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function P(I,x,ie){if(x.image.length!==6)return;let oe=D(I,x),fe=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+ie);let Me=i.get(fe);if(fe.version!==Me.__version||oe===!0){t.activeTexture(n.TEXTURE0+ie);let Ee=pt.getPrimaries(pt.workingColorSpace),ve=x.colorSpace===Pi?null:pt.getPrimaries(x.colorSpace),Ae=x.colorSpace===Pi||Ee===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let we=x.isCompressedTexture||x.image[0].isCompressedTexture,He=x.image[0]&&x.image[0].isDataTexture,Le=[];for(let Se=0;Se<6;Se++)!we&&!He?Le[Se]=p(x.image[Se],!0,s.maxCubemapSize):Le[Se]=He?x.image[Se].image:x.image[Se],Le[Se]=Ve(x,Le[Se]);let Re=Le[0],Xe=a.convert(x.format,x.colorSpace),Je=a.convert(x.type),it=v(x.internalFormat,Xe,Je,x.normalized,x.colorSpace),te=x.isVideoTexture!==!0,Ie=Me.__version===void 0||oe===!0,_e=fe.dataReady,Pe=w(x,Re);X(n.TEXTURE_CUBE_MAP,x);let Ne;if(we){te&&Ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,it,Re.width,Re.height);for(let Se=0;Se<6;Se++){Ne=Le[Se].mipmaps;for(let Ye=0;Ye<Ne.length;Ye++){let We=Ne[Ye];x.format!==Wn?Xe!==null?te?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,0,0,We.width,We.height,Xe,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,it,We.width,We.height,0,We.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,0,0,We.width,We.height,Xe,Je,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,it,We.width,We.height,0,Xe,Je,We.data)}}}else{if(Ne=x.mipmaps,te&&Ie){Ne.length>0&&Pe++;let Se=De(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,it,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(He){te?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Le[Se].width,Le[Se].height,Xe,Je,Le[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,it,Le[Se].width,Le[Se].height,0,Xe,Je,Le[Se].data);for(let Ye=0;Ye<Ne.length;Ye++){let yt=Ne[Ye].image[Se].image;te?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,0,0,yt.width,yt.height,Xe,Je,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,it,yt.width,yt.height,0,Xe,Je,yt.data)}}else{te?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Xe,Je,Le[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,it,Xe,Je,Le[Se]);for(let Ye=0;Ye<Ne.length;Ye++){let We=Ne[Ye];te?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,0,0,Xe,Je,We.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,it,Xe,Je,We.image[Se])}}}m(x)&&A(n.TEXTURE_CUBE_MAP),Me.__version=fe.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function N(I,x,ie,oe,fe,Me){let Ee=a.convert(ie.format,ie.colorSpace),ve=a.convert(ie.type),Ae=v(ie.internalFormat,Ee,ve,ie.normalized,ie.colorSpace),we=i.get(x),He=i.get(ie);if(He.__renderTarget=x,!we.__hasExternalTextures){let Le=Math.max(1,x.width>>Me),Re=Math.max(1,x.height>>Me);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,Me,Ae,Le,Re,x.depth,0,Ee,ve,null):t.texImage2D(fe,Me,Ae,Le,Re,0,Ee,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Te(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,fe,He.__webglTexture,0,be(x)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,fe,He.__webglTexture,Me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(I,x,ie){if(n.bindRenderbuffer(n.RENDERBUFFER,I),x.depthBuffer){let oe=x.depthTexture,fe=oe&&oe.isDepthTexture?oe.type:null,Me=M(x.stencilBuffer,fe),Ee=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Te(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(x),Me,x.width,x.height):ie?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(x),Me,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Me,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,I)}else{let oe=x.textures;for(let fe=0;fe<oe.length;fe++){let Me=oe[fe],Ee=a.convert(Me.format,Me.colorSpace),ve=a.convert(Me.type),Ae=v(Me.internalFormat,Ee,ve,Me.normalized,Me.colorSpace);Te(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(x),Ae,x.width,x.height):ie?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(x),Ae,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ee(I,x,ie){let oe=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let fe=i.get(x.depthTexture);if(fe.__renderTarget=x,(!fe.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),oe){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,x.depthTexture.addEventListener("dispose",L)),fe.__webglTexture===void 0){fe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),X(n.TEXTURE_CUBE_MAP,x.depthTexture);let we=a.convert(x.depthTexture.format),He=a.convert(x.depthTexture.type),Le;x.depthTexture.format===ui?Le=n.DEPTH_COMPONENT24:x.depthTexture.format===Qi&&(Le=n.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Le,x.width,x.height,0,we,He,null)}}else ae(x.depthTexture,0);let Me=fe.__webglTexture,Ee=be(x),ve=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+ie:n.TEXTURE_2D,Ae=x.depthTexture.format===Qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===ui)Te(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,ve,Me,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,ve,Me,0);else if(x.depthTexture.format===Qi)Te(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,ve,Me,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,ve,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function V(I){let x=i.get(I),ie=I.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==I.depthTexture){let oe=I.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),oe){let fe=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,oe.removeEventListener("dispose",fe)};oe.addEventListener("dispose",fe),x.__depthDisposeCallback=fe}x.__boundDepthTexture=oe}if(I.depthTexture&&!x.__autoAllocateDepthBuffer)if(ie)for(let oe=0;oe<6;oe++)ee(x.__webglFramebuffer[oe],I,oe);else{let oe=I.texture.mipmaps;oe&&oe.length>0?ee(x.__webglFramebuffer[0],I,0):ee(x.__webglFramebuffer,I,0)}else if(ie){x.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[oe]),x.__webglDepthbuffer[oe]===void 0)x.__webglDepthbuffer[oe]=n.createRenderbuffer(),Y(x.__webglDepthbuffer[oe],I,!1);else{let fe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=x.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,Me)}}else{let oe=I.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Y(x.__webglDepthbuffer,I,!1);else{let fe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,Me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(I,x,ie){let oe=i.get(I);x!==void 0&&N(oe.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ie!==void 0&&V(I)}function re(I){let x=I.texture,ie=i.get(I),oe=i.get(x);I.addEventListener("dispose",_);let fe=I.textures,Me=I.isWebGLCubeRenderTarget===!0,Ee=fe.length>1;if(Ee||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=x.version,r.memory.textures++),Me){ie.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){ie.__webglFramebuffer[ve]=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)ie.__webglFramebuffer[ve][Ae]=n.createFramebuffer()}else ie.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){ie.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)ie.__webglFramebuffer[ve]=n.createFramebuffer()}else ie.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ve=0,Ae=fe.length;ve<Ae;ve++){let we=i.get(fe[ve]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),r.memory.textures++)}if(I.samples>0&&Te(I)===!1){ie.__webglMultisampledFramebuffer=n.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let ve=0;ve<fe.length;ve++){let Ae=fe[ve];ie.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ie.__webglColorRenderbuffer[ve]);let we=a.convert(Ae.format,Ae.colorSpace),He=a.convert(Ae.type),Le=v(Ae.internalFormat,we,He,Ae.normalized,Ae.colorSpace,I.isXRRenderTarget===!0),Re=be(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Le,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,ie.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(ie.__webglDepthRenderbuffer=n.createRenderbuffer(),Y(ie.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Me){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),X(n.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)N(ie.__webglFramebuffer[ve][Ae],I,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ae);else N(ie.__webglFramebuffer[ve],I,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(x)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ve=0,Ae=fe.length;ve<Ae;ve++){let we=fe[ve],He=i.get(we),Le=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Le=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,He.__webglTexture),X(Le,we),N(ie.__webglFramebuffer,I,we,n.COLOR_ATTACHMENT0+ve,Le,0),m(we)&&A(Le)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ve=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,oe.__webglTexture),X(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)N(ie.__webglFramebuffer[Ae],I,x,n.COLOR_ATTACHMENT0,ve,Ae);else N(ie.__webglFramebuffer,I,x,n.COLOR_ATTACHMENT0,ve,0);m(x)&&A(ve),t.unbindTexture()}I.depthBuffer&&V(I)}function H(I){let x=I.textures;for(let ie=0,oe=x.length;ie<oe;ie++){let fe=x[ie];if(m(fe)){let Me=S(I),Ee=i.get(fe).__webglTexture;t.bindTexture(Me,Ee),A(Me),t.unbindTexture()}}}let j=[],ge=[];function ye(I){if(I.samples>0){if(Te(I)===!1){let x=I.textures,ie=I.width,oe=I.height,fe=n.COLOR_BUFFER_BIT,Me=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(I),ve=x.length>1;if(ve)for(let we=0;we<x.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let Ae=I.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let we=0;we<x.length;we++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[we]);let He=i.get(x[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,ie,oe,0,0,ie,oe,fe,n.NEAREST),c===!0&&(j.length=0,ge.length=0,j.push(n.COLOR_ATTACHMENT0+we),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(j.push(Me),ge.push(Me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let we=0;we<x.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[we]);let He=i.get(x[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let x=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function be(I){return Math.min(s.maxSamples,I.samples)}function Te(I){let x=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function B(I){let x=r.render.frame;u.get(I)!==x&&(u.set(I,x),I.update())}function Ve(I,x){let ie=I.colorSpace,oe=I.format,fe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ie!==za&&ie!==Pi&&(pt.getTransfer(ie)===Mt?(oe!==Wn||fe!==bn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",ie)),x}function De(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=le,this.resetTextureUnits=se,this.getTextureUnits=k,this.setTextureUnits=$,this.setTexture2D=ae,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=U,this.rebindTextures=ne,this.setupRenderTarget=re,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=N,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Px(n,e){function t(i,s=Pi){let a,r=pt.getTransfer(s);if(i===bn)return n.UNSIGNED_BYTE;if(i===Ko)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===du)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lu)return n.BYTE;if(i===uu)return n.SHORT;if(i===da)return n.UNSIGNED_SHORT;if(i===jo)return n.INT;if(i===ni)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===ii)return n.HALF_FLOAT;if(i===fu)return n.ALPHA;if(i===pu)return n.RGB;if(i===Wn)return n.RGBA;if(i===ui)return n.DEPTH_COMPONENT;if(i===Qi)return n.DEPTH_STENCIL;if(i===ec)return n.RED;if(i===tc)return n.RED_INTEGER;if(i===es)return n.RG;if(i===nc)return n.RG_INTEGER;if(i===ic)return n.RGBA_INTEGER;if(i===vr||i===xr||i===_r||i===yr)if(r===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===vr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===vr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_r)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sc||i===ac||i===rc||i===oc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===sc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ac)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cc||i===lc||i===uc||i===hc||i===dc||i===Ar||i===fc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===cc||i===lc)return r===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===uc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===hc)return a.COMPRESSED_R11_EAC;if(i===dc)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Ar)return a.COMPRESSED_RG11_EAC;if(i===fc)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pc||i===mc||i===gc||i===vc||i===xc||i===_c||i===yc||i===Ac||i===Mc||i===Sc||i===bc||i===Tc||i===Ec||i===wc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===pc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_c)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ac)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ec)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cc||i===Rc||i===Ic)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Cc)return r===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pc||i===Lc||i===Mr||i===Nc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Pc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Lc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nx=`
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

}`,Ou=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ja(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Pn({vertexShader:Lx,fragmentShader:Nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fu=class extends hi{constructor(e,t){super();let i=this,s=null,a=1,r=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,y=typeof XRWebGLBinding<"u",p=new Ou,m={},A=t.getContextAttributes(),S=null,v=null,M=[],w=[],L=new Ce,_=null,R=null,O=new tn;O.viewport=new Pt;let z=new tn;z.viewport=new Pt;let G=[O,z],se=new $o,k=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let b=M[E];return b===void 0&&(b=new ia,M[E]=b),b.getTargetRaySpace()},this.getControllerGrip=function(E){let b=M[E];return b===void 0&&(b=new ia,M[E]=b),b.getGripSpace()},this.getHand=function(E){let b=M[E];return b===void 0&&(b=new ia,M[E]=b),b.getHandSpace()};function le(E){let b=w.indexOf(E.inputSource);if(b===-1)return;let C=M[b];C!==void 0&&(C.update(E.inputSource,E.frame,l||r),C.dispatchEvent({type:E.type,data:E.inputSource}))}function ce(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",ce),s.removeEventListener("inputsourceschange",ae);for(let E=0;E<M.length;E++){let b=w[E];b!==null&&(w[E]=null,M[E].disconnect(b))}k=null,$=null,p.reset();for(let E in m)delete m[E];if(e.setRenderTarget(S),f=null,h=null,d=null,s=null,v=null,D.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(L.width,L.height,!1),R!==null){let E=R.camera;E.fov=R.fov,E.zoom=R.zoom,E.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){a=E,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){o=E,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(E){l=E},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(E){if(s=E,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",ce),s.addEventListener("inputsourceschange",ae),A.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let C=null,P=null,N=null;A.depth&&(N=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,C=A.stencil?Qi:ui,P=A.stencil?fa:ni);let Y={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer(Y),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Mn(h.textureWidth,h.textureHeight,{format:Wn,type:bn,depthTexture:new $i(h.textureWidth,h.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let C={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,C),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Mn(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),D.setContext(s),D.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ae(E){for(let b=0;b<E.removed.length;b++){let C=E.removed[b],P=w.indexOf(C);P>=0&&(w[P]=null,M[P].disconnect(C))}for(let b=0;b<E.added.length;b++){let C=E.added[b],P=w.indexOf(C);if(P===-1){for(let Y=0;Y<M.length;Y++)if(Y>=w.length){w.push(C),P=Y;break}else if(w[Y]===null){w[Y]=C,P=Y;break}if(P===-1)break}let N=M[P];N&&N.connect(C)}}let q=new Z,J=new Z;function U(E,b,C){q.setFromMatrixPosition(b.matrixWorld),J.setFromMatrixPosition(C.matrixWorld);let P=q.distanceTo(J),N=b.projectionMatrix.elements,Y=C.projectionMatrix.elements,ee=N[14]/(N[10]-1),V=N[14]/(N[10]+1),ne=(N[9]+1)/N[5],re=(N[9]-1)/N[5],H=(N[8]-1)/N[0],j=(Y[8]+1)/Y[0],ge=ee*H,ye=ee*j,be=P/(-H+j),Te=be*-H;if(b.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(Te),E.translateZ(be),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert(),N[10]===-1)E.projectionMatrix.copy(b.projectionMatrix),E.projectionMatrixInverse.copy(b.projectionMatrixInverse);else{let B=ee+be,Ve=V+be,De=ge-Te,I=ye+(P-Te),x=ne*V/Ve*B,ie=re*V/Ve*B;E.projectionMatrix.makePerspective(De,I,x,ie,B,Ve),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}}function Q(E,b){b===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(b.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(s===null)return;let b=E.near,C=E.far;p.texture!==null&&(p.depthNear>0&&(b=p.depthNear),p.depthFar>0&&(C=p.depthFar)),se.near=z.near=O.near=b,se.far=z.far=O.far=C,(k!==se.near||$!==se.far)&&(s.updateRenderState({depthNear:se.near,depthFar:se.far}),k=se.near,$=se.far),se.layers.mask=E.layers.mask|6,O.layers.mask=se.layers.mask&-5,z.layers.mask=se.layers.mask&-3;let P=E.parent,N=se.cameras;Q(se,P);for(let Y=0;Y<N.length;Y++)Q(N[Y],P);N.length===2?U(se,O,z):se.projectionMatrix.copy(O.projectionMatrix),R===null&&E.isPerspectiveCamera&&(R={camera:E,fov:E.fov,zoom:E.zoom}),F(E,se,P)};function F(E,b,C){C===null?E.matrix.copy(b.matrixWorld):(E.matrix.copy(C.matrixWorld),E.matrix.invert(),E.matrix.multiply(b.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(b.projectionMatrix),E.projectionMatrixInverse.copy(b.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=ea*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(E){c=E,h!==null&&(h.fixedFoveation=E),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=E)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(se)},this.getCameraTexture=function(E){return m[E]};let W=null;function X(E,b){if(u=b.getViewerPose(l||r),g=b,u!==null){let C=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let P=!1;C.length!==se.cameras.length&&(se.cameras.length=0,P=!0);for(let V=0;V<C.length;V++){let ne=C[V],re=null;if(f!==null)re=f.getViewport(ne);else{let j=d.getViewSubImage(h,ne);re=j.viewport,V===0&&(e.setRenderTargetTextures(v,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(v))}let H=G[V];H===void 0&&(H=new tn,H.layers.enable(V),H.viewport=new Pt,G[V]=H),H.matrix.fromArray(ne.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(ne.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(re.x,re.y,re.width,re.height),V===0&&(se.matrix.copy(H.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),P===!0&&se.cameras.push(H)}let N=s.enabledFeatures;if(N&&N.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let V=d.getDepthInformation(C[0]);V&&V.isValid&&V.texture&&p.init(V,s.renderState)}if(N&&N.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let V=0;V<C.length;V++){let ne=C[V].camera;if(ne){let re=m[ne];re||(re=new Ja,m[ne]=re);let H=d.getCameraImage(ne);re.sourceTexture=H}}}}for(let C=0;C<M.length;C++){let P=w[C],N=M[C];P!==null&&N!==void 0&&N.update(P,b,l||r)}W&&W(E,b),b.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:b}),g=null}let D=new af;D.setAnimationLoop(X),this.setAnimationLoop=function(E){W=E},this.dispose=function(){}}},Dx=new vt,hf=new st;hf.set(-1,0,0,0,1,0,0,0,1);function Ux(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,_u(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,A,S,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(p,m):m.isMeshLambertMaterial?(a(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(p,m),d(p,m)):m.isMeshPhongMaterial?(a(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(a(p,m),g(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),y(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,A,S):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===rn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===rn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let A=e.get(m),S=A.envMap,v=A.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(hf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,A,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*A,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,A){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let A=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ox(n,e,t,i){let s={},a={},r=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){let w=M.program;i.uniformBlockBinding(v,w)}function l(v,M){let w=s[v.id];w===void 0&&(p(v),w=u(v),s[v.id]=w,v.addEventListener("dispose",A));let L=M.program;i.updateUBOMapping(v,L);let _=e.render.frame;a[v.id]!==_&&(h(v),a[v.id]=_)}function u(v){let M=d();v.__bindingPointIndex=M;let w=n.createBuffer(),L=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,L,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,w),w}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let M=s[v.id],w=v.uniforms,L=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let _=0,R=w.length;_<R;_++){let O=w[_];if(Array.isArray(O))for(let z=0,G=O.length;z<G;z++)f(O[z],_,z,L);else f(O,_,0,L)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,M,w,L){if(y(v,M,w,L)===!0){let _=v.__offset,R=v.value;if(Array.isArray(R)){let O=0;for(let z=0;z<R.length;z++){let G=R[z],se=m(G);g(G,v.__data,O),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(O+=se.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,v.__data)}}function g(v,M,w){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,w)}function y(v,M,w,L){let _=v.value,R=M+"_"+w;if(L[R]===void 0)return typeof _=="number"||typeof _=="boolean"?L[R]=_:ArrayBuffer.isView(_)?L[R]=_.slice():L[R]=_.clone(),!0;{let O=L[R];if(typeof _=="number"||typeof _=="boolean"){if(O!==_)return L[R]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(O.equals(_)===!1)return O.copy(_),!0}}return!1}function p(v){let M=v.uniforms,w=0,L=16;for(let R=0,O=M.length;R<O;R++){let z=Array.isArray(M[R])?M[R]:[M[R]];for(let G=0,se=z.length;G<se;G++){let k=z[G],$=Array.isArray(k.value)?k.value:[k.value];for(let le=0,ce=$.length;le<ce;le++){let ae=$[le],q=m(ae),J=w%L,U=J%q.boundary,Q=J+U;w+=U,Q!==0&&L-Q<q.storage&&(w+=L-Q),k.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=q.storage}}}let _=w%L;return _>0&&(w+=L-_),v.__size=w,v.__cache={},this}function m(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",v),M}function A(v){let M=v.target;M.removeEventListener("dispose",A);let w=r.indexOf(M.__bindingPointIndex);r.splice(w,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete a[M.id]}function S(){for(let v in s)n.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:c,update:l,dispose:S}}var Fx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function Bx(){return mi===null&&(mi=new Ya(Fx,16,16,es,ii),mi.name="DFG_LUT",mi.minFilter=nn,mi.magFilter=nn,mi.wrapS=li,mi.wrapT=li,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var zc=class{constructor(e={}){let{canvas:t=Td(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=bn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let y=f,p=new Set([ic,nc,tc]),m=new Set([bn,ni,da,fa,Ko,Qo]),A=new Uint32Array(4),S=new Int32Array(4),v=new Z,M=null,w=null,L=[],_=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,z=!1,G=null,se=null,k=null,$=null;this._outputColorSpace=Yt;let le=0,ce=0,ae=null,q=-1,J=null,U=new Pt,Q=new Pt,F=null,W=new ot(0),X=0,D=t.width,E=t.height,b=1,C=null,P=null,N=new Pt(0,0,D,E),Y=new Pt(0,0,D,E),ee=!1,V=new aa,ne=!1,re=!1,H=new vt,j=new Z,ge=new Pt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function Te(){return ae===null?b:1}let B=i;function Ve(T,K){return t.getContext(T,K)}let De,I,x,ie,oe,fe,Me,Ee,ve,Ae,we,He,Le,Re,Xe,Je,it,te,Ie,_e,Pe,Ne,Se;try{let T={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",En,!1),B===null){let K="webgl2";if(B=Ve(K,T),B===null)throw Ve(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(T){throw t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",En,!1),et("WebGLRenderer: "+T.message),T}function Ye(){De=new qv(B),De.init(),Pe=new Px(B,De),I=new Uv(B,De,e,Pe),x=new Rx(B,De),I.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),se=B.createFramebuffer(),k=B.createFramebuffer(),$=B.createFramebuffer(),ie=new Yv(B),oe=new mx,fe=new Ix(B,De,x,oe,I,Pe,ie),Me=new Wv(O),Ee=new Jm(B),Ne=new Nv(B,Ee),ve=new $v(B,Ee,ie,Ne),Ae=new Jv(B,ve,Ee,Ne,ie),te=new Zv(B,I,fe),Xe=new Ov(oe),we=new px(O,Me,De,I,Ne,Xe),He=new Ux(O,oe),Le=new vx,Re=new Sx(De),it=new Lv(O,Me,x,Ae,g,c),Je=new Cx(O,Ae,I),Se=new Ox(B,ie,I,x),Ie=new Dv(B,De,ie),_e=new Xv(B,De,ie),ie.programs=we.programs,O.capabilities=I,O.extensions=De,O.properties=oe,O.renderLists=Le,O.shadowMap=Je,O.state=x,O.info=ie}y!==bn&&(R=new Kv(y,t.width,t.height,o,s,a));let We=new Fu(O,B);this.xr=We,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=De.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=De.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return b},this.setPixelRatio=function(T){T!==void 0&&(b=T,this.setSize(D,E,!1))},this.getSize=function(T){return T.set(D,E)},this.setSize=function(T,K,pe=!0){if(We.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}D=T,E=K,t.width=Math.floor(T*b),t.height=Math.floor(K*b),pe===!0&&(t.style.width=T+"px",t.style.height=K+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,T,K)},this.getDrawingBufferSize=function(T){return T.set(D*b,E*b).floor()},this.setDrawingBufferSize=function(T,K,pe){D=T,E=K,b=pe,t.width=Math.floor(T*pe),t.height=Math.floor(K*pe),this.setViewport(0,0,T,K)},this.setEffects=function(T){if(y===bn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let K=0;K<T.length;K++)if(T[K].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,K,pe,ue){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,K,pe,ue),x.viewport(U.copy(N).multiplyScalar(b).round())},this.getScissor=function(T){return T.copy(Y)},this.setScissor=function(T,K,pe,ue){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,K,pe,ue),x.scissor(Q.copy(Y).multiplyScalar(b).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(T){x.setScissorTest(ee=T)},this.setOpaqueSort=function(T){C=T},this.setTransparentSort=function(T){P=T},this.getClearColor=function(T){return T.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(T=!0,K=!0,pe=!0){let ue=0;if(T){let he=!1;if(ae!==null){let Fe=ae.texture.format;he=p.has(Fe)}if(he){let Fe=ae.texture.type,Ge=m.has(Fe),Oe=it.getClearColor(),qe=it.getClearAlpha(),Ze=Oe.r,lt=Oe.g,ft=Oe.b;Ge?(A[0]=Ze,A[1]=lt,A[2]=ft,A[3]=qe,B.clearBufferuiv(B.COLOR,0,A)):(S[0]=Ze,S[1]=lt,S[2]=ft,S[3]=qe,B.clearBufferiv(B.COLOR,0,S))}else ue|=B.COLOR_BUFFER_BIT}K&&(ue|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(ue|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&B.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),G=T},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",En,!1),it.dispose(),Le.dispose(),Re.dispose(),oe.dispose(),Me.dispose(),Ae.dispose(),Ne.dispose(),Se.dispose(),we.dispose(),We.dispose(),We.removeEventListener("sessionstart",Ht),We.removeEventListener("sessionend",Qt),Bt.stop()};function yt(T){T.preventDefault(),gu("WebGLRenderer: Context Lost."),z=!0}function mt(){gu("WebGLRenderer: Context Restored."),z=!1;let T=ie.autoReset,K=Je.enabled,pe=Je.autoUpdate,ue=Je.needsUpdate,he=Je.type;Ye(),ie.autoReset=T,Je.enabled=K,Je.autoUpdate=pe,Je.needsUpdate=ue,Je.type=he}function En(T){et("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Fn(T){let K=T.target;K.removeEventListener("dispose",Fn),fn(K)}function fn(T){xe(T),oe.remove(T)}function xe(T){let K=oe.get(T).programs;K!==void 0&&(K.forEach(function(pe){we.releaseProgram(pe)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,K,pe,ue,he,Fe){K===null&&(K=ye);let Ge=he.isMesh&&he.matrixWorld.determinantAffine()<0,Oe=ls(T,K,pe,ue,he);x.setMaterial(ue,Ge);let qe=pe.index,Ze=1;if(ue.wireframe===!0){if(qe=ve.getWireframeAttribute(pe),qe===void 0)return;Ze=2}let lt=pe.drawRange,ft=pe.attributes.position,$e=lt.start*Ze,At=(lt.start+lt.count)*Ze;Fe!==null&&($e=Math.max($e,Fe.start*Ze),At=Math.min(At,(Fe.start+Fe.count)*Ze)),qe!==null?($e=Math.max($e,0),At=Math.min(At,qe.count)):ft!=null&&($e=Math.max($e,0),At=Math.min(At,ft.count));let zt=At-$e;if(zt<0||zt===1/0)return;Ne.setup(he,ue,Oe,pe,qe);let wt,Tt=Ie;if(qe!==null&&(wt=Ee.get(qe),Tt=_e,Tt.setIndex(wt)),he.isMesh)ue.wireframe===!0?(x.setLineWidth(ue.wireframeLinewidth*Te()),Tt.setMode(B.LINES)):Tt.setMode(B.TRIANGLES);else if(he.isLine){let ln=ue.linewidth;ln===void 0&&(ln=1),x.setLineWidth(ln*Te()),he.isLineSegments?Tt.setMode(B.LINES):he.isLineLoop?Tt.setMode(B.LINE_LOOP):Tt.setMode(B.LINE_STRIP)}else he.isPoints?Tt.setMode(B.POINTS):he.isSprite&&Tt.setMode(B.TRIANGLES);if(he.isBatchedMesh)if(De.get("WEBGL_multi_draw"))Tt.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{let ln=he._multiDrawStarts,ke=he._multiDrawCounts,pn=he._multiDrawCount,xt=qe?Ee.get(qe).bytesPerElement:1,Vn=oe.get(ue).currentProgram.getUniforms();for(let oi=0;oi<pn;oi++)Vn.setValue(B,"_gl_DrawID",oi),Tt.render(ln[oi]/xt,ke[oi])}else if(he.isInstancedMesh)Tt.renderInstances($e,zt,he.count);else if(pe.isInstancedBufferGeometry){let ln=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,ke=Math.min(pe.instanceCount,ln);Tt.renderInstances($e,zt,ke)}else Tt.render($e,zt)};function je(T,K,pe,ue){G!==null&&T.isNodeMaterial&&G.setObject(ue,T),ne===!0&&Xe.setState(T,pe,!1),T.transparent===!0&&T.side===fi&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,It(T,K,ue),T.side=Ji,T.needsUpdate=!0,It(T,K,ue),T.side=fi):It(T,K,ue)}this.compile=function(T,K,pe=null){pe===null&&(pe=T),G!==null&&G.renderStart(T,K,pe),w=Re.get(pe),w.init(K),_.push(w),pe.traverseVisible(function(he){he.isLight&&he.layers.test(K.layers)&&(w.pushLight(he),he.castShadow&&w.pushShadow(he))}),T!==pe&&T.traverseVisible(function(he){he.isLight&&he.layers.test(K.layers)&&(w.pushLight(he),he.castShadow&&w.pushShadow(he))}),w.setupLights(),G!==null&&G.updateLights(w.state.lightsArray),re=this.localClippingEnabled,ne=Xe.init(this.clippingPlanes,re),ne===!0&&Xe.setGlobalState(this.clippingPlanes,K),G!==null&&Je.render(w.state.shadowsArray,pe,K);let ue=new Set;return T.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;let Fe=he.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){let Oe=Fe[Ge];je(Oe,pe,K,he),ue.add(Oe)}else je(Fe,pe,K,he),ue.add(Fe)}),w=_.pop(),G!==null&&G.renderEnd(),ue},this.compileAsync=function(T,K,pe=null){let ue=this.compile(T,K,pe);return new Promise(he=>{function Fe(){if(ue.forEach(function(Ge){let qe=oe.get(Ge).currentProgram;(qe===void 0||qe.isReady())&&ue.delete(Ge)}),ue.size===0){he(T);return}setTimeout(Fe,10)}De.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let at=null;function gt(T){at&&at(T)}function Ht(){Bt.stop()}function Qt(){Bt.start()}let Bt=new af;Bt.setAnimationLoop(gt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(T){at=T,We.setAnimationLoop(T),T===null?Bt.stop():Bt.start()},We.addEventListener("sessionstart",Ht),We.addEventListener("sessionend",Qt),this.render=function(T,K){if(K!==void 0&&K.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;G!==null&&G.renderStart(T,K);let pe=We.enabled===!0&&We.isPresenting===!0,ue=R!==null&&(ae===null||pe)&&R.begin(O,ae);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(K),K=We.getCamera()),T.isScene===!0&&T.onBeforeRender(O,T,K,ae),w=Re.get(T,_.length),w.init(K),w.state.textureUnits=fe.getTextureUnits(),_.push(w),H.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),V.setFromProjectionMatrix(H,ei,K.reversedDepth),re=this.localClippingEnabled,ne=Xe.init(this.clippingPlanes,re),M=Le.get(T,L.length),M.init(),L.push(M),We.enabled===!0&&We.isPresenting===!0){let Ge=O.xr.getDepthSensingMesh();Ge!==null&&en(Ge,K,-1/0,O.sortObjects)}en(T,K,0,O.sortObjects),M.finish(),G!==null&&G.updateLights(w.state.lightsArray),O.sortObjects===!0&&M.sort(C,P),be=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,be&&it.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&Xe.beginShadows();let he=w.state.shadowsArray;if(Je.render(he,T,K),ne===!0&&Xe.endShadows(),(ue&&R.hasRenderPass())===!1){let Ge=M.opaque,Oe=M.transmissive;if(w.setupLights(),K.isArrayCamera){let qe=K.cameras;if(Oe.length>0)for(let Ze=0,lt=qe.length;Ze<lt;Ze++){let ft=qe[Ze];ct(Ge,Oe,T,ft)}be&&it.render(T);for(let Ze=0,lt=qe.length;Ze<lt;Ze++){let ft=qe[Ze];rt(M,T,ft,ft.viewport)}}else Oe.length>0&&ct(Ge,Oe,T,K),be&&it.render(T),rt(M,T,K)}ae!==null&&ce===0&&(fe.updateMultisampleRenderTarget(ae),fe.updateRenderTargetMipmap(ae)),ue&&R.end(O),T.isScene===!0&&T.onAfterRender(O,T,K),Ne.resetDefaultState(),q=-1,J=null,_.pop(),_.length>0?(w=_[_.length-1],fe.setTextureUnits(w.state.textureUnits),ne===!0&&Xe.setGlobalState(O.clippingPlanes,w.state.camera)):w=null,L.pop(),L.length>0?M=L[L.length-1]:M=null,G!==null&&G.renderEnd()};function en(T,K,pe,ue){if(T.visible===!1)return;if(T.layers.test(K.layers)){if(T.isGroup)pe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(K);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(V)){ue&&ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(H);let Ge=Ae.update(T),Oe=T.material;Oe.visible&&M.push(T,Ge,Oe,pe,ge.z,null,K)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(V))){let Ge=Ae.update(T),Oe=T.material;if(ue&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ge.copy(T.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),ge.copy(Ge.boundingSphere.center)),ge.applyMatrix4(T.matrixWorld).applyMatrix4(H)),Array.isArray(Oe)){let qe=Ge.groups;for(let Ze=0,lt=qe.length;Ze<lt;Ze++){let ft=qe[Ze],$e=Oe[ft.materialIndex];$e&&$e.visible&&M.push(T,Ge,$e,pe,ge.z,ft,K)}}else Oe.visible&&M.push(T,Ge,Oe,pe,ge.z,null,K)}}let Fe=T.children;for(let Ge=0,Oe=Fe.length;Ge<Oe;Ge++)en(Fe[Ge],K,pe,ue)}function rt(T,K,pe,ue){let{opaque:he,transmissive:Fe,transparent:Ge}=T;w.setupLightsView(pe),ne===!0&&Xe.setGlobalState(O.clippingPlanes,pe),ue&&x.viewport(U.copy(ue)),he.length>0&&_t(he,K,pe),Fe.length>0&&_t(Fe,K,pe),Ge.length>0&&_t(Ge,K,pe),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function ct(T,K,pe,ue){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ue.id]===void 0){let $e=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ue.id]=new Mn(1,1,{generateMipmaps:!0,type:$e?ii:bn,minFilter:Ki,samples:Math.max(4,I.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let Fe=w.state.transmissionRenderTarget[ue.id],Ge=ue.viewport||U;Fe.setSize(Ge.z*O.transmissionResolutionScale,Ge.w*O.transmissionResolutionScale);let Oe=O.getRenderTarget(),qe=O.getActiveCubeFace(),Ze=O.getActiveMipmapLevel();O.setRenderTarget(Fe),O.getClearColor(W),X=O.getClearAlpha(),X<1&&O.setClearColor(16777215,.5),O.clear(),be&&it.render(pe);let lt=O.toneMapping;O.toneMapping=ti;let ft=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),w.setupLightsView(ue),ne===!0&&Xe.setGlobalState(O.clippingPlanes,ue),_t(T,pe,ue),fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe),De.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let At=0,zt=K.length;At<zt;At++){let wt=K[At],{object:Tt,geometry:ln,material:ke,group:pn}=wt;if(ke.side===fi&&Tt.layers.test(ue.layers)){let xt=ke.side;ke.side=rn,ke.needsUpdate=!0,Rt(Tt,pe,ue,ln,ke,pn),ke.side=xt,ke.needsUpdate=!0,$e=!0}}$e===!0&&(fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe))}O.setRenderTarget(Oe,qe,Ze),O.setClearColor(W,X),ft!==void 0&&(ue.viewport=ft),O.toneMapping=lt}function _t(T,K,pe){let ue=K.isScene===!0?K.overrideMaterial:null;for(let he=0,Fe=T.length;he<Fe;he++){let Ge=T[he],{object:Oe,geometry:qe,group:Ze}=Ge,lt=Ge.material;lt.allowOverride===!0&&ue!==null&&(lt=ue),Oe.layers.test(pe.layers)&&Rt(Oe,K,pe,qe,lt,Ze)}}function Rt(T,K,pe,ue,he,Fe){G!==null&&he.isNodeMaterial&&G.setObject(T,he),T.onBeforeRender(O,K,pe,ue,he,Fe),T.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),he.onBeforeRender(O,K,pe,ue,T,Fe),he.transparent===!0&&he.side===fi&&he.forceSinglePass===!1?(he.side=rn,he.needsUpdate=!0,O.renderBufferDirect(pe,K,ue,he,T,Fe),he.side=Ji,he.needsUpdate=!0,O.renderBufferDirect(pe,K,ue,he,T,Fe),he.side=fi):O.renderBufferDirect(pe,K,ue,he,T,Fe),T.onAfterRender(O,K,pe,ue,he,Fe)}function It(T,K,pe){K.isScene!==!0&&(K=ye);let ue=oe.get(T),he=w.state.lights,Fe=w.state.shadowsArray,Ge=he.state.version,Oe=we.getParameters(T,he.state,Fe,K,pe,w.state.lightProbeGridArray),qe=we.getProgramCacheKey(Oe),Ze=ue.programs;ue.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?K.environment:null,ue.fog=K.fog;let lt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ue.envMap=Me.get(T.envMap||ue.environment,lt),ue.envMapRotation=ue.environment!==null&&T.envMap===null?K.environmentRotation:T.envMapRotation,Ze===void 0&&(T.addEventListener("dispose",Fn),Ze=new Map,ue.programs=Ze);let ft=Ze.get(qe);if(ft!==void 0){if(ue.currentProgram===ft&&ue.lightsStateVersion===Ge)return wn(T,Oe),ft}else Oe.uniforms=we.getUniforms(T),G!==null&&T.isNodeMaterial&&G.build(T,pe,Oe),T.onBeforeCompile(Oe,O),ft=we.acquireProgram(Oe,qe),Ze.set(qe,ft),ue.uniforms=Oe.uniforms;let $e=ue.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($e.clippingPlanes=Xe.uniform),wn(T,Oe),ue.needsLights=cn(T),ue.lightsStateVersion=Ge,ue.needsLights&&($e.ambientLightColor.value=he.state.ambient,$e.lightProbe.value=he.state.probe,$e.sunLights.value=he.state.sun,$e.sunLightShadows.value=he.state.sunShadow,$e.directionalLights.value=he.state.directional,$e.directionalLightShadows.value=he.state.directionalShadow,$e.spotLights.value=he.state.spot,$e.spotLightShadows.value=he.state.spotShadow,$e.rectAreaLights.value=he.state.rectArea,$e.ltc_1.value=he.state.rectAreaLTC1,$e.ltc_2.value=he.state.rectAreaLTC2,$e.pointLights.value=he.state.point,$e.pointLightShadows.value=he.state.pointShadow,$e.hemisphereLights.value=he.state.hemi,$e.sunShadowMatrix.value=he.state.sunShadowMatrix,$e.sunShadowCascade.value=he.state.sunShadowCascade,$e.directionalShadowMatrix.value=he.state.directionalShadowMatrix,$e.spotLightMatrix.value=he.state.spotLightMatrix,$e.spotLightMap.value=he.state.spotLightMap,$e.pointShadowMatrix.value=he.state.pointShadowMatrix),ue.lightProbeGrid=w.state.lightProbeGridArray.length>0,ue.currentProgram=ft,ue.uniformsList=null,ft}function Bn(T){if(T.uniformsList===null){let K=T.currentProgram.getUniforms();T.uniformsList=ga.seqWithValue(K.seq,T.uniforms)}return T.uniformsList}function wn(T,K){let pe=oe.get(T);pe.outputColorSpace=K.outputColorSpace,pe.batching=K.batching,pe.batchingColor=K.batchingColor,pe.instancing=K.instancing,pe.instancingColor=K.instancingColor,pe.instancingMorph=K.instancingMorph,pe.skinning=K.skinning,pe.morphTargets=K.morphTargets,pe.morphNormals=K.morphNormals,pe.morphColors=K.morphColors,pe.morphTargetsCount=K.morphTargetsCount,pe.numClippingPlanes=K.numClippingPlanes,pe.numIntersection=K.numClipIntersection,pe.vertexAlphas=K.vertexAlphas,pe.vertexTangents=K.vertexTangents,pe.toneMapping=K.toneMapping}function zn(T,K){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(K.matrixWorld);for(let pe=0,ue=T.length;pe<ue;pe++){let he=T[pe];if(he.texture!==null&&he.boundingBox.containsPoint(v))return he}return null}function ls(T,K,pe,ue,he){K.isScene!==!0&&(K=ye),fe.resetTextureUnits();let Fe=K.fog,Ge=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?K.environment:null,Oe=ae===null?O.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:pt.workingColorSpace,qe=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,Ze=Me.get(ue.envMap||Ge,qe),lt=ue.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,ft=!!pe.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),$e=!!pe.morphAttributes.position,At=!!pe.morphAttributes.normal,zt=!!pe.morphAttributes.color,wt=ti;ue.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(wt=O.toneMapping);let Tt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,ln=Tt!==void 0?Tt.length:0,ke=oe.get(ue),pn=w.state.lights;if(ne===!0&&(re===!0||T!==J)){let Et=T===J&&ue.id===q;Xe.setState(ue,T,Et)}let xt=!1;ue.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==pn.state.version||ke.outputColorSpace!==Oe||he.isBatchedMesh&&ke.batching===!1||!he.isBatchedMesh&&ke.batching===!0||he.isBatchedMesh&&ke.batchingColor===!0&&he._colorsTexture===null||he.isBatchedMesh&&ke.batchingColor===!1&&he._colorsTexture!==null||he.isInstancedMesh&&ke.instancing===!1||!he.isInstancedMesh&&ke.instancing===!0||he.isSkinnedMesh&&ke.skinning===!1||!he.isSkinnedMesh&&ke.skinning===!0||he.isInstancedMesh&&ke.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&ke.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&ke.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&ke.instancingMorph===!1&&he.morphTexture!==null||ke.envMap!==Ze||ue.fog===!0&&ke.fog!==Fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Xe.numPlanes||ke.numIntersection!==Xe.numIntersection)||ke.vertexAlphas!==lt||ke.vertexTangents!==ft||ke.morphTargets!==$e||ke.morphNormals!==At||ke.morphColors!==zt||ke.toneMapping!==wt||ke.morphTargetsCount!==ln||!!ke.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,ke.__version=ue.version);let Vn=ke.currentProgram;xt===!0&&(Vn=It(ue,K,he),G&&ue.isNodeMaterial&&G.onUpdateProgram(ue,Vn,ke));let oi=!1,Ui=!1,Ls=!1,St=Vn.getUniforms(),Dt=ke.uniforms;if(x.useProgram(Vn.program)&&(oi=!0,Ui=!0,Ls=!0),ue.id!==q&&(q=ue.id,Ui=!0),ke.needsLights){let Et=zn(w.state.lightProbeGridArray,he);ke.lightProbeGrid!==Et&&(ke.lightProbeGrid=Et,Ui=!0)}if(oi||J!==T){x.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),St.setValue(B,"projectionMatrix",T.projectionMatrix),St.setValue(B,"viewMatrix",T.matrixWorldInverse);let Fi=St.map.cameraPosition;Fi!==void 0&&Fi.setValue(B,j.setFromMatrixPosition(T.matrixWorld)),I.logarithmicDepthBuffer&&St.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&St.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,Ui=!0,Ls=!0)}if(ke.needsLights&&(pn.state.sunShadowMap.length>0&&St.setValue(B,"sunShadowMap",pn.state.sunShadowMap,fe),pn.state.directionalShadowMap.length>0&&St.setValue(B,"directionalShadowMap",pn.state.directionalShadowMap,fe),pn.state.spotShadowMap.length>0&&St.setValue(B,"spotShadowMap",pn.state.spotShadowMap,fe),pn.state.pointShadowMap.length>0&&St.setValue(B,"pointShadowMap",pn.state.pointShadowMap,fe)),he.isSkinnedMesh){St.setOptional(B,he,"bindMatrix"),St.setOptional(B,he,"bindMatrixInverse");let Et=he.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),St.setValue(B,"boneTexture",Et.boneTexture,fe))}he.isBatchedMesh&&(St.setOptional(B,he,"batchingTexture"),St.setValue(B,"batchingTexture",he._matricesTexture,fe),St.setOptional(B,he,"batchingIdTexture"),St.setValue(B,"batchingIdTexture",he._indirectTexture,fe),St.setOptional(B,he,"batchingColorTexture"),he._colorsTexture!==null&&St.setValue(B,"batchingColorTexture",he._colorsTexture,fe));let Oi=pe.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&te.update(he,pe,Vn),(Ui||ke.receiveShadow!==he.receiveShadow)&&(ke.receiveShadow=he.receiveShadow,St.setValue(B,"receiveShadow",he.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&K.environment!==null&&(Dt.envMapIntensity.value=K.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=Bx()),Ui){if(St.setValue(B,"toneMappingExposure",O.toneMappingExposure),ke.needsLights&&Zn(Dt,Ls),Fe&&ue.fog===!0&&He.refreshFogUniforms(Dt,Fe),He.refreshMaterialUniforms(Dt,ue,b,E,w.state.transmissionRenderTarget[T.id]),ke.needsLights&&ke.lightProbeGrid){let Et=ke.lightProbeGrid;Dt.probesSH.value=Et.texture,Dt.probesMin.value.copy(Et.boundingBox.min),Dt.probesMax.value.copy(Et.boundingBox.max),Dt.probesResolution.value.copy(Et.resolution)}ga.upload(B,Bn(ke),Dt,fe)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(ga.upload(B,Bn(ke),Dt,fe),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&St.setValue(B,"center",he.center),St.setValue(B,"modelViewMatrix",he.modelViewMatrix),St.setValue(B,"normalMatrix",he.normalMatrix),St.setValue(B,"modelMatrix",he.matrixWorld),ue.uniformsGroups!==void 0){let Et=ue.uniformsGroups;for(let Fi=0,Ns=Et.length;Fi<Ns;Fi++){let dh=Et[Fi];Se.update(dh,Vn),Se.bind(dh,Vn)}}return Vn}function Zn(T,K){T.ambientLightColor.needsUpdate=K,T.lightProbe.needsUpdate=K,T.sunLights.needsUpdate=K,T.sunLightShadows.needsUpdate=K,T.directionalLights.needsUpdate=K,T.directionalLightShadows.needsUpdate=K,T.pointLights.needsUpdate=K,T.pointLightShadows.needsUpdate=K,T.spotLights.needsUpdate=K,T.spotLightShadows.needsUpdate=K,T.rectAreaLights.needsUpdate=K,T.hemisphereLights.needsUpdate=K}function cn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(T,K,pe){let ue=oe.get(T);ue.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),oe.get(T.texture).__webglTexture=K,oe.get(T.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:pe,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,K){let pe=oe.get(T);pe.__webglFramebuffer=K,pe.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(T,K=0,pe=0){ae=T,le=K,ce=pe;let ue=null,he=!1,Fe=!1;if(T){let Oe=oe.get(T);if(Oe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(B.FRAMEBUFFER,Oe.__webglFramebuffer),U.copy(T.viewport),Q.copy(T.scissor),F=T.scissorTest,x.viewport(U),x.scissor(Q),x.setScissorTest(F),q=-1;return}else if(Oe.__webglFramebuffer===void 0)fe.setupRenderTarget(T);else if(Oe.__hasExternalTextures)fe.rebindTextures(T,oe.get(T.texture).__webglTexture,oe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let lt=T.depthTexture;if(Oe.__boundDepthTexture!==lt){if(lt!==null&&oe.has(lt)&&(T.width!==lt.image.width||T.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(T)}}let qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Fe=!0);let Ze=oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ze[K])?ue=Ze[K][pe]:ue=Ze[K],he=!0):T.samples>0&&fe.useMultisampledRTT(T)===!1?ue=oe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ze)?ue=Ze[pe]:ue=Ze,U.copy(T.viewport),Q.copy(T.scissor),F=T.scissorTest}else U.copy(N).multiplyScalar(b).floor(),Q.copy(Y).multiplyScalar(b).floor(),F=ee;if(pe!==0&&(ue=se),x.bindFramebuffer(B.FRAMEBUFFER,ue)&&x.drawBuffers(T,ue),x.viewport(U),x.scissor(Q),x.setScissorTest(F),he){let Oe=oe.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,Oe.__webglTexture,pe)}else if(Fe){let Oe=K;for(let qe=0;qe<T.textures.length;qe++){let Ze=oe.get(T.textures[qe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+qe,Ze.__webglTexture,pe,Oe)}}else if(T!==null&&pe!==0){let Oe=oe.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oe.__webglTexture,pe)}q=-1};function Ps(T){let K=oe.get(T);return(K.__readFormat!==T.format||K.__readType!==T.type)&&(K.__readFormat=T.format,K.__readType=T.type,K.__formatReadable=I.textureFormatReadable(T.format),K.__typeReadable=I.textureTypeReadable(T.type)),K}this.readRenderTargetPixels=function(T,K,pe,ue,he,Fe,Ge,Oe=0){if(!(T&&T.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe){x.bindFramebuffer(B.FRAMEBUFFER,qe);try{let Ze=T.textures[Oe],lt=Ze.format,ft=Ze.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Oe);let $e=Ps(Ze);if($e.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=T.width-ue&&pe>=0&&pe<=T.height-he&&B.readPixels(K,pe,ue,he,Pe.convert(lt),Pe.convert(ft),Fe)}finally{let Ze=ae!==null?oe.get(ae).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(T,K,pe,ue,he,Fe,Ge,Oe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe)if(K>=0&&K<=T.width-ue&&pe>=0&&pe<=T.height-he){x.bindFramebuffer(B.FRAMEBUFFER,qe);let Ze=T.textures[Oe],lt=Ze.format,ft=Ze.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Oe);let $e=Ps(Ze);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let At=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,At),B.bufferData(B.PIXEL_PACK_BUFFER,Fe.byteLength,B.STREAM_READ),B.readPixels(K,pe,ue,he,Pe.convert(lt),Pe.convert(ft),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let zt=ae!==null?oe.get(ae).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,zt);let wt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await wd(B,wt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,At),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Fe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(At),B.deleteSync(wt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,K=null,pe=0){let ue=Math.pow(2,-pe),he=Math.floor(T.image.width*ue),Fe=Math.floor(T.image.height*ue),Ge=K!==null?K.x:0,Oe=K!==null?K.y:0;fe.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,pe,0,0,Ge,Oe,he,Fe),x.unbindTexture()},this.copyTextureToTexture=function(T,K,pe=null,ue=null,he=0,Fe=0){let Ge,Oe,qe,Ze,lt,ft,$e,At,zt,wt=T.isCompressedTexture?T.mipmaps[Fe]:T.image;if(pe!==null)Ge=pe.max.x-pe.min.x,Oe=pe.max.y-pe.min.y,qe=pe.isBox3?pe.max.z-pe.min.z:1,Ze=pe.min.x,lt=pe.min.y,ft=pe.isBox3?pe.min.z:0;else{let Dt=Math.pow(2,-he);Ge=Math.floor(wt.width*Dt),Oe=Math.floor(wt.height*Dt),T.isDataArrayTexture?qe=wt.depth:T.isData3DTexture?qe=Math.floor(wt.depth*Dt):qe=1,Ze=0,lt=0,ft=0}ue!==null?($e=ue.x,At=ue.y,zt=ue.z):($e=0,At=0,zt=0);let Tt=Pe.convert(K.format),ln=Pe.convert(K.type),ke;K.isData3DTexture?(fe.setTexture3D(K,0),ke=B.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(fe.setTexture2DArray(K,0),ke=B.TEXTURE_2D_ARRAY):(fe.setTexture2D(K,0),ke=B.TEXTURE_2D),x.activeTexture(B.TEXTURE0),x.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),x.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),x.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);let pn=x.getParameter(B.UNPACK_ROW_LENGTH),xt=x.getParameter(B.UNPACK_IMAGE_HEIGHT),Vn=x.getParameter(B.UNPACK_SKIP_PIXELS),oi=x.getParameter(B.UNPACK_SKIP_ROWS),Ui=x.getParameter(B.UNPACK_SKIP_IMAGES);x.pixelStorei(B.UNPACK_ROW_LENGTH,wt.width),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,wt.height),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Ze),x.pixelStorei(B.UNPACK_SKIP_ROWS,lt),x.pixelStorei(B.UNPACK_SKIP_IMAGES,ft);let Ls=T.isDataArrayTexture||T.isData3DTexture,St=K.isDataArrayTexture||K.isData3DTexture;if(T.isDepthTexture){let Dt=oe.get(T),Oi=oe.get(K),Et=oe.get(Dt.__renderTarget),Fi=oe.get(Oi.__renderTarget);x.bindFramebuffer(B.READ_FRAMEBUFFER,Et.__webglFramebuffer),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Ns=0;Ns<qe;Ns++)Ls&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,oe.get(T).__webglTexture,he,ft+Ns),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,oe.get(K).__webglTexture,Fe,zt+Ns)),B.blitFramebuffer(Ze,lt,Ge,Oe,$e,At,Ge,Oe,B.DEPTH_BUFFER_BIT,B.NEAREST);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(he!==0||T.isRenderTargetTexture||oe.has(T)){let Dt=oe.get(T),Oi=oe.get(K);x.bindFramebuffer(B.READ_FRAMEBUFFER,k),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,$);for(let Et=0;Et<qe;Et++)Ls?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.__webglTexture,he,ft+Et):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Dt.__webglTexture,he),St?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oi.__webglTexture,Fe,zt+Et):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oi.__webglTexture,Fe),he!==0?B.blitFramebuffer(Ze,lt,Ge,Oe,$e,At,Ge,Oe,B.COLOR_BUFFER_BIT,B.NEAREST):St?B.copyTexSubImage3D(ke,Fe,$e,At,zt+Et,Ze,lt,Ge,Oe):B.copyTexSubImage2D(ke,Fe,$e,At,Ze,lt,Ge,Oe);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else St?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(ke,Fe,$e,At,zt,Ge,Oe,qe,Tt,ln,wt.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(ke,Fe,$e,At,zt,Ge,Oe,qe,Tt,wt.data):B.texSubImage3D(ke,Fe,$e,At,zt,Ge,Oe,qe,Tt,ln,wt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Fe,$e,At,Ge,Oe,Tt,ln,wt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Fe,$e,At,wt.width,wt.height,Tt,wt.data):B.texSubImage2D(B.TEXTURE_2D,Fe,$e,At,Ge,Oe,Tt,ln,wt);x.pixelStorei(B.UNPACK_ROW_LENGTH,pn),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xt),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Vn),x.pixelStorei(B.UNPACK_SKIP_ROWS,oi),x.pixelStorei(B.UNPACK_SKIP_IMAGES,Ui),Fe===0&&K.generateMipmaps&&B.generateMipmap(ke),x.unbindTexture()},this.initRenderTarget=function(T){oe.get(T).__webglFramebuffer===void 0&&fe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?fe.setTextureCube(T,0):T.isData3DTexture?fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?fe.setTexture2DArray(T,0):fe.setTexture2D(T,0),x.unbindTexture()},this.resetState=function(){le=0,ce=0,ae=null,x.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var Gc=class extends gs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ri;e.deleteAttribute("uv");let t=new Ln({side:rn}),i=new Ln,s=new dr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let a=new bt(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let r=new vs(e,i,6),o=new an;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let c=new bt(e,_a(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new bt(e,_a(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new bt(e,_a(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new bt(e,_a(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new bt(e,_a(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new bt(e,_a(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function _a(n){return new or({color:0,emissive:16777215,emissiveIntensity:n})}function ff(n,e=Math.PI/3){let t=n.index?n.toNonIndexed():n,i=t.attributes.position,s=i.count,a;if(i.isBufferAttribute===!0&&i.itemSize===3&&i.normalized===!1)a=i.array;else{a=new Float64Array(s*3);for(let v=0;v<s;v++)a[3*v+0]=i.getX(v),a[3*v+1]=i.getY(v),a[3*v+2]=i.getZ(v)}let r=Math.cos(e),o=(1+1e-10)*100,c=s/3,l=new Float64Array(c*3);for(let v=0;v<c;v++){let M=9*v,w=a[M+0],L=a[M+1],_=a[M+2],R=a[M+3],O=a[M+4],z=a[M+5],G=a[M+6],se=a[M+7],k=a[M+8],$=G-R,le=se-O,ce=k-z,ae=w-R,q=L-O,J=_-z,U=le*J-ce*q,Q=ce*ae-$*J,F=$*q-le*ae,W=1/(Math.sqrt(U*U+Q*Q+F*F)||1);l[3*v+0]=U*W,l[3*v+1]=Q*W,l[3*v+2]=F*W}let u=new Int32Array(s),d=new Float64Array(s*3),h=1;for(;h<s*2;)h<<=1;let f=h-1,g=new Int32Array(h),y=0;for(let v=0;v<s;v++){let M=3*v,w=Math.trunc(a[M+0]*o),L=Math.trunc(a[M+1]*o),_=Math.trunc(a[M+2]*o),R=(Math.imul(w,73856093)^Math.imul(L,19349663)^Math.imul(_,83492791))&f;for(;;){let O=g[R];if(O===0){let G=3*y;d[G+0]=w,d[G+1]=L,d[G+2]=_,g[R]=y+1,u[v]=y++;break}let z=3*(O-1);if(d[z+0]===w&&d[z+1]===L&&d[z+2]===_){u[v]=O-1;break}R=R+1&f}}let p=new Int32Array(y+1);for(let v=0;v<s;v++)p[u[v]+1]++;for(let v=0;v<y;v++)p[v+1]+=p[v];let m=new Int32Array(s),A=p.slice(0,y);for(let v=0;v<c;v++){let M=3*v;m[A[u[M+0]]++]=v,m[A[u[M+1]]++]=v,m[A[u[M+2]]++]=v}let S=new Float32Array(s*3);for(let v=0;v<c;v++){let M=3*v,w=l[M+0],L=l[M+1],_=l[M+2];for(let R=0;R<3;R++){let O=M+R,z=u[O],G=0,se=0,k=0;for(let le=p[z],ce=p[z+1];le<ce;le++){let ae=3*m[le],q=l[ae+0],J=l[ae+1],U=l[ae+2];w*q+L*J+_*U>r&&(G+=q,se+=J,k+=U)}let $=1/(Math.sqrt(G*G+se*se+k*k)||1);S[3*O+0]=G*$,S[3*O+1]=se*$,S[3*O+2]=k*$}}return t.setAttribute("normal",new gn(S,3,!1)),t}var pf="data:font/woff2;base64,d09GMgABAAAAAFVIABAAAAAA4dAAAFTlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGoEOG4ZQHIGacgZgP1NUQVRMAIUiEQgKgdw0gatRC4YWAAE2AiQDjBoEIAWFHgejDAwHGzvFF9g2jR5edwJat/qq512YcGPcwHkUJPDRLxiJsFeTlDT7//97cmOISBuo9b29D0jMaWabOaRT1dk911o91ShpCpaEFgxJaH0S06iRh+m6nszGZF+R/bhEUtZFJSYY74eYzJAWGqtUVBV/oTy8IXb44XnbOfLDZsJmus3/kq1Q4v94ooI9ugcest9cLPl7p+fwM3aKSlR3OGjWHj1YCuuKoqsAd34xSRnn8fy72c85NyQhxhBDDClFGmOMacQ0TSlimo1II0bM0pjmYR6PRkQMiJQiRYoYkdKUQsTIrwgsRX6LiDTlUbSUUqTU4ncpZSmPpSzmUZbyWJbyKLI0wA38/7f2n/vcqgZ6XdX8ut9MENQgvW9MkHVs9KhZPuCiRFgYlmEZFZUV6J+/N2fO3VbRFnxR08QaSDpYONYsGIH3C//Q36fn/lg4HAtQNBSNBqQTLXa8HOBuuJsUgx1fdXv57w+AbM6DuYbn59YzKUV00GPDNQzY+v+/YttfNLCA3vb/YAy2EakenFhx2Heip2Bcip6KUXF3NkaeV+olXqh3U3N6vspM2LHxszoAVIIQFDD0cFucQ5MVkxTHXQ9M9kag++CcjrhIO9mhumTySSF7U+Jp98M1jevqAgWmg/zzGDQpMzknJwUat8M1vdikc/88QFYlTckYPQk/oQrAAwA1/tEt/3HCfRPaIBpxAkkINRumtePmQmiMWvG7cHEuHgH+l87qf8lQ1U+yhyA7hog4wwaNe0AwtMReKZFTOwXaZduzkN5xSpUDZcnNv02t9v/50lqyFyR7wd4jexGLZrSogwqwvaKlP39GGvgz0Wg0TkaWKVJgTBvJDsjxgeWx8jSyknO85OSAaWQnWS8rR0AVAPS3RbX99RVxe0XZXX/+o5pZC3yC3sfB4pKdeSFWqXSdeDm3ueg+SHBnJJKrrwFWO85yuJRrB+6sg1ZzgZKddSnKTXOhdVscPNVeZ/fN5Gb2oDtslKNZkdIuyRJSqeNBFVfqJeZTqsS5Uh1IBoXy+H1rJYQHgoqk2LkXK/ZNVU8l292ZDSggkFS/6qAXhEncKZuTMlBtRVI9oJ/xIcviJSIdEblH/Heo2ffJWL5l+bjUwuSLI4jQH+I66R6W3QHqMgpLkG3SmDDlc/QPXxN9knl7Sb86KU04pZllMcIIIz7C/CubNW0kwwImWiDHMrc9eN3vpv20/jAxW7N7c7mtVuwIGKpAFEnu+9XNAQHAZPGXDrMVgg6CgQRCSgoRJBxC4yCElg4iShSEngkiRgxErASI05IhUpyFeNe7EOdkQfzmN4hVq5BOoVNAKBElAaEzKBUIZaFsIJSD3ocAAcBARAHfidAZgfX+iYxUYEEBAF5HkaNbB3TAMKA4BMk/FrYUKWBzwOT09CCD5ekAvGAON3nc1RpTBZ7G5RjD1M3dxmUXyi9bgPJ9RC3aTxT6Oxx1euwC0K/BE9/OSPc3JwD0g0NtjwD7KxecBSOGOeNbwl677LANQJ+7FwIgyALfFYCUBNB8IQEsTvFRzYR1CPAvyBZWASAVfRFIjl4OhQGkaPKlSaByaLcjwfHMywAYGQfDvlgoXOSIjnYhCdqPDqAIdAjp0VEUg2JRPDqJEguTsAAwP9AEDU3mUyN0ACJgGFQ2RRA+g8SSSiMrX1AKgENiRkyQhaVTL0lcsVLQ241T+DzKti6h3Bajo+Lq8kdcXxB8+4BRAIF7wxEBsF+uGMrjQuBlIAokfFicQ7RvL6EezoKipTzYYdKCq+l/iMX5Wvzz2A5a2ZQhmiYDnYGpFi4hswDY6797efHGsgVBgiQp0pBQ0DBlyZaLTwQhpaCmZWBmVcDBpVgZNy+cX62gsEYt2kzR6X3d8th8xK7IVSXKXVOtxnWNmrVo1eYzHe7o0u1r3zjljPMuueJr19w05L6HHnvquR+88Mpvlv2bGzE2AuQQFXkjJmKhLcgX8RAf+aNtSICESITESIJ2oz1IjhQoGIWgUKREKqRGYSgcaVAE0qJIpENRSI8MyIiikQnFoFhkRnEoHr1zJPqIKnLaNGp6YDJFRqrzgbHrcCu/eU+A9s0wYrBq47XsQyt69SFRxLCuK8ISoTs4pR3RDmijD2opHiid5pnmgkanEXJQ6Cl0J7oZTVS/VbeqcdXvqmeqm714tqpdFVD+rfxJXPVerpyijFeOzVvNm583DY5QtGKxEYVdIVQw5HvkH8t7ZM9l12VVMhtiSI9JN8qrQCqWPJCcksgkuYdB5AiyHa56KxEKvBNeCY+EZg3X+yBUBdl5s8T/iV+I54vrRf+JnoluiuwipZqexcHNW3l0x/l1MFpjamJ9WMJqmAxFId2P+V6v9TJ53+p8cqxSOf/1z6VlsS/+L4Hs2zlchhPKuDLqXDHbtivM3D3449Mm2WizZKaj3eiMGmutHtSd5a3Qa/WL82pcFahMxXmRIldkrSyWeZIjqb1XRJ3IFzzxKi/gmZFl0+yR4HYWwYKL6BQdomaqo52Mkz5PEkui8Bwew/HYWDwwbP9+Fm9PmcwvV99c5kiOi2PRmD1KBKyhZ2gdDINmCAkc7rt6ba+suL4F22a7wc7apbqllmznP2RrbZOfHI27mQ3L1Ghsbd1XOzm32j/o1dGqp2oNKZ+TdJRdZXO+nB/o50Q1+WYhhR8/M8BrmMqn/Im3dTUhb0zbCtz3q44hh5vC75V+nTDZp/rqOa6uvzNwgre0x9opPyq3CNjtoWLKDxq2wse1H9xbfeJ9GKzFXe4unsXevLJt2tq3/sz1TeumeKNmijZ1rivWmk1SxtiqdxXFkHtPLu8t071N3lT6/KJ6kbuQ0Fm0nnnDXE0TUYdnXTMLVeflnrqmaV4GL6D8OYkkVnu4u4pfmpUIJaREAHa9tSavhV5neBggKFyGoIpLMCyoFBp9F9mZDAK/PCdQ2GIdqupSo0Edwogw2BLBhZDpLkAfAKKBrObPUH+g9+nHVWVMtAwVL0ro7aeDWcB6/Xoj5vmBNj80348sSO4PgKJMP5hp77zGlNuhHGvkbcDg930gMAViihe+GNtRpjQyOu9N79hr/+XT0FmUjt5FGegcypSyPwrpTKRYEGk1mZyuNwGDBpSA93PgG5TyvhoCPxpLQ5lAy2NLFQxXUByAupXKUuFGmO2BoMrjQsGSp2cqM57MNxWqvkoaBB8fTkFwfgB0xw7oRJJ+DYgpJ8UAD8AibtsC+ITShUzMO9Glflxmepo0E6LQfxSQyHzCjfm+vDDTCSXCnk853gF8IsPuOfNK8Li8yR+QzdgWPro6lwPDAJGw/Gwgjksje8Odj8CmSyr95Z8Y2QZk7Rt4GX7W7ZI4yuyNQHoJx1R3g2lewpEh191t1bt95PW5nAv8vcOf3kGl6rdneroXpLA70zq8IFUrZyrbqnf46DMFOflklRIVbS8w6DncqXDnV/PnlELOz9iqF8Zx50f7Z6bnJ/meRhrBhLstNZz9rov7tnvaR0uGqCTzhPBeGalGRNat7rw6SJPN0zf56CjgkPnTCmUIUyz46wdWtw10mQeEWtmttM3pQ33cbibyocPXocAKTXanwpxQmDsEE68XApCRgidEwdaLI/FJWn7vdjcgcFgvl24QDDovNb9RyeLFtlUf4+M83cHyu4f35WhhVpxd6fg8x1wVPrlIaVDyF8z/u47sx09bBf6HQ7fLKbqAv+KWQ+YCdlqWvQ1KdsRHL51aVHxBH34EUBRra7IzZXfWnp8pl9isthqGfEjSZHMjKr+CKvA/Ara0tFLB6O4kT/O8Li4Wt7vYT5/DRIn85KejwShe4J+jfdlpfNpInuDv6XB2u8I18KBdWNVRONkLi2SZI3CrLEwNSlztoxda5WiFa+Bay/F0AE/kWG8OwNnCatucITkOk0WuqXgNHFTSIm89xXDbQRN2bqdY3Bq9DZmYGLS4T508nKBIkz5lJDXwCmRHsCq4QTl2zqMQrtTNKSYExchsyTapj4yjZ1ORWyq4QaGWOOTD6XUExgdxBRdsc3pKHIeTkVsruoEDJdZxYXLhRAKL7ExErjghehvYGBdo38cEzluCImb5tJFo4PykjF7hGWDeTtvJwt5z01pjAQ9kWmRQgq44empVbqzwDDBsIZcI1uQg1RDAKRBrmzPUxmG6yE0VnwHiSgDKkg3TRVyZxgW3fbaXLsqVIb0NrZiLuCjavzD8bAVtjY7jf40v9D1ri+HkoT8tGQVo7HkWnccVszu3bs4DgZyba1CC7XhuXC+ORDlTOv5lhZE3cqadZ+RRSgkP8+6RbxIus/JIbVC6jHnysKIii9Xmdfvj0mLdShZVgXPTeVQ2ccNt1Wd44vpVQGqVOKWxMzvzSuQsmXslEDtvq54dR9uJE8rjT+CxUUE+ykTbIFpw34m831oHObmvW29DNsYhr+YTazEQ8wIUPsYaL6SFnhM0auTah7na5jqyuA9yudJYzJllLtm9XLfasuA3kOZoT3K64tk2Nl15Ivu/0sWJoiTGebm7y86LkTYZnRp51ZHOffau9Qrf1a7Poa2KUT+VlsCdK/mWSQBAu7bz1YinG/TKzhmuu8x5qm6s0ONGVdo8A+fFlRSbGqvnScgtqbdhDCNwA/s2Qt8jKO4LPs1ssLSjSE6tSGJ3ljFEmk4Mt7YiCjNzxhZpevJIw7Cn7we3DkkrHafivlyY1SJOn6+PSNjSy9CyC4jgZgWh3O5MInIzFY5Lq4YUW8gqJU0nKG4icz59TBrOFBUbEadLPZZKs0klQd+zKSebFkY9ebKZEFv2dU2KTlCMFf4nrO1JoxvbJ2AbcNPhK8sYH+Opxz6TYhQeGmQfXm+DEtPDxy6jmKDoI73CkcuImez6COArqBEJrjTKGpWQwhN7snahl+NCl2mgKpehSUFR5XuFQyljspCsm/lZi2gRQlrOqfftYoOqIk3dFwmw2QJ9NwhwCG1IKUT1VsBFL2mLwNdMw09y3UcH+lDomGyB9lQ4wD8qszShIoQUhSzWCgkhScr1NnAxCN6xnwXvAtoz0VZl/cJMKF4QlN1TPmr+InDzUm8STOGhK2z9DoZMAejlfOtRO0CrnZzeGVhXl1CroD1waN0iRqVPK4OZj9VpwUj/sAU7CDf/sNrfCPLV+mTNvhfHNTnm+oAMz3rD08gEZwLWVArxzib6g3gHgmNZMf2W2FBvgxXzGyxJ+NxjA5FFe4X5mKMOFN3QQvFd1kmACSxvoJ+IwY4Xm5+g66/lOUvb6vmt1Pec9MTVZm7m6Z94yqMqaK3et74LoNVM5AGi7whtoPmW0+mbhMr15MvmG6iZFeaize50KDxhgy+Lqq+aUvOv5gdNZF+0VFGsfZBdFjy9DZ2YC8gEn9g6A5E8QtnUOtSpB6ECBFIhNuY1ojN8C2yEJXl0El9eb0Mq5gQSIzbwsW261iqtWCYj2bKnAgdmTAjXRlmmxAWBDLLDghOOw/Mmg6lZ4jEFRWP3CuMBxmTKjXJWIRgj2+HRX4KHrTXFhGWGrTMgZXXUW5/EWSBh+HwiNNrmd1QUTjh8g3kFepkzxfLB7OYesDuFV+TmVkmM1CRi8yO6p3Fa/Q/bazsVK103x+ZplhWwvsLLkn73g2JA05PPs7XFBN7uuwPwRb3jd+VA0RYxNYRy0QZ4RWgDB6fBsVf6Cg6YGdEBr9YMfseSDE2fmeEZrMoSrbf7egG+8AHTKsr1+Gt7pitVpahBRul2UlVRqgTBpjSiFbjZAmsyPT0TN1JPrsqfKYngAJkWzVM8wQxGsmK2Ag+KLzo7jbLflAXaYhUlW1oYynFy0SxBTohWywSifOSV6SAfy6nIhcKhO1NyouDMYBHz/FnHOQu/wsHrHcjszYtad1PJBjYoetIPljST8hn8C3MuZGDYBIFpRDIblFiwf1Os62UAR4qHzV2EdAxPA/0TzwQkheKhOXmGLsdJZP4PYrM1gQiJxlcmD7nDv8NvwHg0g/7ZY5oZ/IKny/GYImyCQO0bHxMExgKHPMZuUCLHk8fg2H+IxaXmRCbMZwg9ydk/FO8qdqYVFoGx5roFAz1SG3sa4q93btT9Z83yGUzFYdvM78EmgNqKNNMalGozPq4ZNzrZzQplqDlte5FcGIa59qRxoWaX9hPbnD47Ju0eIZG4K0bq+lNDTWsL5TSJwfhQOIyDSSUqC2l0f91q7iKubWJP8aSgP7UvqM6D11+2OgnUqfpIHprAINZVu8xPqDZzeAJ7VSuqYJT0F3U5wHlMobMwPA30N6iV1Bnw0JioKb0Nasz/oJPy1RGIHR+FmQBE5H5HBQJm0tjqPNTOQez3h/h/L7Uj4aEfoSyu7TcjaNs5PCFhr61jtPtfJMKBsSwmIeVBABjeX2En+OYHCConCdAuzyVb6fkr8BkOT8vOKKMh1ksbCQcLvMmSIPoe0uqIv/kePFcIvfNElfYGvFoH93Ge4Nn4S/5LITNNKWyTlf1FMVxjyf+iWG9sjNUwGCmNpkGJLfjoJviy7ghm4OXc7ME62SVWaQaPIexgdTMsmcEjEZnr7T4uwBc+wLL4eC5gqNBZUIRMC4xqFP+CdOBl5Gv51XL/zOyBpqoAW8fTfeFLeBuiMPdBl/nYVCuJdArlpJYwosgoG4gmJKjTlun0HXi+K+PMd6B2KaNoM/psT0t16Lqt7fVyLjVoBBtLhuhb8ABQhUUr1C+cvt6GKUw/KINP0KAB4EiQVSahHkUyI2VHo9YhyF/IPf+CCjmS11CQFoYnohSoD8wKUspEFC26K8yi3/l9RGGhe+8kmD6+BQhJX5peED0fA8RtS3YqFMFM/KAmTlofGzwcEhSVfHFwiHpAJ1DY7JBNXwl9sN4GC+YrFLF8MhgMxCIShY8dwp6KWXj8FTgow4OCcVPVe62awZegUahaL15LtitMlfV57tqYLwGbGXxHPi8RJEbT49NG5tMSXj1y6UJTY/38gMm1+WD6As0BlxeaL2Biyzw7oadutW4PUrJ7lae5xYl1AhGQHBuGxfA00G00DUm78VCnNNVynJ4xn0MPszWBqPtQIxnETGtU5L8XR8n8d3Tj0cVuP0JcfWqkFeBN80iIANJt2ZJm2UNONIxOrZtPoeY4e8RHghrn8AT21CNGZ22V6dArh4SqtpUYuoW6y1W05hZUplRC2u7fWzypiGX3Nt7+ZRViTVJ2U1mdic5vKo4Yja16HBOTNTdYltwNnnQOYchuA92Nl4rntk5zA6FNtoYGpVDjtJW2xZbXFf146YvifHEDcmyxactgeF5Lf8b9FQhquwVTk9yfV2+DANOEjSmB99hAXN1e4UBxxIOrC1nyK9DIJ0M8PRWJZ5BYB/j69fDUgPu5ae3QgwDUp78GBNxaa+qw2jk834oDwEZnbWcp1CkOcmXhY9qCnRGFmTEnUMKe00mrKDxUi/sy3Moxn2CFcoUtG86b0X4RYJ7A3t7FSDYtDX3593TsZEsWI5KyGt4v7FtAYVr0J5xe/VYYBjbhr79rA4e+znNVhoT2F1QcJlRCCnVtEYq10RQXe43WmNziEKKDD6TVtLJuIB0g7HEZB/aYqnBaj9hhlwWqlNOqctwybiqxDEi0PyYQl06vcMxyPMrkfhoMpyNqyiV3yaWPcWqwWFKyFKqQU9315CbzMSJ9uWgUFMOKV3hR8Fj49/kTrDYvOcj+iZFCtz1UhlMRLrSYUoQKDk+btZPPmgdd9sNnUAKJoLNzARXjMObmTFOMIJE5wZBUzMaO/2NI7umezpq7z4t0MlWj5F8VbnRjdcbBVq4ZAbbO8VJFyhoXe0ijK3IIqbchFnMFB62soY+dD2DtFV7FXnoZOaj9YEyFfncJ5eqZppUuF1uPGrZNBV2WraXehjzM5WJeX7U2qQTFec6cT6psYgsJNtSvt5g7ZZxrIyrAFprGUXuoUDaR3oZ+TAHmLBmdfKueA9CW7RrNT7H2Co92RoUK7PpY6MknxYrELGDj1mhRPtYmzEw7hncfbreK1+fJAL6I04wV3hsDymAa4cjImEsP7U7UTWsjuOFiqrDDE/oAa4Abus0HmNJlaHnztO34hZe/CNTpDb44FHy7FX568Sy/xW/z4BM34Jm1qDLs3ErvY1/g5krzPiq9zPkN+RgtqQq7cE2rJQW5s5COwEWTBTsV4SsAzg+p617FMWjKMDQoH9i8gi5hmXC5zVxC2SR5eoNSWe6j83idDzmrj4gHpcn2AXQRS4rrGeYiyuCyW43vr1stun62FGnuYqxtlZ7i3+we6GWgYh7VdUYxyvA00AXMs6nox0PZMo/obXBizqOo5qsjEIsCFGbGySdOhX3DkQpDPAjAe+naMoSxnbkpeuO2LAKIU7EI1AD/fcUCnD1GcYuc5Fw89ksvbC20WvehfDJGc0fH8GzcVROlxObNlIGpG3n5Yzapm+v+xTyv1oHlYcFQa4vpUKM+eDfyY+hgd8/814QX/aruPKCoaXFudGdGoshl45wUpWNio0ix2RydlXF9vQ2jmLMoNHxC67ct0ylQ+AKt/aVOWAkA5zdptS//Ncps2B+12ZcbNd5xkY+WmZFmPJ969XXG10DvyGhYb0MQJhV59TLjExTzAq9wRmUd2RefQaO+yHW2p1IKhknXLZsU5BLpptKOoBIh55+7Z6ac7mnXP1JETR5M9OXAgBCmbFecJeukPMckF6H3mhSqPAWnj+5inwx9RoVGIGSXnYQjoUT0ZOq48lCS9HPLcR2YRAS1xPl8K2kHNjpoe1xtnc7fKxwfsO6+RIeepuDJENqJZbTTiE6iNyNm8DENdEp6bfyuM7sOSlj2ivAxaDEn0dpSVBAU2zTfScRA1j2Xeer+Ty2rAFrZg6mQUic6ga4DKcv6IjohXa0c57PMCeyW9pOZSUKC4s7l03AyMjEUyQ0VSezqynp0wsmOKxHqfuvI7PiCLce5ufy4Stivq2s0rbRBGb6wLqh7/HuSUDAlKyEfTwO9hdicdiw8FCuxVI5r3Oa/0MywNYHYjKAwM6JsuvmPV6KRJYmJVigx7g59XTwAwH+qiOLB8V8H01+vrID91qYOoNUpi5QNmUVVuh0bIQof1ukUKu2odMmxPn9gmfiwAhqKRUPRCHaHwkRPatezo1QPxVxXcqTlxgoe1KXWKJlR8Z2WcqNKfYNcunozx2lo9PIjV1fSuP7iog58pzaB4BAcOoq2Dm2U2Hrnf7DCrT0PgGzGDcrAzNoMn+fSh6Mr4c8PQGmZuDvaU+o6/F1it5pmxhNWGzf6wwcAUFnF0mhEUWghWaw99Ibs5uU405ooVGFLC1ab38m8wiZklF4wnKtOo1NJweqglq1mSYddttPooPvrhw+BdY9w0Oq+6zs3qbp90fTmengdhMrh4wxL52Gw/sV388DKbLsa9umeyKI/VcZA4YDl0Rs1ThyUUjaiQFEkGidKnhWDDktTvRzHijmMYsHHYopALCbQ+MCQ/jR3mBnGPLxyCYqidyKfXHIpAg0LpJUkS6YIqVfLAUaLkQ4t6ylxHGoTgSL4QWQkCrU7gb9L4I9L2/2s8coly0d2b6OifsJrSq+hj5IGdQy83Ob99LrUEXJc7jSvw9P5hF5NILoVFJ4sCvQXuAn2JsMNMDwNdADVRHIdeChMqgdynKs1++HsbE1Ll4XCzJjnm2GjOYEeQtaw5JT20B9QGZyTGBUcj/MtWgvQauqCuiH2bCXWLYHDd5+kcrtlsF6LhpQoRx0Ko5xY9bxOZo+5zpS9DJSOsafXSPsZngYKRZmSUice2iulSY5Lq00I0ny2JhDTDBRmRvxhGgNXm5fUQdBhUxpqDwWjmHap2LyClMvhabPOUxh9+4fJKEvNCR4QdmgkHSxPA72MIj0ltXhILoVZb4Md8xKSTL46AjFJQGFmfMpZ04Z/WxmQBNkEaA/yBecXzB4kdPET75zgV8U/aZAGftb5nq22pxv7MbTDA65YM34lMxXec42qct8sRyqzKHiz9fZst9blWWZ34ZU7lqEbiv5Ai7b07wCt5i7C2lbSck3p5SS37IkXnOQfWjZcfrRq4WdQyGzhOq82YANJiqxOqzM1vShZUT251EgKl7XNU1uks5hdUFxzu/mI+CecvHRyNEhiZAFbLqK6RTslo8txajY7YcusWErIh3JhU0wydxNtSAofZ+o0yX7ZqOqJMqzcSkE7kOY5CcwOWNrrxUIsQMLizkIm0zNhQSexUPi0ymTC5aQRbUfK6syNSCCJezlObvMCNMPWBKJGUJh5DE1Pn7rY3N3G0Rr1wjM6eKGKrIK2FYktt5kAKJ1vPsKGhGI5PG2FHR2X7P75gCeRx+o73eCk1onIHwl2jvNU/0fHpwKC21vMvv701/VV96z1Eh++wllbzld1YtVtNRT7MHtO1nd1vfD/0GmgFCsL/UoJjVhqiAcvdNgND2q/SFZ38ypVfZH4P8ifadsZXX5Np54Jyd0HTI/BKK3nOkSHyXvXdw5iWOUSF87klGq4E2YGIjHqdcqfr1AHcS0a4sDmHQrDAYueXqCES/PjP7VuUf2U/TIdd7v6oQy6uY00MTRkBbytot7lq/PZtasvM8Ssq3kasW80DdaciSGfpcnePlbGx3ALmcZwxp8aonx/fer1C30iG5ELNpTCV3/eQJuhFiiaYRqI2UzVu5DCooY2LWX9luMkNQyIywYCUYAiasb3gxNMOzz9wKCPblBEh5iJbnmItstq3oNolqGCUrYmEMllEYir5X4CSeT/XxwtQ4nGdvGJapVD7d965A29+bVGVBA9imRQEI4/lCJMJ2uFXm5xSshj8+iNwtsbKGZCy3gB+O4Ph3pk8wWEXgRFYQAY8AYAAHKBRADJAOgAQOQWAPps/n8kumEkIP4zSADosz8MgB/F4wAIeIHyygBwN0A05cPEpAwEAIN82AL5AILbcidisQEofkgnaFmZLwBZArOKeO3B6zDFHHJYp14X6efOS/bJ4UFBL6M3cU8GMp6JQgSF8CZ2CLgCf0GgQCgQC14RKAUaQdsDwu0lD5Q9yBFuJf/3CGAzAnJKdcFNhi4gHEE/3lfAFwTcLYVg363PNIAjAMCDRgFA3v/p1VedSAYAyJ1rOQCA68JV53roes+lcZmevnya+bRt8sfJafQbCAA1gBhTAAB9DBBFYc8kuqcxV1r9n+2vlulQ6VkCMeBzn6h1jdsVjYpUcbgaAJIHyooChGGTzXxwJUiUhCgdCVkGiizZcuTi4BIRg8AkNqjW0Gi4URMplIaOgZVNvgLFSpUpV8HNL6BWnZCwZi1atZkC3HV9oU4Mi0r5zb8tW42LmCgNbYbznBLQJAtlIjZCkM9HpiMvtAk+1vwd5sj2FbtCl5WjwijovNB4Y/IVZ6JJ0iRLkSrWdgxUNCx0b+0ixMMngGALyiMjp6KgpKZlYWRiVsTOwUmvEs7DqwrmnZOa1GvQqF2NDpmqqy5swKdatLrlJgQNfAAAOgIAYgHgOUDgD5CcAK8lQFwBAFh7yfjElJeAOqyFiW7BlLkKvqUzufW9acuQAPIL0L4pM1a7S3mqp9rYgWyVldyGtGLG0shLJInnEiLYEh0UFzp62zLp4sq2bw54bBG2afMN4u4tW108/hg28mIp4UbynSVREBpLcDu+gn1PPRR6lhvcU8iSC0XYR8cZeAH0kAparU8RW46bF1shKQSBaNSSidv9A6GH/84P/5vZKkUq7SFpvZpW0QAaNJuIkcQSI0PkVSbNemCnD1SkrcGZxV6h7rmm2vM6TSavcG+Y3G7XmEdN2buXgMdVfnd0lCKtGLqJJDF6oZ1XcaNDPZfOtmOBJaWAEbAAYC2zlsULtjo+MhjPntLurlJwiGDAyynn0Fq1ugth8iCVNUmcSQYazEXCqT+SLaVG3nNixIsumNZeAx9m0sfuic9hMdtX4SxRwhGo7eqG31TqdAcPTxvG9wORr4ImYMPYdWe8ay08+RhLhGi1WkPsTqDGpj1hPVImUIk+Qn5K4+8AWftEqVxOzhHrkhL8LuVZR88bbmJNvhYsnCNN+uTxIz0QVTK8OcKXDSdK3SM27AJIWOFkkxoO9gjhu+lv18xSX6jq6gf717YbB6AiOZFxmBKVY9s2BD+F+t//+bq6E+5gS2ghLfQdJLRBOXZ8EoST4XGp7orYfaEFIQefmH+Dn5K2OjFqIIwBjGAojproG7kN/NNyYVkM45odOHlfJyM+YGXgF9+wwUuT6zkgPsuJeJxYJZzRFDd+xpZ9CqABFE2PTmJSs0PUKAsGYfFy4KIgXOGAjUmCfRIFUBmGVA6Rc7ZZyFvlWQQboqa4h1IYxxvqusr39DKDgmCJQS8LfPp1OCvwbGwNR+f65PYASmkRyLdoa9QiTc9KS4a6qa+w1j1tGJfB8rL6wVEirEEFC63kIdn3C8eVGufQ6A5LSDEZPl29aCcw7l6jqnEYdxAk4HDUyAThKGiAyK21japXGwICzcr0dXnZo+iIc5gcMkUUhMF/Yqy7jY3rUB7hMovNxzJbA9EOI9mp7hx88mu9KbaHkkNoCzZpE7YGNZjyvblq5GLp4Yy1A0nCla0bAxHYpR3wCY99OvRJNYnqIeD7zEMS9NUHR7B4Nge0hRFzFJisoUZg1pGAaIy/xmWM5q+tbRKUp4cS6yrGJW4JRfSDJ9rK++oBqGTIipiMTFF/WuDEIkjiqQauFOUy9TEgZl7kFrpBiStXoAzzZ/aNCT6Vx5nwDDSjcG5OkbC/8esxj+5qVEs2Gu8ZklKiVJDKh9ixLCEv9wXkYQq2qjnJqjGRDFzBYJlEOu0AbYpDeDZHbEZ3Y5qw5Cx37cVFONTtCKUn8xK6eFcI0arRHCmOBaGnBfm/XQyaTQlomCxWGuOevvIZGw7MKgNA2jhgKzlTXlYzxc98wwkcmnpBf2pxdeauqLilupoy4OTpsVJRxc9gXov2oshieNIZZPTLif+AZ7on+PxyvmBOdJZi8CRSa2vZ3EbEGkZYgcQfAhxjB9kn9IvG7oJjAWmg4FOkMBSKYuYTt2u6sNLkU3AJgcGyZa1yD6BCXYyW2RS1oab0FSlwBoEOeygvBrrcUzOcVKaPdNgyB2A3dMBiRQ83HU7cbEnrCSSbL0tr1dfIXc3l7kX9y+oj5oLAFJMRNuZK3XqpzcxjzQw1ck82hTxZYtZKNpA5sPnddXIJa8TfHFtvkT5ZU54BGOGgGGq7JSvCUkXs8QF2CQzR5CiuP5vFXJpkweWpQWymT+iyCBZv4RBnt4r2WXJCkFXWNptdxsxPNXLbvgGhrTbo2EVK6fd903ap5R+rtHxxe2CRZycZ7qSBA6x5NGcdAcIaI9svQQxWYBxyHiATDgsGf7TJCRz6lvwwC0Tg4LsLinzq7QnofDXKbYf7HL0cxLptIb3B4lAkvwzyBpqepfujghDEFxTBMSWSHqhhOWK1CA40RJBmYiwR4OqOpIVYwkW6hxTwdRfU7o4mE0me92KNQYE8Pm/FFhu0XXQZD0yQ4gJa6hK37OsNDCXbakCgJpdB/uw+7kybUX4pLk1PD7XaqEl4zC8PNQ9iUK64pMVefFpnlBw3d9ULnfRcVlIPVxlF9BcpCUbwqQWyhURAGNmyD6ky1KMUVyNHOcToZ/Cp8uCXTvFvJjdhp67np6ikuSpzMzuv0bxU38ELyZJJiboNMLdgubxm21epqkWEmo1VCESAlanK3pyqPDu9ZImhIZerpPahyCLwoNoBmJhoA6m8w+kTo6GkJ8CoSewDzSDgd8gSpNoMcjkliDd1BxuBMD1aTDnrUoJyK1x1USoLz/Csor9b53iec24H89AXu7PGJJno5EkG8nOlPtOJwncGNfthmyZq9ULCJcW4vFxgBLsNsmfH4ezsycLM5VBGKSz75BX8JM4sLWWe7NvkpMAF8WAWotYu9vk+H+HkyBa7u9qYI6prXZWampapyX01rnYX9pUTiWx1ax49sEqsHrayFXnScAyTOWteSBFjeEbO2pqPfBWfxZh9qmN+eMUz47KIk6M9B9wVIxHI5EiM5rhqHA7NhTMTwSwlu8X1xVs3/RKXh1e7JOLKA7ZWjiU7s2PgSWOZcYFsztQR00JTqb8zp9tXrdRVfuo1mFoK7mJ+pdvr5T4nnGoeCgdcwk50RhzBqOocP8QPx74JD4gowr7xRFBjiqp8lM6onXbEscCwLHmkQps416erlOqLWr+c+W5V5DsMxzxLp42xMEM95YyIT6QQNspzFGq7stmoLeVZuYL161wto1SlkzxP0Vm73sB8nBf1uMHNU6380gxXqLFWtVFHZ9J6N1/IgQq5Iqm41WZRY/WBm48ryMv3ef4LUeR9Dz/hv2QZ9Of2M1f10uvPWQvxdyvPIf26gb9ON6HOy88IximmfOkKcQcByIBExAe1HlW4BT4JH7W3zcZVJpFpGaNbz6czGWHsrdqn/QVACU8zBKJrDK9202T0CyggFd20Vmkl40O5jDvRz8TG10zheMN1tjURGGhzIMNbj57zeHjzyHH8RtW4SPi6w0AJewQaFiEzkICwmyquuvmGUxTRYu2ygv9T4v0maUtiyck5/2CGAyvnt7XYkEXR/pKcRKQfeILoiFCIYlb3XR5dKeR//gQOvV9D/vM24lHxbN4FKnYPa9CQQFch9gTZ9XcsWLcMC06cdsVHmXmJ42KQLxvUkr2M0H/oVtumx0FzzUVsoLTYzSLAeSoDT283gQ68gYc/HdbS5HnN0pydxNmbHq/Q9JCCvKxJNoYxPwcPsblUwXhmioY8aC4lCdqpL1lvzNzfpK731osF3SCQvDNl3Zsr5KZW46oj8j1ZNHAEN2Sn2Fc4KXRXU1yPbQc6WP+R60bCHsvKyVXQZFVGybpwNmmnQ/E0Vff8WTrvO112c3kv9qInzsgv7bR84JsTlmOSk4n7lWWr5AV//MH2+yvGyJcqw6lSxUmLIJ8xodeQVwVJv7fYK6Mk2S96lCxV7vhwBIA6XwTVuufoLCdHsdiNavf9kPhTvEmNfkQIU+fv8+eAs8c+y/HpZa2Pp2FzJ5e8xwQOXCj29uOt1j439WqxRdN8q4aNAY/SYimMPwlthZ0rsZS8D8kRPF3jni9Z2kY+hXOlmzL7PM9THYSFL7YALjYmZYDBGVcU43vGi9xFwEnazKF5Dmb09g2jS0iDGfx8WvFnp/mycDZxuo+i8hVp2jWvMZk5GXPB4GY8/hSd5TOU3iaJi26e0VBDFZQglr0D+/g0mNeVtP1zSkxPuk1wCWMdklfprjWjlB5ccexJlYh4uJrhUNNW6vyVGXUus+Q9h+tMG1TMVfJZ6sTqMoPTi/bqCpdHKS58ZB+OTSgugVPXKaXyUuf5Akq6uDs+eIywxl3OVck7lPVJPjCPtXyO6m6N7pW9xs9V8a9o8PSIe34DdeuaC4Om3p0Iu7q/Mb47c3p62LLmJfSi88lTGc+vOUt8G3fMdodSJz7mktN85ilJLSU5hnpKW3htwu16nXEKzkSpVBmJuoW93UbHcb0WiyVap2jj6jFyvC6hYZgKrCnh2OA6Zs3pVhJEyN6BY+PpeVIVlfht2yW/yT56+upfPVLJy1dfqz929pRsbYRCR9UqhvKB+i7A/Ws80j81baELRneIpDQpn0JnUGkx0sXKnCfh8Z1A/WSudBNQeKibt4uLk/9+wjT5OHB+bORo4/4I74FFD4/8JERJH0UlDFLeH43252eJB+KmXsYLysw0ikQCk6HobJ3ZMT48Dh/XLS44tl2tBfPMxZ6YfYJ9s6ciIjmrRKnTZH3fLsM+eXp4TbtXkpH3Pj84sXhVapKIzUINtWMgaZMSWp5Y+Qk3soU9lti1JoqcNRiTYVhSns6ibpZ92vlqJHgVk57W4rd3I+ROf6SqJSPK3tdQWYwpM0IwiLd8JRTMiqyLug/377LsgwYm/hv/T78c9MY7/xt8jp794f/g3b79bFf7P0t+Z6f9SMb79mycPTd3gn0UJPTc6fXs+HY1tvrHHZ5Jx+ZTjvIIU2vEwDV0K9DmK+FnGcxMQbT3zSyOQ6IQV1TxtO9VtEhQOQSjqKSlLCy+w+PdFtUDTpQmgS/2qjRqsaeKr9H4BGK3OoQchKCLsBa+BEGH4JBK7PEJwJVvZMakPeMJhQJKuVyycVMrkarhI6PP9m3IMXTJUCuW+DRpqKS6VmzwYF6ZsKRpkuVbXOYFUSdHkwuvmOt/3biHtnrRqxmejBeoF5Tc3V9VMCSuEiL0g8ubH4bt8z1/7qAh3zUUyr2ZG1qXM9w0ANy7InWFd+WbNxifDF3oqAnKVWqplL6KZJsGfElja6ztwDkU4mIrOe1bKgffm7rW4DGC8FCoI88H1ENzDD/2v81VvFiq/XHOkP81Z3Szd6t33d4gHgjjuig/rcWr9ZXXoHBo/nU3cUw+du2YWjU0/5o7ZbQVO0TTATtKE88XUh0WenAMeLdUWpWFu4NDPdBiWIMsgsRrEQ38MThLHJVoFle4Pb05HABb4MEVDoFDERxNDrVIGpRTXfj7h0N9MZ86poDtGbi2wrPipwFPnH0MpfDFiArxytwgZyWDvpkTzPkEOId+0QdEMI6qEV+NSD+LMmsWrFbDiFoFzwLOodDyJRqcJypXuDvC1Uu2j58P3xUIf4Lmg/WDwZ1/jU5FaE6JIK9KoYY81SKNtkoEedQKNewztJ/4KRJSqyAFrFBC4jwlrDC+MoFz6DtttRD2qIymuuGVyHuz2TXZi6aK85Ri+P99F+RGmU5zkbK8IF8LKyQqiJd5cU15an5iUb1VJir18TRVU4KgLMQ9A4l25mZeXFuRlp/garDJkYoaPnjdcbLq96qTHYAdVXu22RcbYkHvwNB0CCTf8JUOnu2709D63ZdxTgiKdd5qeRbafwdU2e5g3BjCSzkT4+T5VEVMlTKG8EYlAHvyCLwY99E7XZJJ8QoZKVampikmAcrlluPV06rPzEwwIgkza860Hccud0xrvLU80SRJmNl8G7we/3upsZtw4b9sYuyBLkLj7UvjgaFWPJ53cvP6h1t1EvwZReNLrLZASUWvIKdJkLMnvy7SmFlcjjfhrim11ZMIsnId2y4xSXINH2WNZ0mXgi+jFIetKkThNBqUFuZJcuqIdLPanC9nsjZnjMmwJdNRq9Owaig4OTktnUx0K/NtKnry7IwxGSMlBDuRNTmYl/4bCSFO2P2200qJIAVEUMAepXnDpAok1QaHQutGTn8uoCowoQ5fg3etx9fQUSk6JFkqOSQSbIOXwtsAJ0pjMTO4FPgb9HXUjCxNyR0UQG/hZfA7SDCYGxpZyuwOLjqK0M4Vs9u1fHhs+T2LRicdJxs8a70LddB1zpSR0z8JDQVrk/DTJFXSoQqo+gMOssbqz8ASvwYV4G6xgjQqxzqOuRw98maftqSeq/O8N3+1qiSQrfNxNcLFKoO0rk5iqJDpjfLMmA0sid4kk+uNgB2FJghFHuVSlchdJUQ1PqHIrcKdufKrEs7ShmCM9j17OkqRSVUSRKaSp/wBwI8LP8Y/LtUW51s2ePuIP6eWDOFDC8HawcovsuYxoRHVfo48mx51YQ2eRg/W4EJthjxnIggEufm+stI0vmAbXE3+8GJJNfKBSR3ELhBIXa22GrV2LFBaH8LFa8Of+ZJyUIgfxz/HJ57agQPHYNVC6C7U/9hnHe17r9kPiodCy7Bl96Zti9iR3rn8Z+wFeE9gZmWZ+d/swjMEGULylziQMsp08c9yE7NyuFp5M+PPXAZbgFiUm7z95A0pKUt+YX/G9tSU7uPpACcjWIsf9MIBT3ak5qRA5FH1qEVuINYViPQelYXx9Ubd0CGkR3IQEl+U9CCXwLvdQXxP8EuChYpY6ls2yQ2/gpbCL+F3w0uhV2AwSh3l0gODzalmslaCsdLGYooVnYbeoRpKBPG5WJa53mKW8nVnx40F5axUOzGCAjq5LWmzk/a+6bRJJb1oOAZ1g+htu8aB1z+EMruigA+jhZpTrz5C1CZZKhkQCY7o5Y6Agi+e1D1Z2acp0HpUB/gRhUjoF5ofDc6MrnyTxoFt9GL1jlmz+k6EPsLFv58XAz8jUJuaoSy1lllL/CEPvYEo3SYSfSUpB8mRUhOdr5aHJHGZbF7S5IxTu3XRxZvtWoMFt2OMIr9trCoFusxkcDZSSJVthpgKZpHOmO8v9gP7xDyxBxOo0apsyCHjsy0FWd0T+otzuE6pHKqsEmoUHjGsVIrFSjmcU8wWfMUTXxKK7osngoDZUWjMXI2vXhtaewu/lYlAH+IgK8p3rtlXFipD1guE25CjEV97M/huN72+0bMtlncgtqfeEzb+JIMmJ72cXweHCIRFCFxXDtUhiwnxi2FBXUkxvVnkl66fROmRQn7APpa2K6oz7qPgEMwaCno/6twVfTS1s25z8D4Mv3wvuBlsGbRduzSmI13ku6Xi3fIFRS0xd4DTz/JkeD/2Z3tgL6g/A41aHP9XWvIfuVLXTzzx//r2o9E5ZhZzHd/D9iStio//PoU2gxiTs2ktGbAPQyo5V89TSSFIJeXpuSq5lzgxTZ82kfg8CthR2oSFCIoDWh0UWyrIK2xNBaxGWwlaNDjCUHiXSE0nUoj6j3o6FRR7TxBPLG37dOr8aeu8wBV8/IOIW8SGr4okarUkNALdh9eIdKhPIKpUqtTvmc2bP83DASVKe0ogdueFoJcw8lAkhu8hNv8XGzI8Pf5zh1IDU5u8UB7k9gvA0tX6jWl9U9j7mQ+3BDeDzCjPOe/YwjP6tQJkANLDHyM07qHg6OU9OHPEE+J5jlGkKMVDPj3W1gSyowxnpNKQXpwReryDNOVavlqmJmVKiyFOlVYnra11bJZVqSRN9nFrD74c0+7xg1duBN42AXaU7hQHKpGq9ZUmSoDbfISRs4LP35xDP1IY4NhoOreqbFptoBJWSbhMthoP8o0UfWkeJHR4ctVqT67AASl1xSZaiF+YpWLwVFKwA/t21Rq9NFAn0VPXFTSIMsILjqwj5U/LRyt1s0nTil2Y3u+r0YENK8s+6bBNS6TNmzy5g2YboTZY1bp8q4qWZSidVnRTB9IWah0WpXXyXCrFT6EUUUhoiWOv7m97S4iksurlKrsFOIN3NME7QKLvMjy6Fp8am/r8hFTNSJ0aRrRS3uTzewtzoje0EuqQ9JVI2wMd4/NrNr3EPc6/7+eVnRQy7Dg9/Ytr+a+HZ1//SnSgqGuLbe7+uBqX9uuLLdxDL++X2UukeoSjTUwlEmMS/WLSAmVmyRrxfSRQSBCrYQ5HJ+le0iefHcUiWZm/vt/qR5msV2BdX7546QwxYC9lxtBE0UzJvzTaG+YaZgx1Z2qUTn0DNlZPzuBSD1EplyjxxJ11wY9RyU9T0dSHySlX692vrspEflIERn8lTJkxbUY/JHpG5BP1R59EmpRGFBDBq8F5CS22hJZ5eoysTieqyIlkZXq6mgzOfwsOKyVquVCIyiXzq+cYA0LEo5Zyy4uEG3DlrXQEvvSvqHRQ8IWhVoBUKiXc0mL+MrxqxGEVokYEAjUiWVA9p4iMEtMLSEmkgnSigwTYv4q1WjGk1YghjQYSa7Rgf2khkote65j5hs7VlBZb0ia7LWk1b668QNFnq1McVY6U1dd96Nsjb2qsPKb3oL5Uw2W8mdl+koMWIlzNiRaKPUKtaPkW5FOOOMxeymnc3Dj5SCHlyIeVQ97iRK0yJ60CaDhx1ECjMMDGL6ap4Wcdy2kbLq3chZnWLax3JwUelNq4baZdhi6/1PIANHeEPoAlbNhlyrc9CHiSFtQnWdiulekfKXApjDhZ2RZh1Pr0CrgZb4bLSVF9NLbFwZQgODfzRlJUn9xoRMeoI03yqL4xZzO5OCgMO4O3EjBjqcegPg5DSaezdESSQ9B09JGC0CmhUHrUemG2F0sCToQHxuJ/+mFtIeghHx5jB8CiZFyJA5sGB6wUvERej7Td/cgNoL588bIZYhuwQM7XIHku2h1hd8TXg6eZh395bTPl+Mvjv/m/tgMR3bu/Hn01JZfwAxsUMI//IqS2IDilL2duPad/m5IrArVbYw41NDb0Bnvcx8FEHwJvt45b3tvYG70cZCfjffhq0kHsMHwY9wBw/NDg+3CwpXH6E8ZTxvs7v6P2Tq7YDvCKfiDoFYI/nfW9eG9LEK0Fg8sVUxvxBmpACOZQMuEP8VXW9qfTR+sZY1eVV3EERY93mXzjOqCDcmT4MH746HCelSdGOR08+Wi7h98LckTKgT5izVtWep2jo3BP4uNjJr+SnhaWHhrI5upoTHW20iMjWdffZR4YANqwxMliW2hR63NCYkkFc0UMnMe9j7dlnYYmhL5WCWez2vAvBoIDoDA8sBAn/0DGv8qoLrFNjBho7wcDEc9DRQOhgdtEFDjUap5xj20271x9UC5+j3I/u8fwZsfxtJTdI7DnepNjRxr1EuVtUeMpCkOWQlhD3ZF0gEI1ug6bJ5nbmDjsm2uojbYoFi7DVbcshEoGB8pfjjEwgUrAfMn8dXpGJvMFk/kq/eL5j6GVQOzbdQzbULHsP0xetzkEVg326cMahb3OeQON0DW/KX+jse2FjbRYgfzep1TZhJrzNzW9fANA+NuswH1lHH70d/wYLgR/AOpaUTkSDgglbbzyohLrYxPBamlh3DrsWs1y5xEI0jGJoLWpqimofiOUY2hFucwAirVo8BuyC5uvDeJ+dg9LumyZJZmF3SDqebHP3CSJULt51l351LzrkRVuNDzOZpjQJfOduzLC7LNOQFEgOjZ+U3oFbMfttiSwRtjkXHYNbV9T05gdSrM4avOPHUfnaqbchsxnfybG+YxMAT/aRMfet6b5lx7ypyR3T3v/JuWegj8jnjCbd6aRyBtN5ZuID0ajmM0UblGOxqFyrFFotTSKZDiq4LqLxBvdVSMOwHmaPAliUqo1JgUki6B812DuGuzBm6+TCtLT7aSkxe3ywc+EVD5PnKtK0Q2eOP0d5W1OOr2IOLeee3RSfrPSUcCowCjuTNETBrUFAA07du4Y4NzlosRUjSUFjD9svARELxwNRYMgfx/+Su79p3m0qeKOSj0Lt8Oiytm3n8i49dotaZpx/6gjcR3xduVTJU5yWH50Vh4Vdifv56ie01Jiu+Ip34HogH0YDbv2O3YdU4wcsTKohzzqx0q6Aebo/oOyAKvaWM400V98hjdLuRUZ33T7eiDrA7hu2YY61tW77z4D/X1YB8ZvjN/AxNSUgyb8+M0ByB91uDsjQrROM0hrd8NukLBIIVdQZtwKeU+8bCgqqqwkkcJhp/P/b8fzSPILEX+5XEplcXHYSlK8czheOTq/J5H+fu49UrfD+xeN9peXSm2MwNchohEmfMzyRISTQVGQrXv+ovrW2evkqK4tjpgtn1UcUZMEHKHMXXMfS+49XaFwReSsp2cS2Nlhb0OX/6/6mVyFchXIi9JZRDCmJpvmgNu0IhmFvTUirdrHQ8psIf7f7kkqJULuN/W76TOIjCiViFAJ80M2SRnOA+b26WRaSlb5r+8eGLDY5cvVoniuuJjYMO6WQLQ7l2S6/TBexWUzNNO/bMavZFUEK4A02ulyPlytLo/edAttykrlwf34/oN1b42AjZ0q9Zy5c+apVPPmzl+gVi9YUOmo2rwu4CO6l7q/vUJWphNRcuKadJ2SnNDl7WqJjqHQsRzbjn31++IJCqT+rB5YOmOZJXkvDOy+3gTGksa1XM0BGTDXXQK09sGL+7B9h4KH8B25uN0OkP9McpNewTTqz/4Un1CarPeYZEZDXvbDX5KiB1+cnF2FXfoOGB1fzfFvneOr/qN1V2bmqdk1fwD74FDQDZthpBx2B914qAHj/KNTjh3xcXvcuE/BmP87DlHkG62MMihUispU5n1i0A2yfTBPJs976E/MjKRHcm/k5T9hSCv0cvH+kae/ylBlvAL/0yfVuOj1Z/atq6W8zhiu3b/OvkUbTQxKjATSqGznQVH0OJlUlnRoEPE/VaAZLO7WaWeWOMvUM6Zpi2yNUmnY9JWDkT6WWcdVagqsbVZNgZLbz7qeNk5DE4gMWqaw2Buucnr9wXJd0WiuWMZvyDbR6ebstlwjeB5VdLzSEZbJbJ2rf0y3MHg5RgcLlhaxOVYokFbUQkzB+SnJtdI1txQtofC5pvWNYrPeVV5OnsP74NSquaQw6xL4d/AnV6DSUmANVLhKelw9JT2A2CutoCOa6Y1dK1gk0SLa5B9/rJhkiC0+JkUM1s0RO44s4VtCJT6SqzE/Sp1Wkk8n8SAK6fwXlQTzBFe0XGKwPIr45rejAltzeU1U6Y97Z1EoyxM143fvxSbTW54DdtjSLM0LGj405AWbpRZr0wtoWoknK83luZAPEZ6zlCOTEd5JJLkckvKwdUpRp2ixEEQLg/rUVyl9MrWTpBTQ9aLPWaN85cUtUvSiqt4ZpUN/JgpL3W2QEuHylBAkWHRckHIwOflgigA0NfF94jHiBP7sgD2j2rowPX2anFxdEJCcJ+TaJqAz8tRKcbrbet3BkeYSLgL2cdSer1LZ81FN4Y7pBjVi5m+szN+YjMeZrMdg3dch6gwhgzEc9lYLh493hjqDnOUAYFJ7cbdJO7c0VkXuLqa0dIKWKtBoCftgLHZfOO6naZf8uYimK0Uu795sV6eMF/tF7L/qwZe4H0NGZUXsP7rjo1LCAQLj6hgqXIVp1lhWFZN5f2VOXi3aZ5+EPVwaS9OEDBujcup/JFkZvFyjgwXJiti5VqgmrWgWSjj1dSf0YXcxgDnRUMsafE09QOOottBrBwAh1/RN2SvmiAOvARLG20PZu68dn66sUJ4UFN4W9Swc2Hyn7MFkH8YP16fuQyhAMlySvHoNo0FLXbOletrn/xVNWLHCYf58VLuhfw9jh5cTHW7bLOACrRAd/dl/FcyJtWuwNctRHT6LdV3fejsngPdfqm+7HjgywEcnk1AUuXnAEQeA1omtNtGl851RzH5qSuKXcJu2XA9kfIDEzFiWkvLrOwWaHmcto7Cc2XOG13Pu/3/YvirzwiV1k/i1EQi3ux+EqCQzFcizX/yA//Ci7rggL3bLMom8HGNh/u4/IMn8XY6L4e96yWCt6BdgMTZu4BlgzdhWSdo9MqLtymtGUkRsexymAni1gW7E/fwiCVBgxoJgNwictl0zsIEtFG9n0VKAVSzlqF7R/QRFMYbztf0TsabH/kZsIhTOORrCPgp/iEHOAb7sSLLzsdGQ9mWNxvR3PKyP/GQFq79vJXa9chkfa6rdHHpfz0fYrYplQqzV3wdGNTqHg994dh8evoBfODIMNL9S87QQRJr+sZdOQYmuN951dBhwVwVu9ia4lkZGu7be/NiP3WnGDlavSnXPl/Kc/pw53dvZqVtn6fJ2DtxfttlSyAD43CZTjgz/iP94dPjLFCFZhOL4Hj32dlqht5hheuW8LAoZHl7cIwjQtj8FcME0SJ2KbuCu6AfCaVrnutC01yGTNXuH782jw035b9P+K0w8llRIXU32/Sf0JyTKnezqyu0j/Eop76MKlnVtfzpqGJ+If4gfxst+RXRlV6wKzZtjiu9XHb24RPP48acw7nvRHcM+OlL/OR3049YZVM8CC96t8fyu677TUt1sqQuidVMtn48yO4NXyALqnWgIJZUy1FpSK1aY53r/MyDFN23ysT8fM0UVNCOFNRZ/DOZCY9gn3xR71ucjw45poWng3aJZG+qSnrJ+puxnsFzKPHkg3xXHe1VtSywJ2xz+lbvklK2D7Y+k+iANu5qWM2OaLlMtMvgH2NPF7mHJlvlPdeQnFNeHAsWRhXMIliQ1xomJ2ZaX25wC/h+czXyMeovQX4tl+a83BqJ6/EQ7OmzDrUeG+cde40LcX5iyDXRdc20Lr4sVuauyDn5SluAM7irTVO4Ya6emPyJGa68zYkM+S1DzmP1XQ8vBNW25X/g1WF74CIj1VYIle8jyAiDSi43lSismThSLVKjfqokpMkRhexxA9BLj5hK9VjQ3UpoPLQVLOVE6mtSF699/Sn9qRTAonXZA7vLnUS6+arr4y+t1bjo/U7ZRcqGw8HyK6jN4c/JPhQUvkkEBxe1NOTr8oXv18X92DLThGf0ZsxR3HmlYDaxHjH4s7RbqyBhxh/LhecnNa/2Ec2TCWPpOVsLu/ZPi939CT6bTkses2k9IqEtmethSk0FOj0z4834C4fzuhGQGLZku9hsf1+fvTWjb+hAseNSQmXoumVEnY7Doq3JfrBoTOYh+Pt7Ng06jXsZk0fPgUfxbtFmIK/K2f0ePJDSejac4KPS/4gcPj/i9m+KTaPQI2rf3tRNuDcYzaTSm5uT3k+JvnRQyXdc+esVeQmJtMr0iU2LQyWiRozI5d5GAxaCxBCdvpVtnB6nDED2ZOnj2fnqbCJGLj9u31xWQwuwWWnTTnesB9gfJMTO6Y5K/vEl4tJG3CeGsFjoPbjNZHTOik78aapRthhIZkfJb9MuPRmwDpdfZA1ssXWnpApLMo8xmqvU0TvbAQVk4jcQgxUyMP5+npYJ68SpZCKXyefpssT636PVbCxmMbAH9NnpqdULi2mSlB5VbDHmM2+j11fHUNLae7RI4NQZ3ljJAWyBWu7JeYgtl68O2hF5/X5xsaaScQ+cJBCnh9lCZ9VK2h5k8Nd4cWTUmWUTf6ZP2i32y6IzXE84zNlfF/sK9+Nolj+mRYwJTCPELkxmeLJkwPRJX7YsnfD5nbCS9x7dyjvNE0J0GvZwBB/fHrzAcCbcoP9BzCGeWTUyktalRmwSXIAgB60q+IJlBgwXXZn782U2jImkqLElmxcFragJh74o/k2iMJCES4ca6JmROPYImTumTtAi1jN60jv95/9fyGryw/EKVe8Wordh3LXdmbE1MPLys407K7y2BfUwzbt1ssoaccSdlfPyjCWzAnk1duegrqS+m0ZWAPLtl0ZTgInBhdu2i1sZFoGH2gkVVYdXbzKUIsCsQjVIkejRE2wvSQBoxQmmAeP3g7Byyo7c1bvyIic/ryRwd2+iI/TUu/c0Vgzm9LosLvJs9/vF4wgsF+trMFFoGswCwh6grMsj/TNLf+Apw7huZMXHPeMJ5IaVcYdr5LXdbgZSnOWRUOEAPeX0UBZNGZT2zveM+s6ZShE1frzjpJM1cnq920i7SmRdpTvV8RID9TwaBtBHBEWmPtB+VPe2JfA6f/uAm/JHvXYuJD7Tqijm9NFJyBlsw/Vrwo4AAoCo7sI6yAvsCOyvq/FTURUA5yCcqWxF1gcvOaj6/ovmlj0FMyfZj+1UK0lQKw9hCtpAtZAvZcracLWfLK0OBXpuXtKOOOu3FPhWV+EtlMkfPAGmjkgKjTgP7FE1Mj47Os7ARlSRTTyuBamD7NicuqSZiTJWxUthmtplt9punAZ2pfDuM/Tb7bfbbled8E+fcoQyKLFTDOP7j4SAAaM7hFBpn4EoAfOy8hRP7GqAtM76xs7BLff9NeCdU7mGX0f9uHEvRk0D7jGd8N+HDaOAJx9F1LQCa9kcP1BIsu9VVRMj9NJMyjn6VTzme0N0WGdgCaL2jl3lbCuwNvwR7w+TIoeJoMk103DjUU6O1+DEtOYEnI1y7mgRdzZT006q55KOtbGDfUdFji+PT7P8unPnOXWtZoE/Rt1QHVf2l9nHtoVXkq8KbU4xXyEMM3iFN/c0xvz3w4O6Vmw5YVdAZ+Dac773byHfj2T48ZAAfqDR8GcYZQI+DvdkyI12eje95+jzrS0Frt+IxNgbkmjjMje8ONf4KgbU7nvG9KN1V8ylAiSgJnUbJ6AxKQe+gLHQeZaML6CLKObFc+uv9l/8smnOz3uibctdrtr4FgLLQi4C7/2IYloAeAAVg3jsB5SPAc/tPANgN8DPEneK822ZjhsNMFdNpSPz96F80bkOONnG2pvVjxegxFSgmjkKL6TSltwF8GdVDVGILzmPBHZ5kQxSMPmiwkJNYeXotqDJiLnZtGofOH8BYiJ36d6zPY9E6GwzS+lGDRVuyYYkUGXaPhJHNjjEF73koUxWkyxRpf/vEC1A7es2BazxtyLtFgyp/8DxBJy8sd73U5GUrCoYb3QcgJjl9GB8jO58uzvhQAnWhoOXhic8Ulq+fajLNUSXsKS+J5DaEzpXGHHFhYy2vr2oHedya9p9qS0MLCkOo3Mn9b7TeYiYfAm80T2m4hHrjBeKlJKQe+vVxUpNvw4q/LeW0SA6hxEpi3pmvzWlPtiSSDHitn3JsvRZUE210yVlcBV218ebab5JvHoFz04f+XCxoG+ni2gKPuUkas5858xZqrcOQn3yHiz2k+kf5lYdDZiN+zs32oJ/rNm0lRcV1h8eDm6Qxu90Zt601843W7sxNVoT/7hoIAHyO8m1Kz8d9VM8iCWIWAPjptbla7z0NLf3zmoce03cvA1DBAAAg4BcjZ3aZg5LJCii6aSIkvnsoi6uwSxJwuQIcRM/lthI3rotwwMBJGLUrnKvA0hV0c8JMGhWCCwpRlgvF0oF9vjKoOKfbanI1ACBW4HvZQjinFadPSO3BMWsZKMsot4n5Oew1nh5QwoEIe3ouTgYYxESRUyWNOaIzQ81qVtqsUMtQJHHd1ms2Adt90G3VPNuZDBnNJgqA5znsPJItsjnJEltM5ANMlgaj5Wke0mup5JawUH5VUujX7slmJSvaG2/rMjXJ8SJPtunvf3hyNpBc9uuzpM6TnZTIJb9+qq709esMLNYJ1spx3fhb1/pHyaVUil3Xev3GSd7M56x811r74KXzlN1cawh50SWjY9bj5Pm13xgXKMizHoBSAYrdSBYq4jCQjhMFi8HOq7psUSJBhwkHYyyaYMJDDupymJD8sHvqr+E3rso7XTvsyQlh/eQqO8M2ZEjX17bdx3SG5GU3exkn6br2trMxlH9G5TaOurJANtcMOwTGHLuKKkMXyuZ67Q2/n7MGSs5q/q7e85NsV3KZrjc23R2Sp54E5x10L1wNLXDlOEGoJBrbfkuX2t4hGXaHHN/t1Y06lIkVInoE1gMA5wCApw9tPCYNp8u3713h4a21vWxzkUa21eeqTCgA/WJQmfPDOAS4cGe5cY/mApzRNwjdpQQ6nVDfarxhBBgAFk4IkPcGgB6D6xMR0hgyDv/6iQRK/WzKiV74azmRikTuiSxCRJ7IFkB2whZMhEkE+HmVXhz08TNkdv7uY5cBDBqEYeoZtcKE1PIpVq1WjYBWVtWq1GoTZlKtlVozTK16LTJYNajXIKBVq0YtJDg4Wvg0q9WoVYtcLWqF5GrQrAZHPh1LNHHmzkkKi+TmA6q1MvCDexbz8LZDUibqtkPiQbtco2c+BNOclzsjREZtU6OpmtuHSKHcMp3BGbC6jFjpAs0h1xXqC02rtA0aaBniVZ3Vlpkatc50Gzypr8vm4iSolZO7lvnezwB4TvWGUXrzKURHACLnC9yH2+qkbYrtxFCF6Ucs1c654KJMWdiyXXLZFVf7I3jTefz4vvaNGtcs85l2r3hJ2FNBvetuCLgJISmFMj+T0wgGX7c69cL6HaTTQO8nBo3toTX1AjDZ4pZW7To0do610f0bfCgLTWE31Xs6TbPBRTu86RUnlyILHFPifd3ed6knhJEXDnirJ4aEbz8LQh8F/71IQ6xBVESDHsueWbHFBNuQbEHRSGijb82zGRVHXgp5wyZMZl4KSnEZ6PC5cKectsttd3zhpla97vLCOLZKtRrt1Cr8/fe/uLpGZVU3bdcP44QJZVxIpY2d3bL6ELe039ze3T88Pj2/vPIFQpF46sSBQ6Bm+xqtw+aoyCTWr37VRWAyshVO2OxAZpHpsqKKUiDfZXZFPtusgPw5bjaokJ2Dk0uRYiVKlSlXoZKbhxcG51Olml+NgFp1g4ut0jDv1jFA2WfiPZ26hin7xweCERTDCRqdwWSxOVweXyAUiSVSmVyhJFVqjVannx6oK267744hDxqMJrOFstrsDqfL7fH6/NTaIw5YGarQGK+C2A5+v1+GZYQ3OwGkj9qoL/07c68MvDvUbI+3nPa5e3P1+491W4Pneb/PVbe0e0xcErifthf4z5SaDruNHIZPTtOWuGOZ5irGvUSxkW/JfoTh1JjkFNPyh5i5jXGBAwdNb9HWEMX7YYHLwWds808fFfPtLrhkm0YWTh4dTg67oBYZjGJ8OlN0cG7hBO75FEIT2a6gomd2M4x8nBYtRWNC59ME/xX6CCpC5hs73aX3bRg8wBLFNjrF3Lum0d0QksV7MUchtmXLYd+jxg7MEFzx0Q1NwYJgae4GKw1OZGZ2YNZiDw/G43S8uWGWGRq++3KgyHWGg1xHhpnnwW9yu1qdDwn802z6c8dm6SwVTCrh3JLiDIfHpRg4gaW4xnwLuTAv16UXhe9xtRv/0ZOctDFKoEHB0+jpj6w+3221X2ROstEtkbT1AUq+oXc1tDz3ZD+5EuwkmulZ6hJPWmY2hWyau8Pr3Kebzs3307f3d/f3vb/VsZ+/2O14olfn0zE3sz+e1WUyRj/c+TQYen4ajL/+r7RZkA77RDTDxLxmOkbwRa/dU7/6DKsnfp34u8D2F0LWMITBgZbo4DvVNHO30MUYvhLDCZ8yXQK2wG1zagGykzS2qEgkn//NAMYw/V9cfwZ+czWnsVhR2CHxI5nuMglltp0rST2FvuauIyJPnHxXxvKaNZdTLjHVPjOdQDRLlCK+ZinlSDzTUOYI5sE5IDBIds9D6PBoFDTOGK26Aw+EuALqrnMAa1n0d0rxBYec5BTPIwFR/Ih6ltXDG6+m0fotynmMqrlQVVMw80au4EJcjpBxwCS9+RJPgbhy13+Mi2oxnpFP4yAVAYqosgahtpEs1SCIshK84yQrwqkobFIttH8qaUcvfOKNrhVrrmOXqSWIe5lRYXasCL1EFULWcFCqD6oXIE1F751QsaZMwOrTcg83/m8eaQZxiHNBffNgz4U/5lBU2aFmhew4tMamXRbHAM/83S3VGANAfxSOd+PYN62417OZExf//gj1cIUPjYtwkDQuMHCaxhGQZ7jguSOuVeOCBIDXwpEmRupKiiIuHJw7GP0P5FEUJ/Twd08Lg0Rw7dkhQE12Nv5HZtBXnIxNT/NpGH05i6N/dX8+b/49cxRcAQ==";var Jt=16,ts=2.4,si=4,Bu=1.1,ai={body:new _s({color:15131870,roughness:.6,metalness:0,clearcoat:.12,clearcoatRoughness:.6}),key:new _s({color:15526886,roughness:.32,metalness:0,clearcoat:.5,clearcoatRoughness:.25}),hole:new Ln({color:1513499,roughness:.9}),graphite:new _s({color:3422012,roughness:.5,metalness:.15})},Es="#2a2b2e",Vx="#6f6d68";async function gf(){let n=new FontFace("JBM","url("+pf+")");await n.load(),document.fonts.add(n)}function vi(n,e,t,i,s=96){let a=new rr(n,{depth:e-2*t,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelOffset:-t,bevelSegments:6,steps:1,curveSegments:s});a.translate(0,0,-(e-2*t)/2);let r=a.attributes.normal.clone(),o=ff(a,on.degToRad(32)),c=a.groups[0];for(let u=c.start;u<c.start+c.count;u++)o.attributes.normal.setXYZ(u,r.getX(u),r.getY(u),r.getZ(u));let l=new bt(o,i);return l.castShadow=!0,l.receiveShadow=!0,l}function ya(n,e){let t=new vs(new ja(Bu,20),ai.hole,n.length),i=new vt;return n.forEach((s,a)=>{let r=(s[2]||Bu)/Bu;i.makeScale(r,r,1),i.setPosition(s[0],s[1],e),t.setMatrixAt(a,i)}),t}function vf(n,e,t,i){let s=document.createElement("canvas");s.width=Math.round(n*t),s.height=Math.round(e*t);let a=s.getContext("2d");a.scale(t,t),i(a);let r=new qi(s);return r.colorSpace=Yt,r.anisotropy=8,r}function Li(n,e,t,i){return new bt(new Ii(n,e),new Ln({map:vf(n,e,t,i),transparent:!0,depthWrite:!1,roughness:.8}))}function wr(n,e,t,i=40){n.setTransform(1,0,0,1,0,0),n.font=`500 ${Math.round(t*1.32*i)}px JBM`,n.textBaseline="middle",n.fillStyle=Vx,n.letterSpacing=`${.5*i}px`,n.fillText(e,0,3.5*i)}function xf(n){let e=new An;for(let c of n.arms)e.add(vi(new xn(c.pts.map(l=>new Ce(l[0],l[1]))),Jt,ts,ai.body));let t=vi(new xn(n.tri.pts.map(c=>new Ce(c[0],c[1]))),Jt,1.6,ai.key);t.position.z=3.5,e.add(t),e.add(ya(n.holes,Jt/2+.06));let i=ya(n.holes,0);i.rotation.x=Math.PI,i.position.z=-Jt/2-.06,e.add(i);let s=n.arms.slice().sort((c,l)=>c.centroid[1]-l.centroid[1])[0],a=Math.min(...s.pts.filter(c=>c[1]>-108&&c[1]<-42).map(c=>c[0])),r=Li(62,7,40,c=>wr(c,"AURALITY  AU-01",4));r.matrixAutoUpdate=!1;let o=new vt().makeBasis(new Z(0,1,0),new Z(0,0,-1),new Z(-1,0,0));return o.setPosition(a-.05,-78,0),r.matrix.copy(o),e.add(r),e}function _f(n=10){let a=new An,r=new xn;r.absarc(0,0,90,0,Math.PI*2,!1);let o=new di;o.absarc(0,0,62,0,Math.PI*2,!0),r.holes.push(o),a.add(vi(r,Jt,ts,ai.body));let c=Li(180,180,12,A=>{A.translate(90,90),A.strokeStyle=Es,A.fillStyle=Es,A.lineCap="butt";for(let S=0;S<60;S++){let v=(S*6-90)*Math.PI/180,M=S%5===0,w=66,L=w+(M?5:2.5);A.lineWidth=M?.8:.45,A.globalAlpha=M?1:.7,A.beginPath(),A.moveTo(w*Math.cos(v),w*Math.sin(v)),A.lineTo(L*Math.cos(v),L*Math.sin(v)),A.stroke()}A.globalAlpha=1,A.font="500 5.2px JBM",A.textAlign="center",A.textBaseline="middle";for(let S=1;S<=12;S++){let v=(S*30-90)*Math.PI/180;A.fillText(String(S).padStart(2,"0"),79.5*Math.cos(v),79.5*Math.sin(v)+.3)}});c.position.z=Jt/2+.05,a.add(c);let l=new An,u=new xn;u.absarc(0,0,59,0,Math.PI*2,!1),l.add(vi(u,Jt+4,ts,ai.key));let d=(Jt+4)/2+.05,h=Li(118,118,14,A=>{A.translate(59,59),A.fillStyle=Es,A.fillRect(-.7,-52,1.4,20)});h.position.z=d,l.add(h);let f=[],g=[si*Math.cos(Math.PI/6),si*Math.sin(Math.PI/6)];for(let A=-3;A<=3;A++)for(let S=-3;S<=3;S++){let v=S*g[0],M=A*si+S*g[1];Math.hypot(v,M)<=2*si+.1&&f.push([v,M])}l.add(ya(f,d+.01)),l.position.z=4/2,l.rotation.z=-n*Math.PI/6,a.add(l);let y=on.degToRad(315-17.5),p=on.degToRad(35),m=new Ka(90+.12,90+.12,7,64,1,!0,y,p);return m.rotateX(Math.PI/2),a.add(new bt(m,new Ln({map:vf(55,7,40,A=>wr(A,"AURALITY  AU-02",4)),transparent:!0,depthWrite:!1,roughness:.8}))),a}function Ni(n,e,t){let i=e.length,s=(a,r)=>new Ce(r[0]-a[0],r[1]-a[1]);for(let a=0;a<i;a++){let r=e[(a+i-1)%i],o=e[a],c=e[(a+1)%i],l=s(o,r).normalize(),u=s(o,c).normalize(),d=t/Math.tan(Math.acos(l.dot(u))/2),h=[o[0]+l.x*d,o[1]+l.y*d],f=[o[0]+u.x*d,o[1]+u.y*d];a===0?n.moveTo(h[0],h[1]):n.lineTo(h[0],h[1]),n.quadraticCurveTo(o[0],o[1],f[0],f[1])}return n.closePath(),n}var mf=n=>[0,1,2,3,4,5].map(e=>[n*Math.cos(Math.PI/2+e*Math.PI/3),n*Math.sin(Math.PI/2+e*Math.PI/3)]);function yf(){let a=15*si,r=a+5.6/Math.cos(Math.PI/6),o=r+3/Math.cos(Math.PI/6),c=new An,l=Ni(new xn,[[-84,-84],[84,-84],[84,84],[-84,84]],8);l.holes.push(Ni(new di,mf(o).reverse(),5.5)),c.add(vi(l,Jt,ts,ai.body,24));let u=vi(Ni(new xn,mf(r),4),Jt,ts,ai.body,24);u.position.z=-2,c.add(u);let d=[],h=[si*Math.cos(Math.PI/6),si*Math.sin(Math.PI/6)];for(let y=-15;y<=15;y++)for(let p=-15;p<=15;p++){let m=Math.max(Math.abs(y),Math.abs(p),Math.abs(y+p));m>15||d.push([p*h[0],y*si+p*h[1],m<=10?1.1:m<=13?.8:.5])}c.add(ya(d,Jt/2-2+.06));let f=Li(62,7,40,y=>wr(y,"AURALITY  AU-03",4));f.matrixAutoUpdate=!1;let g=new vt().makeBasis(new Z(0,1,0),new Z(0,0,-1),new Z(-1,0,0));return g.setPosition(-84-.05,-41,0),f.matrix.copy(g),c.add(f),c.userData={Rf:a,Rp:r,Ro:o,holes:d.length},c}function Af(n=[4,9,7]){let i=[-24,0,24],s=3,a=-86,r=74,o=-78,c=12,l=new An,u=Ni(new xn,[[-40,-110],[40,-110],[40,110],[-40,110]],8);for(let p of i)u.holes.push(Ni(new di,[[p-s,r],[p+s,r],[p+s,a],[p-s,a]],2.9));l.add(vi(u,Jt,ts,ai.body,24));let d=Li(80,220,12,p=>{p.translate(40,110),p.scale(1,-1),p.strokeStyle=Es,p.lineCap="butt";for(let m of i)for(let A=0;A<=12;A++){let S=A%6===0,v=o+A*c;p.lineWidth=S?.8:.45,p.globalAlpha=S?1:.7,p.beginPath(),p.moveTo(m-6,v),p.lineTo(m-6-(S?5:2.5),v),p.stroke()}p.globalAlpha=1,p.scale(1,-1),p.fillStyle=Es,p.font="500 5.2px JBM",p.textAlign="center",p.textBaseline="middle",["L","H","O"].forEach((m,A)=>p.fillText(m,i[A],98.3))});d.position.z=Jt/2+.05,l.add(d);let h=[[0,92]],f=si;for(let p=0;p<6;p++)h.push([f*Math.cos(Math.PI/2+p*Math.PI/3),92+f*Math.sin(Math.PI/2+p*Math.PI/3)]);l.add(ya(h,Jt/2+.06)),i.forEach((p,m)=>{let A=vi(Ni(new xn,[[-11,-5],[11,-5],[11,5],[-11,5]],2.4),8,1.6,ai.key,12),S=Jt/2+1.5+4;A.position.set(p,o+n[m]*c,S),l.add(A);let v=Li(22,10,20,M=>{M.fillStyle=Es,M.fillRect(2.5,4.45,17,1.1)});v.position.set(p,o+n[m]*c,S+4.05),l.add(v),(l.userData.cursores||=[]).push([A,v])}),l.userData.TR0=o,l.userData.STEP=c;let g=Li(62,7,40,p=>wr(p,"AURALITY  AU-04",4));g.matrixAutoUpdate=!1;let y=new vt().makeBasis(new Z(0,1,0),new Z(0,0,-1),new Z(-1,0,0));return y.setPosition(-40-.05,-67,0),g.matrix.copy(y),l.add(g),l}function Mf(n,e=2){let d=new An,h=Ni(new xn,[[-100,-34],[100,-34],[100,34],[-100,34]],8);h.holes.push(Ni(new di,[[-178/2,46/2],[178/2,46/2],[178/2,-46/2],[-178/2,-46/2]],5.5)),d.add(vi(h,Jt,ts,ai.body,24));let f=n.tri.centroid,g=n.tri.pts.map(v=>[v[0]-f[0],v[1]-f[1]]),y=Math.max(...g.map(v=>v[1]))-Math.min(...g.map(v=>v[1])),p=13/y,m=[null,v=>v.fillRect(-5.5,-5.5,11,11),v=>{v.beginPath(),g.forEach((M,w)=>w?v.lineTo(M[0]*p,-M[1]*p):v.moveTo(M[0]*p,-M[1]*p)),v.closePath(),v.fill()},v=>{v.fillRect(-5.5,-6,3.6,12),v.fillRect(1.9,-6,3.6,12)},v=>{v.beginPath(),v.arc(0,0,6,0,Math.PI*2),v.fill()}];for(let v=0;v<5;v++){let M=v===e,w=M?Jt:Jt+4,L=M?-2:2,_=-178/2+3+32/2+v*35,R=vi(Ni(new xn,[[-32/2,-40/2],[32/2,-40/2],[32/2,40/2],[-32/2,40/2]],4),w,ts,ai.key,16);R.position.set(_,0,L),d.add(R);let O=L+w/2+.05;if(m[v]){let z=Li(32,40,16,G=>{G.translate(16,20),G.fillStyle=Es,m[v](G)});z.position.set(_,0,O),d.add(z)}else{let z=[[_,0]];for(let G=0;G<6;G++)z.push([_+si*Math.cos(Math.PI/2+G*Math.PI/3),si*Math.sin(Math.PI/2+G*Math.PI/3)]);d.add(ya(z,O+.01))}}let A=Li(52,7,40,v=>wr(v,"AURALITY  AU-05",3.6));A.matrixAutoUpdate=!1;let S=new vt().makeBasis(new Z(0,1,0),new Z(0,0,-1),new Z(-1,0,0));return S.setPosition(-100-.05,.5,0),A.matrix.copy(S),d.add(A),d.userData={ancho:200,alto:68},d}var Sf={height:240,width:207.6,stroke:27,pitch:4,inset:5.6,arms:[{area:3966.4,centroid:[33.297,-58.997],pts:[[36.965,-18.184],[35.78,-18.397],[34.594,-18.781],[33.409,-19.326],[32.223,-19.953],[31.037,-20.632],[29.852,-21.314],[28.666,-21.999],[27.481,-22.685],[26.295,-23.365],[25.109,-24.042],[23.924,-24.718],[22.738,-25.405],[21.553,-26.094],[20.367,-26.786],[19.181,-27.477],[17.996,-28.164],[16.81,-28.841],[15.625,-29.524],[14.439,-30.211],[13.253,-30.902],[12.068,-31.581],[10.882,-32.263],[9.697,-32.936],[8.511,-33.627],[7.325,-34.318],[6.14,-35.008],[4.954,-35.691],[3.769,-36.367],[2.583,-37.052],[1.397,-37.739],[.212,-38.43],[-.972,-39.177],[-2.129,-40.057],[-3.206,-41.079],[-4.124,-42.216],[-4.86,-43.402],[-5.387,-44.587],[-5.746,-45.773],[-5.993,-46.958],[-6.147,-48.144],[-6.247,-49.33],[-6.298,-50.515],[-6.309,-51.701],[-6.309,-52.886],[-6.309,-54.072],[-6.309,-55.258],[-6.309,-56.443],[-6.309,-57.629],[-6.309,-58.814],[-6.309,-60],[-6.309,-61.186],[-6.309,-62.371],[-6.309,-63.557],[-6.309,-64.742],[-6.309,-65.928],[-6.309,-67.114],[-6.309,-68.299],[-6.309,-69.485],[-6.309,-70.67],[-6.309,-71.856],[-6.309,-73.042],[-6.309,-74.227],[-6.309,-75.413],[-6.309,-76.598],[-6.309,-77.784],[-6.309,-78.97],[-6.309,-80.155],[-6.309,-81.341],[-6.309,-82.526],[-6.309,-83.712],[-6.309,-84.898],[-6.309,-86.083],[-6.309,-87.269],[-6.309,-88.454],[-6.309,-89.64],[-6.309,-90.826],[-6.309,-92.011],[-6.309,-93.197],[-6.309,-94.382],[-6.309,-95.568],[-6.309,-96.754],[-6.309,-97.939],[-6.309,-99.125],[-6.309,-100.311],[-6.309,-101.496],[-6.309,-102.682],[-6.309,-103.867],[-6.309,-105.053],[-6.309,-106.239],[-6.309,-107.424],[-6.309,-108.61],[-6.309,-109.795],[-6.309,-110.981],[-6.292,-112.167],[-6.238,-113.352],[-6.093,-114.538],[-5.799,-115.723],[-5.248,-116.905],[-4.41,-117.989],[-3.339,-118.847],[-2.159,-119.382],[-.974,-119.596],[.212,-119.641],[1.397,-119.651],[2.583,-119.67],[3.769,-119.7],[4.954,-119.773],[6.14,-119.839],[7.325,-119.843],[8.511,-119.773],[9.697,-119.64],[10.882,-119.436],[12.068,-119.073],[13.235,-118.42],[14.236,-117.511],[14.93,-116.401],[15.307,-115.215],[15.491,-114.03],[15.632,-112.844],[15.737,-111.658],[15.788,-110.473],[15.794,-109.287],[15.794,-108.102],[15.794,-106.916],[15.794,-105.73],[15.794,-104.545],[15.79,-103.359],[15.743,-102.174],[15.69,-100.988],[15.625,-99.802],[15.538,-98.617],[15.459,-97.431],[15.378,-96.246],[15.337,-95.06],[15.31,-93.874],[15.271,-92.689],[15.244,-91.503],[15.218,-90.318],[15.167,-89.132],[15.115,-87.946],[15.062,-86.761],[15.032,-85.575],[15.032,-84.39],[15.032,-83.204],[15.032,-82.018],[15.032,-80.833],[15.032,-79.647],[15.032,-78.462],[15.032,-77.276],[15.068,-76.09],[15.12,-74.905],[15.194,-73.719],[15.259,-72.534],[15.325,-71.348],[15.448,-70.162],[15.615,-68.977],[15.788,-67.791],[15.967,-66.606],[16.174,-65.42],[16.422,-64.234],[16.718,-63.049],[17.025,-61.863],[17.382,-60.677],[17.77,-59.492],[18.223,-58.306],[18.733,-57.121],[19.319,-55.935],[19.987,-54.749],[20.747,-53.564],[21.622,-52.378],[22.64,-51.202],[23.762,-50.094],[24.94,-49.098],[26.126,-48.24],[27.311,-47.523],[28.497,-46.917],[29.682,-46.403],[30.868,-45.987],[32.054,-45.643],[33.239,-45.387],[34.425,-45.197],[35.61,-45.046],[36.796,-44.939],[37.982,-44.836],[39.167,-44.815],[40.353,-44.894],[41.538,-45.078],[42.724,-45.34],[43.91,-45.671],[45.095,-46.072],[46.281,-46.529],[47.466,-47.013],[48.652,-47.54],[49.838,-48.074],[51.023,-48.643],[52.209,-49.209],[53.394,-49.8],[54.58,-50.415],[55.766,-51.05],[56.951,-51.695],[58.137,-52.339],[59.323,-52.994],[60.508,-53.647],[61.694,-54.322],[62.879,-54.994],[64.065,-55.696],[65.251,-56.389],[66.436,-57.083],[67.622,-57.793],[68.807,-58.504],[69.993,-59.219],[71.179,-59.93],[72.364,-60.649],[73.55,-61.363],[74.735,-62.089],[75.921,-62.808],[77.107,-63.534],[78.292,-64.257],[79.478,-64.97],[80.663,-65.693],[81.849,-66.406],[83.035,-67.131],[84.22,-67.829],[85.406,-68.523],[86.591,-69.193],[87.777,-69.842],[88.963,-70.469],[90.148,-71.041],[91.334,-71.495],[92.519,-71.736],[93.705,-71.689],[94.891,-71.299],[96.048,-70.576],[97.128,-69.596],[98.084,-68.465],[98.895,-67.283],[99.603,-66.097],[100.256,-64.912],[100.881,-63.726],[101.519,-62.541],[102.194,-61.355],[102.832,-60.169],[103.339,-58.984],[103.613,-57.798],[103.626,-56.613],[103.382,-55.427],[102.8,-54.255],[101.92,-53.193],[100.819,-52.284],[99.633,-51.533],[98.447,-50.848],[97.262,-50.159],[96.076,-49.461],[94.891,-48.774],[93.705,-48.089],[92.519,-47.408],[91.334,-46.733],[90.148,-46.044],[88.963,-45.359],[87.777,-44.664],[86.591,-43.991],[85.406,-43.313],[84.22,-42.634],[83.035,-41.949],[81.849,-41.245],[80.663,-40.56],[79.478,-39.873],[78.292,-39.195],[77.107,-38.516],[75.921,-37.827],[74.735,-37.146],[73.55,-36.463],[72.364,-35.785],[71.179,-35.099],[69.993,-34.408],[68.807,-33.723],[67.622,-33.028],[66.436,-32.343],[65.251,-31.662],[64.065,-30.985],[62.879,-30.303],[61.694,-29.607],[60.508,-28.926],[59.323,-28.247],[58.137,-27.573],[56.951,-26.882],[55.766,-26.193],[54.58,-25.508],[53.394,-24.82],[52.209,-24.14],[51.023,-23.448],[49.838,-22.759],[48.652,-22.066],[47.466,-21.387],[46.281,-20.717],[45.095,-20.036],[43.91,-19.4],[42.724,-18.841],[41.538,-18.43],[40.353,-18.199],[39.167,-18.094],[37.982,-18.099]]},{area:3960.7,centroid:[-62.05,.124],pts:[[-93.112,62.667],[-94.213,62.454],[-95.307,61.946],[-96.345,61.204],[-97.296,60.269],[-98.137,59.227],[-98.876,58.137],[-99.55,57.036],[-100.164,55.935],[-100.736,54.834],[-101.31,53.733],[-101.918,52.632],[-102.539,51.531],[-103.064,50.43],[-103.44,49.33],[-103.572,48.229],[-103.504,47.128],[-103.192,46.027],[-102.578,44.937],[-101.701,43.96],[-100.649,43.117],[-99.548,42.402],[-98.447,41.762],[-97.347,41.117],[-96.246,40.483],[-95.145,39.852],[-94.044,39.214],[-92.943,38.58],[-91.842,37.94],[-90.741,37.3],[-89.64,36.674],[-88.539,36.04],[-87.438,35.417],[-86.337,34.784],[-85.236,34.141],[-84.135,33.505],[-83.035,32.863],[-81.934,32.229],[-80.833,31.589],[-79.732,30.951],[-78.631,30.315],[-77.53,29.673],[-76.429,29.041],[-75.328,28.423],[-74.227,27.789],[-73.126,27.157],[-72.025,26.515],[-70.924,25.87],[-69.824,25.235],[-68.723,24.605],[-67.622,23.975],[-66.521,23.331],[-65.42,22.689],[-64.319,22.048],[-63.218,21.406],[-62.117,20.785],[-61.016,20.152],[-59.915,19.486],[-58.814,18.76],[-57.713,17.937],[-56.635,17.012],[-55.606,16.007],[-54.663,14.945],[-53.818,13.846],[-53.069,12.745],[-52.414,11.644],[-51.836,10.543],[-51.343,9.442],[-50.914,8.342],[-50.543,7.241],[-50.225,6.14],[-49.986,5.039],[-49.791,3.938],[-49.672,2.837],[-49.54,1.736],[-49.467,.635],[-49.467,-.466],[-49.544,-1.567],[-49.676,-2.668],[-49.802,-3.769],[-49.998,-4.869],[-50.239,-5.97],[-50.562,-7.071],[-50.939,-8.172],[-51.373,-9.273],[-51.866,-10.374],[-52.448,-11.475],[-53.114,-12.576],[-53.861,-13.671],[-54.699,-14.748],[-55.625,-15.794],[-56.641,-16.78],[-57.713,-17.702],[-58.814,-18.523],[-59.915,-19.264],[-61.016,-19.932],[-62.117,-20.566],[-63.218,-21.187],[-64.319,-21.825],[-65.42,-22.469],[-66.521,-23.105],[-67.622,-23.739],[-68.723,-24.372],[-69.824,-24.993],[-70.924,-25.633],[-72.025,-26.274],[-73.126,-26.91],[-74.227,-27.556],[-75.328,-28.188],[-76.429,-28.824],[-77.53,-29.457],[-78.631,-30.1],[-79.732,-30.736],[-80.833,-31.369],[-81.934,-32.005],[-83.035,-32.628],[-84.135,-33.258],[-85.236,-33.911],[-86.337,-34.551],[-87.438,-35.195],[-88.539,-35.823],[-89.64,-36.448],[-90.741,-37.084],[-91.842,-37.724],[-92.943,-38.366],[-94.044,-39.004],[-95.145,-39.634],[-96.246,-40.266],[-97.347,-40.889],[-98.447,-41.525],[-99.548,-42.173],[-100.649,-42.876],[-101.703,-43.721],[-102.58,-44.693],[-103.195,-45.773],[-103.515,-46.874],[-103.583,-47.975],[-103.455,-49.076],[-103.077,-50.176],[-102.548,-51.277],[-101.927,-52.378],[-101.319,-53.479],[-100.741,-54.58],[-100.167,-55.681],[-99.558,-56.782],[-98.886,-57.883],[-98.148,-58.972],[-97.301,-60.028],[-96.343,-60.971],[-95.303,-61.703],[-94.213,-62.168],[-93.112,-62.356],[-92.011,-62.281],[-90.91,-61.995],[-89.809,-61.522],[-88.709,-60.924],[-87.608,-60.295],[-86.507,-59.652],[-85.406,-59.021],[-84.305,-58.383],[-83.204,-57.757],[-82.103,-57.13],[-81.002,-56.494],[-79.901,-55.86],[-78.8,-55.212],[-77.699,-54.573],[-76.598,-53.942],[-75.498,-53.304],[-74.397,-52.681],[-73.296,-52.04],[-72.195,-51.394],[-71.094,-50.756],[-69.993,-50.122],[-68.892,-49.493],[-67.791,-48.872],[-66.69,-48.232],[-65.589,-47.594],[-64.488,-46.947],[-63.387,-46.311],[-62.287,-45.673],[-61.186,-45.041],[-60.085,-44.414],[-58.984,-43.772],[-57.883,-43.132],[-56.782,-42.502],[-55.681,-41.864],[-54.58,-41.239],[-53.479,-40.607],[-52.378,-39.963],[-51.277,-39.325],[-50.176,-38.684],[-49.076,-38.049],[-47.975,-37.413],[-46.874,-36.781],[-45.773,-36.145],[-44.672,-35.496],[-43.571,-34.861],[-42.47,-34.229],[-41.369,-33.595],[-40.268,-32.976],[-39.167,-32.342],[-38.066,-31.702],[-36.965,-31.064],[-35.865,-30.426],[-34.764,-29.792],[-33.663,-29.146],[-32.562,-28.423],[-31.489,-27.573],[-30.503,-26.598],[-29.671,-25.533],[-29.007,-24.432],[-28.521,-23.331],[-28.149,-22.23],[-27.889,-21.129],[-27.737,-20.028],[-27.669,-18.927],[-27.65,-17.826],[-27.65,-16.725],[-27.65,-15.625],[-27.65,-14.524],[-27.65,-13.423],[-27.65,-12.322],[-27.65,-11.221],[-27.65,-10.12],[-27.65,-9.019],[-27.65,-7.918],[-27.65,-6.817],[-27.65,-5.716],[-27.65,-4.615],[-27.65,-3.514],[-27.65,-2.414],[-27.65,-1.313],[-27.65,-.212],[-27.65,.889],[-27.65,1.99],[-27.65,3.091],[-27.65,4.192],[-27.65,5.293],[-27.65,6.394],[-27.65,7.495],[-27.65,8.596],[-27.65,9.697],[-27.65,10.797],[-27.65,11.898],[-27.65,12.999],[-27.65,14.1],[-27.65,15.201],[-27.65,16.302],[-27.65,17.403],[-27.65,18.504],[-27.68,19.605],[-27.787,20.706],[-27.968,21.807],[-28.277,22.908],[-28.689,24.008],[-29.242,25.109],[-29.972,26.197],[-30.868,27.23],[-31.897,28.149],[-32.985,28.941],[-34.086,29.635],[-35.187,30.27],[-36.288,30.894],[-37.389,31.529],[-38.49,32.176],[-39.591,32.816],[-40.692,33.45],[-41.793,34.088],[-42.893,34.718],[-43.994,35.358],[-45.095,36],[-46.196,36.632],[-47.297,37.265],[-48.398,37.893],[-49.499,38.526],[-50.6,39.169],[-51.701,39.803],[-52.802,40.447],[-53.903,41.074],[-55.004,41.704],[-56.104,42.333],[-57.205,42.971],[-58.306,43.624],[-59.407,44.265],[-60.508,44.896],[-61.609,45.528],[-62.71,46.153],[-63.811,46.785],[-64.912,47.423],[-66.013,48.061],[-67.114,48.707],[-68.215,49.339],[-69.315,49.973],[-70.416,50.606],[-71.517,51.242],[-72.618,51.893],[-73.719,52.527],[-74.82,53.159],[-75.921,53.786],[-77.022,54.407],[-78.123,55.045],[-79.224,55.687],[-80.325,56.319],[-81.426,56.963],[-82.526,57.593],[-83.627,58.233],[-84.728,58.869],[-85.829,59.509],[-86.93,60.151],[-88.031,60.781],[-89.132,61.404],[-90.233,61.957],[-91.334,62.413],[-92.435,62.653]]},{area:3954.3,centroid:[33.425,59.188],pts:[[.127,119.877],[-1.059,119.739],[-2.244,119.453],[-3.417,118.936],[-4.495,118.121],[-5.321,117.069],[-5.85,115.893],[-6.11,114.707],[-6.236,113.522],[-6.292,112.336],[-6.309,111.15],[-6.309,109.965],[-6.309,108.779],[-6.309,107.594],[-6.309,106.408],[-6.309,105.222],[-6.309,104.037],[-6.309,102.851],[-6.309,101.665],[-6.309,100.48],[-6.309,99.294],[-6.309,98.109],[-6.309,96.923],[-6.309,95.737],[-6.309,94.552],[-6.309,93.366],[-6.309,92.181],[-6.309,90.995],[-6.309,89.809],[-6.309,88.624],[-6.309,87.438],[-6.309,86.253],[-6.309,85.067],[-6.309,83.881],[-6.309,82.696],[-6.309,81.51],[-6.309,80.325],[-6.309,79.139],[-6.309,77.953],[-6.309,76.768],[-6.309,75.582],[-6.309,74.397],[-6.309,73.211],[-6.309,72.025],[-6.309,70.84],[-6.309,69.654],[-6.309,68.469],[-6.309,67.283],[-6.309,66.097],[-6.309,64.912],[-6.309,63.726],[-6.309,62.541],[-6.309,61.355],[-6.309,60.169],[-6.309,58.984],[-6.309,57.798],[-6.309,56.613],[-6.309,55.427],[-6.309,54.241],[-6.279,53.056],[-6.206,51.87],[-6.098,50.685],[-5.95,49.499],[-5.752,48.313],[-5.453,47.128],[-5.061,45.942],[-4.553,44.757],[-3.94,43.571],[-3.181,42.385],[-2.28,41.22],[-1.249,40.127],[-.12,39.135],[1.059,38.296],[2.244,37.551],[3.43,36.877],[4.615,36.203],[5.801,35.52],[6.987,34.828],[8.172,34.114],[9.358,33.412],[10.543,32.699],[11.729,31.999],[12.915,31.286],[14.1,30.571],[15.286,29.859],[16.471,29.146],[17.657,28.455],[18.843,27.752],[20.028,27.061],[21.214,26.361],[22.399,25.672],[23.585,24.991],[24.771,24.325],[25.956,23.662],[27.142,22.996],[28.327,22.341],[29.513,21.701],[30.699,21.086],[31.884,20.497],[33.07,19.934],[34.255,19.402],[35.441,18.912],[36.627,18.504],[37.812,18.244],[38.998,18.231],[40.183,18.459],[41.369,18.871],[42.555,19.383],[43.74,19.934],[44.926,20.514],[46.112,21.093],[47.297,21.699],[48.483,22.32],[49.668,22.964],[50.854,23.611],[52.04,24.251],[53.225,24.889],[54.411,25.548],[55.596,26.21],[56.782,26.893],[57.968,27.563],[59.153,28.237],[60.339,28.894],[61.524,29.566],[62.71,30.251],[63.896,30.936],[65.081,31.628],[66.267,32.315],[67.452,32.998],[68.638,33.683],[69.824,34.367],[71.009,35.068],[72.195,35.763],[73.38,36.457],[74.566,37.146],[75.752,37.842],[76.937,38.542],[78.123,39.237],[79.308,39.935],[80.494,40.629],[81.68,41.335],[82.865,42.035],[84.051,42.739],[85.236,43.443],[86.422,44.134],[87.608,44.834],[88.793,45.53],[89.979,46.243],[91.164,46.945],[92.35,47.636],[93.536,48.321],[94.721,49.002],[95.907,49.702],[97.092,50.397],[98.278,51.078],[99.464,51.742],[100.642,52.427],[101.756,53.267],[102.674,54.273],[103.301,55.427],[103.606,56.613],[103.634,57.798],[103.414,58.984],[102.934,60.169],[102.32,61.355],[101.65,62.541],[101.016,63.726],[100.388,64.912],[99.748,66.097],[99.055,67.283],[98.278,68.461],[97.352,69.603],[96.296,70.627],[95.145,71.386],[93.959,71.818],[92.773,71.931],[91.588,71.756],[90.402,71.344],[89.217,70.744],[88.031,70.072],[86.845,69.381],[85.66,68.706],[84.474,68.028],[83.289,67.345],[82.103,66.66],[80.917,65.966],[79.732,65.283],[78.546,64.598],[77.361,63.914],[76.175,63.227],[74.989,62.529],[73.804,61.85],[72.618,61.172],[71.433,60.499],[70.247,59.819],[69.061,59.131],[67.876,58.447],[66.69,57.753],[65.505,57.074],[64.319,56.389],[63.133,55.704],[61.948,55.011],[60.762,54.315],[59.577,53.639],[58.391,52.96],[57.205,52.284],[56.02,51.599],[54.834,50.914],[53.649,50.233],[52.463,49.544],[51.277,48.863],[50.092,48.178],[48.906,47.53],[47.721,46.936],[46.535,46.435],[45.349,46.029],[44.164,45.705],[42.978,45.425],[41.793,45.242],[40.607,45.129],[39.421,45.095],[38.236,45.095],[37.05,45.137],[35.865,45.265],[34.679,45.455],[33.493,45.731],[32.308,46.04],[31.122,46.418],[29.936,46.885],[28.751,47.436],[27.565,48.057],[26.38,48.759],[25.196,49.538],[24.037,50.419],[22.891,51.402],[21.786,52.491],[20.745,53.649],[19.802,54.834],[18.98,56.02],[18.271,57.205],[17.655,58.391],[17.126,59.577],[16.671,60.762],[16.3,61.948],[16.022,63.133],[15.8,64.319],[15.623,65.505],[15.482,66.69],[15.395,67.876],[15.371,69.061],[15.371,70.247],[15.371,71.433],[15.371,72.618],[15.371,73.804],[15.371,74.989],[15.371,76.175],[15.371,77.361],[15.371,78.546],[15.371,79.732],[15.371,80.917],[15.371,82.103],[15.371,83.289],[15.371,84.474],[15.371,85.66],[15.371,86.845],[15.371,88.031],[15.371,89.217],[15.371,90.402],[15.371,91.588],[15.371,92.773],[15.371,93.959],[15.371,95.145],[15.371,96.33],[15.371,97.516],[15.371,98.701],[15.371,99.887],[15.371,101.073],[15.371,102.258],[15.371,103.444],[15.371,104.629],[15.371,105.815],[15.371,107.001],[15.371,108.186],[15.371,109.372],[15.371,110.558],[15.371,111.743],[15.371,112.929],[15.361,114.114],[15.265,115.3],[14.943,116.486],[14.302,117.635],[13.353,118.62],[12.235,119.323],[11.052,119.698],[9.866,119.813],[8.68,119.835],[7.495,119.856],[6.309,119.901],[5.124,119.946],[3.938,119.958],[2.752,119.958],[1.567,119.948],[.381,119.897]]}],tri:{area:542.7,centroid:[4.408,.118],pts:[[-2.159,14.84],[-2.414,14.793],[-2.668,14.725],[-2.922,14.635],[-3.174,14.533],[-3.422,14.414],[-3.665,14.279],[-3.904,14.127],[-4.137,13.959],[-4.359,13.78],[-4.568,13.59],[-4.766,13.389],[-4.952,13.176],[-5.127,12.95],[-5.289,12.715],[-5.436,12.472],[-5.57,12.226],[-5.688,11.977],[-5.79,11.729],[-5.876,11.475],[-5.953,11.221],[-6.021,10.967],[-6.076,10.713],[-6.119,10.459],[-6.157,10.205],[-6.191,9.951],[-6.219,9.697],[-6.241,9.442],[-6.258,9.188],[-6.271,8.934],[-6.283,8.68],[-6.29,8.426],[-6.296,8.172],[-6.302,7.918],[-6.307,7.664],[-6.309,7.41],[-6.309,7.156],[-6.309,6.902],[-6.309,6.648],[-6.309,6.394],[-6.309,6.14],[-6.309,5.886],[-6.309,5.632],[-6.309,5.378],[-6.309,5.124],[-6.309,4.869],[-6.309,4.615],[-6.309,4.361],[-6.309,4.107],[-6.309,3.853],[-6.309,3.599],[-6.309,3.345],[-6.309,3.091],[-6.309,2.837],[-6.309,2.583],[-6.309,2.329],[-6.309,2.075],[-6.309,1.821],[-6.309,1.567],[-6.309,1.313],[-6.309,1.059],[-6.309,.805],[-6.309,.55],[-6.309,.296],[-6.309,.042],[-6.309,-.212],[-6.309,-.466],[-6.309,-.72],[-6.309,-.974],[-6.309,-1.228],[-6.309,-1.482],[-6.309,-1.736],[-6.309,-1.99],[-6.309,-2.244],[-6.309,-2.498],[-6.309,-2.752],[-6.309,-3.006],[-6.309,-3.26],[-6.309,-3.514],[-6.309,-3.769],[-6.309,-4.023],[-6.309,-4.277],[-6.309,-4.531],[-6.309,-4.785],[-6.309,-5.039],[-6.309,-5.293],[-6.309,-5.547],[-6.309,-5.801],[-6.309,-6.055],[-6.309,-6.309],[-6.309,-6.563],[-6.309,-6.817],[-6.309,-7.071],[-6.309,-7.325],[-6.303,-7.579],[-6.298,-7.833],[-6.292,-8.088],[-6.285,-8.342],[-6.273,-8.596],[-6.258,-8.85],[-6.241,-9.104],[-6.219,-9.358],[-6.194,-9.612],[-6.164,-9.866],[-6.13,-10.12],[-6.089,-10.374],[-6.04,-10.628],[-5.978,-10.882],[-5.904,-11.136],[-5.82,-11.39],[-5.724,-11.644],[-5.611,-11.898],[-5.483,-12.151],[-5.342,-12.397],[-5.187,-12.636],[-5.018,-12.866],[-4.837,-13.088],[-4.642,-13.299],[-4.435,-13.496],[-4.215,-13.682],[-3.985,-13.852],[-3.746,-14.004],[-3.503,-14.14],[-3.255,-14.258],[-3.006,-14.36],[-2.752,-14.445],[-2.498,-14.512],[-2.244,-14.565],[-1.99,-14.603],[-1.736,-14.627],[-1.482,-14.638],[-1.228,-14.633],[-.974,-14.612],[-.72,-14.582],[-.466,-14.535],[-.212,-14.478],[.042,-14.413],[.296,-14.337],[.55,-14.253],[.805,-14.157],[1.059,-14.048],[1.313,-13.929],[1.567,-13.803],[1.821,-13.669],[2.075,-13.532],[2.329,-13.391],[2.583,-13.248],[2.837,-13.103],[3.091,-12.95],[3.345,-12.802],[3.599,-12.653],[3.853,-12.504],[4.107,-12.35],[4.361,-12.196],[4.615,-12.047],[4.869,-11.904],[5.124,-11.759],[5.378,-11.612],[5.632,-11.467],[5.886,-11.319],[6.14,-11.166],[6.394,-11.018],[6.648,-10.873],[6.902,-10.73],[7.156,-10.583],[7.41,-10.436],[7.664,-10.291],[7.918,-10.15],[8.172,-10.007],[8.426,-9.86],[8.68,-9.713],[8.934,-9.565],[9.188,-9.414],[9.442,-9.264],[9.697,-9.119],[9.951,-8.976],[10.205,-8.829],[10.459,-8.678],[10.713,-8.532],[10.967,-8.387],[11.221,-8.24],[11.475,-8.089],[11.729,-7.943],[11.983,-7.798],[12.237,-7.649],[12.491,-7.498],[12.745,-7.354],[12.999,-7.211],[13.253,-7.069],[13.507,-6.924],[13.761,-6.78],[14.016,-6.635],[14.27,-6.49],[14.524,-6.343],[14.778,-6.196],[15.032,-6.053],[15.286,-5.908],[15.54,-5.761],[15.794,-5.615],[16.048,-5.47],[16.302,-5.325],[16.556,-5.178],[16.81,-5.031],[17.064,-4.881],[17.318,-4.725],[17.572,-4.568],[17.826,-4.408],[18.077,-4.245],[18.323,-4.073],[18.564,-3.895],[18.799,-3.706],[19.027,-3.514],[19.245,-3.315],[19.452,-3.108],[19.646,-2.895],[19.827,-2.675],[19.996,-2.447],[20.152,-2.212],[20.294,-1.971],[20.418,-1.729],[20.525,-1.48],[20.615,-1.228],[20.687,-.974],[20.741,-.72],[20.783,-.466],[20.807,-.212],[20.821,.042],[20.821,.296],[20.807,.55],[20.779,.805],[20.736,1.059],[20.674,1.313],[20.591,1.567],[20.489,1.821],[20.371,2.073],[20.235,2.319],[20.083,2.56],[19.919,2.796],[19.742,3.023],[19.55,3.242],[19.347,3.454],[19.129,3.663],[18.899,3.865],[18.66,4.058],[18.415,4.243],[18.165,4.42],[17.911,4.591],[17.657,4.753],[17.403,4.907],[17.149,5.056],[16.895,5.206],[16.641,5.353],[16.387,5.498],[16.133,5.645],[15.879,5.795],[15.625,5.942],[15.371,6.085],[15.116,6.23],[14.862,6.375],[14.608,6.52],[14.354,6.663],[14.1,6.808],[13.846,6.955],[13.592,7.101],[13.338,7.246],[13.084,7.391],[12.83,7.54],[12.576,7.689],[12.322,7.835],[12.068,7.982],[11.814,8.133],[11.56,8.281],[11.306,8.428],[11.052,8.575],[10.797,8.725],[10.543,8.878],[10.289,9.027],[10.035,9.175],[9.781,9.324],[9.527,9.476],[9.273,9.625],[9.019,9.772],[8.765,9.919],[8.511,10.062],[8.257,10.203],[8.003,10.344],[7.749,10.491],[7.495,10.637],[7.241,10.782],[6.987,10.925],[6.733,11.07],[6.478,11.213],[6.224,11.356],[5.97,11.501],[5.716,11.646],[5.462,11.793],[5.208,11.938],[4.954,12.083],[4.7,12.233],[4.446,12.386],[4.192,12.534],[3.938,12.681],[3.684,12.828],[3.43,12.977],[3.176,13.124],[2.922,13.268],[2.668,13.417],[2.414,13.564],[2.159,13.705],[1.905,13.839],[1.651,13.967],[1.397,14.093],[1.143,14.215],[.889,14.332],[.635,14.437],[.381,14.535],[.127,14.622],[-.127,14.699],[-.381,14.765],[-.635,14.817],[-.889,14.855],[-1.143,14.876],[-1.397,14.883],[-1.651,14.881],[-1.905,14.868]]},holes:[[3.464,-114],[6.928,-112],[90.067,-64],[93.531,-62],[0,-112],[3.464,-110],[6.928,-108],[86.603,-62],[90.067,-60],[93.531,-58],[0,-108],[3.464,-106],[6.928,-104],[83.138,-60],[86.603,-58],[90.067,-56],[0,-104],[3.464,-102],[6.928,-100],[79.674,-58],[83.138,-56],[86.603,-54],[0,-100],[3.464,-98],[6.928,-96],[76.21,-56],[79.674,-54],[83.138,-52],[0,-96],[3.464,-94],[6.928,-92],[72.746,-54],[76.21,-52],[79.674,-50],[0,-92],[3.464,-90],[6.928,-88],[69.282,-52],[72.746,-50],[76.21,-48],[0,-88],[3.464,-86],[6.928,-84],[65.818,-50],[69.282,-48],[72.746,-46],[0,-84],[3.464,-82],[6.928,-80],[62.354,-48],[65.818,-46],[69.282,-44],[0,-80],[3.464,-78],[6.928,-76],[58.89,-46],[62.354,-44],[65.818,-42],[0,-76],[3.464,-74],[6.928,-72],[55.426,-44],[58.89,-42],[62.354,-40],[0,-72],[3.464,-70],[6.928,-68],[10.392,-66],[51.962,-42],[55.426,-40],[58.89,-38],[0,-68],[3.464,-66],[6.928,-64],[10.392,-62],[48.497,-40],[51.962,-38],[55.426,-36],[0,-64],[3.464,-62],[6.928,-60],[10.392,-58],[45.033,-38],[48.497,-36],[51.962,-34],[0,-60],[3.464,-58],[6.928,-56],[10.392,-54],[13.856,-52],[38.105,-38],[41.569,-36],[45.033,-34],[48.497,-32],[0,-56],[3.464,-54],[6.928,-52],[10.392,-50],[13.856,-48],[17.321,-46],[20.785,-44],[24.249,-42],[27.713,-40],[31.177,-38],[34.641,-36],[38.105,-34],[41.569,-32],[45.033,-30],[0,-52],[3.464,-50],[6.928,-48],[10.392,-46],[13.856,-44],[17.321,-42],[20.785,-40],[24.249,-38],[27.713,-36],[31.177,-34],[34.641,-32],[38.105,-30],[41.569,-28],[0,-48],[3.464,-46],[6.928,-44],[10.392,-42],[13.856,-40],[17.321,-38],[20.785,-36],[24.249,-34],[27.713,-32],[31.177,-30],[34.641,-28],[38.105,-26],[-93.531,-54],[-90.067,-52],[-86.603,-50],[-83.138,-48],[-79.674,-46],[-76.21,-44],[-72.746,-42],[-69.282,-40],[-65.818,-38],[-62.354,-36],[-58.89,-34],[-55.426,-32],[-51.962,-30],[-48.497,-28],[-45.033,-26],[-41.569,-24],[-38.105,-22],[-34.641,-20],[-93.531,-50],[-90.067,-48],[-86.603,-46],[-83.138,-44],[-79.674,-42],[-76.21,-40],[-72.746,-38],[-69.282,-36],[-65.818,-34],[-62.354,-32],[-58.89,-30],[-55.426,-28],[-51.962,-26],[-48.497,-24],[-45.033,-22],[-41.569,-20],[-38.105,-18],[-34.641,-16],[38.105,26],[41.569,28],[45.033,30],[48.497,32],[51.962,34],[55.426,36],[58.89,38],[62.354,40],[65.818,42],[69.282,44],[72.746,46],[76.21,48],[79.674,50],[83.138,52],[86.603,54],[90.067,56],[93.531,58],[-96.995,-48],[-93.531,-46],[-90.067,-44],[-86.603,-42],[-83.138,-40],[-79.674,-38],[-76.21,-36],[-72.746,-34],[-69.282,-32],[-65.818,-30],[-62.354,-28],[-58.89,-26],[-55.426,-24],[-51.962,-22],[-48.497,-20],[-45.033,-18],[-41.569,-16],[-38.105,-14],[-34.641,-12],[34.641,28],[38.105,30],[41.569,32],[45.033,34],[48.497,36],[51.962,38],[55.426,40],[58.89,42],[62.354,44],[65.818,46],[69.282,48],[72.746,50],[76.21,52],[79.674,54],[83.138,56],[86.603,58],[90.067,60],[93.531,62],[-48.497,-16],[-45.033,-14],[-41.569,-12],[-38.105,-10],[-34.641,-8],[31.177,30],[34.641,32],[38.105,34],[41.569,36],[45.033,38],[48.497,40],[51.962,42],[55.426,44],[58.89,46],[62.354,48],[65.818,50],[69.282,52],[72.746,54],[76.21,56],[79.674,58],[83.138,60],[86.603,62],[90.067,64],[-45.033,-10],[-41.569,-8],[-38.105,-6],[-34.641,-4],[27.713,32],[31.177,34],[34.641,36],[38.105,38],[-41.569,-4],[-38.105,-2],[-34.641,0],[24.249,34],[27.713,36],[31.177,38],[-41.569,0],[-38.105,2],[-34.641,4],[20.785,36],[24.249,38],[27.713,40],[-41.569,4],[-38.105,6],[-34.641,8],[17.321,38],[20.785,40],[24.249,42],[-41.569,8],[-38.105,10],[-34.641,12],[13.856,40],[17.321,42],[20.785,44],[-45.033,10],[-41.569,12],[-38.105,14],[-34.641,16],[10.392,42],[13.856,44],[17.321,46],[-45.033,14],[-41.569,16],[-38.105,18],[-34.641,20],[6.928,44],[10.392,46],[13.856,48],[-45.033,18],[-41.569,20],[-38.105,22],[3.464,46],[6.928,48],[10.392,50],[13.856,52],[-48.497,20],[-45.033,22],[-41.569,24],[3.464,50],[6.928,52],[10.392,54],[-51.962,22],[-48.497,24],[-45.033,26],[0,52],[3.464,54],[6.928,56],[10.392,58],[-55.426,24],[-51.962,26],[-48.497,28],[0,56],[3.464,58],[6.928,60],[10.392,62],[-58.89,26],[-55.426,28],[-51.962,30],[0,60],[3.464,62],[6.928,64],[-62.354,28],[-58.89,30],[-55.426,32],[0,64],[3.464,66],[6.928,68],[-65.818,30],[-62.354,32],[-58.89,34],[0,68],[3.464,70],[6.928,72],[-69.282,32],[-65.818,34],[-62.354,36],[0,72],[3.464,74],[6.928,76],[-72.746,34],[-69.282,36],[-65.818,38],[0,76],[3.464,78],[6.928,80],[-76.21,36],[-72.746,38],[-69.282,40],[0,80],[3.464,82],[6.928,84],[-79.674,38],[-76.21,40],[-72.746,42],[0,84],[3.464,86],[6.928,88],[-83.138,40],[-79.674,42],[-76.21,44],[0,88],[3.464,90],[6.928,92],[-86.603,42],[-83.138,44],[-79.674,46],[0,92],[3.464,94],[6.928,96],[-90.067,44],[-86.603,46],[-83.138,48],[0,96],[3.464,98],[6.928,100],[-93.531,46],[-90.067,48],[-86.603,50],[0,100],[3.464,102],[6.928,104],[-96.995,48],[-93.531,50],[-90.067,52],[0,104],[3.464,106],[6.928,108],[-93.531,54],[0,108],[3.464,110],[6.928,112],[0,112],[3.464,114]]};var bf={fov:62,cam:[0,-150,1e3],look:[0,-150,0],p:{hero:[[0,40,0],1.75],p2:[[-175,420,-420],1],p3:[[185,390,-520],.95],p4:[[185,-235,-420],.9],p5:[[-185,-195,-160],.75]}};var Tf={releases:[{code:"AU0125",artist:"AURALITY",participantes:[],title:"aurality archives vol. 1",edicion:!0,format:"REMIXES",genre:"REMIX",year:2025,fecha:"2025-11-30",presave:"",fragmentos:[],destacado:!1,cover:"/covers/saveclip.app_587700334_18086309051095107_7291393043367421422_n-1.webp",soundcloud:"https://soundcloud.com/aurality-group/sets/aurality-archives-vol-1",fragmento:"",spotify:"",bandcamp:"",historia:"aurality archives es un recopilatorio que re\xFAne los remixes y mashups creados por los productores del colectivo a lo largo del \xFAltimo a\xF1o. Una colecci\xF3n que funciona como bit\xE1cora sonora de nuestro laboratorio interno: reinterpretaciones, ejercicios de estilo y relecturas que exploran la frontera entre el reggaet\xF3n, el hip-hop y la electr\xF3nica contempor\xE1nea. Un archivo vivo que refleja c\xF3mo dialogamos con la cultura club, el perreo, el sampleo y la energ\xEDa h\xEDbrida que define nuestra identidad creativa.",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM \xB7 UFISI \xB7 MXNCHV"},{rol:"ARTE",nombre:"CUTEXICO"}],tracks:["do you remember xiyo y fernandezz aurality remix (prod. Paranoid Realm)","children x toyota aurality remix (prod. Paranoid Realm)","olympique hoke \xE9bano louis amoeba aurality remix (prod. mxnchv)","mercadona x sin ti aurality mashup (prod. Ufisi)","blam blam cosculluela rompediskotekas aurality remix (prod. Ufisi)","taylor swift i knew you were trouble aurality remix (prod. mxnchv)","bery jr ski ski aurality remix (prod. Ufisi)","soniquete aurality remix (prod. Paranoid Realm)","icy vedo mr bag vedo aurality remix (prod. Ufisi)","limonada coco aurality remix (prod. Paranoid Realm)","infierno x more aurality mashup (yung beef x zion x kerry x jory boy) (prod. Ufisi)","bajo la luna xiyo y fernandezz electro aurality remix (prod. Ufisi)","mushka habibi x una vaina loca aurality remix (prod. Ufisi)","justin bieber company aurality remix (prod. Paranoid Realm)","bad bunny pa que le de reggaeton aurality remix (prod. Ufisi)","hotline bling aurality remix (prod. mxnchv)","chulo bad gyal hard techno aurality remix (prod. Paranoid Realm y Chico Liotta)"]},{code:"AU0342",artist:"AURALITY x PARANOID REALM",participantes:[],title:"do you remember xiyo y fernandezz aurality remix",edicion:!0,format:"SINGLE",genre:"",year:2025,fecha:"2025-11-18",presave:"",fragmentos:[],destacado:!1,cover:"/covers/do-you-remember-xiyo-y-fernandezz-aurality-remix-prod.-paranoid-realm-cover.webp",soundcloud:"https://soundcloud.com/aurality-group/do-you-remember-xiyo-y-fernandezz-aurality-remix-prod-paranoid-realm-85bpm-emin",fragmento:"",spotify:"",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:[]},{code:"AU0123",artist:"941SONE x PARANOID REALM",participantes:[{artista:"PARANOID REALM",rol:"PRODUCCI\xD3N"}],title:"SHORY DE GIMNASIA",edicion:!1,format:"SINGLE",genre:"JERK",year:2026,fecha:"2026-07-30",presave:"",fragmentos:[],destacado:!1,cover:"/covers/saveclip.app_760147604_18607201774028034_1024075395652998516_n.webp",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/7F4zyae5oT4OrsaCQK8p0L?si=chkvMg9DTbOih7-no4NzQQ",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:""},{rol:"M\xC1STER",nombre:""},{rol:"ARTE",nombre:""}],tracks:[]},{code:"AU0111",artist:"PARANOID REALM",participantes:[{artista:"UFISI",rol:"CO-PRODUCCI\xD3N \xB7 TIEMPOS Y ALL ALONE WITH YOU"}],title:"ESTIU 2025: EDICI\xD3 COSTA BRAVA",edicion:!1,format:"REMIXES",genre:"REMIXES",year:2025,fecha:"2025-08-18",presave:"",fragmentos:[],destacado:!1,cover:"/covers/saveclip.app_532661953_18302911807221429_400752346296299478_n-1.webp",soundcloud:"https://soundcloud.com/paranoidrealm/sets/estiu-2025-edicio-costa-brava",fragmento:"",spotify:"",bandcamp:"",historia:`De peque\xF1o mis veranos eran siempre los mismos: coche hasta Tossa de Mar, CD del Caribe Mix 2004 rayado en la guantera y yo mirando por la ventana las luces de Lloret.

A\xF1os despu\xE9s he querido transformar todos esos recuerdos en m\xFAsica. As\xED nace esta mixtape de remixes: un homenaje a la Costa Brava y a todo lo que marc\xF3 nuestra infancia.

Estos remixes traen sonidos, ritmos, texturas y colores actuales y vanguardistas, pero manteniendo la vibra de viajes en coche con el aire a tope, olor a salitre y a crema solar y noches que duran hasta que alguien dice \u201Cva, el \xFAltimo y nos vamos\u201D.`,video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["Farruko, Music\xF3logo, Menes - Tiempos (Paranoid Realm & Ufisi Remix)","ladiferencia2006, Juanma! - encima (Paranoid Realm Remix)","Daddy Yankee - La Despedida (Paranoid Realm Remix)","EGOIST- All Alone With You (Paranoid Realm & Ufisi Remix)","LOWLIGHT, Bad Gyal, Demaro Small - Commotion (Paranoid Realm Remix)","Diego 900 - T4 Barajas (Paranoid Realm Remix)"]},{code:"AU0110",artist:"PARANOID REALM",participantes:[],title:"LA ESPA\xD1A VACIADA",edicion:!1,format:"REMIXES",genre:"REMIXES",year:2026,fecha:"2026-05-04",presave:"",fragmentos:[],destacado:!1,cover:"/covers/1-levportada.webp",soundcloud:"https://soundcloud.com/paranoidrealm/sets/la-espana-vaciada",fragmento:"",spotify:"",bandcamp:"",historia:"La Espa\xF1a Vaciada es un EP de remixes que toma la idea del \xE9xodo rural y la traslada a la m\xFAsica. Mientras gran parte de la escena urbana tiende a concentrarse en f\xF3rmulas que funcionan y sonidos cada vez m\xE1s parecidos entre s\xED, este proyecto se sit\xFAa fuera de ese flujo. Parte de la decisi\xF3n de no seguir ese camino y trabajar desde otro lugar: m\xE1s lento, m\xE1s t\xE9cnico y m\xE1s centrado en el sonido y la identidad propia.",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM \xB7 MXNCHV"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["Diego 900 - Dam (Paranoid Realm Remix)","mvrk - YOTMB (Paranoid Realm Remix)","Juicy Bae, TAICHU, PMP - Rojo Sangre (Paranoid Realm & mxnchv Remix)","Claudio Montana - 55 Rayuelas (Paranoid Realm Remix)"]},{code:"AU0212",artist:"PARANOID REALM",participantes:[],title:"ESTIU 2026: EDICI\xD3 SAINT-TROPEZ",edicion:!1,format:"REMIXES",genre:"CLUB",year:2026,fecha:"2026-08-05",presave:"",fragmentos:[],destacado:!0,cover:"covers/AU0212.jpg",soundcloud:"https://soundcloud.com/paranoidrealm/sets/estiu-2026-edicio-saint-tropez",fragmento:"",spotify:"",bandcamp:"",historia:`ESTIU es una mixtape anual de remixes concebida como un viaje sonoro a un territorio concreto. Cada edici\xF3n se traslada a un lugar con una identidad musical propia \u2014una ciudad, una regi\xF3n o un enclave cultural\u2014 para investigar c\xF3mo la m\xFAsica electr\xF3nica ha dialogado con su historia, su cultura popular y sus clubes. Los vinilos se convierten en la materia prima de cuatro remixes originales, compuestos exclusivamente a partir de samples extra\xEDdos de esos discos.

En la edici\xF3n 2026 viajamos a Francia, cuna del French Touch: una corriente surgida a finales de los 90 que mezcla house y disco con producci\xF3n basada en samples y filtros; sus referentes clave incluyen a Daft Punk, Air, \xC9tienne de Cr\xE9cy, Cassius, DJ Mehdi, Justice y Busy P (Pedro Winter) \u2014 s/o Ed Banger \u2014 mientras el imaginario visual recorre la Riviera, el cine, el deporte, la moda y el patrimonio cultural del pa\xEDs. El resultado no pretende representar Francia, sino reinterpretar una de sus identidades sonoras m\xE1s influyentes desde el lenguaje del sample y la cultura del remix.`,video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["Nico Miseria, alba calva - EL CORAZ\xD3N MANDA (Paranoid Realm Remix)","Guxo - CEO (Paranoid Realm Remix)","caos! - kim k (Paranoid Realm Remix)","Ralphie Choo, Barry B, DRUMMIE - ROOKIES (Paranoid Realm Remix)"]},{code:"AU0211",artist:"TRANKILOTE EL KILATE x PARANOID REALM",participantes:[],title:"VAYVIENE",edicion:!1,format:"SINGLE",genre:"RAP",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/vayviene-portada.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/track/0GEkQXoWJTEJToBNLqSdHN?si=54344f43d01241a0",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:[]},{code:"AU0210",artist:"PARANOID REALM",participantes:[],title:"NEW JERK",edicion:!1,format:"EP",genre:"JERK",year:2025,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/newjerk-portada.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/1PeJBkR4vvxYp1i0GM8RB6?si=UwCN7MlaRq6_rAnpQMlSyw",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["PARANOID REALM, UNOMAEL - TENGO TODO","PARANOID REALM, UFISI - TELAS DE DISE\xD1ADOR","PARANOID REALM, TRANKILOTE EL KILATE - PICK UP THE PHONE","PARANOID REALM, SHAY B - HYPERACID","PARANOID REALM, UFISI - DEO JUVANTE","PARANOID REALM, SHAY B - BBQ"]},{code:"AU0209",artist:"ANY1N3 x UFISI",participantes:[],title:"EL CIELO QUE NOS QUEDA",edicion:!1,format:"SINGLE",genre:"LOGOBI",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!0,cover:"covers/portada_3000x3000.jpg.jpeg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/3i9pZTYe7QaxsdXWBb9Yha?si=f07fd7a20cdc4eb1",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"UFISI"},{rol:"MEZCLA",nombre:""},{rol:"M\xC1STER",nombre:""},{rol:"ARTE",nombre:""}],tracks:[]},{code:"AU0205",artist:"ANY1N3 \xD7 PARANOID REALM",participantes:[],title:"ROTOR BRAKE RELEASE",edicion:!1,format:"EP",genre:"DUBSTEP",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/rbr-portada.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/12asQkQ16JdNEZzbEXS5iq?si=ZxGrrLFpSTy0f4NcakFcMA",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:""}],tracks:["ANY1N3, PARANOID REALM - ANY","ANY1N3, PARANOID REALM - DURANKI","ANY1N3, PARANOID REALM - EOLIC DUB","ANY1N3, PARANOID REALM - GLITCH IN THE NACELLE"]},{code:"AU0204",artist:"C.EME",participantes:[{artista:"UFISI",rol:"PRODUCCI\xD3N \xB7 CLOSEFRIENDS\u2606, PETER PARKER Y UBER"}],title:"SUPERSEXYDRILL",edicion:!1,format:"EP",genre:"SEXY DRILL",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/delete.jpeg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/4tJx2RpRQPpbg3bO3XkTqN?si=qHIT0-ymSDW5hZ6JIcJnnA",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"UFISI"}],tracks:["C.EME, SHODA MONKAS - CLOSEFRIENDS\u2606","C.EME, SARA VERA - PETER PARKER","C.EME - UBER"]},{code:"AU0202",artist:"ANY1N3",participantes:[],title:"OTRA L\xC1GRIMA",edicion:!1,format:"SINGLE",genre:"PLUGGNB",year:2025,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/otra-lagrima-definitivojpg.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/track/0upi8DNB3ElXbbljzPfNl9?si=81afb9f6f6e3467a",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM \xB7 SUI \xB7 YIIO \xB7 XHARLIE"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"CUTEXICO"}],tracks:[]},{code:"AU0201",artist:"TRANKILOTE EL KILATE x PARANOID REALM",participantes:[],title:"EL PALACIO DE LA MEMORIA",edicion:!1,format:"\xC1LBUM",genre:"RAP",year:2026,fecha:"",presave:"",fragmentos:[],destacado:!0,cover:"covers/palaciomemoria2.jpg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/4kQ2nMyoE94xDQdr5OiEYn?si=Fq36lBzjSN69oypH__Bxlg",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"PARANOID REALM \xB7 WAX"},{rol:"MEZCLA",nombre:"PARANOID REALM"},{rol:"M\xC1STER",nombre:"PARANOID REALM"},{rol:"ARTE",nombre:"FER GARC\xCDA"}],tracks:["PARANOID REALM, ALBA CALVA - ADOLIN","TRANKILOTE EL KILATE, PARANOID REALM - KRAINT SAINT","TRANKILOTE EL KILATE, PARANOID REALM - BENDICE MI NOMBRE","TRANKILOTE EL KILATE, PARANOID REALM - LAYLA Y MAJN\xDAN","PARANOID REALM, WAX - DONDE MUERE LA LUZ"]},{code:"AU0200",artist:"UFISI",participantes:[],title:"INTENSITAT",edicion:!1,format:"SINGLE",genre:"REGGAETON",year:2024,fecha:"",presave:"",fragmentos:[],destacado:!1,cover:"covers/delete2.jpeg",soundcloud:"",fragmento:"",spotify:"https://open.spotify.com/intl-es/album/0ht07dk2jiuSZOckxxFzuq?si=Ta0dL8m4RrmvhC-S2wWuHw",bandcamp:"",historia:"",video:"",fotos:[],credits:[{rol:"PRODUCCI\xD3N",nombre:"UFISI"}],tracks:[]}]};var Ef={artists:[{name:"TRANKILOTE EL KILATE",role:"ARTISTA",bio:"",photo:"covers/dsc00394.jpg",instagram:"https://www.instagram.com/babypanchixoxo/",spotify:"https://open.spotify.com/intl-es/artist/4TZBjh3rOh4S5AZk9pzgkZ?si=JWAZsHifSv6mEZfcA-ba0A",soundcloud:""},{name:"PARANOID REALM",role:"DIRECTOR MUSICAL \xB7 PRODUCTOR",bio:"",photo:"",instagram:"https://www.instagram.com/paranoidrealm/",spotify:"https://open.spotify.com/intl-es/track/0GEkQXoWJTEJToBNLqSdHN?si=41f15bfc61264207",soundcloud:"https://soundcloud.com/paranoidrealm"},{name:"UFISI",role:"PRODUCTOR",bio:"",photo:"",instagram:"https://www.instagram.com/ufisi__/",spotify:"https://open.spotify.com/intl-es/artist/6cvbtmRKj4XLUIGygv1Yao?si=r_TQODlkRRCcEC42tZkdMQ",soundcloud:""},{name:"ANY1N3",role:"",bio:"",photo:"",instagram:"https://www.instagram.com/anyy1n3/",spotify:"https://open.spotify.com/intl-es/artist/40wD0x7OYWbz9UMcdMlP5g?si=Yb7JJ6-nQ8qx0Sk1vlkNaA",soundcloud:""}]};var wf={senal_playlist:"https://open.spotify.com/playlist/62bELlnb4xBNBX2etnHpB8",senal:[{code:"10_26",mes:10,anio:2026,cover:"senal/10_26.jpg",temas:null,duracion:"\u2248 1 h",descripcion:"Lanzamientos, hallazgos y obsesiones del mes. Una selecci\xF3n curada por aurality: m\xFAsica ajena que nos mira de cerca.",destacados:[{artista:"ALBERRRT",tema:"HAAT IST LIEFDE.",prod:""},{artista:"SLIKBACK",tema:"ANVIL",prod:""},{artista:"ROBERT DINERO",tema:"NEVERA",prod:"MYTO"},{artista:"METH MATH",tema:"",prod:""},{artista:"BAMBINODJ",tema:"",prod:""},{artista:"SWIPER",tema:"",prod:""},{artista:"DUNA",tema:"F.M.K.",prod:""},{artista:"1111",tema:"QUE ME BAILE",prod:""},{artista:"FLAKO NKO",tema:"",prod:""},{artista:"28MINIMAL",tema:"",prod:""}]}]};var Cf={contacto:{email:"auralitygroup@gmail.com",instagram:"https://www.instagram.com/aurality/",nota:"Para demos, mejor un enlace privado que un archivo adjunto.",intro_demo:"",intro_contratacion:"",intro_prensa:""},editorial:null,kit:null,manifiesto:{titular:"Un sello no es un sonido. Es un criterio.",parrafos:["aurality no es un cat\xE1logo de artistas: es una l\xEDnea editorial. Lo que une a los proyectos que pasan por aqu\xED no es un g\xE9nero ni una est\xE9tica com\xFAn, sino una misma manera de entender la creaci\xF3n.","Por eso el nombre funciona como un aval. Aspiramos a que \xABeditado por aurality\xBB diga algo antes incluso de darle al play: que ah\xED hay una decisi\xF3n, un punto de vista, alguien que se ha jugado algo. No prometemos un sonido; prometemos un est\xE1ndar.","La vanguardia rara vez nace dentro de una escena; nace en los bordes, cuando dos que se ignoraban se tocan. La mayor\xEDa de las estructuras de la industria trabajan hacia dentro de un nicho, porque es m\xE1s c\xF3modo y m\xE1s medible. aurality se define por lo contrario: por su capacidad de juntar lo que nadie m\xE1s sabr\xEDa juntar. Existen escenas que hablan idiomas distintos pero comparten c\xF3digos subterr\xE1neos \u2014la misma relaci\xF3n con el riesgo, con la imagen, con lo digital, con la calle\u2014 y El sello act\xFAa ah\xED como traductor y como celestina: identifica esos parentescos invisibles y los pone en la misma habitaci\xF3n.","Por eso aspiramos a ser el lugar donde se juntan artistas que nadie m\xE1s sabr\xEDa juntar: la mano que tiende puentes entre escenas que hablan idiomas distintos pero comparten c\xF3digos y est\xE1n condenadas a entenderse aunque todav\xEDa no se hayan cruzado. Ese cruce no es una an\xE9cdota de reparto; es la tesis. La marca no colecciona artistas: provoca encuentros.","Cuando un artista entra en aurality, entra en una conversaci\xF3n m\xE1s amplia que su propia m\xFAsica. No acumulamos referencias: construimos un contexto. Cada lanzamiento es una frase dentro de un discurso m\xE1s largo, el de un sello que entiende la realidad como material y el aura como firma."],cierre:"La realidad como materia prima. El aura como identidad."}};window.__carga?.mark("motor","THREE.JS");document.getElementById("estatico")?.remove();var Rf=["DO","DO\u266F","RE","MI\u266D","MI","FA","FA\u266F","SOL","LA\u266D","LA","SI\u266D","SI"],Xx={lidio:[0,2,4,6,7,9,11],dorico:[0,2,3,5,7,9,10],eolico:[0,2,3,5,7,8,10],penta:[0,2,4,7,9],jonico:[0,2,4,5,7,9,11],frigio:[0,1,3,5,7,8,10]},Yx={lidio:"lidio",dorico:"d\xF3rico",eolico:"e\xF3lico",penta:"pentat\xF3nico",jonico:"j\xF3nico",frigio:"frigio"},Yc={aeropuerto:"bucles de aeropuerto",dron:"dron",kankyo:"kanky\u014D ongaku",analogico:"ambient anal\xF3gico",dub:"dub t\xE9cnico",garaje:"garage nocturno",perreo:"guayeteo inocente",trance:"ambient trance",rave:"garage rave",dnb:"ltj bukem amen break",galore:"arpegios acu\xE1ticos",triphop:"trip-hop"},Ur=[["PANEL",53,"jonico","aeropuerto"],["NIEBLA",45,"eolico","dron"],["HORIZONTE",48,"lidio","kankyo"],["REJILLA",43,"dorico","analogico"],["CROMO",52,"eolico","dub"],["SINTON\xCDA",47,"eolico","garaje"],["ESCALA",44,"frigio","perreo"],["TESTIGO",45,"eolico","trance"],["PLETINA",49,"jonico","rave"],["RANURA",44,"dorico","dnb"],["GALORE",51,"jonico","galore"],["SE\xD1AL",42,"eolico","triphop"]],tt=n=>440*Math.pow(2,(n-69)/12),ze=(n,e)=>n+Math.random()*(e-n),dt=n=>n[Math.floor(Math.random()*n.length)],Zx={aeropuerto:{seco:.35,sala:.95,cuarto:0,eco:.08,tono:6e3,nivel:1.33},dron:{seco:.45,sala:.85,cuarto:0,eco:0,tono:2600,nivel:.6},kankyo:{seco:.7,sala:.25,cuarto:.45,eco:.3,tono:9e3,nivel:.95},analogico:{seco:.72,sala:.22,cuarto:.38,eco:.14,tono:7500,nivel:.236},dub:{seco:.75,sala:.2,cuarto:.25,eco:.6,tono:2800,nivel:.275},garaje:{seco:.7,sala:.16,cuarto:.28,eco:0,tono:6200,nivel:.3},perreo:{seco:.75,sala:.14,cuarto:.22,eco:0,tono:9500,nivel:.39},trance:{seco:.75,sala:.12,cuarto:.2,eco:0,tono:11e3,nivel:.44},rave:{seco:.8,sala:.08,cuarto:.22,eco:0,tono:12e3,nivel:.29},dnb:{seco:.75,sala:.12,cuarto:.25,eco:0,tono:1e4,nivel:.36},galore:{seco:.75,sala:.12,cuarto:.22,eco:0,tono:11e3,nivel:.27},triphop:{seco:.75,sala:.14,cuarto:.3,eco:0,tono:8e3,nivel:.33}},as=/iP(hone|ad|od)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||matchMedia("(pointer: coarse) and (hover: none)").matches,kt=(()=>{let n=new Set,e=new Map,t=1,i=()=>{let s=performance.now();for(let[a,r]of e)if(s>=r.at){r.cada?r.at=s+r.cada:e.delete(a);try{r.f()}catch(o){console.error(o)}}n.forEach(a=>{try{a()}catch(r){console.error(r)}})};try{let s=new Worker(URL.createObjectURL(new Blob(["setInterval(function(){postMessage(0)},25)"],{type:"text/javascript"})));s.onmessage=i}catch{setInterval(i,25)}return{suma:s=>n.add(s),quita:s=>n.delete(s),espera:(s,a)=>{let r=t++;return e.set(r,{f:s,at:performance.now()+(a||0)}),r},cada:(s,a)=>{let r=t++;return e.set(r,{f:s,at:performance.now()+a,cada:a}),r},anula:s=>{e.delete(s)}}})(),Jx=Date.UTC(2026,9,1)/1e3,qu=class{constructor(){this.canal=2,this.amb=2,this.on=!1,this.ctx=null,this.gen=null,this.cat=null}init(){let e=window.AudioContext||window.webkitAudioContext,t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=0,this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-18,this.comp.ratio.value=3,this.comp.attack.value=.02,this.comp.release.value=.4,this.analyser=t.createAnalyser(),this.analyser.fftSize=1024,this.buf=new Float32Array(this.analyser.fftSize),this.subida=t.createGain(),this.subida.gain.value=3.6,this.limite=t.createDynamicsCompressor(),this.limite.threshold.value=-4,this.limite.knee.value=0,this.limite.ratio.value=20,this.limite.attack.value=.002,this.limite.release.value=.15,this.senal=t.createGain(),this.master.connect(this.senal),this.senal.connect(this.comp),this.comp.connect(this.subida),this.subida.connect(this.limite),this.limite.connect(this.analyser),this.analyser.connect(t.destination);let i=(l,u)=>{let d=t.sampleRate*l,h=t.createBuffer(2,d,t.sampleRate);for(let f=0;f<2;f++){let g=h.getChannelData(f);for(let y=0;y<d;y++)g[y]=(Math.random()*2-1)*Math.pow(1-y/d,u)}return h};this.sala=t.createConvolver(),this.sala.buffer=i(7,2.6),this.sala.connect(this.master),this.cuarto=t.createConvolver(),this.cuarto.buffer=i(1.6,3.2),this.cuarto.connect(this.master),this.eco=t.createDelay(3),this.eco.delayTime.value=.42;let s=t.createGain();s.gain.value=.42;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=2600,this.eco.connect(a),a.connect(s),s.connect(this.eco),a.connect(this.master),a.connect(this.sala);let r=t.createBuffer(1,t.sampleRate*3,t.sampleRate),o=r.getChannelData(0);for(let l=0;l<o.length;l++)o[l]=Math.random()*2-1;this.ruido=r,this.estFino=t.createGain(),this.estFino.gain.value=0,this.estBp=t.createBiquadFilter(),this.estBp.type="bandpass",this.estBp.frequency.value=1700,this.estBp.Q.value=.6;let c=t.createBufferSource();c.buffer=r,c.loop=!0,c.connect(this.estBp),this.estBp.connect(this.estFino),this.estFino.connect(this.comp),c.start(),this.txG=t.createGain(),this.txG.gain.value=0,this.txHp=t.createBiquadFilter(),this.txHp.type="highpass",this.txHp.frequency.value=600,this.txLp=t.createBiquadFilter(),this.txLp.type="lowpass",this.txLp.frequency.value=2400,this.txHp.connect(this.txLp),this.txLp.connect(this.txG),this.txG.connect(this.comp)}txPrepara(){if(this.txEl||!this.ctx)return;let e=this.txEl=new Audio;e.loop=!0,e.preload="auto",e.setAttribute("playsinline",""),e.src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=";let t=e.play();t&&t.then(()=>e.pause()).catch(()=>{});try{this.txSrc=this.ctx.createMediaElementSource(e),this.txSrc.connect(this.txHp)}catch{}}ajustaFino(e){if(!this.ctx)return;let t=this.ctx.currentTime,i=this.on;if(this.senal.gain.setTargetAtTime(i?e.senal:1,t,.05),this.estFino.gain.setTargetAtTime(i?e.ruido:0,t,.05),this.estBp.frequency.setTargetAtTime(900+e.f*160,t,.08),e.tx&&i){this.txPrepara();let s=this.txEl;if(clearTimeout(this.txOff),this.txId!==e.tx.id&&(this.txId=e.tx.id,s.src="/tx/a/"+encodeURIComponent(e.tx.id),s.currentTime=0),s.paused){let a=s.play();a&&a.catch(()=>{})}this.txG.gain.setTargetAtTime(e.txNivel,t,.06),this.txHp.frequency.setTargetAtTime(e.claro?20:650,t,.12),this.txLp.frequency.setTargetAtTime(e.claro?18e3:2200,t,.12)}else this.txG.gain.setTargetAtTime(0,t,.15),this.txEl&&!this.txEl.paused&&(clearTimeout(this.txOff),this.txOff=setTimeout(()=>this.txEl.pause(),900))}nuevaGen(e){let t=this.ctx,i=Zx[e],s=t.currentTime,a={estilo:e,vivo:!0,timers:[],inter:null,nodos:[]};if(a.fader=t.createGain(),a.fader.gain.setValueAtTime(0,s),a.fader.gain.linearRampToValueAtTime(i.nivel,s+3.5),a.tono=t.createBiquadFilter(),a.tono.type="lowpass",a.tono.frequency.value=i.tono,a.tono.Q.value=.2,a.salidas=[],e==="analogico"||e==="garaje"||e==="perreo"||e==="triphop"){let r=t.createWaveShaper(),o=new Float32Array(1024);for(let c=0;c<1024;c++){let l=c/511.5-1;o[c]=Math.tanh(1.8*l)/Math.tanh(1.8)}r.curve=o,r.oversample="2x",a.fader.connect(r),r.connect(a.tono),a.nodos.push(r)}else a.fader.connect(a.tono);return[["seco",this.master],["sala",this.sala],["cuarto",this.cuarto],["eco",this.eco]].forEach(([r,o])=>{if(!i[r])return;let c=t.createGain();c.gain.value=i[r],a.tono.connect(c),c.connect(o),a.nodos.push(c)}),a.nodos.push(a.fader,a.tono),a}matarGen(e,t=2.5){if(!e)return;e.vivo=!1,e.timers.forEach(clearTimeout),clearInterval(e.inter),e.tic&&kt.quita(e.tic),e.cola=[];let i=this.ctx.currentTime;[e.fader,...e.salidas||[]].forEach(s=>{s.gain.cancelScheduledValues(i),s.gain.setValueAtTime(s.gain.value,i),s.gain.linearRampToValueAtTime(0,i+t)}),setTimeout(()=>e.nodos.forEach(s=>{try{s.disconnect()}catch{}}),(t+10)*1e3)}luego(e,t,i){(e.cola||(e.cola=[])).push([this.ctx.currentTime+t,i]),this.vigila(e)}vigila(e){e.tic||(e.tic=()=>{if(!e.vivo){kt.quita(e.tic);return}let t=this.ctx.currentTime;if(e.cola&&e.cola.length){let i=e.cola.filter(s=>s[0]<=t);i.length&&(e.cola=e.cola.filter(s=>s[0]>t),i.forEach(([,s])=>{e.vivo&&this.on&&s()}))}e.paso&&e.paso()},kt.suma(e.tic))}secuenciador(e,t,i){let s=this.ctx,a=60/t/4,r=Jx+this.amb*61.7,o=Date.now()/1e3,c=Math.ceil((o+.12-r)/a/16)*16,l=s.currentTime+(r+c*a-o);e.primero=!0,e.paso=()=>{let u=s.currentTime,d=document.hidden?1.2:.35;if(l<u-.25){let h=Math.ceil((u+.05-l)/a);c+=h,l+=h*a}for(;l<u+d;)i(c,Math.max(l,u),a),e.primero=!1,c++,l+=a},this.vigila(e)}nota(e,t=0){let[,i,s]=Ur[this.amb],a=Xx[s],r=a.length,o=Math.floor(e/r);return i+a[(e%r+r)%r]+12*(o+t)}env(e,t,i,s,a,r){e.gain.setValueAtTime(0,t),e.gain.linearRampToValueAtTime(s,t+i),a&&e.gain.setValueAtTime(s,t+i+a),e.gain.linearRampToValueAtTime(1e-4,r)}pad(e,t,i,s,a={}){let r=this.ctx,o=a.att??4,c=a.rel??6,l=a.gain??.04,u=r.createBiquadFilter();u.type="lowpass",u.Q.value=.5,u.frequency.setValueAtTime((a.corte??1200)*.4,i),u.frequency.linearRampToValueAtTime(a.corte??1200,i+o+1);let d=r.createGain();this.env(d,i,o,l,Math.max(0,s-o-c),i+s+c),u.connect(d),d.connect(e.fader),t.forEach(h=>[-7,7].forEach(f=>{let g=r.createOscillator();g.type=a.onda||"sawtooth",g.frequency.value=tt(h),g.detune.value=f+ze(-3,3),e.vaiven&&e.vaiven.connect(g.detune),g.connect(u),g.start(i),g.stop(i+s+c+.1)}))}fm(e,t,i,s={}){let a=this.ctx,r=tt(t),o=s.dec??1.6,c=s.gain??.05,l=a.createOscillator(),u=a.createOscillator(),d=a.createGain(),h=a.createGain();if(l.frequency.value=r,u.frequency.value=r*(s.ratio??2),d.gain.setValueAtTime(r*(s.indice??1.5),i),d.gain.exponentialRampToValueAtTime(r*.01+.01,i+o*.5),h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(c,i+(s.att??.004)),h.gain.exponentialRampToValueAtTime(1e-4,i+o),u.connect(d),d.connect(l.frequency),l.connect(h),h.connect(e.fader),s.eco){let f=a.createGain();f.gain.value=s.eco,h.connect(f),f.connect(this.eco)}l.start(i),u.start(i),l.stop(i+o+.1),u.stop(i+o+.1)}piano(e,t,i,s={}){let a=this.ctx,r=s.dec??7,o=s.gain??.06;[[1,1],[2,.22],[3,.06]].forEach(([c,l])=>{let u=a.createOscillator(),d=a.createGain();u.type="sine",u.frequency.value=tt(t)*c*(c>1?1.0015:1),d.gain.setValueAtTime(0,i),d.gain.linearRampToValueAtTime(o*l,i+.03),d.gain.exponentialRampToValueAtTime(1e-4,i+r/c),u.connect(d),d.connect(e.fader),u.start(i),u.stop(i+r+.1)})}voz(e,t,i,s,a=.02){let r=this.ctx,o=r.createOscillator(),c=r.createGain();o.type="sawtooth",o.frequency.value=tt(t),this.env(c,i,s*.4,a,s*.2,i+s),[[750,6],[1150,8]].forEach(([l,u])=>{let d=r.createBiquadFilter();d.type="bandpass",d.frequency.value=l,d.Q.value=u,o.connect(d),d.connect(c)}),c.connect(e.fader),o.start(i),o.stop(i+s+.1)}bombo(e,t,i=.5){let s=this.ctx,a=s.createOscillator(),r=s.createGain();a.frequency.setValueAtTime(110,t),a.frequency.exponentialRampToValueAtTime(42,t+.12),r.gain.setValueAtTime(i,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.45),a.connect(r),r.connect(e.fader),a.start(t),a.stop(t+.5)}ruidoCorto(e,t,i,s,a,r,o=.8){let c=this.ctx,l=c.createBufferSource(),u=c.createBiquadFilter(),d=c.createGain();l.buffer=this.ruido,u.type=a,u.frequency.value=r,u.Q.value=o,d.gain.setValueAtTime(s,t),d.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(u),u.connect(d),d.connect(e.fader),l.start(t,Math.random()*2),l.stop(t+i+.05)}fondo(e,t,i,s,a,r=0){let o=this.ctx,c=o.createBufferSource(),l=o.createBiquadFilter(),u=o.createGain();if(c.buffer=this.ruido,c.loop=!0,l.type=i,l.frequency.value=s,l.Q.value=a,u.gain.value=t,c.connect(l),l.connect(u),u.connect(e.fader),c.start(),r){let d=o.createOscillator(),h=o.createGain();d.frequency.value=r,h.gain.value=s*.7,d.connect(h),h.connect(l.frequency),d.start(),e.nodos.push(d)}e.nodos.push(c,l,u)}aeropuerto(e){[[0,0],[2,0],[4,0],[6,0],[1,1],[4,1],[2,-1]].forEach(([i,s],a)=>{let r=13+a*2.9+ze(0,2.5),o=()=>{this.piano(e,this.nota(i,s),this.ctx.currentTime+.05,{dec:8,gain:.055}),this.luego(e,r,o)};this.luego(e,ze(.5,r),o)}),[[0,-1],[4,-1]].forEach(([i,s],a)=>{let r=23+a*8.3,o=()=>{this.voz(e,this.nota(i,s),this.ctx.currentTime+.05,9,.018),this.luego(e,r,o)};this.luego(e,4+a*6,o)}),this.fondo(e,.006,"bandpass",500,.5)}dron(e){let t=[[0,-1],[4,-1],[0,0],[8,0],[2,1]],i=r=>{let[o,c]=t[r%t.length],l=ze(26,40);this.pad(e,[this.nota(o,c)],this.ctx.currentTime+.05,l,{att:12,rel:14,gain:.05,corte:700+r*120,onda:r%2?"triangle":"sawtooth"}),this.luego(e,l*.55,()=>i(r+1+Math.floor(Math.random()*2)))};i(0),this.luego(e,9,()=>i(2));let s=this.ctx.createOscillator(),a=this.ctx.createGain();s.frequency.value=tt(this.nota(0,-2)),a.gain.value=.05,s.connect(a),a.connect(e.fader),s.start(),e.nodos.push(s,a),this.fondo(e,.03,"bandpass",600,1.2,.02)}kankyo(e){let t=[],i=()=>{t=[0,6,10,16,22,26].filter(()=>Math.random()<.8).map(c=>[c,dt([0,1,2,3,4,5,7])])};i();let s=0,a=!1,r=0;this.secuenciador(e,72,(c,l)=>{let u=c%32;if(u===0){if(s=Math.floor(c/32)+1,s%4===0){let d=Math.floor(Math.random()*t.length);t[d]&&(t[d][1]=dt([0,1,2,3,4,5,7]))}s%8===0&&(a=Math.random()<.3,r=1-r),s%16===0&&i(),s%4===1&&this.pad(e,[this.nota(0,-1),this.nota(4,-1)],l,13,{onda:"sine",att:3,rel:5,gain:.03,corte:2400})}a||t.forEach(([d,h])=>{d===u&&(r?this.fm(e,this.nota(h,1),l,{ratio:1,indice:2.4,dec:2.4,gain:.05,eco:.25}):this.fm(e,this.nota(h,1),l,{ratio:4,indice:1.6,dec:.7,gain:.06,eco:.25}))})});let o=()=>{let c=this.ctx,l=c.currentTime+.05,u=c.createOscillator(),d=c.createGain(),h=tt(this.nota(dt([0,2,4]),3));u.frequency.setValueAtTime(h,l),u.frequency.exponentialRampToValueAtTime(h*1.6,l+.06),d.gain.setValueAtTime(.025,l),d.gain.exponentialRampToValueAtTime(1e-4,l+.18),u.connect(d),d.connect(e.fader),u.start(l),u.stop(l+.2),this.luego(e,ze(3,9),o)};this.luego(e,5,o),this.ctx&&this.eco.delayTime.setTargetAtTime(60/72/4*3,this.ctx.currentTime,.2)}analogico(e){let t=this.ctx,i=122,s=.06,a=60/i/4;this.eco.delayTime.setTargetAtTime(60/i*.75,t.currentTime,.2),e.vaiven=t.createGain();let r=t.createOscillator(),o=t.createGain(),c=t.createOscillator(),l=t.createGain();r.frequency.value=.55,o.gain.value=5,c.frequency.value=6.3,l.gain.value=1.6,r.connect(o),o.connect(e.vaiven),c.connect(l),l.connect(e.vaiven),r.start(),c.start(),e.nodos.push(r,o,c,l,e.vaiven),this.fondo(e,.007,"highpass",4500,.4);let u=t.createWaveShaper(),d=new Float32Array(4096);for(let ae=0;ae<4096;ae++){let q=ae/2047.5-1;d[ae]=Math.round(q*96)/96}u.curve=d;let h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=4200,h.Q.value=.6;let f=t.createStereoPanner(),g=t.createOscillator(),y=t.createGain();g.frequency.value=.07,y.gain.value=.55,g.connect(y),y.connect(f.pan),g.start();let p=t.createGain();p.gain.value=.32,u.connect(h),h.connect(f),f.connect(e.fader),h.connect(p),p.connect(this.eco),e.nodos.push(u,h,f,g,y,p);let m=(ae,q)=>{let J=t.createGain(),U=t.createBiquadFilter();U.type="lowpass",U.Q.value=4,U.frequency.setValueAtTime(2800,q),U.frequency.exponentialRampToValueAtTime(520,q+.2),J.gain.setValueAtTime(0,q),J.gain.linearRampToValueAtTime(.05,q+.003),J.gain.exponentialRampToValueAtTime(1e-4,q+.3),U.connect(J),J.connect(u),[0,3,7,10].forEach(Q=>{let F=t.createOscillator();F.type="square",F.frequency.value=tt(ae+Q),F.detune.setValueAtTime(38,q),F.detune.exponentialRampToValueAtTime(1,q+.07),e.vaiven.connect(F.detune),F.connect(U),F.start(q),F.stop(q+.32)})},A=t.createBiquadFilter(),S=t.createBiquadFilter();A.type="highpass",A.frequency.value=38,A.Q.value=.7,S.type="peaking",S.frequency.value=420,S.Q.value=1.2,S.gain.value=-4,A.connect(S),S.connect(e.fader),e.nodos.push(A,S);let v=(ae,q,J)=>{let U=t.createBiquadFilter(),Q=t.createBiquadFilter(),F=t.createGain(),W=.026;U.type="peaking",U.frequency.value=700,U.Q.value=3,U.gain.value=4,Q.type="lowpass",Q.Q.value=2.5,Q.frequency.setValueAtTime(1e3,q),Q.frequency.exponentialRampToValueAtTime(220,q+J*.8),F.gain.setValueAtTime(0,q),F.gain.linearRampToValueAtTime(W,q+.008),F.gain.setValueAtTime(W,q+J*.55),F.gain.exponentialRampToValueAtTime(1e-4,q+J+.04),U.connect(Q),Q.connect(F),F.connect(A),[[-13,"sawtooth",.32],[11,"sawtooth",.32],[0,"sine",.55]].forEach(([X,D,E])=>{let b=t.createOscillator(),C=t.createGain();b.type=D,b.frequency.value=tt(ae),b.detune.value=X,C.gain.value=E,e.vaiven.connect(b.detune),b.connect(C),C.connect(U),b.start(q),b.stop(q+J+.1)})},M=(ae,q,J,U=.028)=>{let Q=t.createBiquadFilter(),F=t.createGain();Q.type="lowpass",Q.frequency.value=1500,Q.Q.value=.4,F.gain.setValueAtTime(0,q),F.gain.linearRampToValueAtTime(U,q+.35),F.gain.setValueAtTime(U,q+J),F.gain.linearRampToValueAtTime(1e-4,q+J+1.2),Q.connect(F),F.connect(e.fader);let W=t.createGain();W.gain.value=.25,F.connect(W),W.connect(this.eco),[[1,1,-6],[1.002,2,6]].forEach(([X,D,E])=>{let b=t.createOscillator(),C=t.createOscillator(),P=t.createGain();b.frequency.value=tt(ae)*X,C.frequency.value=tt(ae)*D,P.gain.setValueAtTime(tt(ae)*.2,q),P.gain.linearRampToValueAtTime(tt(ae)*.9,q+.5),b.detune.value=E,e.vaiven.connect(b.detune),C.connect(P),P.connect(b.frequency),b.connect(Q),b.start(q),C.start(q),b.stop(q+J+1.3),C.stop(q+J+1.3)})},w=[205.3,304.4,369.6,522.7,540,800],L=(ae,q,J)=>{let U=t.createBiquadFilter(),Q=t.createBiquadFilter(),F=t.createGain();U.type="bandpass",U.frequency.value=1e4,U.Q.value=1,Q.type="highpass",Q.frequency.value=7e3,F.gain.setValueAtTime(J,ae),F.gain.exponentialRampToValueAtTime(1e-4,ae+q),U.connect(Q),Q.connect(F),F.connect(e.fader),w.forEach(W=>{let X=t.createOscillator();X.type="square",X.frequency.value=W*1.7,X.connect(U),X.start(ae),X.stop(ae+q+.02)})},_=ae=>{let q=t.createOscillator(),J=t.createGain();q.frequency.setValueAtTime(96,ae),q.frequency.exponentialRampToValueAtTime(47,ae+.09),J.gain.setValueAtTime(.62,ae),J.gain.exponentialRampToValueAtTime(1e-4,ae+.34),q.connect(J),J.connect(e.fader),q.start(ae),q.stop(ae+.36),this.ruidoCorto(e,ae,.006,.05,"highpass",2e3)},R=(ae,q,J,U,Q="sine")=>{let F=t.createOscillator(),W=t.createGain();F.type=Q,F.frequency.setValueAtTime(q*1.08,ae),F.frequency.exponentialRampToValueAtTime(q,ae+.02),W.gain.setValueAtTime(U,ae),W.gain.exponentialRampToValueAtTime(1e-4,ae+J),F.connect(W),W.connect(e.fader),F.start(ae),F.stop(ae+J+.02)},O=[0,3,6,10,12],z=[[0,0],[3,0],[6,12],[8,0],[11,7],[14,10]],G=0,se=0,k=O.slice(),$=[],le=[],ce=()=>{$=[0,4,8,12].map(()=>dt([0,2,4,6,7,9])),le=Array.from({length:8},()=>Math.random()<.55?dt([4,6,7,9,11]):null)};ce(),this.secuenciador(e,i,(ae,q)=>{let J=ae%16,U=q+(J%2?a*s:0);if(J===0){if(G=Math.floor(ae/16)+1,se=this.nota(G%8>=6?3:0,-1),G%4===0&&(k=O.slice(),Math.random()<.5)){let E=1+Math.floor(Math.random()*4);k[E]=(k[E]+dt([-1,1,2])+16)%16}G%16===1&&ce()}let Q=(G-1)%48,F=Q>=32&&Q<36,W=G>4,X=G>16&&!(Q>=32&&Q<34),D=G>24;if(!F&&J%4===0&&_(q),J%4===2?L(U,.26,.05):(J%2===0||Math.random()<.35)&&L(U,.04,J%4===0?.03:.022),(J===3||J===10)&&G>2&&R(U,1700,.03,.035,"triangle"),(J===6||J===13||J===15&&Math.random()<.4)&&G>8&&R(U,J===13?220:330,.22,.07),J===12&&G>8&&!F&&(this.ruidoCorto(e,q,.12,.045,"bandpass",1300,1.4),this.ruidoCorto(e,q+.012,.1,.035,"bandpass",1300,1.4)),k.includes(J)&&m(se+12,U),W&&z.forEach(([E,b])=>{E===J&&v(se+b,U,a*1.8)}),X&&J%4===0){let E=J/4|0,b=$[E];(E%2===0||Math.random()<.5)&&M(this.nota(b,1),q,a*(E%2?3.5:7.5))}if(D&&J%2===1){let E=le[(J-1)/2];E!=null&&this.fm(e,this.nota(E,1),U,{ratio:3.5,indice:.7,dec:.45,gain:.018,eco:.35})}})}dub(e){let t=this.ctx,i=116;this.eco.delayTime.setTargetAtTime(60/i*.75,t.currentTime,.2);let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=1200,s.Q.value=2,s.connect(e.fader);let a=t.createOscillator(),r=t.createGain();a.frequency.value=.035,r.gain.value=900,a.connect(r),r.connect(s.frequency),a.start(),e.nodos.push(a,r,s);let o=t.createGain();o.gain.value=.5,s.connect(o),o.connect(this.eco),e.nodos.push(o),this.fondo(e,.012,"bandpass",3200,.7);let c=0,l=0;this.secuenciador(e,i,(u,d)=>{let h=u%16;if(h===0&&(c=Math.floor(u/16)+1,(c%8===1||e.primero)&&(l=dt([0,0,3,5])),c%2===1&&this.fm(e,this.nota(l,-2),d,{ratio:1,indice:.2,dec:2.2,gain:.12})),h%4===0&&this.bombo(e,d,.5),h%4===2&&this.ruidoCorto(e,d,.03,.02,"highpass",8e3),(h===2||h===10)&&Math.random()<.8){let f=t.createGain();f.gain.setValueAtTime(0,d),f.gain.linearRampToValueAtTime(.045,d+.005),f.gain.exponentialRampToValueAtTime(1e-4,d+.2),f.connect(s),[0,2,4,6,8].forEach(g=>{let y=t.createOscillator();y.type="sawtooth",y.frequency.value=tt(this.nota(l+g,0)),y.connect(f),y.start(d),y.stop(d+.22)})}Math.random()<.12&&this.ruidoCorto(e,d+Math.random()*.1,.004,ze(.02,.06),"highpass",2500)})}garaje(e){let t=this.ctx,i=134,s=60/i/4,a=.17,r=(U,Q,F)=>{let W=t.createGain();W.gain.value=F,U.connect(W),W.connect(Q),e.salidas.push(W),e.nodos.push(W)},o=(U,Q)=>{let F=t.createStereoPanner();return F.pan.value=Q,U.connect(F),F};e.vaiven=t.createGain();let c=t.createOscillator(),l=t.createGain();c.frequency.value=.31,l.gain.value=7,c.connect(l),l.connect(e.vaiven),c.start(),e.nodos.push(c,l,e.vaiven),this.fondo(e,.006,"highpass",6500,.4),this.fondo(e,.016,"bandpass",2300,.25,.017);let u=()=>{let U=t.currentTime+.05;for(let Q=0;Q<7;Q++)Math.random()<.55&&this.ruidoCorto(e,U+Math.random()*.6,ze(.003,.012),ze(.012,.06),"highpass",ze(2200,7e3));this.luego(e,.6,u)};u();let d=t.createBiquadFilter(),h=t.createGain();d.type="lowpass",d.frequency.value=7200,d.Q.value=.4,h.gain.value=1.6,d.connect(h),h.connect(e.fader),e.nodos.push(d,h);let f=t.createBiquadFilter(),g=t.createBiquadFilter(),y=t.createGain();f.type="highpass",f.frequency.value=240,f.Q.value=.5,g.type="lowpass",g.frequency.value=1900,g.Q.value=.5,f.connect(g),g.connect(y),y.connect(e.fader),r(y,this.sala,.42),e.nodos.push(f,g,y);let p=(U,Q)=>{y.gain.cancelScheduledValues(U),y.gain.setValueAtTime(1-Q,U+.005),y.gain.setTargetAtTime(1,U+.04,.09)},m=t.createBiquadFilter();m.type="bandpass",m.frequency.value=1600,m.Q.value=.5;let A=t.createBiquadFilter();A.type="lowpass",A.frequency.value=3200,m.connect(A),A.connect(e.fader),r(A,this.sala,1.45),r(A,this.eco,.45);let S=(U,Q,F,W,X,D,E,b=0)=>{let C=t.createBufferSource(),P=t.createBiquadFilter(),N=t.createGain();C.buffer=this.ruido,P.type=W,P.frequency.value=X,P.Q.value=D,N.gain.setValueAtTime(F,U),N.gain.exponentialRampToValueAtTime(1e-4,U+Q),C.connect(P),P.connect(N),(b?o(N,b):N).connect(E),C.start(U,Math.random()*2),C.stop(U+Q+.05)},v=(U,Q,F,W,X,D,E)=>{let b=t.createOscillator(),C=t.createGain();b.type=D,b.frequency.setValueAtTime(Q,U),b.frequency.exponentialRampToValueAtTime(F,U+W*.4),C.gain.setValueAtTime(X,U),C.gain.exponentialRampToValueAtTime(1e-4,U+W),b.connect(C),C.connect(E),b.start(U),b.stop(U+W+.02)},M=(U,Q=1)=>{p(U,.55),v(U,82,46,.3,.42*Q,"sine",d),S(U,.012,.05*Q,"lowpass",1400,.5,d)},w=(U,Q=1)=>{Q>.5&&p(U,.4),S(U,.17,.2*Q,"bandpass",ze(1650,2100),.8,d),S(U,.06,.07*Q,"highpass",3800,.5,d),v(U,210,180,.07,.07*Q,"triangle",d)},L=(U,Q=1,F=!1)=>S(U,F?.16:ze(.025,.045),.05*Q,"bandpass",ze(7800,9800),.6,d,ze(-.3,.3)),_=(U,Q=1)=>{v(U,1250,1180,.035,.05*Q,"triangle",d),S(U,.03,.04*Q,"bandpass",2900,3,d)},R=[0,5,3,4],O=U=>[0,2,4,6,8].map(Q=>this.nota(U+Q,0)),z=(U,Q,F)=>U.forEach((W,X)=>{let D=t.createOscillator(),E=t.createOscillator(),b=t.createGain(),C=t.createGain(),P=tt(W);D.frequency.value=P,E.frequency.value=P,D.detune.value=ze(-9,9),e.vaiven.connect(D.detune),b.gain.setValueAtTime(P*.9,Q),b.gain.exponentialRampToValueAtTime(P*.05,Q+1.2),C.gain.value=0,C.gain.setValueAtTime(0,Q+X*.012),C.gain.linearRampToValueAtTime(.012,Q+X*.012+.01),C.gain.exponentialRampToValueAtTime(1e-4,Q+F),E.connect(b),b.connect(D.frequency),D.connect(C),C.connect(f),D.start(Q),E.start(Q),D.stop(Q+F+.1),E.stop(Q+F+.1)}),G=(U,Q,F)=>{let W=t.createOscillator(),X=t.createOscillator(),D=t.createGain(),E=t.createGain();W.frequency.value=tt(U),X.type="triangle",X.frequency.value=tt(U)*2,D.gain.setValueAtTime(0,Q),D.gain.linearRampToValueAtTime(.035,Q+.25),D.gain.setValueAtTime(.035,Q+F-.3),D.gain.linearRampToValueAtTime(1e-4,Q+F+.2),E.gain.value=.12,W.connect(D),X.connect(E),E.connect(D),D.connect(e.fader),W.start(Q),X.start(Q),W.stop(Q+F+.3),X.stop(Q+F+.3)},se=[[800,1150,2900],[450,800,2830],[400,2e3,2550],[350,1700,2700],[600,1e3,2600]],k=(U,Q,F,W,X=!1)=>{let D=t.createOscillator(),E=t.createOscillator(),b=t.createGain(),C=t.createGain(),P=t.createOscillator(),N=t.createGain();D.type="sawtooth",E.type="sawtooth";let Y=tt(U),ee=ze(-35,35);if(D.frequency.setValueAtTime(Y*(X?1:Math.pow(2,ze(-1,1)/12)),Q),D.frequency.exponentialRampToValueAtTime(Y*(X?Math.pow(2,-ze(.5,2.5)/12):1),Q+F),E.frequency.value=Y*1.004,D.detune.value=ee,E.detune.value=ee,P.frequency.value=X?ze(4.5,6):0,N.gain.value=X?22:0,P.connect(N),N.connect(D.detune),N.connect(E.detune),C.gain.value=1,D.connect(C),E.connect(C),dt(se).forEach((ne,re)=>{let H=t.createBiquadFilter();H.type="bandpass",H.frequency.value=ne*ze(1,1.14),H.Q.value=[9,11,13][re];let j=t.createGain();j.gain.value=[1,.55,.25][re],C.connect(H),H.connect(j),j.connect(b)}),S(Q,Math.min(F,.18),W*.25,"bandpass",4200,1.2,m),b.gain.setValueAtTime(0,Q),b.gain.linearRampToValueAtTime(W,Q+(X?.15:.022)),X){let ne=t.createOscillator(),re=t.createGain();ne.frequency.value=ze(16,26),re.gain.value=W*.35,ne.connect(re),re.connect(b.gain),ne.start(Q),ne.stop(Q+F+.1)}b.gain.setValueAtTime(W,Q+F*(X?.35:.6)),b.gain.exponentialRampToValueAtTime(1e-4,Q+F),o(b,ze(-.45,.45)).connect(m),[D,E,P].forEach(ne=>{ne.start(Q),ne.stop(Q+F+.05)})},$=[],le=()=>{let U=dt([4,5,6,7]);$=[2,3,6,7,10,11,13,14].filter(()=>Math.random()<.45).map(Q=>[Q,U+dt([0,0,1,2,-1,3])])};le();let ce=()=>{let U=t.currentTime+.05,Q=Math.random();if(Q<.4)S(U,ze(.3,1.4),ze(.01,.022),"bandpass",ze(1500,4e3),ze(1.5,4),e.fader,ze(-.8,.8));else if(Q<.75){let F=t.createOscillator(),W=t.createOscillator(),X=t.createGain(),D=t.createGain(),E=t.createGain(),b=ze(1800,3400);F.frequency.value=b,W.frequency.value=b*2.76,X.gain.setValueAtTime(b*1.8,U),X.gain.exponentialRampToValueAtTime(b*.08,U+1.2),D.gain.setValueAtTime(0,U),D.gain.linearRampToValueAtTime(.009,U+.01),D.gain.exponentialRampToValueAtTime(1e-4,U+2.4),W.connect(X),X.connect(F.frequency),F.connect(D);let C=o(D,ze(-.9,.9));E.gain.value=.45,C.connect(E),E.connect(e.fader),r(C,this.sala,1.8),r(C,this.eco,.55),e.nodos.push(E),F.start(U),W.start(U),F.stop(U+2.5),W.stop(U+2.5)}else{let F=t.createOscillator(),W=t.createBiquadFilter(),X=t.createGain(),D=ze(3,7);F.type="sawtooth",F.frequency.value=50,W.type="lowpass",W.frequency.value=380,X.gain.setValueAtTime(0,U),X.gain.linearRampToValueAtTime(.006,U+1),X.gain.linearRampToValueAtTime(1e-4,U+D),F.connect(W),W.connect(X),X.connect(e.fader),F.start(U),F.stop(U+D+.1)}this.luego(e,ze(4,11),ce)};this.luego(e,3,ce);let ae=0,q=0,J=0;this.secuenciador(e,i,(U,Q)=>{let F=U%16,W=F%2?s*a:0,X=ze(-.006,.006),D=Q+W+X;if(F===0){ae=Math.floor(U/16)+1;let ee=(ae-1)%32;if((ae-1)%2===0||e.primero){q=R[((ae-1)/2|0)%4];let V=O(q);z(V.slice(0,4),Q+.01,s*30),G(this.nota(q,-1),Q,s*31),ae>2&&this.pad(e,[this.nota(q,0),this.nota(q+4,0)],Q,s*32,{att:1.5,rel:3,gain:.005,corte:650,onda:"sawtooth"})}ae%4===1&&le(),J=Math.random()}let E=(ae-1)%32,b=ae<=2,C=E>=28&&E<30,P=!b&&!C,N=ae%4===0&&F>=13&&J<.35;P&&!N?((F===0||F===10&&J>.25||F===7&&J<.18)&&M(D,F===0?1:.8),(F===4||F===12)&&w(D+ze(.008,.024)),(F===3||F===9||F===15)&&Math.random()<.28&&w(D+ze(.004,.02),ze(.18,.32)),F===11&&J>.7&&(w(D,.3),w(D+s*.5,.45)),F%4===2?L(D,Math.random()<.85?1:.4,F===14&&J>.6):F%2===1&&Math.random()<.38&&L(D,.45),(F===6||F===14)&&Math.random()<.45&&_(D,.8)):C&&F%4===2&&L(D,.35);let Y=$.find(([ee])=>ee===F);Y&&ae>1&&Math.random()<(C?.9:.62)&&k(this.nota(Y[1],1),D,ze(.1,.24),.24),F===8&&(ae%4===2||C)&&Math.random()<.6&&k(this.nota(dt([4,6,7,9]),1),D,ze(1.6,3.2),.18,!0)})}perreo(e){let t=this.ctx,i=88,s=60/i/4;this.eco.delayTime.setTargetAtTime(60/i*.5,t.currentTime,.2);let a=(H,j,ge)=>{let ye=t.createGain();return ye.gain.value=ge,H.connect(ye),ye.connect(j),e.salidas.push(ye),e.nodos.push(ye),ye},r=(H,j)=>{let ge=t.createStereoPanner();return ge.pan.value=j,H.connect(ge),ge},o=t.createGain();o.connect(e.fader),e.nodos.push(o);let c=(H,j)=>{o.gain.setValueAtTime(1,H-.002),o.gain.linearRampToValueAtTime(0,H+.004),o.gain.setValueAtTime(0,H+j-.004),o.gain.linearRampToValueAtTime(1,H+j)},l=t.createWaveShaper(),u=new Float32Array(2048);for(let H=0;H<2048;H++){let j=H/1023.5-1;u[H]=Math.round(j*14)/14}l.curve=u;let d=t.createGain(),h=t.createGain();d.gain.value=1,h.gain.value=0;let f=t.createGain();f.connect(d),d.connect(o),f.connect(l),l.connect(h),h.connect(o),e.nodos.push(l,d,h,f);let g=(H,j)=>{d.gain.setValueAtTime(0,H),h.gain.setValueAtTime(.8,H),d.gain.setValueAtTime(1,H+j),h.gain.setValueAtTime(0,H+j)};this.fondo(e,.004,"highpass",9e3,.4);let y=t.createGain();y.gain.value=1.4,y.connect(f),e.nodos.push(y);let p=t.createGain(),m=t.createGain();p.connect(m),m.connect(f),a(m,this.sala,.85),a(m,this.eco,.12),e.nodos.push(p,m);let A=(H,j)=>{m.gain.cancelScheduledValues(H),m.gain.setValueAtTime(1-j,H+.004),m.gain.setTargetAtTime(1,H+.05,.12)},S=t.createBiquadFilter();S.type="highpass",S.frequency.value=180,S.connect(f),a(S,this.sala,.9),a(S,this.eco,.5),e.nodos.push(S);let v=(H,j,ge,ye,be,Te,B,Ve=0)=>{let De=t.createBufferSource(),I=t.createBiquadFilter(),x=t.createGain();De.buffer=this.ruido,I.type=ye,I.frequency.value=be,I.Q.value=Te,x.gain.setValueAtTime(ge,H),x.gain.exponentialRampToValueAtTime(1e-4,H+j),De.connect(I),I.connect(x),(Ve?r(x,Ve):x).connect(B),De.start(H,Math.random()*2),De.stop(H+j+.05)},M=(H,j,ge,ye,be,Te,B,Ve=.4)=>{let De=t.createOscillator(),I=t.createGain();De.type=Te,De.frequency.setValueAtTime(j,H),De.frequency.exponentialRampToValueAtTime(ge,H+ye*Ve),I.gain.setValueAtTime(be,H),I.gain.exponentialRampToValueAtTime(1e-4,H+ye),De.connect(I),I.connect(B),De.start(H),De.stop(H+ye+.02)},w=(H,j=1,ge=1)=>{A(H,.6),M(H,120*ge,44*ge,.2,.5*j,"sine",y,.3),v(H,.006,.08*j,"highpass",3e3,.5,y)},L=(H,j=1)=>{M(H,420,260,.09,.12*j,"triangle",y),v(H,.09,.16*j,"bandpass",2600,1.4,y),v(H,.03,.06*j,"highpass",6e3,.6,y)},_=(H,j=1)=>{let ge=t.createOscillator(),ye=t.createOscillator(),be=t.createGain(),Te=t.createBiquadFilter(),B=t.createGain();ge.type="square",ye.type="square",ge.frequency.value=3300,ye.frequency.value=4650,be.gain.value=6e3,Te.type="highpass",Te.frequency.value=7e3,B.gain.setValueAtTime(.03*j,H),B.gain.exponentialRampToValueAtTime(1e-4,H+.035),ye.connect(be),be.connect(ge.frequency),ge.connect(Te),Te.connect(B),r(B,ze(-.5,.5)).connect(y),ge.start(H),ye.start(H),ge.stop(H+.05),ye.stop(H+.05)},R=H=>M(H,dt([900,1250,1700]),600,.06,.05,"sine",y),O=t.createWaveShaper(),z=new Float32Array(1024);for(let H=0;H<1024;H++){let j=H/511.5-1;z[H]=Math.tanh(3*j)/Math.tanh(3)}O.curve=z;let G=t.createBiquadFilter(),se=t.createGain();G.type="lowpass",G.frequency.value=700,se.gain.value=.065,O.connect(G),G.connect(se),se.connect(f),e.nodos.push(O,G,se);let k=(H,j,ge,ye)=>{let be=t.createOscillator(),Te=t.createGain();be.frequency.setValueAtTime(tt(ye??H),j),ye!=null&&be.frequency.exponentialRampToValueAtTime(tt(H),j+.09),Te.gain.setValueAtTime(0,j),Te.gain.linearRampToValueAtTime(.32,j+.01),Te.gain.setValueAtTime(.32,j+ge*.7),Te.gain.exponentialRampToValueAtTime(1e-4,j+ge),be.connect(Te),Te.connect(O),be.start(j),be.stop(j+ge+.05)},$=t.createBiquadFilter(),le=t.createOscillator(),ce=t.createGain();$.type="lowpass",$.frequency.value=900,$.Q.value=7,le.frequency.value=.045,ce.gain.value=600,le.connect(ce),ce.connect($.frequency),le.start(),$.connect(p),e.nodos.push($,le,ce);let ae=(H,j,ge)=>H.forEach(ye=>[-11,0,12].forEach(be=>{let Te=t.createOscillator(),B=t.createGain();Te.type="sawtooth",Te.frequency.value=tt(ye),Te.detune.value=be+ze(-4,4),this.env(B,j,1.8,.0075,Math.max(0,ge-4),j+ge+2),Te.connect(B),B.connect($),Te.start(j),Te.stop(j+ge+2.1)})),q=t.createOscillator(),J=t.createGain();q.type="triangle",q.frequency.value=tt(this.nota(0,-1)),J.gain.value=.02,q.connect(J),J.connect(p),q.start(),e.nodos.push(q,J);let U=(H,j,ge=.016)=>{let ye=t.createOscillator(),be=t.createOscillator(),Te=t.createGain(),B=t.createGain(),Ve=tt(H);ye.frequency.value=Ve,be.frequency.value=Ve*dt([3.5,4.2,2.01]),Te.gain.setValueAtTime(Ve*2.2,j),Te.gain.exponentialRampToValueAtTime(Ve*.05,j+.6),B.gain.setValueAtTime(ge,j),B.gain.exponentialRampToValueAtTime(1e-4,j+1.4),be.connect(Te),Te.connect(ye.frequency),ye.connect(B),r(B,ze(-.8,.8)).connect(p),ye.start(j),be.start(j),ye.stop(j+1.5),be.stop(j+1.5)},Q=t.createBiquadFilter();Q.type="bandpass",Q.frequency.value=2200,Q.Q.value=2.5,Q.connect(p),e.nodos.push(Q);let F=(H,j)=>{let ge=t.createOscillator(),ye=t.createGain();ge.type="square",ge.frequency.value=tt(H),ye.gain.setValueAtTime(.012,j),ye.gain.exponentialRampToValueAtTime(1e-4,j+s*.8),ge.connect(ye),ye.connect(Q),ge.start(j),ge.stop(j+s)},W={a:[800,1150,2900],e:[400,2e3,2550],i:[300,2300,3e3],o:[450,800,2830],u:[325,700,2530]},X=Object.keys(W),D=(H,j,ge=!1)=>{let ye=j+Math.max(...H.map(([ie,,oe])=>(ie+oe)*s))+.2,be=t.createOscillator(),Te=t.createOscillator(),B=t.createGain(),Ve=t.createGain();be.type="sawtooth",Te.type="square",Te.detune.value=7,B.gain.value=.6;let De=ge?.5:1,I=[0,1,2].map(ie=>{let oe=t.createBiquadFilter();oe.type="bandpass",oe.Q.value=[8,10,12][ie];let fe=t.createGain();return fe.gain.value=[1,.5,.22][ie],B.connect(oe),oe.connect(fe),fe.connect(Ve),oe});be.connect(B),Te.connect(B),Ve.gain.setValueAtTime(0,j),H.forEach(([ie,oe,fe])=>{let Me=j+ie*s,Ee=tt(oe)*De,ve=W[dt(X)];be.frequency.setTargetAtTime(Ee,Me,.008),Te.frequency.setTargetAtTime(Ee,Me,.008),I.forEach((Ae,we)=>Ae.frequency.setTargetAtTime(ve[we]*(ge?.8:1.08),Me,.02)),Ve.gain.setTargetAtTime(.16,Me,.012),Ve.gain.setTargetAtTime(1e-4,Me+fe*s*.85,.04)}),r(Ve,ze(-.25,.25)).connect(S),[be,Te].forEach(ie=>{ie.start(j),ie.stop(ye+.3)})},E=(H,j)=>{let ge=t.createOscillator(),ye=t.createGain(),be=t.createBiquadFilter(),Te=t.createGain();ge.type="sawtooth",be.type="bandpass",be.frequency.value=1400,be.Q.value=1.1;let B=[0,1,2].map(Ve=>{let De=t.createBiquadFilter();return De.type="bandpass",De.Q.value=[6,8,10][Ve],ge.connect(De),De.connect(Te),De});Te.connect(be),be.connect(ye),ye.gain.setValueAtTime(0,H);for(let Ve=H;Ve<H+j;Ve+=ze(.09,.16)){let De=W[dt(X)];ge.frequency.setTargetAtTime(tt(ze(55,61)),Ve,.03),B.forEach((I,x)=>I.frequency.setTargetAtTime(De[x],Ve,.015)),ye.gain.setTargetAtTime(Math.random()<.18?1e-4:.21,Ve,.01)}ye.gain.setTargetAtTime(1e-4,H+j,.03),v(H,j,.012,"bandpass",3e3,1,S,ze(-.4,.4)),r(ye,ze(-.6,.6)).connect(S),ge.start(H),ge.stop(H+j+.3)},b=(H,j)=>{let[ge,ye]=H[0];for(let be=0;be<4;be++)D([[0,ye+(be===3?12:0),.4]],j+ge*s+be*s*.5)},C=[0,1,0,5],P=[0,2,3,4,6,7],N=[],Y=()=>{let H=dt([[0,3,6,10,12],[2,4,7,10,14],[0,2,6,8,11,14],[3,6,10,12,13]]),j=dt(P);N=H.map((ge,ye)=>(j=Math.max(0,Math.min(9,j+dt([-2,-1,0,1,1,2]))),[ge,j,ye===H.length-1?4:dt([1,2,2,3])]))};Y();let ee=0,V=0,ne=[],re=0;this.secuenciador(e,i,(H,j)=>{let ge=H%16;if(ge===0){ee=Math.floor(H/16)+1,re=Math.random();let Ve=(ee-1)%48;((ee-1)%2===0||e.primero)&&(V=C[((ee-1)/2|0)%4],ae([this.nota(V,0),this.nota(V+2,0),this.nota(V+4,1)],j,s*32),ne=[0,2,4,7].map(De=>this.nota(V+De,2))),ee%8===1&&Y(),Ve>4&&Ve%8===7&&re<.5&&c(j+s*12,s*4),re>.85&&g(j+s*8,s*8)}let ye=(ee-1)%48,be=ee<=4,Te=ye>=36&&ye<40;if(!be&&!Te&&(ge%4===0&&!(ge===8&&re<.3)&&w(j,ge===0?1:.85,re>.9&&ge===12?.7:1),[3,6,11,14].includes(ge)&&!(ge===11&&re>.75)&&L(j,ge===6||ge===14?1:.8),ge%2===0&&Math.random()<.3&&_(j,ge%4===2?1:.6),ge===15&&re>.6&&R(j),ge===0&&k(this.nota(V,-1),j,s*5.5,re>.5?this.nota(V+4,-1):null),ge===8&&re>.35&&k(this.nota(V,-1),j,s*3),ge===13&&re<.4&&k(this.nota(V+dt([2,4,-1]),-1),j,s*2.5,this.nota(V,-1))),ee>2&&ge%2===0&&Math.random()<.55&&F(ne[ge/2%ne.length]+(re>.8&&ge>8?12:0),j),Math.random()<.035&&U(this.nota(dt([0,2,4,7]),3),j+Math.random()*.1),ge===0){let Ve=(ee-1)%8;(Ve===2||Ve===6)&&ee>4&&(re<.12?b(N.map(([De,I,x])=>[De,this.nota(I,2),x]),j):D(N.map(([De,I,x])=>[De,this.nota(I,2),x]),j)),Ve===3&&re<.5&&D(N.slice(0,3).map(([De,I,x])=>[De,this.nota(I,2),x]),j,!0),(Ve===0||Te)&&re>.55&&E(j+s*2,ze(1.2,2.2))}})}trance(e){let t=this.ctx,i=128,s=60/i/4;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let a=(W,X,D)=>{let E=t.createGain();return E.gain.value=D,W.connect(E),E.connect(X),e.salidas.push(E),e.nodos.push(E),E},r=(W,X)=>{let D=t.createStereoPanner();return D.pan.value=X,W.connect(D),D};e.vaiven=t.createGain();let o=t.createOscillator(),c=t.createGain();o.frequency.value=.21,c.gain.value=4,o.connect(c),c.connect(e.vaiven),o.start(),e.nodos.push(o,c,e.vaiven),this.fondo(e,.0012,"highpass",8e3,.4);let l=t.createGain();l.gain.value=.98;let u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=6e3,l.connect(u),u.connect(e.fader),e.nodos.push(l,u);let d=t.createBiquadFilter(),h=t.createGain();d.type="lowpass",d.frequency.value=900,d.Q.value=1.2;let f=t.createBiquadFilter();f.type="highpass",f.frequency.value=160,f.connect(d),d.connect(h),h.connect(e.fader),a(h,this.sala,.75),e.nodos.push(d,f,h);let g=(W,X)=>{h.gain.cancelScheduledValues(W),h.gain.setValueAtTime(1-X,W+.004),h.gain.setTargetAtTime(1,W+.04,.1)},y=t.createBiquadFilter(),p=t.createGain();y.type="lowpass",y.frequency.value=3400,y.Q.value=2,p.gain.value=0,y.connect(p),p.connect(e.fader),a(p,this.sala,.35),a(p,this.eco,.25),e.nodos.push(y,p);let m=t.createGain();m.connect(e.fader),a(m,this.eco,.55),a(m,this.sala,.6),e.nodos.push(m);let A=t.createBiquadFilter();A.type="highpass",A.frequency.value=220;let S=t.createBiquadFilter();S.type="lowpass",S.frequency.value=5200,A.connect(S),S.connect(e.fader),a(S,this.sala,1.5),a(S,this.eco,.5),e.nodos.push(A,S);let v=(W,X,D,E,b=3,C=.006,P=1.4)=>W.forEach(N=>{for(let Y=0;Y<b;Y++){let ee=t.createOscillator(),V=t.createGain(),ne=b>1?Y/(b-1)*2-1:0;ee.type="sawtooth",ee.frequency.value=tt(N),ee.detune.value=ne*22+ze(-3,3),e.vaiven.connect(ee.detune),this.env(V,X,P,C,Math.max(0,D-P-1.5),X+D+1.5),ee.connect(V),r(V,ne*.85).connect(E),ee.start(X),ee.stop(X+D+1.6)}}),M=W=>[this.nota(W,0),this.nota(W+4,0),this.nota(W+1,1),this.nota(W+4,1),this.nota(W+3,1)],w=[1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1],L=(W,X,D,E)=>{let b=t.createOscillator(),C=t.createOscillator(),P=t.createGain(),N=t.createGain(),Y=tt(W);b.type="triangle",b.frequency.value=Y,C.frequency.value=Y*4,P.gain.setValueAtTime(Y*1.3,X),P.gain.exponentialRampToValueAtTime(Y*.02,X+.3),N.gain.setValueAtTime(0,X),N.gain.linearRampToValueAtTime(D,X+.004),N.gain.exponentialRampToValueAtTime(1e-4,X+.7),C.connect(P),P.connect(b.frequency),b.connect(N),r(N,E).connect(m),b.start(X),C.start(X),b.stop(X+.75),C.stop(X+.75)},_=(W,X,D)=>{let E=t.createOscillator(),b=t.createOscillator(),C=t.createGain(),P=t.createBiquadFilter();b.type="triangle",E.frequency.value=tt(W),b.frequency.value=tt(W),P.type="lowpass",P.frequency.value=420,C.gain.setValueAtTime(0,X),C.gain.linearRampToValueAtTime(.064,X+.012),C.gain.setValueAtTime(.064,X+D*.6),C.gain.exponentialRampToValueAtTime(1e-4,X+D),E.connect(P),b.connect(P),P.connect(C),C.connect(e.fader),E.start(X),b.start(X),E.stop(X+D+.05),b.stop(X+D+.05)},R=(W,X,D,E,b,C,P=0)=>{let N=t.createBufferSource(),Y=t.createBiquadFilter(),ee=t.createGain();N.buffer=this.ruido,Y.type=E,Y.frequency.value=b,Y.Q.value=C,ee.gain.setValueAtTime(D,W),ee.gain.exponentialRampToValueAtTime(1e-4,W+X),N.connect(Y),Y.connect(ee),(P?r(ee,P):ee).connect(l),N.start(W,Math.random()*2),N.stop(W+X+.05)},O=(W,X=1)=>{g(W,.45*X);let D=t.createOscillator(),E=t.createGain();D.frequency.setValueAtTime(105,W),D.frequency.exponentialRampToValueAtTime(48,W+.08),E.gain.setValueAtTime(.45*X,W),E.gain.exponentialRampToValueAtTime(1e-4,W+.32),D.connect(E),E.connect(l),D.start(W),D.stop(W+.35)},z=(W,X=1)=>{R(W,.15,.11*X,"bandpass",1900,.9),R(W,.05,.04*X,"highpass",5e3,.5)},G=(W,X=1,D=!1)=>R(W,D?.14:.035,.035*X,"highpass",8500,.7,ze(-.35,.35)),se={a:[800,1150,2900],o:[450,800,2830],u:[325,700,2530],e:[400,2e3,2550]},k=Object.keys(se),$=(W,X,D,E,b)=>{let C=t.createOscillator(),P=t.createGain(),N=t.createGain(),Y=t.createOscillator(),ee=t.createGain(),V=se[dt(k)];C.type="sawtooth",C.frequency.value=tt(W),C.detune.value=ze(-8,8),Y.frequency.value=ze(4.8,5.6),ee.gain.value=9,Y.connect(ee),ee.connect(C.detune),C.connect(N),V.forEach((j,ge)=>{let ye=t.createBiquadFilter();ye.type="bandpass",ye.frequency.value=j*1.12,ye.Q.value=[7,9,11][ge];let be=t.createGain();be.gain.value=[1,.5,.3][ge],N.connect(ye),ye.connect(be),be.connect(P)});let ne=t.createBufferSource(),re=t.createBiquadFilter(),H=t.createGain();ne.buffer=this.ruido,re.type="bandpass",re.frequency.value=V[1]*1.6,re.Q.value=1.5,H.gain.value=.28,ne.connect(re),re.connect(H),H.connect(P),P.gain.setValueAtTime(0,X),P.gain.linearRampToValueAtTime(E,X+Math.min(.12,D*.3)),P.gain.setValueAtTime(E,X+D*.7),P.gain.exponentialRampToValueAtTime(1e-4,X+D),r(P,b).connect(A),[C,Y].forEach(j=>{j.start(X),j.stop(X+D+.05)}),ne.start(X,Math.random()*2),ne.stop(X+D+.05)},le=(W,X,D,E)=>{$(W,X,D,E,-.35),$(W,X+.012,D,E*.8,.35)},ce=[],ae=()=>{let W=dt([2,4,6]);ce=[0,4,6,10,14,18,22,26].filter(()=>Math.random()<.7).map(X=>(W=Math.max(0,Math.min(9,W+dt([-2,-1,1,1,2,0]))),[X,W,dt([2,3,4])]))};ae();let q=[0,5,2,6],J=0,U=0,Q=0,F=[];this.secuenciador(e,i,(W,X)=>{let D=W%16;if(D===0){J=Math.floor(W/16)+1,Q=Math.random();let V=(J-1)%64;if((J-1)%2===0||e.primero){U=q[((J-1)/2|0)%4];let re=M(U);v(re,X,s*32,f,3,.0062),v([re[2],re[3],re[4]],X,s*32,y,2,.05,.02),F=[this.nota(U,2),this.nota(U+4,2),this.nota(U+1,3),this.nota(U+4,2),this.nota(U+2,3),this.nota(U+4,2)]}let ne=Math.sin(Math.PI*((J-1)%16/16));d.frequency.setTargetAtTime(700+ne*2600,X,2.5),J%4===1&&ae()}let E=(J-1)%64,b=E<8,C=E>=40&&E<48,P=E>=24&&E<40||E>=56,N=E>=16&&!C;p.gain.setValueAtTime(N&&w[D]?1:0,X),N&&w[D]&&p.gain.setTargetAtTime(0,X+s*.55,.012),!b&&!C?(P?(D%4===0&&O(X,.9),D%4===2&&G(X,1,D===14&&Q>.5),(D===4||D===12)&&z(X,.55)):((D===0||D===10||D===7&&Q>.6)&&O(X,D===0?1:.8),(D===4||D===12)&&z(X),D===15&&Q>.7&&z(X,.35),D%2===0&&G(X,D%4===2?.9:.5)),D%4===2&&_(this.nota(U,-1),X,s*1.6)):D===0&&_(this.nota(U,-1),X,s*14),E>=8&&F.length&&Math.random()<(C?.9:.7)&&L(F[W%F.length]+(Q>.85&&D>=12?12:0),X,C?.03:.022,W%2?.6:-.6);let Y=(J-1)%2*16+D,ee=ce.find(([V])=>V===Y);if(ee&&J>2&&((J-1)%8<6||C)){let V=this.nota(ee[1],2),ne=ee[2]*s;if(Q>.78&&Y>=14)for(let re=0;re<4;re++)$(V+(re===3?12:0),X+re*s,s*.9,.065,re%2?.4:-.4);else le(V,X,ne*1.6,.07)}})}rave(e){let t=this.ctx,i=132,s=60/i/4;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let a=(C,P,N)=>{let Y=t.createGain();return Y.gain.value=N,C.connect(Y),Y.connect(P),e.salidas.push(Y),e.nodos.push(Y),Y},r=(C,P)=>{let N=t.createStereoPanner();return N.pan.value=P,C.connect(N),N},o=t.createBiquadFilter(),c=t.createGain();o.type="highpass",o.frequency.value=20,o.Q.value=.8,o.connect(c),c.connect(e.fader),e.nodos.push(o,c);let l=(C,P)=>{c.gain.setValueAtTime(1,C-.002),c.gain.linearRampToValueAtTime(0,C+.003),c.gain.setValueAtTime(0,C+P-.003),c.gain.linearRampToValueAtTime(1,C+P)},u=t.createGain();u.gain.value=1.25,u.connect(o),e.nodos.push(u);let d=t.createGain();d.connect(o),e.nodos.push(d);let h=(C,P)=>{d.gain.setValueAtTime(1,C-.002),d.gain.linearRampToValueAtTime(0,C+.004),d.gain.setValueAtTime(0,C+P-.004),d.gain.linearRampToValueAtTime(1,C+P)},f=t.createBiquadFilter(),g=t.createGain();f.type="lowpass",f.frequency.value=1500,f.Q.value=1.5,f.connect(g),g.connect(d),a(g,this.sala,.45),e.nodos.push(f,g);let y=.5,p=C=>{g.gain.cancelScheduledValues(C),g.gain.setValueAtTime(1-y,C+.003),g.gain.setTargetAtTime(1,C+.02,s*.9)},m=t.createBiquadFilter();m.type="highpass",m.frequency.value=240;let A=t.createDynamicsCompressor();A.threshold.value=-26,A.ratio.value=5,A.attack.value=.002,A.release.value=.07,m.connect(A),A.connect(o),a(A,this.cuarto,.45),a(A,this.eco,.2),a(A,this.sala,.35),e.nodos.push(m,A);let S=(C,P)=>[C+(Math.random()+Math.random()-1)*.011,P*ze(.62,1.05)],v=(C,P,N,Y,ee,V,ne=0)=>{let re=t.createBufferSource(),H=t.createBiquadFilter(),j=t.createGain();re.buffer=this.ruido,H.type=Y,H.frequency.value=ee,H.Q.value=V,j.gain.setValueAtTime(Math.min(N,.4),C),j.gain.exponentialRampToValueAtTime(1e-4,C+P),re.connect(H),H.connect(j),(ne?r(j,ne):j).connect(u),re.start(C,Math.random()*2),re.stop(C+P+.05)},M=(C,P,N,Y,ee,V,ne=.35)=>{let re=t.createOscillator(),H=t.createGain();re.type=V,re.frequency.setValueAtTime(P,C),re.frequency.exponentialRampToValueAtTime(N,C+Y*ne),H.gain.setValueAtTime(ee,C),H.gain.exponentialRampToValueAtTime(1e-4,C+Y),re.connect(H),H.connect(u),re.start(C),re.stop(C+Y+.02)},w=(C,P=1,N=!1)=>{let[Y,ee]=N?[C,P]:S(C,P);p(Y),M(Y,N?170:140,46,N?.3:.24,.75*ee,"sine"),v(Y,.01,.14*ee,"highpass",2200,.6)},L=(C,P=1)=>{let[N,Y]=S(C+.004,P);[0,.008,.017,.029].forEach((ee,V)=>v(N+ee,V===3?.16:.011,.17*Y,"bandpass",1450,1.2,V%2?.25:-.25))},_=(C,P=1)=>{let[N,Y]=S(C,P);M(N,240,185,.08,.13*Y,"triangle"),v(N,.12,.22*Y,"bandpass",2300,.9),v(N,.04,.08*Y,"highpass",6e3,.6)},R=(C,P=1,N=!1)=>{let[Y,ee]=S(C,P);v(Y,N?.13:ze(.022,.045),.06*ee,"highpass",ze(7200,9600),.7,ze(-.35,.35))},O=[[1,0,.45,.3,.9,0,.5,.25,1,.35,.45,0,.85,.3,.55,.4],[.9,.3,0,.5,1,0,.4,.3,.8,0,.6,.35,1,.25,0,.6],[1,.4,.6,0,.9,.35,0,.5,1,.3,.7,.2,.8,0,.5,.45]],z=O[0],G=t.createWaveShaper(),se=new Float32Array(1024);for(let C=0;C<1024;C++){let P=C/511.5-1;se[C]=Math.tanh(2.2*P)/Math.tanh(2.2)}G.curve=se;let k=t.createBiquadFilter(),$=t.createGain();k.type="lowpass",k.frequency.value=300,$.gain.value=.085,G.connect(k),k.connect($),$.connect(d),e.nodos.push(G,k,$);let le=(C,P,N)=>{let Y=t.createOscillator(),ee=t.createGain();Y.frequency.value=tt(C),ee.gain.setValueAtTime(0,P),ee.gain.linearRampToValueAtTime(.5,P+.006),ee.gain.setValueAtTime(.5,P+N*.75),ee.gain.linearRampToValueAtTime(1e-4,P+N),Y.connect(ee),ee.connect(G),Y.start(P),Y.stop(P+N+.02)},ce=C=>[this.nota(C,0),this.nota(C+2,0),this.nota(C+4,0),this.nota(C+2,1)],ae=(C,P,N)=>C.forEach((Y,ee)=>[[1,1],[2,.3],[3,.08]].forEach(([V,ne])=>{let re=t.createOscillator(),H=t.createGain();re.frequency.value=tt(Y)*V*(V>1?1.002:1),H.gain.value=0,H.gain.setValueAtTime(0,P+ee*.008),H.gain.linearRampToValueAtTime(.011*ne,P+ee*.008+.006),H.gain.exponentialRampToValueAtTime(1e-4,P+N/V),re.connect(H),H.connect(f),re.start(P),re.stop(P+N+.05)})),q=(C,P,N)=>C.forEach(Y=>[-12,0,12].forEach(ee=>{let V=t.createOscillator(),ne=t.createGain();V.type="sawtooth",V.frequency.value=tt(Y+12),V.detune.value=ee+ze(-4,4),ne.gain.setValueAtTime(0,P),ne.gain.linearRampToValueAtTime(.0042,P+.02),ne.gain.setValueAtTime(.0042,P+N-.05),ne.gain.linearRampToValueAtTime(1e-4,P+N),V.connect(ne),r(ne,ee/16).connect(f),V.start(P),V.stop(P+N+.02)})),J={a:[850,1250,3e3],e:[500,2100,2850],i:[330,2500,3300],o:[500,900,2900],u:[350,800,2600]},U=(C,P,N,Y,ee="a",V=null,ne=0)=>{let re=t.createOscillator(),H=t.createOscillator(),j=t.createGain(),ge=t.createGain(),ye=t.createOscillator(),be=t.createGain(),Te=J[ee],B=J[V||ee];re.type="sawtooth",H.type="sawtooth";let Ve=tt(C);re.frequency.setValueAtTime(Ve*.955,P),re.frequency.exponentialRampToValueAtTime(Ve,P+.06),H.frequency.setValueAtTime(Ve*.958,P),H.frequency.exponentialRampToValueAtTime(Ve*1.003,P+.06),ye.frequency.value=5.4,be.gain.setValueAtTime(0,P),be.gain.linearRampToValueAtTime(N>.4?24:0,P+Math.max(.05,N*.6)),ye.connect(be),be.connect(re.detune),be.connect(H.detune),re.connect(j),H.connect(j),j.gain.value=.6,Te.forEach((ie,oe)=>{let fe=t.createBiquadFilter();fe.type="bandpass",fe.Q.value=[6,8,9][oe],fe.frequency.setValueAtTime(ie*1.12,P),fe.frequency.linearRampToValueAtTime(B[oe]*1.12,P+N*.8);let Me=t.createGain();Me.gain.value=[1,.75,.5][oe],j.connect(fe),fe.connect(Me),Me.connect(ge)});let De=t.createBufferSource(),I=t.createBiquadFilter(),x=t.createGain();De.buffer=this.ruido,I.type="bandpass",I.frequency.value=4800,I.Q.value=.8,x.gain.setValueAtTime(Y*1.4,P),x.gain.exponentialRampToValueAtTime(Y*.08,P+.04),De.connect(I),I.connect(x),x.connect(m),ge.gain.setValueAtTime(0,P),ge.gain.linearRampToValueAtTime(Y,P+.008),ge.gain.setValueAtTime(Y,P+N*.85),ge.gain.linearRampToValueAtTime(1e-4,P+N),r(ge,ne).connect(m),[re,H,ye].forEach(ie=>{ie.start(P),ie.stop(P+N+.02)}),De.start(P,Math.random()*2),De.stop(P+N+.02)},Q=[[0,4,3,"a","i"],[3,4,2,"o"],[6,5,2,"e"],[8,4,5,"a","o"],[14,2,2,"i"],[16,2,3,"u","a"],[19,1,2,"o"],[22,2,2,"e"],[24,0,7,"a","e"]],F=[[0,4,"a"],[2,4,"i"],[3,5,"e"],[6,4,"a"],[8,4,"a"],[10,2,"o"],[11,4,"i"],[14,5,"e"]],W=[5,3,0,4],X=0,D=0,E=0,b="intro";this.secuenciador(e,i,(C,P)=>{let N=C%16;if(N===0){X=Math.floor(C/16)+1,E=Math.random();let ee=(X-1)%32;b=ee<4?"intro":ee<12?"garage":ee<14?"subida":ee===14?"capela":ee<23?"drop":ee<27?"garage":ee<31?"drop":"capela",D=W[((X-1)/2|0)%4],z=dt(O),y=b==="drop"?.85:.45,f.frequency.setTargetAtTime(b==="drop"?3800:b==="subida"?2600:1500,P,.4),(b==="intro"||b==="garage")&&((X-1)%2===0||e.primero)&&ae(ce(D),P,s*30),b==="drop"&&q(ce(D),P,s*16),ee===12&&(o.frequency.setValueAtTime(20,P),o.frequency.exponentialRampToValueAtTime(1200,P+s*32)),b==="capela"&&(o.frequency.setValueAtTime(20,P),h(P,s*16)),b==="garage"&&E>.85&&l(P+s*14,s*2),b==="drop"&&E>.8&&l(P+s*7,s)}let Y=(X-1)%32;if(b==="intro")X>1&&z[N]&&R(P,z[N]*.5);else if(b==="garage")(N===0||N===10||N===7&&E<.3)&&w(P,N===0?1:.8),N===11&&E>.6&&w(P,.35),(N===4||N===12)&&L(P),z[N]&&R(P,z[N]),N===15&&E>.5&&(_(P,.3),_(P+s*.5,.45));else if(b==="subida"){let ee=Y-12;N%4===0&&w(P,.9,!0),ee===0&&N%2===0&&_(P,.35+N*.02),ee===1&&(_(P,.5+N*.03),N>=8&&_(P+s*.5,.5+N*.03)),N%2===0&&v(P,s*2,.006+(ee*16+N)*9e-4,"highpass",2e3+(ee*16+N)*180,.7)}else b==="drop"&&(N%4===0&&w(P,1,!0),(N===4||N===12)&&(L(P,1),_(P,.75)),N%4===2?R(P,1,!0):z[N]&&R(P,z[N]*.7),N===15&&E>.4&&(R(P,.7),R(P+s/3,.8),R(P+s*2/3,.9)));if(b==="garage"&&(N===0&&le(this.nota(D,-1),P,s*2.6),(N===3||N===10)&&le(this.nota(D,-1),P,s*1.6)),b==="drop"&&N%4===2&&le(this.nota(D,-1),P,s*1.8),b==="subida"&&N===0&&le(this.nota(D,-1),P,s*14),b==="intro"||b==="garage"||b==="capela"){let ee=(X-1)%2*16+N,V=Q.find(([ne])=>ne===ee);V&&U(this.nota(V[1],1),P,V[2]*s*1.05,.26,V[3],V[4],0)}else if(b==="drop"){let ee=F.find(([V])=>V===N);if(ee)if(E>.7&&N>=8)for(let V=0;V<2;V++)U(this.nota(ee[1],1),P+V*s/2,s/2*.8,.26,ee[2],null,V?.3:-.3);else U(this.nota(ee[1],1)+(N===14&&E<.25?12:0),P,s*.85,.28,ee[2])}else if(b==="subida"){let ee=Y-12,V=ee===0?4:2;N%V===0&&U(this.nota(4,1),P,s*V*.7,.22+(ee*16+N)*.003,"a","i")}})}dnb(e){let t=this.ctx,i=172,s=60/i/4;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let a=(F,W,X)=>{let D=t.createGain();return D.gain.value=X,F.connect(D),D.connect(W),e.salidas.push(D),e.nodos.push(D),D},r=(F,W)=>{let X=t.createStereoPanner();return X.pan.value=W,F.connect(X),X};e.vaiven=t.createGain();let o=t.createOscillator(),c=t.createGain();o.frequency.value=.17,c.gain.value=5,o.connect(c),c.connect(e.vaiven),o.start(),e.nodos.push(o,c,e.vaiven),this.fondo(e,.006,"bandpass",900,.35,.013);let l=t.createGain(),u=t.createBiquadFilter();l.gain.value=1,u.type="lowpass",u.frequency.value=7500,l.connect(u),u.connect(e.fader),a(u,this.cuarto,.3),e.nodos.push(l,u);let d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=1600,d.Q.value=.6,d.connect(e.fader),a(d,this.sala,1.2),e.nodos.push(d);let h=t.createOscillator(),f=t.createGain();h.frequency.value=.03,f.gain.value=700,h.connect(f),f.connect(d.frequency),h.start(),e.nodos.push(h,f);let g=t.createGain(),y=t.createStereoPanner(),p=t.createOscillator(),m=t.createGain();p.frequency.value=3.2,m.gain.value=.45,p.connect(m),m.connect(y.pan),p.start(),g.connect(y),y.connect(e.fader),a(y,this.sala,.55),a(y,this.eco,.28),e.nodos.push(g,y,p,m);let A=(F,W,X,D,E,b,C=0)=>{let P=t.createBufferSource(),N=t.createBiquadFilter(),Y=t.createGain();P.buffer=this.ruido,N.type=D,N.frequency.value=E,N.Q.value=b,Y.gain.setValueAtTime(X,F),Y.gain.exponentialRampToValueAtTime(1e-4,F+W),P.connect(N),N.connect(Y),(C?r(Y,C):Y).connect(l),P.start(F,Math.random()*2),P.stop(F+W+.05)},S=(F,W,X,D,E,b)=>{let C=t.createOscillator(),P=t.createGain();C.type=b,C.frequency.setValueAtTime(W,F),C.frequency.exponentialRampToValueAtTime(X,F+D*.35),P.gain.setValueAtTime(E,F),P.gain.exponentialRampToValueAtTime(1e-4,F+D),C.connect(P),P.connect(l),C.start(F),C.stop(F+D+.02)},v=F=>F+ze(-.004,.004),M=(F,W=1)=>{S(F,120,50,.2,.55*W,"sine"),A(F,.006,.06*W,"highpass",2500,.6)},w=(F,W=1)=>{S(F,260,200,.07,.1*W,"triangle"),A(F,W>.6?.14:.07,.17*W,"bandpass",2e3,.8),A(F,.03,.06*W,"highpass",5500,.6)},L=(F,W=1)=>A(F,.03,.04*W,"highpass",8500,.7,ze(-.3,.3)),_=(F,W=1)=>{let X=t.createOscillator(),D=t.createOscillator(),E=t.createGain(),b=t.createBiquadFilter(),C=t.createGain();X.type="square",D.type="square",X.frequency.value=520,D.frequency.value=1407,E.gain.value=2600,b.type="highpass",b.frequency.value=5200,C.gain.setValueAtTime(.018*W,F),C.gain.exponentialRampToValueAtTime(1e-4,F+.9),D.connect(E),E.connect(X.frequency),X.connect(b),b.connect(C),r(C,.35).connect(l),X.start(F),D.start(F),X.stop(F+1),D.stop(F+1),A(F,.4,.012*W,"bandpass",9e3,1.2,.35)},R=[{b:[0,10,16,26,27],s:[4,12,20,28],g:[7,9,14,23,25,30,31]},{b:[0,10,18,26],s:[4,12,20,28],g:[6,9,15,22,25,29]},{b:[0,3,10,16,19,26],s:[4,12,20,28],g:[7,14,15,23,30]},{b:[0,10,16,24,26],s:[4,13,20,28],g:[2,7,11,18,23,31]}],O=R[0],z=t.createGain();z.gain.value=1,z.connect(e.fader),e.nodos.push(z);let G=(F,W,X,D)=>{let E=t.createOscillator(),b=t.createGain();E.frequency.setValueAtTime(tt(D??F),W),D!=null&&E.frequency.exponentialRampToValueAtTime(tt(F),W+.12),b.gain.setValueAtTime(0,W),b.gain.linearRampToValueAtTime(.05,W+.03),b.gain.setValueAtTime(.05,W+X-.12),b.gain.linearRampToValueAtTime(1e-4,W+X),E.connect(b),b.connect(z),E.start(W),E.stop(W+X+.02)},se=[0,3,6,4],k=F=>[2,4,6,8].map(W=>this.nota(F+W,1)),$=(F,W,X)=>F.forEach(D=>[-8,8].forEach(E=>{let b=t.createOscillator(),C=t.createGain();b.type="sawtooth",b.frequency.value=tt(D),b.detune.value=E+ze(-3,3),e.vaiven.connect(b.detune),this.env(C,W,2.2,.018,Math.max(0,X-4.5),W+X+2.5),b.connect(C),r(C,E/14).connect(d),b.start(W),b.stop(W+X+2.6)})),le=(F,W,X=1.6,D=.03)=>{let E=tt(F),b=t.createOscillator(),C=t.createOscillator(),P=t.createGain(),N=t.createGain();b.frequency.value=E,C.frequency.value=E,b.detune.value=ze(-4,4),P.gain.setValueAtTime(E*1.4,W),P.gain.exponentialRampToValueAtTime(E*.15,W+.35);let Y=t.createOscillator(),ee=t.createGain();Y.frequency.value=E*14,ee.gain.setValueAtTime(D*.25,W),ee.gain.exponentialRampToValueAtTime(1e-4,W+.05),N.gain.setValueAtTime(0,W),N.gain.linearRampToValueAtTime(D,W+.004),N.gain.exponentialRampToValueAtTime(1e-4,W+X),C.connect(P),P.connect(b.frequency),b.connect(N),Y.connect(ee),ee.connect(N),N.connect(g),[b,C,Y].forEach(V=>{V.start(W),V.stop(W+X+.05)})},ce=[[0,1],[6,.7],[10,.6],[16,.9],[22,.6],[27,.7]],ae=0,q=0,J=0,U=[],Q=()=>{let F=dt([4,6,7]);U=[2,5,8,11,14,18,21,24,29].filter(()=>Math.random()<.55).map(W=>(F=Math.max(2,Math.min(11,F+dt([-2,-1,1,2,0]))),[W,F]))};Q(),this.secuenciador(e,i,(F,W)=>{let X=F%16,D=F%32;if(X===0){ae=Math.floor(F/16)+1,J=Math.random();let ee=(ae-1)%64;((ae-1)%4===0||e.primero)&&(q=se[((ae-1)/4|0)%4],$(k(q),W,s*64)),((ae-1)%2===0||e.primero)&&(O=Math.random()<.6?R[0]:dt(R)),ae%8===1&&Q()}let E=(ae-1)%64,b=E<8,C=E>=40&&E<48;!b&&!C?(O.b.includes(D)&&M(v(W),D%16===0?1:.85),O.s.includes(D)&&w(v(W)+.003,1),O.g.includes(D)&&Math.random()<.8&&w(v(W),ze(.18,.32)),X%2===0?_(v(W),X%4===0?1:.6):Math.random()<.5&&L(v(W),.6),E%8===7&&X>=12&&w(v(W),.3+(X-12)*.12)):b&&ae>4&&X%4===0&&_(W,.5),!b&&D===0&&G(this.nota(q,-1),W,s*14,J>.7?this.nota(q+4,-1):null),!b&&D===16&&J>.3&&G(this.nota(q+dt([0,4,6]),-1),W,s*12);let N=ce.find(([ee])=>ee===D);N&&Math.random()<.85&&k(q).slice(0,3).forEach((ee,V)=>le(ee-12,W+V*.012,1.4,.07*N[1]));let Y=U.find(([ee])=>ee===D);Y&&(E%16>=8||C)&&le(this.nota(Y[1],1),v(W),2.2,.125)})}galore(e){let t=this.ctx,i=96,s=60/i/4;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let a=(E,b,C)=>{let P=t.createGain();return P.gain.value=C,E.connect(P),P.connect(b),e.salidas.push(P),e.nodos.push(P),P},r=(E,b)=>{let C=t.createStereoPanner();return C.pan.value=b,E.connect(C),C};e.vaiven=t.createGain();let o=t.createOscillator(),c=t.createGain(),l=t.createOscillator(),u=t.createGain();o.frequency.value=.09,c.gain.value=6,l.frequency.value=4.3,u.gain.value=3.5,o.connect(c),c.connect(e.vaiven),l.connect(u),u.connect(e.vaiven),o.start(),l.start(),e.nodos.push(o,c,l,u,e.vaiven);let d=t.createGain(),h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=2600,h.Q.value=1.6,d.connect(h);let f=(E,b,C)=>{let P=t.createDelay(.05),N=t.createOscillator(),Y=t.createGain(),ee=t.createGain();return P.delayTime.value=b,N.frequency.value=.7+C,Y.gain.value=.0025,N.connect(Y),Y.connect(P.delayTime),N.start(),ee.gain.value=.55,h.connect(P),P.connect(ee),r(ee,E).connect(e.fader),e.nodos.push(P,N,Y,ee),ee};f(-.7,.014,0),f(.7,.019,.13);let g=t.createGain();g.gain.value=.6,h.connect(g),g.connect(e.fader),a(h,this.sala,.6),a(h,this.eco,.22),e.nodos.push(d,h,g);let y=t.createOscillator(),p=t.createGain();y.frequency.value=.05,p.gain.value=900,y.connect(p),p.connect(h.frequency),y.start(),e.nodos.push(y,p);let m=(E,b,C,P=1.1,N=1)=>{let Y=t.createGain(),ee=tt(E);[["triangle",1,-6],["triangle",1,7],["sine",2,3]].forEach(([V,ne,re])=>{let H=t.createOscillator(),j=t.createGain();H.type=V,H.frequency.value=ee*ne,H.detune.value=re+ze(-2,2),e.vaiven.connect(H.detune),j.gain.value=ne>1?.35*N:.5,H.connect(j),j.connect(Y),H.start(b),H.stop(b+P+.05)}),Y.gain.value=0,Y.gain.setValueAtTime(0,b),Y.gain.linearRampToValueAtTime(C,b+.018),Y.gain.exponentialRampToValueAtTime(1e-4,b+P),Y.connect(d)},A=t.createBiquadFilter();A.type="lowpass",A.frequency.value=1100,A.connect(e.fader),a(A,this.sala,.9),e.nodos.push(A);let S=(E,b,C)=>E.forEach(P=>[-9,9].forEach(N=>{let Y=t.createOscillator(),ee=t.createGain();Y.type="sawtooth",Y.frequency.value=tt(P),Y.detune.value=N,e.vaiven.connect(Y.detune),this.env(ee,b,1.5,.015,Math.max(0,C-3),b+C+1.5),Y.connect(ee),r(ee,N/12).connect(A),Y.start(b),Y.stop(b+C+1.6)})),v=t.createGain();v.gain.value=1,v.connect(e.fader),e.nodos.push(v);let M=(E,b,C,P)=>{let N=t.createOscillator(),Y=t.createOscillator(),ee=t.createGain(),V=t.createGain();N.frequency.setValueAtTime(tt(P??E),b),P!=null&&N.frequency.exponentialRampToValueAtTime(tt(E),b+.08),Y.type="triangle",Y.frequency.value=tt(E)*2,V.gain.value=.15,Y.connect(V),V.connect(ee),ee.gain.value=0,ee.gain.setValueAtTime(0,b),ee.gain.linearRampToValueAtTime(.105,b+.012),ee.gain.setValueAtTime(.105,b+C*.7),ee.gain.linearRampToValueAtTime(1e-4,b+C),N.connect(ee),ee.connect(v),[N,Y].forEach(ne=>{ne.start(b),ne.stop(b+C+.02)})},w=t.createGain();w.gain.value=1.35,w.connect(e.fader),a(w,this.cuarto,.25),e.nodos.push(w);let L=(E,b,C,P,N,Y,ee=0)=>{let V=t.createBufferSource(),ne=t.createBiquadFilter(),re=t.createGain();V.buffer=this.ruido,ne.type=P,ne.frequency.value=N,ne.Q.value=Y,re.gain.setValueAtTime(C,E),re.gain.exponentialRampToValueAtTime(1e-4,E+b),V.connect(ne),ne.connect(re),(ee?r(re,ee):re).connect(w),V.start(E,Math.random()*2),V.stop(E+b+.05)},_=(E,b,C,P,N,Y="sine",ee=0)=>{let V=t.createOscillator(),ne=t.createGain();V.type=Y,V.frequency.setValueAtTime(b,E),V.frequency.exponentialRampToValueAtTime(C,E+P*.35),ne.gain.setValueAtTime(N,E),ne.gain.exponentialRampToValueAtTime(1e-4,E+P),V.connect(ne),(ee?r(ne,ee):ne).connect(w),V.start(E),V.stop(E+P+.02)},R=(E,b=1)=>{_(E,110,52,.18,.5*b),L(E,.006,.05*b,"highpass",3e3,.6)},O=(E,b=1)=>{_(E,1900,1750,.03,.05*b,"triangle"),L(E,.04,.09*b,"bandpass",2600,2.5)},z=(E,b=1)=>_(E,dt([820,1040,1240]),700,.05,.05*b,"sine",ze(-.5,.5)),G=(E,b=1)=>L(E,.04,.025*b,"bandpass",7e3,1.4,.3),se=[[600,1e3,2600],[400,1600,2500],[450,850,2550],[380,2e3,2700]],k=(E,b,C,P=.05)=>{let N=t.createOscillator(),Y=t.createGain(),ee=t.createGain(),V=dt(se),ne=t.createBiquadFilter();N.type="sawtooth",N.frequency.value=tt(E),e.vaiven.connect(N.detune),N.connect(Y),V.forEach((ye,be)=>{let Te=t.createBiquadFilter();Te.type="bandpass",Te.frequency.value=ye,Te.Q.value=[6,8,10][be];let B=t.createGain();B.gain.value=[1,.45,.2][be],Y.connect(Te),Te.connect(B),B.connect(ee)});let re=t.createBufferSource(),H=t.createBiquadFilter(),j=t.createGain();re.buffer=this.ruido,H.type="bandpass",H.frequency.value=V[1]*1.5,H.Q.value=1.2,j.gain.value=.6,re.connect(H),H.connect(j),j.connect(ee),ne.type="lowpass",ne.frequency.value=3e3,ee.connect(ne),ee.gain.value=0,ee.gain.setValueAtTime(0,b),ee.gain.linearRampToValueAtTime(P,b+.12),ee.gain.setValueAtTime(P,b+C*.65),ee.gain.exponentialRampToValueAtTime(1e-4,b+C);let ge=r(ne,ze(-.2,.2));ge.connect(e.fader),a(ge,this.sala,.8),a(ge,this.eco,.35),N.start(b),N.stop(b+C+.05),re.start(b,Math.random()*2),re.stop(b+C+.05)},$=[0,2,5,3],le=E=>[0,2,4,6].map(b=>this.nota(E+b,1)),ce=[0,1,2,3,2,1],ae=[1,.55,.8,.65,.9,.5,.75],q=[3,1,2],J=[2,5,9,12,14],U=0,Q=0,F=[],W=0,X=[],D=()=>{let E=dt([2,4,5]);X=[0,3,6,10,16,19,22].filter(()=>Math.random()<.6).map(b=>(E=Math.max(0,Math.min(7,E+dt([-1,1,0,2,-2]))),[b,E]))};D(),this.secuenciador(e,i,(E,b)=>{let C=E%16,P=E%32;C===0&&(U=Math.floor(E/16)+1,W=Math.random(),((U-1)%2===0||e.primero)&&(Q=$[((U-1)/2|0)%4],F=le(Q),S([F[0],F[1],F[3]].map(ee=>ee-12),b,s*32)),U%8===1&&D());let N=(U-1)%32;if(F.length){let ee=E%ce.length,V=ae[E%ae.length]*ze(.85,1.05);m(F[ce[ee]]+(ce[ee]===3&&E%12===9?12:0),b,.09*V,ze(.8,1.3),V)}F.length&&J.includes(C)&&U>2&&Math.random()<.75&&m(F[q[(E>>1)%q.length]]+12,b+s*.02,.05,1.6,.6),U>2&&((C===0||C===8&&W>.25||C===11&&W<.3)&&R(b,C===0?1:.85),(C===4||C===12)&&O(b,1),[3,6,10,14].includes(C)&&Math.random()<.7&&z(b,C===6||C===14?1:.7),C%2===1&&Math.random()<.5&&G(b,.6+Math.random()*.4),C===0&&M(this.nota(Q,-1),b,s*2.6),C===6&&M(this.nota(Q,-1),b,s*2.5),C===12&&M(this.nota(Q+(W>.5?4:2),-1),b,s*3,this.nota(Q,-1)));let Y=X.find(([ee])=>ee===P);Y&&U>4&&N%8>=4&&k(this.nota(Y[1],1),b,s*ze(3,6),.11)})}triphop(e){let t=this.ctx,i=80,s=60/i/4,a=.1;this.eco.delayTime.setTargetAtTime(s*3,t.currentTime,.2);let r=(D,E,b)=>{let C=t.createGain();return C.gain.value=b,D.connect(C),C.connect(E),e.salidas.push(C),e.nodos.push(C),C},o=(D,E)=>{let b=t.createStereoPanner();return b.pan.value=E,D.connect(b),b};e.vaiven=t.createGain();let c=t.createOscillator(),l=t.createGain();c.frequency.value=.33,l.gain.value=6,c.connect(l),l.connect(e.vaiven),c.start(),e.nodos.push(c,l,e.vaiven),this.fondo(e,.006,"highpass",5e3,.4);let u=()=>{let D=t.currentTime+.05;for(let E=0;E<5;E++)Math.random()<.6&&this.ruidoCorto(e,D+Math.random()*.6,ze(.003,.01),ze(.015,.05),"highpass",ze(2e3,6e3));this.luego(e,.6,u)};u();let d=t.createWaveShaper(),h=new Float32Array(4096);for(let D=0;D<4096;D++){let E=D/2047.5-1;h[D]=Math.round(E*48)/48}d.curve=h;let f=t.createGain(),g=t.createBiquadFilter();f.gain.value=.6,g.type="lowpass",g.frequency.value=5200,f.connect(d),d.connect(g),g.connect(e.fader),r(g,this.cuarto,.45),e.nodos.push(d,f,g);let y=(D,E,b,C,P,N,Y=0)=>{let ee=t.createBufferSource(),V=t.createBiquadFilter(),ne=t.createGain();ee.buffer=this.ruido,V.type=C,V.frequency.value=P,V.Q.value=N,ne.gain.setValueAtTime(b,D),ne.gain.exponentialRampToValueAtTime(1e-4,D+E),ee.connect(V),V.connect(ne),(Y?o(ne,Y):ne).connect(f),ee.start(D,Math.random()*2),ee.stop(D+E+.05)},p=(D,E,b,C,P,N="sine")=>{let Y=t.createOscillator(),ee=t.createGain();Y.type=N,Y.frequency.setValueAtTime(E,D),Y.frequency.exponentialRampToValueAtTime(b,D+C*.3),ee.gain.setValueAtTime(P,D),ee.gain.exponentialRampToValueAtTime(1e-4,D+C),Y.connect(ee),ee.connect(f),Y.start(D),Y.stop(D+C+.02)},m=(D,E=1)=>{p(D,95,44,.45,.55*E),y(D,.012,.08*E,"lowpass",1200,.6)},A=(D,E=1)=>{p(D,190,150,.12,.14*E,"triangle"),y(D,.32,.22*E,"bandpass",1700,.7),y(D,.08,.07*E,"highpass",4500,.6)},S=(D,E=1,b=!1)=>y(D,b?.2:.05,.045*E,"highpass",7e3,.6,ze(-.3,.3)),v=t.createWaveShaper(),M=new Float32Array(1024);for(let D=0;D<1024;D++){let E=D/511.5-1;M[D]=Math.tanh(1.6*E)/Math.tanh(1.6)}v.curve=M;let w=t.createBiquadFilter(),L=t.createGain();w.type="lowpass",w.frequency.value=380,L.gain.value=.1,v.connect(w),w.connect(L),L.connect(e.fader),e.nodos.push(v,w,L);let _=(D,E,b)=>{let C=t.createOscillator(),P=t.createOscillator(),N=t.createGain();P.type="triangle",C.frequency.value=tt(D),P.frequency.value=tt(D)*1.003,N.gain.value=0,N.gain.setValueAtTime(0,E),N.gain.linearRampToValueAtTime(.16,E+.04),N.gain.setValueAtTime(.16,E+b*.8),N.gain.linearRampToValueAtTime(1e-4,E+b),C.connect(N),P.connect(N),N.connect(v),[C,P].forEach(Y=>{Y.start(E),Y.stop(E+b+.02)})},R=t.createBiquadFilter();R.type="lowpass",R.frequency.value=1800,R.Q.value=.5,R.connect(e.fader),r(R,this.sala,1),e.nodos.push(R);let O=(D,E,b,C=.011)=>D.forEach(P=>[-10,0,10].forEach(N=>{let Y=t.createOscillator(),ee=t.createGain(),V=t.createOscillator(),ne=t.createGain();Y.type="sawtooth",Y.frequency.value=tt(P),Y.detune.value=N+ze(-3,3),V.frequency.value=ze(4.8,5.6),ne.gain.value=9,V.connect(ne),ne.connect(Y.detune),e.vaiven.connect(Y.detune),this.env(ee,E,2.4,C,Math.max(0,b-5),E+b+2.6),Y.connect(ee),o(ee,N/14).connect(R),[Y,V].forEach(re=>{re.start(E),re.stop(E+b+2.7)})})),z=t.createGain(),G=t.createOscillator(),se=t.createOscillator(),k=t.createGain(),$=t.createBiquadFilter();G.type="sine",$.type="lowpass",$.frequency.value=2400,se.frequency.value=5.8,k.gain.value=22,se.connect(k),k.connect(G.detune),G.frequency.value=tt(this.nota(4,1)),z.gain.value=0,G.connect($),$.connect(z);let le=o(z,.2);le.connect(e.fader),r(le,this.sala,.9),r(le,this.eco,.35),G.start(),se.start(),e.nodos.push(z,G,se,k,$);let ce=(D,E,b,C=.035)=>{G.frequency.setTargetAtTime(tt(D),E,.07),z.gain.setTargetAtTime(C,E,.06),z.gain.setTargetAtTime(1e-4,E+b,.18)},ae=(D,E,b=.08)=>{let C=t.createGain();C.gain.value=0,[[1,1,"triangle"],[2,.4,"square"],[3,.12,"sine"]].forEach(([Y,ee,V])=>{let ne=t.createOscillator(),re=t.createGain();ne.type=V,ne.frequency.value=tt(D)*Y,re.gain.value=ee,ne.connect(re),re.connect(C),ne.start(E),ne.stop(E+1.3)}),C.gain.setValueAtTime(b,E),C.gain.exponentialRampToValueAtTime(1e-4,E+1.2);let P=t.createBiquadFilter();P.type="lowpass",P.frequency.value=3e3,C.connect(P);let N=o(P,-.3);N.connect(e.fader),r(N,this.sala,.5),r(N,this.eco,.2)},q=(D,E=3)=>{for(let b=0;b<E;b++){let C=D+b*s*.5,P=t.createBufferSource(),N=t.createBiquadFilter(),Y=t.createGain();P.buffer=this.ruido,N.type="bandpass",N.Q.value=6,N.frequency.setValueAtTime(400,C),N.frequency.exponentialRampToValueAtTime(b%2?500:2600,C+s*.22),N.frequency.exponentialRampToValueAtTime(300,C+s*.45),Y.gain.setValueAtTime(1e-4,C),Y.gain.linearRampToValueAtTime(.16,C+.01),Y.gain.exponentialRampToValueAtTime(1e-4,C+s*.45),P.connect(N),N.connect(Y),o(Y,.35).connect(f),P.start(C,Math.random()*2),P.stop(C+s*.5)}},J=[0,5,3,4],U=0,Q=0,F=0,W=[],X=()=>{let D=dt([4,6,7]);W=[0,6,10,16,22,26].filter(()=>Math.random()<.7).map(E=>(D=Math.max(2,Math.min(9,D+dt([-2,-1,1,2,0]))),[E,D,dt([4,6,8])]))};X(),this.secuenciador(e,i,(D,E)=>{let b=D%16,C=D%32,P=E+(b%2?s*a:0);b===0&&(U=Math.floor(D/16)+1,F=Math.random(),((U-1)%2===0||e.primero)&&(Q=J[((U-1)/2|0)%4],O([this.nota(Q,0),this.nota(Q+2,0),this.nota(Q+4,0),this.nota(Q,1)],E,s*32)),U%4===1&&X());let N=(U-1)%32,Y=U<=2,ee=N>=20&&N<22;!Y&&!ee&&((b===0||b===7||b===10&&F>.3||b===15&&F<.2)&&m(P,b===0?1:.85),(b===4||b===12)&&A(P+.008),(b===9||b===14)&&Math.random()<.25&&A(P,.25),b%2===0&&S(P,b%4===2?.9:.55,b===14&&F>.6),b===0&&_(this.nota(Q,-1),E,s*7),b===8&&_(this.nota(Q+(F>.5?4:0),-1),E,s*6)),U%8===0&&b===12&&!Y&&q(P,3);let ne=W.find(([re])=>re===C);ne&&U>4&&N%8>=4&&ce(this.nota(ne[1],1),P,ne[2]*s),U>2&&N%8<4&&(b===2||b===6||b===11)&&Math.random()<.55&&ae(this.nota(Q+dt([0,2,4,7]),1),P)})}arrancar(){if(this.canal<0){this.gen=null,window.__finoActivo||this.estatica(2.4,.03),this.cat&&this.cat.empieza();return}this.amb=this.canal;let e=Ur[this.canal][3],t=this.nuevaGen(e);this.gen=t,this[e](t)}estatica(e,t){let i=this.ctx;if(!i||!this.on)return;let s=i.currentTime,a=i.createBufferSource(),r=i.createBiquadFilter(),o=i.createGain();a.buffer=this.ruido,a.loop=!0,a.playbackRate.value=.85+Math.random()*.3,r.type="bandpass",r.frequency.setValueAtTime(900+Math.random()*1400,s),r.frequency.linearRampToValueAtTime(1400+Math.random()*1800,s+e),r.Q.value=.9,o.gain.setValueAtTime(0,s),o.gain.linearRampToValueAtTime(t,s+Math.min(.3,e/4)),o.gain.setValueAtTime(t,s+e*.55),o.gain.linearRampToValueAtTime(0,s+e),a.connect(r),r.connect(o),o.connect(this.master),a.start(s,Math.random()*2),a.stop(s+e+.05),a.onended=()=>{try{a.disconnect(),r.disconnect(),o.disconnect()}catch{}}}desbloquear(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}if(!this.mudo){let t=this.mudo=new Audio("data:audio/wav;base64,UklGRvQHAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YdAHAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==");t.loop=!0,t.setAttribute("playsinline",""),t.preload="auto"}let e=this.mudo.play();e&&e.catch(()=>{})}async encender(){this.desbloquear(),this.ctx||this.init();let e=this.ctx.resume();if(this.on){await e;return}this.on=!0,this.arrancar(),await e;let t=this.master.gain,i=this.ctx.currentTime;t.cancelScheduledValues(i),t.setValueAtTime(t.value,i),t.linearRampToValueAtTime(.9,i+4)}apagar(){if(!this.ctx)return;this.on=!1,this.matarGen(this.gen,1.2),this.gen=null,this.cat&&this.cat.para(1.2),this.estFino.gain.setTargetAtTime(0,this.ctx.currentTime,.2),this.txG.gain.setTargetAtTime(0,this.ctx.currentTime,.2),this.txEl&&setTimeout(()=>{this.on||this.txEl.pause()},1200),this.mudo&&setTimeout(()=>{this.on||this.mudo.pause()},1500);let e=this.master.gain,t=this.ctx.currentTime;e.cancelScheduledValues(t),e.setValueAtTime(e.value,t),e.linearRampToValueAtTime(0,t+1.4)}sintonizar(e,t){let i=this.canal;this.canal=((e+1)%13+13)%13-1,as&&this.canal<0&&(this.canal=i===0?11:0),this.on&&(this.matarGen(this.gen,2.5),this.gen=null,this.cat&&this.canal>=0&&this.cat.para(2.5),t||this.estatica(1.8,.03),this.arrancar())}nivel(){if(!this.ctx||!this.on)return 0;this.analyser.getFloatTimeDomainData(this.buf);let e=0;for(let t of this.buf)e+=t*t;return Math.sqrt(e/this.buf.length)+(this.canal<0&&this.cat?this.cat.nivel():0)}},Be=new qu;window.__radio=Be;var eh=()=>{Be.on&&Be.ctx&&Be.ctx.state!=="running"&&(Be.desbloquear(),Be.ctx.resume().catch(()=>{}))};addEventListener("pointerdown",eh,!0);addEventListener("touchend",eh,!0);document.addEventListener("visibilitychange",()=>{document.hidden||eh()});var de=n=>document.getElementById(n),Yf=de("vu");for(let n=0;n<24;n++)Yf.appendChild(document.createElement("i"));var Nt=de("casillas"),th=matchMedia("(max-width:820px)");{let n=document.querySelector(".pletina"),e=de("bAbre"),t=document.querySelector(".barra");e.onclick=()=>{let s=!n.classList.contains("abierta");n.classList.toggle("abierta",s),e.setAttribute("aria-expanded",s),e.setAttribute("aria-label",s?"Plegar la radio":"Desplegar la radio")};let i=0;addEventListener("scroll",()=>{if(!th.matches)return;let s=scrollY;Math.abs(s-i)<6||(t.classList.toggle("oculta",s>80&&s>i),i=s)},{passive:!0})}{let n=document.querySelector(".pletina"),e=matchMedia("(max-width:820px)"),t=()=>{let i=n.getBoundingClientRect().width,s=e.matches;n.classList.toggle("p-m",!s&&i<1e3),n.classList.toggle("p-s",!s&&i<760)};new ResizeObserver(t).observe(n),e.addEventListener("change",t),t()}{let n=document.createElement("button");n.id="canal0",n.className="c00",n.title="aurality \xB7 fragmentos del cat\xE1logo",n.setAttribute("aria-label","Canal 00, aurality, fragmentos del cat\xE1logo"),n.onclick=()=>cs(-1),as&&(n.disabled=!0,n.style.visibility="hidden",n.setAttribute("aria-hidden","true")),Nt.appendChild(n)}Ur.forEach(([n,,,e],t)=>{let i=document.createElement("button");i.id="canal"+(t+1),i.title=n+" \xB7 "+Yc[e],i.setAttribute("aria-label","Canal "+String(t+1).padStart(2,"0")+", "+n+", "+Yc[e]),i.onclick=()=>cs(t),Nt.appendChild(i)});function jx(){if("mediaSession"in navigator)try{let n=Be.canal,e=n<0?"CANAL 00 \xB7 aurality":`CANAL ${String(n+1).padStart(2,"0")} \xB7 ${Ur[n][0]}`;navigator.mediaSession.metadata=new MediaMetadata({title:e,artist:"aurality \xB7 radio AU-00",album:"Broadcasted from Elda",artwork:[{src:"/apple-touch-icon.png",sizes:"180x180",type:"image/png"},{src:"/icono-512.png",sizes:"512x512",type:"image/png"}]}),navigator.mediaSession.playbackState=Be.on?"playing":"paused"}catch{}}if("mediaSession"in navigator)try{navigator.mediaSession.setActionHandler("play",()=>{Be.on||Or()}),navigator.mediaSession.setActionHandler("pause",()=>{Be.on&&Or()}),navigator.mediaSession.setActionHandler("nexttrack",()=>de("bNext").click()),navigator.mediaSession.setActionHandler("previoustrack",()=>de("bPrev").click())}catch{}function Ot(){if(jx(),Nt.querySelectorAll("button").forEach((a,r)=>a.setAttribute("aria-pressed",r-1===Be.canal?"true":"false")),window.__fino&&window.__fino.pinta())return;if(Be.canal<0){de("canalK").textContent="Radio \xB7 cat\xE1logo",de("canalNom").textContent="CANAL 00 \xB7 aurality",de("canalNum").textContent="00 / 12",de("canalSub").innerHTML=Be.cat?Be.cat.rotulo():"Fragmentos del cat\xE1logo";return}de("canalK").textContent="Radio ambient \xB7 en directo";let[n,e,t,i]=Ur[Be.canal],s=String(Be.canal+1).padStart(2,"0");de("canalNom").textContent="CANAL "+s+" \xB7 "+n,de("canalNum").textContent=s+" / 12",de("canalSub").textContent=Yc[i].charAt(0).toUpperCase()+Yc[i].slice(1)+" \xB7 "+Rf[e%12].charAt(0)+Rf[e%12].slice(1).toLowerCase()+" "+Yx[t]+" \xB7 en directo"}function Ai(){let n=Be.on;de("bPlay").setAttribute("aria-pressed",n),de("bPlay").setAttribute("aria-label",n?"Pausar":"Reproducir"),de("icoPlay").innerHTML=n?'<path d="M3 2h3.5v12H3zM9.5 2H13v12H9.5z"/>':'<path d="M3 1.5v13L14.5 8z"/>',de("led").classList.toggle("on",n),$u(),de("estadoTxt").textContent=n?"En directo":ri?"En pausa":"En espera"}var ri=!1,Ma=0;async function Or(){Be.on?Be.apagar():await Be.encender(),Ai(),Ot()}var nl=n=>n<0?-Math.PI/12:-(n+1)*Math.PI/6;function cs(n){Be.sintonizar(n),Ot(),Ma=1,Is=nl(Be.canal);try{localStorage.setItem("au-canal",Be.canal)}catch{}}var Sa=de("escalaDial"),If=de("escAguja"),Kx=de("escLect");de("escMarcas").innerHTML=Array.from({length:121},(n,e)=>`<i class="${e%10?e%5?"":"m":"c"}" style="left:${(e/120*100).toFixed(3)}%"></i>${e%10?"":`<b style="left:${(e/120*100).toFixed(3)}%">${String(e/10).padStart(2,"0")}</b>`}`).join("");var zu=n=>{if(n){let e=document.querySelector(".pletina").getBoundingClientRect(),t=innerWidth<821?10:20,i=document.querySelector(".pletina");Object.assign(Sa.style,{left:e.left+t+"px",width:e.width-2*t+"px",bottom:`calc(${getComputedStyle(i).bottom} + ${i.offsetHeight+10}px)`,top:"auto"})}else Sa.classList.remove("desliza"),ws.style.left=ws.style.width="";Sa.classList.toggle("on",n)},Zc=64,ws=de("escMarcas"),nh=as?1:0;var Zf=n=>{if(Sa.classList.contains("desliza")){let e=Sa.clientWidth/2;ws.style.width=12*Zc+"px",ws.style.left=e-n*Zc+"px",If.style.left=e+"px"}else If.style.left=ws.offsetLeft+n/12*ws.offsetWidth+"px";Kx.textContent=n.toFixed(1).padStart(4,"0")},ih=[],On=null,il=document.createElement("i");il.className="aguja";il.setAttribute("aria-hidden","true");Nt.appendChild(il);var Jf=()=>[...Nt.querySelectorAll("button")].map(n=>n.offsetLeft+n.offsetWidth/2);var Qx=n=>{let e=Jf(),t=Math.max(0,Math.min(11,Math.floor(n)));return e[t]+(e[t+1]-e[t])*(n-t)};async function jf(){if(Ta)try{let n=await fetch("/tx/activas",{cache:"no-store"});n.ok&&(ih=await n.json())}catch{}}var Pf=n=>{let e=Math.round(n),t=Math.abs(n-e),i=null,s=9;return ih.forEach(a=>{let r=Math.abs(n-a.f);r<s&&(s=r,i=a)}),{f:n,n:e,dC:t,tx:s<.45?i:null,dT:s,fijado:s<=.06,cerca:s<.45&&s>.06}},Fr=null;function Tn(n,e){if(n==null){clearTimeout(Tn.t),On=null,Nt.classList.remove("fino"),Fr=null,Be.ajustaFino({f:Be.canal+1,senal:1,ruido:0,tx:null}),$u(),Ot();return}n=Math.round(Math.max(nh,Math.min(12,n))*100)/100;let t=Pf(n);if(e){if(clearTimeout(Tn.t),t.tx&&t.dT<=.12)n=t.tx.f;else if(t.dC<=.12){Tn(null),t.n-1!==Be.canal&&cs(t.n-1);return}t=Pf(n)}On=n,Nt.classList.add("fino"),il.style.left=Qx(n)+"px",Zf(n),clearTimeout(Tn.t);let i=t.dC<=.12&&t.n-1!==Be.canal&&!t.tx;i&&(Tn.t=setTimeout(()=>{On!=null&&Math.abs(On-t.n)<=.12&&(window.__finoActivo=!0,Be.sintonizar(t.n-1,!0),window.__finoActivo=!1,Is=nl(Be.canal),Ma=.6,Tn(On))},300));let s=i?0:t.dC<=.12?1-t.dC*2.5:Math.max(0,1-(t.dC-.12)/.22),a=t.tx?1-t.dT/.45:0;Fr=t,Be.ajustaFino({f:n,senal:s*(1-a),ruido:t.fijado?0:Math.min(.036,(1-s)*.032+a*.012+.003),tx:t.tx,txNivel:t.fijado?.3:Math.pow(a,1.6)*.2,claro:t.fijado}),$u(),Ot(),t.fijado&&e&&e_(t.tx)}function $u(){let n=On==null?null:Fr,e=Be.on&&(!n||n.dC<=.12||n.cerca||n.fijado);["tAzul","tAzulM"].forEach(t=>{let i=de(t);i.classList.toggle("on",e),i.classList.toggle("cerca",!!(Be.on&&n&&n.cerca)),i.classList.toggle("fijo",!!(Be.on&&n&&n.fijado))})}window.__fino={pinta(){if(On==null||!Fr)return!1;let n=Fr,e=On.toFixed(1).padStart(4,"0");return de("canalNum").textContent=e,de("canalK").textContent="Sinton\xEDa fina",n.dC<=.12&&!n.tx&&n.n-1===Be.canal?!1:n.dC<=.12&&!n.tx?(de("canalNom").textContent="SINTONIZANDO \xB7 "+$n(n.n),de("canalSub").textContent="Canal "+$n(n.n)+" \xB7 "+e,!0):(de("canalNom").textContent=n.fijado?`${n.tx.id} \xB7 TRANSMISI\xD3N`:n.cerca?"SE\xD1AL D\xC9BIL\u2026":"SIN SE\xD1AL",de("canalSub").innerHTML=n.fijado?`Frecuencia ${e} \xB7 <a href="#registro">registro de escucha</a>`:`Entre canales \xB7 ${e}`,!0)}};{let n=0,e=0,t=!1,i=!1,s=Zc,a=o=>Math.max(nh,Math.min(12,e+(o.clientX-n)/s));Nt.addEventListener("pointerdown",o=>{if(!(o.pointerType==="mouse"&&o.button!==0)){n=o.clientX,e=On??Be.canal+1,i=o.pointerType!=="touch",t=!1;try{Nt.setPointerCapture(o.pointerId)}catch{}!Be.on&&ri&&Or(),Be.txPrepara()}}),Nt.addEventListener("pointermove",o=>{!Nt.hasPointerCapture||!Nt.hasPointerCapture(o.pointerId)||!t&&Math.abs(o.clientX-n)<(i?10:6)||(t||(n=o.clientX,zu(!0),Sa.classList.toggle("desliza",!i),s=i?ws.getBoundingClientRect().width/12:Zc,Zf(e)),t=!0,o.preventDefault(),Tn(a(o)))});let r=o=>{let c=o.clientX-Nt.getBoundingClientRect().left;if(t)Tn(a(o),!0);else{let l=Jf(),u=l.reduce((d,h,f)=>Math.abs(h-c)<Math.abs(l[d]-c)?f:d,0);Tn(null),cs(u-1)}Nt.dataset.arr="1",setTimeout(()=>delete Nt.dataset.arr,0),t=!1,zu(!1)};Nt.addEventListener("pointerup",r),Nt.addEventListener("pointercancel",()=>{t=!1,zu(!1)}),Nt.addEventListener("click",o=>{Nt.dataset.arr?(o.stopPropagation(),o.preventDefault()):o.target.closest("button")&&Tn(null)},!0),Nt.addEventListener("keydown",o=>{if(o.key!=="ArrowLeft"&&o.key!=="ArrowRight")return;o.preventDefault();let c=(On??Be.canal+1)+(o.key==="ArrowRight"?.1:-.1);clearTimeout(Nt.tk),Tn(c),Nt.tk=setTimeout(()=>Tn(On,!0),700)})}var Kf="au-registro",Xu=()=>{try{return JSON.parse(localStorage.getItem(Kf)||"[]")}catch{return[]}};async function e_(n){let e=Xu().find(s=>s.id===n.id);if(e){Yu(e,!0);return}let t={id:n.id,f:n.f,texto:""};try{let s=await fetch("/tx/i/"+encodeURIComponent(n.id),{cache:"no-store"});s.ok&&(t=await s.json())}catch{}let i={id:t.id,f:t.f,texto:t.texto||"",t:Date.now()};try{localStorage.setItem(Kf,JSON.stringify([i,...Xu()]))}catch{}Yu(i,!1)}var sh=n=>{let e=new Date(n);return[$n(e.getDate())+"."+$n(e.getMonth()+1)+"."+String(e.getFullYear()).slice(-2),$n(e.getHours())+":"+$n(e.getMinutes())]};function Yu(n,e){let[t,i]=sh(n.t),s=document.createElement("div");s.className="qsl-velo",s.innerHTML=`<div class="qsl" role="dialog" aria-modal="true" aria-label="Tarjeta de escucha ${me(n.id)}">
    <div class="k"><span>Tarjeta de escucha \xB7 AU-00</span><span>${me(n.id)}</span></div>
    <div class="fq">${n.f.toFixed(1).padStart(4,"0")}<small>DIAL</small></div>
    <div class="cap">${e?"YA LA TEN\xCDAS":"TRANSMISI\xD3N CAPTADA"}</div>
    <div class="dat"><span><b>FECHA</b>${t}</span><span><b>HORA</b>${i}</span><span><b>DESDE</b>Elda \xB7 38.48\xB0N</span></div>
    ${n.texto?`<p>${me(n.texto)}</p>`:""}
    <div class="acciones"><button class="tecla oscura" type="button" data-a="guarda">Guardar tarjeta</button><a class="tecla" href="#registro" data-a="reg">Registro</a><button class="tecla" type="button" data-a="cierra">Seguir escuchando</button></div></div>`,document.body.appendChild(s);let a=()=>s.remove();s.addEventListener("click",r=>{let o=r.target.closest("[data-a]");(r.target===s||o&&o.dataset.a!=="guarda")&&a(),o&&o.dataset.a==="guarda"&&t_(n)}),s.addEventListener("keydown",r=>{r.key==="Escape"&&a()}),s.querySelector('[data-a="cierra"]').focus()}function t_(n){let i=document.createElement("canvas");i.width=1200,i.height=750;let s=i.getContext("2d"),[a,r]=sh(n.t),o="JetBrains Mono, monospace",c=34;s.fillStyle="#9DAFC5",s.fillRect(0,0,1200,750),s.beginPath(),[[c,0],[1200-c,0],[1200,c],[1200,750-c],[1200-c,750],[c,750],[0,750-c],[0,c]].forEach(([u,d],h)=>h?s.lineTo(u,d):s.moveTo(u,d)),s.closePath();let l=s.createLinearGradient(0,0,0,750);if(l.addColorStop(0,"#f0efea"),l.addColorStop(1,"#dad8d1"),s.fillStyle=l,s.fill(),s.fillStyle="#4a5060",s.font=`700 22px ${o}`,s.fillText("TARJETA DE ESCUCHA \xB7 AU-00 \xB7 RECEPTOR",70,96),s.textAlign="right",s.fillText(n.id,1130,96),s.textAlign="left",s.fillStyle="#0E0F12",s.font=`800 230px ${o}`,s.fillText(n.f.toFixed(1).padStart(4,"0"),62,330),s.fillStyle="#D62C2C",s.fillRect(70,372,64,8),s.fillStyle="#0E0F12",s.font=`800 40px ${o}`,s.fillText("TRANSMISI\xD3N CAPTADA",70,450),s.fillStyle="#3b4150",s.font=`500 26px ${o}`,s.fillText(`${a}  \xB7  ${r}  \xB7  ELDA 38.48\xB0N 0.79\xB0O`,70,500),n.texto){s.font=`500 25px ${o}`;let u="",d=570;n.texto.split(" ").forEach(h=>{s.measureText(u+h).width>1060&&(s.fillText(u,70,d),u="",d+=36),u+=h+" "}),d<680&&s.fillText(u,70,d)}s.fillStyle="#6F6D68",s.font=`700 20px ${o}`,s.textAlign="right",s.fillText("aurality \xB7 frecuencias ocultas",1130,694),i.toBlob(async u=>{let d=`aurality-${n.id.toLowerCase()}-${n.f.toFixed(1)}.png`,h=new File([u],d,{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[h]})){await navigator.share({files:[h],title:"aurality \xB7 "+n.id});return}}catch(g){if(g&&g.name==="AbortError")return}let f=document.createElement("a");f.href=URL.createObjectURL(u),f.download=d,document.body.appendChild(f),f.click(),setTimeout(()=>{URL.revokeObjectURL(f.href),f.remove()},1e3)},"image/png")}function Qf(n){n===void 0&&(n=[],Ta&&fetch("/tx/registro",{cache:"no-store"}).then(r=>r.ok?r.json():[]).then(r=>{Ke==="registro"&&r.length&&Qf(r)}).catch(()=>{}));let e=de("panel"),t=Xu(),i=n.filter(r=>!t.some(o=>o.id===r.id)),s=new Set([...t.map(r=>r.id),...n.map(r=>r.id)]).size,a=r=>r?r.slice(8,10)+"."+r.slice(5,7):"";e.innerHTML=`<header class="panel-cab"><div><h2>REGISTRO DE ESCUCHA</h2><div class="sub">Frecuencias ocultas \xB7 ${t.length} de ${s} transmisiones captadas en este aparato</div></div></header>
    <div class="panel-cuerpo"><div class="registro">
      ${t.length?t.map(r=>{let[o,c]=sh(r.t);return`<div class="ent"><span class="fq">${r.f.toFixed(1).padStart(4,"0")}</span><span class="id">${me(r.id)} \xB7 CAPTADA EL ${o} A LAS ${c}</span><button class="tecla" type="button" data-id="${me(r.id)}">Tarjeta</button><span class="tx">${me(r.texto||"")}</span></div>`}).join(""):'<p class="bio">Todav\xEDa no has captado ninguna transmisi\xF3n. Hay se\xF1ales escondidas entre los canales: arrastra sobre las casillas de la pletina para sintonizar fino y vigila el piloto azul.</p>'}
      ${i.length?`<div class="sub2">SE TE ESCAPARON</div>${i.map(r=>`<div class="ent perdida"><span class="fq">${r.f.toFixed(1).padStart(4,"0")}</span><span class="id">${me(r.id)} \xB7 EMITIDA DEL ${a(r.desde)} AL ${a(r.hasta)}${r.noche?" \xB7 SOLO DE NOCHE":""}</span><span></span><span class="tx">No volver\xE1 a emitirse.</span></div>`).join("")}`:""}
    </div></div>`,e.querySelectorAll("[data-id]").forEach(r=>r.onclick=()=>Yu(t.find(o=>o.id===r.dataset.id),!0))}de("bPlay").onclick=Or;de("bPrev").onclick=()=>{Tn(null),cs(Be.canal-1)};de("bNext").onclick=()=>{Tn(null),cs(Be.canal+1)};async function sl(n){ri=!0,de("encendido").classList.add("fuera"),yp=performance.now(),n&&await Be.encender(),Ai()}de("bOn").onclick=()=>sl(!0);de("bMudo").onclick=()=>sl(!1);Ot();Ai();var ep=()=>{de("hora").textContent=new Intl.DateTimeFormat("es-ES",{hour:"2-digit",minute:"2-digit",timeZone:"Europe/Madrid"}).format(new Date)+" CET"};ep();setInterval(ep,15e3);function al(){let n=document.querySelector('.placa[aria-current="page"]');if(!n)return;let e=de("punta");e.style.top=`calc(${parseFloat(n.style.top)+8.673/2}% - ${e.offsetHeight/2}px)`}var jt=await(async()=>{let n={...Tf,...Ef,...wf,...Cf},e=async a=>{try{let r=await fetch("contenido/"+a,{cache:"no-store"});if(r.ok)return await r.json()}catch{}return null},t=await Promise.all(["lanzamientos.json","artistas.json","senal.json","textos.json"].map(e)),i=Object.assign({},n,...t.filter(Boolean));Array.isArray(i.artists)&&(i.artists=Object.fromEntries(i.artists.filter(a=>a&&a.name).map(({name:a,...r})=>[a.trim().toUpperCase(),r]))),i.releases=(i.releases||[]).filter(a=>a&&a.code&&a.artist).map(a=>({...a,artist:a.artist.trim().toUpperCase(),title:a.title||"[ S/T ]",destacado:a.destacado===!0||a.destacado==="true",edicion:a.edicion===!0||a.edicion==="true",historia:String(a.historia||"").trim(),video:String(a.video||"").trim(),fotos:(a.fotos||[]).map(r=>typeof r=="string"?{img:r,pie:""}:{img:r&&(r.imagen||r.img)||"",pie:r&&r.pie||""}).filter(r=>r.img),fecha:/^\d{4}-\d{2}-\d{2}/.test(String(a.fecha||""))?String(a.fecha).slice(0,10):"",presave:a.presave||"",fragmentos:(a.fragmentos||[]).map(r=>typeof r=="string"?r:r&&(r.archivo||r.file)).filter(Boolean),format:(a.format||"SINGLE").toUpperCase(),genre:(a.genre||"\u2014").toUpperCase().trim(),cover:a.cover||"",soundcloud:a.soundcloud||"",audio:a.audio?"/"+String(typeof a.audio=="string"?a.audio:a.audio.archivo||a.audio.file||"").replace(/^\/+/,""):"",spotify:a.spotify||"",bandcamp:a.bandcamp||"",year:+a.year||a.year||"",credits:(a.credits||[]).map(r=>Array.isArray(r)?r:[r.rol||"",r.nombre||""]).filter(([r])=>r),tracks:(a.tracks||[]).map(r=>typeof r=="string"?r:r&&r.titulo||"").filter(Boolean),participantes:(a.participantes||[]).map(r=>Array.isArray(r)?r:[r&&r.artista||"",r&&r.rol||""]).map(([r,o])=>[String(r).trim().toUpperCase(),String(o||"").trim()]).filter(([r])=>r)})).sort((a,r)=>r.code.localeCompare(a.code,"es",{numeric:!0})),i.senal=(i.senal||[]).filter(a=>a&&a.mes&&a.anio).map(a=>({...a,mes:+a.mes,anio:+a.anio,temas:+a.temas||null,code:a.code||String(a.mes).padStart(2,"0")+"_"+String(a.anio).slice(-2),destacados:(a.destacados||[]).map(r=>Array.isArray(r)?r:[r.artista||"",r.tema||"",r.prod||""]).filter(([r])=>r)}));let s=a=>a.fecha&&new Date(a.fecha+"T00:00:00")>Date.now();return i.proximos=i.releases.filter(s).sort((a,r)=>a.fecha.localeCompare(r.fecha)),i.releases=i.releases.filter(a=>!s(a)),i})(),Ta=window.AU_DEPLOY===!0,nt=jt.releases,n_=["SINGLE","EP","REMIXES","\xC1LBUM","EDIT"],Di=n=>[...new Set(n)],rl=n=>n.artist.split(/\s+[×x]\s+/i).map(e=>e.trim()),tp=Object.keys(jt.artists||{}).length?new Set(Object.keys(jt.artists)):new Set(nt.flatMap(rl)),ol=n=>tp.has(n),Jc=n=>rl(n).filter(ol),Ea=n=>(n.participantes||[]).filter(([e])=>ol(e)),ba=n=>!n.edicion&&!Jc(n).length&&Ea(n).length>0,cl=n=>Di([...Jc(n),...Ea(n).map(([e])=>e)]),np=[...tp].filter(n=>nt.some(e=>cl(e).includes(n))),i_=nt.some(ba),s_=nt.some(n=>n.edicion),Br=[["art","Cat\xE1logo de artistas"],...i_?[["part","Participaciones"]]:[],...s_?[["ed","Ediciones del sello"]]:[]],ip=n=>ba(n)?"part":n.edicion?"ed":"art",Cs=new Set(Br.map(([n])=>n)),yi=new Set,Dn=new Set,ss=Di(nt.map(n=>n.genre)).sort(),Rs=[{k:"format",lbl:"FORMATO",ops:["TODOS",...n_.filter(n=>nt.some(e=>e.format===n))]},{k:"year",lbl:"A\xD1O",ops:["TODOS",...Di(nt.map(n=>n.year)).sort((n,e)=>e-n).map(String)]}],jc=(()=>{try{return localStorage.getItem("au-orden")||"recientes"}catch{return"recientes"}})(),Hc=n=>n.fecha?Date.parse(n.fecha):Date.UTC(+n.year||0,0,1),Lf={recientes:(n,e)=>Hc(e)-Hc(n)||e.code.localeCompare(n.code,"es",{numeric:!0}),antiguos:(n,e)=>Hc(n)-Hc(e)||n.code.localeCompare(e.code,"es",{numeric:!0}),az:(n,e)=>Kt(n).replace(/^[^\p{L}\p{N}]+/u,"").localeCompare(Kt(e).replace(/^[^\p{L}\p{N}]+/u,""),"es",{sensitivity:"base",numeric:!0})},ll=(n,e)=>(e==="tipo"||Cs.has(ip(n)))&&(e==="art"||!yi.size||cl(n).some(t=>yi.has(t)))&&(e==="gen"||!Dn.size||Dn.has(n.genre))&&Rs.every((t,i)=>Un[i]===0||String(n[t.k])===t.ops[Un[i]]),ul=()=>{Un.fill(0),yi.clear(),Dn.clear(),Br.forEach(([n])=>Cs.add(n))},Un=Rs.map(()=>0),qn="rejilla",zr=matchMedia("(min-width:821px) and (hover:hover) and (pointer:fine)");try{qn=localStorage.getItem("au-vista")||"rejilla"}catch{}var Vu=()=>qn==="mesa"&&!zr.matches?"rejilla":qn;de("nRefs").textContent=nt.length+" referencias";var me=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),a_=n=>!n||/POR DEFINIR/i.test(n)||/S\/T/.test(n),r_=[320,640,1280],Zu=(n,e)=>{let t=/^\/?(covers|senal)\/([^/?#\s,]+)$/.exec(n||"");return t?`/${t[1]}/v/${encodeURI(t[2])}-${e}.webp`:""},kr=(n,e)=>Zu(n,320)?` srcset="${r_.map(t=>me(Zu(n,t))+" "+t+"w").join(", ")}" sizes="${e}" onerror="this.onerror=null;this.removeAttribute('srcset');this.removeAttribute('sizes')"`:"",o_="(max-width:599px) 46vw, (max-width:820px) 31vw, 190px",ah="(max-width:599px) 92vw, (max-width:820px) 40vw, 480px",sp=(n,e,t=o_)=>n.cover?`<img class="${e}" src="${me(n.cover)}"${kr(n.cover,t)} alt="Portada de ${me(n.title)}" loading="lazy" decoding="async">`:`<div class="${e} sinp" role="img" aria-label="Sin portada todav\xEDa"><b>${n.code}</b><span>SIN PORTADA</span></div>`,Kt=n=>/S\/T/.test(n.title)?"Sin t\xEDtulo":n.title,ap=n=>Ea(n).map(([e,t])=>`<span class="part"><i aria-hidden="true"></i><span>${me(e)}${t?" \xB7 "+me(t):""}</span></span>`).join("");function rp(){return nt.filter(n=>ll(n,null))}var op=()=>{};function xi(){if(document.querySelectorAll(".selector").forEach(h_),document.querySelectorAll(".llave").forEach(n=>{let e=n.dataset.t?Cs.has(n.dataset.t):yi.has(n.dataset.a);n.setAttribute("aria-pressed",e);let t=nt.filter(i=>ll(i,n.dataset.t?"tipo":"art")&&(n.dataset.t?ip(i)===n.dataset.t:cl(i).includes(n.dataset.a))).length;n.querySelector(".n").textContent=t,n.classList.toggle("cero",!t)}),document.querySelectorAll(".orden button").forEach(n=>n.setAttribute("aria-pressed",n.dataset.o===jc)),de("nFil")){let n=(Cs.size<Br.length?1:0)+yi.size+Dn.size+Un.filter(Boolean).length;de("nFil").textContent=n?"\xB7 "+n:"",de("bLimpia").hidden=!n}document.querySelectorAll(".riel").forEach(n=>{let e=+n.dataset.i,t=n.querySelectorAll("button");t.forEach((s,a)=>s.setAttribute("aria-pressed",a===Un[e]));let i=t[Un[e]];n.querySelector(".cursor").style.left=i.offsetLeft+i.offsetWidth/2+"px"}),cp()}function cp(){let n=Dn.size?ss.indexOf([...Dn][0])+1:0;op([...["format","year"].map(e=>{let t=Rs.findIndex(i=>i.k===e);return Rs[t].ops.length>1?Un[t]/(Rs[t].ops.length-1):0}),ss.length?n/ss.length:0])}var lp=n=>`<a class="ref" href="#${n.code}" data-c="${n.code}">${sp(n,"portada")}${ba(n)?'<span class="marca">PARTICIPACI\xD3N</span>':n.edicion?'<span class="marca sello">EDICI\xD3N DEL SELLO</span>':""}
      <span class="c">${n.code} \xB7 ${me(n.format)} \xB7 ${n.year}</span><span class="a">${me(n.artist)}</span><span class="t">${me(Kt(n))}</span>${ap(n)}</a>`,c_=n=>`<a class="fila" href="#${n.code}" data-c="${n.code}"><span class="x">${n.code}</span><span class="a">${me(n.artist)}${ba(n)?"<small>PART.</small>":n.edicion?"<small>SELLO</small>":""}</span><span class="t">${me(Kt(n))}</span><span class="f x">${me(n.format)}</span><span class="g x">${me(n.genre)}</span><span class="y x">${n.year}</span><span aria-hidden="true">\u2192</span></a>`,rs=matchMedia("(prefers-reduced-motion: reduce)"),Kc=null;function _i(){up(),os&&os.mide()}function up(){let n=rp(),e=new Set(n.map(u=>u.code)),t=de("resultados");de("conteo").textContent=`Mostrando ${n.length} de ${nt.length}`;let i=new Map([...nt].sort(Lf[jc]||Lf.recientes).map((u,d)=>[u.code,d])),s=()=>t.querySelectorAll("[data-c]").forEach(u=>{u.style.order=i.get(u.dataset.c)}),a=qn!=="lista"?".ref":".fila[data-c]";if(Kc!==qn||!t.querySelector(a)){t.innerHTML=(qn!=="lista"?`<div class="rejilla">${nt.map(lp).join("")}</div>`:`<div class="lista"><div class="fila cab" aria-hidden="true"><span>C\xD3DIGO</span><span>ARTISTA</span><span class="t">T\xCDTULO</span><span class="f">FORMATO</span><span class="g">G\xC9NERO</span><span class="y">A\xD1O</span><span></span></div>${nt.map(c_).join("")}</div>`)+'<div class="vacio" id="vacioC" hidden>Ninguna referencia con estos filtros.<button class="tecla" id="bLimpiar">Quitar filtros</button></div>',de("bLimpiar").onclick=()=>{ul(),xi(),_i()},Kc=qn,t.querySelectorAll(a).forEach(u=>{u.hidden=!e.has(u.dataset.c)}),s(),de("vacioC").hidden=n.length>0;return}let r=[...t.querySelectorAll(a)];t.querySelectorAll(".fantasma").forEach(u=>u.remove()),r.forEach(u=>u.getAnimations().forEach(d=>d.cancel()));let o=t.getBoundingClientRect(),c=new Map;if(r.forEach(u=>{u.hidden||c.set(u,u.getBoundingClientRect())}),r.forEach(u=>{let d=!e.has(u.dataset.c);if(d&&!u.hidden&&!rs.matches){let h=c.get(u),f=u.cloneNode(!0);f.classList.add("fantasma"),f.removeAttribute("href"),f.setAttribute("aria-hidden","true"),Object.assign(f.style,{position:"absolute",left:h.left-o.left+"px",top:h.top-o.top+"px",width:h.width+"px",height:h.height+"px",margin:0,pointerEvents:"none"}),t.appendChild(f),f.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(.9)"}],{duration:240,easing:"cubic-bezier(.4,0,.2,1)"}).onfinish=()=>f.remove()}u.hidden=d}),s(),de("vacioC").hidden=n.length>0,rs.matches)return;let l=0;r.forEach(u=>{if(u.hidden)return;let d=c.get(u),h=u.getBoundingClientRect();if(d){let f=d.left-h.left,g=d.top-h.top;(f||g)&&u.animate([{transform:`translate(${f}px,${g}px)`},{transform:"none"}],{duration:420,easing:"cubic-bezier(.2,.7,.2,1)"})}else u.animate([{opacity:0,transform:"translateY(12px) scale(.95)"},{opacity:1,transform:"none"}],{duration:380,delay:Math.min(l++,10)*28,easing:"cubic-bezier(.2,.7,.2,1)",fill:"backwards"})})}var l_=n=>nt.filter(e=>ll(e,"gen")&&e.genre===n).length,u_=()=>`<div class="fader"><span class="lbl">G\xC9NERO</span><div class="selector">
  <button class="visor" id="visG" aria-haspopup="listbox" aria-expanded="false"><span class="v"></span><span class="nn"></span><span class="tri" aria-hidden="true"></span></button>
  <div class="desp" hidden><input id="busG" type="search" placeholder="Buscar g\xE9nero\u2026" autocomplete="off" aria-label="Buscar g\xE9nero"><ul role="listbox" aria-multiselectable="true" aria-label="G\xE9neros"></ul></div></div></div>`;function h_(n){let e=[...Dn];n.querySelector(".v").textContent=e.length?e.length<=2?e.join(" + "):e.length+" G\xC9NEROS":"TODOS",n.querySelector(".nn").textContent=e.length?rp().length+" ref.":ss.length+" en total"}function d_(n){let e=n.querySelector(".visor"),t=n.querySelector(".desp"),i=n.querySelector("input"),s=n.querySelector("ul"),a=0,r=[],o=()=>{let u=i.value.trim().toLowerCase();r=[null,...ss].filter(d=>d===null?!u:d.toLowerCase().includes(u)),a=Math.min(a,Math.max(0,r.length-1)),s.innerHTML=r.length?r.map((d,h)=>{let f=d===null?!Dn.size:Dn.has(d),g=d===null?nt.filter(y=>ll(y,"gen")).length:l_(d);return`<li role="option" data-g="${d===null?"":me(d)}" aria-selected="${f}" class="${g||f?"":"cero"}${h===a?" act":""}"><span><i class="caja" aria-hidden="true"></i>${d===null?"TODOS":me(d)}</span><span>${g}</span></li>`}).join(""):'<li class="nada">Sin resultados</li>',s.querySelector(".act")?.scrollIntoView({block:"nearest"})},c=u=>{t.hidden=!u,e.setAttribute("aria-expanded",u),u&&(i.value="",a=0,o(),i.focus({preventScroll:!0}),requestAnimationFrame(()=>t.scrollIntoView({block:"nearest",behavior:rs.matches?"auto":"smooth"})))},l=u=>{u===null?Dn.clear():Dn.has(u)?Dn.delete(u):Dn.add(u),o(),xi(),_i()};e.onclick=()=>c(t.hidden),i.oninput=()=>{a=0,o()},i.onkeydown=u=>{u.key==="ArrowDown"||u.key==="ArrowUp"?(u.preventDefault(),a=Math.max(0,Math.min(r.length-1,a+(u.key==="ArrowDown"?1:-1))),o()):u.key==="Enter"?(u.preventDefault(),a<r.length&&l(r[a])):u.key==="Escape"&&(c(!1),e.focus())},s.onclick=u=>{let d=u.target.closest("li[data-g]");d&&l(d.dataset.g||null)},n._cierra&&document.removeEventListener("pointerdown",n._cierra),n._cierra=u=>{if(!n.isConnected)return document.removeEventListener("pointerdown",n._cierra);!t.hidden&&!n.contains(u.target)&&c(!1)},document.addEventListener("pointerdown",n._cierra)}var f_=(n,e)=>n.length<=e?n:n.split(" ")[0].length<=e?n.split(" ")[0]:n.slice(0,e-1)+".";function p_(){let n=de("panel");n.innerHTML=`<header class="panel-cab"><div><h2>CAT\xC1LOGO</h2><div class="sub">${nt.length} referencias \xB7 ${nt[nt.length-1].code}\u2013${nt[0].code} \xB7 Broadcasted from Elda</div></div>
    <div class="vista" role="group" aria-label="Vista"><button class="tecla" id="vMes" aria-pressed="${Vu()==="mesa"}">Mesa</button><button class="tecla" id="vRej" aria-pressed="${Vu()==="rejilla"}">Rejilla</button><button class="tecla" id="vLis" aria-pressed="${Vu()==="lista"}">Lista</button></div></header>
    <div class="panel-cuerpo"><div class="filtrosM"><button class="tecla" type="button" id="bFil" aria-expanded="false" aria-controls="faders">Filtros<b id="nFil"></b><i aria-hidden="true"></i></button><button class="tecla" type="button" id="bLimpia" hidden>Limpiar</button></div><div class="faders" id="faders" aria-label="Filtros \xB7 corredor AU-04">
      ${Br.length>1?`<div class="fader"><span class="lbl">TIPO</span><div class="llaves" role="group" aria-label="Tipo">${Br.map(([t,i])=>`<button class="llave" type="button" data-t="${t}" aria-pressed="true"><i aria-hidden="true"></i>${i}<span class="n"></span></button>`).join("")}</div></div>`:""}
      <div class="fader"><span class="lbl">ARTISTA</span><div class="llaves" role="group" aria-label="Artistas (varios a la vez; ninguno = todos)">${np.map(t=>`<button class="llave" type="button" data-a="${me(t)}" aria-pressed="false"><i aria-hidden="true"></i>${me(t)}<span class="n"></span></button>`).join("")}</div></div>
      ${Rs.map((t,i)=>`<div class="fader"><span class="lbl">${t.lbl}</span>
      <div class="riel" data-i="${i}" role="group" aria-label="${t.lbl}">${t.ops.map((s,a)=>`<button id="f${i}_${a}" aria-pressed="false" aria-label="${s}"><span class="l">${s}</span><span class="s" aria-hidden="true">${f_(s,Math.max(5,Math.floor(60/t.ops.length)))}</span></button>`).join("")}<span class="cursor" aria-hidden="true"></span></div></div>`).join("")}
      ${ss.length>1?u_():""}</div>
      <p class="conteo"><span id="conteo"></span><span class="orden" role="group" aria-label="Orden">ORDEN<button type="button" data-o="recientes">Recientes</button><button type="button" data-o="antiguos">Antiguos</button><button type="button" data-o="az">A\u2013Z</button></span></p><div id="resultados"></div></div>`,n.querySelectorAll(".selector").forEach(d_),de("bFil").onclick=()=>{let t=n.querySelector(".panel-cuerpo"),i=!t.classList.contains("fil-abiertos");t.classList.toggle("fil-abiertos",i),de("bFil").setAttribute("aria-expanded",i),xi()},de("bLimpia").onclick=()=>{ul(),xi(),_i()},n.querySelectorAll(".llave").forEach(t=>t.onclick=()=>{if(t.dataset.t){let i=t.dataset.t;Cs.has(i)?Cs.delete(i):Cs.add(i)}else{let i=t.dataset.a;yi.has(i)?yi.delete(i):yi.add(i)}xi(),_i()}),n.querySelectorAll(".orden button").forEach(t=>t.onclick=()=>{jc=t.dataset.o;try{localStorage.setItem("au-orden",jc)}catch{}xi(),_i()}),n.querySelectorAll(".riel").forEach(t=>{let i=+t.dataset.i;t.querySelectorAll("button").forEach((a,r)=>a.onclick=()=>{t.dataset.arr||(Un[i]=r,xi(),_i())});let s=t.querySelector(".cursor");t.addEventListener("pointerdown",a=>{if(a.pointerType==="mouse"&&a.button!==0)return;a.preventDefault();let r=[...t.querySelectorAll("button")],o=r.map(p=>p.offsetLeft+p.offsetWidth/2),c=a.clientX,l=t.getBoundingClientRect(),u=p=>Math.max(o[0],Math.min(o[o.length-1],p.clientX-l.left)),d=p=>o.reduce((m,A,S)=>Math.abs(A-p)<Math.abs(o[m]-p)?S:m,0),h=p=>{p!==Un[i]&&(Un[i]=p,r.forEach((m,A)=>m.setAttribute("aria-pressed",A===p)),_i(),cp())},f=!1;try{t.setPointerCapture(a.pointerId)}catch{}let g=p=>{if(!f&&Math.abs(p.clientX-c)<4)return;f||(f=!0,t.classList.add("arrastra"));let m=u(p);s.style.left=m+"px",h(d(m))},y=p=>{t.removeEventListener("pointermove",g),t.removeEventListener("pointerup",y),t.removeEventListener("pointercancel",y),t.classList.remove("arrastra"),!f&&p.type==="pointerup"&&h(d(u(p))),t.dataset.arr="1",setTimeout(()=>delete t.dataset.arr,0),xi()};t.addEventListener("pointermove",g),t.addEventListener("pointerup",y),t.addEventListener("pointercancel",y)}),t.addEventListener("keydown",a=>{let r=a.key==="ArrowRight"?1:a.key==="ArrowLeft"?-1:0;r&&(a.preventDefault(),Un[i]=Math.max(0,Math.min(Rs[i].ops.length-1,Un[i]+r)),xi(),_i(),t.querySelectorAll("button")[Un[i]].focus())})}),Kc=null;let e=t=>{let i=!!os;qn=t;try{localStorage.setItem("au-vista",t)}catch{}de("vMes").setAttribute("aria-pressed",t==="mesa"),de("vRej").setAttribute("aria-pressed",t==="rejilla"),de("vLis").setAttribute("aria-pressed",t==="lista"),i||t==="mesa"&&zr.matches?el():_i()};de("vMes").onclick=()=>e("mesa"),de("vRej").onclick=()=>e("rejilla"),de("vLis").onclick=()=>e("lista"),_i(),requestAnimationFrame(xi)}var Nf=null,Nr=!1;function hp(){return Nf||(Nf=new Promise((n,e)=>{let t=document.createElement("script");t.src="https://w.soundcloud.com/player/api.js",t.onload=()=>n(window.SC),t.onerror=e,document.head.appendChild(t)}))}var m_=/[?&]diag\b/.test(location.search),Ir=[],_n=n=>{let e=new Date().toTimeString().slice(3,8);if(Ir.push(e+" "+n),Ir.length>40&&Ir.shift(),!m_)return;let t=de("diag00");t||(t=document.createElement("pre"),t.id="diag00",t.style.cssText="position:fixed;left:6px;right:6px;top:6px;z-index:99;max-height:38vh;overflow:auto;margin:0;padding:6px 8px;background:rgba(14,15,18,.88);color:#cfe0ff;font:10px/1.35 monospace;white-space:pre-wrap;pointer-events:none",document.body.appendChild(t)),t.textContent=Ir.join(`
`),t.scrollTop=1e6};window.__diag00=Ir;var ku=75,Cr=7,g_=n=>{let e=String(n||"").trim().match(/^(\d+):(\d{1,2})$/);return e?+e[1]*60+ +e[2]:null};addEventListener("resize",()=>{de("tira00").classList.contains("on")&&Vr.muestraTira(!0)});var $c={cebado:[!1,!1],cola:nt.filter(n=>n.soundcloud),w:[],vol:[0,0],iv:[],act:-1,prep:null,ahora:null,timers:[],ult:[],pedido:null,id:0,vivo:!1,bloqueo:!1,fallo:!1,SC:null,sonando:!1,tira:/iP(hone|ad|od)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,luego(n,e){this.timers.push(kt.espera(n,e*1e3))},async monta(){if(this.w.length===(this.tira?1:2))return!0;try{_n("monta \xB7 modo "+(this.tira?"tira":"oculto")+" \xB7 "+(navigator.userAgent.match(/(CriOS|GSA|FxiOS|EdgiOS|Version)\/[\d.]+/)||["?"])[0]);let n=this.SC=await Promise.race([hp(),new Promise((t,i)=>kt.espera(()=>i(new Error("sin respuesta")),9e3))]);_n("api de soundcloud cargada");let e=this.tira?1:2;for(let t=this.w.length;t<e;t++){let i=document.createElement("iframe");i.allow="autoplay",i.title="Canal 00 \xB7 reproductor de SoundCloud",this.tira?de("tira00f").appendChild(i):(i.className="sc00",i.tabIndex=-1,i.setAttribute("aria-hidden","true"),document.body.appendChild(i)),i.src="https://w.soundcloud.com/player/?url="+encodeURIComponent(this.cola[0].soundcloud)+"&color=%230e0f12&auto_play=false&single_active=false&visual=false&show_artwork=false&buying=false&sharing=false&download=false&show_comments=false&show_user=false&hide_related=true&show_teaser=false";let s=n.Widget(i);await new Promise(a=>{let r=!1;s.bind(n.Widget.Events.READY,()=>{r=!0,_n("reproductor listo"),a()}),kt.espera(()=>{r||_n("reproductor: sin READY en 9 s"),a()},9e3)}),s.setVolume(0),this.w.push(s),s.bind(n.Widget.Events.PLAY,()=>_n("aviso PLAY")),s.bind(n.Widget.Events.PLAY_PROGRESS,a=>this.progreso(t,a&&a.currentPosition)),s.bind(n.Widget.Events.PAUSE,()=>{_n("aviso PAUSE"),this.pausado(t)}),s.bind(n.Widget.Events.FINISH,()=>{_n("aviso FINISH"),!this.tira&&this.vivo&&t===this.act&&this.ahora&&this.cruza(this.id)})}return!0}catch(n){return _n("fallo al montar: "+(n&&n.message)),!1}},progreso(n,e){if(!this.tira||n!==0)return;let t=performance.now();if(this.sonando){this.vistoProg=t;return}if(!this.ahora||!this.vivo||typeof e!="number")return;let i=this.prog;this.prog={ms:e,t},i&&e>i.ms+150&&t-i.t<3e3&&(_n("suena de verdad \xB7 "+Math.round(e/1e3)+" s"),this.alSonar(0))},pausado(n){!this.tira||n!==0||!this.sonando||!this.ahora||!this.vivo||(this.sonando=!1,this.bloqueo=!0,this.prog=null,this.timers.forEach(kt.anula),this.timers=[],this.rotuloTira("CANAL 00 \xB7 TOCA \u25B6 PARA SEGUIR"),this.muestraTira(!0),Ot())},siguiente(){if(this.pedido){let t=this.pedido;return this.pedido=null,t}let n=this.cola.filter(t=>!this.ult.includes(t.code)),e=(n.length?n:this.cola)[Math.floor(Math.random()*(n.length||this.cola.length))];return this.ult=[e.code,...this.ult].slice(0,Math.max(0,Math.min(2,this.cola.length-1))),e},prepara(n,e){let t=this.w[n];return new Promise(i=>{let s=!1,a=r=>{s||(s=!0,i(r))};kt.espera(()=>{s||_n("preparar "+e.code+": sin respuesta en 12 s"),a(null)},12e3),t.setVolume(0),t.load(e.soundcloud,{auto_play:!1,single_active:!1,visual:!1,show_artwork:!1,buying:!1,sharing:!1,download:!1,show_comments:!1,show_user:!1,hide_related:!0,callback:()=>t.getSounds(r=>{let o=r&&r.length||1,c=Math.floor(Math.random()*o),l=()=>t.getCurrentSound(u=>t.getDuration(d=>{let h=(d||0)/1e3,f=g_(e.fragmento);(f==null||f>h-30)&&(f=h*.42),f=Math.max(0,Math.min(f,h-ku-Cr)),_n("preparado "+e.code+" \xB7 "+Math.round(h)+" s, desde "+Math.round(f)),a({r:e,k:n,ini:f,dur:h,tema:u&&u.title||Kt(e),url:u&&u.permalink_url||e.soundcloud})}));o>1?(t.setVolume(0),t.skip(c),kt.espera(()=>{t.pause(),l()},700)):l()})})})},funde(n,e,t,i){kt.anula(this.iv[n]);let s=this.w[n],a=this.vol[n],r=performance.now();this.iv[n]=kt.cada(()=>{let o=Math.min(1,(performance.now()-r)/(t*1e3)),c=e>a?a+(e-a)*Math.sin(o*Math.PI/2):a*Math.cos(o*Math.PI/2);this.vol[n]=c,s.setVolume(Math.round(c)),o>=1&&(kt.anula(this.iv[n]),i&&i())},80)},suena(n,e){if(e!==this.id)return;if(this.tira){let i=this.w[0];this.act=0,this.ahora=n,this.sonando=!1,this.prog=null,this.fallo=!1,this.vol[0]=100,i.setVolume(100),_n("play (por c\xF3digo)"),i.seekTo(n.ini*1e3),i.play(),Ot(),de("tira00").classList.contains("on")&&this.rotuloTira("CANAL 00 \xB7 TOCA \u25B6 PARA SINTONIZAR"),this.luego(()=>{e===this.id&&this.ahora===n&&!this.sonando&&(this.bloqueo=!0,this.rotuloTira("CANAL 00 \xB7 TOCA \u25B6 PARA SINTONIZAR"),this.muestraTira(!0),Ot())},1.5);return}let t=this.w[n.k];this.act=n.k,this.ahora=n,this.bloqueo=!1,this.fallo=!1,t.setVolume(0),t.seekTo(n.ini*1e3),t.play(),kt.espera(()=>t.seekTo(n.ini*1e3),400),this.funde(n.k,100,Cr),Ot(),this.luego(()=>t.isPaused(i=>{i&&e===this.id&&this.ahora===n&&this.pasaATira()}),5),this.cebado[n.k]=!0,this.luego(async()=>{let i=await this.prepara(1-n.k,this.siguiente());e===this.id&&(this.prep=i,this.ceba(i))},this.cebado[1-n.k]?12:4),this.luego(()=>{this.ahora===n&&this.cruza(e)},Math.max(20,Math.min(ku,n.dur-n.ini)-Cr))},ceba(n){if(!n||this.tira||this.cebado[n.k]||document.hidden||this.act===n.k||!this.vivo)return;let e=n.k,t=this.w[e];this.cebado[e]=!0,t.setVolume(0),this.vol[e]=0,t.play(),kt.espera(()=>{this.act!==e&&(t.pause(),t.seekTo(n.ini*1e3))},900)},alSonar(n){if(!this.tira||n!==0||!this.ahora||this.sonando||!this.vivo)return;let e=this.ahora,t=this.id,i=this.w[0];this.sonando=!0,this.bloqueo=!1,this.muestraTira(!1),Ot(),i.getPosition(a=>{a/1e3<e.ini-3&&i.seekTo(e.ini*1e3)}),this.luego(()=>this.cruzaTira(t),Math.max(20,Math.min(ku,e.dur-e.ini))),this.vistoProg=performance.now();let s=()=>{t!==this.id||this.ahora!==e||!this.sonando||(performance.now()-this.vistoProg>4e3?(_n("sin progreso 4 s \u2192 tira"),this.pausado(0)):this.luego(s,1))};this.luego(s,1)},async cruzaTira(n){if(n!==this.id)return;Be.estatica(3.2,.035),this.w[0].pause(),this.ahora=null,Ot();let e=await this.prepara(0,this.siguiente());n===this.id&&(e?this.suena(e,n):(this.fallo=!0,Ot()))},pasaATira(){this.tira||(this.tira=!0,this.w=[],this.act=-1,document.querySelectorAll("iframe.sc00").forEach(n=>n.remove()),this.empieza(this.ahora&&this.ahora.r))},rotuloTira(n){let e=de("tira00k");e&&(e.textContent=n)},muestraTira(n){let e=de("tira00");if(e){if(n){let t=document.querySelector(".pletina"),i=t.getBoundingClientRect();e.style.bottom=`calc(${getComputedStyle(t).bottom} + ${t.offsetHeight+8}px)`,e.style.left=i.left+"px",e.style.width=i.width+"px"}e.classList.contains("on")!==n&&_n(n?"tira a la vista":"tira recogida"),e.classList.toggle("on",n),e.setAttribute("aria-hidden",!n)}},async cruza(n){if(n!==this.id||!this.ahora||this.cruzandoDe===this.ahora)return;this.cruzandoDe=this.ahora;let e=this.act,t=this.prep;if(this.prep=null,Be.estatica(Cr*.9,.022),this.funde(e,0,Cr,()=>this.w[e].pause()),t)this.suena(t,n);else{let i=await this.prepara(1-e,this.siguiente());i?this.suena(i,n):n===this.id&&(this.fallo=!0,Ot())}},async empieza(n){n&&(this.pedido=n);let e=++this.id;if(this.timers.forEach(kt.anula),this.timers=[],this.prep=null,this.vivo=!0,this.ahora=null,this.fallo=!1,this.bloqueo=!1,this.sonando=!1,Ot(),this.tira&&this.w[0]&&this.w[0].pause(),!this.cola.length)return;if(_n("canal 00 \xB7 empieza"),this.tira&&!this.w.length&&(this.rotuloTira("CANAL 00 \xB7 CARGANDO SOUNDCLOUD\u2026"),this.muestraTira(!0)),!await this.monta()){e===this.id&&(this.fallo=!0,this.muestraTira(!1),Ot());return}if(e!==this.id)return;let t=this.tira?0:this.act>=0?1-this.act:0;if(!this.tira&&this.act>=0){let s=this.act;this.funde(s,0,2.5,()=>this.w[s].pause())}let i=await this.prepara(t,this.siguiente());e===this.id&&(i?this.suena(i,e):(this.fallo=!0,this.muestraTira(!1),Ot()))},para(n=2.5){this.id++,this.vivo=!1,this.timers.forEach(kt.anula),this.timers=[],this.prep=null,this.ahora=null,this.act=-1,this.sonando=!1,this.muestraTira(!1),this.w.forEach((e,t)=>this.funde(t,0,n,()=>e.pause()))},nivel(){if(!this.ahora||this.bloqueo||this.tira&&!this.sonando)return 0;let n=performance.now()/1e3;return Math.max(...this.vol)/100*(.13+.035*Math.sin(n*7.3)+.03*Math.sin(n*2.1)+.035*Math.random())},rotulo(){let n=this.ahora;if(!this.cola.length)return"Todav\xEDa no hay lanzamientos con SoundCloud en el panel";if(n){let e=n.r.spotify||n.url,t=`<a href="${me(e)}" target="_blank" rel="noopener">entero \u2197</a>`;return this.bloqueo?"Toca \u25B6 en la tira de arriba":`<a href="#${n.r.code}">${me(n.r.artist)} \u2014 ${me(n.tema)}</a> \xB7 `+t}return this.fallo?"Sin se\xF1al de SoundCloud \xB7 prueba en un rato u otro canal":Be.on?"Sintonizando el cat\xE1logo\u2026":`Fragmentos del cat\xE1logo \xB7 ${Xn(this.cola.length,"lanzamiento","lanzamientos")}`}},hl=nt.some(n=>n.audio),Rr=3,v_=.8,x_="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",__={cola:nt.filter(n=>n.audio),el:[],g:[],act:-1,ahora:null,id:0,vivo:!1,fallo:!1,bloqueo:!1,tira:!1,pedido:null,ult:[],timers:[],luego(n,e){this.timers.push(kt.espera(n,e*1e3))},monta(){if(this.el.length||!Be.ctx)return;let n=Be.ctx;for(let e=0;e<2;e++){let t=new Audio;t.preload="auto",t.setAttribute("playsinline","");let i=n.createGain();i.gain.value=0;try{n.createMediaElementSource(t).connect(i),i.connect(Be.limite)}catch{}this.el.push(t),this.g.push(i)}},rampa(n,e,t){let i=this.g[n].gain,s=Be.ctx.currentTime;i.cancelScheduledValues(s),i.setValueAtTime(i.value,s),i.linearRampToValueAtTime(e,s+t)},siguiente(){if(this.pedido&&this.pedido.audio){let t=this.pedido;return this.pedido=null,t}this.pedido=null;let n=this.cola.filter(t=>!this.ult.includes(t.code)),e=(n.length?n:this.cola)[Math.floor(Math.random()*(n.length||this.cola.length))];return this.ult=[e.code,...this.ult].slice(0,Math.max(0,Math.min(2,this.cola.length-1))),e},suena(n,e){if(e!==this.id)return;let t=this.act,i=t===0?1:0,s=this.el[i];s.onended=s.ontimeupdate=null,s.dataset.ok=1,s.src=n.audio,s.currentTime=0;let a=()=>{e!==this.id||this.act!==i||(s.onended=s.ontimeupdate=null,Be.estatica(Rr*.9,.022),this.suena(this.siguiente(),e))};s.onended=a,s.ontimeupdate=()=>{s.duration&&s.duration-s.currentTime<Rr+.3&&a()},this.act=i,this.ahora={r:n,tema:Kt(n)},this.fallo=!1,this.bloqueo=!1,Ot();let r=s.play();if(r&&r.catch(()=>{e===this.id&&this.act===i&&(this.bloqueo=!0,Ot())}),this.rampa(i,v_,t<0?1.5:Rr),t>=0){this.rampa(t,0,Rr);let o=this.el[t];this.luego(()=>{this.act!==t&&o.pause()},Rr+.2)}s.onerror=()=>{e===this.id&&this.act===i&&(this.fallo=!0,Ot(),this.luego(()=>a(),2))}},empieza(n){n&&(this.pedido=n);let e=++this.id;if(this.timers.forEach(kt.anula),this.timers=[],this.vivo=!0,this.fallo=!1,!this.cola.length||!Be.ctx)return;this.monta();let t=this.el[this.act===0?0:1];if(!t.dataset.ok){t.dataset.ok=1,t.src=x_;let i=t.play();i&&i.then(()=>{this.el[this.act]!==t&&t.pause()}).catch(()=>{})}this.suena(this.siguiente(),e)},para(n=2.5){this.id++,this.vivo=!1,this.timers.forEach(kt.anula),this.timers=[],this.ahora=null,this.act=-1,this.el.length&&this.el.forEach((e,t)=>{e.onended=e.ontimeupdate=e.onerror=null,this.rampa(t,0,n),kt.espera(()=>{this.vivo||e.pause()},n*1e3+200)})},nivel(){return 0},muestraTira(){},rotulo(){let n=this.ahora;if(n){if(this.bloqueo)return"Toca \u25B6 para sintonizar";if(this.fallo)return"Sin se\xF1al \xB7 pasando al siguiente";let e=n.r.spotify||n.r.soundcloud||n.r.bandcamp;return`<a href="#${n.r.code}">${me(n.r.artist)} \u2014 ${me(n.tema)}</a>`+(e?` \xB7 <a href="${me(e)}" target="_blank" rel="noopener">entero \u2197</a>`:"")}return Be.on?"Sintonizando el cat\xE1logo\u2026":`Fragmentos del cat\xE1logo \xB7 ${Xn(this.cola.length,"lanzamiento","lanzamientos")}`}},Vr=Be.cat=hl?__:$c;document.addEventListener("visibilitychange",()=>{!document.hidden&&!hl&&$c.prep&&$c.ceba($c.prep)});if(hl&&as){as=!1,nh=0;let n=de("canal0");n&&(n.disabled=!1,n.style.visibility="",n.removeAttribute("aria-hidden"))}async function y_(n){ri||await sl(!1),Vr.pedido=n,Be.canal===-1&&Be.on?Vr.empieza():(cs(-1),Be.on||(await Be.encender(),Ai()))}function A_(n){let e=n.querySelector("iframe.sc");e&&hp().then(t=>{let i=t.Widget(e);i.bind(t.Widget.Events.PLAY,()=>{Be.on&&(Be.apagar(),Nr=!0,Ai())});let s=()=>{Nr&&(Nr=!1,Be.encender().then(Ai))};i.bind(t.Widget.Events.PAUSE,s),i.bind(t.Widget.Events.FINISH,s)}).catch(()=>{})}function M_(n){let e=nt.indexOf(n),t=nt[e+1],i=nt[e-1],s=de("panel"),a=[["SoundCloud",n.soundcloud],["Spotify",n.spotify],["Bandcamp",n.bandcamp]];setTimeout(()=>s.querySelectorAll("[data-art]").forEach(o=>o.addEventListener("click",()=>{ul(),yi.add(o.dataset.art)}))),s.innerHTML=`<header class="panel-cab"><div><h2>${n.code}</h2><div class="sub">${ba(n)?"Participaci\xF3n":n.edicion?"Edici\xF3n del sello":"Ficha de lanzamiento"} \xB7 ${me(n.format)} \xB7 ${me(n.genre)} \xB7 ${n.year}</div></div>
    <a class="tecla" href="#catalogo">\u2190 Cat\xE1logo</a></header>
    <div class="panel-cuerpo"><div class="fl">${sp(n,"portada",ah)}
      <div class="datos"><div class="cod">${n.code} \xB7 ${me(n.format)} \xB7 ${n.fecha?n.fecha.split("-").reverse().join("."):n.year} \xB7 ${me(n.genre)}</div><h3>${me(n.artist)}</h3><p class="tit">${me(Kt(n))}</p>
        ${Ea(n).length?`<div class="aqui"><span class="k">${ba(n)?"AURALITY EN ESTE LANZAMIENTO":"TAMBI\xC9N DE AURALITY"}</span>${ap(n)}</div>`:""}
        <div class="enlaces mas">${cl(n).map(o=>`<a class="tecla oscura" href="#a-${rh(o)}">${me(o)} \xB7 perfil</a>`).join("")}</div>
        <div class="enlaces">${(hl?n.audio:n.soundcloud)&&!as?'<button class="tecla oscura" type="button" id="bRadio00">Escuchar en la radio \xB7 canal 00</button>':""}${a.map(([o,c])=>c?`<a class="tecla" href="${me(c)}" target="_blank" rel="noopener">${o} \u2197</a>`:`<span class="tecla" aria-disabled="true">${o} \xB7 sin enlace</span>`).join("")}<button class="tecla oscura compartir" type="button" id="bComp">Compartir</button></div>
        ${Ta&&n.soundcloud?`<iframe class="sc" title="Reproductor de SoundCloud: ${me(n.title)}" allow="autoplay" loading="lazy"
          src="https://w.soundcloud.com/player/?url=${encodeURIComponent(n.soundcloud)}&color=%230e0f12&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>`:""}
        <table class="creditos"><tbody>${n.credits.map(([o,c])=>`<tr><th scope="row">${me(o)}</th>${a_(c)?'<td class="pend">Por definir</td>':`<td>${me(c)}</td>`}</tr>`).join("")}</tbody></table>
        ${n.tracks&&n.tracks.length?`<div class="escala"><span class="k">TRACKLIST</span>${n.tracks.map((o,c)=>`<p>${String(c+1).padStart(2,"0")} \xB7 ${me(o)}</p>`).join("")}</div>`:n.format==="SINGLE"?"":'<div class="escala"><span class="k">TRACKLIST</span><p>Tracklist por publicar.</p></div>'}
      </div></div>
      ${b_(n)}
      <nav class="pasos" aria-label="Otras referencias">${t?`<a class="tecla" href="#${t.code}">\u2190 ${t.code}</a>`:"<span></span>"}${i?`<a class="tecla" href="#${i.code}">${i.code} \u2192</a>`:"<span></span>"}</nav></div>`,de("bRadio00")&&(de("bRadio00").onclick=()=>y_(n)),de("bComp").onclick=async()=>{let o=location.origin+"/"+n.code,c=`${n.artist} \u2014 ${Kt(n)} \xB7 aurality`;try{navigator.share?await navigator.share({title:c,url:o}):(await navigator.clipboard.writeText(o),de("bComp").textContent="Enlace copiado")}catch{}};let r=de("bVideo");r&&(r.onclick=()=>{Be.on&&(Be.apagar(),Ai());let o=document.createElement("iframe");o.className="vid",o.src=r.dataset.src,o.title="V\xEDdeo de "+n.code,o.allow="autoplay; fullscreen; picture-in-picture",o.allowFullscreen=!0,r.replaceWith(o)}),s.querySelectorAll(".foto").forEach(o=>o.onclick=()=>T_(n.fotos,+o.dataset.i))}var S_=n=>{if(!n)return null;let e=n.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([\w-]{11})/);return e?{src:`https://www.youtube-nocookie.com/embed/${e[1]}?autoplay=1&rel=0`,img:`https://i.ytimg.com/vi/${e[1]}/hqdefault.jpg`}:(e=n.match(/vimeo\.com\/(?:video\/)?(\d+)/),e?{src:`https://player.vimeo.com/video/${e[1]}?autoplay=1`,img:""}:null)};function b_(n){let e=n.historia?n.historia.split(/\n\s*\n/).map(r=>r.trim()).filter(Boolean):[],t=e.length?`<section class="historia"><div class="sub2">HISTORIA</div>${e.map(r=>`<p>${me(r).replace(/\n/g,"<br>")}</p>`).join("")}</section>`:"",i=S_(n.video),s=i?`<section><div class="sub2">V\xCDDEO</div><button class="video" type="button" id="bVideo" data-src="${me(i.src)}" aria-label="Reproducir el v\xEDdeo">${i.img?`<img src="${me(i.img)}" alt="" loading="lazy">`:""}<span class="pl" aria-hidden="true">\u25B6</span></button></section>`:"",a=n.fotos.length?`<section><div class="sub2">FOTOS \xB7 ${n.fotos.length}</div><div class="fotos">${n.fotos.map((r,o)=>`<button class="foto" type="button" data-i="${o}" aria-label="Ampliar foto ${o+1}${r.pie?": "+me(r.pie):""}"><img src="${me(r.img)}" alt="${me(r.pie)}" loading="lazy"></button>`).join("")}</div></section>`:"";return t||s||a?`<div class="extra">${t}${s}${a}</div>`:""}function T_(n,e){let t=document.createElement("div");t.className="visorfoto",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Fotos");let i=()=>{let o=n[e];t.innerHTML=`<img src="${me(o.img)}" alt="${me(o.pie)}"><div class="pie">${String(e+1).padStart(2,"0")} / ${String(n.length).padStart(2,"0")}${o.pie?" \xB7 "+me(o.pie):""}</div>
    <div class="bts">${n.length>1?'<button class="tecla" data-a="-1" aria-label="Anterior">\u2190</button><button class="tecla" data-a="1" aria-label="Siguiente">\u2192</button>':""}<button class="tecla oscura" data-a="x">Cerrar</button></div>`,t.querySelector('[data-a="x"]').focus()},s=o=>{e=(e+o+n.length)%n.length,i()},a=()=>{t.remove(),removeEventListener("keydown",r)},r=o=>{o.key==="Escape"&&a(),o.key==="ArrowRight"&&s(1),o.key==="ArrowLeft"&&s(-1)};t.addEventListener("click",o=>{let c=o.target.closest("[data-a]");o.target===t||c&&c.dataset.a==="x"?a():c&&s(+c.dataset.a)}),addEventListener("keydown",r),document.body.appendChild(t),i()}var rh=n=>n.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),Yn=np.map(n=>{let e=nt.filter(a=>Jc(a).includes(n)),t=nt.filter(a=>!Jc(a).includes(n)&&Ea(a).some(([r])=>r===n)),i=[...e,...t].map(a=>+a.year).filter(Boolean),s=(jt.artists||{})[n]||{};return{n,s:rh(n),rs:e,ps:t,info:s,colab:Di(e.flatMap(rl)).filter(a=>a!==n),y0:Math.min(...i),y1:Math.max(...i)}});de("nArt").textContent=Yn.length+" artistas";var E_=n=>n.split(/\s+/).filter(e=>!/^(el|la|de|del|y)$/i.test(e)).map(e=>e[0]).join("").slice(0,3),oh=n=>n.info.photo?`<img class="retrato" src="${me(n.info.photo)}"${kr(n.info.photo,ah)} alt="Retrato de ${me(n.n)}" loading="lazy" decoding="async">`:`<div class="sinf" role="img" aria-label="Sin foto todav\xEDa"><b>${me(E_(n.n))}</b><span>SIN FOTO</span></div>`,ch=n=>n.y0===n.y1?String(n.y0):n.y0+"\u2013"+n.y1,Xn=(n,e,t)=>n+" "+(n===1?e:t),Aa=(()=>{try{return localStorage.getItem("au-vistaR")||"lista"}catch{return"lista"}})();function dp(){de("panel").innerHTML=`<header class="panel-cab"><div><h2>ROSTER</h2><div class="sub">${Xn(Yn.length,"artista","artistas")} \xB7 ${nt.length} referencias \xB7 Broadcasted from Elda</div></div>
    <div class="vista" role="group" aria-label="Vista"><button class="tecla" id="vRL" aria-pressed="${Aa==="lista"}">Lista</button><button class="tecla" id="vRR" aria-pressed="${Aa==="red"}">Red</button></div></header>
    <div class="panel-cuerpo" id="rosterC">${Aa==="red"?"":w_()}</div>`;let n=e=>{Aa=e;try{localStorage.setItem("au-vistaR",e)}catch{}dp()};de("vRL").onclick=()=>n("lista"),de("vRR").onclick=()=>n("red"),Aa==="red"&&fp(de("rosterC"))}function w_(){return`<div class="modulos">${Yn.map(n=>`<a class="modulo" href="#a-${n.s}">${oh(n)}
      <span class="rol">${me(n.info.role||"ARTISTA")}</span><span class="nom">${me(n.n)}</span>
      <span class="st">${Xn(n.rs.length,"lanzamiento","lanzamientos")}${n.ps.length?" \xB7 "+Xn(n.ps.length,"participaci\xF3n","participaciones"):""} \xB7 <span style="white-space:nowrap">${ch(n)}</span></span></a>`).join("")}</div>`}var C_=n=>!/arte|artwork|foto|dise|v[ií]deo|portada|gr[aá]fic|estilismo/i.test(n),R_=n=>String(n||"").split(/\s*[·,\/&+]\s*|\s+[×x]\s+/i).map(e=>e.trim().toUpperCase()).filter(e=>e&&!/^(POR DEFINIR|—|-)$/.test(e));function I_(){let n=new Map,e=new Map,t=o=>(n.has(o)||n.set(o,{n:o,m:ol(o)}),n.get(o)),i=(o,c,l,u,d)=>{if(o===c)return;t(o),t(c);let[h,f]=[o,c].sort(),g=h+"|"+f;e.has(g)||e.set(g,{k:g,a:h,b:f,obras:new Map});let y=e.get(g).obras,p=y.get(l.code)||{r:l,tipos:new Set,roles:new Set};p.tipos.add(u),d&&p.roles.add(d.toLowerCase()),y.set(l.code,p)};nt.forEach(o=>{let c=rl(o).map(l=>l.toUpperCase());c.forEach(t),c.forEach((l,u)=>c.slice(u+1).forEach(d=>i(l,d,o,"firma"))),(o.participantes||[]).forEach(([l,u])=>c.forEach(d=>i(l,d,o,"trabajo",u||"participaci\xF3n"))),(o.credits||[]).forEach(([l,u])=>{C_(l)&&R_(u).forEach(d=>c.forEach(h=>i(d,h,o,"trabajo",l)))})});let s="AURALITY",a=[...e.values()].filter(o=>o.a!==s&&o.b!==s).map(o=>({...o,peso:o.obras.size,firma:[...o.obras.values()].some(c=>c.tipos.has("firma"))})),r=new Set(a.flatMap(o=>[o.a,o.b]));return{nodos:[...n.values()].filter(o=>o.n!==s&&(o.m||r.has(o.n))),aristas:a}}function fp(n){let{nodos:e,aristas:t}=I_(),i=Math.max(300,n.clientWidth-2),s=Math.round(Math.min(560,Math.max(340,innerHeight*.52,i<500?i*1.15:0))),a=new Map(e.map(p=>[p.n,p])),r=p=>p.n.length*7.2+16;e.sort((p,m)=>m.m-p.m||p.n.localeCompare(m.n)).forEach((p,m)=>{let A=m/e.length*Math.PI*2+.6,S=p.m?.18:.38;p.x=i/2+Math.cos(A)*i*S,p.y=s/2+Math.sin(A)*s*S,p.vx=p.vy=0});let o=Math.min(150,Math.max(80,Math.sqrt(i*s/Math.max(4,e.length))*.62));for(let p=0;p<420;p++){let m=1-p/420;for(let A=0;A<e.length;A++)for(let S=A+1;S<e.length;S++){let v=e[A],M=e[S],w=M.x-v.x,L=M.y-v.y,_=w*w+L*L+.01,R=Math.sqrt(_),O=o*o*.9/_;w/=R,L/=R,v.vx-=w*O,v.vy-=L*O,M.vx+=w*O,M.vy+=L*O}t.forEach(A=>{let S=a.get(A.a),v=a.get(A.b),M=v.x-S.x,w=v.y-S.y,L=Math.hypot(M,w)||1,_=(L-o/Math.min(1.6,1+(A.peso-1)*.15))*.05;M/=L,w/=L,S.vx+=M*_,S.vy+=w*_,v.vx-=M*_,v.vy-=w*_}),e.forEach(A=>{A.vx+=(i/2-A.x)*.008,A.vy+=(s/2-A.y)*.008*(i/s),A.x+=A.vx*m,A.y+=A.vy*m,A.vx*=.55,A.vy*=.55,A.x=Math.max(18,Math.min(i-18,A.x)),A.y=Math.max(22,Math.min(s-18,A.y))})}e.forEach(p=>{p.izq=p.x+r(p)>i-6}),n.innerHTML=`<svg class="mapa" id="mapaR" viewBox="0 0 ${i} ${s}" width="${i}" height="${s}" role="group" aria-label="Mapa de conexiones entre artistas">
      <g>${t.map(p=>{let m=a.get(p.a),A=a.get(p.b);return`<g class="ar ${p.firma?"firma":"trabajo"}" data-k="${me(p.k)}"><line class="hit" x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${A.x.toFixed(1)}" y2="${A.y.toFixed(1)}"/><line class="ln" x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${A.x.toFixed(1)}" y2="${A.y.toFixed(1)}" stroke-width="${(1.4+Math.min(4,p.peso-1)*.9).toFixed(1)}"/></g>`}).join("")}</g>
      <g>${e.map(p=>`<g class="nd ${p.m?"miembro":"fuera"}" data-n="${me(p.n)}" tabindex="0" role="button" aria-label="${me(p.n)}${p.m?", miembro de aurality":""}" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})">
        ${p.m?'<rect x="-7" y="-7" width="14" height="14"/>':'<circle r="6"/>'}<text x="${p.izq?-13:13}" y="4" text-anchor="${p.izq?"end":"start"}">${me(p.n)}</text></g>`).join("")}</g></svg>
    <div class="leyenda"><span><i class="m"></i>Miembro</span><span><i class="f"></i>De fuera</span><span><i class="l1"></i>Firman juntos</span><span><i class="l2"></i>Producci\xF3n, mezcla o participaci\xF3n</span></div>
    <div class="fichared" id="fichaRed" aria-live="polite"><span class="tp">Toca un artista o una l\xEDnea para ver qu\xE9 los une.</span></div>`;let c=de("mapaR"),l=de("fichaRed"),u=p=>t.filter(m=>m.a===p||m.b===p),d=(p,m)=>{c.classList.toggle("foco",!!p),c.querySelectorAll(".nd").forEach(A=>A.classList.toggle("on",!!p&&p.has(A.dataset.n))),c.querySelectorAll(".ar").forEach(A=>A.classList.toggle("on",!!m&&m.has(A.dataset.k)))},h=p=>{let m=[...p.roles];return m.filter(A=>!m.some(S=>S!==A&&S.startsWith(A))).join(", ")},f=p=>[...p.obras.values()].map(m=>`<a href="#${m.r.code}">${m.r.code}</a> ${m.tipos.has("firma")?"firman juntos":h(m)}`).join(" \xB7 "),g=null,y=(p,m)=>{if(c.querySelectorAll(".nd").forEach(A=>A.classList.toggle("sel",p==="n"&&A.dataset.n===m)),!p||g&&g.tipo===p&&g.id===m){g=null,d(null),l.innerHTML='<span class="tp">Toca un artista o una l\xEDnea para ver qu\xE9 los une.</span>';return}if(g={tipo:p,id:m},p==="n"){let A=a.get(m),S=u(m),v=A.m&&Yn.find(M=>M.n===m);d(new Set([m,...S.map(M=>M.a===m?M.b:M.a)]),new Set(S.map(M=>M.k))),l.innerHTML=`<div class="nom">${me(m)}</div><div class="tp">${A.m?"Miembro del sello":"Artista de fuera"} \xB7 ${Xn(S.length,"conexi\xF3n","conexiones")}</div>
        <ul>${S.map(M=>`<li><b>\xD7 ${me(M.a===m?M.b:M.a)}</b> \u2014 ${f(M)}</li>`).join("")}</ul>${v?`<div class="enlaces"><a class="tecla oscura" href="#a-${v.s}">${me(v.n)} \xB7 perfil</a></div>`:""}`}else{let A=t.find(S=>S.k===m);d(new Set([A.a,A.b]),new Set([m])),l.innerHTML=`<div class="nom">${me(A.a)} \xD7 ${me(A.b)}</div><div class="tp">${Xn(A.peso,"lanzamiento","lanzamientos")} en com\xFAn</div><ul>${[...A.obras.values()].map(S=>`<li><a href="#${S.r.code}"><b>${S.r.code}</b> \xB7 ${me(S.r.artist)} \u2014 ${me(Kt(S.r))}</a><br>${S.tipos.has("firma")?"Firman juntos":"Trabajo: "+me(h(S))}</li>`).join("")}</ul>`}};c.querySelectorAll(".nd").forEach(p=>{p.onclick=()=>y("n",p.dataset.n),p.onkeydown=m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),y("n",p.dataset.n))},p.onpointerenter=m=>{if(m.pointerType==="mouse"&&!g){let A=u(p.dataset.n);d(new Set([p.dataset.n,...A.map(S=>S.a===p.dataset.n?S.b:S.a)]),new Set(A.map(S=>S.k)))}},p.onpointerleave=m=>{m.pointerType==="mouse"&&!g&&d(null)}}),c.querySelectorAll(".ar").forEach(p=>p.onclick=()=>y("a",p.dataset.k)),c.addEventListener("click",p=>{p.target===c&&y(null)}),rs.matches||(c.querySelectorAll(".ar").forEach((p,m)=>p.animate([{opacity:0},{opacity:1}],{duration:500,delay:250+m*40,fill:"backwards"})),c.querySelectorAll(".nd").forEach((p,m)=>p.firstElementChild.animate([{transform:"scale(0)"},{transform:"scale(1)"}],{duration:380,delay:m*55,easing:"cubic-bezier(.3,1.6,.5,1)",fill:"backwards"})))}var Df=0;addEventListener("resize",()=>{clearTimeout(Df),Df=setTimeout(()=>{Ke==="roster"&&Aa==="red"&&de("rosterC")&&fp(de("rosterC"))},250)});document.addEventListener("click",n=>{let e=n.target.closest("[data-contrata]");e&&(Xc=1,Pr=e.dataset.contrata)});function P_(n){let e=n.info.bio&&!/por definir/i.test(n.info.bio)?`<p class="bio">${me(n.info.bio)}</p>`:'<p class="bio pend">Biograf\xEDa por definir.</p>',t=Di([...n.rs,...n.ps].map(r=>r.format)).join(" \xB7 "),i=(r,o)=>`<a class="fila" href="#${r.code}"><span class="x">${r.code}</span><span class="a">${me(r.artist)}</span><span class="t">${me(o||Kt(r))}</span><span class="f x">${me(r.format)}</span><span class="g x">${me(r.genre)}</span><span class="y x">${r.year}</span><span aria-hidden="true">\u2192</span></a>`,s=[["Instagram",n.info.instagram],["Spotify",n.info.spotify],["SoundCloud",n.info.soundcloud]],a=de("panel");a.innerHTML=`<header class="panel-cab"><div><h2>${me(n.n)}</h2><div class="sub">${me(n.info.role||"Artista")} \xB7 aurality</div></div><a class="tecla" href="#roster">\u2190 Roster</a></header>
    <div class="panel-cuerpo"><div class="fl">${oh(n)}<div class="datos">${e}
      <div class="cifras"><div><span>${n.ps.length?"LANZ. \xB7 PART.":"REFERENCIAS"}</span><b>${n.rs.length}${n.ps.length?" \xB7 "+n.ps.length:""}</b></div><div><span>A\xD1OS</span><b>${ch(n)}</b></div><div><span>FORMATOS</span><b class="lst">${t}</b></div></div>
      <div class="enlaces">${s.map(([r,o])=>o?`<a class="tecla" href="${me(o)}" target="_blank" rel="noopener">${r} \u2197</a>`:`<span class="tecla" aria-disabled="true">${r} \xB7 sin enlace</span>`).join("")}<a class="tecla oscura" href="#contacto" data-contrata="${me(n.n)}">Contratar</a><a class="tecla" href="#kit-${n.s}">Kit de prensa</a>
        <a class="tecla oscura" href="#catalogo" id="verCat">Ver en el cat\xE1logo</a></div>
      ${n.colab.length?`<div><div class="sub2">COLABORACIONES</div><div class="enlaces">${n.colab.map(r=>ol(r)?`<a class="tecla" href="#a-${rh(r)}">\xD7 ${me(r)}</a>`:`<span class="tecla" aria-disabled="true">\xD7 ${me(r)}</span>`).join("")}</div></div>`:""}
    </div></div>
    ${n.rs.length?`<div class="sub2">LANZAMIENTOS</div><div class="lista">${n.rs.map(r=>i(r)).join("")}</div>`:""}
    ${n.ps.length?`<div class="sub2">PARTICIPACIONES</div><div class="lista">${n.ps.map(r=>i(r,Kt(r)+" \u2014 "+(Ea(r).filter(([o])=>o===n.n).map(([,o])=>o).filter(Boolean).join(", ")||"participaci\xF3n"))).join("")}</div>`:""}</div>`,de("verCat").addEventListener("click",()=>{ul(),yi.add(n.n)})}var Ft=(jt.senal||[]).slice().sort((n,e)=>e.anio-n.anio||e.mes-n.mes),Uf=jt.senal_playlist||"",Ju=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],is=Ft.length?Ft[0].anio:2026,L_=`Adem\xE1s de los discos de sus artistas, aurality publica con su propio nombre. Son las ediciones del sello: discos de remixes, recopilatorios y encargos en los que el autor no es un artista, sino el criterio que los junta.

Aqu\xED el trabajo del sello es la curadur\xEDa: elegir a qui\xE9n invitar, qu\xE9 poner al lado de qu\xE9 y en qu\xE9 orden. Es nuestra manera de hacer un disco sin firmar ning\xFAn tema, y la forma m\xE1s directa de ense\xF1ar qu\xE9 entendemos por aurality.

La Se\xF1al mensual nace del mismo sitio: cada mes, una playlist con lo que nos ha mirado de cerca, sea nuestro o no.`;function N_(){let n=de("panel"),e=jt.editorial||{},t=nt.filter(r=>r.edicion),i=(jt.proximos||[]).filter(r=>r.edicion),s=Ft[0],a=String((e.texto||"").trim()||L_).split(/\n\s*\n/).map(r=>r.trim()).filter(Boolean);n.innerHTML=`<header class="panel-cab"><div><h2>L\xCDNEA EDITORIAL</h2><div class="sub">Lo que firma el sello \xB7 ediciones y Se\xF1al mensual</div></div></header>
    <div class="panel-cuerpo"><div class="editorial">
      <section class="ed-intro">${a.map((r,o)=>`<p${o?"":' class="lead"'}>${me(r).replace(/\n/g,"<br>")}</p>`).join("")}</section>
      <section><div class="sub2">EDICIONES DEL SELLO${t.length?" \xB7 "+t.length:""}</div>
        ${t.length?`<div class="rejilla">${t.map(lp).join("")}</div>`:`<div class="ed-vacio"><span class="c">AU-ED \xB7 01</span><span>La primera edici\xF3n del sello est\xE1 en preparaci\xF3n.${i.length?" La cuenta atr\xE1s est\xE1 en la portada.":""}</span></div>`}</section>
      ${s?`<section><div class="sub2">SE\xD1AL MENSUAL \xB7 ${Xn(Ft.length,"edici\xF3n","ediciones")}</div>
        <a class="ed-senal" href="#senal">${s.cover?`<img src="${me(s.cover)}"${kr(s.cover,"150px")} alt="Portada de la Se\xF1al ${me(s.code)}" loading="lazy" decoding="async">`:""}
          <span class="txt"><span class="k">EN ANTENA \xB7 ${me(Ju[s.mes-1])} ${s.anio}</span><span class="nom">SE\xD1AL MENSUAL <b>${me(s.code)}</b></span><span class="des">${me(s.descripcion||"Lanzamientos, hallazgos y obsesiones del mes.")}</span><span class="tecla">Abrir la Se\xF1al y el archivo \u2192</span></span></a>
        ${dl("altaE")}</section>`:""}
    </div></div>`,lh("altaE")}function pp(n){let e=de("panel"),t=Di(Ft.map(r=>r.anio)).sort(),i=r=>Ft.find(o=>o.anio===is&&o.mes===r),s=n===Ft[0];e.innerHTML=`<header class="panel-cab"><div><h2>SE\xD1AL MENSUAL</h2><div class="sub">Una playlist que se renueva cada mes \xB7 ${Xn(Ft.length,"edici\xF3n","ediciones")} en el registro</div></div>
    ${Uf?`<a class="tecla" href="${me(Uf)}" target="_blank" rel="noopener">${s?"Escuchar en Spotify \u2197":"Escuchar la edici\xF3n actual \u2197"}</a>`:""}</header>
    <div class="panel-cuerpo">
      <div class="meses" aria-label="Registro \xB7 sintonizador AU-02"><div class="k"><span>REGISTRO \xB7 SINTONIZADOR AU-02</span>
        <span class="anio"><button class="tecla" id="aAnt" aria-label="A\xF1o anterior" ${t[0]<is?"":"disabled"}>\u2039</button><b>${is}</b><button class="tecla" id="aSig" aria-label="A\xF1o siguiente" ${t[t.length-1]>is?"":"disabled"}>\u203A</button></span></div>
        <div class="cas12">${Ju.map((r,o)=>{let c=i(o+1);return`<button ${c?`class="hay" data-c="${c.code}"`:"disabled"} aria-pressed="${c===n}" aria-label="${r} ${is}${c?"":", sin edici\xF3n"}"><i></i>${String(o+1).padStart(2,"0")}</button>`}).join("")}</div></div>
      <div class="fl"><img class="portada" src="${me(n.cover)}"${kr(n.cover,ah)} alt="Portada de SE\xD1AL MENSUAL ${n.code}" decoding="async">
        <div class="datos"><div class="cod">SE\xD1AL MENSUAL \xB7 ${n.code} \xB7 AU-SE\xD1AL-${n.code.replace("_","")}</div>
          <div class="antena ${s?"on":""}"><i></i>${s?"En antena \xB7 es lo que suena ahora en la playlist":"Archivada \xB7 la playlist ya suena con una edici\xF3n posterior"}</div>
          <h3>${Ju[n.mes-1]} ${n.anio}</h3>
          <p class="bio">${me(n.descripcion||"")}</p>
          <div class="cifras"><div><span>TEMAS</span><b>${n.temas||"\u2014"}</b></div><div><span>DURACI\xD3N</span><b>${me(n.duracion||"\u2014")}</b></div><div><span>DESTACADOS</span><b>${(n.destacados||[]).length}</b></div></div>
          ${n.temas?"":'<p class="bio pend">N\xFAmero de temas por confirmar.</p>'}
        </div></div>
      <div class="sub2">${s?"SUENAN ESTE MES":"SONARON ESE MES"}</div>
      <div class="destacados">${(n.destacados||[]).map(([r,o,c],l)=>`<div><span class="n">${String(l+1).padStart(2,"0")}</span><span><span class="a">${me(r)}</span>
        <span class="t">${o?`\xAB${me(o)}\xBB${c?" \xB7 prod. "+me(c):""}`:"Tema por confirmar"}</span></span></div>`).join("")}</div>
      ${dl("altaS")}
    </div>`,lh("altaS"),e.querySelectorAll(".cas12 button.hay").forEach(r=>r.onclick=()=>{location.hash="s-"+r.dataset.c});let a=r=>{is+=r;let o=Ft.find(c=>c.anio===is);o?location.hash="s-"+o.code:pp(n)};de("aAnt").onclick=()=>a(-1),de("aSig").onclick=()=>a(1)}var D_=(()=>{try{return localStorage.getItem("au-alta")==="1"}catch{return!1}})(),Qc=D_,dl=n=>`<form class="alta${Qc?" hecha":""}" id="${n}" novalidate aria-label="Recibe la Se\xF1al">
    <div class="k"><i aria-hidden="true"></i>RECIBE LA SE\xD1AL</div>
    ${Qc?'<p class="bio">Est\xE1s en la lista. La pr\xF3xima Se\xF1al te llega al correo.</p>':`<p class="bio">Una vez al mes, en tu correo: la Se\xF1al, los lanzamientos del sello y lo pr\xF3ximo.</p>
    <div class="linea"><label class="trampa" for="${n}M">Tu email</label><input id="${n}M" type="email" autocomplete="email" placeholder="tu@correo.com" required>
      <button class="tecla oscura" type="submit">Apuntarme</button></div>
    <div class="trampa" aria-hidden="true"><input id="${n}B" tabindex="-1" autocomplete="off"></div>
    <span class="err" id="${n}E" role="alert"></span>
    <p class="nota">Solo para enviarte la Se\xF1al. Te das de baja cuando quieras.</p>`}</form>`;function lh(n){let e=de(n);!e||Qc||(e.onsubmit=t=>{t.preventDefault();let i=de(n+"M").value.trim(),s=e.querySelector("button");if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i)){de(n+"E").textContent="El email no parece v\xE1lido.";return}de(n+"E").textContent="",s.disabled=!0,s.textContent="Apuntando\u2026";let a=jt.contacto||{},r=o=>{if(!o){s.disabled=!1,s.textContent="Apuntarme",de(n+"E").textContent="No se ha podido apuntar. Prueba otra vez en un rato.";return}Qc=!0;try{localStorage.setItem("au-alta","1")}catch{}e.outerHTML=dl(n)};if(!Ta||!a.email){r(!0);return}fetch("https://formsubmit.co/ajax/"+encodeURIComponent(a.email),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:"aurality \xB7 alta en la Se\xF1al \xB7 "+i,_template:"table",_captcha:"false",_honey:de(n+"B").value,_replyto:i,alta:"Recibe la Se\xF1al",email:i})}).then(o=>o.json()).then(o=>r(o&&(o.success===!0||o.success==="true"))).catch(()=>r(!1))})}var U_=["El riesgo","La imagen","Lo digital","La calle"];function O_(){let n=jt.manifiesto||{},e=n.parrafos||[],t=n.codigos&&n.codigos.length?n.codigos:U_,i=ss.length>1?ss:["Escena A","Escena B"],s=A=>me(A).replace(/«([^»]+)»/g,"<q>$1</q>"),a=A=>{let S=A.match(/[^.!?]+[.!?]+/g)||[A],v=S.filter(M=>/[:;]/.test(M)&&M.length<120);return(v.length?v:S).reduce((M,w)=>w.trim().length<M.trim().length?w:M).trim()},r=A=>{let S=A%2===1,v=i[2*A%i.length],M=i[(2*A+1)%i.length];return`<div class="cruce" aria-hidden="true"><span class="pin a e ${S?"de":"iz"}"><i></i>${me(v)}<small>escena</small></span><span class="codigo">${me(t[A%t.length])}</span><span class="pin b x ${S?"iz":"de"}"><i></i>${me(M)}<small>escena</small></span></div>`};de("panel").innerHTML=`<header class="panel-cab"><div><h2>MANIFIESTO</h2><div class="sub">aura-of-reality \xB7 Broadcasted from Elda</div></div></header>
    <div class="panel-cuerpo"><article class="puente"><svg class="hilo" aria-hidden="true"><path class="guia"/><path class="h"/></svg>
      <h3>${me(n.titular||"")}</h3><div class="ini"><i></i>aurality tiende el hilo</div>
      ${e.map((A,S)=>`${S?r(S-1):""}<section class="tramo"><span class="n">${String(S+1).padStart(2,"0")} / ${String(e.length).padStart(2,"0")}</span><p class="clave">${s(a(A))}</p><p>${s(A.replace(a(A),"").replace(/\s+/g," ").trim())}</p></section>`).join("")}
      <div class="fin"><i></i><p>${me(n.cierre||"")}</p></div><div class="firma"><i></i><s></s><span>aurality \xB7 Elda</span></div></article></div>`;let o=de("panel").querySelector(".puente"),c=o.querySelector(".hilo"),l=c.querySelector(".h"),u=c.querySelector(".guia"),d=o.parentElement,h=[],f=[],g=0,y=A=>{let S=A.getBoundingClientRect(),v=o.getBoundingClientRect();return[S.left+S.width/2-v.left,S.top+S.height/2-v.top]},p=()=>{h=[y(o.querySelector(".ini i"))],o.querySelectorAll(".cruce").forEach(M=>{h.push(y(M.querySelector(".pin.e i")),y(M.querySelector(".pin.x i")))});let A=y(o.querySelector(".fin i")),S=h[h.length-1];h.push([S[0],A[1]-(matchMedia("(max-width:820px)").matches?78:104)],A);let v="M"+h.map(M=>M[0].toFixed(1)+" "+M[1].toFixed(1)).join("L");l.setAttribute("d",v),u.setAttribute("d",v),f=[0];for(let M=1;M<h.length;M++)f.push(f[M-1]+Math.hypot(h[M][0]-h[M-1][0],h[M][1]-h[M-1][1]));g=f[f.length-1],l.style.strokeDasharray=g,m()},m=()=>{if(!o.isConnected){removeEventListener("scroll",m),removeEventListener("resize",p);return}let A=o.getBoundingClientRect(),S=d.scrollHeight>d.clientHeight+4?d.scrollTop+d.clientHeight>=d.scrollHeight-4:scrollY+innerHeight>=document.documentElement.scrollHeight-4,v=rs.matches||S?1/0:innerHeight*.72-A.top,M=0;for(let w=1;w<h.length;w++){let[,L]=h[w-1],[,_]=h[w];if(v>=_)M=f[w];else{v>L&&(M=f[w-1]+(f[w]-f[w-1])*(v-L)/(_-L));break}}l.style.strokeDashoffset=g-M,o.querySelectorAll(".pin,.codigo,.tramo,.ini,.fin").forEach(w=>{let L=w.matches(".pin,.ini,.fin")?w.querySelector("i"):w,_=L.getBoundingClientRect();w.classList.toggle("on",v>=(w.matches(".tramo")?_.top+30:_.top+_.height/2)-A.top)})};o.classList.add("vivo"),p(),d.addEventListener("scroll",m,{passive:!0}),addEventListener("scroll",m,{passive:!0}),addEventListener("resize",p),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>o.isConnected&&p()),new ResizeObserver(()=>o.isConnected&&p()).observe(o)}var Of=n=>String(n||"").split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean).map(e=>`<p>${me(e).replace(/\n/g,"<br>")}</p>`).join(""),Ff=()=>{let n=new Date;return $n(n.getDate())+"."+$n(n.getMonth()+1)+"."+n.getFullYear()};function F_(n){let e=de("panel"),t=jt.contacto||{},i=jt.kit||{},s='<button class="tecla oscura" type="button" id="bImprime">Imprimir / guardar PDF</button>',a=t.email?`<p>${n?"Contrataci\xF3n y prensa":"Prensa y contrataci\xF3n"}: <b class="dato">${me(t.email)}</b>${t.instagram?` \xB7 Instagram @${me(t.instagram.replace(/\/$/,"").split("/").pop())}`:""}</p>`:"";if(n){let r=n.info,o=r.bio&&!/por definir/i.test(r.bio)?r.bio:"",c=(r.bio_corta||"").trim()||(o?o.split(/(?<=[.!?])\s/)[0]:""),l=(r.fotos_prensa||[]).map(f=>typeof f=="string"?{img:f,cr:""}:{img:f&&f.imagen||"",cr:f&&f.credito||""}).filter(f=>f.img);!l.length&&r.photo&&l.push({img:r.photo,cr:""});let u=[...n.rs,...n.ps],d=Di(u.map(f=>f.genre).filter(f=>f&&f!=="\u2014")).slice(0,4).join(" \xB7 "),h=[["Instagram",r.instagram],["Spotify",r.spotify],["SoundCloud",r.soundcloud]].filter(([,f])=>f);e.innerHTML=`<header class="panel-cab"><div><h2>KIT DE PRENSA</h2><div class="sub">${me(n.n)} \xB7 aurality \xB7 ${Ff()}</div></div><a class="tecla" href="#a-${n.s}">\u2190 Perfil</a></header>
      <div class="panel-cuerpo"><article class="kit">
        <div class="kit-cab">${oh(n)}<div><div class="cod">ARTISTA \xB7 AURALITY${r.origen?" \xB7 "+me(r.origen):""}</div><h3>${me(n.n)}</h3>${r.role?`<div class="rol">${me(r.role)}</div>`:""}${c?`<p class="lead">${me(c)}</p>`:""}</div></div>
        <div class="cifras"><div><span>REFERENCIAS</span><b>${n.rs.length}${n.ps.length?" + "+n.ps.length:""}</b></div><div><span>A\xD1OS</span><b>${ch(n)}</b></div>${d?`<div><span>G\xC9NEROS</span><b class="x">${me(d)}</b></div>`:""}</div>
        ${o?`<section><div class="sub2">BIOGRAF\xCDA</div>${Of(o)}</section>`:""}
        ${u.length?`<section><div class="sub2">DISCOGRAF\xCDA EN AURALITY</div><ul class="kit-lista">${u.map(f=>`<li><a href="#${f.code}"><b>${f.code}</b> \xB7 ${me(f.artist)} \u2014 ${me(Kt(f))} \xB7 ${me(f.format)} \xB7 ${f.year}${n.ps.includes(f)?" \xB7 participaci\xF3n":""}</a></li>`).join("")}</ul></section>`:""}
        ${l.length?`<section><div class="sub2">FOTOS DE PRENSA</div><div class="fotos">${l.map(f=>`<a class="foto" href="${me(f.img)}" download target="_blank" rel="noopener" aria-label="Descargar foto${f.cr?" \xB7 "+me(f.cr):""}"><img src="${me(f.img)}" alt="${me(n.n)}" loading="lazy"></a>`).join("")}</div>${l.some(f=>f.cr)?`<div class="credito">Fotos: ${me(Di(l.map(f=>f.cr).filter(Boolean)).join(" \xB7 "))}</div>`:""}</section>`:""}
        ${h.length?`<section><div class="sub2">ESCUCHAR Y SEGUIR</div><div class="enlaces">${h.map(([f,g])=>`<a class="tecla" href="${me(g)}" target="_blank" rel="noopener">${f} \u2197</a>`).join("")}</div></section>`:""}
        <section><div class="sub2">MATERIAL Y CONTRATACI\xD3N</div>${a}<div class="enlaces">${r.kit_enlace?`<a class="tecla" href="${me(r.kit_enlace)}" target="_blank" rel="noopener">Fotos en alta y material \u2197</a>`:""}${r.rider?`<a class="tecla" href="${me(r.rider)}" target="_blank" rel="noopener">Rider t\xE9cnico (PDF) \u2197</a>`:""}<a class="tecla oscura no-imprime" href="#contacto" data-contrata="${me(n.n)}">Contratar</a><span class="no-imprime">${s}</span></div></section>
      </article></div>`}else{let r=Math.min(...nt.map(l=>+l.year).filter(Boolean)),o=jt.manifiesto||{},c=(i.texto||"").trim()||[o.titular,(o.parrafos||[])[0]].filter(Boolean).join(`

`);e.innerHTML=`<header class="panel-cab"><div><h2>KIT DE PRENSA</h2><div class="sub">El sello \xB7 aurality \xB7 ${Ff()}</div></div><a class="tecla" href="#contacto">\u2190 Contacto</a></header>
      <div class="panel-cuerpo"><article class="kit">
        <div><img class="logo" src="img/lettering.png" alt="aurality" width="802" height="245"><div class="rol" style="margin-top:12px;font:500 12px/1.4 var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:#3b4150">Sello y plataforma creativa \xB7 Elda</div>${c?`<div class="lead-bloque">${Of(c).replace("<p>",'<p class="lead">')}</div>`:""}</div>
        <div class="cifras"><div><span>ARTISTAS</span><b>${Yn.length}</b></div><div><span>REFERENCIAS</span><b>${nt.length}</b></div>${isFinite(r)?`<div><span>DESDE</span><b>${r}</b></div>`:""}<div><span>BASE</span><b>ELDA</b></div></div>
        <section><div class="sub2">ROSTER</div><ul class="kit-lista">${Yn.map(l=>`<li><a href="#kit-${l.s}"><b>${me(l.n)}</b>${l.info.role?" \xB7 "+me(l.info.role):""} \xB7 kit de prensa \u2192</a></li>`).join("")}</ul></section>
        <section><div class="sub2">\xDALTIMOS LANZAMIENTOS</div><ul class="kit-lista">${nt.slice(0,6).map(l=>`<li><a href="#${l.code}"><b>${l.code}</b> \xB7 ${me(l.artist)} \u2014 ${me(Kt(l))} \xB7 ${l.year}</a></li>`).join("")}</ul></section>
        <section><div class="sub2">LOGOS</div><div class="logos"><a href="img/lettering.png" download="aurality-lettering.png"><img class="logo" src="img/lettering.png" alt="Lettering de aurality" style="width:220px"></a><a href="apple-touch-icon.png" download="aurality-isotipo.png"><img class="isotipo" src="apple-touch-icon.png" alt="Isotipo de aurality"></a></div>
          <div class="credito no-imprime">Pulsa un logo para descargarlo. \xDAsalo tal cual: sin recomponer el lettering con otra tipograf\xEDa.</div></section>
        <section><div class="sub2">MATERIAL Y CONTACTO</div>${a}<div class="enlaces">${i.enlace?`<a class="tecla" href="${me(i.enlace)}" target="_blank" rel="noopener">Logos en alta y fotos \u2197</a>`:""}<a class="tecla oscura no-imprime" href="#contacto">Escribir</a><span class="no-imprime">${s}</span></div></section>
      </article></div>`}de("bImprime").onclick=()=>print()}var Bf=[{k:"demo",n:"Demos",d:"Mandar m\xFAsica",intro:"Escuchamos todo lo que llega. M\xE1ndanos un enlace privado (SoundCloud, Drive, Dropbox), no archivos adjuntos: dos o tres temas bastan. Si encaja, te escribimos."},{k:"contratacion",n:"Contrataci\xF3n",d:"Bolos, festivales, sesiones",intro:"Para contratar a un artista de aurality o un showcase del sello. Cu\xE9ntanos fecha, ciudad y qu\xE9 tienes en mente."},{k:"prensa",n:"Prensa",d:"Medios y entrevistas",intro:"Entrevistas, rese\xF1as, estrenos y material para medios. Te contestamos con lo que necesites."}],Xc=0,Pr="",zf=n=>{let e=Yn.find(t=>t.n===n)||(n?null:Yn[0]);return e?"#kit-"+e.s:"#kit"};function mp(){let n=jt.contacto||{},e=Bf[Xc],t=(n["intro_"+e.k]||"").trim()||e.intro,i=(r,o,c="",l="text")=>`<div class="campo"><label for="${r}">${o}</label><input id="${r}" type="${l}" ${c}></div>`,s={demo:`<div class="dos">${i("cNom","Nombre o proyecto",'autocomplete="name"')}${i("cMail","Email",'autocomplete="email"',"email")}</div>
      ${i("cLink","Enlace a la m\xFAsica (privado)",'inputmode="url" placeholder="https://"',"url")}`,contratacion:`<div class="dos">${i("cNom","Nombre y promotora o sala",'autocomplete="name"')}${i("cMail","Email",'autocomplete="email"',"email")}</div>
      <div class="dos"><div class="campo"><label for="cArt">Artista</label><select id="cArt">${[...Yn.map(r=>r.n),"SHOWCASE AURALITY (VARIOS)"].map(r=>`<option${r===Pr?" selected":""}>${me(r)}</option>`).join("")}</select></div>
        ${i("cFecha","Fecha (si la hay)","","date")}</div>${i("cCiudad","Ciudad y sala o festival")}`,prensa:`<div class="dos">${i("cNom","Nombre",'autocomplete="name"')}${i("cMedio","Medio")}</div>${i("cMail","Email",'autocomplete="email"',"email")}`}[e.k];de("panel").innerHTML=`<header class="panel-cab"><div><h2>CONTACTO</h2><div class="sub">Enviar se\xF1al \xB7 demos, contrataci\xF3n y prensa</div></div></header>
    <div class="panel-cuerpo">
      <div class="caminos" role="group" aria-label="\xBFQu\xE9 nos quieres mandar?">${Bf.map((r,o)=>`<button class="camino" type="button" data-i="${o}" aria-pressed="${o===Xc}"><span class="n">${String(o+1).padStart(2,"0")} \xB7 ${r.n}</span><span class="d">${r.d}</span></button>`).join("")}</div>
      <p class="bio intro">${me(t)}</p>
      <form class="form" id="formC" novalidate>${s}
      <div class="campo"><label for="cMsg">Mensaje</label><textarea id="cMsg" required placeholder="${e.k==="demo"?"Qui\xE9n eres, qu\xE9 nos mandas y por qu\xE9 aurality.":e.k==="contratacion"?"Tipo de evento, horario, condiciones\u2026":"Qu\xE9 preparas y para cu\xE1ndo."}"></textarea></div>
      <div class="trampa" aria-hidden="true"><label for="cBot">No rellenar</label><input id="cBot" tabindex="-1" autocomplete="off"></div>
      <div class="campo"><span class="err" id="cErr" role="alert"></span></div>
      <div class="enlaces"><button class="tecla oscura" type="submit">Enviar ${e.k==="demo"?"demo":e.k==="contratacion"?"petici\xF3n":"mensaje"}</button>
        ${e.k==="contratacion"?`<a class="tecla" id="kitArt" href="${zf(Pr)}">Kit de prensa del artista</a>`:e.k==="prensa"?'<a class="tecla" href="#kit">Kit de prensa del sello</a>':""}</div>
      ${n.nota&&e.k==="demo"?`<p class="bio pend">${me(n.nota)}</p>`:""}
    </form><div id="cListo"></div>
    <div class="sub2">DIRECTO</div><div class="enlaces">
      ${n.email?`<span class="tecla">Email \xB7 <span class="dato" id="cEmail">${me(n.email)}</span></span><button class="tecla oscura" type="button" id="cCopEmail">Copiar email</button>`:'<span class="tecla" aria-disabled="true">Email \xB7 por definir</span>'}
      ${n.instagram?`<a class="tecla" href="${me(n.instagram)}" target="_blank" rel="noopener">Instagram \xB7 @${me(n.instagram.replace(/\/$/,"").split("/").pop())} \u2197</a>`:'<span class="tecla" aria-disabled="true">Instagram \xB7 por definir</span>'}</div>
    ${dl("altaC")}</div>`,lh("altaC"),de("panel").querySelectorAll(".camino").forEach(r=>r.onclick=()=>{Xc=+r.dataset.i,mp()}),de("cArt")&&(de("cArt").onchange=r=>{Pr=r.target.value,de("kitArt").href=zf(Pr)});let a=de("cCopEmail");a&&(a.onclick=()=>navigator.clipboard.writeText(n.email).then(()=>{a.textContent="Copiado"},()=>{let r=document.createRange();r.selectNodeContents(de("cEmail"));let o=getSelection();o.removeAllRanges(),o.addRange(r),a.textContent="Seleccionado"})),de("formC").onsubmit=r=>{r.preventDefault();let o=_=>de(_)?de(_).value.trim():"",c=o("cNom"),l=o("cMail"),u=o("cMsg"),d=o("cLink"),h=o("cMedio"),f=o("cArt"),g=o("cFecha"),y=o("cCiudad"),p=c?/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(l)?e.k==="demo"&&!/^https?:\/\/\S+/.test(d)?"Falta el enlace a la m\xFAsica (tiene que empezar por https://).":e.k==="prensa"&&!h?"Falta el medio.":u?"":"Falta el mensaje.":"El email no parece v\xE1lido.":"Falta el nombre.";if(de("cErr").textContent=p,p)return;let m={camino:e.n,nombre:c,email:l,...e.k==="demo"?{enlace:d}:{},...e.k==="contratacion"?{artista:f,fecha:g||"\u2014",lugar:y||"\u2014"}:{},...e.k==="prensa"?{medio:h}:{},mensaje:u},A=`aurality \xB7 ${e.n.toUpperCase()} \xB7 ${e.k==="contratacion"?f+" \xB7 ":e.k==="prensa"?h+" \xB7 ":""}${c}`,S=A+`
`+Object.entries(m).filter(([_])=>_!=="mensaje"&&_!=="camino").map(([_,R])=>`${_}: ${R}`).join(`
`)+`

`+u,v=de("formC").querySelector("button[type=submit]"),M=v.textContent,w=(_,R)=>{de("cListo").innerHTML=`<div class="listo" role="status"><b class="dato">${_}</b><span class="bio">${R}</span><pre id="cTexto">${me(S)}</pre><div><button class="tecla" id="cCopiar" type="button">Copiar mensaje</button></div></div>`,de("cCopiar").onclick=()=>navigator.clipboard.writeText(S).then(()=>{de("cCopiar").textContent="Copiado"},()=>{let O=document.createRange();O.selectNodeContents(de("cTexto"));let z=getSelection();z.removeAllRanges(),z.addRange(O),de("cCopiar").textContent="Selecci\xF3nalo y copia"}),de("cListo").scrollIntoView({block:"nearest"})},L=n.email?`C\xF3piala y env\xEDala a <span class="dato">${me(n.email)}</span>.`:"Copia el mensaje y env\xEDalo por Instagram.";if(!Ta||!n.email){w("Se\xF1al preparada",L);return}v.disabled=!0,v.textContent="Enviando\u2026",fetch("https://formsubmit.co/ajax/"+encodeURIComponent(n.email),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:A,_template:"table",_captcha:"false",_honey:de("cBot").value,_replyto:l,...m})}).then(_=>_.json().catch(()=>({}))).then(_=>{if(String(_.success)!=="true")throw new Error(_.message||"error");de("formC").reset(),de("cListo").innerHTML='<div class="listo" role="status"><b class="dato">Se\xF1al enviada</b><span class="bio">Ha llegado a aurality. Gracias por escribir.</span></div>',de("cListo").scrollIntoView({block:"nearest"})}).catch(()=>w("No se ha podido enviar","Ha fallado la conexi\xF3n. "+L)).finally(()=>{v.disabled=!1,v.textContent=M})}}var Ke="escucha",Lr=null,ju=0,yn=0,Vf={escucha:["01 \xB7 SECCI\xD3N","ESCUCHA"],catalogo:["02 \xB7 SECCI\xD3N","CAT\xC1LOGO"],roster:["03 \xB7 SECCI\xD3N","ROSTER"],senal:["04 \xB7 SECCI\xD3N","SE\xD1AL"],editorial:["04 \xB7 SECCI\xD3N","EDITORIAL"],manifiesto:["05 \xB7 SECCI\xD3N","MANIFIESTO"],contacto:["06 \xB7 SECCI\xD3N","CONTACTO"]},gp=n=>{n=n.replace(/\/+$/,"");let e=n.toLowerCase();return/^archivo(-au\d+)?$/.test(e)?"archivo"+(e.length>7?"-"+e.slice(8).toUpperCase():""):e.startsWith("senal-")?"s-"+n.slice(6):Yn.some(t=>t.s===e)?"a-"+e:n},os=null;function B_(n){let e=de("panel"),t=e.querySelector(".panel-cuerpo"),i=de("resultados");qn==="lista"&&(qn="mesa",Kc=null,up());let s=document.createElement("div");s.className="mesa-mandos",[e.querySelector(".filtrosM"),e.querySelector(".conteo"),de("faders")].forEach(h=>h&&s.appendChild(h)),e.insertBefore(s,t);let a=document.createElement("div");a.className="lector",a.innerHTML='<span class="k">FICHA EN LECTURA</span><b class="cod"></b><span class="dat"></span><span class="art"></span><span class="tit"></span>',e.appendChild(a);let r=document.createElement("div"),o=document.createElement("div");r.className="mesa-escena",o.className="mesa-plano",r.appendChild(o),i.classList.add("pista"),i.insertBefore(r,i.firstChild);let c=null,l="",u=h=>{if(!h||h===l)return;l=h;let f=nt.find(y=>y.code===h);if(!f)return;a.querySelector(".cod").textContent=f.code,a.querySelector(".dat").textContent=[f.format,f.genre,f.year].filter(Boolean).join(" \xB7 "),a.querySelector(".art").textContent=f.artist,a.querySelector(".tit").textContent=Kt(f),i.querySelectorAll(".ref.leida").forEach(y=>y.classList.remove("leida"));let g=i.querySelector(`.ref[data-c="${h}"]`);g&&g.classList.add("leida")},d=os={cols:4,filaH:300,vis:[],s(){return t.scrollTop},mide(){let h=i.querySelector(".rejilla");if(!h)return;h.parentNode!==o&&o.appendChild(h),n&&i.querySelectorAll("a.ref").forEach(p=>{let m="#archivo-"+p.dataset.c;p.getAttribute("href")!==m&&p.setAttribute("href",m)}),this.vis=[...h.querySelectorAll(".ref:not([hidden])")].sort((p,m)=>(+p.style.order||0)-(+m.style.order||0)),this.cols=t.clientWidth<760?3:4,h.style.setProperty("--cols",this.cols);let f=t.clientHeight;r.style.height=f+"px";let g=this.vis[0];this.filaH=g?g.offsetHeight+(parseFloat(getComputedStyle(h).rowGap)||0):300;let y=Math.ceil(this.vis.length/this.cols);i.style.height=f+Math.max(0,y-1)*this.filaH+"px",this.mueve()},mueve(){let h=this.s();if(o.style.setProperty("--s",h.toFixed(1)),!c){let f=Math.max(0,Math.round(h/this.filaH)),g=this.vis[Math.min(this.vis.length-1,f*this.cols)];g&&u(g.dataset.c)}}};t.addEventListener("scroll",()=>d.mueve(),{passive:!0}),i.addEventListener("pointerover",h=>{let f=h.target.closest&&h.target.closest(".ref");f&&h.pointerType==="mouse"&&(c=f,u(f.dataset.c))}),i.addEventListener("pointerleave",()=>{c=null,d.mueve()}),i.addEventListener("focusin",h=>{let f=h.target.closest&&h.target.closest(".ref");if(!f)return;u(f.dataset.c);let g=d.vis.indexOf(f),y=Math.floor(g/d.cols)*d.filaH;g>=0&&(t.scrollTop=y)}),d.mide(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{os===d&&d.mide()})}addEventListener("resize",()=>{os&&(zr.matches?os.mide():el())});function z_(){let n=de("panel");n.querySelectorAll('a[href="#catalogo"]').forEach(e=>{e.setAttribute("href","#archivo"),/cat[aá]logo/i.test(e.textContent)&&e.children.length===0&&(e.textContent=e.textContent.replace(/cat[aá]logo/i,t=>t[0]==="C"?"ARCHIVO":"Archivo"))}),n.querySelectorAll('a[href^="#AU"]').forEach(e=>e.setAttribute("href","#archivo-"+e.getAttribute("href").slice(1)))}var Wc={ficha:"catalogo",artista:"roster",senal:"editorial"},kf=0,Gf=0,vp="",V_=".portada, .retrato, .sinf, .sinp, .ed-senal img",k_=".fl > .portada, .fl > .retrato, .fl > .sinf, .fl > .sinp",Hf=n=>{let e=de("panel");if(e.hidden)return null;let t=null;try{t=n&&e.querySelector(`a[href="#${CSS.escape(n)}"]`)}catch{}let i=t&&t.querySelector(V_)||e.querySelector(k_);if(!i)return null;let s=i.getBoundingClientRect();return s.bottom>0&&s.top<innerHeight&&s.width>0?i:null};function uh(n){let e=location.hash.length>1?decodeURIComponent(location.hash.slice(1)):gp(decodeURIComponent(location.pathname.slice(1))),t=vp,i=n&&document.startViewTransition&&!rs.matches&&!document.hidden?Hf(e):null;if(!i)return el(n);i.style.viewTransitionName="viajero",document.documentElement.classList.add("vt");let s=null;document.startViewTransition(()=>{i.style.viewTransitionName="",el(n),s=Hf(t),s&&(s.style.viewTransitionName="viajero")}).finished.catch(()=>{}).then(()=>{s&&(s.style.viewTransitionName=""),document.documentElement.classList.remove("vt")})}function el(n){let e=Ke,t=scrollY,i=de("panel").querySelector(".panel-cuerpo"),s=i?i.scrollTop:0,r=n&&n.type==="hashchange"||location.hash.length>1?decodeURIComponent(location.hash.slice(1)):gp(decodeURIComponent(location.pathname.slice(1))),o=/^archivo(-|$)/i.test(r),c=nt.find(S=>S.code===(o?r.slice(8):r).toUpperCase()),l=r.startsWith("a-")&&Yn.find(S=>S.s===r.slice(2)),u=r==="senal"?Ft[0]:r.startsWith("s-")?Ft.find(S=>S.code===r.slice(2)):null,d=r.startsWith("kit-")?Yn.find(S=>S.s===r.slice(4)):null;Ke=o?c?"ficha":"catalogo":["catalogo","roster","manifiesto","contacto","registro","kit","editorial"].includes(r)||d?d?"kit":r:u?"senal":c?"ficha":l?"artista":"escucha";let h="/"+(o?"archivo"+(c?"-"+c.code:""):Ke==="escucha"?"":Ke==="ficha"?c.code:Ke==="artista"?l.s:Ke==="senal"?r==="senal"?"senal":"senal-"+u.code:Ke==="kit"?d?"kit-"+d.s:"kit":r);if(location.pathname+location.hash!==h)try{history.replaceState(history.state,"",h)}catch{}let f=Ke==="ficha"?"catalogo":Ke==="artista"?"roster":Ke==="registro"?"escucha":Ke==="kit"?d?"roster":"contacto":Ke==="senal"?"editorial":Ke;document.querySelectorAll(".placa,.teclado a").forEach(S=>S.setAttribute("aria-current",S.dataset.s===f?"page":"false")),al(),de("menuN").textContent=Vf[f][0],de("menuT").textContent=Vf[f][1];let g=document.querySelector(".lateral"),y=g.hidden&&Ke==="escucha";g.hidden=Ke!=="escucha",y&&(g.scrollLeft=0),document.querySelector(".estado").hidden=Ke!=="escucha",de("lema").hidden=Ke!=="escucha";let p=de("panel");p.hidden=Ke==="escucha",Nr&&(Nr=!1,Be.encender().then(Ai)),Ke==="catalogo"&&p_(),Ke==="ficha"&&(M_(c),A_(de("panel"))),Ke==="roster"&&dp(),Ke==="artista"&&P_(l),Ke==="senal"&&(is=u.anio,pp(u)),Ke==="manifiesto"&&O_(),Ke==="contacto"&&mp(),Ke==="registro"&&Qf(),Ke==="editorial"&&N_(),Ke==="kit"&&F_(d);let m=Ke==="catalogo"&&zr.matches&&(o||qn==="mesa"),A=Ke==="ficha"&&zr.matches&&(o||qn==="mesa");os=null,p.classList.toggle("abierta",m||A),p.classList.toggle("depie",A),document.body.classList.toggle("con-depie",A),m&&B_(o),o&&Ke==="ficha"&&z_(),Ke!=="escucha"&&(p.style.animation="none",p.offsetWidth,p.style.animation="",Wc[Ke]===e&&(Gf=s),p.querySelector(".panel-cuerpo").scrollTop=Wc[e]===Ke?Gf:0),th.matches&&(Wc[Ke]===e&&(kf=t),scrollTo(0,Wc[e]===Ke?kf:0),document.querySelector(".barra").classList.remove("oculta")),Lr={catalogo:"p4",ficha:"hero",roster:"p3",artista:"p3",senal:"p2",registro:"p2",kit:"hero",editorial:"p2",manifiesto:"hero",contacto:"p5"}[Ke]||null,ju=Ke==="senal"?u.mes:0,Ma=.6,vp=o?"archivo"+(c?"-"+c.code:""):Ke==="escucha"?"":Ke==="ficha"?c.code:Ke==="artista"?"a-"+l.s:Ke==="senal"?"s-"+u.code:r}var G_=(()=>{let n=nt.filter(t=>t.fecha&&Date.now()-new Date(t.fecha+"T00:00:00")<6048e5),e=Di([...n,...nt.filter(t=>t.destacado)]).slice(0,3);return e.length?e:nt.slice(0,1)})(),Dr=(()=>{try{return JSON.parse(sessionStorage.getItem("au-cerrados")||"[]")}catch{return[]}})(),Gt=(()=>{let n=Date.now(),e=(()=>{try{return new URLSearchParams(location.search).get("demo")==="visita"}catch{return!1}})(),t=null;try{t=JSON.parse(sessionStorage.getItem("au-novedades")||"null")}catch{}if(t&&!e)return t;let i=null;try{i=JSON.parse(localStorage.getItem("au-visita")||"null")}catch{}try{localStorage.setItem("au-visita",JSON.stringify({t:n,rel:nt.map(a=>a.code),sen:Ft[0]?Ft[0].code:""}))}catch{}if(e&&(i={t:n-12*864e5,rel:nt.slice(1).map(a=>a.code),sen:"\u2014"}),!i||!i.t||n-i.t<6*36e5)return null;let s={desde:i.t,nuevos:nt.filter(a=>!(i.rel||[]).includes(a.code)).map(a=>a.code).slice(0,3),sen:Ft[0]&&i.sen&&Ft[0].code!==i.sen?Ft[0].code:null,emitidas:0,ahora:0,demo:e};try{sessionStorage.setItem("au-novedades",JSON.stringify(s))}catch{}return s})();async function H_(){if(!Gt)return;let n=[];if(Ta)try{let i=await fetch("/tx/registro",{cache:"no-store"});i.ok&&(n=await i.json())}catch{}let e=n.filter(i=>new Date(i.hasta).getTime()>Gt.desde).length+(Gt.demo?2:0),t=ih.filter(i=>!i.b).length+(Gt.demo?1:0);if(!(e===Gt.emitidas&&t===Gt.ahora)){Gt.emitidas=e,Gt.ahora=t;try{sessionStorage.setItem("au-novedades",JSON.stringify(Gt))}catch{}Dr.includes("visita")||xp()}}var W_=n=>{let e=Math.round(n/36e5),t=Math.round(n/864e5);return e<36?Xn(e,"hora","horas"):t<60?Xn(t,"d\xEDa","d\xEDas"):Xn(Math.round(t/30),"mes","meses")};function q_(){if(!Gt||Dr.includes("visita"))return"";let n=[...Gt.nuevos.map(e=>{let t=nt.find(i=>i.code===e);return t?`<li><i></i><a href="#${t.code}">Nuevo \xB7 ${t.code} \xB7 ${me(t.artist)} \u2014 ${me(Kt(t))}</a></li>`:""}),Gt.sen?`<li><i></i><a href="#senal">Se\xF1al ${me(Gt.sen)} en antena</a></li>`:"",Gt.emitidas?`<li><i></i><a href="#registro">${Gt.emitidas===1?"Se emiti\xF3 una transmisi\xF3n":`Se emitieron ${Gt.emitidas} transmisiones`} mientras no estabas</a></li>`:"",Gt.ahora?`<li><i></i><span>${Gt.ahora===1?"Hay una transmisi\xF3n":`Hay ${Gt.ahora} transmisiones`} emitiendo ahora mismo, en alg\xFAn punto del dial</span></li>`:""].filter(Boolean);return n.length?`<article class="ficha nota visita" data-c="visita" aria-label="Desde tu \xFAltima visita">
      <div class="eti"><span>Desde tu \xFAltima visita \xB7 hace ${W_(Date.now()-Gt.desde)}</span><span class="der"><button class="cierra" aria-label="Cerrar aviso">\xD7</button></span></div>
      <ul class="nov">${n.join("")}</ul></article>`:""}function xp(){let n=de("notas"),e=G_.filter(t=>!Dr.includes(t.code));n.innerHTML=q_()+e.map((t,i)=>`<article class="ficha nota" data-c="${t.code}" style="--o:${i}" aria-label="${i?"Lanzamiento destacado":"\xDAltimo lanzamiento destacado"}: ${me(t.artist)}">
      <div class="eti"><span>${t===nt[0]?"\xDAltimo lanzamiento":"Lanzamiento"}</span><span class="der"><span class="dest"><i></i>Destacado</span><button class="cierra" aria-label="Cerrar aviso">\xD7</button></span></div>
      <div class="cuerpo">${t.cover?`<img src="${me(t.cover)}"${kr(t.cover,"96px")} alt="Portada de ${me(t.title)}" width="96" height="96" decoding="async">`:`<span class="placa-cod" style="width:96px;height:96px;display:grid;place-items:center;background:#2c3242;font:700 11px var(--f-mono)">${t.code}</span>`}
        <div><div class="cod">${t.code} \xB7 ${me(t.format)} \xB7 ${t.year}</div><div class="art">${me(t.artist)}</div><div class="tit">${me(Kt(t))}</div></div></div>
      <div class="acciones">${t.soundcloud?`<a class="tecla" href="${me(t.soundcloud)}" target="_blank" rel="noopener">Escuchar en SoundCloud \u2197</a>`:t.spotify?`<a class="tecla" href="${me(t.spotify)}" target="_blank" rel="noopener">Escuchar en Spotify \u2197</a>`:""}<a class="tecla oscura" href="#${t.code}">Ficha</a></div></article>`).join(""),Gu(),n.parentNode.scrollLeft=0,n.querySelectorAll(".cierra").forEach(t=>t.onclick=()=>{let i=t.closest(".nota");Dr.push(i.dataset.c);try{sessionStorage.setItem("au-cerrados",JSON.stringify(Dr))}catch{}i.classList.add("fuera"),i.style.zIndex=20,setTimeout(()=>{i.remove(),Gu()},380),Gu(i)})}function Gu(n){let e=de("notas"),t=[...e.querySelectorAll(".nota")].filter(i=>i!==n);e.style.setProperty("--n",t.length||1),t.forEach((i,s)=>{i.style.setProperty("--i",s),i.classList.toggle("atras",s>0)})}var tl=864e5,qc=n=>new Date(n+"T00:00:00"),Ku=(()=>{try{return new URLSearchParams(location.search).get("demo")}catch{return null}})(),$_=(()=>{if(!Ku||!nt[0])return jt.proximos||[];let n={anuncio:22.4,revelado:8.6,fragmento:1.6}[Ku],e=new Date(Date.now()+(n||0)*tl),t=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return n?[{...nt[0],code:"AU0213",artist:"ARTISTA DE PRUEBA",title:"T\xCDTULO DE PRUEBA",fecha:t,presave:"#",fragmentos:nt[0].fragmentos||[]}]:[]})();function X_(){let n=Date.now(),e=$_[0];if(e){let o=(qc(e.fecha)-n)/tl;if(o<=30)return{fase:o>14?"anuncio":o>3?"revelado":"fragmento",r:e,obj:qc(e.fecha),d:o}}let t=Ku==="salida"?nt[0]:nt.find(o=>o.fecha&&n-qc(o.fecha)>=0&&n-qc(o.fecha)<tl);if(t)return{fase:"salida",r:t};let i=Ft[0];if(!i)return null;let s=i.mes%12+1,a=i.anio+(i.mes===12?1:0),r=new Date(a,s-1,1);return{fase:"reposo",obj:r>n?r:null,code:String(s).padStart(2,"0")+"_"+String(a).slice(-2)}}var Wf="",Qu=null,qf=null,$n=n=>String(n).padStart(2,"0"),$f=n=>n?n.split("-").reverse().join("."):"";function Xf(n){if(!n.obj)return`<div class="reloj msg" id="proxReloj"><b>${n.fase==="salida"?"YA DISPONIBLE":"EN PREPARACI\xD3N"}</b></div>`;let e=Math.max(0,n.obj-Date.now()),t=Math.floor(e/tl),i=Math.floor(e/36e5)%24,s=Math.floor(e/6e4)%60,a=Math.floor(e/1e3)%60;return`<div class="reloj${t<1?" rojo":""}" id="proxReloj" role="timer" aria-label="Faltan ${t} d\xEDas, ${i} horas y ${s} minutos"><b data-g="88">${$n(t)}</b><small>D</small><b data-g="88:88:88">${$n(i)}:${$n(s)}:${$n(a)}</b></div>`}var Y_=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function Z_(n){let e=de("proxImg");if(!e)return;let t=e.getContext("2d");clearInterval(qf);let i=n.fase==="reposo"?Ft[0]&&Ft[0].cover:n.fase!=="anuncio"&&n.r.cover;if(!i){let o=()=>{let c=t.createImageData(48,48);for(let l=0;l<c.data.length;l+=4)c.data[l]=207,c.data[l+1]=224,c.data[l+2]=255,c.data[l+3]=Math.random()<.33?190:0;t.putImageData(c,0,0)};o(),qf=setInterval(()=>{!document.hidden&&Ke==="escucha"&&o()},140);return}let s=n.fase==="revelado"?Math.round(6+(1-Math.max(0,Math.min(1,(n.d-4)/10)))*42):48,a=new Image;a.onload=()=>{let o=document.createElement("canvas");o.width=o.height=s;let c=o.getContext("2d",{willReadFrequently:!0});c.drawImage(a,0,0,s,s);let l=c.getImageData(0,0,s,s).data,u=t.createImageData(48,48);for(let d=0;d<48;d++)for(let h=0;h<48;h++){let f=(Math.floor(d*s/48)*s+Math.floor(h*s/48))*4;if((.3*l[f]+.59*l[f+1]+.11*l[f+2])/255>(Y_[d%4*4+h%4]+.5)/16){let y=(d*48+h)*4;u.data[y]=207,u.data[y+1]=224,u.data[y+2]=255,u.data[y+3]=235}}t.putImageData(u,0,0)};let r=Zu(i,320);r&&(a.onerror=()=>{a.onerror=null,a.src=i}),a.src=r||i}function _p(){let n=de("proximo"),e=X_();if(!e){n.innerHTML="",n.hidden=!0;return}let t=e.fase+(e.r?e.r.code:"")+(e.fase==="fragmento"||e.fase==="revelado"?Math.ceil(e.d):"");if(t===Wf){let h=de("proxReloj");h&&e.obj&&(h.outerHTML=Xf(e));return}Wf=t;let i=e.r,s=e.fase!=="reposo",a=i&&i.fragmentos?i.fragmentos.length:0,r=e.fase==="fragmento"&&a?Math.min(a-1,e.d>2?0:e.d>1?1:2):-1;Qu=r>=0?i.fragmentos[r]:null;let o=e.fase==="reposo"?`PR\xD3XIMA SE\xD1AL \xB7 ${e.code} \xB7 LANZAMIENTOS, HALLAZGOS Y OBSESIONES DEL MES`:e.fase==="anuncio"?`SE\xD1AL ENTRANTE \xB7 ${i.code} \xB7 SALE EL ${$f(i.fecha)}`:e.fase==="salida"?`${i.code} \xB7 ${i.artist} \u2014 ${Kt(i)} \xB7 DESDE HOY`:`${i.code} \xB7 ${i.artist} \u2014 ${Kt(i)} \xB7 ${$f(i.fecha)}`,c=(h,f,g="")=>f?`<a class="bt" href="${me(f)}"${/^https?:/.test(f)?' target="_blank" rel="noopener"':""}${g}>${h}</a>`:`<span class="bt" aria-disabled="true">${h}</span>`,l=Qu?`<button class="bt" type="button" id="bFrag">\u25B6 FRAG ${r+1}/${a}</button>`:e.fase==="salida"?c("ESCUCHAR \u2197",i.soundcloud||i.spotify):c("FRAGMENTO"),u=c("PRESAVE"+((e.fase==="revelado"||e.fase==="fragmento")&&i.presave?" \u2197":""),(e.fase==="revelado"||e.fase==="fragmento")&&i.presave),d=e.fase==="reposo"?c("SE\xD1AL","#senal"):e.fase==="salida"?c("FICHA","#"+i.code):c("FICHA");n.classList.toggle("activo",s),n.innerHTML=`<div class="cab"><span>AU-06 \xB7 ${{anuncio:"Anuncio",revelado:"Revelado",fragmento:"Fragmento",salida:"Salida",reposo:"Reposo"}[e.fase]}</span><i class="piloto${s?" on":""}" aria-hidden="true"></i></div>
    <div class="lcd"><canvas id="proxImg" width="48" height="48" aria-hidden="true"></canvas><div><div class="lin" id="proxLin"><span>${me(o)}</span></div>${Xf(e)}</div></div>
    <div class="teclas">${l}${u}${d}<span class="altavoz" aria-hidden="true"></span></div>`,de("bFrag")&&(de("bFrag").onclick=J_),Z_(e),requestAnimationFrame(()=>{let h=de("proxLin");if(h&&h.scrollWidth>h.clientWidth+2){let f=h.firstChild;f.textContent=f.textContent+" \xB7 "+f.textContent+" \xB7 ",h.classList.add("mueve"),h.style.setProperty("--dur",Math.round(f.scrollWidth/2/26)+"s")}}),n.hidden=!1}var ns=null,Hu=!1;function J_(){let n=de("bFrag");if(ns&&!ns.paused){ns.pause();return}ns=new Audio(Qu),ns.preload="auto",Be.on&&(Be.apagar(),Hu=!0,Ai());let e=()=>{n&&(n.textContent=n.textContent.replace("\u25A0","\u25B6")),Hu&&(Hu=!1,Be.encender().then(Ai))};ns.onended=e,ns.onpause=e,ns.play().then(()=>{n&&(n.textContent=n.textContent.replace("\u25B6","\u25A0"))}).catch(e)}_p();setInterval(()=>{Ke==="escucha"&&!document.hidden&&_p()},1e3);jf().then(H_);setInterval(jf,300*1e3);xp();{let n=de("bIG"),e=(jt.contacto||{}).instagram||n.href,t=e.replace(/\/+$/,"").split("/").pop();n.href=e,n.querySelector("small").textContent="@"+t+" \u2197",/Android/i.test(navigator.userAgent)&&n.addEventListener("click",i=>{i.preventDefault(),location.href=`intent://instagram.com/_u/${t}/#Intent;package=com.instagram.android;scheme=https;S.browser_fallback_url=${encodeURIComponent(e)};end`})}(jt.manifiesto||{}).titular&&(de("lemaT").textContent=jt.manifiesto.titular);{let n=de("panel"),e=null,t=()=>{e&&(e.classList.remove("en-mano"),e.style.removeProperty("--rx"),e.style.removeProperty("--ry"),e=null)};n.addEventListener("pointermove",i=>{if(i.pointerType!=="mouse"||rs.matches)return;let s=i.target instanceof Element&&i.target.matches(".fl > img.portada")?i.target:null;if(s!==e&&t(),!s)return;let a=s.getBoundingClientRect(),r=(i.clientX-a.left)/a.width-.5,o=(i.clientY-a.top)/a.height-.5;e=s,s.classList.add("en-mano"),s.style.setProperty("--ry",(r*9).toFixed(2)+"deg"),s.style.setProperty("--rx",(-o*9).toFixed(2)+"deg")}),n.addEventListener("pointerleave",t)}new MutationObserver(()=>{matchMedia("(max-width:820px)").matches||de("panel").querySelectorAll(":scope > .panel-cuerpo:not([tabindex])").forEach(n=>{n.tabIndex=0})}).observe(de("panel"),{childList:!0});addEventListener("hashchange",uh);addEventListener("popstate",n=>{location.hash||uh(n)});uh();window.__directo&&Ke!=="escucha"&&(de("encendido").style.transition="none",sl(!1));window.__carga?.mark("datos",nt.length+" REF. \xB7 SE\xD1AL "+(Ft[0]?Ft[0].code:"\u2014"));addEventListener("resize",al);requestAnimationFrame(al);var hh=n=>{de("faja").classList.toggle("abierta",n),de("velo").classList.toggle("on",n),de("bMenu").setAttribute("aria-expanded",n),n&&al()};de("bMenu").onclick=()=>hh(!de("faja").classList.contains("abierta"));de("velo").onclick=()=>hh(!1);document.querySelectorAll(".faja a").forEach(n=>n.addEventListener("click",()=>setTimeout(()=>hh(!1),250)));var Wu=matchMedia("(pointer: coarse)").matches||innerWidth<821,Is=-3*Math.PI/6,yp=0;Vr.cola.length>=3&&!Be.on&&!as&&(Be.canal=-1,Is=nl(-1),Ot());try{let n=localStorage.getItem("au-canal"),e=+n;n!==null&&!Be.on&&Number.isInteger(e)&&e<=11&&e>=(as||!Vr.cola.length?0:-1)&&(Be.canal=e,Is=nl(e),Ot())}catch{}{let n=document.querySelector(".lateral"),e=6e3,t=4500,i=performance.now(),s=0,a=0,r=()=>{i=performance.now()};["pointerdown","touchstart","wheel"].forEach(o=>n.addEventListener(o,r,{passive:!0})),n.addEventListener("scroll",()=>{performance.now()>a&&r()},{passive:!0}),setInterval(()=>{let o=performance.now();if(!th.matches||rs.matches||document.hidden||n.hidden||Ke!=="escucha"||!ri||document.body.classList.contains("desmontada")){i=o;return}if(o-i<e||o-s<t)return;let c=[...n.querySelectorAll(":scope > :not(.notas), .nota")].filter(f=>f.offsetWidth).sort((f,g)=>f.offsetLeft-g.offsetLeft);if(c.length<2)return;let l=n.scrollLeft,u=c[0].offsetLeft,d=n.scrollWidth-n.clientWidth,h=l>=d-4?0:c.findIndex(f=>f.offsetLeft-u>l+8);h<0&&(h=0),s=o,a=o+2500,n.scrollTo({left:Math.min(d,c[h].offsetLeft-u),behavior:"smooth"})},1e3)}await new Promise(n=>{let e=()=>requestAnimationFrame(()=>setTimeout(n,0));window.__directo?setTimeout(e,500):e()});e:{let q=function(xe,je){let at=je*400/2160,gt=Math.min(460,Math.max(240,xe*.26)),Ht=at+gt/2;V.position.copy(ne),V.lookAt(re),V.updateMatrixWorld();let Qt=Math.tan(on.degToRad(V.fov/2));for(let[Bt,en]of Object.entries(k)){let rt=L[Bt][0];ae[Bt]||(rt.updateMatrixWorld(!0),le.setFromObject(rt).getSize(ce),ae[Bt]=[ce.x/rt.scale.x,ce.y/rt.scale.x]),$.copy(en.p0).project(V),$.x=Ht/xe*2-1,$.unproject(V),en.p.copy($);let ct=je/2/((V.position.z-en.p.z)*Qt);en.s=Math.min(en.s0,gt*.86/(ae[Bt][0]*ct),(je-170)*.72/(ae[Bt][1]*ct))}},E=function(xe,je){V.position.copy(ne),V.lookAt(re),V.updateMatrixWorld();let at=Math.tan(on.degToRad(V.fov/2)),gt=N==="alto",Ht=je*400/2160,Qt=gt?0:Ht+50,Bt=gt?xe:xe-50,en=gt?196:je*.2,rt=gt?je-150:je*.72,ct=J.length;W.classList.toggle("alto",gt);for(let[_t]of J){let Rt=Q[_t],It=L[_t][0];if(!F[_t]){let Ps=It.quaternion.clone(),T=It.scale.x,K=It.position.clone();It.quaternion.copy(Rt.q),It.scale.setScalar(1),It.position.set(0,0,0),It.updateMatrixWorld(!0),le.setFromObject(It).getSize(ce),F[_t]=[ce.x,ce.y],It.quaternion.copy(Ps),It.scale.setScalar(T),It.position.copy(K),It.updateMatrixWorld(!0)}let Bn=gt?(rt-en)/ct:(Bt-Qt)/ct,wn=gt?xe*.27:Qt+(Rt.i+.5)*Bn,zn=gt?en+(Rt.i+.5)*Bn:(en+rt)/2-10,ls=gt?xe*.32:Math.min(Bn*.78,260),Zn=gt?Bn*.74:(rt-en)*.62;$.set(0,0,gt?520:0).project(V),$.x=wn/xe*2-1,$.y=-(zn/je*2-1),$.unproject(V),Rt.p.copy($);let cn=je/2/((V.position.z-Rt.p.z)*at);Rt.s=Math.min(ls/(F[_t][0]*cn),Zn/(F[_t][1]*cn)),Rt.dx=gt?xe*.5-wn:0,Rt.dy=gt?0:(en+rt)/2-10+Zn/2+26-zn}},j=function(){let xe=innerWidth,je=innerHeight;N=xe/je<.85?"alto":"ancho";let at=_[N];i.setSize(xe,je,!1),V.aspect=xe/je,V.fov=at.fov,V.updateProjectionMatrix(),ne.set(...at.cam),re.set(...at.look);for(let[gt,[Ht]]of Object.entries(L)){let[Qt,Bt]=at.p[gt];Ht.position.set(...Qt),Ht.scale.setScalar(Bt),H[gt]={q:H[gt]?.q||Ht.quaternion.clone(),p:Ht.position.clone(),s:Bt}}N==="ancho"&&q(xe,je),E(xe,je)},ve=function(xe){x.set(xe.clientX/innerWidth*2-1,-(xe.clientY/innerHeight)*2+1),ie.setFromCamera(x,V);for(let[je,[at]]of Object.entries(L))if(ie.intersectObject(at,!0).length)return je;return null},fn=function(xe){if(En.matches&&!Fn.hidden&&fn.uno){if(fn.tap||(fn.tap=xe),xe-fn.tap>1600){Ye=xe,document.hidden||requestAnimationFrame(fn);return}}else fn.tap=0;let je=Math.max(0,(xe-Ye)/1e3),at=Math.min(.05,je);Ye=xe,!Pe&&ri&&xe-yp>3e3&&je<.5&&(Ie++,_e+=je,Ie===120&&(_e/Ie>1/28?document.body.classList.contains("sin-enfoque")?(s=Math.max(1,s*.8),i.setPixelRatio(s),Pe=s<=1):document.body.classList.add("sin-enfoque"):Pe=!0,Ie=0,_e=0));let gt=ri,Ht=De?0:(xe-Se)/1e3,Qt=Ht/30%1;if(mt+=((gt?1:.45)-mt)*Math.min(1,at*1.6),i.toneMappingExposure=mt,We+=(Be.nivel()-We)*Math.min(1,at*12),Ma=Math.max(0,Ma-at*.9),Ne=Math.max(0,Ne-at*4),Ke!=="escucha"||!gt?(yn&&b(0),Xe=xe):!De&&!Je&&xe-Xe>(N==="alto"?Re.esperaMovil:Re.espera)&&(Je=!0,it=xe,document.body.classList.add("en-reposo")),Je){let rt=(xe-it)/1e3%Re.ciclo,ct=rt>2&&rt<2+Re.abierta?1:0;ct!==yn&&b(ct);let _t=(xe-it)/1e3;I.set(Math.sin(_t*.21)*.55,Math.sin(_t*.13+1)*.35)}D+=(yn-D)*Math.min(1,at*3.2),Math.abs(yn-D)<5e-4&&(D=yn),oe.x+=(I.x-oe.x)*Math.min(1,at*2.5),oe.y+=(I.y-oe.y)*Math.min(1,at*2.5);let Bt=gt?1:.12;for(let[rt,[ct]]of Object.entries(L)){let _t=ge[rt],Rt=H[rt],It=Qt*Bt,Bn=It-_t.warp*(Math.sin(ye*(It-_t.ph))+Math.sin(ye*_t.ph))/ye;be.setFromAxisAngle(new Z(..._t.axis),_t.dir*ye*Bn),Te.setFromAxisAngle(new Z(..._t.sway),w(_t.sa)*Math.sin(ye*(_t.bk*It)+_t.bp)),ct.quaternion.copy(Rt.q).multiply(Te).multiply(be),rt==="hero"&&(Ve.set(oe.y*.12,oe.x*.22,0),B.setFromEuler(Ve),ct.quaternion.premultiply(B));let wn=rt==="p2"||rt==="hero"?Math.sin(Ma*Math.PI)*(rt==="hero"?.35:.6):0;wn&&(B.setFromAxisAngle(new Z(0,1,0),wn),ct.quaternion.multiply(B)),ct.position.set(Rt.p.x,Rt.p.y+_t.bob*(Math.sin(ye*_t.bk*It+_t.bp)-Math.sin(_t.bp))-(rt==="p5"?Ne*10:0),Rt.p.z),ct.scale.setScalar(Rt.s);let zn=k[rt],ls=Lr&&N==="ancho";if(C[rt]=on.clamp(C[rt]+((ls&&Lr===rt?1:0)-C[rt])*Math.min(1,at*2.2),0,1),C[rt]>.001&&zn?(ct.position.lerp(zn.p,C[rt]),zn.q&&ct.quaternion.slerp(zn.q,C[rt]),ct.scale.setScalar(on.lerp(Rt.s,zn.s,C[rt]))):ls&&Lr!==rt&&(ct.position.z-=1300*P),rt==="p3"){let cn=Math.min(1,We*6),Ps=C[rt]>.001&&zn?on.lerp(Rt.s,zn.s,C[rt]):Rt.s;z.forEach(([T,K])=>{T.position.z=K+cn*9}),ct.scale.setScalar(Ps*(1+cn*.025))}let Zn=Q[rt];if(D>.001&&!ls){let cn=on.clamp(D*1.36-Zn.i*.09,0,1);cn=cn*cn*(3-2*cn),ct.position.lerp(Zn.p,cn),ct.quaternion.slerp(Zn.q,cn),ct.scale.setScalar(on.lerp(ct.scale.x,Zn.s,cn)),Zn.k=cn}else Zn.k=0}P=on.clamp(P+((Lr&&N==="ancho"?1:0)-P)*Math.min(1,at*1.8),0,1),G.cursores&&G.cursores.forEach(([rt,ct],_t)=>{let Rt=G.TR0+Math.round(se[_t]*12)*G.STEP;rt.position.y+=(Rt-rt.position.y)*Math.min(1,at*6),ct.position.y=rt.position.y});let en=ju?-ju*Math.PI/6:Is;if(yt+=(en-yt)*Math.min(1,at*3),R&&(R.rotation.z=yt),V.position.set(ne.x+oe.x*40,ne.y-oe.y*22,ne.z),V.lookAt(re),i.render(a,V),D>.001||fn.rot){fn.rot=D>.001;for(let[rt]of J){let ct=Q[rt],_t=L[rt][0];$.copy(_t.position).project(V);let Rt=($.x+1)/2*innerWidth+ct.dx*ct.k,It=(1-$.y)/2*innerHeight+ct.dy*ct.k,Bn=Math.max(0,ct.k*2.5-1.5);ct.a.style.transform=`translate(${Rt.toFixed(1)}px,${It.toFixed(1)}px)`,ct.a.style.opacity=Bn.toFixed(2);let wn=Bn>.6;wn!==ct.vivo&&(ct.vivo=wn,ct.a.classList.toggle("on",wn),ct.a.tabIndex=wn?0:-1)}}fn.uno||(fn.uno=!0,window.__carga?.mark("escena","EN DIRECTO")),document.hidden||requestAnimationFrame(fn)},n=de("escena"),e=xe=>{try{return xe&&localStorage.setItem("au-grafica",xe),localStorage.getItem("au-grafica")}catch{return null}},t=e(/[?&]grafica=si/.test(location.search)?"si":"")==="si"||/[?&]grafica=si/.test(location.search),i=null;if(t||!(navigator.webdriver||e()==="no"))try{if(i=new zc({canvas:n,antialias:!0,alpha:!0,failIfMajorPerformanceCaveat:!t}),!t){let xe=i.getContext(),je=xe.getExtension("WEBGL_debug_renderer_info"),at=je?String(xe.getParameter(je.UNMASKED_RENDERER_WEBGL)):"";/swiftshader|llvmpipe|software|basic render/i.test(at)&&(i.dispose(),i=null,e("no"))}}catch{i=null,e("no")}if(!i){document.body.classList.add("sin-escena"),window.__carga?.mark("piezas","SIN GR\xC1FICA"),window.__carga?.mark("escena","IMAGEN FIJA"),window.__listo=!0;let xe=document.createElement("button");xe.type="button",xe.className="tecla",xe.id="bGrafica",xe.textContent="Escena 3D en pausa \xB7 Activar",xe.onclick=()=>{try{localStorage.setItem("au-grafica","si")}catch{}location.reload()},document.body.appendChild(xe);break e}let s=Math.min(devicePixelRatio,Wu?2:1.75);i.setPixelRatio(s),i.setClearColor(0,0),i.toneMapping=pr,i.toneMappingExposure=.45,i.shadowMap.enabled=!0,i.shadowMap.type=ys;let a=new gs;a.environment=new va(i).fromScene(new Gc,.04).texture,a.environmentIntensity=.5,a.fog=new Ha(13883872,900,5600);let r=document.createElement("canvas");r.width=4,r.height=512;let o=r.getContext("2d"),c=o.createLinearGradient(0,0,0,512);c.addColorStop(0,"#9dafc5"),c.addColorStop(.7,"#d3d9e0"),c.addColorStop(1,"#d3d9e0"),o.fillStyle=c,o.fillRect(0,0,4,512);let l=new qi(r);l.colorSpace=Yt,a.background=l;let u=170,d=16,h=2048,f=h/(u*d),g=document.createElement("canvas");g.width=g.height=h;let y=g.getContext("2d");y.fillStyle="#93a3b8",y.fillRect(0,0,h,h);let p=26,m=()=>(p=p*16807%2147483647)/2147483647;for(let xe=0;xe<d;xe++)for(let je=0;je<d;je++){let at=(xe+.5)*u*f,gt=(je+.5)*u*f,Ht=27*f;m()<.2?(y.fillStyle="rgba(40,58,88,0.35)",y.beginPath(),y.arc(at+3*f,gt+5*f,Ht*1.06,0,7),y.fill(),y.fillStyle="#f6f6f3",y.beginPath(),y.arc(at,gt,Ht,0,7),y.fill()):(y.strokeStyle="rgba(40,58,88,0.16)",y.lineWidth=2.2*f,y.beginPath(),y.arc(at,gt,Ht,0,7),y.stroke())}let A=new qi(g);A.colorSpace=Yt,A.wrapS=A.wrapT=js,A.anisotropy=i.capabilities.getMaxAnisotropy();let S=6e4;A.repeat.set(S/(u*d),S/(u*d));let v=new bt(new Ii(S,S),new Ln({map:A,roughness:.85}));v.rotation.x=-Math.PI/2,v.position.y=-400,v.receiveShadow=!0,a.add(v),await gf();let M=Sf,w=on.degToRad,L={hero:[xf(M),[-150,-40,0],[-16,28,0],1.45],p2:[_f(10),[-560,250,-520],[22,18,-6],1.05],p3:[yf(),[230,230,-620],[20,-14,10],1.05],p4:[Af(),[150,-250,-760],[-8,16,96],1.1],p5:[Mf(M),[-560,-235,-260],[6,-14,-5],.9]},_={ancho:{fov:42,cam:[-120,-150,1150],look:[-120,-90,0],p:{hero:[[-150,-40,0],1.45],p2:[[-560,250,-520],1.05],p3:[[230,230,-620],1.05],p4:[[150,-250,-760],1.1],p5:[[-560,-235,-260],.9]}},alto:bf};for(let[,[xe,je,at,gt]]of Object.entries(L))xe.position.set(...je),xe.rotation.set(w(at[0]),w(at[1]),w(at[2])),xe.scale.setScalar(gt),a.add(xe);window.__carga?.mark("piezas","5 \xB7 OK");let R=L.p2[0].children.find(xe=>xe.isGroup);R&&(R.rotation.z=Is);let O=null;L.p3[0].traverse(xe=>{!O&&xe.userData&&xe.userData.Rp&&(O=xe)});let z=O?[1,2].map(xe=>O.children[xe]).filter(Boolean).map(xe=>[xe,xe.position.z]):[],G=L.p4[0].userData,se=[4,9,7].map(xe=>xe/12);op=xe=>{se=xe};let k={p4:{p:new Z(-520,-40,140),q:new Wt().setFromEuler(new sn(-.06,.32,0)),s:1.4},hero:{p:new Z(-470,10,40),q:null,s:.82},p5:{p:new Z(-500,-10,200),q:new Wt().setFromEuler(new sn(-.1,.34,.02)),s:1.15},p2:{p:new Z(-500,0,160),q:new Wt().setFromEuler(new sn(-.05,.36,0)),s:1.15},p3:{p:new Z(-505,-10,140),q:new Wt().setFromEuler(new sn(-.08,.34,.04)),s:1.25}};for(let xe of Object.values(k))xe.p0=xe.p.clone(),xe.s0=xe.s;let $=new Z,le=new Gn,ce=new Z,ae={},J=[["hero","manifiesto","AU-01","Manifiesto"],["p2","editorial","AU-02","Editorial"],["p3","roster","AU-03","Roster"],["p4","catalogo","AU-04","Cat\xE1logo"],["p5","contacto","AU-05","Contacto"]],U=xe=>k[xe]&&k[xe].q||new Wt().setFromEuler(new sn(-.08,.3,0)),Q={},F={},W=de("despiece"),X=de("bDesp"),D=0;J.forEach(([xe,je,at,gt],Ht)=>{let Qt=document.createElement("a");Qt.href="#"+je,Qt.tabIndex=-1,Qt.innerHTML=`<span>${at}</span><b>${gt}</b>`,W.appendChild(Qt),Q[xe]={p:new Z,q:U(xe),s:1,a:Qt,i:Ht,sec:je,dx:0,dy:0}});let b=xe=>{xe=xe?1:0,yn!==xe&&(yn=xe),X.setAttribute("aria-pressed",xe?"true":"false"),X.lastChild.textContent=xe?"Montar":"Desmontar",document.body.classList.toggle("desmontada",!!xe)};X.hidden=!1,X.onclick=()=>b(yn<.5);let C={hero:0,p2:0,p3:0,p4:0,p5:0},P=0,N="ancho",Y=new la(16777215,1.7);Y.position.set(-500,1300,700),Y.target.position.set(0,-400,-300),a.add(Y.target),Y.castShadow=!0,Y.shadow.mapSize.set(2048,2048),Y.shadow.radius=6,Y.shadow.bias=-4e-4,Y.shadow.normalBias=.8,Object.assign(Y.shadow.camera,{left:-1400,right:1400,top:1400,bottom:-1400,near:100,far:4500}),a.add(Y);let ee=new la(14674165,.5);ee.position.set(300,-120,260),a.add(ee);let V=new tn(42,1,5,4e4),ne=new Z,re=new Z,H={};j(),addEventListener("resize",j);let ge={hero:{axis:[0,0,1],dir:-1,warp:0,ph:0,bob:9,bk:1,bp:0,sway:[0,0,1],sa:1.5},p2:{axis:[0,1,0],dir:-1,warp:.55,ph:.18,bob:16,bk:2,bp:1.3,sway:[1,0,0],sa:3},p3:{axis:[1,0,0],dir:-1,warp:.5,ph:.62,bob:14,bk:1,bp:2.6,sway:[0,0,1],sa:3},p4:{axis:[0,1,0],dir:1,warp:.6,ph:.4,bob:12,bk:3,bp:4.1,sway:[0,0,1],sa:2.5},p5:{axis:[0,1,0],dir:1,warp:.45,ph:.85,bob:15,bk:2,bp:5.2,sway:[1,0,0],sa:3}},ye=Math.PI*2,be=new Wt,Te=new Wt,B=new Wt,Ve=new sn,De=matchMedia("(prefers-reduced-motion: reduce)").matches,I=new Ce(0,0),x=new Ce,ie=new fr,oe={x:0,y:0},fe={p5:"AU-05 \xB7 Pulsador \xB7 reproducir / pausar",p2:"AU-02 \xB7 Sintonizador \xB7 cambiar de canal",hero:"AU-01 \xB7 aurality",p3:"AU-03 \xB7 Altavoz \xB7 late con la radio",p4:"AU-04 \xB7 Corredor \xB7 filtros del cat\xE1logo (fase 2)"},Me=de("rotulo"),Ee=null;addEventListener("pointermove",xe=>{if(I.set(xe.clientX/innerWidth*2-1,xe.clientY/innerHeight*2-1),!ri||xe.target!==document.body&&xe.target!==n&&!xe.target.classList.contains("grano")){Ee=null,Me.classList.remove("on"),n.style.cursor="";return}Ee=ve(xe),n.style.cursor=Ee&&D>.6||Ee==="p5"||Ee==="p2"?"pointer":"",Ee&&D<.6?(Me.textContent=fe[Ee],Me.style.left=xe.clientX+"px",Me.style.top=xe.clientY+"px",Me.classList.add("on")):Me.classList.remove("on")}),n.style.pointerEvents="auto",addEventListener("click",xe=>{if(!ri||xe.target!==n&&xe.target!==document.body)return;let je=ve(xe);if(D>.6){je&&Q[je]&&(location.hash=Q[je].sec);return}je==="p5"&&(Or(),Ne=1),je==="p2"&&cs(Be.canal+1),Wu&&je&&(Me.textContent=fe[je],Me.style.left=Math.min(xe.clientX,innerWidth-260)+"px",Me.style.top=xe.clientY+"px",Me.classList.add("on"),clearTimeout(Me.t),Me.t=setTimeout(()=>Me.classList.remove("on"),1800))});let Ae=0;addEventListener("wheel",xe=>{Ke!=="escucha"||!ri||xe.target!==n&&xe.target!==document.body||(yn=on.clamp(yn+xe.deltaY/520,0,1),clearTimeout(Ae),Ae=setTimeout(()=>b(yn>.5),240))},{passive:!0});let we=new Map,He=null;Wu&&(n.style.touchAction="none"),n.addEventListener("pointerdown",xe=>{if(xe.pointerType==="touch"&&(we.set(xe.pointerId,[xe.clientX,xe.clientY]),we.size===2&&Ke==="escucha"&&ri)){let[je,at]=[...we.values()];He={d:Math.hypot(je[0]-at[0],je[1]-at[1])||1,a:yn}}}),n.addEventListener("pointermove",xe=>{if(we.has(xe.pointerId)&&(we.set(xe.pointerId,[xe.clientX,xe.clientY]),He&&we.size===2)){let[je,at]=[...we.values()];yn=on.clamp(He.a+(Math.hypot(je[0]-at[0],je[1]-at[1])/He.d-1)*1.1,0,1)}});let Le=xe=>{we.delete(xe.pointerId)&&He&&we.size<2&&(He=null,b(yn>.5))};n.addEventListener("pointerup",Le),n.addEventListener("pointercancel",Le),addEventListener("keydown",xe=>{xe.key==="Escape"&&yn&&Ke==="escucha"&&b(0)});let Re={espera:45e3,esperaMovil:2e4,ciclo:30,abierta:10},Xe=performance.now(),Je=!1,it=0,te=()=>{Xe=performance.now(),Je&&(Je=!1,document.body.classList.remove("en-reposo"))};["pointermove","pointerdown","keydown","wheel","touchstart"].forEach(xe=>addEventListener(xe,te,{passive:!0}));let Ie=0,_e=0,Pe=!1,Ne=0,Se=performance.now(),Ye=Se,We=0,yt=Is,mt=.45,En=matchMedia("(max-width:820px)"),Fn=document.getElementById("panel");requestAnimationFrame(fn),document.addEventListener("visibilitychange",()=>{document.hidden||(Ye=performance.now(),requestAnimationFrame(fn))}),window.__listo=!0}(function n(){let e=Be.nivel(),t=Math.min(24,Math.round(Math.pow(Math.min(1,e*3.2),.85)*24)),i=Yf.children;for(let s=0;s<24;s++)i[s].classList.toggle("on",s<t),i[s].classList.toggle("pico",s>=21);requestAnimationFrame(n)})();
