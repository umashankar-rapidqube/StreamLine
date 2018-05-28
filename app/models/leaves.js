import DS from 'ember-data';

export default DS.Model.extend({
    
    leave:DS.attr(),
    reason:DS.attr(),
    noOfDays:DS.attr(),
    currentbalance:DS.attr(),
    leaveInfo:DS.hasMany('leave')
});
