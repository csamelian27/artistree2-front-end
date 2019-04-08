import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

import WorkExperiencesContainer from './WorkExperiencesContainer'
import ResumeContainer from './ResumeContainer'

const UserInfoContainer = (props) => {

  return(
    <Grid id="user-info" centered fluid>
      <Header as='h2' icon textAlign='center'>User Info Container</Header>
      <Grid.Row fluid columns={2}>
        <WorkExperiencesContainer user={props.user} />
        <ResumeContainer user={props.user} />
      </Grid.Row>
    </Grid>
  )
}

export default UserInfoContainer
