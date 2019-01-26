define([
       'jquery',
       'underscore',
       'backbone',
       'handlebars',
       'hbars!modules/home/templates/home'
], function($, _, Backbone, Hbs, tpl) {

  return Backbone.View.extend({
    template: tpl({}),
    initialize: function() {
    },
    render: function() {
      var tt =12;
      return this;
    },
    index: function () {
      var kk= 12;
      // loginAction.dologin({"user_name":"test","password":"11"},function(data){
      //
      // });
    }
  });
});
