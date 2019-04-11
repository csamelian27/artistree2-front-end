import React from 'react'
import MediaListContainer from './MediaListContainer'
import ResumeContainer from './ResumeContainer'
import UserInfoContainer from './UserInfoContainer'
import { Button, Image, Grid, Header } from 'semantic-ui-react'
// import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

class UserProfileContainer extends React.Component {

  render(){
    return (
      <div id="profile">
      <img id="profile-bg-pic" src="https://mymodernmet.com/wp/wp-content/uploads/archive/crXl0cLM7z4SZa3p3rUI_1082141960.jpeg" alt="bg-pic" />
        <Grid fluid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <br></br><Header as='h1' id='prof-name'>{this.props.user.full_name}</Header><br></br>

              <Image avatar id="avatar-img" src={this.props.user.avatar ? this.props.user.avatar.avatar_url : '/avatar_default.svg'} alt="Avatar" />

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
