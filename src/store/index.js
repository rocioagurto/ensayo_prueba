import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import Firebase from 'firebase'

Vue.use(Vuex)

const baseURL = 'https://us-central1-ensayo-prueba.cloudfunctions.net/courses'
function setInStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj))
}
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}
function emptyCourse(){
  return{
    id:null,
    data:{
      name: '',
      description: '',
      img: ''
    }
  }
}
export default new Vuex.Store({
  state: {
    courses: [],
    loading: false,
    currentUser: getFromStorage('user') || undefined,
    currentCourse: emptyCourse(),
    edit: false
  },
  mutations: {
    LOADING_COURSES(state){
      state.loading = !state.loading
   },
   GET_COURSES(state,courses){
    state.courses = []
    courses.forEach((c) => {
      c['qty'] = 1
      state.courses.push(c)
    })
    state.loading = false
  },
    UPDATE_CURRENTUSER(state, user) {
      state.currentUser = user
      setInStorage('user', user)
    },
  },
  actions: {
    updateUser({commit}, user){
      return new Promise((resolve, reject) => {
        try{ 
          commit('UPDATE_CURRENTUSER', user)
          resolve(user)
        } catch(e) { reject(e) }
      })
    },
    getCourses({commit}){
      commit('LOADING_COURSES')
      //carga o no carga info
      axios.get(`${baseURL}/courses`, {headers: {"Content-type": "text/plain"}})
      .then((accept)=> {
        let data = accept.data;
        commit('GET_COURSES', data)
        
      })
    },
   

  },
  getters: {
    isLoggedIn: state => !!state.currentUser,
    currentUser: state => state.currentUser
  }
})



