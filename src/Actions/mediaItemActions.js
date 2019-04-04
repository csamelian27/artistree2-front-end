const addMedia = (mediaItem) => ({type: 'ADD_MEDIA', payload: mediaItem})

export const createMedia = (mediaItem, userId) => {
  console.log('User ID', userId);
  console.log('Media Item', mediaItem);
  return dispatch => {
    let token = localStorage.token
    return fetch("http://localhost:3000/api/v1/media_items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({media_item: {title: mediaItem.title, description: mediaItem.description, category: mediaItem.category, user_id: userId}})
    })
      .then(resp => resp.json())
      .then(mediaItemData => {
        console.log(mediaItemData);
        dispatch(addMedia(mediaItemData))
      });
  }
}
