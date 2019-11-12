import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/views/IndexView'
import StoryView from '@/views/StoryView'

Vue.use(Router)

export default new Router({
  // mode: 'history',

  routes: [
    {
      path: '/',
      name: 'IndexView',
      component: IndexView
    },

    {
      path: '/story',
      name: 'StoryView',
      component: StoryView
    }
  ]
})
