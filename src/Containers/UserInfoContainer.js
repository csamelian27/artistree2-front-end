import React from 'react'
import { Grid } from 'semantic-ui-react'

import WorkExperiencesContainer from './WorkExperiencesContainer'
import ResumeContainer from './ResumeContainer'

const UserInfoContainer = (props) => {

  return(
    <div id="user-info-container">
        <h1>User Info Container</h1>
      <Grid.Row columns={2}>
        <Grid.Column>
          <WorkExperiencesContainer user={props.user} />
        </Grid.Column>
        <Grid.Column>
          <ResumeContainer user={props.user} />
        </Grid.Column>
      </Grid.Row>
    </div>
  )
}

export default UserInfoContainer
