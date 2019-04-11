import React from 'react'
import { Grid, Header, Label } from 'semantic-ui-react'
import ReactAudioPlayer from 'react-audio-player';

const MediaCard = (props) => {
  console.log(props.media);
  return (
    <div id="media-card">
      <Grid.Column>


          {props.media.file_type === 'Image' ? <img id="media-img" className="media-item" src={props.media && props.media.file ? props.media.file.file_url : <h3>fucked up</h3>} /> : null}

          {props.media.file_type === 'Document' ? <embed className="media-item" src={props.media.file.file_url} width="500" height="705" type="application/pdf" /> : null}

          {props.media.file_type === 'Video' ? <video autoPlay muted loop className="media-item" id="media-vid">
            <source src={props.media.file.file_url} />
          </video> : null}

          {props.media.file_type === 'Audio' ? <ReactAudioPlayer controls className="media-item" id="media-song" src={props.media.file.file_url} /> : null}

        <br></br><Label id="media-desc">{props.media.description}</Label><br></br>
      </Grid.Column>
    </div>
  )
}

export default MediaCard


// <h1>Title: {props.media.title}</h1>
// <h4>Description: {props.media.description}</h4>

// <Label textAlign='center' id="category-header">{props.media.category}</Label><br></br>
