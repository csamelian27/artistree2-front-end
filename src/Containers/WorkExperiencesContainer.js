import React from 'react'
import { Grid, Button, Popup } from 'semantic-ui-react'

import WorkExperienceHeaders from '../Components/WorkExperienceHeaders'
import WorkExperienceUpload from '../Components/WorkExperienceUpload'

class WorkExperiencesContainer extends React.Component {



  render() {
    console.log(this.props);
    return(
      <div id="work-experiences-container">
        <Grid.Column>
         <Popup
                trigger={<Button icon='flask' primary>View Work Experiences</Button>} content={<WorkExperienceHeaders user={this.props.user} />}
                on='click'
                position='bottom center'
          />
         <Popup
                trigger={<Button icon='flask' primary>Upload New Work Experience</Button>} content={<WorkExperienceUpload user={this.props.user} />}
                on='click'
                position='bottom center'
          />
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
