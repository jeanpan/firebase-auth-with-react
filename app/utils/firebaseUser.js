'use strict';

var firebaseUser = (function() {
  var ref = new Firebase("https://clapperboard.firebaseio.com/users/");

  /*
  function checkExistingUser(authData) {
    ref.child(authData.uid).once('value', function(snapshot) {
      var isExist = (snapshot.val() !== null);
    });
  }
  */

  function createUserData(authData) {
    ref.child(authData.uid).once('value', function(snapshot) {
      var isExist = (snapshot.val() !== null);
      // new user, create user data
      if (!isExist) {
        ref.child(authData.uid).set({
          provider: authData.provider,
          name: _getUserName(authData)
        });
      } else {
        console.log("User Existed");
      }
    });
  }

  function getUserData(authData, callback) {
    ref.child(authData.uid).once('value', callback);
    /*
    ref.child(authData.uid).once('value', function(snapshot) {
      return snapshot.child("name").val();
      // console.log(snapshot.child("name").val());
    });
    */
  }

  function _getUserName(authData) {
    switch(authData.provider) {
      case 'password':
        return authData.password.email.replace(/@.*/, '');
      case 'twitter':
        return authData.twitter.displayName;
      case 'facebook':
        return authData.facebook.displayName;
    }
  }

  return {
    createUserData: createUserData,
    getUserData: getUserData
  }

})();

module.exports = firebaseUser;
