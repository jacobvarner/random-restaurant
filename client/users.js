Router.route('/register');

Router.route('/login');

Template.register.events({
  'submit form': function(event){
    event.preventDefault();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    Accounts.createUser({
      username: username,
      password: password
    }, function(error){
      if(error) {
        console.log(error.reason);
      } else {
        Router.go('home');
      }
    });
  }
});

Template.login.events({
  'submit form': function(event){
    event.preventDefault();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    Meteor.loginWithPassword(username, password, function(error){
      if(error){
        console.log(error.reason);
      } else {
        var currentRoute = Router.current().route.getName();
        if (currentRoute == "login") {
          Router.go('home');
        }
      }
    });
  }
})

Template.navigation.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go('login');
  }
});
