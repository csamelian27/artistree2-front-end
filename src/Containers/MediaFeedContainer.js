import React from 'react'
import { Card, Feed, Grid } from 'semantic-ui-react'
import MediaFeedCard from '../Components/MediaFeedCard'

const MediaFeedContainer = (props) => {
  return (
      <Card id="feed-container">
        <Card.Content>
          <Card.Header>Recent Activity</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <MediaFeedCard />
          </Feed>
        </Card.Content>
      </Card>
  )
}

export default MediaFeedContainer
