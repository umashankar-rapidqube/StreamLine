import Controller from '@ember/controller';

export default Controller.extend({

    actions:{
        postComment : function(id, comment){
            console.log("comment posted", id, comment);
        }
    }
});
