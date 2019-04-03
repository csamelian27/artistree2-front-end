import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown, Image, Input, Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return (
      <Menu inverted>
        <Menu.Item name='icon' onClick={() => console.log('icon')}>
          <Image src='' size='mini'/>
        </Menu.Item>

        <Menu.Item as={NavLink} exact to="/home" name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />

        <Menu.Item
          as={NavLink} exact to="/"
          name=''
          active={activeItem === ''}
          onClick={this.handleItemClick} />

        <Menu.Item
          as={NavLink} exact to="/"
          name=''
          active={activeItem === ''}
          onClick={this.handleItemClick} />

        { Object.keys(this.props.user).length > 0 ?
          <Menu.Item
          as={NavLink} exact to="/"
          name=''
          active={activeItem === ''}
          onClick={this.handleItemClick} /> : null }


        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>

          {Object.keys(this.props.user).length > 0  ?
            (<Dropdown item text={this.props.user.username} color='teal' active={activeItem === 'user' } onClick={this.handleItemClick}>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} exact to="/user">Profile</Dropdown.Item>
              <Dropdown.Item as={NavLink} exact to="/settings">Settings</Dropdown.Item>
              <Dropdown.Item as={Button} onClick={this.props.logOut}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>) :
          (<Menu.Item
            as={NavLink} exact to="/login"
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick} />) }
        </Menu.Menu>

      </Menu>
    )
  }
}

export default NavBar
