import React from 'react'
import { connect } from 'react-redux'
import { getAllUserCollabs } from '../Actions/collabPostActions'
import { Header, Table, Button, Icon } from 'semantic-ui-react'

class UserCollabs extends React.Component {

  componentDidMount = () => {
    if(this.props.loggedInUser.user) {
      this.props.getAllUserCollabs(this.props.loggedInUser.user.id)
    } else {
      this.props.getAllUserCollabs(this.props.loggedInUser.id)
    }
  }

  renderCollabPosts = () => {
    if(this.props.userCollabPosts.length > 0){
      return this.props.userCollabPosts.map(collab => {
        return (<Table.Row>
          <Table.Cell>{collab.title}</Table.Cell>
          <Table.Cell>{collab.seeking}</Table.Cell>
          <Table.Cell>{collab.description}</Table.Cell>
          <Table.Cell>{collab.claimed ? <Icon color='yellow' name='star'></Icon> : null}</Table.Cell>
          <Table.Cell><Button color='red' icon='trash'></Button></Table.Cell>
        </Table.Row>)
      })
    } else if(!this.props.userCollaborations.length > 0 && !this.props.userCollabPosts.length > 0) {
      return (<Table.Row>
        <Table.Cell>Add/Claim</Table.Cell>
        <Table.Cell>Some</Table.Cell>
        <Table.Cell>Collabs</Table.Cell>
        <Table.Cell><Icon name='frown outline' color='pink'></Icon></Table.Cell>
        <Table.Cell><Button color='red' icon='angle double right'></Button></Table.Cell>
      </Table.Row>)
    }
  }

  renderCollaborations = () => {
    if(this.props.userCollaborations.length > 0){
      return this.props.userCollaborations.map(collab => {
        return (<Table.Row>
          <Table.Cell>{collab.title}</Table.Cell>
          <Table.Cell>{collab.seeking}</Table.Cell>
          <Table.Cell>{collab.description}</Table.Cell>
          <Table.Cell>{collab.claimed}</Table.Cell>
          <Table.Cell><Button color='red' icon='cancel'></Button></Table.Cell>
        </Table.Row>)
      })
    }
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <Header id='collab-container'>{this.props.loggedInUser.user ? this.props.loggedInUser.user.full_name : this.props.loggedInUser.full_name}'s Upcoming Collabs</Header>
        <Table fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title of Work</Table.HeaderCell>
              <Table.HeaderCell>Seeking</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Claimed?</Table.HeaderCell>
              <Table.HeaderCell>View Post</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderCollabPosts()}
            {this.renderCollaborations()}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = ({ userCollaborations, loggedInUser, userCollabPosts }) => {
  return { userCollaborations, loggedInUser, userCollabPosts }
}

export default connect(mapStateToProps, { getAllUserCollabs })(UserCollabs)
