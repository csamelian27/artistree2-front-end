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
        <Header as='h1'>Resume</Header>
        <Button secondary onClick={this.props.history.goBack}>Back</Button>
        <embed className="resume-embed" src={this.props.resumes.length > 0 ? this.props.resumes[this.props.resumes.length-1].resume.resume_url : null} width="495" height="705" type="application/pdf" />
      </Container>
    )
  }
}

const mapStateToProps = ({ clickedUser, resumes }) => {
  return {clickedUser, resumes}
}

export default withRouter(connect(mapStateToProps, { getUserResumes })(Resume))
