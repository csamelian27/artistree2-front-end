import React from 'react'
import { Form, Input, TextArea, Select, Button, Label, Header } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { createMedia } from '../Actions/mediaItemActions'

class MediaUpload extends React.Component {

  state = {
    title: "",
    description: "",
    category: "",
    file: null,
    mediaFileType: ""
  }

  handleFile = (e) => {
    this.setState({
      file: e.target.files[0]
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmitMedia = (e) => {
    e.preventDefault()
    const { title, description, category, file } = this.state
    if( title !== "" && description !== "" && category !== "" && file ) {
      this.props.createMedia(this.state, this.props.user.id)
      this.props.history.push('/profile')
    }
  }

  render(){
    console.log(this.props);
    console.log(this.state);

    const categoryOptions = [
      { key: 'dance', text: 'Dance', value: 'dance' },
      { key: 'film', text: 'Film', value: 'film' },
      { key: 'music', text: 'Music', value: 'music' },
      { key: 'art', text: 'Art', value: 'art' },
      { key: 'poetry', text: 'Poetry', value: 'poetry' },
    ]

    const mediaOptions = [
      { key: 'Video', text: 'Video', value: 'Video'},
      { key: 'Image', text: 'Image', value: 'Image'},
      { key: 'Document', text: 'Document (PDF)', value: 'Document'},
      { key: 'Audio', text: 'Audio', value: 'Audio'}
    ]

    return (
      <div id="upload">
        <br></br>
        <img id="upload-pic" src="https://bmoca.org/media/exhibition_images/1773/small_IMG_8326_cew_large.jpg" alt="media-upload-pic" />
        <div id="media-upload">
        <Header id='media-upload-header' as='h1'>Upload New Media</Header>
          <Form id='media-upload-form'>
            <Form.Group widths='equal'>
              <Form.Field
                id='form-input-control-title'
                className="form-input"
                control={Input}
                label='Title of Work'
                name="title"
                placeholder='Title'
                onChange={this.handleChange}
              />

              <Form.Field
                id="form-input-control-category"
                className="form-input"
                control={Select}
                options={categoryOptions}
                label='Category'
                name="category"
                placeholder='Select Category'
                onChange={(e) => {
                  e.target.value = e.target.innerText
                  e.target.name = "category"
                  this.handleChange(e)
                }}
              />
            </Form.Group>

            <Form.Field
              id='form-input-control-description'
              className="form-input"
              control={TextArea}
              label='Description of Work'
              name="description"
              placeholder='Description'
              onChange={this.handleChange}
            />

            <Form.Group widths="equal">
              <strong><Label for="media" id="media" className="form-input">Media:
                <input type="file" id="media" name="media" accept="image/*,audio/*,video/*,.pdf,.jpg,.doc " onChange={this.handleFile} />
              </Label></strong>

              <Form.Field
                id="form-input-control-media"
                className="form-input"
                control={Select}
                options={mediaOptions}
                label='Media file type'
                name="mediaFileType"
                placeholder='Select Media file type'
                onChange={(e) => {
                  e.target.value = e.target.innerText
                  e.target.name = "mediaFileType"
                  this.handleChange(e)
                }}
              />
            </Form.Group>

              <Button secondary onClick={this.props.history.goBack}>Back</Button>
              <Button secondary onClick={this.handleSubmitMedia}>Confirm</Button>
          </Form>

        </div>
      </div>
    )
  }
}

// const mapStateToProps = ({user}) => {
//   return {user}
// }

const mapDispatchToProps = (dispatch) => ({
  createMedia: (media, userId) => dispatch(createMedia(media, userId))
})

export default connect(null, mapDispatchToProps)(withRouter(MediaUpload))











// <div className="ui form">
// <div className="fields">
//
// <div className="field">
// <label>Title of Work</label>
// <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange}/>
// </div>
//
// <div class="field">
// <label>Text</label>
// <textarea type="text" name="description" placeholder="description" value={this.state.description} onChange={this.handleChange}></textarea>
// </div>
//
// </div>
// </div>
