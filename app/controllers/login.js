import Controller from '@ember/controller';

export default Controller.extend({
    loginactive: true,
    registeractive:true,
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
           //window.location = "http://localhost:3000/login";
           //window.location = "https://streamline-backoffice.herokuapp.com/login";
           var authurl = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?';
           var client_id = 'client_id=e1f1830e-d3d7-451a-a213-54f9c8f02d67';
           var resp_type_query = '&response_type=id_token+token'
           //var redirect_uri_query = '&redirect_uri=http://localhost:4200/'
           var redirect_uri_query = '&redirect_uri=https://rapidqube-streamline.herokuapp.com/'
           var other_params = '&scope=openid%20https%3A%2F%2Fgraph.microsoft.com%2mail.read&response_mode=fragment&state=12345&nonce=678910';
           window.location = authurl+client_id+resp_type_query+redirect_uri_query+other_params;
           //this.transitionToRoute('home')
        },

        parseJwt: function(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            console.log(JSON.parse(window.atob(base64))) ;
        }
        

        
    }
});
