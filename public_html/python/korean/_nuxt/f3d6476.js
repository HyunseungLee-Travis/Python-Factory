(window.webpackJsonp=window.webpackJsonp||[]).push([[34,7,9,10],{347:function(t,e,r){"use strict";r.r(e);var n={props:["title","num"],data:function(){return{count:0}},methods:{toEnglish:function(){window.location="https://coding-insight.com/python/english"+("/"==$nuxt.$route.path?"/python":$nuxt.$route.path)+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},o=r(63),c=r(171),l=r.n(c),h=r(338),d=r(339),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("hr"),t._v(" "),r("br"),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),r("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.toEnglish}},[t._v("\n    English"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("h1",{staticClass:"display-6"},[r("span",[t._v(t._s(t.title))]),r("br",{attrs:{id:"lbbr"}}),r("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),r("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),r("br"),t._v(" "),r("hr")],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a,VIcon:d.a})},348:function(t,e,r){"use strict";r.r(e);var n={},o=r(63),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},349:function(t,e,r){"use strict";r.r(e);var n={props:["flink","slink"]},o=r(63),c=r(171),l=r.n(c),h=r(338),d=r(339),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[r("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),r("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a,VIcon:d.a})},350:function(t,e,r){"use strict";r.d(e,"a",(function(){return x})),r.d(e,"b",(function(){return S}));r(43),r(4),r(33),r(49),r(36),r(12),r(50),r(58),r(37),r(17),r(25),r(14),r(26);var n=r(3),o=r(9),c=(r(18),r(59),r(83),r(16),r(32),r(5));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var f=/;(?![^(]*\))/g,m=/:(.*)/;function y(style){var t,e={},r=d(style.split(f));try{for(r.s();!(t=r.n()).done;){var n=t.value.split(m),l=Object(o.a)(n,2),h=l[0],v=l[1];(h=h.trim())&&("string"==typeof v&&(v=v.trim()),e[Object(c.c)(h)]=v)}}catch(t){r.e(t)}finally{r.f()}return e}function x(){for(var t,e={},i=arguments.length;i--;)for(var r=0,n=Object.keys(arguments[i]);r<n.length;r++)switch(t=n[r]){case"class":case"directives":arguments[i][t]&&(e[t]=S(e[t],arguments[i][t]));break;case"style":arguments[i][t]&&(e[t]=_(e[t],arguments[i][t]));break;case"staticClass":if(!arguments[i][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":arguments[i][t]&&(e[t]=w(e[t],arguments[i][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;e[t]||(e[t]={}),e[t]=h(h({},arguments[i][t]),e[t]);break;default:e[t]||(e[t]=arguments[i][t])}return e}function _(t,source){return t?source?(t=Object(c.F)("string"==typeof t?y(t):t)).concat("string"==typeof source?y(source):source):t:source}function S(t,source){return source?t&&t?Object(c.F)(t).concat(source):source:t}function w(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},i=2;i--;){var e=i<0||arguments.length<=i?void 0:arguments[i];for(var r in e)e[r]&&(t[r]?t[r]=[].concat(e[r],t[r]):t[r]=e[r])}return t}},351:function(t,e,r){var content=r(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("1cdf85c7",content,!0,{sourceMap:!1})},352:function(t,e,r){var n=r(56)(!1);n.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=n},353:function(t,e,r){var content=r(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("2fba213c",content,!0,{sourceMap:!1})},354:function(t,e,r){var n=r(56)(!1);n.push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=n},355:function(t,e,r){"use strict";var n=r(15),o=(r(64),r(73),r(173),r(72),r(71),r(351),r(172)),c=(r(353),r(174)),l=r(82),h=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),d=r(108),v=r(350),f=r(19),m="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(l.a)(h,d.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!m||r||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(f.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/n):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(r,e)};r()},genContent:function(){var content=h.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=h.options.render.call(this,t),data=Object(v.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:m?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},593:function(t,e,r){"use strict";r.r(e);var n=r(63),o=r(171),c=r.n(o),l=r(355),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("br"),t._v(" "),r("div",{staticClass:"img-div",staticStyle:{display:"flex"}},[r("div",{staticClass:"mx-auto"},[r("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"data:image/png;base64,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"}})],1),t._v(" "),t._m(0)]),t._v(" "),r("br"),r("br"),t._v(" "),r("Header",{attrs:{num:"66",title:"데코레이터"}}),t._v(" "),r("QuadSpace"),t._v(" "),t._m(1),t._v(" "),r("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/867aac4aa9",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),r("QuadSpace"),t._v(" "),t._m(2),t._v(" "),r("QuadSpace"),t._v(" "),t._m(3),t._v(" "),r("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/659cf1cdb5",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),r("QuadSpace"),t._v(" "),r("BeforeNextButton",{attrs:{flink:"zlib",slink:"mydecorator"}}),t._v(" "),r("QuadSpace")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto"},[r("p",[t._v("\n        데코레이터는 한국어로 번역하면 '장식하는 물체'입니다."),r("br"),r("br"),t._v("\n\n        하지만 파이썬에서는 조금 다른 개념입니다."),r("br"),r("br"),t._v("\n\n        데코레이터는 파이썬 함수를 장식하는 또 다른 함수로\n        "),r("mark",[t._v("함수에 추가 기능을 더합니다")]),t._v(".\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h1",[t._v("데코레이터 예시")]),t._v(" "),r("p",[t._v("\n        어떤 수의 제곱근을 계산하는 함수를 만들어 보겠습니다."),r("br"),r("br"),t._v("\n\n        밑에 있는 함수에 4를 입력하면 2가 출력이 됩니다."),r("br"),r("br"),t._v("\n\n        하지만, 만일 a 값이 0보다 작다면 어떻게 대처를 할 수 있을까요?"),r("br"),r("br"),t._v("\n\n        조건문을 사용한다면 가능하겠지만 매우 복잡해집니다. 이 상황에서\n        데코레이터를 사용할 수 있습니다."),r("br"),r("br"),t._v("\n\n        이제 우리가 원하는 값을 반환하는 함수를 만들겠습니다. 입력을 사용하여\n        사용자가 지정한 값을 반환하는 것도 가능하지만 이 예시에서는 쉽게\n        설명하기 위하여 -4를 돌려주는 함수를 만들겠습니다."),r("br"),r("br"),t._v(" "),r("code",[t._v("\n          def returnVal():"),r("br"),t._v("\n            return -4\n        ")]),t._v("\n\n        위의 함수는 데코레이터의 예시입니다."),r("br"),r("br"),t._v("\n\n        먼저, 데코레이터 함수를 만들기 위하여 메인 함수를 매개변수 안에\n        만듭니다. 이 mainFunction은 어떤 다른 함수에서 돌려주는\n        값(squreRootOf에서는 a의 제곱근)입니다."),r("br"),r("br"),t._v("\n\n        함수 안에 또 다른 함수를 만들어서 func 변수 안에 저장하고 새로운 값인\n        abs() 함수를 사용하여 새로운 값을 돌려줍니다."),r("br"),r("br"),t._v("\n\n        밑에 있는 예시를 확인하세요. 하지만 이렇게 하면 많이 복잡합니다.\n        그래서 파이썬에는 더 쉬운 방법이 있습니다.\n      ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h1",[t._v("데코레이터 사용 방법")]),t._v(" "),r("p",[t._v("\n        데코레이터를 사용하기 위하여 returnVal() 함수를 선언하기 바로 전에\n        다음과 같은 코드를 붙여넣습니다."),r("br"),r("br"),t._v(" "),r("code",[t._v("\n          @minusDecorator"),r("br"),t._v("\n          def returnVal():return -4\n        ")]),t._v("\n\n        위 코드의 첫 번째 매개변수는 함수이지만 @를 하면 바로 다음에 나오는\n        코드를 실행합니다."),r("br"),r("br"),t._v("\n\n        returnVal()에서 돌려주는 절댓값을 계산하기 위하여 쉽게 returnVal()\n        함수만 사용하면 됩니다."),r("br"),r("br"),t._v("\n\n        원래는 minusDecorator(returnVal())을 사용하여 절댓값을 계산하지만 @를\n        사용하면 바로 returnVal()을 실행해도 데코레이터에 있는 함수가 실행되어\n        절댓값을 출력할 수 있습니다.\n      ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h1",[t._v("2개 이상 데코레이터")]),t._v(" "),r("p",[t._v("\n        데코레이터를 2개 이상 사용하기 위하여 @minusDecorator 밑에 또 다른\n        데코레이터 코드를 넣고 그다음에 함수를 넣을 수 있습니다.\n      ")])])])}],!1,null,null,null);e.default=component.exports;c()(component,{Header:r(347).default,QuadSpace:r(348).default,BeforeNextButton:r(349).default}),c()(component,{VImg:l.a})}}]);