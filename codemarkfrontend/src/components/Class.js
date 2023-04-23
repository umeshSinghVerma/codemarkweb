import React, {useRef, useState}from "react";
import {useLocation,useNavigate} from 'react-router-dom';
// import data from './course_data';
import './Class.css'



const Navbar =()=>{
    return(
        <nav className="student_class--navbar">
            <div className="student_class--title">IIITL Classroom</div>
            <div className="student_class--profile">Y</div>
        </nav>
    )
}

const Class=()=>{
    const navigate = useNavigate();
    

    let location = useLocation();
    let s=location.state.arr.length;
    console.log(location.state)
    const Assignment=(props)=>{
        return(
            <div onClick={handleassignmentrender} className="student_class-assignment">
                <img src="https://static.thenounproject.com/png/3632613-200.png" alt="image" />
                <div className="student_class-assignment-deatils">
                    <p><a href="#">{props.a_name}</a></p>
                    <p>{props.d_date!="false"?"Due - "+props.d_date: 'Completed'}</p>
                </div>
            </div>
        )
    }
    const CAssignment=(props)=>{
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
    const Assignments=(value)=>{
        let a_name=' ';
        let d_date=' ';
        let assigns='';
        // console.log(value)
        assigns=value.value.map((item,i)=>{
            if(!item.complete){
                a_name=item.assignment_name
                d_date=item.due_date
                return(
                    <Assignment key={item.assignment_id} a_name={a_name} d_date={d_date}></Assignment>
                )
            }
        })        
        return(
            <>
            {assigns}
            </>
        )
    }
    const Cassignments=(value)=>{
        let a_name=' ';
        let d_date='false';
        let cassigns='';
        // console.log(arr)
        cassigns=value.value.map(item=>{
            if(item.complete){
                a_name=item.assignment_name
                return(
                    <CAssignment key={item.assignment_id} a_name={a_name} d_date={d_date}></CAssignment>
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
    const handleresult=()=>{
        navigate('/result')
    }
    // console.log("beta")
    // console.log(location.state.arr)
    // console.log(location.state.props)

    const handleassignmentrender=()=>{
        navigate('/assignmentpage',{state:{}})
    }
    return(
        <>
        <Navbar />
        <div className="student_class-page">
            <div className="student_class">
                <div className="student_class--hero">
                {location.state.props.course}<p className="student_class-branch">{location.state.props.class}<br />{location.state.props.name}</p>
                </div>
                <div className="student_class-sections">
                       <div className="student_class-assignments-main">
                       <h4>ASSIGNMENTS</h4>
                            <Assignments value={location.state.arr}/>
                            <div className="student_class-assigndrop" onClick={showNavbar}>Completed Assignments &#8595;</div>
                            {se&&<div className='Landing-login-assign' onClick={handleresult}><Cassignments value={location.state.arr}/></div>}
                        </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Class;