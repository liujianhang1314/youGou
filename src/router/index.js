import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '@/components/Tabbar'
import Home from '@/components/Home'
import Classify from '@/components/Classify'

import Sharebuy from '@/components/Sharebuy'
import Shopcar from '@/components/Shopcar'
import Mine from '@/components/Mine'
import Juan from '@/components/home/Juan'

import Login from '@/components/home/Login'
import Denglu from '@/components/home/Denglu'
import List from '@/components/home/List'

import Buypage from '@/components/home/Buypage'
import mydingdan from '@/components/mine/mydingdan'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'tabbar',
      component: Tabbar,
       redirect:'/home',
      children:[
 
              {
              	path:'/home',
              	name:'home',
              	component:Home
              },
                  {
              	path:'/classify',
              	name:'classify',
              	component:Classify
              },
                  {
              	path:'/sharebuy',
              	name:'sharebuy',
              	component:Sharebuy
              },
                  {
              	path:'/mine',
              	name:'mine',
              	component:Mine
              }
              ]
    },
    {
      path:'/juan',
      name:'juan',
      component:Juan
    },
    {
      path:'/list',
      name:'list',
      component:List
    },
    {
      path:'/buypage',
      name:'buypage',
      component:Buypage
    },
      {
       path:'/shopcar',
      name:'shopcar',
     component:Shopcar
      },
      {
       path:'/mydingdan',
      name:'mydingdan',
     component:mydingdan
      },
      {
        path:"*",
        redirect:"/index/home"
      },
              
              {
                path:'/denglu',
                name:'denglu',
                component:Denglu
              },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})
