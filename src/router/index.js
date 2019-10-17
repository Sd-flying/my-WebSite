import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Welcome from '@/components/welcome'
import Page1 from '@/components/page1'
import Page2 from '@/components/page2'
import Page5 from '@/components/page5'
import Page7 from '@/components/page7'
import Login from '@/components/login'
import Error from '@/components/errorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/welcome',
      component: Home,
      children: [
        {
          path: '/welcome',
          component: Welcome
        },
        {
          path: '/page1',
          component: Page1
        },
        {
          path: '/page2',
          component: Page2
        },
        {
          path: '/page5',
          component: Page5
        },
        {
          path: '/page7',
          component: Page7
        },
        {
          path: '/login',
          component: Login
        }
      ],
    },
    //全不匹配的情况下，跳转到error页面
    {
      path: '*',
      component: Error
    }

  ]
})
