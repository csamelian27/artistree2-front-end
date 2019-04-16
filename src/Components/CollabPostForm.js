import React from 'react'
import { Form } from 'semantic-ui-react'

class CollabPostForm extends React.Component {

  state = {

  }

  handleChange = () => {

  }

  handleSubmitCollab = () => {
    
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Full Name' name='full_name' placeholder='Full Name' value={this.state.name} onChange={this.handleChange} />
          <Form.Input fluid label='Email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
          <Form.Input fluid label='Confirm Password' name='password_confirmation' placeholder='Password Confirmation' value={this.state.password_confirmation} onChange={this.handleChange} />
        </Form.Group>

        <Form.Input fluid label='Artist Type' name='artist_type' placeholder='Artist Type' value={this.state.artist_type} onChange={this.handleChange} />
        <Form.TextArea label='Artist Bio' name='bio' placeholder='Tell us more about you...' value={this.state.bio} onChange={this.handleChange} />
        <label name="avatar">Choose a profile picture <strong>(jpeg/jpg only)</strong>:</label>
        <br></br>
        <input type="file" id="avatar" name="avatar" accept="image/*" onChange={this.handleFile} /><br></br>
      <Form.Button>Submit</Form.Button>
    </Form>
    )
  }
}

export default CollabPostForm
