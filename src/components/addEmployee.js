import React, {useEffect, useState} from "react";
import { Form, Alert,InputGroup,Button, ButtonGroup } from "react-bootstrap";
import  EmployeeDataService from "../services/Employee.services";
import {Row, Col, Container} from "react-bootstrap";
import { async } from "@firebase/util";



const AddEmployee =({id,setEmployeeId}  )=>{
    const [name, setName]= useState("");
    const  [firstName, setfirstName]= useState("");
    const [surname, setSurname]= useState("");
    const [email, setEmail]= useState("");
    const [status, setStatus]= useState("permanent");
    
    const [message, setMessage] = useState({error:false, msg:""})

    const handleSubmit =async (e)=>{
        e.preventDefault();
        setMessage("");
        if(name === "" || firstName ===""){

            setMessage({error:true, msg:"all fields are mandatory"});
            return;
        }
        const newEmployee = {
            name,
            firstName,
            surname,
            email,
            status
        };
        console.log(newEmployee);
        try{
            if (id !== undefined && id !== ""){
                await EmployeeDataService.updateEmployee(id,newEmployee); 
            setEmployeeId("");
            
                
                setMessage({error:false, msg: "update succesfully"});
               
            }else{
                await EmployeeDataService.addEmployees(newEmployee); 
            
                
                setMessage({error:false, msg: "new employee added succesfully"});
               

            }
           
           
            }
            
           
     catch(err){
            setMessage({error:true, msg:err.message});
        }
        setName("");
        setfirstName("");
        setSurname("");
        setEmail("");
        setStatus("");
        
    };

    const editHandler = async()=>{
        setMessage("");
        try{
            
            const docSnap = await EmployeeDataService.getEmployee(id);
            console.log("the record is", docSnap.data());
            setName(docSnap.data().name);
            setfirstName(docSnap.data().firstName);
            setSurname(docSnap.data().surname);
            setEmail(docSnap.data().email);
            setStatus(docSnap.data().status);
        }catch(err){
            setMessage({error:true, msg:err.message});


        }
    }
    useEffect(()=>{
     
        console.log("the id is here",id);
        if (id !== undefined && id !== ""){
            editHandler();
        }

    },[id]);

    

    return(
        <>
        <div class ="p-box">
        {message?.msg &&(<Alert variant={message?.error? "danger  ": "success"}dismissible onClose={()=> setMessage("")}
        >
            {message?.msg}
        </Alert>)}
     
            <Form onSubmit={handleSubmit}>
                <h3>New Employee</h3>
                <Form.Group className="mb-3" controlId ="employeeForm">
                    <InputGroup>
                    <InputGroup.Text className="employeeForm">Name</InputGroup.Text>
                    <Form.Control type="text" placeholder ="name"className="F-Group" value={name} onChange={(e)=>setName(e.target.value)} />
            
            </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId ="employeeForm">
                    <InputGroup>
                    <InputGroup.Text className ="employeeForm">Firstname</InputGroup.Text>
                    <Form.Control type="text" placeholder ="firstName" className="F-Group"value={firstName}onChange={(e)=>setfirstName(e.target.value)}  />
            
            </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId ="employeeForm">
                    <InputGroup>
                    <InputGroup.Text className ="employeeForm">surname</InputGroup.Text>
                    <Form.Control type="text" placeholder ="surname" className="F-Group" value={surname}onChange={(e)=>setSurname(e.target.value)} />
            
            </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId ="employeeForm">
                    <InputGroup>
                    <InputGroup.Text className ="employeeForm">Email</InputGroup.Text>
                    <Form.Control type="text" placeholder ="email"className="F-Group" value={email} onChange={(e)=>setEmail(e.target.value)} />
            
            </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId ="employeeForm">
                    <InputGroup>
                    <InputGroup.Text className ="employeeForm">status</InputGroup.Text>
                    <Form.Control type="text" placeholder ="status" className="F-Group"value={status}onChange={(e)=>setStatus(e.target.value)} />
            
            </InputGroup>
            </Form.Group>
            <ButtonGroup>
                <Button variant="primary" type="Submit" className="btn">
                    Add/Update
                </Button>
            </ButtonGroup>
            </Form>
            
</div>
            </>
            
            
                   
    )

    












}


export default AddEmployee;