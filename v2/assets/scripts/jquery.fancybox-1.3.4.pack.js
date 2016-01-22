/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
!function(t){var e,i,n,a,o,d,c,s,r,h,l,f,p,g=0,b={},y=[],u=0,w={},x=[],m=null,v=new Image,I=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,C=/[^\.]\.(swf)\s*$/i,k=1,O=0,j="",T=!1,S=t.extend(t("<div/>")[0],{prop:0}),A=t.browser.msie&&t.browser.version<7&&!window.XMLHttpRequest,D=function(){i.hide(),v.onerror=v.onload=null,m&&m.abort(),e.empty()},F=function(){!1===b.onError(y,g,b)?(i.hide(),T=!1):(b.titleShow=!1,b.width="auto",b.height="auto",e.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'),N())},E=function(){var n,a,o,c,s,r,h=y[g];if(D(),b=t.extend({},t.fn.fancybox.defaults,"undefined"==typeof t(h).data("fancybox")?b:t(h).data("fancybox")),r=b.onStart(y,g,b),r===!1)T=!1;else if("object"==typeof r&&(b=t.extend(b,r)),o=b.title||(h.nodeName?t(h).attr("title"):h.title)||"",h.nodeName&&!b.orig&&(b.orig=t(h).children("img:first").length?t(h).children("img:first"):t(h)),""===o&&b.orig&&b.titleFromAlt&&(o=b.orig.attr("alt")),n=b.href||(h.nodeName?t(h).attr("href"):h.href)||null,(/^(?:javascript)/i.test(n)||"#"==n)&&(n=null),b.type?(a=b.type,n||(n=b.content)):b.content?a="html":n&&(a=n.match(I)?"image":n.match(C)?"swf":t(h).hasClass("iframe")?"iframe":0===n.indexOf("#")?"inline":"ajax"),a)switch("inline"==a&&(h=n.substr(n.indexOf("#")),a=t(h).length>0?"inline":"ajax"),b.type=a,b.href=n,b.title=o,b.autoDimensions&&("html"==b.type||"inline"==b.type||"ajax"==b.type?(b.width="auto",b.height="auto"):b.autoDimensions=!1),b.modal&&(b.overlayShow=!0,b.hideOnOverlayClick=!1,b.hideOnContentClick=!1,b.enableEscapeButton=!1,b.showCloseButton=!1),b.padding=parseInt(b.padding,10),b.margin=parseInt(b.margin,10),e.css("padding",b.padding+b.margin),t(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){t(this).replaceWith(d.children())}),a){case"html":e.html(b.content),N();break;case"inline":if(t(h).parent().is("#fancybox-content")===!0){T=!1;break}t('<div class="fancybox-inline-tmp" />').hide().insertBefore(t(h)).bind("fancybox-cleanup",function(){t(this).replaceWith(d.children())}).bind("fancybox-cancel",function(){t(this).replaceWith(e.children())}),t(h).appendTo(e),N();break;case"image":T=!1,t.fancybox.showActivity(),v=new Image,v.onerror=function(){F()},v.onload=function(){T=!0,v.onerror=v.onload=null,b.width=v.width,b.height=v.height,t("<img />").attr({id:"fancybox-img",src:v.src,alt:b.title}).appendTo(e),B()},v.src=n;break;case"swf":b.scrolling="no",c='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+b.width+'" height="'+b.height+'"><param name="movie" value="'+n+'"></param>',s="",t.each(b.swf,function(t,e){c+='<param name="'+t+'" value="'+e+'"></param>',s+=" "+t+'="'+e+'"'}),c+='<embed src="'+n+'" type="application/x-shockwave-flash" width="'+b.width+'" height="'+b.height+'"'+s+"></embed></object>",e.html(c),N();break;case"ajax":T=!1,t.fancybox.showActivity(),b.ajax.win=b.ajax.success,m=t.ajax(t.extend({},b.ajax,{url:n,data:b.ajax.data||{},error:function(t){t.status>0&&F()},success:function(t,a,o){if(200==("object"==typeof o?o:m).status){if("function"==typeof b.ajax.win){if(r=b.ajax.win(n,t,a,o),r===!1)return void i.hide();("string"==typeof r||"object"==typeof r)&&(t=r)}e.html(t),N()}}}));break;case"iframe":B()}else F()},N=function(){var i=b.width,n=b.height;i=i.toString().indexOf("%")>-1?parseInt((t(window).width()-2*b.margin)*parseFloat(i)/100,10)+"px":"auto"==i?"auto":i+"px",n=n.toString().indexOf("%")>-1?parseInt((t(window).height()-2*b.margin)*parseFloat(n)/100,10)+"px":"auto"==n?"auto":n+"px",e.wrapInner('<div style="width:'+i+";height:"+n+";overflow: "+("auto"==b.scrolling?"auto":"yes"==b.scrolling?"scroll":"hidden")+';position:relative;"></div>'),b.width=e.width(),b.height=e.height(),B()},B=function(){var l,m;if(i.hide(),a.is(":visible")&&!1===w.onCleanup(x,u,w))t.event.trigger("fancybox-cancel"),T=!1;else{if(T=!0,t(d.add(n)).unbind(),t(window).unbind("resize.fb scroll.fb"),t(document).unbind("keydown.fb"),a.is(":visible")&&"outside"!==w.titlePosition&&a.css("height",a.height()),x=y,u=g,w=b,w.overlayShow?(n.css({"background-color":w.overlayColor,opacity:w.overlayOpacity,cursor:w.hideOnOverlayClick?"pointer":"auto",height:t(document).height()}),n.is(":visible")||(A&&t("select:not(#fancybox-tmp select)").filter(function(){return"hidden"!==this.style.visibility}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"}),n.show())):n.hide(),p=H(),j=w.title||"",O=0,s.empty().removeAttr("style").removeClass(),w.titleShow!==!1&&(l=t.isFunction(w.titleFormat)?w.titleFormat(j,x,u,w):j&&j.length?"float"==w.titlePosition?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+j+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+w.titlePosition+'">'+j+"</div>":!1,j=l,j&&""!==j))switch(s.addClass("fancybox-title-"+w.titlePosition).html(j).appendTo("body").show(),w.titlePosition){case"inside":s.css({width:p.width-2*w.padding,marginLeft:w.padding,marginRight:w.padding}),O=s.outerHeight(!0),s.appendTo(o),p.height+=O;break;case"over":s.css({marginLeft:w.padding,width:p.width-2*w.padding,bottom:w.padding}).appendTo(o);break;case"float":s.css("left",-1*parseInt((s.width()-p.width-40)/2,10)).appendTo(a);break;default:s.css({width:p.width-2*w.padding,paddingLeft:w.padding,paddingRight:w.padding}).appendTo(a)}s.hide(),a.is(":visible")?(t(c.add(r).add(h)).hide(),l=a.position(),f={top:l.top,left:l.left,width:a.width(),height:a.height()},m=f.width==p.width&&f.height==p.height,d.fadeTo(w.changeFade,.3,function(){var i=function(){d.html(e.contents()).fadeTo(w.changeFade,1,L)};t.event.trigger("fancybox-change"),d.empty().removeAttr("filter").css({"border-width":w.padding,width:p.width-2*w.padding,height:b.autoDimensions?"auto":p.height-O-2*w.padding}),m?i():(S.prop=0,t(S).animate({prop:1},{duration:w.changeSpeed,easing:w.easingChange,step:M,complete:i}))})):(a.removeAttr("style"),d.css("border-width",w.padding),"elastic"==w.transitionIn?(f=R(),d.html(e.contents()),a.show(),w.opacity&&(p.opacity=0),S.prop=0,t(S).animate({prop:1},{duration:w.speedIn,easing:w.easingIn,step:M,complete:L})):("inside"==w.titlePosition&&O>0&&s.show(),d.css({width:p.width-2*w.padding,height:b.autoDimensions?"auto":p.height-O-2*w.padding}).html(e.contents()),a.css(p).fadeIn("none"==w.transitionIn?0:w.speedIn,L)))}},P=function(){(w.enableEscapeButton||w.enableKeyboardNav)&&t(document).bind("keydown.fb",function(e){27==e.keyCode&&w.enableEscapeButton?(e.preventDefault(),t.fancybox.close()):37!=e.keyCode&&39!=e.keyCode||!w.enableKeyboardNav||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName||"SELECT"===e.target.tagName||(e.preventDefault(),t.fancybox[37==e.keyCode?"prev":"next"]())}),w.showNavArrows?((w.cyclic&&x.length>1||0!==u)&&r.show(),(w.cyclic&&x.length>1||u!=x.length-1)&&h.show()):(r.hide(),h.hide())},L=function(){t.support.opacity||(d.get(0).style.removeAttribute("filter"),a.get(0).style.removeAttribute("filter")),b.autoDimensions&&d.css("height","auto"),a.css("height","auto"),j&&j.length&&s.show(),w.showCloseButton&&c.show(),P(),w.hideOnContentClick&&d.bind("click",t.fancybox.close),w.hideOnOverlayClick&&n.bind("click",t.fancybox.close),t(window).bind("resize.fb",t.fancybox.resize),w.centerOnScroll&&t(window).bind("scroll.fb",t.fancybox.center),"iframe"==w.type&&t('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(t.browser.msie?'allowtransparency="true""':"")+' scrolling="'+b.scrolling+'" src="'+w.href+'"></iframe>').appendTo(d),a.show(),T=!1,t.fancybox.center(),w.onComplete(x,u,w);var e,i;x.length-1>u&&(e=x[u+1].href,"undefined"!=typeof e&&e.match(I)&&(i=new Image,i.src=e)),u>0&&(e=x[u-1].href,"undefined"!=typeof e&&e.match(I)&&(i=new Image,i.src=e))},M=function(t){var e={width:parseInt(f.width+(p.width-f.width)*t,10),height:parseInt(f.height+(p.height-f.height)*t,10),top:parseInt(f.top+(p.top-f.top)*t,10),left:parseInt(f.left+(p.left-f.left)*t,10)};"undefined"!=typeof p.opacity&&(e.opacity=.5>t?.5:t),a.css(e),d.css({width:e.width-2*w.padding,height:e.height-O*t-2*w.padding})},z=function(){return[t(window).width()-2*w.margin,t(window).height()-2*w.margin,t(document).scrollLeft()+w.margin,t(document).scrollTop()+w.margin]},H=function(){var t=z(),e={},i=w.autoScale,n=2*w.padding;return e.width=w.width.toString().indexOf("%")>-1?parseInt(t[0]*parseFloat(w.width)/100,10):w.width+n,e.height=w.height.toString().indexOf("%")>-1?parseInt(t[1]*parseFloat(w.height)/100,10):w.height+n,i&&(e.width>t[0]||e.height>t[1])&&("image"==b.type||"swf"==b.type?(i=w.width/w.height,e.width>t[0]&&(e.width=t[0],e.height=parseInt((e.width-n)/i+n,10)),e.height>t[1]&&(e.height=t[1],e.width=parseInt((e.height-n)*i+n,10))):(e.width=Math.min(e.width,t[0]),e.height=Math.min(e.height,t[1]))),e.top=parseInt(Math.max(t[3]-20,t[3]+.5*(t[1]-e.height-40)),10),e.left=parseInt(Math.max(t[2]-20,t[2]+.5*(t[0]-e.width-40)),10),e},R=function(){var e=b.orig?t(b.orig):!1,i={};return e&&e.length?(i=e.offset(),i.top+=parseInt(e.css("paddingTop"),10)||0,i.left+=parseInt(e.css("paddingLeft"),10)||0,i.top+=parseInt(e.css("border-top-width"),10)||0,i.left+=parseInt(e.css("border-left-width"),10)||0,i.width=e.width(),i.height=e.height(),i={width:i.width+2*w.padding,height:i.height+2*w.padding,top:i.top-w.padding-20,left:i.left-w.padding-20}):(e=z(),i={width:2*w.padding,height:2*w.padding,top:parseInt(e[3]+.5*e[1],10),left:parseInt(e[2]+.5*e[0],10)}),i},K=function(){i.is(":visible")?(t("div",i).css("top",-40*k+"px"),k=(k+1)%12):clearInterval(l)};t.fn.fancybox=function(e){return t(this).length?(t(this).data("fancybox",t.extend({},e,t.metadata?t(this).metadata():{})).unbind("click.fb").bind("click.fb",function(e){e.preventDefault(),T||(T=!0,t(this).blur(),y=[],g=0,e=t(this).attr("rel")||"",e&&""!=e&&"nofollow"!==e?(y=t("a[rel="+e+"], area[rel="+e+"]"),g=y.index(this)):y.push(this),E())}),this):this},t.fancybox=function(e,i){var n;if(!T){if(T=!0,n="undefined"!=typeof i?i:{},y=[],g=parseInt(n.index,10)||0,t.isArray(e)){for(var a=0,o=e.length;o>a;a++)"object"==typeof e[a]?t(e[a]).data("fancybox",t.extend({},n,e[a])):e[a]=t({}).data("fancybox",t.extend({content:e[a]},n));y=jQuery.merge(y,e)}else"object"==typeof e?t(e).data("fancybox",t.extend({},n,e)):e=t({}).data("fancybox",t.extend({content:e},n)),y.push(e);(g>y.length||0>g)&&(g=0),E()}},t.fancybox.showActivity=function(){clearInterval(l),i.show(),l=setInterval(K,66)},t.fancybox.hideActivity=function(){i.hide()},t.fancybox.next=function(){return t.fancybox.pos(u+1)},t.fancybox.prev=function(){return t.fancybox.pos(u-1)},t.fancybox.pos=function(t){T||(t=parseInt(t),y=x,t>-1&&t<x.length?(g=t,E()):w.cyclic&&x.length>1&&(g=t>=x.length?0:x.length-1,E()))},t.fancybox.cancel=function(){T||(T=!0,t.event.trigger("fancybox-cancel"),D(),b.onCancel(y,g,b),T=!1)},t.fancybox.close=function(){function e(){n.fadeOut("fast"),s.empty().hide(),a.hide(),t.event.trigger("fancybox-cleanup"),d.empty(),w.onClosed(x,u,w),x=b=[],u=g=0,w=b={},T=!1}if(!T&&!a.is(":hidden"))if(T=!0,w&&!1===w.onCleanup(x,u,w))T=!1;else if(D(),t(c.add(r).add(h)).hide(),t(d.add(n)).unbind(),t(window).unbind("resize.fb scroll.fb"),t(document).unbind("keydown.fb"),d.find("iframe").attr("src",A&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank"),"inside"!==w.titlePosition&&s.empty(),a.stop(),"elastic"==w.transitionOut){f=R();var i=a.position();p={top:i.top,left:i.left,width:a.width(),height:a.height()},w.opacity&&(p.opacity=1),s.empty().hide(),S.prop=1,t(S).animate({prop:0},{duration:w.speedOut,easing:w.easingOut,step:M,complete:e})}else a.fadeOut("none"==w.transitionOut?0:w.speedOut,e)},t.fancybox.resize=function(){n.is(":visible")&&n.css("height",t(document).height()),t.fancybox.center(!0)},t.fancybox.center=function(t){var e,i;T||(i=t===!0?1:0,e=z(),!i&&(a.width()>e[0]||a.height()>e[1])||a.stop().animate({top:parseInt(Math.max(e[3]-20,e[3]+.5*(e[1]-d.height()-40)-w.padding)),left:parseInt(Math.max(e[2]-20,e[2]+.5*(e[0]-d.width()-40)-w.padding))},"number"==typeof t?t:200))},t.fancybox.init=function(){t("#fancybox-wrap").length||(t("body").append(e=t('<div id="fancybox-tmp"></div>'),i=t('<div id="fancybox-loading"><div></div></div>'),n=t('<div id="fancybox-overlay"></div>'),a=t('<div id="fancybox-wrap"></div>')),o=t('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(a),o.append(d=t('<div id="fancybox-content"></div>'),c=t('<a id="fancybox-close"></a>'),s=t('<div id="fancybox-title"></div>'),r=t('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),h=t('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')),c.click(t.fancybox.close),i.click(t.fancybox.cancel),r.click(function(e){e.preventDefault(),t.fancybox.prev()}),h.click(function(e){e.preventDefault(),t.fancybox.next()}),t.fn.mousewheel&&a.bind("mousewheel.fb",function(e,i){T?e.preventDefault():(0==t(e.target).get(0).clientHeight||t(e.target).get(0).scrollHeight===t(e.target).get(0).clientHeight)&&(e.preventDefault(),t.fancybox[i>0?"prev":"next"]())}),t.support.opacity||a.addClass("fancybox-ie"),A&&(i.addClass("fancybox-ie6"),a.addClass("fancybox-ie6"),t('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(o)))},t.fn.fancybox.defaults={padding:10,margin:40,opacity:!1,modal:!1,cyclic:!1,scrolling:"auto",width:560,height:340,autoScale:!0,autoDimensions:!0,centerOnScroll:!1,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:!0,hideOnContentClick:!1,overlayShow:!0,overlayOpacity:.7,overlayColor:"#777",titleShow:!0,titlePosition:"float",titleFormat:null,titleFromAlt:!1,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:!0,showNavArrows:!0,enableEscapeButton:!0,enableKeyboardNav:!0,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}},t(document).ready(function(){t.fancybox.init()})}(jQuery);