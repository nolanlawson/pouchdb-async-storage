'use strict';

module.exports = {
  name: 'asyncstorage',
  valid: function () {
    if (typeof React === 'undefined') {
      var React;
      try {
        React = require('react-native');
      } catch(e) {
        React = {};
      }
    }
    return React.hasOwnProperty('AsyncStorage');
  },
  use_prefix: true
};
