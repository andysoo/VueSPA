import JWTToken from './../../helpers/JWT';
export default {
  namespaced: true,
  state: {
    authenticated:false,
    name:null,
    email:null
  },
  mutations: {
    setAuthenticated(state,status){
      state.authenticated = status
    },
    setName(state,name){
      state.name = name
    },
    setEmail(state,email){
      state.email = email
    },
  },
  actions: {
    loginRequest({dispatch},formData){
      axios.post('/api/login', formData).then(response => {
        JWTToken.setToken(response.data.token)      
      }).catch(error => {
        console.log(error.response.data)
      })
    },
    getAuthUser({commit}){
     axios.get('/api/user').then(response=>{
        commit('setAuthenticated',true)
        commit('setName',response.data.name)
        commit('setEmail',response.data.email)
      })
    }
  }
}