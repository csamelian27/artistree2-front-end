import React from 'react'
import WorkExperiencesContainer from './WorkExperiencesContainer'
import ResumeContainer from './ResumeContainer'

const UserInfoContainer = (props) => {

  return(
    <div id="user-info-container">
      <h1>User Info Container</h1>

      <WorkExperiencesContainer user={props.user} />
      <ResumeContainer user={props.user} />
    </div>
  )
}

export default UserInfoContainer
