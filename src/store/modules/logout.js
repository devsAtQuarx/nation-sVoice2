import Firebase from 'firebase'
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
  mutations
};
