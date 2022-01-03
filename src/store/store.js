import Vue from 'vue'
import Vuex from 'vuex'

import { bugStore } from './bug.store.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  modules: {
    bugStore,
  },
  state: {},
  mutations: {},
  actions: {},
})
