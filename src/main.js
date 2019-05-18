//入口文件

//导入 vue
import Vue from "vue"

//导入 路由
import VueRouter from "vue-router"

Vue.use(VueRouter)

//导入 iview
import iview from "iview"

//导入 iview 样式
import 'iview/dist/styles/iview.css';

Vue.use(iview)

//导入 app
import app from "./app.vue"


var vm = new Vue({
  el: "#app",
  data: {
    msg: "我是你爹"
  },
  render:function(createElements){
    return createElements(app)
  },
  // router:routerobj
})