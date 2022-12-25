import React from 'react'
import '../../App.css'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import RightSidebar from '../../component/RightSidebar/RightSidebar'
import QuestionDetails from '../Questions/QuestionDetails'

const DisplayQuestion = () => {
  return (
    <div  className='home-container-1'>
    <LeftSidebar/>
    <div className='home-container-2'>
      <QuestionDetails/>
      <RightSidebar/>
      </div>

  </div>
  )
}

export default DisplayQuestion