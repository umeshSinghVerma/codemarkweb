import React from "react";
// import data from './course_data';
import Class from "./Class";
import {useLocation, useNavigate} from 'react-router-dom';
import './Course.css';
let arr=[];
const openSidebar=()=>{
    document.getElementById("student_course--sidebar").style.width="250px";
    document.querySelector('.student_course-cards').style.marginLeft="250px";
}
const closeSidebar=()=>{
    document.getElementById("student_course--sidebar").style.width="0";
    document.querySelector('.student_course-cards').style.marginLeft="0";
}

const Navbar =()=>{
    return(
        <nav className="student_course--navbar">
            <div className="student_course--menu" onClick={openSidebar}>&#9776;</div>
            <div className="student_course--title">IIITL Classroom</div>
            <div className="student_course--profile">Y</div>
        </nav>
    )
}



const Card =(props)=>{
        const navigate = useNavigate();
        const handleClick = () => {
            navigate('/class',{state:{props,arr}})};
    return(
        <>
        <ul>
         <div className="student_course--card">
            <div className="student_course-container">
              <div className="student_course-content">
                <button className="student_course-btn" onClick={handleClick}>View</button>
              </div>
            </div>
            <div className="student_course-informations-container">
              <h2 className="student_course-title">{props.course}</h2>
              <p className="student_course-sub-title">Batch - {props.class}</p>
              <p className="student_course-faculty">Faculty - {props.name}</p>
            </div>

         </div>
        </ul>
        </>
    )
}
const Course = () => {
    const location=useLocation();
    let datacoming = location.state;
    console.log("yash",datacoming);
    let i=0;
    let teacherkey;
    let assignmentkey;
    for (let key in datacoming) {
        // console.log(key);
        if(i==0){
            teacherkey=key;
        }else{
            assignmentkey=key;
        }
        i++;
    }
    // console.log("saklsadfalsfasf",teacherkey,assignmentkey);
    console.log("this is assignment",datacoming[teacherkey]);
    console.log("this is teacher",datacoming[assignmentkey]);
    for(let ikey in datacoming[teacherkey]){
        const a=datacoming[teacherkey][ikey];
        arr.push(a);
    }
    console.log(arr) // assignent
    let arr2=[]
    for(let ikey in datacoming[assignmentkey]){
        const a=datacoming[assignmentkey][ikey];
        arr2.push(a);
    }
    console.log(arr2) // teacher
    const courseCards=arr2.map(card =>{
        return (<Card key={card.professor_id}  {...card} />)
    })
    
    const Side=(props)=>{
        const navigae = useNavigate();
        const handlebar = () => {
            navigae('/class',{state:{props,arr}})};
        return(
            <li onClick={()=>handlebar()}>{props.course}</li>
            )
        }
        const Sidebar=()=>{
            return(
                <div id="student_course--sidebar">
                <span className="student_course--closesidebar" onClick={closeSidebar}>&times;</span>
                    <ul className="student_course--classlist">
                        {a}
                    </ul>
            </div>
        )
    }
    let a=arr2.map(item=>{
        return (<Side key={item.professor_id} {...item} />)
    })
    return(
        <>
        <Navbar />
        <section className="student_course">
        <Sidebar />
        <div className="student_course-cards"> {courseCards}</div>
       
        </section>
        </>
    )
}
export default Course;