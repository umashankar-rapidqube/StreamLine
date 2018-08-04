import DS from 'ember-data';
import { inject } from '@ember/service';
import { computed } from '@ember/object';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
    session: inject('session'),
    headers: computed(function() {
        var auth = this.get('session').get('oauth');
                return {            
          'Authorization': 'Bearer '+auth.id_token
        };
    }),

    //host: 'https://api.example.com'
    //host: 'https://streamline-backoffice.herokuapp.com',
    host: ENV.APP.host,    
    namespace: 'api',
    
    
});
