import Controller from '@ember/controller';

export default Controller.extend({
    leavetypes: ['earned-leave', 'sick', 'maternity'],
    type:null,
    actions:{
        choose:function(type){
            this.set('type',type)
        }
    }
        
});
