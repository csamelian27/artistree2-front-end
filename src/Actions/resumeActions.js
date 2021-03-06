const showUserResumes = (resumes) => ({type: 'SHOW_USER_RESUMES', payload: resumes})
const addResume = (resume) => ({type: 'ADD_RESUME', payload: resume})

export const getUserResumes = (userId) => {
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
        console.log(user.resumes);
        dispatch(showUserResumes(user.resumes))
      })
  }
}

export const createResume = (resumeInfo, userId) => {
  console.log('User ID', userId);
  console.log('Resume Info', resumeInfo);
  return dispatch => {
    let token = localStorage.token
    const formData = new FormData()
    const { resume } = resumeInfo

    formData.append('resume[resume]', resume)
    formData.append('resume[user_id]', userId)

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
        dispatch(addResume(resume))
      })
  }
}
