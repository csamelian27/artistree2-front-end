import React from 'react'
import { Container, Header } from 'semantic-ui-react'

class Home extends React.Component {

  render(){
    return (
      <div id="home">
        <Container className='welcome'> <Header as='h2'>WELCOME TO ARTISTREE</Header></Container>
      </div>
    )
  }
}

export default Home



// <video autoPlay loop id='background-video'>
// <source src='/art.mp4' type='video/mp4'/>
// </video>
