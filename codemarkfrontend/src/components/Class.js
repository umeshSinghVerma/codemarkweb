import React, {useRef, useState}from "react";
import {useLocation,useNavigate} from 'react-router-dom';
import data from './course_data';
import './Class.css'

const openSidebar=()=>{
    document.getElementById("student_class--sidebar").style.width="250px";
}
const closeSidebar=()=>{
    document.getElementById("student_class--sidebar").style.width="0";
}

const Navbar =()=>{
    return(
        <nav className="student_class--navbar">
            <div className="student_class--menu" onClick={openSidebar}>&#9776;</div>
            <div className="student_class--title">IIITL Classroom</div>
            <div className="student_class--profile">Y</div>
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
        <div id="student_class--sidebar">
            <span className="student_class--closesidebar" onClick={closeSidebar}>&times;</span>
                <ul className="student_class--classlist">
                    {a}
                </ul>
        </div>
    )
}

const a=data.map(item=>{
    return (<Side key={item.id} {...item} />)
})
const Class=()=>{
    const location = useLocation();
    const Assignment=(props)=>{
        return(
            <div className="student_class-assignment">
                <img src="https://static.thenounproject.com/png/3632613-200.png" alt="image" />
                <div className="student_class-assignment-deatils">
                    <p><a href="#">{props.a_name}</a></p>
                    <p>{props.d_date!="false"?"Due - "+props.d_date: 'Completed'}</p>
                </div>
            </div>
        )
    }
    const Assignments=(props)=>{
        let a_name=' ';
        let d_date=' ';
        let assigns='';
        assigns=props.value.assignments.map(item=>{
            if(!item.complete){
                a_name=item.name
                d_date=item.due
                return(
                    <Assignment key={item.key} a_name={a_name} d_date={d_date}></Assignment>
                )
            }
        })
        
        // if(props.value.assignments[0].complete){
        //     a_name="No due Assignments";
        //     assigns=[
        //         <Assignment key="1" a_name={a_name} d_date={d_date} />
        //     ]
        // }
        // else{
        //     assigns=props.value.assignments.map(
        //         (item)=>{
        //             a_name=item.name
        //             d_date=item.due
        //             return(
        //                 <Assignment key={item.key} a_name={a_name} d_date={d_date}></Assignment>
        //             )
        //         }
        //     )
            
        // }
        return(
            <>
            {assigns}
            </>
        )
    }
    const Cassignments=(props)=>{
        let a_name=' ';
        let d_date='false';
        let cassigns='';
        console.log(props)
        cassigns=props.value.assignments.map(item=>{
            if(item.complete){

                a_name=item.name
                return(
                    <Assignment key={item.key} a_name={a_name} d_date={d_date}></Assignment>
                )
            }
        })
        return(
            <>
            {cassigns}
            </>
        )
    }
    const [se,setSe]=useState(false)
    const showNavbar=()=>{
        setSe((prev)=>!prev)
    }
    return(
        <>
        <Navbar />
        <div className="student_class-page">
            <Sidebar />
            <div className="student_class">
                <div className="student_class--hero">
                {location.state.props.title}<p className="student_class-branch">{location.state.props.branch}<br />{location.state.props.faculty}</p>
                </div>
                <div className="student_class-sections">
                       <div className="student_class-assignments">
                       <h4>ASSIGNMENTS</h4>
                            <Assignments value={location.state.props}/>
                            <div className="student_class-assigndrop" onClick={showNavbar}>Completed Assignments &#8595;</div>
                            {se&&<div className='Landing-login' ><Cassignments value={location.state.props}/></div>}
                        </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Class;