const admin = require('firebase-admin');
const serviceAccount = require('./damkar-3a1c8-firebase-adminsdk-jr0l4-ec4f3f6802.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

module.exports = admin;

