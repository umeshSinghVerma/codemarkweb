import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app, database } from "../firebaseConfig";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import './Login.css'
export default function Login() {
    const auth = getAuth();
    const db = getDatabase();
    const navigate = useNavigate();
    function loginfn() {
        // let totaldata = [];
        let email = document.getElementById("login-emailid").value;
        let password = document.getElementById("login-passwordid").value;
        let alluserdata = [];
        let alluserassignmentdata = [];
        let allteacherdata = [];
        function getuserdata() {
            const starCountRef = ref(db, 'users/');
            console.log(starCountRef);
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                alluserdata = data;
            });
        }
        function getassignmentdata() {
            const starCountRef = ref(db, 'assignments/');
            console.log(starCountRef);
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                alluserassignmentdata = data;
                console.log("assignment", alluserassignmentdata);
            });
        }
        function getTeacherdata() {
            const starCountRef = ref(db, 'teacher/');
            console.log(starCountRef);
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                allteacherdata = data;
                console.log("teacherdata", allteacherdata);
            });
        }
        // totaldata = [...alluserassignmentdata, ...alluserdata];
        // console.log("This is the total data", totaldata);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("user created successfully")
                getuserdata();
                getassignmentdata();
                getTeacherdata();
                let alpha = userCredential.user.uid;
                console.log(alpha);
                let beta = alluserdata[alpha];
                console.log("beta", beta.user_type);
                console.log(alluserassignmentdata,allteacherdata);
                navigate(`${beta.user_type == "student" ? '/course' : '/teacher'}`, { state: {alluserassignmentdata,allteacherdata} })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message)
            });

    }

    const provider = new GoogleAuthProvider();
    function loginGooglefn() {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
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
    const handlesignup = () => {
        navigate('/signup')
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
                            <input type="text" id='login-passwordid' className="input-field" placeholder='Password' name="password" />
                        </div>
                        <button className="login-button" onClick={loginfn}>Login</button>
                        <p className='login-option'>OR</p>
                        <button className='login-google' onClick={loginGooglefn}>Continue with Google</button>
                        <p className='login-signup'>You dont have an account set ? <div style={{ display: "inline", cursor: "pointer" }} onClick={handlesignup}>Sign up</div></p>
                    </div>
                </div>
                <div className='login-side login-side2'>
                    <img src="https://img.freepik.com/free-vector/academic-excellence-illustration_24877-52355.jpg?w=2000" className='login-img' />
                </div>
            </div>
        </>
    )
}
