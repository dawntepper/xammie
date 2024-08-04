export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: process.env['NG_APP_FIREBASE_API_KEY'] || '',
    authDomain: process.env['NG_APP_FIREBASE_AUTH_DOMAIN'] || '',
    databaseURL: process.env['NG_APP_FIREBASE_DATABASE_URL'] || '',
    projectId: process.env['NG_APP_FIREBASE_PROJECT_ID'] || '',
    storageBucket: process.env['NG_APP_FIREBASE_STORAGE_BUCKET'] || '',
    messagingSenderId: process.env['NG_APP_FIREBASE_MESSAGING_SENDER_ID'] || '',
    appId: process.env['NG_APP_FIREBASE_APP_ID'] || ''
  }
};
