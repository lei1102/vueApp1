import Vue from 'vue'
import App from './App.vue'

// 引入公共css
import './assets/css/main.css'
Vue.config.productionTip = false

// 自定义ajax
Vue.prototype.ajax = {
  request: function(obj) {
      //创建对象
      var xmlhttp;
      if(window.XMLHttpRequest) {
          xmlhttp = new XMLHttpRequest();
      } else {
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }

      if(obj.method == 'get') {
          xmlhttp.open(obj.method, obj.url+"?"+obj.data+"&"+Math.random(), true);
          xmlhttp.send();
      } if(obj.method == 'post') {
          xmlhttp.open(obj.method, obj.url, true);
          xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
          xmlhttp.send(obj.data);
      }

      xmlhttp.onreadystatechange = function () {
          if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              if(obj.dataType == 'xml') {
                  obj.callback(xmlhttp.responseXML);
              } else if(obj.dataType == 'text') {
                  eval("var res = " + xmlhttp.responseText);
                  obj.callback(res);
              }
          }
      }
  }
}

new Vue({
  render: h => h(App),
}).$mount('#app')
