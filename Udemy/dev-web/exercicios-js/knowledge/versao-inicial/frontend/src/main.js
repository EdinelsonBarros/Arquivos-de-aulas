// Meu dódigo
import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÁRIO!

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkVkaW5lbHNvbiBMaW1hIEJhcnJvcyIsImVtYWlsIjoiZWRpbmVsc29ubDk4QGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NzY0ODYzNzgsImV4cCI6MTY3Njc0NTU3OH0.9nmzy7QOJqpRsJ0sOUW8zJz833KXg3cQGjLA-laiXVw'

new Vue({
  store,
  router,
    render: h => h(App)
  }).$mount('#app')