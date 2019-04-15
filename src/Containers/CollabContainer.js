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
        <section className="strips">
          <article className="strips__strip">
            <div className="strip__content resume-click" onClick={this.handleClick}>
              <h1 className="strip__title" data-name="Lorem">Resume</h1>
              <div className="strip__inner-text">
                <h2>Ettrics</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
                <p>
                  <a href="https://twitter.com/ettrics" target="_blank" rel='noopener noreferrer'><i className="fa fa-twitter"></i></a>
                </p>
              </div>

            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content workExp-click" onClick={this.handleClick}>
              <h1 className="strip__title" data-name="Ipsum">Work Experiences</h1>
              <div className="strip__inner-text">
                <h2>Ettrics</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
                <p>
                  <a href="https://twitter.com/ettrics" target="_blank" rel='noopener noreferrer'><i className="fa fa-twitter"></i></a>
                </p>
              </div>
            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content media-click" onClick={this.handleClick}>
              <h1 className="strip__title" data-name="Dolor">Media Samples</h1>
              <div className="strip__inner-text">
                <h2>Ettrics</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
                <p>
                  <a href="https://twitter.com/ettrics" target="_blank" rel='noopener noreferrer'><i className="fa fa-twitter"></i></a>
                </p>
              </div>
            </div>
          </article>
          <i className="fa fa-close strip__close"></i>
        </section>
      </div>
    )
  }
}

export default withRouter(CollabContainer)
