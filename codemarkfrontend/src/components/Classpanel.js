import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import data from './course_data';
import './Classpanel.css'
import { app, database } from "../firebaseConfig";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const openSidebar = () => {
    document.getElementById("teacher_class--sidebar").style.width = "250px";
}
const closeSidebar = () => {
    document.getElementById("teacher_class--sidebar").style.width = "0";
}

const Navbar = () => {
    return (
        <nav className="teacher_class--navbar">
            <div className="teacher_class--menu" onClick={openSidebar}>&#9776;</div>
            <div className="teacher_class--title">IIITL Classroom</div>
            <div className="teacher_class--profile">Y</div>
        </nav>
    )
}
const Side = (props) => {
    const navigae = useNavigate();
    const handlebar = () => {
        navigae('/class', { state: { props } })
    };
    return (
        <li onClick={handlebar}>{props.title}</li>
    )
}
const Sidebar = () => {
    return (
        <div id="teacher_class--sidebar">
            <span className="teacher_class--closesidebar" onClick={closeSidebar}>&times;</span>
            <ul className="teacher_class--classlist">
                {a}
            </ul>
        </div>
    )
}

const a = data.map(item => {
    return (<Side key={item.id} {...item} />)
})
const Classpanel = () => {
    const location = useLocation();


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
    const Assignments = (props) => {
        let a_name = ' ';
        let d_date = ' ';
        let assigns = ''
        if (props.value.assignments[0].complete) {
            a_name = "No due Assignments";
            assigns = [
                <Assignment key="1" a_name={a_name} d_date={d_date} />
            ]
        }
        else {
            assigns = props.value.assignments.map(
                (item) => {
                    a_name = item.name
                    d_date = item.due
                    return (
                        <Assignment key={item.key} a_name={a_name} d_date={d_date}></Assignment>
                    )
                }
            )

        }
        return (
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

        const postListRef = ref(db, 'assignments/');
        const newPostRef = push(postListRef);
        let assigmentid = newPostRef._path.pieces_[newPostRef._path.pieces_.length - 1];
        set(newPostRef, {
            assignment_id: assigmentid,
            subject_id: "WDAD",
            professor_id: auth.currentUser.uid,
            batch_id: "string",
            assignment_name: assigmentname,
            description: question,
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

    return (
        <>
            <Navbar />
            <div className="teacher_class-page">
                <Sidebar />
                <div className="teacher_class">
                    <div className="teacher_class--hero">
                        {location.state.props.title}<p className="teacher_class-branch">{location.state.props.branch}</p>
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
                            </>}
                        </div>
                        <div className="teacher_class-assignments">
                            <h4>UPLOADED ASSIGNMENTS</h4>
                            <Assignments value={location.state.props} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}
export default Classpanel;