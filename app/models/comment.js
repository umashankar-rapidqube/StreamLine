import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr('date'),
    commentText: DS.attr('string'),
    postedBy: DS.attr('string')
    });