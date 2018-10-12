export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to database
    dispatch({
      type: "CREATE_PROJECT",
      project
    });
  };
};
