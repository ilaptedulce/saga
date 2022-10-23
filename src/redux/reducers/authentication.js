const initialState = {
  isLoggedIn: false
}

const authentication = (state = initialState, action) => {
  if (action.type === 'LOGIN') {
    if (action.payload.password === '1111' && action.payload.username === 'admin') {
      return {
        isLoggedIn: true
      }
    } 
  }
  return state
}

export default authentication
