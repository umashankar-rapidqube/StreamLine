import Controller from '@ember/controller';

export default Controller.extend({

    actions : {
        redirect : function(routename){
            this.transitionToRoute(routename)
        }
    }
});
