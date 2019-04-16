import React from 'react'
import MediaListContainer from './MediaListContainer'
import UserInfoContainer from './UserInfoContainer'
import { Image, Grid, Header, Table, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { patchUserBio } from '../Actions/userActions'

class UserProfileContainer extends React.Component {

  state = {
    clickedEditBio: false,
    bio: this.props.user.bio
  }

  handleClickEditBio = (e) => {
    this.setState({
      clickedEditBio: !this.state.clickedEditBio
    })
    if(e.target.innerText === 'Confirm') {
      this.props.patchUserBio(this.props.user.id, this.state.bio)
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handlePatchBio = () => {

  }

  render(){
    console.log(this.state);
    return (
      <div id="profile">
      <img id="profile-bg-pic" src="https://mymodernmet.com/wp/wp-content/uploads/archive/crXl0cLM7z4SZa3p3rUI_1082141960.jpeg" alt="bg-pic" />
        <Grid fluid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <br></br><Header as='h1' id='prof-name'>{this.props.user.full_name}</Header>
              <Header as='h2' id='prof-art-type'>{this.props.user.artist_type}</Header><br></br>

              <Image avatar id="avatar-img" src={this.props.user.avatar ? this.props.user.avatar.avatar_url : '/avatar_default.svg'} alt="Avatar" />
              <Table fixed id='table-user-info'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell id='table-user-info-bio'>{this.props.user.full_name}'s Bio<Button size='mini' id='right-btn' onClick={this.handleClickEditBio}>{this.state.clickedEditBio ? 'Confirm' : 'Edit'}</Button></Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      {this.state.clickedEditBio ? <Form><Form.Group><Form.TextArea label='Artist Bio' name='bio' placeholder={this.state.bio} value={this.state.bio} onChange={this.handleChange} /></Form.Group></Form> : this.props.user.bio}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              </Grid.Column>
            </Grid.Row>

            </Grid>
          <UserInfoContainer user={this.props.user} />
          <MediaListContainer user={this.props.user} />
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {user: state.user}
// }

export default withRouter(connect(null, { patchUserBio })(UserProfileContainer))
