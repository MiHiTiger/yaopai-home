!function(t){t.fn.sliderPlay=function(e){var n={btnBox:"btnBox",btnCurClassName:"cur",direction:"left",mouseEvent:"click",speed:600,timeout:5e3},e=t.extend(n,e),i=t(this),s=i.find("ul"),o=s.find("li").first(),a=t("#"+e.btnBox).children(),c=s.find("img"),l=c.length,r=c.first().outerWidth(),u=c.first().outerHeight(),f=null,d=0,h=0,v=!0;t(window).resize(function(t){console.log(r)});var m={init:function(){this.move(),this.setCss(),f=setInterval(m.tabChange,e.timeout),m.addEvent(e.mouseEvent),this.pause()},setCss:function(){switch(e.direction){case"left":s.css("width",r*l+"px");break;case"top":s.css("height",l*u+"px")}},move:function(){s.stop(!0),a.removeClass(e.btnCurClassName).eq(h).addClass(e.btnCurClassName),"left"==e.direction?s.animate({left:-r*d+"px"},e.speed,function(){v||(o.css({position:"static",left:0}),s.css("left",0),d=0,v=!0)}):s.animate({top:-u*d+"px"},e.speed,function(){v||(o.css({position:"static",top:0}),s.css("top",0),d=0,v=!0)})},tabChange:function(){d++,h++,d==l&&(h=0,"left"==e.direction?o.css({position:"relative",left:l*r}):o.css({position:"relative",top:l*u}),v=!1),m.move()},addEvent:function(n){switch(n){case"click":a.click(function(){d!=t(this).index()&&(d=h=t(this).index(),clearInterval(f),m.move(),f=setInterval(m.tabChange,e.timeout))});break;case"hover":a.hover(function(){d=h=t(this).index(),clearInterval(f),m.move()},function(){f=setInterval(m.tabChange,e.timeout)})}},pause:function(){s.hover(function(){clearInterval(f)},function(){f=setInterval(m.tabChange,e.timeout)})}};m.init()}}(jQuery);