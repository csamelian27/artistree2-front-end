import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid, Image } from 'semantic-ui-react'
import CollabPost from '../Components/CollabPost'
import CollabPostForm from '../Components/CollabPostForm'
import { getAllCollabs } from '../Actions/collabPostActions'

class CollabContainer extends React.Component {

  componentDidMount = () => {
    this.props.getAllCollabs()
  }

  componentDidUpdate = (prevProps) => {
    // if(this.props.collabPosts.length !== prevProps)
  }

  renderCards = () => {

  }

  render() {
    console.log(this.props);
    return (
      <div>
      <Grid columns={2}>
        <Grid.Column width={4}>
          <CollabPostForm />
        </Grid.Column>
        <Grid.Column width={12}>
          <Grid.Row>
            {this.renderCards()}
          </Grid.Row>
        </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ({ collabPosts }) => {
  return { collabPosts }
}

export default withRouter(connect(mapStateToProps, { getAllCollabs })(CollabContainer))
