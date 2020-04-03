const admin = require("firebase-admin");

// Fetch the service account key JSON file contents
const serviceAccount = require("./serviceAccount.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cheatbutton-e5e1f.firebaseio.com"
});

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
        // if last count was a winner, append to the high scores
        if (currentScores.length === 0 || currentCount > currentScores[0].score) {
          console.log('adding new high score');

          const highScore = {
            score: currentCount,
            created: new Date().toUTCString(),
          };

          db.ref('scores').set({
            value: [highScore].concat(currentScores)
          }).then(() => {
            process.exit(0);
          });

        // if last count was not a winner, exit
        } else {
          process.exit(0);
        }
      });
    });
  });
};
