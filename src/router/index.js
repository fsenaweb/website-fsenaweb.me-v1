import Vue from 'vue'
import Router from 'vue-router'
import Sobre from '@/components/sobre/Index'
import Index from '@/components/home/Index'
import Blog from '@/components/blog/Index'
import PageBlog from '@/components/blog/Page'
import Portfolio from '@/components/portfolio/Index'
import Contact from '@/components/contato/Index'
import Error from '@/components/layout/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/:id',
      name: 'PageBlog',
      component: PageBlog
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/contatos',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
