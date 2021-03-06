import React from 'react'
import { Grid, Label } from 'semantic-ui-react'
import ReactAudioPlayer from 'react-audio-player';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { setClickedMedia } from '../Actions/mediaItemActions'

const MediaCard = (props) => {
  console.log(props.media);

  const handleClickMedia = () => {
    props.setClickedMedia(props.media)
    props.history.push(`/media/${props.media.id}`)
  }

  return (
    <div id="media-card">
      <Grid.Column>
          {props.media.file_type === 'Image' ? <img onClick={handleClickMedia} id="media-img" className="media-item" alt='Media' src={props.media && props.media.file ? props.media.file.file_url : <h3>fucked up</h3>} /> : null}

          {props.media.file_type === 'Document' ? <embed onClick={handleClickMedia} className="media-item" src={props.media.file.file_url} width="500" height="705" type="application/pdf" /> : null}

          {props.media.file_type === 'Video' ? <video onClick={handleClickMedia} autoPlay muted loop className="media-item" id="media-vid">
            <source src={props.media.file.file_url} />
          </video> : null}

          {props.media.file_type === 'Audio' ? <ReactAudioPlayer controls className="media-item" id="media-song" src={props.media.file.file_url} /> : null}

        <br></br><Label id="media-desc">{props.media.description}</Label><br></br>
      </Grid.Column>
    </div>
  )
}

export default connect(null, { setClickedMedia })(withRouter(MediaCard))


// <h1>Title: {props.media.title}</h1>
// <h4>Description: {props.media.description}</h4>

// <Label textAlign='center' id="category-header">{props.media.category}</Label><br></br>
