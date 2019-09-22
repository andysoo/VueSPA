import VueRouter from 'vue-router'
import store from './store';
import jwtToken from './helpers/JWT';
const routes =[
  {
     path: '/', 
     name:'home',
     component: require('./components/pages/Home'),
     meta:{}
  },  
  {
    path:'/post/:id',
    name:'post',
    component:require('./components/posts/Post'),
    meta:{}
  },
  {
    path:'/register',
    name:'register',
    component:require('./components/register/Register'),
    meta:{requireGuest:true}
  },
  {
    path:'/login',
    name:'login',
    component:require('./components/login/Login'),
    meta:{requireGuest:true}
  },
  {
    path:'/confirm',
    name:'confirm',
    component:require('./components/confirm'),
    meta:{}
  },
  {
    path:'/profile',
    name:'profile',
    component:require('./components/user/Profile'),
    meta:{requireAuth:true}
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

router.beforeEach((to, from, next) => {
   
  if(to.meta.requireAuth){
    if(store.state.authUser.authenticated || jwtToken.getToken()){
      return next()
    }else{
      return next({name:'login'})
    }   
  }
  if(to.meta.requireGuest){
    if(store.state.authUser.authenticated || jwtToken.getToken()){
      return next({name:'home'})
    }else{
      return next()
    }
  }  
    next()    
})

export default router