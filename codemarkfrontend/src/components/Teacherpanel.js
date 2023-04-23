import React from "react";
import data from './course_data';
import Classpanel from "./Classpanel";
import {Link, useNavigate} from 'react-router-dom';
import './Teacherpanel.css';
const openSidebar=()=>{
    document.getElementById("teacher_course--sidebar").style.width="250px";
    document.querySelector('.teacher_course-cards').style.marginLeft="250px";
}
const closeSidebar=()=>{
    document.getElementById("teacher_course--sidebar").style.width="0";
    document.querySelector('.teacher_course-cards').style.marginLeft="0";
}

const Navbar =()=>{
    return(
        <nav className="teacher_course--navbar">
            <div className="teacher_course--menu" onClick={openSidebar}>&#9776;</div>
            <div className="teacher_course--title">IIITL Classroom</div>
            <div className="teacher_course--profile">Y</div>
        </nav>
    )
}
const Side=(props)=>{
    const navigae = useNavigate();
    const handlebar = () => {
        navigae('/class',{state:{props}})};
    return(
        <li onClick={handlebar}>{props.title}</li>
    )
}
const Sidebar=()=>{
    return(
        <div id="teacher_course--sidebar">
            <span className="teacher_course--closesidebar" onClick={closeSidebar}>&times;</span>
                <ul className="teacher_course--classlist">
                    {a}
                </ul>
        </div>
    )
}

const a=data.map(item=>{
    return (<Side key={item.id} {...item} />)
})
const Card =(props)=>{
        const navigate = useNavigate();
        const handleClick = () => {
            navigate('/class',{state:{props}})};
    return(
        <>
        <ul>
         <div className="teacher_course--card">
            <div className="teacher_course-container">
              <div className="teacher_course-content">
                <button className="teacher_course-btn" onClick={handleClick}>View</button>
              </div>
            </div>
            <div className="teacher_course-informations-container">
              <h2 className="teacher_course-title">{props.title}</h2>
              <p className="teacher_course-sub-title">Batch - {props.branch}</p>
            </div>

         </div>
        </ul>
        </>
    )
}
const courseCards=data.map(card =>{
    return (<Card key={card.id}  {...card} />)
})

const Teacherpanel = () => {
    return(
        <>
        <Navbar />
        <section className="teacher_course">
        <Sidebar />
        <div className="teacher_course-cards"> {courseCards}</div>
       
        </section>
        </>
    )
}
export default Teacherpanel;