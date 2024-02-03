const Z=document.querySelector("#btn-mobile-menu"),_=document.querySelector("#mobile-menu");_?.classList.toggle("hidden");Z?.addEventListener("click",()=>{_?.classList.toggle("hidden")});const ee="astro:before-preparation",te="astro:after-preparation",ne="astro:before-swap",oe="astro:after-swap",re=e=>document.dispatchEvent(new Event(e));class C extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,n,o,r,a,l,f,i,m){super(t,n),this.from=o,this.to=r,this.direction=a,this.navigationType=l,this.sourceElement=f,this.info=i,this.newDocument=m,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class ie extends C{formData;loader;constructor(t,n,o,r,a,l,f,i,m){super(ee,{cancelable:!0},t,n,o,r,a,l,f),this.formData=i,this.loader=m.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class se extends C{direction;viewTransition;swap;constructor(t,n,o){super(ne,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=n,this.swap=o.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function ae(e,t,n,o,r,a,l,f){const i=new ie(e,t,n,o,r,a,window.document,l,f);return document.dispatchEvent(i)&&(await i.loader(),i.defaultPrevented||(re(te),i.navigationType!=="traverse"&&P({scrollX,scrollY}))),i}async function ce(e,t,n){const o=new se(e,t,n);return document.dispatchEvent(o),o.swap(),o}const le=history.pushState.bind(history),v=history.replaceState.bind(history),P=e=>{history.state&&(history.scrollRestoration="manual",v({...history.state,...e},""))},k=!!document.startViewTransition,I=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),U=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let L,p,A=!1,B;const V=e=>document.dispatchEvent(new Event(e)),W=()=>V("astro:page-load"),ue=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},w="data-astro-transition-persist",X="data-astro-transition",Y="data-astro-transition-fallback";let M,T=0;history.state?(T=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):I()&&(v({index:T,scrollX,scrollY},""),history.scrollRestoration="manual");const fe=(e,t)=>{let n=!1,o=!1;return(...r)=>{if(n){o=!0;return}e(...r),n=!0,setTimeout(()=>{o&&(o=!1,e(...r)),n=!1},t)}};async function de(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function j(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function me(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const a=new Promise(l=>{o.onload=o.onerror=l});e=e.then(()=>a)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const K=(e,t,n,o,r)=>{const a=U(t,e),l=document.title;document.title=o;let f=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const i=history.state;v({...n.state,index:i.index,scrollX:i.scrollX,scrollY:i.scrollY},"",e.href)}else le({...n.state,index:++T,scrollX:0,scrollY:0},"",e.href);if(L=e,a||(scrollTo({left:0,top:0,behavior:"instant"}),f=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const i=history.state;location.href=e.href,history.state||v(i,"")}else f||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}document.title=l};function he(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${w}="${n.getAttribute(w)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(a=>o.addEventListener(a,r)),document.head.append(o)}))}return t}async function H(e,t,n,o){const r=(s,d)=>{const h=s.getAttribute(w),g=h&&d.head.querySelector(`[${w}="${h}"]`);if(g)return g;if(s.matches("link[rel=stylesheet]")){const b=s.getAttribute("href");return d.head.querySelector(`link[rel=stylesheet][href="${b}"]`)}return null},a=()=>{const s=document.activeElement;if(s?.closest(`[${w}]`)){if(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){const d=s.selectionStart,h=s.selectionEnd;return{activeElement:s,start:d,end:h}}return{activeElement:s}}else return{activeElement:null}},l=({activeElement:s,start:d,end:h})=>{s&&(s.focus(),(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(s.selectionStart=d,s.selectionEnd=h))},f=s=>{const d=document.documentElement,h=[...d.attributes].filter(({name:c})=>(d.removeAttribute(c),c.startsWith("data-astro-")));[...s.newDocument.documentElement.attributes,...h].forEach(({name:c,value:u})=>d.setAttribute(c,u));for(const c of document.scripts)for(const u of s.newDocument.scripts)if(!c.src&&c.textContent===u.textContent||c.src&&c.type===u.type&&c.src===u.src){u.dataset.astroExec="";break}for(const c of Array.from(document.head.children)){const u=r(c,s.newDocument);u?u.remove():c.remove()}document.head.append(...s.newDocument.head.children);const g=document.body,b=a();document.body.replaceWith(s.newDocument.body);for(const c of g.querySelectorAll(`[${w}]`)){const u=c.getAttribute(w),R=document.querySelector(`[${w}="${u}"]`);R&&R.replaceWith(c)}l(b)};async function i(s){function d(c){const u=c.effect;return!u||!(u instanceof KeyframeEffect)||!u.target?!1:window.getComputedStyle(u.target,u.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();document.documentElement.setAttribute(Y,s);const b=document.getAnimations().filter(c=>!h.includes(c)&&!d(c));return Promise.all(b.map(c=>c.finished))}if(!A)document.documentElement.setAttribute(X,e.direction),o==="animate"&&await i("old");else throw new DOMException("Transition was skipped");const m=document.title,y=await ce(e,p,f);K(y.to,y.from,t,m,n),V(oe),o==="animate"&&!A&&i("new").then(()=>B())}async function G(e,t,n,o,r){if(!I()||location.origin!==n.origin){location.href=n.href;return}const a=r?"traverse":o.history==="replace"?"replace":"push";if(a!=="traverse"&&P({scrollX,scrollY}),U(t,n)&&n.hash){K(n,t,o,document.title,r);return}const l=await ae(t,n,e,a,o.sourceElement,o.info,o.formData,f);if(l.defaultPrevented){location.href=n.href;return}async function f(i){const m=i.to.href,y={};if(i.formData){y.method="POST";const h=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");y.body=h?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const s=await de(m,y);if(s===null){i.preventDefault();return}if(s.redirected&&(i.to=new URL(s.redirected)),M??=new DOMParser,i.newDocument=M.parseFromString(s.html,s.mediaType),i.newDocument.querySelectorAll("noscript").forEach(h=>h.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const d=he(i.newDocument);d.length&&await Promise.all(d)}if(A=!1,k)p=document.startViewTransition(async()=>await H(l,o,r));else{const i=(async()=>{await new Promise(m=>setTimeout(m)),await H(l,o,r,j())})();p={updateCallbackDone:i,ready:i,finished:new Promise(m=>B=m),skipTransition:()=>{A=!0}}}p.ready.then(async()=>{await me(),W(),ue()}),p.finished.then(()=>{document.documentElement.removeAttribute(X),document.documentElement.removeAttribute(Y)}),await p.ready}async function N(e,t){await G("forward",L,new URL(e,location.href),t??{})}function we(e){if(!I()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>T?"forward":"back";T=n,G(o,L,new URL(location.href),{},t)}const F=()=>{P({scrollX,scrollY})};{(k||j()!=="none")&&(L=new URL(location.href),addEventListener("popstate",we),addEventListener("load",W),"onscrollend"in window?addEventListener("scrollend",F):addEventListener("scroll",fe(F,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}const z=new Set,S=new WeakSet;let x,J,q=!1;function ye(e){q||(q=!0,x??=e?.prefetchAll??!1,J??=e?.defaultStrategy??"hover",pe(),ge(),be(),Ee())}function pe(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{E(t.target,"tap")&&D(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function ge(){let e;document.body.addEventListener("focusin",o=>{E(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),O(()=>{for(const o of document.getElementsByTagName("a"))S.has(o)||E(o,"hover")&&(S.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{D(r,{with:"fetch"})},80)}function n(){e&&(clearTimeout(e),e=0)}}function be(){let e;O(()=>{for(const t of document.getElementsByTagName("a"))S.has(t)||E(t,"viewport")&&(S.add(t),e??=Te(),e.observe(t))})}function Te(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,a=e.get(r);o.isIntersecting?(a&&clearTimeout(a),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),D(r.href,{with:"link"})},300))):a&&(clearTimeout(a),e.delete(r))}})}function Ee(){O(()=>{for(const e of document.getElementsByTagName("a"))E(e,"load")&&D(e.href,{with:"link"})})}function D(e,t){const n=t?.ignoreSlowConnection??!1;if(!ve(e,n))return;if(z.add(e),(t?.with??"link")==="link"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e).catch(r=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(r)})}function ve(e,t){if(!navigator.onLine||!t&&Q())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!z.has(e)}catch{}return!1}function E(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||x)&&Q()?!0:n==null&&x||n===""?t===J:n===t}function Q(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function O(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Ae(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function $(e){return e.dataset.astroReload!==void 0}(k||Ae()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;$(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),N(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||$(t))return;const n=t,o=e.submitter,r=new FormData(n,o);let a=o?.getAttribute("formaction")??n.action??location.pathname;const l=o?.getAttribute("formmethod")??n.method;if(l==="dialog"||location.origin!==new URL(a,location.href).origin)return;const f={sourceElement:o??n};if(l==="get"){const i=new URLSearchParams(r),m=new URL(a);m.search=i.toString(),a=m.toString()}else f.formData=r;e.preventDefault(),N(a,f)}),ye({prefetchAll:!0}));
