import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import routes, {
  getMenuData //
} from "./router.config.js"
Vue.use(Router)
// console.log(getMenuData())

export default new Router({
  routes,
  getMenuData
})
