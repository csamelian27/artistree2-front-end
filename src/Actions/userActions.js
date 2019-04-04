// const addUser = (user) => ({type: 'ADD_USER', payload: user})
// const addAuth = (user) => ({type: 'ADD_AUTH', payload: user})
//
// export const createUser = (userInfo) => {
//   console.log(userInfo);
//   return dispatch => {
//     return fetch("http://localhost:3000/api/v1/users", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         "accepts": "application/json"
//       },
//       body: JSON.stringify({user: userInfo})
//     })
//       .then(resp => resp.json())
//       .then(userData => {
//         console.log(userData);
//         localStorage.setItem("token", userData.jwt);
//         dispatch(addUser(userData))
//       });
//   }
// }
//
// export const createAuth = (userInfo) => {
//   return dispatch => {
//     return fetch("http://localhost:3000/api/v1/login", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         "accepts": "application/json"
//       },
//       body: JSON.stringify({user: userInfo})
//     })
//       .then(resp => resp.json())
//       .then(userData => {
//         console.log(userData);
//         // if(userData.message) {
//         //   this.props.history.push("/login");
//         // } else {
//         //   this.setState({ user: userData.user })
//         localStorage.setItem("token", userData.jwt)
//         dispatch(addAuth(userData))
//         //   this.props.history.push("/home")
//         // }
//       });
//   }
// }
