const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "help me bowsette", content: "blah blah blah" },
    { id: "3", title: "help me boi", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  // Check action type, there could be many actions
  // action.type = CREATE_PROJECT
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create_project_error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
