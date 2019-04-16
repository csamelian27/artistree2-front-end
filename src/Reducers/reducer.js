const initialState = {
  media: [],
  resume: {},
  resumes: [],
  workExps: [],
  allUsers: [],
  clickedUser: {},
  clickedMedia: {},
  loggedInUser: {},
  allMedia: [],
  collabPosts: []
}

 export default function reducer(state = initialState, action) {
   switch(action.type) {
     // case('ADD_USER'):
     // console.log('inside add_user')
     //  return {user: action.payload}
    // case('ADD_AUTH'):
    //   return {user: action.payload}

    case('LOG_IN_USER'):
      return {...state, loggedInUser: action.payload}
    case('SHOW_ALL_USERS'):
      console.log(action.payload);
      return {...state, allUsers: action.payload}
    case('SHOW_ONE_USER'):
      console.log(action.payload);
      return {...state, clickedUser: action.payload}
    case('SHOW_USER_RESUMES'):
      console.log(action.payload);
      return {...state, resumes: action.payload}
    case('SHOW_WORK_EXPS'):
      console.log(action.payload);
      return {...state, workExps: action.payload}
    case('SHOW_MEDIA'):
      console.log('inside show media reducer');
      console.log(action.payload);
      return {...state, media: action.payload}
    case('SHOW_ALL_MEDIA'):
      console.log(action.payload);
      return {...state, allMedia: action.payload}
    case('SHOW_ALL_COLLABS'):
      return {...state, collabPosts: action.payload}

    case('ADD_RESUME'):
      console.log('inside add resume reducer');
      console.log(action.payload);
      return {...state, resume: action.payload}
    case('ADD_WORK_EXP'):
      console.log('inside add WORK EXP reducer');
      console.log(action.payload);
      return {...state, workExps: [...state.workExps, action.payload]}
    case('ADD_MEDIA'):
      return {...state, media: [...state.media, action.payload]}

    case('SET_CLICKED_MEDIA'):
      return {...state, clickedMedia: action.payload}

     default:
      return state
   }
 }
