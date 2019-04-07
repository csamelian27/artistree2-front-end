import React from 'react'

const ResumeContainer = (props) => {

  return(
    <div id="resume-container">
      <h1>Resume Container</h1>
      {props.user.resume.resume_url ? <embed src={props.user.resume.resume_url} width="500" height="700" type="application/pdf" /> : null}
    </div>
  )

}

export default ResumeContainer
