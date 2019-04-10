import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
// import { createAuth } from './Actions/userActions'
// import { connect } from 'react-redux'

import Error from './Containers/Error'
import Home from './Containers/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import NavBar from './Components/NavBar'
import UserProfileContainer from './Containers/UserProfileContainer'
import MediaUpload from './Components/MediaUpload'
import ResumeUpload from './Components/ResumeUpload'
import WorkExperienceUpload from './Components/WorkExperienceUpload'
import BrowseUsersContainer from './Containers/BrowseUsersContainer'
import UserShow from './Components/UserShow'

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
    const formData = new FormData()
    const { full_name, email, password, password_confirmation, avatar } = userInfo
    formData.append('user[full_name]', full_name)
    formData.append('user[email]', email)
    formData.append('user[password]', password)
    formData.append('user[password_confirmation]', password_confirmation)
    formData.append('user[avatar]', avatar)
    console.log('FORM DATA: ', formData);

    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      body: formData
    })
      .then(resp => resp.json())
      .then(userData => {
        console.log(userData);
        this.setState({ user: userData.user}, () => {
          localStorage.setItem("token", userData.jwt);
          this.props.history.push("/profile");
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
          <Route exact path="/users/:name" component={BrowseUsersContainer} />
          <Route exact path="/browse-users" component={BrowseUsersContainer} />
          <Route exact path="/work_exp_upload" render={() => <WorkExperienceUpload user={this.state.user} />} />
          <Route exact path="/media_upload" render={() => <MediaUpload user={this.state.user} />} />
          <Route exact path="/resume_upload" render={() => <ResumeUpload user={this.state.user} />} />
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
