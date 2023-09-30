import React from 'react'
import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom'

const AuthForm = () => {
    const data = useActionData();
    const [searchParams] = useSearchParams();
    const navigation = useNavigation();

    const isLogin = searchParams.get('mode') === 'login';
    const isSubmitting = navigation.state === 'submitting';

  return (
    <div className='p-1 w-96 md:w-2/5'>
        <Form method='post'>
            <h1 className='text-3xl my-5 font-bold tracking-widest'>{isLogin ? 'Log in to your account' : 'Create a new user'}</h1>
            {data && DataTransfer.errors && 
            (
                <ul>
                    {Object.values(data.errors).map(err => <li key={err}>{err}</li>)}  
                </ul>
            )}
            {!isLogin && (
                <div className="m-auto flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input type="name" name='name' id='name' required className='rounded-md my-2 p-2 border-2 border-gray-500 bg-sky-900' />
                </div>
            )}
            {data && data.message && <p>{data.message}</p>}
            <div className="m-auto flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' required className='rounded-md my-2 p-2 border-2 border-gray-500 bg-sky-900' />
            </div>
            <div className="m-auto flex flex-col">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' required className='rounded-md my-2 p-2 border-2 border-gray-500 bg-sky-900' />
            </div>
            <button className='px-5 py-2 rounded-md bg-orange-600 text-white font-semibold tracking-wider' style={{fontFamily: 'Quicksand'}} disabled={isSubmitting}>{isSubmitting ? "Submitting" : isLogin ? 'Login' : 'Register'}</button>
        </Form>
        <div className="flex flex-row items-center mt-[50px]">
            <p className='tracking-wider'>{isLogin ? "Don't have any account ?" : 'Already have an account ? '}</p> 
            <Link to={`?mode=${isLogin ? 'register' : 'login'}`} className='mx-2 py-1 px-3 rounded-md border-2 border-gray-500 font-semibold' style={{fontFamily: 'Quicksand'}}>
                {isLogin ? 'Create new user' : 'Login'}
            </Link>
        </div>
        <Link to="/" className='py-1 rounded-md font-medium underline'>Back to Home</Link>
    </div>
  )
}

export default AuthForm