import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "./actions";

import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log(`AppLoaded: ${this.props.appLoaded}`);
  }

  componentDidUpdate() {
    console.log(`AppLoaded: ${this.props.appLoaded}`);
  }

  render() {
    const { appName, appLoaded, loadApp } = this.props;
    return appLoaded ? (
      <div className="app">
        <h1>{appName}</h1>
      </div>
    ) : (
      <button onClick={loadApp}>Load app</button>
    );
  }
}

const mapStateToProps = state => {
  const { appName, appLoaded } = state.common;
  return { appName, appLoaded };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
