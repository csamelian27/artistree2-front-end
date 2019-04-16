import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import CollabPostForm from '../Components/CollabPostForm'
import CollabPostContainer from './CollabPostContainer'

class CollabPostHome extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div id='collabs'>
        <Grid columns={2}>
          <Grid.Column width={4}>
            <CollabPostForm />
          </Grid.Column>
          <Grid.Column width={12}>
            <Grid.Row>
              <CollabPostContainer />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}


export default CollabPostHome
