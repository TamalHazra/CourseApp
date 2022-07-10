import React from 'react'
import './course.styles.css'
import {CourseForm} from '../course-form/course-form.component'
import  CourseList  from '../course-list/course-list.component'
// import { useSelector } from 'react-redux'
// import { selectIsCourseShow } from '../../store/course/course.selector'


export const Course = (props) => {

// const courseItems=useSelector(selectIsCourseShow)

  // const {Courses}=props.courses

  console.log(props)

  return (
    <div className='course-container'>
      <CourseForm/>
      <CourseList/>
      {/* {courseItems.map(Courses=><CourseList key={Courses.id} courses={Courses}/>)} */}
      
    </div>
  )

}

//   const saveCourseDataHandler=(enteredCourseData)=>{

//     const courseData={
//       ...enteredCourseData,
//       id:Math.random().toString()
//     }
// console.log(courseData)
//   }

//   return (
//     <div className='course'>
//         <CourseForm onSaveCourseData={ saveCourseDataHandler}/>
//     </div>
//   )
// }

// export default Course