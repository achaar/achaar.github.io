/*! For license information please see LICENSES */
webpackJsonp([4],{"/TYz":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("sXPf"),n=i("rGQh"),o=!1;var s=function(t){o||i("D333")},r=i("VU/8")(e.a,n.a,!1,s,"data-v-2a183b29",null);r.options.__file="pages/index.vue",a.default=r.exports},"1o+7":function(t,a,i){(t.exports=i("FZ+f")(!1)).push([t.i,"/*!\n * VueEasyPieChart v1.0.2 (https://github.com/dotnetage/vue-easy-pie-chart)\n * (c) 2016 Ray\n * Released under the MIT License.\n */.vue-easy-pie-chart[data-v-8087077e]{position:relative;text-align:center}.vue-easy-pie-chart .inner-text[data-v-8087077e]{position:absolute;top:0;left:0;right:0;bottom:0;text-align:center;display:block}",""])},CFSj:function(t,a){t.exports=function(t){var a={};function i(e){if(a[e])return a[e].exports;var n=a[e]={exports:{},id:e,loaded:!1};return t[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}return i.m=t,i.c=a,i.p="/",i(0)}([function(t,a,i){var e,n;i(3),e=i(1);var o=i(4);n=e=e||{},"object"!=typeof e.default&&"function"!=typeof e.default||(n=e=e.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-8087077e",t.exports=e},function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=function(t){return t&&t.__esModule?t:{default:t}}(i(2));a.default={name:"VueEasyPieChat",data:function(){return{pieChart:void 0}},props:{barColor:{type:String,default:"#ef1e25"},fontSize:{type:String,default:"20px"},trackColor:{type:String,default:"#f2f2f2"},scaleColor:{type:String,default:"#dfe0e0"},scaleLength:{type:Number,default:5},lineCap:{type:String,default:"round"},lineWidth:{type:Number,default:3},size:{type:Number,default:110},rotate:{type:Number,default:0},duration:{type:Number,default:1e3},animated:{type:Boolean,default:!0},percent:{type:Number,default:0}},watch:{percent:function(t){this.update(t)},duration:function(t){this.pieChart.options.animate.duration=t,this.update(this.percent)},animated:function(t){this.pieChart.options.animate.enabled=t,this.update(this.percent)}},methods:{update:function(t){this.pieChart.update(t)},getOptions:function(){}},mounted:function(){var t=this,a=this;this.pieChart=new e.default(this.$refs.chart,{barColor:this.barColor,trackColor:this.trackColor,scaleColor:this.scaleColor,scaleLength:this.scaleLength,lineCap:this.lineCap,lineWidth:this.lineWidth,size:this.size,rotate:this.rotate,animate:{duration:this.duration,enabled:this.animated},onStart:function(){a.$emit("start")},onStop:function(){a.$emit("stop")},onStep:function(){a.$emit("step")}});["barColor","trackColor","scaleColor","scaleLength","lineCap","lineWidth","size","rotate"].forEach(function(a){t.$watch(a,function(i){t.pieChart.options[a]=i,t.update(t.percent)})})}}},function(t,a,i){var e;!function(i,n){void 0===(e=function(){return i.EasyPieChart=n()}.apply(a,[]))||(t.exports=e)}(this,function(){var t=function(t,a){var i,e=document.createElement("canvas");t.appendChild(e),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(e);var n=e.getContext("2d");e.width=e.height=a.size;var o=1;window.devicePixelRatio>1&&(o=window.devicePixelRatio,e.style.width=e.style.height=[a.size,"px"].join(""),e.width=e.height=a.size*o,n.scale(o,o)),n.translate(a.size/2,a.size/2),n.rotate((a.rotate/180-.5)*Math.PI);var s=(a.size-a.lineWidth)/2;a.scaleColor&&a.scaleLength&&(s-=a.scaleLength+2),Date.now=Date.now||function(){return+new Date};var r=function(t,a,i){var e=(i=Math.min(Math.max(-1,i||0),1))<=0;n.beginPath(),n.arc(0,0,s,0,2*Math.PI*i,e),n.strokeStyle=t,n.lineWidth=a,n.stroke()},l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},c=function(){a.scaleColor&&function(){var t,i;n.lineWidth=1,n.fillStyle=a.scaleColor,n.save();for(var e=24;e>0;--e)e%6==0?(i=a.scaleLength,t=0):(i=.6*a.scaleLength,t=a.scaleLength-i),n.fillRect(-a.size/2+t,0,i,1),n.rotate(Math.PI/12);n.restore()}(),a.trackColor&&r(a.trackColor,a.trackWidth||a.lineWidth,1)};this.getCanvas=function(){return e},this.getCtx=function(){return n},this.clear=function(){n.clearRect(a.size/-2,a.size/-2,a.size,a.size)},this.draw=function(t){var e;a.scaleColor||a.trackColor?n.getImageData&&n.putImageData?i?n.putImageData(i,0,0):(c(),i=n.getImageData(0,0,a.size*o,a.size*o)):(this.clear(),c()):this.clear(),n.lineCap=a.lineCap,e="function"==typeof a.barColor?a.barColor(t):a.barColor,r(e,a.lineWidth,t/100)}.bind(this),this.animate=function(t,i){var e=Date.now();a.onStart(t,i);var n=function(){var o=Math.min(Date.now()-e,a.animate.duration),s=a.easing(this,o,t,i-t,a.animate.duration);this.draw(s),a.onStep(t,i,s),o>=a.animate.duration?a.onStop(t,i):l(n)}.bind(this);l(n)}.bind(this)};return function(a,i){var e={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(t,a,i,e,n){return(a/=n/2)<1?e/2*a*a+i:-e/2*(--a*(a-2)-1)+i},onStart:function(t,a){},onStep:function(t,a,i){},onStop:function(t,a){}};e.renderer=t;var n={},o=0,s=function(){for(var t in this.el=a,this.options=n,e)e.hasOwnProperty(t)&&(n[t]=i&&void 0!==i[t]?i[t]:e[t],"function"==typeof n[t]&&(n[t]=n[t].bind(this)));"string"==typeof n.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[n.easing])?n.easing=jQuery.easing[n.easing]:n.easing=e.easing,"number"==typeof n.animate&&(n.animate={duration:n.animate,enabled:!0}),"boolean"!=typeof n.animate||n.animate||(n.animate={duration:1e3,enabled:n.animate}),this.renderer=new n.renderer(a,n),this.renderer.draw(o),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(t){return t=parseFloat(t),n.animate.enabled?this.renderer.animate(o,t):this.renderer.draw(t),o=t,this}.bind(this),this.disableAnimation=function(){return n.animate.enabled=!1,this},this.enableAnimation=function(){return n.animate.enabled=!0,this},s()}})},function(t,a){},function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{ref:"chart",staticClass:"vue-easy-pie-chart",attrs:{"data-percent":this.percent}},[a("div",{staticClass:"inner-text",style:{fontSize:this.fontSize,lineHeight:this.size+"px"}},[this._t("default",[this._v("\n      "+this._s(this.percent)+"%\n    ")])],2)])},staticRenderFns:[]}}])},D333:function(t,a,i){var e=i("mU2d");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("703c52a6",e,!1,{sourceMap:!1})},mU2d:function(t,a,i){(t.exports=i("FZ+f")(!1)).push([t.i,'.btn[data-v-2a183b29],a.btn[data-v-2a183b29]{line-height:1.5;background:#008fa1;background-clip:padding-box;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.4);box-shadow:0 2px 4px 0 rgba(0,0,0,.4);text-transform:uppercase;font-weight:500}.btn[data-v-2a183b29]:hover,a.btn[data-v-2a183b29]:hover{color:#fff;background:#00a5bb}.header[data-v-2a183b29]{background:#00bcd4;color:#fff}.header a[data-v-2a183b29]{color:#fff}.header .top-bar[data-v-2a183b29]{position:relative;padding-top:15px;padding-bottom:120px}.header .social[data-v-2a183b29]{margin-bottom:0}.header .social a[data-v-2a183b29]{color:hsla(0,0%,100%,.8);display:inline-block;text-align:center;width:32px;height:32px;border-radius:50%;background-clip:padding-box;padding-top:2px;font-size:16px;border:2px solid hsla(0,0%,100%,.8);margin:0 5px}.header .social a[data-v-2a183b29]:hover{color:#fff;border-color:#fff}.header .actions[data-v-2a183b29]{position:absolute;right:15px;top:15px}.header .actions .fa[data-v-2a183b29]{margin-right:5px}.header .actions a[data-v-2a183b29]{margin-right:10px;color:#fff}.header .actions a[data-v-2a183b29]:last-child{margin-right:0}.header .profile-image[data-v-2a183b29]{position:absolute;width:160px;height:160px;left:50%;margin:-160px -80px;border:2px solid;border-radius:160px;-o-object-fit:contain;object-fit:contain}.header .name[data-v-2a183b29]{font-size:48px;margin-bottom:15px;letter-spacing:.5px}.header .title[data-v-2a183b29]{font-size:28px;font-weight:300;color:hsla(0,0%,100%,.8);margin-bottom:30px}.header .intro[data-v-2a183b29]{background:#00a5bb;padding-top:90px;padding-bottom:60px;position:relative;font-size:16px}.header .profile[data-v-2a183b29]{max-width:800px;margin:0 auto}.header .contact-info[data-v-2a183b29]{background:#008fa1;padding-top:30px;padding-bottom:30px;font-size:16px}.header .contact-info ul[data-v-2a183b29]{margin-bottom:0}.header .contact-info li[data-v-2a183b29]{margin-right:30px;color:hsla(0,0%,100%,.8)}.header .contact-info li a[data-v-2a183b29]{color:hsla(0,0%,100%,.8)}.header .contact-info li a[data-v-2a183b29]:hover{color:#fff}.header .contact-info li[data-v-2a183b29]:last-child{margin-right:0}.header .contact-info li .fa[data-v-2a183b29]{margin-right:10px}.page-nav-space-holder[data-v-2a183b29]{height:60px;position:relative}.page-nav-wrapper[data-v-2a183b29]{background:#007888;padding-top:20px;padding-bottom:20px;position:absolute;width:100%;left:0;-webkit-box-shadow:0 4px 12px rgba(0,0,0,.2);box-shadow:0 4px 12px rgba(0,0,0,.2)}.page-nav-wrapper.fixed[data-v-2a183b29]{position:fixed;top:0;left:0;width:100%;z-index:100;background:#00bcd4}.page-nav-wrapper a[data-v-2a183b29]{color:hsla(0,0%,100%,.6);text-decoration:none;font-weight:500}.page-nav-wrapper .page-nav[data-v-2a183b29]{margin:0 auto;display:inline-block}.page-nav-wrapper .page-nav li[data-v-2a183b29]{margin-right:30px;display:inline-block;background:none}.page-nav-wrapper .page-nav li[data-v-2a183b29]:active,.page-nav-wrapper .page-nav li[data-v-2a183b29]:hover{background:none}.page-nav-wrapper .page-nav li.active a[data-v-2a183b29]{color:#fff;background:none}.page-nav-wrapper .page-nav li a[data-v-2a183b29]{color:hsla(0,0%,100%,.6);padding:inherit}.page-nav-wrapper .page-nav li a[data-v-2a183b29]:hover{color:#fff}.page-nav-wrapper .page-nav li a[data-v-2a183b29]:active,.page-nav-wrapper .page-nav li a[data-v-2a183b29]:focus,.page-nav-wrapper .page-nav li a[data-v-2a183b29]:hover{background:none}.page-nav-wrapper .page-nav li[data-v-2a183b29]:last-child{margin-right:0}.wrapper[data-v-2a183b29]{padding-top:60px;padding-bottom:60px}.section[data-v-2a183b29]{-webkit-box-shadow:0 1px 4px 0 rgba(0,0,0,.14);box-shadow:0 1px 4px 0 rgba(0,0,0,.14);padding:45px;background:#fff;margin-bottom:45px;border-radius:2px;background-clip:padding-box}.section[data-v-2a183b29]:last-child{margin-bottom:0}.section-title[data-v-2a183b29]{margin-top:0;margin-bottom:45px;font-size:24px;text-align:center}.timeline[data-v-2a183b29]{border-left:3px solid #00bcd4;border-bottom-right-radius:2px;border-top-right-radius:2px;position:relative;padding:0 30px;margin-left:280px}.timeline .item[data-v-2a183b29]{position:relative;margin-bottom:45px}.timeline .item[data-v-2a183b29]:last-child{margin-bottom:0}.timeline .item[data-v-2a183b29]:before{content:"";position:absolute;left:-43px;top:0;display:inline-block;width:22px;height:22px;border-radius:50%;background-clip:padding-box;background:#fff;border:3px solid #00bcd4}.timeline .item[data-v-2a183b29]:after{content:"";position:absolute;left:-37px;top:6px;display:inline-block;width:10px;height:10px;border-radius:50%;background-clip:padding-box;background:#00bcd4;z-index:10}.timeline .work-place[data-v-2a183b29]{position:relative}.timeline .location[data-v-2a183b29]{position:absolute;right:0;top:2px;color:#8a8a8a}.timeline .location .fa[data-v-2a183b29]{margin-right:5px}.timeline .place[data-v-2a183b29]{margin-top:0;margin-bottom:15px;font-size:20px;font-weight:300}.timeline .job-meta[data-v-2a183b29]{position:absolute;left:-280px;top:0}.timeline .job-meta .title[data-v-2a183b29]{font-size:18px;color:#00bcd4}.timeline .job-meta .time[data-v-2a183b29]{color:#8a8a8a}.timeline .job-desc[data-v-2a183b29]{color:#666}.education-section .item[data-v-2a183b29]{margin-bottom:45px}.education-section .item-inner[data-v-2a183b29]{padding:0 30px}.education-section .degree[data-v-2a183b29]{font-size:18px;color:#00bcd4;margin-top:0;margin-bottom:0}.education-section .education-body[data-v-2a183b29]{font-weight:500;margin-bottom:0;font-size:16px;font-weight:300}.education-section .time[data-v-2a183b29]{color:#8a8a8a;margin-bottom:15px}.education-section .desc[data-v-2a183b29]{color:#666}.skills-section .subtitle[data-v-2a183b29]{font-size:18px;color:#8a8a8a;margin-top:0;margin-bottom:45px;font-weight:300}.skills-section .top-skills[data-v-2a183b29]{margin-bottom:60px}.skills-section .top-skills .item[data-v-2a183b29]{margin-bottom:45px}.skills-section .level[data-v-2a183b29]{color:#8a8a8a;margin-bottom:15px}.skills-section .desc[data-v-2a183b29]{color:#666}.skills-section .skill-tag[data-v-2a183b29]{-webkit-box-shadow:0 1px 4px 0 rgba(0,0,0,.14);box-shadow:0 1px 4px 0 rgba(0,0,0,.14);padding:6px 30px;display:inline-block;margin-right:10px;border:1px solid #f5f5f5;font-weight:500;margin-bottom:15px;font-size:16px}.chart-easy-pie[data-v-2a183b29]{positon:relative}.chart[data-v-2a183b29]{width:110px;height:110px;vertical-align:middle;position:relative;margin:0 auto;text-align:center;font-size:20px;font-weight:300;margin-bottom:30px}.chart span[data-v-2a183b29]{line-height:110px}.chart canvas[data-v-2a183b29]{position:absolute;left:0;top:0}.testimonials-section .testimonials-carousel[data-v-2a183b29]{max-width:800px;margin:0 auto}.testimonials-section .item[data-v-2a183b29]{padding-left:60px;margin-bottom:45px}.testimonials-section .quote[data-v-2a183b29]{border-left:none;padding:0;font-size:22px;color:#666;font-weight:300;position:relative}.testimonials-section .source .name[data-v-2a183b29]{font-size:16px}.testimonials-section .source .position[data-v-2a183b29]{color:#8a8a8a}.testimonials-section .fa-quote-left[data-v-2a183b29]{position:absolute;left:-60px;top:0;width:36px;height:36px;display:inline-block;background:#00bcd4;color:#fff;border-radius:50%;background-clip:padding-box;text-align:center;padding-top:10px;font-size:16px}.testimonials-section .carousel-indicators[data-v-2a183b29]{bottom:0;margin-bottom:0}.testimonials-section .carousel-indicators li[data-v-2a183b29]{background-color:#bdbdbd;border:none;width:10px;height:10px;margin:0;margin-right:5px}.testimonials-section .carousel-indicators li.active[data-v-2a183b29]{background-color:#00bcd4;width:10px;height:10px;margin:0;margin-right:5px}.portfolio-section .filters[data-v-2a183b29]{list-style:none;margin:0 auto;margin-bottom:60px;text-align:center;border-bottom:1px solid #e8e8e8}.portfolio-section .filters .type[data-v-2a183b29]{margin-right:30px;list-style:none;display:inline-block;padding:8px 15px;color:#8a8a8a;cursor:pointer;font-size:14px;text-transform:uppercase;font-weight:500}.portfolio-section .filters .type[data-v-2a183b29]:last-child{margin-right:0}.portfolio-section .filters .type.active[data-v-2a183b29]{color:#00bcd4;border-bottom:2px solid #00bcd4}.portfolio-section .item[data-v-2a183b29]{margin-bottom:30px}.portfolio-section .item-inner[data-v-2a183b29]{background:#00bcd4;color:#fff;border-radius:2px;background-clip:padding-box;position:relative;-webkit-box-shadow:0 1px 4px 0 rgba(0,0,0,.14);box-shadow:0 1px 4px 0 rgba(0,0,0,.14)}.portfolio-section .item-inner[data-v-2a183b29]:hover{background:#00c5de}.portfolio-section .item-inner:hover img[data-v-2a183b29]{-webkit-opacity:.9;-moz-opacity:.9;opacity:.9}.portfolio-section .item-inner .content[data-v-2a183b29]{padding:30px;padding-bottom:75px;position:relative}.portfolio-section .item-inner .content a[data-v-2a183b29]{color:#fff}.portfolio-section .item-inner .content .sub-title[data-v-2a183b29]{font-size:16px;margin-top:0;margin-bottom:5px}.portfolio-section .item-inner .content .meta[data-v-2a183b29]{color:hsla(0,0%,100%,.8);font-size:14px}.portfolio-section .item-inner .content .action[data-v-2a183b29]{position:absolute;bottom:30px;left:30px}.portfolio-section .item-inner .link-mask[data-v-2a183b29]{display:block;position:absolute;width:100%;height:100%;left:0;top:0}.contact-section .intro[data-v-2a183b29]{position:relative;padding:30px;padding-left:190px;font-size:16px;color:#666}.contact-section .intro .profile-image[data-v-2a183b29]{width:120px;height:120px;position:absolute;left:30px}.contact-section .intro p[data-v-2a183b29]{margin-bottom:15px}.contact-section .service-list[data-v-2a183b29]{margin-left:30px;margin-bottom:15px}.contact-section .service-list li[data-v-2a183b29]{margin-bottom:15px}.contact-section .service-list .fa[data-v-2a183b29]{color:#00bcd4}.contact-section .social[data-v-2a183b29]{margin-bottom:0}.contact-section .social li[data-v-2a183b29]{margin-right:10px}.contact-section .social li[data-v-2a183b29]:last-child{margin-right:0}.contact-section .social a[data-v-2a183b29]{display:inline-block;text-align:center;font-size:24px;color:#8a8a8a}.contact-section .social a[data-v-2a183b29]:hover{color:#00bcd4}.footer .container[data-v-2a183b29]{padding:30px;color:#8a8a8a;letter-spacing:.5px}.footer .container a[data-v-2a183b29]{color:#8a8a8a}@media (max-width:767px){.header .social[data-v-2a183b29]{margin:0 auto;text-align:center}.header .actions[data-v-2a183b29]{position:static;margin:0 auto;margin-bottom:30px;text-align:center}.header .actions .btn[data-v-2a183b29]{margin-bottom:15px;font-size:12px;display:inline-block;width:100%}.header .actions .btn[data-v-2a183b29]:last-child{margin-bottom:0}.header .name[data-v-2a183b29]{font-size:36px}.header .title[data-v-2a183b29]{font-size:22px}.header .contact-info li[data-v-2a183b29]{margin-right:0;margin-bottom:15px;font-size:14px;width:100%;display:inline-block}.header .contact-info li[data-v-2a183b29]:last-child{margin-bottom:0}.section[data-v-2a183b29]{padding:30px}.section-title[data-v-2a183b29]{font-size:20px}.timeline[data-v-2a183b29]{margin-left:0;padding-right:0}.timeline .place[data-v-2a183b29]{margin-bottom:5px}.timeline .job-meta[data-v-2a183b29]{position:static;margin-bottom:15px}.education-section .item[data-v-2a183b29]{padding:0}.portfolio-section .filters .type[data-v-2a183b29]{font-size:12px;margin-right:5px;padding:8px 5px}.portfolio-section .item-inner .content[data-v-2a183b29]{padding:15px}.portfolio-section .item-inner .content .sub-title[data-v-2a183b29]{font-size:14px;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.portfolio-section .item-inner .content .meta[data-v-2a183b29]{margin-bottom:30px;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.portfolio-section .item-inner .content .action[data-v-2a183b29]{position:static;font-size:12px}.contact-section .intro[data-v-2a183b29]{padding:0;text-align:center}.contact-section .intro .profile-image[data-v-2a183b29]{position:static;margin:0 auto;margin-bottom:30px;text-align:center}.contact-section .service-list[data-v-2a183b29]{margin-left:0}.contact-section .social[data-v-2a183b29]{margin:0 auto}}.list-inline li[data-v-2a183b29]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.img-responsive[data-v-2a183b29]{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}',""])},rGQh:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("header",{staticClass:"header"},[i("div",{staticClass:"top-bar container-fluid"},[i("div",{staticClass:"actions"},[t._m(0),i("nuxt-link",{staticClass:"btn",attrs:{to:"/blog"}},[i("i",{staticClass:"fa fa-pencil"}),t._v(" Blog & Projects")])],1),t._m(1)]),t._m(2),t._m(3),t._m(4)]),i("div",{staticClass:"wrapper container"},[t._m(5),t._m(6),i("section",{staticClass:"skills-section section text-center",attrs:{id:"skills-section"}},[i("h2",{staticClass:"section-title"},[t._v("Professional Skills")]),i("div",{staticClass:"top-skills"},[i("h3",{staticClass:"subtitle"},[t._v("Top Skills")]),i("div",{staticClass:"row"},[i("div",{staticClass:"item col-xs-12 col-sm-4"},[i("div",{staticClass:"item-inner"},[i("PieChart",{attrs:{"bar-color":"#008fa1","scale-color":"#fff",percent:100,size:160,"line-width":8}},[t._v("\n                            Python\n                          ")]),i("h4",{staticClass:"skill-name"},[t._v("Python & Scikit Learn")]),i("div",{staticClass:"level"},[t._v("Expert, 3 years")]),i("div",{staticClass:"desc"},[t._v("\n                              Prototyping ML and data analytics algorithms using scikit-learn, pandas and TensorFlow.\n                          ")])],1)]),i("div",{staticClass:"item col-xs-12 col-sm-4"},[i("div",{staticClass:"item-inner"},[i("PieChart",{attrs:{"bar-color":"#008fa1","scale-color":"#fff",percent:75,size:160,"line-width":8}},[t._v("\n                            Java\n                          ")]),i("h4",{staticClass:"skill-name"},[t._v("Java")]),i("div",{staticClass:"level"},[t._v("Advanced, 1 years")]),i("div",{staticClass:"desc"},[t._v("\n                              Learnt and mastered at work.\n                          ")])],1)]),i("div",{staticClass:"item col-xs-12 col-sm-4"},[i("div",{staticClass:"item-inner"},[i("PieChart",{attrs:{"bar-color":"#008fa1","scale-color":"#fff",percent:60,size:160,"line-width":8}},[t._v("\n                            C/C++\n                          ")]),i("h4",{staticClass:"skill-name"},[t._v("C/C++")]),i("div",{staticClass:"level"},[t._v("Advanced, 4 years")]),i("div",{staticClass:"desc"},[t._v("\n                              First language, saviour since 2011.\n                          ")])],1)])])]),t._m(7)]),t._m(8)]),t._m(9)])};e._withStripped=!0;var n={render:e,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"btn",attrs:{href:"mailto:somya.anand214@gmail.com"}},[a("i",{staticClass:"fa fa-paper-plane",attrs:{"aria-hidden":"true"}}),this._v(" Contact Me")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"social list-inline"},[a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/somya-anand-5ab974a3",target:"_blank",title:"LinkedIn Profile"}},[a("i",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}})])]),a("li",[a("a",{attrs:{href:"https://twitter.com/@anand_somya",target:"_blank",title:"@anand_somya on Twitter"}},[a("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})])]),a("li",[a("a",{attrs:{href:"https://github.com/aby0",target:"_blank",title:"aby0 on Github"}},[a("i",{staticClass:"fa fa-github-alt",attrs:{"aria-hidden":"true"}})])]),a("li",[a("a",{attrs:{href:"",target:"_blank",title:"somya.anand on Skype"}},[a("i",{staticClass:"fa fa-skype",attrs:{"aria-hidden":"true"}})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"intro"},[a("div",{staticClass:"container text-center"},[a("img",{staticClass:"profile-image",attrs:{src:"//github.com/aby0.png",alt:""}}),a("h1",{staticClass:"name"},[this._v("Somya Anand")]),a("div",{staticClass:"title"},[this._v("Software Engineer | Data Scientist")]),a("div",{staticClass:"profile"},[a("p",[this._v("I am currently working at Paytm as a software engineer (most of the time acting as a data scientist, making sense out of data). I completed my bachelors in Mathematics and Computing from IIT Guwahati. I am also a machine learning enthusiast, ardent game of thrones fan, an amateur writer, travel freak, full time data scientist at heart and part time dreamer.")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"contact-info"},[a("div",{staticClass:"container text-center"},[a("ul",{staticClass:"list-inline"},[a("li",{staticClass:"email"},[a("i",{staticClass:"fa fa-envelope"}),a("a",{attrs:{href:"mailto:somya.anand214@gmail.com"}},[this._v("somya.anand214@gmail.com")])]),a("li",[a("i",{staticClass:"fa fa-phone"}),a("a",{attrs:{href:"tel: +917896893086"}},[this._v("+91 78 96 893086")])]),a("li",{staticClass:"website"},[a("i",{staticClass:"fa fa-globe"}),a("a",{attrs:{href:"http://aby.ninja"}},[this._v("aby.ninja")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-nav-space-holder hidden-xs"},[a("div",{staticClass:"page-nav-wrapper text-center",attrs:{id:"page-nav-wrapper"}},[a("div",{staticClass:"container"},[a("ul",{staticClass:"nav page-nav list-inline",attrs:{id:"page-nav"}},[a("li",{},[a("a",{staticClass:"scrollto",attrs:{href:"#experiences"}},[this._v("Experiences")])]),a("li",[a("a",{staticClass:"scrollto",attrs:{href:"#education"}},[this._v("Education")])]),a("li",[a("a",{staticClass:"scrollto",attrs:{href:"#skills"}},[this._v("Skills")])]),a("li",[a("a",{staticClass:"scrollto",attrs:{href:"#contact"}},[this._v("Contact")])])])])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",{staticClass:"experiences-section section",attrs:{id:"experiences"}},[i("h2",{staticClass:"section-title"},[t._v("Work Experiences")]),i("div",{staticClass:"timeline"},[i("div",{staticClass:"item"},[i("div",{staticClass:"work-place"},[i("h3",{staticClass:"place"},[t._v("Paytm")]),i("div",{staticClass:"location"},[i("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),t._v("Bangalore")])]),i("div",{staticClass:"job-meta"},[i("div",{staticClass:"title"},[t._v("Software Engineer")]),i("div",{staticClass:"time"},[t._v("July 2016 – Current")])]),i("div",{staticClass:"job-desc"},[i("p",[t._v("The role includes Working on horizontally scalable distributed platform (Data Science Platform) in travel marketplace and responsible for providing better insights across all travel vertical. Major projects undertaken:")]),i("ul",[i("li",[t._v("Fare Alert System")]),i("li",[t._v("Fare Calendar System")]),i("li",[t._v("Fare Trends")]),i("li",[t._v("User Classification")])])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"work-place"},[i("h3",{staticClass:"place"},[t._v("Hanyang University")]),i("div",{staticClass:"location"},[i("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),t._v("Seoul")])]),i("div",{staticClass:"job-meta"},[i("div",{staticClass:"title"},[t._v("Undergrad Researcher")]),i("div",{staticClass:"time"},[t._v("May 2015 – July 2015")])]),i("div",{staticClass:"job-desc"},[i("p",[t._v("Researched role of emotions in on-line communities using agent based approach.")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"work-place"},[i("h3",{staticClass:"place"},[t._v("Human Genetics Unit, Indian Statistical Institute")]),i("div",{staticClass:"location"},[i("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),t._v("Kolkata")])]),i("div",{staticClass:"job-meta"},[i("div",{staticClass:"title"},[t._v("Sophomore Researcher")]),i("div",{staticClass:"time"},[t._v("May 2014 – July 2014")])]),i("div",{staticClass:"job-desc"},[i("p",[t._v("The role involved analysis of univariate & multivariate probability distributions and associated regressions.")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"education-section section",attrs:{id:"education"}},[a("h2",{staticClass:"section-title"},[this._v("Education")]),a("div",{staticClass:"row"},[a("div",{staticClass:"item col-xs-12 col-sm-12"},[a("div",{staticClass:"item-inner"},[a("h3",{staticClass:"degree"},[this._v("BTech Mathematics and Computing")]),a("div",{staticClass:"education-body"},[this._v("\n                          Indian Institute of Technology Guwahati\n                      ")]),a("div",{staticClass:"time"},[this._v("2012 - 2016")]),a("div",{staticClass:"desc"})])])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"other-skills"},[i("h3",{staticClass:"subtitle"},[t._v("Other Skills")]),i("div",{staticClass:"misc-skills"},[i("span",{staticClass:"skill-tag"},[t._v("Pandas")]),i("span",{staticClass:"skill-tag"},[t._v("Numpy")]),i("span",{staticClass:"skill-tag"},[t._v("Linux")]),i("span",{staticClass:"skill-tag"},[t._v("Node.js")]),i("span",{staticClass:"skill-tag"},[t._v("Javascript")]),i("br"),i("span",{staticClass:"skill-tag"},[t._v("R")]),i("span",{staticClass:"skill-tag"},[t._v("MATLAB")]),i("span",{staticClass:"skill-tag"},[t._v("Elasticsearch")]),i("span",{staticClass:"skill-tag"},[t._v("Kafka")]),i("br"),i("span",{staticClass:"skill-tag"},[t._v("Redis")]),i("span",{staticClass:"skill-tag"},[t._v("Cassandra")]),i("span",{staticClass:"skill-tag"},[t._v("MongoDB")]),i("br"),i("span",{staticClass:"skill-tag"},[t._v("Spark")]),i("span",{staticClass:"skill-tag"},[t._v("Scala")]),i("br"),i("span",{staticClass:"skill-tag"},[t._v("TensorFlow")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"contact-section section",attrs:{id:"contact"}},[a("h2",{staticClass:"section-title"},[this._v("Get in Touch")]),a("div",{staticClass:"intro"},[a("img",{staticClass:"profile-image",attrs:{src:"//github.com/aby0.png",alt:""}}),a("div",{staticClass:"dialog"},[a("p",[this._v("\n                    I'm currently looking for machine learning opportunities.\n                    "),a("br"),a("br"),a("br")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("footer",{staticClass:"footer text-center"},[a("div",{staticClass:"container"},[a("small",{staticClass:"copyright"},[this._v("© 2017 Somya Anand")])])])}]};a.a=n},sXPf:function(t,a,i){"use strict";var e=i("CFSj"),n=i.n(e),o=i("vyHw");i.n(o);a.a={components:{PieChart:n.a}}},vyHw:function(t,a,i){var e=i("1o+7");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("2a2de92c",e,!1,{sourceMap:!1})}});