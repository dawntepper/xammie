export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: process.env.NG_APP_FIREBASE_API_KEY || 'NG_APP_FIREBASE_API_KEY',
    authDomain: process.env.NG_APP_FIREBASE_AUTH_DOMAIN || 'NG_APP_FIREBASE_AUTH_DOMAIN',
    databaseURL: process.env.NG_APP_FIREBASE_DATABASE_URL || 'NG_APP_FIREBASE_DATABASE_URL',
    projectId: process.env.NG_APP_FIREBASE_PROJECT_ID || 'NG_APP_FIREBASE_PROJECT_ID',
    storageBucket: process.env.NG_APP_FIREBASE_STORAGE_BUCKET || 'NG_APP_FIREBASE_STORAGE_BUCKET',
    messagingSenderId: process.env.NG_APP_FIREBASE_MESSAGING_SENDER_ID || 'NG_APP_FIREBASE_MESSAGING_SENDER_ID',
    appId: process.env.NG_APP_FIREBASE_APP_ID || 'NG_APP_FIREBASE_APP_ID'
  }
};

console.log('Firebase Config:', environment.firebaseConfig);
