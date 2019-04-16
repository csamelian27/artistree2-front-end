import React from 'react'
import { Container } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class Home extends React.Component {

  // handleClickBtn = () => {
  //   var video = document.getElementById("myVideo");
  //   var btn = document.getElementById("myBtn");
  //
  //   if (video.paused) {
  //     video.play();
  //     btn.innerHTML = "Pause";
  //   } else {
  //     video.pause();
  //     btn.innerHTML = "Play";
  //   }
  // }

  handleClick = () => {
    this.props.history.push('/signup')
  }

  render(){
    return (
      <div id="home">


        <header>
          <section className="header-content">
            <video autoPlay muted loop id="myVideo" className="rocky-dashed animate-pop-in" >
              <source src='rain.mp4' type="video/mp4" />
            </video>
            <Container id='home-splash'>
              <p id='titles' className="header-title animate-pop-in">WELCOME TO ARTISTREE</p>
              <p id='titles' className="header-subtitle animate-pop-in">A one stop shop for Artists' portfolios, collaborations & inspiration!</p>
            </Container>
          </section>
        </header>

        <div id="content">
          <h3>Created by</h3>
          <h5>Cassidy Samelian</h5>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)



// <Container className='welcome'> <Header as='h2'>WELCOME TO ARTISTREE</Header></Container>


  // <button id="myBtn" onclick={this.handleClickBtn}>Pause</button>
