import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import { AnimatedRoute } from 'react-router-transition'
import { logInUser } from './Actions/userActions'
// import { createAuth } from './Actions/userActions'
import { connect } from 'react-redux'

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
import MediaDetail from './Components/MediaDetail'
import CollabContainer from './Containers/CollabContainer'
import Resume from './Components/Resume'
import WorkExps from './Components/WorkExps'
import Media from './Components/Media'
import UserInfo from './Components/UserInfo'

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
            this.props.logInUser(user)
          })
      : this.props.history.push("/home");
    };

  // Sign up submit handler posts userInfo (which is the current sign up form state) to
  // our backend API. It also saves a jwt token to the local storage and pushes the
  // user to "/activities-home"
  handleSignup = (userInfo) => {
    console.log('BAD: inside handleSignup');
    const formData = new FormData()
    const { full_name, email, password, password_confirmation, avatar, artist_type, bio } = userInfo
    formData.append('user[full_name]', full_name)
    formData.append('user[email]', email)
    formData.append('user[password]', password)
    formData.append('user[password_confirmation]', password_confirmation)
    formData.append('user[artist_type]', artist_type)
    formData.append('user[bio]', bio)
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
        this.props.logInUser(userData)
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
      this.props.logInUser(userData)
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
          <AnimatedRoute exact path='/users/user-info' component={UserInfo} atEnter={{ offset: -100 }} atLeave={{ offset: -100 }} atActive={{ offset: 0 }} mapStyles={(styles) => ({
            transform: `translateX(${styles.offset}%)`,
          })} />
          <AnimatedRoute exact path='/users/resume' component={Resume} atEnter={{ offset: -100 }} atLeave={{ offset: -100 }} atActive={{ offset: 0 }} mapStyles={(styles) => ({
            transform: `translateX(${styles.offset}%)`,
          })} />
          <AnimatedRoute exact path='/users/workExps' component={WorkExps} atEnter={{ offset: -100 }} atLeave={{ offset: -100 }} atActive={{ offset: 0 }} mapStyles={(styles) => ({
            transform: `translateX(${styles.offset}%)`,
          })} />
          <AnimatedRoute exact path='/users/media' component={Media} atEnter={{ offset: -100 }} atLeave={{ offset: -100 }} atActive={{ offset: 0 }} mapStyles={(styles) => ({
            transform: `translateX(${styles.offset}%)`,
          })} />


          <Route exact path="/collaborations" render={() => <CollabContainer user={this.state.user} />} />
          <Route exact path="/users/:name" render={() => <UserShow loggedInUser={this.state.user} />} />
          <Route exact path="/media/:id" render={() => <MediaDetail user={this.state.user} />} />
          <Route exact path="/browse-users" render={() => <BrowseUsersContainer loggedInUser={this.state.user} />} />
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

export default withRouter(connect(null, { logInUser })(App));



//
