import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        debugger;
       alert(params)
        return this.get('store').findRecord('issue', params.id);        
    }
});
