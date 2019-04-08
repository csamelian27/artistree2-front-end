import React from 'react'
import { Grid, Card, Segment, Label, Table, Header, Rating } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { getWorkExp } from '../Actions/workExpActions'

class WorkExperienceCard extends React.Component {

  state = {
    workExperiences: []
  }

  componentDidMount = () => {
    if(this.props.user.work_experiences) {
      console.log(this.props.user.work_experiences);
      this.props.user.work_experiences.map(workExp => {
        this.props.getWorkExp(workExp.id)
      })
      this.setState({
        workExperiences: this.props.workExperiences
      })
    }
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
                    <Table.HeaderCell singleLine>Business Name</Table.HeaderCell>
                    <Table.HeaderCell>Contact Name</Table.HeaderCell>
                    <Table.HeaderCell>Contact No.</Table.HeaderCell>
                    <Table.HeaderCell>From - To</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell singleLine>Name</Table.Cell>
                    <Table.Cell singleLine>Contact Name</Table.Cell>
                    <Table.Cell singleLine>Contact No.</Table.Cell>

                    <Table.Cell>
                      Description
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Row>
          </Segment>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {workExperiences: state.workExperiences}
}

export default connect(mapStateToProps, { getWorkExp })(WorkExperienceCard)
