import Controller from '@ember/controller';
import { inject } from '@ember/service';
export default Controller.extend({
 session: inject('session'),
  selected: null,
      type: ['sick', 'maternity', 'function', 'preparation'],

      actions:{
       adminn:function(){
         var mycontroller=this;
         console.log("i am in controller");
         var auth = this.get('session').get('oauth');
         var authInfo = parseJwt(auth.access_token);
         console.log("hi",authInfo)
         var email=authInfo.unique_name;
         console.log("email",email)


         fetch('http://localhost:3000/api/report', {
                           method: 'POST',
                           headers: {
                               'Accept': 'application/json',
                               'Content-Type': 'application/json'

                           },

                           body: JSON.stringify({

                               "email": email,
                           }),
                       }).then((response) => response.json()).then((responseJson) => {
                          
console.log("dfhdjhfdh",responseJson)



                       })

         if(authInfo.unique_name=="bahi.rathy@rapidqube.com")
         {
           console.log("hiiii12324",authInfo)
           mycontroller.set('authInfo', authInfo)
           mycontroller.transitionToRoute('adminn')
                  }
         else{
           swal("You are Not Authorised");
         }


       },
          apply:function(name){
              this.set('type',name)
              var leaveType=this.get('leaveType');
              this.set("leaveType",leaveType);
              console.log("leaveType",leaveType)
              var reason=this.get('reason');
              this.set("loan",reason);
              console.log("reason",reason)
              var selectedRange=this.get('selectedRange');
            this.set("selectedRange",selectedRange);
              console.log("selectedRange",selectedRange)
              var starts=selectedRange.start;
              console.log("starts",starts)
              var end=selectedRange.end;
              console.log("end",end)

              if (leaveType === null || reason=== undefined || selectedRange=== undefined ) {
               // swal("please fill details for login");
               swal("Something Went Wrong", "please fill required details for leave approval!", "error");
           } else {
               let {
                 leaveType,
                 reason,
                 selectedRange,
               } = this.getProperties('leaveType', 'reason',' selectedRange');
               console.log(leaveType);
               console.log(reason);
               console.log(selectedRange);
             }
             var auth = this.get('session').get('oauth');
             var authInfo = parseJwt(auth.access_token);
             var userid = authInfo.unique_name;
              var transactionstring={
               "leaveType":leaveType,
               "reason":reason,
               "selectedRange":selectedRange,
               "status":"processing",
               "user":userid
              }
              console.log("transactionstring",selectedRange);
              console.log("transactionstring",(transactionstring));
           //    var mycontroller=this


              return $.ajax({
               url:'http://localhost:3000/api/leaves',
               type: 'POST',
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             },
               contentType: 'application/json',
               data: JSON.stringify(transactionstring),
               success: function(Response) {
               console.log(JSON.stringify(Response));
               var message = Response.message;
               swal(''+message+'');
               }
           })
          },

//           center: new Date(),

// range: {
//   start:  new Date("23/02/1994"),
//   end: new Date("23/02/1994")
// }
center: new Date('2016-05-17'),
  range: {
    start: new Date('2016-05-10'),
    end: new Date('2016-05-15')
  }

}




});
function parseJwt (token) {
 var base64Url = token.split('.')[1];
 var base64 = base64Url.replace('-', '+').replace('_', '/');
 return JSON.parse(window.atob(base64));
};