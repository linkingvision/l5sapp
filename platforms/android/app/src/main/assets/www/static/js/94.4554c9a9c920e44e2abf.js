webpackJsonp([94],{MShA:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"mdTransitionAnimation",function(){return r});t("GEqe"),t("ICJM"),t("l4rT");var n=t("EH7W"),i=(t("kopG"),t("xd1v")),r=function(e,a){var t="back"===a.direction,r=a.enteringEl,o=a.leavingEl,d=Object(i.b)(r),c=d.querySelector("ion-toolbar"),l=Object(n.a)();if(l.addElement(d).fill("both").beforeRemoveClass("ion-page-invisible"),t?l.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):l.duration(a.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),c){var b=Object(n.a)();b.addElement(c),l.addAnimation(b)}if(o&&t){l.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var s=Object(n.a)();s.addElement(Object(i.b)(o)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),l.addAnimation(s)}return l}}});
//# sourceMappingURL=94.4554c9a9c920e44e2abf.js.map