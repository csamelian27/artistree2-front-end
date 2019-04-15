import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, Grid } from 'semantic-ui-react'
import { getAllUsers } from '../Actions/userActions'
import MediaFeedContainer from './MediaFeedContainer'
import AllUsersContainer from './AllUsersContainer'

class BrowseUsersContainer extends React.Component {

  render() {
    console.log(this.props);
    return (
      <Grid>
      <img id="browse-bg-pic" src="https://static.parade.com/wp-content/uploads/2014/03/Is-Marilyn-a-Good-Artist-ftr.jpg" alt="media-upload-pic" />
        <Grid.Row>
          <Grid.Column width={6}>
            <Header as='h3'>Live Media Upload Feed</Header>
            <MediaFeedContainer />
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as='h1' id='browse-header'>Browse Users</Header>
            <AllUsersContainer loggedInUser={this.props.loggedInUser} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = ({allUsers}) => {
  return {allUsers}
}

export default connect(mapStateToProps, {getAllUsers})(withRouter(BrowseUsersContainer))






// <Header as='h2' icon textAlign='center'>
//       <Icon name='users' circular />
//       <Header.Content>Friends</Header.Content>
//     </Header>
