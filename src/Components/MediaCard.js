import React from 'react'

const MediaCard = (props) => {
  console.log(props.media);
  return (
    <div id="media-card">
      <h2>Category: {props.media.category}</h2>
      <img id="media-img" src={props.media && props.media.file ? props.media.file.file_url : <h3>fucked up</h3>} />
      {props.media.title === 'pdf' ? <embed src={props.media.file.file_url} width="500" height="700" type="application/pdf" /> : null}
    </div>
  )
}

export default MediaCard


// <h1>Title: {props.media.title}</h1>
// <h4>Description: {props.media.description}</h4>


// <video autoPlay muted loop id="media-vid">
//   <source src={props.media.title === 'film' ? props.media.file.file_url : null} />
// </video>
