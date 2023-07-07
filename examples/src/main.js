import Vue from 'vue'
import App from './App.vue'
import demo from '../../dist/demo-components.umd'
import  '../../dist/demo-components.css'

Vue.config.productionTip = false

Vue.use(demo)
new Vue({
  render: h => h(App),
}).$mount('#app')
