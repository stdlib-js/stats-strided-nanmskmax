"use strict";var y=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var P=y(function(K,p){
var w=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-assert-is-positive-zero/dist');function A(a,e,n,x,v,s,b){var u,t,c,q,f,r,i,o,m;for(u=e.data,c=v.data,t=e.accessors[0],q=v.accessors[0],r=x,i=b,m=0;m<a&&(o=t(u,r),!(o===o&&q(c,i)===0));m++)r+=n,i+=s;if(m===a)return NaN;for(f=o,m+=1,m;m<a;m++)r+=n,i+=s,!q(c,i)&&(o=t(u,r),!w(o)&&(o>f||o===f&&z(o))&&(f=o));return f}p.exports=A
});var l=y(function(L,Z){
var B=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-assert-is-positive-zero/dist'),g=require('@stdlib/array-base-arraylike2object/dist'),D=P();function E(a,e,n,x,v,s,b){var u,t,c,q,f,r,i;if(a<=0)return NaN;if(q=g(e),f=g(v),q.accessorProtocol||f.accessorProtocol)return D(a,q,n,x,f,s,b);for(t=x,c=b,i=0;i<a&&(r=e[t],!(r===r&&v[c]===0));i++)t+=n,c+=s;if(i===a)return NaN;for(u=r,i+=1,i;i<a;i++)t+=n,c+=s,!v[c]&&(r=e[t],!B(r)&&(r>u||r===u&&C(r))&&(u=r));return u}Z.exports=E
});var R=y(function(Q,O){
var j=require('@stdlib/strided-base-stride2offset/dist'),F=l();function G(a,e,n,x,v){var s=j(a,v),b=j(a,n);return F(a,e,n,b,x,v,s)}O.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),I=l();H(h,"ndarray",I);module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
