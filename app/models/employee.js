import DS from 'ember-data';

export default DS.Model.extend({
    fname: DS.attr('string'),
    lname: DS.attr('string'),
    type: DS.belongsTo('author'),
    email: DS.attr('string'),
    doj: DS.attr('date'),
    address1: DS.attr('string'),
    address2: DS.attr('string'),
    reporting: DS.attr('string'),
    dept: DS.attr('string'),
    allocation: DS.attr('string'),
    leaveBalance: DS.attr('number'),
    rapidcash: DS.attr('number'),
    mobile: DS.attr('string')
    });