import Route from '@ember/routing/route';

//import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

//https://auth0.com/blog/create-your-first-ember-2-dot-0-app-from-authentication-to-calling-an-api/

export default Route.extend({
    session: Ember.inject.service('session'),
    model(){
      
        

        console.log("application model is called");
       

       var paramarray = parseHashParams(window.location.hash)

       if(paramarray!=0){
        this.get('session').set('oauth',paramarray);
        this.transitionTo('home');
       }
       
       this.transitionTo('login');
   }
});

function parseHashParams(hash) {
    var params = hash.slice(1).split('&');
  
    var paramarray = {};
    params.forEach(function(param) {
      param = param.split('=');
      paramarray[param[0]] = param[1];
    });
  
    return paramarray;
  }