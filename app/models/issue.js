import DS from 'ember-data';

export default DS.Model.extend({
    issueType:DS.attr(),
    title:DS.attr(),
    date:DS.attr(),
    description:DS.attr(),
    status:DS.attr(),
    comments:DS.attr(),
    approverEmail:DS.attr()
});
