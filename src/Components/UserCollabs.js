import React from 'react'
import { connect } from 'react-redux'
import { getAllUserCollabs } from '../Actions/collabPostActions'
import { Header, Table, Button } from 'semantic-ui-react'

class UserCollabs extends React.Component {

  componentDidMount = () => {
    if(this.props.loggedInUser.user) {
      this.props.getAllUserCollabs(this.props.loggedInUser.user.id)
    } else {
      this.props.getAllUserCollabs(this.props.loggedInUser.id)
    }
  }

  renderCollabs = () => {
    return this.props.userCollabs.map(collab => {
      return (<Table.Row>
        <Table.Cell>{collab.title}</Table.Cell>
        <Table.Cell>{collab.seeking}</Table.Cell>
        <Table.Cell>{collab.description}</Table.Cell>
        <Table.Cell><Button color='teal'>Unclaim</Button></Table.Cell>
      </Table.Row>)
    })
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <Header>{this.props.loggedInUser.user ? this.props.loggedInUser.user.full_name : this.props.loggedInUser.full_name}'s Upcoming Collabs</Header>
        <Table fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title of Work</Table.HeaderCell>
              <Table.HeaderCell>Seeking</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>View Post</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderCollabs()}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = ({ userCollabs, loggedInUser }) => {
  return { userCollabs, loggedInUser }
}

export default connect(mapStateToProps, { getAllUserCollabs })(UserCollabs)
