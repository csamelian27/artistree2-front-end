const addResume = (resume) => ({type: 'ADD_RESUME', payload: resume})

export const createResume = (resumeInfo, userId) => {
  console.log('User ID', userId);
  console.log('Resume Info', resumeInfo);
  return dispatch => {
    let token = localStorage.token
    const formData = new FormData()
    const { resume } = resumeInfo

    formData.append('user[resume]', resume),
    formData.append('user[user_id]', userId)

    return fetch('http://localhost:3000/api/v1/resumes', {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: formData
    })
      .then(resp => resp.json())
      .then(resume => {
        console.log(resume);
      })
  }
}
