import Route from '@ember/routing/route';

export default Route.extend({

    model(){    
        var mycontroller=this;    
    return $.ajax({
           
            url: 'http://localhost:3000/api/ideabox?userid=5b5ad13fb671cd3aa0f6e473',
            type: 'GET',
            contentType: 'application/json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function(Response) {
                var showrecords = Response.ideas;
                console.log("Allrequest", showrecords)
                mycontroller.controllerFor('ideabox').set('showrecords', showrecords)

               
            }
        });

    },
})