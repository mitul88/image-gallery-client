import React from 'react'
import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom'

const AuthForm = () => {
    const data = useActionData();
    const [searchParams] = useSearchParams();
    const navigation = useNavigation();

    const isLogin = searchParams.get('mode') === 'login';
    const isSubmitting = navigation.state === 'submitting';

  return (
    <>
        <Form method='post'>
            <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
            {data && DataTransfer.errors && 
            (
                <ul>
                {Object.values(data.errors).map(err => <li key={err}>{err}</li>)}  
                </ul>
            )}
            {!isLogin && (
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="name" name='name' id='name' required />
                </div>
            )}
            {data && data.message && <p>{data.message}</p>}
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' required />
            </div>
            <button disabled={isSubmitting}>{isSubmitting ? "Submitting" : isLogin ? 'Login' : 'Signup'}</button>
        </Form>
        <p>{isLogin ? "Don't have any account ?" : 'Go to Login'}</p>
        <Link to={`?mode=${isLogin ? 'register' : 'login'}`}>
            {isLogin ? 'Go to Create new user' : 'Go to Login'}
        </Link>
    </>
  )
}

export default AuthForm