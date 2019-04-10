import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getOneUser } from '../Actions/userActions'

const UserCard = (props) => {

  const extra = (
    <a>
      <Icon name='archive' />
      {props.user.media_items.length} Media Items
    </a>
  )

  const handleClickUser = () => {
    props.getOneUser(props.user.id)
    props.history.push(`/users/${props.clickedUser.name}`)
  }

  console.log(props);
  return (
    <Card
      id="user-card"
      image={props.user.avatar ? props.user.avatar.avatar_url : null}
      header={props.user.full_name ? props.user.full_name : null}
      meta='Art Type'
      description='Artist Bio'
      extra={extra}
      onClick={handleClickUser}
    />
  )
}

const mapStateToProps = ({ clickedUser }) => {
  return {clickedUser}
}

export default connect(mapStateToProps, { getOneUser })(withRouter(UserCard))
