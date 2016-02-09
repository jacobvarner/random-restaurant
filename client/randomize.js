Router.route('/randomize',{
  onBeforeAction: function(){
    var currentUser = Meteor.userId();
    if(currentUser) {
      this.next();
    } else {
      this.render('login');
    }
  }
});

Template.randomize.helpers({
  'random': function() {
    var currentUser = Meteor.userId();
    var restaurants = Restaurants.find({owner: currentUser}, {fields: {restaurant: 1}}).fetch();
    var array = _.pluck(restaurants, 'restaurant');
    var random = Math.floor((Math.random() * array.length));
    var output = array[random];
    return output;
  }
});
