import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'
import AddEmployee from './components/addEmployee'
import DisplayEmployee from './components/displayEmployee';


function App() {
  const[Name, setName] = useState ([]);
 
  const addEmployee = ((Firstname,Lastname, Email)=>{

    setName((emp)=> [...emp,{
      firstname:Firstname,
      lastname:Lastname,
      email:Email,

    }])


    console.log(Name) ;


  })
  

  return (
    <div className="container">
   
      <AddEmployee add={addEmployee}/>
      <DisplayEmployee list= {Name}/>
    </div>
  );
}

export default App;
