(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))_(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&_(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function _(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var q,f,me,C,ee,he,j,M={},pe=[],xe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K=Array.isArray;function x(e,t){for(var n in t)e[n]=t[n];return e}function ve(e){var t=e.parentNode;t&&t.removeChild(e)}function Ce(e,t,n){var _,r,o,u={};for(o in t)o=="key"?_=t[o]:o=="ref"?r=t[o]:u[o]=t[o];if(arguments.length>2&&(u.children=arguments.length>3?q.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)u[o]===void 0&&(u[o]=e.defaultProps[o]);return D(e,u,_,r,null)}function D(e,t,n,_,r){var o={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++me,__i:-1,__u:0};return r==null&&f.vnode!=null&&f.vnode(o),o}function A(e){return e.children}function F(e,t){this.props=e,this.context=t}function P(e,t){if(t==null)return e.__?P(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?P(e):null}function ge(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ge(e)}}function te(e){(!e.__d&&(e.__d=!0)&&C.push(e)&&!G.__r++||ee!==f.debounceRendering)&&((ee=f.debounceRendering)||he)(G)}function G(){var e,t,n,_,r,o,u,c,s;for(C.sort(j);e=C.shift();)e.__d&&(t=C.length,_=void 0,o=(r=(n=e).__v).__e,c=[],s=[],(u=n.__P)&&((_=x({},r)).__v=r.__v+1,f.vnode&&f.vnode(_),J(u,_,r,n.__n,u.ownerSVGElement!==void 0,32&r.__u?[o]:null,c,o??P(r),!!(32&r.__u),s),_.__.__k[_.__i]=_,Ne(c,_,s),_.__e!=o&&ge(_)),C.length>t&&C.sort(j));G.__r=0}function ye(e,t,n,_,r,o,u,c,s,a,m){var i,h,d,g,N,y=_&&_.__k||pe,p=t.length;for(n.__d=s,Pe(n,t,y),s=n.__d,i=0;i<p;i++)(d=n.__k[i])!=null&&typeof d!="boolean"&&typeof d!="function"&&(h=d.__i===-1?M:y[d.__i]||M,d.__i=i,J(e,d,h,r,o,u,c,s,a,m),g=d.__e,d.ref&&h.ref!=d.ref&&(h.ref&&Q(h.ref,null,d),m.push(d.ref,d.__c||g,d)),N==null&&g!=null&&(N=g),65536&d.__u||h.__k===d.__k?s=be(d,s,e):typeof d.type=="function"&&d.__d!==void 0?s=d.__d:g&&(s=g.nextSibling),d.__d=void 0,d.__u&=-196609);n.__d=s,n.__e=N}function Pe(e,t,n){var _,r,o,u,c,s=t.length,a=n.length,m=a,i=0;for(e.__k=[],_=0;_<s;_++)(r=e.__k[_]=(r=t[_])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?D(null,r,null,null,r):K(r)?D(A,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?D(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,c=Ue(r,n,u=_+i,m),r.__i=c,o=null,c!==-1&&(m--,(o=n[c])&&(o.__u|=131072)),o==null||o.__v===null?(c==-1&&i--,typeof r.type!="function"&&(r.__u|=65536)):c!==u&&(c===u+1?i++:c>u?m>s-u?i+=c-u:i--:i=c<u&&c==u-1?c-u:0,c!==_+i&&(r.__u|=65536))):(o=n[_])&&o.key==null&&o.__e&&(o.__e==e.__d&&(e.__d=P(o)),z(o,o,!1),n[_]=null,m--);if(m)for(_=0;_<a;_++)(o=n[_])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=P(o)),z(o,o))}function be(e,t,n){var _,r;if(typeof e.type=="function"){for(_=e.__k,r=0;_&&r<_.length;r++)_[r]&&(_[r].__=e,t=be(_[r],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Ue(e,t,n,_){var r=e.key,o=e.type,u=n-1,c=n+1,s=t[n];if(s===null||s&&r==s.key&&o===s.type)return n;if(_>(s!=null&&!(131072&s.__u)?1:0))for(;u>=0||c<t.length;){if(u>=0){if((s=t[u])&&!(131072&s.__u)&&r==s.key&&o===s.type)return u;u--}if(c<t.length){if((s=t[c])&&!(131072&s.__u)&&r==s.key&&o===s.type)return c;c++}}return-1}function ne(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||xe.test(t)?n:n+"px"}function I(e,t,n,_,r){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||ne(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||ne(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?_?n.u=_.u:(n.u=Date.now(),e.addEventListener(t,o?re:_e,o)):e.removeEventListener(t,o?re:_e,o);else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function _e(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(f.event?f.event(e):e)}function re(e){return this.l[e.type+!0](f.event?f.event(e):e)}function J(e,t,n,_,r,o,u,c,s,a){var m,i,h,d,g,N,y,p,b,S,R,w,Z,$,O,k=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),o=[c=t.__e=n.__e]),(m=f.__b)&&m(t);e:if(typeof k=="function")try{if(p=t.props,b=(m=k.contextType)&&_[m.__c],S=m?b?b.props.value:m.__:_,n.__c?y=(i=t.__c=n.__c).__=i.__E:("prototype"in k&&k.prototype.render?t.__c=i=new k(p,S):(t.__c=i=new F(p,S),i.constructor=k,i.render=Me),b&&b.sub(i),i.props=p,i.state||(i.state={}),i.context=S,i.__n=_,h=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),k.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=x({},i.__s)),x(i.__s,k.getDerivedStateFromProps(p,i.__s))),d=i.props,g=i.state,i.__v=t,h)k.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(k.getDerivedStateFromProps==null&&p!==d&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(p,S),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(p,i.__s,S)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(i.props=p,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(H){H&&(H.__=t)}),R=0;R<i._sb.length;R++)i.__h.push(i._sb[R]);i._sb=[],i.__h.length&&u.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(p,i.__s,S),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(d,g,N)})}if(i.context=S,i.props=p,i.__P=e,i.__e=!1,w=f.__r,Z=0,"prototype"in k&&k.prototype.render){for(i.state=i.__s,i.__d=!1,w&&w(t),m=i.render(i.props,i.state,i.context),$=0;$<i._sb.length;$++)i.__h.push(i._sb[$]);i._sb=[]}else do i.__d=!1,w&&w(t),m=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++Z<25);i.state=i.__s,i.getChildContext!=null&&(_=x(x({},_),i.getChildContext())),h||i.getSnapshotBeforeUpdate==null||(N=i.getSnapshotBeforeUpdate(d,g)),ye(e,K(O=m!=null&&m.type===A&&m.key==null?m.props.children:m)?O:[O],t,n,_,r,o,u,c,s,a),i.base=t.__e,t.__u&=-161,i.__h.length&&u.push(i),y&&(i.__E=i.__=null)}catch(H){t.__v=null,s||o!=null?(t.__e=c,t.__u|=s?160:32,o[o.indexOf(c)]=null):(t.__e=n.__e,t.__k=n.__k),f.__e(H,t,n)}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=we(n.__e,t,n,_,r,o,u,s,a);(m=f.diffed)&&m(t)}function Ne(e,t,n){t.__d=void 0;for(var _=0;_<n.length;_++)Q(n[_],n[++_],n[++_]);f.__c&&f.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){f.__e(o,r.__v)}})}function we(e,t,n,_,r,o,u,c,s){var a,m,i,h,d,g,N,y=n.props,p=t.props,b=t.type;if(b==="svg"&&(r=!0),o!=null){for(a=0;a<o.length;a++)if((d=o[a])&&"setAttribute"in d==!!b&&(b?d.localName===b:d.nodeType===3)){e=d,o[a]=null;break}}if(e==null){if(b===null)return document.createTextNode(p);e=r?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,p.is&&p),o=null,c=!1}if(b===null)y===p||c&&e.data===p||(e.data=p);else{if(o=o&&q.call(e.childNodes),y=n.props||M,!c&&o!=null)for(y={},a=0;a<e.attributes.length;a++)y[(d=e.attributes[a]).name]=d.value;for(a in y)d=y[a],a=="children"||(a=="dangerouslySetInnerHTML"?i=d:a==="key"||a in p||I(e,a,null,d,r));for(a in p)d=p[a],a=="children"?h=d:a=="dangerouslySetInnerHTML"?m=d:a=="value"?g=d:a=="checked"?N=d:a==="key"||c&&typeof d!="function"||y[a]===d||I(e,a,d,y[a],r);if(m)c||i&&(m.__html===i.__html||m.__html===e.innerHTML)||(e.innerHTML=m.__html),t.__k=[];else if(i&&(e.innerHTML=""),ye(e,K(h)?h:[h],t,n,_,r&&b!=="foreignObject",o,u,o?o[0]:n.__k&&P(n,0),c,s),o!=null)for(a=o.length;a--;)o[a]!=null&&ve(o[a]);c||(a="value",g!==void 0&&(g!==e[a]||b==="progress"&&!g||b==="option"&&g!==y[a])&&I(e,a,g,y[a],!1),a="checked",N!==void 0&&N!==e[a]&&I(e,a,N,y[a],!1))}return e}function Q(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(_){f.__e(_,n)}}function z(e,t,n){var _,r;if(f.unmount&&f.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||Q(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(o){f.__e(o,t)}_.base=_.__P=null,e.__c=void 0}if(_=e.__k)for(r=0;r<_.length;r++)_[r]&&z(_[r],t,n||typeof e.type!="function");n||e.__e==null||ve(e.__e),e.__=e.__e=e.__d=void 0}function Me(e,t,n){return this.constructor(e,n)}function Ee(e,t,n){var _,r,o,u;f.__&&f.__(e,t),r=(_=typeof n=="function")?null:n&&n.__k||t.__k,o=[],u=[],J(t,e=(!_&&n||t).__k=Ce(A,null,[e]),r||M,M,t.ownerSVGElement!==void 0,!_&&n?[n]:r?null:t.firstChild?q.call(t.childNodes):null,o,!_&&n?n:r?r.__e:t.firstChild,_,u),Ne(o,e,u)}q=pe.slice,f={__e:function(e,t,n,_){for(var r,o,u;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(e)),u=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,_||{}),u=r.__d),u)return r.__E=r}catch(c){e=c}throw e}},me=0,F.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},n),this.props)),e&&x(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),te(this))},F.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),te(this))},F.prototype.render=A,C=[],he=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,j=function(e,t){return e.__v.__b-t.__v.__b},G.__r=0;var Re=0;function l(e,t,n,_,r,o){var u,c,s={};for(c in t)c=="ref"?u=t[c]:s[c]=t[c];var a={type:e,props:s,key:n,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Re,__i:-1,__u:0,__source:r,__self:o};if(typeof e=="function"&&(u=e.defaultProps))for(c in u)s[c]===void 0&&(s[c]=u[c]);return f.vnode&&f.vnode(a),a}function $e(e){return l(A,{children:l("div",{className:"navbar",children:[l("div",{class:"logo-container",children:[l("img",{src:"/icon1.png",alt:"Chrythm's Icon"}),l("b",{children:"Chrythm"})]}),l("div",{class:"navigation-list",children:e.labels.map(t=>l("div",{onClick:()=>e.updateActive(t),className:"container"+(e.activeNav==t?" active":""),children:[t,l("div",{className:"active-bubble"})]}))})]})})}function He(){return l(A,{children:l("div",{className:"about-me",children:[l("div",{className:"intro",children:[l("div",{class:"text",children:[l("h1",{children:"Hi, I'm Chrythm"}),l("h4",{children:"I would like to make music for you."})]}),l("img",{src:"/icon2.png",alt:"Chrythm's Icon, Large"})]}),l("div",{class:"info",children:[l("div",{class:"text",children:[l("h1",{children:"About Me"}),l("p",{children:"I have been producing music since 2015. I play the piano, write game soundtracks, and conduct a digital orchestra."})]}),l("img",{src:"/card.png",alt:"A card showing an idea of who I am."})]})]})})}function Ie(){return l(A,{children:l("div",{className:"payment-contact",children:[l("div",{className:"payment",children:[l("table",{class:"chart",children:[l("tr",{class:"headers",children:[l("th",{children:"Duration (min)"}),l("th",{children:"Robux Rate"})]}),l("tr",{children:[l("th",{children:"<00:30"}),l("th",{children:"$20 Robux equivalent"})]}),l("tr",{children:[l("th",{children:"01:00 - 02:00"}),l("th",{children:"$60 Robux equivalent"})]}),l("tr",{children:[l("th",{children:"02:00 - 03:00"}),l("th",{children:"$140 Robux equivalent"})]}),l("tr",{children:[l("th",{children:">03:00"}),l("th",{children:"Let's negotiate!"})]})]}),l("div",{class:"text",children:[l("h1",{children:"Payment"}),l("p",{children:"At this time, I am only doing payment through robux on Roblox. I will be opening up to USD payment in the near future. Robux amount should be calculated according to developer exchange rates."})]})]}),l("div",{class:"contact",children:[l("h1",{children:"Contact"}),l("p",{children:["Send me an email, ",l("b",{children:"chrythman@gmail.com"}),l("br",{}),"After we get in contact via email, I would prefer to use Discord for faster communication. If you just want to stick with email, that’s also fine with me."]})]})]})})}function De(){return l(A,{children:l("div",{className:"footer",children:[l("p",{children:"Made with"}),l("img",{src:"/heart.png"}),l("p",{children:["by ",l("a",{href:"https://github.com/HooferDevelops",children:"Hoofer"})," & ",l("a",{href:"https://github.com/LuckFire",children:"LuckFire"})]})]})})}var E,v,V,oe,W=0,ke=[],L=[],ie=f.__b,le=f.__r,ce=f.diffed,ae=f.__c,ue=f.unmount;function Y(e,t){f.__h&&f.__h(v,e,W||t),W=0;var n=v.__H||(v.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:L}),n.__[e]}function U(e){return W=1,Fe(Se,e)}function Fe(e,t,n){var _=Y(E++,2);if(_.t=e,!_.__c&&(_.__=[n?n(t):Se(void 0,t),function(c){var s=_.__N?_.__N[0]:_.__[0],a=_.t(s,c);s!==a&&(_.__N=[a,_.__[1]],_.__c.setState({}))}],_.__c=v,!v.u)){var r=function(c,s,a){if(!_.__c.__H)return!0;var m=_.__c.__H.__.filter(function(h){return h.__c});if(m.every(function(h){return!h.__N}))return!o||o.call(this,c,s,a);var i=!1;return m.forEach(function(h){if(h.__N){var d=h.__[0];h.__=h.__N,h.__N=void 0,d!==h.__[0]&&(i=!0)}}),!(!i&&_.__c.props===c)&&(!o||o.call(this,c,s,a))};v.u=!0;var o=v.shouldComponentUpdate,u=v.componentWillUpdate;v.componentWillUpdate=function(c,s,a){if(this.__e){var m=o;o=void 0,r(c,s,a),o=m}u&&u.call(this,c,s,a)},v.shouldComponentUpdate=r}return _.__N||_.__}function Le(e,t){var n=Y(E++,3);!f.__s&&Ae(n.__H,t)&&(n.__=e,n.i=t,v.__H.__h.push(n))}function B(e){return W=5,Te(function(){return{current:e}},[])}function Te(e,t){var n=Y(E++,7);return Ae(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Ge(){for(var e;e=ke.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(T),e.__H.__h.forEach(X),e.__H.__h=[]}catch(t){e.__H.__h=[],f.__e(t,e.__v)}}f.__b=function(e){v=null,ie&&ie(e)},f.__r=function(e){le&&le(e),E=0;var t=(v=e.__c).__H;t&&(V===v?(t.__h=[],v.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=L,n.__N=n.i=void 0})):(t.__h.forEach(T),t.__h.forEach(X),t.__h=[],E=0)),V=v},f.diffed=function(e){ce&&ce(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ke.push(t)!==1&&oe===f.requestAnimationFrame||((oe=f.requestAnimationFrame)||We)(Ge)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==L&&(n.__=n.__V),n.i=void 0,n.__V=L})),V=v=null},f.__c=function(e,t){t.some(function(n){try{n.__h.forEach(T),n.__h=n.__h.filter(function(_){return!_.__||X(_)})}catch(_){t.some(function(r){r.__h&&(r.__h=[])}),t=[],f.__e(_,n.__v)}}),ae&&ae(e,t)},f.unmount=function(e){ue&&ue(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{T(_)}catch(r){t=r}}),n.__H=void 0,t&&f.__e(t,n.__v))};var se=typeof requestAnimationFrame=="function";function We(e){var t,n=function(){clearTimeout(_),se&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);se&&(t=requestAnimationFrame(n))}function T(e){var t=v,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),v=t}function X(e){var t=v;e.__c=e.__(),v=t}function Ae(e,t){return!e||e.length!==t.length||t.some(function(n,_){return n!==e[_]})}function Se(e,t){return typeof t=="function"?t(e):t}function qe(e){let[t,n]=U(e.genres[0]);return l(A,{children:l("div",{className:"music-navigation",children:e.genres.map(_=>l("div",{onClick:()=>{n(_),e.genreState(_),e.playEvent(null)},className:"button"+(t==_?" selected":""),children:_},_))})})}function de(e){e=Math.floor(e);const t=Math.floor(e/60),n=e%60,_=String(t).padStart(2,"0"),r=String(n).padStart(2,"0");return`${_}:${r}`}function Oe(e){let t=B(null),n=B(null),_=B(null),[r,o]=U(0),[u,c]=U(0),s=()=>{var i;n.current=requestAnimationFrame(s),o((i=t.current)==null?void 0:i.currentTime)},a=()=>{var i;c((i=t.current)==null?void 0:i.duration)},m=i=>{var N;let h=_.current.offsetWidth,g=(i.clientX-_.current.getBoundingClientRect().left)/h;t.current&&(t.current.currentTime=g*u,o((N=t.current)==null?void 0:N.currentTime))};return Le(()=>{var i,h;e.play?(n.current=requestAnimationFrame(s),(i=t.current)==null||i.play()):(cancelAnimationFrame(n.current),(h=t.current)==null||h.pause())},[e.play,t]),l(A,{children:l("div",{className:"music-card",children:[l("div",{className:"info",children:[l("img",{className:"pause-play",onClick:()=>{e.play?e.playEvent(null):e.playEvent(e.songUri)},src:e.play?"/pause.png":"/play.png"}),l("div",{className:"text",children:[l("b",{children:e.songName}),l("p",{children:e.albumName})]})]}),l("div",{className:"status",children:[l("div",{ref:_,onClick:m,className:"progress-bar",children:l("div",{className:"progress-fill",style:{width:r/u*100+"%"}})}),l("div",{className:"timing",children:[l("p",{children:de(r)}),l("p",{children:de(u)})]})]}),l("audio",{ref:t,src:e.songUri,onLoadedMetadata:a})]})})}let fe={Games:[{Name:"Game 1",Album:"Album 1",URI:"/songs/games/example_gamesoundtrack.mp3"},{Name:"Game 2",Album:"Album 1",URI:"/songs/games/example_gamesoundtrack2.mp3"},{Name:"Game 3",Album:"Album 1",URI:"/songs/games/example_gamesoundtrack3.mp3"},{Name:"Game 4",Album:"Album 1",URI:"/songs/games/example_gamesoundtrack4.mp3"},{Name:"Game 5",Album:"Album 1",URI:"/songs/games/example_gamesoundtrack5.mp3"},{Name:"Game 6",Album:"Album 1",URI:"/songs/games/example_gamesoundtrack6.mp3"}],Piano:[{Name:"Piano 1",Album:"Album 1",URI:"/songs/piano/example_pianosolo.mp3"},{Name:"Piano 2",Album:"Album 1",URI:"/songs/piano/example_pianosong.mp3"}],EDM:[{Name:"EDM 1",Album:"Album 1",URI:"/songs/edm/example_edmcover.mp3"},{Name:"EDM 2",Album:"Album 1",URI:"/songs/edm/example_edmoriginal.mp3"},{Name:"EDM 3",Album:"Album 1",URI:"/songs/edm/example_edmoriginalgrungy.mp3"},{Name:"EDM 4",Album:"Album 1",URI:"/songs/edm/example_edmoriginalgrungy2.mp3"}],Surreal:[{Name:"Surreal 1",Album:"Album 1",URI:"/songs/surreal/example_surrealgrungy.mp3"}],Cinematic:[{Name:"Cinematic 1",Album:"Album 1",URI:"/songs/cinematic/example_cinematicdesert.mp3"}]};function Ve(){var e=Object.keys(fe),[t,n]=U(e[0]),[_,r]=U(null);return l(A,{children:l("div",{className:"music",children:[l("h1",{children:"My Music"}),l("p",{children:"These are some example clips from my songs."}),l(qe,{genreState:n,playEvent:r,genres:e}),l("div",{className:"music-list",children:fe[t||"Games"].map(o=>l(Oe,{playEvent:r,play:_==o.URI,songName:o.Name,albumName:o.Album,songUri:o.URI},t+o.URI))})]})})}function Be(){let[e,t]=U("About Me");return l(A,{children:[l($e,{updateActive:t,activeNav:e,labels:["About Me","My Music","Payment","Contact"]}),l(He,{}),l(Ve,{}),l(Ie,{}),l(De,{})]})}Ee(l(Be,{}),document.getElementById("app"));
