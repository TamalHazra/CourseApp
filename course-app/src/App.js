import React from "react";  //{ useEffect}
// import { useDispatch } from "react-redux";
import "./App.css";
// import axios from "axios";
// import { setCourse } from "./components/store/course/course.action";
import {PageNotFound} from "./components/pageNotFound/page-not-found.component";
import {About} from "./components/about/about-page.component";
import {HomePage} from "./components/home/home-page.component";
import { Routes, Route } from "react-router";
import Header from "./components/common/header.component";
import {Course} from "./components/coures/courses/course.component";

const App = () => {
  // const dispatch = useDispatch();
  // const courseUrl = 'http://localhost:5000/courses'
  
  // useEffect(() => {
  //   axios.get(courseUrl).then((response) => {
  //     dispatch(setCourse(response.data));
  //   });
  // }, []);

  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Header />}/>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/api" element={<Course />}/>
      <Route path="/about" element={<About />}/>
      <Route path="*" element={<PageNotFound />}/>
      </Routes>
      </div>
  );
};

export default App;
