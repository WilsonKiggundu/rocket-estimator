import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'babel-polyfill' // IE11 and Safari 9 support for vuetify

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
