import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        //debugger;
        //console.log(this.get('store').findAll('leave'));
        return this.get('store').findAll('leave');
    }
  
});
