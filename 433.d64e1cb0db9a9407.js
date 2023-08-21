"use strict";(self.webpackChunksubelo_todo_app=self.webpackChunksubelo_todo_app||[]).push([[433],{433:(w,b,l)=>{l.r(b),l.d(b,{ion_datetime_button:()=>x});var p=l(5861),r=l(6953),f=l(544),u=l(7690),y=l(4237),D=l(7876),d=l(8505);const x=class{constructor(s){var o=this;(0,r.r)(this,s),this.datetimeEl=null,this.overlayEl=null,this.getParsedDateValues=e=>null==e?[]:Array.isArray(e)?e:[e],this.setDateTimeText=()=>{const{datetimeEl:e,datetimePresentation:n}=this;if(!e)return;const{value:i,locale:t,hourCycle:a,preferWheel:c,multiple:C,titleSelectedDatesFormatter:g}=e,h=this.getParsedDateValues(i),m=(0,d.q)(h.length>0?h:[(0,d.t)()])[0],_=(0,d.J)(t,a);switch(this.dateText=this.timeText=void 0,n){case"date-time":case"time-date":const v=(0,d.T)(t,m),T=(0,d.K)(t,m,_);c?this.dateText=`${v} ${T}`:(this.dateText=v,this.timeText=T);break;case"date":if(C&&1!==h.length){let E=`${h.length} days`;if(void 0!==g)try{E=g(h)}catch(O){(0,u.a)("Exception in provided `titleSelectedDatesFormatter`: ",O)}this.dateText=E}else this.dateText=(0,d.T)(t,m);break;case"time":this.timeText=(0,d.K)(t,m,_);break;case"month-year":this.dateText=(0,d.G)(t,m);break;case"month":this.dateText=(0,d.S)(t,m,{month:"long"});break;case"year":this.dateText=(0,d.S)(t,m,{year:"numeric"})}},this.waitForDatetimeChanges=(0,p.Z)(function*(){const{datetimeEl:e}=o;return e?new Promise(n=>{(0,f.a)(e,"ionRender",n,{once:!0})}):Promise.resolve()}),this.handleDateClick=function(){var e=(0,p.Z)(function*(n){const{datetimeEl:i,datetimePresentation:t}=o;if(!i)return;let a=!1;switch(t){case"date-time":case"time-date":!i.preferWheel&&"date"!==i.presentation&&(i.presentation="date",a=!0)}o.selectedButton="date",o.presentOverlay(n,a,o.dateTargetEl)});return function(n){return e.apply(this,arguments)}}(),this.handleTimeClick=e=>{const{datetimeEl:n,datetimePresentation:i}=this;if(!n)return;let t=!1;switch(i){case"date-time":case"time-date":"time"!==n.presentation&&(n.presentation="time",t=!0)}this.selectedButton="time",this.presentOverlay(e,t,this.timeTargetEl)},this.presentOverlay=function(){var e=(0,p.Z)(function*(n,i,t){const{overlayEl:a}=o;a&&("ION-POPOVER"===a.tagName?(i&&(yield o.waitForDatetimeChanges()),a.present(Object.assign(Object.assign({},n),{detail:{ionShadowTarget:t}}))):a.present())});return function(n,i,t){return e.apply(this,arguments)}}(),this.datetimePresentation="date-time",this.dateText=void 0,this.timeText=void 0,this.datetimeActive=!1,this.selectedButton=void 0,this.color="primary",this.disabled=!1,this.datetime=void 0}componentWillLoad(){var s=this;return(0,p.Z)(function*(){const{datetime:o}=s;if(!o)return void(0,u.a)("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",s.el);const e=s.datetimeEl=document.getElementById(o);if(!e)return void(0,u.a)(`No ion-datetime instance found for ID '${o}'.`,s.el);if("ION-DATETIME"!==e.tagName)return void(0,u.a)(`Expected an ion-datetime instance for ID '${o}' but received '${e.tagName.toLowerCase()}' instead.`,e);new IntersectionObserver(t=>{s.datetimeActive=t[0].isIntersecting},{threshold:.01}).observe(e);const i=s.overlayEl=e.closest("ion-modal, ion-popover");i&&i.classList.add("ion-datetime-button-overlay"),(0,f.c)(e,()=>{const t=s.datetimePresentation=e.presentation||"date-time";switch(s.setDateTimeText(),(0,f.a)(e,"ionValueChange",s.setDateTimeText),t){case"date-time":case"date":case"month-year":case"month":case"year":s.selectedButton="date";break;case"time-date":case"time":s.selectedButton="time"}})})()}render(){const{color:s,dateText:o,timeText:e,selectedButton:n,datetimeActive:i,disabled:t}=this,a=(0,D.b)(this);return(0,r.h)(r.H,{class:(0,y.c)(s,{[a]:!0,[`${n}-active`]:i,"datetime-button-disabled":t})},o&&(0,r.h)("button",{class:"ion-activatable",id:"date-button","aria-expanded":i?"true":"false",onClick:this.handleDateClick,disabled:t,part:"native",ref:c=>this.dateTargetEl=c},(0,r.h)("slot",{name:"date-target"},o),"md"===a&&(0,r.h)("ion-ripple-effect",null)),e&&(0,r.h)("button",{class:"ion-activatable",id:"time-button","aria-expanded":i?"true":"false",onClick:this.handleTimeClick,disabled:t,part:"native",ref:c=>this.timeTargetEl=c},(0,r.h)("slot",{name:"time-target"},e),"md"===a&&(0,r.h)("ion-ripple-effect",null)))}get el(){return(0,r.f)(this)}};x.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}",md:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}"}}}]);