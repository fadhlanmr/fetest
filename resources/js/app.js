require('./bootstrap');
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/index'

window.Vue = require('vue').default;
Vue.use(Vuex);

const app = new Vue({
    store,
    el: '#app',
    components: { App }
});
