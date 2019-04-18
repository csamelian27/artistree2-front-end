import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllCollabs } from '../Actions/collabPostActions'
import CollabPostCard from '../Components/CollabPostCard'
import { Table, Button, Header, Icon } from 'semantic-ui-react'

class CollabPostContainer extends React.Component {

  componentDidMount = () => {
    this.props.getAllCollabs()
  }

  renderCards = () => {
    if(this.props.collabPosts.length){
      return this.props.collabPosts.map(post => <CollabPostCard key={post.id} post={post} />)
    } else {
      return(
        <Table.Row>
          <Table.Cell>There Are No</Table.Cell>
          <Table.Cell>Collaborations</Table.Cell>
          <Table.Cell>Yet!</Table.Cell>
          <Table.Cell><Icon name='frown outline' color='pink'></Icon></Table.Cell>
        </Table.Row>
      )
    }
  }

  render(){
    console.log(this.props);
    return (
      <div id='collab-post'>
        <Header id='collab-header'>All Collabs</Header>
        <Table id='collab-table' fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title of Work</Table.HeaderCell>
              <Table.HeaderCell>Seeking</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Claim Post</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderCards()}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = ({ collabPosts }) => {
  return { collabPosts }
}

export default withRouter(connect(mapStateToProps, { getAllCollabs })(CollabPostContainer))
