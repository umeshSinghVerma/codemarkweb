import React, {useRef} from 'react'
import './Landing.css'
const LandingNavbar=()=>{
    const navRef=useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("home_header--responsive--nav");
    };
    return(
        <div className='Landing-navbar'>
            <h3>CodeMark</h3>
            <div className='Landing-login' ref={navRef}>
                <p className='Landing-signup'>Apply as instructor</p>
                <p className='Landing-signup'>Sign up</p>
                <p className='Landing-login-button'>Login</p>
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
                <h1>hello hello hello<br /> hello hello</h1>
                <p>description</p>
            </div>
            <div className='Landing-hero-side'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlj5aJL-HgL6dsHvRVFJ5isZVwPOo8Dd8UezRSmwxICG14QvV6wcB27Qxv9t7kUGxcJls&usqp=CAU" className='Landing-hero-image' />
            </div>
        </div>
    )
}
const LandingFooter=()=>{
    return(
        <div className='Landing-footer'>
            <div className='Landing-content'>
                <h2>133+</h2>
                <p>courses</p>
            </div>
            <div className='Landing-content'>
                <h2>133+</h2>
                <p>courses</p>
            </div>
            <div className='Landing-content'>
                <h2>133+</h2>
                <p>courses</p>
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