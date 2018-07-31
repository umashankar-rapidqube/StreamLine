import Controller from '@ember/controller';

export default Controller.extend({

    actions : {
        redirect : function(routename){
            if(routename==='myissue'){
                window.location.href = 'https://rapidqubedigital.sharepoint.com/Lists/IT%20Helpdesk/My%20Tickets.aspx'
            }
            else{
                this.transitionToRoute(routename)
            }
           
        }
    }
});
