import React from 'react'
import { Container, Header } from 'semantic-ui-react'

class Home extends React.Component {

  handleClickBtn = () => {
    var video = document.getElementById("myVideo");
    var btn = document.getElementById("myBtn");

    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }

  render(){
    return (
      <div id="home">
        <video autoPlay muted loop id="myVideo">
          <source src='rain.mp4' type="video/mp4" />
        </video>

      <div class="content">
        <h1>Heading</h1>
        <p>Lorem ipsum...</p>

        <button id="myBtn" onclick={this.handleClickBtn}>Pause</button>
      </div>
        <Container
        ner className='welcome'> <Header as='h2'>WELCOME TO ARTISTREE</Header></Container>
      </div>
    )
  }
}

export default Home
