import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    //host: 'https://api.example.com'
    host: 'https://streamline-backoffice.herokuapp.com',
    //host: 'http://localhost:5000',
    
    namespace: 'api'
    
});
