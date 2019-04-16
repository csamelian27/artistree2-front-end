import React from 'react'
import { Form, Container, Header } from 'semantic-ui-react'
import { postCollabPost } from '../Actions/collabPostActions'
import { connect } from 'react-redux'

class CollabPostForm extends React.Component {

  state = {
    title: '',
    description: '',
    seeking: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmitCollab = () => {
    this.props.postCollabPost(this.state, this.props.loggedInUser.id)
    this.setState({
      title: '',
      description: '',
      seeking: ''
    })
  }

  render() {
    return (
      <Container id='form-container'>
        <Header>Create a New Collaboration</Header>
        <Form id='collab-post-form' onSubmit={this.handleSubmitCollab}>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Title of Work' name='title' placeholder='Title' value={this.state.title} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Seeking' name='seeking' placeholder='Seeking' value={this.state.seeking} onChange={this.handleChange} />
          </Form.Group>

          <Form.TextArea label='Description of Work' name='description' placeholder='Describe your work...' value={this.state.description} onChange={this.handleChange} />

        <Form.Button>Submit</Form.Button>
      </Form>
    </Container>
    )
  }
}

const mapStateToProps= ({ loggedInUser }) => {
  return { loggedInUser }
}

export default connect(mapStateToProps, { postCollabPost })(CollabPostForm)
