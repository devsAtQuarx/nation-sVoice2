//state
const state = {
  newsArr : [],
  c : 0,
  showLoader : true
};

//getters
const getters = {
  newsArr : state => {
    return state.newsArr
  },
  c : state => {
    return state.c
  },
  showLoader : state => {
    return state.showLoader
  }
};


export default {
  state,
  getters
};
