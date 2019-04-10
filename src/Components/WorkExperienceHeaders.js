import React from 'react'
import { Grid, Card, Segment, Label, Table, Header, Rating, Button, Popup, Modal, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getWorkExps } from '../Actions/workExpActions'

import WorkExperienceInfo from './WorkExperienceInfo'
import WorkExperienceUpload from './WorkExperienceUpload'

class WorkExperienceHeaders extends React.Component {

  state = { open: false };
  handleRef = component => (this.ref = component);
  open = () => this.setState({ open: true }, () => this.ref.focus());
  close = () => this.setState({ open: false });

  componentDidMount = () => {
    if(this.props.user.work_experiences) {
      this.props.getWorkExps(this.props.user.id)
    }
  }

  renderCards = () => {
    if(this.props.workExps){
    return this.props.workExps.map((workExpObj, index) => <WorkExperienceInfo key={index} workExp={workExpObj} user={this.props.user} />)}
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return(
      <div id="work-experience-card">

          <Segment padded>
            <Label attached='top'>{this.props.user.full_name}'s Work Exp</Label>

            <Grid.Row>
              <Table celled padded>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Business Name</Table.HeaderCell>
                    <Table.HeaderCell>Contact Name</Table.HeaderCell>
                    <Table.HeaderCell>Contact No.</Table.HeaderCell>
                    <Table.HeaderCell>From - To</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {this.renderCards()}
                </Table.Body>
              </Table>
            </Grid.Row>
          </Segment>

      </div>
    )
  }
}

const mapStateToProps = ({workExps}) => {
  return {workExps}
}

export default connect(mapStateToProps, { getWorkExps })(WorkExperienceHeaders)


// <Popup
//        trigger={<Button size='mini' position='top center' primary>Upload New Work Experience</Button>} content={<WorkExperienceUpload user={this.props.user} />}
//        on='click'
//        position='bottom center'
//  />


// <Modal
//   trigger={<Button size='mini' position='top center' primary>Upload New Work Experience</Button>}
//   header='Reminder!'
//   on='click'
//   position='bottom center'
//   content={<WorkExperienceUpload user={this.props.user} />}
//   actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
// />
