import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    domain: DS.attr('string'),
    description: DS.attr('string'),
    email: DS.attr('string'),
    suggestions: DS.attr('string')
    });