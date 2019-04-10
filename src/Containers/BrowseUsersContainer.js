import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, Card, Grid } from 'semantic-ui-react'
import { getAllUsers } from '../Actions/userActions'
import MediaFeedContainer from './MediaFeedContainer'
import AllUsersContainer from './AllUsersContainer'

class BrowseUsersContainer extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div id="browse-users">
        <Header as='h1'>Browse Users</Header>
        <AllUsersContainer />
      </div>
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
