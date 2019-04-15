import React from 'react'

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

  render(){
    return (
      <div id="home">
        <video autoPlay muted loop id="myVideo">
          <source src='rain.mp4' type="video/mp4" />
        </video>

        <div id="content">
          <h3>Created by</h3>
          <h5>Cassidy Samelian</h5>
        </div>
      </div>
    )
  }
}

export default Home



// <Container className='welcome'> <Header as='h2'>WELCOME TO ARTISTREE</Header></Container>


  // <button id="myBtn" onclick={this.handleClickBtn}>Pause</button>
