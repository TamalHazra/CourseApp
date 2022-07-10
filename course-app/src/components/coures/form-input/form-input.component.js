import React from 'react'
import './form-input.styles.css'

const formInput = ({...otherProps}) => {
  return (
    <div className='formInput-container'>
        <input className='form' {...otherProps}/>
    </div>
  )
}

export default formInput