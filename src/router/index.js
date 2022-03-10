import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import News from '../components/News.vue'
import MainText from '../components/MainText'
import Cards from '../components/Cards'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Home
    components: {
      header: Header,
      news: News,
      mainText: MainText,
      cards: Cards,
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
