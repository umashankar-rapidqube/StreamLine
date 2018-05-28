import DS from 'ember-data';

export default DS.Model.extend({
    date:DS.attr(),
    reason:DS.attr(),
    from:DS.attr(),
    to:DS.attr(),
    noOfDays:DS.attr(),
    status:DS.attr()
});
