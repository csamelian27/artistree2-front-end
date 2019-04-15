const addMedia = (mediaItem) => ({type: 'ADD_MEDIA', payload: mediaItem})
const showMedia = (media) => ({type: 'SHOW_MEDIA', payload: media})
export const setClickedMedia = (media) => ({type: 'SET_CLICKED_MEDIA', payload: media})
const showAllMedia = (media) => ({type: 'SHOW_ALL_MEDIA', payload: media})

export const createMedia = (mediaItem, userId) => {
  console.log('User ID', userId);
  console.log('Media Item', mediaItem);
  return dispatch => {
    let token = localStorage.token
    const formData = new FormData()
    const { title, description, category, file, mediaFileType } = mediaItem

    formData.append('media_item[title]', title)
    formData.append('media_item[description]', description)
    formData.append('media_item[category]', category)
    formData.append('media_item[file]', file)
    formData.append('media_item[file_type]', mediaFileType)
    formData.append('media_item[user_id]', userId)

    return fetch("http://localhost:3000/api/v1/media_items", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: formData
    })
      .then(resp => resp.json())
      .then(mediaItemData => {
        console.log(mediaItemData);
        dispatch(addMedia(mediaItemData))
      });
  }
}

export const getAllMedia = () => {
  return dispatch => {
    let token = localStorage.token
    return fetch('http://localhost:3000/api/v1/media_items', {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(mediaItems => {
        console.log(mediaItems);
        dispatch(showAllMedia(mediaItems))
      })
  }
}

export const getMedia = (userId) => {
  return dispatch => {
    let token = localStorage.token
    return fetch(`http://localhost:3000/api/v1/users/${userId}`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(resp => resp.json())
      .then(user => {
        console.log(user);
        console.log(user.media_items);
        dispatch(showMedia(user.media_items))
      })
  }
}

export const patchMedia = (mediaInfo, mediaId) => {
  return dispatch => {
    let token = localStorage.token
    const formData = new FormData()
    const { title, description, category } = mediaInfo

    formData.append('media_item[title]', title)
    formData.append('media_item[description]', description)
    formData.append('media_item[category]', category)

    return fetch(`http://localhost:3000/api/v1/media_items/${mediaId}`, {
      method: 'PATCH',
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: formData
    })
      .then(resp => resp.json())
      .then(mediaItem => {
        console.log(mediaItem);
      })
  }
}

export const deleteMedia = (mediaId) => {
  return dispatch => {
    let token = localStorage.token
    return fetch(`http://localhost:3000/api/v1/media_items/${mediaId}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(media => {
        console.log(media);
      })
  }
}
