import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('home');
  this.route('myissue');
  this.route('issue',{ path: '/issue/:issue_id' });
  this.route('leaves');
  this.route('ideabox');
  this.route('newissue');
});

export default Router;
