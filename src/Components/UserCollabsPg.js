import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Button, Segment, Table, Icon, Header } from 'semantic-ui-react'

class UserCollabsPg extends React.Component {

  renderCollabPosts = () => {
    if(this.props.clickedUser && this.props.clickedUser.collab_posts){
      return this.props.clickedUser.collab_posts.map(collab => {
        return (<Table.Row>
          <Table.Cell>{collab.title}</Table.Cell>
          <Table.Cell>{collab.seeking}</Table.Cell>
          <Table.Cell>{collab.description}</Table.Cell>
          <Table.Cell>{collab.claimed ? <Icon color='yellow' name='star'></Icon> : null}</Table.Cell>
          <Table.Cell><Button color='red' icon='trash'></Button></Table.Cell>
        </Table.Row>)
      })
    } else {
      return (<Table.Row>
        <Table.Cell>Add/Claim</Table.Cell>
        <Table.Cell>Some</Table.Cell>
        <Table.Cell>Collabs</Table.Cell>
        <Table.Cell><Icon name='frown outline' color='pink'></Icon></Table.Cell>
        <Table.Cell><Button color='red' icon='angle double right'></Button></Table.Cell>
      </Table.Row>)
    }
  }

  render(){
    console.log(this.props);
    return(
      <Container id="collab-post-pg">
        <img id='signup-pic' src='https://www.flowermeaning.com/flower-pics/Tulip-4.jpg' />
        <Button id='media-back-btn' secondary onClick={this.props.history.goBack}>Back</Button>
        <Header id='media-header' as='h1'>{this.props.clickedUser.full_name}'s Media</Header>

        <Table fixed id='collab-table-show'>
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
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

const mapStateToProps = ({clickedUser}) => {
  return {clickedUser}
}

export default withRouter(connect(mapStateToProps)(UserCollabsPg))
