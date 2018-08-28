import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
    session: inject('session'),
   
    model(){        
         var _userid = this.get('session').get('userid')
         console.log(_userid)
         return this.get('store').query('leave',{'userid':_userid})    
        }
  
});
