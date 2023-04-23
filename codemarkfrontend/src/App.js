import logo from './logo.svg';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import './App.css';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Course from './components/Course';
import Class from './components/Class';
import Assignmentpage from './components/Assignmentpage'
import Teacherpanel from './components/Teacherpanel'
import Classpanel from './components/Classpanel';
import Result from './components/Result';
function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/course" element={<Course />} />
      <Route exact path="/class" element={<Class />} />
      <Route exact path="/assignmentpage" element={<Assignmentpage />} />
      <Route exact path="/teacher" element={<Teacherpanel />} />
      <Route exact path="/classpanel" element={<Classpanel />} />
      <Route exact path="/result" element={<Result />} />
    </Routes>
  </Router>
  );
}

export default App;