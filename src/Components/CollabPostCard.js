import React from 'react'
import { Grid, Image, Table, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createCollaboration } from '../Actions/collabPostActions'

class CollabPostCard extends React.Component {

  state = {
    clicked: false
  }

  handleClaimCollab = () => {
    console.log(this.props);
    let creatorId = this.props.post.user_id
    let claimerId = this.props.loggedInUser.id
    let collabId = this.props.post.id
    this.props.createCollaboration(creatorId, claimerId, collabId)
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return(
      <Table.Row>
        <Table.Cell>{this.props.post.title}</Table.Cell>
        <Table.Cell>{this.props.post.seeking}</Table.Cell>
        <Table.Cell>{this.props.post.description}</Table.Cell>
        <Table.Cell><Button color={this.state.clicked ? 'teal' : 'yellow'} onClick={this.handleClaimCollab}>{this.state.clicked || this.props.post.claimed ? 'Claimed ✔️' : 'Claim'}</Button></Table.Cell>
      </Table.Row>
    )
  }
}

const mapStateToProps = ({ loggedInUser }) => {
  return { loggedInUser }
}

export default connect(mapStateToProps, { createCollaboration })(CollabPostCard)

// <Button id='view-btn'>View</Button>
