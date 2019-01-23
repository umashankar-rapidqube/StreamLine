import Route from '@ember/routing/route';
import { inject } from '@ember/service';


export default Route.extend({
    session: inject('session'),

    
    model(){
        var mycontroller=this.controllerFor('leaves')
        //  var _userid = this.get('session').get('userid')
        //  console.log(_userid)
        var auth = this.get('session').get('oauth');
        var authInfo = parseJwt(auth.access_token);
        return this.get('store').query('leave',{'userid':authInfo.unique_name}) 
        console.log("leavesssss", authInfo)
       // mycontroller.set('authInfo', authInfo);
       mycontroller.set('adminn',authInfo)
        }
        
});
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
    
};

// var createpolicyController = this.controllerFor('createpolicy');
// var user = this.controllerFor('login').get('rescountvalue');
// // var gvalue=[],

// console.log("createpolicyroute", user)

// createpolicyController.set('user', user);
// console.log(createpolicyController.get('user'));
// //mycontroller.set('getid', user)

// }