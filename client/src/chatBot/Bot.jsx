import React from 'react'
import { Segment } from 'semantic-ui-react'
import ChatBot from 'react-simple-chatbot'
import '../App.css'
import LeftSidebar from '../component/LeftSidebar/LeftSidebar'
import RightSidebar from '../component/RightSidebar/RightSidebar'


const Bot = () => {


  const steps = [

    {

      id: "Greet",

      message: "Hello, Welcome to our shop",

      trigger: "Done",

    },

    {

      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",

    },

    {

      id: "waiting1",

      user: true,

      trigger: "Name",

    },

    {

      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues",

    },

    {

      id: "issues",

      options: [

        {

          value: "React",

          label: "React",

          trigger: "React",

        },

        { value: "Angular", label: "Angular", trigger: "Angular" },
        { value: "Javascript", label: "Javascript", trigger: "Javascript" },

      ],

    },

    {

      id: "React",

      message:

        "Thanks for letting your React issue, Our team will resolve your issue ASAP",

      end: true,

    },

    {

      id: "Angular",

      message:

        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

      end: true,

    },

    {

      id: "Javascript",

      message:

        "Thanks for letting your Javascript issue, Our team will resolve your issue ASAP",

      end: true,

    },

  ]; 



  return (



<div  className='home-container-1'  >
      <LeftSidebar/>
      <div className='home-container-2' style={{ marginTop: "120px", marginLeft: "150px"}}>
      <ChatBot steps ={steps}/>
        
        </div>

    </div>
  )
}

export default Bot