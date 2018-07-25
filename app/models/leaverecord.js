import DS from 'ember-data';

export default DS.Model.extend({
        date: DS.attr('date'),
        reason: DS.attr('string'),
        from: DS.attr('date'),
        to: DS.attr('date'),
        leaveType: DS.attr('string'),
        status: DS.attr('string')
    });