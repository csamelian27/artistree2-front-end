import React from 'react'

class MediaUpload extends React.Component {

  state = {
    title: "",
    description: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <div id="media-upload">
        <h2>Upload Media</h2>

        <div className="ui form">
          <div className="fields">

            <div className="field">
              <label>Title of Work</label>
              <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange}/>
            </div>

            <div class="field">
              <label>Text</label>
              <textarea type="text" name="description" placeholder="description" value={this.state.description} onChange={this.handleChange}></textarea>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default MediaUpload
