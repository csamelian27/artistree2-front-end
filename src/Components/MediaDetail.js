import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, Header } from 'semantic-ui-react'

const MediaDetail = (props) => {
  console.log(props);

  const handleEditMedia = () => {
    props.history.push(`/media-edit/${props.clickedMedia.id}`)
  }

  return(
    <div>
      <Button secondary onClick={props.history.goBack}>Back</Button>

      {props.user.id === props.clickedMedia.user_id ? <Button secondary onClick={handleEditMedia}>Edit</Button> : null}

      <Header>{props.clickedMedia.title}</Header>

      {props.clickedMedia.file_type === 'Video' ? <video id="detail" controls autoPlay loop> <source src={props.clickedMedia.file.file_url} /></video> : null}

      {props.clickedMedia.file_type === 'Image' ? <img id="detail" src={props.clickedMedia.file.file_url} /> : null}

      {props.clickedMedia.file_type === 'Document' ? <embed id="detail" src={props.clickedMedia.file.file_url} type="application/pdf" /> : null}

      <div>{props.clickedMedia.description}</div>

    </div>
  )
}

const mapStateToProps = ({clickedMedia}) => {
  return {clickedMedia}
}

export default connect(mapStateToProps)(withRouter(MediaDetail))
