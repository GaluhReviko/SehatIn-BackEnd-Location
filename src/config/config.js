const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
});

const bucketName = process.env.GOOGLE_STORAGE_BUCKET;
const fileName = process.env.JSON_FILE_NAME;

module.exports = {
  storage,
  bucketName,
  fileName,
};
