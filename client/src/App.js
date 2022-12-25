
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import RoutesAll from './RoutesAll';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import { useEffect } from 'react';

import {fetchAllUsers} from './actions/users'



function App() {


  const dispatch = useDispatch()

useEffect(()=>{
 
  dispatch(fetchAllQuestions());
  dispatch(fetchAllUsers())
},[dispatch])



  return (
    <div className="App">
      <Router>
     <Navbar/>
     <RoutesAll/>
     </Router>
      
    </div>
  );
}

export default App;




//npm install axios jwt-decode moment react-copy-to-clipboard react-router-dom redux react-redux redux-thunk
//npm i bcryptjs jso cors dotenv express mongoose nodemon

// https://stack-overflow-clone-api.onrender.com