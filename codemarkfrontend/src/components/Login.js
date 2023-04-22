import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <>
    <h3 className='login-head'>Codemark</h3>
    <div className='login-page'>
        <div className='login-side1 login-side'>
            <form className='login'>
                <h4>Login</h4>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type="email" class="input-field" placeholder='Email' name="email"/>
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" class="input-field" placeholder='Password' name="password"/>
                </div>
                <div>
                    <label htmlFor='cpassword'>Confirm Password:</label>
                    <input type="password" class="input-field" placeholder='Confirm Password' name="cpassword"/>
                </div>
                <button className="login-button">Login</button>
                <p className='login-option'>OR</p>
                <button className='login-google'>Continue with Google</button>
                <p className='login-signup'>You dont have an account set ? <a href="#">Sign up</a></p>
            </form>            
        </div>
        <div className='login-side login-side2'>
            <img src="https://img.freepik.com/free-vector/academic-excellence-illustration_24877-52355.jpg?w=2000" className='login-img' />
        </div>
    </div>
    </>
  )
}
