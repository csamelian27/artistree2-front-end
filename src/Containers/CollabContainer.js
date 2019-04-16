import React from 'react'
import { withRouter } from 'react-router-dom'
import { Grid, Image } from 'semantic-ui-react'
import CollabPost from '../Components/CollabPost'

class CollabContainer extends React.Component {

  renderCards = () => {

  }

  render() {
    return (
      <CollabPostForm />
      <Grid columns={3} divided>
        <Grid.Row>
          {this.renderCards()}
        </Grid.Row>
      </Grid>
    )
  }
}

export default withRouter(CollabContainer)
