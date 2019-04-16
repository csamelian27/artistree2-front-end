import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class UserShow extends React.Component {

  state = {
    open: false
  }

  handleClick = (e) => {
    if(e.target.className.includes('resume')) {
      console.log('resume');
      this.props.history.push('/users/resume')
    } else if(e.target.className.includes('workExp')) {
      console.log('workExp');
      this.props.history.push('/users/workExps')
    } else if(e.target.className.includes('user-info')) {
      console.log('User Info');
      this.props.history.push('/users/user-info')
    } else if(e.target.className.includes('media')) {
      console.log('media');
      this.props.history.push('/users/media')
    }
  }

  render(){
    console.log(this.props);
    // const { open } = this.state
    return(
      <div>
        <section className="strips">
          <article className="strips__strip">
            <div className="strip__content user-info-click" onClick={this.handleClick}>
              <h1 className="strip__title" data-name="Lorem">Artist Info</h1>
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

const mapStateToProps = ({ clickedUser }) => {
  return {clickedUser}
}

export default withRouter(connect(mapStateToProps)(UserShow))
