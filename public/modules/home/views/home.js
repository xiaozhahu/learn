define([
       'jquery',
       'underscore',
       'backbone',
       'handlebars',
       'hbars!modules/home/templates/home'
], function($, _, Backbone, Hbs, tpl) {

  return Backbone.View.extend({
    el: '#learnApp',
    template: tpl,
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html(this.template({}));
      return this;
    }
  });
});
