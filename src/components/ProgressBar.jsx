/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import'./ProgressBar.css' ;


const ProgressBar = ({ progress = 0}) => {
  return (
    <div className='progress-bar'>
        <div className='progress-fill' style={{transform:`translateX(${progress - 100}%)`}}>

        </div>
    </div>
  )
}
  
export default ProgressBar