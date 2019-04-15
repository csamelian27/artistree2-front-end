import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMedia } from '../Actions/mediaItemActions'
import { Container, Grid, Label, Button } from 'semantic-ui-react'
import ReactAudioPlayer from 'react-audio-player';

class Media extends React.Component {

  componentDidMount = () => {
    if(this.props.clickedUser) {
      this.props.getMedia(this.props.clickedUser.id)
    }
  }

  renderCards = () => {
    const { media } = this.props
    if(media) {
      return media.map(media => {
        if(media.file_type === 'Image') {
          console.log('Image');
          return <img id="media-img" className="media-item" src={media.file ? media.file.file_url : null} />
          console.log('Image');
        } else if (media.file_type === 'Video') {
          console.log('Video');
          return <video autoPlay muted loop className="media-item" id="media-vid">
            <source src={media.file ? media.file.file_url : null} />
          </video>
        } else if (media.file_type === 'Document') {
          console.log('Document');
          return <embed className="media-item" src={media.file ? media.file.file_url : null} width="500" height="705" type="application/pdf" />
        }
      })
    }
  }

  render(){
    console.log(this.props);
    return(
      <Container id="media-pg">
        <div id="media-card">
          <Grid.Column>
            <Button secondary onClick={this.props.history.goBack}>Back</Button>
            {this.renderCards()}

          </Grid.Column>
        </div>
      </Container>
    )
  }
}

// {this.props.media.file_type === 'Image' ? <img id="media-img" className="media-item" src={this.props.media && this.props.media.file ? this.props.media.file.file_url : <h3>fucked up</h3>} /> : null}
//
// {this.props.media.file_type === 'Document' ? <embed className="media-item" src={this.props.media.file.file_url} width="500" height="705" type="application/pdf" /> : null}
//
// {this.props.media.file_type === 'Video' ? <video autoPlay muted loop className="media-item" id="media-vid">
//   <source src={this.props.media.file.file_url} />
// </video> : null}
//
// {this.props.media.file_type === 'Audio' ? <ReactAudioPlayer controls className="media-item" id="media-song" src={this.props.media.file.file_url} /> : null}
// <br></br><Label id="media-desc">{this.props.media.description}</Label><br></br>

const mapStateToProps = ({clickedUser, media}) => {
  return {clickedUser, media}
}

export default withRouter(connect(mapStateToProps, { getMedia })(Media))
