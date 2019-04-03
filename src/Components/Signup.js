import React, { Component } from 'react'

class Signup extends Component {

  state = {
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    avatar: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target);
    // e.target.parentElement.className = "form--no"
  }

  render(){
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

              <div className="form__group">
                  <input type="text" name="avatar" placeholder="Profile Picture" className="form__input" value={this.state.avatar} onChange={this.handleChange} />
              </div>

              <button className="btn" type="submit">Register</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup
