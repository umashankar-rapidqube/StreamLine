import Controller from '@ember/controller';

export default Controller.extend({
  
       actions:{
           submit:function(name){
               this.set('type',name)
               var title=this.get('title');
               this.set("title",title);
               console.log("title",title)
               var domain=this.get('domain');
               this.set("domain",domain);
               console.log("domain",domain)
               var email=this.get('email');
               this.set("email",email);
               console.log("email",email)
               var suggestions=this.get('suggestions');
               this.set("suggestions",suggestions);
               console.log("suggestions",suggestions)
               var description=this.get('description');
               this.set("description",description);
               console.log("description",description)
              
               
               if (title === null || domain=== undefined||  email=== undefined || suggestions=== undefined || description=== undefined ) {
                // swal("please fill details for login");
                swal("Something Went Wrong", "please fill required details before posting ideas", "error");
            } else {
                let {
                  title,
                  domain,
                  email,
                  suggestions,
                  description
                } = this.getProperties('title', 'domain','email','suggestions','description');
                console.log(title);
                console.log(domain);
                console.log(email);
                console.log(suggestions);
               console.log(description)
              }
               var transactionstring={
                "title":title,
                "domain":domain,
                "email":email,
                "suggestions":suggestions,
                "description":description
               }
               console.log("transactionstring",(transactionstring));
            //    var mycontroller=this
 
               return $.ajax({  
                url:'http://localhost:3000/api/ideabox',
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
        
           center: new Date(),
 range: {
   start: new Date("January 6, 2013"),
   
   end: new Date("January 6, 2013")
 }
 
       }
    

       
});
