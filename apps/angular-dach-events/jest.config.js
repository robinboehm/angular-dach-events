module.exports = {
  name: 'angular-dach-events',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-dach-events',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
