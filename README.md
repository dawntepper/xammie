## Setup Environment Configuration

Before running the project, you need to set up your environment configuration. Follow these steps:

1. Create a copy of the template file:

      cp **src/environments/environment.template.ts** **src/environments/environment.ts**

3. Update the `src/environments/environment.ts` file with your Firebase configuration:

      export const environment = {
   
         production: false,
   
         firebaseConfig: {
   
         apiKey: "YOUR_API_KEY",
   
         authDomain: "YOUR_AUTH_DOMAIN",
   
         projectId: "YOUR_PROJECT_ID",
   
         storageBucket: "YOUR_STORAGE_BUCKET",
   
         messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
   
         appId: "YOUR_APP_ID",
   
         measurementId: "YOUR_MEASUREMENT_ID",
   
         },
   
   };
