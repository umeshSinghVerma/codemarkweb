import React from 'react'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app, database } from "../firebaseConfig";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import './Login.css'
export default function Login() {
    const auth = getAuth();
    function loginfn() {
        let email = document.getElementById("login-emailid").value;
        let password = document.getElementById("login-passwordid").value;
        console.log(email, password);
        // console.log(email,password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user);
                alert("The user is signed in successfully");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message)
                // handlefunction();
                // ..
            });
    }
    const provider = new GoogleAuthProvider();
    function loginGooglefn() {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                if (user.email == "vea0308@gmail.com") {
                    alert("This is a teacher");
                }
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(error.message);
                // ...
            });
    }

    return (
        <>
            <h3 className='login-head'>Codemark</h3>
            <div className='login-page'>
                <div className='login-side1 login-side'>
                    <div className='login'>
                        <h4>Login</h4>
                        <div>
                            <label htmlFor='email'>Email:</label>
                            <input type="email" id='login-emailid' className="input-field" placeholder='Email' name="email" />
                        </div>
                        <div>
                            <label htmlFor='password' >Password:</label>
                            <input type="password" id='login-passwordid' className="input-field" placeholder='Password' name="password" />
                        </div>
                        <div>
                            <label htmlFor='cpassword'>Confirm Password:</label>
                            <input type="password" className="input-field" placeholder='Confirm Password' name="cpassword" />
                        </div>
                        <button className="login-button" onClick={loginfn}>Login</button>
                        <p className='login-option'>OR</p>
                        <button className='login-google' onClick={loginGooglefn}>Continue with Google</button>
                        <p className='login-signup'>You dont have an account set ? <a href="#">Sign up</a></p>
                    </div>
                </div>
                <div className='login-side login-side2'>
                    <img src="https://img.freepik.com/free-vector/academic-excellence-illustration_24877-52355.jpg?w=2000" className='login-img' />
                </div>
            </div>
        </>
    )
}
