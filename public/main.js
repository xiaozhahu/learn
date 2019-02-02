requirejs.config({
  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Hbs'
    },
    bootstrap: {
      deps: ['jquery', 'popper'],
      exports: 'Bootstrap'
    }
  },

  hbars: {
    extension: '.hbs', // default = '.html'
    compileOptions: {}  // options object which is passed to Handlebars compiler
  },

  /**
   * HACK:
   * Modified Underscore and Backbone to be AMD compatible (define themselves)
   * since it didn't work properly with the RequireJS shim when optimizing
   */
  paths: {
    router: 'router',
    jquery: 'lib/jquery/jquery.min',
    underscore: 'lib/underscore/underscore.min',
    backbone: 'lib/backbone/backbone.min',
    handlebars: 'lib/handlebars/handlebars',
    text: 'lib/handlebars/text',
    hbars: 'lib/handlebars/hbars',
    popper: 'lib/popper/popper',
    bootstrap: 'lib/bootstrap/js/bootstrap.min'
  }
});

require(['modules/home/views/home'], function(Home) {
  new Home();
});
