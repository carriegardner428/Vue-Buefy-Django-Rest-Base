import Vue from 'vue'
import store from '@/store'
import router from '@/router'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import "./vee-validate";

Vue.use(Buefy)

import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


import VueAnalytics from 'vue-analytics'

import VueRaven from 'vue-raven'

import App from '@/App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false


// Sentry for logging frontend errors
Vue.use(VueRaven, {
  dsn: process.env.VUE_APP_SENTRY_PUBLIC_DSN,
  disableReport: process.env.NODE_ENV === 'development'
})



// more info: https://github.com/MatteoGabriele/vue-analytics
Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GOOGLE_ANALYTICS,
  router
})




new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
