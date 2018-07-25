import DS from 'ember-data';

export default DS.Model.extend({
    client_id:DS.attr(),
    refresh_token:DS.attr(),
    grant_type:DS.attr(),
    resource:DS.attr(),
    client_secret:DS.attr(), 
});
