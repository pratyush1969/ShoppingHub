import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { DB, auth } from '../../firebase/FirebaseConfig'
import { Timestamp, addDoc, collection } from 'firebase/firestore'

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const logup = async () => {
        if (name === "" || email === "" || password === "") {
            alert("Fill all the fields")
        }
        try {
            const users = await createUserWithEmailAndPassword(auth, email, password)

            console.log(users)
            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now()
            }
            const userRef = collection(DB, "users")
            await addDoc(userRef, user)
            alert("You are successfully signed up")
            setEmail("");
            setName("")
            setPassword("")


        } catch (e) {
            alert("Something went wrong")
        }
    }
    return (
        <div className='login-container'>

            <div className='login'>
                <h2>SignUp</h2>
                <hr style={{ width: '50%', border: '2px solid pink' }} />
                <input name='name' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input name='email' placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name='password' placeholder='Enter Your 6 digit Password ' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button style={{ backgroundColor: 'red', color: 'white' }} onClick={logup}>SignUp</button>
                <p>Go to  <Link to='/login'>SignIn</Link></p>
            </div>
        </div>
    )
}

export default Signup