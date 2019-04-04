import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import { createAuth } from './Actions/userActions'
import { connect } from 'react-redux'

import Error from './Containers/Error'
import Home from './Containers/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import NavBar from './Components/NavBar'
import UserProfileContainer from './Containers/UserProfileContainer'
import MediaUpload from './Components/MediaUpload'

// console.log(process.env.REACT_APP_API_KEY)
// console.log("JWT", process.env.REACT_APP_JWT_KEY)

class App extends Component {

  state = {
    user: {}
  }

  componentDidMount = () => {
    let token = localStorage.token;
    token
      ? fetch("http://localhost:3000/api/v1/current_user", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            "accepts": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(user => {
            this.setState({ user }, () => {
              this.props.history.push("/home");
            });
          })
      : this.props.history.push("/signup");
    };

  // Sign up submit handler posts userInfo (which is the current sign up form state) to
  // our backend API. It also saves a jwt token to the local storage and pushes the
  // user to "/activities-home"
  handleSignup = (userInfo) => {
    console.log('BAD: inside handleSignup');
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({user: userInfo})
    })
      .then(resp => resp.json())
      .then(userData => {
        console.log(userData);
        this.setState({ user: userData.user}, () => {
          localStorage.setItem("token", userData.jwt);
          this.props.history.push("/home");
        });
      });
  }

  // login handler sends over userInfo body
  handleLogin = (userInfo) => {
    console.log('BAD: inside handleLogin');
  fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accepts": "application/json"
    },
    body: JSON.stringify({user: userInfo})
  })
    .then(resp => resp.json())
    .then(userData => {
      console.log(userData);
      if(userData.message) {
        this.props.history.push("/login");
      } else {
        this.setState({ user: userData.user })
        localStorage.setItem("token", userData.jwt)
        this.props.history.push("/home")
      }
    });
  };

  handleLogout = () => {
    this.setState({ user: {} }, localStorage.clear())
    this.props.history.push("/home");
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route exact path="/media_upload" render={() => <MediaUpload user={this.state.user} />} />
          <Route exact path="/profile" render={() => <UserProfileContainer user={this.state.user} />} />
          <Route exact path="/home" render={() => <Home user={this.state.user} />} />
          <Route exact path="/login" render={() => <Login user={this.state.user} handleLogin={this.handleLogin} />} />
          <Route exact path="/signup" render={() => <Signup user={this.state.user} handleSignup={this.handleSignup} />} />
          <Route exact path="/logout" component={Home} />
          <Route path="/" component={Error} />
        </Switch>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   createAuth: (user) => dispatch(createAuth(user))
// })

export default withRouter(App);



//
