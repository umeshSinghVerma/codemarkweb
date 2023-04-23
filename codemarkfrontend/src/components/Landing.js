import React, {useRef} from 'react'
import {useLocation,useNavigate} from 'react-router-dom';

import './Landing.css'
let p={};
const LandingNavbar=()=>{
    const navRef=useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("home_header--responsive--nav");
    };
    const navigate = useNavigate();
    const handlelogin = (props) => {
        navigate('/login',{state:{props}})};
    const handlesignup = (props) => {
        navigate('/signup',{state:{props}})};
    return(
        <div className='Landing-navbar'>
            <h3>CodeMark</h3>
            <div className='Landing-login-page' ref={navRef}>
                <p className='Landing-signup' onClick={handlesignup}>Apply as instructor</p>
                <p className='Landing-signup' onClick={handlesignup}>Sign up</p>
                <p className='Landing-login-button' onClick={handlelogin}>Login</p>
                <button className="Landing-dropdown Landing-dropdown-closeBtn" onClick={showNavbar}>&times;</button>
            </div>
            <button
				className="Landing-dropdown"
				onClick={showNavbar}>
				&#9776;
			</button>
        </div>
    )
}
const LandingHero=()=>{
    return(
        <div className='Landing-hero'>
            <div className='Landing-hero-side'>
                <h1>CodeMark</h1>
                <p>CodeMark is a user-friendly code review and submission tool for students and professors. It automates code checking and submission, and includes plagiarism detection, secure IPFS-based storage, and easy code submission. With local testing, evaluating code is quick and simple.</p>
            </div>
            <div className='Landing-hero-side'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQnis7VaiMBUZGvRCiAV08rovlN-u-14IbLQ&usqp=CAU" className='Landing-hero-image' />
            </div>
        </div>
    )
}
const LandingFooter=()=>{
    return(
        <div className='Landing-footer'>
            <div className='Landing-content'>
                <h2>1500+</h2>
                <p>Assignments Uploaded</p>
            </div>
            <div className='Landing-content'>
                <h2>130+</h2>
                <p>Students</p>
            </div>
            <div className='Landing-content'>
                <h2>45+</h2>
                <p>Colleges</p>
            </div>
        </div>
    )
}
export default function Landing() {
  return (
    <div className='Landing-container'>
        <LandingNavbar />
        <LandingHero />
        <LandingFooter />
        <div className='landing-footer-copy'>Copyright &#169; CodeMark All Rights Reserved</div>
    </div>
  )
}