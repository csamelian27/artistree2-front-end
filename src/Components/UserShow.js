import React from 'react'
import { connect } from 'react-redux'
import UserProfileContainer from '../Containers/UserProfileContainer'
import UserInfoContainer from '../Containers/UserInfoContainer'
import MediaListContainer from '../Containers/MediaListContainer'
import { Grid, Header, Image } from 'semantic-ui-react'

const UserShow = ({ clickedUser }) => {
  console.log(clickedUser);
  return(
    <div id="user-show">
      <img id="profile-bg-pic" src="https://mymodernmet.com/wp/wp-content/uploads/archive/crXl0cLM7z4SZa3p3rUI_1082141960.jpeg" alt="bg-pic" />
      <Grid fluid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <br></br><Header as='h1' id='prof-name'>{clickedUser.full_name}</Header><br></br>

            <Image avatar id="avatar-img" src={clickedUser.avatar ? clickedUser.avatar.avatar_url : '/avatar_default.svg'} alt="Avatar" />

            </Grid.Column>
          </Grid.Row>

          </Grid>
        <UserInfoContainer user={clickedUser} />
        <MediaListContainer user={clickedUser} />
    </div>
  )
}

const mapStateToProps = ({ clickedUser }) => {
  return {clickedUser}
}

export default connect(mapStateToProps)(UserShow)
