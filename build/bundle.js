var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function a(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let r,i;function o(e,t){return r||(r=document.createElement("a")),r.href=t,e===r.href}function c(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function h(){return f(" ")}function v(){return f("")}function g(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function k(e,t,n){e.classList[n?"add":"remove"](t)}function $(e){i=e}function w(){const e=function(){if(!i)throw new Error("Function called outside component initialization");return i}();return(t,n)=>{const s=e.$$.callbacks[t];if(s){const a=function(e,t,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,!1,t),s}(t,n);s.slice().forEach((t=>{t.call(e,a)}))}}}const y=[],x=[],A=[],z=[],P=Promise.resolve();let T=!1;function _(e){A.push(e)}let L=!1;const C=new Set;function S(){if(!L){L=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];$(t),E(t.$$)}for($(null),y.length=0;x.length;)x.pop()();for(let e=0;e<A.length;e+=1){const t=A[e];C.has(t)||(C.add(t),t())}A.length=0}while(y.length);for(;z.length;)z.pop()();T=!1,L=!1,C.clear()}}function E(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const H=new Set;let I;function M(){I={r:0,c:[],p:I}}function q(){I.r||s(I.c),I=I.p}function N(e,t){e&&e.i&&(H.delete(e),e.i(t))}function R(e,t,n,s){if(e&&e.o){if(H.has(e))return;H.add(e),I.c.push((()=>{H.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function j(e,t){R(e,1,1,(()=>{t.delete(e.key)}))}function D(e){e&&e.c()}function F(e,n,l,r){const{fragment:i,on_mount:o,on_destroy:c,after_update:u}=e.$$;i&&i.m(n,l),r||_((()=>{const n=o.map(t).filter(a);c?c.push(...n):s(n),e.$$.on_mount=[]})),u.forEach(_)}function O(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function U(e,t){-1===e.$$.dirty[0]&&(y.push(e),T||(T=!0,P.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(t,a,l,r,o,c,u,p=[-1]){const f=i;$(t);const h=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:o,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(f?f.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:a.target||f.$$.root};u&&u(h.root);let v=!1;if(h.ctx=l?l(t,a.props||{},((e,n,...s)=>{const a=s.length?s[0]:n;return h.ctx&&o(h.ctx[e],h.ctx[e]=a)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](a),v&&U(t,e)),n})):[],h.update(),v=!0,s(h.before_update),h.fragment=!!r&&r(h.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);h.fragment&&h.fragment.l(e),e.forEach(d)}else h.fragment&&h.fragment.c();a.intro&&N(t.$$.fragment),F(t,a.target,a.anchor,a.customElement),S()}$(f)}class K{$destroy(){O(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function J(t){let n,a,l,r,i,o,f,v,b,$,w,y,x,A,z,P,T,_,L;return{c(){n=p("link"),a=h(),l=p("link"),r=h(),i=p("link"),o=h(),f=p("nav"),v=p("h2"),v.textContent="AstroPark",b=h(),$=p("ul"),w=p("li"),w.textContent="Home",y=h(),x=p("li"),x.textContent="Library",A=h(),z=p("li"),z.textContent="LIR",P=h(),T=p("li"),T.textContent="About",m(n,"rel","preconnect"),m(n,"href","https://fonts.googleapis.com"),m(l,"rel","preconnect"),m(l,"href","https://fonts.gstatic.com"),m(l,"crossorigin",""),m(i,"href","https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap"),m(i,"rel","stylesheet"),m(v,"class","navbar-logo svelte-ngc3t9"),m(w,"class","svelte-ngc3t9"),k(w,"active",0===t[0]),m(x,"class","svelte-ngc3t9"),k(x,"active",1===t[0]),m(z,"class","svelte-ngc3t9"),k(z,"active",2===t[0]),m(T,"class","svelte-ngc3t9"),k(T,"active",3===t[0]),m($,"class","navbar-list svelte-ngc3t9"),m(f,"class","navbar nav-row svelte-ngc3t9")},m(e,s){u(e,n,s),u(e,a,s),u(e,l,s),u(e,r,s),u(e,i,s),u(e,o,s),u(e,f,s),c(f,v),c(f,b),c(f,$),c($,w),c($,y),c($,x),c($,A),c($,z),c($,P),c($,T),_||(L=[g(w,"click",t[2]),g(x,"click",t[3]),g(z,"click",t[4]),g(T,"click",t[5])],_=!0)},p(e,[t]){1&t&&k(w,"active",0===e[0]),1&t&&k(x,"active",1===e[0]),1&t&&k(z,"active",2===e[0]),1&t&&k(T,"active",3===e[0])},i:e,o:e,d(e){e&&d(n),e&&d(a),e&&d(l),e&&d(r),e&&d(i),e&&d(o),e&&d(f),_=!1,s(L)}}}function W(e,t,n){const s=w();let a=0;return[a,s,()=>{n(0,a=0),s("select",0)},()=>{n(0,a=0),s("select",1)},()=>{n(0,a=0),s("select",2)},()=>{n(0,a=0),s("select",3)}]}class Q extends K{constructor(e){super(),B(this,e,W,J,l,{})}}function V(t){let n;return{c(){n=p("h1"),n.innerHTML='<span class="let1 svelte-47fazl">A</span> \n    <span class="let2 svelte-47fazl">S</span> \n    <span class="let3 svelte-47fazl">T</span> \n    <span class="let4 svelte-47fazl">R</span> \n    <span class="let5 svelte-47fazl">O</span> \n    <span class="let6 svelte-47fazl"> </span> \n    <span class="let7 svelte-47fazl">P</span> \n    <span class="let8 svelte-47fazl">A</span> \n    <span class="let9 svelte-47fazl">R</span> \n    <span class="let10 svelte-47fazl">K</span>',m(n,"class","svelte-47fazl")},m(e,t){u(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class X extends K{constructor(e){super(),B(this,e,null,V,l,{})}}function Y(t){let n,s,a,l,r,i,v,g,k,$,w,y,x,A=(t[3]||"Unknown")+"";return{c(){n=p("img"),a=h(),l=p("div"),r=p("span"),i=f(t[1]),v=h(),g=p("p"),k=f(t[2]),$=h(),w=p("span"),y=f("-"),x=f(A),o(n.src,s=t[0])||m(n,"src",s),m(n,"alt",t[1]),m(n,"class","svelte-1g2wie9"),m(r,"class","title svelte-1g2wie9"),m(w,"class","owner"),m(l,"class","description svelte-1g2wie9")},m(e,t){u(e,n,t),u(e,a,t),u(e,l,t),c(l,r),c(r,i),c(l,v),c(l,g),c(g,k),c(l,$),c(l,w),c(w,y),c(w,x)},p(e,t){1&t&&!o(n.src,s=e[0])&&m(n,"src",s),2&t&&m(n,"alt",e[1]),2&t&&b(i,e[1]),4&t&&b(k,e[2]),8&t&&A!==(A=(e[3]||"Unknown")+"")&&b(x,A)},i:e,o:e,d(e){e&&d(n),e&&d(a),e&&d(l)}}}function G(t){let n,s;return n=new X({}),{c(){D(n.$$.fragment)},m(e,t){F(n,e,t),s=!0},p:e,i(e){s||(N(n.$$.fragment,e),s=!0)},o(e){R(n.$$.fragment,e),s=!1},d(e){O(n,e)}}}function Z(e){let t,n,s,a,l;const r=[G,Y],i=[];function o(e,t){return e[4]?1:0}return s=o(e),a=i[s]=r[s](e),{c(){t=p("div"),n=p("div"),a.c(),m(n,"class","main-content svelte-1g2wie9"),m(t,"class","main svelte-1g2wie9")},m(e,a){u(e,t,a),c(t,n),i[s].m(n,null),l=!0},p(e,[t]){let l=s;s=o(e),s===l?i[s].p(e,t):(M(),R(i[l],1,1,(()=>{i[l]=null})),q(),a=i[s],a?a.p(e,t):(a=i[s]=r[s](e),a.c()),N(a,1),a.m(n,null))},i(e){l||(N(a),l=!0)},o(e){R(a),l=!1},d(e){e&&d(t),i[s].d()}}}function ee(e,t,n){let s,a,l,r,i=!1;return axios.get("https://astropark.herokuapp.com/apod").then((e=>{n(0,s=e.data.url),n(1,a=e.data.title),n(2,l=e.data.explanation),n(3,r=e.data.copyright),n(4,i=!0)})),[s,a,l,r,i]}class te extends K{constructor(e){super(),B(this,e,ee,Z,l,{})}}function ne(t){let n,s,a,l,r,i,f;return{c(){n=p("div"),s=p("img"),l=h(),r=p("h3"),r.textContent=`${t[0]}`,i=h(),f=p("p"),f.textContent=`${t[2]}`,o(s.src,a=t[1])||m(s,"src",a),m(s,"alt",t[0]),m(s,"class","svelte-4lkj87"),m(r,"class","svelte-4lkj87"),m(f,"class","desc svelte-4lkj87"),m(n,"class","result svelte-4lkj87")},m(e,t){u(e,n,t),c(n,s),c(n,l),c(n,r),c(n,i),c(n,f)},p:e,i:e,o:e,d(e){e&&d(n)}}}function se(e,t,n){let{element:s}=t;console.log(s);let a=s.data[0].title,l=s.links[0].href,r=s.data[0].description;return e.$$set=e=>{"element"in e&&n(3,s=e.element)},[a,l,r,s]}class ae extends K{constructor(e){super(),B(this,e,se,ne,l,{element:3})}}function le(e){return 0==e.trim()}function re(e,t,n){const s=e.slice();return s[9]=t[n],s}function ie(e){let t;return{c(){t=p("p"),t.textContent="Please enter valid data!",m(t,"class","error svelte-bohbgw")},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}function oe(t){let n;return{c(){n=p("h2"),n.textContent="No Data Found!",m(n,"class","svelte-bohbgw")},m(e,t){u(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}function ce(e){let t,n,s=[],a=new Map,l=e[1];const r=e=>e[9].href;for(let t=0;t<l.length;t+=1){let n=re(e,l,t),i=r(n);a.set(i,s[t]=ue(i,n))}return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=v()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);u(e,t,a),n=!0},p(e,n){2&n&&(l=e[1],M(),s=function(e,t,n,s,a,l,r,i,o,c,u,d){let p=e.length,f=l.length,h=p;const v={};for(;h--;)v[e[h].key]=h;const g=[],m=new Map,b=new Map;for(h=f;h--;){const e=d(a,l,h),i=n(e);let o=r.get(i);o?s&&o.p(e,t):(o=c(i,e),o.c()),m.set(i,g[h]=o),i in v&&b.set(i,Math.abs(h-v[i]))}const k=new Set,$=new Set;function w(e){N(e,1),e.m(i,u),r.set(e.key,e),u=e.first,f--}for(;p&&f;){const t=g[f-1],n=e[p-1],s=t.key,a=n.key;t===n?(u=t.first,p--,f--):m.has(a)?!r.has(s)||k.has(s)?w(t):$.has(a)?p--:b.get(s)>b.get(a)?($.add(s),w(t)):(k.add(a),p--):(o(n,r),p--)}for(;p--;){const t=e[p];m.has(t.key)||o(t,r)}for(;f;)w(g[f-1]);return g}(s,n,r,1,e,l,a,t.parentNode,j,ue,t,re),q())},i(e){if(!n){for(let e=0;e<l.length;e+=1)N(s[e]);n=!0}},o(e){for(let e=0;e<s.length;e+=1)R(s[e]);n=!1},d(e){for(let t=0;t<s.length;t+=1)s[t].d(e);e&&d(t)}}}function ue(e,t){let n,s,a;return s=new ae({props:{element:t[9]}}),{key:e,first:null,c(){n=v(),D(s.$$.fragment),this.first=n},m(e,t){u(e,n,t),F(s,e,t),a=!0},p(e,n){t=e;const a={};2&n&&(a.element=t[9]),s.$set(a)},i(e){a||(N(s.$$.fragment,e),a=!0)},o(e){R(s.$$.fragment,e),a=!1},d(e){e&&d(n),O(s,e)}}}function de(e){let t,n,a,l,r,i,o,f,v,b,k,$,w,y=!e[4]&&ie();const x=[ce,oe],A=[];function z(e,t){return e[2]&&e[3]?0:e[3]?-1:1}return~(v=z(e))&&(b=A[v]=x[v](e)),{c(){t=p("div"),n=p("div"),a=p("input"),l=h(),r=p("button"),r.innerHTML='<i class="fas fa-search svelte-bohbgw"></i>',i=h(),y&&y.c(),o=h(),f=p("div"),b&&b.c(),m(a,"type","text"),m(a,"placeholder","Search.."),m(a,"class","svelte-bohbgw"),m(r,"class","svelte-bohbgw"),m(n,"class","search-container svelte-bohbgw"),m(t,"class","search svelte-bohbgw"),m(f,"class","search-results svelte-bohbgw")},m(s,d){u(s,t,d),c(t,n),c(n,a),c(n,l),c(n,r),c(n,i),y&&y.m(n,null),u(s,o,d),u(s,f,d),~v&&A[v].m(f,null),k=!0,$||(w=[g(a,"input",e[7]),g(r,"click",e[5])],$=!0)},p(e,[t]){e[4]?y&&(y.d(1),y=null):y||(y=ie(),y.c(),y.m(n,null));let s=v;v=z(e),v===s?~v&&A[v].p(e,t):(b&&(M(),R(A[s],1,1,(()=>{A[s]=null})),q()),~v?(b=A[v],b?b.p(e,t):(b=A[v]=x[v](e),b.c()),N(b,1),b.m(f,null)):b=null)},i(e){k||(N(b),k=!0)},o(e){R(b),k=!1},d(e){e&&d(t),y&&y.d(),e&&d(o),e&&d(f),~v&&A[v].d(),$=!1,s(w)}}}function pe(e,t,n){let s,a,l,r,i=!1,o=!0,c="";return e.$$.update=()=>{1&e.$$.dirty&&n(4,s=!le(c)),64&e.$$.dirty&&n(3,o=0!=l)},[c,r,i,o,s,()=>{s&&(a="https://astropark.herokuapp.com/search?q="+c.trim(),axios.get(a).then((e=>{n(6,l=e.data.filter((e=>void 0!==e.links))),n(1,r=l.slice(0,8)),n(2,i=!0)})))},l,e=>n(0,c=e.target.value)]}class fe extends K{constructor(e){super(),B(this,e,pe,de,l,{})}}function he(t){let n;return{c(){n=p("div"),n.innerHTML='<div class="svelte-164fk8c"></div> \n    <div class="svelte-164fk8c"></div> \n    <div class="svelte-164fk8c"></div> \n    <div class="svelte-164fk8c"></div>',m(n,"class","lds-ring svelte-164fk8c")},m(e,t){u(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class ve extends K{constructor(e){super(),B(this,e,null,he,l,{})}}function ge(e){let t,n,s,a,l,r,i,o,v,g,k,$,w=e[4]&&me(),y=e[5]&&be();return{c(){t=p("div"),w&&w.c(),n=h(),s=p("h2"),a=f("Date: "),l=f(e[3]),r=h(),i=p("div"),y&&y.c(),o=h(),v=p("h2"),g=f("Date: "),k=f(e[2]),m(t,"class","past-result svelte-uzubbg"),m(i,"class","recent-result svelte-uzubbg")},m(d,p){u(d,t,p),w&&w.m(t,null),c(t,n),c(t,s),c(s,a),c(s,l),e[18](t),u(d,r,p),u(d,i,p),y&&y.m(i,null),c(i,o),c(i,v),c(v,g),c(v,k),e[19](i),$=!0},p(e,s){e[4]?w?16&s&&N(w,1):(w=me(),w.c(),N(w,1),w.m(t,n)):w&&(M(),R(w,1,1,(()=>{w=null})),q()),(!$||8&s)&&b(l,e[3]),e[5]?y?32&s&&N(y,1):(y=be(),y.c(),N(y,1),y.m(i,o)):y&&(M(),R(y,1,1,(()=>{y=null})),q()),(!$||4&s)&&b(k,e[2])},i(e){$||(N(w),N(y),$=!0)},o(e){R(w),R(y),$=!1},d(n){n&&d(t),w&&w.d(),e[18](null),n&&d(r),n&&d(i),y&&y.d(),e[19](null)}}}function me(e){let t,n;return t=new ve({}),{c(){D(t.$$.fragment)},m(e,s){F(t,e,s),n=!0},i(e){n||(N(t.$$.fragment,e),n=!0)},o(e){R(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function be(e){let t,n;return t=new ve({}),{c(){D(t.$$.fragment)},m(e,s){F(t,e,s),n=!0},i(e){n||(N(t.$$.fragment,e),n=!0)},o(e){R(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function ke(e){let t,n,a,l,r,i,o,f,v,b,k,$,w,y,x,A,z,P,T,_,L,C,S,E,H,I,j,D,F,O,U,B,K=e[6]&&ge(e);return{c(){t=p("div"),n=p("h1"),n.textContent="Want to compare the satellite images of a particular region?",a=h(),l=p("div"),r=p("div"),i=p("div"),o=p("label"),o.textContent="Latitude",f=h(),v=p("input"),b=h(),k=p("div"),$=p("label"),$.textContent="Longitude",w=h(),y=p("input"),x=h(),A=p("div"),z=p("label"),z.textContent="Past-date",P=h(),T=p("input"),_=h(),L=p("div"),C=p("label"),C.textContent="Present-date",S=h(),E=p("input"),H=h(),I=p("input"),j=h(),D=p("div"),F=p("div"),K&&K.c(),m(n,"class","svelte-uzubbg"),m(o,"for","latitude"),m(o,"class","svelte-uzubbg"),m(v,"type","Number"),m(v,"id","latitude"),m(v,"class","latitude svelte-uzubbg"),m(v,"placeholder","Latitude"),m(i,"class","input svelte-uzubbg"),m($,"for","longitude"),m($,"class","svelte-uzubbg"),m(y,"type","Number"),m(y,"class","Longitude svelte-uzubbg"),m(y,"id","longitude"),m(y,"placeholder","Longitude"),m(k,"class","input svelte-uzubbg"),m(z,"for","past-date"),m(z,"class","svelte-uzubbg"),m(T,"id","past-date"),m(T,"type","date"),m(T,"placeholder","Recent date"),m(T,"class","svelte-uzubbg"),m(A,"class","input svelte-uzubbg"),m(C,"for","present-date"),m(C,"class","svelte-uzubbg"),m(E,"id","present-date"),m(E,"type","date"),m(E,"placeholder","Past date"),m(E,"class","svelte-uzubbg"),m(L,"class","input svelte-uzubbg"),m(r,"class","inputs svelte-uzubbg"),m(I,"type","submit"),m(I,"class","submit svelte-uzubbg"),m(l,"class","form svelte-uzubbg"),m(F,"class","results svelte-uzubbg"),m(D,"class","compare-results svelte-uzubbg"),m(t,"class","main-compare-container svelte-uzubbg")},m(s,d){u(s,t,d),c(t,n),c(t,a),c(t,l),c(l,r),c(r,i),c(i,o),c(i,f),c(i,v),c(r,b),c(r,k),c(k,$),c(k,w),c(k,y),c(r,x),c(r,A),c(A,z),c(A,P),c(A,T),c(r,_),c(r,L),c(L,C),c(L,S),c(L,E),c(l,H),c(l,I),c(t,j),c(t,D),c(D,F),K&&K.m(F,null),O=!0,U||(B=[g(v,"input",e[14]),g(y,"input",e[15]),g(T,"input",e[16]),g(E,"input",e[17]),g(I,"click",e[9])],U=!0)},p(e,[t]){e[6]?K?(K.p(e,t),64&t&&N(K,1)):(K=ge(e),K.c(),N(K,1),K.m(F,null)):K&&(M(),R(K,1,1,(()=>{K=null})),q())},i(e){O||(N(K),O=!0)},o(e){R(K),O=!1},d(e){e&&d(t),K&&K.d(),U=!1,s(B)}}}const $e="https://astropark.herokuapp.com/satellite?";function we(e,t,n){let s,a,l,r,i,o,c,u,d="",p="",f="",h="",v=!1,g=!1,m=!1,b=!1;return e.$$.update=()=>{1&e.$$.dirty&&n(13,s=!le(d)),2&e.$$.dirty&&n(12,a=!le(p)),4&e.$$.dirty&&n(11,l=!le(f)),8&e.$$.dirty&&n(10,r=!le(h)),15360&e.$$.dirty&&(m=s&&a&&l&&r)},[d,p,f,h,v,g,b,c,u,()=>{if(m){i=`${$e}latitude=${d}&longitude=${p}&date=${f}`,o=`${$e}latitude=${d}&longitude=${p}&date=${h}`,n(6,b=!0),n(4,v=!0),n(5,g=!0);let e=new Image;e.src=o,e.onload=function(){if(n(4,v=!1),c.querySelector("img")){const t=c.querySelector("img");t.parentNode.replaceChild(e,t)}else c.appendChild(e)};let t=new Image;t.src=i,t.onload=function(){if(n(5,g=!1),u.querySelector("img")){const e=u.querySelector("img");e.parentNode.replaceChild(t,e)}else u.appendChild(t)}}},r,l,a,s,e=>n(0,d=e.target.value),e=>n(1,p=e.target.value),e=>n(3,h=e.target.value),e=>n(2,f=e.target.value),function(e){x[e?"unshift":"push"]((()=>{c=e,n(7,c)}))},function(e){x[e?"unshift":"push"]((()=>{u=e,n(8,u)}))}]}class ye extends K{constructor(e){super(),B(this,e,we,ke,l,{})}}function xe(t){let n;return{c(){n=p("main"),n.innerHTML='<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css"/> \n  <div id="stars" class="svelte-113kik2"></div> \n  <div id="stars2" class="svelte-113kik2"></div> \n  <div id="stars3" class="svelte-113kik2"></div> \n\n  <div><h2 class="first svelte-113kik2">About</h2></div> \n  <div class="two"><h2 class="second svelte-113kik2">Description</h2></div> \n  <div class="section-2 svelte-113kik2"><div class="tab"><h3 class="svelte-113kik2">AstroPark</h3>\n      AstroPark is a project built using the NASA API. It has two segments - a\n      Frontend and a Backend. Frontend portrays the information received\n      from the backend. The backend works as an intermediate proxy server which processes\n      and pipes the response back to the frontend.<br/> AstroPart comprises of\n      the given features.\n      <br/>- APOD Homepage\n      <br/>- Media Library\n      <br/>- Landsat Image Retriever(LIR)</div> \n    <div class="tab"><h3 class="svelte-113kik2">APOD Homepage</h3>\n      The APOD Homepage is an informative homepage. This homepage is designed with\n      the help of APOD API provided by NASA. The cover page of AstroPark changes\n      on a daily basis. Along with the picture, user is provided with some description\n      related to the picture.</div> \n    <div class="tab"><h3 class="svelte-113kik2">Library</h3>\n      AstroPark Media Library develops a link with Media Library of NASA. The required\n      data is retrieved based upon the keyword. As a result, a grid of pictures are\n      displayed based upon the keyword. And along with the pictures, the information\n      regarding those pictures is also displayed to the user.</div> \n    <div class="tab"><h3 class="svelte-113kik2">Landsat Image Retriever</h3>\n      LIR feature works with the help of Earth API. The user is required to fill\n      the details in the given form. Based upon the values of Latitude and Longitude,\n      the satellite images of that particular region taken on the provided dates\n      are retrieved, proccessed from the database and are displayed.</div></div> \n\n  <div><h2 class="third svelte-113kik2">Meet the Team</h2> \n    <div class="box svelte-113kik2"><div class="flip-card svelte-113kik2"><div class="flip-card-inner svelte-113kik2"><div class="flip-card-front svelte-113kik2"><img src="./Images/A1.png" alt="Avatar" style="width:300px;height:300px;border-radius:30px"/></div> \n          <div class="flip-card-back svelte-113kik2"><h1>Habeeb Ullah</h1> \n            <p>Backend Developer</p> \n            \n\n            <a target="_blank" href="https://twitter.com/TheOpCoder" class="fab fa-twitter-square svelte-113kik2"></a> \n            <a target="_blank" href="https://github.com/HabeebUllahTabrez" class="fab fa-github-square svelte-113kik2"></a> \n            <a target="_blank" href="https://www.linkedin.com/in/mohammed-habeeb-ullah-tabrez-914001191/" class="fab fa-linkedin svelte-113kik2"></a></div></div></div> \n\n      <div class="flip-card svelte-113kik2"><div class="flip-card-inner svelte-113kik2"><div class="flip-card-front svelte-113kik2"><img src="./Images/A2.png" alt="Avatar" style="width:300px;height:300px;border-radius:30px"/></div> \n          <div class="flip-card-back svelte-113kik2"><h1>Sadiya Noorain</h1> \n            <p>Frontend Developer</p> \n            \n\n            <a target="_blank" href="https://twitter.com/Sadiya_0613" class="fab fa-twitter-square svelte-113kik2"></a> \n            <a target="_blank" href="https://github.com/Sadiya1noorain" class="fab fa-github-square svelte-113kik2"></a> \n            <a target="_blank" href="https://www.linkedin.com/in/sadiya-noorain/" class="fab fa-linkedin svelte-113kik2"></a></div></div></div></div></div> \n  <div><h2 class="fourth svelte-113kik2" style="margin-bottom:20px">Know More About the Project</h2> \n    <div class="section-4 svelte-113kik2"><p>The frontend is created using SvelteJS and it is deployed on GitHub\n        pages <a target="_blank" href="https://habeebullahtabrez.github.io/AstroPark" class="know svelte-113kik2">https://habeebullahtabrez.github.io/AstroPark</a></p> \n      <p>The backend is created using NodeJS and ExpressJS. It is deployed on\n        Heroku <a target="_blank" href="https://astropark.herokuapp.com/" class="know svelte-113kik2">https://astropark.herokuapp.com/</a></p> \n      <p>To view the source code of the Frontend visit : <a target="_blank" href="https://github.com/HabeebUllahTabrez/AstroPark" class="know svelte-113kik2">https://github.com/HabeebUllahTabrez/AstroPark</a></p> \n      <p>To view the source code of the Backend visit : <a target="_blank" href="https://github.com/HabeebUllahTabrez/AstroPark-REST-API" class="know svelte-113kik2">https://github.com/HabeebUllahTabrez/AstroPark-REST-API</a></p> \n      <p>The documentation of AstroPark is available on <a target="_blank" href="https://www.icloud.com/pages/0d2Q3FjATEaH2gfbK0xs20Anw#Report" class="know svelte-113kik2">https://www.icloud.com/pages/0d2Q3FjATEaH2gfbK0xs20Anw#Report</a></p> \n      <p>The PPT of AstroPark is available on <a target="_blank" href="https://www.icloud.com/keynote/0048dnY4SFdIVXCWdeBcL0qAg#PPT_1" class="know svelte-113kik2">https://www.icloud.com/keynote/0048dnY4SFdIVXCWdeBcL0qAg#PPT_1</a></p> \n      <p>To know more, contact us</p></div></div>',m(n,"id","main"),m(n,"class","svelte-113kik2")},m(e,t){u(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class Ae extends K{constructor(e){super(),B(this,e,null,xe,l,{})}}function ze(e){let t,n;return t=new Ae({}),{c(){D(t.$$.fragment)},m(e,s){F(t,e,s),n=!0},i(e){n||(N(t.$$.fragment,e),n=!0)},o(e){R(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function Pe(e){let t,n;return t=new ye({}),{c(){D(t.$$.fragment)},m(e,s){F(t,e,s),n=!0},i(e){n||(N(t.$$.fragment,e),n=!0)},o(e){R(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function Te(e){let t,n;return t=new fe({}),{c(){D(t.$$.fragment)},m(e,s){F(t,e,s),n=!0},i(e){n||(N(t.$$.fragment,e),n=!0)},o(e){R(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function _e(e){let t,n;return t=new te({}),{c(){D(t.$$.fragment)},m(e,s){F(t,e,s),n=!0},i(e){n||(N(t.$$.fragment,e),n=!0)},o(e){R(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function Le(e){let t,n,s,a,l,r;t=new Q({}),t.$on("select",e[1]);const i=[_e,Te,Pe,ze],o=[];function c(e,t){return 0===e[0]?0:1===e[0]?1:2===e[0]?2:3===e[0]?3:-1}return~(a=c(e))&&(l=o[a]=i[a](e)),{c(){D(t.$$.fragment),n=h(),s=p("main"),l&&l.c()},m(e,l){F(t,e,l),u(e,n,l),u(e,s,l),~a&&o[a].m(s,null),r=!0},p(e,[t]){let n=a;a=c(e),a!==n&&(l&&(M(),R(o[n],1,1,(()=>{o[n]=null})),q()),~a?(l=o[a],l||(l=o[a]=i[a](e),l.c()),N(l,1),l.m(s,null)):l=null)},i(e){r||(N(t.$$.fragment,e),N(l),r=!0)},o(e){R(t.$$.fragment,e),R(l),r=!1},d(e){O(t,e),e&&d(n),e&&d(s),~a&&o[a].d()}}}function Ce(e,t,n){let s=0;return[s,function(e){n(0,s=e.detail)}]}return new class extends K{constructor(e){super(),B(this,e,Ce,Le,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
