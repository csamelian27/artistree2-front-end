import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import CollabPostForm from '../Components/CollabPostForm'
import CollabPostContainer from './CollabPostContainer'
import UserCollabs from '../Components/UserCollabs'

class CollabPostHome extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div id='collabs'>
        <img id='collab-img' src='https://sortsolgroup.org/wp-content/uploads/2016/03/SortSolGroup_collaborate_med.jpg' alt='img' />
        <Grid columns={2}>
          <Grid.Column width={7}>
            <CollabPostForm />
            <UserCollabs />
          </Grid.Column>
          <Grid.Column width={9}>
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

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLrQdcR8W_wGFnn20FQaczunQA9ufxfBSZApJ4NShxqfWZzaQ
