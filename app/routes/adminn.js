import Route from '@ember/routing/route';

export default Route.extend({
    model: function() {
       

// var adminController = this.controllerFor('adminn');
//         var user = this.controllerFor('leaves').get('authInfo');
//         // var gvalue=[],

//         console.log("admincontrol", user)

//         adminController .set('user', user);


//         console.log("jjjjdfdh",adminController.get('user'));

//         var url = 'http://localhost:3000/api/leaves';
//         return Ember.$.getJSON(url).then(function(data) {
//             console.log("data",data.leave);
//             adminController.set('showleaves', data.leave)

//         });
//       }
var mycontroller=this;    

var url = 'http://localhost:3000/api/leaves';
return Ember.$.getJSON(url).then(function(data) {
    console.log("data",data.leave);
    mycontroller.controllerFor('admin').set('showleaves', data.leave)

});
}

});
