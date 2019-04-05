import React from 'react'

const MediaCard = (props) => {
  console.log(props.media);
  return (
    <div id="media-card">
      <h1>Media Card</h1>
      <img id="media-img" src={props.media && props.media.file ? props.media.file.file_url : <h3>fucked up</h3>} />
    </div>
  )
}

export default MediaCard
