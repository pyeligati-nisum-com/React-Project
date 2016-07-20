import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

import Nav from "../components/Nav";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


export default class Layout extends React.Component {
  // componentWillMount() {
  //   this.props.dispatch(fetchUser())
  // }

  // fetchTweets() {
  //   this.props.dispatch(fetchTweets())
  // }

  render() {
    const { user, tweets, location } = this.props;

    const containerStyle = {
      marginTop: "60px"
    };
    return <div>
              <Nav location={location} />
              <div class="container" style={containerStyle}>
                  <div class="row">
                    <div class="col-lg-12">
                      <h1>Good Morining!</h1>

                      {this.props.children}

                    </div>
                  </div>
                </div>
            </div>
  }
}
