import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //posts 	
  this.route('posts');

  //blog
  /*
  this.route('blog/index', {path: '/blog'});
  this.route('blog/save', {path: '/blog/save'}, function(){
    this.route('content');
  });
  */

  this.route('tasks', function() {
    this.route('new');
    this.route('edit');
  });
});

export default Router;
