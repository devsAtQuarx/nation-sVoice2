import Firebase from 'firebase'
const mutations = {

      fbLogOut(){
        Firebase.auth().signOut().then(function() {
        // Sign-out successful.
        this.$router.go(-1)
        }).catch(function(error) {
        // An error happened.
        });
          console.log("signedout");
      }
};
  export default {
    mutations
  };
