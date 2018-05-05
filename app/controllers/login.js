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
            this.transitionToRoute('home')
        }

        
    }
});
