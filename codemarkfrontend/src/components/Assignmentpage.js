import React from 'react'
import './Assignmentpage.css'
const openSidebar=()=>{
    document.getElementById("student_class--sidebar").style.width="250px";
}
const closeSidebar=()=>{
    document.getElementById("student_class--sidebar").style.width="0";
}
export default function Assignmentpage() {
    const Navbar =()=>{
        return(
            <nav className="student_class--navbar">
                <div className="student_class--menu" onClick={openSidebar}>&#9776;</div>
                <div className="student_class--title">IIITL Classroom</div>
                <div className="student_class--profile">Y</div>
            </nav>
        )
    }
    const Sidebar=()=>{
        return(
            <div id="student_class--sidebar">
                <span className="student_class--closesidebar" onClick={closeSidebar}>&times;</span>
                    <ul className="student_class--classlist">
                        <li>Teacher</li>
                        <li>Student</li>
                        <li>Anyone</li>
                    </ul>
            </div>
        )
    }
    function SubHead() {
        return (
            <>
            <div className="student_class--hero">
                OOPS<p className="student_class-branch">CS - KT</p>
                </div>
            </>
        )
    }

    function Description() {
        return (
            <div class="description">
                Both codes use similar approaches to finding pairs of elements that sum to a given value, but Code 1 uses nested loops to compare each pair of elements in the array, while Code 2 uses a single loop to compare each element with every other element in the array. Code 1's approach is less efficient than Code 2's approach, as it checks some pairs of elements multiple times, but it is more reliable as it guarantees that all pairs of elements are checked.
                Both codes use similar approaches to finding pairs of elements that sum to a given value, but Code 1 uses nested loops to compare each pair of elements in the array, while Code 2 uses a single loop to compare each element with every other element in the array. Code 1's approach is less efficient than Code 2's approach, as it checks some pairs of elements multiple times, but it is more reliable as it guarantees that all pairs of elements are checked.
            </div>
        )
    }
    function myFunction(){
        var copyText = document.getElementById("assign-code");
        navigator.clipboard.writeText(copyText.innerText);
    }
    function AssignCode() {
        return (
            <div className="assign-submit">
                <span>Assignment Code -</span>
                <div className="assignment-code" id="assign-code" onClick={myFunction}>ABFD1289</div>
                <button className="assign-submit-button">Submit</button>
            </div>
        )
    }
  return (
    <>
            <Navbar />
        <div className="student_class-page">
            <Sidebar />
            <div className="student_class">
                <div className="student_class--hero">
                OOPS<p className="student_class-branch">CS - KT</p>
                </div>
                <div className="student_class-sections">
                       <div className="student_class-notes">
                        <h4>ASSIGNMENT</h4>
                           <Description />
                       </div>
                       <div className="student_class-assignments">
                       {/* <h4>ASSIGNMENTS</h4> */}
                           <AssignCode />
                       </div>
                </div>
            </div>
        </div>
    </>
  )
}