import React, {useRef, useState}from "react";
// import data from './course_data';
import './Result.css'

const Navbar =()=>{
    return(
        <nav className="result-page--navbar">
            <div className="result-page--title">IIITL Classroom</div>
            <div className="result-page--profile">Y</div>
        </nav>
    )
}

const Result=()=>{
    const Assignment=(props)=>{
        return(
            <div className="result-page-assignment">
                <img src="https://static.thenounproject.com/png/3632613-200.png" alt="image" />
                <div className="result-page-assignment-deatils">
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
        <div className="result-page-page">
            <div className="result-page">
                <div className="result-page--hero">
                OOPS (2K23)<p className="result-page-branch">Branch - CS,IT</p>
                </div>
                <h2>Result</h2>
                <div className="result-page-sections" id="result-page-sections">
                    <div className="Landing-login">
                        <h4>Factorial</h4>
                        <p style={{fontSize:12}}>CS101_B1_1</p>
                        <p style={{fontSize:12}}>Score: 3/10</p>
                        <p style={{fontSize:12}}>Plag Report : 38%</p>
                    </div>               
                    <div className="Landing-login">
                        <h4>Fibonacci</h4>
                        <p style={{fontSize:12}}>CS101_B1_2</p>
                        <p style={{fontSize:12}}>Score: 3/10</p>
                        <p style={{fontSize:12}}>Plag Report : 78%</p>
                    </div>               
                    <div className="Landing-login">
                        <h4>Matrix Sum</h4>
                        <p style={{fontSize:12}}>CS101_B1_3</p>
                        <p style={{fontSize:12}}>Score: 8/10</p>
                        <p style={{fontSize:12}}>Plag Report : 28%</p>
                    </div>               
                    <div className="Landing-login">
                        <h4>Armstrong Number</h4>
                        <p style={{fontSize:12}}>CS101_B1_4</p>
                        <p style={{fontSize:12}}>Score: 4/5</p>
                        <p style={{fontSize:12}}>Plag Report : 60%</p>
                    </div>               
                    <div className="Landing-login">
                        <h4>Binary Search</h4>
                        <p style={{fontSize:12}}>CS101_B1_5</p>
                        <p style={{fontSize:12}}>Score: 4/10</p>
                        <p style={{fontSize:12}}>Plag Report : 33%</p>
                    </div>               
                </div>
            </div>
        </div>
    </>
    )
}
export default Result;