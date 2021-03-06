'use strict';

var firebaseAuth = (function() {
  var ref = new Firebase("https://clapperboard.firebaseio.com/");

  function checkLoginState(callback) {
    ref.onAuth(callback);
  }

  function logout(callback) {
    ref.unauth(callback);
  }

  function login(data, callback) {
    ref.authWithPassword(data, callback);
  }

  function register(data, callback) {
    ref.createUser(data, callback);
  }

  return {
    checkLoginState: checkLoginState,
    logout: logout,
    login: login,
    register: register
  }

})();

module.exports = firebaseAuth;
