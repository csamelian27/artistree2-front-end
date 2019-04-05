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
      console.log('inside show media reducer');
      console.log(action.payload);
      console.log(state.media);
      return {media: action.payload}
     default:
      return state
   }
 }
