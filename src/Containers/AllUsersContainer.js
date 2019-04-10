import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, Card, Grid } from 'semantic-ui-react'
import { getAllUsers } from '../Actions/userActions'
import UserCard from '../Components/UserCard'

class AllUsersContainer extends React.Component {

  componentDidMount = () => {
    this.props.getAllUsers()
  }

  renderCards = () => {
    if(this.props.allUsers){
      return this.props.allUsers.map((userObj, index) => <UserCard key={index} user={userObj} />)
    }
  }

  render() {
    console.log(this.props);
    return (
        <Card.Group itemsPerRow={4}>
          {this.renderCards()}
        </Card.Group>
    )
  }
}

const mapStateToProps = ({allUsers}) => {
  return {allUsers}
}

export default connect(mapStateToProps, {getAllUsers})(withRouter(AllUsersContainer))






// <Header as='h2' icon textAlign='center'>
//       <Icon name='users' circular />
//       <Header.Content>Friends</Header.Content>
//     </Header>