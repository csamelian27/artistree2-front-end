const initialState = {
  user: {},
  media: []
}

 export default function reducer(state = initialState, action) {
   switch(action.type) {
     // case('ADD_USER'):
     // console.log('inside add_user')
     //  return {user: action.payload}
    // case('ADD_AUTH'):
    //   return {user: action.payload}
    case('ADD_MEDIA'):
      return {media_item: action.payload}
    case('SHOW_MEDIA'):
      return {media: [...state.media, action.payload.media_items]}
     default:
      return state
   }
 }
