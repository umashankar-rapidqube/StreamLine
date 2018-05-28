import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        var myIssueController = this.controllerFor('myissue');
        return myIssueController.get('type');
    }
});
