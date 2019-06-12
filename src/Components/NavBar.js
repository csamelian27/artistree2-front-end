import React from 'react';
import { NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react'
// import { Menu, Button, Input, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Nav extends React.Component {

  state = { activeItem: ''}

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  render() {
    console.log(this.props);
    const { activeItem } = this.state

    let loginOptions = null;
    if(localStorage.token) {
        loginOptions = (
          <Menu.Menu position='right'>
            <Menu.Item
              as={NavLink}
              exact
              to="/profile"
              name={this.props.loggedInUser.user ? this.props.loggedInUser.user.full_name : this.props.loggedInUser.full_name}
              active={activeItem === "Profile"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              exact
              to="/logout"
              name="Logout"
              active={activeItem === "Logout"}
              onClick={this.props.handleLogout}
            />
          </Menu.Menu>
        )
    } else {
      loginOptions = (
        <Menu.Menu position='right'>
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

    return (
              <Menu id="nav-menu">
                <Menu.Item as={NavLink} exact to="/home" name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />

                <Menu.Item as={NavLink} exact to="/browse-users" name="All Users" active={activeItem === 'All Users'} />

                <Menu.Item as={NavLink} exact to="/collaborations" name="Collaborations" active={activeItem === 'Collaborations'} />

                <Menu.Menu position='right'>
                  <Menu.Item header as='h1' id="site-title">ArtisTree!</Menu.Item>
                </Menu.Menu>

                {loginOptions}

              </Menu>
    )
  }
}

const mapStateToProps = ({ loggedInUser }) => {
  return {loggedInUser}
}

export default connect(mapStateToProps)(Nav);


// {this.state.clickedLogout ? null : <Menu.Item header as='h5'>{this.props.loggedInUser.user ? this.props.loggedInUser.user.full_name : this.props.loggedInUser.full_name}</Menu.Item>}


// if(localStorage.token) {
//     loginOptions = (
//       <Menu.Menu position='right'>
//         <Menu.Item>
//             <Input icon="search" placeholder="Search..." />
//           </Menu.Item>
//
// SEARCH OPTIONS (goes under render() before return):
//    const options = [
//    { key: 'all', text: 'All', value: 'all' },
//    { key: 'articles', text: 'Articles', value: 'articles' },
//    { key: 'products', text: 'Products', value: 'products' },
//    ]
//
//         <Dropdown
//             item
//             id='dropdown'
//             text={this.props.loggedInUser.user ? this.props.loggedInUser.user.full_name : this.props.loggedInUser.full_name}
//             active={(activeItem === "user").toString()}
//             onClick={this.handleItemClick}
//           >
//             <Dropdown.Menu id='dropdown'>
//               <Dropdown.Item id='dropdown' as={NavLink} exact to="/profile">
//                 Profile
//               </Dropdown.Item>
//               <Dropdown.Item id='dropdown' as={NavLink} exact to="/logout" onClick={this.props.handleLogout}>
//                 Logout
//               </Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//       </Menu.Menu>
//     )
// } else {
//   loginOptions = (
//     <Menu.Menu position='right'>
//       <Menu.Item>
//         <Input icon="search" placeholder="Search..." />
//       </Menu.Item>
//       <Menu.Item
//         as={NavLink}
//         exact
//         to="/signup"
//         name="signup"
//         active={activeItem === "signup"}
//         onClick={this.handleItemClick}
//       />
//       <Menu.Item
//         as={NavLink}
//         exact
//         to="/login"
//         name="login"
//         active={activeItem === "login"}
//         onClick={this.handleItemClick}
//       />
//     </Menu.Menu>
//   )
// }
