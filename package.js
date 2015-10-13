Package.describe({
  name: 'juancrg90:nude.js',
  version: '0.0.1',
  summary: 'Nude.js wrapper',

  git: 'https://github.com/JuanCrg90/Meteor-Nude.js',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.addFiles([
    'lib/nude.js'
    ], ['client']);

  api.addAssets([
    'public/worker.nude.js'
    ], ['client']);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.add_files('tests/tests.js', ['client']);
});
