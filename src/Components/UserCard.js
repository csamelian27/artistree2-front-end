import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getOneUser } from '../Actions/userActions'

const UserCard = (props) => {
  const extra = (
      <div>
      <Icon name='archive' />
      {props.userObj.media_items.length} Media Items
      </div>
  )

  const handleClickUser = () => {
    props.getOneUser(props.userObj.id)
    console.log(props.clickedUser);
    const formattedName = props.userObj.full_name.replace(' ', '-')
    props.history.push(`/users/${formattedName}`)
  }

  console.log(props);
  return (
    <Card
      id="user-card"
      image={props.userObj.avatar ? props.userObj.avatar.avatar_url : null}
      header={props.userObj.full_name ? props.userObj.full_name : null}
      meta={props.userObj.artist_type ? props.userObj.artist_type : null}
      description={props.userObj.bio ? props.userObj.bio : null}
      extra={extra}
      onClick={handleClickUser}
    />

  )
}

const mapStateToProps = ({ clickedUser }) => {
  return {clickedUser}
}

export default connect(mapStateToProps, { getOneUser })(withRouter(UserCard))
