import React from 'react'
import MediaListContainer from './MediaListContainer'
import MediaUpload from '../Components/MediaUpload'
import { connect } from 'react-redux'

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
    console.log(this.props);
    return (
      <div id="profile">
        <h1>Your Profile</h1>
        <h3>{this.props.user ? this.props.user.full_name : <h1>Name</h1>}</h3>
        <button onClick={this.handleClickUpload}>{this.state.clicked ? 'Return to Profile' : 'Upload New Media'}</button>
        {this.state.clicked ? <MediaUpload /> : <MediaListContainer />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {user: state.user}
}

export default connect(mapStateToProps)(UserProfileContainer)
