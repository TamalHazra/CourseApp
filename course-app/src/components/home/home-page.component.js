import React, { Fragment} from "react";
import './home-page.styles.css'
// import Course from "../coures/courses/course.component";
// import Header from "../common/header.component";
import '../../assets/image1.jpg'

export const HomePage = () => {
  return (
    <div className="homePage-container">
      <h1>This is for Learning Code</h1>
    <div>
    <img  className="image-container" src={require("../../assets/image1.jpg")}/></div>
    </div>
  );
};
// export default HomePage;
