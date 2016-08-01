
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
Router.route('/products', {
    layoutTemplate: 'layout',
    template: 'products'
});
Router.route('products/one_view', {
    layoutTemplate: 'layout',
    template: 'one_view',
    name:'one_view'
});
Router.route('products/one_ledger', {
    layoutTemplate: 'layout',
    template: 'one_ledger',
    name:'one_ledger'
});
Router.route('products/one_event', {
    layoutTemplate: 'layout',
    template: 'one_event',
    name:'one_event'
});
Router.route('products/one_notify', {
    layoutTemplate: 'layout',
    template: 'one_notify',
    name:'one_notify'
});