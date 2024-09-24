import React from 'react'

const Login = () => {

    const onSubmitHandler = async (e) =>{
        try {
            e.preventDefault();
        } catch (error) {
            
        }
    }
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl mb-4 font-bold'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
            <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-700 mb-2'>Email</p>
                <input className='rounded-md w-full px-3 py-2 border border-green-300 outline-none' type="email" placeholder='example@gmail.com' required />
            </div>
            <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                <input className='rounded-md w-full px-3 py-2 border border-green-300 outline-none' type="password" placeholder='Enter password' required />
            </div>
            <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-green-600' type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
