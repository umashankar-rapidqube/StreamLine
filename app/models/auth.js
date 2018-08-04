import DS from 'ember-data';

export default DS.Model.extend({
    accessToken: DS.attr('string'),
    tokenType: DS.attr('string'),
    expiresIn: DS.attr('string'),
    scope: DS.attr('string'),
    idToken: DS.attr('string'),
    state: DS.attr('string'),
    sessionState: DS.attr('string')
    });
