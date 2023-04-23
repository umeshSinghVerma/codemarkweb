import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
// import data from './course_data';
import './Classpanel.css'
import { app, database } from "../firebaseConfig";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// console.log(assignmentdata);


let Navbar = () => {
    return (
        <nav className="teacher_class--navbar">
            <div className="teacher_class--title">IIITL Classroom</div>
            <div className="teacher_class--profile">Y</div>
        </nav>
    )
}

const Classpanel = () => {
    const location = useLocation();
    console.log(location.state)


    const Assignment = (props) => {
        return (
            <div className="teacher_class-assignment">
                <img src="https://static.thenounproject.com/png/3632613-200.png" alt="image" />
                <div className="teacher_class-assignment-deatils">
                    <p><a href="#">{props.a_name}</a></p>
                    <p>{props.d_date}</p>
                </div>
            </div>
        )
    }
    const Assignments=(value)=>{
        let a_name=' ';
        let d_date=' ';
        let assigns='';
        console.log(value)
        assigns=value.value.map(item=>{
                a_name=item.assignment_name
                d_date=item.due_date
                return(
                    <Assignment key={item.assignment_id} a_name={a_name} d_date={d_date}></Assignment>
                )
        })
        
        return(
            <>
            {assigns}
            </>
        )
    }
    const [se, setSe] = useState(false)
    const showassignfield = () => {
        setSe((prev) => !prev)
    }

    const auth = getAuth();
    const database = getDatabase();
    const db = getDatabase();

    function createAssignment() {
        let question = document.getElementById("questionId").value;
        let duedate = document.getElementById("duedateid").value;
        let assigmentname = document.getElementById("assignmentName").value;
        let visible_test_cases=[];
        let hidden_test_cases=[];
        let visibleinputs = document.getElementById("visibleTestCase").value;
        for (let i = 1; i <= visibleinputs; i++) {
            let visibleinputs = document.getElementById(`visibleInputId${i}`).value;
            let visibleoutputs = document.getElementById(`visibleOutputId${i}`).value;
            let user = {
                input: visibleinputs,
                output: visibleoutputs
            }
            visible_test_cases.push(user);
        }
        let hiddeninputs = document.getElementById("hiddenTestCase").value;
        for (let i = 1; i <= hiddeninputs; i++) {
            let hiddeninputs = document.getElementById(`hiddenInputId${i}`).value;
            let hiddenoutputs = document.getElementById(`hiddenOutputId${i}`).value;
            console.log(hiddeninputs,hiddenoutputs);
            let user1 = {
                input: hiddeninputs,
                output: hiddenoutputs
            }
            hidden_test_cases.push(user1);
        }
        let allteacherdata=[];
        function getTeacherdata() {
            const starCountRef = ref(db, 'teacher/');
            console.log(starCountRef);
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                allteacherdata = data;
                console.log("teacherdata", allteacherdata);
            });
        }
        getTeacherdata();
        let teachersubject = allteacherdata[auth.currentUser.uid];
        let subject = teachersubject.course;


        const postListRef = ref(db, 'assignments/');
        // const teacheradd = ref(db,'teacher/',auth.currentUser.uid,'assignment/');
        const newPostRef = push(postListRef);
        // const newteacherassignment = push(teacheradd);
        let assigmentid = newPostRef._path.pieces_[newPostRef._path.pieces_.length - 1];
        set(newPostRef, {
            assignment_id: assigmentid,
            subject_id: subject,
            professor_id: auth.currentUser.uid,
            batch_id: "string",
            assignment_name: assigmentname,
            description: question,
            complete:false,
            test_cases:
            {
                visible_test_cases,
                hidden_test_cases
            },
            due_date: duedate
        });

    }
    function visibletestcasefn() {
        let visible = document.getElementById("visibleTestCase").value;
        let box = document.getElementById("inputvisible");
        box.innerHTML = "";
        for (let i = 1; i <= visible; i++) {
            let element = document.createElement("div");
            element.className = "Landing-login";
            let span = document.createElement("span");
            span.innerText = `Visible Input ${i}`
            element.appendChild(span);
            let txtarea = document.createElement("input");
            txtarea.setAttribute("type", "text");
            txtarea.className = "small-area";
            txtarea.id = `visibleInputId${i}`;
            element.appendChild(txtarea);
            box.appendChild(element);

            let elementout = document.createElement("div");
            elementout.className = "Landing-login";
            let spanout = document.createElement("span");
            spanout.innerText = `Visible Output ${i}`
            elementout.appendChild(spanout);
            let txtareaout = document.createElement("input");
            txtareaout.setAttribute("type", "text");
            txtareaout.className = "small-area";
            txtareaout.id = `visibleOutputId${i}`;
            elementout.appendChild(txtareaout);
            box.appendChild(elementout);
        }
    }
    function hiddentestcasefn() {
        let hidden = document.getElementById("hiddenTestCase").value;
        let box = document.getElementById("inputhidden");
        box.innerHTML = "";
        for (let i = 1; i <= hidden; i++) {
            let element = document.createElement("div");
            element.className = "Landing-login";
            let span = document.createElement("span");
            span.innerText = `Hidden Input ${i}`
            element.appendChild(span);
            let txtarea = document.createElement("textarea");
            txtarea.className = "small-area";
            txtarea.id = `hiddenInputId${i}`;
            element.appendChild(txtarea);
            box.appendChild(element);

            let elementout = document.createElement("div");
            elementout.className = "Landing-login";
            let spanout = document.createElement("span");
            spanout.innerText = `Hidden Output ${i}`
            elementout.appendChild(spanout);
            let txtareaout = document.createElement("textarea");
            txtareaout.className = "small-area";
            txtareaout.id = `hiddenOutputId${i}`;
            elementout.appendChild(txtareaout);
            box.appendChild(elementout);
        }
    }
    function getdata() {
        const starCountRef = ref(db, 'assignments/');
        console.log(starCountRef);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            console.log(snapshot.key);
        });
        console.log("we have got data successfully");
    }


    return (
        <>
            <Navbar />
            <div className="teacher_class-page">
                <div className="teacher_class">
                    <div className="teacher_class--hero">
                        {location.state.arr[0].subject_id}
                    </div>
                    <div className="teacher_class-sections">
                        <div className="teacher_class-notes">
                            <h4>CREATE ASSIGNMENT</h4>
                            <div className="teacher_class-assigndrop create-button" onClick={showassignfield}>Create New</div>
                            {se && <>
                                <div className='Landing-login' >Assignment name<textarea className="small-area" id="assignmentName" /></div>
                                <div className='Landing-login' >Due Date<input type="date" id="duedateid" /></div>
                                <div className='Landing-login' >Question<textarea className="small-area" id="questionId" /></div>

                                <div className='Landing-login' ><span>Visible Test Cases</span><input type="number" id="visibleTestCase" onChange={visibletestcasefn} /> <span>Hidden Test Cases</span><input type="number" id="hiddenTestCase" onChange={hiddentestcasefn} /></div>

                                <div id="inputvisible" style={{ width: "95%" }}></div>
                                <div id="inputhidden" style={{ width: "95%" }}></div>

                                <button className="create-button" onClick={createAssignment}>Create Assignment</button>
                                <button className="create-button" onClick={getdata}>get data</button>
                            </>}
                        </div>
                        <div className="teacher_class-assignments">
                            <h4>UPLOADED ASSIGNMENTS</h4>
                            <Assignments value={location.state.arr} />
                        </div>
                    </div>

                </div>
            </div>
        </>

    )

}
export default Classpanel;