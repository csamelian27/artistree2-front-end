import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllCollabs } from '../Actions/collabPostActions'
import CollabPostCard from '../Components/CollabPostCard'
import { Table, Button } from 'semantic-ui-react'

class CollabPostContainer extends React.Component {

  componentDidMount = () => {
    this.props.getAllCollabs()
  }

  renderCards = () => {
    if(this.props.collabPosts.length){
      return this.props.collabPosts.map(post => <CollabPostCard key={post.id} post={post} />)
    }
  }

  render(){
    console.log(this.props);
    return (
      <div id='collab-post'>
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
