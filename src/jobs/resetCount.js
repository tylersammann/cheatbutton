const admin = require("firebase-admin");

// Fetch the service account key JSON file contents
const serviceAccount = require("./serviceAccount.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cheatbutton-e5e1f.firebaseio.com"
});

function updateHighScoreAndExit(db, currentCount, currentScores) {
  console.log('adding new score');

  const nextScore = {
    score: currentCount,
    created: new Date().toUTCString(),
  };

  let nextScores = currentScores.concat([nextScore]).sort((a, b) => b.score - a.score).slice(0, 10);

  db.ref('scores').set({
    value: nextScores
  }).then(() => {
    process.exit(0);
  });
}

module.exports.resetCount = function () {
  console.log('resetting count and (maybe) updating leader board');

  // As an admin, the app has access to read and write all data, regardless of Security Rules
  const db = admin.database();

  // Get current scores list
  db.ref('scores').once('value', (snapshot) => {
    const currentScores = snapshot.val().value;
    console.log(currentScores);

    // Get current count
    db.ref('count').once('value', (snapshot) => {
      const currentCount = snapshot.val().value;
      console.log(currentCount);

      // Reset count
      db.ref('count').set({
        value: 0
      }).then(() => {
        // Update last reset time
        db.ref('lastResetSeconds').set({
          value: Math.floor(new Date().getTime() / 1000)
        }).then(() => {
          updateHighScoreAndExit(db, currentCount, currentScores)
        });
      });
    });
  });
};
