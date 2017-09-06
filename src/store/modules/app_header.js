//state
const state = {
  showBackBut : false,
  showToolbar : false,
  headerTitle : 'junk'
};

//getters
const getters = {
  showBackBut : state => {
    return state.showBackBut
  },
  showToolbar : state => {
    return state.showToolbar
  },
  headerTitle : state => {
    return state.headerTitle
  }
};


export default {
  state,
  getters
};
