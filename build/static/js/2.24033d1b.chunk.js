(this.webpackJsonpweb_scrap=this.webpackJsonpweb_scrap||[]).push([[2],{541:function(e,t,n){"use strict";var o=n(72);n.d(t,"a",(function(){return o.a}))},556:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return m}));var o,r=n(1),i=n(40),a=n.n(i),s=n(35),l=n.n(s),u=n(13),c=n.n(u),d=n(209),f=n.n(d);!function(e){e.TOP_LEFT="top left",e.TOP_CENTER="top center",e.TOP_RIGHT="top right",e.MIDDLE_LEFT="middle left",e.MIDDLE_CENTER="middle center",e.MIDDLE_RIGHT="middle right",e.BOTTOM_LEFT="bottom left",e.BOTTOM_CENTER="bottom center",e.BOTTOM_RIGHT="bottom right"}(o||(o={}));var p,h,m,b=o,v=n(80),y=n(210),E=n(541),O=n(559),g=Object(v.c)((function(e){var t=e.intl,n=e.onClick;return r.createElement(E.a,{"aria-label":t.formatMessage(O.a.close),className:"tooltip-close-button",onClick:n},r.createElement(y.a,{className:"bdl-Tooltip-iconClose",width:14,height:14}))}));n(703);function T(e){return T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w.apply(this,arguments)}function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e){e.CALLOUT="callout",e.DEFAULT="default",e.ERROR="error"}(h||(h={})),function(e){e.BOTTOM_CENTER="bottom-center",e.BOTTOM_LEFT="bottom-left",e.BOTTOM_RIGHT="bottom-right",e.MIDDLE_LEFT="middle-left",e.MIDDLE_RIGHT="middle-right",e.TOP_CENTER="top-center",e.TOP_LEFT="top-left",e.TOP_RIGHT="top-right"}(m||(m={}));var P=(C(p={},m.BOTTOM_CENTER,{attachment:b.TOP_CENTER,targetAttachment:b.BOTTOM_CENTER}),C(p,m.BOTTOM_LEFT,{attachment:b.TOP_RIGHT,targetAttachment:b.BOTTOM_RIGHT}),C(p,m.BOTTOM_RIGHT,{attachment:b.TOP_LEFT,targetAttachment:b.BOTTOM_LEFT}),C(p,m.MIDDLE_LEFT,{attachment:b.MIDDLE_RIGHT,targetAttachment:b.MIDDLE_LEFT}),C(p,m.MIDDLE_RIGHT,{attachment:b.MIDDLE_LEFT,targetAttachment:b.MIDDLE_RIGHT}),C(p,m.TOP_CENTER,{attachment:b.BOTTOM_CENTER,targetAttachment:b.TOP_CENTER}),C(p,m.TOP_LEFT,{attachment:b.BOTTOM_RIGHT,targetAttachment:b.TOP_RIGHT}),C(p,m.TOP_RIGHT,{attachment:b.BOTTOM_LEFT,targetAttachment:b.TOP_LEFT}),p),_=function(e){function t(e){var n,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,i=M(t).call(this,e),n=!i||"object"!==T(i)&&"function"!==typeof i?D(o):i,C(D(n),"tooltipID",l()("tooltip")),C(D(n),"tetherRef",r.createRef()),C(D(n),"position",(function(){n.tetherRef.current&&n.isShown()&&n.tetherRef.current.position()})),C(D(n),"closeTooltip",(function(){var e=n.props.onDismiss;n.setState({wasClosedByUser:!0}),e&&e()})),C(D(n),"fireChildEvent",(function(e,t){var o=n.props.children.props[e];o&&o(t)})),C(D(n),"handleTooltipEvent",(function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()})),C(D(n),"handleMouseEnter",(function(e){n.setState({isShown:!0}),n.fireChildEvent("onMouseEnter",e)})),C(D(n),"handleMouseLeave",(function(e){n.setState({isShown:!1}),n.fireChildEvent("onMouseLeave",e)})),C(D(n),"handleFocus",(function(e){n.setState({isShown:!0}),n.fireChildEvent("onFocus",e)})),C(D(n),"handleBlur",(function(e){n.setState({isShown:!1}),n.fireChildEvent("onBlur",e)})),C(D(n),"isControlled",(function(){return"undefined"!==typeof n.props.isShown})),C(D(n),"handleKeyDown",(function(e){"Escape"===e.key&&(e.stopPropagation(),n.setState({isShown:!1})),n.fireChildEvent("onKeyDown",e)})),C(D(n),"isShown",(function(){var e=n.props.isShown;return(n.isControlled()?e:n.state.isShown)&&!n.state.wasClosedByUser&&n.state.hasRendered})),n.state={isShown:!!e.isShown,hasRendered:!1,wasClosedByUser:!1},n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.setState({hasRendered:!0})}},{key:"componentDidUpdate",value:function(e,t){this.isControlled()?!e.isShown&&this.props.isShown&&this.setState({wasClosedByUser:!1}):(!t.isShown&&this.state.isShown&&document.addEventListener("keydown",this.handleKeyDown,!0),t.isShown&&!this.state.isShown&&document.removeEventListener("keydown",this.handleKeyDown,!0))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown,!0)}},{key:"render",value:function(){var e=this.props,t=e.ariaHidden,n=e.bodyElement,o=e.children,i=e.className,s=e.constrainToScrollParent,l=e.constrainToWindow,u=e.isDisabled,d=e.isTabbable,p=void 0===d||d,b=e.offset,v=e.position,y=void 0===v?m.TOP_CENTER:v,E=e.showCloseButton,O=e.stopBubble,T=e.tetherElementClassName,I=e.text,M=e.theme,D=c()(o,"props.aria-label"),S=!!D&&D===I;if(u)return r.Children.only(o);var C=this.isControlled(),_=this.isShown(),x=E&&C,k="string"===typeof y?P[y]:y,R=[],L={};s&&R.push({to:"scrollParent",attachment:"together"}),l&&R.push({to:"window",attachment:"together"}),_&&!t&&(S&&void 0!==D||(L["aria-describedby"]=this.tooltipID),M===h.ERROR&&(L["aria-errormessage"]=this.tooltipID)),C||(L.onBlur=this.handleBlur,L.onFocus=this.handleFocus,L.onMouseEnter=this.handleMouseEnter,L.onMouseLeave=this.handleMouseLeave,p&&(L.tabIndex="0"));var F=n instanceof HTMLElement?n:document.body,j=a()("tooltip","bdl-Tooltip",i,{"is-callout":M===h.CALLOUT,"is-error":M===h.ERROR,"with-close-button":x}),B={attachment:k.attachment,bodyElement:F,classPrefix:"tooltip",constraints:R,enabled:_,targetAttachment:k.targetAttachment};T&&(B.className=T),b&&(B.offset=b);var N=r.createElement(r.Fragment,null,I,x&&r.createElement(g,{onClick:this.closeTooltip})),A=O?r.createElement("div",{className:j,id:this.tooltipID,onClick:this.handleTooltipEvent,onContextMenu:this.handleTooltipEvent,onKeyPress:this.handleTooltipEvent,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,role:"presentation"},r.createElement("div",{role:M===h.ERROR?void 0:"tooltip","aria-live":"polite","aria-hidden":t||S,"data-testid":"bdl-Tooltip"},N)):r.createElement("div",{"aria-live":"polite","aria-hidden":t||S,className:j,"data-testid":"bdl-Tooltip",id:this.tooltipID,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,role:M===h.ERROR?void 0:"tooltip"},N);return r.createElement(f.a,w({ref:this.tetherRef},B),r.cloneElement(r.Children.only(o),L),_&&A)}}])&&I(n.prototype,o),i&&I(n,i),t}(r.Component);C(_,"defaultProps",{constrainToScrollParent:!1,constrainToWindow:!0,isDisabled:!1,position:m.TOP_CENTER,theme:h.DEFAULT});t.c=_},559:function(e,t,n){"use strict";var o=n(43),r=Object(o.c)({cancel:{id:"boxui.core.cancel",defaultMessage:"Cancel"},close:{id:"boxui.core.close",defaultMessage:"Close"},copy:{id:"boxui.core.copy",defaultMessage:"Copy"},copied:{id:"boxui.core.copied",defaultMessage:"Copied"},done:{id:"boxui.core.done",defaultMessage:"Done"},okay:{id:"boxui.core.okay",defaultMessage:"Okay"},save:{id:"boxui.core.save",defaultMessage:"Save"},send:{id:"boxui.core.send",defaultMessage:"Send"},optional:{id:"boxui.core.optional",defaultMessage:"optional"},pillSelectorPlaceholder:{id:"boxui.share.pillSelectorPlaceholder",defaultMessage:"Add names or email addresses"},messageSelectorPlaceholder:{id:"boxui.share.messageSelectorPlaceholder",defaultMessage:"Add a message"},invalidInputError:{id:"boxui.validation.genericError",defaultMessage:"Invalid Input"},minLengthError:{id:"boxui.validation.tooShortError",defaultMessage:"Input must be at least {min} characters"},maxLengthError:{id:"boxui.validation.tooLongError",defaultMessage:"Input cannot exceed {max} characters"},invalidEmailError:{id:"boxui.validation.emailError",defaultMessage:"Invalid Email Address"},invalidURLError:{id:"boxui.validation.URLError",defaultMessage:"Invalid URL"},invalidUserError:{id:"boxui.validation.invalidUserError",defaultMessage:"Invalid User"},requiredFieldError:{id:"boxui.validation.requiredError",defaultMessage:"Required Field"},invalidDateError:{id:"boxui.validation.invalidDateError",defaultMessage:"Invalid Date"}});t.a=r},574:function(e,t,n){"use strict";var o=n(1),r=n(607);n(712);t.a=function(e){var t=e.children;return o.createElement("span",{className:"menu-toggle"},t,o.createElement(r.a,{className:"toggle-arrow",width:7}))}},576:function(e,t,n){"use strict";var o=n(1),r=n(40),i=n.n(r),a=n(65),s=n.n(a),l=n(272);function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}var m=function(e){function t(){var e,n,o,r,i,a,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];return o=this,r=(e=f(t)).call.apply(e,[this].concat(c)),n=!r||"object"!==u(r)&&"function"!==typeof r?p(o):r,i=p(n),s=function(e){var t=n.props,o=t.isDisabled,r=t.onClick;if(o)return e.stopPropagation(),void e.preventDefault();r&&r(e)},(a="onClickHandler")in i?Object.defineProperty(i,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[a]=s,n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.isDisabled,a=e.isSelectItem,u=e.isSelected,d=e.showRadar,f=c(e,["children","className","isDisabled","isSelectItem","isSelected","showRadar"]),p=s()(f,["role","tabIndex","onClick"]);p.className=i()("menu-item",n,{"is-select-item":a,"is-selected":u}),p.role=a?"menuitemradio":"menuitem",p.tabIndex=-1,p.onClick=this.onClickHandler,a&&(p["aria-checked"]=u),r&&(p["aria-disabled"]="true");var h=o.createElement("li",p,t);return d&&(h=o.createElement(l.a,null,h)),h}}])&&d(n.prototype,r),a&&d(n,a),t}(o.Component);t.a=m},590:function(e,t,n){"use strict";var o=n(1),r=n(12),i=n.n(r);t.a=o.createContext({closeMenu:i.a})},605:function(e,t,n){"use strict";var o=n(1),r=n(556);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.a=function(e){var t=e.children,n=e.isDisabled,s=e.text,l=a(e,["children","isDisabled","text"]);return n||!s?t:o.createElement(r.c,i({text:s},l),t)}},606:function(e,t,n){"use strict";var o=n(1),r=n(209),i=n.n(r),a=n(40),s=n.n(a),l=n(12),u=n.n(l),c=n(35),d=n.n(c),f=n(2);n(711);function p(e){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return o=this,r=(e=m(t)).call.apply(e,[this].concat(a)),n=!r||"object"!==p(r)&&"function"!==typeof r?b(o):r,y(b(n),"menuID",d()("menu")),y(b(n),"menuButtonID",d()("menubutton")),y(b(n),"state",{initialFocusIndex:null,isOpen:!1}),y(b(n),"openMenuAndSetFocusIndex",(function(e){n.setState({initialFocusIndex:e,isOpen:!0})})),y(b(n),"closeMenu",(function(e){var t=n.props.onMenuClose,o=void 0===t?u.a:t;n.setState({isOpen:!1},(function(){return o(e)}))})),y(b(n),"focusButton",(function(){var e=document.getElementById(n.menuButtonID);e&&e.focus()})),y(b(n),"handleButtonClick",(function(e){var t=n.state.isOpen;e.stopPropagation(),e.preventDefault(),t?n.closeMenu(e):n.openMenuAndSetFocusIndex(null)})),y(b(n),"handleButtonKeyDown",(function(e){var t=n.state.isOpen;switch(e.key){case f.Jd.space:case f.Jd.enter:case f.Jd.arrowDown:e.stopPropagation(),e.preventDefault(),n.openMenuAndSetFocusIndex(0);break;case f.Jd.arrowUp:e.stopPropagation(),e.preventDefault(),n.openMenuAndSetFocusIndex(-1);break;case f.Jd.escape:t&&e.stopPropagation(),e.preventDefault(),n.closeMenu(e)}})),y(b(n),"handleMenuClose",(function(e,t){n.closeMenu(t),n.focusButton()})),y(b(n),"handleDocumentClick",(function(e){var t=document.getElementById(n.menuID),o=document.getElementById(n.menuButtonID);t&&o&&e.target instanceof Node&&!t.contains(e.target)&&!o.contains(e.target)&&n.closeMenu(e)})),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(r=[{key:"componentDidUpdate",value:function(e,t){var n=this.props.useBubble;if(!t.isOpen&&this.state.isOpen){document.addEventListener("click",this.handleDocumentClick,!n),document.addEventListener("contextmenu",this.handleDocumentClick,!n);var o=this.props.onMenuOpen;o&&o()}else t.isOpen&&!this.state.isOpen&&(document.removeEventListener("contextmenu",this.handleDocumentClick,!n),document.removeEventListener("click",this.handleDocumentClick,!n))}},{key:"componentWillUnmount",value:function(){var e=this.props.useBubble;this.state.isOpen&&(document.removeEventListener("contextmenu",this.handleDocumentClick,!e),document.removeEventListener("click",this.handleDocumentClick,!e))}},{key:"render",value:function(){var e=this.props,t=e.bodyElement,n=e.children,r=e.className,a=e.constrainToScrollParent,l=e.constrainToWindow,u=e.constrainToWindowWithPin,c=e.isResponsive,d=e.isRightAligned,f=e.tetherAttachment,p=e.tetherTargetAttachment,h=this.state,m=h.isOpen,b=h.initialFocusIndex,v=o.Children.toArray(n);if(2!==v.length)throw new Error("DropdownMenu must have exactly two children: A button component and a <Menu>");var y=v[0],E=v[1],O={id:this.menuButtonID,key:this.menuButtonID,onClick:this.handleButtonClick,onKeyDown:this.handleButtonKeyDown,"aria-expanded":m?"true":"false"};void 0===y.props["aria-haspopup"]&&(O["aria-haspopup"]="true"),m&&(O["aria-controls"]=this.menuID);var g={id:this.menuID,key:this.menuID,initialFocusIndex:b,onClose:this.handleMenuClose,"aria-labelledby":this.menuButtonID},T="top left",w="bottom left";d&&(T="top right",w="bottom right");var I=[];a&&I.push({to:"scrollParent",attachment:"together"}),l&&I.push({to:"window",attachment:"together"}),u&&I.push({to:"window",attachment:"together",pin:!0});var M=t instanceof HTMLElement?t:document.body;return o.createElement(i.a,{attachment:f||T,bodyElement:M,className:s()({"bdl-DropdownMenu--responsive":c},r),classPrefix:"dropdown-menu",constraints:I,enabled:m,targetAttachment:p||w},o.cloneElement(y,O),m&&o.cloneElement(E,g))}}])&&h(n.prototype,r),a&&h(n,a),t}(o.Component);y(E,"defaultProps",{constrainToScrollParent:!1,constrainToWindow:!1,isResponsive:!1,isRightAligned:!1}),t.a=E},607:function(e,t,n){"use strict";var o=n(1),r=n(34);t.a=function(e){var t=e.className,n=void 0===t?"":t,i=e.color,a=void 0===i?"#000":i,s=e.height,l=void 0===s?6:s,u=e.title,c=e.width,d=void 0===c?10:c;return o.createElement(r.a,{className:"icon-caret-down ".concat(n),height:l,title:u,viewBox:"0 0 10 6",width:d},o.createElement("path",{className:"fill-color",d:"M0 .5l5 5 5-5H0z",fill:a,fillRule:"evenodd"}))}},608:function(e,t,n){"use strict";var o=n(1),r=n(65),i=n.n(r),a=n(40),s=n.n(a),l=n(590);n(714);function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=".menu-item:not([aria-disabled])",v="ul:not(.submenu) > ".concat(b,", ul:not(.submenu) > li > ").concat(b,", ul:not(.submenu) > span > ").concat(b),y="ul.submenu > ".concat(b,", ul.submenu > li > ").concat(b,", ul.submenu > span > ").concat(b);function E(e){e.stopPropagation(),e.preventDefault()}var O=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=f(t).call(this,e),n=!r||"object"!==u(r)&&"function"!==typeof r?p(o):r,m(p(n),"setInitialFocusIndex",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props,t=e.initialFocusIndex;e.isHidden||void 0===t||("number"===typeof t?setTimeout((function(){n.setFocus(t)}),0):null===t&&setTimeout((function(){n.menuEl&&n.menuEl.focus()}),0))})),m(p(n),"setMenuItemEls",(function(){var e=n.props,t=e.isSubmenu,o=e.menuItemSelector||(t?y:v);n.menuItemEls=n.menuEl?[].slice.call(n.menuEl.querySelectorAll(o)):[]})),m(p(n),"getMenuItemElFromEventTarget",(function(e){for(var t=null,o=-1,r=0;r<n.menuItemEls.length;r+=1)if(n.menuItemEls[r].contains(e)){t=n.menuItemEls[r],o=r;break}return{menuItemEl:t,menuIndex:o}})),m(p(n),"setFocus",(function(e){if(n.menuItemEls.length){var t=n.menuItemEls.length;n.focusIndex=e>=t?0:e<0?t-1:e,n.menuItemEls[n.focusIndex].focus()}})),m(p(n),"focusFirstItem",(function(){n.setFocus(0)})),m(p(n),"focusLastItem",(function(){n.setFocus(-1)})),m(p(n),"focusNextItem",(function(){n.setFocus(n.focusIndex+1)})),m(p(n),"focusPreviousItem",(function(){n.setFocus(n.focusIndex-1)})),m(p(n),"fireOnCloseHandler",(function(e,t){var o=n.props.onClose;o&&o(e,t)})),m(p(n),"handleClick",(function(e){(e.target instanceof Node?n.getMenuItemElFromEventTarget(e.target):{}).menuItemEl&&n.fireOnCloseHandler(!1,e)})),m(p(n),"handleKeyDown",(function(e){var t=n.props,o=t.isSubmenu,r=t.initialFocusIndex;switch(e.key){case"ArrowDown":E(e),null!==r||n.keyboardPressed?n.focusNextItem():n.focusFirstItem();break;case"ArrowUp":E(e),n.focusPreviousItem();break;case"ArrowLeft":if(!o)return;E(e),n.fireOnCloseHandler(!0,e);break;case"Home":case"PageUp":E(e),n.focusFirstItem();break;case"End":case"PageDown":E(e),n.focusLastItem();break;case"Escape":E(e),n.fireOnCloseHandler(!0,e);break;case"Tab":n.fireOnCloseHandler(!0,e);break;case" ":case"Enter":E(e),e.target instanceof HTMLElement&&e.target.click()}n.keyboardPressed=!0})),n.focusIndex=0,n.menuEl=null,n.menuItemEls=[],n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.setMenuItemEls(),this.setInitialFocusIndex()}},{key:"componentDidUpdate",value:function(e){var t=e.isHidden,n=e.children,r=this.props,i=r.children,a=r.isHidden;if(r.isSubmenu&&t&&!a&&(this.setMenuItemEls(),this.setInitialFocusIndex(this.props)),o.Children.toArray(n).length!==o.Children.toArray(i).length){var s=this.menuItemEls[this.focusIndex];this.setMenuItemEls();var l=this.getMenuItemElFromEventTarget(s).menuIndex,u=-1===l,c=this.focusIndex>=this.menuItemEls.length;this.setFocus(u&&!c?this.focusIndex:l)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.className,a=t.isHidden,u=t.setRef,d=t.shouldOutlineFocus,f=c(t,["children","className","isHidden","setRef","shouldOutlineFocus"]),p=i()(f,["onClose","initialFocusIndex","isSubmenu","menuItemSelector"]);return p.className=s()("aria-menu",r,{"is-hidden":a,"should-outline-focus":d}),p.ref=function(t){e.menuEl=t,u&&u(t)},void 0===p.role&&(p.role="menu"),p.tabIndex=-1,p.onClick=this.handleClick,p.onKeyDown=this.handleKeyDown,o.createElement("ul",p,o.createElement(l.a.Provider,{value:{closeMenu:this.fireOnCloseHandler}},n))}}])&&d(n.prototype,r),a&&d(n,a),t}(o.Component);m(O,"defaultProps",{className:"",isSubmenu:!1,isHidden:!1}),t.a=O},703:function(e,t,n){},711:function(e,t,n){},712:function(e,t,n){},714:function(e,t,n){}}]);
//# sourceMappingURL=2.24033d1b.chunk.js.map