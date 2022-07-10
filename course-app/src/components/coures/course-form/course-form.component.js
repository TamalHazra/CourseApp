import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'

const defaultFormFeilds = {
    title: '',
    authorId: '',
    category: ''
}

export const CourseForm = () => {
  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds)
  const { title, authorId, category } = formFeilds

  const resetFormFeilds = () => {
      setFormFeilds(defaultFormFeilds)
  }

  const changeHandle = (event) => {
      const { name, value } = event.target
      setFormFeilds({ ...formFeilds, [name]: value })
  }

  const submitHandle = async (event) => {
      event.preventDefault()
      if (title.length < 3  || category.length < 3) {
          alert('Data Insufficient')
      }
      try {
          const { courses } = await resetFormFeilds()
          console.log(courses)
      } catch (error) {
          
          console.log(` ${error}`)
      }
  }

  return (
      <div className=''>
          <form onSubmit={submitHandle} className='course-form_control' >
              <FormInput
                  type='text'
                  required
                  onChange={ changeHandle}
                  name='title'
                  value={title}
                  placeholder='Title' />

              <FormInput
                  type='number'
                  required
                  onChange={ changeHandle}
                  name='authorId'
                  value={authorId}
                  placeholder='Author Id' />

              <FormInput
                  type='text'
                  required
                  onChange={ changeHandle}
                  name='category'
                  value={category}
                  placeholder='Category' />

              <button type='submit'>Add Course</button>
          </form>
      </div>
  )
}


// import React, { useState } from "react";
// import "./course-form.styles.css";

// const CourseForm = (props) => {

//   const [enteredTitle,setEnteredTitle] = useState('')
//   const [enteredAuthorId,setEnteredAuthorId] = useState('')
//   const [enteredCategory,setEnteredCategory] = useState('')
//   // const [data,setData] = useState({})

//   const titleChangeHandler = (event)=>{
//     setEnteredTitle(event.target.value);

//     // const title = event.target.value;
//     // setData({ ...data, title });
//   }
//   const authorIdChangeHandler = (event)=>{
//     setEnteredAuthorId(event.target.value)
//   }
//   const categoryChangeHandler = (event)=>{
//     setEnteredCategory(event.target.value)
//   }

//   const submitHandler=(event)=>{
//     event.preventDefault()

//     const courseData={
//       title: enteredTitle,
//       authorId: enteredAuthorId,
//       category: enteredCategory
//     }

//     props.onSaveCourseData(courseData)

//     setEnteredTitle('')
//     setEnteredAuthorId('')
//     setEnteredCategory('')
//   }

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="course-form_control">
//         <div className="course-form_control">
//           <label>Title</label>
//           <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
//         </div>
//         <div className="course-form_control">
//           <label>AuthorId</label>
//           <input type="number" min="1" max="3" value={enteredAuthorId} onChange={authorIdChangeHandler}></input>
//         </div>
//         <div className="course-form_control">
//           <label>Category</label>
//           <input type="text" value={enteredCategory} onChange={categoryChangeHandler}></input>
//         </div>
//         <div className="course-form_actions">
//           <button type="submit" onChange={ submitHandler}>Add Course</button>
//         </div>
//         <div className="course-form_actions">
//           <button type="submit">Delete</button>
//           </div>
//       </div>
//     </form>
//   );
// };

// export default CourseForm;



