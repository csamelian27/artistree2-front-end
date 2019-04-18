import React from 'react'
import { Grid, Label, Segment, Button } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { getUserResumes } from '../Actions/resumeActions'

class ResumeShow extends React.Component {

  componentDidMount = () => {
    if(this.props.user.resumes) {
      this.props.getUserResumes(this.props.user.id)
    }
  }

  // componentDidUpdate = (prevProps) => {
  //   console.log(this.props.resume);
  //   console.log(prevProps);
  //   if(this.props.resume.resume_url !== prevProps.user.resume.resume_url) {
  //     this.props.getResume(this.props.user.id)
  //   } else {
  //     return
  //   }
  // }

  render() {
    console.log(this.props);
    return(
      <div id="resume-container">
        <Segment centered>
          <Label id="label" attached='top'>{this.props.resumes.length ? this.props.user.full_name + '\'s Resume' : 'UPLOAD A RESUME'}</Label>

          <Grid.Row>
            <embed className="resume-embed" src={this.props.resumes.length ? this.props.resumes[this.props.resumes.length-1].resume.resume_url : null} width="495" height="705" type="application/pdf" />
          </Grid.Row>
        </Segment>
        <Button secondary onClick={this.props.handleClose}>Close</Button>
      </div>
    )
  }
}

const mapStateToProps = ({resumes}) => {
  return {resumes}
}

export default connect(mapStateToProps, { getUserResumes })(ResumeShow)



// {this.props.resume.resume ? <embed className="resume-embed" src={this.props.resume.resume.resume_url} width="495" height="705" type="application/pdf" /> : <embed className="resume-embed" src="http://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/01/Blue-Side.jpg" width="495" height="705" type="image/jpg" />}
