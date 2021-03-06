const showWorkExps = (workExps) => ({type: 'SHOW_WORK_EXPS', payload: workExps})
const addWorkExp = (workExp) => ({type: 'ADD_WORK_EXP', payload: workExp})

export const getWorkExps = (userId) => {
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
        console.log(user.work_experiences);
        dispatch(showWorkExps(user.work_experiences))
      })
  }
}

export const createWorkExp = (workExpInfo, userId) => {
  console.log('User ID', userId);
  console.log('WorkExp Info', workExpInfo);
  return dispatch => {
    let token = localStorage.token
    const formData = new FormData()
    const { business_name, contact_person, contact_number, monthsRange, description } = workExpInfo

    formData.append('work_experience[user_id]', userId)
    formData.append('work_experience[business_name]', business_name)
    formData.append('work_experience[contact_person]', contact_person)
    formData.append('work_experience[contact_number]', contact_number)
    formData.append('work_experience[months_range]', monthsRange)
    formData.append('work_experience[description]', description)

    return fetch('http://localhost:3000/api/v1/work_experiences', {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: formData
    })
      .then(resp => resp.json())
      .then(workExp => {
        console.log(workExp);
        dispatch(addWorkExp(workExp))
      })
  }
}
