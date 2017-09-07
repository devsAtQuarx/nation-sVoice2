<template>
  <div>
    <!--div class="fb-comments" data-href="https://voiceof-nation.firebaseapp.com/"
     data-width="inherit" data-numposts="5"></div-->
    comments => {{ $route.params.id }}

<div class="fb-like" data-href="updatedSpecNewsCommentsUrl" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
<div class="fb-comments" :data-href="updatedSpecNewsCommentsUrl" data-numposts="5"></div>
<button href="#test">#test</button>
<div id="test"></div>
<iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width="450" height="80" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

  </div>
</template>

<script>



export default{

  //data
  data(){
    return {
      specNewsCommentsUrl:'https://voiceof-nation.firebaseapp.com/app-specNewsComments'
    }
  },

  //methods
  methods:{
    someMethod(){
      window.fbAsyncInit = function() {
          FB.init({
            appId      : '1822465887769751',
            xfbml      : true,
            version    : 'v2.1'
          });
        };


        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = "//connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));
    }
  },

  //computed
  computed:{
    updatedSpecNewsCommentsUrl(){
      return this.specNewsCommentsUrl + '/' +this.$route.params.id
    }
  },

  beforeMount(){

      this.someMethod()


  }

}
</script>
