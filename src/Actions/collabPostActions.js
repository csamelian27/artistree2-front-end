const showAllCollabs = (collabPosts) => ({type: 'SHOW_ALL_COLLABS', payload: collabPosts})

export const getAllCollabs = () => {
  return dispatch => {
    let token = localStorage.token
    return fetch('http://localhost:3000/api/v1/collab_posts', {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(collabPosts => {
        console.log(collabPosts);
        dispatch(showAllCollabs(collabPosts))
      })
  }
}

export const postCollabPost = (postData, userId) => {
  return dispatch => {
    console.log('CollabPost User ID', userId);
    console.log('CollabPost Data', postData);
    let token = localStorage.token
    const formData = new FormData()
    const { title, description, seeking } = postData

    formData.append('collab_post[title]', title)
    formData.append('collab_post[description]', description)
    formData.append('collab_post[seeking]', seeking)
    formData.append('collab_post[user_id]', userId)

    return fetch('http://localhost:3000/api/v1/collab_posts', {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: formData
    })
      .then(resp => resp.json())
      .then(collabPost => {
        console.log(collabPost);
      })
  }
}
