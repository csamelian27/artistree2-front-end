import React from 'react'
import { Form, Input, TextArea, Select, Button, Label } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { createResume } from '../Actions/resumeActions'

class ResumeUpload extends React.Component {

  state = {
    resume: ""
    // resumeFileType: ""
  }

  handleFile = (e) => {
    this.setState({
      resume: e.target.files[0]
    })
  }

  // handleResumeFileType = (e) => {
  //   this.setState({
  //     resumeFileType: e.target.value
  //   })
  // }

  handleSubmitResume = (e) => {
    e.preventDefault()
    const { resume } = this.state
    if( resume !== "") {
      this.props.createResume(this.state, this.props.user.id)
      this.props.history.push('/profile')
      this.props.handleClickBtn()
      this.props.handleSubmit()
    }
  }

  render(){
    const resumeOptions = [
      { key: 'PDF', text: 'PDF', value: 'PDF'},
      { key: 'jpeg/jpg', text: 'jpeg/jpg', value: 'jpeg/jpg'},
      { key: 'doc', text: 'doc', value: 'doc'}
    ]

    return(
      <div id="resume-upload">
        <h1>Resume Upload</h1>
        <Form>
          <Form.Group widths="equal">
            <strong><Label horizontal for="resume" id="resume" className="form-input">Resume (PDF only):
              <input type="file" id="resume" name="resume" accept=".pdf,.jpg,.doc" onChange={this.handleFile} />
            </Label></strong>

          </Form.Group>

          <Button secondary id='form-button-control-confirm' onClick={this.handleSubmitResume}>Confirm</Button>
          <Button secondary onClick={this.props.handleClose}>Close</Button>
      </Form>
      </div>
    )
  }
}

export default connect(null, { createResume })(withRouter(ResumeUpload))


// <Form.Field
//   id="form-input-control-resume"
//   className="form-input"
//   control={Select}
//   options={resumeOptions}
//   label='Resume file type'
//   name="resume"
//   placeholder='Select Resume file type'
//   onChange={(e) => {
//     e.target.value = e.target.innerText
//     e.target.name = "resume"
//     this.handleResumeFileType(e)
//   }}
// />
