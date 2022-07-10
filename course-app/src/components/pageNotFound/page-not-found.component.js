import React from 'react'
// import { useNavigate } from 'react-router'
import Header from '../common/header.component'

export const PageNotFound = () => {

    // const navigate= useNavigate();
    // const pageNotFoundHandler =() => {
    //     navigate("*")
    // }

  return (
    <div className='pagenotfound-container'>
      <h1>Error 404</h1>
      {/* <Header/> */}
        {/* <p>Error 404</p> */}
        {/* <button onClick={pageNotFoundHandler} className='home-button'>Home</button> */}
    </div>
  )
}

// export default PageNotFound