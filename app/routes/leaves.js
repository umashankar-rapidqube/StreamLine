import Route from '@ember/routing/route';


export default Route.extend({
    model(){
         return this.get('store').query('leave',{userid:'5b65d6d0ed318f03e7bbd609'})    
        }
  
});
