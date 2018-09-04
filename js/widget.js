(function e(t,n,i){function o(s,r){if(!n[s]){if(!t[s]){var d="function"==typeof require&&require
if(!r&&d)return d(s,!0)
if(a)return a(s,!0)
var u=new Error("Cannot find module '"+s+"'")
throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}}
t[s][0].call(l.exports,function(e){var n=t[s][1][e]
return o(n||e)},l,l.exports,e,t,n,i)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s])
return o})({1:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i=a(e("./../obj/constants")),o=a(e("./../utils/common/dom"))
function a(e){return e&&e.__esModule?e:{default:e}}n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=function(e){27===e.keyCode&&this.destroy()}
return{create:function(t){var n=document,o=n.body,a=n.createElement("DIV"),s=n.createElement("IMG"),r=n.createElement("DIV"),d=n.createElement("DIV")
a.setAttribute("id",i.default.modalDivId),a.onclick=this.destroy,s.setAttribute("src",t),s.onclick=this.destory,d.appendChild(s),d.className="image-cell",r.appendChild(d),r.className="image-wrapper",a.appendChild(r),o.appendChild(a),window.addEventListener?window.addEventListener("keydown",e.bind(this),!1):window.attachEvent("keydown",e.bind(this),!1)},destroy:function(){var t=document,n=t.body,a=t.getElementById(i.default.modalDivId)
a&&(o.default.purge(a),n.removeChild(a)),window.removeEventListener?window.removeEventListener("keydown",e.bind(this)):window.detachEvent("keydown",e.bind(this))}}}.bind(void 0)()},{"./../obj/constants":7,"./../utils/common/dom":11}],2:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i=a(e("./omni/transition")),o=a(e("./omni/activity"))
function a(e){return e&&e.__esModule?e:{default:e}}n.default={init:function(){i.default.start(),o.default.start()},destroy:function(){i.default.stop(),o.default.stop()}}},{"./omni/activity":3,"./omni/transition":5}],3:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i=a(e("./../../utils/frame")),o=a(e("./../../utils/common/dom"))
function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}n.default=function(){s(void 0,void 0)
var e=function(){s(void 0,void 0),i.default.postMessage({action:"track_activity",payload:{seen:n}})}.bind(void 0),t=null,n=null,a=null,r=function(){s(void 0,void 0),n=(new Date).getTime()}.bind(void 0),d=function(e){s(void 0,void 0),o.default.unbindEvent("keypress",r),o.default.unbindEvent("mousemove",r),o.default.unbindEvent("click",r),e&&(o.default.bindEvent("keypress",r),o.default.bindEvent("mousemove",r),o.default.bindEvent("click",r))}.bind(void 0),u=function(){s(void 0,void 0)
var i=(new Date).getTime()
null===a||null===n||t&&(i<t||n<t||i-t<59e3||n>t&&n<i&&e()),t=i}.bind(void 0),l=function(){s(void 0,void 0),a&&clearInterval(a),a=null,n=null,t=null}.bind(void 0),f=function(){s(void 0,void 0),l(),d(!0),t=(new Date).getTime(),a=setInterval(u,6e4)}.bind(void 0),c=function(){s(void 0,void 0),n=(new Date).getTime(),e(),l(),d(!1)}.bind(void 0)
return{start:function(){f(),o.default.bindEvent("focus",f),o.default.bindEvent("blur",c),o.default.bindEvent("unload",c)},stop:function(){c(),o.default.unbindEvent("focus",f),o.default.unbindEvent("blur",c),o.default.unbindEvent("unload",c)}}}.bind(void 0)()},{"./../../utils/common/dom":11,"./../../utils/frame":15}],4:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i,o=e("./../../utils/msg_handler"),a=(i=o)&&i.__esModule?i:{default:i}
n.default={track:function(e,t){a.default.subscribe("track_event",{eventName:e,data:t})}}},{"./../../utils/msg_handler":18}],5:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i=a(e("./../../utils/common/observe")),o=a(e("./../../utils/frame"))
function a(e){return e&&e.__esModule?e:{default:e}}n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=void 0,t=void 0,n=void 0,a=function(i){e=i.oldValue,t=i.newValue,n=i.title,o.default.postMessage({action:"track_location",payload:{pageUrl:i}})},s=function(){var i=window.location.href
t!==i&&(e=t,t=i,n=document.title,a({oldValue:e,newValue:t,title:n}))}
return{start:function(e){t=window.location.href,a({newValue:t,title:document.title}),i.default.attach(window.history,"pushState",s),i.default.attach(window.history,"replaceState",s),window.addEventListener?(window.addEventListener("hashchange",s,!1),window.addEventListener("popstate",s,!1)):(window.attachEvent("hashchange",s,!1),window.attachEvent("popstate",s,!1))},stop:function(){e=t=void 0,i.default.detach(window.history,"pushState"),i.default.detach(window.history,"replaceState"),window.removeEventListener?(window.removeEventListener("hashchange",s),window.removeEventListener("popstate",s)):(window.detachEvent("hashchange",s),window.detachEvent("popstate",s))},track:a}}.bind(void 0)()},{"./../../utils/common/observe":13,"./../../utils/frame":15}],6:[function(e,t,n){"use strict"
var i,o,a=e("./widget"),s=(i=a)&&i.__esModule?i:{default:i}
if(window.fcWidget||(window.fcWidget=s.default),window.fcSettings)if("complete"===document.readyState){var r=window.fcSettings.onInit
r&&"function"==typeof r&&r(),s.default.init(window.fcSettings)}else document.onreadystatechange=(o=s.default,function(){if("complete"===document.readyState){var e=window.fcSettings.onInit
e&&"function"==typeof e&&e(),o.init(window.fcSettings)}})},{"./widget":23}],7:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default={frameDivId:"fc_frame",frameId:"fc_widget",pushFrameDivId:"fc_push_frame",pushFrameId:"fc_push",modalDivId:"fc_web_modal"}},{}],8:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=!1,t=!1,n=!1,i=!1,o=[],a={}
return{isLoaded:function(){return e},loaded:function(t){e=t},isInitialized:function(){return t},initialized:function(e){t=e},isOpened:function(){return n},opened:function(e){n=e},doOpen:function(){return i},openOnLoad:function(e){i=e},getTags:function(){return o},setTags:function(e){o=e},getFaqTags:function(){return a},setFaqTags:function(e){a=e},reset:function(){e=!1,t=!1,n=!1,i=!1,o=[],a={}}}}.bind(void 0)()},{}],9:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=null,t=null,n={},i={}
return{getExternalId:function(){return e},setExternalId:function(t){e=t},getRestoreId:function(){return t},setRestoreId:function(e){t=e},getConfig:function(){return n},setConfig:function(e){n=e},getProperties:function(){return i},setProperties:function(e){i.firstName=e.firstName,i.lastName=e.lastName,i.email=e.email,i.phone=e.phone,i.phoneCountry=e.phoneCountry,i.locale=e.locale,this.setUserMeta(e.meta)},setFirstName:function(e){i.firstName=e},setLastName:function(e){i.lastName=e},setEmail:function(e){i.email=e},setPhone:function(e){i.phone=e},setPhoneCountry:function(e){i.phoneCountry=e},setUserMeta:function(e){if(i.meta=i.meta||{},e)for(var t in e)e.hasOwnProperty(t)&&(i.meta[t]=e[t])},setLocale:function(e){i.locale=e},reset:function(){e=null,t=null,n={},i={}},getJSON:function(){return{externalId:e,restoreId:t,customConfig:n,properties:i}}}}.bind(void 0)()},{}],10:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i,o=e("./../frame"),a=(i=o)&&i.__esModule?i:{default:i}
n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=function(){return a.default.getHost()+url.replace("{token}",a.default.getToken())},t=function(e){if(e){void 0===e.async&&(e.async=!0)
var t=function(){if("XMLHttpRequest"in window)return new XMLHttpRequest
for(var e,t=["MSXML2.XmlHttp.6.0","MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"],n=0;n<t.length;n++)try{e=new ActiveXObject(t[n])
break}catch(e){}return e}()
t.open(e.type,e.url,e.async),t.onreadystatechange=function(){4===t.readyState&&e.success(JSON.parse(t.responseText))},"GET"!==e.type&&(e.contentType?t.setRequestHeader("Content-Type",e.contentType):t.setRequestHeader("Content-type","application/x-www-form-urlencoded")),e.data?t.send(e.data):t.send()}}
return{getRequest:function(n,i){t({url:e(),type:"GET",success:i})},putRequest:function(n,i,o){t({url:e(),type:"PUT",data:JSON.stringify(i),contentType:"application/json; charset=UTF-8",success:o})}}}.bind(void 0)()},{"./../frame":15}],11:[function(e,t,n){"use strict"
var i,o,a,s,r,d,u,l
Object.defineProperty(n,"__esModule",{value:!0}),n.default={url_domain:function(e){var t=document.createElement("a")
return t.href=e,t.origin},getElementStyle:function(e,t){return window.getComputedStyle(e)[t]},setAttr:function(e,t){for(var n in t)t.hasOwnProperty(n)&&e.setAttribute(n,t[n])
return e},remove:function(e){var t=document,n=t.body,i=t.getElementById(e)
i&&(this.purge(i),n.removeChild(i))},purge:function(e){var t,n,i,o=e.attributes
if(o)for(t=o.length-1;t>=0;t-=1)"function"==typeof e[i=o[t].name]&&(e[i]=null)
if(o=e.childNodes)for(n=o.length,t=0;t<n;t+=1)this.purge(e.childNodes[t])},bindEvent:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
window.addEventListener?window.addEventListener(e,t,n):window.attachEvent(e,t,n)},unbindEvent:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
window.removeEventListener?window.removeEventListener(e,t,n):window.detachEvent(e,t,n)},parseJSON:function(e){var t
if(e){try{t=JSON.parse(e)}catch(e){}return t}},storageAvailable:function(e){try{var t=window.localStorage,n="__storage_test__"
return t.setItem(n,n),t.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==t.length}}(),isPushSupportedByBrowser:function(){var e,t,n,i=!1,o=!1,a=function(){var e=!1
try{ServiceWorkerRegistration&&"showNotification"in ServiceWorkerRegistration.prototype&&(e=!0)}catch(e){}return e};(function(){var e=window.chrome,t=window.navigator,n=t.vendor,i=t.userAgent.indexOf("OPR")>-1,o=t.userAgent.indexOf("Edge")>-1
t.userAgent.match("CriOS")
return null!=e&&"Google Inc."===n&&!1===i&&!1===o})()&&(e=!!(n=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./))&&parseInt(n[2],10))&&(i=e>=50),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(t=function(){var e=navigator.userAgent,t=e.indexOf("Firefox"),n=e.substring(t+8).split(".")
return!(!n||!n.length)&&parseInt(n[0],10)}())&&(o=t>=44)
var s="serviceWorker"in navigator,r=(a=a(),"PushManager"in window)
return s&&a&&r&&(i||o)},getAgent:(s=navigator.appVersion,r=navigator.userAgent,d=navigator.appName,u=""+parseFloat(s),l=parseInt(s,10),-1!==(o=r.indexOf("Opera"))?(d="Opera",u=r.substring(o+6),-1!==(o=r.indexOf("Version"))&&(u=r.substring(o+8))):-1!==(o=r.indexOf("MSIE"))?(d="Microsoft Internet Explorer",u=r.substring(o+5)):-1!==(o=r.indexOf("Edge"))?(d="Edge",u=r.substring(o+5)):-1!==(o=r.indexOf("Trident"))?(d="Trident",u=r.substring(o+8)):-1!==(o=r.indexOf("Chrome"))?(d="Chrome",u=r.substring(o+7)):-1!==(o=r.indexOf("Safari"))?(d="Safari",u=r.substring(o+7),-1!==(o=r.indexOf("Version"))&&(u=r.substring(o+8))):-1!==(o=r.indexOf("Firefox"))?(d="Firefox",u=r.substring(o+8)):-1===(o=r.indexOf("Mobile"))||-1===r.indexOf("iPad")&&-1===r.indexOf("iPhone")&&-1===r.indexOf("iPod")&&-1===r.indexOf("wv")?(i=r.lastIndexOf(" ")+1)<(o=r.lastIndexOf("/"))&&(d=r.substring(i,o),u=r.substring(o+1),d.toLowerCase()===d.toUpperCase()&&(d=navigator.appName)):(d="WebView",u=r.substring(o+8)),-1!==(a=u.indexOf(";"))&&(u=u.substring(0,a)),-1!==(a=u.indexOf(" "))&&(u=u.substring(0,a)),l=parseInt(""+u,10),isNaN(l)&&(u=""+parseFloat(s),l=parseInt(s,10)),{name:d,version:l,versionx:u,os:navigator.platform})}},{}],12:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default={isFunction:function(e){return!(!e||"function"!=typeof e)}}},{}],13:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e={}
return{attach:function(t,n,i){var o=n+"_fc_observer"
t[n]&&i&&(void 0===t[o]||t[o]!==i)&&(t[o]=i,function(t,n){e[n]=t[n],t[n]=function(){var i=e[n].apply(t,arguments),o=t[n+"_fc_observer"]
return"function"==typeof o&&o(),i}}(t,n))},detach:function(t,n){var i=n+"_fc_observer"
t[n]&&t[i]&&(t[i]=void 0,function(t,n){e[n]&&(delete t[n],t[n]=e[n],delete e[n])}(t,n))}}}.bind(void 0)()},{}],14:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i,o=e("./common/js_util"),a=(i=o)&&i.__esModule?i:{default:i}
n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e={},t=["widget:opened","widget:closed","widget:loaded","widget:destroyed","user:created","user:cleared","message:sent","message:received","unreadCount:notify","push:subscribed"]
return{clear:function(){e={}},valid:function(e){return!(!e||!t)&&-1!==t.indexOf(e)},subscribe:function(t,n){this.valid(t)&&(void 0===e[t]&&(e[t]=[]),e[t].push(n))},unsubscribe:function(t,n){if(this.valid(t)){var i,o=e&&e[t]
if(o)for(var s=0,r=o.length;s<r;s++)if(i=o[s],a.default.isFunction(i)&&(!n||i.name===n.name)){e[t].splice(s,1)
break}}},publish:function(t,n,i){if(this.valid(t)){var o,a=e&&e[t]
if(a)for(var s=0,r=a.length;s<r;s++){o=a[s]
var d=function(){n?o(n):o()}
i?setTimeout(d,0):d()}}}}}.bind(void 0)()},{"./common/js_util":12}],15:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i=s(e("./../obj/constants")),o=s(e("./../obj/user")),a=s(e("./common/dom"))
function s(e){return e&&e.__esModule?e:{default:e}}n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=null,t=null,n=null,s=null,r=null,d=null
return{getHost:function(){return r},getToken:function(){return t},getReferrer:function(){return n},getSiteId:function(){return s},getSettings:function(){return d},setSettings:function(e){d=e},init:function(e){t=e.token,n=e.referrer,r=e.host,s=e.siteId},reset:function(){t=n=r=s=void 0},getJSON:function(){return{token:t,referrer:n,host:r,siteId:s}},load:function(t,n){e=window.open(t,n)},postMessage:function(t){e&&e.postMessage(t,r)},dispatch:function(e,t){e&&t&&"function"==typeof e&&e(t)},unload:function(){this.postMessage({action:"push_subscribe_destroy"})},add:function(){var e=document,s=e.body,d=e.getElementById(i.default.frameDivId),u=e.createElement("IFRAME"),l=(o.default.getExternalId(),o.default.getRestoreId(),o.default.getConfig()),f=l&&l.cssNames
d&&"DIV"===d.tagName||(d=e.createElement("DIV"),s.appendChild(d)),a.default.setAttr(d,{id:i.default.frameDivId,class:f&&f.widget||""}),l&&l.headerProperty&&("ltr"===l.headerProperty.direction&&d.classList.add("fc_l2r"),l.headerProperty.hideChatButton&&d.classList.add("fc_dn")),a.default.setAttr(u,{id:i.default.frameId,name:i.default.frameId,title:"Chat",frameborder:"0"}),d.appendChild(u),this.load(r+"/widget/?token="+t+"&referrer="+n,i.default.frameId)},remove:function(t){a.default.remove(t),e=null},setFrameSize:function(){if(null===this.getSettings())return""
var e=this.getSettings().widgetSize,t="fc-widget-normal"
e&&e.length>0&&(t="fc-widget-"+e.toLowerCase()),document.getElementById(i.default.frameDivId).classList.add(t)},setWidgetDisplayStyle:function(){var e=document.body,t=document.getElementById(i.default.frameDivId),n=a.default.getElementStyle(e,"display")
n&&-1!==["flex","grid"].indexOf(n)&&a.default.setAttr(t,{style:"display: "+n})}}}.bind(void 0)()},{"./../obj/constants":7,"./../obj/user":9,"./common/dom":11}],16:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i,o=v(e("./common/dom")),a=v(e("./frame")),s=v(e("./events")),r=(v(e("./common/ajax")),v(e("../obj/constants"))),d=v(e("../obj/state")),u=v(e("../obj/user")),l=v(e("./msg_handler")),f=v(e("./push_frame")),c=v(e("../helpers/modal")),m=v(e("../helpers/omni")),p=v(e("./msg_processor"))
function v(e){return e&&e.__esModule?e:{default:e}}n.default={onMessageCB:function(){return i||(i=this.onMessage.bind(this))},onVisibilityChangeCB:function(){var e
return function(){return e||(e=this.onVisibilityChange.bind(this))}}(),subscribe:function(){window.addEventListener?(window.addEventListener("message",this.onMessageCB(),!1),window.addEventListener("focus",this.onVisibilityChangeCB(),!1),window.addEventListener("blur",this.onVisibilityChangeCB(),!1)):(window.attachEvent("onmessage",this.onMessageCB()),window.attachEvent("focus",this.onVisibilityChangeCB()),window.attachEvent("blur",this.onVisibilityChangeCB()))},unsubscribe:function(){window.removeEventListener?(window.removeEventListener("message",this.onMessageCB(),!1),window.removeEventListener("focus",this.onVisibilityChangeCB(),!1),window.removeEventListener("blur",this.onVisibilityChangeCB(),!1)):(window.detachEvent("onmessage",this.onMessageCB()),window.detachEvent("focus",this.onVisibilityChangeCB()),window.detachEvent("blur",this.onVisibilityChangeCB()))},onVisibilityChange:function(e){switch(e.type){case"focus":a.default.postMessage({action:"widget_focus"})
break
case"blur":a.default.postMessage({action:"widget_blur",payload:{title:document.title,location:window.location.href}}),f.default.postMessage({action:"widget_location",openWindow:!1,payload:window.location.href})}},onUserCreate:function(e){s.default.publish("user:created",e)},updateFrameSettings:function(e){if(null!==a.default.getSettings()||void 0===e)return!1
a.default.setSettings(e)},onMessage:function(e){var t=e.origin||e.originalEvent.origin,n=u.default.getConfig(),i=n&&n.cssNames
if(t===a.default.getHost()||t===f.default.getHostOrigin()){var v=(g=e.data)&&g.action
if(this.updateFrameSettings(g.settingsPayload),v)switch(v){case"push_subscribe_destroy_response":f.default.unload(),d.default.reset(),u.default.reset(),m.default.destroy(),a.default.reset(),a.default.remove(r.default.frameDivId),this.unsubscribe(),s.default.publish("widget:destroyed",null,!0),s.default.clear()
break
case"push_user_meta":s.default.publish("push:subscribed",g.data),a.default.postMessage(g)
break
case"notify_frame":var g=g.data,h=document.getElementById(r.default.frameDivId),w=i&&i.open||"fc-open"
"expand"===g?(h.removeAttribute("style"),h.classList.add("h-open-notify"),h.classList.add(w),h.classList.add(g)):"close"===g?(this.removeScrollEventAndStyleFromWidget(),h.removeAttribute("style"),h.classList.remove("h-open-notify"),h.classList.remove(w),h.classList.remove("expand")):(h.classList.add("h-open-notify"),h.classList.add(w))
break
case"resize_frame_notify":return!1
case"resize_frame":var b=document.getElementById(r.default.frameDivId),y=document.getElementsByTagName("BODY")[0]
w=i&&i.open||"fc-open"
d.default.opened(g.isOpen),d.default.isOpened()?(this.removeScrollEventAndStyleFromWidget(),b.classList.add("h-open-container"),b.classList.add(w),s.default.publish("widget:opened"),y&&y.classList.add("fc-widget-open")):(b.removeAttribute("style"),b.classList.remove("h-open-container"),b.classList.remove(w),s.default.publish("widget:closed"),y&&y.classList.remove("fc-widget-open"))
break
case"toggle_frame":b=document.getElementById(r.default.frameDivId)
g.show?b.classList.remove("hide"):-1===b.className.trim().indexOf("hide")&&b.classList.add("hide")
break
case"push_frame_loaded":f.default.loaded(!0),f.default.setSource(e&&e.source),f.default.postMessage({action:"widget_location",openWindow:!1,payload:window.location.href}),a.default.postMessage({action:"widget_location",payload:{title:document.title,location:window.location.href}})
break
case"frame_initialized":if(!1===d.default.isInitialized()){d.default.initialized(!0)
var _=a.default.getJSON(),E=u.default.getProperties(),I=u.default.getConfig(),C=d.default.getTags(),M=d.default.getFaqTags()
if(_.externalId=u.default.getExternalId(),_.restoreId=u.default.getRestoreId(),E&&(_.properties=E),I&&(_.config=I),C&&(_.tags=C),M&&(_.faqTags=M),_.userAgent=o.default.getAgent,o.default.storageAvailable){var L=_.token,O=localStorage.getItem(L),P=_.siteId?_.token+"_"+_.siteId:null,k=P?localStorage.getItem(P):null;(O||P&&k)&&(_.storage={},_.storage[L]=O||JSON.stringify({}),P&&(_.storage[P]=k||JSON.stringify({})))}a.default.setFrameSize(),a.default.setWidgetDisplayStyle(),a.default.postMessage({action:"load_widget",payload:_})}break
case"frame_loaded":d.default.loaded(!0),s.default.publish("widget:loaded"),f.default.isLoaded()||f.default.init({host:g.pushDomain+"?ref="+btoa(window.location.origin),hostOrigin:o.default.url_domain(g.pushDomain),appLogoPath:g.appLogoPath}),d.default.doOpen()&&a.default.postMessage({action:"open_chat"})
break
case"datastore_loaded":a.default.postMessage({action:"load_rules"})
break
case"rules_loaded":m.default.init(),p.default.start()
break
case"enlarge_image":c.default.create(g.picUrl)
break
case"expand_all":var x=i&&i.expanded||"expanded"
document.getElementById(r.default.frameDivId).classList.add("expanded-modal"),document.getElementById(r.default.frameDivId).classList.add(x)
break
case"collapse_all":x=i&&i.expanded||"expanded"
document.getElementById(r.default.frameDivId).classList.remove("expanded-modal"),document.getElementById(r.default.frameDivId).classList.remove(x)
break
case"user_created":var S=g.data
if(d.default.isLoaded())S&&u.default.setRestoreId(S.restoreId),this.onUserCreate(g)
else if(g.success){var N=S&&S.externalId,T=S&&S.restoreId,j=u.default.getExternalId()
j?j===N&&(u.default.setRestoreId(T),this.onUserCreate(g)):this.onUserCreate(g)}else this.onUserCreate(g)
break
case"user_cleared":s.default.publish("user:cleared"),f.default.postMessage({action:"clear:subscription",openWindow:!1}),u.default.reset()
break
case"message_sent":s.default.publish("message:sent",g)
break
case"message_received":s.default.publish("message:received",g)
break
case"ask_permission":f.default.postMessage({action:"ask:permission",openWindow:!0})
break
case"clear_subscription":f.default.postMessage({action:"clear:subscription",openWindow:!1})
break
case"unread_count_notify":s.default.publish("unreadCount:notify",g.data)
break
case"set_storage_item":if(o.default.storageAvailable){var D=g.data
D&&D.key&&D.value&&localStorage.setItem(D.key,JSON.stringify(D.value))}break
case"remove_storage_item":if(o.default.storageAvailable){var B=g.data
B&&B.key&&localStorage.removeItem(B.key)}break
case"add_reply_dialog_absolute_class_to_frame":d.default.isOpened()||this.addScrollEventAndStyleFromWidget()
break
case"remove_reply_dialog_absolute_class_to_frame":this.removeScrollEventAndStyleFromWidget()
break
default:l.default.publish(v,g)}}},scrollHandlerForPositionCalculation:function(){var e=document.getElementById(r.default.frameDivId),t=document.getElementsByTagName("BODY")[0],n=screen.availHeight,i=.42
0!==window.orientation&&(n=screen.availWidth),n<=375?i=.51:n<=414?i=.29:n<=568?i=.365:n<=647?i=.468:n<=736&&(i=.486)
var o=t.scrollTop+n*i-e.offsetHeight
o+e.offsetHeight>=t.scrollHeight&&(o=t.scrollHeight-e.offsetHeight),e.style.top=Math.floor(o)+"px"},removeScrollEventAndStyleFromWidget:function(){var e=document.getElementById(r.default.frameDivId)
o.default.unbindEvent("scroll",this.scrollHandlerForPositionCalculation),e.classList.remove("fc_reply_position_absolute"),e.style.top="unset"},addScrollEventAndStyleFromWidget:function(){document.getElementById(r.default.frameDivId).classList.add("fc_reply_position_absolute"),o.default.bindEvent("scroll",this.scrollHandlerForPositionCalculation)},syncResponse:function(e,t){var n=e&&e.status
n?a.default.dispatch(t,{success:200===n,status:n}):a.default.dispatch(t,{success:!1,status:400})}}},{"../helpers/modal":1,"../helpers/omni":2,"../obj/constants":7,"../obj/state":8,"../obj/user":9,"./common/ajax":10,"./common/dom":11,"./events":14,"./frame":15,"./msg_handler":18,"./msg_processor":19,"./push_frame":21}],17:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i,o=e("./msg_handler"),a=(i=o)&&i.__esModule?i:{default:i}
n.default={send:function(e,t,n){t&&"function"==typeof t&&(n=t,t=null),a.default.subscribe(e,t,n)}}},{"./msg_handler":18}],18:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i=s(e("./frame")),o=s(e("./../obj/state")),a=s(e("./queue"))
function s(e){return e&&e.__esModule?e:{default:e}}n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e={}
return{subscribe:function(t,n,s){o.default.isLoaded()?(e[t+"_ack"]=s,i.default.postMessage({action:t,payload:n})):a.default.enque({action:t,payload:n,handler:s})},publish:function(t,n){i.default.dispatch(e[t],{success:n.success,status:n.status,data:n.data})}}}.bind(void 0)()},{"./../obj/state":8,"./frame":15,"./queue":22}],19:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i=a(e("./queue")),o=a(e("./msg_handler"))
function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}n.default={start:function(){i.default.isEmpty()||i.default.isLocked()||(i.default.toggleLock(!0),this.run())},run:function(){var e=i.default.deque()
e?this.process(e):i.default.toggleLock(!1)},process:function(e){var t=this
e.handler?o.default.subscribe(e.action,e.payload,function(n){s(this,t),"function"==typeof e.handler&&e.handler(n),this.run()}.bind(this)):(o.default.subscribe(e.action,e.payload),setTimeout(function(){s(this,t),this.run()}.bind(this),0))}}},{"./msg_handler":18,"./queue":22}],20:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i,o=e("./msg_handler"),a=(i=o)&&i.__esModule?i:{default:i}
n.default={send:function(e,t){return new Promise(function(n,i){a.default.subscribe(e,t,function(e){var t=e&&e.status,o=e&&e.success
200===t||o?n(e):i(e)})})}}},{"./msg_handler":18}],21:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i=a(e("./common/dom")),o=a(e("../obj/constants"))
function a(e){return e&&e.__esModule?e:{default:e}}n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=null,t=null,n=null,a=!1,s=null
return{isLoaded:function(){return a},loaded:function(e){a=e},getSource:function(){return s},setSource:function(e){s=e},getHost:function(){return e},getHostOrigin:function(){return t},getLogoPath:function(){return n},init:function(i){e=i.host,t=i.hostOrigin,n=i.appLogoPath,this.load()},reset:function(){e=null,t=null,n=null,a=!1,s=null},postMessage:function(t){t.openWindow?window.open(e+"&action="+btoa(t.action)+"&appLogoPath="+btoa(n),"_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"):a&&this.post({action:t.action,payload:t.payload})},post:function(e){s.postMessage(e,t)},add:function(){var t=document,n=t.body,a=t.getElementById(o.default.pushFrameDivId),s=t.createElement("IFRAME")
a&&"DIV"===a.tagName||(a=t.createElement("DIV"),n.appendChild(a)),a.setAttribute("id",o.default.pushFrameDivId),i.default.setAttr(s,{id:o.default.pushFrameId,src:e,frameborder:"0"}),a.appendChild(s)},load:function(){i.default.isPushSupportedByBrowser()&&this.add()},unload:function(){i.default.remove(o.default.pushFrameDivId),this.reset()}}}.bind(void 0)()},{"../obj/constants":7,"./common/dom":11}],22:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i,o=e("./msg_handler");(i=o)&&i.__esModule
n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=[],t=!1
return{enque:function(n){t||(void 0===e&&(e=[]),e.push(n))},deque:function(){if(e&&e.length)return e.shift()},toggleLock:function(e){t=e},isLocked:function(){return t},isEmpty:function(){return!e||!e.length}}}.bind(void 0)()},{"./msg_handler":18}],23:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var i=h(e("./obj/constants")),o=h(e("./obj/state")),a=h(e("./obj/user")),s=h(e("./utils/msg_promise")),r=h(e("./utils/msg_callback")),d=h(e("./utils/msg_handler")),u=h(e("./utils/common/dom")),l=h(e("./utils/frame")),f=h(e("./utils/message")),c=h(e("./utils/events")),m=(h(e("./utils/common/ajax")),h(e("./utils/push_frame"))),p=h(e("./helpers/omni/analytics")),v=h(e("./helpers/omni/transition")),g=h(e("./helpers/omni"))
function h(e){return e&&e.__esModule?e:{default:e}}n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=function(){var e=document,t=e.createElement("link")
t.href=l.default.getHost()+"/css/widget.css?t="+(new Date).getTime(),t.rel="stylesheet",e.getElementsByTagName("head")[0].appendChild(t)}
return{init:function(t){var n;-1!==["Chrome","Firefox","Safari","Edge","Trident","WebView"].indexOf(u.default.getAgent.name)&&(t&&t.token&&(window.location.origin||(window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),t.referrer=btoa(window.location.origin),void 0===t.open&&(t.open=!1),n=t,o.default.reset(),a.default.reset(),g.default.destroy(),f.default.unsubscribe(),l.default.init({host:n.host.trim(),token:n.token.trim(),referrer:n.referrer,siteId:n.siteId}),o.default.openOnLoad(n.open),n.externalId&&(a.default.setExternalId(n.externalId),a.default.setRestoreId(n.restoreId)),n.tags&&n.tags.length&&o.default.setTags(n.tags),n.faqTags&&o.default.setFaqTags(n.faqTags),a.default.setProperties({firstName:n.firstName,lastName:n.lastName,email:n.email,phone:n.phone,phoneCountry:n.phoneCountryCode,locale:n.locale,meta:n.meta}),a.default.setConfig(n.config),n.onLoad&&c.default.subscribe("widget:loaded",n.onLoad),l.default.add(),f.default.subscribe(),e()))},destroy:function(){m.default.unload(),l.default.unload()},isOpen:function(){return o.default.isOpened()},isInitialized:function(){return!!l.default.getToken()},isLoaded:function(){return o.default.isLoaded()},on:function(e,t){c.default.subscribe(e,t)},off:function(e,t){c.default.unsubscribe(e,t)},open:function(e){e?d.default.subscribe("open_channel",e):d.default.subscribe("open_chat")},close:function(){d.default.subscribe("close_chat")},show:function(){d.default.subscribe("show_chat")},hide:function(){d.default.subscribe("hide_chat")},setTags:function(e){o.default.isLoaded()&&(e&&e.length?o.default.setTags(e):o.default.setTags([]),d.default.subscribe("set_tags",{tags:o.default.getTags(),force:!0}))},setFaqTags:function(e){o.default.isLoaded()&&(e?o.default.setFaqTags(e):o.default.setFaqTags({}),d.default.subscribe("set_faq_tags",{faqTags:o.default.getFaqTags(),force:!0}))},setExternalId:function(e,t){if(e){if(!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("set_external_id",{externalId:e})
r.default.send("set_external_id",{externalId:e},t)}},setConfig:function(e){var t=document.getElementById(i.default.frameDivId)
t&&e&&e.headerProperty&&(void 0!==e.headerProperty.direction&&(t.classList.remove("fc_l2r"),"ltr"===e.headerProperty.direction&&t.classList.add("fc_l2r")),void 0!==e.headerProperty.hideChatButton&&(t.classList.remove("fc_dn"),e.headerProperty.hideChatButton&&t.classList.add("fc_dn"))),d.default.subscribe("set_custom_config",e)},user:{get:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("get_user")
r.default.send("get_user",e)},isExists:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("user_exists")
r.default.send("user_exists",e)},update:function(e,t){if(e.firstName&&a.default.setFirstName(e.firstName),e.lastName&&a.default.setLastName(e.lastName),e.email&&a.default.setEmail(e.email),e.phone&&a.default.setPhone(e.phone),e.phoneCountry&&a.default.setPhoneCountry(e.phoneCountry),e.meta&&a.default.setUserMeta(e.meta),!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("update_user",e)
r.default.send("update_user",e,t)},setProperties:function(e,t){var n={}
if(e.firstName&&(n.firstName=e.firstName,e.firstName=void 0),e.lastName&&(n.lastName=e.lastName,e.lastName=void 0),e.email&&(n.email=e.email,e.email=void 0),e.phone&&(n.phone=e.phone,e.phone=void 0),e.phoneCountryCode&&(n.phoneCountry=e.phoneCountryCode,e.phoneCountryCode=void 0),e.locale&&(n.locale=e.locale,e.locale=void 0),n.meta=e,a.default.setProperties(n),!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("set_user_properties",n)
r.default.send("set_user_properties",n,t)},setFirstName:function(e,t){if(!t)return this.setProperties({firstName:e})
this.setProperties({firstName:e},t)},setLastName:function(e,t){if(!t)return this.setProperties({lastName:e})
this.setProperties({lastName:e},t)},setEmail:function(e,t){if(!t)return this.setProperties({email:e})
this.setProperties({email:e},t)},setPhone:function(e,t){if(!t)return this.setProperties({phone:e})
this.setProperties({phone:e},t)},setPhoneCountryCode:function(e,t){if(!t)return this.setProperties({phoneCountryCode:e})
this.setProperties({phoneCountryCode:e},t)},setMeta:function(e,t){if(!t)return this.setProperties(e)
this.setProperties(e,t)},setLocale:function(e,t){if(!t)return this.setProperties({locale:e})
this.setProperties({locale:e},t)},clear:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("reset_user")
r.default.send("reset_user",e)},create:function(e,t){if("function"==typeof e&&(t=e,e=null),!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("create_user",e)
r.default.send("create_user",e,t)}},track:p.default.track,trackPage:function(e,t){v.default.track({newValue:e,title:t,force:!0})}}}.bind(void 0)()},{"./helpers/omni":2,"./helpers/omni/analytics":4,"./helpers/omni/transition":5,"./obj/constants":7,"./obj/state":8,"./obj/user":9,"./utils/common/ajax":10,"./utils/common/dom":11,"./utils/events":14,"./utils/frame":15,"./utils/message":16,"./utils/msg_callback":17,"./utils/msg_handler":18,"./utils/msg_promise":20,"./utils/push_frame":21}]},{},[6])