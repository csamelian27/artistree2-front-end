const initialState = {
  user: {}
}

 export default function reducer(state = initialState, action) {
   switch(action.type) {
     case('ADD_USER'):
     console.log('inside add_user')
      return {user: action.payload}
    case('ADD_AUTH'):
      return {user: action.payload}
     default:
      return state
   }
 }
