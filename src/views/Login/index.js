import React from 'react'
import './index.scss'

const Login = () => {
  return (
    <div className='login'>    

      <button>LOG IN WITH GOOGLE</button>
      <input type='email' placeholder='Email...'/>
      <input type='password' placeholder='Password...'/>
      <p>Don't have an account? <span>Signup Now</span></p>

      <button className='main'>Log in</button>
    </div>
  )
}

export default Login