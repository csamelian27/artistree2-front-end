import React from 'react'
import { Grid, Image, Label, Segment, Button } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { getResume } from '../Actions/resumeActions'

class ResumeShow extends React.Component {

  state = {
    resume: {},
    clickedResumeUpload: false
  }

  componentDidMount = () => {
    if(this.props.user.resume) {
      this.props.getResume(this.props.user.resume.id)
      this.setState({
        resume: this.props.user.resume
      })
    }
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
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Segment padded>
                <Label attached='top'>{this.props.user.full_name}'s Resume</Label>

                {this.props.resume.resume ? <embed src={this.props.resume.resume.resume_url} width="500" height="700" type="application/pdf" /> : null}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {resume: state.resume}
}

export default connect(mapStateToProps, { getResume })(ResumeShow)
