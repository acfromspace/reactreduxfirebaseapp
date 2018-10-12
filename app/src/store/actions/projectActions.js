export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        // Puts project.title and project.content
        ...project,
        authorFirstName: "AC",
        authorLastName: "De Leon",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project
        });
        // Specify what to catch, in this case an error
      })
      .catch(err => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          err
        });
      });
  };
};
