import React from 'react'
import { connect } from 'react-redux'
import { getResume } from '../Actions/resumeActions'

class ResumeContainer extends React.Component {

  state = {
    resume: {}
  }

  componentDidMount = () => {
    if(this.props.user.resumes.length > 0) {
      this.props.getResume(this.props.user.id)
      this.setState({
        resume: this.props.user.resumes
      })
    }
  }

  render() {
    console.log(this.props);
    return(
      <div id="resume-container">
        <h1>Resume Container</h1>
        {this.props.resume ? <embed src={this.props.resume.resume_url} width="500" height="700" type="application/pdf" /> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {resume: state.resume}
}

export default connect(mapStateToProps, { getResume })(ResumeContainer)
