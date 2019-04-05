import React from 'react'
import MediaCard from '../Components/MediaCard'
import { connect } from 'react-redux'
import { getMedia } from '../Actions/mediaItemActions'

class MediaListContainer extends React.Component {

  componentDidMount = () => {
    this.props.getMedia(this.props.user.id)
  }

  renderCards = () => {
    if(this.props.media){
    return this.props.media.map((mediaObj, index) => <MediaCard key={index} media={mediaObj} />)}
  }

  render() {
    return (
      <div id="media-list">
        <h1>Media List</h1>
        {this.renderCards()}
      </div>
    )
  }
}

const mapStateToProps = ({media}) => {
  return {media}
}

export default connect(mapStateToProps, {getMedia})(MediaListContainer)
