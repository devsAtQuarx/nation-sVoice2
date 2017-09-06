import Firebase from 'firebase'

const mutations = {
      //loggin funv
      fbLogIn(){
        var provider = new Firebase.auth.FacebookAuthProvider()
        Firebase.auth().signInWithRedirect(provider)
        Firebase.auth().getRedirectResult()
        .then(function(result) {
          if (result.credential) {
          
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            //console.log(token);
            // ...

          }
          // The signed-in user info.
          var user = result.user;
        }).catch(function(error) {

          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        })

      }
  }
  export default {
    mutations
  };
