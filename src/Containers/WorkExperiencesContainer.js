import React from 'react'
import { Grid, Button } from 'semantic-ui-react'
import WorkExperienceCard from '../Components/WorkExperienceCard'
import WorkExperienceUpload from '../Components/WorkExperienceUpload'

class WorkExperiencesContainer extends React.Component {

  state = {
    clickedWorkExpUpload: false
  }

  handleClickWorkExpUpload = () => {
    this.setState({
      clickedWorkExpUpload: !this.state.clickedWorkExpUpload
    })
  }

  render() {
    return(
      <div id="work-experiences-container">
        <Grid.Column>
          {this.state.clickedWorkExpUpload ? null : <Button primary onClick={this.handleClickWorkExpUpload}>Upload New Work Experience</Button>}
          {this.state.clickedWorkExpUpload ? <WorkExperienceUpload user={this.props.user} handleClickWorkExpUpload={this.handleClickWorkExpUpload} /> : <WorkExperienceCard user={this.props.user} />}
        </Grid.Column>
      </div>
    )
  }
}

export default WorkExperiencesContainer
