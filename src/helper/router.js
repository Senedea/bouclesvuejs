import  Vue  from  'vue'
import  Router  from  'vue-router'
import Bingo from '../components/pages/Bingo.vue'
import Clips from '../components/pages/Clips.vue'
import Faq from '../components/pages/Faq.vue'
import LaMano from '../components/pages/LaMano.vue'
import LeServ from '../components/pages/LeServ.vue'
import LesVerts from '../components/pages/LesVerts.vue'
import LosVagos from '../components/pages/LosVagos.vue'
import Memes from '../components/pages/Memes.vue'
import Police from '../components/pages/Police.vue'
import Prediction from '../components/pages/Prediction.vue'
import Home from '../components/pages/Home.vue'
import Chronique from '../components/pages/Chronique.vue'

Vue.use(Router)
const router = new  Router({
    mode:  'history',
    base:  '/',
    routes: [
              {
              path: '/bingo',
              name: 'bingo',
              component: Bingo
          },  
          {
            path: '/clips',
            name: 'clips',
            component: Clips
        }, 
        {
            path: '/faq',
            name: 'faq',
            component: Faq
        },
        {
            path: '/lamano',
            name: 'lamano',
            component: LaMano
        },
        {
            path: '/leserv',
            name: 'leserv',
            component: LeServ
        },
        {
            path: '/lesverts',
            name: 'lesverts',
            component: LesVerts
        },
        {
            path: '/losvagos',
            name: 'losvagos',
            component: LosVagos
        },
        {
            path: '/memes',
            name: 'memes',
            component: Memes
        },
        {
            path: '/police',
            name: 'police',
            component: Police
        },
        {
            path: '/prediction',
            name: 'prediction',
            component: Prediction
        },
        {
            path: '/chroniques',
            name: 'chronique',
            component: Chronique
        },
        
          {
              path:  '/',
              alias: '/home',
              name:  'home',
              component:  Home
          },
          
          {
              path: '/*',
              redirect: { name: 'home' }
          }
          
    ]
})
export  default  router;