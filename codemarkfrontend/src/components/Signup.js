import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom';
import data from './course_data'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, database } from "../firebaseConfig";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import './Signup.css'
export default function Signup() {
    const navigate = useNavigate();
    const auth = getAuth();
    const database = getDatabase();
    const db = getDatabase();




    function writeStudentData(input1, input2, input3, input4, input5, input6,input7) {
        if (input1 == "" || input2 == "" || input3 == "" || input4 == "" || input5 == "" || input6 == ""||input7=="") {
            console.log("please provide some input");
        } else {
            set(ref(db, 'student/' + auth.currentUser.uid), {
                email: input1,
                name: input2,
                college_name: input3,
                enrollment_number: input4,
                joining_year: input5,
                class:input6,
                batchid:`BT${input6}${input5}T${input7}`,
                semester: input7
            });
            // console.log(auth.currentUser.email, auth.currentUser.uid)
        }
    }
    function writeStudentDataInUser(input1, input2, input3, input4, input5, input6,input7) {
        if (input1 == "" || input2 == "" || input3 == "" || input4 == "" || input5 == "" || input6 == ""||input7=="") {
            console.log("please provide some input");
        } else {
            set(ref(db, 'users/' + auth.currentUser.uid), {
                email: input1,
                name: input2,
                college_name: input3,
                enrollment_number: input4,
                joining_year: input5,
                class:input6,
                batchid:`BT${input6}${input5}T${input7}`,
                semester: input7,
                user_type:"student"
            });
            // console.log(auth.currentUser.email, auth.currentUser.uid)
        }
    }
    function writeTeacherData(input1, input2, input3,input4,input5) {
        if (input1 == "" || input2 == "" || input3 == "" || input4==""||input5=="") {
            console.log("please provide some input");
        } else {
            set(ref(db, 'teacher/' + auth.currentUser.uid), {
                professor_id:auth.currentUser.uid,
                email: input1,
                name: input2,
                college_name: input3,
                class:input4,
                course:input5
            });
            // console.log(auth.currentUser.email, auth.currentUser.uid)
        }
    }
    function writeTeacherDatainUser(input1, input2, input3,input4,input5) {
        if (input1 == "" || input2 == "" || input3 == ""||input4==""||input5=="") {
            console.log("please provide some input");
        } else {
            set(ref(db, 'users/' + auth.currentUser.uid), {
                professor_id:auth.currentUser.uid,
                email: input1,
                name: input2,
                college_name: input3,
                class:input4,
                course:input5,
                user_type:"teacher"
            });
            // console.log(auth.currentUser.email, auth.currentUser.uid)
        }
    }


    function Head() {
        return (
            <h1>Create Account</h1>
        );
    }
    function Email() {
        return (
            <label htmlFor="email">Email<input id="signup-email" type="email" placeholder="Email" name="email" /></label>
        );
    }
    function Name() {
        return (
            <label htmlFor="name">Name<input id="signup-name" type="text" placeholder="Name" name="name" /></label>
        );
    }
    function College_name() {
        return (
            <label htmlFor="college-name">College Name<input id="signup-college-name" type="text" placeholder="College Name" name="college-name" /></label>
        );
    }
    function Enrollment_number() {
        return (
            <label htmlFor="enrollment-number">Enrollment number<input id="signup-enrollment-number" type="text" placeholder="Enrollment Number" name="enrollment-number" /></label>
        );
    }
    function Teacher_Class() {
        return (
            <label htmlFor="enrollment-number">Class<input id="signup-teacher-class" type="text" placeholder="Class" name="teacher-class" /></label>
        );
    }
    function Teacher_Course() {
        return (
            <label htmlFor="teacher-course">Course<input id="signup-teacher-course" type="text" placeholder="Course" name="teacher-course" /></label>
        );
    }
    function Joining_year() {
        return (
            <label htmlFor="joining-year">Joining Year<input id="signup-joining-year" type="number" placeholder="Joining Year" name="joining=year" min="2010" max="2030" /></label>
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
            <label htmlFor="signup-password">Password<input id="signup-password" type="password" placeholder="Password" name="signup-password" /></label>
        );
    }
    function RePassword() {
        return (
            <label htmlFor="signup-cpassword">Confirm Password<input id="signup-cpassword" type="password" placeholder="Re-enter Password" name="signup-cpassword" /></label>
        );
    }

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

    function SignUpfnStudent(e) {
        e.preventDefault();
        if (formData.studentteacher == "Student") {
            getuserdata();
            getassignmentdata();
            getTeacherdata();
            let email = document.getElementById("signup-email").value;
            let name = document.getElementById("signup-name").value;
            let college_name = document.getElementById("signup-college-name").value;
            let enrollment_number = document.getElementById("signup-enrollment-number").value;
            let joining_year = document.getElementById("signup-joining-year").value;
            let tclass = document.getElementById("signup-teacher-class").value;
            let semester = document.getElementById("signup-semester").value;
            let password = document.getElementById("signup-password").value;
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user)
                writeStudentData(email, name, college_name, enrollment_number, joining_year, tclass, semester);
                writeStudentDataInUser(email, name, college_name, enrollment_number, joining_year,tclass, semester);
                navigate('/course', { state: {alluserassignmentdata,allteacherdata} })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message);
            });
        } else {
            getuserdata();
            getassignmentdata();
            getTeacherdata();
            let email = document.getElementById("signup-email").value;
            let name = document.getElementById("signup-name").value;
            let college_name = document.getElementById("signup-college-name").value;
            let tclass = document.getElementById("signup-teacher-class").value;
            let tcourse = document.getElementById("signup-teacher-course").value;
            let password = document.getElementById("signup-password").value;
            createUserWithEmailAndPassword(auth, email, password,tclass,tcourse)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user)
                writeTeacherData(email, name, college_name,tclass,tcourse);
                writeTeacherDatainUser(email, name, college_name,tclass,tcourse);
                navigate('/teacher',{ state: {alluserassignmentdata,allteacherdata} });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message);
            });
        }
    }

    function Student() {
        return (
            <div className='signup'>
                <Email />
                <Name />
                <College_name />
                <Enrollment_number />
                <Joining_year />
                <Teacher_Class />
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
                <Teacher_Class />
                <Teacher_Course />
                <Password />
                <RePassword />
            </div>
        );
    }
    const [formData, setFormData] = React.useState({
        studentteacher: "Student"
    })


    function handleChange(event) {
        const { name, value, type, checked } = event.target
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
                        {formData.studentteacher == "Student" ? <Student /> : <Teacher />}
                        <button className="signup-button" onClick={SignUpfnStudent}>Create Account</button>
                    </form>
                </div>
                <div className="signup-side signup-side2">
                    <img className="signup-img" src="https://img.freepik.com/free-vector/academic-excellence-illustration_24877-52355.jpg?w=2000" />
                </div>
            </div>
        </>
    )
}


//     return (
//         <>
//             <h2 className="signup-company">CodeMark</h2>
//             <div className="signup-main">
//                 <div className="signup-side signup-side1">
//                     <Head />
//                     <form className="signup">
//                         <Email />
//                         <Name />
//                         <College_name />
//                         <Enrollment_number />
//                         <Joining_year />
//                         <Semester />
//                         <Password />
//                         <RePassword />
//                         <button className="signup-button" onClick={SignUpfn}>Create Account</button>
//                     </form>
//                 </div>
//                 <div className="signup-side signup-side2">
//                     <img className="signup-img" src="https://img.freepik.com/free-vector/academic-excellence-illustration_24877-52355.jpg?w=2000" />
//                 </div>
//             </div>
//         </>
//     )
// }