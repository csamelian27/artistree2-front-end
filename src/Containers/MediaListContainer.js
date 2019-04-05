import React from 'react'
import MediaCard from '../Components/MediaCard'
import { connect } from 'react-redux'
import { getMedia } from '../Actions/mediaItemActions'

class MediaListContainer extends React.Component {

  componentDidMount = () => {
    this.props.getMedia(this.props.user.id)
  }

  render() {
    const userMedia = this.props.media[1]
    console.log(this.props.media);

    return (
      <div id="media-list">
        <h1>Media List</h1>
        {userMedia ? userMedia.map((mediaObj, index) => <MediaCard key={index} media={mediaObj} />) : <h1>Upload some media</h1>}
      </div>
    )
  }
}

const mapStateToProps = ({media}) => {
  return {media}
}

export default connect(mapStateToProps, {getMedia})(MediaListContainer)
