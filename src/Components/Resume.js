import React from 'react'
import { Button, Container, Header } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserResumes } from '../Actions/resumeActions'

class Resume extends React.Component {

  componentDidMount = () => {
    if(this.props.clickedUser.resumes) {
      this.props.getUserResumes(this.props.clickedUser.id)
    }
  }

  render(){
    console.log(this.props);
    return(
      <Container id="resume-pg">
        <img id='resume-pic' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-spring-flowering-stachyurus-praecox-shrub-or-royalty-free-image-919659436-1544472182.jpg' />
          <Button id='resume-back-btn' secondary onClick={this.props.history.goBack}>Back</Button>
          <Header id='resume-header' as='h1'>{this.props.clickedUser.full_name}'s Resume</Header>
        {this.props.resumes.length > 0 ? <embed id='template-resume' className="resume-embed" src={this.props.resumes.length > 0 ? this.props.resumes[this.props.resumes.length-1].resume.resume_url : null} width="495" height="705" type="application/pdf" /> : <img id='template-resume' src='https://d.novoresume.com/images/doc/functional-resume-template.png' />}
      </Container>
    )
  }
}

const mapStateToProps = ({ clickedUser, resumes }) => {
  return {clickedUser, resumes}
}

export default withRouter(connect(mapStateToProps, { getUserResumes })(Resume))
