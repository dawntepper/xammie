const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = require('../config/xappie-3296-firebase-adminsdk-rgo9o-f1b6beea4f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


// Import function for each collection
const importCollection = async (collectionName, jsonFileName) => {
  const data = JSON.parse(fs.readFileSync(jsonFileName, 'utf8'));
  const collectionRef = db.collection(collectionName);

  for (const doc of data) {
    await collectionRef.add(doc);
  }

  console.log(`${collectionName} data imported successfully.`);
};

// Import all collections
const importAllData = async () => {
  await importCollection('users', 'users.json');
  await importCollection('plantBasedMeals', 'plantBasedMeals.json');
  await importCollection('transportationActivities', 'transportationActivities.json');
  await importCollection('dietaryChoices', 'dietaryChoices.json');
  await importCollection('clothingTextiles', 'clothingTextiles.json');
  await importCollection('waterUsage', 'waterUsage.json');
  await importCollection('energyEfficiency', 'energyEfficiency.json');
  await importCollection('transportationAlternatives', 'transportationAlternatives.json');
  await importCollection('electronicsGadgets', 'electronicsGadgets.json');
  await importCollection('gardeningLandscaping', 'gardeningLandscaping.json');
  await importCollection('purchasingDecisions', 'purchasingDecisions.json');
  await importCollection('renewableEnergy', 'renewableEnergy.json');
  await importCollection('lifestyleChanges', 'lifestyleChanges.json');
};

importAllData().catch(console.error);