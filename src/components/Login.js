import React from 'react'
import Header from './Header'
const Login = () => {
  return (
  <div>
    <Header/>
    <div className='absolute'>
        <img src="https://www.pcworld.com/wp-content/uploads/2024/05/Netflix-Hintergrund-1.jpg?resize=1240%2C697&quality=50&strip=all" alt="logo" />
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0  left-0 text-white rounded-lg bg-opacity-80'>
    <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
        <input type="password" placeholder='Password' className='p-4 my-4 w-full  bg-gray-700 '/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign In </button>
    </form>
  </div>
  );
};

export default Login