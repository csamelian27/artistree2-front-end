import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import { getAllUsers } from '../Actions/userActions'
import UserCard from '../Components/UserCard'

class AllUsersContainer extends React.Component {

  componentDidMount = () => {
    this.props.getAllUsers()
  }

  renderCards = () => {
    if(this.props.allUsers.length){
      let cards =  this.props.allUsers.map((userObj, index) => <UserCard key={index} userObj={userObj} loggedInUser={this.props.loggedInUser} />)
      let filtered = cards.filter(card => card.props.loggedInUser.id !== card.props.userObj.id)
      return filtered
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
