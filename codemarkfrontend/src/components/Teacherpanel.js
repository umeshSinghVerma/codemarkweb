import React from "react";
// import data from './course_data';
import Classpanel from "./Classpanel";
import {useLocation, useNavigate} from 'react-router-dom';
import './Teacherpanel.css';
let arr=[];
let arr2=[];


const Navbar =()=>{
    return(
        <nav className="teacher_course--navbar">
            <div className="teacher_course--title">IIITL Classroom</div>
            <div className="teacher_course--profile">Y</div>
        </nav>
    )
}

const Card =(props)=>{
        const navigate = useNavigate();
        const handleClick = () => {
            navigate('/classpanel',{state:{arr}})};
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
              <h2 className="teacher_course-title">{props.course}</h2>
              <p className="teacher_course-sub-title">Batch - {props.class}</p>
            </div>

         </div>
        </ul>
        </>
    )
}


const Teacherpanel = () => {
    const location=useLocation();
    let datacoming = location.state;
    console.log("data",datacoming);
    // console.log("yash",datacoming);
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
    // console.log("this is assignment",datacoming[teacherkey]);
    // console.log("this is teacher",datacoming[assignmentkey]);
    for(let ikey in datacoming[teacherkey]){
        const a=datacoming[teacherkey][ikey];
        arr.push(a);
    }
    // console.log(arr) // assignent
    for(let ikey in datacoming[assignmentkey]){
        const a=datacoming[assignmentkey][ikey];
        arr2.push(a);
    }
    // console.log("yes")
    // console.log(arr2) // teacher
    const courseCards=arr2.map(card =>{
        return (<Card key={card.professor_id}  {...card} />)
    })
    // const Side=(props)=>{
    //     const navigae = useNavigate();
    //     const handlebar = () => {
    //         navigae('/classpanel',{state:{props}})};
    //     return(
    //         <li onClick={handlebar}>{props.title}</li>
    //     )
    // }
    // const Sidebar=()=>{
    //     return(
    //         <div id="teacher_course--sidebar">
    //             <span className="teacher_course--closesidebar" onClick={closeSidebar}>&times;</span>
    //                 <ul className="teacher_course--classlist">
    //                     {a}
    //                 </ul>
    //         </div>
    //     )
    // }
    
    // const a=data.map(item=>{
    //     return (<Side key={item.id} {...item} />)
    // })
    return(
        <>
        <Navbar />
        <section className="teacher_course">
        {/* <Sidebar /> */}
        <div className="teacher_course-cards"> {courseCards}</div>
       
        </section>
        </>
    )
}
export default Teacherpanel;