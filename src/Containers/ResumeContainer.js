import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Grid, Popup } from 'semantic-ui-react'

import ResumeShow from '../Components/ResumeShow'
import ResumeUpload from '../Components/ResumeUpload'

class ResumeContainer extends React.Component {

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
      <div id="resume-container">
        <Grid.Column id="resume-col">
          { !this.state.clicked ? <Popup
                 trigger={<Button onClick={this.handleClickBtn} primary>View Resume</Button>} content={<ResumeUpload user={this.props.user} handleSubmit={this.handleSubmit} handleClickBtn={this.handleClickBtn} handleClose={this.handleClose} />}
                 on='click'
                 open={this.state.isOpen}
                 position='bottom center'
           /> : null }
         { !this.state.clicked ? null : <Popup
                trigger={<Button onClick={this.handleClickBtn} primary>Upload New Resume</Button>} content={<ResumeShow user={this.props.user} handleClose={this.handleClose} />}
                on='click'
                open={this.state.isOpen}
                position='bottom center'
          />
        }
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
