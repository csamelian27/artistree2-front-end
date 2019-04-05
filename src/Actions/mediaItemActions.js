const addMedia = (mediaItem) => ({type: 'ADD_MEDIA', payload: mediaItem})

export const createMedia = (mediaItem, userId) => {
  console.log('User ID', userId);
  console.log('Media Item', mediaItem);
  return dispatch => {
    let token = localStorage.token
    const formData = new FormData()
    const { title, description, category, files } = mediaItem

    formData.append('media_item[title]', title)
    formData.append('media_item[description]', description)
    formData.append('media_item[category]', category)
    formData.append('media_item[files]', files)
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
