// import React, {useState, useEffect} from "react";
// import axios from "axios";

//  const CourseList = () => {   //Courses

//     const [courses , setCourse] = useState([]);
//   useEffect(()=>{
//     const fetchData = async() => {
//       const response = await axios.get("http://localhost:5000/courses");  //https://jsonplaceholder.typicode.com/users
//       setCourse(response.data)
//     }
//     fetchData();
//   },[])

//   return (
//     <div>
//       <h1>List of Courses</h1>
//       {courses.map(item=>(<li>{item.title}</li>))}
//     </div>

// export const CourseList = (Courses) => {

//     const {title, authorId, category} = Courses

//     return (
//         <div>
//         <table>
//             <thead>
//                 <tr>
//                     <th>Title</th>
//                     <th>AuthorId</th>
//                     <th>Category</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>{Courses.title}</td>
//                     <td>{Courses.authorId}</td>
//                     <td>{Courses.category}</td>
//                 </tr>
//             </tbody>
//         </table>
//         </div>
//     )
//  }

// export default CourseList

import "./course-list.styles.css";
import React from "react";
import { response } from "express";

class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        title: "",
        authorId: "",
        category: ""
 };
  }
  callAPI() {
    fetch("http://localhost:9000/api")
      .then((res) => res.text())
      .then((res) => this.setState({ 
        response: res
       }));
  }
  
  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <table>
             <thead>
                 <tr>
                     <th>Title</th>
                     <th>AuthorId</th>
                     <th>Category</th>
                 </tr>
             </thead>
             <tbody>
                <tr>
                    <td>
            {this.state.response}
            </td>
  </tr>
             </tbody>
</table>
        </header>
      </div>
    );
  }
}
export default CourseList;