// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@/css/app.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import { axiosConfig } from '@/config'


import App from './App'
import { createStore } from '@/store/index'
import { createRouter } from './router'

Vue.config.productionTip = false

Vue.use(VueAxios, axios.create(axiosConfig))

const router = createRouter()
const store = createStore()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,
  components: { App },
  template: '<App/>',

  created: () => {
    console.log('created')
  }
})
