Router.route('/edit',{
  onBeforeAction: function(){
    var currentUser = Meteor.userId();
    if(currentUser) {
      this.next();
    } else {
      this.render('login');
    }
  }
});

Template.edit.events({
  'click .delete': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = window.confirm("Delete this restaurant from your list?");
    if(confirm){
      Restaurants.remove({ _id: documentId });
    }
  },
  'submit #addRestaurant': function(event) {
    event.preventDefault();
    var restaurant = $('[name=restaurant]').val();
    var currentUser = Meteor.userId();
    Restaurants.insert({
      restaurant: restaurant,
      owner: currentUser
    });
    $('[name=restaurant]').val('');
  }
});

Template.edit.helpers({
  'restaurantList': function() {
    var currentUser = Meteor.userId();
    var output = Restaurants.find({owner: currentUser}).fetch();
    return output;
  }
});
