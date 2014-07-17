import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('invalidateSession', function(app) {
  var session = app.__container__.lookup('simple-auth-session:main');
  if (session.get('isAuthenticated')) {
    session.invalidate();
  }
  return wait();
});
