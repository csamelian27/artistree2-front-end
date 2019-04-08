import React from 'react'
import { Grid, Image, Label, Segment, Button } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { getResume } from '../Actions/resumeActions'

class ResumeShow extends React.Component {

  state = {
    resume: {}
  }

  componentDidMount = () => {
    if(this.props.user.resume) {
      this.props.getResume(this.props.user.resume.id)
      this.setState({
        resume: this.props.user.resume
      })
    }
  }

  render() {
    console.log(this.props);
    return(
      <div id="resume-container">
        <Segment padded>
          <Label id="label" attached='top'>{this.props.user.full_name}'s Resume</Label>

          <Grid.Row>
            {this.props.resume.resume ? <embed id="resume-embed" src={this.props.resume.resume.resume_url} width="495" height="705" type="application/pdf" /> : null}
          </Grid.Row>

        </Segment>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {resume: state.resume}
}

export default connect(mapStateToProps, { getResume })(ResumeShow)
