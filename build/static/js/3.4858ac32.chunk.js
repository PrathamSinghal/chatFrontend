(this.webpackJsonpweb_scrap=this.webpackJsonpweb_scrap||[]).push([[3],{561:function(t,e,n){"use strict";var i=n(1),a=n(35),o=n.n(a),r=n(33),s=n.n(r),l=n(602),c=n(562),u=n(191),h=n(526);n(749);function f(){return f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},f.apply(this,arguments)}function d(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=function(t){var e=t.className,n=void 0===e?"":e,a=t.description,r=t.error,p=t.errorPosition,m=t.hideLabel,g=t.hideOptionalLabel,y=t.icon,b=t.inputRef,v=t.isLoading,w=t.isRequired,O=t.isValid,S=t.label,E=t.labelTooltip,C=t.tooltipTetherClassName,T=d(t,["className","description","error","errorPosition","hideLabel","hideOptionalLabel","icon","inputRef","isLoading","isRequired","isValid","label","labelTooltip","tooltipTetherClassName"]),j=!!r,N=o()(n,"text-input-container",{"show-error":j}),k=i.useRef(s()("description")).current,P={"aria-invalid":j,"aria-required":w,"aria-describedby":a?k:void 0};return i.createElement("div",{className:N},i.createElement(c.a,{hideLabel:m,showOptionalText:!g&&!w,text:S,tooltip:E},!!a&&i.createElement("div",{id:k,className:"text-input-description"},a),i.createElement(h.c,{isShown:j,position:p||"middle-right",tetherElementClassName:C,text:r||"",theme:"error"},i.createElement("input",f({ref:b,required:w},P,T))),v&&!O&&i.createElement(u.b,{className:"text-input-loading"}),O&&!v&&i.createElement(l.a,{className:"text-input-verified"}),v||O||!y?null:y))};p.displayName="TextInput",e.a=p},601:function(t,e,n){"use strict";var i=n(1),a=n(35),o=n.n(a),r=n(52),s=n.n(r),l=n(733),c=n.n(l),u=n(575),h=n(587),f=n(521),d=n(189),p=n(7);n(734);function m(t){return m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(){return g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},g.apply(this,arguments)}function y(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(t,e){return w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},w(t,e)}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S=function(t){function e(t){var n,i,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,a=b(e).call(this,t),n=!a||"object"!==m(a)&&"function"!==typeof a?v(i):a,O(v(n),"toggleVisibility",(function(){var t=n.props,e=t.onOpen,i=t.onClose;n.setState((function(t){return{isOpen:!t.isOpen}}),(function(){var t=n.state.isOpen;t&&e?e(v(n)):!t&&i&&i(v(n))}))})),n.state={isOpen:t.isOpen},n}var n,a,r;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(e,t),n=e,(a=[{key:"render",value:function(){var t=this.state.isOpen,e=this.props,n=e.animationDuration,a=e.buttonProps,r=void 0===a?{}:a,l=e.children,m=e.className,y=e.isBordered,b=e.hasStickyHeader,v=e.headerActionItems,w=e.title,O=o()("collapsible-card",{"is-open":t},{"is-bordered":y},m),S=u.a,E=s()(r,[S]),C=r[S],T=b?"collapsible-card-header has-sticky-header":"collapsible-card-header";return C&&(E[S]="".concat(C).concat(t?"collapse":"expand")),i.createElement("div",{className:O},i.createElement("div",{className:T},i.createElement(f.a,g({},E,{"aria-expanded":t,className:"collapsible-card-title",onClick:this.toggleVisibility,type:d.a.BUTTON}),w,i.createElement(h.a,{className:"collapsible-card-header-caret",color:p.k,width:8})),!!v&&i.createElement("span",{className:"bdl-Collapsible-actionItems"},v)),i.createElement(c.a,{duration:n,height:t?"auto":0},i.createElement("div",{className:"collapsible-card-content"},l)))}}])&&y(n.prototype,a),r&&y(n,r),e}(i.PureComponent);O(S,"defaultProps",{buttonProps:{},className:"",isOpen:!0,animationDuration:100}),e.a=S},634:function(t,e,n){"use strict";var i=n(1),a=n(31);e.a=function(t){var e=t.className,n=void 0===e?"":e,o=t.color,r=void 0===o?"#F7931D":o,s=t.height,l=void 0===s?26:s,c=t.title,u=t.width,h=void 0===u?26:u;return i.createElement(a.a,{className:"icon-alert-default ".concat(n),title:c,height:l,width:h,viewBox:"0 0 26 26"},i.createElement("defs",null,i.createElement("circle",{id:"b",cx:"8",cy:"8",r:"8"}),i.createElement("filter",{x:"-46.9%",y:"-46.9%",width:"193.8%",height:"193.8%",filterUnits:"objectBoundingBox",id:"a"},i.createElement("feMorphology",{radius:".5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter1"}),i.createElement("feOffset",{in:"shadowSpreadOuter1",result:"shadowOffsetOuter1"}),i.createElement("feGaussianBlur",{stdDeviation:"2",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),i.createElement("feColorMatrix",{values:"0 0 0 0 0.733285502 0 0 0 0 0.733285502 0 0 0 0 0.733285502 0 0 0 0.5 0",in:"shadowBlurOuter1"}))),i.createElement("g",{transform:"translate(5 5)",fill:"none",fillRule:"evenodd"},i.createElement("use",{fill:"#000",filter:"url(#a)",xlinkHref:"#b"}),i.createElement("use",{fill:r,xlinkHref:"#b"}),i.createElement("path",{d:"M8.047 4.706v4.111",stroke:"#FFF",strokeWidth:"1.412",strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("circle",{fill:"#FFF",cx:"8.047",cy:"11.294",r:"1"})))}},733:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=c(n(1)),s=c(n(3)),l=c(n(35));function c(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},f=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function d(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var a={},o=Object.keys(t),r=0;r<o.length;r++){var s=o[r];-1===n.indexOf(s)&&(a[s]=t[s])}return a}function p(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function m(t){return!isNaN(parseFloat(t))&&isFinite(t)}function g(t){return"string"===typeof t&&t.search("%")===t.length-1&&m(t.substr(0,t.length-1))}function y(t,e){t&&"function"===typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",o="visible";m(t.height)?(i=t.height<0||"0"===t.height?0:t.height,o="hidden"):g(t.height)&&(i="0%"===t.height?0:t.height,o="hidden"),n.animationStateClasses=a({},h,t.animationStateClasses);var r=n.getStaticStateClasses(i);return"undefined"!==typeof window&&window.matchMedia&&(n.prefersReducedMotion=window.matchMedia("(prefers-reduced-motion)").matches),n.state={animationStateClasses:r,height:i,overflow:o,shouldUseTransitions:!1},n}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n=this,i=this.props,a=i.height,o=i.onAnimationEnd,r=i.onAnimationStart,s=this.getTimings(),c=s.duration,h=s.delay;if(this.contentElement&&a!==t.height){var f;this.showContent(e.height),this.contentElement.style.overflow="hidden";var d=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var b=c+h,v=null,w={height:null,overflow:"hidden"},O="auto"===e.height;m(a)?(v=a<0||"0"===a?0:a,w.height=v):g(a)?(v="0%"===a?0:a,w.height=v):(v=d,w.height="auto",w.overflow=null),O&&(w.height=v,v=d);var S=(0,l.default)((u(f={},this.animationStateClasses.animating,!0),u(f,this.animationStateClasses.animatingUp,"auto"===t.height||a<t.height),u(f,this.animationStateClasses.animatingDown,"auto"===a||a>t.height),u(f,this.animationStateClasses.animatingToHeightZero,0===w.height),u(f,this.animationStateClasses.animatingToHeightAuto,"auto"===w.height),u(f,this.animationStateClasses.animatingToHeightSpecific,w.height>0),f)),E=this.getStaticStateClasses(w.height);this.setState({animationStateClasses:S,height:v,overflow:"hidden",shouldUseTransitions:!O}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),O?(w.shouldUseTransitions=!0,p(this.animationFrameIDs),this.animationFrameIDs=function(t){var e=[];return e[0]=requestAnimationFrame((function(){e[1]=requestAnimationFrame((function(){t()}))})),e}((function(){n.setState(w),y(r,{newHeight:w.height})})),this.animationClassesTimeoutID=setTimeout((function(){n.setState({animationStateClasses:E,shouldUseTransitions:!1}),n.hideContent(w.height),y(o,{newHeight:w.height})}),b)):(y(r,{newHeight:v}),this.timeoutID=setTimeout((function(){w.animationStateClasses=E,w.shouldUseTransitions=!1,n.setState(w),"auto"!==a&&n.hideContent(v),y(o,{newHeight:v})}),b))}}},{key:"componentWillUnmount",value:function(){p(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null}},{key:"getTimings",value:function(){if(this.prefersReducedMotion)return{delay:0,duration:0};var t=this.props;return{delay:t.delay,duration:t.duration}}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,l.default)((u(e={},this.animationStateClasses.static,!0),u(e,this.animationStateClasses.staticHeightZero,0===t),u(e,this.animationStateClasses.staticHeightSpecific,t>0),u(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,o=n.applyInlineTransitions,s=n.children,c=n.className,h=n.contentClassName,p=n.easing,m=n.id,g=n.style,y=this.state,b=y.height,v=y.overflow,w=y.animationStateClasses,O=y.shouldUseTransitions,S=this.getTimings(),E=S.duration,C=S.delay,T=a({},g,{height:b,overflow:v||g.overflow});O&&o&&(T.transition="height "+E+"ms "+p+" "+C+"ms",g.transition&&(T.transition=g.transition+", "+T.transition),T.WebkitTransition=T.transition);var j={};i&&(j.transition="opacity "+E+"ms "+p+" "+C+"ms",j.WebkitTransition=j.transition,0===b&&(j.opacity=0));var N=(0,l.default)((u(t={},w,!0),u(t,c,c),t)),k="undefined"!==typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===b;return r.default.createElement("div",a({},d.apply(void 0,[this.props].concat(f)),{"aria-hidden":k,className:N,id:m,style:T}),r.default.createElement("div",{className:h,style:j,ref:function(t){return e.contentElement=t}},s))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,n){var a=t[e];return"number"===typeof a&&a>=0||g(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"===typeof a?"undefined":i(a))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:h,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b},734:function(t,e,n){},749:function(t,e,n){}}]);
//# sourceMappingURL=3.4858ac32.chunk.js.map