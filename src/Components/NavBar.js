import React from 'react';
import { NavLink } from "react-router-dom";
import { Menu, Button, Select, Input, Dropdown } from 'semantic-ui-react'
// import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux'

class Nav extends React.Component {

  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    let userName
    if(this.props.user) {userName = this.props.user.full_name}

    let loginOptions = null;
    if(localStorage.token) {
        loginOptions = (
          <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>

            <Dropdown
                item
                text={userName !== "undefined" ? userName : null}
                active={(activeItem === "user").toString()}
                onClick={this.handleItemClick}
              >
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} exact to="/profile">
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item as={Button} exact to="/logout" onClick={this.props.handleLogout}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </Menu.Menu>
        )
    } else {
      loginOptions = (
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            exact
            to="/signup"
            name="signup"
            active={activeItem === "signup"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            exact
            to="/login"
            name="login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      )
    }

        const options = [
        { key: 'all', text: 'All', value: 'all' },
        { key: 'articles', text: 'Articles', value: 'articles' },
        { key: 'products', text: 'Products', value: 'products' },
        ]

    return (
              <Menu id="nav-menu">
                <Menu.Item as={NavLink} exact to="/home" name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />

                <Menu.Item as={NavLink} exact to="/browse-users" name="All Users" active={activeItem === 'All Users'} />

                <Menu.Item as={NavLink} exact to="/collaborations" name="Collaborations" active={activeItem === 'Collaborations'} />

                <Menu.Menu position='right'>
                  <Menu.Item header as='h1' id="site-title">Welcome To ArtisTree!</Menu.Item>
                </Menu.Menu>

                {loginOptions}

              </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps)(Nav);



// <Dropdown.Item as={NavLink} exact to="/profile">
//   Profile
// </Dropdown.Item>


// import { Button, Dropdown, Image, Input, Menu } from 'semantic-ui-react'


// {this.props.user && localStorage.token ? <button type="button" className="btn btn-light navbar-btn navbar-right" onClick={this.props.handleLogout} >Log Out</button> : <button type="button" className="btn btn-light navbar-btn navbar-right">Log in</button>}
