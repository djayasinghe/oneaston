
Router.configure({
  layoutTemplate: 'layout'

  //template: 'DefaultTemplate'

  // .
  // .
  // .
});
Router.route('/',  {
    name: 'home',
    template: 'index'
 // this.render('index');
});
Router.route('/private_banking', {
    layoutTemplate: 'layout',
    template: 'private_banking'
});