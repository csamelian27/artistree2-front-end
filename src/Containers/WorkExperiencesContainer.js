import React from 'react'
import { Grid, Button, Popup } from 'semantic-ui-react'

import WorkExperienceHeaders from '../Components/WorkExperienceHeaders'
import WorkExperienceUpload from '../Components/WorkExperienceUpload'

class WorkExperiencesContainer extends React.Component {

  state = {
    clicked: false,
    isOpen: false
  }

  handleClickBtn = () => {
    this.setState({
      clicked: !this.state.clicked,
      isOpen: true
    })
  }

  handleSubmit = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleClose = () => {
    this.setState({
      isOpen: false,
      clicked: false
    })
  }

  render() {
    console.log(this.props);
    return(
      <div id="work-experiences-container">
        <Grid.Column>
         { !this.state.clicked ? <Popup
                trigger={<Button onClick={this.handleClickBtn} primary>View Work Experiences</Button>} content={<WorkExperienceUpload user={this.props.user} handleClickBtn={this.handleClickBtn} handleSubmit={this.handleSubmit} handleClose={this.handleClose} />}
                on="click"
                open={this.state.isOpen}
                position='bottom center'
          /> : null }
         { !this.state.clicked ? null : <Popup
                trigger={<Button onClick={this.handleClickBtn} primary>Upload New Work Experience</Button>} content={<WorkExperienceHeaders user={this.props.user} handleClose={this.handleClose} />}
                on='click'
                open={this.state.isOpen}
                position='bottom center'
          /> }
        </Grid.Column>
      </div>
    )
  }
}

export default WorkExperiencesContainer

// state = {
//   clickedWorkExpUpload: false
// }
//
// handleClickWorkExpUpload = () => {
//   this.setState({
//     clickedWorkExpUpload: !this.state.clickedWorkExpUpload
//   })
// }

// <Grid.Column>
//   {this.state.clickedWorkExpUpload ? null : <Button primary onClick={this.handleClickWorkExpUpload}>Upload New Work Experience</Button>}
//   {this.state.clickedWorkExpUpload ? <WorkExperienceUpload user={this.props.user} handleClickWorkExpUpload={this.handleClickWorkExpUpload} /> : <WorkExperienceHeaders user={this.props.user} />}
// </Grid.Column>
