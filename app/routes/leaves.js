import Route from '@ember/routing/route';


export default Route.extend({
    model(){
         return this.get('store').query('leave',{userid:'5b5ad13fb671cd3aa0f6e473'})    
        }
  
});
