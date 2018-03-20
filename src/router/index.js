import Vue from 'vue'
import Router from 'vue-router'
import Tomasulo from '@/components/Tomasulo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tomasulo',
      component: Tomasulo
    }
  ]
})
