import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/FirebaseConfig';
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem("user", JSON.stringify(user))
            alert('You are successfully signed ')
            navigate("/")


        }
        catch (e) {
            alert("Something went worng ")

        }
    }
    return (
        <div className='login-container'>

            <div className='login'>
                <h2>LogIn</h2>
                <hr style={{ width: '50%', border: '2px solid pink' }} />
                <input type="email" name='email' placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name='password' placeholder='Enter Your Password ' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={login}>LogIn</button>
                <p>Don't have an account <Link to='/signup'>Create now</Link></p>
            </div>
        </div>
    )
}

export default Login