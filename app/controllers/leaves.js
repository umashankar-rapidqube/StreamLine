import Controller from '@ember/controller';

export default Controller.extend({
   selected: null,
       names: ['sick', 'meternary', 'function', 'preparation'],

       actions:{
           apply:function(name){
               this.set('type',name)
               var names=this.get('names');
               this.set("loan",names);
               console.log("names",names)
               var reason=this.get('reason');
               this.set("loan",reason);
               console.log("reason",reason)
               var date=this.get('date');
               this.set("loan",date);
               console.log("reason",date)

           },
       
           center: new Date('2016-05-17'),
 range: {
   start: new Date('2016-05-10'),
   end: new Date('2016-05-15')
 }
 
       }
});
