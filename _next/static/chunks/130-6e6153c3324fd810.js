(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[130],{2962:function(e,t,r){"use strict";r.d(t,{PB:function(){return m}});var o=r(7294),a=r(9008),n=r.n(a);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}var p=["keyOverride"],s=["crossOrigin"],c={templateTitle:"",noindex:!1,nofollow:!1,norobots:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},d=function(e,t,r){void 0===t&&(t=[]);var a=void 0===r?{}:r,n=a.defaultWidth,i=a.defaultHeight;return t.reduce(function(t,r,a){return t.push(o.createElement("meta",{key:"og:"+e+":0"+a,property:"og:"+e,content:r.url})),r.alt&&t.push(o.createElement("meta",{key:"og:"+e+":alt0"+a,property:"og:"+e+":alt",content:r.alt})),r.secureUrl&&t.push(o.createElement("meta",{key:"og:"+e+":secure_url0"+a,property:"og:"+e+":secure_url",content:r.secureUrl.toString()})),r.type&&t.push(o.createElement("meta",{key:"og:"+e+":type0"+a,property:"og:"+e+":type",content:r.type.toString()})),r.width?t.push(o.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:r.width.toString()})):n&&t.push(o.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:n.toString()})),r.height?t.push(o.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:r.height.toString()})):i&&t.push(o.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:i.toString()})),t},[])},h=function(e){var t,r,a,n,h,u=[];e.titleTemplate&&(c.templateTitle=e.titleTemplate);var m="";e.title?(m=e.title,c.templateTitle&&(m=c.templateTitle.replace(/%s/g,function(){return m}))):e.defaultTitle&&(m=e.defaultTitle),m&&u.push(o.createElement("title",{key:"title"},m));var f=void 0===e.noindex?c.noindex||e.dangerouslySetAllPagesToNoIndex:e.noindex,g=void 0===e.nofollow?c.nofollow||e.dangerouslySetAllPagesToNoFollow:e.nofollow,y=e.norobots||c.norobots,v="";if(e.robotsProps){var b=e.robotsProps,k=b.nosnippet,G=b.maxSnippet,E=b.maxImagePreview,w=b.maxVideoPreview,_=b.noarchive,x=b.noimageindex,O=b.notranslate,T=b.unavailableAfter;v=(k?",nosnippet":"")+(G?",max-snippet:"+G:"")+(E?",max-image-preview:"+E:"")+(_?",noarchive":"")+(T?",unavailable_after:"+T:"")+(x?",noimageindex":"")+(w?",max-video-preview:"+w:"")+(O?",notranslate":"")}if(e.norobots&&(c.norobots=!0),f||g?(e.dangerouslySetAllPagesToNoIndex&&(c.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(c.nofollow=!0),u.push(o.createElement("meta",{key:"robots",name:"robots",content:(f?"noindex":"index")+","+(g?"nofollow":"follow")+v}))):(!y||v)&&u.push(o.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+v})),e.description&&u.push(o.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&u.push(o.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&u.push(o.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){u.push(o.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&u.push(o.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&u.push(o.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&u.push(o.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&u.push(o.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||m)&&u.push(o.createElement("meta",{key:"og:title",property:"og:title",content:(null==(n=e.openGraph)?void 0:n.title)||m})),(null!=(r=e.openGraph)&&r.description||e.description)&&u.push(o.createElement("meta",{key:"og:description",property:"og:description",content:(null==(h=e.openGraph)?void 0:h.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&u.push(o.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var S=e.openGraph.type.toLowerCase();u.push(o.createElement("meta",{key:"og:type",property:"og:type",content:S})),"profile"===S&&e.openGraph.profile?(e.openGraph.profile.firstName&&u.push(o.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&u.push(o.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&u.push(o.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&u.push(o.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===S&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){u.push(o.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&u.push(o.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&u.push(o.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){u.push(o.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===S&&e.openGraph.article?(e.openGraph.article.publishedTime&&u.push(o.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&u.push(o.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&u.push(o.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){u.push(o.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&u.push(o.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){u.push(o.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===S||"video.episode"===S||"video.tv_show"===S||"video.other"===S)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&u.push(o.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&u.push(o.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){u.push(o.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){u.push(o.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&u.push(o.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&u.push(o.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){u.push(o.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&u.push(o.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(c.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(c.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&u.push.apply(u,d("image",e.openGraph.images,{defaultWidth:c.defaultOpenGraphImageWidth,defaultHeight:c.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(c.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(c.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&u.push.apply(u,d("video",e.openGraph.videos,{defaultWidth:c.defaultOpenGraphVideoWidth,defaultHeight:c.defaultOpenGraphVideoHeight})),e.openGraph.audio&&u.push.apply(u,d("audio",e.openGraph.audio)),e.openGraph.locale&&u.push(o.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&u.push(o.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&u.push(o.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,r,a=e.keyOverride,n=l(e,p);u.push(o.createElement("meta",i({key:"meta:"+(null!=(t=null!=(r=null!=a?a:n.name)?r:n.property)?t:n.httpEquiv)},n)))}),null!=(a=e.additionalLinkTags)&&a.length&&e.additionalLinkTags.forEach(function(e){var t,r=e.crossOrigin,a=l(e,s);u.push(o.createElement("link",i({key:"link"+(null!=(t=a.keyOverride)?t:a.href)+a.rel},a,{crossOrigin:"anonymous"===r||"use-credentials"===r||""===r?r:void 0})))}),u},u=function(e){return o.createElement(n(),null,h(e))},m=function(e){var t=e.title,r=e.themeColor,a=e.noindex,n=e.nofollow,i=e.robotsProps,l=e.description,p=e.canonical,s=e.openGraph,c=e.facebook,d=e.twitter,h=e.additionalMetaTags,m=e.titleTemplate,f=e.defaultTitle,g=e.mobileAlternate,y=e.languageAlternates,v=e.additionalLinkTags;return o.createElement(o.Fragment,null,o.createElement(u,{title:t,themeColor:r,noindex:a,nofollow:n,robotsProps:i,description:l,canonical:p,facebook:c,openGraph:s,additionalMetaTags:h,twitter:d,titleTemplate:m,defaultTitle:f,mobileAlternate:g,languageAlternates:y,additionalLinkTags:v}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let o=r(8754),a=r(1757),n=a._(r(7294)),i=o._(r(2636)),l=r(7757),p=r(3735),s=r(3341);r(4210);let c=o._(r(7746)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function u(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,o,a,n,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&n(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;o.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(e)}})}function f(e){let[t,r]=n.version.split("."),o=parseInt(t,10),a=parseInt(r,10);return o>18||18===o&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,n.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:o,widthInt:a,qualityInt:i,className:l,imgStyle:p,blurStyle:s,isLazy:c,fetchPriority:d,fill:h,placeholder:u,loading:g,srcString:y,config:v,unoptimized:b,loader:k,onLoadRef:G,onLoadingCompleteRef:E,setBlurComplete:w,setShowAltText:_,onLoad:x,onError:O,...T}=e;return g=c?"lazy":g,n.default.createElement("img",{...T,...f(d),loading:g,width:a,height:o,decoding:"async","data-nimg":h?"fill":"1",className:l,style:{...p,...s},...r,ref:(0,n.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&m(e,y,u,G,E,w,b))},[y,u,G,E,w,O,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,y,u,G,E,w,b)},onError:e=>{_(!0),"blur"===u&&w(!0),O&&O(e)}})}),y=(0,n.forwardRef)((e,t)=>{var r;let o,a,{src:m,sizes:y,unoptimized:v=!1,priority:b=!1,loading:k,className:G,quality:E,width:w,height:_,fill:x,style:O,onLoad:T,onLoadingComplete:S,placeholder:j="empty",blurDataURL:P,fetchPriority:C,layout:I,objectFit:A,objectPosition:N,lazyBoundary:W,lazyRoot:M,...z}=e,H=(0,n.useContext)(s.ImageConfigContext),R=(0,n.useMemo)(()=>{let e=d||H||p.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[H]),V=z.loader||c.default;delete z.loader;let D="__next_img_default"in V;if(D){if("custom"===R.loader)throw Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=V;V=t=>{let{config:r,...o}=t;return e(o)}}if(I){"fill"===I&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(O={...O,...e});let t={responsive:"100vw",fill:"100vw"}[I];t&&!y&&(y=t)}let L="",F=u(w),B=u(_);if("object"==typeof(r=m)&&(h(r)||void 0!==r.src)){let e=h(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(o=e.blurWidth,a=e.blurHeight,P=P||e.blurDataURL,L=e.src,!x){if(F||B){if(F&&!B){let t=F/e.width;B=Math.round(e.height*t)}else if(!F&&B){let t=B/e.height;F=Math.round(e.width*t)}}else F=e.width,B=e.height}}let q=!b&&("lazy"===k||void 0===k);(!(m="string"==typeof m?m:L)||m.startsWith("data:")||m.startsWith("blob:"))&&(v=!0,q=!1),R.unoptimized&&(v=!0),D&&m.endsWith(".svg")&&!R.dangerouslyAllowSVG&&(v=!0),b&&(C="high");let[U,J]=(0,n.useState)(!1),[Y,$]=(0,n.useState)(!1),K=u(E),Q=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:N}:{},Y?{}:{color:"transparent"},O),X="blur"===j&&P&&!U?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:F,heightInt:B,blurWidth:o,blurHeight:a,blurDataURL:P,objectFit:Q.objectFit})+'")'}:{},Z=function(e){let{config:t,src:r,unoptimized:o,width:a,quality:n,sizes:i,loader:l}=e;if(o)return{src:r,srcSet:void 0,sizes:void 0};let{widths:p,kind:s}=function(e,t,r){let{deviceSizes:o,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(r);o)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:o,kind:"w"};let n=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:n,kind:"x"}}(t,a,i),c=p.length-1;return{sizes:i||"w"!==s?i:"100vw",srcSet:p.map((e,o)=>l({config:t,src:r,quality:n,width:e})+" "+("w"===s?e:o+1)+s).join(", "),src:l({config:t,src:r,quality:n,width:p[c]})}}({config:R,src:m,unoptimized:v,width:F,quality:K,sizes:y,loader:V}),ee=m,et=(0,n.useRef)(T);(0,n.useEffect)(()=>{et.current=T},[T]);let er=(0,n.useRef)(S);(0,n.useEffect)(()=>{er.current=S},[S]);let eo={isLazy:q,imgAttributes:Z,heightInt:B,widthInt:F,qualityInt:K,className:G,imgStyle:Q,blurStyle:X,loading:k,config:R,fetchPriority:C,fill:x,unoptimized:v,placeholder:j,loader:V,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:J,setShowAltText:$,...z};return n.default.createElement(n.default.Fragment,null,n.default.createElement(g,{...eo,ref:t}),b?n.default.createElement(i.default,null,n.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:z.crossOrigin,referrerPolicy:z.referrerPolicy,...f(C)})):null)}),v=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:o,blurHeight:a,blurDataURL:n,objectFit:i}=e,l=o||t,p=a||r,s=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&p?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+p+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(o&&a?"1":"20")+"'/%3E"+s+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+n+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:o,quality:a}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+o+"&q="+(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}}),r.__next_img_default=!0;let o=r},9008:function(e,t,r){e.exports=r(2636)},5675:function(e,t,r){e.exports=r(3740)}}]);