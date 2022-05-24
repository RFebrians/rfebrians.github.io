/*! For license information please see component---src-pages-test-tsx-249bce9ad6e133992925.js.LICENSE.txt */
(self.webpackChunkcodesandbox_0=self.webpackChunkcodesandbox_0||[]).push([[633],{9931:function(e,t){var n;!function(){"use strict";var i={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var o=l.apply(null,n);o&&e.push(o)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var a in n)i.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},7035:function(e,t,n){"use strict";n.r(t),n.d(t,{InView:function(){return h},default:function(){return h},defaultFallbackInView:function(){return u},observe:function(){return d},useInView:function(){return v}});var i=n(7294);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l.apply(this,arguments)}function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}var o=new Map,a=new WeakMap,c=0,s=void 0;function u(e){s=e}function m(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(a.has(n)||(c+=1,a.set(n,c.toString())),a.get(n)):"0":e[t]);var n})).toString()}function d(e,t,n,i){if(void 0===n&&(n={}),void 0===i&&(i=s),void 0===window.IntersectionObserver&&void 0!==i){var l=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),function(){}}var r=function(e){var t=m(e),n=o.get(t);if(!n){var i,l=new Map,r=new IntersectionObserver((function(t){t.forEach((function(t){var n,r=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=r),null==(n=l.get(t.target))||n.forEach((function(e){e(r,t)}))}))}),e);i=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:r,elements:l},o.set(t,n)}return n}(n),a=r.id,c=r.observer,u=r.elements,d=u.get(e)||[];return u.has(e)||u.set(e,d),d.push(t),c.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(u.delete(e),c.unobserve(e)),0===u.size&&(c.disconnect(),o.delete(a))}}var p=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function f(e){return"function"!=typeof e.children}var h=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),f(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,r(t,n);var a=o.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,i=e.rootMargin,l=e.trackVisibility,r=e.delay,o=e.fallbackInView;this._unobserveCb=d(this.node,this.handleChange,{threshold:t,root:n,rootMargin:i,trackVisibility:l,delay:r},o)}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!f(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var r=this.props,o=r.children,a=r.as,c=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(r,p);return i.createElement(a||"div",l({ref:this.handleNode},c),o)},o}(i.Component);function v(e){var t=void 0===e?{}:e,n=t.threshold,l=t.delay,r=t.trackVisibility,o=t.rootMargin,a=t.root,c=t.triggerOnce,s=t.skip,u=t.initialInView,m=t.fallbackInView,p=i.useRef(),f=i.useState({inView:!!u}),h=f[0],v=f[1],g=i.useCallback((function(e){void 0!==p.current&&(p.current(),p.current=void 0),s||e&&(p.current=d(e,(function(e,t){v({inView:e,entry:t}),t.isIntersecting&&c&&p.current&&(p.current(),p.current=void 0)}),{root:a,rootMargin:o,threshold:n,trackVisibility:r,delay:l},m))}),[Array.isArray(n)?n.toString():n,a,o,c,s,r,m,l]);(0,i.useEffect)((function(){p.current||!h.entry||c||s||v({inView:!!u})}));var b=[g,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}h.displayName="InView",h.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},1601:function(e,t,n){"use strict";t.Z=void 0;var i=o(n(7294)),l=o(n(5697)),r=o(n(9931));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(e){var t=e.animate,n=e.className,l=e.layout,o=e.lineColor,a=e.children;return"object"==typeof window&&document.documentElement.style.setProperty("--line-color",o),i.default.createElement("div",{className:(0,r.default)(n,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":"2-columns"===l,"vertical-timeline--one-column-left":"1-column"===l||"1-column-left"===l,"vertical-timeline--one-column-right":"1-column-right"===l})},a)};a.propTypes={children:l.default.oneOfType([l.default.arrayOf(l.default.node),l.default.node]).isRequired,className:l.default.string,animate:l.default.bool,layout:l.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:l.default.string},a.defaultProps={animate:!0,className:"",layout:"2-columns",lineColor:"#FFF"};var c=a;t.Z=c},1588:function(e,t,n){"use strict";t.Z=void 0;var i=a(n(7294)),l=a(n(5697)),r=a(n(9931)),o=n(7035);function a(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.children,n=e.className,l=e.contentArrowStyle,a=e.contentStyle,c=e.date,s=e.dateClassName,u=e.icon,m=e.iconClassName,d=e.iconOnClick,p=e.onTimelineElementClick,f=e.iconStyle,h=e.id,v=e.position,g=e.style,b=e.textClassName,E=e.intersectionObserverProps,y=e.visible;return i.default.createElement(o.InView,E,(function(e){var o=e.inView,E=e.ref;return i.default.createElement("div",{ref:E,id:h,className:(0,r.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===v,"vertical-timeline-element--right":"right"===v,"vertical-timeline-element--no-children":""===t}),style:g},i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:f,onClick:d,className:(0,r.default)(m,"vertical-timeline-element-icon",{"bounce-in":o||y,"is-hidden":!(o||y)})},u),i.default.createElement("div",{style:a,onClick:p,className:(0,r.default)(b,"vertical-timeline-element-content",{"bounce-in":o||y,"is-hidden":!(o||y)})},i.default.createElement("div",{style:l,className:"vertical-timeline-element-content-arrow"}),t,i.default.createElement("span",{className:(0,r.default)(s,"vertical-timeline-element-date")},c))))}))};c.propTypes={children:l.default.oneOfType([l.default.arrayOf(l.default.node),l.default.node]),className:l.default.string,contentArrowStyle:l.default.shape({}),contentStyle:l.default.shape({}),date:l.default.node,dateClassName:l.default.string,icon:l.default.element,iconClassName:l.default.string,iconStyle:l.default.shape({}),iconOnClick:l.default.func,onTimelineElementClick:l.default.func,id:l.default.string,position:l.default.string,style:l.default.shape({}),textClassName:l.default.string,visible:l.default.bool,intersectionObserverProps:l.default.shape({root:l.default.object,rootMargin:l.default.string,threshold:l.default.number,triggerOnce:l.default.bool})},c.defaultProps={children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconClassName:"",iconOnClick:null,onTimelineElementClick:null,iconStyle:null,id:"",style:null,date:"",dateClassName:"",position:"",textClassName:"",visible:!1,intersectionObserverProps:{rootMargin:"0px 0px -40px 0px",triggerOnce:!0}};var s=c;t.Z=s},7704:function(e,t,n){"use strict";e.exports={VerticalTimeline:n(1601).Z,VerticalTimelineElement:n(1588).Z}},4528:function(e,t,n){"use strict";var i=n(7294),l=n(1191),r=n(2258),o={triangle:{shape:(0,l.tZ)("polygon",{strokeWidth:"1px",strokeLinejoin:"round",strokeMiterlimit:"10",points:"14.921,2.27 28.667,25.5 1.175,25.5 "}),viewBox:"0 0 30 30"},circle:{shape:(0,l.tZ)("path",{d:"M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"}),viewBox:"0 0 30 30"},arrowUp:{shape:(0,l.tZ)(i.Fragment,null,(0,l.tZ)("path",{d:"M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z"})," ",(0,l.tZ)("path",{d:"M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z"})),viewBox:"0 0 30 42"},upDown:{shape:(0,l.tZ)(i.Fragment,null,(0,l.tZ)("path",{d:"M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z"}),(0,l.tZ)("path",{d:"M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z"})),viewBox:"0 0 30 44.58"},box:{shape:(0,l.tZ)("path",{d:"M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"}),viewBox:"0 0 30 30"},hexa:{shape:(0,l.tZ)("polygon",{strokeLinejoin:"round",strokeMiterlimit:"10",points:"27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "}),viewBox:"0 0 30 30"},cross:{shape:(0,l.tZ)("path",{strokeWidth:"3px",d:"M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"}),viewBox:"0 0 100 100"}};t.Z=function(e){var t=e.stroke,n=void 0!==t&&t,i=e.color,a=void 0===i?"":i,c=e.width,s=e.icon,u=e.left,m=e.top,d=e.hiddenMobile,p=void 0!==d&&d;return(0,l.tZ)("svg",{sx:{position:"absolute",stroke:n?"currentColor":"none",fill:n?"none":"currentColor",display:p?r.a:"block",color:a,width:c,left:u,top:m},viewBox:o[s].viewBox},o[s].shape)}},5294:function(e,t,n){"use strict";n.r(t);var i=n(7294),l=n(5444),r=n(2495),o=n(5148),a=n(2177),c=n(495),s=n(5673),u=n(4528),m=n(9201),d=n(5747),p=n(7704);t.default=function(){return i.createElement(a.Z,null,i.createElement(m.Z,{title:"Works"}),i.createElement(o.Ge.h2,{className:"top-background"},"Works"),i.createElement(r.V,{pages:3},i.createElement("div",null,i.createElement(c.Z,{speed:.2,offset:0,factor:1},i.createElement(s.w6,null,i.createElement(u.Z,{icon:"triangle",hiddenMobile:!0,width:48,stroke:!0,color:"icon_orange",left:"10%",top:"20%"}),i.createElement(u.Z,{icon:"hexa",width:48,stroke:!0,color:"icon_red",left:"60%",top:"70%"}),i.createElement(u.Z,{icon:"box",width:6,color:"icon_darker",left:"60%",top:"15%"})),i.createElement(s.sr,null,i.createElement(u.Z,{icon:"arrowUp",hiddenMobile:!0,width:16,color:"icon_blue",left:"80%",top:"10%"}),i.createElement(u.Z,{icon:"triangle",width:12,stroke:!0,color:"icon_brightest",left:"90%",top:"50%"}),i.createElement(u.Z,{icon:"circle",width:16,color:"icon_darker",left:"70%",top:"90%"}),i.createElement(u.Z,{icon:"triangle",width:16,stroke:!0,color:"icon_darkest",left:"30%",top:"65%"}),i.createElement(u.Z,{icon:"cross",width:16,stroke:!0,color:"icon_pink",left:"28%",top:"15%"}),i.createElement(u.Z,{icon:"circle",width:6,color:"icon_darkest",left:"75%",top:"10%"}),i.createElement(u.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_darkest",left:"45%",top:"10%"})),i.createElement(u.Z,{icon:"circle",hiddenMobile:!0,width:24,color:"icon_darker",left:"5%",top:"70%"}),i.createElement(u.Z,{icon:"circle",width:6,color:"icon_darkest",left:"4%",top:"20%"}),i.createElement(u.Z,{icon:"circle",width:12,color:"icon_darkest",left:"50%",top:"60%"}),i.createElement(u.Z,{icon:"upDown",width:8,color:"icon_darkest",left:"95%",top:"90%"}),i.createElement(u.Z,{icon:"upDown",hiddenMobile:!0,width:24,color:"icon_darker",left:"40%",top:"80%"}),i.createElement(u.Z,{icon:"triangle",width:8,stroke:!0,color:"icon_darker",left:"25%",top:"5%"}),i.createElement(u.Z,{icon:"circle",width:64,color:"icon_green",left:"95%",top:"5%"}),i.createElement(u.Z,{icon:"box",hiddenMobile:!0,width:64,color:"icon_purple",left:"5%",top:"90%"}),i.createElement(u.Z,{icon:"box",width:6,color:"icon_darkest",left:"10%",top:"10%"}),i.createElement(u.Z,{icon:"box",width:12,color:"icon_darkest",left:"40%",top:"30%"}),i.createElement(u.Z,{icon:"hexa",width:16,stroke:!0,color:"icon_darker",left:"10%",top:"50%"}),i.createElement(u.Z,{icon:"hexa",width:8,stroke:!0,color:"icon_darker",left:"80%",top:"70%"})),i.createElement(d.Z,{sx:{variant:"texts.smaller"},speed:1,offset:0,factor:1},i.createElement(c.Z,null,i.createElement(p.VerticalTimeline,null,i.createElement(p.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"rgb(33, 150, 243)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},date:"May 2022",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"}},i.createElement("h3",{className:"vertical-timeline-element-title"},"Reactivity"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},i.createElement(l.Link,{to:"https://zenodo.org/record/6555479"},"Zenodo")," , Open Access Journal"),i.createElement("p",null,"Reactivity adalah Jurnal Ilmiah yang berfokus pada React yang ditujukan sebagai pengenalan , pembuktian dan metode Common case dalam membangun Web Application dalam Bahasa Indonesia ."),i.createElement("img",{src:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=140",alt:"img"}),i.createElement("img",{src:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=140",alt:"img"})),i.createElement(p.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"March 2022",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"}},i.createElement("h3",{className:"vertical-timeline-element-title"},"Journey 3"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},i.createElement(l.Link,{to:"https://snack.expo.dev/@zegveld/coffee"},"Expo")," , React Native"),i.createElement("p",null,"Creative Direction, User Experience, Visual Design, SEO, Online Marketing")),i.createElement(p.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"April 2022",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"}},i.createElement("h3",{className:"vertical-timeline-element-title"},"Open AI Tools"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},i.createElement(l.Link,{to:"https://snack.expo.dev/@zegveld/developer-test"},"Expo")," , React Native"),i.createElement("p",null,"User Experience, Visual Design")),i.createElement(p.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"February 2022",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"}},i.createElement("h3",{className:"vertical-timeline-element-title"},"Artefact"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Cloudflare , Remix.run"),i.createElement("p",null,"A Fullstack App that designed to create a Note on Billboard")),i.createElement(p.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"December 2021",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"}},i.createElement("h3",{className:"vertical-timeline-element-title"},"AI Assistant"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},"GitHub , Python "),i.createElement("p",null,"Voice Recognition")),i.createElement(p.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"November 2021",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"}},i.createElement("h3",{className:"vertical-timeline-element-title"},"Hello React"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},i.createElement(l.Link,{to:"https://rfebrians.github.io/hello-react"},"GitHub Pages")," , React"),i.createElement("p",null,"Creative Direction, User Experience, Visual Design")),i.createElement(p.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"November 2021",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"}},i.createElement("h3",{className:"vertical-timeline-element-title"},"Journey 2"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},i.createElement(l.Link,{to:"https://snack.expo.dev/@zegveld/journey"},"Expo")," , React Native"),i.createElement("p",null,"Creative Direction, User Experience, Visual Design")),i.createElement(p.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"November 2021",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"}},i.createElement("h3",{className:"vertical-timeline-element-title"},"Database Demo"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},i.createElement(l.Link,{to:"https://github.com/RFebrians/simple-node.express-backend"},"GitHub")," , REST API's"),i.createElement("p",null,"Creative Direction, User Experience, Visual Design")),i.createElement(p.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"2002 - 2006",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"}},i.createElement("h3",{className:"vertical-timeline-element-title"},"Bachelor of Science in Interactive Digital Media Visual Imaging"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Bachelor Degree"),i.createElement("p",null,"Creative Direction, Visual Design")),i.createElement(p.VerticalTimelineElement,{iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"}})))))))}}}]);
//# sourceMappingURL=component---src-pages-test-tsx-249bce9ad6e133992925.js.map