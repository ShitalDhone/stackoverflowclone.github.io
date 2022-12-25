import React from 'react'
import { Link } from 'react-router-dom'

const WidgetTags = () => {

  const tags = ['c', 'css',  'express', 'firebase', 'html', 'java', 'javascript','mern','mongodb',
  'mysql','next.js','node.js','php','python','reactjs']
  
  return (
    <div className='widget-tags'>
      <h4>Watched tags</h4>
      <div  className='widget-tags-div'>
     {tags.map(tag=>{
      return (
        <Link to = '/Tags' style={{textDecoration: "none", color:"#009dff"}}>
        <p key={tag}>{tag}</p>
        </Link>
      )
     })}
      </div>

    </div>
  )
}

export default WidgetTags