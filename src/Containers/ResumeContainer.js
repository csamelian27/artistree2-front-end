import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Grid, Popup } from 'semantic-ui-react'

import ResumeShow from '../Components/ResumeShow'
import ResumeUpload from '../Components/ResumeUpload'

class ResumeContainer extends React.Component {

  render() {
    console.log(this.props);
    return(
      <div id="resume-container">
        <Grid.Column id="resume-col">
          <Popup
                 trigger={<Button icon='flask' primary>View Resume</Button>} content={<ResumeShow user={this.props.user} />}
                 on='click'
                 position='bottom center'
           />
         <Popup
                trigger={<Button icon='flask' primary>Upload New Resume</Button>} content={<ResumeUpload user={this.props.user} />}
                on='click'
                position='bottom center'
          />
        </Grid.Column>
      </div>
    )
  }
}

export default withRouter(ResumeContainer)



// state = {
//   clickedResumeUpload: false
// }

// handleClickResumeUpload = () => {
//   this.setState({
//     clickedResumeUpload: !this.state.clickedResumeUpload
//   })
// }

// <Grid.Column id="resume-col">
// {this.state.clickedResumeUpload ? null : <Button primary onClick={this.handleClickResumeUpload}>Upload New Resume</Button>}
// {this.state.clickedResumeUpload ? <ResumeUpload user={this.props.user} handleClickResumeUpload={this.handleClickResumeUpload} /> : <ResumeShow user={this.props.user} />}
// </Grid.Column>
