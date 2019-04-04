import React from 'react';
import { Button, Dropdown, Image, Input, Menu } from 'semantic-ui-react'
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux'

class Nav extends React.Component {

  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">

              <div className="navbar-header">
                <Menu>
                  <Menu.Item as={NavLink} exact to="/home" name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />

                  <Menu.Item as={NavLink} exact to="/profile" name="profile" active={activeItem === 'profile'} />


                  <Menu.Item as={NavLink} exact to="/users-home" name="users" active={activeItem === 'users'} />
                  
                  </Menu>
              </div>

                <NavLink to="/login">
                  {this.props.user && localStorage.token ? <button type="button" className="btn btn-light navbar-btn navbar-right" onClick={this.props.handleLogout} >Log Out</button> : <button type="button" className="btn btn-light navbar-btn navbar-right">Log in</button>}
                </NavLink>
                <NavLink to="/signup">
                <button type="button" className="btn btn-light navbar-btn navbar-right">Sign up</button>
                </NavLink>
          </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps)(Nav);







// <Menu inverted>
//   <Menu.Item name='icon' onClick={() => console.log('icon')}>
//     <Image src='' size='mini'/>
//   </Menu.Item>
//
//
//
//   <Menu.Item
//     as={NavLink} exact to="/"
//     name=''
//     active={activeItem === ''}
//     onClick={this.handleItemClick} />
//
//   <Menu.Item
//     as={NavLink} exact to="/"
//     name=''
//     active={activeItem === ''}
//     onClick={this.handleItemClick} />
//
//   { Object.keys(this.props.user).length > 0 ?
//     <Menu.Item
//     as={NavLink} exact to="/"
//     name=''
//     active={activeItem === ''}
//     onClick={this.handleItemClick} /> : null }
//
//
//   <Menu.Menu position='right'>
//     <Menu.Item>
//       <Input icon='search' placeholder='Search...' />
//     </Menu.Item>
//
//     {Object.keys(this.props.user).length > 0  ?
//       (<Dropdown item text={this.props.user.username} color='teal' active={activeItem === 'user' } onClick={this.handleItemClick}>
//       <Dropdown.Menu>
//         <Dropdown.Item as={NavLink} exact to="/user">Profile</Dropdown.Item>
//         <Dropdown.Item as={NavLink} exact to="/settings">Settings</Dropdown.Item>
//         <Dropdown.Item as={Button} onClick={this.props.logOut}>Logout</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>) :
//     (<Menu.Item
//       as={NavLink} exact to="/login"
//       name='login'
//       active={activeItem === 'login'}
//       onClick={this.handleItemClick} />) }
//   </Menu.Menu>
//
// </Menu>
