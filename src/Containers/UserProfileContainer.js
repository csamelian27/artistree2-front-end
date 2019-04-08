import React from 'react'
import MediaListContainer from './MediaListContainer'
import ResumeContainer from './ResumeContainer'
import UserInfoContainer from './UserInfoContainer'
import { Button, Image } from 'semantic-ui-react'
// import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

class UserProfileContainer extends React.Component {

  state = {
    clickedMediaUpload: false
  }

  handleClickMediaUpload = () => {
    this.setState({
      clickedMediaUpload: !this.state.clickedMediaUpload
    })
  }

  render(){
    return (
      <div id="profile">
        <h1>{this.props.user.full_name}'s profile</h1>
        <Image avatar id="avatar-img" src={this.props.user.avatar ? this.props.user.avatar.avatar_url : null} alt="Avatar" />
        <h3>{this.props.user ? this.props.user.full_name : <h1>Name</h1>}</h3>

        {this.state.clickedMediaUpload ? null : <Button primary onClick={this.handleClickMediaUpload}>Upload New Media</Button>}

        <UserInfoContainer user={this.props.user} />

        {this.state.clickedMediaUpload ? this.props.history.push('/media_upload') : <MediaListContainer user={this.props.user} />}

      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {user: state.user}
// }

export default withRouter(UserProfileContainer)
