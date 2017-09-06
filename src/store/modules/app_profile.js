
import Firebase from 'firebase'
//state
const state = {

    drawerOpen : null,
    isLoggedIn:false,
    drawerOpen : null
};

//getters
const getters = {
  drawerOpen:state=>{
    return state.drawerOpen
  },
  isLoggedIn:state=>{
    return state.isLoggedIn
  },
  userDetail: state=>{
    return state.userDetail
  }
};

const mutations = {

      fbLogOut(){
        Firebase.auth().signOut().then(function() {
        // Sign-out successful.
        }).catch(function(error) {
        // An error happened.
        });
      }
};

export default {
  state,
  getters,
  mutations
};
