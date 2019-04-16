import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getWorkExps } from '../Actions/workExpActions'
import WorkExperienceInfo from './WorkExperienceInfo'
import { Container, Grid, Segment, Label, Table, Header, Button } from 'semantic-ui-react'

class WorkExps extends React.Component {

  componentDidMount = () => {
    if(this.props.clickedUser.work_experiences) {
      this.props.getWorkExps(this.props.clickedUser.id)
    }
  }

  renderCards = () => {
    if(this.props.workExps){
    return this.props.workExps.map((workExpObj, index) => <WorkExperienceInfo key={index} workExp={workExpObj} user={this.props.user} />)}
  }

  render(){
    console.log(this.props);
    return(
      <Container id="work-exp-pg">
        <Header as='h1'>Work Experiences</Header>
        <Button secondary onClick={this.props.history.goBack}>Back</Button>
        <Segment id='work-exps-table' padded>
          <Label attached='top'>{this.props.clickedUser.full_name}'s Work Exp</Label>
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

              <Table.Body className="table-body">
                {this.renderCards()}
              </Table.Body>

            </Table>
          </Grid.Row>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = ({clickedUser, workExps}) => {
  return {clickedUser, workExps}
}

export default withRouter(connect(mapStateToProps, { getWorkExps })(WorkExps))
