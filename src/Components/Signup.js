import React, { Component } from 'react'
import { Form, Header, Container } from 'semantic-ui-react'
// import { connect } from 'react-redux'
// import { createUser } from '../Actions/userActions'

class Signup extends Component {

  state = {
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    artist_type: "",
    bio: "",
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
    const { full_name, email, password, password_confirmation, artist_type, bio } = this.state
    if( full_name !== "" && email !== "" && password !== "" && password_confirmation !== "" && artist_type !== "" && bio !== "" ) {
      this.props.handleSignup(this.state)
    }
  }

  render(){
    console.log(this.state);
    return (
      <div id='signup-form'>
        <img id='signup-pic' alt='signup-pic' src='https://prod-uploads-pub.useast1.kadenze.com/prod/usr/uploads/course/93/logo/cinema_otis_the_modern_genius_hero_image.png' />
        <Container>
          <Header as='h1' className="user__title">Create Your Artist Profile!</Header>
          (All Fields Required)
        </Container><br></br>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Full Name' name='full_name' placeholder='Full Name' value={this.state.name} onChange={this.handleChange} />
            <Form.Input fluid label='Email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input type='password' fluid label='Password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
            <Form.Input type='password' fluid label='Confirm Password' name='password_confirmation' placeholder='Password Confirmation' value={this.state.password_confirmation} onChange={this.handleChange} />
          </Form.Group>

          <Form.Input fluid label='Artist Type' name='artist_type' placeholder='Artist Type' value={this.state.artist_type} onChange={this.handleChange} />
          <Form.TextArea label='Artist Bio' name='bio' placeholder='Tell us more about you...' value={this.state.bio} onChange={this.handleChange} />
          <label name="avatar">Choose a profile picture <strong>(jpeg/jpg only)</strong>:</label>
          <br></br>
          <input type="file" id="avatar" name="avatar" accept="image/*" onChange={this.handleFile} /><br></br>
        <Form.Button id='submit-btn'>Submit</Form.Button>
      </Form>
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
