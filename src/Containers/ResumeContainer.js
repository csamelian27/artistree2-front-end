import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import ResumeShow from '../Components/ResumeShow'
import ResumeUpload from '../Components/ResumeUpload'

class ResumeContainer extends React.Component {

  state = {
    clickedResumeUpload: false
  }

  handleClickResumeUpload = () => {
    this.setState({
      clickedResumeUpload: !this.state.clickedResumeUpload
    })
  }

  render() {
    console.log(this.props);
    return(
      <div id="resume-container">
        {this.state.clickedResumeUpload ? null : <Button primary onClick={this.handleClickResumeUpload}>Upload New Resume</Button>}
        {this.state.clickedResumeUpload ? <ResumeUpload user={this.props.user} handleClickResumeUpload={this.handleClickResumeUpload} /> : <ResumeShow user={this.props.user} />}
      </div>
    )
  }
}

export default withRouter(ResumeContainer)
