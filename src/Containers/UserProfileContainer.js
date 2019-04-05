import React from 'react'
import MediaListContainer from './MediaListContainer'
// import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

class UserProfileContainer extends React.Component {

  state = {
    clicked: false
  }

  handleClickUpload = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    return (
      <div id="profile">
        <h1>Your Profile</h1>
        <img id="avatar-img" src={this.props.user.avatar ? this.props.user.avatar.avatar_url : null} />
        <h3>{this.props.user ? this.props.user.full_name : <h1>Name</h1>}</h3>
        <button onClick={this.handleClickUpload}>{this.state.clicked ? null : 'Upload New Media'}</button>
        {this.state.clicked ? this.props.history.push('/media_upload') : <MediaListContainer user={this.props.user} />}
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {user: state.user}
// }

export default withRouter(UserProfileContainer)
