import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "./actions";

import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log(this.props.appLoaded);
  }

  componentDidUpdate() {
    console.log("App loaded logged from component");
  }

  render() {
    const { appName, appLoaded, loadApp } = this.props;
    return appLoaded ? (
      <div className="app">
        <p>{appName}</p>
      </div>
    ) : (
      <button onClick={loadApp}>Load</button>
    );
  }
}

function mapStateToProps(state) {
  const { appName, appLoaded } = state.common;
  return { appName, appLoaded };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
