(function e(t,n,o){function a(r,s){if(!n[r]){if(!t[r]){var d="function"==typeof require&&require
if(!s&&d)return d(r,!0)
if(i)return i(r,!0)
var u=new Error("Cannot find module '"+r+"'")
throw u.code="MODULE_NOT_FOUND",u}var l=n[r]={exports:{}}
t[r][0].call(l.exports,function(e){var n=t[r][1][e]
return a(n||e)},l,l.exports,e,t,n,o)}return n[r].exports}for(var i="function"==typeof require&&require,r=0;r<o.length;r++)a(o[r])
return a})({1:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o=i(e("./../obj/constants")),a=i(e("./../utils/common/dom"))
function i(e){return e&&e.__esModule?e:{default:e}}n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=function(e){27===e.keyCode&&this.destroy()}
return{create:function(t){var n=document,a=n.body,i=n.createElement("DIV"),r=n.createElement("IMG"),s=n.createElement("DIV"),d=n.createElement("DIV")
i.setAttribute("id",o.default.modalDivId),i.onclick=this.destroy,r.setAttribute("src",t),r.onclick=this.destory,d.appendChild(r),d.className="image-cell",s.appendChild(d),s.className="image-wrapper",i.appendChild(s),a.appendChild(i),window.addEventListener?window.addEventListener("keydown",e.bind(this),!1):window.attachEvent("keydown",e.bind(this),!1)},destroy:function(){var t=document,n=t.body,i=t.getElementById(o.default.modalDivId)
i&&(a.default.purge(i),n.removeChild(i)),window.removeEventListener?window.removeEventListener("keydown",e.bind(this)):window.detachEvent("keydown",e.bind(this))}}}.bind(void 0)()},{"./../obj/constants":7,"./../utils/common/dom":11}],2:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o=i(e("./omni/transition")),a=i(e("./omni/activity"))
function i(e){return e&&e.__esModule?e:{default:e}}n.default={init:function(){o.default.start(),a.default.start()},destroy:function(){o.default.stop(),a.default.stop()}}},{"./omni/activity":3,"./omni/transition":5}],3:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o=i(e("./../../utils/frame")),a=i(e("./../../utils/common/dom"))
function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}n.default=function(){r(void 0,void 0)
var e=function(){r(void 0,void 0),o.default.postMessage({action:"track_activity",payload:{seen:n}})}.bind(void 0),t=null,n=null,i=null,s=function(){r(void 0,void 0),n=(new Date).getTime()}.bind(void 0),d=function(e){r(void 0,void 0),a.default.unbindEvent("keypress",s),a.default.unbindEvent("mousemove",s),a.default.unbindEvent("click",s),e&&(a.default.bindEvent("keypress",s),a.default.bindEvent("mousemove",s),a.default.bindEvent("click",s))}.bind(void 0),u=function(){r(void 0,void 0)
var o=(new Date).getTime()
null===i||null===n||t&&(o<t||n<t||o-t<59e3||n>t&&n<o&&e()),t=o}.bind(void 0),l=function(){r(void 0,void 0),i&&clearInterval(i),i=null,n=null,t=null}.bind(void 0),f=function(){r(void 0,void 0),l(),d(!0),t=(new Date).getTime(),i=setInterval(u,6e4)}.bind(void 0),c=function(){r(void 0,void 0),n=(new Date).getTime(),e(),l(),d(!1)}.bind(void 0)
return{start:function(){f(),a.default.bindEvent("focus",f),a.default.bindEvent("blur",c),a.default.bindEvent("unload",c)},stop:function(){c(),a.default.unbindEvent("focus",f),a.default.unbindEvent("blur",c),a.default.unbindEvent("unload",c)}}}.bind(void 0)()},{"./../../utils/common/dom":11,"./../../utils/frame":14}],4:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o,a=e("./../../utils/msg_handler"),i=(o=a)&&o.__esModule?o:{default:o}
n.default={track:function(e,t){i.default.subscribe("track_event",{eventName:e,data:t})}}},{"./../../utils/msg_handler":17}],5:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o=i(e("./../../utils/common/observe")),a=i(e("./../../utils/frame"))
function i(e){return e&&e.__esModule?e:{default:e}}n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=void 0,t=void 0,n=void 0,i=function(o){e=o.oldValue,t=o.newValue,n=o.title,a.default.postMessage({action:"track_location",payload:{pageUrl:o}})},r=function(){var o=window.location.href
t!==o&&(e=t,t=o,n=document.title,i({oldValue:e,newValue:t,title:n}))}
return{start:function(e){t=window.location.href,i({newValue:t,title:document.title}),o.default.attach(window.history,"pushState",r),o.default.attach(window.history,"replaceState",r),window.addEventListener?(window.addEventListener("hashchange",r,!1),window.addEventListener("popstate",r,!1)):(window.attachEvent("hashchange",r,!1),window.attachEvent("popstate",r,!1))},stop:function(){e=t=void 0,o.default.detach(window.history,"pushState"),o.default.detach(window.history,"replaceState"),window.removeEventListener?(window.removeEventListener("hashchange",r),window.removeEventListener("popstate",r)):(window.detachEvent("hashchange",r),window.detachEvent("popstate",r))},track:i}}.bind(void 0)()},{"./../../utils/common/observe":12,"./../../utils/frame":14}],6:[function(e,t,n){"use strict"
var o,a,i=e("./widget"),r=(o=i)&&o.__esModule?o:{default:o}
if(window.fcWidget||(window.fcWidget=r.default),window.fcSettings)if("complete"===document.readyState){var s=window.fcSettings.onInit
s&&"function"==typeof s&&s(),r.default.init(window.fcSettings)}else document.onreadystatechange=(a=r.default,function(){if("complete"===document.readyState){var e=window.fcSettings.onInit
e&&"function"==typeof e&&e(),a.init(window.fcSettings)}})},{"./widget":23}],7:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default={frameDivId:"fc_frame",frameId:"fc_widget",pushFrameDivId:"fc_push_frame",pushFrameId:"fc_push",modalDivId:"fc_web_modal"}},{}],8:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=!1,t=!1,n=!1,o=[],a={}
return{isLoaded:function(){return e},loaded:function(t){e=t},isOpened:function(){return t},opened:function(e){t=e},doOpen:function(){return n},openOnLoad:function(e){n=e},getTags:function(){return o},setTags:function(e){o=e},getFaqTags:function(){return a},setFaqTags:function(e){a=e},reset:function(){e=!1,t=!1,n=!1,o=[],a={}}}}.bind(void 0)()},{}],9:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=null,t=null,n={},o={}
return{getExternalId:function(){return e},setExternalId:function(t){e=t},getRestoreId:function(){return t},setRestoreId:function(e){t=e},getConfig:function(){return n},setConfig:function(e){n=e},getProperties:function(){return o},setProperties:function(e){o.firstName=e.firstName,o.lastName=e.lastName,o.email=e.email,o.phone=e.phone,o.phoneCountry=e.phoneCountry,o.locale=e.locale,this.setUserMeta(e.meta)},setFirstName:function(e){o.firstName=e},setLastName:function(e){o.lastName=e},setEmail:function(e){o.email=e},setPhone:function(e){o.phone=e},setPhoneCountry:function(e){o.phoneCountry=e},setUserMeta:function(e){if(o.meta=o.meta||{},e)for(var t in e)e.hasOwnProperty(t)&&(o.meta[t]=e[t])},setLocale:function(e){o.locale=e},reset:function(){e=null,t=null,n={},o={}},getJSON:function(){return{externalId:e,restoreId:t,customConfig:n,properties:o}}}}.bind(void 0)()},{}],10:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o,a=e("./../frame"),i=(o=a)&&o.__esModule?o:{default:o}
n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=function(){return i.default.getHost()+url.replace("{token}",i.default.getToken())},t=function(e){if(e){void 0===e.async&&(e.async=!0)
var t=function(){if("XMLHttpRequest"in window)return new XMLHttpRequest
for(var e,t=["MSXML2.XmlHttp.6.0","MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"],n=0;n<t.length;n++)try{e=new ActiveXObject(t[n])
break}catch(e){}return e}()
t.open(e.type,e.url,e.async),t.onreadystatechange=function(){4===t.readyState&&e.success(JSON.parse(t.responseText))},"GET"!==e.type&&(e.contentType?t.setRequestHeader("Content-Type",e.contentType):t.setRequestHeader("Content-type","application/x-www-form-urlencoded")),e.data?t.send(e.data):t.send()}}
return{getRequest:function(n,o){t({url:e(),type:"GET",success:o})},putRequest:function(n,o,a){t({url:e(),type:"PUT",data:JSON.stringify(o),contentType:"application/json; charset=UTF-8",success:a})}}}.bind(void 0)()},{"./../frame":14}],11:[function(e,t,n){"use strict"
var o,a,i,r,s,d,u,l
Object.defineProperty(n,"__esModule",{value:!0}),n.default={url_domain:function(e){var t=document.createElement("a")
return t.href=e,t.origin},setAttr:function(e,t){for(var n in t)t.hasOwnProperty(n)&&e.setAttribute(n,t[n])
return e},remove:function(e){var t=document,n=t.body,o=t.getElementById(e)
o&&(this.purge(o),n.removeChild(o))},purge:function(e){var t,n,o,a=e.attributes
if(a)for(t=a.length-1;t>=0;t-=1)"function"==typeof e[o=a[t].name]&&(e[o]=null)
if(a=e.childNodes)for(n=a.length,t=0;t<n;t+=1)this.purge(e.childNodes[t])},bindEvent:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
window.addEventListener?window.addEventListener(e,t,n):window.attachEvent(e,t,n)},unbindEvent:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
window.removeEventListener?window.removeEventListener(e,t,n):window.detachEvent(e,t,n)},parseJSON:function(e){var t
if(e){try{t=JSON.parse(e)}catch(e){}return t}},isPushSupportedByBrowser:function(){var e,t,n,o=!1,a=!1,i=function(){var e=!1
try{ServiceWorkerRegistration&&"showNotification"in ServiceWorkerRegistration.prototype&&(e=!0)}catch(e){}return e};(function(){var e=window.chrome,t=window.navigator,n=t.vendor,o=t.userAgent.indexOf("OPR")>-1,a=t.userAgent.indexOf("Edge")>-1
t.userAgent.match("CriOS")
return null!=e&&"Google Inc."===n&&!1===o&&!1===a})()&&(e=!!(n=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./))&&parseInt(n[2],10))&&(o=e>=50),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(t=function(){var e=navigator.userAgent,t=e.indexOf("Firefox"),n=e.substring(t+8).split(".")
return!(!n||!n.length)&&parseInt(n[0],10)}())&&(a=t>=44)
var r="serviceWorker"in navigator,s=(i=i(),"PushManager"in window)
return r&&i&&s&&(o||a)},getAgent:(r=navigator.appVersion,s=navigator.userAgent,d=navigator.appName,u=""+parseFloat(r),l=parseInt(r,10),-1!==(a=s.indexOf("Opera"))?(d="Opera",u=s.substring(a+6),-1!==(a=s.indexOf("Version"))&&(u=s.substring(a+8))):-1!==(a=s.indexOf("MSIE"))?(d="Microsoft Internet Explorer",u=s.substring(a+5)):-1!==(a=s.indexOf("Edge"))?(d="Edge",u=s.substring(a+5)):-1!==(a=s.indexOf("Trident"))?(d="Trident",u=s.substring(a+8)):-1!==(a=s.indexOf("Chrome"))?(d="Chrome",u=s.substring(a+7)):-1!==(a=s.indexOf("Safari"))?(d="Safari",u=s.substring(a+7),-1!==(a=s.indexOf("Version"))&&(u=s.substring(a+8))):-1!==(a=s.indexOf("Firefox"))?(d="Firefox",u=s.substring(a+8)):(o=s.lastIndexOf(" ")+1)<(a=s.lastIndexOf("/"))&&(d=s.substring(o,a),u=s.substring(a+1),d.toLowerCase()===d.toUpperCase()&&(d=navigator.appName)),-1!==(i=u.indexOf(";"))&&(u=u.substring(0,i)),-1!==(i=u.indexOf(" "))&&(u=u.substring(0,i)),l=parseInt(""+u,10),isNaN(l)&&(u=""+parseFloat(r),l=parseInt(r,10)),{name:d,version:l,versionx:u,os:navigator.platform})}},{}],12:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
return{attach:function(e,t,n){var o=t+"Observer"
e[o]=n,e[t]&&function(e,t,n){var o=e[t]
e[t]=function(){var t=o.apply(e,arguments)
return"function"==typeof e[n]&&e[n](),t}}(e,t,o)},detach:function(e,t){e[t+"Observer"]=void 0}}}.bind(void 0)()},{}],13:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e={},t=["widget:opened","widget:closed","widget:loaded","user:created","user:cleared","message:sent","message:received","unreadCount:notify","push:subscribed"]
return{clear:function(){e={}},valid:function(e){return!(!e||!t)&&-1!==t.indexOf(e)},subscribe:function(t,n){this.valid(t)&&(void 0===e[t]&&(e[t]=[]),e[t].push(n))},unsubscribe:function(t,n){if(this.valid(t)){var o,a=e&&e[t]
if(a)for(var i=0,r=a.length;i<r;i++)if(o=a[i],isFunction(o)&&(!n||o.name===n.name)){e.splice(i,1)
break}}},publish:function(t,n){if(this.valid(t)){var o,a=e&&e[t]
if(a)for(var i=0,r=a.length;i<r;i++)o=a[i],n?o(n):o()}}}}.bind(void 0)()},{}],14:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o=r(e("./../obj/constants")),a=r(e("./../obj/user")),i=r(e("./common/dom"))
function r(e){return e&&e.__esModule?e:{default:e}}n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=null,t=null,n=null,r=null,s=null
return{getHost:function(){return s},getToken:function(){return t},getReferrer:function(){return n},getSiteId:function(){return r},init:function(e){t=e.token,n=e.referrer,s=e.host,r=e.siteId},getJSON:function(){return{token:t,referrer:n,host:s,siteId:r}},load:function(t,n){e=window.open(t,n)},postMessage:function(t){e&&e.postMessage(t,s)},dispatch:function(e,t){e&&t&&"function"==typeof e&&e(t)},unload:function(){this.postMessage({action:"push_subscribe_destroy"})},add:function(){var e=document,r=e.body,d=e.getElementById(o.default.frameDivId),u=e.createElement("IFRAME")
a.default.getExternalId(),a.default.getRestoreId()
if(!d){var l=a.default.getConfig(),f=l&&l.cssNames
d=e.createElement("DIV"),i.default.setAttr(d,{id:o.default.frameDivId,class:f&&f.widget||""}),l&&l.headerProperty&&("ltr"===l.headerProperty.direction&&d.classList.add("fc_l2r"),l.headerProperty.hideChatButton&&d.classList.add("fc_dn")),i.default.setAttr(u,{id:o.default.frameId,name:o.default.frameId,title:"Chat",frameborder:"0"}),d.appendChild(u),r.appendChild(d),this.load(s+"/widget/"+t+"/"+n,o.default.frameId)}},remove:function(t){i.default.remove(t),e=null}}}.bind(void 0)()},{"./../obj/constants":7,"./../obj/user":9,"./common/dom":11}],15:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o=m(e("./common/dom")),a=m(e("./frame")),i=m(e("./events")),r=(m(e("./common/ajax")),m(e("../obj/constants"))),s=m(e("../obj/state")),d=m(e("../obj/user")),u=m(e("./msg_handler")),l=m(e("./push_frame")),f=m(e("../helpers/modal")),c=m(e("../helpers/omni")),p=m(e("./msg_processor"))
m(e("./storage"))
function m(e){return e&&e.__esModule?e:{default:e}}n.default={subscribe:function(e){window.addEventListener?(window.addEventListener("message",this.onMessage.bind(this),!1),window.addEventListener("focus",this.onVisibilityChange,!1),window.addEventListener("blur",this.onVisibilityChange,!1)):(window.attachEvent("onmessage",this.onMessage.bind(this)),window.attachEvent("focus",this.onVisibilityChange),window.attachEvent("blur",this.onVisibilityChange))},unsubscribe:function(){window.removeEventListener?(window.removeEventListener("message",this.onMessage,!1),window.removeEventListener("focus",this.onVisibilityChange,!1),window.removeEventListener("blur",this.onVisibilityChange,!1)):(window.detachEvent("onmessage",this.onMessage),window.detachEvent("focus",this.onVisibilityChange),window.detachEvent("blur",this.onVisibilityChange))},onVisibilityChange:function(e){switch(e.type){case"focus":a.default.postMessage({action:"widget_focus"})
break
case"blur":a.default.postMessage({action:"widget_blur",payload:{title:document.title,location:window.location.href}}),l.default.postMessage({action:"widget_location",openWindow:!1,payload:window.location.href})}},onUserCreate:function(e){i.default.publish("user:created",e)},onMessage:function(e){var t=e.origin||e.originalEvent.origin,n=d.default.getConfig(),m=n&&n.cssNames
if(t===a.default.getHost()||t===l.default.getHostOrigin()){var v=(h=e.data)&&h.action
if(v)switch(v){case"push_subscribe_destroy_response":s.default.reset(),d.default.reset(),i.default.clear(),a.default.remove(r.default.frameDivId),c.default.destroy(),this.unsubscribe()
break
case"push_user_meta":i.default.publish("push:subscribed",h.data),a.default.postMessage(h)
break
case"notify_frame":var h=h.data,g=document.getElementById(r.default.frameDivId),w=m&&m.open||"open"
"expand"===h?(g.removeAttribute("style"),g.classList.add("h-open-notify"),g.classList.add(w),g.classList.add(h)):"close"===h?(g.removeAttribute("style"),g.classList.remove("h-open-notify"),g.classList.remove(w),g.classList.remove("expand")):(g.classList.add("h-open-notify"),g.classList.add(w))
break
case"resize_frame_notify":var b=h.data+96+24,y=d.default.getConfig()&&d.default.getConfig().headerProperty
y&&y.hideChatButton&&(b-=80),document.getElementById(r.default.frameDivId).setAttribute("style","height:"+b+"px !important;")
break
case"resize_frame":var _=document.getElementById(r.default.frameDivId),E=document.getElementsByTagName("BODY")[0]
w=m&&m.open||"open"
s.default.opened(h.isOpen),s.default.isOpened()?(_.classList.add("h-open-container"),_.classList.add(w),i.default.publish("widget:opened"),E&&E.classList.add("fc-widget-open")):(_.classList.remove("h-open-container"),_.classList.remove(w),i.default.publish("widget:closed"),E&&E.classList.remove("fc-widget-open"))
break
case"toggle_frame":_=document.getElementById(r.default.frameDivId)
h.show?_.classList.remove("hide"):-1===_.className.trim().indexOf("hide")&&_.classList.add("hide")
break
case"push_frame_loaded":l.default.loaded(!0),l.default.setSource(e&&e.source),l.default.postMessage({action:"widget_location",openWindow:!1,payload:window.location.href}),a.default.postMessage({action:"widget_location",payload:{title:document.title,location:window.location.href}})
break
case"frame_initialized":var I=a.default.getJSON(),C=d.default.getProperties(),M=d.default.getConfig(),L=s.default.getTags(),O=s.default.getFaqTags()
I.externalId=d.default.getExternalId(),I.restoreId=d.default.getRestoreId(),C&&(I.properties=C),M&&(I.config=M),L&&(I.tags=L),O&&(I.faqTags=O),I.userAgent=o.default.getAgent
var P=I.token,k=localStorage.getItem(P),x=I.siteId?I.token+"_"+I.siteId:null,N=x?localStorage.getItem(x):null;(k||x&&N)&&(I.storage={},I.storage[P]=k||JSON.stringify({}),x&&(I.storage[x]=N||JSON.stringify({}))),a.default.postMessage({action:"load_widget",payload:I})
break
case"frame_loaded":s.default.loaded(!0),i.default.publish("widget:loaded"),l.default.isLoaded()||l.default.init({host:h.pushDomain+"?ref="+btoa(window.location.origin),hostOrigin:o.default.url_domain(h.pushDomain),appLogoPath:h.appLogoPath}),s.default.doOpen()&&a.default.postMessage({action:"open_chat"})
break
case"datastore_loaded":a.default.postMessage({action:"load_rules"})
break
case"rules_loaded":c.default.init(),p.default.start()
break
case"enlarge_image":f.default.create(h.picUrl)
break
case"expand_all":var T=m&&m.expanded||"expanded"
document.getElementById(r.default.frameDivId).classList.add("expanded-modal"),document.getElementById(r.default.frameDivId).classList.add(T)
break
case"collapse_all":T=m&&m.expanded||"expanded"
document.getElementById(r.default.frameDivId).classList.remove("expanded-modal"),document.getElementById(r.default.frameDivId).classList.remove(T)
break
case"user_created":var S=h.data
if(s.default.isLoaded())S&&d.default.setRestoreId(S.restoreId),this.onUserCreate(h)
else if(h.success){var j=S&&S.externalId,D=S&&S.restoreId,q=d.default.getExternalId()
q?q===j&&(d.default.setRestoreId(D),this.onUserCreate(h)):this.onUserCreate(h)}else this.onUserCreate(h)
break
case"user_cleared":i.default.publish("user:cleared"),l.default.postMessage({action:"clear:subscription",openWindow:!1}),d.default.reset()
break
case"message_sent":i.default.publish("message:sent",h)
break
case"message_received":i.default.publish("message:received",h)
break
case"ask_permission":l.default.postMessage({action:"ask:permission",openWindow:!0})
break
case"clear_subscription":l.default.postMessage({action:"clear:subscription",openWindow:!1})
break
case"unread_count_notify":i.default.publish("unreadCount:notify",h.data)
break
case"set_storage_item":var F=h.data
F&&F.key&&F.value&&localStorage.setItem(F.key,JSON.stringify(F.value))
break
case"remove_storage_item":var A=h.data
A&&A.key&&localStorage.removeItem(A.key)
break
default:u.default.publish(v,h)}}},syncResponse:function(e,t){var n=e&&e.status
n?a.default.dispatch(t,{success:200===n,status:n}):a.default.dispatch(t,{success:!1,status:400})}}},{"../helpers/modal":1,"../helpers/omni":2,"../obj/constants":7,"../obj/state":8,"../obj/user":9,"./common/ajax":10,"./common/dom":11,"./events":13,"./frame":14,"./msg_handler":17,"./msg_processor":18,"./push_frame":20,"./storage":22}],16:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o,a=e("./msg_handler"),i=(o=a)&&o.__esModule?o:{default:o}
n.default={send:function(e,t,n){t&&"function"==typeof t&&(n=t,t=null),i.default.subscribe(e,t,n)}}},{"./msg_handler":17}],17:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o=r(e("./frame")),a=r(e("./../obj/state")),i=r(e("./queue"))
function r(e){return e&&e.__esModule?e:{default:e}}n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e={}
return{subscribe:function(t,n,r){a.default.isLoaded()?(e[t+"_ack"]=r,o.default.postMessage({action:t,payload:n})):i.default.enque({action:t,payload:n,handler:r})},publish:function(t,n){o.default.dispatch(e[t],{success:n.success,status:n.status,data:n.data})}}}.bind(void 0)()},{"./../obj/state":8,"./frame":14,"./queue":21}],18:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o=i(e("./queue")),a=i(e("./msg_handler"))
function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}n.default={start:function(){o.default.isEmpty()||o.default.isLocked()||(o.default.toggleLock(!0),this.run())},run:function(){var e=o.default.deque()
e?this.process(e):o.default.toggleLock(!1)},process:function(e){var t=this
e.handler?a.default.subscribe(e.action,e.payload,function(n){r(this,t),"function"==typeof e.handler&&e.handler(n),this.run()}.bind(this)):(a.default.subscribe(e.action,e.payload),setTimeout(function(){r(this,t),this.run()}.bind(this),0))}}},{"./msg_handler":17,"./queue":21}],19:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o,a=e("./msg_handler"),i=(o=a)&&o.__esModule?o:{default:o}
n.default={send:function(e,t){return new Promise(function(n,o){i.default.subscribe(e,t,function(e){var t=e&&e.status,a=e&&e.success
200===t||a?n(e):o(e)})})}}},{"./msg_handler":17}],20:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o=i(e("./common/dom")),a=i(e("../obj/constants"))
function i(e){return e&&e.__esModule?e:{default:e}}n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=null,t=null,n=null,i=!1,r=null
return{isLoaded:function(){return i},loaded:function(e){i=e},getSource:function(){return r},setSource:function(e){r=e},getHost:function(){return e},getHostOrigin:function(){return t},getLogoPath:function(){return n},init:function(o){e=o.host,t=o.hostOrigin,n=o.appLogoPath,this.load()},reset:function(){e=null,t=null,n=null,i=!1,r=null},postMessage:function(t){t.openWindow?window.open(e+"&action="+btoa(t.action)+"&appLogoPath="+btoa(n),"_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"):i&&this.post({action:t.action,payload:t.payload})},post:function(e){r.postMessage(e,t)},add:function(){var t=document,n=t.body,i=t.getElementById(a.default.pushFrameDivId),r=t.createElement("IFRAME")
i||((i=t.createElement("DIV")).setAttribute("id",a.default.pushFrameDivId),o.default.setAttr(r,{id:a.default.pushFrameId,src:e,frameborder:"0"}),i.appendChild(r),n.appendChild(i))},load:function(){o.default.isPushSupportedByBrowser()&&this.add()},unload:function(){o.default.remove(a.default.pushFrameDivId),this.reset()}}}.bind(void 0)()},{"../obj/constants":7,"./common/dom":11}],21:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o,a=e("./msg_handler");(o=a)&&o.__esModule
n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=[],t=!1
return{enque:function(n){t||(void 0===e&&(e=[]),e.push(n))},deque:function(){if(e&&e.length)return e.shift()},toggleLock:function(e){t=e},isLocked:function(){return t},isEmpty:function(){return!e||!e.length}}}.bind(void 0)()},{"./msg_handler":17}],22:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o=i(e("./frame")),a=i(e("./common/dom"))
function i(e){return e&&e.__esModule?e:{default:e}}n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=o.default.getJSON(),t=e.token,n=e.siteId,i=n?t+"_"+n:t
return{getItem:function(e,t){null===t&&(t=i)
var n,o=localStorage.getItem(t),r=a.default.parseJSON(o)
return r&&r.hasOwnProperty(e)&&(n=r[e]),n},setItem:function(e,t,n){null===n&&(n=i)
var o=localStorage.getItem(n),r=a.default.parseJSON(o)||{}
r[e]=t,localStorage.setItem(n,JSON.stringify(r))},removeItem:function(e,t){null===t&&(t=i)
var n=localStorage.getItem(t),o=a.default.parseJSON(n)||{}
o&&(delete o[e],!function(e){for(var t in e)return!e.hasOwnProperty(t)
return!0}(o)?localStorage.setItem(t,JSON.stringify(o)):localStorage.removeItem(t))}}}.bind(void 0)},{"./common/dom":11,"./frame":14}],23:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var o=h(e("./obj/constants")),a=h(e("./obj/state")),i=h(e("./obj/user")),r=h(e("./utils/msg_promise")),s=h(e("./utils/msg_callback")),d=h(e("./utils/msg_handler")),u=h(e("./utils/common/dom")),l=h(e("./utils/frame")),f=h(e("./utils/message")),c=h(e("./utils/events")),p=(h(e("./utils/common/ajax")),h(e("./utils/push_frame"))),m=h(e("./helpers/omni/analytics")),v=h(e("./helpers/omni/transition"))
function h(e){return e&&e.__esModule?e:{default:e}}n.default=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(void 0,void 0)
var e=function(){var e=document,t=e.createElement("link")
t.href=l.default.getHost()+"/assets/widget/widget.css?t="+(new Date).getTime(),t.rel="stylesheet",e.getElementsByTagName("head")[0].appendChild(t)}
return{init:function(t){var n;-1!==["Chrome","Firefox","Safari","Edge","Trident"].indexOf(u.default.getAgent.name)&&(t&&t.token&&(t.referrer||(window.location.origin||(window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),t.referrer=btoa(window.location.origin)),void 0===t.open&&(t.open=!1),n=t,a.default.reset(),i.default.reset(),l.default.init({host:n.host.trim(),token:n.token.trim(),referrer:n.referrer,siteId:n.siteId}),a.default.openOnLoad(n.open),n.externalId&&(i.default.setExternalId(n.externalId),i.default.setRestoreId(n.restoreId)),n.tags&&n.tags.length&&a.default.setTags(n.tags),n.faqTags&&a.default.setFaqTags(n.faqTags),i.default.setProperties({firstName:n.firstName,lastName:n.lastName,email:n.email,phone:n.phone,phoneCountry:n.phoneCountryCode,locale:n.locale,meta:n.meta}),i.default.setConfig(n.config),n.onLoad&&c.default.subscribe("widget:loaded",n.onLoad),l.default.add(),f.default.subscribe(),e()))},destroy:function(){p.default.unload(),l.default.unload()},isOpen:function(){return a.default.isOpened()},isInitialized:function(){return!!l.default.getToken()},isLoaded:function(){return a.default.isLoaded()},on:function(e,t){c.default.subscribe(e,t)},off:function(e,t){c.default.unsubscribe(e,t)},open:function(e){e?d.default.subscribe("open_channel",e):d.default.subscribe("open_chat")},close:function(){d.default.subscribe("close_chat")},show:function(){d.default.subscribe("show_chat")},hide:function(){d.default.subscribe("hide_chat")},setTags:function(e){a.default.isLoaded()&&(e&&e.length?a.default.setTags(e):a.default.setTags([]),d.default.subscribe("set_tags",{tags:a.default.getTags(),force:!0}))},setFaqTags:function(e){a.default.isLoaded()&&(e?a.default.setFaqTags(e):a.default.setFaqTags({}),d.default.subscribe("set_faq_tags",{faqTags:a.default.getFaqTags(),force:!0}))},setExternalId:function(e,t){if(e){if(!(void 0===window.Promise||t&&"function"==typeof t))return r.default.send("set_external_id",{externalId:e})
s.default.send("set_external_id",{externalId:e},t)}},setConfig:function(e){var t=document.getElementById(o.default.frameDivId)
t&&e&&e.headerProperty&&(void 0!==e.headerProperty.direction&&(t.classList.remove("fc_l2r"),"ltr"===e.headerProperty.direction&&t.classList.add("fc_l2r")),void 0!==e.headerProperty.hideChatButton&&(t.classList.remove("fc_dn"),e.headerProperty.hideChatButton&&t.classList.add("fc_dn"))),d.default.subscribe("set_custom_config",e)},user:{get:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return r.default.send("get_user")
s.default.send("get_user",e)},isExists:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return r.default.send("user_exists")
s.default.send("user_exists",e)},update:function(e,t){if(e.firstName&&i.default.setFirstName(e.firstName),e.lastName&&i.default.setLastName(e.lastName),e.email&&i.default.setEmail(e.email),e.phone&&i.default.setPhone(e.phone),e.phoneCountry&&i.default.setPhoneCountry(e.phoneCountry),e.meta&&i.default.setUserMeta(e.meta),!(void 0===window.Promise||t&&"function"==typeof t))return r.default.send("update_user",e)
s.default.send("update_user",e,t)},setProperties:function(e,t){var n={}
if(e.firstName&&(n.firstName=e.firstName,e.firstName=void 0),e.lastName&&(n.lastName=e.lastName,e.lastName=void 0),e.email&&(n.email=e.email,e.email=void 0),e.phone&&(n.phone=e.phone,e.phone=void 0),e.phoneCountryCode&&(n.phoneCountry=e.phoneCountryCode,e.phoneCountryCode=void 0),e.locale&&(n.locale=e.locale,e.locale=void 0),n.meta=e,i.default.setProperties(n),!(void 0===window.Promise||t&&"function"==typeof t))return r.default.send("set_user_properties",n)
s.default.send("set_user_properties",n,t)},setFirstName:function(e,t){if(!t)return this.setProperties({firstName:e})
this.setProperties({firstName:e},t)},setLastName:function(e,t){if(!t)return this.setProperties({lastName:e})
this.setProperties({lastName:e},t)},setEmail:function(e,t){if(!t)return this.setProperties({email:e})
this.setProperties({email:e},t)},setPhone:function(e,t){if(!t)return this.setProperties({phone:e})
this.setProperties({phone:e},t)},setPhoneCountryCode:function(e,t){if(!t)return this.setProperties({phoneCountryCode:e})
this.setProperties({phoneCountryCode:e},t)},setMeta:function(e,t){if(!t)return this.setProperties(e)
this.setProperties(e,t)},setLocale:function(e,t){if(!t)return this.setProperties({locale:e})
this.setProperties({locale:e},t)},clear:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return r.default.send("reset_user")
s.default.send("reset_user",e)},create:function(e,t){if("function"==typeof e&&(t=e,e=null),!(void 0===window.Promise||t&&"function"==typeof t))return r.default.send("create_user",e)
s.default.send("create_user",e,t)}},track:m.default.track,trackPage:function(e,t){v.default.track({newValue:e,title:t,force:!0})}}}.bind(void 0)()},{"./helpers/omni/analytics":4,"./helpers/omni/transition":5,"./obj/constants":7,"./obj/state":8,"./obj/user":9,"./utils/common/ajax":10,"./utils/common/dom":11,"./utils/events":13,"./utils/frame":14,"./utils/message":15,"./utils/msg_callback":16,"./utils/msg_handler":17,"./utils/msg_promise":19,"./utils/push_frame":20}]},{},[6])