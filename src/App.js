import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";


import axios from "./axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actionTypes from "./store/actions";
import CategoryManagement from "./pages/CategoryManagement/CategoryManagement";
import CategoryDetails from "./pages/CategoryManagement/CategoryDetails";
import socketIO from "socket.io-client"

const socket = socketIO.connect("http://167.71.231.59:3000")

const PublicRoute = (props) => {

  console.log(socket)

  return (
    <Switch>
      <Route path="/" exact>
        <CategoryManagement socket={socket}  />
      </Route>
      <Route path="/pdfDetails/:id" exact>
        <CategoryDetails socket={socket}  />
      </Route>
    </Switch>
  );
};

function App(props) {

  return (
    <div>
      <Router>
        <PublicRoute />
      </Router>
      <ToastContainer theme="colored" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (updatedValue) => {
      dispatch({
        type: actionTypes.UPDATE_USER,
        updatedUser: updatedValue,
      });
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
