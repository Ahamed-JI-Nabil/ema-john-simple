import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './LogIn.css'

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleUserSingIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    if(user){
        navigate(from, {replace : true})
    }

    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>LogIn</h2>
                <form onSubmit={handleUserSingIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{color: 'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }

                    <input className="form-submit" type="submit" value="LogIn" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an Account</Link>
                </p>
            </div>
        </div>
    );
};

export default LogIn;