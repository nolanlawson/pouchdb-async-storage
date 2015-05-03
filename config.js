'use strict';

module.exports = {
  name: 'asyncstorage',
  valid: function () {
    return typeof React !== 'undefined';
  },
  use_prefix: true
};
