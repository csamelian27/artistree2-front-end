const initialState = {
  user: {},
  media: [],
  resume: {}
}

 export default function reducer(state = initialState, action) {
   switch(action.type) {
     // case('ADD_USER'):
     // console.log('inside add_user')
     //  return {user: action.payload}
    // case('ADD_AUTH'):
    //   return {user: action.payload}
    case('SHOW_RESUME'):
      console.log(action.payload);
      return {...state, resume: action.payload}
    case('ADD_MEDIA'):
      return {...state, media_item: action.payload}
    case('SHOW_MEDIA'):
      console.log('inside show media reducer');
      console.log(action.payload);
      console.log(state.media);
      return {...state, media: action.payload}
    case('ADD_RESUME'):
      console.log('inside add resume reducer');
      console.log(action.payload);
      return {...state, resume: action.payload}
     default:
      return state
   }
 }
