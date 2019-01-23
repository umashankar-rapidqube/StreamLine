import Controller from '@ember/controller';

export default Controller.extend({ 
    ajax: Ember.inject.service(),

    adminn: {
      submit(leaves) {
        console.log("clicked", leaves);
        var transactionstring = {
          "id": leaves.id,
          "user":leaves.user,
          "status": "Approved",
          "start": leaves.from,
          "end": leaves.to,
        }
  
        return $.ajax({
          url: 'http://localhost:3000/api/updateLeave',
          type: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          contentType: 'application/json',
          data: JSON.stringify(transactionstring),
          success: function (Response) {
            console.log(JSON.stringify(Response));
            var message = Response.message;
            // swal('' + message + '');
            window.location.reload(true);
          }
        })
      },
      rejected(leaves) {
        console.log("Rejected", leaves);
        var transactionstring = {
          "id": leaves.id,
          "user":leaves.user,
          "status": "Rejected",
          "start": leaves.from,
          "end": leaves.to,
        }
  
        return $.ajax({
          url: 'http://localhost:3000/api/updateLeave',
          type: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          contentType: 'application/json',
          data: JSON.stringify(transactionstring),
          success: function (Response) {
            console.log(JSON.stringify(Response));
            var message = Response.message;
            // swal('' + message + '');
            window.location.reload(true);
          }
        })
      }
    }

});