import Controller from '@ember/controller';

export default Controller.extend({
   selected: null,
       type: ['sick', 'meternary', 'function', 'preparation'],

       actions:{
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
               var transactionstring={
                "leaveType":leaveType,
                "reason":reason,
                "selectedRange":selectedRange,
                "status":"processing",
                
               }
               console.log("transactionstring"+JSON.stringify(transactionstring));
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
                success: function(response) {
                console.log(JSON.stringify(response));
                var message = response.message;
                }
            })  
           },
        
           center: new Date('2016-05-17'),
 range: {
   start: new Date('2016-05-10'),
   end: new Date('2016-05-15')
 }
 
       }
    

       
});
