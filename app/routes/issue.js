import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        let issue = this.get('store').findRecord('issue', params.id);
        console.log(issue)
    }
});
