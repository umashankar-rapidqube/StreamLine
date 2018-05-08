import Controller from '@ember/controller';

export default Controller.extend({
    issuetypes: ['Infra', 'Finance', 'HR', 'Other'],
    type:null,
    actions:{
        choose:function(type){
            this.set('type',type)
        },
        createIssue:function(){
            
        }
    }
});
