Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.configure({
  layoutTemplate: 'main'
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
