import React from 'react'
import { Grid, Button } from 'semantic-ui-react'

import WorkExperienceHeaders from '../Components/WorkExperienceHeaders'
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
    console.log(this.props);
    return(
      <div id="work-experiences-container">
        <Grid.Column>
          {this.state.clickedWorkExpUpload ? null : <Button primary onClick={this.handleClickWorkExpUpload}>Upload New Work Experience</Button>}
          {this.state.clickedWorkExpUpload ? <WorkExperienceUpload user={this.props.user} handleClickWorkExpUpload={this.handleClickWorkExpUpload} /> : <WorkExperienceHeaders user={this.props.user} />}
        </Grid.Column>
      </div>
    )
  }
}

export default WorkExperiencesContainer
