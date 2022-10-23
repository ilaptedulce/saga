import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './logIn.css'

const Login = () => {
  const action = useDispatch()
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handle = () => action({ type: 'LOGIN', payload: { username, password}})
  return (
    <div className='login-wrapper'>
      <h1>Please Log In</h1>
      <form onSubmit={handle}>
        <label>
          <p>Userame</p>
          <input type='text' placeholder='userName' onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
export default Login
