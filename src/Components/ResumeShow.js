import React from 'react'
import { Grid, Image, Label, Segment, Button, Header } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { getResume } from '../Actions/resumeActions'

class ResumeShow extends React.Component {

  componentDidMount = () => {
    if(this.props.user.resume) {
      this.props.getResume(this.props.user.id)
    }
  }

  render() {
    console.log(this.props);
    return(
      <div id="resume-container">
        <Segment centered>
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
