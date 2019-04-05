import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { createUser } from '../Actions/userActions'

class Signup extends Component {

  state = {
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    avatar: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFile = (e) => {
    this.setState({
      avatar: e.target.files[0]
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target);
    debugger
    this.props.handleSignup(this.state)
  }

  render(){
    console.log(this.state);
    return (
      <div id="signup">
        <div className="user">
          <header className="user__header">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" />
              <h1 className="user__title">Welcome to ArtisTree!</h1>
          </header>

          <form className="form" onSubmit={this.handleSubmit}>
              <div className="form__group">
                  <input type="text" name="full_name" placeholder="Name" className="form__input" value={this.state.name} onChange={this.handleChange} />
              </div>

              <div className="form__group">
                  <input type="email" name="email" placeholder="Email" className="form__input" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="form__group">
                  <input type="password" name="password" placeholder="Password" className="form__input" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="form__group">
                  <input type="password" name="password_confirmation" placeholder="Confirm Password" className="form__input" value={this.state.password_confirmation} onChange={this.handleChange} />
              </div>

              <label name="avatar">Choose a profile picture:</label>
              <br></br>
              <input type="file" id="avatar" name="avatar" accept="image/*" onChange={this.handleFile} />


              <br></br>
              <br></br>
              <button className="btn" type="submit">Register</button>
          </form>
        </div>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   createUser: (user) => dispatch(createUser(user))
// })

export default Signup



// <div className="form__group">
// <input type="text" name="avatar" placeholder="Profile Picture" className="form__input" value={this.state.avatar} onChange={this.handleChange} />
// </div>






// <div className="ui form">
//   <div className="fields">
//
//     <div className="field">
//       <label>Username</label>
//       <input type="text" placeholder="Username"/>
//     </div>
//
//     <div className="field">
//       <label>Password</label>
//       <input type="password"/>
//     </div>
//
//   </div>
//
//   <div className="equal width fields">
//     <div className="field">
//       <label>First name</label>
//       <input type="text" placeholder="First Name"/>
//     </div>
//
//     <div className="field">
//       <label>Middle name</label>
//       <input type="text" placeholder="Middle Name"/>
//     </div>
//
//     <div className="field">
//       <label>Last name</label>
//       <input type="text" placeholder="Last Name"/>
//     </div>
//
//   </div>
// </div>
