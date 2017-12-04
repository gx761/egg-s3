const s3 = require('s3');

module.exports = (app) => {
  app.addSingleton('s3', createS3Client);
};

function createS3Client(config, app) {
  app.coreLogger.info('Load egg-s3 plugin succeed!');
  const client = s3.createClient(config);
  return client;
}
