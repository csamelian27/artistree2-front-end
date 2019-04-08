import React from 'react'
import { Grid, Card, Segment, Label, Table, Header, Rating } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getWorkExps } from '../Actions/workExpActions'

import WorkExperienceInfo from './WorkExperienceInfo'

class WorkExperienceHeaders extends React.Component {

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
