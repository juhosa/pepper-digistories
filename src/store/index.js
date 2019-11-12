import Vue from 'vue'
import Vuex from 'vuex'
import stories from './modules/digistories'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    stories
  }
})

export default store
