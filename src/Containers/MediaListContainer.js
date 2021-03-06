import React from 'react'
import MediaCard from '../Components/MediaCard'
import { connect } from 'react-redux'
import { getMedia } from '../Actions/mediaItemActions'
import { withRouter } from 'react-router-dom'
import { Grid, Button } from 'semantic-ui-react'

class MediaListContainer extends React.Component {

  state = {
    clickedMediaUpload: false
  }

  handleClickMediaUpload = () => {
    this.setState({
      clickedMediaUpload: !this.state.clickedMediaUpload
    })
  }

  componentDidMount = () => {
    this.props.getMedia(this.props.user.id)
  }

  componentDidUpdate = (prevProps) => {
    console.log(this.props);
    console.log(prevProps);
    // if(this.props.resume.resume_url !== prevProps.user.resume.resume_url) {
    //   this.props.getResume(this.props.user.id)
    // } else {
    //   return
    // }
  }

  renderCards = () => {
    if(this.props.media) {
      return this.props.media.map((mediaObj, index) => <MediaCard key={index} media={mediaObj} />)
    }
  }

  render() {
    console.log(this.props);
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

const mapStateToProps = ({media, clickedUser}) => {
  return {media, clickedUser}
}

export default connect(mapStateToProps, {getMedia})(withRouter(MediaListContainer))
