webpackJsonp([40],{yeAa:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),t.d(o,"ion_popover",function(){return b});var i=t("7tvk"),r=t("GEqe"),n=(t("ICJM"),t("l4rT"),t("EH7W")),s=(t("kopG"),t("J9dW")),a=t("cyxb"),p=t("1Nr9"),c=t("xd1v"),l=function(e,o){var t="top",i="left",r=e.querySelector(".popover-content"),s=r.getBoundingClientRect(),a=s.width,p=s.height,c=e.ownerDocument.defaultView.innerWidth,l=e.ownerDocument.defaultView.innerHeight,h=o&&o.target&&o.target.getBoundingClientRect(),u=null!=h&&"top"in h?h.top:l/2-p/2,v=null!=h&&"left"in h?h.left:c/2,b=h&&h.width||0,f=h&&h.height||0,m=e.querySelector(".popover-arrow"),g=m.getBoundingClientRect(),w=g.width,y=g.height;null==h&&(m.style.display="none");var x={top:u+f,left:v+b/2-w/2},j={top:u+f+(y-1),left:v+b/2-a/2},O=!1,k=!1;j.left<d+25?(O=!0,j.left=d):a+d+j.left+25>c&&(k=!0,j.left=c-a-d,i="right"),u+f+p>l&&u-p>0?(x.top=u-(y+1),j.top=u-p-(y-1),e.className=e.className+" popover-bottom",t="bottom"):u+f+p>l&&(r.style.bottom=d+"%"),m.style.top=x.top+"px",m.style.left=x.left+"px",r.style.top=j.top+"px",r.style.left=j.left+"px",O&&(r.style.left="calc("+j.left+"px + var(--ion-safe-area-left, 0px))"),k&&(r.style.left="calc("+j.left+"px - var(--ion-safe-area-right, 0px))"),r.style.transformOrigin=t+" "+i;var D=Object(n.a)(),P=Object(n.a)(),E=Object(n.a)();return P.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),E.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(e).easing("ease").duration(100).addAnimation([P,E])},d=5,h=function(e){var o=Object(n.a)(),t=Object(n.a)(),i=Object(n.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.addElement(e).easing("ease").duration(500).addAnimation([t,i])},u=function(e,o){var t=e.ownerDocument,i="rtl"===t.dir,r="top",s=i?"right":"left",a=e.querySelector(".popover-content"),p=a.getBoundingClientRect(),c=p.width,l=p.height,d=t.defaultView.innerWidth,h=t.defaultView.innerHeight,u=o&&o.target&&o.target.getBoundingClientRect(),v=null!=u&&"bottom"in u?u.bottom:h/2-l/2,b=null!=u&&"left"in u?i?u.left-c+u.width:u.left:d/2-c/2,f=u&&u.height||0,m={top:v,left:b};m.left<12?(m.left=12,s="left"):c+12+m.left>d&&(m.left=d-c-12,s="right"),v+f+l>h&&v-l>0?(m.top=v-l-f,e.className=e.className+" popover-bottom",r="bottom"):v+f+l>h&&(a.style.bottom="12px");var g=Object(n.a)(),w=Object(n.a)(),y=Object(n.a)(),x=Object(n.a)(),j=Object(n.a)();return w.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),y.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),x.addElement(a).beforeStyles({top:m.top+"px",left:m.left+"px","transform-origin":r+" "+s}).fromTo("transform","scale(0.001)","scale(1)"),j.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),g.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([w,y,x,j])},v=function(e){var o=Object(n.a)(),t=Object(n.a)(),i=Object(n.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.addElement(e).easing("ease").duration(500).addAnimation([t,i])},b=function(){function e(e){var o=this;Object(r.l)(this,e),this.presented=!1,this.mode=Object(r.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),o.dismiss()},this.onBackdropTap=function(){o.dismiss(void 0,s.a)},this.onLifecycle=function(e){var t=o.usersElement,i=f[e.type];if(t&&i){var r=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(r)}},Object(s.e)(this.el),this.didPresent=Object(r.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(r.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(r.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(r.d)(this,"ionPopoverDidDismiss",7)}return e.prototype.present=function(){return Object(i.a)(this,void 0,void 0,function(){var e,o,t;return Object(i.c)(this,function(i){switch(i.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return o=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),t=this,[4,Object(p.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],o)];case 1:return t.usersElement=i.sent(),[4,Object(c.a)(this.usersElement)];case 2:return i.sent(),[2,Object(s.f)(this,"popoverEnter",l,u,this.event)]}})})},e.prototype.dismiss=function(e,o){return Object(i.a)(this,void 0,void 0,function(){var t;return Object(i.c)(this,function(i){switch(i.label){case 0:return[4,Object(s.g)(this,e,o,"popoverLeave",h,v,this.event)];case 1:return(t=i.sent())?[4,Object(p.b)(this.delegate,this.usersElement)]:[3,3];case 2:i.sent(),i.label=3;case 3:return[2,t]}})})},e.prototype.onDidDismiss=function(){return Object(s.h)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(s.h)(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,o=Object(r.e)(this),t=this.onLifecycle;return Object(r.i)(r.a,{"aria-modal":"true","no-router":!0,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(a.b)(this.cssClass)),(e={},e[o]=!0,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(r.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.i)("div",{class:"popover-wrapper"},Object(r.i)("div",{class:"popover-arrow"}),Object(r.i)("div",{class:"popover-content"})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}'},enumerable:!0,configurable:!0}),e}(),f={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}});
//# sourceMappingURL=40.db86717c343dec06bc00.js.map