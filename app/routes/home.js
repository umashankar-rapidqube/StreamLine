import Route from '@ember/routing/route';

export default Route.extend({
    session: Ember.inject.service('session'),
    model(){

        console.log(this.get('session').get('oauth'));
       this.get('store').findAll('auth').then((token_details)=>{
            for(var item in token_details){
                console.log(item)
            }
       })
        
        return;
    }
});
