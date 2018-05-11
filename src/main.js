// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { VueEditor, Quill } from 'vue2-editor'

// bootstrap
import jQuery from 'jquery'
global.jQuery = jQuery
let bootstrap = require('bootstrap')

// firebase
var VueFire = require('vuefire')
var Firebase = require('firebase')
Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
