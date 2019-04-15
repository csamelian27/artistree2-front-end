import React from 'react'
import { withRouter } from 'react-router-dom'

class CollabContainer extends React.Component {

  state = {
    open: false
  }

  handleClick = (e) => {
    if(e.target.className.includes('resume')) {
      console.log('resume');
      this.props.history.push('/users/resume')
    } else if(e.target.className.includes('workExp')) {
      console.log('workExp');
    } else if(e.target.className.includes('media')) {
      console.log('media');
    }
  }

  render() {
    // const { open } = this.state
    return (
      <div>
        
      </div>
    )
  }
}

export default withRouter(CollabContainer)
