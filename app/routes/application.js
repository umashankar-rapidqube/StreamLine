import Route from '@ember/routing/route';

//import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

//https://auth0.com/blog/create-your-first-ember-2-dot-0-app-from-authentication-to-calling-an-api/

export default Route.extend({
   model(){
       var urlstr=window.location.href;
       var access_token_pos = urlstr.search("access_token");
      
       if(access_token_pos!=-1){
           this.transitionTo('home')
       }
       this.transitionTo('login');
   }
});
