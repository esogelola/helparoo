import React from 'react'
import './index.scss'

const Signup = () => {
  return (
    <div className='signup'>    

      <button>SIGN UP WITH GOOGLE</button>
      <input type='email' placeholder='Email...'/>
      <input type='password' placeholder='Password...'/>
      <p>Already have an account? <span>Login Now</span></p>

      <button className='main'>Sign Up</button>
    </div>
  )
}

export default Signup