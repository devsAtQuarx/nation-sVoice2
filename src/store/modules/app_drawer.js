

//state
const state = {
    drawerOpen : null,
    isLoggedIn:false
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

export default {
  state,
  getters,
};
