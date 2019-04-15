import React from 'react'
import { Feed } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setClickedMedia } from '../Actions/mediaItemActions'

const MediaFeedCard = (props) => {
  console.log(props);

  const handleFileTypes = () => {
    if(props.media.file_type === 'Image') {
      return <img onClick={handleClickMedia} id='feed-img' src={props.media.file.file_url} alt="media-feed" />
    } else if (props.media.file_type === 'Video') {
      return <video onClick={handleClickMedia} id='feed-vid' autoPlay muted loop>
        <source src={props.media.file.file_url} />
      </video>
    } else if (props.media.file_type === 'Document') {
      return <embed id="feed-doc" src={props.media.file.file_url} type="application/pdf" />
    }
  }

  const handleClickMedia = () => {
    props.setClickedMedia(props.media)
    props.history.push(`/media/${props.media.id}`)
  }

  return (
    <Feed.Event>
      <Feed.Label image={handleFileTypes} />
      <Feed.Content>
        <Feed.Date id='feed-info' content='1 day ago' />
        <Feed.Summary>
          <div id='feed-info'>{props.media.user.full_name} added a new {props.media.file_type}</div>
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  )
}

export default withRouter(connect(null, { setClickedMedia })(MediaFeedCard))

// media:
// category: "Film"
// description: "Choreogrpahre↵d↵as↵f↵asd↵af"
// file: {file_url: "https://artistree-dev.s3.amazonaws.com/RBSrv165eDw…f1cac87890142a1414e0d27e9b76a0715ee6e43fdd3064135"}
// file_type: "Video"
// id: 3
// title: "A film of Cassidy dancing"
// user: {id: 2, full_name: "Cliff Gabriel", email: "cliff@cliff.com", avatar: {…}}
// user_id: 2
