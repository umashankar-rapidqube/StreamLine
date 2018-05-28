import DS from 'ember-data';

export default DS.Model.extend({
    remainingLeaves: DS.attr('number'),
    leaves: DS.hasMany('leave')
    });

    /*
    "leaves": [{
"id": 1,
"remainingLeaves": 123,
"leaves": [<leave ids>] }],
"leaves": [{
"id": 1,
"date": "2018-05-28T08:25:04.747Z",
"reason": "foo",
"from": "2018-05-28T08:25:04.747Z",
"to": "2018-05-28T08:25:04.747Z",
"status": "foo",
"leaveType": "foo" }]

    */