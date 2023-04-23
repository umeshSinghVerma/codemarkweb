import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Class from "./components/Class"
import Course from "./components/Course"
import Classpanel from "./components/Classpanel"
import Teacherpanel from "./components/Teacherpanel"
const ClassroomPage = () => {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Teacherpanel />} />
      <Route path="/class" element={<Classpanel />} />
    </Routes>
  </Router>
  )
}

export default ClassroomPage