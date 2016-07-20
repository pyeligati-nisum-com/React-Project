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

  postTweet() {
    this.props.dispatch(fetchUser());
    const tweet = document.getElementById("Feed").value;
    const id = Math.round(100000*Math.random());
    this.props.dispatch(addTweet(id,tweet))
   }


  render() {
    const containerStyle = {
      "float": "right",
      marginTop:"10px"
    };
    const { user, tweets } = this.props;
    const mappedTweets = tweets.map(tweet => <div>
                                                <div class="col-lg-12">
                                                  <div class="col-lg-1">
                                                      <img src="https://c2.staticflickr.com/9/8720/27824918913_57ee196a0e_o.jpg" width="70" height="70" alt="DSC_5965"/>
                                                  </div>
                                                  <div class="col-lg-10">
                                                      <label>{user.name}</label>
                                                      <p>{tweet.text}</p>
                                                  </div>
                                                </div>
                                                
                                            </div>)
    console.log(mappedTweets)
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <textarea rows="5" cols="62" id="Feed" name="description" defaultValue="What's on your mind?"></textarea>
          </div>
          <div class="col-lg-5">
            <button class="btn btn-default" onClick={this.postTweet.bind(this)} style={containerStyle}>Post Tweet</button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            {mappedTweets}
          </div> 
        </div>
      </div>
    );
  }
}
