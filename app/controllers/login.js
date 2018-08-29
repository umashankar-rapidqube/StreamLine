import Controller from '@ember/controller';
import ENV from '../config/environment';

export default Controller.extend({
    loginactive: true,
    registeractive:true,
    session: Ember.inject.service('session'),
    actions: {
        

        toggle : function(tab){  
            this.set('loginactive',false) 
            this.set('registeractive',true) 

            if(tab==='login')  {
                this.set('loginactive',true) 
                this.set('registeractive',false) 
            }    
           
                 
        },
        login:function(){        
           var authurl = ENV.APP.authurl;
           var client_id = ENV.APP.client_id;
           var resp_type_query = ENV.APP.resp_type_query;
           var redirect_uri_query = ENV.APP.redirect_URI;
           var other_params = ENV.APP.other_params;
           window.location = authurl+client_id+resp_type_query+redirect_uri_query+other_params;
           this.transitionToRoute('home')
        },

        parseJwt: function(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            console.log(JSON.parse(window.atob(base64))) ;
        }
        

        
    }
});
