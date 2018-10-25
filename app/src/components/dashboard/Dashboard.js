import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { auth, notifications, projects } = this.props;

    // If the user is not the auth, redirect
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    projects: state.firestore.ordered.projects
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    // .collection("projects").orderBy("createdAt", "desc") as stated via Firebase
    {
      collection: "projects",
      limit: 5,
      orderBy: ["createdAt", "desc"]
    },
    // Show only 3 notifications on the dashboard
    {
      collection: "notifications",
      limit: 3,
      orderBy: ["time", "desc"]
    }
  ])
)(Dashboard);
