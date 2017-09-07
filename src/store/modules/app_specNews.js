//state
const state = {
  specNews : {}
};

//getters
const getters = {
  specNews : state => {
    return state.specNews
  }
};


export default {
  state,
  getters
};
