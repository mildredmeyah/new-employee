import { db } from "../firebase";
import employeedataservice from  "../sevices/employeeservices"

import {
     collection,
     getDocs,
      getDoc ,
       addDoc,
        updateDoc,
         deleteDoc,
          doc
         } from "firebase/firestore";
const employeecollectionRef = collection(db, "employees")
 class employeedataservice{
    addEmployee = (newemplyee) =>{
        return addDoc(employeecollectionRef , newemplyee)
    };
    updateEmployee = (id, updateEmployee) =>{
        const employeeDoc = doc(db, "employees" , id);
        return updateDoc (employeeDoc, updateEmployee)

    };
    deleteemployee = (id) =>{
        const employeeDoc = doc(db, "employees" , id);
        return deleteDoc(employeeDoc)
    };
    getAllEmployees = () =>{
        return getDoc(employeecollectionRef);
    };
    getEmployee = (id) =>{
        const employeeDoc = doc(db, "employees", id);
        return getDocs(employeeDoc)
    }
    

 }
 export default new EmployeeDataService();