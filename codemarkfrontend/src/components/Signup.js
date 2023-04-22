import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig.js";
import './Signup.css'
export default function Signup() {
    const auth = getAuth();
    function Head() {
        return (
            <h1>Create Account</h1>
        );
    }
    function Email() {
        return (
            <label for="email">Email<input id="signup-email" type="email" placeholder="Email" name="email" /></label>
        );
    }
    function Name() {
        return (
            <label for="name">Name<input id="signup-name" type="text" placeholder="Name" name="name" /></label>
        );
    }
    function College_name() {
        return (
            <label for="college-name">College Name<input id="signup-college-name" type="text" placeholder="College Name" name="college-name" /></label>
        );
    }
    function Enrollment_number() {
        return (
            <label for="enrollment-number">Enrollment number<input id="signup-enrollment-number" type="text" placeholder="Enrollment Number" name="enrollment-number" /></label>
        );
    }
    function Joining_year() {
        return (
            <label for="joining-year">Joining Year<input id="signup-joining-year" type="number" placeholder="Joining Year" name="joining=year" min="2010" max="2030" /></label>
        );
    }
    function Semester() {
        return (
            <label for="semester">Semester
                <select id="signup-semester">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                </select>
            </label>
        );
    }
    function Password() {
        return (
            <label for="signup-password">Password<input id="signup-password" type="password" placeholder="Password" name="signup-password" /></label>
        );
    }
    function RePassword() {
        return (
            <label for="signup-cpassword">Confirm Password<input id="signup-cpassword" type="password" placeholder="Re-enter Password" name="signup-cpassword" /></label>
        );
    }
    function SignUpfn(e) {
        e.preventDefault();
        let email = document.getElementById("signup-email").value;
        let password = document.getElementById("signup-password").value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User is successfully created")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message);
            });
    }
    return (
        <>
            <h2 className="signup-company">CodeMark</h2>
            <div className="signup-main">
                <div className="signup-side signup-side1">
                    <Head />
                    <form className="signup">
                        <Email />
                        <Name />
                        <College_name />
                        <Enrollment_number />
                        <Joining_year />
                        <Semester />
                        <Password />
                        <RePassword />
                        <button className="signup-button" onClick={SignUpfn}>Create Account</button>
                    </form>
                </div>
                <div className="signup-side signup-side2">
                    <img className="signup-img" src="https://img.freepik.com/free-vector/academic-excellence-illustration_24877-52355.jpg?w=2000" />
                </div>
            </div>
        </>
    )
}