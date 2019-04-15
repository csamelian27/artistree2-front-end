import React from 'react'
import { Card, Feed, Grid } from 'semantic-ui-react'
import MediaFeedCard from '../Components/MediaFeedCard'
import { getAllMedia } from '../Actions/mediaItemActions'
import { connect } from 'react-redux'

class MediaFeedContainer extends React.Component {

  componentDidMount = () => {
    this.props.getAllMedia()
  }

  renderCards = () => {
    const cards = this.props.allMedia.map(mediaItem => <MediaFeedCard key={mediaItem.id} media={mediaItem} />)
    return cards
  }

  render(){
    console.log(this.props);
    return (
        <Card id="feed-container">
          <Card.Content>
            <Card.Header>Recent Media Items Uploaded</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              {this.props.allMedia.length > 0 ? this.renderCards() : null}
            </Feed>
          </Card.Content>
        </Card>
    )
  }
}

const mapStateToProps = ({allMedia}) => {
  return {allMedia}
}

export default connect(mapStateToProps, {getAllMedia})(MediaFeedContainer)
