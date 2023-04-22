import React from 'react'
import './Signup.css'
export default function Signup() {
    function Head() {
        return (
            <h1>Create Account</h1>
        );
    }
    function Email() {
        return (
            <label htmlFor="email">Email<input id="signup-email" type="email" placeholder="Email" name="email"/></label>
        );
    }
    function Name() {
        return (
            <label htmlFor="name">Name<input id="signup-name" type="text" placeholder="Name" name="name"/></label>
        );
    }
    function College_name() {
        return (
            <label htmlFor="college-name">College Name<input id="signup-college-name" type="text" placeholder="College Name" name="college-name"/></label>
        );
    }
    function Enrollment_number() {
        return (
            <label htmlFor="enrollment-number">Enrollment number<input id="signup-enrollment-number" type="text" placeholder="Enrollment Number" name="enrollment-number"/></label>
        );
    }
    function Joining_year() {
        return (
            <label htmlFor="joining-year">Joining Year<input id="signup-joining-year" type="number" placeholder="Joining Year" name="joining=year" min="2010" max="2030"/></label>
        );
    }
    function Semester() {
        return (
            <label htmlFor="semester">Semester
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
            <label htmlFor="signup-password">Password<input id="signup-password" type="password" placeholder="Password" name="signup-password"/></label>
        );
    }
    function RePassword() {
        return (
            <label for="signup-cpassword">Confirm Password<input id="signup-cpassword" type="password" placeholder="Re-enter Password" name="signup-cpassword"/></label>
        );
    }
    function Student() {
        return (
            <div className='signup'>
                <Email />
                <Name />
                <College_name />
                <Enrollment_number />
                <Joining_year />
                <Semester />
                <Password />
                <RePassword />
            </div>
        );
    }
    function Teacher() {
        return (
            <div className='signup'>
                <Email />
                <Name />
                <College_name />
                <Password />
                <RePassword />
            </div>
        );
    }
    const [formData, setFormData] = React.useState({
        studentteacher:"Student"
    })
    console.log(formData.studentteacher)
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(
            prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
  return (
    <>
    <h2 className="signup-company">CodeMark</h2>
    <div className="signup-main">
        <div className="signup-side signup-side1">
            <Head />
            <form className="signup">
            <div className='signup-radiodiv'><input 
                    type="radio"
                    id="student"
                    className="signup-radio"
                    name="studentteacher"
                    value="Student"
                    checked={formData.studentteacher === "Student"}
                    onChange={handleChange}
                />
                <label htmlFor="student" className="signup-radio-label">Student</label>
                              
                <input 
                    type="radio"
                    id="teacher"
                    className="signup-radio"
                    name="studentteacher"
                    value="Teacher"
                    checked={formData.studentteacher === "Teacher"}
                    onChange={handleChange}
                />
                
                <label htmlFor="teacher" className="signup-radio-label">Teacher</label>
                </div>
                {formData.studentteacher=="Student"?<Student/>:<Teacher/>}
                <button className="signup-button">Create Account</button>
            </form>
        </div>
        <div className="signup-side signup-side2">
            <img className="signup-img" src="https://img.freepik.com/free-vector/academic-excellence-illustration_24877-52355.jpg?w=2000"/>
        </div>
    </div>
    </>
  )
}