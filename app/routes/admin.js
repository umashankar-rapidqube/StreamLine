import Route from '@ember/routing/route';

export default Route.extend({
    model: function() {
        var mycontroller=this;    

        var url = 'http://localhost:3000/api/leaves';
        return Ember.$.getJSON(url).then(function(data) {
            console.log("data",data.leave);
            mycontroller.controllerFor('admin').set('showleaves', data.leave)

        });
      }
});




