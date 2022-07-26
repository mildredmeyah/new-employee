import { async } from "@firebase/util";

//import {Table, Button} from "react-bootstrap";
import  EmployeeDataService from "../services/Employee.services";
import React, {useEffect, useState} from "react";
import { doc } from "firebase/firestore";



const EmployeeList = ({getEmployeeId}) =>{
    const[Employees, setEmployees] = useState([]);
    useEffect(()=>{
        getEmployees();

    }, []);
    const getEmployees =async()=>{
        const data = await EmployeeDataService.getAllEmployess();
        console.log(data.docs);
        setEmployees(data.docs.map((doc)=>({...doc.data(),id: doc.id})))


    
};
const deleteHandler = async(id)=>{
    await EmployeeDataService.deleteEmployee(id);
    getEmployees();
};



return(



<div>
    <div className="mb-2">
        <button variant = "dark-edit" className ="refresh"onClick={getEmployees}>refresh list</button>
    </div>
    
    <div className="tables">
    
    <table>
        
<tr>

<th>#</th>
<th>NAME</th>
<th>FIRSTNAME</th>
<th>SURNAME</th>
<th>EMAIL</th>
<th>STATUS</th>
<th>ACTION</th>


</tr>

<tbody>
    {Employees.map((doc, index)=>{
        return(
<tr key={doc.id}>
        <td>{index + 1}</td>
        <td>{doc.name}</td>
        <td>{doc.firstName}</td>
        <td>{doc.surname}</td>
        <td>{doc.email}</td>
        <td>{doc.status}</td>
        <td>
            <button variant = "secondary" className="edit" onClick ={(e)=>getEmployeeId(doc.id)}>
                Edit
            </button>
            <button variant = "danger" className="delete"onClick ={(e)=>deleteHandler(doc.id)} >
                delete
            </button>

            </td>
            </tr>

        )
    })}
    
        
</tbody>
</table>
    
    </div>
   
</div>



)


}



export default  EmployeeList;