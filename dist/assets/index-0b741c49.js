(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();var V=globalThis&&globalThis.__awaiter||function(l,t,e,i){function n(s){return s instanceof e?s:new e(function(o){o(s)})}return new(e||(e=Promise))(function(s,o){function a(r){try{c(i.next(r))}catch(h){o(h)}}function d(r){try{c(i.throw(r))}catch(h){o(h)}}function c(r){r.done?s(r.value):n(r.value).then(a,d)}c((i=i.apply(l,t||[])).next())})};function j(l,t){return V(this,void 0,void 0,function*(){const e=new AudioContext({sampleRate:t});return e.decodeAudioData(l).finally(()=>e.close())})}function N(l){const t=l[0];if(t.some(e=>e>1||e<-1)){const e=t.length;let i=0;for(let n=0;n<e;n++){const s=Math.abs(t[n]);s>i&&(i=s)}for(const n of l)for(let s=0;s<e;s++)n[s]/=i}return l}function X(l,t){return typeof l[0]=="number"&&(l=[l]),N(l),{duration:t,length:l[0].length,sampleRate:l[0].length/t,numberOfChannels:l.length,getChannelData:e=>l==null?void 0:l[e],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}const A={decode:j,createBuffer:X};var _=globalThis&&globalThis.__awaiter||function(l,t,e,i){function n(s){return s instanceof e?s:new e(function(o){o(s)})}return new(e||(e=Promise))(function(s,o){function a(r){try{c(i.next(r))}catch(h){o(h)}}function d(r){try{c(i.throw(r))}catch(h){o(h)}}function c(r){r.done?s(r.value):n(r.value).then(a,d)}c((i=i.apply(l,t||[])).next())})};function q(l,t,e){var i,n;return _(this,void 0,void 0,function*(){const s=yield fetch(l,e);{const o=(i=s.clone().body)===null||i===void 0?void 0:i.getReader(),a=Number((n=s.headers)===null||n===void 0?void 0:n.get("Content-Length"));let d=0;const c=(r,h)=>_(this,void 0,void 0,function*(){if(r)return;d+=(h==null?void 0:h.length)||0;const p=Math.round(d/a*100);return t(p),o==null?void 0:o.read().then(({done:m,value:u})=>c(m,u))});o==null||o.read().then(({done:r,value:h})=>c(r,h))}return s.blob()})}const G={fetchBlob:q};class D{constructor(){this.listeners={}}on(t,e){return this.listeners[t]||(this.listeners[t]=new Set),this.listeners[t].add(e),()=>this.un(t,e)}once(t,e){const i=this.on(t,e),n=this.on(t,()=>{i(),n()});return i}un(t,e){this.listeners[t]&&(e?this.listeners[t].delete(e):delete this.listeners[t])}unAll(){this.listeners={}}emit(t,...e){this.listeners[t]&&this.listeners[t].forEach(i=>i(...e))}}class U extends D{constructor(t){super(),t.media?this.media=t.media:this.media=document.createElement("audio"),t.mediaControls&&(this.media.controls=!0),t.autoplay&&(this.media.autoplay=!0),t.playbackRate!=null&&this.onceMediaEvent("canplay",()=>{t.playbackRate!=null&&(this.media.playbackRate=t.playbackRate)})}onMediaEvent(t,e,i){return this.media.addEventListener(t,e,i),()=>this.media.removeEventListener(t,e)}onceMediaEvent(t,e){return this.onMediaEvent(t,e,{once:!0})}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const t=this.getSrc();t.startsWith("blob:")&&URL.revokeObjectURL(t)}setSrc(t,e){if(this.getSrc()===t)return;this.revokeSrc();const n=e instanceof Blob?URL.createObjectURL(e):t;this.media.src=n,this.media.load()}destroy(){this.media.pause(),this.revokeSrc(),this.media.src="",this.media.load()}play(){return this.media.play()}pause(){this.media.pause()}isPlaying(){return this.media.currentTime>0&&!this.media.paused&&!this.media.ended}setTime(t){this.media.currentTime=t}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(t){this.media.volume=t}getMuted(){return this.media.muted}setMuted(t){this.media.muted=t}getPlaybackRate(){return this.media.playbackRate}setPlaybackRate(t,e){e!=null&&(this.media.preservesPitch=e),this.media.playbackRate=t}getMediaElement(){return this.media}setSinkId(t){return this.media.setSinkId(t)}}function Y(l,t,e,i,n=5){let s=()=>{};if(!l)return s;const o=a=>{if(a.button===2)return;a.preventDefault(),a.stopPropagation();let d=a.clientX,c=a.clientY,r=!1;const h=u=>{u.preventDefault(),u.stopPropagation();const f=u.clientX,y=u.clientY;if(r||Math.abs(f-d)>=n||Math.abs(y-c)>=n){const{left:C,top:w}=l.getBoundingClientRect();r||(r=!0,e==null||e(d-C,c-w)),t(f-d,y-c,f-C,y-w),d=f,c=y}},p=u=>{r&&(u.preventDefault(),u.stopPropagation())},m=()=>{r&&(i==null||i()),s()};document.addEventListener("pointermove",h),document.addEventListener("pointerup",m),document.addEventListener("pointerleave",m),document.addEventListener("click",p,!0),s=()=>{document.removeEventListener("pointermove",h),document.removeEventListener("pointerup",m),document.removeEventListener("pointerleave",m),setTimeout(()=>{document.removeEventListener("click",p,!0)},10)}};return l.addEventListener("pointerdown",o),()=>{s(),l.removeEventListener("pointerdown",o)}}class S extends D{constructor(t,e){super(),this.timeouts=[],this.isScrolling=!1,this.audioData=null,this.resizeObserver=null,this.isDragging=!1,this.options=t;let i;if(typeof t.container=="string"?i=document.querySelector(t.container):t.container instanceof HTMLElement&&(i=t.container),!i)throw new Error("Container not found");this.parent=i;const[n,s]=this.initHtml();i.appendChild(n),this.container=n,this.scrollContainer=s.querySelector(".scroll"),this.wrapper=s.querySelector(".wrapper"),this.canvasWrapper=s.querySelector(".canvases"),this.progressWrapper=s.querySelector(".progress"),this.cursor=s.querySelector(".cursor"),e&&s.appendChild(e),this.initEvents()}initEvents(){const t=i=>{const n=this.wrapper.getBoundingClientRect(),s=i.clientX-n.left,o=i.clientX-n.left,a=s/n.width,d=o/n.height;return[a,d]};this.wrapper.addEventListener("click",i=>{const[n,s]=t(i);this.emit("click",n,s)}),this.wrapper.addEventListener("dblclick",i=>{const[n,s]=t(i);this.emit("dblclick",n,s)}),this.options.dragToSeek&&this.initDrag(),this.scrollContainer.addEventListener("scroll",()=>{const{scrollLeft:i,scrollWidth:n,clientWidth:s}=this.scrollContainer,o=i/n,a=(i+s)/n;this.emit("scroll",o,a)});const e=this.createDelay(100);this.resizeObserver=new ResizeObserver(()=>{e(()=>this.reRender())}),this.resizeObserver.observe(this.scrollContainer)}initDrag(){Y(this.wrapper,(t,e,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))},()=>this.isDragging=!0,()=>this.isDragging=!1)}getHeight(){return this.options.height==null?128:isNaN(Number(this.options.height))?this.options.height==="auto"&&this.parent.clientHeight||128:Number(this.options.height)}initHtml(){const t=document.createElement("div"),e=t.attachShadow({mode:"open"});return e.innerHTML=`
      <style>
        :host {
          user-select: none;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
          touch-action: none;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight()}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `,[t,e]}setOptions(t){this.options=t,this.reRender()}getWrapper(){return this.wrapper}getScroll(){return this.scrollContainer.scrollLeft}destroy(){var t;this.container.remove(),(t=this.resizeObserver)===null||t===void 0||t.disconnect()}createDelay(t=10){const e={};return this.timeouts.push(e),i=>{e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout(i,t)}}convertColorValues(t){if(!Array.isArray(t))return t||"";if(t.length<2)return t[0]||"";const e=document.createElement("canvas"),n=e.getContext("2d").createLinearGradient(0,0,0,e.height),s=1/(t.length-1);return t.forEach((o,a)=>{const d=a*s;n.addColorStop(d,o)}),n}renderBarWaveform(t,e,i,n){const s=t[0],o=t[1]||t[0],a=s.length,{width:d,height:c}=i.canvas,r=c/2,h=window.devicePixelRatio||1,p=e.barWidth?e.barWidth*h:1,m=e.barGap?e.barGap*h:e.barWidth?p/2:0,u=e.barRadius||0,f=d/(p+m)/a,y=u&&"roundRect"in i?"roundRect":"rect";i.beginPath();let C=0,w=0,M=0;for(let E=0;E<=a;E++){const g=Math.round(E*f);if(g>C){const O=Math.round(w*r*n),I=Math.round(M*r*n),z=O+I||1;let x=r-O;e.barAlign==="top"?x=0:e.barAlign==="bottom"&&(x=c-z),i[y](C*(p+m),x,p,z,u),C=g,w=0,M=0}const v=Math.abs(s[E]||0),T=Math.abs(o[E]||0);v>w&&(w=v),T>M&&(M=T)}i.fill(),i.closePath()}renderLineWaveform(t,e,i,n){const s=o=>{const a=t[o]||t[0],d=a.length,{height:c}=i.canvas,r=c/2,h=i.canvas.width/d;i.moveTo(0,r);let p=0,m=0;for(let u=0;u<=d;u++){const f=Math.round(u*h);if(f>p){const C=Math.round(m*r*n)||1,w=r+C*(o===0?-1:1);i.lineTo(p,w),p=f,m=0}const y=Math.abs(a[u]||0);y>m&&(m=y)}i.lineTo(p,r)};i.beginPath(),s(0),s(1),i.fill(),i.closePath()}renderWaveform(t,e,i){if(i.fillStyle=this.convertColorValues(e.waveColor),e.renderFunction){e.renderFunction(t,i);return}let n=e.barHeight||1;if(e.normalize){const s=Array.from(t[0]).reduce((o,a)=>Math.max(o,Math.abs(a)),0);n=s?1/s:1}if(e.barWidth||e.barGap||e.barAlign){this.renderBarWaveform(t,e,i,n);return}this.renderLineWaveform(t,e,i,n)}renderSingleCanvas(t,e,i,n,s,o,a,d){const c=window.devicePixelRatio||1,r=document.createElement("canvas"),h=t[0].length;r.width=Math.round(i*(o-s)/h),r.height=n*c,r.style.width=`${Math.floor(r.width/c)}px`,r.style.height=`${n}px`,r.style.left=`${Math.floor(s*i/c/h)}px`,a.appendChild(r);const p=r.getContext("2d");this.renderWaveform(t.map(f=>f.slice(s,o)),e,p);const m=r.cloneNode();d.appendChild(m);const u=m.getContext("2d");r.width>0&&r.height>0&&u.drawImage(r,0,0),u.globalCompositeOperation="source-in",u.fillStyle=this.convertColorValues(e.progressColor),u.fillRect(0,0,r.width,r.height)}renderChannel(t,e,i){const n=document.createElement("div"),s=this.getHeight();n.style.height=`${s}px`,this.canvasWrapper.style.minHeight=`${s}px`,this.canvasWrapper.appendChild(n);const o=n.cloneNode();this.progressWrapper.appendChild(o);const{scrollLeft:a,scrollWidth:d,clientWidth:c}=this.scrollContainer,r=t[0].length,h=r/d;let p=Math.min(S.MAX_CANVAS_WIDTH,c);if(e.barWidth||e.barGap){const g=e.barWidth||.5,v=e.barGap||g/2,T=g+v;p%T!==0&&(p=Math.floor(p/T)*T)}const m=Math.floor(Math.abs(a)*h),u=Math.floor(m+p*h),f=u-m,y=(g,v)=>{this.renderSingleCanvas(t,e,i,s,Math.max(0,g),Math.min(v,r),n,o)},C=this.createDelay(),w=this.createDelay(),M=(g,v)=>{y(g,v),g>0&&C(()=>{M(g-f,v-f)})},E=(g,v)=>{y(g,v),v<r&&w(()=>{E(g+f,v+f)})};M(m,u),u<r&&E(u,u+f)}render(t){this.timeouts.forEach(a=>a.timeout&&clearTimeout(a.timeout)),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",this.wrapper.style.width="";const e=window.devicePixelRatio||1,i=this.scrollContainer.clientWidth,n=Math.ceil(t.duration*(this.options.minPxPerSec||0));this.isScrolling=n>i;const s=this.options.fillParent&&!this.isScrolling,o=(s?i:n)*e;if(this.wrapper.style.width=s?"100%":`${n}px`,this.scrollContainer.style.overflowX=this.isScrolling?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.options.splitChannels)for(let a=0;a<t.numberOfChannels;a++){const d=Object.assign(Object.assign({},this.options),this.options.splitChannels[a]);this.renderChannel([t.getChannelData(a)],d,o)}else{const a=[t.getChannelData(0)];t.numberOfChannels>1&&a.push(t.getChannelData(1)),this.renderChannel(a,this.options,o)}this.audioData=t,this.emit("render")}reRender(){if(!this.audioData)return;const t=this.progressWrapper.clientWidth;this.render(this.audioData);const e=this.progressWrapper.clientWidth;this.scrollContainer.scrollLeft+=e-t}zoom(t){this.options.minPxPerSec=t,this.reRender()}scrollIntoView(t,e=!1){const{clientWidth:i,scrollLeft:n,scrollWidth:s}=this.scrollContainer,o=s*t,a=i/2,d=e&&this.options.autoCenter&&!this.isDragging?a:i;if(o>n+d||o<n)if(this.options.autoCenter&&!this.isDragging){const c=a/20;o-(n+a)>=c&&o<n+i?this.scrollContainer.scrollLeft+=c:this.scrollContainer.scrollLeft=o-a}else this.isDragging?this.scrollContainer.scrollLeft=o<n?o-10:o-i+10:this.scrollContainer.scrollLeft=o;{const{scrollLeft:c}=this.scrollContainer,r=c/s,h=(c+i)/s;this.emit("scroll",r,h)}}renderProgress(t,e){isNaN(t)||(this.progressWrapper.style.width=`${t*100}%`,this.cursor.style.left=`${t*100}%`,this.cursor.style.marginLeft=Math.round(t*100)===100?`-${this.options.cursorWidth}px`:"",this.isScrolling&&this.options.autoScroll&&this.scrollIntoView(t,e))}}S.MAX_CANVAS_WIDTH=4e3;class K extends D{constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",()=>{requestAnimationFrame(()=>{this.emit("tick")})}),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}var k=globalThis&&globalThis.__awaiter||function(l,t,e,i){function n(s){return s instanceof e?s:new e(function(o){o(s)})}return new(e||(e=Promise))(function(s,o){function a(r){try{c(i.next(r))}catch(h){o(h)}}function d(r){try{c(i.throw(r))}catch(h){o(h)}}function c(r){r.done?s(r.value):n(r.value).then(a,d)}c((i=i.apply(l,t||[])).next())})};const Z={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class B extends U{static create(t){return new B(t)}constructor(t){var e,i;super({media:t.media,mediaControls:t.mediaControls,autoplay:t.autoplay,playbackRate:t.audioRate}),this.plugins=[],this.decodedData=null,this.subscriptions=[],this.options=Object.assign({},Z,t),this.timer=new K;const n=t.media?void 0:this.getMediaElement();this.renderer=new S(this.options,n),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins();const s=this.options.url||((e=this.options.media)===null||e===void 0?void 0:e.currentSrc)||((i=this.options.media)===null||i===void 0?void 0:i.src);s&&this.load(s,this.options.peaks,this.options.duration)}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",()=>{const t=this.getCurrentTime();this.renderer.renderProgress(t/this.getDuration(),!0),this.emit("timeupdate",t),this.emit("audioprocess",t)}))}initPlayerEvents(){this.subscriptions.push(this.onMediaEvent("timeupdate",()=>{const t=this.getCurrentTime();this.renderer.renderProgress(t/this.getDuration(),this.isPlaying()),this.emit("timeupdate",t)}),this.onMediaEvent("play",()=>{this.emit("play"),this.timer.start()}),this.onMediaEvent("pause",()=>{this.emit("pause"),this.timer.stop()}),this.onMediaEvent("emptied",()=>{this.timer.stop()}),this.onMediaEvent("ended",()=>{this.emit("finish")}),this.onMediaEvent("seeking",()=>{this.emit("seeking",this.getCurrentTime())}))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",(t,e)=>{this.options.interact&&(this.seekTo(t),this.emit("interaction",t*this.getDuration()),this.emit("click",t,e))}),this.renderer.on("dblclick",(t,e)=>{this.emit("dblclick",t,e)}),this.renderer.on("scroll",(t,e)=>{const i=this.getDuration();this.emit("scroll",t*i,e*i)}),this.renderer.on("render",()=>{this.emit("redraw")}));{let t;this.subscriptions.push(this.renderer.on("drag",e=>{this.options.interact&&(this.renderer.renderProgress(e),clearTimeout(t),t=setTimeout(()=>{this.seekTo(e)},this.isPlaying()?0:200),this.emit("interaction",e*this.getDuration()),this.emit("drag",e))}))}}initPlugins(){var t;!((t=this.options.plugins)===null||t===void 0)&&t.length&&this.options.plugins.forEach(e=>{this.registerPlugin(e)})}setOptions(t){this.options=Object.assign({},this.options,t),this.renderer.setOptions(this.options),t.audioRate&&this.setPlaybackRate(t.audioRate),t.mediaControls!=null&&(this.getMediaElement().controls=t.mediaControls)}registerPlugin(t){return t.init(this),this.plugins.push(t),this.subscriptions.push(t.once("destroy",()=>{this.plugins=this.plugins.filter(e=>e!==t)})),t}getWrapper(){return this.renderer.getWrapper()}getScroll(){return this.renderer.getScroll()}getActivePlugins(){return this.plugins}loadAudio(t,e,i,n){return k(this,void 0,void 0,function*(){if(this.emit("load",t),this.isPlaying()&&this.pause(),this.decodedData=null,!e&&!i){const s=o=>this.emit("loading",o);e=yield G.fetchBlob(t,s,this.options.fetchParams)}if(this.setSrc(t,e),i)n=(yield Promise.resolve(n||this.getDuration()))||(yield new Promise(s=>{this.onceMediaEvent("loadedmetadata",()=>s(this.getDuration()))}))||(yield Promise.resolve(0)),this.decodedData=A.createBuffer(i,n);else if(e){const s=yield e.arrayBuffer();this.decodedData=yield A.decode(s,this.options.sampleRate)}this.emit("decode",this.getDuration()),this.decodedData&&this.renderer.render(this.decodedData),this.emit("ready",this.getDuration())})}load(t,e,i){return k(this,void 0,void 0,function*(){yield this.loadAudio(t,void 0,e,i)})}loadBlob(t,e,i){return k(this,void 0,void 0,function*(){yield this.loadAudio("blob",t,e,i)})}zoom(t){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(t),this.emit("zoom",t)}getDecodedData(){return this.decodedData}exportPeaks({channels:t=1,maxLength:e=8e3,precision:i=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const n=Math.min(t,this.decodedData.numberOfChannels),s=[];for(let o=0;o<n;o++){const a=this.decodedData.getChannelData(o),d=Math.min(a.length,e),c=a.length/d,r=[];for(let h=0;h<d;h++){const p=Math.round(h*c),m=a[p];r.push(Math.round(m*i)/i)}s.push(r)}return s}getDuration(){let t=super.getDuration()||0;return(t===0||t===1/0)&&this.decodedData&&(t=this.decodedData.duration),t}toggleInteraction(t){this.options.interact=t}seekTo(t){const e=this.getDuration()*t;this.setTime(e)}playPause(){return k(this,void 0,void 0,function*(){return this.isPlaying()?this.pause():this.play()})}stop(){this.pause(),this.setTime(0)}skip(t){this.setTime(this.getCurrentTime()+t)}empty(){this.load("",[[0]],.001)}destroy(){this.emit("destroy"),this.plugins.forEach(t=>t.destroy()),this.subscriptions.forEach(t=>t()),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}const J="/wiz-interview/assets/Eminem - Not Afraid-fab67381.mp3",H=32,b=B.create({container:"#player",waveColor:"#BF81FE",progressColor:"#8552F9",cursorColor:"#8D86FF",barGap:8,barRadius:6,fillParent:!0,normalize:!0,barWidth:2,barRadius:50,minPxPerSec:H,barHeight:20,url:J,height:112,cursorWidth:3,hideScrollbar:!0}),W=l=>{const t=Math.floor(l/60),i=`0${Math.round(l)%60}`.slice(-2);return`${t}:${i}`},L=document.getElementById("control-button"),Q=document.getElementById("zoomIn"),tt=document.getElementById("zoomOut"),P=document.getElementById("loader"),R=document.getElementById("song-title"),$=document.getElementById("remaning-time"),F=document.getElementById("current-time");let et=R.innerHTML.replace("/","")&&R.innerHTML.replace(".mp3","");R.innerHTML=et;b.once("ready",()=>{P.style.opacity=1,function l(){(P.style.opacity-=.1)<0?P.style.display="none":requestAnimationFrame(l)}()});b.on("decode",()=>{F.textContent="0:00",$.textContent="-"+W(b.getDuration()-b.getCurrentTime())});b.on("timeupdate",l=>{F.textContent=W(l),$.textContent="-"+W(b.getDuration()-l)});Q.addEventListener("click",()=>{b.zoom(H*5)});tt.addEventListener("click",()=>{b.zoom(H)});b.on("zoom",l=>{console.log("onZoom : "+l)});L.addEventListener("click",()=>{b.isPlaying()?(L.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" class="text-white w-16 h-16" viewBox="0 0 24 24"
    stroke-width="1" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
    </svg>`,b.pause()):(L.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" class="text-white w-16 h-16" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
      </svg>
      `,b.play())});document.addEventListener("DOMContentLoaded",()=>{L.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" class="text-white w-16 h-16" viewBox="0 0 24 24"
stroke-width="1" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round"
  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
</svg>`});