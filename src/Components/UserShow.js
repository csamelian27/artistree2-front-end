import React from 'react'
import { connect } from 'react-redux'

const UserShow = (props) => {
  console.log(props);
  return(
    <div id="user-show">
      {props.loggedInUser.id === props.clickedUser.id}
    </div>
  )
}

const mapStateToProps = ({ clickedUser }) => {
  return {clickedUser}
}

export default connect(mapStateToProps)(UserShow)
