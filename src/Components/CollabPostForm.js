import React from 'react'
import { Form, Container, Header, Button } from 'semantic-ui-react'
import { postCollabPost } from '../Actions/collabPostActions'
import { connect } from 'react-redux'

class CollabPostForm extends React.Component {

  state = {
    title: '',
    description: '',
    seeking: '',
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: true
    })
  }

  handleClickClose = () => {
    this.setState({
      clicked: false
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmitCollab = () => {
    const { title, description, seeking } = this.state
    if(title !== '' && description !== '' && seeking !== '') {
      if(this.props.loggedInUser.user) {
          this.props.postCollabPost(this.state, this.props.loggedInUser.user.id)
      } else {
        this.props.postCollabPost(this.state, this.props.loggedInUser.id)
      }
      this.setState({
        title: '',
        description: '',
        seeking: '',
        clicked: false
      })
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.clicked ? <Container id='form-container'>
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
          <Button onClick={this.handleClickClose}>Close</Button>
        </Form>
      </Container> : <Button onClick={this.handleClick}>Add CollabPost</Button>}
    </div>
    )
  }
}

const mapStateToProps= ({ loggedInUser }) => {
  return { loggedInUser }
}

export default connect(mapStateToProps, { postCollabPost })(CollabPostForm)
