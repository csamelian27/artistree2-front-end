import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createMedia } from '../Actions/mediaItemActions'

class MediaUpload extends React.Component {

  state = {
    title: "",
    description: "",
    category: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmitMedia = (e) => {
    e.preventDefault()
    this.props.createMedia(this.state, this.props.user.user.id)
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

    return (
      <div id="media-upload">
        <h2>Upload Media</h2>

          <Form>
            <Form.Group widths='equal'>
              <Form.Field
                id='form-input-control-first-name'
                control={Input}
                label='Title of Work'
                name="title"
                placeholder='Title'
                onChange={this.handleChange}
              />
              <Form.Field
                id='form-input-control-last-name'
                control={TextArea}
                label='Description of Work'
                name="description"
                placeholder='Description'
                onChange={this.handleChange}
              />
              <Form.Field
                id="form-input-control-category"
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
            <button id='form-button-control-public' onClick={this.handleSubmitMedia}>Confirm</button>
          </Form>

      </div>
    )
  }
}

const mapStateToProps = ({user}) => {
  return {user}
}

const mapDispatchToProps = (dispatch) => ({
  createMedia: (media, userId) => dispatch(createMedia(media, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MediaUpload)











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
