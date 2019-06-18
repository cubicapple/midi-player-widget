var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'midi-player-widget',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'midi-player-widget',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

