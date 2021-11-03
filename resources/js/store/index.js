import Vue from 'vue';
import Vuex from 'vuex';
import pipe from './modules/pipe'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        pipe
    }
})