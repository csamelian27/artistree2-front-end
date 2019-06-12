import React from 'react'
import MediaCard from '../Components/MediaCard'
import { withRouter } from 'react-router-dom'
import { Grid, Button } from 'semantic-ui-react'

class MediaListContainer extends React.Component {

  state = {
    clickedMediaUpload: false,
    media: []
  }

  handleClickMediaUpload = () => {
    this.setState({
      clickedMediaUpload: !this.state.clickedMediaUpload
    })
  }

  componentDidMount = () => {
    this.getMedia(this.props.user.id)
  }

  renderCards = () => {
    if(this.state.media) {
      return this.state.media.map((mediaObj, index) => <MediaCard key={index} media={mediaObj} />)
    }
  }

  getMedia = (userId) => {
    let token = localStorage.token
    return fetch(`http://localhost:3000/api/v1/users/${userId}`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(resp => resp.json())
      .then(user => {
        this.setState({
          media: user.media_items
        })
      })
  }

  render() {
    console.log(this.state);
    return (
      <Grid fluid>
        <Grid.Row centered columns={1}>
          <Button id="media-btn" onClick={this.handleClickMediaUpload}>Upload New Media</Button>
        </Grid.Row>
        <Grid.Row centered>
          {this.state.clickedMediaUpload ? this.props.history.push('/media_upload') : this.renderCards()}
        </Grid.Row>
      </Grid>
    )
  }
}

export default withRouter(MediaListContainer)
