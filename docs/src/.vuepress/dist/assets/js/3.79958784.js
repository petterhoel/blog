(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{266:function(e,t,n){},289:function(e,t,n){"use strict";n(266)},292:function(e,t,n){"use strict";n.r(t);var s=n(13),a=n(1);const o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={name:"SWUpdatePopup",data:()=>({rawPopupConfig:{message:"Please refresh for updates",buttonText:"Refresh"},updateEvent:null}),computed:{popupConfig(){return Object(a.h)(this,this.rawPopupConfig)},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const e=this.popupConfig;return e&&e.message||o["/"].message},buttonText(){const e=this.popupConfig;return e&&e.buttonText||o["/"].buttonText}},created(){s.a.$on("sw-updated",this.onSWUpdated),!0==={message:"Please refresh for updates",buttonText:"Refresh"}&&(this.rawPopupConfig=o)},methods:{onSWUpdated(e){this.updateEvent=e},reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{location.reload(!0)}),this.updateEvent=null)}}},p=(n(289),n(17)),i=Object(p.a)(u,(function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"sw-update-popup"}},[e._t("default",(function(){return[e.enabled?t("div",{staticClass:"sw-update-popup"},[e._v("\n      "+e._s(e.message)+"\n\n      "),t("br"),e._v(" "),t("button",{on:{click:e.reload}},[e._v("\n        "+e._s(e.buttonText)+"\n      ")])]):e._e()]}),{reload:e.reload,enabled:e.enabled,message:e.message,buttonText:e.buttonText})],2)}),[],!1,null,"fec8b358",null);t.default=i.exports}}]);