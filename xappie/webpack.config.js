const Dotenv = require('dotenv-webpack');
const path = require('path');
const fs = require('fs');

const envPath = path.resolve(__dirname, './.env');
if (fs.existsSync(envPath)) {
  console.log(`Found .env file at: ${envPath}`);
} else {
  console.error(`.env file not found at: ${envPath}`);
}

module.exports = {
  resolve: {
    fallback: {
      "process": require.resolve("process/browser")
    }
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env')
    })
  ]
};
