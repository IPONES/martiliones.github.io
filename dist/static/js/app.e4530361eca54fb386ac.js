webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={name:"app",data:function(){return{checked:!1,price:0,a:126e3,b:34e3,c:78030,result:0,thumb:document.getElementById("thumb"),strap:document.getElementById("strap"),thumb1:document.getElementById("thumb1"),strap1:document.getElementById("strap1"),thumb2:document.getElementById("thumb2"),strap2:document.getElementById("strap2"),thumb3:document.getElementById("thumb3"),strap3:document.getElementById("strap3"),thumb4:document.getElementById("thumb4"),strap4:document.getElementById("strap4")}},methods:{setValueover:function(){var t=document.getElementById("size").value,e=document.getElementById("size1").value,i=document.getElementById("size2").value,s=document.getElementById("size3").value,n=document.getElementById("size4").value;document.getElementById("price__gi").innerHTML=10340*t+5540*e+1234*i+1286*s+2344*n+this.price+",00 ₽",document.getElementById("price__ga").innerHTML=10340*t+5540*e+1234*i+1286*s+2344*n+this.price+33654+",00 ₽"},setValue:function(){document.getElementById("size").value;thumb.style.left="27.45px",strap.style.width="42.5px",thumb.innerHTML=85;document.getElementById("size1").value;thumb1.style.left="54.95px",strap1.style.width="70px",thumb1.innerHTML=140;document.getElementById("size2").value;thumb2.style.left="19.95px",strap2.style.width="35px",thumb2.innerHTML=70;document.getElementById("size3").value;thumb3.style.left="84.95px",strap3.style.width="100px",thumb3.innerHTML=200;document.getElementById("size4").value;thumb4.style.left="27.45px",strap4.style.width="42.5px",thumb4.innerHTML=85,document.getElementById("price__gi").innerHTML=2197320+this.price+",00 ₽",document.getElementById("price__ga").innerHTML=2197320+this.price+33654+",00 ₽"},setValue1:function(){document.getElementById("size").value;thumb.style.left="29.95px",strap.style.width="45px",thumb.innerHTML=90;document.getElementById("size1").value;thumb1.style.left="84.95px",strap1.style.width="100px",thumb1.innerHTML=200;document.getElementById("size2").value;thumb2.style.left="59.95px",strap2.style.width="75px",thumb2.innerHTML=150;document.getElementById("size3").value;thumb3.style.left="44.95px",strap3.style.width="60px",thumb3.innerHTML=120;document.getElementById("size4").value;thumb4.style.left="14.95px",strap4.style.width="30px",thumb4.innerHTML=60,document.getElementById("price__gi").innerHTML=2518660+this.price+",00 ₽",document.getElementById("price__ga").innerHTML=2518660+this.price+33654+",00 ₽"},setValue2:function(){document.getElementById("size").value;thumb.style.left="74.95px",strap.style.width="90px",thumb.innerHTML=180;document.getElementById("size1").value;thumb1.style.left="84.95px",strap1.style.width="100px",thumb1.innerHTML=200;document.getElementById("size2").value;thumb2.style.left="69.95px",strap2.style.width="85px",thumb2.innerHTML=170;document.getElementById("size3").value;thumb3.style.left="84.95px",strap3.style.width="100px",thumb3.innerHTML=200;document.getElementById("size4").value;thumb4.style.left="79.95px",strap4.style.width="95px",thumb4.innerHTML=190,document.getElementById("price__gi").innerHTML=3881540+this.price+",00 ₽",document.getElementById("price__ga").innerHTML=3881540+this.price+33654+",00 ₽"},greet:function(){this.checked?this.price=0:this.price=5e3},setPosition:function(){var t=document.getElementById("size").value;thumb.style.left=t<50?t+"px":t/2-15.05+"px",strap.style.width=t/2+"px",thumb.innerHTML=t},setPosition1:function(){var t=document.getElementById("size1").value;thumb1.style.left=t<50?t/2+15.05+"px":t/2-15.05+"px",strap1.style.width=t/2+"px",thumb1.innerHTML=t},setPosition2:function(){var t=document.getElementById("size2").value;thumb2.style.left=t<50?t+"px":t/2-15.05+"px",strap2.style.width=t/2+"px",thumb2.innerHTML=t},setPosition3:function(){var t=document.getElementById("size3").value;thumb3.style.left=t<50?t+"px":t/2-15.05+"px",strap3.style.width=t/2+"px",thumb3.innerHTML=t},setPosition4:function(){var t=document.getElementById("size4").value;thumb4.style.left=t<50?t+"px":t/2-15.05+"px",strap4.style.width=t/2+"px",thumb4.innerHTML=t}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app"},[i("h1",{staticClass:"app__title"},[t._v("\n      Конфигуратор Инфраструктуры\n    ")]),t._v(" "),i("div",{staticClass:"ServicesAndLicenses__title",staticStyle:{width:"100%","text-align":"center","margin-top":"20px","margin-bottom":"-23px"}},[t._v("Готовые решения")]),t._v(" "),i("div",{staticClass:"app__buttons"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],attrs:{type:"radio",id:"radio1",name:"radios"},domProps:{value:t.a,checked:t._q(t.result,t.a)},on:{change:function(e){t.result=t.a}}}),t._v(" "),i("label",{attrs:{for:"radio1"},on:{click:function(e){t.setValue()}}},[t._v("Small")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],attrs:{type:"radio",id:"radio2",name:"radios"},domProps:{value:t.b,checked:t._q(t.result,t.b)},on:{change:function(e){t.result=t.b}}}),t._v(" "),i("label",{attrs:{for:"radio2"},on:{click:function(e){t.setValue1()}}},[t._v("Medium")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],attrs:{type:"radio",id:"radio3",name:"radios"},domProps:{value:t.c,checked:t._q(t.result,t.c)},on:{change:function(e){t.result=t.c}}}),t._v(" "),i("label",{attrs:{for:"radio3"},on:{click:function(e){t.setValue2()}}},[t._v("Large")])]),t._v(" "),i("div",{staticClass:"ServicesAndLicenses__title",staticStyle:{width:"100%","text-align":"center","margin-top":"20px"}},[t._v("Настраиваемые параметры")]),t._v(" "),i("div",{staticStyle:{display:"flex"}},[i("div",{staticClass:"row"},[i("div",{staticStyle:{"text-align":"center","font-size":"13px",color:"gray","margin-bottom":"10px"}},[t._v("Количество CPU")]),t._v(" "),i("input",{attrs:{type:"range",min:"0",max:"180",step:"1",value:"130",id:"size"},on:{change:function(e){t.setPosition(),t.setValueover()}}}),t._v(" "),i("div",{staticClass:"row__text",attrs:{id:"thumb"}}),t._v(" "),i("div",{staticClass:"strap",attrs:{id:"strap"}})]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticStyle:{"text-align":"center","font-size":"13px",color:"gray","margin-bottom":"10px"}},[t._v("Объем RAM")]),t._v(" "),i("input",{attrs:{type:"range",min:"0",max:"200",step:"1",value:"130",id:"size1"},on:{change:function(e){t.setPosition1(),t.setValueover()}}}),t._v(" "),i("div",{staticClass:"row__text",attrs:{id:"thumb1"}}),t._v(" "),i("div",{staticClass:"strap",attrs:{id:"strap1"}})]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticStyle:{"text-align":"center","font-size":"13px",color:"gray","margin-bottom":"10px"}},[t._v("Место на диске HDD")]),t._v(" "),i("input",{attrs:{type:"range",min:"0",max:"200",step:"1",value:"130",id:"size2"},on:{change:function(e){t.setPosition2(),t.setValueover()}}}),t._v(" "),i("div",{staticClass:"row__text",attrs:{id:"thumb2"}}),t._v(" "),i("div",{staticClass:"strap",attrs:{id:"strap2"}})]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticStyle:{"text-align":"center","font-size":"13px",color:"gray","margin-bottom":"10px"}},[t._v("Место на диске SSD")]),t._v(" "),i("input",{attrs:{type:"range",min:"0",max:"200",step:"1",value:"130",id:"size3"},on:{change:function(e){t.setPosition3(),t.setValueover()}}}),t._v(" "),i("div",{staticClass:"row__text",attrs:{id:"thumb3"}}),t._v(" "),i("div",{staticClass:"strap",attrs:{id:"strap3"}})]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticStyle:{"text-align":"center","font-size":"13px",color:"gray","margin-bottom":"10px"}},[t._v("Backup")]),t._v(" "),i("input",{attrs:{type:"range",min:"0",max:"200",step:"1",value:"130",id:"size4"},on:{change:function(e){t.setPosition4(),t.setValueover()}}}),t._v(" "),i("div",{staticClass:"row__text",attrs:{id:"thumb4"}}),t._v(" "),i("div",{staticClass:"strap",attrs:{id:"strap4"}})])]),t._v(" "),i("div",{staticClass:"bg"},[i("div",{staticClass:"ServicesAndLicenses"},[i("span",{staticClass:"ServicesAndLicenses__title"},[t._v("Сервисы и лицензии")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],staticClass:"ServicesAndLicenses__switcher__input",attrs:{type:"checkbox",name:"watched",id:"switcher"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{click:function(e){t.greet()},change:[function(e){var i=t.checked,s=e.target,n=!!s.checked;if(Array.isArray(i)){var a=t._i(i,null);s.checked?a<0&&(t.checked=i.concat([null])):a>-1&&(t.checked=i.slice(0,a).concat(i.slice(a+1)))}else t.checked=n},function(e){t.setValueover()}]}}),t._v(" "),t._m(0)])]),t._v(" "),i("div",{staticClass:"tariff"},[i("div",{staticClass:"tariff__in"},[i("div",{staticClass:"tariff__in__tariff__title"},[t._v("Гарантированный")]),t._v(" "),i("div",{staticClass:"tariff__in__price",attrs:{id:"price__ga"}},[t._v(t._s(t.price+t.result+63400)+",00 ₽")]),t._v(" "),i("div",{staticClass:"tariff__in__in_date"},[t._v("В месяц")])]),t._v(" "),i("div",{staticClass:"tariff__in"},[i("div",{staticClass:"tariff__in__tariff__title"},[t._v("Гибкий")]),t._v(" "),i("div",{staticClass:"tariff__in__price",attrs:{id:"price__gi"}},[t._v(t._s(t.price+t.result+33600)+",00 ₽")]),t._v(" "),i("div",{staticClass:"tariff__in__in_date"},[t._v("В месяц")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"ServicesAndLicenses__switcher__label",attrs:{for:"switcher"}},[e("span",{staticClass:"switcher__text"},[this._v("Microsoft Windows")])])}]};var r=i("VU/8")(n,a,!1,function(t){i("dkJm"),i("pwCw")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:r}})},dkJm:function(t,e){},pwCw:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e4530361eca54fb386ac.js.map