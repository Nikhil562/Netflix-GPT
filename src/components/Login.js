import React from 'react'
import Header from './Header'
const Login = () => {
  return (
  <div>
    <Header/>
    <div className='absolute'>
        <img src="https://www.pcworld.com/wp-content/uploads/2024/05/Netflix-Hintergrund-1.jpg?resize=1240%2C697&quality=50&strip=all" alt="logo" />
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0  left-0'>
        <input type="text" placeholder='Email Address' className='p-2 m-2 '/>
        <input type="password" placeholder='Password' className='p-2 m-2 '/>
        <button className="p-4 m-4">Sign In </button>
    </form>
  </div>
  );
};

export default Login