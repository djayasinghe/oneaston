
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
Router.route('/items', {
    layoutTemplate: 'layout',
    tempplate: 'about'
});