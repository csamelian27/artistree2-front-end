import React from 'react';
// import { connect } from 'react-redux'
// import { createAuth } from '../Actions/userActions'

class Login extends React.Component {

  state = {
    email: "",
    password: ""
  }

  changeHandler = e => {
     this.setState({
       [e.target.name]: e.target.value
     });
   };

   handleLogin = e => {
     e.preventDefault();
     this.props.handleLogin(this.state);
   };

  render() {
    return (
      <div className="login wrapper">
           <form className="form-signin" onSubmit={this.handleLogin}>
             <h1 className="form-signin-heading">Log In</h1>
             <input className="form-control" type="email" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} /><br></br>
             <input className="form-control" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} /><br></br>
             <button id="login-btn" type="submit">Log In</button>
           </form>
         </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   createAuth: (user) => dispatch(createAuth(user))
// })

export default Login






//
