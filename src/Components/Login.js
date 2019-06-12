import React from 'react';
import { Container, Header, Form } from 'semantic-ui-react'
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
      <div id='login-form'>
        <img id='login-pic' alt='login-pic' src='https://image.invaluable.com/static/category/SG2BIX3JPJ.png' />
        <Container>
          <Header as='h1' className="user__title">Log In!</Header>
        </Container><br></br>

        <Form onSubmit={this.handleLogin}>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Email' type="email" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input type='password' fluid label='Password' name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
          </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   createAuth: (user) => dispatch(createAuth(user))
// })

export default Login






//
