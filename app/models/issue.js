import DS from 'ember-data';

export default DS.Model.extend({
        issueType: DS.attr('string'),
        title: DS.attr('string'),
        date: DS.attr('date'),
        description: DS.attr('string'),
        comments: DS.hasMany('comment'),
        status: DS.attr('string'),
        approverEmail: DS.attr('string')
    });


/*
"issues": [{
"id": 1,
"issueType": "foo",
"title": "foo",
"date": "2018-05-28T08:25:04.747Z",
"description": "foo",
"comments": [<comment ids>],
"status": "foo",
"approverEmail": "foo" }],
"comments": [{
"id": 1,
"date": "2018-05-28T08:25:04.747Z",
"postedBy": "foo",
"commentText": "foo" }]
*/