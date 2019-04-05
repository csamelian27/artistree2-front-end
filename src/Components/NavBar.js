import React from 'react';
import { Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
// import { Route, Switch, withRouter } from "react-router-dom";
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
              <Menu id="nav-menu">
                <Menu.Item as={NavLink} exact to="/home" name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />

                <Menu.Item as={NavLink} exact to="/profile" name="profile" active={activeItem === 'profile'} />

                <Menu.Item as={NavLink} exact to="/users-home" name="users" active={activeItem === 'users'} />

                <Menu.Menu position='right'>
                {this.props.user && localStorage.token ?
                  <Menu.Item as={NavLink} exact to="/logout" name="logout" active={activeItem === 'logout'} onClick={this.props.handleLogout} /> :

                  <Menu.Item as={NavLink} exact to="/login" name="login" active={activeItem === 'login'} />
                }

                <Menu.Item as={NavLink} exact to="/signup" name="signup" active={activeItem === 'signup'} />

                </Menu.Menu>
              </Menu>
            </div>
          </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps)(Nav);




// import { Button, Dropdown, Image, Input, Menu } from 'semantic-ui-react'


// {this.props.user && localStorage.token ? <button type="button" className="btn btn-light navbar-btn navbar-right" onClick={this.props.handleLogout} >Log Out</button> : <button type="button" className="btn btn-light navbar-btn navbar-right">Log in</button>}

// <Menu.Menu position='right'>
//          <Menu.Item>
//            <Input icon='search' placeholder='Search...' />
//          </Menu.Item>
//
//          {Object.keys(this.props.user).length > 0  ?
//            (<Dropdown item text={this.props.user.username} color='teal' active={activeItem === 'user' } onClick={this.handleItemClick}>
//            <Dropdown.Menu>
//              <Dropdown.Item as={NavLink} exact to="/user">Profile</Dropdown.Item>
//              <Dropdown.Item as={NavLink} exact to="/settings">Settings</Dropdown.Item>
//              <Dropdown.Item as={Button} onClick={this.props.logOut}>Logout</Dropdown.Item>
//            </Dropdown.Menu>
//          </Dropdown>) :
//          (<Menu.Item
//            as={NavLink} exact to="/login"
//            name='login'
//            active={activeItem === 'login'}
//            onClick={this.handleItemClick} />) }
//        </Menu.Menu>
