/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-spinner',
  included: function(app) {
    // Import our css file
    app.import('vendor/ember-spinner.css');
    app.import('vendor/spinners/all.css');
    this._super.included.call(this, app);
  }
};
