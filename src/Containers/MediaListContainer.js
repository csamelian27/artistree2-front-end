import React from 'react'
import MediaCard from '../Components/MediaCard'
import { connect } from 'react-redux'
import { getMedia } from '../Actions/mediaItemActions'
import { withRouter } from 'react-router-dom'
import { Grid, Button, Header } from 'semantic-ui-react'

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

  renderCards = () => {
    if(this.props.media){
    return this.props.media.map((mediaObj, index) => <MediaCard key={index} media={mediaObj} />)}
  }

  render() {
    return (
      <Grid fluid>
        <Header as='h2' icon textAlign='center'>Media List</Header>
        <Grid.Row centered columns={1}>
          {this.state.clickedMediaUpload ? null : <Button primary onClick={this.handleClickMediaUpload}>Upload New Media</Button>}
        </Grid.Row>
        <Grid.Row centered columns='equal'>
          {this.state.clickedMediaUpload ? this.props.history.push('/media_upload') : this.renderCards()}
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = ({media}) => {
  return {media}
}

export default connect(mapStateToProps, {getMedia})(withRouter(MediaListContainer))
