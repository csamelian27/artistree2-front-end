import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, Grid } from 'semantic-ui-react'
import MediaFeedContainer from './MediaFeedContainer'
import AllUsersContainer from './AllUsersContainer'

const BrowseUsersContainer = (props) => {
  console.log(props);
  return (
    <Grid id='browse-grid'>
    <img id="browse-bg-pic" src="https://static.parade.com/wp-content/uploads/2014/03/Is-Marilyn-a-Good-Artist-ftr.jpg" alt="media-upload-pic" />
      <Grid.Row id='browse-grid'>
        <Grid.Column width={6}>
          <MediaFeedContainer />
        </Grid.Column>
        <Grid.Column width={10}>
          <Header id='browse-header' as='h3'>Browse Artists</Header>
          <AllUsersContainer loggedInUser={props.loggedInUser} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = ({allUsers}) => {
  return {allUsers}
}

export default connect(mapStateToProps)(withRouter(BrowseUsersContainer))






// <Header as='h2' icon textAlign='center'>
//       <Icon name='users' circular />
//       <Header.Content>Friends</Header.Content>
//     </Header>
