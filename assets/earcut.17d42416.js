var N=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function a(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var x=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,x.get?x:{enumerable:!0,get:function(){return e[n]}})}),t}var E={exports:{}};E.exports=P;E.exports.default=P;function P(e,t,n){n=n||2;var x=t&&t.length,r=x?t[0]*n:e.length,u=A(e,0,r,n,!0),f=[];if(!u||u.next===u.prev)return f;var i,l,y,c,h,p,v;if(x&&(u=V(e,t,u,n)),e.length>80*n){i=y=e[0],l=c=e[1];for(var o=n;o<r;o+=n)h=e[o],p=e[o+1],h<i&&(i=h),p<l&&(l=p),h>y&&(y=h),p>c&&(c=p);v=Math.max(y-i,c-l),v=v!==0?1/v:0}return w(u,f,n,i,l,v),f}function A(e,t,n,x,r){var u,f;if(r===k(e,t,n,x)>0)for(u=t;u<n;u+=x)f=z(u,e[u],e[u+1],f);else for(u=n-x;u>=t;u-=x)f=z(u,e[u],e[u+1],f);return f&&T(f,f.next)&&(M(f),f=f.next),f}function g(e,t){if(!e)return e;t||(t=e);var n=e,x;do if(x=!1,!n.steiner&&(T(n,n.next)||s(n.prev,n,n.next)===0)){if(M(n),n=t=n.prev,n===n.next)break;x=!0}else n=n.next;while(x||n!==t);return t}function w(e,t,n,x,r,u,f){if(!!e){!f&&u&&U(e,x,r,u);for(var i=e,l,y;e.prev!==e.next;){if(l=e.prev,y=e.next,u?B(e,x,r,u):D(e)){t.push(l.i/n),t.push(e.i/n),t.push(y.i/n),M(e),e=y.next,i=y.next;continue}if(e=y,e===i){f?f===1?(e=G(g(e),t,n),w(e,t,n,x,r,u,2)):f===2&&R(e,t,n,x,r,u):w(g(e),t,n,x,r,u,1);break}}}}function D(e){var t=e.prev,n=e,x=e.next;if(s(t,n,x)>=0)return!1;for(var r=e.next.next;r!==e.prev;){if(Z(t.x,t.y,n.x,n.y,x.x,x.y,r.x,r.y)&&s(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function B(e,t,n,x){var r=e.prev,u=e,f=e.next;if(s(r,u,f)>=0)return!1;for(var i=r.x<u.x?r.x<f.x?r.x:f.x:u.x<f.x?u.x:f.x,l=r.y<u.y?r.y<f.y?r.y:f.y:u.y<f.y?u.y:f.y,y=r.x>u.x?r.x>f.x?r.x:f.x:u.x>f.x?u.x:f.x,c=r.y>u.y?r.y>f.y?r.y:f.y:u.y>f.y?u.y:f.y,h=H(i,l,t,n,x),p=H(y,c,t,n,x),v=e.prevZ,o=e.nextZ;v&&v.z>=h&&o&&o.z<=p;){if(v!==e.prev&&v!==e.next&&Z(r.x,r.y,u.x,u.y,f.x,f.y,v.x,v.y)&&s(v.prev,v,v.next)>=0||(v=v.prevZ,o!==e.prev&&o!==e.next&&Z(r.x,r.y,u.x,u.y,f.x,f.y,o.x,o.y)&&s(o.prev,o,o.next)>=0))return!1;o=o.nextZ}for(;v&&v.z>=h;){if(v!==e.prev&&v!==e.next&&Z(r.x,r.y,u.x,u.y,f.x,f.y,v.x,v.y)&&s(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;o&&o.z<=p;){if(o!==e.prev&&o!==e.next&&Z(r.x,r.y,u.x,u.y,f.x,f.y,o.x,o.y)&&s(o.prev,o,o.next)>=0)return!1;o=o.nextZ}return!0}function G(e,t,n){var x=e;do{var r=x.prev,u=x.next.next;!T(r,u)&&j(r,x,x.next,u)&&F(r,u)&&F(u,r)&&(t.push(r.i/n),t.push(x.i/n),t.push(u.i/n),M(x),M(x.next),x=e=u),x=x.next}while(x!==e);return g(x)}function R(e,t,n,x,r,u){var f=e;do{for(var i=f.next.next;i!==f.prev;){if(f.i!==i.i&&Y(f,i)){var l=C(f,i);f=g(f,f.next),l=g(l,l.next),w(f,t,n,x,r,u),w(l,t,n,x,r,u);return}i=i.next}f=f.next}while(f!==e)}function V(e,t,n,x){var r=[],u,f,i,l,y;for(u=0,f=t.length;u<f;u++)i=t[u]*x,l=u<f-1?t[u+1]*x:e.length,y=A(e,i,l,x,!1),y===y.next&&(y.steiner=!0),r.push(X(y));for(r.sort($),u=0;u<r.length;u++)n=J(r[u],n),n=g(n,n.next);return n}function $(e,t){return e.x-t.x}function J(e,t){var n=K(e,t);if(!n)return t;var x=C(n,e),r=g(n,n.next);return g(x,x.next),t===n?r:t}function K(e,t){var n=t,x=e.x,r=e.y,u=-1/0,f;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){var i=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(i<=x&&i>u){if(u=i,i===x){if(r===n.y)return n;if(r===n.next.y)return n.next}f=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!f)return null;if(x===u)return f;var l=f,y=f.x,c=f.y,h=1/0,p;n=f;do x>=n.x&&n.x>=y&&x!==n.x&&Z(r<c?x:u,r,y,c,r<c?u:x,r,n.x,n.y)&&(p=Math.abs(r-n.y)/(x-n.x),F(n,e)&&(p<h||p===h&&(n.x>f.x||n.x===f.x&&Q(f,n)))&&(f=n,h=p)),n=n.next;while(n!==l);return f}function Q(e,t){return s(e.prev,e,t.prev)<0&&s(t.next,e,e.next)<0}function U(e,t,n,x){var r=e;do r.z===null&&(r.z=H(r.x,r.y,t,n,x)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,W(r)}function W(e){var t,n,x,r,u,f,i,l,y=1;do{for(n=e,e=null,u=null,f=0;n;){for(f++,x=n,i=0,t=0;t<y&&(i++,x=x.nextZ,!!x);t++);for(l=y;i>0||l>0&&x;)i!==0&&(l===0||!x||n.z<=x.z)?(r=n,n=n.nextZ,i--):(r=x,x=x.nextZ,l--),u?u.nextZ=r:e=r,r.prevZ=u,u=r;n=x}u.nextZ=null,y*=2}while(f>1);return e}function H(e,t,n,x,r){return e=32767*(e-n)*r,t=32767*(t-x)*r,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function X(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Z(e,t,n,x,r,u,f,i){return(r-f)*(t-i)-(e-f)*(u-i)>=0&&(e-f)*(x-i)-(n-f)*(t-i)>=0&&(n-f)*(u-i)-(r-f)*(x-i)>=0}function Y(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!I(e,t)&&(F(e,t)&&F(t,e)&&S(e,t)&&(s(e.prev,e,t.prev)||s(e,t.prev,t))||T(e,t)&&s(e.prev,e,e.next)>0&&s(t.prev,t,t.next)>0)}function s(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function T(e,t){return e.x===t.x&&e.y===t.y}function j(e,t,n,x){var r=L(s(e,t,n)),u=L(s(e,t,x)),f=L(s(n,x,e)),i=L(s(n,x,t));return!!(r!==u&&f!==i||r===0&&O(e,n,t)||u===0&&O(e,x,t)||f===0&&O(n,e,x)||i===0&&O(n,t,x))}function O(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function L(e){return e>0?1:e<0?-1:0}function I(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&j(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function F(e,t){return s(e.prev,e,e.next)<0?s(e,t,e.next)>=0&&s(e,e.prev,t)>=0:s(e,t,e.prev)<0||s(e,e.next,t)<0}function S(e,t){var n=e,x=!1,r=(e.x+t.x)/2,u=(e.y+t.y)/2;do n.y>u!=n.next.y>u&&n.next.y!==n.y&&r<(n.next.x-n.x)*(u-n.y)/(n.next.y-n.y)+n.x&&(x=!x),n=n.next;while(n!==e);return x}function C(e,t){var n=new _(e.i,e.x,e.y),x=new _(t.i,t.x,t.y),r=e.next,u=t.prev;return e.next=t,t.prev=e,n.next=r,r.prev=n,x.next=n,n.prev=x,u.next=x,x.prev=u,x}function z(e,t,n,x){var r=new _(e,t,n);return x?(r.next=x.next,r.prev=x,x.next.prev=r,x.next=r):(r.prev=r,r.next=r),r}function M(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function _(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}P.deviation=function(e,t,n,x){var r=t&&t.length,u=r?t[0]*n:e.length,f=Math.abs(k(e,0,u,n));if(r)for(var i=0,l=t.length;i<l;i++){var y=t[i]*n,c=i<l-1?t[i+1]*n:e.length;f-=Math.abs(k(e,y,c,n))}var h=0;for(i=0;i<x.length;i+=3){var p=x[i]*n,v=x[i+1]*n,o=x[i+2]*n;h+=Math.abs((e[p]-e[o])*(e[v+1]-e[p+1])-(e[p]-e[v])*(e[o+1]-e[p+1]))}return f===0&&h===0?0:Math.abs((h-f)/f)};function k(e,t,n,x){for(var r=0,u=t,f=n-x;u<n;u+=x)r+=(e[f]-e[u])*(e[u+1]+e[f+1]),f=u;return r}P.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},x=0,r=0;r<e.length;r++){for(var u=0;u<e[r].length;u++)for(var f=0;f<t;f++)n.vertices.push(e[r][u][f]);r>0&&(x+=e[r-1].length,n.holes.push(x))}return n};export{m as a,N as c,a as g};