import React from "react";
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets, addTweet, updateTweet, deleteTweet } from "../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }
   changeTitle(title) {
    this.setState({title});
  }
  postTweet() {
    const title = document.getElementById("Feed").value;
    const id = Math.round(100000*Math.random());
    this.props.dispatch(addTweet(id,title))
   }


  render() {
    const containerStyle = {
      "float": "right"
    };
    const { user, tweets } = this.props;
    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)
    console.log("home");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <textarea rows="5" cols="62" id="Feed">What's on your mind?</textarea>
          </div>
          <div class="col-lg-5">
            <button class="btn btn-default" onClick={this.postTweet.bind(this)} style={containerStyle}>Post Tweet</button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h1>{user.name}</h1>
            <ul>{mappedTweets}</ul>
          </div> 
        </div>
      </div>
    );
  }
}
