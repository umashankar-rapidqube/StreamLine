'use strict';

module.exports = function(environment) {
  let ENV = {
    googleFonts: [
      'Open+Sans:300,400,700',
      'Roboto:300'
    ],

    // Set or update content security policies
    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' fonts.googleapis.com"
    },

    modulePrefix: 'stream-line',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
    
    ENV.APP.authurl = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?';
    ENV.APP.client_id = 'client_id=e1f1830e-d3d7-451a-a213-54f9c8f02d67';
    ENV.APP.resp_type_query = '&response_type=id_token+token';
    ENV.APP.redirect_URI = '&redirect_uri=http://localhost:4200/';
    ENV.APP.other_params = '&scope=openid%20https%3A%2F%2Fgraph.microsoft.com%2Fmail.read&response_mode=fragment&state=12345&nonce=678910';
    ENV.APP.host= 'http://localhost:3000';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    
    ENV.APP.authurl = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?';
    ENV.APP.client_id = 'client_id=e1f1830e-d3d7-451a-a213-54f9c8f02d67';
    ENV.APP.resp_type_query = '&response_type=id_token+token';
    ENV.APP.redirect_URI = '&redirect_uri=https://rapidqube-streamline.herokuapp.com/';
    ENV.APP.other_params = '&scope=openid%20https%3A%2F%2Fgraph.microsoft.com%2Fmail.read&response_mode=fragment&state=12345&nonce=678910';
    ENV.APP.host= 'https://streamline-backoffice.herokuapp.com';
    // here you can enable a production-specific feature
  }

  return ENV;
};
