import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BookManager from  '@/components/bookManager/BookManager'
import BookIndex from '@/components/bookManager/Index'
import Dashboard from "@/components/bookManager/Dashboard";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      component: BookIndex,
      children:[
        {path:'',component:BookManager},
        {path:'dashboard',component:Dashboard}
      ]
    }
  ]
})
