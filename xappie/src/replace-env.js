const replace = require('replace-in-file');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

const options = {
  files: path.join(__dirname, 'dist/**/*.{js,html}'),
  from: [
    /NG_APP_FIREBASE_API_KEY/g,
    /NG_APP_FIREBASE_AUTH_DOMAIN/g,
    /NG_APP_FIREBASE_DATABASE_URL/g,
    /NG_APP_FIREBASE_PROJECT_ID/g,
    /NG_APP_FIREBASE_STORAGE_BUCKET/g,
    /NG_APP_FIREBASE_MESSAGING_SENDER_ID/g,
    /NG_APP_FIREBASE_APP_ID/g
  ],
  to: [
    process.env.NG_APP_FIREBASE_API_KEY,
    process.env.NG_APP_FIREBASE_AUTH_DOMAIN,
    process.env.NG_APP_FIREBASE_DATABASE_URL,
    process.env.NG_APP_FIREBASE_PROJECT_ID,
    process.env.NG_APP_FIREBASE_STORAGE_BUCKET,
    process.env.NG_APP_FIREBASE_MESSAGING_SENDER_ID,
    process.env.NG_APP_FIREBASE_APP_ID
  ]
};

replace(options)
  .then(results => {
    console.log('Replacement results:', results);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
