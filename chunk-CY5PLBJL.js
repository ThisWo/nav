import{a as ze,b as ve,c as Se,d as he}from"./chunk-54SNFNRG.js";import{c as Y,e as Z,f as ee}from"./chunk-KRED67RL.js";import{G as fe,H as ye,I as Ce,a as R,b as $,c as B,d as W,f as A,g as j}from"./chunk-AB6NCBR3.js";import{f as ce,i as me}from"./chunk-V2PPTWXP.js";import{a as te,b as ie,c as oe}from"./chunk-RZHEXA5K.js";import"./chunk-5K7QL3LU.js";import{a as pe,b as ue}from"./chunk-EPIS2NVM.js";import{b as ne}from"./chunk-SEYZNTAX.js";import{Ab as se,Eb as _e,Hb as de,Ib as ge,X as F,Xb as xe,Z as K,kb as re,nb as le,qb as ae}from"./chunk-GPUUWD46.js";import{Ac as d,Da as m,Ea as p,Ec as z,Fc as v,Gc as S,Id as q,La as L,Md as H,Nb as f,Pb as r,Pd as U,Qd as G,Rd as J,Sd as Q,Td as T,Ud as I,Xd as X,bc as a,cc as s,dc as y,ec as D,fc as P,fe as x,g as N,hc as C,kc as _,lb as O,mc as l,pb as n,pd as b,qb as h,xb as k,xd as M,yc as u,zc as w}from"./chunk-QBO34LTF.js";function Me(i,c){if(i&1&&(a(0,"p",4),u(1),a(2,"a",5),u(3),s()()),i&2){let e=l(2);n(),d(" ",e.$t("_getToken"),""),n(2),d(" ",e.$t("_readDoc"),"")}}function Ie(i,c){if(i&1){let e=C();D(0),a(1,"p"),u(2),s(),a(3,"input",2),S("ngModelChange",function(t){m(e);let g=l();return v(g.token,t)||(g.token=t),p(t)}),_("keyup",function(t){m(e);let g=l();return p(g.onKey(t))}),s(),f(4,Me,4,2,"p",3),P()}if(i&2){let e=l();n(2),w(e.$t("_inputTokenMsg")),n(),z("ngModel",e.token),n(),r("ngIf",!e.isSelfDevelop)}}var V=class i{constructor(c){this.message=c}visible=!1;onCancel=new L;$t=x;isSelfDevelop=I;token="";submitting=!1;ngOnInit(){}ngAfterViewInit(){this.inputFocus()}handleCancel(){this.onCancel.emit()}inputFocus(){setTimeout(()=>{document.getElementById("loginInput")?.focus()},300)}onKey(c){c.code==="Enter"&&this.login()}login(){return N(this,null,function*(){if(!this.token){this.message.error(x("_pleaseInputToken"));return}let c=this.token.trim();this.submitting=!0;try{yield _e(c),U(c);try{yield ge({message:"auth",path:".navauth",content:"OK"}),de("image").finally(()=>{this.message.success(x("_tokenVerSuc")),J().finally(()=>{window.location.reload()})})}catch{G(),this.submitting=!1}}catch{this.submitting=!1}})}static \u0275fac=function(e){return new(e||i)(h(xe))};static \u0275cmp=k({type:i,selectors:[["app-login"]],inputs:{visible:"visible"},outputs:{onCancel:"onCancel"},decls:2,vars:3,consts:[[3,"nzVisibleChange","nzOnCancel","nzOnOk","nzVisible","nzTitle","nzOkLoading"],[4,"nzModalContent"],["id","loginInput","autofocus","","nz-input","","autofocus","",3,"ngModelChange","keyup","ngModel"],["style","margin-top: 15px",4,"ngIf"],[2,"margin-top","15px"],["href","https://github.com/xjh22222228/nav#%E9%83%A8%E7%BD%B2","target","_blank"]],template:function(e,o){e&1&&(a(0,"nz-modal",0),S("nzVisibleChange",function(g){return v(o.visible,g)||(o.visible=g),g}),_("nzOnCancel",function(){return o.handleCancel()})("nzOnOk",function(){return o.login()}),f(1,Ie,5,3,"ng-container",1),s()),e&2&&(z("nzVisible",o.visible),r("nzTitle",o.$t("_authLogin"))("nzOkLoading",o.submitting))},dependencies:[M,b,se,re,le,ae,Ce,ye,fe,me,ce],styles:[".prefix-icon[_ngcontent-%COMP%]{width:20px;height:20px;pointer-events:none}"]})};function Ve(i,c){if(i&1){let e=C();a(0,"li",8),_("click",function(){m(e);let t=l(2);return p(t.goRoute("/system/component"))}),u(1),s()}if(i&2){let e=l(2);r("nzSelected",e.currentMenu==="component"),n(),d(" ",e.$t("_components")," ")}}function Te(i,c){if(i&1){let e=C();a(0,"li",8),_("click",function(){m(e);let t=l(2);return p(t.goRoute("/system/bookmarkExport"))}),u(1),s()}if(i&2){let e=l(2);r("nzSelected",e.currentMenu==="bookmarkExport"),n(),d(" ",e.$t("_bookmarkExport")," ")}}function Ee(i,c){if(i&1){let e=C();a(0,"li",8),_("click",function(){m(e);let t=l(2);return p(t.goRoute("/system/collect"))}),u(1),s()}if(i&2){let e=l(2);r("nzSelected",e.currentMenu==="collect"),n(),d(" ",e.$t("_userCollect")," ")}}function Ne(i,c){if(i&1&&(a(0,"span",19),u(1),s()),i&2){let e=l(2);n(),w(e.date)}}function Le(i,c){i&1&&y(0,"nz-spin",20),i&2&&r("nzSize","large")}function Oe(i,c){if(i&1){let e=C();a(0,"nz-layout",2)(1,"nz-layout")(2,"nz-sider",3),S("nzCollapsedChange",function(t){m(e);let g=l();return v(g.isCollapsed,t)||(g.isCollapsed=t),p(t)}),a(3,"div",4)(4,"button",5),_("click",function(){m(e);let t=l();return p(t.toggleCollapsed())}),y(5,"nz-icon",6),s()(),a(6,"ul",7)(7,"li",8),_("click",function(){m(e);let t=l();return p(t.goRoute("/system/web"))}),u(8),s(),a(9,"li",8),_("click",function(){m(e);let t=l();return p(t.goRoute("/system/setting"))}),u(10),s(),a(11,"li",8),_("click",function(){m(e);let t=l();return p(t.goRoute("/system/tag"))}),u(12),s(),a(13,"li",8),_("click",function(){m(e);let t=l();return p(t.goRoute("/system/bookmark"))}),u(14),s(),a(15,"li",8),_("click",function(){m(e);let t=l();return p(t.goRoute("/system/search"))}),u(16),s(),f(17,Ve,2,2,"li",9)(18,Te,2,2,"li",9)(19,Ee,2,2,"li",9),a(20,"li",8),_("click",function(){m(e);let t=l();return p(t.goRoute("/system/vip"))}),u(21),s(),a(22,"li",8),_("click",function(){m(e);let t=l();return p(t.goRoute("/system/info"))}),u(23),s()()(),a(24,"nz-layout",10)(25,"nz-content",11)(26,"div")(27,"button",12),_("click",function(){m(e);let t=l();return p(t.goBack())}),u(28),s(),a(29,"button",13),_("click",function(){m(e);let t=l();return p(t.logout())}),u(30),s(),y(31,"img",14),a(32,"a",15),y(33,"img",16),s(),f(34,Ne,2,1,"span",17),s(),f(35,Le,1,1,"nz-spin",18),y(36,"router-outlet"),s()()()()}if(i&2){let e=l();n(2),z("nzCollapsed",e.isCollapsed),r("nzTrigger",null),n(3),r("nzType",e.isCollapsed?"menu-unfold":"menu-fold"),n(2),r("nzSelected",e.currentMenu==="web"),n(),d(" ",e.$t("_websiteMang")," "),n(),r("nzSelected",e.currentMenu==="setting"),n(),d(" ",e.$t("_systemSet")," "),n(),r("nzSelected",e.currentMenu==="tag"),n(),d(" ",e.$t("_tagSettings")," "),n(),r("nzSelected",e.currentMenu==="bookmark"),n(),d(" ",e.$t("_bookmarkImport")," "),n(),r("nzSelected",e.currentMenu==="search"),n(),d(" ",e.$t("_searchEngines")," "),n(),r("ngIf",e.isAuthz||e.isSelfDevelop),n(),r("ngIf",e.isAuthz),n(),r("ngIf",e.isAuthz||e.isSelfDevelop),n(),r("nzSelected",e.currentMenu==="vip"),n(),d(" ",e.$t("_vipAuth")," "),n(),r("nzSelected",e.currentMenu==="info"),n(),d(" ",e.$t("_webInfo")," "),n(5),d(" ",e.$t("_backHome")," "),n(2),d(" ",e.$t("_logout")," "),n(),r("src",e.currentVersionSrc,O),n(3),r("ngIf",!e.isSelfDevelop),n(),r("ngIf",e.pageLoading)}}var E=class i{constructor(c){this.router=c;X(),this.router.events.subscribe(e=>{e instanceof R?this.pageLoading=!0:(e instanceof $||e instanceof B||e instanceof W)&&(this.pageLoading=!1)})}isSelfDevelop=I;$t=x;isLogin=T;showLoginModal=!T;currentMenu="";date=document.getElementById("META-NAV")?.dataset?.date||"";currentVersionSrc=`https://img.shields.io/badge/current-v${q}-red.svg?longCache=true&style=flat-square`;isAuthz=!!H();pageLoading=!1;isCollapsed=!1;ngOnInit(){let c=window.location.href.split("/");this.currentMenu=c.at(-1)||""}toggleCollapsed(){this.isCollapsed=!this.isCollapsed}goBack(){this.router.navigate(["/"])}goRoute(c,e=!1){e||this.router.navigate([c])}logout(){Q(),this.router.navigate(["/"]),setTimeout(()=>{location.reload()},26)}static \u0275fac=function(e){return new(e||i)(h(j))};static \u0275cmp=k({type:i,selectors:[["app-system"]],decls:2,vars:2,consts:[["class","system-layout",4,"ngIf"],[3,"visible"],[1,"system-layout"],["nzWidth","150px","nzTheme","light","nzCollapsible","",1,"sidebar","select-none",3,"nzCollapsedChange","nzCollapsed","nzTrigger"],[1,"flex","justify-center","items-center","py-2.5"],["nz-button","","nzType","primary",3,"click"],[3,"nzType"],["nz-menu","","nzMode","inline",1,"sider-menu"],["nz-menu-item","",3,"click","nzSelected"],["nz-menu-item","",3,"nzSelected","click",4,"ngIf"],[1,"inner-layout"],[1,"content"],["nz-button","",2,"margin-bottom","15px",3,"click"],["nz-button","",2,"margin-left","15px",3,"click"],[1,"ml-2.5",3,"src"],["href","https://github.com/xjh22222228/nav/releases","target","_blank"],["src","https://img.shields.io/github/v/release/xjh22222228/nav",1,"ml-2.5"],["class","ml-2.5",4,"ngIf"],["nzSimple","","class","fixed-center",3,"nzSize",4,"ngIf"],[1,"ml-2.5"],["nzSimple","",1,"fixed-center",3,"nzSize"]],template:function(e,o){e&1&&(f(0,Oe,37,25,"nz-layout",0),y(1,"app-login",1)),e&2&&(r("ngIf",o.isLogin),n(),r("visible",o.showLoginModal))},dependencies:[M,b,he,Se,ze,ve,ee,Z,Y,oe,ie,te,ne,V,A,ue,pe,K,F],styles:[".system-layout[_ngcontent-%COMP%]{min-height:100vh}.system-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:30px;background-color:#fff;min-width:1200px}.system-layout[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{background-color:#fff}.system-layout[_ngcontent-%COMP%]   .inner-layout[_ngcontent-%COMP%]{margin-left:15px}.system-layout[_ngcontent-%COMP%]   .fixed-center[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10}"]})};export{E as default};
