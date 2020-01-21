import Vue from 'vue'
import App from '@/app.vue'
import router from '@/router'
import ComponentName from '@bszhct/template-vue-component'
import LayoutCard from '@/components/layout-card'

Vue.config.productionTip = false
Vue.use(ComponentName)

Vue.component('layout-card', LayoutCard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
