const showAllCollabs = (collabPosts) => ({type: 'SHOW_ALL_COLLABS', payload: collabPosts})
const gatherCollabs = (collab) => ({type: 'GATHER_COLLABS', payload: collab})

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
        dispatch(getAllCollabs())
      })
  }
}

export const createCollaboration = (creatorId, claimerId, collabId) => {
  return dispatch => {
    let token = localStorage.token
    const formData = new FormData()

    formData.append('collaboration[collaboratee_id]', creatorId)
    formData.append('collaboration[collaborator_id]', claimerId)
    formData.append('collaboration[collab_post_id]', collabId)

    return fetch('http://localhost:3000/api/v1/collaborations', {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: formData
    })
    .then(resp => resp.json())
    .then(collaboration => {
      console.log(collaboration);
      let token = localStorage.token
      const formData = new FormData()

      formData.append('collab_post[claimed?]', true)

      return fetch(`http://localhost:3000/api/v1/collab_posts/${collabId}`, {
        method: 'PATCH',
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData
      })
        .then(resp => resp.json())
        .then(collabPost => {
          console.log('Claimed true?', collabPost);
        })
    })
  }
}

export const getAllUserCollabs = (userId) => {
  return dispatch => {
    let token = localStorage.token

    return fetch(`http://localhost:3000/api/v1/users/${userId}`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(user => {
        console.log(user);
        console.log(user.collab_posts);
        console.log(user.collaborated_users);
        if(user.collaborated_users){
          user.collaborated_users.map(collab => {
            return fetch(`http://localhost:3000/api/v1/collab_posts/${collab.collab_post_id}`, {
              method: 'GET',
              headers: {
                "Authorization": `Bearer ${token}`
              }
            })
              .then(resp => resp.json())
              .then(collabPost => {
                dispatch(gatherCollabs(collabPost))
              })
          })
        }
        // dispatch(showAllUserCollabs(u))
      })
  }
}









//
