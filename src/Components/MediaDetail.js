import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, Header, Modal, Form, Input, TextArea, Select } from 'semantic-ui-react'
import { getMedia, patchMedia, deleteMedia } from '../Actions/mediaItemActions'

class MediaDetail extends React.Component {

  state = {
    clickedEdit: false,
    open: false,
    title: this.props.clickedMedia.title,
    description: this.props.clickedMedia.description,
    category: this.props.clickedMedia.category
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.clickedMedia !== prevProps.clickedMedia) {
      this.props.getMedia(this.props.user.id)
    }
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  handleEditMedia = () => {
    this.setState({
      clickedEdit: !this.state.clickedEdit,
      open: true
    })
    this.show('blurring')
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handlePatchMedia = (e) => {
    e.preventDefault()
    this.props.patchMedia(this.state, this.props.clickedMedia.id)
    // this.props.history.push('/profile')
    this.close()
  }

  handleDeleteMedia = () => {
    let resp = window.confirm('Are you sure you would like to delete this media?')
    if(resp === true) {
      this.props.deleteMedia(this.props.clickedMedia.id)
      this.props.history.push('/profile')
    } else {
      console.log('boobs');
    }
    this.close()
  }

  render(){
    console.log(this.state);
    console.log(this.props);

    const { open, dimmer } = this.state
    const categoryOptions = [
      { key: 'dance', text: 'Dance', value: 'dance' },
      { key: 'film', text: 'Film', value: 'film' },
      { key: 'music', text: 'Music', value: 'music' },
      { key: 'art', text: 'Art', value: 'art' },
      { key: 'poetry', text: 'Poetry', value: 'poetry' },
    ]
    return(
      <div>
        <Button secondary onClick={this.props.history.goBack}>Back</Button>

        {this.props.user.id === this.props.clickedMedia.user_id && this.props.user.id === this.props.clickedMedia.user_id ? <Button secondary onClick={this.handleEditMedia}>Edit</Button> : null}

        <Header>{this.props.clickedMedia.title}</Header>

        {this.props.clickedMedia.file_type === 'Video' ? <video id="detail" controls autoPlay loop> <source src={this.props.clickedMedia.file.file_url} /></video> : null}

        {this.props.clickedMedia.file_type === 'Image' ? <img id="detail" src={this.props.clickedMedia.file.file_url} alt='Detail' /> : null}

        {this.props.clickedMedia.file_type === 'Document' ? <embed id="detail" src={this.props.clickedMedia.file.file_url} type="application/pdf" /> : null}

        <div>{this.props.clickedMedia.description}</div>

        {this.state.clickedEdit ?
          <Modal dimmer={dimmer} open={open} onClose={this.close}>
            <Modal.Header>Edit Media<Button id='back-btn' size='mini' secondary onClick={this.props.history.goBack} position='right'>Back</Button></Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header>Change Media Details</Header>
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Field
                      id='form-input-control-title'
                      className="form-input"
                      value={this.state.title}
                      control={Input}
                      label='Title of Work'
                      name="title"
                      placeholder='Title'
                      onChange={this.handleChange}
                    />
                    <Form.Field
                      id='form-input-control-description'
                      className="form-input"
                      value={this.state.description}
                      control={TextArea}
                      label='Description of Work'
                      name="description"
                      onChange={this.handleChange}
                    />
                    <Form.Field
                      id="form-input-control-category"
                      className="form-input"
                      value={this.state.category}
                      control={Select}
                      options={categoryOptions}
                      label='Category'
                      name="category"
                      onChange={(e) => {
                        e.target.value = e.target.innerText
                        e.target.name = "category"
                        this.handleChange(e)
                      }}
                    />
                  </Form.Group>
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button
                color='green'
                icon='check'
                labelPosition='right'
                content='Confirm'
                onClick={this.handlePatchMedia}>
              </Button>

              <Button
                color='red'
                icon='trash'
                labelPosition='right'
                content="Delete"
                onClick={this.handleDeleteMedia}
              />
            </Modal.Actions>
          </Modal> : null
        }
      </div>
    )
  }
}

const mapStateToProps = ({clickedMedia, loggedInUser}) => {
  return {clickedMedia, loggedInUser}
}

export default withRouter(connect(mapStateToProps, {getMedia, patchMedia, deleteMedia})(MediaDetail))
