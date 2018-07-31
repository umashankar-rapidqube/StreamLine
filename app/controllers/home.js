import Controller from '@ember/controller';

export default Controller.extend({

    actions : {
        redirect : function(routename){
            if(routename==='myissue'){
                window.open(
                    'https://rapidqubedigital.sharepoint.com/Lists/IT%20Helpdesk/My%20Tickets.aspx',
                    '_blank' // <- This is what makes it open in a new window.
                  );
               
            }
            else{
                this.transitionToRoute(routename)
            }
           
        }
    }
});
