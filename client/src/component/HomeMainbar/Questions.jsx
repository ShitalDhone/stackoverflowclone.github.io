import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import "./HomeMainbar.css"

const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
      <div className='display-votes-ans'>
     <p>{question.upVote.length - question.downVote.length}</p>
     <p>Votes</p>
      </div>
      <div className='display-votes-ans'>
        <p>{question.noOfAnswers}</p>
        <p>Answers</p>
        </div>
        <div  className="display-question-details">
       <Link to={`/Questions/${question._id}`} className='question-title-link'>{question.questionTitle}</Link>
       <div className='display-tags-time'>
       <div  className='display-tags'>
       {
        question.questionTags.map((tag)=>{
          return(
            
            <Link to = '/Tags' style={{textDecoration: "none", color:"#009dff"}}>
            <p key={tag}>{tag}</p>
            </Link>
          )
        })
       }
       </div>
       <p className='display-time'>
        Asked{moment(question.askedOn).fromNow()} By {question.userPosted}
       </p>
       </div>
        </div>

    </div>
  )
}

export default Questions