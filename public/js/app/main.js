require.config({
  paths: {
    domReady: '../lib/requirejs-domready/domReady',
    text: '../lib/requirejs-text/text',
    angular: '../lib/angular/angular',
    bootstrap: '../lib/angular-bootstrap/ui-bootstrap-tpls'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    bootstrap: {
      deps: ['angular']
    }
  }
});

require(['domReady!', 'angular', 'app'], function (document, ng) {
  ng.bootstrap(document, ['app']);
});
