import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
    session: inject('session'),
    model(){
        var auth = this.get('session').get('oauth');
        var authInfo = parseJwt(auth.access_token);
        return this.get('store').queryRecord('employee',{'email':authInfo.unique_name})
                        .then((userInfo)=>{
                            this.get('session').set('userid',userInfo.id);
                        })
       
    }
});


function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};