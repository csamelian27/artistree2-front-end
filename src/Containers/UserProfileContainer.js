import React from 'react'
import MediaListContainer from './MediaListContainer'
import ResumeContainer from './ResumeContainer'
import UserInfoContainer from './UserInfoContainer'
import { Button, Image, Grid } from 'semantic-ui-react'
// import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

class UserProfileContainer extends React.Component {

  render(){
    return (
      <div id="profile">
        <Grid fluid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <h1>{this.props.user.full_name}'s profile</h1>

              <Image avatar id="avatar-img" src={this.props.user.avatar ? this.props.user.avatar.avatar_url : null} alt="Avatar" />
              <h3>{this.props.user ? this.props.user.full_name : <h1>Name</h1>}</h3>

              </Grid.Column>
            </Grid.Row>

            </Grid>
          <UserInfoContainer user={this.props.user} />
          <MediaListContainer user={this.props.user} />
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {user: state.user}
// }

export default withRouter(UserProfileContainer)
