


import {useState} from "react";

import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';


function App() {
  const [employeeId, setEmployeeId] = useState("");

  const getEmployeeIdHandler = (id) =>{
    console.log("the id of the document to be edited", id);
    setEmployeeId(id);

  };
  return (
    
    <div className="App">
      <div>
      <div>
      
      
      <AddEmployee id={employeeId} setEmployeeId={setEmployeeId}/>
      
      </div>
      <div>

   
      <EmployeeList getEmployeeId ={getEmployeeIdHandler}/>
     
      

      </div>
     </div>
     </div> 
  );
}

export default App;
