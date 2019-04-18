import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Button } from 'semantic-ui-react'

class UserInfo extends React.Component {

  render(){
    console.log(this.props);
    return(
      <Container id="user-info-pg">
      <div id='back-btn-user-info'>
        <Button secondary onClick={this.props.history.goBack}>Back</Button>
      </div>
      <section class="wrapper">

      

        </section>
      </Container>
    )
  }
}

const mapStateToProps = ({clickedUser}) => {
  return {clickedUser}
}

export default withRouter(connect(mapStateToProps)(UserInfo))
