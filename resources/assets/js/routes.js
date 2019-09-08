import VueRouter from 'vue-router'
const routes =[
  {
     path: '/', 
     component: require('./components/pages/Home')
  },  
  {
    path:'/post/:id',
    name:'post',
    component:require('./components/posts/Post')
  },
  {
    path:'/register',
    name:'register',
    component:require('./components/register/Register')
  },
  {
    path:'/confirm',
    name:'confirm',
    component:require('./components/confirm')
  }
]

export default new VueRouter({
  mode:'history',
  routes
  })