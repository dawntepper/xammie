const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = require('../config/xappie-3296-firebase-adminsdk-rgo9o-f1b6beea4f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function updateProfilePhotos() {
  const collections = ['users'];  // Add other collections if needed

  for (const collectionName of collections) {
    const collectionRef = db.collection(collectionName);
    const querySnapshot = await collectionRef.get();

    if (querySnapshot.empty) {
      console.log(`No documents found in collection ${collectionName}`);
      continue;
    }

    const batch = db.batch();

    querySnapshot.forEach(doc => {
      const docRef = doc.ref;
      const data = doc.data();

      if (data.profilePhotoUrl && data.profilePhotoUrl.startsWith('https://example.com/')) {
        const newUrl = 'https://s3.amazonaws.com/xammie.io/3.png';  // Update this logic as needed
        batch.update(docRef, { profilePhotoUrl: newUrl });
      }
    });

    await batch.commit();
    console.log(`Updated profile photos in collection ${collectionName}`);
  }

  console.log('Profile photos updated successfully.');
}

updateProfilePhotos().catch(console.error);

