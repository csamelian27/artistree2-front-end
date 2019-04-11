import React from 'react'
import { Grid, Header, Divider } from 'semantic-ui-react'

import WorkExperiencesContainer from './WorkExperiencesContainer'
import ResumeContainer from './ResumeContainer'

const UserInfoContainer = (props) => {

  return(
    <Grid id="user-info" centered fluid>
      <Grid.Row fluid columns={2}>
        <ResumeContainer user={props.user} />
        <WorkExperiencesContainer user={props.user} />
      </Grid.Row>
    </Grid>
  )
}

export default UserInfoContainer
