const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

const crawlData = require('./Crawls/index');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://noobility-80bd0.firebaseapp.com'
});

let db = admin.firestore();