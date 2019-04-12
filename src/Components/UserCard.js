import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getOneUser } from '../Actions/userActions'

const UserCard = (props) => {
  const extra = (
    <a>
      <Icon name='archive' />
      {props.userObj.media_items.length} Media Items
    </a>
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
