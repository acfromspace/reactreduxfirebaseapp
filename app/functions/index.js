const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.greetingsMessage = functions.https.onRequest((request, response) => {
  response.send("Hello MY BOI!");
});

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("Notification added!", doc));
};

exports.projectCreated = functions.firestore
  // Reference a document in the projects collection via id
  .document("projects/{projectId}")
  // When document is created then...
  .onCreate(doc => {
    // All document data is in the project variable
    const project = doc.data();
    const notification = {
      content: "Added a new project!",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    // All cloud functions expect some sort of response
    return createNotification(notification);
  });

// Uses the auth function
// Create a trigger when a user is created on the auth service
exports.userJoined = functions.auth.user().onCreate(user => {
  // Returns the correct hierarchical function
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the party!",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };

      return createNotification(notification);
    });
});
