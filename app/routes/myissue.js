import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        return  [{"Id":123, "Date":"24-Apr-2018", "Description":"docker installation", "Status":"Pendig For Approval"},
        {"Id":124, "Date":"24-Apr-2018", "Description":"docker installation", "Status":"Pendig For Approval"},
        {"Id":125, "Date":"25-Apr-2018", "Description":"software installation", "Status":"Pendig For Approval"},
        {"Id":126, "Date":"26-Apr-2018", "Description":"outlook installation", "Status":"Pendig For Approval"}];
    }
});
