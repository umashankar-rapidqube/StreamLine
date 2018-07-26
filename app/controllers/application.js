import Controller from '@ember/controller';

export default Controller.extend({
    

    actions:{
        tohome:function(){
            this.transitionToRoute('home');
        }
    }
});
