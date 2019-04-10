import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createWorkExp } from '../Actions/workExpActions'

import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import { MonthRangeInput } from 'semantic-ui-calendar-react';

class WorkExperienceUpload extends React.Component {

  state = {
      business_name: '',
      contact_person: "",
      contact_number: "",
      monthsRange: '',
      description: ''
    };


 handleChange = (event, {name, value}) => {
   if (this.state.hasOwnProperty(name)) {
     this.setState({ [name]: value });
   }
 }

 handleSubmitWorkExperience = (e) => {
   e.preventDefault()
   const { business_name, contact_person, monthsRange, description } = this.state
   if( business_name !== "" && contact_person !== "" && monthsRange !== "" && description !== '' ) {
     this.props.createWorkExp(this.state, this.props.user.id)
     this.props.history.push('/profile')
   }
 }

  render() {
    console.log(this.state);
    return(
      <div id="work-experience-upload">
        <h1>Work Experience Upload</h1>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Input} name="business_name" label='Business Name' placeholder='Business Name' onChange={this.handleChange} />
              <Form.Field control={Input} name="contact_person" label='Contact Person' placeholder='Contact Person' onChange={this.handleChange} />
              <Form.Field control={Input} name="contact_number" label='Contact Number' placeholder='Contact Number' onChange={this.handleChange} />
            </Form.Group>

            <MonthRangeInput
              name="monthsRange"
              placeholder="From - To"
              value={this.state.monthsRange}
              closable
              iconPosition="left"
              onChange={this.handleChange}
            />

            <Form.Field control={TextArea} name="description" label='Description of Responsibilities' placeholder='Tell us more about the work you did.' onChange={this.handleChange} />
            <Form.Field secondary control={Button} onClick={this.handleSubmitWorkExperience}>Confirm</Form.Field>
        </Form>
      </div>
    )
  }
}

export default connect(null, { createWorkExp })(withRouter(WorkExperienceUpload))
