import{s as Pe,d as pe,i as lt,n as xe,o as et,e as st,f as Se,u as nt,g as ot,h as at,j as Ge,k as rt,r as it,b as We}from"../chunks/scheduler.AU9E-2Gm.js";import{S as He,i as Le,e as u,t as J,s as C,c as f,a as b,b as X,d,f as E,o as h,g as Y,h as s,j as ve,y as qe,n as re,l as ge,u as Me,z as G,v as je,w as $e,A as ct,B as ut,m as ft,x as Ae,C as Je,q as ht}from"../chunks/index.SjYYGc09.js";import{B as _e,e as Ce}from"../chunks/index.DSt0WKKY.js";function dt(o,e){const l={},t={},i={$$scope:1};let c=o.length;for(;c--;){const m=o[c],a=e[c];if(a){for(const n in m)n in a||(t[n]=1);for(const n in a)i[n]||(l[n]=a[n],i[n]=1);o[c]=a}else for(const n in m)i[n]=1}for(const m in t)m in l||(l[m]=void 0);return l}function mt(o){let e,l,t,i,c,m,a,n,g,v,I,D,W,M,w,$,A,Z,H,ie,N,T,O,ee,K,R,be;return{c(){e=u("div"),l=u("h3"),t=u("a"),i=J(o[0]),m=C(),a=u("p"),n=J(o[2]),g=C(),v=u("div"),I=u("button"),D=u("i"),W=C(),M=J(o[4]),w=C(),$=u("button"),A=u("i"),Z=C(),H=J(o[5]),ie=C(),N=u("button"),T=u("i"),O=C(),ee=J(o[3]),this.h()},l(k){e=f(k,"DIV",{class:!0});var x=b(e);l=f(x,"H3",{class:!0});var ce=b(l);t=f(ce,"A",{href:!0,target:!0});var z=b(t);i=X(z,o[0]),z.forEach(d),ce.forEach(d),m=E(x),a=f(x,"P",{class:!0});var L=b(a);n=X(L,o[2]),L.forEach(d),g=E(x),v=f(x,"DIV",{class:!0});var P=b(v);I=f(P,"BUTTON",{});var te=b(I);D=f(te,"I",{class:!0}),b(D).forEach(d),W=E(te),M=X(te,o[4]),te.forEach(d),w=E(P),$=f(P,"BUTTON",{});var Q=b($);A=f(Q,"I",{class:!0}),b(A).forEach(d),Z=E(Q),H=X(Q,o[5]),Q.forEach(d),ie=E(P),N=f(P,"BUTTON",{});var B=b(N);T=f(B,"I",{class:!0}),b(T).forEach(d),O=E(B),ee=X(B,o[3]),B.forEach(d),P.forEach(d),x.forEach(d),this.h()},h(){h(t,"href",c="https://github.com/"+o[0]),h(t,"target","_blank"),h(l,"class","text-lg font-semibold truncate hover:underline"),h(a,"class","text-md h-12 md:h-14 overflow-auto"),h(D,"class","fa-solid fa-code mr-1 text-blue"),h(A,"class","fa-solid fa-star mr-1 text-yellow"),h(T,"class","fa-solid fa-code-fork mr-1 text-magenta"),h(v,"class","mt-2 space-x-4 text-sm text-white"),h(e,"class","bg-bg-400 p-6 md:p-8 rounded-lg w-screen shadow-sm sm:w-80 duration-100 hover:shadow-lg")},m(k,x){Y(k,e,x),s(e,l),s(l,t),s(t,i),s(e,m),s(e,a),s(a,n),s(e,g),s(e,v),s(v,I),s(I,D),s(I,W),s(I,M),s(v,w),s(v,$),s($,A),s($,Z),s($,H),s(v,ie),s(v,N),s(N,T),s(N,O),s(N,ee),R||(be=pe(K=_e.call(null,e,o[1])),R=!0)},p(k,[x]){x&1&&ve(i,k[0]),x&1&&c!==(c="https://github.com/"+k[0])&&h(t,"href",c),x&4&&ve(n,k[2]),x&16&&ve(M,k[4]),x&32&&ve(H,k[5]),x&8&&ve(ee,k[3]),K&&lt(K.update)&&x&2&&K.update.call(null,k[1])},i:xe,o:xe,d(k){k&&d(e),R=!1,be()}}}function pt(o,e,l){let{repo:t}=e,{useReveal:i}=e,c="",m="",a="",n="";return et(async()=>{let v=await(await fetch(`https://api.github.com/repos/${t}`)).json();l(5,n=v.stargazers_count),l(2,c=v.description),l(3,m=v.forks_count),l(4,a=v.language)}),o.$$set=g=>{"repo"in g&&l(0,t=g.repo),"useReveal"in g&&l(1,i=g.useReveal)},[t,i,c,m,a,n]}class gt extends He{constructor(e){super(),Le(this,e,pt,mt,Pe,{repo:0,useReveal:1})}}function _t(o){let e,l,t;const i=o[3].default,c=st(i,o,o[2],null);let m=[{class:"text-sm px-4 py-2.5 rounded-full font-semibold duration-100 bg-lightGray text-bg-500 hover:bg-white"},o[1]],a={};for(let n=0;n<m.length;n+=1)a=Se(a,m[n]);return{c(){e=u("a"),l=u("button"),c&&c.c(),this.h()},l(n){e=f(n,"A",{href:!0});var g=b(e);l=f(g,"BUTTON",{class:!0});var v=b(l);c&&c.l(v),v.forEach(d),g.forEach(d),this.h()},h(){qe(l,a),h(e,"href",o[0])},m(n,g){Y(n,e,g),s(e,l),c&&c.m(l,null),l.autofocus&&l.focus(),t=!0},p(n,[g]){c&&c.p&&(!t||g&4)&&nt(c,i,n,n[2],t?at(i,n[2],g,null):ot(n[2]),null),qe(l,a=dt(m,[{class:"text-sm px-4 py-2.5 rounded-full font-semibold duration-100 bg-lightGray text-bg-500 hover:bg-white"},g&2&&n[1]])),(!t||g&1)&&h(e,"href",n[0])},i(n){t||(re(c,n),t=!0)},o(n){ge(c,n),t=!1},d(n){n&&d(e),c&&c.d(n)}}}function bt(o,e,l){const t=["href"];let i=Ge(e,t),{$$slots:c={},$$scope:m}=e,{href:a}=e;return o.$$set=n=>{e=Se(Se({},e),rt(n)),l(1,i=Ge(e,t)),"href"in n&&l(0,a=n.href),"$$scope"in n&&l(2,m=n.$$scope)},[a,i,m,c]}class Xe extends He{constructor(e){super(),Le(this,e,bt,_t,Pe,{href:0})}}function Ke(o,e,l){const t=o.slice();return t[12]=e[l],t[14]=l,t}function Qe(o,e,l){const t=o.slice();return t[15]=e[l],t[14]=l,t}function vt(o){let e,l;return{c(){e=u("i"),l=J("Projects"),this.h()},l(t){e=f(t,"I",{class:!0}),b(e).forEach(d),l=X(t,"Projects"),this.h()},h(){h(e,"class","fa-solid fa-box mr-2")},m(t,i){Y(t,e,i),Y(t,l,i)},p:xe,d(t){t&&(d(e),d(l))}}}function xt(o){let e,l;return{c(){e=u("i"),l=J("Blogs"),this.h()},l(t){e=f(t,"I",{class:!0}),b(e).forEach(d),l=X(t,"Blogs"),this.h()},h(){h(e,"class","fa-solid fa-pen mr-2")},m(t,i){Y(t,e,i),Y(t,l,i)},p:xe,d(t){t&&(d(e),d(l))}}}function Ye(o){let e,l;return e=new gt({props:{repo:"mehedirm6244/"+o[15],useReveal:{transition:"fly",y:20,delay:75*o[14]}}}),{c(){Me(e.$$.fragment)},l(t){je(e.$$.fragment,t)},m(t,i){$e(e,t,i),l=!0},p:xe,i(t){l||(re(e.$$.fragment,t),l=!0)},o(t){ge(e.$$.fragment,t),l=!1},d(t){Ae(e,t)}}}function Ze(o){let e,l=o[12]+"",t,i,c,m;return{c(){e=u("div"),t=J(l),i=C(),this.h()},l(a){e=f(a,"DIV",{class:!0});var n=b(e);t=X(n,l),i=E(n),n.forEach(d),this.h()},h(){h(e,"class","bg-blue/5 text-blue px-3 py-1.5 rounded-lg font-semibold text-sm duration-100 hover:bg-blue/10")},m(a,n){Y(a,e,n),s(e,t),s(e,i),c||(m=pe(_e.call(null,e,{transition:"fly",y:20,delay:75*o[14]})),c=!0)},p(a,n){o=a},d(a){a&&d(e),c=!1,m()}}}function yt(o){let e,l,t,i,c="Mehedi Rahman Mahi",m,a,n,g,v,I,D="_",W,M,w,$,A,Z,H,ie='<div class="bg-bg-500 p-8 md:p-16 rounded-2xl md:mx-[7%]"><h1 class="text-2xl mb-3 font-semibold">About Me</h1> <p class="">I&#39;m interested in frontend, competitive programming and computer science. I&#39;ve been a passionate linux user since 2020 (<span class="text-blue">Arch</span> btw). I often code when relaxed, just to destroy my sanity. I&#39;m looking forward to learning more geeky stuff and contributing to FOSS.</p> <p class="">Throughout my academic life, I&#39;ve gained some ECAs through participating in different olympiads related to math, physics and programming. I&#39;ve also contributed to several non-profit science based organizations through actively volunteering. I&#39;m now preparing for entrance exams.</p></div>',N,T,O,ee="My projects",K,R,be="About which I tell <i>her mother</i>.",k,x,ce,z,L,P,te="A set of things I'm used to",Q,B,Be="Including operating systems, languages and frameworks",Ee,le,we,V,se,De="Want to contact me?",Ie,ne,Ne='Use this form below or mail to <a href="mailto:mehedirm6244@protonmail.com" class="text-blue hover:underline">mehedirm6244@protonmail.com</a>',Te,ue,U,Oe='<p class="text-xl font-semibold">Title</p> <input placeholder="Title" class="block w-full bg-bg-500 px-6 py-4 rounded-xl my-4"/> <p class="text-xl font-semibold mb-2">Content</p> <textarea placeholder="Content" class="block w-full resize-none bg-bg-500 px-6 py-4 rounded-xl my-4"></textarea> <div class="flex justify-center mt-8"><input type="submit" value="Send as Email" class="text-sm px-4 py-2.5 rounded-full font-semibold duration-100 bg-lightGray text-bg-500 hover:bg-white hover:cursor-pointer"/></div>',ye,ke,Re;w=new Xe({props:{href:"#project",$$slots:{default:[vt]},$$scope:{ctx:o}}}),A=new Xe({props:{href:"/blogs",$$slots:{default:[xt]},$$scope:{ctx:o}}});let oe=Ce(o[3]),y=[];for(let r=0;r<oe.length;r+=1)y[r]=Ye(Qe(o,oe,r));const tt=r=>ge(y[r],1,1,()=>{y[r]=null});let fe=Ce(o[2]),S=[];for(let r=0;r<fe.length;r+=1)S[r]=Ze(Ke(o,fe,r));return{c(){e=u("main"),l=u("header"),t=u("div"),i=u("p"),i.textContent=c,m=C(),a=u("p"),n=J("I'm a "),g=u("span"),v=C(),I=u("span"),I.textContent=D,W=C(),M=u("div"),Me(w.$$.fragment),$=C(),Me(A.$$.fragment),Z=C(),H=u("section"),H.innerHTML=ie,N=C(),T=u("section"),O=u("h1"),O.textContent=ee,K=C(),R=u("p"),R.innerHTML=be,k=C(),x=u("div");for(let r=0;r<y.length;r+=1)y[r].c();ce=C(),z=u("section"),L=u("div"),P=u("p"),P.textContent=te,Q=C(),B=u("p"),B.textContent=Be,Ee=C(),le=u("div");for(let r=0;r<S.length;r+=1)S[r].c();we=C(),V=u("section"),se=u("h1"),se.textContent=De,Ie=C(),ne=u("p"),ne.innerHTML=Ne,Te=C(),ue=u("div"),U=u("form"),U.innerHTML=Oe,this.h()},l(r){e=f(r,"MAIN",{});var _=b(e);l=f(_,"HEADER",{class:!0});var j=b(l);t=f(j,"DIV",{});var q=b(t);i=f(q,"P",{class:!0,"data-svelte-h":!0}),G(i)!=="svelte-1l2pagk"&&(i.textContent=c),m=E(q),a=f(q,"P",{class:!0});var p=b(a);n=X(p,"I'm a "),g=f(p,"SPAN",{class:!0}),b(g).forEach(d),v=E(p),I=f(p,"SPAN",{class:!0,"data-svelte-h":!0}),G(I)!=="svelte-1cbxwz6"&&(I.textContent=D),p.forEach(d),W=E(q),M=f(q,"DIV",{class:!0});var F=b(M);je(w.$$.fragment,F),$=E(F),je(A.$$.fragment,F),F.forEach(d),q.forEach(d),j.forEach(d),Z=E(_),H=f(_,"SECTION",{class:!0,"data-svelte-h":!0}),G(H)!=="svelte-o744xm"&&(H.innerHTML=ie),N=E(_),T=f(_,"SECTION",{class:!0,id:!0});var he=b(T);O=f(he,"H1",{class:!0,"data-svelte-h":!0}),G(O)!=="svelte-858if9"&&(O.textContent=ee),K=E(he),R=f(he,"P",{class:!0,"data-svelte-h":!0}),G(R)!=="svelte-w3y3k5"&&(R.innerHTML=be),k=E(he),x=f(he,"DIV",{class:!0});var Ve=b(x);for(let ae=0;ae<y.length;ae+=1)y[ae].l(Ve);Ve.forEach(d),he.forEach(d),ce=E(_),z=f(_,"SECTION",{class:!0});var ze=b(z);L=f(ze,"DIV",{class:!0});var de=b(L);P=f(de,"P",{class:!0,"data-svelte-h":!0}),G(P)!=="svelte-bf4fc4"&&(P.textContent=te),Q=E(de),B=f(de,"P",{class:!0,"data-svelte-h":!0}),G(B)!=="svelte-18vnrxi"&&(B.textContent=Be),Ee=E(de),le=f(de,"DIV",{class:!0});var Ue=b(le);for(let ae=0;ae<S.length;ae+=1)S[ae].l(Ue);Ue.forEach(d),de.forEach(d),ze.forEach(d),we=E(_),V=f(_,"SECTION",{class:!0});var me=b(V);se=f(me,"H1",{class:!0,"data-svelte-h":!0}),G(se)!=="svelte-jp4m75"&&(se.textContent=De),Ie=E(me),ne=f(me,"P",{class:!0,"data-svelte-h":!0}),G(ne)!=="svelte-gkh7az"&&(ne.innerHTML=Ne),Te=E(me),ue=f(me,"DIV",{class:!0});var Fe=b(ue);U=f(Fe,"FORM",{action:!0,autocomplete:!0,"data-svelte-h":!0}),G(U)!=="svelte-11om0s0"&&(U.innerHTML=Oe),Fe.forEach(d),me.forEach(d),_.forEach(d),this.h()},h(){h(i,"class","text-3xl md:text-4xl font-semibold"),h(g,"class","text-green"),h(I,"class","animate-blink"),h(a,"class","text-xl md:text-2xl"),h(M,"class","mt-4 space-x-2"),h(l,"class","h-screen flex align-middle justify-center items-center bg-bg-400"),h(H,"class","px-[5%] py-12 md:px-[10%] md:py-20"),h(O,"class","text-2xl text-center font-semibold"),h(R,"class","text-center"),h(x,"class","mt-8 flex flex-wrap align-middle items-center justify-center gap-5"),h(T,"class","px-[5%] py-12 md:px-[10%] md:py-20 bg-bg-500"),h(T,"id","project"),h(P,"class","text-2xl font-semibold"),h(B,"class","mb-6"),h(le,"class","flex flex-row flex-wrap gap-2"),h(L,"class","bg-bg-500 p-8 md:p-16 rounded-2xl md:mx-[7%]"),h(z,"class","px-[5%] py-12 md:px-[10%] md:py-20"),h(se,"class","text-2xl text-center font-semibold"),h(ne,"class","text-center"),h(U,"action","”mailto:mehedirm6244@protonmail.com”"),h(U,"autocomplete","off"),h(ue,"class","mx-auto w-10/12 md:w-2/3 mt-8"),h(V,"class","px-[5%] py-20 md:px-[10%]")},m(r,_){Y(r,e,_),s(e,l),s(l,t),s(t,i),s(t,m),s(t,a),s(a,n),s(a,g),o[5](g),s(a,v),s(a,I),s(t,W),s(t,M),$e(w,M,null),s(M,$),$e(A,M,null),s(e,Z),s(e,H),s(e,N),s(e,T),s(T,O),s(T,K),s(T,R),s(T,k),s(T,x);for(let j=0;j<y.length;j+=1)y[j]&&y[j].m(x,null);s(e,ce),s(e,z),s(z,L),s(L,P),s(L,Q),s(L,B),s(L,Ee),s(L,le);for(let j=0;j<S.length;j+=1)S[j]&&S[j].m(le,null);s(e,we),s(e,V),s(V,se),s(V,Ie),s(V,ne),s(V,Te),s(V,ue),s(ue,U),o[6](U),ye=!0,ke||(Re=[pe(_e.call(null,l,{transition:"fly",y:20})),pe(_e.call(null,H,{transition:"fly",y:20})),pe(_e.call(null,z,{transition:"fly",y:20})),ct(U,"submit",ut(o[4])),pe(_e.call(null,V,{transition:"fly",y:20}))],ke=!0)},p(r,[_]){const j={};_&131072&&(j.$$scope={dirty:_,ctx:r}),w.$set(j);const q={};if(_&131072&&(q.$$scope={dirty:_,ctx:r}),A.$set(q),_&8){oe=Ce(r[3]);let p;for(p=0;p<oe.length;p+=1){const F=Qe(r,oe,p);y[p]?(y[p].p(F,_),re(y[p],1)):(y[p]=Ye(F),y[p].c(),re(y[p],1),y[p].m(x,null))}for(ht(),p=oe.length;p<y.length;p+=1)tt(p);ft()}if(_&4){fe=Ce(r[2]);let p;for(p=0;p<fe.length;p+=1){const F=Ke(r,fe,p);S[p]?S[p].p(F,_):(S[p]=Ze(F),S[p].c(),S[p].m(le,null))}for(;p<S.length;p+=1)S[p].d(1);S.length=fe.length}},i(r){if(!ye){re(w.$$.fragment,r),re(A.$$.fragment,r);for(let _=0;_<oe.length;_+=1)re(y[_]);ye=!0}},o(r){ge(w.$$.fragment,r),ge(A.$$.fragment,r),y=y.filter(Boolean);for(let _=0;_<y.length;_+=1)ge(y[_]);ye=!1},d(r){r&&d(e),o[5](null),Ae(w),Ae(A),Je(y,r),Je(S,r),o[6](null),ke=!1,it(Re)}}}function Ct(o,e,l){const t=["Arch Linux","C","C++","Bash","HTML5","CSS3","TailwindCSS","SCSS","Javascript"],i=["sysfex","Miserable_Xfce","jash","mehedirm6244.github.io"],c=["student at morning","learner at noon","coder at midnight"];let m,a=0,n=0,g;function v(){let w=g.title,$=g.content;w==""||$==""||(location.href=`mailto:mehedirm6244@protonmail.com?subject=${w}&body=${$}`)}function I(){n<c[a].length?(l(0,m.textContent+=c[a].charAt(n++),m),setTimeout(I,100)):(a=(a+1)%c.length,setTimeout(D,2e3))}function D(){l(0,m.textContent=m.textContent.slice(0,-1),m),setTimeout(n--==0?I:D,50)}et(()=>{I()});function W(w){We[w?"unshift":"push"](()=>{m=w,l(0,m)})}function M(w){We[w?"unshift":"push"](()=>{g=w,l(1,g)})}return[m,g,t,i,v,W,M]}class Tt extends He{constructor(e){super(),Le(this,e,Ct,yt,Pe,{})}}export{Tt as component};