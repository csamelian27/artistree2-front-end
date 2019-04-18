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
    if(this.props.workExps.length){
      return this.props.workExps.map((workExpObj, index) => <WorkExperienceInfo key={index} workExp={workExpObj} user={this.props.user} />)
    } else {
      return (<Table.Row>
        <Table.Cell singleLine>No Work</Table.Cell>
        <Table.Cell singleLine>Experience</Table.Cell>
        <Table.Cell singleLine>Listed</Table.Cell>
        <Table.Cell singleLine>So Far</Table.Cell>
        <Table.Cell singleLine>!!!!!</Table.Cell>
      </Table.Row>)
    }
  }

  render(){
    console.log(this.props);
    return(
      <Container id="work-exp-pg">
        <img id='work-exp-pic' src='https://media.gettyimages.com/photos/aqua-and-green-psychedelic-fractal-background-like-floral-petal-picture-id1088155908' />
        <Button id='work-exp-btn-back' secondary onClick={this.props.history.goBack}>Back</Button>
        <Header id='work-exp-header' as='h1'>Work Experiences</Header><br></br>
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
